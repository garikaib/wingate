import { a as e, i as t, n, t as r } from "./jsx-runtime-sz-k696O.js";
import { n as i, t as a } from "./gsap-BGWbMvE-.js";
import { n as o, t as s } from "./ScrollTrigger-DMFg92O7.js";
import { P as c, W as l, ct as u, o as d, t as f, w as p } from "./lucide-react-DIY8CC7y.js";
//#region wp-content/themes/wingate/src/pages/Course.jsx
var m, h, g;
//#endregion
t((() => {
	m = /* @__PURE__ */ e(n()), i(), o(), f(), h = r(), a.registerPlugin(s), g = () => {
		let e = (0, m.useRef)(null), t = (0, m.useRef)(null);
		(0, m.useRef)(null);
		let n = (0, m.useRef)(null), [r, i] = (0, m.useState)(null), [o, s] = (0, m.useState)({
			out: [],
			in: []
		});
		(0, m.useEffect)(() => {
			(async () => {
				try {
					let e = await fetch("/wp-json/wingate/v1/course-settings");
					if (e.ok) {
						let t = await e.json();
						i(t);
					}
				} catch (e) {
					console.error("Failed to fetch course settings:", e);
				}
			})(), (async () => {
				try {
					let e = await fetch("/wp-json/wingate/v1/scorecard");
					if (e.ok) {
						let t = await e.json();
						s(t);
					}
				} catch (e) {
					console.error("Failed to fetch scorecard:", e);
				}
			})();
			let n = a.context(() => {
				a.from(t.current, {
					y: 100,
					opacity: 0,
					duration: 1.5,
					ease: "expo.out",
					delay: .2
				}), a.utils.toArray(".reveal-section").forEach((e) => {
					a.from(e, {
						y: 60,
						opacity: 0,
						duration: 1,
						ease: "power3.out",
						scrollTrigger: {
							trigger: e,
							start: "top 80%"
						}
					});
				}), a.from(".score-row", {
					x: -30,
					opacity: 0,
					duration: .8,
					stagger: .1,
					ease: "power2.out",
					scrollTrigger: {
						trigger: ".score-table",
						start: "top 75%"
					}
				});
			}, e);
			return () => n.revert();
		}, []);
		let f = r?.hero || {
			kicker: "Championship Layout",
			title: "The Course",
			backgroundImage: "/wp-content/uploads/2026/02/20260118_162436-scaled.jpg"
		}, g = r?.intro || {
			title: "Well Manicured & \nWooded Parkland",
			content: "Wingate Park Golf Club is an 18-hole, well-manicured, and wooded course founded 52 years ago. Located in the tranquil Pomona area of Harare, it offers a unique and challenging golfing experience with fairways lined with mature trees.\n\nDespite playing on these old style characteristics, the course is thoroughly modern in other ways. The 18th is a long par 4 requiring negotiation of water on all three shots.",
			image: "/wp-content/uploads/2026/02/20260118_131838-scaled.jpg",
			stats: {
				holes: "18",
				par: "72",
				distance: "6450m",
				time: "4.5 Hrs"
			}
		}, _ = r?.galleryCta || {
			kicker: "Visual Tour",
			title: "Experience the \n Beauty",
			description: "Explore our gallery to see the manicured fairways, challenging bunkers, and scenic water hazards that make Wingate Park truly unique.",
			image: "/wp-content/uploads/2026/02/20260126_140911-scaled.jpg",
			buttonText: "View Gallery",
			buttonUrl: "/gallery"
		}, v = o.out.length > 0 ? o.out : [
			{
				hole: 1,
				par: 4,
				white: 422,
				blue: 404,
				red: 329,
				si: 7
			},
			{
				hole: 2,
				par: 5,
				white: 467,
				blue: 459,
				red: 452,
				si: 5
			},
			{
				hole: 3,
				par: 3,
				white: 150,
				blue: 134,
				red: 122,
				si: 15
			},
			{
				hole: 4,
				par: 5,
				white: 469,
				blue: 418,
				red: 414,
				si: 13
			},
			{
				hole: 5,
				par: 4,
				white: 388,
				blue: 373,
				red: 298,
				si: 3
			},
			{
				hole: 6,
				par: 3,
				white: 191,
				blue: 174,
				red: 164,
				si: 11
			},
			{
				hole: 7,
				par: 4,
				white: 370,
				blue: 357,
				red: 349,
				si: 9
			},
			{
				hole: 8,
				par: 4,
				white: 337,
				blue: 324,
				red: 312,
				si: 17
			},
			{
				hole: 9,
				par: 4,
				white: 418,
				blue: 367,
				red: 335,
				si: 1
			}
		], y = o.in.length > 0 ? o.in : [
			{
				hole: 10,
				par: 5,
				white: 495,
				blue: 470,
				red: 462,
				si: 14
			},
			{
				hole: 11,
				par: 4,
				white: 386,
				blue: 372,
				red: 309,
				si: 6
			},
			{
				hole: 12,
				par: 5,
				white: 523,
				blue: 515,
				red: 445,
				si: 10
			},
			{
				hole: 13,
				par: 3,
				white: 182,
				blue: 156,
				red: 148,
				si: 16
			},
			{
				hole: 14,
				par: 4,
				white: 427,
				blue: 377,
				red: 349,
				si: 2
			},
			{
				hole: 15,
				par: 4,
				white: 389,
				blue: 374,
				red: 311,
				si: 12
			},
			{
				hole: 16,
				par: 4,
				white: 340,
				blue: 333,
				red: 328,
				si: 4
			},
			{
				hole: 17,
				par: 3,
				white: 141,
				blue: 132,
				red: 123,
				si: 18
			},
			{
				hole: 18,
				par: 4,
				white: 355,
				blue: 335,
				red: 316,
				si: 8
			}
		];
		return /* @__PURE__ */ (0, h.jsxs)("div", {
			className: "bg-white min-h-screen relative overflow-hidden font-montserrat",
			ref: e,
			children: [
				/* @__PURE__ */ (0, h.jsxs)("header", {
					className: "relative h-[85vh] flex items-center justify-center bg-brand-blue overflow-hidden",
					children: [
						/* @__PURE__ */ (0, h.jsx)("div", {
							className: "absolute inset-0 bg-cover bg-center",
							style: {
								backgroundImage: `url('${f.backgroundImage}')`,
								transform: "scale(1.1)"
							}
						}),
						/* @__PURE__ */ (0, h.jsx)("div", { className: "absolute inset-0 bg-brand-blue/30 mix-blend-multiply" }),
						/* @__PURE__ */ (0, h.jsx)("div", { className: "absolute inset-x-0 bottom-0 h-1 bg-gradient-to-t from-white to-transparent" }),
						/* @__PURE__ */ (0, h.jsx)("div", { className: "absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/40 to-transparent" }),
						/* @__PURE__ */ (0, h.jsxs)("div", {
							className: "relative z-10 text-center px-4 max-w-5xl mx-auto",
							children: [
								/* @__PURE__ */ (0, h.jsx)("div", {
									className: "inline-block px-4 py-1 border border-brand-yellow/30 rounded-full mb-6 backdrop-blur-md bg-white/10",
									children: /* @__PURE__ */ (0, h.jsx)("span", {
										className: "text-brand-yellow text-xs font-bold tracking-[0.3em] uppercase",
										children: f.kicker
									})
								}),
								/* @__PURE__ */ (0, h.jsx)("h1", {
									ref: t,
									className: "text-5xl md:text-8xl font-cinzel text-white mb-6 tracking-tight drop-shadow-2xl leading-none whitespace-pre-wrap",
									children: f.title
								}),
								/* @__PURE__ */ (0, h.jsx)("div", { className: "w-24 h-1 bg-brand-yellow mx-auto mb-8" })
							]
						})
					]
				}),
				/* @__PURE__ */ (0, h.jsx)("section", {
					className: "py-24 px-6 md:px-12 max-w-7xl mx-auto",
					children: /* @__PURE__ */ (0, h.jsxs)("div", {
						className: "grid grid-cols-1 lg:grid-cols-2 gap-16 items-center reveal-section",
						children: [/* @__PURE__ */ (0, h.jsxs)("div", { children: [
							/* @__PURE__ */ (0, h.jsx)("h2", {
								className: "text-4xl md:text-5xl font-cinzel text-brand-blue mb-8 leading-tight whitespace-pre-wrap",
								children: g.title
							}),
							/* @__PURE__ */ (0, h.jsx)("div", {
								className: "space-y-6 text-text-muted text-lg font-light leading-relaxed whitespace-pre-wrap",
								children: g.content
							}),
							/* @__PURE__ */ (0, h.jsxs)("div", {
								className: "grid grid-cols-2 gap-8 mt-12 bg-brand-blue/5 p-8 rounded-2xl border border-brand-blue/10",
								children: [
									/* @__PURE__ */ (0, h.jsxs)("div", { children: [/* @__PURE__ */ (0, h.jsxs)("div", {
										className: "flex items-center gap-3 mb-2 text-brand-blue",
										children: [/* @__PURE__ */ (0, h.jsx)(c, { size: 20 }), /* @__PURE__ */ (0, h.jsx)("span", {
											className: "font-bold text-sm uppercase tracking-widest",
											children: "Holes"
										})]
									}), /* @__PURE__ */ (0, h.jsx)("span", {
										className: "text-4xl font-cinzel font-bold text-brand-blue",
										children: g.stats.holes
									})] }),
									/* @__PURE__ */ (0, h.jsxs)("div", { children: [/* @__PURE__ */ (0, h.jsxs)("div", {
										className: "flex items-center gap-3 mb-2 text-brand-blue",
										children: [/* @__PURE__ */ (0, h.jsx)(d, { size: 20 }), /* @__PURE__ */ (0, h.jsx)("span", {
											className: "font-bold text-sm uppercase tracking-widest",
											children: "Par"
										})]
									}), /* @__PURE__ */ (0, h.jsx)("span", {
										className: "text-4xl font-cinzel font-bold text-brand-blue",
										children: g.stats.par
									})] }),
									/* @__PURE__ */ (0, h.jsxs)("div", { children: [/* @__PURE__ */ (0, h.jsxs)("div", {
										className: "flex items-center gap-3 mb-2 text-brand-blue",
										children: [/* @__PURE__ */ (0, h.jsx)(p, { size: 20 }), /* @__PURE__ */ (0, h.jsx)("span", {
											className: "font-bold text-sm uppercase tracking-widest",
											children: "Distance"
										})]
									}), /* @__PURE__ */ (0, h.jsx)("span", {
										className: "text-2xl font-cinzel font-bold text-brand-blue",
										children: g.stats.distance
									})] }),
									/* @__PURE__ */ (0, h.jsxs)("div", { children: [/* @__PURE__ */ (0, h.jsxs)("div", {
										className: "flex items-center gap-3 mb-2 text-brand-blue",
										children: [/* @__PURE__ */ (0, h.jsx)(l, { size: 20 }), /* @__PURE__ */ (0, h.jsx)("span", {
											className: "font-bold text-sm uppercase tracking-widest",
											children: "Est. Time"
										})]
									}), /* @__PURE__ */ (0, h.jsx)("span", {
										className: "text-2xl font-cinzel font-bold text-brand-blue",
										children: g.stats.time
									})] })
								]
							})
						] }), /* @__PURE__ */ (0, h.jsxs)("div", {
							className: "relative h-[600px] rounded-3xl overflow-hidden shadow-2xl group",
							children: [/* @__PURE__ */ (0, h.jsx)("div", {
								className: "absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105",
								style: { backgroundImage: `url('${g.image}')` }
							}), /* @__PURE__ */ (0, h.jsxs)("div", {
								className: "absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-xl p-8 rounded-xl border-l-4 border-brand-yellow shadow-lg",
								children: [/* @__PURE__ */ (0, h.jsx)("h3", {
									className: "font-cinzel text-xl text-brand-blue mb-2",
									children: "Designed for Strategy"
								}), /* @__PURE__ */ (0, h.jsx)("p", {
									className: "text-sm text-text-muted",
									children: "Every hole offers a new challenge, rewarding precision and strategy over pure power."
								})]
							})]
						})]
					})
				}),
				/* @__PURE__ */ (0, h.jsxs)("section", {
					className: "bg-brand-blue/5 py-24 px-4 md:px-12 relative overflow-hidden",
					children: [/* @__PURE__ */ (0, h.jsx)("div", { className: "absolute top-0 right-0 w-[500px] h-[500px] bg-brand-yellow/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" }), /* @__PURE__ */ (0, h.jsxs)("div", {
						className: "max-w-6xl mx-auto",
						children: [/* @__PURE__ */ (0, h.jsxs)("div", {
							className: "text-center mb-8 reveal-section",
							children: [
								/* @__PURE__ */ (0, h.jsx)("span", {
									className: "text-brand-yellow font-bold uppercase tracking-[0.3em] text-xs",
									children: "The Numbers"
								}),
								/* @__PURE__ */ (0, h.jsx)("h2", {
									className: "text-4xl md:text-5xl font-cinzel text-brand-blue mt-3 mb-6",
									children: "Course Scorecard"
								}),
								/* @__PURE__ */ (0, h.jsx)("p", {
									className: "font-cisalpin text-brand-blue/60 italic text-lg",
									children: "\"Forget your opponents; always play against par\" - Sam Snead"
								})
							]
						}), /* @__PURE__ */ (0, h.jsx)("div", {
							className: "bg-white rounded-3xl shadow-xl overflow-hidden border border-brand-blue/10 reveal-section score-table",
							children: /* @__PURE__ */ (0, h.jsx)("div", {
								className: "overflow-x-auto",
								children: /* @__PURE__ */ (0, h.jsxs)("table", {
									className: "w-full text-sm md:text-base min-w-[800px]",
									children: [/* @__PURE__ */ (0, h.jsx)("thead", {
										className: "bg-brand-blue text-white font-cinzel uppercase tracking-wider text-xs",
										children: /* @__PURE__ */ (0, h.jsxs)("tr", { children: [
											/* @__PURE__ */ (0, h.jsx)("th", {
												className: "py-4 px-6 text-left",
												children: "Hole"
											}),
											/* @__PURE__ */ (0, h.jsx)("th", {
												className: "py-4 px-4 bg-black/20 text-brand-yellow border-x border-brand-blue/20",
												children: "Par"
											}),
											/* @__PURE__ */ (0, h.jsx)("th", {
												className: "py-4 px-4",
												children: "White"
											}),
											/* @__PURE__ */ (0, h.jsx)("th", {
												className: "py-4 px-4",
												children: "Blue"
											}),
											/* @__PURE__ */ (0, h.jsx)("th", {
												className: "py-4 px-4 text-red-300",
												children: "Red"
											}),
											/* @__PURE__ */ (0, h.jsx)("th", {
												className: "py-4 px-6 text-right bg-black/20 text-brand-yellow border-l border-brand-blue/20",
												children: "Stroke"
											})
										] })
									}), /* @__PURE__ */ (0, h.jsxs)("tbody", {
										className: "divide-y divide-brand-blue/5",
										children: [
											v.map((e, t) => /* @__PURE__ */ (0, h.jsxs)("tr", {
												className: `score-row hover:bg-brand-blue/[0.02] transition-colors ${t % 2 == 0 ? "bg-brand-blue/[0.01]" : ""}`,
												children: [
													/* @__PURE__ */ (0, h.jsx)("td", {
														className: "py-4 px-6 font-bold text-brand-blue",
														children: e.hole
													}),
													/* @__PURE__ */ (0, h.jsx)("td", {
														className: "py-4 px-4 text-center font-bold bg-brand-yellow/[0.07] border-x border-brand-blue/5 text-brand-blue",
														children: e.par
													}),
													/* @__PURE__ */ (0, h.jsx)("td", {
														className: "py-4 px-4 text-center font-medium text-brand-blue",
														children: e.white
													}),
													/* @__PURE__ */ (0, h.jsx)("td", {
														className: "py-4 px-4 text-center font-light text-text-muted",
														children: e.blue
													}),
													/* @__PURE__ */ (0, h.jsx)("td", {
														className: "py-4 px-4 text-center font-light text-text-muted",
														children: e.red
													}),
													/* @__PURE__ */ (0, h.jsx)("td", {
														className: "py-4 px-6 text-right text-xs font-bold text-brand-blue bg-brand-yellow/[0.07] border-l border-brand-blue/5",
														children: e.si
													})
												]
											}, t)),
											/* @__PURE__ */ (0, h.jsxs)("tr", {
												className: "bg-brand-blue/10 font-bold text-brand-blue",
												children: [
													/* @__PURE__ */ (0, h.jsx)("td", {
														className: "py-4 px-6",
														children: "OUT"
													}),
													/* @__PURE__ */ (0, h.jsx)("td", {
														className: "py-4 px-4 text-center bg-brand-yellow/10 border-x border-brand-blue/5 text-brand-blue-dark",
														children: "36"
													}),
													/* @__PURE__ */ (0, h.jsx)("td", {
														className: "py-4 px-4 text-center",
														children: "3212"
													}),
													/* @__PURE__ */ (0, h.jsx)("td", {
														className: "py-4 px-4 text-center",
														children: "3010"
													}),
													/* @__PURE__ */ (0, h.jsx)("td", {
														className: "py-4 px-4 text-center",
														children: "2774"
													}),
													/* @__PURE__ */ (0, h.jsx)("td", { className: "py-4 px-6 bg-brand-yellow/10 border-l border-brand-blue/5" })
												]
											}),
											y.map((e, t) => /* @__PURE__ */ (0, h.jsxs)("tr", {
												className: `score-row hover:bg-brand-blue/[0.02] transition-colors ${t % 2 == 0 ? "bg-brand-blue/[0.01]" : ""}`,
												children: [
													/* @__PURE__ */ (0, h.jsx)("td", {
														className: "py-4 px-6 font-bold text-brand-blue",
														children: e.hole
													}),
													/* @__PURE__ */ (0, h.jsx)("td", {
														className: "py-4 px-4 text-center font-bold bg-brand-yellow/[0.07] border-x border-brand-blue/5 text-brand-blue",
														children: e.par
													}),
													/* @__PURE__ */ (0, h.jsx)("td", {
														className: "py-4 px-4 text-center font-medium text-brand-blue",
														children: e.white
													}),
													/* @__PURE__ */ (0, h.jsx)("td", {
														className: "py-4 px-4 text-center font-light text-text-muted",
														children: e.blue
													}),
													/* @__PURE__ */ (0, h.jsx)("td", {
														className: "py-4 px-4 text-center font-light text-text-muted",
														children: e.red
													}),
													/* @__PURE__ */ (0, h.jsx)("td", {
														className: "py-4 px-6 text-right text-xs font-bold text-brand-blue bg-brand-yellow/[0.07] border-l border-brand-blue/5",
														children: e.si
													})
												]
											}, t)),
											/* @__PURE__ */ (0, h.jsxs)("tr", {
												className: "bg-brand-blue/10 font-bold text-brand-blue border-t-2 border-brand-blue",
												children: [
													/* @__PURE__ */ (0, h.jsx)("td", {
														className: "py-5 px-6",
														children: "TOTAL"
													}),
													/* @__PURE__ */ (0, h.jsx)("td", {
														className: "py-5 px-4 text-center text-lg bg-brand-yellow/10 border-x border-brand-blue/5 border-b border-brand-blue/5 text-brand-blue-dark",
														children: "72"
													}),
													/* @__PURE__ */ (0, h.jsx)("td", {
														className: "py-5 px-4 text-center text-lg",
														children: "6450"
													}),
													/* @__PURE__ */ (0, h.jsx)("td", {
														className: "py-5 px-4 text-center text-lg",
														children: "6074"
													}),
													/* @__PURE__ */ (0, h.jsx)("td", {
														className: "py-5 px-4 text-center text-lg",
														children: "5565"
													}),
													/* @__PURE__ */ (0, h.jsx)("td", { className: "py-5 px-6 bg-brand-yellow/10 border-l border-brand-blue/5 border-b border-brand-blue/5" })
												]
											})
										]
									})]
								})
							})
						})]
					})]
				}),
				/* @__PURE__ */ (0, h.jsxs)("section", {
					ref: n,
					className: "relative py-32 px-6 overflow-hidden",
					children: [/* @__PURE__ */ (0, h.jsxs)("div", {
						className: "absolute inset-0 bg-brand-blue",
						children: [/* @__PURE__ */ (0, h.jsx)("div", {
							className: "absolute inset-0 opacity-40 mix-blend-overlay",
							style: {
								backgroundImage: `url('${_.image}')`,
								backgroundSize: "cover",
								backgroundPosition: "center"
							}
						}), /* @__PURE__ */ (0, h.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-brand-blue/90 to-brand-blue/40" })]
					}), /* @__PURE__ */ (0, h.jsxs)("div", {
						className: "relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12",
						children: [/* @__PURE__ */ (0, h.jsxs)("div", {
							className: "text-white max-w-2xl reveal-section",
							children: [
								/* @__PURE__ */ (0, h.jsx)("span", {
									className: "text-brand-yellow font-cinzel tracking-[0.2em] font-bold uppercase mb-4 block",
									children: _.kicker
								}),
								/* @__PURE__ */ (0, h.jsx)("h2", {
									className: "text-5xl md:text-6xl font-cinzel mb-6 leading-none whitespace-pre-wrap",
									children: _.title
								}),
								/* @__PURE__ */ (0, h.jsx)("p", {
									className: "text-white/80 text-lg font-light leading-relaxed max-w-xl",
									children: _.description
								})
							]
						}), /* @__PURE__ */ (0, h.jsx)("div", {
							className: "reveal-section",
							children: /* @__PURE__ */ (0, h.jsxs)("a", {
								href: _.buttonUrl,
								className: "group relative inline-flex items-center overflow-hidden rounded-sm bg-brand-yellow px-12 py-6 text-brand-blue no-underline hover:no-underline focus:no-underline font-cinzel font-bold tracking-widest uppercase transition-all duration-300 hover:bg-white hover:text-brand-blue shadow-2xl hover:shadow-brand-yellow/50",
								children: [/* @__PURE__ */ (0, h.jsx)("span", {
									className: "mr-4 text-lg",
									children: _.buttonText
								}), /* @__PURE__ */ (0, h.jsx)(u, { className: "transition-transform group-hover:translate-x-2" })]
							})
						})]
					})]
				})
			]
		});
	};
}))();
export { g as default };
