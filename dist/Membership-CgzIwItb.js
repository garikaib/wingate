import { r as s, j as e, g as z } from "./main-C_7mdrfg.js";
import { c as k } from "./createLucideIcon-DojwHVcP.js";
import { C as E } from "./chevron-right-B9m0gUW4.js";
import { A as O } from "./arrow-right-B0YJEfOH.js";
const H = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
], B = k("arrow-left", H);
const G = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
], U = k("calendar", G);
const W = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], T = k("check", W);
const J = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], V = k("chevron-left", J);
const q = [
  ["path", { d: "M12 15V3", key: "m9g1x1" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
], K = k("download", q);
const Q = [
  ["path", { d: "M21 4v16", key: "7j8fe9" }],
  [
    "path",
    {
      d: "M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z",
      key: "zs4d6"
    }
  ]
], X = k("skip-forward", Q), Z = ({ label: a, name: p, value: r, onChange: w, placeholder: f = "DD/MM/YYYY" }) => {
  const b = /* @__PURE__ */ new Date();
  b.setFullYear(b.getFullYear() - 5), b.setHours(0, 0, 0, 0);
  const [d, m] = s.useState(!1), [o, x] = s.useState(new Date(b)), [h, v] = s.useState(null), N = s.useRef(null);
  s.useEffect(() => {
    if (r) {
      const t = typeof r == "string" ? r.split("-").map(Number) : [], n = t.length === 3 ? new Date(t[0], t[1] - 1, t[2]) : new Date(r);
      isNaN(n.getTime()) || (v(n), x(n));
    }
  }, [r]), s.useEffect(() => {
    const t = (n) => {
      N.current && !N.current.contains(n.target) && m(!1);
    };
    return document.addEventListener("mousedown", t), () => document.removeEventListener("mousedown", t);
  }, []);
  const c = (t, n) => new Date(t, n + 1, 0).getDate(), _ = (t, n) => new Date(t, n, 1).getDay(), M = [
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
  ], A = Array.from({ length: 101 }, (t, n) => b.getFullYear() - n), y = (t) => t.getTime() > b.getTime(), $ = () => {
    const t = o.getFullYear(), n = o.getMonth(), i = c(t, n), Y = _(t, n), C = [];
    for (let g = 0; g < Y; g++)
      C.push(/* @__PURE__ */ e.jsx("div", { className: "p-2" }, `empty-${g}`));
    for (let g = 1; g <= i; g++) {
      const D = new Date(t, n, g), P = y(D), L = h && D.getDate() === h.getDate() && D.getMonth() === h.getMonth() && D.getFullYear() === h.getFullYear();
      C.push(
        /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: (I) => j(I, g),
            disabled: P,
            className: `
                        p-2 text-sm font-montserrat transition-all duration-200 rounded-sm
                        ${L ? "bg-brand-yellow text-brand-blue font-bold shadow-md" : "text-brand-blue hover:bg-brand-blue/10 hover:text-brand-yellow"}
                        ${P ? "opacity-30 cursor-not-allowed hover:bg-transparent hover:text-brand-blue" : ""}
                    `,
            children: g
          },
          g
        )
      );
    }
    return C;
  }, j = (t, n) => {
    t.preventDefault();
    const i = new Date(o.getFullYear(), o.getMonth(), n);
    if (y(i)) return;
    v(i), m(!1);
    const Y = i.getFullYear(), C = String(i.getMonth() + 1).padStart(2, "0"), g = String(i.getDate()).padStart(2, "0"), D = `${Y}-${C}-${g}`;
    w({
      target: {
        name: p,
        value: D
      }
    });
  }, F = (t, n) => {
    t.preventDefault();
    const i = new Date(o.getFullYear(), o.getMonth() + n, 1);
    y(i) || x(i);
  }, R = (t) => {
    const n = Number(t.target.value), i = new Date(o.getFullYear(), n, 1);
    y(i) || x(i);
  }, S = (t) => {
    const n = Number(t.target.value), i = new Date(n, o.getMonth(), 1);
    y(i) || x(i);
  }, l = (t) => t ? t.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" }) : "";
  return /* @__PURE__ */ e.jsxs("div", { className: `mb-4 w-full field-anim relative ${d ? "z-50" : "z-0"}`, ref: N, children: [
    /* @__PURE__ */ e.jsx("label", { className: "block text-brand-blue font-cinzel text-sm font-bold mb-2 uppercase tracking-wide", children: a }),
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        onClick: () => m(!d),
        className: `
                    w-full bg-white/50 border cursor-pointer flex items-center justify-between
                    px-4 py-3 text-brand-blue transition-all font-montserrat
                    ${d ? "border-brand-yellow ring-1 ring-brand-yellow" : "border-brand-yellow/30 hover:border-brand-yellow/60"}
                `,
        children: [
          /* @__PURE__ */ e.jsx("span", { className: h ? "text-brand-blue font-medium" : "text-brand-blue/40", children: h ? l(h) : f }),
          /* @__PURE__ */ e.jsx(U, { size: 18, className: "text-brand-yellow" })
        ]
      }
    ),
    d && /* @__PURE__ */ e.jsxs("div", { className: "absolute z-[1000] mt-1 top-full left-0 w-72 bg-white border border-brand-yellow/20 shadow-xl rounded-sm p-4 animate-in fade-in zoom-in-95 duration-200", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-2 mb-4 pb-3 border-b border-brand-yellow/10", children: [
        /* @__PURE__ */ e.jsx(
          "select",
          {
            value: o.getMonth(),
            onChange: R,
            className: "w-full border border-brand-yellow/30 bg-white px-2 py-2 text-sm font-montserrat text-brand-blue focus:outline-none focus:border-brand-yellow",
            children: M.map((t, n) => {
              const i = new Date(o.getFullYear(), n, 1);
              return /* @__PURE__ */ e.jsx("option", { value: n, disabled: y(i), children: t }, t);
            })
          }
        ),
        /* @__PURE__ */ e.jsx(
          "select",
          {
            value: o.getFullYear(),
            onChange: S,
            className: "w-full border border-brand-yellow/30 bg-white px-2 py-2 text-sm font-montserrat text-brand-blue focus:outline-none focus:border-brand-yellow",
            children: A.map((t) => /* @__PURE__ */ e.jsx("option", { value: t, children: t }, t))
          }
        )
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between items-center mb-2", children: [
        /* @__PURE__ */ e.jsx("button", { onClick: (t) => F(t, -1), className: "p-1 text-brand-blue hover:text-brand-yellow transition-colors", children: /* @__PURE__ */ e.jsx(V, { size: 16 }) }),
        /* @__PURE__ */ e.jsx("span", { className: "font-montserrat font-semibold text-brand-yellow uppercase text-sm tracking-wider", children: M[o.getMonth()] }),
        /* @__PURE__ */ e.jsx("button", { onClick: (t) => F(t, 1), className: "p-1 text-brand-blue hover:text-brand-yellow transition-colors", children: /* @__PURE__ */ e.jsx(E, { size: 16 }) })
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-7 mb-2", children: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((t) => /* @__PURE__ */ e.jsx("div", { className: "text-center text-[10px] font-bold text-brand-blue/40 uppercase font-cinzel", children: t }, t)) }),
      /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-7 gap-1", children: $() }),
      /* @__PURE__ */ e.jsx("div", { className: "mt-3 pt-2 border-t border-brand-blue/5 flex justify-center", children: /* @__PURE__ */ e.jsx(
        "button",
        {
          onClick: (t) => {
            t.preventDefault();
            const n = new Date(b);
            x(n), v(n);
            const i = { target: { name: p, value: n.toISOString().split("T")[0] } };
            w(i), m(!1);
          },
          className: "text-xs font-cinzel text-brand-yellow hover:text-brand-blue transition-colors uppercase tracking-widest font-bold",
          children: "Use Default (5 Years Ago)"
        }
      ) })
    ] })
  ] });
}, ee = ({ className: a = "" }) => /* @__PURE__ */ e.jsxs("svg", { viewBox: "0 0 40 40", className: a, fill: "none", children: [
  /* @__PURE__ */ e.jsx("circle", { cx: "20", cy: "20", r: "18", fill: "#fff", stroke: "#C5A059", strokeWidth: "1.5" }),
  /* @__PURE__ */ e.jsx("circle", { cx: "16", cy: "15", r: "1.2", fill: "#e0d6c2" }),
  /* @__PURE__ */ e.jsx("circle", { cx: "22", cy: "13", r: "1", fill: "#e0d6c2" }),
  /* @__PURE__ */ e.jsx("circle", { cx: "19", cy: "20", r: "1.1", fill: "#e0d6c2" }),
  /* @__PURE__ */ e.jsx("circle", { cx: "25", cy: "18", r: "0.9", fill: "#e0d6c2" }),
  /* @__PURE__ */ e.jsx("circle", { cx: "14", cy: "22", r: "1", fill: "#e0d6c2" })
] }), u = ({ label: a, name: p, value: r, onChange: w, type: f = "text", placeholder: b = "", width: d = "w-full" }) => /* @__PURE__ */ e.jsxs("div", { className: `mb-4 ${d} field-anim`, children: [
  /* @__PURE__ */ e.jsx("label", { className: "block text-brand-blue font-cinzel text-sm font-bold mb-2 uppercase tracking-wide", children: a }),
  /* @__PURE__ */ e.jsx(
    "input",
    {
      type: f,
      name: p,
      value: r,
      onChange: w,
      placeholder: b,
      className: "w-full bg-white/50 border border-brand-yellow/30 rounded-none px-4 py-3 text-brand-blue placeholder-brand-blue/40 focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition-all font-montserrat"
    }
  )
] }), te = ({ label: a, name: p, value: r, onChange: w, options: f, placeholder: b = "Select...", width: d = "w-full" }) => /* @__PURE__ */ e.jsxs("div", { className: `mb-4 ${d} field-anim`, children: [
  /* @__PURE__ */ e.jsx("label", { className: "block text-brand-blue font-cinzel text-sm font-bold mb-2 uppercase tracking-wide", children: a }),
  /* @__PURE__ */ e.jsxs(
    "select",
    {
      name: p,
      value: r,
      onChange: w,
      className: "w-full bg-white/50 border border-brand-yellow/30 rounded-none px-4 py-3 text-brand-blue focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition-all font-montserrat",
      children: [
        /* @__PURE__ */ e.jsx("option", { value: "", disabled: !0, children: b }),
        f.map((m) => /* @__PURE__ */ e.jsx("option", { value: m.value, children: m.label }, m.value))
      ]
    }
  )
] }), re = () => {
  const [a, p] = s.useState(0), [r, w] = s.useState({
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
  }), [f, b] = s.useState(!1), [d, m] = s.useState(null), o = s.useRef(null), x = s.useRef(null), h = s.useRef(null), v = s.useRef(0), N = s.useCallback((l) => {
    if (!h.current || !o.current) return;
    const t = z.timeline(), n = l === "forward" ? 1 : -1;
    t.set(h.current, { opacity: 1 }).fromTo(
      h.current,
      { x: n * -120, y: 0, scale: 0.6 },
      { x: n * 120, y: -80, scale: 1, duration: 0.35, ease: "power2.out" }
    ).to(
      h.current,
      { x: n * 300, y: 20, scale: 0.4, opacity: 0, duration: 0.3, ease: "power1.in" }
    );
  }, []);
  s.useEffect(() => {
    if (!x.current) return;
    const l = a >= v.current ? "forward" : "backward", t = l === "forward" ? 60 : -60;
    z.fromTo(
      x.current,
      { opacity: 0, x: t, y: 10 },
      { opacity: 1, x: 0, y: 0, duration: 0.5, ease: "power3.out" }
    );
    const n = x.current.querySelectorAll(".field-anim");
    n.length && z.fromTo(
      n,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.4, stagger: 0.06, delay: 0.15, ease: "power2.out" }
    ), N(l), v.current = a;
  }, [a, N]);
  const c = (l) => {
    const { name: t, value: n } = l.target;
    w((i) => ({ ...i, [t]: n }));
  }, _ = () => p((l) => l + 1), M = () => p((l) => l - 1), A = async () => {
    b(!0);
    try {
      const t = await (await fetch("/wp-json/wingate/v1/generate-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(r)
      })).json();
      t.success ? (m(t.url), _()) : alert("Error generating PDF. Please try again.");
    } catch (l) {
      console.error("Error:", l), alert("An error occurred.");
    } finally {
      b(!1);
    }
  }, y = ["Personal", "Contact", "History", "Membership"], $ = [
    { value: "Mr", label: "Mr" },
    { value: "Mrs", label: "Mrs" },
    { value: "Ms", label: "Ms" },
    { value: "Dr", label: "Dr" },
    { value: "Prof", label: "Prof" },
    { value: "Miss", label: "Miss" },
    { value: "Rev", label: "Rev" },
    { value: "Hon", label: "Hon" }
  ], j = [
    // 0. Personal Details
    /* @__PURE__ */ e.jsxs("div", { children: [
      /* @__PURE__ */ e.jsx("h3", { className: "text-2xl font-cinzel text-brand-yellow mb-6 border-b border-brand-yellow/20 pb-2", children: "Personal Details" }),
      /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ e.jsx(u, { label: "Surname", name: "surname", value: r.surname, onChange: c }),
        /* @__PURE__ */ e.jsx(u, { label: "First Names", name: "first_names", value: r.first_names, onChange: c })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
        /* @__PURE__ */ e.jsx(
          te,
          {
            label: "Title",
            name: "title",
            value: r.title,
            onChange: c,
            options: $,
            placeholder: "Select title"
          }
        ),
        /* @__PURE__ */ e.jsx("div", { className: "mb-4 md:col-span-2", children: /* @__PURE__ */ e.jsx(
          Z,
          {
            label: "Date of Birth",
            name: "dob",
            value: r.dob,
            onChange: c
          }
        ) })
      ] }),
      /* @__PURE__ */ e.jsx(u, { label: "Occupation", name: "occupation", value: r.occupation, onChange: c }),
      /* @__PURE__ */ e.jsx(u, { label: "Home Address", name: "home_address", value: r.home_address, onChange: c }),
      /* @__PURE__ */ e.jsx(u, { label: "Postal Address", name: "postal_address", value: r.postal_address, onChange: c, placeholder: "If different from home address" })
    ] }, "personal"),
    // 1. Contact Details
    /* @__PURE__ */ e.jsxs("div", { children: [
      /* @__PURE__ */ e.jsx("h3", { className: "text-2xl font-cinzel text-brand-yellow mb-6 border-b border-brand-yellow/20 pb-2", children: "Contact Details" }),
      /* @__PURE__ */ e.jsx(u, { label: "Email Address", name: "email", value: r.email, onChange: c, type: "email" }),
      /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
        /* @__PURE__ */ e.jsx(u, { label: "Mobile", name: "mobile", value: r.mobile, onChange: c }),
        /* @__PURE__ */ e.jsx(u, { label: "Home Tel", name: "home_tel", value: r.home_tel, onChange: c }),
        /* @__PURE__ */ e.jsx(u, { label: "Work Tel", name: "work_tel", value: r.work_tel, onChange: c })
      ] })
    ] }, "contact"),
    // 2. Golf History
    /* @__PURE__ */ e.jsxs("div", { children: [
      /* @__PURE__ */ e.jsx("h3", { className: "text-2xl font-cinzel text-brand-yellow mb-6 border-b border-brand-yellow/20 pb-2", children: "Golf History" }),
      /* @__PURE__ */ e.jsx(u, { label: "Previous Club", name: "prev_club", value: r.prev_club, onChange: c }),
      /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
        /* @__PURE__ */ e.jsx(u, { label: "Current Handicap", name: "handicap", value: r.handicap, onChange: c }),
        /* @__PURE__ */ e.jsx(u, { label: "SA Player ID", name: "player_id", value: r.player_id, onChange: c })
      ] })
    ] }, "golf"),
    // 3. Membership Category
    /* @__PURE__ */ e.jsxs("div", { children: [
      /* @__PURE__ */ e.jsx("h3", { className: "text-2xl font-cinzel text-brand-yellow mb-6 border-b border-brand-yellow/20 pb-2", children: "Membership Category" }),
      /* @__PURE__ */ e.jsx("div", { className: "space-y-3 font-montserrat text-brand-blue", children: ["full_men", "full_ladies", "student", "country_men", "country_ladies", "junior", "senior", "limited"].map((l) => /* @__PURE__ */ e.jsxs("label", { className: "flex items-center space-x-3 cursor-pointer group p-3 border border-transparent hover:border-brand-yellow/30 rounded transition-all field-anim", children: [
        /* @__PURE__ */ e.jsx(
          "input",
          {
            type: "radio",
            name: "category",
            value: l,
            checked: r.category === l,
            onChange: c,
            className: "form-radio text-brand-yellow focus:ring-brand-yellow h-5 w-5"
          }
        ),
        /* @__PURE__ */ e.jsx("span", { className: "uppercase font-semibold group-hover:text-brand-yellow transition-colors", children: l.replace(/_/g, " ") })
      ] }, l)) }),
      /* @__PURE__ */ e.jsx("h3", { className: "text-xl font-cinzel text-brand-yellow mt-8 mb-4 border-b border-brand-yellow/20 pb-2", children: "Proposer & Seconder" }),
      /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
        /* @__PURE__ */ e.jsx(u, { label: "Proposer Name", name: "proposer_name", value: r.proposer_name, onChange: c }),
        /* @__PURE__ */ e.jsx(u, { label: "Membership No", name: "proposer_id", value: r.proposer_id, onChange: c }),
        /* @__PURE__ */ e.jsx(u, { label: "Seconder Name", name: "seconder_name", value: r.seconder_name, onChange: c }),
        /* @__PURE__ */ e.jsx(u, { label: "Membership No", name: "seconder_id", value: r.seconder_id, onChange: c })
      ] })
    ] }, "membership")
  ];
  s.useEffect(() => {
    a !== j.length || !o.current || o.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [a, j.length]);
  const F = /* @__PURE__ */ e.jsxs("div", { className: "text-center py-10", children: [
    /* @__PURE__ */ e.jsx("div", { className: "flex justify-center mb-6", children: /* @__PURE__ */ e.jsx("div", { className: "bg-brand-yellow/20 p-4 rounded-full border-2 border-brand-yellow text-brand-yellow animate-bounce", children: /* @__PURE__ */ e.jsx(T, { size: 48 }) }) }),
    /* @__PURE__ */ e.jsx("h3", { className: "text-3xl font-cinzel text-brand-blue mb-4", children: "Application Ready!" }),
    /* @__PURE__ */ e.jsx("p", { className: "font-montserrat text-brand-blue/80 mb-8 max-w-md mx-auto", children: "Your application form has been generated. Please download, sign, and submit it to the club office." }),
    d && /* @__PURE__ */ e.jsxs(
      "a",
      {
        href: d,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "inline-flex items-center space-x-3 bg-brand-blue !text-white visited:!text-white no-underline hover:no-underline focus:no-underline px-8 py-4 rounded-none hover:bg-brand-blue/90 transition-all duration-300 font-cinzel font-bold text-lg shadow-lg group",
        children: [
          /* @__PURE__ */ e.jsx(K, { className: "group-hover:animate-bounce !text-white" }),
          /* @__PURE__ */ e.jsx("span", { className: "!text-white", children: "Download Application Form" })
        ]
      }
    ),
    /* @__PURE__ */ e.jsxs("p", { className: "mt-8 text-sm text-brand-blue/60 font-montserrat", children: [
      "Need a blank form instead? ",
      /* @__PURE__ */ e.jsx("a", { href: "/docs/forms/Membership_Application_2026.pdf", className: "text-brand-yellow hover:underline", children: "Download Blank PDF" })
    ] })
  ] }), R = a === j.length - 1, S = a === j.length;
  return /* @__PURE__ */ e.jsxs("div", { className: "w-full max-w-4xl mx-auto bg-white/95 backdrop-blur-sm border border-brand-yellow/20 shadow-2xl p-8 md:p-12 relative overflow-hidden", ref: o, children: [
    /* @__PURE__ */ e.jsx("div", { ref: h, className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 pointer-events-none opacity-0 z-30", children: /* @__PURE__ */ e.jsx(ee, { className: "w-full h-full drop-shadow-lg" }) }),
    !S && /* @__PURE__ */ e.jsxs("div", { className: "mb-10", children: [
      /* @__PURE__ */ e.jsx("div", { className: "flex justify-between mb-3", children: y.map((l, t) => /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col items-center flex-1", children: [
        /* @__PURE__ */ e.jsx("div", { className: `w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold font-cinzel border-2 transition-all duration-500 ${t < a ? "bg-brand-yellow border-brand-yellow text-white" : t === a ? "border-brand-yellow text-brand-yellow bg-brand-yellow/10" : "border-brand-blue/20 text-brand-blue/40"}`, children: t < a ? /* @__PURE__ */ e.jsx(T, { size: 14 }) : t + 1 }),
        /* @__PURE__ */ e.jsx("span", { className: `mt-1 text-[10px] uppercase tracking-widest font-cinzel transition-colors duration-300 ${t <= a ? "text-brand-yellow font-bold" : "text-brand-blue/40"}`, children: l })
      ] }, l)) }),
      /* @__PURE__ */ e.jsx("div", { className: "h-1 bg-brand-blue/10 w-full rounded-full overflow-hidden", children: /* @__PURE__ */ e.jsx(
        "div",
        {
          className: "h-full bg-gradient-to-r from-brand-yellow to-brand-yellow transition-all duration-700 ease-out rounded-full",
          style: { width: `${(a + 1) / j.length * 100}%` }
        }
      ) })
    ] }),
    /* @__PURE__ */ e.jsx("div", { ref: x, className: "min-h-[400px]", children: S ? F : j[a] }),
    !S && /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between items-center mt-12 pt-6 border-t border-brand-blue/10", children: [
      a > 0 ? /* @__PURE__ */ e.jsxs(
        "button",
        {
          onClick: M,
          className: "flex items-center space-x-2 text-brand-blue/60 hover:text-brand-blue font-montserrat font-semibold transition-colors group",
          children: [
            /* @__PURE__ */ e.jsx(B, { size: 18, className: "group-hover:-translate-x-1 transition-transform" }),
            /* @__PURE__ */ e.jsx("span", { children: "Back" })
          ]
        }
      ) : /* @__PURE__ */ e.jsx("div", {}),
      /* @__PURE__ */ e.jsxs("div", { className: "flex space-x-4", children: [
        /* @__PURE__ */ e.jsxs(
          "button",
          {
            onClick: _,
            className: "flex items-center space-x-2 text-brand-blue/40 hover:text-brand-blue/60 font-montserrat text-sm transition-colors",
            children: [
              /* @__PURE__ */ e.jsx("span", { children: "Skip" }),
              /* @__PURE__ */ e.jsx(X, { size: 14 })
            ]
          }
        ),
        /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: R ? A : _,
            disabled: f,
            className: "flex items-center space-x-2 bg-brand-blue text-white px-8 py-3 hover:bg-brand-yellow hover:text-brand-blue transition-all duration-300 font-cinzel font-bold shadow-md group",
            children: f ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
              /* @__PURE__ */ e.jsx("span", { className: "inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" }),
              /* @__PURE__ */ e.jsx("span", { children: "Generating..." })
            ] }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
              /* @__PURE__ */ e.jsx("span", { children: R ? "Finish & Download" : "Next Step" }),
              /* @__PURE__ */ e.jsx(O, { size: 18, className: "group-hover:translate-x-1 transition-transform" })
            ] })
          }
        )
      ] })
    ] })
  ] });
}, oe = () => {
  const a = s.useRef(null), p = s.useRef(null), [r, w] = s.useState(null), [f, b] = s.useState(!0);
  return s.useEffect(() => {
    (async () => {
      try {
        const m = window.wingateThemeData?.root || "/wp-json/", o = await fetch(`${m}wingate/v1/membership-settings`);
        if (!o.ok) throw new Error("Data fetch failed");
        const x = await o.json();
        w(x);
      } catch (m) {
        console.error("Error loading membership data:", m);
      } finally {
        b(!1);
      }
    })();
  }, []), s.useEffect(() => {
    if (f || !r) return;
    const d = z.context(() => {
      z.from(p.current, {
        y: 50,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out"
      });
    }, a);
    return () => d.revert();
  }, [f, r]), f ? /* @__PURE__ */ e.jsx("div", { className: "bg-brand-gray min-h-screen font-montserrat flex items-center justify-center", children: /* @__PURE__ */ e.jsx("p", { className: "text-brand-blue", children: "Loading membership details..." }) }) : r ? /* @__PURE__ */ e.jsxs("div", { className: "bg-brand-gray min-h-screen font-montserrat", children: [
    /* @__PURE__ */ e.jsxs("header", { ref: a, className: "relative h-[70vh] flex items-center justify-center bg-brand-blue overflow-hidden", children: [
      /* @__PURE__ */ e.jsx("div", { className: "absolute inset-0 bg-cover bg-center", style: { backgroundImage: `url('${r.hero.backgroundImage}')` } }),
      /* @__PURE__ */ e.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-brand-blue/60 via-brand-blue/40 to-brand-blue/90" }),
      /* @__PURE__ */ e.jsxs("div", { className: "relative z-10 text-center px-4 max-w-4xl mx-auto", children: [
        /* @__PURE__ */ e.jsx("h1", { ref: p, className: "text-5xl md:text-7xl font-cinzel text-brand-yellow mb-6 tracking-wide drop-shadow-lg whitespace-pre-line", children: r.hero.title }),
        /* @__PURE__ */ e.jsx("p", { className: "text-lg md:text-xl text-white/90 font-light tracking-wider mb-8 whitespace-pre-line", children: r.hero.subtitle })
      ] })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "relative z-20 px-4 -mt-32 mb-20", children: /* @__PURE__ */ e.jsx(re, {}) }),
    /* @__PURE__ */ e.jsx("section", { className: "py-20 bg-white", children: /* @__PURE__ */ e.jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ e.jsx("span", { className: "text-brand-yellow font-cinzel tracking-widest uppercase text-sm font-bold", children: r.tiersIntro.kicker }),
        /* @__PURE__ */ e.jsx("h2", { className: "text-4xl font-cinzel text-brand-blue mt-2 whitespace-pre-line", children: r.tiersIntro.title }),
        /* @__PURE__ */ e.jsx("div", { className: "w-24 h-1 bg-brand-yellow mx-auto mt-6" })
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8", children: r.tiers.map((d, m) => /* @__PURE__ */ e.jsxs("div", { className: "bg-brand-gray p-8 border border-transparent hover:border-brand-yellow/50 transition-all duration-300 hover:shadow-xl group", children: [
        /* @__PURE__ */ e.jsx("h3", { className: "text-xl font-cinzel text-brand-blue mb-2", children: d.name }),
        /* @__PURE__ */ e.jsx("p", { className: "text-brand-yellow font-bold text-lg mb-6", children: d.price }),
        /* @__PURE__ */ e.jsx("ul", { className: "space-y-3 mb-8", children: d.features.split(",").map((o, x) => /* @__PURE__ */ e.jsxs("li", { className: "flex items-start text-sm text-brand-blue/80", children: [
          /* @__PURE__ */ e.jsx(T, { size: 16, className: "text-brand-yellow mr-2 mt-0.5" }),
          /* @__PURE__ */ e.jsx("span", { children: o.trim() })
        ] }, x)) })
      ] }, m)) }),
      /* @__PURE__ */ e.jsx("div", { className: "mt-12 text-center", children: /* @__PURE__ */ e.jsxs(
        "a",
        {
          href: "/rates",
          className: "inline-flex items-center text-brand-blue font-cinzel font-bold text-sm tracking-widest uppercase border-b-2 border-brand-yellow hover:border-brand-blue transition-all pb-1 group",
          children: [
            "View All Rates & Subscriptions",
            /* @__PURE__ */ e.jsx(E, { size: 18, className: "ml-2 group-hover:translate-x-1 transition-transform" })
          ]
        }
      ) }),
      /* @__PURE__ */ e.jsxs("div", { className: "mt-20 max-w-4xl mx-auto bg-brand-blue text-white p-10 md:p-14 text-center rounded-sm relative overflow-hidden", children: [
        /* @__PURE__ */ e.jsx("div", { className: "absolute top-0 right-0 w-64 h-64 bg-brand-yellow/10 rounded-full -mr-32 -mt-32 blur-3xl" }),
        /* @__PURE__ */ e.jsxs("div", { className: "relative z-10", children: [
          /* @__PURE__ */ e.jsx("h3", { className: "text-3xl font-cinzel text-brand-yellow mb-4 whitespace-pre-line", children: r.cta.title }),
          /* @__PURE__ */ e.jsx("p", { className: "mb-8 text-white/80 max-w-lg mx-auto whitespace-pre-line", children: r.cta.description }),
          /* @__PURE__ */ e.jsx(
            "a",
            {
              href: r.cta.buttonUrl,
              className: "inline-block border border-brand-yellow text-brand-yellow no-underline hover:no-underline focus:no-underline px-8 py-3 hover:bg-brand-yellow hover:text-brand-blue transition-colors font-cinzel font-bold text-sm tracking-widest uppercase",
              children: r.cta.buttonText
            }
          )
        ] })
      ] })
    ] }) })
  ] }) : /* @__PURE__ */ e.jsx("div", { className: "bg-brand-gray min-h-screen font-montserrat flex items-center justify-center px-4", children: /* @__PURE__ */ e.jsx("p", { className: "text-brand-blue text-center", children: "Unable to load membership details right now. Please try again shortly." }) });
};
export {
  oe as default
};
