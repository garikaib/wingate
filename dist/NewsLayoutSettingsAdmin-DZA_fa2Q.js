import { a as e, i as t, n, t as r } from "./jsx-runtime-sz-k696O.js";
//#region wp-content/themes/wingate/src/pages/NewsLayoutSettingsAdmin.jsx
var i, a, o, s;
//#endregion
t((() => {
	i = /* @__PURE__ */ e(n()), a = r(), o = [
		{
			key: "current",
			name: "Current Premium",
			subtitle: "Existing Wingate editorial composition"
		},
		{
			key: "classic-a",
			name: "Classic A",
			subtitle: "Hero lead + elegant stacked editorial cards"
		},
		{
			key: "classic-b",
			name: "Classic B",
			subtitle: "Alternating magazine strips with strong visuals"
		},
		{
			key: "modern-a",
			name: "Modern A",
			subtitle: "Asymmetric lead + dynamic card grid"
		},
		{
			key: "modern-e",
			name: "Modern E",
			subtitle: "Sleek premium grid with dense metadata"
		},
		{
			key: "slider-a",
			name: "Slider A",
			subtitle: "Horizontal featured rail + supporting headlines"
		}
	], s = () => {
		let [e, t] = (0, i.useState)({ layout: "current" }), [n, r] = (0, i.useState)(!0), [s, c] = (0, i.useState)(!1), [l, u] = (0, i.useState)({
			text: "",
			type: ""
		}), d = window.wingateAdminData?.root || "/wp-json/", f = window.wingateAdminData?.nonce || "";
		return (0, i.useEffect)(() => {
			(async () => {
				r(!0);
				try {
					let e = await fetch(`${d}wingate/v1/news-layout-settings`);
					if (!e.ok) throw Error("Failed to fetch news layout settings");
					let n = await e.json();
					t(n);
				} catch (e) {
					u({
						text: "Error loading settings: " + e.message,
						type: "error"
					});
				} finally {
					r(!1);
				}
			})();
		}, [d]), n ? /* @__PURE__ */ (0, a.jsx)("div", {
			className: "p-8",
			children: /* @__PURE__ */ (0, a.jsx)("p", {
				className: "animate-pulse text-gray-500 font-montserrat uppercase tracking-widest text-sm",
				children: "Loading layout settings..."
			})
		}) : /* @__PURE__ */ (0, a.jsxs)("div", {
			className: "wingate-admin-spa max-w-6xl mx-auto p-4 md:p-8 text-brand-blue",
			children: [
				/* @__PURE__ */ (0, a.jsxs)("header", {
					className: "mb-8 md:mb-10",
					children: [
						/* @__PURE__ */ (0, a.jsx)("div", {
							className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/5 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-blue mb-4",
							children: "Wingate Admin"
						}),
						/* @__PURE__ */ (0, a.jsxs)("h1", {
							className: "text-4xl md:text-5xl font-cinzel font-bold uppercase leading-none tracking-tight mb-3",
							children: ["News ", /* @__PURE__ */ (0, a.jsx)("span", {
								className: "text-brand-yellow",
								children: "Layout"
							})]
						}),
						/* @__PURE__ */ (0, a.jsxs)("p", {
							className: "text-sm md:text-base text-gray-600 max-w-3xl",
							children: [
								"Choose which premium news layout to display at ",
								/* @__PURE__ */ (0, a.jsx)("span", {
									className: "font-semibold",
									children: "/news/"
								}),
								". Each layout keeps Wingate typography, colors, and tone."
							]
						})
					]
				}),
				l.text && /* @__PURE__ */ (0, a.jsx)("div", {
					className: `mb-8 px-5 py-4 rounded-2xl border text-sm font-medium ${l.type === "error" ? "bg-red-50 border-red-200 text-red-700" : "bg-green-50 border-green-200 text-green-700"}`,
					children: l.text
				}),
				/* @__PURE__ */ (0, a.jsxs)("form", {
					onSubmit: async (t) => {
						t.preventDefault(), c(!0), u({
							text: "",
							type: ""
						});
						try {
							if (!(await fetch(`${d}wingate/v1/news-layout-settings`, {
								method: "POST",
								headers: {
									"Content-Type": "application/json",
									"X-WP-Nonce": f
								},
								body: JSON.stringify(e)
							})).ok) throw Error("Failed to save layout settings");
							u({
								text: "News layout updated successfully.",
								type: "success"
							});
						} catch (e) {
							u({
								text: "Error saving settings: " + e.message,
								type: "error"
							});
						} finally {
							c(!1);
						}
					},
					className: "space-y-8",
					children: [/* @__PURE__ */ (0, a.jsxs)("section", {
						className: "bg-white p-6 md:p-8 rounded-[2rem] shadow-xl border border-gray-100",
						children: [/* @__PURE__ */ (0, a.jsxs)("div", {
							className: "mb-6 pb-5 border-b border-gray-100",
							children: [/* @__PURE__ */ (0, a.jsx)("h2", {
								className: "text-2xl md:text-3xl font-cinzel font-bold uppercase tracking-wide text-brand-blue",
								children: "Select Layout"
							}), /* @__PURE__ */ (0, a.jsx)("p", {
								className: "text-sm text-gray-500 font-montserrat mt-2",
								children: "Inspired by the reference set, tuned with Wingate brand styling and premium editorial feel."
							})]
						}), /* @__PURE__ */ (0, a.jsx)("div", {
							className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4",
							children: o.map((n) => {
								let r = e.layout === n.key;
								return /* @__PURE__ */ (0, a.jsxs)("label", {
									className: `cursor-pointer rounded-2xl border p-4 transition-all ${r ? "border-brand-blue bg-brand-blue text-white shadow-xl" : "border-gray-200 bg-gray-50/60 hover:border-brand-yellow/60 hover:bg-white"}`,
									children: [
										/* @__PURE__ */ (0, a.jsx)("input", {
											type: "radio",
											name: "layout",
											value: n.key,
											checked: r,
											onChange: (e) => t((t) => ({
												...t,
												layout: e.target.value
											})),
											className: "sr-only"
										}),
										/* @__PURE__ */ (0, a.jsxs)("div", {
											className: "flex items-center justify-between mb-2",
											children: [/* @__PURE__ */ (0, a.jsx)("h3", {
												className: `font-cinzel text-lg font-bold ${r ? "!text-white" : "text-brand-blue"}`,
												children: n.name
											}), /* @__PURE__ */ (0, a.jsx)("span", {
												className: `text-[10px] font-bold uppercase tracking-[0.2em] ${r ? "text-brand-yellow" : "text-gray-400"}`,
												children: r ? "Active" : "Option"
											})]
										}),
										/* @__PURE__ */ (0, a.jsx)("p", {
											className: `text-sm leading-relaxed ${r ? "text-white/85" : "text-gray-600"}`,
											children: n.subtitle
										})
									]
								}, n.key);
							})
						})]
					}), /* @__PURE__ */ (0, a.jsx)("div", {
						className: "sticky bottom-3 z-30",
						children: /* @__PURE__ */ (0, a.jsxs)("div", {
							className: "rounded-2xl border border-gray-200 bg-white/95 backdrop-blur-sm px-4 py-3 md:px-5 md:py-4 shadow-xl flex items-center justify-between gap-4",
							children: [/* @__PURE__ */ (0, a.jsx)("p", {
								className: "text-xs md:text-sm text-gray-500 m-0",
								children: "Save to apply this layout on the News page."
							}), /* @__PURE__ */ (0, a.jsx)("button", {
								type: "submit",
								disabled: s,
								className: `px-6 md:px-10 py-3 rounded-xl text-[11px] md:text-xs font-bold uppercase tracking-[0.18em] shadow-lg transition-all ${s ? "bg-brand-blue text-white opacity-50 cursor-not-allowed" : "bg-brand-blue text-white hover:bg-brand-yellow hover:text-brand-blue"}`,
								children: s ? "Saving..." : "Save News Layout"
							})]
						})
					})]
				})
			]
		});
	};
}))();
export { s as default };
