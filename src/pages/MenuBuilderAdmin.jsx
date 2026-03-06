import React, { useDeferredValue, useEffect, useMemo, useRef, useState } from 'react';
import {
  Alert,
  Box,
  Button,
  Chip,
  Divider,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
  Paper,
  Select,
  Snackbar,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography,
} from '@mui/material';
import { GripVertical, Link2, Plus, Save, Search, Trash2 } from 'lucide-react';

const MENU_LABELS = {
  main: 'Main Menu',
  mobile: 'Mobile Menu',
  footer: 'Footer Menu',
};

const EMPTY_CUSTOM_LINK = { label: '', url: '' };

function buildTree(items) {
  const nodes = new Map();
  const roots = [];

  items.forEach((item) => {
    nodes.set(item.id, { ...item, children: [] });
  });

  items.forEach((item) => {
    const node = nodes.get(item.id);
    if (!node) return;
    if (item.parentId && nodes.has(item.parentId)) {
      nodes.get(item.parentId).children.push(node);
      return;
    }
    roots.push(node);
  });

  return roots;
}

function flattenTree(items) {
  const rows = [];
  const walk = (nodes, depth = 0) => {
    nodes.forEach((node) => {
      rows.push({ ...node, depth });
      if (node.children?.length) {
        walk(node.children, depth + 1);
      }
    });
  };
  walk(buildTree(items));
  return rows;
}

function collectDescendantIds(items, id) {
  const childrenByParent = new Map();
  items.forEach((item) => {
    const parentId = item.parentId || '';
    if (!childrenByParent.has(parentId)) {
      childrenByParent.set(parentId, []);
    }
    childrenByParent.get(parentId).push(item.id);
  });

  const result = new Set();
  const stack = [id];
  while (stack.length) {
    const current = stack.pop();
    const children = childrenByParent.get(current) || [];
    children.forEach((childId) => {
      if (!result.has(childId)) {
        result.add(childId);
        stack.push(childId);
      }
    });
  }
  return result;
}

function moveBlockBeforeTarget(items, draggedId, targetId) {
  if (!draggedId || !targetId || draggedId === targetId) {
    return items;
  }

  const descendants = collectDescendantIds(items, draggedId);
  if (descendants.has(targetId)) {
    return items;
  }

  const dragged = items.find((item) => item.id === draggedId);
  const target = items.find((item) => item.id === targetId);
  if (!dragged || !target) {
    return items;
  }

  const blockIds = new Set([draggedId, ...descendants]);
  const block = items
    .filter((item) => blockIds.has(item.id))
    .map((item) => (item.id === draggedId ? { ...item, parentId: target.parentId || '' } : item));
  const remainder = items.filter((item) => !blockIds.has(item.id));
  const targetIndex = remainder.findIndex((item) => item.id === targetId);
  if (targetIndex === -1) {
    return items;
  }

  const next = [...remainder];
  next.splice(targetIndex, 0, ...block);
  return next;
}

function moveBlockAfterTarget(items, draggedId, targetId, parentIdOverride) {
  if (!draggedId || !targetId || draggedId === targetId) {
    return items;
  }

  const descendants = collectDescendantIds(items, draggedId);
  if (descendants.has(targetId)) {
    return items;
  }

  const dragged = items.find((item) => item.id === draggedId);
  const target = items.find((item) => item.id === targetId);
  if (!dragged || !target) {
    return items;
  }

  const blockIds = new Set([draggedId, ...descendants]);
  const block = items
    .filter((item) => blockIds.has(item.id))
    .map((item) =>
      item.id === draggedId
        ? { ...item, parentId: parentIdOverride ?? (target.parentId || '') }
        : item
    );
  const remainder = items.filter((item) => !blockIds.has(item.id));
  const targetIndex = remainder.findIndex((item) => item.id === targetId);
  if (targetIndex === -1) {
    return items;
  }

  let insertIndex = targetIndex + 1;
  const targetDescendants = collectDescendantIds(remainder, targetId);
  while (insertIndex < remainder.length && targetDescendants.has(remainder[insertIndex].id)) {
    insertIndex += 1;
  }

  const next = [...remainder];
  next.splice(insertIndex, 0, ...block);
  return next;
}

