import { a as e, i as t, n, t as r } from "./jsx-runtime-sz-k696O.js";
import { n as i, t as a } from "./MediaPicker-DEFEfwRu.js";
//#region wp-content/themes/wingate/src/config/default-holes.js
function o(e) {
	return u.find((t) => t.n === e)?.path || [];
}
var s, c, l, u, d = t((() => {
	s = [
		{
			n: 1,
			path: [
				[-17.72016, 31.07537],
				[-17.71978, 31.07536],
				[-17.71934, 31.07539],
				[-17.71892, 31.07543]
			]
		},
		{
			n: 2,
			path: [
				[-17.72142, 31.07702],
				[-17.7208, 31.07695],
				[-17.7204, 31.0769],
				[-17.71992, 31.07685]
			]
		},
		{
			n: 3,
			path: [
				[-17.72185, 31.0782],
				[-17.72195, 31.0778],
				[-17.722, 31.0773],
				[-17.7219, 31.0768],
				[-17.7217, 31.0764],
				[-17.7214, 31.0759]
			]
		},
		{
			n: 4,
			path: [
				[-17.7188, 31.0768],
				[-17.71895, 31.0769],
				[-17.71915, 31.07705],
				[-17.7194, 31.0772]
			]
		},
		{
			n: 5,
			path: [
				[-17.7195, 31.0775],
				[-17.7198, 31.07748],
				[-17.7202, 31.07744],
				[-17.7206, 31.0774]
			]
		},
		{
			n: 6,
			path: [
				[-17.7228, 31.0755],
				[-17.72255, 31.07542],
				[-17.7222, 31.07535],
				[-17.7219, 31.0753]
			]
		},
		{
			n: 7,
			path: [
				[-17.7224, 31.0748],
				[-17.72218, 31.07472],
				[-17.7219, 31.0746]
			]
		},
		{
			n: 8,
			path: [
				[-17.7222, 31.0742],
				[-17.72195, 31.07415],
				[-17.72165, 31.0741],
				[-17.72135, 31.07405],
				[-17.721, 31.074]
			]
		},
		{
			n: 9,
			path: [
				[-17.72012, 31.07474],
				[-17.71972, 31.07474],
				[-17.7193, 31.07478],
				[-17.71898, 31.07486]
			]
		},
		{
			n: 18,
			path: [
				[-17.7201, 31.07596],
				[-17.71972, 31.07595],
				[-17.71934, 31.07592],
				[-17.71897, 31.0759]
			]
		}
	], c = [-17.72073, 31.07663], l = [
		{
			n: 10,
			y: .0019,
			x: 7e-4,
			dy: 85e-5,
			dx: 15e-5
		},
		{
			n: 11,
			y: .0019,
			x: .0013,
			dy: 55e-5,
			dx: 25e-5
		},
		{
			n: 12,
			y: .0012,
			x: .0018,
			dy: -95e-5,
			dx: 2e-4
		},
		{
			n: 13,
			y: 2e-4,
			x: .0019,
			dy: -9e-4,
			dx: -2e-4
		},
		{
			n: 14,
			y: -8e-4,
			x: .0014,
			dy: -.00115,
			dx: -45e-5
		},
		{
			n: 15,
			y: -4e-4,
			x: 8e-4,
			dy: -9e-4,
			dx: 2e-4
		},
		{
			n: 16,
			y: -.0011,
			x: 4e-4,
			dy: -8e-4,
			dx: 4e-4
		},
		{
			n: 17,
			y: -1e-4,
			x: -2e-4,
			dy: -.001,
			dx: -25e-5
		}
	].map((e) => {
		let t = [c[0] + e.y, c[1] + e.x], n = [t[0] + e.dy, t[1] + e.dx], r = [t[0] + e.dy * .33 + (e.n % 2 ? 11e-5 : -1e-4), t[1] + e.dx * .33], i = [t[0] + e.dy * .67, t[1] + e.dx * .67 + (e.n % 2 ? -9e-5 : 11e-5)];
		return {
			n: e.n,
			path: [
				t,
				r,
				i,
				n
			]
		};
	}), u = [...s, ...l].sort((e, t) => e.n - t.n);
})), f, p, m, h = t((() => {
	f = /* @__PURE__ */ e(n()), d(), p = r(), m = ({ pathData: e, onChange: t, holeNumber: n }) => {
		let r = (0, f.useRef)(null), i = (0, f.useRef)(null), a = (0, f.useRef)(null), s = (0, f.useRef)([]), [c, l] = (0, f.useState)(!1), u = () => e && e.length > 0 ? e : o(n), [d, m] = (0, f.useState)(u());
		return (0, f.useEffect)(() => {
			if (!c || !i.current) return;
			if (!window.L) {
				console.error("Leaflet is not loaded on this page.");
				return;
			}
			let e = d.length > 0 ? d[0] : [-17.72073, 31.07663];
			return r.current || (r.current = window.L.map(i.current, {
				zoomControl: !0,
				scrollWheelZoom: !0,
				maxZoom: 19,
				minZoom: 14
			}).setView(e, 17), window.L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}", {
				maxZoom: 19,
				attribution: "Tiles &copy; Esri"
			}).addTo(r.current), r.current.on("click", (e) => {
				let t = [e.latlng.lat, e.latlng.lng];
				m((e) => [...e, t]);
			})), () => {
				r.current &&= (r.current.off("click"), r.current.remove(), null);
			};
		}, [c]), (0, f.useEffect)(() => {
			if (!(!r.current || !window.L)) {
				if (a.current && r.current.removeLayer(a.current), s.current.forEach((e) => r.current.removeLayer(e)), s.current = [], d && d.length > 0) {
					if (a.current = window.L.polyline(d, {
						color: "#ff7a00",
						weight: 5,
						opacity: 1
					}).addTo(r.current), d.length > 0) {
						let e = window.L.circleMarker(d[0], {
							radius: 6,
							weight: 2,
							color: "#ffffff",
							fillColor: "#0e1b3d",
							fillOpacity: 1
						}).bindTooltip("Tee", {
							permanent: !0,
							direction: "right",
							className: "font-bold text-xs"
						}).openTooltip().addTo(r.current);
						s.current.push(e);
					}
					if (d.length > 1) {
						let e = window.L.circleMarker(d[d.length - 1], {
							radius: 7,
							weight: 2,
							color: "#ffffff",
							fillColor: "#2b8a3e",
							fillOpacity: 1
						}).bindTooltip("Green", {
							permanent: !0,
							direction: "left",
							className: "font-bold text-xs text-green-700"
						}).openTooltip().addTo(r.current);
						s.current.push(e);
					}
					r.current.fitBounds(a.current.getBounds(), {
						padding: [20, 20],
						maxZoom: 18
					});
				}
				setTimeout(() => {
					r.current && r.current.invalidateSize();
				}, 100);
			}
		}, [
			d,
			n,
			c
		]), (0, f.useEffect)(() => {
			e && e.length > 0 ? m(e) : m(o(n));
		}, [n, e]), /* @__PURE__ */ (0, p.jsxs)("div", {
			className: "map-editor-wrapper mt-4",
			children: [
				/* @__PURE__ */ (0, p.jsxs)("div", {
					className: "flex justify-between items-center mb-2",
					children: [/* @__PURE__ */ (0, p.jsx)("span", {
						className: "text-sm font-bold text-gray-700",
						children: "Course Routing"
					}), /* @__PURE__ */ (0, p.jsxs)("span", {
						className: "text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded",
						children: [d.length, " Points Plotted"]
					})]
				}),
				/* @__PURE__ */ (0, p.jsxs)("button", {
					type: "button",
					onClick: () => l(!0),
					className: "w-full py-4 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-brand-blue hover:text-brand-blue transition-colors flex flex-col items-center justify-center gap-2",
					children: [/* @__PURE__ */ (0, p.jsx)("svg", {
						className: "w-6 h-6",
						fill: "none",
						stroke: "currentColor",
						viewBox: "0 0 24 24",
						xmlns: "http://www.w3.org/2000/svg",
						children: /* @__PURE__ */ (0, p.jsx)("path", {
							strokeLinecap: "round",
							strokeLinejoin: "round",
							strokeWidth: 2,
							d: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
						})
					}), /* @__PURE__ */ (0, p.jsx)("span", {
						className: "font-bold",
						children: "Open Fullscreen Editor"
					})]
				}),
				c && /* @__PURE__ */ (0, p.jsx)("div", {
					className: "fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-6",
					children: /* @__PURE__ */ (0, p.jsxs)("div", {
						className: "bg-white rounded-xl shadow-2xl w-full h-full max-w-6xl flex flex-col overflow-hidden animate-fade-in-up",
						children: [/* @__PURE__ */ (0, p.jsxs)("div", {
							className: "p-4 border-b flex justify-between items-center bg-gray-50",
							children: [/* @__PURE__ */ (0, p.jsxs)("div", { children: [/* @__PURE__ */ (0, p.jsxs)("h3", {
								className: "font-cinzel font-bold text-xl text-brand-blue",
								children: [
									"Hole ",
									n,
									" Routing Editor"
								]
							}), /* @__PURE__ */ (0, p.jsxs)("p", {
								className: "text-xs text-gray-500",
								children: [
									"Click on the map to place dots. First dot = ",
									/* @__PURE__ */ (0, p.jsx)("strong", { children: "Tee" }),
									", Last dot = ",
									/* @__PURE__ */ (0, p.jsx)("strong", { children: "Green" }),
									"."
								]
							})] }), /* @__PURE__ */ (0, p.jsxs)("div", {
								className: "flex gap-2 items-center",
								children: [
									!window.L && /* @__PURE__ */ (0, p.jsx)("span", {
										className: "text-xs text-red-500 font-bold mr-4",
										children: "Leaflet JS Load Error"
									}),
									/* @__PURE__ */ (0, p.jsx)("button", {
										type: "button",
										onClick: () => {
											m((e) => e.slice(0, -1));
										},
										disabled: d.length === 0,
										className: "text-sm bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded font-bold disabled:opacity-50",
										children: "Undo Point"
									}),
									/* @__PURE__ */ (0, p.jsx)("button", {
										type: "button",
										onClick: () => {
											m([]);
										},
										disabled: d.length === 0,
										className: "text-sm bg-red-100 text-red-700 hover:bg-red-200 px-4 py-2 rounded font-bold disabled:opacity-50",
										children: "Clear Route"
									}),
									/* @__PURE__ */ (0, p.jsx)("div", { className: "w-px h-6 bg-gray-300 mx-2" }),
									/* @__PURE__ */ (0, p.jsx)("button", {
										type: "button",
										onClick: () => {
											let e = u();
											if (JSON.stringify(d) !== JSON.stringify(e)) {
												if (!window.confirm("You have unsaved changes to this hole's route.\n\nAre you sure you want to discard these changes and close the editor?")) return;
												m(e);
											}
											l(!1);
										},
										className: "text-sm bg-white text-gray-700 hover:bg-gray-100 border border-gray-300 px-6 py-2 rounded font-bold transition-colors",
										children: "Cancel"
									}),
									/* @__PURE__ */ (0, p.jsx)("button", {
										type: "button",
										onClick: () => {
											t(d), l(!1);
										},
										className: "text-sm bg-brand-blue text-white hover:bg-brand-yellow hover:text-brand-blue px-6 py-2 rounded font-bold transition-colors",
										children: "Save Route"
									})
								]
							})]
						}), /* @__PURE__ */ (0, p.jsx)("div", {
							className: "flex-1 bg-gray-100 relative",
							children: /* @__PURE__ */ (0, p.jsx)("div", {
								ref: i,
								className: "w-full h-full",
								style: { zIndex: 1 }
							})
						})]
					})
				})
			]
		});
	};
})), g, _, v;
//#endregion
t((() => {
	g = /* @__PURE__ */ e(n()), i(), h(), _ = r(), v = () => {
		let [e, t] = (0, g.useState)({
			hero: {
				title: "",
				subtitle: "",
				kicker: "",
				backgroundImage: ""
			},
			intro: {
				title: "",
				content: ""
			},
			holes: []
		}), [n, r] = (0, g.useState)(1), [i, o] = (0, g.useState)(!0), [s, c] = (0, g.useState)(!1), [l, u] = (0, g.useState)({
			text: "",
			type: ""
		}), d = window.wingateAdminData?.root || "/wp-json/", f = window.wingateAdminData?.nonce || "";
		(0, g.useEffect)(() => {
			let e = new URLSearchParams(window.location.search), t = parseInt(e.get("hole"), 10);
			if (!isNaN(t) && t >= 1 && t <= 18 && r(t), !document.getElementById("leaflet-css")) {
				let e = document.createElement("link");
				e.id = "leaflet-css", e.rel = "stylesheet", e.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css", e.integrity = "sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=", e.crossOrigin = "", document.head.appendChild(e);
			}
			if (document.getElementById("leaflet-js")) p();
			else {
				let e = document.createElement("script");
				e.id = "leaflet-js", e.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js", e.integrity = "sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=", e.crossOrigin = "", e.onload = p, document.head.appendChild(e);
			}
		}, []);
		let p = async () => {
			o(!0);
			try {
				let e = await fetch(`${d}wingate/v1/hole-by-hole`);
				if (!e.ok) throw Error("Failed to fetch settings");
				let n = await e.json();
				t(n);
			} catch (e) {
				u({
					text: "Error loading settings: " + e.message,
					type: "error"
				});
			} finally {
				o(!1);
			}
		}, h = async () => {
			c(!0), u({
				text: "",
				type: ""
			});
			try {
				if (!(await fetch(`${d}wingate/v1/hole-by-hole`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						"X-WP-Nonce": f
					},
					body: JSON.stringify(e)
				})).ok) throw Error("Failed to save settings");
				u({
					text: "Settings saved successfully!",
					type: "success"
				}), setTimeout(() => u({
					text: "",
					type: ""
				}), 3e3);
			} catch (e) {
				u({
					text: "Error saving settings: " + e.message,
					type: "error"
				});
			} finally {
				c(!1);
			}
		}, v = (e, n, r) => {
			t((t) => ({
				...t,
				[e]: {
					...t[e],
					[n]: r
				}
			}));
		}, y = (e, n, r) => {
			t((t) => ({
				...t,
				holes: t.holes.map((t) => t.hole === e ? {
					...t,
					[n]: r
				} : t)
			}));
		}, b = (e) => {
			r(e);
			let t = new URL(window.location);
			t.searchParams.set("hole", e), window.history.pushState({}, "", t);
		};
		if (i) return /* @__PURE__ */ (0, _.jsx)("div", {
			className: "p-8 text-center text-gray-500",
			children: "Loading Hole by Hole settings..."
		});
		let x = e.holes?.find((e) => e.hole === n) || {
			image: "",
			description: ""
		};
		return /* @__PURE__ */ (0, _.jsxs)("div", {
			className: "wingate-admin-spa max-w-5xl mx-auto p-6 font-montserrat",
			children: [
				/* @__PURE__ */ (0, _.jsx)("header", {
					className: "mb-8 border-b pb-4",
					children: /* @__PURE__ */ (0, _.jsxs)("div", { children: [/* @__PURE__ */ (0, _.jsxs)("h1", {
						className: "text-3xl font-cinzel font-bold text-brand-blue mb-1",
						children: ["Hole By Hole ", /* @__PURE__ */ (0, _.jsx)("span", {
							className: "text-brand-yellow",
							children: "Settings"
						})]
					}), /* @__PURE__ */ (0, _.jsx)("p", {
						className: "text-gray-500 text-sm",
						children: "Manage the visual content for the Hole by Hole page."
					})] })
				}),
				/* @__PURE__ */ (0, _.jsxs)("div", {
					className: "fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-none",
					children: [l.text && /* @__PURE__ */ (0, _.jsx)("div", {
						className: `px-4 py-3 rounded-lg shadow-lg text-sm font-bold pointer-events-auto transform transition-all duration-300 ${l.type === "success" ? "bg-green-100 text-green-800 border border-green-200" : "bg-red-100 text-red-800 border border-red-200"} animate-fade-in-up`,
						children: l.text
					}), /* @__PURE__ */ (0, _.jsx)("button", {
						onClick: h,
						disabled: s,
						className: "pointer-events-auto bg-brand-blue hover:bg-brand-yellow text-white hover:text-brand-blue font-bold py-3 px-8 rounded-full shadow-xl transition-all hover:scale-105 active:scale-95 flex items-center gap-2",
						children: s ? /* @__PURE__ */ (0, _.jsxs)(_.Fragment, { children: [/* @__PURE__ */ (0, _.jsxs)("svg", {
							className: "animate-spin -ml-1 mr-2 h-5 w-5 text-current",
							xmlns: "http://www.w3.org/2000/svg",
							fill: "none",
							viewBox: "0 0 24 24",
							children: [/* @__PURE__ */ (0, _.jsx)("circle", {
								className: "opacity-25",
								cx: "12",
								cy: "12",
								r: "10",
								stroke: "currentColor",
								strokeWidth: "4"
							}), /* @__PURE__ */ (0, _.jsx)("path", {
								className: "opacity-75",
								fill: "currentColor",
								d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
							})]
						}), "Saving..."] }) : "Save All Settings"
					})]
				}),
				/* @__PURE__ */ (0, _.jsxs)("div", {
					className: "space-y-8",
					children: [
						/* @__PURE__ */ (0, _.jsxs)("section", {
							className: "bg-white p-6 rounded-lg shadow-sm border border-gray-100",
							children: [/* @__PURE__ */ (0, _.jsxs)("h2", {
								className: "text-xl font-cinzel text-brand-blue font-bold mb-4 flex items-center gap-2",
								children: [/* @__PURE__ */ (0, _.jsx)("span", {
									className: "w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center text-sm",
									children: "1"
								}), "Hero Section"]
							}), /* @__PURE__ */ (0, _.jsxs)("div", {
								className: "grid grid-cols-1 md:grid-cols-2 gap-6",
								children: [/* @__PURE__ */ (0, _.jsxs)("div", {
									className: "space-y-4",
									children: [
										/* @__PURE__ */ (0, _.jsxs)("div", { children: [/* @__PURE__ */ (0, _.jsx)("label", {
											className: "block text-sm font-bold text-gray-700 mb-1",
											children: "Kicker"
										}), /* @__PURE__ */ (0, _.jsx)("input", {
											type: "text",
											value: e.hero.kicker,
											onChange: (e) => v("hero", "kicker", e.target.value),
											className: "w-full border-gray-300 rounded-md shadow-sm"
										})] }),
										/* @__PURE__ */ (0, _.jsxs)("div", { children: [/* @__PURE__ */ (0, _.jsx)("label", {
											className: "block text-sm font-bold text-gray-700 mb-1",
											children: "Title"
										}), /* @__PURE__ */ (0, _.jsx)("input", {
											type: "text",
											value: e.hero.title,
											onChange: (e) => v("hero", "title", e.target.value),
											className: "w-full border-gray-300 rounded-md shadow-sm"
										})] }),
										/* @__PURE__ */ (0, _.jsxs)("div", { children: [/* @__PURE__ */ (0, _.jsx)("label", {
											className: "block text-sm font-bold text-gray-700 mb-1",
											children: "Subtitle"
										}), /* @__PURE__ */ (0, _.jsx)("input", {
											type: "text",
											value: e.hero.subtitle,
											onChange: (e) => v("hero", "subtitle", e.target.value),
											className: "w-full border-gray-300 rounded-md shadow-sm"
										})] })
									]
								}), /* @__PURE__ */ (0, _.jsxs)("div", { children: [/* @__PURE__ */ (0, _.jsx)("label", {
									className: "block text-sm font-bold text-gray-700 mb-1",
									children: "Background Image"
								}), /* @__PURE__ */ (0, _.jsx)(a, {
									value: e.hero.backgroundImage,
									onSelect: (e) => v("hero", "backgroundImage", e)
								})] })]
							})]
						}),
						/* @__PURE__ */ (0, _.jsxs)("section", {
							className: "bg-white p-6 rounded-lg shadow-sm border border-gray-100",
							children: [/* @__PURE__ */ (0, _.jsxs)("h2", {
								className: "text-xl font-cinzel text-brand-blue font-bold mb-4 flex items-center gap-2",
								children: [/* @__PURE__ */ (0, _.jsx)("span", {
									className: "w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center text-sm",
									children: "2"
								}), "Intro Section"]
							}), /* @__PURE__ */ (0, _.jsxs)("div", {
								className: "space-y-4",
								children: [/* @__PURE__ */ (0, _.jsxs)("div", { children: [/* @__PURE__ */ (0, _.jsx)("label", {
									className: "block text-sm font-bold text-gray-700 mb-1",
									children: "Title"
								}), /* @__PURE__ */ (0, _.jsx)("input", {
									type: "text",
									value: e.intro.title,
									onChange: (e) => v("intro", "title", e.target.value),
									className: "w-full border-gray-300 rounded-md shadow-sm"
								})] }), /* @__PURE__ */ (0, _.jsxs)("div", { children: [/* @__PURE__ */ (0, _.jsx)("label", {
									className: "block text-sm font-bold text-gray-700 mb-1",
									children: "Content"
								}), /* @__PURE__ */ (0, _.jsx)("textarea", {
									value: e.intro.content,
									onChange: (e) => v("intro", "content", e.target.value),
									className: "w-full border-gray-300 rounded-md shadow-sm",
									rows: "4"
								})] })]
							})]
						}),
						/* @__PURE__ */ (0, _.jsxs)("section", {
							className: "bg-white p-6 rounded-lg shadow-sm border border-gray-100",
							children: [/* @__PURE__ */ (0, _.jsxs)("div", {
								className: "flex justify-between items-center mb-6",
								children: [/* @__PURE__ */ (0, _.jsxs)("h2", {
									className: "text-xl font-cinzel text-brand-blue font-bold flex items-center gap-2",
									children: [/* @__PURE__ */ (0, _.jsx)("span", {
										className: "w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center text-sm",
										children: "3"
									}), "Hole Content Editor"]
								}), /* @__PURE__ */ (0, _.jsxs)("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, _.jsx)("label", {
										className: "text-sm font-bold text-gray-500 uppercase tracking-widest",
										children: "Select Hole:"
									}), /* @__PURE__ */ (0, _.jsx)("select", {
										value: n,
										onChange: (e) => b(Number(e.target.value)),
										className: "border-gray-300 rounded-md shadow-sm font-cinzel font-bold text-brand-blue text-lg",
										children: Array.from({ length: 18 }, (e, t) => t + 1).map((e) => /* @__PURE__ */ (0, _.jsxs)("option", {
											value: e,
											children: ["Hole ", e]
										}, e))
									})]
								})]
							}), /* @__PURE__ */ (0, _.jsxs)("div", {
								className: "bg-brand-gray/30 p-6 rounded-xl border border-gray-100 flex flex-col md:flex-row gap-8",
								children: [/* @__PURE__ */ (0, _.jsxs)("div", {
									className: "flex-1 space-y-4",
									children: [/* @__PURE__ */ (0, _.jsxs)("div", {
										className: "bg-brand-blue text-white px-4 py-2 rounded-md inline-block mb-2",
										children: [/* @__PURE__ */ (0, _.jsx)("span", {
											className: "text-xs uppercase tracking-widest opacity-75 mr-2",
											children: "Editing"
										}), /* @__PURE__ */ (0, _.jsxs)("span", {
											className: "font-cinzel font-bold text-xl text-brand-yellow",
											children: ["Hole ", n]
										})]
									}), /* @__PURE__ */ (0, _.jsxs)("div", { children: [
										/* @__PURE__ */ (0, _.jsx)("label", {
											className: "block text-sm font-bold text-gray-700 mb-2",
											children: "Hole Description"
										}),
										/* @__PURE__ */ (0, _.jsx)("textarea", {
											value: x.description,
											onChange: (e) => y(n, "description", e.target.value),
											className: "w-full border-gray-300 rounded-md shadow-sm min-h-[150px]",
											placeholder: "Enter the description and strategy for this hole..."
										}),
										/* @__PURE__ */ (0, _.jsxs)("p", {
											className: "text-xs text-gray-400 mt-2 italic",
											children: [
												"Note: Par, Index, and Distances for Hole ",
												n,
												" are managed in the ",
												/* @__PURE__ */ (0, _.jsx)("a", {
													href: "?page=wingate-scorecard-maker",
													className: "text-brand-blue underline",
													children: "Scorecard Maker"
												}),
												"."
											]
										})
									] })]
								}), /* @__PURE__ */ (0, _.jsxs)("div", {
									className: "flex-1",
									children: [
										/* @__PURE__ */ (0, _.jsx)("label", {
											className: "block text-sm font-bold text-gray-700 mb-2",
											children: "Hole Image"
										}),
										/* @__PURE__ */ (0, _.jsx)(a, {
											value: x.image,
											onSelect: (e) => y(n, "image", e)
										}),
										/* @__PURE__ */ (0, _.jsx)(m, {
											pathData: x.path || [],
											onChange: (e) => y(n, "path", e),
											holeNumber: n
										})
									]
								})]
							})]
						})
					]
				})
			]
		});
	};
}))();
export { v as default };
