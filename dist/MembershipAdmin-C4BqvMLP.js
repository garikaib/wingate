import { r as i, j as e } from "./main-BM9ReWkY.js";
import { M as N } from "./MediaPicker-CdPXCK1m.js";
const S = () => {
  const [a, n] = i.useState({
    hero: { title: "", subtitle: "", backgroundImage: "" },
    tiersIntro: { kicker: "", title: "" },
    tiers: [],
    cta: { title: "", description: "", buttonText: "", buttonUrl: "" }
  }), [p, b] = i.useState(!0), [g, u] = i.useState(!1), [c, o] = i.useState({ text: "", type: "" }), h = window.wingateAdminData?.root || "/wp-json/", f = window.wingateAdminData?.nonce || "";
  i.useEffect(() => {
    j();
  }, []);
  const j = async () => {
    b(!0);
    try {
      const t = await fetch(`${h}wingate/v1/membership-settings`);
      if (!t.ok) throw new Error("Failed to fetch settings");
      const s = await t.json();
      n(s);
    } catch (t) {
      o({ text: "Error loading settings: " + t.message, type: "error" });
    } finally {
      b(!1);
    }
  }, w = async () => {
    u(!0), o({ text: "", type: "" });
    try {
      if (!(await fetch(`${h}wingate/v1/membership-settings`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-WP-Nonce": f
        },
        body: JSON.stringify(a)
      })).ok) throw new Error("Failed to save settings");
      o({ text: "Settings saved successfully!", type: "success" }), setTimeout(() => o({ text: "", type: "" }), 3e3);
    } catch (t) {
      o({ text: "Error saving settings: " + t.message, type: "error" });
    } finally {
      u(!1);
    }
  }, l = (t, s, r) => {
    n((d) => ({
      ...d,
      [t]: {
        ...d[t],
        [s]: r
      }
    }));
  }, x = (t, s, r) => {
    n((d) => {
      const m = [...d.tiers];
      return m[t] = { ...m[t], [s]: r }, { ...d, tiers: m };
    });
  }, y = () => {
    n((t) => ({
      ...t,
      tiers: [...t.tiers, { name: "New Tier", price: "$0/yr", features: "Feature 1, Feature 2" }]
    }));
  }, v = (t) => {
    n((s) => {
      const r = [...s.tiers];
      return r.splice(t, 1), { ...s, tiers: r };
    });
  };
  return p ? /* @__PURE__ */ e.jsx("div", { className: "p-8 text-center text-gray-500", children: "Loading Membership settings..." }) : /* @__PURE__ */ e.jsxs("div", { className: "wingate-admin-spa max-w-6xl mx-auto p-6 font-montserrat", children: [
    /* @__PURE__ */ e.jsxs("header", { className: "flex justify-between items-center mb-8 border-b pb-4", children: [
      /* @__PURE__ */ e.jsxs("div", { children: [
        /* @__PURE__ */ e.jsxs("h1", { className: "text-3xl font-cinzel font-bold text-brand-blue mb-1", children: [
          "Membership ",
          /* @__PURE__ */ e.jsx("span", { className: "text-brand-yellow", children: "Settings" })
        ] }),
        /* @__PURE__ */ e.jsx("p", { className: "text-gray-500 text-sm", children: "Manage the hero section, membership tiers, and call to action." })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-4", children: [
        c.text && /* @__PURE__ */ e.jsx("span", { className: `px-4 py-2 rounded-md text-sm font-bold ${c.type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`, children: c.text }),
        /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: w,
            disabled: g,
            className: "bg-brand-blue hover:bg-brand-yellow text-white hover:text-brand-blue font-bold py-2 px-6 rounded transition-colors",
            children: g ? "Saving..." : "Save All Settings"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "space-y-8", children: [
      /* @__PURE__ */ e.jsxs("section", { className: "bg-white p-6 rounded-lg shadow-sm border border-gray-100", children: [
        /* @__PURE__ */ e.jsxs("h2", { className: "text-xl font-cinzel text-brand-blue font-bold mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ e.jsx("span", { className: "w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center text-sm", children: "1" }),
          "Hero Section"
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("label", { className: "block text-sm font-bold text-gray-700 mb-1", children: "Title" }),
              /* @__PURE__ */ e.jsx("textarea", { value: a.hero.title, onChange: (t) => l("hero", "title", t.target.value), className: "w-full border-gray-300 rounded-md shadow-sm", rows: "2" })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("label", { className: "block text-sm font-bold text-gray-700 mb-1", children: "Subtitle" }),
              /* @__PURE__ */ e.jsx("textarea", { value: a.hero.subtitle, onChange: (t) => l("hero", "subtitle", t.target.value), className: "w-full border-gray-300 rounded-md shadow-sm", rows: "3" })
            ] })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsx("label", { className: "block text-sm font-bold text-gray-700 mb-1", children: "Background Image" }),
            /* @__PURE__ */ e.jsx(N, { value: a.hero.backgroundImage, onSelect: (t) => l("hero", "backgroundImage", t) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs("section", { className: "bg-white p-6 rounded-lg shadow-sm border border-gray-100", children: [
        /* @__PURE__ */ e.jsxs("h2", { className: "text-xl font-cinzel text-brand-blue font-bold mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ e.jsx("span", { className: "w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center text-sm", children: "2" }),
          "Tiers Intro"
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsx("label", { className: "block text-sm font-bold text-gray-700 mb-1", children: "Kicker" }),
            /* @__PURE__ */ e.jsx("input", { type: "text", value: a.tiersIntro.kicker, onChange: (t) => l("tiersIntro", "kicker", t.target.value), className: "w-full border-gray-300 rounded-md shadow-sm" })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsx("label", { className: "block text-sm font-bold text-gray-700 mb-1", children: "Title" }),
            /* @__PURE__ */ e.jsx("input", { type: "text", value: a.tiersIntro.title, onChange: (t) => l("tiersIntro", "title", t.target.value), className: "w-full border-gray-300 rounded-md shadow-sm" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs("section", { className: "bg-white p-6 rounded-lg shadow-sm border border-gray-100", children: [
        /* @__PURE__ */ e.jsxs("h2", { className: "text-xl font-cinzel text-brand-blue font-bold mb-6 flex items-center gap-2 border-b pb-4", children: [
          /* @__PURE__ */ e.jsx("span", { className: "w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center text-sm", children: "3" }),
          "Membership Tiers"
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: [
          a.tiers.map((t, s) => /* @__PURE__ */ e.jsxs("div", { className: "bg-brand-gray/30 p-5 rounded-lg border border-gray-200 relative group", children: [
            /* @__PURE__ */ e.jsx(
              "button",
              {
                onClick: () => v(s),
                className: "absolute top-2 right-2 text-red-400 hover:text-red-600 bg-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity shadow-sm",
                title: "Remove Tier",
                children: /* @__PURE__ */ e.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ e.jsx("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z", clipRule: "evenodd" }) })
              }
            ),
            /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("label", { className: "block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1", children: "Tier Name" }),
                /* @__PURE__ */ e.jsx("input", { type: "text", value: t.name, onChange: (r) => x(s, "name", r.target.value), className: "w-full border-gray-300 rounded shadow-sm text-sm font-cinzel font-bold text-brand-blue" })
              ] }),
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("label", { className: "block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1", children: "Price" }),
                /* @__PURE__ */ e.jsx("input", { type: "text", value: t.price, onChange: (r) => x(s, "price", r.target.value), className: "w-full border-gray-300 rounded shadow-sm text-sm text-brand-yellow font-bold" })
              ] }),
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("label", { className: "block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1", children: "Features (comma separated)" }),
                /* @__PURE__ */ e.jsx("textarea", { value: t.features, onChange: (r) => x(s, "features", r.target.value), className: "w-full border-gray-300 rounded shadow-sm text-sm", rows: "3", placeholder: "Unlimited Golf, Club Storage, etc." })
              ] })
            ] })
          ] }, s)),
          /* @__PURE__ */ e.jsx("div", { className: "flex items-center justify-center p-8 border-2 border-dashed border-gray-300 rounded-lg hover:border-brand-blue hover:bg-brand-blue/5 transition-colors cursor-pointer", onClick: y, children: /* @__PURE__ */ e.jsxs("div", { className: "text-center text-brand-blue", children: [
            /* @__PURE__ */ e.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-12 w-12 mx-auto mb-2 opacity-50", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 4v16m8-8H4" }) }),
            /* @__PURE__ */ e.jsx("span", { className: "font-cinzel font-bold", children: "Add New Tier" })
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs("section", { className: "bg-white p-6 rounded-lg shadow-sm border border-gray-100", children: [
        /* @__PURE__ */ e.jsxs("h2", { className: "text-xl font-cinzel text-brand-blue font-bold mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ e.jsx("span", { className: "w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center text-sm", children: "4" }),
          "Call To Action (Manual Forms)"
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsx("label", { className: "block text-sm font-bold text-gray-700 mb-1", children: "Title" }),
            /* @__PURE__ */ e.jsx("input", { type: "text", value: a.cta.title, onChange: (t) => l("cta", "title", t.target.value), className: "w-full border-gray-300 rounded-md shadow-sm" })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsx("label", { className: "block text-sm font-bold text-gray-700 mb-1", children: "Description" }),
            /* @__PURE__ */ e.jsx("textarea", { value: a.cta.description, onChange: (t) => l("cta", "description", t.target.value), className: "w-full border-gray-300 rounded-md shadow-sm", rows: "2" })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "flex gap-4", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ e.jsx("label", { className: "block text-sm font-bold text-gray-700 mb-1", children: "Button Text" }),
              /* @__PURE__ */ e.jsx("input", { type: "text", value: a.cta.buttonText, onChange: (t) => l("cta", "buttonText", t.target.value), className: "w-full border-gray-300 rounded-md shadow-sm" })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ e.jsx("label", { className: "block text-sm font-bold text-gray-700 mb-1", children: "Button URL" }),
              /* @__PURE__ */ e.jsx("input", { type: "text", value: a.cta.buttonUrl, onChange: (t) => l("cta", "buttonUrl", t.target.value), className: "w-full border-gray-300 rounded-md shadow-sm" })
            ] })
          ] })
        ] }) })
      ] })
    ] })
  ] });
};
export {
  S as default
};