function moveItemToParent(items, itemId, parentId) {
  const descendants = collectDescendantIds(items, itemId);
  if (parentId && descendants.has(parentId)) {
    return items;
  }

  const blockIds = new Set([itemId, ...descendants]);
  const block = items
    .filter((item) => blockIds.has(item.id))
    .map((item) => (item.id === itemId ? { ...item, parentId: parentId || '' } : item));
  const remainder = items.filter((item) => !blockIds.has(item.id));

  let insertIndex = remainder.length;
  if (parentId) {
    const parentIndex = remainder.findIndex((item) => item.id === parentId);
    if (parentIndex !== -1) {
      insertIndex = parentIndex + 1;
      const parentDescendants = collectDescendantIds(remainder, parentId);
      while (
        insertIndex < remainder.length &&
        parentDescendants.has(remainder[insertIndex].id)
      ) {
        insertIndex += 1;
      }
    }
  } else {
    const topLevelIndexes = remainder
      .map((item, index) => ({ item, index }))
      .filter(({ item }) => !item.parentId);
    insertIndex = topLevelIndexes.length ? topLevelIndexes[topLevelIndexes.length - 1].index + 1 : remainder.length;
  }

  const next = [...remainder];
  next.splice(insertIndex, 0, ...block);
  return next;
}

function removeItemBlock(items, itemId) {
  const descendants = collectDescendantIds(items, itemId);
  const blockIds = new Set([itemId, ...descendants]);
  return items.filter((item) => !blockIds.has(item.id));
}

function appendItem(items, item) {
  return [...items, item];
}

function insertItemUnderParent(items, item, parentId) {
  const nextItems = [...items, { ...item, parentId: parentId || '' }];
  return parentId ? moveItemToParent(nextItems, item.id, parentId) : nextItems;
}

function itemLabel(item) {
  if (!item) return 'Untitled';
  return item.label || (item.type === 'page' ? `Page #${item.pageId}` : 'Untitled');
}

