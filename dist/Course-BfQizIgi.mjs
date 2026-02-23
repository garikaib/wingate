import { r as l, g as d, j as e, S as y } from "./main-C4Y7UEwf.mjs";
import { c as b } from "./createLucideIcon-BXI0vGFy.mjs";
import { T as N } from "./trophy-CAw3N3fV.mjs";
import { A as v } from "./arrow-right-BFRn8j9h.mjs";
const k = [
  ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
], z = b("clock", k);
const S = [
  [
    "path",
    {
      d: "M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528",
      key: "1jaruq"
    }
  ]
], T = b("flag", S);
const C = [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
], R = b("map-pin", C);
d.registerPlugin(y);
const A = () => {
  const h = l.useRef(null), p = l.useRef(null);
  l.useRef(null);
  const u = l.useRef(null), [i, m] = l.useState(null), [o, g] = l.useState({ out: [], in: [] });
  l.useEffect(() => {
    const t = async () => {
      try {
        const r = await fetch("/wp-json/wingate/v1/course-settings");
        if (r.ok) {
          const x = await r.json();
          m(x);
        }
      } catch (r) {
        console.error("Failed to fetch course settings:", r);
      }
    }, a = async () => {
      try {
        const r = await fetch("/wp-json/wingate/v1/scorecard");
        if (r.ok) {
          const x = await r.json();
          g(x);
        }
      } catch (r) {
        console.error("Failed to fetch scorecard:", r);
      }
    };
    t(), a();
    const j = d.context(() => {
      d.from(p.current, {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "expo.out",
        delay: 0.2
      }), d.utils.toArray(".reveal-section").forEach((r) => {
        d.from(r, {
          y: 60,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: r, start: "top 80%" }
        });
      }), d.from(".score-row", {
        x: -30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: { trigger: ".score-table", start: "top 75%" }
      });
    }, h);
    return () => j.revert();
  }, []);
  const c = i?.hero || {
    kicker: "Championship Layout",
    title: "The Course",
    backgroundImage: "/wp-content/uploads/2026/02/20260118_162436-scaled.jpg"
  }, s = i?.intro || {
    title: `Well Manicured & 
Wooded Parkland`,
    content: `Wingate Park Golf Club is an 18-hole, well-manicured, and wooded course founded 52 years ago. Located in the tranquil Pomona area of Harare, it offers a unique and challenging golfing experience with fairways lined with mature trees.

Despite playing on these old style characteristics, the course is thoroughly modern in other ways. The 18th is a long par 4 requiring negotiation of water on all three shots.`,
    image: "/wp-content/uploads/2026/02/20260118_131838-scaled.jpg",
    stats: {
      holes: "18",
      par: "72",
      distance: "6450m",
      time: "4.5 Hrs"
    }
  }, n = i?.galleryCta || {
    kicker: "Visual Tour",
    title: `Experience the 
 Beauty`,
    description: "Explore our gallery to see the manicured fairways, challenging bunkers, and scenic water hazards that make Wingate Park truly unique.",
    image: "/wp-content/uploads/2026/02/20260126_140911-scaled.jpg",
    buttonText: "View Gallery",
    buttonUrl: "/gallery"
  }, w = o.out.length > 0 ? o.out : [
    { hole: 1, par: 4, white: 422, blue: 404, red: 329, si: 7 },
    { hole: 2, par: 5, white: 467, blue: 459, red: 452, si: 5 },
    { hole: 3, par: 3, white: 150, blue: 134, red: 122, si: 15 },
    { hole: 4, par: 5, white: 469, blue: 418, red: 414, si: 13 },
    { hole: 5, par: 4, white: 388, blue: 373, red: 298, si: 3 },
    { hole: 6, par: 3, white: 191, blue: 174, red: 164, si: 11 },
    { hole: 7, par: 4, white: 370, blue: 357, red: 349, si: 9 },
    { hole: 8, par: 4, white: 337, blue: 324, red: 312, si: 17 },
    { hole: 9, par: 4, white: 418, blue: 367, red: 335, si: 1 }
  ], f = o.in.length > 0 ? o.in : [
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
  return /* @__PURE__ */ e.jsxs("div", { className: "bg-white min-h-screen relative overflow-hidden font-montserrat", ref: h, children: [
    /* @__PURE__ */ e.jsxs("header", { className: "relative h-[85vh] flex items-center justify-center bg-brand-blue overflow-hidden", children: [
      /* @__PURE__ */ e.jsx(
        "div",
        {
          className: "absolute inset-0 bg-cover bg-center",
          style: {
            backgroundImage: `url('${c.backgroundImage}')`,
            transform: "scale(1.1)"
          }
        }
      ),
      /* @__PURE__ */ e.jsx("div", { className: "absolute inset-0 bg-brand-blue/30 mix-blend-multiply" }),
      /* @__PURE__ */ e.jsx("div", { className: "absolute inset-x-0 bottom-0 h-1 bg-gradient-to-t from-white to-transparent" }),
      /* @__PURE__ */ e.jsx("div", { className: "absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/40 to-transparent" }),
      /* @__PURE__ */ e.jsxs("div", { className: "relative z-10 text-center px-4 max-w-5xl mx-auto", children: [
        /* @__PURE__ */ e.jsx("div", { className: "inline-block px-4 py-1 border border-brand-yellow/30 rounded-full mb-6 backdrop-blur-md bg-white/10", children: /* @__PURE__ */ e.jsx("span", { className: "text-brand-yellow text-xs font-bold tracking-[0.3em] uppercase", children: c.kicker }) }),
        /* @__PURE__ */ e.jsx("h1", { ref: p, className: "text-5xl md:text-8xl font-cinzel text-white mb-6 tracking-tight drop-shadow-2xl leading-none whitespace-pre-wrap", children: c.title }),
        /* @__PURE__ */ e.jsx("div", { className: "w-24 h-1 bg-brand-yellow mx-auto mb-8" })
      ] })
    ] }),
    /* @__PURE__ */ e.jsx("section", { className: "py-24 px-6 md:px-12 max-w-7xl mx-auto", children: /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-16 items-center reveal-section", children: [
      /* @__PURE__ */ e.jsxs("div", { children: [
        /* @__PURE__ */ e.jsx("h2", { className: "text-4xl md:text-5xl font-cinzel text-brand-blue mb-8 leading-tight whitespace-pre-wrap", children: s.title }),
        /* @__PURE__ */ e.jsx("div", { className: "space-y-6 text-text-muted text-lg font-light leading-relaxed whitespace-pre-wrap", children: s.content }),
        /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-8 mt-12 bg-brand-blue/5 p-8 rounded-2xl border border-brand-blue/10", children: [
          /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-3 mb-2 text-brand-blue", children: [
              /* @__PURE__ */ e.jsx(T, { size: 20 }),
              /* @__PURE__ */ e.jsx("span", { className: "font-bold text-sm uppercase tracking-widest", children: "Holes" })
            ] }),
            /* @__PURE__ */ e.jsx("span", { className: "text-4xl font-cinzel font-bold text-brand-blue", children: s.stats.holes })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-3 mb-2 text-brand-blue", children: [
              /* @__PURE__ */ e.jsx(N, { size: 20 }),
              /* @__PURE__ */ e.jsx("span", { className: "font-bold text-sm uppercase tracking-widest", children: "Par" })
            ] }),
            /* @__PURE__ */ e.jsx("span", { className: "text-4xl font-cinzel font-bold text-brand-blue", children: s.stats.par })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-3 mb-2 text-brand-blue", children: [
              /* @__PURE__ */ e.jsx(R, { size: 20 }),
              /* @__PURE__ */ e.jsx("span", { className: "font-bold text-sm uppercase tracking-widest", children: "Distance" })
            ] }),
            /* @__PURE__ */ e.jsx("span", { className: "text-2xl font-cinzel font-bold text-brand-blue", children: s.stats.distance })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-3 mb-2 text-brand-blue", children: [
              /* @__PURE__ */ e.jsx(z, { size: 20 }),
              /* @__PURE__ */ e.jsx("span", { className: "font-bold text-sm uppercase tracking-widest", children: "Est. Time" })
            ] }),
            /* @__PURE__ */ e.jsx("span", { className: "text-2xl font-cinzel font-bold text-brand-blue", children: s.stats.time })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "relative h-[600px] rounded-3xl overflow-hidden shadow-2xl group", children: [
        /* @__PURE__ */ e.jsx(
          "div",
          {
            className: "absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105",
            style: { backgroundImage: `url('${s.image}')` }
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
            w.map((t, a) => /* @__PURE__ */ e.jsxs("tr", { className: `score-row hover:bg-brand-blue/[0.02] transition-colors ${a % 2 === 0 ? "bg-brand-blue/[0.01]" : ""}`, children: [
              /* @__PURE__ */ e.jsx("td", { className: "py-4 px-6 font-bold text-brand-blue", children: t.hole }),
              /* @__PURE__ */ e.jsx("td", { className: "py-4 px-4 text-center font-bold bg-brand-yellow/[0.07] border-x border-brand-blue/5 text-brand-blue", children: t.par }),
              /* @__PURE__ */ e.jsx("td", { className: "py-4 px-4 text-center font-medium text-brand-blue", children: t.white }),
              /* @__PURE__ */ e.jsx("td", { className: "py-4 px-4 text-center font-light text-text-muted", children: t.blue }),
              /* @__PURE__ */ e.jsx("td", { className: "py-4 px-4 text-center font-light text-text-muted", children: t.red }),
              /* @__PURE__ */ e.jsx("td", { className: "py-4 px-6 text-right text-xs font-bold text-brand-blue bg-brand-yellow/[0.07] border-l border-brand-blue/5", children: t.si })
            ] }, a)),
            /* @__PURE__ */ e.jsxs("tr", { className: "bg-brand-blue/10 font-bold text-brand-blue", children: [
              /* @__PURE__ */ e.jsx("td", { className: "py-4 px-6", children: "OUT" }),
              /* @__PURE__ */ e.jsx("td", { className: "py-4 px-4 text-center bg-brand-yellow/10 border-x border-brand-blue/5 text-brand-blue-dark", children: "36" }),
              /* @__PURE__ */ e.jsx("td", { className: "py-4 px-4 text-center", children: "3212" }),
              /* @__PURE__ */ e.jsx("td", { className: "py-4 px-4 text-center", children: "3010" }),
              /* @__PURE__ */ e.jsx("td", { className: "py-4 px-4 text-center", children: "2774" }),
              /* @__PURE__ */ e.jsx("td", { className: "py-4 px-6 bg-brand-yellow/10 border-l border-brand-blue/5" })
            ] }),
            f.map((t, a) => /* @__PURE__ */ e.jsxs("tr", { className: `score-row hover:bg-brand-blue/[0.02] transition-colors ${a % 2 === 0 ? "bg-brand-blue/[0.01]" : ""}`, children: [
              /* @__PURE__ */ e.jsx("td", { className: "py-4 px-6 font-bold text-brand-blue", children: t.hole }),
              /* @__PURE__ */ e.jsx("td", { className: "py-4 px-4 text-center font-bold bg-brand-yellow/[0.07] border-x border-brand-blue/5 text-brand-blue", children: t.par }),
              /* @__PURE__ */ e.jsx("td", { className: "py-4 px-4 text-center font-medium text-brand-blue", children: t.white }),
              /* @__PURE__ */ e.jsx("td", { className: "py-4 px-4 text-center font-light text-text-muted", children: t.blue }),
              /* @__PURE__ */ e.jsx("td", { className: "py-4 px-4 text-center font-light text-text-muted", children: t.red }),
              /* @__PURE__ */ e.jsx("td", { className: "py-4 px-6 text-right text-xs font-bold text-brand-blue bg-brand-yellow/[0.07] border-l border-brand-blue/5", children: t.si })
            ] }, a)),
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
    /* @__PURE__ */ e.jsxs("section", { ref: u, className: "relative py-32 px-6 overflow-hidden", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "absolute inset-0 bg-brand-blue", children: [
        /* @__PURE__ */ e.jsx("div", { className: "absolute inset-0 opacity-40 mix-blend-overlay", style: { backgroundImage: `url('${n.image}')`, backgroundSize: "cover", backgroundPosition: "center" } }),
        /* @__PURE__ */ e.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-brand-blue/90 to-brand-blue/40" })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "text-white max-w-2xl reveal-section", children: [
          /* @__PURE__ */ e.jsx("span", { className: "text-brand-yellow font-cinzel tracking-[0.2em] font-bold uppercase mb-4 block", children: n.kicker }),
          /* @__PURE__ */ e.jsx("h2", { className: "text-5xl md:text-6xl font-cinzel mb-6 leading-none whitespace-pre-wrap", children: n.title }),
          /* @__PURE__ */ e.jsx("p", { className: "text-white/80 text-lg font-light leading-relaxed max-w-xl", children: n.description })
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "reveal-section", children: /* @__PURE__ */ e.jsxs("a", { href: n.buttonUrl, className: "group relative inline-flex items-center overflow-hidden rounded-sm bg-brand-yellow px-12 py-6 text-brand-blue no-underline hover:no-underline focus:no-underline font-cinzel font-bold tracking-widest uppercase transition-all duration-300 hover:bg-white hover:text-brand-blue shadow-2xl hover:shadow-brand-yellow/50", children: [
          /* @__PURE__ */ e.jsx("span", { className: "mr-4 text-lg", children: n.buttonText }),
          /* @__PURE__ */ e.jsx(v, { className: "transition-transform group-hover:translate-x-2" })
        ] }) })
      ] })
    ] })
  ] });
};
export {
  A as default
};
