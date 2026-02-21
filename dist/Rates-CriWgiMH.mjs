import { c, r as s, g as r, j as e, S as f } from "./main-B1uaK48I.mjs";
import { C as N } from "./chevron-right-Ddd8xXSA.mjs";
const j = [
  ["rect", { width: "20", height: "14", x: "2", y: "5", rx: "2", key: "ynyp8z" }],
  ["line", { x1: "2", x2: "22", y1: "10", y2: "10", key: "1b3vmo" }]
], v = c("credit-card", j);
const w = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
], k = c("shield-check", w);
const E = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]
], m = c("users", E);
r.registerPlugin(f);
const S = () => {
  const a = s.useRef(null), d = s.useRef(null), i = s.useRef(null), x = s.useRef(null);
  s.useEffect(() => {
    const n = r.context(() => {
      r.from(d.current, {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "expo.out"
      }), r.to(x.current, {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: a.current,
          start: "top top",
          end: "bottom top",
          scrub: !0
        }
      }), r.from(".glass-card", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: i.current,
          start: "top 75%"
        }
      }), r.to(".floater", {
        y: -20,
        duration: 2,
        repeat: -1,
        yoyo: !0,
        ease: "sine.inOut",
        stagger: 0.5
      });
    }, a);
    return () => n.revert();
  }, []);
  const b = [
    { category: "MALE", desc: "Over 18 non-student", quarterly: 210, monthly: 70 },
    { category: "COUNTRY", desc: "+50km from CBD", quarterly: 165, monthly: 55 },
    { category: "SENIOR", desc: "70-79 yrs & 10yrs member", quarterly: 150, monthly: 50 },
    { category: "LOCAL PRO", desc: "Must have a current professional license", quarterly: 120, monthly: 40 },
    { category: "STUDENT", desc: "College/Varsity (Proof required)", quarterly: 105, monthly: 35 },
    { category: "JUNIOR", desc: "Junior under 19", quarterly: 105, monthly: 35 },
    { category: "HOUSE MEN", desc: "Access to members facilities. Must pay visitor's fee golf", quarterly: 105, monthly: 35 },
    { category: "LIMITED ROUNDS", desc: "Max 18 rounds a year (Once-off)", annual: 300 },
    { category: "PENSIONER", desc: "Age 80+ & 10 years member", quarterly: 60, monthly: 20 },
    { category: "ABSENTEE", desc: "Absent > 2mths, medical or out of country", quarterly: 60, monthly: 20 }
  ], u = [
    { category: "FEMALE", desc: "FULL", quarterly: 180, monthly: 60 },
    { category: "COUNTRY", desc: "+50km from CBD", quarterly: 125, monthly: 45 },
    { category: "SENIOR", desc: "70-79 yrs & 10yrs member", quarterly: 120, monthly: 40 },
    { category: "STUDENT FEMALE", desc: "College/Varsity (Proof required)", quarterly: 90, monthly: 30 },
    { category: "JUNIOR", desc: "Junior under 19", quarterly: 75, monthly: 25 },
    { category: "HOUSE FEMALE", desc: "Access to members facilities", quarterly: 75, monthly: 25 },
    { category: "LIMITED", desc: "Max 18 rounds a year (Once-off)", annual: 250 },
    { category: "PENSIONER", desc: "Age 80+ & 10 years member", quarterly: 30, monthly: 10 },
    { category: "LOCAL PRO", desc: "Must have professional license", quarterly: 30, monthly: 10 },
    { category: "ABSENTEE", desc: "Absent > 2mths, medical or out of country", quarterly: 30, monthly: 10 }
  ], h = [
    { category: "HNA", desc: "Annual HNA Subscription (Handicap)", flat: 20 },
    { category: "ZGA", desc: "Annual Golf Union subscription", flat: 40 },
    { category: "HLPGU", desc: "Annual Golf Union subscription (Ladies)", flat: "TBA" },
    { category: "Locker", desc: "Locker in changing rooms", flat: 20 }
  ], l = ({ title: n, rates: y, columns: o, icon: g }) => /* @__PURE__ */ e.jsxs("div", { className: "glass-card mb-20 relative", children: [
    /* @__PURE__ */ e.jsx("div", { className: "absolute -top-10 -left-6 w-20 h-20 bg-brand-yellow/10 rounded-full blur-2xl -z-10" }),
    /* @__PURE__ */ e.jsxs("div", { className: "bg-white/90 backdrop-blur-xl border border-white/40 shadow-2xl rounded-2xl overflow-hidden p-8", children: [
      /* @__PURE__ */ e.jsx("div", { className: "flex items-center justify-between mb-8 border-b border-brand-blue/10 pb-6", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center", children: [
        /* @__PURE__ */ e.jsx("div", { className: "bg-brand-blue/5 p-3 rounded-xl mr-5", children: /* @__PURE__ */ e.jsx(g, { size: 32, className: "text-brand-blue" }) }),
        /* @__PURE__ */ e.jsxs("div", { children: [
          /* @__PURE__ */ e.jsx("h3", { className: "text-3xl font-cinzel text-brand-blue uppercase tracking-wider", children: n }),
          /* @__PURE__ */ e.jsx("div", { className: "w-12 h-1 bg-brand-yellow mt-1" })
        ] })
      ] }) }),
      /* @__PURE__ */ e.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ e.jsxs("table", { className: "w-full text-left border-collapse min-w-[600px]", children: [
        /* @__PURE__ */ e.jsx("thead", { children: /* @__PURE__ */ e.jsxs("tr", { className: "text-brand-blue/50 font-cinzel text-xs uppercase tracking-[0.2em]", children: [
          /* @__PURE__ */ e.jsx("th", { className: "py-4 px-4 border-b border-brand-blue/5", children: "Category" }),
          /* @__PURE__ */ e.jsx("th", { className: "py-4 px-4 border-b border-brand-blue/5", children: "Description" }),
          o.map((t) => /* @__PURE__ */ e.jsx("th", { className: "py-4 px-4 border-b border-brand-blue/5 text-center", children: t }, t))
        ] }) }),
        /* @__PURE__ */ e.jsx("tbody", { className: "font-montserrat text-sm", children: y.map((t, p) => /* @__PURE__ */ e.jsxs("tr", { className: "group hover:bg-brand-blue/[0.02] transition-colors border-b border-brand-blue/[0.03]", children: [
          /* @__PURE__ */ e.jsx("td", { className: "py-5 px-4 font-bold text-brand-blue group-hover:text-brand-yellow transition-colors", children: t.category }),
          /* @__PURE__ */ e.jsx("td", { className: "py-5 px-4 text-text-muted italic", children: t.desc }),
          t.annual ? /* @__PURE__ */ e.jsxs("td", { colSpan: o.length, className: "py-5 px-4 text-center font-bold text-brand-blue bg-brand-yellow/5 rounded-r-lg", children: [
            /* @__PURE__ */ e.jsx("span", { className: "text-brand-yellow mr-1", children: "$" }),
            t.annual,
            " ",
            /* @__PURE__ */ e.jsx("span", { className: "text-[10px] uppercase opacity-50 ml-1", children: "Annual" })
          ] }) : t.flat ? /* @__PURE__ */ e.jsxs("td", { colSpan: o.length, className: "py-5 px-4 text-center font-bold text-brand-blue", children: [
            /* @__PURE__ */ e.jsx("span", { className: "text-brand-yellow mr-1", children: "$" }),
            t.flat
          ] }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
            /* @__PURE__ */ e.jsxs("td", { className: "py-5 px-4 text-center font-bold text-brand-blue", children: [
              /* @__PURE__ */ e.jsx("span", { className: "text-xs opacity-40 mr-1", children: "$" }),
              t.quarterly
            ] }),
            /* @__PURE__ */ e.jsx("td", { className: "py-5 px-4 text-center font-bold text-brand-blue text-lg", children: /* @__PURE__ */ e.jsxs("div", { className: "bg-brand-blue text-white px-3 py-1 rounded shadow-lg scale-95 group-hover:scale-105 transition-transform duration-300", children: [
              /* @__PURE__ */ e.jsx("span", { className: "text-xs text-brand-yellow mr-1", children: "$" }),
              t.monthly
            ] }) })
          ] })
        ] }, p)) })
      ] }) })
    ] })
  ] });
  return /* @__PURE__ */ e.jsxs("div", { className: "bg-white min-h-screen relative overflow-hidden", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10", children: [
      /* @__PURE__ */ e.jsx("div", { className: "floater absolute top-1/4 right-0 w-96 h-96 bg-brand-yellow/5 rounded-full blur-[100px]" }),
      /* @__PURE__ */ e.jsx("div", { className: "floater absolute bottom-1/4 -left-20 w-80 h-80 bg-brand-blue/5 rounded-full blur-[80px]" })
    ] }),
    /* @__PURE__ */ e.jsxs("header", { ref: a, className: "relative h-[85vh] flex items-center justify-center bg-brand-blue overflow-hidden", children: [
      /* @__PURE__ */ e.jsx(
        "div",
        {
          ref: x,
          className: "absolute inset-0 bg-cover bg-center",
          style: {
            backgroundImage: "url('/wp-content/uploads/2026/02/20251123_115906-scaled.jpg')",
            transform: "scale(1.1)"
          }
        }
      ),
      /* @__PURE__ */ e.jsx("div", { className: "absolute inset-0 bg-brand-blue/30" }),
      /* @__PURE__ */ e.jsx("div", { className: "absolute inset-x-0 bottom-0 h-4 bg-gradient-to-t from-white to-transparent" }),
      /* @__PURE__ */ e.jsx("div", { className: "absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/40 to-transparent" }),
      /* @__PURE__ */ e.jsxs("div", { className: "relative z-10 text-center px-4 max-w-5xl mx-auto", children: [
        /* @__PURE__ */ e.jsx("div", { className: "inline-block px-4 py-1 border border-brand-yellow/30 rounded-full mb-6 backdrop-blur-md bg-white/10", children: /* @__PURE__ */ e.jsx("span", { className: "text-brand-yellow text-xs font-bold tracking-[0.3em] uppercase", children: "Private Experience" }) }),
        /* @__PURE__ */ e.jsxs("h1", { ref: d, className: "text-5xl md:text-8xl font-cinzel text-white mb-8 tracking-tighter drop-shadow-2xl leading-none", children: [
          "Membership ",
          /* @__PURE__ */ e.jsx("br", {}),
          " ",
          /* @__PURE__ */ e.jsx("span", { className: "text-brand-yellow", children: "Subscriptions" })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col items-center", children: [
          /* @__PURE__ */ e.jsx("div", { className: "w-24 h-1 bg-brand-yellow/50 mb-6" }),
          /* @__PURE__ */ e.jsx("p", { className: "text-sm md:text-lg text-white/90 font-montserrat tracking-[0.2em] uppercase font-light", children: "Subs as from 1st January 2026" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ e.jsxs("main", { ref: i, className: "container mx-auto px-4 py-32 max-w-6xl relative", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col lg:flex-row justify-between items-end mb-24 gap-12", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "max-w-2xl", children: [
          /* @__PURE__ */ e.jsx("span", { className: "text-brand-yellow font-cinzel tracking-[0.4em] uppercase text-xs font-bold mb-4 block", children: "The Investment" }),
          /* @__PURE__ */ e.jsxs("h2", { className: "text-5xl md:text-6xl font-cinzel text-brand-blue mb-8 leading-tight", children: [
            "Elite Access, ",
            /* @__PURE__ */ e.jsx("br", {}),
            "Curated for You"
          ] }),
          /* @__PURE__ */ e.jsx("p", { className: "text-text-muted font-montserrat text-lg leading-relaxed font-light", children: "At Wingate Park, we believe membership is more than just access—it's an entry into a legacy. Our restructured rates reflect our commitment to maintaining Zimbabwe's premier 18-hole Parkland Course." })
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "flex gap-4", children: /* @__PURE__ */ e.jsxs("div", { className: "bg-brand-blue p-8 rounded-2xl shadow-xl text-white transform hover:-translate-y-2 transition-transform duration-300", children: [
          /* @__PURE__ */ e.jsx(v, { className: "text-brand-yellow mb-4", size: 32 }),
          /* @__PURE__ */ e.jsx("h4", { className: "font-cinzel text-lg mb-2", children: "Monthly Flexibility" }),
          /* @__PURE__ */ e.jsx("p", { className: "text-xs text-white/60 font-montserrat leading-relaxed", children: "Spreading your investment across equal monthly payments." })
        ] }) })
      ] }),
      /* @__PURE__ */ e.jsx(l, { title: "Gentlemen", rates: b, columns: ["Quarterly", "Monthly"], icon: m }),
      /* @__PURE__ */ e.jsx(l, { title: "Ladies", rates: u, columns: ["Quarterly", "Monthly"], icon: m }),
      /* @__PURE__ */ e.jsx(l, { title: "Admin & Extras", rates: h, columns: ["Amount"], icon: k }),
      /* @__PURE__ */ e.jsxs("div", { className: "relative mt-32 py-24 px-8 rounded-3xl overflow-hidden bg-brand-blue text-center group shadow-2xl", children: [
        /* @__PURE__ */ e.jsx("div", { className: "absolute inset-0 opacity-20 grayscale-0 group-hover:scale-110 transition-transform duration-1000", style: { backgroundImage: "url('/wp-content/uploads/2026/02/20251123_115906-scaled.jpg')", backgroundSize: "cover" } }),
        /* @__PURE__ */ e.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-brand-blue via-brand-blue/90 to-black" }),
        /* @__PURE__ */ e.jsxs("div", { className: "relative z-10", children: [
          /* @__PURE__ */ e.jsxs("h3", { className: "text-4xl md:text-5xl font-cinzel text-brand-yellow mb-8 tracking-widest leading-tight", children: [
            "Elevate Your Game. ",
            /* @__PURE__ */ e.jsx("br", {}),
            " Join the Legacy."
          ] }),
          /* @__PURE__ */ e.jsx("p", { className: "text-white/70 font-montserrat mb-12 max-w-xl mx-auto text-lg font-light leading-relaxed", children: "Start your journey with Zimbabwe's most prestigious golfing community today." }),
          /* @__PURE__ */ e.jsx("div", { className: "flex flex-wrap justify-center gap-8", children: /* @__PURE__ */ e.jsxs("a", { href: "/membership", className: "group flex items-center bg-brand-yellow text-brand-blue no-underline hover:no-underline focus:no-underline font-cinzel font-bold text-sm tracking-widest uppercase py-4 px-12 border border-brand-yellow hover:bg-white hover:border-white transition-all duration-300 rounded-sm shadow-xl shadow-brand-yellow/20", children: [
            "JOIN NOW ",
            /* @__PURE__ */ e.jsx(N, { size: 18, className: "ml-3 group-hover:translate-x-2 transition-transform" })
          ] }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "h-20 bg-gradient-to-t from-black/5 to-transparent lg:hidden" })
  ] });
};
export {
  S as default
};
