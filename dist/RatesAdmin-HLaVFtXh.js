import { a as e, i as t, n, t as r } from "./jsx-runtime-sz-k696O.js";
import { n as i, t as a } from "./MediaPicker-DEFEfwRu.js";
//#region wp-content/themes/wingate/src/pages/RatesAdmin.jsx
var o, s, c;
//#endregion
t((() => {
	o = /* @__PURE__ */ e(n()), i(), s = r(), c = () => {
		let [e, t] = (0, o.useState)({
			hero: {
				kicker: "",
				title: "",
				subtitle: "",
				backgroundImage: ""
			},
			intro: {
				kicker: "",
				title: "",
				content: ""
			},
			menRates: [],
			ladiesRates: [],
			allRates: [],
			cta: {
				title: "",
				description: "",
				buttonText: "",
				buttonUrl: "",
				backgroundImage: ""
			}
		}), [n, r] = (0, o.useState)(!0), [i, c] = (0, o.useState)(!1), [l, u] = (0, o.useState)({
			text: "",
			type: ""
		}), [d, f] = (0, o.useState)("men"), p = window.wingateAdminData?.root || "/wp-json/", m = window.wingateAdminData?.nonce || "";
		(0, o.useEffect)(() => {
			h();
		}, []);
		let h = async () => {
			r(!0);
			try {
				let e = await fetch(`${p}wingate/v1/rates-settings`);
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
		}, g = async () => {
			c(!0), u({
				text: "",
				type: ""
			});
			try {
				if (!(await fetch(`${p}wingate/v1/rates-settings`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						"X-WP-Nonce": m
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
		}, _ = (e, n, r) => {
			t((t) => ({
				...t,
				[e]: {
					...t[e],
					[n]: r
				}
			}));
		}, v = (e, n, r, i) => {
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
		}, y = (e) => {
			t((t) => ({
				...t,
				[e]: [...t[e], {
					category: "",
					desc: "",
					quarterly: "",
					monthly: "",
					annual: "",
					flat: ""
				}]
			}));
		}, b = (e, n) => {
			t((t) => {
				let r = [...t[e]];
				return r.splice(n, 1), {
					...t,
					[e]: r
				};
			});
		};
		if (n) return /* @__PURE__ */ (0, s.jsx)("div", {
			className: "p-8 text-center text-gray-500",
			children: "Loading Rates settings..."
		});
		let x = (t, n) => /* @__PURE__ */ (0, s.jsxs)("div", {
			className: "bg-brand-gray/30 p-6 rounded-xl border border-gray-100 overflow-x-auto",
			children: [/* @__PURE__ */ (0, s.jsxs)("table", {
				className: "w-full text-left min-w-[800px]",
				children: [/* @__PURE__ */ (0, s.jsx)("thead", { children: /* @__PURE__ */ (0, s.jsxs)("tr", {
					className: "text-xs font-bold text-gray-500 uppercase tracking-wider border-b",
					children: [
						/* @__PURE__ */ (0, s.jsx)("th", {
							className: "pb-2 w-1/5",
							children: "Category"
						}),
						/* @__PURE__ */ (0, s.jsx)("th", {
							className: "pb-2 w-1/4",
							children: "Description"
						}),
						n.includes("quarterly") && /* @__PURE__ */ (0, s.jsx)("th", {
							className: "pb-2 w-24",
							children: "Quarterly ($)"
						}),
						n.includes("monthly") && /* @__PURE__ */ (0, s.jsx)("th", {
							className: "pb-2 w-24",
							children: "Monthly ($)"
						}),
						n.includes("annual") && /* @__PURE__ */ (0, s.jsx)("th", {
							className: "pb-2 w-24",
							children: "Annual ($)"
						}),
						n.includes("flat") && /* @__PURE__ */ (0, s.jsx)("th", {
							className: "pb-2 w-24",
							children: "Flat Fee ($)"
						}),
						/* @__PURE__ */ (0, s.jsx)("th", {
							className: "pb-2 w-16 text-center",
							children: "Actions"
						})
					]
				}) }), /* @__PURE__ */ (0, s.jsx)("tbody", {
					className: "divide-y divide-gray-100",
					children: e[t].map((e, r) => /* @__PURE__ */ (0, s.jsxs)("tr", {
						className: "hover:bg-gray-50/50",
						children: [
							/* @__PURE__ */ (0, s.jsx)("td", {
								className: "py-2 pr-2",
								children: /* @__PURE__ */ (0, s.jsx)("input", {
									type: "text",
									value: e.category,
									onChange: (e) => v(t, r, "category", e.target.value),
									className: "w-full text-sm border-gray-300 rounded shadow-sm",
									placeholder: "e.g. MALE"
								})
							}),
							/* @__PURE__ */ (0, s.jsx)("td", {
								className: "py-2 pr-2",
								children: /* @__PURE__ */ (0, s.jsx)("input", {
									type: "text",
									value: e.desc,
									onChange: (e) => v(t, r, "desc", e.target.value),
									className: "w-full text-sm border-gray-300 rounded shadow-sm",
									placeholder: "Description"
								})
							}),
							n.includes("quarterly") && /* @__PURE__ */ (0, s.jsx)("td", {
								className: "py-2 pr-2",
								children: /* @__PURE__ */ (0, s.jsx)("input", {
									type: "text",
									value: e.quarterly,
									onChange: (e) => v(t, r, "quarterly", e.target.value),
									className: "w-full text-sm border-gray-300 rounded shadow-sm"
								})
							}),
							n.includes("monthly") && /* @__PURE__ */ (0, s.jsx)("td", {
								className: "py-2 pr-2",
								children: /* @__PURE__ */ (0, s.jsx)("input", {
									type: "text",
									value: e.monthly,
									onChange: (e) => v(t, r, "monthly", e.target.value),
									className: "w-full text-sm border-gray-300 rounded shadow-sm"
								})
							}),
							n.includes("annual") && /* @__PURE__ */ (0, s.jsx)("td", {
								className: "py-2 pr-2",
								children: /* @__PURE__ */ (0, s.jsx)("input", {
									type: "text",
									value: e.annual,
									onChange: (e) => v(t, r, "annual", e.target.value),
									className: "w-full text-sm border-gray-300 rounded shadow-sm"
								})
							}),
							n.includes("flat") && /* @__PURE__ */ (0, s.jsx)("td", {
								className: "py-2 pr-2",
								children: /* @__PURE__ */ (0, s.jsx)("input", {
									type: "text",
									value: e.flat,
									onChange: (e) => v(t, r, "flat", e.target.value),
									className: "w-full text-sm border-gray-300 rounded shadow-sm"
								})
							}),
							/* @__PURE__ */ (0, s.jsx)("td", {
								className: "py-2 text-center",
								children: /* @__PURE__ */ (0, s.jsx)("button", {
									onClick: () => b(t, r),
									className: "text-red-500 hover:text-red-700 p-1 bg-red-50 rounded",
									title: "Remove Row",
									children: /* @__PURE__ */ (0, s.jsx)("svg", {
										xmlns: "http://www.w3.org/2000/svg",
										className: "h-4 w-4",
										fill: "none",
										viewBox: "0 0 24 24",
										stroke: "currentColor",
										children: /* @__PURE__ */ (0, s.jsx)("path", {
											strokeLinecap: "round",
											strokeLinejoin: "round",
											strokeWidth: 2,
											d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
										})
									})
								})
							})
						]
					}, r))
				})]
			}), /* @__PURE__ */ (0, s.jsxs)("button", {
				onClick: () => y(t),
				className: "mt-4 flex items-center gap-2 text-sm font-bold text-brand-blue hover:text-brand-yellow font-cinzel",
				children: [/* @__PURE__ */ (0, s.jsx)("svg", {
					xmlns: "http://www.w3.org/2000/svg",
					className: "h-4 w-4",
					fill: "none",
					viewBox: "0 0 24 24",
					stroke: "currentColor",
					children: /* @__PURE__ */ (0, s.jsx)("path", {
						strokeLinecap: "round",
						strokeLinejoin: "round",
						strokeWidth: 2,
						d: "M12 4v16m8-8H4"
					})
				}), "Add Row"]
			})]
		});
		return /* @__PURE__ */ (0, s.jsxs)("div", {
			className: "wingate-admin-spa max-w-6xl mx-auto p-6 font-montserrat",
			children: [/* @__PURE__ */ (0, s.jsxs)("header", {
				className: "flex justify-between items-center mb-8 border-b pb-4",
				children: [/* @__PURE__ */ (0, s.jsxs)("div", { children: [/* @__PURE__ */ (0, s.jsxs)("h1", {
					className: "text-3xl font-cinzel font-bold text-brand-blue mb-1",
					children: ["Rates & Subs ", /* @__PURE__ */ (0, s.jsx)("span", {
						className: "text-brand-yellow",
						children: "Settings"
					})]
				}), /* @__PURE__ */ (0, s.jsx)("p", {
					className: "text-gray-500 text-sm",
					children: "Manage the visual content and pricing tables for the Rates page."
				})] }), /* @__PURE__ */ (0, s.jsxs)("div", {
					className: "flex items-center gap-4",
					children: [l.text && /* @__PURE__ */ (0, s.jsx)("span", {
						className: `px-4 py-2 rounded-md text-sm font-bold ${l.type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`,
						children: l.text
					}), /* @__PURE__ */ (0, s.jsx)("button", {
						onClick: g,
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
								children: [
									/* @__PURE__ */ (0, s.jsxs)("div", { children: [/* @__PURE__ */ (0, s.jsx)("label", {
										className: "block text-sm font-bold text-gray-700 mb-1",
										children: "Kicker"
									}), /* @__PURE__ */ (0, s.jsx)("input", {
										type: "text",
										value: e.hero.kicker,
										onChange: (e) => _("hero", "kicker", e.target.value),
										className: "w-full border-gray-300 rounded-md shadow-sm"
									})] }),
									/* @__PURE__ */ (0, s.jsxs)("div", { children: [/* @__PURE__ */ (0, s.jsx)("label", {
										className: "block text-sm font-bold text-gray-700 mb-1",
										children: "Title"
									}), /* @__PURE__ */ (0, s.jsx)("textarea", {
										value: e.hero.title,
										onChange: (e) => _("hero", "title", e.target.value),
										className: "w-full border-gray-300 rounded-md shadow-sm",
										rows: "2"
									})] }),
									/* @__PURE__ */ (0, s.jsxs)("div", { children: [/* @__PURE__ */ (0, s.jsx)("label", {
										className: "block text-sm font-bold text-gray-700 mb-1",
										children: "Subtitle"
									}), /* @__PURE__ */ (0, s.jsx)("input", {
										type: "text",
										value: e.hero.subtitle,
										onChange: (e) => _("hero", "subtitle", e.target.value),
										className: "w-full border-gray-300 rounded-md shadow-sm"
									})] })
								]
							}), /* @__PURE__ */ (0, s.jsxs)("div", { children: [/* @__PURE__ */ (0, s.jsx)("label", {
								className: "block text-sm font-bold text-gray-700 mb-1",
								children: "Background Image"
							}), /* @__PURE__ */ (0, s.jsx)(a, {
								value: e.hero.backgroundImage,
								onSelect: (e) => _("hero", "backgroundImage", e)
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
							}), "Intro Section"]
						}), /* @__PURE__ */ (0, s.jsxs)("div", {
							className: "space-y-4",
							children: [
								/* @__PURE__ */ (0, s.jsxs)("div", { children: [/* @__PURE__ */ (0, s.jsx)("label", {
									className: "block text-sm font-bold text-gray-700 mb-1",
									children: "Kicker"
								}), /* @__PURE__ */ (0, s.jsx)("input", {
									type: "text",
									value: e.intro.kicker,
									onChange: (e) => _("intro", "kicker", e.target.value),
									className: "w-full border-gray-300 rounded-md shadow-sm"
								})] }),
								/* @__PURE__ */ (0, s.jsxs)("div", { children: [/* @__PURE__ */ (0, s.jsx)("label", {
									className: "block text-sm font-bold text-gray-700 mb-1",
									children: "Title"
								}), /* @__PURE__ */ (0, s.jsx)("textarea", {
									value: e.intro.title,
									onChange: (e) => _("intro", "title", e.target.value),
									className: "w-full border-gray-300 rounded-md shadow-sm",
									rows: "2"
								})] }),
								/* @__PURE__ */ (0, s.jsxs)("div", { children: [/* @__PURE__ */ (0, s.jsx)("label", {
									className: "block text-sm font-bold text-gray-700 mb-1",
									children: "Content"
								}), /* @__PURE__ */ (0, s.jsx)("textarea", {
									value: e.intro.content,
									onChange: (e) => _("intro", "content", e.target.value),
									className: "w-full border-gray-300 rounded-md shadow-sm",
									rows: "3"
								})] })
							]
						})]
					}),
					/* @__PURE__ */ (0, s.jsxs)("section", {
						className: "bg-white p-6 rounded-lg shadow-sm border border-gray-100",
						children: [
							/* @__PURE__ */ (0, s.jsxs)("h2", {
								className: "text-xl font-cinzel text-brand-blue font-bold mb-6 flex items-center gap-2 border-b pb-4",
								children: [/* @__PURE__ */ (0, s.jsx)("span", {
									className: "w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center text-sm",
									children: "3"
								}), "Rates Tables Editor"]
							}),
							/* @__PURE__ */ (0, s.jsxs)("div", {
								className: "flex border-b mb-6",
								children: [
									/* @__PURE__ */ (0, s.jsx)("button", {
										className: `px-6 py-3 font-cinzel font-bold tracking-wider text-sm ${d === "men" ? "border-b-2 border-brand-yellow text-brand-blue" : "text-gray-500 hover:text-brand-blue"}`,
										onClick: () => f("men"),
										children: "Gentlemen"
									}),
									/* @__PURE__ */ (0, s.jsx)("button", {
										className: `px-6 py-3 font-cinzel font-bold tracking-wider text-sm ${d === "ladies" ? "border-b-2 border-brand-yellow text-brand-blue" : "text-gray-500 hover:text-brand-blue"}`,
										onClick: () => f("ladies"),
										children: "Ladies"
									}),
									/* @__PURE__ */ (0, s.jsx)("button", {
										className: `px-6 py-3 font-cinzel font-bold tracking-wider text-sm ${d === "extras" ? "border-b-2 border-brand-yellow text-brand-blue" : "text-gray-500 hover:text-brand-blue"}`,
										onClick: () => f("extras"),
										children: "Admin & Extras"
									})
								]
							}),
							/* @__PURE__ */ (0, s.jsxs)("div", { children: [
								d === "men" && /* @__PURE__ */ (0, s.jsxs)("div", { children: [/* @__PURE__ */ (0, s.jsx)("p", {
									className: "text-sm text-gray-500 mb-4",
									children: "Edit the Gentlemen rates table. Leave fields like \"Annual\" blank if they are Quarterly/Monthly subscriptions."
								}), x("menRates", [
									"quarterly",
									"monthly",
									"annual"
								])] }),
								d === "ladies" && /* @__PURE__ */ (0, s.jsxs)("div", { children: [/* @__PURE__ */ (0, s.jsx)("p", {
									className: "text-sm text-gray-500 mb-4",
									children: "Edit the Ladies rates table. Leave fields like \"Annual\" blank if they are Quarterly/Monthly subscriptions."
								}), x("ladiesRates", [
									"quarterly",
									"monthly",
									"annual"
								])] }),
								d === "extras" && /* @__PURE__ */ (0, s.jsxs)("div", { children: [/* @__PURE__ */ (0, s.jsx)("p", {
									className: "text-sm text-gray-500 mb-4",
									children: "Edit the Admin & Extras rates table. These are usually flat fees."
								}), x("allRates", ["flat"])] })
							] })
						]
					}),
					/* @__PURE__ */ (0, s.jsxs)("section", {
						className: "bg-white p-6 rounded-lg shadow-sm border border-gray-100",
						children: [/* @__PURE__ */ (0, s.jsxs)("h2", {
							className: "text-xl font-cinzel text-brand-blue font-bold mb-4 flex items-center gap-2",
							children: [/* @__PURE__ */ (0, s.jsx)("span", {
								className: "w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center text-sm",
								children: "4"
							}), "Call To Action"]
						}), /* @__PURE__ */ (0, s.jsxs)("div", {
							className: "grid grid-cols-1 md:grid-cols-2 gap-6",
							children: [/* @__PURE__ */ (0, s.jsxs)("div", {
								className: "space-y-4",
								children: [
									/* @__PURE__ */ (0, s.jsxs)("div", { children: [/* @__PURE__ */ (0, s.jsx)("label", {
										className: "block text-sm font-bold text-gray-700 mb-1",
										children: "Title"
									}), /* @__PURE__ */ (0, s.jsx)("textarea", {
										value: e.cta.title,
										onChange: (e) => _("cta", "title", e.target.value),
										className: "w-full border-gray-300 rounded-md shadow-sm",
										rows: "2"
									})] }),
									/* @__PURE__ */ (0, s.jsxs)("div", { children: [/* @__PURE__ */ (0, s.jsx)("label", {
										className: "block text-sm font-bold text-gray-700 mb-1",
										children: "Description"
									}), /* @__PURE__ */ (0, s.jsx)("textarea", {
										value: e.cta.description,
										onChange: (e) => _("cta", "description", e.target.value),
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
												onChange: (e) => _("cta", "buttonText", e.target.value),
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
												onChange: (e) => _("cta", "buttonUrl", e.target.value),
												className: "w-full border-gray-300 rounded-md shadow-sm"
											})]
										})]
									})
								]
							}), /* @__PURE__ */ (0, s.jsxs)("div", { children: [/* @__PURE__ */ (0, s.jsx)("label", {
								className: "block text-sm font-bold text-gray-700 mb-1",
								children: "Background Image"
							}), /* @__PURE__ */ (0, s.jsx)(a, {
								value: e.cta.backgroundImage,
								onSelect: (e) => _("cta", "backgroundImage", e)
							})] })]
						})]
					})
				]
			})]
		});
	};
}))();
export { c as default };
