import { r as i, j as e } from "./main-D0uV6uTS.mjs";
import { M as w } from "./MediaPicker-wZAWg_bt.mjs";
const E = () => {
  const [l, x] = i.useState({
    hero: { kicker: "", title: "", subtitle: "", backgroundImage: "" },
    intro: { kicker: "", title: "", content: "" },
    menRates: [],
    ladiesRates: [],
    allRates: [],
    cta: { title: "", description: "", buttonText: "", buttonUrl: "", backgroundImage: "" }
  }), [v, p] = i.useState(!0), [j, y] = i.useState(!1), [m, b] = i.useState({ text: "", type: "" }), [o, h] = i.useState("men"), f = window.wingateAdminData?.root || "/wp-json/", N = window.wingateAdminData?.nonce || "";
  i.useEffect(() => {
    k();
  }, []);
  const k = async () => {
    p(!0);
    try {
      const t = await fetch(`${f}wingate/v1/rates-settings`);
      if (!t.ok) throw new Error("Failed to fetch settings");
      const s = await t.json();
      x(s);
    } catch (t) {
      b({ text: "Error loading settings: " + t.message, type: "error" });
    } finally {
      p(!1);
    }
  }, C = async () => {
    y(!0), b({ text: "", type: "" });
    try {
      if (!(await fetch(`${f}wingate/v1/rates-settings`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-WP-Nonce": N
        },
        body: JSON.stringify(l)
      })).ok) throw new Error("Failed to save settings");
      b({ text: "Settings saved successfully!", type: "success" }), setTimeout(() => b({ text: "", type: "" }), 3e3);
    } catch (t) {
      b({ text: "Error saving settings: " + t.message, type: "error" });
    } finally {
      y(!1);
    }
  }, d = (t, s, n) => {
    x((a) => ({
      ...a,
      [t]: {
        ...a[t],
        [s]: n
      }
    }));
  }, c = (t, s, n, a) => {
    x((r) => {
      const g = [...r[t]];
      return g[s] = { ...g[s], [n]: a }, { ...r, [t]: g };
    });
  }, R = (t) => {
    x((s) => ({
      ...s,
      [t]: [...s[t], { category: "", desc: "", quarterly: "", monthly: "", annual: "", flat: "" }]
    }));
  }, S = (t, s) => {
    x((n) => {
      const a = [...n[t]];
      return a.splice(s, 1), { ...n, [t]: a };
    });
  };
  if (v)
    return /* @__PURE__ */ e.jsx("div", { className: "p-8 text-center text-gray-500", children: "Loading Rates settings..." });
  const u = (t, s) => /* @__PURE__ */ e.jsxs("div", { className: "bg-brand-gray/30 p-6 rounded-xl border border-gray-100 overflow-x-auto", children: [
    /* @__PURE__ */ e.jsxs("table", { className: "w-full text-left min-w-[800px]", children: [
      /* @__PURE__ */ e.jsx("thead", { children: /* @__PURE__ */ e.jsxs("tr", { className: "text-xs font-bold text-gray-500 uppercase tracking-wider border-b", children: [
        /* @__PURE__ */ e.jsx("th", { className: "pb-2 w-1/5", children: "Category" }),
        /* @__PURE__ */ e.jsx("th", { className: "pb-2 w-1/4", children: "Description" }),
        s.includes("quarterly") && /* @__PURE__ */ e.jsx("th", { className: "pb-2 w-24", children: "Quarterly ($)" }),
        s.includes("monthly") && /* @__PURE__ */ e.jsx("th", { className: "pb-2 w-24", children: "Monthly ($)" }),
        s.includes("annual") && /* @__PURE__ */ e.jsx("th", { className: "pb-2 w-24", children: "Annual ($)" }),
        s.includes("flat") && /* @__PURE__ */ e.jsx("th", { className: "pb-2 w-24", children: "Flat Fee ($)" }),
        /* @__PURE__ */ e.jsx("th", { className: "pb-2 w-16 text-center", children: "Actions" })
      ] }) }),
      /* @__PURE__ */ e.jsx("tbody", { className: "divide-y divide-gray-100", children: l[t].map((n, a) => /* @__PURE__ */ e.jsxs("tr", { className: "hover:bg-gray-50/50", children: [
        /* @__PURE__ */ e.jsx("td", { className: "py-2 pr-2", children: /* @__PURE__ */ e.jsx("input", { type: "text", value: n.category, onChange: (r) => c(t, a, "category", r.target.value), className: "w-full text-sm border-gray-300 rounded shadow-sm", placeholder: "e.g. MALE" }) }),
        /* @__PURE__ */ e.jsx("td", { className: "py-2 pr-2", children: /* @__PURE__ */ e.jsx("input", { type: "text", value: n.desc, onChange: (r) => c(t, a, "desc", r.target.value), className: "w-full text-sm border-gray-300 rounded shadow-sm", placeholder: "Description" }) }),
        s.includes("quarterly") && /* @__PURE__ */ e.jsx("td", { className: "py-2 pr-2", children: /* @__PURE__ */ e.jsx("input", { type: "text", value: n.quarterly, onChange: (r) => c(t, a, "quarterly", r.target.value), className: "w-full text-sm border-gray-300 rounded shadow-sm" }) }),
        s.includes("monthly") && /* @__PURE__ */ e.jsx("td", { className: "py-2 pr-2", children: /* @__PURE__ */ e.jsx("input", { type: "text", value: n.monthly, onChange: (r) => c(t, a, "monthly", r.target.value), className: "w-full text-sm border-gray-300 rounded shadow-sm" }) }),
        s.includes("annual") && /* @__PURE__ */ e.jsx("td", { className: "py-2 pr-2", children: /* @__PURE__ */ e.jsx("input", { type: "text", value: n.annual, onChange: (r) => c(t, a, "annual", r.target.value), className: "w-full text-sm border-gray-300 rounded shadow-sm" }) }),
        s.includes("flat") && /* @__PURE__ */ e.jsx("td", { className: "py-2 pr-2", children: /* @__PURE__ */ e.jsx("input", { type: "text", value: n.flat, onChange: (r) => c(t, a, "flat", r.target.value), className: "w-full text-sm border-gray-300 rounded shadow-sm" }) }),
        /* @__PURE__ */ e.jsx("td", { className: "py-2 text-center", children: /* @__PURE__ */ e.jsx("button", { onClick: () => S(t, a), className: "text-red-500 hover:text-red-700 p-1 bg-red-50 rounded", title: "Remove Row", children: /* @__PURE__ */ e.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-4 w-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" }) }) }) })
      ] }, a)) })
    ] }),
    /* @__PURE__ */ e.jsxs(
      "button",
      {
        onClick: () => R(t),
        className: "mt-4 flex items-center gap-2 text-sm font-bold text-brand-blue hover:text-brand-yellow font-cinzel",
        children: [
          /* @__PURE__ */ e.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-4 w-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 4v16m8-8H4" }) }),
          "Add Row"
        ]
      }
    )
  ] });
  return /* @__PURE__ */ e.jsxs("div", { className: "wingate-admin-spa max-w-6xl mx-auto p-6 font-montserrat", children: [
    /* @__PURE__ */ e.jsxs("header", { className: "flex justify-between items-center mb-8 border-b pb-4", children: [
      /* @__PURE__ */ e.jsxs("div", { children: [
        /* @__PURE__ */ e.jsxs("h1", { className: "text-3xl font-cinzel font-bold text-brand-blue mb-1", children: [
          "Rates & Subs ",
          /* @__PURE__ */ e.jsx("span", { className: "text-brand-yellow", children: "Settings" })
        ] }),
        /* @__PURE__ */ e.jsx("p", { className: "text-gray-500 text-sm", children: "Manage the visual content and pricing tables for the Rates page." })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-4", children: [
        m.text && /* @__PURE__ */ e.jsx("span", { className: `px-4 py-2 rounded-md text-sm font-bold ${m.type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`, children: m.text }),
        /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: C,
            disabled: j,
            className: "bg-brand-blue hover:bg-brand-yellow text-white hover:text-brand-blue font-bold py-2 px-6 rounded transition-colors",
            children: j ? "Saving..." : "Save All Settings"
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
              /* @__PURE__ */ e.jsx("label", { className: "block text-sm font-bold text-gray-700 mb-1", children: "Kicker" }),
              /* @__PURE__ */ e.jsx("input", { type: "text", value: l.hero.kicker, onChange: (t) => d("hero", "kicker", t.target.value), className: "w-full border-gray-300 rounded-md shadow-sm" })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("label", { className: "block text-sm font-bold text-gray-700 mb-1", children: "Title" }),
              /* @__PURE__ */ e.jsx("textarea", { value: l.hero.title, onChange: (t) => d("hero", "title", t.target.value), className: "w-full border-gray-300 rounded-md shadow-sm", rows: "2" })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("label", { className: "block text-sm font-bold text-gray-700 mb-1", children: "Subtitle" }),
              /* @__PURE__ */ e.jsx("input", { type: "text", value: l.hero.subtitle, onChange: (t) => d("hero", "subtitle", t.target.value), className: "w-full border-gray-300 rounded-md shadow-sm" })
            ] })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsx("label", { className: "block text-sm font-bold text-gray-700 mb-1", children: "Background Image" }),
            /* @__PURE__ */ e.jsx(w, { value: l.hero.backgroundImage, onSelect: (t) => d("hero", "backgroundImage", t) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs("section", { className: "bg-white p-6 rounded-lg shadow-sm border border-gray-100", children: [
        /* @__PURE__ */ e.jsxs("h2", { className: "text-xl font-cinzel text-brand-blue font-bold mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ e.jsx("span", { className: "w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center text-sm", children: "2" }),
          "Intro Section"
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsx("label", { className: "block text-sm font-bold text-gray-700 mb-1", children: "Kicker" }),
            /* @__PURE__ */ e.jsx("input", { type: "text", value: l.intro.kicker, onChange: (t) => d("intro", "kicker", t.target.value), className: "w-full border-gray-300 rounded-md shadow-sm" })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsx("label", { className: "block text-sm font-bold text-gray-700 mb-1", children: "Title" }),
            /* @__PURE__ */ e.jsx("textarea", { value: l.intro.title, onChange: (t) => d("intro", "title", t.target.value), className: "w-full border-gray-300 rounded-md shadow-sm", rows: "2" })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsx("label", { className: "block text-sm font-bold text-gray-700 mb-1", children: "Content" }),
            /* @__PURE__ */ e.jsx("textarea", { value: l.intro.content, onChange: (t) => d("intro", "content", t.target.value), className: "w-full border-gray-300 rounded-md shadow-sm", rows: "3" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs("section", { className: "bg-white p-6 rounded-lg shadow-sm border border-gray-100", children: [
        /* @__PURE__ */ e.jsxs("h2", { className: "text-xl font-cinzel text-brand-blue font-bold mb-6 flex items-center gap-2 border-b pb-4", children: [
          /* @__PURE__ */ e.jsx("span", { className: "w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center text-sm", children: "3" }),
          "Rates Tables Editor"
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex border-b mb-6", children: [
          /* @__PURE__ */ e.jsx(
            "button",
            {
              className: `px-6 py-3 font-cinzel font-bold tracking-wider text-sm ${o === "men" ? "border-b-2 border-brand-yellow text-brand-blue" : "text-gray-500 hover:text-brand-blue"}`,
              onClick: () => h("men"),
              children: "Gentlemen"
            }
          ),
          /* @__PURE__ */ e.jsx(
            "button",
            {
              className: `px-6 py-3 font-cinzel font-bold tracking-wider text-sm ${o === "ladies" ? "border-b-2 border-brand-yellow text-brand-blue" : "text-gray-500 hover:text-brand-blue"}`,
              onClick: () => h("ladies"),
              children: "Ladies"
            }
          ),
          /* @__PURE__ */ e.jsx(
            "button",
            {
              className: `px-6 py-3 font-cinzel font-bold tracking-wider text-sm ${o === "extras" ? "border-b-2 border-brand-yellow text-brand-blue" : "text-gray-500 hover:text-brand-blue"}`,
              onClick: () => h("extras"),
              children: "Admin & Extras"
            }
          )
        ] }),
        /* @__PURE__ */ e.jsxs("div", { children: [
          o === "men" && /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-500 mb-4", children: 'Edit the Gentlemen rates table. Leave fields like "Annual" blank if they are Quarterly/Monthly subscriptions.' }),
            u("menRates", ["quarterly", "monthly", "annual"])
          ] }),
          o === "ladies" && /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-500 mb-4", children: 'Edit the Ladies rates table. Leave fields like "Annual" blank if they are Quarterly/Monthly subscriptions.' }),
            u("ladiesRates", ["quarterly", "monthly", "annual"])
          ] }),
          o === "extras" && /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-500 mb-4", children: "Edit the Admin & Extras rates table. These are usually flat fees." }),
            u("allRates", ["flat"])
          ] })
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs("section", { className: "bg-white p-6 rounded-lg shadow-sm border border-gray-100", children: [
        /* @__PURE__ */ e.jsxs("h2", { className: "text-xl font-cinzel text-brand-blue font-bold mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ e.jsx("span", { className: "w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center text-sm", children: "4" }),
          "Call To Action"
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("label", { className: "block text-sm font-bold text-gray-700 mb-1", children: "Title" }),
              /* @__PURE__ */ e.jsx("textarea", { value: l.cta.title, onChange: (t) => d("cta", "title", t.target.value), className: "w-full border-gray-300 rounded-md shadow-sm", rows: "2" })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("label", { className: "block text-sm font-bold text-gray-700 mb-1", children: "Description" }),
              /* @__PURE__ */ e.jsx("textarea", { value: l.cta.description, onChange: (t) => d("cta", "description", t.target.value), className: "w-full border-gray-300 rounded-md shadow-sm", rows: "2" })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "flex gap-4", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "flex-1", children: [
                /* @__PURE__ */ e.jsx("label", { className: "block text-sm font-bold text-gray-700 mb-1", children: "Button Text" }),
                /* @__PURE__ */ e.jsx("input", { type: "text", value: l.cta.buttonText, onChange: (t) => d("cta", "buttonText", t.target.value), className: "w-full border-gray-300 rounded-md shadow-sm" })
              ] }),
              /* @__PURE__ */ e.jsxs("div", { className: "flex-1", children: [
                /* @__PURE__ */ e.jsx("label", { className: "block text-sm font-bold text-gray-700 mb-1", children: "Button URL" }),
                /* @__PURE__ */ e.jsx("input", { type: "text", value: l.cta.buttonUrl, onChange: (t) => d("cta", "buttonUrl", t.target.value), className: "w-full border-gray-300 rounded-md shadow-sm" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsx("label", { className: "block text-sm font-bold text-gray-700 mb-1", children: "Background Image" }),
            /* @__PURE__ */ e.jsx(w, { value: l.cta.backgroundImage, onSelect: (t) => d("cta", "backgroundImage", t) })
          ] })
        ] })
      ] })
    ] })
  ] });
};
export {
  E as default
};
