import { a as e, i as t, n } from "./jsx-runtime-sz-k696O.js";
//#region node_modules/lucide-react/dist/esm/shared/src/utils/mergeClasses.mjs
var r, i = t((() => {
	r = (...e) => e.filter((e, t, n) => !!e && e.trim() !== "" && n.indexOf(e) === t).join(" ").trim();
})), a, o = t((() => {
	a = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
})), s, c = t((() => {
	s = (e) => e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) => n ? n.toUpperCase() : t.toLowerCase());
})), l, u = t((() => {
	c(), l = (e) => {
		let t = s(e);
		return t.charAt(0).toUpperCase() + t.slice(1);
	};
})), d, f = t((() => {
	d = {
		xmlns: "http://www.w3.org/2000/svg",
		width: 24,
		height: 24,
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: 2,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	};
})), p, m = t((() => {
	p = (e) => {
		for (let t in e) if (t.startsWith("aria-") || t === "role" || t === "title") return !0;
		return !1;
	};
})), h, g, _, v = t((() => {
	h = /* @__PURE__ */ e(n(), 1), g = (0, h.createContext)({}), _ = () => (0, h.useContext)(g);
})), y, ee, te = t((() => {
	y = /* @__PURE__ */ e(n(), 1), f(), m(), i(), v(), ee = (0, y.forwardRef)(({ color: e, size: t, strokeWidth: n, absoluteStrokeWidth: i, className: a = "", children: o, iconNode: s, ...c }, l) => {
		let { size: u = 24, strokeWidth: f = 2, absoluteStrokeWidth: m = !1, color: h = "currentColor", className: g = "" } = _() ?? {}, v = i ?? m ? Number(n ?? f) * 24 / Number(t ?? u) : n ?? f;
		return (0, y.createElement)("svg", {
			ref: l,
			...d,
			width: t ?? u ?? d.width,
			height: t ?? u ?? d.height,
			stroke: e ?? h,
			strokeWidth: v,
			className: r("lucide", g, a),
			...!o && !p(c) && { "aria-hidden": "true" },
			...c
		}, [...s.map(([e, t]) => (0, y.createElement)(e, t)), ...Array.isArray(o) ? o : [o]]);
	});
})), b, x, S = t((() => {
	b = /* @__PURE__ */ e(n(), 1), i(), o(), u(), te(), x = (e, t) => {
		let n = (0, b.forwardRef)(({ className: n, ...i }, o) => (0, b.createElement)(ee, {
			ref: o,
			iconNode: t,
			className: r(`lucide-${a(l(e))}`, `lucide-${e}`, n),
			...i
		}));
		return n.displayName = l(e), n;
	};
})), C, w, T = t((() => {
	S(), C = [["path", {
		d: "m12 19-7-7 7-7",
		key: "1l729n"
	}], ["path", {
		d: "M19 12H5",
		key: "x3x0zl"
	}]], w = x("arrow-left", C);
})), E, D, O = t((() => {
	S(), E = [["path", {
		d: "M5 12h14",
		key: "1ays0h"
	}], ["path", {
		d: "m12 5 7 7-7 7",
		key: "xquz4c"
	}]], D = x("arrow-right", E);
})), k, A, j = t((() => {
	S(), k = [["path", {
		d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
		key: "3c2336"
	}], ["path", {
		d: "m9 12 2 2 4-4",
		key: "dzmm74"
	}]], A = x("badge-check", k);
})), M, N, P = t((() => {
	S(), M = [
		["path", {
			d: "M8 2v3",
			key: "1ioesn"
		}],
		["path", {
			d: "M16 2v3",
			key: "otl347"
		}],
		["rect", {
			x: "3",
			y: "3",
			width: "18",
			height: "18",
			rx: "2",
			key: "h1oib"
		}],
		["path", {
			d: "M3 9h18",
			key: "1pudct"
		}],
		["path", {
			d: "M8 13h.01",
			key: "1sbv64"
		}],
		["path", {
			d: "M12 13h.01",
			key: "y0uutt"
		}],
		["path", {
			d: "M16 13h.01",
			key: "wip0gl"
		}],
		["path", {
			d: "M8 17h.01",
			key: "p3bg7i"
		}],
		["path", {
			d: "M12 17h.01",
			key: "p32p05"
		}],
		["path", {
			d: "M16 17h.01",
			key: "ql8jdd"
		}]
	], N = x("calendar-days", M);
})), F, I, L = t((() => {
	S(), F = [
		["path", {
			d: "M8 2v3",
			key: "1ioesn"
		}],
		["path", {
			d: "M16 2v3",
			key: "otl347"
		}],
		["rect", {
			x: "3",
			y: "3",
			width: "18",
			height: "18",
			rx: "2",
			key: "h1oib"
		}],
		["path", {
			d: "M3 9h18",
			key: "1pudct"
		}]
	], I = x("calendar", F);
})), R, z, B = t((() => {
	S(), R = [["path", {
		d: "M20 6 9 17l-5-5",
		key: "1gmf2c"
	}]], z = x("check", R);
})), V, H, U = t((() => {
	S(), V = [["path", {
		d: "m15 18-6-6 6-6",
		key: "1wnfg3"
	}]], H = x("chevron-left", V);
})), W, G, K = t((() => {
	S(), W = [["path", {
		d: "m9 18 6-6-6-6",
		key: "mthhwq"
	}]], G = x("chevron-right", W);
})), q, J, Y = t((() => {
	S(), q = [
		["circle", {
			cx: "12",
			cy: "12",
			r: "10",
			key: "1mglay"
		}],
		["path", {
			d: "m15 9-6 6",
			key: "1uzhvr"
		}],
		["path", {
			d: "m9 9 6 6",
			key: "z0biqf"
		}]
	], J = x("circle-x", q);
})), X, Z, Q = t((() => {
	S(), X = [["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}], ["path", {
		d: "M12 6v6h4",
		key: "135r8i"
	}]], Z = x("clock-3", X);
})), ne, re, ie = t((() => {
	S(), ne = [["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}], ["path", {
		d: "M12 6v6l4 2",
		key: "mmk7yg"
	}]], re = x("clock", ne);
})), ae, oe, se = t((() => {
	S(), ae = [["rect", {
		width: "20",
		height: "14",
		x: "2",
		y: "5",
		rx: "2",
		key: "ynyp8z"
	}], ["line", {
		x1: "2",
		x2: "22",
		y1: "10",
		y2: "10",
		key: "1b3vmo"
	}]], oe = x("credit-card", ae);
})), ce, le, ue = t((() => {
	S(), ce = [
		["path", {
			d: "M12 15V3",
			key: "m9g1x1"
		}],
		["path", {
			d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
			key: "ih7n3h"
		}],
		["path", {
			d: "m7 10 5 5 5-5",
			key: "brsn70"
		}]
	], le = x("download", ce);
})), de, fe, pe = t((() => {
	S(), de = [
		["path", {
			d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
			key: "1oefj6"
		}],
		["path", {
			d: "M14 2v5a1 1 0 0 0 1 1h5",
			key: "wfsgrz"
		}],
		["path", {
			d: "M8 13h2",
			key: "yr2amv"
		}],
		["path", {
			d: "M14 13h2",
			key: "un5t4a"
		}],
		["path", {
			d: "M8 17h2",
			key: "2yhykz"
		}],
		["path", {
			d: "M14 17h2",
			key: "10kma7"
		}]
	], fe = x("file-spreadsheet", de);
})), me, he, ge = t((() => {
	S(), me = [
		["path", {
			d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
			key: "1oefj6"
		}],
		["path", {
			d: "M14 2v5a1 1 0 0 0 1 1h5",
			key: "wfsgrz"
		}],
		["path", {
			d: "M10 9H8",
			key: "b1mrlr"
		}],
		["path", {
			d: "M16 13H8",
			key: "t4e002"
		}],
		["path", {
			d: "M16 17H8",
			key: "z1uh3a"
		}]
	], he = x("file-text", me);
})), _e, ve, ye = t((() => {
	S(), _e = [["path", {
		d: "M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528",
		key: "1jaruq"
	}]], ve = x("flag", _e);
})), be, xe, Se = t((() => {
	S(), be = [
		["circle", {
			cx: "9",
			cy: "12",
			r: "1",
			key: "1vctgf"
		}],
		["circle", {
			cx: "9",
			cy: "5",
			r: "1",
			key: "hp0tcf"
		}],
		["circle", {
			cx: "9",
			cy: "19",
			r: "1",
			key: "fkjjf6"
		}],
		["circle", {
			cx: "15",
			cy: "12",
			r: "1",
			key: "1tmaij"
		}],
		["circle", {
			cx: "15",
			cy: "5",
			r: "1",
			key: "19l28e"
		}],
		["circle", {
			cx: "15",
			cy: "19",
			r: "1",
			key: "f4zoj3"
		}]
	], xe = x("grip-vertical", be);
})), Ce, we, Te = t((() => {
	S(), Ce = [["path", {
		d: "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",
		key: "nnexq3"
	}], ["path", {
		d: "M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",
		key: "mt58a7"
	}]], we = x("leaf", Ce);
})), Ee, De, Oe = t((() => {
	S(), Ee = [
		["path", {
			d: "M9 17H7A5 5 0 0 1 7 7h2",
			key: "8i5ue5"
		}],
		["path", {
			d: "M15 7h2a5 5 0 1 1 0 10h-2",
			key: "1b9ql8"
		}],
		["line", {
			x1: "8",
			x2: "16",
			y1: "12",
			y2: "12",
			key: "1jonct"
		}]
	], De = x("link-2", Ee);
})), ke, Ae, je = t((() => {
	S(), ke = [["path", {
		d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",
		key: "132q7q"
	}], ["rect", {
		x: "2",
		y: "4",
		width: "20",
		height: "16",
		rx: "2",
		key: "izxlao"
	}]], Ae = x("mail", ke);
})), Me, Ne, Pe = t((() => {
	S(), Me = [["path", {
		d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
		key: "1r0f0z"
	}], ["circle", {
		cx: "12",
		cy: "10",
		r: "3",
		key: "ilqhr7"
	}]], Ne = x("map-pin", Me);
})), Fe, Ie, Le = t((() => {
	S(), Fe = [["path", {
		d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
		key: "9njp5v"
	}]], Ie = x("phone", Fe);
})), Re, ze, Be = t((() => {
	S(), Re = [["path", {
		d: "M5 12h14",
		key: "1ays0h"
	}], ["path", {
		d: "M12 5v14",
		key: "s699le"
	}]], ze = x("plus", Re);
})), Ve, He, Ue = t((() => {
	S(), Ve = [
		["path", {
			d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",
			key: "1c8476"
		}],
		["path", {
			d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",
			key: "1ydtos"
		}],
		["path", {
			d: "M7 3v4a1 1 0 0 0 1 1h7",
			key: "t51u73"
		}]
	], He = x("save", Ve);
})), We, Ge, Ke = t((() => {
	S(), We = [["path", {
		d: "m21 21-4.34-4.34",
		key: "14j7rj"
	}], ["circle", {
		cx: "11",
		cy: "11",
		r: "8",
		key: "4ej97u"
	}]], Ge = x("search", We);
})), qe, Je, Ye = t((() => {
	S(), qe = [["path", {
		d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
		key: "oel41y"
	}], ["path", {
		d: "m9 12 2 2 4-4",
		key: "dzmm74"
	}]], Je = x("shield-check", qe);
})), Xe, Ze, Qe = t((() => {
	S(), Xe = [["path", {
		d: "M21 4v16",
		key: "7j8fe9"
	}], ["path", {
		d: "M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z",
		key: "zs4d6"
	}]], Ze = x("skip-forward", Xe);
})), $e, et, tt = t((() => {
	S(), $e = [
		["path", {
			d: "M10 11v6",
			key: "nco0om"
		}],
		["path", {
			d: "M14 11v6",
			key: "outv1u"
		}],
		["path", {
			d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",
			key: "miytrc"
		}],
		["path", {
			d: "M3 6h18",
			key: "d0wm0j"
		}],
		["path", {
			d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",
			key: "e791ji"
		}]
	], et = x("trash-2", $e);
})), $, nt, rt = t((() => {
	S(), $ = [
		["path", {
			d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
			key: "wmoenq"
		}],
		["path", {
			d: "M12 9v4",
			key: "juzpu7"
		}],
		["path", {
			d: "M12 17h.01",
			key: "p32p05"
		}]
	], nt = x("triangle-alert", $);
})), it, at, ot = t((() => {
	S(), it = [
		["path", {
			d: "M10 14.66V17a1 1 0 0 1-1 1 2 2 0 0 0-2 2v2",
			key: "pwuv1l"
		}],
		["path", {
			d: "M14 14.66V17a1 1 0 0 0 1 1 2 2 0 0 1 2 2v2",
			key: "1y54w1"
		}],
		["path", {
			d: "M17.916 10H19.5A2.5 2.5 0 0 0 22 7.5V5a1 1 0 0 0-1-1h-3",
			key: "e30mpu"
		}],
		["path", {
			d: "M4 22h16",
			key: "57wxv0"
		}],
		["path", {
			d: "M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",
			key: "1mhfuq"
		}],
		["path", {
			d: "M6.084 10H4.5A2.5 2.5 0 0 1 2 7.5V5a1 1 0 0 1 1-1h3",
			key: "i0yafy"
		}]
	], at = x("trophy", it);
})), st, ct, lt = t((() => {
	S(), st = [
		["path", {
			d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
			key: "1yyitq"
		}],
		["path", {
			d: "M16 3.128a4 4 0 0 1 0 7.744",
			key: "16gr8j"
		}],
		["path", {
			d: "M22 21v-2a4 4 0 0 0-3-3.87",
			key: "kshegd"
		}],
		["circle", {
			cx: "9",
			cy: "7",
			r: "4",
			key: "nufk8"
		}]
	], ct = x("users", st);
})), ut, dt, ft = t((() => {
	S(), ut = [
		["path", {
			d: "m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8",
			key: "n7qcjb"
		}],
		["path", {
			d: "M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7",
			key: "d0u48b"
		}],
		["path", {
			d: "m2.1 21.8 6.4-6.3",
			key: "yn04lh"
		}],
		["path", {
			d: "m19 5-7 7",
			key: "194lzd"
		}]
	], dt = x("utensils-crossed", ut);
})), pt = t((() => {
	S(), j(), Y(), rt(), ft(), T(), O(), P(), L(), B(), U(), K(), Q(), ie(), se(), ue(), pe(), ge(), ye(), Se(), Te(), Oe(), je(), Pe(), Le(), Be(), Ue(), Ke(), Ye(), Qe(), tt(), ot(), lt(), v(), te();
}));
//#endregion
export { U as $, we as A, le as B, Le as C, je as D, Ae as E, ye as F, ie as G, oe as H, he as I, J, Z as K, ge as L, xe as M, Se as N, De as O, ve as P, H as Q, fe as R, Ie as S, Pe as T, se as U, ue as V, re as W, G as X, Y, K as Z, Ke as _, lt as a, P as at, ze as b, nt as c, D as ct, tt as d, T as dt, z as et, Ze as f, Ge as g, Ye as h, ct as i, N as it, Te as j, Oe as k, rt as l, O as lt, Je as m, dt as n, I as nt, at as o, A as ot, Qe as p, Q as q, ft as r, L as rt, ot as s, j as st, pt as t, B as tt, et as u, w as ut, He as v, Ne as w, Be as x, Ue as y, pe as z };
