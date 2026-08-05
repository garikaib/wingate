import { a as e, i as t, n, t as r } from "./jsx-runtime-sz-k696O.js";
import { n as i, t as a } from "./MediaPicker-DEFEfwRu.js";
//#region wp-content/themes/wingate/src/pages/CourseSettingsAdmin.jsx
var o, s, c;
//#endregion
t((() => {
	o = /* @__PURE__ */ e(n()), i(), s = r(), c = () => {
		let [e, t] = (0, o.useState)(null), [n, r] = (0, o.useState)(!0), [i, c] = (0, o.useState)(!1), [l, u] = (0, o.useState)({
			text: "",
			type: ""
		}), d = window.wingateAdminData || {}, f = d.root || "/wp-json/", p = d.nonce || "";
		(0, o.useEffect)(() => {
			m();
		}, []);
		let m = async () => {
			r(!0);
			try {
				let e = await fetch(`${f}wingate/v1/course-settings`);
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
		}, h = async (t) => {
			t.preventDefault(), c(!0), u({
				text: "",
				type: ""
			});
			try {
				if (!(await fetch(`${f}wingate/v1/course-settings`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						"X-WP-Nonce": p
					},
					body: JSON.stringify(e)
				})).ok) throw Error("Failed to save settings");
				u({
					text: "Settings saved successfully!",
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
		}, g = (e, n, r) => {
			t((t) => ({
				...t,
				[e]: {
					...t[e],
					[n]: r
				}
			}));
		}, _ = (e, n) => {
			t((t) => ({
				...t,
				intro: {
					...t.intro,
					stats: {
						...t.intro.stats,
						[e]: n
					}
				}
			}));
		};
		return n ? /* @__PURE__ */ (0, s.jsx)("div", {
			className: "p-8",
			children: /* @__PURE__ */ (0, s.jsx)("p", {
				className: "animate-pulse text-gray-500 font-montserrat uppercase tracking-widest",
				children: "Loading settings..."
			})
		}) : /* @__PURE__ */ (0, s.jsxs)("div", {
			className: "wingate-admin-spa p-8 max-w-5xl font-montserrat",
			children: [
				/* @__PURE__ */ (0, s.jsxs)("header", {
					className: "mb-10",
					children: [/* @__PURE__ */ (0, s.jsx)("h1", {
						className: "text-4xl font-cinzel text-brand-blue font-bold mb-2 uppercase tracking-wide",
						children: "The Course Settings"
					}), /* @__PURE__ */ (0, s.jsx)("p", {
						className: "text-gray-600",
						children: "Customize the appearance and data of the Course information page."
					})]
				}),
				l.text && /* @__PURE__ */ (0, s.jsx)("div", {
					className: `p-4 mb-8 rounded shadow-sm border-l-4 ${l.type === "error" ? "bg-red-50 border-red-500 text-red-700" : "bg-green-50 border-green-500 text-green-700"}`,
					children: l.text
				}),
				/* @__PURE__ */ (0, s.jsxs)("form", {
					onSubmit: h,
					className: "space-y-12",
					children: [
						/* @__PURE__ */ (0, s.jsxs)("section", {
							className: "bg-white p-8 rounded-xl shadow-md border border-gray-100",
							children: [/* @__PURE__ */ (0, s.jsx)("h2", {
								className: "text-2xl font-cinzel text-brand-blue font-bold mb-6 pb-2 border-b border-gray-100 uppercase tracking-widest",
								children: "Hero Section"
							}), /* @__PURE__ */ (0, s.jsxs)("div", {
								className: "grid grid-cols-1 md:grid-cols-2 gap-6",
								children: [/* @__PURE__ */ (0, s.jsxs)("div", {
									className: "space-y-4",
									children: [/* @__PURE__ */ (0, s.jsxs)("div", { children: [/* @__PURE__ */ (0, s.jsx)("label", {
										className: "block text-sm font-bold text-gray-700 mb-1",
										children: "Kicker"
									}), /* @__PURE__ */ (0, s.jsx)("input", {
										type: "text",
										value: e.hero.kicker,
										onChange: (e) => g("hero", "kicker", e.target.value),
										className: "w-full px-4 py-2 border rounded focus:ring-2 focus:ring-brand-blue outline-none"
									})] }), /* @__PURE__ */ (0, s.jsxs)("div", { children: [/* @__PURE__ */ (0, s.jsx)("label", {
										className: "block text-sm font-bold text-gray-700 mb-1",
										children: "Title"
									}), /* @__PURE__ */ (0, s.jsx)("input", {
										type: "text",
										value: e.hero.title,
										onChange: (e) => g("hero", "title", e.target.value),
										className: "w-full px-4 py-2 border rounded focus:ring-2 focus:ring-brand-blue outline-none"
									})] })]
								}), /* @__PURE__ */ (0, s.jsx)(a, {
									label: "Hero Background Image",
									value: e.hero.backgroundImage,
									onSelect: (e) => g("hero", "backgroundImage", e)
								})]
							})]
						}),
						/* @__PURE__ */ (0, s.jsxs)("section", {
							className: "bg-white p-8 rounded-xl shadow-md border border-gray-100",
							children: [/* @__PURE__ */ (0, s.jsx)("h2", {
								className: "text-2xl font-cinzel text-brand-blue font-bold mb-6 pb-2 border-b border-gray-100 uppercase tracking-widest",
								children: "Intro Section"
							}), /* @__PURE__ */ (0, s.jsxs)("div", {
								className: "grid grid-cols-1 md:grid-cols-2 gap-8",
								children: [/* @__PURE__ */ (0, s.jsxs)("div", {
									className: "space-y-6",
									children: [/* @__PURE__ */ (0, s.jsxs)("div", { children: [/* @__PURE__ */ (0, s.jsx)("label", {
										className: "block text-sm font-bold text-gray-700 mb-1",
										children: "Intro Title (use \\n for line breaks)"
									}), /* @__PURE__ */ (0, s.jsx)("textarea", {
										value: e.intro.title,
										onChange: (e) => g("intro", "title", e.target.value),
										className: "w-full px-4 py-2 border rounded focus:ring-2 focus:ring-brand-blue outline-none h-24 font-cinzel"
									})] }), /* @__PURE__ */ (0, s.jsxs)("div", { children: [/* @__PURE__ */ (0, s.jsx)("label", {
										className: "block text-sm font-bold text-gray-700 mb-1",
										children: "Intro Content"
									}), /* @__PURE__ */ (0, s.jsx)("textarea", {
										value: e.intro.content,
										onChange: (e) => g("intro", "content", e.target.value),
										className: "w-full px-4 py-2 border rounded h-48 focus:ring-2 focus:ring-brand-blue outline-none leading-relaxed"
									})] })]
								}), /* @__PURE__ */ (0, s.jsxs)("div", {
									className: "space-y-6",
									children: [/* @__PURE__ */ (0, s.jsx)(a, {
										label: "Intro Feature Image",
										value: e.intro.image,
										onSelect: (e) => g("intro", "image", e)
									}), /* @__PURE__ */ (0, s.jsxs)("div", {
										className: "bg-gray-50 p-6 rounded-lg border border-gray-200",
										children: [/* @__PURE__ */ (0, s.jsx)("h3", {
											className: "font-bold text-brand-blue uppercase tracking-widest text-sm mb-4",
											children: "Course Stats"
										}), /* @__PURE__ */ (0, s.jsxs)("div", {
											className: "grid grid-cols-2 gap-4",
											children: [
												/* @__PURE__ */ (0, s.jsxs)("div", { children: [/* @__PURE__ */ (0, s.jsx)("label", {
													className: "block text-xs font-bold text-gray-500 uppercase mb-1",
													children: "Holes"
												}), /* @__PURE__ */ (0, s.jsx)("input", {
													type: "text",
													value: e.intro.stats.holes,
													onChange: (e) => _("holes", e.target.value),
													className: "w-full px-3 py-1 border rounded text-lg font-bold text-brand-blue"
												})] }),
												/* @__PURE__ */ (0, s.jsxs)("div", { children: [/* @__PURE__ */ (0, s.jsx)("label", {
													className: "block text-xs font-bold text-gray-500 uppercase mb-1",
													children: "Par"
												}), /* @__PURE__ */ (0, s.jsx)("input", {
													type: "text",
													value: e.intro.stats.par,
													onChange: (e) => _("par", e.target.value),
													className: "w-full px-3 py-1 border rounded text-lg font-bold text-brand-blue"
												})] }),
												/* @__PURE__ */ (0, s.jsxs)("div", { children: [/* @__PURE__ */ (0, s.jsx)("label", {
													className: "block text-xs font-bold text-gray-500 uppercase mb-1",
													children: "Distance"
												}), /* @__PURE__ */ (0, s.jsx)("input", {
													type: "text",
													value: e.intro.stats.distance,
													onChange: (e) => _("distance", e.target.value),
													className: "w-full px-3 py-1 border rounded text-lg font-bold text-brand-blue"
												})] }),
												/* @__PURE__ */ (0, s.jsxs)("div", { children: [/* @__PURE__ */ (0, s.jsx)("label", {
													className: "block text-xs font-bold text-gray-500 uppercase mb-1",
													children: "Est. Time"
												}), /* @__PURE__ */ (0, s.jsx)("input", {
													type: "text",
													value: e.intro.stats.time,
													onChange: (e) => _("time", e.target.value),
													className: "w-full px-3 py-1 border rounded text-lg font-bold text-brand-blue"
												})] })
											]
										})]
									})]
								})]
							})]
						}),
						/* @__PURE__ */ (0, s.jsxs)("section", {
							className: "bg-white p-8 rounded-xl shadow-md border border-gray-100",
							children: [/* @__PURE__ */ (0, s.jsx)("h2", {
								className: "text-2xl font-cinzel text-brand-blue font-bold mb-6 pb-2 border-b border-gray-100 uppercase tracking-widest",
								children: "Gallery Call to Action"
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
											value: e.galleryCta.kicker,
											onChange: (e) => g("galleryCta", "kicker", e.target.value),
											className: "w-full px-4 py-2 border rounded focus:ring-2 focus:ring-brand-blue outline-none"
										})] }),
										/* @__PURE__ */ (0, s.jsxs)("div", { children: [/* @__PURE__ */ (0, s.jsx)("label", {
											className: "block text-sm font-bold text-gray-700 mb-1",
											children: "Title (use \\n for line breaks)"
										}), /* @__PURE__ */ (0, s.jsx)("input", {
											type: "text",
											value: e.galleryCta.title,
											onChange: (e) => g("galleryCta", "title", e.target.value),
											className: "w-full px-4 py-2 border rounded focus:ring-2 focus:ring-brand-blue outline-none"
										})] }),
										/* @__PURE__ */ (0, s.jsxs)("div", { children: [/* @__PURE__ */ (0, s.jsx)("label", {
											className: "block text-sm font-bold text-gray-700 mb-1",
											children: "Description"
										}), /* @__PURE__ */ (0, s.jsx)("textarea", {
											value: e.galleryCta.description,
											onChange: (e) => g("galleryCta", "description", e.target.value),
											className: "w-full px-4 py-2 border rounded h-24 focus:ring-2 focus:ring-brand-blue outline-none"
										})] })
									]
								}), /* @__PURE__ */ (0, s.jsx)(a, {
									label: "CTA Background Image",
									value: e.galleryCta.image,
									onSelect: (e) => g("galleryCta", "image", e)
								})]
							})]
						}),
						/* @__PURE__ */ (0, s.jsx)("div", {
							className: "flex justify-end pt-6",
							children: /* @__PURE__ */ (0, s.jsx)("button", {
								type: "submit",
								disabled: i,
								className: `px-12 py-4 bg-brand-blue text-white rounded font-montserrat font-bold uppercase tracking-widest shadow-lg transition-all transform hover:-translate-y-1 ${i ? "opacity-50 cursor-not-allowed" : "hover:bg-brand-yellow hover:text-brand-blue"}`,
								children: i ? "Saving Changes..." : "Save All Settings"
							})
						})
					]
				})
			]
		});
	};
}))();
export { c as default };
