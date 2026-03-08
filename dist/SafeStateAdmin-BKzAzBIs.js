import { r as d, j as e } from "./main-BM9ReWkY.js";
const u = () => {
  const [t, s] = d.useState("idle"), [a, r] = d.useState(""), c = async () => {
    if (window.confirm(
      `WARNING! DANGEROUS ACTION

This will completely wipe any custom Site Editor templates and overwrite physical theme files with the factory-default files.

Are you absolutely sure you want to restore the theme to its safe state?`
    )) {
      s("loading"), r("Restoring templates and extracting safe files... Do not close this tab.");
      try {
        const o = window.wingateAdminData?.root || "/wp-json/", n = window.wingateAdminData?.nonce, m = `${o}wingate/v1/restore-safe-state`, x = {
          "Content-Type": "application/json",
          ...n ? { "X-WP-Nonce": n } : {}
        }, l = await fetch(m, { method: "POST", headers: x }), i = await l.json();
        l.ok ? (s("success"), r(i.message || "Theme successfully restored to a safe state.")) : (s("error"), r(i.message || "An error occurred during restoration."));
      } catch (o) {
        console.error(o), s("error"), r("A network error occurred while communicating with the server.");
      }
    }
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "wingate-admin-spa max-w-4xl mx-auto p-4 md:p-8 text-brand-blue", children: [
    /* @__PURE__ */ e.jsxs("header", { className: "mb-8 md:mb-10", children: [
      /* @__PURE__ */ e.jsx("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-[10px] font-bold uppercase tracking-[0.2em] text-red-700 mb-4 border border-red-200", children: "Emergency Tools" }),
      /* @__PURE__ */ e.jsxs("h1", { className: "text-4xl md:text-5xl font-cinzel font-bold uppercase leading-none tracking-tight mb-3", children: [
        "Restore ",
        /* @__PURE__ */ e.jsx("span", { className: "text-brand-yellow", children: "Safe State" })
      ] }),
      /* @__PURE__ */ e.jsx("p", { className: "text-sm md:text-base text-gray-600 max-w-2xl", children: "Use this tool strictly in emergencies when the website layout or templates have been mangled. This process wipes all Site Editor custom templates for this theme and extracts a factory-default zip to restore physical files." })
    ] }),
    /* @__PURE__ */ e.jsxs("section", { className: "bg-white p-6 md:p-8 rounded-[2rem] shadow-xl border border-red-100 mb-8 max-w-2xl", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex gap-4 items-start bg-red-50 p-6 rounded-xl border border-red-200 mb-8", children: [
        /* @__PURE__ */ e.jsx("svg", { className: "w-8 h-8 text-red-600 shrink-0 mt-1", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" }) }),
        /* @__PURE__ */ e.jsxs("div", { children: [
          /* @__PURE__ */ e.jsx("h3", { className: "text-red-800 font-bold text-lg mb-2", children: "Severe Warning" }),
          /* @__PURE__ */ e.jsx("p", { className: "text-sm text-red-700 leading-relaxed", children: "Clicking the button below is a destructive action. It deletes WP Templates stored in your database and unzips a fresh copy of the theme files instantly. Make sure you truly want a factory reset before proceeding." })
        ] })
      ] }),
      t === "loading" && /* @__PURE__ */ e.jsxs("div", { className: "bg-blue-50 text-blue-800 p-4 border border-blue-200 rounded-lg flex items-center gap-3 font-bold text-sm mb-6 animate-pulse", children: [
        /* @__PURE__ */ e.jsxs("svg", { className: "animate-spin h-5 w-5 text-blue-600", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", children: [
          /* @__PURE__ */ e.jsx("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }),
          /* @__PURE__ */ e.jsx("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })
        ] }),
        a
      ] }),
      t === "success" && /* @__PURE__ */ e.jsxs("div", { className: "bg-green-50 text-green-800 p-4 border border-green-200 rounded-lg font-bold text-sm mb-6 flex items-start gap-2", children: [
        /* @__PURE__ */ e.jsx("span", { className: "text-xl", children: "✅" }),
        " ",
        /* @__PURE__ */ e.jsx("span", { children: a })
      ] }),
      t === "error" && /* @__PURE__ */ e.jsxs("div", { className: "bg-red-50 text-red-800 p-4 border border-red-200 rounded-lg font-bold text-sm mb-6 flex items-start gap-2", children: [
        /* @__PURE__ */ e.jsx("span", { className: "text-xl", children: "❌" }),
        " ",
        /* @__PURE__ */ e.jsx("span", { children: a })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col items-center", children: [
        /* @__PURE__ */ e.jsx(
          "button",
          {
            type: "button",
            disabled: t === "loading",
            onClick: c,
            className: "w-full relative shadow-md shadow-red-500/20 bg-gradient-to-br from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold py-5 px-8 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed group overflow-hidden",
            children: /* @__PURE__ */ e.jsxs("span", { className: "relative z-10 text-lg uppercase tracking-wide font-cinzel flex items-center justify-center gap-3", children: [
              /* @__PURE__ */ e.jsx("svg", { className: "w-5 h-5 group-hover:animate-bounce", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" }) }),
              "Factory Reset Theme"
            ] })
          }
        ),
        /* @__PURE__ */ e.jsxs("p", { className: "text-xs text-gray-400 mt-4", children: [
          "This extracts ",
          /* @__PURE__ */ e.jsx("code", { className: "bg-gray-100 text-gray-600 px-1 rounded", children: "wingate-safe.zip" }),
          " stored in the active theme directory."
        ] })
      ] })
    ] })
  ] });
};
export {
  u as default
};
