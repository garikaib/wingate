import { r, g as n, j as e, S as y } from "./main-C4Y7UEwf.mjs";
import { A as c } from "./arrow-right-BFRn8j9h.mjs";
import { U as v } from "./users-DHLAvsBm.mjs";
import { c as w } from "./createLucideIcon-BXI0vGFy.mjs";
const j = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }],
  ["path", { d: "M8 14h.01", key: "6423bh" }],
  ["path", { d: "M12 14h.01", key: "1etili" }],
  ["path", { d: "M16 14h.01", key: "1gbofw" }],
  ["path", { d: "M8 18h.01", key: "lrp35t" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }],
  ["path", { d: "M16 18h.01", key: "kzsmim" }]
], N = w("calendar-days", j);
n.registerPlugin(y);
function z({ gender: d = "men", title: m = "Men's Handicap", oppositeUrl: u = "/ladies-handicap/" }) {
  const l = r.useRef(null), [s, p] = r.useState([]), [i, x] = r.useState(!0);
  r.useEffect(() => {
    (async () => {
      x(!0);
      try {
        const o = await (await fetch(`/wp-json/wingate-tools/v1/handicaps/public?gender=${d}`)).json();
        p(Array.isArray(o?.items) ? o.items : []);
      } catch {
        p([]);
      } finally {
        x(!1);
      }
    })();
  }, [d]), r.useEffect(() => {
    const a = n.context(() => {
      n.timeline().from(".handicap-land-kicker", { y: 18, opacity: 0, duration: 0.5, ease: "power2.out" }).from(".handicap-land-title", { y: 28, opacity: 0, duration: 0.75, ease: "power3.out" }, "-=0.15").from(".handicap-land-sub", { y: 18, opacity: 0, duration: 0.55, ease: "power2.out" }, "-=0.3");
      const b = l.current?.querySelector(".handicap-featured-card");
      b && n.fromTo(
        b,
        { y: 32, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.7,
          ease: "power2.out",
          delay: 0.08,
          clearProps: "transform,opacity,visibility"
        }
      );
      const h = l.current?.querySelectorAll(".handicap-land-card");
      h?.length && n.fromTo(
        h,
        { y: 18, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.55,
          stagger: 0.08,
          ease: "power2.out",
          delay: 0.12,
          clearProps: "transform,opacity,visibility"
        }
      );
    }, l);
    return () => a.revert();
  }, [s.length, i]);
  const t = s[0] || null, g = r.useMemo(() => s.slice(1), [s]), f = d === "men" ? "Ladies' Handicap" : "Men's Handicap";
  return /* @__PURE__ */ e.jsxs("div", { ref: l, className: "min-h-screen bg-brand-gray pb-16", children: [
    /* @__PURE__ */ e.jsxs("section", { className: "relative overflow-hidden bg-brand-blue text-white", children: [
      /* @__PURE__ */ e.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,204,0,0.12),transparent_38%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.08),transparent_32%)]" }),
      /* @__PURE__ */ e.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-brand-blue via-brand-blue to-[#122a66]" }),
      /* @__PURE__ */ e.jsx("div", { className: "absolute left-0 top-0 h-full w-full opacity-[0.08]", style: { backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "32px 32px" } }),
      /* @__PURE__ */ e.jsx("div", { className: "relative container mx-auto px-4 py-20 md:py-24", children: /* @__PURE__ */ e.jsxs("div", { className: "max-w-4xl rounded-2xl border border-white/18 bg-white/[0.04] p-7 shadow-2xl backdrop-blur-sm md:p-10", children: [
        /* @__PURE__ */ e.jsx("p", { className: "handicap-land-kicker text-xs uppercase tracking-[0.24em] text-brand-yellow font-bold", children: "Wingate Leaderboards" }),
        /* @__PURE__ */ e.jsx("h1", { className: "handicap-land-title mt-4 font-cinzel text-white text-5xl leading-tight md:text-7xl", children: m }),
        /* @__PURE__ */ e.jsx("p", { className: "handicap-land-sub mt-4 max-w-3xl text-white/85 text-lg", children: "Latest published handicap boards with full season and event stats." }),
        /* @__PURE__ */ e.jsxs(
          "a",
          {
            href: u,
            className: "handicap-land-switch group mt-7 inline-flex items-center gap-2 rounded-sm border-2 border-white bg-white/8 px-6 py-3 text-xs font-bold uppercase tracking-widest text-white !no-underline transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-yellow hover:bg-brand-yellow hover:text-brand-blue hover:shadow-[0_14px_30px_-16px_rgba(255,204,0,0.8)]",
            style: {
              display: "inline-flex",
              color: "#ffffff",
              borderColor: "#ffffff",
              backgroundColor: "rgba(255,255,255,0.08)",
              textDecoration: "none"
            },
            children: [
              /* @__PURE__ */ e.jsxs("span", { className: "text-white transition-colors duration-300 group-hover:text-brand-blue", children: [
                "Open ",
                f
              ] }),
              /* @__PURE__ */ e.jsx(c, { size: 14, className: "text-white transition-all duration-300 group-hover:translate-x-1 group-hover:text-brand-blue" })
            ]
          }
        )
      ] }) })
    ] }),
    /* @__PURE__ */ e.jsxs("section", { className: "container mx-auto px-4 py-10 md:py-12", children: [
      t ? /* @__PURE__ */ e.jsxs("a", { href: t.permalink, className: "handicap-featured-card grid overflow-hidden rounded-3xl border border-brand-blue/10 bg-white shadow-lg !no-underline md:grid-cols-[1.25fr_1fr]", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "relative min-h-[320px] md:min-h-[420px] bg-brand-blue/10 bg-cover bg-center", style: { backgroundImage: `url('${t.heroImageUrl || t.featuredImageUrl || ""}')` }, children: [
          /* @__PURE__ */ e.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" }),
          /* @__PURE__ */ e.jsx("span", { className: "absolute left-5 top-5 inline-flex rounded-full bg-brand-yellow px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-brand-blue", children: "Featured" })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "p-7 md:p-10 flex flex-col justify-center", children: [
          /* @__PURE__ */ e.jsx("p", { className: "text-xs font-bold uppercase tracking-[0.16em] text-brand-yellow", children: "Latest Handicap" }),
          /* @__PURE__ */ e.jsx("h2", { className: "mt-3 font-cinzel text-4xl leading-tight text-brand-blue md:text-5xl", children: t.title }),
          /* @__PURE__ */ e.jsxs("p", { className: "mt-3 text-sm text-brand-blue/70 uppercase tracking-[0.12em]", children: [
            t.seasonLabel || "Season board",
            " ",
            t.eventName ? `• ${t.eventName}` : ""
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "mt-5 flex flex-wrap gap-4 text-sm text-brand-blue/85", children: [
            /* @__PURE__ */ e.jsxs("span", { className: "inline-flex items-center gap-2 rounded-md border border-brand-blue/10 bg-brand-blue/[0.03] px-3 py-2", children: [
              /* @__PURE__ */ e.jsx(v, { size: 15 }),
              t.seasonStats?.totalPlayers || 0,
              " Players"
            ] }),
            /* @__PURE__ */ e.jsxs("span", { className: "inline-flex items-center gap-2 rounded-md border border-brand-blue/10 bg-brand-blue/[0.03] px-3 py-2", children: [
              /* @__PURE__ */ e.jsx(N, { size: 15 }),
              t.eventDate || "Date TBD"
            ] })
          ] }),
          /* @__PURE__ */ e.jsxs("span", { className: "mt-8 inline-flex items-center gap-2 self-start rounded-sm bg-brand-blue px-6 py-3 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-brand-yellow hover:text-brand-blue", children: [
            "View Handicap",
            /* @__PURE__ */ e.jsx(c, { size: 14 })
          ] })
        ] })
      ] }) : null,
      /* @__PURE__ */ e.jsxs("div", { className: "mt-10", children: [
        /* @__PURE__ */ e.jsx("h3", { className: "font-cinzel text-3xl text-brand-blue", children: "Other Handicap Boards" }),
        i ? /* @__PURE__ */ e.jsx("p", { className: "mt-3 text-sm text-brand-blue/70", children: "Loading handicap boards..." }) : null,
        !i && !s.length ? /* @__PURE__ */ e.jsx("p", { className: "mt-3 text-sm text-brand-blue/70", children: "No handicap boards published yet." }) : null,
        /* @__PURE__ */ e.jsx("div", { className: "handicap-board-grid mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3", children: g.map((a) => /* @__PURE__ */ e.jsxs(
          "a",
          {
            href: a.permalink,
            className: "handicap-land-card group relative overflow-hidden rounded-xl border border-brand-blue/12 bg-white p-5 shadow-sm !no-underline transition-all duration-300 hover:-translate-y-1 hover:border-brand-yellow/60 hover:shadow-lg",
            children: [
              /* @__PURE__ */ e.jsx("div", { className: "absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-yellow/70 to-brand-blue/70 opacity-70 group-hover:opacity-100 transition-opacity" }),
              /* @__PURE__ */ e.jsx("p", { className: "text-[10px] uppercase tracking-[0.16em] text-brand-blue/50", children: a.seasonLabel || "Season Board" }),
              /* @__PURE__ */ e.jsx("h4", { className: "mt-2 font-cinzel text-2xl !text-brand-blue group-hover:!text-brand-blue", children: a.title }),
              /* @__PURE__ */ e.jsx("p", { className: "mt-2 text-xs uppercase tracking-[0.14em] text-brand-blue/60", children: a.eventName || "Event Update" }),
              /* @__PURE__ */ e.jsxs("p", { className: "mt-3 text-sm text-brand-blue/70", children: [
                a.seasonStats?.totalPlayers || 0,
                " players • Avg index ",
                a.seasonStats?.averageIndex || 0
              ] }),
              /* @__PURE__ */ e.jsxs("span", { className: "mt-3 inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-[0.16em] text-brand-blue/60 group-hover:text-brand-blue transition-colors", children: [
                "Open Board",
                /* @__PURE__ */ e.jsx(c, { size: 12, className: "group-hover:translate-x-1 transition-transform" })
              ] })
            ]
          },
          a.id
        )) })
      ] })
    ] })
  ] });
}
export {
  z as H
};
