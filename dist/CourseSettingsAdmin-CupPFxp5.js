import { r as l, j as e } from "./main-C_7mdrfg.js";
import { M as g } from "./MediaPicker-C2BMce0e.js";
const k = () => {
  const [s, d] = l.useState(null), [f, b] = l.useState(!0), [c, u] = l.useState(!1), [x, o] = l.useState({ text: "", type: "" }), m = window.wingateAdminData || {}, p = m.root || "/wp-json/", y = m.nonce || "";
  l.useEffect(() => {
    j();
  }, []);
  const j = async () => {
    b(!0);
    try {
      const t = await fetch(`${p}wingate/v1/course-settings`);
      if (!t.ok) throw new Error("Failed to fetch settings");
      const r = await t.json();
      d(r);
    } catch (t) {
      o({ text: "Error loading settings: " + t.message, type: "error" });
    } finally {
      b(!1);
    }
  }, v = async (t) => {
    t.preventDefault(), u(!0), o({ text: "", type: "" });
    try {
      if (!(await fetch(`${p}wingate/v1/course-settings`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-WP-Nonce": y
        },
        body: JSON.stringify(s)
      })).ok) throw new Error("Failed to save settings");
      o({ text: "Settings saved successfully!", type: "success" });
    } catch (r) {
      o({ text: "Error saving settings: " + r.message, type: "error" });
    } finally {
      u(!1);
    }
  }, a = (t, r, n) => {
    d((h) => ({
      ...h,
      [t]: {
        ...h[t],
        [r]: n
      }
    }));
  }, i = (t, r) => {
    d((n) => ({
      ...n,
      intro: {
        ...n.intro,
        stats: {
          ...n.intro.stats,
          [t]: r
        }
      }
    }));
  };
  return f ? /* @__PURE__ */ e.jsx("div", { className: "p-8", children: /* @__PURE__ */ e.jsx("p", { className: "animate-pulse text-gray-500 font-montserrat uppercase tracking-widest", children: "Loading settings..." }) }) : /* @__PURE__ */ e.jsxs("div", { className: "wingate-admin-spa p-8 max-w-5xl font-montserrat", children: [
    /* @__PURE__ */ e.jsxs("header", { className: "mb-10", children: [
      /* @__PURE__ */ e.jsx("h1", { className: "text-4xl font-cinzel text-brand-blue font-bold mb-2 uppercase tracking-wide", children: "The Course Settings" }),
      /* @__PURE__ */ e.jsx("p", { className: "text-gray-600", children: "Customize the appearance and data of the Course information page." })
    ] }),
    x.text && /* @__PURE__ */ e.jsx("div", { className: `p-4 mb-8 rounded shadow-sm border-l-4 ${x.type === "error" ? "bg-red-50 border-red-500 text-red-700" : "bg-green-50 border-green-500 text-green-700"}`, children: x.text }),
    /* @__PURE__ */ e.jsxs("form", { onSubmit: v, className: "space-y-12", children: [
      /* @__PURE__ */ e.jsxs("section", { className: "bg-white p-8 rounded-xl shadow-md border border-gray-100", children: [
        /* @__PURE__ */ e.jsx("h2", { className: "text-2xl font-cinzel text-brand-blue font-bold mb-6 pb-2 border-b border-gray-100 uppercase tracking-widest", children: "Hero Section" }),
        /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("label", { className: "block text-sm font-bold text-gray-700 mb-1", children: "Kicker" }),
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  type: "text",
                  value: s.hero.kicker,
                  onChange: (t) => a("hero", "kicker", t.target.value),
                  className: "w-full px-4 py-2 border rounded focus:ring-2 focus:ring-brand-blue outline-none"
                }
              )
            ] }),
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("label", { className: "block text-sm font-bold text-gray-700 mb-1", children: "Title" }),
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  type: "text",
                  value: s.hero.title,
                  onChange: (t) => a("hero", "title", t.target.value),
                  className: "w-full px-4 py-2 border rounded focus:ring-2 focus:ring-brand-blue outline-none"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ e.jsx(
            g,
            {
              label: "Hero Background Image",
              value: s.hero.backgroundImage,
              onSelect: (t) => a("hero", "backgroundImage", t)
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs("section", { className: "bg-white p-8 rounded-xl shadow-md border border-gray-100", children: [
        /* @__PURE__ */ e.jsx("h2", { className: "text-2xl font-cinzel text-brand-blue font-bold mb-6 pb-2 border-b border-gray-100 uppercase tracking-widest", children: "Intro Section" }),
        /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("label", { className: "block text-sm font-bold text-gray-700 mb-1", children: "Intro Title (use \\n for line breaks)" }),
              /* @__PURE__ */ e.jsx(
                "textarea",
                {
                  value: s.intro.title,
                  onChange: (t) => a("intro", "title", t.target.value),
                  className: "w-full px-4 py-2 border rounded focus:ring-2 focus:ring-brand-blue outline-none h-24 font-cinzel"
                }
              )
            ] }),
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("label", { className: "block text-sm font-bold text-gray-700 mb-1", children: "Intro Content" }),
              /* @__PURE__ */ e.jsx(
                "textarea",
                {
                  value: s.intro.content,
                  onChange: (t) => a("intro", "content", t.target.value),
                  className: "w-full px-4 py-2 border rounded h-48 focus:ring-2 focus:ring-brand-blue outline-none leading-relaxed"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ e.jsx(
              g,
              {
                label: "Intro Feature Image",
                value: s.intro.image,
                onSelect: (t) => a("intro", "image", t)
              }
            ),
            /* @__PURE__ */ e.jsxs("div", { className: "bg-gray-50 p-6 rounded-lg border border-gray-200", children: [
              /* @__PURE__ */ e.jsx("h3", { className: "font-bold text-brand-blue uppercase tracking-widest text-sm mb-4", children: "Course Stats" }),
              /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "block text-xs font-bold text-gray-500 uppercase mb-1", children: "Holes" }),
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "text",
                      value: s.intro.stats.holes,
                      onChange: (t) => i("holes", t.target.value),
                      className: "w-full px-3 py-1 border rounded text-lg font-bold text-brand-blue"
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "block text-xs font-bold text-gray-500 uppercase mb-1", children: "Par" }),
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "text",
                      value: s.intro.stats.par,
                      onChange: (t) => i("par", t.target.value),
                      className: "w-full px-3 py-1 border rounded text-lg font-bold text-brand-blue"
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "block text-xs font-bold text-gray-500 uppercase mb-1", children: "Distance" }),
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "text",
                      value: s.intro.stats.distance,
                      onChange: (t) => i("distance", t.target.value),
                      className: "w-full px-3 py-1 border rounded text-lg font-bold text-brand-blue"
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("label", { className: "block text-xs font-bold text-gray-500 uppercase mb-1", children: "Est. Time" }),
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "text",
                      value: s.intro.stats.time,
                      onChange: (t) => i("time", t.target.value),
                      className: "w-full px-3 py-1 border rounded text-lg font-bold text-brand-blue"
                    }
                  )
                ] })
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs("section", { className: "bg-white p-8 rounded-xl shadow-md border border-gray-100", children: [
        /* @__PURE__ */ e.jsx("h2", { className: "text-2xl font-cinzel text-brand-blue font-bold mb-6 pb-2 border-b border-gray-100 uppercase tracking-widest", children: "Gallery Call to Action" }),
        /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("label", { className: "block text-sm font-bold text-gray-700 mb-1", children: "Kicker" }),
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  type: "text",
                  value: s.galleryCta.kicker,
                  onChange: (t) => a("galleryCta", "kicker", t.target.value),
                  className: "w-full px-4 py-2 border rounded focus:ring-2 focus:ring-brand-blue outline-none"
                }
              )
            ] }),
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("label", { className: "block text-sm font-bold text-gray-700 mb-1", children: "Title (use \\n for line breaks)" }),
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  type: "text",
                  value: s.galleryCta.title,
                  onChange: (t) => a("galleryCta", "title", t.target.value),
                  className: "w-full px-4 py-2 border rounded focus:ring-2 focus:ring-brand-blue outline-none"
                }
              )
            ] }),
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("label", { className: "block text-sm font-bold text-gray-700 mb-1", children: "Description" }),
              /* @__PURE__ */ e.jsx(
                "textarea",
                {
                  value: s.galleryCta.description,
                  onChange: (t) => a("galleryCta", "description", t.target.value),
                  className: "w-full px-4 py-2 border rounded h-24 focus:ring-2 focus:ring-brand-blue outline-none"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ e.jsx(
            g,
            {
              label: "CTA Background Image",
              value: s.galleryCta.image,
              onSelect: (t) => a("galleryCta", "image", t)
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "flex justify-end pt-6", children: /* @__PURE__ */ e.jsx(
        "button",
        {
          type: "submit",
          disabled: c,
          className: `px-12 py-4 bg-brand-blue text-white rounded font-montserrat font-bold uppercase tracking-widest shadow-lg transition-all transform hover:-translate-y-1 ${c ? "opacity-50 cursor-not-allowed" : "hover:bg-brand-yellow hover:text-brand-blue"}`,
          children: c ? "Saving Changes..." : "Save All Settings"
        }
      ) })
    ] })
  ] });
};
export {
  k as default
};
