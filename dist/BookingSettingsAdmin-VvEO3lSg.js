import { r as m, j as e } from "./main-BM9ReWkY.js";
import { M as T } from "./MediaPicker-CdPXCK1m.js";
const c = "bg-white p-6 md:p-8 rounded-[2rem] shadow-xl border border-gray-100", d = "mb-6 pb-5 border-b border-gray-100", o = "text-2xl md:text-3xl font-cinzel font-bold uppercase tracking-wide text-brand-blue", x = "text-sm text-gray-500 font-montserrat mt-2", l = "block text-[11px] font-bold tracking-[0.16em] uppercase text-gray-600 mb-2", n = "w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50/70 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition", E = () => {
  const [t, p] = m.useState(null), [k, y] = m.useState(!0), [u, f] = m.useState(!1), [b, h] = m.useState({ text: "", type: "" }), j = window.wingateAdminData?.root || "/wp-json/", C = window.wingateAdminData?.nonce || "";
  m.useEffect(() => {
    (async () => {
      y(!0);
      try {
        const a = await fetch(`${j}wingate/v1/booking-settings`);
        if (!a.ok) throw new Error("Failed to fetch booking settings");
        const r = await a.json();
        p(r);
      } catch (a) {
        h({ text: "Error loading settings: " + a.message, type: "error" });
      } finally {
        y(!1);
      }
    })();
  }, [j]);
  const S = async (s) => {
    s.preventDefault(), f(!0), h({ text: "", type: "" });
    try {
      if (!(await fetch(`${j}wingate/v1/booking-settings`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-WP-Nonce": C
        },
        body: JSON.stringify(t)
      })).ok) throw new Error("Failed to save booking settings");
      h({ text: "Booking settings saved.", type: "success" });
    } catch (a) {
      h({ text: "Error saving settings: " + a.message, type: "error" });
    } finally {
      f(!1);
    }
  }, i = (s, a, r) => {
    p((g) => ({
      ...g,
      [s]: {
        ...g[s],
        [a]: r
      }
    }));
  }, v = (s, a, r) => {
    p((g) => {
      const N = [...g.quickInfo];
      return N[s] = { ...N[s], [a]: r }, { ...g, quickInfo: N };
    });
  }, w = t?.dressCode?.items?.join(`
`) || "";
  return k ? /* @__PURE__ */ e.jsx("div", { className: "p-8", children: /* @__PURE__ */ e.jsx("p", { className: "animate-pulse text-gray-500 font-montserrat uppercase tracking-widest text-sm", children: "Loading settings..." }) }) : /* @__PURE__ */ e.jsxs("div", { className: "wingate-admin-spa max-w-7xl mx-auto p-4 md:p-8 text-brand-blue", children: [
    /* @__PURE__ */ e.jsxs("header", { className: "mb-8 md:mb-10", children: [
      /* @__PURE__ */ e.jsx("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/5 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-blue mb-4", children: "Wingate Admin" }),
      /* @__PURE__ */ e.jsxs("h1", { className: "text-4xl md:text-5xl font-cinzel font-bold uppercase leading-none tracking-tight mb-3", children: [
        "Booking ",
        /* @__PURE__ */ e.jsx("span", { className: "text-brand-yellow", children: "Settings" })
      ] }),
      /* @__PURE__ */ e.jsx("p", { className: "text-sm md:text-base text-gray-600 max-w-3xl", children: "Edit booking page content sections. The booking iframe embed is intentionally fixed and cannot be changed here." })
    ] }),
    b.text && /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `mb-8 px-5 py-4 rounded-2xl border text-sm font-medium ${b.type === "error" ? "bg-red-50 border-red-200 text-red-700" : "bg-green-50 border-green-200 text-green-700"}`,
        children: b.text
      }
    ),
    /* @__PURE__ */ e.jsxs("form", { onSubmit: S, className: "space-y-8 md:space-y-10", children: [
      /* @__PURE__ */ e.jsxs("section", { className: c, children: [
        /* @__PURE__ */ e.jsxs("div", { className: d, children: [
          /* @__PURE__ */ e.jsx("h2", { className: o, children: "Hero" }),
          /* @__PURE__ */ e.jsx("p", { className: x, children: "Top headline and hero image." })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-1 xl:grid-cols-[1fr_360px] gap-8", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("label", { className: l, children: "Kicker" }),
              /* @__PURE__ */ e.jsx("input", { className: n, type: "text", value: t.hero.kicker, onChange: (s) => i("hero", "kicker", s.target.value) })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("label", { className: l, children: "Title" }),
                /* @__PURE__ */ e.jsx("input", { className: n, type: "text", value: t.hero.title, onChange: (s) => i("hero", "title", s.target.value) })
              ] }),
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("label", { className: l, children: "Title Highlight" }),
                /* @__PURE__ */ e.jsx("input", { className: n, type: "text", value: t.hero.titleHighlight, onChange: (s) => i("hero", "titleHighlight", s.target.value) })
              ] })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("label", { className: l, children: "Subtitle" }),
              /* @__PURE__ */ e.jsx("input", { className: n, type: "text", value: t.hero.subtitle, onChange: (s) => i("hero", "subtitle", s.target.value) })
            ] })
          ] }),
          /* @__PURE__ */ e.jsx(T, { label: "Hero Background Image", value: t.hero.backgroundImage, onSelect: (s) => i("hero", "backgroundImage", s) })
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs("section", { className: c, children: [
        /* @__PURE__ */ e.jsxs("div", { className: d, children: [
          /* @__PURE__ */ e.jsx("h2", { className: o, children: "Quick Info Cards" }),
          /* @__PURE__ */ e.jsx("p", { className: x, children: "Edit card labels and values shown above the iframe." })
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "space-y-4", children: t.quickInfo.map((s, a) => /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-3 p-3 rounded-xl bg-gray-50 border border-gray-200", children: [
          /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsx("label", { className: l, children: "Label" }),
            /* @__PURE__ */ e.jsx("input", { className: n, type: "text", value: s.label || "", onChange: (r) => v(a, "label", r.target.value) })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsx("label", { className: l, children: "Value" }),
            /* @__PURE__ */ e.jsx("input", { className: n, type: "text", value: s.value || "", onChange: (r) => v(a, "value", r.target.value) })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsx("label", { className: l, children: "URL (Optional)" }),
            /* @__PURE__ */ e.jsx("input", { className: n, type: "text", value: s.url || "", onChange: (r) => v(a, "url", r.target.value) })
          ] })
        ] }, `quick-${a}`)) })
      ] }),
      /* @__PURE__ */ e.jsxs("section", { className: c, children: [
        /* @__PURE__ */ e.jsxs("div", { className: d, children: [
          /* @__PURE__ */ e.jsx("h2", { className: o, children: "Dress Code" }),
          /* @__PURE__ */ e.jsx("p", { className: x, children: "Title, badge letter, and checklist items." })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("label", { className: l, children: "Title" }),
              /* @__PURE__ */ e.jsx("input", { className: n, type: "text", value: t.dressCode.title, onChange: (s) => i("dressCode", "title", s.target.value) })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("label", { className: l, children: "Badge Letter" }),
              /* @__PURE__ */ e.jsx("input", { className: n, type: "text", maxLength: 2, value: t.dressCode.badge, onChange: (s) => i("dressCode", "badge", s.target.value) })
            ] })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsx("label", { className: l, children: "Items (One per line)" }),
            /* @__PURE__ */ e.jsx(
              "textarea",
              {
                className: `${n} min-h-[140px]`,
                value: w,
                onChange: (s) => i(
                  "dressCode",
                  "items",
                  s.target.value.split(`
`).map((a) => a.trim()).filter(Boolean)
                )
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs("section", { className: c, children: [
        /* @__PURE__ */ e.jsxs("div", { className: d, children: [
          /* @__PURE__ */ e.jsx("h2", { className: o, children: "Cart Hire Panel" }),
          /* @__PURE__ */ e.jsx("p", { className: x, children: "Edit heading, description, and price summary block." })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("label", { className: l, children: "Title" }),
              /* @__PURE__ */ e.jsx("input", { className: n, type: "text", value: t.cartHire.title, onChange: (s) => i("cartHire", "title", s.target.value) })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("label", { className: l, children: "Badge Letter" }),
              /* @__PURE__ */ e.jsx("input", { className: n, type: "text", maxLength: 2, value: t.cartHire.badge, onChange: (s) => i("cartHire", "badge", s.target.value) })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("label", { className: l, children: "Rate Label" }),
              /* @__PURE__ */ e.jsx("input", { className: n, type: "text", value: t.cartHire.label, onChange: (s) => i("cartHire", "label", s.target.value) })
            ] })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsx("label", { className: l, children: "Description" }),
            /* @__PURE__ */ e.jsx("textarea", { className: `${n} min-h-[100px]`, value: t.cartHire.description, onChange: (s) => i("cartHire", "description", s.target.value) })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsx("label", { className: l, children: "Rates Text" }),
            /* @__PURE__ */ e.jsx("input", { className: n, type: "text", value: t.cartHire.ratesText, onChange: (s) => i("cartHire", "ratesText", s.target.value) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs("section", { className: c, children: [
        /* @__PURE__ */ e.jsxs("div", { className: d, children: [
          /* @__PURE__ */ e.jsx("h2", { className: o, children: "Bottom CTA" }),
          /* @__PURE__ */ e.jsx("p", { className: x, children: "Button text and destination shown at the bottom of the page." })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsx("label", { className: l, children: "Button Text" }),
            /* @__PURE__ */ e.jsx("input", { className: n, type: "text", value: t.cta.text, onChange: (s) => i("cta", "text", s.target.value) })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsx("label", { className: l, children: "Button URL" }),
            /* @__PURE__ */ e.jsx("input", { className: n, type: "text", value: t.cta.url, onChange: (s) => i("cta", "url", s.target.value) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs("section", { className: c, children: [
        /* @__PURE__ */ e.jsxs("div", { className: d, children: [
          /* @__PURE__ */ e.jsx("h2", { className: o, children: "Iframe" }),
          /* @__PURE__ */ e.jsx("p", { className: x, children: "This is intentionally locked and unchanged." })
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "p-4 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-600", children: "Booking iframe URL is fixed in template and not editable by design." })
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "sticky bottom-3 z-30", children: /* @__PURE__ */ e.jsxs("div", { className: "rounded-2xl border border-gray-200 bg-white/95 backdrop-blur-sm px-4 py-3 md:px-5 md:py-4 shadow-xl flex items-center justify-between gap-4", children: [
        /* @__PURE__ */ e.jsx("p", { className: "text-xs md:text-sm text-gray-500 m-0", children: "Save after editing Booking content." }),
        /* @__PURE__ */ e.jsx(
          "button",
          {
            type: "submit",
            disabled: u,
            className: `px-6 md:px-10 py-3 rounded-xl text-[11px] md:text-xs font-bold uppercase tracking-[0.18em] shadow-lg transition-all ${u ? "bg-brand-blue text-white opacity-50 cursor-not-allowed" : "bg-brand-blue text-white hover:bg-brand-yellow hover:text-brand-blue"}`,
            children: u ? "Saving Changes..." : "Save Booking Settings"
          }
        )
      ] }) })
    ] })
  ] });
};
export {
  E as default
};
