import { r as i, g as h, j as e } from "./main-C_7mdrfg.js";
import { C as $, F as z, a as R, b as U, T as E, L as M, B as I, U as B } from "./utensils-crossed-Cgs9Jz9o.js";
import { A as N } from "./arrow-right-B0YJEfOH.js";
const k = {
  breakfast: "Breakfast Menu",
  lunch: "Lunch Menu",
  dinner: "Dinner Menu",
  drinks: "Drinks Menu",
  kids: "Kids Menu"
}, g = [
  "bg-brand-yellow/20 text-brand-blue border border-brand-yellow/50",
  "bg-emerald-100 text-emerald-800 border border-emerald-300",
  "bg-amber-100 text-amber-700 border border-amber-200",
  "bg-slate-100 text-slate-700 border border-slate-300",
  "bg-red-100 text-red-700 border border-red-200"
];
function O() {
  const [b, f] = i.useState({ settings: null, menus: [], weekdayLabels: {} }), [u, j] = i.useState(!0), [S, y] = i.useState(0), d = i.useRef(null), m = i.useRef(null);
  i.useEffect(() => {
    (async () => {
      j(!0);
      try {
        const t = await fetch("/wp-json/wingate-tools/v1/kitchen/public"), s = t.ok ? await t.json() : { settings: null, menus: [], weekdayLabels: {} }, r = Array.isArray(s?.menus) ? s.menus : [];
        f({ settings: s?.settings || null, menus: r, weekdayLabels: s?.weekdayLabels || {} });
        const l = new URLSearchParams(window.location.search).get("menu"), o = l ? r.find((x) => String(x.slug) === l) : null;
        y(o?.id || r[0]?.id || 0);
      } catch {
        f({ settings: null, menus: [], weekdayLabels: {} });
      } finally {
        j(!1);
      }
    })();
  }, []), i.useEffect(() => {
    if (u || !d.current) return;
    const t = h.context(() => {
      const s = d.current.querySelector(".kitchen-hero-copy");
      s && h.fromTo(s, { y: 26, opacity: 0 }, { y: 0, opacity: 1, duration: 0.65, ease: "power2.out" });
      const r = d.current.querySelectorAll(".kitchen-menu-card");
      r.length && h.fromTo(r, { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: "power2.out", delay: 0.12 });
    }, d);
    return () => t.revert();
  }, [b.menus.length, u]);
  const n = b.settings || {}, p = b.menus || [], L = b.weekdayLabels || {}, a = p.find((t) => Number(t.id) === Number(S)) || p[0] || null, T = i.useMemo(() => {
    const t = n.openTimes || {};
    return [
      t.weekdays,
      t.friday,
      t.saturday,
      t.sunday
    ].filter(Boolean);
  }, [n.openTimes]), w = (t) => Array.isArray(t) ? t.map((s) => L[s] || s).join(", ") : "", v = async (t, s = "csv") => {
    try {
      const r = await fetch(`/wp-json/wingate-tools/v1/kitchen/menus/${t}/export?format=${encodeURIComponent(s)}`);
      if (!r.ok) return;
      const l = await r.json();
      if (s === "pdf") {
        l?.url && window.open(String(l.url), "_blank", "noopener,noreferrer");
        return;
      }
      const o = new Blob([String(l?.content || "")], { type: String(l?.mime || "text/plain;charset=utf-8") }), x = URL.createObjectURL(o), c = document.createElement("a");
      c.href = x, c.download = String(l?.fileName || "kitchen-menu.csv"), document.body.appendChild(c), c.click(), c.remove(), URL.revokeObjectURL(x);
    } catch {
    }
  }, A = (t) => {
    const s = String(t || "").trim().toLowerCase();
    if (!s) return g[0];
    const r = s.split("").reduce((l, o) => l + o.charCodeAt(0), 0);
    return g[r % g.length];
  };
  if (u)
    return /* @__PURE__ */ e.jsx("div", { className: "bg-brand-gray min-h-screen flex items-center justify-center text-brand-blue", children: "Loading Kitchen..." });
  const C = (t) => {
    y(t), window.requestAnimationFrame(() => {
      if (!m.current) return;
      const r = m.current.getBoundingClientRect().top + window.scrollY - 118;
      window.scrollTo({ top: Math.max(r, 0), behavior: "smooth" });
    });
  };
  return /* @__PURE__ */ e.jsxs("div", { ref: d, className: "bg-brand-gray min-h-screen", children: [
    /* @__PURE__ */ e.jsxs("section", { className: "relative min-h-[55vh] overflow-hidden", children: [
      /* @__PURE__ */ e.jsx("div", { className: "absolute inset-0 bg-cover bg-center", style: { backgroundImage: `url('${n.heroImageUrl || ""}')` } }),
      /* @__PURE__ */ e.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-brand-blue/92 via-brand-blue/70 to-brand-blue/55" }),
      /* @__PURE__ */ e.jsx("div", { className: "relative container mx-auto px-4 py-16 md:py-20", children: /* @__PURE__ */ e.jsxs("div", { className: "kitchen-hero-copy max-w-3xl rounded-2xl border border-white/18 bg-white/[0.05] p-6 md:p-8 backdrop-blur-sm", children: [
        /* @__PURE__ */ e.jsx("p", { className: "text-xs uppercase tracking-[0.22em] text-brand-yellow font-bold", children: "Club House" }),
        /* @__PURE__ */ e.jsx("h1", { className: "mt-3 font-cinzel text-white text-5xl md:text-6xl", children: n.heroTitle || "The Kitchen" }),
        /* @__PURE__ */ e.jsx("p", { className: "mt-4 text-white/85 text-base md:text-lg", children: n.heroSubtitle || "" })
      ] }) })
    ] }),
    /* @__PURE__ */ e.jsxs("section", { className: "container mx-auto px-4 py-10", children: [
      /* @__PURE__ */ e.jsx("div", { className: "rounded-2xl border border-brand-blue/10 bg-white p-5 md:p-7 shadow-sm mb-8", children: /* @__PURE__ */ e.jsx("p", { className: "text-brand-blue/75 text-sm md:text-base", children: n.intro || "" }) }),
      /* @__PURE__ */ e.jsx("div", { className: "grid gap-4 md:grid-cols-2 lg:grid-cols-3", children: p.map((t) => {
        const s = Number(t.id) === Number(a?.id);
        return /* @__PURE__ */ e.jsxs(
          "button",
          {
            type: "button",
            onClick: () => C(t.id),
            className: `kitchen-menu-card text-left overflow-hidden rounded-xl border ${s ? "border-brand-yellow shadow-lg" : "border-brand-blue/12 shadow-sm"} bg-white transition-all hover:-translate-y-1`,
            children: [
              /* @__PURE__ */ e.jsx("div", { className: "h-44 bg-brand-blue/10 bg-cover bg-center", style: { backgroundImage: `url('${t.menuImageUrl || n.heroImageUrl || ""}')` } }),
              /* @__PURE__ */ e.jsxs("div", { className: "p-4", children: [
                /* @__PURE__ */ e.jsx("p", { className: "text-[10px] uppercase tracking-[0.16em] text-brand-yellow font-bold", children: k[t.menuType] || "Menu" }),
                /* @__PURE__ */ e.jsx("h3", { className: "font-cinzel text-2xl text-brand-blue mt-1", children: t.title }),
                /* @__PURE__ */ e.jsxs("p", { className: "mt-1 text-xs text-brand-blue/65 uppercase tracking-[0.12em]", children: [
                  t.availableFrom,
                  " - ",
                  t.availableTo
                ] }),
                /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-[11px] text-brand-blue/60", children: w(t.availableDays) }),
                /* @__PURE__ */ e.jsx("p", { className: "mt-2 text-sm text-brand-blue/75 line-clamp-2", children: t.summary })
              ] })
            ]
          },
          t.id
        );
      }) })
    ] }),
    a ? /* @__PURE__ */ e.jsx("section", { ref: m, className: "container mx-auto px-4 pb-14", children: /* @__PURE__ */ e.jsxs("div", { className: "rounded-2xl border border-brand-blue/12 bg-white p-6 md:p-8 shadow-sm", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex flex-wrap items-start justify-between gap-4", children: [
        /* @__PURE__ */ e.jsxs("div", { children: [
          /* @__PURE__ */ e.jsx("p", { className: "text-xs uppercase tracking-[0.16em] text-brand-yellow font-bold", children: k[a.menuType] || "Menu" }),
          /* @__PURE__ */ e.jsx("h2", { className: "font-cinzel text-4xl text-brand-blue mt-1", children: a.title })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "inline-flex items-center gap-2 rounded-full bg-brand-blue/[0.06] px-4 py-2 text-sm text-brand-blue", children: [
          /* @__PURE__ */ e.jsx($, { size: 16 }),
          /* @__PURE__ */ e.jsxs("span", { children: [
            a.availableFrom,
            " - ",
            a.availableTo
          ] })
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs("p", { className: "mt-2 text-sm text-brand-blue/65", children: [
        "Available on: ",
        w(a.availableDays)
      ] }),
      /* @__PURE__ */ e.jsx("p", { className: "mt-4 text-brand-blue/75", children: a.summary }),
      /* @__PURE__ */ e.jsxs("div", { className: "mt-4 flex flex-wrap gap-2", children: [
        /* @__PURE__ */ e.jsxs(
          "button",
          {
            type: "button",
            onClick: () => v(a.id, "csv"),
            className: "inline-flex items-center gap-2 rounded-sm border border-brand-blue/30 px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] text-brand-blue transition hover:bg-brand-blue hover:text-white",
            children: [
              /* @__PURE__ */ e.jsx(z, { size: 14 }),
              "Export Excel/CSV"
            ]
          }
        ),
        /* @__PURE__ */ e.jsxs(
          "button",
          {
            type: "button",
            onClick: () => v(a.id, "pdf"),
            className: "inline-flex items-center gap-2 rounded-sm border border-brand-blue/30 px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] text-brand-blue transition hover:bg-brand-blue hover:text-white",
            children: [
              /* @__PURE__ */ e.jsx(R, { size: 14 }),
              "Download PDF"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "mt-6 space-y-3", children: (a.items || []).map((t, s) => /* @__PURE__ */ e.jsxs("article", { className: `rounded-xl border border-brand-blue/10 p-4 ${t.inStock === !1 ? "bg-red-50/70" : "bg-brand-gray/35"}`, children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
          /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsx("h3", { className: "font-cinzel text-2xl text-brand-blue", children: t.name }),
            t.tag ? /* @__PURE__ */ e.jsx("p", { className: `mt-1 inline-flex rounded-full px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] font-bold ${A(t.tag)}`, children: t.tag }) : null
          ] }),
          /* @__PURE__ */ e.jsx("p", { className: "font-cinzel text-2xl text-brand-blue", children: t.price || "-" })
        ] }),
        t.inStock === !1 ? /* @__PURE__ */ e.jsxs("div", { className: "mt-2 inline-flex items-center gap-1.5 rounded-full border border-red-300 bg-red-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-red-700", children: [
          /* @__PURE__ */ e.jsx(U, { size: 12 }),
          /* @__PURE__ */ e.jsx("span", { children: "Out of stock" })
        ] }) : null,
        t.description ? /* @__PURE__ */ e.jsx("p", { className: "text-sm text-brand-blue/75 mt-2", children: t.description }) : null,
        t.allergens?.length || t.dietary?.length ? /* @__PURE__ */ e.jsxs("div", { className: "mt-3 flex flex-wrap gap-2", children: [
          (t.allergens || []).map((r) => /* @__PURE__ */ e.jsxs("span", { className: "inline-flex items-center gap-1.5 rounded-full border border-red-200 bg-red-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-red-700", children: [
            /* @__PURE__ */ e.jsx(E, { size: 12 }),
            /* @__PURE__ */ e.jsx("span", { children: r })
          ] }, `${t.name}-a-${r}`)),
          (t.dietary || []).map((r) => /* @__PURE__ */ e.jsxs("span", { className: "inline-flex items-center gap-1.5 rounded-full border border-brand-blue/20 bg-brand-blue/[0.06] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-brand-blue", children: [
            /* @__PURE__ */ e.jsx(M, { size: 12 }),
            /* @__PURE__ */ e.jsx("span", { children: r })
          ] }, `${t.name}-d-${r}`))
        ] }) : null,
        t.inStock !== !1 && !(t.allergens?.length || t.dietary?.length) ? /* @__PURE__ */ e.jsxs("div", { className: "mt-3 inline-flex items-center gap-1.5 rounded-full border border-brand-blue/20 bg-brand-blue/[0.06] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-brand-blue", children: [
          /* @__PURE__ */ e.jsx(I, { size: 12 }),
          /* @__PURE__ */ e.jsx("span", { children: "Chef ready" })
        ] }) : null
      ] }, `${t.name}-${s}`)) })
    ] }) }) : null,
    /* @__PURE__ */ e.jsx("section", { className: "bg-brand-blue text-white", children: /* @__PURE__ */ e.jsxs("div", { className: "container mx-auto px-4 py-10 grid gap-8 md:grid-cols-3", children: [
      /* @__PURE__ */ e.jsxs("div", { children: [
        /* @__PURE__ */ e.jsx("p", { className: "text-[11px] uppercase tracking-[0.16em] text-brand-yellow font-bold", children: n.openTimesTitle || "Opening Times" }),
        /* @__PURE__ */ e.jsx("ul", { className: "mt-3 space-y-1 text-sm text-white/90", children: T.map((t, s) => /* @__PURE__ */ e.jsx("li", { children: t }, `${t}-${s}`)) })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { children: [
        /* @__PURE__ */ e.jsx("p", { className: "text-[11px] uppercase tracking-[0.16em] text-brand-yellow font-bold", children: "Kitchen Promise" }),
        /* @__PURE__ */ e.jsx("p", { className: "mt-3 text-sm text-white/90", children: "Fresh ingredients, polished service, and menu windows designed around your day at the club." })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "md:text-right", children: [
        /* @__PURE__ */ e.jsxs("a", { href: n.bookingUrl || "/booking/", className: "inline-flex items-center gap-2 rounded-sm bg-brand-yellow px-6 py-3 text-xs font-bold uppercase tracking-widest text-brand-blue !no-underline hover:bg-white transition-colors", children: [
          /* @__PURE__ */ e.jsx(B, { size: 14 }),
          /* @__PURE__ */ e.jsx("span", { children: n.bookingLabel || "Book A Table" }),
          /* @__PURE__ */ e.jsx(N, { size: 14 })
        ] }),
        n.whatsAppEnabled && n.whatsAppNumber ? /* @__PURE__ */ e.jsxs(
          "a",
          {
            href: `https://wa.me/${String(n.whatsAppNumber).replace(/\D/g, "")}?text=${encodeURIComponent(n.whatsAppMessage || "Hello Wingate Kitchen, I would like to reserve a table.")}`,
            className: "ml-0 mt-2 inline-flex items-center gap-2 rounded-sm border border-white/45 px-6 py-3 text-xs font-bold uppercase tracking-widest text-white !no-underline transition-colors hover:bg-white hover:text-brand-blue md:ml-2",
            target: "_blank",
            rel: "noreferrer",
            children: [
              /* @__PURE__ */ e.jsx("span", { children: n.whatsAppLabel || "WhatsApp Reservations" }),
              /* @__PURE__ */ e.jsx(N, { size: 14 })
            ]
          }
        ) : null
      ] })
    ] }) })
  ] });
}
export {
  O as default
};
