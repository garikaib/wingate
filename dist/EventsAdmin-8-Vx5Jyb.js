import { a as e, i as t, n, t as r } from "./jsx-runtime-sz-k696O.js";
//#region wp-content/themes/wingate/src/components/EventEditor.jsx
var i, a, o, s = t((() => {
	i = /* @__PURE__ */ e(n()), a = r(), o = ({ event: e, onClose: t, onSave: n }) => {
		let [r, o] = (0, i.useState)({
			id: 0,
			title: "",
			date: "",
			type: "tournament",
			description: ""
		});
		(0, i.useEffect)(() => {
			e && o({
				id: e.id,
				title: e.title || "",
				date: e.date || "",
				type: e.type || "tournament",
				description: e.description || "",
				groom: e.groom || "",
				bride: e.bride || "",
				reception: e.reception || "",
				is_private: e.is_private || !1,
				format: e.format || "",
				tee_off: e.tee_off || "",
				entry_fee: e.entry_fee || ""
			});
		}, [e]);
		let s = (e) => {
			let { name: t, value: n } = e.target;
			o((e) => ({
				...e,
				[t]: n
			}));
		};
		return /* @__PURE__ */ (0, a.jsx)("div", {
			className: "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm p-4",
			children: /* @__PURE__ */ (0, a.jsxs)("div", {
				className: "bg-white rounded-lg shadow-2xl w-full max-w-2xl overflow-hidden animate-fade-in-up",
				children: [/* @__PURE__ */ (0, a.jsxs)("div", {
					className: "bg-brand-blue p-6 flex justify-between items-center",
					children: [/* @__PURE__ */ (0, a.jsx)("h2", {
						className: "text-2xl font-cinzel text-white font-bold",
						children: e ? "Edit Event" : "New Event"
					}), /* @__PURE__ */ (0, a.jsx)("button", {
						onClick: t,
						className: "text-white hover:text-brand-yellow text-2xl",
						children: "×"
					})]
				}), /* @__PURE__ */ (0, a.jsxs)("form", {
					onSubmit: (e) => {
						e.preventDefault(), n(r);
					},
					className: "p-8 space-y-6",
					children: [
						/* @__PURE__ */ (0, a.jsxs)("div", { children: [/* @__PURE__ */ (0, a.jsx)("label", {
							className: "block text-sm font-bold text-gray-700 mb-2 font-montserrat uppercase tracking-wide",
							children: "Event Title"
						}), /* @__PURE__ */ (0, a.jsx)("input", {
							type: "text",
							name: "title",
							value: r.title,
							onChange: s,
							className: "w-full p-3 border border-gray-300 rounded focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition",
							placeholder: "e.g. Wingate Monthly Medal",
							required: !0
						})] }),
						/* @__PURE__ */ (0, a.jsxs)("div", {
							className: "grid grid-cols-1 md:grid-cols-2 gap-6",
							children: [/* @__PURE__ */ (0, a.jsxs)("div", { children: [/* @__PURE__ */ (0, a.jsx)("label", {
								className: "block text-sm font-bold text-gray-700 mb-2 font-montserrat uppercase tracking-wide",
								children: "Event Date"
							}), /* @__PURE__ */ (0, a.jsx)("input", {
								type: "date",
								name: "date",
								value: r.date,
								onChange: s,
								className: "w-full p-3 border border-gray-300 rounded focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition"
							})] }), /* @__PURE__ */ (0, a.jsxs)("div", { children: [/* @__PURE__ */ (0, a.jsx)("label", {
								className: "block text-sm font-bold text-gray-700 mb-2 font-montserrat uppercase tracking-wide",
								children: "Event Type"
							}), /* @__PURE__ */ (0, a.jsxs)("select", {
								name: "type",
								value: r.type,
								onChange: s,
								className: "w-full p-3 border border-gray-300 rounded focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition appearance-none bg-white",
								children: [
									/* @__PURE__ */ (0, a.jsx)("option", {
										value: "tournament",
										children: "Tournament"
									}),
									/* @__PURE__ */ (0, a.jsx)("option", {
										value: "wedding",
										children: "Wedding"
									}),
									/* @__PURE__ */ (0, a.jsx)("option", {
										value: "banquet",
										children: "Banquet"
									}),
									/* @__PURE__ */ (0, a.jsx)("option", {
										value: "social",
										children: "Social"
									})
								]
							})] })]
						}),
						r.type === "wedding" && /* @__PURE__ */ (0, a.jsxs)("div", {
							className: "bg-brand-gray/50 p-6 rounded-lg border border-gray-200 animate-fade-in-up",
							children: [
								/* @__PURE__ */ (0, a.jsx)("h3", {
									className: "text-brand-blue font-cinzel font-bold mb-4 uppercase text-sm tracking-wider border-b border-gray-300 pb-2",
									children: "Wedding Details"
								}),
								/* @__PURE__ */ (0, a.jsxs)("div", {
									className: "grid grid-cols-1 md:grid-cols-2 gap-4 mb-4",
									children: [/* @__PURE__ */ (0, a.jsxs)("div", { children: [/* @__PURE__ */ (0, a.jsx)("label", {
										className: "block text-xs font-bold text-gray-500 mb-1 font-montserrat uppercase",
										children: "Groom's Name"
									}), /* @__PURE__ */ (0, a.jsx)("input", {
										type: "text",
										name: "groom",
										value: r.groom || "",
										onChange: s,
										className: "w-full p-2 border border-gray-300 rounded focus:border-brand-blue outline-none",
										placeholder: "e.g. John"
									})] }), /* @__PURE__ */ (0, a.jsxs)("div", { children: [/* @__PURE__ */ (0, a.jsx)("label", {
										className: "block text-xs font-bold text-gray-500 mb-1 font-montserrat uppercase",
										children: "Bride's Name"
									}), /* @__PURE__ */ (0, a.jsx)("input", {
										type: "text",
										name: "bride",
										value: r.bride || "",
										onChange: s,
										className: "w-full p-2 border border-gray-300 rounded focus:border-brand-blue outline-none",
										placeholder: "e.g. Sarah"
									})] })]
								}),
								/* @__PURE__ */ (0, a.jsxs)("div", {
									className: "mb-4",
									children: [/* @__PURE__ */ (0, a.jsx)("label", {
										className: "block text-xs font-bold text-gray-500 mb-1 font-montserrat uppercase",
										children: "Reception Information"
									}), /* @__PURE__ */ (0, a.jsx)("input", {
										type: "text",
										name: "reception",
										value: r.reception || "",
										onChange: s,
										className: "w-full p-2 border border-gray-300 rounded focus:border-brand-blue outline-none",
										placeholder: "e.g. Main Hall, 6:00 PM"
									})]
								}),
								/* @__PURE__ */ (0, a.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, a.jsx)("input", {
										type: "checkbox",
										name: "is_private",
										checked: r.is_private || !1,
										onChange: (e) => o((t) => ({
											...t,
											is_private: e.target.checked
										})),
										id: "is_private_check",
										className: "accent-brand-blue w-4 h-4"
									}), /* @__PURE__ */ (0, a.jsx)("label", {
										htmlFor: "is_private_check",
										className: "text-sm font-bold text-gray-700 font-montserrat select-none cursor-pointer",
										children: "Make this event Private (Withhold details)"
									})]
								})
							]
						}),
						r.type === "tournament" && /* @__PURE__ */ (0, a.jsxs)("div", {
							className: "bg-brand-gray/50 p-6 rounded-lg border border-gray-200 animate-fade-in-up",
							children: [/* @__PURE__ */ (0, a.jsx)("h3", {
								className: "text-brand-blue font-cinzel font-bold mb-4 uppercase text-sm tracking-wider border-b border-gray-300 pb-2",
								children: "Tournament Details"
							}), /* @__PURE__ */ (0, a.jsxs)("div", {
								className: "grid grid-cols-1 md:grid-cols-2 gap-4",
								children: [
									/* @__PURE__ */ (0, a.jsxs)("div", { children: [/* @__PURE__ */ (0, a.jsx)("label", {
										className: "block text-xs font-bold text-gray-500 mb-1 font-montserrat uppercase",
										children: "Format"
									}), /* @__PURE__ */ (0, a.jsx)("input", {
										type: "text",
										name: "format",
										value: r.format || "",
										onChange: s,
										className: "w-full p-2 border border-gray-300 rounded focus:border-brand-blue outline-none",
										placeholder: "e.g. Individual Stableford"
									})] }),
									/* @__PURE__ */ (0, a.jsxs)("div", { children: [/* @__PURE__ */ (0, a.jsx)("label", {
										className: "block text-xs font-bold text-gray-500 mb-1 font-montserrat uppercase",
										children: "Entry Fee"
									}), /* @__PURE__ */ (0, a.jsx)("input", {
										type: "text",
										name: "entry_fee",
										value: r.entry_fee || "",
										onChange: s,
										className: "w-full p-2 border border-gray-300 rounded focus:border-brand-blue outline-none",
										placeholder: "e.g. $20 Members / $30 Visitors"
									})] }),
									/* @__PURE__ */ (0, a.jsxs)("div", {
										className: "md:col-span-2",
										children: [/* @__PURE__ */ (0, a.jsx)("label", {
											className: "block text-xs font-bold text-gray-500 mb-1 font-montserrat uppercase",
											children: "Tee Off Time"
										}), /* @__PURE__ */ (0, a.jsx)("input", {
											type: "text",
											name: "tee_off",
											value: r.tee_off || "",
											onChange: s,
											className: "w-full p-2 border border-gray-300 rounded focus:border-brand-blue outline-none",
											placeholder: "e.g. Morning Field 7:00am - 9:00am"
										})]
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, a.jsxs)("div", { children: [/* @__PURE__ */ (0, a.jsx)("label", {
							className: "block text-sm font-bold text-gray-700 mb-2 font-montserrat uppercase tracking-wide",
							children: "Description"
						}), /* @__PURE__ */ (0, a.jsx)("textarea", {
							name: "description",
							value: r.description,
							onChange: s,
							rows: "4",
							className: "w-full p-3 border border-gray-300 rounded focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition",
							placeholder: "Event details..."
						})] }),
						/* @__PURE__ */ (0, a.jsxs)("div", {
							className: "pt-4 flex justify-end gap-4 border-t border-gray-100 mt-6",
							children: [/* @__PURE__ */ (0, a.jsx)("button", {
								type: "button",
								onClick: t,
								className: "px-6 py-2 rounded text-gray-600 hover:text-gray-800 font-bold uppercase tracking-wide transition",
								children: "Cancel"
							}), /* @__PURE__ */ (0, a.jsx)("button", {
								type: "submit",
								className: "bg-brand-blue text-white px-8 py-2 rounded hover:bg-opacity-90 transition font-bold uppercase tracking-wide shadow-lg",
								children: "Save Event"
							})]
						})
					]
				})]
			})
		});
	};
})), c, l, u;
//#endregion
t((() => {
	c = /* @__PURE__ */ e(n()), s(), l = r(), u = () => {
		let [e, t] = (0, c.useState)([]), [n, r] = (0, c.useState)(!0), [i, a] = (0, c.useState)(!1), [s, u] = (0, c.useState)(null), [d, f] = (0, c.useState)(null), p = window.wingateEventsData?.root || "/wp-json/", m = window.wingateEventsData?.nonce || "", h = async () => {
			r(!0);
			try {
				let e = await fetch(`${p}wingate/v1/events`);
				if (!e.ok) throw Error("Failed to fetch events");
				let n = await e.json();
				t(n);
			} catch (e) {
				f(e.message);
			} finally {
				r(!1);
			}
		};
		(0, c.useEffect)(() => {
			h();
		}, []);
		let g = () => {
			u(null), a(!0);
		}, _ = (e) => {
			u(e), a(!0);
		};
		return /* @__PURE__ */ (0, l.jsxs)("div", {
			className: "wingate-admin-spa p-8 max-w-7xl mx-auto",
			children: [
				/* @__PURE__ */ (0, l.jsxs)("div", {
					className: "flex justify-between items-center mb-8",
					children: [/* @__PURE__ */ (0, l.jsx)("h1", {
						className: "text-3xl font-cinzel text-brand-blue font-bold",
						children: "Wingate Events Manager"
					}), /* @__PURE__ */ (0, l.jsx)("button", {
						onClick: g,
						className: "bg-brand-blue text-white px-6 py-3 rounded hover:bg-opacity-90 transition font-montserrat font-bold uppercase tracking-wider",
						children: "+ Add New Event"
					})]
				}),
				d && /* @__PURE__ */ (0, l.jsx)("div", {
					className: "bg-red-100 text-red-700 p-4 rounded mb-4",
					children: d
				}),
				n ? /* @__PURE__ */ (0, l.jsx)("div", {
					className: "text-center py-12",
					children: /* @__PURE__ */ (0, l.jsx)("p", {
						className: "text-gray-500 font-montserrat",
						children: "Loading events..."
					})
				}) : /* @__PURE__ */ (0, l.jsxs)("div", {
					className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
					children: [e.map((e) => /* @__PURE__ */ (0, l.jsxs)("div", {
						className: "bg-white p-6 rounded-lg shadow-md border-l-4 border-brand-yellow hover:shadow-xl transition relative group",
						children: [
							/* @__PURE__ */ (0, l.jsx)("div", {
								className: "absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition",
								children: /* @__PURE__ */ (0, l.jsx)("button", {
									onClick: () => _(e),
									className: "text-gray-400 hover:text-brand-blue",
									children: "Edit"
								})
							}),
							/* @__PURE__ */ (0, l.jsx)("span", {
								className: "inline-block bg-brand-gray text-xs font-bold px-2 py-1 rounded mb-2 uppercase tracking-wide text-gray-500",
								children: e.type || "Event"
							}),
							/* @__PURE__ */ (0, l.jsx)("h3", {
								className: "text-xl font-cinzel text-brand-blue font-bold mb-2",
								children: e.title
							}),
							/* @__PURE__ */ (0, l.jsx)("p", {
								className: "text-sm font-opensans text-gray-600 mb-4",
								children: e.date ? new Date(e.date).toLocaleDateString() : "No Date Set"
							})
						]
					}, e.id)), e.length === 0 && /* @__PURE__ */ (0, l.jsx)("div", {
						className: "col-span-full text-center py-12 bg-gray-50 rounded border border-dashed border-gray-300",
						children: /* @__PURE__ */ (0, l.jsx)("p", {
							className: "text-gray-500",
							children: "No events found. Create your first one!"
						})
					})]
				}),
				i && /* @__PURE__ */ (0, l.jsx)(o, {
					event: s,
					onClose: () => a(!1),
					onSave: async (e) => {
						try {
							if (!(await fetch(`${p}wingate/v1/events`, {
								method: "POST",
								headers: {
									"Content-Type": "application/json",
									"X-WP-Nonce": m
								},
								body: JSON.stringify(e)
							})).ok) throw Error("Failed to save event");
							await h(), a(!1);
						} catch (e) {
							alert("Error saving event: " + e.message);
						}
					}
				})
			]
		});
	};
}))();
export { u as default };
