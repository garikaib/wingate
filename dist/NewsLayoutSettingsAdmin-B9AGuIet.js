import { r as a, j as e } from "./main-BJ0M0hbP.js";
const y = [
  {
    key: "current",
    name: "Current Premium",
    subtitle: "Existing Wingate editorial composition"
  },
  {
    key: "classic-a",
    name: "Classic A",
    subtitle: "Hero lead + elegant stacked editorial cards"
  },
  {
    key: "classic-b",
    name: "Classic B",
    subtitle: "Alternating magazine strips with strong visuals"
  },
  {
    key: "modern-a",
    name: "Modern A",
    subtitle: "Asymmetric lead + dynamic card grid"
  },
  {
    key: "modern-e",
    name: "Modern E",
    subtitle: "Sleek premium grid with dense metadata"
  },
  {
    key: "slider-a",
    name: "Slider A",
    subtitle: "Horizontal featured rail + supporting headlines"
  }
], w = () => {
  const [d, c] = a.useState({ layout: "current" }), [g, m] = a.useState(!0), [n, x] = a.useState(!1), [i, r] = a.useState({ text: "", type: "" }), l = window.wingateAdminData?.root || "/wp-json/", p = window.wingateAdminData?.nonce || "";
  a.useEffect(() => {
    (async () => {
      m(!0);
      try {
        const t = await fetch(`${l}wingate/v1/news-layout-settings`);
        if (!t.ok) throw new Error("Failed to fetch news layout settings");
        const o = await t.json();
        c(o);
      } catch (t) {
        r({ text: "Error loading settings: " + t.message, type: "error" });
      } finally {
        m(!1);
      }
    })();
  }, [l]);
  const u = async (s) => {
    s.preventDefault(), x(!0), r({ text: "", type: "" });
    try {
      if (!(await fetch(`${l}wingate/v1/news-layout-settings`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-WP-Nonce": p
        },
        body: JSON.stringify(d)
      })).ok) throw new Error("Failed to save layout settings");
      r({ text: "News layout updated successfully.", type: "success" });
    } catch (t) {
      r({ text: "Error saving settings: " + t.message, type: "error" });
    } finally {
      x(!1);
    }
  };
  return g ? /* @__PURE__ */ e.jsx("div", { className: "p-8", children: /* @__PURE__ */ e.jsx("p", { className: "animate-pulse text-gray-500 font-montserrat uppercase tracking-widest text-sm", children: "Loading layout settings..." }) }) : /* @__PURE__ */ e.jsxs("div", { className: "wingate-admin-spa max-w-6xl mx-auto p-4 md:p-8 text-brand-blue", children: [
    /* @__PURE__ */ e.jsxs("header", { className: "mb-8 md:mb-10", children: [
      /* @__PURE__ */ e.jsx("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/5 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-blue mb-4", children: "Wingate Admin" }),
      /* @__PURE__ */ e.jsxs("h1", { className: "text-4xl md:text-5xl font-cinzel font-bold uppercase leading-none tracking-tight mb-3", children: [
        "News ",
        /* @__PURE__ */ e.jsx("span", { className: "text-brand-yellow", children: "Layout" })
      ] }),
      /* @__PURE__ */ e.jsxs("p", { className: "text-sm md:text-base text-gray-600 max-w-3xl", children: [
        "Choose which premium news layout to display at ",
        /* @__PURE__ */ e.jsx("span", { className: "font-semibold", children: "/news/" }),
        ". Each layout keeps Wingate typography, colors, and tone."
      ] })
    ] }),
    i.text && /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `mb-8 px-5 py-4 rounded-2xl border text-sm font-medium ${i.type === "error" ? "bg-red-50 border-red-200 text-red-700" : "bg-green-50 border-green-200 text-green-700"}`,
        children: i.text
      }
    ),
    /* @__PURE__ */ e.jsxs("form", { onSubmit: u, className: "space-y-8", children: [
      /* @__PURE__ */ e.jsxs("section", { className: "bg-white p-6 md:p-8 rounded-[2rem] shadow-xl border border-gray-100", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "mb-6 pb-5 border-b border-gray-100", children: [
          /* @__PURE__ */ e.jsx("h2", { className: "text-2xl md:text-3xl font-cinzel font-bold uppercase tracking-wide text-brand-blue", children: "Select Layout" }),
          /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-500 font-montserrat mt-2", children: "Inspired by the reference set, tuned with Wingate brand styling and premium editorial feel." })
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4", children: y.map((s) => {
          const t = d.layout === s.key;
          return /* @__PURE__ */ e.jsxs(
            "label",
            {
              className: `cursor-pointer rounded-2xl border p-4 transition-all ${t ? "border-brand-blue bg-brand-blue text-white shadow-xl" : "border-gray-200 bg-gray-50/60 hover:border-brand-yellow/60 hover:bg-white"}`,
              children: [
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "radio",
                    name: "layout",
                    value: s.key,
                    checked: t,
                    onChange: (o) => c((b) => ({ ...b, layout: o.target.value })),
                    className: "sr-only"
                  }
                ),
                /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
                  /* @__PURE__ */ e.jsx("h3", { className: `font-cinzel text-lg font-bold ${t ? "!text-white" : "text-brand-blue"}`, children: s.name }),
                  /* @__PURE__ */ e.jsx("span", { className: `text-[10px] font-bold uppercase tracking-[0.2em] ${t ? "text-brand-yellow" : "text-gray-400"}`, children: t ? "Active" : "Option" })
                ] }),
                /* @__PURE__ */ e.jsx("p", { className: `text-sm leading-relaxed ${t ? "text-white/85" : "text-gray-600"}`, children: s.subtitle })
              ]
            },
            s.key
          );
        }) })
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "sticky bottom-3 z-30", children: /* @__PURE__ */ e.jsxs("div", { className: "rounded-2xl border border-gray-200 bg-white/95 backdrop-blur-sm px-4 py-3 md:px-5 md:py-4 shadow-xl flex items-center justify-between gap-4", children: [
        /* @__PURE__ */ e.jsx("p", { className: "text-xs md:text-sm text-gray-500 m-0", children: "Save to apply this layout on the News page." }),
        /* @__PURE__ */ e.jsx(
          "button",
          {
            type: "submit",
            disabled: n,
            className: `px-6 md:px-10 py-3 rounded-xl text-[11px] md:text-xs font-bold uppercase tracking-[0.18em] shadow-lg transition-all ${n ? "bg-brand-blue text-white opacity-50 cursor-not-allowed" : "bg-brand-blue text-white hover:bg-brand-yellow hover:text-brand-blue"}`,
            children: n ? "Saving..." : "Save News Layout"
          }
        )
      ] }) })
    ] })
  ] });
};
export {
  w as default
};
