import { r, j as e } from "./main-C4Y7UEwf.mjs";
import { M as j } from "./MediaPicker-DcG7_P1U.mjs";
const C = () => {
  const [s, i] = r.useState({
    hero: { title: "", subtitle: "", kicker: "", backgroundImage: "" },
    intro: { title: "", content: "" },
    holes: []
  }), [l, y] = r.useState(1), [N, b] = r.useState(!0), [h, g] = r.useState(!1), [c, o] = r.useState({ text: "", type: "" }), u = window.wingateAdminData?.root || "/wp-json/", w = window.wingateAdminData?.nonce || "";
  r.useEffect(() => {
    v();
  }, []);
  const v = async () => {
    b(!0);
    try {
      const t = await fetch(`${u}wingate/v1/hole-by-hole`);
      if (!t.ok) throw new Error("Failed to fetch settings");
      const a = await t.json();
      i(a);
    } catch (t) {
      o({ text: "Error loading settings: " + t.message, type: "error" });
    } finally {
      b(!1);
    }
  }, k = async () => {
    g(!0), o({ text: "", type: "" });
    try {
      if (!(await fetch(`${u}wingate/v1/hole-by-hole`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-WP-Nonce": w
        },
        body: JSON.stringify(s)
      })).ok) throw new Error("Failed to save settings");
      o({ text: "Settings saved successfully!", type: "success" }), setTimeout(() => o({ text: "", type: "" }), 3e3);
    } catch (t) {
      o({ text: "Error saving settings: " + t.message, type: "error" });
    } finally {
      g(!1);
    }
  }, n = (t, a, x) => {
    i((d) => ({
      ...d,
      [t]: {
        ...d[t],
        [a]: x
      }
    }));
  }, p = (t, a, x) => {
    i((d) => ({
      ...d,
      holes: d.holes.map(
        (m) => m.hole === t ? { ...m, [a]: x } : m
      )
    }));
  };
  if (N)
    return /* @__PURE__ */ e.jsx("div", { className: "p-8 text-center text-gray-500", children: "Loading Hole by Hole settings..." });
  const f = s.holes?.find((t) => t.hole === l) || { image: "", description: "" };
  return /* @__PURE__ */ e.jsxs("div", { className: "wingate-admin-spa max-w-5xl mx-auto p-6 font-montserrat", children: [
    /* @__PURE__ */ e.jsxs("header", { className: "flex justify-between items-center mb-8 border-b pb-4", children: [
      /* @__PURE__ */ e.jsxs("div", { children: [
        /* @__PURE__ */ e.jsxs("h1", { className: "text-3xl font-cinzel font-bold text-brand-blue mb-1", children: [
          "Hole By Hole ",
          /* @__PURE__ */ e.jsx("span", { className: "text-brand-yellow", children: "Settings" })
        ] }),
        /* @__PURE__ */ e.jsx("p", { className: "text-gray-500 text-sm", children: "Manage the visual content for the Hole by Hole page." })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-4", children: [
        c.text && /* @__PURE__ */ e.jsx("span", { className: `px-4 py-2 rounded-md text-sm font-bold ${c.type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`, children: c.text }),
        /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: k,
            disabled: h,
            className: "bg-brand-blue hover:bg-brand-yellow text-white hover:text-brand-blue font-bold py-2 px-6 rounded transition-colors",
            children: h ? "Saving..." : "Save All Settings"
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
              /* @__PURE__ */ e.jsx("input", { type: "text", value: s.hero.kicker, onChange: (t) => n("hero", "kicker", t.target.value), className: "w-full border-gray-300 rounded-md shadow-sm" })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("label", { className: "block text-sm font-bold text-gray-700 mb-1", children: "Title" }),
              /* @__PURE__ */ e.jsx("input", { type: "text", value: s.hero.title, onChange: (t) => n("hero", "title", t.target.value), className: "w-full border-gray-300 rounded-md shadow-sm" })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("label", { className: "block text-sm font-bold text-gray-700 mb-1", children: "Subtitle" }),
              /* @__PURE__ */ e.jsx("input", { type: "text", value: s.hero.subtitle, onChange: (t) => n("hero", "subtitle", t.target.value), className: "w-full border-gray-300 rounded-md shadow-sm" })
            ] })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsx("label", { className: "block text-sm font-bold text-gray-700 mb-1", children: "Background Image" }),
            /* @__PURE__ */ e.jsx(j, { value: s.hero.backgroundImage, onSelect: (t) => n("hero", "backgroundImage", t) })
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
            /* @__PURE__ */ e.jsx("label", { className: "block text-sm font-bold text-gray-700 mb-1", children: "Title" }),
            /* @__PURE__ */ e.jsx("input", { type: "text", value: s.intro.title, onChange: (t) => n("intro", "title", t.target.value), className: "w-full border-gray-300 rounded-md shadow-sm" })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsx("label", { className: "block text-sm font-bold text-gray-700 mb-1", children: "Content" }),
            /* @__PURE__ */ e.jsx(
              "textarea",
              {
                value: s.intro.content,
                onChange: (t) => n("intro", "content", t.target.value),
                className: "w-full border-gray-300 rounded-md shadow-sm",
                rows: "4"
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs("section", { className: "bg-white p-6 rounded-lg shadow-sm border border-gray-100", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between items-center mb-6", children: [
          /* @__PURE__ */ e.jsxs("h2", { className: "text-xl font-cinzel text-brand-blue font-bold flex items-center gap-2", children: [
            /* @__PURE__ */ e.jsx("span", { className: "w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center text-sm", children: "3" }),
            "Hole Content Editor"
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ e.jsx("label", { className: "text-sm font-bold text-gray-500 uppercase tracking-widest", children: "Select Hole:" }),
            /* @__PURE__ */ e.jsx(
              "select",
              {
                value: l,
                onChange: (t) => y(Number(t.target.value)),
                className: "border-gray-300 rounded-md shadow-sm font-cinzel font-bold text-brand-blue text-lg",
                children: Array.from({ length: 18 }, (t, a) => a + 1).map((t) => /* @__PURE__ */ e.jsxs("option", { value: t, children: [
                  "Hole ",
                  t
                ] }, t))
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "bg-brand-gray/30 p-6 rounded-xl border border-gray-100 flex flex-col md:flex-row gap-8", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex-1 space-y-4", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "bg-brand-blue text-white px-4 py-2 rounded-md inline-block mb-2", children: [
              /* @__PURE__ */ e.jsx("span", { className: "text-xs uppercase tracking-widest opacity-75 mr-2", children: "Editing" }),
              /* @__PURE__ */ e.jsxs("span", { className: "font-cinzel font-bold text-xl text-brand-yellow", children: [
                "Hole ",
                l
              ] })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("label", { className: "block text-sm font-bold text-gray-700 mb-2", children: "Hole Description" }),
              /* @__PURE__ */ e.jsx(
                "textarea",
                {
                  value: f.description,
                  onChange: (t) => p(l, "description", t.target.value),
                  className: "w-full border-gray-300 rounded-md shadow-sm min-h-[150px]",
                  placeholder: "Enter the description and strategy for this hole..."
                }
              ),
              /* @__PURE__ */ e.jsxs("p", { className: "text-xs text-gray-400 mt-2 italic", children: [
                "Note: Par, Index, and Distances for Hole ",
                l,
                " are managed in the ",
                /* @__PURE__ */ e.jsx("a", { href: "?page=wingate-scorecard-maker", className: "text-brand-blue underline", children: "Scorecard Maker" }),
                "."
              ] })
            ] })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ e.jsx("label", { className: "block text-sm font-bold text-gray-700 mb-2", children: "Hole Image" }),
            /* @__PURE__ */ e.jsx(
              j,
              {
                value: f.image,
                onSelect: (t) => p(l, "image", t)
              }
            )
          ] })
        ] })
      ] })
    ] })
  ] });
};
export {
  C as default
};
