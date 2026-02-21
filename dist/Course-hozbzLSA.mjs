import { c as s, r as a, g as l, j as e, S as x } from "./main-B1uaK48I.mjs";
import { A as b } from "./arrow-right-D7zSc8mM.mjs";
const h = [
  ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
], p = s("clock", h);
const m = [
  [
    "path",
    {
      d: "M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528",
      key: "1jaruq"
    }
  ]
], u = s("flag", m);
const g = [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
], j = s("map-pin", g);
const y = [
  ["path", { d: "M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978", key: "1n3hpd" }],
  ["path", { d: "M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978", key: "rfe1zi" }],
  ["path", { d: "M18 9h1.5a1 1 0 0 0 0-5H18", key: "7xy6bh" }],
  ["path", { d: "M4 22h16", key: "57wxv0" }],
  ["path", { d: "M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z", key: "1mhfuq" }],
  ["path", { d: "M6 9H4.5a1 1 0 0 1 0-5H6", key: "tex48p" }]
], f = s("trophy", y);
l.registerPlugin(x);
const v = () => {
  const n = a.useRef(null), d = a.useRef(null);
  a.useRef(null);
  const o = a.useRef(null);
  a.useEffect(() => {
    const t = l.context(() => {
      l.from(d.current, {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "expo.out",
        delay: 0.2
      }), l.utils.toArray(".reveal-section").forEach((r) => {
        l.from(r, {
          y: 60,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: r, start: "top 80%" }
        });
      }), l.from(".score-row", {
        x: -30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: { trigger: ".score-table", start: "top 75%" }
      });
    }, n);
    return () => t.revert();
  }, []);
  const i = [
    { hole: 1, par: 4, white: 422, blue: 404, red: 329, si: 7 },
    { hole: 2, par: 5, white: 467, blue: 459, red: 452, si: 5 },
    { hole: 3, par: 3, white: 150, blue: 134, red: 122, si: 15 },
    { hole: 4, par: 5, white: 469, blue: 418, red: 414, si: 13 },
    { hole: 5, par: 4, white: 388, blue: 373, red: 298, si: 3 },
    { hole: 6, par: 3, white: 191, blue: 174, red: 164, si: 11 },
    { hole: 7, par: 4, white: 370, blue: 357, red: 349, si: 9 },
    { hole: 8, par: 4, white: 337, blue: 324, red: 312, si: 17 },
    { hole: 9, par: 4, white: 418, blue: 367, red: 335, si: 1 }
  ], c = [
    { hole: 10, par: 5, white: 495, blue: 470, red: 462, si: 14 },
    { hole: 11, par: 4, white: 386, blue: 372, red: 309, si: 6 },
    { hole: 12, par: 5, white: 523, blue: 515, red: 445, si: 10 },
    { hole: 13, par: 3, white: 182, blue: 156, red: 148, si: 16 },
    { hole: 14, par: 4, white: 427, blue: 377, red: 349, si: 2 },
    { hole: 15, par: 4, white: 389, blue: 374, red: 311, si: 12 },
    { hole: 16, par: 4, white: 340, blue: 333, red: 328, si: 4 },
    { hole: 17, par: 3, white: 141, blue: 132, red: 123, si: 18 },
    { hole: 18, par: 4, white: 355, blue: 335, red: 316, si: 8 }
  ];
  return /* @__PURE__ */ e.jsxs("div", { className: "bg-white min-h-screen relative overflow-hidden font-montserrat", ref: n, children: [
    /* @__PURE__ */ e.jsxs("header", { className: "relative h-[85vh] flex items-center justify-center bg-brand-blue overflow-hidden", children: [
      /* @__PURE__ */ e.jsx(
        "div",
        {
          className: "absolute inset-0 bg-cover bg-center",
          style: {
            backgroundImage: "url('/wp-content/uploads/2026/02/20260118_162436-scaled.jpg')",
            transform: "scale(1.1)"
            // Slight scale for parallax feel if JS was adding it, just static for now or can add ref
          }
        }
      ),
      /* @__PURE__ */ e.jsx("div", { className: "absolute inset-0 bg-brand-blue/30 mix-blend-multiply" }),
      /* @__PURE__ */ e.jsx("div", { className: "absolute inset-x-0 bottom-0 h-1 bg-gradient-to-t from-white to-transparent" }),
      /* @__PURE__ */ e.jsx("div", { className: "absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/40 to-transparent" }),
      /* @__PURE__ */ e.jsxs("div", { className: "relative z-10 text-center px-4 max-w-5xl mx-auto", children: [
        /* @__PURE__ */ e.jsx("div", { className: "inline-block px-4 py-1 border border-brand-yellow/30 rounded-full mb-6 backdrop-blur-md bg-white/10", children: /* @__PURE__ */ e.jsx("span", { className: "text-brand-yellow text-xs font-bold tracking-[0.3em] uppercase", children: "Championship Layout" }) }),
        /* @__PURE__ */ e.jsxs("h1", { ref: d, className: "text-5xl md:text-8xl font-cinzel text-white mb-6 tracking-tight drop-shadow-2xl leading-none", children: [
          "The ",
          /* @__PURE__ */ e.jsx("span", { className: "text-brand-yellow", children: "Course" })
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "w-24 h-1 bg-brand-yellow mx-auto mb-8" })
      ] })
    ] }),
    /* @__PURE__ */ e.jsx("section", { className: "py-24 px-6 md:px-12 max-w-7xl mx-auto", children: /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-16 items-center reveal-section", children: [
      /* @__PURE__ */ e.jsxs("div", { children: [
        /* @__PURE__ */ e.jsxs("h2", { className: "text-4xl md:text-5xl font-cinzel text-brand-blue mb-8 leading-tight", children: [
          "Well Manicured & ",
          /* @__PURE__ */ e.jsx("br", {}),
          /* @__PURE__ */ e.jsx("span", { className: "text-brand-yellow", children: "Wooded Parkland" })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "space-y-6 text-text-muted text-lg font-light leading-relaxed", children: [
          /* @__PURE__ */ e.jsx("p", { children: "Wingate Park Golf Club is an 18-hole, well-manicured, and wooded course founded 52 years ago. Located in the tranquil Pomona area of Harare, it offers a unique and challenging golfing experience with fairways lined with mature trees." }),
          /* @__PURE__ */ e.jsx("p", { children: "Despite playing on these old style characteristics, the course is thoroughly modern in other ways. The 18th is a long par 4 requiring negotiation of water on all three shots." })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-8 mt-12 bg-brand-blue/5 p-8 rounded-2xl border border-brand-blue/10", children: [
          /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-3 mb-2 text-brand-blue", children: [
              /* @__PURE__ */ e.jsx(u, { size: 20 }),
              /* @__PURE__ */ e.jsx("span", { className: "font-bold text-sm uppercase tracking-widest", children: "Holes" })
            ] }),
            /* @__PURE__ */ e.jsx("span", { className: "text-4xl font-cinzel font-bold text-brand-blue", children: "18" })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-3 mb-2 text-brand-blue", children: [
              /* @__PURE__ */ e.jsx(f, { size: 20 }),
              /* @__PURE__ */ e.jsx("span", { className: "font-bold text-sm uppercase tracking-widest", children: "Par" })
            ] }),
            /* @__PURE__ */ e.jsx("span", { className: "text-4xl font-cinzel font-bold text-brand-blue", children: "72" })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-3 mb-2 text-brand-blue", children: [
              /* @__PURE__ */ e.jsx(j, { size: 20 }),
              /* @__PURE__ */ e.jsx("span", { className: "font-bold text-sm uppercase tracking-widest", children: "Distance" })
            ] }),
            /* @__PURE__ */ e.jsx("span", { className: "text-2xl font-cinzel font-bold text-brand-blue", children: "6450m" })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-3 mb-2 text-brand-blue", children: [
              /* @__PURE__ */ e.jsx(p, { size: 20 }),
              /* @__PURE__ */ e.jsx("span", { className: "font-bold text-sm uppercase tracking-widest", children: "Est. Time" })
            ] }),
            /* @__PURE__ */ e.jsx("span", { className: "text-2xl font-cinzel font-bold text-brand-blue", children: "4.5 Hrs" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "relative h-[600px] rounded-3xl overflow-hidden shadow-2xl group", children: [
        /* @__PURE__ */ e.jsx(
          "div",
          {
            className: "absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105",
            style: { backgroundImage: "url('/wp-content/uploads/2026/02/20260118_131838-scaled.jpg')" }
          }
        ),
        /* @__PURE__ */ e.jsxs("div", { className: "absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-xl p-8 rounded-xl border-l-4 border-brand-yellow shadow-lg", children: [
          /* @__PURE__ */ e.jsx("h3", { className: "font-cinzel text-xl text-brand-blue mb-2", children: "Designed for Strategy" }),
          /* @__PURE__ */ e.jsx("p", { className: "text-sm text-text-muted", children: "Every hole offers a new challenge, rewarding precision and strategy over pure power." })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ e.jsxs("section", { className: "bg-brand-blue/5 py-24 px-4 md:px-12 relative overflow-hidden", children: [
      /* @__PURE__ */ e.jsx("div", { className: "absolute top-0 right-0 w-[500px] h-[500px] bg-brand-yellow/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" }),
      /* @__PURE__ */ e.jsxs("div", { className: "max-w-6xl mx-auto", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "text-center mb-8 reveal-section", children: [
          /* @__PURE__ */ e.jsx("span", { className: "text-brand-yellow font-bold uppercase tracking-[0.3em] text-xs", children: "The Numbers" }),
          /* @__PURE__ */ e.jsx("h2", { className: "text-4xl md:text-5xl font-cinzel text-brand-blue mt-3 mb-6", children: "Course Scorecard" }),
          /* @__PURE__ */ e.jsx("p", { className: "font-cisalpin text-brand-blue/60 italic text-lg", children: '"Forget your opponents; always play against par" - Sam Snead' })
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "bg-white rounded-3xl shadow-xl overflow-hidden border border-brand-blue/10 reveal-section score-table", children: /* @__PURE__ */ e.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ e.jsxs("table", { className: "w-full text-sm md:text-base min-w-[800px]", children: [
          /* @__PURE__ */ e.jsx("thead", { className: "bg-brand-blue text-white font-cinzel uppercase tracking-wider text-xs", children: /* @__PURE__ */ e.jsxs("tr", { children: [
            /* @__PURE__ */ e.jsx("th", { className: "py-4 px-6 text-left", children: "Hole" }),
            /* @__PURE__ */ e.jsx("th", { className: "py-4 px-4 bg-black/20 text-brand-yellow border-x border-brand-blue/20", children: "Par" }),
            /* @__PURE__ */ e.jsx("th", { className: "py-4 px-4", children: "White" }),
            /* @__PURE__ */ e.jsx("th", { className: "py-4 px-4", children: "Blue" }),
            /* @__PURE__ */ e.jsx("th", { className: "py-4 px-4 text-red-300", children: "Red" }),
            /* @__PURE__ */ e.jsx("th", { className: "py-4 px-6 text-right bg-black/20 text-brand-yellow border-l border-brand-blue/20", children: "Stroke" })
          ] }) }),
          /* @__PURE__ */ e.jsxs("tbody", { className: "divide-y divide-brand-blue/5", children: [
            i.map((t, r) => /* @__PURE__ */ e.jsxs("tr", { className: `score-row hover:bg-brand-blue/[0.02] transition-colors ${r % 2 === 0 ? "bg-brand-blue/[0.01]" : ""}`, children: [
              /* @__PURE__ */ e.jsx("td", { className: "py-4 px-6 font-bold text-brand-blue", children: t.hole }),
              /* @__PURE__ */ e.jsx("td", { className: "py-4 px-4 text-center font-bold bg-brand-yellow/[0.07] border-x border-brand-blue/5 text-brand-blue", children: t.par }),
              /* @__PURE__ */ e.jsx("td", { className: "py-4 px-4 text-center font-medium text-brand-blue", children: t.white }),
              /* @__PURE__ */ e.jsx("td", { className: "py-4 px-4 text-center font-light text-text-muted", children: t.blue }),
              /* @__PURE__ */ e.jsx("td", { className: "py-4 px-4 text-center font-light text-text-muted", children: t.red }),
              /* @__PURE__ */ e.jsx("td", { className: "py-4 px-6 text-right text-xs font-bold text-brand-blue bg-brand-yellow/[0.07] border-l border-brand-blue/5", children: t.si })
            ] }, r)),
            /* @__PURE__ */ e.jsxs("tr", { className: "bg-brand-blue/10 font-bold text-brand-blue", children: [
              /* @__PURE__ */ e.jsx("td", { className: "py-4 px-6", children: "OUT" }),
              /* @__PURE__ */ e.jsx("td", { className: "py-4 px-4 text-center bg-brand-yellow/10 border-x border-brand-blue/5 text-brand-blue-dark", children: "36" }),
              /* @__PURE__ */ e.jsx("td", { className: "py-4 px-4 text-center", children: "3212" }),
              /* @__PURE__ */ e.jsx("td", { className: "py-4 px-4 text-center", children: "3010" }),
              /* @__PURE__ */ e.jsx("td", { className: "py-4 px-4 text-center", children: "2774" }),
              /* @__PURE__ */ e.jsx("td", { className: "py-4 px-6 bg-brand-yellow/10 border-l border-brand-blue/5" })
            ] }),
            c.map((t, r) => /* @__PURE__ */ e.jsxs("tr", { className: `score-row hover:bg-brand-blue/[0.02] transition-colors ${r % 2 === 0 ? "bg-brand-blue/[0.01]" : ""}`, children: [
              /* @__PURE__ */ e.jsx("td", { className: "py-4 px-6 font-bold text-brand-blue", children: t.hole }),
              /* @__PURE__ */ e.jsx("td", { className: "py-4 px-4 text-center font-bold bg-brand-yellow/[0.07] border-x border-brand-blue/5 text-brand-blue", children: t.par }),
              /* @__PURE__ */ e.jsx("td", { className: "py-4 px-4 text-center font-medium text-brand-blue", children: t.white }),
              /* @__PURE__ */ e.jsx("td", { className: "py-4 px-4 text-center font-light text-text-muted", children: t.blue }),
              /* @__PURE__ */ e.jsx("td", { className: "py-4 px-4 text-center font-light text-text-muted", children: t.red }),
              /* @__PURE__ */ e.jsx("td", { className: "py-4 px-6 text-right text-xs font-bold text-brand-blue bg-brand-yellow/[0.07] border-l border-brand-blue/5", children: t.si })
            ] }, r)),
            /* @__PURE__ */ e.jsxs("tr", { className: "bg-brand-blue/10 font-bold text-brand-blue border-t-2 border-brand-blue", children: [
              /* @__PURE__ */ e.jsx("td", { className: "py-5 px-6", children: "TOTAL" }),
              /* @__PURE__ */ e.jsx("td", { className: "py-5 px-4 text-center text-lg bg-brand-yellow/10 border-x border-brand-blue/5 border-b border-brand-blue/5 text-brand-blue-dark", children: "72" }),
              /* @__PURE__ */ e.jsx("td", { className: "py-5 px-4 text-center text-lg", children: "6450" }),
              /* @__PURE__ */ e.jsx("td", { className: "py-5 px-4 text-center text-lg", children: "6074" }),
              /* @__PURE__ */ e.jsx("td", { className: "py-5 px-4 text-center text-lg", children: "5565" }),
              /* @__PURE__ */ e.jsx("td", { className: "py-5 px-6 bg-brand-yellow/10 border-l border-brand-blue/5 border-b border-brand-blue/5" })
            ] })
          ] })
        ] }) }) })
      ] })
    ] }),
    /* @__PURE__ */ e.jsxs("section", { ref: o, className: "relative py-32 px-6 overflow-hidden", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "absolute inset-0 bg-brand-blue", children: [
        /* @__PURE__ */ e.jsx("div", { className: "absolute inset-0 opacity-40 mix-blend-overlay", style: { backgroundImage: "url('/wp-content/uploads/2026/02/20260126_140911-scaled.jpg')", backgroundSize: "cover", backgroundposition: "center" } }),
        /* @__PURE__ */ e.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-brand-blue/90 to-brand-blue/40" })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "text-white max-w-2xl reveal-section", children: [
          /* @__PURE__ */ e.jsx("span", { className: "text-brand-yellow font-cinzel tracking-[0.2em] font-bold uppercase mb-4 block", children: "Visual Tour" }),
          /* @__PURE__ */ e.jsxs("h2", { className: "text-5xl md:text-6xl font-cinzel mb-6 leading-none", children: [
            "Experience the ",
            /* @__PURE__ */ e.jsx("br", {}),
            " Beauty"
          ] }),
          /* @__PURE__ */ e.jsx("p", { className: "text-white/80 text-lg font-light leading-relaxed max-w-xl", children: "Explore our gallery to see the manicured fairways, challenging bunkers, and scenic water hazards that make Wingate Park truly unique." })
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "reveal-section", children: /* @__PURE__ */ e.jsxs("a", { href: "/gallery", className: "group relative inline-flex items-center overflow-hidden rounded-sm bg-brand-yellow px-12 py-6 text-brand-blue no-underline hover:no-underline focus:no-underline font-cinzel font-bold tracking-widest uppercase transition-all duration-300 hover:bg-white hover:text-brand-blue shadow-2xl hover:shadow-brand-yellow/50", children: [
          /* @__PURE__ */ e.jsx("span", { className: "mr-4 text-lg", children: "View Gallery" }),
          /* @__PURE__ */ e.jsx(b, { className: "transition-transform group-hover:translate-x-2" })
        ] }) })
      ] })
    ] })
  ] });
};
export {
  v as default
};
