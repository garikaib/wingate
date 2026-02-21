import { c as p, r as o, j as e } from "./main-B1uaK48I.mjs";
import { C as u } from "./chevron-left-Dv5uzyo2.mjs";
import { C as b } from "./chevron-right-Ddd8xXSA.mjs";
const g = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], f = p("x", g), y = () => {
  const [m, x] = o.useState(!1), [s, r] = o.useState(null);
  o.useEffect(() => {
    x(!0);
  }, []);
  const l = s !== null, h = (t) => {
    r(t), document.body.style.overflow = "hidden";
  }, i = () => {
    r(null), document.body.style.overflow = "";
  }, d = () => {
    r((t) => t === null ? 0 : (t - 1 + a.length) % a.length);
  }, c = () => {
    r((t) => t === null ? 0 : (t + 1) % a.length);
  };
  o.useEffect(() => {
    if (!l)
      return;
    const t = (n) => {
      n.key === "Escape" ? i() : n.key === "ArrowLeft" ? d() : n.key === "ArrowRight" && c();
    };
    return window.addEventListener("keydown", t), () => {
      window.removeEventListener("keydown", t);
    };
  }, [l]), o.useEffect(() => () => {
    document.body.style.overflow = "";
  }, []);
  const a = [
    {
      src: "/wp-content/uploads/2026/02/20260126_140523-scaled.jpg",
      alt: "Refreshing beverages at the bar",
      caption: "Premium Selection",
      description: "A wide range of local and international beverages.",
      format: "landscape"
    },
    {
      src: "/wp-content/uploads/2026/02/20260126_140612-scaled.jpg",
      alt: "The Loyal & Ancient Bar",
      caption: "The Heart of the Club",
      description: "Where stories are shared and friendships forged.",
      format: "portrait"
    },
    {
      src: "/wp-content/uploads/2026/02/20260117_125353-scaled.jpg",
      alt: "Comfortable seating",
      caption: "Relax & Unwind",
      description: "Comfortable seating for post-round relaxation.",
      format: "landscape"
    },
    {
      src: "/wp-content/uploads/2026/02/20251212_170252-scaled.jpg",
      alt: "Exquisite dining",
      caption: "Culinary Delights",
      description: "Freshly prepared meals for every occasion.",
      format: "landscape"
    },
    {
      src: "/wp-content/uploads/2026/02/20251219_185419-scaled.jpg",
      alt: "Club House at night",
      caption: "Evening Ambiance",
      description: "The perfect setting for evening events.",
      format: "landscape"
    },
    {
      src: "/wp-content/uploads/2026/02/20251219_193411-scaled.jpg",
      alt: "Balcony views",
      caption: "Balcony Views",
      description: "Enjoy the cool breeze and stunning views.",
      format: "landscape"
    },
    {
      src: "/wp-content/uploads/2026/02/20260126_141123-scaled.jpg",
      alt: "Interior details",
      caption: "Classic Interiors",
      description: "Timeless design meeting modern comfort.",
      format: "landscape"
    },
    {
      src: "/wp-content/uploads/2026/02/20251209_104643-scaled.jpg",
      alt: "Club House Exterior",
      caption: "Welcome Home",
      description: "A prestigious landmark in Pomona.",
      format: "landscape"
    }
  ];
  return /* @__PURE__ */ e.jsxs("div", { className: `w-full transition-opacity duration-1000 ${m ? "opacity-100" : "opacity-0"}`, children: [
    /* @__PURE__ */ e.jsxs("section", { className: "relative h-[80vh] w-full flex items-center justify-center overflow-hidden bg-brand-blue", children: [
      /* @__PURE__ */ e.jsx("div", { className: "absolute inset-0 bg-[url('https://new-wingate.ddev.site/wp-content/uploads/2026/02/20260112_120717-scaled.jpg')] bg-cover bg-center opacity-40" }),
      /* @__PURE__ */ e.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-brand-blue/80 via-transparent to-brand-blue/90" }),
      /* @__PURE__ */ e.jsxs("div", { className: "relative z-10 text-center px-4 max-w-4xl mx-auto", children: [
        /* @__PURE__ */ e.jsx("h1", { className: "font-cinzel text-5xl md:text-7xl lg:text-8xl text-brand-yellow font-bold mb-6 drop-shadow-2xl", children: "The Loyal & Ancient" }),
        /* @__PURE__ */ e.jsx("div", { className: "h-1 w-32 bg-white mx-auto mb-8" }),
        /* @__PURE__ */ e.jsx("p", { className: "font-montserrat text-white text-lg md:text-xl tracking-widest uppercase font-light", children: "Est. 1997" })
      ] })
    ] }),
    /* @__PURE__ */ e.jsx("section", { className: "py-24 px-6 bg-white", children: /* @__PURE__ */ e.jsxs("div", { className: "max-w-4xl mx-auto text-center", children: [
      /* @__PURE__ */ e.jsx("h2", { className: "font-cinzel text-4xl md:text-5xl text-brand-blue mb-8", children: "A Tradition of Hospitality" }),
      /* @__PURE__ */ e.jsxs("div", { className: "space-y-6 font-montserrat text-gray-700 text-lg leading-relaxed show-on-scroll", children: [
        /* @__PURE__ */ e.jsx("p", { children: "Nestled within the tranquil Pomona area of Harare, the Loyal & Ancient bar stands as a testament to the enduring spirit of camaraderie and tradition at Wingate Park Golf Club. Founded in 1997, this cherished establishment has become more than just a watering hole; it is the beating heart of our community." }),
        /* @__PURE__ */ e.jsx("p", { children: "Here, the clinking of glasses echoes the laughter of friends, both old and new. Whether you are recounting the triumphs of a round well-played or simply unwinding in the golden glow of the afternoon sun, the atmosphere remains effortlessly inviting." }),
        /* @__PURE__ */ e.jsx("p", { children: "Our in-house catering team takes pride in serving exquisite meals that complement the rustic elegance of our surroundings. From casual bites to elaborate banquets, every dish is prepared with passion and served with a smile. We invite you to step inside, relax, and become a part of our story." })
      ] })
    ] }) }),
    /* @__PURE__ */ e.jsx("section", { className: "py-24 px-4 md:px-8 bg-brand-gray", children: /* @__PURE__ */ e.jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ e.jsx("h2", { className: "font-cinzel text-4xl text-center text-brand-blue mb-16", children: "Explore The Club House" }),
      /* @__PURE__ */ e.jsx("div", { className: "columns-1 md:columns-2 xl:columns-3 gap-6 [column-fill:_balance]", children: a.map((t, n) => /* @__PURE__ */ e.jsxs(
        "div",
        {
          className: "group relative mb-6 break-inside-avoid overflow-hidden rounded-sm border border-brand-blue/10 bg-white shadow-lg transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl",
          onClick: () => h(n),
          children: [
            /* @__PURE__ */ e.jsxs("div", { className: "relative overflow-hidden", children: [
              /* @__PURE__ */ e.jsx(
                "img",
                {
                  src: t.src,
                  alt: t.alt,
                  loading: "lazy",
                  className: `w-full object-cover transition-transform duration-700 group-hover:scale-105 ${t.format === "portrait" ? "aspect-[4/5]" : "aspect-[4/3]"} cursor-zoom-in`
                }
              ),
              /* @__PURE__ */ e.jsx("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-blue/95 via-brand-blue/35 to-transparent" })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "pointer-events-none absolute bottom-0 left-0 w-full p-5 md:p-6", children: [
              /* @__PURE__ */ e.jsx("h3", { className: "font-cinzel text-2xl text-brand-yellow mb-1 drop-shadow-[0_2px_4px_rgba(0,0,0,0.45)]", children: t.caption }),
              /* @__PURE__ */ e.jsx("p", { className: "font-montserrat text-white/95 text-sm leading-relaxed max-w-[42ch]", children: t.description })
            ] })
          ]
        },
        n
      )) })
    ] }) }),
    l && /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: "fixed inset-0 z-[999] flex items-center justify-center bg-brand-blue/95 backdrop-blur-md",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": "Club House photo viewer",
        onClick: i,
        children: [
          /* @__PURE__ */ e.jsx(
            "button",
            {
              type: "button",
              onClick: (t) => {
                t.stopPropagation(), i();
              },
              className: "absolute top-6 right-6 z-20 rounded-full border border-white/25 bg-white/10 p-2 text-white transition-colors hover:bg-white hover:text-brand-blue",
              "aria-label": "Close gallery viewer",
              children: /* @__PURE__ */ e.jsx(f, { size: 22 })
            }
          ),
          /* @__PURE__ */ e.jsx(
            "button",
            {
              type: "button",
              onClick: (t) => {
                t.stopPropagation(), d();
              },
              className: "absolute left-4 md:left-8 z-20 rounded-full border border-white/25 bg-white/10 p-2.5 text-white transition-colors hover:bg-brand-yellow hover:text-brand-blue",
              "aria-label": "Previous image",
              children: /* @__PURE__ */ e.jsx(u, { size: 24 })
            }
          ),
          /* @__PURE__ */ e.jsx(
            "button",
            {
              type: "button",
              onClick: (t) => {
                t.stopPropagation(), c();
              },
              className: "absolute right-4 md:right-8 z-20 rounded-full border border-white/25 bg-white/10 p-2.5 text-white transition-colors hover:bg-brand-yellow hover:text-brand-blue",
              "aria-label": "Next image",
              children: /* @__PURE__ */ e.jsx(b, { size: 24 })
            }
          ),
          /* @__PURE__ */ e.jsxs(
            "div",
            {
              className: "relative h-full w-full px-4 py-16 md:px-16 md:py-20",
              onClick: (t) => t.stopPropagation(),
              children: [
                /* @__PURE__ */ e.jsx("div", { className: "relative flex h-full w-full items-center justify-center", children: /* @__PURE__ */ e.jsx(
                  "img",
                  {
                    src: a[s].src,
                    alt: a[s].alt,
                    className: "max-h-full max-w-full rounded-sm border border-white/20 object-contain shadow-2xl"
                  }
                ) }),
                /* @__PURE__ */ e.jsx("div", { className: "absolute inset-x-0 bottom-0", children: /* @__PURE__ */ e.jsxs("div", { className: "mx-4 mb-4 rounded-sm border border-white/15 bg-gradient-to-r from-brand-blue/90 via-brand-blue/75 to-brand-blue/90 p-4 md:mx-8 md:mb-8 md:p-6", children: [
                  /* @__PURE__ */ e.jsxs("div", { className: "mb-2 flex items-center justify-between gap-4", children: [
                    /* @__PURE__ */ e.jsx("h3", { className: "font-cinzel text-xl md:text-2xl text-brand-yellow", children: a[s].caption }),
                    /* @__PURE__ */ e.jsxs("span", { className: "font-montserrat text-xs md:text-sm tracking-widest uppercase text-white/75", children: [
                      s + 1,
                      " / ",
                      a.length
                    ] })
                  ] }),
                  /* @__PURE__ */ e.jsx("p", { className: "max-w-3xl font-montserrat text-sm md:text-base leading-relaxed text-white/95", children: a[s].description })
                ] }) })
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ e.jsxs("section", { className: "py-24 bg-brand-blue relative overflow-hidden", children: [
      /* @__PURE__ */ e.jsx("div", { className: "absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" }),
      /* @__PURE__ */ e.jsxs("div", { className: "max-w-4xl mx-auto text-center relative z-10 px-6", children: [
        /* @__PURE__ */ e.jsx("h2", { className: "font-cinzel text-4xl md:text-6xl text-white mb-8", children: "Host Your Next Event" }),
        /* @__PURE__ */ e.jsx("p", { className: "font-montserrat text-gray-300 text-lg mb-12 max-w-2xl mx-auto", children: "From weddings to corporate retreats, the Loyal & Ancient provides a stunning backdrop for unforgettable moments." }),
        /* @__PURE__ */ e.jsx(
          "a",
          {
            href: "/contact-us/",
            className: "inline-block bg-brand-yellow text-brand-blue font-montserrat font-bold py-4 px-12 rounded-sm hover:bg-white transition-colors duration-300 shadow-lg uppercase tracking-widest",
            children: "Book An Event"
          }
        )
      ] })
    ] })
  ] });
};
export {
  y as default
};
