import { r as n, g as o, j as e, S as f } from "./main-C4Y7UEwf.mjs";
import { c as b } from "./createLucideIcon-BXI0vGFy.mjs";
const y = [
  ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
  ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }]
], w = b("mail", y);
const j = [
  [
    "path",
    {
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v"
    }
  ]
], N = b("phone", j);
o.registerPlugin(f);
const z = () => {
  const i = n.useRef(null), a = n.useRef(null), [m, d] = n.useState(null), c = {
    hero: {
      kicker: "Championship Value",
      title: "Green Fees",
      titleHighlight: "Rates",
      subtitle: "Experience Championship Golf at Wingate Park",
      backgroundImage: "/wp-content/uploads/2026/02/20260131_124600-scaled.jpg"
    },
    intro: {
      content: "Wingate Park Golf Club offers a prestigious golfing experience accessible to all. Whether you are a seasoned affiliated player, a visitor, or a junior starting your journey, we welcome you to challenge yourself on our wooded fairways and pristine greens."
    },
    greenFees: [
      { category: "Affiliated", holes18: 20, holes9: 10 },
      { category: "Non-Affiliated", holes18: 30, holes9: 15 },
      { category: "Non-Residents", holes18: 60, holes9: 40 },
      { category: "Seniors Affiliated", holes18: 10, holes9: 5 },
      { category: "Seniors (Non-Members) 65-74yrs", holes18: 15, holes9: 10 },
      { category: "Juniors", holes18: 5, holes9: 5 },
      { category: "Students (with Valid Cards)", holes18: 15, holes9: 10 },
      { category: "Over 75 Years", holes18: 10, holes9: 5 },
      { category: 'Mon/Tue/Thu AM "Special"', holes18: 10, holes9: 5 }
    ],
    cartHire: [
      { type: "High-Rider / 4-Seater", holes18: 40, holes9: 25 },
      { type: "Standard Cart", holes18: 35, holes9: 20 },
      { type: "Budget Carts", holes18: 30, holes9: 15 },
      { type: "3-Wheeler (Trike)", holes18: 20, holes9: 12 }
    ],
    booking: {
      title: "Book Tee Time or Cart",
      description: "Ready to play? Contact the office to reserve your slot.",
      phone: "0772 339 670",
      email: "reception@wingate.co.zw"
    },
    etiquette: {
      title: "Dress Code & Etiquette",
      description: "To ensure an enjoyable experience for all members and visitors, please adhere to our club's dress code and etiquette.",
      image: "/wp-content/uploads/2026/02/20260118_165728-scaled.jpg",
      items: [
        "Collared Shirts Required (No T-shirts)",
        "Shirts must be tucked into trousers or shorts",
        "Tailored shorts only (No rugby shorts)",
        "No denim jeans or denim shorts allowed",
        'Short white or "hidden" socks required'
      ],
      buttonText: "Contact Us for More Info",
      buttonUrl: "/contact-us/"
    }
  };
  n.useEffect(() => {
    const s = o.context(() => {
      o.fromTo(
        ".hero-content",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.2 }
      );
    }, i), r = o.context(() => {
      o.fromTo(
        ".anim-section",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: a.current,
            start: "top 80%"
          }
        }
      ), o.utils.toArray(".fees-table-card").forEach((l) => {
        o.fromTo(
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
        const u = l.querySelectorAll(".fees-table-row");
        o.fromTo(
          u,
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
    }, a);
    return () => {
      s.revert(), r.revert();
    };
  }, []), n.useEffect(() => {
    (async () => {
      try {
        const r = await fetch("/wp-json/wingate/v1/green-fees-settings");
        if (!r.ok) throw new Error("Failed to fetch green fees settings");
        const l = await r.json();
        d(l);
      } catch (r) {
        console.error("Failed to fetch green fees settings:", r), d(c);
      }
    })();
  }, []);
  const t = m || c, g = t.greenFees || [], p = t.cartHire || [], h = t.booking?.phone || "", x = t.booking?.email || "";
  return /* @__PURE__ */ e.jsxs("div", { className: "bg-brand-gray min-h-screen font-sans", children: [
    /* @__PURE__ */ e.jsxs("section", { ref: i, className: "relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "absolute inset-0 z-0", children: [
        /* @__PURE__ */ e.jsx(
          "img",
          {
            src: t.hero.backgroundImage,
            alt: "Green Fees Hero",
            className: "w-full h-full object-cover"
          }
        ),
        /* @__PURE__ */ e.jsx("div", { className: "absolute inset-0 bg-brand-blue/35 mix-blend-multiply" }),
        /* @__PURE__ */ e.jsx("div", { className: "absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/45 to-transparent" }),
        /* @__PURE__ */ e.jsx("div", { className: "absolute inset-x-0 bottom-0 h-4 bg-gradient-to-t from-brand-gray to-transparent" })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "relative z-10 text-center text-white hero-content px-4", children: [
        /* @__PURE__ */ e.jsx("div", { className: "inline-block px-4 py-1 border border-brand-yellow/30 rounded-full mb-6 backdrop-blur-md bg-white/10", children: /* @__PURE__ */ e.jsx("span", { className: "text-brand-yellow text-xs font-bold tracking-[0.3em] uppercase", children: t.hero.kicker }) }),
        /* @__PURE__ */ e.jsxs("h1", { className: "text-5xl md:text-7xl font-cinzel font-bold mb-4 tracking-tight leading-none text-white drop-shadow-2xl", children: [
          t.hero.title,
          " ",
          /* @__PURE__ */ e.jsx("span", { className: "text-brand-yellow", children: t.hero.titleHighlight })
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "w-24 h-1 bg-brand-yellow mx-auto mb-6" }),
        /* @__PURE__ */ e.jsx("p", { className: "text-xl md:text-2xl font-montserrat font-light tracking-wide text-white/90", children: t.hero.subtitle })
      ] })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { ref: a, className: "max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24", children: [
      /* @__PURE__ */ e.jsx("div", { className: "text-center mb-16 anim-section", children: /* @__PURE__ */ e.jsx("p", { className: "text-lg md:text-xl font-merriweather text-gray-700 leading-relaxed max-w-4xl mx-auto", children: t.intro.content }) }),
      /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "anim-section", children: [
          /* @__PURE__ */ e.jsx("h2", { className: "text-3xl font-cinzel text-brand-blue mb-6 border-l-4 border-brand-yellow pl-4", children: "Green Fees (USD)" }),
          /* @__PURE__ */ e.jsx("div", { className: "fees-table-card bg-white/95 backdrop-blur-sm rounded-sm shadow-xl overflow-hidden border border-brand-yellow/20 border-t-4 border-brand-blue", children: /* @__PURE__ */ e.jsxs("table", { className: "w-full", children: [
            /* @__PURE__ */ e.jsx("thead", { className: "bg-brand-blue text-white", children: /* @__PURE__ */ e.jsxs("tr", { children: [
              /* @__PURE__ */ e.jsx("th", { className: "py-4 px-4 text-left font-cinzel font-bold tracking-wider", children: "Category" }),
              /* @__PURE__ */ e.jsx("th", { className: "py-4 px-4 text-center font-cinzel font-bold tracking-wider", children: "18 Holes" }),
              /* @__PURE__ */ e.jsx("th", { className: "py-4 px-4 text-center font-cinzel font-bold tracking-wider", children: "9 Holes" })
            ] }) }),
            /* @__PURE__ */ e.jsx("tbody", { className: "divide-y divide-gray-100", children: g.map((s, r) => /* @__PURE__ */ e.jsxs("tr", { className: "fees-table-row hover:bg-brand-yellow/10 transition-colors", children: [
              /* @__PURE__ */ e.jsx("td", { className: "py-4 px-4 font-montserrat font-semibold text-gray-800 text-sm md:text-base", children: s.category }),
              /* @__PURE__ */ e.jsxs("td", { className: "py-4 px-4 text-center font-cinzel font-bold text-brand-blue text-lg", children: [
                "$",
                s.holes18
              ] }),
              /* @__PURE__ */ e.jsxs("td", { className: "py-4 px-4 text-center font-cinzel font-bold text-brand-yellow text-lg", children: [
                "$",
                s.holes9
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
            /* @__PURE__ */ e.jsx("tbody", { className: "divide-y divide-gray-100", children: p.map((s, r) => /* @__PURE__ */ e.jsxs("tr", { className: "fees-table-row hover:bg-brand-yellow/10 transition-colors", children: [
              /* @__PURE__ */ e.jsx("td", { className: "py-4 px-4 font-montserrat font-semibold text-gray-800 text-sm md:text-base", children: s.type }),
              /* @__PURE__ */ e.jsxs("td", { className: "py-4 px-4 text-center font-cinzel font-bold text-brand-blue text-lg", children: [
                "$",
                s.holes18
              ] }),
              /* @__PURE__ */ e.jsxs("td", { className: "py-4 px-4 text-center font-cinzel font-bold text-brand-yellow text-lg", children: [
                "$",
                s.holes9
              ] })
            ] }, r)) })
          ] }) }),
          /* @__PURE__ */ e.jsxs("div", { className: "bg-brand-blue text-white p-5 md:p-6 rounded-sm shadow-lg anim-section relative overflow-hidden group", children: [
            /* @__PURE__ */ e.jsx("div", { className: "absolute top-0 right-0 w-32 h-32 bg-brand-yellow/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-yellow/30 transition-all duration-500" }),
            /* @__PURE__ */ e.jsx("h3", { className: "text-xl md:text-2xl font-cinzel font-bold mb-2 relative z-10 text-left", children: t.booking?.title }),
            /* @__PURE__ */ e.jsx("p", { className: "font-montserrat text-sm md:text-base mb-4 text-gray-200 relative z-10 text-left", children: t.booking?.description }),
            /* @__PURE__ */ e.jsxs("div", { className: "relative z-10 flex flex-col gap-2", children: [
              /* @__PURE__ */ e.jsxs(
                "a",
                {
                  href: `tel:${h.replace(/\s+/g, "")}`,
                  className: "group inline-flex items-center gap-3 rounded-sm border border-white/20 bg-white/5 px-4 py-2.5 text-white !no-underline hover:!no-underline focus:!no-underline transition-colors hover:border-brand-yellow hover:bg-white/10",
                  children: [
                    /* @__PURE__ */ e.jsx("span", { className: "flex h-8 w-8 items-center justify-center rounded-full bg-brand-yellow text-brand-blue", children: /* @__PURE__ */ e.jsx(N, { size: 16 }) }),
                    /* @__PURE__ */ e.jsxs("span", { className: "font-montserrat text-sm font-semibold leading-tight", children: [
                      "Reception ",
                      h
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ e.jsxs(
                "a",
                {
                  href: `mailto:${x}`,
                  className: "group inline-flex items-center gap-3 rounded-sm border border-white/20 bg-white/5 px-4 py-2.5 text-white !no-underline hover:!no-underline focus:!no-underline transition-colors hover:border-brand-yellow hover:bg-white/10",
                  children: [
                    /* @__PURE__ */ e.jsx("span", { className: "flex h-8 w-8 items-center justify-center rounded-full bg-brand-yellow text-brand-blue", children: /* @__PURE__ */ e.jsx(w, { size: 16 }) }),
                    /* @__PURE__ */ e.jsx("span", { className: "font-montserrat text-[13px] md:text-sm font-semibold leading-tight whitespace-nowrap", children: x })
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
            src: t.etiquette?.image,
            alt: "Golf Etiquette",
            className: "rounded-sm shadow-2xl w-full h-[360px] md:h-[520px] object-cover object-bottom"
          }
        ) }),
        /* @__PURE__ */ e.jsxs("div", { children: [
          /* @__PURE__ */ e.jsx("h2", { className: "text-3xl font-cinzel text-brand-blue mb-6 border-l-4 border-brand-yellow pl-4", children: t.etiquette?.title }),
          /* @__PURE__ */ e.jsx("p", { className: "font-montserrat text-gray-600 mb-6 leading-relaxed", children: t.etiquette?.description }),
          /* @__PURE__ */ e.jsx("ul", { className: "space-y-4 font-montserrat text-gray-700", children: (t.etiquette?.items || []).map((s, r) => /* @__PURE__ */ e.jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ e.jsx("span", { className: "text-brand-yellow mt-1", children: /* @__PURE__ */ e.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ e.jsx("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z", clipRule: "evenodd" }) }) }),
            s
          ] }, r)) }),
          /* @__PURE__ */ e.jsx("div", { className: "mt-8", children: /* @__PURE__ */ e.jsx("a", { href: t.etiquette?.buttonUrl, className: "inline-block bg-brand-blue !text-white visited:!text-white !no-underline hover:!no-underline focus:!no-underline font-cinzel font-bold uppercase tracking-widest px-8 py-3 rounded-sm border border-brand-blue hover:bg-brand-yellow hover:!text-brand-blue hover:border-brand-yellow transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1", children: t.etiquette?.buttonText }) })
        ] })
      ] }) })
    ] })
  ] });
};
export {
  z as default
};
