import { a as e, i as t, n, t as r } from "./jsx-runtime-sz-k696O.js";
import { n as i, t as a } from "./MediaPicker-DEFEfwRu.js";
//#region wp-content/themes/wingate/src/pages/MembershipAdmin.jsx
var o, s, c;
//#endregion
t((() => {
	o = /* @__PURE__ */ e(n()), i(), s = r(), c = () => {
		let [e, t] = (0, o.useState)({
			hero: {
				title: "",
				subtitle: "",
				backgroundImage: ""
			},
			tiersIntro: {
				kicker: "",
				title: ""
			},
			tiers: [],
			cta: {
				title: "",
				description: "",
				buttonText: "",
				buttonUrl: ""
			}
		}), [n, r] = (0, o.useState)(!0), [i, c] = (0, o.useState)(!1), [l, u] = (0, o.useState)({
			text: "",
			type: ""
		}), d = window.wingateAdminData?.root || "/wp-json/", f = window.wingateAdminData?.nonce || "";
		(0, o.useEffect)(() => {
			p();
		}, []);
		let p = async () => {
			r(!0);
			try {
				let e = await fetch(`${d}wingate/v1/membership-settings`);
				if (!e.ok) throw Error("Failed to fetch settings");
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
		}, m = async () => {
			c(!0), u({
				text: "",
				type: ""
			});
			try {
				if (!(await fetch(`${d}wingate/v1/membership-settings`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						"X-WP-Nonce": f
					},
					body: JSON.stringify(e)
				})).ok) throw Error("Failed to save settings");
				u({
					text: "Settings saved successfully!",
					type: "success"
				}), setTimeout(() => u({
					text: "",
					type: ""
				}), 3e3);
			} catch (e) {
				u({
					text: "Error saving settings: " + e.message,
					type: "error"
				});
			} finally {
				c(!1);
			}
		}, h = (e, n, r) => {
			t((t) => ({
				...t,
				[e]: {
					...t[e],
					[n]: r
				}
			}));
		}, g = (e, n, r) => {
			t((t) => {
				let i = [...t.tiers];
				return i[e] = {
					...i[e],
					[n]: r
				}, {
					...t,
					tiers: i
				};
			});
		}, _ = () => {
			t((e) => ({
				...e,
				tiers: [...e.tiers, {
					name: "New Tier",
					price: "$0/yr",
					features: "Feature 1, Feature 2"
				}]
			}));
		}, v = (e) => {
			t((t) => {
				let n = [...t.tiers];
				return n.splice(e, 1), {
					...t,
					tiers: n
				};
			});
		};
		return n ? /* @__PURE__ */ (0, s.jsx)("div", {
			className: "p-8 text-center text-gray-500",
			children: "Loading Membership settings..."
		}) : /* @__PURE__ */ (0, s.jsxs)("div", {
			className: "wingate-admin-spa max-w-6xl mx-auto p-6 font-montserrat",
			children: [/* @__PURE__ */ (0, s.jsxs)("header", {
				className: "flex justify-between items-center mb-8 border-b pb-4",
				children: [/* @__PURE__ */ (0, s.jsxs)("div", { children: [/* @__PURE__ */ (0, s.jsxs)("h1", {
					className: "text-3xl font-cinzel font-bold text-brand-blue mb-1",
					children: ["Membership ", /* @__PURE__ */ (0, s.jsx)("span", {
						className: "text-brand-yellow",
						children: "Settings"
					})]
				}), /* @__PURE__ */ (0, s.jsx)("p", {
					className: "text-gray-500 text-sm",
					children: "Manage the hero section, membership tiers, and call to action."
				})] }), /* @__PURE__ */ (0, s.jsxs)("div", {
					className: "flex items-center gap-4",
					children: [l.text && /* @__PURE__ */ (0, s.jsx)("span", {
						className: `px-4 py-2 rounded-md text-sm font-bold ${l.type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`,
						children: l.text
					}), /* @__PURE__ */ (0, s.jsx)("button", {
						onClick: m,
						disabled: i,
						className: "bg-brand-blue hover:bg-brand-yellow text-white hover:text-brand-blue font-bold py-2 px-6 rounded transition-colors",
						children: i ? "Saving..." : "Save All Settings"
					})]
				})]
			}), /* @__PURE__ */ (0, s.jsxs)("div", {
				className: "space-y-8",
				children: [
					/* @__PURE__ */ (0, s.jsxs)("section", {
						className: "bg-white p-6 rounded-lg shadow-sm border border-gray-100",
						children: [/* @__PURE__ */ (0, s.jsxs)("h2", {
							className: "text-xl font-cinzel text-brand-blue font-bold mb-4 flex items-center gap-2",
							children: [/* @__PURE__ */ (0, s.jsx)("span", {
								className: "w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center text-sm",
								children: "1"
							}), "Hero Section"]
						}), /* @__PURE__ */ (0, s.jsxs)("div", {
							className: "grid grid-cols-1 md:grid-cols-2 gap-6",
							children: [/* @__PURE__ */ (0, s.jsxs)("div", {
								className: "space-y-4",
								children: [/* @__PURE__ */ (0, s.jsxs)("div", { children: [/* @__PURE__ */ (0, s.jsx)("label", {
									className: "block text-sm font-bold text-gray-700 mb-1",
									children: "Title"
								}), /* @__PURE__ */ (0, s.jsx)("textarea", {
									value: e.hero.title,
									onChange: (e) => h("hero", "title", e.target.value),
									className: "w-full border-gray-300 rounded-md shadow-sm",
									rows: "2"
								})] }), /* @__PURE__ */ (0, s.jsxs)("div", { children: [/* @__PURE__ */ (0, s.jsx)("label", {
									className: "block text-sm font-bold text-gray-700 mb-1",
									children: "Subtitle"
								}), /* @__PURE__ */ (0, s.jsx)("textarea", {
									value: e.hero.subtitle,
									onChange: (e) => h("hero", "subtitle", e.target.value),
									className: "w-full border-gray-300 rounded-md shadow-sm",
									rows: "3"
								})] })]
							}), /* @__PURE__ */ (0, s.jsxs)("div", { children: [/* @__PURE__ */ (0, s.jsx)("label", {
								className: "block text-sm font-bold text-gray-700 mb-1",
								children: "Background Image"
							}), /* @__PURE__ */ (0, s.jsx)(a, {
								value: e.hero.backgroundImage,
								onSelect: (e) => h("hero", "backgroundImage", e)
							})] })]
						})]
					}),
					/* @__PURE__ */ (0, s.jsxs)("section", {
						className: "bg-white p-6 rounded-lg shadow-sm border border-gray-100",
						children: [/* @__PURE__ */ (0, s.jsxs)("h2", {
							className: "text-xl font-cinzel text-brand-blue font-bold mb-4 flex items-center gap-2",
							children: [/* @__PURE__ */ (0, s.jsx)("span", {
								className: "w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center text-sm",
								children: "2"
							}), "Tiers Intro"]
						}), /* @__PURE__ */ (0, s.jsxs)("div", {
							className: "grid grid-cols-1 md:grid-cols-2 gap-6",
							children: [/* @__PURE__ */ (0, s.jsxs)("div", { children: [/* @__PURE__ */ (0, s.jsx)("label", {
								className: "block text-sm font-bold text-gray-700 mb-1",
								children: "Kicker"
							}), /* @__PURE__ */ (0, s.jsx)("input", {
								type: "text",
								value: e.tiersIntro.kicker,
								onChange: (e) => h("tiersIntro", "kicker", e.target.value),
								className: "w-full border-gray-300 rounded-md shadow-sm"
							})] }), /* @__PURE__ */ (0, s.jsxs)("div", { children: [/* @__PURE__ */ (0, s.jsx)("label", {
								className: "block text-sm font-bold text-gray-700 mb-1",
								children: "Title"
							}), /* @__PURE__ */ (0, s.jsx)("input", {
								type: "text",
								value: e.tiersIntro.title,
								onChange: (e) => h("tiersIntro", "title", e.target.value),
								className: "w-full border-gray-300 rounded-md shadow-sm"
							})] })]
						})]
					}),
					/* @__PURE__ */ (0, s.jsxs)("section", {
						className: "bg-white p-6 rounded-lg shadow-sm border border-gray-100",
						children: [/* @__PURE__ */ (0, s.jsxs)("h2", {
							className: "text-xl font-cinzel text-brand-blue font-bold mb-6 flex items-center gap-2 border-b pb-4",
							children: [/* @__PURE__ */ (0, s.jsx)("span", {
								className: "w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center text-sm",
								children: "3"
							}), "Membership Tiers"]
						}), /* @__PURE__ */ (0, s.jsxs)("div", {
							className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
							children: [e.tiers.map((e, t) => /* @__PURE__ */ (0, s.jsxs)("div", {
								className: "bg-brand-gray/30 p-5 rounded-lg border border-gray-200 relative group",
								children: [/* @__PURE__ */ (0, s.jsx)("button", {
									onClick: () => v(t),
									className: "absolute top-2 right-2 text-red-400 hover:text-red-600 bg-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity shadow-sm",
									title: "Remove Tier",
									children: /* @__PURE__ */ (0, s.jsx)("svg", {
										xmlns: "http://www.w3.org/2000/svg",
										className: "h-5 w-5",
										viewBox: "0 0 20 20",
										fill: "currentColor",
										children: /* @__PURE__ */ (0, s.jsx)("path", {
											fillRule: "evenodd",
											d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",
											clipRule: "evenodd"
										})
									})
								}), /* @__PURE__ */ (0, s.jsxs)("div", {
									className: "space-y-4",
									children: [
										/* @__PURE__ */ (0, s.jsxs)("div", { children: [/* @__PURE__ */ (0, s.jsx)("label", {
											className: "block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1",
											children: "Tier Name"
										}), /* @__PURE__ */ (0, s.jsx)("input", {
											type: "text",
											value: e.name,
											onChange: (e) => g(t, "name", e.target.value),
											className: "w-full border-gray-300 rounded shadow-sm text-sm font-cinzel font-bold text-brand-blue"
										})] }),
										/* @__PURE__ */ (0, s.jsxs)("div", { children: [/* @__PURE__ */ (0, s.jsx)("label", {
											className: "block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1",
											children: "Price"
										}), /* @__PURE__ */ (0, s.jsx)("input", {
											type: "text",
											value: e.price,
											onChange: (e) => g(t, "price", e.target.value),
											className: "w-full border-gray-300 rounded shadow-sm text-sm text-brand-yellow font-bold"
										})] }),
										/* @__PURE__ */ (0, s.jsxs)("div", { children: [/* @__PURE__ */ (0, s.jsx)("label", {
											className: "block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1",
											children: "Features (comma separated)"
										}), /* @__PURE__ */ (0, s.jsx)("textarea", {
											value: e.features,
											onChange: (e) => g(t, "features", e.target.value),
											className: "w-full border-gray-300 rounded shadow-sm text-sm",
											rows: "3",
											placeholder: "Unlimited Golf, Club Storage, etc."
										})] })
									]
								})]
							}, t)), /* @__PURE__ */ (0, s.jsx)("div", {
								className: "flex items-center justify-center p-8 border-2 border-dashed border-gray-300 rounded-lg hover:border-brand-blue hover:bg-brand-blue/5 transition-colors cursor-pointer",
								onClick: _,
								children: /* @__PURE__ */ (0, s.jsxs)("div", {
									className: "text-center text-brand-blue",
									children: [/* @__PURE__ */ (0, s.jsx)("svg", {
										xmlns: "http://www.w3.org/2000/svg",
										className: "h-12 w-12 mx-auto mb-2 opacity-50",
										fill: "none",
										viewBox: "0 0 24 24",
										stroke: "currentColor",
										children: /* @__PURE__ */ (0, s.jsx)("path", {
											strokeLinecap: "round",
											strokeLinejoin: "round",
											strokeWidth: 2,
											d: "M12 4v16m8-8H4"
										})
									}), /* @__PURE__ */ (0, s.jsx)("span", {
										className: "font-cinzel font-bold",
										children: "Add New Tier"
									})]
								})
							})]
						})]
					}),
					/* @__PURE__ */ (0, s.jsxs)("section", {
						className: "bg-white p-6 rounded-lg shadow-sm border border-gray-100",
						children: [/* @__PURE__ */ (0, s.jsxs)("h2", {
							className: "text-xl font-cinzel text-brand-blue font-bold mb-4 flex items-center gap-2",
							children: [/* @__PURE__ */ (0, s.jsx)("span", {
								className: "w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center text-sm",
								children: "4"
							}), "Call To Action (Manual Forms)"]
						}), /* @__PURE__ */ (0, s.jsx)("div", {
							className: "grid grid-cols-1 md:grid-cols-2 gap-6",
							children: /* @__PURE__ */ (0, s.jsxs)("div", {
								className: "space-y-4",
								children: [
									/* @__PURE__ */ (0, s.jsxs)("div", { children: [/* @__PURE__ */ (0, s.jsx)("label", {
										className: "block text-sm font-bold text-gray-700 mb-1",
										children: "Title"
									}), /* @__PURE__ */ (0, s.jsx)("input", {
										type: "text",
										value: e.cta.title,
										onChange: (e) => h("cta", "title", e.target.value),
										className: "w-full border-gray-300 rounded-md shadow-sm"
									})] }),
									/* @__PURE__ */ (0, s.jsxs)("div", { children: [/* @__PURE__ */ (0, s.jsx)("label", {
										className: "block text-sm font-bold text-gray-700 mb-1",
										children: "Description"
									}), /* @__PURE__ */ (0, s.jsx)("textarea", {
										value: e.cta.description,
										onChange: (e) => h("cta", "description", e.target.value),
										className: "w-full border-gray-300 rounded-md shadow-sm",
										rows: "2"
									})] }),
									/* @__PURE__ */ (0, s.jsxs)("div", {
										className: "flex gap-4",
										children: [/* @__PURE__ */ (0, s.jsxs)("div", {
											className: "flex-1",
											children: [/* @__PURE__ */ (0, s.jsx)("label", {
												className: "block text-sm font-bold text-gray-700 mb-1",
												children: "Button Text"
											}), /* @__PURE__ */ (0, s.jsx)("input", {
												type: "text",
												value: e.cta.buttonText,
												onChange: (e) => h("cta", "buttonText", e.target.value),
												className: "w-full border-gray-300 rounded-md shadow-sm"
											})]
										}), /* @__PURE__ */ (0, s.jsxs)("div", {
											className: "flex-1",
											children: [/* @__PURE__ */ (0, s.jsx)("label", {
												className: "block text-sm font-bold text-gray-700 mb-1",
												children: "Button URL"
											}), /* @__PURE__ */ (0, s.jsx)("input", {
												type: "text",
												value: e.cta.buttonUrl,
												onChange: (e) => h("cta", "buttonUrl", e.target.value),
												className: "w-full border-gray-300 rounded-md shadow-sm"
											})]
										})]
									})
								]
							})
						})]
					})
				]
			})]
		});
	};
}))();
export { c as default };
