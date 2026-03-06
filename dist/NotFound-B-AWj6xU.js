import { r, g as a, j as e } from "./main-C_7mdrfg.js";
const v = () => {
  const u = r.useRef(null), x = r.useRef(null), p = r.useRef(null), l = r.useRef(null), o = r.useRef(null), h = r.useRef(null), c = r.useRef(null), n = r.useRef(null), f = r.useRef([]), s = r.useRef([]);
  return r.useLayoutEffect(() => {
    const t = a.context(() => {
      const m = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      a.timeline({ defaults: { ease: "power3.out" } }).fromTo(
        x.current.children,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.15 }
      ).fromTo(
        p.current,
        { x: 50, opacity: 0, scale: 0.95 },
        { x: 0, opacity: 1, scale: 1, duration: 1.2 },
        "-=0.8"
      );
      const i = f.current.filter(Boolean), d = s.current.filter(Boolean);
      a.set(l.current, { x: -160, y: -180, scale: 0.95, autoAlpha: 1 }), a.set(o.current, { scaleX: 0.32, scaleY: 0.22, autoAlpha: 0.12 }), a.set([c.current, n.current, ...d], {
        autoAlpha: 0,
        transformOrigin: "center bottom"
      }), a.set(i, { scaleX: 0.15, scaleY: 0.45, autoAlpha: 0 }), m || (a.to(h.current, {
        y: 1.5,
        duration: 2.2,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: !0
      }), a.timeline({ repeat: -1, repeatDelay: 1.2 }).to(l.current, {
        x: 0,
        y: 0,
        scale: 1,
        duration: 1.05,
        ease: "power2.in"
      }, "fall").to(o.current, {
        scaleX: 1,
        scaleY: 0.45,
        autoAlpha: 0.26,
        duration: 1.05,
        ease: "power2.in"
      }, "fall").to(l.current, {
        y: 22,
        scale: 0.88,
        autoAlpha: 0,
        duration: 0.12,
        ease: "power4.in"
      }, "impact").to(o.current, {
        scaleX: 1.22,
        autoAlpha: 0,
        duration: 0.25,
        ease: "power2.out"
      }, "impact").fromTo(
        c.current,
        { scaleY: 0.2, scaleX: 0.7, autoAlpha: 0 },
        { scaleY: 1, scaleX: 1, autoAlpha: 0.9, duration: 0.15, ease: "power3.out" },
        "impact"
      ).fromTo(
        n.current,
        { scaleY: 0.25, autoAlpha: 0 },
        { scaleY: 1.15, autoAlpha: 0.88, duration: 0.18, ease: "power2.out" },
        "impact+=0.02"
      ).to([c.current, n.current], {
        y: 20,
        autoAlpha: 0,
        duration: 0.5,
        ease: "power2.in"
      }, "impact+=0.18").to(i[0], { scaleX: 2.4, scaleY: 0.9, autoAlpha: 0, duration: 1.3, ease: "power1.out" }, "impact+=0.06").to(i[1], { scaleX: 2.9, scaleY: 1.02, autoAlpha: 0, duration: 1.5, ease: "power1.out" }, "impact+=0.2").to(i[2], { scaleX: 3.3, scaleY: 1.12, autoAlpha: 0, duration: 1.7, ease: "power1.out" }, "impact+=0.34").fromTo(
        d,
        { y: 0, autoAlpha: 0, scale: 0.7 },
        {
          y: (w, y) => Number(y.getAttribute("data-rise") || -40),
          autoAlpha: 0.9,
          scale: 1,
          duration: 0.2,
          ease: "power3.out",
          stagger: 0.03
        },
        "impact"
      ).to(d, {
        y: 18,
        autoAlpha: 0,
        duration: 0.45,
        ease: "power2.in",
        stagger: 0.02
      }, "impact+=0.18").set(l.current, { x: -160, y: -180, scale: 0.95, autoAlpha: 1 }, "reset").set(o.current, { scaleX: 0.32, scaleY: 0.22, autoAlpha: 0.12 }, "reset").set([c.current, n.current, ...d], { y: 0, autoAlpha: 0 }, "reset").set(i, { scaleX: 0.15, scaleY: 0.45, autoAlpha: 0 }, "reset"));
    }, u);
    return () => t.revert();
  }, []), /* @__PURE__ */ e.jsx("div", { className: "w-full bg-brand-gray font-montserrat", ref: u, children: /* @__PURE__ */ e.jsx("section", { className: "flex min-h-[78vh] items-center justify-center px-6 py-20 lg:px-10 lg:py-24", children: /* @__PURE__ */ e.jsxs("div", { className: "mx-auto flex w-full max-w-6xl flex-col items-center gap-12 md:flex-row lg:gap-20", children: [
    /* @__PURE__ */ e.jsxs("div", { ref: x, className: "order-2 flex-1 text-center md:order-1 md:text-left", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "mb-6 inline-block", children: [
        /* @__PURE__ */ e.jsx("h1", { className: "font-cinzel text-6xl font-bold uppercase leading-none tracking-wide text-brand-blue md:text-7xl lg:text-8xl", children: "404" }),
        /* @__PURE__ */ e.jsx("div", { className: "mx-auto mt-4 h-1 w-24 rounded-full bg-brand-yellow md:mx-0" })
      ] }),
      /* @__PURE__ */ e.jsx("p", { className: "mb-3 font-cinzel text-xs font-bold uppercase tracking-[0.28em] text-brand-yellow", children: "Out Of Bounds" }),
      /* @__PURE__ */ e.jsx("h2", { className: "mb-6 font-cinzel text-3xl font-bold uppercase tracking-wide text-brand-blue/90 md:text-4xl", children: "Water Hazard" }),
      /* @__PURE__ */ e.jsx("p", { className: "mx-auto mb-10 max-w-md text-lg leading-[1.7] text-brand-blue/75 md:mx-0", children: "It seems your shot has found the deep stuff. The page you are looking for is currently out of play." }),
      /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col justify-center gap-4 sm:flex-row md:justify-start", children: [
        /* @__PURE__ */ e.jsx(
          "a",
          {
            href: "/",
            className: "inline-flex items-center justify-center border border-brand-blue bg-brand-blue px-10 py-4 font-montserrat text-xs font-bold uppercase tracking-[0.15em] !text-white visited:!text-white focus:!text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-brand-yellow hover:bg-brand-yellow hover:!text-brand-blue",
            children: "Back To Clubhouse"
          }
        ),
        /* @__PURE__ */ e.jsx(
          "a",
          {
            href: "/contact-us",
            className: "inline-flex items-center justify-center border border-brand-yellow bg-brand-yellow px-10 py-4 font-montserrat text-xs font-bold uppercase tracking-[0.15em] !text-brand-blue visited:!text-brand-blue shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue hover:bg-brand-blue hover:!text-white",
            children: "Contact Pro Shop"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ e.jsx("div", { ref: p, className: "order-1 w-full max-w-[550px] flex-1 md:order-2", children: /* @__PURE__ */ e.jsxs("div", { className: "relative aspect-[16/9] w-full overflow-hidden rounded-sm border border-brand-yellow/25 bg-white shadow-2xl", children: [
      /* @__PURE__ */ e.jsxs("svg", { viewBox: "0 0 480 270", preserveAspectRatio: "xMidYMid slice", className: "h-full w-full", children: [
        /* @__PURE__ */ e.jsxs("defs", { children: [
          /* @__PURE__ */ e.jsxs("linearGradient", { id: "skyShade", x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
            /* @__PURE__ */ e.jsx("stop", { offset: "0%", stopColor: "#ffffff" }),
            /* @__PURE__ */ e.jsx("stop", { offset: "100%", stopColor: "#f5f5f5" })
          ] }),
          /* @__PURE__ */ e.jsxs("linearGradient", { id: "waterShade", x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
            /* @__PURE__ */ e.jsx("stop", { offset: "0%", stopColor: "#1f3b66" }),
            /* @__PURE__ */ e.jsx("stop", { offset: "100%", stopColor: "#0e1b3d" })
          ] }),
          /* @__PURE__ */ e.jsxs("radialGradient", { id: "ballShade", cx: "30%", cy: "30%", r: "70%", children: [
            /* @__PURE__ */ e.jsx("stop", { offset: "0%", stopColor: "#fff" }),
            /* @__PURE__ */ e.jsx("stop", { offset: "100%", stopColor: "#d8dde8" })
          ] })
        ] }),
        /* @__PURE__ */ e.jsx("rect", { x: "0", y: "0", width: "480", height: "270", fill: "url(#skyShade)" }),
        /* @__PURE__ */ e.jsx("path", { d: "M0 160 C80 145 160 165 240 155 C320 145 400 158 480 152 L480 270 L0 270 Z", fill: "#1a472a", opacity: "0.17" }),
        /* @__PURE__ */ e.jsx("path", { d: "M0 175 C100 165 200 180 300 170 C400 160 480 175 480 168 L480 270 L0 270 Z", fill: "#1a472a", opacity: "0.28" }),
        /* @__PURE__ */ e.jsxs("g", { ref: h, children: [
          /* @__PURE__ */ e.jsx("rect", { x: "0", y: "180", width: "480", height: "90", fill: "url(#waterShade)" }),
          /* @__PURE__ */ e.jsx("path", { d: "M0 180 C80 176 160 184 240 180 C320 176 400 184 480 180", fill: "none", stroke: "#ffcc00", strokeOpacity: "0.3", strokeWidth: "1.5" }),
          /* @__PURE__ */ e.jsx("path", { d: "M0 188 C100 184 200 192 300 188 C400 184 480 190 480 188", fill: "none", stroke: "#ffffff", strokeOpacity: "0.1", strokeWidth: "1" })
        ] }),
        /* @__PURE__ */ e.jsxs("g", { transform: "translate(240, 190)", children: [
          /* @__PURE__ */ e.jsx("ellipse", { ref: o, cx: "0", cy: "4", rx: "10", ry: "4", fill: "#091328" }),
          /* @__PURE__ */ e.jsx("ellipse", { ref: (t) => {
            f.current[0] = t;
          }, cx: "0", cy: "1", rx: "8", ry: "4", fill: "none", stroke: "#ffcc00", strokeOpacity: "0.3", strokeWidth: "1.5" }),
          /* @__PURE__ */ e.jsx("ellipse", { ref: (t) => {
            f.current[1] = t;
          }, cx: "0", cy: "1", rx: "8", ry: "4", fill: "none", stroke: "#ffffff", strokeOpacity: "0.25", strokeWidth: "1.5" }),
          /* @__PURE__ */ e.jsx("ellipse", { ref: (t) => {
            f.current[2] = t;
          }, cx: "0", cy: "1", rx: "8", ry: "4", fill: "none", stroke: "#ffcc00", strokeOpacity: "0.16", strokeWidth: "1.5" }),
          /* @__PURE__ */ e.jsx("path", { ref: c, d: "M-24 0 C-18 -22 -10 -22 -5 0 C-1 -26 1 -26 5 0 C10 -22 18 -22 24 0 L0 6 Z", fill: "#edf2f7" }),
          /* @__PURE__ */ e.jsx("path", { ref: n, d: "M-5 0 C-1 -40 1 -40 5 0 Z", fill: "#f7fafc" }),
          /* @__PURE__ */ e.jsx("circle", { ref: (t) => {
            s.current[0] = t;
          }, "data-rise": "-38", cx: "-22", cy: "-3", r: "2", fill: "#f7fafc" }),
          /* @__PURE__ */ e.jsx("circle", { ref: (t) => {
            s.current[1] = t;
          }, "data-rise": "-50", cx: "-12", cy: "-4", r: "1.8", fill: "#f7fafc" }),
          /* @__PURE__ */ e.jsx("circle", { ref: (t) => {
            s.current[2] = t;
          }, "data-rise": "-46", cx: "0", cy: "-6", r: "2.2", fill: "#ffffff" }),
          /* @__PURE__ */ e.jsx("circle", { ref: (t) => {
            s.current[3] = t;
          }, "data-rise": "-44", cx: "12", cy: "-4", r: "1.9", fill: "#f7fafc" }),
          /* @__PURE__ */ e.jsx("circle", { ref: (t) => {
            s.current[4] = t;
          }, "data-rise": "-36", cx: "23", cy: "-3", r: "1.7", fill: "#f7fafc" }),
          /* @__PURE__ */ e.jsx("circle", { ref: l, cx: "0", cy: "0", r: "8", fill: "url(#ballShade)" }),
          /* @__PURE__ */ e.jsx("circle", { cx: "-3", cy: "-3", r: "1.5", fill: "#ffffff", opacity: "0.75" })
        ] })
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-blue/12 to-transparent" })
    ] }) })
  ] }) }) });
};
export {
  v as default
};
