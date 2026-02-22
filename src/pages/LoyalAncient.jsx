import React, { useEffect, useMemo, useRef, useState } from 'react';
import { AlertTriangle, ArrowRight, BadgeCheck, Clock3, FileSpreadsheet, FileText, Leaf, UtensilsCrossed, XCircle } from 'lucide-react';
import gsap from 'gsap';

const TYPE_LABELS = {
  whisky: 'Whisky Collection',
  cocktails: 'Cocktail Signatures',
  wines: 'Wine List',
  beers: 'Craft Beers',
  spirits: 'Premium Spirits',
  mocktails: 'Zero-Proof & Mocktails',
};

const TAG_STYLES = [
  'bg-brand-yellow/20 text-brand-blue border border-brand-yellow/50',
  'bg-emerald-100 text-emerald-800 border border-emerald-300',
  'bg-amber-100 text-amber-700 border border-amber-200',
  'bg-slate-100 text-slate-700 border border-slate-300',
  'bg-red-100 text-red-700 border border-red-200',
];

export default function LoyalAncient() {
  const [payload, setPayload] = useState({ settings: null, menus: [], weekdayLabels: {} });
  const [loading, setLoading] = useState(true);
  const [activeId, setActiveId] = useState(0);
  const rootRef = useRef(null);
  const detailRef = useRef(null);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const res = await fetch('/wp-json/wingate-tools/v1/bar/public');
        const json = res.ok ? await res.json() : { settings: null, menus: [], weekdayLabels: {} };
        const menus = Array.isArray(json?.menus) ? json.menus : [];
        setPayload({ settings: json?.settings || null, menus, weekdayLabels: json?.weekdayLabels || {} });
        const queryMenuSlug = new URLSearchParams(window.location.search).get('menu');
        const fromQuery = queryMenuSlug ? menus.find((menu) => String(menu.slug) === queryMenuSlug) : null;
        setActiveId(fromQuery?.id || menus[0]?.id || 0);
      } catch {
        setPayload({ settings: null, menus: [], weekdayLabels: {} });
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  useEffect(() => {
    if (loading || !rootRef.current) return undefined;
    const ctx = gsap.context(() => {
      const hero = rootRef.current.querySelector('.bar-hero-copy');
      if (hero) {
        gsap.fromTo(hero, { y: 26, opacity: 0 }, { y: 0, opacity: 1, duration: 0.65, ease: 'power2.out' });
      }
      const cards = rootRef.current.querySelectorAll('.bar-menu-card');
      if (cards.length) {
        gsap.fromTo(cards, { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: 'power2.out', delay: 0.12 });
      }
    }, rootRef);
    return () => ctx.revert();
  }, [payload.menus.length, loading]);

  const settings = payload.settings || {};
  const menus = payload.menus || [];
  const weekdayLabels = payload.weekdayLabels || {};
  const active = menus.find((menu) => Number(menu.id) === Number(activeId)) || menus[0] || null;

  const openTimes = useMemo(() => {
    const source = settings.openTimes || {};
    return [
      source.weekdays,
      source.friday,
      source.saturday,
      source.sunday,
    ].filter(Boolean);
  }, [settings.openTimes]);

  const formatDays = (days) => {
    if (!Array.isArray(days)) return '';
    return days.map((day) => weekdayLabels[day] || day).join(', ');
  };

  const downloadExport = async (menuId, format = 'csv') => {
    try {
      const res = await fetch(`/wp-json/wingate-tools/v1/bar/menus/${menuId}/export?format=${encodeURIComponent(format)}`);
      if (!res.ok) return;
      const data = await res.json();
      if (format === 'pdf') {
        if (data?.url) {
          window.open(String(data.url), '_blank', 'noopener,noreferrer');
        }
        return;
      }
      const blob = new Blob([String(data?.content || '')], { type: String(data?.mime || 'text/plain;charset=utf-8') });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = String(data?.fileName || 'bar-menu.csv');
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
    } catch {
      // No-op: fail silently for public export actions.
    }
  };

  const getTagStyle = (tag) => {
    const source = String(tag || '').trim().toLowerCase();
    if (!source) return TAG_STYLES[0];
    const score = source.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
    return TAG_STYLES[score % TAG_STYLES.length];
  };

  if (loading) {
    return <div className="bg-brand-gray min-h-screen flex items-center justify-center text-brand-blue">Loading Bar...</div>;
  }

  const selectMenu = (menuId) => {
    setActiveId(menuId);
    window.requestAnimationFrame(() => {
      if (!detailRef.current) return;
      const headerOffset = 118;
      const y = detailRef.current.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top: Math.max(y, 0), behavior: 'smooth' });
    });
  };

  return (
    <div ref={rootRef} className="bg-brand-gray min-h-screen">
      <section className="relative min-h-[55vh] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${settings.heroImageUrl || ''}')` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/92 via-brand-blue/70 to-brand-blue/55" />
        <div className="relative container mx-auto px-4 py-16 md:py-20">
          <div className="bar-hero-copy max-w-3xl rounded-2xl border border-white/18 bg-white/[0.05] p-6 md:p-8 backdrop-blur-sm">
            <p className="text-xs uppercase tracking-[0.22em] text-brand-yellow font-bold">Club House Bar</p>
            <h1 className="mt-3 font-cinzel text-white text-5xl md:text-6xl">{settings.heroTitle || 'The Loyal / Ancient'}</h1>
            <p className="mt-4 text-white/85 text-base md:text-lg">{settings.heroSubtitle || ''}</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-10">
        <div className="rounded-2xl border border-brand-blue/10 bg-white p-5 md:p-7 shadow-sm mb-8">
          <p className="text-brand-blue/75 text-sm md:text-base">{settings.intro || ''}</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {menus.map((menu) => {
            const isActive = Number(menu.id) === Number(active?.id);
            return (
              <button
                key={menu.id}
                type="button"
                onClick={() => selectMenu(menu.id)}
                className={`bar-menu-card text-left overflow-hidden rounded-xl border ${isActive ? 'border-brand-yellow shadow-lg' : 'border-brand-blue/12 shadow-sm'} bg-white transition-all hover:-translate-y-1`}
              >
                <div className="h-44 bg-brand-blue/10 bg-cover bg-center" style={{ backgroundImage: `url('${menu.menuImageUrl || settings.heroImageUrl || ''}')` }} />
                <div className="p-4">
                  <p className="text-[10px] uppercase tracking-[0.16em] text-brand-yellow font-bold">{TYPE_LABELS[menu.menuType] || 'Menu'}</p>
                  <h3 className="font-cinzel text-2xl text-brand-blue mt-1">{menu.title}</h3>
                  <p className="mt-1 text-xs text-brand-blue/65 uppercase tracking-[0.12em]">{menu.availableFrom} - {menu.availableTo}</p>
                  <p className="mt-1 text-[11px] text-brand-blue/60">{formatDays(menu.availableDays)}</p>
                  <p className="mt-2 text-sm text-brand-blue/75 line-clamp-2">{menu.summary}</p>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {active ? (
        <section ref={detailRef} className="container mx-auto px-4 pb-14">
          <div className="rounded-2xl border border-brand-blue/12 bg-white p-6 md:p-8 shadow-sm">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-brand-yellow font-bold">{TYPE_LABELS[active.menuType] || 'Menu'}</p>
                <h2 className="font-cinzel text-4xl text-brand-blue mt-1">{active.title}</h2>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-blue/[0.06] px-4 py-2 text-sm text-brand-blue">
                <Clock3 size={16} />
                <span>{active.availableFrom} - {active.availableTo}</span>
              </div>
            </div>
            <p className="mt-2 text-sm text-brand-blue/65">Available on: {formatDays(active.availableDays)}</p>
            <p className="mt-4 text-brand-blue/75">{active.summary}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => downloadExport(active.id, 'csv')}
                className="inline-flex items-center gap-2 rounded-sm border border-brand-blue/30 px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] text-brand-blue transition hover:bg-brand-blue hover:text-white"
              >
                <FileSpreadsheet size={14} />
                Export Excel/CSV
              </button>
              <button
                type="button"
                onClick={() => downloadExport(active.id, 'pdf')}
                className="inline-flex items-center gap-2 rounded-sm border border-brand-blue/30 px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] text-brand-blue transition hover:bg-brand-blue hover:text-white"
              >
                <FileText size={14} />
                Download PDF
              </button>
            </div>

            <div className="mt-6 space-y-3">
              {(active.items || []).map((item, index) => (
                <article key={`${item.name}-${index}`} className={`rounded-xl border border-brand-blue/10 p-4 ${item.inStock === false ? 'bg-red-50/70' : 'bg-brand-gray/35'}`}>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-cinzel text-2xl text-brand-blue">{item.name}</h3>
                      {item.tag ? (
                        <p className={`mt-1 inline-flex rounded-full px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] font-bold ${getTagStyle(item.tag)}`}>
                          {item.tag}
                        </p>
                      ) : null}
                    </div>
                    <p className="font-cinzel text-2xl text-brand-blue">{item.price || '-'}</p>
                  </div>
                  {item.inStock === false ? (
                    <div className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-red-300 bg-red-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-red-700">
                      <XCircle size={12} />
                      <span>Out of stock</span>
                    </div>
                  ) : null}
                  {item.description ? <p className="text-sm text-brand-blue/75 mt-2">{item.description}</p> : null}
                  {(item.allergens?.length || item.dietary?.length) ? (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {(item.allergens || []).map((allergen) => (
                        <span key={`${item.name}-a-${allergen}`} className="inline-flex items-center gap-1.5 rounded-full border border-red-200 bg-red-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-red-700">
                          <AlertTriangle size={12} />
                          <span>{allergen}</span>
                        </span>
                      ))}
                      {(item.dietary || []).map((diet) => (
                        <span key={`${item.name}-d-${diet}`} className="inline-flex items-center gap-1.5 rounded-full border border-brand-blue/20 bg-brand-blue/[0.06] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-brand-blue">
                          <Leaf size={12} />
                          <span>{diet}</span>
                        </span>
                      ))}
                    </div>
                  ) : null}
                  {item.inStock !== false && !(item.allergens?.length || item.dietary?.length) ? (
                    <div className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-brand-blue/20 bg-brand-blue/[0.06] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-brand-blue">
                      <BadgeCheck size={12} />
                      <span>Chef ready</span>
                    </div>
                  ) : null}
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="bg-brand-blue text-white">
        <div className="container mx-auto px-4 py-10 grid gap-8 md:grid-cols-3">
          <div>
            <p className="text-[11px] uppercase tracking-[0.16em] text-brand-yellow font-bold">{settings.openTimesTitle || 'Bar Hours'}</p>
            <ul className="mt-3 space-y-1 text-sm text-white/90">
              {openTimes.map((line, index) => <li key={`${line}-${index}`}>{line}</li>)}
            </ul>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.16em] text-brand-yellow font-bold">Loyal & Ancient Experience</p>
            <p className="mt-3 text-sm text-white/90">Classic pours, curated cocktail service, and a premium social setting for members and guests.</p>
          </div>
          <div className="md:text-right">
            <a href={settings.bookingUrl || '/booking/'} className="inline-flex items-center gap-2 rounded-sm bg-brand-yellow px-6 py-3 text-xs font-bold uppercase tracking-widest text-brand-blue !no-underline hover:bg-white transition-colors">
              <UtensilsCrossed size={14} />
              <span>{settings.bookingLabel || 'Reserve Bar Table'}</span>
              <ArrowRight size={14} />
            </a>
            {settings.whatsAppEnabled && settings.whatsAppNumber ? (
              <a
                href={`https://wa.me/${String(settings.whatsAppNumber).replace(/\D/g, '')}?text=${encodeURIComponent(settings.whatsAppMessage || 'Hello Loyal & Ancient team, I would like to reserve a table.')}`}
                className="ml-0 mt-2 inline-flex items-center gap-2 rounded-sm border border-white/45 px-6 py-3 text-xs font-bold uppercase tracking-widest text-white !no-underline transition-colors hover:bg-white hover:text-brand-blue md:ml-2"
                target="_blank"
                rel="noreferrer"
              >
                <span>{settings.whatsAppLabel || 'WhatsApp Bar'}</span>
                <ArrowRight size={14} />
              </a>
            ) : null}
          </div>
        </div>
      </section>
    </div>
  );
}
