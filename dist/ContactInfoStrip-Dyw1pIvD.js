import { i as e, n as t, t as n } from "./jsx-runtime-sz-k696O.js";
import { a as r, n as i, o as a, r as o, t as s } from "./contactDetails-CaGjL2ZL.js";
//#region wp-content/themes/wingate/src/components/PeekWindowSection.jsx
var c, l, u, d = e((() => {
	t(), c = n(), l = "/wp-content/uploads/2026/02/20251127_102423-scaled.jpg", u = ({ settings: e }) => {
		let t = e?.image || l;
		return /* @__PURE__ */ (0, c.jsx)("section", {
			className: "bg-[#efeee8] py-12 md:py-16",
			children: /* @__PURE__ */ (0, c.jsxs)("div", {
				className: "relative mx-auto h-[220px] w-full overflow-hidden md:h-[260px]",
				children: [
					/* @__PURE__ */ (0, c.jsx)("div", {
						className: "absolute inset-0 bg-cover bg-center bg-fixed",
						style: { backgroundImage: `url('${t}')` }
					}),
					/* @__PURE__ */ (0, c.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-brand-blue/18 via-transparent to-brand-blue/18" }),
					/* @__PURE__ */ (0, c.jsx)("div", { className: "absolute inset-0 ring-1 ring-black/8" })
				]
			})
		});
	};
})), f, p, m = e((() => {
	t(), i(), f = n(), p = () => {
		let e = s();
		return /* @__PURE__ */ (0, f.jsx)("section", {
			className: "bg-[#efeee8] px-6 py-14 lg:px-10 lg:py-16",
			children: /* @__PURE__ */ (0, f.jsx)("div", {
				className: "mx-auto max-w-screen-2xl",
				children: /* @__PURE__ */ (0, f.jsxs)("div", {
					className: "grid grid-cols-1 gap-10 text-center md:grid-cols-3 md:gap-8",
					children: [
						/* @__PURE__ */ (0, f.jsxs)("div", { children: [
							/* @__PURE__ */ (0, f.jsx)("h3", {
								className: "font-cinzel text-4xl font-bold uppercase tracking-wide text-brand-blue md:text-3xl",
								children: "Contact Us"
							}),
							/* @__PURE__ */ (0, f.jsx)("div", { className: "mx-auto mt-4 mb-5 h-1 w-20 bg-brand-yellow/80" }),
							/* @__PURE__ */ (0, f.jsxs)("p", {
								className: "font-montserrat text-lg text-brand-blue",
								children: [
									"Email:",
									" ",
									/* @__PURE__ */ (0, f.jsx)("a", {
										href: o(e.email),
										className: "text-[#a67c37] transition-colors hover:text-brand-blue",
										children: e.email
									})
								]
							})
						] }),
						/* @__PURE__ */ (0, f.jsxs)("div", { children: [
							/* @__PURE__ */ (0, f.jsx)("h3", {
								className: "font-cinzel text-4xl font-bold uppercase tracking-wide text-brand-blue md:text-3xl",
								children: "Call Us"
							}),
							/* @__PURE__ */ (0, f.jsx)("div", { className: "mx-auto mt-4 mb-5 h-1 w-20 bg-brand-yellow/80" }),
							/* @__PURE__ */ (0, f.jsx)("p", {
								className: "font-montserrat text-lg text-brand-blue",
								children: /* @__PURE__ */ (0, f.jsx)("a", {
									href: r(e.phone, e.phoneType),
									...a(e.phoneType),
									className: "transition-colors hover:text-brand-yellow",
									children: e.phone
								})
							})
						] }),
						/* @__PURE__ */ (0, f.jsxs)("div", { children: [
							/* @__PURE__ */ (0, f.jsx)("h3", {
								className: "font-cinzel text-4xl font-bold uppercase tracking-wide text-brand-blue md:text-3xl",
								children: "Visit Us"
							}),
							/* @__PURE__ */ (0, f.jsx)("div", { className: "mx-auto mt-4 mb-5 h-1 w-20 bg-brand-yellow/80" }),
							/* @__PURE__ */ (0, f.jsxs)("a", {
								href: "https://maps.google.com/?q=Wingate+Park+Golf+Club+Alpes+Road+Harare",
								target: "_blank",
								rel: "noreferrer",
								className: "font-montserrat text-lg text-brand-blue transition-colors hover:text-brand-yellow",
								children: [
									"Alpes Road, Pomona",
									/* @__PURE__ */ (0, f.jsx)("br", {}),
									"Harare, Zimbabwe"
								]
							})
						] })
					]
				})
			})
		});
	};
}));
//#endregion
export { d as i, m as n, u as r, p as t };
