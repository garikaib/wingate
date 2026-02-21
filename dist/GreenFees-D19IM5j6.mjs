import { r as a, g as s, j as e, P as b, M as m, S as p } from "./main-B1uaK48I.mjs";
s.registerPlugin(p);
const u = () => {
  const n = a.useRef(null), o = a.useRef(null);
  a.useEffect(() => {
    const t = s.context(() => {
      s.fromTo(
        ".hero-content",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.2 }
      );
    }, n), r = s.context(() => {
      s.fromTo(
        ".anim-section",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: o.current,
            start: "top 80%"
          }
        }
      ), s.utils.toArray(".fees-table-card").forEach((l) => {
        s.fromTo(
          l,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: l,
              start: "top 85%"
            }
          }
        );
        const h = l.querySelectorAll(".fees-table-row");
        s.fromTo(
          h,
          { y: 16, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.45,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: {
              trigger: l,
              start: "top 80%"
            }
          }
        );
      });
    }, o);
    return () => {
      t.revert(), r.revert();
    };
  }, []);
  const c = [
    { category: "Affiliated", holes18: 20, holes9: 10 },
    { category: "Non-Affiliated", holes18: 30, holes9: 15 },
    { category: "Non-Residents", holes18: 60, holes9: 40 },
    { category: "Seniors Affiliated", holes18: 10, holes9: 5 },
    { category: "Seniors (Non-Members) 65-74yrs", holes18: 15, holes9: 10 },
    { category: "Juniors", holes18: 5, holes9: 5 },
    { category: "Students (with Valid Cards)", holes18: 15, holes9: 10 },
    { category: "Over 75 Years", holes18: 10, holes9: 5 },
    { category: 'Mon/Tue/Thu AM "Special"', holes18: 10, holes9: 5 }
  ], x = [
    { type: "High-Rider / 4-Seater", holes18: 40, holes9: 25 },
    { type: "Standard Cart", holes18: 35, holes9: 20 },
    { type: "Budget Carts", holes18: 30, holes9: 15 },
    { type: "3-Wheeler (Trike)", holes18: 20, holes9: 12 }
  ], i = "0772 339 670", d = "reception@wingate.co.zw";
  return /* @__PURE__ */ e.jsxs("div", { className: "bg-brand-gray min-h-screen font-sans", children: [
    /* @__PURE__ */ e.jsxs("section", { ref: n, className: "relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "absolute inset-0 z-0", children: [
        /* @__PURE__ */ e.jsx(
          "img",
          {
            src: "/wp-content/uploads/2026/02/20260131_124600-scaled.jpg",
            alt: "Green Fees Hero",
            className: "w-full h-full object-cover"
          }
        ),
        /* @__PURE__ */ e.jsx("div", { className: "absolute inset-0 bg-brand-blue/35 mix-blend-multiply" }),
        /* @__PURE__ */ e.jsx("div", { className: "absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/45 to-transparent" }),
        /* @__PURE__ */ e.jsx("div", { className: "absolute inset-x-0 bottom-0 h-4 bg-gradient-to-t from-brand-gray to-transparent" })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "relative z-10 text-center text-white hero-content px-4", children: [
        /* @__PURE__ */ e.jsx("div", { className: "inline-block px-4 py-1 border border-brand-yellow/30 rounded-full mb-6 backdrop-blur-md bg-white/10", children: /* @__PURE__ */ e.jsx("span", { className: "text-brand-yellow text-xs font-bold tracking-[0.3em] uppercase", children: "Championship Value" }) }),
        /* @__PURE__ */ e.jsxs("h1", { className: "text-5xl md:text-7xl font-cinzel font-bold mb-4 tracking-tight leading-none text-white drop-shadow-2xl", children: [
          "Green ",
          /* @__PURE__ */ e.jsx("span", { className: "text-brand-yellow", children: "Fees" }),
          " & Rates"
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "w-24 h-1 bg-brand-yellow mx-auto mb-6" }),
        /* @__PURE__ */ e.jsx("p", { className: "text-xl md:text-2xl font-montserrat font-light tracking-wide text-white/90", children: "Experience Championship Golf at Wingate Park" })
      ] })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { ref: o, className: "max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24", children: [
      /* @__PURE__ */ e.jsx("div", { className: "text-center mb-16 anim-section", children: /* @__PURE__ */ e.jsx("p", { className: "text-lg md:text-xl font-merriweather text-gray-700 leading-relaxed max-w-4xl mx-auto", children: "Wingate Park Golf Club offers a prestigious golfing experience accessible to all. Whether you are a seasoned affiliated player, a visitor, or a junior starting your journey, we welcome you to challenge yourself on our wooded fairways and pristine greens." }) }),
      /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "anim-section", children: [
          /* @__PURE__ */ e.jsx("h2", { className: "text-3xl font-cinzel text-brand-blue mb-6 border-l-4 border-brand-yellow pl-4", children: "Green Fees (USD)" }),
          /* @__PURE__ */ e.jsx("div", { className: "fees-table-card bg-white/95 backdrop-blur-sm rounded-sm shadow-xl overflow-hidden border border-brand-yellow/20 border-t-4 border-brand-blue", children: /* @__PURE__ */ e.jsxs("table", { className: "w-full", children: [
            /* @__PURE__ */ e.jsx("thead", { className: "bg-brand-blue text-white", children: /* @__PURE__ */ e.jsxs("tr", { children: [
              /* @__PURE__ */ e.jsx("th", { className: "py-4 px-4 text-left font-cinzel font-bold tracking-wider", children: "Category" }),
              /* @__PURE__ */ e.jsx("th", { className: "py-4 px-4 text-center font-cinzel font-bold tracking-wider", children: "18 Holes" }),
              /* @__PURE__ */ e.jsx("th", { className: "py-4 px-4 text-center font-cinzel font-bold tracking-wider", children: "9 Holes" })
            ] }) }),
            /* @__PURE__ */ e.jsx("tbody", { className: "divide-y divide-gray-100", children: c.map((t, r) => /* @__PURE__ */ e.jsxs("tr", { className: "fees-table-row hover:bg-brand-yellow/10 transition-colors", children: [
              /* @__PURE__ */ e.jsx("td", { className: "py-4 px-4 font-montserrat font-semibold text-gray-800 text-sm md:text-base", children: t.category }),
              /* @__PURE__ */ e.jsxs("td", { className: "py-4 px-4 text-center font-cinzel font-bold text-brand-blue text-lg", children: [
                "$",
                t.holes18
              ] }),
              /* @__PURE__ */ e.jsxs("td", { className: "py-4 px-4 text-center font-cinzel font-bold text-brand-yellow text-lg", children: [
                "$",
                t.holes9
              ] })
            ] }, r)) })
          ] }) })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "anim-section", children: [
          /* @__PURE__ */ e.jsx("h2", { className: "text-3xl font-cinzel text-brand-blue mb-6 border-l-4 border-brand-yellow pl-4", children: "Cart Hire (USD)" }),
          /* @__PURE__ */ e.jsx("div", { className: "fees-table-card bg-white/95 backdrop-blur-sm rounded-sm shadow-xl overflow-hidden border border-brand-yellow/20 border-t-4 border-brand-blue mb-12", children: /* @__PURE__ */ e.jsxs("table", { className: "w-full", children: [
            /* @__PURE__ */ e.jsx("thead", { className: "bg-brand-blue text-white", children: /* @__PURE__ */ e.jsxs("tr", { children: [
              /* @__PURE__ */ e.jsx("th", { className: "py-4 px-4 text-left font-cinzel font-bold tracking-wider", children: "Cart Type" }),
              /* @__PURE__ */ e.jsx("th", { className: "py-4 px-4 text-center font-cinzel font-bold tracking-wider", children: "18 Holes" }),
              /* @__PURE__ */ e.jsx("th", { className: "py-4 px-4 text-center font-cinzel font-bold tracking-wider", children: "9 Holes" })
            ] }) }),
            /* @__PURE__ */ e.jsx("tbody", { className: "divide-y divide-gray-100", children: x.map((t, r) => /* @__PURE__ */ e.jsxs("tr", { className: "fees-table-row hover:bg-brand-yellow/10 transition-colors", children: [
              /* @__PURE__ */ e.jsx("td", { className: "py-4 px-4 font-montserrat font-semibold text-gray-800 text-sm md:text-base", children: t.type }),
              /* @__PURE__ */ e.jsxs("td", { className: "py-4 px-4 text-center font-cinzel font-bold text-brand-blue text-lg", children: [
                "$",
                t.holes18
              ] }),
              /* @__PURE__ */ e.jsxs("td", { className: "py-4 px-4 text-center font-cinzel font-bold text-brand-yellow text-lg", children: [
                "$",
                t.holes9
              ] })
            ] }, r)) })
          ] }) }),
          /* @__PURE__ */ e.jsxs("div", { className: "bg-brand-blue text-white p-5 md:p-6 rounded-sm shadow-lg anim-section relative overflow-hidden group", children: [
            /* @__PURE__ */ e.jsx("div", { className: "absolute top-0 right-0 w-32 h-32 bg-brand-yellow/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-yellow/30 transition-all duration-500" }),
            /* @__PURE__ */ e.jsx("h3", { className: "text-xl md:text-2xl font-cinzel font-bold mb-2 relative z-10 text-left", children: "Book Tee Time or Cart" }),
            /* @__PURE__ */ e.jsx("p", { className: "font-montserrat text-sm md:text-base mb-4 text-gray-200 relative z-10 text-left", children: "Ready to play? Contact the office to reserve your slot." }),
            /* @__PURE__ */ e.jsxs("div", { className: "relative z-10 flex flex-col gap-2", children: [
              /* @__PURE__ */ e.jsxs(
                "a",
                {
                  href: `tel:${i.replace(/\s+/g, "")}`,
                  className: "group inline-flex items-center gap-3 rounded-sm border border-white/20 bg-white/5 px-4 py-2.5 text-white !no-underline hover:!no-underline focus:!no-underline transition-colors hover:border-brand-yellow hover:bg-white/10",
                  children: [
                    /* @__PURE__ */ e.jsx("span", { className: "flex h-8 w-8 items-center justify-center rounded-full bg-brand-yellow text-brand-blue", children: /* @__PURE__ */ e.jsx(b, { size: 16 }) }),
                    /* @__PURE__ */ e.jsxs("span", { className: "font-montserrat text-sm font-semibold leading-tight", children: [
                      "Reception ",
                      i
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ e.jsxs(
                "a",
                {
                  href: `mailto:${d}`,
                  className: "group inline-flex items-center gap-3 rounded-sm border border-white/20 bg-white/5 px-4 py-2.5 text-white !no-underline hover:!no-underline focus:!no-underline transition-colors hover:border-brand-yellow hover:bg-white/10",
                  children: [
                    /* @__PURE__ */ e.jsx("span", { className: "flex h-8 w-8 items-center justify-center rounded-full bg-brand-yellow text-brand-blue", children: /* @__PURE__ */ e.jsx(m, { size: 16 }) }),
                    /* @__PURE__ */ e.jsx("span", { className: "font-montserrat text-[13px] md:text-sm font-semibold leading-tight whitespace-nowrap", children: d })
                  ]
                }
              )
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "mt-20 anim-section", children: /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-12 items-start", children: [
        /* @__PURE__ */ e.jsx("div", { children: /* @__PURE__ */ e.jsx(
          "img",
          {
            src: "/wp-content/uploads/2026/02/20260118_165728-scaled.jpg",
            alt: "Golf Etiquette",
            className: "rounded-sm shadow-2xl w-full h-[360px] md:h-[520px] object-cover object-bottom"
          }
        ) }),
        /* @__PURE__ */ e.jsxs("div", { children: [
          /* @__PURE__ */ e.jsx("h2", { className: "text-3xl font-cinzel text-brand-blue mb-6 border-l-4 border-brand-yellow pl-4", children: "Dress Code & Etiquette" }),
          /* @__PURE__ */ e.jsx("p", { className: "font-montserrat text-gray-600 mb-6 leading-relaxed", children: "To ensure an enjoyable experience for all members and visitors, please adhere to our club's dress code and etiquette." }),
          /* @__PURE__ */ e.jsx("ul", { className: "space-y-4 font-montserrat text-gray-700", children: [
            "Collared Shirts Required (No T-shirts)",
            "Shirts must be tucked into trousers or shorts",
            "Tailored shorts only (No rugby shorts)",
            "No denim jeans or denim shorts allowed",
            'Short white or "hidden" socks required'
          ].map((t, r) => /* @__PURE__ */ e.jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ e.jsx("span", { className: "text-brand-yellow mt-1", children: /* @__PURE__ */ e.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ e.jsx("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z", clipRule: "evenodd" }) }) }),
            t
          ] }, r)) }),
          /* @__PURE__ */ e.jsx("div", { className: "mt-8", children: /* @__PURE__ */ e.jsx("a", { href: "/contact-us/", className: "inline-block bg-brand-blue !text-white visited:!text-white !no-underline hover:!no-underline focus:!no-underline font-cinzel font-bold uppercase tracking-widest px-8 py-3 rounded-sm border border-brand-blue hover:bg-brand-yellow hover:!text-brand-blue hover:border-brand-yellow transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1", children: "Contact Us for More Info" }) })
        ] })
      ] }) })
    ] })
  ] });
};
export {
  u as default
};
