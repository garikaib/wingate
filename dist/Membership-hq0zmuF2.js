import { a as e, i as t, n, t as r } from "./jsx-runtime-sz-k696O.js";
import { n as i, t as a } from "./gsap-BGWbMvE-.js";
import { B as o, Q as s, X as c, ct as l, et as u, f as d, nt as f, t as p, ut as m } from "./lucide-react-DIY8CC7y.js";
//#region wp-content/themes/wingate/src/components/DatePicker.jsx
var h, g, _, v = t((() => {
	h = /* @__PURE__ */ e(n()), p(), g = r(), _ = ({ label: e, name: t, value: n, onChange: r, placeholder: i = "DD/MM/YYYY" }) => {
		let a = /* @__PURE__ */ new Date();
		a.setFullYear(a.getFullYear() - 5), a.setHours(0, 0, 0, 0);
		let [o, l] = (0, h.useState)(!1), [u, d] = (0, h.useState)(new Date(a)), [p, m] = (0, h.useState)(null), _ = (0, h.useRef)(null);
		(0, h.useEffect)(() => {
			if (n) {
				let e = typeof n == "string" ? n.split("-").map(Number) : [], t = e.length === 3 ? new Date(e[0], e[1] - 1, e[2]) : new Date(n);
				isNaN(t.getTime()) || (m(t), d(t));
			}
		}, [n]), (0, h.useEffect)(() => {
			let e = (e) => {
				_.current && !_.current.contains(e.target) && l(!1);
			};
			return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
		}, []);
		let v = (e, t) => new Date(e, t + 1, 0).getDate(), y = (e, t) => new Date(e, t, 1).getDay(), b = [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December"
		], x = Array.from({ length: 101 }, (e, t) => a.getFullYear() - t), S = (e) => e.getTime() > a.getTime(), C = () => {
			let e = u.getFullYear(), t = u.getMonth(), n = v(e, t), r = y(e, t), i = [];
			for (let e = 0; e < r; e++) i.push(/* @__PURE__ */ (0, g.jsx)("div", { className: "p-2" }, `empty-${e}`));
			for (let r = 1; r <= n; r++) {
				let n = new Date(e, t, r), a = S(n), o = p && n.getDate() === p.getDate() && n.getMonth() === p.getMonth() && n.getFullYear() === p.getFullYear();
				i.push(/* @__PURE__ */ (0, g.jsx)("button", {
					onClick: (e) => w(e, r),
					disabled: a,
					className: `
                        p-2 text-sm font-montserrat transition-all duration-200 rounded-sm
                        ${o ? "bg-brand-yellow text-brand-blue font-bold shadow-md" : "text-brand-blue hover:bg-brand-blue/10 hover:text-brand-yellow"}
                        ${a ? "opacity-30 cursor-not-allowed hover:bg-transparent hover:text-brand-blue" : ""}
                    `,
					children: r
				}, r));
			}
			return i;
		}, w = (e, n) => {
			e.preventDefault();
			let i = new Date(u.getFullYear(), u.getMonth(), n);
			S(i) || (m(i), l(!1), r({ target: {
				name: t,
				value: `${i.getFullYear()}-${String(i.getMonth() + 1).padStart(2, "0")}-${String(i.getDate()).padStart(2, "0")}`
			} }));
		}, T = (e, t) => {
			e.preventDefault();
			let n = new Date(u.getFullYear(), u.getMonth() + t, 1);
			S(n) || d(n);
		};
		return /* @__PURE__ */ (0, g.jsxs)("div", {
			className: `mb-4 w-full field-anim relative ${o ? "z-50" : "z-0"}`,
			ref: _,
			children: [
				/* @__PURE__ */ (0, g.jsx)("label", {
					className: "block text-brand-blue font-cinzel text-sm font-bold mb-2 uppercase tracking-wide",
					children: e
				}),
				/* @__PURE__ */ (0, g.jsxs)("div", {
					onClick: () => l(!o),
					className: `
                    w-full bg-white/50 border cursor-pointer flex items-center justify-between
                    px-4 py-3 text-brand-blue transition-all font-montserrat
                    ${o ? "border-brand-yellow ring-1 ring-brand-yellow" : "border-brand-yellow/30 hover:border-brand-yellow/60"}
                `,
					children: [/* @__PURE__ */ (0, g.jsx)("span", {
						className: p ? "text-brand-blue font-medium" : "text-brand-blue/40",
						children: p ? ((e) => e ? e.toLocaleDateString("en-GB", {
							day: "numeric",
							month: "long",
							year: "numeric"
						}) : "")(p) : i
					}), /* @__PURE__ */ (0, g.jsx)(f, {
						size: 18,
						className: "text-brand-yellow"
					})]
				}),
				o && /* @__PURE__ */ (0, g.jsxs)("div", {
					className: "absolute z-[1000] mt-1 top-full left-0 w-72 bg-white border border-brand-yellow/20 shadow-xl rounded-sm p-4 animate-in fade-in zoom-in-95 duration-200",
					children: [
						/* @__PURE__ */ (0, g.jsxs)("div", {
							className: "grid grid-cols-2 gap-2 mb-4 pb-3 border-b border-brand-yellow/10",
							children: [/* @__PURE__ */ (0, g.jsx)("select", {
								value: u.getMonth(),
								onChange: (e) => {
									let t = Number(e.target.value), n = new Date(u.getFullYear(), t, 1);
									S(n) || d(n);
								},
								className: "w-full border border-brand-yellow/30 bg-white px-2 py-2 text-sm font-montserrat text-brand-blue focus:outline-none focus:border-brand-yellow",
								children: b.map((e, t) => {
									let n = new Date(u.getFullYear(), t, 1);
									return /* @__PURE__ */ (0, g.jsx)("option", {
										value: t,
										disabled: S(n),
										children: e
									}, e);
								})
							}), /* @__PURE__ */ (0, g.jsx)("select", {
								value: u.getFullYear(),
								onChange: (e) => {
									let t = Number(e.target.value), n = new Date(t, u.getMonth(), 1);
									S(n) || d(n);
								},
								className: "w-full border border-brand-yellow/30 bg-white px-2 py-2 text-sm font-montserrat text-brand-blue focus:outline-none focus:border-brand-yellow",
								children: x.map((e) => /* @__PURE__ */ (0, g.jsx)("option", {
									value: e,
									children: e
								}, e))
							})]
						}),
						/* @__PURE__ */ (0, g.jsxs)("div", {
							className: "flex justify-between items-center mb-2",
							children: [
								/* @__PURE__ */ (0, g.jsx)("button", {
									onClick: (e) => T(e, -1),
									className: "p-1 text-brand-blue hover:text-brand-yellow transition-colors",
									children: /* @__PURE__ */ (0, g.jsx)(s, { size: 16 })
								}),
								/* @__PURE__ */ (0, g.jsx)("span", {
									className: "font-montserrat font-semibold text-brand-yellow uppercase text-sm tracking-wider",
									children: b[u.getMonth()]
								}),
								/* @__PURE__ */ (0, g.jsx)("button", {
									onClick: (e) => T(e, 1),
									className: "p-1 text-brand-blue hover:text-brand-yellow transition-colors",
									children: /* @__PURE__ */ (0, g.jsx)(c, { size: 16 })
								})
							]
						}),
						/* @__PURE__ */ (0, g.jsx)("div", {
							className: "grid grid-cols-7 mb-2",
							children: [
								"Su",
								"Mo",
								"Tu",
								"We",
								"Th",
								"Fr",
								"Sa"
							].map((e) => /* @__PURE__ */ (0, g.jsx)("div", {
								className: "text-center text-[10px] font-bold text-brand-blue/40 uppercase font-cinzel",
								children: e
							}, e))
						}),
						/* @__PURE__ */ (0, g.jsx)("div", {
							className: "grid grid-cols-7 gap-1",
							children: C()
						}),
						/* @__PURE__ */ (0, g.jsx)("div", {
							className: "mt-3 pt-2 border-t border-brand-blue/5 flex justify-center",
							children: /* @__PURE__ */ (0, g.jsx)("button", {
								onClick: (e) => {
									e.preventDefault();
									let n = new Date(a);
									d(n), m(n), r({ target: {
										name: t,
										value: n.toISOString().split("T")[0]
									} }), l(!1);
								},
								className: "text-xs font-cinzel text-brand-yellow hover:text-brand-blue transition-colors uppercase tracking-widest font-bold",
								children: "Use Default (5 Years Ago)"
							})
						})
					]
				})
			]
		});
	};
})), y, b, x, S, C, w, T = t((() => {
	y = /* @__PURE__ */ e(n()), p(), i(), v(), b = r(), x = ({ className: e = "" }) => /* @__PURE__ */ (0, b.jsxs)("svg", {
		viewBox: "0 0 40 40",
		className: e,
		fill: "none",
		children: [
			/* @__PURE__ */ (0, b.jsx)("circle", {
				cx: "20",
				cy: "20",
				r: "18",
				fill: "#fff",
				stroke: "#C5A059",
				strokeWidth: "1.5"
			}),
			/* @__PURE__ */ (0, b.jsx)("circle", {
				cx: "16",
				cy: "15",
				r: "1.2",
				fill: "#e0d6c2"
			}),
			/* @__PURE__ */ (0, b.jsx)("circle", {
				cx: "22",
				cy: "13",
				r: "1",
				fill: "#e0d6c2"
			}),
			/* @__PURE__ */ (0, b.jsx)("circle", {
				cx: "19",
				cy: "20",
				r: "1.1",
				fill: "#e0d6c2"
			}),
			/* @__PURE__ */ (0, b.jsx)("circle", {
				cx: "25",
				cy: "18",
				r: "0.9",
				fill: "#e0d6c2"
			}),
			/* @__PURE__ */ (0, b.jsx)("circle", {
				cx: "14",
				cy: "22",
				r: "1",
				fill: "#e0d6c2"
			})
		]
	}), S = ({ label: e, name: t, value: n, onChange: r, type: i = "text", placeholder: a = "", width: o = "w-full" }) => /* @__PURE__ */ (0, b.jsxs)("div", {
		className: `mb-4 ${o} field-anim`,
		children: [/* @__PURE__ */ (0, b.jsx)("label", {
			className: "block text-brand-blue font-cinzel text-sm font-bold mb-2 uppercase tracking-wide",
			children: e
		}), /* @__PURE__ */ (0, b.jsx)("input", {
			type: i,
			name: t,
			value: n,
			onChange: r,
			placeholder: a,
			className: "w-full bg-white/50 border border-brand-yellow/30 rounded-none px-4 py-3 text-brand-blue placeholder-brand-blue/40 focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition-all font-montserrat"
		})]
	}), C = ({ label: e, name: t, value: n, onChange: r, options: i, placeholder: a = "Select...", width: o = "w-full" }) => /* @__PURE__ */ (0, b.jsxs)("div", {
		className: `mb-4 ${o} field-anim`,
		children: [/* @__PURE__ */ (0, b.jsx)("label", {
			className: "block text-brand-blue font-cinzel text-sm font-bold mb-2 uppercase tracking-wide",
			children: e
		}), /* @__PURE__ */ (0, b.jsxs)("select", {
			name: t,
			value: n,
			onChange: r,
			className: "w-full bg-white/50 border border-brand-yellow/30 rounded-none px-4 py-3 text-brand-blue focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition-all font-montserrat",
			children: [/* @__PURE__ */ (0, b.jsx)("option", {
				value: "",
				disabled: !0,
				children: a
			}), i.map((e) => /* @__PURE__ */ (0, b.jsx)("option", {
				value: e.value,
				children: e.label
			}, e.value))]
		})]
	}), w = () => {
		let [e, t] = (0, y.useState)(0), [n, r] = (0, y.useState)({
			surname: "",
			first_names: "",
			title: "",
			dob: "",
			occupation: "",
			home_address: "",
			postal_address: "",
			email: "",
			mobile: "",
			home_tel: "",
			work_tel: "",
			prev_club: "",
			handicap: "",
			player_id: "",
			category: "",
			proposer_name: "",
			proposer_id: "",
			seconder_name: "",
			seconder_id: "",
			date_signed: (/* @__PURE__ */ new Date()).toLocaleDateString("en-GB")
		}), [i, s] = (0, y.useState)(!1), [c, f] = (0, y.useState)(null), p = (0, y.useRef)(null), h = (0, y.useRef)(null), g = (0, y.useRef)(null), v = (0, y.useRef)(0), w = (0, y.useCallback)((e) => {
			if (!g.current || !p.current) return;
			let t = a.timeline(), n = e === "forward" ? 1 : -1;
			t.set(g.current, { opacity: 1 }).fromTo(g.current, {
				x: n * -120,
				y: 0,
				scale: .6
			}, {
				x: n * 120,
				y: -80,
				scale: 1,
				duration: .35,
				ease: "power2.out"
			}).to(g.current, {
				x: n * 300,
				y: 20,
				scale: .4,
				opacity: 0,
				duration: .3,
				ease: "power1.in"
			});
		}, []);
		(0, y.useEffect)(() => {
			if (!h.current) return;
			let t = e >= v.current ? "forward" : "backward", n = t === "forward" ? 60 : -60;
			a.fromTo(h.current, {
				opacity: 0,
				x: n,
				y: 10
			}, {
				opacity: 1,
				x: 0,
				y: 0,
				duration: .5,
				ease: "power3.out"
			});
			let r = h.current.querySelectorAll(".field-anim");
			r.length && a.fromTo(r, {
				opacity: 0,
				y: 20
			}, {
				opacity: 1,
				y: 0,
				duration: .4,
				stagger: .06,
				delay: .15,
				ease: "power2.out"
			}), w(t), v.current = e;
		}, [e, w]);
		let T = (e) => {
			let { name: t, value: n } = e.target;
			r((e) => ({
				...e,
				[t]: n
			}));
		}, E = () => t((e) => e + 1), D = () => t((e) => e - 1), O = async () => {
			s(!0);
			try {
				let e = window.wingateThemeData?.root || "/wp-json/", t = window.wingateThemeData?.publicRestNonce || "", r = await (await fetch(`${e}wingate/v1/generate-form`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						"X-Wingate-Nonce": t
					},
					body: JSON.stringify({
						...n,
						website: ""
					})
				})).json();
				r.success ? (f(r.url), E()) : alert("Error generating PDF. Please try again.");
			} catch (e) {
				console.error("Error:", e), alert("An error occurred.");
			} finally {
				s(!1);
			}
		}, k = [
			"Personal",
			"Contact",
			"History",
			"Membership"
		], A = [
			/* @__PURE__ */ (0, b.jsxs)("div", { children: [
				/* @__PURE__ */ (0, b.jsx)("h3", {
					className: "text-2xl font-cinzel text-brand-yellow mb-6 border-b border-brand-yellow/20 pb-2",
					children: "Personal Details"
				}),
				/* @__PURE__ */ (0, b.jsxs)("div", {
					className: "grid grid-cols-1 md:grid-cols-2 gap-4",
					children: [/* @__PURE__ */ (0, b.jsx)(S, {
						label: "Surname",
						name: "surname",
						value: n.surname,
						onChange: T
					}), /* @__PURE__ */ (0, b.jsx)(S, {
						label: "First Names",
						name: "first_names",
						value: n.first_names,
						onChange: T
					})]
				}),
				/* @__PURE__ */ (0, b.jsxs)("div", {
					className: "grid grid-cols-1 md:grid-cols-3 gap-4",
					children: [/* @__PURE__ */ (0, b.jsx)(C, {
						label: "Title",
						name: "title",
						value: n.title,
						onChange: T,
						options: [
							{
								value: "Mr",
								label: "Mr"
							},
							{
								value: "Mrs",
								label: "Mrs"
							},
							{
								value: "Ms",
								label: "Ms"
							},
							{
								value: "Dr",
								label: "Dr"
							},
							{
								value: "Prof",
								label: "Prof"
							},
							{
								value: "Miss",
								label: "Miss"
							},
							{
								value: "Rev",
								label: "Rev"
							},
							{
								value: "Hon",
								label: "Hon"
							}
						],
						placeholder: "Select title"
					}), /* @__PURE__ */ (0, b.jsx)("div", {
						className: "mb-4 md:col-span-2",
						children: /* @__PURE__ */ (0, b.jsx)(_, {
							label: "Date of Birth",
							name: "dob",
							value: n.dob,
							onChange: T
						})
					})]
				}),
				/* @__PURE__ */ (0, b.jsx)(S, {
					label: "Occupation",
					name: "occupation",
					value: n.occupation,
					onChange: T
				}),
				/* @__PURE__ */ (0, b.jsx)(S, {
					label: "Home Address",
					name: "home_address",
					value: n.home_address,
					onChange: T
				}),
				/* @__PURE__ */ (0, b.jsx)(S, {
					label: "Postal Address",
					name: "postal_address",
					value: n.postal_address,
					onChange: T,
					placeholder: "If different from home address"
				})
			] }, "personal"),
			/* @__PURE__ */ (0, b.jsxs)("div", { children: [
				/* @__PURE__ */ (0, b.jsx)("h3", {
					className: "text-2xl font-cinzel text-brand-yellow mb-6 border-b border-brand-yellow/20 pb-2",
					children: "Contact Details"
				}),
				/* @__PURE__ */ (0, b.jsx)(S, {
					label: "Email Address",
					name: "email",
					value: n.email,
					onChange: T,
					type: "email"
				}),
				/* @__PURE__ */ (0, b.jsxs)("div", {
					className: "grid grid-cols-1 md:grid-cols-3 gap-4",
					children: [
						/* @__PURE__ */ (0, b.jsx)(S, {
							label: "Mobile",
							name: "mobile",
							value: n.mobile,
							onChange: T
						}),
						/* @__PURE__ */ (0, b.jsx)(S, {
							label: "Home Tel",
							name: "home_tel",
							value: n.home_tel,
							onChange: T
						}),
						/* @__PURE__ */ (0, b.jsx)(S, {
							label: "Work Tel",
							name: "work_tel",
							value: n.work_tel,
							onChange: T
						})
					]
				})
			] }, "contact"),
			/* @__PURE__ */ (0, b.jsxs)("div", { children: [
				/* @__PURE__ */ (0, b.jsx)("h3", {
					className: "text-2xl font-cinzel text-brand-yellow mb-6 border-b border-brand-yellow/20 pb-2",
					children: "Golf History"
				}),
				/* @__PURE__ */ (0, b.jsx)(S, {
					label: "Previous Club",
					name: "prev_club",
					value: n.prev_club,
					onChange: T
				}),
				/* @__PURE__ */ (0, b.jsxs)("div", {
					className: "grid grid-cols-2 gap-4",
					children: [/* @__PURE__ */ (0, b.jsx)(S, {
						label: "Current Handicap",
						name: "handicap",
						value: n.handicap,
						onChange: T
					}), /* @__PURE__ */ (0, b.jsx)(S, {
						label: "SA Player ID",
						name: "player_id",
						value: n.player_id,
						onChange: T
					})]
				})
			] }, "golf"),
			/* @__PURE__ */ (0, b.jsxs)("div", { children: [
				/* @__PURE__ */ (0, b.jsx)("h3", {
					className: "text-2xl font-cinzel text-brand-yellow mb-6 border-b border-brand-yellow/20 pb-2",
					children: "Membership Category"
				}),
				/* @__PURE__ */ (0, b.jsx)("div", {
					className: "space-y-3 font-montserrat text-brand-blue",
					children: [
						"full_men",
						"full_ladies",
						"student",
						"country_men",
						"country_ladies",
						"junior",
						"senior",
						"limited"
					].map((e) => /* @__PURE__ */ (0, b.jsxs)("label", {
						className: "flex items-center space-x-3 cursor-pointer group p-3 border border-transparent hover:border-brand-yellow/30 rounded transition-all field-anim",
						children: [/* @__PURE__ */ (0, b.jsx)("input", {
							type: "radio",
							name: "category",
							value: e,
							checked: n.category === e,
							onChange: T,
							className: "form-radio text-brand-yellow focus:ring-brand-yellow h-5 w-5"
						}), /* @__PURE__ */ (0, b.jsx)("span", {
							className: "uppercase font-semibold group-hover:text-brand-yellow transition-colors",
							children: e.replace(/_/g, " ")
						})]
					}, e))
				}),
				/* @__PURE__ */ (0, b.jsx)("h3", {
					className: "text-xl font-cinzel text-brand-yellow mt-8 mb-4 border-b border-brand-yellow/20 pb-2",
					children: "Proposer & Seconder"
				}),
				/* @__PURE__ */ (0, b.jsxs)("div", {
					className: "grid grid-cols-2 gap-4",
					children: [
						/* @__PURE__ */ (0, b.jsx)(S, {
							label: "Proposer Name",
							name: "proposer_name",
							value: n.proposer_name,
							onChange: T
						}),
						/* @__PURE__ */ (0, b.jsx)(S, {
							label: "Membership No",
							name: "proposer_id",
							value: n.proposer_id,
							onChange: T
						}),
						/* @__PURE__ */ (0, b.jsx)(S, {
							label: "Seconder Name",
							name: "seconder_name",
							value: n.seconder_name,
							onChange: T
						}),
						/* @__PURE__ */ (0, b.jsx)(S, {
							label: "Membership No",
							name: "seconder_id",
							value: n.seconder_id,
							onChange: T
						})
					]
				})
			] }, "membership")
		];
		(0, y.useEffect)(() => {
			e !== A.length || !p.current || p.current.scrollIntoView({
				behavior: "smooth",
				block: "start"
			});
		}, [e, A.length]);
		let j = /* @__PURE__ */ (0, b.jsxs)("div", {
			className: "text-center py-10",
			children: [
				/* @__PURE__ */ (0, b.jsx)("div", {
					className: "flex justify-center mb-6",
					children: /* @__PURE__ */ (0, b.jsx)("div", {
						className: "bg-brand-yellow/20 p-4 rounded-full border-2 border-brand-yellow text-brand-yellow animate-bounce",
						children: /* @__PURE__ */ (0, b.jsx)(u, { size: 48 })
					})
				}),
				/* @__PURE__ */ (0, b.jsx)("h3", {
					className: "text-3xl font-cinzel text-brand-blue mb-4",
					children: "Application Ready!"
				}),
				/* @__PURE__ */ (0, b.jsx)("p", {
					className: "font-montserrat text-brand-blue/80 mb-8 max-w-md mx-auto",
					children: "Your application form has been generated. Please download, sign, and submit it to the club office."
				}),
				c && /* @__PURE__ */ (0, b.jsxs)("a", {
					href: c,
					target: "_blank",
					rel: "noopener noreferrer",
					className: "inline-flex items-center space-x-3 bg-brand-blue !text-white visited:!text-white no-underline hover:no-underline focus:no-underline px-8 py-4 rounded-none hover:bg-brand-blue/90 transition-all duration-300 font-cinzel font-bold text-lg shadow-lg group",
					children: [/* @__PURE__ */ (0, b.jsx)(o, { className: "group-hover:animate-bounce !text-white" }), /* @__PURE__ */ (0, b.jsx)("span", {
						className: "!text-white",
						children: "Download Application Form"
					})]
				}),
				/* @__PURE__ */ (0, b.jsxs)("p", {
					className: "mt-8 text-sm text-brand-blue/60 font-montserrat",
					children: ["Need a blank form instead? ", /* @__PURE__ */ (0, b.jsx)("a", {
						href: "/docs/forms/Membership_Application_2026.pdf",
						className: "text-brand-yellow hover:underline",
						children: "Download Blank PDF"
					})]
				})
			]
		}), M = e === A.length - 1, N = e === A.length;
		return /* @__PURE__ */ (0, b.jsxs)("div", {
			className: "w-full max-w-4xl mx-auto bg-white/95 backdrop-blur-sm border border-brand-yellow/20 shadow-2xl p-8 md:p-12 relative overflow-hidden",
			ref: p,
			children: [
				/* @__PURE__ */ (0, b.jsx)("div", {
					ref: g,
					className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 pointer-events-none opacity-0 z-30",
					children: /* @__PURE__ */ (0, b.jsx)(x, { className: "w-full h-full drop-shadow-lg" })
				}),
				!N && /* @__PURE__ */ (0, b.jsxs)("div", {
					className: "mb-10",
					children: [/* @__PURE__ */ (0, b.jsx)("div", {
						className: "flex justify-between mb-3",
						children: k.map((t, n) => /* @__PURE__ */ (0, b.jsxs)("div", {
							className: "flex flex-col items-center flex-1",
							children: [/* @__PURE__ */ (0, b.jsx)("div", {
								className: `w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold font-cinzel border-2 transition-all duration-500 ${n < e ? "bg-brand-yellow border-brand-yellow text-white" : n === e ? "border-brand-yellow text-brand-yellow bg-brand-yellow/10" : "border-brand-blue/20 text-brand-blue/40"}`,
								children: n < e ? /* @__PURE__ */ (0, b.jsx)(u, { size: 14 }) : n + 1
							}), /* @__PURE__ */ (0, b.jsx)("span", {
								className: `mt-1 text-[10px] uppercase tracking-widest font-cinzel transition-colors duration-300 ${n <= e ? "text-brand-yellow font-bold" : "text-brand-blue/40"}`,
								children: t
							})]
						}, t))
					}), /* @__PURE__ */ (0, b.jsx)("div", {
						className: "h-1 bg-brand-blue/10 w-full rounded-full overflow-hidden",
						children: /* @__PURE__ */ (0, b.jsx)("div", {
							className: "h-full bg-gradient-to-r from-brand-yellow to-brand-yellow transition-all duration-700 ease-out rounded-full",
							style: { width: `${(e + 1) / A.length * 100}%` }
						})
					})]
				}),
				/* @__PURE__ */ (0, b.jsx)("div", {
					ref: h,
					className: "min-h-[400px]",
					children: N ? j : A[e]
				}),
				!N && /* @__PURE__ */ (0, b.jsxs)("div", {
					className: "flex justify-between items-center mt-12 pt-6 border-t border-brand-blue/10",
					children: [e > 0 ? /* @__PURE__ */ (0, b.jsxs)("button", {
						onClick: D,
						className: "flex items-center space-x-2 text-brand-blue/60 hover:text-brand-blue font-montserrat font-semibold transition-colors group",
						children: [/* @__PURE__ */ (0, b.jsx)(m, {
							size: 18,
							className: "group-hover:-translate-x-1 transition-transform"
						}), /* @__PURE__ */ (0, b.jsx)("span", { children: "Back" })]
					}) : /* @__PURE__ */ (0, b.jsx)("div", {}), /* @__PURE__ */ (0, b.jsxs)("div", {
						className: "flex space-x-4",
						children: [/* @__PURE__ */ (0, b.jsxs)("button", {
							onClick: E,
							className: "flex items-center space-x-2 text-brand-blue/40 hover:text-brand-blue/60 font-montserrat text-sm transition-colors",
							children: [/* @__PURE__ */ (0, b.jsx)("span", { children: "Skip" }), /* @__PURE__ */ (0, b.jsx)(d, { size: 14 })]
						}), /* @__PURE__ */ (0, b.jsx)("button", {
							onClick: M ? O : E,
							disabled: i,
							className: "flex items-center space-x-2 bg-brand-blue text-white px-8 py-3 hover:bg-brand-yellow hover:text-brand-blue transition-all duration-300 font-cinzel font-bold shadow-md group",
							children: i ? /* @__PURE__ */ (0, b.jsxs)(b.Fragment, { children: [/* @__PURE__ */ (0, b.jsx)("span", { className: "inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" }), /* @__PURE__ */ (0, b.jsx)("span", { children: "Generating..." })] }) : /* @__PURE__ */ (0, b.jsxs)(b.Fragment, { children: [/* @__PURE__ */ (0, b.jsx)("span", { children: M ? "Finish & Download" : "Next Step" }), /* @__PURE__ */ (0, b.jsx)(l, {
								size: 18,
								className: "group-hover:translate-x-1 transition-transform"
							})] })
						})]
					})]
				})
			]
		});
	};
})), E, D, O;
//#endregion
t((() => {
	E = /* @__PURE__ */ e(n()), T(), i(), p(), D = r(), O = () => {
		let e = (0, E.useRef)(null), t = (0, E.useRef)(null), [n, r] = (0, E.useState)(null), [i, o] = (0, E.useState)(!0);
		return (0, E.useEffect)(() => {
			(async () => {
				try {
					let e = window.wingateThemeData?.root || "/wp-json/", t = await fetch(`${e}wingate/v1/membership-settings`);
					if (!t.ok) throw Error("Data fetch failed");
					let n = await t.json();
					r(n);
				} catch (e) {
					console.error("Error loading membership data:", e);
				} finally {
					o(!1);
				}
			})();
		}, []), (0, E.useEffect)(() => {
			if (i || !n) return;
			let r = a.context(() => {
				a.from(t.current, {
					y: 50,
					opacity: 0,
					duration: 1.2,
					ease: "power3.out"
				});
			}, e);
			return () => r.revert();
		}, [i, n]), i ? /* @__PURE__ */ (0, D.jsx)("div", {
			className: "bg-brand-gray min-h-screen font-montserrat flex items-center justify-center",
			children: /* @__PURE__ */ (0, D.jsx)("p", {
				className: "text-brand-blue",
				children: "Loading membership details..."
			})
		}) : n ? /* @__PURE__ */ (0, D.jsxs)("div", {
			className: "bg-brand-gray min-h-screen font-montserrat",
			children: [
				/* @__PURE__ */ (0, D.jsxs)("header", {
					ref: e,
					className: "relative h-[70vh] flex items-center justify-center bg-brand-blue overflow-hidden",
					children: [
						/* @__PURE__ */ (0, D.jsx)("div", {
							className: "absolute inset-0 bg-cover bg-center",
							style: { backgroundImage: `url('${n.hero.backgroundImage}')` }
						}),
						/* @__PURE__ */ (0, D.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-brand-blue/60 via-brand-blue/40 to-brand-blue/90" }),
						/* @__PURE__ */ (0, D.jsxs)("div", {
							className: "relative z-10 text-center px-4 max-w-4xl mx-auto",
							children: [/* @__PURE__ */ (0, D.jsx)("h1", {
								ref: t,
								className: "text-5xl md:text-7xl font-cinzel text-brand-yellow mb-6 tracking-wide drop-shadow-lg whitespace-pre-line",
								children: n.hero.title
							}), /* @__PURE__ */ (0, D.jsx)("p", {
								className: "text-lg md:text-xl text-white/90 font-light tracking-wider mb-8 whitespace-pre-line",
								children: n.hero.subtitle
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, D.jsx)("div", {
					className: "relative z-20 px-4 -mt-32 mb-20",
					children: /* @__PURE__ */ (0, D.jsx)(w, {})
				}),
				/* @__PURE__ */ (0, D.jsx)("section", {
					className: "py-20 bg-white",
					children: /* @__PURE__ */ (0, D.jsxs)("div", {
						className: "container mx-auto px-4",
						children: [
							/* @__PURE__ */ (0, D.jsxs)("div", {
								className: "text-center mb-16",
								children: [
									/* @__PURE__ */ (0, D.jsx)("span", {
										className: "text-brand-yellow font-cinzel tracking-widest uppercase text-sm font-bold",
										children: n.tiersIntro.kicker
									}),
									/* @__PURE__ */ (0, D.jsx)("h2", {
										className: "text-4xl font-cinzel text-brand-blue mt-2 whitespace-pre-line",
										children: n.tiersIntro.title
									}),
									/* @__PURE__ */ (0, D.jsx)("div", { className: "w-24 h-1 bg-brand-yellow mx-auto mt-6" })
								]
							}),
							/* @__PURE__ */ (0, D.jsx)("div", {
								className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",
								children: n.tiers.map((e, t) => /* @__PURE__ */ (0, D.jsxs)("div", {
									className: "bg-brand-gray p-8 border border-transparent hover:border-brand-yellow/50 transition-all duration-300 hover:shadow-xl group",
									children: [
										/* @__PURE__ */ (0, D.jsx)("h3", {
											className: "text-xl font-cinzel text-brand-blue mb-2",
											children: e.name
										}),
										/* @__PURE__ */ (0, D.jsx)("p", {
											className: "text-brand-yellow font-bold text-lg mb-6",
											children: e.price
										}),
										/* @__PURE__ */ (0, D.jsx)("ul", {
											className: "space-y-3 mb-8",
											children: e.features.split(",").map((e, t) => /* @__PURE__ */ (0, D.jsxs)("li", {
												className: "flex items-start text-sm text-brand-blue/80",
												children: [/* @__PURE__ */ (0, D.jsx)(u, {
													size: 16,
													className: "text-brand-yellow mr-2 mt-0.5"
												}), /* @__PURE__ */ (0, D.jsx)("span", { children: e.trim() })]
											}, t))
										})
									]
								}, t))
							}),
							/* @__PURE__ */ (0, D.jsx)("div", {
								className: "mt-12 text-center",
								children: /* @__PURE__ */ (0, D.jsxs)("a", {
									href: "/rates",
									className: "inline-flex items-center text-brand-blue font-cinzel font-bold text-sm tracking-widest uppercase border-b-2 border-brand-yellow hover:border-brand-blue transition-all pb-1 group",
									children: ["View All Rates & Subscriptions", /* @__PURE__ */ (0, D.jsx)(c, {
										size: 18,
										className: "ml-2 group-hover:translate-x-1 transition-transform"
									})]
								})
							}),
							/* @__PURE__ */ (0, D.jsxs)("div", {
								className: "mt-20 max-w-4xl mx-auto bg-brand-blue text-white p-10 md:p-14 text-center rounded-sm relative overflow-hidden",
								children: [/* @__PURE__ */ (0, D.jsx)("div", { className: "absolute top-0 right-0 w-64 h-64 bg-brand-yellow/10 rounded-full -mr-32 -mt-32 blur-3xl" }), /* @__PURE__ */ (0, D.jsxs)("div", {
									className: "relative z-10",
									children: [
										/* @__PURE__ */ (0, D.jsx)("h3", {
											className: "text-3xl font-cinzel text-brand-yellow mb-4 whitespace-pre-line",
											children: n.cta.title
										}),
										/* @__PURE__ */ (0, D.jsx)("p", {
											className: "mb-8 text-white/80 max-w-lg mx-auto whitespace-pre-line",
											children: n.cta.description
										}),
										/* @__PURE__ */ (0, D.jsx)("a", {
											href: n.cta.buttonUrl,
											className: "inline-block border border-brand-yellow text-brand-yellow no-underline hover:no-underline focus:no-underline px-8 py-3 hover:bg-brand-yellow hover:text-brand-blue transition-colors font-cinzel font-bold text-sm tracking-widest uppercase",
											children: n.cta.buttonText
										})
									]
								})]
							})
						]
					})
				})
			]
		}) : /* @__PURE__ */ (0, D.jsx)("div", {
			className: "bg-brand-gray min-h-screen font-montserrat flex items-center justify-center px-4",
			children: /* @__PURE__ */ (0, D.jsx)("p", {
				className: "text-brand-blue text-center",
				children: "Unable to load membership details right now. Please try again shortly."
			})
		});
	};
}))();
export { O as default };
