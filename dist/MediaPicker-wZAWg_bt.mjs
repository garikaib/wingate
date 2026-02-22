import { r as i, j as e } from "./main-D0uV6uTS.mjs";
const d = ({ onSelect: r, value: t, label: s }) => {
  const a = i.useCallback(() => {
    const o = window.wp.media({
      title: "Select or Upload Media",
      button: {
        text: "Use this media"
      },
      multiple: !1
    });
    o.on("select", () => {
      const n = o.state().get("selection").first().toJSON();
      r(n.url);
    }), o.open();
  }, [r]);
  return /* @__PURE__ */ e.jsxs("div", { className: "wingate-media-picker", children: [
    s && /* @__PURE__ */ e.jsx("label", { className: "block text-[11px] font-bold tracking-[0.18em] uppercase text-gray-600 mb-2", children: s }),
    /* @__PURE__ */ e.jsxs("div", { className: "rounded-2xl border border-gray-200 bg-gray-50/70 p-4", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-start gap-4", children: [
        /* @__PURE__ */ e.jsx(
          "div",
          {
            className: "w-28 h-28 rounded-xl border border-gray-200 overflow-hidden bg-white bg-cover bg-center flex items-center justify-center text-[10px] font-bold tracking-wider text-gray-400 uppercase",
            style: t ? { backgroundImage: `url(${t})` } : void 0,
            children: t ? null : "No image"
          }
        ),
        /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col gap-2", children: [
          /* @__PURE__ */ e.jsx("p", { className: "text-xs text-gray-500 m-0", children: "Recommended: high-resolution image, landscape orientation." }),
          /* @__PURE__ */ e.jsxs("div", { className: "flex flex-wrap gap-2", children: [
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                onClick: a,
                className: "px-4 py-2 bg-brand-blue text-white rounded-xl text-[11px] font-bold uppercase tracking-wider hover:bg-brand-yellow hover:text-brand-blue transition-colors",
                children: t ? "Change Image" : "Select Image"
              }
            ),
            t && /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                onClick: () => r(""),
                className: "px-4 py-2 bg-white border border-red-200 text-red-600 rounded-xl text-[11px] font-bold uppercase tracking-wider hover:bg-red-50 transition-colors",
                children: "Remove"
              }
            )
          ] })
        ] })
      ] }),
      t && /* @__PURE__ */ e.jsx(
        "button",
        {
          type: "button",
          onClick: () => window.open(t, "_blank", "noopener,noreferrer"),
          className: "mt-3 text-xs text-brand-blue hover:text-brand-yellow font-semibold transition-colors",
          children: "View full image"
        }
      )
    ] })
  ] });
};
export {
  d as M
};
