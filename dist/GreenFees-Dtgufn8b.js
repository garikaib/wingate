import { a as e, i as t, n, t as r } from "./jsx-runtime-sz-k696O.js";
import { n as i, t as a } from "./gsap-BGWbMvE-.js";
import { n as o, t as s } from "./ScrollTrigger-DMFg92O7.js";
import { a as c, n as l, o as u } from "./contactDetails-CaGjL2ZL.js";
import { E as d, S as f, t as p } from "./lucide-react-DIY8CC7y.js";
//#region wp-content/themes/wingate/src/pages/GreenFees.jsx
var m, h, g, _;
//#endregion
t((() => {
	m = /* @__PURE__ */ e(n()), i(), o(), p(), l(), h = r(), a.registerPlugin(s), g = ({ size: e = 16 }) => /* @__PURE__ */ (0, h.jsx)("svg", {
		viewBox: "0 0 448 512",
		width: e,
		height: e,
		"aria-hidden": "true",
		fill: "currentColor",
		children: /* @__PURE__ */ (0, h.jsx)("path", { d: "M380.9 97.1C339 55.1 283.2 32 223.9 32 101.5 32 1.9 131.6 1.9 254c0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.5-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2s-9.7 1.4-14.8 6.9c-5.1 5.5-19.4 19-19.4 46.3s19.9 53.7 22.6 57.4c2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" })
	}), _ = () => {
		let e = (0, m.useRef)(null), t = (0, m.useRef)(null), [n, r] = (0, m.useState)(null), i = {
			hero: {
				kicker: "Championship Value",
				title: "Green Fees",
				titleHighlight: "Rates",
				subtitle: "Experience Championship Golf at Wingate Park",
				backgroundImage: "/wp-content/uploads/2026/02/20260131_124600-scaled.jpg"
			},
			intro: { content: "Wingate Park Golf Club offers a prestigious golfing experience accessible to all. Whether you are a seasoned affiliated player, a visitor, or a junior starting your journey, we welcome you to challenge yourself on our wooded fairways and pristine greens." },
			greenFees: [
				{
					category: "Affiliated",
					holes18: 20,
					holes9: 10
				},
				{
					category: "Non-Affiliated",
					holes18: 30,
					holes9: 15
				},
				{
					category: "Non-Residents",
					holes18: 60,
					holes9: 40
				},
				{
					category: "Seniors Affiliated",
					holes18: 10,
					holes9: 5
				},
				{
					category: "Seniors (Non-Members) 65-74yrs",
					holes18: 15,
					holes9: 10
				},
				{
					category: "Juniors",
					holes18: 5,
					holes9: 5
				},
				{
					category: "Students (with Valid Cards)",
					holes18: 15,
					holes9: 10
				},
				{
					category: "Over 75 Years",
					holes18: 10,
					holes9: 5
				},
				{
					category: "Mon/Tue/Thu AM \"Special\"",
					holes18: 10,
					holes9: 5
				}
			],
			cartHire: [
				{
					type: "High-Rider / 4-Seater",
					holes18: 40,
					holes9: 25
				},
				{
					type: "Standard Cart",
					holes18: 35,
					holes9: 20
				},
				{
					type: "Budget Carts",
					holes18: 30,
					holes9: 15
				},
				{
					type: "3-Wheeler (Trike)",
					holes18: 20,
					holes9: 12
				}
			],
			booking: {
				title: "Book Tee Time or Cart",
				description: "Ready to play? Contact the office to reserve your slot.",
				phone: "0772 339 670",
				phoneType: "tel",
				email: "reception@wingate.co.zw"
			},
			etiquette: {
				title: "Dress Code & Etiquette",
				description: "To ensure an enjoyable experience for all members and visitors, please adhere to our club's dress code and etiquette.",
				image: "/wp-content/uploads/2026/02/20260118_165728-scaled.jpg",
				items: [
					"Collared Shirts Required (No T-shirts)",
					"Shirts must be tucked into trousers or shorts",
					"Tailored shorts only (No rugby shorts)",
					"No denim jeans or denim shorts allowed",
					"Short white or \"hidden\" socks required"
				],
				buttonText: "Contact Us for More Info",
				buttonUrl: "/contact-us/"
			}
		};
		(0, m.useEffect)(() => {
			let n = a.context(() => {
				a.fromTo(".hero-content", {
					y: 50,
					opacity: 0
				}, {
					y: 0,
					opacity: 1,
					duration: 1,
					ease: "power3.out",
					delay: .2
				});
			}, e), r = a.context(() => {
				a.fromTo(".anim-section", {
					y: 50,
					opacity: 0
				}, {
					y: 0,
					opacity: 1,
					duration: .8,
					stagger: .2,
					ease: "power2.out",
					scrollTrigger: {
						trigger: t.current,
						start: "top 80%"
					}
				}), a.utils.toArray(".fees-table-card").forEach((e) => {
					a.fromTo(e, {
						y: 40,
						opacity: 0
					}, {
						y: 0,
						opacity: 1,
						duration: .9,
						ease: "power3.out",
						scrollTrigger: {
							trigger: e,
							start: "top 85%"
						}
					});
					let t = e.querySelectorAll(".fees-table-row");
					a.fromTo(t, {
						y: 16,
						opacity: 0
					}, {
						y: 0,
						opacity: 1,
						duration: .45,
						stagger: .08,
						ease: "power2.out",
						scrollTrigger: {
							trigger: e,
							start: "top 80%"
						}
					});
				});
			}, t);
			return () => {
				n.revert(), r.revert();
			};
		}, []), (0, m.useEffect)(() => {
			(async () => {
				try {
					let e = await fetch("/wp-json/wingate/v1/green-fees-settings");
					if (!e.ok) throw Error("Failed to fetch green fees settings");
					let t = await e.json();
					r(t);
				} catch (e) {
					console.error("Failed to fetch green fees settings:", e), r(i);
				}
			})();
		}, []);
		let o = n || i, s = o.greenFees || [], l = o.cartHire || [], p = o.booking?.phone || "", _ = o.booking?.phoneType === "whatsapp" ? "whatsapp" : "tel", v = o.booking?.email || "";
		return /* @__PURE__ */ (0, h.jsxs)("div", {
			className: "bg-brand-gray min-h-screen font-sans",
			children: [/* @__PURE__ */ (0, h.jsxs)("section", {
				ref: e,
				className: "relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden",
				children: [/* @__PURE__ */ (0, h.jsxs)("div", {
					className: "absolute inset-0 z-0",
					children: [
						/* @__PURE__ */ (0, h.jsx)("img", {
							src: o.hero.backgroundImage,
							alt: "Green Fees Hero",
							className: "w-full h-full object-cover"
						}),
						/* @__PURE__ */ (0, h.jsx)("div", { className: "absolute inset-0 bg-brand-blue/35 mix-blend-multiply" }),
						/* @__PURE__ */ (0, h.jsx)("div", { className: "absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/45 to-transparent" }),
						/* @__PURE__ */ (0, h.jsx)("div", { className: "absolute inset-x-0 bottom-0 h-4 bg-gradient-to-t from-brand-gray to-transparent" })
					]
				}), /* @__PURE__ */ (0, h.jsxs)("div", {
					className: "relative z-10 text-center text-white hero-content px-4",
					children: [
						/* @__PURE__ */ (0, h.jsx)("div", {
							className: "inline-block px-4 py-1 border border-brand-yellow/30 rounded-full mb-6 backdrop-blur-md bg-white/10",
							children: /* @__PURE__ */ (0, h.jsx)("span", {
								className: "text-brand-yellow text-xs font-bold tracking-[0.3em] uppercase",
								children: o.hero.kicker
							})
						}),
						/* @__PURE__ */ (0, h.jsxs)("h1", {
							className: "text-5xl md:text-7xl font-cinzel font-bold mb-4 tracking-tight leading-none text-white drop-shadow-2xl",
							children: [
								o.hero.title,
								" ",
								/* @__PURE__ */ (0, h.jsx)("span", {
									className: "text-brand-yellow",
									children: o.hero.titleHighlight
								})
							]
						}),
						/* @__PURE__ */ (0, h.jsx)("div", { className: "w-24 h-1 bg-brand-yellow mx-auto mb-6" }),
						/* @__PURE__ */ (0, h.jsx)("p", {
							className: "text-xl md:text-2xl font-montserrat font-light tracking-wide text-white/90",
							children: o.hero.subtitle
						})
					]
				})]
			}), /* @__PURE__ */ (0, h.jsxs)("div", {
				ref: t,
				className: "max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24",
				children: [
					/* @__PURE__ */ (0, h.jsx)("div", {
						className: "text-center mb-16 anim-section",
						children: /* @__PURE__ */ (0, h.jsx)("p", {
							className: "text-lg md:text-xl font-merriweather text-gray-700 leading-relaxed max-w-4xl mx-auto",
							children: o.intro.content
						})
					}),
					/* @__PURE__ */ (0, h.jsxs)("div", {
						className: "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16",
						children: [/* @__PURE__ */ (0, h.jsxs)("div", {
							className: "anim-section",
							children: [/* @__PURE__ */ (0, h.jsx)("h2", {
								className: "text-3xl font-cinzel text-brand-blue mb-6 border-l-4 border-brand-yellow pl-4",
								children: "Green Fees (USD)"
							}), /* @__PURE__ */ (0, h.jsx)("div", {
								className: "fees-table-card bg-white/95 backdrop-blur-sm rounded-sm shadow-xl overflow-hidden border border-brand-yellow/20 border-t-4 border-brand-blue",
								children: /* @__PURE__ */ (0, h.jsxs)("table", {
									className: "w-full",
									children: [/* @__PURE__ */ (0, h.jsx)("thead", {
										className: "bg-brand-blue text-white",
										children: /* @__PURE__ */ (0, h.jsxs)("tr", { children: [
											/* @__PURE__ */ (0, h.jsx)("th", {
												className: "py-4 px-4 text-left font-cinzel font-bold tracking-wider",
												children: "Category"
											}),
											/* @__PURE__ */ (0, h.jsx)("th", {
												className: "py-4 px-4 text-center font-cinzel font-bold tracking-wider",
												children: "18 Holes"
											}),
											/* @__PURE__ */ (0, h.jsx)("th", {
												className: "py-4 px-4 text-center font-cinzel font-bold tracking-wider",
												children: "9 Holes"
											})
										] })
									}), /* @__PURE__ */ (0, h.jsx)("tbody", {
										className: "divide-y divide-gray-100",
										children: s.map((e, t) => /* @__PURE__ */ (0, h.jsxs)("tr", {
											className: "fees-table-row hover:bg-brand-yellow/10 transition-colors",
											children: [
												/* @__PURE__ */ (0, h.jsx)("td", {
													className: "py-4 px-4 font-montserrat font-semibold text-gray-800 text-sm md:text-base",
													children: e.category
												}),
												/* @__PURE__ */ (0, h.jsxs)("td", {
													className: "py-4 px-4 text-center font-cinzel font-bold text-brand-blue text-lg",
													children: ["$", e.holes18]
												}),
												/* @__PURE__ */ (0, h.jsxs)("td", {
													className: "py-4 px-4 text-center font-cinzel font-bold text-brand-yellow text-lg",
													children: ["$", e.holes9]
												})
											]
										}, t))
									})]
								})
							})]
						}), /* @__PURE__ */ (0, h.jsxs)("div", {
							className: "anim-section",
							children: [
								/* @__PURE__ */ (0, h.jsx)("h2", {
									className: "text-3xl font-cinzel text-brand-blue mb-6 border-l-4 border-brand-yellow pl-4",
									children: "Cart Hire (USD)"
								}),
								/* @__PURE__ */ (0, h.jsx)("div", {
									className: "fees-table-card bg-white/95 backdrop-blur-sm rounded-sm shadow-xl overflow-hidden border border-brand-yellow/20 border-t-4 border-brand-blue mb-12",
									children: /* @__PURE__ */ (0, h.jsxs)("table", {
										className: "w-full",
										children: [/* @__PURE__ */ (0, h.jsx)("thead", {
											className: "bg-brand-blue text-white",
											children: /* @__PURE__ */ (0, h.jsxs)("tr", { children: [
												/* @__PURE__ */ (0, h.jsx)("th", {
													className: "py-4 px-4 text-left font-cinzel font-bold tracking-wider",
													children: "Cart Type"
												}),
												/* @__PURE__ */ (0, h.jsx)("th", {
													className: "py-4 px-4 text-center font-cinzel font-bold tracking-wider",
													children: "18 Holes"
												}),
												/* @__PURE__ */ (0, h.jsx)("th", {
													className: "py-4 px-4 text-center font-cinzel font-bold tracking-wider",
													children: "9 Holes"
												})
											] })
										}), /* @__PURE__ */ (0, h.jsx)("tbody", {
											className: "divide-y divide-gray-100",
											children: l.map((e, t) => /* @__PURE__ */ (0, h.jsxs)("tr", {
												className: "fees-table-row hover:bg-brand-yellow/10 transition-colors",
												children: [
													/* @__PURE__ */ (0, h.jsx)("td", {
														className: "py-4 px-4 font-montserrat font-semibold text-gray-800 text-sm md:text-base",
														children: e.type
													}),
													/* @__PURE__ */ (0, h.jsxs)("td", {
														className: "py-4 px-4 text-center font-cinzel font-bold text-brand-blue text-lg",
														children: ["$", e.holes18]
													}),
													/* @__PURE__ */ (0, h.jsxs)("td", {
														className: "py-4 px-4 text-center font-cinzel font-bold text-brand-yellow text-lg",
														children: ["$", e.holes9]
													})
												]
											}, t))
										})]
									})
								}),
								/* @__PURE__ */ (0, h.jsxs)("div", {
									className: "bg-brand-blue text-white p-5 md:p-6 rounded-sm shadow-lg anim-section relative overflow-hidden group",
									children: [
										/* @__PURE__ */ (0, h.jsx)("div", { className: "absolute top-0 right-0 w-32 h-32 bg-brand-yellow/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-yellow/30 transition-all duration-500" }),
										/* @__PURE__ */ (0, h.jsx)("h3", {
											className: "text-xl md:text-2xl font-cinzel font-bold mb-2 relative z-10 text-left",
											children: o.booking?.title
										}),
										/* @__PURE__ */ (0, h.jsx)("p", {
											className: "font-montserrat text-sm md:text-base mb-4 text-gray-200 relative z-10 text-left",
											children: o.booking?.description
										}),
										/* @__PURE__ */ (0, h.jsxs)("div", {
											className: "relative z-10 flex flex-col gap-2",
											children: [/* @__PURE__ */ (0, h.jsxs)("a", {
												href: c(p, _),
												...u(_),
												className: "group inline-flex items-center gap-3 rounded-sm border border-white/20 bg-white/5 px-4 py-2.5 text-white !no-underline hover:!no-underline focus:!no-underline transition-colors hover:border-brand-yellow hover:bg-white/10",
												children: [/* @__PURE__ */ (0, h.jsx)("span", {
													className: "flex h-8 w-8 items-center justify-center rounded-full bg-brand-yellow text-brand-blue",
													children: _ === "whatsapp" ? /* @__PURE__ */ (0, h.jsx)(g, { size: 16 }) : /* @__PURE__ */ (0, h.jsx)(f, { size: 16 })
												}), /* @__PURE__ */ (0, h.jsxs)("span", {
													className: "font-montserrat text-sm font-semibold leading-tight",
													children: ["Reception ", p]
												})]
											}), /* @__PURE__ */ (0, h.jsxs)("a", {
												href: `mailto:${v}`,
												className: "group inline-flex items-center gap-3 rounded-sm border border-white/20 bg-white/5 px-4 py-2.5 text-white !no-underline hover:!no-underline focus:!no-underline transition-colors hover:border-brand-yellow hover:bg-white/10",
												children: [/* @__PURE__ */ (0, h.jsx)("span", {
													className: "flex h-8 w-8 items-center justify-center rounded-full bg-brand-yellow text-brand-blue",
													children: /* @__PURE__ */ (0, h.jsx)(d, { size: 16 })
												}), /* @__PURE__ */ (0, h.jsx)("span", {
													className: "font-montserrat text-[13px] md:text-sm font-semibold leading-tight whitespace-nowrap",
													children: v
												})]
											})]
										})
									]
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, h.jsx)("div", {
						className: "mt-20 anim-section",
						children: /* @__PURE__ */ (0, h.jsxs)("div", {
							className: "grid grid-cols-1 md:grid-cols-2 gap-12 items-start",
							children: [/* @__PURE__ */ (0, h.jsx)("div", { children: /* @__PURE__ */ (0, h.jsx)("img", {
								src: o.etiquette?.image,
								alt: "Golf Etiquette",
								className: "rounded-sm shadow-2xl w-full h-[360px] md:h-[520px] object-cover object-bottom"
							}) }), /* @__PURE__ */ (0, h.jsxs)("div", { children: [
								/* @__PURE__ */ (0, h.jsx)("h2", {
									className: "text-3xl font-cinzel text-brand-blue mb-6 border-l-4 border-brand-yellow pl-4",
									children: o.etiquette?.title
								}),
								/* @__PURE__ */ (0, h.jsx)("p", {
									className: "font-montserrat text-gray-600 mb-6 leading-relaxed",
									children: o.etiquette?.description
								}),
								/* @__PURE__ */ (0, h.jsx)("ul", {
									className: "space-y-4 font-montserrat text-gray-700",
									children: (o.etiquette?.items || []).map((e, t) => /* @__PURE__ */ (0, h.jsxs)("li", {
										className: "flex items-start gap-3",
										children: [/* @__PURE__ */ (0, h.jsx)("span", {
											className: "text-brand-yellow mt-1",
											children: /* @__PURE__ */ (0, h.jsx)("svg", {
												xmlns: "http://www.w3.org/2000/svg",
												className: "h-5 w-5",
												viewBox: "0 0 20 20",
												fill: "currentColor",
												children: /* @__PURE__ */ (0, h.jsx)("path", {
													fillRule: "evenodd",
													d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
													clipRule: "evenodd"
												})
											})
										}), e]
									}, t))
								}),
								/* @__PURE__ */ (0, h.jsx)("div", {
									className: "mt-8",
									children: /* @__PURE__ */ (0, h.jsx)("a", {
										href: o.etiquette?.buttonUrl,
										className: "inline-block bg-brand-blue !text-white visited:!text-white !no-underline hover:!no-underline focus:!no-underline font-cinzel font-bold uppercase tracking-widest px-8 py-3 rounded-sm border border-brand-blue hover:bg-brand-yellow hover:!text-brand-blue hover:border-brand-yellow transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1",
										children: o.etiquette?.buttonText
									})
								})
							] })]
						})
					})
				]
			})]
		});
	};
}))();
export { _ as default };
