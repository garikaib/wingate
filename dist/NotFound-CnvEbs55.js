import { a as e, i as t, n, t as r } from "./jsx-runtime-sz-k696O.js";
import { n as i, t as a } from "./gsap-BGWbMvE-.js";
//#region wp-content/themes/wingate/src/pages/NotFound.jsx
var o, s, c;
//#endregion
t((() => {
	o = /* @__PURE__ */ e(n()), i(), s = r(), c = () => {
		let e = (0, o.useRef)(null), t = (0, o.useRef)(null), n = (0, o.useRef)(null), r = (0, o.useRef)(null), i = (0, o.useRef)(null), c = (0, o.useRef)(null), l = (0, o.useRef)(null), u = (0, o.useRef)(null), d = (0, o.useRef)([]), f = (0, o.useRef)([]);
		return (0, o.useLayoutEffect)(() => {
			let o = a.context(() => {
				let e = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
				a.timeline({ defaults: { ease: "power3.out" } }).fromTo(t.current.children, {
					y: 50,
					opacity: 0
				}, {
					y: 0,
					opacity: 1,
					duration: 1,
					stagger: .15
				}).fromTo(n.current, {
					x: 50,
					opacity: 0,
					scale: .95
				}, {
					x: 0,
					opacity: 1,
					scale: 1,
					duration: 1.2
				}, "-=0.8");
				let o = d.current.filter(Boolean), s = f.current.filter(Boolean);
				a.set(r.current, {
					x: -160,
					y: -180,
					scale: .95,
					autoAlpha: 1
				}), a.set(i.current, {
					scaleX: .32,
					scaleY: .22,
					autoAlpha: .12
				}), a.set([
					l.current,
					u.current,
					...s
				], {
					autoAlpha: 0,
					transformOrigin: "center bottom"
				}), a.set(o, {
					scaleX: .15,
					scaleY: .45,
					autoAlpha: 0
				}), e || (a.to(c.current, {
					y: 1.5,
					duration: 2.2,
					ease: "sine.inOut",
					repeat: -1,
					yoyo: !0
				}), a.timeline({
					repeat: -1,
					repeatDelay: 1.2
				}).to(r.current, {
					x: 0,
					y: 0,
					scale: 1,
					duration: 1.05,
					ease: "power2.in"
				}, "fall").to(i.current, {
					scaleX: 1,
					scaleY: .45,
					autoAlpha: .26,
					duration: 1.05,
					ease: "power2.in"
				}, "fall").to(r.current, {
					y: 22,
					scale: .88,
					autoAlpha: 0,
					duration: .12,
					ease: "power4.in"
				}, "impact").to(i.current, {
					scaleX: 1.22,
					autoAlpha: 0,
					duration: .25,
					ease: "power2.out"
				}, "impact").fromTo(l.current, {
					scaleY: .2,
					scaleX: .7,
					autoAlpha: 0
				}, {
					scaleY: 1,
					scaleX: 1,
					autoAlpha: .9,
					duration: .15,
					ease: "power3.out"
				}, "impact").fromTo(u.current, {
					scaleY: .25,
					autoAlpha: 0
				}, {
					scaleY: 1.15,
					autoAlpha: .88,
					duration: .18,
					ease: "power2.out"
				}, "impact+=0.02").to([l.current, u.current], {
					y: 20,
					autoAlpha: 0,
					duration: .5,
					ease: "power2.in"
				}, "impact+=0.18").to(o[0], {
					scaleX: 2.4,
					scaleY: .9,
					autoAlpha: 0,
					duration: 1.3,
					ease: "power1.out"
				}, "impact+=0.06").to(o[1], {
					scaleX: 2.9,
					scaleY: 1.02,
					autoAlpha: 0,
					duration: 1.5,
					ease: "power1.out"
				}, "impact+=0.2").to(o[2], {
					scaleX: 3.3,
					scaleY: 1.12,
					autoAlpha: 0,
					duration: 1.7,
					ease: "power1.out"
				}, "impact+=0.34").fromTo(s, {
					y: 0,
					autoAlpha: 0,
					scale: .7
				}, {
					y: (e, t) => Number(t.getAttribute("data-rise") || -40),
					autoAlpha: .9,
					scale: 1,
					duration: .2,
					ease: "power3.out",
					stagger: .03
				}, "impact").to(s, {
					y: 18,
					autoAlpha: 0,
					duration: .45,
					ease: "power2.in",
					stagger: .02
				}, "impact+=0.18").set(r.current, {
					x: -160,
					y: -180,
					scale: .95,
					autoAlpha: 1
				}, "reset").set(i.current, {
					scaleX: .32,
					scaleY: .22,
					autoAlpha: .12
				}, "reset").set([
					l.current,
					u.current,
					...s
				], {
					y: 0,
					autoAlpha: 0
				}, "reset").set(o, {
					scaleX: .15,
					scaleY: .45,
					autoAlpha: 0
				}, "reset"));
			}, e);
			return () => o.revert();
		}, []), /* @__PURE__ */ (0, s.jsx)("div", {
			className: "w-full bg-brand-gray font-montserrat",
			ref: e,
			children: /* @__PURE__ */ (0, s.jsx)("section", {
				className: "flex min-h-[78vh] items-center justify-center px-6 py-20 lg:px-10 lg:py-24",
				children: /* @__PURE__ */ (0, s.jsxs)("div", {
					className: "mx-auto flex w-full max-w-6xl flex-col items-center gap-12 md:flex-row lg:gap-20",
					children: [/* @__PURE__ */ (0, s.jsxs)("div", {
						ref: t,
						className: "order-2 flex-1 text-center md:order-1 md:text-left",
						children: [
							/* @__PURE__ */ (0, s.jsxs)("div", {
								className: "mb-6 inline-block",
								children: [/* @__PURE__ */ (0, s.jsx)("h1", {
									className: "font-cinzel text-6xl font-bold uppercase leading-none tracking-wide text-brand-blue md:text-7xl lg:text-8xl",
									children: "404"
								}), /* @__PURE__ */ (0, s.jsx)("div", { className: "mx-auto mt-4 h-1 w-24 rounded-full bg-brand-yellow md:mx-0" })]
							}),
							/* @__PURE__ */ (0, s.jsx)("p", {
								className: "mb-3 font-cinzel text-xs font-bold uppercase tracking-[0.28em] text-brand-yellow",
								children: "Out Of Bounds"
							}),
							/* @__PURE__ */ (0, s.jsx)("h2", {
								className: "mb-6 font-cinzel text-3xl font-bold uppercase tracking-wide text-brand-blue/90 md:text-4xl",
								children: "Water Hazard"
							}),
							/* @__PURE__ */ (0, s.jsx)("p", {
								className: "mx-auto mb-10 max-w-md text-lg leading-[1.7] text-brand-blue/75 md:mx-0",
								children: "It seems your shot has found the deep stuff. The page you are looking for is currently out of play."
							}),
							/* @__PURE__ */ (0, s.jsxs)("div", {
								className: "flex flex-col justify-center gap-4 sm:flex-row md:justify-start",
								children: [/* @__PURE__ */ (0, s.jsx)("a", {
									href: "/",
									className: "inline-flex items-center justify-center border border-brand-blue bg-brand-blue px-10 py-4 font-montserrat text-xs font-bold uppercase tracking-[0.15em] !text-white visited:!text-white focus:!text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-brand-yellow hover:bg-brand-yellow hover:!text-brand-blue",
									children: "Back To Clubhouse"
								}), /* @__PURE__ */ (0, s.jsx)("a", {
									href: "/contact-us",
									className: "inline-flex items-center justify-center border border-brand-yellow bg-brand-yellow px-10 py-4 font-montserrat text-xs font-bold uppercase tracking-[0.15em] !text-brand-blue visited:!text-brand-blue shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue hover:bg-brand-blue hover:!text-white",
									children: "Contact Pro Shop"
								})]
							})
						]
					}), /* @__PURE__ */ (0, s.jsx)("div", {
						ref: n,
						className: "order-1 w-full max-w-[550px] flex-1 md:order-2",
						children: /* @__PURE__ */ (0, s.jsxs)("div", {
							className: "relative aspect-[16/9] w-full overflow-hidden rounded-sm border border-brand-yellow/25 bg-white shadow-2xl",
							children: [/* @__PURE__ */ (0, s.jsxs)("svg", {
								viewBox: "0 0 480 270",
								preserveAspectRatio: "xMidYMid slice",
								className: "h-full w-full",
								children: [
									/* @__PURE__ */ (0, s.jsxs)("defs", { children: [
										/* @__PURE__ */ (0, s.jsxs)("linearGradient", {
											id: "skyShade",
											x1: "0%",
											y1: "0%",
											x2: "0%",
											y2: "100%",
											children: [/* @__PURE__ */ (0, s.jsx)("stop", {
												offset: "0%",
												stopColor: "#ffffff"
											}), /* @__PURE__ */ (0, s.jsx)("stop", {
												offset: "100%",
												stopColor: "#f5f5f5"
											})]
										}),
										/* @__PURE__ */ (0, s.jsxs)("linearGradient", {
											id: "waterShade",
											x1: "0%",
											y1: "0%",
											x2: "0%",
											y2: "100%",
											children: [/* @__PURE__ */ (0, s.jsx)("stop", {
												offset: "0%",
												stopColor: "#1f3b66"
											}), /* @__PURE__ */ (0, s.jsx)("stop", {
												offset: "100%",
												stopColor: "#0e1b3d"
											})]
										}),
										/* @__PURE__ */ (0, s.jsxs)("radialGradient", {
											id: "ballShade",
											cx: "30%",
											cy: "30%",
											r: "70%",
											children: [/* @__PURE__ */ (0, s.jsx)("stop", {
												offset: "0%",
												stopColor: "#fff"
											}), /* @__PURE__ */ (0, s.jsx)("stop", {
												offset: "100%",
												stopColor: "#d8dde8"
											})]
										})
									] }),
									/* @__PURE__ */ (0, s.jsx)("rect", {
										x: "0",
										y: "0",
										width: "480",
										height: "270",
										fill: "url(#skyShade)"
									}),
									/* @__PURE__ */ (0, s.jsx)("path", {
										d: "M0 160 C80 145 160 165 240 155 C320 145 400 158 480 152 L480 270 L0 270 Z",
										fill: "#1a472a",
										opacity: "0.17"
									}),
									/* @__PURE__ */ (0, s.jsx)("path", {
										d: "M0 175 C100 165 200 180 300 170 C400 160 480 175 480 168 L480 270 L0 270 Z",
										fill: "#1a472a",
										opacity: "0.28"
									}),
									/* @__PURE__ */ (0, s.jsxs)("g", {
										ref: c,
										children: [
											/* @__PURE__ */ (0, s.jsx)("rect", {
												x: "0",
												y: "180",
												width: "480",
												height: "90",
												fill: "url(#waterShade)"
											}),
											/* @__PURE__ */ (0, s.jsx)("path", {
												d: "M0 180 C80 176 160 184 240 180 C320 176 400 184 480 180",
												fill: "none",
												stroke: "#ffcc00",
												strokeOpacity: "0.3",
												strokeWidth: "1.5"
											}),
											/* @__PURE__ */ (0, s.jsx)("path", {
												d: "M0 188 C100 184 200 192 300 188 C400 184 480 190 480 188",
												fill: "none",
												stroke: "#ffffff",
												strokeOpacity: "0.1",
												strokeWidth: "1"
											})
										]
									}),
									/* @__PURE__ */ (0, s.jsxs)("g", {
										transform: "translate(240, 190)",
										children: [
											/* @__PURE__ */ (0, s.jsx)("ellipse", {
												ref: i,
												cx: "0",
												cy: "4",
												rx: "10",
												ry: "4",
												fill: "#091328"
											}),
											/* @__PURE__ */ (0, s.jsx)("ellipse", {
												ref: (e) => {
													d.current[0] = e;
												},
												cx: "0",
												cy: "1",
												rx: "8",
												ry: "4",
												fill: "none",
												stroke: "#ffcc00",
												strokeOpacity: "0.3",
												strokeWidth: "1.5"
											}),
											/* @__PURE__ */ (0, s.jsx)("ellipse", {
												ref: (e) => {
													d.current[1] = e;
												},
												cx: "0",
												cy: "1",
												rx: "8",
												ry: "4",
												fill: "none",
												stroke: "#ffffff",
												strokeOpacity: "0.25",
												strokeWidth: "1.5"
											}),
											/* @__PURE__ */ (0, s.jsx)("ellipse", {
												ref: (e) => {
													d.current[2] = e;
												},
												cx: "0",
												cy: "1",
												rx: "8",
												ry: "4",
												fill: "none",
												stroke: "#ffcc00",
												strokeOpacity: "0.16",
												strokeWidth: "1.5"
											}),
											/* @__PURE__ */ (0, s.jsx)("path", {
												ref: l,
												d: "M-24 0 C-18 -22 -10 -22 -5 0 C-1 -26 1 -26 5 0 C10 -22 18 -22 24 0 L0 6 Z",
												fill: "#edf2f7"
											}),
											/* @__PURE__ */ (0, s.jsx)("path", {
												ref: u,
												d: "M-5 0 C-1 -40 1 -40 5 0 Z",
												fill: "#f7fafc"
											}),
											/* @__PURE__ */ (0, s.jsx)("circle", {
												ref: (e) => {
													f.current[0] = e;
												},
												"data-rise": "-38",
												cx: "-22",
												cy: "-3",
												r: "2",
												fill: "#f7fafc"
											}),
											/* @__PURE__ */ (0, s.jsx)("circle", {
												ref: (e) => {
													f.current[1] = e;
												},
												"data-rise": "-50",
												cx: "-12",
												cy: "-4",
												r: "1.8",
												fill: "#f7fafc"
											}),
											/* @__PURE__ */ (0, s.jsx)("circle", {
												ref: (e) => {
													f.current[2] = e;
												},
												"data-rise": "-46",
												cx: "0",
												cy: "-6",
												r: "2.2",
												fill: "#ffffff"
											}),
											/* @__PURE__ */ (0, s.jsx)("circle", {
												ref: (e) => {
													f.current[3] = e;
												},
												"data-rise": "-44",
												cx: "12",
												cy: "-4",
												r: "1.9",
												fill: "#f7fafc"
											}),
											/* @__PURE__ */ (0, s.jsx)("circle", {
												ref: (e) => {
													f.current[4] = e;
												},
												"data-rise": "-36",
												cx: "23",
												cy: "-3",
												r: "1.7",
												fill: "#f7fafc"
											}),
											/* @__PURE__ */ (0, s.jsx)("circle", {
												ref: r,
												cx: "0",
												cy: "0",
												r: "8",
												fill: "url(#ballShade)"
											}),
											/* @__PURE__ */ (0, s.jsx)("circle", {
												cx: "-3",
												cy: "-3",
												r: "1.5",
												fill: "#ffffff",
												opacity: "0.75"
											})
										]
									})
								]
							}), /* @__PURE__ */ (0, s.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-blue/12 to-transparent" })]
						})
					})]
				})
			})
		});
	};
}))();
export { c as default };
