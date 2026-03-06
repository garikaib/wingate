import { r as i, g as h, j as e } from "./main-C_7mdrfg.js";
import { C as $, F as z, a as R, b as E, T as U, L as B, B as I, U as M } from "./utensils-crossed-Cgs9Jz9o.js";
import { A as N } from "./arrow-right-B0YJEfOH.js";
const k = {
  whisky: "Whisky Collection",
  cocktails: "Cocktail Signatures",
  wines: "Wine List",
  beers: "Craft Beers",
  spirits: "Premium Spirits",
  mocktails: "Zero-Proof & Mocktails"
}, g = [
  "bg-brand-yellow/20 text-brand-blue border border-brand-yellow/50",
  "bg-emerald-100 text-emerald-800 border border-emerald-300",
  "bg-amber-100 text-amber-700 border border-amber-200",
  "bg-slate-100 text-slate-700 border border-slate-300",
  "bg-red-100 text-red-700 border border-red-200"
];
function O() {
  const [b, f] = i.useState({ settings: null, menus: [], weekdayLabels: {} }), [m, y] = i.useState(!0), [S, j] = i.useState(0), o = i.useRef(null), u = i.useRef(null);
  i.useEffect(() => {
    (async () => {
      y(!0);
      try {
        const t = await fetch("/wp-json/wingate-tools/v1/bar/public"), r = t.ok ? await t.json() : { settings: null, menus: [], weekdayLabels: {} }, s = Array.isArray(r?.menus) ? r.menus : [];
        f({ settings: r?.settings || null, menus: s, weekdayLabels: r?.weekdayLabels || {} });
        const l = new URLSearchParams(window.location.search).get("menu"), d = l ? s.find((x) => String(x.slug) === l) : null;
        j(d?.id || s[0]?.id || 0);
      } catch {
        f({ settings: null, menus: [], weekdayLabels: {} });
      } finally {
        y(!1);
      }
    })();
  }, []), i.useEffect(() => {
    if (m || !o.current) return;
    const t = h.context(() => {
      const r = o.current.querySelector(".bar-hero-copy");
      r && h.fromTo(r, { y: 26, opacity: 0 }, { y: 0, opacity: 1, duration: 0.65, ease: "power2.out" });
      const s = o.current.querySelectorAll(".bar-menu-card");
      s.length && h.fromTo(s, { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: "power2.out", delay: 0.12 });
    }, o);
    return () => t.revert();
  }, [b.menus.length, m]);
  const a = b.settings || {}, p = b.menus || [], L = b.weekdayLabels || {}, n = p.find((t) => Number(t.id) === Number(S)) || p[0] || null, A = i.useMemo(() => {
    const t = a.openTimes || {};
    return [
      t.weekdays,
      t.friday,
      t.saturday,
      t.sunday
    ].filter(Boolean);
  }, [a.openTimes]), w = (t) => Array.isArray(t) ? t.map((r) => L[r] || r).join(", ") : "", v = async (t, r = "csv") => {
    try {
      const s = await fetch(`/wp-json/wingate-tools/v1/bar/menus/${t}/export?format=${encodeURIComponent(r)}`);
      if (!s.ok) return;
      const l = await s.json();
      if (r === "pdf") {
        l?.url && window.open(String(l.url), "_blank", "noopener,noreferrer");
        return;
      }
      const d = new Blob([String(l?.content || "")], { type: String(l?.mime || "text/plain;charset=utf-8") }), x = URL.createObjectURL(d), c = document.createElement("a");
      c.href = x, c.download = String(l?.fileName || "bar-menu.csv"), document.body.appendChild(c), c.click(), c.remove(), URL.revokeObjectURL(x);
    } catch {
    }
  }, C = (t) => {
    const r = String(t || "").trim().toLowerCase();
    if (!r) return g[0];
    const s = r.split("").reduce((l, d) => l + d.charCodeAt(0), 0);
    return g[s % g.length];
  };
  if (m)
    return /* @__PURE__ */ e.jsx("div", { className: "bg-brand-gray min-h-screen flex items-center justify-center text-brand-blue", children: "Loading Bar..." });
  const T = (t) => {
    j(t), window.requestAnimationFrame(() => {
      if (!u.current) return;
      const s = u.current.getBoundingClientRect().top + window.scrollY - 118;
      window.scrollTo({ top: Math.max(s, 0), behavior: "smooth" });
    });
  };
  return /* @__PURE__ */ e.jsxs("div", { ref: o, className: "bg-brand-gray min-h-screen", children: [
    /* @__PURE__ */ e.jsxs("section", { className: "relative min-h-[55vh] overflow-hidden", children: [
      /* @__PURE__ */ e.jsx("div", { className: "absolute inset-0 bg-cover bg-center", style: { backgroundImage: `url('${a.heroImageUrl || ""}')` } }),
      /* @__PURE__ */ e.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-brand-blue/92 via-brand-blue/70 to-brand-blue/55" }),
      /* @__PURE__ */ e.jsx("div", { className: "relative container mx-auto px-4 py-16 md:py-20", children: /* @__PURE__ */ e.jsxs("div", { className: "bar-hero-copy max-w-3xl rounded-2xl border border-white/18 bg-white/[0.05] p-6 md:p-8 backdrop-blur-sm", children: [
        /* @__PURE__ */ e.jsx("p", { className: "text-xs uppercase tracking-[0.22em] text-brand-yellow font-bold", children: "Club House Bar" }),
        /* @__PURE__ */ e.jsx("h1", { className: "mt-3 font-cinzel text-white text-5xl md:text-6xl", children: a.heroTitle || "The Loyal / Ancient" }),
        /* @__PURE__ */ e.jsx("p", { className: "mt-4 text-white/85 text-base md:text-lg", children: a.heroSubtitle || "" })
      ] }) })
    ] }),
    /* @__PURE__ */ e.jsxs("section", { className: "container mx-auto px-4 py-10", children: [
      /* @__PURE__ */ e.jsx("div", { className: "rounded-2xl border border-brand-blue/10 bg-white p-5 md:p-7 shadow-sm mb-8", children: /* @__PURE__ */ e.jsx("p", { className: "text-brand-blue/75 text-sm md:text-base", children: a.intro || "" }) }),
      /* @__PURE__ */ e.jsx("div", { className: "grid gap-4 md:grid-cols-2 lg:grid-cols-3", children: p.map((t) => {
        const r = Number(t.id) === Number(n?.id);
        return /* @__PURE__ */ e.jsxs(
          "button",
          {
            type: "button",
            onClick: () => T(t.id),
            className: `bar-menu-card text-left overflow-hidden rounded-xl border ${r ? "border-brand-yellow shadow-lg" : "border-brand-blue/12 shadow-sm"} bg-white transition-all hover:-translate-y-1`,
            children: [
              /* @__PURE__ */ e.jsx("div", { className: "h-44 bg-brand-blue/10 bg-cover bg-center", style: { backgroundImage: `url('${t.menuImageUrl || a.heroImageUrl || ""}')` } }),
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
    n ? /* @__PURE__ */ e.jsx("section", { ref: u, className: "container mx-auto px-4 pb-14", children: /* @__PURE__ */ e.jsxs("div", { className: "rounded-2xl border border-brand-blue/12 bg-white p-6 md:p-8 shadow-sm", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex flex-wrap items-start justify-between gap-4", children: [
        /* @__PURE__ */ e.jsxs("div", { children: [
          /* @__PURE__ */ e.jsx("p", { className: "text-xs uppercase tracking-[0.16em] text-brand-yellow font-bold", children: k[n.menuType] || "Menu" }),
          /* @__PURE__ */ e.jsx("h2", { className: "font-cinzel text-4xl text-brand-blue mt-1", children: n.title })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "inline-flex items-center gap-2 rounded-full bg-brand-blue/[0.06] px-4 py-2 text-sm text-brand-blue", children: [
          /* @__PURE__ */ e.jsx($, { size: 16 }),
          /* @__PURE__ */ e.jsxs("span", { children: [
            n.availableFrom,
            " - ",
            n.availableTo
          ] })
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs("p", { className: "mt-2 text-sm text-brand-blue/65", children: [
        "Available on: ",
        w(n.availableDays)
      ] }),
      /* @__PURE__ */ e.jsx("p", { className: "mt-4 text-brand-blue/75", children: n.summary }),
      /* @__PURE__ */ e.jsxs("div", { className: "mt-4 flex flex-wrap gap-2", children: [
        /* @__PURE__ */ e.jsxs(
          "button",
          {
            type: "button",
            onClick: () => v(n.id, "csv"),
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
            onClick: () => v(n.id, "pdf"),
            className: "inline-flex items-center gap-2 rounded-sm border border-brand-blue/30 px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] text-brand-blue transition hover:bg-brand-blue hover:text-white",
            children: [
              /* @__PURE__ */ e.jsx(R, { size: 14 }),
              "Download PDF"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "mt-6 space-y-3", children: (n.items || []).map((t, r) => /* @__PURE__ */ e.jsxs("article", { className: `rounded-xl border border-brand-blue/10 p-4 ${t.inStock === !1 ? "bg-red-50/70" : "bg-brand-gray/35"}`, children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
          /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsx("h3", { className: "font-cinzel text-2xl text-brand-blue", children: t.name }),
            t.tag ? /* @__PURE__ */ e.jsx("p", { className: `mt-1 inline-flex rounded-full px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] font-bold ${C(t.tag)}`, children: t.tag }) : null
          ] }),
          /* @__PURE__ */ e.jsx("p", { className: "font-cinzel text-2xl text-brand-blue", children: t.price || "-" })
        ] }),
        t.inStock === !1 ? /* @__PURE__ */ e.jsxs("div", { className: "mt-2 inline-flex items-center gap-1.5 rounded-full border border-red-300 bg-red-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-red-700", children: [
          /* @__PURE__ */ e.jsx(E, { size: 12 }),
          /* @__PURE__ */ e.jsx("span", { children: "Out of stock" })
        ] }) : null,
        t.description ? /* @__PURE__ */ e.jsx("p", { className: "text-sm text-brand-blue/75 mt-2", children: t.description }) : null,
        t.allergens?.length || t.dietary?.length ? /* @__PURE__ */ e.jsxs("div", { className: "mt-3 flex flex-wrap gap-2", children: [
          (t.allergens || []).map((s) => /* @__PURE__ */ e.jsxs("span", { className: "inline-flex items-center gap-1.5 rounded-full border border-red-200 bg-red-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-red-700", children: [
            /* @__PURE__ */ e.jsx(U, { size: 12 }),
            /* @__PURE__ */ e.jsx("span", { children: s })
          ] }, `${t.name}-a-${s}`)),
          (t.dietary || []).map((s) => /* @__PURE__ */ e.jsxs("span", { className: "inline-flex items-center gap-1.5 rounded-full border border-brand-blue/20 bg-brand-blue/[0.06] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-brand-blue", children: [
            /* @__PURE__ */ e.jsx(B, { size: 12 }),
            /* @__PURE__ */ e.jsx("span", { children: s })
          ] }, `${t.name}-d-${s}`))
        ] }) : null,
        t.inStock !== !1 && !(t.allergens?.length || t.dietary?.length) ? /* @__PURE__ */ e.jsxs("div", { className: "mt-3 inline-flex items-center gap-1.5 rounded-full border border-brand-blue/20 bg-brand-blue/[0.06] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-brand-blue", children: [
          /* @__PURE__ */ e.jsx(I, { size: 12 }),
          /* @__PURE__ */ e.jsx("span", { children: "Chef ready" })
        ] }) : null
      ] }, `${t.name}-${r}`)) })
    ] }) }) : null,
    /* @__PURE__ */ e.jsx("section", { className: "bg-brand-blue text-white", children: /* @__PURE__ */ e.jsxs("div", { className: "container mx-auto px-4 py-10 grid gap-8 md:grid-cols-3", children: [
      /* @__PURE__ */ e.jsxs("div", { children: [
        /* @__PURE__ */ e.jsx("p", { className: "text-[11px] uppercase tracking-[0.16em] text-brand-yellow font-bold", children: a.openTimesTitle || "Bar Hours" }),
        /* @__PURE__ */ e.jsx("ul", { className: "mt-3 space-y-1 text-sm text-white/90", children: A.map((t, r) => /* @__PURE__ */ e.jsx("li", { children: t }, `${t}-${r}`)) })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { children: [
        /* @__PURE__ */ e.jsx("p", { className: "text-[11px] uppercase tracking-[0.16em] text-brand-yellow font-bold", children: "Loyal & Ancient Experience" }),
        /* @__PURE__ */ e.jsx("p", { className: "mt-3 text-sm text-white/90", children: "Classic pours, curated cocktail service, and a premium social setting for members and guests." })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "md:text-right", children: [
        /* @__PURE__ */ e.jsxs("a", { href: a.bookingUrl || "/booking/", className: "inline-flex items-center gap-2 rounded-sm bg-brand-yellow px-6 py-3 text-xs font-bold uppercase tracking-widest text-brand-blue !no-underline hover:bg-white transition-colors", children: [
          /* @__PURE__ */ e.jsx(M, { size: 14 }),
          /* @__PURE__ */ e.jsx("span", { children: a.bookingLabel || "Reserve Bar Table" }),
          /* @__PURE__ */ e.jsx(N, { size: 14 })
        ] }),
        a.whatsAppEnabled && a.whatsAppNumber ? /* @__PURE__ */ e.jsxs(
          "a",
          {
            href: `https://wa.me/${String(a.whatsAppNumber).replace(/\D/g, "")}?text=${encodeURIComponent(a.whatsAppMessage || "Hello Loyal & Ancient team, I would like to reserve a table.")}`,
            className: "ml-0 mt-2 inline-flex items-center gap-2 rounded-sm border border-white/45 px-6 py-3 text-xs font-bold uppercase tracking-widest text-white !no-underline transition-colors hover:bg-white hover:text-brand-blue md:ml-2",
            target: "_blank",
            rel: "noreferrer",
            children: [
              /* @__PURE__ */ e.jsx("span", { children: a.whatsAppLabel || "WhatsApp Bar" }),
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
