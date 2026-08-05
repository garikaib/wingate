import { a as e, i as t, n, t as r } from "./jsx-runtime-sz-k696O.js";
//#region wp-content/themes/wingate/src/components/MediaPicker.jsx
var i, a, o, s = t((() => {
	i = /* @__PURE__ */ e(n()), a = r(), o = ({ onSelect: e, value: t, label: n }) => {
		let r = (0, i.useCallback)(() => {
			let t = window.wp.media({
				title: "Select or Upload Media",
				button: { text: "Use this media" },
				multiple: !1
			});
			t.on("select", () => {
				e(t.state().get("selection").first().toJSON().url);
			}), t.open();
		}, [e]);
		return /* @__PURE__ */ (0, a.jsxs)("div", {
			className: "wingate-media-picker",
			children: [n && /* @__PURE__ */ (0, a.jsx)("label", {
				className: "block text-[11px] font-bold tracking-[0.18em] uppercase text-gray-600 mb-2",
				children: n
			}), /* @__PURE__ */ (0, a.jsxs)("div", {
				className: "rounded-2xl border border-gray-200 bg-gray-50/70 p-4",
				children: [/* @__PURE__ */ (0, a.jsxs)("div", {
					className: "flex items-start gap-4",
					children: [/* @__PURE__ */ (0, a.jsx)("div", {
						className: "w-28 h-28 rounded-xl border border-gray-200 overflow-hidden bg-white bg-cover bg-center flex items-center justify-center text-[10px] font-bold tracking-wider text-gray-400 uppercase",
						style: t ? { backgroundImage: `url(${t})` } : void 0,
						children: t ? null : "No image"
					}), /* @__PURE__ */ (0, a.jsxs)("div", {
						className: "flex flex-col gap-2",
						children: [/* @__PURE__ */ (0, a.jsx)("p", {
							className: "text-xs text-gray-500 m-0",
							children: "Recommended: high-resolution image, landscape orientation."
						}), /* @__PURE__ */ (0, a.jsxs)("div", {
							className: "flex flex-wrap gap-2",
							children: [/* @__PURE__ */ (0, a.jsx)("button", {
								type: "button",
								onClick: r,
								className: "px-4 py-2 bg-brand-blue text-white rounded-xl text-[11px] font-bold uppercase tracking-wider hover:bg-brand-yellow hover:text-brand-blue transition-colors",
								children: t ? "Change Image" : "Select Image"
							}), t && /* @__PURE__ */ (0, a.jsx)("button", {
								type: "button",
								onClick: () => e(""),
								className: "px-4 py-2 bg-white border border-red-200 text-red-600 rounded-xl text-[11px] font-bold uppercase tracking-wider hover:bg-red-50 transition-colors",
								children: "Remove"
							})]
						})]
					})]
				}), t && /* @__PURE__ */ (0, a.jsx)("button", {
					type: "button",
					onClick: () => window.open(t, "_blank", "noopener,noreferrer"),
					className: "mt-3 text-xs text-brand-blue hover:text-brand-yellow font-semibold transition-colors",
					children: "View full image"
				})]
			})]
		});
	};
}));
//#endregion
export { s as n, o as t };
