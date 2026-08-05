import { i as e, n as t, t as n } from "./jsx-runtime-sz-k696O.js";
//#region wp-content/themes/wingate/src/pages/EditPagesGatewayAdmin.jsx
var r, i, a, o, s, c;
//#endregion
e((() => {
	t(), r = n(), i = [
		{
			slug: "wingate-home-settings",
			title: "Home Page",
			description: "Hero, cards, and welcome sections."
		},
		{
			slug: "wingate-contact-page-settings",
			title: "Contact Us",
			description: "Hero, map block, and contact team section."
		},
		{
			slug: "wingate-course-settings",
			title: "The Course",
			description: "Course page copy and media."
		},
		{
			slug: "wingate-hole-by-hole",
			title: "Hole By Hole",
			description: "Hole descriptions and images."
		},
		{
			slug: "wingate-event-manager",
			title: "Event Manager",
			description: "Create, schedule, and edit events with event-specific fields."
		},
		{
			slug: "wingate-gallery-manager",
			title: "Gallery Manager",
			description: "Create and edit reusable galleries with metadata and shortcode support."
		},
		{
			slug: "wingate-kitchen-manager",
			title: "Kitchen Manager",
			description: "Manage The Kitchen menus, dish items, and opening times."
		},
		{
			slug: "wingate-bar-manager",
			title: "Bar Manager",
			description: "Manage Loyal & Ancient bar menus, pours, and availability windows."
		},
		{
			slug: "wingate-scorecard-maker",
			title: "Scorecard Maker",
			description: "Par, SI, and distance data."
		},
		{
			slug: "wingate-green-fees-settings",
			title: "Green Fees",
			description: "Rates and booking contact blocks."
		},
		{
			slug: "wingate-booking-settings",
			title: "Booking",
			description: "Timetable, dress code, and booking copy."
		},
		{
			slug: "wingate-membership-settings",
			title: "Membership",
			description: "Membership content sections."
		},
		{
			slug: "wingate-rates-settings",
			title: "Rates",
			description: "Subscriptions and pricing tables."
		},
		{
			slug: "wingate-news-layout-settings",
			title: "News Layout",
			description: "Select the premium news layout."
		}
	], a = [
		{
			slug: "wingate-settings",
			title: "Contact & Social",
			description: "Global phone, email, address, and social links."
		},
		{
			slug: "wingate-menu-builder",
			title: "Menu Builder",
			description: "Manage the main, mobile, and footer navigation menus."
		},
		{
			slug: "wingate-maintenance",
			title: "Maintenance Mode",
			description: "Access control when the site is under maintenance."
		},
		{
			slug: "wingate-safe-state",
			title: "Restore Theme",
			description: "Emergency theme reset and extraction utility."
		}
	], o = (e) => {
		let t = `/wp-admin/admin.php?page=${e}`, n = window.wingateAdminData?.adminUrl;
		if (!n) return t;
		try {
			let t = new URL(n, window.location.origin);
			return t.searchParams.set("page", e), t.toString();
		} catch {
			return t;
		}
	}, s = ({ title: e, description: t, slug: n }) => /* @__PURE__ */ (0, r.jsxs)("a", {
		href: o(n),
		className: "group rounded-2xl border border-gray-200 bg-white px-5 py-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand-blue hover:bg-brand-blue hover:shadow-xl",
		children: [/* @__PURE__ */ (0, r.jsxs)("div", {
			className: "flex items-center justify-between gap-3 mb-2",
			children: [/* @__PURE__ */ (0, r.jsx)("h3", {
				className: "font-cinzel text-xl font-bold !text-brand-blue transition-colors group-hover:!text-brand-yellow",
				children: e
			}), /* @__PURE__ */ (0, r.jsx)("span", {
				className: "text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 transition-colors group-hover:text-brand-yellow",
				children: "Open"
			})]
		}), /* @__PURE__ */ (0, r.jsx)("p", {
			className: "text-sm text-gray-600 transition-colors group-hover:text-white/85",
			children: t
		})]
	}), c = () => /* @__PURE__ */ (0, r.jsxs)("div", {
		className: "wingate-admin-spa max-w-7xl mx-auto p-4 md:p-8 text-brand-blue",
		children: [
			/* @__PURE__ */ (0, r.jsxs)("header", {
				className: "mb-8 md:mb-10",
				children: [
					/* @__PURE__ */ (0, r.jsx)("div", {
						className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/5 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-blue mb-4",
						children: "Wingate Admin"
					}),
					/* @__PURE__ */ (0, r.jsxs)("h1", {
						className: "text-4xl md:text-5xl font-cinzel font-bold uppercase leading-none tracking-tight mb-3",
						children: ["Edit ", /* @__PURE__ */ (0, r.jsx)("span", {
							className: "text-brand-yellow",
							children: "Pages"
						})]
					}),
					/* @__PURE__ */ (0, r.jsx)("p", {
						className: "text-sm md:text-base text-gray-600 max-w-3xl",
						children: "Some core Wingate pages use complex layouts that cannot be safely edited in Gutenberg. Use this tool to update their content safely."
					})
				]
			}),
			/* @__PURE__ */ (0, r.jsxs)("section", {
				className: "bg-white p-6 md:p-8 rounded-[2rem] shadow-xl border border-gray-100 mb-8",
				children: [/* @__PURE__ */ (0, r.jsxs)("div", {
					className: "mb-6 pb-5 border-b border-gray-100",
					children: [/* @__PURE__ */ (0, r.jsx)("h2", {
						className: "text-2xl md:text-3xl font-cinzel font-bold uppercase tracking-wide text-brand-blue",
						children: "Page Editors"
					}), /* @__PURE__ */ (0, r.jsx)("p", {
						className: "text-sm text-gray-500 font-montserrat mt-2",
						children: "Content and layout editors for website pages."
					})]
				}), /* @__PURE__ */ (0, r.jsx)("div", {
					className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4",
					children: i.map((e) => /* @__PURE__ */ (0, r.jsx)(s, { ...e }, e.slug))
				})]
			}),
			/* @__PURE__ */ (0, r.jsxs)("section", {
				className: "bg-white p-6 md:p-8 rounded-[2rem] shadow-xl border border-gray-100",
				children: [/* @__PURE__ */ (0, r.jsxs)("div", {
					className: "mb-6 pb-5 border-b border-gray-100",
					children: [/* @__PURE__ */ (0, r.jsx)("h2", {
						className: "text-2xl md:text-3xl font-cinzel font-bold uppercase tracking-wide text-brand-blue",
						children: "Global Tools"
					}), /* @__PURE__ */ (0, r.jsx)("p", {
						className: "text-sm text-gray-500 font-montserrat mt-2",
						children: "Shared site controls and utilities."
					})]
				}), /* @__PURE__ */ (0, r.jsx)("div", {
					className: "grid grid-cols-1 md:grid-cols-2 gap-4",
					children: a.map((e) => /* @__PURE__ */ (0, r.jsx)(s, { ...e }, e.slug))
				})]
			})
		]
	});
}))();
export { c as default };
