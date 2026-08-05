import { a as e, i as t, n, t as r } from "./jsx-runtime-sz-k696O.js";
import { n as i, t as a } from "./gsap-BGWbMvE-.js";
import { n as o, t as s } from "./ScrollTrigger-DMFg92O7.js";
import { i as c, n as l, r as u, t as d } from "./ContactInfoStrip-Dyw1pIvD.js";
import { a as f, i as p, n as m, o as h, r as g, t as _ } from "./contactDetails-CaGjL2ZL.js";
//#region wp-content/themes/wingate/src/pages/Contact.jsx
var v, y, b, x, S, C, w, T, E, D, O, k;
//#endregion
t((() => {
	v = /* @__PURE__ */ e(n()), c(), l(), m(), i(), o(), y = r(), a.registerPlugin(s), b = {
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
	}, x = (e) => ({
		...b,
		...e,
		hero: {
			...b.hero,
			...e?.hero || {}
		},
		club: {
			...b.club,
			...e?.club || {}
		},
		cards: {
			...b.cards,
			...e?.cards || {}
		},
		location: {
			...b.location,
			...e?.location || {}
		},
		teamSection: {
			...b.teamSection,
			...e?.teamSection || {}
		},
		team: Array.isArray(e?.team) ? e.team.map((e) => ({
			...e,
			phoneType: e?.phoneType === "whatsapp" ? "whatsapp" : "tel"
		})) : b.team
	}), S = "mx-auto mb-4 h-14 w-14 transition-colors duration-300 group-hover:text-brand-yellow", C = ({ className: e = "" }) => /* @__PURE__ */ (0, y.jsx)("svg", {
		viewBox: "0 0 576 512",
		"aria-hidden": "true",
		className: e,
		fill: "currentColor",
		children: /* @__PURE__ */ (0, y.jsx)("path", { d: "M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 176c0 26.2-21.3 48.4-47.5 48.4h-113.9c-25.9 0-47-21.1-47-47v-96h-32v96c0 25.9-21.1 47-47 47H112c-26.2 0-48-21.8-48-48V287.6H32c-17.3 0-32-14.3-32-32.1 0-10 4.7-19.5 12.7-25.6L266.6 5.6c12-10 28.3-10.4 40.7 0l256 224.3c7.9 6.1 12.5 15.7 12.5 25.6z" })
	}), w = ({ className: e = "" }) => /* @__PURE__ */ (0, y.jsx)("svg", {
		viewBox: "0 0 512 512",
		"aria-hidden": "true",
		className: e,
		fill: "currentColor",
		children: /* @__PURE__ */ (0, y.jsx)("path", { d: "M64 112c-17.7 0-32 14.3-32 32v17.4l224 128 224-128V144c0-17.7-14.3-32-32-32H64zM480 208.3L272 327.1c-9.9 5.7-22.1 5.7-32 0L32 208.3V368c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32V208.3z" })
	}), T = ({ className: e = "" }) => /* @__PURE__ */ (0, y.jsx)("svg", {
		viewBox: "0 0 512 512",
		"aria-hidden": "true",
		className: e,
		fill: "currentColor",
		children: /* @__PURE__ */ (0, y.jsx)("path", { d: "M375.8 275.2c-16.5-16.5-42.3-18.6-61.2-5l-36.7 26.4c-6.9 5-16.2 4.2-22.2-1.8l-38.3-38.3c-6-6-6.8-15.3-1.8-22.2l26.4-36.7c13.6-18.9 11.5-44.7-5-61.2L184.7 84c-17.1-17.1-44.5-18.7-63.6-3.7L93.5 102C74.8 116.8 64 139.1 64 162.9c0 40.4 16 79.2 44.6 107.8l196.7 196.7C333.9 496 372.7 512 413.1 512c23.8 0 46.1-10.8 60.9-29.5l21.7-27.6c15-19.1 13.4-46.5-3.7-63.6l-116.2-116.1z" })
	}), E = ({ className: e = "" }) => /* @__PURE__ */ (0, y.jsx)("svg", {
		viewBox: "0 0 448 512",
		"aria-hidden": "true",
		className: e,
		fill: "currentColor",
		children: /* @__PURE__ */ (0, y.jsx)("path", { d: "M380.9 97.1C339 55.1 283.2 32 223.9 32 101.5 32 1.9 131.6 1.9 254c0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.5-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2s-9.7 1.4-14.8 6.9c-5.1 5.5-19.4 19-19.4 46.3s19.9 53.7 22.6 57.4c2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" })
	}), D = ({ className: e = "" }) => /* @__PURE__ */ (0, y.jsx)("svg", {
		viewBox: "0 0 320 512",
		"aria-hidden": "true",
		className: e,
		fill: "currentColor",
		children: /* @__PURE__ */ (0, y.jsx)("path", { d: "M279.1 288l14.2-92.7h-88.9v-60.1c0-25.3 12.4-50 52.2-50h40.4V6.3S260.4 0 225.4 0c-73.2 0-121.1 44.4-121.1 124.7v70.6H22.9V288h81.4v224h100.2V288h74.6z" })
	}), O = ({ className: e = "" }) => /* @__PURE__ */ (0, y.jsx)("svg", {
		viewBox: "0 0 448 512",
		"aria-hidden": "true",
		className: e,
		fill: "currentColor",
		children: /* @__PURE__ */ (0, y.jsx)("path", { d: "M224.1 141c-63.6 0-115 51.4-115 115s51.4 115 115 115 115-51.4 115-115-51.5-115-115-115zm0 189.6c-41.2 0-74.6-33.4-74.6-74.6s33.4-74.6 74.6-74.6 74.6 33.4 74.6 74.6-33.4 74.6-74.6 74.6zm146.4-194.3c0 14.9-12 26.9-26.9 26.9-14.9 0-26.9-12-26.9-26.9 0-14.9 12-26.9 26.9-26.9 14.9 0 26.9 12 26.9 26.9zm76.1 27.2c-1.7-35.3-9.7-66.7-35.5-92.5-25.8-25.8-57.2-33.8-92.5-35.5-36.5-2.1-145.9-2.1-182.4 0-35.3 1.7-66.7 9.7-92.5 35.5-25.8 25.8-33.8 57.2-35.5 92.5-2.1 36.5-2.1 145.9 0 182.4 1.7 35.3 9.7 66.7 35.5 92.5 25.8 25.8 57.2 33.8 92.5 35.5-36.5 2.1-145.9 2.1 182.4 0 35.3-1.7 66.7-9.7 92.5-35.5 25.8-25.8 33.8-57.2 35.5-92.5 2.1-36.5 2.1-145.8 0-182.4zm-48 221.8c-7.7 19.3-22.6 34.2-41.9 41.9-29 11.5-97.8 8.8-132.6 8.8s-103.7 2.7-132.6-8.8c-19.3-7.7-34.2-22.6-41.9-41.9-11.5-29-8.8-97.8-8.8-132.6s-2.7-103.7 8.8-132.6c7.7-19.3 22.6-34.2 41.9-41.9 29-11.5 97.8-8.8 132.6-8.8s103.7-2.7 132.6 8.8c19.3 7.7 34.2 22.6 41.9 41.9 11.5 29 8.8 97.8 8.8 132.6s2.8 103.7-8.8 132.6z" })
	}), k = () => {
		let e = _(), t = (0, v.useRef)(null), [n, r] = (0, v.useState)(b);
		return (0, v.useEffect)(() => {
			(async () => {
				try {
					let e = await fetch("/wp-json/wingate/v1/contact-page-settings");
					if (!e.ok) return;
					let t = await e.json();
					r(x(t));
				} catch {}
			})();
		}, []), (0, v.useEffect)(() => {
			let e = a.context(() => {
				a.from(".anim-hero-title", {
					y: 50,
					opacity: 0,
					duration: 1.2,
					ease: "power3.out"
				}), a.from(".anim-contact-card", {
					scrollTrigger: {
						trigger: ".cards-container",
						start: "top 80%"
					},
					y: 60,
					opacity: 0,
					duration: 1,
					stagger: .2,
					ease: "power2.out"
				}), a.from(".anim-map", {
					scrollTrigger: {
						trigger: ".anim-map-container",
						start: "top 75%"
					},
					scale: .95,
					opacity: 0,
					duration: 1.2,
					ease: "power2.out"
				}), a.fromTo(".anim-team-member", {
					y: 50,
					autoAlpha: 0
				}, {
					y: 0,
					autoAlpha: 1,
					duration: .8,
					stagger: .15,
					ease: "back.out(1.5)",
					immediateRender: !1,
					scrollTrigger: {
						trigger: ".team-container",
						start: "top 75%",
						once: !0
					}
				});
			}, t);
			return () => e.revert();
		}, []), /* @__PURE__ */ (0, y.jsxs)("div", {
			className: "w-full",
			ref: t,
			children: [
				/* @__PURE__ */ (0, y.jsxs)("section", {
					className: "relative h-[58vh] min-h-[420px] w-full overflow-hidden",
					children: [/* @__PURE__ */ (0, y.jsx)("div", {
						className: "absolute inset-0 bg-cover bg-center",
						style: { backgroundImage: `url('${n.hero.backgroundImage}')` },
						children: /* @__PURE__ */ (0, y.jsx)("div", { className: "absolute inset-0 bg-black/35" })
					}), /* @__PURE__ */ (0, y.jsx)("div", {
						className: "relative z-10 flex h-full items-center justify-center px-6 text-center",
						children: /* @__PURE__ */ (0, y.jsx)("h1", {
							className: "font-cinzel text-5xl font-bold tracking-wide text-white md:text-7xl anim-hero-title",
							children: n.hero.title
						})
					})]
				}),
				/* @__PURE__ */ (0, y.jsx)("section", {
					className: "bg-neutral-100 px-6 py-18 lg:px-10",
					children: /* @__PURE__ */ (0, y.jsxs)("div", {
						className: "mx-auto max-w-6xl",
						children: [
							/* @__PURE__ */ (0, y.jsx)("h2", {
								className: "mb-10 text-center font-cinzel text-4xl font-bold uppercase tracking-wide text-brand-blue md:text-5xl",
								children: n.club.title
							}),
							/* @__PURE__ */ (0, y.jsxs)("div", {
								className: "grid grid-cols-1 gap-6 md:grid-cols-3 cards-container",
								children: [
									/* @__PURE__ */ (0, y.jsxs)("a", {
										href: n.location.mapUrl,
										target: "_blank",
										rel: "noreferrer",
										className: "group block rounded-sm bg-white p-9 text-center shadow-sm transition-transform hover:-translate-y-1 anim-contact-card h-full",
										children: [
											/* @__PURE__ */ (0, y.jsx)(C, { className: `${S} text-brand-blue` }),
											/* @__PURE__ */ (0, y.jsx)("h3", {
												className: "mb-3 font-cinzel text-2xl font-bold uppercase tracking-wide text-brand-blue transition-colors duration-300 group-hover:text-brand-yellow",
												children: n.cards.findUsTitle
											}),
											/* @__PURE__ */ (0, y.jsx)("p", {
												className: "font-montserrat text-base text-slate-700 transition-colors duration-300 group-hover:text-brand-yellow",
												children: n.location.lineOne
											}),
											/* @__PURE__ */ (0, y.jsx)("p", {
												className: "font-montserrat text-base text-slate-700 transition-colors duration-300 group-hover:text-brand-yellow",
												children: n.location.lineTwo
											})
										]
									}),
									/* @__PURE__ */ (0, y.jsxs)("a", {
										href: g(e.email),
										className: "group block rounded-sm bg-white p-9 text-center shadow-sm transition-transform hover:-translate-y-1 anim-contact-card h-full",
										children: [
											/* @__PURE__ */ (0, y.jsx)(w, { className: `${S} text-brand-blue` }),
											/* @__PURE__ */ (0, y.jsx)("h3", {
												className: "mb-3 font-cinzel text-2xl font-bold uppercase tracking-wide text-brand-blue transition-colors duration-300 group-hover:text-brand-yellow",
												children: n.cards.emailTitle
											}),
											/* @__PURE__ */ (0, y.jsx)("p", {
												className: "font-montserrat text-base text-slate-700 transition-colors duration-300 group-hover:text-brand-yellow",
												children: e.email
											})
										]
									}),
									/* @__PURE__ */ (0, y.jsxs)("a", {
										href: f(e.phone, e.phoneType === "both" ? "tel" : e.phoneType),
										...h(e.phoneType === "both" ? "tel" : e.phoneType),
										className: "group block rounded-sm bg-white p-9 text-center shadow-sm transition-transform hover:-translate-y-1 anim-contact-card h-full",
										children: [
											e.phoneType === "whatsapp" ? /* @__PURE__ */ (0, y.jsx)(E, { className: `${S} text-brand-blue` }) : /* @__PURE__ */ (0, y.jsx)(T, { className: `${S} text-brand-blue` }),
											/* @__PURE__ */ (0, y.jsx)("h3", {
												className: "mb-3 font-cinzel text-2xl font-bold uppercase tracking-wide text-brand-blue transition-colors duration-300 group-hover:text-brand-yellow",
												children: e.phoneType === "whatsapp" ? "WHATSAPP ONLY" : e.phoneType === "both" ? "CALL / WHATSAPP" : n.cards.phoneTitle
											}),
											/* @__PURE__ */ (0, y.jsx)("p", {
												className: "font-montserrat text-base text-slate-700 transition-colors duration-300 group-hover:text-brand-yellow",
												children: e.phone
											})
										]
									})
								]
							}),
							/* @__PURE__ */ (0, y.jsxs)("div", {
								className: "mt-6 grid grid-cols-1 gap-6 md:grid-cols-2",
								children: [/* @__PURE__ */ (0, y.jsxs)("a", {
									href: e.facebook,
									...p(e.facebook),
									className: "group block rounded-sm bg-white p-9 text-center shadow-sm transition-transform hover:-translate-y-1 anim-contact-card h-full",
									children: [/* @__PURE__ */ (0, y.jsx)(D, { className: `${S} text-brand-blue` }), /* @__PURE__ */ (0, y.jsx)("h3", {
										className: "font-cinzel text-2xl font-bold uppercase tracking-wide text-brand-blue transition-colors duration-300 group-hover:text-brand-yellow",
										children: n.cards.socialTitle
									})]
								}), /* @__PURE__ */ (0, y.jsxs)("a", {
									href: e.instagram,
									...p(e.instagram),
									className: "group block rounded-sm bg-white p-9 text-center shadow-sm transition-transform hover:-translate-y-1 anim-contact-card h-full",
									children: [/* @__PURE__ */ (0, y.jsx)(O, { className: `${S} text-brand-blue` }), /* @__PURE__ */ (0, y.jsx)("h3", {
										className: "font-cinzel text-2xl font-bold uppercase tracking-wide text-brand-blue transition-colors duration-300 group-hover:text-brand-yellow",
										children: n.cards.socialTitle
									})]
								})]
							})
						]
					})
				}),
				/* @__PURE__ */ (0, y.jsxs)("section", {
					className: "bg-slate-100 py-16 anim-map-container",
					children: [/* @__PURE__ */ (0, y.jsx)("div", {
						className: "mx-auto max-w-6xl px-6 lg:px-10",
						children: /* @__PURE__ */ (0, y.jsx)("h2", {
							className: "mb-8 text-center font-cinzel text-4xl font-bold uppercase tracking-wide text-brand-blue",
							children: n.location.mapSectionTitle
						})
					}), /* @__PURE__ */ (0, y.jsx)("div", {
						className: "relative left-1/2 w-screen -translate-x-1/2",
						children: /* @__PURE__ */ (0, y.jsxs)("div", {
							className: "relative anim-map",
							children: [
								/* @__PURE__ */ (0, y.jsx)("iframe", {
									title: "Wingate Park Golf Club Location",
									src: n.location.mapEmbedUrl,
									className: "h-[560px] w-full",
									loading: "lazy",
									referrerPolicy: "no-referrer-when-downgrade"
								}),
								/* @__PURE__ */ (0, y.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-b from-brand-blue/25 via-golf-gold/10 to-slate-900/20" }),
								/* @__PURE__ */ (0, y.jsx)("div", { className: "pointer-events-none absolute inset-0 ring-1 ring-golf-gold/35" })
							]
						})
					})]
				}),
				/* @__PURE__ */ (0, y.jsxs)("section", {
					className: "relative overflow-hidden bg-gradient-to-b from-white via-[#f8f8f3] to-[#f2f1ea] px-6 py-20 lg:px-10 lg:py-24",
					children: [
						/* @__PURE__ */ (0, y.jsx)("div", { className: "pointer-events-none absolute -left-20 top-6 h-64 w-64 rounded-full bg-brand-yellow/15 blur-3xl" }),
						/* @__PURE__ */ (0, y.jsx)("div", { className: "pointer-events-none absolute -right-24 bottom-4 h-72 w-72 rounded-full bg-brand-blue/10 blur-3xl" }),
						/* @__PURE__ */ (0, y.jsxs)("div", {
							className: "mx-auto max-w-6xl",
							children: [/* @__PURE__ */ (0, y.jsxs)("div", {
								className: "mb-12 text-center",
								children: [/* @__PURE__ */ (0, y.jsx)("h2", {
									className: "font-cinzel text-4xl font-bold uppercase tracking-wide text-brand-blue md:text-5xl",
									children: n.teamSection.title
								}), /* @__PURE__ */ (0, y.jsx)("div", { className: "mx-auto mt-4 h-1 w-24 bg-brand-yellow" })]
							}), /* @__PURE__ */ (0, y.jsx)("div", {
								className: "grid grid-cols-1 gap-6 md:grid-cols-3 team-container",
								children: n.team.map((e, t) => /* @__PURE__ */ (0, y.jsxs)("article", {
									className: "group rounded-2xl border border-brand-blue/10 bg-white/90 px-7 py-9 text-center shadow-[0_18px_30px_rgba(14,27,61,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_36px_rgba(14,27,61,0.16)] anim-team-member",
									children: [
										/* @__PURE__ */ (0, y.jsxs)("h3", {
											className: "relative mb-6 inline-block font-cinzel text-[2rem] font-bold uppercase leading-tight tracking-wide text-brand-blue",
											children: [e.name, /* @__PURE__ */ (0, y.jsx)("span", { className: "absolute -bottom-3 left-1/2 h-[3px] w-14 -translate-x-1/2 bg-brand-yellow transition-all duration-300 group-hover:w-20" })]
										}),
										/* @__PURE__ */ (0, y.jsx)("p", {
											className: "mb-5 font-montserrat text-xs font-bold uppercase tracking-[0.22em] text-brand-blue/80",
											children: e.title
										}),
										/* @__PURE__ */ (0, y.jsxs)("div", {
											className: "space-y-2 font-montserrat text-base",
											children: [/* @__PURE__ */ (0, y.jsx)("p", { children: /* @__PURE__ */ (0, y.jsxs)("a", {
												href: e.phoneType === "whatsapp" ? f(e.phoneLabel, "whatsapp") : e.phoneHref || f(e.phoneLabel, "tel"),
												...h(e.phoneType === "whatsapp" ? "whatsapp" : "tel"),
												className: "inline-flex items-center justify-center gap-1.5 font-semibold text-slate-700 decoration-brand-yellow decoration-2 underline-offset-4 transition-colors hover:text-brand-blue",
												children: [e.phoneType === "whatsapp" ? /* @__PURE__ */ (0, y.jsx)(E, { className: "w-4 h-4 text-emerald-600 inline" }) : e.phoneType === "both" ? /* @__PURE__ */ (0, y.jsxs)("span", {
													className: "flex items-center gap-0.5",
													children: [/* @__PURE__ */ (0, y.jsx)(T, { className: "w-3.5 h-3.5 text-slate-500 inline" }), /* @__PURE__ */ (0, y.jsx)(E, { className: "w-3.5 h-3.5 text-emerald-600 inline" })]
												}) : /* @__PURE__ */ (0, y.jsx)(T, { className: "w-3.5 h-3.5 text-slate-500 inline" }), e.phoneLabel]
											}) }), /* @__PURE__ */ (0, y.jsx)("p", { children: /* @__PURE__ */ (0, y.jsx)("a", {
												href: `mailto:${e.email}`,
												className: "text-slate-700 decoration-brand-yellow decoration-2 underline-offset-4 transition-colors hover:text-brand-blue",
												children: e.email
											}) })]
										})
									]
								}, e.email || t))
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, y.jsx)(u, {}),
				/* @__PURE__ */ (0, y.jsx)(d, {})
			]
		});
	};
}))();
export { k as default };
