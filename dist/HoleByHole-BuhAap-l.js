import { a as e, i as t, n, t as r } from "./jsx-runtime-sz-k696O.js";
import { n as i, t as a } from "./gsap-BGWbMvE-.js";
import { n as o, t as s } from "./ScrollTrigger-DMFg92O7.js";
//#region wp-content/themes/wingate/src/pages/HoleByHole.jsx
var c, l, u;
//#endregion
t((() => {
	c = /* @__PURE__ */ e(n()), i(), o(), l = r(), a.registerPlugin(s), u = () => {
		let e = (0, c.useRef)(null), t = (0, c.useRef)(null), n = (0, c.useRef)(null), [r, i] = (0, c.useState)(null), [o, s] = (0, c.useState)([]), [u, d] = (0, c.useState)(!0);
		(0, c.useEffect)(() => {
			(async () => {
				try {
					let e = window.wingateThemeData?.root || "/wp-json/", [t, n] = await Promise.all([fetch(`${e}wingate/v1/hole-by-hole`), fetch(`${e}wingate/v1/scorecard`)]);
					if (!t.ok || !n.ok) throw Error("Data fetch failed");
					let r = await t.json(), a = await n.json(), o = [...a.out || [], ...a.in || []], c = r.holes.map((e) => {
						let t = o.find((t) => t.hole === e.hole) || {};
						return {
							...e,
							number: e.hole,
							par: t.par || 0,
							index: t.si || 0,
							distance: t.white || 0
						};
					});
					i(r), s(c);
				} catch (e) {
					console.error("Error loading hole by hole data:", e);
				} finally {
					d(!1);
				}
			})();
		}, []), (0, c.useEffect)(() => {
			let r = a.context(() => {
				a.fromTo(".hero-title", {
					y: 50,
					opacity: 0
				}, {
					y: 0,
					opacity: 1,
					duration: 1,
					ease: "power3.out",
					delay: .2
				}), a.fromTo(".hero-subtitle", {
					y: 30,
					opacity: 0
				}, {
					y: 0,
					opacity: 1,
					duration: 1,
					ease: "power3.out",
					delay: .4
				});
			}, e), i = a.context(() => {
				a.fromTo(t.current, {
					opacity: 0,
					y: 50
				}, {
					opacity: 1,
					y: 0,
					duration: 1,
					scrollTrigger: {
						trigger: t.current,
						start: "top 80%",
						toggleActions: "play none none reverse"
					}
				});
			}, t), o = a.context(() => {
				a.fromTo(".gallery-item", {
					opacity: 0,
					y: 50
				}, {
					opacity: 1,
					y: 0,
					duration: .8,
					stagger: .1,
					ease: "power3.out",
					scrollTrigger: {
						trigger: n.current,
						start: "top 75%",
						toggleActions: "play none none reverse"
					}
				});
			}, n);
			return () => {
				r.revert(), i.revert(), o.revert();
			};
		}, []);
		let [f, p] = (0, c.useState)(null), m = (0, c.useRef)(null), h = (0, c.useRef)(null), g = (e) => {
			p(e);
		}, _ = () => {
			m.current && h.current ? a.timeline({ onComplete: () => p(null) }).to(h.current, {
				scale: .8,
				opacity: 0,
				duration: .3,
				ease: "power2.in"
			}).to(m.current, {
				opacity: 0,
				duration: .3
			}, "<") : p(null);
		};
		return (0, c.useEffect)(() => {
			f && m.current && h.current && a.timeline().fromTo(m.current, { opacity: 0 }, {
				opacity: 1,
				duration: .4,
				ease: "power2.out"
			}).fromTo(h.current, {
				scale: .8,
				opacity: 0,
				y: 20
			}, {
				scale: 1,
				opacity: 1,
				y: 0,
				duration: .5,
				ease: "back.out(1.2)"
			}, "-=0.2");
		}, [f]), (0, c.useEffect)(() => {
			let e = (e) => {
				e.key === "Escape" && _();
			};
			return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
		}, []), u || !r ? /* @__PURE__ */ (0, l.jsx)("div", {
			className: "min-h-screen flex items-center justify-center bg-brand-gray",
			children: /* @__PURE__ */ (0, l.jsx)("div", { className: "w-16 h-16 border-4 border-brand-blue border-t-brand-yellow rounded-full animate-spin" })
		}) : /* @__PURE__ */ (0, l.jsxs)("div", {
			className: "bg-brand-gray min-h-screen font-sans",
			children: [
				/* @__PURE__ */ (0, l.jsxs)("section", {
					ref: e,
					className: "relative h-screen flex items-center justify-center overflow-hidden",
					children: [
						/* @__PURE__ */ (0, l.jsxs)("div", {
							className: "absolute inset-0 z-0",
							children: [
								/* @__PURE__ */ (0, l.jsx)("img", {
									src: r.hero.backgroundImage,
									alt: "Course Hero",
									className: "w-full h-full object-cover transform scale-105 transition-transform duration-[20s] ease-linear hover:scale-100"
								}),
								/* @__PURE__ */ (0, l.jsx)("div", { className: "absolute inset-0 bg-brand-blue/35 mix-blend-multiply" }),
								/* @__PURE__ */ (0, l.jsx)("div", { className: "absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/45 to-transparent" }),
								/* @__PURE__ */ (0, l.jsx)("div", { className: "absolute inset-x-0 bottom-0 h-4 bg-gradient-to-t from-brand-gray to-transparent" })
							]
						}),
						/* @__PURE__ */ (0, l.jsxs)("div", {
							className: "relative z-10 text-center text-white px-4 max-w-4xl mx-auto",
							children: [
								/* @__PURE__ */ (0, l.jsx)("div", {
									className: "inline-block px-4 py-1 border border-brand-yellow/30 rounded-full mb-6 backdrop-blur-md bg-white/10",
									children: /* @__PURE__ */ (0, l.jsx)("span", {
										className: "text-brand-yellow text-xs font-bold tracking-[0.3em] uppercase",
										children: r.hero.kicker
									})
								}),
								/* @__PURE__ */ (0, l.jsx)("h1", {
									className: "hero-title text-5xl md:text-8xl font-cinzel font-bold mb-5 tracking-tight leading-none text-white drop-shadow-2xl",
									children: r.hero.title
								}),
								/* @__PURE__ */ (0, l.jsx)("div", { className: "w-24 h-1 bg-brand-yellow mx-auto mb-6" }),
								/* @__PURE__ */ (0, l.jsx)("p", {
									className: "hero-subtitle text-xl md:text-2xl font-montserrat font-light tracking-wide text-white/90 drop-shadow-md",
									children: r.hero.subtitle
								})
							]
						}),
						/* @__PURE__ */ (0, l.jsx)("div", {
							className: "absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white cursor-pointer",
							onClick: () => t.current?.scrollIntoView({ behavior: "smooth" }),
							children: /* @__PURE__ */ (0, l.jsx)("svg", {
								xmlns: "http://www.w3.org/2000/svg",
								className: "h-8 w-8",
								fill: "none",
								viewBox: "0 0 24 24",
								stroke: "currentColor",
								children: /* @__PURE__ */ (0, l.jsx)("path", {
									strokeLinecap: "round",
									strokeLinejoin: "round",
									strokeWidth: 2,
									d: "M19 14l-7 7m0 0l-7-7m7 7V3"
								})
							})
						})
					]
				}),
				/* @__PURE__ */ (0, l.jsxs)("section", {
					ref: t,
					className: "py-20 px-6 md:px-12 max-w-7xl mx-auto text-center",
					children: [
						/* @__PURE__ */ (0, l.jsx)("h2", {
							className: "text-3xl md:text-5xl font-cinzel text-brand-blue mb-8",
							children: r.intro.title
						}),
						/* @__PURE__ */ (0, l.jsx)("div", { className: "w-24 h-1 bg-golf-gold mx-auto mb-10" }),
						/* @__PURE__ */ (0, l.jsx)("div", {
							className: "text-lg md:text-xl font-merriweather text-gray-700 leading-relaxed max-w-4xl mx-auto whitespace-pre-line",
							children: r.intro.content
						})
					]
				}),
				/* @__PURE__ */ (0, l.jsx)("section", {
					ref: n,
					className: "py-12 px-4 md:px-8 max-w-7xl mx-auto mb-20",
					children: /* @__PURE__ */ (0, l.jsx)("div", {
						className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
						children: o.map((e) => /* @__PURE__ */ (0, l.jsxs)("div", {
							onClick: () => g(e),
							className: "gallery-item group relative bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 cursor-pointer",
							children: [/* @__PURE__ */ (0, l.jsxs)("div", {
								className: "h-64 overflow-hidden relative",
								children: [
									/* @__PURE__ */ (0, l.jsx)("img", {
										src: e.image,
										alt: `Hole ${e.number}`,
										className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
									}),
									/* @__PURE__ */ (0, l.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" }),
									/* @__PURE__ */ (0, l.jsxs)("div", {
										className: "absolute top-4 right-4 bg-golf-gold text-brand-blue font-bold px-3 py-1 rounded shadow-md font-cinzel",
										children: ["Hole ", e.number]
									}),
									/* @__PURE__ */ (0, l.jsx)("div", {
										className: "absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/90 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex justify-center",
										children: /* @__PURE__ */ (0, l.jsx)("span", {
											className: "text-white font-montserrat uppercase text-xs tracking-widest font-bold border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition-colors",
											children: "View Details"
										})
									})
								]
							}), /* @__PURE__ */ (0, l.jsxs)("div", {
								className: "p-6 relative",
								children: [/* @__PURE__ */ (0, l.jsxs)("div", {
									className: "flex justify-between items-center mb-4 border-b border-gray-100 pb-2",
									children: [
										/* @__PURE__ */ (0, l.jsxs)("div", {
											className: "text-center",
											children: [/* @__PURE__ */ (0, l.jsx)("span", {
												className: "block text-xs uppercase text-gray-500 font-bold tracking-wider",
												children: "Par"
											}), /* @__PURE__ */ (0, l.jsx)("span", {
												className: "text-xl font-cinzel font-bold text-brand-blue",
												children: e.par
											})]
										}),
										/* @__PURE__ */ (0, l.jsxs)("div", {
											className: "text-center",
											children: [/* @__PURE__ */ (0, l.jsx)("span", {
												className: "block text-xs uppercase text-gray-500 font-bold tracking-wider",
												children: "Index"
											}), /* @__PURE__ */ (0, l.jsx)("span", {
												className: "text-xl font-cinzel font-bold text-brand-blue",
												children: e.index
											})]
										}),
										/* @__PURE__ */ (0, l.jsxs)("div", {
											className: "text-center",
											children: [/* @__PURE__ */ (0, l.jsx)("span", {
												className: "block text-xs uppercase text-gray-500 font-bold tracking-wider",
												children: "Dist"
											}), /* @__PURE__ */ (0, l.jsxs)("span", {
												className: "text-xl font-cinzel font-bold text-brand-blue",
												children: [e.distance, "m"]
											})]
										})
									]
								}), /* @__PURE__ */ (0, l.jsx)("p", {
									className: "text-gray-600 font-opensans text-sm leading-relaxed mb-4 line-clamp-2",
									children: e.description
								})]
							})]
						}, e.number))
					})
				}),
				f && /* @__PURE__ */ (0, l.jsx)("div", {
					ref: m,
					className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm",
					onClick: _,
					children: /* @__PURE__ */ (0, l.jsxs)("div", {
						ref: h,
						className: "bg-white rounded-sm overflow-hidden shadow-2xl w-full max-w-6xl max-h-[90vh] flex flex-col md:flex-row",
						onClick: (e) => e.stopPropagation(),
						children: [/* @__PURE__ */ (0, l.jsxs)("div", {
							className: "w-full md:w-3/5 h-64 md:h-auto relative",
							children: [/* @__PURE__ */ (0, l.jsx)("img", {
								src: f.image,
								alt: `Hole ${f.number} Large`,
								className: "w-full h-full object-cover"
							}), /* @__PURE__ */ (0, l.jsxs)("div", {
								className: "absolute top-4 left-4 bg-brand-blue text-white px-4 py-2 rounded-sm shadow-lg",
								children: [/* @__PURE__ */ (0, l.jsx)("span", {
									className: "block text-xs font-montserrat uppercase tracking-wider opacity-75",
									children: "Hole"
								}), /* @__PURE__ */ (0, l.jsx)("span", {
									className: "text-4xl font-cinzel font-bold",
									children: f.number
								})]
							})]
						}), /* @__PURE__ */ (0, l.jsxs)("div", {
							className: "w-full md:w-2/5 p-8 md:p-12 flex flex-col justify-center bg-brand-gray relative text-center md:text-left",
							children: [
								/* @__PURE__ */ (0, l.jsx)("button", {
									onClick: _,
									className: "absolute top-4 right-4 text-gray-400 hover:text-brand-blue transition-colors z-10 p-2",
									children: /* @__PURE__ */ (0, l.jsx)("svg", {
										xmlns: "http://www.w3.org/2000/svg",
										className: "h-8 w-8",
										fill: "none",
										viewBox: "0 0 24 24",
										stroke: "currentColor",
										children: /* @__PURE__ */ (0, l.jsx)("path", {
											strokeLinecap: "round",
											strokeLinejoin: "round",
											strokeWidth: 2,
											d: "M6 18L18 6M6 6l12 12"
										})
									})
								}),
								/* @__PURE__ */ (0, l.jsx)("div", {
									className: "mb-8 border-b-2 border-golf-gold pb-4 inline-block mx-auto md:mx-0",
									children: /* @__PURE__ */ (0, l.jsx)("h3", {
										className: "text-4xl font-cinzel font-bold text-brand-blue tracking-wide uppercase",
										children: "Details"
									})
								}),
								/* @__PURE__ */ (0, l.jsxs)("div", {
									className: "flex justify-between gap-4 mb-8",
									children: [
										/* @__PURE__ */ (0, l.jsxs)("div", {
											className: "flex-1 text-center p-4 bg-white rounded-sm shadow-sm border border-gray-100 flex flex-col justify-center transition-transform hover:-translate-y-1 duration-300",
											children: [/* @__PURE__ */ (0, l.jsx)("span", {
												className: "block text-xs uppercase text-gray-500 font-bold tracking-wider mb-1",
												children: "Par"
											}), /* @__PURE__ */ (0, l.jsx)("span", {
												className: "text-3xl font-cinzel font-bold text-brand-blue",
												children: f.par
											})]
										}),
										/* @__PURE__ */ (0, l.jsxs)("div", {
											className: "flex-1 text-center p-4 bg-white rounded-sm shadow-sm border border-gray-100 flex flex-col justify-center transition-transform hover:-translate-y-1 duration-300",
											children: [/* @__PURE__ */ (0, l.jsx)("span", {
												className: "block text-xs uppercase text-gray-500 font-bold tracking-wider mb-1",
												children: "Index"
											}), /* @__PURE__ */ (0, l.jsx)("span", {
												className: "text-3xl font-cinzel font-bold text-brand-blue",
												children: f.index
											})]
										}),
										/* @__PURE__ */ (0, l.jsxs)("div", {
											className: "flex-1 text-center p-4 bg-white rounded-sm shadow-sm border border-gray-100 flex flex-col justify-center transition-transform hover:-translate-y-1 duration-300",
											children: [/* @__PURE__ */ (0, l.jsx)("span", {
												className: "block text-xs uppercase text-gray-500 font-bold tracking-wider mb-1",
												children: "Dist"
											}), /* @__PURE__ */ (0, l.jsxs)("span", {
												className: "text-2xl font-cinzel font-bold text-brand-blue whitespace-nowrap",
												children: [f.distance, "m"]
											})]
										})
									]
								}),
								/* @__PURE__ */ (0, l.jsx)("div", {
									className: "prose prose-lg text-gray-600 font-opensans mb-8 mx-auto md:mx-0 leading-relaxed",
									children: /* @__PURE__ */ (0, l.jsx)("p", { children: f.description })
								}),
								/* @__PURE__ */ (0, l.jsxs)("button", {
									className: "w-full py-4 bg-brand-blue text-white font-cinzel font-bold tracking-widest text-lg hover:bg-white hover:text-brand-blue border-2 border-transparent hover:border-brand-blue transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 rounded-sm flex items-center justify-center gap-3 group",
									children: [/* @__PURE__ */ (0, l.jsx)("span", { children: "Book Tee Time" }), /* @__PURE__ */ (0, l.jsx)("svg", {
										xmlns: "http://www.w3.org/2000/svg",
										className: "h-5 w-5 group-hover:translate-x-1 transition-transform",
										fill: "none",
										viewBox: "0 0 24 24",
										stroke: "currentColor",
										children: /* @__PURE__ */ (0, l.jsx)("path", {
											strokeLinecap: "round",
											strokeLinejoin: "round",
											strokeWidth: 2,
											d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
										})
									})]
								})
							]
						})]
					})
				})
			]
		});
	};
}))();
export { u as default };
