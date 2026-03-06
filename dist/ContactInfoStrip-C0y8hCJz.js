import { j as e } from "./main-C_7mdrfg.js";
const l = "/wp-content/uploads/2026/02/20251127_102423-scaled.jpg", d = ({ settings: t }) => {
  const s = t?.image || l;
  return /* @__PURE__ */ e.jsx("section", { className: "bg-[#efeee8] py-12 md:py-16", children: /* @__PURE__ */ e.jsxs("div", { className: "relative mx-auto h-[220px] w-full overflow-hidden md:h-[260px]", children: [
    /* @__PURE__ */ e.jsx(
      "div",
      {
        className: "absolute inset-0 bg-cover bg-center bg-fixed",
        style: { backgroundImage: `url('${s}')` }
      }
    ),
    /* @__PURE__ */ e.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-brand-blue/18 via-transparent to-brand-blue/18" }),
    /* @__PURE__ */ e.jsx("div", { className: "absolute inset-0 ring-1 ring-black/8" })
  ] }) });
}, a = "#", n = (t) => {
  if (typeof t != "string")
    return a;
  const s = t.trim();
  return s === "" ? a : s;
}, r = () => {
  const t = typeof window < "u" && window.wingateThemeData?.contactDetails ? window.wingateThemeData.contactDetails : {};
  return {
    email: n(t.email),
    phone: n(t.phone),
    facebook: n(t.facebook),
    instagram: n(t.instagram)
  };
}, o = (t) => t === a ? a : `mailto:${t}`, i = (t) => t === a ? a : `tel:${t.replace(/\s+/g, "")}`, m = (t) => t === a ? {} : { target: "_blank", rel: "noreferrer" }, x = () => {
  const t = r();
  return /* @__PURE__ */ e.jsx("section", { className: "bg-[#efeee8] px-6 py-14 lg:px-10 lg:py-16", children: /* @__PURE__ */ e.jsx("div", { className: "mx-auto max-w-screen-2xl", children: /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-1 gap-10 text-center md:grid-cols-3 md:gap-8", children: [
    /* @__PURE__ */ e.jsxs("div", { children: [
      /* @__PURE__ */ e.jsx("h3", { className: "font-cinzel text-4xl font-bold uppercase tracking-wide text-brand-blue md:text-3xl", children: "Contact Us" }),
      /* @__PURE__ */ e.jsx("div", { className: "mx-auto mt-4 mb-5 h-1 w-20 bg-brand-yellow/80" }),
      /* @__PURE__ */ e.jsxs("p", { className: "font-montserrat text-lg text-brand-blue", children: [
        "Email:",
        " ",
        /* @__PURE__ */ e.jsx(
          "a",
          {
            href: o(t.email),
            className: "text-[#a67c37] transition-colors hover:text-brand-blue",
            children: t.email
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { children: [
      /* @__PURE__ */ e.jsx("h3", { className: "font-cinzel text-4xl font-bold uppercase tracking-wide text-brand-blue md:text-3xl", children: "Call Us" }),
      /* @__PURE__ */ e.jsx("div", { className: "mx-auto mt-4 mb-5 h-1 w-20 bg-brand-yellow/80" }),
      /* @__PURE__ */ e.jsx("p", { className: "font-montserrat text-lg text-brand-blue", children: /* @__PURE__ */ e.jsx("a", { href: i(t.phone), className: "transition-colors hover:text-brand-yellow", children: t.phone }) })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { children: [
      /* @__PURE__ */ e.jsx("h3", { className: "font-cinzel text-4xl font-bold uppercase tracking-wide text-brand-blue md:text-3xl", children: "Visit Us" }),
      /* @__PURE__ */ e.jsx("div", { className: "mx-auto mt-4 mb-5 h-1 w-20 bg-brand-yellow/80" }),
      /* @__PURE__ */ e.jsxs(
        "a",
        {
          href: "https://maps.google.com/?q=Wingate+Park+Golf+Club+Alpes+Road+Harare",
          target: "_blank",
          rel: "noreferrer",
          className: "font-montserrat text-lg text-brand-blue transition-colors hover:text-brand-yellow",
          children: [
            "Alpes Road, Pomona",
            /* @__PURE__ */ e.jsx("br", {}),
            "Harare, Zimbabwe"
          ]
        }
      )
    ] })
  ] }) }) });
};
export {
  x as C,
  d as P,
  i as a,
  m as b,
  r as g,
  o as t
};
