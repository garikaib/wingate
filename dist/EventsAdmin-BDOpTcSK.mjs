import { r as o, j as e } from "./main-D0uV6uTS.mjs";
const j = ({ event: t, onClose: i, onSave: u }) => {
  const [r, d] = o.useState({
    id: 0,
    title: "",
    date: "",
    type: "tournament",
    description: ""
  });
  o.useEffect(() => {
    t && d({
      id: t.id,
      title: t.title || "",
      date: t.date || "",
      type: t.type || "tournament",
      description: t.description || "",
      // Wedding
      groom: t.groom || "",
      bride: t.bride || "",
      reception: t.reception || "",
      is_private: t.is_private || !1,
      // Tournament
      format: t.format || "",
      tee_off: t.tee_off || "",
      entry_fee: t.entry_fee || ""
    });
  }, [t]);
  const a = (s) => {
    const { name: l, value: m } = s.target;
    d((c) => ({ ...c, [l]: m }));
  }, p = (s) => {
    s.preventDefault(), u(r);
  };
  return /* @__PURE__ */ e.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm p-4", children: /* @__PURE__ */ e.jsxs("div", { className: "bg-white rounded-lg shadow-2xl w-full max-w-2xl overflow-hidden animate-fade-in-up", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "bg-brand-blue p-6 flex justify-between items-center", children: [
      /* @__PURE__ */ e.jsx("h2", { className: "text-2xl font-cinzel text-white font-bold", children: t ? "Edit Event" : "New Event" }),
      /* @__PURE__ */ e.jsx("button", { onClick: i, className: "text-white hover:text-brand-yellow text-2xl", children: "×" })
    ] }),
    /* @__PURE__ */ e.jsxs("form", { onSubmit: p, className: "p-8 space-y-6", children: [
      /* @__PURE__ */ e.jsxs("div", { children: [
        /* @__PURE__ */ e.jsx("label", { className: "block text-sm font-bold text-gray-700 mb-2 font-montserrat uppercase tracking-wide", children: "Event Title" }),
        /* @__PURE__ */ e.jsx(
          "input",
          {
            type: "text",
            name: "title",
            value: r.title,
            onChange: a,
            className: "w-full p-3 border border-gray-300 rounded focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition",
            placeholder: "e.g. Wingate Monthly Medal",
            required: !0
          }
        )
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
        /* @__PURE__ */ e.jsxs("div", { children: [
          /* @__PURE__ */ e.jsx("label", { className: "block text-sm font-bold text-gray-700 mb-2 font-montserrat uppercase tracking-wide", children: "Event Date" }),
          /* @__PURE__ */ e.jsx(
            "input",
            {
              type: "date",
              name: "date",
              value: r.date,
              onChange: a,
              className: "w-full p-3 border border-gray-300 rounded focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition"
            }
          )
        ] }),
        /* @__PURE__ */ e.jsxs("div", { children: [
          /* @__PURE__ */ e.jsx("label", { className: "block text-sm font-bold text-gray-700 mb-2 font-montserrat uppercase tracking-wide", children: "Event Type" }),
          /* @__PURE__ */ e.jsxs(
            "select",
            {
              name: "type",
              value: r.type,
              onChange: a,
              className: "w-full p-3 border border-gray-300 rounded focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition appearance-none bg-white",
              children: [
                /* @__PURE__ */ e.jsx("option", { value: "tournament", children: "Tournament" }),
                /* @__PURE__ */ e.jsx("option", { value: "wedding", children: "Wedding" }),
                /* @__PURE__ */ e.jsx("option", { value: "banquet", children: "Banquet" }),
                /* @__PURE__ */ e.jsx("option", { value: "social", children: "Social" })
              ]
            }
          )
        ] })
      ] }),
      r.type === "wedding" && /* @__PURE__ */ e.jsxs("div", { className: "bg-brand-gray/50 p-6 rounded-lg border border-gray-200 animate-fade-in-up", children: [
        /* @__PURE__ */ e.jsx("h3", { className: "text-brand-blue font-cinzel font-bold mb-4 uppercase text-sm tracking-wider border-b border-gray-300 pb-2", children: "Wedding Details" }),
        /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 mb-4", children: [
          /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsx("label", { className: "block text-xs font-bold text-gray-500 mb-1 font-montserrat uppercase", children: "Groom's Name" }),
            /* @__PURE__ */ e.jsx(
              "input",
              {
                type: "text",
                name: "groom",
                value: r.groom || "",
                onChange: a,
                className: "w-full p-2 border border-gray-300 rounded focus:border-brand-blue outline-none",
                placeholder: "e.g. John"
              }
            )
          ] }),
          /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsx("label", { className: "block text-xs font-bold text-gray-500 mb-1 font-montserrat uppercase", children: "Bride's Name" }),
            /* @__PURE__ */ e.jsx(
              "input",
              {
                type: "text",
                name: "bride",
                value: r.bride || "",
                onChange: a,
                className: "w-full p-2 border border-gray-300 rounded focus:border-brand-blue outline-none",
                placeholder: "e.g. Sarah"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "mb-4", children: [
          /* @__PURE__ */ e.jsx("label", { className: "block text-xs font-bold text-gray-500 mb-1 font-montserrat uppercase", children: "Reception Information" }),
          /* @__PURE__ */ e.jsx(
            "input",
            {
              type: "text",
              name: "reception",
              value: r.reception || "",
              onChange: a,
              className: "w-full p-2 border border-gray-300 rounded focus:border-brand-blue outline-none",
              placeholder: "e.g. Main Hall, 6:00 PM"
            }
          )
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ e.jsx(
            "input",
            {
              type: "checkbox",
              name: "is_private",
              checked: r.is_private || !1,
              onChange: (s) => d((l) => ({ ...l, is_private: s.target.checked })),
              id: "is_private_check",
              className: "accent-brand-blue w-4 h-4"
            }
          ),
          /* @__PURE__ */ e.jsx("label", { htmlFor: "is_private_check", className: "text-sm font-bold text-gray-700 font-montserrat select-none cursor-pointer", children: "Make this event Private (Withhold details)" })
        ] })
      ] }),
      r.type === "tournament" && /* @__PURE__ */ e.jsxs("div", { className: "bg-brand-gray/50 p-6 rounded-lg border border-gray-200 animate-fade-in-up", children: [
        /* @__PURE__ */ e.jsx("h3", { className: "text-brand-blue font-cinzel font-bold mb-4 uppercase text-sm tracking-wider border-b border-gray-300 pb-2", children: "Tournament Details" }),
        /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsx("label", { className: "block text-xs font-bold text-gray-500 mb-1 font-montserrat uppercase", children: "Format" }),
            /* @__PURE__ */ e.jsx(
              "input",
              {
                type: "text",
                name: "format",
                value: r.format || "",
                onChange: a,
                className: "w-full p-2 border border-gray-300 rounded focus:border-brand-blue outline-none",
                placeholder: "e.g. Individual Stableford"
              }
            )
          ] }),
          /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsx("label", { className: "block text-xs font-bold text-gray-500 mb-1 font-montserrat uppercase", children: "Entry Fee" }),
            /* @__PURE__ */ e.jsx(
              "input",
              {
                type: "text",
                name: "entry_fee",
                value: r.entry_fee || "",
                onChange: a,
                className: "w-full p-2 border border-gray-300 rounded focus:border-brand-blue outline-none",
                placeholder: "e.g. $20 Members / $30 Visitors"
              }
            )
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "md:col-span-2", children: [
            /* @__PURE__ */ e.jsx("label", { className: "block text-xs font-bold text-gray-500 mb-1 font-montserrat uppercase", children: "Tee Off Time" }),
            /* @__PURE__ */ e.jsx(
              "input",
              {
                type: "text",
                name: "tee_off",
                value: r.tee_off || "",
                onChange: a,
                className: "w-full p-2 border border-gray-300 rounded focus:border-brand-blue outline-none",
                placeholder: "e.g. Morning Field 7:00am - 9:00am"
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { children: [
        /* @__PURE__ */ e.jsx("label", { className: "block text-sm font-bold text-gray-700 mb-2 font-montserrat uppercase tracking-wide", children: "Description" }),
        /* @__PURE__ */ e.jsx(
          "textarea",
          {
            name: "description",
            value: r.description,
            onChange: a,
            rows: "4",
            className: "w-full p-3 border border-gray-300 rounded focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition",
            placeholder: "Event details..."
          }
        )
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "pt-4 flex justify-end gap-4 border-t border-gray-100 mt-6", children: [
        /* @__PURE__ */ e.jsx(
          "button",
          {
            type: "button",
            onClick: i,
            className: "px-6 py-2 rounded text-gray-600 hover:text-gray-800 font-bold uppercase tracking-wide transition",
            children: "Cancel"
          }
        ),
        /* @__PURE__ */ e.jsx(
          "button",
          {
            type: "submit",
            className: "bg-brand-blue text-white px-8 py-2 rounded hover:bg-opacity-90 transition font-bold uppercase tracking-wide shadow-lg",
            children: "Save Event"
          }
        )
      ] })
    ] })
  ] }) });
}, N = () => {
  const [t, i] = o.useState([]), [u, r] = o.useState(!0), [d, a] = o.useState(!1), [p, s] = o.useState(null), [l, m] = o.useState(null), c = window.wingateEventsData?.root || "/wp-json/", g = window.wingateEventsData?.nonce || "", x = async () => {
    r(!0);
    try {
      const n = await fetch(`${c}wingate/v1/events`);
      if (!n.ok) throw new Error("Failed to fetch events");
      const b = await n.json();
      i(b);
    } catch (n) {
      m(n.message);
    } finally {
      r(!1);
    }
  };
  o.useEffect(() => {
    x();
  }, []);
  const h = () => {
    s(null), a(!0);
  }, f = (n) => {
    s(n), a(!0);
  }, y = async (n) => {
    try {
      if (!(await fetch(`${c}wingate/v1/events`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-WP-Nonce": g
        },
        body: JSON.stringify(n)
      })).ok) throw new Error("Failed to save event");
      await x(), a(!1);
    } catch (b) {
      alert("Error saving event: " + b.message);
    }
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "wingate-admin-spa p-8 max-w-7xl mx-auto", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between items-center mb-8", children: [
      /* @__PURE__ */ e.jsx("h1", { className: "text-3xl font-cinzel text-brand-blue font-bold", children: "Wingate Events Manager" }),
      /* @__PURE__ */ e.jsx(
        "button",
        {
          onClick: h,
          className: "bg-brand-blue text-white px-6 py-3 rounded hover:bg-opacity-90 transition font-montserrat font-bold uppercase tracking-wider",
          children: "+ Add New Event"
        }
      )
    ] }),
    l && /* @__PURE__ */ e.jsx("div", { className: "bg-red-100 text-red-700 p-4 rounded mb-4", children: l }),
    u ? /* @__PURE__ */ e.jsx("div", { className: "text-center py-12", children: /* @__PURE__ */ e.jsx("p", { className: "text-gray-500 font-montserrat", children: "Loading events..." }) }) : /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: [
      t.map((n) => /* @__PURE__ */ e.jsxs("div", { className: "bg-white p-6 rounded-lg shadow-md border-l-4 border-brand-yellow hover:shadow-xl transition relative group", children: [
        /* @__PURE__ */ e.jsx("div", { className: "absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition", children: /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: () => f(n),
            className: "text-gray-400 hover:text-brand-blue",
            children: "Edit"
          }
        ) }),
        /* @__PURE__ */ e.jsx("span", { className: "inline-block bg-brand-gray text-xs font-bold px-2 py-1 rounded mb-2 uppercase tracking-wide text-gray-500", children: n.type || "Event" }),
        /* @__PURE__ */ e.jsx("h3", { className: "text-xl font-cinzel text-brand-blue font-bold mb-2", children: n.title }),
        /* @__PURE__ */ e.jsx("p", { className: "text-sm font-opensans text-gray-600 mb-4", children: n.date ? new Date(n.date).toLocaleDateString() : "No Date Set" })
      ] }, n.id)),
      t.length === 0 && /* @__PURE__ */ e.jsx("div", { className: "col-span-full text-center py-12 bg-gray-50 rounded border border-dashed border-gray-300", children: /* @__PURE__ */ e.jsx("p", { className: "text-gray-500", children: "No events found. Create your first one!" }) })
    ] }),
    d && /* @__PURE__ */ e.jsx(
      j,
      {
        event: p,
        onClose: () => a(!1),
        onSave: y
      }
    )
  ] });
};
export {
  N as default
};
