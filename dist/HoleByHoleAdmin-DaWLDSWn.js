import { r as d, j as e } from "./main-BM9ReWkY.js";
import { M as S } from "./MediaPicker-CdPXCK1m.js";
const H = [
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
], C = [-17.72073, 31.07663], E = [
  { n: 10, y: 19e-4, x: 7e-4, dy: 85e-5, dx: 15e-5 },
  { n: 11, y: 19e-4, x: 13e-4, dy: 55e-5, dx: 25e-5 },
  { n: 12, y: 12e-4, x: 18e-4, dy: -95e-5, dx: 2e-4 },
  { n: 13, y: 2e-4, x: 19e-4, dy: -9e-4, dx: -2e-4 },
  { n: 14, y: -8e-4, x: 14e-4, dy: -115e-5, dx: -45e-5 },
  { n: 15, y: -4e-4, x: 8e-4, dy: -9e-4, dx: 2e-4 },
  { n: 16, y: -11e-4, x: 4e-4, dy: -8e-4, dx: 4e-4 },
  { n: 17, y: -1e-4, x: -2e-4, dy: -1e-3, dx: -25e-5 }
].map((s) => {
  const l = [C[0] + s.y, C[1] + s.x], i = [l[0] + s.dy, l[1] + s.dx], n = [l[0] + s.dy * 0.33 + (s.n % 2 ? 11e-5 : -1e-4), l[1] + s.dx * 0.33], u = [l[0] + s.dy * 0.67, l[1] + s.dx * 0.67 + (s.n % 2 ? -9e-5 : 11e-5)];
  return { n: s.n, path: [l, n, u, i] };
}), R = [...H, ...E].sort((s, l) => s.n - l.n);
function L(s) {
  return R.find((l) => l.n === s)?.path || [];
}
const I = ({ pathData: s, onChange: l, holeNumber: i }) => {
  const n = d.useRef(null), u = d.useRef(null), g = d.useRef(null), b = d.useRef([]), [f, p] = d.useState(!1), x = () => s && s.length > 0 ? s : L(i), [r, m] = d.useState(x());
  d.useEffect(() => {
    if (!f || !u.current) return;
    if (!window.L) {
      console.error("Leaflet is not loaded on this page.");
      return;
    }
    const c = r.length > 0 ? r[0] : [-17.72073, 31.07663];
    return n.current || (n.current = window.L.map(u.current, {
      zoomControl: !0,
      scrollWheelZoom: !0,
      maxZoom: 19,
      minZoom: 14
    }).setView(c, 17), window.L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}", {
      maxZoom: 19,
      attribution: "Tiles &copy; Esri"
    }).addTo(n.current), n.current.on("click", (t) => {
      const o = [t.latlng.lat, t.latlng.lng];
      m((a) => [...a, o]);
    })), () => {
      n.current && (n.current.off("click"), n.current.remove(), n.current = null);
    };
  }, [f]), d.useEffect(() => {
    if (!(!n.current || !window.L)) {
      if (g.current && n.current.removeLayer(g.current), b.current.forEach((c) => n.current.removeLayer(c)), b.current = [], r && r.length > 0) {
        if (g.current = window.L.polyline(r, {
          color: "#ff7a00",
          weight: 5,
          opacity: 1
        }).addTo(n.current), r.length > 0) {
          const c = window.L.circleMarker(r[0], {
            radius: 6,
            weight: 2,
            color: "#ffffff",
            fillColor: "#0e1b3d",
            fillOpacity: 1
          }).bindTooltip("Tee", { permanent: !0, direction: "right", className: "font-bold text-xs" }).openTooltip().addTo(n.current);
          b.current.push(c);
        }
        if (r.length > 1) {
          const c = window.L.circleMarker(r[r.length - 1], {
            radius: 7,
            weight: 2,
            color: "#ffffff",
            fillColor: "#2b8a3e",
            fillOpacity: 1
          }).bindTooltip("Green", { permanent: !0, direction: "left", className: "font-bold text-xs text-green-700" }).openTooltip().addTo(n.current);
          b.current.push(c);
        }
        n.current.fitBounds(g.current.getBounds(), { padding: [20, 20], maxZoom: 18 });
      }
      setTimeout(() => {
        n.current && n.current.invalidateSize();
      }, 100);
    }
  }, [r, i, f]), d.useEffect(() => {
    s && s.length > 0 ? m(s) : m(L(i));
  }, [i, s]);
  const v = () => {
    m([]);
  }, N = () => {
    m((c) => c.slice(0, -1));
  }, h = () => {
    l(r), p(!1);
  }, y = () => {
    const c = x();
    if (JSON.stringify(r) !== JSON.stringify(c)) {
      if (!window.confirm(`You have unsaved changes to this hole's route.

Are you sure you want to discard these changes and close the editor?`))
        return;
      m(c);
    }
    p(!1);
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "map-editor-wrapper mt-4", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between items-center mb-2", children: [
      /* @__PURE__ */ e.jsx("span", { className: "text-sm font-bold text-gray-700", children: "Course Routing" }),
      /* @__PURE__ */ e.jsxs("span", { className: "text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded", children: [
        r.length,
        " Points Plotted"
      ] })
    ] }),
    /* @__PURE__ */ e.jsxs(
      "button",
      {
        type: "button",
        onClick: () => p(!0),
        className: "w-full py-4 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-brand-blue hover:text-brand-blue transition-colors flex flex-col items-center justify-center gap-2",
        children: [
          /* @__PURE__ */ e.jsx("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" }) }),
          /* @__PURE__ */ e.jsx("span", { className: "font-bold", children: "Open Fullscreen Editor" })
        ]
      }
    ),
    f && /* @__PURE__ */ e.jsx("div", { className: "fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-6", children: /* @__PURE__ */ e.jsxs("div", { className: "bg-white rounded-xl shadow-2xl w-full h-full max-w-6xl flex flex-col overflow-hidden animate-fade-in-up", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "p-4 border-b flex justify-between items-center bg-gray-50", children: [
        /* @__PURE__ */ e.jsxs("div", { children: [
          /* @__PURE__ */ e.jsxs("h3", { className: "font-cinzel font-bold text-xl text-brand-blue", children: [
            "Hole ",
            i,
            " Routing Editor"
          ] }),
          /* @__PURE__ */ e.jsxs("p", { className: "text-xs text-gray-500", children: [
            "Click on the map to place dots. First dot = ",
            /* @__PURE__ */ e.jsx("strong", { children: "Tee" }),
            ", Last dot = ",
            /* @__PURE__ */ e.jsx("strong", { children: "Green" }),
            "."
          ] })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex gap-2 items-center", children: [
          !window.L && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-red-500 font-bold mr-4", children: "Leaflet JS Load Error" }),
          /* @__PURE__ */ e.jsx(
            "button",
            {
              type: "button",
              onClick: N,
              disabled: r.length === 0,
              className: "text-sm bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded font-bold disabled:opacity-50",
              children: "Undo Point"
            }
          ),
          /* @__PURE__ */ e.jsx(
            "button",
            {
              type: "button",
              onClick: v,
              disabled: r.length === 0,
              className: "text-sm bg-red-100 text-red-700 hover:bg-red-200 px-4 py-2 rounded font-bold disabled:opacity-50",
              children: "Clear Route"
            }
          ),
          /* @__PURE__ */ e.jsx("div", { className: "w-px h-6 bg-gray-300 mx-2" }),
          /* @__PURE__ */ e.jsx(
            "button",
            {
              type: "button",
              onClick: y,
              className: "text-sm bg-white text-gray-700 hover:bg-gray-100 border border-gray-300 px-6 py-2 rounded font-bold transition-colors",
              children: "Cancel"
            }
          ),
          /* @__PURE__ */ e.jsx(
            "button",
            {
              type: "button",
              onClick: h,
              className: "text-sm bg-brand-blue text-white hover:bg-brand-yellow hover:text-brand-blue px-6 py-2 rounded font-bold transition-colors",
              children: "Save Route"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "flex-1 bg-gray-100 relative", children: /* @__PURE__ */ e.jsx(
        "div",
        {
          ref: u,
          className: "w-full h-full",
          style: { zIndex: 1 }
        }
      ) })
    ] }) })
  ] });
}, P = () => {
  const [s, l] = d.useState({
    hero: { title: "", subtitle: "", kicker: "", backgroundImage: "" },
    intro: { title: "", content: "" },
    holes: []
  }), [i, n] = d.useState(1), [u, g] = d.useState(!0), [b, f] = d.useState(!1), [p, x] = d.useState({ text: "", type: "" }), r = window.wingateAdminData?.root || "/wp-json/", m = window.wingateAdminData?.nonce || "";
  d.useEffect(() => {
    const t = new URLSearchParams(window.location.search), o = parseInt(t.get("hole"), 10);
    if (!isNaN(o) && o >= 1 && o <= 18 && n(o), !document.getElementById("leaflet-css")) {
      const a = document.createElement("link");
      a.id = "leaflet-css", a.rel = "stylesheet", a.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css", a.integrity = "sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=", a.crossOrigin = "", document.head.appendChild(a);
    }
    if (document.getElementById("leaflet-js"))
      v();
    else {
      const a = document.createElement("script");
      a.id = "leaflet-js", a.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js", a.integrity = "sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=", a.crossOrigin = "", a.onload = v, document.head.appendChild(a);
    }
  }, []);
  const v = async () => {
    g(!0);
    try {
      const t = await fetch(`${r}wingate/v1/hole-by-hole`);
      if (!t.ok) throw new Error("Failed to fetch settings");
      const o = await t.json();
      l(o);
    } catch (t) {
      x({ text: "Error loading settings: " + t.message, type: "error" });
    } finally {
      g(!1);
    }
  }, N = async () => {
    f(!0), x({ text: "", type: "" });
    try {
      if (!(await fetch(`${r}wingate/v1/hole-by-hole`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-WP-Nonce": m
        },
        body: JSON.stringify(s)
      })).ok) throw new Error("Failed to save settings");
      x({ text: "Settings saved successfully!", type: "success" }), setTimeout(() => x({ text: "", type: "" }), 3e3);
    } catch (t) {
      x({ text: "Error saving settings: " + t.message, type: "error" });
    } finally {
      f(!1);
    }
  }, h = (t, o, a) => {
    l((j) => ({
      ...j,
      [t]: {
        ...j[t],
        [o]: a
      }
    }));
  }, y = (t, o, a) => {
    l((j) => ({
      ...j,
      holes: j.holes.map(
        (k) => k.hole === t ? { ...k, [o]: a } : k
      )
    }));
  }, c = (t) => {
    n(t);
    const o = new URL(window.location);
    o.searchParams.set("hole", t), window.history.pushState({}, "", o);
  };
  if (u)
    return /* @__PURE__ */ e.jsx("div", { className: "p-8 text-center text-gray-500", children: "Loading Hole by Hole settings..." });
  const w = s.holes?.find((t) => t.hole === i) || { image: "", description: "" };
  return /* @__PURE__ */ e.jsxs("div", { className: "wingate-admin-spa max-w-5xl mx-auto p-6 font-montserrat", children: [
    /* @__PURE__ */ e.jsx("header", { className: "mb-8 border-b pb-4", children: /* @__PURE__ */ e.jsxs("div", { children: [
      /* @__PURE__ */ e.jsxs("h1", { className: "text-3xl font-cinzel font-bold text-brand-blue mb-1", children: [
        "Hole By Hole ",
        /* @__PURE__ */ e.jsx("span", { className: "text-brand-yellow", children: "Settings" })
      ] }),
      /* @__PURE__ */ e.jsx("p", { className: "text-gray-500 text-sm", children: "Manage the visual content for the Hole by Hole page." })
    ] }) }),
    /* @__PURE__ */ e.jsxs("div", { className: "fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-none", children: [
      p.text && /* @__PURE__ */ e.jsx("div", { className: `px-4 py-3 rounded-lg shadow-lg text-sm font-bold pointer-events-auto transform transition-all duration-300 ${p.type === "success" ? "bg-green-100 text-green-800 border border-green-200" : "bg-red-100 text-red-800 border border-red-200"} animate-fade-in-up`, children: p.text }),
      /* @__PURE__ */ e.jsx(
        "button",
        {
          onClick: N,
          disabled: b,
          className: "pointer-events-auto bg-brand-blue hover:bg-brand-yellow text-white hover:text-brand-blue font-bold py-3 px-8 rounded-full shadow-xl transition-all hover:scale-105 active:scale-95 flex items-center gap-2",
          children: b ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
            /* @__PURE__ */ e.jsxs("svg", { className: "animate-spin -ml-1 mr-2 h-5 w-5 text-current", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", children: [
              /* @__PURE__ */ e.jsx("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }),
              /* @__PURE__ */ e.jsx("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })
            ] }),
            "Saving..."
          ] }) : "Save All Settings"
        }
      )
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "space-y-8", children: [
      /* @__PURE__ */ e.jsxs("section", { className: "bg-white p-6 rounded-lg shadow-sm border border-gray-100", children: [
        /* @__PURE__ */ e.jsxs("h2", { className: "text-xl font-cinzel text-brand-blue font-bold mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ e.jsx("span", { className: "w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center text-sm", children: "1" }),
          "Hero Section"
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("label", { className: "block text-sm font-bold text-gray-700 mb-1", children: "Kicker" }),
              /* @__PURE__ */ e.jsx("input", { type: "text", value: s.hero.kicker, onChange: (t) => h("hero", "kicker", t.target.value), className: "w-full border-gray-300 rounded-md shadow-sm" })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("label", { className: "block text-sm font-bold text-gray-700 mb-1", children: "Title" }),
              /* @__PURE__ */ e.jsx("input", { type: "text", value: s.hero.title, onChange: (t) => h("hero", "title", t.target.value), className: "w-full border-gray-300 rounded-md shadow-sm" })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("label", { className: "block text-sm font-bold text-gray-700 mb-1", children: "Subtitle" }),
              /* @__PURE__ */ e.jsx("input", { type: "text", value: s.hero.subtitle, onChange: (t) => h("hero", "subtitle", t.target.value), className: "w-full border-gray-300 rounded-md shadow-sm" })
            ] })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsx("label", { className: "block text-sm font-bold text-gray-700 mb-1", children: "Background Image" }),
            /* @__PURE__ */ e.jsx(S, { value: s.hero.backgroundImage, onSelect: (t) => h("hero", "backgroundImage", t) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs("section", { className: "bg-white p-6 rounded-lg shadow-sm border border-gray-100", children: [
        /* @__PURE__ */ e.jsxs("h2", { className: "text-xl font-cinzel text-brand-blue font-bold mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ e.jsx("span", { className: "w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center text-sm", children: "2" }),
          "Intro Section"
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsx("label", { className: "block text-sm font-bold text-gray-700 mb-1", children: "Title" }),
            /* @__PURE__ */ e.jsx("input", { type: "text", value: s.intro.title, onChange: (t) => h("intro", "title", t.target.value), className: "w-full border-gray-300 rounded-md shadow-sm" })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsx("label", { className: "block text-sm font-bold text-gray-700 mb-1", children: "Content" }),
            /* @__PURE__ */ e.jsx(
              "textarea",
              {
                value: s.intro.content,
                onChange: (t) => h("intro", "content", t.target.value),
                className: "w-full border-gray-300 rounded-md shadow-sm",
                rows: "4"
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs("section", { className: "bg-white p-6 rounded-lg shadow-sm border border-gray-100", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between items-center mb-6", children: [
          /* @__PURE__ */ e.jsxs("h2", { className: "text-xl font-cinzel text-brand-blue font-bold flex items-center gap-2", children: [
            /* @__PURE__ */ e.jsx("span", { className: "w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center text-sm", children: "3" }),
            "Hole Content Editor"
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ e.jsx("label", { className: "text-sm font-bold text-gray-500 uppercase tracking-widest", children: "Select Hole:" }),
            /* @__PURE__ */ e.jsx(
              "select",
              {
                value: i,
                onChange: (t) => c(Number(t.target.value)),
                className: "border-gray-300 rounded-md shadow-sm font-cinzel font-bold text-brand-blue text-lg",
                children: Array.from({ length: 18 }, (t, o) => o + 1).map((t) => /* @__PURE__ */ e.jsxs("option", { value: t, children: [
                  "Hole ",
                  t
                ] }, t))
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "bg-brand-gray/30 p-6 rounded-xl border border-gray-100 flex flex-col md:flex-row gap-8", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex-1 space-y-4", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "bg-brand-blue text-white px-4 py-2 rounded-md inline-block mb-2", children: [
              /* @__PURE__ */ e.jsx("span", { className: "text-xs uppercase tracking-widest opacity-75 mr-2", children: "Editing" }),
              /* @__PURE__ */ e.jsxs("span", { className: "font-cinzel font-bold text-xl text-brand-yellow", children: [
                "Hole ",
                i
              ] })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("label", { className: "block text-sm font-bold text-gray-700 mb-2", children: "Hole Description" }),
              /* @__PURE__ */ e.jsx(
                "textarea",
                {
                  value: w.description,
                  onChange: (t) => y(i, "description", t.target.value),
                  className: "w-full border-gray-300 rounded-md shadow-sm min-h-[150px]",
                  placeholder: "Enter the description and strategy for this hole..."
                }
              ),
              /* @__PURE__ */ e.jsxs("p", { className: "text-xs text-gray-400 mt-2 italic", children: [
                "Note: Par, Index, and Distances for Hole ",
                i,
                " are managed in the ",
                /* @__PURE__ */ e.jsx("a", { href: "?page=wingate-scorecard-maker", className: "text-brand-blue underline", children: "Scorecard Maker" }),
                "."
              ] })
            ] })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ e.jsx("label", { className: "block text-sm font-bold text-gray-700 mb-2", children: "Hole Image" }),
            /* @__PURE__ */ e.jsx(
              S,
              {
                value: w.image,
                onSelect: (t) => y(i, "image", t)
              }
            ),
            /* @__PURE__ */ e.jsx(
              I,
              {
                pathData: w.path || [],
                onChange: (t) => y(i, "path", t),
                holeNumber: i
              }
            )
          ] })
        ] })
      ] })
    ] })
  ] });
};
export {
  P as default
};
