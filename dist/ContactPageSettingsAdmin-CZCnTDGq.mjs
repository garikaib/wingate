import { r as x, j as e } from "./main-C4Y7UEwf.mjs";
import { M as U } from "./MediaPicker-DcG7_P1U.mjs";
const j = "bg-white p-6 md:p-8 rounded-[2rem] shadow-xl border border-gray-100", N = "mb-6 pb-5 border-b border-gray-100", v = "text-2xl md:text-3xl font-cinzel font-bold uppercase tracking-wide text-brand-blue", f = "text-sm text-gray-500 font-montserrat mt-2", l = "block text-[11px] font-bold tracking-[0.16em] uppercase text-gray-600 mb-2", n = "w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50/70 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition", c = {
  hero: {
    title: "CONTACT US",
    backgroundImage: "/wp-content/uploads/2026/01/605410094_1291221263032055_7504380241267586286_n-scaled.jpg"
  },
  club: {
    title: "Wingate Park Golf Club"
  },
  cards: {
    findUsTitle: "Find Us",
    emailTitle: "Email Us",
    phoneTitle: "Call Us",
    socialTitle: "Follow Us"
  },
  location: {
    mapUrl: "https://maps.google.com/?q=Wingate+Park+Golf+Club",
    lineOne: "Alpes Road",
    lineTwo: "Harare, Zimbabwe",
    mapSectionTitle: "Find Us",
    mapEmbedUrl: "https://maps.google.com/maps?q=Wingate%20Park%20Golf%20Club%2C%20Harare&z=14&output=embed"
  },
  teamSection: {
    title: "Contact Team"
  },
  team: [
    {
      name: "Daryl Catterall",
      title: "Club Manager",
      phoneLabel: "0714681041",
      phoneHref: "tel:0714681041",
      email: "daryl@wingate.co.zw"
    },
    {
      name: "D Kasiyandima",
      title: "Office Assistant Manager",
      phoneLabel: "0719339670",
      phoneHref: "tel:0719339670",
      email: "functions@wingate.co.zw"
    },
    {
      name: "T Musiyakuvi",
      title: "Office Assistant Manager",
      phoneLabel: "0772339670",
      phoneHref: "tel:0772339670",
      email: "reception@wingate.co.zw"
    }
  ]
}, A = (t) => ({
  ...c,
  ...t,
  hero: { ...c.hero, ...t?.hero || {} },
  club: { ...c.club, ...t?.club || {} },
  cards: { ...c.cards, ...t?.cards || {} },
  location: { ...c.location, ...t?.location || {} },
  teamSection: { ...c.teamSection, ...t?.teamSection || {} },
  team: Array.isArray(t?.team) ? t.team : c.team
}), H = () => {
  const [t, d] = x.useState(c), [C, y] = x.useState(!0), [g, w] = x.useState(!1), [h, p] = x.useState({ text: "", type: "" }), b = window.wingateAdminData?.root || "/wp-json/", S = window.wingateAdminData?.nonce || "", T = window.wingateAdminData?.adminUrl || "/wp-admin/admin.php";
  x.useEffect(() => {
    (async () => {
      y(!0);
      try {
        const s = await fetch(`${b}wingate/v1/contact-page-settings`);
        if (!s.ok) throw new Error("Failed to fetch contact page settings");
        const i = await s.json();
        d(A(i));
      } catch (s) {
        p({ text: "Error loading settings: " + s.message, type: "error" });
      } finally {
        y(!1);
      }
    })();
  }, [b]);
  const r = (a, s, i) => {
    d((o) => ({
      ...o,
      [a]: {
        ...o[a],
        [s]: i
      }
    }));
  }, m = (a, s, i) => {
    d((o) => {
      const u = [...o.team];
      return u[a] = { ...u[a], [s]: i }, { ...o, team: u };
    });
  }, k = () => {
    d((a) => ({
      ...a,
      team: [
        ...a.team,
        {
          name: "",
          title: "",
          phoneLabel: "",
          phoneHref: "tel:",
          email: ""
        }
      ]
    }));
  }, L = (a) => {
    d((s) => ({
      ...s,
      team: s.team.filter((i, o) => o !== a)
    }));
  }, E = async (a) => {
    a.preventDefault(), w(!0), p({ text: "", type: "" });
    try {
      if (!(await fetch(`${b}wingate/v1/contact-page-settings`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-WP-Nonce": S
        },
        body: JSON.stringify(t)
      })).ok) throw new Error("Failed to save contact page settings");
      p({ text: "Contact page settings saved.", type: "success" });
    } catch (s) {
      p({ text: "Error saving settings: " + s.message, type: "error" });
    } finally {
      w(!1);
    }
  };
  return C ? /* @__PURE__ */ e.jsx("div", { className: "p-8", children: /* @__PURE__ */ e.jsx("p", { className: "animate-pulse text-gray-500 font-montserrat uppercase tracking-widest text-sm", children: "Loading contact page settings..." }) }) : /* @__PURE__ */ e.jsxs("div", { className: "wingate-admin-spa max-w-7xl mx-auto p-4 md:p-8 text-brand-blue", children: [
    /* @__PURE__ */ e.jsxs("header", { className: "mb-8 md:mb-10", children: [
      /* @__PURE__ */ e.jsx("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/5 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-blue mb-4", children: "Wingate Admin" }),
      /* @__PURE__ */ e.jsxs("h1", { className: "text-4xl md:text-5xl font-cinzel font-bold uppercase leading-none tracking-tight mb-3", children: [
        "Contact Us ",
        /* @__PURE__ */ e.jsx("span", { className: "text-brand-yellow", children: "Page" })
      ] }),
      /* @__PURE__ */ e.jsx("p", { className: "text-sm md:text-base text-gray-600 max-w-3xl", children: "Edit contact page-specific content. Shared phone, email, address, and social links are managed in Contact & Social." })
    ] }),
    /* @__PURE__ */ e.jsxs("section", { className: "mb-8 rounded-2xl border border-brand-blue/15 bg-brand-blue/[0.03] px-5 py-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between", children: [
      /* @__PURE__ */ e.jsx("p", { className: "text-sm text-brand-blue/85 m-0", children: "Need to change global email, phone, address, Facebook, or Instagram?" }),
      /* @__PURE__ */ e.jsx(
        "a",
        {
          href: `${T}?page=wingate-settings`,
          className: "inline-flex items-center justify-center rounded-xl bg-brand-blue px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white transition-colors hover:bg-brand-yellow hover:text-brand-blue",
          children: "Open Contact & Social"
        }
      )
    ] }),
    h.text && /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `mb-8 px-5 py-4 rounded-2xl border text-sm font-medium ${h.type === "error" ? "bg-red-50 border-red-200 text-red-700" : "bg-green-50 border-green-200 text-green-700"}`,
        children: h.text
      }
    ),
    /* @__PURE__ */ e.jsxs("form", { onSubmit: E, className: "space-y-8", children: [
      /* @__PURE__ */ e.jsxs("section", { className: j, children: [
        /* @__PURE__ */ e.jsxs("div", { className: N, children: [
          /* @__PURE__ */ e.jsx("h2", { className: v, children: "Hero" }),
          /* @__PURE__ */ e.jsx("p", { className: f, children: "Main hero title and background image." })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-1 xl:grid-cols-[1fr_360px] gap-8", children: [
          /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsx("label", { className: l, children: "Hero Title" }),
            /* @__PURE__ */ e.jsx("input", { className: n, type: "text", value: t.hero.title, onChange: (a) => r("hero", "title", a.target.value) })
          ] }),
          /* @__PURE__ */ e.jsx(
            U,
            {
              label: "Hero Background Image",
              value: t.hero.backgroundImage,
              onSelect: (a) => r("hero", "backgroundImage", a)
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs("section", { className: j, children: [
        /* @__PURE__ */ e.jsxs("div", { className: N, children: [
          /* @__PURE__ */ e.jsx("h2", { className: v, children: "Cards & Map Labels" }),
          /* @__PURE__ */ e.jsx("p", { className: f, children: "Card titles and location/map copy." })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-5", children: [
          /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsx("label", { className: l, children: "Club Heading" }),
            /* @__PURE__ */ e.jsx("input", { className: n, type: "text", value: t.club.title, onChange: (a) => r("club", "title", a.target.value) })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsx("label", { className: l, children: "Map Section Title" }),
            /* @__PURE__ */ e.jsx("input", { className: n, type: "text", value: t.location.mapSectionTitle, onChange: (a) => r("location", "mapSectionTitle", a.target.value) })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsx("label", { className: l, children: "Find Card Title" }),
            /* @__PURE__ */ e.jsx("input", { className: n, type: "text", value: t.cards.findUsTitle, onChange: (a) => r("cards", "findUsTitle", a.target.value) })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsx("label", { className: l, children: "Email Card Title" }),
            /* @__PURE__ */ e.jsx("input", { className: n, type: "text", value: t.cards.emailTitle, onChange: (a) => r("cards", "emailTitle", a.target.value) })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsx("label", { className: l, children: "Phone Card Title" }),
            /* @__PURE__ */ e.jsx("input", { className: n, type: "text", value: t.cards.phoneTitle, onChange: (a) => r("cards", "phoneTitle", a.target.value) })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsx("label", { className: l, children: "Social Card Title" }),
            /* @__PURE__ */ e.jsx("input", { className: n, type: "text", value: t.cards.socialTitle, onChange: (a) => r("cards", "socialTitle", a.target.value) })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsx("label", { className: l, children: "Location Line 1" }),
            /* @__PURE__ */ e.jsx("input", { className: n, type: "text", value: t.location.lineOne, onChange: (a) => r("location", "lineOne", a.target.value) })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsx("label", { className: l, children: "Location Line 2" }),
            /* @__PURE__ */ e.jsx("input", { className: n, type: "text", value: t.location.lineTwo, onChange: (a) => r("location", "lineTwo", a.target.value) })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsx("label", { className: l, children: "Find Us Link URL" }),
            /* @__PURE__ */ e.jsx("input", { className: n, type: "text", value: t.location.mapUrl, onChange: (a) => r("location", "mapUrl", a.target.value) })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsx("label", { className: l, children: "Map Embed URL" }),
            /* @__PURE__ */ e.jsx("input", { className: n, type: "text", value: t.location.mapEmbedUrl, onChange: (a) => r("location", "mapEmbedUrl", a.target.value) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs("section", { className: j, children: [
        /* @__PURE__ */ e.jsxs("div", { className: N, children: [
          /* @__PURE__ */ e.jsx("h2", { className: v, children: "Team Section" }),
          /* @__PURE__ */ e.jsx("p", { className: f, children: "Edit the contact team cards displayed near the bottom of the page." })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "mb-5", children: [
          /* @__PURE__ */ e.jsx("label", { className: l, children: "Team Section Title" }),
          /* @__PURE__ */ e.jsx("input", { className: n, type: "text", value: t.teamSection.title, onChange: (a) => r("teamSection", "title", a.target.value) })
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "space-y-4", children: t.team.map((a, s) => /* @__PURE__ */ e.jsxs("article", { className: "rounded-2xl border border-gray-200 bg-gray-50/60 p-4 md:p-5", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
            /* @__PURE__ */ e.jsxs("h3", { className: "text-lg font-cinzel font-bold uppercase text-brand-blue", children: [
              "Team Member ",
              s + 1
            ] }),
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                onClick: () => L(s),
                className: "text-[11px] font-bold uppercase tracking-[0.16em] text-red-600 hover:text-red-700",
                children: "Remove"
              }
            )
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("label", { className: l, children: "Name" }),
              /* @__PURE__ */ e.jsx("input", { className: n, type: "text", value: a.name || "", onChange: (i) => m(s, "name", i.target.value) })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("label", { className: l, children: "Role" }),
              /* @__PURE__ */ e.jsx("input", { className: n, type: "text", value: a.title || "", onChange: (i) => m(s, "title", i.target.value) })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("label", { className: l, children: "Phone Label" }),
              /* @__PURE__ */ e.jsx("input", { className: n, type: "text", value: a.phoneLabel || "", onChange: (i) => m(s, "phoneLabel", i.target.value) })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("label", { className: l, children: "Phone Href" }),
              /* @__PURE__ */ e.jsx("input", { className: n, type: "text", value: a.phoneHref || "", onChange: (i) => m(s, "phoneHref", i.target.value) })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "md:col-span-2", children: [
              /* @__PURE__ */ e.jsx("label", { className: l, children: "Email" }),
              /* @__PURE__ */ e.jsx("input", { className: n, type: "text", value: a.email || "", onChange: (i) => m(s, "email", i.target.value) })
            ] })
          ] })
        ] }, `${a.email}-${s}`)) }),
        /* @__PURE__ */ e.jsx("div", { className: "mt-5", children: /* @__PURE__ */ e.jsx(
          "button",
          {
            type: "button",
            onClick: k,
            className: "inline-flex items-center justify-center rounded-xl border border-brand-blue px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-brand-blue transition-colors hover:bg-brand-blue hover:text-white",
            children: "Add Team Member"
          }
        ) })
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "sticky bottom-3 z-30", children: /* @__PURE__ */ e.jsxs("div", { className: "rounded-2xl border border-gray-200 bg-white/95 backdrop-blur-sm px-4 py-3 md:px-5 md:py-4 shadow-xl flex items-center justify-between gap-4", children: [
        /* @__PURE__ */ e.jsx("p", { className: "text-xs md:text-sm text-gray-500 m-0", children: "Save to apply Contact Us page changes." }),
        /* @__PURE__ */ e.jsx(
          "button",
          {
            type: "submit",
            disabled: g,
            className: `px-6 md:px-10 py-3 rounded-xl text-[11px] md:text-xs font-bold uppercase tracking-[0.18em] shadow-lg transition-all ${g ? "bg-brand-blue text-white opacity-50 cursor-not-allowed" : "bg-brand-blue text-white hover:bg-brand-yellow hover:text-brand-blue"}`,
            children: g ? "Saving..." : "Save Contact Page"
          }
        )
      ] }) })
    ] })
  ] });
};
export {
  H as default
};
