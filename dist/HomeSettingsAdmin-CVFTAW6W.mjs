import { r as o, j as e } from "./main-D0uV6uTS.mjs";
import { M as m } from "./MediaPicker-wZAWg_bt.mjs";
const g = "bg-white p-6 md:p-8 rounded-[2rem] shadow-xl border border-gray-100", h = "mb-6 pb-5 border-b border-gray-100", p = "text-2xl md:text-3xl font-cinzel font-bold uppercase tracking-wide text-brand-blue", u = "text-sm text-gray-500 font-montserrat mt-2", r = "block text-[11px] font-bold tracking-[0.16em] uppercase text-gray-600 mb-2", i = "w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50/70 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition", T = () => {
  const [a, b] = o.useState(null), [S, y] = o.useState(!0), [j, f] = o.useState(!1), [N, d] = o.useState({ text: "", type: "" }), w = window.wingateAdminData?.root || "/wp-json/", k = window.wingateAdminData?.nonce || "";
  o.useEffect(() => {
    C();
  }, []);
  const C = async () => {
    y(!0);
    try {
      const s = await fetch(`${w}wingate/v1/home-settings`);
      if (!s.ok) throw new Error("Failed to fetch settings");
      const t = await s.json();
      b(t);
    } catch (s) {
      d({ text: "Error loading settings: " + s.message, type: "error" });
    } finally {
      y(!1);
    }
  }, I = async (s) => {
    s.preventDefault(), f(!0), d({ text: "", type: "" });
    try {
      if (!(await fetch(`${w}wingate/v1/home-settings`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-WP-Nonce": k
        },
        body: JSON.stringify(a)
      })).ok) throw new Error("Failed to save settings");
      d({ text: "Settings saved successfully.", type: "success" });
    } catch (t) {
      d({ text: "Error saving settings: " + t.message, type: "error" });
    } finally {
      f(!1);
    }
  }, n = (s, t, l) => {
    b((c) => ({
      ...c,
      [s]: {
        ...c[s],
        [t]: l
      }
    }));
  }, x = (s, t, l) => {
    b((c) => {
      const v = [...c.cards];
      return v[s] = { ...v[s], [t]: l }, { ...c, cards: v };
    });
  };
  return S ? /* @__PURE__ */ e.jsx("div", { className: "p-8", children: /* @__PURE__ */ e.jsx("p", { className: "animate-pulse text-gray-500 font-montserrat uppercase tracking-widest text-sm", children: "Loading settings..." }) }) : /* @__PURE__ */ e.jsxs("div", { className: "wingate-admin-spa max-w-7xl mx-auto p-4 md:p-8 text-brand-blue", children: [
    /* @__PURE__ */ e.jsxs("header", { className: "mb-8 md:mb-10", children: [
      /* @__PURE__ */ e.jsx("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/5 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-blue mb-4", children: "Wingate Admin" }),
      /* @__PURE__ */ e.jsxs("h1", { className: "text-4xl md:text-5xl font-cinzel font-bold uppercase leading-none tracking-tight mb-3", children: [
        "Home Page ",
        /* @__PURE__ */ e.jsx("span", { className: "text-brand-yellow", children: "Settings" })
      ] }),
      /* @__PURE__ */ e.jsx("p", { className: "text-sm md:text-base text-gray-600 max-w-3xl", children: "Manage homepage content, copy, and media in one place. Structure has been simplified so each section is easier to edit." })
    ] }),
    N.text && /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `mb-8 px-5 py-4 rounded-2xl border text-sm font-medium ${N.type === "error" ? "bg-red-50 border-red-200 text-red-700" : "bg-green-50 border-green-200 text-green-700"}`,
        children: N.text
      }
    ),
    /* @__PURE__ */ e.jsxs("form", { onSubmit: I, className: "space-y-8 md:space-y-10", children: [
      /* @__PURE__ */ e.jsxs("section", { className: g, children: [
        /* @__PURE__ */ e.jsxs("div", { className: h, children: [
          /* @__PURE__ */ e.jsx("h2", { className: p, children: "Hero Section" }),
          /* @__PURE__ */ e.jsx("p", { className: u, children: "Main hero copy and top background image." })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-1 xl:grid-cols-[1fr_360px] gap-8", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "space-y-5", children: [
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("label", { className: r, children: "Kicker" }),
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  type: "text",
                  value: a.hero.kicker,
                  onChange: (s) => n("hero", "kicker", s.target.value),
                  className: i
                }
              )
            ] }),
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("label", { className: r, children: "Main Title" }),
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  type: "text",
                  value: a.hero.title,
                  onChange: (s) => n("hero", "title", s.target.value),
                  className: i
                }
              )
            ] }),
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("label", { className: r, children: "Subtitle" }),
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  type: "text",
                  value: a.hero.subtitle,
                  onChange: (s) => n("hero", "subtitle", s.target.value),
                  className: i
                }
              )
            ] }),
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("label", { className: r, children: "Description" }),
              /* @__PURE__ */ e.jsx(
                "textarea",
                {
                  value: a.hero.description,
                  onChange: (s) => n("hero", "description", s.target.value),
                  className: `${i} min-h-[128px]`
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ e.jsx(
            m,
            {
              label: "Hero Background Image",
              value: a.hero.backgroundImage,
              onSelect: (s) => n("hero", "backgroundImage", s)
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs("section", { className: g, children: [
        /* @__PURE__ */ e.jsxs("div", { className: h, children: [
          /* @__PURE__ */ e.jsx("h2", { className: p, children: "Info Cards" }),
          /* @__PURE__ */ e.jsx("p", { className: u, children: "Three homepage cards with their own content and background image." })
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "space-y-6", children: a.cards.map((s, t) => /* @__PURE__ */ e.jsxs("article", { className: "bg-gray-50/70 border border-gray-200 rounded-3xl p-5 md:p-6", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between mb-5", children: [
            /* @__PURE__ */ e.jsxs("h3", { className: "text-lg md:text-xl font-cinzel font-bold uppercase text-brand-blue", children: [
              "Card ",
              t + 1
            ] }),
            /* @__PURE__ */ e.jsx("span", { className: "text-[10px] font-bold uppercase tracking-[0.16em] text-gray-400", children: "Homepage Tile" })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-1 xl:grid-cols-[1fr_360px] gap-6", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("label", { className: r, children: "Title" }),
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "text",
                    value: s.title,
                    onChange: (l) => x(t, "title", l.target.value),
                    className: i
                  }
                )
              ] }),
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("label", { className: r, children: "Subtitle / Kicker" }),
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "text",
                    value: s.subtitle,
                    onChange: (l) => x(t, "subtitle", l.target.value),
                    className: i
                  }
                )
              ] }),
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("label", { className: r, children: "Link URL" }),
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "text",
                    value: s.url,
                    onChange: (l) => x(t, "url", l.target.value),
                    className: i
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ e.jsx(
              m,
              {
                label: "Card Background Image",
                value: s.image,
                onSelect: (l) => x(t, "image", l)
              }
            )
          ] })
        ] }, t)) })
      ] }),
      /* @__PURE__ */ e.jsxs("section", { className: g, children: [
        /* @__PURE__ */ e.jsxs("div", { className: h, children: [
          /* @__PURE__ */ e.jsx("h2", { className: p, children: "Welcome Section" }),
          /* @__PURE__ */ e.jsx("p", { className: u, children: "Intro copy block and supporting image below hero/cards." })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-1 xl:grid-cols-[1fr_360px] gap-8", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "space-y-5", children: [
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("label", { className: r, children: "Title" }),
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  type: "text",
                  value: a.welcome.title,
                  onChange: (s) => n("welcome", "title", s.target.value),
                  className: i
                }
              )
            ] }),
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("label", { className: r, children: "Content Text" }),
              /* @__PURE__ */ e.jsx(
                "textarea",
                {
                  value: a.welcome.content,
                  onChange: (s) => n("welcome", "content", s.target.value),
                  className: `${i} min-h-[280px]`
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ e.jsx(
            m,
            {
              label: "Feature Image",
              value: a.welcome.image,
              onSelect: (s) => n("welcome", "image", s)
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs("section", { className: g, children: [
        /* @__PURE__ */ e.jsxs("div", { className: h, children: [
          /* @__PURE__ */ e.jsx("h2", { className: p, children: "Gallery Peek" }),
          /* @__PURE__ */ e.jsx("p", { className: u, children: "Parallax strip image used for the gallery transition block." })
        ] }),
        /* @__PURE__ */ e.jsx(
          m,
          {
            label: "Full-Width Parallax Image",
            value: a.peekWindow.image,
            onSelect: (s) => n("peekWindow", "image", s)
          }
        )
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "sticky bottom-3 z-30", children: /* @__PURE__ */ e.jsxs("div", { className: "rounded-2xl border border-gray-200 bg-white/95 backdrop-blur-sm px-4 py-3 md:px-5 md:py-4 shadow-xl flex items-center justify-between gap-4", children: [
        /* @__PURE__ */ e.jsx("p", { className: "text-xs md:text-sm text-gray-500 m-0", children: "Save when you finish editing this page." }),
        /* @__PURE__ */ e.jsx(
          "button",
          {
            type: "submit",
            disabled: j,
            className: `px-6 md:px-10 py-3 rounded-xl text-[11px] md:text-xs font-bold uppercase tracking-[0.18em] shadow-lg transition-all ${j ? "bg-brand-blue text-white opacity-50 cursor-not-allowed" : "bg-brand-blue text-white hover:bg-brand-yellow hover:text-brand-blue"}`,
            children: j ? "Saving Changes..." : "Save All Settings"
          }
        )
      ] }) })
    ] })
  ] });
};
export {
  T as default
};
