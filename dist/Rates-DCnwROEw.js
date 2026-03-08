import { r as l, g as i, j as e, S as v } from "./main-BM9ReWkY.js";
import { c as y } from "./createLucideIcon-CBszmp8c.js";
import { U as f } from "./users-kVFTfyet.js";
import { C as k } from "./chevron-right-FI8ikqeJ.js";
const R = [
  ["rect", { width: "20", height: "14", x: "2", y: "5", rx: "2", key: "ynyp8z" }],
  ["line", { x1: "2", x2: "22", y1: "10", y2: "10", key: "1b3vmo" }]
], S = y("credit-card", R);
const z = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
], A = y("shield-check", z);
i.registerPlugin(v);
const o = {
  hero: {
    kicker: "Private Experience",
    title: `Membership 
 Subscriptions`,
    subtitle: "Subs as from 1st January 2026",
    backgroundImage: ""
  },
  intro: {
    kicker: "The Investment",
    title: `Elite Access, 
Curated for You`,
    content: ""
  },
  menRates: [],
  ladiesRates: [],
  allRates: [],
  cta: {
    title: `Elevate Your Game. 
 Join the Legacy.`,
    description: "",
    buttonText: "JOIN NOW",
    buttonUrl: "/membership",
    backgroundImage: ""
  }
}, $ = () => {
  const x = l.useRef(null), b = l.useRef(null), m = l.useRef(null), c = l.useRef(null), h = l.useRef(null), [t, j] = l.useState(null), [g, w] = l.useState(!0);
  l.useEffect(() => {
    (async () => {
      try {
        const n = window.wingateThemeData?.root || "/wp-json/", a = await fetch(`${n}wingate/v1/rates-settings`);
        if (!a.ok) throw new Error("Data fetch failed");
        const p = await a.json();
        j(p);
      } catch (n) {
        console.error("Error loading rates data:", n);
      } finally {
        w(!1);
      }
    })();
  }, []), l.useEffect(() => {
    if (g || !t) return;
    const d = i.context(() => {
      m.current && i.from(m.current, {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "expo.out"
      }), h.current && b.current && i.to(h.current, {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: b.current,
          start: "top top",
          end: "bottom top",
          scrub: !0
        }
      });
      const n = c.current?.querySelectorAll(".glass-card") || [];
      n.length && c.current && i.from(n, {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: c.current,
          start: "top 75%"
        }
      });
      const a = x.current?.querySelectorAll(".floater") || [];
      a.length && i.to(a, {
        y: -20,
        duration: 2,
        repeat: -1,
        yoyo: !0,
        ease: "sine.inOut",
        stagger: 0.5
      });
    }, x);
    return () => d.revert();
  }, [g, t]);
  const r = {
    hero: {
      ...o.hero,
      ...t?.hero && typeof t.hero == "object" ? t.hero : {}
    },
    intro: {
      ...o.intro,
      ...t?.intro && typeof t.intro == "object" ? t.intro : {}
    },
    menRates: Array.isArray(t?.menRates) ? t.menRates : o.menRates,
    ladiesRates: Array.isArray(t?.ladiesRates) ? t.ladiesRates : o.ladiesRates,
    allRates: Array.isArray(t?.allRates) ? t.allRates : o.allRates,
    cta: {
      ...o.cta,
      ...t?.cta && typeof t.cta == "object" ? t.cta : {}
    }
  }, u = ({ title: d, rates: n, columns: a, icon: p }) => /* @__PURE__ */ e.jsxs("div", { className: "glass-card mb-20 relative", children: [
    /* @__PURE__ */ e.jsx("div", { className: "absolute -top-10 -left-6 w-20 h-20 bg-brand-yellow/10 rounded-full blur-2xl -z-10" }),
    /* @__PURE__ */ e.jsxs("div", { className: "bg-white/90 backdrop-blur-xl border border-white/40 shadow-2xl rounded-2xl overflow-hidden p-8", children: [
      /* @__PURE__ */ e.jsx("div", { className: "flex items-center justify-between mb-8 border-b border-brand-blue/10 pb-6", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center", children: [
        /* @__PURE__ */ e.jsx("div", { className: "bg-brand-blue/5 p-3 rounded-xl mr-5", children: /* @__PURE__ */ e.jsx(p, { size: 32, className: "text-brand-blue" }) }),
        /* @__PURE__ */ e.jsxs("div", { children: [
          /* @__PURE__ */ e.jsx("h3", { className: "text-3xl font-cinzel text-brand-blue uppercase tracking-wider", children: d }),
          /* @__PURE__ */ e.jsx("div", { className: "w-12 h-1 bg-brand-yellow mt-1" })
        ] })
      ] }) }),
      /* @__PURE__ */ e.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ e.jsxs("table", { className: "w-full text-left border-collapse min-w-[600px]", children: [
        /* @__PURE__ */ e.jsx("thead", { children: /* @__PURE__ */ e.jsxs("tr", { className: "text-brand-blue/50 font-cinzel text-xs uppercase tracking-[0.2em]", children: [
          /* @__PURE__ */ e.jsx("th", { className: "py-4 px-4 border-b border-brand-blue/5", children: "Category" }),
          /* @__PURE__ */ e.jsx("th", { className: "py-4 px-4 border-b border-brand-blue/5", children: "Description" }),
          a.map((s) => /* @__PURE__ */ e.jsx("th", { className: "py-4 px-4 border-b border-brand-blue/5 text-center", children: s }, s))
        ] }) }),
        /* @__PURE__ */ e.jsx("tbody", { className: "font-montserrat text-sm", children: n.map((s, N) => /* @__PURE__ */ e.jsxs("tr", { className: "group hover:bg-brand-blue/[0.02] transition-colors border-b border-brand-blue/[0.03]", children: [
          /* @__PURE__ */ e.jsx("td", { className: "py-5 px-4 font-bold text-brand-blue group-hover:text-brand-yellow transition-colors", children: s.category }),
          /* @__PURE__ */ e.jsx("td", { className: "py-5 px-4 text-text-muted italic", children: s.desc }),
          s.annual ? /* @__PURE__ */ e.jsxs("td", { colSpan: a.length, className: "py-5 px-4 text-center font-bold text-brand-blue bg-brand-yellow/5 rounded-r-lg", children: [
            /* @__PURE__ */ e.jsx("span", { className: "text-brand-yellow mr-1", children: "$" }),
            s.annual,
            " ",
            /* @__PURE__ */ e.jsx("span", { className: "text-[10px] uppercase opacity-50 ml-1", children: "Annual" })
          ] }) : s.flat ? /* @__PURE__ */ e.jsxs("td", { colSpan: a.length, className: "py-5 px-4 text-center font-bold text-brand-blue", children: [
            /* @__PURE__ */ e.jsx("span", { className: "text-brand-yellow mr-1", children: "$" }),
            s.flat
          ] }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
            /* @__PURE__ */ e.jsxs("td", { className: "py-5 px-4 text-center font-bold text-brand-blue", children: [
              /* @__PURE__ */ e.jsx("span", { className: "text-xs opacity-40 mr-1", children: "$" }),
              s.quarterly
            ] }),
            /* @__PURE__ */ e.jsx("td", { className: "py-5 px-4 text-center font-bold text-brand-blue text-lg", children: /* @__PURE__ */ e.jsxs("div", { className: "bg-brand-blue text-white px-3 py-1 rounded shadow-lg scale-95 group-hover:scale-105 transition-transform duration-300", children: [
              /* @__PURE__ */ e.jsx("span", { className: "text-xs text-brand-yellow mr-1", children: "$" }),
              s.monthly
            ] }) })
          ] })
        ] }, N)) })
      ] }) })
    ] })
  ] });
  return /* @__PURE__ */ e.jsxs("div", { ref: x, className: "bg-white min-h-screen relative overflow-hidden", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10", children: [
      /* @__PURE__ */ e.jsx("div", { className: "floater absolute top-1/4 right-0 w-96 h-96 bg-brand-yellow/5 rounded-full blur-[100px]" }),
      /* @__PURE__ */ e.jsx("div", { className: "floater absolute bottom-1/4 -left-20 w-80 h-80 bg-brand-blue/5 rounded-full blur-[80px]" })
    ] }),
    /* @__PURE__ */ e.jsxs("header", { ref: b, className: "relative h-[85vh] flex items-center justify-center bg-brand-blue overflow-hidden", children: [
      /* @__PURE__ */ e.jsx(
        "div",
        {
          ref: h,
          className: "absolute inset-0 bg-cover bg-center",
          style: {
            backgroundImage: `url('${r.hero.backgroundImage}')`,
            transform: "scale(1.1)"
          }
        }
      ),
      /* @__PURE__ */ e.jsx("div", { className: "absolute inset-0 bg-brand-blue/30" }),
      /* @__PURE__ */ e.jsx("div", { className: "absolute inset-x-0 bottom-0 h-4 bg-gradient-to-t from-white to-transparent" }),
      /* @__PURE__ */ e.jsx("div", { className: "absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/40 to-transparent" }),
      /* @__PURE__ */ e.jsxs("div", { className: "relative z-10 text-center px-4 max-w-5xl mx-auto", children: [
        /* @__PURE__ */ e.jsx("div", { className: "inline-block px-4 py-1 border border-brand-yellow/30 rounded-full mb-6 backdrop-blur-md bg-white/10", children: /* @__PURE__ */ e.jsx("span", { className: "text-brand-yellow text-xs font-bold tracking-[0.3em] uppercase", children: r.hero.kicker }) }),
        /* @__PURE__ */ e.jsx("h1", { ref: m, className: "text-5xl md:text-8xl font-cinzel text-white mb-8 tracking-tighter drop-shadow-2xl leading-none whitespace-pre-line", children: r.hero.title }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col items-center", children: [
          /* @__PURE__ */ e.jsx("div", { className: "w-24 h-1 bg-brand-yellow/50 mb-6" }),
          /* @__PURE__ */ e.jsx("p", { className: "text-sm md:text-lg text-white/90 font-montserrat tracking-[0.2em] uppercase font-light", children: r.hero.subtitle })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ e.jsxs("main", { ref: c, className: "container mx-auto px-4 py-32 max-w-6xl relative", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col lg:flex-row justify-between items-end mb-24 gap-12", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "max-w-2xl", children: [
          /* @__PURE__ */ e.jsx("span", { className: "text-brand-yellow font-cinzel tracking-[0.4em] uppercase text-xs font-bold mb-4 block", children: r.intro.kicker }),
          /* @__PURE__ */ e.jsx("h2", { className: "text-5xl md:text-6xl font-cinzel text-brand-blue mb-8 leading-tight whitespace-pre-line", children: r.intro.title }),
          /* @__PURE__ */ e.jsx("p", { className: "text-text-muted font-montserrat text-lg leading-relaxed font-light whitespace-pre-line", children: r.intro.content })
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "flex gap-4", children: /* @__PURE__ */ e.jsxs("div", { className: "bg-brand-blue p-8 rounded-2xl shadow-xl text-white transform hover:-translate-y-2 transition-transform duration-300", children: [
          /* @__PURE__ */ e.jsx(S, { className: "text-brand-yellow mb-4", size: 32 }),
          /* @__PURE__ */ e.jsx("h4", { className: "font-cinzel text-lg mb-2", children: "Monthly Flexibility" }),
          /* @__PURE__ */ e.jsx("p", { className: "text-xs text-white/60 font-montserrat leading-relaxed", children: "Spreading your investment across equal monthly payments." })
        ] }) })
      ] }),
      /* @__PURE__ */ e.jsx(u, { title: "Gentlemen", rates: r.menRates, columns: ["Quarterly", "Monthly"], icon: f }),
      /* @__PURE__ */ e.jsx(u, { title: "Ladies", rates: r.ladiesRates, columns: ["Quarterly", "Monthly"], icon: f }),
      /* @__PURE__ */ e.jsx(u, { title: "Admin & Extras", rates: r.allRates, columns: ["Amount"], icon: A }),
      /* @__PURE__ */ e.jsxs("div", { className: "relative mt-32 py-24 px-8 rounded-3xl overflow-hidden bg-brand-blue text-center group shadow-2xl", children: [
        /* @__PURE__ */ e.jsx("div", { className: "absolute inset-0 opacity-20 grayscale-0 group-hover:scale-110 transition-transform duration-1000", style: { backgroundImage: `url('${r.cta.backgroundImage}')`, backgroundSize: "cover" } }),
        /* @__PURE__ */ e.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-brand-blue via-brand-blue/90 to-black" }),
        /* @__PURE__ */ e.jsxs("div", { className: "relative z-10", children: [
          /* @__PURE__ */ e.jsx("h3", { className: "text-4xl md:text-5xl font-cinzel text-brand-yellow mb-8 tracking-widest leading-tight whitespace-pre-line", children: r.cta.title }),
          /* @__PURE__ */ e.jsx("p", { className: "text-white/70 font-montserrat mb-12 max-w-xl mx-auto text-lg font-light leading-relaxed", children: r.cta.description }),
          /* @__PURE__ */ e.jsx("div", { className: "flex flex-wrap justify-center gap-8", children: /* @__PURE__ */ e.jsxs("a", { href: r.cta.buttonUrl, className: "group flex items-center bg-brand-yellow text-brand-blue no-underline hover:no-underline focus:no-underline font-cinzel font-bold text-sm tracking-widest uppercase py-4 px-12 border border-brand-yellow hover:bg-white hover:border-white transition-all duration-300 rounded-sm shadow-xl shadow-brand-yellow/20", children: [
            r.cta.buttonText,
            " ",
            /* @__PURE__ */ e.jsx(k, { size: 18, className: "ml-3 group-hover:translate-x-2 transition-transform" })
          ] }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "h-20 bg-gradient-to-t from-black/5 to-transparent lg:hidden" })
  ] });
};
export {
  $ as default
};
