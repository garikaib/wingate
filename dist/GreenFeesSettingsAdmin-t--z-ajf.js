import { a as e, i as t, n, t as r } from "./jsx-runtime-sz-k696O.js";
import { n as i, t as a } from "./MediaPicker-DEFEfwRu.js";
//#region wp-content/themes/wingate/src/pages/GreenFeesSettingsAdmin.jsx
var o, s, c, l, u, d, f, p, m, h;
//#endregion
t((() => {
	o = /* @__PURE__ */ e(n()), i(), s = r(), c = "bg-white p-6 md:p-8 rounded-[2rem] shadow-xl border border-gray-100", l = "mb-6 pb-5 border-b border-gray-100", u = "text-2xl md:text-3xl font-cinzel font-bold uppercase tracking-wide text-brand-blue", d = "text-sm text-gray-500 font-montserrat mt-2", f = "block text-[11px] font-bold tracking-[0.16em] uppercase text-gray-600 mb-2", p = "w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50/70 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition", m = "px-3 py-2 rounded-lg text-[11px] font-bold uppercase tracking-wider transition-colors", h = () => {
		let [e, t] = (0, o.useState)(null), [n, r] = (0, o.useState)(!0), [i, h] = (0, o.useState)(!1), [g, _] = (0, o.useState)({
			text: "",
			type: ""
		}), v = window.wingateAdminData?.root || "/wp-json/", y = window.wingateAdminData?.nonce || "";
		(0, o.useEffect)(() => {
			b();
		}, []);
		let b = async () => {
			r(!0);
			try {
				let e = await fetch(`${v}wingate/v1/green-fees-settings`);
				if (!e.ok) throw Error("Failed to fetch settings");
				let n = await e.json();
				t(n);
			} catch (e) {
				_({
					text: "Error loading settings: " + e.message,
					type: "error"
				});
			} finally {
				r(!1);
			}
		}, x = async (t) => {
			t.preventDefault(), h(!0), _({
				text: "",
				type: ""
			});
			try {
				if (!(await fetch(`${v}wingate/v1/green-fees-settings`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						"X-WP-Nonce": y
					},
					body: JSON.stringify(e)
				})).ok) throw Error("Failed to save settings");
				_({
					text: "Green Fees settings saved.",
					type: "success"
				});
			} catch (e) {
				_({
					text: "Error saving settings: " + e.message,
					type: "error"
				});
			} finally {
				h(!1);
			}
		}, S = (e, n, r) => {
			t((t) => ({
				...t,
				[e]: {
					...t[e],
					[n]: r
				}
			}));
		}, C = (e, n, r, i) => {
			t((t) => {
				let a = [...t[e]];
				return a[n] = {
					...a[n],
					[r]: i
				}, {
					...t,
					[e]: a
				};
			});
		}, w = (e, n) => {
			t((t) => ({
				...t,
				[e]: [...t[e], n]
			}));
		}, T = (e, n) => {
			t((t) => ({
				...t,
				[e]: t[e].filter((e, t) => t !== n)
			}));
		}, E = e?.etiquette?.items?.join("\n") || "";
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
							children: ["Green Fees ", /* @__PURE__ */ (0, s.jsx)("span", {
								className: "text-brand-yellow",
								children: "Settings"
							})]
						}),
						/* @__PURE__ */ (0, s.jsx)("p", {
							className: "text-sm md:text-base text-gray-600 max-w-3xl",
							children: "Edit the content used on the Green Fees page, including rates tables, booking contacts, and etiquette details."
						})
					]
				}),
				g.text && /* @__PURE__ */ (0, s.jsx)("div", {
					className: `mb-8 px-5 py-4 rounded-2xl border text-sm font-medium ${g.type === "error" ? "bg-red-50 border-red-200 text-red-700" : "bg-green-50 border-green-200 text-green-700"}`,
					children: g.text
				}),
				/* @__PURE__ */ (0, s.jsxs)("form", {
					onSubmit: x,
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
									children: "Top banner copy and background image."
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
											onChange: (e) => S("hero", "kicker", e.target.value)
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
												onChange: (e) => S("hero", "title", e.target.value)
											})] }), /* @__PURE__ */ (0, s.jsxs)("div", { children: [/* @__PURE__ */ (0, s.jsx)("label", {
												className: f,
												children: "Title Highlight"
											}), /* @__PURE__ */ (0, s.jsx)("input", {
												className: p,
												type: "text",
												value: e.hero.titleHighlight,
												onChange: (e) => S("hero", "titleHighlight", e.target.value)
											})] })]
										}),
										/* @__PURE__ */ (0, s.jsxs)("div", { children: [/* @__PURE__ */ (0, s.jsx)("label", {
											className: f,
											children: "Subtitle"
										}), /* @__PURE__ */ (0, s.jsx)("input", {
											className: p,
											type: "text",
											value: e.hero.subtitle,
											onChange: (e) => S("hero", "subtitle", e.target.value)
										})] })
									]
								}), /* @__PURE__ */ (0, s.jsx)(a, {
									label: "Hero Background Image",
									value: e.hero.backgroundImage,
									onSelect: (e) => S("hero", "backgroundImage", e)
								})]
							})]
						}),
						/* @__PURE__ */ (0, s.jsxs)("section", {
							className: c,
							children: [
								/* @__PURE__ */ (0, s.jsxs)("div", {
									className: l,
									children: [/* @__PURE__ */ (0, s.jsx)("h2", {
										className: u,
										children: "Intro"
									}), /* @__PURE__ */ (0, s.jsx)("p", {
										className: d,
										children: "Short intro paragraph below hero."
									})]
								}),
								/* @__PURE__ */ (0, s.jsx)("label", {
									className: f,
									children: "Intro Content"
								}),
								/* @__PURE__ */ (0, s.jsx)("textarea", {
									className: `${p} min-h-[140px]`,
									value: e.intro.content,
									onChange: (e) => S("intro", "content", e.target.value)
								})
							]
						}),
						/* @__PURE__ */ (0, s.jsxs)("section", {
							className: c,
							children: [/* @__PURE__ */ (0, s.jsxs)("div", {
								className: `${l} flex items-center justify-between gap-4`,
								children: [/* @__PURE__ */ (0, s.jsxs)("div", { children: [/* @__PURE__ */ (0, s.jsx)("h2", {
									className: u,
									children: "Green Fees Table"
								}), /* @__PURE__ */ (0, s.jsx)("p", {
									className: d,
									children: "Rows for green fee categories and prices."
								})] }), /* @__PURE__ */ (0, s.jsx)("button", {
									type: "button",
									onClick: () => w("greenFees", {
										category: "New Category",
										holes18: 0,
										holes9: 0
									}),
									className: `${m} bg-brand-blue text-white hover:bg-brand-yellow hover:text-brand-blue`,
									children: "Add Row"
								})]
							}), /* @__PURE__ */ (0, s.jsx)("div", {
								className: "space-y-3",
								children: e.greenFees.map((e, t) => /* @__PURE__ */ (0, s.jsxs)("div", {
									className: "grid grid-cols-1 md:grid-cols-[1fr_140px_140px_auto] gap-3 items-end p-3 rounded-xl bg-gray-50 border border-gray-200",
									children: [
										/* @__PURE__ */ (0, s.jsxs)("div", { children: [/* @__PURE__ */ (0, s.jsx)("label", {
											className: f,
											children: "Category"
										}), /* @__PURE__ */ (0, s.jsx)("input", {
											className: p,
											type: "text",
											value: e.category,
											onChange: (e) => C("greenFees", t, "category", e.target.value)
										})] }),
										/* @__PURE__ */ (0, s.jsxs)("div", { children: [/* @__PURE__ */ (0, s.jsx)("label", {
											className: f,
											children: "18 Holes"
										}), /* @__PURE__ */ (0, s.jsx)("input", {
											className: p,
											type: "number",
											value: e.holes18,
											onChange: (e) => C("greenFees", t, "holes18", Number(e.target.value))
										})] }),
										/* @__PURE__ */ (0, s.jsxs)("div", { children: [/* @__PURE__ */ (0, s.jsx)("label", {
											className: f,
											children: "9 Holes"
										}), /* @__PURE__ */ (0, s.jsx)("input", {
											className: p,
											type: "number",
											value: e.holes9,
											onChange: (e) => C("greenFees", t, "holes9", Number(e.target.value))
										})] }),
										/* @__PURE__ */ (0, s.jsx)("button", {
											type: "button",
											onClick: () => T("greenFees", t),
											className: `${m} bg-white border border-red-200 text-red-600 hover:bg-red-50`,
											children: "Remove"
										})
									]
								}, `gf-${t}`))
							})]
						}),
						/* @__PURE__ */ (0, s.jsxs)("section", {
							className: c,
							children: [/* @__PURE__ */ (0, s.jsxs)("div", {
								className: `${l} flex items-center justify-between gap-4`,
								children: [/* @__PURE__ */ (0, s.jsxs)("div", { children: [/* @__PURE__ */ (0, s.jsx)("h2", {
									className: u,
									children: "Cart Hire Table"
								}), /* @__PURE__ */ (0, s.jsx)("p", {
									className: d,
									children: "Rows for cart types and prices."
								})] }), /* @__PURE__ */ (0, s.jsx)("button", {
									type: "button",
									onClick: () => w("cartHire", {
										type: "New Cart",
										holes18: 0,
										holes9: 0
									}),
									className: `${m} bg-brand-blue text-white hover:bg-brand-yellow hover:text-brand-blue`,
									children: "Add Row"
								})]
							}), /* @__PURE__ */ (0, s.jsx)("div", {
								className: "space-y-3",
								children: e.cartHire.map((e, t) => /* @__PURE__ */ (0, s.jsxs)("div", {
									className: "grid grid-cols-1 md:grid-cols-[1fr_140px_140px_auto] gap-3 items-end p-3 rounded-xl bg-gray-50 border border-gray-200",
									children: [
										/* @__PURE__ */ (0, s.jsxs)("div", { children: [/* @__PURE__ */ (0, s.jsx)("label", {
											className: f,
											children: "Type"
										}), /* @__PURE__ */ (0, s.jsx)("input", {
											className: p,
											type: "text",
											value: e.type,
											onChange: (e) => C("cartHire", t, "type", e.target.value)
										})] }),
										/* @__PURE__ */ (0, s.jsxs)("div", { children: [/* @__PURE__ */ (0, s.jsx)("label", {
											className: f,
											children: "18 Holes"
										}), /* @__PURE__ */ (0, s.jsx)("input", {
											className: p,
											type: "number",
											value: e.holes18,
											onChange: (e) => C("cartHire", t, "holes18", Number(e.target.value))
										})] }),
										/* @__PURE__ */ (0, s.jsxs)("div", { children: [/* @__PURE__ */ (0, s.jsx)("label", {
											className: f,
											children: "9 Holes"
										}), /* @__PURE__ */ (0, s.jsx)("input", {
											className: p,
											type: "number",
											value: e.holes9,
											onChange: (e) => C("cartHire", t, "holes9", Number(e.target.value))
										})] }),
										/* @__PURE__ */ (0, s.jsx)("button", {
											type: "button",
											onClick: () => T("cartHire", t),
											className: `${m} bg-white border border-red-200 text-red-600 hover:bg-red-50`,
											children: "Remove"
										})
									]
								}, `cart-${t}`))
							})]
						}),
						/* @__PURE__ */ (0, s.jsxs)("section", {
							className: c,
							children: [/* @__PURE__ */ (0, s.jsxs)("div", {
								className: l,
								children: [/* @__PURE__ */ (0, s.jsx)("h2", {
									className: u,
									children: "Booking Panel"
								}), /* @__PURE__ */ (0, s.jsx)("p", {
									className: d,
									children: "Contact card shown next to the rates tables."
								})]
							}), /* @__PURE__ */ (0, s.jsxs)("div", {
								className: "grid grid-cols-1 md:grid-cols-2 gap-4",
								children: [
									/* @__PURE__ */ (0, s.jsxs)("div", { children: [/* @__PURE__ */ (0, s.jsx)("label", {
										className: f,
										children: "Panel Title"
									}), /* @__PURE__ */ (0, s.jsx)("input", {
										className: p,
										type: "text",
										value: e.booking.title,
										onChange: (e) => S("booking", "title", e.target.value)
									})] }),
									/* @__PURE__ */ (0, s.jsxs)("div", { children: [/* @__PURE__ */ (0, s.jsx)("label", {
										className: f,
										children: "Phone"
									}), /* @__PURE__ */ (0, s.jsx)("input", {
										className: p,
										type: "text",
										value: e.booking.phone,
										onChange: (e) => S("booking", "phone", e.target.value)
									})] }),
									/* @__PURE__ */ (0, s.jsxs)("div", { children: [/* @__PURE__ */ (0, s.jsx)("label", {
										className: f,
										children: "Phone Link Type"
									}), /* @__PURE__ */ (0, s.jsxs)("select", {
										className: p,
										value: e.booking.phoneType === "whatsapp" ? "whatsapp" : "tel",
										onChange: (e) => S("booking", "phoneType", e.target.value),
										children: [/* @__PURE__ */ (0, s.jsx)("option", {
											value: "tel",
											children: "Telephone call"
										}), /* @__PURE__ */ (0, s.jsx)("option", {
											value: "whatsapp",
											children: "WhatsApp only"
										})]
									})] }),
									/* @__PURE__ */ (0, s.jsxs)("div", { children: [/* @__PURE__ */ (0, s.jsx)("label", {
										className: f,
										children: "Email"
									}), /* @__PURE__ */ (0, s.jsx)("input", {
										className: p,
										type: "text",
										value: e.booking.email,
										onChange: (e) => S("booking", "email", e.target.value)
									})] }),
									/* @__PURE__ */ (0, s.jsxs)("div", {
										className: "md:col-span-2",
										children: [/* @__PURE__ */ (0, s.jsx)("label", {
											className: f,
											children: "Description"
										}), /* @__PURE__ */ (0, s.jsx)("textarea", {
											className: `${p} min-h-[100px]`,
											value: e.booking.description,
											onChange: (e) => S("booking", "description", e.target.value)
										})]
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, s.jsxs)("section", {
							className: c,
							children: [/* @__PURE__ */ (0, s.jsxs)("div", {
								className: l,
								children: [/* @__PURE__ */ (0, s.jsx)("h2", {
									className: u,
									children: "Etiquette Section"
								}), /* @__PURE__ */ (0, s.jsx)("p", {
									className: d,
									children: "Image, copy, checklist, and CTA button."
								})]
							}), /* @__PURE__ */ (0, s.jsxs)("div", {
								className: "grid grid-cols-1 xl:grid-cols-[1fr_360px] gap-8",
								children: [/* @__PURE__ */ (0, s.jsxs)("div", {
									className: "space-y-4",
									children: [
										/* @__PURE__ */ (0, s.jsxs)("div", { children: [/* @__PURE__ */ (0, s.jsx)("label", {
											className: f,
											children: "Title"
										}), /* @__PURE__ */ (0, s.jsx)("input", {
											className: p,
											type: "text",
											value: e.etiquette.title,
											onChange: (e) => S("etiquette", "title", e.target.value)
										})] }),
										/* @__PURE__ */ (0, s.jsxs)("div", { children: [/* @__PURE__ */ (0, s.jsx)("label", {
											className: f,
											children: "Description"
										}), /* @__PURE__ */ (0, s.jsx)("textarea", {
											className: `${p} min-h-[100px]`,
											value: e.etiquette.description,
											onChange: (e) => S("etiquette", "description", e.target.value)
										})] }),
										/* @__PURE__ */ (0, s.jsxs)("div", { children: [/* @__PURE__ */ (0, s.jsx)("label", {
											className: f,
											children: "Checklist Items (One per line)"
										}), /* @__PURE__ */ (0, s.jsx)("textarea", {
											className: `${p} min-h-[160px]`,
											value: E,
											onChange: (e) => S("etiquette", "items", e.target.value.split("\n").map((e) => e.trim()).filter(Boolean))
										})] }),
										/* @__PURE__ */ (0, s.jsxs)("div", {
											className: "grid grid-cols-1 md:grid-cols-2 gap-4",
											children: [/* @__PURE__ */ (0, s.jsxs)("div", { children: [/* @__PURE__ */ (0, s.jsx)("label", {
												className: f,
												children: "Button Text"
											}), /* @__PURE__ */ (0, s.jsx)("input", {
												className: p,
												type: "text",
												value: e.etiquette.buttonText,
												onChange: (e) => S("etiquette", "buttonText", e.target.value)
											})] }), /* @__PURE__ */ (0, s.jsxs)("div", { children: [/* @__PURE__ */ (0, s.jsx)("label", {
												className: f,
												children: "Button URL"
											}), /* @__PURE__ */ (0, s.jsx)("input", {
												className: p,
												type: "text",
												value: e.etiquette.buttonUrl,
												onChange: (e) => S("etiquette", "buttonUrl", e.target.value)
											})] })]
										})
									]
								}), /* @__PURE__ */ (0, s.jsx)(a, {
									label: "Etiquette Image",
									value: e.etiquette.image,
									onSelect: (e) => S("etiquette", "image", e)
								})]
							})]
						}),
						/* @__PURE__ */ (0, s.jsx)("div", {
							className: "sticky bottom-3 z-30",
							children: /* @__PURE__ */ (0, s.jsxs)("div", {
								className: "rounded-2xl border border-gray-200 bg-white/95 backdrop-blur-sm px-4 py-3 md:px-5 md:py-4 shadow-xl flex items-center justify-between gap-4",
								children: [/* @__PURE__ */ (0, s.jsx)("p", {
									className: "text-xs md:text-sm text-gray-500 m-0",
									children: "Save after editing the Green Fees content."
								}), /* @__PURE__ */ (0, s.jsx)("button", {
									type: "submit",
									disabled: i,
									className: `px-6 md:px-10 py-3 rounded-xl text-[11px] md:text-xs font-bold uppercase tracking-[0.18em] shadow-lg transition-all ${i ? "bg-brand-blue text-white opacity-50 cursor-not-allowed" : "bg-brand-blue text-white hover:bg-brand-yellow hover:text-brand-blue"}`,
									children: i ? "Saving Changes..." : "Save Green Fees Settings"
								})]
							})
						})
					]
				})
			]
		});
	};
}))();
export { h as default };
