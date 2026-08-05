import { a as e, i as t, n, t as r } from "./jsx-runtime-sz-k696O.js";
import { n as i, t as a } from "./MediaPicker-DEFEfwRu.js";
//#region wp-content/themes/wingate/src/pages/HomeSettingsAdmin.jsx
var o, s, c, l, u, d, f, p, m;
//#endregion
t((() => {
	o = /* @__PURE__ */ e(n()), i(), s = r(), c = "bg-white p-6 md:p-8 rounded-[2rem] shadow-xl border border-gray-100", l = "mb-6 pb-5 border-b border-gray-100", u = "text-2xl md:text-3xl font-cinzel font-bold uppercase tracking-wide text-brand-blue", d = "text-sm text-gray-500 font-montserrat mt-2", f = "block text-[11px] font-bold tracking-[0.16em] uppercase text-gray-600 mb-2", p = "w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50/70 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition", m = () => {
		let [e, t] = (0, o.useState)(null), [n, r] = (0, o.useState)(!0), [i, m] = (0, o.useState)(!1), [h, g] = (0, o.useState)({
			text: "",
			type: ""
		}), _ = window.wingateAdminData?.root || "/wp-json/", v = window.wingateAdminData?.nonce || "";
		(0, o.useEffect)(() => {
			y();
		}, []);
		let y = async () => {
			r(!0);
			try {
				let e = await fetch(`${_}wingate/v1/home-settings`);
				if (!e.ok) throw Error("Failed to fetch settings");
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
		}, b = async (t) => {
			t.preventDefault(), m(!0), g({
				text: "",
				type: ""
			});
			try {
				if (!(await fetch(`${_}wingate/v1/home-settings`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						"X-WP-Nonce": v
					},
					body: JSON.stringify(e)
				})).ok) throw Error("Failed to save settings");
				g({
					text: "Settings saved successfully.",
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
		}, x = (e, n, r) => {
			t((t) => ({
				...t,
				[e]: {
					...t[e],
					[n]: r
				}
			}));
		}, S = (e, n, r) => {
			t((t) => {
				let i = [...t.cards];
				return i[e] = {
					...i[e],
					[n]: r
				}, {
					...t,
					cards: i
				};
			});
		};
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
							children: ["Home Page ", /* @__PURE__ */ (0, s.jsx)("span", {
								className: "text-brand-yellow",
								children: "Settings"
							})]
						}),
						/* @__PURE__ */ (0, s.jsx)("p", {
							className: "text-sm md:text-base text-gray-600 max-w-3xl",
							children: "Manage homepage content, copy, and media in one place. Structure has been simplified so each section is easier to edit."
						})
					]
				}),
				h.text && /* @__PURE__ */ (0, s.jsx)("div", {
					className: `mb-8 px-5 py-4 rounded-2xl border text-sm font-medium ${h.type === "error" ? "bg-red-50 border-red-200 text-red-700" : "bg-green-50 border-green-200 text-green-700"}`,
					children: h.text
				}),
				/* @__PURE__ */ (0, s.jsxs)("form", {
					onSubmit: b,
					className: "space-y-8 md:space-y-10",
					children: [
						/* @__PURE__ */ (0, s.jsxs)("section", {
							className: c,
							children: [/* @__PURE__ */ (0, s.jsxs)("div", {
								className: l,
								children: [/* @__PURE__ */ (0, s.jsx)("h2", {
									className: u,
									children: "Hero Section"
								}), /* @__PURE__ */ (0, s.jsx)("p", {
									className: d,
									children: "Main hero copy and top background image."
								})]
							}), /* @__PURE__ */ (0, s.jsxs)("div", {
								className: "grid grid-cols-1 xl:grid-cols-[1fr_360px] gap-8",
								children: [/* @__PURE__ */ (0, s.jsxs)("div", {
									className: "space-y-5",
									children: [
										/* @__PURE__ */ (0, s.jsxs)("div", { children: [/* @__PURE__ */ (0, s.jsx)("label", {
											className: f,
											children: "Kicker"
										}), /* @__PURE__ */ (0, s.jsx)("input", {
											type: "text",
											value: e.hero.kicker,
											onChange: (e) => x("hero", "kicker", e.target.value),
											className: p
										})] }),
										/* @__PURE__ */ (0, s.jsxs)("div", { children: [/* @__PURE__ */ (0, s.jsx)("label", {
											className: f,
											children: "Main Title"
										}), /* @__PURE__ */ (0, s.jsx)("input", {
											type: "text",
											value: e.hero.title,
											onChange: (e) => x("hero", "title", e.target.value),
											className: p
										})] }),
										/* @__PURE__ */ (0, s.jsxs)("div", { children: [/* @__PURE__ */ (0, s.jsx)("label", {
											className: f,
											children: "Subtitle"
										}), /* @__PURE__ */ (0, s.jsx)("input", {
											type: "text",
											value: e.hero.subtitle,
											onChange: (e) => x("hero", "subtitle", e.target.value),
											className: p
										})] }),
										/* @__PURE__ */ (0, s.jsxs)("div", { children: [/* @__PURE__ */ (0, s.jsx)("label", {
											className: f,
											children: "Description"
										}), /* @__PURE__ */ (0, s.jsx)("textarea", {
											value: e.hero.description,
											onChange: (e) => x("hero", "description", e.target.value),
											className: `${p} min-h-[128px]`
										})] })
									]
								}), /* @__PURE__ */ (0, s.jsx)(a, {
									label: "Hero Background Image",
									value: e.hero.backgroundImage,
									onSelect: (e) => x("hero", "backgroundImage", e)
								})]
							})]
						}),
						/* @__PURE__ */ (0, s.jsxs)("section", {
							className: c,
							children: [/* @__PURE__ */ (0, s.jsxs)("div", {
								className: l,
								children: [/* @__PURE__ */ (0, s.jsx)("h2", {
									className: u,
									children: "Info Cards"
								}), /* @__PURE__ */ (0, s.jsx)("p", {
									className: d,
									children: "Three homepage cards with their own content and background image."
								})]
							}), /* @__PURE__ */ (0, s.jsx)("div", {
								className: "space-y-6",
								children: e.cards.map((e, t) => /* @__PURE__ */ (0, s.jsxs)("article", {
									className: "bg-gray-50/70 border border-gray-200 rounded-3xl p-5 md:p-6",
									children: [/* @__PURE__ */ (0, s.jsxs)("div", {
										className: "flex items-center justify-between mb-5",
										children: [/* @__PURE__ */ (0, s.jsxs)("h3", {
											className: "text-lg md:text-xl font-cinzel font-bold uppercase text-brand-blue",
											children: ["Card ", t + 1]
										}), /* @__PURE__ */ (0, s.jsx)("span", {
											className: "text-[10px] font-bold uppercase tracking-[0.16em] text-gray-400",
											children: "Homepage Tile"
										})]
									}), /* @__PURE__ */ (0, s.jsxs)("div", {
										className: "grid grid-cols-1 xl:grid-cols-[1fr_360px] gap-6",
										children: [/* @__PURE__ */ (0, s.jsxs)("div", {
											className: "space-y-4",
											children: [
												/* @__PURE__ */ (0, s.jsxs)("div", { children: [/* @__PURE__ */ (0, s.jsx)("label", {
													className: f,
													children: "Title"
												}), /* @__PURE__ */ (0, s.jsx)("input", {
													type: "text",
													value: e.title,
													onChange: (e) => S(t, "title", e.target.value),
													className: p
												})] }),
												/* @__PURE__ */ (0, s.jsxs)("div", { children: [/* @__PURE__ */ (0, s.jsx)("label", {
													className: f,
													children: "Subtitle / Kicker"
												}), /* @__PURE__ */ (0, s.jsx)("input", {
													type: "text",
													value: e.subtitle,
													onChange: (e) => S(t, "subtitle", e.target.value),
													className: p
												})] }),
												/* @__PURE__ */ (0, s.jsxs)("div", { children: [/* @__PURE__ */ (0, s.jsx)("label", {
													className: f,
													children: "Link URL"
												}), /* @__PURE__ */ (0, s.jsx)("input", {
													type: "text",
													value: e.url,
													onChange: (e) => S(t, "url", e.target.value),
													className: p
												})] })
											]
										}), /* @__PURE__ */ (0, s.jsx)(a, {
											label: "Card Background Image",
											value: e.image,
											onSelect: (e) => S(t, "image", e)
										})]
									})]
								}, t))
							})]
						}),
						/* @__PURE__ */ (0, s.jsxs)("section", {
							className: c,
							children: [/* @__PURE__ */ (0, s.jsxs)("div", {
								className: l,
								children: [/* @__PURE__ */ (0, s.jsx)("h2", {
									className: u,
									children: "Welcome Section"
								}), /* @__PURE__ */ (0, s.jsx)("p", {
									className: d,
									children: "Intro copy block and supporting image below hero/cards."
								})]
							}), /* @__PURE__ */ (0, s.jsxs)("div", {
								className: "grid grid-cols-1 xl:grid-cols-[1fr_360px] gap-8",
								children: [/* @__PURE__ */ (0, s.jsxs)("div", {
									className: "space-y-5",
									children: [/* @__PURE__ */ (0, s.jsxs)("div", { children: [/* @__PURE__ */ (0, s.jsx)("label", {
										className: f,
										children: "Title"
									}), /* @__PURE__ */ (0, s.jsx)("input", {
										type: "text",
										value: e.welcome.title,
										onChange: (e) => x("welcome", "title", e.target.value),
										className: p
									})] }), /* @__PURE__ */ (0, s.jsxs)("div", { children: [/* @__PURE__ */ (0, s.jsx)("label", {
										className: f,
										children: "Content Text"
									}), /* @__PURE__ */ (0, s.jsx)("textarea", {
										value: e.welcome.content,
										onChange: (e) => x("welcome", "content", e.target.value),
										className: `${p} min-h-[280px]`
									})] })]
								}), /* @__PURE__ */ (0, s.jsx)(a, {
									label: "Feature Image",
									value: e.welcome.image,
									onSelect: (e) => x("welcome", "image", e)
								})]
							})]
						}),
						/* @__PURE__ */ (0, s.jsxs)("section", {
							className: c,
							children: [/* @__PURE__ */ (0, s.jsxs)("div", {
								className: l,
								children: [/* @__PURE__ */ (0, s.jsx)("h2", {
									className: u,
									children: "Gallery Peek"
								}), /* @__PURE__ */ (0, s.jsx)("p", {
									className: d,
									children: "Parallax strip image used for the gallery transition block."
								})]
							}), /* @__PURE__ */ (0, s.jsx)(a, {
								label: "Full-Width Parallax Image",
								value: e.peekWindow.image,
								onSelect: (e) => x("peekWindow", "image", e)
							})]
						}),
						/* @__PURE__ */ (0, s.jsx)("div", {
							className: "sticky bottom-3 z-30",
							children: /* @__PURE__ */ (0, s.jsxs)("div", {
								className: "rounded-2xl border border-gray-200 bg-white/95 backdrop-blur-sm px-4 py-3 md:px-5 md:py-4 shadow-xl flex items-center justify-between gap-4",
								children: [/* @__PURE__ */ (0, s.jsx)("p", {
									className: "text-xs md:text-sm text-gray-500 m-0",
									children: "Save when you finish editing this page."
								}), /* @__PURE__ */ (0, s.jsx)("button", {
									type: "submit",
									disabled: i,
									className: `px-6 md:px-10 py-3 rounded-xl text-[11px] md:text-xs font-bold uppercase tracking-[0.18em] shadow-lg transition-all ${i ? "bg-brand-blue text-white opacity-50 cursor-not-allowed" : "bg-brand-blue text-white hover:bg-brand-yellow hover:text-brand-blue"}`,
									children: i ? "Saving Changes..." : "Save All Settings"
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
