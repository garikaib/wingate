import { a as e, i as t, n, t as r } from "./jsx-runtime-sz-k696O.js";
import { n as i, t as a } from "./gsap-BGWbMvE-.js";
import { ct as o, i as s, o as c, t as l } from "./lucide-react-DIY8CC7y.js";
//#region wp-content/themes/wingate/src/pages/HandicapMain.jsx
function u() {
	let e = (0, d.useRef)(null), [t, n] = (0, d.useState)(0);
	return (0, d.useEffect)(() => {
		(async () => {
			try {
				let e = await (await fetch("/wp-json/wingate-tools/v1/handicaps/public?gender=men")).json();
				n(Array.isArray(e?.items) ? e.items.length : 0);
			} catch {
				n(0);
			}
		})();
	}, []), (0, d.useEffect)(() => {
		let t = a.context(() => {
			a.from(".handicap-main-card", {
				y: 24,
				opacity: 0,
				stagger: .1,
				duration: .7,
				ease: "power3.out"
			});
		}, e);
		return () => t.revert();
	}, []), /* @__PURE__ */ (0, f.jsx)("div", {
		ref: e,
		className: "min-h-screen bg-brand-gray py-16",
		children: /* @__PURE__ */ (0, f.jsxs)("div", {
			className: "container mx-auto px-4",
			children: [/* @__PURE__ */ (0, f.jsxs)("div", {
				className: "rounded-3xl bg-brand-blue p-10 text-white md:p-14",
				children: [
					/* @__PURE__ */ (0, f.jsx)("p", {
						className: "text-xs uppercase tracking-[0.24em] text-brand-yellow",
						children: "Wingate Park"
					}),
					/* @__PURE__ */ (0, f.jsx)("h1", {
						className: "mt-3 font-cinzel text-4xl md:text-6xl",
						children: "Handicap Hub"
					}),
					/* @__PURE__ */ (0, f.jsx)("p", {
						className: "mt-4 max-w-2xl text-white/80",
						children: "Access live handicap tables and keep your competition standings up to date."
					})
				]
			}), /* @__PURE__ */ (0, f.jsxs)("div", {
				className: "mt-8 grid gap-5 md:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, f.jsxs)("article", {
						className: "handicap-main-card rounded-2xl border border-brand-blue/10 bg-white p-7 shadow-sm",
						children: [
							/* @__PURE__ */ (0, f.jsx)("div", {
								className: "inline-flex rounded-full bg-brand-yellow/20 p-3 text-brand-blue",
								children: /* @__PURE__ */ (0, f.jsx)(c, { size: 22 })
							}),
							/* @__PURE__ */ (0, f.jsx)("h2", {
								className: "mt-4 font-cinzel text-3xl text-brand-blue",
								children: "Men's Handicap"
							}),
							/* @__PURE__ */ (0, f.jsx)("p", {
								className: "mt-2 text-brand-blue/70",
								children: "Premium single-page leaderboard with export options and quick search."
							}),
							/* @__PURE__ */ (0, f.jsxs)("p", {
								className: "mt-4 text-sm font-bold uppercase tracking-[0.14em] text-brand-yellow",
								children: [t, " Published Players"]
							}),
							/* @__PURE__ */ (0, f.jsxs)("a", {
								href: "/mens-handicap/",
								className: "mt-6 inline-flex items-center gap-2 rounded-sm bg-brand-blue px-5 py-3 text-xs font-bold uppercase tracking-widest text-white !no-underline hover:bg-brand-yellow hover:text-brand-blue transition-colors",
								children: ["Open Men's Handicap", /* @__PURE__ */ (0, f.jsx)(o, { size: 14 })]
							})
						]
					}),
					/* @__PURE__ */ (0, f.jsxs)("article", {
						className: "handicap-main-card rounded-2xl border border-brand-blue/10 bg-white p-7 shadow-sm",
						children: [
							/* @__PURE__ */ (0, f.jsx)("div", {
								className: "inline-flex rounded-full bg-brand-yellow/20 p-3 text-brand-blue",
								children: /* @__PURE__ */ (0, f.jsx)(c, { size: 22 })
							}),
							/* @__PURE__ */ (0, f.jsx)("h2", {
								className: "mt-4 font-cinzel text-3xl text-brand-blue",
								children: "Ladies Handicap"
							}),
							/* @__PURE__ */ (0, f.jsx)("p", {
								className: "mt-2 text-brand-blue/70",
								children: "Separate ladies leaderboard with the same featured-post and stats workflow."
							}),
							/* @__PURE__ */ (0, f.jsxs)("a", {
								href: "/ladies-handicap/",
								className: "mt-6 inline-flex items-center gap-2 rounded-sm bg-brand-blue px-5 py-3 text-xs font-bold uppercase tracking-widest text-white !no-underline hover:bg-brand-yellow hover:text-brand-blue transition-colors",
								children: ["Open Ladies Handicap", /* @__PURE__ */ (0, f.jsx)(o, { size: 14 })]
							})
						]
					}),
					/* @__PURE__ */ (0, f.jsxs)("article", {
						className: "handicap-main-card rounded-2xl border border-brand-blue/10 bg-white p-7 shadow-sm",
						children: [
							/* @__PURE__ */ (0, f.jsx)("div", {
								className: "inline-flex rounded-full bg-brand-blue/10 p-3 text-brand-blue",
								children: /* @__PURE__ */ (0, f.jsx)(s, { size: 22 })
							}),
							/* @__PURE__ */ (0, f.jsx)("h2", {
								className: "mt-4 font-cinzel text-3xl text-brand-blue",
								children: "Admin Editing"
							}),
							/* @__PURE__ */ (0, f.jsx)("p", {
								className: "mt-2 text-brand-blue/70",
								children: "Club admins can add, edit and publish handicap rows from the Wingate Handicap Manager."
							}),
							/* @__PURE__ */ (0, f.jsxs)("a", {
								href: "/wp-admin/admin.php?page=wingate-handicap-manager",
								className: "mt-6 inline-flex items-center gap-2 rounded-sm border border-brand-blue/20 px-5 py-3 text-xs font-bold uppercase tracking-widest text-brand-blue !no-underline hover:bg-brand-blue hover:text-white transition-colors",
								children: ["Open Handicap Manager", /* @__PURE__ */ (0, f.jsx)(o, { size: 14 })]
							})
						]
					})
				]
			})]
		})
	});
}
var d, f;
//#endregion
t((() => {
	d = /* @__PURE__ */ e(n()), i(), l(), f = r();
}))();
export { u as default };
