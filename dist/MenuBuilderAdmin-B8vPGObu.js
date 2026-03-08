import { r as m, a as Ur, b as Ta, j as x, c as pc, R as Bt } from "./main-BJ0M0hbP.js";
import { c as En } from "./createLucideIcon-TtFwpmXj.js";
const fc = [
  ["circle", { cx: "9", cy: "12", r: "1", key: "1vctgf" }],
  ["circle", { cx: "9", cy: "5", r: "1", key: "hp0tcf" }],
  ["circle", { cx: "9", cy: "19", r: "1", key: "fkjjf6" }],
  ["circle", { cx: "15", cy: "12", r: "1", key: "1tmaij" }],
  ["circle", { cx: "15", cy: "5", r: "1", key: "19l28e" }],
  ["circle", { cx: "15", cy: "19", r: "1", key: "f4zoj3" }]
], mc = En("grip-vertical", fc);
const hc = [
  ["path", { d: "M9 17H7A5 5 0 0 1 7 7h2", key: "8i5ue5" }],
  ["path", { d: "M15 7h2a5 5 0 1 1 0 10h-2", key: "1b9ql8" }],
  ["line", { x1: "8", x2: "16", y1: "12", y2: "12", key: "1jonct" }]
], gc = En("link-2", hc);
const bc = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], Hi = En("plus", bc);
const yc = [
  [
    "path",
    {
      d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",
      key: "1c8476"
    }
  ],
  ["path", { d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7", key: "1ydtos" }],
  ["path", { d: "M7 3v4a1 1 0 0 0 1 1h7", key: "t51u73" }]
], Cr = En("save", yc);
const vc = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
], xc = En("search", vc);
const Sc = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], Tc = En("trash-2", Sc), Jn = {
  black: "#000",
  white: "#fff"
}, cn = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, un = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, dn = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, pn = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, fn = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
}, _n = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, Cc = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
};
function Ft(e, ...t) {
  const o = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((r) => o.searchParams.append("args[]", r)), `Minified MUI error #${e}; visit ${o} for the full message.`;
}
const Ho = "$$material";
function $o() {
  return $o = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var o = arguments[t];
      for (var r in o) ({}).hasOwnProperty.call(o, r) && (e[r] = o[r]);
    }
    return e;
  }, $o.apply(null, arguments);
}
function Ec(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function wc(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var Oc = /* @__PURE__ */ (function() {
  function e(o) {
    var r = this;
    this._insertTag = function(i) {
      var s;
      r.tags.length === 0 ? r.insertionPoint ? s = r.insertionPoint.nextSibling : r.prepend ? s = r.container.firstChild : s = r.before : s = r.tags[r.tags.length - 1].nextSibling, r.container.insertBefore(i, s), r.tags.push(i);
    }, this.isSpeedy = o.speedy === void 0 ? !0 : o.speedy, this.tags = [], this.ctr = 0, this.nonce = o.nonce, this.key = o.key, this.container = o.container, this.prepend = o.prepend, this.insertionPoint = o.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(r) {
    r.forEach(this._insertTag);
  }, t.insert = function(r) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(wc(this));
    var i = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var s = Ec(i);
      try {
        s.insertRule(r, s.cssRules.length);
      } catch {
      }
    } else
      i.appendChild(document.createTextNode(r));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(r) {
      var i;
      return (i = r.parentNode) == null ? void 0 : i.removeChild(r);
    }), this.tags = [], this.ctr = 0;
  }, e;
})(), et = "-ms-", ko = "-moz-", we = "-webkit-", Ca = "comm", hi = "rule", gi = "decl", Pc = "@import", Ea = "@keyframes", Rc = "@layer", $c = Math.abs, qo = String.fromCharCode, kc = Object.assign;
function Ic(e, t) {
  return Qe(e, 0) ^ 45 ? (((t << 2 ^ Qe(e, 0)) << 2 ^ Qe(e, 1)) << 2 ^ Qe(e, 2)) << 2 ^ Qe(e, 3) : 0;
}
function wa(e) {
  return e.trim();
}
function _c(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function Oe(e, t, o) {
  return e.replace(t, o);
}
function Hr(e, t) {
  return e.indexOf(t);
}
function Qe(e, t) {
  return e.charCodeAt(t) | 0;
}
function Qn(e, t, o) {
  return e.slice(t, o);
}
function $t(e) {
  return e.length;
}
function bi(e) {
  return e.length;
}
function po(e, t) {
  return t.push(e), e;
}
function Nc(e, t) {
  return e.map(t).join("");
}
var Yo = 1, Tn = 1, Oa = 0, it = 0, Ye = 0, wn = "";
function Ko(e, t, o, r, i, s, a) {
  return { value: e, root: t, parent: o, type: r, props: i, children: s, line: Yo, column: Tn, length: a, return: "" };
}
function Nn(e, t) {
  return kc(Ko("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Mc() {
  return Ye;
}
function jc() {
  return Ye = it > 0 ? Qe(wn, --it) : 0, Tn--, Ye === 10 && (Tn = 1, Yo--), Ye;
}
function lt() {
  return Ye = it < Oa ? Qe(wn, it++) : 0, Tn++, Ye === 10 && (Tn = 1, Yo++), Ye;
}
function _t() {
  return Qe(wn, it);
}
function Co() {
  return it;
}
function io(e, t) {
  return Qn(wn, e, t);
}
function Zn(e) {
  switch (e) {
    // \0 \t \n \r \s whitespace token
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    // ! + , / > @ ~ isolate token
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    // ; { } breakpoint token
    case 59:
    case 123:
    case 125:
      return 4;
    // : accompanied token
    case 58:
      return 3;
    // " ' ( [ opening delimit token
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    // ) ] closing delimit token
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Pa(e) {
  return Yo = Tn = 1, Oa = $t(wn = e), it = 0, [];
}
function Ra(e) {
  return wn = "", e;
}
function Eo(e) {
  return wa(io(it - 1, qr(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Ac(e) {
  for (; (Ye = _t()) && Ye < 33; )
    lt();
  return Zn(e) > 2 || Zn(Ye) > 3 ? "" : " ";
}
function Dc(e, t) {
  for (; --t && lt() && !(Ye < 48 || Ye > 102 || Ye > 57 && Ye < 65 || Ye > 70 && Ye < 97); )
    ;
  return io(e, Co() + (t < 6 && _t() == 32 && lt() == 32));
}
function qr(e) {
  for (; lt(); )
    switch (Ye) {
      // ] ) " '
      case e:
        return it;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && qr(Ye);
        break;
      // (
      case 40:
        e === 41 && qr(e);
        break;
      // \
      case 92:
        lt();
        break;
    }
  return it;
}
function Bc(e, t) {
  for (; lt() && e + Ye !== 57; )
    if (e + Ye === 84 && _t() === 47)
      break;
  return "/*" + io(t, it - 1) + "*" + qo(e === 47 ? e : lt());
}
function Fc(e) {
  for (; !Zn(_t()); )
    lt();
  return io(e, it);
}
function Lc(e) {
  return Ra(wo("", null, null, null, [""], e = Pa(e), 0, [0], e));
}
function wo(e, t, o, r, i, s, a, l, c) {
  for (var u = 0, d = 0, p = a, v = 0, S = 0, g = 0, y = 1, h = 1, C = 1, w = 0, E = "", T = i, b = s, O = r, _ = E; h; )
    switch (g = w, w = lt()) {
      // (
      case 40:
        if (g != 108 && Qe(_, p - 1) == 58) {
          Hr(_ += Oe(Eo(w), "&", "&\f"), "&\f") != -1 && (C = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        _ += Eo(w);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        _ += Ac(g);
        break;
      // \
      case 92:
        _ += Dc(Co() - 1, 7);
        continue;
      // /
      case 47:
        switch (_t()) {
          case 42:
          case 47:
            po(zc(Bc(lt(), Co()), t, o), c);
            break;
          default:
            _ += "/";
        }
        break;
      // {
      case 123 * y:
        l[u++] = $t(_) * C;
      // } ; \0
      case 125 * y:
      case 59:
      case 0:
        switch (w) {
          // \0 }
          case 0:
          case 125:
            h = 0;
          // ;
          case 59 + d:
            C == -1 && (_ = Oe(_, /\f/g, "")), S > 0 && $t(_) - p && po(S > 32 ? Yi(_ + ";", r, o, p - 1) : Yi(Oe(_, " ", "") + ";", r, o, p - 2), c);
            break;
          // @ ;
          case 59:
            _ += ";";
          // { rule/at-rule
          default:
            if (po(O = qi(_, t, o, u, d, i, l, E, T = [], b = [], p), s), w === 123)
              if (d === 0)
                wo(_, t, O, O, T, s, p, l, b);
              else
                switch (v === 99 && Qe(_, 3) === 110 ? 100 : v) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    wo(e, O, O, r && po(qi(e, O, O, 0, 0, i, l, E, i, T = [], p), b), i, b, p, l, r ? T : b);
                    break;
                  default:
                    wo(_, O, O, O, [""], b, 0, l, b);
                }
        }
        u = d = S = 0, y = C = 1, E = _ = "", p = a;
        break;
      // :
      case 58:
        p = 1 + $t(_), S = g;
      default:
        if (y < 1) {
          if (w == 123)
            --y;
          else if (w == 125 && y++ == 0 && jc() == 125)
            continue;
        }
        switch (_ += qo(w), w * y) {
          // &
          case 38:
            C = d > 0 ? 1 : (_ += "\f", -1);
            break;
          // ,
          case 44:
            l[u++] = ($t(_) - 1) * C, C = 1;
            break;
          // @
          case 64:
            _t() === 45 && (_ += Eo(lt())), v = _t(), d = p = $t(E = _ += Fc(Co())), w++;
            break;
          // -
          case 45:
            g === 45 && $t(_) == 2 && (y = 0);
        }
    }
  return s;
}
function qi(e, t, o, r, i, s, a, l, c, u, d) {
  for (var p = i - 1, v = i === 0 ? s : [""], S = bi(v), g = 0, y = 0, h = 0; g < r; ++g)
    for (var C = 0, w = Qn(e, p + 1, p = $c(y = a[g])), E = e; C < S; ++C)
      (E = wa(y > 0 ? v[C] + " " + w : Oe(w, /&\f/g, v[C]))) && (c[h++] = E);
  return Ko(e, t, o, i === 0 ? hi : l, c, u, d);
}
function zc(e, t, o) {
  return Ko(e, t, o, Ca, qo(Mc()), Qn(e, 2, -2), 0);
}
function Yi(e, t, o, r) {
  return Ko(e, t, o, gi, Qn(e, 0, r), Qn(e, r + 1, -1), r);
}
function vn(e, t) {
  for (var o = "", r = bi(e), i = 0; i < r; i++)
    o += t(e[i], i, e, t) || "";
  return o;
}
function Wc(e, t, o, r) {
  switch (e.type) {
    case Rc:
      if (e.children.length) break;
    case Pc:
    case gi:
      return e.return = e.return || e.value;
    case Ca:
      return "";
    case Ea:
      return e.return = e.value + "{" + vn(e.children, r) + "}";
    case hi:
      e.value = e.props.join(",");
  }
  return $t(o = vn(e.children, r)) ? e.return = e.value + "{" + o + "}" : "";
}
function Vc(e) {
  var t = bi(e);
  return function(o, r, i, s) {
    for (var a = "", l = 0; l < t; l++)
      a += e[l](o, r, i, s) || "";
    return a;
  };
}
function Uc(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function $a(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(o) {
    return t[o] === void 0 && (t[o] = e(o)), t[o];
  };
}
var Hc = function(t, o, r) {
  for (var i = 0, s = 0; i = s, s = _t(), i === 38 && s === 12 && (o[r] = 1), !Zn(s); )
    lt();
  return io(t, it);
}, qc = function(t, o) {
  var r = -1, i = 44;
  do
    switch (Zn(i)) {
      case 0:
        i === 38 && _t() === 12 && (o[r] = 1), t[r] += Hc(it - 1, o, r);
        break;
      case 2:
        t[r] += Eo(i);
        break;
      case 4:
        if (i === 44) {
          t[++r] = _t() === 58 ? "&\f" : "", o[r] = t[r].length;
          break;
        }
      // fallthrough
      default:
        t[r] += qo(i);
    }
  while (i = lt());
  return t;
}, Yc = function(t, o) {
  return Ra(qc(Pa(t), o));
}, Ki = /* @__PURE__ */ new WeakMap(), Kc = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var o = t.value, r = t.parent, i = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r) return;
    if (!(t.props.length === 1 && o.charCodeAt(0) !== 58 && !Ki.get(r)) && !i) {
      Ki.set(t, !0);
      for (var s = [], a = Yc(o, s), l = r.props, c = 0, u = 0; c < a.length; c++)
        for (var d = 0; d < l.length; d++, u++)
          t.props[u] = s[c] ? a[c].replace(/&\f/g, l[d]) : l[d] + " " + a[c];
    }
  }
}, Gc = function(t) {
  if (t.type === "decl") {
    var o = t.value;
    // charcode for l
    o.charCodeAt(0) === 108 && // charcode for b
    o.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function ka(e, t) {
  switch (Ic(e, t)) {
    // color-adjust
    case 5103:
      return we + "print-" + e + e;
    // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return we + e + e;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return we + e + ko + e + et + e + e;
    // flex, flex-direction
    case 6828:
    case 4268:
      return we + e + et + e + e;
    // order
    case 6165:
      return we + e + et + "flex-" + e + e;
    // align-items
    case 5187:
      return we + e + Oe(e, /(\w+).+(:[^]+)/, we + "box-$1$2" + et + "flex-$1$2") + e;
    // align-self
    case 5443:
      return we + e + et + "flex-item-" + Oe(e, /flex-|-self/, "") + e;
    // align-content
    case 4675:
      return we + e + et + "flex-line-pack" + Oe(e, /align-content|flex-|-self/, "") + e;
    // flex-shrink
    case 5548:
      return we + e + et + Oe(e, "shrink", "negative") + e;
    // flex-basis
    case 5292:
      return we + e + et + Oe(e, "basis", "preferred-size") + e;
    // flex-grow
    case 6060:
      return we + "box-" + Oe(e, "-grow", "") + we + e + et + Oe(e, "grow", "positive") + e;
    // transition
    case 4554:
      return we + Oe(e, /([^-])(transform)/g, "$1" + we + "$2") + e;
    // cursor
    case 6187:
      return Oe(Oe(Oe(e, /(zoom-|grab)/, we + "$1"), /(image-set)/, we + "$1"), e, "") + e;
    // background, background-image
    case 5495:
    case 3959:
      return Oe(e, /(image-set\([^]*)/, we + "$1$`$1");
    // justify-content
    case 4968:
      return Oe(Oe(e, /(.+:)(flex-)?(.*)/, we + "box-pack:$3" + et + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + we + e + e;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Oe(e, /(.+)-inline(.+)/, we + "$1$2") + e;
    // (min|max)?(width|height|inline-size|block-size)
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if ($t(e) - 1 - t > 6) switch (Qe(e, t + 1)) {
        // (m)ax-content, (m)in-content
        case 109:
          if (Qe(e, t + 4) !== 45) break;
        // (f)ill-available, (f)it-content
        case 102:
          return Oe(e, /(.+:)(.+)-([^]+)/, "$1" + we + "$2-$3$1" + ko + (Qe(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        // (s)tretch
        case 115:
          return ~Hr(e, "stretch") ? ka(Oe(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    // position: sticky
    case 4949:
      if (Qe(e, t + 1) !== 115) break;
    // display: (flex|inline-flex)
    case 6444:
      switch (Qe(e, $t(e) - 3 - (~Hr(e, "!important") && 10))) {
        // stic(k)y
        case 107:
          return Oe(e, ":", ":" + we) + e;
        // (inline-)?fl(e)x
        case 101:
          return Oe(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + we + (Qe(e, 14) === 45 ? "inline-" : "") + "box$3$1" + we + "$2$3$1" + et + "$2box$3") + e;
      }
      break;
    // writing-mode
    case 5936:
      switch (Qe(e, t + 11)) {
        // vertical-l(r)
        case 114:
          return we + e + et + Oe(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        // vertical-r(l)
        case 108:
          return we + e + et + Oe(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        // horizontal(-)tb
        case 45:
          return we + e + et + Oe(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return we + e + et + e + e;
  }
  return e;
}
var Xc = function(t, o, r, i) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case gi:
      t.return = ka(t.value, t.length);
      break;
    case Ea:
      return vn([Nn(t, {
        value: Oe(t.value, "@", "@" + we)
      })], i);
    case hi:
      if (t.length) return Nc(t.props, function(s) {
        switch (_c(s, /(::plac\w+|:read-\w+)/)) {
          // :read-(only|write)
          case ":read-only":
          case ":read-write":
            return vn([Nn(t, {
              props: [Oe(s, /:(read-\w+)/, ":" + ko + "$1")]
            })], i);
          // :placeholder
          case "::placeholder":
            return vn([Nn(t, {
              props: [Oe(s, /:(plac\w+)/, ":" + we + "input-$1")]
            }), Nn(t, {
              props: [Oe(s, /:(plac\w+)/, ":" + ko + "$1")]
            }), Nn(t, {
              props: [Oe(s, /:(plac\w+)/, et + "input-$1")]
            })], i);
        }
        return "";
      });
  }
}, Jc = [Xc], Qc = function(t) {
  var o = t.key;
  if (o === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(y) {
      var h = y.getAttribute("data-emotion");
      h.indexOf(" ") !== -1 && (document.head.appendChild(y), y.setAttribute("data-s", ""));
    });
  }
  var i = t.stylisPlugins || Jc, s = {}, a, l = [];
  a = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + o + ' "]'),
    function(y) {
      for (var h = y.getAttribute("data-emotion").split(" "), C = 1; C < h.length; C++)
        s[h[C]] = !0;
      l.push(y);
    }
  );
  var c, u = [Kc, Gc];
  {
    var d, p = [Wc, Uc(function(y) {
      d.insert(y);
    })], v = Vc(u.concat(i, p)), S = function(h) {
      return vn(Lc(h), v);
    };
    c = function(h, C, w, E) {
      d = w, S(h ? h + "{" + C.styles + "}" : C.styles), E && (g.inserted[C.name] = !0);
    };
  }
  var g = {
    key: o,
    sheet: new Oc({
      key: o,
      container: a,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: s,
    registered: {},
    insert: c
  };
  return g.sheet.hydrate(l), g;
}, fo = { exports: {} }, Re = {};
var Gi;
function Zc() {
  if (Gi) return Re;
  Gi = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? /* @__PURE__ */ Symbol.for("react.element") : 60103, o = e ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, r = e ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, i = e ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, s = e ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, a = e ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, l = e ? /* @__PURE__ */ Symbol.for("react.context") : 60110, c = e ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, u = e ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, d = e ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, p = e ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, v = e ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, S = e ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, g = e ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, y = e ? /* @__PURE__ */ Symbol.for("react.block") : 60121, h = e ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, C = e ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, w = e ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
  function E(b) {
    if (typeof b == "object" && b !== null) {
      var O = b.$$typeof;
      switch (O) {
        case t:
          switch (b = b.type, b) {
            case c:
            case u:
            case r:
            case s:
            case i:
            case p:
              return b;
            default:
              switch (b = b && b.$$typeof, b) {
                case l:
                case d:
                case g:
                case S:
                case a:
                  return b;
                default:
                  return O;
              }
          }
        case o:
          return O;
      }
    }
  }
  function T(b) {
    return E(b) === u;
  }
  return Re.AsyncMode = c, Re.ConcurrentMode = u, Re.ContextConsumer = l, Re.ContextProvider = a, Re.Element = t, Re.ForwardRef = d, Re.Fragment = r, Re.Lazy = g, Re.Memo = S, Re.Portal = o, Re.Profiler = s, Re.StrictMode = i, Re.Suspense = p, Re.isAsyncMode = function(b) {
    return T(b) || E(b) === c;
  }, Re.isConcurrentMode = T, Re.isContextConsumer = function(b) {
    return E(b) === l;
  }, Re.isContextProvider = function(b) {
    return E(b) === a;
  }, Re.isElement = function(b) {
    return typeof b == "object" && b !== null && b.$$typeof === t;
  }, Re.isForwardRef = function(b) {
    return E(b) === d;
  }, Re.isFragment = function(b) {
    return E(b) === r;
  }, Re.isLazy = function(b) {
    return E(b) === g;
  }, Re.isMemo = function(b) {
    return E(b) === S;
  }, Re.isPortal = function(b) {
    return E(b) === o;
  }, Re.isProfiler = function(b) {
    return E(b) === s;
  }, Re.isStrictMode = function(b) {
    return E(b) === i;
  }, Re.isSuspense = function(b) {
    return E(b) === p;
  }, Re.isValidElementType = function(b) {
    return typeof b == "string" || typeof b == "function" || b === r || b === u || b === s || b === i || b === p || b === v || typeof b == "object" && b !== null && (b.$$typeof === g || b.$$typeof === S || b.$$typeof === a || b.$$typeof === l || b.$$typeof === d || b.$$typeof === h || b.$$typeof === C || b.$$typeof === w || b.$$typeof === y);
  }, Re.typeOf = E, Re;
}
var $e = {}, Xi;
function eu() {
  if (Xi) return $e;
  Xi = 1;
  var e = {};
  return e.NODE_ENV !== "production" && (function() {
    var t = typeof Symbol == "function" && Symbol.for, o = t ? /* @__PURE__ */ Symbol.for("react.element") : 60103, r = t ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, i = t ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, s = t ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, a = t ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, l = t ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, c = t ? /* @__PURE__ */ Symbol.for("react.context") : 60110, u = t ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, d = t ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, p = t ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, v = t ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, S = t ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, g = t ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, y = t ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, h = t ? /* @__PURE__ */ Symbol.for("react.block") : 60121, C = t ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, w = t ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, E = t ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
    function T(P) {
      return typeof P == "string" || typeof P == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      P === i || P === d || P === a || P === s || P === v || P === S || typeof P == "object" && P !== null && (P.$$typeof === y || P.$$typeof === g || P.$$typeof === l || P.$$typeof === c || P.$$typeof === p || P.$$typeof === C || P.$$typeof === w || P.$$typeof === E || P.$$typeof === h);
    }
    function b(P) {
      if (typeof P == "object" && P !== null) {
        var q = P.$$typeof;
        switch (q) {
          case o:
            var de = P.type;
            switch (de) {
              case u:
              case d:
              case i:
              case a:
              case s:
              case v:
                return de;
              default:
                var ae = de && de.$$typeof;
                switch (ae) {
                  case c:
                  case p:
                  case y:
                  case g:
                  case l:
                    return ae;
                  default:
                    return q;
                }
            }
          case r:
            return q;
        }
      }
    }
    var O = u, _ = d, D = c, A = l, L = o, z = p, f = i, I = y, R = g, k = r, j = a, V = s, ee = v, H = !1;
    function se(P) {
      return H || (H = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), $(P) || b(P) === u;
    }
    function $(P) {
      return b(P) === d;
    }
    function B(P) {
      return b(P) === c;
    }
    function X(P) {
      return b(P) === l;
    }
    function ne(P) {
      return typeof P == "object" && P !== null && P.$$typeof === o;
    }
    function Q(P) {
      return b(P) === p;
    }
    function F(P) {
      return b(P) === i;
    }
    function K(P) {
      return b(P) === y;
    }
    function re(P) {
      return b(P) === g;
    }
    function te(P) {
      return b(P) === r;
    }
    function Y(P) {
      return b(P) === a;
    }
    function U(P) {
      return b(P) === s;
    }
    function ue(P) {
      return b(P) === v;
    }
    $e.AsyncMode = O, $e.ConcurrentMode = _, $e.ContextConsumer = D, $e.ContextProvider = A, $e.Element = L, $e.ForwardRef = z, $e.Fragment = f, $e.Lazy = I, $e.Memo = R, $e.Portal = k, $e.Profiler = j, $e.StrictMode = V, $e.Suspense = ee, $e.isAsyncMode = se, $e.isConcurrentMode = $, $e.isContextConsumer = B, $e.isContextProvider = X, $e.isElement = ne, $e.isForwardRef = Q, $e.isFragment = F, $e.isLazy = K, $e.isMemo = re, $e.isPortal = te, $e.isProfiler = Y, $e.isStrictMode = U, $e.isSuspense = ue, $e.isValidElementType = T, $e.typeOf = b;
  })(), $e;
}
var Ji;
function tu() {
  if (Ji) return fo.exports;
  Ji = 1;
  var e = {};
  return e.NODE_ENV === "production" ? fo.exports = Zc() : fo.exports = eu(), fo.exports;
}
var Er, Qi;
function nu() {
  if (Qi) return Er;
  Qi = 1;
  var e = tu(), t = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0
  }, o = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0
  }, r = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0
  }, i = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0
  }, s = {};
  s[e.ForwardRef] = r, s[e.Memo] = i;
  function a(g) {
    return e.isMemo(g) ? i : s[g.$$typeof] || t;
  }
  var l = Object.defineProperty, c = Object.getOwnPropertyNames, u = Object.getOwnPropertySymbols, d = Object.getOwnPropertyDescriptor, p = Object.getPrototypeOf, v = Object.prototype;
  function S(g, y, h) {
    if (typeof y != "string") {
      if (v) {
        var C = p(y);
        C && C !== v && S(g, C, h);
      }
      var w = c(y);
      u && (w = w.concat(u(y)));
      for (var E = a(g), T = a(y), b = 0; b < w.length; ++b) {
        var O = w[b];
        if (!o[O] && !(h && h[O]) && !(T && T[O]) && !(E && E[O])) {
          var _ = d(y, O);
          try {
            l(g, O, _);
          } catch {
          }
        }
      }
    }
    return g;
  }
  return Er = S, Er;
}
nu();
var ou = !0;
function Ia(e, t, o) {
  var r = "";
  return o.split(" ").forEach(function(i) {
    e[i] !== void 0 ? t.push(e[i] + ";") : i && (r += i + " ");
  }), r;
}
var yi = function(t, o, r) {
  var i = t.key + "-" + o.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (r === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  ou === !1) && t.registered[i] === void 0 && (t.registered[i] = o.styles);
}, vi = function(t, o, r) {
  yi(t, o, r);
  var i = t.key + "-" + o.name;
  if (t.inserted[o.name] === void 0) {
    var s = o;
    do
      t.insert(o === s ? "." + i : "", s, t.sheet, !0), s = s.next;
    while (s !== void 0);
  }
};
function ru(e) {
  for (var t = 0, o, r = 0, i = e.length; i >= 4; ++r, i -= 4)
    o = e.charCodeAt(r) & 255 | (e.charCodeAt(++r) & 255) << 8 | (e.charCodeAt(++r) & 255) << 16 | (e.charCodeAt(++r) & 255) << 24, o = /* Math.imul(k, m): */
    (o & 65535) * 1540483477 + ((o >>> 16) * 59797 << 16), o ^= /* k >>> r: */
    o >>> 24, t = /* Math.imul(k, m): */
    (o & 65535) * 1540483477 + ((o >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (i) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(r) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var iu = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, su = /[A-Z]|^ms/g, au = /_EMO_([^_]+?)_([^]*?)_EMO_/g, _a = function(t) {
  return t.charCodeAt(1) === 45;
}, Zi = function(t) {
  return t != null && typeof t != "boolean";
}, wr = /* @__PURE__ */ $a(function(e) {
  return _a(e) ? e : e.replace(su, "-$&").toLowerCase();
}), es = function(t, o) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof o == "string")
        return o.replace(au, function(r, i, s) {
          return kt = {
            name: i,
            styles: s,
            next: kt
          }, i;
        });
  }
  return iu[t] !== 1 && !_a(t) && typeof o == "number" && o !== 0 ? o + "px" : o;
};
function eo(e, t, o) {
  if (o == null)
    return "";
  var r = o;
  if (r.__emotion_styles !== void 0)
    return r;
  switch (typeof o) {
    case "boolean":
      return "";
    case "object": {
      var i = o;
      if (i.anim === 1)
        return kt = {
          name: i.name,
          styles: i.styles,
          next: kt
        }, i.name;
      var s = o;
      if (s.styles !== void 0) {
        var a = s.next;
        if (a !== void 0)
          for (; a !== void 0; )
            kt = {
              name: a.name,
              styles: a.styles,
              next: kt
            }, a = a.next;
        var l = s.styles + ";";
        return l;
      }
      return lu(e, t, o);
    }
    case "function": {
      if (e !== void 0) {
        var c = kt, u = o(e);
        return kt = c, eo(e, t, u);
      }
      break;
    }
  }
  var d = o;
  if (t == null)
    return d;
  var p = t[d];
  return p !== void 0 ? p : d;
}
function lu(e, t, o) {
  var r = "";
  if (Array.isArray(o))
    for (var i = 0; i < o.length; i++)
      r += eo(e, t, o[i]) + ";";
  else
    for (var s in o) {
      var a = o[s];
      if (typeof a != "object") {
        var l = a;
        t != null && t[l] !== void 0 ? r += s + "{" + t[l] + "}" : Zi(l) && (r += wr(s) + ":" + es(s, l) + ";");
      } else if (Array.isArray(a) && typeof a[0] == "string" && (t == null || t[a[0]] === void 0))
        for (var c = 0; c < a.length; c++)
          Zi(a[c]) && (r += wr(s) + ":" + es(s, a[c]) + ";");
      else {
        var u = eo(e, t, a);
        switch (s) {
          case "animation":
          case "animationName": {
            r += wr(s) + ":" + u + ";";
            break;
          }
          default:
            r += s + "{" + u + "}";
        }
      }
    }
  return r;
}
var ts = /label:\s*([^\s;{]+)\s*(;|$)/g, kt;
function so(e, t, o) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0, i = "";
  kt = void 0;
  var s = e[0];
  if (s == null || s.raw === void 0)
    r = !1, i += eo(o, t, s);
  else {
    var a = s;
    i += a[0];
  }
  for (var l = 1; l < e.length; l++)
    if (i += eo(o, t, e[l]), r) {
      var c = s;
      i += c[l];
    }
  ts.lastIndex = 0;
  for (var u = "", d; (d = ts.exec(i)) !== null; )
    u += "-" + d[1];
  var p = ru(i) + u;
  return {
    name: p,
    styles: i,
    next: kt
  };
}
var cu = function(t) {
  return t();
}, Na = Ur.useInsertionEffect ? Ur.useInsertionEffect : !1, Ma = Na || cu, ns = Na || m.useLayoutEffect, ja = /* @__PURE__ */ m.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ Qc({
    key: "css"
  }) : null
);
ja.Provider;
var xi = function(t) {
  return /* @__PURE__ */ m.forwardRef(function(o, r) {
    var i = m.useContext(ja);
    return t(o, i, r);
  });
}, Go = /* @__PURE__ */ m.createContext({}), Si = {}.hasOwnProperty, Yr = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", uu = function(t, o) {
  var r = {};
  for (var i in o)
    Si.call(o, i) && (r[i] = o[i]);
  return r[Yr] = t, r;
}, du = function(t) {
  var o = t.cache, r = t.serialized, i = t.isStringTag;
  return yi(o, r, i), Ma(function() {
    return vi(o, r, i);
  }), null;
}, pu = /* @__PURE__ */ xi(function(e, t, o) {
  var r = e.css;
  typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
  var i = e[Yr], s = [r], a = "";
  typeof e.className == "string" ? a = Ia(t.registered, s, e.className) : e.className != null && (a = e.className + " ");
  var l = so(s, void 0, m.useContext(Go));
  a += t.key + "-" + l.name;
  var c = {};
  for (var u in e)
    Si.call(e, u) && u !== "css" && u !== Yr && (c[u] = e[u]);
  return c.className = a, o && (c.ref = o), /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement(du, {
    cache: t,
    serialized: l,
    isStringTag: typeof i == "string"
  }), /* @__PURE__ */ m.createElement(i, c));
}), fu = pu, os = function(t, o) {
  var r = arguments;
  if (o == null || !Si.call(o, "css"))
    return m.createElement.apply(void 0, r);
  var i = r.length, s = new Array(i);
  s[0] = fu, s[1] = uu(t, o);
  for (var a = 2; a < i; a++)
    s[a] = r[a];
  return m.createElement.apply(null, s);
};
(function(e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(os || (os = {}));
var mu = /* @__PURE__ */ xi(function(e, t) {
  var o = e.styles, r = so([o], void 0, m.useContext(Go)), i = m.useRef();
  return ns(function() {
    var s = t.key + "-global", a = new t.sheet.constructor({
      key: s,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), l = !1, c = document.querySelector('style[data-emotion="' + s + " " + r.name + '"]');
    return t.sheet.tags.length && (a.before = t.sheet.tags[0]), c !== null && (l = !0, c.setAttribute("data-emotion", s), a.hydrate([c])), i.current = [a, l], function() {
      a.flush();
    };
  }, [t]), ns(function() {
    var s = i.current, a = s[0], l = s[1];
    if (l) {
      s[1] = !1;
      return;
    }
    if (r.next !== void 0 && vi(t, r.next, !0), a.tags.length) {
      var c = a.tags[a.tags.length - 1].nextElementSibling;
      a.before = c, a.flush();
    }
    t.insert("", r, a, !1);
  }, [t, r.name]), null;
});
function Ti() {
  for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++)
    t[o] = arguments[o];
  return so(t);
}
function ao() {
  var e = Ti.apply(void 0, arguments), t = "animation-" + e.name;
  return {
    name: t,
    styles: "@keyframes " + t + "{" + e.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}
var hu = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, gu = /* @__PURE__ */ $a(
  function(e) {
    return hu.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), bu = gu, yu = function(t) {
  return t !== "theme";
}, rs = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? bu : yu;
}, is = function(t, o, r) {
  var i;
  if (o) {
    var s = o.shouldForwardProp;
    i = t.__emotion_forwardProp && s ? function(a) {
      return t.__emotion_forwardProp(a) && s(a);
    } : s;
  }
  return typeof i != "function" && r && (i = t.__emotion_forwardProp), i;
}, vu = function(t) {
  var o = t.cache, r = t.serialized, i = t.isStringTag;
  return yi(o, r, i), Ma(function() {
    return vi(o, r, i);
  }), null;
}, xu = function e(t, o) {
  var r = t.__emotion_real === t, i = r && t.__emotion_base || t, s, a;
  o !== void 0 && (s = o.label, a = o.target);
  var l = is(t, o, r), c = l || rs(i), u = !c("as");
  return function() {
    var d = arguments, p = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (s !== void 0 && p.push("label:" + s + ";"), d[0] == null || d[0].raw === void 0)
      p.push.apply(p, d);
    else {
      var v = d[0];
      p.push(v[0]);
      for (var S = d.length, g = 1; g < S; g++)
        p.push(d[g], v[g]);
    }
    var y = xi(function(h, C, w) {
      var E = u && h.as || i, T = "", b = [], O = h;
      if (h.theme == null) {
        O = {};
        for (var _ in h)
          O[_] = h[_];
        O.theme = m.useContext(Go);
      }
      typeof h.className == "string" ? T = Ia(C.registered, b, h.className) : h.className != null && (T = h.className + " ");
      var D = so(p.concat(b), C.registered, O);
      T += C.key + "-" + D.name, a !== void 0 && (T += " " + a);
      var A = u && l === void 0 ? rs(E) : c, L = {};
      for (var z in h)
        u && z === "as" || A(z) && (L[z] = h[z]);
      return L.className = T, w && (L.ref = w), /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement(vu, {
        cache: C,
        serialized: D,
        isStringTag: typeof E == "string"
      }), /* @__PURE__ */ m.createElement(E, L));
    });
    return y.displayName = s !== void 0 ? s : "Styled(" + (typeof i == "string" ? i : i.displayName || i.name || "Component") + ")", y.defaultProps = t.defaultProps, y.__emotion_real = y, y.__emotion_base = i, y.__emotion_styles = p, y.__emotion_forwardProp = l, Object.defineProperty(y, "toString", {
      value: function() {
        return "." + a;
      }
    }), y.withComponent = function(h, C) {
      var w = e(h, $o({}, o, C, {
        shouldForwardProp: is(y, C, !0)
      }));
      return w.apply(void 0, p);
    }, y;
  };
}, Su = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], Kr = xu.bind(null);
Su.forEach(function(e) {
  Kr[e] = Kr(e);
});
var mo = { exports: {} }, ho = { exports: {} }, ke = {};
var ss;
function Tu() {
  if (ss) return ke;
  ss = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? /* @__PURE__ */ Symbol.for("react.element") : 60103, o = e ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, r = e ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, i = e ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, s = e ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, a = e ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, l = e ? /* @__PURE__ */ Symbol.for("react.context") : 60110, c = e ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, u = e ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, d = e ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, p = e ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, v = e ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, S = e ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, g = e ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, y = e ? /* @__PURE__ */ Symbol.for("react.block") : 60121, h = e ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, C = e ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, w = e ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
  function E(b) {
    if (typeof b == "object" && b !== null) {
      var O = b.$$typeof;
      switch (O) {
        case t:
          switch (b = b.type, b) {
            case c:
            case u:
            case r:
            case s:
            case i:
            case p:
              return b;
            default:
              switch (b = b && b.$$typeof, b) {
                case l:
                case d:
                case g:
                case S:
                case a:
                  return b;
                default:
                  return O;
              }
          }
        case o:
          return O;
      }
    }
  }
  function T(b) {
    return E(b) === u;
  }
  return ke.AsyncMode = c, ke.ConcurrentMode = u, ke.ContextConsumer = l, ke.ContextProvider = a, ke.Element = t, ke.ForwardRef = d, ke.Fragment = r, ke.Lazy = g, ke.Memo = S, ke.Portal = o, ke.Profiler = s, ke.StrictMode = i, ke.Suspense = p, ke.isAsyncMode = function(b) {
    return T(b) || E(b) === c;
  }, ke.isConcurrentMode = T, ke.isContextConsumer = function(b) {
    return E(b) === l;
  }, ke.isContextProvider = function(b) {
    return E(b) === a;
  }, ke.isElement = function(b) {
    return typeof b == "object" && b !== null && b.$$typeof === t;
  }, ke.isForwardRef = function(b) {
    return E(b) === d;
  }, ke.isFragment = function(b) {
    return E(b) === r;
  }, ke.isLazy = function(b) {
    return E(b) === g;
  }, ke.isMemo = function(b) {
    return E(b) === S;
  }, ke.isPortal = function(b) {
    return E(b) === o;
  }, ke.isProfiler = function(b) {
    return E(b) === s;
  }, ke.isStrictMode = function(b) {
    return E(b) === i;
  }, ke.isSuspense = function(b) {
    return E(b) === p;
  }, ke.isValidElementType = function(b) {
    return typeof b == "string" || typeof b == "function" || b === r || b === u || b === s || b === i || b === p || b === v || typeof b == "object" && b !== null && (b.$$typeof === g || b.$$typeof === S || b.$$typeof === a || b.$$typeof === l || b.$$typeof === d || b.$$typeof === h || b.$$typeof === C || b.$$typeof === w || b.$$typeof === y);
  }, ke.typeOf = E, ke;
}
var Ie = {}, as;
function Cu() {
  if (as) return Ie;
  as = 1;
  var e = {};
  return e.NODE_ENV !== "production" && (function() {
    var t = typeof Symbol == "function" && Symbol.for, o = t ? /* @__PURE__ */ Symbol.for("react.element") : 60103, r = t ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, i = t ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, s = t ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, a = t ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, l = t ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, c = t ? /* @__PURE__ */ Symbol.for("react.context") : 60110, u = t ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, d = t ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, p = t ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, v = t ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, S = t ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, g = t ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, y = t ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, h = t ? /* @__PURE__ */ Symbol.for("react.block") : 60121, C = t ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, w = t ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, E = t ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
    function T(P) {
      return typeof P == "string" || typeof P == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      P === i || P === d || P === a || P === s || P === v || P === S || typeof P == "object" && P !== null && (P.$$typeof === y || P.$$typeof === g || P.$$typeof === l || P.$$typeof === c || P.$$typeof === p || P.$$typeof === C || P.$$typeof === w || P.$$typeof === E || P.$$typeof === h);
    }
    function b(P) {
      if (typeof P == "object" && P !== null) {
        var q = P.$$typeof;
        switch (q) {
          case o:
            var de = P.type;
            switch (de) {
              case u:
              case d:
              case i:
              case a:
              case s:
              case v:
                return de;
              default:
                var ae = de && de.$$typeof;
                switch (ae) {
                  case c:
                  case p:
                  case y:
                  case g:
                  case l:
                    return ae;
                  default:
                    return q;
                }
            }
          case r:
            return q;
        }
      }
    }
    var O = u, _ = d, D = c, A = l, L = o, z = p, f = i, I = y, R = g, k = r, j = a, V = s, ee = v, H = !1;
    function se(P) {
      return H || (H = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), $(P) || b(P) === u;
    }
    function $(P) {
      return b(P) === d;
    }
    function B(P) {
      return b(P) === c;
    }
    function X(P) {
      return b(P) === l;
    }
    function ne(P) {
      return typeof P == "object" && P !== null && P.$$typeof === o;
    }
    function Q(P) {
      return b(P) === p;
    }
    function F(P) {
      return b(P) === i;
    }
    function K(P) {
      return b(P) === y;
    }
    function re(P) {
      return b(P) === g;
    }
    function te(P) {
      return b(P) === r;
    }
    function Y(P) {
      return b(P) === a;
    }
    function U(P) {
      return b(P) === s;
    }
    function ue(P) {
      return b(P) === v;
    }
    Ie.AsyncMode = O, Ie.ConcurrentMode = _, Ie.ContextConsumer = D, Ie.ContextProvider = A, Ie.Element = L, Ie.ForwardRef = z, Ie.Fragment = f, Ie.Lazy = I, Ie.Memo = R, Ie.Portal = k, Ie.Profiler = j, Ie.StrictMode = V, Ie.Suspense = ee, Ie.isAsyncMode = se, Ie.isConcurrentMode = $, Ie.isContextConsumer = B, Ie.isContextProvider = X, Ie.isElement = ne, Ie.isForwardRef = Q, Ie.isFragment = F, Ie.isLazy = K, Ie.isMemo = re, Ie.isPortal = te, Ie.isProfiler = Y, Ie.isStrictMode = U, Ie.isSuspense = ue, Ie.isValidElementType = T, Ie.typeOf = b;
  })(), Ie;
}
var ls;
function Aa() {
  if (ls) return ho.exports;
  ls = 1;
  var e = {};
  return e.NODE_ENV === "production" ? ho.exports = Tu() : ho.exports = Cu(), ho.exports;
}
var Or, cs;
function Eu() {
  if (cs) return Or;
  cs = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
  function r(s) {
    if (s == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(s);
  }
  function i() {
    try {
      if (!Object.assign)
        return !1;
      var s = new String("abc");
      if (s[5] = "de", Object.getOwnPropertyNames(s)[0] === "5")
        return !1;
      for (var a = {}, l = 0; l < 10; l++)
        a["_" + String.fromCharCode(l)] = l;
      var c = Object.getOwnPropertyNames(a).map(function(d) {
        return a[d];
      });
      if (c.join("") !== "0123456789")
        return !1;
      var u = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(d) {
        u[d] = d;
      }), Object.keys(Object.assign({}, u)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Or = i() ? Object.assign : function(s, a) {
    for (var l, c = r(s), u, d = 1; d < arguments.length; d++) {
      l = Object(arguments[d]);
      for (var p in l)
        t.call(l, p) && (c[p] = l[p]);
      if (e) {
        u = e(l);
        for (var v = 0; v < u.length; v++)
          o.call(l, u[v]) && (c[u[v]] = l[u[v]]);
      }
    }
    return c;
  }, Or;
}
var Pr, us;
function Ci() {
  if (us) return Pr;
  us = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Pr = e, Pr;
}
var Rr, ds;
function Da() {
  return ds || (ds = 1, Rr = Function.call.bind(Object.prototype.hasOwnProperty)), Rr;
}
var $r, ps;
function wu() {
  if (ps) return $r;
  ps = 1;
  var e = {}, t = function() {
  };
  if (e.NODE_ENV !== "production") {
    var o = /* @__PURE__ */ Ci(), r = {}, i = /* @__PURE__ */ Da();
    t = function(a) {
      var l = "Warning: " + a;
      typeof console < "u" && console.error(l);
      try {
        throw new Error(l);
      } catch {
      }
    };
  }
  function s(a, l, c, u, d) {
    if (e.NODE_ENV !== "production") {
      for (var p in a)
        if (i(a, p)) {
          var v;
          try {
            if (typeof a[p] != "function") {
              var S = Error(
                (u || "React class") + ": " + c + " type `" + p + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[p] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw S.name = "Invariant Violation", S;
            }
            v = a[p](l, p, u, c, null, o);
          } catch (y) {
            v = y;
          }
          if (v && !(v instanceof Error) && t(
            (u || "React class") + ": type specification of " + c + " `" + p + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof v + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), v instanceof Error && !(v.message in r)) {
            r[v.message] = !0;
            var g = d ? d() : "";
            t(
              "Failed " + c + " type: " + v.message + (g ?? "")
            );
          }
        }
    }
  }
  return s.resetWarningCache = function() {
    e.NODE_ENV !== "production" && (r = {});
  }, $r = s, $r;
}
var kr, fs;
function Ou() {
  if (fs) return kr;
  fs = 1;
  var e = {}, t = Aa(), o = Eu(), r = /* @__PURE__ */ Ci(), i = /* @__PURE__ */ Da(), s = /* @__PURE__ */ wu(), a = function() {
  };
  e.NODE_ENV !== "production" && (a = function(c) {
    var u = "Warning: " + c;
    typeof console < "u" && console.error(u);
    try {
      throw new Error(u);
    } catch {
    }
  });
  function l() {
    return null;
  }
  return kr = function(c, u) {
    var d = typeof Symbol == "function" && Symbol.iterator, p = "@@iterator";
    function v($) {
      var B = $ && (d && $[d] || $[p]);
      if (typeof B == "function")
        return B;
    }
    var S = "<<anonymous>>", g = {
      array: w("array"),
      bigint: w("bigint"),
      bool: w("boolean"),
      func: w("function"),
      number: w("number"),
      object: w("object"),
      string: w("string"),
      symbol: w("symbol"),
      any: E(),
      arrayOf: T,
      element: b(),
      elementType: O(),
      instanceOf: _,
      node: z(),
      objectOf: A,
      oneOf: D,
      oneOfType: L,
      shape: I,
      exact: R
    };
    function y($, B) {
      return $ === B ? $ !== 0 || 1 / $ === 1 / B : $ !== $ && B !== B;
    }
    function h($, B) {
      this.message = $, this.data = B && typeof B == "object" ? B : {}, this.stack = "";
    }
    h.prototype = Error.prototype;
    function C($) {
      if (e.NODE_ENV !== "production")
        var B = {}, X = 0;
      function ne(F, K, re, te, Y, U, ue) {
        if (te = te || S, U = U || re, ue !== r) {
          if (u) {
            var P = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw P.name = "Invariant Violation", P;
          } else if (e.NODE_ENV !== "production" && typeof console < "u") {
            var q = te + ":" + re;
            !B[q] && // Avoid spamming the console because they are often not actionable except for lib authors
            X < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + U + "` prop on `" + te + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), B[q] = !0, X++);
          }
        }
        return K[re] == null ? F ? K[re] === null ? new h("The " + Y + " `" + U + "` is marked as required " + ("in `" + te + "`, but its value is `null`.")) : new h("The " + Y + " `" + U + "` is marked as required in " + ("`" + te + "`, but its value is `undefined`.")) : null : $(K, re, te, Y, U);
      }
      var Q = ne.bind(null, !1);
      return Q.isRequired = ne.bind(null, !0), Q;
    }
    function w($) {
      function B(X, ne, Q, F, K, re) {
        var te = X[ne], Y = V(te);
        if (Y !== $) {
          var U = ee(te);
          return new h(
            "Invalid " + F + " `" + K + "` of type " + ("`" + U + "` supplied to `" + Q + "`, expected ") + ("`" + $ + "`."),
            { expectedType: $ }
          );
        }
        return null;
      }
      return C(B);
    }
    function E() {
      return C(l);
    }
    function T($) {
      function B(X, ne, Q, F, K) {
        if (typeof $ != "function")
          return new h("Property `" + K + "` of component `" + Q + "` has invalid PropType notation inside arrayOf.");
        var re = X[ne];
        if (!Array.isArray(re)) {
          var te = V(re);
          return new h("Invalid " + F + " `" + K + "` of type " + ("`" + te + "` supplied to `" + Q + "`, expected an array."));
        }
        for (var Y = 0; Y < re.length; Y++) {
          var U = $(re, Y, Q, F, K + "[" + Y + "]", r);
          if (U instanceof Error)
            return U;
        }
        return null;
      }
      return C(B);
    }
    function b() {
      function $(B, X, ne, Q, F) {
        var K = B[X];
        if (!c(K)) {
          var re = V(K);
          return new h("Invalid " + Q + " `" + F + "` of type " + ("`" + re + "` supplied to `" + ne + "`, expected a single ReactElement."));
        }
        return null;
      }
      return C($);
    }
    function O() {
      function $(B, X, ne, Q, F) {
        var K = B[X];
        if (!t.isValidElementType(K)) {
          var re = V(K);
          return new h("Invalid " + Q + " `" + F + "` of type " + ("`" + re + "` supplied to `" + ne + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return C($);
    }
    function _($) {
      function B(X, ne, Q, F, K) {
        if (!(X[ne] instanceof $)) {
          var re = $.name || S, te = se(X[ne]);
          return new h("Invalid " + F + " `" + K + "` of type " + ("`" + te + "` supplied to `" + Q + "`, expected ") + ("instance of `" + re + "`."));
        }
        return null;
      }
      return C(B);
    }
    function D($) {
      if (!Array.isArray($))
        return e.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), l;
      function B(X, ne, Q, F, K) {
        for (var re = X[ne], te = 0; te < $.length; te++)
          if (y(re, $[te]))
            return null;
        var Y = JSON.stringify($, function(ue, P) {
          var q = ee(P);
          return q === "symbol" ? String(P) : P;
        });
        return new h("Invalid " + F + " `" + K + "` of value `" + String(re) + "` " + ("supplied to `" + Q + "`, expected one of " + Y + "."));
      }
      return C(B);
    }
    function A($) {
      function B(X, ne, Q, F, K) {
        if (typeof $ != "function")
          return new h("Property `" + K + "` of component `" + Q + "` has invalid PropType notation inside objectOf.");
        var re = X[ne], te = V(re);
        if (te !== "object")
          return new h("Invalid " + F + " `" + K + "` of type " + ("`" + te + "` supplied to `" + Q + "`, expected an object."));
        for (var Y in re)
          if (i(re, Y)) {
            var U = $(re, Y, Q, F, K + "." + Y, r);
            if (U instanceof Error)
              return U;
          }
        return null;
      }
      return C(B);
    }
    function L($) {
      if (!Array.isArray($))
        return e.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), l;
      for (var B = 0; B < $.length; B++) {
        var X = $[B];
        if (typeof X != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + H(X) + " at index " + B + "."
          ), l;
      }
      function ne(Q, F, K, re, te) {
        for (var Y = [], U = 0; U < $.length; U++) {
          var ue = $[U], P = ue(Q, F, K, re, te, r);
          if (P == null)
            return null;
          P.data && i(P.data, "expectedType") && Y.push(P.data.expectedType);
        }
        var q = Y.length > 0 ? ", expected one of type [" + Y.join(", ") + "]" : "";
        return new h("Invalid " + re + " `" + te + "` supplied to " + ("`" + K + "`" + q + "."));
      }
      return C(ne);
    }
    function z() {
      function $(B, X, ne, Q, F) {
        return k(B[X]) ? null : new h("Invalid " + Q + " `" + F + "` supplied to " + ("`" + ne + "`, expected a ReactNode."));
      }
      return C($);
    }
    function f($, B, X, ne, Q) {
      return new h(
        ($ || "React class") + ": " + B + " type `" + X + "." + ne + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + Q + "`."
      );
    }
    function I($) {
      function B(X, ne, Q, F, K) {
        var re = X[ne], te = V(re);
        if (te !== "object")
          return new h("Invalid " + F + " `" + K + "` of type `" + te + "` " + ("supplied to `" + Q + "`, expected `object`."));
        for (var Y in $) {
          var U = $[Y];
          if (typeof U != "function")
            return f(Q, F, K, Y, ee(U));
          var ue = U(re, Y, Q, F, K + "." + Y, r);
          if (ue)
            return ue;
        }
        return null;
      }
      return C(B);
    }
    function R($) {
      function B(X, ne, Q, F, K) {
        var re = X[ne], te = V(re);
        if (te !== "object")
          return new h("Invalid " + F + " `" + K + "` of type `" + te + "` " + ("supplied to `" + Q + "`, expected `object`."));
        var Y = o({}, X[ne], $);
        for (var U in Y) {
          var ue = $[U];
          if (i($, U) && typeof ue != "function")
            return f(Q, F, K, U, ee(ue));
          if (!ue)
            return new h(
              "Invalid " + F + " `" + K + "` key `" + U + "` supplied to `" + Q + "`.\nBad object: " + JSON.stringify(X[ne], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys($), null, "  ")
            );
          var P = ue(re, U, Q, F, K + "." + U, r);
          if (P)
            return P;
        }
        return null;
      }
      return C(B);
    }
    function k($) {
      switch (typeof $) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !$;
        case "object":
          if (Array.isArray($))
            return $.every(k);
          if ($ === null || c($))
            return !0;
          var B = v($);
          if (B) {
            var X = B.call($), ne;
            if (B !== $.entries) {
              for (; !(ne = X.next()).done; )
                if (!k(ne.value))
                  return !1;
            } else
              for (; !(ne = X.next()).done; ) {
                var Q = ne.value;
                if (Q && !k(Q[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function j($, B) {
      return $ === "symbol" ? !0 : B ? B["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && B instanceof Symbol : !1;
    }
    function V($) {
      var B = typeof $;
      return Array.isArray($) ? "array" : $ instanceof RegExp ? "object" : j(B, $) ? "symbol" : B;
    }
    function ee($) {
      if (typeof $ > "u" || $ === null)
        return "" + $;
      var B = V($);
      if (B === "object") {
        if ($ instanceof Date)
          return "date";
        if ($ instanceof RegExp)
          return "regexp";
      }
      return B;
    }
    function H($) {
      var B = ee($);
      switch (B) {
        case "array":
        case "object":
          return "an " + B;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + B;
        default:
          return B;
      }
    }
    function se($) {
      return !$.constructor || !$.constructor.name ? S : $.constructor.name;
    }
    return g.checkPropTypes = s, g.resetWarningCache = s.resetWarningCache, g.PropTypes = g, g;
  }, kr;
}
var Ir, ms;
function Pu() {
  if (ms) return Ir;
  ms = 1;
  var e = /* @__PURE__ */ Ci();
  function t() {
  }
  function o() {
  }
  return o.resetWarningCache = t, Ir = function() {
    function r(a, l, c, u, d, p) {
      if (p !== e) {
        var v = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw v.name = "Invariant Violation", v;
      }
    }
    r.isRequired = r;
    function i() {
      return r;
    }
    var s = {
      array: r,
      bigint: r,
      bool: r,
      func: r,
      number: r,
      object: r,
      string: r,
      symbol: r,
      any: r,
      arrayOf: i,
      element: r,
      elementType: r,
      instanceOf: i,
      node: r,
      objectOf: i,
      oneOf: i,
      oneOfType: i,
      shape: i,
      exact: i,
      checkPropTypes: o,
      resetWarningCache: t
    };
    return s.PropTypes = s, s;
  }, Ir;
}
var hs;
function Ru() {
  if (hs) return mo.exports;
  hs = 1;
  var e = {};
  if (e.NODE_ENV !== "production") {
    var t = Aa(), o = !0;
    mo.exports = /* @__PURE__ */ Ou()(t.isElement, o);
  } else
    mo.exports = /* @__PURE__ */ Pu()();
  return mo.exports;
}
var $u = /* @__PURE__ */ Ru();
const n = /* @__PURE__ */ Ta($u);
var ku = {};
function Iu(e) {
  return e == null || Object.keys(e).length === 0;
}
function Ba(e) {
  const {
    styles: t,
    defaultTheme: o = {}
  } = e, r = typeof t == "function" ? (i) => t(Iu(i) ? o : i) : t;
  return /* @__PURE__ */ x.jsx(mu, {
    styles: r
  });
}
ku.NODE_ENV !== "production" && (Ba.propTypes = {
  defaultTheme: n.object,
  styles: n.oneOfType([n.array, n.string, n.object, n.func])
});
var _u = {};
function Fa(e, t) {
  const o = Kr(e, t);
  return _u.NODE_ENV !== "production" ? (...r) => {
    const i = typeof e == "string" ? `"${e}"` : "component";
    return r.length === 0 ? console.error([`MUI: Seems like you called \`styled(${i})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : r.some((s) => s === void 0) && console.error(`MUI: the styled(${i})(...args) API requires all its args to be defined.`), o(...r);
  } : o;
}
function Nu(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const gs = [];
function Vt(e) {
  return gs[0] = e, so(gs);
}
var go = { exports: {} }, Ae = {};
var bs;
function Mu() {
  if (bs) return Ae;
  bs = 1;
  var e = /* @__PURE__ */ Symbol.for("react.transitional.element"), t = /* @__PURE__ */ Symbol.for("react.portal"), o = /* @__PURE__ */ Symbol.for("react.fragment"), r = /* @__PURE__ */ Symbol.for("react.strict_mode"), i = /* @__PURE__ */ Symbol.for("react.profiler"), s = /* @__PURE__ */ Symbol.for("react.consumer"), a = /* @__PURE__ */ Symbol.for("react.context"), l = /* @__PURE__ */ Symbol.for("react.forward_ref"), c = /* @__PURE__ */ Symbol.for("react.suspense"), u = /* @__PURE__ */ Symbol.for("react.suspense_list"), d = /* @__PURE__ */ Symbol.for("react.memo"), p = /* @__PURE__ */ Symbol.for("react.lazy"), v = /* @__PURE__ */ Symbol.for("react.view_transition"), S = /* @__PURE__ */ Symbol.for("react.client.reference");
  function g(y) {
    if (typeof y == "object" && y !== null) {
      var h = y.$$typeof;
      switch (h) {
        case e:
          switch (y = y.type, y) {
            case o:
            case i:
            case r:
            case c:
            case u:
            case v:
              return y;
            default:
              switch (y = y && y.$$typeof, y) {
                case a:
                case l:
                case p:
                case d:
                  return y;
                case s:
                  return y;
                default:
                  return h;
              }
          }
        case t:
          return h;
      }
    }
  }
  return Ae.ContextConsumer = s, Ae.ContextProvider = a, Ae.Element = e, Ae.ForwardRef = l, Ae.Fragment = o, Ae.Lazy = p, Ae.Memo = d, Ae.Portal = t, Ae.Profiler = i, Ae.StrictMode = r, Ae.Suspense = c, Ae.SuspenseList = u, Ae.isContextConsumer = function(y) {
    return g(y) === s;
  }, Ae.isContextProvider = function(y) {
    return g(y) === a;
  }, Ae.isElement = function(y) {
    return typeof y == "object" && y !== null && y.$$typeof === e;
  }, Ae.isForwardRef = function(y) {
    return g(y) === l;
  }, Ae.isFragment = function(y) {
    return g(y) === o;
  }, Ae.isLazy = function(y) {
    return g(y) === p;
  }, Ae.isMemo = function(y) {
    return g(y) === d;
  }, Ae.isPortal = function(y) {
    return g(y) === t;
  }, Ae.isProfiler = function(y) {
    return g(y) === i;
  }, Ae.isStrictMode = function(y) {
    return g(y) === r;
  }, Ae.isSuspense = function(y) {
    return g(y) === c;
  }, Ae.isSuspenseList = function(y) {
    return g(y) === u;
  }, Ae.isValidElementType = function(y) {
    return typeof y == "string" || typeof y == "function" || y === o || y === i || y === r || y === c || y === u || typeof y == "object" && y !== null && (y.$$typeof === p || y.$$typeof === d || y.$$typeof === a || y.$$typeof === s || y.$$typeof === l || y.$$typeof === S || y.getModuleId !== void 0);
  }, Ae.typeOf = g, Ae;
}
var De = {}, ys;
function ju() {
  if (ys) return De;
  ys = 1;
  var e = {};
  return e.NODE_ENV !== "production" && (function() {
    function t(h) {
      if (typeof h == "object" && h !== null) {
        var C = h.$$typeof;
        switch (C) {
          case o:
            switch (h = h.type, h) {
              case i:
              case a:
              case s:
              case d:
              case p:
              case g:
                return h;
              default:
                switch (h = h && h.$$typeof, h) {
                  case c:
                  case u:
                  case S:
                  case v:
                    return h;
                  case l:
                    return h;
                  default:
                    return C;
                }
            }
          case r:
            return C;
        }
      }
    }
    var o = /* @__PURE__ */ Symbol.for("react.transitional.element"), r = /* @__PURE__ */ Symbol.for("react.portal"), i = /* @__PURE__ */ Symbol.for("react.fragment"), s = /* @__PURE__ */ Symbol.for("react.strict_mode"), a = /* @__PURE__ */ Symbol.for("react.profiler"), l = /* @__PURE__ */ Symbol.for("react.consumer"), c = /* @__PURE__ */ Symbol.for("react.context"), u = /* @__PURE__ */ Symbol.for("react.forward_ref"), d = /* @__PURE__ */ Symbol.for("react.suspense"), p = /* @__PURE__ */ Symbol.for("react.suspense_list"), v = /* @__PURE__ */ Symbol.for("react.memo"), S = /* @__PURE__ */ Symbol.for("react.lazy"), g = /* @__PURE__ */ Symbol.for("react.view_transition"), y = /* @__PURE__ */ Symbol.for("react.client.reference");
    De.ContextConsumer = l, De.ContextProvider = c, De.Element = o, De.ForwardRef = u, De.Fragment = i, De.Lazy = S, De.Memo = v, De.Portal = r, De.Profiler = a, De.StrictMode = s, De.Suspense = d, De.SuspenseList = p, De.isContextConsumer = function(h) {
      return t(h) === l;
    }, De.isContextProvider = function(h) {
      return t(h) === c;
    }, De.isElement = function(h) {
      return typeof h == "object" && h !== null && h.$$typeof === o;
    }, De.isForwardRef = function(h) {
      return t(h) === u;
    }, De.isFragment = function(h) {
      return t(h) === i;
    }, De.isLazy = function(h) {
      return t(h) === S;
    }, De.isMemo = function(h) {
      return t(h) === v;
    }, De.isPortal = function(h) {
      return t(h) === r;
    }, De.isProfiler = function(h) {
      return t(h) === a;
    }, De.isStrictMode = function(h) {
      return t(h) === s;
    }, De.isSuspense = function(h) {
      return t(h) === d;
    }, De.isSuspenseList = function(h) {
      return t(h) === p;
    }, De.isValidElementType = function(h) {
      return typeof h == "string" || typeof h == "function" || h === i || h === a || h === s || h === d || h === p || typeof h == "object" && h !== null && (h.$$typeof === S || h.$$typeof === v || h.$$typeof === c || h.$$typeof === l || h.$$typeof === u || h.$$typeof === y || h.getModuleId !== void 0);
    }, De.typeOf = t;
  })(), De;
}
var vs;
function Au() {
  if (vs) return go.exports;
  vs = 1;
  var e = {};
  return e.NODE_ENV === "production" ? go.exports = /* @__PURE__ */ Mu() : go.exports = /* @__PURE__ */ ju(), go.exports;
}
var Ut = /* @__PURE__ */ Au();
function It(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function La(e) {
  if (/* @__PURE__ */ m.isValidElement(e) || Ut.isValidElementType(e) || !It(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((o) => {
    t[o] = La(e[o]);
  }), t;
}
function Ge(e, t, o = {
  clone: !0
}) {
  const r = o.clone ? {
    ...e
  } : e;
  return It(e) && It(t) && Object.keys(t).forEach((i) => {
    /* @__PURE__ */ m.isValidElement(t[i]) || Ut.isValidElementType(t[i]) ? r[i] = t[i] : It(t[i]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, i) && It(e[i]) ? r[i] = Ge(e[i], t[i], o) : o.clone ? r[i] = It(t[i]) ? La(t[i]) : t[i] : r[i] = t[i];
  }), r;
}
const Du = (e) => {
  const t = Object.keys(e).map((o) => ({
    key: o,
    val: e[o]
  })) || [];
  return t.sort((o, r) => o.val - r.val), t.reduce((o, r) => ({
    ...o,
    [r.key]: r.val
  }), {});
};
function Bu(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: t = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: o = "px",
    step: r = 5,
    ...i
  } = e, s = Du(t), a = Object.keys(s);
  function l(v) {
    return `@media (min-width:${typeof t[v] == "number" ? t[v] : v}${o})`;
  }
  function c(v) {
    return `@media (max-width:${(typeof t[v] == "number" ? t[v] : v) - r / 100}${o})`;
  }
  function u(v, S) {
    const g = a.indexOf(S);
    return `@media (min-width:${typeof t[v] == "number" ? t[v] : v}${o}) and (max-width:${(g !== -1 && typeof t[a[g]] == "number" ? t[a[g]] : S) - r / 100}${o})`;
  }
  function d(v) {
    return a.indexOf(v) + 1 < a.length ? u(v, a[a.indexOf(v) + 1]) : l(v);
  }
  function p(v) {
    const S = a.indexOf(v);
    return S === 0 ? l(a[1]) : S === a.length - 1 ? c(a[S]) : u(v, a[a.indexOf(v) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: a,
    values: s,
    up: l,
    down: c,
    between: u,
    only: d,
    not: p,
    unit: o,
    ...i
  };
}
var Fu = {};
function xs(e, t) {
  if (!e.containerQueries)
    return t;
  const o = Object.keys(t).filter((r) => r.startsWith("@container")).sort((r, i) => {
    const s = /min-width:\s*([0-9.]+)/;
    return +(r.match(s)?.[1] || 0) - +(i.match(s)?.[1] || 0);
  });
  return o.length ? o.reduce((r, i) => {
    const s = t[i];
    return delete r[i], r[i] = s, r;
  }, {
    ...t
  }) : t;
}
function Lu(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((o) => t.startsWith(`@${o}`)) || !!t.match(/^@\d/));
}
function zu(e, t) {
  const o = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!o) {
    if (Fu.NODE_ENV !== "production")
      throw (
        /* minify-error */
        new Error(`MUI: The provided shorthand ${`(${t})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.`)
      );
    return null;
  }
  const [, r, i] = o, s = Number.isNaN(+r) ? r || 0 : +r;
  return e.containerQueries(i).up(s);
}
function Wu(e) {
  const t = (s, a) => s.replace("@media", a ? `@container ${a}` : "@container");
  function o(s, a) {
    s.up = (...l) => t(e.breakpoints.up(...l), a), s.down = (...l) => t(e.breakpoints.down(...l), a), s.between = (...l) => t(e.breakpoints.between(...l), a), s.only = (...l) => t(e.breakpoints.only(...l), a), s.not = (...l) => {
      const c = t(e.breakpoints.not(...l), a);
      return c.includes("not all and") ? c.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : c;
    };
  }
  const r = {}, i = (s) => (o(r, s), r);
  return o(i), {
    ...e,
    containerQueries: i
  };
}
const Vu = {
  borderRadius: 4
};
var Uu = {};
const Gt = Uu.NODE_ENV !== "production" ? n.oneOfType([n.number, n.string, n.object, n.array]) : {};
function Yn(e, t) {
  return t ? Ge(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const Xo = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, Ss = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Xo[e]}px)`
}, Hu = {
  containerQueries: (e) => ({
    up: (t) => {
      let o = typeof t == "number" ? t : Xo[t] || t;
      return typeof o == "number" && (o = `${o}px`), e ? `@container ${e} (min-width:${o})` : `@container (min-width:${o})`;
    }
  })
};
function Tt(e, t, o) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const s = r.breakpoints || Ss;
    return t.reduce((a, l, c) => (a[s.up(s.keys[c])] = o(t[c]), a), {});
  }
  if (typeof t == "object") {
    const s = r.breakpoints || Ss;
    return Object.keys(t).reduce((a, l) => {
      if (Lu(s.keys, l)) {
        const c = zu(r.containerQueries ? r : Hu, l);
        c && (a[c] = o(t[l], l));
      } else if (Object.keys(s.values || Xo).includes(l)) {
        const c = s.up(l);
        a[c] = o(t[l], l);
      } else {
        const c = l;
        a[c] = t[c];
      }
      return a;
    }, {});
  }
  return o(t);
}
function za(e = {}) {
  return e.keys?.reduce((o, r) => {
    const i = e.up(r);
    return o[i] = {}, o;
  }, {}) || {};
}
function Gr(e, t) {
  return e.reduce((o, r) => {
    const i = o[r];
    return (!i || Object.keys(i).length === 0) && delete o[r], o;
  }, t);
}
function qu(e, ...t) {
  const o = za(e), r = [o, ...t].reduce((i, s) => Ge(i, s), {});
  return Gr(Object.keys(o), r);
}
function Yu(e, t) {
  if (typeof e != "object")
    return {};
  const o = {}, r = Object.keys(t);
  return Array.isArray(e) ? r.forEach((i, s) => {
    s < e.length && (o[i] = !0);
  }) : r.forEach((i) => {
    e[i] != null && (o[i] = !0);
  }), o;
}
function _r({
  values: e,
  breakpoints: t,
  base: o
}) {
  const r = o || Yu(e, t), i = Object.keys(r);
  if (i.length === 0)
    return e;
  let s;
  return i.reduce((a, l, c) => (Array.isArray(e) ? (a[l] = e[c] != null ? e[c] : e[s], s = c) : typeof e == "object" ? (a[l] = e[l] != null ? e[l] : e[s], s = l) : a[l] = e, a), {});
}
var Ku = {};
function W(e) {
  if (typeof e != "string")
    throw new Error(Ku.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : Ft(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
var Gu = {};
function Jo(e, t, o = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && o) {
    const r = `vars.${t}`.split(".").reduce((i, s) => i && i[s] ? i[s] : null, e);
    if (r != null)
      return r;
  }
  return t.split(".").reduce((r, i) => r && r[i] != null ? r[i] : null, e);
}
function Io(e, t, o, r = o) {
  let i;
  return typeof e == "function" ? i = e(o) : Array.isArray(e) ? i = e[o] || r : i = Jo(e, o) || r, t && (i = t(i, r, e)), i;
}
function qe(e) {
  const {
    prop: t,
    cssProperty: o = e.prop,
    themeKey: r,
    transform: i
  } = e, s = (a) => {
    if (a[t] == null)
      return null;
    const l = a[t], c = a.theme, u = Jo(c, r) || {};
    return Tt(a, l, (p) => {
      let v = Io(u, i, p);
      return p === v && typeof p == "string" && (v = Io(u, i, `${t}${p === "default" ? "" : W(p)}`, p)), o === !1 ? v : {
        [o]: v
      };
    });
  };
  return s.propTypes = Gu.NODE_ENV !== "production" ? {
    [t]: Gt
  } : {}, s.filterProps = [t], s;
}
function Xu(e) {
  const t = {};
  return (o) => (t[o] === void 0 && (t[o] = e(o)), t[o]);
}
var xn = {};
const Ju = {
  m: "margin",
  p: "padding"
}, Qu = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Ts = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Zu = Xu((e) => {
  if (e.length > 2)
    if (Ts[e])
      e = Ts[e];
    else
      return [e];
  const [t, o] = e.split(""), r = Ju[t], i = Qu[o] || "";
  return Array.isArray(i) ? i.map((s) => r + s) : [r + i];
}), Qo = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Zo = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], ed = [...Qo, ...Zo];
function lo(e, t, o, r) {
  const i = Jo(e, t, !0) ?? o;
  return typeof i == "number" || typeof i == "string" ? (s) => typeof s == "string" ? s : (xn.NODE_ENV !== "production" && typeof s != "number" && console.error(`MUI: Expected ${r} argument to be a number or a string, got ${s}.`), typeof i == "string" ? i.startsWith("var(") && s === 0 ? 0 : i.startsWith("var(") && s === 1 ? i : `calc(${s} * ${i})` : i * s) : Array.isArray(i) ? (s) => {
    if (typeof s == "string")
      return s;
    const a = Math.abs(s);
    xn.NODE_ENV !== "production" && (Number.isInteger(a) ? a > i.length - 1 && console.error([`MUI: The value provided (${a}) overflows.`, `The supported values are: ${JSON.stringify(i)}.`, `${a} > ${i.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`)));
    const l = i[a];
    return s >= 0 ? l : typeof l == "number" ? -l : typeof l == "string" && l.startsWith("var(") ? `calc(-1 * ${l})` : `-${l}`;
  } : typeof i == "function" ? i : (xn.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${i}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function er(e) {
  return lo(e, "spacing", 8, "spacing");
}
function rn(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function td(e, t) {
  return (o) => e.reduce((r, i) => (r[i] = rn(t, o), r), {});
}
function nd(e, t, o, r) {
  if (!t.includes(o))
    return null;
  const i = Zu(o), s = td(i, r), a = e[o];
  return Tt(e, a, s);
}
function Wa(e, t) {
  const o = er(e.theme);
  return Object.keys(e).map((r) => nd(e, t, r, o)).reduce(Yn, {});
}
function Ve(e) {
  return Wa(e, Qo);
}
Ve.propTypes = xn.NODE_ENV !== "production" ? Qo.reduce((e, t) => (e[t] = Gt, e), {}) : {};
Ve.filterProps = Qo;
function Ue(e) {
  return Wa(e, Zo);
}
Ue.propTypes = xn.NODE_ENV !== "production" ? Zo.reduce((e, t) => (e[t] = Gt, e), {}) : {};
Ue.filterProps = Zo;
xn.NODE_ENV !== "production" && ed.reduce((e, t) => (e[t] = Gt, e), {});
var od = {};
function Va(e = 8, t = er({
  spacing: e
})) {
  if (e.mui)
    return e;
  const o = (...r) => (od.NODE_ENV !== "production" && (r.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${r.length}`)), (r.length === 0 ? [1] : r).map((s) => {
    const a = t(s);
    return typeof a == "number" ? `${a}px` : a;
  }).join(" "));
  return o.mui = !0, o;
}
var rd = {};
function tr(...e) {
  const t = e.reduce((r, i) => (i.filterProps.forEach((s) => {
    r[s] = i;
  }), r), {}), o = (r) => Object.keys(r).reduce((i, s) => t[s] ? Yn(i, t[s](r)) : i, {});
  return o.propTypes = rd.NODE_ENV !== "production" ? e.reduce((r, i) => Object.assign(r, i.propTypes), {}) : {}, o.filterProps = e.reduce((r, i) => r.concat(i.filterProps), []), o;
}
var id = {};
function ht(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function gt(e, t) {
  return qe({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const sd = gt("border", ht), ad = gt("borderTop", ht), ld = gt("borderRight", ht), cd = gt("borderBottom", ht), ud = gt("borderLeft", ht), dd = gt("borderColor"), pd = gt("borderTopColor"), fd = gt("borderRightColor"), md = gt("borderBottomColor"), hd = gt("borderLeftColor"), gd = gt("outline", ht), bd = gt("outlineColor"), nr = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = lo(e.theme, "shape.borderRadius", 4, "borderRadius"), o = (r) => ({
      borderRadius: rn(t, r)
    });
    return Tt(e, e.borderRadius, o);
  }
  return null;
};
nr.propTypes = id.NODE_ENV !== "production" ? {
  borderRadius: Gt
} : {};
nr.filterProps = ["borderRadius"];
tr(sd, ad, ld, cd, ud, dd, pd, fd, md, hd, nr, gd, bd);
var Ei = {};
const or = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = lo(e.theme, "spacing", 8, "gap"), o = (r) => ({
      gap: rn(t, r)
    });
    return Tt(e, e.gap, o);
  }
  return null;
};
or.propTypes = Ei.NODE_ENV !== "production" ? {
  gap: Gt
} : {};
or.filterProps = ["gap"];
const rr = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = lo(e.theme, "spacing", 8, "columnGap"), o = (r) => ({
      columnGap: rn(t, r)
    });
    return Tt(e, e.columnGap, o);
  }
  return null;
};
rr.propTypes = Ei.NODE_ENV !== "production" ? {
  columnGap: Gt
} : {};
rr.filterProps = ["columnGap"];
const ir = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = lo(e.theme, "spacing", 8, "rowGap"), o = (r) => ({
      rowGap: rn(t, r)
    });
    return Tt(e, e.rowGap, o);
  }
  return null;
};
ir.propTypes = Ei.NODE_ENV !== "production" ? {
  rowGap: Gt
} : {};
ir.filterProps = ["rowGap"];
const yd = qe({
  prop: "gridColumn"
}), vd = qe({
  prop: "gridRow"
}), xd = qe({
  prop: "gridAutoFlow"
}), Sd = qe({
  prop: "gridAutoColumns"
}), Td = qe({
  prop: "gridAutoRows"
}), Cd = qe({
  prop: "gridTemplateColumns"
}), Ed = qe({
  prop: "gridTemplateRows"
}), wd = qe({
  prop: "gridTemplateAreas"
}), Od = qe({
  prop: "gridArea"
});
tr(or, rr, ir, yd, vd, xd, Sd, Td, Cd, Ed, wd, Od);
function Sn(e, t) {
  return t === "grey" ? t : e;
}
const Pd = qe({
  prop: "color",
  themeKey: "palette",
  transform: Sn
}), Rd = qe({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Sn
}), $d = qe({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Sn
});
tr(Pd, Rd, $d);
function at(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const kd = qe({
  prop: "width",
  transform: at
}), wi = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (o) => {
      const r = e.theme?.breakpoints?.values?.[o] || Xo[o];
      return r ? e.theme?.breakpoints?.unit !== "px" ? {
        maxWidth: `${r}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: r
      } : {
        maxWidth: at(o)
      };
    };
    return Tt(e, e.maxWidth, t);
  }
  return null;
};
wi.filterProps = ["maxWidth"];
const Id = qe({
  prop: "minWidth",
  transform: at
}), _d = qe({
  prop: "height",
  transform: at
}), Nd = qe({
  prop: "maxHeight",
  transform: at
}), Md = qe({
  prop: "minHeight",
  transform: at
});
qe({
  prop: "size",
  cssProperty: "width",
  transform: at
});
qe({
  prop: "size",
  cssProperty: "height",
  transform: at
});
const jd = qe({
  prop: "boxSizing"
});
tr(kd, wi, Id, _d, Nd, Md, jd);
const co = {
  // borders
  border: {
    themeKey: "borders",
    transform: ht
  },
  borderTop: {
    themeKey: "borders",
    transform: ht
  },
  borderRight: {
    themeKey: "borders",
    transform: ht
  },
  borderBottom: {
    themeKey: "borders",
    transform: ht
  },
  borderLeft: {
    themeKey: "borders",
    transform: ht
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: ht
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: nr
  },
  // palette
  color: {
    themeKey: "palette",
    transform: Sn
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Sn
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Sn
  },
  // spacing
  p: {
    style: Ue
  },
  pt: {
    style: Ue
  },
  pr: {
    style: Ue
  },
  pb: {
    style: Ue
  },
  pl: {
    style: Ue
  },
  px: {
    style: Ue
  },
  py: {
    style: Ue
  },
  padding: {
    style: Ue
  },
  paddingTop: {
    style: Ue
  },
  paddingRight: {
    style: Ue
  },
  paddingBottom: {
    style: Ue
  },
  paddingLeft: {
    style: Ue
  },
  paddingX: {
    style: Ue
  },
  paddingY: {
    style: Ue
  },
  paddingInline: {
    style: Ue
  },
  paddingInlineStart: {
    style: Ue
  },
  paddingInlineEnd: {
    style: Ue
  },
  paddingBlock: {
    style: Ue
  },
  paddingBlockStart: {
    style: Ue
  },
  paddingBlockEnd: {
    style: Ue
  },
  m: {
    style: Ve
  },
  mt: {
    style: Ve
  },
  mr: {
    style: Ve
  },
  mb: {
    style: Ve
  },
  ml: {
    style: Ve
  },
  mx: {
    style: Ve
  },
  my: {
    style: Ve
  },
  margin: {
    style: Ve
  },
  marginTop: {
    style: Ve
  },
  marginRight: {
    style: Ve
  },
  marginBottom: {
    style: Ve
  },
  marginLeft: {
    style: Ve
  },
  marginX: {
    style: Ve
  },
  marginY: {
    style: Ve
  },
  marginInline: {
    style: Ve
  },
  marginInlineStart: {
    style: Ve
  },
  marginInlineEnd: {
    style: Ve
  },
  marginBlock: {
    style: Ve
  },
  marginBlockStart: {
    style: Ve
  },
  marginBlockEnd: {
    style: Ve
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: or
  },
  rowGap: {
    style: ir
  },
  columnGap: {
    style: rr
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: at
  },
  maxWidth: {
    style: wi
  },
  minWidth: {
    transform: at
  },
  height: {
    transform: at
  },
  maxHeight: {
    transform: at
  },
  minHeight: {
    transform: at
  },
  boxSizing: {},
  // typography
  font: {
    themeKey: "font"
  },
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
};
function Ad(...e) {
  const t = e.reduce((r, i) => r.concat(Object.keys(i)), []), o = new Set(t);
  return e.every((r) => o.size === Object.keys(r).length);
}
function Dd(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Bd() {
  function e(o, r, i, s) {
    const a = {
      [o]: r,
      theme: i
    }, l = s[o];
    if (!l)
      return {
        [o]: r
      };
    const {
      cssProperty: c = o,
      themeKey: u,
      transform: d,
      style: p
    } = l;
    if (r == null)
      return null;
    if (u === "typography" && r === "inherit")
      return {
        [o]: r
      };
    const v = Jo(i, u) || {};
    return p ? p(a) : Tt(a, r, (g) => {
      let y = Io(v, d, g);
      return g === y && typeof g == "string" && (y = Io(v, d, `${o}${g === "default" ? "" : W(g)}`, g)), c === !1 ? y : {
        [c]: y
      };
    });
  }
  function t(o) {
    const {
      sx: r,
      theme: i = {},
      nested: s
    } = o || {};
    if (!r)
      return null;
    const a = i.unstable_sxConfig ?? co;
    function l(c) {
      let u = c;
      if (typeof c == "function")
        u = c(i);
      else if (typeof c != "object")
        return c;
      if (!u)
        return null;
      const d = za(i.breakpoints), p = Object.keys(d);
      let v = d;
      return Object.keys(u).forEach((S) => {
        const g = Dd(u[S], i);
        if (g != null)
          if (typeof g == "object")
            if (a[S])
              v = Yn(v, e(S, g, i, a));
            else {
              const y = Tt({
                theme: i
              }, g, (h) => ({
                [S]: h
              }));
              Ad(y, g) ? v[S] = t({
                sx: g,
                theme: i,
                nested: !0
              }) : v = Yn(v, y);
            }
          else
            v = Yn(v, e(S, g, i, a));
      }), !s && i.modularCssLayers ? {
        "@layer sx": xs(i, Gr(p, v))
      } : xs(i, Gr(p, v));
    }
    return Array.isArray(r) ? r.map(l) : l(r);
  }
  return t;
}
const sn = Bd();
sn.filterProps = ["sx"];
function Fd(e, t) {
  const o = this;
  if (o.vars) {
    if (!o.colorSchemes?.[e] || typeof o.getColorSchemeSelector != "function")
      return {};
    let r = o.getColorSchemeSelector(e);
    return r === "&" ? t : ((r.includes("data-") || r.includes(".")) && (r = `*:where(${r.replace(/\s*&$/, "")}) &`), {
      [r]: t
    });
  }
  return o.palette.mode === e ? t : {};
}
function sr(e = {}, ...t) {
  const {
    breakpoints: o = {},
    palette: r = {},
    spacing: i,
    shape: s = {},
    ...a
  } = e, l = Bu(o), c = Va(i);
  let u = Ge({
    breakpoints: l,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...r
    },
    spacing: c,
    shape: {
      ...Vu,
      ...s
    }
  }, a);
  return u = Wu(u), u.applyStyles = Fd, u = t.reduce((d, p) => Ge(d, p), u), u.unstable_sxConfig = {
    ...co,
    ...a?.unstable_sxConfig
  }, u.unstable_sx = function(p) {
    return sn({
      sx: p,
      theme: this
    });
  }, u;
}
function Ld(e) {
  return Object.keys(e).length === 0;
}
function zd(e = null) {
  const t = m.useContext(Go);
  return !t || Ld(t) ? e : t;
}
const Wd = sr();
function ar(e = Wd) {
  return zd(e);
}
var Vd = {};
function Nr(e) {
  const t = Vt(e);
  return e !== t && t.styles ? (t.styles.match(/^@layer\s+[^{]*$/) || (t.styles = `@layer global{${t.styles}}`), t) : e;
}
function Ua({
  styles: e,
  themeId: t,
  defaultTheme: o = {}
}) {
  const r = ar(o), i = t && r[t] || r;
  let s = typeof e == "function" ? e(i) : e;
  return i.modularCssLayers && (Array.isArray(s) ? s = s.map((a) => Nr(typeof a == "function" ? a(i) : a)) : s = Nr(s)), /* @__PURE__ */ x.jsx(Ba, {
    styles: s
  });
}
Vd.NODE_ENV !== "production" && (Ua.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  defaultTheme: n.object,
  /**
   * @ignore
   */
  styles: n.oneOfType([n.array, n.func, n.number, n.object, n.string, n.bool]),
  /**
   * @ignore
   */
  themeId: n.string
});
const Ud = (e) => {
  const t = {
    systemProps: {},
    otherProps: {}
  }, o = e?.theme?.unstable_sxConfig ?? co;
  return Object.keys(e).forEach((r) => {
    o[r] ? t.systemProps[r] = e[r] : t.otherProps[r] = e[r];
  }), t;
};
function Oi(e) {
  const {
    sx: t,
    ...o
  } = e, {
    systemProps: r,
    otherProps: i
  } = Ud(o);
  let s;
  return Array.isArray(t) ? s = [r, ...t] : typeof t == "function" ? s = (...a) => {
    const l = t(...a);
    return It(l) ? {
      ...r,
      ...l
    } : r;
  } : s = {
    ...r,
    ...t
  }, {
    ...i,
    sx: s
  };
}
const Cs = (e) => e, Hd = () => {
  let e = Cs;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = Cs;
    }
  };
}, Ha = Hd();
function qa(e) {
  var t, o, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (t = 0; t < i; t++) e[t] && (o = qa(e[t])) && (r && (r += " "), r += o);
  } else for (o in e) e[o] && (r && (r += " "), r += o);
  return r;
}
function ie() {
  for (var e, t, o = 0, r = "", i = arguments.length; o < i; o++) (e = arguments[o]) && (t = qa(e)) && (r && (r += " "), r += t);
  return r;
}
function qd(e = {}) {
  const {
    themeId: t,
    defaultTheme: o,
    defaultClassName: r = "MuiBox-root",
    generateClassName: i
  } = e, s = Fa("div", {
    shouldForwardProp: (l) => l !== "theme" && l !== "sx" && l !== "as"
  })(sn);
  return /* @__PURE__ */ m.forwardRef(function(c, u) {
    const d = ar(o), {
      className: p,
      component: v = "div",
      ...S
    } = Oi(c);
    return /* @__PURE__ */ x.jsx(s, {
      as: v,
      ref: u,
      className: ie(p, i ? i(r) : r),
      theme: t && d[t] || d,
      ...S
    });
  });
}
const Yd = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function ge(e, t, o = "Mui") {
  const r = Yd[t];
  return r ? `${o}-${r}` : `${Ha.generate(e)}-${t}`;
}
function fe(e, t, o = "Mui") {
  const r = {};
  return t.forEach((i) => {
    r[i] = ge(e, i, o);
  }), r;
}
function Ya(e, t = "") {
  return e.displayName || e.name || t;
}
function Es(e, t, o) {
  const r = Ya(t);
  return e.displayName || (r !== "" ? `${o}(${r})` : o);
}
function Kd(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return Ya(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Ut.ForwardRef:
          return Es(e, e.render, "ForwardRef");
        case Ut.Memo:
          return Es(e, e.type, "memo");
        default:
          return;
      }
  }
}
function Ka(e) {
  const {
    variants: t,
    ...o
  } = e, r = {
    variants: t,
    style: Vt(o),
    isProcessed: !0
  };
  return r.style === o || t && t.forEach((i) => {
    typeof i.style != "function" && (i.style = Vt(i.style));
  }), r;
}
var Ga = {};
const Gd = sr();
function Mr(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function nn(e, t) {
  return t && e && typeof e == "object" && e.styles && !e.styles.startsWith("@layer") && (e.styles = `@layer ${t}{${String(e.styles)}}`), e;
}
function Xd(e) {
  return e ? (t, o) => o[e] : null;
}
function Jd(e, t, o) {
  e.theme = ep(e.theme) ? o : e.theme[t] || e.theme;
}
function Oo(e, t, o) {
  const r = typeof t == "function" ? t(e) : t;
  if (Array.isArray(r))
    return r.flatMap((i) => Oo(e, i, o));
  if (Array.isArray(r?.variants)) {
    let i;
    if (r.isProcessed)
      i = o ? nn(r.style, o) : r.style;
    else {
      const {
        variants: s,
        ...a
      } = r;
      i = o ? nn(Vt(a), o) : a;
    }
    return Xa(e, r.variants, [i], o);
  }
  return r?.isProcessed ? o ? nn(Vt(r.style), o) : r.style : o ? nn(Vt(r), o) : r;
}
function Xa(e, t, o = [], r = void 0) {
  let i;
  e: for (let s = 0; s < t.length; s += 1) {
    const a = t[s];
    if (typeof a.props == "function") {
      if (i ??= {
        ...e,
        ...e.ownerState,
        ownerState: e.ownerState
      }, !a.props(i))
        continue;
    } else
      for (const l in a.props)
        if (e[l] !== a.props[l] && e.ownerState?.[l] !== a.props[l])
          continue e;
    typeof a.style == "function" ? (i ??= {
      ...e,
      ...e.ownerState,
      ownerState: e.ownerState
    }, o.push(r ? nn(Vt(a.style(i)), r) : a.style(i))) : o.push(r ? nn(Vt(a.style), r) : a.style);
  }
  return o;
}
function Ja(e = {}) {
  const {
    themeId: t,
    defaultTheme: o = Gd,
    rootShouldForwardProp: r = Mr,
    slotShouldForwardProp: i = Mr
  } = e;
  function s(l) {
    Jd(l, t, o);
  }
  return (l, c = {}) => {
    Nu(l, (O) => O.filter((_) => _ !== sn));
    const {
      name: u,
      slot: d,
      skipVariantsResolver: p,
      skipSx: v,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: S = Xd(Qa(d)),
      ...g
    } = c, y = u && u.startsWith("Mui") || d ? "components" : "custom", h = p !== void 0 ? p : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      d && d !== "Root" && d !== "root" || !1
    ), C = v || !1;
    let w = Mr;
    d === "Root" || d === "root" ? w = r : d ? w = i : tp(l) && (w = void 0);
    const E = Fa(l, {
      shouldForwardProp: w,
      label: Zd(u, d),
      ...g
    }), T = (O) => {
      if (O.__emotion_real === O)
        return O;
      if (typeof O == "function")
        return function(D) {
          return Oo(D, O, D.theme.modularCssLayers ? y : void 0);
        };
      if (It(O)) {
        const _ = Ka(O);
        return function(A) {
          return _.variants ? Oo(A, _, A.theme.modularCssLayers ? y : void 0) : A.theme.modularCssLayers ? nn(_.style, y) : _.style;
        };
      }
      return O;
    }, b = (...O) => {
      const _ = [], D = O.map(T), A = [];
      if (_.push(s), u && S && A.push(function(I) {
        const k = I.theme.components?.[u]?.styleOverrides;
        if (!k)
          return null;
        const j = {};
        for (const V in k)
          j[V] = Oo(I, k[V], I.theme.modularCssLayers ? "theme" : void 0);
        return S(I, j);
      }), u && !h && A.push(function(I) {
        const k = I.theme?.components?.[u]?.variants;
        return k ? Xa(I, k, [], I.theme.modularCssLayers ? "theme" : void 0) : null;
      }), C || A.push(sn), Array.isArray(D[0])) {
        const f = D.shift(), I = new Array(_.length).fill(""), R = new Array(A.length).fill("");
        let k;
        k = [...I, ...f, ...R], k.raw = [...I, ...f.raw, ...R], _.unshift(k);
      }
      const L = [..._, ...D, ...A], z = E(...L);
      return l.muiName && (z.muiName = l.muiName), Ga.NODE_ENV !== "production" && (z.displayName = Qd(u, d, l)), z;
    };
    return E.withConfig && (b.withConfig = E.withConfig), b;
  };
}
function Qd(e, t, o) {
  return e ? `${e}${W(t || "")}` : `Styled(${Kd(o)})`;
}
function Zd(e, t) {
  let o;
  return Ga.NODE_ENV !== "production" && e && (o = `${e}-${Qa(t || "Root")}`), o;
}
function ep(e) {
  for (const t in e)
    return !1;
  return !0;
}
function tp(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function Qa(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
const np = Ja();
function to(e, t, o = !1) {
  const r = {
    ...t
  };
  for (const i in e)
    if (Object.prototype.hasOwnProperty.call(e, i)) {
      const s = i;
      if (s === "components" || s === "slots")
        r[s] = {
          ...e[s],
          ...r[s]
        };
      else if (s === "componentsProps" || s === "slotProps") {
        const a = e[s], l = t[s];
        if (!l)
          r[s] = a || {};
        else if (!a)
          r[s] = l;
        else {
          r[s] = {
            ...l
          };
          for (const c in a)
            if (Object.prototype.hasOwnProperty.call(a, c)) {
              const u = c;
              r[s][u] = to(a[u], l[u], o);
            }
        }
      } else s === "className" && o && t.className ? r.className = ie(e?.className, t?.className) : s === "style" && o && t.style ? r.style = {
        ...e?.style,
        ...t?.style
      } : r[s] === void 0 && (r[s] = e[s]);
    }
  return r;
}
function op(e) {
  const {
    theme: t,
    name: o,
    props: r
  } = e;
  return !t || !t.components || !t.components[o] || !t.components[o].defaultProps ? r : to(t.components[o].defaultProps, r);
}
function rp({
  props: e,
  name: t,
  defaultTheme: o,
  themeId: r
}) {
  let i = ar(o);
  return r && (i = i[r] || i), op({
    theme: i,
    name: t,
    props: e
  });
}
const Lt = typeof window < "u" ? m.useLayoutEffect : m.useEffect;
function ip(e, t = Number.MIN_SAFE_INTEGER, o = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, o));
}
var Ht = {};
function Pi(e, t = 0, o = 1) {
  return Ht.NODE_ENV !== "production" && (e < t || e > o) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${o}].`), ip(e, t, o);
}
function sp(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let o = e.match(t);
  return o && o[0].length === 1 && (o = o.map((r) => r + r)), Ht.NODE_ENV !== "production" && e.length !== e.trim().length && console.error(`MUI: The color: "${e}" is invalid. Make sure the color input doesn't contain leading/trailing space.`), o ? `rgb${o.length === 4 ? "a" : ""}(${o.map((r, i) => i < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function qt(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return qt(sp(e));
  const t = e.indexOf("("), o = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(o))
    throw new Error(Ht.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : Ft(9, e));
  let r = e.substring(t + 1, e.length - 1), i;
  if (o === "color") {
    if (r = r.split(" "), i = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(i))
      throw new Error(Ht.NODE_ENV !== "production" ? `MUI: unsupported \`${i}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : Ft(10, i));
  } else
    r = r.split(",");
  return r = r.map((s) => parseFloat(s)), {
    type: o,
    values: r,
    colorSpace: i
  };
}
const ap = (e) => {
  const t = qt(e);
  return t.values.slice(0, 3).map((o, r) => t.type.includes("hsl") && r !== 0 ? `${o}%` : o).join(" ");
}, zn = (e, t) => {
  try {
    return ap(e);
  } catch {
    return t && Ht.NODE_ENV !== "production" && console.warn(t), e;
  }
};
function lr(e) {
  const {
    type: t,
    colorSpace: o
  } = e;
  let {
    values: r
  } = e;
  return t.includes("rgb") ? r = r.map((i, s) => s < 3 ? parseInt(i, 10) : i) : t.includes("hsl") && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), t.includes("color") ? r = `${o} ${r.join(" ")}` : r = `${r.join(", ")}`, `${t}(${r})`;
}
function Za(e) {
  e = qt(e);
  const {
    values: t
  } = e, o = t[0], r = t[1] / 100, i = t[2] / 100, s = r * Math.min(i, 1 - i), a = (u, d = (u + o / 30) % 12) => i - s * Math.max(Math.min(d - 3, 9 - d, 1), -1);
  let l = "rgb";
  const c = [Math.round(a(0) * 255), Math.round(a(8) * 255), Math.round(a(4) * 255)];
  return e.type === "hsla" && (l += "a", c.push(t[3])), lr({
    type: l,
    values: c
  });
}
function Xr(e) {
  e = qt(e);
  let t = e.type === "hsl" || e.type === "hsla" ? qt(Za(e)).values : e.values;
  return t = t.map((o) => (e.type !== "color" && (o /= 255), o <= 0.03928 ? o / 12.92 : ((o + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function ws(e, t) {
  const o = Xr(e), r = Xr(t);
  return (Math.max(o, r) + 0.05) / (Math.min(o, r) + 0.05);
}
function _o(e, t) {
  return e = qt(e), t = Pi(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, lr(e);
}
function Jt(e, t, o) {
  try {
    return _o(e, t);
  } catch {
    return o && Ht.NODE_ENV !== "production" && console.warn(o), e;
  }
}
function cr(e, t) {
  if (e = qt(e), t = Pi(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let o = 0; o < 3; o += 1)
      e.values[o] *= 1 - t;
  return lr(e);
}
function _e(e, t, o) {
  try {
    return cr(e, t);
  } catch {
    return o && Ht.NODE_ENV !== "production" && console.warn(o), e;
  }
}
function ur(e, t) {
  if (e = qt(e), t = Pi(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let o = 0; o < 3; o += 1)
      e.values[o] += (255 - e.values[o]) * t;
  else if (e.type.includes("color"))
    for (let o = 0; o < 3; o += 1)
      e.values[o] += (1 - e.values[o]) * t;
  return lr(e);
}
function Ne(e, t, o) {
  try {
    return ur(e, t);
  } catch {
    return o && Ht.NODE_ENV !== "production" && console.warn(o), e;
  }
}
function Jr(e, t = 0.15) {
  return Xr(e) > 0.5 ? cr(e, t) : ur(e, t);
}
function bo(e, t, o) {
  try {
    return Jr(e, t);
  } catch {
    return e;
  }
}
var lp = {};
const cp = "exact-prop: ​";
function Ri(e) {
  return lp.NODE_ENV === "production" ? e : {
    ...e,
    [cp]: (t) => {
      const o = Object.keys(t).filter((r) => !e.hasOwnProperty(r));
      return o.length > 0 ? new Error(`The following props are not supported: ${o.map((r) => `\`${r}\``).join(", ")}. Please remove them.`) : null;
    }
  };
}
var up = {};
const dp = /* @__PURE__ */ m.createContext();
up.NODE_ENV !== "production" && (n.node, n.bool);
const $i = () => m.useContext(dp) ?? !1;
var pp = {};
const fp = /* @__PURE__ */ m.createContext(void 0);
pp.NODE_ENV !== "production" && (n.node, n.object);
function mp(e) {
  const {
    theme: t,
    name: o,
    props: r
  } = e;
  if (!t || !t.components || !t.components[o])
    return r;
  const i = t.components[o];
  return i.defaultProps ? to(i.defaultProps, r, t.components.mergeClassNameAndStyle) : !i.styleOverrides && !i.variants ? to(i, r, t.components.mergeClassNameAndStyle) : r;
}
function hp({
  props: e,
  name: t
}) {
  const o = m.useContext(fp);
  return mp({
    props: e,
    name: t,
    theme: {
      components: o
    }
  });
}
let Os = 0;
function gp(e) {
  const [t, o] = m.useState(e), r = e || t;
  return m.useEffect(() => {
    t == null && (Os += 1, o(`mui-${Os}`));
  }, [t]), r;
}
const bp = {
  ...Ur
}, Ps = bp.useId;
function uo(e) {
  if (Ps !== void 0) {
    const t = Ps();
    return e ?? t;
  }
  return gp(e);
}
const Rs = {
  theme: void 0
};
function yp(e) {
  let t, o;
  return function(i) {
    let s = t;
    return (s === void 0 || i.theme !== o) && (Rs.theme = i.theme, s = Ka(e(Rs)), t = s, o = i.theme), s;
  };
}
function vp(e = "") {
  function t(...r) {
    if (!r.length)
      return "";
    const i = r[0];
    return typeof i == "string" && !i.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${i}${t(...r.slice(1))})` : `, ${i}`;
  }
  return (r, ...i) => `var(--${e ? `${e}-` : ""}${r}${t(...i)})`;
}
const $s = (e, t, o, r = []) => {
  let i = e;
  t.forEach((s, a) => {
    a === t.length - 1 ? Array.isArray(i) ? i[Number(s)] = o : i && typeof i == "object" && (i[s] = o) : i && typeof i == "object" && (i[s] || (i[s] = r.includes(s) ? [] : {}), i = i[s]);
  });
}, xp = (e, t, o) => {
  function r(i, s = [], a = []) {
    Object.entries(i).forEach(([l, c]) => {
      (!o || o && !o([...s, l])) && c != null && (typeof c == "object" && Object.keys(c).length > 0 ? r(c, [...s, l], Array.isArray(c) ? [...a, l] : a) : t([...s, l], c, a));
    });
  }
  r(e);
}, Sp = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((r) => e.includes(r)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function jr(e, t) {
  const {
    prefix: o,
    shouldSkipGeneratingVar: r
  } = t || {}, i = {}, s = {}, a = {};
  return xp(
    e,
    (l, c, u) => {
      if ((typeof c == "string" || typeof c == "number") && (!r || !r(l, c))) {
        const d = `--${o ? `${o}-` : ""}${l.join("-")}`, p = Sp(l, c);
        Object.assign(i, {
          [d]: p
        }), $s(s, l, `var(${d})`, u), $s(a, l, `var(${d}, ${p})`, u);
      }
    },
    (l) => l[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: i,
    vars: s,
    varsWithDefaults: a
  };
}
function Tp(e, t = {}) {
  const {
    getSelector: o = C,
    disableCssColorScheme: r,
    colorSchemeSelector: i,
    enableContrastVars: s
  } = t, {
    colorSchemes: a = {},
    components: l,
    defaultColorScheme: c = "light",
    ...u
  } = e, {
    vars: d,
    css: p,
    varsWithDefaults: v
  } = jr(u, t);
  let S = v;
  const g = {}, {
    [c]: y,
    ...h
  } = a;
  if (Object.entries(h || {}).forEach(([T, b]) => {
    const {
      vars: O,
      css: _,
      varsWithDefaults: D
    } = jr(b, t);
    S = Ge(S, D), g[T] = {
      css: _,
      vars: O
    };
  }), y) {
    const {
      css: T,
      vars: b,
      varsWithDefaults: O
    } = jr(y, t);
    S = Ge(S, O), g[c] = {
      css: T,
      vars: b
    };
  }
  function C(T, b) {
    let O = i;
    if (i === "class" && (O = ".%s"), i === "data" && (O = "[data-%s]"), i?.startsWith("data-") && !i.includes("%s") && (O = `[${i}="%s"]`), T) {
      if (O === "media")
        return e.defaultColorScheme === T ? ":root" : {
          [`@media (prefers-color-scheme: ${a[T]?.palette?.mode || T})`]: {
            ":root": b
          }
        };
      if (O)
        return e.defaultColorScheme === T ? `:root, ${O.replace("%s", String(T))}` : O.replace("%s", String(T));
    }
    return ":root";
  }
  return {
    vars: S,
    generateThemeVars: () => {
      let T = {
        ...d
      };
      return Object.entries(g).forEach(([, {
        vars: b
      }]) => {
        T = Ge(T, b);
      }), T;
    },
    generateStyleSheets: () => {
      const T = [], b = e.defaultColorScheme || "light";
      function O(A, L) {
        Object.keys(L).length && T.push(typeof A == "string" ? {
          [A]: {
            ...L
          }
        } : A);
      }
      O(o(void 0, {
        ...p
      }), p);
      const {
        [b]: _,
        ...D
      } = g;
      if (_) {
        const {
          css: A
        } = _, L = a[b]?.palette?.mode, z = !r && L ? {
          colorScheme: L,
          ...A
        } : {
          ...A
        };
        O(o(b, {
          ...z
        }), z);
      }
      return Object.entries(D).forEach(([A, {
        css: L
      }]) => {
        const z = a[A]?.palette?.mode, f = !r && z ? {
          colorScheme: z,
          ...L
        } : {
          ...L
        };
        O(o(A, {
          ...f
        }), f);
      }), s && T.push({
        ":root": {
          // use double underscore to indicate that these are private variables
          "--__l-threshold": "0.7",
          "--__l": "clamp(0, (l / var(--__l-threshold) - 1) * -infinity, 1)",
          "--__a": "clamp(0.87, (l / var(--__l-threshold) - 1) * -infinity, 1)"
          // 0.87 is the default alpha value for black text.
        }
      }), T;
    }
  };
}
var Cp = {};
function Ep(e) {
  return function(o) {
    return e === "media" ? (Cp.NODE_ENV !== "production" && o !== "light" && o !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${o}'.`), `@media (prefers-color-scheme: ${o})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${o}"] &` : e === "class" ? `.${o} &` : e === "data" ? `[data-${o}] &` : `${e.replace("%s", o)} &` : "&";
  };
}
function ye(e, t, o = void 0) {
  const r = {};
  for (const i in e) {
    const s = e[i];
    let a = "", l = !0;
    for (let c = 0; c < s.length; c += 1) {
      const u = s[c];
      u && (a += (l === !0 ? "" : " ") + t(u), l = !1, o && o[u] && (a += " " + o[u]));
    }
    r[i] = a;
  }
  return r;
}
function Ar(e, t) {
  return /* @__PURE__ */ m.isValidElement(e) && t.indexOf(
    // For server components `muiName` is available in element.type._payload.value.muiName
    // relevant info - https://github.com/facebook/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    e.type.muiName ?? e.type?._payload?.value?.muiName
  ) !== -1;
}
var wp = {};
const Op = sr(), Pp = np("div", {
  name: "MuiStack",
  slot: "Root"
});
function Rp(e) {
  return rp({
    props: e,
    name: "MuiStack",
    defaultTheme: Op
  });
}
function $p(e, t) {
  const o = m.Children.toArray(e).filter(Boolean);
  return o.reduce((r, i, s) => (r.push(i), s < o.length - 1 && r.push(/* @__PURE__ */ m.cloneElement(t, {
    key: `separator-${s}`
  })), r), []);
}
const kp = (e) => ({
  row: "Left",
  "row-reverse": "Right",
  column: "Top",
  "column-reverse": "Bottom"
})[e], Ip = ({
  ownerState: e,
  theme: t
}) => {
  let o = {
    display: "flex",
    flexDirection: "column",
    ...Tt({
      theme: t
    }, _r({
      values: e.direction,
      breakpoints: t.breakpoints.values
    }), (r) => ({
      flexDirection: r
    }))
  };
  if (e.spacing) {
    const r = er(t), i = Object.keys(t.breakpoints.values).reduce((c, u) => ((typeof e.spacing == "object" && e.spacing[u] != null || typeof e.direction == "object" && e.direction[u] != null) && (c[u] = !0), c), {}), s = _r({
      values: e.direction,
      base: i
    }), a = _r({
      values: e.spacing,
      base: i
    });
    typeof s == "object" && Object.keys(s).forEach((c, u, d) => {
      if (!s[c]) {
        const v = u > 0 ? s[d[u - 1]] : "column";
        s[c] = v;
      }
    }), o = Ge(o, Tt({
      theme: t
    }, a, (c, u) => e.useFlexGap ? {
      gap: rn(r, c)
    } : {
      // The useFlexGap={false} implement relies on each child to give up control of the margin.
      // We need to reset the margin to avoid double spacing.
      "& > :not(style):not(style)": {
        margin: 0
      },
      "& > :not(style) ~ :not(style)": {
        [`margin${kp(u ? s[u] : e.direction)}`]: rn(r, c)
      }
    }));
  }
  return o = qu(t.breakpoints, o), o;
};
function _p(e = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent: t = Pp,
    useThemeProps: o = Rp,
    componentName: r = "MuiStack"
  } = e, i = () => ye({
    root: ["root"]
  }, (c) => ge(r, c), {}), s = t(Ip), a = /* @__PURE__ */ m.forwardRef(function(c, u) {
    const d = o(c), p = Oi(d), {
      component: v = "div",
      direction: S = "column",
      spacing: g = 0,
      divider: y,
      children: h,
      className: C,
      useFlexGap: w = !1,
      ...E
    } = p, T = {
      direction: S,
      spacing: g,
      useFlexGap: w
    }, b = i();
    return /* @__PURE__ */ x.jsx(s, {
      as: v,
      ownerState: T,
      ref: u,
      className: ie(b.root, C),
      ...E,
      children: y ? $p(h, y) : h
    });
  });
  return wp.NODE_ENV !== "production" && (a.propTypes = {
    children: n.node,
    direction: n.oneOfType([n.oneOf(["column-reverse", "column", "row-reverse", "row"]), n.arrayOf(n.oneOf(["column-reverse", "column", "row-reverse", "row"])), n.object]),
    divider: n.node,
    spacing: n.oneOfType([n.arrayOf(n.oneOfType([n.number, n.string])), n.number, n.object, n.string]),
    sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object])
  }), a;
}
var yo = {};
function el() {
  return {
    // The colors used to style the text.
    text: {
      // The most important text.
      primary: "rgba(0, 0, 0, 0.87)",
      // Secondary text.
      secondary: "rgba(0, 0, 0, 0.6)",
      // Disabled text have even lower visual prominence.
      disabled: "rgba(0, 0, 0, 0.38)"
    },
    // The color used to divide different elements.
    divider: "rgba(0, 0, 0, 0.12)",
    // The background colors used to style the surfaces.
    // Consistency between these values is important.
    background: {
      paper: Jn.white,
      default: Jn.white
    },
    // The colors used to style the action elements.
    action: {
      // The color of an active action like an icon button.
      active: "rgba(0, 0, 0, 0.54)",
      // The color of an hovered action.
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      // The color of a selected action.
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      // The color of a disabled action.
      disabled: "rgba(0, 0, 0, 0.26)",
      // The background color of a disabled action.
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12
    }
  };
}
const tl = el();
function nl() {
  return {
    text: {
      primary: Jn.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)"
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: {
      paper: "#121212",
      default: "#121212"
    },
    action: {
      active: Jn.white,
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24
    }
  };
}
const Qr = nl();
function ks(e, t, o, r) {
  const i = r.light || r, s = r.dark || r * 1.5;
  e[t] || (e.hasOwnProperty(o) ? e[t] = e[o] : t === "light" ? e.light = ur(e.main, i) : t === "dark" && (e.dark = cr(e.main, s)));
}
function Is(e, t, o, r, i) {
  const s = i.light || i, a = i.dark || i * 1.5;
  t[o] || (t.hasOwnProperty(r) ? t[o] = t[r] : o === "light" ? t.light = `color-mix(in ${e}, ${t.main}, #fff ${(s * 100).toFixed(0)}%)` : o === "dark" && (t.dark = `color-mix(in ${e}, ${t.main}, #000 ${(a * 100).toFixed(0)}%)`));
}
function Np(e = "light") {
  return e === "dark" ? {
    main: dn[200],
    light: dn[50],
    dark: dn[400]
  } : {
    main: dn[700],
    light: dn[400],
    dark: dn[800]
  };
}
function Mp(e = "light") {
  return e === "dark" ? {
    main: un[200],
    light: un[50],
    dark: un[400]
  } : {
    main: un[500],
    light: un[300],
    dark: un[700]
  };
}
function jp(e = "light") {
  return e === "dark" ? {
    main: cn[500],
    light: cn[300],
    dark: cn[700]
  } : {
    main: cn[700],
    light: cn[400],
    dark: cn[800]
  };
}
function Ap(e = "light") {
  return e === "dark" ? {
    main: pn[400],
    light: pn[300],
    dark: pn[700]
  } : {
    main: pn[700],
    light: pn[500],
    dark: pn[900]
  };
}
function Dp(e = "light") {
  return e === "dark" ? {
    main: fn[400],
    light: fn[300],
    dark: fn[700]
  } : {
    main: fn[800],
    light: fn[500],
    dark: fn[900]
  };
}
function Bp(e = "light") {
  return e === "dark" ? {
    main: _n[400],
    light: _n[300],
    dark: _n[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: _n[500],
    dark: _n[900]
  };
}
function Fp(e) {
  return `oklch(from ${e} var(--__l) 0 h / var(--__a))`;
}
function ki(e) {
  const {
    mode: t = "light",
    contrastThreshold: o = 3,
    tonalOffset: r = 0.2,
    colorSpace: i,
    ...s
  } = e, a = e.primary || Np(t), l = e.secondary || Mp(t), c = e.error || jp(t), u = e.info || Ap(t), d = e.success || Dp(t), p = e.warning || Bp(t);
  function v(h) {
    if (i)
      return Fp(h);
    const C = ws(h, Qr.text.primary) >= o ? Qr.text.primary : tl.text.primary;
    if (yo.NODE_ENV !== "production") {
      const w = ws(h, C);
      w < 3 && console.error([`MUI: The contrast ratio of ${w}:1 for ${C} on ${h}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return C;
  }
  const S = ({
    color: h,
    name: C,
    mainShade: w = 500,
    lightShade: E = 300,
    darkShade: T = 700
  }) => {
    if (h = {
      ...h
    }, !h.main && h[w] && (h.main = h[w]), !h.hasOwnProperty("main"))
      throw new Error(yo.NODE_ENV !== "production" ? `MUI: The color${C ? ` (${C})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${w}\` property.` : Ft(11, C ? ` (${C})` : "", w));
    if (typeof h.main != "string")
      throw new Error(yo.NODE_ENV !== "production" ? `MUI: The color${C ? ` (${C})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(h.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : Ft(12, C ? ` (${C})` : "", JSON.stringify(h.main)));
    return i ? (Is(i, h, "light", E, r), Is(i, h, "dark", T, r)) : (ks(h, "light", E, r), ks(h, "dark", T, r)), h.contrastText || (h.contrastText = v(h.main)), h;
  };
  let g;
  return t === "light" ? g = el() : t === "dark" && (g = nl()), yo.NODE_ENV !== "production" && (g || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), Ge({
    // A collection of common colors.
    common: {
      ...Jn
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: S({
      color: a,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: S({
      color: l,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: S({
      color: c,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: S({
      color: p,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: S({
      color: u,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: S({
      color: d,
      name: "success"
    }),
    // The grey colors.
    grey: Cc,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: o,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: v,
    // Generate a rich color object.
    augmentColor: S,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: r,
    // The light and dark mode object.
    ...g
  }, s);
}
function Lp(e) {
  const t = {};
  return Object.entries(e).forEach((r) => {
    const [i, s] = r;
    typeof s == "object" && (t[i] = `${s.fontStyle ? `${s.fontStyle} ` : ""}${s.fontVariant ? `${s.fontVariant} ` : ""}${s.fontWeight ? `${s.fontWeight} ` : ""}${s.fontStretch ? `${s.fontStretch} ` : ""}${s.fontSize || ""}${s.lineHeight ? `/${s.lineHeight} ` : ""}${s.fontFamily || ""}`);
  }), t;
}
function zp(e, t) {
  return {
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    },
    ...t
  };
}
var Wp = {};
function Vp(e) {
  return Math.round(e * 1e5) / 1e5;
}
const _s = {
  textTransform: "uppercase"
}, Ns = '"Roboto", "Helvetica", "Arial", sans-serif';
function Up(e, t) {
  const {
    fontFamily: o = Ns,
    // The default font size of the Material Specification.
    fontSize: r = 14,
    // px
    fontWeightLight: i = 300,
    fontWeightRegular: s = 400,
    fontWeightMedium: a = 500,
    fontWeightBold: l = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: c = 16,
    // Apply the CSS properties to all the variants.
    allVariants: u,
    pxToRem: d,
    ...p
  } = typeof t == "function" ? t(e) : t;
  Wp.NODE_ENV !== "production" && (typeof r != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof c != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const v = r / 14, S = d || ((h) => `${h / c * v}rem`), g = (h, C, w, E, T) => ({
    fontFamily: o,
    fontWeight: h,
    fontSize: S(C),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: w,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...o === Ns ? {
      letterSpacing: `${Vp(E / C)}em`
    } : {},
    ...T,
    ...u
  }), y = {
    h1: g(i, 96, 1.167, -1.5),
    h2: g(i, 60, 1.2, -0.5),
    h3: g(s, 48, 1.167, 0),
    h4: g(s, 34, 1.235, 0.25),
    h5: g(s, 24, 1.334, 0),
    h6: g(a, 20, 1.6, 0.15),
    subtitle1: g(s, 16, 1.75, 0.15),
    subtitle2: g(a, 14, 1.57, 0.1),
    body1: g(s, 16, 1.5, 0.15),
    body2: g(s, 14, 1.43, 0.15),
    button: g(a, 14, 1.75, 0.4, _s),
    caption: g(s, 12, 1.66, 0.4),
    overline: g(s, 12, 2.66, 1, _s),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return Ge({
    htmlFontSize: c,
    pxToRem: S,
    fontFamily: o,
    fontSize: r,
    fontWeightLight: i,
    fontWeightRegular: s,
    fontWeightMedium: a,
    fontWeightBold: l,
    ...y
  }, p, {
    clone: !1
    // No need to clone deep
  });
}
const Hp = 0.2, qp = 0.14, Yp = 0.12;
function Le(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Hp})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${qp})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Yp})`].join(",");
}
const Kp = ["none", Le(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), Le(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), Le(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), Le(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), Le(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), Le(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), Le(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), Le(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), Le(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), Le(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), Le(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), Le(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), Le(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), Le(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), Le(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), Le(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), Le(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), Le(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), Le(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), Le(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), Le(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), Le(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), Le(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), Le(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)];
var Gp = {};
const Xp = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Jp = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function Ms(e) {
  return `${Math.round(e)}ms`;
}
function Qp(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function Zp(e) {
  const t = {
    ...Xp,
    ...e.easing
  }, o = {
    ...Jp,
    ...e.duration
  };
  return {
    getAutoHeightDuration: Qp,
    create: (i = ["all"], s = {}) => {
      const {
        duration: a = o.standard,
        easing: l = t.easeInOut,
        delay: c = 0,
        ...u
      } = s;
      if (Gp.NODE_ENV !== "production") {
        const d = (v) => typeof v == "string", p = (v) => !Number.isNaN(parseFloat(v));
        !d(i) && !Array.isArray(i) && console.error('MUI: Argument "props" must be a string or Array.'), !p(a) && !d(a) && console.error(`MUI: Argument "duration" must be a number or a string but found ${a}.`), d(l) || console.error('MUI: Argument "easing" must be a string.'), !p(c) && !d(c) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof s != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(u).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(u).join(",")}].`);
      }
      return (Array.isArray(i) ? i : [i]).map((d) => `${d} ${typeof a == "string" ? a : Ms(a)} ${l} ${typeof c == "string" ? c : Ms(c)}`).join(",");
    },
    ...e,
    easing: t,
    duration: o
  };
}
const ef = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function tf(e) {
  return It(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function ol(e = {}) {
  const t = {
    ...e
  };
  function o(r) {
    const i = Object.entries(r);
    for (let s = 0; s < i.length; s++) {
      const [a, l] = i[s];
      !tf(l) || a.startsWith("unstable_") ? delete r[a] : It(l) && (r[a] = {
        ...l
      }, o(r[a]));
    }
  }
  return o(t), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
var Dr = {};
function js(e) {
  return typeof e == "number" ? `${(e * 100).toFixed(0)}%` : `calc((${e}) * 100%)`;
}
const nf = (e) => {
  if (!Number.isNaN(+e))
    return +e;
  const t = e.match(/\d*\.?\d+/g);
  if (!t)
    return 0;
  let o = 0;
  for (let r = 0; r < t.length; r += 1)
    o += +t[r];
  return o;
};
function of(e) {
  Object.assign(e, {
    alpha(t, o) {
      const r = this || e;
      return r.colorSpace ? `oklch(from ${t} l c h / ${typeof o == "string" ? `calc(${o})` : o})` : r.vars ? `rgba(${t.replace(/var\(--([^,\s)]+)(?:,[^)]+)?\)+/g, "var(--$1Channel)")} / ${typeof o == "string" ? `calc(${o})` : o})` : _o(t, nf(o));
    },
    lighten(t, o) {
      const r = this || e;
      return r.colorSpace ? `color-mix(in ${r.colorSpace}, ${t}, #fff ${js(o)})` : ur(t, o);
    },
    darken(t, o) {
      const r = this || e;
      return r.colorSpace ? `color-mix(in ${r.colorSpace}, ${t}, #000 ${js(o)})` : cr(t, o);
    }
  });
}
function Zr(e = {}, ...t) {
  const {
    breakpoints: o,
    mixins: r = {},
    spacing: i,
    palette: s = {},
    transitions: a = {},
    typography: l = {},
    shape: c,
    colorSpace: u,
    ...d
  } = e;
  if (e.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateThemeVars` is the closest identifier for checking that the `options` is a result of `createTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  e.generateThemeVars === void 0)
    throw new Error(Dr.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name or follow the [docs](https://mui.com/material-ui/customization/css-theme-variables/usage/) to enable the feature." : Ft(20));
  const p = ki({
    ...s,
    colorSpace: u
  }), v = sr(e);
  let S = Ge(v, {
    mixins: zp(v.breakpoints, r),
    palette: p,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Kp.slice(),
    typography: Up(p, l),
    transitions: Zp(a),
    zIndex: {
      ...ef
    }
  });
  if (S = Ge(S, d), S = t.reduce((g, y) => Ge(g, y), S), Dr.NODE_ENV !== "production") {
    const g = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], y = (h, C) => {
      let w;
      for (w in h) {
        const E = h[w];
        if (g.includes(w) && Object.keys(E).length > 0) {
          if (Dr.NODE_ENV !== "production") {
            const T = ge("", w);
            console.error([`MUI: The \`${C}\` component increases the CSS specificity of the \`${w}\` internal state.`, "You can not override it like this: ", JSON.stringify(h, null, 2), "", `Instead, you need to use the '&.${T}' syntax:`, JSON.stringify({
              root: {
                [`&.${T}`]: E
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          h[w] = {};
        }
      }
    };
    Object.keys(S.components).forEach((h) => {
      const C = S.components[h].styleOverrides;
      C && h.startsWith("Mui") && y(C, h);
    });
  }
  return S.unstable_sxConfig = {
    ...co,
    ...d?.unstable_sxConfig
  }, S.unstable_sx = function(y) {
    return sn({
      sx: y,
      theme: this
    });
  }, S.toRuntimeSource = ol, of(S), S;
}
function ei(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const rf = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const o = ei(t);
  return `linear-gradient(rgba(255 255 255 / ${o}), rgba(255 255 255 / ${o}))`;
});
function rl(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function il(e) {
  return e === "dark" ? rf : [];
}
function sf(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: o,
    overlays: r,
    colorSpace: i,
    ...s
  } = e, a = ki({
    ...t,
    colorSpace: i
  });
  return {
    palette: a,
    opacity: {
      ...rl(a.mode),
      ...o
    },
    overlays: r || il(a.mode),
    ...s
  };
}
function af(e) {
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!e[1]?.match(/(mode|contrastThreshold|tonalOffset)/);
}
const lf = (e) => [...[...Array(25)].map((t, o) => `--${e ? `${e}-` : ""}overlays-${o}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], cf = (e) => (t, o) => {
  const r = e.rootSelector || ":root", i = e.colorSchemeSelector;
  let s = i;
  if (i === "class" && (s = ".%s"), i === "data" && (s = "[data-%s]"), i?.startsWith("data-") && !i.includes("%s") && (s = `[${i}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const a = {};
      return lf(e.cssVarPrefix).forEach((l) => {
        a[l] = o[l], delete o[l];
      }), s === "media" ? {
        [r]: o,
        "@media (prefers-color-scheme: dark)": {
          [r]: a
        }
      } : s ? {
        [s.replace("%s", t)]: a,
        [`${r}, ${s.replace("%s", t)}`]: o
      } : {
        [r]: {
          ...o,
          ...a
        }
      };
    }
    if (s && s !== "media")
      return `${r}, ${s.replace("%s", String(t))}`;
  } else if (t) {
    if (s === "media")
      return {
        [`@media (prefers-color-scheme: ${String(t)})`]: {
          [r]: o
        }
      };
    if (s)
      return s.replace("%s", String(t));
  }
  return r;
};
var uf = {};
function df(e, t) {
  t.forEach((o) => {
    e[o] || (e[o] = {});
  });
}
function M(e, t, o) {
  !e[t] && o && (e[t] = o);
}
function Wn(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : Za(e);
}
function At(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = zn(Wn(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function pf(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const Ot = (e) => {
  try {
    return e();
  } catch {
  }
}, ff = (e = "mui") => vp(e);
function Br(e, t, o, r, i) {
  if (!o)
    return;
  o = o === !0 ? {} : o;
  const s = i === "dark" ? "dark" : "light";
  if (!r) {
    t[i] = sf({
      ...o,
      palette: {
        mode: s,
        ...o?.palette
      },
      colorSpace: e
    });
    return;
  }
  const {
    palette: a,
    ...l
  } = Zr({
    ...r,
    palette: {
      mode: s,
      ...o?.palette
    },
    colorSpace: e
  });
  return t[i] = {
    ...o,
    palette: a,
    opacity: {
      ...rl(s),
      ...o?.opacity
    },
    overlays: o?.overlays || il(s)
  }, l;
}
function mf(e = {}, ...t) {
  const {
    colorSchemes: o = {
      light: !0
    },
    defaultColorScheme: r,
    disableCssColorScheme: i = !1,
    cssVarPrefix: s = "mui",
    nativeColor: a = !1,
    shouldSkipGeneratingVar: l = af,
    colorSchemeSelector: c = o.light && o.dark ? "media" : void 0,
    rootSelector: u = ":root",
    ...d
  } = e, p = Object.keys(o)[0], v = r || (o.light && p !== "light" ? "light" : p), S = ff(s), {
    [v]: g,
    light: y,
    dark: h,
    ...C
  } = o, w = {
    ...C
  };
  let E = g;
  if ((v === "dark" && !("dark" in o) || v === "light" && !("light" in o)) && (E = !0), !E)
    throw new Error(uf.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${v}\` option is either missing or invalid.` : Ft(21, v));
  let T;
  a && (T = "oklch");
  const b = Br(T, w, E, d, v);
  y && !w.light && Br(T, w, y, void 0, "light"), h && !w.dark && Br(T, w, h, void 0, "dark");
  let O = {
    defaultColorScheme: v,
    ...b,
    cssVarPrefix: s,
    colorSchemeSelector: c,
    rootSelector: u,
    getCssVar: S,
    colorSchemes: w,
    font: {
      ...Lp(b.typography),
      ...b.font
    },
    spacing: pf(d.spacing)
  };
  Object.keys(O.colorSchemes).forEach((z) => {
    const f = O.colorSchemes[z].palette, I = (k) => {
      const j = k.split("-"), V = j[1], ee = j[2];
      return S(k, f[V][ee]);
    };
    f.mode === "light" && (M(f.common, "background", "#fff"), M(f.common, "onBackground", "#000")), f.mode === "dark" && (M(f.common, "background", "#000"), M(f.common, "onBackground", "#fff"));
    function R(k, j, V) {
      if (T) {
        let ee;
        return k === Jt && (ee = `transparent ${((1 - V) * 100).toFixed(0)}%`), k === _e && (ee = `#000 ${(V * 100).toFixed(0)}%`), k === Ne && (ee = `#fff ${(V * 100).toFixed(0)}%`), `color-mix(in ${T}, ${j}, ${ee})`;
      }
      return k(j, V);
    }
    if (df(f, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), f.mode === "light") {
      M(f.Alert, "errorColor", R(_e, f.error.light, 0.6)), M(f.Alert, "infoColor", R(_e, f.info.light, 0.6)), M(f.Alert, "successColor", R(_e, f.success.light, 0.6)), M(f.Alert, "warningColor", R(_e, f.warning.light, 0.6)), M(f.Alert, "errorFilledBg", I("palette-error-main")), M(f.Alert, "infoFilledBg", I("palette-info-main")), M(f.Alert, "successFilledBg", I("palette-success-main")), M(f.Alert, "warningFilledBg", I("palette-warning-main")), M(f.Alert, "errorFilledColor", Ot(() => f.getContrastText(f.error.main))), M(f.Alert, "infoFilledColor", Ot(() => f.getContrastText(f.info.main))), M(f.Alert, "successFilledColor", Ot(() => f.getContrastText(f.success.main))), M(f.Alert, "warningFilledColor", Ot(() => f.getContrastText(f.warning.main))), M(f.Alert, "errorStandardBg", R(Ne, f.error.light, 0.9)), M(f.Alert, "infoStandardBg", R(Ne, f.info.light, 0.9)), M(f.Alert, "successStandardBg", R(Ne, f.success.light, 0.9)), M(f.Alert, "warningStandardBg", R(Ne, f.warning.light, 0.9)), M(f.Alert, "errorIconColor", I("palette-error-main")), M(f.Alert, "infoIconColor", I("palette-info-main")), M(f.Alert, "successIconColor", I("palette-success-main")), M(f.Alert, "warningIconColor", I("palette-warning-main")), M(f.AppBar, "defaultBg", I("palette-grey-100")), M(f.Avatar, "defaultBg", I("palette-grey-400")), M(f.Button, "inheritContainedBg", I("palette-grey-300")), M(f.Button, "inheritContainedHoverBg", I("palette-grey-A100")), M(f.Chip, "defaultBorder", I("palette-grey-400")), M(f.Chip, "defaultAvatarColor", I("palette-grey-700")), M(f.Chip, "defaultIconColor", I("palette-grey-700")), M(f.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), M(f.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), M(f.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), M(f.LinearProgress, "primaryBg", R(Ne, f.primary.main, 0.62)), M(f.LinearProgress, "secondaryBg", R(Ne, f.secondary.main, 0.62)), M(f.LinearProgress, "errorBg", R(Ne, f.error.main, 0.62)), M(f.LinearProgress, "infoBg", R(Ne, f.info.main, 0.62)), M(f.LinearProgress, "successBg", R(Ne, f.success.main, 0.62)), M(f.LinearProgress, "warningBg", R(Ne, f.warning.main, 0.62)), M(f.Skeleton, "bg", T ? R(Jt, f.text.primary, 0.11) : `rgba(${I("palette-text-primaryChannel")} / 0.11)`), M(f.Slider, "primaryTrack", R(Ne, f.primary.main, 0.62)), M(f.Slider, "secondaryTrack", R(Ne, f.secondary.main, 0.62)), M(f.Slider, "errorTrack", R(Ne, f.error.main, 0.62)), M(f.Slider, "infoTrack", R(Ne, f.info.main, 0.62)), M(f.Slider, "successTrack", R(Ne, f.success.main, 0.62)), M(f.Slider, "warningTrack", R(Ne, f.warning.main, 0.62));
      const k = T ? R(_e, f.background.default, 0.6825) : bo(f.background.default, 0.8);
      M(f.SnackbarContent, "bg", k), M(f.SnackbarContent, "color", Ot(() => T ? Qr.text.primary : f.getContrastText(k))), M(f.SpeedDialAction, "fabHoverBg", bo(f.background.paper, 0.15)), M(f.StepConnector, "border", I("palette-grey-400")), M(f.StepContent, "border", I("palette-grey-400")), M(f.Switch, "defaultColor", I("palette-common-white")), M(f.Switch, "defaultDisabledColor", I("palette-grey-100")), M(f.Switch, "primaryDisabledColor", R(Ne, f.primary.main, 0.62)), M(f.Switch, "secondaryDisabledColor", R(Ne, f.secondary.main, 0.62)), M(f.Switch, "errorDisabledColor", R(Ne, f.error.main, 0.62)), M(f.Switch, "infoDisabledColor", R(Ne, f.info.main, 0.62)), M(f.Switch, "successDisabledColor", R(Ne, f.success.main, 0.62)), M(f.Switch, "warningDisabledColor", R(Ne, f.warning.main, 0.62)), M(f.TableCell, "border", R(Ne, R(Jt, f.divider, 1), 0.88)), M(f.Tooltip, "bg", R(Jt, f.grey[700], 0.92));
    }
    if (f.mode === "dark") {
      M(f.Alert, "errorColor", R(Ne, f.error.light, 0.6)), M(f.Alert, "infoColor", R(Ne, f.info.light, 0.6)), M(f.Alert, "successColor", R(Ne, f.success.light, 0.6)), M(f.Alert, "warningColor", R(Ne, f.warning.light, 0.6)), M(f.Alert, "errorFilledBg", I("palette-error-dark")), M(f.Alert, "infoFilledBg", I("palette-info-dark")), M(f.Alert, "successFilledBg", I("palette-success-dark")), M(f.Alert, "warningFilledBg", I("palette-warning-dark")), M(f.Alert, "errorFilledColor", Ot(() => f.getContrastText(f.error.dark))), M(f.Alert, "infoFilledColor", Ot(() => f.getContrastText(f.info.dark))), M(f.Alert, "successFilledColor", Ot(() => f.getContrastText(f.success.dark))), M(f.Alert, "warningFilledColor", Ot(() => f.getContrastText(f.warning.dark))), M(f.Alert, "errorStandardBg", R(_e, f.error.light, 0.9)), M(f.Alert, "infoStandardBg", R(_e, f.info.light, 0.9)), M(f.Alert, "successStandardBg", R(_e, f.success.light, 0.9)), M(f.Alert, "warningStandardBg", R(_e, f.warning.light, 0.9)), M(f.Alert, "errorIconColor", I("palette-error-main")), M(f.Alert, "infoIconColor", I("palette-info-main")), M(f.Alert, "successIconColor", I("palette-success-main")), M(f.Alert, "warningIconColor", I("palette-warning-main")), M(f.AppBar, "defaultBg", I("palette-grey-900")), M(f.AppBar, "darkBg", I("palette-background-paper")), M(f.AppBar, "darkColor", I("palette-text-primary")), M(f.Avatar, "defaultBg", I("palette-grey-600")), M(f.Button, "inheritContainedBg", I("palette-grey-800")), M(f.Button, "inheritContainedHoverBg", I("palette-grey-700")), M(f.Chip, "defaultBorder", I("palette-grey-700")), M(f.Chip, "defaultAvatarColor", I("palette-grey-300")), M(f.Chip, "defaultIconColor", I("palette-grey-300")), M(f.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), M(f.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), M(f.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), M(f.LinearProgress, "primaryBg", R(_e, f.primary.main, 0.5)), M(f.LinearProgress, "secondaryBg", R(_e, f.secondary.main, 0.5)), M(f.LinearProgress, "errorBg", R(_e, f.error.main, 0.5)), M(f.LinearProgress, "infoBg", R(_e, f.info.main, 0.5)), M(f.LinearProgress, "successBg", R(_e, f.success.main, 0.5)), M(f.LinearProgress, "warningBg", R(_e, f.warning.main, 0.5)), M(f.Skeleton, "bg", T ? R(Jt, f.text.primary, 0.13) : `rgba(${I("palette-text-primaryChannel")} / 0.13)`), M(f.Slider, "primaryTrack", R(_e, f.primary.main, 0.5)), M(f.Slider, "secondaryTrack", R(_e, f.secondary.main, 0.5)), M(f.Slider, "errorTrack", R(_e, f.error.main, 0.5)), M(f.Slider, "infoTrack", R(_e, f.info.main, 0.5)), M(f.Slider, "successTrack", R(_e, f.success.main, 0.5)), M(f.Slider, "warningTrack", R(_e, f.warning.main, 0.5));
      const k = T ? R(Ne, f.background.default, 0.985) : bo(f.background.default, 0.98);
      M(f.SnackbarContent, "bg", k), M(f.SnackbarContent, "color", Ot(() => T ? tl.text.primary : f.getContrastText(k))), M(f.SpeedDialAction, "fabHoverBg", bo(f.background.paper, 0.15)), M(f.StepConnector, "border", I("palette-grey-600")), M(f.StepContent, "border", I("palette-grey-600")), M(f.Switch, "defaultColor", I("palette-grey-300")), M(f.Switch, "defaultDisabledColor", I("palette-grey-600")), M(f.Switch, "primaryDisabledColor", R(_e, f.primary.main, 0.55)), M(f.Switch, "secondaryDisabledColor", R(_e, f.secondary.main, 0.55)), M(f.Switch, "errorDisabledColor", R(_e, f.error.main, 0.55)), M(f.Switch, "infoDisabledColor", R(_e, f.info.main, 0.55)), M(f.Switch, "successDisabledColor", R(_e, f.success.main, 0.55)), M(f.Switch, "warningDisabledColor", R(_e, f.warning.main, 0.55)), M(f.TableCell, "border", R(_e, R(Jt, f.divider, 1), 0.68)), M(f.Tooltip, "bg", R(Jt, f.grey[700], 0.92));
    }
    At(f.background, "default"), At(f.background, "paper"), At(f.common, "background"), At(f.common, "onBackground"), At(f, "divider"), Object.keys(f).forEach((k) => {
      const j = f[k];
      k !== "tonalOffset" && j && typeof j == "object" && (j.main && M(f[k], "mainChannel", zn(Wn(j.main))), j.light && M(f[k], "lightChannel", zn(Wn(j.light))), j.dark && M(f[k], "darkChannel", zn(Wn(j.dark))), j.contrastText && M(f[k], "contrastTextChannel", zn(Wn(j.contrastText))), k === "text" && (At(f[k], "primary"), At(f[k], "secondary")), k === "action" && (j.active && At(f[k], "active"), j.selected && At(f[k], "selected")));
    });
  }), O = t.reduce((z, f) => Ge(z, f), O);
  const _ = {
    prefix: s,
    disableCssColorScheme: i,
    shouldSkipGeneratingVar: l,
    getSelector: cf(O),
    enableContrastVars: a
  }, {
    vars: D,
    generateThemeVars: A,
    generateStyleSheets: L
  } = Tp(O, _);
  return O.vars = D, Object.entries(O.colorSchemes[O.defaultColorScheme]).forEach(([z, f]) => {
    O[z] = f;
  }), O.generateThemeVars = A, O.generateStyleSheets = L, O.generateSpacing = function() {
    return Va(d.spacing, er(this));
  }, O.getColorSchemeSelector = Ep(c), O.spacing = O.generateSpacing(), O.shouldSkipGeneratingVar = l, O.unstable_sxConfig = {
    ...co,
    ...d?.unstable_sxConfig
  }, O.unstable_sx = function(f) {
    return sn({
      sx: f,
      theme: this
    });
  }, O.toRuntimeSource = ol, O;
}
function As(e, t, o) {
  e.colorSchemes && o && (e.colorSchemes[t] = {
    ...o !== !0 && o,
    palette: ki({
      ...o === !0 ? {} : o.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function sl(e = {}, ...t) {
  const {
    palette: o,
    cssVariables: r = !1,
    colorSchemes: i = o ? void 0 : {
      light: !0
    },
    defaultColorScheme: s = o?.mode,
    ...a
  } = e, l = s || "light", c = i?.[l], u = {
    ...i,
    ...o ? {
      [l]: {
        ...typeof c != "boolean" && c,
        palette: o
      }
    } : void 0
  };
  if (r === !1) {
    if (!("colorSchemes" in e))
      return Zr(e, ...t);
    let d = o;
    "palette" in e || u[l] && (u[l] !== !0 ? d = u[l].palette : l === "dark" && (d = {
      mode: "dark"
    }));
    const p = Zr({
      ...e,
      palette: d
    }, ...t);
    return p.defaultColorScheme = l, p.colorSchemes = u, p.palette.mode === "light" && (p.colorSchemes.light = {
      ...u.light !== !0 && u.light,
      palette: p.palette
    }, As(p, "dark", u.dark)), p.palette.mode === "dark" && (p.colorSchemes.dark = {
      ...u.dark !== !0 && u.dark,
      palette: p.palette
    }, As(p, "light", u.light)), p;
  }
  return !o && !("light" in u) && l === "light" && (u.light = !0), mf({
    ...a,
    colorSchemes: u,
    defaultColorScheme: l,
    ...typeof r != "boolean" && r
  }, ...t);
}
const Ii = sl();
var hf = {};
function On() {
  const e = ar(Ii);
  return hf.NODE_ENV !== "production" && m.useDebugValue(e), e[Ho] || e;
}
function al(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const bt = (e) => al(e) && e !== "classes", G = Ja({
  themeId: Ho,
  defaultTheme: Ii,
  rootShouldForwardProp: bt
});
function Ds(...e) {
  return e.reduce((t, o) => o == null ? t : function(...i) {
    t.apply(this, i), o.apply(this, i);
  }, () => {
  });
}
var gf = {};
function ll(e) {
  return /* @__PURE__ */ x.jsx(Ua, {
    ...e,
    defaultTheme: Ii,
    themeId: Ho
  });
}
gf.NODE_ENV !== "production" && (ll.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The styles you want to apply globally.
   */
  styles: n.oneOfType([n.array, n.func, n.number, n.object, n.string, n.bool])
});
function bf(e) {
  return function(o) {
    return (
      // Pigment CSS `globalCss` support callback with theme inside an object but `GlobalStyles` support theme as a callback value.
      /* @__PURE__ */ x.jsx(ll, {
        styles: typeof e == "function" ? (r) => e({
          theme: r,
          ...o
        }) : e
      })
    );
  };
}
function yf() {
  return Oi;
}
const xe = yp;
var vf = {};
vf.NODE_ENV !== "production" && (n.node, n.object.isRequired);
function ve(e) {
  return hp(e);
}
function xf(e) {
  return ge("MuiSvgIcon", e);
}
fe("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
var Sf = {};
const Tf = (e) => {
  const {
    color: t,
    fontSize: o,
    classes: r
  } = e, i = {
    root: ["root", t !== "inherit" && `color${W(t)}`, `fontSize${W(o)}`]
  };
  return ye(i, xf, r);
}, Cf = G("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.color !== "inherit" && t[`color${W(o.color)}`], t[`fontSize${W(o.fontSize)}`]];
  }
})(xe(({
  theme: e
}) => ({
  userSelect: "none",
  width: "1em",
  height: "1em",
  display: "inline-block",
  flexShrink: 0,
  transition: e.transitions?.create?.("fill", {
    duration: (e.vars ?? e).transitions?.duration?.shorter
  }),
  variants: [
    {
      props: (t) => !t.hasSvgAsChild,
      style: {
        // the <svg> will define the property that has `currentColor`
        // for example heroicons uses fill="none" and stroke="currentColor"
        fill: "currentColor"
      }
    },
    {
      props: {
        fontSize: "inherit"
      },
      style: {
        fontSize: "inherit"
      }
    },
    {
      props: {
        fontSize: "small"
      },
      style: {
        fontSize: e.typography?.pxToRem?.(20) || "1.25rem"
      }
    },
    {
      props: {
        fontSize: "medium"
      },
      style: {
        fontSize: e.typography?.pxToRem?.(24) || "1.5rem"
      }
    },
    {
      props: {
        fontSize: "large"
      },
      style: {
        fontSize: e.typography?.pxToRem?.(35) || "2.1875rem"
      }
    },
    // TODO v5 deprecate color prop, v6 remove for sx
    ...Object.entries((e.vars ?? e).palette).filter(([, t]) => t && t.main).map(([t]) => ({
      props: {
        color: t
      },
      style: {
        color: (e.vars ?? e).palette?.[t]?.main
      }
    })),
    {
      props: {
        color: "action"
      },
      style: {
        color: (e.vars ?? e).palette?.action?.active
      }
    },
    {
      props: {
        color: "disabled"
      },
      style: {
        color: (e.vars ?? e).palette?.action?.disabled
      }
    },
    {
      props: {
        color: "inherit"
      },
      style: {
        color: void 0
      }
    }
  ]
}))), No = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = ve({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: i,
    className: s,
    color: a = "inherit",
    component: l = "svg",
    fontSize: c = "medium",
    htmlColor: u,
    inheritViewBox: d = !1,
    titleAccess: p,
    viewBox: v = "0 0 24 24",
    ...S
  } = r, g = /* @__PURE__ */ m.isValidElement(i) && i.type === "svg", y = {
    ...r,
    color: a,
    component: l,
    fontSize: c,
    instanceFontSize: t.fontSize,
    inheritViewBox: d,
    viewBox: v,
    hasSvgAsChild: g
  }, h = {};
  d || (h.viewBox = v);
  const C = Tf(y);
  return /* @__PURE__ */ x.jsxs(Cf, {
    as: l,
    className: ie(C.root, s),
    focusable: "false",
    color: u,
    "aria-hidden": p ? void 0 : !0,
    role: p ? "img" : void 0,
    ref: o,
    ...h,
    ...S,
    ...g && i.props,
    ownerState: y,
    children: [g ? i.props.children : i, p ? /* @__PURE__ */ x.jsx("title", {
      children: p
    }) : null]
  });
});
Sf.NODE_ENV !== "production" && (No.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Node passed into the SVG element.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: n.oneOfType([n.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), n.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: n.oneOfType([n.oneOf(["inherit", "large", "medium", "small"]), n.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: n.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: n.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: n.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: n.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: n.string
});
No.muiName = "SvgIcon";
var Bs = {};
function zt(e, t) {
  function o(r, i) {
    return /* @__PURE__ */ x.jsx(No, {
      "data-testid": Bs.NODE_ENV !== "production" ? `${t}Icon` : void 0,
      ref: i,
      ...r,
      children: e
    });
  }
  return Bs.NODE_ENV !== "production" && (o.displayName = `${t}Icon`), o.muiName = No.muiName, /* @__PURE__ */ m.memo(/* @__PURE__ */ m.forwardRef(o));
}
function dr(e, t = 166) {
  let o;
  function r(...i) {
    const s = () => {
      e.apply(this, i);
    };
    clearTimeout(o), o = setTimeout(s, t);
  }
  return r.clear = () => {
    clearTimeout(o);
  }, r;
}
function nt(e) {
  return e && e.ownerDocument || document;
}
function Ct(e) {
  return nt(e).defaultView || window;
}
function Fs(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
var Ef = {};
function cl(e, t, o, r, i) {
  if (Ef.NODE_ENV === "production")
    return null;
  const s = i || t;
  return typeof e[t] < "u" ? new Error(`The prop \`${s}\` is not supported. Please remove it.`) : null;
}
var wf = {};
function Ls(e) {
  const {
    controlled: t,
    default: o,
    name: r,
    state: i = "value"
  } = e, {
    current: s
  } = m.useRef(t !== void 0), [a, l] = m.useState(o), c = s ? t : a;
  if (wf.NODE_ENV !== "production") {
    m.useEffect(() => {
      s !== (t !== void 0) && console.error([`MUI: A component is changing the ${s ? "" : "un"}controlled ${i} state of ${r} to be ${s ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled ${r} element for the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join(`
`));
    }, [i, r, t]);
    const {
      current: d
    } = m.useRef(o);
    m.useEffect(() => {
      !s && JSON.stringify(o) !== JSON.stringify(d) && console.error([`MUI: A component is changing the default ${i} state of an uncontrolled ${r} after being initialized. To suppress this warning opt to use a controlled ${r}.`].join(`
`));
    }, [JSON.stringify(o)]);
  }
  const u = m.useCallback((d) => {
    s || l(d);
  }, []);
  return [c, u];
}
function ct(e) {
  const t = m.useRef(e);
  return Lt(() => {
    t.current = e;
  }), m.useRef((...o) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...o)
  )).current;
}
function Ze(...e) {
  const t = m.useRef(void 0), o = m.useCallback((r) => {
    const i = e.map((s) => {
      if (s == null)
        return null;
      if (typeof s == "function") {
        const a = s, l = a(r);
        return typeof l == "function" ? l : () => {
          a(null);
        };
      }
      return s.current = r, () => {
        s.current = null;
      };
    });
    return () => {
      i.forEach((s) => s?.());
    };
  }, e);
  return m.useMemo(() => e.every((r) => r == null) ? null : (r) => {
    t.current && (t.current(), t.current = void 0), r != null && (t.current = o(r));
  }, e);
}
function Of(e, t) {
  const o = e.charCodeAt(2);
  return e[0] === "o" && e[1] === "n" && o >= 65 && o <= 90 && typeof t == "function";
}
function Pf(e, t) {
  if (!e)
    return t;
  function o(a, l) {
    const c = {};
    return Object.keys(l).forEach((u) => {
      Of(u, l[u]) && typeof a[u] == "function" && (c[u] = (...d) => {
        a[u](...d), l[u](...d);
      });
    }), c;
  }
  if (typeof e == "function" || typeof t == "function")
    return (a) => {
      const l = typeof t == "function" ? t(a) : t, c = typeof e == "function" ? e({
        ...a,
        ...l
      }) : e, u = ie(a?.className, l?.className, c?.className), d = o(c, l);
      return {
        ...l,
        ...c,
        ...d,
        ...!!u && {
          className: u
        },
        ...l?.style && c?.style && {
          style: {
            ...l.style,
            ...c.style
          }
        },
        ...l?.sx && c?.sx && {
          sx: [...Array.isArray(l.sx) ? l.sx : [l.sx], ...Array.isArray(c.sx) ? c.sx : [c.sx]]
        }
      };
    };
  const r = t, i = o(e, r), s = ie(r?.className, e?.className);
  return {
    ...t,
    ...e,
    ...i,
    ...!!s && {
      className: s
    },
    ...r?.style && e?.style && {
      style: {
        ...r.style,
        ...e.style
      }
    },
    ...r?.sx && e?.sx && {
      sx: [...Array.isArray(r.sx) ? r.sx : [r.sx], ...Array.isArray(e.sx) ? e.sx : [e.sx]]
    }
  };
}
var Rf = {};
function an(e, t) {
  return Rf.NODE_ENV === "production" ? () => null : function(...r) {
    return e(...r) || t(...r);
  };
}
function ul(e, t) {
  if (e == null) return {};
  var o = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) !== -1) continue;
    o[r] = e[r];
  }
  return o;
}
function ti(e, t) {
  return ti = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o, r) {
    return o.__proto__ = r, o;
  }, ti(e, t);
}
function dl(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, ti(e, t);
}
var pl = pc();
const vo = /* @__PURE__ */ Ta(pl), zs = {
  disabled: !1
};
var fl = {}, $f = fl.NODE_ENV !== "production" ? n.oneOfType([n.number, n.shape({
  enter: n.number,
  exit: n.number,
  appear: n.number
}).isRequired]) : null;
fl.NODE_ENV !== "production" && n.oneOfType([n.string, n.shape({
  enter: n.string,
  exit: n.string,
  active: n.string
}), n.shape({
  enter: n.string,
  enterDone: n.string,
  enterActive: n.string,
  exit: n.string,
  exitDone: n.string,
  exitActive: n.string
})]);
const Mo = Bt.createContext(null);
var kf = function(t) {
  return t.scrollTop;
}, If = {}, Vn = "unmounted", en = "exited", tn = "entering", hn = "entered", ni = "exiting", Nt = /* @__PURE__ */ (function(e) {
  dl(t, e);
  function t(r, i) {
    var s;
    s = e.call(this, r, i) || this;
    var a = i, l = a && !a.isMounting ? r.enter : r.appear, c;
    return s.appearStatus = null, r.in ? l ? (c = en, s.appearStatus = tn) : c = hn : r.unmountOnExit || r.mountOnEnter ? c = Vn : c = en, s.state = {
      status: c
    }, s.nextCallback = null, s;
  }
  t.getDerivedStateFromProps = function(i, s) {
    var a = i.in;
    return a && s.status === Vn ? {
      status: en
    } : null;
  };
  var o = t.prototype;
  return o.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, o.componentDidUpdate = function(i) {
    var s = null;
    if (i !== this.props) {
      var a = this.state.status;
      this.props.in ? a !== tn && a !== hn && (s = tn) : (a === tn || a === hn) && (s = ni);
    }
    this.updateStatus(!1, s);
  }, o.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, o.getTimeouts = function() {
    var i = this.props.timeout, s, a, l;
    return s = a = l = i, i != null && typeof i != "number" && (s = i.exit, a = i.enter, l = i.appear !== void 0 ? i.appear : a), {
      exit: s,
      enter: a,
      appear: l
    };
  }, o.updateStatus = function(i, s) {
    if (i === void 0 && (i = !1), s !== null)
      if (this.cancelNextCallback(), s === tn) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var a = this.props.nodeRef ? this.props.nodeRef.current : vo.findDOMNode(this);
          a && kf(a);
        }
        this.performEnter(i);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === en && this.setState({
      status: Vn
    });
  }, o.performEnter = function(i) {
    var s = this, a = this.props.enter, l = this.context ? this.context.isMounting : i, c = this.props.nodeRef ? [l] : [vo.findDOMNode(this), l], u = c[0], d = c[1], p = this.getTimeouts(), v = l ? p.appear : p.enter;
    if (!i && !a || zs.disabled) {
      this.safeSetState({
        status: hn
      }, function() {
        s.props.onEntered(u);
      });
      return;
    }
    this.props.onEnter(u, d), this.safeSetState({
      status: tn
    }, function() {
      s.props.onEntering(u, d), s.onTransitionEnd(v, function() {
        s.safeSetState({
          status: hn
        }, function() {
          s.props.onEntered(u, d);
        });
      });
    });
  }, o.performExit = function() {
    var i = this, s = this.props.exit, a = this.getTimeouts(), l = this.props.nodeRef ? void 0 : vo.findDOMNode(this);
    if (!s || zs.disabled) {
      this.safeSetState({
        status: en
      }, function() {
        i.props.onExited(l);
      });
      return;
    }
    this.props.onExit(l), this.safeSetState({
      status: ni
    }, function() {
      i.props.onExiting(l), i.onTransitionEnd(a.exit, function() {
        i.safeSetState({
          status: en
        }, function() {
          i.props.onExited(l);
        });
      });
    });
  }, o.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, o.safeSetState = function(i, s) {
    s = this.setNextCallback(s), this.setState(i, s);
  }, o.setNextCallback = function(i) {
    var s = this, a = !0;
    return this.nextCallback = function(l) {
      a && (a = !1, s.nextCallback = null, i(l));
    }, this.nextCallback.cancel = function() {
      a = !1;
    }, this.nextCallback;
  }, o.onTransitionEnd = function(i, s) {
    this.setNextCallback(s);
    var a = this.props.nodeRef ? this.props.nodeRef.current : vo.findDOMNode(this), l = i == null && !this.props.addEndListener;
    if (!a || l) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var c = this.props.nodeRef ? [this.nextCallback] : [a, this.nextCallback], u = c[0], d = c[1];
      this.props.addEndListener(u, d);
    }
    i != null && setTimeout(this.nextCallback, i);
  }, o.render = function() {
    var i = this.state.status;
    if (i === Vn)
      return null;
    var s = this.props, a = s.children;
    s.in, s.mountOnEnter, s.unmountOnExit, s.appear, s.enter, s.exit, s.timeout, s.addEndListener, s.onEnter, s.onEntering, s.onEntered, s.onExit, s.onExiting, s.onExited, s.nodeRef;
    var l = ul(s, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ Bt.createElement(Mo.Provider, {
        value: null
      }, typeof a == "function" ? a(i, l) : Bt.cloneElement(Bt.Children.only(a), l))
    );
  }, t;
})(Bt.Component);
Nt.contextType = Mo;
Nt.propTypes = If.NODE_ENV !== "production" ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: n.shape({
    current: typeof Element > "u" ? n.any : function(e, t, o, r, i, s) {
      var a = e[t];
      return n.instanceOf(a && "ownerDocument" in a ? a.ownerDocument.defaultView.Element : Element)(e, t, o, r, i, s);
    }
  }),
  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: n.oneOfType([n.func.isRequired, n.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: n.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: n.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: n.bool,
  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: n.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: n.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: n.bool,
  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function(t) {
    var o = $f;
    t.addEndListener || (o = o.isRequired);
    for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), s = 1; s < r; s++)
      i[s - 1] = arguments[s];
    return o.apply(void 0, [t].concat(i));
  },
  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: n.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: n.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: n.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: n.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: n.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: n.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: n.func
} : {};
function mn() {
}
Nt.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: mn,
  onEntering: mn,
  onEntered: mn,
  onExit: mn,
  onExiting: mn,
  onExited: mn
};
Nt.UNMOUNTED = Vn;
Nt.EXITED = en;
Nt.ENTERING = tn;
Nt.ENTERED = hn;
Nt.EXITING = ni;
function _f(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function _i(e, t) {
  var o = function(s) {
    return t && m.isValidElement(s) ? t(s) : s;
  }, r = /* @__PURE__ */ Object.create(null);
  return e && m.Children.map(e, function(i) {
    return i;
  }).forEach(function(i) {
    r[i.key] = o(i);
  }), r;
}
function Nf(e, t) {
  e = e || {}, t = t || {};
  function o(d) {
    return d in t ? t[d] : e[d];
  }
  var r = /* @__PURE__ */ Object.create(null), i = [];
  for (var s in e)
    s in t ? i.length && (r[s] = i, i = []) : i.push(s);
  var a, l = {};
  for (var c in t) {
    if (r[c])
      for (a = 0; a < r[c].length; a++) {
        var u = r[c][a];
        l[r[c][a]] = o(u);
      }
    l[c] = o(c);
  }
  for (a = 0; a < i.length; a++)
    l[i[a]] = o(i[a]);
  return l;
}
function on(e, t, o) {
  return o[t] != null ? o[t] : e.props[t];
}
function Mf(e, t) {
  return _i(e.children, function(o) {
    return m.cloneElement(o, {
      onExited: t.bind(null, o),
      in: !0,
      appear: on(o, "appear", e),
      enter: on(o, "enter", e),
      exit: on(o, "exit", e)
    });
  });
}
function jf(e, t, o) {
  var r = _i(e.children), i = Nf(t, r);
  return Object.keys(i).forEach(function(s) {
    var a = i[s];
    if (m.isValidElement(a)) {
      var l = s in t, c = s in r, u = t[s], d = m.isValidElement(u) && !u.props.in;
      c && (!l || d) ? i[s] = m.cloneElement(a, {
        onExited: o.bind(null, a),
        in: !0,
        exit: on(a, "exit", e),
        enter: on(a, "enter", e)
      }) : !c && l && !d ? i[s] = m.cloneElement(a, {
        in: !1
      }) : c && l && m.isValidElement(u) && (i[s] = m.cloneElement(a, {
        onExited: o.bind(null, a),
        in: u.props.in,
        exit: on(a, "exit", e),
        enter: on(a, "enter", e)
      }));
    }
  }), i;
}
var Af = {}, Df = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, Bf = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, Ni = /* @__PURE__ */ (function(e) {
  dl(t, e);
  function t(r, i) {
    var s;
    s = e.call(this, r, i) || this;
    var a = s.handleExited.bind(_f(s));
    return s.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: a,
      firstRender: !0
    }, s;
  }
  var o = t.prototype;
  return o.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, o.componentWillUnmount = function() {
    this.mounted = !1;
  }, t.getDerivedStateFromProps = function(i, s) {
    var a = s.children, l = s.handleExited, c = s.firstRender;
    return {
      children: c ? Mf(i, l) : jf(i, a, l),
      firstRender: !1
    };
  }, o.handleExited = function(i, s) {
    var a = _i(this.props.children);
    i.key in a || (i.props.onExited && i.props.onExited(s), this.mounted && this.setState(function(l) {
      var c = $o({}, l.children);
      return delete c[i.key], {
        children: c
      };
    }));
  }, o.render = function() {
    var i = this.props, s = i.component, a = i.childFactory, l = ul(i, ["component", "childFactory"]), c = this.state.contextValue, u = Df(this.state.children).map(a);
    return delete l.appear, delete l.enter, delete l.exit, s === null ? /* @__PURE__ */ Bt.createElement(Mo.Provider, {
      value: c
    }, u) : /* @__PURE__ */ Bt.createElement(Mo.Provider, {
      value: c
    }, /* @__PURE__ */ Bt.createElement(s, l, u));
  }, t;
})(Bt.Component);
Ni.propTypes = Af.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: n.any,
  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: n.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: n.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: n.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: n.bool,
  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: n.func
} : {};
Ni.defaultProps = Bf;
const Ws = {};
function ml(e, t) {
  const o = m.useRef(Ws);
  return o.current === Ws && (o.current = e(t)), o;
}
const Ff = [];
function Lf(e) {
  m.useEffect(e, Ff);
}
class Mi {
  static create() {
    return new Mi();
  }
  currentId = null;
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(t, o) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, o();
    }, t);
  }
  clear = () => {
    this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
  };
  disposeEffect = () => this.clear;
}
function ji() {
  const e = ml(Mi.create).current;
  return Lf(e.disposeEffect), e;
}
function zf(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function Wf(e, t, o, r, i) {
  const s = e[t], a = i || t;
  if (s == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let l;
  return typeof s == "function" && !zf(s) && (l = "Did you accidentally provide a plain function component instead?"), s === m.Fragment && (l = "Did you accidentally provide a React.Fragment instead?"), l !== void 0 ? new Error(`Invalid ${r} \`${a}\` supplied to \`${o}\`. Expected an element type that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Ai = an(n.elementType, Wf), hl = (e) => e.scrollTop;
function jo(e, t) {
  const {
    timeout: o,
    easing: r,
    style: i = {}
  } = e;
  return {
    duration: i.transitionDuration ?? (typeof o == "number" ? o : o[t.mode] || 0),
    easing: i.transitionTimingFunction ?? (typeof r == "object" ? r[t.mode] : r),
    delay: i.transitionDelay
  };
}
function Ao(e) {
  return typeof e == "string";
}
function gl(e, t, o) {
  return e === void 0 || Ao(e) ? t : {
    ...t,
    ownerState: {
      ...t.ownerState,
      ...o
    }
  };
}
function bl(e, t, o) {
  return typeof e == "function" ? e(t, o) : e;
}
function Do(e, t = []) {
  if (e === void 0)
    return {};
  const o = {};
  return Object.keys(e).filter((r) => r.match(/^on[A-Z]/) && typeof e[r] == "function" && !t.includes(r)).forEach((r) => {
    o[r] = e[r];
  }), o;
}
function Vs(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((o) => !(o.match(/^on[A-Z]/) && typeof e[o] == "function")).forEach((o) => {
    t[o] = e[o];
  }), t;
}
function yl(e) {
  const {
    getSlotProps: t,
    additionalProps: o,
    externalSlotProps: r,
    externalForwardedProps: i,
    className: s
  } = e;
  if (!t) {
    const S = ie(o?.className, s, i?.className, r?.className), g = {
      ...o?.style,
      ...i?.style,
      ...r?.style
    }, y = {
      ...o,
      ...i,
      ...r
    };
    return S.length > 0 && (y.className = S), Object.keys(g).length > 0 && (y.style = g), {
      props: y,
      internalRef: void 0
    };
  }
  const a = Do({
    ...i,
    ...r
  }), l = Vs(r), c = Vs(i), u = t(a), d = ie(u?.className, o?.className, s, i?.className, r?.className), p = {
    ...u?.style,
    ...o?.style,
    ...i?.style,
    ...r?.style
  }, v = {
    ...u,
    ...o,
    ...c,
    ...l
  };
  return d.length > 0 && (v.className = d), Object.keys(p).length > 0 && (v.style = p), {
    props: v,
    internalRef: u.ref
  };
}
function he(e, t) {
  const {
    className: o,
    elementType: r,
    ownerState: i,
    externalForwardedProps: s,
    internalForwardedProps: a,
    shouldForwardComponentProp: l = !1,
    ...c
  } = t, {
    component: u,
    slots: d = {
      [e]: void 0
    },
    slotProps: p = {
      [e]: void 0
    },
    ...v
  } = s, S = d[e] || r, g = bl(p[e], i), {
    props: {
      component: y,
      ...h
    },
    internalRef: C
  } = yl({
    className: o,
    ...c,
    externalForwardedProps: e === "root" ? v : void 0,
    externalSlotProps: g
  }), w = Ze(C, g?.ref, t.ref), E = e === "root" ? y || u : y, T = gl(S, {
    ...e === "root" && !u && !d[e] && a,
    ...e !== "root" && !d[e] && a,
    ...h,
    ...E && !l && {
      as: E
    },
    ...E && l && {
      component: E
    },
    ref: w
  }, i);
  return [S, T];
}
var Vf = {};
function Uf(e) {
  const t = typeof e;
  switch (t) {
    case "number":
      return Number.isNaN(e) ? "NaN" : Number.isFinite(e) ? e !== Math.floor(e) ? "float" : "number" : "Infinity";
    case "object":
      return e === null ? "null" : e.constructor.name;
    default:
      return t;
  }
}
function vl(e, t, o, r) {
  const i = e[t];
  if (i == null || !Number.isInteger(i)) {
    const s = Uf(i);
    return new RangeError(`Invalid ${r} \`${t}\` of type \`${s}\` supplied to \`${o}\`, expected \`integer\`.`);
  }
  return null;
}
function xl(e, t, o, r) {
  return e[t] === void 0 ? null : vl(e, t, o, r);
}
function oi() {
  return null;
}
xl.isRequired = vl;
oi.isRequired = oi;
const Sl = Vf.NODE_ENV === "production" ? oi : xl;
function Hf(e) {
  return ge("MuiPaper", e);
}
fe("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
var Tl = {};
const qf = (e) => {
  const {
    square: t,
    elevation: o,
    variant: r,
    classes: i
  } = e, s = {
    root: ["root", r, !t && "rounded", r === "elevation" && `elevation${o}`]
  };
  return ye(s, Hf, i);
}, Yf = G("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, t[o.variant], !o.square && t.rounded, o.variant === "elevation" && t[`elevation${o.elevation}`]];
  }
})(xe(({
  theme: e
}) => ({
  backgroundColor: (e.vars || e).palette.background.paper,
  color: (e.vars || e).palette.text.primary,
  transition: e.transitions.create("box-shadow"),
  variants: [{
    props: ({
      ownerState: t
    }) => !t.square,
    style: {
      borderRadius: e.shape.borderRadius
    }
  }, {
    props: {
      variant: "outlined"
    },
    style: {
      border: `1px solid ${(e.vars || e).palette.divider}`
    }
  }, {
    props: {
      variant: "elevation"
    },
    style: {
      boxShadow: "var(--Paper-shadow)",
      backgroundImage: "var(--Paper-overlay)"
    }
  }]
}))), St = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = ve({
    props: t,
    name: "MuiPaper"
  }), i = On(), {
    className: s,
    component: a = "div",
    elevation: l = 1,
    square: c = !1,
    variant: u = "elevation",
    ...d
  } = r, p = {
    ...r,
    component: a,
    elevation: l,
    square: c,
    variant: u
  }, v = qf(p);
  return Tl.NODE_ENV !== "production" && i.shadows[l] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${l}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${l}]\` is defined.`].join(`
`)), /* @__PURE__ */ x.jsx(Yf, {
    as: a,
    ownerState: p,
    className: ie(v.root, s),
    ref: o,
    ...d,
    style: {
      ...u === "elevation" && {
        "--Paper-shadow": (i.vars || i).shadows[l],
        ...i.vars && {
          "--Paper-overlay": i.vars.overlays?.[l]
        },
        ...!i.vars && i.palette.mode === "dark" && {
          "--Paper-overlay": `linear-gradient(${_o("#fff", ei(l))}, ${_o("#fff", ei(l))})`
        }
      },
      ...d.style
    }
  });
});
Tl.NODE_ENV !== "production" && (St.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 24 inclusive.
   * @default 1
   */
  elevation: an(Sl, (e) => {
    const {
      elevation: t,
      variant: o
    } = e;
    return t > 0 && o === "outlined" ? new Error(`MUI: Combining \`elevation={${t}}\` with \`variant="${o}"\` has no effect. Either use \`elevation={0}\` or use a different \`variant\`.`) : null;
  }),
  /**
   * If `true`, rounded corners are disabled.
   * @default false
   */
  square: n.bool,
  /**
   * @ignore
   */
  style: n.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The variant to use.
   * @default 'elevation'
   */
  variant: n.oneOfType([n.oneOf(["elevation", "outlined"]), n.string])
});
const Mt = n.oneOfType([n.func, n.object]);
var Kf = {};
function Us(e) {
  try {
    return e.matches(":focus-visible");
  } catch {
    Kf.NODE_ENV !== "production" && !window.navigator.userAgent.includes("jsdom") && console.warn(["MUI: The `:focus-visible` pseudo class is not supported in this browser.", "Some components rely on this feature to work properly."].join(`
`));
  }
  return !1;
}
class Bo {
  /** React ref to the ripple instance */
  /** If the ripple component should be mounted */
  /** Promise that resolves when the ripple component is mounted */
  /** If the ripple component has been mounted */
  /** React state hook setter */
  static create() {
    return new Bo();
  }
  static use() {
    const t = ml(Bo.create).current, [o, r] = m.useState(!1);
    return t.shouldMount = o, t.setShouldMount = r, m.useEffect(t.mountEffect, [o]), t;
  }
  constructor() {
    this.ref = {
      current: null
    }, this.mounted = null, this.didMount = !1, this.shouldMount = !1, this.setShouldMount = null;
  }
  mount() {
    return this.mounted || (this.mounted = Xf(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
  }
  mountEffect = () => {
    this.shouldMount && !this.didMount && this.ref.current !== null && (this.didMount = !0, this.mounted.resolve());
  };
  /* Ripple API */
  start(...t) {
    this.mount().then(() => this.ref.current?.start(...t));
  }
  stop(...t) {
    this.mount().then(() => this.ref.current?.stop(...t));
  }
  pulsate(...t) {
    this.mount().then(() => this.ref.current?.pulsate(...t));
  }
}
function Gf() {
  return Bo.use();
}
function Xf() {
  let e, t;
  const o = new Promise((r, i) => {
    e = r, t = i;
  });
  return o.resolve = e, o.reject = t, o;
}
var Jf = {};
function Cl(e) {
  const {
    className: t,
    classes: o,
    pulsate: r = !1,
    rippleX: i,
    rippleY: s,
    rippleSize: a,
    in: l,
    onExited: c,
    timeout: u
  } = e, [d, p] = m.useState(!1), v = ie(t, o.ripple, o.rippleVisible, r && o.ripplePulsate), S = {
    width: a,
    height: a,
    top: -(a / 2) + s,
    left: -(a / 2) + i
  }, g = ie(o.child, d && o.childLeaving, r && o.childPulsate);
  return !l && !d && p(!0), m.useEffect(() => {
    if (!l && c != null) {
      const y = setTimeout(c, u);
      return () => {
        clearTimeout(y);
      };
    }
  }, [c, l, u]), /* @__PURE__ */ x.jsx("span", {
    className: v,
    style: S,
    children: /* @__PURE__ */ x.jsx("span", {
      className: g
    })
  });
}
Jf.NODE_ENV !== "production" && (Cl.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object.isRequired,
  className: n.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: n.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: n.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: n.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: n.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: n.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: n.number,
  /**
   * exit delay
   */
  timeout: n.number.isRequired
});
const mt = fe("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]);
var Qf = {};
const ri = 550, Zf = 80, em = ao`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, tm = ao`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, nm = ao`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, om = G("span", {
  name: "MuiTouchRipple",
  slot: "Root"
})({
  overflow: "hidden",
  pointerEvents: "none",
  position: "absolute",
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: "inherit"
}), rm = G(Cl, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${mt.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${em};
    animation-duration: ${ri}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  &.${mt.ripplePulsate} {
    animation-duration: ${({
  theme: e
}) => e.transitions.duration.shorter}ms;
  }

  & .${mt.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${mt.childLeaving} {
    opacity: 0;
    animation-name: ${tm};
    animation-duration: ${ri}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  & .${mt.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${nm};
    animation-duration: 2500ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, El = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = ve({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: i = !1,
    classes: s = {},
    className: a,
    ...l
  } = r, [c, u] = m.useState([]), d = m.useRef(0), p = m.useRef(null);
  m.useEffect(() => {
    p.current && (p.current(), p.current = null);
  }, [c]);
  const v = m.useRef(!1), S = ji(), g = m.useRef(null), y = m.useRef(null), h = m.useCallback((T) => {
    const {
      pulsate: b,
      rippleX: O,
      rippleY: _,
      rippleSize: D,
      cb: A
    } = T;
    u((L) => [...L, /* @__PURE__ */ x.jsx(rm, {
      classes: {
        ripple: ie(s.ripple, mt.ripple),
        rippleVisible: ie(s.rippleVisible, mt.rippleVisible),
        ripplePulsate: ie(s.ripplePulsate, mt.ripplePulsate),
        child: ie(s.child, mt.child),
        childLeaving: ie(s.childLeaving, mt.childLeaving),
        childPulsate: ie(s.childPulsate, mt.childPulsate)
      },
      timeout: ri,
      pulsate: b,
      rippleX: O,
      rippleY: _,
      rippleSize: D
    }, d.current)]), d.current += 1, p.current = A;
  }, [s]), C = m.useCallback((T = {}, b = {}, O = () => {
  }) => {
    const {
      pulsate: _ = !1,
      center: D = i || b.pulsate,
      fakeElement: A = !1
      // For test purposes
    } = b;
    if (T?.type === "mousedown" && v.current) {
      v.current = !1;
      return;
    }
    T?.type === "touchstart" && (v.current = !0);
    const L = A ? null : y.current, z = L ? L.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let f, I, R;
    if (D || T === void 0 || T.clientX === 0 && T.clientY === 0 || !T.clientX && !T.touches)
      f = Math.round(z.width / 2), I = Math.round(z.height / 2);
    else {
      const {
        clientX: k,
        clientY: j
      } = T.touches && T.touches.length > 0 ? T.touches[0] : T;
      f = Math.round(k - z.left), I = Math.round(j - z.top);
    }
    if (D)
      R = Math.sqrt((2 * z.width ** 2 + z.height ** 2) / 3), R % 2 === 0 && (R += 1);
    else {
      const k = Math.max(Math.abs((L ? L.clientWidth : 0) - f), f) * 2 + 2, j = Math.max(Math.abs((L ? L.clientHeight : 0) - I), I) * 2 + 2;
      R = Math.sqrt(k ** 2 + j ** 2);
    }
    T?.touches ? g.current === null && (g.current = () => {
      h({
        pulsate: _,
        rippleX: f,
        rippleY: I,
        rippleSize: R,
        cb: O
      });
    }, S.start(Zf, () => {
      g.current && (g.current(), g.current = null);
    })) : h({
      pulsate: _,
      rippleX: f,
      rippleY: I,
      rippleSize: R,
      cb: O
    });
  }, [i, h, S]), w = m.useCallback(() => {
    C({}, {
      pulsate: !0
    });
  }, [C]), E = m.useCallback((T, b) => {
    if (S.clear(), T?.type === "touchend" && g.current) {
      g.current(), g.current = null, S.start(0, () => {
        E(T, b);
      });
      return;
    }
    g.current = null, u((O) => O.length > 0 ? O.slice(1) : O), p.current = b;
  }, [S]);
  return m.useImperativeHandle(o, () => ({
    pulsate: w,
    start: C,
    stop: E
  }), [w, C, E]), /* @__PURE__ */ x.jsx(om, {
    className: ie(mt.root, s.root, a),
    ref: y,
    ...l,
    children: /* @__PURE__ */ x.jsx(Ni, {
      component: null,
      exit: !0,
      children: c
    })
  });
});
Qf.NODE_ENV !== "production" && (El.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: n.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string
});
function im(e) {
  return ge("MuiButtonBase", e);
}
const sm = fe("MuiButtonBase", ["root", "disabled", "focusVisible"]);
var am = {};
const lm = (e) => {
  const {
    disabled: t,
    focusVisible: o,
    focusVisibleClassName: r,
    classes: i
  } = e, a = ye({
    root: ["root", t && "disabled", o && "focusVisible"]
  }, im, i);
  return o && r && (a.root += ` ${r}`), a;
}, cm = G("button", {
  name: "MuiButtonBase",
  slot: "Root"
})({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxSizing: "border-box",
  WebkitTapHighlightColor: "transparent",
  backgroundColor: "transparent",
  // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0,
  // Remove the margin in Safari
  borderRadius: 0,
  padding: 0,
  // Remove the padding in Firefox
  cursor: "pointer",
  userSelect: "none",
  verticalAlign: "middle",
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  textDecoration: "none",
  // So we take precedent over the style of a native <a /> element.
  color: "inherit",
  "&::-moz-focus-inner": {
    borderStyle: "none"
    // Remove Firefox dotted outline.
  },
  [`&.${sm.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), Yt = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = ve({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: i,
    centerRipple: s = !1,
    children: a,
    className: l,
    component: c = "button",
    disabled: u = !1,
    disableRipple: d = !1,
    disableTouchRipple: p = !1,
    focusRipple: v = !1,
    focusVisibleClassName: S,
    LinkComponent: g = "a",
    onBlur: y,
    onClick: h,
    onContextMenu: C,
    onDragLeave: w,
    onFocus: E,
    onFocusVisible: T,
    onKeyDown: b,
    onKeyUp: O,
    onMouseDown: _,
    onMouseLeave: D,
    onMouseUp: A,
    onTouchEnd: L,
    onTouchMove: z,
    onTouchStart: f,
    tabIndex: I = 0,
    TouchRippleProps: R,
    touchRippleRef: k,
    type: j,
    ...V
  } = r, ee = m.useRef(null), H = Gf(), se = Ze(H.ref, k), [$, B] = m.useState(!1);
  u && $ && B(!1), m.useImperativeHandle(i, () => ({
    focusVisible: () => {
      B(!0), ee.current.focus();
    }
  }), []);
  const X = H.shouldMount && !d && !u;
  m.useEffect(() => {
    $ && v && !d && H.pulsate();
  }, [d, v, $, H]);
  const ne = Dt(H, "start", _, p), Q = Dt(H, "stop", C, p), F = Dt(H, "stop", w, p), K = Dt(H, "stop", A, p), re = Dt(H, "stop", (le) => {
    $ && le.preventDefault(), D && D(le);
  }, p), te = Dt(H, "start", f, p), Y = Dt(H, "stop", L, p), U = Dt(H, "stop", z, p), ue = Dt(H, "stop", (le) => {
    Us(le.target) || B(!1), y && y(le);
  }, !1), P = ct((le) => {
    ee.current || (ee.current = le.currentTarget), Us(le.target) && (B(!0), T && T(le)), E && E(le);
  }), q = () => {
    const le = ee.current;
    return c && c !== "button" && !(le.tagName === "A" && le.href);
  }, de = ct((le) => {
    v && !le.repeat && $ && le.key === " " && H.stop(le, () => {
      H.start(le);
    }), le.target === le.currentTarget && q() && le.key === " " && le.preventDefault(), b && b(le), le.target === le.currentTarget && q() && le.key === "Enter" && !u && (le.preventDefault(), h && h(le));
  }), ae = ct((le) => {
    v && le.key === " " && $ && !le.defaultPrevented && H.stop(le, () => {
      H.pulsate(le);
    }), O && O(le), h && le.target === le.currentTarget && q() && le.key === " " && !le.defaultPrevented && h(le);
  });
  let Se = c;
  Se === "button" && (V.href || V.to) && (Se = g);
  const Me = {};
  if (Se === "button") {
    const le = !!V.formAction;
    Me.type = j === void 0 && !le ? "button" : j, Me.disabled = u;
  } else
    !V.href && !V.to && (Me.role = "button"), u && (Me["aria-disabled"] = u);
  const Pe = Ze(o, ee), Xe = {
    ...r,
    centerRipple: s,
    component: c,
    disabled: u,
    disableRipple: d,
    disableTouchRipple: p,
    focusRipple: v,
    tabIndex: I,
    focusVisible: $
  }, Be = lm(Xe);
  return /* @__PURE__ */ x.jsxs(cm, {
    as: Se,
    className: ie(Be.root, l),
    ownerState: Xe,
    onBlur: ue,
    onClick: h,
    onContextMenu: Q,
    onFocus: P,
    onKeyDown: de,
    onKeyUp: ae,
    onMouseDown: ne,
    onMouseLeave: re,
    onMouseUp: K,
    onDragLeave: F,
    onTouchEnd: Y,
    onTouchMove: U,
    onTouchStart: te,
    ref: Pe,
    tabIndex: u ? -1 : I,
    type: j,
    ...Me,
    ...V,
    children: [a, X ? /* @__PURE__ */ x.jsx(El, {
      ref: se,
      center: s,
      ...R
    }) : null]
  });
});
function Dt(e, t, o, r = !1) {
  return ct((i) => (o && o(i), r || e[t](i), !0));
}
am.NODE_ENV !== "production" && (Yt.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: Mt,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: n.bool,
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: Ai,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: n.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: n.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: n.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: n.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: n.string,
  /**
   * @ignore
   */
  formAction: n.oneOfType([n.func, n.string]),
  /**
   * @ignore
   */
  href: n.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: n.elementType,
  /**
   * @ignore
   */
  onBlur: n.func,
  /**
   * @ignore
   */
  onClick: n.func,
  /**
   * @ignore
   */
  onContextMenu: n.func,
  /**
   * @ignore
   */
  onDragLeave: n.func,
  /**
   * @ignore
   */
  onFocus: n.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: n.func,
  /**
   * @ignore
   */
  onKeyDown: n.func,
  /**
   * @ignore
   */
  onKeyUp: n.func,
  /**
   * @ignore
   */
  onMouseDown: n.func,
  /**
   * @ignore
   */
  onMouseLeave: n.func,
  /**
   * @ignore
   */
  onMouseUp: n.func,
  /**
   * @ignore
   */
  onTouchEnd: n.func,
  /**
   * @ignore
   */
  onTouchMove: n.func,
  /**
   * @ignore
   */
  onTouchStart: n.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * @default 0
   */
  tabIndex: n.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: n.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: n.oneOfType([n.func, n.shape({
    current: n.shape({
      pulsate: n.func.isRequired,
      start: n.func.isRequired,
      stop: n.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: n.oneOfType([n.oneOf(["button", "reset", "submit"]), n.string])
});
function um(e) {
  return typeof e.main == "string";
}
function dm(e, t = []) {
  if (!um(e))
    return !1;
  for (const o of t)
    if (!e.hasOwnProperty(o) || typeof e[o] != "string")
      return !1;
  return !0;
}
function tt(e = []) {
  return ([, t]) => t && dm(t, e);
}
function pm(e) {
  return ge("MuiAlert", e);
}
const Hs = fe("MuiAlert", ["root", "action", "icon", "message", "filled", "colorSuccess", "colorInfo", "colorWarning", "colorError", "filledSuccess", "filledInfo", "filledWarning", "filledError", "outlined", "outlinedSuccess", "outlinedInfo", "outlinedWarning", "outlinedError", "standard", "standardSuccess", "standardInfo", "standardWarning", "standardError"]);
function fm(e) {
  return ge("MuiCircularProgress", e);
}
fe("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "track", "circle", "circleDeterminate", "circleIndeterminate", "circleDisableShrink"]);
var mm = {};
const xt = 44, ii = ao`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`, si = ao`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: -126px;
  }
`, hm = typeof ii != "string" ? Ti`
        animation: ${ii} 1.4s linear infinite;
      ` : null, gm = typeof si != "string" ? Ti`
        animation: ${si} 1.4s ease-in-out infinite;
      ` : null, bm = (e) => {
  const {
    classes: t,
    variant: o,
    color: r,
    disableShrink: i
  } = e, s = {
    root: ["root", o, `color${W(r)}`],
    svg: ["svg"],
    track: ["track"],
    circle: ["circle", `circle${W(o)}`, i && "circleDisableShrink"]
  };
  return ye(s, fm, t);
}, ym = G("span", {
  name: "MuiCircularProgress",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, t[o.variant], t[`color${W(o.color)}`]];
  }
})(xe(({
  theme: e
}) => ({
  display: "inline-block",
  variants: [{
    props: {
      variant: "determinate"
    },
    style: {
      transition: e.transitions.create("transform")
    }
  }, {
    props: {
      variant: "indeterminate"
    },
    style: hm || {
      animation: `${ii} 1.4s linear infinite`
    }
  }, ...Object.entries(e.palette).filter(tt()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  }))]
}))), vm = G("svg", {
  name: "MuiCircularProgress",
  slot: "Svg"
})({
  display: "block"
  // Keeps the progress centered
}), xm = G("circle", {
  name: "MuiCircularProgress",
  slot: "Circle",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.circle, t[`circle${W(o.variant)}`], o.disableShrink && t.circleDisableShrink];
  }
})(xe(({
  theme: e
}) => ({
  stroke: "currentColor",
  variants: [{
    props: {
      variant: "determinate"
    },
    style: {
      transition: e.transitions.create("stroke-dashoffset")
    }
  }, {
    props: {
      variant: "indeterminate"
    },
    style: {
      // Some default value that looks fine waiting for the animation to kicks in.
      strokeDasharray: "80px, 200px",
      strokeDashoffset: 0
      // Add the unit to fix a Edge 16 and below bug.
    }
  }, {
    props: ({
      ownerState: t
    }) => t.variant === "indeterminate" && !t.disableShrink,
    style: gm || {
      // At runtime for Pigment CSS, `bufferAnimation` will be null and the generated keyframe will be used.
      animation: `${si} 1.4s ease-in-out infinite`
    }
  }]
}))), Sm = G("circle", {
  name: "MuiCircularProgress",
  slot: "Track"
})(xe(({
  theme: e
}) => ({
  stroke: "currentColor",
  opacity: (e.vars || e).palette.action.activatedOpacity
}))), Di = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = ve({
    props: t,
    name: "MuiCircularProgress"
  }), {
    className: i,
    color: s = "primary",
    disableShrink: a = !1,
    enableTrackSlot: l = !1,
    size: c = 40,
    style: u,
    thickness: d = 3.6,
    value: p = 0,
    variant: v = "indeterminate",
    ...S
  } = r, g = {
    ...r,
    color: s,
    disableShrink: a,
    size: c,
    thickness: d,
    value: p,
    variant: v,
    enableTrackSlot: l
  }, y = bm(g), h = {}, C = {}, w = {};
  if (v === "determinate") {
    const E = 2 * Math.PI * ((xt - d) / 2);
    h.strokeDasharray = E.toFixed(3), w["aria-valuenow"] = Math.round(p), h.strokeDashoffset = `${((100 - p) / 100 * E).toFixed(3)}px`, C.transform = "rotate(-90deg)";
  }
  return /* @__PURE__ */ x.jsx(ym, {
    className: ie(y.root, i),
    style: {
      width: c,
      height: c,
      ...C,
      ...u
    },
    ownerState: g,
    ref: o,
    role: "progressbar",
    ...w,
    ...S,
    children: /* @__PURE__ */ x.jsxs(vm, {
      className: y.svg,
      ownerState: g,
      viewBox: `${xt / 2} ${xt / 2} ${xt} ${xt}`,
      children: [l ? /* @__PURE__ */ x.jsx(Sm, {
        className: y.track,
        ownerState: g,
        cx: xt,
        cy: xt,
        r: (xt - d) / 2,
        fill: "none",
        strokeWidth: d,
        "aria-hidden": "true"
      }) : null, /* @__PURE__ */ x.jsx(xm, {
        className: y.circle,
        style: h,
        ownerState: g,
        cx: xt,
        cy: xt,
        r: (xt - d) / 2,
        fill: "none",
        strokeWidth: d
      })]
    })
  });
});
mm.NODE_ENV !== "production" && (Di.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: n.oneOfType([n.oneOf(["inherit", "primary", "secondary", "error", "info", "success", "warning"]), n.string]),
  /**
   * If `true`, the shrink animation is disabled.
   * This only works if variant is `indeterminate`.
   * @default false
   */
  disableShrink: an(n.bool, (e) => e.disableShrink && e.variant && e.variant !== "indeterminate" ? new Error("MUI: You have provided the `disableShrink` prop with a variant other than `indeterminate`. This will have no effect.") : null),
  /**
   * If `true`, a track circle slot is mounted to show a subtle background for the progress.
   * The `size` and `thickness` apply to the track slot to be consistent with the progress circle.
   * @default false
   */
  enableTrackSlot: n.bool,
  /**
   * The size of the component.
   * If using a number, the pixel unit is assumed.
   * If using a string, you need to provide the CSS unit, for example '3rem'.
   * @default 40
   */
  size: n.oneOfType([n.number, n.string]),
  /**
   * @ignore
   */
  style: n.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The thickness of the circle.
   * @default 3.6
   */
  thickness: n.number,
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: n.number,
  /**
   * The variant to use.
   * Use indeterminate when there is no progress value.
   * @default 'indeterminate'
   */
  variant: n.oneOf(["determinate", "indeterminate"])
});
function Tm(e) {
  return ge("MuiIconButton", e);
}
const qs = fe("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge", "loading", "loadingIndicator", "loadingWrapper"]);
var Cm = {};
const Em = (e) => {
  const {
    classes: t,
    disabled: o,
    color: r,
    edge: i,
    size: s,
    loading: a
  } = e, l = {
    root: ["root", a && "loading", o && "disabled", r !== "default" && `color${W(r)}`, i && `edge${W(i)}`, `size${W(s)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  };
  return ye(l, Tm, t);
}, wm = G(Yt, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.loading && t.loading, o.color !== "default" && t[`color${W(o.color)}`], o.edge && t[`edge${W(o.edge)}`], t[`size${W(o.size)}`]];
  }
})(xe(({
  theme: e
}) => ({
  textAlign: "center",
  flex: "0 0 auto",
  fontSize: e.typography.pxToRem(24),
  padding: 8,
  borderRadius: "50%",
  color: (e.vars || e).palette.action.active,
  transition: e.transitions.create("background-color", {
    duration: e.transitions.duration.shortest
  }),
  variants: [{
    props: (t) => !t.disableRipple,
    style: {
      "--IconButton-hoverBg": e.alpha((e.vars || e).palette.action.active, (e.vars || e).palette.action.hoverOpacity),
      "&:hover": {
        backgroundColor: "var(--IconButton-hoverBg)",
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    }
  }, {
    props: {
      edge: "start"
    },
    style: {
      marginLeft: -12
    }
  }, {
    props: {
      edge: "start",
      size: "small"
    },
    style: {
      marginLeft: -3
    }
  }, {
    props: {
      edge: "end"
    },
    style: {
      marginRight: -12
    }
  }, {
    props: {
      edge: "end",
      size: "small"
    },
    style: {
      marginRight: -3
    }
  }]
})), xe(({
  theme: e
}) => ({
  variants: [{
    props: {
      color: "inherit"
    },
    style: {
      color: "inherit"
    }
  }, ...Object.entries(e.palette).filter(tt()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  })), ...Object.entries(e.palette).filter(tt()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      "--IconButton-hoverBg": e.alpha((e.vars || e).palette[t].main, (e.vars || e).palette.action.hoverOpacity)
    }
  })), {
    props: {
      size: "small"
    },
    style: {
      padding: 5,
      fontSize: e.typography.pxToRem(18)
    }
  }, {
    props: {
      size: "large"
    },
    style: {
      padding: 12,
      fontSize: e.typography.pxToRem(28)
    }
  }],
  [`&.${qs.disabled}`]: {
    backgroundColor: "transparent",
    color: (e.vars || e).palette.action.disabled
  },
  [`&.${qs.loading}`]: {
    color: "transparent"
  }
}))), Om = G("span", {
  name: "MuiIconButton",
  slot: "LoadingIndicator"
})(({
  theme: e
}) => ({
  display: "none",
  position: "absolute",
  visibility: "visible",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: (e.vars || e).palette.action.disabled,
  variants: [{
    props: {
      loading: !0
    },
    style: {
      display: "flex"
    }
  }]
})), wl = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = ve({
    props: t,
    name: "MuiIconButton"
  }), {
    edge: i = !1,
    children: s,
    className: a,
    color: l = "default",
    disabled: c = !1,
    disableFocusRipple: u = !1,
    size: d = "medium",
    id: p,
    loading: v = null,
    loadingIndicator: S,
    ...g
  } = r, y = uo(p), h = S ?? /* @__PURE__ */ x.jsx(Di, {
    "aria-labelledby": y,
    color: "inherit",
    size: 16
  }), C = {
    ...r,
    edge: i,
    color: l,
    disabled: c,
    disableFocusRipple: u,
    loading: v,
    loadingIndicator: h,
    size: d
  }, w = Em(C);
  return /* @__PURE__ */ x.jsxs(wm, {
    id: v ? y : p,
    className: ie(w.root, a),
    centerRipple: !0,
    focusRipple: !u,
    disabled: c || v,
    ref: o,
    ...g,
    ownerState: C,
    children: [typeof v == "boolean" && // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ x.jsx("span", {
      className: w.loadingWrapper,
      style: {
        display: "contents"
      },
      children: /* @__PURE__ */ x.jsx(Om, {
        className: w.loadingIndicator,
        ownerState: C,
        children: v && h
      })
    }), s]
  });
});
Cm.NODE_ENV !== "production" && (wl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The icon to display.
   */
  children: an(n.node, (e) => m.Children.toArray(e.children).some((o) => /* @__PURE__ */ m.isValidElement(o) && o.props.onClick) ? new Error(["MUI: You are providing an onClick event listener to a child of a button element.", "Prefer applying it to the IconButton directly.", "This guarantees that the whole <button> will be responsive to click events."].join(`
`)) : null),
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */
  color: n.oneOfType([n.oneOf(["inherit", "default", "primary", "secondary", "error", "info", "success", "warning"]), n.string]),
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: n.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: n.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: n.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   * @default false
   */
  edge: n.oneOf(["end", "start", !1]),
  /**
   * @ignore
   */
  id: n.string,
  /**
   * If `true`, the loading indicator is visible and the button is disabled.
   * If `true | false`, the loading wrapper is always rendered before the children to prevent [Google Translation Crash](https://github.com/mui/material-ui/issues/27853).
   * @default null
   */
  loading: n.bool,
  /**
   * Element placed before the children if the button is in loading state.
   * The node should contain an element with `role="progressbar"` with an accessible name.
   * By default, it renders a `CircularProgress` that is labeled by the button itself.
   * @default <CircularProgress color="inherit" size={16} />
   */
  loadingIndicator: n.node,
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: n.oneOfType([n.oneOf(["small", "medium", "large"]), n.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object])
});
const Pm = zt(/* @__PURE__ */ x.jsx("path", {
  d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"
}), "SuccessOutlined"), Rm = zt(/* @__PURE__ */ x.jsx("path", {
  d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"
}), "ReportProblemOutlined"), $m = zt(/* @__PURE__ */ x.jsx("path", {
  d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
}), "ErrorOutline"), km = zt(/* @__PURE__ */ x.jsx("path", {
  d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"
}), "InfoOutlined"), Im = zt(/* @__PURE__ */ x.jsx("path", {
  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Close");
var _m = {};
const Nm = (e) => {
  const {
    variant: t,
    color: o,
    severity: r,
    classes: i
  } = e, s = {
    root: ["root", `color${W(o || r)}`, `${t}${W(o || r)}`, `${t}`],
    icon: ["icon"],
    message: ["message"],
    action: ["action"]
  };
  return ye(s, pm, i);
}, Mm = G(St, {
  name: "MuiAlert",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, t[o.variant], t[`${o.variant}${W(o.color || o.severity)}`]];
  }
})(xe(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? e.darken : e.lighten, o = e.palette.mode === "light" ? e.lighten : e.darken;
  return {
    ...e.typography.body2,
    backgroundColor: "transparent",
    display: "flex",
    padding: "6px 16px",
    variants: [...Object.entries(e.palette).filter(tt(["light"])).map(([r]) => ({
      props: {
        colorSeverity: r,
        variant: "standard"
      },
      style: {
        color: e.vars ? e.vars.palette.Alert[`${r}Color`] : t(e.palette[r].light, 0.6),
        backgroundColor: e.vars ? e.vars.palette.Alert[`${r}StandardBg`] : o(e.palette[r].light, 0.9),
        [`& .${Hs.icon}`]: e.vars ? {
          color: e.vars.palette.Alert[`${r}IconColor`]
        } : {
          color: e.palette[r].main
        }
      }
    })), ...Object.entries(e.palette).filter(tt(["light"])).map(([r]) => ({
      props: {
        colorSeverity: r,
        variant: "outlined"
      },
      style: {
        color: e.vars ? e.vars.palette.Alert[`${r}Color`] : t(e.palette[r].light, 0.6),
        border: `1px solid ${(e.vars || e).palette[r].light}`,
        [`& .${Hs.icon}`]: e.vars ? {
          color: e.vars.palette.Alert[`${r}IconColor`]
        } : {
          color: e.palette[r].main
        }
      }
    })), ...Object.entries(e.palette).filter(tt(["dark"])).map(([r]) => ({
      props: {
        colorSeverity: r,
        variant: "filled"
      },
      style: {
        fontWeight: e.typography.fontWeightMedium,
        ...e.vars ? {
          color: e.vars.palette.Alert[`${r}FilledColor`],
          backgroundColor: e.vars.palette.Alert[`${r}FilledBg`]
        } : {
          backgroundColor: e.palette.mode === "dark" ? e.palette[r].dark : e.palette[r].main,
          color: e.palette.getContrastText(e.palette[r].main)
        }
      }
    }))]
  };
})), jm = G("div", {
  name: "MuiAlert",
  slot: "Icon"
})({
  marginRight: 12,
  padding: "7px 0",
  display: "flex",
  fontSize: 22,
  opacity: 0.9
}), Am = G("div", {
  name: "MuiAlert",
  slot: "Message"
})({
  padding: "8px 0",
  minWidth: 0,
  overflow: "auto"
}), Dm = G("div", {
  name: "MuiAlert",
  slot: "Action"
})({
  display: "flex",
  alignItems: "flex-start",
  padding: "4px 0 0 16px",
  marginLeft: "auto",
  marginRight: -8
}), Ys = {
  success: /* @__PURE__ */ x.jsx(Pm, {
    fontSize: "inherit"
  }),
  warning: /* @__PURE__ */ x.jsx(Rm, {
    fontSize: "inherit"
  }),
  error: /* @__PURE__ */ x.jsx($m, {
    fontSize: "inherit"
  }),
  info: /* @__PURE__ */ x.jsx(km, {
    fontSize: "inherit"
  })
}, gn = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = ve({
    props: t,
    name: "MuiAlert"
  }), {
    action: i,
    children: s,
    className: a,
    closeText: l = "Close",
    color: c,
    components: u = {},
    componentsProps: d = {},
    icon: p,
    iconMapping: v = Ys,
    onClose: S,
    role: g = "alert",
    severity: y = "success",
    slotProps: h = {},
    slots: C = {},
    variant: w = "standard",
    ...E
  } = r, T = {
    ...r,
    color: c,
    severity: y,
    variant: w,
    colorSeverity: c || y
  }, b = Nm(T), O = {
    slots: {
      closeButton: u.CloseButton,
      closeIcon: u.CloseIcon,
      ...C
    },
    slotProps: {
      ...d,
      ...h
    }
  }, [_, D] = he("root", {
    ref: o,
    shouldForwardComponentProp: !0,
    className: ie(b.root, a),
    elementType: Mm,
    externalForwardedProps: {
      ...O,
      ...E
    },
    ownerState: T,
    additionalProps: {
      role: g,
      elevation: 0
    }
  }), [A, L] = he("icon", {
    className: b.icon,
    elementType: jm,
    externalForwardedProps: O,
    ownerState: T
  }), [z, f] = he("message", {
    className: b.message,
    elementType: Am,
    externalForwardedProps: O,
    ownerState: T
  }), [I, R] = he("action", {
    className: b.action,
    elementType: Dm,
    externalForwardedProps: O,
    ownerState: T
  }), [k, j] = he("closeButton", {
    elementType: wl,
    externalForwardedProps: O,
    ownerState: T
  }), [V, ee] = he("closeIcon", {
    elementType: Im,
    externalForwardedProps: O,
    ownerState: T
  });
  return /* @__PURE__ */ x.jsxs(_, {
    ...D,
    children: [p !== !1 ? /* @__PURE__ */ x.jsx(A, {
      ...L,
      children: p || v[y] || Ys[y]
    }) : null, /* @__PURE__ */ x.jsx(z, {
      ...f,
      children: s
    }), i != null ? /* @__PURE__ */ x.jsx(I, {
      ...R,
      children: i
    }) : null, i == null && S ? /* @__PURE__ */ x.jsx(I, {
      ...R,
      children: /* @__PURE__ */ x.jsx(k, {
        size: "small",
        "aria-label": l,
        title: l,
        color: "inherit",
        onClick: S,
        ...j,
        children: /* @__PURE__ */ x.jsx(V, {
          fontSize: "small",
          ...ee
        })
      })
    }) : null]
  });
});
_m.NODE_ENV !== "production" && (gn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The action to display. It renders after the message, at the end of the alert.
   */
  action: n.node,
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * Override the default label for the *close popup* icon button.
   *
   * For localization purposes, you can use the provided [translations](https://mui.com/material-ui/guides/localization/).
   * @default 'Close'
   */
  closeText: n.string,
  /**
   * The color of the component. Unless provided, the value is taken from the `severity` prop.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */
  color: n.oneOfType([n.oneOf(["error", "info", "success", "warning"]), n.string]),
  /**
   * The components used for each slot inside.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: n.shape({
    CloseButton: n.elementType,
    CloseIcon: n.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: n.shape({
    closeButton: n.object,
    closeIcon: n.object
  }),
  /**
   * Override the icon displayed before the children.
   * Unless provided, the icon is mapped to the value of the `severity` prop.
   * Set to `false` to remove the `icon`.
   */
  icon: n.node,
  /**
   * The component maps the `severity` prop to a range of different icons,
   * for instance success to `<SuccessOutlined>`.
   * If you wish to change this mapping, you can provide your own.
   * Alternatively, you can use the `icon` prop to override the icon displayed.
   */
  iconMapping: n.shape({
    error: n.node,
    info: n.node,
    success: n.node,
    warning: n.node
  }),
  /**
   * Callback fired when the component requests to be closed.
   * When provided and no `action` prop is set, a close icon button is displayed that triggers the callback when clicked.
   * @param {React.SyntheticEvent} event The event source of the callback.
   */
  onClose: n.func,
  /**
   * The ARIA role attribute of the element.
   * @default 'alert'
   */
  role: n.string,
  /**
   * The severity of the alert. This defines the color and icon used.
   * @default 'success'
   */
  severity: n.oneOfType([n.oneOf(["error", "info", "success", "warning"]), n.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: n.shape({
    action: n.oneOfType([n.func, n.object]),
    closeButton: n.oneOfType([n.func, n.object]),
    closeIcon: n.oneOfType([n.func, n.object]),
    icon: n.oneOfType([n.func, n.object]),
    message: n.oneOfType([n.func, n.object]),
    root: n.oneOfType([n.func, n.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: n.shape({
    action: n.elementType,
    closeButton: n.elementType,
    closeIcon: n.elementType,
    icon: n.elementType,
    message: n.elementType,
    root: n.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The variant to use.
   * @default 'standard'
   */
  variant: n.oneOfType([n.oneOf(["filled", "outlined", "standard"]), n.string])
});
function Bm(e) {
  return ge("MuiTypography", e);
}
fe("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
var Fm = {};
const Lm = {
  primary: !0,
  secondary: !0,
  error: !0,
  info: !0,
  success: !0,
  warning: !0,
  textPrimary: !0,
  textSecondary: !0,
  textDisabled: !0
}, zm = yf(), Wm = (e) => {
  const {
    align: t,
    gutterBottom: o,
    noWrap: r,
    paragraph: i,
    variant: s,
    classes: a
  } = e, l = {
    root: ["root", s, e.align !== "inherit" && `align${W(t)}`, o && "gutterBottom", r && "noWrap", i && "paragraph"]
  };
  return ye(l, Bm, a);
}, Vm = G("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.variant && t[o.variant], o.align !== "inherit" && t[`align${W(o.align)}`], o.noWrap && t.noWrap, o.gutterBottom && t.gutterBottom, o.paragraph && t.paragraph];
  }
})(xe(({
  theme: e
}) => ({
  margin: 0,
  variants: [{
    props: {
      variant: "inherit"
    },
    style: {
      // Some elements, like <button> on Chrome have default font that doesn't inherit, reset this.
      font: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  }, ...Object.entries(e.typography).filter(([t, o]) => t !== "inherit" && o && typeof o == "object").map(([t, o]) => ({
    props: {
      variant: t
    },
    style: o
  })), ...Object.entries(e.palette).filter(tt()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  })), ...Object.entries(e.palette?.text || {}).filter(([, t]) => typeof t == "string").map(([t]) => ({
    props: {
      color: `text${W(t)}`
    },
    style: {
      color: (e.vars || e).palette.text[t]
    }
  })), {
    props: ({
      ownerState: t
    }) => t.align !== "inherit",
    style: {
      textAlign: "var(--Typography-textAlign)"
    }
  }, {
    props: ({
      ownerState: t
    }) => t.noWrap,
    style: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, {
    props: ({
      ownerState: t
    }) => t.gutterBottom,
    style: {
      marginBottom: "0.35em"
    }
  }, {
    props: ({
      ownerState: t
    }) => t.paragraph,
    style: {
      marginBottom: 16
    }
  }]
}))), Ks = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "h6",
  subtitle2: "h6",
  body1: "p",
  body2: "p",
  inherit: "p"
}, ze = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const {
    color: r,
    ...i
  } = ve({
    props: t,
    name: "MuiTypography"
  }), s = !Lm[r], a = zm({
    ...i,
    ...s && {
      color: r
    }
  }), {
    align: l = "inherit",
    className: c,
    component: u,
    gutterBottom: d = !1,
    noWrap: p = !1,
    paragraph: v = !1,
    variant: S = "body1",
    variantMapping: g = Ks,
    ...y
  } = a, h = {
    ...a,
    align: l,
    color: r,
    className: c,
    component: u,
    gutterBottom: d,
    noWrap: p,
    paragraph: v,
    variant: S,
    variantMapping: g
  }, C = u || (v ? "p" : g[S] || Ks[S]) || "span", w = Wm(h);
  return /* @__PURE__ */ x.jsx(Vm, {
    as: C,
    ref: o,
    className: ie(w.root, c),
    ...y,
    ownerState: h,
    style: {
      ...l !== "inherit" && {
        "--Typography-textAlign": l
      },
      ...y.style
    }
  });
});
Fm.NODE_ENV !== "production" && (ze.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Set the text-align on the component.
   * @default 'inherit'
   */
  align: n.oneOf(["center", "inherit", "justify", "left", "right"]),
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */
  color: n.oneOfType([n.oneOf(["primary", "secondary", "success", "error", "info", "warning", "textPrimary", "textSecondary", "textDisabled"]), n.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * If `true`, the text will have a bottom margin.
   * @default false
   */
  gutterBottom: n.bool,
  /**
   * If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   *
   * Note that text overflow can only happen with block or inline-block level elements
   * (the element needs to have a width in order to overflow).
   * @default false
   */
  noWrap: n.bool,
  /**
   * If `true`, the element will be a paragraph element.
   * @default false
   * @deprecated Use the `component` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  paragraph: n.bool,
  /**
   * @ignore
   */
  style: n.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * Applies the theme typography styles.
   * @default 'body1'
   */
  variant: n.oneOfType([n.oneOf(["body1", "body2", "button", "caption", "h1", "h2", "h3", "h4", "h5", "h6", "inherit", "overline", "subtitle1", "subtitle2"]), n.string]),
  /**
   * The component maps the variant prop to a range of different HTML element types.
   * For instance, subtitle1 to `<h6>`.
   * If you wish to change that mapping, you can provide your own.
   * Alternatively, you can use the `component` prop.
   * @default {
   *   h1: 'h1',
   *   h2: 'h2',
   *   h3: 'h3',
   *   h4: 'h4',
   *   h5: 'h5',
   *   h6: 'h6',
   *   subtitle1: 'h6',
   *   subtitle2: 'h6',
   *   body1: 'p',
   *   body2: 'p',
   *   inherit: 'p',
   * }
   */
  variantMapping: n.object
});
var Um = {};
function no(e, t, o, r, i) {
  if (Um.NODE_ENV === "production")
    return null;
  const s = e[t], a = i || t;
  return s == null ? null : s && s.nodeType !== 1 ? new Error(`Invalid ${r} \`${a}\` supplied to \`${o}\`. Expected an HTMLElement.`) : null;
}
function oo(e) {
  const {
    elementType: t,
    externalSlotProps: o,
    ownerState: r,
    skipResolvingSlotProps: i = !1,
    ...s
  } = e, a = i ? {} : bl(o, r), {
    props: l,
    internalRef: c
  } = yl({
    ...s,
    externalSlotProps: a
  }), u = Ze(c, a?.ref, e.additionalProps?.ref);
  return gl(t, {
    ...l,
    ref: u
  }, r);
}
function Pn(e) {
  return parseInt(m.version, 10) >= 19 ? e?.props?.ref || null : e?.ref || null;
}
var Ol = {};
function Hm(e) {
  return typeof e == "function" ? e() : e;
}
const Fo = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const {
    children: r,
    container: i,
    disablePortal: s = !1
  } = t, [a, l] = m.useState(null), c = Ze(/* @__PURE__ */ m.isValidElement(r) ? Pn(r) : null, o);
  if (Lt(() => {
    s || l(Hm(i) || document.body);
  }, [i, s]), Lt(() => {
    if (a && !s)
      return Fs(o, a), () => {
        Fs(o, null);
      };
  }, [o, a, s]), s) {
    if (/* @__PURE__ */ m.isValidElement(r)) {
      const u = {
        ref: c
      };
      return /* @__PURE__ */ m.cloneElement(r, u);
    }
    return r;
  }
  return a && /* @__PURE__ */ pl.createPortal(r, a);
});
Ol.NODE_ENV !== "production" && (Fo.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The children to render into the `container`.
   */
  children: n.node,
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: n.oneOfType([no, n.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: n.bool
});
Ol.NODE_ENV !== "production" && (Fo.propTypes = Ri(Fo.propTypes));
const qm = zt(/* @__PURE__ */ x.jsx("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
}), "Cancel");
function Ym(e) {
  return ge("MuiChip", e);
}
const be = fe("MuiChip", ["root", "sizeSmall", "sizeMedium", "colorDefault", "colorError", "colorInfo", "colorPrimary", "colorSecondary", "colorSuccess", "colorWarning", "disabled", "clickable", "clickableColorPrimary", "clickableColorSecondary", "deletable", "deletableColorPrimary", "deletableColorSecondary", "outlined", "filled", "outlinedPrimary", "outlinedSecondary", "filledPrimary", "filledSecondary", "avatar", "avatarSmall", "avatarMedium", "avatarColorPrimary", "avatarColorSecondary", "icon", "iconSmall", "iconMedium", "iconColorPrimary", "iconColorSecondary", "label", "labelSmall", "labelMedium", "deleteIcon", "deleteIconSmall", "deleteIconMedium", "deleteIconColorPrimary", "deleteIconColorSecondary", "deleteIconOutlinedColorPrimary", "deleteIconOutlinedColorSecondary", "deleteIconFilledColorPrimary", "deleteIconFilledColorSecondary", "focusVisible"]);
var Pl = {};
const Km = (e) => {
  const {
    classes: t,
    disabled: o,
    size: r,
    color: i,
    iconColor: s,
    onDelete: a,
    clickable: l,
    variant: c
  } = e, u = {
    root: ["root", c, o && "disabled", `size${W(r)}`, `color${W(i)}`, l && "clickable", l && `clickableColor${W(i)}`, a && "deletable", a && `deletableColor${W(i)}`, `${c}${W(i)}`],
    label: ["label", `label${W(r)}`],
    avatar: ["avatar", `avatar${W(r)}`, `avatarColor${W(i)}`],
    icon: ["icon", `icon${W(r)}`, `iconColor${W(s)}`],
    deleteIcon: ["deleteIcon", `deleteIcon${W(r)}`, `deleteIconColor${W(i)}`, `deleteIcon${W(c)}Color${W(i)}`]
  };
  return ye(u, Ym, t);
}, Gm = G("div", {
  name: "MuiChip",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e, {
      color: r,
      iconColor: i,
      clickable: s,
      onDelete: a,
      size: l,
      variant: c
    } = o;
    return [{
      [`& .${be.avatar}`]: t.avatar
    }, {
      [`& .${be.avatar}`]: t[`avatar${W(l)}`]
    }, {
      [`& .${be.avatar}`]: t[`avatarColor${W(r)}`]
    }, {
      [`& .${be.icon}`]: t.icon
    }, {
      [`& .${be.icon}`]: t[`icon${W(l)}`]
    }, {
      [`& .${be.icon}`]: t[`iconColor${W(i)}`]
    }, {
      [`& .${be.deleteIcon}`]: t.deleteIcon
    }, {
      [`& .${be.deleteIcon}`]: t[`deleteIcon${W(l)}`]
    }, {
      [`& .${be.deleteIcon}`]: t[`deleteIconColor${W(r)}`]
    }, {
      [`& .${be.deleteIcon}`]: t[`deleteIcon${W(c)}Color${W(r)}`]
    }, t.root, t[`size${W(l)}`], t[`color${W(r)}`], s && t.clickable, s && r !== "default" && t[`clickableColor${W(r)}`], a && t.deletable, a && r !== "default" && t[`deletableColor${W(r)}`], t[c], t[`${c}${W(r)}`]];
  }
})(xe(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? e.palette.grey[700] : e.palette.grey[300];
  return {
    maxWidth: "100%",
    fontFamily: e.typography.fontFamily,
    fontSize: e.typography.pxToRem(13),
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    height: 32,
    lineHeight: 1.5,
    color: (e.vars || e).palette.text.primary,
    backgroundColor: (e.vars || e).palette.action.selected,
    borderRadius: 32 / 2,
    whiteSpace: "nowrap",
    transition: e.transitions.create(["background-color", "box-shadow"]),
    // reset cursor explicitly in case ButtonBase is used
    cursor: "unset",
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 0,
    textDecoration: "none",
    border: 0,
    // Remove `button` border
    padding: 0,
    // Remove `button` padding
    verticalAlign: "middle",
    boxSizing: "border-box",
    [`&.${be.disabled}`]: {
      opacity: (e.vars || e).palette.action.disabledOpacity,
      pointerEvents: "none"
    },
    [`& .${be.avatar}`]: {
      marginLeft: 5,
      marginRight: -6,
      width: 24,
      height: 24,
      color: e.vars ? e.vars.palette.Chip.defaultAvatarColor : t,
      fontSize: e.typography.pxToRem(12)
    },
    [`& .${be.avatarColorPrimary}`]: {
      color: (e.vars || e).palette.primary.contrastText,
      backgroundColor: (e.vars || e).palette.primary.dark
    },
    [`& .${be.avatarColorSecondary}`]: {
      color: (e.vars || e).palette.secondary.contrastText,
      backgroundColor: (e.vars || e).palette.secondary.dark
    },
    [`& .${be.avatarSmall}`]: {
      marginLeft: 4,
      marginRight: -4,
      width: 18,
      height: 18,
      fontSize: e.typography.pxToRem(10)
    },
    [`& .${be.icon}`]: {
      marginLeft: 5,
      marginRight: -6
    },
    [`& .${be.deleteIcon}`]: {
      WebkitTapHighlightColor: "transparent",
      color: e.alpha((e.vars || e).palette.text.primary, 0.26),
      fontSize: 22,
      cursor: "pointer",
      margin: "0 5px 0 -6px",
      "&:hover": {
        color: e.alpha((e.vars || e).palette.text.primary, 0.4)
      }
    },
    variants: [{
      props: {
        size: "small"
      },
      style: {
        height: 24,
        [`& .${be.icon}`]: {
          fontSize: 18,
          marginLeft: 4,
          marginRight: -4
        },
        [`& .${be.deleteIcon}`]: {
          fontSize: 16,
          marginRight: 4,
          marginLeft: -4
        }
      }
    }, ...Object.entries(e.palette).filter(tt(["contrastText"])).map(([o]) => ({
      props: {
        color: o
      },
      style: {
        backgroundColor: (e.vars || e).palette[o].main,
        color: (e.vars || e).palette[o].contrastText,
        [`& .${be.deleteIcon}`]: {
          color: e.alpha((e.vars || e).palette[o].contrastText, 0.7),
          "&:hover, &:active": {
            color: (e.vars || e).palette[o].contrastText
          }
        }
      }
    })), {
      props: (o) => o.iconColor === o.color,
      style: {
        [`& .${be.icon}`]: {
          color: e.vars ? e.vars.palette.Chip.defaultIconColor : t
        }
      }
    }, {
      props: (o) => o.iconColor === o.color && o.color !== "default",
      style: {
        [`& .${be.icon}`]: {
          color: "inherit"
        }
      }
    }, {
      props: {
        onDelete: !0
      },
      style: {
        [`&.${be.focusVisible}`]: {
          backgroundColor: e.alpha((e.vars || e).palette.action.selected, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.focusOpacity}`)
        }
      }
    }, ...Object.entries(e.palette).filter(tt(["dark"])).map(([o]) => ({
      props: {
        color: o,
        onDelete: !0
      },
      style: {
        [`&.${be.focusVisible}`]: {
          background: (e.vars || e).palette[o].dark
        }
      }
    })), {
      props: {
        clickable: !0
      },
      style: {
        userSelect: "none",
        WebkitTapHighlightColor: "transparent",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: e.alpha((e.vars || e).palette.action.selected, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.hoverOpacity}`)
        },
        [`&.${be.focusVisible}`]: {
          backgroundColor: e.alpha((e.vars || e).palette.action.selected, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.focusOpacity}`)
        },
        "&:active": {
          boxShadow: (e.vars || e).shadows[1]
        }
      }
    }, ...Object.entries(e.palette).filter(tt(["dark"])).map(([o]) => ({
      props: {
        color: o,
        clickable: !0
      },
      style: {
        [`&:hover, &.${be.focusVisible}`]: {
          backgroundColor: (e.vars || e).palette[o].dark
        }
      }
    })), {
      props: {
        variant: "outlined"
      },
      style: {
        backgroundColor: "transparent",
        border: e.vars ? `1px solid ${e.vars.palette.Chip.defaultBorder}` : `1px solid ${e.palette.mode === "light" ? e.palette.grey[400] : e.palette.grey[700]}`,
        [`&.${be.clickable}:hover`]: {
          backgroundColor: (e.vars || e).palette.action.hover
        },
        [`&.${be.focusVisible}`]: {
          backgroundColor: (e.vars || e).palette.action.focus
        },
        [`& .${be.avatar}`]: {
          marginLeft: 4
        },
        [`& .${be.avatarSmall}`]: {
          marginLeft: 2
        },
        [`& .${be.icon}`]: {
          marginLeft: 4
        },
        [`& .${be.iconSmall}`]: {
          marginLeft: 2
        },
        [`& .${be.deleteIcon}`]: {
          marginRight: 5
        },
        [`& .${be.deleteIconSmall}`]: {
          marginRight: 3
        }
      }
    }, ...Object.entries(e.palette).filter(tt()).map(([o]) => ({
      props: {
        variant: "outlined",
        color: o
      },
      style: {
        color: (e.vars || e).palette[o].main,
        border: `1px solid ${e.alpha((e.vars || e).palette[o].main, 0.7)}`,
        [`&.${be.clickable}:hover`]: {
          backgroundColor: e.alpha((e.vars || e).palette[o].main, (e.vars || e).palette.action.hoverOpacity)
        },
        [`&.${be.focusVisible}`]: {
          backgroundColor: e.alpha((e.vars || e).palette[o].main, (e.vars || e).palette.action.focusOpacity)
        },
        [`& .${be.deleteIcon}`]: {
          color: e.alpha((e.vars || e).palette[o].main, 0.7),
          "&:hover, &:active": {
            color: (e.vars || e).palette[o].main
          }
        }
      }
    }))]
  };
})), Xm = G("span", {
  name: "MuiChip",
  slot: "Label",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e, {
      size: r
    } = o;
    return [t.label, t[`label${W(r)}`]];
  }
})({
  overflow: "hidden",
  textOverflow: "ellipsis",
  paddingLeft: 12,
  paddingRight: 12,
  whiteSpace: "nowrap",
  variants: [{
    props: {
      variant: "outlined"
    },
    style: {
      paddingLeft: 11,
      paddingRight: 11
    }
  }, {
    props: {
      size: "small"
    },
    style: {
      paddingLeft: 8,
      paddingRight: 8
    }
  }, {
    props: {
      size: "small",
      variant: "outlined"
    },
    style: {
      paddingLeft: 7,
      paddingRight: 7
    }
  }]
});
function Gs(e) {
  return e.key === "Backspace" || e.key === "Delete";
}
const bn = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = ve({
    props: t,
    name: "MuiChip"
  }), {
    avatar: i,
    className: s,
    clickable: a,
    color: l = "default",
    component: c,
    deleteIcon: u,
    disabled: d = !1,
    icon: p,
    label: v,
    onClick: S,
    onDelete: g,
    onKeyDown: y,
    onKeyUp: h,
    size: C = "medium",
    variant: w = "filled",
    tabIndex: E,
    skipFocusWhenDisabled: T = !1,
    // TODO v6: Rename to `focusableWhenDisabled`.
    slots: b = {},
    slotProps: O = {},
    ..._
  } = r, D = m.useRef(null), A = Ze(D, o), L = (F) => {
    F.stopPropagation(), g(F);
  }, z = (F) => {
    F.currentTarget === F.target && Gs(F) && F.preventDefault(), y && y(F);
  }, f = (F) => {
    F.currentTarget === F.target && g && Gs(F) && g(F), h && h(F);
  }, I = a !== !1 && S ? !0 : a, R = I || g ? Yt : c || "div", k = {
    ...r,
    component: R,
    disabled: d,
    size: C,
    color: l,
    iconColor: /* @__PURE__ */ m.isValidElement(p) && p.props.color || l,
    onDelete: !!g,
    clickable: I,
    variant: w
  }, j = Km(k), V = R === Yt ? {
    component: c || "div",
    focusVisibleClassName: j.focusVisible,
    ...g && {
      disableRipple: !0
    }
  } : {};
  let ee = null;
  g && (ee = u && /* @__PURE__ */ m.isValidElement(u) ? /* @__PURE__ */ m.cloneElement(u, {
    className: ie(u.props.className, j.deleteIcon),
    onClick: L
  }) : /* @__PURE__ */ x.jsx(qm, {
    className: j.deleteIcon,
    onClick: L
  }));
  let H = null;
  i && /* @__PURE__ */ m.isValidElement(i) && (H = /* @__PURE__ */ m.cloneElement(i, {
    className: ie(j.avatar, i.props.className)
  }));
  let se = null;
  p && /* @__PURE__ */ m.isValidElement(p) && (se = /* @__PURE__ */ m.cloneElement(p, {
    className: ie(j.icon, p.props.className)
  })), Pl.NODE_ENV !== "production" && H && se && console.error("MUI: The Chip component can not handle the avatar and the icon prop at the same time. Pick one.");
  const $ = {
    slots: b,
    slotProps: O
  }, [B, X] = he("root", {
    elementType: Gm,
    externalForwardedProps: {
      ...$,
      ..._
    },
    ownerState: k,
    // The `component` prop is preserved because `Chip` relies on it for internal logic. If `shouldForwardComponentProp` were `false`, `useSlot` would remove the `component` prop, potentially breaking the component's behavior.
    shouldForwardComponentProp: !0,
    ref: A,
    className: ie(j.root, s),
    additionalProps: {
      disabled: I && d ? !0 : void 0,
      tabIndex: T && d ? -1 : E,
      ...V
    },
    getSlotProps: (F) => ({
      ...F,
      onClick: (K) => {
        F.onClick?.(K), S?.(K);
      },
      onKeyDown: (K) => {
        F.onKeyDown?.(K), z(K);
      },
      onKeyUp: (K) => {
        F.onKeyUp?.(K), f(K);
      }
    })
  }), [ne, Q] = he("label", {
    elementType: Xm,
    externalForwardedProps: $,
    ownerState: k,
    className: j.label
  });
  return /* @__PURE__ */ x.jsxs(B, {
    as: R,
    ...X,
    children: [H || se, /* @__PURE__ */ x.jsx(ne, {
      ...Q,
      children: v
    }), ee]
  });
});
Pl.NODE_ENV !== "production" && (bn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The Avatar element to display.
   */
  avatar: n.element,
  /**
   * This prop isn't supported.
   * Use the `component` prop if you need to change the children structure.
   */
  children: cl,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * If `true`, the chip will appear clickable, and will raise when pressed,
   * even if the onClick prop is not defined.
   * If `false`, the chip will not appear clickable, even if onClick prop is defined.
   * This can be used, for example,
   * along with the component prop to indicate an anchor Chip is clickable.
   * Note: this controls the UI and does not affect the onClick event.
   */
  clickable: n.bool,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */
  color: n.oneOfType([n.oneOf(["default", "primary", "secondary", "error", "info", "success", "warning"]), n.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * Override the default delete icon element. Shown only if `onDelete` is set.
   */
  deleteIcon: n.element,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: n.bool,
  /**
   * Icon element.
   */
  icon: n.element,
  /**
   * The content of the component.
   */
  label: n.node,
  /**
   * @ignore
   */
  onClick: n.func,
  /**
   * Callback fired when the delete icon is clicked.
   * If set, the delete icon will be shown.
   */
  onDelete: n.func,
  /**
   * @ignore
   */
  onKeyDown: n.func,
  /**
   * @ignore
   */
  onKeyUp: n.func,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: n.oneOfType([n.oneOf(["medium", "small"]), n.string]),
  /**
   * If `true`, allows the disabled chip to escape focus.
   * If `false`, allows the disabled chip to receive focus.
   * @default false
   */
  skipFocusWhenDisabled: n.bool,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: n.shape({
    label: n.oneOfType([n.func, n.object]),
    root: n.oneOfType([n.func, n.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: n.shape({
    label: n.elementType,
    root: n.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * @ignore
   */
  tabIndex: n.number,
  /**
   * The variant to use.
   * @default 'filled'
   */
  variant: n.oneOfType([n.oneOf(["filled", "outlined"]), n.string])
});
var Jm = {};
function xo(e) {
  return parseInt(e, 10) || 0;
}
const Qm = {
  shadow: {
    // Visibility needed to hide the extra text area on iPads
    visibility: "hidden",
    // Remove from the content flow
    position: "absolute",
    // Ignore the scrollbar width
    overflow: "hidden",
    height: 0,
    top: 0,
    left: 0,
    // Create a new layer, increase the isolation of the computed values
    transform: "translateZ(0)"
  }
};
function Zm(e) {
  for (const t in e)
    return !1;
  return !0;
}
function Xs(e) {
  return Zm(e) || e.outerHeightStyle === 0 && !e.overflowing;
}
const Rl = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const {
    onChange: r,
    maxRows: i,
    minRows: s = 1,
    style: a,
    value: l,
    ...c
  } = t, {
    current: u
  } = m.useRef(l != null), d = m.useRef(null), p = Ze(o, d), v = m.useRef(null), S = m.useRef(null), g = m.useCallback(() => {
    const E = d.current, T = S.current;
    if (!E || !T)
      return;
    const O = Ct(E).getComputedStyle(E);
    if (O.width === "0px")
      return {
        outerHeightStyle: 0,
        overflowing: !1
      };
    T.style.width = O.width, T.value = E.value || t.placeholder || "x", T.value.slice(-1) === `
` && (T.value += " ");
    const _ = O.boxSizing, D = xo(O.paddingBottom) + xo(O.paddingTop), A = xo(O.borderBottomWidth) + xo(O.borderTopWidth), L = T.scrollHeight;
    T.value = "x";
    const z = T.scrollHeight;
    let f = L;
    s && (f = Math.max(Number(s) * z, f)), i && (f = Math.min(Number(i) * z, f)), f = Math.max(f, z);
    const I = f + (_ === "border-box" ? D + A : 0), R = Math.abs(f - L) <= 1;
    return {
      outerHeightStyle: I,
      overflowing: R
    };
  }, [i, s, t.placeholder]), y = ct(() => {
    const E = d.current, T = g();
    if (!E || !T || Xs(T))
      return !1;
    const b = T.outerHeightStyle;
    return v.current != null && v.current !== b;
  }), h = m.useCallback(() => {
    const E = d.current, T = g();
    if (!E || !T || Xs(T))
      return;
    const b = T.outerHeightStyle;
    v.current !== b && (v.current = b, E.style.height = `${b}px`), E.style.overflow = T.overflowing ? "hidden" : "";
  }, [g]), C = m.useRef(-1);
  Lt(() => {
    const E = dr(h), T = d?.current;
    if (!T)
      return;
    const b = Ct(T);
    b.addEventListener("resize", E);
    let O;
    return typeof ResizeObserver < "u" && (O = new ResizeObserver(() => {
      y() && (O.unobserve(T), cancelAnimationFrame(C.current), h(), C.current = requestAnimationFrame(() => {
        O.observe(T);
      }));
    }), O.observe(T)), () => {
      E.clear(), cancelAnimationFrame(C.current), b.removeEventListener("resize", E), O && O.disconnect();
    };
  }, [g, h, y]), Lt(() => {
    h();
  });
  const w = (E) => {
    u || h();
    const T = E.target, b = T.value.length, O = T.value.endsWith(`
`), _ = T.selectionStart === b;
    O && _ && T.setSelectionRange(b, b), r && r(E);
  };
  return /* @__PURE__ */ x.jsxs(m.Fragment, {
    children: [/* @__PURE__ */ x.jsx("textarea", {
      value: l,
      onChange: w,
      ref: p,
      rows: s,
      style: a,
      ...c
    }), /* @__PURE__ */ x.jsx("textarea", {
      "aria-hidden": !0,
      className: t.className,
      readOnly: !0,
      ref: S,
      tabIndex: -1,
      style: {
        ...Qm.shadow,
        ...a,
        paddingTop: 0,
        paddingBottom: 0
      }
    })]
  });
});
Jm.NODE_ENV !== "production" && (Rl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  className: n.string,
  /**
   * Maximum number of rows to display.
   */
  maxRows: n.oneOfType([n.number, n.string]),
  /**
   * Minimum number of rows to display.
   * @default 1
   */
  minRows: n.oneOfType([n.number, n.string]),
  /**
   * @ignore
   */
  onChange: n.func,
  /**
   * @ignore
   */
  placeholder: n.string,
  /**
   * @ignore
   */
  style: n.object,
  /**
   * @ignore
   */
  value: n.oneOfType([n.arrayOf(n.string), n.number, n.string])
});
function Rn({
  props: e,
  states: t,
  muiFormControl: o
}) {
  return t.reduce((r, i) => (r[i] = e[i], o && typeof e[i] > "u" && (r[i] = o[i]), r), {});
}
var eh = {};
const pr = /* @__PURE__ */ m.createContext(void 0);
eh.NODE_ENV !== "production" && (pr.displayName = "FormControlContext");
function $n() {
  return m.useContext(pr);
}
function Js(e) {
  return e != null && !(Array.isArray(e) && e.length === 0);
}
function Lo(e, t = !1) {
  return e && (Js(e.value) && e.value !== "" || t && Js(e.defaultValue) && e.defaultValue !== "");
}
function th(e) {
  return e.startAdornment;
}
function nh(e) {
  return ge("MuiInputBase", e);
}
const Cn = fe("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputSizeSmall", "inputMultiline", "inputTypeSearch", "inputAdornedStart", "inputAdornedEnd", "inputHiddenLabel"]);
var Un = {}, Qs;
const fr = (e, t) => {
  const {
    ownerState: o
  } = e;
  return [t.root, o.formControl && t.formControl, o.startAdornment && t.adornedStart, o.endAdornment && t.adornedEnd, o.error && t.error, o.size === "small" && t.sizeSmall, o.multiline && t.multiline, o.color && t[`color${W(o.color)}`], o.fullWidth && t.fullWidth, o.hiddenLabel && t.hiddenLabel];
}, mr = (e, t) => {
  const {
    ownerState: o
  } = e;
  return [t.input, o.size === "small" && t.inputSizeSmall, o.multiline && t.inputMultiline, o.type === "search" && t.inputTypeSearch, o.startAdornment && t.inputAdornedStart, o.endAdornment && t.inputAdornedEnd, o.hiddenLabel && t.inputHiddenLabel];
}, oh = (e) => {
  const {
    classes: t,
    color: o,
    disabled: r,
    error: i,
    endAdornment: s,
    focused: a,
    formControl: l,
    fullWidth: c,
    hiddenLabel: u,
    multiline: d,
    readOnly: p,
    size: v,
    startAdornment: S,
    type: g
  } = e, y = {
    root: ["root", `color${W(o)}`, r && "disabled", i && "error", c && "fullWidth", a && "focused", l && "formControl", v && v !== "medium" && `size${W(v)}`, d && "multiline", S && "adornedStart", s && "adornedEnd", u && "hiddenLabel", p && "readOnly"],
    input: ["input", r && "disabled", g === "search" && "inputTypeSearch", d && "inputMultiline", v === "small" && "inputSizeSmall", u && "inputHiddenLabel", S && "inputAdornedStart", s && "inputAdornedEnd", p && "readOnly"]
  };
  return ye(y, nh, t);
}, hr = G("div", {
  name: "MuiInputBase",
  slot: "Root",
  overridesResolver: fr
})(xe(({
  theme: e
}) => ({
  ...e.typography.body1,
  color: (e.vars || e).palette.text.primary,
  lineHeight: "1.4375em",
  // 23px
  boxSizing: "border-box",
  // Prevent padding issue with fullWidth.
  position: "relative",
  cursor: "text",
  display: "inline-flex",
  alignItems: "center",
  [`&.${Cn.disabled}`]: {
    color: (e.vars || e).palette.text.disabled,
    cursor: "default"
  },
  variants: [{
    props: ({
      ownerState: t
    }) => t.multiline,
    style: {
      padding: "4px 0 5px"
    }
  }, {
    props: ({
      ownerState: t,
      size: o
    }) => t.multiline && o === "small",
    style: {
      paddingTop: 1
    }
  }, {
    props: ({
      ownerState: t
    }) => t.fullWidth,
    style: {
      width: "100%"
    }
  }]
}))), gr = G("input", {
  name: "MuiInputBase",
  slot: "Input",
  overridesResolver: mr
})(xe(({
  theme: e
}) => {
  const t = e.palette.mode === "light", o = {
    color: "currentColor",
    ...e.vars ? {
      opacity: e.vars.opacity.inputPlaceholder
    } : {
      opacity: t ? 0.42 : 0.5
    },
    transition: e.transitions.create("opacity", {
      duration: e.transitions.duration.shorter
    })
  }, r = {
    opacity: "0 !important"
  }, i = e.vars ? {
    opacity: e.vars.opacity.inputPlaceholder
  } : {
    opacity: t ? 0.42 : 0.5
  };
  return {
    font: "inherit",
    letterSpacing: "inherit",
    color: "currentColor",
    padding: "4px 0 5px",
    border: 0,
    boxSizing: "content-box",
    background: "none",
    height: "1.4375em",
    // Reset 23pxthe native input line-height
    margin: 0,
    // Reset for Safari
    WebkitTapHighlightColor: "transparent",
    display: "block",
    // Make the flex item shrink with Firefox
    minWidth: 0,
    width: "100%",
    "&::-webkit-input-placeholder": o,
    "&::-moz-placeholder": o,
    // Firefox 19+
    "&::-ms-input-placeholder": o,
    // Edge
    "&:focus": {
      outline: 0
    },
    // Reset Firefox invalid required input style
    "&:invalid": {
      boxShadow: "none"
    },
    "&::-webkit-search-decoration": {
      // Remove the padding when type=search.
      WebkitAppearance: "none"
    },
    // Show and hide the placeholder logic
    [`label[data-shrink=false] + .${Cn.formControl} &`]: {
      "&::-webkit-input-placeholder": r,
      "&::-moz-placeholder": r,
      // Firefox 19+
      "&::-ms-input-placeholder": r,
      // Edge
      "&:focus::-webkit-input-placeholder": i,
      "&:focus::-moz-placeholder": i,
      // Firefox 19+
      "&:focus::-ms-input-placeholder": i
      // Edge
    },
    [`&.${Cn.disabled}`]: {
      opacity: 1,
      // Reset iOS opacity
      WebkitTextFillColor: (e.vars || e).palette.text.disabled
      // Fix opacity Safari bug
    },
    variants: [{
      props: ({
        ownerState: s
      }) => !s.disableInjectingGlobalStyles,
      style: {
        animationName: "mui-auto-fill-cancel",
        animationDuration: "10ms",
        "&:-webkit-autofill": {
          animationDuration: "5000s",
          animationName: "mui-auto-fill"
        }
      }
    }, {
      props: {
        size: "small"
      },
      style: {
        paddingTop: 1
      }
    }, {
      props: ({
        ownerState: s
      }) => s.multiline,
      style: {
        height: "auto",
        resize: "none",
        padding: 0,
        paddingTop: 0
      }
    }, {
      props: {
        type: "search"
      },
      style: {
        MozAppearance: "textfield"
        // Improve type search style.
      }
    }]
  };
})), Zs = bf({
  "@keyframes mui-auto-fill": {
    from: {
      display: "block"
    }
  },
  "@keyframes mui-auto-fill-cancel": {
    from: {
      display: "block"
    }
  }
}), br = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = ve({
    props: t,
    name: "MuiInputBase"
  }), {
    "aria-describedby": i,
    autoComplete: s,
    autoFocus: a,
    className: l,
    color: c,
    components: u = {},
    componentsProps: d = {},
    defaultValue: p,
    disabled: v,
    disableInjectingGlobalStyles: S,
    endAdornment: g,
    error: y,
    fullWidth: h = !1,
    id: C,
    inputComponent: w = "input",
    inputProps: E = {},
    inputRef: T,
    margin: b,
    maxRows: O,
    minRows: _,
    multiline: D = !1,
    name: A,
    onBlur: L,
    onChange: z,
    onClick: f,
    onFocus: I,
    onKeyDown: R,
    onKeyUp: k,
    placeholder: j,
    readOnly: V,
    renderSuffix: ee,
    rows: H,
    size: se,
    slotProps: $ = {},
    slots: B = {},
    startAdornment: X,
    type: ne = "text",
    value: Q,
    ...F
  } = r, K = E.value != null ? E.value : Q, {
    current: re
  } = m.useRef(K != null), te = m.useRef(), Y = m.useCallback((Te) => {
    Un.NODE_ENV !== "production" && Te && Te.nodeName !== "INPUT" && !Te.focus && console.error(["MUI: You have provided a `inputComponent` to the input component", "that does not correctly handle the `ref` prop.", "Make sure the `ref` prop is called with a HTMLInputElement."].join(`
`));
  }, []), U = Ze(te, T, E.ref, Y), [ue, P] = m.useState(!1), q = $n();
  Un.NODE_ENV !== "production" && m.useEffect(() => {
    if (q)
      return q.registerEffect();
  }, [q]);
  const de = Rn({
    props: r,
    muiFormControl: q,
    states: ["color", "disabled", "error", "hiddenLabel", "size", "required", "filled"]
  });
  de.focused = q ? q.focused : ue, m.useEffect(() => {
    !q && v && ue && (P(!1), L && L());
  }, [q, v, ue, L]);
  const ae = q && q.onFilled, Se = q && q.onEmpty, Me = m.useCallback((Te) => {
    Lo(Te) ? ae && ae() : Se && Se();
  }, [ae, Se]);
  Lt(() => {
    re && Me({
      value: K
    });
  }, [K, Me, re]);
  const Pe = (Te) => {
    I && I(Te), E.onFocus && E.onFocus(Te), q && q.onFocus ? q.onFocus(Te) : P(!0);
  }, Xe = (Te) => {
    L && L(Te), E.onBlur && E.onBlur(Te), q && q.onBlur ? q.onBlur(Te) : P(!1);
  }, Be = (Te, ...pt) => {
    if (!re) {
      const N = Te.target || te.current;
      if (N == null)
        throw new Error(Un.NODE_ENV !== "production" ? "MUI: Expected valid input target. Did you use a custom `inputComponent` and forget to forward refs? See https://mui.com/r/input-component-ref-interface for more info." : Ft(1));
      Me({
        value: N.value
      });
    }
    E.onChange && E.onChange(Te, ...pt), z && z(Te, ...pt);
  };
  m.useEffect(() => {
    Me(te.current);
  }, []);
  const le = (Te) => {
    te.current && Te.currentTarget === Te.target && te.current.focus(), f && f(Te);
  };
  let st = w, Fe = E;
  D && st === "input" && (H ? (Un.NODE_ENV !== "production" && (_ || O) && console.warn("MUI: You can not use the `minRows` or `maxRows` props when the input `rows` prop is set."), Fe = {
    type: void 0,
    minRows: H,
    maxRows: H,
    ...Fe
  }) : Fe = {
    type: void 0,
    maxRows: O,
    minRows: _,
    ...Fe
  }, st = Rl);
  const Wt = (Te) => {
    Me(Te.animationName === "mui-auto-fill-cancel" ? te.current : {
      value: "x"
    });
  };
  m.useEffect(() => {
    q && q.setAdornedStart(!!X);
  }, [q, X]);
  const ut = {
    ...r,
    color: de.color || "primary",
    disabled: de.disabled,
    endAdornment: g,
    error: de.error,
    focused: de.focused,
    formControl: q,
    fullWidth: h,
    hiddenLabel: de.hiddenLabel,
    multiline: D,
    size: de.size,
    startAdornment: X,
    type: ne
  }, yt = oh(ut), vt = B.root || u.Root || hr, dt = $.root || d.root || {}, jt = B.input || u.Input || gr;
  return Fe = {
    ...Fe,
    ...$.input ?? d.input
  }, /* @__PURE__ */ x.jsxs(m.Fragment, {
    children: [!S && typeof Zs == "function" && // For Emotion/Styled-components, InputGlobalStyles will be a function
    // For Pigment CSS, this has no effect because the InputGlobalStyles will be null.
    (Qs || (Qs = /* @__PURE__ */ x.jsx(Zs, {}))), /* @__PURE__ */ x.jsxs(vt, {
      ...dt,
      ref: o,
      onClick: le,
      ...F,
      ...!Ao(vt) && {
        ownerState: {
          ...ut,
          ...dt.ownerState
        }
      },
      className: ie(yt.root, dt.className, l, V && "MuiInputBase-readOnly"),
      children: [X, /* @__PURE__ */ x.jsx(pr.Provider, {
        value: null,
        children: /* @__PURE__ */ x.jsx(jt, {
          "aria-invalid": de.error,
          "aria-describedby": i,
          autoComplete: s,
          autoFocus: a,
          defaultValue: p,
          disabled: de.disabled,
          id: C,
          onAnimationStart: Wt,
          name: A,
          placeholder: j,
          readOnly: V,
          required: de.required,
          rows: H,
          value: K,
          onKeyDown: R,
          onKeyUp: k,
          type: ne,
          ...Fe,
          ...!Ao(jt) && {
            as: st,
            ownerState: {
              ...ut,
              ...Fe.ownerState
            }
          },
          ref: U,
          className: ie(yt.input, Fe.className, V && "MuiInputBase-readOnly"),
          onBlur: Xe,
          onChange: Be,
          onFocus: Pe
        })
      }), g, ee ? ee({
        ...de,
        startAdornment: X
      }) : null]
    })]
  });
});
Un.NODE_ENV !== "production" && (br.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  "aria-describedby": n.string,
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: n.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: n.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: n.oneOfType([n.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), n.string]),
  /**
   * The components used for each slot inside.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: n.shape({
    Input: n.elementType,
    Root: n.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: n.shape({
    input: n.object,
    root: n.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: n.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: n.bool,
  /**
   * If `true`, GlobalStyles for the auto-fill keyframes will not be injected/removed on mount/unmount. Make sure to inject them at the top of your application.
   * This option is intended to help with boosting the initial rendering performance if you are loading a big amount of Input components at once.
   * @default false
   */
  disableInjectingGlobalStyles: n.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: n.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: n.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: n.bool,
  /**
   * The id of the `input` element.
   */
  id: n.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: Ai,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: n.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: Mt,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: n.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: n.oneOfType([n.number, n.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: n.oneOfType([n.number, n.string]),
  /**
   * If `true`, a [TextareaAutosize](https://mui.com/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: n.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: n.string,
  /**
   * Callback fired when the `input` is blurred.
   *
   * Notice that the first argument (event) might be undefined.
   */
  onBlur: n.func,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: n.func,
  /**
   * @ignore
   */
  onClick: n.func,
  /**
   * @ignore
   */
  onFocus: n.func,
  /**
   * Callback fired when the `input` doesn't satisfy its constraints.
   */
  onInvalid: n.func,
  /**
   * @ignore
   */
  onKeyDown: n.func,
  /**
   * @ignore
   */
  onKeyUp: n.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: n.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: n.bool,
  /**
   * @ignore
   */
  renderSuffix: n.func,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: n.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: n.oneOfType([n.number, n.string]),
  /**
   * The size of the component.
   */
  size: n.oneOfType([n.oneOf(["medium", "small"]), n.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: n.shape({
    input: n.object,
    root: n.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: n.shape({
    input: n.elementType,
    root: n.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: n.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#input_types).
   * @default 'text'
   */
  type: n.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: n.any
});
function rh(e) {
  return ge("MuiInput", e);
}
const Mn = {
  ...Cn,
  ...fe("MuiInput", ["root", "underline", "input"])
};
function ih(e) {
  return ge("MuiOutlinedInput", e);
}
const Pt = {
  ...Cn,
  ...fe("MuiOutlinedInput", ["root", "notchedOutline", "input"])
};
function sh(e) {
  return ge("MuiFilledInput", e);
}
const Qt = {
  ...Cn,
  ...fe("MuiFilledInput", ["root", "underline", "input", "adornedStart", "adornedEnd", "sizeSmall", "multiline", "hiddenLabel"])
}, ah = zt(/* @__PURE__ */ x.jsx("path", {
  d: "M7 10l5 5 5-5z"
}), "ArrowDropDown");
function lh(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function $l(e, t, o, r, i) {
  const s = e[t], a = i || t;
  if (s == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let l;
  const c = s.type;
  return typeof c == "function" && !lh(c) && (l = "Did you accidentally use a plain function component for an element instead?"), l !== void 0 ? new Error(`Invalid ${r} \`${a}\` supplied to \`${o}\`. Expected an element that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const kn = an(n.element, $l);
kn.isRequired = an(n.element.isRequired, $l);
var ch = {};
const uh = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, zo = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = On(), i = {
    enter: r.transitions.duration.enteringScreen,
    exit: r.transitions.duration.leavingScreen
  }, {
    addEndListener: s,
    appear: a = !0,
    children: l,
    easing: c,
    in: u,
    onEnter: d,
    onEntered: p,
    onEntering: v,
    onExit: S,
    onExited: g,
    onExiting: y,
    style: h,
    timeout: C = i,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: w = Nt,
    ...E
  } = t, T = m.useRef(null), b = Ze(T, Pn(l), o), O = (R) => (k) => {
    if (R) {
      const j = T.current;
      k === void 0 ? R(j) : R(j, k);
    }
  }, _ = O(v), D = O((R, k) => {
    hl(R);
    const j = jo({
      style: h,
      timeout: C,
      easing: c
    }, {
      mode: "enter"
    });
    R.style.webkitTransition = r.transitions.create("opacity", j), R.style.transition = r.transitions.create("opacity", j), d && d(R, k);
  }), A = O(p), L = O(y), z = O((R) => {
    const k = jo({
      style: h,
      timeout: C,
      easing: c
    }, {
      mode: "exit"
    });
    R.style.webkitTransition = r.transitions.create("opacity", k), R.style.transition = r.transitions.create("opacity", k), S && S(R);
  }), f = O(g), I = (R) => {
    s && s(T.current, R);
  };
  return /* @__PURE__ */ x.jsx(w, {
    appear: a,
    in: u,
    nodeRef: T,
    onEnter: D,
    onEntered: A,
    onEntering: _,
    onExit: z,
    onExited: f,
    onExiting: L,
    addEndListener: I,
    timeout: C,
    ...E,
    children: (R, {
      ownerState: k,
      ...j
    }) => /* @__PURE__ */ m.cloneElement(l, {
      style: {
        opacity: 0,
        visibility: R === "exited" && !u ? "hidden" : void 0,
        ...uh[R],
        ...h,
        ...l.props.style
      },
      ref: b,
      ...j
    })
  });
});
ch.NODE_ENV !== "production" && (zo.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: n.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: n.bool,
  /**
   * A single child content element.
   */
  children: kn.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: n.oneOfType([n.shape({
    enter: n.string,
    exit: n.string
  }), n.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: n.bool,
  /**
   * @ignore
   */
  onEnter: n.func,
  /**
   * @ignore
   */
  onEntered: n.func,
  /**
   * @ignore
   */
  onEntering: n.func,
  /**
   * @ignore
   */
  onExit: n.func,
  /**
   * @ignore
   */
  onExited: n.func,
  /**
   * @ignore
   */
  onExiting: n.func,
  /**
   * @ignore
   */
  style: n.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  timeout: n.oneOfType([n.number, n.shape({
    appear: n.number,
    enter: n.number,
    exit: n.number
  })])
});
function dh(e) {
  return ge("MuiBackdrop", e);
}
fe("MuiBackdrop", ["root", "invisible"]);
var ph = {};
const fh = (e) => {
  const {
    classes: t,
    invisible: o
  } = e;
  return ye({
    root: ["root", o && "invisible"]
  }, dh, t);
}, mh = G("div", {
  name: "MuiBackdrop",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.invisible && t.invisible];
  }
})({
  position: "fixed",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  WebkitTapHighlightColor: "transparent",
  variants: [{
    props: {
      invisible: !0
    },
    style: {
      backgroundColor: "transparent"
    }
  }]
}), Bi = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = ve({
    props: t,
    name: "MuiBackdrop"
  }), {
    children: i,
    className: s,
    component: a = "div",
    invisible: l = !1,
    open: c,
    components: u = {},
    componentsProps: d = {},
    slotProps: p = {},
    slots: v = {},
    TransitionComponent: S,
    transitionDuration: g,
    ...y
  } = r, h = {
    ...r,
    component: a,
    invisible: l
  }, C = fh(h), w = {
    transition: S,
    root: u.Root,
    ...v
  }, E = {
    ...d,
    ...p
  }, T = {
    component: a,
    slots: w,
    slotProps: E
  }, [b, O] = he("root", {
    elementType: mh,
    externalForwardedProps: T,
    className: ie(C.root, s),
    ownerState: h
  }), [_, D] = he("transition", {
    elementType: zo,
    externalForwardedProps: T,
    ownerState: h
  });
  return /* @__PURE__ */ x.jsx(_, {
    in: c,
    timeout: g,
    ...y,
    ...D,
    children: /* @__PURE__ */ x.jsx(b, {
      "aria-hidden": !0,
      ...O,
      ref: o,
      children: i
    })
  });
});
ph.NODE_ENV !== "production" && (Bi.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * The components used for each slot inside.
   *
   * @deprecated Use the `slots` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: n.shape({
    Root: n.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated Use the `slotProps` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: n.shape({
    root: n.object
  }),
  /**
   * If `true`, the backdrop is invisible.
   * It can be used when rendering a popover or a custom select component.
   * @default false
   */
  invisible: n.bool,
  /**
   * If `true`, the component is shown.
   */
  open: n.bool.isRequired,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: n.shape({
    root: n.oneOfType([n.func, n.object]),
    transition: n.oneOfType([n.func, n.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: n.shape({
    root: n.elementType,
    transition: n.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Fade
   * @deprecated Use `slots.transition` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  TransitionComponent: n.elementType,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: n.oneOfType([n.number, n.shape({
    appear: n.number,
    enter: n.number,
    exit: n.number
  })])
});
const hh = fe("MuiBox", ["root"]);
var gh = {};
const bh = sl(), Je = qd({
  themeId: Ho,
  defaultTheme: bh,
  defaultClassName: hh.root,
  generateClassName: Ha.generate
});
gh.NODE_ENV !== "production" && (Je.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: n.node,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object])
});
function yh(e) {
  return ge("MuiButton", e);
}
const Zt = fe("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge", "loading", "loadingWrapper", "loadingIconPlaceholder", "loadingIndicator", "loadingPositionCenter", "loadingPositionStart", "loadingPositionEnd"]);
var vh = {};
const kl = /* @__PURE__ */ m.createContext({});
vh.NODE_ENV !== "production" && (kl.displayName = "ButtonGroupContext");
var xh = {};
const Il = /* @__PURE__ */ m.createContext(void 0);
xh.NODE_ENV !== "production" && (Il.displayName = "ButtonGroupButtonContext");
var Sh = {};
const Th = (e) => {
  const {
    color: t,
    disableElevation: o,
    fullWidth: r,
    size: i,
    variant: s,
    loading: a,
    loadingPosition: l,
    classes: c
  } = e, u = {
    root: ["root", a && "loading", s, `${s}${W(t)}`, `size${W(i)}`, `${s}Size${W(i)}`, `color${W(t)}`, o && "disableElevation", r && "fullWidth", a && `loadingPosition${W(l)}`],
    startIcon: ["icon", "startIcon", `iconSize${W(i)}`],
    endIcon: ["icon", "endIcon", `iconSize${W(i)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  }, d = ye(u, yh, c);
  return {
    ...c,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...d
  };
}, _l = [{
  props: {
    size: "small"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 18
    }
  }
}, {
  props: {
    size: "medium"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 20
    }
  }
}, {
  props: {
    size: "large"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 22
    }
  }
}], Ch = G(Yt, {
  shouldForwardProp: (e) => bt(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, t[o.variant], t[`${o.variant}${W(o.color)}`], t[`size${W(o.size)}`], t[`${o.variant}Size${W(o.size)}`], o.color === "inherit" && t.colorInherit, o.disableElevation && t.disableElevation, o.fullWidth && t.fullWidth, o.loading && t.loading];
  }
})(xe(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? e.palette.grey[300] : e.palette.grey[800], o = e.palette.mode === "light" ? e.palette.grey.A100 : e.palette.grey[700];
  return {
    ...e.typography.button,
    minWidth: 64,
    padding: "6px 16px",
    border: 0,
    borderRadius: (e.vars || e).shape.borderRadius,
    transition: e.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
      duration: e.transitions.duration.short
    }),
    "&:hover": {
      textDecoration: "none"
    },
    [`&.${Zt.disabled}`]: {
      color: (e.vars || e).palette.action.disabled
    },
    variants: [{
      props: {
        variant: "contained"
      },
      style: {
        color: "var(--variant-containedColor)",
        backgroundColor: "var(--variant-containedBg)",
        boxShadow: (e.vars || e).shadows[2],
        "&:hover": {
          boxShadow: (e.vars || e).shadows[4],
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            boxShadow: (e.vars || e).shadows[2]
          }
        },
        "&:active": {
          boxShadow: (e.vars || e).shadows[8]
        },
        [`&.${Zt.focusVisible}`]: {
          boxShadow: (e.vars || e).shadows[6]
        },
        [`&.${Zt.disabled}`]: {
          color: (e.vars || e).palette.action.disabled,
          boxShadow: (e.vars || e).shadows[0],
          backgroundColor: (e.vars || e).palette.action.disabledBackground
        }
      }
    }, {
      props: {
        variant: "outlined"
      },
      style: {
        padding: "5px 15px",
        border: "1px solid currentColor",
        borderColor: "var(--variant-outlinedBorder, currentColor)",
        backgroundColor: "var(--variant-outlinedBg)",
        color: "var(--variant-outlinedColor)",
        [`&.${Zt.disabled}`]: {
          border: `1px solid ${(e.vars || e).palette.action.disabledBackground}`
        }
      }
    }, {
      props: {
        variant: "text"
      },
      style: {
        padding: "6px 8px",
        color: "var(--variant-textColor)",
        backgroundColor: "var(--variant-textBg)"
      }
    }, ...Object.entries(e.palette).filter(tt()).map(([r]) => ({
      props: {
        color: r
      },
      style: {
        "--variant-textColor": (e.vars || e).palette[r].main,
        "--variant-outlinedColor": (e.vars || e).palette[r].main,
        "--variant-outlinedBorder": e.alpha((e.vars || e).palette[r].main, 0.5),
        "--variant-containedColor": (e.vars || e).palette[r].contrastText,
        "--variant-containedBg": (e.vars || e).palette[r].main,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": (e.vars || e).palette[r].dark,
            "--variant-textBg": e.alpha((e.vars || e).palette[r].main, (e.vars || e).palette.action.hoverOpacity),
            "--variant-outlinedBorder": (e.vars || e).palette[r].main,
            "--variant-outlinedBg": e.alpha((e.vars || e).palette[r].main, (e.vars || e).palette.action.hoverOpacity)
          }
        }
      }
    })), {
      props: {
        color: "inherit"
      },
      style: {
        color: "inherit",
        borderColor: "currentColor",
        "--variant-containedBg": e.vars ? e.vars.palette.Button.inheritContainedBg : t,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": e.vars ? e.vars.palette.Button.inheritContainedHoverBg : o,
            "--variant-textBg": e.alpha((e.vars || e).palette.text.primary, (e.vars || e).palette.action.hoverOpacity),
            "--variant-outlinedBg": e.alpha((e.vars || e).palette.text.primary, (e.vars || e).palette.action.hoverOpacity)
          }
        }
      }
    }, {
      props: {
        size: "small",
        variant: "text"
      },
      style: {
        padding: "4px 5px",
        fontSize: e.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "text"
      },
      style: {
        padding: "8px 11px",
        fontSize: e.typography.pxToRem(15)
      }
    }, {
      props: {
        size: "small",
        variant: "outlined"
      },
      style: {
        padding: "3px 9px",
        fontSize: e.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "outlined"
      },
      style: {
        padding: "7px 21px",
        fontSize: e.typography.pxToRem(15)
      }
    }, {
      props: {
        size: "small",
        variant: "contained"
      },
      style: {
        padding: "4px 10px",
        fontSize: e.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "contained"
      },
      style: {
        padding: "8px 22px",
        fontSize: e.typography.pxToRem(15)
      }
    }, {
      props: {
        disableElevation: !0
      },
      style: {
        boxShadow: "none",
        "&:hover": {
          boxShadow: "none"
        },
        [`&.${Zt.focusVisible}`]: {
          boxShadow: "none"
        },
        "&:active": {
          boxShadow: "none"
        },
        [`&.${Zt.disabled}`]: {
          boxShadow: "none"
        }
      }
    }, {
      props: {
        fullWidth: !0
      },
      style: {
        width: "100%"
      }
    }, {
      props: {
        loadingPosition: "center"
      },
      style: {
        transition: e.transitions.create(["background-color", "box-shadow", "border-color"], {
          duration: e.transitions.duration.short
        }),
        [`&.${Zt.loading}`]: {
          color: "transparent"
        }
      }
    }]
  };
})), Eh = G("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.startIcon, o.loading && t.startIconLoadingStart, t[`iconSize${W(o.size)}`]];
  }
})(({
  theme: e
}) => ({
  display: "inherit",
  marginRight: 8,
  marginLeft: -4,
  variants: [{
    props: {
      size: "small"
    },
    style: {
      marginLeft: -2
    }
  }, {
    props: {
      loadingPosition: "start",
      loading: !0
    },
    style: {
      transition: e.transitions.create(["opacity"], {
        duration: e.transitions.duration.short
      }),
      opacity: 0
    }
  }, {
    props: {
      loadingPosition: "start",
      loading: !0,
      fullWidth: !0
    },
    style: {
      marginRight: -8
    }
  }, ..._l]
})), wh = G("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.endIcon, o.loading && t.endIconLoadingEnd, t[`iconSize${W(o.size)}`]];
  }
})(({
  theme: e
}) => ({
  display: "inherit",
  marginRight: -4,
  marginLeft: 8,
  variants: [{
    props: {
      size: "small"
    },
    style: {
      marginRight: -2
    }
  }, {
    props: {
      loadingPosition: "end",
      loading: !0
    },
    style: {
      transition: e.transitions.create(["opacity"], {
        duration: e.transitions.duration.short
      }),
      opacity: 0
    }
  }, {
    props: {
      loadingPosition: "end",
      loading: !0,
      fullWidth: !0
    },
    style: {
      marginLeft: -8
    }
  }, ..._l]
})), Oh = G("span", {
  name: "MuiButton",
  slot: "LoadingIndicator"
})(({
  theme: e
}) => ({
  display: "none",
  position: "absolute",
  visibility: "visible",
  variants: [{
    props: {
      loading: !0
    },
    style: {
      display: "flex"
    }
  }, {
    props: {
      loadingPosition: "start"
    },
    style: {
      left: 14
    }
  }, {
    props: {
      loadingPosition: "start",
      size: "small"
    },
    style: {
      left: 10
    }
  }, {
    props: {
      variant: "text",
      loadingPosition: "start"
    },
    style: {
      left: 6
    }
  }, {
    props: {
      loadingPosition: "center"
    },
    style: {
      left: "50%",
      transform: "translate(-50%)",
      color: (e.vars || e).palette.action.disabled
    }
  }, {
    props: {
      loadingPosition: "end"
    },
    style: {
      right: 14
    }
  }, {
    props: {
      loadingPosition: "end",
      size: "small"
    },
    style: {
      right: 10
    }
  }, {
    props: {
      variant: "text",
      loadingPosition: "end"
    },
    style: {
      right: 6
    }
  }, {
    props: {
      loadingPosition: "start",
      fullWidth: !0
    },
    style: {
      position: "relative",
      left: -10
    }
  }, {
    props: {
      loadingPosition: "end",
      fullWidth: !0
    },
    style: {
      position: "relative",
      right: -10
    }
  }]
})), ea = G("span", {
  name: "MuiButton",
  slot: "LoadingIconPlaceholder"
})({
  display: "inline-block",
  width: "1em",
  height: "1em"
}), ot = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = m.useContext(kl), i = m.useContext(Il), s = to(r, t), a = ve({
    props: s,
    name: "MuiButton"
  }), {
    children: l,
    color: c = "primary",
    component: u = "button",
    className: d,
    disabled: p = !1,
    disableElevation: v = !1,
    disableFocusRipple: S = !1,
    endIcon: g,
    focusVisibleClassName: y,
    fullWidth: h = !1,
    id: C,
    loading: w = null,
    loadingIndicator: E,
    loadingPosition: T = "center",
    size: b = "medium",
    startIcon: O,
    type: _,
    variant: D = "text",
    ...A
  } = a, L = uo(C), z = E ?? /* @__PURE__ */ x.jsx(Di, {
    "aria-labelledby": L,
    color: "inherit",
    size: 16
  }), f = {
    ...a,
    color: c,
    component: u,
    disabled: p,
    disableElevation: v,
    disableFocusRipple: S,
    fullWidth: h,
    loading: w,
    loadingIndicator: z,
    loadingPosition: T,
    size: b,
    type: _,
    variant: D
  }, I = Th(f), R = (O || w && T === "start") && /* @__PURE__ */ x.jsx(Eh, {
    className: I.startIcon,
    ownerState: f,
    children: O || /* @__PURE__ */ x.jsx(ea, {
      className: I.loadingIconPlaceholder,
      ownerState: f
    })
  }), k = (g || w && T === "end") && /* @__PURE__ */ x.jsx(wh, {
    className: I.endIcon,
    ownerState: f,
    children: g || /* @__PURE__ */ x.jsx(ea, {
      className: I.loadingIconPlaceholder,
      ownerState: f
    })
  }), j = i || "", V = typeof w == "boolean" ? (
    // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ x.jsx("span", {
      className: I.loadingWrapper,
      style: {
        display: "contents"
      },
      children: w && /* @__PURE__ */ x.jsx(Oh, {
        className: I.loadingIndicator,
        ownerState: f,
        children: z
      })
    })
  ) : null;
  return /* @__PURE__ */ x.jsxs(Ch, {
    ownerState: f,
    className: ie(r.className, I.root, d, j),
    component: u,
    disabled: p || w,
    focusRipple: !S,
    focusVisibleClassName: ie(I.focusVisible, y),
    ref: o,
    type: _,
    id: w ? L : C,
    ...A,
    classes: I,
    children: [R, T !== "end" && V, l, T === "end" && V, k]
  });
});
Sh.NODE_ENV !== "production" && (ot.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: n.oneOfType([n.oneOf(["inherit", "primary", "secondary", "success", "error", "info", "warning"]), n.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: n.bool,
  /**
   * If `true`, no elevation is used.
   * @default false
   */
  disableElevation: n.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: n.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: n.bool,
  /**
   * Element placed after the children.
   */
  endIcon: n.node,
  /**
   * @ignore
   */
  focusVisibleClassName: n.string,
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth: n.bool,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: n.string,
  /**
   * @ignore
   */
  id: n.string,
  /**
   * If `true`, the loading indicator is visible and the button is disabled.
   * If `true | false`, the loading wrapper is always rendered before the children to prevent [Google Translation Crash](https://github.com/mui/material-ui/issues/27853).
   * @default null
   */
  loading: n.bool,
  /**
   * Element placed before the children if the button is in loading state.
   * The node should contain an element with `role="progressbar"` with an accessible name.
   * By default, it renders a `CircularProgress` that is labeled by the button itself.
   * @default <CircularProgress color="inherit" size={16} />
   */
  loadingIndicator: n.node,
  /**
   * The loading indicator can be positioned on the start, end, or the center of the button.
   * @default 'center'
   */
  loadingPosition: n.oneOf(["center", "end", "start"]),
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: n.oneOfType([n.oneOf(["small", "medium", "large"]), n.string]),
  /**
   * Element placed before the children.
   */
  startIcon: n.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * @ignore
   */
  type: n.oneOfType([n.oneOf(["button", "reset", "submit"]), n.string]),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: n.oneOfType([n.oneOf(["contained", "outlined", "text"]), n.string])
});
var Nl = {};
function ta(e) {
  return e.substring(2).toLowerCase();
}
function Ph(e, t) {
  return t.documentElement.clientWidth < e.clientX || t.documentElement.clientHeight < e.clientY;
}
function Wo(e) {
  const {
    children: t,
    disableReactTree: o = !1,
    mouseEvent: r = "onClick",
    onClickAway: i,
    touchEvent: s = "onTouchEnd"
  } = e, a = m.useRef(!1), l = m.useRef(null), c = m.useRef(!1), u = m.useRef(!1);
  m.useEffect(() => (setTimeout(() => {
    c.current = !0;
  }, 0), () => {
    c.current = !1;
  }), []);
  const d = Ze(Pn(t), l), p = ct((g) => {
    const y = u.current;
    u.current = !1;
    const h = nt(l.current);
    if (!c.current || !l.current || "clientX" in g && Ph(g, h))
      return;
    if (a.current) {
      a.current = !1;
      return;
    }
    let C;
    g.composedPath ? C = g.composedPath().includes(l.current) : C = !h.documentElement.contains(
      // @ts-expect-error returns `false` as intended when not dispatched from a Node
      g.target
    ) || l.current.contains(
      // @ts-expect-error returns `false` as intended when not dispatched from a Node
      g.target
    ), !C && (o || !y) && i(g);
  }), v = (g) => (y) => {
    u.current = !0;
    const h = t.props[g];
    h && h(y);
  }, S = {
    ref: d
  };
  return s !== !1 && (S[s] = v(s)), m.useEffect(() => {
    if (s !== !1) {
      const g = ta(s), y = nt(l.current), h = () => {
        a.current = !0;
      };
      return y.addEventListener(g, p), y.addEventListener("touchmove", h), () => {
        y.removeEventListener(g, p), y.removeEventListener("touchmove", h);
      };
    }
  }, [p, s]), r !== !1 && (S[r] = v(r)), m.useEffect(() => {
    if (r !== !1) {
      const g = ta(r), y = nt(l.current);
      return y.addEventListener(g, p), () => {
        y.removeEventListener(g, p);
      };
    }
  }, [p, r]), /* @__PURE__ */ m.cloneElement(t, S);
}
Nl.NODE_ENV !== "production" && (Wo.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The wrapped element.
   */
  children: kn.isRequired,
  /**
   * If `true`, the React tree is ignored and only the DOM tree is considered.
   * This prop changes how portaled elements are handled.
   * @default false
   */
  disableReactTree: n.bool,
  /**
   * The mouse event to listen to. You can disable the listener by providing `false`.
   * @default 'onClick'
   */
  mouseEvent: n.oneOf(["onClick", "onMouseDown", "onMouseUp", "onPointerDown", "onPointerUp", !1]),
  /**
   * Callback fired when a "click away" event is detected.
   */
  onClickAway: n.func.isRequired,
  /**
   * The touch event to listen to. You can disable the listener by providing `false`.
   * @default 'onTouchEnd'
   */
  touchEvent: n.oneOf(["onTouchEnd", "onTouchStart", !1])
});
Nl.NODE_ENV !== "production" && (Wo.propTypes = Ri(Wo.propTypes));
function Ml(e = window) {
  const t = e.document.documentElement.clientWidth;
  return e.innerWidth - t;
}
function Rh(e) {
  const t = nt(e);
  return t.body === e ? Ct(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function Kn(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function na(e) {
  return parseFloat(Ct(e).getComputedStyle(e).paddingRight) || 0;
}
function $h(e) {
  const o = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].includes(e.tagName), r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return o || r;
}
function oa(e, t, o, r, i) {
  const s = [t, o, ...r];
  [].forEach.call(e.children, (a) => {
    const l = !s.includes(a), c = !$h(a);
    l && c && Kn(a, i);
  });
}
function Fr(e, t) {
  let o = -1;
  return e.some((r, i) => t(r) ? (o = i, !0) : !1), o;
}
function kh(e, t) {
  const o = [], r = e.container;
  if (!t.disableScrollLock) {
    if (Rh(r)) {
      const a = Ml(Ct(r));
      o.push({
        value: r.style.paddingRight,
        property: "padding-right",
        el: r
      }), r.style.paddingRight = `${na(r) + a}px`;
      const l = nt(r).querySelectorAll(".mui-fixed");
      [].forEach.call(l, (c) => {
        o.push({
          value: c.style.paddingRight,
          property: "padding-right",
          el: c
        }), c.style.paddingRight = `${na(c) + a}px`;
      });
    }
    let s;
    if (r.parentNode instanceof DocumentFragment)
      s = nt(r).body;
    else {
      const a = r.parentElement, l = Ct(r);
      s = a?.nodeName === "HTML" && l.getComputedStyle(a).overflowY === "scroll" ? a : r;
    }
    o.push({
      value: s.style.overflow,
      property: "overflow",
      el: s
    }, {
      value: s.style.overflowX,
      property: "overflow-x",
      el: s
    }, {
      value: s.style.overflowY,
      property: "overflow-y",
      el: s
    }), s.style.overflow = "hidden";
  }
  return () => {
    o.forEach(({
      value: s,
      el: a,
      property: l
    }) => {
      s ? a.style.setProperty(l, s) : a.style.removeProperty(l);
    });
  };
}
function Ih(e) {
  const t = [];
  return [].forEach.call(e.children, (o) => {
    o.getAttribute("aria-hidden") === "true" && t.push(o);
  }), t;
}
class _h {
  constructor() {
    this.modals = [], this.containers = [];
  }
  add(t, o) {
    let r = this.modals.indexOf(t);
    if (r !== -1)
      return r;
    r = this.modals.length, this.modals.push(t), t.modalRef && Kn(t.modalRef, !1);
    const i = Ih(o);
    oa(o, t.mount, t.modalRef, i, !0);
    const s = Fr(this.containers, (a) => a.container === o);
    return s !== -1 ? (this.containers[s].modals.push(t), r) : (this.containers.push({
      modals: [t],
      container: o,
      restore: null,
      hiddenSiblings: i
    }), r);
  }
  mount(t, o) {
    const r = Fr(this.containers, (s) => s.modals.includes(t)), i = this.containers[r];
    i.restore || (i.restore = kh(i, o));
  }
  remove(t, o = !0) {
    const r = this.modals.indexOf(t);
    if (r === -1)
      return r;
    const i = Fr(this.containers, (a) => a.modals.includes(t)), s = this.containers[i];
    if (s.modals.splice(s.modals.indexOf(t), 1), this.modals.splice(r, 1), s.modals.length === 0)
      s.restore && s.restore(), t.modalRef && Kn(t.modalRef, o), oa(s.container, t.mount, t.modalRef, s.hiddenSiblings, !1), this.containers.splice(i, 1);
    else {
      const a = s.modals[s.modals.length - 1];
      a.modalRef && Kn(a.modalRef, !1);
    }
    return r;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
function yn(e) {
  let t = e.activeElement;
  for (; t?.shadowRoot?.activeElement != null; )
    t = t.shadowRoot.activeElement;
  return t;
}
var Fi = {};
const Nh = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function Mh(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function jh(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let o = t(`[name="${e.name}"]:checked`);
  return o || (o = t(`[name="${e.name}"]`)), o !== e;
}
function Ah(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || jh(e));
}
function Dh(e) {
  const t = [], o = [];
  return Array.from(e.querySelectorAll(Nh)).forEach((r, i) => {
    const s = Mh(r);
    s === -1 || !Ah(r) || (s === 0 ? t.push(r) : o.push({
      documentOrder: i,
      tabIndex: s,
      node: r
    }));
  }), o.sort((r, i) => r.tabIndex === i.tabIndex ? r.documentOrder - i.documentOrder : r.tabIndex - i.tabIndex).map((r) => r.node).concat(t);
}
function Bh() {
  return !0;
}
function Vo(e) {
  const {
    children: t,
    disableAutoFocus: o = !1,
    disableEnforceFocus: r = !1,
    disableRestoreFocus: i = !1,
    getTabbable: s = Dh,
    isEnabled: a = Bh,
    open: l
  } = e, c = m.useRef(!1), u = m.useRef(null), d = m.useRef(null), p = m.useRef(null), v = m.useRef(null), S = m.useRef(!1), g = m.useRef(null), y = Ze(Pn(t), g), h = m.useRef(null);
  m.useEffect(() => {
    !l || !g.current || (S.current = !o);
  }, [o, l]), m.useEffect(() => {
    if (!l || !g.current)
      return;
    const E = nt(g.current), T = yn(E);
    return g.current.contains(T) || (g.current.hasAttribute("tabIndex") || (Fi.NODE_ENV !== "production" && console.error(["MUI: The modal content node does not accept focus.", 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'].join(`
`)), g.current.setAttribute("tabIndex", "-1")), S.current && g.current.focus()), () => {
      i || (p.current && p.current.focus && (c.current = !0, p.current.focus()), p.current = null);
    };
  }, [l]), m.useEffect(() => {
    if (!l || !g.current)
      return;
    const E = nt(g.current), T = (_) => {
      if (h.current = _, r || !a() || _.key !== "Tab")
        return;
      yn(E) === g.current && _.shiftKey && (c.current = !0, d.current && d.current.focus());
    }, b = () => {
      const _ = g.current;
      if (_ === null)
        return;
      const D = yn(E);
      if (!E.hasFocus() || !a() || c.current) {
        c.current = !1;
        return;
      }
      if (_.contains(D) || r && D !== u.current && D !== d.current)
        return;
      if (D !== v.current)
        v.current = null;
      else if (v.current !== null)
        return;
      if (!S.current)
        return;
      let A = [];
      if ((D === u.current || D === d.current) && (A = s(g.current)), A.length > 0) {
        const L = !!(h.current?.shiftKey && h.current?.key === "Tab"), z = A[0], f = A[A.length - 1];
        typeof z != "string" && typeof f != "string" && (L ? f.focus() : z.focus());
      } else
        _.focus();
    };
    E.addEventListener("focusin", b), E.addEventListener("keydown", T, !0);
    const O = setInterval(() => {
      const _ = yn(E);
      _ && _.tagName === "BODY" && b();
    }, 50);
    return () => {
      clearInterval(O), E.removeEventListener("focusin", b), E.removeEventListener("keydown", T, !0);
    };
  }, [o, r, i, a, l, s]);
  const C = (E) => {
    p.current === null && (p.current = E.relatedTarget), S.current = !0, v.current = E.target;
    const T = t.props.onFocus;
    T && T(E);
  }, w = (E) => {
    p.current === null && (p.current = E.relatedTarget), S.current = !0;
  };
  return /* @__PURE__ */ x.jsxs(m.Fragment, {
    children: [/* @__PURE__ */ x.jsx("div", {
      tabIndex: l ? 0 : -1,
      onFocus: w,
      ref: u,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ m.cloneElement(t, {
      ref: y,
      onFocus: C
    }), /* @__PURE__ */ x.jsx("div", {
      tabIndex: l ? 0 : -1,
      onFocus: w,
      ref: d,
      "data-testid": "sentinelEnd"
    })]
  });
}
Fi.NODE_ENV !== "production" && (Vo.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A single child content element.
   */
  children: kn,
  /**
   * If `true`, the focus trap will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any focus trap children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: n.bool,
  /**
   * If `true`, the focus trap will not prevent focus from leaving the focus trap while open.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: n.bool,
  /**
   * If `true`, the focus trap will not restore focus to previously focused element once
   * focus trap is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: n.bool,
  /**
   * Returns an array of ordered tabbable nodes (i.e. in tab order) within the root.
   * For instance, you can provide the "tabbable" npm dependency.
   * @param {HTMLElement} root
   */
  getTabbable: n.func,
  /**
   * This prop extends the `open` prop.
   * It allows to toggle the open state without having to wait for a rerender when changing the `open` prop.
   * This prop should be memoized.
   * It can be used to support multiple focus trap mounted at the same time.
   * @default function defaultIsEnabled(): boolean {
   *   return true;
   * }
   */
  isEnabled: n.func,
  /**
   * If `true`, focus is locked.
   */
  open: n.bool.isRequired
});
Fi.NODE_ENV !== "production" && (Vo.propTypes = Ri(Vo.propTypes));
function Fh(e) {
  return typeof e == "function" ? e() : e;
}
function Lh(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const ra = () => {
}, So = new _h();
function zh(e) {
  const {
    container: t,
    disableEscapeKeyDown: o = !1,
    disableScrollLock: r = !1,
    closeAfterTransition: i = !1,
    onTransitionEnter: s,
    onTransitionExited: a,
    children: l,
    onClose: c,
    open: u,
    rootRef: d
  } = e, p = m.useRef({}), v = m.useRef(null), S = m.useRef(null), g = Ze(S, d), [y, h] = m.useState(!u), C = Lh(l);
  let w = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (w = !1);
  const E = () => nt(v.current), T = () => (p.current.modalRef = S.current, p.current.mount = v.current, p.current), b = () => {
    So.mount(T(), {
      disableScrollLock: r
    }), S.current && (S.current.scrollTop = 0);
  }, O = ct(() => {
    const k = Fh(t) || E().body;
    So.add(T(), k), S.current && b();
  }), _ = () => So.isTopModal(T()), D = ct((k) => {
    v.current = k, k && (u && _() ? b() : S.current && Kn(S.current, w));
  }), A = m.useCallback(() => {
    So.remove(T(), w);
  }, [w]);
  m.useEffect(() => () => {
    A();
  }, [A]), m.useEffect(() => {
    u ? O() : (!C || !i) && A();
  }, [u, A, C, i, O]);
  const L = (k) => (j) => {
    k.onKeyDown?.(j), !(j.key !== "Escape" || j.which === 229 || // Wait until IME is settled.
    !_()) && (o || (j.stopPropagation(), c && c(j, "escapeKeyDown")));
  }, z = (k) => (j) => {
    k.onClick?.(j), j.target === j.currentTarget && c && c(j, "backdropClick");
  };
  return {
    getRootProps: (k = {}) => {
      const j = Do(e);
      delete j.onTransitionEnter, delete j.onTransitionExited;
      const V = {
        ...j,
        ...k
      };
      return {
        /*
         * Marking an element with the role presentation indicates to assistive technology
         * that this element should be ignored; it exists to support the web application and
         * is not meant for humans to interact with directly.
         * https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md
         */
        role: "presentation",
        ...V,
        onKeyDown: L(V),
        ref: g
      };
    },
    getBackdropProps: (k = {}) => {
      const j = k;
      return {
        "aria-hidden": !0,
        ...j,
        onClick: z(j),
        open: u
      };
    },
    getTransitionProps: () => {
      const k = () => {
        h(!1), s && s();
      }, j = () => {
        h(!0), a && a(), i && A();
      };
      return {
        onEnter: Ds(k, l?.props.onEnter ?? ra),
        onExited: Ds(j, l?.props.onExited ?? ra)
      };
    },
    rootRef: g,
    portalRef: D,
    isTopModal: _,
    exited: y,
    hasTransition: C
  };
}
function Wh(e) {
  return ge("MuiModal", e);
}
fe("MuiModal", ["root", "hidden", "backdrop"]);
var Vh = {};
const Uh = (e) => {
  const {
    open: t,
    exited: o,
    classes: r
  } = e;
  return ye({
    root: ["root", !t && o && "hidden"],
    backdrop: ["backdrop"]
  }, Wh, r);
}, Hh = G("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, !o.open && o.exited && t.hidden];
  }
})(xe(({
  theme: e
}) => ({
  position: "fixed",
  zIndex: (e.vars || e).zIndex.modal,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  variants: [{
    props: ({
      ownerState: t
    }) => !t.open && t.exited,
    style: {
      visibility: "hidden"
    }
  }]
}))), qh = G(Bi, {
  name: "MuiModal",
  slot: "Backdrop"
})({
  zIndex: -1
}), Li = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = ve({
    name: "MuiModal",
    props: t
  }), {
    BackdropComponent: i = qh,
    BackdropProps: s,
    classes: a,
    className: l,
    closeAfterTransition: c = !1,
    children: u,
    container: d,
    component: p,
    components: v = {},
    componentsProps: S = {},
    disableAutoFocus: g = !1,
    disableEnforceFocus: y = !1,
    disableEscapeKeyDown: h = !1,
    disablePortal: C = !1,
    disableRestoreFocus: w = !1,
    disableScrollLock: E = !1,
    hideBackdrop: T = !1,
    keepMounted: b = !1,
    onClose: O,
    onTransitionEnter: _,
    onTransitionExited: D,
    open: A,
    slotProps: L = {},
    slots: z = {},
    // eslint-disable-next-line react/prop-types
    theme: f,
    ...I
  } = r, R = {
    ...r,
    closeAfterTransition: c,
    disableAutoFocus: g,
    disableEnforceFocus: y,
    disableEscapeKeyDown: h,
    disablePortal: C,
    disableRestoreFocus: w,
    disableScrollLock: E,
    hideBackdrop: T,
    keepMounted: b
  }, {
    getRootProps: k,
    getBackdropProps: j,
    getTransitionProps: V,
    portalRef: ee,
    isTopModal: H,
    exited: se,
    hasTransition: $
  } = zh({
    ...R,
    rootRef: o
  }), B = {
    ...R,
    exited: se
  }, X = Uh(B), ne = {};
  if (u.props.tabIndex === void 0 && (ne.tabIndex = "-1"), $) {
    const {
      onEnter: Y,
      onExited: U
    } = V();
    ne.onEnter = Y, ne.onExited = U;
  }
  const Q = {
    slots: {
      root: v.Root,
      backdrop: v.Backdrop,
      ...z
    },
    slotProps: {
      ...S,
      ...L
    }
  }, [F, K] = he("root", {
    ref: o,
    elementType: Hh,
    externalForwardedProps: {
      ...Q,
      ...I,
      component: p
    },
    getSlotProps: k,
    ownerState: B,
    className: ie(l, X?.root, !B.open && B.exited && X?.hidden)
  }), [re, te] = he("backdrop", {
    ref: s?.ref,
    elementType: i,
    externalForwardedProps: Q,
    shouldForwardComponentProp: !0,
    additionalProps: s,
    getSlotProps: (Y) => j({
      ...Y,
      onClick: (U) => {
        Y?.onClick && Y.onClick(U);
      }
    }),
    className: ie(s?.className, X?.backdrop),
    ownerState: B
  });
  return !b && !A && (!$ || se) ? null : /* @__PURE__ */ x.jsx(Fo, {
    ref: ee,
    container: d,
    disablePortal: C,
    children: /* @__PURE__ */ x.jsxs(F, {
      ...K,
      children: [!T && i ? /* @__PURE__ */ x.jsx(re, {
        ...te
      }) : null, /* @__PURE__ */ x.jsx(Vo, {
        disableEnforceFocus: y,
        disableAutoFocus: g,
        disableRestoreFocus: w,
        isEnabled: H,
        open: A,
        children: /* @__PURE__ */ m.cloneElement(u, ne)
      })]
    })
  });
});
Vh.NODE_ENV !== "production" && (Li.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A backdrop component. This prop enables custom backdrop rendering.
   * @deprecated Use `slots.backdrop` instead. While this prop currently works, it will be removed in the next major version.
   * Use the `slots.backdrop` prop to make your application ready for the next version of Material UI.
   * @default styled(Backdrop, {
   *   name: 'MuiModal',
   *   slot: 'Backdrop',
   * })({
   *   zIndex: -1,
   * })
   */
  BackdropComponent: n.elementType,
  /**
   * Props applied to the [`Backdrop`](https://mui.com/material-ui/api/backdrop/) element.
   * @deprecated Use `slotProps.backdrop` instead.
   */
  BackdropProps: n.object,
  /**
   * A single child content element.
   */
  children: kn.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * When set to true the Modal waits until a nested Transition is completed before closing.
   * @default false
   */
  closeAfterTransition: n.bool,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * The components used for each slot inside.
   *
   * @deprecated Use the `slots` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: n.shape({
    Backdrop: n.elementType,
    Root: n.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated Use the `slotProps` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: n.shape({
    backdrop: n.oneOfType([n.func, n.object]),
    root: n.oneOfType([n.func, n.object])
  }),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: n.oneOfType([no, n.func]),
  /**
   * If `true`, the modal will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any modal children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: n.bool,
  /**
   * If `true`, the modal will not prevent focus from leaving the modal while open.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: n.bool,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: n.bool,
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: n.bool,
  /**
   * If `true`, the modal will not restore focus to previously focused element once
   * modal is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: n.bool,
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: n.bool,
  /**
   * If `true`, the backdrop is not rendered.
   * @default false
   */
  hideBackdrop: n.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Modal.
   * @default false
   */
  keepMounted: n.bool,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: n.func,
  /**
   * A function called when a transition enters.
   */
  onTransitionEnter: n.func,
  /**
   * A function called when a transition has exited.
   */
  onTransitionExited: n.func,
  /**
   * If `true`, the component is shown.
   */
  open: n.bool.isRequired,
  /**
   * The props used for each slot inside the Modal.
   * @default {}
   */
  slotProps: n.shape({
    backdrop: n.oneOfType([n.func, n.object]),
    root: n.oneOfType([n.func, n.object])
  }),
  /**
   * The components used for each slot inside the Modal.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: n.shape({
    backdrop: n.elementType,
    root: n.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object])
});
function Yh(e) {
  return ge("MuiDialog", e);
}
const Lr = fe("MuiDialog", ["root", "backdrop", "scrollPaper", "scrollBody", "container", "paper", "paperScrollPaper", "paperScrollBody", "paperWidthFalse", "paperWidthXs", "paperWidthSm", "paperWidthMd", "paperWidthLg", "paperWidthXl", "paperFullWidth", "paperFullScreen"]);
var Kh = {};
const zi = /* @__PURE__ */ m.createContext({});
Kh.NODE_ENV !== "production" && (zi.displayName = "DialogContext");
var Gh = {};
const Xh = G(Bi, {
  name: "MuiDialog",
  slot: "Backdrop"
})({
  // Improve scrollable dialog support.
  zIndex: -1
}), Jh = (e) => {
  const {
    classes: t,
    scroll: o,
    maxWidth: r,
    fullWidth: i,
    fullScreen: s
  } = e, a = {
    root: ["root"],
    backdrop: ["backdrop"],
    container: ["container", `scroll${W(o)}`],
    paper: ["paper", `paperScroll${W(o)}`, `paperWidth${W(String(r))}`, i && "paperFullWidth", s && "paperFullScreen"]
  };
  return ye(a, Yh, t);
}, Qh = G(Li, {
  name: "MuiDialog",
  slot: "Root"
})({
  "@media print": {
    // Use !important to override the Modal inline-style.
    position: "absolute !important"
  }
}), Zh = G("div", {
  name: "MuiDialog",
  slot: "Container",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.container, t[`scroll${W(o.scroll)}`]];
  }
})({
  height: "100%",
  "@media print": {
    height: "auto"
  },
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  variants: [{
    props: {
      scroll: "paper"
    },
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }
  }, {
    props: {
      scroll: "body"
    },
    style: {
      overflowY: "auto",
      overflowX: "hidden",
      textAlign: "center",
      "&::after": {
        content: '""',
        display: "inline-block",
        verticalAlign: "middle",
        height: "100%",
        width: "0"
      }
    }
  }]
}), eg = G(St, {
  name: "MuiDialog",
  slot: "Paper",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.paper, t[`scrollPaper${W(o.scroll)}`], t[`paperWidth${W(String(o.maxWidth))}`], o.fullWidth && t.paperFullWidth, o.fullScreen && t.paperFullScreen];
  }
})(xe(({
  theme: e
}) => ({
  margin: 32,
  position: "relative",
  overflowY: "auto",
  "@media print": {
    overflowY: "visible",
    boxShadow: "none"
  },
  variants: [{
    props: {
      scroll: "paper"
    },
    style: {
      display: "flex",
      flexDirection: "column",
      maxHeight: "calc(100% - 64px)"
    }
  }, {
    props: {
      scroll: "body"
    },
    style: {
      display: "inline-block",
      verticalAlign: "middle",
      textAlign: "initial"
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.maxWidth,
    style: {
      maxWidth: "calc(100% - 64px)"
    }
  }, {
    props: {
      maxWidth: "xs"
    },
    style: {
      maxWidth: e.breakpoints.unit === "px" ? Math.max(e.breakpoints.values.xs, 444) : `max(${e.breakpoints.values.xs}${e.breakpoints.unit}, 444px)`,
      [`&.${Lr.paperScrollBody}`]: {
        [e.breakpoints.down(Math.max(e.breakpoints.values.xs, 444) + 64)]: {
          maxWidth: "calc(100% - 64px)"
        }
      }
    }
  }, ...Object.keys(e.breakpoints.values).filter((t) => t !== "xs").map((t) => ({
    props: {
      maxWidth: t
    },
    style: {
      maxWidth: `${e.breakpoints.values[t]}${e.breakpoints.unit}`,
      [`&.${Lr.paperScrollBody}`]: {
        [e.breakpoints.down(e.breakpoints.values[t] + 64)]: {
          maxWidth: "calc(100% - 64px)"
        }
      }
    }
  })), {
    props: ({
      ownerState: t
    }) => t.fullWidth,
    style: {
      width: "calc(100% - 64px)"
    }
  }, {
    props: ({
      ownerState: t
    }) => t.fullScreen,
    style: {
      margin: 0,
      width: "100%",
      maxWidth: "100%",
      height: "100%",
      maxHeight: "none",
      borderRadius: 0,
      [`&.${Lr.paperScrollBody}`]: {
        margin: 0,
        maxWidth: "100%"
      }
    }
  }]
}))), ai = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = ve({
    props: t,
    name: "MuiDialog"
  }), i = On(), s = {
    enter: i.transitions.duration.enteringScreen,
    exit: i.transitions.duration.leavingScreen
  }, {
    "aria-describedby": a,
    "aria-labelledby": l,
    "aria-modal": c = !0,
    BackdropComponent: u,
    BackdropProps: d,
    children: p,
    className: v,
    disableEscapeKeyDown: S = !1,
    fullScreen: g = !1,
    fullWidth: y = !1,
    maxWidth: h = "sm",
    onClick: C,
    onClose: w,
    open: E,
    PaperComponent: T = St,
    PaperProps: b = {},
    scroll: O = "paper",
    slots: _ = {},
    slotProps: D = {},
    TransitionComponent: A = zo,
    transitionDuration: L = s,
    TransitionProps: z,
    ...f
  } = r, I = {
    ...r,
    disableEscapeKeyDown: S,
    fullScreen: g,
    fullWidth: y,
    maxWidth: h,
    scroll: O
  }, R = Jh(I), k = m.useRef(), j = (P) => {
    k.current = P.target === P.currentTarget;
  }, V = (P) => {
    C && C(P), k.current && (k.current = null, w && w(P, "backdropClick"));
  }, ee = uo(l), H = m.useMemo(() => ({
    titleId: ee
  }), [ee]), se = {
    transition: A,
    ..._
  }, $ = {
    transition: z,
    paper: b,
    backdrop: d,
    ...D
  }, B = {
    slots: se,
    slotProps: $
  }, [X, ne] = he("root", {
    elementType: Qh,
    shouldForwardComponentProp: !0,
    externalForwardedProps: B,
    ownerState: I,
    className: ie(R.root, v),
    ref: o
  }), [Q, F] = he("backdrop", {
    elementType: Xh,
    shouldForwardComponentProp: !0,
    externalForwardedProps: B,
    ownerState: I,
    className: R.backdrop
  }), [K, re] = he("paper", {
    elementType: eg,
    shouldForwardComponentProp: !0,
    externalForwardedProps: B,
    ownerState: I,
    className: ie(R.paper, b.className)
  }), [te, Y] = he("container", {
    elementType: Zh,
    externalForwardedProps: B,
    ownerState: I,
    className: R.container
  }), [U, ue] = he("transition", {
    elementType: zo,
    externalForwardedProps: B,
    ownerState: I,
    additionalProps: {
      appear: !0,
      in: E,
      timeout: L,
      role: "presentation"
    }
  });
  return /* @__PURE__ */ x.jsx(X, {
    closeAfterTransition: !0,
    slots: {
      backdrop: Q
    },
    slotProps: {
      backdrop: {
        transitionDuration: L,
        as: u,
        ...F
      }
    },
    disableEscapeKeyDown: S,
    onClose: w,
    open: E,
    onClick: V,
    ...ne,
    ...f,
    children: /* @__PURE__ */ x.jsx(U, {
      ...ue,
      children: /* @__PURE__ */ x.jsx(te, {
        onMouseDown: j,
        ...Y,
        children: /* @__PURE__ */ x.jsx(K, {
          as: T,
          elevation: 24,
          role: "dialog",
          "aria-describedby": a,
          "aria-labelledby": ee,
          "aria-modal": c,
          ...re,
          children: /* @__PURE__ */ x.jsx(zi.Provider, {
            value: H,
            children: p
          })
        })
      })
    })
  });
});
Gh.NODE_ENV !== "production" && (ai.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The id(s) of the element(s) that describe the dialog.
   */
  "aria-describedby": n.string,
  /**
   * The id(s) of the element(s) that label the dialog.
   */
  "aria-labelledby": n.string,
  /**
   * Informs assistive technologies that the element is modal.
   * It's added on the element with role="dialog".
   * @default true
   */
  "aria-modal": n.oneOfType([n.oneOf(["false", "true"]), n.bool]),
  /**
   * A backdrop component. This prop enables custom backdrop rendering.
   * @deprecated Use `slots.backdrop` instead. While this prop currently works, it will be removed in the next major version.
   * Use the `slots.backdrop` prop to make your application ready for the next version of Material UI.
   * @default styled(Backdrop, {
   *   name: 'MuiModal',
   *   slot: 'Backdrop',
   * })({
   *   zIndex: -1,
   * })
   */
  BackdropComponent: n.elementType,
  /**
   * @ignore
   */
  BackdropProps: n.object,
  /**
   * Dialog children, usually the included sub-components.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: n.bool,
  /**
   * If `true`, the dialog is full-screen.
   * @default false
   */
  fullScreen: n.bool,
  /**
   * If `true`, the dialog stretches to `maxWidth`.
   *
   * Notice that the dialog width grow is limited by the default margin.
   * @default false
   */
  fullWidth: n.bool,
  /**
   * Determine the max-width of the dialog.
   * The dialog width grows with the size of the screen.
   * Set to `false` to disable `maxWidth`.
   * @default 'sm'
   */
  maxWidth: n.oneOfType([n.oneOf(["xs", "sm", "md", "lg", "xl", !1]), n.string]),
  /**
   * @ignore
   */
  onClick: n.func,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: n.func,
  /**
   * If `true`, the component is shown.
   */
  open: n.bool.isRequired,
  /**
   * The component used to render the body of the dialog.
   * @default Paper
   */
  PaperComponent: n.elementType,
  /**
   * Props applied to the [`Paper`](https://mui.com/material-ui/api/paper/) element.
   * @default {}
   * @deprecated Use `slotProps.paper` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  PaperProps: n.object,
  /**
   * Determine the container for scrolling the dialog.
   * @default 'paper'
   */
  scroll: n.oneOf(["body", "paper"]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: n.shape({
    backdrop: n.oneOfType([n.func, n.object]),
    container: n.oneOfType([n.func, n.object]),
    paper: n.oneOfType([n.func, n.object]),
    root: n.oneOfType([n.func, n.object]),
    transition: n.oneOfType([n.func, n.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: n.shape({
    backdrop: n.elementType,
    container: n.elementType,
    paper: n.elementType,
    root: n.elementType,
    transition: n.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Fade
   * @deprecated Use `slots.transition` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  TransitionComponent: n.elementType,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  transitionDuration: n.oneOfType([n.number, n.shape({
    appear: n.number,
    enter: n.number,
    exit: n.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @deprecated Use `slotProps.transition` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  TransitionProps: n.object
});
function tg(e) {
  return ge("MuiDialogActions", e);
}
fe("MuiDialogActions", ["root", "spacing"]);
var ng = {};
const og = (e) => {
  const {
    classes: t,
    disableSpacing: o
  } = e;
  return ye({
    root: ["root", !o && "spacing"]
  }, tg, t);
}, rg = G("div", {
  name: "MuiDialogActions",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, !o.disableSpacing && t.spacing];
  }
})({
  display: "flex",
  alignItems: "center",
  padding: 8,
  justifyContent: "flex-end",
  flex: "0 0 auto",
  variants: [{
    props: ({
      ownerState: e
    }) => !e.disableSpacing,
    style: {
      "& > :not(style) ~ :not(style)": {
        marginLeft: 8
      }
    }
  }]
}), li = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = ve({
    props: t,
    name: "MuiDialogActions"
  }), {
    className: i,
    disableSpacing: s = !1,
    ...a
  } = r, l = {
    ...r,
    disableSpacing: s
  }, c = og(l);
  return /* @__PURE__ */ x.jsx(rg, {
    className: ie(c.root, i),
    ownerState: l,
    ref: o,
    ...a
  });
});
ng.NODE_ENV !== "production" && (li.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * If `true`, the actions do not have additional margin.
   * @default false
   */
  disableSpacing: n.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object])
});
function ig(e) {
  return ge("MuiDialogContent", e);
}
fe("MuiDialogContent", ["root", "dividers"]);
function sg(e) {
  return ge("MuiDialogTitle", e);
}
const ag = fe("MuiDialogTitle", ["root"]);
var lg = {};
const cg = (e) => {
  const {
    classes: t,
    dividers: o
  } = e;
  return ye({
    root: ["root", o && "dividers"]
  }, ig, t);
}, ug = G("div", {
  name: "MuiDialogContent",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.dividers && t.dividers];
  }
})(xe(({
  theme: e
}) => ({
  flex: "1 1 auto",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch",
  overflowY: "auto",
  padding: "20px 24px",
  variants: [{
    props: ({
      ownerState: t
    }) => t.dividers,
    style: {
      padding: "16px 24px",
      borderTop: `1px solid ${(e.vars || e).palette.divider}`,
      borderBottom: `1px solid ${(e.vars || e).palette.divider}`
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.dividers,
    style: {
      [`.${ag.root} + &`]: {
        paddingTop: 0
      }
    }
  }]
}))), ci = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = ve({
    props: t,
    name: "MuiDialogContent"
  }), {
    className: i,
    dividers: s = !1,
    ...a
  } = r, l = {
    ...r,
    dividers: s
  }, c = cg(l);
  return /* @__PURE__ */ x.jsx(ug, {
    className: ie(c.root, i),
    ownerState: l,
    ref: o,
    ...a
  });
});
lg.NODE_ENV !== "production" && (ci.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * Display the top and bottom dividers.
   * @default false
   */
  dividers: n.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object])
});
var dg = {};
const pg = (e) => {
  const {
    classes: t
  } = e;
  return ye({
    root: ["root"]
  }, sg, t);
}, fg = G(ze, {
  name: "MuiDialogTitle",
  slot: "Root"
})({
  padding: "16px 24px",
  flex: "0 0 auto"
}), ui = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = ve({
    props: t,
    name: "MuiDialogTitle"
  }), {
    className: i,
    id: s,
    ...a
  } = r, l = r, c = pg(l), {
    titleId: u = s
  } = m.useContext(zi);
  return /* @__PURE__ */ x.jsx(fg, {
    component: "h2",
    className: ie(c.root, i),
    ownerState: l,
    ref: o,
    variant: "h6",
    id: s ?? u,
    ...a
  });
});
dg.NODE_ENV !== "production" && (ui.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * @ignore
   */
  id: n.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object])
});
const ia = fe("MuiDivider", ["root", "absolute", "fullWidth", "inset", "middle", "flexItem", "light", "vertical", "withChildren", "withChildrenVertical", "textAlignRight", "textAlignLeft", "wrapper", "wrapperVertical"]);
var mg = {};
const hg = (e) => {
  const {
    classes: t,
    disableUnderline: o,
    startAdornment: r,
    endAdornment: i,
    size: s,
    hiddenLabel: a,
    multiline: l
  } = e, c = {
    root: ["root", !o && "underline", r && "adornedStart", i && "adornedEnd", s === "small" && `size${W(s)}`, a && "hiddenLabel", l && "multiline"],
    input: ["input"]
  }, u = ye(c, sh, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...u
  };
}, gg = G(hr, {
  shouldForwardProp: (e) => bt(e) || e === "classes",
  name: "MuiFilledInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [...fr(e, t), !o.disableUnderline && t.underline];
  }
})(xe(({
  theme: e
}) => {
  const t = e.palette.mode === "light", o = t ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)", r = t ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)", i = t ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)", s = t ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
  return {
    position: "relative",
    backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : r,
    borderTopLeftRadius: (e.vars || e).shape.borderRadius,
    borderTopRightRadius: (e.vars || e).shape.borderRadius,
    transition: e.transitions.create("background-color", {
      duration: e.transitions.duration.shorter,
      easing: e.transitions.easing.easeOut
    }),
    "&:hover": {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.hoverBg : i,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : r
      }
    },
    [`&.${Qt.focused}`]: {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : r
    },
    [`&.${Qt.disabled}`]: {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.disabledBg : s
    },
    variants: [{
      props: ({
        ownerState: a
      }) => !a.disableUnderline,
      style: {
        "&::after": {
          left: 0,
          bottom: 0,
          content: '""',
          position: "absolute",
          right: 0,
          transform: "scaleX(0)",
          transition: e.transitions.create("transform", {
            duration: e.transitions.duration.shorter,
            easing: e.transitions.easing.easeOut
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&.${Qt.focused}:after`]: {
          // translateX(0) is a workaround for Safari transform scale bug
          // See https://github.com/mui/material-ui/issues/31766
          transform: "scaleX(1) translateX(0)"
        },
        [`&.${Qt.error}`]: {
          "&::before, &::after": {
            borderBottomColor: (e.vars || e).palette.error.main
          }
        },
        "&::before": {
          borderBottom: `1px solid ${e.vars ? e.alpha(e.vars.palette.common.onBackground, e.vars.opacity.inputUnderline) : o}`,
          left: 0,
          bottom: 0,
          content: '"\\00a0"',
          position: "absolute",
          right: 0,
          transition: e.transitions.create("border-bottom-color", {
            duration: e.transitions.duration.shorter
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&:hover:not(.${Qt.disabled}, .${Qt.error}):before`]: {
          borderBottom: `1px solid ${(e.vars || e).palette.text.primary}`
        },
        [`&.${Qt.disabled}:before`]: {
          borderBottomStyle: "dotted"
        }
      }
    }, ...Object.entries(e.palette).filter(tt()).map(([a]) => ({
      props: {
        disableUnderline: !1,
        color: a
      },
      style: {
        "&::after": {
          borderBottom: `2px solid ${(e.vars || e).palette[a]?.main}`
        }
      }
    })), {
      props: ({
        ownerState: a
      }) => a.startAdornment,
      style: {
        paddingLeft: 12
      }
    }, {
      props: ({
        ownerState: a
      }) => a.endAdornment,
      style: {
        paddingRight: 12
      }
    }, {
      props: ({
        ownerState: a
      }) => a.multiline,
      style: {
        padding: "25px 12px 8px"
      }
    }, {
      props: ({
        ownerState: a,
        size: l
      }) => a.multiline && l === "small",
      style: {
        paddingTop: 21,
        paddingBottom: 4
      }
    }, {
      props: ({
        ownerState: a
      }) => a.multiline && a.hiddenLabel,
      style: {
        paddingTop: 16,
        paddingBottom: 17
      }
    }, {
      props: ({
        ownerState: a
      }) => a.multiline && a.hiddenLabel && a.size === "small",
      style: {
        paddingTop: 8,
        paddingBottom: 9
      }
    }]
  };
})), bg = G(gr, {
  name: "MuiFilledInput",
  slot: "Input",
  overridesResolver: mr
})(xe(({
  theme: e
}) => ({
  paddingTop: 25,
  paddingRight: 12,
  paddingBottom: 8,
  paddingLeft: 12,
  ...!e.vars && {
    "&:-webkit-autofill": {
      WebkitBoxShadow: e.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
      WebkitTextFillColor: e.palette.mode === "light" ? null : "#fff",
      caretColor: e.palette.mode === "light" ? null : "#fff",
      borderTopLeftRadius: "inherit",
      borderTopRightRadius: "inherit"
    }
  },
  ...e.vars && {
    "&:-webkit-autofill": {
      borderTopLeftRadius: "inherit",
      borderTopRightRadius: "inherit"
    },
    [e.getColorSchemeSelector("dark")]: {
      "&:-webkit-autofill": {
        WebkitBoxShadow: "0 0 0 100px #266798 inset",
        WebkitTextFillColor: "#fff",
        caretColor: "#fff"
      }
    }
  },
  variants: [{
    props: {
      size: "small"
    },
    style: {
      paddingTop: 21,
      paddingBottom: 4
    }
  }, {
    props: ({
      ownerState: t
    }) => t.hiddenLabel,
    style: {
      paddingTop: 16,
      paddingBottom: 17
    }
  }, {
    props: ({
      ownerState: t
    }) => t.startAdornment,
    style: {
      paddingLeft: 0
    }
  }, {
    props: ({
      ownerState: t
    }) => t.endAdornment,
    style: {
      paddingRight: 0
    }
  }, {
    props: ({
      ownerState: t
    }) => t.hiddenLabel && t.size === "small",
    style: {
      paddingTop: 8,
      paddingBottom: 9
    }
  }, {
    props: ({
      ownerState: t
    }) => t.multiline,
    style: {
      paddingTop: 0,
      paddingBottom: 0,
      paddingLeft: 0,
      paddingRight: 0
    }
  }]
}))), yr = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = ve({
    props: t,
    name: "MuiFilledInput"
  }), {
    disableUnderline: i = !1,
    components: s = {},
    componentsProps: a,
    fullWidth: l = !1,
    hiddenLabel: c,
    // declare here to prevent spreading to DOM
    inputComponent: u = "input",
    multiline: d = !1,
    slotProps: p,
    slots: v = {},
    type: S = "text",
    ...g
  } = r, y = {
    ...r,
    disableUnderline: i,
    fullWidth: l,
    inputComponent: u,
    multiline: d,
    type: S
  }, h = hg(r), C = {
    root: {
      ownerState: y
    },
    input: {
      ownerState: y
    }
  }, w = p ?? a ? Ge(C, p ?? a) : C, E = v.root ?? s.Root ?? gg, T = v.input ?? s.Input ?? bg;
  return /* @__PURE__ */ x.jsx(br, {
    slots: {
      root: E,
      input: T
    },
    slotProps: w,
    fullWidth: l,
    inputComponent: u,
    multiline: d,
    ref: o,
    type: S,
    ...g,
    classes: h
  });
});
mg.NODE_ENV !== "production" && (yr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: n.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: n.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: n.oneOfType([n.oneOf(["primary", "secondary"]), n.string]),
  /**
   * The components used for each slot inside.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: n.shape({
    Input: n.elementType,
    Root: n.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: n.shape({
    input: n.object,
    root: n.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: n.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: n.bool,
  /**
   * If `true`, the input will not have an underline.
   * @default false
   */
  disableUnderline: n.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: n.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: n.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: n.bool,
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel: n.bool,
  /**
   * The id of the `input` element.
   */
  id: n.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: n.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: n.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: Mt,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: n.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: n.oneOfType([n.number, n.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: n.oneOfType([n.number, n.string]),
  /**
   * If `true`, a [TextareaAutosize](https://mui.com/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: n.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: n.string,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: n.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: n.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: n.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: n.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: n.oneOfType([n.number, n.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: n.shape({
    input: n.object,
    root: n.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: n.shape({
    input: n.elementType,
    root: n.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: n.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#input_types).
   * @default 'text'
   */
  type: n.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: n.any
});
yr.muiName = "Input";
function yg(e) {
  return ge("MuiFormControl", e);
}
fe("MuiFormControl", ["root", "marginNone", "marginNormal", "marginDense", "fullWidth", "disabled"]);
var jl = {};
const vg = (e) => {
  const {
    classes: t,
    margin: o,
    fullWidth: r
  } = e, i = {
    root: ["root", o !== "none" && `margin${W(o)}`, r && "fullWidth"]
  };
  return ye(i, yg, t);
}, xg = G("div", {
  name: "MuiFormControl",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, t[`margin${W(o.margin)}`], o.fullWidth && t.fullWidth];
  }
})({
  display: "inline-flex",
  flexDirection: "column",
  position: "relative",
  // Reset fieldset default style.
  minWidth: 0,
  padding: 0,
  margin: 0,
  border: 0,
  verticalAlign: "top",
  // Fix alignment issue on Safari.
  variants: [{
    props: {
      margin: "normal"
    },
    style: {
      marginTop: 16,
      marginBottom: 8
    }
  }, {
    props: {
      margin: "dense"
    },
    style: {
      marginTop: 8,
      marginBottom: 4
    }
  }, {
    props: {
      fullWidth: !0
    },
    style: {
      width: "100%"
    }
  }]
}), Al = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = ve({
    props: t,
    name: "MuiFormControl"
  }), {
    children: i,
    className: s,
    color: a = "primary",
    component: l = "div",
    disabled: c = !1,
    error: u = !1,
    focused: d,
    fullWidth: p = !1,
    hiddenLabel: v = !1,
    margin: S = "none",
    required: g = !1,
    size: y = "medium",
    variant: h = "outlined",
    ...C
  } = r, w = {
    ...r,
    color: a,
    component: l,
    disabled: c,
    error: u,
    fullWidth: p,
    hiddenLabel: v,
    margin: S,
    required: g,
    size: y,
    variant: h
  }, E = vg(w), [T, b] = m.useState(() => {
    let j = !1;
    return i && m.Children.forEach(i, (V) => {
      if (!Ar(V, ["Input", "Select"]))
        return;
      const ee = Ar(V, ["Select"]) ? V.props.input : V;
      ee && th(ee.props) && (j = !0);
    }), j;
  }), [O, _] = m.useState(() => {
    let j = !1;
    return i && m.Children.forEach(i, (V) => {
      Ar(V, ["Input", "Select"]) && (Lo(V.props, !0) || Lo(V.props.inputProps, !0)) && (j = !0);
    }), j;
  }), [D, A] = m.useState(!1);
  c && D && A(!1);
  const L = d !== void 0 && !c ? d : D;
  let z;
  const f = m.useRef(!1);
  jl.NODE_ENV !== "production" && (z = () => (f.current && console.error(["MUI: There are multiple `InputBase` components inside a FormControl.", "This creates visual inconsistencies, only use one `InputBase`."].join(`
`)), f.current = !0, () => {
    f.current = !1;
  }));
  const I = m.useCallback(() => {
    _(!0);
  }, []), R = m.useCallback(() => {
    _(!1);
  }, []), k = m.useMemo(() => ({
    adornedStart: T,
    setAdornedStart: b,
    color: a,
    disabled: c,
    error: u,
    filled: O,
    focused: L,
    fullWidth: p,
    hiddenLabel: v,
    size: y,
    onBlur: () => {
      A(!1);
    },
    onFocus: () => {
      A(!0);
    },
    onEmpty: R,
    onFilled: I,
    registerEffect: z,
    required: g,
    variant: h
  }), [T, a, c, u, O, L, p, v, z, R, I, g, y, h]);
  return /* @__PURE__ */ x.jsx(pr.Provider, {
    value: k,
    children: /* @__PURE__ */ x.jsx(xg, {
      as: l,
      ownerState: w,
      className: ie(E.root, s),
      ref: o,
      ...C,
      children: i
    })
  });
});
jl.NODE_ENV !== "production" && (Al.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: n.oneOfType([n.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), n.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * If `true`, the label, input and helper text should be displayed in a disabled state.
   * @default false
   */
  disabled: n.bool,
  /**
   * If `true`, the label is displayed in an error state.
   * @default false
   */
  error: n.bool,
  /**
   * If `true`, the component is displayed in focused state.
   */
  focused: n.bool,
  /**
   * If `true`, the component will take up the full width of its container.
   * @default false
   */
  fullWidth: n.bool,
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel: n.bool,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin: n.oneOf(["dense", "none", "normal"]),
  /**
   * If `true`, the label will indicate that the `input` is required.
   * @default false
   */
  required: n.bool,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: n.oneOfType([n.oneOf(["medium", "small"]), n.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: n.oneOf(["filled", "outlined", "standard"])
});
function Sg(e) {
  return ge("MuiFormHelperText", e);
}
const sa = fe("MuiFormHelperText", ["root", "error", "disabled", "sizeSmall", "sizeMedium", "contained", "focused", "filled", "required"]);
var Tg = {}, aa;
const Cg = (e) => {
  const {
    classes: t,
    contained: o,
    size: r,
    disabled: i,
    error: s,
    filled: a,
    focused: l,
    required: c
  } = e, u = {
    root: ["root", i && "disabled", s && "error", r && `size${W(r)}`, o && "contained", l && "focused", a && "filled", c && "required"]
  };
  return ye(u, Sg, t);
}, Eg = G("p", {
  name: "MuiFormHelperText",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.size && t[`size${W(o.size)}`], o.contained && t.contained, o.filled && t.filled];
  }
})(xe(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  ...e.typography.caption,
  textAlign: "left",
  marginTop: 3,
  marginRight: 0,
  marginBottom: 0,
  marginLeft: 0,
  [`&.${sa.disabled}`]: {
    color: (e.vars || e).palette.text.disabled
  },
  [`&.${sa.error}`]: {
    color: (e.vars || e).palette.error.main
  },
  variants: [{
    props: {
      size: "small"
    },
    style: {
      marginTop: 4
    }
  }, {
    props: ({
      ownerState: t
    }) => t.contained,
    style: {
      marginLeft: 14,
      marginRight: 14
    }
  }]
}))), Dl = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = ve({
    props: t,
    name: "MuiFormHelperText"
  }), {
    children: i,
    className: s,
    component: a = "p",
    disabled: l,
    error: c,
    filled: u,
    focused: d,
    margin: p,
    required: v,
    variant: S,
    ...g
  } = r, y = $n(), h = Rn({
    props: r,
    muiFormControl: y,
    states: ["variant", "size", "disabled", "error", "filled", "focused", "required"]
  }), C = {
    ...r,
    component: a,
    contained: h.variant === "filled" || h.variant === "outlined",
    variant: h.variant,
    size: h.size,
    disabled: h.disabled,
    error: h.error,
    filled: h.filled,
    focused: h.focused,
    required: h.required
  };
  delete C.ownerState;
  const w = Cg(C);
  return /* @__PURE__ */ x.jsx(Eg, {
    as: a,
    className: ie(w.root, s),
    ref: o,
    ...g,
    ownerState: C,
    children: i === " " ? (
      // notranslate needed while Google Translate will not fix zero-width space issue
      aa || (aa = /* @__PURE__ */ x.jsx("span", {
        className: "notranslate",
        "aria-hidden": !0,
        children: "​"
      }))
    ) : i
  });
});
Tg.NODE_ENV !== "production" && (Dl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   *
   * If `' '` is provided, the component reserves one line height for displaying a future message.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * If `true`, the helper text should be displayed in a disabled state.
   */
  disabled: n.bool,
  /**
   * If `true`, helper text should be displayed in an error state.
   */
  error: n.bool,
  /**
   * If `true`, the helper text should use filled classes key.
   */
  filled: n.bool,
  /**
   * If `true`, the helper text should use focused classes key.
   */
  focused: n.bool,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: n.oneOf(["dense"]),
  /**
   * If `true`, the helper text should use required classes key.
   */
  required: n.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The variant to use.
   */
  variant: n.oneOfType([n.oneOf(["filled", "outlined", "standard"]), n.string])
});
function wg(e) {
  return ge("MuiFormLabel", e);
}
const Gn = fe("MuiFormLabel", ["root", "colorSecondary", "focused", "disabled", "error", "filled", "required", "asterisk"]);
var Og = {};
const Pg = (e) => {
  const {
    classes: t,
    color: o,
    focused: r,
    disabled: i,
    error: s,
    filled: a,
    required: l
  } = e, c = {
    root: ["root", `color${W(o)}`, i && "disabled", s && "error", a && "filled", r && "focused", l && "required"],
    asterisk: ["asterisk", s && "error"]
  };
  return ye(c, wg, t);
}, Rg = G("label", {
  name: "MuiFormLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.color === "secondary" && t.colorSecondary, o.filled && t.filled];
  }
})(xe(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  ...e.typography.body1,
  lineHeight: "1.4375em",
  padding: 0,
  position: "relative",
  variants: [...Object.entries(e.palette).filter(tt()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      [`&.${Gn.focused}`]: {
        color: (e.vars || e).palette[t].main
      }
    }
  })), {
    props: {},
    style: {
      [`&.${Gn.disabled}`]: {
        color: (e.vars || e).palette.text.disabled
      },
      [`&.${Gn.error}`]: {
        color: (e.vars || e).palette.error.main
      }
    }
  }]
}))), $g = G("span", {
  name: "MuiFormLabel",
  slot: "Asterisk"
})(xe(({
  theme: e
}) => ({
  [`&.${Gn.error}`]: {
    color: (e.vars || e).palette.error.main
  }
}))), Bl = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = ve({
    props: t,
    name: "MuiFormLabel"
  }), {
    children: i,
    className: s,
    color: a,
    component: l = "label",
    disabled: c,
    error: u,
    filled: d,
    focused: p,
    required: v,
    ...S
  } = r, g = $n(), y = Rn({
    props: r,
    muiFormControl: g,
    states: ["color", "required", "focused", "disabled", "error", "filled"]
  }), h = {
    ...r,
    color: y.color || "primary",
    component: l,
    disabled: y.disabled,
    error: y.error,
    filled: y.filled,
    focused: y.focused,
    required: y.required
  }, C = Pg(h);
  return /* @__PURE__ */ x.jsxs(Rg, {
    as: l,
    ownerState: h,
    className: ie(C.root, s),
    ref: o,
    ...S,
    children: [i, y.required && /* @__PURE__ */ x.jsxs($g, {
      ownerState: h,
      "aria-hidden": !0,
      className: C.asterisk,
      children: [" ", "*"]
    })]
  });
});
Og.NODE_ENV !== "production" && (Bl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */
  color: n.oneOfType([n.oneOf(["error", "info", "primary", "secondary", "success", "warning"]), n.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * If `true`, the label should be displayed in a disabled state.
   */
  disabled: n.bool,
  /**
   * If `true`, the label is displayed in an error state.
   */
  error: n.bool,
  /**
   * If `true`, the label should use filled classes key.
   */
  filled: n.bool,
  /**
   * If `true`, the input of this label is focused (used by `FormGroup` components).
   */
  focused: n.bool,
  /**
   * If `true`, the label will indicate that the `input` is required.
   */
  required: n.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object])
});
var kg = {};
function di(e) {
  return `scale(${e}, ${e ** 2})`;
}
const Ig = {
  entering: {
    opacity: 1,
    transform: di(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, zr = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), ro = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const {
    addEndListener: r,
    appear: i = !0,
    children: s,
    easing: a,
    in: l,
    onEnter: c,
    onEntered: u,
    onEntering: d,
    onExit: p,
    onExited: v,
    onExiting: S,
    style: g,
    timeout: y = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent: h = Nt,
    ...C
  } = t, w = ji(), E = m.useRef(), T = On(), b = m.useRef(null), O = Ze(b, Pn(s), o), _ = (k) => (j) => {
    if (k) {
      const V = b.current;
      j === void 0 ? k(V) : k(V, j);
    }
  }, D = _(d), A = _((k, j) => {
    hl(k);
    const {
      duration: V,
      delay: ee,
      easing: H
    } = jo({
      style: g,
      timeout: y,
      easing: a
    }, {
      mode: "enter"
    });
    let se;
    y === "auto" ? (se = T.transitions.getAutoHeightDuration(k.clientHeight), E.current = se) : se = V, k.style.transition = [T.transitions.create("opacity", {
      duration: se,
      delay: ee
    }), T.transitions.create("transform", {
      duration: zr ? se : se * 0.666,
      delay: ee,
      easing: H
    })].join(","), c && c(k, j);
  }), L = _(u), z = _(S), f = _((k) => {
    const {
      duration: j,
      delay: V,
      easing: ee
    } = jo({
      style: g,
      timeout: y,
      easing: a
    }, {
      mode: "exit"
    });
    let H;
    y === "auto" ? (H = T.transitions.getAutoHeightDuration(k.clientHeight), E.current = H) : H = j, k.style.transition = [T.transitions.create("opacity", {
      duration: H,
      delay: V
    }), T.transitions.create("transform", {
      duration: zr ? H : H * 0.666,
      delay: zr ? V : V || H * 0.333,
      easing: ee
    })].join(","), k.style.opacity = 0, k.style.transform = di(0.75), p && p(k);
  }), I = _(v), R = (k) => {
    y === "auto" && w.start(E.current || 0, k), r && r(b.current, k);
  };
  return /* @__PURE__ */ x.jsx(h, {
    appear: i,
    in: l,
    nodeRef: b,
    onEnter: A,
    onEntered: L,
    onEntering: D,
    onExit: f,
    onExited: I,
    onExiting: z,
    addEndListener: R,
    timeout: y === "auto" ? null : y,
    ...C,
    children: (k, {
      ownerState: j,
      ...V
    }) => /* @__PURE__ */ m.cloneElement(s, {
      style: {
        opacity: 0,
        transform: di(0.75),
        visibility: k === "exited" && !l ? "hidden" : void 0,
        ...Ig[k],
        ...g,
        ...s.props.style
      },
      ref: O,
      ...V
    })
  });
});
kg.NODE_ENV !== "production" && (ro.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: n.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: n.bool,
  /**
   * A single child content element.
   */
  children: kn.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: n.oneOfType([n.shape({
    enter: n.string,
    exit: n.string
  }), n.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: n.bool,
  /**
   * @ignore
   */
  onEnter: n.func,
  /**
   * @ignore
   */
  onEntered: n.func,
  /**
   * @ignore
   */
  onEntering: n.func,
  /**
   * @ignore
   */
  onExit: n.func,
  /**
   * @ignore
   */
  onExited: n.func,
  /**
   * @ignore
   */
  onExiting: n.func,
  /**
   * @ignore
   */
  style: n.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  timeout: n.oneOfType([n.oneOf(["auto"]), n.number, n.shape({
    appear: n.number,
    enter: n.number,
    exit: n.number
  })])
});
ro && (ro.muiSupportAuto = !0);
var _g = {};
const Ng = (e) => {
  const {
    classes: t,
    disableUnderline: o
  } = e, i = ye({
    root: ["root", !o && "underline"],
    input: ["input"]
  }, rh, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...i
  };
}, Mg = G(hr, {
  shouldForwardProp: (e) => bt(e) || e === "classes",
  name: "MuiInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [...fr(e, t), !o.disableUnderline && t.underline];
  }
})(xe(({
  theme: e
}) => {
  let o = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)";
  return e.vars && (o = e.alpha(e.vars.palette.common.onBackground, e.vars.opacity.inputUnderline)), {
    position: "relative",
    variants: [{
      props: ({
        ownerState: r
      }) => r.formControl,
      style: {
        "label + &": {
          marginTop: 16
        }
      }
    }, {
      props: ({
        ownerState: r
      }) => !r.disableUnderline,
      style: {
        "&::after": {
          left: 0,
          bottom: 0,
          content: '""',
          position: "absolute",
          right: 0,
          transform: "scaleX(0)",
          transition: e.transitions.create("transform", {
            duration: e.transitions.duration.shorter,
            easing: e.transitions.easing.easeOut
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&.${Mn.focused}:after`]: {
          // translateX(0) is a workaround for Safari transform scale bug
          // See https://github.com/mui/material-ui/issues/31766
          transform: "scaleX(1) translateX(0)"
        },
        [`&.${Mn.error}`]: {
          "&::before, &::after": {
            borderBottomColor: (e.vars || e).palette.error.main
          }
        },
        "&::before": {
          borderBottom: `1px solid ${o}`,
          left: 0,
          bottom: 0,
          content: '"\\00a0"',
          position: "absolute",
          right: 0,
          transition: e.transitions.create("border-bottom-color", {
            duration: e.transitions.duration.shorter
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&:hover:not(.${Mn.disabled}, .${Mn.error}):before`]: {
          borderBottom: `2px solid ${(e.vars || e).palette.text.primary}`,
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            borderBottom: `1px solid ${o}`
          }
        },
        [`&.${Mn.disabled}:before`]: {
          borderBottomStyle: "dotted"
        }
      }
    }, ...Object.entries(e.palette).filter(tt()).map(([r]) => ({
      props: {
        color: r,
        disableUnderline: !1
      },
      style: {
        "&::after": {
          borderBottom: `2px solid ${(e.vars || e).palette[r].main}`
        }
      }
    }))]
  };
})), jg = G(gr, {
  name: "MuiInput",
  slot: "Input",
  overridesResolver: mr
})({}), vr = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = ve({
    props: t,
    name: "MuiInput"
  }), {
    disableUnderline: i = !1,
    components: s = {},
    componentsProps: a,
    fullWidth: l = !1,
    inputComponent: c = "input",
    multiline: u = !1,
    slotProps: d,
    slots: p = {},
    type: v = "text",
    ...S
  } = r, g = Ng(r), h = {
    root: {
      ownerState: {
        disableUnderline: i
      }
    }
  }, C = d ?? a ? Ge(d ?? a, h) : h, w = p.root ?? s.Root ?? Mg, E = p.input ?? s.Input ?? jg;
  return /* @__PURE__ */ x.jsx(br, {
    slots: {
      root: w,
      input: E
    },
    slotProps: C,
    fullWidth: l,
    inputComponent: c,
    multiline: u,
    ref: o,
    type: v,
    ...S,
    classes: g
  });
});
_g.NODE_ENV !== "production" && (vr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: n.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: n.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: n.oneOfType([n.oneOf(["primary", "secondary"]), n.string]),
  /**
   * The components used for each slot inside.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: n.shape({
    Input: n.elementType,
    Root: n.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: n.shape({
    input: n.object,
    root: n.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: n.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: n.bool,
  /**
   * If `true`, the `input` will not have an underline.
   * @default false
   */
  disableUnderline: n.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: n.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: n.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: n.bool,
  /**
   * The id of the `input` element.
   */
  id: n.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: n.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: n.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: Mt,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: n.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: n.oneOfType([n.number, n.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: n.oneOfType([n.number, n.string]),
  /**
   * If `true`, a [TextareaAutosize](https://mui.com/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: n.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: n.string,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: n.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: n.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: n.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: n.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: n.oneOfType([n.number, n.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: n.shape({
    input: n.object,
    root: n.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: n.shape({
    input: n.elementType,
    root: n.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: n.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#input_types).
   * @default 'text'
   */
  type: n.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: n.any
});
vr.muiName = "Input";
function Ag(e) {
  return ge("MuiInputLabel", e);
}
fe("MuiInputLabel", ["root", "focused", "disabled", "error", "required", "asterisk", "formControl", "sizeSmall", "shrink", "animated", "standard", "filled", "outlined"]);
var Dg = {};
const Bg = (e) => {
  const {
    classes: t,
    formControl: o,
    size: r,
    shrink: i,
    disableAnimation: s,
    variant: a,
    required: l
  } = e, c = {
    root: ["root", o && "formControl", !s && "animated", i && "shrink", r && r !== "medium" && `size${W(r)}`, a],
    asterisk: [l && "asterisk"]
  }, u = ye(c, Ag, t);
  return {
    ...t,
    // forward the focused, disabled, etc. classes to the FormLabel
    ...u
  };
}, Fg = G(Bl, {
  shouldForwardProp: (e) => bt(e) || e === "classes",
  name: "MuiInputLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [{
      [`& .${Gn.asterisk}`]: t.asterisk
    }, t.root, o.formControl && t.formControl, o.size === "small" && t.sizeSmall, o.shrink && t.shrink, !o.disableAnimation && t.animated, o.focused && t.focused, t[o.variant]];
  }
})(xe(({
  theme: e
}) => ({
  display: "block",
  transformOrigin: "top left",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  maxWidth: "100%",
  variants: [{
    props: ({
      ownerState: t
    }) => t.formControl,
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      // slight alteration to spec spacing to match visual spec result
      transform: "translate(0, 20px) scale(1)"
    }
  }, {
    props: {
      size: "small"
    },
    style: {
      // Compensation for the `Input.inputSizeSmall` style.
      transform: "translate(0, 17px) scale(1)"
    }
  }, {
    props: ({
      ownerState: t
    }) => t.shrink,
    style: {
      transform: "translate(0, -1.5px) scale(0.75)",
      transformOrigin: "top left",
      maxWidth: "133%"
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.disableAnimation,
    style: {
      transition: e.transitions.create(["color", "transform", "max-width"], {
        duration: e.transitions.duration.shorter,
        easing: e.transitions.easing.easeOut
      })
    }
  }, {
    props: {
      variant: "filled"
    },
    style: {
      // Chrome's autofill feature gives the input field a yellow background.
      // Since the input field is behind the label in the HTML tree,
      // the input field is drawn last and hides the label with an opaque background color.
      // zIndex: 1 will raise the label above opaque background-colors of input.
      zIndex: 1,
      pointerEvents: "none",
      transform: "translate(12px, 16px) scale(1)",
      maxWidth: "calc(100% - 24px)"
    }
  }, {
    props: {
      variant: "filled",
      size: "small"
    },
    style: {
      transform: "translate(12px, 13px) scale(1)"
    }
  }, {
    props: ({
      variant: t,
      ownerState: o
    }) => t === "filled" && o.shrink,
    style: {
      userSelect: "none",
      pointerEvents: "auto",
      transform: "translate(12px, 7px) scale(0.75)",
      maxWidth: "calc(133% - 24px)"
    }
  }, {
    props: ({
      variant: t,
      ownerState: o,
      size: r
    }) => t === "filled" && o.shrink && r === "small",
    style: {
      transform: "translate(12px, 4px) scale(0.75)"
    }
  }, {
    props: {
      variant: "outlined"
    },
    style: {
      // see comment above on filled.zIndex
      zIndex: 1,
      pointerEvents: "none",
      transform: "translate(14px, 16px) scale(1)",
      maxWidth: "calc(100% - 24px)"
    }
  }, {
    props: {
      variant: "outlined",
      size: "small"
    },
    style: {
      transform: "translate(14px, 9px) scale(1)"
    }
  }, {
    props: ({
      variant: t,
      ownerState: o
    }) => t === "outlined" && o.shrink,
    style: {
      userSelect: "none",
      pointerEvents: "auto",
      // Theoretically, we should have (8+5)*2/0.75 = 34px
      // but it feels a better when it bleeds a bit on the left, so 32px.
      maxWidth: "calc(133% - 32px)",
      transform: "translate(14px, -9px) scale(0.75)"
    }
  }]
}))), Fl = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = ve({
    name: "MuiInputLabel",
    props: t
  }), {
    disableAnimation: i = !1,
    margin: s,
    shrink: a,
    variant: l,
    className: c,
    ...u
  } = r, d = $n();
  let p = a;
  typeof p > "u" && d && (p = d.filled || d.focused || d.adornedStart);
  const v = Rn({
    props: r,
    muiFormControl: d,
    states: ["size", "variant", "required", "focused"]
  }), S = {
    ...r,
    disableAnimation: i,
    formControl: d,
    shrink: p,
    size: v.size,
    variant: v.variant,
    required: v.required,
    focused: v.focused
  }, g = Bg(S);
  return /* @__PURE__ */ x.jsx(Fg, {
    "data-shrink": p,
    ref: o,
    className: ie(g.root, c),
    ...u,
    ownerState: S,
    classes: g
  });
});
Dg.NODE_ENV !== "production" && (Fl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */
  color: n.oneOfType([n.oneOf(["error", "info", "primary", "secondary", "success", "warning"]), n.string]),
  /**
   * If `true`, the transition animation is disabled.
   * @default false
   */
  disableAnimation: n.bool,
  /**
   * If `true`, the component is disabled.
   */
  disabled: n.bool,
  /**
   * If `true`, the label is displayed in an error state.
   */
  error: n.bool,
  /**
   * If `true`, the `input` of this label is focused.
   */
  focused: n.bool,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: n.oneOf(["dense"]),
  /**
   * if `true`, the label will indicate that the `input` is required.
   */
  required: n.bool,
  /**
   * If `true`, the label is shrunk.
   */
  shrink: n.bool,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: n.oneOfType([n.oneOf(["medium", "small"]), n.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The variant to use.
   */
  variant: n.oneOf(["filled", "outlined", "standard"])
});
var Lg = {};
const Uo = /* @__PURE__ */ m.createContext({});
Lg.NODE_ENV !== "production" && (Uo.displayName = "ListContext");
function zg(e) {
  return ge("MuiList", e);
}
fe("MuiList", ["root", "padding", "dense", "subheader"]);
var Wg = {};
const Vg = (e) => {
  const {
    classes: t,
    disablePadding: o,
    dense: r,
    subheader: i
  } = e;
  return ye({
    root: ["root", !o && "padding", r && "dense", i && "subheader"]
  }, zg, t);
}, Ug = G("ul", {
  name: "MuiList",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, !o.disablePadding && t.padding, o.dense && t.dense, o.subheader && t.subheader];
  }
})({
  listStyle: "none",
  margin: 0,
  padding: 0,
  position: "relative",
  variants: [{
    props: ({
      ownerState: e
    }) => !e.disablePadding,
    style: {
      paddingTop: 8,
      paddingBottom: 8
    }
  }, {
    props: ({
      ownerState: e
    }) => e.subheader,
    style: {
      paddingTop: 0
    }
  }]
}), Ll = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = ve({
    props: t,
    name: "MuiList"
  }), {
    children: i,
    className: s,
    component: a = "ul",
    dense: l = !1,
    disablePadding: c = !1,
    subheader: u,
    ...d
  } = r, p = m.useMemo(() => ({
    dense: l
  }), [l]), v = {
    ...r,
    component: a,
    dense: l,
    disablePadding: c
  }, S = Vg(v);
  return /* @__PURE__ */ x.jsx(Uo.Provider, {
    value: p,
    children: /* @__PURE__ */ x.jsxs(Ug, {
      as: a,
      className: ie(S.root, s),
      ref: o,
      ownerState: v,
      ...d,
      children: [u, i]
    })
  });
});
Wg.NODE_ENV !== "production" && (Ll.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used for
   * the list and list items.
   * The prop is available to descendant components as the `dense` context.
   * @default false
   */
  dense: n.bool,
  /**
   * If `true`, vertical padding is removed from the list.
   * @default false
   */
  disablePadding: n.bool,
  /**
   * The content of the subheader, normally `ListSubheader`.
   */
  subheader: n.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object])
});
const la = fe("MuiListItemIcon", ["root", "alignItemsFlexStart"]), ca = fe("MuiListItemText", ["root", "multiline", "dense", "inset", "primary", "secondary"]);
var zl = {};
function Wr(e, t, o) {
  return e === t ? e.firstChild : t && t.nextElementSibling ? t.nextElementSibling : o ? null : e.firstChild;
}
function ua(e, t, o) {
  return e === t ? o ? e.firstChild : e.lastChild : t && t.previousElementSibling ? t.previousElementSibling : o ? null : e.lastChild;
}
function Wl(e, t) {
  if (t === void 0)
    return !0;
  let o = e.innerText;
  return o === void 0 && (o = e.textContent), o = o.trim().toLowerCase(), o.length === 0 ? !1 : t.repeating ? o[0] === t.keys[0] : o.startsWith(t.keys.join(""));
}
function jn(e, t, o, r, i, s) {
  let a = !1, l = i(e, t, t ? o : !1);
  for (; l; ) {
    if (l === e.firstChild) {
      if (a)
        return !1;
      a = !0;
    }
    const c = r ? !1 : l.disabled || l.getAttribute("aria-disabled") === "true";
    if (!l.hasAttribute("tabindex") || !Wl(l, s) || c)
      l = i(e, l, o);
    else
      return l.focus(), !0;
  }
  return !1;
}
const Vl = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const {
    // private
    // eslint-disable-next-line react/prop-types
    actions: r,
    autoFocus: i = !1,
    autoFocusItem: s = !1,
    children: a,
    className: l,
    disabledItemsFocusable: c = !1,
    disableListWrap: u = !1,
    onKeyDown: d,
    variant: p = "selectedMenu",
    ...v
  } = t, S = m.useRef(null), g = m.useRef({
    keys: [],
    repeating: !0,
    previousKeyMatched: !0,
    lastTime: null
  });
  Lt(() => {
    i && S.current.focus();
  }, [i]), m.useImperativeHandle(r, () => ({
    adjustStyleForScrollbar: (E, {
      direction: T
    }) => {
      const b = !S.current.style.width;
      if (E.clientHeight < S.current.clientHeight && b) {
        const O = `${Ml(Ct(E))}px`;
        S.current.style[T === "rtl" ? "paddingLeft" : "paddingRight"] = O, S.current.style.width = `calc(100% + ${O})`;
      }
      return S.current;
    }
  }), []);
  const y = (E) => {
    const T = S.current, b = E.key;
    if (E.ctrlKey || E.metaKey || E.altKey) {
      d && d(E);
      return;
    }
    const _ = yn(nt(T));
    if (b === "ArrowDown")
      E.preventDefault(), jn(T, _, u, c, Wr);
    else if (b === "ArrowUp")
      E.preventDefault(), jn(T, _, u, c, ua);
    else if (b === "Home")
      E.preventDefault(), jn(T, null, u, c, Wr);
    else if (b === "End")
      E.preventDefault(), jn(T, null, u, c, ua);
    else if (b.length === 1) {
      const D = g.current, A = b.toLowerCase(), L = performance.now();
      D.keys.length > 0 && (L - D.lastTime > 500 ? (D.keys = [], D.repeating = !0, D.previousKeyMatched = !0) : D.repeating && A !== D.keys[0] && (D.repeating = !1)), D.lastTime = L, D.keys.push(A);
      const z = _ && !D.repeating && Wl(_, D);
      D.previousKeyMatched && (z || jn(T, _, !1, c, Wr, D)) ? E.preventDefault() : D.previousKeyMatched = !1;
    }
    d && d(E);
  }, h = Ze(S, o);
  let C = -1;
  m.Children.forEach(a, (E, T) => {
    if (!/* @__PURE__ */ m.isValidElement(E)) {
      C === T && (C += 1, C >= a.length && (C = -1));
      return;
    }
    zl.NODE_ENV !== "production" && Ut.isFragment(E) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), E.props.disabled || (p === "selectedMenu" && E.props.selected || C === -1) && (C = T), C === T && (E.props.disabled || E.props.muiSkipListHighlight || E.type.muiSkipListHighlight) && (C += 1, C >= a.length && (C = -1));
  });
  const w = m.Children.map(a, (E, T) => {
    if (T === C) {
      const b = {};
      return s && (b.autoFocus = !0), E.props.tabIndex === void 0 && p === "selectedMenu" && (b.tabIndex = 0), /* @__PURE__ */ m.cloneElement(E, b);
    }
    return E;
  });
  return /* @__PURE__ */ x.jsx(Ll, {
    role: "menu",
    ref: h,
    className: l,
    onKeyDown: y,
    tabIndex: i ? 0 : -1,
    ...v,
    children: w
  });
});
zl.NODE_ENV !== "production" && (Vl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, will focus the `[role="menu"]` container and move into tab order.
   * @default false
   */
  autoFocus: n.bool,
  /**
   * If `true`, will focus the first menuitem if `variant="menu"` or selected item
   * if `variant="selectedMenu"`.
   * @default false
   */
  autoFocusItem: n.bool,
  /**
   * MenuList contents, normally `MenuItem`s.
   */
  children: n.node,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * If `true`, will allow focus on disabled items.
   * @default false
   */
  disabledItemsFocusable: n.bool,
  /**
   * If `true`, the menu items will not wrap focus.
   * @default false
   */
  disableListWrap: n.bool,
  /**
   * @ignore
   */
  onKeyDown: n.func,
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus
   * and the vertical alignment relative to the anchor element.
   * @default 'selectedMenu'
   */
  variant: n.oneOf(["menu", "selectedMenu"])
});
function Hg(e) {
  return ge("MuiPopover", e);
}
fe("MuiPopover", ["root", "paper"]);
var Xn = {};
function da(e, t) {
  let o = 0;
  return typeof t == "number" ? o = t : t === "center" ? o = e.height / 2 : t === "bottom" && (o = e.height), o;
}
function pa(e, t) {
  let o = 0;
  return typeof t == "number" ? o = t : t === "center" ? o = e.width / 2 : t === "right" && (o = e.width), o;
}
function fa(e) {
  return [e.horizontal, e.vertical].map((t) => typeof t == "number" ? `${t}px` : t).join(" ");
}
function Hn(e) {
  return typeof e == "function" ? e() : e;
}
const qg = (e) => {
  const {
    classes: t
  } = e;
  return ye({
    root: ["root"],
    paper: ["paper"]
  }, Hg, t);
}, Yg = G(Li, {
  name: "MuiPopover",
  slot: "Root"
})({}), Ul = G(St, {
  name: "MuiPopover",
  slot: "Paper"
})({
  position: "absolute",
  overflowY: "auto",
  overflowX: "hidden",
  // So we see the popover when it's empty.
  // It's most likely on issue on userland.
  minWidth: 16,
  minHeight: 16,
  maxWidth: "calc(100% - 32px)",
  maxHeight: "calc(100% - 32px)",
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), Hl = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = ve({
    props: t,
    name: "MuiPopover"
  }), {
    action: i,
    anchorEl: s,
    anchorOrigin: a = {
      vertical: "top",
      horizontal: "left"
    },
    anchorPosition: l,
    anchorReference: c = "anchorEl",
    children: u,
    className: d,
    container: p,
    elevation: v = 8,
    marginThreshold: S = 16,
    open: g,
    PaperProps: y = {},
    // TODO: remove in v7
    slots: h = {},
    slotProps: C = {},
    transformOrigin: w = {
      vertical: "top",
      horizontal: "left"
    },
    TransitionComponent: E,
    // TODO: remove in v7
    transitionDuration: T = "auto",
    TransitionProps: b = {},
    // TODO: remove in v7
    disableScrollLock: O = !1,
    ..._
  } = r, D = m.useRef(), A = {
    ...r,
    anchorOrigin: a,
    anchorReference: c,
    elevation: v,
    marginThreshold: S,
    transformOrigin: w,
    TransitionComponent: E,
    transitionDuration: T,
    TransitionProps: b
  }, L = qg(A), z = m.useCallback(() => {
    if (c === "anchorPosition")
      return Xn.NODE_ENV !== "production" && (l || console.error('MUI: You need to provide a `anchorPosition` prop when using <Popover anchorReference="anchorPosition" />.')), l;
    const Y = Hn(s), U = Y && Y.nodeType === 1 ? Y : nt(D.current).body, ue = U.getBoundingClientRect();
    if (Xn.NODE_ENV !== "production") {
      const P = U.getBoundingClientRect();
      !globalThis.MUI_TEST_ENV && P.top === 0 && P.left === 0 && P.right === 0 && P.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    return {
      top: ue.top + da(ue, a.vertical),
      left: ue.left + pa(ue, a.horizontal)
    };
  }, [s, a.horizontal, a.vertical, l, c]), f = m.useCallback((Y) => ({
    vertical: da(Y, w.vertical),
    horizontal: pa(Y, w.horizontal)
  }), [w.horizontal, w.vertical]), I = m.useCallback((Y) => {
    const U = {
      width: Y.offsetWidth,
      height: Y.offsetHeight
    }, ue = f(U);
    if (c === "none")
      return {
        top: null,
        left: null,
        transformOrigin: fa(ue)
      };
    const P = z();
    let q = P.top - ue.vertical, de = P.left - ue.horizontal;
    const ae = q + U.height, Se = de + U.width, Me = Ct(Hn(s)), Pe = Me.innerHeight - S, Xe = Me.innerWidth - S;
    if (S !== null && q < S) {
      const Be = q - S;
      q -= Be, ue.vertical += Be;
    } else if (S !== null && ae > Pe) {
      const Be = ae - Pe;
      q -= Be, ue.vertical += Be;
    }
    if (Xn.NODE_ENV !== "production" && U.height > Pe && U.height && Pe && console.error(["MUI: The popover component is too tall.", `Some part of it can not be seen on the screen (${U.height - Pe}px).`, "Please consider adding a `max-height` to improve the user-experience."].join(`
`)), S !== null && de < S) {
      const Be = de - S;
      de -= Be, ue.horizontal += Be;
    } else if (Se > Xe) {
      const Be = Se - Xe;
      de -= Be, ue.horizontal += Be;
    }
    return {
      top: `${Math.round(q)}px`,
      left: `${Math.round(de)}px`,
      transformOrigin: fa(ue)
    };
  }, [s, c, z, f, S]), [R, k] = m.useState(g), j = m.useCallback(() => {
    const Y = D.current;
    if (!Y)
      return;
    const U = I(Y);
    U.top !== null && Y.style.setProperty("top", U.top), U.left !== null && (Y.style.left = U.left), Y.style.transformOrigin = U.transformOrigin, k(!0);
  }, [I]);
  m.useEffect(() => (O && window.addEventListener("scroll", j), () => window.removeEventListener("scroll", j)), [s, O, j]);
  const V = () => {
    j();
  }, ee = () => {
    k(!1);
  };
  m.useEffect(() => {
    g && j();
  }), m.useImperativeHandle(i, () => g ? {
    updatePosition: () => {
      j();
    }
  } : null, [g, j]), m.useEffect(() => {
    if (!g)
      return;
    const Y = dr(() => {
      j();
    }), U = Ct(Hn(s));
    return U.addEventListener("resize", Y), () => {
      Y.clear(), U.removeEventListener("resize", Y);
    };
  }, [s, g, j]);
  let H = T;
  const se = {
    slots: {
      transition: E,
      ...h
    },
    slotProps: {
      transition: b,
      paper: y,
      ...C
    }
  }, [$, B] = he("transition", {
    elementType: ro,
    externalForwardedProps: se,
    ownerState: A,
    getSlotProps: (Y) => ({
      ...Y,
      onEntering: (U, ue) => {
        Y.onEntering?.(U, ue), V();
      },
      onExited: (U) => {
        Y.onExited?.(U), ee();
      }
    }),
    additionalProps: {
      appear: !0,
      in: g
    }
  });
  T === "auto" && !$.muiSupportAuto && (H = void 0);
  const X = p || (s ? nt(Hn(s)).body : void 0), [ne, {
    slots: Q,
    slotProps: F,
    ...K
  }] = he("root", {
    ref: o,
    elementType: Yg,
    externalForwardedProps: {
      ...se,
      ..._
    },
    shouldForwardComponentProp: !0,
    additionalProps: {
      slots: {
        backdrop: h.backdrop
      },
      slotProps: {
        backdrop: Pf(typeof C.backdrop == "function" ? C.backdrop(A) : C.backdrop, {
          invisible: !0
        })
      },
      container: X,
      open: g
    },
    ownerState: A,
    className: ie(L.root, d)
  }), [re, te] = he("paper", {
    ref: D,
    className: L.paper,
    elementType: Ul,
    externalForwardedProps: se,
    shouldForwardComponentProp: !0,
    additionalProps: {
      elevation: v,
      style: R ? void 0 : {
        opacity: 0
      }
    },
    ownerState: A
  });
  return /* @__PURE__ */ x.jsx(ne, {
    ...K,
    ...!Ao(ne) && {
      slots: Q,
      slotProps: F,
      disableScrollLock: O
    },
    children: /* @__PURE__ */ x.jsx($, {
      ...B,
      timeout: H,
      children: /* @__PURE__ */ x.jsx(re, {
        ...te,
        children: u
      })
    })
  });
});
Xn.NODE_ENV !== "production" && (Hl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports updatePosition() action.
   */
  action: Mt,
  /**
   * An HTML element, [PopoverVirtualElement](https://mui.com/material-ui/react-popover/#virtual-element),
   * or a function that returns either.
   * It's used to set the position of the popover.
   */
  anchorEl: an(n.oneOfType([no, n.func]), (e) => {
    if (e.open && (!e.anchorReference || e.anchorReference === "anchorEl")) {
      const t = Hn(e.anchorEl);
      if (t && t.nodeType === 1) {
        const o = t.getBoundingClientRect();
        if (Xn.NODE_ENV !== "production" && !globalThis.MUI_TEST_ENV && o.top === 0 && o.left === 0 && o.right === 0 && o.bottom === 0)
          return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else
        return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", `It should be an Element or PopoverVirtualElement instance but it's \`${t}\` instead.`].join(`
`));
    }
    return null;
  }),
  /**
   * This is the point on the anchor where the popover's
   * `anchorEl` will attach to. This is not used when the
   * anchorReference is 'anchorPosition'.
   *
   * Options:
   * vertical: [top, center, bottom];
   * horizontal: [left, center, right].
   * @default {
   *   vertical: 'top',
   *   horizontal: 'left',
   * }
   */
  anchorOrigin: n.shape({
    horizontal: n.oneOfType([n.oneOf(["center", "left", "right"]), n.number]).isRequired,
    vertical: n.oneOfType([n.oneOf(["bottom", "center", "top"]), n.number]).isRequired
  }),
  /**
   * This is the position that may be used to set the position of the popover.
   * The coordinates are relative to the application's client area.
   */
  anchorPosition: n.shape({
    left: n.number.isRequired,
    top: n.number.isRequired
  }),
  /**
   * This determines which anchor prop to refer to when setting
   * the position of the popover.
   * @default 'anchorEl'
   */
  anchorReference: n.oneOf(["anchorEl", "anchorPosition", "none"]),
  /**
   * A backdrop component. This prop enables custom backdrop rendering.
   * @deprecated Use `slots.backdrop` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default styled(Backdrop, {
   *   name: 'MuiModal',
   *   slot: 'Backdrop',
   *   overridesResolver: (props, styles) => {
   *     return styles.backdrop;
   *   },
   * })({
   *   zIndex: -1,
   * })
   */
  BackdropComponent: n.elementType,
  /**
   * Props applied to the [`Backdrop`](/material-ui/api/backdrop/) element.
   * @deprecated Use `slotProps.backdrop` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  BackdropProps: n.object,
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * An HTML element, component instance, or function that returns either.
   * The `container` will passed to the Modal component.
   *
   * By default, it uses the body of the anchorEl's top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: n.oneOfType([no, n.func]),
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: n.bool,
  /**
   * The elevation of the popover.
   * @default 8
   */
  elevation: Sl,
  /**
   * Specifies how close to the edge of the window the popover can appear.
   * If null, the popover will not be constrained by the window.
   * @default 16
   */
  marginThreshold: n.number,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   */
  onClose: n.func,
  /**
   * If `true`, the component is shown.
   */
  open: n.bool.isRequired,
  /**
   * Props applied to the [`Paper`](https://mui.com/material-ui/api/paper/) element.
   *
   * This prop is an alias for `slotProps.paper` and will be overridden by it if both are used.
   * @deprecated Use `slotProps.paper` instead.
   *
   * @default {}
   */
  PaperProps: n.shape({
    component: Ai
  }),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: n.shape({
    backdrop: n.oneOfType([n.func, n.object]),
    paper: n.oneOfType([n.func, n.object]),
    root: n.oneOfType([n.func, n.object]),
    transition: n.oneOfType([n.func, n.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: n.shape({
    backdrop: n.elementType,
    paper: n.elementType,
    root: n.elementType,
    transition: n.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * This is the point on the popover which
   * will attach to the anchor's origin.
   *
   * Options:
   * vertical: [top, center, bottom, x(px)];
   * horizontal: [left, center, right, x(px)].
   * @default {
   *   vertical: 'top',
   *   horizontal: 'left',
   * }
   */
  transformOrigin: n.shape({
    horizontal: n.oneOfType([n.oneOf(["center", "left", "right"]), n.number]).isRequired,
    vertical: n.oneOfType([n.oneOf(["bottom", "center", "top"]), n.number]).isRequired
  }),
  /**
   * The component used for the transition.
   * [Follow this guide](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @deprecated use the `slots.transition` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default Grow
   */
  TransitionComponent: n.elementType,
  /**
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  transitionDuration: n.oneOfType([n.oneOf(["auto"]), n.number, n.shape({
    appear: n.number,
    enter: n.number,
    exit: n.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @deprecated use the `slotProps.transition` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default {}
   */
  TransitionProps: n.object
});
function Kg(e) {
  return ge("MuiMenu", e);
}
fe("MuiMenu", ["root", "paper", "list"]);
var ql = {};
const Gg = {
  vertical: "top",
  horizontal: "right"
}, Xg = {
  vertical: "top",
  horizontal: "left"
}, Jg = (e) => {
  const {
    classes: t
  } = e;
  return ye({
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  }, Kg, t);
}, Qg = G(Hl, {
  shouldForwardProp: (e) => bt(e) || e === "classes",
  name: "MuiMenu",
  slot: "Root"
})({}), Zg = G(Ul, {
  name: "MuiMenu",
  slot: "Paper"
})({
  // specZ: The maximum height of a simple menu should be one or more rows less than the view
  // height. This ensures a tappable area outside of the simple menu with which to dismiss
  // the menu.
  maxHeight: "calc(100% - 96px)",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch"
}), eb = G(Vl, {
  name: "MuiMenu",
  slot: "List"
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), Yl = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = ve({
    props: t,
    name: "MuiMenu"
  }), {
    autoFocus: i = !0,
    children: s,
    className: a,
    disableAutoFocusItem: l = !1,
    MenuListProps: c = {},
    onClose: u,
    open: d,
    PaperProps: p = {},
    PopoverClasses: v,
    transitionDuration: S = "auto",
    TransitionProps: {
      onEntering: g,
      ...y
    } = {},
    variant: h = "selectedMenu",
    slots: C = {},
    slotProps: w = {},
    ...E
  } = r, T = $i(), b = {
    ...r,
    autoFocus: i,
    disableAutoFocusItem: l,
    MenuListProps: c,
    onEntering: g,
    PaperProps: p,
    transitionDuration: S,
    TransitionProps: y,
    variant: h
  }, O = Jg(b), _ = i && !l && d, D = m.useRef(null), A = (H, se) => {
    D.current && D.current.adjustStyleForScrollbar(H, {
      direction: T ? "rtl" : "ltr"
    }), g && g(H, se);
  }, L = (H) => {
    H.key === "Tab" && (H.preventDefault(), u && u(H, "tabKeyDown"));
  };
  let z = -1;
  m.Children.map(s, (H, se) => {
    /* @__PURE__ */ m.isValidElement(H) && (ql.NODE_ENV !== "production" && Ut.isFragment(H) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), H.props.disabled || (h === "selectedMenu" && H.props.selected || z === -1) && (z = se));
  });
  const f = {
    slots: C,
    slotProps: {
      list: c,
      transition: y,
      paper: p,
      ...w
    }
  }, I = oo({
    elementType: C.root,
    externalSlotProps: w.root,
    ownerState: b,
    className: [O.root, a]
  }), [R, k] = he("paper", {
    className: O.paper,
    elementType: Zg,
    externalForwardedProps: f,
    shouldForwardComponentProp: !0,
    ownerState: b
  }), [j, V] = he("list", {
    className: ie(O.list, c.className),
    elementType: eb,
    shouldForwardComponentProp: !0,
    externalForwardedProps: f,
    getSlotProps: (H) => ({
      ...H,
      onKeyDown: (se) => {
        L(se), H.onKeyDown?.(se);
      }
    }),
    ownerState: b
  }), ee = typeof f.slotProps.transition == "function" ? f.slotProps.transition(b) : f.slotProps.transition;
  return /* @__PURE__ */ x.jsx(Qg, {
    onClose: u,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: T ? "right" : "left"
    },
    transformOrigin: T ? Gg : Xg,
    slots: {
      root: C.root,
      paper: R,
      backdrop: C.backdrop,
      ...C.transition && {
        // TODO: pass `slots.transition` directly once `TransitionComponent` is removed from Popover
        transition: C.transition
      }
    },
    slotProps: {
      root: I,
      paper: k,
      backdrop: typeof w.backdrop == "function" ? w.backdrop(b) : w.backdrop,
      transition: {
        ...ee,
        onEntering: (...H) => {
          A(...H), ee?.onEntering?.(...H);
        }
      }
    },
    open: d,
    ref: o,
    transitionDuration: S,
    ownerState: b,
    ...E,
    classes: v,
    children: /* @__PURE__ */ x.jsx(j, {
      actions: D,
      autoFocus: i && (z === -1 || l),
      autoFocusItem: _,
      variant: h,
      ...V,
      children: s
    })
  });
});
ql.NODE_ENV !== "production" && (Yl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * An HTML element, or a function that returns one.
   * It's used to set the position of the menu.
   */
  anchorEl: n.oneOfType([no, n.func]),
  /**
   * If `true` (Default) will focus the `[role="menu"]` if no focusable child is found. Disabled
   * children are not focusable. If you set this prop to `false` focus will be placed
   * on the parent modal container. This has severe accessibility implications
   * and should only be considered if you manage focus otherwise.
   * @default true
   */
  autoFocus: n.bool,
  /**
   * Menu contents, normally `MenuItem`s.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * When opening the menu will not focus the active item but the `[role="menu"]`
   * unless `autoFocus` is also set to `false`. Not using the default means not
   * following WAI-ARIA authoring practices. Please be considerate about possible
   * accessibility implications.
   * @default false
   */
  disableAutoFocusItem: n.bool,
  /**
   * Props applied to the [`MenuList`](https://mui.com/material-ui/api/menu-list/) element.
   * @deprecated use the `slotProps.list` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default {}
   */
  MenuListProps: n.object,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`, `"tabKeyDown"`.
   */
  onClose: n.func,
  /**
   * If `true`, the component is shown.
   */
  open: n.bool.isRequired,
  /**
   * @ignore
   */
  PaperProps: n.object,
  /**
   * `classes` prop applied to the [`Popover`](https://mui.com/material-ui/api/popover/) element.
   */
  PopoverClasses: n.object,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: n.shape({
    backdrop: n.oneOfType([n.func, n.object]),
    list: n.oneOfType([n.func, n.object]),
    paper: n.oneOfType([n.func, n.object]),
    root: n.oneOfType([n.func, n.object]),
    transition: n.oneOfType([n.func, n.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: n.shape({
    backdrop: n.elementType,
    list: n.elementType,
    paper: n.elementType,
    root: n.elementType,
    transition: n.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The length of the transition in `ms`, or 'auto'
   * @default 'auto'
   */
  transitionDuration: n.oneOfType([n.oneOf(["auto"]), n.number, n.shape({
    appear: n.number,
    enter: n.number,
    exit: n.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @deprecated use the `slotProps.transition` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default {}
   */
  TransitionProps: n.object,
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus.
   * @default 'selectedMenu'
   */
  variant: n.oneOf(["menu", "selectedMenu"])
});
function tb(e) {
  return ge("MuiMenuItem", e);
}
const An = fe("MuiMenuItem", ["root", "focusVisible", "dense", "disabled", "divider", "gutters", "selected"]);
var Kl = {};
const nb = (e, t) => {
  const {
    ownerState: o
  } = e;
  return [t.root, o.dense && t.dense, o.divider && t.divider, !o.disableGutters && t.gutters];
}, ob = (e) => {
  const {
    disabled: t,
    dense: o,
    divider: r,
    disableGutters: i,
    selected: s,
    classes: a
  } = e, c = ye({
    root: ["root", o && "dense", t && "disabled", !i && "gutters", r && "divider", s && "selected"]
  }, tb, a);
  return {
    ...a,
    ...c
  };
}, rb = G(Yt, {
  shouldForwardProp: (e) => bt(e) || e === "classes",
  name: "MuiMenuItem",
  slot: "Root",
  overridesResolver: nb
})(xe(({
  theme: e
}) => ({
  ...e.typography.body1,
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  position: "relative",
  textDecoration: "none",
  minHeight: 48,
  paddingTop: 6,
  paddingBottom: 6,
  boxSizing: "border-box",
  whiteSpace: "nowrap",
  "&:hover": {
    textDecoration: "none",
    backgroundColor: (e.vars || e).palette.action.hover,
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  },
  [`&.${An.selected}`]: {
    backgroundColor: e.alpha((e.vars || e).palette.primary.main, (e.vars || e).palette.action.selectedOpacity),
    [`&.${An.focusVisible}`]: {
      backgroundColor: e.alpha((e.vars || e).palette.primary.main, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.focusOpacity}`)
    }
  },
  [`&.${An.selected}:hover`]: {
    backgroundColor: e.alpha((e.vars || e).palette.primary.main, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.hoverOpacity}`),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: e.alpha((e.vars || e).palette.primary.main, (e.vars || e).palette.action.selectedOpacity)
    }
  },
  [`&.${An.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`&.${An.disabled}`]: {
    opacity: (e.vars || e).palette.action.disabledOpacity
  },
  [`& + .${ia.root}`]: {
    marginTop: e.spacing(1),
    marginBottom: e.spacing(1)
  },
  [`& + .${ia.inset}`]: {
    marginLeft: 52
  },
  [`& .${ca.root}`]: {
    marginTop: 0,
    marginBottom: 0
  },
  [`& .${ca.inset}`]: {
    paddingLeft: 36
  },
  [`& .${la.root}`]: {
    minWidth: 36
  },
  variants: [{
    props: ({
      ownerState: t
    }) => !t.disableGutters,
    style: {
      paddingLeft: 16,
      paddingRight: 16
    }
  }, {
    props: ({
      ownerState: t
    }) => t.divider,
    style: {
      borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
      backgroundClip: "padding-box"
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.dense,
    style: {
      [e.breakpoints.up("sm")]: {
        minHeight: "auto"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.dense,
    style: {
      minHeight: 32,
      // https://m2.material.io/components/menus#specs > Dense
      paddingTop: 4,
      paddingBottom: 4,
      ...e.typography.body2,
      [`& .${la.root} svg`]: {
        fontSize: "1.25rem"
      }
    }
  }]
}))), pi = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = ve({
    props: t,
    name: "MuiMenuItem"
  }), {
    autoFocus: i = !1,
    component: s = "li",
    dense: a = !1,
    divider: l = !1,
    disableGutters: c = !1,
    focusVisibleClassName: u,
    role: d = "menuitem",
    tabIndex: p,
    className: v,
    ...S
  } = r, g = m.useContext(Uo), y = m.useMemo(() => ({
    dense: a || g.dense || !1,
    disableGutters: c
  }), [g.dense, a, c]), h = m.useRef(null);
  Lt(() => {
    i && (h.current ? h.current.focus() : Kl.NODE_ENV !== "production" && console.error("MUI: Unable to set focus to a MenuItem whose component has not been rendered."));
  }, [i]);
  const C = {
    ...r,
    dense: y.dense,
    divider: l,
    disableGutters: c
  }, w = ob(r), E = Ze(h, o);
  let T;
  return r.disabled || (T = p !== void 0 ? p : -1), /* @__PURE__ */ x.jsx(Uo.Provider, {
    value: y,
    children: /* @__PURE__ */ x.jsx(rb, {
      ref: E,
      role: d,
      tabIndex: T,
      component: s,
      focusVisibleClassName: ie(w.focusVisible, u),
      className: ie(w.root, v),
      ...S,
      ownerState: C,
      classes: w
    })
  });
});
Kl.NODE_ENV !== "production" && (pi.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the list item is focused during the first mount.
   * Focus will also be triggered if the value changes from false to true.
   * @default false
   */
  autoFocus: n.bool,
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used.
   * The prop defaults to the value inherited from the parent Menu component.
   * @default false
   */
  dense: n.bool,
  /**
   * @ignore
   */
  disabled: n.bool,
  /**
   * If `true`, the left and right padding is removed.
   * @default false
   */
  disableGutters: n.bool,
  /**
   * If `true`, a 1px light border is added to the bottom of the menu item.
   * @default false
   */
  divider: n.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: n.string,
  /**
   * @ignore
   */
  role: n.string,
  /**
   * If `true`, the component is selected.
   * @default false
   */
  selected: n.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * @default 0
   */
  tabIndex: n.number
});
function ib(e) {
  return ge("MuiNativeSelect", e);
}
const Wi = fe("MuiNativeSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]);
var sb = {};
const ab = (e) => {
  const {
    classes: t,
    variant: o,
    disabled: r,
    multiple: i,
    open: s,
    error: a
  } = e, l = {
    select: ["select", o, r && "disabled", i && "multiple", a && "error"],
    icon: ["icon", `icon${W(o)}`, s && "iconOpen", r && "disabled"]
  };
  return ye(l, ib, t);
}, Gl = G("select", {
  name: "MuiNativeSelect"
})(({
  theme: e
}) => ({
  // Reset
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // When interacting quickly, the text can end up selected.
  // Native select can't be selected either.
  userSelect: "none",
  // Reset
  borderRadius: 0,
  cursor: "pointer",
  "&:focus": {
    // Reset Chrome style
    borderRadius: 0
  },
  [`&.${Wi.disabled}`]: {
    cursor: "default"
  },
  "&[multiple]": {
    height: "auto"
  },
  "&:not([multiple]) option, &:not([multiple]) optgroup": {
    backgroundColor: (e.vars || e).palette.background.paper
  },
  variants: [{
    props: ({
      ownerState: t
    }) => t.variant !== "filled" && t.variant !== "outlined",
    style: {
      // Bump specificity to allow extending custom inputs
      "&&&": {
        paddingRight: 24,
        minWidth: 16
        // So it doesn't collapse.
      }
    }
  }, {
    props: {
      variant: "filled"
    },
    style: {
      "&&&": {
        paddingRight: 32
      }
    }
  }, {
    props: {
      variant: "outlined"
    },
    style: {
      borderRadius: (e.vars || e).shape.borderRadius,
      "&:focus": {
        borderRadius: (e.vars || e).shape.borderRadius
        // Reset the reset for Chrome style
      },
      "&&&": {
        paddingRight: 32
      }
    }
  }]
})), lb = G(Gl, {
  name: "MuiNativeSelect",
  slot: "Select",
  shouldForwardProp: bt,
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.select, t[o.variant], o.error && t.error, {
      [`&.${Wi.multiple}`]: t.multiple
    }];
  }
})({}), Xl = G("svg", {
  name: "MuiNativeSelect"
})(({
  theme: e
}) => ({
  // We use a position absolute over a flexbox in order to forward the pointer events
  // to the input and to support wrapping tags..
  position: "absolute",
  right: 0,
  // Center vertically, height is 1em
  top: "calc(50% - .5em)",
  // Don't block pointer events on the select under the icon.
  pointerEvents: "none",
  color: (e.vars || e).palette.action.active,
  [`&.${Wi.disabled}`]: {
    color: (e.vars || e).palette.action.disabled
  },
  variants: [{
    props: ({
      ownerState: t
    }) => t.open,
    style: {
      transform: "rotate(180deg)"
    }
  }, {
    props: {
      variant: "filled"
    },
    style: {
      right: 7
    }
  }, {
    props: {
      variant: "outlined"
    },
    style: {
      right: 7
    }
  }]
})), cb = G(Xl, {
  name: "MuiNativeSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.icon, o.variant && t[`icon${W(o.variant)}`], o.open && t.iconOpen];
  }
})({}), Jl = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const {
    className: r,
    disabled: i,
    error: s,
    IconComponent: a,
    inputRef: l,
    variant: c = "standard",
    ...u
  } = t, d = {
    ...t,
    disabled: i,
    variant: c,
    error: s
  }, p = ab(d);
  return /* @__PURE__ */ x.jsxs(m.Fragment, {
    children: [/* @__PURE__ */ x.jsx(lb, {
      ownerState: d,
      className: ie(p.select, r),
      disabled: i,
      ref: l || o,
      ...u
    }), t.multiple ? null : /* @__PURE__ */ x.jsx(cb, {
      as: a,
      ownerState: d,
      className: p.icon
    })]
  });
});
sb.NODE_ENV !== "production" && (Jl.propTypes = {
  /**
   * The option elements to populate the select with.
   * Can be some `<option>` elements.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * The CSS class name of the select element.
   */
  className: n.string,
  /**
   * If `true`, the select is disabled.
   */
  disabled: n.bool,
  /**
   * If `true`, the `select input` will indicate an error.
   */
  error: n.bool,
  /**
   * The icon that displays the arrow.
   */
  IconComponent: n.elementType.isRequired,
  /**
   * Use that prop to pass a ref to the native select element.
   * @deprecated
   */
  inputRef: Mt,
  /**
   * @ignore
   */
  multiple: n.bool,
  /**
   * Name attribute of the `select` or hidden `input` element.
   */
  name: n.string,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: n.func,
  /**
   * The input value.
   */
  value: n.any,
  /**
   * The variant to use.
   */
  variant: n.oneOf(["standard", "outlined", "filled"])
});
var ub = {}, ma;
const db = G("fieldset", {
  name: "MuiNotchedOutlined",
  shouldForwardProp: bt
})({
  textAlign: "left",
  position: "absolute",
  bottom: 0,
  right: 0,
  top: -5,
  left: 0,
  margin: 0,
  padding: "0 8px",
  pointerEvents: "none",
  borderRadius: "inherit",
  borderStyle: "solid",
  borderWidth: 1,
  overflow: "hidden",
  minWidth: "0%"
}), pb = G("legend", {
  name: "MuiNotchedOutlined",
  shouldForwardProp: bt
})(xe(({
  theme: e
}) => ({
  float: "unset",
  // Fix conflict with bootstrap
  width: "auto",
  // Fix conflict with bootstrap
  overflow: "hidden",
  // Fix Horizontal scroll when label too long
  variants: [{
    props: ({
      ownerState: t
    }) => !t.withLabel,
    style: {
      padding: 0,
      lineHeight: "11px",
      // sync with `height` in `legend` styles
      transition: e.transitions.create("width", {
        duration: 150,
        easing: e.transitions.easing.easeOut
      })
    }
  }, {
    props: ({
      ownerState: t
    }) => t.withLabel,
    style: {
      display: "block",
      // Fix conflict with normalize.css and sanitize.css
      padding: 0,
      height: 11,
      // sync with `lineHeight` in `legend` styles
      fontSize: "0.75em",
      visibility: "hidden",
      maxWidth: 0.01,
      transition: e.transitions.create("max-width", {
        duration: 50,
        easing: e.transitions.easing.easeOut
      }),
      whiteSpace: "nowrap",
      "& > span": {
        paddingLeft: 5,
        paddingRight: 5,
        display: "inline-block",
        opacity: 0,
        visibility: "visible"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.withLabel && t.notched,
    style: {
      maxWidth: "100%",
      transition: e.transitions.create("max-width", {
        duration: 100,
        easing: e.transitions.easing.easeOut,
        delay: 50
      })
    }
  }]
})));
function Ql(e) {
  const {
    children: t,
    classes: o,
    className: r,
    label: i,
    notched: s,
    ...a
  } = e, l = i != null && i !== "", c = {
    ...e,
    notched: s,
    withLabel: l
  };
  return /* @__PURE__ */ x.jsx(db, {
    "aria-hidden": !0,
    className: r,
    ownerState: c,
    ...a,
    children: /* @__PURE__ */ x.jsx(pb, {
      ownerState: c,
      children: l ? /* @__PURE__ */ x.jsx("span", {
        children: i
      }) : (
        // notranslate needed while Google Translate will not fix zero-width space issue
        ma || (ma = /* @__PURE__ */ x.jsx("span", {
          className: "notranslate",
          "aria-hidden": !0,
          children: "​"
        }))
      )
    })
  });
}
ub.NODE_ENV !== "production" && (Ql.propTypes = {
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The label.
   */
  label: n.node,
  /**
   * If `true`, the outline is notched to accommodate the label.
   */
  notched: n.bool.isRequired,
  /**
   * @ignore
   */
  style: n.object
});
var fb = {};
const mb = (e) => {
  const {
    classes: t
  } = e, r = ye({
    root: ["root"],
    notchedOutline: ["notchedOutline"],
    input: ["input"]
  }, ih, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...r
  };
}, hb = G(hr, {
  shouldForwardProp: (e) => bt(e) || e === "classes",
  name: "MuiOutlinedInput",
  slot: "Root",
  overridesResolver: fr
})(xe(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    position: "relative",
    borderRadius: (e.vars || e).shape.borderRadius,
    [`&:hover .${Pt.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.text.primary
    },
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      [`&:hover .${Pt.notchedOutline}`]: {
        borderColor: e.vars ? e.alpha(e.vars.palette.common.onBackground, 0.23) : t
      }
    },
    [`&.${Pt.focused} .${Pt.notchedOutline}`]: {
      borderWidth: 2
    },
    variants: [...Object.entries(e.palette).filter(tt()).map(([o]) => ({
      props: {
        color: o
      },
      style: {
        [`&.${Pt.focused} .${Pt.notchedOutline}`]: {
          borderColor: (e.vars || e).palette[o].main
        }
      }
    })), {
      props: {},
      // to override the above style
      style: {
        [`&.${Pt.error} .${Pt.notchedOutline}`]: {
          borderColor: (e.vars || e).palette.error.main
        },
        [`&.${Pt.disabled} .${Pt.notchedOutline}`]: {
          borderColor: (e.vars || e).palette.action.disabled
        }
      }
    }, {
      props: ({
        ownerState: o
      }) => o.startAdornment,
      style: {
        paddingLeft: 14
      }
    }, {
      props: ({
        ownerState: o
      }) => o.endAdornment,
      style: {
        paddingRight: 14
      }
    }, {
      props: ({
        ownerState: o
      }) => o.multiline,
      style: {
        padding: "16.5px 14px"
      }
    }, {
      props: ({
        ownerState: o,
        size: r
      }) => o.multiline && r === "small",
      style: {
        padding: "8.5px 14px"
      }
    }]
  };
})), gb = G(Ql, {
  name: "MuiOutlinedInput",
  slot: "NotchedOutline"
})(xe(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    borderColor: e.vars ? e.alpha(e.vars.palette.common.onBackground, 0.23) : t
  };
})), bb = G(gr, {
  name: "MuiOutlinedInput",
  slot: "Input",
  overridesResolver: mr
})(xe(({
  theme: e
}) => ({
  padding: "16.5px 14px",
  ...!e.vars && {
    "&:-webkit-autofill": {
      WebkitBoxShadow: e.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
      WebkitTextFillColor: e.palette.mode === "light" ? null : "#fff",
      caretColor: e.palette.mode === "light" ? null : "#fff",
      borderRadius: "inherit"
    }
  },
  ...e.vars && {
    "&:-webkit-autofill": {
      borderRadius: "inherit"
    },
    [e.getColorSchemeSelector("dark")]: {
      "&:-webkit-autofill": {
        WebkitBoxShadow: "0 0 0 100px #266798 inset",
        WebkitTextFillColor: "#fff",
        caretColor: "#fff"
      }
    }
  },
  variants: [{
    props: {
      size: "small"
    },
    style: {
      padding: "8.5px 14px"
    }
  }, {
    props: ({
      ownerState: t
    }) => t.multiline,
    style: {
      padding: 0
    }
  }, {
    props: ({
      ownerState: t
    }) => t.startAdornment,
    style: {
      paddingLeft: 0
    }
  }, {
    props: ({
      ownerState: t
    }) => t.endAdornment,
    style: {
      paddingRight: 0
    }
  }]
}))), xr = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = ve({
    props: t,
    name: "MuiOutlinedInput"
  }), {
    components: i = {},
    fullWidth: s = !1,
    inputComponent: a = "input",
    label: l,
    multiline: c = !1,
    notched: u,
    slots: d = {},
    slotProps: p = {},
    type: v = "text",
    ...S
  } = r, g = mb(r), y = $n(), h = Rn({
    props: r,
    muiFormControl: y,
    states: ["color", "disabled", "error", "focused", "hiddenLabel", "size", "required"]
  }), C = {
    ...r,
    color: h.color || "primary",
    disabled: h.disabled,
    error: h.error,
    focused: h.focused,
    formControl: y,
    fullWidth: s,
    hiddenLabel: h.hiddenLabel,
    multiline: c,
    size: h.size,
    type: v
  }, w = d.root ?? i.Root ?? hb, E = d.input ?? i.Input ?? bb, [T, b] = he("notchedOutline", {
    elementType: gb,
    className: g.notchedOutline,
    shouldForwardComponentProp: !0,
    ownerState: C,
    externalForwardedProps: {
      slots: d,
      slotProps: p
    },
    additionalProps: {
      label: l != null && l !== "" && h.required ? /* @__PURE__ */ x.jsxs(m.Fragment, {
        children: [l, " ", "*"]
      }) : l
    }
  });
  return /* @__PURE__ */ x.jsx(br, {
    slots: {
      root: w,
      input: E
    },
    slotProps: p,
    renderSuffix: (O) => /* @__PURE__ */ x.jsx(T, {
      ...b,
      notched: typeof u < "u" ? u : !!(O.startAdornment || O.filled || O.focused)
    }),
    fullWidth: s,
    inputComponent: a,
    multiline: c,
    ref: o,
    type: v,
    ...S,
    classes: {
      ...g,
      notchedOutline: null
    }
  });
});
fb.NODE_ENV !== "production" && (xr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: n.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: n.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: n.oneOfType([n.oneOf(["primary", "secondary"]), n.string]),
  /**
   * The components used for each slot inside.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: n.shape({
    Input: n.elementType,
    Root: n.elementType
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: n.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: n.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: n.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: n.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: n.bool,
  /**
   * The id of the `input` element.
   */
  id: n.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: n.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: n.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: Mt,
  /**
   * The label of the `input`. It is only used for layout. The actual labelling
   * is handled by `InputLabel`.
   */
  label: n.node,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: n.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: n.oneOfType([n.number, n.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: n.oneOfType([n.number, n.string]),
  /**
   * If `true`, a [TextareaAutosize](https://mui.com/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: n.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: n.string,
  /**
   * If `true`, the outline is notched to accommodate the label.
   */
  notched: n.bool,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: n.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: n.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: n.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: n.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: n.oneOfType([n.number, n.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: n.shape({
    input: n.object,
    notchedOutline: n.oneOfType([n.func, n.object]),
    root: n.object
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: n.shape({
    input: n.elementType,
    notchedOutline: n.elementType,
    root: n.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: n.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#input_types).
   * @default 'text'
   */
  type: n.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: n.any
});
xr.muiName = "Input";
function Zl(e) {
  return ge("MuiSelect", e);
}
const Dn = fe("MuiSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "focused", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]);
var Po = {}, ha;
const yb = G(Gl, {
  name: "MuiSelect",
  slot: "Select",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [
      // Win specificity over the input base
      {
        [`&.${Dn.select}`]: t.select
      },
      {
        [`&.${Dn.select}`]: t[o.variant]
      },
      {
        [`&.${Dn.error}`]: t.error
      },
      {
        [`&.${Dn.multiple}`]: t.multiple
      }
    ];
  }
})({
  // Win specificity over the input base
  [`&.${Dn.select}`]: {
    height: "auto",
    // Resets for multiple select with chips
    minHeight: "1.4375em",
    // Required for select\text-field height consistency
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  }
}), vb = G(Xl, {
  name: "MuiSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.icon, o.variant && t[`icon${W(o.variant)}`], o.open && t.iconOpen];
  }
})({}), xb = G("input", {
  shouldForwardProp: (e) => al(e) && e !== "classes",
  name: "MuiSelect",
  slot: "NativeInput"
})({
  bottom: 0,
  left: 0,
  position: "absolute",
  opacity: 0,
  pointerEvents: "none",
  width: "100%",
  boxSizing: "border-box"
});
function ga(e, t) {
  return typeof t == "object" && t !== null ? e === t : String(e) === String(t);
}
function Sb(e) {
  return e == null || typeof e == "string" && !e.trim();
}
const Tb = (e) => {
  const {
    classes: t,
    variant: o,
    disabled: r,
    multiple: i,
    open: s,
    error: a
  } = e, l = {
    select: ["select", o, r && "disabled", i && "multiple", a && "error"],
    icon: ["icon", `icon${W(o)}`, s && "iconOpen", r && "disabled"],
    nativeInput: ["nativeInput"]
  };
  return ye(l, Zl, t);
}, ec = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const {
    "aria-describedby": r,
    "aria-label": i,
    autoFocus: s,
    autoWidth: a,
    children: l,
    className: c,
    defaultOpen: u,
    defaultValue: d,
    disabled: p,
    displayEmpty: v,
    error: S = !1,
    IconComponent: g,
    inputRef: y,
    labelId: h,
    MenuProps: C = {},
    multiple: w,
    name: E,
    onBlur: T,
    onChange: b,
    onClose: O,
    onFocus: _,
    // eslint-disable-next-line react/prop-types
    onKeyDown: D,
    // eslint-disable-next-line react/prop-types
    onMouseDown: A,
    onOpen: L,
    open: z,
    readOnly: f,
    renderValue: I,
    required: R,
    SelectDisplayProps: k = {},
    tabIndex: j,
    // catching `type` from Input which makes no sense for SelectInput
    type: V,
    value: ee,
    variant: H = "standard",
    ...se
  } = t, [$, B] = Ls({
    controlled: ee,
    default: d,
    name: "Select"
  }), [X, ne] = Ls({
    controlled: z,
    default: u,
    name: "Select"
  }), Q = m.useRef(null), F = m.useRef(null), [K, re] = m.useState(null), {
    current: te
  } = m.useRef(z != null), [Y, U] = m.useState(), ue = Ze(o, y), P = m.useCallback((Z) => {
    F.current = Z, Z && re(Z);
  }, []), q = K?.parentNode;
  m.useImperativeHandle(ue, () => ({
    focus: () => {
      F.current.focus();
    },
    node: Q.current,
    value: $
  }), [$]);
  const de = K !== null && X;
  m.useEffect(() => {
    if (!de || !q || a || typeof ResizeObserver > "u")
      return;
    const Z = new ResizeObserver(() => {
      U(q.clientWidth);
    });
    return Z.observe(q), () => {
      Z.disconnect();
    };
  }, [de, q, a]), m.useEffect(() => {
    u && X && K && !te && (U(a ? null : q.clientWidth), F.current.focus());
  }, [K, a]), m.useEffect(() => {
    s && F.current.focus();
  }, [s]), m.useEffect(() => {
    if (!h)
      return;
    const Z = nt(F.current).getElementById(h);
    if (Z) {
      const me = () => {
        getSelection().isCollapsed && F.current.focus();
      };
      return Z.addEventListener("click", me), () => {
        Z.removeEventListener("click", me);
      };
    }
  }, [h]);
  const ae = (Z, me) => {
    Z ? L && L(me) : O && O(me), te || (U(a ? null : q.clientWidth), ne(Z));
  }, Se = (Z) => {
    A?.(Z), Z.button === 0 && (Z.preventDefault(), F.current.focus(), ae(!0, Z));
  }, Me = (Z) => {
    ae(!1, Z);
  }, Pe = m.Children.toArray(l), Xe = (Z) => {
    const me = Pe.find((We) => We.props.value === Z.target.value);
    me !== void 0 && (B(me.props.value), b && b(Z, me));
  }, Be = (Z) => (me) => {
    let We;
    if (me.currentTarget.hasAttribute("tabindex")) {
      if (w) {
        We = Array.isArray($) ? $.slice() : [];
        const Et = $.indexOf(Z.props.value);
        Et === -1 ? We.push(Z.props.value) : We.splice(Et, 1);
      } else
        We = Z.props.value;
      if (Z.props.onClick && Z.props.onClick(me), $ !== We && (B(We), b)) {
        const Et = me.nativeEvent || me, ln = new Et.constructor(Et.type, Et);
        Object.defineProperty(ln, "target", {
          writable: !0,
          value: {
            value: We,
            name: E
          }
        }), b(ln, Z);
      }
      w || ae(!1, me);
    }
  }, le = (Z) => {
    f || ([
      " ",
      "ArrowUp",
      "ArrowDown",
      // The native select doesn't respond to enter on macOS, but it's recommended by
      // https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/
      "Enter"
    ].includes(Z.key) && (Z.preventDefault(), ae(!0, Z)), D?.(Z));
  }, st = (Z) => {
    !de && T && (Object.defineProperty(Z, "target", {
      writable: !0,
      value: {
        value: $,
        name: E
      }
    }), T(Z));
  };
  delete se["aria-invalid"];
  let Fe, Wt;
  const ut = [];
  let yt = !1, vt = !1;
  (Lo({
    value: $
  }) || v) && (I ? Fe = I($) : yt = !0);
  const dt = Pe.map((Z) => {
    if (!/* @__PURE__ */ m.isValidElement(Z))
      return null;
    Po.NODE_ENV !== "production" && Ut.isFragment(Z) && console.error(["MUI: The Select component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`));
    let me;
    if (w) {
      if (!Array.isArray($))
        throw new Error(Po.NODE_ENV !== "production" ? "MUI: The `value` prop must be an array when using the `Select` component with `multiple`." : Ft(2));
      me = $.some((We) => ga(We, Z.props.value)), me && yt && ut.push(Z.props.children);
    } else
      me = ga($, Z.props.value), me && yt && (Wt = Z.props.children);
    return me && (vt = !0), /* @__PURE__ */ m.cloneElement(Z, {
      "aria-selected": me ? "true" : "false",
      onClick: Be(Z),
      onKeyUp: (We) => {
        We.key === " " && We.preventDefault(), Z.props.onKeyUp && Z.props.onKeyUp(We);
      },
      role: "option",
      selected: me,
      value: void 0,
      // The value is most likely not a valid HTML attribute.
      "data-value": Z.props.value
      // Instead, we provide it as a data attribute.
    });
  });
  Po.NODE_ENV !== "production" && m.useEffect(() => {
    if (!vt && !w && $ !== "") {
      const Z = Pe.map((me) => me.props.value);
      console.warn([`MUI: You have provided an out-of-range value \`${$}\` for the select ${E ? `(name="${E}") ` : ""}component.`, "Consider providing a value that matches one of the available options or ''.", `The available values are ${Z.filter((me) => me != null).map((me) => `\`${me}\``).join(", ") || '""'}.`].join(`
`));
    }
  }, [vt, Pe, w, E, $]), yt && (w ? ut.length === 0 ? Fe = null : Fe = ut.reduce((Z, me, We) => (Z.push(me), We < ut.length - 1 && Z.push(", "), Z), []) : Fe = Wt);
  let jt = Y;
  !a && te && K && (jt = q.clientWidth);
  let Te;
  typeof j < "u" ? Te = j : Te = p ? null : 0;
  const pt = k.id || (E ? `mui-component-select-${E}` : void 0), N = {
    ...t,
    variant: H,
    value: $,
    open: de,
    error: S
  }, J = Tb(N), pe = {
    ...C.PaperProps,
    ...typeof C.slotProps?.paper == "function" ? C.slotProps.paper(N) : C.slotProps?.paper
  }, je = {
    ...C.MenuListProps,
    ...typeof C.slotProps?.list == "function" ? C.slotProps.list(N) : C.slotProps?.list
  }, Ke = uo();
  return /* @__PURE__ */ x.jsxs(m.Fragment, {
    children: [/* @__PURE__ */ x.jsx(yb, {
      as: "div",
      ref: P,
      tabIndex: Te,
      role: "combobox",
      "aria-controls": de ? Ke : void 0,
      "aria-disabled": p ? "true" : void 0,
      "aria-expanded": de ? "true" : "false",
      "aria-haspopup": "listbox",
      "aria-label": i,
      "aria-labelledby": [h, pt].filter(Boolean).join(" ") || void 0,
      "aria-describedby": r,
      "aria-required": R ? "true" : void 0,
      "aria-invalid": S ? "true" : void 0,
      onKeyDown: le,
      onMouseDown: p || f ? null : Se,
      onBlur: st,
      onFocus: _,
      ...k,
      ownerState: N,
      className: ie(k.className, J.select, c),
      id: pt,
      children: Sb(Fe) ? (
        // notranslate needed while Google Translate will not fix zero-width space issue
        ha || (ha = /* @__PURE__ */ x.jsx("span", {
          className: "notranslate",
          "aria-hidden": !0,
          children: "​"
        }))
      ) : Fe
    }), /* @__PURE__ */ x.jsx(xb, {
      "aria-invalid": S,
      value: Array.isArray($) ? $.join(",") : $,
      name: E,
      ref: Q,
      "aria-hidden": !0,
      onChange: Xe,
      tabIndex: -1,
      disabled: p,
      className: J.nativeInput,
      autoFocus: s,
      required: R,
      ...se,
      ownerState: N
    }), /* @__PURE__ */ x.jsx(vb, {
      as: g,
      className: J.icon,
      ownerState: N
    }), /* @__PURE__ */ x.jsx(Yl, {
      id: `menu-${E || ""}`,
      anchorEl: q,
      open: de,
      onClose: Me,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "center"
      },
      transformOrigin: {
        vertical: "top",
        horizontal: "center"
      },
      ...C,
      slotProps: {
        ...C.slotProps,
        list: {
          "aria-labelledby": h,
          role: "listbox",
          "aria-multiselectable": w ? "true" : void 0,
          disableListWrap: !0,
          id: Ke,
          ...je
        },
        paper: {
          ...pe,
          style: {
            minWidth: jt,
            ...pe != null ? pe.style : null
          }
        }
      },
      children: dt
    })]
  });
});
Po.NODE_ENV !== "production" && (ec.propTypes = {
  /**
   * @ignore
   */
  "aria-describedby": n.string,
  /**
   * @ignore
   */
  "aria-label": n.string,
  /**
   * @ignore
   */
  autoFocus: n.bool,
  /**
   * If `true`, the width of the popover will automatically be set according to the items inside the
   * menu, otherwise it will be at least the width of the select input.
   */
  autoWidth: n.bool,
  /**
   * The option elements to populate the select with.
   * Can be some `<MenuItem>` elements.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * The CSS class name of the select element.
   */
  className: n.string,
  /**
   * If `true`, the component is toggled on mount. Use when the component open state is not controlled.
   * You can only use it when the `native` prop is `false` (default).
   */
  defaultOpen: n.bool,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: n.any,
  /**
   * If `true`, the select is disabled.
   */
  disabled: n.bool,
  /**
   * If `true`, the selected item is displayed even if its value is empty.
   */
  displayEmpty: n.bool,
  /**
   * If `true`, the `select input` will indicate an error.
   */
  error: n.bool,
  /**
   * The icon that displays the arrow.
   */
  IconComponent: n.elementType.isRequired,
  /**
   * Imperative handle implementing `{ value: T, node: HTMLElement, focus(): void }`
   * Equivalent to `ref`
   */
  inputRef: Mt,
  /**
   * The ID of an element that acts as an additional label. The Select will
   * be labelled by the additional label and the selected value.
   */
  labelId: n.string,
  /**
   * Props applied to the [`Menu`](/material-ui/api/menu/) element.
   */
  MenuProps: n.object,
  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   */
  multiple: n.bool,
  /**
   * Name attribute of the `select` or hidden `input` element.
   */
  name: n.string,
  /**
   * @ignore
   */
  onBlur: n.func,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * @param {object} [child] The react element that was selected.
   */
  onChange: n.func,
  /**
   * Callback fired when the component requests to be closed.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onClose: n.func,
  /**
   * @ignore
   */
  onFocus: n.func,
  /**
   * Callback fired when the component requests to be opened.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onOpen: n.func,
  /**
   * If `true`, the component is shown.
   */
  open: n.bool,
  /**
   * @ignore
   */
  readOnly: n.bool,
  /**
   * Render the selected value.
   *
   * @param {any} value The `value` provided to the component.
   * @returns {ReactNode}
   */
  renderValue: n.func,
  /**
   * If `true`, the component is required.
   */
  required: n.bool,
  /**
   * Props applied to the clickable div element.
   */
  SelectDisplayProps: n.object,
  /**
   * @ignore
   */
  tabIndex: n.oneOfType([n.number, n.string]),
  /**
   * @ignore
   */
  type: n.any,
  /**
   * The input value.
   */
  value: n.any,
  /**
   * The variant to use.
   */
  variant: n.oneOf(["standard", "outlined", "filled"])
});
var Cb = {};
const Eb = (e) => {
  const {
    classes: t
  } = e, r = ye({
    root: ["root"]
  }, Zl, t);
  return {
    ...t,
    ...r
  };
}, Vi = {
  name: "MuiSelect",
  slot: "Root",
  shouldForwardProp: (e) => bt(e) && e !== "variant"
}, wb = G(vr, Vi)(""), Ob = G(xr, Vi)(""), Pb = G(yr, Vi)(""), Sr = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = ve({
    name: "MuiSelect",
    props: t
  }), {
    autoWidth: i = !1,
    children: s,
    classes: a = {},
    className: l,
    defaultOpen: c = !1,
    displayEmpty: u = !1,
    IconComponent: d = ah,
    id: p,
    input: v,
    inputProps: S,
    label: g,
    labelId: y,
    MenuProps: h,
    multiple: C = !1,
    native: w = !1,
    onClose: E,
    onOpen: T,
    open: b,
    renderValue: O,
    SelectDisplayProps: _,
    variant: D = "outlined",
    ...A
  } = r, L = w ? Jl : ec, z = $n(), f = Rn({
    props: r,
    muiFormControl: z,
    states: ["variant", "error"]
  }), I = f.variant || D, R = {
    ...r,
    variant: I,
    classes: a
  }, k = Eb(R), {
    root: j,
    ...V
  } = k, ee = v || {
    standard: /* @__PURE__ */ x.jsx(wb, {
      ownerState: R
    }),
    outlined: /* @__PURE__ */ x.jsx(Ob, {
      label: g,
      ownerState: R
    }),
    filled: /* @__PURE__ */ x.jsx(Pb, {
      ownerState: R
    })
  }[I], H = Ze(o, Pn(ee));
  return /* @__PURE__ */ x.jsx(m.Fragment, {
    children: /* @__PURE__ */ m.cloneElement(ee, {
      // Most of the logic is implemented in `SelectInput`.
      // The `Select` component is a simple API wrapper to expose something better to play with.
      inputComponent: L,
      inputProps: {
        children: s,
        error: f.error,
        IconComponent: d,
        variant: I,
        type: void 0,
        // We render a select. We can ignore the type provided by the `Input`.
        multiple: C,
        ...w ? {
          id: p
        } : {
          autoWidth: i,
          defaultOpen: c,
          displayEmpty: u,
          labelId: y,
          MenuProps: h,
          onClose: E,
          onOpen: T,
          open: b,
          renderValue: O,
          SelectDisplayProps: {
            id: p,
            ..._
          }
        },
        ...S,
        classes: S ? Ge(V, S.classes) : V,
        ...v ? v.props.inputProps : {}
      },
      ...(C && w || u) && I === "outlined" ? {
        notched: !0
      } : {},
      ref: H,
      className: ie(ee.props.className, l, k.root),
      // If a custom input is provided via 'input' prop, do not allow 'variant' to be propagated to it's root element. See https://github.com/mui/material-ui/issues/33894.
      ...!v && {
        variant: I
      },
      ...A
    })
  });
});
Cb.NODE_ENV !== "production" && (Sr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the width of the popover will automatically be set according to the items inside the
   * menu, otherwise it will be at least the width of the select input.
   * @default false
   */
  autoWidth: n.bool,
  /**
   * The option elements to populate the select with.
   * Can be some `MenuItem` when `native` is false and `option` when `native` is true.
   *
   * ⚠️The `MenuItem` elements **must** be direct descendants when `native` is false.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   * @default {}
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * If `true`, the component is initially open. Use when the component open state is not controlled (i.e. the `open` prop is not defined).
   * You can only use it when the `native` prop is `false` (default).
   * @default false
   */
  defaultOpen: n.bool,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: n.any,
  /**
   * If `true`, a value is displayed even if no items are selected.
   *
   * In order to display a meaningful value, a function can be passed to the `renderValue` prop which
   * returns the value to be displayed when no items are selected.
   *
   * ⚠️ When using this prop, make sure the label doesn't overlap with the empty displayed value.
   * The label should either be hidden or forced to a shrunk state.
   * @default false
   */
  displayEmpty: n.bool,
  /**
   * The icon that displays the arrow.
   * @default ArrowDropDownIcon
   */
  IconComponent: n.elementType,
  /**
   * The `id` of the wrapper element or the `select` element when `native`.
   */
  id: n.string,
  /**
   * An `Input` element; does not have to be a material-ui specific `Input`.
   */
  input: n.element,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#attributes) applied to the `input` element.
   * When `native` is `true`, the attributes are applied on the `select` element.
   */
  inputProps: n.object,
  /**
   * See [OutlinedInput#label](https://mui.com/material-ui/api/outlined-input/#props)
   */
  label: n.node,
  /**
   * The ID of an element that acts as an additional label. The Select will
   * be labelled by the additional label and the selected value.
   */
  labelId: n.string,
  /**
   * Props applied to the [`Menu`](https://mui.com/material-ui/api/menu/) element.
   */
  MenuProps: n.object,
  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   * @default false
   */
  multiple: n.bool,
  /**
   * If `true`, the component uses a native `select` element.
   * @default false
   */
  native: n.bool,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {SelectChangeEvent<Value>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * **Warning**: This is a generic event, not a change event, unless the change event is caused by browser autofill.
   * @param {object} [child] The react element that was selected when `native` is `false` (default).
   */
  onChange: n.func,
  /**
   * Callback fired when the component requests to be closed.
   * Use it in either controlled (see the `open` prop), or uncontrolled mode (to detect when the Select collapses).
   *
   * @param {object} event The event source of the callback.
   */
  onClose: n.func,
  /**
   * Callback fired when the component requests to be opened.
   * Use it in either controlled (see the `open` prop), or uncontrolled mode (to detect when the Select expands).
   *
   * @param {object} event The event source of the callback.
   */
  onOpen: n.func,
  /**
   * If `true`, the component is shown.
   * You can only use it when the `native` prop is `false` (default).
   */
  open: n.bool,
  /**
   * Render the selected value.
   * You can only use it when the `native` prop is `false` (default).
   *
   * @param {any} value The `value` provided to the component.
   * @returns {ReactNode}
   */
  renderValue: n.func,
  /**
   * Props applied to the clickable div element.
   */
  SelectDisplayProps: n.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The `input` value. Providing an empty string will select no options.
   * Set to an empty string `''` if you don't want any of the available options to be selected.
   *
   * If the value is an object it must have reference equality with the option in order to be selected.
   * If the value is not an object, the string representation must match with the string representation of the option in order to be selected.
   */
  value: n.oneOfType([n.oneOf([""]), n.any]),
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: n.oneOf(["filled", "outlined", "standard"])
});
Sr.muiName = "Select";
function Rb(e = {}) {
  const {
    autoHideDuration: t = null,
    disableWindowBlurListener: o = !1,
    onClose: r,
    open: i,
    resumeHideDuration: s
  } = e, a = ji();
  m.useEffect(() => {
    if (!i)
      return;
    function C(w) {
      w.defaultPrevented || w.key === "Escape" && r?.(w, "escapeKeyDown");
    }
    return document.addEventListener("keydown", C), () => {
      document.removeEventListener("keydown", C);
    };
  }, [i, r]);
  const l = ct((C, w) => {
    r?.(C, w);
  }), c = ct((C) => {
    !r || C == null || a.start(C, () => {
      l(null, "timeout");
    });
  });
  m.useEffect(() => (i && c(t), a.clear), [i, t, c, a]);
  const u = (C) => {
    r?.(C, "clickaway");
  }, d = a.clear, p = m.useCallback(() => {
    t != null && c(s ?? t * 0.5);
  }, [t, s, c]), v = (C) => (w) => {
    const E = C.onBlur;
    E?.(w), p();
  }, S = (C) => (w) => {
    const E = C.onFocus;
    E?.(w), d();
  }, g = (C) => (w) => {
    const E = C.onMouseEnter;
    E?.(w), d();
  }, y = (C) => (w) => {
    const E = C.onMouseLeave;
    E?.(w), p();
  };
  return m.useEffect(() => {
    if (!o && i)
      return window.addEventListener("focus", p), window.addEventListener("blur", d), () => {
        window.removeEventListener("focus", p), window.removeEventListener("blur", d);
      };
  }, [o, i, p, d]), {
    getRootProps: (C = {}) => {
      const w = {
        ...Do(e),
        ...Do(C)
      };
      return {
        // ClickAwayListener adds an `onClick` prop which results in the alert not being announced.
        // See https://github.com/mui/material-ui/issues/29080
        role: "presentation",
        ...C,
        ...w,
        onBlur: v(w),
        onFocus: S(w),
        onMouseEnter: g(w),
        onMouseLeave: y(w)
      };
    },
    onClickAway: u
  };
}
function $b(e) {
  return ge("MuiSnackbarContent", e);
}
fe("MuiSnackbarContent", ["root", "message", "action"]);
var kb = {};
const Ib = (e) => {
  const {
    classes: t
  } = e;
  return ye({
    root: ["root"],
    action: ["action"],
    message: ["message"]
  }, $b, t);
}, _b = G(St, {
  name: "MuiSnackbarContent",
  slot: "Root"
})(xe(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? 0.8 : 0.98;
  return {
    ...e.typography.body2,
    color: e.vars ? e.vars.palette.SnackbarContent.color : e.palette.getContrastText(Jr(e.palette.background.default, t)),
    backgroundColor: e.vars ? e.vars.palette.SnackbarContent.bg : Jr(e.palette.background.default, t),
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    padding: "6px 16px",
    flexGrow: 1,
    [e.breakpoints.up("sm")]: {
      flexGrow: "initial",
      minWidth: 288
    }
  };
})), Nb = G("div", {
  name: "MuiSnackbarContent",
  slot: "Message"
})({
  padding: "8px 0"
}), Mb = G("div", {
  name: "MuiSnackbarContent",
  slot: "Action"
})({
  display: "flex",
  alignItems: "center",
  marginLeft: "auto",
  paddingLeft: 16,
  marginRight: -8
}), tc = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = ve({
    props: t,
    name: "MuiSnackbarContent"
  }), {
    action: i,
    className: s,
    message: a,
    role: l = "alert",
    ...c
  } = r, u = r, d = Ib(u);
  return /* @__PURE__ */ x.jsxs(_b, {
    role: l,
    elevation: 6,
    className: ie(d.root, s),
    ownerState: u,
    ref: o,
    ...c,
    children: [/* @__PURE__ */ x.jsx(Nb, {
      className: d.message,
      ownerState: u,
      children: a
    }), i ? /* @__PURE__ */ x.jsx(Mb, {
      className: d.action,
      ownerState: u,
      children: i
    }) : null]
  });
});
kb.NODE_ENV !== "production" && (tc.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The action to display. It renders after the message, at the end of the snackbar.
   */
  action: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The message to display.
   */
  message: n.node,
  /**
   * The ARIA role attribute of the element.
   * @default 'alert'
   */
  role: n.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object])
});
function jb(e) {
  return ge("MuiSnackbar", e);
}
fe("MuiSnackbar", ["root", "anchorOriginTopCenter", "anchorOriginBottomCenter", "anchorOriginTopRight", "anchorOriginBottomRight", "anchorOriginTopLeft", "anchorOriginBottomLeft"]);
var Ab = {};
const Db = (e) => {
  const {
    classes: t,
    anchorOrigin: o
  } = e, r = {
    root: ["root", `anchorOrigin${W(o.vertical)}${W(o.horizontal)}`]
  };
  return ye(r, jb, t);
}, Bb = G("div", {
  name: "MuiSnackbar",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, t[`anchorOrigin${W(o.anchorOrigin.vertical)}${W(o.anchorOrigin.horizontal)}`]];
  }
})(xe(({
  theme: e
}) => ({
  zIndex: (e.vars || e).zIndex.snackbar,
  position: "fixed",
  display: "flex",
  left: 8,
  right: 8,
  justifyContent: "center",
  alignItems: "center",
  variants: [{
    props: ({
      ownerState: t
    }) => t.anchorOrigin.vertical === "top",
    style: {
      top: 8,
      [e.breakpoints.up("sm")]: {
        top: 24
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.anchorOrigin.vertical !== "top",
    style: {
      bottom: 8,
      [e.breakpoints.up("sm")]: {
        bottom: 24
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.anchorOrigin.horizontal === "left",
    style: {
      justifyContent: "flex-start",
      [e.breakpoints.up("sm")]: {
        left: 24,
        right: "auto"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.anchorOrigin.horizontal === "right",
    style: {
      justifyContent: "flex-end",
      [e.breakpoints.up("sm")]: {
        right: 24,
        left: "auto"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.anchorOrigin.horizontal === "center",
    style: {
      [e.breakpoints.up("sm")]: {
        left: "50%",
        right: "auto",
        transform: "translateX(-50%)"
      }
    }
  }]
}))), nc = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = ve({
    props: t,
    name: "MuiSnackbar"
  }), i = On(), s = {
    enter: i.transitions.duration.enteringScreen,
    exit: i.transitions.duration.leavingScreen
  }, {
    action: a,
    anchorOrigin: {
      vertical: l,
      horizontal: c
    } = {
      vertical: "bottom",
      horizontal: "left"
    },
    autoHideDuration: u = null,
    children: d,
    className: p,
    ClickAwayListenerProps: v,
    ContentProps: S,
    disableWindowBlurListener: g = !1,
    message: y,
    onBlur: h,
    onClose: C,
    onFocus: w,
    onMouseEnter: E,
    onMouseLeave: T,
    open: b,
    resumeHideDuration: O,
    slots: _ = {},
    slotProps: D = {},
    TransitionComponent: A,
    transitionDuration: L = s,
    TransitionProps: {
      onEnter: z,
      onExited: f,
      ...I
    } = {},
    ...R
  } = r, k = {
    ...r,
    anchorOrigin: {
      vertical: l,
      horizontal: c
    },
    autoHideDuration: u,
    disableWindowBlurListener: g,
    TransitionComponent: A,
    transitionDuration: L
  }, j = Db(k), {
    getRootProps: V,
    onClickAway: ee
  } = Rb(k), [H, se] = m.useState(!0), $ = (P) => {
    se(!0), f && f(P);
  }, B = (P, q) => {
    se(!1), z && z(P, q);
  }, X = {
    slots: {
      transition: A,
      ..._
    },
    slotProps: {
      content: S,
      clickAwayListener: v,
      transition: I,
      ...D
    }
  }, [ne, Q] = he("root", {
    ref: o,
    className: [j.root, p],
    elementType: Bb,
    getSlotProps: V,
    externalForwardedProps: {
      ...X,
      ...R
    },
    ownerState: k
  }), [F, {
    ownerState: K,
    ...re
  }] = he("clickAwayListener", {
    elementType: Wo,
    externalForwardedProps: X,
    getSlotProps: (P) => ({
      onClickAway: (...q) => {
        const de = q[0];
        P.onClickAway?.(...q), !de?.defaultMuiPrevented && ee(...q);
      }
    }),
    ownerState: k
  }), [te, Y] = he("content", {
    elementType: tc,
    shouldForwardComponentProp: !0,
    externalForwardedProps: X,
    additionalProps: {
      message: y,
      action: a
    },
    ownerState: k
  }), [U, ue] = he("transition", {
    elementType: ro,
    externalForwardedProps: X,
    getSlotProps: (P) => ({
      onEnter: (...q) => {
        P.onEnter?.(...q), B(...q);
      },
      onExited: (...q) => {
        P.onExited?.(...q), $(...q);
      }
    }),
    additionalProps: {
      appear: !0,
      in: b,
      timeout: L,
      direction: l === "top" ? "down" : "up"
    },
    ownerState: k
  });
  return !b && H ? null : /* @__PURE__ */ x.jsx(F, {
    ...re,
    ..._.clickAwayListener && {
      ownerState: K
    },
    children: /* @__PURE__ */ x.jsx(ne, {
      ...Q,
      children: /* @__PURE__ */ x.jsx(U, {
        ...ue,
        children: d || /* @__PURE__ */ x.jsx(te, {
          ...Y
        })
      })
    })
  });
});
Ab.NODE_ENV !== "production" && (nc.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The action to display. It renders after the message, at the end of the snackbar.
   */
  action: n.node,
  /**
   * The anchor of the `Snackbar`.
   * On smaller screens, the component grows to occupy all the available width,
   * the horizontal alignment is ignored.
   * @default { vertical: 'bottom', horizontal: 'left' }
   */
  anchorOrigin: n.shape({
    horizontal: n.oneOf(["center", "left", "right"]).isRequired,
    vertical: n.oneOf(["bottom", "top"]).isRequired
  }),
  /**
   * The number of milliseconds to wait before automatically calling the
   * `onClose` function. `onClose` should then set the state of the `open`
   * prop to hide the Snackbar. This behavior is disabled by default with
   * the `null` value.
   * @default null
   */
  autoHideDuration: n.number,
  /**
   * Replace the `SnackbarContent` component.
   */
  children: n.element,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * Props applied to the `ClickAwayListener` element.
   * @deprecated Use `slotProps.clickAwayListener` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  ClickAwayListenerProps: n.object,
  /**
   * Props applied to the [`SnackbarContent`](https://mui.com/material-ui/api/snackbar-content/) element.
   * @deprecated Use `slotProps.content` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  ContentProps: n.object,
  /**
   * If `true`, the `autoHideDuration` timer will expire even if the window is not focused.
   * @default false
   */
  disableWindowBlurListener: n.bool,
  /**
   * When displaying multiple consecutive snackbars using a single parent-rendered
   * `<Snackbar/>`, add the `key` prop to ensure independent treatment of each message.
   * For instance, use `<Snackbar key={message} />`. Otherwise, messages might update
   * in place, and features like `autoHideDuration` could be affected.
   */
  key: () => null,
  /**
   * The message to display.
   */
  message: n.node,
  /**
   * @ignore
   */
  onBlur: n.func,
  /**
   * Callback fired when the component requests to be closed.
   * Typically `onClose` is used to set state in the parent component,
   * which is used to control the `Snackbar` `open` prop.
   * The `reason` parameter can optionally be used to control the response to `onClose`,
   * for example ignoring `clickaway`.
   *
   * @param {React.SyntheticEvent<any> | Event} event The event source of the callback.
   * @param {string} reason Can be: `"timeout"` (`autoHideDuration` expired), `"clickaway"`, or `"escapeKeyDown"`.
   */
  onClose: n.func,
  /**
   * @ignore
   */
  onFocus: n.func,
  /**
   * @ignore
   */
  onMouseEnter: n.func,
  /**
   * @ignore
   */
  onMouseLeave: n.func,
  /**
   * If `true`, the component is shown.
   */
  open: n.bool,
  /**
   * The number of milliseconds to wait before dismissing after user interaction.
   * If `autoHideDuration` prop isn't specified, it does nothing.
   * If `autoHideDuration` prop is specified but `resumeHideDuration` isn't,
   * we default to `autoHideDuration / 2` ms.
   */
  resumeHideDuration: n.number,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: n.shape({
    clickAwayListener: n.oneOfType([n.func, n.object]),
    content: n.oneOfType([n.func, n.object]),
    root: n.oneOfType([n.func, n.object]),
    transition: n.oneOfType([n.func, n.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: n.shape({
    clickAwayListener: n.elementType,
    content: n.elementType,
    root: n.elementType,
    transition: n.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @deprecated Use `slots.transition` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default Grow
   */
  TransitionComponent: n.elementType,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  transitionDuration: n.oneOfType([n.number, n.shape({
    appear: n.number,
    enter: n.number,
    exit: n.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @deprecated Use `slotProps.transition` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default {}
   */
  TransitionProps: n.object
});
var Fb = {};
const rt = _p({
  createStyledComponent: G("div", {
    name: "MuiStack",
    slot: "Root"
  }),
  useThemeProps: (e) => ve({
    props: e,
    name: "MuiStack"
  })
});
Fb.NODE_ENV !== "production" && (rt.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * Defines the `flex-direction` style property.
   * It is applied for all screen sizes.
   * @default 'column'
   */
  direction: n.oneOfType([n.oneOf(["column-reverse", "column", "row-reverse", "row"]), n.arrayOf(n.oneOf(["column-reverse", "column", "row-reverse", "row"])), n.object]),
  /**
   * Add an element between each child.
   */
  divider: n.node,
  /**
   * Defines the space between immediate children.
   * @default 0
   */
  spacing: n.oneOfType([n.arrayOf(n.oneOfType([n.number, n.string])), n.number, n.object, n.string]),
  /**
   * The system prop, which allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * If `true`, the CSS flexbox `gap` is used instead of applying `margin` to children.
   *
   * While CSS `gap` removes the [known limitations](https://mui.com/joy-ui/react-stack/#limitations),
   * it is not fully supported in some browsers. We recommend checking https://caniuse.com/?search=flex%20gap before using this flag.
   *
   * To enable this flag globally, follow the [theme's default props](https://mui.com/material-ui/customization/theme-components/#default-props) configuration.
   * @default false
   */
  useFlexGap: n.bool
});
function Lb(e) {
  return ge("MuiTab", e);
}
const ft = fe("MuiTab", ["root", "labelIcon", "textColorInherit", "textColorPrimary", "textColorSecondary", "selected", "disabled", "fullWidth", "wrapped", "iconWrapper", "icon"]);
var zb = {};
const Wb = (e) => {
  const {
    classes: t,
    textColor: o,
    fullWidth: r,
    wrapped: i,
    icon: s,
    label: a,
    selected: l,
    disabled: c
  } = e, u = {
    root: ["root", s && a && "labelIcon", `textColor${W(o)}`, r && "fullWidth", i && "wrapped", l && "selected", c && "disabled"],
    icon: ["iconWrapper", "icon"]
  };
  return ye(u, Lb, t);
}, Vb = G(Yt, {
  name: "MuiTab",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.label && o.icon && t.labelIcon, t[`textColor${W(o.textColor)}`], o.fullWidth && t.fullWidth, o.wrapped && t.wrapped, {
      [`& .${ft.iconWrapper}`]: t.iconWrapper
    }, {
      [`& .${ft.icon}`]: t.icon
    }];
  }
})(xe(({
  theme: e
}) => ({
  ...e.typography.button,
  maxWidth: 360,
  minWidth: 90,
  position: "relative",
  minHeight: 48,
  flexShrink: 0,
  padding: "12px 16px",
  overflow: "hidden",
  whiteSpace: "normal",
  textAlign: "center",
  lineHeight: 1.25,
  variants: [{
    props: ({
      ownerState: t
    }) => t.label && (t.iconPosition === "top" || t.iconPosition === "bottom"),
    style: {
      flexDirection: "column"
    }
  }, {
    props: ({
      ownerState: t
    }) => t.label && t.iconPosition !== "top" && t.iconPosition !== "bottom",
    style: {
      flexDirection: "row"
    }
  }, {
    props: ({
      ownerState: t
    }) => t.icon && t.label,
    style: {
      minHeight: 72,
      paddingTop: 9,
      paddingBottom: 9
    }
  }, {
    props: ({
      ownerState: t,
      iconPosition: o
    }) => t.icon && t.label && o === "top",
    style: {
      [`& > .${ft.icon}`]: {
        marginBottom: 6
      }
    }
  }, {
    props: ({
      ownerState: t,
      iconPosition: o
    }) => t.icon && t.label && o === "bottom",
    style: {
      [`& > .${ft.icon}`]: {
        marginTop: 6
      }
    }
  }, {
    props: ({
      ownerState: t,
      iconPosition: o
    }) => t.icon && t.label && o === "start",
    style: {
      [`& > .${ft.icon}`]: {
        marginRight: e.spacing(1)
      }
    }
  }, {
    props: ({
      ownerState: t,
      iconPosition: o
    }) => t.icon && t.label && o === "end",
    style: {
      [`& > .${ft.icon}`]: {
        marginLeft: e.spacing(1)
      }
    }
  }, {
    props: {
      textColor: "inherit"
    },
    style: {
      color: "inherit",
      opacity: 0.6,
      // same opacity as theme.palette.text.secondary
      [`&.${ft.selected}`]: {
        opacity: 1
      },
      [`&.${ft.disabled}`]: {
        opacity: (e.vars || e).palette.action.disabledOpacity
      }
    }
  }, {
    props: {
      textColor: "primary"
    },
    style: {
      color: (e.vars || e).palette.text.secondary,
      [`&.${ft.selected}`]: {
        color: (e.vars || e).palette.primary.main
      },
      [`&.${ft.disabled}`]: {
        color: (e.vars || e).palette.text.disabled
      }
    }
  }, {
    props: {
      textColor: "secondary"
    },
    style: {
      color: (e.vars || e).palette.text.secondary,
      [`&.${ft.selected}`]: {
        color: (e.vars || e).palette.secondary.main
      },
      [`&.${ft.disabled}`]: {
        color: (e.vars || e).palette.text.disabled
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.fullWidth,
    style: {
      flexShrink: 1,
      flexGrow: 1,
      flexBasis: 0,
      maxWidth: "none"
    }
  }, {
    props: ({
      ownerState: t
    }) => t.wrapped,
    style: {
      fontSize: e.typography.pxToRem(12)
    }
  }]
}))), Ro = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = ve({
    props: t,
    name: "MuiTab"
  }), {
    className: i,
    disabled: s = !1,
    disableFocusRipple: a = !1,
    // eslint-disable-next-line react/prop-types
    fullWidth: l,
    icon: c,
    iconPosition: u = "top",
    // eslint-disable-next-line react/prop-types
    indicator: d,
    label: p,
    onChange: v,
    onClick: S,
    onFocus: g,
    // eslint-disable-next-line react/prop-types
    selected: y,
    // eslint-disable-next-line react/prop-types
    selectionFollowsFocus: h,
    // eslint-disable-next-line react/prop-types
    textColor: C = "inherit",
    value: w,
    wrapped: E = !1,
    ...T
  } = r, b = {
    ...r,
    disabled: s,
    disableFocusRipple: a,
    selected: y,
    icon: !!c,
    iconPosition: u,
    label: !!p,
    fullWidth: l,
    textColor: C,
    wrapped: E
  }, O = Wb(b), _ = c && p && /* @__PURE__ */ m.isValidElement(c) ? /* @__PURE__ */ m.cloneElement(c, {
    className: ie(O.icon, c.props.className)
  }) : c, D = (L) => {
    !y && v && v(L, w), S && S(L);
  }, A = (L) => {
    h && !y && v && v(L, w), g && g(L);
  };
  return /* @__PURE__ */ x.jsxs(Vb, {
    focusRipple: !a,
    className: ie(O.root, i),
    ref: o,
    role: "tab",
    "aria-selected": y,
    disabled: s,
    onClick: D,
    onFocus: A,
    ownerState: b,
    tabIndex: y ? 0 : -1,
    ...T,
    children: [u === "top" || u === "start" ? /* @__PURE__ */ x.jsxs(m.Fragment, {
      children: [_, p]
    }) : /* @__PURE__ */ x.jsxs(m.Fragment, {
      children: [p, _]
    }), d]
  });
});
zb.NODE_ENV !== "production" && (Ro.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop isn't supported.
   * Use the `component` prop if you need to change the children structure.
   */
  children: cl,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: n.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: n.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: n.bool,
  /**
   * The icon to display.
   */
  icon: n.oneOfType([n.element, n.string]),
  /**
   * The position of the icon relative to the label.
   * @default 'top'
   */
  iconPosition: n.oneOf(["bottom", "end", "start", "top"]),
  /**
   * The label element.
   */
  label: n.node,
  /**
   * @ignore
   */
  onChange: n.func,
  /**
   * @ignore
   */
  onClick: n.func,
  /**
   * @ignore
   */
  onFocus: n.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * You can provide your own value. Otherwise, we fallback to the child position index.
   */
  value: n.any,
  /**
   * Tab labels appear in a single row.
   * They can use a second line if needed.
   * @default false
   */
  wrapped: n.bool
});
const Ub = zt(/* @__PURE__ */ x.jsx("path", {
  d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"
}), "KeyboardArrowLeft"), Hb = zt(/* @__PURE__ */ x.jsx("path", {
  d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"
}), "KeyboardArrowRight");
function qb(e) {
  return (1 + Math.sin(Math.PI * e - Math.PI / 2)) / 2;
}
function Yb(e, t, o, r = {}, i = () => {
}) {
  const {
    ease: s = qb,
    duration: a = 300
    // standard
  } = r;
  let l = null;
  const c = t[e];
  let u = !1;
  const d = () => {
    u = !0;
  }, p = (v) => {
    if (u) {
      i(new Error("Animation cancelled"));
      return;
    }
    l === null && (l = v);
    const S = Math.min(1, (v - l) / a);
    if (t[e] = s(S) * (o - c) + c, S >= 1) {
      requestAnimationFrame(() => {
        i(null);
      });
      return;
    }
    requestAnimationFrame(p);
  };
  return c === o ? (i(new Error("Element already at target position")), d) : (requestAnimationFrame(p), d);
}
var Kb = {};
const Gb = {
  width: 99,
  height: 99,
  position: "absolute",
  top: -9999,
  overflow: "scroll"
};
function oc(e) {
  const {
    onChange: t,
    ...o
  } = e, r = m.useRef(), i = m.useRef(null), s = () => {
    r.current = i.current.offsetHeight - i.current.clientHeight;
  };
  return Lt(() => {
    const a = dr(() => {
      const c = r.current;
      s(), c !== r.current && t(r.current);
    }), l = Ct(i.current);
    return l.addEventListener("resize", a), () => {
      a.clear(), l.removeEventListener("resize", a);
    };
  }, [t]), m.useEffect(() => {
    s(), t(r.current);
  }, [t]), /* @__PURE__ */ x.jsx("div", {
    style: Gb,
    ...o,
    ref: i
  });
}
Kb.NODE_ENV !== "production" && (oc.propTypes = {
  onChange: n.func.isRequired
});
function Xb(e) {
  return ge("MuiTabScrollButton", e);
}
const Jb = fe("MuiTabScrollButton", ["root", "vertical", "horizontal", "disabled"]);
var Qb = {};
const Zb = (e) => {
  const {
    classes: t,
    orientation: o,
    disabled: r
  } = e;
  return ye({
    root: ["root", o, r && "disabled"]
  }, Xb, t);
}, ey = G(Yt, {
  name: "MuiTabScrollButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.orientation && t[o.orientation]];
  }
})({
  width: 40,
  flexShrink: 0,
  opacity: 0.8,
  [`&.${Jb.disabled}`]: {
    opacity: 0
  },
  variants: [{
    props: {
      orientation: "vertical"
    },
    style: {
      width: "100%",
      height: 40,
      "& svg": {
        transform: "var(--TabScrollButton-svgRotate)"
      }
    }
  }]
}), rc = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = ve({
    props: t,
    name: "MuiTabScrollButton"
  }), {
    className: i,
    slots: s = {},
    slotProps: a = {},
    direction: l,
    orientation: c,
    disabled: u,
    ...d
  } = r, p = $i(), v = {
    isRtl: p,
    ...r
  }, S = Zb(v), g = s.StartScrollButtonIcon ?? Ub, y = s.EndScrollButtonIcon ?? Hb, h = oo({
    elementType: g,
    externalSlotProps: a.startScrollButtonIcon,
    additionalProps: {
      fontSize: "small"
    },
    ownerState: v
  }), C = oo({
    elementType: y,
    externalSlotProps: a.endScrollButtonIcon,
    additionalProps: {
      fontSize: "small"
    },
    ownerState: v
  });
  return /* @__PURE__ */ x.jsx(ey, {
    component: "div",
    className: ie(S.root, i),
    ref: o,
    role: null,
    ownerState: v,
    tabIndex: null,
    ...d,
    style: {
      ...d.style,
      ...c === "vertical" && {
        "--TabScrollButton-svgRotate": `rotate(${p ? -90 : 90}deg)`
      }
    },
    children: l === "left" ? /* @__PURE__ */ x.jsx(g, {
      ...h
    }) : /* @__PURE__ */ x.jsx(y, {
      ...C
    })
  });
});
Qb.NODE_ENV !== "production" && (rc.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The direction the button should indicate.
   */
  direction: n.oneOf(["left", "right"]).isRequired,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: n.bool,
  /**
   * The component orientation (layout flow direction).
   */
  orientation: n.oneOf(["horizontal", "vertical"]).isRequired,
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   * @default {}
   */
  slotProps: n.shape({
    endScrollButtonIcon: n.oneOfType([n.func, n.object]),
    startScrollButtonIcon: n.oneOfType([n.func, n.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: n.shape({
    EndScrollButtonIcon: n.elementType,
    StartScrollButtonIcon: n.elementType
  }),
  /**
   * @ignore
   */
  style: n.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object])
});
function ty(e) {
  return ge("MuiTabs", e);
}
const Vr = fe("MuiTabs", ["root", "vertical", "list", "flexContainer", "flexContainerVertical", "centered", "scroller", "fixed", "scrollableX", "scrollableY", "hideScrollbar", "scrollButtons", "scrollButtonsHideMobile", "indicator"]);
var qn = {};
const ba = (e, t) => e === t ? e.firstChild : t && t.nextElementSibling ? t.nextElementSibling : e.firstChild, ya = (e, t) => e === t ? e.lastChild : t && t.previousElementSibling ? t.previousElementSibling : e.lastChild, To = (e, t, o) => {
  let r = !1, i = o(e, t);
  for (; i; ) {
    if (i === e.firstChild) {
      if (r)
        return;
      r = !0;
    }
    const s = i.disabled || i.getAttribute("aria-disabled") === "true";
    if (!i.hasAttribute("tabindex") || s)
      i = o(e, i);
    else {
      i.focus();
      return;
    }
  }
}, ny = (e) => {
  const {
    vertical: t,
    fixed: o,
    hideScrollbar: r,
    scrollableX: i,
    scrollableY: s,
    centered: a,
    scrollButtonsHideMobile: l,
    classes: c
  } = e;
  return ye({
    root: ["root", t && "vertical"],
    scroller: ["scroller", o && "fixed", r && "hideScrollbar", i && "scrollableX", s && "scrollableY"],
    list: ["list", "flexContainer", t && "flexContainerVertical", t && "vertical", a && "centered"],
    indicator: ["indicator"],
    scrollButtons: ["scrollButtons", l && "scrollButtonsHideMobile"],
    scrollableX: [i && "scrollableX"],
    hideScrollbar: [r && "hideScrollbar"]
  }, ty, c);
}, oy = G("div", {
  name: "MuiTabs",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [{
      [`& .${Vr.scrollButtons}`]: t.scrollButtons
    }, {
      [`& .${Vr.scrollButtons}`]: o.scrollButtonsHideMobile && t.scrollButtonsHideMobile
    }, t.root, o.vertical && t.vertical];
  }
})(xe(({
  theme: e
}) => ({
  overflow: "hidden",
  minHeight: 48,
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch",
  display: "flex",
  variants: [{
    props: ({
      ownerState: t
    }) => t.vertical,
    style: {
      flexDirection: "column"
    }
  }, {
    props: ({
      ownerState: t
    }) => t.scrollButtonsHideMobile,
    style: {
      [`& .${Vr.scrollButtons}`]: {
        [e.breakpoints.down("sm")]: {
          display: "none"
        }
      }
    }
  }]
}))), ry = G("div", {
  name: "MuiTabs",
  slot: "Scroller",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.scroller, o.fixed && t.fixed, o.hideScrollbar && t.hideScrollbar, o.scrollableX && t.scrollableX, o.scrollableY && t.scrollableY];
  }
})({
  position: "relative",
  display: "inline-block",
  flex: "1 1 auto",
  whiteSpace: "nowrap",
  variants: [{
    props: ({
      ownerState: e
    }) => e.fixed,
    style: {
      overflowX: "hidden",
      width: "100%"
    }
  }, {
    props: ({
      ownerState: e
    }) => e.hideScrollbar,
    style: {
      // Hide dimensionless scrollbar on macOS
      scrollbarWidth: "none",
      // Firefox
      "&::-webkit-scrollbar": {
        display: "none"
        // Safari + Chrome
      }
    }
  }, {
    props: ({
      ownerState: e
    }) => e.scrollableX,
    style: {
      overflowX: "auto",
      overflowY: "hidden"
    }
  }, {
    props: ({
      ownerState: e
    }) => e.scrollableY,
    style: {
      overflowY: "auto",
      overflowX: "hidden"
    }
  }]
}), iy = G("div", {
  name: "MuiTabs",
  slot: "List",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.list, t.flexContainer, o.vertical && t.flexContainerVertical, o.centered && t.centered];
  }
})({
  display: "flex",
  variants: [{
    props: ({
      ownerState: e
    }) => e.vertical,
    style: {
      flexDirection: "column"
    }
  }, {
    props: ({
      ownerState: e
    }) => e.centered,
    style: {
      justifyContent: "center"
    }
  }]
}), sy = G("span", {
  name: "MuiTabs",
  slot: "Indicator"
})(xe(({
  theme: e
}) => ({
  position: "absolute",
  height: 2,
  bottom: 0,
  width: "100%",
  transition: e.transitions.create(),
  variants: [{
    props: {
      indicatorColor: "primary"
    },
    style: {
      backgroundColor: (e.vars || e).palette.primary.main
    }
  }, {
    props: {
      indicatorColor: "secondary"
    },
    style: {
      backgroundColor: (e.vars || e).palette.secondary.main
    }
  }, {
    props: ({
      ownerState: t
    }) => t.vertical,
    style: {
      height: "100%",
      width: 2,
      right: 0
    }
  }]
}))), ay = G(oc)({
  overflowX: "auto",
  overflowY: "hidden",
  // Hide dimensionless scrollbar on macOS
  scrollbarWidth: "none",
  // Firefox
  "&::-webkit-scrollbar": {
    display: "none"
    // Safari + Chrome
  }
}), va = {};
let xa = !1;
const fi = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = ve({
    props: t,
    name: "MuiTabs"
  }), i = On(), s = $i(), {
    "aria-label": a,
    "aria-labelledby": l,
    action: c,
    centered: u = !1,
    children: d,
    className: p,
    component: v = "div",
    allowScrollButtonsMobile: S = !1,
    indicatorColor: g = "primary",
    onChange: y,
    orientation: h = "horizontal",
    ScrollButtonComponent: C,
    // TODO: remove in v7 (deprecated in v6)
    scrollButtons: w = "auto",
    selectionFollowsFocus: E,
    slots: T = {},
    slotProps: b = {},
    TabIndicatorProps: O = {},
    // TODO: remove in v7 (deprecated in v6)
    TabScrollButtonProps: _ = {},
    // TODO: remove in v7 (deprecated in v6)
    textColor: D = "primary",
    value: A,
    variant: L = "standard",
    visibleScrollbar: z = !1,
    ...f
  } = r, I = L === "scrollable", R = h === "vertical", k = R ? "scrollTop" : "scrollLeft", j = R ? "top" : "left", V = R ? "bottom" : "right", ee = R ? "clientHeight" : "clientWidth", H = R ? "height" : "width", se = {
    ...r,
    component: v,
    allowScrollButtonsMobile: S,
    indicatorColor: g,
    orientation: h,
    vertical: R,
    scrollButtons: w,
    textColor: D,
    variant: L,
    visibleScrollbar: z,
    fixed: !I,
    hideScrollbar: I && !z,
    scrollableX: I && !R,
    scrollableY: I && R,
    centered: u && !I,
    scrollButtonsHideMobile: !S
  }, $ = ny(se), B = oo({
    elementType: T.StartScrollButtonIcon,
    externalSlotProps: b.startScrollButtonIcon,
    ownerState: se
  }), X = oo({
    elementType: T.EndScrollButtonIcon,
    externalSlotProps: b.endScrollButtonIcon,
    ownerState: se
  });
  qn.NODE_ENV !== "production" && u && I && console.error('MUI: You can not use the `centered={true}` and `variant="scrollable"` properties at the same time on a `Tabs` component.');
  const [ne, Q] = m.useState(!1), [F, K] = m.useState(va), [re, te] = m.useState(!1), [Y, U] = m.useState(!1), [ue, P] = m.useState(!1), [q, de] = m.useState({
    overflow: "hidden",
    scrollbarWidth: 0
  }), ae = /* @__PURE__ */ new Map(), Se = m.useRef(null), Me = m.useRef(null), Pe = {
    slots: T,
    slotProps: {
      indicator: O,
      scrollButtons: _,
      ...b
    }
  }, Xe = () => {
    const oe = Se.current;
    let ce;
    if (oe) {
      const Ee = oe.getBoundingClientRect();
      ce = {
        clientWidth: oe.clientWidth,
        scrollLeft: oe.scrollLeft,
        scrollTop: oe.scrollTop,
        scrollWidth: oe.scrollWidth,
        top: Ee.top,
        bottom: Ee.bottom,
        left: Ee.left,
        right: Ee.right
      };
    }
    let Ce;
    if (oe && A !== !1) {
      const Ee = Me.current.children;
      if (Ee.length > 0) {
        const He = Ee[ae.get(A)];
        qn.NODE_ENV !== "production" && (He || console.error(["MUI: The `value` provided to the Tabs component is invalid.", `None of the Tabs' children match with "${A}".`, ae.keys ? `You can provide one of the following values: ${Array.from(ae.keys()).join(", ")}.` : null].join(`
`))), Ce = He ? He.getBoundingClientRect() : null, qn.NODE_ENV !== "production" && !globalThis.MUI_TEST_ENV && !xa && Ce && Ce.width === 0 && Ce.height === 0 && // if the whole Tabs component is hidden, don't warn
        ce.clientWidth !== 0 && (ce = null, console.error(["MUI: The `value` provided to the Tabs component is invalid.", `The Tab with this \`value\` ("${A}") is not part of the document layout.`, "Make sure the tab item is present in the document or that it's not `display: none`."].join(`
`)), xa = !0);
      }
    }
    return {
      tabsMeta: ce,
      tabMeta: Ce
    };
  }, Be = ct(() => {
    const {
      tabsMeta: oe,
      tabMeta: ce
    } = Xe();
    let Ce = 0, Ee;
    R ? (Ee = "top", ce && oe && (Ce = ce.top - oe.top + oe.scrollTop)) : (Ee = s ? "right" : "left", ce && oe && (Ce = (s ? -1 : 1) * (ce[Ee] - oe[Ee] + oe.scrollLeft)));
    const He = {
      [Ee]: Ce,
      // May be wrong until the font is loaded.
      [H]: ce ? ce[H] : 0
    };
    if (typeof F[Ee] != "number" || typeof F[H] != "number")
      K(He);
    else {
      const wt = Math.abs(F[Ee] - He[Ee]), Xt = Math.abs(F[H] - He[H]);
      (wt >= 1 || Xt >= 1) && K(He);
    }
  }), le = (oe, {
    animation: ce = !0
  } = {}) => {
    ce ? Yb(k, Se.current, oe, {
      duration: i.transitions.duration.standard
    }) : Se.current[k] = oe;
  }, st = (oe) => {
    let ce = Se.current[k];
    R ? ce += oe : ce += oe * (s ? -1 : 1), le(ce);
  }, Fe = () => {
    const oe = Se.current[ee];
    let ce = 0;
    const Ce = Array.from(Me.current.children);
    for (let Ee = 0; Ee < Ce.length; Ee += 1) {
      const He = Ce[Ee];
      if (ce + He[ee] > oe) {
        Ee === 0 && (ce = oe);
        break;
      }
      ce += He[ee];
    }
    return ce;
  }, Wt = () => {
    st(-1 * Fe());
  }, ut = () => {
    st(Fe());
  }, [yt, {
    onChange: vt,
    ...dt
  }] = he("scrollbar", {
    className: ie($.scrollableX, $.hideScrollbar),
    elementType: ay,
    shouldForwardComponentProp: !0,
    externalForwardedProps: Pe,
    ownerState: se
  }), jt = m.useCallback((oe) => {
    vt?.(oe), de({
      overflow: null,
      scrollbarWidth: oe
    });
  }, [vt]), [Te, pt] = he("scrollButtons", {
    className: ie($.scrollButtons, _.className),
    elementType: rc,
    externalForwardedProps: Pe,
    ownerState: se,
    additionalProps: {
      orientation: h,
      slots: {
        StartScrollButtonIcon: T.startScrollButtonIcon || T.StartScrollButtonIcon,
        EndScrollButtonIcon: T.endScrollButtonIcon || T.EndScrollButtonIcon
      },
      slotProps: {
        startScrollButtonIcon: B,
        endScrollButtonIcon: X
      }
    }
  }), N = () => {
    const oe = {};
    oe.scrollbarSizeListener = I ? /* @__PURE__ */ x.jsx(yt, {
      ...dt,
      onChange: jt
    }) : null;
    const Ce = I && (w === "auto" && (re || Y) || w === !0);
    return oe.scrollButtonStart = Ce ? /* @__PURE__ */ x.jsx(Te, {
      direction: s ? "right" : "left",
      onClick: Wt,
      disabled: !re,
      ...pt
    }) : null, oe.scrollButtonEnd = Ce ? /* @__PURE__ */ x.jsx(Te, {
      direction: s ? "left" : "right",
      onClick: ut,
      disabled: !Y,
      ...pt
    }) : null, oe;
  }, J = ct((oe) => {
    const {
      tabsMeta: ce,
      tabMeta: Ce
    } = Xe();
    if (!(!Ce || !ce)) {
      if (Ce[j] < ce[j]) {
        const Ee = ce[k] + (Ce[j] - ce[j]);
        le(Ee, {
          animation: oe
        });
      } else if (Ce[V] > ce[V]) {
        const Ee = ce[k] + (Ce[V] - ce[V]);
        le(Ee, {
          animation: oe
        });
      }
    }
  }), pe = ct(() => {
    I && w !== !1 && P(!ue);
  });
  m.useEffect(() => {
    const oe = dr(() => {
      Se.current && Be();
    });
    let ce;
    const Ce = (wt) => {
      wt.forEach((Xt) => {
        Xt.removedNodes.forEach((In) => {
          ce?.unobserve(In);
        }), Xt.addedNodes.forEach((In) => {
          ce?.observe(In);
        });
      }), oe(), pe();
    }, Ee = Ct(Se.current);
    Ee.addEventListener("resize", oe);
    let He;
    return typeof ResizeObserver < "u" && (ce = new ResizeObserver(oe), Array.from(Me.current.children).forEach((wt) => {
      ce.observe(wt);
    })), typeof MutationObserver < "u" && (He = new MutationObserver(Ce), He.observe(Me.current, {
      childList: !0
    })), () => {
      oe.clear(), Ee.removeEventListener("resize", oe), He?.disconnect(), ce?.disconnect();
    };
  }, [Be, pe]), m.useEffect(() => {
    const oe = Array.from(Me.current.children), ce = oe.length;
    if (typeof IntersectionObserver < "u" && ce > 0 && I && w !== !1) {
      const Ce = oe[0], Ee = oe[ce - 1], He = {
        root: Se.current,
        threshold: 0.99
      }, wt = (Tr) => {
        te(!Tr[0].isIntersecting);
      }, Xt = new IntersectionObserver(wt, He);
      Xt.observe(Ce);
      const In = (Tr) => {
        U(!Tr[0].isIntersecting);
      }, Ui = new IntersectionObserver(In, He);
      return Ui.observe(Ee), () => {
        Xt.disconnect(), Ui.disconnect();
      };
    }
  }, [I, w, ue, d?.length]), m.useEffect(() => {
    Q(!0);
  }, []), m.useEffect(() => {
    Be();
  }), m.useEffect(() => {
    J(va !== F);
  }, [J, F]), m.useImperativeHandle(c, () => ({
    updateIndicator: Be,
    updateScrollButtons: pe
  }), [Be, pe]);
  const [je, Ke] = he("indicator", {
    className: ie($.indicator, O.className),
    elementType: sy,
    externalForwardedProps: Pe,
    ownerState: se,
    additionalProps: {
      style: F
    }
  }), Z = /* @__PURE__ */ x.jsx(je, {
    ...Ke
  });
  let me = 0;
  const We = m.Children.map(d, (oe) => {
    if (!/* @__PURE__ */ m.isValidElement(oe))
      return null;
    qn.NODE_ENV !== "production" && Ut.isFragment(oe) && console.error(["MUI: The Tabs component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`));
    const ce = oe.props.value === void 0 ? me : oe.props.value;
    ae.set(ce, me);
    const Ce = ce === A;
    return me += 1, /* @__PURE__ */ m.cloneElement(oe, {
      fullWidth: L === "fullWidth",
      indicator: Ce && !ne && Z,
      selected: Ce,
      selectionFollowsFocus: E,
      onChange: y,
      textColor: D,
      value: ce,
      ...me === 1 && A === !1 && !oe.props.tabIndex ? {
        tabIndex: 0
      } : {}
    });
  }), Et = (oe) => {
    if (oe.altKey || oe.shiftKey || oe.ctrlKey || oe.metaKey)
      return;
    const ce = Me.current, Ce = yn(nt(ce));
    if (Ce?.getAttribute("role") !== "tab")
      return;
    let He = h === "horizontal" ? "ArrowLeft" : "ArrowUp", wt = h === "horizontal" ? "ArrowRight" : "ArrowDown";
    switch (h === "horizontal" && s && (He = "ArrowRight", wt = "ArrowLeft"), oe.key) {
      case He:
        oe.preventDefault(), To(ce, Ce, ya);
        break;
      case wt:
        oe.preventDefault(), To(ce, Ce, ba);
        break;
      case "Home":
        oe.preventDefault(), To(ce, null, ba);
        break;
      case "End":
        oe.preventDefault(), To(ce, null, ya);
        break;
    }
  }, ln = N(), [sc, ac] = he("root", {
    ref: o,
    className: ie($.root, p),
    elementType: oy,
    externalForwardedProps: {
      ...Pe,
      ...f,
      component: v
    },
    ownerState: se
  }), [lc, cc] = he("scroller", {
    ref: Se,
    className: $.scroller,
    elementType: ry,
    externalForwardedProps: Pe,
    ownerState: se,
    additionalProps: {
      style: {
        overflow: q.overflow,
        [R ? `margin${s ? "Left" : "Right"}` : "marginBottom"]: z ? void 0 : -q.scrollbarWidth
      }
    }
  }), [uc, dc] = he("list", {
    ref: Me,
    className: ie($.list, $.flexContainer),
    elementType: iy,
    externalForwardedProps: Pe,
    ownerState: se,
    getSlotProps: (oe) => ({
      ...oe,
      onKeyDown: (ce) => {
        Et(ce), oe.onKeyDown?.(ce);
      }
    })
  });
  return /* @__PURE__ */ x.jsxs(sc, {
    ...ac,
    children: [ln.scrollButtonStart, ln.scrollbarSizeListener, /* @__PURE__ */ x.jsxs(lc, {
      ...cc,
      children: [/* @__PURE__ */ x.jsx(uc, {
        "aria-label": a,
        "aria-labelledby": l,
        "aria-orientation": h === "vertical" ? "vertical" : null,
        role: "tablist",
        ...dc,
        children: We
      }), ne && Z]
    }), ln.scrollButtonEnd]
  });
});
qn.NODE_ENV !== "production" && (fi.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Callback fired when the component mounts.
   * This is useful when you want to trigger an action programmatically.
   * It supports two actions: `updateIndicator()` and `updateScrollButtons()`
   *
   * @param {object} actions This object contains all possible actions
   * that can be triggered programmatically.
   */
  action: Mt,
  /**
   * If `true`, the scroll buttons aren't forced hidden on mobile.
   * By default the scroll buttons are hidden on mobile and takes precedence over `scrollButtons`.
   * @default false
   */
  allowScrollButtonsMobile: n.bool,
  /**
   * The label for the Tabs as a string.
   */
  "aria-label": n.string,
  /**
   * An id or list of ids separated by a space that label the Tabs.
   */
  "aria-labelledby": n.string,
  /**
   * If `true`, the tabs are centered.
   * This prop is intended for large views.
   * @default false
   */
  centered: n.bool,
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * Determines the color of the indicator.
   * @default 'primary'
   */
  indicatorColor: n.oneOfType([n.oneOf(["primary", "secondary"]), n.string]),
  /**
   * Callback fired when the value changes.
   *
   * @param {React.SyntheticEvent} event The event source of the callback. **Warning**: This is a generic event not a change event.
   * @param {any} value We default to the index of the child (number)
   */
  onChange: n.func,
  /**
   * The component orientation (layout flow direction).
   * @default 'horizontal'
   */
  orientation: n.oneOf(["horizontal", "vertical"]),
  /**
   * The component used to render the scroll buttons.
   * @deprecated use the `slots.scrollButtons` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default TabScrollButton
   */
  ScrollButtonComponent: n.elementType,
  /**
   * Determine behavior of scroll buttons when tabs are set to scroll:
   *
   * - `auto` will only present them when not all the items are visible.
   * - `true` will always present them.
   * - `false` will never present them.
   *
   * By default the scroll buttons are hidden on mobile.
   * This behavior can be disabled with `allowScrollButtonsMobile`.
   * @default 'auto'
   */
  scrollButtons: n.oneOf(["auto", !1, !0]),
  /**
   * If `true` the selected tab changes on focus. Otherwise it only
   * changes on activation.
   */
  selectionFollowsFocus: n.bool,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: n.shape({
    endScrollButtonIcon: n.oneOfType([n.func, n.object]),
    indicator: n.oneOfType([n.func, n.object]),
    list: n.oneOfType([n.func, n.object]),
    root: n.oneOfType([n.func, n.object]),
    scrollbar: n.oneOfType([n.func, n.object]),
    scrollButtons: n.oneOfType([n.func, n.object]),
    scroller: n.oneOfType([n.func, n.object]),
    startScrollButtonIcon: n.oneOfType([n.func, n.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: n.shape({
    endScrollButtonIcon: n.elementType,
    EndScrollButtonIcon: n.elementType,
    indicator: n.elementType,
    list: n.elementType,
    root: n.elementType,
    scrollbar: n.elementType,
    scrollButtons: n.elementType,
    scroller: n.elementType,
    startScrollButtonIcon: n.elementType,
    StartScrollButtonIcon: n.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * Props applied to the tab indicator element.
   * @deprecated use the `slotProps.indicator` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default  {}
   */
  TabIndicatorProps: n.object,
  /**
   * Props applied to the [`TabScrollButton`](https://mui.com/material-ui/api/tab-scroll-button/) element.
   * @deprecated use the `slotProps.scrollButtons` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default {}
   */
  TabScrollButtonProps: n.object,
  /**
   * Determines the color of the `Tab`.
   * @default 'primary'
   */
  textColor: n.oneOf(["inherit", "primary", "secondary"]),
  /**
   * The value of the currently selected `Tab`.
   * If you don't want any selected `Tab`, you can set this prop to `false`.
   */
  value: n.any,
  /**
   * Determines additional display behavior of the tabs:
   *
   *  - `scrollable` will invoke scrolling properties and allow for horizontally
   *  scrolling (or swiping) of the tab bar.
   *  - `fullWidth` will make the tabs grow to use all the available space,
   *  which should be used for small views, like on mobile.
   *  - `standard` will render the default state.
   * @default 'standard'
   */
  variant: n.oneOf(["fullWidth", "scrollable", "standard"]),
  /**
   * If `true`, the scrollbar is visible. It can be useful when displaying
   * a long vertical list of tabs.
   * @default false
   */
  visibleScrollbar: n.bool
});
function ly(e) {
  return ge("MuiTextField", e);
}
fe("MuiTextField", ["root"]);
var ic = {};
const cy = {
  standard: vr,
  filled: yr,
  outlined: xr
}, uy = (e) => {
  const {
    classes: t
  } = e;
  return ye({
    root: ["root"]
  }, ly, t);
}, dy = G(Al, {
  name: "MuiTextField",
  slot: "Root"
})({}), Rt = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = ve({
    props: t,
    name: "MuiTextField"
  }), {
    autoComplete: i,
    autoFocus: s = !1,
    children: a,
    className: l,
    color: c = "primary",
    defaultValue: u,
    disabled: d = !1,
    error: p = !1,
    FormHelperTextProps: v,
    fullWidth: S = !1,
    helperText: g,
    id: y,
    InputLabelProps: h,
    inputProps: C,
    InputProps: w,
    inputRef: E,
    label: T,
    maxRows: b,
    minRows: O,
    multiline: _ = !1,
    name: D,
    onBlur: A,
    onChange: L,
    onFocus: z,
    placeholder: f,
    required: I = !1,
    rows: R,
    select: k = !1,
    SelectProps: j,
    slots: V = {},
    slotProps: ee = {},
    type: H,
    value: se,
    variant: $ = "outlined",
    ...B
  } = r, X = {
    ...r,
    autoFocus: s,
    color: c,
    disabled: d,
    error: p,
    fullWidth: S,
    multiline: _,
    required: I,
    select: k,
    variant: $
  }, ne = uy(X);
  ic.NODE_ENV !== "production" && k && !a && console.error("MUI: `children` must be passed when using the `TextField` component with `select`.");
  const Q = uo(y), F = g && Q ? `${Q}-helper-text` : void 0, K = T && Q ? `${Q}-label` : void 0, re = cy[$], te = {
    slots: V,
    slotProps: {
      input: w,
      inputLabel: h,
      htmlInput: C,
      formHelperText: v,
      select: j,
      ...ee
    }
  }, Y = {}, U = te.slotProps.inputLabel;
  $ === "outlined" && (U && typeof U.shrink < "u" && (Y.notched = U.shrink), Y.label = T), k && ((!j || !j.native) && (Y.id = void 0), Y["aria-describedby"] = void 0);
  const [ue, P] = he("root", {
    elementType: dy,
    shouldForwardComponentProp: !0,
    externalForwardedProps: {
      ...te,
      ...B
    },
    ownerState: X,
    className: ie(ne.root, l),
    ref: o,
    additionalProps: {
      disabled: d,
      error: p,
      fullWidth: S,
      required: I,
      color: c,
      variant: $
    }
  }), [q, de] = he("input", {
    elementType: re,
    externalForwardedProps: te,
    additionalProps: Y,
    ownerState: X
  }), [ae, Se] = he("inputLabel", {
    elementType: Fl,
    externalForwardedProps: te,
    ownerState: X
  }), [Me, Pe] = he("htmlInput", {
    elementType: "input",
    externalForwardedProps: te,
    ownerState: X
  }), [Xe, Be] = he("formHelperText", {
    elementType: Dl,
    externalForwardedProps: te,
    ownerState: X
  }), [le, st] = he("select", {
    elementType: Sr,
    externalForwardedProps: te,
    ownerState: X
  }), Fe = /* @__PURE__ */ x.jsx(q, {
    "aria-describedby": F,
    autoComplete: i,
    autoFocus: s,
    defaultValue: u,
    fullWidth: S,
    multiline: _,
    name: D,
    rows: R,
    maxRows: b,
    minRows: O,
    type: H,
    value: se,
    id: Q,
    inputRef: E,
    onBlur: A,
    onChange: L,
    onFocus: z,
    placeholder: f,
    inputProps: Pe,
    slots: {
      input: V.htmlInput ? Me : void 0
    },
    ...de
  });
  return /* @__PURE__ */ x.jsxs(ue, {
    ...P,
    children: [T != null && T !== "" && /* @__PURE__ */ x.jsx(ae, {
      htmlFor: Q,
      id: K,
      ...Se,
      children: T
    }), k ? /* @__PURE__ */ x.jsx(le, {
      "aria-describedby": F,
      id: Q,
      labelId: K,
      value: se,
      input: Fe,
      ...st,
      children: a
    }) : Fe, g && /* @__PURE__ */ x.jsx(Xe, {
      id: F,
      ...Be,
      children: g
    })]
  });
});
ic.NODE_ENV !== "production" && (Rt.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: n.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   * @default false
   */
  autoFocus: n.bool,
  /**
   * @ignore
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: n.oneOfType([n.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), n.string]),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: n.any,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: n.bool,
  /**
   * If `true`, the label is displayed in an error state.
   * @default false
   */
  error: n.bool,
  /**
   * Props applied to the [`FormHelperText`](https://mui.com/material-ui/api/form-helper-text/) element.
   * @deprecated Use `slotProps.formHelperText` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  FormHelperTextProps: n.object,
  /**
   * If `true`, the input will take up the full width of its container.
   * @default false
   */
  fullWidth: n.bool,
  /**
   * The helper text content.
   */
  helperText: n.node,
  /**
   * The id of the `input` element.
   * Use this prop to make `label` and `helperText` accessible for screen readers.
   */
  id: n.string,
  /**
   * Props applied to the [`InputLabel`](https://mui.com/material-ui/api/input-label/) element.
   * Pointer events like `onClick` are enabled if and only if `shrink` is `true`.
   * @deprecated Use `slotProps.inputLabel` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  InputLabelProps: n.object,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#attributes) applied to the `input` element.
   * @deprecated Use `slotProps.htmlInput` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  inputProps: n.object,
  /**
   * Props applied to the Input element.
   * It will be a [`FilledInput`](https://mui.com/material-ui/api/filled-input/),
   * [`OutlinedInput`](https://mui.com/material-ui/api/outlined-input/) or [`Input`](https://mui.com/material-ui/api/input/)
   * component depending on the `variant` prop value.
   * @deprecated Use `slotProps.input` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  InputProps: n.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: Mt,
  /**
   * The label content.
   */
  label: n.node,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin: n.oneOf(["dense", "none", "normal"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: n.oneOfType([n.number, n.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: n.oneOfType([n.number, n.string]),
  /**
   * If `true`, a `textarea` element is rendered instead of an input.
   * @default false
   */
  multiline: n.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: n.string,
  /**
   * @ignore
   */
  onBlur: n.func,
  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: n.func,
  /**
   * @ignore
   */
  onFocus: n.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: n.string,
  /**
   * If `true`, the label is displayed as required and the `input` element is required.
   * @default false
   */
  required: n.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: n.oneOfType([n.number, n.string]),
  /**
   * Render a [`Select`](https://mui.com/material-ui/api/select/) element while passing the Input element to `Select` as `input` parameter.
   * If this option is set you must pass the options of the select as children.
   * @default false
   */
  select: n.bool,
  /**
   * Props applied to the [`Select`](https://mui.com/material-ui/api/select/) element.
   * @deprecated Use `slotProps.select` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  SelectProps: n.object,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: n.oneOfType([n.oneOf(["medium", "small"]), n.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: n.shape({
    formHelperText: n.oneOfType([n.func, n.object]),
    htmlInput: n.oneOfType([n.func, n.object]),
    input: n.oneOfType([n.func, n.object]),
    inputLabel: n.oneOfType([n.func, n.object]),
    select: n.oneOfType([n.func, n.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: n.shape({
    formHelperText: n.elementType,
    htmlInput: n.elementType,
    input: n.elementType,
    inputLabel: n.elementType,
    root: n.elementType,
    select: n.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#input_types).
   */
  type: n.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: n.any,
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: n.oneOf(["filled", "outlined", "standard"])
});
const Bn = {
  main: "Main Menu",
  mobile: "Mobile Menu",
  footer: "Footer Menu"
}, Fn = { label: "", url: "" };
function py(e) {
  const t = /* @__PURE__ */ new Map(), o = [];
  return e.forEach((r) => {
    t.set(r.id, { ...r, children: [] });
  }), e.forEach((r) => {
    const i = t.get(r.id);
    if (i) {
      if (r.parentId && t.has(r.parentId)) {
        t.get(r.parentId).children.push(i);
        return;
      }
      o.push(i);
    }
  }), o;
}
function fy(e) {
  const t = [], o = (r, i = 0) => {
    r.forEach((s) => {
      t.push({ ...s, depth: i }), s.children?.length && o(s.children, i + 1);
    });
  };
  return o(py(e)), t;
}
function Kt(e, t) {
  const o = /* @__PURE__ */ new Map();
  e.forEach((s) => {
    const a = s.parentId || "";
    o.has(a) || o.set(a, []), o.get(a).push(s.id);
  });
  const r = /* @__PURE__ */ new Set(), i = [t];
  for (; i.length; ) {
    const s = i.pop();
    (o.get(s) || []).forEach((l) => {
      r.has(l) || (r.add(l), i.push(l));
    });
  }
  return r;
}
function my(e, t, o) {
  if (!t || !o || t === o)
    return e;
  const r = Kt(e, t);
  if (r.has(o))
    return e;
  const i = e.find((p) => p.id === t), s = e.find((p) => p.id === o);
  if (!i || !s)
    return e;
  const a = /* @__PURE__ */ new Set([t, ...r]), l = e.filter((p) => a.has(p.id)).map((p) => p.id === t ? { ...p, parentId: s.parentId || "" } : p), c = e.filter((p) => !a.has(p.id)), u = c.findIndex((p) => p.id === o);
  if (u === -1)
    return e;
  const d = [...c];
  return d.splice(u, 0, ...l), d;
}
function hy(e, t, o, r) {
  if (!t || !o || t === o)
    return e;
  const i = Kt(e, t);
  if (i.has(o))
    return e;
  const s = e.find((g) => g.id === t), a = e.find((g) => g.id === o);
  if (!s || !a)
    return e;
  const l = /* @__PURE__ */ new Set([t, ...i]), c = e.filter((g) => l.has(g.id)).map(
    (g) => g.id === t ? { ...g, parentId: r ?? (a.parentId || "") } : g
  ), u = e.filter((g) => !l.has(g.id)), d = u.findIndex((g) => g.id === o);
  if (d === -1)
    return e;
  let p = d + 1;
  const v = Kt(u, o);
  for (; p < u.length && v.has(u[p].id); )
    p += 1;
  const S = [...u];
  return S.splice(p, 0, ...c), S;
}
function mi(e, t, o) {
  const r = Kt(e, t);
  if (o && r.has(o))
    return e;
  const i = /* @__PURE__ */ new Set([t, ...r]), s = e.filter((u) => i.has(u.id)).map((u) => u.id === t ? { ...u, parentId: o || "" } : u), a = e.filter((u) => !i.has(u.id));
  let l = a.length;
  if (o) {
    const u = a.findIndex((d) => d.id === o);
    if (u !== -1) {
      l = u + 1;
      const d = Kt(a, o);
      for (; l < a.length && d.has(a[l].id); )
        l += 1;
    }
  } else {
    const u = a.map((d, p) => ({ item: d, index: p })).filter(({ item: d }) => !d.parentId);
    l = u.length ? u[u.length - 1].index + 1 : a.length;
  }
  const c = [...a];
  return c.splice(l, 0, ...s), c;
}
function gy(e, t) {
  const o = Kt(e, t), r = /* @__PURE__ */ new Set([t, ...o]);
  return e.filter((i) => !r.has(i.id));
}
function Sa(e, t, o) {
  const r = [...e, { ...t, parentId: o || "" }];
  return o ? mi(r, t.id, o) : r;
}
function Ln(e) {
  return e ? e.label || (e.type === "page" ? `Page #${e.pageId}` : "Untitled") : "Untitled";
}
function vy() {
  const [e, t] = m.useState({}), [o, r] = m.useState(Bn), [i, s] = m.useState("main"), [a, l] = m.useState(""), [c, u] = m.useState(!0), [d, p] = m.useState(!1), [v, S] = m.useState(""), [g, y] = m.useState(""), [h, C] = m.useState(""), w = m.useDeferredValue(h), [E, T] = m.useState([]), [b, O] = m.useState(Fn), [_, D] = m.useState(""), [A, L] = m.useState(null), [z, f] = m.useState(""), [I, R] = m.useState(""), [k, j] = m.useState("page"), [V, ee] = m.useState(""), [H, se] = m.useState([]), [$, B] = m.useState(Fn), X = m.useDeferredValue(V), [ne, Q] = m.useState([]), [F, K] = m.useState({ open: !1, type: "", itemId: "", title: "" }), [re, te] = m.useState(!0), Y = m.useRef(null), U = window.wingateAdminData?.root || "/wp-json/", P = {
    "Content-Type": "application/json",
    "X-WP-Nonce": window.wingateAdminData?.nonce || ""
  };
  m.useEffect(() => {
    let N = !0;
    return (async () => {
      u(!0), S("");
      try {
        const pe = await fetch(`${U}wingate/v1/menu-builder`, { headers: P });
        if (!pe.ok) throw new Error("Failed to load menu builder data.");
        const je = await pe.json();
        if (!N) return;
        const Ke = je?.menus || {};
        t(Ke), r(je?.labels || Bn);
        const Z = Ke.main ? "main" : Object.keys(Ke)[0] || "main";
        s(Z), l(Ke[Z]?.[0]?.id || "");
      } catch (pe) {
        N && S(pe.message || "Failed to load menu builder.");
      } finally {
        N && u(!1);
      }
    })(), () => {
      N = !1;
    };
  }, [U]), m.useEffect(() => {
    const N = w.trim();
    if (N.length < 2) {
      T([]);
      return;
    }
    let J = !0;
    const pe = setTimeout(async () => {
      try {
        const je = await fetch(`${U}wingate/v1/menu-builder/pages?search=${encodeURIComponent(N)}`, {
          headers: P
        });
        if (!je.ok) throw new Error("Search failed.");
        const Ke = await je.json();
        J && T(Array.isArray(Ke) ? Ke : []);
      } catch (je) {
        J && S(je.message || "Search failed.");
      }
    }, 180);
    return () => {
      J = !1, clearTimeout(pe);
    };
  }, [w, U]), m.useEffect(() => {
    const N = X.trim();
    if (!I || k !== "page" || N.length < 2) {
      se([]);
      return;
    }
    let J = !0;
    const pe = setTimeout(async () => {
      try {
        const je = await fetch(`${U}wingate/v1/menu-builder/pages?search=${encodeURIComponent(N)}`, {
          headers: P
        });
        if (!je.ok) throw new Error("Search failed.");
        const Ke = await je.json();
        J && se(Array.isArray(Ke) ? Ke : []);
      } catch (je) {
        J && S(je.message || "Search failed.");
      }
    }, 180);
    return () => {
      J = !1, clearTimeout(pe);
    };
  }, [X, I, k, U]), m.useEffect(() => {
    const N = Y.current;
    if (!N || typeof IntersectionObserver > "u")
      return;
    const J = new IntersectionObserver(
      ([pe]) => {
        te(pe.isIntersecting);
      },
      { threshold: 0.3 }
    );
    return J.observe(N), () => J.disconnect();
  }, []);
  const q = e[i] || [], de = m.useMemo(() => fy(q), [q]), ae = q.find((N) => N.id === a) || null, Se = ae ? !ae.locked || ne.includes(ae.id) : !1, Me = m.useMemo(() => {
    if (!ae) return de;
    const N = Kt(q, ae.id);
    return de.filter((J) => J.id !== ae.id && !N.has(J.id));
  }, [de, q, ae]), Pe = (N) => {
    t((J) => {
      const pe = N(J[i] || []);
      return {
        ...J,
        [i]: pe
      };
    });
  }, Xe = (N, J) => {
    ae && Pe(
      (pe) => pe.map((je) => je.id === ae.id ? { ...je, [N]: J } : je)
    );
  }, Be = (N) => {
    if (!ae || !Se) return;
    const J = N.target.value;
    Pe((pe) => mi(pe, ae.id, J));
  }, le = (N, J = "") => {
    const pe = `page-${N.id}-${Date.now()}`;
    Pe(
      (je) => Sa(je, {
        id: pe,
        label: N.title,
        type: "page",
        url: "",
        pageId: Number(N.id),
        parentId: J,
        locked: !1,
        lockKey: ""
      }, J)
    ), l(pe), y(
      J ? `Added “${N.title}” as a submenu item.` : `Added “${N.title}” to ${o[i] || Bn[i]}.`
    );
  }, st = (N = b, J = "") => {
    if (!N.label.trim() || !N.url.trim()) {
      S("Custom links need both a label and a URL.");
      return;
    }
    const pe = `custom-${Date.now()}`;
    Pe(
      (je) => Sa(je, {
        id: pe,
        label: N.label.trim(),
        type: "custom",
        url: N.url.trim(),
        pageId: 0,
        parentId: J,
        locked: !1,
        lockKey: ""
      }, J)
    ), l(pe), J || O(Fn), y(J ? "Custom submenu link added." : "Custom link added."), S("");
  }, Fe = (N) => {
    const J = q.find((pe) => pe.id === N);
    J && (Pe((pe) => gy(pe, N)), l((pe) => pe === N ? "" : pe), y(J.locked ? "Locked menu item removed. Save to publish changes." : "Menu item removed."));
  }, Wt = () => {
    ae?.locked && K({
      open: !0,
      type: "unlock",
      itemId: ae.id,
      title: Ln(ae)
    });
  }, ut = () => {
    ae && K({
      open: !0,
      type: "delete",
      itemId: ae.id,
      title: Ln(ae)
    });
  }, yt = () => {
    F.type === "unlock" && (Q((N) => N.includes(F.itemId) ? N : [...N, F.itemId]), y(`Editing unlocked for “${F.title}”. Save carefully.`)), F.type === "delete" && Fe(F.itemId), K({ open: !1, type: "", itemId: "", title: "" });
  }, vt = (N) => {
    R(N), j("page"), ee(""), se([]), B(Fn), S("");
  }, dt = () => {
    R(""), ee(""), se([]), B(Fn);
  }, jt = (N) => {
    le(N, I), dt();
  }, Te = () => {
    st($, I), $.label.trim() && $.url.trim() && dt();
  }, pt = async () => {
    p(!0), S(""), y("");
    try {
      const N = await fetch(`${U}wingate/v1/menu-builder`, {
        method: "POST",
        headers: P,
        body: JSON.stringify({ menus: e })
      });
      if (!N.ok) throw new Error("Failed to save menu builder changes.");
      const J = await N.json();
      t(J?.menus || {}), r(J?.labels || Bn), y("Menus saved.");
    } catch (N) {
      S(N.message || "Failed to save menus.");
    } finally {
      p(!1);
    }
  };
  return /* @__PURE__ */ x.jsxs(Je, { className: "wingate-admin-spa max-w-7xl mx-auto p-4 md:p-8 text-brand-blue", children: [
    /* @__PURE__ */ x.jsxs(rt, { direction: { xs: "column", md: "row" }, justifyContent: "space-between", alignItems: { xs: "flex-start", md: "flex-end" }, gap: 2, mb: 4, children: [
      /* @__PURE__ */ x.jsxs(Je, { children: [
        /* @__PURE__ */ x.jsx(ze, { variant: "overline", sx: { letterSpacing: 2.6, fontWeight: 700, color: "#7e8aa5" }, children: "Wingate Settings" }),
        /* @__PURE__ */ x.jsx(ze, { variant: "h3", sx: { fontFamily: "Cinzel", color: "#0e1b3d", mt: 1 }, children: "Menu Builder" }),
        /* @__PURE__ */ x.jsx(ze, { sx: { color: "#667085", mt: 1, maxWidth: 780 }, children: "Manage the live main, mobile, and footer navigation. Current top-level items are protected, but you can add pages, custom links, define hierarchy, and drag items to reorder them." })
      ] }),
      /* @__PURE__ */ x.jsx(
        ot,
        {
          ref: Y,
          variant: "contained",
          startIcon: /* @__PURE__ */ x.jsx(Cr, { size: 16 }),
          onClick: pt,
          disabled: c || d,
          sx: { backgroundColor: "#0e1b3d", "&:hover": { backgroundColor: "#ffcc00", color: "#0e1b3d" } },
          children: "Save Menus"
        }
      )
    ] }),
    v ? /* @__PURE__ */ x.jsx(gn, { severity: "error", sx: { mb: 2 }, children: v }) : null,
    /* @__PURE__ */ x.jsx(St, { elevation: 0, sx: { mb: 2, border: "1px solid #e5e7eb", borderRadius: "18px", overflow: "hidden" }, children: /* @__PURE__ */ x.jsx(fi, { value: i, onChange: (N, J) => {
      s(J), l((e[J] || [])[0]?.id || "");
    }, sx: { px: 2, pt: 1.2 }, children: Object.entries(o).map(([N, J]) => /* @__PURE__ */ x.jsx(Ro, { value: N, label: J }, N)) }) }),
    /* @__PURE__ */ x.jsxs(rt, { direction: { xs: "column", xl: "row" }, gap: 2, children: [
      /* @__PURE__ */ x.jsxs(St, { elevation: 0, sx: { flex: 1.2, border: "1px solid #e5e7eb", borderRadius: "22px", p: 2.5 }, children: [
        /* @__PURE__ */ x.jsxs(rt, { direction: "row", justifyContent: "space-between", alignItems: "center", mb: 2, children: [
          /* @__PURE__ */ x.jsxs(Je, { children: [
            /* @__PURE__ */ x.jsx(ze, { variant: "h6", sx: { fontFamily: "Cinzel", color: "#0e1b3d" }, children: o[i] || Bn[i] }),
            /* @__PURE__ */ x.jsx(ze, { sx: { color: "#667085", fontSize: 13 }, children: "Drag left to outdent, center to reorder, or right to nest as a submenu item." })
          ] }),
          /* @__PURE__ */ x.jsx(bn, { label: `${q.length} items`, size: "small" })
        ] }),
        /* @__PURE__ */ x.jsx(Je, { sx: { display: "grid", gap: 1 }, children: de.map((N) => /* @__PURE__ */ x.jsxs(
          Je,
          {
            draggable: !0,
            onDragStart: () => D(N.id),
            onDragEnd: () => {
              D(""), L(null);
            },
            onMouseEnter: () => f(N.id),
            onMouseLeave: () => f((J) => J === N.id ? "" : J),
            onDragOver: (J) => {
              if (J.preventDefault(), !_ || _ === N.id) return;
              const pe = J.currentTarget.getBoundingClientRect(), je = J.clientX - pe.left, Ke = Math.min(72, pe.width * 0.2), Z = pe.width - Math.min(120, pe.width * 0.35), me = Kt(q, _);
              N.parentId && q.find((Et) => Et.id === N.parentId);
              let We = "before";
              je <= Ke && (N.parentId || N.depth > 0) ? We = "outdent" : je >= Z && !me.has(N.id) && (We = "child"), L({ targetId: N.id, mode: We });
            },
            onDrop: () => {
              !_ || _ === N.id || (Pe((J) => {
                if (A?.targetId === N.id && A.mode === "child")
                  return mi(J, _, N.id);
                if (A?.targetId === N.id && A.mode === "outdent") {
                  const pe = J.find((Z) => Z.id === N.id), Ke = (pe?.parentId ? J.find((Z) => Z.id === pe.parentId) : null)?.parentId || "";
                  return hy(J, _, N.id, Ke);
                }
                return my(J, _, N.id);
              }), D(""), L(null), y("Menu order updated. Save to publish changes."));
            },
            onClick: () => l(N.id),
            sx: {
              display: "flex",
              alignItems: "center",
              gap: 1.25,
              border: a === N.id ? "1px solid #0e1b3d" : "1px solid #e5e7eb",
              backgroundColor: a === N.id ? "#f8fafc" : "#fff",
              borderRadius: "14px",
              p: 1.25,
              pl: `${1.25 + N.depth * 2}rem`,
              cursor: "pointer",
              boxShadow: A?.targetId === N.id ? A.mode === "child" ? "inset 4px 0 0 #d4a700" : A.mode === "outdent" ? "inset -4px 0 0 #7c3aed" : "inset 0 2px 0 #0e1b3d" : "none"
            },
            children: [
              /* @__PURE__ */ x.jsx(mc, { size: 16, color: "#98a2b3" }),
              /* @__PURE__ */ x.jsxs(Je, { sx: { flex: 1 }, children: [
                /* @__PURE__ */ x.jsxs(rt, { direction: "row", alignItems: "center", gap: 1, flexWrap: "wrap", children: [
                  /* @__PURE__ */ x.jsx(ze, { sx: { fontWeight: 700, color: "#0e1b3d", fontSize: 14 }, children: Ln(N) }),
                  /* @__PURE__ */ x.jsx(bn, { label: N.type === "page" ? "Page" : "Custom", size: "small", variant: "outlined" }),
                  N.locked ? /* @__PURE__ */ x.jsx(bn, { label: "Locked", size: "small", color: "warning" }) : null,
                  A?.targetId === N.id && A.mode === "child" ? /* @__PURE__ */ x.jsx(bn, { label: "Subpage drop", size: "small", color: "success" }) : null,
                  A?.targetId === N.id && A.mode === "outdent" ? /* @__PURE__ */ x.jsx(bn, { label: "Outdent drop", size: "small", color: "secondary" }) : null
                ] }),
                /* @__PURE__ */ x.jsx(ze, { sx: { fontSize: 12, color: "#667085", mt: 0.5 }, children: N.type === "page" ? `Page ID ${N.pageId}` : N.url })
              ] }),
              z === N.id || a === N.id ? /* @__PURE__ */ x.jsx(
                ot,
                {
                  size: "small",
                  variant: "outlined",
                  startIcon: /* @__PURE__ */ x.jsx(Hi, { size: 14 }),
                  onClick: (J) => {
                    J.stopPropagation(), vt(N.id);
                  },
                  children: "Add Child"
                }
              ) : null
            ]
          },
          N.id
        )) })
      ] }),
      /* @__PURE__ */ x.jsxs(rt, { sx: { flex: 0.95 }, gap: 2, children: [
        /* @__PURE__ */ x.jsxs(St, { elevation: 0, sx: { border: "1px solid #e5e7eb", borderRadius: "22px", p: 2.5 }, children: [
          /* @__PURE__ */ x.jsx(ze, { variant: "h6", sx: { fontFamily: "Cinzel", color: "#0e1b3d", mb: 1.5 }, children: "Edit Menu Item" }),
          ae ? /* @__PURE__ */ x.jsxs(rt, { gap: 1.25, children: [
            /* @__PURE__ */ x.jsxs(Je, { children: [
              /* @__PURE__ */ x.jsx(ze, { sx: { fontSize: 12, fontWeight: 700, color: "#667085", mb: 0.75 }, children: "Label" }),
              /* @__PURE__ */ x.jsx(
                Rt,
                {
                  size: "small",
                  fullWidth: !0,
                  value: ae.label || "",
                  disabled: !Se,
                  onChange: (N) => Xe("label", N.target.value)
                }
              )
            ] }),
            ae.type === "custom" ? /* @__PURE__ */ x.jsxs(Je, { children: [
              /* @__PURE__ */ x.jsx(ze, { sx: { fontSize: 12, fontWeight: 700, color: "#667085", mb: 0.75 }, children: "URL" }),
              /* @__PURE__ */ x.jsx(
                Rt,
                {
                  size: "small",
                  fullWidth: !0,
                  value: ae.url || "",
                  disabled: !Se,
                  onChange: (N) => Xe("url", N.target.value)
                }
              )
            ] }) : /* @__PURE__ */ x.jsxs(Je, { children: [
              /* @__PURE__ */ x.jsx(ze, { sx: { fontSize: 12, fontWeight: 700, color: "#667085", mb: 0.75 }, children: "Linked Page" }),
              /* @__PURE__ */ x.jsx(
                Rt,
                {
                  size: "small",
                  fullWidth: !0,
                  value: `Page #${ae.pageId}`,
                  disabled: !0
                }
              )
            ] }),
            /* @__PURE__ */ x.jsxs(Je, { children: [
              /* @__PURE__ */ x.jsx(ze, { sx: { fontSize: 12, fontWeight: 700, color: "#667085", mb: 0.75 }, children: "Parent Item" }),
              /* @__PURE__ */ x.jsxs(
                Sr,
                {
                  size: "small",
                  fullWidth: !0,
                  value: ae.parentId || "",
                  disabled: !Se,
                  onChange: Be,
                  children: [
                    /* @__PURE__ */ x.jsx(pi, { value: "", children: "Top level" }),
                    Me.map((N) => /* @__PURE__ */ x.jsxs(pi, { value: N.id, children: [
                      " ".repeat(N.depth * 4),
                      Ln(N)
                    ] }, N.id))
                  ]
                }
              )
            ] }),
            ae.locked && !Se ? /* @__PURE__ */ x.jsx(gn, { severity: "warning", children: "This item is part of the protected menu structure. Unlock editing only if you are sure." }) : null,
            ae.locked && !Se ? /* @__PURE__ */ x.jsx(ot, { variant: "outlined", color: "warning", onClick: Wt, children: "Unlock Editing" }) : null,
            /* @__PURE__ */ x.jsx(
              ot,
              {
                variant: "contained",
                startIcon: /* @__PURE__ */ x.jsx(Cr, { size: 16 }),
                onClick: pt,
                disabled: c || d,
                sx: { backgroundColor: "#0e1b3d", "&:hover": { backgroundColor: "#ffcc00", color: "#0e1b3d" } },
                children: d ? "Saving..." : "Save Item"
              }
            ),
            /* @__PURE__ */ x.jsx(rt, { direction: "row", justifyContent: "flex-end", children: /* @__PURE__ */ x.jsx(
              ot,
              {
                size: "small",
                color: "error",
                onClick: ut,
                startIcon: /* @__PURE__ */ x.jsx(Tc, { size: 14 }),
                sx: { alignSelf: "flex-end" },
                children: "Delete"
              }
            ) })
          ] }) : /* @__PURE__ */ x.jsx(ze, { sx: { color: "#667085", fontSize: 14 }, children: "Select a menu item to edit its label, URL, or hierarchy." })
        ] }),
        /* @__PURE__ */ x.jsxs(St, { elevation: 0, sx: { border: "1px solid #e5e7eb", borderRadius: "22px", p: 2.5 }, children: [
          /* @__PURE__ */ x.jsxs(rt, { direction: "row", alignItems: "center", gap: 1, mb: 1.5, children: [
            /* @__PURE__ */ x.jsx(xc, { size: 16 }),
            /* @__PURE__ */ x.jsx(ze, { variant: "h6", sx: { fontFamily: "Cinzel", color: "#0e1b3d" }, children: "Add Page" })
          ] }),
          /* @__PURE__ */ x.jsx(
            Rt,
            {
              size: "small",
              fullWidth: !0,
              placeholder: "Search published pages...",
              value: h,
              onChange: (N) => C(N.target.value)
            }
          ),
          /* @__PURE__ */ x.jsxs(rt, { gap: 1, mt: 1.5, children: [
            E.map((N) => /* @__PURE__ */ x.jsxs(Je, { sx: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 1, border: "1px solid #e5e7eb", borderRadius: "14px", p: 1.1 }, children: [
              /* @__PURE__ */ x.jsxs(Je, { children: [
                /* @__PURE__ */ x.jsx(ze, { sx: { fontWeight: 700, color: "#0e1b3d", fontSize: 14 }, children: N.title }),
                /* @__PURE__ */ x.jsx(ze, { sx: { color: "#667085", fontSize: 12 }, children: N.url })
              ] }),
              /* @__PURE__ */ x.jsx(ot, { size: "small", variant: "outlined", onClick: () => le(N), children: "Add" })
            ] }, N.id)),
            w.trim().length >= 2 && !E.length ? /* @__PURE__ */ x.jsx(ze, { sx: { color: "#667085", fontSize: 13 }, children: "No matching pages found." }) : null
          ] })
        ] }),
        /* @__PURE__ */ x.jsxs(St, { elevation: 0, sx: { border: "1px solid #e5e7eb", borderRadius: "22px", p: 2.5 }, children: [
          /* @__PURE__ */ x.jsxs(rt, { direction: "row", alignItems: "center", gap: 1, mb: 1.5, children: [
            /* @__PURE__ */ x.jsx(gc, { size: 16 }),
            /* @__PURE__ */ x.jsx(ze, { variant: "h6", sx: { fontFamily: "Cinzel", color: "#0e1b3d" }, children: "Add Custom Link" })
          ] }),
          /* @__PURE__ */ x.jsxs(rt, { gap: 1.25, children: [
            /* @__PURE__ */ x.jsx(
              Rt,
              {
                size: "small",
                label: "Link label",
                value: b.label,
                onChange: (N) => O((J) => ({ ...J, label: N.target.value }))
              }
            ),
            /* @__PURE__ */ x.jsx(
              Rt,
              {
                size: "small",
                label: "URL",
                placeholder: "/example/ or https://...",
                value: b.url,
                onChange: (N) => O((J) => ({ ...J, url: N.target.value }))
              }
            ),
            /* @__PURE__ */ x.jsx(ot, { variant: "contained", startIcon: /* @__PURE__ */ x.jsx(Hi, { size: 14 }), onClick: st, children: "Add Custom Link" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ x.jsxs(ai, { open: !!I, onClose: dt, fullWidth: !0, maxWidth: "sm", children: [
      /* @__PURE__ */ x.jsx(ui, { children: "Add Subpage" }),
      /* @__PURE__ */ x.jsxs(ci, { children: [
        /* @__PURE__ */ x.jsxs(ze, { sx: { color: "#667085", fontSize: 14, mb: 2 }, children: [
          "Add a child item under ",
          Ln(q.find((N) => N.id === I)),
          "."
        ] }),
        /* @__PURE__ */ x.jsxs(fi, { value: k, onChange: (N, J) => j(J), sx: { mb: 2 }, children: [
          /* @__PURE__ */ x.jsx(Ro, { value: "page", label: "Page" }),
          /* @__PURE__ */ x.jsx(Ro, { value: "custom", label: "Custom Link" })
        ] }),
        k === "page" ? /* @__PURE__ */ x.jsxs(Je, { children: [
          /* @__PURE__ */ x.jsx(
            Rt,
            {
              size: "small",
              fullWidth: !0,
              placeholder: "Search published pages...",
              value: V,
              onChange: (N) => ee(N.target.value)
            }
          ),
          /* @__PURE__ */ x.jsxs(rt, { gap: 1, mt: 1.5, children: [
            H.map((N) => /* @__PURE__ */ x.jsxs(Je, { sx: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 1, border: "1px solid #e5e7eb", borderRadius: "14px", p: 1.1 }, children: [
              /* @__PURE__ */ x.jsxs(Je, { children: [
                /* @__PURE__ */ x.jsx(ze, { sx: { fontWeight: 700, color: "#0e1b3d", fontSize: 14 }, children: N.title }),
                /* @__PURE__ */ x.jsx(ze, { sx: { color: "#667085", fontSize: 12 }, children: N.url })
              ] }),
              /* @__PURE__ */ x.jsx(ot, { size: "small", variant: "outlined", onClick: () => jt(N), children: "Add Child" })
            ] }, N.id)),
            X.trim().length >= 2 && !H.length ? /* @__PURE__ */ x.jsx(ze, { sx: { color: "#667085", fontSize: 13 }, children: "No matching pages found." }) : null
          ] })
        ] }) : /* @__PURE__ */ x.jsxs(rt, { gap: 1.25, children: [
          /* @__PURE__ */ x.jsx(
            Rt,
            {
              size: "small",
              label: "Link label",
              value: $.label,
              onChange: (N) => B((J) => ({ ...J, label: N.target.value }))
            }
          ),
          /* @__PURE__ */ x.jsx(
            Rt,
            {
              size: "small",
              label: "URL",
              placeholder: "/example/ or https://...",
              value: $.url,
              onChange: (N) => B((J) => ({ ...J, url: N.target.value }))
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ x.jsxs(li, { children: [
        /* @__PURE__ */ x.jsx(ot, { onClick: dt, children: "Cancel" }),
        k === "custom" ? /* @__PURE__ */ x.jsx(ot, { variant: "contained", onClick: Te, children: "Add Child Link" }) : null
      ] })
    ] }),
    /* @__PURE__ */ x.jsxs(
      ai,
      {
        open: F.open,
        onClose: () => K({ open: !1, type: "", itemId: "", title: "" }),
        fullWidth: !0,
        maxWidth: "xs",
        children: [
          /* @__PURE__ */ x.jsx(ui, { children: F.type === "unlock" ? "Unlock Protected Item?" : "Delete Menu Item?" }),
          /* @__PURE__ */ x.jsx(ci, { children: F.type === "unlock" ? /* @__PURE__ */ x.jsxs(gn, { severity: "warning", children: [
            "Editing “",
            F.title,
            "” can change the site’s core navigation. Proceed only if you intend to alter the protected structure."
          ] }) : /* @__PURE__ */ x.jsx(gn, { severity: ae?.locked ? "warning" : "error", children: ae?.locked ? `Deleting “${F.title}” is dangerous because it is part of the protected menu structure.` : `Delete “${F.title}” and any submenu items under it?` }) }),
          /* @__PURE__ */ x.jsxs(li, { children: [
            /* @__PURE__ */ x.jsx(ot, { onClick: () => K({ open: !1, type: "", itemId: "", title: "" }), children: "Cancel" }),
            /* @__PURE__ */ x.jsx(
              ot,
              {
                color: F.type === "unlock" ? "warning" : "error",
                variant: "contained",
                onClick: yt,
                children: F.type === "unlock" ? "Unlock Editing" : "Delete Item"
              }
            )
          ] })
        ]
      }
    ),
    re ? null : /* @__PURE__ */ x.jsx(
      Je,
      {
        sx: {
          position: "fixed",
          right: { xs: 16, md: 24 },
          bottom: { xs: 16, md: 24 },
          zIndex: 1600
        },
        children: /* @__PURE__ */ x.jsx(
          ot,
          {
            variant: "contained",
            startIcon: /* @__PURE__ */ x.jsx(Cr, { size: 16 }),
            onClick: pt,
            disabled: c || d,
            sx: {
              minWidth: 160,
              borderRadius: "999px",
              px: 2.5,
              py: 1.25,
              boxShadow: "0 18px 40px rgba(14, 27, 61, 0.22)",
              backgroundColor: "#0e1b3d",
              "&:hover": { backgroundColor: "#ffcc00", color: "#0e1b3d" }
            },
            children: d ? "Saving..." : "Save Menus"
          }
        )
      }
    ),
    /* @__PURE__ */ x.jsx(
      nc,
      {
        open: !!g,
        autoHideDuration: 3200,
        onClose: () => y(""),
        anchorOrigin: { vertical: "bottom", horizontal: "right" },
        sx: {
          bottom: re ? void 0 : { xs: 88, md: 96 }
        },
        children: /* @__PURE__ */ x.jsx(
          gn,
          {
            severity: "success",
            variant: "filled",
            onClose: () => y(""),
            sx: { width: "100%", boxShadow: "0 18px 40px rgba(14, 27, 61, 0.22)" },
            children: g
          }
        )
      }
    )
  ] });
}
export {
  vy as default
};
