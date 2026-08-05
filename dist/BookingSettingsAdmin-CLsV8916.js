import { a as e, i as t, n, t as r } from "./jsx-runtime-sz-k696O.js";
import { n as i, t as a } from "./MediaPicker-DEFEfwRu.js";
//#region wp-content/themes/wingate/src/pages/BookingSettingsAdmin.jsx
var o, s, c, l, u, d, f, p, m;
//#endregion
t((() => {
	o = /* @__PURE__ */ e(n()), i(), s = r(), c = "bg-white p-6 md:p-8 rounded-[2rem] shadow-xl border border-gray-100", l = "mb-6 pb-5 border-b border-gray-100", u = "text-2xl md:text-3xl font-cinzel font-bold uppercase tracking-wide text-brand-blue", d = "text-sm text-gray-500 font-montserrat mt-2", f = "block text-[11px] font-bold tracking-[0.16em] uppercase text-gray-600 mb-2", p = "w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50/70 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition", m = () => {
		let [e, t] = (0, o.useState)(null), [n, r] = (0, o.useState)(!0), [i, m] = (0, o.useState)(!1), [h, g] = (0, o.useState)({
			text: "",
			type: ""
		}), _ = window.wingateAdminData?.root || "/wp-json/", v = window.wingateAdminData?.nonce || "";
		(0, o.useEffect)(() => {
			(async () => {
				r(!0);
				try {
					let e = await fetch(`${_}wingate/v1/booking-settings`);
					if (!e.ok) throw Error("Failed to fetch booking settings");
					let n = await e.json();
					t(n);
				} catch (e) {
					g({
						text: "Error loading settings: " + e.message,
						type: "error"
					});
				} finally {
					r(!1);
				}
			})();
		}, [_]);
		let y = async (t) => {
			t.preventDefault(), m(!0), g({
				text: "",
				type: ""
			});
			try {
				if (!(await fetch(`${_}wingate/v1/booking-settings`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						"X-WP-Nonce": v
					},
					body: JSON.stringify(e)
				})).ok) throw Error("Failed to save booking settings");
				g({
					text: "Booking settings saved.",
					type: "success"
				});
			} catch (e) {
				g({
					text: "Error saving settings: " + e.message,
					type: "error"
				});
			} finally {
				m(!1);
			}
		}, b = (e, n, r) => {
			t((t) => ({
				...t,
				[e]: {
					...t[e],
					[n]: r
				}
			}));
		}, x = (e, n, r) => {
			t((t) => {
				let i = [...t.quickInfo];
				return i[e] = {
					...i[e],
					[n]: r
				}, {
					...t,
					quickInfo: i
				};
			});
		}, S = e?.dressCode?.items?.join("\n") || "";
		return n ? /* @__PURE__ */ (0, s.jsx)("div", {
			className: "p-8",
			children: /* @__PURE__ */ (0, s.jsx)("p", {
				className: "animate-pulse text-gray-500 font-montserrat uppercase tracking-widest text-sm",
				children: "Loading settings..."
			})
		}) : /* @__PURE__ */ (0, s.jsxs)("div", {
			className: "wingate-admin-spa max-w-7xl mx-auto p-4 md:p-8 text-brand-blue",
			children: [
				/* @__PURE__ */ (0, s.jsxs)("header", {
					className: "mb-8 md:mb-10",
					children: [
						/* @__PURE__ */ (0, s.jsx)("div", {
							className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/5 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-blue mb-4",
							children: "Wingate Admin"
						}),
						/* @__PURE__ */ (0, s.jsxs)("h1", {
							className: "text-4xl md:text-5xl font-cinzel font-bold uppercase leading-none tracking-tight mb-3",
							children: ["Booking ", /* @__PURE__ */ (0, s.jsx)("span", {
								className: "text-brand-yellow",
								children: "Settings"
							})]
						}),
						/* @__PURE__ */ (0, s.jsx)("p", {
							className: "text-sm md:text-base text-gray-600 max-w-3xl",
							children: "Edit booking page content sections. The booking iframe embed is intentionally fixed and cannot be changed here."
						})
					]
				}),
				h.text && /* @__PURE__ */ (0, s.jsx)("div", {
					className: `mb-8 px-5 py-4 rounded-2xl border text-sm font-medium ${h.type === "error" ? "bg-red-50 border-red-200 text-red-700" : "bg-green-50 border-green-200 text-green-700"}`,
					children: h.text
				}),
				/* @__PURE__ */ (0, s.jsxs)("form", {
					onSubmit: y,
					className: "space-y-8 md:space-y-10",
					children: [
						/* @__PURE__ */ (0, s.jsxs)("section", {
							className: c,
							children: [/* @__PURE__ */ (0, s.jsxs)("div", {
								className: l,
								children: [/* @__PURE__ */ (0, s.jsx)("h2", {
									className: u,
									children: "Hero"
								}), /* @__PURE__ */ (0, s.jsx)("p", {
									className: d,
									children: "Top headline and hero image."
								})]
							}), /* @__PURE__ */ (0, s.jsxs)("div", {
								className: "grid grid-cols-1 xl:grid-cols-[1fr_360px] gap-8",
								children: [/* @__PURE__ */ (0, s.jsxs)("div", {
									className: "space-y-4",
									children: [
										/* @__PURE__ */ (0, s.jsxs)("div", { children: [/* @__PURE__ */ (0, s.jsx)("label", {
											className: f,
											children: "Kicker"
										}), /* @__PURE__ */ (0, s.jsx)("input", {
											className: p,
											type: "text",
											value: e.hero.kicker,
											onChange: (e) => b("hero", "kicker", e.target.value)
										})] }),
										/* @__PURE__ */ (0, s.jsxs)("div", {
											className: "grid grid-cols-1 md:grid-cols-2 gap-4",
											children: [/* @__PURE__ */ (0, s.jsxs)("div", { children: [/* @__PURE__ */ (0, s.jsx)("label", {
												className: f,
												children: "Title"
											}), /* @__PURE__ */ (0, s.jsx)("input", {
												className: p,
												type: "text",
												value: e.hero.title,
												onChange: (e) => b("hero", "title", e.target.value)
											})] }), /* @__PURE__ */ (0, s.jsxs)("div", { children: [/* @__PURE__ */ (0, s.jsx)("label", {
												className: f,
												children: "Title Highlight"
											}), /* @__PURE__ */ (0, s.jsx)("input", {
												className: p,
												type: "text",
												value: e.hero.titleHighlight,
												onChange: (e) => b("hero", "titleHighlight", e.target.value)
											})] })]
										}),
										/* @__PURE__ */ (0, s.jsxs)("div", { children: [/* @__PURE__ */ (0, s.jsx)("label", {
											className: f,
											children: "Subtitle"
										}), /* @__PURE__ */ (0, s.jsx)("input", {
											className: p,
											type: "text",
											value: e.hero.subtitle,
											onChange: (e) => b("hero", "subtitle", e.target.value)
										})] })
									]
								}), /* @__PURE__ */ (0, s.jsx)(a, {
									label: "Hero Background Image",
									value: e.hero.backgroundImage,
									onSelect: (e) => b("hero", "backgroundImage", e)
								})]
							})]
						}),
						/* @__PURE__ */ (0, s.jsxs)("section", {
							className: c,
							children: [/* @__PURE__ */ (0, s.jsxs)("div", {
								className: l,
								children: [/* @__PURE__ */ (0, s.jsx)("h2", {
									className: u,
									children: "Quick Info Cards"
								}), /* @__PURE__ */ (0, s.jsx)("p", {
									className: d,
									children: "Edit card labels and values shown above the iframe."
								})]
							}), /* @__PURE__ */ (0, s.jsx)("div", {
								className: "space-y-4",
								children: e.quickInfo.map((e, t) => /* @__PURE__ */ (0, s.jsxs)("div", {
									className: "grid grid-cols-1 md:grid-cols-3 gap-3 p-3 rounded-xl bg-gray-50 border border-gray-200",
									children: [
										/* @__PURE__ */ (0, s.jsxs)("div", { children: [/* @__PURE__ */ (0, s.jsx)("label", {
											className: f,
											children: "Label"
										}), /* @__PURE__ */ (0, s.jsx)("input", {
											className: p,
											type: "text",
											value: e.label || "",
											onChange: (e) => x(t, "label", e.target.value)
										})] }),
										/* @__PURE__ */ (0, s.jsxs)("div", { children: [/* @__PURE__ */ (0, s.jsx)("label", {
											className: f,
											children: "Value"
										}), /* @__PURE__ */ (0, s.jsx)("input", {
											className: p,
											type: "text",
											value: e.value || "",
											onChange: (e) => x(t, "value", e.target.value)
										})] }),
										/* @__PURE__ */ (0, s.jsxs)("div", { children: [/* @__PURE__ */ (0, s.jsx)("label", {
											className: f,
											children: "URL (Optional)"
										}), /* @__PURE__ */ (0, s.jsx)("input", {
											className: p,
											type: "text",
											value: e.url || "",
											onChange: (e) => x(t, "url", e.target.value)
										})] })
									]
								}, `quick-${t}`))
							})]
						}),
						/* @__PURE__ */ (0, s.jsxs)("section", {
							className: c,
							children: [/* @__PURE__ */ (0, s.jsxs)("div", {
								className: l,
								children: [/* @__PURE__ */ (0, s.jsx)("h2", {
									className: u,
									children: "Dress Code"
								}), /* @__PURE__ */ (0, s.jsx)("p", {
									className: d,
									children: "Title, badge letter, and checklist items."
								})]
							}), /* @__PURE__ */ (0, s.jsxs)("div", {
								className: "space-y-4",
								children: [/* @__PURE__ */ (0, s.jsxs)("div", {
									className: "grid grid-cols-1 md:grid-cols-2 gap-4",
									children: [/* @__PURE__ */ (0, s.jsxs)("div", { children: [/* @__PURE__ */ (0, s.jsx)("label", {
										className: f,
										children: "Title"
									}), /* @__PURE__ */ (0, s.jsx)("input", {
										className: p,
										type: "text",
										value: e.dressCode.title,
										onChange: (e) => b("dressCode", "title", e.target.value)
									})] }), /* @__PURE__ */ (0, s.jsxs)("div", { children: [/* @__PURE__ */ (0, s.jsx)("label", {
										className: f,
										children: "Badge Letter"
									}), /* @__PURE__ */ (0, s.jsx)("input", {
										className: p,
										type: "text",
										maxLength: 2,
										value: e.dressCode.badge,
										onChange: (e) => b("dressCode", "badge", e.target.value)
									})] })]
								}), /* @__PURE__ */ (0, s.jsxs)("div", { children: [/* @__PURE__ */ (0, s.jsx)("label", {
									className: f,
									children: "Items (One per line)"
								}), /* @__PURE__ */ (0, s.jsx)("textarea", {
									className: `${p} min-h-[140px]`,
									value: S,
									onChange: (e) => b("dressCode", "items", e.target.value.split("\n").map((e) => e.trim()).filter(Boolean))
								})] })]
							})]
						}),
						/* @__PURE__ */ (0, s.jsxs)("section", {
							className: c,
							children: [/* @__PURE__ */ (0, s.jsxs)("div", {
								className: l,
								children: [/* @__PURE__ */ (0, s.jsx)("h2", {
									className: u,
									children: "Cart Hire Panel"
								}), /* @__PURE__ */ (0, s.jsx)("p", {
									className: d,
									children: "Edit heading, description, and price summary block."
								})]
							}), /* @__PURE__ */ (0, s.jsxs)("div", {
								className: "space-y-4",
								children: [
									/* @__PURE__ */ (0, s.jsxs)("div", {
										className: "grid grid-cols-1 md:grid-cols-3 gap-4",
										children: [
											/* @__PURE__ */ (0, s.jsxs)("div", { children: [/* @__PURE__ */ (0, s.jsx)("label", {
												className: f,
												children: "Title"
											}), /* @__PURE__ */ (0, s.jsx)("input", {
												className: p,
												type: "text",
												value: e.cartHire.title,
												onChange: (e) => b("cartHire", "title", e.target.value)
											})] }),
											/* @__PURE__ */ (0, s.jsxs)("div", { children: [/* @__PURE__ */ (0, s.jsx)("label", {
												className: f,
												children: "Badge Letter"
											}), /* @__PURE__ */ (0, s.jsx)("input", {
												className: p,
												type: "text",
												maxLength: 2,
												value: e.cartHire.badge,
												onChange: (e) => b("cartHire", "badge", e.target.value)
											})] }),
											/* @__PURE__ */ (0, s.jsxs)("div", { children: [/* @__PURE__ */ (0, s.jsx)("label", {
												className: f,
												children: "Rate Label"
											}), /* @__PURE__ */ (0, s.jsx)("input", {
												className: p,
												type: "text",
												value: e.cartHire.label,
												onChange: (e) => b("cartHire", "label", e.target.value)
											})] })
										]
									}),
									/* @__PURE__ */ (0, s.jsxs)("div", { children: [/* @__PURE__ */ (0, s.jsx)("label", {
										className: f,
										children: "Description"
									}), /* @__PURE__ */ (0, s.jsx)("textarea", {
										className: `${p} min-h-[100px]`,
										value: e.cartHire.description,
										onChange: (e) => b("cartHire", "description", e.target.value)
									})] }),
									/* @__PURE__ */ (0, s.jsxs)("div", { children: [/* @__PURE__ */ (0, s.jsx)("label", {
										className: f,
										children: "Rates Text"
									}), /* @__PURE__ */ (0, s.jsx)("input", {
										className: p,
										type: "text",
										value: e.cartHire.ratesText,
										onChange: (e) => b("cartHire", "ratesText", e.target.value)
									})] })
								]
							})]
						}),
						/* @__PURE__ */ (0, s.jsxs)("section", {
							className: c,
							children: [/* @__PURE__ */ (0, s.jsxs)("div", {
								className: l,
								children: [/* @__PURE__ */ (0, s.jsx)("h2", {
									className: u,
									children: "Bottom CTA"
								}), /* @__PURE__ */ (0, s.jsx)("p", {
									className: d,
									children: "Button text and destination shown at the bottom of the page."
								})]
							}), /* @__PURE__ */ (0, s.jsxs)("div", {
								className: "grid grid-cols-1 md:grid-cols-2 gap-4",
								children: [/* @__PURE__ */ (0, s.jsxs)("div", { children: [/* @__PURE__ */ (0, s.jsx)("label", {
									className: f,
									children: "Button Text"
								}), /* @__PURE__ */ (0, s.jsx)("input", {
									className: p,
									type: "text",
									value: e.cta.text,
									onChange: (e) => b("cta", "text", e.target.value)
								})] }), /* @__PURE__ */ (0, s.jsxs)("div", { children: [/* @__PURE__ */ (0, s.jsx)("label", {
									className: f,
									children: "Button URL"
								}), /* @__PURE__ */ (0, s.jsx)("input", {
									className: p,
									type: "text",
									value: e.cta.url,
									onChange: (e) => b("cta", "url", e.target.value)
								})] })]
							})]
						}),
						/* @__PURE__ */ (0, s.jsxs)("section", {
							className: c,
							children: [/* @__PURE__ */ (0, s.jsxs)("div", {
								className: l,
								children: [/* @__PURE__ */ (0, s.jsx)("h2", {
									className: u,
									children: "Iframe"
								}), /* @__PURE__ */ (0, s.jsx)("p", {
									className: d,
									children: "This is intentionally locked and unchanged."
								})]
							}), /* @__PURE__ */ (0, s.jsx)("div", {
								className: "p-4 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-600",
								children: "Booking iframe URL is fixed in template and not editable by design."
							})]
						}),
						/* @__PURE__ */ (0, s.jsx)("div", {
							className: "sticky bottom-3 z-30",
							children: /* @__PURE__ */ (0, s.jsxs)("div", {
								className: "rounded-2xl border border-gray-200 bg-white/95 backdrop-blur-sm px-4 py-3 md:px-5 md:py-4 shadow-xl flex items-center justify-between gap-4",
								children: [/* @__PURE__ */ (0, s.jsx)("p", {
									className: "text-xs md:text-sm text-gray-500 m-0",
									children: "Save after editing Booking content."
								}), /* @__PURE__ */ (0, s.jsx)("button", {
									type: "submit",
									disabled: i,
									className: `px-6 md:px-10 py-3 rounded-xl text-[11px] md:text-xs font-bold uppercase tracking-[0.18em] shadow-lg transition-all ${i ? "bg-brand-blue text-white opacity-50 cursor-not-allowed" : "bg-brand-blue text-white hover:bg-brand-yellow hover:text-brand-blue"}`,
									children: i ? "Saving Changes..." : "Save Booking Settings"
								})]
							})
						})
					]
				})
			]
		});
	};
}))();
export { m as default };
