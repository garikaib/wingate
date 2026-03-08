import { j as e, r as i, g as s, R as g, S as b } from "./main-BM9ReWkY.js";
import { P as u, C as p } from "./ContactInfoStrip-DMTma768.js";
const h = ({ settings: l }) => {
  const t = l || {
    kicker: "WELCOME TO",
    title: "WINGATE PARK",
    subtitle: "GOLF CLUB",
    description: "A PRESTIGIOUS 18-HOLE CHAMPIONSHIP COURSE",
    buttonText: "BOOK A TEE TIME",
    buttonUrl: "/booking/",
    backgroundImage: "/wp-content/uploads/2024/07/IMG-20240720-WA0010a.png"
  };
  return /* @__PURE__ */ e.jsxs("section", { className: "relative h-screen w-full flex items-center justify-center overflow-hidden", children: [
    /* @__PURE__ */ e.jsx(
      "div",
      {
        className: "absolute inset-0 z-0 bg-cover bg-center bg-no-repeat",
        style: {
          backgroundImage: `url('${t.backgroundImage}')`
        },
        children: /* @__PURE__ */ e.jsx("div", { className: "absolute inset-0 bg-black/30" })
      }
    ),
    /* @__PURE__ */ e.jsxs("div", { className: "relative z-10 text-center px-4 flex flex-col items-center", children: [
      /* @__PURE__ */ e.jsx("h2", { className: "text-white font-cinzel text-sm md:text-lg tracking-[0.3em] mb-4 font-bold", children: t.kicker }),
      /* @__PURE__ */ e.jsx("h1", { className: "text-white font-cinzel text-5xl md:text-7xl lg:text-9xl font-bold tracking-wider mb-2 drop-shadow-xl leading-tight", children: t.title }),
      /* @__PURE__ */ e.jsx("h2", { className: "text-white font-cinzel text-3xl md:text-5xl lg:text-6xl tracking-widest mb-6 drop-shadow-lg", children: t.subtitle }),
      /* @__PURE__ */ e.jsx("div", { className: "w-24 h-1 bg-brand-yellow mb-8" }),
      /* @__PURE__ */ e.jsx("p", { className: "text-white font-montserrat text-sm md:text-lg tracking-[0.2em] mb-10 max-w-2xl", children: t.description }),
      /* @__PURE__ */ e.jsx("a", { href: t.buttonUrl, className: "inline-flex items-center justify-center rounded-sm border border-brand-yellow bg-brand-yellow px-10 py-4 text-center font-montserrat text-sm font-bold tracking-[0.15em] text-brand-blue no-underline transition-all duration-300 shadow-lg transform hover:-translate-y-1 hover:bg-brand-blue hover:border-brand-blue hover:text-white hover:no-underline focus:no-underline md:text-base", children: t.buttonText })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce", children: /* @__PURE__ */ e.jsx("div", { className: "w-0.5 h-16 bg-white/50" }) })
  ] });
};
s.registerPlugin(b);
const v = () => {
  const l = i.useRef(null), [t, c] = i.useState(null);
  i.useEffect(() => {
    (async () => {
      try {
        const o = await fetch("/wp-json/wingate/v1/home-settings");
        if (o.ok) {
          const m = await o.json();
          c(m);
        }
      } catch (o) {
        console.error("Failed to fetch home settings:", o);
      }
    })();
    const r = s.context(() => {
      s.from(".anim-title-block", {
        scrollTrigger: { trigger: ".anim-title-block", start: "top 85%" },
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out"
      }), s.from(".anim-card", {
        scrollTrigger: { trigger: ".cards-container", start: "top 75%" },
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out"
      }), s.from(".anim-welcome-img", {
        scrollTrigger: { trigger: ".anim-welcome-section", start: "top 70%" },
        x: -50,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out"
      }), s.from(".anim-welcome-text", {
        scrollTrigger: { trigger: ".anim-welcome-section", start: "top 70%" },
        x: 50,
        opacity: 0,
        duration: 1.2,
        delay: 0.2,
        ease: "power3.out"
      });
    }, l);
    return () => r.revert();
  }, []);
  const d = t?.hero, x = t?.cards || [
    { title: "Join Our Club", subtitle: "Membership options & application", image: "/wp-content/uploads/2026/02/20260126_140911-scaled.jpg", url: "/membership/", buttonText: "Join Our Club" },
    { title: "Rates", subtitle: "Membership & visitor pricing", image: "/wp-content/uploads/2026/02/20260208_131606-scaled.jpg", url: "/rates/", buttonText: "View Rates" },
    { title: "Green Fees", subtitle: "Daily fees & cart hire", image: "/wp-content/uploads/2026/01/2-3.jpg", url: "/green-fees/", buttonText: "View Green Fees" }
  ], n = t?.welcome || {
    title: "Welcome to Wingate Park",
    image: "/wp-content/uploads/2026/02/20260125_134724-scaled.jpg",
    content: `Wingate Park Golf Club is an 18-hole, well-manicured, and wooded course founded 52 years ago. Located in the tranquil Pomona area of Harare, it serves as a premier destination for golfers of all levels.

Today, the club is open to all, offering a unique and challenging golfing experience with fairways lined with mature trees. The "Loyal & Ancient" bar and in-house catering provide a relaxing post-round atmosphere where members and guests can unwind.

Whether you're looking for a competitive round or a leisurely walk in the woods, Wingate Park welcomes you.`
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "w-full", ref: l, children: [
    /* @__PURE__ */ e.jsx(h, { settings: d }),
    /* @__PURE__ */ e.jsx("section", { className: "bg-brand-gray py-20 px-6 lg:px-10", children: /* @__PURE__ */ e.jsxs("div", { className: "mx-auto max-w-screen-2xl", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "mb-16 inline-block anim-title-block", children: [
        /* @__PURE__ */ e.jsxs("h2", { className: "font-cinzel text-5xl font-bold uppercase tracking-tight text-brand-blue md:text-6xl lg:text-7xl leading-none", children: [
          "Public course,",
          /* @__PURE__ */ e.jsx("br", {}),
          "private experience"
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "mt-6 h-1 w-24 bg-brand-yellow" })
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-1 gap-10 md:grid-cols-3 cards-container", children: x.map((a, r) => /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col anim-card", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "group relative h-[480px] overflow-hidden rounded-3xl border border-brand-yellow/25 shadow-[0_24px_60px_rgba(14,27,61,0.22)] mb-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_34px_80px_rgba(14,27,61,0.32)]", children: [
          /* @__PURE__ */ e.jsx(
            "div",
            {
              className: "absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110",
              style: {
                backgroundImage: `url('${a.image}')`
              }
            }
          ),
          /* @__PURE__ */ e.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" }),
          /* @__PURE__ */ e.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-brand-yellow/30 via-transparent to-brand-blue/40 opacity-70 transition-opacity duration-500 group-hover:opacity-90" }),
          /* @__PURE__ */ e.jsx("div", { className: "absolute -top-16 -right-16 h-40 w-40 rounded-full bg-brand-yellow/40 blur-3xl transition-all duration-500 group-hover:scale-110" }),
          /* @__PURE__ */ e.jsxs("div", { className: "absolute bottom-0 left-0 w-full p-10", children: [
            /* @__PURE__ */ e.jsx("h3", { className: "mb-2 font-cinzel text-4xl font-bold text-white uppercase leading-tight", children: a.title }),
            /* @__PURE__ */ e.jsx("p", { className: "font-montserrat text-xs font-bold text-white uppercase tracking-[0.2em] opacity-90", children: a.subtitle })
          ] })
        ] }),
        /* @__PURE__ */ e.jsx("a", { href: a.url, className: "inline-flex w-fit items-center justify-center rounded-sm bg-brand-blue px-10 py-4 text-center font-montserrat text-xs font-bold uppercase tracking-widest text-white no-underline transition-all duration-300 shadow-lg border border-brand-blue hover:-translate-y-1 hover:bg-brand-yellow hover:border-brand-yellow hover:text-brand-blue focus:no-underline", children: a.buttonText })
      ] }, r)) })
    ] }) }),
    /* @__PURE__ */ e.jsx("section", { className: "bg-white px-6 py-20 lg:px-10 lg:py-24 anim-welcome-section", children: /* @__PURE__ */ e.jsx("div", { className: "mx-auto max-w-screen-2xl", children: /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-1 items-start gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 xl:gap-16", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "relative mx-auto w-full max-w-[640px] lg:mx-0 anim-welcome-img", children: [
        /* @__PURE__ */ e.jsx("div", { className: "overflow-hidden rounded-2xl ring-1 ring-black/5 shadow-[0_24px_60px_rgba(14,27,61,0.16)]", children: /* @__PURE__ */ e.jsx(
          "img",
          {
            src: n.image,
            alt: "Wingate Park Golf Club",
            className: "h-[460px] w-full object-cover object-center transition-transform duration-700 hover:scale-[1.03] sm:h-[560px] lg:h-[620px] xl:h-[640px]"
          }
        ) }),
        /* @__PURE__ */ e.jsx("div", { className: "absolute -bottom-5 -right-5 -z-10 hidden h-[92%] w-[92%] rounded-2xl border border-brand-yellow/45 bg-gradient-to-br from-brand-yellow/8 to-transparent lg:block" })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "mx-auto w-full max-w-[620px] lg:mx-0 lg:pt-8 xl:pt-10 anim-welcome-text", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "inline-block mb-8", children: [
          /* @__PURE__ */ e.jsx("h2", { className: "mb-4 font-cinzel text-4xl font-bold uppercase tracking-wide text-brand-blue md:text-5xl lg:text-[3.2rem] lg:leading-[1.02]", children: n.title.split(`
`).map((a, r) => /* @__PURE__ */ e.jsxs(g.Fragment, { children: [
            a,
            r < n.title.split(`
`).length - 1 && /* @__PURE__ */ e.jsx("br", {})
          ] }, r)) }),
          /* @__PURE__ */ e.jsx("div", { className: "h-1 w-20 bg-brand-yellow" })
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "space-y-6 font-montserrat text-lg leading-[1.65] text-slate-700 whitespace-pre-wrap", children: n.content })
      ] })
    ] }) }) }),
    /* @__PURE__ */ e.jsx(u, { settings: t?.peekWindow }),
    /* @__PURE__ */ e.jsx(p, {})
  ] });
};
export {
  v as default
};
