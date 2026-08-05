import { a as e, i as t, n, t as r } from "./jsx-runtime-sz-k696O.js";
import { n as i, t as a } from "./gsap-BGWbMvE-.js";
import { n as o, t as s } from "./ScrollTrigger-DMFg92O7.js";
import { ct as c, i as l, it as u, t as d } from "./lucide-react-DIY8CC7y.js";
//#region wp-content/themes/wingate/src/pages/HandicapLanding.jsx
function f({ gender: e = "men", title: t = "Men's Handicap", oppositeUrl: n = "/ladies-handicap/" }) {
	let r = (0, p.useRef)(null), [i, o] = (0, p.useState)([]), [s, d] = (0, p.useState)(!0);
	(0, p.useEffect)(() => {
		(async () => {
			d(!0);
			try {
				let t = await (await fetch(`/wp-json/wingate-tools/v1/handicaps/public?gender=${e}`)).json();
				o(Array.isArray(t?.items) ? t.items : []);
			} catch {
				o([]);
			} finally {
				d(!1);
			}
		})();
	}, [e]), (0, p.useEffect)(() => {
		let e = a.context(() => {
			a.timeline().from(".handicap-land-kicker", {
				y: 18,
				opacity: 0,
				duration: .5,
				ease: "power2.out"
			}).from(".handicap-land-title", {
				y: 28,
				opacity: 0,
				duration: .75,
				ease: "power3.out"
			}, "-=0.15").from(".handicap-land-sub", {
				y: 18,
				opacity: 0,
				duration: .55,
				ease: "power2.out"
			}, "-=0.3");
			let e = r.current?.querySelector(".handicap-featured-card");
			e && a.fromTo(e, {
				y: 32,
				autoAlpha: 0
			}, {
				y: 0,
				autoAlpha: 1,
				duration: .7,
				ease: "power2.out",
				delay: .08,
				clearProps: "transform,opacity,visibility"
			});
			let t = r.current?.querySelectorAll(".handicap-land-card");
			t?.length && a.fromTo(t, {
				y: 18,
				autoAlpha: 0
			}, {
				y: 0,
				autoAlpha: 1,
				duration: .55,
				stagger: .08,
				ease: "power2.out",
				delay: .12,
				clearProps: "transform,opacity,visibility"
			});
		}, r);
		return () => e.revert();
	}, [i.length, s]);
	let f = i[0] || null, h = (0, p.useMemo)(() => i.slice(1), [i]);
	return /* @__PURE__ */ (0, m.jsxs)("div", {
		ref: r,
		className: "min-h-screen bg-brand-gray pb-16",
		children: [/* @__PURE__ */ (0, m.jsxs)("section", {
			className: "relative overflow-hidden bg-brand-blue text-white",
			children: [
				/* @__PURE__ */ (0, m.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,204,0,0.12),transparent_38%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.08),transparent_32%)]" }),
				/* @__PURE__ */ (0, m.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-brand-blue via-brand-blue to-[#122a66]" }),
				/* @__PURE__ */ (0, m.jsx)("div", {
					className: "absolute left-0 top-0 h-full w-full opacity-[0.08]",
					style: {
						backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
						backgroundSize: "32px 32px"
					}
				}),
				/* @__PURE__ */ (0, m.jsx)("div", {
					className: "relative container mx-auto px-4 py-20 md:py-24",
					children: /* @__PURE__ */ (0, m.jsxs)("div", {
						className: "max-w-4xl rounded-2xl border border-white/18 bg-white/[0.04] p-7 shadow-2xl backdrop-blur-sm md:p-10",
						children: [
							/* @__PURE__ */ (0, m.jsx)("p", {
								className: "handicap-land-kicker text-xs uppercase tracking-[0.24em] text-brand-yellow font-bold",
								children: "Wingate Leaderboards"
							}),
							/* @__PURE__ */ (0, m.jsx)("h1", {
								className: "handicap-land-title mt-4 font-cinzel text-white text-5xl leading-tight md:text-7xl",
								children: t
							}),
							/* @__PURE__ */ (0, m.jsx)("p", {
								className: "handicap-land-sub mt-4 max-w-3xl text-white/85 text-lg",
								children: "Latest published handicap boards with full season and event stats."
							}),
							/* @__PURE__ */ (0, m.jsxs)("a", {
								href: n,
								className: "handicap-land-switch group mt-7 inline-flex items-center gap-2 rounded-sm border-2 border-white bg-white/8 px-6 py-3 text-xs font-bold uppercase tracking-widest text-white !no-underline transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-yellow hover:bg-brand-yellow hover:text-brand-blue hover:shadow-[0_14px_30px_-16px_rgba(255,204,0,0.8)]",
								style: {
									display: "inline-flex",
									color: "#ffffff",
									borderColor: "#ffffff",
									backgroundColor: "rgba(255,255,255,0.08)",
									textDecoration: "none"
								},
								children: [/* @__PURE__ */ (0, m.jsxs)("span", {
									className: "text-white transition-colors duration-300 group-hover:text-brand-blue",
									children: ["Open ", e === "men" ? "Ladies' Handicap" : "Men's Handicap"]
								}), /* @__PURE__ */ (0, m.jsx)(c, {
									size: 14,
									className: "text-white transition-all duration-300 group-hover:translate-x-1 group-hover:text-brand-blue"
								})]
							})
						]
					})
				})
			]
		}), /* @__PURE__ */ (0, m.jsxs)("section", {
			className: "container mx-auto px-4 py-10 md:py-12",
			children: [f ? /* @__PURE__ */ (0, m.jsxs)("a", {
				href: f.permalink,
				className: "handicap-featured-card grid overflow-hidden rounded-3xl border border-brand-blue/10 bg-white shadow-lg !no-underline md:grid-cols-[1.25fr_1fr]",
				children: [/* @__PURE__ */ (0, m.jsxs)("div", {
					className: "relative min-h-[320px] md:min-h-[420px] bg-brand-blue/10 bg-cover bg-center",
					style: { backgroundImage: `url('${f.heroImageUrl || f.featuredImageUrl || ""}')` },
					children: [/* @__PURE__ */ (0, m.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" }), /* @__PURE__ */ (0, m.jsx)("span", {
						className: "absolute left-5 top-5 inline-flex rounded-full bg-brand-yellow px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-brand-blue",
						children: "Featured"
					})]
				}), /* @__PURE__ */ (0, m.jsxs)("div", {
					className: "p-7 md:p-10 flex flex-col justify-center",
					children: [
						/* @__PURE__ */ (0, m.jsx)("p", {
							className: "text-xs font-bold uppercase tracking-[0.16em] text-brand-yellow",
							children: "Latest Handicap"
						}),
						/* @__PURE__ */ (0, m.jsx)("h2", {
							className: "mt-3 font-cinzel text-4xl leading-tight text-brand-blue md:text-5xl",
							children: f.title
						}),
						/* @__PURE__ */ (0, m.jsxs)("p", {
							className: "mt-3 text-sm text-brand-blue/70 uppercase tracking-[0.12em]",
							children: [
								f.seasonLabel || "Season board",
								" ",
								f.eventName ? `• ${f.eventName}` : ""
							]
						}),
						/* @__PURE__ */ (0, m.jsxs)("div", {
							className: "mt-5 flex flex-wrap gap-4 text-sm text-brand-blue/85",
							children: [/* @__PURE__ */ (0, m.jsxs)("span", {
								className: "inline-flex items-center gap-2 rounded-md border border-brand-blue/10 bg-brand-blue/[0.03] px-3 py-2",
								children: [
									/* @__PURE__ */ (0, m.jsx)(l, { size: 15 }),
									f.seasonStats?.totalPlayers || 0,
									" Players"
								]
							}), /* @__PURE__ */ (0, m.jsxs)("span", {
								className: "inline-flex items-center gap-2 rounded-md border border-brand-blue/10 bg-brand-blue/[0.03] px-3 py-2",
								children: [/* @__PURE__ */ (0, m.jsx)(u, { size: 15 }), f.eventDate || "Date TBD"]
							})]
						}),
						/* @__PURE__ */ (0, m.jsxs)("span", {
							className: "mt-8 inline-flex items-center gap-2 self-start rounded-sm bg-brand-blue px-6 py-3 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-brand-yellow hover:text-brand-blue",
							children: ["View Handicap", /* @__PURE__ */ (0, m.jsx)(c, { size: 14 })]
						})
					]
				})]
			}) : null, /* @__PURE__ */ (0, m.jsxs)("div", {
				className: "mt-10",
				children: [
					/* @__PURE__ */ (0, m.jsx)("h3", {
						className: "font-cinzel text-3xl text-brand-blue",
						children: "Other Handicap Boards"
					}),
					s ? /* @__PURE__ */ (0, m.jsx)("p", {
						className: "mt-3 text-sm text-brand-blue/70",
						children: "Loading handicap boards..."
					}) : null,
					!s && !i.length ? /* @__PURE__ */ (0, m.jsx)("p", {
						className: "mt-3 text-sm text-brand-blue/70",
						children: "No handicap boards published yet."
					}) : null,
					/* @__PURE__ */ (0, m.jsx)("div", {
						className: "handicap-board-grid mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3",
						children: h.map((e) => /* @__PURE__ */ (0, m.jsxs)("a", {
							href: e.permalink,
							className: "handicap-land-card group relative overflow-hidden rounded-xl border border-brand-blue/12 bg-white p-5 shadow-sm !no-underline transition-all duration-300 hover:-translate-y-1 hover:border-brand-yellow/60 hover:shadow-lg",
							children: [
								/* @__PURE__ */ (0, m.jsx)("div", { className: "absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-yellow/70 to-brand-blue/70 opacity-70 group-hover:opacity-100 transition-opacity" }),
								/* @__PURE__ */ (0, m.jsx)("p", {
									className: "text-[10px] uppercase tracking-[0.16em] text-brand-blue/50",
									children: e.seasonLabel || "Season Board"
								}),
								/* @__PURE__ */ (0, m.jsx)("h4", {
									className: "mt-2 font-cinzel text-2xl !text-brand-blue group-hover:!text-brand-blue",
									children: e.title
								}),
								/* @__PURE__ */ (0, m.jsx)("p", {
									className: "mt-2 text-xs uppercase tracking-[0.14em] text-brand-blue/60",
									children: e.eventName || "Event Update"
								}),
								/* @__PURE__ */ (0, m.jsxs)("p", {
									className: "mt-3 text-sm text-brand-blue/70",
									children: [
										e.seasonStats?.totalPlayers || 0,
										" players • Avg index ",
										e.seasonStats?.averageIndex || 0
									]
								}),
								/* @__PURE__ */ (0, m.jsxs)("span", {
									className: "mt-3 inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-[0.16em] text-brand-blue/60 group-hover:text-brand-blue transition-colors",
									children: ["Open Board", /* @__PURE__ */ (0, m.jsx)(c, {
										size: 12,
										className: "group-hover:translate-x-1 transition-transform"
									})]
								})
							]
						}, e.id))
					})
				]
			})]
		})]
	});
}
var p, m, h = t((() => {
	p = /* @__PURE__ */ e(n()), i(), o(), d(), m = r(), a.registerPlugin(s);
}));
//#endregion
export { h as n, f as t };
