import { a as e, i as t, n, t as r } from "./jsx-runtime-sz-k696O.js";
import { n as i, t as a } from "./gsap-BGWbMvE-.js";
import { n as o, t as s } from "./ScrollTrigger-DMFg92O7.js";
import { H as c, X as l, i as u, m as d, t as f } from "./lucide-react-DIY8CC7y.js";
//#region wp-content/themes/wingate/src/pages/Rates.jsx
var p, m, h, g;
//#endregion
t((() => {
	p = /* @__PURE__ */ e(n()), i(), o(), f(), m = r(), a.registerPlugin(s), h = {
		hero: {
			kicker: "Private Experience",
			title: "Membership \n Subscriptions",
			subtitle: "Subs as from 1st January 2026",
			backgroundImage: ""
		},
		intro: {
			kicker: "The Investment",
			title: "Elite Access, \nCurated for You",
			content: ""
		},
		menRates: [],
		ladiesRates: [],
		allRates: [],
		cta: {
			title: "Elevate Your Game. \n Join the Legacy.",
			description: "",
			buttonText: "JOIN NOW",
			buttonUrl: "/membership",
			backgroundImage: ""
		}
	}, g = () => {
		let e = (0, p.useRef)(null), t = (0, p.useRef)(null), n = (0, p.useRef)(null), r = (0, p.useRef)(null), i = (0, p.useRef)(null), [o, s] = (0, p.useState)(null), [f, g] = (0, p.useState)(!0);
		(0, p.useEffect)(() => {
			(async () => {
				try {
					let e = window.wingateThemeData?.root || "/wp-json/", t = await fetch(`${e}wingate/v1/rates-settings`);
					if (!t.ok) throw Error("Data fetch failed");
					let n = await t.json();
					s(n);
				} catch (e) {
					console.error("Error loading rates data:", e);
				} finally {
					g(!1);
				}
			})();
		}, []), (0, p.useEffect)(() => {
			if (f || !o) return;
			let s = a.context(() => {
				n.current && a.from(n.current, {
					y: 100,
					opacity: 0,
					duration: 1.5,
					ease: "expo.out"
				}), i.current && t.current && a.to(i.current, {
					yPercent: 30,
					ease: "none",
					scrollTrigger: {
						trigger: t.current,
						start: "top top",
						end: "bottom top",
						scrub: !0
					}
				});
				let o = r.current?.querySelectorAll(".glass-card") || [];
				o.length && r.current && a.from(o, {
					y: 60,
					opacity: 0,
					duration: 1,
					stagger: .3,
					ease: "power3.out",
					scrollTrigger: {
						trigger: r.current,
						start: "top 75%"
					}
				});
				let s = e.current?.querySelectorAll(".floater") || [];
				s.length && a.to(s, {
					y: -20,
					duration: 2,
					repeat: -1,
					yoyo: !0,
					ease: "sine.inOut",
					stagger: .5
				});
			}, e);
			return () => s.revert();
		}, [f, o]);
		let _ = {
			hero: {
				...h.hero,
				...o?.hero && typeof o.hero == "object" ? o.hero : {}
			},
			intro: {
				...h.intro,
				...o?.intro && typeof o.intro == "object" ? o.intro : {}
			},
			menRates: Array.isArray(o?.menRates) ? o.menRates : h.menRates,
			ladiesRates: Array.isArray(o?.ladiesRates) ? o.ladiesRates : h.ladiesRates,
			allRates: Array.isArray(o?.allRates) ? o.allRates : h.allRates,
			cta: {
				...h.cta,
				...o?.cta && typeof o.cta == "object" ? o.cta : {}
			}
		}, v = ({ title: e, rates: t, columns: n, icon: r }) => /* @__PURE__ */ (0, m.jsxs)("div", {
			className: "glass-card mb-20 relative",
			children: [/* @__PURE__ */ (0, m.jsx)("div", { className: "absolute -top-10 -left-6 w-20 h-20 bg-brand-yellow/10 rounded-full blur-2xl -z-10" }), /* @__PURE__ */ (0, m.jsxs)("div", {
				className: "bg-white/90 backdrop-blur-xl border border-white/40 shadow-2xl rounded-2xl overflow-hidden p-8",
				children: [/* @__PURE__ */ (0, m.jsx)("div", {
					className: "flex items-center justify-between mb-8 border-b border-brand-blue/10 pb-6",
					children: /* @__PURE__ */ (0, m.jsxs)("div", {
						className: "flex items-center",
						children: [/* @__PURE__ */ (0, m.jsx)("div", {
							className: "bg-brand-blue/5 p-3 rounded-xl mr-5",
							children: /* @__PURE__ */ (0, m.jsx)(r, {
								size: 32,
								className: "text-brand-blue"
							})
						}), /* @__PURE__ */ (0, m.jsxs)("div", { children: [/* @__PURE__ */ (0, m.jsx)("h3", {
							className: "text-3xl font-cinzel text-brand-blue uppercase tracking-wider",
							children: e
						}), /* @__PURE__ */ (0, m.jsx)("div", { className: "w-12 h-1 bg-brand-yellow mt-1" })] })]
					})
				}), /* @__PURE__ */ (0, m.jsx)("div", {
					className: "overflow-x-auto",
					children: /* @__PURE__ */ (0, m.jsxs)("table", {
						className: "w-full text-left border-collapse min-w-[600px]",
						children: [/* @__PURE__ */ (0, m.jsx)("thead", { children: /* @__PURE__ */ (0, m.jsxs)("tr", {
							className: "text-brand-blue/50 font-cinzel text-xs uppercase tracking-[0.2em]",
							children: [
								/* @__PURE__ */ (0, m.jsx)("th", {
									className: "py-4 px-4 border-b border-brand-blue/5",
									children: "Category"
								}),
								/* @__PURE__ */ (0, m.jsx)("th", {
									className: "py-4 px-4 border-b border-brand-blue/5",
									children: "Description"
								}),
								n.map((e) => /* @__PURE__ */ (0, m.jsx)("th", {
									className: "py-4 px-4 border-b border-brand-blue/5 text-center",
									children: e
								}, e))
							]
						}) }), /* @__PURE__ */ (0, m.jsx)("tbody", {
							className: "font-montserrat text-sm",
							children: t.map((e, t) => /* @__PURE__ */ (0, m.jsxs)("tr", {
								className: "group hover:bg-brand-blue/[0.02] transition-colors border-b border-brand-blue/[0.03]",
								children: [
									/* @__PURE__ */ (0, m.jsx)("td", {
										className: "py-5 px-4 font-bold text-brand-blue group-hover:text-brand-yellow transition-colors",
										children: e.category
									}),
									/* @__PURE__ */ (0, m.jsx)("td", {
										className: "py-5 px-4 text-text-muted italic",
										children: e.desc
									}),
									e.annual ? /* @__PURE__ */ (0, m.jsxs)("td", {
										colSpan: n.length,
										className: "py-5 px-4 text-center font-bold text-brand-blue bg-brand-yellow/5 rounded-r-lg",
										children: [
											/* @__PURE__ */ (0, m.jsx)("span", {
												className: "text-brand-yellow mr-1",
												children: "$"
											}),
											e.annual,
											" ",
											/* @__PURE__ */ (0, m.jsx)("span", {
												className: "text-[10px] uppercase opacity-50 ml-1",
												children: "Annual"
											})
										]
									}) : e.flat ? /* @__PURE__ */ (0, m.jsxs)("td", {
										colSpan: n.length,
										className: "py-5 px-4 text-center font-bold text-brand-blue",
										children: [/* @__PURE__ */ (0, m.jsx)("span", {
											className: "text-brand-yellow mr-1",
											children: "$"
										}), e.flat]
									}) : /* @__PURE__ */ (0, m.jsxs)(m.Fragment, { children: [/* @__PURE__ */ (0, m.jsxs)("td", {
										className: "py-5 px-4 text-center font-bold text-brand-blue",
										children: [/* @__PURE__ */ (0, m.jsx)("span", {
											className: "text-xs opacity-40 mr-1",
											children: "$"
										}), e.quarterly]
									}), /* @__PURE__ */ (0, m.jsx)("td", {
										className: "py-5 px-4 text-center font-bold text-brand-blue text-lg",
										children: /* @__PURE__ */ (0, m.jsxs)("div", {
											className: "bg-brand-blue text-white px-3 py-1 rounded shadow-lg scale-95 group-hover:scale-105 transition-transform duration-300",
											children: [/* @__PURE__ */ (0, m.jsx)("span", {
												className: "text-xs text-brand-yellow mr-1",
												children: "$"
											}), e.monthly]
										})
									})] })
								]
							}, t))
						})]
					})
				})]
			})]
		});
		return /* @__PURE__ */ (0, m.jsxs)("div", {
			ref: e,
			className: "bg-white min-h-screen relative overflow-hidden",
			children: [
				/* @__PURE__ */ (0, m.jsxs)("div", {
					className: "absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10",
					children: [/* @__PURE__ */ (0, m.jsx)("div", { className: "floater absolute top-1/4 right-0 w-96 h-96 bg-brand-yellow/5 rounded-full blur-[100px]" }), /* @__PURE__ */ (0, m.jsx)("div", { className: "floater absolute bottom-1/4 -left-20 w-80 h-80 bg-brand-blue/5 rounded-full blur-[80px]" })]
				}),
				/* @__PURE__ */ (0, m.jsxs)("header", {
					ref: t,
					className: "relative h-[85vh] flex items-center justify-center bg-brand-blue overflow-hidden",
					children: [
						/* @__PURE__ */ (0, m.jsx)("div", {
							ref: i,
							className: "absolute inset-0 bg-cover bg-center",
							style: {
								backgroundImage: `url('${_.hero.backgroundImage}')`,
								transform: "scale(1.1)"
							}
						}),
						/* @__PURE__ */ (0, m.jsx)("div", { className: "absolute inset-0 bg-brand-blue/30" }),
						/* @__PURE__ */ (0, m.jsx)("div", { className: "absolute inset-x-0 bottom-0 h-4 bg-gradient-to-t from-white to-transparent" }),
						/* @__PURE__ */ (0, m.jsx)("div", { className: "absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/40 to-transparent" }),
						/* @__PURE__ */ (0, m.jsxs)("div", {
							className: "relative z-10 text-center px-4 max-w-5xl mx-auto",
							children: [
								/* @__PURE__ */ (0, m.jsx)("div", {
									className: "inline-block px-4 py-1 border border-brand-yellow/30 rounded-full mb-6 backdrop-blur-md bg-white/10",
									children: /* @__PURE__ */ (0, m.jsx)("span", {
										className: "text-brand-yellow text-xs font-bold tracking-[0.3em] uppercase",
										children: _.hero.kicker
									})
								}),
								/* @__PURE__ */ (0, m.jsx)("h1", {
									ref: n,
									className: "text-5xl md:text-8xl font-cinzel text-white mb-8 tracking-tighter drop-shadow-2xl leading-none whitespace-pre-line",
									children: _.hero.title
								}),
								/* @__PURE__ */ (0, m.jsxs)("div", {
									className: "flex flex-col items-center",
									children: [/* @__PURE__ */ (0, m.jsx)("div", { className: "w-24 h-1 bg-brand-yellow/50 mb-6" }), /* @__PURE__ */ (0, m.jsx)("p", {
										className: "text-sm md:text-lg text-white/90 font-montserrat tracking-[0.2em] uppercase font-light",
										children: _.hero.subtitle
									})]
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, m.jsxs)("main", {
					ref: r,
					className: "container mx-auto px-4 py-32 max-w-6xl relative",
					children: [
						/* @__PURE__ */ (0, m.jsxs)("div", {
							className: "flex flex-col lg:flex-row justify-between items-end mb-24 gap-12",
							children: [/* @__PURE__ */ (0, m.jsxs)("div", {
								className: "max-w-2xl",
								children: [
									/* @__PURE__ */ (0, m.jsx)("span", {
										className: "text-brand-yellow font-cinzel tracking-[0.4em] uppercase text-xs font-bold mb-4 block",
										children: _.intro.kicker
									}),
									/* @__PURE__ */ (0, m.jsx)("h2", {
										className: "text-5xl md:text-6xl font-cinzel text-brand-blue mb-8 leading-tight whitespace-pre-line",
										children: _.intro.title
									}),
									/* @__PURE__ */ (0, m.jsx)("p", {
										className: "text-text-muted font-montserrat text-lg leading-relaxed font-light whitespace-pre-line",
										children: _.intro.content
									})
								]
							}), /* @__PURE__ */ (0, m.jsx)("div", {
								className: "flex gap-4",
								children: /* @__PURE__ */ (0, m.jsxs)("div", {
									className: "bg-brand-blue p-8 rounded-2xl shadow-xl text-white transform hover:-translate-y-2 transition-transform duration-300",
									children: [
										/* @__PURE__ */ (0, m.jsx)(c, {
											className: "text-brand-yellow mb-4",
											size: 32
										}),
										/* @__PURE__ */ (0, m.jsx)("h4", {
											className: "font-cinzel text-lg mb-2",
											children: "Monthly Flexibility"
										}),
										/* @__PURE__ */ (0, m.jsx)("p", {
											className: "text-xs text-white/60 font-montserrat leading-relaxed",
											children: "Spreading your investment across equal monthly payments."
										})
									]
								})
							})]
						}),
						/* @__PURE__ */ (0, m.jsx)(v, {
							title: "Gentlemen",
							rates: _.menRates,
							columns: ["Quarterly", "Monthly"],
							icon: u
						}),
						/* @__PURE__ */ (0, m.jsx)(v, {
							title: "Ladies",
							rates: _.ladiesRates,
							columns: ["Quarterly", "Monthly"],
							icon: u
						}),
						/* @__PURE__ */ (0, m.jsx)(v, {
							title: "Admin & Extras",
							rates: _.allRates,
							columns: ["Amount"],
							icon: d
						}),
						/* @__PURE__ */ (0, m.jsxs)("div", {
							className: "relative mt-32 py-24 px-8 rounded-3xl overflow-hidden bg-brand-blue text-center group shadow-2xl",
							children: [
								/* @__PURE__ */ (0, m.jsx)("div", {
									className: "absolute inset-0 opacity-20 grayscale-0 group-hover:scale-110 transition-transform duration-1000",
									style: {
										backgroundImage: `url('${_.cta.backgroundImage}')`,
										backgroundSize: "cover"
									}
								}),
								/* @__PURE__ */ (0, m.jsx)("div", { className: "absolute inset-0 bg-gradient-to-br from-brand-blue via-brand-blue/90 to-black" }),
								/* @__PURE__ */ (0, m.jsxs)("div", {
									className: "relative z-10",
									children: [
										/* @__PURE__ */ (0, m.jsx)("h3", {
											className: "text-4xl md:text-5xl font-cinzel text-brand-yellow mb-8 tracking-widest leading-tight whitespace-pre-line",
											children: _.cta.title
										}),
										/* @__PURE__ */ (0, m.jsx)("p", {
											className: "text-white/70 font-montserrat mb-12 max-w-xl mx-auto text-lg font-light leading-relaxed",
											children: _.cta.description
										}),
										/* @__PURE__ */ (0, m.jsx)("div", {
											className: "flex flex-wrap justify-center gap-8",
											children: /* @__PURE__ */ (0, m.jsxs)("a", {
												href: _.cta.buttonUrl,
												className: "group flex items-center bg-brand-yellow text-brand-blue no-underline hover:no-underline focus:no-underline font-cinzel font-bold text-sm tracking-widest uppercase py-4 px-12 border border-brand-yellow hover:bg-white hover:border-white transition-all duration-300 rounded-sm shadow-xl shadow-brand-yellow/20",
												children: [
													_.cta.buttonText,
													" ",
													/* @__PURE__ */ (0, m.jsx)(l, {
														size: 18,
														className: "ml-3 group-hover:translate-x-2 transition-transform"
													})
												]
											})
										})
									]
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, m.jsx)("div", { className: "h-20 bg-gradient-to-t from-black/5 to-transparent lg:hidden" })
			]
		});
	};
}))();
export { g as default };