export default function MenuBuilderAdmin() {
  const [menus, setMenus] = useState({});
  const [labels, setLabels] = useState(MENU_LABELS);
  const [activeMenu, setActiveMenu] = useState('main');
  const [selectedId, setSelectedId] = useState('');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');
  const [pageQuery, setPageQuery] = useState('');
  const deferredPageQuery = useDeferredValue(pageQuery);
  const [pageResults, setPageResults] = useState([]);
  const [customLink, setCustomLink] = useState(EMPTY_CUSTOM_LINK);
  const [draggedId, setDraggedId] = useState('');
  const [dragIntent, setDragIntent] = useState(null);
  const [hoveredId, setHoveredId] = useState('');
  const [childDialogParentId, setChildDialogParentId] = useState('');
  const [childAddMode, setChildAddMode] = useState('page');
  const [childPageQuery, setChildPageQuery] = useState('');
  const [childPageResults, setChildPageResults] = useState([]);
  const [childCustomLink, setChildCustomLink] = useState(EMPTY_CUSTOM_LINK);
  const deferredChildPageQuery = useDeferredValue(childPageQuery);
  const [unlockedIds, setUnlockedIds] = useState([]);
  const [confirmState, setConfirmState] = useState({ open: false, type: '', itemId: '', title: '' });
  const [isPrimarySaveVisible, setIsPrimarySaveVisible] = useState(true);
  const primarySaveRef = useRef(null);

  const apiRoot = window.wingateAdminData?.root || '/wp-json/';
  const nonce = window.wingateAdminData?.nonce || '';
  const authHeaders = {
    'Content-Type': 'application/json',
    'X-WP-Nonce': nonce,
  };

  useEffect(() => {
    let mounted = true;
    const load = async () => {
      setLoading(true);
      setError('');
      try {
        const res = await fetch(`${apiRoot}wingate/v1/menu-builder`, { headers: authHeaders });
        if (!res.ok) throw new Error('Failed to load menu builder data.');
        const data = await res.json();
        if (!mounted) return;
        const nextMenus = data?.menus || {};
        setMenus(nextMenus);
        setLabels(data?.labels || MENU_LABELS);
        const initialMenu = nextMenus.main ? 'main' : Object.keys(nextMenus)[0] || 'main';
        setActiveMenu(initialMenu);
        setSelectedId(nextMenus[initialMenu]?.[0]?.id || '');
      } catch (loadError) {
        if (mounted) setError(loadError.message || 'Failed to load menu builder.');
      } finally {
        if (mounted) setLoading(false);
      }
    };
    load();
    return () => {
      mounted = false;
    };
  }, [apiRoot]);

  useEffect(() => {
    const query = deferredPageQuery.trim();
    if (query.length < 2) {
      setPageResults([]);
      return;
    }

    let mounted = true;
    const timer = setTimeout(async () => {
      try {
        const res = await fetch(`${apiRoot}wingate/v1/menu-builder/pages?search=${encodeURIComponent(query)}`, {
          headers: authHeaders,
        });
        if (!res.ok) throw new Error('Search failed.');
        const data = await res.json();
        if (mounted) setPageResults(Array.isArray(data) ? data : []);
      } catch (searchError) {
        if (mounted) setError(searchError.message || 'Search failed.');
      }
    }, 180);

    return () => {
      mounted = false;
      clearTimeout(timer);
    };
  }, [deferredPageQuery, apiRoot]);

  useEffect(() => {
    const query = deferredChildPageQuery.trim();
    if (!childDialogParentId || childAddMode !== 'page' || query.length < 2) {
      setChildPageResults([]);
      return;
    }

    let mounted = true;
    const timer = setTimeout(async () => {
      try {
        const res = await fetch(`${apiRoot}wingate/v1/menu-builder/pages?search=${encodeURIComponent(query)}`, {
          headers: authHeaders,
        });
        if (!res.ok) throw new Error('Search failed.');
        const data = await res.json();
        if (mounted) setChildPageResults(Array.isArray(data) ? data : []);
      } catch (searchError) {
        if (mounted) setError(searchError.message || 'Search failed.');
      }
    }, 180);

    return () => {
      mounted = false;
      clearTimeout(timer);
    };
  }, [deferredChildPageQuery, childDialogParentId, childAddMode, apiRoot]);

  useEffect(() => {
    const target = primarySaveRef.current;
    if (!target || typeof IntersectionObserver === 'undefined') {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsPrimarySaveVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  const currentItems = menus[activeMenu] || [];
  const flattened = useMemo(() => flattenTree(currentItems), [currentItems]);
  const selectedItem = currentItems.find((item) => item.id === selectedId) || null;
  const canEditSelected = selectedItem ? !selectedItem.locked || unlockedIds.includes(selectedItem.id) : false;

  const parentOptions = useMemo(() => {
    if (!selectedItem) return flattened;
    const descendants = collectDescendantIds(currentItems, selectedItem.id);
    return flattened.filter((row) => row.id !== selectedItem.id && !descendants.has(row.id));
  }, [flattened, currentItems, selectedItem]);

  const updateCurrentMenu = (updater) => {
    setMenus((currentMenus) => {
      const nextItems = updater(currentMenus[activeMenu] || []);
      return {
        ...currentMenus,
        [activeMenu]: nextItems,
      };
    });
  };

  const updateSelectedField = (field, value) => {
    if (!selectedItem) return;
    updateCurrentMenu((items) =>
      items.map((item) => (item.id === selectedItem.id ? { ...item, [field]: value } : item))
    );
  };

  const handleParentChange = (event) => {
    if (!selectedItem || !canEditSelected) return;
    const nextParentId = event.target.value;
    updateCurrentMenu((items) => moveItemToParent(items, selectedItem.id, nextParentId));
  };

  const addPageItem = (page, parentId = '') => {
    const newId = `page-${page.id}-${Date.now()}`;
    updateCurrentMenu((items) =>
      insertItemUnderParent(items, {
        id: newId,
        label: page.title,
        type: 'page',
        url: '',
        pageId: Number(page.id),
        parentId,
        locked: false,
        lockKey: '',
      }, parentId)
    );
    setSelectedId(newId);
    setNotice(
      parentId
        ? `Added “${page.title}” as a submenu item.`
        : `Added “${page.title}” to ${labels[activeMenu] || MENU_LABELS[activeMenu]}.`
    );
  };

  const addCustomItem = (link = customLink, parentId = '') => {
    if (!link.label.trim() || !link.url.trim()) {
      setError('Custom links need both a label and a URL.');
      return;
    }

    const newId = `custom-${Date.now()}`;
    updateCurrentMenu((items) =>
      insertItemUnderParent(items, {
        id: newId,
        label: link.label.trim(),
        type: 'custom',
        url: link.url.trim(),
        pageId: 0,
        parentId,
        locked: false,
        lockKey: '',
      }, parentId)
    );
    setSelectedId(newId);
    if (!parentId) {
      setCustomLink(EMPTY_CUSTOM_LINK);
    }
    setNotice(parentId ? 'Custom submenu link added.' : 'Custom link added.');
    setError('');
  };

  const deleteMenuItem = (itemId) => {
    const item = currentItems.find((entry) => entry.id === itemId);
    if (!item) return;
    updateCurrentMenu((items) => removeItemBlock(items, itemId));
    setSelectedId((current) => (current === itemId ? '' : current));
    setNotice(item.locked ? 'Locked menu item removed. Save to publish changes.' : 'Menu item removed.');
  };

  const confirmUnlockSelected = () => {
    if (!selectedItem?.locked) return;
    setConfirmState({
      open: true,
      type: 'unlock',
      itemId: selectedItem.id,
      title: itemLabel(selectedItem),
    });
  };

  const confirmDeleteSelected = () => {
    if (!selectedItem) return;
    setConfirmState({
      open: true,
      type: 'delete',
      itemId: selectedItem.id,
      title: itemLabel(selectedItem),
    });
  };

  const handleConfirm = () => {
    if (confirmState.type === 'unlock') {
      setUnlockedIds((current) => (current.includes(confirmState.itemId) ? current : [...current, confirmState.itemId]));
      setNotice(`Editing unlocked for “${confirmState.title}”. Save carefully.`);
    }

    if (confirmState.type === 'delete') {
      deleteMenuItem(confirmState.itemId);
    }

    setConfirmState({ open: false, type: '', itemId: '', title: '' });
  };

  const openChildDialog = (parentId) => {
    setChildDialogParentId(parentId);
    setChildAddMode('page');
    setChildPageQuery('');
    setChildPageResults([]);
    setChildCustomLink(EMPTY_CUSTOM_LINK);
    setError('');
  };

  const closeChildDialog = () => {
    setChildDialogParentId('');
    setChildPageQuery('');
    setChildPageResults([]);
    setChildCustomLink(EMPTY_CUSTOM_LINK);
  };

  const addChildPageItem = (page) => {
    addPageItem(page, childDialogParentId);
    closeChildDialog();
  };

  const addChildCustomItem = () => {
    addCustomItem(childCustomLink, childDialogParentId);
    if (childCustomLink.label.trim() && childCustomLink.url.trim()) {
      closeChildDialog();
    }
  };

  const saveMenus = async () => {
    setSaving(true);
    setError('');
    setNotice('');
    try {
      const res = await fetch(`${apiRoot}wingate/v1/menu-builder`, {
        method: 'POST',
        headers: authHeaders,
        body: JSON.stringify({ menus }),
      });
      if (!res.ok) throw new Error('Failed to save menu builder changes.');
      const data = await res.json();
      setMenus(data?.menus || {});
      setLabels(data?.labels || MENU_LABELS);
      setNotice('Menus saved.');
    } catch (saveError) {
      setError(saveError.message || 'Failed to save menus.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <Box className="wingate-admin-spa max-w-7xl mx-auto p-4 md:p-8 text-brand-blue">
      <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" alignItems={{ xs: 'flex-start', md: 'flex-end' }} gap={2} mb={4}>
        <Box>
          <Typography variant="overline" sx={{ letterSpacing: 2.6, fontWeight: 700, color: '#7e8aa5' }}>
            Wingate Settings
          </Typography>
          <Typography variant="h3" sx={{ fontFamily: 'Cinzel', color: '#0e1b3d', mt: 1 }}>
            Menu Builder
          </Typography>
          <Typography sx={{ color: '#667085', mt: 1, maxWidth: 780 }}>
            Manage the live main, mobile, and footer navigation. Current top-level items are protected, but you can add pages, custom links, define hierarchy, and drag items to reorder them.
          </Typography>
        </Box>
        <Button
          ref={primarySaveRef}
          variant="contained"
          startIcon={<Save size={16} />}
          onClick={saveMenus}
          disabled={loading || saving}
          sx={{ backgroundColor: '#0e1b3d', '&:hover': { backgroundColor: '#ffcc00', color: '#0e1b3d' } }}
        >
          Save Menus
        </Button>
      </Stack>

      {error ? <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert> : null}

      <Paper elevation={0} sx={{ mb: 2, border: '1px solid #e5e7eb', borderRadius: '18px', overflow: 'hidden' }}>
        <Tabs value={activeMenu} onChange={(_, value) => { setActiveMenu(value); setSelectedId((menus[value] || [])[0]?.id || ''); }} sx={{ px: 2, pt: 1.2 }}>
          {Object.entries(labels).map(([slug, label]) => (
            <Tab key={slug} value={slug} label={label} />
          ))}
        </Tabs>
      </Paper>

      <Stack direction={{ xs: 'column', xl: 'row' }} gap={2}>
        <Paper elevation={0} sx={{ flex: 1.2, border: '1px solid #e5e7eb', borderRadius: '22px', p: 2.5 }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
            <Box>
              <Typography variant="h6" sx={{ fontFamily: 'Cinzel', color: '#0e1b3d' }}>
                {labels[activeMenu] || MENU_LABELS[activeMenu]}
              </Typography>
              <Typography sx={{ color: '#667085', fontSize: 13 }}>
                Drag left to outdent, center to reorder, or right to nest as a submenu item.
              </Typography>
            </Box>
            <Chip label={`${currentItems.length} items`} size="small" />
          </Stack>

          <Box sx={{ display: 'grid', gap: 1 }}>
            {flattened.map((item) => (
              <Box
                key={item.id}
                draggable
                onDragStart={() => setDraggedId(item.id)}
                onDragEnd={() => {
                  setDraggedId('');
                  setDragIntent(null);
                }}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId((current) => (current === item.id ? '' : current))}
                onDragOver={(event) => {
                  event.preventDefault();
                  if (!draggedId || draggedId === item.id) return;
                  const bounds = event.currentTarget.getBoundingClientRect();
                  const relativeX = event.clientX - bounds.left;
                  const leftThreshold = Math.min(72, bounds.width * 0.2);
                  const rightThreshold = bounds.width - Math.min(120, bounds.width * 0.35);
                  const descendants = collectDescendantIds(currentItems, draggedId);
                  const parentItem = item.parentId ? currentItems.find((entry) => entry.id === item.parentId) : null;
                  let mode = 'before';
                  if (relativeX <= leftThreshold && (item.parentId || item.depth > 0)) {
                    mode = 'outdent';
                  } else if (relativeX >= rightThreshold && !descendants.has(item.id)) {
                    mode = 'child';
                  }
                  setDragIntent({ targetId: item.id, mode });
                }}
                onDrop={() => {
                  if (!draggedId || draggedId === item.id) return;
                  updateCurrentMenu((items) => {
                    if (dragIntent?.targetId === item.id && dragIntent.mode === 'child') {
                      return moveItemToParent(items, draggedId, item.id);
                    }
                    if (dragIntent?.targetId === item.id && dragIntent.mode === 'outdent') {
                      const targetItem = items.find((entry) => entry.id === item.id);
                      const parentItem = targetItem?.parentId
                        ? items.find((entry) => entry.id === targetItem.parentId)
                        : null;
                      const nextParentId = parentItem?.parentId || '';
                      return moveBlockAfterTarget(items, draggedId, item.id, nextParentId);
                    }
                    return moveBlockBeforeTarget(items, draggedId, item.id);
                  });
                  setDraggedId('');
                  setDragIntent(null);
                  setNotice('Menu order updated. Save to publish changes.');
                }}
                onClick={() => setSelectedId(item.id)}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.25,
                  border: selectedId === item.id ? '1px solid #0e1b3d' : '1px solid #e5e7eb',
                  backgroundColor: selectedId === item.id ? '#f8fafc' : '#fff',
                  borderRadius: '14px',
                  p: 1.25,
                  pl: `${1.25 + item.depth * 2}rem`,
                  cursor: 'pointer',
                  boxShadow:
                    dragIntent?.targetId === item.id
                      ? dragIntent.mode === 'child'
                        ? 'inset 4px 0 0 #d4a700'
                        : dragIntent.mode === 'outdent'
                          ? 'inset -4px 0 0 #7c3aed'
                        : 'inset 0 2px 0 #0e1b3d'
                      : 'none',
                }}
              >
                <GripVertical size={16} color="#98a2b3" />
                <Box sx={{ flex: 1 }}>
                  <Stack direction="row" alignItems="center" gap={1} flexWrap="wrap">
                    <Typography sx={{ fontWeight: 700, color: '#0e1b3d', fontSize: 14 }}>{itemLabel(item)}</Typography>
                    <Chip label={item.type === 'page' ? 'Page' : 'Custom'} size="small" variant="outlined" />
                    {item.locked ? <Chip label="Locked" size="small" color="warning" /> : null}
                    {dragIntent?.targetId === item.id && dragIntent.mode === 'child' ? (
                      <Chip label="Subpage drop" size="small" color="success" />
                    ) : null}
                    {dragIntent?.targetId === item.id && dragIntent.mode === 'outdent' ? (
                      <Chip label="Outdent drop" size="small" color="secondary" />
                    ) : null}
                  </Stack>
                  <Typography sx={{ fontSize: 12, color: '#667085', mt: 0.5 }}>
                    {item.type === 'page' ? `Page ID ${item.pageId}` : item.url}
                  </Typography>
                </Box>
                {(hoveredId === item.id || selectedId === item.id) ? (
                  <Button
                    size="small"
                    variant="outlined"
                    startIcon={<Plus size={14} />}
                    onClick={(event) => {
                      event.stopPropagation();
                      openChildDialog(item.id);
                    }}
                  >
                    Add Child
                  </Button>
                ) : null}
              </Box>
            ))}
          </Box>
        </Paper>

        <Stack sx={{ flex: 0.95 }} gap={2}>
          <Paper elevation={0} sx={{ border: '1px solid #e5e7eb', borderRadius: '22px', p: 2.5 }}>
            <Typography variant="h6" sx={{ fontFamily: 'Cinzel', color: '#0e1b3d', mb: 1.5 }}>
              Edit Menu Item
            </Typography>

            {selectedItem ? (
              <Stack gap={1.25}>
                <Box>
                  <Typography sx={{ fontSize: 12, fontWeight: 700, color: '#667085', mb: 0.75 }}>
                    Label
                  </Typography>
                  <TextField
                    size="small"
                    fullWidth
                    value={selectedItem.label || ''}
                    disabled={!canEditSelected}
                    onChange={(event) => updateSelectedField('label', event.target.value)}
                  />
                </Box>

                {selectedItem.type === 'custom' ? (
                  <Box>
                    <Typography sx={{ fontSize: 12, fontWeight: 700, color: '#667085', mb: 0.75 }}>
                      URL
                    </Typography>
                    <TextField
                      size="small"
                      fullWidth
                      value={selectedItem.url || ''}
                      disabled={!canEditSelected}
                      onChange={(event) => updateSelectedField('url', event.target.value)}
                    />
                  </Box>
                ) : (
                  <Box>
                    <Typography sx={{ fontSize: 12, fontWeight: 700, color: '#667085', mb: 0.75 }}>
                      Linked Page
                    </Typography>
                    <TextField
                      size="small"
                      fullWidth
                      value={`Page #${selectedItem.pageId}`}
                      disabled
                    />
                  </Box>
                )}

                <Box>
                  <Typography sx={{ fontSize: 12, fontWeight: 700, color: '#667085', mb: 0.75 }}>
                    Parent Item
                  </Typography>
                  <Select
                    size="small"
                    fullWidth
                    value={selectedItem.parentId || ''}
                    disabled={!canEditSelected}
                    onChange={handleParentChange}
                  >
                    <MenuItem value="">Top level</MenuItem>
                    {parentOptions.map((option) => (
                      <MenuItem key={option.id} value={option.id}>
                        {'\u00A0'.repeat(option.depth * 4)}
                        {itemLabel(option)}
                      </MenuItem>
                    ))}
                  </Select>
                </Box>

                {selectedItem.locked && !canEditSelected ? (
                  <Alert severity="warning">
                    This item is part of the protected menu structure. Unlock editing only if you are sure.
                  </Alert>
                ) : null}

                {selectedItem.locked && !canEditSelected ? (
                  <Button variant="outlined" color="warning" onClick={confirmUnlockSelected}>
                    Unlock Editing
                  </Button>
                ) : null}

                <Button
                  variant="contained"
                  startIcon={<Save size={16} />}
                  onClick={saveMenus}
                  disabled={loading || saving}
                  sx={{ backgroundColor: '#0e1b3d', '&:hover': { backgroundColor: '#ffcc00', color: '#0e1b3d' } }}
                >
                  {saving ? 'Saving...' : 'Save Item'}
                </Button>

                <Stack direction="row" justifyContent="flex-end">
                  <Button
                    size="small"
                    color="error"
                    onClick={confirmDeleteSelected}
                    startIcon={<Trash2 size={14} />}
                    sx={{ alignSelf: 'flex-end' }}
                  >
                    Delete
                  </Button>
                </Stack>
              </Stack>
            ) : (
              <Typography sx={{ color: '#667085', fontSize: 14 }}>
                Select a menu item to edit its label, URL, or hierarchy.
              </Typography>
            )}
          </Paper>

          <Paper elevation={0} sx={{ border: '1px solid #e5e7eb', borderRadius: '22px', p: 2.5 }}>
            <Stack direction="row" alignItems="center" gap={1} mb={1.5}>
              <Search size={16} />
              <Typography variant="h6" sx={{ fontFamily: 'Cinzel', color: '#0e1b3d' }}>
                Add Page
              </Typography>
            </Stack>
            <TextField
              size="small"
              fullWidth
              placeholder="Search published pages..."
              value={pageQuery}
              onChange={(event) => setPageQuery(event.target.value)}
            />
            <Stack gap={1} mt={1.5}>
              {pageResults.map((page) => (
                <Box key={page.id} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 1, border: '1px solid #e5e7eb', borderRadius: '14px', p: 1.1 }}>
                  <Box>
                    <Typography sx={{ fontWeight: 700, color: '#0e1b3d', fontSize: 14 }}>{page.title}</Typography>
                    <Typography sx={{ color: '#667085', fontSize: 12 }}>{page.url}</Typography>
                  </Box>
                  <Button size="small" variant="outlined" onClick={() => addPageItem(page)}>
                    Add
                  </Button>
                </Box>
              ))}
              {deferredPageQuery.trim().length >= 2 && !pageResults.length ? (
                <Typography sx={{ color: '#667085', fontSize: 13 }}>No matching pages found.</Typography>
              ) : null}
            </Stack>
          </Paper>

          <Paper elevation={0} sx={{ border: '1px solid #e5e7eb', borderRadius: '22px', p: 2.5 }}>
            <Stack direction="row" alignItems="center" gap={1} mb={1.5}>
              <Link2 size={16} />
              <Typography variant="h6" sx={{ fontFamily: 'Cinzel', color: '#0e1b3d' }}>
                Add Custom Link
              </Typography>
            </Stack>
            <Stack gap={1.25}>
              <TextField
                size="small"
                label="Link label"
                value={customLink.label}
                onChange={(event) => setCustomLink((current) => ({ ...current, label: event.target.value }))}
              />
              <TextField
                size="small"
                label="URL"
                placeholder="/example/ or https://..."
                value={customLink.url}
                onChange={(event) => setCustomLink((current) => ({ ...current, url: event.target.value }))}
              />
              <Button variant="contained" startIcon={<Plus size={14} />} onClick={addCustomItem}>
                Add Custom Link
              </Button>
            </Stack>
          </Paper>
        </Stack>
      </Stack>

      <Dialog open={Boolean(childDialogParentId)} onClose={closeChildDialog} fullWidth maxWidth="sm">
        <DialogTitle>Add Subpage</DialogTitle>
        <DialogContent>
          <Typography sx={{ color: '#667085', fontSize: 14, mb: 2 }}>
            Add a child item under {itemLabel(currentItems.find((item) => item.id === childDialogParentId))}.
          </Typography>
          <Tabs value={childAddMode} onChange={(_, value) => setChildAddMode(value)} sx={{ mb: 2 }}>
            <Tab value="page" label="Page" />
            <Tab value="custom" label="Custom Link" />
          </Tabs>

          {childAddMode === 'page' ? (
            <Box>
              <TextField
                size="small"
                fullWidth
                placeholder="Search published pages..."
                value={childPageQuery}
                onChange={(event) => setChildPageQuery(event.target.value)}
              />
              <Stack gap={1} mt={1.5}>
                {childPageResults.map((page) => (
                  <Box key={page.id} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 1, border: '1px solid #e5e7eb', borderRadius: '14px', p: 1.1 }}>
                    <Box>
                      <Typography sx={{ fontWeight: 700, color: '#0e1b3d', fontSize: 14 }}>{page.title}</Typography>
                      <Typography sx={{ color: '#667085', fontSize: 12 }}>{page.url}</Typography>
                    </Box>
                    <Button size="small" variant="outlined" onClick={() => addChildPageItem(page)}>
                      Add Child
                    </Button>
                  </Box>
                ))}
                {deferredChildPageQuery.trim().length >= 2 && !childPageResults.length ? (
                  <Typography sx={{ color: '#667085', fontSize: 13 }}>No matching pages found.</Typography>
                ) : null}
              </Stack>
            </Box>
          ) : (
            <Stack gap={1.25}>
              <TextField
                size="small"
                label="Link label"
                value={childCustomLink.label}
                onChange={(event) => setChildCustomLink((current) => ({ ...current, label: event.target.value }))}
              />
              <TextField
                size="small"
                label="URL"
                placeholder="/example/ or https://..."
                value={childCustomLink.url}
                onChange={(event) => setChildCustomLink((current) => ({ ...current, url: event.target.value }))}
              />
            </Stack>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={closeChildDialog}>Cancel</Button>
          {childAddMode === 'custom' ? (
            <Button variant="contained" onClick={addChildCustomItem}>Add Child Link</Button>
          ) : null}
        </DialogActions>
      </Dialog>

      <Dialog
        open={confirmState.open}
        onClose={() => setConfirmState({ open: false, type: '', itemId: '', title: '' })}
        fullWidth
        maxWidth="xs"
      >
        <DialogTitle>
          {confirmState.type === 'unlock' ? 'Unlock Protected Item?' : 'Delete Menu Item?'}
        </DialogTitle>
        <DialogContent>
          {confirmState.type === 'unlock' ? (
            <Alert severity="warning">
              Editing “{confirmState.title}” can change the site’s core navigation. Proceed only if you intend to alter the protected structure.
            </Alert>
          ) : (
            <Alert severity={selectedItem?.locked ? 'warning' : 'error'}>
              {selectedItem?.locked
                ? `Deleting “${confirmState.title}” is dangerous because it is part of the protected menu structure.`
                : `Delete “${confirmState.title}” and any submenu items under it?`}
            </Alert>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setConfirmState({ open: false, type: '', itemId: '', title: '' })}>Cancel</Button>
          <Button
            color={confirmState.type === 'unlock' ? 'warning' : 'error'}
            variant="contained"
            onClick={handleConfirm}
          >
            {confirmState.type === 'unlock' ? 'Unlock Editing' : 'Delete Item'}
          </Button>
        </DialogActions>
      </Dialog>

      {!isPrimarySaveVisible ? (
        <Box
          sx={{
            position: 'fixed',
            right: { xs: 16, md: 24 },
            bottom: { xs: 16, md: 24 },
            zIndex: 1600,
          }}
        >
          <Button
            variant="contained"
            startIcon={<Save size={16} />}
            onClick={saveMenus}
            disabled={loading || saving}
            sx={{
              minWidth: 160,
              borderRadius: '999px',
              px: 2.5,
              py: 1.25,
              boxShadow: '0 18px 40px rgba(14, 27, 61, 0.22)',
              backgroundColor: '#0e1b3d',
              '&:hover': { backgroundColor: '#ffcc00', color: '#0e1b3d' },
            }}
          >
            {saving ? 'Saving...' : 'Save Menus'}
          </Button>
        </Box>
      ) : null}

      <Snackbar
        open={Boolean(notice)}
        autoHideDuration={3200}
        onClose={() => setNotice('')}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        sx={{
          bottom: !isPrimarySaveVisible ? { xs: 88, md: 96 } : undefined,
        }}
      >
        <Alert
          severity="success"
          variant="filled"
          onClose={() => setNotice('')}
          sx={{ width: '100%', boxShadow: '0 18px 40px rgba(14, 27, 61, 0.22)' }}
        >
          {notice}
        </Alert>
      </Snackbar>
    </Box>
  );
}
