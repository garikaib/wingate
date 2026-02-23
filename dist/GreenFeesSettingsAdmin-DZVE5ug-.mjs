import { r as u, j as e } from "./main-C4Y7UEwf.mjs";
import { M as T } from "./MediaPicker-DcG7_P1U.mjs";
const o = "bg-white p-6 md:p-8 rounded-[2rem] shadow-xl border border-gray-100", d = "mb-6 pb-5 border-b border-gray-100", x = "text-2xl md:text-3xl font-cinzel font-bold uppercase tracking-wide text-brand-blue", g = "text-sm text-gray-500 font-montserrat mt-2", l = "block text-[11px] font-bold tracking-[0.16em] uppercase text-gray-600 mb-2", r = "w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50/70 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition", j = "px-3 py-2 rounded-lg text-[11px] font-bold uppercase tracking-wider transition-colors", F = () => {
  const [n, h] = u.useState(null), [_, f] = u.useState(!0), [N, w] = u.useState(!1), [v, p] = u.useState({ text: "", type: "" }), C = window.wingateAdminData?.root || "/wp-json/", E = window.wingateAdminData?.nonce || "";
  u.useEffect(() => {
    I();
  }, []);
  const I = async () => {
    f(!0);
    try {
      const s = await fetch(`${C}wingate/v1/green-fees-settings`);
      if (!s.ok) throw new Error("Failed to fetch settings");
      const t = await s.json();
      h(t);
    } catch (s) {
      p({ text: "Error loading settings: " + s.message, type: "error" });
    } finally {
      f(!1);
    }
  }, A = async (s) => {
    s.preventDefault(), w(!0), p({ text: "", type: "" });
    try {
      if (!(await fetch(`${C}wingate/v1/green-fees-settings`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-WP-Nonce": E
        },
        body: JSON.stringify(n)
      })).ok) throw new Error("Failed to save settings");
      p({ text: "Green Fees settings saved.", type: "success" });
    } catch (t) {
      p({ text: "Error saving settings: " + t.message, type: "error" });
    } finally {
      w(!1);
    }
  }, i = (s, t, a) => {
    h((m) => ({
      ...m,
      [s]: {
        ...m[s],
        [t]: a
      }
    }));
  }, c = (s, t, a, m) => {
    h((b) => {
      const y = [...b[s]];
      return y[t] = { ...y[t], [a]: m }, { ...b, [s]: y };
    });
  }, S = (s, t) => {
    h((a) => ({ ...a, [s]: [...a[s], t] }));
  }, k = (s, t) => {
    h((a) => ({ ...a, [s]: a[s].filter((m, b) => b !== t) }));
  }, H = n?.etiquette?.items?.join(`
`) || "";
  return _ ? /* @__PURE__ */ e.jsx("div", { className: "p-8", children: /* @__PURE__ */ e.jsx("p", { className: "animate-pulse text-gray-500 font-montserrat uppercase tracking-widest text-sm", children: "Loading settings..." }) }) : /* @__PURE__ */ e.jsxs("div", { className: "wingate-admin-spa max-w-7xl mx-auto p-4 md:p-8 text-brand-blue", children: [
    /* @__PURE__ */ e.jsxs("header", { className: "mb-8 md:mb-10", children: [
      /* @__PURE__ */ e.jsx("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/5 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-blue mb-4", children: "Wingate Admin" }),
      /* @__PURE__ */ e.jsxs("h1", { className: "text-4xl md:text-5xl font-cinzel font-bold uppercase leading-none tracking-tight mb-3", children: [
        "Green Fees ",
        /* @__PURE__ */ e.jsx("span", { className: "text-brand-yellow", children: "Settings" })
      ] }),
      /* @__PURE__ */ e.jsx("p", { className: "text-sm md:text-base text-gray-600 max-w-3xl", children: "Edit the content used on the Green Fees page, including rates tables, booking contacts, and etiquette details." })
    ] }),
    v.text && /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `mb-8 px-5 py-4 rounded-2xl border text-sm font-medium ${v.type === "error" ? "bg-red-50 border-red-200 text-red-700" : "bg-green-50 border-green-200 text-green-700"}`,
        children: v.text
      }
    ),
    /* @__PURE__ */ e.jsxs("form", { onSubmit: A, className: "space-y-8 md:space-y-10", children: [
      /* @__PURE__ */ e.jsxs("section", { className: o, children: [
        /* @__PURE__ */ e.jsxs("div", { className: d, children: [
          /* @__PURE__ */ e.jsx("h2", { className: x, children: "Hero" }),
          /* @__PURE__ */ e.jsx("p", { className: g, children: "Top banner copy and background image." })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-1 xl:grid-cols-[1fr_360px] gap-8", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("label", { className: l, children: "Kicker" }),
              /* @__PURE__ */ e.jsx("input", { className: r, type: "text", value: n.hero.kicker, onChange: (s) => i("hero", "kicker", s.target.value) })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("label", { className: l, children: "Title" }),
                /* @__PURE__ */ e.jsx("input", { className: r, type: "text", value: n.hero.title, onChange: (s) => i("hero", "title", s.target.value) })
              ] }),
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("label", { className: l, children: "Title Highlight" }),
                /* @__PURE__ */ e.jsx("input", { className: r, type: "text", value: n.hero.titleHighlight, onChange: (s) => i("hero", "titleHighlight", s.target.value) })
              ] })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("label", { className: l, children: "Subtitle" }),
              /* @__PURE__ */ e.jsx("input", { className: r, type: "text", value: n.hero.subtitle, onChange: (s) => i("hero", "subtitle", s.target.value) })
            ] })
          ] }),
          /* @__PURE__ */ e.jsx(T, { label: "Hero Background Image", value: n.hero.backgroundImage, onSelect: (s) => i("hero", "backgroundImage", s) })
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs("section", { className: o, children: [
        /* @__PURE__ */ e.jsxs("div", { className: d, children: [
          /* @__PURE__ */ e.jsx("h2", { className: x, children: "Intro" }),
          /* @__PURE__ */ e.jsx("p", { className: g, children: "Short intro paragraph below hero." })
        ] }),
        /* @__PURE__ */ e.jsx("label", { className: l, children: "Intro Content" }),
        /* @__PURE__ */ e.jsx(
          "textarea",
          {
            className: `${r} min-h-[140px]`,
            value: n.intro.content,
            onChange: (s) => i("intro", "content", s.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ e.jsxs("section", { className: o, children: [
        /* @__PURE__ */ e.jsxs("div", { className: `${d} flex items-center justify-between gap-4`, children: [
          /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsx("h2", { className: x, children: "Green Fees Table" }),
            /* @__PURE__ */ e.jsx("p", { className: g, children: "Rows for green fee categories and prices." })
          ] }),
          /* @__PURE__ */ e.jsx(
            "button",
            {
              type: "button",
              onClick: () => S("greenFees", { category: "New Category", holes18: 0, holes9: 0 }),
              className: `${j} bg-brand-blue text-white hover:bg-brand-yellow hover:text-brand-blue`,
              children: "Add Row"
            }
          )
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "space-y-3", children: n.greenFees.map((s, t) => /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-[1fr_140px_140px_auto] gap-3 items-end p-3 rounded-xl bg-gray-50 border border-gray-200", children: [
          /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsx("label", { className: l, children: "Category" }),
            /* @__PURE__ */ e.jsx("input", { className: r, type: "text", value: s.category, onChange: (a) => c("greenFees", t, "category", a.target.value) })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsx("label", { className: l, children: "18 Holes" }),
            /* @__PURE__ */ e.jsx("input", { className: r, type: "number", value: s.holes18, onChange: (a) => c("greenFees", t, "holes18", Number(a.target.value)) })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsx("label", { className: l, children: "9 Holes" }),
            /* @__PURE__ */ e.jsx("input", { className: r, type: "number", value: s.holes9, onChange: (a) => c("greenFees", t, "holes9", Number(a.target.value)) })
          ] }),
          /* @__PURE__ */ e.jsx(
            "button",
            {
              type: "button",
              onClick: () => k("greenFees", t),
              className: `${j} bg-white border border-red-200 text-red-600 hover:bg-red-50`,
              children: "Remove"
            }
          )
        ] }, `gf-${t}`)) })
      ] }),
      /* @__PURE__ */ e.jsxs("section", { className: o, children: [
        /* @__PURE__ */ e.jsxs("div", { className: `${d} flex items-center justify-between gap-4`, children: [
          /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsx("h2", { className: x, children: "Cart Hire Table" }),
            /* @__PURE__ */ e.jsx("p", { className: g, children: "Rows for cart types and prices." })
          ] }),
          /* @__PURE__ */ e.jsx(
            "button",
            {
              type: "button",
              onClick: () => S("cartHire", { type: "New Cart", holes18: 0, holes9: 0 }),
              className: `${j} bg-brand-blue text-white hover:bg-brand-yellow hover:text-brand-blue`,
              children: "Add Row"
            }
          )
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "space-y-3", children: n.cartHire.map((s, t) => /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-[1fr_140px_140px_auto] gap-3 items-end p-3 rounded-xl bg-gray-50 border border-gray-200", children: [
          /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsx("label", { className: l, children: "Type" }),
            /* @__PURE__ */ e.jsx("input", { className: r, type: "text", value: s.type, onChange: (a) => c("cartHire", t, "type", a.target.value) })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsx("label", { className: l, children: "18 Holes" }),
            /* @__PURE__ */ e.jsx("input", { className: r, type: "number", value: s.holes18, onChange: (a) => c("cartHire", t, "holes18", Number(a.target.value)) })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsx("label", { className: l, children: "9 Holes" }),
            /* @__PURE__ */ e.jsx("input", { className: r, type: "number", value: s.holes9, onChange: (a) => c("cartHire", t, "holes9", Number(a.target.value)) })
          ] }),
          /* @__PURE__ */ e.jsx(
            "button",
            {
              type: "button",
              onClick: () => k("cartHire", t),
              className: `${j} bg-white border border-red-200 text-red-600 hover:bg-red-50`,
              children: "Remove"
            }
          )
        ] }, `cart-${t}`)) })
      ] }),
      /* @__PURE__ */ e.jsxs("section", { className: o, children: [
        /* @__PURE__ */ e.jsxs("div", { className: d, children: [
          /* @__PURE__ */ e.jsx("h2", { className: x, children: "Booking Panel" }),
          /* @__PURE__ */ e.jsx("p", { className: g, children: "Contact card shown next to the rates tables." })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsx("label", { className: l, children: "Panel Title" }),
            /* @__PURE__ */ e.jsx("input", { className: r, type: "text", value: n.booking.title, onChange: (s) => i("booking", "title", s.target.value) })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsx("label", { className: l, children: "Phone" }),
            /* @__PURE__ */ e.jsx("input", { className: r, type: "text", value: n.booking.phone, onChange: (s) => i("booking", "phone", s.target.value) })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsx("label", { className: l, children: "Email" }),
            /* @__PURE__ */ e.jsx("input", { className: r, type: "text", value: n.booking.email, onChange: (s) => i("booking", "email", s.target.value) })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "md:col-span-2", children: [
            /* @__PURE__ */ e.jsx("label", { className: l, children: "Description" }),
            /* @__PURE__ */ e.jsx("textarea", { className: `${r} min-h-[100px]`, value: n.booking.description, onChange: (s) => i("booking", "description", s.target.value) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs("section", { className: o, children: [
        /* @__PURE__ */ e.jsxs("div", { className: d, children: [
          /* @__PURE__ */ e.jsx("h2", { className: x, children: "Etiquette Section" }),
          /* @__PURE__ */ e.jsx("p", { className: g, children: "Image, copy, checklist, and CTA button." })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-1 xl:grid-cols-[1fr_360px] gap-8", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("label", { className: l, children: "Title" }),
              /* @__PURE__ */ e.jsx("input", { className: r, type: "text", value: n.etiquette.title, onChange: (s) => i("etiquette", "title", s.target.value) })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("label", { className: l, children: "Description" }),
              /* @__PURE__ */ e.jsx("textarea", { className: `${r} min-h-[100px]`, value: n.etiquette.description, onChange: (s) => i("etiquette", "description", s.target.value) })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("label", { className: l, children: "Checklist Items (One per line)" }),
              /* @__PURE__ */ e.jsx(
                "textarea",
                {
                  className: `${r} min-h-[160px]`,
                  value: H,
                  onChange: (s) => i("etiquette", "items", s.target.value.split(`
`).map((t) => t.trim()).filter(Boolean))
                }
              )
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("label", { className: l, children: "Button Text" }),
                /* @__PURE__ */ e.jsx("input", { className: r, type: "text", value: n.etiquette.buttonText, onChange: (s) => i("etiquette", "buttonText", s.target.value) })
              ] }),
              /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("label", { className: l, children: "Button URL" }),
                /* @__PURE__ */ e.jsx("input", { className: r, type: "text", value: n.etiquette.buttonUrl, onChange: (s) => i("etiquette", "buttonUrl", s.target.value) })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ e.jsx(T, { label: "Etiquette Image", value: n.etiquette.image, onSelect: (s) => i("etiquette", "image", s) })
        ] })
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "sticky bottom-3 z-30", children: /* @__PURE__ */ e.jsxs("div", { className: "rounded-2xl border border-gray-200 bg-white/95 backdrop-blur-sm px-4 py-3 md:px-5 md:py-4 shadow-xl flex items-center justify-between gap-4", children: [
        /* @__PURE__ */ e.jsx("p", { className: "text-xs md:text-sm text-gray-500 m-0", children: "Save after editing the Green Fees content." }),
        /* @__PURE__ */ e.jsx(
          "button",
          {
            type: "submit",
            disabled: N,
            className: `px-6 md:px-10 py-3 rounded-xl text-[11px] md:text-xs font-bold uppercase tracking-[0.18em] shadow-lg transition-all ${N ? "bg-brand-blue text-white opacity-50 cursor-not-allowed" : "bg-brand-blue text-white hover:bg-brand-yellow hover:text-brand-blue"}`,
            children: N ? "Saving Changes..." : "Save Green Fees Settings"
          }
        )
      ] }) })
    ] })
  ] });
};
export {
  F as default
};
