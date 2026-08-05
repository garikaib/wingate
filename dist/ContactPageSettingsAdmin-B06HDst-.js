import { a as e, i as t, n, t as r } from "./jsx-runtime-sz-k696O.js";
import { n as i, t as a } from "./MediaPicker-DEFEfwRu.js";
//#region wp-content/themes/wingate/src/pages/ContactPageSettingsAdmin.jsx
var o, s, c, l, u, d, f, p, m, h, g, _;
//#endregion
t((() => {
	o = /* @__PURE__ */ e(n()), i(), s = r(), c = "bg-white p-6 md:p-8 rounded-[2rem] shadow-xl border border-gray-100", l = "mb-6 pb-5 border-b border-gray-100", u = "text-2xl md:text-3xl font-cinzel font-bold uppercase tracking-wide text-brand-blue", d = "text-sm text-gray-500 font-montserrat mt-2", f = "block text-[11px] font-bold tracking-[0.16em] uppercase text-gray-600 mb-2", p = "w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50/70 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition", m = (e, t = "tel") => {
		let n = String(e || "").replace(/[^\d+]/g, "");
		if (t === "whatsapp") {
			let e = n.startsWith("+") ? n.slice(1).replace(/\D/g, "") : n.startsWith("0") ? `263${n.slice(1).replace(/\D/g, "")}` : n.replace(/\D/g, "");
			return e ? `https://wa.me/${e}` : "";
		}
		return n ? `tel:${n}` : "tel:";
	}, h = {
		hero: {
			title: "CONTACT US",
			backgroundImage: "/wp-content/uploads/2026/01/605410094_1291221263032055_7504380241267586286_n-scaled.jpg"
		},
		club: { title: "Wingate Park Golf Club" },
		cards: {
			findUsTitle: "Find Us",
			emailTitle: "Email Us",
			phoneTitle: "Call Us",
			socialTitle: "Follow Us"
		},
		location: {
			mapUrl: "https://maps.google.com/?q=Wingate+Park+Golf+Club",
			lineOne: "Alpes Road",
			lineTwo: "Harare, Zimbabwe",
			mapSectionTitle: "Find Us",
			mapEmbedUrl: "https://maps.google.com/maps?q=Wingate%20Park%20Golf%20Club%2C%20Harare&z=14&output=embed"
		},
		teamSection: { title: "Contact Team" },
		team: [
			{
				name: "Daryl Catterall",
				title: "Club Manager",
				phoneLabel: "0714681041",
				phoneHref: "tel:0714681041",
				phoneType: "tel",
				email: "daryl@wingate.co.zw"
			},
			{
				name: "D Kasiyandima",
				title: "Office Assistant Manager",
				phoneLabel: "0719339670",
				phoneHref: "tel:0719339670",
				phoneType: "tel",
				email: "functions@wingate.co.zw"
			},
			{
				name: "T Musiyakuvi",
				title: "Office Assistant Manager",
				phoneLabel: "0772339670",
				phoneHref: "tel:0772339670",
				phoneType: "tel",
				email: "reception@wingate.co.zw"
			}
		]
	}, g = (e) => ({
		...h,
		...e,
		hero: {
			...h.hero,
			...e?.hero || {}
		},
		club: {
			...h.club,
			...e?.club || {}
		},
		cards: {
			...h.cards,
			...e?.cards || {}
		},
		location: {
			...h.location,
			...e?.location || {}
		},
		teamSection: {
			...h.teamSection,
			...e?.teamSection || {}
		},
		team: Array.isArray(e?.team) ? e.team.map((e) => ({
			...e,
			phoneType: e?.phoneType === "whatsapp" ? "whatsapp" : "tel"
		})) : h.team
	}), _ = () => {
		let [e, t] = (0, o.useState)(h), [n, r] = (0, o.useState)(!0), [i, _] = (0, o.useState)(!1), [v, y] = (0, o.useState)({
			text: "",
			type: ""
		}), b = window.wingateAdminData?.root || "/wp-json/", x = window.wingateAdminData?.nonce || "", S = window.wingateAdminData?.adminUrl || "/wp-admin/admin.php";
		(0, o.useEffect)(() => {
			(async () => {
				r(!0);
				try {
					let e = await fetch(`${b}wingate/v1/contact-page-settings`);
					if (!e.ok) throw Error("Failed to fetch contact page settings");
					let n = await e.json();
					t(g(n));
				} catch (e) {
					y({
						text: "Error loading settings: " + e.message,
						type: "error"
					});
				} finally {
					r(!1);
				}
			})();
		}, [b]);
		let C = (e, n, r) => {
			t((t) => ({
				...t,
				[e]: {
					...t[e],
					[n]: r
				}
			}));
		}, w = (e, n, r) => {
			t((t) => {
				let i = [...t.team], a = {
					...i[e],
					[n]: r
				};
				return (n === "phoneLabel" || n === "phoneType") && (a.phoneHref = m(n === "phoneLabel" ? r : a.phoneLabel, n === "phoneType" ? r : a.phoneType)), i[e] = a, {
					...t,
					team: i
				};
			});
		}, T = () => {
			t((e) => ({
				...e,
				team: [...e.team, {
					name: "",
					title: "",
					phoneLabel: "",
					phoneHref: "tel:",
					phoneType: "tel",
					email: ""
				}]
			}));
		}, E = (e) => {
			t((t) => ({
				...t,
				team: t.team.filter((t, n) => n !== e)
			}));
		};
		return n ? /* @__PURE__ */ (0, s.jsx)("div", {
			className: "p-8",
			children: /* @__PURE__ */ (0, s.jsx)("p", {
				className: "animate-pulse text-gray-500 font-montserrat uppercase tracking-widest text-sm",
				children: "Loading contact page settings..."
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
							children: ["Contact Us ", /* @__PURE__ */ (0, s.jsx)("span", {
								className: "text-brand-yellow",
								children: "Page"
							})]
						}),
						/* @__PURE__ */ (0, s.jsx)("p", {
							className: "text-sm md:text-base text-gray-600 max-w-3xl",
							children: "Edit contact page-specific content. Shared phone, email, address, and social links are managed in Contact & Social."
						})
					]
				}),
				/* @__PURE__ */ (0, s.jsxs)("section", {
					className: "mb-8 rounded-2xl border border-brand-blue/15 bg-brand-blue/[0.03] px-5 py-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between",
					children: [/* @__PURE__ */ (0, s.jsx)("p", {
						className: "text-sm text-brand-blue/85 m-0",
						children: "Need to change global email, phone, address, Facebook, or Instagram?"
					}), /* @__PURE__ */ (0, s.jsx)("a", {
						href: `${S}?page=wingate-settings`,
						className: "inline-flex items-center justify-center rounded-xl bg-brand-blue px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white transition-colors hover:bg-brand-yellow hover:text-brand-blue",
						children: "Open Contact & Social"
					})]
				}),
				v.text && /* @__PURE__ */ (0, s.jsx)("div", {
					className: `mb-8 px-5 py-4 rounded-2xl border text-sm font-medium ${v.type === "error" ? "bg-red-50 border-red-200 text-red-700" : "bg-green-50 border-green-200 text-green-700"}`,
					children: v.text
				}),
				/* @__PURE__ */ (0, s.jsxs)("form", {
					onSubmit: async (t) => {
						t.preventDefault(), _(!0), y({
							text: "",
							type: ""
						});
						try {
							if (!(await fetch(`${b}wingate/v1/contact-page-settings`, {
								method: "POST",
								headers: {
									"Content-Type": "application/json",
									"X-WP-Nonce": x
								},
								body: JSON.stringify(e)
							})).ok) throw Error("Failed to save contact page settings");
							y({
								text: "Contact page settings saved.",
								type: "success"
							});
						} catch (e) {
							y({
								text: "Error saving settings: " + e.message,
								type: "error"
							});
						} finally {
							_(!1);
						}
					},
					className: "space-y-8",
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
									children: "Main hero title and background image."
								})]
							}), /* @__PURE__ */ (0, s.jsxs)("div", {
								className: "grid grid-cols-1 xl:grid-cols-[1fr_360px] gap-8",
								children: [/* @__PURE__ */ (0, s.jsxs)("div", { children: [/* @__PURE__ */ (0, s.jsx)("label", {
									className: f,
									children: "Hero Title"
								}), /* @__PURE__ */ (0, s.jsx)("input", {
									className: p,
									type: "text",
									value: e.hero.title,
									onChange: (e) => C("hero", "title", e.target.value)
								})] }), /* @__PURE__ */ (0, s.jsx)(a, {
									label: "Hero Background Image",
									value: e.hero.backgroundImage,
									onSelect: (e) => C("hero", "backgroundImage", e)
								})]
							})]
						}),
						/* @__PURE__ */ (0, s.jsxs)("section", {
							className: c,
							children: [/* @__PURE__ */ (0, s.jsxs)("div", {
								className: l,
								children: [/* @__PURE__ */ (0, s.jsx)("h2", {
									className: u,
									children: "Cards & Map Labels"
								}), /* @__PURE__ */ (0, s.jsx)("p", {
									className: d,
									children: "Card titles and location/map copy."
								})]
							}), /* @__PURE__ */ (0, s.jsxs)("div", {
								className: "grid grid-cols-1 md:grid-cols-2 gap-5",
								children: [
									/* @__PURE__ */ (0, s.jsxs)("div", { children: [/* @__PURE__ */ (0, s.jsx)("label", {
										className: f,
										children: "Club Heading"
									}), /* @__PURE__ */ (0, s.jsx)("input", {
										className: p,
										type: "text",
										value: e.club.title,
										onChange: (e) => C("club", "title", e.target.value)
									})] }),
									/* @__PURE__ */ (0, s.jsxs)("div", { children: [/* @__PURE__ */ (0, s.jsx)("label", {
										className: f,
										children: "Map Section Title"
									}), /* @__PURE__ */ (0, s.jsx)("input", {
										className: p,
										type: "text",
										value: e.location.mapSectionTitle,
										onChange: (e) => C("location", "mapSectionTitle", e.target.value)
									})] }),
									/* @__PURE__ */ (0, s.jsxs)("div", { children: [/* @__PURE__ */ (0, s.jsx)("label", {
										className: f,
										children: "Find Card Title"
									}), /* @__PURE__ */ (0, s.jsx)("input", {
										className: p,
										type: "text",
										value: e.cards.findUsTitle,
										onChange: (e) => C("cards", "findUsTitle", e.target.value)
									})] }),
									/* @__PURE__ */ (0, s.jsxs)("div", { children: [/* @__PURE__ */ (0, s.jsx)("label", {
										className: f,
										children: "Email Card Title"
									}), /* @__PURE__ */ (0, s.jsx)("input", {
										className: p,
										type: "text",
										value: e.cards.emailTitle,
										onChange: (e) => C("cards", "emailTitle", e.target.value)
									})] }),
									/* @__PURE__ */ (0, s.jsxs)("div", { children: [/* @__PURE__ */ (0, s.jsx)("label", {
										className: f,
										children: "Phone Card Title"
									}), /* @__PURE__ */ (0, s.jsx)("input", {
										className: p,
										type: "text",
										value: e.cards.phoneTitle,
										onChange: (e) => C("cards", "phoneTitle", e.target.value)
									})] }),
									/* @__PURE__ */ (0, s.jsxs)("div", { children: [/* @__PURE__ */ (0, s.jsx)("label", {
										className: f,
										children: "Social Card Title"
									}), /* @__PURE__ */ (0, s.jsx)("input", {
										className: p,
										type: "text",
										value: e.cards.socialTitle,
										onChange: (e) => C("cards", "socialTitle", e.target.value)
									})] }),
									/* @__PURE__ */ (0, s.jsxs)("div", { children: [/* @__PURE__ */ (0, s.jsx)("label", {
										className: f,
										children: "Location Line 1"
									}), /* @__PURE__ */ (0, s.jsx)("input", {
										className: p,
										type: "text",
										value: e.location.lineOne,
										onChange: (e) => C("location", "lineOne", e.target.value)
									})] }),
									/* @__PURE__ */ (0, s.jsxs)("div", { children: [/* @__PURE__ */ (0, s.jsx)("label", {
										className: f,
										children: "Location Line 2"
									}), /* @__PURE__ */ (0, s.jsx)("input", {
										className: p,
										type: "text",
										value: e.location.lineTwo,
										onChange: (e) => C("location", "lineTwo", e.target.value)
									})] }),
									/* @__PURE__ */ (0, s.jsxs)("div", { children: [/* @__PURE__ */ (0, s.jsx)("label", {
										className: f,
										children: "Find Us Link URL"
									}), /* @__PURE__ */ (0, s.jsx)("input", {
										className: p,
										type: "text",
										value: e.location.mapUrl,
										onChange: (e) => C("location", "mapUrl", e.target.value)
									})] }),
									/* @__PURE__ */ (0, s.jsxs)("div", { children: [/* @__PURE__ */ (0, s.jsx)("label", {
										className: f,
										children: "Map Embed URL"
									}), /* @__PURE__ */ (0, s.jsx)("input", {
										className: p,
										type: "text",
										value: e.location.mapEmbedUrl,
										onChange: (e) => C("location", "mapEmbedUrl", e.target.value)
									})] })
								]
							})]
						}),
						/* @__PURE__ */ (0, s.jsxs)("section", {
							className: c,
							children: [
								/* @__PURE__ */ (0, s.jsxs)("div", {
									className: l,
									children: [/* @__PURE__ */ (0, s.jsx)("h2", {
										className: u,
										children: "Team Section"
									}), /* @__PURE__ */ (0, s.jsx)("p", {
										className: d,
										children: "Edit the contact team cards displayed near the bottom of the page."
									})]
								}),
								/* @__PURE__ */ (0, s.jsxs)("div", {
									className: "mb-5",
									children: [/* @__PURE__ */ (0, s.jsx)("label", {
										className: f,
										children: "Team Section Title"
									}), /* @__PURE__ */ (0, s.jsx)("input", {
										className: p,
										type: "text",
										value: e.teamSection.title,
										onChange: (e) => C("teamSection", "title", e.target.value)
									})]
								}),
								/* @__PURE__ */ (0, s.jsx)("div", {
									className: "space-y-4",
									children: e.team.map((e, t) => /* @__PURE__ */ (0, s.jsxs)("article", {
										className: "rounded-2xl border border-gray-200 bg-gray-50/60 p-4 md:p-5",
										children: [/* @__PURE__ */ (0, s.jsxs)("div", {
											className: "flex items-center justify-between mb-4",
											children: [/* @__PURE__ */ (0, s.jsxs)("h3", {
												className: "text-lg font-cinzel font-bold uppercase text-brand-blue",
												children: ["Team Member ", t + 1]
											}), /* @__PURE__ */ (0, s.jsx)("button", {
												type: "button",
												onClick: () => E(t),
												className: "text-[11px] font-bold uppercase tracking-[0.16em] text-red-600 hover:text-red-700",
												children: "Remove"
											})]
										}), /* @__PURE__ */ (0, s.jsxs)("div", {
											className: "grid grid-cols-1 md:grid-cols-2 gap-4",
											children: [
												/* @__PURE__ */ (0, s.jsxs)("div", { children: [/* @__PURE__ */ (0, s.jsx)("label", {
													className: f,
													children: "Name"
												}), /* @__PURE__ */ (0, s.jsx)("input", {
													className: p,
													type: "text",
													value: e.name || "",
													onChange: (e) => w(t, "name", e.target.value)
												})] }),
												/* @__PURE__ */ (0, s.jsxs)("div", { children: [/* @__PURE__ */ (0, s.jsx)("label", {
													className: f,
													children: "Role"
												}), /* @__PURE__ */ (0, s.jsx)("input", {
													className: p,
													type: "text",
													value: e.title || "",
													onChange: (e) => w(t, "title", e.target.value)
												})] }),
												/* @__PURE__ */ (0, s.jsxs)("div", { children: [/* @__PURE__ */ (0, s.jsx)("label", {
													className: f,
													children: "Phone Label"
												}), /* @__PURE__ */ (0, s.jsx)("input", {
													className: p,
													type: "text",
													value: e.phoneLabel || "",
													onChange: (e) => w(t, "phoneLabel", e.target.value)
												})] }),
												/* @__PURE__ */ (0, s.jsxs)("div", { children: [/* @__PURE__ */ (0, s.jsx)("label", {
													className: f,
													children: "Phone Link Type"
												}), /* @__PURE__ */ (0, s.jsxs)("select", {
													className: p,
													value: e.phoneType === "whatsapp" ? "whatsapp" : "tel",
													onChange: (e) => w(t, "phoneType", e.target.value),
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
													children: "Generated Link"
												}), /* @__PURE__ */ (0, s.jsx)("input", {
													className: p,
													type: "text",
													value: e.phoneHref || m(e.phoneLabel, e.phoneType),
													onChange: (e) => w(t, "phoneHref", e.target.value)
												})] }),
												/* @__PURE__ */ (0, s.jsxs)("div", {
													className: "md:col-span-2",
													children: [/* @__PURE__ */ (0, s.jsx)("label", {
														className: f,
														children: "Email"
													}), /* @__PURE__ */ (0, s.jsx)("input", {
														className: p,
														type: "text",
														value: e.email || "",
														onChange: (e) => w(t, "email", e.target.value)
													})]
												})
											]
										})]
									}, `${e.email}-${t}`))
								}),
								/* @__PURE__ */ (0, s.jsx)("div", {
									className: "mt-5",
									children: /* @__PURE__ */ (0, s.jsx)("button", {
										type: "button",
										onClick: T,
										className: "inline-flex items-center justify-center rounded-xl border border-brand-blue px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-brand-blue transition-colors hover:bg-brand-blue hover:text-white",
										children: "Add Team Member"
									})
								})
							]
						}),
						/* @__PURE__ */ (0, s.jsx)("div", {
							className: "sticky bottom-3 z-30",
							children: /* @__PURE__ */ (0, s.jsxs)("div", {
								className: "rounded-2xl border border-gray-200 bg-white/95 backdrop-blur-sm px-4 py-3 md:px-5 md:py-4 shadow-xl flex items-center justify-between gap-4",
								children: [/* @__PURE__ */ (0, s.jsx)("p", {
									className: "text-xs md:text-sm text-gray-500 m-0",
									children: "Save to apply Contact Us page changes."
								}), /* @__PURE__ */ (0, s.jsx)("button", {
									type: "submit",
									disabled: i,
									className: `px-6 md:px-10 py-3 rounded-xl text-[11px] md:text-xs font-bold uppercase tracking-[0.18em] shadow-lg transition-all ${i ? "bg-brand-blue text-white opacity-50 cursor-not-allowed" : "bg-brand-blue text-white hover:bg-brand-yellow hover:text-brand-blue"}`,
									children: i ? "Saving..." : "Save Contact Page"
								})]
							})
						})
					]
				})
			]
		});
	};
}))();
export { _ as default };
