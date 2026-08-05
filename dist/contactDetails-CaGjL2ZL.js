import { i as e } from "./jsx-runtime-sz-k696O.js";
//#region wp-content/themes/wingate/src/config/contactDetails.js
var t, n, r, i, a, o, s, c, l, u = e((() => {
	t = "#", n = (e) => {
		if (typeof e != "string") return t;
		let n = e.trim();
		return n === "" ? t : n;
	}, r = () => {
		let e = typeof window < "u" && window.wingateThemeData?.contactDetails ? window.wingateThemeData.contactDetails : {};
		return {
			email: n(e.email),
			phone: n(e.phone),
			phoneType: e.phoneType === "whatsapp" ? "whatsapp" : "tel",
			facebook: n(e.facebook),
			instagram: n(e.instagram)
		};
	}, i = (e) => e === t ? t : `mailto:${e}`, a = (e) => e.replace(/[^\d+]/g, ""), o = (e) => {
		let t = a(e);
		return t.startsWith("+") ? t.slice(1).replace(/\D/g, "") : t.startsWith("0") ? `263${t.slice(1).replace(/\D/g, "")}` : t.replace(/\D/g, "");
	}, s = (e, n = "tel") => {
		if (e === t) return t;
		if (n === "whatsapp") {
			let n = o(e);
			return n ? `https://wa.me/${n}` : t;
		}
		return `tel:${a(e)}`;
	}, c = (e = "tel") => e === "whatsapp" ? {
		target: "_blank",
		rel: "noreferrer"
	} : {}, l = (e) => e === t ? {} : {
		target: "_blank",
		rel: "noreferrer"
	};
}));
//#endregion
export { s as a, l as i, u as n, c as o, i as r, r as t };
