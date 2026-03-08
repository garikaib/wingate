import { r as a, g as i, j as e } from "./main-BJ0M0hbP.js";
import { T as l } from "./trophy-CSH2zqLy.js";
import { A as s } from "./arrow-right-Di5wGnKw.js";
import { U as o } from "./users-Cl2SjkfF.js";
function h() {
  const t = a.useRef(null), [c, r] = a.useState(0);
  return a.useEffect(() => {
    (async () => {
      try {
        const d = await (await fetch("/wp-json/wingate-tools/v1/handicaps/public?gender=men")).json();
        r(Array.isArray(d?.items) ? d.items.length : 0);
      } catch {
        r(0);
      }
    })();
  }, []), a.useEffect(() => {
    const n = i.context(() => {
      i.from(".handicap-main-card", { y: 24, opacity: 0, stagger: 0.1, duration: 0.7, ease: "power3.out" });
    }, t);
    return () => n.revert();
  }, []), /* @__PURE__ */ e.jsx("div", { ref: t, className: "min-h-screen bg-brand-gray py-16", children: /* @__PURE__ */ e.jsxs("div", { className: "container mx-auto px-4", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "rounded-3xl bg-brand-blue p-10 text-white md:p-14", children: [
      /* @__PURE__ */ e.jsx("p", { className: "text-xs uppercase tracking-[0.24em] text-brand-yellow", children: "Wingate Park" }),
      /* @__PURE__ */ e.jsx("h1", { className: "mt-3 font-cinzel text-4xl md:text-6xl", children: "Handicap Hub" }),
      /* @__PURE__ */ e.jsx("p", { className: "mt-4 max-w-2xl text-white/80", children: "Access live handicap tables and keep your competition standings up to date." })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "mt-8 grid gap-5 md:grid-cols-3", children: [
      /* @__PURE__ */ e.jsxs("article", { className: "handicap-main-card rounded-2xl border border-brand-blue/10 bg-white p-7 shadow-sm", children: [
        /* @__PURE__ */ e.jsx("div", { className: "inline-flex rounded-full bg-brand-yellow/20 p-3 text-brand-blue", children: /* @__PURE__ */ e.jsx(l, { size: 22 }) }),
        /* @__PURE__ */ e.jsx("h2", { className: "mt-4 font-cinzel text-3xl text-brand-blue", children: "Men's Handicap" }),
        /* @__PURE__ */ e.jsx("p", { className: "mt-2 text-brand-blue/70", children: "Premium single-page leaderboard with export options and quick search." }),
        /* @__PURE__ */ e.jsxs("p", { className: "mt-4 text-sm font-bold uppercase tracking-[0.14em] text-brand-yellow", children: [
          c,
          " Published Players"
        ] }),
        /* @__PURE__ */ e.jsxs("a", { href: "/mens-handicap/", className: "mt-6 inline-flex items-center gap-2 rounded-sm bg-brand-blue px-5 py-3 text-xs font-bold uppercase tracking-widest text-white !no-underline hover:bg-brand-yellow hover:text-brand-blue transition-colors", children: [
          "Open Men's Handicap",
          /* @__PURE__ */ e.jsx(s, { size: 14 })
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs("article", { className: "handicap-main-card rounded-2xl border border-brand-blue/10 bg-white p-7 shadow-sm", children: [
        /* @__PURE__ */ e.jsx("div", { className: "inline-flex rounded-full bg-brand-yellow/20 p-3 text-brand-blue", children: /* @__PURE__ */ e.jsx(l, { size: 22 }) }),
        /* @__PURE__ */ e.jsx("h2", { className: "mt-4 font-cinzel text-3xl text-brand-blue", children: "Ladies Handicap" }),
        /* @__PURE__ */ e.jsx("p", { className: "mt-2 text-brand-blue/70", children: "Separate ladies leaderboard with the same featured-post and stats workflow." }),
        /* @__PURE__ */ e.jsxs("a", { href: "/ladies-handicap/", className: "mt-6 inline-flex items-center gap-2 rounded-sm bg-brand-blue px-5 py-3 text-xs font-bold uppercase tracking-widest text-white !no-underline hover:bg-brand-yellow hover:text-brand-blue transition-colors", children: [
          "Open Ladies Handicap",
          /* @__PURE__ */ e.jsx(s, { size: 14 })
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs("article", { className: "handicap-main-card rounded-2xl border border-brand-blue/10 bg-white p-7 shadow-sm", children: [
        /* @__PURE__ */ e.jsx("div", { className: "inline-flex rounded-full bg-brand-blue/10 p-3 text-brand-blue", children: /* @__PURE__ */ e.jsx(o, { size: 22 }) }),
        /* @__PURE__ */ e.jsx("h2", { className: "mt-4 font-cinzel text-3xl text-brand-blue", children: "Admin Editing" }),
        /* @__PURE__ */ e.jsx("p", { className: "mt-2 text-brand-blue/70", children: "Club admins can add, edit and publish handicap rows from the Wingate Handicap Manager." }),
        /* @__PURE__ */ e.jsxs("a", { href: "/wp-admin/admin.php?page=wingate-handicap-manager", className: "mt-6 inline-flex items-center gap-2 rounded-sm border border-brand-blue/20 px-5 py-3 text-xs font-bold uppercase tracking-widest text-brand-blue !no-underline hover:bg-brand-blue hover:text-white transition-colors", children: [
          "Open Handicap Manager",
          /* @__PURE__ */ e.jsx(s, { size: 14 })
        ] })
      ] })
    ] })
  ] }) });
}
export {
  h as default
};
