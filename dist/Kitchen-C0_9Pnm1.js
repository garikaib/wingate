import { a as e, i as t, n, t as r } from "./jsx-runtime-sz-k696O.js";
import { n as i, t as a } from "./gsap-BGWbMvE-.js";
import { A as o, I as s, J as c, K as l, R as u, c as d, ct as f, n as p, ot as m, t as h } from "./lucide-react-DIY8CC7y.js";
//#region wp-content/themes/wingate/src/pages/Kitchen.jsx
function g() {
	let [e, t] = (0, _.useState)({
		settings: null,
		menus: [],
		weekdayLabels: {}
	}), [n, r] = (0, _.useState)(!0), [i, h] = (0, _.useState)(0), g = (0, _.useRef)(null), x = (0, _.useRef)(null);
	(0, _.useEffect)(() => {
		(async () => {
			r(!0);
			try {
				let e = await fetch("/wp-json/wingate-tools/v1/kitchen/public"), n = e.ok ? await e.json() : {
					settings: null,
					menus: [],
					weekdayLabels: {}
				}, r = Array.isArray(n?.menus) ? n.menus : [];
				t({
					settings: n?.settings || null,
					menus: r,
					weekdayLabels: n?.weekdayLabels || {}
				});
				let i = new URLSearchParams(window.location.search).get("menu"), a = i ? r.find((e) => String(e.slug) === i) : null;
				h(a?.id || r[0]?.id || 0);
			} catch {
				t({
					settings: null,
					menus: [],
					weekdayLabels: {}
				});
			} finally {
				r(!1);
			}
		})();
	}, []), (0, _.useEffect)(() => {
		if (n || !g.current) return;
		let e = a.context(() => {
			let e = g.current.querySelector(".kitchen-hero-copy");
			e && a.fromTo(e, {
				y: 26,
				opacity: 0
			}, {
				y: 0,
				opacity: 1,
				duration: .65,
				ease: "power2.out"
			});
			let t = g.current.querySelectorAll(".kitchen-menu-card");
			t.length && a.fromTo(t, {
				y: 18,
				opacity: 0
			}, {
				y: 0,
				opacity: 1,
				duration: .5,
				stagger: .08,
				ease: "power2.out",
				delay: .12
			});
		}, g);
		return () => e.revert();
	}, [e.menus.length, n]);
	let S = e.settings || {}, C = e.menus || [], w = e.weekdayLabels || {}, T = C.find((e) => Number(e.id) === Number(i)) || C[0] || null, E = (0, _.useMemo)(() => {
		let e = S.openTimes || {};
		return [
			e.weekdays,
			e.friday,
			e.saturday,
			e.sunday
		].filter(Boolean);
	}, [S.openTimes]), D = (e) => Array.isArray(e) ? e.map((e) => w[e] || e).join(", ") : "", O = async (e, t = "csv") => {
		try {
			let n = await fetch(`/wp-json/wingate-tools/v1/kitchen/menus/${e}/export?format=${encodeURIComponent(t)}`);
			if (!n.ok) return;
			let r = await n.json();
			if (t === "pdf") {
				r?.url && window.open(String(r.url), "_blank", "noopener,noreferrer");
				return;
			}
			let i = new Blob([String(r?.content || "")], { type: String(r?.mime || "text/plain;charset=utf-8") }), a = URL.createObjectURL(i), o = document.createElement("a");
			o.href = a, o.download = String(r?.fileName || "kitchen-menu.csv"), document.body.appendChild(o), o.click(), o.remove(), URL.revokeObjectURL(a);
		} catch {}
	}, k = (e) => {
		let t = String(e || "").trim().toLowerCase();
		if (!t) return b[0];
		let n = t.split("").reduce((e, t) => e + t.charCodeAt(0), 0);
		return b[n % b.length];
	};
	if (n) return /* @__PURE__ */ (0, v.jsx)("div", {
		className: "bg-brand-gray min-h-screen flex items-center justify-center text-brand-blue",
		children: "Loading Kitchen..."
	});
	let A = (e) => {
		h(e), window.requestAnimationFrame(() => {
			if (!x.current) return;
			let e = x.current.getBoundingClientRect().top + window.scrollY - 118;
			window.scrollTo({
				top: Math.max(e, 0),
				behavior: "smooth"
			});
		});
	};
	return /* @__PURE__ */ (0, v.jsxs)("div", {
		ref: g,
		className: "bg-brand-gray min-h-screen",
		children: [
			/* @__PURE__ */ (0, v.jsxs)("section", {
				className: "relative min-h-[55vh] overflow-hidden",
				children: [
					/* @__PURE__ */ (0, v.jsx)("div", {
						className: "absolute inset-0 bg-cover bg-center",
						style: { backgroundImage: `url('${S.heroImageUrl || ""}')` }
					}),
					/* @__PURE__ */ (0, v.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-brand-blue/92 via-brand-blue/70 to-brand-blue/55" }),
					/* @__PURE__ */ (0, v.jsx)("div", {
						className: "relative container mx-auto px-4 py-16 md:py-20",
						children: /* @__PURE__ */ (0, v.jsxs)("div", {
							className: "kitchen-hero-copy max-w-3xl rounded-2xl border border-white/18 bg-white/[0.05] p-6 md:p-8 backdrop-blur-sm",
							children: [
								/* @__PURE__ */ (0, v.jsx)("p", {
									className: "text-xs uppercase tracking-[0.22em] text-brand-yellow font-bold",
									children: "Club House"
								}),
								/* @__PURE__ */ (0, v.jsx)("h1", {
									className: "mt-3 font-cinzel text-white text-5xl md:text-6xl",
									children: S.heroTitle || "The Kitchen"
								}),
								/* @__PURE__ */ (0, v.jsx)("p", {
									className: "mt-4 text-white/85 text-base md:text-lg",
									children: S.heroSubtitle || ""
								})
							]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, v.jsxs)("section", {
				className: "container mx-auto px-4 py-10",
				children: [/* @__PURE__ */ (0, v.jsx)("div", {
					className: "rounded-2xl border border-brand-blue/10 bg-white p-5 md:p-7 shadow-sm mb-8",
					children: /* @__PURE__ */ (0, v.jsx)("p", {
						className: "text-brand-blue/75 text-sm md:text-base",
						children: S.intro || ""
					})
				}), /* @__PURE__ */ (0, v.jsx)("div", {
					className: "grid gap-4 md:grid-cols-2 lg:grid-cols-3",
					children: C.map((e) => {
						let t = Number(e.id) === Number(T?.id);
						return /* @__PURE__ */ (0, v.jsxs)("button", {
							type: "button",
							onClick: () => A(e.id),
							className: `kitchen-menu-card text-left overflow-hidden rounded-xl border ${t ? "border-brand-yellow shadow-lg" : "border-brand-blue/12 shadow-sm"} bg-white transition-all hover:-translate-y-1`,
							children: [/* @__PURE__ */ (0, v.jsx)("div", {
								className: "h-44 bg-brand-blue/10 bg-cover bg-center",
								style: { backgroundImage: `url('${e.menuImageUrl || S.heroImageUrl || ""}')` }
							}), /* @__PURE__ */ (0, v.jsxs)("div", {
								className: "p-4",
								children: [
									/* @__PURE__ */ (0, v.jsx)("p", {
										className: "text-[10px] uppercase tracking-[0.16em] text-brand-yellow font-bold",
										children: y[e.menuType] || "Menu"
									}),
									/* @__PURE__ */ (0, v.jsx)("h3", {
										className: "font-cinzel text-2xl text-brand-blue mt-1",
										children: e.title
									}),
									/* @__PURE__ */ (0, v.jsxs)("p", {
										className: "mt-1 text-xs text-brand-blue/65 uppercase tracking-[0.12em]",
										children: [
											e.availableFrom,
											" - ",
											e.availableTo
										]
									}),
									/* @__PURE__ */ (0, v.jsx)("p", {
										className: "mt-1 text-[11px] text-brand-blue/60",
										children: D(e.availableDays)
									}),
									/* @__PURE__ */ (0, v.jsx)("p", {
										className: "mt-2 text-sm text-brand-blue/75 line-clamp-2",
										children: e.summary
									})
								]
							})]
						}, e.id);
					})
				})]
			}),
			T ? /* @__PURE__ */ (0, v.jsx)("section", {
				ref: x,
				className: "container mx-auto px-4 pb-14",
				children: /* @__PURE__ */ (0, v.jsxs)("div", {
					className: "rounded-2xl border border-brand-blue/12 bg-white p-6 md:p-8 shadow-sm",
					children: [
						/* @__PURE__ */ (0, v.jsxs)("div", {
							className: "flex flex-wrap items-start justify-between gap-4",
							children: [/* @__PURE__ */ (0, v.jsxs)("div", { children: [/* @__PURE__ */ (0, v.jsx)("p", {
								className: "text-xs uppercase tracking-[0.16em] text-brand-yellow font-bold",
								children: y[T.menuType] || "Menu"
							}), /* @__PURE__ */ (0, v.jsx)("h2", {
								className: "font-cinzel text-4xl text-brand-blue mt-1",
								children: T.title
							})] }), /* @__PURE__ */ (0, v.jsxs)("div", {
								className: "inline-flex items-center gap-2 rounded-full bg-brand-blue/[0.06] px-4 py-2 text-sm text-brand-blue",
								children: [/* @__PURE__ */ (0, v.jsx)(l, { size: 16 }), /* @__PURE__ */ (0, v.jsxs)("span", { children: [
									T.availableFrom,
									" - ",
									T.availableTo
								] })]
							})]
						}),
						/* @__PURE__ */ (0, v.jsxs)("p", {
							className: "mt-2 text-sm text-brand-blue/65",
							children: ["Available on: ", D(T.availableDays)]
						}),
						/* @__PURE__ */ (0, v.jsx)("p", {
							className: "mt-4 text-brand-blue/75",
							children: T.summary
						}),
						/* @__PURE__ */ (0, v.jsxs)("div", {
							className: "mt-4 flex flex-wrap gap-2",
							children: [/* @__PURE__ */ (0, v.jsxs)("button", {
								type: "button",
								onClick: () => O(T.id, "csv"),
								className: "inline-flex items-center gap-2 rounded-sm border border-brand-blue/30 px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] text-brand-blue transition hover:bg-brand-blue hover:text-white",
								children: [/* @__PURE__ */ (0, v.jsx)(u, { size: 14 }), "Export Excel/CSV"]
							}), /* @__PURE__ */ (0, v.jsxs)("button", {
								type: "button",
								onClick: () => O(T.id, "pdf"),
								className: "inline-flex items-center gap-2 rounded-sm border border-brand-blue/30 px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] text-brand-blue transition hover:bg-brand-blue hover:text-white",
								children: [/* @__PURE__ */ (0, v.jsx)(s, { size: 14 }), "Download PDF"]
							})]
						}),
						/* @__PURE__ */ (0, v.jsx)("div", {
							className: "mt-6 space-y-3",
							children: (T.items || []).map((e, t) => /* @__PURE__ */ (0, v.jsxs)("article", {
								className: `rounded-xl border border-brand-blue/10 p-4 ${e.inStock === !1 ? "bg-red-50/70" : "bg-brand-gray/35"}`,
								children: [
									/* @__PURE__ */ (0, v.jsxs)("div", {
										className: "flex items-start justify-between gap-3",
										children: [/* @__PURE__ */ (0, v.jsxs)("div", { children: [/* @__PURE__ */ (0, v.jsx)("h3", {
											className: "font-cinzel text-2xl text-brand-blue",
											children: e.name
										}), e.tag ? /* @__PURE__ */ (0, v.jsx)("p", {
											className: `mt-1 inline-flex rounded-full px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] font-bold ${k(e.tag)}`,
											children: e.tag
										}) : null] }), /* @__PURE__ */ (0, v.jsx)("p", {
											className: "font-cinzel text-2xl text-brand-blue",
											children: e.price || "-"
										})]
									}),
									e.inStock === !1 ? /* @__PURE__ */ (0, v.jsxs)("div", {
										className: "mt-2 inline-flex items-center gap-1.5 rounded-full border border-red-300 bg-red-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-red-700",
										children: [/* @__PURE__ */ (0, v.jsx)(c, { size: 12 }), /* @__PURE__ */ (0, v.jsx)("span", { children: "Out of stock" })]
									}) : null,
									e.description ? /* @__PURE__ */ (0, v.jsx)("p", {
										className: "text-sm text-brand-blue/75 mt-2",
										children: e.description
									}) : null,
									e.allergens?.length || e.dietary?.length ? /* @__PURE__ */ (0, v.jsxs)("div", {
										className: "mt-3 flex flex-wrap gap-2",
										children: [(e.allergens || []).map((t) => /* @__PURE__ */ (0, v.jsxs)("span", {
											className: "inline-flex items-center gap-1.5 rounded-full border border-red-200 bg-red-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-red-700",
											children: [/* @__PURE__ */ (0, v.jsx)(d, { size: 12 }), /* @__PURE__ */ (0, v.jsx)("span", { children: t })]
										}, `${e.name}-a-${t}`)), (e.dietary || []).map((t) => /* @__PURE__ */ (0, v.jsxs)("span", {
											className: "inline-flex items-center gap-1.5 rounded-full border border-brand-blue/20 bg-brand-blue/[0.06] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-brand-blue",
											children: [/* @__PURE__ */ (0, v.jsx)(o, { size: 12 }), /* @__PURE__ */ (0, v.jsx)("span", { children: t })]
										}, `${e.name}-d-${t}`))]
									}) : null,
									e.inStock !== !1 && !(e.allergens?.length || e.dietary?.length) ? /* @__PURE__ */ (0, v.jsxs)("div", {
										className: "mt-3 inline-flex items-center gap-1.5 rounded-full border border-brand-blue/20 bg-brand-blue/[0.06] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-brand-blue",
										children: [/* @__PURE__ */ (0, v.jsx)(m, { size: 12 }), /* @__PURE__ */ (0, v.jsx)("span", { children: "Chef ready" })]
									}) : null
								]
							}, `${e.name}-${t}`))
						})
					]
				})
			}) : null,
			/* @__PURE__ */ (0, v.jsx)("section", {
				className: "bg-brand-blue text-white",
				children: /* @__PURE__ */ (0, v.jsxs)("div", {
					className: "container mx-auto px-4 py-10 grid gap-8 md:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, v.jsxs)("div", { children: [/* @__PURE__ */ (0, v.jsx)("p", {
							className: "text-[11px] uppercase tracking-[0.16em] text-brand-yellow font-bold",
							children: S.openTimesTitle || "Opening Times"
						}), /* @__PURE__ */ (0, v.jsx)("ul", {
							className: "mt-3 space-y-1 text-sm text-white/90",
							children: E.map((e, t) => /* @__PURE__ */ (0, v.jsx)("li", { children: e }, `${e}-${t}`))
						})] }),
						/* @__PURE__ */ (0, v.jsxs)("div", { children: [/* @__PURE__ */ (0, v.jsx)("p", {
							className: "text-[11px] uppercase tracking-[0.16em] text-brand-yellow font-bold",
							children: "Kitchen Promise"
						}), /* @__PURE__ */ (0, v.jsx)("p", {
							className: "mt-3 text-sm text-white/90",
							children: "Fresh ingredients, polished service, and menu windows designed around your day at the club."
						})] }),
						/* @__PURE__ */ (0, v.jsxs)("div", {
							className: "md:text-right",
							children: [/* @__PURE__ */ (0, v.jsxs)("a", {
								href: S.bookingUrl || "/booking/",
								className: "inline-flex items-center gap-2 rounded-sm bg-brand-yellow px-6 py-3 text-xs font-bold uppercase tracking-widest text-brand-blue !no-underline hover:bg-white transition-colors",
								children: [
									/* @__PURE__ */ (0, v.jsx)(p, { size: 14 }),
									/* @__PURE__ */ (0, v.jsx)("span", { children: S.bookingLabel || "Book A Table" }),
									/* @__PURE__ */ (0, v.jsx)(f, { size: 14 })
								]
							}), S.whatsAppEnabled && S.whatsAppNumber ? /* @__PURE__ */ (0, v.jsxs)("a", {
								href: `https://wa.me/${String(S.whatsAppNumber).replace(/\D/g, "")}?text=${encodeURIComponent(S.whatsAppMessage || "Hello Wingate Kitchen, I would like to reserve a table.")}`,
								className: "ml-0 mt-2 inline-flex items-center gap-2 rounded-sm border border-white/45 px-6 py-3 text-xs font-bold uppercase tracking-widest text-white !no-underline transition-colors hover:bg-white hover:text-brand-blue md:ml-2",
								target: "_blank",
								rel: "noreferrer",
								children: [/* @__PURE__ */ (0, v.jsx)("span", { children: S.whatsAppLabel || "WhatsApp Reservations" }), /* @__PURE__ */ (0, v.jsx)(f, { size: 14 })]
							}) : null]
						})
					]
				})
			})
		]
	});
}
var _, v, y, b;
//#endregion
t((() => {
	_ = /* @__PURE__ */ e(n()), h(), i(), v = r(), y = {
		breakfast: "Breakfast Menu",
		lunch: "Lunch Menu",
		dinner: "Dinner Menu",
		drinks: "Drinks Menu",
		kids: "Kids Menu"
	}, b = [
		"bg-brand-yellow/20 text-brand-blue border border-brand-yellow/50",
		"bg-emerald-100 text-emerald-800 border border-emerald-300",
		"bg-amber-100 text-amber-700 border border-amber-200",
		"bg-slate-100 text-slate-700 border border-slate-300",
		"bg-red-100 text-red-700 border border-red-200"
	];
}))();
export { g as default };
