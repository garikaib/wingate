import { j as e } from "./main-C_7mdrfg.js";
const r = [
  { slug: "wingate-home-settings", title: "Home Page", description: "Hero, cards, and welcome sections." },
  { slug: "wingate-contact-page-settings", title: "Contact Us", description: "Hero, map block, and contact team section." },
  { slug: "wingate-course-settings", title: "The Course", description: "Course page copy and media." },
  { slug: "wingate-hole-by-hole", title: "Hole By Hole", description: "Hole descriptions and images." },
  { slug: "wingate-event-manager", title: "Event Manager", description: "Create, schedule, and edit events with event-specific fields." },
  { slug: "wingate-gallery-manager", title: "Gallery Manager", description: "Create and edit reusable galleries with metadata and shortcode support." },
  { slug: "wingate-kitchen-manager", title: "Kitchen Manager", description: "Manage The Kitchen menus, dish items, and opening times." },
  { slug: "wingate-bar-manager", title: "Bar Manager", description: "Manage Loyal & Ancient bar menus, pours, and availability windows." },
  { slug: "wingate-scorecard-maker", title: "Scorecard Maker", description: "Par, SI, and distance data." },
  { slug: "wingate-green-fees-settings", title: "Green Fees", description: "Rates and booking contact blocks." },
  { slug: "wingate-booking-settings", title: "Booking", description: "Timetable, dress code, and booking copy." },
  { slug: "wingate-membership-settings", title: "Membership", description: "Membership content sections." },
  { slug: "wingate-rates-settings", title: "Rates", description: "Subscriptions and pricing tables." },
  { slug: "wingate-news-layout-settings", title: "News Layout", description: "Select the premium news layout." }
], o = [
  { slug: "wingate-settings", title: "Contact & Social", description: "Global phone, email, address, and social links." },
  { slug: "wingate-menu-builder", title: "Menu Builder", description: "Manage the main, mobile, and footer navigation menus." },
  { slug: "wingate-maintenance", title: "Maintenance Mode", description: "Access control when the site is under maintenance." }
], l = (t) => {
  const a = `/wp-admin/admin.php?page=${t}`, s = window.wingateAdminData?.adminUrl;
  if (!s)
    return a;
  try {
    const n = new URL(s, window.location.origin);
    return n.searchParams.set("page", t), n.toString();
  } catch {
    return a;
  }
}, i = ({ title: t, description: a, slug: s }) => /* @__PURE__ */ e.jsxs(
  "a",
  {
    href: l(s),
    className: "group rounded-2xl border border-gray-200 bg-white px-5 py-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand-blue hover:bg-brand-blue hover:shadow-xl",
    children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between gap-3 mb-2", children: [
        /* @__PURE__ */ e.jsx("h3", { className: "font-cinzel text-xl font-bold !text-brand-blue transition-colors group-hover:!text-brand-yellow", children: t }),
        /* @__PURE__ */ e.jsx("span", { className: "text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 transition-colors group-hover:text-brand-yellow", children: "Open" })
      ] }),
      /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-600 transition-colors group-hover:text-white/85", children: a })
    ]
  }
), c = () => /* @__PURE__ */ e.jsxs("div", { className: "wingate-admin-spa max-w-7xl mx-auto p-4 md:p-8 text-brand-blue", children: [
  /* @__PURE__ */ e.jsxs("header", { className: "mb-8 md:mb-10", children: [
    /* @__PURE__ */ e.jsx("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/5 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-blue mb-4", children: "Wingate Admin" }),
    /* @__PURE__ */ e.jsxs("h1", { className: "text-4xl md:text-5xl font-cinzel font-bold uppercase leading-none tracking-tight mb-3", children: [
      "Edit ",
      /* @__PURE__ */ e.jsx("span", { className: "text-brand-yellow", children: "Pages" })
    ] }),
    /* @__PURE__ */ e.jsx("p", { className: "text-sm md:text-base text-gray-600 max-w-3xl", children: "Some core Wingate pages use complex layouts that cannot be safely edited in Gutenberg. Use this tool to update their content safely." })
  ] }),
  /* @__PURE__ */ e.jsxs("section", { className: "bg-white p-6 md:p-8 rounded-[2rem] shadow-xl border border-gray-100 mb-8", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "mb-6 pb-5 border-b border-gray-100", children: [
      /* @__PURE__ */ e.jsx("h2", { className: "text-2xl md:text-3xl font-cinzel font-bold uppercase tracking-wide text-brand-blue", children: "Page Editors" }),
      /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-500 font-montserrat mt-2", children: "Content and layout editors for website pages." })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4", children: r.map((t) => /* @__PURE__ */ e.jsx(i, { ...t }, t.slug)) })
  ] }),
  /* @__PURE__ */ e.jsxs("section", { className: "bg-white p-6 md:p-8 rounded-[2rem] shadow-xl border border-gray-100", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "mb-6 pb-5 border-b border-gray-100", children: [
      /* @__PURE__ */ e.jsx("h2", { className: "text-2xl md:text-3xl font-cinzel font-bold uppercase tracking-wide text-brand-blue", children: "Global Tools" }),
      /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-500 font-montserrat mt-2", children: "Shared site controls and utilities." })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: o.map((t) => /* @__PURE__ */ e.jsx(i, { ...t }, t.slug)) })
  ] })
] });
export {
  c as default
};
