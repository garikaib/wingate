function PE(J) {
  return J && J.__esModule && Object.prototype.hasOwnProperty.call(J, "default") ? J.default : J;
}
var Xv = { exports: {} }, _0 = {};
var NE;
function DA() {
  if (NE) return _0;
  NE = 1;
  var J = /* @__PURE__ */ Symbol.for("react.transitional.element"), F = /* @__PURE__ */ Symbol.for("react.fragment");
  function ve(U, Ce, _e) {
    var Ye = null;
    if (_e !== void 0 && (Ye = "" + _e), Ce.key !== void 0 && (Ye = "" + Ce.key), "key" in Ce) {
      _e = {};
      for (var gt in Ce)
        gt !== "key" && (_e[gt] = Ce[gt]);
    } else _e = Ce;
    return Ce = _e.ref, {
      $$typeof: J,
      type: U,
      key: Ye,
      ref: Ce !== void 0 ? Ce : null,
      props: _e
    };
  }
  return _0.Fragment = F, _0.jsx = ve, _0.jsxs = ve, _0;
}
var D0 = {}, Lv = { exports: {} }, Ve = {};
var jE;
function RA() {
  if (jE) return Ve;
  jE = 1;
  var J = /* @__PURE__ */ Symbol.for("react.transitional.element"), F = /* @__PURE__ */ Symbol.for("react.portal"), ve = /* @__PURE__ */ Symbol.for("react.fragment"), U = /* @__PURE__ */ Symbol.for("react.strict_mode"), Ce = /* @__PURE__ */ Symbol.for("react.profiler"), _e = /* @__PURE__ */ Symbol.for("react.consumer"), Ye = /* @__PURE__ */ Symbol.for("react.context"), gt = /* @__PURE__ */ Symbol.for("react.forward_ref"), L = /* @__PURE__ */ Symbol.for("react.suspense"), Q = /* @__PURE__ */ Symbol.for("react.memo"), we = /* @__PURE__ */ Symbol.for("react.lazy"), ye = /* @__PURE__ */ Symbol.for("react.activity"), W = Symbol.iterator;
  function N(O) {
    return O === null || typeof O != "object" ? null : (O = W && O[W] || O["@@iterator"], typeof O == "function" ? O : null);
  }
  var oe = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, Le = Object.assign, al = {};
  function Pe(O, A, $) {
    this.props = O, this.context = A, this.refs = al, this.updater = $ || oe;
  }
  Pe.prototype.isReactComponent = {}, Pe.prototype.setState = function(O, A) {
    if (typeof O != "object" && typeof O != "function" && O != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, O, A, "setState");
  }, Pe.prototype.forceUpdate = function(O) {
    this.updater.enqueueForceUpdate(this, O, "forceUpdate");
  };
  function ht() {
  }
  ht.prototype = Pe.prototype;
  function jt(O, A, $) {
    this.props = O, this.context = A, this.refs = al, this.updater = $ || oe;
  }
  var It = jt.prototype = new ht();
  It.constructor = jt, Le(It, Pe.prototype), It.isPureReactComponent = !0;
  var nl = Array.isArray;
  function Bt() {
  }
  var Ge = { H: null, A: null, T: null, S: null }, _t = Object.prototype.hasOwnProperty;
  function tt(O, A, $) {
    var te = $.ref;
    return {
      $$typeof: J,
      type: O,
      key: A,
      ref: te !== void 0 ? te : null,
      props: $
    };
  }
  function Qt(O, A) {
    return tt(O.type, A, O.props);
  }
  function re(O) {
    return typeof O == "object" && O !== null && O.$$typeof === J;
  }
  function bt(O) {
    var A = { "=": "=0", ":": "=2" };
    return "$" + O.replace(/[=:]/g, function($) {
      return A[$];
    });
  }
  var Oe = /\/+/g;
  function xe(O, A) {
    return typeof O == "object" && O !== null && O.key != null ? bt("" + O.key) : A.toString(36);
  }
  function Yt(O) {
    switch (O.status) {
      case "fulfilled":
        return O.value;
      case "rejected":
        throw O.reason;
      default:
        switch (typeof O.status == "string" ? O.then(Bt, Bt) : (O.status = "pending", O.then(
          function(A) {
            O.status === "pending" && (O.status = "fulfilled", O.value = A);
          },
          function(A) {
            O.status === "pending" && (O.status = "rejected", O.reason = A);
          }
        )), O.status) {
          case "fulfilled":
            return O.value;
          case "rejected":
            throw O.reason;
        }
    }
    throw O;
  }
  function X(O, A, $, te, ne) {
    var De = typeof O;
    (De === "undefined" || De === "boolean") && (O = null);
    var lt = !1;
    if (O === null) lt = !0;
    else
      switch (De) {
        case "bigint":
        case "string":
        case "number":
          lt = !0;
          break;
        case "object":
          switch (O.$$typeof) {
            case J:
            case F:
              lt = !0;
              break;
            case we:
              return lt = O._init, X(
                lt(O._payload),
                A,
                $,
                te,
                ne
              );
          }
      }
    if (lt)
      return ne = ne(O), lt = te === "" ? "." + xe(O, 0) : te, nl(ne) ? ($ = "", lt != null && ($ = lt.replace(Oe, "$&/") + "/"), X(ne, A, $, "", function(ta) {
        return ta;
      })) : ne != null && (re(ne) && (ne = Qt(
        ne,
        $ + (ne.key == null || O && O.key === ne.key ? "" : ("" + ne.key).replace(
          Oe,
          "$&/"
        ) + "/") + lt
      )), A.push(ne)), 1;
    lt = 0;
    var We = te === "" ? "." : te + ":";
    if (nl(O))
      for (var Et = 0; Et < O.length; Et++)
        te = O[Et], De = We + xe(te, Et), lt += X(
          te,
          A,
          $,
          De,
          ne
        );
    else if (Et = N(O), typeof Et == "function")
      for (O = Et.call(O), Et = 0; !(te = O.next()).done; )
        te = te.value, De = We + xe(te, Et++), lt += X(
          te,
          A,
          $,
          De,
          ne
        );
    else if (De === "object") {
      if (typeof O.then == "function")
        return X(
          Yt(O),
          A,
          $,
          te,
          ne
        );
      throw A = String(O), Error(
        "Objects are not valid as a React child (found: " + (A === "[object Object]" ? "object with keys {" + Object.keys(O).join(", ") + "}" : A) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return lt;
  }
  function B(O, A, $) {
    if (O == null) return O;
    var te = [], ne = 0;
    return X(O, te, "", "", function(De) {
      return A.call($, De, ne++);
    }), te;
  }
  function ee(O) {
    if (O._status === -1) {
      var A = O._result;
      A = A(), A.then(
        function($) {
          (O._status === 0 || O._status === -1) && (O._status = 1, O._result = $);
        },
        function($) {
          (O._status === 0 || O._status === -1) && (O._status = 2, O._result = $);
        }
      ), O._status === -1 && (O._status = 0, O._result = A);
    }
    if (O._status === 1) return O._result.default;
    throw O._result;
  }
  var ce = typeof reportError == "function" ? reportError : function(O) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var A = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof O == "object" && O !== null && typeof O.message == "string" ? String(O.message) : String(O),
        error: O
      });
      if (!window.dispatchEvent(A)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", O);
      return;
    }
    console.error(O);
  }, be = {
    map: B,
    forEach: function(O, A, $) {
      B(
        O,
        function() {
          A.apply(this, arguments);
        },
        $
      );
    },
    count: function(O) {
      var A = 0;
      return B(O, function() {
        A++;
      }), A;
    },
    toArray: function(O) {
      return B(O, function(A) {
        return A;
      }) || [];
    },
    only: function(O) {
      if (!re(O))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return O;
    }
  };
  return Ve.Activity = ye, Ve.Children = be, Ve.Component = Pe, Ve.Fragment = ve, Ve.Profiler = Ce, Ve.PureComponent = jt, Ve.StrictMode = U, Ve.Suspense = L, Ve.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Ge, Ve.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(O) {
      return Ge.H.useMemoCache(O);
    }
  }, Ve.cache = function(O) {
    return function() {
      return O.apply(null, arguments);
    };
  }, Ve.cacheSignal = function() {
    return null;
  }, Ve.cloneElement = function(O, A, $) {
    if (O == null)
      throw Error(
        "The argument must be a React element, but you passed " + O + "."
      );
    var te = Le({}, O.props), ne = O.key;
    if (A != null)
      for (De in A.key !== void 0 && (ne = "" + A.key), A)
        !_t.call(A, De) || De === "key" || De === "__self" || De === "__source" || De === "ref" && A.ref === void 0 || (te[De] = A[De]);
    var De = arguments.length - 2;
    if (De === 1) te.children = $;
    else if (1 < De) {
      for (var lt = Array(De), We = 0; We < De; We++)
        lt[We] = arguments[We + 2];
      te.children = lt;
    }
    return tt(O.type, ne, te);
  }, Ve.createContext = function(O) {
    return O = {
      $$typeof: Ye,
      _currentValue: O,
      _currentValue2: O,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, O.Provider = O, O.Consumer = {
      $$typeof: _e,
      _context: O
    }, O;
  }, Ve.createElement = function(O, A, $) {
    var te, ne = {}, De = null;
    if (A != null)
      for (te in A.key !== void 0 && (De = "" + A.key), A)
        _t.call(A, te) && te !== "key" && te !== "__self" && te !== "__source" && (ne[te] = A[te]);
    var lt = arguments.length - 2;
    if (lt === 1) ne.children = $;
    else if (1 < lt) {
      for (var We = Array(lt), Et = 0; Et < lt; Et++)
        We[Et] = arguments[Et + 2];
      ne.children = We;
    }
    if (O && O.defaultProps)
      for (te in lt = O.defaultProps, lt)
        ne[te] === void 0 && (ne[te] = lt[te]);
    return tt(O, De, ne);
  }, Ve.createRef = function() {
    return { current: null };
  }, Ve.forwardRef = function(O) {
    return { $$typeof: gt, render: O };
  }, Ve.isValidElement = re, Ve.lazy = function(O) {
    return {
      $$typeof: we,
      _payload: { _status: -1, _result: O },
      _init: ee
    };
  }, Ve.memo = function(O, A) {
    return {
      $$typeof: Q,
      type: O,
      compare: A === void 0 ? null : A
    };
  }, Ve.startTransition = function(O) {
    var A = Ge.T, $ = {};
    Ge.T = $;
    try {
      var te = O(), ne = Ge.S;
      ne !== null && ne($, te), typeof te == "object" && te !== null && typeof te.then == "function" && te.then(Bt, ce);
    } catch (De) {
      ce(De);
    } finally {
      A !== null && $.types !== null && (A.types = $.types), Ge.T = A;
    }
  }, Ve.unstable_useCacheRefresh = function() {
    return Ge.H.useCacheRefresh();
  }, Ve.use = function(O) {
    return Ge.H.use(O);
  }, Ve.useActionState = function(O, A, $) {
    return Ge.H.useActionState(O, A, $);
  }, Ve.useCallback = function(O, A) {
    return Ge.H.useCallback(O, A);
  }, Ve.useContext = function(O) {
    return Ge.H.useContext(O);
  }, Ve.useDebugValue = function() {
  }, Ve.useDeferredValue = function(O, A) {
    return Ge.H.useDeferredValue(O, A);
  }, Ve.useEffect = function(O, A) {
    return Ge.H.useEffect(O, A);
  }, Ve.useEffectEvent = function(O) {
    return Ge.H.useEffectEvent(O);
  }, Ve.useId = function() {
    return Ge.H.useId();
  }, Ve.useImperativeHandle = function(O, A, $) {
    return Ge.H.useImperativeHandle(O, A, $);
  }, Ve.useInsertionEffect = function(O, A) {
    return Ge.H.useInsertionEffect(O, A);
  }, Ve.useLayoutEffect = function(O, A) {
    return Ge.H.useLayoutEffect(O, A);
  }, Ve.useMemo = function(O, A) {
    return Ge.H.useMemo(O, A);
  }, Ve.useOptimistic = function(O, A) {
    return Ge.H.useOptimistic(O, A);
  }, Ve.useReducer = function(O, A, $) {
    return Ge.H.useReducer(O, A, $);
  }, Ve.useRef = function(O) {
    return Ge.H.useRef(O);
  }, Ve.useState = function(O) {
    return Ge.H.useState(O);
  }, Ve.useSyncExternalStore = function(O, A, $) {
    return Ge.H.useSyncExternalStore(
      O,
      A,
      $
    );
  }, Ve.useTransition = function() {
    return Ge.H.useTransition();
  }, Ve.version = "19.2.4", Ve;
}
var C0 = { exports: {} };
C0.exports;
var BE;
function MA() {
  return BE || (BE = 1, (function(J, F) {
    var ve = {};
    ve.NODE_ENV !== "production" && (function() {
      function U(g, M) {
        Object.defineProperty(Ye.prototype, g, {
          get: function() {
            console.warn(
              "%s(...) is deprecated in plain JavaScript React classes. %s",
              M[0],
              M[1]
            );
          }
        });
      }
      function Ce(g) {
        return g === null || typeof g != "object" ? null : (g = Tc && g[Tc] || g["@@iterator"], typeof g == "function" ? g : null);
      }
      function _e(g, M) {
        g = (g = g.constructor) && (g.displayName || g.name) || "ReactClass";
        var P = g + "." + M;
        Wa[P] || (console.error(
          "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
          M,
          g
        ), Wa[P] = !0);
      }
      function Ye(g, M, P) {
        this.props = g, this.context = M, this.refs = zt, this.updater = P || ui;
      }
      function gt() {
      }
      function L(g, M, P) {
        this.props = g, this.context = M, this.refs = zt, this.updater = P || ui;
      }
      function Q() {
      }
      function we(g) {
        return "" + g;
      }
      function ye(g) {
        try {
          we(g);
          var M = !1;
        } catch {
          M = !0;
        }
        if (M) {
          M = console;
          var P = M.error, ae = typeof Symbol == "function" && Symbol.toStringTag && g[Symbol.toStringTag] || g.constructor.name || "Object";
          return P.call(
            M,
            "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
            ae
          ), we(g);
        }
      }
      function W(g) {
        if (g == null) return null;
        if (typeof g == "function")
          return g.$$typeof === ts ? null : g.displayName || g.name || null;
        if (typeof g == "string") return g;
        switch (g) {
          case A:
            return "Fragment";
          case te:
            return "Profiler";
          case $:
            return "StrictMode";
          case We:
            return "Suspense";
          case Et:
            return "SuspenseList";
          case se:
            return "Activity";
        }
        if (typeof g == "object")
          switch (typeof g.tag == "number" && console.error(
            "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
          ), g.$$typeof) {
            case O:
              return "Portal";
            case De:
              return g.displayName || "Context";
            case ne:
              return (g._context.displayName || "Context") + ".Consumer";
            case lt:
              var M = g.render;
              return g = g.displayName, g || (g = M.displayName || M.name || "", g = g !== "" ? "ForwardRef(" + g + ")" : "ForwardRef"), g;
            case ta:
              return M = g.displayName || null, M !== null ? M : W(g.type) || "Memo";
            case gn:
              M = g._payload, g = g._init;
              try {
                return W(g(M));
              } catch {
              }
          }
        return null;
      }
      function N(g) {
        if (g === A) return "<>";
        if (typeof g == "object" && g !== null && g.$$typeof === gn)
          return "<...>";
        try {
          var M = W(g);
          return M ? "<" + M + ">" : "<...>";
        } catch {
          return "<...>";
        }
      }
      function oe() {
        var g = me.A;
        return g === null ? null : g.getOwner();
      }
      function Le() {
        return Error("react-stack-top-frame");
      }
      function al(g) {
        if (No.call(g, "key")) {
          var M = Object.getOwnPropertyDescriptor(g, "key").get;
          if (M && M.isReactWarning) return !1;
        }
        return g.key !== void 0;
      }
      function Pe(g, M) {
        function P() {
          Tl || (Tl = !0, console.error(
            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
            M
          ));
        }
        P.isReactWarning = !0, Object.defineProperty(g, "key", {
          get: P,
          configurable: !0
        });
      }
      function ht() {
        var g = W(this.type);
        return ls[g] || (ls[g] = !0, console.error(
          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
        )), g = this.props.ref, g !== void 0 ? g : null;
      }
      function jt(g, M, P, ae, de, He) {
        var pe = P.ref;
        return g = {
          $$typeof: be,
          type: g,
          key: M,
          props: P,
          _owner: ae
        }, (pe !== void 0 ? pe : null) !== null ? Object.defineProperty(g, "ref", {
          enumerable: !1,
          get: ht
        }) : Object.defineProperty(g, "ref", { enumerable: !1, value: null }), g._store = {}, Object.defineProperty(g._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: 0
        }), Object.defineProperty(g, "_debugInfo", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: null
        }), Object.defineProperty(g, "_debugStack", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: de
        }), Object.defineProperty(g, "_debugTask", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: He
        }), Object.freeze && (Object.freeze(g.props), Object.freeze(g)), g;
      }
      function It(g, M) {
        return M = jt(
          g.type,
          M,
          g.props,
          g._owner,
          g._debugStack,
          g._debugTask
        ), g._store && (M._store.validated = g._store.validated), M;
      }
      function nl(g) {
        Bt(g) ? g._store && (g._store.validated = 1) : typeof g == "object" && g !== null && g.$$typeof === gn && (g._payload.status === "fulfilled" ? Bt(g._payload.value) && g._payload.value._store && (g._payload.value._store.validated = 1) : g._store && (g._store.validated = 1));
      }
      function Bt(g) {
        return typeof g == "object" && g !== null && g.$$typeof === be;
      }
      function Ge(g) {
        var M = { "=": "=0", ":": "=2" };
        return "$" + g.replace(/[=:]/g, function(P) {
          return M[P];
        });
      }
      function _t(g, M) {
        return typeof g == "object" && g !== null && g.key != null ? (ye(g.key), Ge("" + g.key)) : M.toString(36);
      }
      function tt(g) {
        switch (g.status) {
          case "fulfilled":
            return g.value;
          case "rejected":
            throw g.reason;
          default:
            switch (typeof g.status == "string" ? g.then(Q, Q) : (g.status = "pending", g.then(
              function(M) {
                g.status === "pending" && (g.status = "fulfilled", g.value = M);
              },
              function(M) {
                g.status === "pending" && (g.status = "rejected", g.reason = M);
              }
            )), g.status) {
              case "fulfilled":
                return g.value;
              case "rejected":
                throw g.reason;
            }
        }
        throw g;
      }
      function Qt(g, M, P, ae, de) {
        var He = typeof g;
        (He === "undefined" || He === "boolean") && (g = null);
        var pe = !1;
        if (g === null) pe = !0;
        else
          switch (He) {
            case "bigint":
            case "string":
            case "number":
              pe = !0;
              break;
            case "object":
              switch (g.$$typeof) {
                case be:
                case O:
                  pe = !0;
                  break;
                case gn:
                  return pe = g._init, Qt(
                    pe(g._payload),
                    M,
                    P,
                    ae,
                    de
                  );
              }
          }
        if (pe) {
          pe = g, de = de(pe);
          var ot = ae === "" ? "." + _t(pe, 0) : ae;
          return Yi(de) ? (P = "", ot != null && (P = ot.replace(as, "$&/") + "/"), Qt(de, M, P, "", function(Gl) {
            return Gl;
          })) : de != null && (Bt(de) && (de.key != null && (pe && pe.key === de.key || ye(de.key)), P = It(
            de,
            P + (de.key == null || pe && pe.key === de.key ? "" : ("" + de.key).replace(
              as,
              "$&/"
            ) + "/") + ot
          ), ae !== "" && pe != null && Bt(pe) && pe.key == null && pe._store && !pe._store.validated && (P._store.validated = 2), de = P), M.push(de)), 1;
        }
        if (pe = 0, ot = ae === "" ? "." : ae + ":", Yi(g))
          for (var Be = 0; Be < g.length; Be++)
            ae = g[Be], He = ot + _t(ae, Be), pe += Qt(
              ae,
              M,
              P,
              He,
              de
            );
        else if (Be = Ce(g), typeof Be == "function")
          for (Be === g.entries && (Gi || console.warn(
            "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
          ), Gi = !0), g = Be.call(g), Be = 0; !(ae = g.next()).done; )
            ae = ae.value, He = ot + _t(ae, Be++), pe += Qt(
              ae,
              M,
              P,
              He,
              de
            );
        else if (He === "object") {
          if (typeof g.then == "function")
            return Qt(
              tt(g),
              M,
              P,
              ae,
              de
            );
          throw M = String(g), Error(
            "Objects are not valid as a React child (found: " + (M === "[object Object]" ? "object with keys {" + Object.keys(g).join(", ") + "}" : M) + "). If you meant to render a collection of children, use an array instead."
          );
        }
        return pe;
      }
      function re(g, M, P) {
        if (g == null) return g;
        var ae = [], de = 0;
        return Qt(g, ae, "", "", function(He) {
          return M.call(P, He, de++);
        }), ae;
      }
      function bt(g) {
        if (g._status === -1) {
          var M = g._ioInfo;
          M != null && (M.start = M.end = performance.now()), M = g._result;
          var P = M();
          if (P.then(
            function(de) {
              if (g._status === 0 || g._status === -1) {
                g._status = 1, g._result = de;
                var He = g._ioInfo;
                He != null && (He.end = performance.now()), P.status === void 0 && (P.status = "fulfilled", P.value = de);
              }
            },
            function(de) {
              if (g._status === 0 || g._status === -1) {
                g._status = 2, g._result = de;
                var He = g._ioInfo;
                He != null && (He.end = performance.now()), P.status === void 0 && (P.status = "rejected", P.reason = de);
              }
            }
          ), M = g._ioInfo, M != null) {
            M.value = P;
            var ae = P.displayName;
            typeof ae == "string" && (M.name = ae);
          }
          g._status === -1 && (g._status = 0, g._result = P);
        }
        if (g._status === 1)
          return M = g._result, M === void 0 && console.error(
            `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`,
            M
          ), "default" in M || console.error(
            `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,
            M
          ), M.default;
        throw g._result;
      }
      function Oe() {
        var g = me.H;
        return g === null && console.error(
          `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
        ), g;
      }
      function xe() {
        me.asyncTransitions--;
      }
      function Yt(g) {
        if (wn === null)
          try {
            var M = ("require" + Math.random()).slice(0, 7);
            wn = (J && J[M]).call(
              J,
              "timers"
            ).setImmediate;
          } catch {
            wn = function(ae) {
              us === !1 && (us = !0, typeof MessageChannel > "u" && console.error(
                "This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."
              ));
              var de = new MessageChannel();
              de.port1.onmessage = ae, de.port2.postMessage(void 0);
            };
          }
        return wn(g);
      }
      function X(g) {
        return 1 < g.length && typeof AggregateError == "function" ? new AggregateError(g) : g[0];
      }
      function B(g, M) {
        M !== gl - 1 && console.error(
          "You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "
        ), gl = M;
      }
      function ee(g, M, P) {
        var ae = me.actQueue;
        if (ae !== null)
          if (ae.length !== 0)
            try {
              ce(ae), Yt(function() {
                return ee(g, M, P);
              });
              return;
            } catch (de) {
              me.thrownErrors.push(de);
            }
          else me.actQueue = null;
        0 < me.thrownErrors.length ? (ae = X(me.thrownErrors), me.thrownErrors.length = 0, P(ae)) : M(g);
      }
      function ce(g) {
        if (!Ml) {
          Ml = !0;
          var M = 0;
          try {
            for (; M < g.length; M++) {
              var P = g[M];
              do {
                me.didUsePromise = !1;
                var ae = P(!1);
                if (ae !== null) {
                  if (me.didUsePromise) {
                    g[M] = P, g.splice(0, M);
                    return;
                  }
                  P = ae;
                } else break;
              } while (!0);
            }
            g.length = 0;
          } catch (de) {
            g.splice(0, M + 1), me.thrownErrors.push(de);
          } finally {
            Ml = !1;
          }
        }
      }
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var be = /* @__PURE__ */ Symbol.for("react.transitional.element"), O = /* @__PURE__ */ Symbol.for("react.portal"), A = /* @__PURE__ */ Symbol.for("react.fragment"), $ = /* @__PURE__ */ Symbol.for("react.strict_mode"), te = /* @__PURE__ */ Symbol.for("react.profiler"), ne = /* @__PURE__ */ Symbol.for("react.consumer"), De = /* @__PURE__ */ Symbol.for("react.context"), lt = /* @__PURE__ */ Symbol.for("react.forward_ref"), We = /* @__PURE__ */ Symbol.for("react.suspense"), Et = /* @__PURE__ */ Symbol.for("react.suspense_list"), ta = /* @__PURE__ */ Symbol.for("react.memo"), gn = /* @__PURE__ */ Symbol.for("react.lazy"), se = /* @__PURE__ */ Symbol.for("react.activity"), Tc = Symbol.iterator, Wa = {}, ui = {
        isMounted: function() {
          return !1;
        },
        enqueueForceUpdate: function(g) {
          _e(g, "forceUpdate");
        },
        enqueueReplaceState: function(g) {
          _e(g, "replaceState");
        },
        enqueueSetState: function(g) {
          _e(g, "setState");
        }
      }, uu = Object.assign, zt = {};
      Object.freeze(zt), Ye.prototype.isReactComponent = {}, Ye.prototype.setState = function(g, M) {
        if (typeof g != "object" && typeof g != "function" && g != null)
          throw Error(
            "takes an object of state variables to update or a function which returns an object of state variables."
          );
        this.updater.enqueueSetState(this, g, M, "setState");
      }, Ye.prototype.forceUpdate = function(g) {
        this.updater.enqueueForceUpdate(this, g, "forceUpdate");
      };
      var wl = {
        isMounted: [
          "isMounted",
          "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
        ],
        replaceState: [
          "replaceState",
          "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
        ]
      };
      for (Xi in wl)
        wl.hasOwnProperty(Xi) && U(Xi, wl[Xi]);
      gt.prototype = Ye.prototype, wl = L.prototype = new gt(), wl.constructor = L, uu(wl, Ye.prototype), wl.isPureReactComponent = !0;
      var Yi = Array.isArray, ts = /* @__PURE__ */ Symbol.for("react.client.reference"), me = {
        H: null,
        A: null,
        T: null,
        S: null,
        actQueue: null,
        asyncTransitions: 0,
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1,
        didUsePromise: !1,
        thrownErrors: [],
        getCurrentStack: null,
        recentlyCreatedOwnerStacks: 0
      }, No = Object.prototype.hasOwnProperty, iu = console.createTask ? console.createTask : function() {
        return null;
      };
      wl = {
        react_stack_bottom_frame: function(g) {
          return g();
        }
      };
      var Tl, qi, ls = {}, jo = wl.react_stack_bottom_frame.bind(
        wl,
        Le
      )(), wi = iu(N(Le)), Gi = !1, as = /\/+/g, ns = typeof reportError == "function" ? reportError : function(g) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
          var M = new window.ErrorEvent("error", {
            bubbles: !0,
            cancelable: !0,
            message: typeof g == "object" && g !== null && typeof g.message == "string" ? String(g.message) : String(g),
            error: g
          });
          if (!window.dispatchEvent(M)) return;
        } else if (typeof process == "object" && typeof process.emit == "function") {
          process.emit("uncaughtException", g);
          return;
        }
        console.error(g);
      }, us = !1, wn = null, gl = 0, _a = !1, Ml = !1, Bo = typeof queueMicrotask == "function" ? function(g) {
        queueMicrotask(function() {
          return queueMicrotask(g);
        });
      } : Yt;
      wl = Object.freeze({
        __proto__: null,
        c: function(g) {
          return Oe().useMemoCache(g);
        }
      });
      var Xi = {
        map: re,
        forEach: function(g, M, P) {
          re(
            g,
            function() {
              M.apply(this, arguments);
            },
            P
          );
        },
        count: function(g) {
          var M = 0;
          return re(g, function() {
            M++;
          }), M;
        },
        toArray: function(g) {
          return re(g, function(M) {
            return M;
          }) || [];
        },
        only: function(g) {
          if (!Bt(g))
            throw Error(
              "React.Children.only expected to receive a single React element child."
            );
          return g;
        }
      };
      F.Activity = se, F.Children = Xi, F.Component = Ye, F.Fragment = A, F.Profiler = te, F.PureComponent = L, F.StrictMode = $, F.Suspense = We, F.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = me, F.__COMPILER_RUNTIME = wl, F.act = function(g) {
        var M = me.actQueue, P = gl;
        gl++;
        var ae = me.actQueue = M !== null ? M : [], de = !1;
        try {
          var He = g();
        } catch (Be) {
          me.thrownErrors.push(Be);
        }
        if (0 < me.thrownErrors.length)
          throw B(M, P), g = X(me.thrownErrors), me.thrownErrors.length = 0, g;
        if (He !== null && typeof He == "object" && typeof He.then == "function") {
          var pe = He;
          return Bo(function() {
            de || _a || (_a = !0, console.error(
              "You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"
            ));
          }), {
            then: function(Be, Gl) {
              de = !0, pe.then(
                function(Da) {
                  if (B(M, P), P === 0) {
                    try {
                      ce(ae), Yt(function() {
                        return ee(
                          Da,
                          Be,
                          Gl
                        );
                      });
                    } catch (Ac) {
                      me.thrownErrors.push(Ac);
                    }
                    if (0 < me.thrownErrors.length) {
                      var sd = X(
                        me.thrownErrors
                      );
                      me.thrownErrors.length = 0, Gl(sd);
                    }
                  } else Be(Da);
                },
                function(Da) {
                  B(M, P), 0 < me.thrownErrors.length && (Da = X(
                    me.thrownErrors
                  ), me.thrownErrors.length = 0), Gl(Da);
                }
              );
            }
          };
        }
        var ot = He;
        if (B(M, P), P === 0 && (ce(ae), ae.length !== 0 && Bo(function() {
          de || _a || (_a = !0, console.error(
            "A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"
          ));
        }), me.actQueue = null), 0 < me.thrownErrors.length)
          throw g = X(me.thrownErrors), me.thrownErrors.length = 0, g;
        return {
          then: function(Be, Gl) {
            de = !0, P === 0 ? (me.actQueue = ae, Yt(function() {
              return ee(
                ot,
                Be,
                Gl
              );
            })) : Be(ot);
          }
        };
      }, F.cache = function(g) {
        return function() {
          return g.apply(null, arguments);
        };
      }, F.cacheSignal = function() {
        return null;
      }, F.captureOwnerStack = function() {
        var g = me.getCurrentStack;
        return g === null ? null : g();
      }, F.cloneElement = function(g, M, P) {
        if (g == null)
          throw Error(
            "The argument must be a React element, but you passed " + g + "."
          );
        var ae = uu({}, g.props), de = g.key, He = g._owner;
        if (M != null) {
          var pe;
          e: {
            if (No.call(M, "ref") && (pe = Object.getOwnPropertyDescriptor(
              M,
              "ref"
            ).get) && pe.isReactWarning) {
              pe = !1;
              break e;
            }
            pe = M.ref !== void 0;
          }
          pe && (He = oe()), al(M) && (ye(M.key), de = "" + M.key);
          for (ot in M)
            !No.call(M, ot) || ot === "key" || ot === "__self" || ot === "__source" || ot === "ref" && M.ref === void 0 || (ae[ot] = M[ot]);
        }
        var ot = arguments.length - 2;
        if (ot === 1) ae.children = P;
        else if (1 < ot) {
          pe = Array(ot);
          for (var Be = 0; Be < ot; Be++)
            pe[Be] = arguments[Be + 2];
          ae.children = pe;
        }
        for (ae = jt(
          g.type,
          de,
          ae,
          He,
          g._debugStack,
          g._debugTask
        ), de = 2; de < arguments.length; de++)
          nl(arguments[de]);
        return ae;
      }, F.createContext = function(g) {
        return g = {
          $$typeof: De,
          _currentValue: g,
          _currentValue2: g,
          _threadCount: 0,
          Provider: null,
          Consumer: null
        }, g.Provider = g, g.Consumer = {
          $$typeof: ne,
          _context: g
        }, g._currentRenderer = null, g._currentRenderer2 = null, g;
      }, F.createElement = function(g, M, P) {
        for (var ae = 2; ae < arguments.length; ae++)
          nl(arguments[ae]);
        ae = {};
        var de = null;
        if (M != null)
          for (Be in qi || !("__self" in M) || "key" in M || (qi = !0, console.warn(
            "Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform"
          )), al(M) && (ye(M.key), de = "" + M.key), M)
            No.call(M, Be) && Be !== "key" && Be !== "__self" && Be !== "__source" && (ae[Be] = M[Be]);
        var He = arguments.length - 2;
        if (He === 1) ae.children = P;
        else if (1 < He) {
          for (var pe = Array(He), ot = 0; ot < He; ot++)
            pe[ot] = arguments[ot + 2];
          Object.freeze && Object.freeze(pe), ae.children = pe;
        }
        if (g && g.defaultProps)
          for (Be in He = g.defaultProps, He)
            ae[Be] === void 0 && (ae[Be] = He[Be]);
        de && Pe(
          ae,
          typeof g == "function" ? g.displayName || g.name || "Unknown" : g
        );
        var Be = 1e4 > me.recentlyCreatedOwnerStacks++;
        return jt(
          g,
          de,
          ae,
          oe(),
          Be ? Error("react-stack-top-frame") : jo,
          Be ? iu(N(g)) : wi
        );
      }, F.createRef = function() {
        var g = { current: null };
        return Object.seal(g), g;
      }, F.forwardRef = function(g) {
        g != null && g.$$typeof === ta ? console.error(
          "forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."
        ) : typeof g != "function" ? console.error(
          "forwardRef requires a render function but was given %s.",
          g === null ? "null" : typeof g
        ) : g.length !== 0 && g.length !== 2 && console.error(
          "forwardRef render functions accept exactly two parameters: props and ref. %s",
          g.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."
        ), g != null && g.defaultProps != null && console.error(
          "forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?"
        );
        var M = { $$typeof: lt, render: g }, P;
        return Object.defineProperty(M, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return P;
          },
          set: function(ae) {
            P = ae, g.name || g.displayName || (Object.defineProperty(g, "name", { value: ae }), g.displayName = ae);
          }
        }), M;
      }, F.isValidElement = Bt, F.lazy = function(g) {
        g = { _status: -1, _result: g };
        var M = {
          $$typeof: gn,
          _payload: g,
          _init: bt
        }, P = {
          name: "lazy",
          start: -1,
          end: -1,
          value: null,
          owner: null,
          debugStack: Error("react-stack-top-frame"),
          debugTask: console.createTask ? console.createTask("lazy()") : null
        };
        return g._ioInfo = P, M._debugInfo = [{ awaited: P }], M;
      }, F.memo = function(g, M) {
        g == null && console.error(
          "memo: The first argument must be a component. Instead received: %s",
          g === null ? "null" : typeof g
        ), M = {
          $$typeof: ta,
          type: g,
          compare: M === void 0 ? null : M
        };
        var P;
        return Object.defineProperty(M, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return P;
          },
          set: function(ae) {
            P = ae, g.name || g.displayName || (Object.defineProperty(g, "name", { value: ae }), g.displayName = ae);
          }
        }), M;
      }, F.startTransition = function(g) {
        var M = me.T, P = {};
        P._updatedFibers = /* @__PURE__ */ new Set(), me.T = P;
        try {
          var ae = g(), de = me.S;
          de !== null && de(P, ae), typeof ae == "object" && ae !== null && typeof ae.then == "function" && (me.asyncTransitions++, ae.then(xe, xe), ae.then(Q, ns));
        } catch (He) {
          ns(He);
        } finally {
          M === null && P._updatedFibers && (g = P._updatedFibers.size, P._updatedFibers.clear(), 10 < g && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          )), M !== null && P.types !== null && (M.types !== null && M.types !== P.types && console.error(
            "We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."
          ), M.types = P.types), me.T = M;
        }
      }, F.unstable_useCacheRefresh = function() {
        return Oe().useCacheRefresh();
      }, F.use = function(g) {
        return Oe().use(g);
      }, F.useActionState = function(g, M, P) {
        return Oe().useActionState(
          g,
          M,
          P
        );
      }, F.useCallback = function(g, M) {
        return Oe().useCallback(g, M);
      }, F.useContext = function(g) {
        var M = Oe();
        return g.$$typeof === ne && console.error(
          "Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"
        ), M.useContext(g);
      }, F.useDebugValue = function(g, M) {
        return Oe().useDebugValue(g, M);
      }, F.useDeferredValue = function(g, M) {
        return Oe().useDeferredValue(g, M);
      }, F.useEffect = function(g, M) {
        return g == null && console.warn(
          "React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), Oe().useEffect(g, M);
      }, F.useEffectEvent = function(g) {
        return Oe().useEffectEvent(g);
      }, F.useId = function() {
        return Oe().useId();
      }, F.useImperativeHandle = function(g, M, P) {
        return Oe().useImperativeHandle(g, M, P);
      }, F.useInsertionEffect = function(g, M) {
        return g == null && console.warn(
          "React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), Oe().useInsertionEffect(g, M);
      }, F.useLayoutEffect = function(g, M) {
        return g == null && console.warn(
          "React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), Oe().useLayoutEffect(g, M);
      }, F.useMemo = function(g, M) {
        return Oe().useMemo(g, M);
      }, F.useOptimistic = function(g, M) {
        return Oe().useOptimistic(g, M);
      }, F.useReducer = function(g, M, P) {
        return Oe().useReducer(g, M, P);
      }, F.useRef = function(g) {
        return Oe().useRef(g);
      }, F.useState = function(g) {
        return Oe().useState(g);
      }, F.useSyncExternalStore = function(g, M, P) {
        return Oe().useSyncExternalStore(
          g,
          M,
          P
        );
      }, F.useTransition = function() {
        return Oe().useTransition();
      }, F.version = "19.2.4", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    })();
  })(C0, C0.exports)), C0.exports;
}
var YE;
function Um() {
  if (YE) return Lv.exports;
  YE = 1;
  var J = {};
  return J.NODE_ENV === "production" ? Lv.exports = RA() : Lv.exports = MA(), Lv.exports;
}
var qE;
function CA() {
  if (qE) return D0;
  qE = 1;
  var J = {};
  return J.NODE_ENV !== "production" && (function() {
    function F(A) {
      if (A == null) return null;
      if (typeof A == "function")
        return A.$$typeof === bt ? null : A.displayName || A.name || null;
      if (typeof A == "string") return A;
      switch (A) {
        case Pe:
          return "Fragment";
        case jt:
          return "Profiler";
        case ht:
          return "StrictMode";
        case Ge:
          return "Suspense";
        case _t:
          return "SuspenseList";
        case re:
          return "Activity";
      }
      if (typeof A == "object")
        switch (typeof A.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), A.$$typeof) {
          case al:
            return "Portal";
          case nl:
            return A.displayName || "Context";
          case It:
            return (A._context.displayName || "Context") + ".Consumer";
          case Bt:
            var $ = A.render;
            return A = A.displayName, A || (A = $.displayName || $.name || "", A = A !== "" ? "ForwardRef(" + A + ")" : "ForwardRef"), A;
          case tt:
            return $ = A.displayName || null, $ !== null ? $ : F(A.type) || "Memo";
          case Qt:
            $ = A._payload, A = A._init;
            try {
              return F(A($));
            } catch {
            }
        }
      return null;
    }
    function ve(A) {
      return "" + A;
    }
    function U(A) {
      try {
        ve(A);
        var $ = !1;
      } catch {
        $ = !0;
      }
      if ($) {
        $ = console;
        var te = $.error, ne = typeof Symbol == "function" && Symbol.toStringTag && A[Symbol.toStringTag] || A.constructor.name || "Object";
        return te.call(
          $,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          ne
        ), ve(A);
      }
    }
    function Ce(A) {
      if (A === Pe) return "<>";
      if (typeof A == "object" && A !== null && A.$$typeof === Qt)
        return "<...>";
      try {
        var $ = F(A);
        return $ ? "<" + $ + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function _e() {
      var A = Oe.A;
      return A === null ? null : A.getOwner();
    }
    function Ye() {
      return Error("react-stack-top-frame");
    }
    function gt(A) {
      if (xe.call(A, "key")) {
        var $ = Object.getOwnPropertyDescriptor(A, "key").get;
        if ($ && $.isReactWarning) return !1;
      }
      return A.key !== void 0;
    }
    function L(A, $) {
      function te() {
        B || (B = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          $
        ));
      }
      te.isReactWarning = !0, Object.defineProperty(A, "key", {
        get: te,
        configurable: !0
      });
    }
    function Q() {
      var A = F(this.type);
      return ee[A] || (ee[A] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), A = this.props.ref, A !== void 0 ? A : null;
    }
    function we(A, $, te, ne, De, lt) {
      var We = te.ref;
      return A = {
        $$typeof: Le,
        type: A,
        key: $,
        props: te,
        _owner: ne
      }, (We !== void 0 ? We : null) !== null ? Object.defineProperty(A, "ref", {
        enumerable: !1,
        get: Q
      }) : Object.defineProperty(A, "ref", { enumerable: !1, value: null }), A._store = {}, Object.defineProperty(A._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(A, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(A, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: De
      }), Object.defineProperty(A, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: lt
      }), Object.freeze && (Object.freeze(A.props), Object.freeze(A)), A;
    }
    function ye(A, $, te, ne, De, lt) {
      var We = $.children;
      if (We !== void 0)
        if (ne)
          if (Yt(We)) {
            for (ne = 0; ne < We.length; ne++)
              W(We[ne]);
            Object.freeze && Object.freeze(We);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else W(We);
      if (xe.call($, "key")) {
        We = F(A);
        var Et = Object.keys($).filter(function(gn) {
          return gn !== "key";
        });
        ne = 0 < Et.length ? "{key: someKey, " + Et.join(": ..., ") + ": ...}" : "{key: someKey}", O[We + ne] || (Et = 0 < Et.length ? "{" + Et.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          ne,
          We,
          Et,
          We
        ), O[We + ne] = !0);
      }
      if (We = null, te !== void 0 && (U(te), We = "" + te), gt($) && (U($.key), We = "" + $.key), "key" in $) {
        te = {};
        for (var ta in $)
          ta !== "key" && (te[ta] = $[ta]);
      } else te = $;
      return We && L(
        te,
        typeof A == "function" ? A.displayName || A.name || "Unknown" : A
      ), we(
        A,
        We,
        te,
        _e(),
        De,
        lt
      );
    }
    function W(A) {
      N(A) ? A._store && (A._store.validated = 1) : typeof A == "object" && A !== null && A.$$typeof === Qt && (A._payload.status === "fulfilled" ? N(A._payload.value) && A._payload.value._store && (A._payload.value._store.validated = 1) : A._store && (A._store.validated = 1));
    }
    function N(A) {
      return typeof A == "object" && A !== null && A.$$typeof === Le;
    }
    var oe = Um(), Le = /* @__PURE__ */ Symbol.for("react.transitional.element"), al = /* @__PURE__ */ Symbol.for("react.portal"), Pe = /* @__PURE__ */ Symbol.for("react.fragment"), ht = /* @__PURE__ */ Symbol.for("react.strict_mode"), jt = /* @__PURE__ */ Symbol.for("react.profiler"), It = /* @__PURE__ */ Symbol.for("react.consumer"), nl = /* @__PURE__ */ Symbol.for("react.context"), Bt = /* @__PURE__ */ Symbol.for("react.forward_ref"), Ge = /* @__PURE__ */ Symbol.for("react.suspense"), _t = /* @__PURE__ */ Symbol.for("react.suspense_list"), tt = /* @__PURE__ */ Symbol.for("react.memo"), Qt = /* @__PURE__ */ Symbol.for("react.lazy"), re = /* @__PURE__ */ Symbol.for("react.activity"), bt = /* @__PURE__ */ Symbol.for("react.client.reference"), Oe = oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, xe = Object.prototype.hasOwnProperty, Yt = Array.isArray, X = console.createTask ? console.createTask : function() {
      return null;
    };
    oe = {
      react_stack_bottom_frame: function(A) {
        return A();
      }
    };
    var B, ee = {}, ce = oe.react_stack_bottom_frame.bind(
      oe,
      Ye
    )(), be = X(Ce(Ye)), O = {};
    D0.Fragment = Pe, D0.jsx = function(A, $, te) {
      var ne = 1e4 > Oe.recentlyCreatedOwnerStacks++;
      return ye(
        A,
        $,
        te,
        !1,
        ne ? Error("react-stack-top-frame") : ce,
        ne ? X(Ce(A)) : be
      );
    }, D0.jsxs = function(A, $, te) {
      var ne = 1e4 > Oe.recentlyCreatedOwnerStacks++;
      return ye(
        A,
        $,
        te,
        !0,
        ne ? Error("react-stack-top-frame") : ce,
        ne ? X(Ce(A)) : be
      );
    };
  })(), D0;
}
var wE;
function UA() {
  if (wE) return Xv.exports;
  wE = 1;
  var J = {};
  return J.NODE_ENV === "production" ? Xv.exports = DA() : Xv.exports = CA(), Xv.exports;
}
var le = UA(), es = Um();
const ES = /* @__PURE__ */ PE(es);
var Qv = { exports: {} }, R0 = {}, Vv = { exports: {} }, SS = {};
var GE;
function xA() {
  return GE || (GE = 1, (function(J) {
    function F(X, B) {
      var ee = X.length;
      X.push(B);
      e: for (; 0 < ee; ) {
        var ce = ee - 1 >>> 1, be = X[ce];
        if (0 < Ce(be, B))
          X[ce] = B, X[ee] = be, ee = ce;
        else break e;
      }
    }
    function ve(X) {
      return X.length === 0 ? null : X[0];
    }
    function U(X) {
      if (X.length === 0) return null;
      var B = X[0], ee = X.pop();
      if (ee !== B) {
        X[0] = ee;
        e: for (var ce = 0, be = X.length, O = be >>> 1; ce < O; ) {
          var A = 2 * (ce + 1) - 1, $ = X[A], te = A + 1, ne = X[te];
          if (0 > Ce($, ee))
            te < be && 0 > Ce(ne, $) ? (X[ce] = ne, X[te] = ee, ce = te) : (X[ce] = $, X[A] = ee, ce = A);
          else if (te < be && 0 > Ce(ne, ee))
            X[ce] = ne, X[te] = ee, ce = te;
          else break e;
        }
      }
      return B;
    }
    function Ce(X, B) {
      var ee = X.sortIndex - B.sortIndex;
      return ee !== 0 ? ee : X.id - B.id;
    }
    if (J.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var _e = performance;
      J.unstable_now = function() {
        return _e.now();
      };
    } else {
      var Ye = Date, gt = Ye.now();
      J.unstable_now = function() {
        return Ye.now() - gt;
      };
    }
    var L = [], Q = [], we = 1, ye = null, W = 3, N = !1, oe = !1, Le = !1, al = !1, Pe = typeof setTimeout == "function" ? setTimeout : null, ht = typeof clearTimeout == "function" ? clearTimeout : null, jt = typeof setImmediate < "u" ? setImmediate : null;
    function It(X) {
      for (var B = ve(Q); B !== null; ) {
        if (B.callback === null) U(Q);
        else if (B.startTime <= X)
          U(Q), B.sortIndex = B.expirationTime, F(L, B);
        else break;
        B = ve(Q);
      }
    }
    function nl(X) {
      if (Le = !1, It(X), !oe)
        if (ve(L) !== null)
          oe = !0, Bt || (Bt = !0, bt());
        else {
          var B = ve(Q);
          B !== null && Yt(nl, B.startTime - X);
        }
    }
    var Bt = !1, Ge = -1, _t = 5, tt = -1;
    function Qt() {
      return al ? !0 : !(J.unstable_now() - tt < _t);
    }
    function re() {
      if (al = !1, Bt) {
        var X = J.unstable_now();
        tt = X;
        var B = !0;
        try {
          e: {
            oe = !1, Le && (Le = !1, ht(Ge), Ge = -1), N = !0;
            var ee = W;
            try {
              t: {
                for (It(X), ye = ve(L); ye !== null && !(ye.expirationTime > X && Qt()); ) {
                  var ce = ye.callback;
                  if (typeof ce == "function") {
                    ye.callback = null, W = ye.priorityLevel;
                    var be = ce(
                      ye.expirationTime <= X
                    );
                    if (X = J.unstable_now(), typeof be == "function") {
                      ye.callback = be, It(X), B = !0;
                      break t;
                    }
                    ye === ve(L) && U(L), It(X);
                  } else U(L);
                  ye = ve(L);
                }
                if (ye !== null) B = !0;
                else {
                  var O = ve(Q);
                  O !== null && Yt(
                    nl,
                    O.startTime - X
                  ), B = !1;
                }
              }
              break e;
            } finally {
              ye = null, W = ee, N = !1;
            }
            B = void 0;
          }
        } finally {
          B ? bt() : Bt = !1;
        }
      }
    }
    var bt;
    if (typeof jt == "function")
      bt = function() {
        jt(re);
      };
    else if (typeof MessageChannel < "u") {
      var Oe = new MessageChannel(), xe = Oe.port2;
      Oe.port1.onmessage = re, bt = function() {
        xe.postMessage(null);
      };
    } else
      bt = function() {
        Pe(re, 0);
      };
    function Yt(X, B) {
      Ge = Pe(function() {
        X(J.unstable_now());
      }, B);
    }
    J.unstable_IdlePriority = 5, J.unstable_ImmediatePriority = 1, J.unstable_LowPriority = 4, J.unstable_NormalPriority = 3, J.unstable_Profiling = null, J.unstable_UserBlockingPriority = 2, J.unstable_cancelCallback = function(X) {
      X.callback = null;
    }, J.unstable_forceFrameRate = function(X) {
      0 > X || 125 < X ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : _t = 0 < X ? Math.floor(1e3 / X) : 5;
    }, J.unstable_getCurrentPriorityLevel = function() {
      return W;
    }, J.unstable_next = function(X) {
      switch (W) {
        case 1:
        case 2:
        case 3:
          var B = 3;
          break;
        default:
          B = W;
      }
      var ee = W;
      W = B;
      try {
        return X();
      } finally {
        W = ee;
      }
    }, J.unstable_requestPaint = function() {
      al = !0;
    }, J.unstable_runWithPriority = function(X, B) {
      switch (X) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          X = 3;
      }
      var ee = W;
      W = X;
      try {
        return B();
      } finally {
        W = ee;
      }
    }, J.unstable_scheduleCallback = function(X, B, ee) {
      var ce = J.unstable_now();
      switch (typeof ee == "object" && ee !== null ? (ee = ee.delay, ee = typeof ee == "number" && 0 < ee ? ce + ee : ce) : ee = ce, X) {
        case 1:
          var be = -1;
          break;
        case 2:
          be = 250;
          break;
        case 5:
          be = 1073741823;
          break;
        case 4:
          be = 1e4;
          break;
        default:
          be = 5e3;
      }
      return be = ee + be, X = {
        id: we++,
        callback: B,
        priorityLevel: X,
        startTime: ee,
        expirationTime: be,
        sortIndex: -1
      }, ee > ce ? (X.sortIndex = ee, F(Q, X), ve(L) === null && X === ve(Q) && (Le ? (ht(Ge), Ge = -1) : Le = !0, Yt(nl, ee - ce))) : (X.sortIndex = be, F(L, X), oe || N || (oe = !0, Bt || (Bt = !0, bt()))), X;
    }, J.unstable_shouldYield = Qt, J.unstable_wrapCallback = function(X) {
      var B = W;
      return function() {
        var ee = W;
        W = B;
        try {
          return X.apply(this, arguments);
        } finally {
          W = ee;
        }
      };
    };
  })(SS)), SS;
}
var bS = {}, XE;
function HA() {
  return XE || (XE = 1, (function(J) {
    var F = {};
    F.NODE_ENV !== "production" && (function() {
      function ve() {
        if (Bt = !1, Qt) {
          var B = J.unstable_now();
          Oe = B;
          var ee = !0;
          try {
            e: {
              It = !1, nl && (nl = !1, _t(re), re = -1), jt = !0;
              var ce = ht;
              try {
                t: {
                  for (gt(B), Pe = Ce(oe); Pe !== null && !(Pe.expirationTime > B && Q()); ) {
                    var be = Pe.callback;
                    if (typeof be == "function") {
                      Pe.callback = null, ht = Pe.priorityLevel;
                      var O = be(
                        Pe.expirationTime <= B
                      );
                      if (B = J.unstable_now(), typeof O == "function") {
                        Pe.callback = O, gt(B), ee = !0;
                        break t;
                      }
                      Pe === Ce(oe) && _e(oe), gt(B);
                    } else _e(oe);
                    Pe = Ce(oe);
                  }
                  if (Pe !== null) ee = !0;
                  else {
                    var A = Ce(Le);
                    A !== null && we(
                      L,
                      A.startTime - B
                    ), ee = !1;
                  }
                }
                break e;
              } finally {
                Pe = null, ht = ce, jt = !1;
              }
              ee = void 0;
            }
          } finally {
            ee ? xe() : Qt = !1;
          }
        }
      }
      function U(B, ee) {
        var ce = B.length;
        B.push(ee);
        e: for (; 0 < ce; ) {
          var be = ce - 1 >>> 1, O = B[be];
          if (0 < Ye(O, ee))
            B[be] = ee, B[ce] = O, ce = be;
          else break e;
        }
      }
      function Ce(B) {
        return B.length === 0 ? null : B[0];
      }
      function _e(B) {
        if (B.length === 0) return null;
        var ee = B[0], ce = B.pop();
        if (ce !== ee) {
          B[0] = ce;
          e: for (var be = 0, O = B.length, A = O >>> 1; be < A; ) {
            var $ = 2 * (be + 1) - 1, te = B[$], ne = $ + 1, De = B[ne];
            if (0 > Ye(te, ce))
              ne < O && 0 > Ye(De, te) ? (B[be] = De, B[ne] = ce, be = ne) : (B[be] = te, B[$] = ce, be = $);
            else if (ne < O && 0 > Ye(De, ce))
              B[be] = De, B[ne] = ce, be = ne;
            else break e;
          }
        }
        return ee;
      }
      function Ye(B, ee) {
        var ce = B.sortIndex - ee.sortIndex;
        return ce !== 0 ? ce : B.id - ee.id;
      }
      function gt(B) {
        for (var ee = Ce(Le); ee !== null; ) {
          if (ee.callback === null) _e(Le);
          else if (ee.startTime <= B)
            _e(Le), ee.sortIndex = ee.expirationTime, U(oe, ee);
          else break;
          ee = Ce(Le);
        }
      }
      function L(B) {
        if (nl = !1, gt(B), !It)
          if (Ce(oe) !== null)
            It = !0, Qt || (Qt = !0, xe());
          else {
            var ee = Ce(Le);
            ee !== null && we(
              L,
              ee.startTime - B
            );
          }
      }
      function Q() {
        return Bt ? !0 : !(J.unstable_now() - Oe < bt);
      }
      function we(B, ee) {
        re = Ge(function() {
          B(J.unstable_now());
        }, ee);
      }
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error()), J.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
        var ye = performance;
        J.unstable_now = function() {
          return ye.now();
        };
      } else {
        var W = Date, N = W.now();
        J.unstable_now = function() {
          return W.now() - N;
        };
      }
      var oe = [], Le = [], al = 1, Pe = null, ht = 3, jt = !1, It = !1, nl = !1, Bt = !1, Ge = typeof setTimeout == "function" ? setTimeout : null, _t = typeof clearTimeout == "function" ? clearTimeout : null, tt = typeof setImmediate < "u" ? setImmediate : null, Qt = !1, re = -1, bt = 5, Oe = -1;
      if (typeof tt == "function")
        var xe = function() {
          tt(ve);
        };
      else if (typeof MessageChannel < "u") {
        var Yt = new MessageChannel(), X = Yt.port2;
        Yt.port1.onmessage = ve, xe = function() {
          X.postMessage(null);
        };
      } else
        xe = function() {
          Ge(ve, 0);
        };
      J.unstable_IdlePriority = 5, J.unstable_ImmediatePriority = 1, J.unstable_LowPriority = 4, J.unstable_NormalPriority = 3, J.unstable_Profiling = null, J.unstable_UserBlockingPriority = 2, J.unstable_cancelCallback = function(B) {
        B.callback = null;
      }, J.unstable_forceFrameRate = function(B) {
        0 > B || 125 < B ? console.error(
          "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
        ) : bt = 0 < B ? Math.floor(1e3 / B) : 5;
      }, J.unstable_getCurrentPriorityLevel = function() {
        return ht;
      }, J.unstable_next = function(B) {
        switch (ht) {
          case 1:
          case 2:
          case 3:
            var ee = 3;
            break;
          default:
            ee = ht;
        }
        var ce = ht;
        ht = ee;
        try {
          return B();
        } finally {
          ht = ce;
        }
      }, J.unstable_requestPaint = function() {
        Bt = !0;
      }, J.unstable_runWithPriority = function(B, ee) {
        switch (B) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            B = 3;
        }
        var ce = ht;
        ht = B;
        try {
          return ee();
        } finally {
          ht = ce;
        }
      }, J.unstable_scheduleCallback = function(B, ee, ce) {
        var be = J.unstable_now();
        switch (typeof ce == "object" && ce !== null ? (ce = ce.delay, ce = typeof ce == "number" && 0 < ce ? be + ce : be) : ce = be, B) {
          case 1:
            var O = -1;
            break;
          case 2:
            O = 250;
            break;
          case 5:
            O = 1073741823;
            break;
          case 4:
            O = 1e4;
            break;
          default:
            O = 5e3;
        }
        return O = ce + O, B = {
          id: al++,
          callback: ee,
          priorityLevel: B,
          startTime: ce,
          expirationTime: O,
          sortIndex: -1
        }, ce > be ? (B.sortIndex = ce, U(Le, B), Ce(oe) === null && B === Ce(Le) && (nl ? (_t(re), re = -1) : nl = !0, we(L, ce - be))) : (B.sortIndex = O, U(oe, B), It || jt || (It = !0, Qt || (Qt = !0, xe()))), B;
      }, J.unstable_shouldYield = Q, J.unstable_wrapCallback = function(B) {
        var ee = ht;
        return function() {
          var ce = ht;
          ht = ee;
          try {
            return B.apply(this, arguments);
          } finally {
            ht = ce;
          }
        };
      }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    })();
  })(bS)), bS;
}
var LE;
function eT() {
  if (LE) return Vv.exports;
  LE = 1;
  var J = {};
  return J.NODE_ENV === "production" ? Vv.exports = xA() : Vv.exports = HA(), Vv.exports;
}
var Zv = { exports: {} }, $a = {};
var QE;
function NA() {
  if (QE) return $a;
  QE = 1;
  var J = Um();
  function F(L) {
    var Q = "https://react.dev/errors/" + L;
    if (1 < arguments.length) {
      Q += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var we = 2; we < arguments.length; we++)
        Q += "&args[]=" + encodeURIComponent(arguments[we]);
    }
    return "Minified React error #" + L + "; visit " + Q + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function ve() {
  }
  var U = {
    d: {
      f: ve,
      r: function() {
        throw Error(F(522));
      },
      D: ve,
      C: ve,
      L: ve,
      m: ve,
      X: ve,
      S: ve,
      M: ve
    },
    p: 0,
    findDOMNode: null
  }, Ce = /* @__PURE__ */ Symbol.for("react.portal");
  function _e(L, Q, we) {
    var ye = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: Ce,
      key: ye == null ? null : "" + ye,
      children: L,
      containerInfo: Q,
      implementation: we
    };
  }
  var Ye = J.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function gt(L, Q) {
    if (L === "font") return "";
    if (typeof Q == "string")
      return Q === "use-credentials" ? Q : "";
  }
  return $a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = U, $a.createPortal = function(L, Q) {
    var we = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Q || Q.nodeType !== 1 && Q.nodeType !== 9 && Q.nodeType !== 11)
      throw Error(F(299));
    return _e(L, Q, null, we);
  }, $a.flushSync = function(L) {
    var Q = Ye.T, we = U.p;
    try {
      if (Ye.T = null, U.p = 2, L) return L();
    } finally {
      Ye.T = Q, U.p = we, U.d.f();
    }
  }, $a.preconnect = function(L, Q) {
    typeof L == "string" && (Q ? (Q = Q.crossOrigin, Q = typeof Q == "string" ? Q === "use-credentials" ? Q : "" : void 0) : Q = null, U.d.C(L, Q));
  }, $a.prefetchDNS = function(L) {
    typeof L == "string" && U.d.D(L);
  }, $a.preinit = function(L, Q) {
    if (typeof L == "string" && Q && typeof Q.as == "string") {
      var we = Q.as, ye = gt(we, Q.crossOrigin), W = typeof Q.integrity == "string" ? Q.integrity : void 0, N = typeof Q.fetchPriority == "string" ? Q.fetchPriority : void 0;
      we === "style" ? U.d.S(
        L,
        typeof Q.precedence == "string" ? Q.precedence : void 0,
        {
          crossOrigin: ye,
          integrity: W,
          fetchPriority: N
        }
      ) : we === "script" && U.d.X(L, {
        crossOrigin: ye,
        integrity: W,
        fetchPriority: N,
        nonce: typeof Q.nonce == "string" ? Q.nonce : void 0
      });
    }
  }, $a.preinitModule = function(L, Q) {
    if (typeof L == "string")
      if (typeof Q == "object" && Q !== null) {
        if (Q.as == null || Q.as === "script") {
          var we = gt(
            Q.as,
            Q.crossOrigin
          );
          U.d.M(L, {
            crossOrigin: we,
            integrity: typeof Q.integrity == "string" ? Q.integrity : void 0,
            nonce: typeof Q.nonce == "string" ? Q.nonce : void 0
          });
        }
      } else Q == null && U.d.M(L);
  }, $a.preload = function(L, Q) {
    if (typeof L == "string" && typeof Q == "object" && Q !== null && typeof Q.as == "string") {
      var we = Q.as, ye = gt(we, Q.crossOrigin);
      U.d.L(L, we, {
        crossOrigin: ye,
        integrity: typeof Q.integrity == "string" ? Q.integrity : void 0,
        nonce: typeof Q.nonce == "string" ? Q.nonce : void 0,
        type: typeof Q.type == "string" ? Q.type : void 0,
        fetchPriority: typeof Q.fetchPriority == "string" ? Q.fetchPriority : void 0,
        referrerPolicy: typeof Q.referrerPolicy == "string" ? Q.referrerPolicy : void 0,
        imageSrcSet: typeof Q.imageSrcSet == "string" ? Q.imageSrcSet : void 0,
        imageSizes: typeof Q.imageSizes == "string" ? Q.imageSizes : void 0,
        media: typeof Q.media == "string" ? Q.media : void 0
      });
    }
  }, $a.preloadModule = function(L, Q) {
    if (typeof L == "string")
      if (Q) {
        var we = gt(Q.as, Q.crossOrigin);
        U.d.m(L, {
          as: typeof Q.as == "string" && Q.as !== "script" ? Q.as : void 0,
          crossOrigin: we,
          integrity: typeof Q.integrity == "string" ? Q.integrity : void 0
        });
      } else U.d.m(L);
  }, $a.requestFormReset = function(L) {
    U.d.r(L);
  }, $a.unstable_batchedUpdates = function(L, Q) {
    return L(Q);
  }, $a.useFormState = function(L, Q, we) {
    return Ye.H.useFormState(L, Q, we);
  }, $a.useFormStatus = function() {
    return Ye.H.useHostTransitionStatus();
  }, $a.version = "19.2.4", $a;
}
var ka = {}, VE;
function jA() {
  if (VE) return ka;
  VE = 1;
  var J = {};
  return J.NODE_ENV !== "production" && (function() {
    function F() {
    }
    function ve(W) {
      return "" + W;
    }
    function U(W, N, oe) {
      var Le = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      try {
        ve(Le);
        var al = !1;
      } catch {
        al = !0;
      }
      return al && (console.error(
        "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
        typeof Symbol == "function" && Symbol.toStringTag && Le[Symbol.toStringTag] || Le.constructor.name || "Object"
      ), ve(Le)), {
        $$typeof: we,
        key: Le == null ? null : "" + Le,
        children: W,
        containerInfo: N,
        implementation: oe
      };
    }
    function Ce(W, N) {
      if (W === "font") return "";
      if (typeof N == "string")
        return N === "use-credentials" ? N : "";
    }
    function _e(W) {
      return W === null ? "`null`" : W === void 0 ? "`undefined`" : W === "" ? "an empty string" : 'something with type "' + typeof W + '"';
    }
    function Ye(W) {
      return W === null ? "`null`" : W === void 0 ? "`undefined`" : W === "" ? "an empty string" : typeof W == "string" ? JSON.stringify(W) : typeof W == "number" ? "`" + W + "`" : 'something with type "' + typeof W + '"';
    }
    function gt() {
      var W = ye.H;
      return W === null && console.error(
        `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
      ), W;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var L = Um(), Q = {
      d: {
        f: F,
        r: function() {
          throw Error(
            "Invalid form element. requestFormReset must be passed a form that was rendered by React."
          );
        },
        D: F,
        C: F,
        L: F,
        m: F,
        X: F,
        S: F,
        M: F
      },
      p: 0,
      findDOMNode: null
    }, we = /* @__PURE__ */ Symbol.for("react.portal"), ye = L.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    typeof Map == "function" && Map.prototype != null && typeof Map.prototype.forEach == "function" && typeof Set == "function" && Set.prototype != null && typeof Set.prototype.clear == "function" && typeof Set.prototype.forEach == "function" || console.error(
      "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
    ), ka.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Q, ka.createPortal = function(W, N) {
      var oe = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!N || N.nodeType !== 1 && N.nodeType !== 9 && N.nodeType !== 11)
        throw Error("Target container is not a DOM element.");
      return U(W, N, null, oe);
    }, ka.flushSync = function(W) {
      var N = ye.T, oe = Q.p;
      try {
        if (ye.T = null, Q.p = 2, W)
          return W();
      } finally {
        ye.T = N, Q.p = oe, Q.d.f() && console.error(
          "flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."
        );
      }
    }, ka.preconnect = function(W, N) {
      typeof W == "string" && W ? N != null && typeof N != "object" ? console.error(
        "ReactDOM.preconnect(): Expected the `options` argument (second) to be an object but encountered %s instead. The only supported option at this time is `crossOrigin` which accepts a string.",
        Ye(N)
      ) : N != null && typeof N.crossOrigin != "string" && console.error(
        "ReactDOM.preconnect(): Expected the `crossOrigin` option (second argument) to be a string but encountered %s instead. Try removing this option or passing a string value instead.",
        _e(N.crossOrigin)
      ) : console.error(
        "ReactDOM.preconnect(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
        _e(W)
      ), typeof W == "string" && (N ? (N = N.crossOrigin, N = typeof N == "string" ? N === "use-credentials" ? N : "" : void 0) : N = null, Q.d.C(W, N));
    }, ka.prefetchDNS = function(W) {
      if (typeof W != "string" || !W)
        console.error(
          "ReactDOM.prefetchDNS(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
          _e(W)
        );
      else if (1 < arguments.length) {
        var N = arguments[1];
        typeof N == "object" && N.hasOwnProperty("crossOrigin") ? console.error(
          "ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. It looks like the you are attempting to set a crossOrigin property for this DNS lookup hint. Browsers do not perform DNS queries using CORS and setting this attribute on the resource hint has no effect. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",
          Ye(N)
        ) : console.error(
          "ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",
          Ye(N)
        );
      }
      typeof W == "string" && Q.d.D(W);
    }, ka.preinit = function(W, N) {
      if (typeof W == "string" && W ? N == null || typeof N != "object" ? console.error(
        "ReactDOM.preinit(): Expected the `options` argument (second) to be an object with an `as` property describing the type of resource to be preinitialized but encountered %s instead.",
        Ye(N)
      ) : N.as !== "style" && N.as !== "script" && console.error(
        'ReactDOM.preinit(): Expected the `as` property in the `options` argument (second) to contain a valid value describing the type of resource to be preinitialized but encountered %s instead. Valid values for `as` are "style" and "script".',
        Ye(N.as)
      ) : console.error(
        "ReactDOM.preinit(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
        _e(W)
      ), typeof W == "string" && N && typeof N.as == "string") {
        var oe = N.as, Le = Ce(oe, N.crossOrigin), al = typeof N.integrity == "string" ? N.integrity : void 0, Pe = typeof N.fetchPriority == "string" ? N.fetchPriority : void 0;
        oe === "style" ? Q.d.S(
          W,
          typeof N.precedence == "string" ? N.precedence : void 0,
          {
            crossOrigin: Le,
            integrity: al,
            fetchPriority: Pe
          }
        ) : oe === "script" && Q.d.X(W, {
          crossOrigin: Le,
          integrity: al,
          fetchPriority: Pe,
          nonce: typeof N.nonce == "string" ? N.nonce : void 0
        });
      }
    }, ka.preinitModule = function(W, N) {
      var oe = "";
      typeof W == "string" && W || (oe += " The `href` argument encountered was " + _e(W) + "."), N !== void 0 && typeof N != "object" ? oe += " The `options` argument encountered was " + _e(N) + "." : N && "as" in N && N.as !== "script" && (oe += " The `as` option encountered was " + Ye(N.as) + "."), oe ? console.error(
        "ReactDOM.preinitModule(): Expected up to two arguments, a non-empty `href` string and, optionally, an `options` object with a valid `as` property.%s",
        oe
      ) : (oe = N && typeof N.as == "string" ? N.as : "script", oe) === "script" || (oe = Ye(oe), console.error(
        'ReactDOM.preinitModule(): Currently the only supported "as" type for this function is "script" but received "%s" instead. This warning was generated for `href` "%s". In the future other module types will be supported, aligning with the import-attributes proposal. Learn more here: (https://github.com/tc39/proposal-import-attributes)',
        oe,
        W
      )), typeof W == "string" && (typeof N == "object" && N !== null ? (N.as == null || N.as === "script") && (oe = Ce(
        N.as,
        N.crossOrigin
      ), Q.d.M(W, {
        crossOrigin: oe,
        integrity: typeof N.integrity == "string" ? N.integrity : void 0,
        nonce: typeof N.nonce == "string" ? N.nonce : void 0
      })) : N == null && Q.d.M(W));
    }, ka.preload = function(W, N) {
      var oe = "";
      if (typeof W == "string" && W || (oe += " The `href` argument encountered was " + _e(W) + "."), N == null || typeof N != "object" ? oe += " The `options` argument encountered was " + _e(N) + "." : typeof N.as == "string" && N.as || (oe += " The `as` option encountered was " + _e(N.as) + "."), oe && console.error(
        'ReactDOM.preload(): Expected two arguments, a non-empty `href` string and an `options` object with an `as` property valid for a `<link rel="preload" as="..." />` tag.%s',
        oe
      ), typeof W == "string" && typeof N == "object" && N !== null && typeof N.as == "string") {
        oe = N.as;
        var Le = Ce(
          oe,
          N.crossOrigin
        );
        Q.d.L(W, oe, {
          crossOrigin: Le,
          integrity: typeof N.integrity == "string" ? N.integrity : void 0,
          nonce: typeof N.nonce == "string" ? N.nonce : void 0,
          type: typeof N.type == "string" ? N.type : void 0,
          fetchPriority: typeof N.fetchPriority == "string" ? N.fetchPriority : void 0,
          referrerPolicy: typeof N.referrerPolicy == "string" ? N.referrerPolicy : void 0,
          imageSrcSet: typeof N.imageSrcSet == "string" ? N.imageSrcSet : void 0,
          imageSizes: typeof N.imageSizes == "string" ? N.imageSizes : void 0,
          media: typeof N.media == "string" ? N.media : void 0
        });
      }
    }, ka.preloadModule = function(W, N) {
      var oe = "";
      typeof W == "string" && W || (oe += " The `href` argument encountered was " + _e(W) + "."), N !== void 0 && typeof N != "object" ? oe += " The `options` argument encountered was " + _e(N) + "." : N && "as" in N && typeof N.as != "string" && (oe += " The `as` option encountered was " + _e(N.as) + "."), oe && console.error(
        'ReactDOM.preloadModule(): Expected two arguments, a non-empty `href` string and, optionally, an `options` object with an `as` property valid for a `<link rel="modulepreload" as="..." />` tag.%s',
        oe
      ), typeof W == "string" && (N ? (oe = Ce(
        N.as,
        N.crossOrigin
      ), Q.d.m(W, {
        as: typeof N.as == "string" && N.as !== "script" ? N.as : void 0,
        crossOrigin: oe,
        integrity: typeof N.integrity == "string" ? N.integrity : void 0
      })) : Q.d.m(W));
    }, ka.requestFormReset = function(W) {
      Q.d.r(W);
    }, ka.unstable_batchedUpdates = function(W, N) {
      return W(N);
    }, ka.useFormState = function(W, N, oe) {
      return gt().useFormState(W, N, oe);
    }, ka.useFormStatus = function() {
      return gt().useHostTransitionStatus();
    }, ka.version = "19.2.4", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })(), ka;
}
var ZE;
function tT() {
  if (ZE) return Zv.exports;
  ZE = 1;
  var J = {};
  function F() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (J.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(F);
      } catch (ve) {
        console.error(ve);
      }
    }
  }
  return J.NODE_ENV === "production" ? (F(), Zv.exports = NA()) : Zv.exports = jA(), Zv.exports;
}
var JE;
function BA() {
  if (JE) return R0;
  JE = 1;
  var J = eT(), F = Um(), ve = tT();
  function U(l) {
    var n = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      n += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var u = 2; u < arguments.length; u++)
        n += "&args[]=" + encodeURIComponent(arguments[u]);
    }
    return "Minified React error #" + l + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function Ce(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function _e(l) {
    var n = l, u = l;
    if (l.alternate) for (; n.return; ) n = n.return;
    else {
      l = n;
      do
        n = l, (n.flags & 4098) !== 0 && (u = n.return), l = n.return;
      while (l);
    }
    return n.tag === 3 ? u : null;
  }
  function Ye(l) {
    if (l.tag === 13) {
      var n = l.memoizedState;
      if (n === null && (l = l.alternate, l !== null && (n = l.memoizedState)), n !== null) return n.dehydrated;
    }
    return null;
  }
  function gt(l) {
    if (l.tag === 31) {
      var n = l.memoizedState;
      if (n === null && (l = l.alternate, l !== null && (n = l.memoizedState)), n !== null) return n.dehydrated;
    }
    return null;
  }
  function L(l) {
    if (_e(l) !== l)
      throw Error(U(188));
  }
  function Q(l) {
    var n = l.alternate;
    if (!n) {
      if (n = _e(l), n === null) throw Error(U(188));
      return n !== l ? null : l;
    }
    for (var u = l, c = n; ; ) {
      var s = u.return;
      if (s === null) break;
      var r = s.alternate;
      if (r === null) {
        if (c = s.return, c !== null) {
          u = c;
          continue;
        }
        break;
      }
      if (s.child === r.child) {
        for (r = s.child; r; ) {
          if (r === u) return L(s), l;
          if (r === c) return L(s), n;
          r = r.sibling;
        }
        throw Error(U(188));
      }
      if (u.return !== c.return) u = s, c = r;
      else {
        for (var m = !1, v = s.child; v; ) {
          if (v === u) {
            m = !0, u = s, c = r;
            break;
          }
          if (v === c) {
            m = !0, c = s, u = r;
            break;
          }
          v = v.sibling;
        }
        if (!m) {
          for (v = r.child; v; ) {
            if (v === u) {
              m = !0, u = r, c = s;
              break;
            }
            if (v === c) {
              m = !0, c = r, u = s;
              break;
            }
            v = v.sibling;
          }
          if (!m) throw Error(U(189));
        }
      }
      if (u.alternate !== c) throw Error(U(190));
    }
    if (u.tag !== 3) throw Error(U(188));
    return u.stateNode.current === u ? l : n;
  }
  function we(l) {
    var n = l.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return l;
    for (l = l.child; l !== null; ) {
      if (n = we(l), n !== null) return n;
      l = l.sibling;
    }
    return null;
  }
  var ye = Object.assign, W = /* @__PURE__ */ Symbol.for("react.element"), N = /* @__PURE__ */ Symbol.for("react.transitional.element"), oe = /* @__PURE__ */ Symbol.for("react.portal"), Le = /* @__PURE__ */ Symbol.for("react.fragment"), al = /* @__PURE__ */ Symbol.for("react.strict_mode"), Pe = /* @__PURE__ */ Symbol.for("react.profiler"), ht = /* @__PURE__ */ Symbol.for("react.consumer"), jt = /* @__PURE__ */ Symbol.for("react.context"), It = /* @__PURE__ */ Symbol.for("react.forward_ref"), nl = /* @__PURE__ */ Symbol.for("react.suspense"), Bt = /* @__PURE__ */ Symbol.for("react.suspense_list"), Ge = /* @__PURE__ */ Symbol.for("react.memo"), _t = /* @__PURE__ */ Symbol.for("react.lazy"), tt = /* @__PURE__ */ Symbol.for("react.activity"), Qt = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), re = Symbol.iterator;
  function bt(l) {
    return l === null || typeof l != "object" ? null : (l = re && l[re] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var Oe = /* @__PURE__ */ Symbol.for("react.client.reference");
  function xe(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === Oe ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case Le:
        return "Fragment";
      case Pe:
        return "Profiler";
      case al:
        return "StrictMode";
      case nl:
        return "Suspense";
      case Bt:
        return "SuspenseList";
      case tt:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case oe:
          return "Portal";
        case jt:
          return l.displayName || "Context";
        case ht:
          return (l._context.displayName || "Context") + ".Consumer";
        case It:
          var n = l.render;
          return l = l.displayName, l || (l = n.displayName || n.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case Ge:
          return n = l.displayName || null, n !== null ? n : xe(l.type) || "Memo";
        case _t:
          n = l._payload, l = l._init;
          try {
            return xe(l(n));
          } catch {
          }
      }
    return null;
  }
  var Yt = Array.isArray, X = F.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, B = ve.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ee = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, ce = [], be = -1;
  function O(l) {
    return { current: l };
  }
  function A(l) {
    0 > be || (l.current = ce[be], ce[be] = null, be--);
  }
  function $(l, n) {
    be++, ce[be] = l.current, l.current = n;
  }
  var te = O(null), ne = O(null), De = O(null), lt = O(null);
  function We(l, n) {
    switch ($(De, n), $(ne, l), $(te, null), n.nodeType) {
      case 9:
      case 11:
        l = (l = n.documentElement) && (l = l.namespaceURI) ? Tf(l) : 0;
        break;
      default:
        if (l = n.tagName, n = n.namespaceURI)
          n = Tf(n), l = Hg(n, l);
        else
          switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
    }
    A(te), $(te, l);
  }
  function Et() {
    A(te), A(ne), A(De);
  }
  function ta(l) {
    l.memoizedState !== null && $(lt, l);
    var n = te.current, u = Hg(n, l.type);
    n !== u && ($(ne, l), $(te, u));
  }
  function gn(l) {
    ne.current === l && (A(te), A(ne)), lt.current === l && (A(lt), rl._currentValue = ee);
  }
  var se, Tc;
  function Wa(l) {
    if (se === void 0)
      try {
        throw Error();
      } catch (u) {
        var n = u.stack.trim().match(/\n( *(at )?)/);
        se = n && n[1] || "", Tc = -1 < u.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < u.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + se + l + Tc;
  }
  var ui = !1;
  function uu(l, n) {
    if (!l || ui) return "";
    ui = !0;
    var u = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var c = {
        DetermineComponentFrameRoot: function() {
          try {
            if (n) {
              var k = function() {
                throw Error();
              };
              if (Object.defineProperty(k.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(k, []);
                } catch (w) {
                  var j = w;
                }
                Reflect.construct(l, [], k);
              } else {
                try {
                  k.call();
                } catch (w) {
                  j = w;
                }
                l.call(k.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (w) {
                j = w;
              }
              (k = l()) && typeof k.catch == "function" && k.catch(function() {
              });
            }
          } catch (w) {
            if (w && j && typeof w.stack == "string")
              return [w.stack, j.stack];
          }
          return [null, null];
        }
      };
      c.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var s = Object.getOwnPropertyDescriptor(
        c.DetermineComponentFrameRoot,
        "name"
      );
      s && s.configurable && Object.defineProperty(
        c.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var r = c.DetermineComponentFrameRoot(), m = r[0], v = r[1];
      if (m && v) {
        var T = m.split(`
`), H = v.split(`
`);
        for (s = c = 0; c < T.length && !T[c].includes("DetermineComponentFrameRoot"); )
          c++;
        for (; s < H.length && !H[s].includes(
          "DetermineComponentFrameRoot"
        ); )
          s++;
        if (c === T.length || s === H.length)
          for (c = T.length - 1, s = H.length - 1; 1 <= c && 0 <= s && T[c] !== H[s]; )
            s--;
        for (; 1 <= c && 0 <= s; c--, s--)
          if (T[c] !== H[s]) {
            if (c !== 1 || s !== 1)
              do
                if (c--, s--, 0 > s || T[c] !== H[s]) {
                  var V = `
` + T[c].replace(" at new ", " at ");
                  return l.displayName && V.includes("<anonymous>") && (V = V.replace("<anonymous>", l.displayName)), V;
                }
              while (1 <= c && 0 <= s);
            break;
          }
      }
    } finally {
      ui = !1, Error.prepareStackTrace = u;
    }
    return (u = l ? l.displayName || l.name : "") ? Wa(u) : "";
  }
  function zt(l, n) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return Wa(l.type);
      case 16:
        return Wa("Lazy");
      case 13:
        return l.child !== n && n !== null ? Wa("Suspense Fallback") : Wa("Suspense");
      case 19:
        return Wa("SuspenseList");
      case 0:
      case 15:
        return uu(l.type, !1);
      case 11:
        return uu(l.type.render, !1);
      case 1:
        return uu(l.type, !0);
      case 31:
        return Wa("Activity");
      default:
        return "";
    }
  }
  function wl(l) {
    try {
      var n = "", u = null;
      do
        n += zt(l, u), u = l, l = l.return;
      while (l);
      return n;
    } catch (c) {
      return `
Error generating stack: ` + c.message + `
` + c.stack;
    }
  }
  var Yi = Object.prototype.hasOwnProperty, ts = J.unstable_scheduleCallback, me = J.unstable_cancelCallback, No = J.unstable_shouldYield, iu = J.unstable_requestPaint, Tl = J.unstable_now, qi = J.unstable_getCurrentPriorityLevel, ls = J.unstable_ImmediatePriority, jo = J.unstable_UserBlockingPriority, wi = J.unstable_NormalPriority, Gi = J.unstable_LowPriority, as = J.unstable_IdlePriority, ns = J.log, us = J.unstable_setDisableYieldValue, wn = null, gl = null;
  function _a(l) {
    if (typeof ns == "function" && us(l), gl && typeof gl.setStrictMode == "function")
      try {
        gl.setStrictMode(wn, l);
      } catch {
      }
  }
  var Ml = Math.clz32 ? Math.clz32 : g, Bo = Math.log, Xi = Math.LN2;
  function g(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (Bo(l) / Xi | 0) | 0;
  }
  var M = 256, P = 262144, ae = 4194304;
  function de(l) {
    var n = l & 42;
    if (n !== 0) return n;
    switch (l & -l) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return l & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l;
    }
  }
  function He(l, n, u) {
    var c = l.pendingLanes;
    if (c === 0) return 0;
    var s = 0, r = l.suspendedLanes, m = l.pingedLanes;
    l = l.warmLanes;
    var v = c & 134217727;
    return v !== 0 ? (c = v & ~r, c !== 0 ? s = de(c) : (m &= v, m !== 0 ? s = de(m) : u || (u = v & ~l, u !== 0 && (s = de(u))))) : (v = c & ~r, v !== 0 ? s = de(v) : m !== 0 ? s = de(m) : u || (u = c & ~l, u !== 0 && (s = de(u)))), s === 0 ? 0 : n !== 0 && n !== s && (n & r) === 0 && (r = s & -s, u = n & -n, r >= u || r === 32 && (u & 4194048) !== 0) ? n : s;
  }
  function pe(l, n) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & n) === 0;
  }
  function ot(l, n) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return n + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Be() {
    var l = ae;
    return ae <<= 1, (ae & 62914560) === 0 && (ae = 4194304), l;
  }
  function Gl(l) {
    for (var n = [], u = 0; 31 > u; u++) n.push(l);
    return n;
  }
  function Da(l, n) {
    l.pendingLanes |= n, n !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function sd(l, n, u, c, s, r) {
    var m = l.pendingLanes;
    l.pendingLanes = u, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= u, l.entangledLanes &= u, l.errorRecoveryDisabledLanes &= u, l.shellSuspendCounter = 0;
    var v = l.entanglements, T = l.expirationTimes, H = l.hiddenUpdates;
    for (u = m & ~u; 0 < u; ) {
      var V = 31 - Ml(u), k = 1 << V;
      v[V] = 0, T[V] = -1;
      var j = H[V];
      if (j !== null)
        for (H[V] = null, V = 0; V < j.length; V++) {
          var w = j[V];
          w !== null && (w.lane &= -536870913);
        }
      u &= ~k;
    }
    c !== 0 && Ac(l, c, 0), r !== 0 && s === 0 && l.tag !== 0 && (l.suspendedLanes |= r & ~(m & ~n));
  }
  function Ac(l, n, u) {
    l.pendingLanes |= n, l.suspendedLanes &= ~n;
    var c = 31 - Ml(n);
    l.entangledLanes |= n, l.entanglements[c] = l.entanglements[c] | 1073741824 | u & 261930;
  }
  function is(l, n) {
    var u = l.entangledLanes |= n;
    for (l = l.entanglements; u; ) {
      var c = 31 - Ml(u), s = 1 << c;
      s & n | l[c] & n && (l[c] |= n), u &= ~s;
    }
  }
  function cu(l, n) {
    var u = n & -n;
    return u = (u & 42) !== 0 ? 1 : Ra(u), (u & (l.suspendedLanes | n)) !== 0 ? 0 : u;
  }
  function Ra(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function rd(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function U0() {
    var l = B.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : Br(l.type));
  }
  function dd(l, n) {
    var u = B.p;
    try {
      return B.p = l, n();
    } finally {
      B.p = u;
    }
  }
  var ii = Math.random().toString(36).slice(2), vl = "__reactFiber$" + ii, Vt = "__reactProps$" + ii, Oc = "__reactContainer$" + ii, cs = "__reactEvents$" + ii, x0 = "__reactListeners$" + ii, Hm = "__reactHandles$" + ii, Nm = "__reactResources$" + ii, Yo = "__reactMarker$" + ii;
  function Li(l) {
    delete l[vl], delete l[Vt], delete l[cs], delete l[x0], delete l[Hm];
  }
  function zc(l) {
    var n = l[vl];
    if (n) return n;
    for (var u = l.parentNode; u; ) {
      if (n = u[Oc] || u[vl]) {
        if (u = n.alternate, n.child !== null || u !== null && u.child !== null)
          for (l = wh(l); l !== null; ) {
            if (u = l[vl]) return u;
            l = wh(l);
          }
        return n;
      }
      l = u, u = l.parentNode;
    }
    return null;
  }
  function _c(l) {
    if (l = l[vl] || l[Oc]) {
      var n = l.tag;
      if (n === 5 || n === 6 || n === 13 || n === 31 || n === 26 || n === 27 || n === 3)
        return l;
    }
    return null;
  }
  function qo(l) {
    var n = l.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return l.stateNode;
    throw Error(U(33));
  }
  function Dc(l) {
    var n = l[Nm];
    return n || (n = l[Nm] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), n;
  }
  function Al(l) {
    l[Yo] = !0;
  }
  var Ma = /* @__PURE__ */ new Set(), Rc = {};
  function Fa(l, n) {
    Mc(l, n), Mc(l + "Capture", n);
  }
  function Mc(l, n) {
    for (Rc[l] = n, l = 0; l < n.length; l++)
      Ma.add(n[l]);
  }
  var os = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), fs = {}, hd = {};
  function ss(l) {
    return Yi.call(hd, l) ? !0 : Yi.call(fs, l) ? !1 : os.test(l) ? hd[l] = !0 : (fs[l] = !0, !1);
  }
  function ci(l, n, u) {
    if (ss(n))
      if (u === null) l.removeAttribute(n);
      else {
        switch (typeof u) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(n);
            return;
          case "boolean":
            var c = n.toLowerCase().slice(0, 5);
            if (c !== "data-" && c !== "aria-") {
              l.removeAttribute(n);
              return;
            }
        }
        l.setAttribute(n, "" + u);
      }
  }
  function wo(l, n, u) {
    if (u === null) l.removeAttribute(n);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(n);
          return;
      }
      l.setAttribute(n, "" + u);
    }
  }
  function oi(l, n, u, c) {
    if (c === null) l.removeAttribute(u);
    else {
      switch (typeof c) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(u);
          return;
      }
      l.setAttributeNS(n, u, "" + c);
    }
  }
  function vn(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function jm(l) {
    var n = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
  }
  function Bm(l, n, u) {
    var c = Object.getOwnPropertyDescriptor(
      l.constructor.prototype,
      n
    );
    if (!l.hasOwnProperty(n) && typeof c < "u" && typeof c.get == "function" && typeof c.set == "function") {
      var s = c.get, r = c.set;
      return Object.defineProperty(l, n, {
        configurable: !0,
        get: function() {
          return s.call(this);
        },
        set: function(m) {
          u = "" + m, r.call(this, m);
        }
      }), Object.defineProperty(l, n, {
        enumerable: c.enumerable
      }), {
        getValue: function() {
          return u;
        },
        setValue: function(m) {
          u = "" + m;
        },
        stopTracking: function() {
          l._valueTracker = null, delete l[n];
        }
      };
    }
  }
  function rs(l) {
    if (!l._valueTracker) {
      var n = jm(l) ? "checked" : "value";
      l._valueTracker = Bm(
        l,
        n,
        "" + l[n]
      );
    }
  }
  function Ym(l) {
    if (!l) return !1;
    var n = l._valueTracker;
    if (!n) return !0;
    var u = n.getValue(), c = "";
    return l && (c = jm(l) ? l.checked ? "true" : "false" : l.value), l = c, l !== u ? (n.setValue(l), !0) : !1;
  }
  function ds(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var H0 = /[\n"\\]/g;
  function Sn(l) {
    return l.replace(
      H0,
      function(n) {
        return "\\" + n.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function md(l, n, u, c, s, r, m, v) {
    l.name = "", m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" ? l.type = m : l.removeAttribute("type"), n != null ? m === "number" ? (n === 0 && l.value === "" || l.value != n) && (l.value = "" + vn(n)) : l.value !== "" + vn(n) && (l.value = "" + vn(n)) : m !== "submit" && m !== "reset" || l.removeAttribute("value"), n != null ? Go(l, m, vn(n)) : u != null ? Go(l, m, vn(u)) : c != null && l.removeAttribute("value"), s == null && r != null && (l.defaultChecked = !!r), s != null && (l.checked = s && typeof s != "function" && typeof s != "symbol"), v != null && typeof v != "function" && typeof v != "symbol" && typeof v != "boolean" ? l.name = "" + vn(v) : l.removeAttribute("name");
  }
  function yd(l, n, u, c, s, r, m, v) {
    if (r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean" && (l.type = r), n != null || u != null) {
      if (!(r !== "submit" && r !== "reset" || n != null)) {
        rs(l);
        return;
      }
      u = u != null ? "" + vn(u) : "", n = n != null ? "" + vn(n) : u, v || n === l.value || (l.value = n), l.defaultValue = n;
    }
    c = c ?? s, c = typeof c != "function" && typeof c != "symbol" && !!c, l.checked = v ? l.checked : !!c, l.defaultChecked = !!c, m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" && (l.name = m), rs(l);
  }
  function Go(l, n, u) {
    n === "number" && ds(l.ownerDocument) === l || l.defaultValue === "" + u || (l.defaultValue = "" + u);
  }
  function ou(l, n, u, c) {
    if (l = l.options, n) {
      n = {};
      for (var s = 0; s < u.length; s++)
        n["$" + u[s]] = !0;
      for (u = 0; u < l.length; u++)
        s = n.hasOwnProperty("$" + l[u].value), l[u].selected !== s && (l[u].selected = s), s && c && (l[u].defaultSelected = !0);
    } else {
      for (u = "" + vn(u), n = null, s = 0; s < l.length; s++) {
        if (l[s].value === u) {
          l[s].selected = !0, c && (l[s].defaultSelected = !0);
          return;
        }
        n !== null || l[s].disabled || (n = l[s]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function N0(l, n, u) {
    if (n != null && (n = "" + vn(n), n !== l.value && (l.value = n), u == null)) {
      l.defaultValue !== n && (l.defaultValue = n);
      return;
    }
    l.defaultValue = u != null ? "" + vn(u) : "";
  }
  function qm(l, n, u, c) {
    if (n == null) {
      if (c != null) {
        if (u != null) throw Error(U(92));
        if (Yt(c)) {
          if (1 < c.length) throw Error(U(93));
          c = c[0];
        }
        u = c;
      }
      u == null && (u = ""), n = u;
    }
    u = vn(n), l.defaultValue = u, c = l.textContent, c === u && c !== "" && c !== null && (l.value = c), rs(l);
  }
  function Cc(l, n) {
    if (n) {
      var u = l.firstChild;
      if (u && u === l.lastChild && u.nodeType === 3) {
        u.nodeValue = n;
        return;
      }
    }
    l.textContent = n;
  }
  var hs = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function wm(l, n, u) {
    var c = n.indexOf("--") === 0;
    u == null || typeof u == "boolean" || u === "" ? c ? l.setProperty(n, "") : n === "float" ? l.cssFloat = "" : l[n] = "" : c ? l.setProperty(n, u) : typeof u != "number" || u === 0 || hs.has(n) ? n === "float" ? l.cssFloat = u : l[n] = ("" + u).trim() : l[n] = u + "px";
  }
  function j0(l, n, u) {
    if (n != null && typeof n != "object")
      throw Error(U(62));
    if (l = l.style, u != null) {
      for (var c in u)
        !u.hasOwnProperty(c) || n != null && n.hasOwnProperty(c) || (c.indexOf("--") === 0 ? l.setProperty(c, "") : c === "float" ? l.cssFloat = "" : l[c] = "");
      for (var s in n)
        c = n[s], n.hasOwnProperty(s) && u[s] !== c && wm(l, s, c);
    } else
      for (var r in n)
        n.hasOwnProperty(r) && wm(l, r, n[r]);
  }
  function Gm(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Jv = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), Kv = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Qi(l) {
    return Kv.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  function Xl() {
  }
  var ms = null;
  function pd(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var Uc = null, fu = null;
  function Xm(l) {
    var n = _c(l);
    if (n && (l = n.stateNode)) {
      var u = l[Vt] || null;
      e: switch (l = n.stateNode, n.type) {
        case "input":
          if (md(
            l,
            u.value,
            u.defaultValue,
            u.defaultValue,
            u.checked,
            u.defaultChecked,
            u.type,
            u.name
          ), n = u.name, u.type === "radio" && n != null) {
            for (u = l; u.parentNode; ) u = u.parentNode;
            for (u = u.querySelectorAll(
              'input[name="' + Sn(
                "" + n
              ) + '"][type="radio"]'
            ), n = 0; n < u.length; n++) {
              var c = u[n];
              if (c !== l && c.form === l.form) {
                var s = c[Vt] || null;
                if (!s) throw Error(U(90));
                md(
                  c,
                  s.value,
                  s.defaultValue,
                  s.defaultValue,
                  s.checked,
                  s.defaultChecked,
                  s.type,
                  s.name
                );
              }
            }
            for (n = 0; n < u.length; n++)
              c = u[n], c.form === l.form && Ym(c);
          }
          break e;
        case "textarea":
          N0(l, u.value, u.defaultValue);
          break e;
        case "select":
          n = u.value, n != null && ou(l, !!u.multiple, n, !1);
      }
    }
  }
  var Xo = !1;
  function ys(l, n, u) {
    if (Xo) return l(n, u);
    Xo = !0;
    try {
      var c = l(n);
      return c;
    } finally {
      if (Xo = !1, (Uc !== null || fu !== null) && (vr(), Uc && (n = Uc, l = fu, fu = Uc = null, Xm(n), l)))
        for (n = 0; n < l.length; n++) Xm(l[n]);
    }
  }
  function Lo(l, n) {
    var u = l.stateNode;
    if (u === null) return null;
    var c = u[Vt] || null;
    if (c === null) return null;
    u = c[n];
    e: switch (n) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (c = !c.disabled) || (l = l.type, c = !(l === "button" || l === "input" || l === "select" || l === "textarea")), l = !c;
        break e;
      default:
        l = !1;
    }
    if (l) return null;
    if (u && typeof u != "function")
      throw Error(
        U(231, n, typeof u)
      );
    return u;
  }
  var ul = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Lm = !1;
  if (ul)
    try {
      var xc = {};
      Object.defineProperty(xc, "passive", {
        get: function() {
          Lm = !0;
        }
      }), window.addEventListener("test", xc, xc), window.removeEventListener("test", xc, xc);
    } catch {
      Lm = !1;
    }
  var fi = null, gd = null, vd = null;
  function B0() {
    if (vd) return vd;
    var l, n = gd, u = n.length, c, s = "value" in fi ? fi.value : fi.textContent, r = s.length;
    for (l = 0; l < u && n[l] === s[l]; l++) ;
    var m = u - l;
    for (c = 1; c <= m && n[u - c] === s[r - c]; c++) ;
    return vd = s.slice(l, 1 < c ? 1 - c : void 0);
  }
  function ps(l) {
    var n = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && n === 13 && (l = 13)) : l = n, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function Sd() {
    return !0;
  }
  function Qm() {
    return !1;
  }
  function Ca(l) {
    function n(u, c, s, r, m) {
      this._reactName = u, this._targetInst = s, this.type = c, this.nativeEvent = r, this.target = m, this.currentTarget = null;
      for (var v in l)
        l.hasOwnProperty(v) && (u = l[v], this[v] = u ? u(r) : r[v]);
      return this.isDefaultPrevented = (r.defaultPrevented != null ? r.defaultPrevented : r.returnValue === !1) ? Sd : Qm, this.isPropagationStopped = Qm, this;
    }
    return ye(n.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var u = this.nativeEvent;
        u && (u.preventDefault ? u.preventDefault() : typeof u.returnValue != "unknown" && (u.returnValue = !1), this.isDefaultPrevented = Sd);
      },
      stopPropagation: function() {
        var u = this.nativeEvent;
        u && (u.stopPropagation ? u.stopPropagation() : typeof u.cancelBubble != "unknown" && (u.cancelBubble = !0), this.isPropagationStopped = Sd);
      },
      persist: function() {
      },
      isPersistent: Sd
    }), n;
  }
  var su = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, gs = Ca(su), Qo = ye({}, su, { view: 0, detail: 0 }), Y0 = Ca(Qo), Vm, Zm, vs, bd = ye({}, Qo, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Ia,
    button: 0,
    buttons: 0,
    relatedTarget: function(l) {
      return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
    },
    movementX: function(l) {
      return "movementX" in l ? l.movementX : (l !== vs && (vs && l.type === "mousemove" ? (Vm = l.screenX - vs.screenX, Zm = l.screenY - vs.screenY) : Zm = Vm = 0, vs = l), Vm);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : Zm;
    }
  }), q0 = Ca(bd), Ss = ye({}, bd, { dataTransfer: 0 }), w0 = Ca(Ss), G0 = ye({}, Qo, { relatedTarget: 0 }), Ed = Ca(G0), X0 = ye({}, su, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Jm = Ca(X0), L0 = ye({}, su, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), Hc = Ca(L0), Nc = ye({}, su, { data: 0 }), bn = Ca(Nc), $v = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Km = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, ru = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Q0(l) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(l) : (l = ru[l]) ? !!n[l] : !1;
  }
  function Ia() {
    return Q0;
  }
  var du = ye({}, Qo, {
    key: function(l) {
      if (l.key) {
        var n = $v[l.key] || l.key;
        if (n !== "Unidentified") return n;
      }
      return l.type === "keypress" ? (l = ps(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? Km[l.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ia,
    charCode: function(l) {
      return l.type === "keypress" ? ps(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? ps(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  }), Td = Ca(du), Ad = ye({}, bd, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), Od = Ca(Ad), hu = ye({}, Qo, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ia
  }), kv = Ca(hu), V0 = ye({}, su, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Z0 = Ca(V0), Wv = ye({}, bd, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), $m = Ca(Wv), Fv = ye({}, su, {
    newState: 0,
    oldState: 0
  }), J0 = Ca(Fv), km = [9, 13, 27, 32], Vo = ul && "CompositionEvent" in window, Vi = null;
  ul && "documentMode" in document && (Vi = document.documentMode);
  var Wm = ul && "TextEvent" in window && !Vi, Ll = ul && (!Vo || Vi && 8 < Vi && 11 >= Vi), Fm = " ", bs = !1;
  function Zi(l, n) {
    switch (l) {
      case "keyup":
        return km.indexOf(n.keyCode) !== -1;
      case "keydown":
        return n.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function zd(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var jc = !1;
  function K0(l, n) {
    switch (l) {
      case "compositionend":
        return zd(n);
      case "keypress":
        return n.which !== 32 ? null : (bs = !0, Fm);
      case "textInput":
        return l = n.data, l === Fm && bs ? null : l;
      default:
        return null;
    }
  }
  function $0(l, n) {
    if (jc)
      return l === "compositionend" || !Vo && Zi(l, n) ? (l = B0(), vd = gd = fi = null, jc = !1, l) : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
          if (n.char && 1 < n.char.length)
            return n.char;
          if (n.which) return String.fromCharCode(n.which);
        }
        return null;
      case "compositionend":
        return Ll && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var Iv = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function _d(l) {
    var n = l && l.nodeName && l.nodeName.toLowerCase();
    return n === "input" ? !!Iv[l.type] : n === "textarea";
  }
  function mu(l, n, u, c) {
    Uc ? fu ? fu.push(c) : fu = [c] : Uc = c, n = xh(n, "onChange"), 0 < n.length && (u = new gs(
      "onChange",
      "change",
      null,
      u,
      c
    ), l.push({ event: u, listeners: n }));
  }
  var Zo = null, Bc = null;
  function Dd(l) {
    yp(l, 0);
  }
  function yu(l) {
    var n = qo(l);
    if (Ym(n)) return l;
  }
  function Rd(l, n) {
    if (l === "change") return n;
  }
  var Im = !1;
  if (ul) {
    var Es;
    if (ul) {
      var ma = "oninput" in document;
      if (!ma) {
        var pu = document.createElement("div");
        pu.setAttribute("oninput", "return;"), ma = typeof pu.oninput == "function";
      }
      Es = ma;
    } else Es = !1;
    Im = Es && (!document.documentMode || 9 < document.documentMode);
  }
  function Pm() {
    Zo && (Zo.detachEvent("onpropertychange", Md), Bc = Zo = null);
  }
  function Md(l) {
    if (l.propertyName === "value" && yu(Bc)) {
      var n = [];
      mu(
        n,
        Bc,
        l,
        pd(l)
      ), ys(Dd, n);
    }
  }
  function ey(l, n, u) {
    l === "focusin" ? (Pm(), Zo = n, Bc = u, Zo.attachEvent("onpropertychange", Md)) : l === "focusout" && Pm();
  }
  function k0(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return yu(Bc);
  }
  function W0(l, n) {
    if (l === "click") return yu(n);
  }
  function Ji(l, n) {
    if (l === "input" || l === "change")
      return yu(n);
  }
  function Yc(l, n) {
    return l === n && (l !== 0 || 1 / l === 1 / n) || l !== l && n !== n;
  }
  var Ua = typeof Object.is == "function" ? Object.is : Yc;
  function Ki(l, n) {
    if (Ua(l, n)) return !0;
    if (typeof l != "object" || l === null || typeof n != "object" || n === null)
      return !1;
    var u = Object.keys(l), c = Object.keys(n);
    if (u.length !== c.length) return !1;
    for (c = 0; c < u.length; c++) {
      var s = u[c];
      if (!Yi.call(n, s) || !Ua(l[s], n[s]))
        return !1;
    }
    return !0;
  }
  function si(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function ty(l, n) {
    var u = si(l);
    l = 0;
    for (var c; u; ) {
      if (u.nodeType === 3) {
        if (c = l + u.textContent.length, l <= n && c >= n)
          return { node: u, offset: n - l };
        l = c;
      }
      e: {
        for (; u; ) {
          if (u.nextSibling) {
            u = u.nextSibling;
            break e;
          }
          u = u.parentNode;
        }
        u = void 0;
      }
      u = si(u);
    }
  }
  function ly(l, n) {
    return l && n ? l === n ? !0 : l && l.nodeType === 3 ? !1 : n && n.nodeType === 3 ? ly(l, n.parentNode) : "contains" in l ? l.contains(n) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(n) & 16) : !1 : !1;
  }
  function qc(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var n = ds(l.document); n instanceof l.HTMLIFrameElement; ) {
      try {
        var u = typeof n.contentWindow.location.href == "string";
      } catch {
        u = !1;
      }
      if (u) l = n.contentWindow;
      else break;
      n = ds(l.document);
    }
    return n;
  }
  function ri(l) {
    var n = l && l.nodeName && l.nodeName.toLowerCase();
    return n && (n === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || n === "textarea" || l.contentEditable === "true");
  }
  var ay = ul && "documentMode" in document && 11 >= document.documentMode, gu = null, Ts = null, $i = null, vu = !1;
  function Su(l, n, u) {
    var c = u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    vu || gu == null || gu !== ds(c) || (c = gu, "selectionStart" in c && ri(c) ? c = { start: c.selectionStart, end: c.selectionEnd } : (c = (c.ownerDocument && c.ownerDocument.defaultView || window).getSelection(), c = {
      anchorNode: c.anchorNode,
      anchorOffset: c.anchorOffset,
      focusNode: c.focusNode,
      focusOffset: c.focusOffset
    }), $i && Ki($i, c) || ($i = c, c = xh(Ts, "onSelect"), 0 < c.length && (n = new gs(
      "onSelect",
      "select",
      null,
      n,
      u
    ), l.push({ event: n, listeners: c }), n.target = gu)));
  }
  function di(l, n) {
    var u = {};
    return u[l.toLowerCase()] = n.toLowerCase(), u["Webkit" + l] = "webkit" + n, u["Moz" + l] = "moz" + n, u;
  }
  var ki = {
    animationend: di("Animation", "AnimationEnd"),
    animationiteration: di("Animation", "AnimationIteration"),
    animationstart: di("Animation", "AnimationStart"),
    transitionrun: di("Transition", "TransitionRun"),
    transitionstart: di("Transition", "TransitionStart"),
    transitioncancel: di("Transition", "TransitionCancel"),
    transitionend: di("Transition", "TransitionEnd")
  }, Wi = {}, As = {};
  ul && (As = document.createElement("div").style, "AnimationEvent" in window || (delete ki.animationend.animation, delete ki.animationiteration.animation, delete ki.animationstart.animation), "TransitionEvent" in window || delete ki.transitionend.transition);
  function Pa(l) {
    if (Wi[l]) return Wi[l];
    if (!ki[l]) return l;
    var n = ki[l], u;
    for (u in n)
      if (n.hasOwnProperty(u) && u in As)
        return Wi[l] = n[u];
    return l;
  }
  var qt = Pa("animationend"), Os = Pa("animationiteration"), ny = Pa("animationstart"), uy = Pa("transitionrun"), wc = Pa("transitionstart"), zs = Pa("transitioncancel"), Gn = Pa("transitionend"), F0 = /* @__PURE__ */ new Map(), Xn = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Xn.push("scrollEnd");
  function xa(l, n) {
    F0.set(l, n), Fa(n, [l]);
  }
  var Fi = typeof reportError == "function" ? reportError : function(l) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var n = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l),
        error: l
      });
      if (!window.dispatchEvent(n)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", l);
      return;
    }
    console.error(l);
  }, ya = [], Cl = 0, pa = 0;
  function en() {
    for (var l = Cl, n = pa = Cl = 0; n < l; ) {
      var u = ya[n];
      ya[n++] = null;
      var c = ya[n];
      ya[n++] = null;
      var s = ya[n];
      ya[n++] = null;
      var r = ya[n];
      if (ya[n++] = null, c !== null && s !== null) {
        var m = c.pending;
        m === null ? s.next = s : (s.next = m.next, m.next = s), c.pending = s;
      }
      r !== 0 && Cd(u, s, r);
    }
  }
  function tn(l, n, u, c) {
    ya[Cl++] = l, ya[Cl++] = n, ya[Cl++] = u, ya[Cl++] = c, pa |= c, l.lanes |= c, l = l.alternate, l !== null && (l.lanes |= c);
  }
  function En(l, n, u, c) {
    return tn(l, n, u, c), Jo(l);
  }
  function la(l, n) {
    return tn(l, null, null, n), Jo(l);
  }
  function Cd(l, n, u) {
    l.lanes |= u;
    var c = l.alternate;
    c !== null && (c.lanes |= u);
    for (var s = !1, r = l.return; r !== null; )
      r.childLanes |= u, c = r.alternate, c !== null && (c.childLanes |= u), r.tag === 22 && (l = r.stateNode, l === null || l._visibility & 1 || (s = !0)), l = r, r = r.return;
    return l.tag === 3 ? (r = l.stateNode, s && n !== null && (s = 31 - Ml(u), l = r.hiddenUpdates, c = l[s], c === null ? l[s] = [n] : c.push(n), n.lane = u | 536870912), r) : null;
  }
  function Jo(l) {
    if (50 < fo)
      throw fo = 0, Sh = null, Error(U(185));
    for (var n = l.return; n !== null; )
      l = n, n = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var Gc = {};
  function bu(l, n, u, c) {
    this.tag = l, this.key = u, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = c, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ha(l, n, u, c) {
    return new bu(l, n, u, c);
  }
  function Tn(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function ln(l, n) {
    var u = l.alternate;
    return u === null ? (u = Ha(
      l.tag,
      n,
      l.key,
      l.mode
    ), u.elementType = l.elementType, u.type = l.type, u.stateNode = l.stateNode, u.alternate = l, l.alternate = u) : (u.pendingProps = n, u.type = l.type, u.flags = 0, u.subtreeFlags = 0, u.deletions = null), u.flags = l.flags & 65011712, u.childLanes = l.childLanes, u.lanes = l.lanes, u.child = l.child, u.memoizedProps = l.memoizedProps, u.memoizedState = l.memoizedState, u.updateQueue = l.updateQueue, n = l.dependencies, u.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, u.sibling = l.sibling, u.index = l.index, u.ref = l.ref, u.refCleanup = l.refCleanup, u;
  }
  function I0(l, n) {
    l.flags &= 65011714;
    var u = l.alternate;
    return u === null ? (l.childLanes = 0, l.lanes = n, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = u.childLanes, l.lanes = u.lanes, l.child = u.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = u.memoizedProps, l.memoizedState = u.memoizedState, l.updateQueue = u.updateQueue, l.type = u.type, n = u.dependencies, l.dependencies = n === null ? null : {
      lanes: n.lanes,
      firstContext: n.firstContext
    }), l;
  }
  function _s(l, n, u, c, s, r) {
    var m = 0;
    if (c = l, typeof l == "function") Tn(l) && (m = 1);
    else if (typeof l == "string")
      m = Up(
        l,
        u,
        te.current
      ) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      e: switch (l) {
        case tt:
          return l = Ha(31, u, n, s), l.elementType = tt, l.lanes = r, l;
        case Le:
          return Xc(u.children, s, r, n);
        case al:
          m = 8, s |= 24;
          break;
        case Pe:
          return l = Ha(12, u, n, s | 2), l.elementType = Pe, l.lanes = r, l;
        case nl:
          return l = Ha(13, u, n, s), l.elementType = nl, l.lanes = r, l;
        case Bt:
          return l = Ha(19, u, n, s), l.elementType = Bt, l.lanes = r, l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case jt:
                m = 10;
                break e;
              case ht:
                m = 9;
                break e;
              case It:
                m = 11;
                break e;
              case Ge:
                m = 14;
                break e;
              case _t:
                m = 16, c = null;
                break e;
            }
          m = 29, u = Error(
            U(130, l === null ? "null" : typeof l, "")
          ), c = null;
      }
    return n = Ha(m, u, n, s), n.elementType = l, n.type = c, n.lanes = r, n;
  }
  function Xc(l, n, u, c) {
    return l = Ha(7, l, c, n), l.lanes = u, l;
  }
  function Ds(l, n, u) {
    return l = Ha(6, l, null, n), l.lanes = u, l;
  }
  function Rs(l) {
    var n = Ha(18, null, null, 0);
    return n.stateNode = l, n;
  }
  function Ud(l, n, u) {
    return n = Ha(
      4,
      l.children !== null ? l.children : [],
      l.key,
      n
    ), n.lanes = u, n.stateNode = {
      containerInfo: l.containerInfo,
      pendingChildren: null,
      implementation: l.implementation
    }, n;
  }
  var iy = /* @__PURE__ */ new WeakMap();
  function an(l, n) {
    if (typeof l == "object" && l !== null) {
      var u = iy.get(l);
      return u !== void 0 ? u : (n = {
        value: l,
        source: n,
        stack: wl(n)
      }, iy.set(l, n), n);
    }
    return {
      value: l,
      source: n,
      stack: wl(n)
    };
  }
  var Lc = [], nn = 0, Ms = null, Ko = 0, Ut = [], Na = 0, Ln = null, un = 1, ja = "";
  function Eu(l, n) {
    Lc[nn++] = Ko, Lc[nn++] = Ms, Ms = l, Ko = n;
  }
  function Cs(l, n, u) {
    Ut[Na++] = un, Ut[Na++] = ja, Ut[Na++] = Ln, Ln = l;
    var c = un;
    l = ja;
    var s = 32 - Ml(c) - 1;
    c &= ~(1 << s), u += 1;
    var r = 32 - Ml(n) + s;
    if (30 < r) {
      var m = s - s % 5;
      r = (c & (1 << m) - 1).toString(32), c >>= m, s -= m, un = 1 << 32 - Ml(n) + s | u << s | c, ja = r + l;
    } else
      un = 1 << r | u << s | c, ja = l;
  }
  function xd(l) {
    l.return !== null && (Eu(l, 1), Cs(l, 1, 0));
  }
  function $o(l) {
    for (; l === Ms; )
      Ms = Lc[--nn], Lc[nn] = null, Ko = Lc[--nn], Lc[nn] = null;
    for (; l === Ln; )
      Ln = Ut[--Na], Ut[Na] = null, ja = Ut[--Na], Ut[Na] = null, un = Ut[--Na], Ut[Na] = null;
  }
  function cy(l, n) {
    Ut[Na++] = un, Ut[Na++] = ja, Ut[Na++] = Ln, un = n.id, ja = n.overflow, Ln = l;
  }
  var Sl = null, wt = null, ut = !1, Tu = null, Ba = !1, Au = Error(U(519));
  function ga(l) {
    var n = Error(
      U(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw xs(an(n, l)), Au;
  }
  function ko(l) {
    var n = l.stateNode, u = l.type, c = l.memoizedProps;
    switch (n[vl] = l, n[Vt] = c, u) {
      case "dialog":
        at("cancel", n), at("close", n);
        break;
      case "iframe":
      case "object":
      case "embed":
        at("load", n);
        break;
      case "video":
      case "audio":
        for (u = 0; u < ho.length; u++)
          at(ho[u], n);
        break;
      case "source":
        at("error", n);
        break;
      case "img":
      case "image":
      case "link":
        at("error", n), at("load", n);
        break;
      case "details":
        at("toggle", n);
        break;
      case "input":
        at("invalid", n), yd(
          n,
          c.value,
          c.defaultValue,
          c.checked,
          c.defaultChecked,
          c.type,
          c.name,
          !0
        );
        break;
      case "select":
        at("invalid", n);
        break;
      case "textarea":
        at("invalid", n), qm(n, c.value, c.defaultValue, c.children);
    }
    u = c.children, typeof u != "string" && typeof u != "number" && typeof u != "bigint" || n.textContent === "" + u || c.suppressHydrationWarning === !0 || Sp(n.textContent, u) ? (c.popover != null && (at("beforetoggle", n), at("toggle", n)), c.onScroll != null && at("scroll", n), c.onScrollEnd != null && at("scrollend", n), c.onClick != null && (n.onclick = Xl), n = !0) : n = !1, n || ga(l, !0);
  }
  function Us(l) {
    for (Sl = l.return; Sl; )
      switch (Sl.tag) {
        case 5:
        case 31:
        case 13:
          Ba = !1;
          return;
        case 27:
        case 3:
          Ba = !0;
          return;
        default:
          Sl = Sl.return;
      }
  }
  function Ou(l) {
    if (l !== Sl) return !1;
    if (!ut) return Us(l), ut = !0, !1;
    var n = l.tag, u;
    if ((u = n !== 3 && n !== 27) && ((u = n === 5) && (u = l.type, u = !(u !== "form" && u !== "button") || Bh(l.type, l.memoizedProps)), u = !u), u && wt && ga(l), Us(l), n === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(U(317));
      wt = qh(l);
    } else if (n === 31) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(U(317));
      wt = qh(l);
    } else
      n === 27 ? (n = wt, Qu(l.type) ? (l = _f, _f = null, wt = l) : wt = n) : wt = Sl ? kl(l.stateNode.nextSibling) : null;
    return !0;
  }
  function Qn() {
    wt = Sl = null, ut = !1;
  }
  function Hd() {
    var l = Tu;
    return l !== null && (Qa === null ? Qa = l : Qa.push.apply(
      Qa,
      l
    ), Tu = null), l;
  }
  function xs(l) {
    Tu === null ? Tu = [l] : Tu.push(l);
  }
  var Nd = O(null), Ii = null, Vn = null;
  function zu(l, n, u) {
    $(Nd, n._currentValue), n._currentValue = u;
  }
  function aa(l) {
    l._currentValue = Nd.current, A(Nd);
  }
  function Hs(l, n, u) {
    for (; l !== null; ) {
      var c = l.alternate;
      if ((l.childLanes & n) !== n ? (l.childLanes |= n, c !== null && (c.childLanes |= n)) : c !== null && (c.childLanes & n) !== n && (c.childLanes |= n), l === u) break;
      l = l.return;
    }
  }
  function jd(l, n, u, c) {
    var s = l.child;
    for (s !== null && (s.return = l); s !== null; ) {
      var r = s.dependencies;
      if (r !== null) {
        var m = s.child;
        r = r.firstContext;
        e: for (; r !== null; ) {
          var v = r;
          r = s;
          for (var T = 0; T < n.length; T++)
            if (v.context === n[T]) {
              r.lanes |= u, v = r.alternate, v !== null && (v.lanes |= u), Hs(
                r.return,
                u,
                l
              ), c || (m = null);
              break e;
            }
          r = v.next;
        }
      } else if (s.tag === 18) {
        if (m = s.return, m === null) throw Error(U(341));
        m.lanes |= u, r = m.alternate, r !== null && (r.lanes |= u), Hs(m, u, l), m = null;
      } else m = s.child;
      if (m !== null) m.return = s;
      else
        for (m = s; m !== null; ) {
          if (m === l) {
            m = null;
            break;
          }
          if (s = m.sibling, s !== null) {
            s.return = m.return, m = s;
            break;
          }
          m = m.return;
        }
      s = m;
    }
  }
  function cn(l, n, u, c) {
    l = null;
    for (var s = n, r = !1; s !== null; ) {
      if (!r) {
        if ((s.flags & 524288) !== 0) r = !0;
        else if ((s.flags & 262144) !== 0) break;
      }
      if (s.tag === 10) {
        var m = s.alternate;
        if (m === null) throw Error(U(387));
        if (m = m.memoizedProps, m !== null) {
          var v = s.type;
          Ua(s.pendingProps.value, m.value) || (l !== null ? l.push(v) : l = [v]);
        }
      } else if (s === lt.current) {
        if (m = s.alternate, m === null) throw Error(U(387));
        m.memoizedState.memoizedState !== s.memoizedState.memoizedState && (l !== null ? l.push(rl) : l = [rl]);
      }
      s = s.return;
    }
    l !== null && jd(
      n,
      l,
      u,
      c
    ), n.flags |= 262144;
  }
  function na(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!Ua(
        l.context._currentValue,
        l.memoizedValue
      ))
        return !0;
      l = l.next;
    }
    return !1;
  }
  function _u(l) {
    Ii = l, Vn = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function Te(l) {
    return Qc(Ii, l);
  }
  function I(l, n) {
    return Ii === null && _u(l), Qc(l, n);
  }
  function Qc(l, n) {
    var u = n._currentValue;
    if (n = { context: n, memoizedValue: u, next: null }, Vn === null) {
      if (l === null) throw Error(U(308));
      Vn = n, l.dependencies = { lanes: 0, firstContext: n }, l.flags |= 524288;
    } else Vn = Vn.next = n;
    return u;
  }
  var Bd = typeof AbortController < "u" ? AbortController : function() {
    var l = [], n = this.signal = {
      aborted: !1,
      addEventListener: function(u, c) {
        l.push(c);
      }
    };
    this.abort = function() {
      n.aborted = !0, l.forEach(function(u) {
        return u();
      });
    };
  }, il = J.unstable_scheduleCallback, oy = J.unstable_NormalPriority, cl = {
    $$typeof: jt,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Yd() {
    return {
      controller: new Bd(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Vc(l) {
    l.refCount--, l.refCount === 0 && il(oy, function() {
      l.controller.abort();
    });
  }
  var Ns = null, js = 0, Pi = 0, ec = null;
  function va(l, n) {
    if (Ns === null) {
      var u = Ns = [];
      js = 0, Pi = so(), ec = {
        status: "pending",
        value: void 0,
        then: function(c) {
          u.push(c);
        }
      };
    }
    return js++, n.then(Tt, Tt), n;
  }
  function Tt() {
    if (--js === 0 && Ns !== null) {
      ec !== null && (ec.status = "fulfilled");
      var l = Ns;
      Ns = null, Pi = 0, ec = null;
      for (var n = 0; n < l.length; n++) (0, l[n])();
    }
  }
  function qd(l, n) {
    var u = [], c = {
      status: "pending",
      value: null,
      reason: null,
      then: function(s) {
        u.push(s);
      }
    };
    return l.then(
      function() {
        c.status = "fulfilled", c.value = n;
        for (var s = 0; s < u.length; s++) (0, u[s])(n);
      },
      function(s) {
        for (c.status = "rejected", c.reason = s, s = 0; s < u.length; s++)
          (0, u[s])(void 0);
      }
    ), c;
  }
  var Wo = X.S;
  X.S = function(l, n) {
    Oi = Tl(), typeof n == "object" && n !== null && typeof n.then == "function" && va(l, n), Wo !== null && Wo(l, n);
  };
  var Ya = O(null);
  function hi() {
    var l = Ya.current;
    return l !== null ? l : xt.pooledCache;
  }
  function qa(l, n) {
    n === null ? $(Ya, Ya.current) : $(Ya, n.pool);
  }
  function wd() {
    var l = hi();
    return l === null ? null : { parent: cl._currentValue, pool: l };
  }
  var Zn = Error(U(460)), Bs = Error(U(474)), tc = Error(U(542)), Fo = { then: function() {
  } };
  function Ys(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function fy(l, n, u) {
    switch (u = l[u], u === void 0 ? l.push(n) : u !== n && (n.then(Xl, Xl), n = u), n.status) {
      case "fulfilled":
        return n.value;
      case "rejected":
        throw l = n.reason, ry(l), l;
      default:
        if (typeof n.status == "string") n.then(Xl, Xl);
        else {
          if (l = xt, l !== null && 100 < l.shellSuspendCounter)
            throw Error(U(482));
          l = n, l.status = "pending", l.then(
            function(c) {
              if (n.status === "pending") {
                var s = n;
                s.status = "fulfilled", s.value = c;
              }
            },
            function(c) {
              if (n.status === "pending") {
                var s = n;
                s.status = "rejected", s.reason = c;
              }
            }
          );
        }
        switch (n.status) {
          case "fulfilled":
            return n.value;
          case "rejected":
            throw l = n.reason, ry(l), l;
        }
        throw ac = n, Zn;
    }
  }
  function lc(l) {
    try {
      var n = l._init;
      return n(l._payload);
    } catch (u) {
      throw u !== null && typeof u == "object" && typeof u.then == "function" ? (ac = u, Zn) : u;
    }
  }
  var ac = null;
  function sy() {
    if (ac === null) throw Error(U(459));
    var l = ac;
    return ac = null, l;
  }
  function ry(l) {
    if (l === Zn || l === tc)
      throw Error(U(483));
  }
  var nc = null, Zc = 0;
  function Io(l) {
    var n = Zc;
    return Zc += 1, nc === null && (nc = []), fy(nc, l, n);
  }
  function Po(l, n) {
    n = n.props.ref, l.ref = n !== void 0 ? n : null;
  }
  function qs(l, n) {
    throw n.$$typeof === W ? Error(U(525)) : (l = Object.prototype.toString.call(n), Error(
      U(
        31,
        l === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : l
      )
    ));
  }
  function dy(l) {
    function n(C, D) {
      if (l) {
        var x = C.deletions;
        x === null ? (C.deletions = [D], C.flags |= 16) : x.push(D);
      }
    }
    function u(C, D) {
      if (!l) return null;
      for (; D !== null; )
        n(C, D), D = D.sibling;
      return null;
    }
    function c(C) {
      for (var D = /* @__PURE__ */ new Map(); C !== null; )
        C.key !== null ? D.set(C.key, C) : D.set(C.index, C), C = C.sibling;
      return D;
    }
    function s(C, D) {
      return C = ln(C, D), C.index = 0, C.sibling = null, C;
    }
    function r(C, D, x) {
      return C.index = x, l ? (x = C.alternate, x !== null ? (x = x.index, x < D ? (C.flags |= 67108866, D) : x) : (C.flags |= 67108866, D)) : (C.flags |= 1048576, D);
    }
    function m(C) {
      return l && C.alternate === null && (C.flags |= 67108866), C;
    }
    function v(C, D, x, K) {
      return D === null || D.tag !== 6 ? (D = Ds(x, C.mode, K), D.return = C, D) : (D = s(D, x), D.return = C, D);
    }
    function T(C, D, x, K) {
      var Ee = x.type;
      return Ee === Le ? V(
        C,
        D,
        x.props.children,
        K,
        x.key
      ) : D !== null && (D.elementType === Ee || typeof Ee == "object" && Ee !== null && Ee.$$typeof === _t && lc(Ee) === D.type) ? (D = s(D, x.props), Po(D, x), D.return = C, D) : (D = _s(
        x.type,
        x.key,
        x.props,
        null,
        C.mode,
        K
      ), Po(D, x), D.return = C, D);
    }
    function H(C, D, x, K) {
      return D === null || D.tag !== 4 || D.stateNode.containerInfo !== x.containerInfo || D.stateNode.implementation !== x.implementation ? (D = Ud(x, C.mode, K), D.return = C, D) : (D = s(D, x.children || []), D.return = C, D);
    }
    function V(C, D, x, K, Ee) {
      return D === null || D.tag !== 7 ? (D = Xc(
        x,
        C.mode,
        K,
        Ee
      ), D.return = C, D) : (D = s(D, x), D.return = C, D);
    }
    function k(C, D, x) {
      if (typeof D == "string" && D !== "" || typeof D == "number" || typeof D == "bigint")
        return D = Ds(
          "" + D,
          C.mode,
          x
        ), D.return = C, D;
      if (typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case N:
            return x = _s(
              D.type,
              D.key,
              D.props,
              null,
              C.mode,
              x
            ), Po(x, D), x.return = C, x;
          case oe:
            return D = Ud(
              D,
              C.mode,
              x
            ), D.return = C, D;
          case _t:
            return D = lc(D), k(C, D, x);
        }
        if (Yt(D) || bt(D))
          return D = Xc(
            D,
            C.mode,
            x,
            null
          ), D.return = C, D;
        if (typeof D.then == "function")
          return k(C, Io(D), x);
        if (D.$$typeof === jt)
          return k(
            C,
            I(C, D),
            x
          );
        qs(C, D);
      }
      return null;
    }
    function j(C, D, x, K) {
      var Ee = D !== null ? D.key : null;
      if (typeof x == "string" && x !== "" || typeof x == "number" || typeof x == "bigint")
        return Ee !== null ? null : v(C, D, "" + x, K);
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case N:
            return x.key === Ee ? T(C, D, x, K) : null;
          case oe:
            return x.key === Ee ? H(C, D, x, K) : null;
          case _t:
            return x = lc(x), j(C, D, x, K);
        }
        if (Yt(x) || bt(x))
          return Ee !== null ? null : V(C, D, x, K, null);
        if (typeof x.then == "function")
          return j(
            C,
            D,
            Io(x),
            K
          );
        if (x.$$typeof === jt)
          return j(
            C,
            D,
            I(C, x),
            K
          );
        qs(C, x);
      }
      return null;
    }
    function w(C, D, x, K, Ee) {
      if (typeof K == "string" && K !== "" || typeof K == "number" || typeof K == "bigint")
        return C = C.get(x) || null, v(D, C, "" + K, Ee);
      if (typeof K == "object" && K !== null) {
        switch (K.$$typeof) {
          case N:
            return C = C.get(
              K.key === null ? x : K.key
            ) || null, T(D, C, K, Ee);
          case oe:
            return C = C.get(
              K.key === null ? x : K.key
            ) || null, H(D, C, K, Ee);
          case _t:
            return K = lc(K), w(
              C,
              D,
              x,
              K,
              Ee
            );
        }
        if (Yt(K) || bt(K))
          return C = C.get(x) || null, V(D, C, K, Ee, null);
        if (typeof K.then == "function")
          return w(
            C,
            D,
            x,
            Io(K),
            Ee
          );
        if (K.$$typeof === jt)
          return w(
            C,
            D,
            x,
            I(D, K),
            Ee
          );
        qs(D, K);
      }
      return null;
    }
    function he(C, D, x, K) {
      for (var Ee = null, yt = null, ge = D, Qe = D = 0, Fe = null; ge !== null && Qe < x.length; Qe++) {
        ge.index > Qe ? (Fe = ge, ge = null) : Fe = ge.sibling;
        var nt = j(
          C,
          ge,
          x[Qe],
          K
        );
        if (nt === null) {
          ge === null && (ge = Fe);
          break;
        }
        l && ge && nt.alternate === null && n(C, ge), D = r(nt, D, Qe), yt === null ? Ee = nt : yt.sibling = nt, yt = nt, ge = Fe;
      }
      if (Qe === x.length)
        return u(C, ge), ut && Eu(C, Qe), Ee;
      if (ge === null) {
        for (; Qe < x.length; Qe++)
          ge = k(C, x[Qe], K), ge !== null && (D = r(
            ge,
            D,
            Qe
          ), yt === null ? Ee = ge : yt.sibling = ge, yt = ge);
        return ut && Eu(C, Qe), Ee;
      }
      for (ge = c(ge); Qe < x.length; Qe++)
        Fe = w(
          ge,
          C,
          Qe,
          x[Qe],
          K
        ), Fe !== null && (l && Fe.alternate !== null && ge.delete(
          Fe.key === null ? Qe : Fe.key
        ), D = r(
          Fe,
          D,
          Qe
        ), yt === null ? Ee = Fe : yt.sibling = Fe, yt = Fe);
      return l && ge.forEach(function(pc) {
        return n(C, pc);
      }), ut && Eu(C, Qe), Ee;
    }
    function Re(C, D, x, K) {
      if (x == null) throw Error(U(151));
      for (var Ee = null, yt = null, ge = D, Qe = D = 0, Fe = null, nt = x.next(); ge !== null && !nt.done; Qe++, nt = x.next()) {
        ge.index > Qe ? (Fe = ge, ge = null) : Fe = ge.sibling;
        var pc = j(C, ge, nt.value, K);
        if (pc === null) {
          ge === null && (ge = Fe);
          break;
        }
        l && ge && pc.alternate === null && n(C, ge), D = r(pc, D, Qe), yt === null ? Ee = pc : yt.sibling = pc, yt = pc, ge = Fe;
      }
      if (nt.done)
        return u(C, ge), ut && Eu(C, Qe), Ee;
      if (ge === null) {
        for (; !nt.done; Qe++, nt = x.next())
          nt = k(C, nt.value, K), nt !== null && (D = r(nt, D, Qe), yt === null ? Ee = nt : yt.sibling = nt, yt = nt);
        return ut && Eu(C, Qe), Ee;
      }
      for (ge = c(ge); !nt.done; Qe++, nt = x.next())
        nt = w(ge, C, Qe, nt.value, K), nt !== null && (l && nt.alternate !== null && ge.delete(nt.key === null ? Qe : nt.key), D = r(nt, D, Qe), yt === null ? Ee = nt : yt.sibling = nt, yt = nt);
      return l && ge.forEach(function(Ph) {
        return n(C, Ph);
      }), ut && Eu(C, Qe), Ee;
    }
    function Ht(C, D, x, K) {
      if (typeof x == "object" && x !== null && x.type === Le && x.key === null && (x = x.props.children), typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case N:
            e: {
              for (var Ee = x.key; D !== null; ) {
                if (D.key === Ee) {
                  if (Ee = x.type, Ee === Le) {
                    if (D.tag === 7) {
                      u(
                        C,
                        D.sibling
                      ), K = s(
                        D,
                        x.props.children
                      ), K.return = C, C = K;
                      break e;
                    }
                  } else if (D.elementType === Ee || typeof Ee == "object" && Ee !== null && Ee.$$typeof === _t && lc(Ee) === D.type) {
                    u(
                      C,
                      D.sibling
                    ), K = s(D, x.props), Po(K, x), K.return = C, C = K;
                    break e;
                  }
                  u(C, D);
                  break;
                } else n(C, D);
                D = D.sibling;
              }
              x.type === Le ? (K = Xc(
                x.props.children,
                C.mode,
                K,
                x.key
              ), K.return = C, C = K) : (K = _s(
                x.type,
                x.key,
                x.props,
                null,
                C.mode,
                K
              ), Po(K, x), K.return = C, C = K);
            }
            return m(C);
          case oe:
            e: {
              for (Ee = x.key; D !== null; ) {
                if (D.key === Ee)
                  if (D.tag === 4 && D.stateNode.containerInfo === x.containerInfo && D.stateNode.implementation === x.implementation) {
                    u(
                      C,
                      D.sibling
                    ), K = s(D, x.children || []), K.return = C, C = K;
                    break e;
                  } else {
                    u(C, D);
                    break;
                  }
                else n(C, D);
                D = D.sibling;
              }
              K = Ud(x, C.mode, K), K.return = C, C = K;
            }
            return m(C);
          case _t:
            return x = lc(x), Ht(
              C,
              D,
              x,
              K
            );
        }
        if (Yt(x))
          return he(
            C,
            D,
            x,
            K
          );
        if (bt(x)) {
          if (Ee = bt(x), typeof Ee != "function") throw Error(U(150));
          return x = Ee.call(x), Re(
            C,
            D,
            x,
            K
          );
        }
        if (typeof x.then == "function")
          return Ht(
            C,
            D,
            Io(x),
            K
          );
        if (x.$$typeof === jt)
          return Ht(
            C,
            D,
            I(C, x),
            K
          );
        qs(C, x);
      }
      return typeof x == "string" && x !== "" || typeof x == "number" || typeof x == "bigint" ? (x = "" + x, D !== null && D.tag === 6 ? (u(C, D.sibling), K = s(D, x), K.return = C, C = K) : (u(C, D), K = Ds(x, C.mode, K), K.return = C, C = K), m(C)) : u(C, D);
    }
    return function(C, D, x, K) {
      try {
        Zc = 0;
        var Ee = Ht(
          C,
          D,
          x,
          K
        );
        return nc = null, Ee;
      } catch (ge) {
        if (ge === Zn || ge === tc) throw ge;
        var yt = Ha(29, ge, null, C.mode);
        return yt.lanes = K, yt.return = C, yt;
      }
    };
  }
  var Jc = dy(!0), hy = dy(!1), mi = !1;
  function Gd(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function ws(l, n) {
    l = l.updateQueue, n.updateQueue === l && (n.updateQueue = {
      baseState: l.baseState,
      firstBaseUpdate: l.firstBaseUpdate,
      lastBaseUpdate: l.lastBaseUpdate,
      shared: l.shared,
      callbacks: null
    });
  }
  function yi(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function pi(l, n, u) {
    var c = l.updateQueue;
    if (c === null) return null;
    if (c = c.shared, (mt & 2) !== 0) {
      var s = c.pending;
      return s === null ? n.next = n : (n.next = s.next, s.next = n), c.pending = n, n = Jo(l), Cd(l, null, u), n;
    }
    return tn(l, c, n, u), Jo(l);
  }
  function Du(l, n, u) {
    if (n = n.updateQueue, n !== null && (n = n.shared, (u & 4194048) !== 0)) {
      var c = n.lanes;
      c &= l.pendingLanes, u |= c, n.lanes = u, is(l, u);
    }
  }
  function ef(l, n) {
    var u = l.updateQueue, c = l.alternate;
    if (c !== null && (c = c.updateQueue, u === c)) {
      var s = null, r = null;
      if (u = u.firstBaseUpdate, u !== null) {
        do {
          var m = {
            lane: u.lane,
            tag: u.tag,
            payload: u.payload,
            callback: null,
            next: null
          };
          r === null ? s = r = m : r = r.next = m, u = u.next;
        } while (u !== null);
        r === null ? s = r = n : r = r.next = n;
      } else s = r = n;
      u = {
        baseState: c.baseState,
        firstBaseUpdate: s,
        lastBaseUpdate: r,
        shared: c.shared,
        callbacks: c.callbacks
      }, l.updateQueue = u;
      return;
    }
    l = u.lastBaseUpdate, l === null ? u.firstBaseUpdate = n : l.next = n, u.lastBaseUpdate = n;
  }
  var Xd = !1;
  function Gs() {
    if (Xd) {
      var l = ec;
      if (l !== null) throw l;
    }
  }
  function uc(l, n, u, c) {
    Xd = !1;
    var s = l.updateQueue;
    mi = !1;
    var r = s.firstBaseUpdate, m = s.lastBaseUpdate, v = s.shared.pending;
    if (v !== null) {
      s.shared.pending = null;
      var T = v, H = T.next;
      T.next = null, m === null ? r = H : m.next = H, m = T;
      var V = l.alternate;
      V !== null && (V = V.updateQueue, v = V.lastBaseUpdate, v !== m && (v === null ? V.firstBaseUpdate = H : v.next = H, V.lastBaseUpdate = T));
    }
    if (r !== null) {
      var k = s.baseState;
      m = 0, V = H = T = null, v = r;
      do {
        var j = v.lane & -536870913, w = j !== v.lane;
        if (w ? (it & j) === j : (c & j) === j) {
          j !== 0 && j === Pi && (Xd = !0), V !== null && (V = V.next = {
            lane: 0,
            tag: v.tag,
            payload: v.payload,
            callback: null,
            next: null
          });
          e: {
            var he = l, Re = v;
            j = n;
            var Ht = u;
            switch (Re.tag) {
              case 1:
                if (he = Re.payload, typeof he == "function") {
                  k = he.call(Ht, k, j);
                  break e;
                }
                k = he;
                break e;
              case 3:
                he.flags = he.flags & -65537 | 128;
              case 0:
                if (he = Re.payload, j = typeof he == "function" ? he.call(Ht, k, j) : he, j == null) break e;
                k = ye({}, k, j);
                break e;
              case 2:
                mi = !0;
            }
          }
          j = v.callback, j !== null && (l.flags |= 64, w && (l.flags |= 8192), w = s.callbacks, w === null ? s.callbacks = [j] : w.push(j));
        } else
          w = {
            lane: j,
            tag: v.tag,
            payload: v.payload,
            callback: v.callback,
            next: null
          }, V === null ? (H = V = w, T = k) : V = V.next = w, m |= j;
        if (v = v.next, v === null) {
          if (v = s.shared.pending, v === null)
            break;
          w = v, v = w.next, w.next = null, s.lastBaseUpdate = w, s.shared.pending = null;
        }
      } while (!0);
      V === null && (T = k), s.baseState = T, s.firstBaseUpdate = H, s.lastBaseUpdate = V, r === null && (s.shared.lanes = 0), Mn |= m, l.lanes = m, l.memoizedState = k;
    }
  }
  function Kc(l, n) {
    if (typeof l != "function")
      throw Error(U(191, l));
    l.call(n);
  }
  function Ld(l, n) {
    var u = l.callbacks;
    if (u !== null)
      for (l.callbacks = null, l = 0; l < u.length; l++)
        Kc(u[l], n);
  }
  var An = O(null), Ql = O(0);
  function Xs(l, n) {
    l = Gu, $(Ql, l), $(An, n), Gu = l | n.baseLanes;
  }
  function my() {
    $(Ql, Gu), $(An, An.current);
  }
  function Ls() {
    Gu = Ql.current, A(An), A(Ql);
  }
  var ua = O(null), wa = null;
  function gi(l) {
    var n = l.alternate;
    $(Pt, Pt.current & 1), $(ua, l), wa === null && (n === null || An.current !== null || n.memoizedState !== null) && (wa = l);
  }
  function Qs(l) {
    $(Pt, Pt.current), $(ua, l), wa === null && (wa = l);
  }
  function Vs(l) {
    l.tag === 22 ? ($(Pt, Pt.current), $(ua, l), wa === null && (wa = l)) : Ru();
  }
  function Ru() {
    $(Pt, Pt.current), $(ua, ua.current);
  }
  function ia(l) {
    A(ua), wa === l && (wa = null), A(Pt);
  }
  var Pt = O(0);
  function $c(l) {
    for (var n = l; n !== null; ) {
      if (n.tag === 13) {
        var u = n.memoizedState;
        if (u !== null && (u = u.dehydrated, u === null || zp(u) || Un(u)))
          return n;
      } else if (n.tag === 19 && (n.memoizedProps.revealOrder === "forwards" || n.memoizedProps.revealOrder === "backwards" || n.memoizedProps.revealOrder === "unstable_legacy-backwards" || n.memoizedProps.revealOrder === "together")) {
        if ((n.flags & 128) !== 0) return n;
      } else if (n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === l) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === l) return null;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
    return null;
  }
  var Jn = 0, Xe = null, Dt = null, ol = null, Zs = !1, vi = !1, ic = !1, tf = 0, lf = 0, kc = null, yy = 0;
  function el() {
    throw Error(U(321));
  }
  function Qd(l, n) {
    if (n === null) return !1;
    for (var u = 0; u < n.length && u < l.length; u++)
      if (!Ua(l[u], n[u])) return !1;
    return !0;
  }
  function Si(l, n, u, c, s, r) {
    return Jn = r, Xe = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, X.H = l === null || l.memoizedState === null ? ug : Uy, ic = !1, r = u(c, s), ic = !1, vi && (r = Zd(
      n,
      u,
      c,
      s
    )), Vd(l), r;
  }
  function Vd(l) {
    X.H = ff;
    var n = Dt !== null && Dt.next !== null;
    if (Jn = 0, ol = Dt = Xe = null, Zs = !1, lf = 0, kc = null, n) throw Error(U(300));
    l === null || ml || (l = l.dependencies, l !== null && na(l) && (ml = !0));
  }
  function Zd(l, n, u, c) {
    Xe = l;
    var s = 0;
    do {
      if (vi && (kc = null), lf = 0, vi = !1, 25 <= s) throw Error(U(301));
      if (s += 1, ol = Dt = null, l.updateQueue != null) {
        var r = l.updateQueue;
        r.lastEffect = null, r.events = null, r.stores = null, r.memoCache != null && (r.memoCache.index = 0);
      }
      X.H = xy, r = n(u, c);
    } while (vi);
    return r;
  }
  function Pv() {
    var l = X.H, n = l.useState()[0];
    return n = typeof n.then == "function" ? af(n) : n, l = l.useState()[0], (Dt !== null ? Dt.memoizedState : null) !== l && (Xe.flags |= 1024), n;
  }
  function py() {
    var l = tf !== 0;
    return tf = 0, l;
  }
  function Jd(l, n, u) {
    n.updateQueue = l.updateQueue, n.flags &= -2053, l.lanes &= ~u;
  }
  function Wc(l) {
    if (Zs) {
      for (l = l.memoizedState; l !== null; ) {
        var n = l.queue;
        n !== null && (n.pending = null), l = l.next;
      }
      Zs = !1;
    }
    Jn = 0, ol = Dt = Xe = null, vi = !1, lf = tf = 0, kc = null;
  }
  function Vl() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return ol === null ? Xe.memoizedState = ol = l : ol = ol.next = l, ol;
  }
  function Kt() {
    if (Dt === null) {
      var l = Xe.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = Dt.next;
    var n = ol === null ? Xe.memoizedState : ol.next;
    if (n !== null)
      ol = n, Dt = l;
    else {
      if (l === null)
        throw Xe.alternate === null ? Error(U(467)) : Error(U(310));
      Dt = l, l = {
        memoizedState: Dt.memoizedState,
        baseState: Dt.baseState,
        baseQueue: Dt.baseQueue,
        queue: Dt.queue,
        next: null
      }, ol === null ? Xe.memoizedState = ol = l : ol = ol.next = l;
    }
    return ol;
  }
  function Js() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function af(l) {
    var n = lf;
    return lf += 1, kc === null && (kc = []), l = fy(kc, l, n), n = Xe, (ol === null ? n.memoizedState : ol.next) === null && (n = n.alternate, X.H = n === null || n.memoizedState === null ? ug : Uy), l;
  }
  function nf(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return af(l);
      if (l.$$typeof === jt) return Te(l);
    }
    throw Error(U(438, String(l)));
  }
  function Ks(l) {
    var n = null, u = Xe.updateQueue;
    if (u !== null && (n = u.memoCache), n == null) {
      var c = Xe.alternate;
      c !== null && (c = c.updateQueue, c !== null && (c = c.memoCache, c != null && (n = {
        data: c.data.map(function(s) {
          return s.slice();
        }),
        index: 0
      })));
    }
    if (n == null && (n = { data: [], index: 0 }), u === null && (u = Js(), Xe.updateQueue = u), u.memoCache = n, u = n.data[n.index], u === void 0)
      for (u = n.data[n.index] = Array(l), c = 0; c < l; c++)
        u[c] = Qt;
    return n.index++, u;
  }
  function Mu(l, n) {
    return typeof n == "function" ? n(l) : n;
  }
  function $s(l) {
    var n = Kt();
    return bi(n, Dt, l);
  }
  function bi(l, n, u) {
    var c = l.queue;
    if (c === null) throw Error(U(311));
    c.lastRenderedReducer = u;
    var s = l.baseQueue, r = c.pending;
    if (r !== null) {
      if (s !== null) {
        var m = s.next;
        s.next = r.next, r.next = m;
      }
      n.baseQueue = s = r, c.pending = null;
    }
    if (r = l.baseState, s === null) l.memoizedState = r;
    else {
      n = s.next;
      var v = m = null, T = null, H = n, V = !1;
      do {
        var k = H.lane & -536870913;
        if (k !== H.lane ? (it & k) === k : (Jn & k) === k) {
          var j = H.revertLane;
          if (j === 0)
            T !== null && (T = T.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: H.action,
              hasEagerState: H.hasEagerState,
              eagerState: H.eagerState,
              next: null
            }), k === Pi && (V = !0);
          else if ((Jn & j) === j) {
            H = H.next, j === Pi && (V = !0);
            continue;
          } else
            k = {
              lane: 0,
              revertLane: H.revertLane,
              gesture: null,
              action: H.action,
              hasEagerState: H.hasEagerState,
              eagerState: H.eagerState,
              next: null
            }, T === null ? (v = T = k, m = r) : T = T.next = k, Xe.lanes |= j, Mn |= j;
          k = H.action, ic && u(r, k), r = H.hasEagerState ? H.eagerState : u(r, k);
        } else
          j = {
            lane: k,
            revertLane: H.revertLane,
            gesture: H.gesture,
            action: H.action,
            hasEagerState: H.hasEagerState,
            eagerState: H.eagerState,
            next: null
          }, T === null ? (v = T = j, m = r) : T = T.next = j, Xe.lanes |= k, Mn |= k;
        H = H.next;
      } while (H !== null && H !== n);
      if (T === null ? m = r : T.next = v, !Ua(r, l.memoizedState) && (ml = !0, V && (u = ec, u !== null)))
        throw u;
      l.memoizedState = r, l.baseState = m, l.baseQueue = T, c.lastRenderedState = r;
    }
    return s === null && (c.lanes = 0), [l.memoizedState, c.dispatch];
  }
  function Kd(l) {
    var n = Kt(), u = n.queue;
    if (u === null) throw Error(U(311));
    u.lastRenderedReducer = l;
    var c = u.dispatch, s = u.pending, r = n.memoizedState;
    if (s !== null) {
      u.pending = null;
      var m = s = s.next;
      do
        r = l(r, m.action), m = m.next;
      while (m !== s);
      Ua(r, n.memoizedState) || (ml = !0), n.memoizedState = r, n.baseQueue === null && (n.baseState = r), u.lastRenderedState = r;
    }
    return [r, c];
  }
  function gy(l, n, u) {
    var c = Xe, s = Kt(), r = ut;
    if (r) {
      if (u === void 0) throw Error(U(407));
      u = u();
    } else u = n();
    var m = !Ua(
      (Dt || s).memoizedState,
      u
    );
    if (m && (s.memoizedState = u, ml = !0), s = s.queue, Ps(Sy.bind(null, c, s, l), [
      l
    ]), s.getSnapshot !== n || m || ol !== null && ol.memoizedState.tag & 1) {
      if (c.flags |= 2048, Fc(
        9,
        { destroy: void 0 },
        ks.bind(
          null,
          c,
          s,
          u,
          n
        ),
        null
      ), xt === null) throw Error(U(349));
      r || (Jn & 127) !== 0 || vy(c, n, u);
    }
    return u;
  }
  function vy(l, n, u) {
    l.flags |= 16384, l = { getSnapshot: n, value: u }, n = Xe.updateQueue, n === null ? (n = Js(), Xe.updateQueue = n, n.stores = [l]) : (u = n.stores, u === null ? n.stores = [l] : u.push(l));
  }
  function ks(l, n, u, c) {
    n.value = u, n.getSnapshot = c, $d(n) && kd(l);
  }
  function Sy(l, n, u) {
    return u(function() {
      $d(n) && kd(l);
    });
  }
  function $d(l) {
    var n = l.getSnapshot;
    l = l.value;
    try {
      var u = n();
      return !Ua(l, u);
    } catch {
      return !0;
    }
  }
  function kd(l) {
    var n = la(l, 2);
    n !== null && Za(n, l, 2);
  }
  function Ws(l) {
    var n = Vl();
    if (typeof l == "function") {
      var u = l;
      if (l = u(), ic) {
        _a(!0);
        try {
          u();
        } finally {
          _a(!1);
        }
      }
    }
    return n.memoizedState = n.baseState = l, n.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Mu,
      lastRenderedState: l
    }, n;
  }
  function P0(l, n, u, c) {
    return l.baseState = u, bi(
      l,
      Dt,
      typeof c == "function" ? c : Mu
    );
  }
  function Zl(l, n, u, c, s) {
    if (Ei(l)) throw Error(U(485));
    if (l = n.action, l !== null) {
      var r = {
        payload: s,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(m) {
          r.listeners.push(m);
        }
      };
      X.T !== null ? u(!0) : r.isTransition = !1, c(r), u = n.pending, u === null ? (r.next = n.pending = r, by(n, r)) : (r.next = u.next, n.pending = u.next = r);
    }
  }
  function by(l, n) {
    var u = n.action, c = n.payload, s = l.state;
    if (n.isTransition) {
      var r = X.T, m = {};
      X.T = m;
      try {
        var v = u(s, c), T = X.S;
        T !== null && T(m, v), Ey(l, n, v);
      } catch (H) {
        Wd(l, n, H);
      } finally {
        r !== null && m.types !== null && (r.types = m.types), X.T = r;
      }
    } else
      try {
        r = u(s, c), Ey(l, n, r);
      } catch (H) {
        Wd(l, n, H);
      }
  }
  function Ey(l, n, u) {
    u !== null && typeof u == "object" && typeof u.then == "function" ? u.then(
      function(c) {
        Ty(l, n, c);
      },
      function(c) {
        return Wd(l, n, c);
      }
    ) : Ty(l, n, u);
  }
  function Ty(l, n, u) {
    n.status = "fulfilled", n.value = u, uf(n), l.state = u, n = l.pending, n !== null && (u = n.next, u === n ? l.pending = null : (u = u.next, n.next = u, by(l, u)));
  }
  function Wd(l, n, u) {
    var c = l.pending;
    if (l.pending = null, c !== null) {
      c = c.next;
      do
        n.status = "rejected", n.reason = u, uf(n), n = n.next;
      while (n !== c);
    }
    l.action = null;
  }
  function uf(l) {
    l = l.listeners;
    for (var n = 0; n < l.length; n++) (0, l[n])();
  }
  function Ay(l, n) {
    return n;
  }
  function Fs(l, n) {
    if (ut) {
      var u = xt.formState;
      if (u !== null) {
        e: {
          var c = Xe;
          if (ut) {
            if (wt) {
              t: {
                for (var s = wt, r = Ba; s.nodeType !== 8; ) {
                  if (!r) {
                    s = null;
                    break t;
                  }
                  if (s = kl(
                    s.nextSibling
                  ), s === null) {
                    s = null;
                    break t;
                  }
                }
                r = s.data, s = r === "F!" || r === "F" ? s : null;
              }
              if (s) {
                wt = kl(
                  s.nextSibling
                ), c = s.data === "F!";
                break e;
              }
            }
            ga(c);
          }
          c = !1;
        }
        c && (n = u[0]);
      }
    }
    return u = Vl(), u.memoizedState = u.baseState = n, c = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ay,
      lastRenderedState: n
    }, u.queue = c, u = My.bind(
      null,
      Xe,
      c
    ), c.dispatch = u, c = Ws(!1), r = Pc.bind(
      null,
      Xe,
      !1,
      c.queue
    ), c = Vl(), s = {
      state: n,
      dispatch: null,
      action: l,
      pending: null
    }, c.queue = s, u = Zl.bind(
      null,
      Xe,
      s,
      r,
      u
    ), s.dispatch = u, c.memoizedState = l, [n, u, !1];
  }
  function Oy(l) {
    var n = Kt();
    return eg(n, Dt, l);
  }
  function eg(l, n, u) {
    if (n = bi(
      l,
      n,
      Ay
    )[0], l = $s(Mu)[0], typeof n == "object" && n !== null && typeof n.then == "function")
      try {
        var c = af(n);
      } catch (m) {
        throw m === Zn ? tc : m;
      }
    else c = n;
    n = Kt();
    var s = n.queue, r = s.dispatch;
    return u !== n.memoizedState && (Xe.flags |= 2048, Fc(
      9,
      { destroy: void 0 },
      Fd.bind(null, s, u),
      null
    )), [c, r, l];
  }
  function Fd(l, n) {
    l.action = n;
  }
  function Id(l) {
    var n = Kt(), u = Dt;
    if (u !== null)
      return eg(n, u, l);
    Kt(), n = n.memoizedState, u = Kt();
    var c = u.queue.dispatch;
    return u.memoizedState = l, [n, c, !1];
  }
  function Fc(l, n, u, c) {
    return l = { tag: l, create: u, deps: c, inst: n, next: null }, n = Xe.updateQueue, n === null && (n = Js(), Xe.updateQueue = n), u = n.lastEffect, u === null ? n.lastEffect = l.next = l : (c = u.next, u.next = l, l.next = c, n.lastEffect = l), l;
  }
  function zy() {
    return Kt().memoizedState;
  }
  function Is(l, n, u, c) {
    var s = Vl();
    Xe.flags |= l, s.memoizedState = Fc(
      1 | n,
      { destroy: void 0 },
      u,
      c === void 0 ? null : c
    );
  }
  function cf(l, n, u, c) {
    var s = Kt();
    c = c === void 0 ? null : c;
    var r = s.memoizedState.inst;
    Dt !== null && c !== null && Qd(c, Dt.memoizedState.deps) ? s.memoizedState = Fc(n, r, u, c) : (Xe.flags |= l, s.memoizedState = Fc(
      1 | n,
      r,
      u,
      c
    ));
  }
  function Pd(l, n) {
    Is(8390656, 8, l, n);
  }
  function Ps(l, n) {
    cf(2048, 8, l, n);
  }
  function tg(l) {
    Xe.flags |= 4;
    var n = Xe.updateQueue;
    if (n === null)
      n = Js(), Xe.updateQueue = n, n.events = [l];
    else {
      var u = n.events;
      u === null ? n.events = [l] : u.push(l);
    }
  }
  function eh(l) {
    var n = Kt().memoizedState;
    return tg({ ref: n, nextImpl: l }), function() {
      if ((mt & 2) !== 0) throw Error(U(440));
      return n.impl.apply(void 0, arguments);
    };
  }
  function er(l, n) {
    return cf(4, 2, l, n);
  }
  function th(l, n) {
    return cf(4, 4, l, n);
  }
  function _y(l, n) {
    if (typeof n == "function") {
      l = l();
      var u = n(l);
      return function() {
        typeof u == "function" ? u() : n(null);
      };
    }
    if (n != null)
      return l = l(), n.current = l, function() {
        n.current = null;
      };
  }
  function lh(l, n, u) {
    u = u != null ? u.concat([l]) : null, cf(4, 4, _y.bind(null, n, l), u);
  }
  function ah() {
  }
  function Cu(l, n) {
    var u = Kt();
    n = n === void 0 ? null : n;
    var c = u.memoizedState;
    return n !== null && Qd(n, c[1]) ? c[0] : (u.memoizedState = [l, n], l);
  }
  function nh(l, n) {
    var u = Kt();
    n = n === void 0 ? null : n;
    var c = u.memoizedState;
    if (n !== null && Qd(n, c[1]))
      return c[0];
    if (c = l(), ic) {
      _a(!0);
      try {
        l();
      } finally {
        _a(!1);
      }
    }
    return u.memoizedState = [c, n], c;
  }
  function Dy(l, n, u) {
    return u === void 0 || (Jn & 1073741824) !== 0 && (it & 261930) === 0 ? l.memoizedState = n : (l.memoizedState = u, l = up(), Xe.lanes |= l, Mn |= l, u);
  }
  function uh(l, n, u, c) {
    return Ua(u, n) ? u : An.current !== null ? (l = Dy(l, u, c), Ua(l, n) || (ml = !0), l) : (Jn & 42) === 0 || (Jn & 1073741824) !== 0 && (it & 261930) === 0 ? (ml = !0, l.memoizedState = u) : (l = up(), Xe.lanes |= l, Mn |= l, n);
  }
  function Uu(l, n, u, c, s) {
    var r = B.p;
    B.p = r !== 0 && 8 > r ? r : 8;
    var m = X.T, v = {};
    X.T = v, Pc(l, !1, n, u);
    try {
      var T = s(), H = X.S;
      if (H !== null && H(v, T), T !== null && typeof T == "object" && typeof T.then == "function") {
        var V = qd(
          T,
          c
        );
        Ic(
          l,
          n,
          V,
          Aa(l)
        );
      } else
        Ic(
          l,
          n,
          c,
          Aa(l)
        );
    } catch (k) {
      Ic(
        l,
        n,
        { then: function() {
        }, status: "rejected", reason: k },
        Aa()
      );
    } finally {
      B.p = r, m !== null && v.types !== null && (m.types = v.types), X.T = m;
    }
  }
  function Ry() {
  }
  function ih(l, n, u, c) {
    if (l.tag !== 5) throw Error(U(476));
    var s = tr(l).queue;
    Uu(
      l,
      s,
      n,
      ee,
      u === null ? Ry : function() {
        return of(l), u(c);
      }
    );
  }
  function tr(l) {
    var n = l.memoizedState;
    if (n !== null) return n;
    n = {
      memoizedState: ee,
      baseState: ee,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Mu,
        lastRenderedState: ee
      },
      next: null
    };
    var u = {};
    return n.next = {
      memoizedState: u,
      baseState: u,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Mu,
        lastRenderedState: u
      },
      next: null
    }, l.memoizedState = n, l = l.alternate, l !== null && (l.memoizedState = n), n;
  }
  function of(l) {
    var n = tr(l);
    n.next === null && (n = l.alternate.memoizedState), Ic(
      l,
      n.next.queue,
      {},
      Aa()
    );
  }
  function Rt() {
    return Te(rl);
  }
  function lg() {
    return Kt().memoizedState;
  }
  function ag() {
    return Kt().memoizedState;
  }
  function ng(l) {
    for (var n = l.return; n !== null; ) {
      switch (n.tag) {
        case 24:
        case 3:
          var u = Aa();
          l = yi(u);
          var c = pi(n, l, u);
          c !== null && (Za(c, n, u), Du(c, n, u)), n = { cache: Yd() }, l.payload = n;
          return;
      }
      n = n.return;
    }
  }
  function xu(l, n, u) {
    var c = Aa();
    u = {
      lane: c,
      revertLane: 0,
      gesture: null,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Ei(l) ? Cy(n, u) : (u = En(l, n, u, c), u !== null && (Za(u, l, c), ch(u, n, c)));
  }
  function My(l, n, u) {
    var c = Aa();
    Ic(l, n, u, c);
  }
  function Ic(l, n, u, c) {
    var s = {
      lane: c,
      revertLane: 0,
      gesture: null,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Ei(l)) Cy(n, s);
    else {
      var r = l.alternate;
      if (l.lanes === 0 && (r === null || r.lanes === 0) && (r = n.lastRenderedReducer, r !== null))
        try {
          var m = n.lastRenderedState, v = r(m, u);
          if (s.hasEagerState = !0, s.eagerState = v, Ua(v, m))
            return tn(l, n, s, 0), xt === null && en(), !1;
        } catch {
        }
      if (u = En(l, n, s, c), u !== null)
        return Za(u, l, c), ch(u, n, c), !0;
    }
    return !1;
  }
  function Pc(l, n, u, c) {
    if (c = {
      lane: 2,
      revertLane: so(),
      gesture: null,
      action: c,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Ei(l)) {
      if (n) throw Error(U(479));
    } else
      n = En(
        l,
        u,
        c,
        2
      ), n !== null && Za(n, l, 2);
  }
  function Ei(l) {
    var n = l.alternate;
    return l === Xe || n !== null && n === Xe;
  }
  function Cy(l, n) {
    vi = Zs = !0;
    var u = l.pending;
    u === null ? n.next = n : (n.next = u.next, u.next = n), l.pending = n;
  }
  function ch(l, n, u) {
    if ((u & 4194048) !== 0) {
      var c = n.lanes;
      c &= l.pendingLanes, u |= c, n.lanes = u, is(l, u);
    }
  }
  var ff = {
    readContext: Te,
    use: nf,
    useCallback: el,
    useContext: el,
    useEffect: el,
    useImperativeHandle: el,
    useLayoutEffect: el,
    useInsertionEffect: el,
    useMemo: el,
    useReducer: el,
    useRef: el,
    useState: el,
    useDebugValue: el,
    useDeferredValue: el,
    useTransition: el,
    useSyncExternalStore: el,
    useId: el,
    useHostTransitionStatus: el,
    useFormState: el,
    useActionState: el,
    useOptimistic: el,
    useMemoCache: el,
    useCacheRefresh: el
  };
  ff.useEffectEvent = el;
  var ug = {
    readContext: Te,
    use: nf,
    useCallback: function(l, n) {
      return Vl().memoizedState = [
        l,
        n === void 0 ? null : n
      ], l;
    },
    useContext: Te,
    useEffect: Pd,
    useImperativeHandle: function(l, n, u) {
      u = u != null ? u.concat([l]) : null, Is(
        4194308,
        4,
        _y.bind(null, n, l),
        u
      );
    },
    useLayoutEffect: function(l, n) {
      return Is(4194308, 4, l, n);
    },
    useInsertionEffect: function(l, n) {
      Is(4, 2, l, n);
    },
    useMemo: function(l, n) {
      var u = Vl();
      n = n === void 0 ? null : n;
      var c = l();
      if (ic) {
        _a(!0);
        try {
          l();
        } finally {
          _a(!1);
        }
      }
      return u.memoizedState = [c, n], c;
    },
    useReducer: function(l, n, u) {
      var c = Vl();
      if (u !== void 0) {
        var s = u(n);
        if (ic) {
          _a(!0);
          try {
            u(n);
          } finally {
            _a(!1);
          }
        }
      } else s = n;
      return c.memoizedState = c.baseState = s, l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: l,
        lastRenderedState: s
      }, c.queue = l, l = l.dispatch = xu.bind(
        null,
        Xe,
        l
      ), [c.memoizedState, l];
    },
    useRef: function(l) {
      var n = Vl();
      return l = { current: l }, n.memoizedState = l;
    },
    useState: function(l) {
      l = Ws(l);
      var n = l.queue, u = My.bind(null, Xe, n);
      return n.dispatch = u, [l.memoizedState, u];
    },
    useDebugValue: ah,
    useDeferredValue: function(l, n) {
      var u = Vl();
      return Dy(u, l, n);
    },
    useTransition: function() {
      var l = Ws(!1);
      return l = Uu.bind(
        null,
        Xe,
        l.queue,
        !0,
        !1
      ), Vl().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, n, u) {
      var c = Xe, s = Vl();
      if (ut) {
        if (u === void 0)
          throw Error(U(407));
        u = u();
      } else {
        if (u = n(), xt === null)
          throw Error(U(349));
        (it & 127) !== 0 || vy(c, n, u);
      }
      s.memoizedState = u;
      var r = { value: u, getSnapshot: n };
      return s.queue = r, Pd(Sy.bind(null, c, r, l), [
        l
      ]), c.flags |= 2048, Fc(
        9,
        { destroy: void 0 },
        ks.bind(
          null,
          c,
          r,
          u,
          n
        ),
        null
      ), u;
    },
    useId: function() {
      var l = Vl(), n = xt.identifierPrefix;
      if (ut) {
        var u = ja, c = un;
        u = (c & ~(1 << 32 - Ml(c) - 1)).toString(32) + u, n = "_" + n + "R_" + u, u = tf++, 0 < u && (n += "H" + u.toString(32)), n += "_";
      } else
        u = yy++, n = "_" + n + "r_" + u.toString(32) + "_";
      return l.memoizedState = n;
    },
    useHostTransitionStatus: Rt,
    useFormState: Fs,
    useActionState: Fs,
    useOptimistic: function(l) {
      var n = Vl();
      n.memoizedState = n.baseState = l;
      var u = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return n.queue = u, n = Pc.bind(
        null,
        Xe,
        !0,
        u
      ), u.dispatch = n, [l, n];
    },
    useMemoCache: Ks,
    useCacheRefresh: function() {
      return Vl().memoizedState = ng.bind(
        null,
        Xe
      );
    },
    useEffectEvent: function(l) {
      var n = Vl(), u = { impl: l };
      return n.memoizedState = u, function() {
        if ((mt & 2) !== 0)
          throw Error(U(440));
        return u.impl.apply(void 0, arguments);
      };
    }
  }, Uy = {
    readContext: Te,
    use: nf,
    useCallback: Cu,
    useContext: Te,
    useEffect: Ps,
    useImperativeHandle: lh,
    useInsertionEffect: er,
    useLayoutEffect: th,
    useMemo: nh,
    useReducer: $s,
    useRef: zy,
    useState: function() {
      return $s(Mu);
    },
    useDebugValue: ah,
    useDeferredValue: function(l, n) {
      var u = Kt();
      return uh(
        u,
        Dt.memoizedState,
        l,
        n
      );
    },
    useTransition: function() {
      var l = $s(Mu)[0], n = Kt().memoizedState;
      return [
        typeof l == "boolean" ? l : af(l),
        n
      ];
    },
    useSyncExternalStore: gy,
    useId: lg,
    useHostTransitionStatus: Rt,
    useFormState: Oy,
    useActionState: Oy,
    useOptimistic: function(l, n) {
      var u = Kt();
      return P0(u, Dt, l, n);
    },
    useMemoCache: Ks,
    useCacheRefresh: ag
  };
  Uy.useEffectEvent = eh;
  var xy = {
    readContext: Te,
    use: nf,
    useCallback: Cu,
    useContext: Te,
    useEffect: Ps,
    useImperativeHandle: lh,
    useInsertionEffect: er,
    useLayoutEffect: th,
    useMemo: nh,
    useReducer: Kd,
    useRef: zy,
    useState: function() {
      return Kd(Mu);
    },
    useDebugValue: ah,
    useDeferredValue: function(l, n) {
      var u = Kt();
      return Dt === null ? Dy(u, l, n) : uh(
        u,
        Dt.memoizedState,
        l,
        n
      );
    },
    useTransition: function() {
      var l = Kd(Mu)[0], n = Kt().memoizedState;
      return [
        typeof l == "boolean" ? l : af(l),
        n
      ];
    },
    useSyncExternalStore: gy,
    useId: lg,
    useHostTransitionStatus: Rt,
    useFormState: Id,
    useActionState: Id,
    useOptimistic: function(l, n) {
      var u = Kt();
      return Dt !== null ? P0(u, Dt, l, n) : (u.baseState = l, [l, u.queue.dispatch]);
    },
    useMemoCache: Ks,
    useCacheRefresh: ag
  };
  xy.useEffectEvent = eh;
  function Hy(l, n, u, c) {
    n = l.memoizedState, u = u(c, n), u = u == null ? n : ye({}, n, u), l.memoizedState = u, l.lanes === 0 && (l.updateQueue.baseState = u);
  }
  var eo = {
    enqueueSetState: function(l, n, u) {
      l = l._reactInternals;
      var c = Aa(), s = yi(c);
      s.payload = n, u != null && (s.callback = u), n = pi(l, s, c), n !== null && (Za(n, l, c), Du(n, l, c));
    },
    enqueueReplaceState: function(l, n, u) {
      l = l._reactInternals;
      var c = Aa(), s = yi(c);
      s.tag = 1, s.payload = n, u != null && (s.callback = u), n = pi(l, s, c), n !== null && (Za(n, l, c), Du(n, l, c));
    },
    enqueueForceUpdate: function(l, n) {
      l = l._reactInternals;
      var u = Aa(), c = yi(u);
      c.tag = 2, n != null && (c.callback = n), n = pi(l, c, u), n !== null && (Za(n, l, u), Du(n, l, u));
    }
  };
  function Kn(l, n, u, c, s, r, m) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(c, r, m) : n.prototype && n.prototype.isPureReactComponent ? !Ki(u, c) || !Ki(s, r) : !0;
  }
  function Ny(l, n, u, c) {
    l = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(u, c), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(u, c), n.state !== l && eo.enqueueReplaceState(n, n.state, null);
  }
  function to(l, n) {
    var u = n;
    if ("ref" in n) {
      u = {};
      for (var c in n)
        c !== "ref" && (u[c] = n[c]);
    }
    if (l = l.defaultProps) {
      u === n && (u = ye({}, u));
      for (var s in l)
        u[s] === void 0 && (u[s] = l[s]);
    }
    return u;
  }
  function jy(l) {
    Fi(l);
  }
  function oh(l) {
    console.error(l);
  }
  function By(l) {
    Fi(l);
  }
  function sf(l, n) {
    try {
      var u = l.onUncaughtError;
      u(n.value, { componentStack: n.stack });
    } catch (c) {
      setTimeout(function() {
        throw c;
      });
    }
  }
  function fh(l, n, u) {
    try {
      var c = l.onCaughtError;
      c(u.value, {
        componentStack: u.stack,
        errorBoundary: n.tag === 1 ? n.stateNode : null
      });
    } catch (s) {
      setTimeout(function() {
        throw s;
      });
    }
  }
  function rf(l, n, u) {
    return u = yi(u), u.tag = 3, u.payload = { element: null }, u.callback = function() {
      sf(l, n);
    }, u;
  }
  function ig(l) {
    return l = yi(l), l.tag = 3, l;
  }
  function Yy(l, n, u, c) {
    var s = u.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var r = c.value;
      l.payload = function() {
        return s(r);
      }, l.callback = function() {
        fh(n, u, c);
      };
    }
    var m = u.stateNode;
    m !== null && typeof m.componentDidCatch == "function" && (l.callback = function() {
      fh(n, u, c), typeof s != "function" && (Lu === null ? Lu = /* @__PURE__ */ new Set([this]) : Lu.add(this));
      var v = c.stack;
      this.componentDidCatch(c.value, {
        componentStack: v !== null ? v : ""
      });
    });
  }
  function cg(l, n, u, c, s) {
    if (u.flags |= 32768, c !== null && typeof c == "object" && typeof c.then == "function") {
      if (n = u.alternate, n !== null && cn(
        n,
        u,
        s,
        !0
      ), u = ua.current, u !== null) {
        switch (u.tag) {
          case 31:
          case 13:
            return wa === null ? Eh() : u.alternate === null && $t === 0 && ($t = 3), u.flags &= -257, u.flags |= 65536, u.lanes = s, c === Fo ? u.flags |= 16384 : (n = u.updateQueue, n === null ? u.updateQueue = /* @__PURE__ */ new Set([c]) : n.add(c), Oh(l, c, s)), !1;
          case 22:
            return u.flags |= 65536, c === Fo ? u.flags |= 16384 : (n = u.updateQueue, n === null ? (n = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([c])
            }, u.updateQueue = n) : (u = n.retryQueue, u === null ? n.retryQueue = /* @__PURE__ */ new Set([c]) : u.add(c)), Oh(l, c, s)), !1;
        }
        throw Error(U(435, u.tag));
      }
      return Oh(l, c, s), Eh(), !1;
    }
    if (ut)
      return n = ua.current, n !== null ? ((n.flags & 65536) === 0 && (n.flags |= 256), n.flags |= 65536, n.lanes = s, c !== Au && (l = Error(U(422), { cause: c }), xs(an(l, u)))) : (c !== Au && (n = Error(U(423), {
        cause: c
      }), xs(
        an(n, u)
      )), l = l.current.alternate, l.flags |= 65536, s &= -s, l.lanes |= s, c = an(c, u), s = rf(
        l.stateNode,
        c,
        s
      ), ef(l, s), $t !== 4 && ($t = 2)), !1;
    var r = Error(U(520), { cause: c });
    if (r = an(r, u), fl === null ? fl = [r] : fl.push(r), $t !== 4 && ($t = 2), n === null) return !0;
    c = an(c, u), u = n;
    do {
      switch (u.tag) {
        case 3:
          return u.flags |= 65536, l = s & -s, u.lanes |= l, l = rf(u.stateNode, c, l), ef(u, l), !1;
        case 1:
          if (n = u.type, r = u.stateNode, (u.flags & 128) === 0 && (typeof n.getDerivedStateFromError == "function" || r !== null && typeof r.componentDidCatch == "function" && (Lu === null || !Lu.has(r))))
            return u.flags |= 65536, s &= -s, u.lanes |= s, s = ig(s), Yy(
              s,
              l,
              u,
              c
            ), ef(u, s), !1;
      }
      u = u.return;
    } while (u !== null);
    return !1;
  }
  var qy = Error(U(461)), ml = !1;
  function Ul(l, n, u, c) {
    n.child = l === null ? hy(n, null, u, c) : Jc(
      n,
      l.child,
      u,
      c
    );
  }
  function Hu(l, n, u, c, s) {
    u = u.render;
    var r = n.ref;
    if ("ref" in c) {
      var m = {};
      for (var v in c)
        v !== "ref" && (m[v] = c[v]);
    } else m = c;
    return _u(n), c = Si(
      l,
      n,
      u,
      m,
      r,
      s
    ), v = py(), l !== null && !ml ? (Jd(l, n, s), Nu(l, n, s)) : (ut && v && xd(n), n.flags |= 1, Ul(l, n, c, s), n.child);
  }
  function wy(l, n, u, c, s) {
    if (l === null) {
      var r = u.type;
      return typeof r == "function" && !Tn(r) && r.defaultProps === void 0 && u.compare === null ? (n.tag = 15, n.type = r, Gy(
        l,
        n,
        r,
        c,
        s
      )) : (l = _s(
        u.type,
        null,
        c,
        n,
        n.mode,
        s
      ), l.ref = n.ref, l.return = n, n.child = l);
    }
    if (r = l.child, !lo(l, s)) {
      var m = r.memoizedProps;
      if (u = u.compare, u = u !== null ? u : Ki, u(m, c) && l.ref === n.ref)
        return Nu(l, n, s);
    }
    return n.flags |= 1, l = ln(r, c), l.ref = n.ref, l.return = n, n.child = l;
  }
  function Gy(l, n, u, c, s) {
    if (l !== null) {
      var r = l.memoizedProps;
      if (Ki(r, c) && l.ref === n.ref)
        if (ml = !1, n.pendingProps = c = r, lo(l, s))
          (l.flags & 131072) !== 0 && (ml = !0);
        else
          return n.lanes = l.lanes, Nu(l, n, s);
    }
    return On(
      l,
      n,
      u,
      c,
      s
    );
  }
  function Xy(l, n, u, c) {
    var s = c.children, r = l !== null ? l.memoizedState : null;
    if (l === null && n.stateNode === null && (n.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), c.mode === "hidden") {
      if ((n.flags & 128) !== 0) {
        if (r = r !== null ? r.baseLanes | u : u, l !== null) {
          for (c = n.child = l.child, s = 0; c !== null; )
            s = s | c.lanes | c.childLanes, c = c.sibling;
          c = s & ~r;
        } else c = 0, n.child = null;
        return ar(
          l,
          n,
          r,
          u,
          c
        );
      }
      if ((u & 536870912) !== 0)
        n.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && qa(
          n,
          r !== null ? r.cachePool : null
        ), r !== null ? Xs(n, r) : my(), Vs(n);
      else
        return c = n.lanes = 536870912, ar(
          l,
          n,
          r !== null ? r.baseLanes | u : u,
          u,
          c
        );
    } else
      r !== null ? (qa(n, r.cachePool), Xs(n, r), Ru(), n.memoizedState = null) : (l !== null && qa(n, null), my(), Ru());
    return Ul(l, n, s, u), n.child;
  }
  function lr(l, n) {
    return l !== null && l.tag === 22 || n.stateNode !== null || (n.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), n.sibling;
  }
  function ar(l, n, u, c, s) {
    var r = hi();
    return r = r === null ? null : { parent: cl._currentValue, pool: r }, n.memoizedState = {
      baseLanes: u,
      cachePool: r
    }, l !== null && qa(n, null), my(), Vs(n), l !== null && cn(l, n, c, !0), n.childLanes = s, null;
  }
  function Jl(l, n) {
    return n = Ti(
      { mode: n.mode, children: n.children },
      l.mode
    ), n.ref = l.ref, l.child = n, n.return = l, n;
  }
  function Ly(l, n, u) {
    return Jc(n, l.child, null, u), l = Jl(n, n.pendingProps), l.flags |= 2, ia(n), n.memoizedState = null, l;
  }
  function Ga(l, n, u) {
    var c = n.pendingProps, s = (n.flags & 128) !== 0;
    if (n.flags &= -129, l === null) {
      if (ut) {
        if (c.mode === "hidden")
          return l = Jl(n, c), n.lanes = 536870912, lr(null, l);
        if (Qs(n), (l = wt) ? (l = Ze(
          l,
          Ba
        ), l = l !== null && l.data === "&" ? l : null, l !== null && (n.memoizedState = {
          dehydrated: l,
          treeContext: Ln !== null ? { id: un, overflow: ja } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, u = Rs(l), u.return = n, n.child = u, Sl = n, wt = null)) : l = null, l === null) throw ga(n);
        return n.lanes = 536870912, null;
      }
      return Jl(n, c);
    }
    var r = l.memoizedState;
    if (r !== null) {
      var m = r.dehydrated;
      if (Qs(n), s)
        if (n.flags & 256)
          n.flags &= -257, n = Ly(
            l,
            n,
            u
          );
        else if (n.memoizedState !== null)
          n.child = l.child, n.flags |= 128, n = null;
        else throw Error(U(558));
      else if (ml || cn(l, n, u, !1), s = (u & l.childLanes) !== 0, ml || s) {
        if (c = xt, c !== null && (m = cu(c, u), m !== 0 && m !== r.retryLane))
          throw r.retryLane = m, la(l, m), Za(c, l, m), qy;
        Eh(), n = Ly(
          l,
          n,
          u
        );
      } else
        l = r.treeContext, wt = kl(m.nextSibling), Sl = n, ut = !0, Tu = null, Ba = !1, l !== null && cy(n, l), n = Jl(n, c), n.flags |= 4096;
      return n;
    }
    return l = ln(l.child, {
      mode: c.mode,
      children: c.children
    }), l.ref = n.ref, n.child = l, l.return = n, l;
  }
  function nr(l, n) {
    var u = n.ref;
    if (u === null)
      l !== null && l.ref !== null && (n.flags |= 4194816);
    else {
      if (typeof u != "function" && typeof u != "object")
        throw Error(U(284));
      (l === null || l.ref !== u) && (n.flags |= 4194816);
    }
  }
  function On(l, n, u, c, s) {
    return _u(n), u = Si(
      l,
      n,
      u,
      c,
      void 0,
      s
    ), c = py(), l !== null && !ml ? (Jd(l, n, s), Nu(l, n, s)) : (ut && c && xd(n), n.flags |= 1, Ul(l, n, u, s), n.child);
  }
  function Qy(l, n, u, c, s, r) {
    return _u(n), n.updateQueue = null, u = Zd(
      n,
      c,
      u,
      s
    ), Vd(l), c = py(), l !== null && !ml ? (Jd(l, n, r), Nu(l, n, r)) : (ut && c && xd(n), n.flags |= 1, Ul(l, n, u, r), n.child);
  }
  function cc(l, n, u, c, s) {
    if (_u(n), n.stateNode === null) {
      var r = Gc, m = u.contextType;
      typeof m == "object" && m !== null && (r = Te(m)), r = new u(c, r), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = eo, n.stateNode = r, r._reactInternals = n, r = n.stateNode, r.props = c, r.state = n.memoizedState, r.refs = {}, Gd(n), m = u.contextType, r.context = typeof m == "object" && m !== null ? Te(m) : Gc, r.state = n.memoizedState, m = u.getDerivedStateFromProps, typeof m == "function" && (Hy(
        n,
        u,
        m,
        c
      ), r.state = n.memoizedState), typeof u.getDerivedStateFromProps == "function" || typeof r.getSnapshotBeforeUpdate == "function" || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (m = r.state, typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount(), m !== r.state && eo.enqueueReplaceState(r, r.state, null), uc(n, c, r, s), Gs(), r.state = n.memoizedState), typeof r.componentDidMount == "function" && (n.flags |= 4194308), c = !0;
    } else if (l === null) {
      r = n.stateNode;
      var v = n.memoizedProps, T = to(u, v);
      r.props = T;
      var H = r.context, V = u.contextType;
      m = Gc, typeof V == "object" && V !== null && (m = Te(V));
      var k = u.getDerivedStateFromProps;
      V = typeof k == "function" || typeof r.getSnapshotBeforeUpdate == "function", v = n.pendingProps !== v, V || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (v || H !== m) && Ny(
        n,
        r,
        c,
        m
      ), mi = !1;
      var j = n.memoizedState;
      r.state = j, uc(n, c, r, s), Gs(), H = n.memoizedState, v || j !== H || mi ? (typeof k == "function" && (Hy(
        n,
        u,
        k,
        c
      ), H = n.memoizedState), (T = mi || Kn(
        n,
        u,
        T,
        c,
        j,
        H,
        m
      )) ? (V || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount()), typeof r.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof r.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = c, n.memoizedState = H), r.props = c, r.state = H, r.context = m, c = T) : (typeof r.componentDidMount == "function" && (n.flags |= 4194308), c = !1);
    } else {
      r = n.stateNode, ws(l, n), m = n.memoizedProps, V = to(u, m), r.props = V, k = n.pendingProps, j = r.context, H = u.contextType, T = Gc, typeof H == "object" && H !== null && (T = Te(H)), v = u.getDerivedStateFromProps, (H = typeof v == "function" || typeof r.getSnapshotBeforeUpdate == "function") || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (m !== k || j !== T) && Ny(
        n,
        r,
        c,
        T
      ), mi = !1, j = n.memoizedState, r.state = j, uc(n, c, r, s), Gs();
      var w = n.memoizedState;
      m !== k || j !== w || mi || l !== null && l.dependencies !== null && na(l.dependencies) ? (typeof v == "function" && (Hy(
        n,
        u,
        v,
        c
      ), w = n.memoizedState), (V = mi || Kn(
        n,
        u,
        V,
        c,
        j,
        w,
        T
      ) || l !== null && l.dependencies !== null && na(l.dependencies)) ? (H || typeof r.UNSAFE_componentWillUpdate != "function" && typeof r.componentWillUpdate != "function" || (typeof r.componentWillUpdate == "function" && r.componentWillUpdate(c, w, T), typeof r.UNSAFE_componentWillUpdate == "function" && r.UNSAFE_componentWillUpdate(
        c,
        w,
        T
      )), typeof r.componentDidUpdate == "function" && (n.flags |= 4), typeof r.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof r.componentDidUpdate != "function" || m === l.memoizedProps && j === l.memoizedState || (n.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || m === l.memoizedProps && j === l.memoizedState || (n.flags |= 1024), n.memoizedProps = c, n.memoizedState = w), r.props = c, r.state = w, r.context = T, c = V) : (typeof r.componentDidUpdate != "function" || m === l.memoizedProps && j === l.memoizedState || (n.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || m === l.memoizedProps && j === l.memoizedState || (n.flags |= 1024), c = !1);
    }
    return r = c, nr(l, n), c = (n.flags & 128) !== 0, r || c ? (r = n.stateNode, u = c && typeof u.getDerivedStateFromError != "function" ? null : r.render(), n.flags |= 1, l !== null && c ? (n.child = Jc(
      n,
      l.child,
      null,
      s
    ), n.child = Jc(
      n,
      null,
      u,
      s
    )) : Ul(l, n, u, s), n.memoizedState = r.state, l = n.child) : l = Nu(
      l,
      n,
      s
    ), l;
  }
  function Vy(l, n, u, c) {
    return Qn(), n.flags |= 256, Ul(l, n, u, c), n.child;
  }
  var zn = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function ur(l) {
    return { baseLanes: l, cachePool: wd() };
  }
  function ir(l, n, u) {
    return l = l !== null ? l.childLanes & ~u : 0, n && (l |= La), l;
  }
  function _n(l, n, u) {
    var c = n.pendingProps, s = !1, r = (n.flags & 128) !== 0, m;
    if ((m = r) || (m = l !== null && l.memoizedState === null ? !1 : (Pt.current & 2) !== 0), m && (s = !0, n.flags &= -129), m = (n.flags & 32) !== 0, n.flags &= -33, l === null) {
      if (ut) {
        if (s ? gi(n) : Ru(), (l = wt) ? (l = Ze(
          l,
          Ba
        ), l = l !== null && l.data !== "&" ? l : null, l !== null && (n.memoizedState = {
          dehydrated: l,
          treeContext: Ln !== null ? { id: un, overflow: ja } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, u = Rs(l), u.return = n, n.child = u, Sl = n, wt = null)) : l = null, l === null) throw ga(n);
        return Un(l) ? n.lanes = 32 : n.lanes = 536870912, null;
      }
      var v = c.children;
      return c = c.fallback, s ? (Ru(), s = n.mode, v = Ti(
        { mode: "hidden", children: v },
        s
      ), c = Xc(
        c,
        s,
        u,
        null
      ), v.return = n, c.return = n, v.sibling = c, n.child = v, c = n.child, c.memoizedState = ur(u), c.childLanes = ir(
        l,
        m,
        u
      ), n.memoizedState = zn, lr(null, c)) : (gi(n), sh(n, v));
    }
    var T = l.memoizedState;
    if (T !== null && (v = T.dehydrated, v !== null)) {
      if (r)
        n.flags & 256 ? (gi(n), n.flags &= -257, n = rh(
          l,
          n,
          u
        )) : n.memoizedState !== null ? (Ru(), n.child = l.child, n.flags |= 128, n = null) : (Ru(), v = c.fallback, s = n.mode, c = Ti(
          { mode: "visible", children: c.children },
          s
        ), v = Xc(
          v,
          s,
          u,
          null
        ), v.flags |= 2, c.return = n, v.return = n, c.sibling = v, n.child = c, Jc(
          n,
          l.child,
          null,
          u
        ), c = n.child, c.memoizedState = ur(u), c.childLanes = ir(
          l,
          m,
          u
        ), n.memoizedState = zn, n = lr(null, c));
      else if (gi(n), Un(v)) {
        if (m = v.nextSibling && v.nextSibling.dataset, m) var H = m.dgst;
        m = H, c = Error(U(419)), c.stack = "", c.digest = m, xs({ value: c, source: null, stack: null }), n = rh(
          l,
          n,
          u
        );
      } else if (ml || cn(l, n, u, !1), m = (u & l.childLanes) !== 0, ml || m) {
        if (m = xt, m !== null && (c = cu(m, u), c !== 0 && c !== T.retryLane))
          throw T.retryLane = c, la(l, c), Za(m, l, c), qy;
        zp(v) || Eh(), n = rh(
          l,
          n,
          u
        );
      } else
        zp(v) ? (n.flags |= 192, n.child = l.child, n = null) : (l = T.treeContext, wt = kl(
          v.nextSibling
        ), Sl = n, ut = !0, Tu = null, Ba = !1, l !== null && cy(n, l), n = sh(
          n,
          c.children
        ), n.flags |= 4096);
      return n;
    }
    return s ? (Ru(), v = c.fallback, s = n.mode, T = l.child, H = T.sibling, c = ln(T, {
      mode: "hidden",
      children: c.children
    }), c.subtreeFlags = T.subtreeFlags & 65011712, H !== null ? v = ln(
      H,
      v
    ) : (v = Xc(
      v,
      s,
      u,
      null
    ), v.flags |= 2), v.return = n, c.return = n, c.sibling = v, n.child = c, lr(null, c), c = n.child, v = l.child.memoizedState, v === null ? v = ur(u) : (s = v.cachePool, s !== null ? (T = cl._currentValue, s = s.parent !== T ? { parent: T, pool: T } : s) : s = wd(), v = {
      baseLanes: v.baseLanes | u,
      cachePool: s
    }), c.memoizedState = v, c.childLanes = ir(
      l,
      m,
      u
    ), n.memoizedState = zn, lr(l.child, c)) : (gi(n), u = l.child, l = u.sibling, u = ln(u, {
      mode: "visible",
      children: c.children
    }), u.return = n, u.sibling = null, l !== null && (m = n.deletions, m === null ? (n.deletions = [l], n.flags |= 16) : m.push(l)), n.child = u, n.memoizedState = null, u);
  }
  function sh(l, n) {
    return n = Ti(
      { mode: "visible", children: n },
      l.mode
    ), n.return = l, l.child = n;
  }
  function Ti(l, n) {
    return l = Ha(22, l, null, n), l.lanes = 0, l;
  }
  function rh(l, n, u) {
    return Jc(n, l.child, null, u), l = sh(
      n,
      n.pendingProps.children
    ), l.flags |= 2, n.memoizedState = null, l;
  }
  function df(l, n, u) {
    l.lanes |= n;
    var c = l.alternate;
    c !== null && (c.lanes |= n), Hs(l.return, n, u);
  }
  function oc(l, n, u, c, s, r) {
    var m = l.memoizedState;
    m === null ? l.memoizedState = {
      isBackwards: n,
      rendering: null,
      renderingStartTime: 0,
      last: c,
      tail: u,
      tailMode: s,
      treeForkCount: r
    } : (m.isBackwards = n, m.rendering = null, m.renderingStartTime = 0, m.last = c, m.tail = u, m.tailMode = s, m.treeForkCount = r);
  }
  function Zy(l, n, u) {
    var c = n.pendingProps, s = c.revealOrder, r = c.tail;
    c = c.children;
    var m = Pt.current, v = (m & 2) !== 0;
    if (v ? (m = m & 1 | 2, n.flags |= 128) : m &= 1, $(Pt, m), Ul(l, n, c, u), c = ut ? Ko : 0, !v && l !== null && (l.flags & 128) !== 0)
      e: for (l = n.child; l !== null; ) {
        if (l.tag === 13)
          l.memoizedState !== null && df(l, u, n);
        else if (l.tag === 19)
          df(l, u, n);
        else if (l.child !== null) {
          l.child.return = l, l = l.child;
          continue;
        }
        if (l === n) break e;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === n)
            break e;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
    switch (s) {
      case "forwards":
        for (u = n.child, s = null; u !== null; )
          l = u.alternate, l !== null && $c(l) === null && (s = u), u = u.sibling;
        u = s, u === null ? (s = n.child, n.child = null) : (s = u.sibling, u.sibling = null), oc(
          n,
          !1,
          s,
          u,
          r,
          c
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (u = null, s = n.child, n.child = null; s !== null; ) {
          if (l = s.alternate, l !== null && $c(l) === null) {
            n.child = s;
            break;
          }
          l = s.sibling, s.sibling = u, u = s, s = l;
        }
        oc(
          n,
          !0,
          u,
          null,
          r,
          c
        );
        break;
      case "together":
        oc(
          n,
          !1,
          null,
          null,
          void 0,
          c
        );
        break;
      default:
        n.memoizedState = null;
    }
    return n.child;
  }
  function Nu(l, n, u) {
    if (l !== null && (n.dependencies = l.dependencies), Mn |= n.lanes, (u & n.childLanes) === 0)
      if (l !== null) {
        if (cn(
          l,
          n,
          u,
          !1
        ), (u & n.childLanes) === 0)
          return null;
      } else return null;
    if (l !== null && n.child !== l.child)
      throw Error(U(153));
    if (n.child !== null) {
      for (l = n.child, u = ln(l, l.pendingProps), n.child = u, u.return = n; l.sibling !== null; )
        l = l.sibling, u = u.sibling = ln(l, l.pendingProps), u.return = n;
      u.sibling = null;
    }
    return n.child;
  }
  function lo(l, n) {
    return (l.lanes & n) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && na(l)));
  }
  function og(l, n, u) {
    switch (n.tag) {
      case 3:
        We(n, n.stateNode.containerInfo), zu(n, cl, l.memoizedState.cache), Qn();
        break;
      case 27:
      case 5:
        ta(n);
        break;
      case 4:
        We(n, n.stateNode.containerInfo);
        break;
      case 10:
        zu(
          n,
          n.type,
          n.memoizedProps.value
        );
        break;
      case 31:
        if (n.memoizedState !== null)
          return n.flags |= 128, Qs(n), null;
        break;
      case 13:
        var c = n.memoizedState;
        if (c !== null)
          return c.dehydrated !== null ? (gi(n), n.flags |= 128, null) : (u & n.child.childLanes) !== 0 ? _n(l, n, u) : (gi(n), l = Nu(
            l,
            n,
            u
          ), l !== null ? l.sibling : null);
        gi(n);
        break;
      case 19:
        var s = (l.flags & 128) !== 0;
        if (c = (u & n.childLanes) !== 0, c || (cn(
          l,
          n,
          u,
          !1
        ), c = (u & n.childLanes) !== 0), s) {
          if (c)
            return Zy(
              l,
              n,
              u
            );
          n.flags |= 128;
        }
        if (s = n.memoizedState, s !== null && (s.rendering = null, s.tail = null, s.lastEffect = null), $(Pt, Pt.current), c) break;
        return null;
      case 22:
        return n.lanes = 0, Xy(
          l,
          n,
          u,
          n.pendingProps
        );
      case 24:
        zu(n, cl, l.memoizedState.cache);
    }
    return Nu(l, n, u);
  }
  function cr(l, n, u) {
    if (l !== null)
      if (l.memoizedProps !== n.pendingProps)
        ml = !0;
      else {
        if (!lo(l, u) && (n.flags & 128) === 0)
          return ml = !1, og(
            l,
            n,
            u
          );
        ml = (l.flags & 131072) !== 0;
      }
    else
      ml = !1, ut && (n.flags & 1048576) !== 0 && Cs(n, Ko, n.index);
    switch (n.lanes = 0, n.tag) {
      case 16:
        e: {
          var c = n.pendingProps;
          if (l = lc(n.elementType), n.type = l, typeof l == "function")
            Tn(l) ? (c = to(l, c), n.tag = 1, n = cc(
              null,
              n,
              l,
              c,
              u
            )) : (n.tag = 0, n = On(
              null,
              n,
              l,
              c,
              u
            ));
          else {
            if (l != null) {
              var s = l.$$typeof;
              if (s === It) {
                n.tag = 11, n = Hu(
                  null,
                  n,
                  l,
                  c,
                  u
                );
                break e;
              } else if (s === Ge) {
                n.tag = 14, n = wy(
                  null,
                  n,
                  l,
                  c,
                  u
                );
                break e;
              }
            }
            throw n = xe(l) || l, Error(U(306, n, ""));
          }
        }
        return n;
      case 0:
        return On(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 1:
        return c = n.type, s = to(
          c,
          n.pendingProps
        ), cc(
          l,
          n,
          c,
          s,
          u
        );
      case 3:
        e: {
          if (We(
            n,
            n.stateNode.containerInfo
          ), l === null) throw Error(U(387));
          c = n.pendingProps;
          var r = n.memoizedState;
          s = r.element, ws(l, n), uc(n, c, null, u);
          var m = n.memoizedState;
          if (c = m.cache, zu(n, cl, c), c !== r.cache && jd(
            n,
            [cl],
            u,
            !0
          ), Gs(), c = m.element, r.isDehydrated)
            if (r = {
              element: c,
              isDehydrated: !1,
              cache: m.cache
            }, n.updateQueue.baseState = r, n.memoizedState = r, n.flags & 256) {
              n = Vy(
                l,
                n,
                c,
                u
              );
              break e;
            } else if (c !== s) {
              s = an(
                Error(U(424)),
                n
              ), xs(s), n = Vy(
                l,
                n,
                c,
                u
              );
              break e;
            } else
              for (l = n.stateNode.containerInfo, l.nodeType === 9 ? l = l.body : l = l.nodeName === "HTML" ? l.ownerDocument.body : l, wt = kl(l.firstChild), Sl = n, ut = !0, Tu = null, Ba = !0, u = hy(
                n,
                null,
                c,
                u
              ), n.child = u; u; )
                u.flags = u.flags & -3 | 4096, u = u.sibling;
          else {
            if (Qn(), c === s) {
              n = Nu(
                l,
                n,
                u
              );
              break e;
            }
            Ul(l, n, c, u);
          }
          n = n.child;
        }
        return n;
      case 26:
        return nr(l, n), l === null ? (u = Mi(
          n.type,
          null,
          n.pendingProps,
          null
        )) ? n.memoizedState = u : ut || (u = n.type, l = n.pendingProps, c = Mr(
          De.current
        ).createElement(u), c[vl] = n, c[Vt] = l, $l(c, u, l), Al(c), n.stateNode = c) : n.memoizedState = Mi(
          n.type,
          l.memoizedProps,
          n.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return ta(n), l === null && ut && (c = n.stateNode = Fn(
          n.type,
          n.pendingProps,
          De.current
        ), Sl = n, Ba = !0, s = wt, Qu(n.type) ? (_f = s, wt = kl(c.firstChild)) : wt = s), Ul(
          l,
          n,
          n.pendingProps.children,
          u
        ), nr(l, n), l === null && (n.flags |= 4194304), n.child;
      case 5:
        return l === null && ut && ((s = c = wt) && (c = Op(
          c,
          n.type,
          n.pendingProps,
          Ba
        ), c !== null ? (n.stateNode = c, Sl = n, wt = kl(c.firstChild), Ba = !1, s = !0) : s = !1), s || ga(n)), ta(n), s = n.type, r = n.pendingProps, m = l !== null ? l.memoizedProps : null, c = r.children, Bh(s, r) ? c = null : m !== null && Bh(s, m) && (n.flags |= 32), n.memoizedState !== null && (s = Si(
          l,
          n,
          Pv,
          null,
          null,
          u
        ), rl._currentValue = s), nr(l, n), Ul(l, n, c, u), n.child;
      case 6:
        return l === null && ut && ((l = u = wt) && (u = n1(
          u,
          n.pendingProps,
          Ba
        ), u !== null ? (n.stateNode = u, Sl = n, wt = null, l = !0) : l = !1), l || ga(n)), null;
      case 13:
        return _n(l, n, u);
      case 4:
        return We(
          n,
          n.stateNode.containerInfo
        ), c = n.pendingProps, l === null ? n.child = Jc(
          n,
          null,
          c,
          u
        ) : Ul(l, n, c, u), n.child;
      case 11:
        return Hu(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 7:
        return Ul(
          l,
          n,
          n.pendingProps,
          u
        ), n.child;
      case 8:
        return Ul(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 12:
        return Ul(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 10:
        return c = n.pendingProps, zu(n, n.type, c.value), Ul(l, n, c.children, u), n.child;
      case 9:
        return s = n.type._context, c = n.pendingProps.children, _u(n), s = Te(s), c = c(s), n.flags |= 1, Ul(l, n, c, u), n.child;
      case 14:
        return wy(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 15:
        return Gy(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 19:
        return Zy(l, n, u);
      case 31:
        return Ga(l, n, u);
      case 22:
        return Xy(
          l,
          n,
          u,
          n.pendingProps
        );
      case 24:
        return _u(n), c = Te(cl), l === null ? (s = hi(), s === null && (s = xt, r = Yd(), s.pooledCache = r, r.refCount++, r !== null && (s.pooledCacheLanes |= u), s = r), n.memoizedState = { parent: c, cache: s }, Gd(n), zu(n, cl, s)) : ((l.lanes & u) !== 0 && (ws(l, n), uc(n, null, null, u), Gs()), s = l.memoizedState, r = n.memoizedState, s.parent !== c ? (s = { parent: c, cache: c }, n.memoizedState = s, n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = s), zu(n, cl, c)) : (c = r.cache, zu(n, cl, c), c !== s.cache && jd(
          n,
          [cl],
          u,
          !0
        ))), Ul(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 29:
        throw n.pendingProps;
    }
    throw Error(U(156, n.tag));
  }
  function ju(l) {
    l.flags |= 4;
  }
  function dh(l, n, u, c, s) {
    if ((n = (l.mode & 32) !== 0) && (n = !1), n) {
      if (l.flags |= 16777216, (s & 335544128) === s)
        if (l.stateNode.complete) l.flags |= 8192;
        else if (gf()) l.flags |= 8192;
        else
          throw ac = Fo, Bs;
    } else l.flags &= -16777217;
  }
  function fg(l, n) {
    if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !Vh(n))
      if (gf()) l.flags |= 8192;
      else
        throw ac = Fo, Bs;
  }
  function or(l, n) {
    n !== null && (l.flags |= 4), l.flags & 16384 && (n = l.tag !== 22 ? Be() : 536870912, l.lanes |= n, rc |= n);
  }
  function Kl(l, n) {
    if (!ut)
      switch (l.tailMode) {
        case "hidden":
          n = l.tail;
          for (var u = null; n !== null; )
            n.alternate !== null && (u = n), n = n.sibling;
          u === null ? l.tail = null : u.sibling = null;
          break;
        case "collapsed":
          u = l.tail;
          for (var c = null; u !== null; )
            u.alternate !== null && (c = u), u = u.sibling;
          c === null ? n || l.tail === null ? l.tail = null : l.tail.sibling = null : c.sibling = null;
      }
  }
  function Gt(l) {
    var n = l.alternate !== null && l.alternate.child === l.child, u = 0, c = 0;
    if (n)
      for (var s = l.child; s !== null; )
        u |= s.lanes | s.childLanes, c |= s.subtreeFlags & 65011712, c |= s.flags & 65011712, s.return = l, s = s.sibling;
    else
      for (s = l.child; s !== null; )
        u |= s.lanes | s.childLanes, c |= s.subtreeFlags, c |= s.flags, s.return = l, s = s.sibling;
    return l.subtreeFlags |= c, l.childLanes = u, n;
  }
  function tl(l, n, u) {
    var c = n.pendingProps;
    switch ($o(n), n.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Gt(n), null;
      case 1:
        return Gt(n), null;
      case 3:
        return u = n.stateNode, c = null, l !== null && (c = l.memoizedState.cache), n.memoizedState.cache !== c && (n.flags |= 2048), aa(cl), Et(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (l === null || l.child === null) && (Ou(n) ? ju(n) : l === null || l.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024, Hd())), Gt(n), null;
      case 26:
        var s = n.type, r = n.memoizedState;
        return l === null ? (ju(n), r !== null ? (Gt(n), fg(n, r)) : (Gt(n), dh(
          n,
          s,
          null,
          c,
          u
        ))) : r ? r !== l.memoizedState ? (ju(n), Gt(n), fg(n, r)) : (Gt(n), n.flags &= -16777217) : (l = l.memoizedProps, l !== c && ju(n), Gt(n), dh(
          n,
          s,
          l,
          c,
          u
        )), null;
      case 27:
        if (gn(n), u = De.current, s = n.type, l !== null && n.stateNode != null)
          l.memoizedProps !== c && ju(n);
        else {
          if (!c) {
            if (n.stateNode === null)
              throw Error(U(166));
            return Gt(n), null;
          }
          l = te.current, Ou(n) ? ko(n) : (l = Fn(s, c, u), n.stateNode = l, ju(n));
        }
        return Gt(n), null;
      case 5:
        if (gn(n), s = n.type, l !== null && n.stateNode != null)
          l.memoizedProps !== c && ju(n);
        else {
          if (!c) {
            if (n.stateNode === null)
              throw Error(U(166));
            return Gt(n), null;
          }
          if (r = te.current, Ou(n))
            ko(n);
          else {
            var m = Mr(
              De.current
            );
            switch (r) {
              case 1:
                r = m.createElementNS(
                  "http://www.w3.org/2000/svg",
                  s
                );
                break;
              case 2:
                r = m.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  s
                );
                break;
              default:
                switch (s) {
                  case "svg":
                    r = m.createElementNS(
                      "http://www.w3.org/2000/svg",
                      s
                    );
                    break;
                  case "math":
                    r = m.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      s
                    );
                    break;
                  case "script":
                    r = m.createElement("div"), r.innerHTML = "<script><\/script>", r = r.removeChild(
                      r.firstChild
                    );
                    break;
                  case "select":
                    r = typeof c.is == "string" ? m.createElement("select", {
                      is: c.is
                    }) : m.createElement("select"), c.multiple ? r.multiple = !0 : c.size && (r.size = c.size);
                    break;
                  default:
                    r = typeof c.is == "string" ? m.createElement(s, { is: c.is }) : m.createElement(s);
                }
            }
            r[vl] = n, r[Vt] = c;
            e: for (m = n.child; m !== null; ) {
              if (m.tag === 5 || m.tag === 6)
                r.appendChild(m.stateNode);
              else if (m.tag !== 4 && m.tag !== 27 && m.child !== null) {
                m.child.return = m, m = m.child;
                continue;
              }
              if (m === n) break e;
              for (; m.sibling === null; ) {
                if (m.return === null || m.return === n)
                  break e;
                m = m.return;
              }
              m.sibling.return = m.return, m = m.sibling;
            }
            n.stateNode = r;
            e: switch ($l(r, s, c), s) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                c = !!c.autoFocus;
                break e;
              case "img":
                c = !0;
                break e;
              default:
                c = !1;
            }
            c && ju(n);
          }
        }
        return Gt(n), dh(
          n,
          n.type,
          l === null ? null : l.memoizedProps,
          n.pendingProps,
          u
        ), null;
      case 6:
        if (l && n.stateNode != null)
          l.memoizedProps !== c && ju(n);
        else {
          if (typeof c != "string" && n.stateNode === null)
            throw Error(U(166));
          if (l = De.current, Ou(n)) {
            if (l = n.stateNode, u = n.memoizedProps, c = null, s = Sl, s !== null)
              switch (s.tag) {
                case 27:
                case 5:
                  c = s.memoizedProps;
              }
            l[vl] = n, l = !!(l.nodeValue === u || c !== null && c.suppressHydrationWarning === !0 || Sp(l.nodeValue, u)), l || ga(n, !0);
          } else
            l = Mr(l).createTextNode(
              c
            ), l[vl] = n, n.stateNode = l;
        }
        return Gt(n), null;
      case 31:
        if (u = n.memoizedState, l === null || l.memoizedState !== null) {
          if (c = Ou(n), u !== null) {
            if (l === null) {
              if (!c) throw Error(U(318));
              if (l = n.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(U(557));
              l[vl] = n;
            } else
              Qn(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            Gt(n), l = !1;
          } else
            u = Hd(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = u), l = !0;
          if (!l)
            return n.flags & 256 ? (ia(n), n) : (ia(n), null);
          if ((n.flags & 128) !== 0)
            throw Error(U(558));
        }
        return Gt(n), null;
      case 13:
        if (c = n.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (s = Ou(n), c !== null && c.dehydrated !== null) {
            if (l === null) {
              if (!s) throw Error(U(318));
              if (s = n.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(U(317));
              s[vl] = n;
            } else
              Qn(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            Gt(n), s = !1;
          } else
            s = Hd(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = s), s = !0;
          if (!s)
            return n.flags & 256 ? (ia(n), n) : (ia(n), null);
        }
        return ia(n), (n.flags & 128) !== 0 ? (n.lanes = u, n) : (u = c !== null, l = l !== null && l.memoizedState !== null, u && (c = n.child, s = null, c.alternate !== null && c.alternate.memoizedState !== null && c.alternate.memoizedState.cachePool !== null && (s = c.alternate.memoizedState.cachePool.pool), r = null, c.memoizedState !== null && c.memoizedState.cachePool !== null && (r = c.memoizedState.cachePool.pool), r !== s && (c.flags |= 2048)), u !== l && u && (n.child.flags |= 8192), or(n, n.updateQueue), Gt(n), null);
      case 4:
        return Et(), l === null && pp(n.stateNode.containerInfo), Gt(n), null;
      case 10:
        return aa(n.type), Gt(n), null;
      case 19:
        if (A(Pt), c = n.memoizedState, c === null) return Gt(n), null;
        if (s = (n.flags & 128) !== 0, r = c.rendering, r === null)
          if (s) Kl(c, !1);
          else {
            if ($t !== 0 || l !== null && (l.flags & 128) !== 0)
              for (l = n.child; l !== null; ) {
                if (r = $c(l), r !== null) {
                  for (n.flags |= 128, Kl(c, !1), l = r.updateQueue, n.updateQueue = l, or(n, l), n.subtreeFlags = 0, l = u, u = n.child; u !== null; )
                    I0(u, l), u = u.sibling;
                  return $(
                    Pt,
                    Pt.current & 1 | 2
                  ), ut && Eu(n, c.treeForkCount), n.child;
                }
                l = l.sibling;
              }
            c.tail !== null && Tl() > gr && (n.flags |= 128, s = !0, Kl(c, !1), n.lanes = 4194304);
          }
        else {
          if (!s)
            if (l = $c(r), l !== null) {
              if (n.flags |= 128, s = !0, l = l.updateQueue, n.updateQueue = l, or(n, l), Kl(c, !0), c.tail === null && c.tailMode === "hidden" && !r.alternate && !ut)
                return Gt(n), null;
            } else
              2 * Tl() - c.renderingStartTime > gr && u !== 536870912 && (n.flags |= 128, s = !0, Kl(c, !1), n.lanes = 4194304);
          c.isBackwards ? (r.sibling = n.child, n.child = r) : (l = c.last, l !== null ? l.sibling = r : n.child = r, c.last = r);
        }
        return c.tail !== null ? (l = c.tail, c.rendering = l, c.tail = l.sibling, c.renderingStartTime = Tl(), l.sibling = null, u = Pt.current, $(
          Pt,
          s ? u & 1 | 2 : u & 1
        ), ut && Eu(n, c.treeForkCount), l) : (Gt(n), null);
      case 22:
      case 23:
        return ia(n), Ls(), c = n.memoizedState !== null, l !== null ? l.memoizedState !== null !== c && (n.flags |= 8192) : c && (n.flags |= 8192), c ? (u & 536870912) !== 0 && (n.flags & 128) === 0 && (Gt(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : Gt(n), u = n.updateQueue, u !== null && or(n, u.retryQueue), u = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), c = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (c = n.memoizedState.cachePool.pool), c !== u && (n.flags |= 2048), l !== null && A(Ya), null;
      case 24:
        return u = null, l !== null && (u = l.memoizedState.cache), n.memoizedState.cache !== u && (n.flags |= 2048), aa(cl), Gt(n), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(U(156, n.tag));
  }
  function sg(l, n) {
    switch ($o(n), n.tag) {
      case 1:
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 3:
        return aa(cl), Et(), l = n.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (n.flags = l & -65537 | 128, n) : null;
      case 26:
      case 27:
      case 5:
        return gn(n), null;
      case 31:
        if (n.memoizedState !== null) {
          if (ia(n), n.alternate === null)
            throw Error(U(340));
          Qn();
        }
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 13:
        if (ia(n), l = n.memoizedState, l !== null && l.dehydrated !== null) {
          if (n.alternate === null)
            throw Error(U(340));
          Qn();
        }
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 19:
        return A(Pt), null;
      case 4:
        return Et(), null;
      case 10:
        return aa(n.type), null;
      case 22:
      case 23:
        return ia(n), Ls(), l !== null && A(Ya), l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 24:
        return aa(cl), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Jy(l, n) {
    switch ($o(n), n.tag) {
      case 3:
        aa(cl), Et();
        break;
      case 26:
      case 27:
      case 5:
        gn(n);
        break;
      case 4:
        Et();
        break;
      case 31:
        n.memoizedState !== null && ia(n);
        break;
      case 13:
        ia(n);
        break;
      case 19:
        A(Pt);
        break;
      case 10:
        aa(n.type);
        break;
      case 22:
      case 23:
        ia(n), Ls(), l !== null && A(Ya);
        break;
      case 24:
        aa(cl);
    }
  }
  function fr(l, n) {
    try {
      var u = n.updateQueue, c = u !== null ? u.lastEffect : null;
      if (c !== null) {
        var s = c.next;
        u = s;
        do {
          if ((u.tag & l) === l) {
            c = void 0;
            var r = u.create, m = u.inst;
            c = r(), m.destroy = c;
          }
          u = u.next;
        } while (u !== s);
      }
    } catch (v) {
      Mt(n, n.return, v);
    }
  }
  function Sa(l, n, u) {
    try {
      var c = n.updateQueue, s = c !== null ? c.lastEffect : null;
      if (s !== null) {
        var r = s.next;
        c = r;
        do {
          if ((c.tag & l) === l) {
            var m = c.inst, v = m.destroy;
            if (v !== void 0) {
              m.destroy = void 0, s = n;
              var T = u, H = v;
              try {
                H();
              } catch (V) {
                Mt(
                  s,
                  T,
                  V
                );
              }
            }
          }
          c = c.next;
        } while (c !== r);
      }
    } catch (V) {
      Mt(n, n.return, V);
    }
  }
  function ao(l) {
    var n = l.updateQueue;
    if (n !== null) {
      var u = l.stateNode;
      try {
        Ld(n, u);
      } catch (c) {
        Mt(l, l.return, c);
      }
    }
  }
  function hh(l, n, u) {
    u.props = to(
      l.type,
      l.memoizedProps
    ), u.state = l.memoizedState;
    try {
      u.componentWillUnmount();
    } catch (c) {
      Mt(l, n, c);
    }
  }
  function $n(l, n) {
    try {
      var u = l.ref;
      if (u !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var c = l.stateNode;
            break;
          case 30:
            c = l.stateNode;
            break;
          default:
            c = l.stateNode;
        }
        typeof u == "function" ? l.refCleanup = u(c) : u.current = c;
      }
    } catch (s) {
      Mt(l, n, s);
    }
  }
  function ba(l, n) {
    var u = l.ref, c = l.refCleanup;
    if (u !== null)
      if (typeof c == "function")
        try {
          c();
        } catch (s) {
          Mt(l, n, s);
        } finally {
          l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
        }
      else if (typeof u == "function")
        try {
          u(null);
        } catch (s) {
          Mt(l, n, s);
        }
      else u.current = null;
  }
  function Ky(l) {
    var n = l.type, u = l.memoizedProps, c = l.stateNode;
    try {
      e: switch (n) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          u.autoFocus && c.focus();
          break e;
        case "img":
          u.src ? c.src = u.src : u.srcSet && (c.srcset = u.srcSet);
      }
    } catch (s) {
      Mt(l, l.return, s);
    }
  }
  function mh(l, n, u) {
    try {
      var c = l.stateNode;
      a1(c, l.type, u, n), c[Vt] = n;
    } catch (s) {
      Mt(l, l.return, s);
    }
  }
  function $y(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && Qu(l.type) || l.tag === 4;
  }
  function yh(l) {
    e: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || $y(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && Qu(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue e;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function hf(l, n, u) {
    var c = l.tag;
    if (c === 5 || c === 6)
      l = l.stateNode, n ? (u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u).insertBefore(l, n) : (n = u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u, n.appendChild(l), u = u._reactRootContainer, u != null || n.onclick !== null || (n.onclick = Xl));
    else if (c !== 4 && (c === 27 && Qu(l.type) && (u = l.stateNode, n = null), l = l.child, l !== null))
      for (hf(l, n, u), l = l.sibling; l !== null; )
        hf(l, n, u), l = l.sibling;
  }
  function no(l, n, u) {
    var c = l.tag;
    if (c === 5 || c === 6)
      l = l.stateNode, n ? u.insertBefore(l, n) : u.appendChild(l);
    else if (c !== 4 && (c === 27 && Qu(l.type) && (u = l.stateNode), l = l.child, l !== null))
      for (no(l, n, u), l = l.sibling; l !== null; )
        no(l, n, u), l = l.sibling;
  }
  function ph(l) {
    var n = l.stateNode, u = l.memoizedProps;
    try {
      for (var c = l.type, s = n.attributes; s.length; )
        n.removeAttributeNode(s[0]);
      $l(n, c, u), n[vl] = l, n[Vt] = u;
    } catch (r) {
      Mt(l, l.return, r);
    }
  }
  var Bu = !1, bl = !1, ky = !1, Wy = typeof WeakSet == "function" ? WeakSet : Set, Ol = null;
  function e1(l, n) {
    if (l = l.containerInfo, Rr = Ci, l = qc(l), ri(l)) {
      if ("selectionStart" in l)
        var u = {
          start: l.selectionStart,
          end: l.selectionEnd
        };
      else
        e: {
          u = (u = l.ownerDocument) && u.defaultView || window;
          var c = u.getSelection && u.getSelection();
          if (c && c.rangeCount !== 0) {
            u = c.anchorNode;
            var s = c.anchorOffset, r = c.focusNode;
            c = c.focusOffset;
            try {
              u.nodeType, r.nodeType;
            } catch {
              u = null;
              break e;
            }
            var m = 0, v = -1, T = -1, H = 0, V = 0, k = l, j = null;
            t: for (; ; ) {
              for (var w; k !== u || s !== 0 && k.nodeType !== 3 || (v = m + s), k !== r || c !== 0 && k.nodeType !== 3 || (T = m + c), k.nodeType === 3 && (m += k.nodeValue.length), (w = k.firstChild) !== null; )
                j = k, k = w;
              for (; ; ) {
                if (k === l) break t;
                if (j === u && ++H === s && (v = m), j === r && ++V === c && (T = m), (w = k.nextSibling) !== null) break;
                k = j, j = k.parentNode;
              }
              k = w;
            }
            u = v === -1 || T === -1 ? null : { start: v, end: T };
          } else u = null;
        }
      u = u || { start: 0, end: 0 };
    } else u = null;
    for (jh = { focusedElem: l, selectionRange: u }, Ci = !1, Ol = n; Ol !== null; )
      if (n = Ol, l = n.child, (n.subtreeFlags & 1028) !== 0 && l !== null)
        l.return = n, Ol = l;
      else
        for (; Ol !== null; ) {
          switch (n = Ol, r = n.alternate, l = n.flags, n.tag) {
            case 0:
              if ((l & 4) !== 0 && (l = n.updateQueue, l = l !== null ? l.events : null, l !== null))
                for (u = 0; u < l.length; u++)
                  s = l[u], s.ref.impl = s.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && r !== null) {
                l = void 0, u = n, s = r.memoizedProps, r = r.memoizedState, c = u.stateNode;
                try {
                  var he = to(
                    u.type,
                    s
                  );
                  l = c.getSnapshotBeforeUpdate(
                    he,
                    r
                  ), c.__reactInternalSnapshotBeforeUpdate = l;
                } catch (Re) {
                  Mt(
                    u,
                    u.return,
                    Re
                  );
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (l = n.stateNode.containerInfo, u = l.nodeType, u === 9)
                  sl(l);
                else if (u === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      sl(l);
                      break;
                    default:
                      l.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((l & 1024) !== 0) throw Error(U(163));
          }
          if (l = n.sibling, l !== null) {
            l.return = n.return, Ol = l;
            break;
          }
          Ol = n.return;
        }
  }
  function uo(l, n, u) {
    var c = u.flags;
    switch (u.tag) {
      case 0:
      case 11:
      case 15:
        qu(l, u), c & 4 && fr(5, u);
        break;
      case 1:
        if (qu(l, u), c & 4)
          if (l = u.stateNode, n === null)
            try {
              l.componentDidMount();
            } catch (m) {
              Mt(u, u.return, m);
            }
          else {
            var s = to(
              u.type,
              n.memoizedProps
            );
            n = n.memoizedState;
            try {
              l.componentDidUpdate(
                s,
                n,
                l.__reactInternalSnapshotBeforeUpdate
              );
            } catch (m) {
              Mt(
                u,
                u.return,
                m
              );
            }
          }
        c & 64 && ao(u), c & 512 && $n(u, u.return);
        break;
      case 3:
        if (qu(l, u), c & 64 && (l = u.updateQueue, l !== null)) {
          if (n = null, u.child !== null)
            switch (u.child.tag) {
              case 27:
              case 5:
                n = u.child.stateNode;
                break;
              case 1:
                n = u.child.stateNode;
            }
          try {
            Ld(l, n);
          } catch (m) {
            Mt(u, u.return, m);
          }
        }
        break;
      case 27:
        n === null && c & 4 && ph(u);
      case 26:
      case 5:
        qu(l, u), n === null && c & 4 && Ky(u), c & 512 && $n(u, u.return);
        break;
      case 12:
        qu(l, u);
        break;
      case 31:
        qu(l, u), c & 4 && Iy(l, u);
        break;
      case 13:
        qu(l, u), c & 4 && rg(l, u), c & 64 && (l = u.memoizedState, l !== null && (l = l.dehydrated, l !== null && (u = l1.bind(
          null,
          u
        ), zf(l, u))));
        break;
      case 22:
        if (c = u.memoizedState !== null || Bu, !c) {
          n = n !== null && n.memoizedState !== null || bl, s = Bu;
          var r = bl;
          Bu = c, (bl = n) && !r ? Ai(
            l,
            u,
            (u.subtreeFlags & 8772) !== 0
          ) : qu(l, u), Bu = s, bl = r;
        }
        break;
      case 30:
        break;
      default:
        qu(l, u);
    }
  }
  function sr(l) {
    var n = l.alternate;
    n !== null && (l.alternate = null, sr(n)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (n = l.stateNode, n !== null && Li(n)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var Zt = null, ca = !1;
  function Yu(l, n, u) {
    for (u = u.child; u !== null; )
      Fy(l, n, u), u = u.sibling;
  }
  function Fy(l, n, u) {
    if (gl && typeof gl.onCommitFiberUnmount == "function")
      try {
        gl.onCommitFiberUnmount(wn, u);
      } catch {
      }
    switch (u.tag) {
      case 26:
        bl || ba(u, n), Yu(
          l,
          n,
          u
        ), u.memoizedState ? u.memoizedState.count-- : u.stateNode && (u = u.stateNode, u.parentNode.removeChild(u));
        break;
      case 27:
        bl || ba(u, n);
        var c = Zt, s = ca;
        Qu(u.type) && (Zt = u.stateNode, ca = !1), Yu(
          l,
          n,
          u
        ), Di(u.stateNode), Zt = c, ca = s;
        break;
      case 5:
        bl || ba(u, n);
      case 6:
        if (c = Zt, s = ca, Zt = null, Yu(
          l,
          n,
          u
        ), Zt = c, ca = s, Zt !== null)
          if (ca)
            try {
              (Zt.nodeType === 9 ? Zt.body : Zt.nodeName === "HTML" ? Zt.ownerDocument.body : Zt).removeChild(u.stateNode);
            } catch (r) {
              Mt(
                u,
                n,
                r
              );
            }
          else
            try {
              Zt.removeChild(u.stateNode);
            } catch (r) {
              Mt(
                u,
                n,
                r
              );
            }
        break;
      case 18:
        Zt !== null && (ca ? (l = Zt, Cr(
          l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
          u.stateNode
        ), Cf(l)) : Cr(Zt, u.stateNode));
        break;
      case 4:
        c = Zt, s = ca, Zt = u.stateNode.containerInfo, ca = !0, Yu(
          l,
          n,
          u
        ), Zt = c, ca = s;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Sa(2, u, n), bl || Sa(4, u, n), Yu(
          l,
          n,
          u
        );
        break;
      case 1:
        bl || (ba(u, n), c = u.stateNode, typeof c.componentWillUnmount == "function" && hh(
          u,
          n,
          c
        )), Yu(
          l,
          n,
          u
        );
        break;
      case 21:
        Yu(
          l,
          n,
          u
        );
        break;
      case 22:
        bl = (c = bl) || u.memoizedState !== null, Yu(
          l,
          n,
          u
        ), bl = c;
        break;
      default:
        Yu(
          l,
          n,
          u
        );
    }
  }
  function Iy(l, n) {
    if (n.memoizedState === null && (l = n.alternate, l !== null && (l = l.memoizedState, l !== null))) {
      l = l.dehydrated;
      try {
        Cf(l);
      } catch (u) {
        Mt(n, n.return, u);
      }
    }
  }
  function rg(l, n) {
    if (n.memoizedState === null && (l = n.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        Cf(l);
      } catch (u) {
        Mt(n, n.return, u);
      }
  }
  function dg(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var n = l.stateNode;
        return n === null && (n = l.stateNode = new Wy()), n;
      case 22:
        return l = l.stateNode, n = l._retryCache, n === null && (n = l._retryCache = new Wy()), n;
      default:
        throw Error(U(435, l.tag));
    }
  }
  function fc(l, n) {
    var u = dg(l);
    n.forEach(function(c) {
      if (!u.has(c)) {
        u.add(c);
        var s = on.bind(null, l, c);
        c.then(s, s);
      }
    });
  }
  function Ea(l, n) {
    var u = n.deletions;
    if (u !== null)
      for (var c = 0; c < u.length; c++) {
        var s = u[c], r = l, m = n, v = m;
        e: for (; v !== null; ) {
          switch (v.tag) {
            case 27:
              if (Qu(v.type)) {
                Zt = v.stateNode, ca = !1;
                break e;
              }
              break;
            case 5:
              Zt = v.stateNode, ca = !1;
              break e;
            case 3:
            case 4:
              Zt = v.stateNode.containerInfo, ca = !0;
              break e;
          }
          v = v.return;
        }
        if (Zt === null) throw Error(U(160));
        Fy(r, m, s), Zt = null, ca = !1, r = s.alternate, r !== null && (r.return = null), s.return = null;
      }
    if (n.subtreeFlags & 13886)
      for (n = n.child; n !== null; )
        vt(n, l), n = n.sibling;
  }
  var Dn = null;
  function vt(l, n) {
    var u = l.alternate, c = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Ea(n, l), oa(l), c & 4 && (Sa(3, l, l.return), fr(3, l), Sa(5, l, l.return));
        break;
      case 1:
        Ea(n, l), oa(l), c & 512 && (bl || u === null || ba(u, u.return)), c & 64 && Bu && (l = l.updateQueue, l !== null && (c = l.callbacks, c !== null && (u = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = u === null ? c : u.concat(c))));
        break;
      case 26:
        var s = Dn;
        if (Ea(n, l), oa(l), c & 512 && (bl || u === null || ba(u, u.return)), c & 4) {
          var r = u !== null ? u.memoizedState : null;
          if (c = l.memoizedState, u === null)
            if (c === null)
              if (l.stateNode === null) {
                e: {
                  c = l.type, u = l.memoizedProps, s = s.ownerDocument || s;
                  t: switch (c) {
                    case "title":
                      r = s.getElementsByTagName("title")[0], (!r || r[Yo] || r[vl] || r.namespaceURI === "http://www.w3.org/2000/svg" || r.hasAttribute("itemprop")) && (r = s.createElement(c), s.head.insertBefore(
                        r,
                        s.querySelector("head > title")
                      )), $l(r, c, u), r[vl] = l, Al(r), c = r;
                      break e;
                    case "link":
                      var m = Qh(
                        "link",
                        "href",
                        s
                      ).get(c + (u.href || ""));
                      if (m) {
                        for (var v = 0; v < m.length; v++)
                          if (r = m[v], r.getAttribute("href") === (u.href == null || u.href === "" ? null : u.href) && r.getAttribute("rel") === (u.rel == null ? null : u.rel) && r.getAttribute("title") === (u.title == null ? null : u.title) && r.getAttribute("crossorigin") === (u.crossOrigin == null ? null : u.crossOrigin)) {
                            m.splice(v, 1);
                            break t;
                          }
                      }
                      r = s.createElement(c), $l(r, c, u), s.head.appendChild(r);
                      break;
                    case "meta":
                      if (m = Qh(
                        "meta",
                        "content",
                        s
                      ).get(c + (u.content || ""))) {
                        for (v = 0; v < m.length; v++)
                          if (r = m[v], r.getAttribute("content") === (u.content == null ? null : "" + u.content) && r.getAttribute("name") === (u.name == null ? null : u.name) && r.getAttribute("property") === (u.property == null ? null : u.property) && r.getAttribute("http-equiv") === (u.httpEquiv == null ? null : u.httpEquiv) && r.getAttribute("charset") === (u.charSet == null ? null : u.charSet)) {
                            m.splice(v, 1);
                            break t;
                          }
                      }
                      r = s.createElement(c), $l(r, c, u), s.head.appendChild(r);
                      break;
                    default:
                      throw Error(U(468, c));
                  }
                  r[vl] = l, Al(r), c = r;
                }
                l.stateNode = c;
              } else
                Cp(
                  s,
                  l.type,
                  l.stateNode
                );
            else
              l.stateNode = Mp(
                s,
                c,
                l.memoizedProps
              );
          else
            r !== c ? (r === null ? u.stateNode !== null && (u = u.stateNode, u.parentNode.removeChild(u)) : r.count--, c === null ? Cp(
              s,
              l.type,
              l.stateNode
            ) : Mp(
              s,
              c,
              l.memoizedProps
            )) : c === null && l.stateNode !== null && mh(
              l,
              l.memoizedProps,
              u.memoizedProps
            );
        }
        break;
      case 27:
        Ea(n, l), oa(l), c & 512 && (bl || u === null || ba(u, u.return)), u !== null && c & 4 && mh(
          l,
          l.memoizedProps,
          u.memoizedProps
        );
        break;
      case 5:
        if (Ea(n, l), oa(l), c & 512 && (bl || u === null || ba(u, u.return)), l.flags & 32) {
          s = l.stateNode;
          try {
            Cc(s, "");
          } catch (he) {
            Mt(l, l.return, he);
          }
        }
        c & 4 && l.stateNode != null && (s = l.memoizedProps, mh(
          l,
          s,
          u !== null ? u.memoizedProps : s
        )), c & 1024 && (ky = !0);
        break;
      case 6:
        if (Ea(n, l), oa(l), c & 4) {
          if (l.stateNode === null)
            throw Error(U(162));
          c = l.memoizedProps, u = l.stateNode;
          try {
            u.nodeValue = c;
          } catch (he) {
            Mt(l, l.return, he);
          }
        }
        break;
      case 3:
        if (Nr = null, s = Dn, Dn = mo(n.containerInfo), Ea(n, l), Dn = s, oa(l), c & 4 && u !== null && u.memoizedState.isDehydrated)
          try {
            Cf(n.containerInfo);
          } catch (he) {
            Mt(l, l.return, he);
          }
        ky && (ky = !1, hg(l));
        break;
      case 4:
        c = Dn, Dn = mo(
          l.stateNode.containerInfo
        ), Ea(n, l), oa(l), Dn = c;
        break;
      case 12:
        Ea(n, l), oa(l);
        break;
      case 31:
        Ea(n, l), oa(l), c & 4 && (c = l.updateQueue, c !== null && (l.updateQueue = null, fc(l, c)));
        break;
      case 13:
        Ea(n, l), oa(l), l.child.flags & 8192 && l.memoizedState !== null != (u !== null && u.memoizedState !== null) && (pr = Tl()), c & 4 && (c = l.updateQueue, c !== null && (l.updateQueue = null, fc(l, c)));
        break;
      case 22:
        s = l.memoizedState !== null;
        var T = u !== null && u.memoizedState !== null, H = Bu, V = bl;
        if (Bu = H || s, bl = V || T, Ea(n, l), bl = V, Bu = H, oa(l), c & 8192)
          e: for (n = l.stateNode, n._visibility = s ? n._visibility & -2 : n._visibility | 1, s && (u === null || T || Bu || bl || io(l)), u = null, n = l; ; ) {
            if (n.tag === 5 || n.tag === 26) {
              if (u === null) {
                T = u = n;
                try {
                  if (r = T.stateNode, s)
                    m = r.style, typeof m.setProperty == "function" ? m.setProperty("display", "none", "important") : m.display = "none";
                  else {
                    v = T.stateNode;
                    var k = T.memoizedProps.style, j = k != null && k.hasOwnProperty("display") ? k.display : null;
                    v.style.display = j == null || typeof j == "boolean" ? "" : ("" + j).trim();
                  }
                } catch (he) {
                  Mt(T, T.return, he);
                }
              }
            } else if (n.tag === 6) {
              if (u === null) {
                T = n;
                try {
                  T.stateNode.nodeValue = s ? "" : T.memoizedProps;
                } catch (he) {
                  Mt(T, T.return, he);
                }
              }
            } else if (n.tag === 18) {
              if (u === null) {
                T = n;
                try {
                  var w = T.stateNode;
                  s ? Ap(w, !0) : Ap(T.stateNode, !1);
                } catch (he) {
                  Mt(T, T.return, he);
                }
              }
            } else if ((n.tag !== 22 && n.tag !== 23 || n.memoizedState === null || n === l) && n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === l) break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === l) break e;
              u === n && (u = null), n = n.return;
            }
            u === n && (u = null), n.sibling.return = n.return, n = n.sibling;
          }
        c & 4 && (c = l.updateQueue, c !== null && (u = c.retryQueue, u !== null && (c.retryQueue = null, fc(l, u))));
        break;
      case 19:
        Ea(n, l), oa(l), c & 4 && (c = l.updateQueue, c !== null && (l.updateQueue = null, fc(l, c)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Ea(n, l), oa(l);
    }
  }
  function oa(l) {
    var n = l.flags;
    if (n & 2) {
      try {
        for (var u, c = l.return; c !== null; ) {
          if ($y(c)) {
            u = c;
            break;
          }
          c = c.return;
        }
        if (u == null) throw Error(U(160));
        switch (u.tag) {
          case 27:
            var s = u.stateNode, r = yh(l);
            no(l, r, s);
            break;
          case 5:
            var m = u.stateNode;
            u.flags & 32 && (Cc(m, ""), u.flags &= -33);
            var v = yh(l);
            no(l, v, m);
            break;
          case 3:
          case 4:
            var T = u.stateNode.containerInfo, H = yh(l);
            hf(
              l,
              H,
              T
            );
            break;
          default:
            throw Error(U(161));
        }
      } catch (V) {
        Mt(l, l.return, V);
      }
      l.flags &= -3;
    }
    n & 4096 && (l.flags &= -4097);
  }
  function hg(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var n = l;
        hg(n), n.tag === 5 && n.flags & 1024 && n.stateNode.reset(), l = l.sibling;
      }
  }
  function qu(l, n) {
    if (n.subtreeFlags & 8772)
      for (n = n.child; n !== null; )
        uo(l, n.alternate, n), n = n.sibling;
  }
  function io(l) {
    for (l = l.child; l !== null; ) {
      var n = l;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Sa(4, n, n.return), io(n);
          break;
        case 1:
          ba(n, n.return);
          var u = n.stateNode;
          typeof u.componentWillUnmount == "function" && hh(
            n,
            n.return,
            u
          ), io(n);
          break;
        case 27:
          Di(n.stateNode);
        case 26:
        case 5:
          ba(n, n.return), io(n);
          break;
        case 22:
          n.memoizedState === null && io(n);
          break;
        case 30:
          io(n);
          break;
        default:
          io(n);
      }
      l = l.sibling;
    }
  }
  function Ai(l, n, u) {
    for (u = u && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null; ) {
      var c = n.alternate, s = l, r = n, m = r.flags;
      switch (r.tag) {
        case 0:
        case 11:
        case 15:
          Ai(
            s,
            r,
            u
          ), fr(4, r);
          break;
        case 1:
          if (Ai(
            s,
            r,
            u
          ), c = r, s = c.stateNode, typeof s.componentDidMount == "function")
            try {
              s.componentDidMount();
            } catch (H) {
              Mt(c, c.return, H);
            }
          if (c = r, s = c.updateQueue, s !== null) {
            var v = c.stateNode;
            try {
              var T = s.shared.hiddenCallbacks;
              if (T !== null)
                for (s.shared.hiddenCallbacks = null, s = 0; s < T.length; s++)
                  Kc(T[s], v);
            } catch (H) {
              Mt(c, c.return, H);
            }
          }
          u && m & 64 && ao(r), $n(r, r.return);
          break;
        case 27:
          ph(r);
        case 26:
        case 5:
          Ai(
            s,
            r,
            u
          ), u && c === null && m & 4 && Ky(r), $n(r, r.return);
          break;
        case 12:
          Ai(
            s,
            r,
            u
          );
          break;
        case 31:
          Ai(
            s,
            r,
            u
          ), u && m & 4 && Iy(s, r);
          break;
        case 13:
          Ai(
            s,
            r,
            u
          ), u && m & 4 && rg(s, r);
          break;
        case 22:
          r.memoizedState === null && Ai(
            s,
            r,
            u
          ), $n(r, r.return);
          break;
        case 30:
          break;
        default:
          Ai(
            s,
            r,
            u
          );
      }
      n = n.sibling;
    }
  }
  function rr(l, n) {
    var u = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), l = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (l = n.memoizedState.cachePool.pool), l !== u && (l != null && l.refCount++, u != null && Vc(u));
  }
  function gh(l, n) {
    l = null, n.alternate !== null && (l = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== l && (n.refCount++, l != null && Vc(l));
  }
  function Rn(l, n, u, c) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; )
        Py(
          l,
          n,
          u,
          c
        ), n = n.sibling;
  }
  function Py(l, n, u, c) {
    var s = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        Rn(
          l,
          n,
          u,
          c
        ), s & 2048 && fr(9, n);
        break;
      case 1:
        Rn(
          l,
          n,
          u,
          c
        );
        break;
      case 3:
        Rn(
          l,
          n,
          u,
          c
        ), s & 2048 && (l = null, n.alternate !== null && (l = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== l && (n.refCount++, l != null && Vc(l)));
        break;
      case 12:
        if (s & 2048) {
          Rn(
            l,
            n,
            u,
            c
          ), l = n.stateNode;
          try {
            var r = n.memoizedProps, m = r.id, v = r.onPostCommit;
            typeof v == "function" && v(
              m,
              n.alternate === null ? "mount" : "update",
              l.passiveEffectDuration,
              -0
            );
          } catch (T) {
            Mt(n, n.return, T);
          }
        } else
          Rn(
            l,
            n,
            u,
            c
          );
        break;
      case 31:
        Rn(
          l,
          n,
          u,
          c
        );
        break;
      case 13:
        Rn(
          l,
          n,
          u,
          c
        );
        break;
      case 23:
        break;
      case 22:
        r = n.stateNode, m = n.alternate, n.memoizedState !== null ? r._visibility & 2 ? Rn(
          l,
          n,
          u,
          c
        ) : dr(l, n) : r._visibility & 2 ? Rn(
          l,
          n,
          u,
          c
        ) : (r._visibility |= 2, wu(
          l,
          n,
          u,
          c,
          (n.subtreeFlags & 10256) !== 0 || !1
        )), s & 2048 && rr(m, n);
        break;
      case 24:
        Rn(
          l,
          n,
          u,
          c
        ), s & 2048 && gh(n.alternate, n);
        break;
      default:
        Rn(
          l,
          n,
          u,
          c
        );
    }
  }
  function wu(l, n, u, c, s) {
    for (s = s && ((n.subtreeFlags & 10256) !== 0 || !1), n = n.child; n !== null; ) {
      var r = l, m = n, v = u, T = c, H = m.flags;
      switch (m.tag) {
        case 0:
        case 11:
        case 15:
          wu(
            r,
            m,
            v,
            T,
            s
          ), fr(8, m);
          break;
        case 23:
          break;
        case 22:
          var V = m.stateNode;
          m.memoizedState !== null ? V._visibility & 2 ? wu(
            r,
            m,
            v,
            T,
            s
          ) : dr(
            r,
            m
          ) : (V._visibility |= 2, wu(
            r,
            m,
            v,
            T,
            s
          )), s && H & 2048 && rr(
            m.alternate,
            m
          );
          break;
        case 24:
          wu(
            r,
            m,
            v,
            T,
            s
          ), s && H & 2048 && gh(m.alternate, m);
          break;
        default:
          wu(
            r,
            m,
            v,
            T,
            s
          );
      }
      n = n.sibling;
    }
  }
  function dr(l, n) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) {
        var u = l, c = n, s = c.flags;
        switch (c.tag) {
          case 22:
            dr(u, c), s & 2048 && rr(
              c.alternate,
              c
            );
            break;
          case 24:
            dr(u, c), s & 2048 && gh(c.alternate, c);
            break;
          default:
            dr(u, c);
        }
        n = n.sibling;
      }
  }
  var hr = 8192;
  function Ta(l, n, u) {
    if (l.subtreeFlags & hr)
      for (l = l.child; l !== null; )
        mf(
          l,
          n,
          u
        ), l = l.sibling;
  }
  function mf(l, n, u) {
    switch (l.tag) {
      case 26:
        Ta(
          l,
          n,
          u
        ), l.flags & hr && l.memoizedState !== null && fn(
          u,
          Dn,
          l.memoizedState,
          l.memoizedProps
        );
        break;
      case 5:
        Ta(
          l,
          n,
          u
        );
        break;
      case 3:
      case 4:
        var c = Dn;
        Dn = mo(l.stateNode.containerInfo), Ta(
          l,
          n,
          u
        ), Dn = c;
        break;
      case 22:
        l.memoizedState === null && (c = l.alternate, c !== null && c.memoizedState !== null ? (c = hr, hr = 16777216, Ta(
          l,
          n,
          u
        ), hr = c) : Ta(
          l,
          n,
          u
        ));
        break;
      default:
        Ta(
          l,
          n,
          u
        );
    }
  }
  function mg(l) {
    var n = l.alternate;
    if (n !== null && (l = n.child, l !== null)) {
      n.child = null;
      do
        n = l.sibling, l.sibling = null, l = n;
      while (l !== null);
    }
  }
  function co(l) {
    var n = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (n !== null)
        for (var u = 0; u < n.length; u++) {
          var c = n[u];
          Ol = c, tp(
            c,
            l
          );
        }
      mg(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        ep(l), l = l.sibling;
  }
  function ep(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        co(l), l.flags & 2048 && Sa(9, l, l.return);
        break;
      case 3:
        co(l);
        break;
      case 12:
        co(l);
        break;
      case 22:
        var n = l.stateNode;
        l.memoizedState !== null && n._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (n._visibility &= -3, mr(l)) : co(l);
        break;
      default:
        co(l);
    }
  }
  function mr(l) {
    var n = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (n !== null)
        for (var u = 0; u < n.length; u++) {
          var c = n[u];
          Ol = c, tp(
            c,
            l
          );
        }
      mg(l);
    }
    for (l = l.child; l !== null; ) {
      switch (n = l, n.tag) {
        case 0:
        case 11:
        case 15:
          Sa(8, n, n.return), mr(n);
          break;
        case 22:
          u = n.stateNode, u._visibility & 2 && (u._visibility &= -3, mr(n));
          break;
        default:
          mr(n);
      }
      l = l.sibling;
    }
  }
  function tp(l, n) {
    for (; Ol !== null; ) {
      var u = Ol;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          Sa(8, u, n);
          break;
        case 23:
        case 22:
          if (u.memoizedState !== null && u.memoizedState.cachePool !== null) {
            var c = u.memoizedState.cachePool.pool;
            c != null && c.refCount++;
          }
          break;
        case 24:
          Vc(u.memoizedState.cache);
      }
      if (c = u.child, c !== null) c.return = u, Ol = c;
      else
        e: for (u = l; Ol !== null; ) {
          c = Ol;
          var s = c.sibling, r = c.return;
          if (sr(c), c === u) {
            Ol = null;
            break e;
          }
          if (s !== null) {
            s.return = r, Ol = s;
            break e;
          }
          Ol = r;
        }
    }
  }
  var lp = {
    getCacheForType: function(l) {
      var n = Te(cl), u = n.data.get(l);
      return u === void 0 && (u = l(), n.data.set(l, u)), u;
    },
    cacheSignal: function() {
      return Te(cl).controller.signal;
    }
  }, yg = typeof WeakMap == "function" ? WeakMap : Map, mt = 0, xt = null, et = null, it = 0, St = 0, Xa = null, qe = !1, sc = !1, yr = !1, Gu = 0, $t = 0, Mn = 0, Xu = 0, ap = 0, La = 0, rc = 0, fl = null, Qa = null, Cn = !1, pr = 0, Oi = 0, gr = 1 / 0, At = null, Lu = null, ft = 0, dc = null, oo = null, kn = 0, vh = 0, Va = null, np = null, fo = 0, Sh = null;
  function Aa() {
    return (mt & 2) !== 0 && it !== 0 ? it & -it : X.T !== null ? so() : U0();
  }
  function up() {
    if (La === 0)
      if ((it & 536870912) === 0 || ut) {
        var l = P;
        P <<= 1, (P & 3932160) === 0 && (P = 262144), La = l;
      } else La = 536870912;
    return l = ua.current, l !== null && (l.flags |= 32), La;
  }
  function Za(l, n, u) {
    (l === xt && (St === 2 || St === 9) || l.cancelPendingCommit !== null) && (yf(l, 0), zi(
      l,
      it,
      La,
      !1
    )), Da(l, u), ((mt & 2) === 0 || l !== xt) && (l === xt && ((mt & 2) === 0 && (Xu |= u), $t === 4 && zi(
      l,
      it,
      La,
      !1
    )), Wn(l));
  }
  function ip(l, n, u) {
    if ((mt & 6) !== 0) throw Error(U(327));
    var c = !u && (n & 127) === 0 && (n & l.expiredLanes) === 0 || pe(l, n), s = c ? t1(l, n) : cp(l, n, !0), r = c;
    do {
      if (s === 0) {
        sc && !c && zi(l, n, 0, !1);
        break;
      } else {
        if (u = l.current.alternate, r && !bh(u)) {
          s = cp(l, n, !1), r = !1;
          continue;
        }
        if (s === 2) {
          if (r = n, l.errorRecoveryDisabledLanes & r)
            var m = 0;
          else
            m = l.pendingLanes & -536870913, m = m !== 0 ? m : m & 536870912 ? 536870912 : 0;
          if (m !== 0) {
            n = m;
            e: {
              var v = l;
              s = fl;
              var T = v.current.memoizedState.isDehydrated;
              if (T && (yf(v, m).flags |= 256), m = cp(
                v,
                m,
                !1
              ), m !== 2) {
                if (yr && !T) {
                  v.errorRecoveryDisabledLanes |= r, Xu |= r, s = 4;
                  break e;
                }
                r = Qa, Qa = s, r !== null && (Qa === null ? Qa = r : Qa.push.apply(
                  Qa,
                  r
                ));
              }
              s = m;
            }
            if (r = !1, s !== 2) continue;
          }
        }
        if (s === 1) {
          yf(l, 0), zi(l, n, 0, !0);
          break;
        }
        e: {
          switch (c = l, r = s, r) {
            case 0:
            case 1:
              throw Error(U(345));
            case 4:
              if ((n & 4194048) !== n) break;
            case 6:
              zi(
                c,
                n,
                La,
                !qe
              );
              break e;
            case 2:
              Qa = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(U(329));
          }
          if ((n & 62914560) === n && (s = pr + 300 - Tl(), 10 < s)) {
            if (zi(
              c,
              n,
              La,
              !qe
            ), He(c, 0, !0) !== 0) break e;
            kn = n, c.timeoutHandle = jg(
              pg.bind(
                null,
                c,
                u,
                Qa,
                At,
                Cn,
                n,
                La,
                Xu,
                rc,
                qe,
                r,
                "Throttled",
                -0,
                0
              ),
              s
            );
            break e;
          }
          pg(
            c,
            u,
            Qa,
            At,
            Cn,
            n,
            La,
            Xu,
            rc,
            qe,
            r,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Wn(l);
  }
  function pg(l, n, u, c, s, r, m, v, T, H, V, k, j, w) {
    if (l.timeoutHandle = -1, k = n.subtreeFlags, k & 8192 || (k & 16785408) === 16785408) {
      k = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Xl
      }, mf(
        n,
        r,
        k
      );
      var he = (r & 62914560) === r ? pr - Tl() : (r & 4194048) === r ? Oi - Tl() : 0;
      if (he = In(
        k,
        he
      ), he !== null) {
        kn = r, l.cancelPendingCommit = he(
          Tg.bind(
            null,
            l,
            n,
            r,
            u,
            c,
            s,
            m,
            v,
            T,
            V,
            k,
            null,
            j,
            w
          )
        ), zi(l, r, m, !H);
        return;
      }
    }
    Tg(
      l,
      n,
      r,
      u,
      c,
      s,
      m,
      v,
      T
    );
  }
  function bh(l) {
    for (var n = l; ; ) {
      var u = n.tag;
      if ((u === 0 || u === 11 || u === 15) && n.flags & 16384 && (u = n.updateQueue, u !== null && (u = u.stores, u !== null)))
        for (var c = 0; c < u.length; c++) {
          var s = u[c], r = s.getSnapshot;
          s = s.value;
          try {
            if (!Ua(r(), s)) return !1;
          } catch {
            return !1;
          }
        }
      if (u = n.child, n.subtreeFlags & 16384 && u !== null)
        u.return = n, n = u;
      else {
        if (n === l) break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === l) return !0;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
    }
    return !0;
  }
  function zi(l, n, u, c) {
    n &= ~ap, n &= ~Xu, l.suspendedLanes |= n, l.pingedLanes &= ~n, c && (l.warmLanes |= n), c = l.expirationTimes;
    for (var s = n; 0 < s; ) {
      var r = 31 - Ml(s), m = 1 << r;
      c[r] = -1, s &= ~m;
    }
    u !== 0 && Ac(l, u, n);
  }
  function vr() {
    return (mt & 6) === 0 ? (Tr(0), !1) : !0;
  }
  function Sr() {
    if (et !== null) {
      if (St === 0)
        var l = et.return;
      else
        l = et, Vn = Ii = null, Wc(l), nc = null, Zc = 0, l = et;
      for (; l !== null; )
        Jy(l.alternate, l), l = l.return;
      et = null;
    }
  }
  function yf(l, n) {
    var u = l.timeoutHandle;
    u !== -1 && (l.timeoutHandle = -1, Yh(u)), u = l.cancelPendingCommit, u !== null && (l.cancelPendingCommit = null, u()), kn = 0, Sr(), xt = l, et = u = ln(l.current, null), it = n, St = 0, Xa = null, qe = !1, sc = pe(l, n), yr = !1, rc = La = ap = Xu = Mn = $t = 0, Qa = fl = null, Cn = !1, (n & 8) !== 0 && (n |= n & 32);
    var c = l.entangledLanes;
    if (c !== 0)
      for (l = l.entanglements, c &= n; 0 < c; ) {
        var s = 31 - Ml(c), r = 1 << s;
        n |= l[s], c &= ~r;
      }
    return Gu = n, en(), u;
  }
  function pf(l, n) {
    Xe = null, X.H = ff, n === Zn || n === tc ? (n = sy(), St = 3) : n === Bs ? (n = sy(), St = 4) : St = n === qy ? 8 : n !== null && typeof n == "object" && typeof n.then == "function" ? 6 : 1, Xa = n, et === null && ($t = 1, sf(
      l,
      an(n, l.current)
    ));
  }
  function gf() {
    var l = ua.current;
    return l === null ? !0 : (it & 4194048) === it ? wa === null : (it & 62914560) === it || (it & 536870912) !== 0 ? l === wa : !1;
  }
  function gg() {
    var l = X.H;
    return X.H = ff, l === null ? ff : l;
  }
  function vg() {
    var l = X.A;
    return X.A = lp, l;
  }
  function Eh() {
    $t = 4, qe || (it & 4194048) !== it && ua.current !== null || (sc = !0), (Mn & 134217727) === 0 && (Xu & 134217727) === 0 || xt === null || zi(
      xt,
      it,
      La,
      !1
    );
  }
  function cp(l, n, u) {
    var c = mt;
    mt |= 2;
    var s = gg(), r = vg();
    (xt !== l || it !== n) && (At = null, yf(l, n)), n = !1;
    var m = $t;
    e: do
      try {
        if (St !== 0 && et !== null) {
          var v = et, T = Xa;
          switch (St) {
            case 8:
              Sr(), m = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              ua.current === null && (n = !0);
              var H = St;
              if (St = 0, Xa = null, vf(l, v, T, H), u && sc) {
                m = 0;
                break e;
              }
              break;
            default:
              H = St, St = 0, Xa = null, vf(l, v, T, H);
          }
        }
        Sg(), m = $t;
        break;
      } catch (V) {
        pf(l, V);
      }
    while (!0);
    return n && l.shellSuspendCounter++, Vn = Ii = null, mt = c, X.H = s, X.A = r, et === null && (xt = null, it = 0, en()), m;
  }
  function Sg() {
    for (; et !== null; ) _i(et);
  }
  function t1(l, n) {
    var u = mt;
    mt |= 2;
    var c = gg(), s = vg();
    xt !== l || it !== n ? (At = null, gr = Tl() + 500, yf(l, n)) : sc = pe(
      l,
      n
    );
    e: do
      try {
        if (St !== 0 && et !== null) {
          n = et;
          var r = Xa;
          t: switch (St) {
            case 1:
              St = 0, Xa = null, vf(l, n, r, 1);
              break;
            case 2:
            case 9:
              if (Ys(r)) {
                St = 0, Xa = null, Eg(n);
                break;
              }
              n = function() {
                St !== 2 && St !== 9 || xt !== l || (St = 7), Wn(l);
              }, r.then(n, n);
              break e;
            case 3:
              St = 7;
              break e;
            case 4:
              St = 5;
              break e;
            case 7:
              Ys(r) ? (St = 0, Xa = null, Eg(n)) : (St = 0, Xa = null, vf(l, n, r, 7));
              break;
            case 5:
              var m = null;
              switch (et.tag) {
                case 26:
                  m = et.memoizedState;
                case 5:
                case 27:
                  var v = et;
                  if (m ? Vh(m) : v.stateNode.complete) {
                    St = 0, Xa = null;
                    var T = v.sibling;
                    if (T !== null) et = T;
                    else {
                      var H = v.return;
                      H !== null ? (et = H, br(H)) : et = null;
                    }
                    break t;
                  }
              }
              St = 0, Xa = null, vf(l, n, r, 5);
              break;
            case 6:
              St = 0, Xa = null, vf(l, n, r, 6);
              break;
            case 8:
              Sr(), $t = 6;
              break e;
            default:
              throw Error(U(462));
          }
        }
        bg();
        break;
      } catch (V) {
        pf(l, V);
      }
    while (!0);
    return Vn = Ii = null, X.H = c, X.A = s, mt = u, et !== null ? 0 : (xt = null, it = 0, en(), $t);
  }
  function bg() {
    for (; et !== null && !No(); )
      _i(et);
  }
  function _i(l) {
    var n = cr(l.alternate, l, Gu);
    l.memoizedProps = l.pendingProps, n === null ? br(l) : et = n;
  }
  function Eg(l) {
    var n = l, u = n.alternate;
    switch (n.tag) {
      case 15:
      case 0:
        n = Qy(
          u,
          n,
          n.pendingProps,
          n.type,
          void 0,
          it
        );
        break;
      case 11:
        n = Qy(
          u,
          n,
          n.pendingProps,
          n.type.render,
          n.ref,
          it
        );
        break;
      case 5:
        Wc(n);
      default:
        Jy(u, n), n = et = I0(n, Gu), n = cr(u, n, Gu);
    }
    l.memoizedProps = l.pendingProps, n === null ? br(l) : et = n;
  }
  function vf(l, n, u, c) {
    Vn = Ii = null, Wc(n), nc = null, Zc = 0;
    var s = n.return;
    try {
      if (cg(
        l,
        s,
        n,
        u,
        it
      )) {
        $t = 1, sf(
          l,
          an(u, l.current)
        ), et = null;
        return;
      }
    } catch (r) {
      if (s !== null) throw et = s, r;
      $t = 1, sf(
        l,
        an(u, l.current)
      ), et = null;
      return;
    }
    n.flags & 32768 ? (ut || c === 1 ? l = !0 : sc || (it & 536870912) !== 0 ? l = !1 : (qe = l = !0, (c === 2 || c === 9 || c === 3 || c === 6) && (c = ua.current, c !== null && c.tag === 13 && (c.flags |= 16384))), op(n, l)) : br(n);
  }
  function br(l) {
    var n = l;
    do {
      if ((n.flags & 32768) !== 0) {
        op(
          n,
          qe
        );
        return;
      }
      l = n.return;
      var u = tl(
        n.alternate,
        n,
        Gu
      );
      if (u !== null) {
        et = u;
        return;
      }
      if (n = n.sibling, n !== null) {
        et = n;
        return;
      }
      et = n = l;
    } while (n !== null);
    $t === 0 && ($t = 5);
  }
  function op(l, n) {
    do {
      var u = sg(l.alternate, l);
      if (u !== null) {
        u.flags &= 32767, et = u;
        return;
      }
      if (u = l.return, u !== null && (u.flags |= 32768, u.subtreeFlags = 0, u.deletions = null), !n && (l = l.sibling, l !== null)) {
        et = l;
        return;
      }
      et = l = u;
    } while (l !== null);
    $t = 6, et = null;
  }
  function Tg(l, n, u, c, s, r, m, v, T) {
    l.cancelPendingCommit = null;
    do
      Th();
    while (ft !== 0);
    if ((mt & 6) !== 0) throw Error(U(327));
    if (n !== null) {
      if (n === l.current) throw Error(U(177));
      if (r = n.lanes | n.childLanes, r |= pa, sd(
        l,
        u,
        r,
        m,
        v,
        T
      ), l === xt && (et = xt = null, it = 0), oo = n, dc = l, kn = u, vh = r, Va = s, np = c, (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, Rg(wi, function() {
        return Ah(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), c = (n.flags & 13878) !== 0, (n.subtreeFlags & 13878) !== 0 || c) {
        c = X.T, X.T = null, s = B.p, B.p = 2, m = mt, mt |= 4;
        try {
          e1(l, n, u);
        } finally {
          mt = m, B.p = s, X.T = c;
        }
      }
      ft = 1, Ag(), Og(), zg();
    }
  }
  function Ag() {
    if (ft === 1) {
      ft = 0;
      var l = dc, n = oo, u = (n.flags & 13878) !== 0;
      if ((n.subtreeFlags & 13878) !== 0 || u) {
        u = X.T, X.T = null;
        var c = B.p;
        B.p = 2;
        var s = mt;
        mt |= 4;
        try {
          vt(n, l);
          var r = jh, m = qc(l.containerInfo), v = r.focusedElem, T = r.selectionRange;
          if (m !== v && v && v.ownerDocument && ly(
            v.ownerDocument.documentElement,
            v
          )) {
            if (T !== null && ri(v)) {
              var H = T.start, V = T.end;
              if (V === void 0 && (V = H), "selectionStart" in v)
                v.selectionStart = H, v.selectionEnd = Math.min(
                  V,
                  v.value.length
                );
              else {
                var k = v.ownerDocument || document, j = k && k.defaultView || window;
                if (j.getSelection) {
                  var w = j.getSelection(), he = v.textContent.length, Re = Math.min(T.start, he), Ht = T.end === void 0 ? Re : Math.min(T.end, he);
                  !w.extend && Re > Ht && (m = Ht, Ht = Re, Re = m);
                  var C = ty(
                    v,
                    Re
                  ), D = ty(
                    v,
                    Ht
                  );
                  if (C && D && (w.rangeCount !== 1 || w.anchorNode !== C.node || w.anchorOffset !== C.offset || w.focusNode !== D.node || w.focusOffset !== D.offset)) {
                    var x = k.createRange();
                    x.setStart(C.node, C.offset), w.removeAllRanges(), Re > Ht ? (w.addRange(x), w.extend(D.node, D.offset)) : (x.setEnd(D.node, D.offset), w.addRange(x));
                  }
                }
              }
            }
            for (k = [], w = v; w = w.parentNode; )
              w.nodeType === 1 && k.push({
                element: w,
                left: w.scrollLeft,
                top: w.scrollTop
              });
            for (typeof v.focus == "function" && v.focus(), v = 0; v < k.length; v++) {
              var K = k[v];
              K.element.scrollLeft = K.left, K.element.scrollTop = K.top;
            }
          }
          Ci = !!Rr, jh = Rr = null;
        } finally {
          mt = s, B.p = c, X.T = u;
        }
      }
      l.current = n, ft = 2;
    }
  }
  function Og() {
    if (ft === 2) {
      ft = 0;
      var l = dc, n = oo, u = (n.flags & 8772) !== 0;
      if ((n.subtreeFlags & 8772) !== 0 || u) {
        u = X.T, X.T = null;
        var c = B.p;
        B.p = 2;
        var s = mt;
        mt |= 4;
        try {
          uo(l, n.alternate, n);
        } finally {
          mt = s, B.p = c, X.T = u;
        }
      }
      ft = 3;
    }
  }
  function zg() {
    if (ft === 4 || ft === 3) {
      ft = 0, iu();
      var l = dc, n = oo, u = kn, c = np;
      (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? ft = 5 : (ft = 0, oo = dc = null, _g(l, l.pendingLanes));
      var s = l.pendingLanes;
      if (s === 0 && (Lu = null), rd(u), n = n.stateNode, gl && typeof gl.onCommitFiberRoot == "function")
        try {
          gl.onCommitFiberRoot(
            wn,
            n,
            void 0,
            (n.current.flags & 128) === 128
          );
        } catch {
        }
      if (c !== null) {
        n = X.T, s = B.p, B.p = 2, X.T = null;
        try {
          for (var r = l.onRecoverableError, m = 0; m < c.length; m++) {
            var v = c[m];
            r(v.value, {
              componentStack: v.stack
            });
          }
        } finally {
          X.T = n, B.p = s;
        }
      }
      (kn & 3) !== 0 && Th(), Wn(l), s = l.pendingLanes, (u & 261930) !== 0 && (s & 42) !== 0 ? l === Sh ? fo++ : (fo = 0, Sh = l) : fo = 0, Tr(0);
    }
  }
  function _g(l, n) {
    (l.pooledCacheLanes &= n) === 0 && (n = l.pooledCache, n != null && (l.pooledCache = null, Vc(n)));
  }
  function Th() {
    return Ag(), Og(), zg(), Ah();
  }
  function Ah() {
    if (ft !== 5) return !1;
    var l = dc, n = vh;
    vh = 0;
    var u = rd(kn), c = X.T, s = B.p;
    try {
      B.p = 32 > u ? 32 : u, X.T = null, u = Va, Va = null;
      var r = dc, m = kn;
      if (ft = 0, oo = dc = null, kn = 0, (mt & 6) !== 0) throw Error(U(331));
      var v = mt;
      if (mt |= 4, ep(r.current), Py(
        r,
        r.current,
        m,
        u
      ), mt = v, Tr(0, !1), gl && typeof gl.onPostCommitFiberRoot == "function")
        try {
          gl.onPostCommitFiberRoot(wn, r);
        } catch {
        }
      return !0;
    } finally {
      B.p = s, X.T = c, _g(l, n);
    }
  }
  function Dg(l, n, u) {
    n = an(u, n), n = rf(l.stateNode, n, 2), l = pi(l, n, 2), l !== null && (Da(l, 2), Wn(l));
  }
  function Mt(l, n, u) {
    if (l.tag === 3)
      Dg(l, l, u);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          Dg(
            n,
            l,
            u
          );
          break;
        } else if (n.tag === 1) {
          var c = n.stateNode;
          if (typeof n.type.getDerivedStateFromError == "function" || typeof c.componentDidCatch == "function" && (Lu === null || !Lu.has(c))) {
            l = an(u, l), u = ig(2), c = pi(n, u, 2), c !== null && (Yy(
              u,
              c,
              n,
              l
            ), Da(c, 2), Wn(c));
            break;
          }
        }
        n = n.return;
      }
  }
  function Oh(l, n, u) {
    var c = l.pingCache;
    if (c === null) {
      c = l.pingCache = new yg();
      var s = /* @__PURE__ */ new Set();
      c.set(n, s);
    } else
      s = c.get(n), s === void 0 && (s = /* @__PURE__ */ new Set(), c.set(n, s));
    s.has(u) || (yr = !0, s.add(u), l = fp.bind(null, l, n, u), n.then(l, l));
  }
  function fp(l, n, u) {
    var c = l.pingCache;
    c !== null && c.delete(n), l.pingedLanes |= l.suspendedLanes & u, l.warmLanes &= ~u, xt === l && (it & u) === u && ($t === 4 || $t === 3 && (it & 62914560) === it && 300 > Tl() - pr ? (mt & 2) === 0 && yf(l, 0) : ap |= u, rc === it && (rc = 0)), Wn(l);
  }
  function zh(l, n) {
    n === 0 && (n = Be()), l = la(l, n), l !== null && (Da(l, n), Wn(l));
  }
  function l1(l) {
    var n = l.memoizedState, u = 0;
    n !== null && (u = n.retryLane), zh(l, u);
  }
  function on(l, n) {
    var u = 0;
    switch (l.tag) {
      case 31:
      case 13:
        var c = l.stateNode, s = l.memoizedState;
        s !== null && (u = s.retryLane);
        break;
      case 19:
        c = l.stateNode;
        break;
      case 22:
        c = l.stateNode._retryCache;
        break;
      default:
        throw Error(U(314));
    }
    c !== null && c.delete(n), zh(l, u);
  }
  function Rg(l, n) {
    return ts(l, n);
  }
  var Er = null, hc = null, _h = !1, Dh = !1, sp = !1, mc = 0;
  function Wn(l) {
    l !== hc && l.next === null && (hc === null ? Er = hc = l : hc = hc.next = l), Dh = !0, _h || (_h = !0, Sf());
  }
  function Tr(l, n) {
    if (!sp && Dh) {
      sp = !0;
      do
        for (var u = !1, c = Er; c !== null; ) {
          if (l !== 0) {
            var s = c.pendingLanes;
            if (s === 0) var r = 0;
            else {
              var m = c.suspendedLanes, v = c.pingedLanes;
              r = (1 << 31 - Ml(42 | l) + 1) - 1, r &= s & ~(m & ~v), r = r & 201326741 ? r & 201326741 | 1 : r ? r | 2 : 0;
            }
            r !== 0 && (u = !0, zr(c, r));
          } else
            r = it, r = He(
              c,
              c === xt ? r : 0,
              c.cancelPendingCommit !== null || c.timeoutHandle !== -1
            ), (r & 3) === 0 || pe(c, r) || (u = !0, zr(c, r));
          c = c.next;
        }
      while (u);
      sp = !1;
    }
  }
  function Ar() {
    Or();
  }
  function Or() {
    Dh = _h = !1;
    var l = 0;
    mc !== 0 && Ng() && (l = mc);
    for (var n = Tl(), u = null, c = Er; c !== null; ) {
      var s = c.next, r = rp(c, n);
      r === 0 ? (c.next = null, u === null ? Er = s : u.next = s, s === null && (hc = u)) : (u = c, (l !== 0 || (r & 3) !== 0) && (Dh = !0)), c = s;
    }
    ft !== 0 && ft !== 5 || Tr(l), mc !== 0 && (mc = 0);
  }
  function rp(l, n) {
    for (var u = l.suspendedLanes, c = l.pingedLanes, s = l.expirationTimes, r = l.pendingLanes & -62914561; 0 < r; ) {
      var m = 31 - Ml(r), v = 1 << m, T = s[m];
      T === -1 ? ((v & u) === 0 || (v & c) !== 0) && (s[m] = ot(v, n)) : T <= n && (l.expiredLanes |= v), r &= ~v;
    }
    if (n = xt, u = it, u = He(
      l,
      l === n ? u : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), c = l.callbackNode, u === 0 || l === n && (St === 2 || St === 9) || l.cancelPendingCommit !== null)
      return c !== null && c !== null && me(c), l.callbackNode = null, l.callbackPriority = 0;
    if ((u & 3) === 0 || pe(l, u)) {
      if (n = u & -u, n === l.callbackPriority) return n;
      switch (c !== null && me(c), rd(u)) {
        case 2:
        case 8:
          u = jo;
          break;
        case 32:
          u = wi;
          break;
        case 268435456:
          u = as;
          break;
        default:
          u = wi;
      }
      return c = dp.bind(null, l), u = ts(u, c), l.callbackPriority = n, l.callbackNode = u, n;
    }
    return c !== null && c !== null && me(c), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function dp(l, n) {
    if (ft !== 0 && ft !== 5)
      return l.callbackNode = null, l.callbackPriority = 0, null;
    var u = l.callbackNode;
    if (Th() && l.callbackNode !== u)
      return null;
    var c = it;
    return c = He(
      l,
      l === xt ? c : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), c === 0 ? null : (ip(l, c, n), rp(l, Tl()), l.callbackNode != null && l.callbackNode === u ? dp.bind(null, l) : null);
  }
  function zr(l, n) {
    if (Th()) return null;
    ip(l, n, !0);
  }
  function Sf() {
    Of(function() {
      (mt & 6) !== 0 ? ts(
        ls,
        Ar
      ) : Or();
    });
  }
  function so() {
    if (mc === 0) {
      var l = Pi;
      l === 0 && (l = M, M <<= 1, (M & 261888) === 0 && (M = 256)), mc = l;
    }
    return mc;
  }
  function hp(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : Qi("" + l);
  }
  function Mg(l, n) {
    var u = n.ownerDocument.createElement("input");
    return u.name = n.name, u.value = n.value, l.id && u.setAttribute("form", l.id), n.parentNode.insertBefore(u, n), l = new FormData(l), u.parentNode.removeChild(u), l;
  }
  function bf(l, n, u, c, s) {
    if (n === "submit" && u && u.stateNode === s) {
      var r = hp(
        (s[Vt] || null).action
      ), m = c.submitter;
      m && (n = (n = m[Vt] || null) ? hp(n.formAction) : m.getAttribute("formAction"), n !== null && (r = n, m = null));
      var v = new gs(
        "action",
        "action",
        null,
        c,
        s
      );
      l.push({
        event: v,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (c.defaultPrevented) {
                if (mc !== 0) {
                  var T = m ? Mg(s, m) : new FormData(s);
                  ih(
                    u,
                    {
                      pending: !0,
                      data: T,
                      method: s.method,
                      action: r
                    },
                    null,
                    T
                  );
                }
              } else
                typeof r == "function" && (v.preventDefault(), T = m ? Mg(s, m) : new FormData(s), ih(
                  u,
                  {
                    pending: !0,
                    data: T,
                    method: s.method,
                    action: r
                  },
                  r,
                  T
                ));
            },
            currentTarget: s
          }
        ]
      });
    }
  }
  for (var ro = 0; ro < Xn.length; ro++) {
    var Rh = Xn[ro], Mh = Rh.toLowerCase(), mp = Rh[0].toUpperCase() + Rh.slice(1);
    xa(
      Mh,
      "on" + mp
    );
  }
  xa(qt, "onAnimationEnd"), xa(Os, "onAnimationIteration"), xa(ny, "onAnimationStart"), xa("dblclick", "onDoubleClick"), xa("focusin", "onFocus"), xa("focusout", "onBlur"), xa(uy, "onTransitionRun"), xa(wc, "onTransitionStart"), xa(zs, "onTransitionCancel"), xa(Gn, "onTransitionEnd"), Mc("onMouseEnter", ["mouseout", "mouseover"]), Mc("onMouseLeave", ["mouseout", "mouseover"]), Mc("onPointerEnter", ["pointerout", "pointerover"]), Mc("onPointerLeave", ["pointerout", "pointerover"]), Fa(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Fa(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Fa("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Fa(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Fa(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Fa(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var ho = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Cg = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ho)
  );
  function yp(l, n) {
    n = (n & 4) !== 0;
    for (var u = 0; u < l.length; u++) {
      var c = l[u], s = c.event;
      c = c.listeners;
      e: {
        var r = void 0;
        if (n)
          for (var m = c.length - 1; 0 <= m; m--) {
            var v = c[m], T = v.instance, H = v.currentTarget;
            if (v = v.listener, T !== r && s.isPropagationStopped())
              break e;
            r = v, s.currentTarget = H;
            try {
              r(s);
            } catch (V) {
              Fi(V);
            }
            s.currentTarget = null, r = T;
          }
        else
          for (m = 0; m < c.length; m++) {
            if (v = c[m], T = v.instance, H = v.currentTarget, v = v.listener, T !== r && s.isPropagationStopped())
              break e;
            r = v, s.currentTarget = H;
            try {
              r(s);
            } catch (V) {
              Fi(V);
            }
            s.currentTarget = null, r = T;
          }
      }
    }
  }
  function at(l, n) {
    var u = n[cs];
    u === void 0 && (u = n[cs] = /* @__PURE__ */ new Set());
    var c = l + "__bubble";
    u.has(c) || (_r(n, l, 2, !1), u.add(c));
  }
  function Ch(l, n, u) {
    var c = 0;
    n && (c |= 4), _r(
      u,
      l,
      c,
      n
    );
  }
  var Uh = "_reactListening" + Math.random().toString(36).slice(2);
  function pp(l) {
    if (!l[Uh]) {
      l[Uh] = !0, Ma.forEach(function(u) {
        u !== "selectionchange" && (Cg.has(u) || Ch(u, !1, l), Ch(u, !0, l));
      });
      var n = l.nodeType === 9 ? l : l.ownerDocument;
      n === null || n[Uh] || (n[Uh] = !0, Ch("selectionchange", !1, n));
    }
  }
  function _r(l, n, u, c) {
    switch (Br(n)) {
      case 2:
        var s = fa;
        break;
      case 8:
        s = Zu;
        break;
      default:
        s = Nn;
    }
    u = s.bind(
      null,
      n,
      u,
      l
    ), s = void 0, !Lm || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (s = !0), c ? s !== void 0 ? l.addEventListener(n, u, {
      capture: !0,
      passive: s
    }) : l.addEventListener(n, u, !0) : s !== void 0 ? l.addEventListener(n, u, {
      passive: s
    }) : l.addEventListener(n, u, !1);
  }
  function Ef(l, n, u, c, s) {
    var r = c;
    if ((n & 1) === 0 && (n & 2) === 0 && c !== null)
      e: for (; ; ) {
        if (c === null) return;
        var m = c.tag;
        if (m === 3 || m === 4) {
          var v = c.stateNode.containerInfo;
          if (v === s) break;
          if (m === 4)
            for (m = c.return; m !== null; ) {
              var T = m.tag;
              if ((T === 3 || T === 4) && m.stateNode.containerInfo === s)
                return;
              m = m.return;
            }
          for (; v !== null; ) {
            if (m = zc(v), m === null) return;
            if (T = m.tag, T === 5 || T === 6 || T === 26 || T === 27) {
              c = r = m;
              continue e;
            }
            v = v.parentNode;
          }
        }
        c = c.return;
      }
    ys(function() {
      var H = r, V = pd(u), k = [];
      e: {
        var j = F0.get(l);
        if (j !== void 0) {
          var w = gs, he = l;
          switch (l) {
            case "keypress":
              if (ps(u) === 0) break e;
            case "keydown":
            case "keyup":
              w = Td;
              break;
            case "focusin":
              he = "focus", w = Ed;
              break;
            case "focusout":
              he = "blur", w = Ed;
              break;
            case "beforeblur":
            case "afterblur":
              w = Ed;
              break;
            case "click":
              if (u.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              w = q0;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              w = w0;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              w = kv;
              break;
            case qt:
            case Os:
            case ny:
              w = Jm;
              break;
            case Gn:
              w = Z0;
              break;
            case "scroll":
            case "scrollend":
              w = Y0;
              break;
            case "wheel":
              w = $m;
              break;
            case "copy":
            case "cut":
            case "paste":
              w = Hc;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              w = Od;
              break;
            case "toggle":
            case "beforetoggle":
              w = J0;
          }
          var Re = (n & 4) !== 0, Ht = !Re && (l === "scroll" || l === "scrollend"), C = Re ? j !== null ? j + "Capture" : null : j;
          Re = [];
          for (var D = H, x; D !== null; ) {
            var K = D;
            if (x = K.stateNode, K = K.tag, K !== 5 && K !== 26 && K !== 27 || x === null || C === null || (K = Lo(D, C), K != null && Re.push(
              Dr(D, K, x)
            )), Ht) break;
            D = D.return;
          }
          0 < Re.length && (j = new w(
            j,
            he,
            null,
            u,
            V
          ), k.push({ event: j, listeners: Re }));
        }
      }
      if ((n & 7) === 0) {
        e: {
          if (j = l === "mouseover" || l === "pointerover", w = l === "mouseout" || l === "pointerout", j && u !== ms && (he = u.relatedTarget || u.fromElement) && (zc(he) || he[Oc]))
            break e;
          if ((w || j) && (j = V.window === V ? V : (j = V.ownerDocument) ? j.defaultView || j.parentWindow : window, w ? (he = u.relatedTarget || u.toElement, w = H, he = he ? zc(he) : null, he !== null && (Ht = _e(he), Re = he.tag, he !== Ht || Re !== 5 && Re !== 27 && Re !== 6) && (he = null)) : (w = null, he = H), w !== he)) {
            if (Re = q0, K = "onMouseLeave", C = "onMouseEnter", D = "mouse", (l === "pointerout" || l === "pointerover") && (Re = Od, K = "onPointerLeave", C = "onPointerEnter", D = "pointer"), Ht = w == null ? j : qo(w), x = he == null ? j : qo(he), j = new Re(
              K,
              D + "leave",
              w,
              u,
              V
            ), j.target = Ht, j.relatedTarget = x, K = null, zc(V) === H && (Re = new Re(
              C,
              D + "enter",
              he,
              u,
              V
            ), Re.target = x, Re.relatedTarget = Ht, K = Re), Ht = K, w && he)
              t: {
                for (Re = Ug, C = w, D = he, x = 0, K = C; K; K = Re(K))
                  x++;
                K = 0;
                for (var Ee = D; Ee; Ee = Re(Ee))
                  K++;
                for (; 0 < x - K; )
                  C = Re(C), x--;
                for (; 0 < K - x; )
                  D = Re(D), K--;
                for (; x--; ) {
                  if (C === D || D !== null && C === D.alternate) {
                    Re = C;
                    break t;
                  }
                  C = Re(C), D = Re(D);
                }
                Re = null;
              }
            else Re = null;
            w !== null && gp(
              k,
              j,
              w,
              Re,
              !1
            ), he !== null && Ht !== null && gp(
              k,
              Ht,
              he,
              Re,
              !0
            );
          }
        }
        e: {
          if (j = H ? qo(H) : window, w = j.nodeName && j.nodeName.toLowerCase(), w === "select" || w === "input" && j.type === "file")
            var yt = Rd;
          else if (_d(j))
            if (Im)
              yt = Ji;
            else {
              yt = k0;
              var ge = ey;
            }
          else
            w = j.nodeName, !w || w.toLowerCase() !== "input" || j.type !== "checkbox" && j.type !== "radio" ? H && Gm(H.elementType) && (yt = Rd) : yt = W0;
          if (yt && (yt = yt(l, H))) {
            mu(
              k,
              yt,
              u,
              V
            );
            break e;
          }
          ge && ge(l, j, H), l === "focusout" && H && j.type === "number" && H.memoizedProps.value != null && Go(j, "number", j.value);
        }
        switch (ge = H ? qo(H) : window, l) {
          case "focusin":
            (_d(ge) || ge.contentEditable === "true") && (gu = ge, Ts = H, $i = null);
            break;
          case "focusout":
            $i = Ts = gu = null;
            break;
          case "mousedown":
            vu = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            vu = !1, Su(k, u, V);
            break;
          case "selectionchange":
            if (ay) break;
          case "keydown":
          case "keyup":
            Su(k, u, V);
        }
        var Qe;
        if (Vo)
          e: {
            switch (l) {
              case "compositionstart":
                var Fe = "onCompositionStart";
                break e;
              case "compositionend":
                Fe = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Fe = "onCompositionUpdate";
                break e;
            }
            Fe = void 0;
          }
        else
          jc ? Zi(l, u) && (Fe = "onCompositionEnd") : l === "keydown" && u.keyCode === 229 && (Fe = "onCompositionStart");
        Fe && (Ll && u.locale !== "ko" && (jc || Fe !== "onCompositionStart" ? Fe === "onCompositionEnd" && jc && (Qe = B0()) : (fi = V, gd = "value" in fi ? fi.value : fi.textContent, jc = !0)), ge = xh(H, Fe), 0 < ge.length && (Fe = new bn(
          Fe,
          l,
          null,
          u,
          V
        ), k.push({ event: Fe, listeners: ge }), Qe ? Fe.data = Qe : (Qe = zd(u), Qe !== null && (Fe.data = Qe)))), (Qe = Wm ? K0(l, u) : $0(l, u)) && (Fe = xh(H, "onBeforeInput"), 0 < Fe.length && (ge = new bn(
          "onBeforeInput",
          "beforeinput",
          null,
          u,
          V
        ), k.push({
          event: ge,
          listeners: Fe
        }), ge.data = Qe)), bf(
          k,
          l,
          H,
          u,
          V
        );
      }
      yp(k, n);
    });
  }
  function Dr(l, n, u) {
    return {
      instance: l,
      listener: n,
      currentTarget: u
    };
  }
  function xh(l, n) {
    for (var u = n + "Capture", c = []; l !== null; ) {
      var s = l, r = s.stateNode;
      if (s = s.tag, s !== 5 && s !== 26 && s !== 27 || r === null || (s = Lo(l, u), s != null && c.unshift(
        Dr(l, s, r)
      ), s = Lo(l, n), s != null && c.push(
        Dr(l, s, r)
      )), l.tag === 3) return c;
      l = l.return;
    }
    return [];
  }
  function Ug(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function gp(l, n, u, c, s) {
    for (var r = n._reactName, m = []; u !== null && u !== c; ) {
      var v = u, T = v.alternate, H = v.stateNode;
      if (v = v.tag, T !== null && T === c) break;
      v !== 5 && v !== 26 && v !== 27 || H === null || (T = H, s ? (H = Lo(u, r), H != null && m.unshift(
        Dr(u, H, T)
      )) : s || (H = Lo(u, r), H != null && m.push(
        Dr(u, H, T)
      ))), u = u.return;
    }
    m.length !== 0 && l.push({ event: n, listeners: m });
  }
  var vp = /\r\n?/g, xg = /\u0000|\uFFFD/g;
  function Hh(l) {
    return (typeof l == "string" ? l : "" + l).replace(vp, `
`).replace(xg, "");
  }
  function Sp(l, n) {
    return n = Hh(n), Hh(l) === n;
  }
  function Ct(l, n, u, c, s, r) {
    switch (u) {
      case "children":
        typeof c == "string" ? n === "body" || n === "textarea" && c === "" || Cc(l, c) : (typeof c == "number" || typeof c == "bigint") && n !== "body" && Cc(l, "" + c);
        break;
      case "className":
        wo(l, "class", c);
        break;
      case "tabIndex":
        wo(l, "tabindex", c);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        wo(l, u, c);
        break;
      case "style":
        j0(l, c, r);
        break;
      case "data":
        if (n !== "object") {
          wo(l, "data", c);
          break;
        }
      case "src":
      case "href":
        if (c === "" && (n !== "a" || u !== "href")) {
          l.removeAttribute(u);
          break;
        }
        if (c == null || typeof c == "function" || typeof c == "symbol" || typeof c == "boolean") {
          l.removeAttribute(u);
          break;
        }
        c = Qi("" + c), l.setAttribute(u, c);
        break;
      case "action":
      case "formAction":
        if (typeof c == "function") {
          l.setAttribute(
            u,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof r == "function" && (u === "formAction" ? (n !== "input" && Ct(l, n, "name", s.name, s, null), Ct(
            l,
            n,
            "formEncType",
            s.formEncType,
            s,
            null
          ), Ct(
            l,
            n,
            "formMethod",
            s.formMethod,
            s,
            null
          ), Ct(
            l,
            n,
            "formTarget",
            s.formTarget,
            s,
            null
          )) : (Ct(l, n, "encType", s.encType, s, null), Ct(l, n, "method", s.method, s, null), Ct(l, n, "target", s.target, s, null)));
        if (c == null || typeof c == "symbol" || typeof c == "boolean") {
          l.removeAttribute(u);
          break;
        }
        c = Qi("" + c), l.setAttribute(u, c);
        break;
      case "onClick":
        c != null && (l.onclick = Xl);
        break;
      case "onScroll":
        c != null && at("scroll", l);
        break;
      case "onScrollEnd":
        c != null && at("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (c != null) {
          if (typeof c != "object" || !("__html" in c))
            throw Error(U(61));
          if (u = c.__html, u != null) {
            if (s.children != null) throw Error(U(60));
            l.innerHTML = u;
          }
        }
        break;
      case "multiple":
        l.multiple = c && typeof c != "function" && typeof c != "symbol";
        break;
      case "muted":
        l.muted = c && typeof c != "function" && typeof c != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (c == null || typeof c == "function" || typeof c == "boolean" || typeof c == "symbol") {
          l.removeAttribute("xlink:href");
          break;
        }
        u = Qi("" + c), l.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          u
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        c != null && typeof c != "function" && typeof c != "symbol" ? l.setAttribute(u, "" + c) : l.removeAttribute(u);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        c && typeof c != "function" && typeof c != "symbol" ? l.setAttribute(u, "") : l.removeAttribute(u);
        break;
      case "capture":
      case "download":
        c === !0 ? l.setAttribute(u, "") : c !== !1 && c != null && typeof c != "function" && typeof c != "symbol" ? l.setAttribute(u, c) : l.removeAttribute(u);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        c != null && typeof c != "function" && typeof c != "symbol" && !isNaN(c) && 1 <= c ? l.setAttribute(u, c) : l.removeAttribute(u);
        break;
      case "rowSpan":
      case "start":
        c == null || typeof c == "function" || typeof c == "symbol" || isNaN(c) ? l.removeAttribute(u) : l.setAttribute(u, c);
        break;
      case "popover":
        at("beforetoggle", l), at("toggle", l), ci(l, "popover", c);
        break;
      case "xlinkActuate":
        oi(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          c
        );
        break;
      case "xlinkArcrole":
        oi(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          c
        );
        break;
      case "xlinkRole":
        oi(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          c
        );
        break;
      case "xlinkShow":
        oi(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          c
        );
        break;
      case "xlinkTitle":
        oi(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          c
        );
        break;
      case "xlinkType":
        oi(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          c
        );
        break;
      case "xmlBase":
        oi(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          c
        );
        break;
      case "xmlLang":
        oi(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          c
        );
        break;
      case "xmlSpace":
        oi(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          c
        );
        break;
      case "is":
        ci(l, "is", c);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < u.length) || u[0] !== "o" && u[0] !== "O" || u[1] !== "n" && u[1] !== "N") && (u = Jv.get(u) || u, ci(l, u, c));
    }
  }
  function bp(l, n, u, c, s, r) {
    switch (u) {
      case "style":
        j0(l, c, r);
        break;
      case "dangerouslySetInnerHTML":
        if (c != null) {
          if (typeof c != "object" || !("__html" in c))
            throw Error(U(61));
          if (u = c.__html, u != null) {
            if (s.children != null) throw Error(U(60));
            l.innerHTML = u;
          }
        }
        break;
      case "children":
        typeof c == "string" ? Cc(l, c) : (typeof c == "number" || typeof c == "bigint") && Cc(l, "" + c);
        break;
      case "onScroll":
        c != null && at("scroll", l);
        break;
      case "onScrollEnd":
        c != null && at("scrollend", l);
        break;
      case "onClick":
        c != null && (l.onclick = Xl);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Rc.hasOwnProperty(u))
          e: {
            if (u[0] === "o" && u[1] === "n" && (s = u.endsWith("Capture"), n = u.slice(2, s ? u.length - 7 : void 0), r = l[Vt] || null, r = r != null ? r[u] : null, typeof r == "function" && l.removeEventListener(n, r, s), typeof c == "function")) {
              typeof r != "function" && r !== null && (u in l ? l[u] = null : l.hasAttribute(u) && l.removeAttribute(u)), l.addEventListener(n, c, s);
              break e;
            }
            u in l ? l[u] = c : c === !0 ? l.setAttribute(u, "") : ci(l, u, c);
          }
    }
  }
  function $l(l, n, u) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        at("error", l), at("load", l);
        var c = !1, s = !1, r;
        for (r in u)
          if (u.hasOwnProperty(r)) {
            var m = u[r];
            if (m != null)
              switch (r) {
                case "src":
                  c = !0;
                  break;
                case "srcSet":
                  s = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(U(137, n));
                default:
                  Ct(l, n, r, m, u, null);
              }
          }
        s && Ct(l, n, "srcSet", u.srcSet, u, null), c && Ct(l, n, "src", u.src, u, null);
        return;
      case "input":
        at("invalid", l);
        var v = r = m = s = null, T = null, H = null;
        for (c in u)
          if (u.hasOwnProperty(c)) {
            var V = u[c];
            if (V != null)
              switch (c) {
                case "name":
                  s = V;
                  break;
                case "type":
                  m = V;
                  break;
                case "checked":
                  T = V;
                  break;
                case "defaultChecked":
                  H = V;
                  break;
                case "value":
                  r = V;
                  break;
                case "defaultValue":
                  v = V;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (V != null)
                    throw Error(U(137, n));
                  break;
                default:
                  Ct(l, n, c, V, u, null);
              }
          }
        yd(
          l,
          r,
          v,
          T,
          H,
          m,
          s,
          !1
        );
        return;
      case "select":
        at("invalid", l), c = m = r = null;
        for (s in u)
          if (u.hasOwnProperty(s) && (v = u[s], v != null))
            switch (s) {
              case "value":
                r = v;
                break;
              case "defaultValue":
                m = v;
                break;
              case "multiple":
                c = v;
              default:
                Ct(l, n, s, v, u, null);
            }
        n = r, u = m, l.multiple = !!c, n != null ? ou(l, !!c, n, !1) : u != null && ou(l, !!c, u, !0);
        return;
      case "textarea":
        at("invalid", l), r = s = c = null;
        for (m in u)
          if (u.hasOwnProperty(m) && (v = u[m], v != null))
            switch (m) {
              case "value":
                c = v;
                break;
              case "defaultValue":
                s = v;
                break;
              case "children":
                r = v;
                break;
              case "dangerouslySetInnerHTML":
                if (v != null) throw Error(U(91));
                break;
              default:
                Ct(l, n, m, v, u, null);
            }
        qm(l, c, s, r);
        return;
      case "option":
        for (T in u)
          u.hasOwnProperty(T) && (c = u[T], c != null) && (T === "selected" ? l.selected = c && typeof c != "function" && typeof c != "symbol" : Ct(l, n, T, c, u, null));
        return;
      case "dialog":
        at("beforetoggle", l), at("toggle", l), at("cancel", l), at("close", l);
        break;
      case "iframe":
      case "object":
        at("load", l);
        break;
      case "video":
      case "audio":
        for (c = 0; c < ho.length; c++)
          at(ho[c], l);
        break;
      case "image":
        at("error", l), at("load", l);
        break;
      case "details":
        at("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        at("error", l), at("load", l);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (H in u)
          if (u.hasOwnProperty(H) && (c = u[H], c != null))
            switch (H) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(U(137, n));
              default:
                Ct(l, n, H, c, u, null);
            }
        return;
      default:
        if (Gm(n)) {
          for (V in u)
            u.hasOwnProperty(V) && (c = u[V], c !== void 0 && bp(
              l,
              n,
              V,
              c,
              u,
              void 0
            ));
          return;
        }
    }
    for (v in u)
      u.hasOwnProperty(v) && (c = u[v], c != null && Ct(l, n, v, c, u, null));
  }
  function a1(l, n, u, c) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var s = null, r = null, m = null, v = null, T = null, H = null, V = null;
        for (w in u) {
          var k = u[w];
          if (u.hasOwnProperty(w) && k != null)
            switch (w) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                T = k;
              default:
                c.hasOwnProperty(w) || Ct(l, n, w, null, c, k);
            }
        }
        for (var j in c) {
          var w = c[j];
          if (k = u[j], c.hasOwnProperty(j) && (w != null || k != null))
            switch (j) {
              case "type":
                r = w;
                break;
              case "name":
                s = w;
                break;
              case "checked":
                H = w;
                break;
              case "defaultChecked":
                V = w;
                break;
              case "value":
                m = w;
                break;
              case "defaultValue":
                v = w;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (w != null)
                  throw Error(U(137, n));
                break;
              default:
                w !== k && Ct(
                  l,
                  n,
                  j,
                  w,
                  c,
                  k
                );
            }
        }
        md(
          l,
          m,
          v,
          T,
          H,
          V,
          r,
          s
        );
        return;
      case "select":
        w = m = v = j = null;
        for (r in u)
          if (T = u[r], u.hasOwnProperty(r) && T != null)
            switch (r) {
              case "value":
                break;
              case "multiple":
                w = T;
              default:
                c.hasOwnProperty(r) || Ct(
                  l,
                  n,
                  r,
                  null,
                  c,
                  T
                );
            }
        for (s in c)
          if (r = c[s], T = u[s], c.hasOwnProperty(s) && (r != null || T != null))
            switch (s) {
              case "value":
                j = r;
                break;
              case "defaultValue":
                v = r;
                break;
              case "multiple":
                m = r;
              default:
                r !== T && Ct(
                  l,
                  n,
                  s,
                  r,
                  c,
                  T
                );
            }
        n = v, u = m, c = w, j != null ? ou(l, !!u, j, !1) : !!c != !!u && (n != null ? ou(l, !!u, n, !0) : ou(l, !!u, u ? [] : "", !1));
        return;
      case "textarea":
        w = j = null;
        for (v in u)
          if (s = u[v], u.hasOwnProperty(v) && s != null && !c.hasOwnProperty(v))
            switch (v) {
              case "value":
                break;
              case "children":
                break;
              default:
                Ct(l, n, v, null, c, s);
            }
        for (m in c)
          if (s = c[m], r = u[m], c.hasOwnProperty(m) && (s != null || r != null))
            switch (m) {
              case "value":
                j = s;
                break;
              case "defaultValue":
                w = s;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(U(91));
                break;
              default:
                s !== r && Ct(l, n, m, s, c, r);
            }
        N0(l, j, w);
        return;
      case "option":
        for (var he in u)
          j = u[he], u.hasOwnProperty(he) && j != null && !c.hasOwnProperty(he) && (he === "selected" ? l.selected = !1 : Ct(
            l,
            n,
            he,
            null,
            c,
            j
          ));
        for (T in c)
          j = c[T], w = u[T], c.hasOwnProperty(T) && j !== w && (j != null || w != null) && (T === "selected" ? l.selected = j && typeof j != "function" && typeof j != "symbol" : Ct(
            l,
            n,
            T,
            j,
            c,
            w
          ));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var Re in u)
          j = u[Re], u.hasOwnProperty(Re) && j != null && !c.hasOwnProperty(Re) && Ct(l, n, Re, null, c, j);
        for (H in c)
          if (j = c[H], w = u[H], c.hasOwnProperty(H) && j !== w && (j != null || w != null))
            switch (H) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (j != null)
                  throw Error(U(137, n));
                break;
              default:
                Ct(
                  l,
                  n,
                  H,
                  j,
                  c,
                  w
                );
            }
        return;
      default:
        if (Gm(n)) {
          for (var Ht in u)
            j = u[Ht], u.hasOwnProperty(Ht) && j !== void 0 && !c.hasOwnProperty(Ht) && bp(
              l,
              n,
              Ht,
              void 0,
              c,
              j
            );
          for (V in c)
            j = c[V], w = u[V], !c.hasOwnProperty(V) || j === w || j === void 0 && w === void 0 || bp(
              l,
              n,
              V,
              j,
              c,
              w
            );
          return;
        }
    }
    for (var C in u)
      j = u[C], u.hasOwnProperty(C) && j != null && !c.hasOwnProperty(C) && Ct(l, n, C, null, c, j);
    for (k in c)
      j = c[k], w = u[k], !c.hasOwnProperty(k) || j === w || j == null && w == null || Ct(l, n, k, j, c, w);
  }
  function Nh(l) {
    switch (l) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function Ep() {
    if (typeof performance.getEntriesByType == "function") {
      for (var l = 0, n = 0, u = performance.getEntriesByType("resource"), c = 0; c < u.length; c++) {
        var s = u[c], r = s.transferSize, m = s.initiatorType, v = s.duration;
        if (r && v && Nh(m)) {
          for (m = 0, v = s.responseEnd, c += 1; c < u.length; c++) {
            var T = u[c], H = T.startTime;
            if (H > v) break;
            var V = T.transferSize, k = T.initiatorType;
            V && Nh(k) && (T = T.responseEnd, m += V * (T < v ? 1 : (v - H) / (T - H)));
          }
          if (--c, n += 8 * (r + m) / (s.duration / 1e3), l++, 10 < l) break;
        }
      }
      if (0 < l) return n / l / 1e6;
    }
    return navigator.connection && (l = navigator.connection.downlink, typeof l == "number") ? l : 5;
  }
  var Rr = null, jh = null;
  function Mr(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function Tf(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Hg(l, n) {
    if (l === 0)
      switch (n) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && n === "foreignObject" ? 0 : l;
  }
  function Bh(l, n) {
    return l === "textarea" || l === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.children == "bigint" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
  }
  var Af = null;
  function Ng() {
    var l = window.event;
    return l && l.type === "popstate" ? l === Af ? !1 : (Af = l, !0) : (Af = null, !1);
  }
  var jg = typeof setTimeout == "function" ? setTimeout : void 0, Yh = typeof clearTimeout == "function" ? clearTimeout : void 0, Tp = typeof Promise == "function" ? Promise : void 0, Of = typeof queueMicrotask == "function" ? queueMicrotask : typeof Tp < "u" ? function(l) {
    return Tp.resolve(null).then(l).catch(Bg);
  } : jg;
  function Bg(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function Qu(l) {
    return l === "head";
  }
  function Cr(l, n) {
    var u = n, c = 0;
    do {
      var s = u.nextSibling;
      if (l.removeChild(u), s && s.nodeType === 8)
        if (u = s.data, u === "/$" || u === "/&") {
          if (c === 0) {
            l.removeChild(s), Cf(n);
            return;
          }
          c--;
        } else if (u === "$" || u === "$?" || u === "$~" || u === "$!" || u === "&")
          c++;
        else if (u === "html")
          Di(l.ownerDocument.documentElement);
        else if (u === "head") {
          u = l.ownerDocument.head, Di(u);
          for (var r = u.firstChild; r; ) {
            var m = r.nextSibling, v = r.nodeName;
            r[Yo] || v === "SCRIPT" || v === "STYLE" || v === "LINK" && r.rel.toLowerCase() === "stylesheet" || u.removeChild(r), r = m;
          }
        } else
          u === "body" && Di(l.ownerDocument.body);
      u = s;
    } while (u);
    Cf(n);
  }
  function Ap(l, n) {
    var u = l;
    l = 0;
    do {
      var c = u.nextSibling;
      if (u.nodeType === 1 ? n ? (u._stashedDisplay = u.style.display, u.style.display = "none") : (u.style.display = u._stashedDisplay || "", u.getAttribute("style") === "" && u.removeAttribute("style")) : u.nodeType === 3 && (n ? (u._stashedText = u.nodeValue, u.nodeValue = "") : u.nodeValue = u._stashedText || ""), c && c.nodeType === 8)
        if (u = c.data, u === "/$") {
          if (l === 0) break;
          l--;
        } else
          u !== "$" && u !== "$?" && u !== "$~" && u !== "$!" || l++;
      u = c;
    } while (u);
  }
  function sl(l) {
    var n = l.firstChild;
    for (n && n.nodeType === 10 && (n = n.nextSibling); n; ) {
      var u = n;
      switch (n = n.nextSibling, u.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          sl(u), Li(u);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (u.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(u);
    }
  }
  function Op(l, n, u, c) {
    for (; l.nodeType === 1; ) {
      var s = u;
      if (l.nodeName.toLowerCase() !== n.toLowerCase()) {
        if (!c && (l.nodeName !== "INPUT" || l.type !== "hidden"))
          break;
      } else if (c) {
        if (!l[Yo])
          switch (n) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (r = l.getAttribute("rel"), r === "stylesheet" && l.hasAttribute("data-precedence"))
                break;
              if (r !== s.rel || l.getAttribute("href") !== (s.href == null || s.href === "" ? null : s.href) || l.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin) || l.getAttribute("title") !== (s.title == null ? null : s.title))
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (r = l.getAttribute("src"), (r !== (s.src == null ? null : s.src) || l.getAttribute("type") !== (s.type == null ? null : s.type) || l.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin)) && r && l.hasAttribute("async") && !l.hasAttribute("itemprop"))
                break;
              return l;
            default:
              return l;
          }
      } else if (n === "input" && l.type === "hidden") {
        var r = s.name == null ? null : "" + s.name;
        if (s.type === "hidden" && l.getAttribute("name") === r)
          return l;
      } else return l;
      if (l = kl(l.nextSibling), l === null) break;
    }
    return null;
  }
  function n1(l, n, u) {
    if (n === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !u || (l = kl(l.nextSibling), l === null)) return null;
    return l;
  }
  function Ze(l, n) {
    for (; l.nodeType !== 8; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !n || (l = kl(l.nextSibling), l === null)) return null;
    return l;
  }
  function zp(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function Un(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState !== "loading";
  }
  function zf(l, n) {
    var u = l.ownerDocument;
    if (l.data === "$~") l._reactRetry = n;
    else if (l.data !== "$?" || u.readyState !== "loading")
      n();
    else {
      var c = function() {
        n(), u.removeEventListener("DOMContentLoaded", c);
      };
      u.addEventListener("DOMContentLoaded", c), l._reactRetry = c;
    }
  }
  function kl(l) {
    for (; l != null; l = l.nextSibling) {
      var n = l.nodeType;
      if (n === 1 || n === 3) break;
      if (n === 8) {
        if (n = l.data, n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&" || n === "F!" || n === "F")
          break;
        if (n === "/$" || n === "/&") return null;
      }
    }
    return l;
  }
  var _f = null;
  function qh(l) {
    l = l.nextSibling;
    for (var n = 0; l; ) {
      if (l.nodeType === 8) {
        var u = l.data;
        if (u === "/$" || u === "/&") {
          if (n === 0)
            return kl(l.nextSibling);
          n--;
        } else
          u !== "$" && u !== "$!" && u !== "$?" && u !== "$~" && u !== "&" || n++;
      }
      l = l.nextSibling;
    }
    return null;
  }
  function wh(l) {
    l = l.previousSibling;
    for (var n = 0; l; ) {
      if (l.nodeType === 8) {
        var u = l.data;
        if (u === "$" || u === "$!" || u === "$?" || u === "$~" || u === "&") {
          if (n === 0) return l;
          n--;
        } else u !== "/$" && u !== "/&" || n++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function Fn(l, n, u) {
    switch (n = Mr(u), l) {
      case "html":
        if (l = n.documentElement, !l) throw Error(U(452));
        return l;
      case "head":
        if (l = n.head, !l) throw Error(U(453));
        return l;
      case "body":
        if (l = n.body, !l) throw Error(U(454));
        return l;
      default:
        throw Error(U(451));
    }
  }
  function Di(l) {
    for (var n = l.attributes; n.length; )
      l.removeAttributeNode(n[0]);
    Li(l);
  }
  var Ja = /* @__PURE__ */ new Map(), Gh = /* @__PURE__ */ new Set();
  function mo(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var yl = B.d;
  B.d = {
    f: _p,
    r: u1,
    D: zl,
    C: G,
    L: Ot,
    m: i1,
    X: Rp,
    S: Dp,
    M: Ri
  };
  function _p() {
    var l = yl.f(), n = vr();
    return l || n;
  }
  function u1(l) {
    var n = _c(l);
    n !== null && n.tag === 5 && n.type === "form" ? of(n) : yl.r(l);
  }
  var yo = typeof document > "u" ? null : document;
  function Yg(l, n, u) {
    var c = yo;
    if (c && typeof n == "string" && n) {
      var s = Sn(n);
      s = 'link[rel="' + l + '"][href="' + s + '"]', typeof u == "string" && (s += '[crossorigin="' + u + '"]'), Gh.has(s) || (Gh.add(s), l = { rel: l, crossOrigin: u, href: n }, c.querySelector(s) === null && (n = c.createElement("link"), $l(n, "link", l), Al(n), c.head.appendChild(n)));
    }
  }
  function zl(l) {
    yl.D(l), Yg("dns-prefetch", l, null);
  }
  function G(l, n) {
    yl.C(l, n), Yg("preconnect", l, n);
  }
  function Ot(l, n, u) {
    yl.L(l, n, u);
    var c = yo;
    if (c && l && n) {
      var s = 'link[rel="preload"][as="' + Sn(n) + '"]';
      n === "image" && u && u.imageSrcSet ? (s += '[imagesrcset="' + Sn(
        u.imageSrcSet
      ) + '"]', typeof u.imageSizes == "string" && (s += '[imagesizes="' + Sn(
        u.imageSizes
      ) + '"]')) : s += '[href="' + Sn(l) + '"]';
      var r = s;
      switch (n) {
        case "style":
          r = Vu(l);
          break;
        case "script":
          r = po(l);
      }
      Ja.has(r) || (l = ye(
        {
          rel: "preload",
          href: n === "image" && u && u.imageSrcSet ? void 0 : l,
          as: n
        },
        u
      ), Ja.set(r, l), c.querySelector(s) !== null || n === "style" && c.querySelector(xn(r)) || n === "script" && c.querySelector(Df(r)) || (n = c.createElement("link"), $l(n, "link", l), Al(n), c.head.appendChild(n)));
    }
  }
  function i1(l, n) {
    yl.m(l, n);
    var u = yo;
    if (u && l) {
      var c = n && typeof n.as == "string" ? n.as : "script", s = 'link[rel="modulepreload"][as="' + Sn(c) + '"][href="' + Sn(l) + '"]', r = s;
      switch (c) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          r = po(l);
      }
      if (!Ja.has(r) && (l = ye({ rel: "modulepreload", href: l }, n), Ja.set(r, l), u.querySelector(s) === null)) {
        switch (c) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (u.querySelector(Df(r)))
              return;
        }
        c = u.createElement("link"), $l(c, "link", l), Al(c), u.head.appendChild(c);
      }
    }
  }
  function Dp(l, n, u) {
    yl.S(l, n, u);
    var c = yo;
    if (c && l) {
      var s = Dc(c).hoistableStyles, r = Vu(l);
      n = n || "default";
      var m = s.get(r);
      if (!m) {
        var v = { loading: 0, preload: null };
        if (m = c.querySelector(
          xn(r)
        ))
          v.loading = 5;
        else {
          l = ye(
            { rel: "stylesheet", href: l, "data-precedence": n },
            u
          ), (u = Ja.get(r)) && Xh(l, u);
          var T = m = c.createElement("link");
          Al(T), $l(T, "link", l), T._p = new Promise(function(H, V) {
            T.onload = H, T.onerror = V;
          }), T.addEventListener("load", function() {
            v.loading |= 1;
          }), T.addEventListener("error", function() {
            v.loading |= 2;
          }), v.loading |= 4, Hr(m, n, c);
        }
        m = {
          type: "stylesheet",
          instance: m,
          count: 1,
          state: v
        }, s.set(r, m);
      }
    }
  }
  function Rp(l, n) {
    yl.X(l, n);
    var u = yo;
    if (u && l) {
      var c = Dc(u).hoistableScripts, s = po(l), r = c.get(s);
      r || (r = u.querySelector(Df(s)), r || (l = ye({ src: l, async: !0 }, n), (n = Ja.get(s)) && Lh(l, n), r = u.createElement("script"), Al(r), $l(r, "link", l), u.head.appendChild(r)), r = {
        type: "script",
        instance: r,
        count: 1,
        state: null
      }, c.set(s, r));
    }
  }
  function Ri(l, n) {
    yl.M(l, n);
    var u = yo;
    if (u && l) {
      var c = Dc(u).hoistableScripts, s = po(l), r = c.get(s);
      r || (r = u.querySelector(Df(s)), r || (l = ye({ src: l, async: !0, type: "module" }, n), (n = Ja.get(s)) && Lh(l, n), r = u.createElement("script"), Al(r), $l(r, "link", l), u.head.appendChild(r)), r = {
        type: "script",
        instance: r,
        count: 1,
        state: null
      }, c.set(s, r));
    }
  }
  function Mi(l, n, u, c) {
    var s = (s = De.current) ? mo(s) : null;
    if (!s) throw Error(U(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof u.precedence == "string" && typeof u.href == "string" ? (n = Vu(u.href), u = Dc(
          s
        ).hoistableStyles, c = u.get(n), c || (c = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, u.set(n, c)), c) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (u.rel === "stylesheet" && typeof u.href == "string" && typeof u.precedence == "string") {
          l = Vu(u.href);
          var r = Dc(
            s
          ).hoistableStyles, m = r.get(l);
          if (m || (s = s.ownerDocument || s, m = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, r.set(l, m), (r = s.querySelector(
            xn(l)
          )) && !r._p && (m.instance = r, m.state.loading = 5), Ja.has(l) || (u = {
            rel: "preload",
            as: "style",
            href: u.href,
            crossOrigin: u.crossOrigin,
            integrity: u.integrity,
            media: u.media,
            hrefLang: u.hrefLang,
            referrerPolicy: u.referrerPolicy
          }, Ja.set(l, u), r || xr(
            s,
            l,
            u,
            m.state
          ))), n && c === null)
            throw Error(U(528, ""));
          return m;
        }
        if (n && c !== null)
          throw Error(U(529, ""));
        return null;
      case "script":
        return n = u.async, u = u.src, typeof u == "string" && n && typeof n != "function" && typeof n != "symbol" ? (n = po(u), u = Dc(
          s
        ).hoistableScripts, c = u.get(n), c || (c = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, u.set(n, c)), c) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(U(444, l));
    }
  }
  function Vu(l) {
    return 'href="' + Sn(l) + '"';
  }
  function xn(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function Ur(l) {
    return ye({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function xr(l, n, u, c) {
    l.querySelector('link[rel="preload"][as="style"][' + n + "]") ? c.loading = 1 : (n = l.createElement("link"), c.preload = n, n.addEventListener("load", function() {
      return c.loading |= 1;
    }), n.addEventListener("error", function() {
      return c.loading |= 2;
    }), $l(n, "link", u), Al(n), l.head.appendChild(n));
  }
  function po(l) {
    return '[src="' + Sn(l) + '"]';
  }
  function Df(l) {
    return "script[async]" + l;
  }
  function Mp(l, n, u) {
    if (n.count++, n.instance === null)
      switch (n.type) {
        case "style":
          var c = l.querySelector(
            'style[data-href~="' + Sn(u.href) + '"]'
          );
          if (c)
            return n.instance = c, Al(c), c;
          var s = ye({}, u, {
            "data-href": u.href,
            "data-precedence": u.precedence,
            href: null,
            precedence: null
          });
          return c = (l.ownerDocument || l).createElement(
            "style"
          ), Al(c), $l(c, "style", s), Hr(c, u.precedence, l), n.instance = c;
        case "stylesheet":
          s = Vu(u.href);
          var r = l.querySelector(
            xn(s)
          );
          if (r)
            return n.state.loading |= 4, n.instance = r, Al(r), r;
          c = Ur(u), (s = Ja.get(s)) && Xh(c, s), r = (l.ownerDocument || l).createElement("link"), Al(r);
          var m = r;
          return m._p = new Promise(function(v, T) {
            m.onload = v, m.onerror = T;
          }), $l(r, "link", c), n.state.loading |= 4, Hr(r, u.precedence, l), n.instance = r;
        case "script":
          return r = po(u.src), (s = l.querySelector(
            Df(r)
          )) ? (n.instance = s, Al(s), s) : (c = u, (s = Ja.get(r)) && (c = ye({}, u), Lh(c, s)), l = l.ownerDocument || l, s = l.createElement("script"), Al(s), $l(s, "link", c), l.head.appendChild(s), n.instance = s);
        case "void":
          return null;
        default:
          throw Error(U(443, n.type));
      }
    else
      n.type === "stylesheet" && (n.state.loading & 4) === 0 && (c = n.instance, n.state.loading |= 4, Hr(c, u.precedence, l));
    return n.instance;
  }
  function Hr(l, n, u) {
    for (var c = u.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), s = c.length ? c[c.length - 1] : null, r = s, m = 0; m < c.length; m++) {
      var v = c[m];
      if (v.dataset.precedence === n) r = v;
      else if (r !== s) break;
    }
    r ? r.parentNode.insertBefore(l, r.nextSibling) : (n = u.nodeType === 9 ? u.head : u, n.insertBefore(l, n.firstChild));
  }
  function Xh(l, n) {
    l.crossOrigin == null && (l.crossOrigin = n.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = n.referrerPolicy), l.title == null && (l.title = n.title);
  }
  function Lh(l, n) {
    l.crossOrigin == null && (l.crossOrigin = n.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = n.referrerPolicy), l.integrity == null && (l.integrity = n.integrity);
  }
  var Nr = null;
  function Qh(l, n, u) {
    if (Nr === null) {
      var c = /* @__PURE__ */ new Map(), s = Nr = /* @__PURE__ */ new Map();
      s.set(u, c);
    } else
      s = Nr, c = s.get(u), c || (c = /* @__PURE__ */ new Map(), s.set(u, c));
    if (c.has(l)) return c;
    for (c.set(l, null), u = u.getElementsByTagName(l), s = 0; s < u.length; s++) {
      var r = u[s];
      if (!(r[Yo] || r[vl] || l === "link" && r.getAttribute("rel") === "stylesheet") && r.namespaceURI !== "http://www.w3.org/2000/svg") {
        var m = r.getAttribute(n) || "";
        m = l + m;
        var v = c.get(m);
        v ? v.push(r) : c.set(m, [r]);
      }
    }
    return c;
  }
  function Cp(l, n, u) {
    l = l.ownerDocument || l, l.head.insertBefore(
      u,
      n === "title" ? l.querySelector("head > title") : null
    );
  }
  function Up(l, n, u) {
    if (u === 1 || n.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof n.precedence != "string" || typeof n.href != "string" || n.href === "")
          break;
        return !0;
      case "link":
        if (typeof n.rel != "string" || typeof n.href != "string" || n.href === "" || n.onLoad || n.onError)
          break;
        return n.rel === "stylesheet" ? (l = n.disabled, typeof n.precedence == "string" && l == null) : !0;
      case "script":
        if (n.async && typeof n.async != "function" && typeof n.async != "symbol" && !n.onLoad && !n.onError && n.src && typeof n.src == "string")
          return !0;
    }
    return !1;
  }
  function Vh(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  function fn(l, n, u, c) {
    if (u.type === "stylesheet" && (typeof c.media != "string" || matchMedia(c.media).matches !== !1) && (u.state.loading & 4) === 0) {
      if (u.instance === null) {
        var s = Vu(c.href), r = n.querySelector(
          xn(s)
        );
        if (r) {
          n = r._p, n !== null && typeof n == "object" && typeof n.then == "function" && (l.count++, l = Rf.bind(l), n.then(l, l)), u.state.loading |= 4, u.instance = r, Al(r);
          return;
        }
        r = n.ownerDocument || n, c = Ur(c), (s = Ja.get(s)) && Xh(c, s), r = r.createElement("link"), Al(r);
        var m = r;
        m._p = new Promise(function(v, T) {
          m.onload = v, m.onerror = T;
        }), $l(r, "link", c), u.instance = r;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(u, n), (n = u.state.preload) && (u.state.loading & 3) === 0 && (l.count++, u = Rf.bind(l), n.addEventListener("load", u), n.addEventListener("error", u));
    }
  }
  var Hn = 0;
  function In(l, n) {
    return l.stylesheets && l.count === 0 && Jh(l, l.stylesheets), 0 < l.count || 0 < l.imgCount ? function(u) {
      var c = setTimeout(function() {
        if (l.stylesheets && Jh(l, l.stylesheets), l.unsuspend) {
          var r = l.unsuspend;
          l.unsuspend = null, r();
        }
      }, 6e4 + n);
      0 < l.imgBytes && Hn === 0 && (Hn = 62500 * Ep());
      var s = setTimeout(
        function() {
          if (l.waitingForImages = !1, l.count === 0 && (l.stylesheets && Jh(l, l.stylesheets), l.unsuspend)) {
            var r = l.unsuspend;
            l.unsuspend = null, r();
          }
        },
        (l.imgBytes > Hn ? 50 : 800) + n
      );
      return l.unsuspend = u, function() {
        l.unsuspend = null, clearTimeout(c), clearTimeout(s);
      };
    } : null;
  }
  function Rf() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Jh(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        this.unsuspend = null, l();
      }
    }
  }
  var Zh = null;
  function Jh(l, n) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, Zh = /* @__PURE__ */ new Map(), n.forEach(c1, l), Zh = null, Rf.call(l));
  }
  function c1(l, n) {
    if (!(n.state.loading & 4)) {
      var u = Zh.get(l);
      if (u) var c = u.get(null);
      else {
        u = /* @__PURE__ */ new Map(), Zh.set(l, u);
        for (var s = l.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), r = 0; r < s.length; r++) {
          var m = s[r];
          (m.nodeName === "LINK" || m.getAttribute("media") !== "not all") && (u.set(m.dataset.precedence, m), c = m);
        }
        c && u.set(null, c);
      }
      s = n.instance, m = s.getAttribute("data-precedence"), r = u.get(m) || c, r === c && u.set(null, s), u.set(m, s), this.count++, c = Rf.bind(this), s.addEventListener("load", c), s.addEventListener("error", c), r ? r.parentNode.insertBefore(s, r.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(s, l.firstChild)), n.state.loading |= 4;
    }
  }
  var rl = {
    $$typeof: jt,
    Provider: null,
    Consumer: null,
    _currentValue: ee,
    _currentValue2: ee,
    _threadCount: 0
  };
  function o1(l, n, u, c, s, r, m, v, T) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Gl(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Gl(0), this.hiddenUpdates = Gl(null), this.identifierPrefix = c, this.onUncaughtError = s, this.onCaughtError = r, this.onRecoverableError = m, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = T, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Kh(l, n, u, c, s, r, m, v, T, H, V, k) {
    return l = new o1(
      l,
      n,
      u,
      m,
      T,
      H,
      V,
      k,
      v
    ), n = 1, r === !0 && (n |= 24), r = Ha(3, null, null, n), l.current = r, r.stateNode = l, n = Yd(), n.refCount++, l.pooledCache = n, n.refCount++, r.memoizedState = {
      element: c,
      isDehydrated: u,
      cache: n
    }, Gd(r), l;
  }
  function $h(l) {
    return l ? (l = Gc, l) : Gc;
  }
  function go(l, n, u, c, s, r) {
    s = $h(s), c.context === null ? c.context = s : c.pendingContext = s, c = yi(n), c.payload = { element: u }, r = r === void 0 ? null : r, r !== null && (c.callback = r), u = pi(l, c, n), u !== null && (Za(u, l, n), Du(u, l, n));
  }
  function qg(l, n) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var u = l.retryLane;
      l.retryLane = u !== 0 && u < n ? u : n;
    }
  }
  function jr(l, n) {
    qg(l, n), (l = l.alternate) && qg(l, n);
  }
  function wg(l) {
    if (l.tag === 13 || l.tag === 31) {
      var n = la(l, 67108864);
      n !== null && Za(n, l, 67108864), jr(l, 67108864);
    }
  }
  function Gg(l) {
    if (l.tag === 13 || l.tag === 31) {
      var n = Aa();
      n = Ra(n);
      var u = la(l, n);
      u !== null && Za(u, l, n), jr(l, n);
    }
  }
  var Ci = !0;
  function fa(l, n, u, c) {
    var s = X.T;
    X.T = null;
    var r = B.p;
    try {
      B.p = 2, Nn(l, n, u, c);
    } finally {
      B.p = r, X.T = s;
    }
  }
  function Zu(l, n, u, c) {
    var s = X.T;
    X.T = null;
    var r = B.p;
    try {
      B.p = 8, Nn(l, n, u, c);
    } finally {
      B.p = r, X.T = s;
    }
  }
  function Nn(l, n, u, c) {
    if (Ci) {
      var s = Wl(c);
      if (s === null)
        Ef(
          l,
          n,
          c,
          kh,
          u
        ), sa(l, c);
      else if (Hp(
        s,
        l,
        n,
        u,
        c
      ))
        c.stopPropagation();
      else if (sa(l, c), n & 4 && -1 < Il.indexOf(l)) {
        for (; s !== null; ) {
          var r = _c(s);
          if (r !== null)
            switch (r.tag) {
              case 3:
                if (r = r.stateNode, r.current.memoizedState.isDehydrated) {
                  var m = de(r.pendingLanes);
                  if (m !== 0) {
                    var v = r;
                    for (v.pendingLanes |= 2, v.entangledLanes |= 2; m; ) {
                      var T = 1 << 31 - Ml(m);
                      v.entanglements[1] |= T, m &= ~T;
                    }
                    Wn(r), (mt & 6) === 0 && (gr = Tl() + 500, Tr(0));
                  }
                }
                break;
              case 31:
              case 13:
                v = la(r, 2), v !== null && Za(v, r, 2), vr(), jr(r, 2);
            }
          if (r = Wl(c), r === null && Ef(
            l,
            n,
            c,
            kh,
            u
          ), r === s) break;
          s = r;
        }
        s !== null && c.stopPropagation();
      } else
        Ef(
          l,
          n,
          c,
          null,
          u
        );
    }
  }
  function Wl(l) {
    return l = pd(l), xp(l);
  }
  var kh = null;
  function xp(l) {
    if (kh = null, l = zc(l), l !== null) {
      var n = _e(l);
      if (n === null) l = null;
      else {
        var u = n.tag;
        if (u === 13) {
          if (l = Ye(n), l !== null) return l;
          l = null;
        } else if (u === 31) {
          if (l = gt(n), l !== null) return l;
          l = null;
        } else if (u === 3) {
          if (n.stateNode.current.memoizedState.isDehydrated)
            return n.tag === 3 ? n.stateNode.containerInfo : null;
          l = null;
        } else n !== l && (l = null);
      }
    }
    return kh = l, null;
  }
  function Br(l) {
    switch (l) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (qi()) {
          case ls:
            return 2;
          case jo:
            return 8;
          case wi:
          case Gi:
            return 32;
          case as:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Mf = !1, Pn = null, _l = null, Fl = null, sn = /* @__PURE__ */ new Map(), yc = /* @__PURE__ */ new Map(), Oa = [], Il = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function sa(l, n) {
    switch (l) {
      case "focusin":
      case "focusout":
        Pn = null;
        break;
      case "dragenter":
      case "dragleave":
        _l = null;
        break;
      case "mouseover":
      case "mouseout":
        Fl = null;
        break;
      case "pointerover":
      case "pointerout":
        sn.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        yc.delete(n.pointerId);
    }
  }
  function jn(l, n, u, c, s, r) {
    return l === null || l.nativeEvent !== r ? (l = {
      blockedOn: n,
      domEventName: u,
      eventSystemFlags: c,
      nativeEvent: r,
      targetContainers: [s]
    }, n !== null && (n = _c(n), n !== null && wg(n)), l) : (l.eventSystemFlags |= c, n = l.targetContainers, s !== null && n.indexOf(s) === -1 && n.push(s), l);
  }
  function Hp(l, n, u, c, s) {
    switch (n) {
      case "focusin":
        return Pn = jn(
          Pn,
          l,
          n,
          u,
          c,
          s
        ), !0;
      case "dragenter":
        return _l = jn(
          _l,
          l,
          n,
          u,
          c,
          s
        ), !0;
      case "mouseover":
        return Fl = jn(
          Fl,
          l,
          n,
          u,
          c,
          s
        ), !0;
      case "pointerover":
        var r = s.pointerId;
        return sn.set(
          r,
          jn(
            sn.get(r) || null,
            l,
            n,
            u,
            c,
            s
          )
        ), !0;
      case "gotpointercapture":
        return r = s.pointerId, yc.set(
          r,
          jn(
            yc.get(r) || null,
            l,
            n,
            u,
            c,
            s
          )
        ), !0;
    }
    return !1;
  }
  function Xg(l) {
    var n = zc(l.target);
    if (n !== null) {
      var u = _e(n);
      if (u !== null) {
        if (n = u.tag, n === 13) {
          if (n = Ye(u), n !== null) {
            l.blockedOn = n, dd(l.priority, function() {
              Gg(u);
            });
            return;
          }
        } else if (n === 31) {
          if (n = gt(u), n !== null) {
            l.blockedOn = n, dd(l.priority, function() {
              Gg(u);
            });
            return;
          }
        } else if (n === 3 && u.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = u.tag === 3 ? u.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function Wh(l) {
    if (l.blockedOn !== null) return !1;
    for (var n = l.targetContainers; 0 < n.length; ) {
      var u = Wl(l.nativeEvent);
      if (u === null) {
        u = l.nativeEvent;
        var c = new u.constructor(
          u.type,
          u
        );
        ms = c, u.target.dispatchEvent(c), ms = null;
      } else
        return n = _c(u), n !== null && wg(n), l.blockedOn = u, !1;
      n.shift();
    }
    return !0;
  }
  function Np(l, n, u) {
    Wh(l) && u.delete(n);
  }
  function Yr() {
    Mf = !1, Pn !== null && Wh(Pn) && (Pn = null), _l !== null && Wh(_l) && (_l = null), Fl !== null && Wh(Fl) && (Fl = null), sn.forEach(Np), yc.forEach(Np);
  }
  function qr(l, n) {
    l.blockedOn === n && (l.blockedOn = null, Mf || (Mf = !0, J.unstable_scheduleCallback(
      J.unstable_NormalPriority,
      Yr
    )));
  }
  var Ju = null;
  function Fh(l) {
    Ju !== l && (Ju = l, J.unstable_scheduleCallback(
      J.unstable_NormalPriority,
      function() {
        Ju === l && (Ju = null);
        for (var n = 0; n < l.length; n += 3) {
          var u = l[n], c = l[n + 1], s = l[n + 2];
          if (typeof c != "function") {
            if (xp(c || u) === null)
              continue;
            break;
          }
          var r = _c(u);
          r !== null && (l.splice(n, 3), n -= 3, ih(
            r,
            {
              pending: !0,
              data: s,
              method: u.method,
              action: c
            },
            c,
            s
          ));
        }
      }
    ));
  }
  function Cf(l) {
    function n(T) {
      return qr(T, l);
    }
    Pn !== null && qr(Pn, l), _l !== null && qr(_l, l), Fl !== null && qr(Fl, l), sn.forEach(n), yc.forEach(n);
    for (var u = 0; u < Oa.length; u++) {
      var c = Oa[u];
      c.blockedOn === l && (c.blockedOn = null);
    }
    for (; 0 < Oa.length && (u = Oa[0], u.blockedOn === null); )
      Xg(u), u.blockedOn === null && Oa.shift();
    if (u = (l.ownerDocument || l).$$reactFormReplay, u != null)
      for (c = 0; c < u.length; c += 3) {
        var s = u[c], r = u[c + 1], m = s[Vt] || null;
        if (typeof r == "function")
          m || Fh(u);
        else if (m) {
          var v = null;
          if (r && r.hasAttribute("formAction")) {
            if (s = r, m = r[Vt] || null)
              v = m.formAction;
            else if (xp(s) !== null) continue;
          } else v = m.action;
          typeof v == "function" ? u[c + 1] = v : (u.splice(c, 3), c -= 3), Fh(u);
        }
      }
  }
  function Lg() {
    function l(r) {
      r.canIntercept && r.info === "react-transition" && r.intercept({
        handler: function() {
          return new Promise(function(m) {
            return s = m;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function n() {
      s !== null && (s(), s = null), c || setTimeout(u, 20);
    }
    function u() {
      if (!c && !navigation.transition) {
        var r = navigation.currentEntry;
        r && r.url != null && navigation.navigate(r.url, {
          state: r.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var c = !1, s = null;
      return navigation.addEventListener("navigate", l), navigation.addEventListener("navigatesuccess", n), navigation.addEventListener("navigateerror", n), setTimeout(u, 100), function() {
        c = !0, navigation.removeEventListener("navigate", l), navigation.removeEventListener("navigatesuccess", n), navigation.removeEventListener("navigateerror", n), s !== null && (s(), s = null);
      };
    }
  }
  function Ih(l) {
    this._internalRoot = l;
  }
  wr.prototype.render = Ih.prototype.render = function(l) {
    var n = this._internalRoot;
    if (n === null) throw Error(U(409));
    var u = n.current, c = Aa();
    go(u, c, l, n, null, null);
  }, wr.prototype.unmount = Ih.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var n = l.containerInfo;
      go(l.current, 2, null, l, null, null), vr(), n[Oc] = null;
    }
  };
  function wr(l) {
    this._internalRoot = l;
  }
  wr.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var n = U0();
      l = { blockedOn: null, target: l, priority: n };
      for (var u = 0; u < Oa.length && n !== 0 && n < Oa[u].priority; u++) ;
      Oa.splice(u, 0, l), u === 0 && Xg(l);
    }
  };
  var Qg = F.version;
  if (Qg !== "19.2.4")
    throw Error(
      U(
        527,
        Qg,
        "19.2.4"
      )
    );
  B.findDOMNode = function(l) {
    var n = l._reactInternals;
    if (n === void 0)
      throw typeof l.render == "function" ? Error(U(188)) : (l = Object.keys(l).join(","), Error(U(268, l)));
    return l = Q(n), l = l !== null ? we(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var Vg = {
    bundleType: 0,
    version: "19.2.4",
    rendererPackageName: "react-dom",
    currentDispatcherRef: X,
    reconcilerVersion: "19.2.4"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Gr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Gr.isDisabled && Gr.supportsFiber)
      try {
        wn = Gr.inject(
          Vg
        ), gl = Gr;
      } catch {
      }
  }
  return R0.createRoot = function(l, n) {
    if (!Ce(l)) throw Error(U(299));
    var u = !1, c = "", s = jy, r = oh, m = By;
    return n != null && (n.unstable_strictMode === !0 && (u = !0), n.identifierPrefix !== void 0 && (c = n.identifierPrefix), n.onUncaughtError !== void 0 && (s = n.onUncaughtError), n.onCaughtError !== void 0 && (r = n.onCaughtError), n.onRecoverableError !== void 0 && (m = n.onRecoverableError)), n = Kh(
      l,
      1,
      !1,
      null,
      null,
      u,
      c,
      null,
      s,
      r,
      m,
      Lg
    ), l[Oc] = n.current, pp(l), new Ih(n);
  }, R0.hydrateRoot = function(l, n, u) {
    if (!Ce(l)) throw Error(U(299));
    var c = !1, s = "", r = jy, m = oh, v = By, T = null;
    return u != null && (u.unstable_strictMode === !0 && (c = !0), u.identifierPrefix !== void 0 && (s = u.identifierPrefix), u.onUncaughtError !== void 0 && (r = u.onUncaughtError), u.onCaughtError !== void 0 && (m = u.onCaughtError), u.onRecoverableError !== void 0 && (v = u.onRecoverableError), u.formState !== void 0 && (T = u.formState)), n = Kh(
      l,
      1,
      !0,
      n,
      u ?? null,
      c,
      s,
      T,
      r,
      m,
      v,
      Lg
    ), n.context = $h(null), u = n.current, c = Aa(), c = Ra(c), s = yi(c), s.callback = null, pi(u, s, c), u = c, n.current.lanes = u, Da(n, u), Wn(n), l[Oc] = n.current, pp(l), new wr(n);
  }, R0.version = "19.2.4", R0;
}
var M0 = {}, KE;
function YA() {
  if (KE) return M0;
  KE = 1;
  var J = {};
  return J.NODE_ENV !== "production" && (function() {
    function F(e, t) {
      for (e = e.memoizedState; e !== null && 0 < t; )
        e = e.next, t--;
      return e;
    }
    function ve(e, t, a, i) {
      if (a >= t.length) return i;
      var o = t[a], f = zl(e) ? e.slice() : Ze({}, e);
      return f[o] = ve(e[o], t, a + 1, i), f;
    }
    function U(e, t, a) {
      if (t.length !== a.length)
        console.warn("copyWithRename() expects paths of the same length");
      else {
        for (var i = 0; i < a.length - 1; i++)
          if (t[i] !== a[i]) {
            console.warn(
              "copyWithRename() expects paths to be the same except for the deepest key"
            );
            return;
          }
        return Ce(e, t, a, 0);
      }
    }
    function Ce(e, t, a, i) {
      var o = t[i], f = zl(e) ? e.slice() : Ze({}, e);
      return i + 1 === t.length ? (f[a[i]] = f[o], zl(f) ? f.splice(o, 1) : delete f[o]) : f[o] = Ce(
        e[o],
        t,
        a,
        i + 1
      ), f;
    }
    function _e(e, t, a) {
      var i = t[a], o = zl(e) ? e.slice() : Ze({}, e);
      return a + 1 === t.length ? (zl(o) ? o.splice(i, 1) : delete o[i], o) : (o[i] = _e(e[i], t, a + 1), o);
    }
    function Ye() {
      return !1;
    }
    function gt() {
      return null;
    }
    function L() {
      console.error(
        "Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://react.dev/link/rules-of-hooks"
      );
    }
    function Q() {
      console.error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
      );
    }
    function we() {
    }
    function ye() {
    }
    function W(e) {
      var t = [];
      return e.forEach(function(a) {
        t.push(a);
      }), t.sort().join(", ");
    }
    function N(e, t, a, i) {
      return new Iv(e, t, a, i);
    }
    function oe(e, t) {
      e.context === Nf && (vp(e.current, 2, t, e, null, null), ao());
    }
    function Le(e, t) {
      if (ku !== null) {
        var a = t.staleFamilies;
        t = t.updatedFamilies, fc(), $0(
          e.current,
          t,
          a
        ), ao();
      }
    }
    function al(e) {
      ku = e;
    }
    function Pe(e) {
      return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
    }
    function ht(e) {
      var t = e, a = e;
      if (e.alternate) for (; t.return; ) t = t.return;
      else {
        e = t;
        do
          t = e, (t.flags & 4098) !== 0 && (a = t.return), e = t.return;
        while (e);
      }
      return t.tag === 3 ? a : null;
    }
    function jt(e) {
      if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
      }
      return null;
    }
    function It(e) {
      if (e.tag === 31) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
      }
      return null;
    }
    function nl(e) {
      if (ht(e) !== e)
        throw Error("Unable to find node on an unmounted component.");
    }
    function Bt(e) {
      var t = e.alternate;
      if (!t) {
        if (t = ht(e), t === null)
          throw Error("Unable to find node on an unmounted component.");
        return t !== e ? null : e;
      }
      for (var a = e, i = t; ; ) {
        var o = a.return;
        if (o === null) break;
        var f = o.alternate;
        if (f === null) {
          if (i = o.return, i !== null) {
            a = i;
            continue;
          }
          break;
        }
        if (o.child === f.child) {
          for (f = o.child; f; ) {
            if (f === a) return nl(o), e;
            if (f === i) return nl(o), t;
            f = f.sibling;
          }
          throw Error("Unable to find node on an unmounted component.");
        }
        if (a.return !== i.return) a = o, i = f;
        else {
          for (var d = !1, h = o.child; h; ) {
            if (h === a) {
              d = !0, a = o, i = f;
              break;
            }
            if (h === i) {
              d = !0, i = o, a = f;
              break;
            }
            h = h.sibling;
          }
          if (!d) {
            for (h = f.child; h; ) {
              if (h === a) {
                d = !0, a = f, i = o;
                break;
              }
              if (h === i) {
                d = !0, i = f, a = o;
                break;
              }
              h = h.sibling;
            }
            if (!d)
              throw Error(
                "Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue."
              );
          }
        }
        if (a.alternate !== i)
          throw Error(
            "Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue."
          );
      }
      if (a.tag !== 3)
        throw Error("Unable to find node on an unmounted component.");
      return a.stateNode.current === a ? e : t;
    }
    function Ge(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e;
      for (e = e.child; e !== null; ) {
        if (t = Ge(e), t !== null) return t;
        e = e.sibling;
      }
      return null;
    }
    function _t(e) {
      return e === null || typeof e != "object" ? null : (e = yo && e[yo] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    function tt(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === Yg ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case kl:
          return "Fragment";
        case qh:
          return "Profiler";
        case _f:
          return "StrictMode";
        case Ja:
          return "Suspense";
        case Gh:
          return "SuspenseList";
        case _p:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case zf:
            return "Portal";
          case Fn:
            return e.displayName || "Context";
          case wh:
            return (e._context.displayName || "Context") + ".Consumer";
          case Di:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case mo:
            return t = e.displayName || null, t !== null ? t : tt(e.type) || "Memo";
          case yl:
            t = e._payload, e = e._init;
            try {
              return tt(e(t));
            } catch {
            }
        }
      return null;
    }
    function Qt(e) {
      return typeof e.tag == "number" ? re(e) : typeof e.name == "string" ? e.name : null;
    }
    function re(e) {
      var t = e.type;
      switch (e.tag) {
        case 31:
          return "Activity";
        case 24:
          return "Cache";
        case 9:
          return (t._context.displayName || "Context") + ".Consumer";
        case 10:
          return t.displayName || "Context";
        case 18:
          return "DehydratedFragment";
        case 11:
          return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
          return "Fragment";
        case 26:
        case 27:
        case 5:
          return t;
        case 4:
          return "Portal";
        case 3:
          return "Root";
        case 6:
          return "Text";
        case 16:
          return tt(t);
        case 8:
          return t === _f ? "StrictMode" : "Mode";
        case 22:
          return "Offscreen";
        case 12:
          return "Profiler";
        case 21:
          return "Scope";
        case 13:
          return "Suspense";
        case 19:
          return "SuspenseList";
        case 25:
          return "TracingMarker";
        case 1:
        case 0:
        case 14:
        case 15:
          if (typeof t == "function")
            return t.displayName || t.name || null;
          if (typeof t == "string") return t;
          break;
        case 29:
          if (t = e._debugInfo, t != null) {
            for (var a = t.length - 1; 0 <= a; a--)
              if (typeof t[a].name == "string") return t[a].name;
          }
          if (e.return !== null)
            return re(e.return);
      }
      return null;
    }
    function bt(e) {
      return { current: e };
    }
    function Oe(e, t) {
      0 > Ri ? console.error("Unexpected pop.") : (t !== Rp[Ri] && console.error("Unexpected Fiber popped."), e.current = Dp[Ri], Dp[Ri] = null, Rp[Ri] = null, Ri--);
    }
    function xe(e, t, a) {
      Ri++, Dp[Ri] = e.current, Rp[Ri] = a, e.current = t;
    }
    function Yt(e) {
      return e === null && console.error(
        "Expected host context to exist. This error is likely caused by a bug in React. Please file an issue."
      ), e;
    }
    function X(e, t) {
      xe(xn, t, e), xe(Vu, e, e), xe(Mi, null, e);
      var a = t.nodeType;
      switch (a) {
        case 9:
        case 11:
          a = a === 9 ? "#document" : "#fragment", t = (t = t.documentElement) && (t = t.namespaceURI) ? zi(t) : Uo;
          break;
        default:
          if (a = t.tagName, t = t.namespaceURI)
            t = zi(t), t = vr(
              t,
              a
            );
          else
            switch (a) {
              case "svg":
                t = Mm;
                break;
              case "math":
                t = Nv;
                break;
              default:
                t = Uo;
            }
      }
      a = a.toLowerCase(), a = ds(null, a), a = {
        context: t,
        ancestorInfo: a
      }, Oe(Mi, e), xe(Mi, a, e);
    }
    function B(e) {
      Oe(Mi, e), Oe(Vu, e), Oe(xn, e);
    }
    function ee() {
      return Yt(Mi.current);
    }
    function ce(e) {
      e.memoizedState !== null && xe(Ur, e, e);
      var t = Yt(Mi.current), a = e.type, i = vr(t.context, a);
      a = ds(t.ancestorInfo, a), i = { context: i, ancestorInfo: a }, t !== i && (xe(Vu, e, e), xe(Mi, i, e));
    }
    function be(e) {
      Vu.current === e && (Oe(Mi, e), Oe(Vu, e)), Ur.current === e && (Oe(Ur, e), A0._currentValue = fd);
    }
    function O() {
    }
    function A() {
      if (xr === 0) {
        po = console.log, Df = console.info, Mp = console.warn, Hr = console.error, Xh = console.group, Lh = console.groupCollapsed, Nr = console.groupEnd;
        var e = {
          configurable: !0,
          enumerable: !0,
          value: O,
          writable: !0
        };
        Object.defineProperties(console, {
          info: e,
          log: e,
          warn: e,
          error: e,
          group: e,
          groupCollapsed: e,
          groupEnd: e
        });
      }
      xr++;
    }
    function $() {
      if (xr--, xr === 0) {
        var e = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: Ze({}, e, { value: po }),
          info: Ze({}, e, { value: Df }),
          warn: Ze({}, e, { value: Mp }),
          error: Ze({}, e, { value: Hr }),
          group: Ze({}, e, { value: Xh }),
          groupCollapsed: Ze({}, e, { value: Lh }),
          groupEnd: Ze({}, e, { value: Nr })
        });
      }
      0 > xr && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function te(e) {
      var t = Error.prepareStackTrace;
      if (Error.prepareStackTrace = void 0, e = e.stack, Error.prepareStackTrace = t, e.startsWith(`Error: react-stack-top-frame
`) && (e = e.slice(29)), t = e.indexOf(`
`), t !== -1 && (e = e.slice(t + 1)), t = e.indexOf("react_stack_bottom_frame"), t !== -1 && (t = e.lastIndexOf(
        `
`,
        t
      )), t !== -1)
        e = e.slice(0, t);
      else return "";
      return e;
    }
    function ne(e) {
      if (Qh === void 0)
        try {
          throw Error();
        } catch (a) {
          var t = a.stack.trim().match(/\n( *(at )?)/);
          Qh = t && t[1] || "", Cp = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + Qh + e + Cp;
    }
    function De(e, t) {
      if (!e || Up) return "";
      var a = Vh.get(e);
      if (a !== void 0) return a;
      Up = !0, a = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var i = null;
      i = G.H, G.H = null, A();
      try {
        var o = {
          DetermineComponentFrameRoot: function() {
            try {
              if (t) {
                var b = function() {
                  throw Error();
                };
                if (Object.defineProperty(b.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(b, []);
                  } catch (ue) {
                    var Y = ue;
                  }
                  Reflect.construct(e, [], b);
                } else {
                  try {
                    b.call();
                  } catch (ue) {
                    Y = ue;
                  }
                  e.call(b.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (ue) {
                  Y = ue;
                }
                (b = e()) && typeof b.catch == "function" && b.catch(function() {
                });
              }
            } catch (ue) {
              if (ue && Y && typeof ue.stack == "string")
                return [ue.stack, Y.stack];
            }
            return [null, null];
          }
        };
        o.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var f = Object.getOwnPropertyDescriptor(
          o.DetermineComponentFrameRoot,
          "name"
        );
        f && f.configurable && Object.defineProperty(
          o.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var d = o.DetermineComponentFrameRoot(), h = d[0], y = d[1];
        if (h && y) {
          var p = h.split(`
`), _ = y.split(`
`);
          for (d = f = 0; f < p.length && !p[f].includes(
            "DetermineComponentFrameRoot"
          ); )
            f++;
          for (; d < _.length && !_[d].includes(
            "DetermineComponentFrameRoot"
          ); )
            d++;
          if (f === p.length || d === _.length)
            for (f = p.length - 1, d = _.length - 1; 1 <= f && 0 <= d && p[f] !== _[d]; )
              d--;
          for (; 1 <= f && 0 <= d; f--, d--)
            if (p[f] !== _[d]) {
              if (f !== 1 || d !== 1)
                do
                  if (f--, d--, 0 > d || p[f] !== _[d]) {
                    var R = `
` + p[f].replace(
                      " at new ",
                      " at "
                    );
                    return e.displayName && R.includes("<anonymous>") && (R = R.replace("<anonymous>", e.displayName)), typeof e == "function" && Vh.set(e, R), R;
                  }
                while (1 <= f && 0 <= d);
              break;
            }
        }
      } finally {
        Up = !1, G.H = i, $(), Error.prepareStackTrace = a;
      }
      return p = (p = e ? e.displayName || e.name : "") ? ne(p) : "", typeof e == "function" && Vh.set(e, p), p;
    }
    function lt(e, t) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return ne(e.type);
        case 16:
          return ne("Lazy");
        case 13:
          return e.child !== t && t !== null ? ne("Suspense Fallback") : ne("Suspense");
        case 19:
          return ne("SuspenseList");
        case 0:
        case 15:
          return De(e.type, !1);
        case 11:
          return De(e.type.render, !1);
        case 1:
          return De(e.type, !0);
        case 31:
          return ne("Activity");
        default:
          return "";
      }
    }
    function We(e) {
      try {
        var t = "", a = null;
        do {
          t += lt(e, a);
          var i = e._debugInfo;
          if (i)
            for (var o = i.length - 1; 0 <= o; o--) {
              var f = i[o];
              if (typeof f.name == "string") {
                var d = t;
                e: {
                  var h = f.name, y = f.env, p = f.debugLocation;
                  if (p != null) {
                    var _ = te(p), R = _.lastIndexOf(`
`), b = R === -1 ? _ : _.slice(R + 1);
                    if (b.indexOf(h) !== -1) {
                      var Y = `
` + b;
                      break e;
                    }
                  }
                  Y = ne(
                    h + (y ? " [" + y + "]" : "")
                  );
                }
                t = d + Y;
              }
            }
          a = e, e = e.return;
        } while (e);
        return t;
      } catch (ue) {
        return `
Error generating stack: ` + ue.message + `
` + ue.stack;
      }
    }
    function Et(e) {
      return (e = e ? e.displayName || e.name : "") ? ne(e) : "";
    }
    function ta() {
      if (fn === null) return null;
      var e = fn._debugOwner;
      return e != null ? Qt(e) : null;
    }
    function gn() {
      if (fn === null) return "";
      var e = fn;
      try {
        var t = "";
        switch (e.tag === 6 && (e = e.return), e.tag) {
          case 26:
          case 27:
          case 5:
            t += ne(e.type);
            break;
          case 13:
            t += ne("Suspense");
            break;
          case 19:
            t += ne("SuspenseList");
            break;
          case 31:
            t += ne("Activity");
            break;
          case 30:
          case 0:
          case 15:
          case 1:
            e._debugOwner || t !== "" || (t += Et(
              e.type
            ));
            break;
          case 11:
            e._debugOwner || t !== "" || (t += Et(
              e.type.render
            ));
        }
        for (; e; )
          if (typeof e.tag == "number") {
            var a = e;
            e = a._debugOwner;
            var i = a._debugStack;
            if (e && i) {
              var o = te(i);
              o !== "" && (t += `
` + o);
            }
          } else if (e.debugStack != null) {
            var f = e.debugStack;
            (e = e.owner) && f && (t += `
` + te(f));
          } else break;
        var d = t;
      } catch (h) {
        d = `
Error generating stack: ` + h.message + `
` + h.stack;
      }
      return d;
    }
    function se(e, t, a, i, o, f, d) {
      var h = fn;
      Tc(e);
      try {
        return e !== null && e._debugTask ? e._debugTask.run(
          t.bind(null, a, i, o, f, d)
        ) : t(a, i, o, f, d);
      } finally {
        Tc(h);
      }
      throw Error(
        "runWithFiberInDEV should never be called in production. This is a bug in React."
      );
    }
    function Tc(e) {
      G.getCurrentStack = e === null ? null : gn, Hn = !1, fn = e;
    }
    function Wa(e) {
      return typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
    }
    function ui(e) {
      try {
        return uu(e), !1;
      } catch {
        return !0;
      }
    }
    function uu(e) {
      return "" + e;
    }
    function zt(e, t) {
      if (ui(e))
        return console.error(
          "The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before using it here.",
          t,
          Wa(e)
        ), uu(e);
    }
    function wl(e, t) {
      if (ui(e))
        return console.error(
          "The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before using it here.",
          t,
          Wa(e)
        ), uu(e);
    }
    function Yi(e) {
      if (ui(e))
        return console.error(
          "Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before using it here.",
          Wa(e)
        ), uu(e);
    }
    function ts(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u") return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled) return !0;
      if (!t.supportsFiber)
        return console.error(
          "The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://react.dev/link/react-devtools"
        ), !0;
      try {
        Ci = t.inject(e), fa = t;
      } catch (a) {
        console.error("React instrumentation encountered an error: %o.", a);
      }
      return !!t.checkDCE;
    }
    function me(e) {
      if (typeof wg == "function" && Gg(e), fa && typeof fa.setStrictMode == "function")
        try {
          fa.setStrictMode(Ci, e);
        } catch (t) {
          Zu || (Zu = !0, console.error(
            "React instrumentation encountered an error: %o",
            t
          ));
        }
    }
    function No(e) {
      return e >>>= 0, e === 0 ? 32 : 31 - (kh(e) / xp | 0) | 0;
    }
    function iu(e) {
      var t = e & 42;
      if (t !== 0) return t;
      switch (e & -e) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
          return 64;
        case 128:
          return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
          return e & 261888;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return e & 3932160;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return e & 62914560;
        case 67108864:
          return 67108864;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 0;
        default:
          return console.error(
            "Should have found matching lanes. This is a bug in React."
          ), e;
      }
    }
    function Tl(e, t, a) {
      var i = e.pendingLanes;
      if (i === 0) return 0;
      var o = 0, f = e.suspendedLanes, d = e.pingedLanes;
      e = e.warmLanes;
      var h = i & 134217727;
      return h !== 0 ? (i = h & ~f, i !== 0 ? o = iu(i) : (d &= h, d !== 0 ? o = iu(d) : a || (a = h & ~e, a !== 0 && (o = iu(a))))) : (h = i & ~f, h !== 0 ? o = iu(h) : d !== 0 ? o = iu(d) : a || (a = i & ~e, a !== 0 && (o = iu(a)))), o === 0 ? 0 : t !== 0 && t !== o && (t & f) === 0 && (f = o & -o, a = t & -t, f >= a || f === 32 && (a & 4194048) !== 0) ? t : o;
    }
    function qi(e, t) {
      return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
    }
    function ls(e, t) {
      switch (e) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
          return t + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return console.error(
            "Should have found matching lanes. This is a bug in React."
          ), -1;
      }
    }
    function jo() {
      var e = Pn;
      return Pn <<= 1, (Pn & 62914560) === 0 && (Pn = 4194304), e;
    }
    function wi(e) {
      for (var t = [], a = 0; 31 > a; a++) t.push(e);
      return t;
    }
    function Gi(e, t) {
      e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
    }
    function as(e, t, a, i, o, f) {
      var d = e.pendingLanes;
      e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0;
      var h = e.entanglements, y = e.expirationTimes, p = e.hiddenUpdates;
      for (a = d & ~a; 0 < a; ) {
        var _ = 31 - Wl(a), R = 1 << _;
        h[_] = 0, y[_] = -1;
        var b = p[_];
        if (b !== null)
          for (p[_] = null, _ = 0; _ < b.length; _++) {
            var Y = b[_];
            Y !== null && (Y.lane &= -536870913);
          }
        a &= ~R;
      }
      i !== 0 && ns(e, i, 0), f !== 0 && o === 0 && e.tag !== 0 && (e.suspendedLanes |= f & ~(d & ~t));
    }
    function ns(e, t, a) {
      e.pendingLanes |= t, e.suspendedLanes &= ~t;
      var i = 31 - Wl(t);
      e.entangledLanes |= t, e.entanglements[i] = e.entanglements[i] | 1073741824 | a & 261930;
    }
    function us(e, t) {
      var a = e.entangledLanes |= t;
      for (e = e.entanglements; a; ) {
        var i = 31 - Wl(a), o = 1 << i;
        o & t | e[i] & t && (e[i] |= t), a &= ~o;
      }
    }
    function wn(e, t) {
      var a = t & -t;
      return a = (a & 42) !== 0 ? 1 : gl(a), (a & (e.suspendedLanes | t)) !== 0 ? 0 : a;
    }
    function gl(e) {
      switch (e) {
        case 2:
          e = 1;
          break;
        case 8:
          e = 4;
          break;
        case 32:
          e = 16;
          break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          e = 128;
          break;
        case 268435456:
          e = 134217728;
          break;
        default:
          e = 0;
      }
      return e;
    }
    function _a(e, t, a) {
      if (Nn)
        for (e = e.pendingUpdatersLaneMap; 0 < a; ) {
          var i = 31 - Wl(a), o = 1 << i;
          e[i].add(t), a &= ~o;
        }
    }
    function Ml(e, t) {
      if (Nn)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; 0 < t; ) {
          var o = 31 - Wl(t);
          e = 1 << o, o = a[o], 0 < o.size && (o.forEach(function(f) {
            var d = f.alternate;
            d !== null && i.has(d) || i.add(f);
          }), o.clear()), t &= ~e;
        }
    }
    function Bo(e) {
      return e &= -e, _l < e ? Fl < e ? (e & 134217727) !== 0 ? sn : yc : Fl : _l;
    }
    function Xi() {
      var e = Ot.p;
      return e !== 0 ? e : (e = window.event, e === void 0 ? sn : jh(e.type));
    }
    function g(e, t) {
      var a = Ot.p;
      try {
        return Ot.p = e, t();
      } finally {
        Ot.p = a;
      }
    }
    function M(e) {
      delete e[Il], delete e[sa], delete e[Hp], delete e[Xg], delete e[Wh];
    }
    function P(e) {
      var t = e[Il];
      if (t) return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[jn] || a[Il]) {
          if (a = t.alternate, t.child !== null || a !== null && a.child !== null)
            for (e = _h(e); e !== null; ) {
              if (a = e[Il])
                return a;
              e = _h(e);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function ae(e) {
      if (e = e[Il] || e[jn]) {
        var t = e.tag;
        if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
          return e;
      }
      return null;
    }
    function de(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6)
        return e.stateNode;
      throw Error("getNodeFromInstance: Invalid argument.");
    }
    function He(e) {
      var t = e[Np];
      return t || (t = e[Np] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
    }
    function pe(e) {
      e[Yr] = !0;
    }
    function ot(e, t) {
      Be(e, t), Be(e + "Capture", t);
    }
    function Be(e, t) {
      Ju[e] && console.error(
        "EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.",
        e
      ), Ju[e] = t;
      var a = e.toLowerCase();
      for (Fh[a] = e, e === "onDoubleClick" && (Fh.ondblclick = e), e = 0; e < t.length; e++)
        qr.add(t[e]);
    }
    function Gl(e, t) {
      Cf[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || console.error(
        e === "select" ? "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set `onChange`." : "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."
      ), t.onChange || t.readOnly || t.disabled || t.checked == null || console.error(
        "You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`."
      );
    }
    function Da(e) {
      return In.call(wr, e) ? !0 : In.call(Ih, e) ? !1 : Lg.test(e) ? wr[e] = !0 : (Ih[e] = !0, console.error("Invalid attribute name: `%s`", e), !1);
    }
    function sd(e, t, a) {
      if (Da(t)) {
        if (!e.hasAttribute(t)) {
          switch (typeof a) {
            case "symbol":
            case "object":
              return a;
            case "function":
              return a;
            case "boolean":
              if (a === !1) return a;
          }
          return a === void 0 ? void 0 : null;
        }
        return e = e.getAttribute(t), e === "" && a === !0 ? !0 : (zt(a, t), e === "" + a ? a : e);
      }
    }
    function Ac(e, t, a) {
      if (Da(t))
        if (a === null) e.removeAttribute(t);
        else {
          switch (typeof a) {
            case "undefined":
            case "function":
            case "symbol":
              e.removeAttribute(t);
              return;
            case "boolean":
              var i = t.toLowerCase().slice(0, 5);
              if (i !== "data-" && i !== "aria-") {
                e.removeAttribute(t);
                return;
              }
          }
          zt(a, t), e.setAttribute(t, "" + a);
        }
    }
    function is(e, t, a) {
      if (a === null) e.removeAttribute(t);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            e.removeAttribute(t);
            return;
        }
        zt(a, t), e.setAttribute(t, "" + a);
      }
    }
    function cu(e, t, a, i) {
      if (i === null) e.removeAttribute(a);
      else {
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            e.removeAttribute(a);
            return;
        }
        zt(i, a), e.setAttributeNS(t, a, "" + i);
      }
    }
    function Ra(e) {
      switch (typeof e) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return Yi(e), e;
        default:
          return "";
      }
    }
    function rd(e) {
      var t = e.type;
      return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function U0(e, t, a) {
      var i = Object.getOwnPropertyDescriptor(
        e.constructor.prototype,
        t
      );
      if (!e.hasOwnProperty(t) && typeof i < "u" && typeof i.get == "function" && typeof i.set == "function") {
        var o = i.get, f = i.set;
        return Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return o.call(this);
          },
          set: function(d) {
            Yi(d), a = "" + d, f.call(this, d);
          }
        }), Object.defineProperty(e, t, {
          enumerable: i.enumerable
        }), {
          getValue: function() {
            return a;
          },
          setValue: function(d) {
            Yi(d), a = "" + d;
          },
          stopTracking: function() {
            e._valueTracker = null, delete e[t];
          }
        };
      }
    }
    function dd(e) {
      if (!e._valueTracker) {
        var t = rd(e) ? "checked" : "value";
        e._valueTracker = U0(
          e,
          t,
          "" + e[t]
        );
      }
    }
    function ii(e) {
      if (!e) return !1;
      var t = e._valueTracker;
      if (!t) return !0;
      var a = t.getValue(), i = "";
      return e && (i = rd(e) ? e.checked ? "true" : "false" : e.value), e = i, e !== a ? (t.setValue(e), !0) : !1;
    }
    function vl(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    function Vt(e) {
      return e.replace(
        Qg,
        function(t) {
          return "\\" + t.charCodeAt(0).toString(16) + " ";
        }
      );
    }
    function Oc(e, t) {
      t.checked === void 0 || t.defaultChecked === void 0 || Gr || (console.error(
        "%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
        ta() || "A component",
        t.type
      ), Gr = !0), t.value === void 0 || t.defaultValue === void 0 || Vg || (console.error(
        "%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
        ta() || "A component",
        t.type
      ), Vg = !0);
    }
    function cs(e, t, a, i, o, f, d, h) {
      e.name = "", d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" ? (zt(d, "type"), e.type = d) : e.removeAttribute("type"), t != null ? d === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Ra(t)) : e.value !== "" + Ra(t) && (e.value = "" + Ra(t)) : d !== "submit" && d !== "reset" || e.removeAttribute("value"), t != null ? Hm(e, d, Ra(t)) : a != null ? Hm(e, d, Ra(a)) : i != null && e.removeAttribute("value"), o == null && f != null && (e.defaultChecked = !!f), o != null && (e.checked = o && typeof o != "function" && typeof o != "symbol"), h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" ? (zt(h, "name"), e.name = "" + Ra(h)) : e.removeAttribute("name");
    }
    function x0(e, t, a, i, o, f, d, h) {
      if (f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (zt(f, "type"), e.type = f), t != null || a != null) {
        if (!(f !== "submit" && f !== "reset" || t != null)) {
          dd(e);
          return;
        }
        a = a != null ? "" + Ra(a) : "", t = t != null ? "" + Ra(t) : a, h || t === e.value || (e.value = t), e.defaultValue = t;
      }
      i = i ?? o, i = typeof i != "function" && typeof i != "symbol" && !!i, e.checked = h ? e.checked : !!i, e.defaultChecked = !!i, d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" && (zt(d, "name"), e.name = d), dd(e);
    }
    function Hm(e, t, a) {
      t === "number" && vl(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a);
    }
    function Nm(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? Op.Children.forEach(t.children, function(a) {
        a == null || typeof a == "string" || typeof a == "number" || typeof a == "bigint" || n || (n = !0, console.error(
          "Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>."
        ));
      }) : t.dangerouslySetInnerHTML == null || u || (u = !0, console.error(
        "Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."
      ))), t.selected == null || l || (console.error(
        "Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."
      ), l = !0);
    }
    function Yo() {
      var e = ta();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    function Li(e, t, a, i) {
      if (e = e.options, t) {
        t = {};
        for (var o = 0; o < a.length; o++)
          t["$" + a[o]] = !0;
        for (a = 0; a < e.length; a++)
          o = t.hasOwnProperty("$" + e[a].value), e[a].selected !== o && (e[a].selected = o), o && i && (e[a].defaultSelected = !0);
      } else {
        for (a = "" + Ra(a), t = null, o = 0; o < e.length; o++) {
          if (e[o].value === a) {
            e[o].selected = !0, i && (e[o].defaultSelected = !0);
            return;
          }
          t !== null || e[o].disabled || (t = e[o]);
        }
        t !== null && (t.selected = !0);
      }
    }
    function zc(e, t) {
      for (e = 0; e < s.length; e++) {
        var a = s[e];
        if (t[a] != null) {
          var i = zl(t[a]);
          t.multiple && !i ? console.error(
            "The `%s` prop supplied to <select> must be an array if `multiple` is true.%s",
            a,
            Yo()
          ) : !t.multiple && i && console.error(
            "The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s",
            a,
            Yo()
          );
        }
      }
      t.value === void 0 || t.defaultValue === void 0 || c || (console.error(
        "Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://react.dev/link/controlled-components"
      ), c = !0);
    }
    function _c(e, t) {
      t.value === void 0 || t.defaultValue === void 0 || r || (console.error(
        "%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://react.dev/link/controlled-components",
        ta() || "A component"
      ), r = !0), t.children != null && t.value == null && console.error(
        "Use the `defaultValue` or `value` props instead of setting children on <textarea>."
      );
    }
    function qo(e, t, a) {
      if (t != null && (t = "" + Ra(t), t !== e.value && (e.value = t), a == null)) {
        e.defaultValue !== t && (e.defaultValue = t);
        return;
      }
      e.defaultValue = a != null ? "" + Ra(a) : "";
    }
    function Dc(e, t, a, i) {
      if (t == null) {
        if (i != null) {
          if (a != null)
            throw Error(
              "If you supply `defaultValue` on a <textarea>, do not pass children."
            );
          if (zl(i)) {
            if (1 < i.length)
              throw Error("<textarea> can only have at most one child.");
            i = i[0];
          }
          a = i;
        }
        a == null && (a = ""), t = a;
      }
      a = Ra(t), e.defaultValue = a, i = e.textContent, i === a && i !== "" && i !== null && (e.value = i), dd(e);
    }
    function Al(e, t) {
      return e.serverProps === void 0 && e.serverTail.length === 0 && e.children.length === 1 && 3 < e.distanceFromLeaf && e.distanceFromLeaf > 15 - t ? Al(e.children[0], t) : e;
    }
    function Ma(e) {
      return "  " + "  ".repeat(e);
    }
    function Rc(e) {
      return "+ " + "  ".repeat(e);
    }
    function Fa(e) {
      return "- " + "  ".repeat(e);
    }
    function Mc(e) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return e.type;
        case 16:
          return "Lazy";
        case 31:
          return "Activity";
        case 13:
          return "Suspense";
        case 19:
          return "SuspenseList";
        case 0:
        case 15:
          return e = e.type, e.displayName || e.name || null;
        case 11:
          return e = e.type.render, e.displayName || e.name || null;
        case 1:
          return e = e.type, e.displayName || e.name || null;
        default:
          return null;
      }
    }
    function os(e, t) {
      return m.test(e) ? (e = JSON.stringify(e), e.length > t - 2 ? 8 > t ? '{"..."}' : "{" + e.slice(0, t - 7) + '..."}' : "{" + e + "}") : e.length > t ? 5 > t ? '{"..."}' : e.slice(0, t - 3) + "..." : e;
    }
    function fs(e, t, a) {
      var i = 120 - 2 * a;
      if (t === null)
        return Rc(a) + os(e, i) + `
`;
      if (typeof t == "string") {
        for (var o = 0; o < t.length && o < e.length && t.charCodeAt(o) === e.charCodeAt(o); o++) ;
        return o > i - 8 && 10 < o && (e = "..." + e.slice(o - 8), t = "..." + t.slice(o - 8)), Rc(a) + os(e, i) + `
` + Fa(a) + os(t, i) + `
`;
      }
      return Ma(a) + os(e, i) + `
`;
    }
    function hd(e) {
      return Object.prototype.toString.call(e).replace(/^\[object (.*)\]$/, function(t, a) {
        return a;
      });
    }
    function ss(e, t) {
      switch (typeof e) {
        case "string":
          return e = JSON.stringify(e), e.length > t ? 5 > t ? '"..."' : e.slice(0, t - 4) + '..."' : e;
        case "object":
          if (e === null) return "null";
          if (zl(e)) return "[...]";
          if (e.$$typeof === Un)
            return (t = tt(e.type)) ? "<" + t + ">" : "<...>";
          var a = hd(e);
          if (a === "Object") {
            a = "", t -= 2;
            for (var i in e)
              if (e.hasOwnProperty(i)) {
                var o = JSON.stringify(i);
                if (o !== '"' + i + '"' && (i = o), t -= i.length - 2, o = ss(
                  e[i],
                  15 > t ? t : 15
                ), t -= o.length, 0 > t) {
                  a += a === "" ? "..." : ", ...";
                  break;
                }
                a += (a === "" ? "" : ",") + i + ":" + o;
              }
            return "{" + a + "}";
          }
          return a;
        case "function":
          return (t = e.displayName || e.name) ? "function " + t : "function";
        default:
          return String(e);
      }
    }
    function ci(e, t) {
      return typeof e != "string" || m.test(e) ? "{" + ss(e, t - 2) + "}" : e.length > t - 2 ? 5 > t ? '"..."' : '"' + e.slice(0, t - 5) + '..."' : '"' + e + '"';
    }
    function wo(e, t, a) {
      var i = 120 - a.length - e.length, o = [], f;
      for (f in t)
        if (t.hasOwnProperty(f) && f !== "children") {
          var d = ci(
            t[f],
            120 - a.length - f.length - 1
          );
          i -= f.length + d.length + 2, o.push(f + "=" + d);
        }
      return o.length === 0 ? a + "<" + e + `>
` : 0 < i ? a + "<" + e + " " + o.join(" ") + `>
` : a + "<" + e + `
` + a + "  " + o.join(`
` + a + "  ") + `
` + a + `>
`;
    }
    function oi(e, t, a) {
      var i = "", o = Ze({}, t), f;
      for (f in e)
        if (e.hasOwnProperty(f)) {
          delete o[f];
          var d = 120 - 2 * a - f.length - 2, h = ss(e[f], d);
          t.hasOwnProperty(f) ? (d = ss(t[f], d), i += Rc(a) + f + ": " + h + `
`, i += Fa(a) + f + ": " + d + `
`) : i += Rc(a) + f + ": " + h + `
`;
        }
      for (var y in o)
        o.hasOwnProperty(y) && (e = ss(
          o[y],
          120 - 2 * a - y.length - 2
        ), i += Fa(a) + y + ": " + e + `
`);
      return i;
    }
    function vn(e, t, a, i) {
      var o = "", f = /* @__PURE__ */ new Map();
      for (p in a)
        a.hasOwnProperty(p) && f.set(
          p.toLowerCase(),
          p
        );
      if (f.size === 1 && f.has("children"))
        o += wo(
          e,
          t,
          Ma(i)
        );
      else {
        for (var d in t)
          if (t.hasOwnProperty(d) && d !== "children") {
            var h = 120 - 2 * (i + 1) - d.length - 1, y = f.get(d.toLowerCase());
            if (y !== void 0) {
              f.delete(d.toLowerCase());
              var p = t[d];
              y = a[y];
              var _ = ci(
                p,
                h
              );
              h = ci(
                y,
                h
              ), typeof p == "object" && p !== null && typeof y == "object" && y !== null && hd(p) === "Object" && hd(y) === "Object" && (2 < Object.keys(p).length || 2 < Object.keys(y).length || -1 < _.indexOf("...") || -1 < h.indexOf("...")) ? o += Ma(i + 1) + d + `={{
` + oi(
                p,
                y,
                i + 2
              ) + Ma(i + 1) + `}}
` : (o += Rc(i + 1) + d + "=" + _ + `
`, o += Fa(i + 1) + d + "=" + h + `
`);
            } else
              o += Ma(i + 1) + d + "=" + ci(t[d], h) + `
`;
          }
        f.forEach(function(R) {
          if (R !== "children") {
            var b = 120 - 2 * (i + 1) - R.length - 1;
            o += Fa(i + 1) + R + "=" + ci(a[R], b) + `
`;
          }
        }), o = o === "" ? Ma(i) + "<" + e + `>
` : Ma(i) + "<" + e + `
` + o + Ma(i) + `>
`;
      }
      return e = a.children, t = t.children, typeof e == "string" || typeof e == "number" || typeof e == "bigint" ? (f = "", (typeof t == "string" || typeof t == "number" || typeof t == "bigint") && (f = "" + t), o += fs(f, "" + e, i + 1)) : (typeof t == "string" || typeof t == "number" || typeof t == "bigint") && (o = e == null ? o + fs("" + t, null, i + 1) : o + fs("" + t, void 0, i + 1)), o;
    }
    function jm(e, t) {
      var a = Mc(e);
      if (a === null) {
        for (a = "", e = e.child; e; )
          a += jm(e, t), e = e.sibling;
        return a;
      }
      return Ma(t) + "<" + a + `>
`;
    }
    function Bm(e, t) {
      var a = Al(e, t);
      if (a !== e && (e.children.length !== 1 || e.children[0] !== a))
        return Ma(t) + `...
` + Bm(a, t + 1);
      a = "";
      var i = e.fiber._debugInfo;
      if (i)
        for (var o = 0; o < i.length; o++) {
          var f = i[o].name;
          typeof f == "string" && (a += Ma(t) + "<" + f + `>
`, t++);
        }
      if (i = "", o = e.fiber.pendingProps, e.fiber.tag === 6)
        i = fs(o, e.serverProps, t), t++;
      else if (f = Mc(e.fiber), f !== null)
        if (e.serverProps === void 0) {
          i = t;
          var d = 120 - 2 * i - f.length - 2, h = "";
          for (p in o)
            if (o.hasOwnProperty(p) && p !== "children") {
              var y = ci(o[p], 15);
              if (d -= p.length + y.length + 2, 0 > d) {
                h += " ...";
                break;
              }
              h += " " + p + "=" + y;
            }
          i = Ma(i) + "<" + f + h + `>
`, t++;
        } else
          e.serverProps === null ? (i = wo(
            f,
            o,
            Rc(t)
          ), t++) : typeof e.serverProps == "string" ? console.error(
            "Should not have matched a non HostText fiber to a Text node. This is a bug in React."
          ) : (i = vn(
            f,
            o,
            e.serverProps,
            t
          ), t++);
      var p = "";
      for (o = e.fiber.child, f = 0; o && f < e.children.length; )
        d = e.children[f], d.fiber === o ? (p += Bm(d, t), f++) : p += jm(o, t), o = o.sibling;
      for (o && 0 < e.children.length && (p += Ma(t) + `...
`), o = e.serverTail, e.serverProps === null && t--, e = 0; e < o.length; e++)
        f = o[e], p = typeof f == "string" ? p + (Fa(t) + os(f, 120 - 2 * t) + `
`) : p + wo(
          f.type,
          f.props,
          Fa(t)
        );
      return a + i + p;
    }
    function rs(e) {
      try {
        return `

` + Bm(e, 0);
      } catch {
        return "";
      }
    }
    function Ym(e, t, a) {
      for (var i = t, o = null, f = 0; i; )
        i === e && (f = 0), o = {
          fiber: i,
          children: o !== null ? [o] : [],
          serverProps: i === t ? a : i === e ? null : void 0,
          serverTail: [],
          distanceFromLeaf: f
        }, f++, i = i.return;
      return o !== null ? rs(o).replaceAll(/^[+-]/gm, ">") : "";
    }
    function ds(e, t) {
      var a = Ze({}, e || k), i = { tag: t };
      return T.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), H.indexOf(t) !== -1 && (a.pTagInButtonScope = null), v.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), t === "#document" || t === "html" ? a.containerTagInScope = null : a.containerTagInScope || (a.containerTagInScope = i), e !== null || t !== "#document" && t !== "html" && t !== "body" ? a.implicitRootScope === !0 && (a.implicitRootScope = !1) : a.implicitRootScope = !0, a;
    }
    function H0(e, t, a) {
      switch (t) {
        case "select":
          return e === "hr" || e === "option" || e === "optgroup" || e === "script" || e === "template" || e === "#text";
        case "optgroup":
          return e === "option" || e === "#text";
        case "option":
          return e === "#text";
        case "tr":
          return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
        case "tbody":
        case "thead":
        case "tfoot":
          return e === "tr" || e === "style" || e === "script" || e === "template";
        case "colgroup":
          return e === "col" || e === "template";
        case "table":
          return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
        case "head":
          return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
        case "html":
          if (a) break;
          return e === "head" || e === "body" || e === "frameset";
        case "frameset":
          return e === "frame";
        case "#document":
          if (!a) return e === "html";
      }
      switch (e) {
        case "h1":
        case "h2":
        case "h3":
        case "h4":
        case "h5":
        case "h6":
          return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
        case "rp":
        case "rt":
          return V.indexOf(t) === -1;
        case "caption":
        case "col":
        case "colgroup":
        case "frameset":
        case "frame":
        case "tbody":
        case "td":
        case "tfoot":
        case "th":
        case "thead":
        case "tr":
          return t == null;
        case "head":
          return a || t === null;
        case "html":
          return a && t === "#document" || t === null;
        case "body":
          return a && (t === "#document" || t === "html") || t === null;
      }
      return !0;
    }
    function Sn(e, t) {
      switch (e) {
        case "address":
        case "article":
        case "aside":
        case "blockquote":
        case "center":
        case "details":
        case "dialog":
        case "dir":
        case "div":
        case "dl":
        case "fieldset":
        case "figcaption":
        case "figure":
        case "footer":
        case "header":
        case "hgroup":
        case "main":
        case "menu":
        case "nav":
        case "ol":
        case "p":
        case "section":
        case "summary":
        case "ul":
        case "pre":
        case "listing":
        case "table":
        case "hr":
        case "xmp":
        case "h1":
        case "h2":
        case "h3":
        case "h4":
        case "h5":
        case "h6":
          return t.pTagInButtonScope;
        case "form":
          return t.formTag || t.pTagInButtonScope;
        case "li":
          return t.listItemTagAutoclosing;
        case "dd":
        case "dt":
          return t.dlItemTagAutoclosing;
        case "button":
          return t.buttonTagInScope;
        case "a":
          return t.aTagInScope;
        case "nobr":
          return t.nobrTagInScope;
      }
      return null;
    }
    function md(e, t) {
      for (; e; ) {
        switch (e.tag) {
          case 5:
          case 26:
          case 27:
            if (e.type === t) return e;
        }
        e = e.return;
      }
      return null;
    }
    function yd(e, t) {
      t = t || k;
      var a = t.current;
      if (t = (a = H0(
        e,
        a && a.tag,
        t.implicitRootScope
      ) ? null : a) ? null : Sn(e, t), t = a || t, !t) return !0;
      var i = t.tag;
      if (t = String(!!a) + "|" + e + "|" + i, j[t]) return !1;
      j[t] = !0;
      var o = (t = fn) ? md(t.return, i) : null, f = t !== null && o !== null ? Ym(o, t, null) : "", d = "<" + e + ">";
      return a ? (a = "", i === "table" && e === "tr" && (a += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), console.error(
        `In HTML, %s cannot be a child of <%s>.%s
This will cause a hydration error.%s`,
        d,
        i,
        a,
        f
      )) : console.error(
        `In HTML, %s cannot be a descendant of <%s>.
This will cause a hydration error.%s`,
        d,
        i,
        f
      ), t && (e = t.return, o === null || e === null || o === e && e._debugOwner === t._debugOwner || se(o, function() {
        console.error(
          `<%s> cannot contain a nested %s.
See this log for the ancestor stack trace.`,
          i,
          d
        );
      })), !1;
    }
    function Go(e, t, a) {
      if (a || H0("#text", t, !1))
        return !0;
      if (a = "#text|" + t, j[a]) return !1;
      j[a] = !0;
      var i = (a = fn) ? md(a, t) : null;
      return a = a !== null && i !== null ? Ym(
        i,
        a,
        a.tag !== 6 ? { children: null } : null
      ) : "", /\S/.test(e) ? console.error(
        `In HTML, text nodes cannot be a child of <%s>.
This will cause a hydration error.%s`,
        t,
        a
      ) : console.error(
        `In HTML, whitespace text nodes cannot be a child of <%s>. Make sure you don't have any extra whitespace between tags on each line of your source code.
This will cause a hydration error.%s`,
        t,
        a
      ), !1;
    }
    function ou(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === 3) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }
    function N0(e) {
      return e.replace(D, function(t, a) {
        return a.toUpperCase();
      });
    }
    function qm(e, t, a) {
      var i = t.indexOf("--") === 0;
      i || (-1 < t.indexOf("-") ? K.hasOwnProperty(t) && K[t] || (K[t] = !0, console.error(
        "Unsupported style property %s. Did you mean %s?",
        t,
        N0(t.replace(C, "ms-"))
      )) : Ht.test(t) ? K.hasOwnProperty(t) && K[t] || (K[t] = !0, console.error(
        "Unsupported vendor-prefixed style property %s. Did you mean %s?",
        t,
        t.charAt(0).toUpperCase() + t.slice(1)
      )) : !x.test(a) || Ee.hasOwnProperty(a) && Ee[a] || (Ee[a] = !0, console.error(
        `Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`,
        t,
        a.replace(x, "")
      )), typeof a == "number" && (isNaN(a) ? yt || (yt = !0, console.error(
        "`NaN` is an invalid value for the `%s` css style property.",
        t
      )) : isFinite(a) || ge || (ge = !0, console.error(
        "`Infinity` is an invalid value for the `%s` css style property.",
        t
      )))), a == null || typeof a == "boolean" || a === "" ? i ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : i ? e.setProperty(t, a) : typeof a != "number" || a === 0 || Qe.has(t) ? t === "float" ? e.cssFloat = a : (wl(a, t), e[t] = ("" + a).trim()) : e[t] = a + "px";
    }
    function Cc(e, t, a) {
      if (t != null && typeof t != "object")
        throw Error(
          "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
        );
      if (t && Object.freeze(t), e = e.style, a != null) {
        if (t) {
          var i = {};
          if (a) {
            for (var o in a)
              if (a.hasOwnProperty(o) && !t.hasOwnProperty(o))
                for (var f = w[o] || [o], d = 0; d < f.length; d++)
                  i[f[d]] = o;
          }
          for (var h in t)
            if (t.hasOwnProperty(h) && (!a || a[h] !== t[h]))
              for (o = w[h] || [h], f = 0; f < o.length; f++)
                i[o[f]] = h;
          h = {};
          for (var y in t)
            for (o = w[y] || [y], f = 0; f < o.length; f++)
              h[o[f]] = y;
          y = {};
          for (var p in i)
            if (o = i[p], (f = h[p]) && o !== f && (d = o + "," + f, !y[d])) {
              y[d] = !0, d = console;
              var _ = t[o];
              d.error.call(
                d,
                "%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.",
                _ == null || typeof _ == "boolean" || _ === "" ? "Removing" : "Updating",
                o,
                f
              );
            }
        }
        for (var R in a)
          !a.hasOwnProperty(R) || t != null && t.hasOwnProperty(R) || (R.indexOf("--") === 0 ? e.setProperty(R, "") : R === "float" ? e.cssFloat = "" : e[R] = "");
        for (var b in t)
          p = t[b], t.hasOwnProperty(b) && a[b] !== p && qm(e, b, p);
      } else
        for (i in t)
          t.hasOwnProperty(i) && qm(e, i, t[i]);
    }
    function hs(e) {
      if (e.indexOf("-") === -1) return !1;
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    function wm(e) {
      return pc.get(e) || e;
    }
    function j0(e, t) {
      if (In.call(em, t) && em[t])
        return !0;
      if (iT.test(t)) {
        if (e = "aria-" + t.slice(4).toLowerCase(), e = AS.hasOwnProperty(e) ? e : null, e == null)
          return console.error(
            "Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.",
            t
          ), em[t] = !0;
        if (t !== e)
          return console.error(
            "Invalid ARIA attribute `%s`. Did you mean `%s`?",
            t,
            e
          ), em[t] = !0;
      }
      if (uT.test(t)) {
        if (e = t.toLowerCase(), e = AS.hasOwnProperty(e) ? e : null, e == null) return em[t] = !0, !1;
        t !== e && (console.error(
          "Unknown ARIA attribute `%s`. Did you mean `%s`?",
          t,
          e
        ), em[t] = !0);
      }
      return !0;
    }
    function Gm(e, t) {
      var a = [], i;
      for (i in t)
        j0(e, i) || a.push(i);
      t = a.map(function(o) {
        return "`" + o + "`";
      }).join(", "), a.length === 1 ? console.error(
        "Invalid aria prop %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",
        t,
        e
      ) : 1 < a.length && console.error(
        "Invalid aria props %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",
        t,
        e
      );
    }
    function Jv(e, t, a, i) {
      if (In.call(rn, t) && rn[t])
        return !0;
      var o = t.toLowerCase();
      if (o === "onfocusin" || o === "onfocusout")
        return console.error(
          "React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."
        ), rn[t] = !0;
      if (typeof a == "function" && (e === "form" && t === "action" || e === "input" && t === "formAction" || e === "button" && t === "formAction"))
        return !0;
      if (i != null) {
        if (e = i.possibleRegistrationNames, i.registrationNameDependencies.hasOwnProperty(t))
          return !0;
        if (i = e.hasOwnProperty(o) ? e[o] : null, i != null)
          return console.error(
            "Invalid event handler property `%s`. Did you mean `%s`?",
            t,
            i
          ), rn[t] = !0;
        if (zS.test(t))
          return console.error(
            "Unknown event handler property `%s`. It will be ignored.",
            t
          ), rn[t] = !0;
      } else if (zS.test(t))
        return cT.test(t) && console.error(
          "Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.",
          t
        ), rn[t] = !0;
      if (oT.test(t) || fT.test(t)) return !0;
      if (o === "innerhtml")
        return console.error(
          "Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."
        ), rn[t] = !0;
      if (o === "aria")
        return console.error(
          "The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."
        ), rn[t] = !0;
      if (o === "is" && a !== null && a !== void 0 && typeof a != "string")
        return console.error(
          "Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.",
          typeof a
        ), rn[t] = !0;
      if (typeof a == "number" && isNaN(a))
        return console.error(
          "Received NaN for the `%s` attribute. If this is expected, cast the value to a string.",
          t
        ), rn[t] = !0;
      if (Ph.hasOwnProperty(o)) {
        if (o = Ph[o], o !== t)
          return console.error(
            "Invalid DOM property `%s`. Did you mean `%s`?",
            t,
            o
          ), rn[t] = !0;
      } else if (t !== o)
        return console.error(
          "React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.",
          t,
          o
        ), rn[t] = !0;
      switch (t) {
        case "dangerouslySetInnerHTML":
        case "children":
        case "style":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
          return !0;
        case "innerText":
        case "textContent":
          return !0;
      }
      switch (typeof a) {
        case "boolean":
          switch (t) {
            case "autoFocus":
            case "checked":
            case "multiple":
            case "muted":
            case "selected":
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
            case "allowFullScreen":
            case "async":
            case "autoPlay":
            case "controls":
            case "default":
            case "defer":
            case "disabled":
            case "disablePictureInPicture":
            case "disableRemotePlayback":
            case "formNoValidate":
            case "hidden":
            case "loop":
            case "noModule":
            case "noValidate":
            case "open":
            case "playsInline":
            case "readOnly":
            case "required":
            case "reversed":
            case "scoped":
            case "seamless":
            case "itemScope":
            case "capture":
            case "download":
            case "inert":
              return !0;
            default:
              return o = t.toLowerCase().slice(0, 5), o === "data-" || o === "aria-" ? !0 : (a ? console.error(
                'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.',
                a,
                t,
                t,
                a,
                t
              ) : console.error(
                'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.',
                a,
                t,
                t,
                a,
                t,
                t,
                t
              ), rn[t] = !0);
          }
        case "function":
        case "symbol":
          return rn[t] = !0, !1;
        case "string":
          if (a === "false" || a === "true") {
            switch (t) {
              case "checked":
              case "selected":
              case "multiple":
              case "muted":
              case "allowFullScreen":
              case "async":
              case "autoPlay":
              case "controls":
              case "default":
              case "defer":
              case "disabled":
              case "disablePictureInPicture":
              case "disableRemotePlayback":
              case "formNoValidate":
              case "hidden":
              case "loop":
              case "noModule":
              case "noValidate":
              case "open":
              case "playsInline":
              case "readOnly":
              case "required":
              case "reversed":
              case "scoped":
              case "seamless":
              case "itemScope":
              case "inert":
                break;
              default:
                return !0;
            }
            console.error(
              "Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?",
              a,
              t,
              a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".',
              t,
              a
            ), rn[t] = !0;
          }
      }
      return !0;
    }
    function Kv(e, t, a) {
      var i = [], o;
      for (o in t)
        Jv(e, o, t[o], a) || i.push(o);
      t = i.map(function(f) {
        return "`" + f + "`";
      }).join(", "), i.length === 1 ? console.error(
        "Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://react.dev/link/attribute-behavior ",
        t,
        e
      ) : 1 < i.length && console.error(
        "Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://react.dev/link/attribute-behavior ",
        t,
        e
      );
    }
    function Qi(e) {
      return sT.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
    }
    function Xl() {
    }
    function ms(e) {
      return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
    }
    function pd(e) {
      var t = ae(e);
      if (t && (e = t.stateNode)) {
        var a = e[sa] || null;
        e: switch (e = t.stateNode, t.type) {
          case "input":
            if (cs(
              e,
              a.value,
              a.defaultValue,
              a.defaultValue,
              a.checked,
              a.defaultChecked,
              a.type,
              a.name
            ), t = a.name, a.type === "radio" && t != null) {
              for (a = e; a.parentNode; ) a = a.parentNode;
              for (zt(t, "name"), a = a.querySelectorAll(
                'input[name="' + Vt(
                  "" + t
                ) + '"][type="radio"]'
              ), t = 0; t < a.length; t++) {
                var i = a[t];
                if (i !== e && i.form === e.form) {
                  var o = i[sa] || null;
                  if (!o)
                    throw Error(
                      "ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported."
                    );
                  cs(
                    i,
                    o.value,
                    o.defaultValue,
                    o.defaultValue,
                    o.checked,
                    o.defaultChecked,
                    o.type,
                    o.name
                  );
                }
              }
              for (t = 0; t < a.length; t++)
                i = a[t], i.form === e.form && ii(i);
            }
            break e;
          case "textarea":
            qo(e, a.value, a.defaultValue);
            break e;
          case "select":
            t = a.value, t != null && Li(e, !!a.multiple, t, !1);
        }
      }
    }
    function Uc(e, t, a) {
      if (f1) return e(t, a);
      f1 = !0;
      try {
        var i = e(t);
        return i;
      } finally {
        if (f1 = !1, (tm !== null || lm !== null) && (ao(), tm && (t = tm, e = lm, lm = tm = null, pd(t), e)))
          for (t = 0; t < e.length; t++) pd(e[t]);
      }
    }
    function fu(e, t) {
      var a = e.stateNode;
      if (a === null) return null;
      var i = a[sa] || null;
      if (i === null) return null;
      a = i[t];
      e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (i = !i.disabled) || (e = e.type, i = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !i;
          break e;
        default:
          e = !1;
      }
      if (e) return null;
      if (a && typeof a != "function")
        throw Error(
          "Expected `" + t + "` listener to be a function, instead got a value of `" + typeof a + "` type."
        );
      return a;
    }
    function Xm() {
      if (Zg) return Zg;
      var e, t = r1, a = t.length, i, o = "value" in Uf ? Uf.value : Uf.textContent, f = o.length;
      for (e = 0; e < a && t[e] === o[e]; e++) ;
      var d = a - e;
      for (i = 1; i <= d && t[a - i] === o[f - i]; i++) ;
      return Zg = o.slice(e, 1 < i ? 1 - i : void 0);
    }
    function Xo(e) {
      var t = e.keyCode;
      return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
    }
    function ys() {
      return !0;
    }
    function Lo() {
      return !1;
    }
    function ul(e) {
      function t(a, i, o, f, d) {
        this._reactName = a, this._targetInst = o, this.type = i, this.nativeEvent = f, this.target = d, this.currentTarget = null;
        for (var h in e)
          e.hasOwnProperty(h) && (a = e[h], this[h] = a ? a(f) : f[h]);
        return this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1) ? ys : Lo, this.isPropagationStopped = Lo, this;
      }
      return Ze(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = ys);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = ys);
        },
        persist: function() {
        },
        isPersistent: ys
      }), t;
    }
    function Lm(e) {
      var t = this.nativeEvent;
      return t.getModifierState ? t.getModifierState(e) : (e = AT[e]) ? !!t[e] : !1;
    }
    function xc() {
      return Lm;
    }
    function fi(e, t) {
      switch (e) {
        case "keyup":
          return jT.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== MS;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function gd(e) {
      return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
    }
    function vd(e, t) {
      switch (e) {
        case "compositionend":
          return gd(t);
        case "keypress":
          return t.which !== US ? null : (HS = !0, xS);
        case "textInput":
          return e = t.data, e === xS && HS ? null : e;
        default:
          return null;
      }
    }
    function B0(e, t) {
      if (am)
        return e === "compositionend" || !y1 && fi(e, t) ? (e = Xm(), Zg = r1 = Uf = null, am = !1, e) : null;
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return CS && t.locale !== "ko" ? null : t.data;
        default:
          return null;
      }
    }
    function ps(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!YT[e.type] : t === "textarea";
    }
    function Sd(e) {
      if (!gc) return !1;
      e = "on" + e;
      var t = e in document;
      return t || (t = document.createElement("div"), t.setAttribute(e, "return;"), t = typeof t[e] == "function"), t;
    }
    function Qm(e, t, a, i) {
      tm ? lm ? lm.push(i) : lm = [i] : tm = i, t = Xu(t, "onChange"), 0 < t.length && (a = new Jg(
        "onChange",
        "change",
        null,
        a,
        i
      ), e.push({ event: a, listeners: t }));
    }
    function Ca(e) {
      Xa(e, 0);
    }
    function su(e) {
      var t = de(e);
      if (ii(t)) return e;
    }
    function gs(e, t) {
      if (e === "change") return t;
    }
    function Qo() {
      Gp && (Gp.detachEvent("onpropertychange", Y0), Xp = Gp = null);
    }
    function Y0(e) {
      if (e.propertyName === "value" && su(Xp)) {
        var t = [];
        Qm(
          t,
          Xp,
          e,
          ms(e)
        ), Uc(Ca, t);
      }
    }
    function Vm(e, t, a) {
      e === "focusin" ? (Qo(), Gp = t, Xp = a, Gp.attachEvent("onpropertychange", Y0)) : e === "focusout" && Qo();
    }
    function Zm(e) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return su(Xp);
    }
    function vs(e, t) {
      if (e === "click") return su(t);
    }
    function bd(e, t) {
      if (e === "input" || e === "change")
        return su(t);
    }
    function q0(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    function Ss(e, t) {
      if (dn(e, t)) return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length) return !1;
      for (i = 0; i < a.length; i++) {
        var o = a[i];
        if (!In.call(t, o) || !dn(e[o], t[o]))
          return !1;
      }
      return !0;
    }
    function w0(e) {
      for (; e && e.firstChild; ) e = e.firstChild;
      return e;
    }
    function G0(e, t) {
      var a = w0(e);
      e = 0;
      for (var i; a; ) {
        if (a.nodeType === 3) {
          if (i = e + a.textContent.length, e <= t && i >= t)
            return { node: a, offset: t - e };
          e = i;
        }
        e: {
          for (; a; ) {
            if (a.nextSibling) {
              a = a.nextSibling;
              break e;
            }
            a = a.parentNode;
          }
          a = void 0;
        }
        a = w0(a);
      }
    }
    function Ed(e, t) {
      return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Ed(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
    }
    function X0(e) {
      e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
      for (var t = vl(e.document); t instanceof e.HTMLIFrameElement; ) {
        try {
          var a = typeof t.contentWindow.location.href == "string";
        } catch {
          a = !1;
        }
        if (a) e = t.contentWindow;
        else break;
        t = vl(e.document);
      }
      return t;
    }
    function Jm(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function L0(e, t, a) {
      var i = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
      g1 || nm == null || nm !== vl(i) || (i = nm, "selectionStart" in i && Jm(i) ? i = { start: i.selectionStart, end: i.selectionEnd } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = {
        anchorNode: i.anchorNode,
        anchorOffset: i.anchorOffset,
        focusNode: i.focusNode,
        focusOffset: i.focusOffset
      }), Lp && Ss(Lp, i) || (Lp = i, i = Xu(p1, "onSelect"), 0 < i.length && (t = new Jg(
        "onSelect",
        "select",
        null,
        t,
        a
      ), e.push({ event: t, listeners: i }), t.target = nm)));
    }
    function Hc(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    function Nc(e) {
      if (v1[e]) return v1[e];
      if (!um[e]) return e;
      var t = um[e], a;
      for (a in t)
        if (t.hasOwnProperty(a) && a in jS)
          return v1[e] = t[a];
      return e;
    }
    function bn(e, t) {
      GS.set(e, t), ot(t, [e]);
    }
    function $v(e) {
      for (var t = $g, a = 0; a < e.length; a++) {
        var i = e[a];
        if (typeof i == "object" && i !== null)
          if (zl(i) && i.length === 2 && typeof i[0] == "string") {
            if (t !== $g && t !== A1)
              return E1;
            t = A1;
          } else return E1;
        else {
          if (typeof i == "function" || typeof i == "string" && 50 < i.length || t !== $g && t !== T1)
            return E1;
          t = T1;
        }
      }
      return t;
    }
    function Km(e, t, a, i) {
      for (var o in e)
        In.call(e, o) && o[0] !== "_" && ru(o, e[o], t, a, i);
    }
    function ru(e, t, a, i, o) {
      switch (typeof t) {
        case "object":
          if (t === null) {
            t = "null";
            break;
          } else {
            if (t.$$typeof === Un) {
              var f = tt(t.type) || "…", d = t.key;
              t = t.props;
              var h = Object.keys(t), y = h.length;
              if (d == null && y === 0) {
                t = "<" + f + " />";
                break;
              }
              if (3 > i || y === 1 && h[0] === "children" && d == null) {
                t = "<" + f + " … />";
                break;
              }
              a.push([
                o + "  ".repeat(i) + e,
                "<" + f
              ]), d !== null && ru(
                "key",
                d,
                a,
                i + 1,
                o
              ), e = !1;
              for (var p in t)
                p === "children" ? t.children != null && (!zl(t.children) || 0 < t.children.length) && (e = !0) : In.call(t, p) && p[0] !== "_" && ru(
                  p,
                  t[p],
                  a,
                  i + 1,
                  o
                );
              a.push([
                "",
                e ? ">…</" + f + ">" : "/>"
              ]);
              return;
            }
            if (f = Object.prototype.toString.call(t), f = f.slice(8, f.length - 1), f === "Array") {
              if (p = $v(t), p === T1 || p === $g) {
                t = JSON.stringify(t);
                break;
              } else if (p === A1) {
                for (a.push([
                  o + "  ".repeat(i) + e,
                  ""
                ]), e = 0; e < t.length; e++)
                  f = t[e], ru(
                    f[0],
                    f[1],
                    a,
                    i + 1,
                    o
                  );
                return;
              }
            }
            if (f === "Promise") {
              if (t.status === "fulfilled") {
                if (f = a.length, ru(
                  e,
                  t.value,
                  a,
                  i,
                  o
                ), a.length > f) {
                  a = a[f], a[1] = "Promise<" + (a[1] || "Object") + ">";
                  return;
                }
              } else if (t.status === "rejected" && (f = a.length, ru(
                e,
                t.reason,
                a,
                i,
                o
              ), a.length > f)) {
                a = a[f], a[1] = "Rejected Promise<" + a[1] + ">";
                return;
              }
              a.push([
                "  ".repeat(i) + e,
                "Promise"
              ]);
              return;
            }
            f === "Object" && (p = Object.getPrototypeOf(t)) && typeof p.constructor == "function" && (f = p.constructor.name), a.push([
              o + "  ".repeat(i) + e,
              f === "Object" ? 3 > i ? "" : "…" : f
            ]), 3 > i && Km(t, a, i + 1, o);
            return;
          }
        case "function":
          t = t.name === "" ? "() => {}" : t.name + "() {}";
          break;
        case "string":
          t = t === VT ? "…" : JSON.stringify(t);
          break;
        case "undefined":
          t = "undefined";
          break;
        case "boolean":
          t = t ? "true" : "false";
          break;
        default:
          t = String(t);
      }
      a.push([
        o + "  ".repeat(i) + e,
        t
      ]);
    }
    function Q0(e, t, a, i) {
      var o = !0;
      for (d in e)
        d in t || (a.push([
          kg + "  ".repeat(i) + d,
          "…"
        ]), o = !1);
      for (var f in t)
        if (f in e) {
          var d = e[f], h = t[f];
          if (d !== h) {
            if (i === 0 && f === "children")
              o = "  ".repeat(i) + f, a.push(
                [kg + o, "…"],
                [Wg + o, "…"]
              );
            else {
              if (!(3 <= i)) {
                if (typeof d == "object" && typeof h == "object" && d !== null && h !== null && d.$$typeof === h.$$typeof)
                  if (h.$$typeof === Un) {
                    if (d.type === h.type && d.key === h.key) {
                      d = tt(h.type) || "…", o = "  ".repeat(i) + f, d = "<" + d + " … />", a.push(
                        [kg + o, d],
                        [Wg + o, d]
                      ), o = !1;
                      continue;
                    }
                  } else {
                    var y = Object.prototype.toString.call(d), p = Object.prototype.toString.call(h);
                    if (y === p && (p === "[object Object]" || p === "[object Array]")) {
                      y = [
                        QS + "  ".repeat(i) + f,
                        p === "[object Array]" ? "Array" : ""
                      ], a.push(y), p = a.length, Q0(
                        d,
                        h,
                        a,
                        i + 1
                      ) ? p === a.length && (y[1] = "Referentially unequal but deeply equal objects. Consider memoization.") : o = !1;
                      continue;
                    }
                  }
                else if (typeof d == "function" && typeof h == "function" && d.name === h.name && d.length === h.length && (y = Function.prototype.toString.call(d), p = Function.prototype.toString.call(h), y === p)) {
                  d = h.name === "" ? "() => {}" : h.name + "() {}", a.push([
                    QS + "  ".repeat(i) + f,
                    d + " Referentially unequal function closure. Consider memoization."
                  ]);
                  continue;
                }
              }
              ru(f, d, a, i, kg), ru(f, h, a, i, Wg);
            }
            o = !1;
          }
        } else
          a.push([
            Wg + "  ".repeat(i) + f,
            "…"
          ]), o = !1;
      return o;
    }
    function Ia(e) {
      dt = e & 63 ? "Blocking" : e & 64 ? "Gesture" : e & 4194176 ? "Transition" : e & 62914560 ? "Suspense" : e & 2080374784 ? "Idle" : "Other";
    }
    function du(e, t, a, i) {
      kt && (Hf.start = t, Hf.end = a, vo.color = "warning", vo.tooltipText = i, vo.properties = null, (e = e._debugTask) ? e.run(
        performance.measure.bind(
          performance,
          i,
          Hf
        )
      ) : performance.measure(i, Hf));
    }
    function Td(e, t, a) {
      du(e, t, a, "Reconnect");
    }
    function Ad(e, t, a, i, o) {
      var f = re(e);
      if (f !== null && kt) {
        var d = e.alternate, h = e.actualDuration;
        if (d === null || d.child !== e.child)
          for (var y = e.child; y !== null; y = y.sibling)
            h -= y.actualDuration;
        i = 0.5 > h ? i ? "tertiary-light" : "primary-light" : 10 > h ? i ? "tertiary" : "primary" : 100 > h ? i ? "tertiary-dark" : "primary-dark" : "error";
        var p = e.memoizedProps;
        h = e._debugTask, p !== null && d !== null && d.memoizedProps !== p ? (y = [ZT], p = Q0(
          d.memoizedProps,
          p,
          y,
          0
        ), 1 < y.length && (p && !xf && (d.lanes & o) === 0 && 100 < e.actualDuration ? (xf = !0, y[0] = JT, vo.color = "warning", vo.tooltipText = VS) : (vo.color = i, vo.tooltipText = f), vo.properties = y, Hf.start = t, Hf.end = a, h != null ? h.run(
          performance.measure.bind(
            performance,
            "​" + f,
            Hf
          )
        ) : performance.measure(
          "​" + f,
          Hf
        ))) : h != null ? h.run(
          console.timeStamp.bind(
            console,
            f,
            t,
            a,
            Ku,
            void 0,
            i
          )
        ) : console.timeStamp(
          f,
          t,
          a,
          Ku,
          void 0,
          i
        );
      }
    }
    function Od(e, t, a, i) {
      if (kt) {
        var o = re(e);
        if (o !== null) {
          for (var f = null, d = [], h = 0; h < i.length; h++) {
            var y = i[h];
            f == null && y.source !== null && (f = y.source._debugTask), y = y.value, d.push([
              "Error",
              typeof y == "object" && y !== null && typeof y.message == "string" ? String(y.message) : String(y)
            ]);
          }
          e.key !== null && ru("key", e.key, d, 0, ""), e.memoizedProps !== null && Km(e.memoizedProps, d, 0, ""), f == null && (f = e._debugTask), e = {
            start: t,
            end: a,
            detail: {
              devtools: {
                color: "error",
                track: Ku,
                tooltipText: e.tag === 13 ? "Hydration failed" : "Error boundary caught an error",
                properties: d
              }
            }
          }, f ? f.run(
            performance.measure.bind(performance, "​" + o, e)
          ) : performance.measure("​" + o, e);
        }
      }
    }
    function hu(e, t, a, i, o) {
      if (o !== null) {
        if (kt) {
          var f = re(e);
          if (f !== null) {
            i = [];
            for (var d = 0; d < o.length; d++) {
              var h = o[d].value;
              i.push([
                "Error",
                typeof h == "object" && h !== null && typeof h.message == "string" ? String(h.message) : String(h)
              ]);
            }
            e.key !== null && ru("key", e.key, i, 0, ""), e.memoizedProps !== null && Km(e.memoizedProps, i, 0, ""), t = {
              start: t,
              end: a,
              detail: {
                devtools: {
                  color: "error",
                  track: Ku,
                  tooltipText: "A lifecycle or effect errored",
                  properties: i
                }
              }
            }, (e = e._debugTask) ? e.run(
              performance.measure.bind(
                performance,
                "​" + f,
                t
              )
            ) : performance.measure("​" + f, t);
          }
        }
      } else
        f = re(e), f !== null && kt && (o = 1 > i ? "secondary-light" : 100 > i ? "secondary" : 500 > i ? "secondary-dark" : "error", (e = e._debugTask) ? e.run(
          console.timeStamp.bind(
            console,
            f,
            t,
            a,
            Ku,
            void 0,
            o
          )
        ) : console.timeStamp(
          f,
          t,
          a,
          Ku,
          void 0,
          o
        ));
    }
    function kv(e, t, a, i) {
      if (kt && !(t <= e)) {
        var o = (a & 738197653) === a ? "tertiary-dark" : "primary-dark";
        a = (a & 536870912) === a ? "Prepared" : (a & 201326741) === a ? "Hydrated" : "Render", i ? i.run(
          console.timeStamp.bind(
            console,
            a,
            e,
            t,
            dt,
            st,
            o
          )
        ) : console.timeStamp(
          a,
          e,
          t,
          dt,
          st,
          o
        );
      }
    }
    function V0(e, t, a, i) {
      !kt || t <= e || (a = (a & 738197653) === a ? "tertiary-dark" : "primary-dark", i ? i.run(
        console.timeStamp.bind(
          console,
          "Prewarm",
          e,
          t,
          dt,
          st,
          a
        )
      ) : console.timeStamp(
        "Prewarm",
        e,
        t,
        dt,
        st,
        a
      ));
    }
    function Z0(e, t, a, i) {
      !kt || t <= e || (a = (a & 738197653) === a ? "tertiary-dark" : "primary-dark", i ? i.run(
        console.timeStamp.bind(
          console,
          "Suspended",
          e,
          t,
          dt,
          st,
          a
        )
      ) : console.timeStamp(
        "Suspended",
        e,
        t,
        dt,
        st,
        a
      ));
    }
    function Wv(e, t, a, i, o, f) {
      if (kt && !(t <= e)) {
        a = [];
        for (var d = 0; d < i.length; d++) {
          var h = i[d].value;
          a.push([
            "Recoverable Error",
            typeof h == "object" && h !== null && typeof h.message == "string" ? String(h.message) : String(h)
          ]);
        }
        e = {
          start: e,
          end: t,
          detail: {
            devtools: {
              color: "primary-dark",
              track: dt,
              trackGroup: st,
              tooltipText: o ? "Hydration Failed" : "Recovered after Error",
              properties: a
            }
          }
        }, f ? f.run(
          performance.measure.bind(performance, "Recovered", e)
        ) : performance.measure("Recovered", e);
      }
    }
    function $m(e, t, a, i) {
      !kt || t <= e || (i ? i.run(
        console.timeStamp.bind(
          console,
          "Errored",
          e,
          t,
          dt,
          st,
          "error"
        )
      ) : console.timeStamp(
        "Errored",
        e,
        t,
        dt,
        st,
        "error"
      ));
    }
    function Fv(e, t, a, i) {
      !kt || t <= e || (i ? i.run(
        console.timeStamp.bind(
          console,
          a,
          e,
          t,
          dt,
          st,
          "secondary-light"
        )
      ) : console.timeStamp(
        a,
        e,
        t,
        dt,
        st,
        "secondary-light"
      ));
    }
    function J0(e, t, a, i, o) {
      if (kt && !(t <= e)) {
        for (var f = [], d = 0; d < a.length; d++) {
          var h = a[d].value;
          f.push([
            "Error",
            typeof h == "object" && h !== null && typeof h.message == "string" ? String(h.message) : String(h)
          ]);
        }
        e = {
          start: e,
          end: t,
          detail: {
            devtools: {
              color: "error",
              track: dt,
              trackGroup: st,
              tooltipText: i ? "Remaining Effects Errored" : "Commit Errored",
              properties: f
            }
          }
        }, o ? o.run(
          performance.measure.bind(performance, "Errored", e)
        ) : performance.measure("Errored", e);
      }
    }
    function km(e, t, a) {
      !kt || t <= e || console.timeStamp(
        "Animating",
        e,
        t,
        dt,
        st,
        "secondary-dark"
      );
    }
    function Vo() {
      for (var e = im, t = O1 = im = 0; t < e; ) {
        var a = $u[t];
        $u[t++] = null;
        var i = $u[t];
        $u[t++] = null;
        var o = $u[t];
        $u[t++] = null;
        var f = $u[t];
        if ($u[t++] = null, i !== null && o !== null) {
          var d = i.pending;
          d === null ? o.next = o : (o.next = d.next, d.next = o), i.pending = o;
        }
        f !== 0 && Fm(a, o, f);
      }
    }
    function Vi(e, t, a, i) {
      $u[im++] = e, $u[im++] = t, $u[im++] = a, $u[im++] = i, O1 |= i, e.lanes |= i, e = e.alternate, e !== null && (e.lanes |= i);
    }
    function Wm(e, t, a, i) {
      return Vi(e, t, a, i), bs(e);
    }
    function Ll(e, t) {
      return Vi(e, null, null, t), bs(e);
    }
    function Fm(e, t, a) {
      e.lanes |= a;
      var i = e.alternate;
      i !== null && (i.lanes |= a);
      for (var o = !1, f = e.return; f !== null; )
        f.childLanes |= a, i = f.alternate, i !== null && (i.childLanes |= a), f.tag === 22 && (e = f.stateNode, e === null || e._visibility & Qp || (o = !0)), e = f, f = f.return;
      return e.tag === 3 ? (f = e.stateNode, o && t !== null && (o = 31 - Wl(a), e = f.hiddenUpdates, i = e[o], i === null ? e[o] = [t] : i.push(t), t.lane = a | 536870912), f) : null;
    }
    function bs(e) {
      if (p0 > oA)
        throw ad = p0 = 0, g0 = aS = null, Error(
          "Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops."
        );
      ad > fA && (ad = 0, g0 = null, console.error(
        "Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."
      )), e.alternate === null && (e.flags & 4098) !== 0 && Py(e);
      for (var t = e, a = t.return; a !== null; )
        t.alternate === null && (t.flags & 4098) !== 0 && Py(e), t = a, a = t.return;
      return t.tag === 3 ? t.stateNode : null;
    }
    function Zi(e) {
      if (ku === null) return e;
      var t = ku(e);
      return t === void 0 ? e : t.current;
    }
    function zd(e) {
      if (ku === null) return e;
      var t = ku(e);
      return t === void 0 ? e != null && typeof e.render == "function" && (t = Zi(e.render), e.render !== t) ? (t = { $$typeof: Di, render: t }, e.displayName !== void 0 && (t.displayName = e.displayName), t) : e : t.current;
    }
    function jc(e, t) {
      if (ku === null) return !1;
      var a = e.elementType;
      t = t.type;
      var i = !1, o = typeof t == "object" && t !== null ? t.$$typeof : null;
      switch (e.tag) {
        case 1:
          typeof t == "function" && (i = !0);
          break;
        case 0:
          (typeof t == "function" || o === yl) && (i = !0);
          break;
        case 11:
          (o === Di || o === yl) && (i = !0);
          break;
        case 14:
        case 15:
          (o === mo || o === yl) && (i = !0);
          break;
        default:
          return !1;
      }
      return !!(i && (e = ku(a), e !== void 0 && e === ku(t)));
    }
    function K0(e) {
      ku !== null && typeof WeakSet == "function" && (cm === null && (cm = /* @__PURE__ */ new WeakSet()), cm.add(e));
    }
    function $0(e, t, a) {
      do {
        var i = e, o = i.alternate, f = i.child, d = i.sibling, h = i.tag;
        i = i.type;
        var y = null;
        switch (h) {
          case 0:
          case 15:
          case 1:
            y = i;
            break;
          case 11:
            y = i.render;
        }
        if (ku === null)
          throw Error("Expected resolveFamily to be set during hot reload.");
        var p = !1;
        if (i = !1, y !== null && (y = ku(y), y !== void 0 && (a.has(y) ? i = !0 : t.has(y) && (h === 1 ? i = !0 : p = !0))), cm !== null && (cm.has(e) || o !== null && cm.has(o)) && (i = !0), i && (e._debugNeedsRemount = !0), (i || p) && (o = Ll(e, 2), o !== null && tl(o, e, 2)), f === null || i || $0(
          f,
          t,
          a
        ), d === null) break;
        e = d;
      } while (!0);
    }
    function Iv(e, t, a, i) {
      this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null, this.actualDuration = -0, this.actualStartTime = -1.1, this.treeBaseDuration = this.selfBaseDuration = -0, this._debugTask = this._debugStack = this._debugOwner = this._debugInfo = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, ZS || typeof Object.preventExtensions != "function" || Object.preventExtensions(this);
    }
    function _d(e) {
      return e = e.prototype, !(!e || !e.isReactComponent);
    }
    function mu(e, t) {
      var a = e.alternate;
      switch (a === null ? (a = N(
        e.tag,
        t,
        e.key,
        e.mode
      ), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugOwner = e._debugOwner, a._debugStack = e._debugStack, a._debugTask = e._debugTask, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null, a.actualDuration = -0, a.actualStartTime = -1.1), a.flags = e.flags & 65011712, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue, t = e.dependencies, a.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext,
        _debugThenableState: t._debugThenableState
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.refCleanup = e.refCleanup, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugInfo = e._debugInfo, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case 0:
        case 15:
          a.type = Zi(e.type);
          break;
        case 1:
          a.type = Zi(e.type);
          break;
        case 11:
          a.type = zd(e.type);
      }
      return a;
    }
    function Zo(e, t) {
      e.flags &= 65011714;
      var a = e.alternate;
      return a === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0) : (e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type, t = a.dependencies, e.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext,
        _debugThenableState: t._debugThenableState
      }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration), e;
    }
    function Bc(e, t, a, i, o, f) {
      var d = 0, h = e;
      if (typeof e == "function")
        _d(e) && (d = 1), h = Zi(h);
      else if (typeof e == "string")
        d = ee(), d = at(e, a, d) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
      else
        e: switch (e) {
          case _p:
            return t = N(31, a, t, o), t.elementType = _p, t.lanes = f, t;
          case kl:
            return yu(
              a.children,
              o,
              f,
              t
            );
          case _f:
            d = 8, o |= Ka, o |= Ui;
            break;
          case qh:
            return e = a, i = o, typeof e.id != "string" && console.error(
              'Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.',
              typeof e.id
            ), t = N(12, e, t, i | Ke), t.elementType = qh, t.lanes = f, t.stateNode = { effectDuration: 0, passiveEffectDuration: 0 }, t;
          case Ja:
            return t = N(13, a, t, o), t.elementType = Ja, t.lanes = f, t;
          case Gh:
            return t = N(19, a, t, o), t.elementType = Gh, t.lanes = f, t;
          default:
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case Fn:
                  d = 10;
                  break e;
                case wh:
                  d = 9;
                  break e;
                case Di:
                  d = 11, h = zd(h);
                  break e;
                case mo:
                  d = 14;
                  break e;
                case yl:
                  d = 16, h = null;
                  break e;
              }
            h = "", (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (h += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), e === null ? a = "null" : zl(e) ? a = "array" : e !== void 0 && e.$$typeof === Un ? (a = "<" + (tt(e.type) || "Unknown") + " />", h = " Did you accidentally export a JSX literal instead of a component?") : a = typeof e, (d = i ? Qt(i) : null) && (h += `

Check the render method of \`` + d + "`."), d = 29, a = Error(
              "Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + (a + "." + h)
            ), h = null;
        }
      return t = N(d, a, t, o), t.elementType = e, t.type = h, t.lanes = f, t._debugOwner = i, t;
    }
    function Dd(e, t, a) {
      return t = Bc(
        e.type,
        e.key,
        e.props,
        e._owner,
        t,
        a
      ), t._debugOwner = e._owner, t._debugStack = e._debugStack, t._debugTask = e._debugTask, t;
    }
    function yu(e, t, a, i) {
      return e = N(7, e, i, t), e.lanes = a, e;
    }
    function Rd(e, t, a) {
      return e = N(6, e, null, t), e.lanes = a, e;
    }
    function Im(e) {
      var t = N(18, null, null, Ue);
      return t.stateNode = e, t;
    }
    function Es(e, t, a) {
      return t = N(
        4,
        e.children !== null ? e.children : [],
        e.key,
        t
      ), t.lanes = a, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
      }, t;
    }
    function ma(e, t) {
      if (typeof e == "object" && e !== null) {
        var a = z1.get(e);
        return a !== void 0 ? a : (t = {
          value: e,
          source: t,
          stack: We(t)
        }, z1.set(e, t), t);
      }
      return {
        value: e,
        source: t,
        stack: We(t)
      };
    }
    function pu(e, t) {
      Ji(), om[fm++] = Vp, om[fm++] = Fg, Fg = e, Vp = t;
    }
    function Pm(e, t, a) {
      Ji(), Wu[Fu++] = bo, Wu[Fu++] = Eo, Wu[Fu++] = Lr, Lr = e;
      var i = bo;
      e = Eo;
      var o = 32 - Wl(i) - 1;
      i &= ~(1 << o), a += 1;
      var f = 32 - Wl(t) + o;
      if (30 < f) {
        var d = o - o % 5;
        f = (i & (1 << d) - 1).toString(32), i >>= d, o -= d, bo = 1 << 32 - Wl(t) + o | a << o | i, Eo = f + e;
      } else
        bo = 1 << f | a << o | i, Eo = e;
    }
    function Md(e) {
      Ji(), e.return !== null && (pu(e, 1), Pm(e, 1, 0));
    }
    function ey(e) {
      for (; e === Fg; )
        Fg = om[--fm], om[fm] = null, Vp = om[--fm], om[fm] = null;
      for (; e === Lr; )
        Lr = Wu[--Fu], Wu[Fu] = null, Eo = Wu[--Fu], Wu[Fu] = null, bo = Wu[--Fu], Wu[Fu] = null;
    }
    function k0() {
      return Ji(), Lr !== null ? { id: bo, overflow: Eo } : null;
    }
    function W0(e, t) {
      Ji(), Wu[Fu++] = bo, Wu[Fu++] = Eo, Wu[Fu++] = Lr, bo = t.id, Eo = t.overflow, Lr = e;
    }
    function Ji() {
      ct || console.error(
        "Expected to be hydrating. This is a bug in React. Please file an issue."
      );
    }
    function Yc(e, t) {
      if (e.return === null) {
        if (eu === null)
          eu = {
            fiber: e,
            children: [],
            serverProps: void 0,
            serverTail: [],
            distanceFromLeaf: t
          };
        else {
          if (eu.fiber !== e)
            throw Error(
              "Saw multiple hydration diff roots in a pass. This is a bug in React."
            );
          eu.distanceFromLeaf > t && (eu.distanceFromLeaf = t);
        }
        return eu;
      }
      var a = Yc(
        e.return,
        t + 1
      ).children;
      return 0 < a.length && a[a.length - 1].fiber === e ? (a = a[a.length - 1], a.distanceFromLeaf > t && (a.distanceFromLeaf = t), a) : (t = {
        fiber: e,
        children: [],
        serverProps: void 0,
        serverTail: [],
        distanceFromLeaf: t
      }, a.push(t), t);
    }
    function Ua() {
      ct && console.error(
        "We should not be hydrating here. This is a bug in React. Please file a bug."
      );
    }
    function Ki(e, t) {
      vc || (e = Yc(e, 0), e.serverProps = null, t !== null && (t = Rg(t), e.serverTail.push(t)));
    }
    function si(e) {
      var t = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : !1, a = "", i = eu;
      throw i !== null && (eu = null, a = rs(i)), gu(
        ma(
          Error(
            "Hydration failed because the server rendered " + (t ? "text" : "HTML") + ` didn't match the client. As a result this tree will be regenerated on the client. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

https://react.dev/link/hydration-mismatch` + a
          ),
          e
        )
      ), _1;
    }
    function ty(e) {
      var t = e.stateNode, a = e.type, i = e.memoizedProps;
      switch (t[Il] = e, t[sa] = i, rc(a, i), a) {
        case "dialog":
          qe("cancel", t), qe("close", t);
          break;
        case "iframe":
        case "object":
        case "embed":
          qe("load", t);
          break;
        case "video":
        case "audio":
          for (a = 0; a < v0.length; a++)
            qe(v0[a], t);
          break;
        case "source":
          qe("error", t);
          break;
        case "img":
        case "image":
        case "link":
          qe("error", t), qe("load", t);
          break;
        case "details":
          qe("toggle", t);
          break;
        case "input":
          Gl("input", i), qe("invalid", t), Oc(t, i), x0(
            t,
            i.value,
            i.defaultValue,
            i.checked,
            i.defaultChecked,
            i.type,
            i.name,
            !0
          );
          break;
        case "option":
          Nm(t, i);
          break;
        case "select":
          Gl("select", i), qe("invalid", t), zc(t, i);
          break;
        case "textarea":
          Gl("textarea", i), qe("invalid", t), _c(t, i), Dc(
            t,
            i.value,
            i.defaultValue,
            i.children
          );
      }
      a = i.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || i.suppressHydrationWarning === !0 || gr(t.textContent, a) ? (i.popover != null && (qe("beforetoggle", t), qe("toggle", t)), i.onScroll != null && qe("scroll", t), i.onScrollEnd != null && qe("scrollend", t), i.onClick != null && (t.onclick = Xl), t = !0) : t = !1, t || si(e, !0);
    }
    function ly(e) {
      for (za = e.return; za; )
        switch (za.tag) {
          case 5:
          case 31:
          case 13:
            Iu = !1;
            return;
          case 27:
          case 3:
            Iu = !0;
            return;
          default:
            za = za.return;
        }
    }
    function qc(e) {
      if (e !== za) return !1;
      if (!ct)
        return ly(e), ct = !0, !1;
      var t = e.tag, a;
      if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = e.type, a = !(a !== "form" && a !== "button") || Sr(e.type, e.memoizedProps)), a = !a), a && Wt) {
        for (a = Wt; a; ) {
          var i = Yc(e, 0), o = Rg(a);
          i.serverTail.push(o), a = o.type === "Suspense" ? hc(a) : on(a.nextSibling);
        }
        si(e);
      }
      if (ly(e), t === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
          throw Error(
            "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
          );
        Wt = hc(e);
      } else if (t === 31) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
          throw Error(
            "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
          );
        Wt = hc(e);
      } else
        t === 27 ? (t = Wt, _i(e.type) ? (e = yS, yS = null, Wt = e) : Wt = t) : Wt = za ? on(e.stateNode.nextSibling) : null;
      return !0;
    }
    function ri() {
      Wt = za = null, vc = ct = !1;
    }
    function ay() {
      var e = jf;
      return e !== null && (pn === null ? pn = e : pn.push.apply(
        pn,
        e
      ), jf = null), e;
    }
    function gu(e) {
      jf === null ? jf = [e] : jf.push(e);
    }
    function Ts() {
      var e = eu;
      if (e !== null) {
        eu = null;
        for (var t = rs(e); 0 < e.children.length; )
          e = e.children[0];
        se(e.fiber, function() {
          console.error(
            `A tree hydrated but some attributes of the server rendered HTML didn't match the client properties. This won't be patched up. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

%s%s`,
            "https://react.dev/link/hydration-mismatch",
            t
          );
        });
      }
    }
    function $i() {
      sm = Ig = null, rm = !1;
    }
    function vu(e, t, a) {
      xe(D1, t._currentValue, e), t._currentValue = a, xe(R1, t._currentRenderer, e), t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== KS && console.error(
        "Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."
      ), t._currentRenderer = KS;
    }
    function Su(e, t) {
      e._currentValue = D1.current;
      var a = R1.current;
      Oe(R1, t), e._currentRenderer = a, Oe(D1, t);
    }
    function di(e, t, a) {
      for (; e !== null; ) {
        var i = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, i !== null && (i.childLanes |= t)) : i !== null && (i.childLanes & t) !== t && (i.childLanes |= t), e === a) break;
        e = e.return;
      }
      e !== a && console.error(
        "Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function ki(e, t, a, i) {
      var o = e.child;
      for (o !== null && (o.return = e); o !== null; ) {
        var f = o.dependencies;
        if (f !== null) {
          var d = o.child;
          f = f.firstContext;
          e: for (; f !== null; ) {
            var h = f;
            f = o;
            for (var y = 0; y < t.length; y++)
              if (h.context === t[y]) {
                f.lanes |= a, h = f.alternate, h !== null && (h.lanes |= a), di(
                  f.return,
                  a,
                  e
                ), i || (d = null);
                break e;
              }
            f = h.next;
          }
        } else if (o.tag === 18) {
          if (d = o.return, d === null)
            throw Error(
              "We just came from a parent so we must have had a parent. This is a bug in React."
            );
          d.lanes |= a, f = d.alternate, f !== null && (f.lanes |= a), di(
            d,
            a,
            e
          ), d = null;
        } else d = o.child;
        if (d !== null) d.return = o;
        else
          for (d = o; d !== null; ) {
            if (d === e) {
              d = null;
              break;
            }
            if (o = d.sibling, o !== null) {
              o.return = d.return, d = o;
              break;
            }
            d = d.return;
          }
        o = d;
      }
    }
    function Wi(e, t, a, i) {
      e = null;
      for (var o = t, f = !1; o !== null; ) {
        if (!f) {
          if ((o.flags & 524288) !== 0) f = !0;
          else if ((o.flags & 262144) !== 0) break;
        }
        if (o.tag === 10) {
          var d = o.alternate;
          if (d === null)
            throw Error("Should have a current fiber. This is a bug in React.");
          if (d = d.memoizedProps, d !== null) {
            var h = o.type;
            dn(o.pendingProps.value, d.value) || (e !== null ? e.push(h) : e = [h]);
          }
        } else if (o === Ur.current) {
          if (d = o.alternate, d === null)
            throw Error("Should have a current fiber. This is a bug in React.");
          d.memoizedState.memoizedState !== o.memoizedState.memoizedState && (e !== null ? e.push(A0) : e = [A0]);
        }
        o = o.return;
      }
      e !== null && ki(
        t,
        e,
        a,
        i
      ), t.flags |= 262144;
    }
    function As(e) {
      for (e = e.firstContext; e !== null; ) {
        if (!dn(
          e.context._currentValue,
          e.memoizedValue
        ))
          return !0;
        e = e.next;
      }
      return !1;
    }
    function Pa(e) {
      Ig = e, sm = null, e = e.dependencies, e !== null && (e.firstContext = null);
    }
    function qt(e) {
      return rm && console.error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
      ), ny(Ig, e);
    }
    function Os(e, t) {
      return Ig === null && Pa(e), ny(e, t);
    }
    function ny(e, t) {
      var a = t._currentValue;
      if (t = { context: t, memoizedValue: a, next: null }, sm === null) {
        if (e === null)
          throw Error(
            "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
          );
        sm = t, e.dependencies = {
          lanes: 0,
          firstContext: t,
          _debugThenableState: null
        }, e.flags |= 524288;
      } else sm = sm.next = t;
      return a;
    }
    function uy() {
      return {
        controller: new kT(),
        data: /* @__PURE__ */ new Map(),
        refCount: 0
      };
    }
    function wc(e) {
      e.controller.signal.aborted && console.warn(
        "A cache instance was retained after it was already freed. This likely indicates a bug in React."
      ), e.refCount++;
    }
    function zs(e) {
      e.refCount--, 0 > e.refCount && console.warn(
        "A cache instance was released after it was already freed. This likely indicates a bug in React."
      ), e.refCount === 0 && WT(FT, function() {
        e.controller.abort();
      });
    }
    function Gn(e, t, a) {
      (e & 127) !== 0 ? 0 > Sc && (Sc = Hl(), Jp = Pg(t), M1 = t, a != null && (C1 = re(a)), (pt & (ea | au)) !== ha && (pl = !0, Yf = Zp), e = gf(), t = pf(), e !== dm || t !== Kp ? dm = -1.1 : t !== null && (Yf = Zp), Zr = e, Kp = t) : (e & 4194048) !== 0 && 0 > Pu && (Pu = Hl(), $p = Pg(t), $S = t, a != null && (kS = re(a)), 0 > zo) && (e = gf(), t = pf(), (e !== wf || t !== Jr) && (wf = -1.1), qf = e, Jr = t);
    }
    function F0(e) {
      if (0 > Sc) {
        Sc = Hl(), Jp = e._debugTask != null ? e._debugTask : null, (pt & (ea | au)) !== ha && (Yf = Zp);
        var t = gf(), a = pf();
        t !== dm || a !== Kp ? dm = -1.1 : a !== null && (Yf = Zp), Zr = t, Kp = a;
      }
      0 > Pu && (Pu = Hl(), $p = e._debugTask != null ? e._debugTask : null, 0 > zo) && (e = gf(), t = pf(), (e !== wf || t !== Jr) && (wf = -1.1), qf = e, Jr = t);
    }
    function Xn() {
      var e = Qr;
      return Qr = 0, e;
    }
    function xa(e) {
      var t = Qr;
      return Qr = e, t;
    }
    function Fi(e) {
      var t = Qr;
      return Qr += e, t;
    }
    function ya() {
      Me = ze = -1.1;
    }
    function Cl() {
      var e = ze;
      return ze = -1.1, e;
    }
    function pa(e) {
      0 <= e && (ze = e);
    }
    function en() {
      var e = dl;
      return dl = -0, e;
    }
    function tn(e) {
      0 <= e && (dl = e);
    }
    function En() {
      var e = ll;
      return ll = null, e;
    }
    function la() {
      var e = pl;
      return pl = !1, e;
    }
    function Cd(e) {
      hn = Hl(), 0 > e.actualStartTime && (e.actualStartTime = hn);
    }
    function Jo(e) {
      if (0 <= hn) {
        var t = Hl() - hn;
        e.actualDuration += t, e.selfBaseDuration = t, hn = -1;
      }
    }
    function Gc(e) {
      if (0 <= hn) {
        var t = Hl() - hn;
        e.actualDuration += t, hn = -1;
      }
    }
    function bu() {
      if (0 <= hn) {
        var e = Hl(), t = e - hn;
        hn = -1, Qr += t, dl += t, Me = e;
      }
    }
    function Ha(e) {
      ll === null && (ll = []), ll.push(e), Ao === null && (Ao = []), Ao.push(e);
    }
    function Tn() {
      hn = Hl(), 0 > ze && (ze = hn);
    }
    function ln(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function I0(e, t) {
      if (Wp === null) {
        var a = Wp = [];
        x1 = 0, Kr = mt(), hm = {
          status: "pending",
          value: void 0,
          then: function(i) {
            a.push(i);
          }
        };
      }
      return x1++, t.then(_s, _s), t;
    }
    function _s() {
      if (--x1 === 0 && (-1 < Pu || (zo = -1.1), Wp !== null)) {
        hm !== null && (hm.status = "fulfilled");
        var e = Wp;
        Wp = null, Kr = 0, hm = null;
        for (var t = 0; t < e.length; t++) (0, e[t])();
      }
    }
    function Xc(e, t) {
      var a = [], i = {
        status: "pending",
        value: null,
        reason: null,
        then: function(o) {
          a.push(o);
        }
      };
      return e.then(
        function() {
          i.status = "fulfilled", i.value = t;
          for (var o = 0; o < a.length; o++) (0, a[o])(t);
        },
        function(o) {
          for (i.status = "rejected", i.reason = o, o = 0; o < a.length; o++)
            (0, a[o])(void 0);
        }
      ), i;
    }
    function Ds() {
      var e = $r.current;
      return e !== null ? e : Lt.pooledCache;
    }
    function Rs(e, t) {
      t === null ? xe($r, $r.current, e) : xe($r, t.pool, e);
    }
    function Ud() {
      var e = Ds();
      return e === null ? null : { parent: xl._currentValue, pool: e };
    }
    function iy() {
      return { didWarnAboutUncachedPromise: !1, thenables: [] };
    }
    function an(e) {
      return e = e.status, e === "fulfilled" || e === "rejected";
    }
    function Lc(e, t, a) {
      G.actQueue !== null && (G.didUsePromise = !0);
      var i = e.thenables;
      if (a = i[a], a === void 0 ? i.push(t) : a !== t && (e.didWarnAboutUncachedPromise || (e.didWarnAboutUncachedPromise = !0, console.error(
        "A component was suspended by an uncached promise. Creating promises inside a Client Component or hook is not yet supported, except via a Suspense-compatible library or framework."
      )), t.then(Xl, Xl), t = a), t._debugInfo === void 0) {
        e = performance.now(), i = t.displayName;
        var o = {
          name: typeof i == "string" ? i : "Promise",
          start: e,
          end: e,
          value: t
        };
        t._debugInfo = [{ awaited: o }], t.status !== "fulfilled" && t.status !== "rejected" && (e = function() {
          o.end = performance.now();
        }, t.then(e, e));
      }
      switch (t.status) {
        case "fulfilled":
          return t.value;
        case "rejected":
          throw e = t.reason, Ko(e), e;
        default:
          if (typeof t.status == "string")
            t.then(Xl, Xl);
          else {
            if (e = Lt, e !== null && 100 < e.shellSuspendCounter)
              throw Error(
                "An unknown Component is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
              );
            e = t, e.status = "pending", e.then(
              function(f) {
                if (t.status === "pending") {
                  var d = t;
                  d.status = "fulfilled", d.value = f;
                }
              },
              function(f) {
                if (t.status === "pending") {
                  var d = t;
                  d.status = "rejected", d.reason = f;
                }
              }
            );
          }
          switch (t.status) {
            case "fulfilled":
              return t.value;
            case "rejected":
              throw e = t.reason, Ko(e), e;
          }
          throw Wr = t, a0 = !0, mm;
      }
    }
    function nn(e) {
      try {
        return lA(e);
      } catch (t) {
        throw t !== null && typeof t == "object" && typeof t.then == "function" ? (Wr = t, a0 = !0, mm) : t;
      }
    }
    function Ms() {
      if (Wr === null)
        throw Error(
          "Expected a suspended thenable. This is a bug in React. Please file an issue."
        );
      var e = Wr;
      return Wr = null, a0 = !1, e;
    }
    function Ko(e) {
      if (e === mm || e === cv)
        throw Error(
          "Hooks are not supported inside an async component. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
        );
    }
    function Ut(e) {
      var t = $e;
      return e != null && ($e = t === null ? e : t.concat(e)), t;
    }
    function Na() {
      var e = $e;
      if (e != null) {
        for (var t = e.length - 1; 0 <= t; t--)
          if (e[t].name != null) {
            var a = e[t].debugTask;
            if (a != null) return a;
          }
      }
      return null;
    }
    function Ln(e, t, a) {
      for (var i = Object.keys(e.props), o = 0; o < i.length; o++) {
        var f = i[o];
        if (f !== "children" && f !== "key") {
          t === null && (t = Dd(e, a.mode, 0), t._debugInfo = $e, t.return = a), se(
            t,
            function(d) {
              console.error(
                "Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",
                d
              );
            },
            f
          );
          break;
        }
      }
    }
    function un(e) {
      var t = n0;
      return n0 += 1, ym === null && (ym = iy()), Lc(ym, e, t);
    }
    function ja(e, t) {
      t = t.props.ref, e.ref = t !== void 0 ? t : null;
    }
    function Eu(e, t) {
      throw t.$$typeof === zp ? Error(
        `A React Element from an older version of React was rendered. This is not supported. It can happen if:
- Multiple copies of the "react" package is used.
- A library pre-bundled an old copy of "react" or "react/jsx-runtime".
- A compiler tries to "inline" JSX instead of using the runtime.`
      ) : (e = Object.prototype.toString.call(t), Error(
        "Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead."
      ));
    }
    function Cs(e, t) {
      var a = Na();
      a !== null ? a.run(
        Eu.bind(null, e, t)
      ) : Eu(e, t);
    }
    function xd(e, t) {
      var a = re(e) || "Component";
      yb[a] || (yb[a] = !0, t = t.displayName || t.name || "Component", e.tag === 3 ? console.error(
        `Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  root.render(%s)`,
        t,
        t,
        t
      ) : console.error(
        `Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  <%s>{%s}</%s>`,
        t,
        t,
        a,
        t,
        a
      ));
    }
    function $o(e, t) {
      var a = Na();
      a !== null ? a.run(
        xd.bind(null, e, t)
      ) : xd(e, t);
    }
    function cy(e, t) {
      var a = re(e) || "Component";
      pb[a] || (pb[a] = !0, t = String(t), e.tag === 3 ? console.error(
        `Symbols are not valid as a React child.
  root.render(%s)`,
        t
      ) : console.error(
        `Symbols are not valid as a React child.
  <%s>%s</%s>`,
        a,
        t,
        a
      ));
    }
    function Sl(e, t) {
      var a = Na();
      a !== null ? a.run(
        cy.bind(null, e, t)
      ) : cy(e, t);
    }
    function wt(e) {
      function t(S, E) {
        if (e) {
          var z = S.deletions;
          z === null ? (S.deletions = [E], S.flags |= 16) : z.push(E);
        }
      }
      function a(S, E) {
        if (!e) return null;
        for (; E !== null; )
          t(S, E), E = E.sibling;
        return null;
      }
      function i(S) {
        for (var E = /* @__PURE__ */ new Map(); S !== null; )
          S.key !== null ? E.set(S.key, S) : E.set(S.index, S), S = S.sibling;
        return E;
      }
      function o(S, E) {
        return S = mu(S, E), S.index = 0, S.sibling = null, S;
      }
      function f(S, E, z) {
        return S.index = z, e ? (z = S.alternate, z !== null ? (z = z.index, z < E ? (S.flags |= 67108866, E) : z) : (S.flags |= 67108866, E)) : (S.flags |= 1048576, E);
      }
      function d(S) {
        return e && S.alternate === null && (S.flags |= 67108866), S;
      }
      function h(S, E, z, Z) {
        return E === null || E.tag !== 6 ? (E = Rd(
          z,
          S.mode,
          Z
        ), E.return = S, E._debugOwner = S, E._debugTask = S._debugTask, E._debugInfo = $e, E) : (E = o(E, z), E.return = S, E._debugInfo = $e, E);
      }
      function y(S, E, z, Z) {
        var ie = z.type;
        return ie === kl ? (E = _(
          S,
          E,
          z.props.children,
          Z,
          z.key
        ), Ln(z, E, S), E) : E !== null && (E.elementType === ie || jc(E, z) || typeof ie == "object" && ie !== null && ie.$$typeof === yl && nn(ie) === E.type) ? (E = o(E, z.props), ja(E, z), E.return = S, E._debugOwner = z._owner, E._debugInfo = $e, E) : (E = Dd(z, S.mode, Z), ja(E, z), E.return = S, E._debugInfo = $e, E);
      }
      function p(S, E, z, Z) {
        return E === null || E.tag !== 4 || E.stateNode.containerInfo !== z.containerInfo || E.stateNode.implementation !== z.implementation ? (E = Es(z, S.mode, Z), E.return = S, E._debugInfo = $e, E) : (E = o(E, z.children || []), E.return = S, E._debugInfo = $e, E);
      }
      function _(S, E, z, Z, ie) {
        return E === null || E.tag !== 7 ? (E = yu(
          z,
          S.mode,
          Z,
          ie
        ), E.return = S, E._debugOwner = S, E._debugTask = S._debugTask, E._debugInfo = $e, E) : (E = o(E, z), E.return = S, E._debugInfo = $e, E);
      }
      function R(S, E, z) {
        if (typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint")
          return E = Rd(
            "" + E,
            S.mode,
            z
          ), E.return = S, E._debugOwner = S, E._debugTask = S._debugTask, E._debugInfo = $e, E;
        if (typeof E == "object" && E !== null) {
          switch (E.$$typeof) {
            case Un:
              return z = Dd(
                E,
                S.mode,
                z
              ), ja(z, E), z.return = S, S = Ut(E._debugInfo), z._debugInfo = $e, $e = S, z;
            case zf:
              return E = Es(
                E,
                S.mode,
                z
              ), E.return = S, E._debugInfo = $e, E;
            case yl:
              var Z = Ut(E._debugInfo);
              return E = nn(E), S = R(S, E, z), $e = Z, S;
          }
          if (zl(E) || _t(E))
            return z = yu(
              E,
              S.mode,
              z,
              null
            ), z.return = S, z._debugOwner = S, z._debugTask = S._debugTask, S = Ut(E._debugInfo), z._debugInfo = $e, $e = S, z;
          if (typeof E.then == "function")
            return Z = Ut(E._debugInfo), S = R(
              S,
              un(E),
              z
            ), $e = Z, S;
          if (E.$$typeof === Fn)
            return R(
              S,
              Os(S, E),
              z
            );
          Cs(S, E);
        }
        return typeof E == "function" && $o(S, E), typeof E == "symbol" && Sl(S, E), null;
      }
      function b(S, E, z, Z) {
        var ie = E !== null ? E.key : null;
        if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint")
          return ie !== null ? null : h(S, E, "" + z, Z);
        if (typeof z == "object" && z !== null) {
          switch (z.$$typeof) {
            case Un:
              return z.key === ie ? (ie = Ut(z._debugInfo), S = y(
                S,
                E,
                z,
                Z
              ), $e = ie, S) : null;
            case zf:
              return z.key === ie ? p(S, E, z, Z) : null;
            case yl:
              return ie = Ut(z._debugInfo), z = nn(z), S = b(
                S,
                E,
                z,
                Z
              ), $e = ie, S;
          }
          if (zl(z) || _t(z))
            return ie !== null ? null : (ie = Ut(z._debugInfo), S = _(
              S,
              E,
              z,
              Z,
              null
            ), $e = ie, S);
          if (typeof z.then == "function")
            return ie = Ut(z._debugInfo), S = b(
              S,
              E,
              un(z),
              Z
            ), $e = ie, S;
          if (z.$$typeof === Fn)
            return b(
              S,
              E,
              Os(S, z),
              Z
            );
          Cs(S, z);
        }
        return typeof z == "function" && $o(S, z), typeof z == "symbol" && Sl(S, z), null;
      }
      function Y(S, E, z, Z, ie) {
        if (typeof Z == "string" && Z !== "" || typeof Z == "number" || typeof Z == "bigint")
          return S = S.get(z) || null, h(E, S, "" + Z, ie);
        if (typeof Z == "object" && Z !== null) {
          switch (Z.$$typeof) {
            case Un:
              return z = S.get(
                Z.key === null ? z : Z.key
              ) || null, S = Ut(Z._debugInfo), E = y(
                E,
                z,
                Z,
                ie
              ), $e = S, E;
            case zf:
              return S = S.get(
                Z.key === null ? z : Z.key
              ) || null, p(E, S, Z, ie);
            case yl:
              var je = Ut(Z._debugInfo);
              return Z = nn(Z), E = Y(
                S,
                E,
                z,
                Z,
                ie
              ), $e = je, E;
          }
          if (zl(Z) || _t(Z))
            return z = S.get(z) || null, S = Ut(Z._debugInfo), E = _(
              E,
              z,
              Z,
              ie,
              null
            ), $e = S, E;
          if (typeof Z.then == "function")
            return je = Ut(Z._debugInfo), E = Y(
              S,
              E,
              z,
              un(Z),
              ie
            ), $e = je, E;
          if (Z.$$typeof === Fn)
            return Y(
              S,
              E,
              z,
              Os(E, Z),
              ie
            );
          Cs(E, Z);
        }
        return typeof Z == "function" && $o(E, Z), typeof Z == "symbol" && Sl(E, Z), null;
      }
      function ue(S, E, z, Z) {
        if (typeof z != "object" || z === null) return Z;
        switch (z.$$typeof) {
          case Un:
          case zf:
            ye(S, E, z);
            var ie = z.key;
            if (typeof ie != "string") break;
            if (Z === null) {
              Z = /* @__PURE__ */ new Set(), Z.add(ie);
              break;
            }
            if (!Z.has(ie)) {
              Z.add(ie);
              break;
            }
            se(E, function() {
              console.error(
                "Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.",
                ie
              );
            });
            break;
          case yl:
            z = nn(z), ue(S, E, z, Z);
        }
        return Z;
      }
      function fe(S, E, z, Z) {
        for (var ie = null, je = null, Ae = null, Se = E, Je = E = 0, Ft = null; Se !== null && Je < z.length; Je++) {
          Se.index > Je ? (Ft = Se, Se = null) : Ft = Se.sibling;
          var Rl = b(
            S,
            Se,
            z[Je],
            Z
          );
          if (Rl === null) {
            Se === null && (Se = Ft);
            break;
          }
          ie = ue(
            S,
            Rl,
            z[Je],
            ie
          ), e && Se && Rl.alternate === null && t(S, Se), E = f(Rl, E, Je), Ae === null ? je = Rl : Ae.sibling = Rl, Ae = Rl, Se = Ft;
        }
        if (Je === z.length)
          return a(S, Se), ct && pu(S, Je), je;
        if (Se === null) {
          for (; Je < z.length; Je++)
            Se = R(S, z[Je], Z), Se !== null && (ie = ue(
              S,
              Se,
              z[Je],
              ie
            ), E = f(
              Se,
              E,
              Je
            ), Ae === null ? je = Se : Ae.sibling = Se, Ae = Se);
          return ct && pu(S, Je), je;
        }
        for (Se = i(Se); Je < z.length; Je++)
          Ft = Y(
            Se,
            S,
            Je,
            z[Je],
            Z
          ), Ft !== null && (ie = ue(
            S,
            Ft,
            z[Je],
            ie
          ), e && Ft.alternate !== null && Se.delete(
            Ft.key === null ? Je : Ft.key
          ), E = f(
            Ft,
            E,
            Je
          ), Ae === null ? je = Ft : Ae.sibling = Ft, Ae = Ft);
        return e && Se.forEach(function(Ho) {
          return t(S, Ho);
        }), ct && pu(S, Je), je;
      }
      function Jt(S, E, z, Z) {
        if (z == null)
          throw Error("An iterable object provided no iterator.");
        for (var ie = null, je = null, Ae = E, Se = E = 0, Je = null, Ft = null, Rl = z.next(); Ae !== null && !Rl.done; Se++, Rl = z.next()) {
          Ae.index > Se ? (Je = Ae, Ae = null) : Je = Ae.sibling;
          var Ho = b(S, Ae, Rl.value, Z);
          if (Ho === null) {
            Ae === null && (Ae = Je);
            break;
          }
          Ft = ue(
            S,
            Ho,
            Rl.value,
            Ft
          ), e && Ae && Ho.alternate === null && t(S, Ae), E = f(Ho, E, Se), je === null ? ie = Ho : je.sibling = Ho, je = Ho, Ae = Je;
        }
        if (Rl.done)
          return a(S, Ae), ct && pu(S, Se), ie;
        if (Ae === null) {
          for (; !Rl.done; Se++, Rl = z.next())
            Ae = R(S, Rl.value, Z), Ae !== null && (Ft = ue(
              S,
              Ae,
              Rl.value,
              Ft
            ), E = f(
              Ae,
              E,
              Se
            ), je === null ? ie = Ae : je.sibling = Ae, je = Ae);
          return ct && pu(S, Se), ie;
        }
        for (Ae = i(Ae); !Rl.done; Se++, Rl = z.next())
          Je = Y(
            Ae,
            S,
            Se,
            Rl.value,
            Z
          ), Je !== null && (Ft = ue(
            S,
            Je,
            Rl.value,
            Ft
          ), e && Je.alternate !== null && Ae.delete(
            Je.key === null ? Se : Je.key
          ), E = f(
            Je,
            E,
            Se
          ), je === null ? ie = Je : je.sibling = Je, je = Je);
        return e && Ae.forEach(function(_A) {
          return t(S, _A);
        }), ct && pu(S, Se), ie;
      }
      function rt(S, E, z, Z) {
        if (typeof z == "object" && z !== null && z.type === kl && z.key === null && (Ln(z, null, S), z = z.props.children), typeof z == "object" && z !== null) {
          switch (z.$$typeof) {
            case Un:
              var ie = Ut(z._debugInfo);
              e: {
                for (var je = z.key; E !== null; ) {
                  if (E.key === je) {
                    if (je = z.type, je === kl) {
                      if (E.tag === 7) {
                        a(
                          S,
                          E.sibling
                        ), Z = o(
                          E,
                          z.props.children
                        ), Z.return = S, Z._debugOwner = z._owner, Z._debugInfo = $e, Ln(z, Z, S), S = Z;
                        break e;
                      }
                    } else if (E.elementType === je || jc(
                      E,
                      z
                    ) || typeof je == "object" && je !== null && je.$$typeof === yl && nn(je) === E.type) {
                      a(
                        S,
                        E.sibling
                      ), Z = o(E, z.props), ja(Z, z), Z.return = S, Z._debugOwner = z._owner, Z._debugInfo = $e, S = Z;
                      break e;
                    }
                    a(S, E);
                    break;
                  } else t(S, E);
                  E = E.sibling;
                }
                z.type === kl ? (Z = yu(
                  z.props.children,
                  S.mode,
                  Z,
                  z.key
                ), Z.return = S, Z._debugOwner = S, Z._debugTask = S._debugTask, Z._debugInfo = $e, Ln(z, Z, S), S = Z) : (Z = Dd(
                  z,
                  S.mode,
                  Z
                ), ja(Z, z), Z.return = S, Z._debugInfo = $e, S = Z);
              }
              return S = d(S), $e = ie, S;
            case zf:
              e: {
                for (ie = z, z = ie.key; E !== null; ) {
                  if (E.key === z)
                    if (E.tag === 4 && E.stateNode.containerInfo === ie.containerInfo && E.stateNode.implementation === ie.implementation) {
                      a(
                        S,
                        E.sibling
                      ), Z = o(
                        E,
                        ie.children || []
                      ), Z.return = S, S = Z;
                      break e;
                    } else {
                      a(S, E);
                      break;
                    }
                  else t(S, E);
                  E = E.sibling;
                }
                Z = Es(
                  ie,
                  S.mode,
                  Z
                ), Z.return = S, S = Z;
              }
              return d(S);
            case yl:
              return ie = Ut(z._debugInfo), z = nn(z), S = rt(
                S,
                E,
                z,
                Z
              ), $e = ie, S;
          }
          if (zl(z))
            return ie = Ut(z._debugInfo), S = fe(
              S,
              E,
              z,
              Z
            ), $e = ie, S;
          if (_t(z)) {
            if (ie = Ut(z._debugInfo), je = _t(z), typeof je != "function")
              throw Error(
                "An object is not an iterable. This error is likely caused by a bug in React. Please file an issue."
              );
            var Ae = je.call(z);
            return Ae === z ? (S.tag !== 0 || Object.prototype.toString.call(S.type) !== "[object GeneratorFunction]" || Object.prototype.toString.call(Ae) !== "[object Generator]") && (hb || console.error(
              "Using Iterators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. You can also use an Iterable that can iterate multiple times over the same items."
            ), hb = !0) : z.entries !== je || B1 || (console.error(
              "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
            ), B1 = !0), S = Jt(
              S,
              E,
              Ae,
              Z
            ), $e = ie, S;
          }
          if (typeof z.then == "function")
            return ie = Ut(z._debugInfo), S = rt(
              S,
              E,
              un(z),
              Z
            ), $e = ie, S;
          if (z.$$typeof === Fn)
            return rt(
              S,
              E,
              Os(S, z),
              Z
            );
          Cs(S, z);
        }
        return typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint" ? (ie = "" + z, E !== null && E.tag === 6 ? (a(
          S,
          E.sibling
        ), Z = o(E, ie), Z.return = S, S = Z) : (a(S, E), Z = Rd(
          ie,
          S.mode,
          Z
        ), Z.return = S, Z._debugOwner = S, Z._debugTask = S._debugTask, Z._debugInfo = $e, S = Z), d(S)) : (typeof z == "function" && $o(S, z), typeof z == "symbol" && Sl(S, z), a(S, E));
      }
      return function(S, E, z, Z) {
        var ie = $e;
        $e = null;
        try {
          n0 = 0;
          var je = rt(
            S,
            E,
            z,
            Z
          );
          return ym = null, je;
        } catch (Ft) {
          if (Ft === mm || Ft === cv) throw Ft;
          var Ae = N(29, Ft, null, S.mode);
          Ae.lanes = Z, Ae.return = S;
          var Se = Ae._debugInfo = $e;
          if (Ae._debugOwner = S._debugOwner, Ae._debugTask = S._debugTask, Se != null) {
            for (var Je = Se.length - 1; 0 <= Je; Je--)
              if (typeof Se[Je].stack == "string") {
                Ae._debugOwner = Se[Je], Ae._debugTask = Se[Je].debugTask;
                break;
              }
          }
          return Ae;
        } finally {
          $e = ie;
        }
      };
    }
    function ut(e, t) {
      var a = zl(e);
      return e = !a && typeof _t(e) == "function", a || e ? (a = a ? "array" : "iterable", console.error(
        "A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>",
        a,
        t,
        a
      ), !1) : !0;
    }
    function Tu(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, lanes: 0, hiddenCallbacks: null },
        callbacks: null
      };
    }
    function Ba(e, t) {
      e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        callbacks: null
      });
    }
    function Au(e) {
      return {
        lane: e,
        tag: vb,
        payload: null,
        callback: null,
        next: null
      };
    }
    function ga(e, t, a) {
      var i = e.updateQueue;
      if (i === null) return null;
      if (i = i.shared, q1 === i && !Eb) {
        var o = re(e);
        console.error(
          `An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback.

Please update the following component: %s`,
          o
        ), Eb = !0;
      }
      return (pt & ea) !== ha ? (o = i.pending, o === null ? t.next = t : (t.next = o.next, o.next = t), i.pending = t, t = bs(e), Fm(e, null, a), t) : (Vi(e, i, t, a), bs(e));
    }
    function ko(e, t, a) {
      if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
        var i = t.lanes;
        i &= e.pendingLanes, a |= i, t.lanes = a, us(e, a);
      }
    }
    function Us(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null && (i = i.updateQueue, a === i)) {
        var o = null, f = null;
        if (a = a.firstBaseUpdate, a !== null) {
          do {
            var d = {
              lane: a.lane,
              tag: a.tag,
              payload: a.payload,
              callback: null,
              next: null
            };
            f === null ? o = f = d : f = f.next = d, a = a.next;
          } while (a !== null);
          f === null ? o = f = t : f = f.next = t;
        } else o = f = t;
        a = {
          baseState: i.baseState,
          firstBaseUpdate: o,
          lastBaseUpdate: f,
          shared: i.shared,
          callbacks: i.callbacks
        }, e.updateQueue = a;
        return;
      }
      e = a.lastBaseUpdate, e === null ? a.firstBaseUpdate = t : e.next = t, a.lastBaseUpdate = t;
    }
    function Ou() {
      if (w1) {
        var e = hm;
        if (e !== null) throw e;
      }
    }
    function Qn(e, t, a, i) {
      w1 = !1;
      var o = e.updateQueue;
      Gf = !1, q1 = o.shared;
      var f = o.firstBaseUpdate, d = o.lastBaseUpdate, h = o.shared.pending;
      if (h !== null) {
        o.shared.pending = null;
        var y = h, p = y.next;
        y.next = null, d === null ? f = p : d.next = p, d = y;
        var _ = e.alternate;
        _ !== null && (_ = _.updateQueue, h = _.lastBaseUpdate, h !== d && (h === null ? _.firstBaseUpdate = p : h.next = p, _.lastBaseUpdate = y));
      }
      if (f !== null) {
        var R = o.baseState;
        d = 0, _ = p = y = null, h = f;
        do {
          var b = h.lane & -536870913, Y = b !== h.lane;
          if (Y ? (ke & b) === b : (i & b) === b) {
            b !== 0 && b === Kr && (w1 = !0), _ !== null && (_ = _.next = {
              lane: 0,
              tag: h.tag,
              payload: h.payload,
              callback: null,
              next: null
            });
            e: {
              b = e;
              var ue = h, fe = t, Jt = a;
              switch (ue.tag) {
                case Sb:
                  if (ue = ue.payload, typeof ue == "function") {
                    rm = !0;
                    var rt = ue.call(
                      Jt,
                      R,
                      fe
                    );
                    if (b.mode & Ka) {
                      me(!0);
                      try {
                        ue.call(Jt, R, fe);
                      } finally {
                        me(!1);
                      }
                    }
                    rm = !1, R = rt;
                    break e;
                  }
                  R = ue;
                  break e;
                case Y1:
                  b.flags = b.flags & -65537 | 128;
                case vb:
                  if (rt = ue.payload, typeof rt == "function") {
                    if (rm = !0, ue = rt.call(
                      Jt,
                      R,
                      fe
                    ), b.mode & Ka) {
                      me(!0);
                      try {
                        rt.call(Jt, R, fe);
                      } finally {
                        me(!1);
                      }
                    }
                    rm = !1;
                  } else ue = rt;
                  if (ue == null) break e;
                  R = Ze({}, R, ue);
                  break e;
                case bb:
                  Gf = !0;
              }
            }
            b = h.callback, b !== null && (e.flags |= 64, Y && (e.flags |= 8192), Y = o.callbacks, Y === null ? o.callbacks = [b] : Y.push(b));
          } else
            Y = {
              lane: b,
              tag: h.tag,
              payload: h.payload,
              callback: h.callback,
              next: null
            }, _ === null ? (p = _ = Y, y = R) : _ = _.next = Y, d |= b;
          if (h = h.next, h === null) {
            if (h = o.shared.pending, h === null)
              break;
            Y = h, h = Y.next, Y.next = null, o.lastBaseUpdate = Y, o.shared.pending = null;
          }
        } while (!0);
        _ === null && (y = R), o.baseState = y, o.firstBaseUpdate = p, o.lastBaseUpdate = _, f === null && (o.shared.lanes = 0), Qf |= d, e.lanes = d, e.memoizedState = R;
      }
      q1 = null;
    }
    function Hd(e, t) {
      if (typeof e != "function")
        throw Error(
          "Invalid argument passed as callback. Expected a function. Instead received: " + e
        );
      e.call(t);
    }
    function xs(e, t) {
      var a = e.shared.hiddenCallbacks;
      if (a !== null)
        for (e.shared.hiddenCallbacks = null, e = 0; e < a.length; e++)
          Hd(a[e], t);
    }
    function Nd(e, t) {
      var a = e.callbacks;
      if (a !== null)
        for (e.callbacks = null, e = 0; e < a.length; e++)
          Hd(a[e], t);
    }
    function Ii(e, t) {
      var a = Ec;
      xe(fv, a, e), xe(pm, t, e), Ec = a | t.baseLanes;
    }
    function Vn(e) {
      xe(fv, Ec, e), xe(
        pm,
        pm.current,
        e
      );
    }
    function zu(e) {
      Ec = fv.current, Oe(pm, e), Oe(fv, e);
    }
    function aa(e) {
      var t = e.alternate;
      xe(
        Dl,
        Dl.current & gm,
        e
      ), xe(tu, e, e), ei === null && (t === null || pm.current !== null || t.memoizedState !== null) && (ei = e);
    }
    function Hs(e) {
      xe(Dl, Dl.current, e), xe(tu, e, e), ei === null && (ei = e);
    }
    function jd(e) {
      e.tag === 22 ? (xe(Dl, Dl.current, e), xe(tu, e, e), ei === null && (ei = e)) : cn(e);
    }
    function cn(e) {
      xe(Dl, Dl.current, e), xe(
        tu,
        tu.current,
        e
      );
    }
    function na(e) {
      Oe(tu, e), ei === e && (ei = null), Oe(Dl, e);
    }
    function _u(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === 13) {
          var a = t.memoizedState;
          if (a !== null && (a = a.dehydrated, a === null || fp(a) || zh(a)))
            return t;
        } else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
          if ((t.flags & 128) !== 0) return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    function Te() {
      var e = q;
      li === null ? li = [e] : li.push(e);
    }
    function I() {
      var e = q;
      if (li !== null && (Ro++, li[Ro] !== e)) {
        var t = re(Ne);
        if (!Tb.has(t) && (Tb.add(t), li !== null)) {
          for (var a = "", i = 0; i <= Ro; i++) {
            var o = li[i], f = i === Ro ? e : o;
            for (o = i + 1 + ". " + o; 30 > o.length; )
              o += " ";
            o += f + `
`, a += o;
          }
          console.error(
            `React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://react.dev/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`,
            t,
            a
          );
        }
      }
    }
    function Qc(e) {
      e == null || zl(e) || console.error(
        "%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.",
        q,
        typeof e
      );
    }
    function Bd() {
      var e = re(Ne);
      Ob.has(e) || (Ob.add(e), console.error(
        "ReactDOM.useFormState has been renamed to React.useActionState. Please update %s to use React.useActionState.",
        e
      ));
    }
    function il() {
      throw Error(
        `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
      );
    }
    function oy(e, t) {
      if (c0) return !1;
      if (t === null)
        return console.error(
          "%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.",
          q
        ), !1;
      e.length !== t.length && console.error(
        `The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`,
        q,
        "[" + t.join(", ") + "]",
        "[" + e.join(", ") + "]"
      );
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!dn(e[a], t[a])) return !1;
      return !0;
    }
    function cl(e, t, a, i, o, f) {
      _o = f, Ne = t, li = e !== null ? e._debugHookTypes : null, Ro = -1, c0 = e !== null && e.type !== t.type, (Object.prototype.toString.call(a) === "[object AsyncFunction]" || Object.prototype.toString.call(a) === "[object AsyncGeneratorFunction]") && (f = re(Ne), G1.has(f) || (G1.add(f), console.error(
        "%s is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.",
        f === null ? "An unknown Component" : "<" + f + ">"
      ))), t.memoizedState = null, t.updateQueue = null, t.lanes = 0, G.H = e !== null && e.memoizedState !== null ? L1 : li !== null ? zb : X1, Ir = f = (t.mode & Ka) !== Ue;
      var d = H1(a, i, o);
      if (Ir = !1, Sm && (d = Vc(
        t,
        a,
        i,
        o
      )), f) {
        me(!0);
        try {
          d = Vc(
            t,
            a,
            i,
            o
          );
        } finally {
          me(!1);
        }
      }
      return Yd(e, t), d;
    }
    function Yd(e, t) {
      t._debugHookTypes = li, t.dependencies === null ? Do !== null && (t.dependencies = {
        lanes: 0,
        firstContext: null,
        _debugThenableState: Do
      }) : t.dependencies._debugThenableState = Do, G.H = o0;
      var a = Xt !== null && Xt.next !== null;
      if (_o = 0, li = q = Nl = Xt = Ne = null, Ro = -1, e !== null && (e.flags & 65011712) !== (t.flags & 65011712) && console.error(
        "Internal React error: Expected static flag was missing. Please notify the React team."
      ), rv = !1, i0 = 0, Do = null, a)
        throw Error(
          "Rendered fewer hooks than expected. This may be caused by an accidental early return statement."
        );
      e === null || jl || (e = e.dependencies, e !== null && As(e) && (jl = !0)), a0 ? (a0 = !1, e = !0) : e = !1, e && (t = re(t) || "Unknown", Ab.has(t) || G1.has(t) || (Ab.add(t), console.error(
        "`use` was called from inside a try/catch block. This is not allowed and can lead to unexpected behavior. To handle errors triggered by `use`, wrap your component in a error boundary."
      )));
    }
    function Vc(e, t, a, i) {
      Ne = e;
      var o = 0;
      do {
        if (Sm && (Do = null), i0 = 0, Sm = !1, o >= nA)
          throw Error(
            "Too many re-renders. React limits the number of renders to prevent an infinite loop."
          );
        if (o += 1, c0 = !1, Nl = Xt = null, e.updateQueue != null) {
          var f = e.updateQueue;
          f.lastEffect = null, f.events = null, f.stores = null, f.memoCache != null && (f.memoCache.index = 0);
        }
        Ro = -1, G.H = _b, f = H1(t, a, i);
      } while (Sm);
      return f;
    }
    function Ns() {
      var e = G.H, t = e.useState()[0];
      return t = typeof t.then == "function" ? Wo(t) : t, e = e.useState()[0], (Xt !== null ? Xt.memoizedState : null) !== e && (Ne.flags |= 1024), t;
    }
    function js() {
      var e = dv !== 0;
      return dv = 0, e;
    }
    function Pi(e, t, a) {
      t.updateQueue = e.updateQueue, t.flags = (t.mode & Ui) !== Ue ? t.flags & -402655237 : t.flags & -2053, e.lanes &= ~a;
    }
    function ec(e) {
      if (rv) {
        for (e = e.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        rv = !1;
      }
      _o = 0, li = Nl = Xt = Ne = null, Ro = -1, q = null, Sm = !1, i0 = dv = 0, Do = null;
    }
    function va() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return Nl === null ? Ne.memoizedState = Nl = e : Nl = Nl.next = e, Nl;
    }
    function Tt() {
      if (Xt === null) {
        var e = Ne.alternate;
        e = e !== null ? e.memoizedState : null;
      } else e = Xt.next;
      var t = Nl === null ? Ne.memoizedState : Nl.next;
      if (t !== null)
        Nl = t, Xt = e;
      else {
        if (e === null)
          throw Ne.alternate === null ? Error(
            "Update hook called on initial render. This is likely a bug in React. Please file an issue."
          ) : Error("Rendered more hooks than during the previous render.");
        Xt = e, e = {
          memoizedState: Xt.memoizedState,
          baseState: Xt.baseState,
          baseQueue: Xt.baseQueue,
          queue: Xt.queue,
          next: null
        }, Nl === null ? Ne.memoizedState = Nl = e : Nl = Nl.next = e;
      }
      return Nl;
    }
    function qd() {
      return { lastEffect: null, events: null, stores: null, memoCache: null };
    }
    function Wo(e) {
      var t = i0;
      return i0 += 1, Do === null && (Do = iy()), e = Lc(Do, e, t), t = Ne, (Nl === null ? t.memoizedState : Nl.next) === null && (t = t.alternate, G.H = t !== null && t.memoizedState !== null ? L1 : X1), e;
    }
    function Ya(e) {
      if (e !== null && typeof e == "object") {
        if (typeof e.then == "function") return Wo(e);
        if (e.$$typeof === Fn) return qt(e);
      }
      throw Error("An unsupported type was passed to use(): " + String(e));
    }
    function hi(e) {
      var t = null, a = Ne.updateQueue;
      if (a !== null && (t = a.memoCache), t == null) {
        var i = Ne.alternate;
        i !== null && (i = i.updateQueue, i !== null && (i = i.memoCache, i != null && (t = {
          data: i.data.map(function(o) {
            return o.slice();
          }),
          index: 0
        })));
      }
      if (t == null && (t = { data: [], index: 0 }), a === null && (a = qd(), Ne.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0 || c0)
        for (a = t.data[t.index] = Array(e), i = 0; i < e; i++)
          a[i] = u1;
      else
        a.length !== e && console.error(
          "Expected a constant size argument for each invocation of useMemoCache. The previous cache was allocated with size %s but size %s was requested.",
          a.length,
          e
        );
      return t.index++, a;
    }
    function qa(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function wd(e, t, a) {
      var i = va();
      if (a !== void 0) {
        var o = a(t);
        if (Ir) {
          me(!0);
          try {
            a(t);
          } finally {
            me(!1);
          }
        }
      } else o = t;
      return i.memoizedState = i.baseState = o, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: o
      }, i.queue = e, e = e.dispatch = py.bind(
        null,
        Ne,
        e
      ), [i.memoizedState, e];
    }
    function Zn(e) {
      var t = Tt();
      return Bs(t, Xt, e);
    }
    function Bs(e, t, a) {
      var i = e.queue;
      if (i === null)
        throw Error(
          "Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)"
        );
      i.lastRenderedReducer = a;
      var o = e.baseQueue, f = i.pending;
      if (f !== null) {
        if (o !== null) {
          var d = o.next;
          o.next = f.next, f.next = d;
        }
        t.baseQueue !== o && console.error(
          "Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."
        ), t.baseQueue = o = f, i.pending = null;
      }
      if (f = e.baseState, o === null) e.memoizedState = f;
      else {
        t = o.next;
        var h = d = null, y = null, p = t, _ = !1;
        do {
          var R = p.lane & -536870913;
          if (R !== p.lane ? (ke & R) === R : (_o & R) === R) {
            var b = p.revertLane;
            if (b === 0)
              y !== null && (y = y.next = {
                lane: 0,
                revertLane: 0,
                gesture: null,
                action: p.action,
                hasEagerState: p.hasEagerState,
                eagerState: p.eagerState,
                next: null
              }), R === Kr && (_ = !0);
            else if ((_o & b) === b) {
              p = p.next, b === Kr && (_ = !0);
              continue;
            } else
              R = {
                lane: 0,
                revertLane: p.revertLane,
                gesture: null,
                action: p.action,
                hasEagerState: p.hasEagerState,
                eagerState: p.eagerState,
                next: null
              }, y === null ? (h = y = R, d = f) : y = y.next = R, Ne.lanes |= b, Qf |= b;
            R = p.action, Ir && a(f, R), f = p.hasEagerState ? p.eagerState : a(f, R);
          } else
            b = {
              lane: R,
              revertLane: p.revertLane,
              gesture: p.gesture,
              action: p.action,
              hasEagerState: p.hasEagerState,
              eagerState: p.eagerState,
              next: null
            }, y === null ? (h = y = b, d = f) : y = y.next = b, Ne.lanes |= R, Qf |= R;
          p = p.next;
        } while (p !== null && p !== t);
        if (y === null ? d = f : y.next = h, !dn(f, e.memoizedState) && (jl = !0, _ && (a = hm, a !== null)))
          throw a;
        e.memoizedState = f, e.baseState = d, e.baseQueue = y, i.lastRenderedState = f;
      }
      return o === null && (i.lanes = 0), [e.memoizedState, i.dispatch];
    }
    function tc(e) {
      var t = Tt(), a = t.queue;
      if (a === null)
        throw Error(
          "Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)"
        );
      a.lastRenderedReducer = e;
      var i = a.dispatch, o = a.pending, f = t.memoizedState;
      if (o !== null) {
        a.pending = null;
        var d = o = o.next;
        do
          f = e(f, d.action), d = d.next;
        while (d !== o);
        dn(f, t.memoizedState) || (jl = !0), t.memoizedState = f, t.baseQueue === null && (t.baseState = f), a.lastRenderedState = f;
      }
      return [f, i];
    }
    function Fo(e, t, a) {
      var i = Ne, o = va();
      if (ct) {
        if (a === void 0)
          throw Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        var f = a();
        vm || f === a() || (console.error(
          "The result of getServerSnapshot should be cached to avoid an infinite loop"
        ), vm = !0);
      } else {
        if (f = t(), vm || (a = t(), dn(f, a) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), vm = !0)), Lt === null)
          throw Error(
            "Expected a work-in-progress root. This is a bug in React. Please file an issue."
          );
        (ke & 127) !== 0 || fy(i, t, f);
      }
      return o.memoizedState = f, a = { value: f, getSnapshot: t }, o.queue = a, Xs(
        ac.bind(null, i, a, e),
        [e]
      ), i.flags |= 2048, Kc(
        ti | yn,
        { destroy: void 0 },
        lc.bind(
          null,
          i,
          a,
          f,
          t
        ),
        null
      ), f;
    }
    function Ys(e, t, a) {
      var i = Ne, o = Tt(), f = ct;
      if (f) {
        if (a === void 0)
          throw Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        a = a();
      } else if (a = t(), !vm) {
        var d = t();
        dn(a, d) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), vm = !0);
      }
      (d = !dn(
        (Xt || o).memoizedState,
        a
      )) && (o.memoizedState = a, jl = !0), o = o.queue;
      var h = ac.bind(null, i, o, e);
      if (Ql(2048, yn, h, [e]), o.getSnapshot !== t || d || Nl !== null && Nl.memoizedState.tag & ti) {
        if (i.flags |= 2048, Kc(
          ti | yn,
          { destroy: void 0 },
          lc.bind(
            null,
            i,
            o,
            a,
            t
          ),
          null
        ), Lt === null)
          throw Error(
            "Expected a work-in-progress root. This is a bug in React. Please file an issue."
          );
        f || (_o & 127) !== 0 || fy(i, t, a);
      }
      return a;
    }
    function fy(e, t, a) {
      e.flags |= 16384, e = { getSnapshot: t, value: a }, t = Ne.updateQueue, t === null ? (t = qd(), Ne.updateQueue = t, t.stores = [e]) : (a = t.stores, a === null ? t.stores = [e] : a.push(e));
    }
    function lc(e, t, a, i) {
      t.value = a, t.getSnapshot = i, sy(t) && ry(e);
    }
    function ac(e, t, a) {
      return a(function() {
        sy(t) && (Gn(2, "updateSyncExternalStore()", e), ry(e));
      });
    }
    function sy(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var a = t();
        return !dn(e, a);
      } catch {
        return !0;
      }
    }
    function ry(e) {
      var t = Ll(e, 2);
      t !== null && tl(t, e, 2);
    }
    function nc(e) {
      var t = va();
      if (typeof e == "function") {
        var a = e;
        if (e = a(), Ir) {
          me(!0);
          try {
            a();
          } finally {
            me(!1);
          }
        }
      }
      return t.memoizedState = t.baseState = e, t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: qa,
        lastRenderedState: e
      }, t;
    }
    function Zc(e) {
      e = nc(e);
      var t = e.queue, a = Jd.bind(null, Ne, t);
      return t.dispatch = a, [e.memoizedState, a];
    }
    function Io(e) {
      var t = va();
      t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = a, t = Vl.bind(
        null,
        Ne,
        !0,
        a
      ), a.dispatch = t, [e, t];
    }
    function Po(e, t) {
      var a = Tt();
      return qs(a, Xt, e, t);
    }
    function qs(e, t, a, i) {
      return e.baseState = a, Bs(
        e,
        Xt,
        typeof i == "function" ? i : qa
      );
    }
    function dy(e, t) {
      var a = Tt();
      return Xt !== null ? qs(a, Xt, e, t) : (a.baseState = e, [e, a.queue.dispatch]);
    }
    function Jc(e, t, a, i, o) {
      if (Kt(e))
        throw Error("Cannot update form state while rendering.");
      if (e = t.action, e !== null) {
        var f = {
          payload: o,
          action: e,
          next: null,
          isTransition: !0,
          status: "pending",
          value: null,
          reason: null,
          listeners: [],
          then: function(d) {
            f.listeners.push(d);
          }
        };
        G.T !== null ? a(!0) : f.isTransition = !1, i(f), a = t.pending, a === null ? (f.next = t.pending = f, hy(t, f)) : (f.next = a.next, t.pending = a.next = f);
      }
    }
    function hy(e, t) {
      var a = t.action, i = t.payload, o = e.state;
      if (t.isTransition) {
        var f = G.T, d = {};
        d._updatedFibers = /* @__PURE__ */ new Set(), G.T = d;
        try {
          var h = a(o, i), y = G.S;
          y !== null && y(d, h), mi(e, t, h);
        } catch (p) {
          ws(e, t, p);
        } finally {
          f !== null && d.types !== null && (f.types !== null && f.types !== d.types && console.error(
            "We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."
          ), f.types = d.types), G.T = f, f === null && d._updatedFibers && (e = d._updatedFibers.size, d._updatedFibers.clear(), 10 < e && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          ));
        }
      } else
        try {
          d = a(o, i), mi(e, t, d);
        } catch (p) {
          ws(e, t, p);
        }
    }
    function mi(e, t, a) {
      a !== null && typeof a == "object" && typeof a.then == "function" ? (G.asyncTransitions++, a.then(vi, vi), a.then(
        function(i) {
          Gd(e, t, i);
        },
        function(i) {
          return ws(e, t, i);
        }
      ), t.isTransition || console.error(
        "An async function with useActionState was called outside of a transition. This is likely not what you intended (for example, isPending will not update correctly). Either call the returned function inside startTransition, or pass it to an `action` or `formAction` prop."
      )) : Gd(e, t, a);
    }
    function Gd(e, t, a) {
      t.status = "fulfilled", t.value = a, yi(t), e.state = a, t = e.pending, t !== null && (a = t.next, a === t ? e.pending = null : (a = a.next, t.next = a, hy(e, a)));
    }
    function ws(e, t, a) {
      var i = e.pending;
      if (e.pending = null, i !== null) {
        i = i.next;
        do
          t.status = "rejected", t.reason = a, yi(t), t = t.next;
        while (t !== i);
      }
      e.action = null;
    }
    function yi(e) {
      e = e.listeners;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
    function pi(e, t) {
      return t;
    }
    function Du(e, t) {
      if (ct) {
        var a = Lt.formState;
        if (a !== null) {
          e: {
            var i = Ne;
            if (ct) {
              if (Wt) {
                t: {
                  for (var o = Wt, f = Iu; o.nodeType !== 8; ) {
                    if (!f) {
                      o = null;
                      break t;
                    }
                    if (o = on(
                      o.nextSibling
                    ), o === null) {
                      o = null;
                      break t;
                    }
                  }
                  f = o.data, o = f === rS || f === rE ? o : null;
                }
                if (o) {
                  Wt = on(
                    o.nextSibling
                  ), i = o.data === rS;
                  break e;
                }
              }
              si(i);
            }
            i = !1;
          }
          i && (t = a[0]);
        }
      }
      return a = va(), a.memoizedState = a.baseState = t, i = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: pi,
        lastRenderedState: t
      }, a.queue = i, a = Jd.bind(
        null,
        Ne,
        i
      ), i.dispatch = a, i = nc(!1), f = Vl.bind(
        null,
        Ne,
        !1,
        i.queue
      ), i = va(), o = {
        state: t,
        dispatch: null,
        action: e,
        pending: null
      }, i.queue = o, a = Jc.bind(
        null,
        Ne,
        o,
        f,
        a
      ), o.dispatch = a, i.memoizedState = e, [t, a, !1];
    }
    function ef(e) {
      var t = Tt();
      return Xd(t, Xt, e);
    }
    function Xd(e, t, a) {
      if (t = Bs(
        e,
        t,
        pi
      )[0], e = Zn(qa)[0], typeof t == "object" && t !== null && typeof t.then == "function")
        try {
          var i = Wo(t);
        } catch (d) {
          throw d === mm ? cv : d;
        }
      else i = t;
      t = Tt();
      var o = t.queue, f = o.dispatch;
      return a !== t.memoizedState && (Ne.flags |= 2048, Kc(
        ti | yn,
        { destroy: void 0 },
        Gs.bind(null, o, a),
        null
      )), [i, f, e];
    }
    function Gs(e, t) {
      e.action = t;
    }
    function uc(e) {
      var t = Tt(), a = Xt;
      if (a !== null)
        return Xd(t, a, e);
      Tt(), t = t.memoizedState, a = Tt();
      var i = a.queue.dispatch;
      return a.memoizedState = e, [t, i, !1];
    }
    function Kc(e, t, a, i) {
      return e = { tag: e, create: a, deps: i, inst: t, next: null }, t = Ne.updateQueue, t === null && (t = qd(), Ne.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = e.next = e : (i = a.next, a.next = e, e.next = i, t.lastEffect = e), e;
    }
    function Ld(e) {
      var t = va();
      return e = { current: e }, t.memoizedState = e;
    }
    function An(e, t, a, i) {
      var o = va();
      Ne.flags |= e, o.memoizedState = Kc(
        ti | t,
        { destroy: void 0 },
        a,
        i === void 0 ? null : i
      );
    }
    function Ql(e, t, a, i) {
      var o = Tt();
      i = i === void 0 ? null : i;
      var f = o.memoizedState.inst;
      Xt !== null && i !== null && oy(i, Xt.memoizedState.deps) ? o.memoizedState = Kc(t, f, a, i) : (Ne.flags |= e, o.memoizedState = Kc(
        ti | t,
        f,
        a,
        i
      ));
    }
    function Xs(e, t) {
      (Ne.mode & Ui) !== Ue ? An(276826112, yn, e, t) : An(8390656, yn, e, t);
    }
    function my(e) {
      Ne.flags |= 4;
      var t = Ne.updateQueue;
      if (t === null)
        t = qd(), Ne.updateQueue = t, t.events = [e];
      else {
        var a = t.events;
        a === null ? t.events = [e] : a.push(e);
      }
    }
    function Ls(e) {
      var t = va(), a = { impl: e };
      return t.memoizedState = a, function() {
        if ((pt & ea) !== ha)
          throw Error(
            "A function wrapped in useEffectEvent can't be called during rendering."
          );
        return a.impl.apply(void 0, arguments);
      };
    }
    function ua(e) {
      var t = Tt().memoizedState;
      return my({ ref: t, nextImpl: e }), function() {
        if ((pt & ea) !== ha)
          throw Error(
            "A function wrapped in useEffectEvent can't be called during rendering."
          );
        return t.impl.apply(void 0, arguments);
      };
    }
    function wa(e, t) {
      var a = 4194308;
      return (Ne.mode & Ui) !== Ue && (a |= 134217728), An(a, lu, e, t);
    }
    function gi(e, t) {
      if (typeof t == "function") {
        e = e();
        var a = t(e);
        return function() {
          typeof a == "function" ? a() : t(null);
        };
      }
      if (t != null)
        return t.hasOwnProperty("current") || console.error(
          "Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.",
          "an object with keys {" + Object.keys(t).join(", ") + "}"
        ), e = e(), t.current = e, function() {
          t.current = null;
        };
    }
    function Qs(e, t, a) {
      typeof t != "function" && console.error(
        "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
        t !== null ? typeof t : "null"
      ), a = a != null ? a.concat([e]) : null;
      var i = 4194308;
      (Ne.mode & Ui) !== Ue && (i |= 134217728), An(
        i,
        lu,
        gi.bind(null, t, e),
        a
      );
    }
    function Vs(e, t, a) {
      typeof t != "function" && console.error(
        "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
        t !== null ? typeof t : "null"
      ), a = a != null ? a.concat([e]) : null, Ql(
        4,
        lu,
        gi.bind(null, t, e),
        a
      );
    }
    function Ru(e, t) {
      return va().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    }
    function ia(e, t) {
      var a = Tt();
      t = t === void 0 ? null : t;
      var i = a.memoizedState;
      return t !== null && oy(t, i[1]) ? i[0] : (a.memoizedState = [e, t], e);
    }
    function Pt(e, t) {
      var a = va();
      t = t === void 0 ? null : t;
      var i = e();
      if (Ir) {
        me(!0);
        try {
          e();
        } finally {
          me(!1);
        }
      }
      return a.memoizedState = [i, t], i;
    }
    function $c(e, t) {
      var a = Tt();
      t = t === void 0 ? null : t;
      var i = a.memoizedState;
      if (t !== null && oy(t, i[1]))
        return i[0];
      if (i = e(), Ir) {
        me(!0);
        try {
          e();
        } finally {
          me(!1);
        }
      }
      return a.memoizedState = [i, t], i;
    }
    function Jn(e, t) {
      var a = va();
      return ol(a, e, t);
    }
    function Xe(e, t) {
      var a = Tt();
      return Zs(
        a,
        Xt.memoizedState,
        e,
        t
      );
    }
    function Dt(e, t) {
      var a = Tt();
      return Xt === null ? ol(a, e, t) : Zs(
        a,
        Xt.memoizedState,
        e,
        t
      );
    }
    function ol(e, t, a) {
      return a === void 0 || (_o & 1073741824) !== 0 && (ke & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = a, e = Gt(), Ne.lanes |= e, Qf |= e, a);
    }
    function Zs(e, t, a, i) {
      return dn(a, t) ? a : pm.current !== null ? (e = ol(e, a, i), dn(e, t) || (jl = !0), e) : (_o & 42) === 0 || (_o & 1073741824) !== 0 && (ke & 261930) === 0 ? (jl = !0, e.memoizedState = a) : (e = Gt(), Ne.lanes |= e, Qf |= e, t);
    }
    function vi() {
      G.asyncTransitions--;
    }
    function ic(e, t, a, i, o) {
      var f = Ot.p;
      Ot.p = f !== 0 && f < Fl ? f : Fl;
      var d = G.T, h = {};
      h._updatedFibers = /* @__PURE__ */ new Set(), G.T = h, Vl(e, !1, t, a);
      try {
        var y = o(), p = G.S;
        if (p !== null && p(h, y), y !== null && typeof y == "object" && typeof y.then == "function") {
          G.asyncTransitions++, y.then(vi, vi);
          var _ = Xc(
            y,
            i
          );
          Wc(
            e,
            t,
            _,
            Kl(e)
          );
        } else
          Wc(
            e,
            t,
            i,
            Kl(e)
          );
      } catch (R) {
        Wc(
          e,
          t,
          { then: function() {
          }, status: "rejected", reason: R },
          Kl(e)
        );
      } finally {
        Ot.p = f, d !== null && h.types !== null && (d.types !== null && d.types !== h.types && console.error(
          "We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."
        ), d.types = h.types), G.T = d, d === null && h._updatedFibers && (e = h._updatedFibers.size, h._updatedFibers.clear(), 10 < e && console.warn(
          "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
        ));
      }
    }
    function tf(e, t, a, i) {
      if (e.tag !== 5)
        throw Error(
          "Expected the form instance to be a HostComponent. This is a bug in React."
        );
      var o = lf(e).queue;
      F0(e), ic(
        e,
        o,
        t,
        fd,
        a === null ? we : function() {
          return kc(e), a(i);
        }
      );
    }
    function lf(e) {
      var t = e.memoizedState;
      if (t !== null) return t;
      t = {
        memoizedState: fd,
        baseState: fd,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: qa,
          lastRenderedState: fd
        },
        next: null
      };
      var a = {};
      return t.next = {
        memoizedState: a,
        baseState: a,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: qa,
          lastRenderedState: a
        },
        next: null
      }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
    }
    function kc(e) {
      G.T === null && console.error(
        "requestFormReset was called outside a transition or action. To fix, move to an action, or wrap with startTransition."
      );
      var t = lf(e);
      t.next === null && (t = e.alternate.memoizedState), Wc(
        e,
        t.next.queue,
        {},
        Kl(e)
      );
    }
    function yy() {
      var e = nc(!1);
      return e = ic.bind(
        null,
        Ne,
        e.queue,
        !0,
        !1
      ), va().memoizedState = e, [!1, e];
    }
    function el() {
      var e = Zn(qa)[0], t = Tt().memoizedState;
      return [
        typeof e == "boolean" ? e : Wo(e),
        t
      ];
    }
    function Qd() {
      var e = tc(qa)[0], t = Tt().memoizedState;
      return [
        typeof e == "boolean" ? e : Wo(e),
        t
      ];
    }
    function Si() {
      return qt(A0);
    }
    function Vd() {
      var e = va(), t = Lt.identifierPrefix;
      if (ct) {
        var a = Eo, i = bo;
        a = (i & ~(1 << 32 - Wl(i) - 1)).toString(32) + a, t = "_" + t + "R_" + a, a = dv++, 0 < a && (t += "H" + a.toString(32)), t += "_";
      } else
        a = aA++, t = "_" + t + "r_" + a.toString(32) + "_";
      return e.memoizedState = t;
    }
    function Zd() {
      return va().memoizedState = Pv.bind(
        null,
        Ne
      );
    }
    function Pv(e, t) {
      for (var a = e.return; a !== null; ) {
        switch (a.tag) {
          case 24:
          case 3:
            var i = Kl(a), o = Au(i), f = ga(a, o, i);
            f !== null && (Gn(i, "refresh()", e), tl(f, a, i), ko(f, a, i)), e = uy(), t != null && f !== null && console.error(
              "The seed argument is not enabled outside experimental channels."
            ), o.payload = { cache: e };
            return;
        }
        a = a.return;
      }
    }
    function py(e, t, a) {
      var i = arguments;
      typeof i[3] == "function" && console.error(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      ), i = Kl(e);
      var o = {
        lane: i,
        revertLane: 0,
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      Kt(e) ? Js(t, o) : (o = Wm(e, t, o, i), o !== null && (Gn(i, "dispatch()", e), tl(o, e, i), af(o, t, i)));
    }
    function Jd(e, t, a) {
      var i = arguments;
      typeof i[3] == "function" && console.error(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      ), i = Kl(e), Wc(e, t, a, i) && Gn(i, "setState()", e);
    }
    function Wc(e, t, a, i) {
      var o = {
        lane: i,
        revertLane: 0,
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (Kt(e)) Js(t, o);
      else {
        var f = e.alternate;
        if (e.lanes === 0 && (f === null || f.lanes === 0) && (f = t.lastRenderedReducer, f !== null)) {
          var d = G.H;
          G.H = Hi;
          try {
            var h = t.lastRenderedState, y = f(h, a);
            if (o.hasEagerState = !0, o.eagerState = y, dn(y, h))
              return Vi(e, t, o, 0), Lt === null && Vo(), !1;
          } catch {
          } finally {
            G.H = d;
          }
        }
        if (a = Wm(e, t, o, i), a !== null)
          return tl(a, e, i), af(a, t, i), !0;
      }
      return !1;
    }
    function Vl(e, t, a, i) {
      if (G.T === null && Kr === 0 && console.error(
        "An optimistic state update occurred outside a transition or action. To fix, move the update to an action, or wrap with startTransition."
      ), i = {
        lane: 2,
        revertLane: mt(),
        gesture: null,
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null
      }, Kt(e)) {
        if (t)
          throw Error("Cannot update optimistic state while rendering.");
        console.error("Cannot call startTransition while rendering.");
      } else
        t = Wm(
          e,
          a,
          i,
          2
        ), t !== null && (Gn(2, "setOptimistic()", e), tl(t, e, 2));
    }
    function Kt(e) {
      var t = e.alternate;
      return e === Ne || t !== null && t === Ne;
    }
    function Js(e, t) {
      Sm = rv = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function af(e, t, a) {
      if ((a & 4194048) !== 0) {
        var i = t.lanes;
        i &= e.pendingLanes, a |= i, t.lanes = a, us(e, a);
      }
    }
    function nf(e) {
      if (e !== null && typeof e != "function") {
        var t = String(e);
        Yb.has(t) || (Yb.add(t), console.error(
          "Expected the last optional `callback` argument to be a function. Instead received: %s.",
          e
        ));
      }
    }
    function Ks(e, t, a, i) {
      var o = e.memoizedState, f = a(i, o);
      if (e.mode & Ka) {
        me(!0);
        try {
          f = a(i, o);
        } finally {
          me(!1);
        }
      }
      f === void 0 && (t = tt(t) || "Component", Hb.has(t) || (Hb.add(t), console.error(
        "%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.",
        t
      ))), o = f == null ? o : Ze({}, o, f), e.memoizedState = o, e.lanes === 0 && (e.updateQueue.baseState = o);
    }
    function Mu(e, t, a, i, o, f, d) {
      var h = e.stateNode;
      if (typeof h.shouldComponentUpdate == "function") {
        if (a = h.shouldComponentUpdate(
          i,
          f,
          d
        ), e.mode & Ka) {
          me(!0);
          try {
            a = h.shouldComponentUpdate(
              i,
              f,
              d
            );
          } finally {
            me(!1);
          }
        }
        return a === void 0 && console.error(
          "%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.",
          tt(t) || "Component"
        ), a;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Ss(a, i) || !Ss(o, f) : !0;
    }
    function $s(e, t, a, i) {
      var o = t.state;
      typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== o && (e = re(e) || "Component", Rb.has(e) || (Rb.add(e), console.error(
        "%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
        e
      )), Q1.enqueueReplaceState(
        t,
        t.state,
        null
      ));
    }
    function bi(e, t) {
      var a = t;
      if ("ref" in t) {
        a = {};
        for (var i in t)
          i !== "ref" && (a[i] = t[i]);
      }
      if (e = e.defaultProps) {
        a === t && (a = Ze({}, a));
        for (var o in e)
          a[o] === void 0 && (a[o] = e[o]);
      }
      return a;
    }
    function Kd(e) {
      b1(e), console.warn(
        `%s

%s
`,
        bm ? "An error occurred in the <" + bm + "> component." : "An error occurred in one of your React components.",
        `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://react.dev/link/error-boundaries to learn more about error boundaries.`
      );
    }
    function gy(e) {
      var t = bm ? "The above error occurred in the <" + bm + "> component." : "The above error occurred in one of your React components.", a = "React will try to recreate this component tree from scratch using the error boundary you provided, " + ((V1 || "Anonymous") + ".");
      if (typeof e == "object" && e !== null && typeof e.environmentName == "string") {
        var i = e.environmentName;
        e = [
          `%o

%s

%s
`,
          e,
          t,
          a
        ].slice(0), typeof e[0] == "string" ? e.splice(
          0,
          1,
          SE + " " + e[0],
          bE,
          Yv + i + Yv,
          EE
        ) : e.splice(
          0,
          0,
          SE,
          bE,
          Yv + i + Yv,
          EE
        ), e.unshift(console), i = OA.apply(console.error, e), i();
      } else
        console.error(
          `%o

%s

%s
`,
          e,
          t,
          a
        );
    }
    function vy(e) {
      b1(e);
    }
    function ks(e, t) {
      try {
        bm = t.source ? re(t.source) : null, V1 = null;
        var a = t.value;
        if (G.actQueue !== null)
          G.thrownErrors.push(a);
        else {
          var i = e.onUncaughtError;
          i(a, { componentStack: t.stack });
        }
      } catch (o) {
        setTimeout(function() {
          throw o;
        });
      }
    }
    function Sy(e, t, a) {
      try {
        bm = a.source ? re(a.source) : null, V1 = re(t);
        var i = e.onCaughtError;
        i(a.value, {
          componentStack: a.stack,
          errorBoundary: t.tag === 1 ? t.stateNode : null
        });
      } catch (o) {
        setTimeout(function() {
          throw o;
        });
      }
    }
    function $d(e, t, a) {
      return a = Au(a), a.tag = Y1, a.payload = { element: null }, a.callback = function() {
        se(t.source, ks, e, t);
      }, a;
    }
    function kd(e) {
      return e = Au(e), e.tag = Y1, e;
    }
    function Ws(e, t, a, i) {
      var o = a.type.getDerivedStateFromError;
      if (typeof o == "function") {
        var f = i.value;
        e.payload = function() {
          return o(f);
        }, e.callback = function() {
          K0(a), se(
            i.source,
            Sy,
            t,
            a,
            i
          );
        };
      }
      var d = a.stateNode;
      d !== null && typeof d.componentDidCatch == "function" && (e.callback = function() {
        K0(a), se(
          i.source,
          Sy,
          t,
          a,
          i
        ), typeof o != "function" && (Zf === null ? Zf = /* @__PURE__ */ new Set([this]) : Zf.add(this)), PT(this, i), typeof o == "function" || (a.lanes & 2) === 0 && console.error(
          "%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.",
          re(a) || "Unknown"
        );
      });
    }
    function P0(e, t, a, i, o) {
      if (a.flags |= 32768, Nn && wu(e, o), i !== null && typeof i == "object" && typeof i.then == "function") {
        if (t = a.alternate, t !== null && Wi(
          t,
          a,
          o,
          !0
        ), ct && (vc = !0), a = tu.current, a !== null) {
          switch (a.tag) {
            case 31:
            case 13:
              return ei === null ? no() : a.alternate === null && hl === Co && (hl = yv), a.flags &= -257, a.flags |= 65536, a.lanes = o, i === ov ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([i]) : t.add(i), oa(e, i, o)), !1;
            case 22:
              return a.flags |= 65536, i === ov ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
                transitions: null,
                markerInstances: null,
                retryQueue: /* @__PURE__ */ new Set([i])
              }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = /* @__PURE__ */ new Set([i]) : a.add(i)), oa(e, i, o)), !1;
          }
          throw Error(
            "Unexpected Suspense handler tag (" + a.tag + "). This is a bug in React."
          );
        }
        return oa(e, i, o), no(), !1;
      }
      if (ct)
        return vc = !0, t = tu.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = o, i !== _1 && gu(
          ma(
            Error(
              "There was an error while hydrating but React was able to recover by instead client rendering from the nearest Suspense boundary.",
              { cause: i }
            ),
            a
          )
        )) : (i !== _1 && gu(
          ma(
            Error(
              "There was an error while hydrating but React was able to recover by instead client rendering the entire root.",
              { cause: i }
            ),
            a
          )
        ), e = e.current.alternate, e.flags |= 65536, o &= -o, e.lanes |= o, i = ma(i, a), o = $d(
          e.stateNode,
          i,
          o
        ), Us(e, o), hl !== Xf && (hl = Pr)), !1;
      var f = ma(
        Error(
          "There was an error during concurrent rendering but React was able to recover by instead synchronously rendering the entire root.",
          { cause: i }
        ),
        a
      );
      if (m0 === null ? m0 = [f] : m0.push(f), hl !== Xf && (hl = Pr), t === null) return !0;
      i = ma(i, a), a = t;
      do {
        switch (a.tag) {
          case 3:
            return a.flags |= 65536, e = o & -o, a.lanes |= e, e = $d(
              a.stateNode,
              i,
              e
            ), Us(a, e), !1;
          case 1:
            if (t = a.type, f = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (Zf === null || !Zf.has(f))))
              return a.flags |= 65536, o &= -o, a.lanes |= o, o = kd(o), Ws(
                o,
                e,
                a,
                i
              ), Us(a, o), !1;
        }
        a = a.return;
      } while (a !== null);
      return !1;
    }
    function Zl(e, t, a, i) {
      t.child = e === null ? gb(t, null, a, i) : Fr(
        t,
        e.child,
        a,
        i
      );
    }
    function by(e, t, a, i, o) {
      a = a.render;
      var f = t.ref;
      if ("ref" in i) {
        var d = {};
        for (var h in i)
          h !== "ref" && (d[h] = i[h]);
      } else d = i;
      return Pa(t), i = cl(
        e,
        t,
        a,
        d,
        f,
        o
      ), h = js(), e !== null && !jl ? (Pi(e, t, o), Cu(e, t, o)) : (ct && h && Md(t), t.flags |= 1, Zl(e, t, i, o), t.child);
    }
    function Ey(e, t, a, i, o) {
      if (e === null) {
        var f = a.type;
        return typeof f == "function" && !_d(f) && f.defaultProps === void 0 && a.compare === null ? (a = Zi(f), t.tag = 15, t.type = a, cf(t, f), Ty(
          e,
          t,
          a,
          i,
          o
        )) : (e = Bc(
          a.type,
          null,
          i,
          t,
          t.mode,
          o
        ), e.ref = t.ref, e.return = t, t.child = e);
      }
      if (f = e.child, !nh(e, o)) {
        var d = f.memoizedProps;
        if (a = a.compare, a = a !== null ? a : Ss, a(d, i) && e.ref === t.ref)
          return Cu(
            e,
            t,
            o
          );
      }
      return t.flags |= 1, e = mu(f, i), e.ref = t.ref, e.return = t, t.child = e;
    }
    function Ty(e, t, a, i, o) {
      if (e !== null) {
        var f = e.memoizedProps;
        if (Ss(f, i) && e.ref === t.ref && t.type === e.type)
          if (jl = !1, t.pendingProps = i = f, nh(e, o))
            (e.flags & 131072) !== 0 && (jl = !0);
          else
            return t.lanes = e.lanes, Cu(e, t, o);
      }
      return Id(
        e,
        t,
        a,
        i,
        o
      );
    }
    function Wd(e, t, a, i) {
      var o = i.children, f = e !== null ? e.memoizedState : null;
      if (e === null && t.stateNode === null && (t.stateNode = {
        _visibility: Qp,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }), i.mode === "hidden") {
        if ((t.flags & 128) !== 0) {
          if (f = f !== null ? f.baseLanes | a : a, e !== null) {
            for (i = t.child = e.child, o = 0; i !== null; )
              o = o | i.lanes | i.childLanes, i = i.sibling;
            i = o & ~f;
          } else i = 0, t.child = null;
          return Ay(
            e,
            t,
            f,
            a,
            i
          );
        }
        if ((a & 536870912) !== 0)
          t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Rs(
            t,
            f !== null ? f.cachePool : null
          ), f !== null ? Ii(t, f) : Vn(t), jd(t);
        else
          return i = t.lanes = 536870912, Ay(
            e,
            t,
            f !== null ? f.baseLanes | a : a,
            a,
            i
          );
      } else
        f !== null ? (Rs(t, f.cachePool), Ii(t, f), cn(t), t.memoizedState = null) : (e !== null && Rs(t, null), Vn(t), cn(t));
      return Zl(e, t, o, a), t.child;
    }
    function uf(e, t) {
      return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
        _visibility: Qp,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }), t.sibling;
    }
    function Ay(e, t, a, i, o) {
      var f = Ds();
      return f = f === null ? null : {
        parent: xl._currentValue,
        pool: f
      }, t.memoizedState = {
        baseLanes: a,
        cachePool: f
      }, e !== null && Rs(t, null), Vn(t), jd(t), e !== null && Wi(e, t, i, !0), t.childLanes = o, null;
    }
    function Fs(e, t) {
      var a = t.hidden;
      return a !== void 0 && console.error(
        `<Activity> doesn't accept a hidden prop. Use mode="hidden" instead.
- <Activity %s>
+ <Activity %s>`,
        a === !0 ? "hidden" : a === !1 ? "hidden={false}" : "hidden={...}",
        a ? 'mode="hidden"' : 'mode="visible"'
      ), t = er(
        { mode: t.mode, children: t.children },
        e.mode
      ), t.ref = e.ref, e.child = t, t.return = e, t;
    }
    function Oy(e, t, a) {
      return Fr(t, e.child, null, a), e = Fs(
        t,
        t.pendingProps
      ), e.flags |= 2, na(t), t.memoizedState = null, e;
    }
    function eg(e, t, a) {
      var i = t.pendingProps, o = (t.flags & 128) !== 0;
      if (t.flags &= -129, e === null) {
        if (ct) {
          if (i.mode === "hidden")
            return e = Fs(t, i), t.lanes = 536870912, uf(null, e);
          if (Hs(t), (e = Wt) ? (a = Oh(
            e,
            Iu
          ), a = a !== null && a.data === ud ? a : null, a !== null && (i = {
            dehydrated: a,
            treeContext: k0(),
            retryLane: 536870912,
            hydrationErrors: null
          }, t.memoizedState = i, i = Im(a), i.return = t, t.child = i, za = t, Wt = null)) : a = null, a === null)
            throw Ki(t, e), si(t);
          return t.lanes = 536870912, null;
        }
        return Fs(t, i);
      }
      var f = e.memoizedState;
      if (f !== null) {
        var d = f.dehydrated;
        if (Hs(t), o)
          if (t.flags & 256)
            t.flags &= -257, t = Oy(
              e,
              t,
              a
            );
          else if (t.memoizedState !== null)
            t.child = e.child, t.flags |= 128, t = null;
          else
            throw Error(
              "Client rendering an Activity suspended it again. This is a bug in React."
            );
        else if (Ua(), (a & 536870912) !== 0 && hf(t), jl || Wi(
          e,
          t,
          a,
          !1
        ), o = (a & e.childLanes) !== 0, jl || o) {
          if (i = Lt, i !== null && (d = wn(
            i,
            a
          ), d !== 0 && d !== f.retryLane))
            throw f.retryLane = d, Ll(e, d), tl(i, e, d), Z1;
          no(), t = Oy(
            e,
            t,
            a
          );
        } else
          e = f.treeContext, Wt = on(
            d.nextSibling
          ), za = t, ct = !0, jf = null, vc = !1, eu = null, Iu = !1, e !== null && W0(t, e), t = Fs(t, i), t.flags |= 4096;
        return t;
      }
      return f = e.child, i = { mode: i.mode, children: i.children }, (a & 536870912) !== 0 && (a & e.lanes) !== 0 && hf(t), e = mu(f, i), e.ref = t.ref, t.child = e, e.return = t, e;
    }
    function Fd(e, t) {
      var a = t.ref;
      if (a === null)
        e !== null && e.ref !== null && (t.flags |= 4194816);
      else {
        if (typeof a != "function" && typeof a != "object")
          throw Error(
            "Expected ref to be a function, an object returned by React.createRef(), or undefined/null."
          );
        (e === null || e.ref !== a) && (t.flags |= 4194816);
      }
    }
    function Id(e, t, a, i, o) {
      if (a.prototype && typeof a.prototype.render == "function") {
        var f = tt(a) || "Unknown";
        qb[f] || (console.error(
          "The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",
          f,
          f
        ), qb[f] = !0);
      }
      return t.mode & Ka && xi.recordLegacyContextWarning(
        t,
        null
      ), e === null && (cf(t, t.type), a.contextTypes && (f = tt(a) || "Unknown", Gb[f] || (Gb[f] = !0, console.error(
        "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with React.useContext() instead. (https://react.dev/link/legacy-context)",
        f
      )))), Pa(t), a = cl(
        e,
        t,
        a,
        i,
        void 0,
        o
      ), i = js(), e !== null && !jl ? (Pi(e, t, o), Cu(e, t, o)) : (ct && i && Md(t), t.flags |= 1, Zl(e, t, a, o), t.child);
    }
    function Fc(e, t, a, i, o, f) {
      return Pa(t), Ro = -1, c0 = e !== null && e.type !== t.type, t.updateQueue = null, a = Vc(
        t,
        i,
        a,
        o
      ), Yd(e, t), i = js(), e !== null && !jl ? (Pi(e, t, f), Cu(e, t, f)) : (ct && i && Md(t), t.flags |= 1, Zl(e, t, a, f), t.child);
    }
    function zy(e, t, a, i, o) {
      switch (gt(t)) {
        case !1:
          var f = t.stateNode, d = new t.type(
            t.memoizedProps,
            f.context
          ).state;
          f.updater.enqueueSetState(f, d, null);
          break;
        case !0:
          t.flags |= 128, t.flags |= 65536, f = Error("Simulated error coming from DevTools");
          var h = o & -o;
          if (t.lanes |= h, d = Lt, d === null)
            throw Error(
              "Expected a work-in-progress root. This is a bug in React. Please file an issue."
            );
          h = kd(h), Ws(
            h,
            d,
            t,
            ma(f, t)
          ), Us(t, h);
      }
      if (Pa(t), t.stateNode === null) {
        if (d = Nf, f = a.contextType, "contextType" in a && f !== null && (f === void 0 || f.$$typeof !== Fn) && !Bb.has(a) && (Bb.add(a), h = f === void 0 ? " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? " However, it is set to a " + typeof f + "." : f.$$typeof === wh ? " Did you accidentally pass the Context.Consumer instead?" : " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", console.error(
          "%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s",
          tt(a) || "Component",
          h
        )), typeof f == "object" && f !== null && (d = qt(f)), f = new a(i, d), t.mode & Ka) {
          me(!0);
          try {
            f = new a(i, d);
          } finally {
            me(!1);
          }
        }
        if (d = t.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, f.updater = Q1, t.stateNode = f, f._reactInternals = t, f._reactInternalInstance = Db, typeof a.getDerivedStateFromProps == "function" && d === null && (d = tt(a) || "Component", Mb.has(d) || (Mb.add(d), console.error(
          "`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.",
          d,
          f.state === null ? "null" : "undefined",
          d
        ))), typeof a.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function") {
          var y = h = d = null;
          if (typeof f.componentWillMount == "function" && f.componentWillMount.__suppressDeprecationWarning !== !0 ? d = "componentWillMount" : typeof f.UNSAFE_componentWillMount == "function" && (d = "UNSAFE_componentWillMount"), typeof f.componentWillReceiveProps == "function" && f.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? h = "componentWillReceiveProps" : typeof f.UNSAFE_componentWillReceiveProps == "function" && (h = "UNSAFE_componentWillReceiveProps"), typeof f.componentWillUpdate == "function" && f.componentWillUpdate.__suppressDeprecationWarning !== !0 ? y = "componentWillUpdate" : typeof f.UNSAFE_componentWillUpdate == "function" && (y = "UNSAFE_componentWillUpdate"), d !== null || h !== null || y !== null) {
            f = tt(a) || "Component";
            var p = typeof a.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            Ub.has(f) || (Ub.add(f), console.error(
              `Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://react.dev/link/unsafe-component-lifecycles`,
              f,
              p,
              d !== null ? `
  ` + d : "",
              h !== null ? `
  ` + h : "",
              y !== null ? `
  ` + y : ""
            ));
          }
        }
        f = t.stateNode, d = tt(a) || "Component", f.render || (a.prototype && typeof a.prototype.render == "function" ? console.error(
          "No `render` method found on the %s instance: did you accidentally return an object from the constructor?",
          d
        ) : console.error(
          "No `render` method found on the %s instance: you may have forgotten to define `render`.",
          d
        )), !f.getInitialState || f.getInitialState.isReactClassApproved || f.state || console.error(
          "getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?",
          d
        ), f.getDefaultProps && !f.getDefaultProps.isReactClassApproved && console.error(
          "getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.",
          d
        ), f.contextType && console.error(
          "contextType was defined as an instance property on %s. Use a static property to define contextType instead.",
          d
        ), a.childContextTypes && !jb.has(a) && (jb.add(a), console.error(
          "%s uses the legacy childContextTypes API which was removed in React 19. Use React.createContext() instead. (https://react.dev/link/legacy-context)",
          d
        )), a.contextTypes && !Nb.has(a) && (Nb.add(a), console.error(
          "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with static contextType instead. (https://react.dev/link/legacy-context)",
          d
        )), typeof f.componentShouldUpdate == "function" && console.error(
          "%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",
          d
        ), a.prototype && a.prototype.isPureReactComponent && typeof f.shouldComponentUpdate < "u" && console.error(
          "%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.",
          tt(a) || "A pure component"
        ), typeof f.componentDidUnmount == "function" && console.error(
          "%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?",
          d
        ), typeof f.componentDidReceiveProps == "function" && console.error(
          "%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().",
          d
        ), typeof f.componentWillRecieveProps == "function" && console.error(
          "%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",
          d
        ), typeof f.UNSAFE_componentWillRecieveProps == "function" && console.error(
          "%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?",
          d
        ), h = f.props !== i, f.props !== void 0 && h && console.error(
          "When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",
          d
        ), f.defaultProps && console.error(
          "Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.",
          d,
          d
        ), typeof f.getSnapshotBeforeUpdate != "function" || typeof f.componentDidUpdate == "function" || Cb.has(a) || (Cb.add(a), console.error(
          "%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.",
          tt(a)
        )), typeof f.getDerivedStateFromProps == "function" && console.error(
          "%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
          d
        ), typeof f.getDerivedStateFromError == "function" && console.error(
          "%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
          d
        ), typeof a.getSnapshotBeforeUpdate == "function" && console.error(
          "%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.",
          d
        ), (h = f.state) && (typeof h != "object" || zl(h)) && console.error("%s.state: must be set to an object or null", d), typeof f.getChildContext == "function" && typeof a.childContextTypes != "object" && console.error(
          "%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().",
          d
        ), f = t.stateNode, f.props = i, f.state = t.memoizedState, f.refs = {}, Tu(t), d = a.contextType, f.context = typeof d == "object" && d !== null ? qt(d) : Nf, f.state === i && (d = tt(a) || "Component", xb.has(d) || (xb.add(d), console.error(
          "%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",
          d
        ))), t.mode & Ka && xi.recordLegacyContextWarning(
          t,
          f
        ), xi.recordUnsafeLifecycleWarnings(
          t,
          f
        ), f.state = t.memoizedState, d = a.getDerivedStateFromProps, typeof d == "function" && (Ks(
          t,
          a,
          d,
          i
        ), f.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (d = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), d !== f.state && (console.error(
          "%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
          re(t) || "Component"
        ), Q1.enqueueReplaceState(
          f,
          f.state,
          null
        )), Qn(t, i, f, o), Ou(), f.state = t.memoizedState), typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Ui) !== Ue && (t.flags |= 134217728), f = !0;
      } else if (e === null) {
        f = t.stateNode;
        var _ = t.memoizedProps;
        h = bi(a, _), f.props = h;
        var R = f.context;
        y = a.contextType, d = Nf, typeof y == "object" && y !== null && (d = qt(y)), p = a.getDerivedStateFromProps, y = typeof p == "function" || typeof f.getSnapshotBeforeUpdate == "function", _ = t.pendingProps !== _, y || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (_ || R !== d) && $s(
          t,
          f,
          i,
          d
        ), Gf = !1;
        var b = t.memoizedState;
        f.state = b, Qn(t, i, f, o), Ou(), R = t.memoizedState, _ || b !== R || Gf ? (typeof p == "function" && (Ks(
          t,
          a,
          p,
          i
        ), R = t.memoizedState), (h = Gf || Mu(
          t,
          a,
          h,
          i,
          b,
          R,
          d
        )) ? (y || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount()), typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Ui) !== Ue && (t.flags |= 134217728)) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Ui) !== Ue && (t.flags |= 134217728), t.memoizedProps = i, t.memoizedState = R), f.props = i, f.state = R, f.context = d, f = h) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Ui) !== Ue && (t.flags |= 134217728), f = !1);
      } else {
        f = t.stateNode, Ba(e, t), d = t.memoizedProps, y = bi(a, d), f.props = y, p = t.pendingProps, b = f.context, R = a.contextType, h = Nf, typeof R == "object" && R !== null && (h = qt(R)), _ = a.getDerivedStateFromProps, (R = typeof _ == "function" || typeof f.getSnapshotBeforeUpdate == "function") || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (d !== p || b !== h) && $s(
          t,
          f,
          i,
          h
        ), Gf = !1, b = t.memoizedState, f.state = b, Qn(t, i, f, o), Ou();
        var Y = t.memoizedState;
        d !== p || b !== Y || Gf || e !== null && e.dependencies !== null && As(e.dependencies) ? (typeof _ == "function" && (Ks(
          t,
          a,
          _,
          i
        ), Y = t.memoizedState), (y = Gf || Mu(
          t,
          a,
          y,
          i,
          b,
          Y,
          h
        ) || e !== null && e.dependencies !== null && As(e.dependencies)) ? (R || typeof f.UNSAFE_componentWillUpdate != "function" && typeof f.componentWillUpdate != "function" || (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(i, Y, h), typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(
          i,
          Y,
          h
        )), typeof f.componentDidUpdate == "function" && (t.flags |= 4), typeof f.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof f.componentDidUpdate != "function" || d === e.memoizedProps && b === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && b === e.memoizedState || (t.flags |= 1024), t.memoizedProps = i, t.memoizedState = Y), f.props = i, f.state = Y, f.context = h, f = y) : (typeof f.componentDidUpdate != "function" || d === e.memoizedProps && b === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && b === e.memoizedState || (t.flags |= 1024), f = !1);
      }
      if (h = f, Fd(e, t), d = (t.flags & 128) !== 0, h || d) {
        if (h = t.stateNode, Tc(t), d && typeof a.getDerivedStateFromError != "function")
          a = null, hn = -1;
        else if (a = ab(h), t.mode & Ka) {
          me(!0);
          try {
            ab(h);
          } finally {
            me(!1);
          }
        }
        t.flags |= 1, e !== null && d ? (t.child = Fr(
          t,
          e.child,
          null,
          o
        ), t.child = Fr(
          t,
          null,
          a,
          o
        )) : Zl(e, t, a, o), t.memoizedState = h.state, e = t.child;
      } else
        e = Cu(
          e,
          t,
          o
        );
      return o = t.stateNode, f && o.props !== i && (Em || console.error(
        "It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.",
        re(t) || "a component"
      ), Em = !0), e;
    }
    function Is(e, t, a, i) {
      return ri(), t.flags |= 256, Zl(e, t, a, i), t.child;
    }
    function cf(e, t) {
      t && t.childContextTypes && console.error(
        `childContextTypes cannot be defined on a function component.
  %s.childContextTypes = ...`,
        t.displayName || t.name || "Component"
      ), typeof t.getDerivedStateFromProps == "function" && (e = tt(t) || "Unknown", Xb[e] || (console.error(
        "%s: Function components do not support getDerivedStateFromProps.",
        e
      ), Xb[e] = !0)), typeof t.contextType == "object" && t.contextType !== null && (t = tt(t) || "Unknown", wb[t] || (console.error(
        "%s: Function components do not support contextType.",
        t
      ), wb[t] = !0));
    }
    function Pd(e) {
      return { baseLanes: e, cachePool: Ud() };
    }
    function Ps(e, t, a) {
      return e = e !== null ? e.childLanes & ~a : 0, t && (e |= qn), e;
    }
    function tg(e, t, a) {
      var i, o = t.pendingProps;
      Ye(t) && (t.flags |= 128);
      var f = !1, d = (t.flags & 128) !== 0;
      if ((i = d) || (i = e !== null && e.memoizedState === null ? !1 : (Dl.current & u0) !== 0), i && (f = !0, t.flags &= -129), i = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
        if (ct) {
          if (f ? aa(t) : cn(t), (e = Wt) ? (a = Oh(
            e,
            Iu
          ), a = a !== null && a.data !== ud ? a : null, a !== null && (i = {
            dehydrated: a,
            treeContext: k0(),
            retryLane: 536870912,
            hydrationErrors: null
          }, t.memoizedState = i, i = Im(a), i.return = t, t.child = i, za = t, Wt = null)) : a = null, a === null)
            throw Ki(t, e), si(t);
          return zh(a) ? t.lanes = 32 : t.lanes = 536870912, null;
        }
        var h = o.children;
        if (o = o.fallback, f) {
          cn(t);
          var y = t.mode;
          return h = er(
            { mode: "hidden", children: h },
            y
          ), o = yu(
            o,
            y,
            a,
            null
          ), h.return = t, o.return = t, h.sibling = o, t.child = h, o = t.child, o.memoizedState = Pd(a), o.childLanes = Ps(
            e,
            i,
            a
          ), t.memoizedState = J1, uf(
            null,
            o
          );
        }
        return aa(t), eh(
          t,
          h
        );
      }
      var p = e.memoizedState;
      if (p !== null) {
        var _ = p.dehydrated;
        if (_ !== null) {
          if (d)
            t.flags & 256 ? (aa(t), t.flags &= -257, t = th(
              e,
              t,
              a
            )) : t.memoizedState !== null ? (cn(t), t.child = e.child, t.flags |= 128, t = null) : (cn(t), h = o.fallback, y = t.mode, o = er(
              {
                mode: "visible",
                children: o.children
              },
              y
            ), h = yu(
              h,
              y,
              a,
              null
            ), h.flags |= 2, o.return = t, h.return = t, o.sibling = h, t.child = o, Fr(
              t,
              e.child,
              null,
              a
            ), o = t.child, o.memoizedState = Pd(a), o.childLanes = Ps(
              e,
              i,
              a
            ), t.memoizedState = J1, t = uf(
              null,
              o
            ));
          else if (aa(t), Ua(), (a & 536870912) !== 0 && hf(t), zh(
            _
          )) {
            if (i = _.nextSibling && _.nextSibling.dataset, i) {
              h = i.dgst;
              var R = i.msg;
              y = i.stck;
              var b = i.cstck;
            }
            f = R, i = h, o = y, _ = b, h = f, y = _, h = Error(h || "The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering."), h.stack = o || "", h.digest = i, i = y === void 0 ? null : y, o = {
              value: h,
              source: null,
              stack: i
            }, typeof i == "string" && z1.set(
              h,
              o
            ), gu(o), t = th(
              e,
              t,
              a
            );
          } else if (jl || Wi(
            e,
            t,
            a,
            !1
          ), i = (a & e.childLanes) !== 0, jl || i) {
            if (i = Lt, i !== null && (o = wn(
              i,
              a
            ), o !== 0 && o !== p.retryLane))
              throw p.retryLane = o, Ll(
                e,
                o
              ), tl(
                i,
                e,
                o
              ), Z1;
            fp(
              _
            ) || no(), t = th(
              e,
              t,
              a
            );
          } else
            fp(
              _
            ) ? (t.flags |= 192, t.child = e.child, t = null) : (e = p.treeContext, Wt = on(
              _.nextSibling
            ), za = t, ct = !0, jf = null, vc = !1, eu = null, Iu = !1, e !== null && W0(t, e), t = eh(
              t,
              o.children
            ), t.flags |= 4096);
          return t;
        }
      }
      return f ? (cn(t), h = o.fallback, y = t.mode, b = e.child, _ = b.sibling, o = mu(
        b,
        {
          mode: "hidden",
          children: o.children
        }
      ), o.subtreeFlags = b.subtreeFlags & 65011712, _ !== null ? h = mu(
        _,
        h
      ) : (h = yu(
        h,
        y,
        a,
        null
      ), h.flags |= 2), h.return = t, o.return = t, o.sibling = h, t.child = o, uf(null, o), o = t.child, h = e.child.memoizedState, h === null ? h = Pd(a) : (y = h.cachePool, y !== null ? (b = xl._currentValue, y = y.parent !== b ? { parent: b, pool: b } : y) : y = Ud(), h = {
        baseLanes: h.baseLanes | a,
        cachePool: y
      }), o.memoizedState = h, o.childLanes = Ps(
        e,
        i,
        a
      ), t.memoizedState = J1, uf(
        e.child,
        o
      )) : (p !== null && (a & 62914560) === a && (a & e.lanes) !== 0 && hf(t), aa(t), a = e.child, e = a.sibling, a = mu(a, {
        mode: "visible",
        children: o.children
      }), a.return = t, a.sibling = null, e !== null && (i = t.deletions, i === null ? (t.deletions = [e], t.flags |= 16) : i.push(e)), t.child = a, t.memoizedState = null, a);
    }
    function eh(e, t) {
      return t = er(
        { mode: "visible", children: t },
        e.mode
      ), t.return = e, e.child = t;
    }
    function er(e, t) {
      return e = N(22, e, null, t), e.lanes = 0, e;
    }
    function th(e, t, a) {
      return Fr(t, e.child, null, a), e = eh(
        t,
        t.pendingProps.children
      ), e.flags |= 2, t.memoizedState = null, e;
    }
    function _y(e, t, a) {
      e.lanes |= t;
      var i = e.alternate;
      i !== null && (i.lanes |= t), di(
        e.return,
        t,
        a
      );
    }
    function lh(e, t, a, i, o, f) {
      var d = e.memoizedState;
      d === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: o,
        treeForkCount: f
      } : (d.isBackwards = t, d.rendering = null, d.renderingStartTime = 0, d.last = i, d.tail = a, d.tailMode = o, d.treeForkCount = f);
    }
    function ah(e, t, a) {
      var i = t.pendingProps, o = i.revealOrder, f = i.tail, d = i.children, h = Dl.current;
      if ((i = (h & u0) !== 0) ? (h = h & gm | u0, t.flags |= 128) : h &= gm, xe(Dl, h, t), h = o ?? "null", o !== "forwards" && o !== "unstable_legacy-backwards" && o !== "together" && o !== "independent" && !Lb[h])
        if (Lb[h] = !0, o == null)
          console.error(
            'The default for the <SuspenseList revealOrder="..."> prop is changing. To be future compatible you must explictly specify either "independent" (the current default), "together", "forwards" or "legacy_unstable-backwards".'
          );
        else if (o === "backwards")
          console.error(
            'The rendering order of <SuspenseList revealOrder="backwards"> is changing. To be future compatible you must specify revealOrder="legacy_unstable-backwards" instead.'
          );
        else if (typeof o == "string")
          switch (o.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards":
            case "independent":
              console.error(
                '"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.',
                o,
                o.toLowerCase()
              );
              break;
            case "forward":
            case "backward":
              console.error(
                '"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.',
                o,
                o.toLowerCase()
              );
              break;
            default:
              console.error(
                '"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "independent", "together", "forwards" or "backwards"?',
                o
              );
          }
        else
          console.error(
            '%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "independent", "together", "forwards" or "backwards"?',
            o
          );
      h = f ?? "null", mv[h] || (f == null ? (o === "forwards" || o === "backwards" || o === "unstable_legacy-backwards") && (mv[h] = !0, console.error(
        'The default for the <SuspenseList tail="..."> prop is changing. To be future compatible you must explictly specify either "visible" (the current default), "collapsed" or "hidden".'
      )) : f !== "visible" && f !== "collapsed" && f !== "hidden" ? (mv[h] = !0, console.error(
        '"%s" is not a supported value for tail on <SuspenseList />. Did you mean "visible", "collapsed" or "hidden"?',
        f
      )) : o !== "forwards" && o !== "backwards" && o !== "unstable_legacy-backwards" && (mv[h] = !0, console.error(
        '<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?',
        f
      )));
      e: if ((o === "forwards" || o === "backwards" || o === "unstable_legacy-backwards") && d !== void 0 && d !== null && d !== !1)
        if (zl(d)) {
          for (h = 0; h < d.length; h++)
            if (!ut(
              d[h],
              h
            ))
              break e;
        } else if (h = _t(d), typeof h == "function") {
          if (h = h.call(d))
            for (var y = h.next(), p = 0; !y.done; y = h.next()) {
              if (!ut(y.value, p)) break e;
              p++;
            }
        } else
          console.error(
            'A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?',
            o
          );
      if (Zl(e, t, d, a), ct ? (Ji(), d = Vp) : d = 0, !i && e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && _y(e, a, t);
          else if (e.tag === 19)
            _y(e, a, t);
          else if (e.child !== null) {
            e.child.return = e, e = e.child;
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t)
              break e;
            e = e.return;
          }
          e.sibling.return = e.return, e = e.sibling;
        }
      switch (o) {
        case "forwards":
          for (a = t.child, o = null; a !== null; )
            e = a.alternate, e !== null && _u(e) === null && (o = a), a = a.sibling;
          a = o, a === null ? (o = t.child, t.child = null) : (o = a.sibling, a.sibling = null), lh(
            t,
            !1,
            o,
            a,
            f,
            d
          );
          break;
        case "backwards":
        case "unstable_legacy-backwards":
          for (a = null, o = t.child, t.child = null; o !== null; ) {
            if (e = o.alternate, e !== null && _u(e) === null) {
              t.child = o;
              break;
            }
            e = o.sibling, o.sibling = a, a = o, o = e;
          }
          lh(
            t,
            !0,
            a,
            null,
            f,
            d
          );
          break;
        case "together":
          lh(
            t,
            !1,
            null,
            null,
            void 0,
            d
          );
          break;
        default:
          t.memoizedState = null;
      }
      return t.child;
    }
    function Cu(e, t, a) {
      if (e !== null && (t.dependencies = e.dependencies), hn = -1, Qf |= t.lanes, (a & t.childLanes) === 0)
        if (e !== null) {
          if (Wi(
            e,
            t,
            a,
            !1
          ), (a & t.childLanes) === 0)
            return null;
        } else return null;
      if (e !== null && t.child !== e.child)
        throw Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        for (e = t.child, a = mu(e, e.pendingProps), t.child = a, a.return = t; e.sibling !== null; )
          e = e.sibling, a = a.sibling = mu(e, e.pendingProps), a.return = t;
        a.sibling = null;
      }
      return t.child;
    }
    function nh(e, t) {
      return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && As(e)));
    }
    function Dy(e, t, a) {
      switch (t.tag) {
        case 3:
          X(
            t,
            t.stateNode.containerInfo
          ), vu(
            t,
            xl,
            e.memoizedState.cache
          ), ri();
          break;
        case 27:
        case 5:
          ce(t);
          break;
        case 4:
          X(
            t,
            t.stateNode.containerInfo
          );
          break;
        case 10:
          vu(
            t,
            t.type,
            t.memoizedProps.value
          );
          break;
        case 12:
          (a & t.childLanes) !== 0 && (t.flags |= 4), t.flags |= 2048;
          var i = t.stateNode;
          i.effectDuration = -0, i.passiveEffectDuration = -0;
          break;
        case 31:
          if (t.memoizedState !== null)
            return t.flags |= 128, Hs(t), null;
          break;
        case 13:
          if (i = t.memoizedState, i !== null)
            return i.dehydrated !== null ? (aa(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? tg(
              e,
              t,
              a
            ) : (aa(t), e = Cu(
              e,
              t,
              a
            ), e !== null ? e.sibling : null);
          aa(t);
          break;
        case 19:
          var o = (e.flags & 128) !== 0;
          if (i = (a & t.childLanes) !== 0, i || (Wi(
            e,
            t,
            a,
            !1
          ), i = (a & t.childLanes) !== 0), o) {
            if (i)
              return ah(
                e,
                t,
                a
              );
            t.flags |= 128;
          }
          if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), xe(
            Dl,
            Dl.current,
            t
          ), i) break;
          return null;
        case 22:
          return t.lanes = 0, Wd(
            e,
            t,
            a,
            t.pendingProps
          );
        case 24:
          vu(
            t,
            xl,
            e.memoizedState.cache
          );
      }
      return Cu(e, t, a);
    }
    function uh(e, t, a) {
      if (t._debugNeedsRemount && e !== null) {
        a = Bc(
          t.type,
          t.key,
          t.pendingProps,
          t._debugOwner || null,
          t.mode,
          t.lanes
        ), a._debugStack = t._debugStack, a._debugTask = t._debugTask;
        var i = t.return;
        if (i === null) throw Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, a._debugInfo = t._debugInfo, t === i.child)
          i.child = a;
        else {
          var o = i.child;
          if (o === null)
            throw Error("Expected parent to have a child.");
          for (; o.sibling !== t; )
            if (o = o.sibling, o === null)
              throw Error("Expected to find the previous sibling.");
          o.sibling = a;
        }
        return t = i.deletions, t === null ? (i.deletions = [e], i.flags |= 16) : t.push(e), a.flags |= 2, a;
      }
      if (e !== null)
        if (e.memoizedProps !== t.pendingProps || t.type !== e.type)
          jl = !0;
        else {
          if (!nh(e, a) && (t.flags & 128) === 0)
            return jl = !1, Dy(
              e,
              t,
              a
            );
          jl = (e.flags & 131072) !== 0;
        }
      else
        jl = !1, (i = ct) && (Ji(), i = (t.flags & 1048576) !== 0), i && (i = t.index, Ji(), Pm(t, Vp, i));
      switch (t.lanes = 0, t.tag) {
        case 16:
          e: if (i = t.pendingProps, e = nn(t.elementType), t.type = e, typeof e == "function")
            _d(e) ? (i = bi(
              e,
              i
            ), t.tag = 1, t.type = e = Zi(e), t = zy(
              null,
              t,
              e,
              i,
              a
            )) : (t.tag = 0, cf(t, e), t.type = e = Zi(e), t = Id(
              null,
              t,
              e,
              i,
              a
            ));
          else {
            if (e != null) {
              if (o = e.$$typeof, o === Di) {
                t.tag = 11, t.type = e = zd(e), t = by(
                  null,
                  t,
                  e,
                  i,
                  a
                );
                break e;
              } else if (o === mo) {
                t.tag = 14, t = Ey(
                  null,
                  t,
                  e,
                  i,
                  a
                );
                break e;
              }
            }
            throw t = "", e !== null && typeof e == "object" && e.$$typeof === yl && (t = " Did you wrap a component in React.lazy() more than once?"), a = tt(e) || e, Error(
              "Element type is invalid. Received a promise that resolves to: " + a + ". Lazy element type must resolve to a class or function." + t
            );
          }
          return t;
        case 0:
          return Id(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 1:
          return i = t.type, o = bi(
            i,
            t.pendingProps
          ), zy(
            e,
            t,
            i,
            o,
            a
          );
        case 3:
          e: {
            if (X(
              t,
              t.stateNode.containerInfo
            ), e === null)
              throw Error(
                "Should have a current fiber. This is a bug in React."
              );
            i = t.pendingProps;
            var f = t.memoizedState;
            o = f.element, Ba(e, t), Qn(t, i, null, a);
            var d = t.memoizedState;
            if (i = d.cache, vu(t, xl, i), i !== f.cache && ki(
              t,
              [xl],
              a,
              !0
            ), Ou(), i = d.element, f.isDehydrated)
              if (f = {
                element: i,
                isDehydrated: !1,
                cache: d.cache
              }, t.updateQueue.baseState = f, t.memoizedState = f, t.flags & 256) {
                t = Is(
                  e,
                  t,
                  i,
                  a
                );
                break e;
              } else if (i !== o) {
                o = ma(
                  Error(
                    "This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."
                  ),
                  t
                ), gu(o), t = Is(
                  e,
                  t,
                  i,
                  a
                );
                break e;
              } else
                for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, Wt = on(e.firstChild), za = t, ct = !0, jf = null, vc = !1, eu = null, Iu = !0, a = gb(
                  t,
                  null,
                  i,
                  a
                ), t.child = a; a; )
                  a.flags = a.flags & -3 | 4096, a = a.sibling;
            else {
              if (ri(), i === o) {
                t = Cu(
                  e,
                  t,
                  a
                );
                break e;
              }
              Zl(
                e,
                t,
                i,
                a
              );
            }
            t = t.child;
          }
          return t;
        case 26:
          return Fd(e, t), e === null ? (a = dp(
            t.type,
            null,
            t.pendingProps,
            null
          )) ? t.memoizedState = a : ct || (a = t.type, e = t.pendingProps, i = Yt(
            xn.current
          ), i = bh(
            i
          ).createElement(a), i[Il] = t, i[sa] = e, ft(i, a, e), pe(i), t.stateNode = i) : t.memoizedState = dp(
            t.type,
            e.memoizedProps,
            t.pendingProps,
            e.memoizedState
          ), null;
        case 27:
          return ce(t), e === null && ct && (i = Yt(xn.current), o = ee(), i = t.stateNode = Wn(
            t.type,
            t.pendingProps,
            i,
            o,
            !1
          ), vc || (o = up(
            i,
            t.type,
            t.pendingProps,
            o
          ), o !== null && (Yc(t, 0).serverProps = o)), za = t, Iu = !0, o = Wt, _i(t.type) ? (yS = o, Wt = on(
            i.firstChild
          )) : Wt = o), Zl(
            e,
            t,
            t.pendingProps.children,
            a
          ), Fd(e, t), e === null && (t.flags |= 4194304), t.child;
        case 5:
          return e === null && ct && (f = ee(), i = yd(
            t.type,
            f.ancestorInfo
          ), o = Wt, (d = !o) || (d = Dg(
            o,
            t.type,
            t.pendingProps,
            Iu
          ), d !== null ? (t.stateNode = d, vc || (f = up(
            d,
            t.type,
            t.pendingProps,
            f
          ), f !== null && (Yc(t, 0).serverProps = f)), za = t, Wt = on(
            d.firstChild
          ), Iu = !1, f = !0) : f = !1, d = !f), d && (i && Ki(t, o), si(t))), ce(t), o = t.type, f = t.pendingProps, d = e !== null ? e.memoizedProps : null, i = f.children, Sr(o, f) ? i = null : d !== null && Sr(o, d) && (t.flags |= 32), t.memoizedState !== null && (o = cl(
            e,
            t,
            Ns,
            null,
            null,
            a
          ), A0._currentValue = o), Fd(e, t), Zl(
            e,
            t,
            i,
            a
          ), t.child;
        case 6:
          return e === null && ct && (a = t.pendingProps, e = ee(), i = e.ancestorInfo.current, a = i != null ? Go(
            a,
            i.tag,
            e.ancestorInfo.implicitRootScope
          ) : !0, e = Wt, (i = !e) || (i = Mt(
            e,
            t.pendingProps,
            Iu
          ), i !== null ? (t.stateNode = i, za = t, Wt = null, i = !0) : i = !1, i = !i), i && (a && Ki(t, e), si(t))), null;
        case 13:
          return tg(e, t, a);
        case 4:
          return X(
            t,
            t.stateNode.containerInfo
          ), i = t.pendingProps, e === null ? t.child = Fr(
            t,
            null,
            i,
            a
          ) : Zl(
            e,
            t,
            i,
            a
          ), t.child;
        case 11:
          return by(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 7:
          return Zl(
            e,
            t,
            t.pendingProps,
            a
          ), t.child;
        case 8:
          return Zl(
            e,
            t,
            t.pendingProps.children,
            a
          ), t.child;
        case 12:
          return t.flags |= 4, t.flags |= 2048, i = t.stateNode, i.effectDuration = -0, i.passiveEffectDuration = -0, Zl(
            e,
            t,
            t.pendingProps.children,
            a
          ), t.child;
        case 10:
          return i = t.type, o = t.pendingProps, f = o.value, "value" in o || Qb || (Qb = !0, console.error(
            "The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"
          )), vu(t, i, f), Zl(
            e,
            t,
            o.children,
            a
          ), t.child;
        case 9:
          return o = t.type._context, i = t.pendingProps.children, typeof i != "function" && console.error(
            "A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."
          ), Pa(t), o = qt(o), i = H1(
            i,
            o,
            void 0
          ), t.flags |= 1, Zl(
            e,
            t,
            i,
            a
          ), t.child;
        case 14:
          return Ey(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 15:
          return Ty(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 19:
          return ah(
            e,
            t,
            a
          );
        case 31:
          return eg(e, t, a);
        case 22:
          return Wd(
            e,
            t,
            a,
            t.pendingProps
          );
        case 24:
          return Pa(t), i = qt(xl), e === null ? (o = Ds(), o === null && (o = Lt, f = uy(), o.pooledCache = f, wc(f), f !== null && (o.pooledCacheLanes |= a), o = f), t.memoizedState = {
            parent: i,
            cache: o
          }, Tu(t), vu(t, xl, o)) : ((e.lanes & a) !== 0 && (Ba(e, t), Qn(t, null, null, a), Ou()), o = e.memoizedState, f = t.memoizedState, o.parent !== i ? (o = {
            parent: i,
            cache: i
          }, t.memoizedState = o, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = o), vu(t, xl, i)) : (i = f.cache, vu(t, xl, i), i !== o.cache && ki(
            t,
            [xl],
            a,
            !0
          ))), Zl(
            e,
            t,
            t.pendingProps.children,
            a
          ), t.child;
        case 29:
          throw t.pendingProps;
      }
      throw Error(
        "Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function Uu(e) {
      e.flags |= 4;
    }
    function Ry(e, t, a, i, o) {
      if ((t = (e.mode & $T) !== Ue) && (t = !1), t) {
        if (e.flags |= 16777216, (o & 335544128) === o)
          if (e.stateNode.complete) e.flags |= 8192;
          else if (mh()) e.flags |= 8192;
          else
            throw Wr = ov, j1;
      } else e.flags &= -16777217;
    }
    function ih(e, t) {
      if (t.type !== "stylesheet" || (t.state.loading & ai) !== od)
        e.flags &= -16777217;
      else if (e.flags |= 16777216, !Ch(t))
        if (mh()) e.flags |= 8192;
        else
          throw Wr = ov, j1;
    }
    function tr(e, t) {
      t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? jo() : 536870912, e.lanes |= t, ld |= t);
    }
    function of(e, t) {
      if (!ct)
        switch (e.tailMode) {
          case "hidden":
            t = e.tail;
            for (var a = null; t !== null; )
              t.alternate !== null && (a = t), t = t.sibling;
            a === null ? e.tail = null : a.sibling = null;
            break;
          case "collapsed":
            a = e.tail;
            for (var i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : i.sibling = null;
        }
    }
    function Rt(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = 0, i = 0;
      if (t)
        if ((e.mode & Ke) !== Ue) {
          for (var o = e.selfBaseDuration, f = e.child; f !== null; )
            a |= f.lanes | f.childLanes, i |= f.subtreeFlags & 65011712, i |= f.flags & 65011712, o += f.treeBaseDuration, f = f.sibling;
          e.treeBaseDuration = o;
        } else
          for (o = e.child; o !== null; )
            a |= o.lanes | o.childLanes, i |= o.subtreeFlags & 65011712, i |= o.flags & 65011712, o.return = e, o = o.sibling;
      else if ((e.mode & Ke) !== Ue) {
        o = e.actualDuration, f = e.selfBaseDuration;
        for (var d = e.child; d !== null; )
          a |= d.lanes | d.childLanes, i |= d.subtreeFlags, i |= d.flags, o += d.actualDuration, f += d.treeBaseDuration, d = d.sibling;
        e.actualDuration = o, e.treeBaseDuration = f;
      } else
        for (o = e.child; o !== null; )
          a |= o.lanes | o.childLanes, i |= o.subtreeFlags, i |= o.flags, o.return = e, o = o.sibling;
      return e.subtreeFlags |= i, e.childLanes = a, t;
    }
    function lg(e, t, a) {
      var i = t.pendingProps;
      switch (ey(t), t.tag) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return Rt(t), null;
        case 1:
          return Rt(t), null;
        case 3:
          return a = t.stateNode, i = null, e !== null && (i = e.memoizedState.cache), t.memoizedState.cache !== i && (t.flags |= 2048), Su(xl, t), B(t), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (qc(t) ? (Ts(), Uu(t)) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, ay())), Rt(t), null;
        case 26:
          var o = t.type, f = t.memoizedState;
          return e === null ? (Uu(t), f !== null ? (Rt(t), ih(
            t,
            f
          )) : (Rt(t), Ry(
            t,
            o,
            null,
            i,
            a
          ))) : f ? f !== e.memoizedState ? (Uu(t), Rt(t), ih(
            t,
            f
          )) : (Rt(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== i && Uu(t), Rt(t), Ry(
            t,
            o,
            e,
            i,
            a
          )), null;
        case 27:
          if (be(t), a = Yt(xn.current), o = t.type, e !== null && t.stateNode != null)
            e.memoizedProps !== i && Uu(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                );
              return Rt(t), null;
            }
            e = ee(), qc(t) ? ty(t) : (e = Wn(
              o,
              i,
              a,
              e,
              !0
            ), t.stateNode = e, Uu(t));
          }
          return Rt(t), null;
        case 5:
          if (be(t), o = t.type, e !== null && t.stateNode != null)
            e.memoizedProps !== i && Uu(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                );
              return Rt(t), null;
            }
            var d = ee();
            if (qc(t))
              ty(t);
            else {
              switch (f = Yt(xn.current), yd(o, d.ancestorInfo), d = d.context, f = bh(f), d) {
                case Mm:
                  f = f.createElementNS(
                    nt,
                    o
                  );
                  break;
                case Nv:
                  f = f.createElementNS(
                    Fe,
                    o
                  );
                  break;
                default:
                  switch (o) {
                    case "svg":
                      f = f.createElementNS(
                        nt,
                        o
                      );
                      break;
                    case "math":
                      f = f.createElementNS(
                        Fe,
                        o
                      );
                      break;
                    case "script":
                      f = f.createElement("div"), f.innerHTML = "<script><\/script>", f = f.removeChild(
                        f.firstChild
                      );
                      break;
                    case "select":
                      f = typeof i.is == "string" ? f.createElement("select", {
                        is: i.is
                      }) : f.createElement("select"), i.multiple ? f.multiple = !0 : i.size && (f.size = i.size);
                      break;
                    default:
                      f = typeof i.is == "string" ? f.createElement(o, {
                        is: i.is
                      }) : f.createElement(o), o.indexOf("-") === -1 && (o !== o.toLowerCase() && console.error(
                        "<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.",
                        o
                      ), Object.prototype.toString.call(f) !== "[object HTMLUnknownElement]" || In.call(hE, o) || (hE[o] = !0, console.error(
                        "The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.",
                        o
                      )));
                  }
              }
              f[Il] = t, f[sa] = i;
              e: for (d = t.child; d !== null; ) {
                if (d.tag === 5 || d.tag === 6)
                  f.appendChild(d.stateNode);
                else if (d.tag !== 4 && d.tag !== 27 && d.child !== null) {
                  d.child.return = d, d = d.child;
                  continue;
                }
                if (d === t) break e;
                for (; d.sibling === null; ) {
                  if (d.return === null || d.return === t)
                    break e;
                  d = d.return;
                }
                d.sibling.return = d.return, d = d.sibling;
              }
              t.stateNode = f;
              e: switch (ft(f, o, i), o) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  i = !!i.autoFocus;
                  break e;
                case "img":
                  i = !0;
                  break e;
                default:
                  i = !1;
              }
              i && Uu(t);
            }
          }
          return Rt(t), Ry(
            t,
            t.type,
            e === null ? null : e.memoizedProps,
            t.pendingProps,
            a
          ), null;
        case 6:
          if (e && t.stateNode != null)
            e.memoizedProps !== i && Uu(t);
          else {
            if (typeof i != "string" && t.stateNode === null)
              throw Error(
                "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
              );
            if (e = Yt(xn.current), a = ee(), qc(t)) {
              if (e = t.stateNode, a = t.memoizedProps, o = !vc, i = null, f = za, f !== null)
                switch (f.tag) {
                  case 3:
                    o && (o = Er(
                      e,
                      a,
                      i
                    ), o !== null && (Yc(t, 0).serverProps = o));
                    break;
                  case 27:
                  case 5:
                    i = f.memoizedProps, o && (o = Er(
                      e,
                      a,
                      i
                    ), o !== null && (Yc(
                      t,
                      0
                    ).serverProps = o));
                }
              e[Il] = t, e = !!(e.nodeValue === a || i !== null && i.suppressHydrationWarning === !0 || gr(e.nodeValue, a)), e || si(t, !0);
            } else
              o = a.ancestorInfo.current, o != null && Go(
                i,
                o.tag,
                a.ancestorInfo.implicitRootScope
              ), e = bh(e).createTextNode(
                i
              ), e[Il] = t, t.stateNode = e;
          }
          return Rt(t), null;
        case 31:
          if (a = t.memoizedState, e === null || e.memoizedState !== null) {
            if (i = qc(t), a !== null) {
              if (e === null) {
                if (!i)
                  throw Error(
                    "A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React."
                  );
                if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e)
                  throw Error(
                    "Expected to have a hydrated activity instance. This error is likely caused by a bug in React. Please file an issue."
                  );
                e[Il] = t, Rt(t), (t.mode & Ke) !== Ue && a !== null && (e = t.child, e !== null && (t.treeBaseDuration -= e.treeBaseDuration));
              } else
                Ts(), ri(), (t.flags & 128) === 0 && (a = t.memoizedState = null), t.flags |= 4, Rt(t), (t.mode & Ke) !== Ue && a !== null && (e = t.child, e !== null && (t.treeBaseDuration -= e.treeBaseDuration));
              e = !1;
            } else
              a = ay(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), e = !0;
            if (!e)
              return t.flags & 256 ? (na(t), t) : (na(t), null);
            if ((t.flags & 128) !== 0)
              throw Error(
                "Client rendering an Activity suspended it again. This is a bug in React."
              );
          }
          return Rt(t), null;
        case 13:
          if (i = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (o = i, f = qc(t), o !== null && o.dehydrated !== null) {
              if (e === null) {
                if (!f)
                  throw Error(
                    "A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React."
                  );
                if (f = t.memoizedState, f = f !== null ? f.dehydrated : null, !f)
                  throw Error(
                    "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
                  );
                f[Il] = t, Rt(t), (t.mode & Ke) !== Ue && o !== null && (o = t.child, o !== null && (t.treeBaseDuration -= o.treeBaseDuration));
              } else
                Ts(), ri(), (t.flags & 128) === 0 && (o = t.memoizedState = null), t.flags |= 4, Rt(t), (t.mode & Ke) !== Ue && o !== null && (o = t.child, o !== null && (t.treeBaseDuration -= o.treeBaseDuration));
              o = !1;
            } else
              o = ay(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = o), o = !0;
            if (!o)
              return t.flags & 256 ? (na(t), t) : (na(t), null);
          }
          return na(t), (t.flags & 128) !== 0 ? (t.lanes = a, (t.mode & Ke) !== Ue && ln(t), t) : (a = i !== null, e = e !== null && e.memoizedState !== null, a && (i = t.child, o = null, i.alternate !== null && i.alternate.memoizedState !== null && i.alternate.memoizedState.cachePool !== null && (o = i.alternate.memoizedState.cachePool.pool), f = null, i.memoizedState !== null && i.memoizedState.cachePool !== null && (f = i.memoizedState.cachePool.pool), f !== o && (i.flags |= 2048)), a !== e && a && (t.child.flags |= 8192), tr(t, t.updateQueue), Rt(t), (t.mode & Ke) !== Ue && a && (e = t.child, e !== null && (t.treeBaseDuration -= e.treeBaseDuration)), null);
        case 4:
          return B(t), e === null && yr(
            t.stateNode.containerInfo
          ), Rt(t), null;
        case 10:
          return Su(t.type, t), Rt(t), null;
        case 19:
          if (Oe(Dl, t), i = t.memoizedState, i === null) return Rt(t), null;
          if (o = (t.flags & 128) !== 0, f = i.rendering, f === null)
            if (o) of(i, !1);
            else {
              if (hl !== Co || e !== null && (e.flags & 128) !== 0)
                for (e = t.child; e !== null; ) {
                  if (f = _u(e), f !== null) {
                    for (t.flags |= 128, of(i, !1), e = f.updateQueue, t.updateQueue = e, tr(t, e), t.subtreeFlags = 0, e = a, a = t.child; a !== null; )
                      Zo(a, e), a = a.sibling;
                    return xe(
                      Dl,
                      Dl.current & gm | u0,
                      t
                    ), ct && pu(t, i.treeForkCount), t.child;
                  }
                  e = e.sibling;
                }
              i.tail !== null && rl() > Ev && (t.flags |= 128, o = !0, of(i, !1), t.lanes = 4194304);
            }
          else {
            if (!o)
              if (e = _u(f), e !== null) {
                if (t.flags |= 128, o = !0, e = e.updateQueue, t.updateQueue = e, tr(t, e), of(i, !0), i.tail === null && i.tailMode === "hidden" && !f.alternate && !ct)
                  return Rt(t), null;
              } else
                2 * rl() - i.renderingStartTime > Ev && a !== 536870912 && (t.flags |= 128, o = !0, of(i, !1), t.lanes = 4194304);
            i.isBackwards ? (f.sibling = t.child, t.child = f) : (e = i.last, e !== null ? e.sibling = f : t.child = f, i.last = f);
          }
          return i.tail !== null ? (e = i.tail, i.rendering = e, i.tail = e.sibling, i.renderingStartTime = rl(), e.sibling = null, a = Dl.current, a = o ? a & gm | u0 : a & gm, xe(Dl, a, t), ct && pu(t, i.treeForkCount), e) : (Rt(t), null);
        case 22:
        case 23:
          return na(t), zu(t), i = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== i && (t.flags |= 8192) : i && (t.flags |= 8192), i ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (Rt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Rt(t), a = t.updateQueue, a !== null && tr(t, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), i = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (i = t.memoizedState.cachePool.pool), i !== a && (t.flags |= 2048), e !== null && Oe($r, t), null;
        case 24:
          return a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Su(xl, t), Rt(t), null;
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(
        "Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function ag(e, t) {
      switch (ey(t), t.tag) {
        case 1:
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & Ke) !== Ue && ln(t), t) : null;
        case 3:
          return Su(xl, t), B(t), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
        case 26:
        case 27:
        case 5:
          return be(t), null;
        case 31:
          if (t.memoizedState !== null) {
            if (na(t), t.alternate === null)
              throw Error(
                "Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue."
              );
            ri();
          }
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & Ke) !== Ue && ln(t), t) : null;
        case 13:
          if (na(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
              throw Error(
                "Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue."
              );
            ri();
          }
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & Ke) !== Ue && ln(t), t) : null;
        case 19:
          return Oe(Dl, t), null;
        case 4:
          return B(t), null;
        case 10:
          return Su(t.type, t), null;
        case 22:
        case 23:
          return na(t), zu(t), e !== null && Oe($r, t), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & Ke) !== Ue && ln(t), t) : null;
        case 24:
          return Su(xl, t), null;
        case 25:
          return null;
        default:
          return null;
      }
    }
    function ng(e, t) {
      switch (ey(t), t.tag) {
        case 3:
          Su(xl, t), B(t);
          break;
        case 26:
        case 27:
        case 5:
          be(t);
          break;
        case 4:
          B(t);
          break;
        case 31:
          t.memoizedState !== null && na(t);
          break;
        case 13:
          na(t);
          break;
        case 19:
          Oe(Dl, t);
          break;
        case 10:
          Su(t.type, t);
          break;
        case 22:
        case 23:
          na(t), zu(t), e !== null && Oe($r, t);
          break;
        case 24:
          Su(xl, t);
      }
    }
    function xu(e) {
      return (e.mode & Ke) !== Ue;
    }
    function My(e, t) {
      xu(e) ? (Tn(), Pc(t, e), bu()) : Pc(t, e);
    }
    function Ic(e, t, a) {
      xu(e) ? (Tn(), Ei(
        a,
        e,
        t
      ), bu()) : Ei(
        a,
        e,
        t
      );
    }
    function Pc(e, t) {
      try {
        var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
        if (i !== null) {
          var o = i.next;
          a = o;
          do {
            if ((a.tag & e) === e && (i = void 0, (e & mn) !== sv && (_m = !0), i = se(
              t,
              eA,
              a
            ), (e & mn) !== sv && (_m = !1), i !== void 0 && typeof i != "function")) {
              var f = void 0;
              f = (a.tag & lu) !== 0 ? "useLayoutEffect" : (a.tag & mn) !== 0 ? "useInsertionEffect" : "useEffect";
              var d = void 0;
              d = i === null ? " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof i.then == "function" ? `

It looks like you wrote ` + f + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + f + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://react.dev/link/hooks-data-fetching` : " You returned: " + i, se(
                t,
                function(h, y) {
                  console.error(
                    "%s must not return anything besides a function, which is used for clean-up.%s",
                    h,
                    y
                  );
                },
                f,
                d
              );
            }
            a = a.next;
          } while (a !== o);
        }
      } catch (h) {
        vt(t, t.return, h);
      }
    }
    function Ei(e, t, a) {
      try {
        var i = t.updateQueue, o = i !== null ? i.lastEffect : null;
        if (o !== null) {
          var f = o.next;
          i = f;
          do {
            if ((i.tag & e) === e) {
              var d = i.inst, h = d.destroy;
              h !== void 0 && (d.destroy = void 0, (e & mn) !== sv && (_m = !0), o = t, se(
                o,
                tA,
                o,
                a,
                h
              ), (e & mn) !== sv && (_m = !1));
            }
            i = i.next;
          } while (i !== f);
        }
      } catch (y) {
        vt(t, t.return, y);
      }
    }
    function Cy(e, t) {
      xu(e) ? (Tn(), Pc(t, e), bu()) : Pc(t, e);
    }
    function ch(e, t, a) {
      xu(e) ? (Tn(), Ei(
        a,
        e,
        t
      ), bu()) : Ei(
        a,
        e,
        t
      );
    }
    function ff(e) {
      var t = e.updateQueue;
      if (t !== null) {
        var a = e.stateNode;
        e.type.defaultProps || "ref" in e.memoizedProps || Em || (a.props !== e.memoizedProps && console.error(
          "Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
          re(e) || "instance"
        ), a.state !== e.memoizedState && console.error(
          "Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
          re(e) || "instance"
        ));
        try {
          se(
            e,
            Nd,
            t,
            a
          );
        } catch (i) {
          vt(e, e.return, i);
        }
      }
    }
    function ug(e, t, a) {
      return e.getSnapshotBeforeUpdate(t, a);
    }
    function Uy(e, t) {
      var a = t.memoizedProps, i = t.memoizedState;
      t = e.stateNode, e.type.defaultProps || "ref" in e.memoizedProps || Em || (t.props !== e.memoizedProps && console.error(
        "Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
        re(e) || "instance"
      ), t.state !== e.memoizedState && console.error(
        "Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
        re(e) || "instance"
      ));
      try {
        var o = bi(
          e.type,
          a
        ), f = se(
          e,
          ug,
          t,
          o,
          i
        );
        a = Vb, f !== void 0 || a.has(e.type) || (a.add(e.type), se(e, function() {
          console.error(
            "%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.",
            re(e)
          );
        })), t.__reactInternalSnapshotBeforeUpdate = f;
      } catch (d) {
        vt(e, e.return, d);
      }
    }
    function xy(e, t, a) {
      a.props = bi(
        e.type,
        e.memoizedProps
      ), a.state = e.memoizedState, xu(e) ? (Tn(), se(
        e,
        fb,
        e,
        t,
        a
      ), bu()) : se(
        e,
        fb,
        e,
        t,
        a
      );
    }
    function Hy(e) {
      var t = e.ref;
      if (t !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var a = e.stateNode;
            break;
          case 30:
            a = e.stateNode;
            break;
          default:
            a = e.stateNode;
        }
        if (typeof t == "function")
          if (xu(e))
            try {
              Tn(), e.refCleanup = t(a);
            } finally {
              bu();
            }
          else e.refCleanup = t(a);
        else
          typeof t == "string" ? console.error("String refs are no longer supported.") : t.hasOwnProperty("current") || console.error(
            "Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().",
            re(e)
          ), t.current = a;
      }
    }
    function eo(e, t) {
      try {
        se(e, Hy, e);
      } catch (a) {
        vt(e, t, a);
      }
    }
    function Kn(e, t) {
      var a = e.ref, i = e.refCleanup;
      if (a !== null)
        if (typeof i == "function")
          try {
            if (xu(e))
              try {
                Tn(), se(e, i);
              } finally {
                bu(e);
              }
            else se(e, i);
          } catch (o) {
            vt(e, t, o);
          } finally {
            e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
          }
        else if (typeof a == "function")
          try {
            if (xu(e))
              try {
                Tn(), se(e, a, null);
              } finally {
                bu(e);
              }
            else se(e, a, null);
          } catch (o) {
            vt(e, t, o);
          }
        else a.current = null;
    }
    function Ny(e, t, a, i) {
      var o = e.memoizedProps, f = o.id, d = o.onCommit;
      o = o.onRender, t = t === null ? "mount" : "update", nv && (t = "nested-update"), typeof o == "function" && o(
        f,
        t,
        e.actualDuration,
        e.treeBaseDuration,
        e.actualStartTime,
        a
      ), typeof d == "function" && d(f, t, i, a);
    }
    function to(e, t, a, i) {
      var o = e.memoizedProps;
      e = o.id, o = o.onPostCommit, t = t === null ? "mount" : "update", nv && (t = "nested-update"), typeof o == "function" && o(
        e,
        t,
        i,
        a
      );
    }
    function jy(e) {
      var t = e.type, a = e.memoizedProps, i = e.stateNode;
      try {
        se(
          e,
          vg,
          i,
          t,
          a,
          e
        );
      } catch (o) {
        vt(e, e.return, o);
      }
    }
    function oh(e, t, a) {
      try {
        se(
          e,
          cp,
          e.stateNode,
          e.type,
          a,
          t,
          e
        );
      } catch (i) {
        vt(e, e.return, i);
      }
    }
    function By(e) {
      return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && _i(e.type) || e.tag === 4;
    }
    function sf(e) {
      e: for (; ; ) {
        for (; e.sibling === null; ) {
          if (e.return === null || By(e.return)) return null;
          e = e.return;
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
          if (e.tag === 27 && _i(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
          e.child.return = e, e = e.child;
        }
        if (!(e.flags & 2)) return e.stateNode;
      }
    }
    function fh(e, t, a) {
      var i = e.tag;
      if (i === 5 || i === 6)
        e = e.stateNode, t ? (bg(a), (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, t)) : (bg(a), t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(e), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = Xl));
      else if (i !== 4 && (i === 27 && _i(e.type) && (a = e.stateNode, t = null), e = e.child, e !== null))
        for (fh(e, t, a), e = e.sibling; e !== null; )
          fh(e, t, a), e = e.sibling;
    }
    function rf(e, t, a) {
      var i = e.tag;
      if (i === 5 || i === 6)
        e = e.stateNode, t ? a.insertBefore(e, t) : a.appendChild(e);
      else if (i !== 4 && (i === 27 && _i(e.type) && (a = e.stateNode), e = e.child, e !== null))
        for (rf(e, t, a), e = e.sibling; e !== null; )
          rf(e, t, a), e = e.sibling;
    }
    function ig(e) {
      for (var t, a = e.return; a !== null; ) {
        if (By(a)) {
          t = a;
          break;
        }
        a = a.return;
      }
      if (t == null)
        throw Error(
          "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
        );
      switch (t.tag) {
        case 27:
          t = t.stateNode, a = sf(e), rf(
            e,
            a,
            t
          );
          break;
        case 5:
          a = t.stateNode, t.flags & 32 && (Sg(a), t.flags &= -33), t = sf(e), rf(
            e,
            t,
            a
          );
          break;
        case 3:
        case 4:
          t = t.stateNode.containerInfo, a = sf(e), fh(
            e,
            a,
            t
          );
          break;
        default:
          throw Error(
            "Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue."
          );
      }
    }
    function Yy(e) {
      var t = e.stateNode, a = e.memoizedProps;
      try {
        se(
          e,
          Tr,
          e.type,
          a,
          t,
          e
        );
      } catch (i) {
        vt(e, e.return, i);
      }
    }
    function cg(e, t) {
      return t.tag === 31 ? (t = t.memoizedState, e.memoizedState !== null && t === null) : t.tag === 13 ? (e = e.memoizedState, t = t.memoizedState, e !== null && e.dehydrated !== null && (t === null || t.dehydrated === null)) : t.tag === 3 ? e.memoizedState.isDehydrated && (t.flags & 256) === 0 : !1;
    }
    function qy(e, t) {
      if (e = e.containerInfo, dS = qv, e = X0(e), Jm(e)) {
        if ("selectionStart" in e)
          var a = {
            start: e.selectionStart,
            end: e.selectionEnd
          };
        else
          e: {
            a = (a = e.ownerDocument) && a.defaultView || window;
            var i = a.getSelection && a.getSelection();
            if (i && i.rangeCount !== 0) {
              a = i.anchorNode;
              var o = i.anchorOffset, f = i.focusNode;
              i = i.focusOffset;
              try {
                a.nodeType, f.nodeType;
              } catch {
                a = null;
                break e;
              }
              var d = 0, h = -1, y = -1, p = 0, _ = 0, R = e, b = null;
              t: for (; ; ) {
                for (var Y; R !== a || o !== 0 && R.nodeType !== 3 || (h = d + o), R !== f || i !== 0 && R.nodeType !== 3 || (y = d + i), R.nodeType === 3 && (d += R.nodeValue.length), (Y = R.firstChild) !== null; )
                  b = R, R = Y;
                for (; ; ) {
                  if (R === e) break t;
                  if (b === a && ++p === o && (h = d), b === f && ++_ === i && (y = d), (Y = R.nextSibling) !== null) break;
                  R = b, b = R.parentNode;
                }
                R = Y;
              }
              a = h === -1 || y === -1 ? null : { start: h, end: y };
            } else a = null;
          }
        a = a || { start: 0, end: 0 };
      } else a = null;
      for (hS = {
        focusedElem: e,
        selectionRange: a
      }, qv = !1, da = t; da !== null; )
        if (t = da, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
          e.return = t, da = e;
        else
          for (; da !== null; ) {
            switch (e = t = da, a = e.alternate, o = e.flags, e.tag) {
              case 0:
                if ((o & 4) !== 0 && (e = e.updateQueue, e = e !== null ? e.events : null, e !== null))
                  for (a = 0; a < e.length; a++)
                    o = e[a], o.ref.impl = o.nextImpl;
                break;
              case 11:
              case 15:
                break;
              case 1:
                (o & 1024) !== 0 && a !== null && Uy(e, a);
                break;
              case 3:
                if ((o & 1024) !== 0) {
                  if (e = e.stateNode.containerInfo, a = e.nodeType, a === 9)
                    Ah(e);
                  else if (a === 1)
                    switch (e.nodeName) {
                      case "HEAD":
                      case "HTML":
                      case "BODY":
                        Ah(e);
                        break;
                      default:
                        e.textContent = "";
                    }
                }
                break;
              case 5:
              case 26:
              case 27:
              case 6:
              case 4:
              case 17:
                break;
              default:
                if ((o & 1024) !== 0)
                  throw Error(
                    "This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue."
                  );
            }
            if (e = t.sibling, e !== null) {
              e.return = t.return, da = e;
              break;
            }
            da = t.return;
          }
    }
    function ml(e, t, a) {
      var i = Cl(), o = en(), f = En(), d = la(), h = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          On(e, a), h & 4 && My(a, lu | ti);
          break;
        case 1:
          if (On(e, a), h & 4)
            if (e = a.stateNode, t === null)
              a.type.defaultProps || "ref" in a.memoizedProps || Em || (e.props !== a.memoizedProps && console.error(
                "Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                re(a) || "instance"
              ), e.state !== a.memoizedState && console.error(
                "Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                re(a) || "instance"
              )), xu(a) ? (Tn(), se(
                a,
                N1,
                a,
                e
              ), bu()) : se(
                a,
                N1,
                a,
                e
              );
            else {
              var y = bi(
                a.type,
                t.memoizedProps
              );
              t = t.memoizedState, a.type.defaultProps || "ref" in a.memoizedProps || Em || (e.props !== a.memoizedProps && console.error(
                "Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                re(a) || "instance"
              ), e.state !== a.memoizedState && console.error(
                "Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                re(a) || "instance"
              )), xu(a) ? (Tn(), se(
                a,
                ib,
                a,
                e,
                y,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              ), bu()) : se(
                a,
                ib,
                a,
                e,
                y,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              );
            }
          h & 64 && ff(a), h & 512 && eo(a, a.return);
          break;
        case 3:
          if (t = Xn(), On(e, a), h & 64 && (h = a.updateQueue, h !== null)) {
            if (y = null, a.child !== null)
              switch (a.child.tag) {
                case 27:
                case 5:
                  y = a.child.stateNode;
                  break;
                case 1:
                  y = a.child.stateNode;
              }
            try {
              se(
                a,
                Nd,
                h,
                y
              );
            } catch (_) {
              vt(a, a.return, _);
            }
          }
          e.effectDuration += xa(t);
          break;
        case 27:
          t === null && h & 4 && Yy(a);
        case 26:
        case 5:
          if (On(e, a), t === null) {
            if (h & 4) jy(a);
            else if (h & 64) {
              e = a.type, t = a.memoizedProps, y = a.stateNode;
              try {
                se(
                  a,
                  Eh,
                  y,
                  e,
                  t,
                  a
                );
              } catch (_) {
                vt(
                  a,
                  a.return,
                  _
                );
              }
            }
          }
          h & 512 && eo(a, a.return);
          break;
        case 12:
          if (h & 4) {
            h = Xn(), On(e, a), e = a.stateNode, e.effectDuration += Fi(h);
            try {
              se(
                a,
                Ny,
                a,
                t,
                Bf,
                e.effectDuration
              );
            } catch (_) {
              vt(a, a.return, _);
            }
          } else On(e, a);
          break;
        case 31:
          On(e, a), h & 4 && Gy(e, a);
          break;
        case 13:
          On(e, a), h & 4 && Xy(e, a), h & 64 && (e = a.memoizedState, e !== null && (e = e.dehydrated, e !== null && (h = io.bind(
            null,
            a
          ), l1(e, h))));
          break;
        case 22:
          if (h = a.memoizedState !== null || Mo, !h) {
            t = t !== null && t.memoizedState !== null || Bl, y = Mo;
            var p = Bl;
            Mo = h, (Bl = t) && !p ? (zn(
              e,
              a,
              (a.subtreeFlags & 8772) !== 0
            ), (a.mode & Ke) !== Ue && 0 <= ze && 0 <= Me && 0.05 < Me - ze && Td(
              a,
              ze,
              Me
            )) : On(e, a), Mo = y, Bl = p;
          }
          break;
        case 30:
          break;
        default:
          On(e, a);
      }
      (a.mode & Ke) !== Ue && 0 <= ze && 0 <= Me && ((pl || 0.05 < dl) && hu(
        a,
        ze,
        Me,
        dl,
        ll
      ), a.alternate === null && a.return !== null && a.return.alternate !== null && 0.05 < Me - ze && (cg(
        a.return.alternate,
        a.return
      ) || du(
        a,
        ze,
        Me,
        "Mount"
      ))), pa(i), tn(o), ll = f, pl = d;
    }
    function Ul(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, Ul(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && M(t)), e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
    }
    function Hu(e, t, a) {
      for (a = a.child; a !== null; )
        wy(
          e,
          t,
          a
        ), a = a.sibling;
    }
    function wy(e, t, a) {
      if (fa && typeof fa.onCommitFiberUnmount == "function")
        try {
          fa.onCommitFiberUnmount(Ci, a);
        } catch (p) {
          Zu || (Zu = !0, console.error(
            "React instrumentation encountered an error: %o",
            p
          ));
        }
      var i = Cl(), o = en(), f = En(), d = la();
      switch (a.tag) {
        case 26:
          Bl || Kn(a, t), Hu(
            e,
            t,
            a
          ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (e = a.stateNode, e.parentNode.removeChild(e));
          break;
        case 27:
          Bl || Kn(a, t);
          var h = Yl, y = Bn;
          _i(a.type) && (Yl = a.stateNode, Bn = !1), Hu(
            e,
            t,
            a
          ), se(
            a,
            Ar,
            a.stateNode
          ), Yl = h, Bn = y;
          break;
        case 5:
          Bl || Kn(a, t);
        case 6:
          if (h = Yl, y = Bn, Yl = null, Hu(
            e,
            t,
            a
          ), Yl = h, Bn = y, Yl !== null)
            if (Bn)
              try {
                se(
                  a,
                  vf,
                  Yl,
                  a.stateNode
                );
              } catch (p) {
                vt(
                  a,
                  t,
                  p
                );
              }
            else
              try {
                se(
                  a,
                  Eg,
                  Yl,
                  a.stateNode
                );
              } catch (p) {
                vt(
                  a,
                  t,
                  p
                );
              }
          break;
        case 18:
          Yl !== null && (Bn ? (e = Yl, br(
            e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
            a.stateNode
          ), Of(e)) : br(Yl, a.stateNode));
          break;
        case 4:
          h = Yl, y = Bn, Yl = a.stateNode.containerInfo, Bn = !0, Hu(
            e,
            t,
            a
          ), Yl = h, Bn = y;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          Ei(
            mn,
            a,
            t
          ), Bl || Ic(
            a,
            t,
            lu
          ), Hu(
            e,
            t,
            a
          );
          break;
        case 1:
          Bl || (Kn(a, t), h = a.stateNode, typeof h.componentWillUnmount == "function" && xy(
            a,
            t,
            h
          )), Hu(
            e,
            t,
            a
          );
          break;
        case 21:
          Hu(
            e,
            t,
            a
          );
          break;
        case 22:
          Bl = (h = Bl) || a.memoizedState !== null, Hu(
            e,
            t,
            a
          ), Bl = h;
          break;
        default:
          Hu(
            e,
            t,
            a
          );
      }
      (a.mode & Ke) !== Ue && 0 <= ze && 0 <= Me && (pl || 0.05 < dl) && hu(
        a,
        ze,
        Me,
        dl,
        ll
      ), pa(i), tn(o), ll = f, pl = d;
    }
    function Gy(e, t) {
      if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
        e = e.dehydrated;
        try {
          se(
            t,
            sp,
            e
          );
        } catch (a) {
          vt(t, t.return, a);
        }
      }
    }
    function Xy(e, t) {
      if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
        try {
          se(
            t,
            mc,
            e
          );
        } catch (a) {
          vt(t, t.return, a);
        }
    }
    function lr(e) {
      switch (e.tag) {
        case 31:
        case 13:
        case 19:
          var t = e.stateNode;
          return t === null && (t = e.stateNode = new Zb()), t;
        case 22:
          return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new Zb()), t;
        default:
          throw Error(
            "Unexpected Suspense handler tag (" + e.tag + "). This is a bug in React."
          );
      }
    }
    function ar(e, t) {
      var a = lr(e);
      t.forEach(function(i) {
        if (!a.has(i)) {
          if (a.add(i), Nn)
            if (Tm !== null && Am !== null)
              wu(Am, Tm);
            else
              throw Error(
                "Expected finished root and lanes to be set. This is a bug in React."
              );
          var o = Ai.bind(null, e, i);
          i.then(o, o);
        }
      });
    }
    function Jl(e, t) {
      var a = t.deletions;
      if (a !== null)
        for (var i = 0; i < a.length; i++) {
          var o = e, f = t, d = a[i], h = Cl(), y = f;
          e: for (; y !== null; ) {
            switch (y.tag) {
              case 27:
                if (_i(y.type)) {
                  Yl = y.stateNode, Bn = !1;
                  break e;
                }
                break;
              case 5:
                Yl = y.stateNode, Bn = !1;
                break e;
              case 3:
              case 4:
                Yl = y.stateNode.containerInfo, Bn = !0;
                break e;
            }
            y = y.return;
          }
          if (Yl === null)
            throw Error(
              "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
            );
          wy(o, f, d), Yl = null, Bn = !1, (d.mode & Ke) !== Ue && 0 <= ze && 0 <= Me && 0.05 < Me - ze && du(
            d,
            ze,
            Me,
            "Unmount"
          ), pa(h), o = d, f = o.alternate, f !== null && (f.return = null), o.return = null;
        }
      if (t.subtreeFlags & 13886)
        for (t = t.child; t !== null; )
          Ly(t, e), t = t.sibling;
    }
    function Ly(e, t) {
      var a = Cl(), i = en(), o = En(), f = la(), d = e.alternate, h = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Jl(t, e), Ga(e), h & 4 && (Ei(
            mn | ti,
            e,
            e.return
          ), Pc(mn | ti, e), Ic(
            e,
            e.return,
            lu | ti
          ));
          break;
        case 1:
          if (Jl(t, e), Ga(e), h & 512 && (Bl || d === null || Kn(d, d.return)), h & 64 && Mo && (h = e.updateQueue, h !== null && (d = h.callbacks, d !== null))) {
            var y = h.shared.hiddenCallbacks;
            h.shared.hiddenCallbacks = y === null ? d : y.concat(d);
          }
          break;
        case 26:
          if (y = Ni, Jl(t, e), Ga(e), h & 512 && (Bl || d === null || Kn(d, d.return)), h & 4) {
            var p = d !== null ? d.memoizedState : null;
            if (h = e.memoizedState, d === null)
              if (h === null)
                if (e.stateNode === null) {
                  e: {
                    h = e.type, d = e.memoizedProps, y = y.ownerDocument || y;
                    t: switch (h) {
                      case "title":
                        p = y.getElementsByTagName(
                          "title"
                        )[0], (!p || p[Yr] || p[Il] || p.namespaceURI === nt || p.hasAttribute("itemprop")) && (p = y.createElement(h), y.head.insertBefore(
                          p,
                          y.querySelector(
                            "head > title"
                          )
                        )), ft(p, h, d), p[Il] = e, pe(p), h = p;
                        break e;
                      case "link":
                        var _ = Cg(
                          "link",
                          "href",
                          y
                        ).get(h + (d.href || ""));
                        if (_) {
                          for (var R = 0; R < _.length; R++)
                            if (p = _[R], p.getAttribute("href") === (d.href == null || d.href === "" ? null : d.href) && p.getAttribute("rel") === (d.rel == null ? null : d.rel) && p.getAttribute("title") === (d.title == null ? null : d.title) && p.getAttribute("crossorigin") === (d.crossOrigin == null ? null : d.crossOrigin)) {
                              _.splice(R, 1);
                              break t;
                            }
                        }
                        p = y.createElement(h), ft(p, h, d), y.head.appendChild(
                          p
                        );
                        break;
                      case "meta":
                        if (_ = Cg(
                          "meta",
                          "content",
                          y
                        ).get(h + (d.content || ""))) {
                          for (R = 0; R < _.length; R++)
                            if (p = _[R], zt(
                              d.content,
                              "content"
                            ), p.getAttribute("content") === (d.content == null ? null : "" + d.content) && p.getAttribute("name") === (d.name == null ? null : d.name) && p.getAttribute("property") === (d.property == null ? null : d.property) && p.getAttribute("http-equiv") === (d.httpEquiv == null ? null : d.httpEquiv) && p.getAttribute("charset") === (d.charSet == null ? null : d.charSet)) {
                              _.splice(R, 1);
                              break t;
                            }
                        }
                        p = y.createElement(h), ft(p, h, d), y.head.appendChild(
                          p
                        );
                        break;
                      default:
                        throw Error(
                          'getNodesForType encountered a type it did not expect: "' + h + '". This is a bug in React.'
                        );
                    }
                    p[Il] = e, pe(p), h = p;
                  }
                  e.stateNode = h;
                } else
                  yp(
                    y,
                    e.type,
                    e.stateNode
                  );
              else
                e.stateNode = Rh(
                  y,
                  h,
                  e.memoizedProps
                );
            else
              p !== h ? (p === null ? d.stateNode !== null && (d = d.stateNode, d.parentNode.removeChild(d)) : p.count--, h === null ? yp(
                y,
                e.type,
                e.stateNode
              ) : Rh(
                y,
                h,
                e.memoizedProps
              )) : h === null && e.stateNode !== null && oh(
                e,
                e.memoizedProps,
                d.memoizedProps
              );
          }
          break;
        case 27:
          Jl(t, e), Ga(e), h & 512 && (Bl || d === null || Kn(d, d.return)), d !== null && h & 4 && oh(
            e,
            e.memoizedProps,
            d.memoizedProps
          );
          break;
        case 5:
          if (Jl(t, e), Ga(e), h & 512 && (Bl || d === null || Kn(d, d.return)), e.flags & 32) {
            y = e.stateNode;
            try {
              se(
                e,
                Sg,
                y
              );
            } catch (fe) {
              vt(e, e.return, fe);
            }
          }
          h & 4 && e.stateNode != null && (y = e.memoizedProps, oh(
            e,
            y,
            d !== null ? d.memoizedProps : y
          )), h & 1024 && (K1 = !0, e.type !== "form" && console.error(
            "Unexpected host component type. Expected a form. This is a bug in React."
          ));
          break;
        case 6:
          if (Jl(t, e), Ga(e), h & 4) {
            if (e.stateNode === null)
              throw Error(
                "This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue."
              );
            h = e.memoizedProps, d = d !== null ? d.memoizedProps : h, y = e.stateNode;
            try {
              se(
                e,
                t1,
                y,
                d,
                h
              );
            } catch (fe) {
              vt(e, e.return, fe);
            }
          }
          break;
        case 3:
          if (y = Xn(), jv = null, p = Ni, Ni = Or(t.containerInfo), Jl(t, e), Ni = p, Ga(e), h & 4 && d !== null && d.memoizedState.isDehydrated)
            try {
              se(
                e,
                Dh,
                t.containerInfo
              );
            } catch (fe) {
              vt(e, e.return, fe);
            }
          K1 && (K1 = !1, nr(e)), t.effectDuration += xa(
            y
          );
          break;
        case 4:
          h = Ni, Ni = Or(
            e.stateNode.containerInfo
          ), Jl(t, e), Ga(e), Ni = h;
          break;
        case 12:
          h = Xn(), Jl(t, e), Ga(e), e.stateNode.effectDuration += Fi(h);
          break;
        case 31:
          Jl(t, e), Ga(e), h & 4 && (h = e.updateQueue, h !== null && (e.updateQueue = null, ar(e, h)));
          break;
        case 13:
          Jl(t, e), Ga(e), e.child.flags & 8192 && e.memoizedState !== null != (d !== null && d.memoizedState !== null) && (bv = rl()), h & 4 && (h = e.updateQueue, h !== null && (e.updateQueue = null, ar(e, h)));
          break;
        case 22:
          y = e.memoizedState !== null;
          var b = d !== null && d.memoizedState !== null, Y = Mo, ue = Bl;
          if (Mo = Y || y, Bl = ue || b, Jl(t, e), Bl = ue, Mo = Y, b && !y && !Y && !ue && (e.mode & Ke) !== Ue && 0 <= ze && 0 <= Me && 0.05 < Me - ze && Td(
            e,
            ze,
            Me
          ), Ga(e), h & 8192)
            e: for (t = e.stateNode, t._visibility = y ? t._visibility & ~Qp : t._visibility | Qp, !y || d === null || b || Mo || Bl || (cc(e), (e.mode & Ke) !== Ue && 0 <= ze && 0 <= Me && 0.05 < Me - ze && du(
              e,
              ze,
              Me,
              "Disconnect"
            )), d = null, t = e; ; ) {
              if (t.tag === 5 || t.tag === 26) {
                if (d === null) {
                  b = d = t;
                  try {
                    p = b.stateNode, y ? se(
                      b,
                      Ag,
                      p
                    ) : se(
                      b,
                      _g,
                      b.stateNode,
                      b.memoizedProps
                    );
                  } catch (fe) {
                    vt(b, b.return, fe);
                  }
                }
              } else if (t.tag === 6) {
                if (d === null) {
                  b = t;
                  try {
                    _ = b.stateNode, y ? se(
                      b,
                      Og,
                      _
                    ) : se(
                      b,
                      Th,
                      _,
                      b.memoizedProps
                    );
                  } catch (fe) {
                    vt(b, b.return, fe);
                  }
                }
              } else if (t.tag === 18) {
                if (d === null) {
                  b = t;
                  try {
                    R = b.stateNode, y ? se(
                      b,
                      Tg,
                      R
                    ) : se(
                      b,
                      zg,
                      b.stateNode
                    );
                  } catch (fe) {
                    vt(b, b.return, fe);
                  }
                }
              } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
                t.child.return = t, t = t.child;
                continue;
              }
              if (t === e) break e;
              for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                  break e;
                d === t && (d = null), t = t.return;
              }
              d === t && (d = null), t.sibling.return = t.return, t = t.sibling;
            }
          h & 4 && (h = e.updateQueue, h !== null && (d = h.retryQueue, d !== null && (h.retryQueue = null, ar(e, d))));
          break;
        case 19:
          Jl(t, e), Ga(e), h & 4 && (h = e.updateQueue, h !== null && (e.updateQueue = null, ar(e, h)));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          Jl(t, e), Ga(e);
      }
      (e.mode & Ke) !== Ue && 0 <= ze && 0 <= Me && ((pl || 0.05 < dl) && hu(
        e,
        ze,
        Me,
        dl,
        ll
      ), e.alternate === null && e.return !== null && e.return.alternate !== null && 0.05 < Me - ze && (cg(
        e.return.alternate,
        e.return
      ) || du(
        e,
        ze,
        Me,
        "Mount"
      ))), pa(a), tn(i), ll = o, pl = f;
    }
    function Ga(e) {
      var t = e.flags;
      if (t & 2) {
        try {
          se(e, ig, e);
        } catch (a) {
          vt(e, e.return, a);
        }
        e.flags &= -3;
      }
      t & 4096 && (e.flags &= -4097);
    }
    function nr(e) {
      if (e.subtreeFlags & 1024)
        for (e = e.child; e !== null; ) {
          var t = e;
          nr(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
        }
    }
    function On(e, t) {
      if (t.subtreeFlags & 8772)
        for (t = t.child; t !== null; )
          ml(e, t.alternate, t), t = t.sibling;
    }
    function Qy(e) {
      var t = Cl(), a = en(), i = En(), o = la();
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Ic(
            e,
            e.return,
            lu
          ), cc(e);
          break;
        case 1:
          Kn(e, e.return);
          var f = e.stateNode;
          typeof f.componentWillUnmount == "function" && xy(
            e,
            e.return,
            f
          ), cc(e);
          break;
        case 27:
          se(
            e,
            Ar,
            e.stateNode
          );
        case 26:
        case 5:
          Kn(e, e.return), cc(e);
          break;
        case 22:
          e.memoizedState === null && cc(e);
          break;
        case 30:
          cc(e);
          break;
        default:
          cc(e);
      }
      (e.mode & Ke) !== Ue && 0 <= ze && 0 <= Me && (pl || 0.05 < dl) && hu(
        e,
        ze,
        Me,
        dl,
        ll
      ), pa(t), tn(a), ll = i, pl = o;
    }
    function cc(e) {
      for (e = e.child; e !== null; )
        Qy(e), e = e.sibling;
    }
    function Vy(e, t, a, i) {
      var o = Cl(), f = en(), d = En(), h = la(), y = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          zn(
            e,
            a,
            i
          ), My(a, lu);
          break;
        case 1:
          if (zn(
            e,
            a,
            i
          ), t = a.stateNode, typeof t.componentDidMount == "function" && se(
            a,
            N1,
            a,
            t
          ), t = a.updateQueue, t !== null) {
            e = a.stateNode;
            try {
              se(
                a,
                xs,
                t,
                e
              );
            } catch (p) {
              vt(a, a.return, p);
            }
          }
          i && y & 64 && ff(a), eo(a, a.return);
          break;
        case 27:
          Yy(a);
        case 26:
        case 5:
          zn(
            e,
            a,
            i
          ), i && t === null && y & 4 && jy(a), eo(a, a.return);
          break;
        case 12:
          if (i && y & 4) {
            y = Xn(), zn(
              e,
              a,
              i
            ), i = a.stateNode, i.effectDuration += Fi(y);
            try {
              se(
                a,
                Ny,
                a,
                t,
                Bf,
                i.effectDuration
              );
            } catch (p) {
              vt(a, a.return, p);
            }
          } else
            zn(
              e,
              a,
              i
            );
          break;
        case 31:
          zn(
            e,
            a,
            i
          ), i && y & 4 && Gy(e, a);
          break;
        case 13:
          zn(
            e,
            a,
            i
          ), i && y & 4 && Xy(e, a);
          break;
        case 22:
          a.memoizedState === null && zn(
            e,
            a,
            i
          ), eo(a, a.return);
          break;
        case 30:
          break;
        default:
          zn(
            e,
            a,
            i
          );
      }
      (a.mode & Ke) !== Ue && 0 <= ze && 0 <= Me && (pl || 0.05 < dl) && hu(
        a,
        ze,
        Me,
        dl,
        ll
      ), pa(o), tn(f), ll = d, pl = h;
    }
    function zn(e, t, a) {
      for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; )
        Vy(
          e,
          t.alternate,
          t,
          a
        ), t = t.sibling;
    }
    function ur(e, t) {
      var a = null;
      e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== a && (e != null && wc(e), a != null && zs(a));
    }
    function ir(e, t) {
      e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (wc(t), e != null && zs(e));
    }
    function _n(e, t, a, i, o) {
      if (t.subtreeFlags & 10256 || t.actualDuration !== 0 && (t.alternate === null || t.alternate.child !== t.child))
        for (t = t.child; t !== null; ) {
          var f = t.sibling;
          sh(
            e,
            t,
            a,
            i,
            f !== null ? f.actualStartTime : o
          ), t = f;
        }
    }
    function sh(e, t, a, i, o) {
      var f = Cl(), d = en(), h = En(), y = la(), p = xf, _ = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          (t.mode & Ke) !== Ue && 0 < t.actualStartTime && (t.flags & 1) !== 0 && Ad(
            t,
            t.actualStartTime,
            o,
            Pl,
            a
          ), _n(
            e,
            t,
            a,
            i,
            o
          ), _ & 2048 && Cy(t, yn | ti);
          break;
        case 1:
          (t.mode & Ke) !== Ue && 0 < t.actualStartTime && ((t.flags & 128) !== 0 ? Od(
            t,
            t.actualStartTime,
            o,
            []
          ) : (t.flags & 1) !== 0 && Ad(
            t,
            t.actualStartTime,
            o,
            Pl,
            a
          )), _n(
            e,
            t,
            a,
            i,
            o
          );
          break;
        case 3:
          var R = Xn(), b = Pl;
          Pl = t.alternate !== null && t.alternate.memoizedState.isDehydrated && (t.flags & 256) === 0, _n(
            e,
            t,
            a,
            i,
            o
          ), Pl = b, _ & 2048 && (a = null, t.alternate !== null && (a = t.alternate.memoizedState.cache), i = t.memoizedState.cache, i !== a && (wc(i), a != null && zs(a))), e.passiveEffectDuration += xa(
            R
          );
          break;
        case 12:
          if (_ & 2048) {
            _ = Xn(), _n(
              e,
              t,
              a,
              i,
              o
            ), e = t.stateNode, e.passiveEffectDuration += Fi(_);
            try {
              se(
                t,
                to,
                t,
                t.alternate,
                Bf,
                e.passiveEffectDuration
              );
            } catch (Y) {
              vt(t, t.return, Y);
            }
          } else
            _n(
              e,
              t,
              a,
              i,
              o
            );
          break;
        case 31:
          _ = Pl, R = t.alternate !== null ? t.alternate.memoizedState : null, b = t.memoizedState, R !== null && b === null ? (b = t.deletions, b !== null && 0 < b.length && b[0].tag === 18 ? (Pl = !1, R = R.hydrationErrors, R !== null && Od(
            t,
            t.actualStartTime,
            o,
            R
          )) : Pl = !0) : Pl = !1, _n(
            e,
            t,
            a,
            i,
            o
          ), Pl = _;
          break;
        case 13:
          _ = Pl, R = t.alternate !== null ? t.alternate.memoizedState : null, b = t.memoizedState, R === null || R.dehydrated === null || b !== null && b.dehydrated !== null ? Pl = !1 : (b = t.deletions, b !== null && 0 < b.length && b[0].tag === 18 ? (Pl = !1, R = R.hydrationErrors, R !== null && Od(
            t,
            t.actualStartTime,
            o,
            R
          )) : Pl = !0), _n(
            e,
            t,
            a,
            i,
            o
          ), Pl = _;
          break;
        case 23:
          break;
        case 22:
          b = t.stateNode, R = t.alternate, t.memoizedState !== null ? b._visibility & So ? _n(
            e,
            t,
            a,
            i,
            o
          ) : df(
            e,
            t,
            a,
            i,
            o
          ) : b._visibility & So ? _n(
            e,
            t,
            a,
            i,
            o
          ) : (b._visibility |= So, Ti(
            e,
            t,
            a,
            i,
            (t.subtreeFlags & 10256) !== 0 || t.actualDuration !== 0 && (t.alternate === null || t.alternate.child !== t.child),
            o
          ), (t.mode & Ke) === Ue || Pl || (e = t.actualStartTime, 0 <= e && 0.05 < o - e && Td(t, e, o), 0 <= ze && 0 <= Me && 0.05 < Me - ze && Td(
            t,
            ze,
            Me
          ))), _ & 2048 && ur(
            R,
            t
          );
          break;
        case 24:
          _n(
            e,
            t,
            a,
            i,
            o
          ), _ & 2048 && ir(t.alternate, t);
          break;
        default:
          _n(
            e,
            t,
            a,
            i,
            o
          );
      }
      (t.mode & Ke) !== Ue && ((e = !Pl && t.alternate === null && t.return !== null && t.return.alternate !== null) && (a = t.actualStartTime, 0 <= a && 0.05 < o - a && du(
        t,
        a,
        o,
        "Mount"
      )), 0 <= ze && 0 <= Me && ((pl || 0.05 < dl) && hu(
        t,
        ze,
        Me,
        dl,
        ll
      ), e && 0.05 < Me - ze && du(
        t,
        ze,
        Me,
        "Mount"
      ))), pa(f), tn(d), ll = h, pl = y, xf = p;
    }
    function Ti(e, t, a, i, o, f) {
      for (o = o && ((t.subtreeFlags & 10256) !== 0 || t.actualDuration !== 0 && (t.alternate === null || t.alternate.child !== t.child)), t = t.child; t !== null; ) {
        var d = t.sibling;
        rh(
          e,
          t,
          a,
          i,
          o,
          d !== null ? d.actualStartTime : f
        ), t = d;
      }
    }
    function rh(e, t, a, i, o, f) {
      var d = Cl(), h = en(), y = En(), p = la(), _ = xf;
      o && (t.mode & Ke) !== Ue && 0 < t.actualStartTime && (t.flags & 1) !== 0 && Ad(
        t,
        t.actualStartTime,
        f,
        Pl,
        a
      );
      var R = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          Ti(
            e,
            t,
            a,
            i,
            o,
            f
          ), Cy(t, yn);
          break;
        case 23:
          break;
        case 22:
          var b = t.stateNode;
          t.memoizedState !== null ? b._visibility & So ? Ti(
            e,
            t,
            a,
            i,
            o,
            f
          ) : df(
            e,
            t,
            a,
            i,
            f
          ) : (b._visibility |= So, Ti(
            e,
            t,
            a,
            i,
            o,
            f
          )), o && R & 2048 && ur(
            t.alternate,
            t
          );
          break;
        case 24:
          Ti(
            e,
            t,
            a,
            i,
            o,
            f
          ), o && R & 2048 && ir(t.alternate, t);
          break;
        default:
          Ti(
            e,
            t,
            a,
            i,
            o,
            f
          );
      }
      (t.mode & Ke) !== Ue && 0 <= ze && 0 <= Me && (pl || 0.05 < dl) && hu(
        t,
        ze,
        Me,
        dl,
        ll
      ), pa(d), tn(h), ll = y, pl = p, xf = _;
    }
    function df(e, t, a, i, o) {
      if (t.subtreeFlags & 10256 || t.actualDuration !== 0 && (t.alternate === null || t.alternate.child !== t.child))
        for (var f = t.child; f !== null; ) {
          t = f.sibling;
          var d = e, h = a, y = i, p = t !== null ? t.actualStartTime : o, _ = xf;
          (f.mode & Ke) !== Ue && 0 < f.actualStartTime && (f.flags & 1) !== 0 && Ad(
            f,
            f.actualStartTime,
            p,
            Pl,
            h
          );
          var R = f.flags;
          switch (f.tag) {
            case 22:
              df(
                d,
                f,
                h,
                y,
                p
              ), R & 2048 && ur(f.alternate, f);
              break;
            case 24:
              df(
                d,
                f,
                h,
                y,
                p
              ), R & 2048 && ir(f.alternate, f);
              break;
            default:
              df(
                d,
                f,
                h,
                y,
                p
              );
          }
          xf = _, f = t;
        }
    }
    function oc(e, t, a) {
      if (e.subtreeFlags & f0)
        for (e = e.child; e !== null; )
          Zy(
            e,
            t,
            a
          ), e = e.sibling;
    }
    function Zy(e, t, a) {
      switch (e.tag) {
        case 26:
          oc(
            e,
            t,
            a
          ), e.flags & f0 && e.memoizedState !== null && Uh(
            a,
            Ni,
            e.memoizedState,
            e.memoizedProps
          );
          break;
        case 5:
          oc(
            e,
            t,
            a
          );
          break;
        case 3:
        case 4:
          var i = Ni;
          Ni = Or(
            e.stateNode.containerInfo
          ), oc(
            e,
            t,
            a
          ), Ni = i;
          break;
        case 22:
          e.memoizedState === null && (i = e.alternate, i !== null && i.memoizedState !== null ? (i = f0, f0 = 16777216, oc(
            e,
            t,
            a
          ), f0 = i) : oc(
            e,
            t,
            a
          ));
          break;
        default:
          oc(
            e,
            t,
            a
          );
      }
    }
    function Nu(e) {
      var t = e.alternate;
      if (t !== null && (e = t.child, e !== null)) {
        t.child = null;
        do
          t = e.sibling, e.sibling = null, e = t;
        while (e !== null);
      }
    }
    function lo(e) {
      var t = e.deletions;
      if ((e.flags & 16) !== 0) {
        if (t !== null)
          for (var a = 0; a < t.length; a++) {
            var i = t[a], o = Cl();
            da = i, dh(
              i,
              e
            ), (i.mode & Ke) !== Ue && 0 <= ze && 0 <= Me && 0.05 < Me - ze && du(
              i,
              ze,
              Me,
              "Unmount"
            ), pa(o);
          }
        Nu(e);
      }
      if (e.subtreeFlags & 10256)
        for (e = e.child; e !== null; )
          og(e), e = e.sibling;
    }
    function og(e) {
      var t = Cl(), a = en(), i = En(), o = la();
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          lo(e), e.flags & 2048 && ch(
            e,
            e.return,
            yn | ti
          );
          break;
        case 3:
          var f = Xn();
          lo(e), e.stateNode.passiveEffectDuration += xa(f);
          break;
        case 12:
          f = Xn(), lo(e), e.stateNode.passiveEffectDuration += Fi(f);
          break;
        case 22:
          f = e.stateNode, e.memoizedState !== null && f._visibility & So && (e.return === null || e.return.tag !== 13) ? (f._visibility &= ~So, cr(e), (e.mode & Ke) !== Ue && 0 <= ze && 0 <= Me && 0.05 < Me - ze && du(
            e,
            ze,
            Me,
            "Disconnect"
          )) : lo(e);
          break;
        default:
          lo(e);
      }
      (e.mode & Ke) !== Ue && 0 <= ze && 0 <= Me && (pl || 0.05 < dl) && hu(
        e,
        ze,
        Me,
        dl,
        ll
      ), pa(t), tn(a), pl = o, ll = i;
    }
    function cr(e) {
      var t = e.deletions;
      if ((e.flags & 16) !== 0) {
        if (t !== null)
          for (var a = 0; a < t.length; a++) {
            var i = t[a], o = Cl();
            da = i, dh(
              i,
              e
            ), (i.mode & Ke) !== Ue && 0 <= ze && 0 <= Me && 0.05 < Me - ze && du(
              i,
              ze,
              Me,
              "Unmount"
            ), pa(o);
          }
        Nu(e);
      }
      for (e = e.child; e !== null; )
        ju(e), e = e.sibling;
    }
    function ju(e) {
      var t = Cl(), a = en(), i = En(), o = la();
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          ch(
            e,
            e.return,
            yn
          ), cr(e);
          break;
        case 22:
          var f = e.stateNode;
          f._visibility & So && (f._visibility &= ~So, cr(e));
          break;
        default:
          cr(e);
      }
      (e.mode & Ke) !== Ue && 0 <= ze && 0 <= Me && (pl || 0.05 < dl) && hu(
        e,
        ze,
        Me,
        dl,
        ll
      ), pa(t), tn(a), pl = o, ll = i;
    }
    function dh(e, t) {
      for (; da !== null; ) {
        var a = da, i = a, o = t, f = Cl(), d = en(), h = En(), y = la();
        switch (i.tag) {
          case 0:
          case 11:
          case 15:
            ch(
              i,
              o,
              yn
            );
            break;
          case 23:
          case 22:
            i.memoizedState !== null && i.memoizedState.cachePool !== null && (o = i.memoizedState.cachePool.pool, o != null && wc(o));
            break;
          case 24:
            zs(i.memoizedState.cache);
        }
        if ((i.mode & Ke) !== Ue && 0 <= ze && 0 <= Me && (pl || 0.05 < dl) && hu(
          i,
          ze,
          Me,
          dl,
          ll
        ), pa(f), tn(d), pl = y, ll = h, i = a.child, i !== null) i.return = a, da = i;
        else
          e: for (a = e; da !== null; ) {
            if (i = da, f = i.sibling, d = i.return, Ul(i), i === a) {
              da = null;
              break e;
            }
            if (f !== null) {
              f.return = d, da = f;
              break e;
            }
            da = d;
          }
      }
    }
    function fg() {
      iA.forEach(function(e) {
        return e();
      });
    }
    function or() {
      var e = typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0;
      return e || G.actQueue === null || console.error(
        "The current testing environment is not configured to support act(...)"
      ), e;
    }
    function Kl(e) {
      if ((pt & ea) !== ha && ke !== 0)
        return ke & -ke;
      var t = G.T;
      return t !== null ? (t._updatedFibers || (t._updatedFibers = /* @__PURE__ */ new Set()), t._updatedFibers.add(e), mt()) : Xi();
    }
    function Gt() {
      if (qn === 0)
        if ((ke & 536870912) === 0 || ct) {
          var e = Mf;
          Mf <<= 1, (Mf & 3932160) === 0 && (Mf = 262144), qn = e;
        } else qn = 536870912;
      return e = tu.current, e !== null && (e.flags |= 32), qn;
    }
    function tl(e, t, a) {
      if (_m && console.error("useInsertionEffect must not schedule updates."), nS && (Ov = !0), (e === Lt && (Nt === ed || Nt === td) || e.cancelPendingCommit !== null) && (ba(e, 0), Sa(
        e,
        ke,
        qn,
        !1
      )), Gi(e, a), (pt & ea) !== ha && e === Lt) {
        if (Hn)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              e = Ie && re(Ie) || "Unknown", iE.has(e) || (iE.add(e), t = re(t) || "Unknown", console.error(
                "Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://react.dev/link/setstate-in-render",
                t,
                e,
                e
              ));
              break;
            case 1:
              uE || (console.error(
                "Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."
              ), uE = !0);
          }
      } else
        Nn && _a(e, t, a), hr(t), e === Lt && ((pt & ea) === ha && (Vf |= a), hl === Xf && Sa(
          e,
          ke,
          qn,
          !1
        )), Ta(e);
    }
    function sg(e, t, a) {
      if ((pt & (ea | au)) !== ha)
        throw Error("Should not already be working.");
      if (ke !== 0 && Ie !== null) {
        var i = Ie, o = rl();
        switch (IS) {
          case d0:
          case ed:
            var f = kp;
            kt && ((i = i._debugTask) ? i.run(
              console.timeStamp.bind(
                console,
                "Suspended",
                f,
                o,
                Ku,
                void 0,
                "primary-light"
              )
            ) : console.timeStamp(
              "Suspended",
              f,
              o,
              Ku,
              void 0,
              "primary-light"
            ));
            break;
          case td:
            f = kp, kt && ((i = i._debugTask) ? i.run(
              console.timeStamp.bind(
                console,
                "Action",
                f,
                o,
                Ku,
                void 0,
                "primary-light"
              )
            ) : console.timeStamp(
              "Action",
              f,
              o,
              Ku,
              void 0,
              "primary-light"
            ));
            break;
          default:
            kt && (i = o - kp, 3 > i || console.timeStamp(
              "Blocked",
              kp,
              o,
              Ku,
              void 0,
              5 > i ? "primary-light" : 10 > i ? "primary" : 100 > i ? "primary-dark" : "error"
            ));
        }
      }
      f = (a = !a && (t & 127) === 0 && (t & e.expiredLanes) === 0 || qi(e, t)) ? bl(e, t) : ph(e, t, !0);
      var d = a;
      do {
        if (f === Co) {
          Om && !a && Sa(e, t, 0, !1), t = Nt, kp = Hl(), IS = t;
          break;
        } else {
          if (i = rl(), o = e.current.alternate, d && !fr(o)) {
            Ia(t), o = ra, f = i, !kt || f <= o || (El ? El.run(
              console.timeStamp.bind(
                console,
                "Teared Render",
                o,
                f,
                dt,
                st,
                "error"
              )
            ) : console.timeStamp(
              "Teared Render",
              o,
              f,
              dt,
              st,
              "error"
            )), $n(t, i), f = ph(e, t, !1), d = !1;
            continue;
          }
          if (f === Pr) {
            if (d = t, e.errorRecoveryDisabledLanes & d)
              var h = 0;
            else
              h = e.pendingLanes & -536870913, h = h !== 0 ? h : h & 536870912 ? 536870912 : 0;
            if (h !== 0) {
              Ia(t), $m(
                ra,
                i,
                t,
                El
              ), $n(t, i), t = h;
              e: {
                i = e, f = d, d = m0;
                var y = i.current.memoizedState.isDehydrated;
                if (y && (ba(i, h).flags |= 256), h = ph(
                  i,
                  h,
                  !1
                ), h !== Pr) {
                  if (W1 && !y) {
                    i.errorRecoveryDisabledLanes |= f, Vf |= f, f = Xf;
                    break e;
                  }
                  i = pn, pn = d, i !== null && (pn === null ? pn = i : pn.push.apply(
                    pn,
                    i
                  ));
                }
                f = h;
              }
              if (d = !1, f !== Pr) continue;
              i = rl();
            }
          }
          if (f === r0) {
            Ia(t), $m(
              ra,
              i,
              t,
              El
            ), $n(t, i), ba(e, 0), Sa(e, t, 0, !0);
            break;
          }
          e: {
            switch (a = e, f) {
              case Co:
              case r0:
                throw Error("Root did not complete. This is a bug in React.");
              case Xf:
                if ((t & 4194048) !== t) break;
              case pv:
                Ia(t), V0(
                  ra,
                  i,
                  t,
                  El
                ), $n(t, i), o = t, (o & 127) !== 0 ? tv = i : (o & 4194048) !== 0 && (lv = i), Sa(
                  a,
                  t,
                  qn,
                  !Lf
                );
                break e;
              case Pr:
                pn = null;
                break;
              case yv:
              case Jb:
                break;
              default:
                throw Error("Unknown root exit status.");
            }
            if (G.actQueue !== null)
              ca(
                a,
                o,
                t,
                pn,
                y0,
                Sv,
                qn,
                Vf,
                ld,
                f,
                null,
                null,
                ra,
                i
              );
            else {
              if ((t & 62914560) === t && (d = bv + kb - rl(), 10 < d)) {
                if (Sa(
                  a,
                  t,
                  qn,
                  !Lf
                ), Tl(a, 0, !0) !== 0) break e;
                ji = t, a.timeoutHandle = mE(
                  Jy.bind(
                    null,
                    a,
                    o,
                    pn,
                    y0,
                    Sv,
                    t,
                    qn,
                    Vf,
                    ld,
                    Lf,
                    f,
                    "Throttled",
                    ra,
                    i
                  ),
                  d
                );
                break e;
              }
              Jy(
                a,
                o,
                pn,
                y0,
                Sv,
                t,
                qn,
                Vf,
                ld,
                Lf,
                f,
                null,
                ra,
                i
              );
            }
          }
        }
        break;
      } while (!0);
      Ta(e);
    }
    function Jy(e, t, a, i, o, f, d, h, y, p, _, R, b, Y) {
      e.timeoutHandle = cd;
      var ue = t.subtreeFlags, fe = null;
      if ((ue & 8192 || (ue & 16785408) === 16785408) && (fe = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Xl
      }, Zy(t, f, fe), ue = (f & 62914560) === f ? bv - rl() : (f & 4194048) === f ? $b - rl() : 0, ue = pp(fe, ue), ue !== null)) {
        ji = f, e.cancelPendingCommit = ue(
          ca.bind(
            null,
            e,
            t,
            f,
            a,
            i,
            o,
            d,
            h,
            y,
            _,
            fe,
            fe.waitingForViewTransition ? "Waiting for the previous Animation" : 0 < fe.count ? 0 < fe.imgCount ? "Suspended on CSS and Images" : "Suspended on CSS" : fe.imgCount === 1 ? "Suspended on an Image" : 0 < fe.imgCount ? "Suspended on Images" : null,
            b,
            Y
          )
        ), Sa(
          e,
          f,
          d,
          !p
        );
        return;
      }
      ca(
        e,
        t,
        f,
        a,
        i,
        o,
        d,
        h,
        y,
        _,
        fe,
        R,
        b,
        Y
      );
    }
    function fr(e) {
      for (var t = e; ; ) {
        var a = t.tag;
        if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null)))
          for (var i = 0; i < a.length; i++) {
            var o = a[i], f = o.getSnapshot;
            o = o.value;
            try {
              if (!dn(f(), o)) return !1;
            } catch {
              return !1;
            }
          }
        if (a = t.child, t.subtreeFlags & 16384 && a !== null)
          a.return = t, t = a;
        else {
          if (t === e) break;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return !0;
            t = t.return;
          }
          t.sibling.return = t.return, t = t.sibling;
        }
      }
      return !0;
    }
    function Sa(e, t, a, i) {
      t &= ~F1, t &= ~Vf, e.suspendedLanes |= t, e.pingedLanes &= ~t, i && (e.warmLanes |= t), i = e.expirationTimes;
      for (var o = t; 0 < o; ) {
        var f = 31 - Wl(o), d = 1 << f;
        i[f] = -1, o &= ~d;
      }
      a !== 0 && ns(e, a, t);
    }
    function ao() {
      return (pt & (ea | au)) === ha ? (mf(0), !1) : !0;
    }
    function hh() {
      if (Ie !== null) {
        if (Nt === Yn)
          var e = Ie.return;
        else
          e = Ie, $i(), ec(e), ym = null, n0 = 0, e = Ie;
        for (; e !== null; )
          ng(e.alternate, e), e = e.return;
        Ie = null;
      }
    }
    function $n(e, t) {
      (e & 127) !== 0 && (Vr = t), (e & 4194048) !== 0 && (Oo = t), (e & 62914560) !== 0 && (WS = t), (e & 2080374784) !== 0 && (FS = t);
    }
    function ba(e, t) {
      kt && (console.timeStamp(
        "Blocking Track",
        3e-3,
        3e-3,
        "Blocking",
        st,
        "primary-light"
      ), console.timeStamp(
        "Transition Track",
        3e-3,
        3e-3,
        "Transition",
        st,
        "primary-light"
      ), console.timeStamp(
        "Suspense Track",
        3e-3,
        3e-3,
        "Suspense",
        st,
        "primary-light"
      ), console.timeStamp(
        "Idle Track",
        3e-3,
        3e-3,
        "Idle",
        st,
        "primary-light"
      ));
      var a = ra;
      if (ra = Hl(), ke !== 0 && 0 < a) {
        if (Ia(ke), hl === yv || hl === Xf)
          V0(
            a,
            ra,
            t,
            El
          );
        else {
          var i = ra, o = El;
          if (kt && !(i <= a)) {
            var f = (t & 738197653) === t ? "tertiary-dark" : "primary-dark", d = (t & 536870912) === t ? "Prewarm" : (t & 201326741) === t ? "Interrupted Hydration" : "Interrupted Render";
            o ? o.run(
              console.timeStamp.bind(
                console,
                d,
                a,
                i,
                dt,
                st,
                f
              )
            ) : console.timeStamp(
              d,
              a,
              i,
              dt,
              st,
              f
            );
          }
        }
        $n(ke, ra);
      }
      if (a = El, El = null, (t & 127) !== 0) {
        El = Jp, o = 0 <= Sc && Sc < Vr ? Vr : Sc, i = 0 <= Zr && Zr < Vr ? Vr : Zr, f = 0 <= i ? i : 0 <= o ? o : ra, 0 <= tv ? (Ia(2), Z0(
          tv,
          f,
          t,
          a
        )) : av & 127, a = o;
        var h = i, y = Kp, p = 0 < dm, _ = Yf === Zp, R = Yf === ev;
        if (o = ra, i = Jp, f = M1, d = C1, kt) {
          if (dt = "Blocking", 0 < a ? a > o && (a = o) : a = o, 0 < h ? h > a && (h = a) : h = a, y !== null && a > h) {
            var b = p ? "secondary-light" : "warning";
            i ? i.run(
              console.timeStamp.bind(
                console,
                p ? "Consecutive" : "Event: " + y,
                h,
                a,
                dt,
                st,
                b
              )
            ) : console.timeStamp(
              p ? "Consecutive" : "Event: " + y,
              h,
              a,
              dt,
              st,
              b
            );
          }
          o > a && (h = _ ? "error" : (t & 738197653) === t ? "tertiary-light" : "primary-light", _ = R ? "Promise Resolved" : _ ? "Cascading Update" : 5 < o - a ? "Update Blocked" : "Update", R = [], d != null && R.push(["Component name", d]), f != null && R.push(["Method name", f]), a = {
            start: a,
            end: o,
            detail: {
              devtools: {
                properties: R,
                track: dt,
                trackGroup: st,
                color: h
              }
            }
          }, i ? i.run(
            performance.measure.bind(
              performance,
              _,
              a
            )
          ) : performance.measure(_, a));
        }
        Sc = -1.1, Yf = 0, C1 = M1 = null, tv = -1.1, dm = Zr, Zr = -1.1, Vr = Hl();
      }
      if ((t & 4194048) !== 0 && (El = $p, o = 0 <= zo && zo < Oo ? Oo : zo, a = 0 <= Pu && Pu < Oo ? Oo : Pu, i = 0 <= qf && qf < Oo ? Oo : qf, f = 0 <= i ? i : 0 <= a ? a : ra, 0 <= lv ? (Ia(256), Z0(
        lv,
        f,
        t,
        El
      )) : av & 4194048, R = i, h = Jr, y = 0 < wf, p = U1 === ev, f = ra, i = $p, d = $S, _ = kS, kt && (dt = "Transition", 0 < a ? a > f && (a = f) : a = f, 0 < o ? o > a && (o = a) : o = a, 0 < R ? R > o && (R = o) : R = o, o > R && h !== null && (b = y ? "secondary-light" : "warning", i ? i.run(
        console.timeStamp.bind(
          console,
          y ? "Consecutive" : "Event: " + h,
          R,
          o,
          dt,
          st,
          b
        )
      ) : console.timeStamp(
        y ? "Consecutive" : "Event: " + h,
        R,
        o,
        dt,
        st,
        b
      )), a > o && (i ? i.run(
        console.timeStamp.bind(
          console,
          "Action",
          o,
          a,
          dt,
          st,
          "primary-dark"
        )
      ) : console.timeStamp(
        "Action",
        o,
        a,
        dt,
        st,
        "primary-dark"
      )), f > a && (o = p ? "Promise Resolved" : 5 < f - a ? "Update Blocked" : "Update", R = [], _ != null && R.push(["Component name", _]), d != null && R.push(["Method name", d]), a = {
        start: a,
        end: f,
        detail: {
          devtools: {
            properties: R,
            track: dt,
            trackGroup: st,
            color: "primary-light"
          }
        }
      }, i ? i.run(
        performance.measure.bind(
          performance,
          o,
          a
        )
      ) : performance.measure(o, a))), Pu = zo = -1.1, U1 = 0, lv = -1.1, wf = qf, qf = -1.1, Oo = Hl()), (t & 62914560) !== 0 && (av & 62914560) !== 0 && (Ia(4194304), km(WS, ra)), (t & 2080374784) !== 0 && (av & 2080374784) !== 0 && (Ia(268435456), km(FS, ra)), a = e.timeoutHandle, a !== cd && (e.timeoutHandle = cd, SA(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), ji = 0, hh(), Lt = e, Ie = a = mu(
        e.current,
        null
      ), ke = t, Nt = Yn, nu = null, Lf = !1, Om = qi(e, t), W1 = !1, hl = Co, ld = qn = F1 = Vf = Qf = 0, pn = m0 = null, Sv = !1, (t & 8) !== 0 && (t |= t & 32), i = e.entangledLanes, i !== 0)
        for (e = e.entanglements, i &= t; 0 < i; )
          o = 31 - Wl(i), f = 1 << o, t |= e[o], i &= ~f;
      return Ec = t, Vo(), e = LS(), 1e3 < e - XS && (G.recentlyCreatedOwnerStacks = 0, XS = e), xi.discardPendingWarnings(), a;
    }
    function Ky(e, t) {
      Ne = null, G.H = o0, G.getCurrentStack = null, Hn = !1, fn = null, t === mm || t === cv ? (t = Ms(), Nt = d0) : t === j1 ? (t = Ms(), Nt = Kb) : Nt = t === Z1 ? k1 : t !== null && typeof t == "object" && typeof t.then == "function" ? h0 : gv, nu = t;
      var a = Ie;
      a === null ? (hl = r0, ks(
        e,
        ma(t, e.current)
      )) : a.mode & Ke && Jo(a);
    }
    function mh() {
      var e = tu.current;
      return e === null ? !0 : (ke & 4194048) === ke ? ei === null : (ke & 62914560) === ke || (ke & 536870912) !== 0 ? e === ei : !1;
    }
    function $y() {
      var e = G.H;
      return G.H = o0, e === null ? o0 : e;
    }
    function yh() {
      var e = G.A;
      return G.A = uA, e;
    }
    function hf(e) {
      El === null && (El = e._debugTask == null ? null : e._debugTask);
    }
    function no() {
      hl = Xf, Lf || (ke & 4194048) !== ke && tu.current !== null || (Om = !0), (Qf & 134217727) === 0 && (Vf & 134217727) === 0 || Lt === null || Sa(
        Lt,
        ke,
        qn,
        !1
      );
    }
    function ph(e, t, a) {
      var i = pt;
      pt |= ea;
      var o = $y(), f = yh();
      if (Lt !== e || ke !== t) {
        if (Nn) {
          var d = e.memoizedUpdaters;
          0 < d.size && (wu(e, ke), d.clear()), Ml(e, t);
        }
        y0 = null, ba(e, t);
      }
      t = !1, d = hl;
      e: do
        try {
          if (Nt !== Yn && Ie !== null) {
            var h = Ie, y = nu;
            switch (Nt) {
              case k1:
                hh(), d = pv;
                break e;
              case d0:
              case ed:
              case td:
              case h0:
                tu.current === null && (t = !0);
                var p = Nt;
                if (Nt = Yn, nu = null, uo(e, h, y, p), a && Om) {
                  d = Co;
                  break e;
                }
                break;
              default:
                p = Nt, Nt = Yn, nu = null, uo(e, h, y, p);
            }
          }
          Bu(), d = hl;
          break;
        } catch (_) {
          Ky(e, _);
        }
      while (!0);
      return t && e.shellSuspendCounter++, $i(), pt = i, G.H = o, G.A = f, Ie === null && (Lt = null, ke = 0, Vo()), d;
    }
    function Bu() {
      for (; Ie !== null; ) Wy(Ie);
    }
    function bl(e, t) {
      var a = pt;
      pt |= ea;
      var i = $y(), o = yh();
      if (Lt !== e || ke !== t) {
        if (Nn) {
          var f = e.memoizedUpdaters;
          0 < f.size && (wu(e, ke), f.clear()), Ml(e, t);
        }
        y0 = null, Ev = rl() + Wb, ba(e, t);
      } else
        Om = qi(
          e,
          t
        );
      e: do
        try {
          if (Nt !== Yn && Ie !== null)
            t: switch (t = Ie, f = nu, Nt) {
              case gv:
                Nt = Yn, nu = null, uo(
                  e,
                  t,
                  f,
                  gv
                );
                break;
              case ed:
              case td:
                if (an(f)) {
                  Nt = Yn, nu = null, Ol(t);
                  break;
                }
                t = function() {
                  Nt !== ed && Nt !== td || Lt !== e || (Nt = vv), Ta(e);
                }, f.then(t, t);
                break e;
              case d0:
                Nt = vv;
                break e;
              case Kb:
                Nt = $1;
                break e;
              case vv:
                an(f) ? (Nt = Yn, nu = null, Ol(t)) : (Nt = Yn, nu = null, uo(
                  e,
                  t,
                  f,
                  vv
                ));
                break;
              case $1:
                var d = null;
                switch (Ie.tag) {
                  case 26:
                    d = Ie.memoizedState;
                  case 5:
                  case 27:
                    var h = Ie;
                    if (d ? Ch(d) : h.stateNode.complete) {
                      Nt = Yn, nu = null;
                      var y = h.sibling;
                      if (y !== null) Ie = y;
                      else {
                        var p = h.return;
                        p !== null ? (Ie = p, sr(p)) : Ie = null;
                      }
                      break t;
                    }
                    break;
                  default:
                    console.error(
                      "Unexpected type of fiber triggered a suspensey commit. This is a bug in React."
                    );
                }
                Nt = Yn, nu = null, uo(
                  e,
                  t,
                  f,
                  $1
                );
                break;
              case h0:
                Nt = Yn, nu = null, uo(
                  e,
                  t,
                  f,
                  h0
                );
                break;
              case k1:
                hh(), hl = pv;
                break e;
              default:
                throw Error(
                  "Unexpected SuspendedReason. This is a bug in React."
                );
            }
          G.actQueue !== null ? Bu() : ky();
          break;
        } catch (_) {
          Ky(e, _);
        }
      while (!0);
      return $i(), G.H = i, G.A = o, pt = a, Ie !== null ? Co : (Lt = null, ke = 0, Vo(), hl);
    }
    function ky() {
      for (; Ie !== null && !Jh(); )
        Wy(Ie);
    }
    function Wy(e) {
      var t = e.alternate;
      (e.mode & Ke) !== Ue ? (Cd(e), t = se(
        e,
        uh,
        t,
        e,
        Ec
      ), Jo(e)) : t = se(
        e,
        uh,
        t,
        e,
        Ec
      ), e.memoizedProps = e.pendingProps, t === null ? sr(e) : Ie = t;
    }
    function Ol(e) {
      var t = se(e, e1, e);
      e.memoizedProps = e.pendingProps, t === null ? sr(e) : Ie = t;
    }
    function e1(e) {
      var t = e.alternate, a = (e.mode & Ke) !== Ue;
      switch (a && Cd(e), e.tag) {
        case 15:
        case 0:
          t = Fc(
            t,
            e,
            e.pendingProps,
            e.type,
            void 0,
            ke
          );
          break;
        case 11:
          t = Fc(
            t,
            e,
            e.pendingProps,
            e.type.render,
            e.ref,
            ke
          );
          break;
        case 5:
          ec(e);
        default:
          ng(t, e), e = Ie = Zo(e, Ec), t = uh(t, e, Ec);
      }
      return a && Jo(e), t;
    }
    function uo(e, t, a, i) {
      $i(), ec(t), ym = null, n0 = 0;
      var o = t.return;
      try {
        if (P0(
          e,
          o,
          t,
          a,
          ke
        )) {
          hl = r0, ks(
            e,
            ma(a, e.current)
          ), Ie = null;
          return;
        }
      } catch (f) {
        if (o !== null) throw Ie = o, f;
        hl = r0, ks(
          e,
          ma(a, e.current)
        ), Ie = null;
        return;
      }
      t.flags & 32768 ? (ct || i === gv ? e = !0 : Om || (ke & 536870912) !== 0 ? e = !1 : (Lf = e = !0, (i === ed || i === td || i === d0 || i === h0) && (i = tu.current, i !== null && i.tag === 13 && (i.flags |= 16384))), Zt(t, e)) : sr(t);
    }
    function sr(e) {
      var t = e;
      do {
        if ((t.flags & 32768) !== 0) {
          Zt(
            t,
            Lf
          );
          return;
        }
        var a = t.alternate;
        if (e = t.return, Cd(t), a = se(
          t,
          lg,
          a,
          t,
          Ec
        ), (t.mode & Ke) !== Ue && Gc(t), a !== null) {
          Ie = a;
          return;
        }
        if (t = t.sibling, t !== null) {
          Ie = t;
          return;
        }
        Ie = t = e;
      } while (t !== null);
      hl === Co && (hl = Jb);
    }
    function Zt(e, t) {
      do {
        var a = ag(e.alternate, e);
        if (a !== null) {
          a.flags &= 32767, Ie = a;
          return;
        }
        if ((e.mode & Ke) !== Ue) {
          Gc(e), a = e.actualDuration;
          for (var i = e.child; i !== null; )
            a += i.actualDuration, i = i.sibling;
          e.actualDuration = a;
        }
        if (a = e.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !t && (e = e.sibling, e !== null)) {
          Ie = e;
          return;
        }
        Ie = e = a;
      } while (e !== null);
      hl = pv, Ie = null;
    }
    function ca(e, t, a, i, o, f, d, h, y, p, _, R, b, Y) {
      e.cancelPendingCommit = null;
      do
        fc();
      while (ql !== Jf);
      if (xi.flushLegacyContextWarning(), xi.flushPendingUnsafeLifecycleWarnings(), (pt & (ea | au)) !== ha)
        throw Error("Should not already be working.");
      if (Ia(a), p === Pr ? $m(
        b,
        Y,
        a,
        El
      ) : i !== null ? Wv(
        b,
        Y,
        a,
        i,
        t !== null && t.alternate !== null && t.alternate.memoizedState.isDehydrated && (t.flags & 256) !== 0,
        El
      ) : kv(
        b,
        Y,
        a,
        El
      ), t !== null) {
        if (a === 0 && console.error(
          "finishedLanes should not be empty during a commit. This is a bug in React."
        ), t === e.current)
          throw Error(
            "Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue."
          );
        if (f = t.lanes | t.childLanes, f |= O1, as(
          e,
          a,
          f,
          d,
          h,
          y
        ), e === Lt && (Ie = Lt = null, ke = 0), zm = t, Kf = e, ji = a, eS = f, lS = o, lE = i, tS = Y, aE = R, Bi = Tv, nE = null, t.actualDuration !== 0 || (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, dr(go, function() {
          return E0 = window.event, Bi === Tv && (Bi = P1), Ea(), null;
        })) : (e.callbackNode = null, e.callbackPriority = 0), Ao = null, Bf = Hl(), R !== null && Fv(
          Y,
          Bf,
          R,
          El
        ), i = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || i) {
          i = G.T, G.T = null, o = Ot.p, Ot.p = _l, d = pt, pt |= au;
          try {
            qy(e, t, a);
          } finally {
            pt = d, Ot.p = o, G.T = i;
          }
        }
        ql = Ib, Yu(), Fy(), Iy();
      }
    }
    function Yu() {
      if (ql === Ib) {
        ql = Jf;
        var e = Kf, t = zm, a = ji, i = (t.flags & 13878) !== 0;
        if ((t.subtreeFlags & 13878) !== 0 || i) {
          i = G.T, G.T = null;
          var o = Ot.p;
          Ot.p = _l;
          var f = pt;
          pt |= au;
          try {
            Tm = a, Am = e, ya(), Ly(t, e), Am = Tm = null, a = hS;
            var d = X0(e.containerInfo), h = a.focusedElem, y = a.selectionRange;
            if (d !== h && h && h.ownerDocument && Ed(
              h.ownerDocument.documentElement,
              h
            )) {
              if (y !== null && Jm(h)) {
                var p = y.start, _ = y.end;
                if (_ === void 0 && (_ = p), "selectionStart" in h)
                  h.selectionStart = p, h.selectionEnd = Math.min(
                    _,
                    h.value.length
                  );
                else {
                  var R = h.ownerDocument || document, b = R && R.defaultView || window;
                  if (b.getSelection) {
                    var Y = b.getSelection(), ue = h.textContent.length, fe = Math.min(
                      y.start,
                      ue
                    ), Jt = y.end === void 0 ? fe : Math.min(y.end, ue);
                    !Y.extend && fe > Jt && (d = Jt, Jt = fe, fe = d);
                    var rt = G0(
                      h,
                      fe
                    ), S = G0(
                      h,
                      Jt
                    );
                    if (rt && S && (Y.rangeCount !== 1 || Y.anchorNode !== rt.node || Y.anchorOffset !== rt.offset || Y.focusNode !== S.node || Y.focusOffset !== S.offset)) {
                      var E = R.createRange();
                      E.setStart(rt.node, rt.offset), Y.removeAllRanges(), fe > Jt ? (Y.addRange(E), Y.extend(S.node, S.offset)) : (E.setEnd(S.node, S.offset), Y.addRange(E));
                    }
                  }
                }
              }
              for (R = [], Y = h; Y = Y.parentNode; )
                Y.nodeType === 1 && R.push({
                  element: Y,
                  left: Y.scrollLeft,
                  top: Y.scrollTop
                });
              for (typeof h.focus == "function" && h.focus(), h = 0; h < R.length; h++) {
                var z = R[h];
                z.element.scrollLeft = z.left, z.element.scrollTop = z.top;
              }
            }
            qv = !!dS, hS = dS = null;
          } finally {
            pt = f, Ot.p = o, G.T = i;
          }
        }
        e.current = t, ql = Pb;
      }
    }
    function Fy() {
      if (ql === Pb) {
        ql = Jf;
        var e = nE;
        if (e !== null) {
          Bf = Hl();
          var t = To, a = Bf;
          !kt || a <= t || console.timeStamp(
            e,
            t,
            a,
            dt,
            st,
            "secondary-light"
          );
        }
        e = Kf, t = zm, a = ji;
        var i = (t.flags & 8772) !== 0;
        if ((t.subtreeFlags & 8772) !== 0 || i) {
          i = G.T, G.T = null;
          var o = Ot.p;
          Ot.p = _l;
          var f = pt;
          pt |= au;
          try {
            Tm = a, Am = e, ya(), ml(
              e,
              t.alternate,
              t
            ), Am = Tm = null;
          } finally {
            pt = f, Ot.p = o, G.T = i;
          }
        }
        e = tS, t = aE, To = Hl(), e = t === null ? e : Bf, t = To, a = Bi === I1, i = El, Ao !== null ? J0(
          e,
          t,
          Ao,
          !1,
          i
        ) : !kt || t <= e || (i ? i.run(
          console.timeStamp.bind(
            console,
            a ? "Commit Interrupted View Transition" : "Commit",
            e,
            t,
            dt,
            st,
            a ? "error" : "secondary-dark"
          )
        ) : console.timeStamp(
          a ? "Commit Interrupted View Transition" : "Commit",
          e,
          t,
          dt,
          st,
          a ? "error" : "secondary-dark"
        )), ql = eE;
      }
    }
    function Iy() {
      if (ql === tE || ql === eE) {
        if (ql === tE) {
          var e = To;
          To = Hl();
          var t = To, a = Bi === I1;
          !kt || t <= e || console.timeStamp(
            a ? "Interrupted View Transition" : "Starting Animation",
            e,
            t,
            dt,
            st,
            a ? " error" : "secondary-light"
          ), Bi !== I1 && (Bi = Fb);
        }
        ql = Jf, c1(), e = Kf;
        var i = zm;
        t = ji, a = lE;
        var o = i.actualDuration !== 0 || (i.subtreeFlags & 10256) !== 0 || (i.flags & 10256) !== 0;
        o ? ql = Av : (ql = Jf, zm = Kf = null, dg(
          e,
          e.pendingLanes
        ), ad = 0, g0 = null);
        var f = e.pendingLanes;
        if (f === 0 && (Zf = null), o || Rn(e), f = Bo(t), i = i.stateNode, fa && typeof fa.onCommitFiberRoot == "function")
          try {
            var d = (i.current.flags & 128) === 128;
            switch (f) {
              case _l:
                var h = Kh;
                break;
              case Fl:
                h = $h;
                break;
              case sn:
                h = go;
                break;
              case yc:
                h = jr;
                break;
              default:
                h = go;
            }
            fa.onCommitFiberRoot(
              Ci,
              i,
              h,
              d
            );
          } catch (R) {
            Zu || (Zu = !0, console.error(
              "React instrumentation encountered an error: %o",
              R
            ));
          }
        if (Nn && e.memoizedUpdaters.clear(), fg(), a !== null) {
          d = G.T, h = Ot.p, Ot.p = _l, G.T = null;
          try {
            var y = e.onRecoverableError;
            for (i = 0; i < a.length; i++) {
              var p = a[i], _ = rg(p.stack);
              se(
                p.source,
                y,
                p.value,
                _
              );
            }
          } finally {
            G.T = d, Ot.p = h;
          }
        }
        (ji & 3) !== 0 && fc(), Ta(e), f = e.pendingLanes, (t & 261930) !== 0 && (f & 42) !== 0 ? (uv = !0, e === aS ? p0++ : (p0 = 0, aS = e)) : p0 = 0, o || $n(t, To), mf(0);
      }
    }
    function rg(e) {
      return e = { componentStack: e }, Object.defineProperty(e, "digest", {
        get: function() {
          console.error(
            'You are accessing "digest" from the errorInfo object passed to onRecoverableError. This property is no longer provided as part of errorInfo but can be accessed as a property of the Error instance itself.'
          );
        }
      }), e;
    }
    function dg(e, t) {
      (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, zs(t)));
    }
    function fc() {
      return Yu(), Fy(), Iy(), Ea();
    }
    function Ea() {
      if (ql !== Av) return !1;
      var e = Kf, t = eS;
      eS = 0;
      var a = Bo(ji), i = sn > a ? sn : a;
      a = G.T;
      var o = Ot.p;
      try {
        Ot.p = i, G.T = null;
        var f = lS;
        lS = null, i = Kf;
        var d = ji;
        if (ql = Jf, zm = Kf = null, ji = 0, (pt & (ea | au)) !== ha)
          throw Error("Cannot flush passive effects while already rendering.");
        Ia(d), nS = !0, Ov = !1;
        var h = 0;
        if (Ao = null, h = rl(), Bi === Fb)
          km(
            To,
            h,
            IT
          );
        else {
          var y = To, p = h, _ = Bi === P1;
          !kt || p <= y || (El ? El.run(
            console.timeStamp.bind(
              console,
              _ ? "Waiting for Paint" : "Waiting",
              y,
              p,
              dt,
              st,
              "secondary-light"
            )
          ) : console.timeStamp(
            _ ? "Waiting for Paint" : "Waiting",
            y,
            p,
            dt,
            st,
            "secondary-light"
          ));
        }
        y = pt, pt |= au;
        var R = i.current;
        ya(), og(R);
        var b = i.current;
        R = tS, ya(), sh(
          i,
          b,
          d,
          f,
          R
        ), Rn(i), pt = y;
        var Y = rl();
        if (b = h, R = El, Ao !== null ? J0(
          b,
          Y,
          Ao,
          !0,
          R
        ) : !kt || Y <= b || (R ? R.run(
          console.timeStamp.bind(
            console,
            "Remaining Effects",
            b,
            Y,
            dt,
            st,
            "secondary-dark"
          )
        ) : console.timeStamp(
          "Remaining Effects",
          b,
          Y,
          dt,
          st,
          "secondary-dark"
        )), $n(d, Y), mf(0, !1), Ov ? i === g0 ? ad++ : (ad = 0, g0 = i) : ad = 0, Ov = nS = !1, fa && typeof fa.onPostCommitFiberRoot == "function")
          try {
            fa.onPostCommitFiberRoot(Ci, i);
          } catch (fe) {
            Zu || (Zu = !0, console.error(
              "React instrumentation encountered an error: %o",
              fe
            ));
          }
        var ue = i.current.stateNode;
        return ue.effectDuration = 0, ue.passiveEffectDuration = 0, !0;
      } finally {
        Ot.p = o, G.T = a, dg(e, t);
      }
    }
    function Dn(e, t, a) {
      t = ma(a, t), Ha(t), t = $d(e.stateNode, t, 2), e = ga(e, t, 2), e !== null && (Gi(e, 2), Ta(e));
    }
    function vt(e, t, a) {
      if (_m = !1, e.tag === 3)
        Dn(e, e, a);
      else {
        for (; t !== null; ) {
          if (t.tag === 3) {
            Dn(
              t,
              e,
              a
            );
            return;
          }
          if (t.tag === 1) {
            var i = t.stateNode;
            if (typeof t.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (Zf === null || !Zf.has(i))) {
              e = ma(a, e), Ha(e), a = kd(2), i = ga(t, a, 2), i !== null && (Ws(
                a,
                i,
                t,
                e
              ), Gi(i, 2), Ta(i));
              return;
            }
          }
          t = t.return;
        }
        console.error(
          `Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Potential causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`,
          a
        );
      }
    }
    function oa(e, t, a) {
      var i = e.pingCache;
      if (i === null) {
        i = e.pingCache = new cA();
        var o = /* @__PURE__ */ new Set();
        i.set(t, o);
      } else
        o = i.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), i.set(t, o));
      o.has(a) || (W1 = !0, o.add(a), i = hg.bind(null, e, t, a), Nn && wu(e, a), t.then(i, i));
    }
    function hg(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, (a & 127) !== 0 ? 0 > Sc && (Vr = Sc = Hl(), Jp = Pg("Promise Resolved"), Yf = ev) : (a & 4194048) !== 0 && 0 > Pu && (Oo = Pu = Hl(), $p = Pg("Promise Resolved"), U1 = ev), or() && G.actQueue === null && console.error(
        `A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`
      ), Lt === e && (ke & a) === a && (hl === Xf || hl === yv && (ke & 62914560) === ke && rl() - bv < kb ? (pt & ea) === ha && ba(e, 0) : F1 |= a, ld === ke && (ld = 0)), Ta(e);
    }
    function qu(e, t) {
      t === 0 && (t = jo()), e = Ll(e, t), e !== null && (Gi(e, t), Ta(e));
    }
    function io(e) {
      var t = e.memoizedState, a = 0;
      t !== null && (a = t.retryLane), qu(e, a);
    }
    function Ai(e, t) {
      var a = 0;
      switch (e.tag) {
        case 31:
        case 13:
          var i = e.stateNode, o = e.memoizedState;
          o !== null && (a = o.retryLane);
          break;
        case 19:
          i = e.stateNode;
          break;
        case 22:
          i = e.stateNode._retryCache;
          break;
        default:
          throw Error(
            "Pinged unknown suspense boundary type. This is probably a bug in React."
          );
      }
      i !== null && i.delete(t), qu(e, a);
    }
    function rr(e, t, a) {
      if ((t.subtreeFlags & 67117056) !== 0)
        for (t = t.child; t !== null; ) {
          var i = e, o = t, f = o.type === _f;
          f = a || f, o.tag !== 22 ? o.flags & 67108864 ? f && se(
            o,
            gh,
            i,
            o
          ) : rr(
            i,
            o,
            f
          ) : o.memoizedState === null && (f && o.flags & 8192 ? se(
            o,
            gh,
            i,
            o
          ) : o.subtreeFlags & 67108864 && se(
            o,
            rr,
            i,
            o,
            f
          )), t = t.sibling;
        }
    }
    function gh(e, t) {
      me(!0);
      try {
        Qy(t), ju(t), Vy(e, t.alternate, t, !1), rh(e, t, 0, null, !1, 0);
      } finally {
        me(!1);
      }
    }
    function Rn(e) {
      var t = !0;
      e.current.mode & (Ka | Ui) || (t = !1), rr(
        e,
        e.current,
        t
      );
    }
    function Py(e) {
      if ((pt & ea) === ha) {
        var t = e.tag;
        if (t === 3 || t === 1 || t === 0 || t === 11 || t === 14 || t === 15) {
          if (t = re(e) || "ReactComponent", zv !== null) {
            if (zv.has(t)) return;
            zv.add(t);
          } else zv = /* @__PURE__ */ new Set([t]);
          se(e, function() {
            console.error(
              "Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously tries to update the component. Move this work to useEffect instead."
            );
          });
        }
      }
    }
    function wu(e, t) {
      Nn && e.memoizedUpdaters.forEach(function(a) {
        _a(e, a, t);
      });
    }
    function dr(e, t) {
      var a = G.actQueue;
      return a !== null ? (a.push(t), sA) : Rf(e, t);
    }
    function hr(e) {
      or() && G.actQueue === null && se(e, function() {
        console.error(
          `An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`,
          re(e)
        );
      });
    }
    function Ta(e) {
      e !== Dm && e.next === null && (Dm === null ? _v = Dm = e : Dm = Dm.next = e), Dv = !0, G.actQueue !== null ? iS || (iS = !0, yg()) : uS || (uS = !0, yg());
    }
    function mf(e, t) {
      if (!cS && Dv) {
        cS = !0;
        do
          for (var a = !1, i = _v; i !== null; ) {
            if (e !== 0) {
              var o = i.pendingLanes;
              if (o === 0) var f = 0;
              else {
                var d = i.suspendedLanes, h = i.pingedLanes;
                f = (1 << 31 - Wl(42 | e) + 1) - 1, f &= o & ~(d & ~h), f = f & 201326741 ? f & 201326741 | 1 : f ? f | 2 : 0;
              }
              f !== 0 && (a = !0, tp(i, f));
            } else
              f = ke, f = Tl(
                i,
                i === Lt ? f : 0,
                i.cancelPendingCommit !== null || i.timeoutHandle !== cd
              ), (f & 3) === 0 || qi(i, f) || (a = !0, tp(i, f));
            i = i.next;
          }
        while (a);
        cS = !1;
      }
    }
    function mg() {
      E0 = window.event, co();
    }
    function co() {
      Dv = iS = uS = !1;
      var e = 0;
      $f !== 0 && yf() && (e = $f);
      for (var t = rl(), a = null, i = _v; i !== null; ) {
        var o = i.next, f = ep(i, t);
        f === 0 ? (i.next = null, a === null ? _v = o : a.next = o, o === null && (Dm = a)) : (a = i, (e !== 0 || (f & 3) !== 0) && (Dv = !0)), i = o;
      }
      ql !== Jf && ql !== Av || mf(e), $f !== 0 && ($f = 0);
    }
    function ep(e, t) {
      for (var a = e.suspendedLanes, i = e.pingedLanes, o = e.expirationTimes, f = e.pendingLanes & -62914561; 0 < f; ) {
        var d = 31 - Wl(f), h = 1 << d, y = o[d];
        y === -1 ? ((h & a) === 0 || (h & i) !== 0) && (o[d] = ls(h, t)) : y <= t && (e.expiredLanes |= h), f &= ~h;
      }
      if (t = Lt, a = ke, a = Tl(
        e,
        e === t ? a : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== cd
      ), i = e.callbackNode, a === 0 || e === t && (Nt === ed || Nt === td) || e.cancelPendingCommit !== null)
        return i !== null && lp(i), e.callbackNode = null, e.callbackPriority = 0;
      if ((a & 3) === 0 || qi(e, a)) {
        if (t = a & -a, t !== e.callbackPriority || G.actQueue !== null && i !== oS)
          lp(i);
        else return t;
        switch (Bo(a)) {
          case _l:
          case Fl:
            a = $h;
            break;
          case sn:
            a = go;
            break;
          case yc:
            a = jr;
            break;
          default:
            a = go;
        }
        return i = mr.bind(null, e), G.actQueue !== null ? (G.actQueue.push(i), a = oS) : a = Rf(a, i), e.callbackPriority = t, e.callbackNode = a, t;
      }
      return i !== null && lp(i), e.callbackPriority = 2, e.callbackNode = null, 2;
    }
    function mr(e, t) {
      if (uv = nv = !1, E0 = window.event, ql !== Jf && ql !== Av)
        return e.callbackNode = null, e.callbackPriority = 0, null;
      var a = e.callbackNode;
      if (Bi === Tv && (Bi = P1), fc() && e.callbackNode !== a)
        return null;
      var i = ke;
      return i = Tl(
        e,
        e === Lt ? i : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== cd
      ), i === 0 ? null : (sg(
        e,
        i,
        t
      ), ep(e, rl()), e.callbackNode != null && e.callbackNode === a ? mr.bind(null, e) : null);
    }
    function tp(e, t) {
      if (fc()) return null;
      nv = uv, uv = !1, sg(e, t, !0);
    }
    function lp(e) {
      e !== oS && e !== null && Zh(e);
    }
    function yg() {
      G.actQueue !== null && G.actQueue.push(function() {
        return co(), null;
      }), bA(function() {
        (pt & (ea | au)) !== ha ? Rf(
          Kh,
          mg
        ) : co();
      });
    }
    function mt() {
      if ($f === 0) {
        var e = Kr;
        e === 0 && (e = Br, Br <<= 1, (Br & 261888) === 0 && (Br = 256)), $f = e;
      }
      return $f;
    }
    function xt(e) {
      return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : (zt(e, "action"), Qi("" + e));
    }
    function et(e, t) {
      var a = t.ownerDocument.createElement("input");
      return a.name = t.name, a.value = t.value, e.id && a.setAttribute("form", e.id), t.parentNode.insertBefore(a, t), e = new FormData(e), a.parentNode.removeChild(a), e;
    }
    function it(e, t, a, i, o) {
      if (t === "submit" && a && a.stateNode === o) {
        var f = xt(
          (o[sa] || null).action
        ), d = i.submitter;
        d && (t = (t = d[sa] || null) ? xt(t.formAction) : d.getAttribute("formAction"), t !== null && (f = t, d = null));
        var h = new Jg(
          "action",
          "action",
          null,
          i,
          o
        );
        e.push({
          event: h,
          listeners: [
            {
              instance: null,
              listener: function() {
                if (i.defaultPrevented) {
                  if ($f !== 0) {
                    var y = d ? et(
                      o,
                      d
                    ) : new FormData(o), p = {
                      pending: !0,
                      data: y,
                      method: o.method,
                      action: f
                    };
                    Object.freeze(p), tf(
                      a,
                      p,
                      null,
                      y
                    );
                  }
                } else
                  typeof f == "function" && (h.preventDefault(), y = d ? et(
                    o,
                    d
                  ) : new FormData(o), p = {
                    pending: !0,
                    data: y,
                    method: o.method,
                    action: f
                  }, Object.freeze(p), tf(
                    a,
                    p,
                    f,
                    y
                  ));
              },
              currentTarget: o
            }
          ]
        });
      }
    }
    function St(e, t, a) {
      e.currentTarget = a;
      try {
        t(e);
      } catch (i) {
        b1(i);
      }
      e.currentTarget = null;
    }
    function Xa(e, t) {
      t = (t & 4) !== 0;
      for (var a = 0; a < e.length; a++) {
        var i = e[a];
        e: {
          var o = void 0, f = i.event;
          if (i = i.listeners, t)
            for (var d = i.length - 1; 0 <= d; d--) {
              var h = i[d], y = h.instance, p = h.currentTarget;
              if (h = h.listener, y !== o && f.isPropagationStopped())
                break e;
              y !== null ? se(
                y,
                St,
                f,
                h,
                p
              ) : St(f, h, p), o = y;
            }
          else
            for (d = 0; d < i.length; d++) {
              if (h = i[d], y = h.instance, p = h.currentTarget, h = h.listener, y !== o && f.isPropagationStopped())
                break e;
              y !== null ? se(
                y,
                St,
                f,
                h,
                p
              ) : St(f, h, p), o = y;
            }
        }
      }
    }
    function qe(e, t) {
      fS.has(e) || console.error(
        'Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.',
        e
      );
      var a = t[Hp];
      a === void 0 && (a = t[Hp] = /* @__PURE__ */ new Set());
      var i = e + "__bubble";
      a.has(i) || (Gu(t, e, 2, !1), a.add(i));
    }
    function sc(e, t, a) {
      fS.has(e) && !t && console.error(
        'Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.',
        e
      );
      var i = 0;
      t && (i |= 4), Gu(
        a,
        e,
        i,
        t
      );
    }
    function yr(e) {
      if (!e[Rv]) {
        e[Rv] = !0, qr.forEach(function(a) {
          a !== "selectionchange" && (fS.has(a) || sc(a, !1, e), sc(a, !0, e));
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Rv] || (t[Rv] = !0, sc("selectionchange", !1, t));
      }
    }
    function Gu(e, t, a, i) {
      switch (jh(t)) {
        case _l:
          var o = $l;
          break;
        case Fl:
          o = a1;
          break;
        default:
          o = Nh;
      }
      a = o.bind(
        null,
        t,
        a,
        e
      ), o = void 0, !s1 || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), i ? o !== void 0 ? e.addEventListener(t, a, {
        capture: !0,
        passive: o
      }) : e.addEventListener(t, a, !0) : o !== void 0 ? e.addEventListener(t, a, {
        passive: o
      }) : e.addEventListener(
        t,
        a,
        !1
      );
    }
    function $t(e, t, a, i, o) {
      var f = i;
      if ((t & 1) === 0 && (t & 2) === 0 && i !== null)
        e: for (; ; ) {
          if (i === null) return;
          var d = i.tag;
          if (d === 3 || d === 4) {
            var h = i.stateNode.containerInfo;
            if (h === o) break;
            if (d === 4)
              for (d = i.return; d !== null; ) {
                var y = d.tag;
                if ((y === 3 || y === 4) && d.stateNode.containerInfo === o)
                  return;
                d = d.return;
              }
            for (; h !== null; ) {
              if (d = P(h), d === null) return;
              if (y = d.tag, y === 5 || y === 6 || y === 26 || y === 27) {
                i = f = d;
                continue e;
              }
              h = h.parentNode;
            }
          }
          i = i.return;
        }
      Uc(function() {
        var p = f, _ = ms(a), R = [];
        e: {
          var b = GS.get(e);
          if (b !== void 0) {
            var Y = Jg, ue = e;
            switch (e) {
              case "keypress":
                if (Xo(a) === 0) break e;
              case "keydown":
              case "keyup":
                Y = zT;
                break;
              case "focusin":
                ue = "focus", Y = m1;
                break;
              case "focusout":
                ue = "blur", Y = m1;
                break;
              case "beforeblur":
              case "afterblur":
                Y = m1;
                break;
              case "click":
                if (a.button === 2) break e;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                Y = _S;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                Y = hT;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                Y = RT;
                break;
              case BS:
              case YS:
              case qS:
                Y = pT;
                break;
              case wS:
                Y = CT;
                break;
              case "scroll":
              case "scrollend":
                Y = rT;
                break;
              case "wheel":
                Y = xT;
                break;
              case "copy":
              case "cut":
              case "paste":
                Y = vT;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                Y = RS;
                break;
              case "toggle":
              case "beforetoggle":
                Y = NT;
            }
            var fe = (t & 4) !== 0, Jt = !fe && (e === "scroll" || e === "scrollend"), rt = fe ? b !== null ? b + "Capture" : null : b;
            fe = [];
            for (var S = p, E; S !== null; ) {
              var z = S;
              if (E = z.stateNode, z = z.tag, z !== 5 && z !== 26 && z !== 27 || E === null || rt === null || (z = fu(S, rt), z != null && fe.push(
                Mn(
                  S,
                  z,
                  E
                )
              )), Jt) break;
              S = S.return;
            }
            0 < fe.length && (b = new Y(
              b,
              ue,
              null,
              a,
              _
            ), R.push({
              event: b,
              listeners: fe
            }));
          }
        }
        if ((t & 7) === 0) {
          e: {
            if (b = e === "mouseover" || e === "pointerover", Y = e === "mouseout" || e === "pointerout", b && a !== jp && (ue = a.relatedTarget || a.fromElement) && (P(ue) || ue[jn]))
              break e;
            if ((Y || b) && (b = _.window === _ ? _ : (b = _.ownerDocument) ? b.defaultView || b.parentWindow : window, Y ? (ue = a.relatedTarget || a.toElement, Y = p, ue = ue ? P(ue) : null, ue !== null && (Jt = ht(ue), fe = ue.tag, ue !== Jt || fe !== 5 && fe !== 27 && fe !== 6) && (ue = null)) : (Y = null, ue = p), Y !== ue)) {
              if (fe = _S, z = "onMouseLeave", rt = "onMouseEnter", S = "mouse", (e === "pointerout" || e === "pointerover") && (fe = RS, z = "onPointerLeave", rt = "onPointerEnter", S = "pointer"), Jt = Y == null ? b : de(Y), E = ue == null ? b : de(ue), b = new fe(
                z,
                S + "leave",
                Y,
                a,
                _
              ), b.target = Jt, b.relatedTarget = E, z = null, P(_) === p && (fe = new fe(
                rt,
                S + "enter",
                ue,
                a,
                _
              ), fe.target = E, fe.relatedTarget = Jt, z = fe), Jt = z, Y && ue)
                t: {
                  for (fe = ap, rt = Y, S = ue, E = 0, z = rt; z; z = fe(z))
                    E++;
                  z = 0;
                  for (var Z = S; Z; Z = fe(Z))
                    z++;
                  for (; 0 < E - z; )
                    rt = fe(rt), E--;
                  for (; 0 < z - E; )
                    S = fe(S), z--;
                  for (; E--; ) {
                    if (rt === S || S !== null && rt === S.alternate) {
                      fe = rt;
                      break t;
                    }
                    rt = fe(rt), S = fe(S);
                  }
                  fe = null;
                }
              else fe = null;
              Y !== null && La(
                R,
                b,
                Y,
                fe,
                !1
              ), ue !== null && Jt !== null && La(
                R,
                Jt,
                ue,
                fe,
                !0
              );
            }
          }
          e: {
            if (b = p ? de(p) : window, Y = b.nodeName && b.nodeName.toLowerCase(), Y === "select" || Y === "input" && b.type === "file")
              var ie = gs;
            else if (ps(b))
              if (NS)
                ie = bd;
              else {
                ie = Zm;
                var je = Vm;
              }
            else
              Y = b.nodeName, !Y || Y.toLowerCase() !== "input" || b.type !== "checkbox" && b.type !== "radio" ? p && hs(p.elementType) && (ie = gs) : ie = vs;
            if (ie && (ie = ie(e, p))) {
              Qm(
                R,
                ie,
                a,
                _
              );
              break e;
            }
            je && je(e, b, p), e === "focusout" && p && b.type === "number" && p.memoizedProps.value != null && Hm(b, "number", b.value);
          }
          switch (je = p ? de(p) : window, e) {
            case "focusin":
              (ps(je) || je.contentEditable === "true") && (nm = je, p1 = p, Lp = null);
              break;
            case "focusout":
              Lp = p1 = nm = null;
              break;
            case "mousedown":
              g1 = !0;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              g1 = !1, L0(
                R,
                a,
                _
              );
              break;
            case "selectionchange":
              if (qT) break;
            case "keydown":
            case "keyup":
              L0(
                R,
                a,
                _
              );
          }
          var Ae;
          if (y1)
            e: {
              switch (e) {
                case "compositionstart":
                  var Se = "onCompositionStart";
                  break e;
                case "compositionend":
                  Se = "onCompositionEnd";
                  break e;
                case "compositionupdate":
                  Se = "onCompositionUpdate";
                  break e;
              }
              Se = void 0;
            }
          else
            am ? fi(e, a) && (Se = "onCompositionEnd") : e === "keydown" && a.keyCode === MS && (Se = "onCompositionStart");
          Se && (CS && a.locale !== "ko" && (am || Se !== "onCompositionStart" ? Se === "onCompositionEnd" && am && (Ae = Xm()) : (Uf = _, r1 = "value" in Uf ? Uf.value : Uf.textContent, am = !0)), je = Xu(
            p,
            Se
          ), 0 < je.length && (Se = new DS(
            Se,
            e,
            null,
            a,
            _
          ), R.push({
            event: Se,
            listeners: je
          }), Ae ? Se.data = Ae : (Ae = gd(a), Ae !== null && (Se.data = Ae)))), (Ae = BT ? vd(e, a) : B0(e, a)) && (Se = Xu(
            p,
            "onBeforeInput"
          ), 0 < Se.length && (je = new bT(
            "onBeforeInput",
            "beforeinput",
            null,
            a,
            _
          ), R.push({
            event: je,
            listeners: Se
          }), je.data = Ae)), it(
            R,
            e,
            p,
            a,
            _
          );
        }
        Xa(R, t);
      });
    }
    function Mn(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function Xu(e, t) {
      for (var a = t + "Capture", i = []; e !== null; ) {
        var o = e, f = o.stateNode;
        if (o = o.tag, o !== 5 && o !== 26 && o !== 27 || f === null || (o = fu(e, a), o != null && i.unshift(
          Mn(e, o, f)
        ), o = fu(e, t), o != null && i.push(
          Mn(e, o, f)
        )), e.tag === 3) return i;
        e = e.return;
      }
      return [];
    }
    function ap(e) {
      if (e === null) return null;
      do
        e = e.return;
      while (e && e.tag !== 5 && e.tag !== 27);
      return e || null;
    }
    function La(e, t, a, i, o) {
      for (var f = t._reactName, d = []; a !== null && a !== i; ) {
        var h = a, y = h.alternate, p = h.stateNode;
        if (h = h.tag, y !== null && y === i) break;
        h !== 5 && h !== 26 && h !== 27 || p === null || (y = p, o ? (p = fu(a, f), p != null && d.unshift(
          Mn(a, p, y)
        )) : o || (p = fu(a, f), p != null && d.push(
          Mn(a, p, y)
        ))), a = a.return;
      }
      d.length !== 0 && e.push({ event: t, listeners: d });
    }
    function rc(e, t) {
      Gm(e, t), e !== "input" && e !== "textarea" && e !== "select" || t == null || t.value !== null || OS || (OS = !0, e === "select" && t.multiple ? console.error(
        "`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.",
        e
      ) : console.error(
        "`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.",
        e
      ));
      var a = {
        registrationNameDependencies: Ju,
        possibleRegistrationNames: Fh
      };
      hs(e) || typeof t.is == "string" || Kv(e, t, a), t.contentEditable && !t.suppressContentEditableWarning && t.children != null && console.error(
        "A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."
      );
    }
    function fl(e, t, a, i) {
      t !== a && (a = Oi(a), Oi(t) !== a && (i[e] = t));
    }
    function Qa(e, t, a) {
      t.forEach(function(i) {
        a[oo(i)] = i === "style" ? kn(e) : e.getAttribute(i);
      });
    }
    function Cn(e, t) {
      t === !1 ? console.error(
        "Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.",
        e,
        e,
        e
      ) : console.error(
        "Expected `%s` listener to be a function, instead got a value of `%s` type.",
        e,
        typeof t
      );
    }
    function pr(e, t) {
      return e = e.namespaceURI === Fe || e.namespaceURI === nt ? e.ownerDocument.createElementNS(
        e.namespaceURI,
        e.tagName
      ) : e.ownerDocument.createElement(e.tagName), e.innerHTML = t, e.innerHTML;
    }
    function Oi(e) {
      return ui(e) && (console.error(
        "The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before using it here.",
        Wa(e)
      ), uu(e)), (typeof e == "string" ? e : "" + e).replace(rA, `
`).replace(dA, "");
    }
    function gr(e, t) {
      return t = Oi(t), Oi(e) === t;
    }
    function At(e, t, a, i, o, f) {
      switch (a) {
        case "children":
          typeof i == "string" ? (Go(i, t, !1), t === "body" || t === "textarea" && i === "" || ou(e, i)) : (typeof i == "number" || typeof i == "bigint") && (Go("" + i, t, !1), t !== "body" && ou(e, "" + i));
          break;
        case "className":
          is(e, "class", i);
          break;
        case "tabIndex":
          is(e, "tabindex", i);
          break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
          is(e, a, i);
          break;
        case "style":
          Cc(e, i, f);
          break;
        case "data":
          if (t !== "object") {
            is(e, "data", i);
            break;
          }
        case "src":
        case "href":
          if (i === "" && (t !== "a" || a !== "href")) {
            console.error(
              a === "src" ? 'An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.' : 'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',
              a,
              a
            ), e.removeAttribute(a);
            break;
          }
          if (i == null || typeof i == "function" || typeof i == "symbol" || typeof i == "boolean") {
            e.removeAttribute(a);
            break;
          }
          zt(i, a), i = Qi("" + i), e.setAttribute(a, i);
          break;
        case "action":
        case "formAction":
          if (i != null && (t === "form" ? a === "formAction" ? console.error(
            "You can only pass the formAction prop to <input> or <button>. Use the action prop on <form>."
          ) : typeof i == "function" && (o.encType == null && o.method == null || Uv || (Uv = !0, console.error(
            "Cannot specify a encType or method for a form that specifies a function as the action. React provides those automatically. They will get overridden."
          )), o.target == null || Cv || (Cv = !0, console.error(
            "Cannot specify a target for a form that specifies a function as the action. The function will always be executed in the same window."
          ))) : t === "input" || t === "button" ? a === "action" ? console.error(
            "You can only pass the action prop to <form>. Use the formAction prop on <input> or <button>."
          ) : t !== "input" || o.type === "submit" || o.type === "image" || Mv ? t !== "button" || o.type == null || o.type === "submit" || Mv ? typeof i == "function" && (o.name == null || fE || (fE = !0, console.error(
            'Cannot specify a "name" prop for a button that specifies a function as a formAction. React needs it to encode which action should be invoked. It will get overridden.'
          )), o.formEncType == null && o.formMethod == null || Uv || (Uv = !0, console.error(
            "Cannot specify a formEncType or formMethod for a button that specifies a function as a formAction. React provides those automatically. They will get overridden."
          )), o.formTarget == null || Cv || (Cv = !0, console.error(
            "Cannot specify a formTarget for a button that specifies a function as a formAction. The function will always be executed in the same window."
          ))) : (Mv = !0, console.error(
            'A button can only specify a formAction along with type="submit" or no type.'
          )) : (Mv = !0, console.error(
            'An input can only specify a formAction along with type="submit" or type="image".'
          )) : console.error(
            a === "action" ? "You can only pass the action prop to <form>." : "You can only pass the formAction prop to <input> or <button>."
          )), typeof i == "function") {
            e.setAttribute(
              a,
              "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
            );
            break;
          } else
            typeof f == "function" && (a === "formAction" ? (t !== "input" && At(e, t, "name", o.name, o, null), At(
              e,
              t,
              "formEncType",
              o.formEncType,
              o,
              null
            ), At(
              e,
              t,
              "formMethod",
              o.formMethod,
              o,
              null
            ), At(
              e,
              t,
              "formTarget",
              o.formTarget,
              o,
              null
            )) : (At(
              e,
              t,
              "encType",
              o.encType,
              o,
              null
            ), At(e, t, "method", o.method, o, null), At(
              e,
              t,
              "target",
              o.target,
              o,
              null
            )));
          if (i == null || typeof i == "symbol" || typeof i == "boolean") {
            e.removeAttribute(a);
            break;
          }
          zt(i, a), i = Qi("" + i), e.setAttribute(a, i);
          break;
        case "onClick":
          i != null && (typeof i != "function" && Cn(a, i), e.onclick = Xl);
          break;
        case "onScroll":
          i != null && (typeof i != "function" && Cn(a, i), qe("scroll", e));
          break;
        case "onScrollEnd":
          i != null && (typeof i != "function" && Cn(a, i), qe("scrollend", e));
          break;
        case "dangerouslySetInnerHTML":
          if (i != null) {
            if (typeof i != "object" || !("__html" in i))
              throw Error(
                "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information."
              );
            if (a = i.__html, a != null) {
              if (o.children != null)
                throw Error(
                  "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
                );
              e.innerHTML = a;
            }
          }
          break;
        case "multiple":
          e.multiple = i && typeof i != "function" && typeof i != "symbol";
          break;
        case "muted":
          e.muted = i && typeof i != "function" && typeof i != "symbol";
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
          break;
        case "autoFocus":
          break;
        case "xlinkHref":
          if (i == null || typeof i == "function" || typeof i == "boolean" || typeof i == "symbol") {
            e.removeAttribute("xlink:href");
            break;
          }
          zt(i, a), a = Qi("" + i), e.setAttributeNS(nd, "xlink:href", a);
          break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
          i != null && typeof i != "function" && typeof i != "symbol" ? (zt(i, a), e.setAttribute(a, "" + i)) : e.removeAttribute(a);
          break;
        case "inert":
          i !== "" || xv[a] || (xv[a] = !0, console.error(
            "Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",
            a
          ));
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
          i && typeof i != "function" && typeof i != "symbol" ? e.setAttribute(a, "") : e.removeAttribute(a);
          break;
        case "capture":
        case "download":
          i === !0 ? e.setAttribute(a, "") : i !== !1 && i != null && typeof i != "function" && typeof i != "symbol" ? (zt(i, a), e.setAttribute(a, i)) : e.removeAttribute(a);
          break;
        case "cols":
        case "rows":
        case "size":
        case "span":
          i != null && typeof i != "function" && typeof i != "symbol" && !isNaN(i) && 1 <= i ? (zt(i, a), e.setAttribute(a, i)) : e.removeAttribute(a);
          break;
        case "rowSpan":
        case "start":
          i == null || typeof i == "function" || typeof i == "symbol" || isNaN(i) ? e.removeAttribute(a) : (zt(i, a), e.setAttribute(a, i));
          break;
        case "popover":
          qe("beforetoggle", e), qe("toggle", e), Ac(e, "popover", i);
          break;
        case "xlinkActuate":
          cu(
            e,
            nd,
            "xlink:actuate",
            i
          );
          break;
        case "xlinkArcrole":
          cu(
            e,
            nd,
            "xlink:arcrole",
            i
          );
          break;
        case "xlinkRole":
          cu(
            e,
            nd,
            "xlink:role",
            i
          );
          break;
        case "xlinkShow":
          cu(
            e,
            nd,
            "xlink:show",
            i
          );
          break;
        case "xlinkTitle":
          cu(
            e,
            nd,
            "xlink:title",
            i
          );
          break;
        case "xlinkType":
          cu(
            e,
            nd,
            "xlink:type",
            i
          );
          break;
        case "xmlBase":
          cu(
            e,
            sS,
            "xml:base",
            i
          );
          break;
        case "xmlLang":
          cu(
            e,
            sS,
            "xml:lang",
            i
          );
          break;
        case "xmlSpace":
          cu(
            e,
            sS,
            "xml:space",
            i
          );
          break;
        case "is":
          f != null && console.error(
            'Cannot update the "is" prop after it has been initialized.'
          ), Ac(e, "is", i);
          break;
        case "innerText":
        case "textContent":
          break;
        case "popoverTarget":
          sE || i == null || typeof i != "object" || (sE = !0, console.error(
            "The `popoverTarget` prop expects the ID of an Element as a string. Received %s instead.",
            i
          ));
        default:
          !(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N" ? (a = wm(a), Ac(e, a, i)) : Ju.hasOwnProperty(a) && i != null && typeof i != "function" && Cn(a, i);
      }
    }
    function Lu(e, t, a, i, o, f) {
      switch (a) {
        case "style":
          Cc(e, i, f);
          break;
        case "dangerouslySetInnerHTML":
          if (i != null) {
            if (typeof i != "object" || !("__html" in i))
              throw Error(
                "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information."
              );
            if (a = i.__html, a != null) {
              if (o.children != null)
                throw Error(
                  "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
                );
              e.innerHTML = a;
            }
          }
          break;
        case "children":
          typeof i == "string" ? ou(e, i) : (typeof i == "number" || typeof i == "bigint") && ou(e, "" + i);
          break;
        case "onScroll":
          i != null && (typeof i != "function" && Cn(a, i), qe("scroll", e));
          break;
        case "onScrollEnd":
          i != null && (typeof i != "function" && Cn(a, i), qe("scrollend", e));
          break;
        case "onClick":
          i != null && (typeof i != "function" && Cn(a, i), e.onclick = Xl);
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
          break;
        case "innerText":
        case "textContent":
          break;
        default:
          if (Ju.hasOwnProperty(a))
            i != null && typeof i != "function" && Cn(a, i);
          else
            e: {
              if (a[0] === "o" && a[1] === "n" && (o = a.endsWith("Capture"), t = a.slice(2, o ? a.length - 7 : void 0), f = e[sa] || null, f = f != null ? f[a] : null, typeof f == "function" && e.removeEventListener(t, f, o), typeof i == "function")) {
                typeof f != "function" && f !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)), e.addEventListener(t, i, o);
                break e;
              }
              a in e ? e[a] = i : i === !0 ? e.setAttribute(a, "") : Ac(e, a, i);
            }
      }
    }
    function ft(e, t, a) {
      switch (rc(t, a), t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "img":
          qe("error", e), qe("load", e);
          var i = !1, o = !1, f;
          for (f in a)
            if (a.hasOwnProperty(f)) {
              var d = a[f];
              if (d != null)
                switch (f) {
                  case "src":
                    i = !0;
                    break;
                  case "srcSet":
                    o = !0;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  default:
                    At(e, t, f, d, a, null);
                }
            }
          o && At(e, t, "srcSet", a.srcSet, a, null), i && At(e, t, "src", a.src, a, null);
          return;
        case "input":
          Gl("input", a), qe("invalid", e);
          var h = f = d = o = null, y = null, p = null;
          for (i in a)
            if (a.hasOwnProperty(i)) {
              var _ = a[i];
              if (_ != null)
                switch (i) {
                  case "name":
                    o = _;
                    break;
                  case "type":
                    d = _;
                    break;
                  case "checked":
                    y = _;
                    break;
                  case "defaultChecked":
                    p = _;
                    break;
                  case "value":
                    f = _;
                    break;
                  case "defaultValue":
                    h = _;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    if (_ != null)
                      throw Error(
                        t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                      );
                    break;
                  default:
                    At(e, t, i, _, a, null);
                }
            }
          Oc(e, a), x0(
            e,
            f,
            h,
            y,
            p,
            d,
            o,
            !1
          );
          return;
        case "select":
          Gl("select", a), qe("invalid", e), i = d = f = null;
          for (o in a)
            if (a.hasOwnProperty(o) && (h = a[o], h != null))
              switch (o) {
                case "value":
                  f = h;
                  break;
                case "defaultValue":
                  d = h;
                  break;
                case "multiple":
                  i = h;
                default:
                  At(
                    e,
                    t,
                    o,
                    h,
                    a,
                    null
                  );
              }
          zc(e, a), t = f, a = d, e.multiple = !!i, t != null ? Li(e, !!i, t, !1) : a != null && Li(e, !!i, a, !0);
          return;
        case "textarea":
          Gl("textarea", a), qe("invalid", e), f = o = i = null;
          for (d in a)
            if (a.hasOwnProperty(d) && (h = a[d], h != null))
              switch (d) {
                case "value":
                  i = h;
                  break;
                case "defaultValue":
                  o = h;
                  break;
                case "children":
                  f = h;
                  break;
                case "dangerouslySetInnerHTML":
                  if (h != null)
                    throw Error(
                      "`dangerouslySetInnerHTML` does not make sense on <textarea>."
                    );
                  break;
                default:
                  At(
                    e,
                    t,
                    d,
                    h,
                    a,
                    null
                  );
              }
          _c(e, a), Dc(e, i, o, f);
          return;
        case "option":
          Nm(e, a);
          for (y in a)
            a.hasOwnProperty(y) && (i = a[y], i != null) && (y === "selected" ? e.selected = i && typeof i != "function" && typeof i != "symbol" : At(e, t, y, i, a, null));
          return;
        case "dialog":
          qe("beforetoggle", e), qe("toggle", e), qe("cancel", e), qe("close", e);
          break;
        case "iframe":
        case "object":
          qe("load", e);
          break;
        case "video":
        case "audio":
          for (i = 0; i < v0.length; i++)
            qe(v0[i], e);
          break;
        case "image":
          qe("error", e), qe("load", e);
          break;
        case "details":
          qe("toggle", e);
          break;
        case "embed":
        case "source":
        case "link":
          qe("error", e), qe("load", e);
        case "area":
        case "base":
        case "br":
        case "col":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "track":
        case "wbr":
        case "menuitem":
          for (p in a)
            if (a.hasOwnProperty(p) && (i = a[p], i != null))
              switch (p) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(
                    t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                  );
                default:
                  At(e, t, p, i, a, null);
              }
          return;
        default:
          if (hs(t)) {
            for (_ in a)
              a.hasOwnProperty(_) && (i = a[_], i !== void 0 && Lu(
                e,
                t,
                _,
                i,
                a,
                void 0
              ));
            return;
          }
      }
      for (h in a)
        a.hasOwnProperty(h) && (i = a[h], i != null && At(e, t, h, i, a, null));
    }
    function dc(e, t, a, i) {
      switch (rc(t, i), t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "input":
          var o = null, f = null, d = null, h = null, y = null, p = null, _ = null;
          for (Y in a) {
            var R = a[Y];
            if (a.hasOwnProperty(Y) && R != null)
              switch (Y) {
                case "checked":
                  break;
                case "value":
                  break;
                case "defaultValue":
                  y = R;
                default:
                  i.hasOwnProperty(Y) || At(
                    e,
                    t,
                    Y,
                    null,
                    i,
                    R
                  );
              }
          }
          for (var b in i) {
            var Y = i[b];
            if (R = a[b], i.hasOwnProperty(b) && (Y != null || R != null))
              switch (b) {
                case "type":
                  f = Y;
                  break;
                case "name":
                  o = Y;
                  break;
                case "checked":
                  p = Y;
                  break;
                case "defaultChecked":
                  _ = Y;
                  break;
                case "value":
                  d = Y;
                  break;
                case "defaultValue":
                  h = Y;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (Y != null)
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  break;
                default:
                  Y !== R && At(
                    e,
                    t,
                    b,
                    Y,
                    i,
                    R
                  );
              }
          }
          t = a.type === "checkbox" || a.type === "radio" ? a.checked != null : a.value != null, i = i.type === "checkbox" || i.type === "radio" ? i.checked != null : i.value != null, t || !i || oE || (console.error(
            "A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"
          ), oE = !0), !t || i || cE || (console.error(
            "A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"
          ), cE = !0), cs(
            e,
            d,
            h,
            y,
            p,
            _,
            f,
            o
          );
          return;
        case "select":
          Y = d = h = b = null;
          for (f in a)
            if (y = a[f], a.hasOwnProperty(f) && y != null)
              switch (f) {
                case "value":
                  break;
                case "multiple":
                  Y = y;
                default:
                  i.hasOwnProperty(f) || At(
                    e,
                    t,
                    f,
                    null,
                    i,
                    y
                  );
              }
          for (o in i)
            if (f = i[o], y = a[o], i.hasOwnProperty(o) && (f != null || y != null))
              switch (o) {
                case "value":
                  b = f;
                  break;
                case "defaultValue":
                  h = f;
                  break;
                case "multiple":
                  d = f;
                default:
                  f !== y && At(
                    e,
                    t,
                    o,
                    f,
                    i,
                    y
                  );
              }
          i = h, t = d, a = Y, b != null ? Li(e, !!t, b, !1) : !!a != !!t && (i != null ? Li(e, !!t, i, !0) : Li(e, !!t, t ? [] : "", !1));
          return;
        case "textarea":
          Y = b = null;
          for (h in a)
            if (o = a[h], a.hasOwnProperty(h) && o != null && !i.hasOwnProperty(h))
              switch (h) {
                case "value":
                  break;
                case "children":
                  break;
                default:
                  At(e, t, h, null, i, o);
              }
          for (d in i)
            if (o = i[d], f = a[d], i.hasOwnProperty(d) && (o != null || f != null))
              switch (d) {
                case "value":
                  b = o;
                  break;
                case "defaultValue":
                  Y = o;
                  break;
                case "children":
                  break;
                case "dangerouslySetInnerHTML":
                  if (o != null)
                    throw Error(
                      "`dangerouslySetInnerHTML` does not make sense on <textarea>."
                    );
                  break;
                default:
                  o !== f && At(e, t, d, o, i, f);
              }
          qo(e, b, Y);
          return;
        case "option":
          for (var ue in a)
            b = a[ue], a.hasOwnProperty(ue) && b != null && !i.hasOwnProperty(ue) && (ue === "selected" ? e.selected = !1 : At(
              e,
              t,
              ue,
              null,
              i,
              b
            ));
          for (y in i)
            b = i[y], Y = a[y], i.hasOwnProperty(y) && b !== Y && (b != null || Y != null) && (y === "selected" ? e.selected = b && typeof b != "function" && typeof b != "symbol" : At(
              e,
              t,
              y,
              b,
              i,
              Y
            ));
          return;
        case "img":
        case "link":
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
        case "menuitem":
          for (var fe in a)
            b = a[fe], a.hasOwnProperty(fe) && b != null && !i.hasOwnProperty(fe) && At(
              e,
              t,
              fe,
              null,
              i,
              b
            );
          for (p in i)
            if (b = i[p], Y = a[p], i.hasOwnProperty(p) && b !== Y && (b != null || Y != null))
              switch (p) {
                case "children":
                case "dangerouslySetInnerHTML":
                  if (b != null)
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  break;
                default:
                  At(
                    e,
                    t,
                    p,
                    b,
                    i,
                    Y
                  );
              }
          return;
        default:
          if (hs(t)) {
            for (var Jt in a)
              b = a[Jt], a.hasOwnProperty(Jt) && b !== void 0 && !i.hasOwnProperty(Jt) && Lu(
                e,
                t,
                Jt,
                void 0,
                i,
                b
              );
            for (_ in i)
              b = i[_], Y = a[_], !i.hasOwnProperty(_) || b === Y || b === void 0 && Y === void 0 || Lu(
                e,
                t,
                _,
                b,
                i,
                Y
              );
            return;
          }
      }
      for (var rt in a)
        b = a[rt], a.hasOwnProperty(rt) && b != null && !i.hasOwnProperty(rt) && At(e, t, rt, null, i, b);
      for (R in i)
        b = i[R], Y = a[R], !i.hasOwnProperty(R) || b === Y || b == null && Y == null || At(e, t, R, b, i, Y);
    }
    function oo(e) {
      switch (e) {
        case "class":
          return "className";
        case "for":
          return "htmlFor";
        default:
          return e;
      }
    }
    function kn(e) {
      var t = {};
      e = e.style;
      for (var a = 0; a < e.length; a++) {
        var i = e[a];
        t[i] = e.getPropertyValue(i);
      }
      return t;
    }
    function vh(e, t, a) {
      if (t != null && typeof t != "object")
        console.error(
          "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
        );
      else {
        var i, o = i = "", f;
        for (f in t)
          if (t.hasOwnProperty(f)) {
            var d = t[f];
            d != null && typeof d != "boolean" && d !== "" && (f.indexOf("--") === 0 ? (wl(d, f), i += o + f + ":" + ("" + d).trim()) : typeof d != "number" || d === 0 || Qe.has(f) ? (wl(d, f), i += o + f.replace(he, "-$1").toLowerCase().replace(Re, "-ms-") + ":" + ("" + d).trim()) : i += o + f.replace(he, "-$1").toLowerCase().replace(Re, "-ms-") + ":" + d + "px", o = ";");
          }
        i = i || null, t = e.getAttribute("style"), t !== i && (i = Oi(i), Oi(t) !== i && (a.style = kn(e)));
      }
    }
    function Va(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (zt(i, t), e === "" + i)
              return;
        }
      fl(t, e, i, f);
    }
    function np(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null) {
        switch (typeof i) {
          case "function":
          case "symbol":
            return;
        }
        if (!i) return;
      } else
        switch (typeof i) {
          case "function":
          case "symbol":
            break;
          default:
            if (i) return;
        }
      fl(t, e, i, f);
    }
    function fo(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
            return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
            break;
          default:
            if (zt(i, a), e === "" + i)
              return;
        }
      fl(t, e, i, f);
    }
    function Sh(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
          default:
            if (isNaN(i)) return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (!isNaN(i) && (zt(i, t), e === "" + i))
              return;
        }
      fl(t, e, i, f);
    }
    function Aa(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (zt(i, t), a = Qi("" + i), e === a)
              return;
        }
      fl(t, e, i, f);
    }
    function up(e, t, a, i) {
      for (var o = {}, f = /* @__PURE__ */ new Set(), d = e.attributes, h = 0; h < d.length; h++)
        switch (d[h].name.toLowerCase()) {
          case "value":
            break;
          case "checked":
            break;
          case "selected":
            break;
          default:
            f.add(d[h].name);
        }
      if (hs(t)) {
        for (var y in a)
          if (a.hasOwnProperty(y)) {
            var p = a[y];
            if (p != null) {
              if (Ju.hasOwnProperty(y))
                typeof p != "function" && Cn(y, p);
              else if (a.suppressHydrationWarning !== !0)
                switch (y) {
                  case "children":
                    typeof p != "string" && typeof p != "number" || fl(
                      "children",
                      e.textContent,
                      p,
                      o
                    );
                    continue;
                  case "suppressContentEditableWarning":
                  case "suppressHydrationWarning":
                  case "defaultValue":
                  case "defaultChecked":
                  case "innerHTML":
                  case "ref":
                    continue;
                  case "dangerouslySetInnerHTML":
                    d = e.innerHTML, p = p ? p.__html : void 0, p != null && (p = pr(e, p), fl(
                      y,
                      d,
                      p,
                      o
                    ));
                    continue;
                  case "style":
                    f.delete(y), vh(e, p, o);
                    continue;
                  case "offsetParent":
                  case "offsetTop":
                  case "offsetLeft":
                  case "offsetWidth":
                  case "offsetHeight":
                  case "isContentEditable":
                  case "outerText":
                  case "outerHTML":
                    f.delete(y.toLowerCase()), console.error(
                      "Assignment to read-only property will result in a no-op: `%s`",
                      y
                    );
                    continue;
                  case "className":
                    f.delete("class"), d = sd(
                      e,
                      "class",
                      p
                    ), fl(
                      "className",
                      d,
                      p,
                      o
                    );
                    continue;
                  default:
                    i.context === Uo && t !== "svg" && t !== "math" ? f.delete(y.toLowerCase()) : f.delete(y), d = sd(
                      e,
                      y,
                      p
                    ), fl(
                      y,
                      d,
                      p,
                      o
                    );
                }
            }
          }
      } else
        for (p in a)
          if (a.hasOwnProperty(p) && (y = a[p], y != null)) {
            if (Ju.hasOwnProperty(p))
              typeof y != "function" && Cn(p, y);
            else if (a.suppressHydrationWarning !== !0)
              switch (p) {
                case "children":
                  typeof y != "string" && typeof y != "number" || fl(
                    "children",
                    e.textContent,
                    y,
                    o
                  );
                  continue;
                case "suppressContentEditableWarning":
                case "suppressHydrationWarning":
                case "value":
                case "checked":
                case "selected":
                case "defaultValue":
                case "defaultChecked":
                case "innerHTML":
                case "ref":
                  continue;
                case "dangerouslySetInnerHTML":
                  d = e.innerHTML, y = y ? y.__html : void 0, y != null && (y = pr(e, y), d !== y && (o[p] = { __html: d }));
                  continue;
                case "className":
                  Va(
                    e,
                    p,
                    "class",
                    y,
                    f,
                    o
                  );
                  continue;
                case "tabIndex":
                  Va(
                    e,
                    p,
                    "tabindex",
                    y,
                    f,
                    o
                  );
                  continue;
                case "style":
                  f.delete(p), vh(e, y, o);
                  continue;
                case "multiple":
                  f.delete(p), fl(
                    p,
                    e.multiple,
                    y,
                    o
                  );
                  continue;
                case "muted":
                  f.delete(p), fl(
                    p,
                    e.muted,
                    y,
                    o
                  );
                  continue;
                case "autoFocus":
                  f.delete("autofocus"), fl(
                    p,
                    e.autofocus,
                    y,
                    o
                  );
                  continue;
                case "data":
                  if (t !== "object") {
                    f.delete(p), d = e.getAttribute("data"), fl(
                      p,
                      d,
                      y,
                      o
                    );
                    continue;
                  }
                case "src":
                case "href":
                  if (!(y !== "" || t === "a" && p === "href" || t === "object" && p === "data")) {
                    console.error(
                      p === "src" ? 'An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.' : 'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',
                      p,
                      p
                    );
                    continue;
                  }
                  Aa(
                    e,
                    p,
                    p,
                    y,
                    f,
                    o
                  );
                  continue;
                case "action":
                case "formAction":
                  if (d = e.getAttribute(p), typeof y == "function") {
                    f.delete(p.toLowerCase()), p === "formAction" ? (f.delete("name"), f.delete("formenctype"), f.delete("formmethod"), f.delete("formtarget")) : (f.delete("enctype"), f.delete("method"), f.delete("target"));
                    continue;
                  } else if (d === hA) {
                    f.delete(p.toLowerCase()), fl(
                      p,
                      "function",
                      y,
                      o
                    );
                    continue;
                  }
                  Aa(
                    e,
                    p,
                    p.toLowerCase(),
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkHref":
                  Aa(
                    e,
                    p,
                    "xlink:href",
                    y,
                    f,
                    o
                  );
                  continue;
                case "contentEditable":
                  fo(
                    e,
                    p,
                    "contenteditable",
                    y,
                    f,
                    o
                  );
                  continue;
                case "spellCheck":
                  fo(
                    e,
                    p,
                    "spellcheck",
                    y,
                    f,
                    o
                  );
                  continue;
                case "draggable":
                case "autoReverse":
                case "externalResourcesRequired":
                case "focusable":
                case "preserveAlpha":
                  fo(
                    e,
                    p,
                    p,
                    y,
                    f,
                    o
                  );
                  continue;
                case "allowFullScreen":
                case "async":
                case "autoPlay":
                case "controls":
                case "default":
                case "defer":
                case "disabled":
                case "disablePictureInPicture":
                case "disableRemotePlayback":
                case "formNoValidate":
                case "hidden":
                case "loop":
                case "noModule":
                case "noValidate":
                case "open":
                case "playsInline":
                case "readOnly":
                case "required":
                case "reversed":
                case "scoped":
                case "seamless":
                case "itemScope":
                  np(
                    e,
                    p,
                    p.toLowerCase(),
                    y,
                    f,
                    o
                  );
                  continue;
                case "capture":
                case "download":
                  e: {
                    h = e;
                    var _ = d = p, R = o;
                    if (f.delete(_), h = h.getAttribute(_), h === null)
                      switch (typeof y) {
                        case "undefined":
                        case "function":
                        case "symbol":
                          break e;
                        default:
                          if (y === !1) break e;
                      }
                    else if (y != null)
                      switch (typeof y) {
                        case "function":
                        case "symbol":
                          break;
                        case "boolean":
                          if (y === !0 && h === "") break e;
                          break;
                        default:
                          if (zt(y, d), h === "" + y)
                            break e;
                      }
                    fl(
                      d,
                      h,
                      y,
                      R
                    );
                  }
                  continue;
                case "cols":
                case "rows":
                case "size":
                case "span":
                  e: {
                    if (h = e, _ = d = p, R = o, f.delete(_), h = h.getAttribute(_), h === null)
                      switch (typeof y) {
                        case "undefined":
                        case "function":
                        case "symbol":
                        case "boolean":
                          break e;
                        default:
                          if (isNaN(y) || 1 > y) break e;
                      }
                    else if (y != null)
                      switch (typeof y) {
                        case "function":
                        case "symbol":
                        case "boolean":
                          break;
                        default:
                          if (!(isNaN(y) || 1 > y) && (zt(y, d), h === "" + y))
                            break e;
                      }
                    fl(
                      d,
                      h,
                      y,
                      R
                    );
                  }
                  continue;
                case "rowSpan":
                  Sh(
                    e,
                    p,
                    "rowspan",
                    y,
                    f,
                    o
                  );
                  continue;
                case "start":
                  Sh(
                    e,
                    p,
                    p,
                    y,
                    f,
                    o
                  );
                  continue;
                case "xHeight":
                  Va(
                    e,
                    p,
                    "x-height",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkActuate":
                  Va(
                    e,
                    p,
                    "xlink:actuate",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkArcrole":
                  Va(
                    e,
                    p,
                    "xlink:arcrole",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkRole":
                  Va(
                    e,
                    p,
                    "xlink:role",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkShow":
                  Va(
                    e,
                    p,
                    "xlink:show",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkTitle":
                  Va(
                    e,
                    p,
                    "xlink:title",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkType":
                  Va(
                    e,
                    p,
                    "xlink:type",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xmlBase":
                  Va(
                    e,
                    p,
                    "xml:base",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xmlLang":
                  Va(
                    e,
                    p,
                    "xml:lang",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xmlSpace":
                  Va(
                    e,
                    p,
                    "xml:space",
                    y,
                    f,
                    o
                  );
                  continue;
                case "inert":
                  y !== "" || xv[p] || (xv[p] = !0, console.error(
                    "Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",
                    p
                  )), np(
                    e,
                    p,
                    p,
                    y,
                    f,
                    o
                  );
                  continue;
                default:
                  if (!(2 < p.length) || p[0] !== "o" && p[0] !== "O" || p[1] !== "n" && p[1] !== "N") {
                    h = wm(p), d = !1, i.context === Uo && t !== "svg" && t !== "math" ? f.delete(h.toLowerCase()) : (_ = p.toLowerCase(), _ = Ph.hasOwnProperty(
                      _
                    ) && Ph[_] || null, _ !== null && _ !== p && (d = !0, f.delete(_)), f.delete(h));
                    e: if (_ = e, R = h, h = y, Da(R))
                      if (_.hasAttribute(R))
                        _ = _.getAttribute(
                          R
                        ), zt(
                          h,
                          R
                        ), h = _ === "" + h ? h : _;
                      else {
                        switch (typeof h) {
                          case "function":
                          case "symbol":
                            break e;
                          case "boolean":
                            if (_ = R.toLowerCase().slice(0, 5), _ !== "data-" && _ !== "aria-")
                              break e;
                        }
                        h = h === void 0 ? void 0 : null;
                      }
                    else h = void 0;
                    d || fl(
                      p,
                      h,
                      y,
                      o
                    );
                  }
              }
          }
      return 0 < f.size && a.suppressHydrationWarning !== !0 && Qa(e, f, o), Object.keys(o).length === 0 ? null : o;
    }
    function Za(e, t) {
      switch (e.length) {
        case 0:
          return "";
        case 1:
          return e[0];
        case 2:
          return e[0] + " " + t + " " + e[1];
        default:
          return e.slice(0, -1).join(", ") + ", " + t + " " + e[e.length - 1];
      }
    }
    function ip(e) {
      switch (e) {
        case "css":
        case "script":
        case "font":
        case "img":
        case "image":
        case "input":
        case "link":
          return !0;
        default:
          return !1;
      }
    }
    function pg() {
      if (typeof performance.getEntriesByType == "function") {
        for (var e = 0, t = 0, a = performance.getEntriesByType("resource"), i = 0; i < a.length; i++) {
          var o = a[i], f = o.transferSize, d = o.initiatorType, h = o.duration;
          if (f && h && ip(d)) {
            for (d = 0, h = o.responseEnd, i += 1; i < a.length; i++) {
              var y = a[i], p = y.startTime;
              if (p > h) break;
              var _ = y.transferSize, R = y.initiatorType;
              _ && ip(R) && (y = y.responseEnd, d += _ * (y < h ? 1 : (h - p) / (y - p)));
            }
            if (--i, t += 8 * (f + d) / (o.duration / 1e3), e++, 10 < e) break;
          }
        }
        if (0 < e) return t / e / 1e6;
      }
      return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
    }
    function bh(e) {
      return e.nodeType === 9 ? e : e.ownerDocument;
    }
    function zi(e) {
      switch (e) {
        case nt:
          return Mm;
        case Fe:
          return Nv;
        default:
          return Uo;
      }
    }
    function vr(e, t) {
      if (e === Uo)
        switch (t) {
          case "svg":
            return Mm;
          case "math":
            return Nv;
          default:
            return Uo;
        }
      return e === Mm && t === "foreignObject" ? Uo : e;
    }
    function Sr(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function yf() {
      var e = window.event;
      return e && e.type === "popstate" ? e === mS ? !1 : (mS = e, !0) : (mS = null, !1);
    }
    function pf() {
      var e = window.event;
      return e && e !== E0 ? e.type : null;
    }
    function gf() {
      var e = window.event;
      return e && e !== E0 ? e.timeStamp : -1.1;
    }
    function gg(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function vg(e, t, a) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          break;
        case "img":
          a.src ? e.src = a.src : a.srcSet && (e.srcset = a.srcSet);
      }
    }
    function Eh() {
    }
    function cp(e, t, a, i) {
      dc(e, t, a, i), e[sa] = i;
    }
    function Sg(e) {
      ou(e, "");
    }
    function t1(e, t, a) {
      e.nodeValue = a;
    }
    function bg(e) {
      if (!e.__reactWarnedAboutChildrenConflict) {
        var t = e[sa] || null;
        if (t !== null) {
          var a = ae(e);
          a !== null && (typeof t.children == "string" || typeof t.children == "number" ? (e.__reactWarnedAboutChildrenConflict = !0, se(a, function() {
            console.error(
              'Cannot use a ref on a React element as a container to `createRoot` or `createPortal` if that element also sets "children" text content using React. It should be a leaf with no children. Otherwise it\'s ambiguous which children should be used.'
            );
          })) : t.dangerouslySetInnerHTML != null && (e.__reactWarnedAboutChildrenConflict = !0, se(a, function() {
            console.error(
              'Cannot use a ref on a React element as a container to `createRoot` or `createPortal` if that element also sets "dangerouslySetInnerHTML" using React. It should be a leaf with no children. Otherwise it\'s ambiguous which children should be used.'
            );
          })));
        }
      }
    }
    function _i(e) {
      return e === "head";
    }
    function Eg(e, t) {
      e.removeChild(t);
    }
    function vf(e, t) {
      (e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e).removeChild(t);
    }
    function br(e, t) {
      var a = t, i = 0;
      do {
        var o = a.nextSibling;
        if (e.removeChild(a), o && o.nodeType === 8)
          if (a = o.data, a === b0 || a === Hv) {
            if (i === 0) {
              e.removeChild(o), Of(t);
              return;
            }
            i--;
          } else if (a === S0 || a === kf || a === id || a === Rm || a === ud)
            i++;
          else if (a === yA)
            Ar(
              e.ownerDocument.documentElement
            );
          else if (a === gA) {
            a = e.ownerDocument.head, Ar(a);
            for (var f = a.firstChild; f; ) {
              var d = f.nextSibling, h = f.nodeName;
              f[Yr] || h === "SCRIPT" || h === "STYLE" || h === "LINK" && f.rel.toLowerCase() === "stylesheet" || a.removeChild(f), f = d;
            }
          } else
            a === pA && Ar(e.ownerDocument.body);
        a = o;
      } while (a);
      Of(t);
    }
    function op(e, t) {
      var a = e;
      e = 0;
      do {
        var i = a.nextSibling;
        if (a.nodeType === 1 ? t ? (a._stashedDisplay = a.style.display, a.style.display = "none") : (a.style.display = a._stashedDisplay || "", a.getAttribute("style") === "" && a.removeAttribute("style")) : a.nodeType === 3 && (t ? (a._stashedText = a.nodeValue, a.nodeValue = "") : a.nodeValue = a._stashedText || ""), i && i.nodeType === 8)
          if (a = i.data, a === b0) {
            if (e === 0) break;
            e--;
          } else
            a !== S0 && a !== kf && a !== id && a !== Rm || e++;
        a = i;
      } while (a);
    }
    function Tg(e) {
      op(e, !0);
    }
    function Ag(e) {
      e = e.style, typeof e.setProperty == "function" ? e.setProperty("display", "none", "important") : e.display = "none";
    }
    function Og(e) {
      e.nodeValue = "";
    }
    function zg(e) {
      op(e, !1);
    }
    function _g(e, t) {
      t = t[vA], t = t != null && t.hasOwnProperty("display") ? t.display : null, e.style.display = t == null || typeof t == "boolean" ? "" : ("" + t).trim();
    }
    function Th(e, t) {
      e.nodeValue = t;
    }
    function Ah(e) {
      var t = e.firstChild;
      for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
        var a = t;
        switch (t = t.nextSibling, a.nodeName) {
          case "HTML":
          case "HEAD":
          case "BODY":
            Ah(a), M(a);
            continue;
          case "SCRIPT":
          case "STYLE":
            continue;
          case "LINK":
            if (a.rel.toLowerCase() === "stylesheet") continue;
        }
        e.removeChild(a);
      }
    }
    function Dg(e, t, a, i) {
      for (; e.nodeType === 1; ) {
        var o = a;
        if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
          if (!i && (e.nodeName !== "INPUT" || e.type !== "hidden"))
            break;
        } else if (i) {
          if (!e[Yr])
            switch (t) {
              case "meta":
                if (!e.hasAttribute("itemprop")) break;
                return e;
              case "link":
                if (f = e.getAttribute("rel"), f === "stylesheet" && e.hasAttribute("data-precedence"))
                  break;
                if (f !== o.rel || e.getAttribute("href") !== (o.href == null || o.href === "" ? null : o.href) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin) || e.getAttribute("title") !== (o.title == null ? null : o.title))
                  break;
                return e;
              case "style":
                if (e.hasAttribute("data-precedence")) break;
                return e;
              case "script":
                if (f = e.getAttribute("src"), (f !== (o.src == null ? null : o.src) || e.getAttribute("type") !== (o.type == null ? null : o.type) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin)) && f && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                  break;
                return e;
              default:
                return e;
            }
        } else if (t === "input" && e.type === "hidden") {
          zt(o.name, "name");
          var f = o.name == null ? null : "" + o.name;
          if (o.type === "hidden" && e.getAttribute("name") === f)
            return e;
        } else return e;
        if (e = on(e.nextSibling), e === null) break;
      }
      return null;
    }
    function Mt(e, t, a) {
      if (t === "") return null;
      for (; e.nodeType !== 3; )
        if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = on(e.nextSibling), e === null)) return null;
      return e;
    }
    function Oh(e, t) {
      for (; e.nodeType !== 8; )
        if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = on(e.nextSibling), e === null)) return null;
      return e;
    }
    function fp(e) {
      return e.data === kf || e.data === id;
    }
    function zh(e) {
      return e.data === Rm || e.data === kf && e.ownerDocument.readyState !== dE;
    }
    function l1(e, t) {
      var a = e.ownerDocument;
      if (e.data === id)
        e._reactRetry = t;
      else if (e.data !== kf || a.readyState !== dE)
        t();
      else {
        var i = function() {
          t(), a.removeEventListener("DOMContentLoaded", i);
        };
        a.addEventListener("DOMContentLoaded", i), e._reactRetry = i;
      }
    }
    function on(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
          if (t = e.data, t === S0 || t === Rm || t === kf || t === id || t === ud || t === rS || t === rE)
            break;
          if (t === b0 || t === Hv)
            return null;
        }
      }
      return e;
    }
    function Rg(e) {
      if (e.nodeType === 1) {
        for (var t = e.nodeName.toLowerCase(), a = {}, i = e.attributes, o = 0; o < i.length; o++) {
          var f = i[o];
          a[oo(f.name)] = f.name.toLowerCase() === "style" ? kn(e) : f.value;
        }
        return { type: t, props: a };
      }
      return e.nodeType === 8 ? e.data === ud ? { type: "Activity", props: {} } : { type: "Suspense", props: {} } : e.nodeValue;
    }
    function Er(e, t, a) {
      return a === null || a[mA] !== !0 ? (e.nodeValue === t ? e = null : (t = Oi(t), e = Oi(e.nodeValue) === t ? null : e.nodeValue), e) : null;
    }
    function hc(e) {
      e = e.nextSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var a = e.data;
          if (a === b0 || a === Hv) {
            if (t === 0)
              return on(e.nextSibling);
            t--;
          } else
            a !== S0 && a !== Rm && a !== kf && a !== id && a !== ud || t++;
        }
        e = e.nextSibling;
      }
      return null;
    }
    function _h(e) {
      e = e.previousSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var a = e.data;
          if (a === S0 || a === Rm || a === kf || a === id || a === ud) {
            if (t === 0) return e;
            t--;
          } else
            a !== b0 && a !== Hv || t++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    function Dh(e) {
      Of(e);
    }
    function sp(e) {
      Of(e);
    }
    function mc(e) {
      Of(e);
    }
    function Wn(e, t, a, i, o) {
      switch (o && yd(e, i.ancestorInfo), t = bh(a), e) {
        case "html":
          if (e = t.documentElement, !e)
            throw Error(
              "React expected an <html> element (document.documentElement) to exist in the Document but one was not found. React never removes the documentElement for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return e;
        case "head":
          if (e = t.head, !e)
            throw Error(
              "React expected a <head> element (document.head) to exist in the Document but one was not found. React never removes the head for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return e;
        case "body":
          if (e = t.body, !e)
            throw Error(
              "React expected a <body> element (document.body) to exist in the Document but one was not found. React never removes the body for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return e;
        default:
          throw Error(
            "resolveSingletonInstance was called with an element type that is not supported. This is a bug in React."
          );
      }
    }
    function Tr(e, t, a, i) {
      if (!a[jn] && ae(a)) {
        var o = a.tagName.toLowerCase();
        console.error(
          "You are mounting a new %s component when a previous one has not first unmounted. It is an error to render more than one %s component at a time and attributes and children of these components will likely fail in unpredictable ways. Please only render a single instance of <%s> and if you need to mount a new one, ensure any previous ones have unmounted first.",
          o,
          o,
          o
        );
      }
      switch (e) {
        case "html":
        case "head":
        case "body":
          break;
        default:
          console.error(
            "acquireSingletonInstance was called with an element type that is not supported. This is a bug in React."
          );
      }
      for (o = a.attributes; o.length; )
        a.removeAttributeNode(o[0]);
      ft(a, e, t), a[Il] = i, a[sa] = t;
    }
    function Ar(e) {
      for (var t = e.attributes; t.length; )
        e.removeAttributeNode(t[0]);
      M(e);
    }
    function Or(e) {
      return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
    }
    function rp(e, t, a) {
      var i = Cm;
      if (i && typeof t == "string" && t) {
        var o = Vt(t);
        o = 'link[rel="' + e + '"][href="' + o + '"]', typeof a == "string" && (o += '[crossorigin="' + a + '"]'), vE.has(o) || (vE.add(o), e = { rel: e, crossOrigin: a, href: t }, i.querySelector(o) === null && (t = i.createElement("link"), ft(t, "link", e), pe(t), i.head.appendChild(t)));
      }
    }
    function dp(e, t, a, i) {
      var o = (o = xn.current) ? Or(o) : null;
      if (!o)
        throw Error(
          '"resourceRoot" was expected to exist. This is a bug in React.'
        );
      switch (e) {
        case "meta":
        case "title":
          return null;
        case "style":
          return typeof a.precedence == "string" && typeof a.href == "string" ? (a = Sf(a.href), t = He(o).hoistableStyles, i = t.get(a), i || (i = {
            type: "style",
            instance: null,
            count: 0,
            state: null
          }, t.set(a, i)), i) : { type: "void", instance: null, count: 0, state: null };
        case "link":
          if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
            e = Sf(a.href);
            var f = He(o).hoistableStyles, d = f.get(e);
            if (!d && (o = o.ownerDocument || o, d = {
              type: "stylesheet",
              instance: null,
              count: 0,
              state: { loading: od, preload: null }
            }, f.set(e, d), (f = o.querySelector(
              so(e)
            )) && !f._p && (d.instance = f, d.state.loading = T0 | ai), !ni.has(e))) {
              var h = {
                rel: "preload",
                as: "style",
                href: a.href,
                crossOrigin: a.crossOrigin,
                integrity: a.integrity,
                media: a.media,
                hrefLang: a.hrefLang,
                referrerPolicy: a.referrerPolicy
              };
              ni.set(e, h), f || Mg(
                o,
                e,
                h,
                d.state
              );
            }
            if (t && i === null)
              throw a = `

  - ` + zr(t) + `
  + ` + zr(a), Error(
                "Expected <link> not to update to be updated to a stylesheet with precedence. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key." + a
              );
            return d;
          }
          if (t && i !== null)
            throw a = `

  - ` + zr(t) + `
  + ` + zr(a), Error(
              "Expected stylesheet with precedence to not be updated to a different kind of <link>. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key." + a
            );
          return null;
        case "script":
          return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (a = bf(a), t = He(o).hoistableScripts, i = t.get(a), i || (i = {
            type: "script",
            instance: null,
            count: 0,
            state: null
          }, t.set(a, i)), i) : { type: "void", instance: null, count: 0, state: null };
        default:
          throw Error(
            'getResource encountered a type it did not expect: "' + e + '". this is a bug in React.'
          );
      }
    }
    function zr(e) {
      var t = 0, a = "<link";
      return typeof e.rel == "string" ? (t++, a += ' rel="' + e.rel + '"') : In.call(e, "rel") && (t++, a += ' rel="' + (e.rel === null ? "null" : "invalid type " + typeof e.rel) + '"'), typeof e.href == "string" ? (t++, a += ' href="' + e.href + '"') : In.call(e, "href") && (t++, a += ' href="' + (e.href === null ? "null" : "invalid type " + typeof e.href) + '"'), typeof e.precedence == "string" ? (t++, a += ' precedence="' + e.precedence + '"') : In.call(e, "precedence") && (t++, a += " precedence={" + (e.precedence === null ? "null" : "invalid type " + typeof e.precedence) + "}"), Object.getOwnPropertyNames(e).length > t && (a += " ..."), a + " />";
    }
    function Sf(e) {
      return 'href="' + Vt(e) + '"';
    }
    function so(e) {
      return 'link[rel="stylesheet"][' + e + "]";
    }
    function hp(e) {
      return Ze({}, e, {
        "data-precedence": e.precedence,
        precedence: null
      });
    }
    function Mg(e, t, a, i) {
      e.querySelector(
        'link[rel="preload"][as="style"][' + t + "]"
      ) ? i.loading = T0 : (t = e.createElement("link"), i.preload = t, t.addEventListener("load", function() {
        return i.loading |= T0;
      }), t.addEventListener("error", function() {
        return i.loading |= pE;
      }), ft(t, "link", a), pe(t), e.head.appendChild(t));
    }
    function bf(e) {
      return '[src="' + Vt(e) + '"]';
    }
    function ro(e) {
      return "script[async]" + e;
    }
    function Rh(e, t, a) {
      if (t.count++, t.instance === null)
        switch (t.type) {
          case "style":
            var i = e.querySelector(
              'style[data-href~="' + Vt(a.href) + '"]'
            );
            if (i)
              return t.instance = i, pe(i), i;
            var o = Ze({}, a, {
              "data-href": a.href,
              "data-precedence": a.precedence,
              href: null,
              precedence: null
            });
            return i = (e.ownerDocument || e).createElement("style"), pe(i), ft(i, "style", o), Mh(i, a.precedence, e), t.instance = i;
          case "stylesheet":
            o = Sf(a.href);
            var f = e.querySelector(
              so(o)
            );
            if (f)
              return t.state.loading |= ai, t.instance = f, pe(f), f;
            i = hp(a), (o = ni.get(o)) && mp(i, o), f = (e.ownerDocument || e).createElement("link"), pe(f);
            var d = f;
            return d._p = new Promise(function(h, y) {
              d.onload = h, d.onerror = y;
            }), ft(f, "link", i), t.state.loading |= ai, Mh(f, a.precedence, e), t.instance = f;
          case "script":
            return f = bf(a.src), (o = e.querySelector(
              ro(f)
            )) ? (t.instance = o, pe(o), o) : (i = a, (o = ni.get(f)) && (i = Ze({}, a), ho(i, o)), e = e.ownerDocument || e, o = e.createElement("script"), pe(o), ft(o, "link", i), e.head.appendChild(o), t.instance = o);
          case "void":
            return null;
          default:
            throw Error(
              'acquireResource encountered a resource type it did not expect: "' + t.type + '". this is a bug in React.'
            );
        }
      else
        t.type === "stylesheet" && (t.state.loading & ai) === od && (i = t.instance, t.state.loading |= ai, Mh(i, a.precedence, e));
      return t.instance;
    }
    function Mh(e, t, a) {
      for (var i = a.querySelectorAll(
        'link[rel="stylesheet"][data-precedence],style[data-precedence]'
      ), o = i.length ? i[i.length - 1] : null, f = o, d = 0; d < i.length; d++) {
        var h = i[d];
        if (h.dataset.precedence === t) f = h;
        else if (f !== o) break;
      }
      f ? f.parentNode.insertBefore(e, f.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(e, t.firstChild));
    }
    function mp(e, t) {
      e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
    }
    function ho(e, t) {
      e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
    }
    function Cg(e, t, a) {
      if (jv === null) {
        var i = /* @__PURE__ */ new Map(), o = jv = /* @__PURE__ */ new Map();
        o.set(a, i);
      } else
        o = jv, i = o.get(a), i || (i = /* @__PURE__ */ new Map(), o.set(a, i));
      if (i.has(e)) return i;
      for (i.set(e, null), a = a.getElementsByTagName(e), o = 0; o < a.length; o++) {
        var f = a[o];
        if (!(f[Yr] || f[Il] || e === "link" && f.getAttribute("rel") === "stylesheet") && f.namespaceURI !== nt) {
          var d = f.getAttribute(t) || "";
          d = e + d;
          var h = i.get(d);
          h ? h.push(f) : i.set(d, [f]);
        }
      }
      return i;
    }
    function yp(e, t, a) {
      e = e.ownerDocument || e, e.head.insertBefore(
        a,
        t === "title" ? e.querySelector("head > title") : null
      );
    }
    function at(e, t, a) {
      var i = !a.ancestorInfo.containerTagInScope;
      if (a.context === Mm || t.itemProp != null)
        return !i || t.itemProp == null || e !== "meta" && e !== "title" && e !== "style" && e !== "link" && e !== "script" || console.error(
          "Cannot render a <%s> outside the main document if it has an `itemProp` prop. `itemProp` suggests the tag belongs to an `itemScope` which can appear anywhere in the DOM. If you were intending for React to hoist this <%s> remove the `itemProp` prop. Otherwise, try moving this tag into the <head> or <body> of the Document.",
          e,
          e
        ), !1;
      switch (e) {
        case "meta":
        case "title":
          return !0;
        case "style":
          if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") {
            i && console.error(
              'Cannot render a <style> outside the main document without knowing its precedence and a unique href key. React can hoist and deduplicate <style> tags if you provide a `precedence` prop along with an `href` prop that does not conflict with the `href` values used in any other hoisted <style> or <link rel="stylesheet" ...> tags.  Note that hoisting <style> tags is considered an advanced feature that most will not use directly. Consider moving the <style> tag to the <head> or consider adding a `precedence="default"` and `href="some unique resource identifier"`.'
            );
            break;
          }
          return !0;
        case "link":
          if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) {
            if (t.rel === "stylesheet" && typeof t.precedence == "string") {
              e = t.href;
              var o = t.onError, f = t.disabled;
              a = [], t.onLoad && a.push("`onLoad`"), o && a.push("`onError`"), f != null && a.push("`disabled`"), o = Za(a, "and"), o += a.length === 1 ? " prop" : " props", f = a.length === 1 ? "an " + o : "the " + o, a.length && console.error(
                'React encountered a <link rel="stylesheet" href="%s" ... /> with a `precedence` prop that also included %s. The presence of loading and error handlers indicates an intent to manage the stylesheet loading state from your from your Component code and React will not hoist or deduplicate this stylesheet. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop remove the %s, otherwise remove the `precedence` prop.',
                e,
                f,
                o
              );
            }
            i && (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" ? console.error(
              "Cannot render a <link> outside the main document without a `rel` and `href` prop. Try adding a `rel` and/or `href` prop to this <link> or moving the link into the <head> tag"
            ) : (t.onError || t.onLoad) && console.error(
              "Cannot render a <link> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."
            ));
            break;
          }
          return t.rel === "stylesheet" ? (e = t.precedence, t = t.disabled, typeof e != "string" && i && console.error(
            'Cannot render a <link rel="stylesheet" /> outside the main document without knowing its precedence. Consider adding precedence="default" or moving it into the root <head> tag.'
          ), typeof e == "string" && t == null) : !0;
        case "script":
          if (e = t.async && typeof t.async != "function" && typeof t.async != "symbol", !e || t.onLoad || t.onError || !t.src || typeof t.src != "string") {
            i && (e ? t.onLoad || t.onError ? console.error(
              "Cannot render a <script> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."
            ) : console.error(
              "Cannot render a <script> outside the main document without `async={true}` and a non-empty `src` prop. Ensure there is a valid `src` and either make the script async or move it into the root <head> tag or somewhere in the <body>."
            ) : console.error(
              'Cannot render a sync or defer <script> outside the main document without knowing its order. Try adding async="" or moving it into the root <head> tag.'
            ));
            break;
          }
          return !0;
        case "noscript":
        case "template":
          i && console.error(
            "Cannot render <%s> outside the main document. Try moving it into the root <head> tag.",
            e
          );
      }
      return !1;
    }
    function Ch(e) {
      return !(e.type === "stylesheet" && (e.state.loading & gE) === od);
    }
    function Uh(e, t, a, i) {
      if (a.type === "stylesheet" && (typeof i.media != "string" || matchMedia(i.media).matches !== !1) && (a.state.loading & ai) === od) {
        if (a.instance === null) {
          var o = Sf(i.href), f = t.querySelector(
            so(o)
          );
          if (f) {
            t = f._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = _r.bind(e), t.then(e, e)), a.state.loading |= ai, a.instance = f, pe(f);
            return;
          }
          f = t.ownerDocument || t, i = hp(i), (o = ni.get(o)) && mp(i, o), f = f.createElement("link"), pe(f);
          var d = f;
          d._p = new Promise(function(h, y) {
            d.onload = h, d.onerror = y;
          }), ft(f, "link", i), a.instance = f;
        }
        e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(a, t), (t = a.state.preload) && (a.state.loading & gE) === od && (e.count++, a = _r.bind(e), t.addEventListener("load", a), t.addEventListener("error", a));
      }
    }
    function pp(e, t) {
      return e.stylesheets && e.count === 0 && Ef(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(a) {
        var i = setTimeout(function() {
          if (e.stylesheets && Ef(e, e.stylesheets), e.unsuspend) {
            var f = e.unsuspend;
            e.unsuspend = null, f();
          }
        }, EA + t);
        0 < e.imgBytes && pS === 0 && (pS = 125 * pg() * AA);
        var o = setTimeout(
          function() {
            if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && Ef(e, e.stylesheets), e.unsuspend)) {
              var f = e.unsuspend;
              e.unsuspend = null, f();
            }
          },
          (e.imgBytes > pS ? 50 : TA) + t
        );
        return e.unsuspend = a, function() {
          e.unsuspend = null, clearTimeout(i), clearTimeout(o);
        };
      } : null;
    }
    function _r() {
      if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
        if (this.stylesheets)
          Ef(this, this.stylesheets);
        else if (this.unsuspend) {
          var e = this.unsuspend;
          this.unsuspend = null, e();
        }
      }
    }
    function Ef(e, t) {
      e.stylesheets = null, e.unsuspend !== null && (e.count++, Bv = /* @__PURE__ */ new Map(), t.forEach(Dr, e), Bv = null, _r.call(e));
    }
    function Dr(e, t) {
      if (!(t.state.loading & ai)) {
        var a = Bv.get(e);
        if (a) var i = a.get(gS);
        else {
          a = /* @__PURE__ */ new Map(), Bv.set(e, a);
          for (var o = e.querySelectorAll(
            "link[data-precedence],style[data-precedence]"
          ), f = 0; f < o.length; f++) {
            var d = o[f];
            (d.nodeName === "LINK" || d.getAttribute("media") !== "not all") && (a.set(d.dataset.precedence, d), i = d);
          }
          i && a.set(gS, i);
        }
        o = t.instance, d = o.getAttribute("data-precedence"), f = a.get(d) || i, f === i && a.set(gS, o), a.set(d, o), this.count++, i = _r.bind(this), o.addEventListener("load", i), o.addEventListener("error", i), f ? f.parentNode.insertBefore(o, f.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(o, e.firstChild)), t.state.loading |= ai;
      }
    }
    function xh(e, t, a, i, o, f, d, h, y) {
      for (this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = cd, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = wi(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = wi(0), this.hiddenUpdates = wi(null), this.identifierPrefix = i, this.onUncaughtError = o, this.onCaughtError = f, this.onRecoverableError = d, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = y, this.incompleteTransitions = /* @__PURE__ */ new Map(), this.passiveEffectDuration = this.effectDuration = -0, this.memoizedUpdaters = /* @__PURE__ */ new Set(), e = this.pendingUpdatersLaneMap = [], t = 0; 31 > t; t++) e.push(/* @__PURE__ */ new Set());
      this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
    }
    function Ug(e, t, a, i, o, f, d, h, y, p, _, R) {
      return e = new xh(
        e,
        t,
        a,
        d,
        y,
        p,
        _,
        R,
        h
      ), t = KT, f === !0 && (t |= Ka | Ui), t |= Ke, f = N(3, null, null, t), e.current = f, f.stateNode = e, t = uy(), wc(t), e.pooledCache = t, wc(t), f.memoizedState = {
        element: i,
        isDehydrated: a,
        cache: t
      }, Tu(f), e;
    }
    function gp(e) {
      return e ? (e = Nf, e) : Nf;
    }
    function vp(e, t, a, i, o, f) {
      if (fa && typeof fa.onScheduleFiberRoot == "function")
        try {
          fa.onScheduleFiberRoot(Ci, i, a);
        } catch (d) {
          Zu || (Zu = !0, console.error(
            "React instrumentation encountered an error: %o",
            d
          ));
        }
      o = gp(o), i.context === null ? i.context = o : i.pendingContext = o, Hn && fn !== null && !TE && (TE = !0, console.error(
        `Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`,
        re(fn) || "Unknown"
      )), i = Au(t), i.payload = { element: a }, f = f === void 0 ? null : f, f !== null && (typeof f != "function" && console.error(
        "Expected the last optional `callback` argument to be a function. Instead received: %s.",
        f
      ), i.callback = f), a = ga(e, i, t), a !== null && (Gn(t, "root.render()", null), tl(a, e, t), ko(a, e, t));
    }
    function xg(e, t) {
      if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var a = e.retryLane;
        e.retryLane = a !== 0 && a < t ? a : t;
      }
    }
    function Hh(e, t) {
      xg(e, t), (e = e.alternate) && xg(e, t);
    }
    function Sp(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = Ll(e, 67108864);
        t !== null && tl(t, e, 67108864), Hh(e, 67108864);
      }
    }
    function Ct(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = Kl(e);
        t = gl(t);
        var a = Ll(e, t);
        a !== null && tl(a, e, t), Hh(e, t);
      }
    }
    function bp() {
      return fn;
    }
    function $l(e, t, a, i) {
      var o = G.T;
      G.T = null;
      var f = Ot.p;
      try {
        Ot.p = _l, Nh(e, t, a, i);
      } finally {
        Ot.p = f, G.T = o;
      }
    }
    function a1(e, t, a, i) {
      var o = G.T;
      G.T = null;
      var f = Ot.p;
      try {
        Ot.p = Fl, Nh(e, t, a, i);
      } finally {
        Ot.p = f, G.T = o;
      }
    }
    function Nh(e, t, a, i) {
      if (qv) {
        var o = Ep(i);
        if (o === null)
          $t(
            e,
            t,
            i,
            wv,
            a
          ), Mr(e, i);
        else if (Hg(
          o,
          e,
          t,
          a,
          i
        ))
          i.stopPropagation();
        else if (Mr(e, i), t & 4 && -1 < zA.indexOf(e)) {
          for (; o !== null; ) {
            var f = ae(o);
            if (f !== null)
              switch (f.tag) {
                case 3:
                  if (f = f.stateNode, f.current.memoizedState.isDehydrated) {
                    var d = iu(f.pendingLanes);
                    if (d !== 0) {
                      var h = f;
                      for (h.pendingLanes |= 2, h.entangledLanes |= 2; d; ) {
                        var y = 1 << 31 - Wl(d);
                        h.entanglements[1] |= y, d &= ~y;
                      }
                      Ta(f), (pt & (ea | au)) === ha && (Ev = rl() + Wb, mf(0));
                    }
                  }
                  break;
                case 31:
                case 13:
                  h = Ll(f, 2), h !== null && tl(h, f, 2), ao(), Hh(f, 2);
              }
            if (f = Ep(i), f === null && $t(
              e,
              t,
              i,
              wv,
              a
            ), f === o) break;
            o = f;
          }
          o !== null && i.stopPropagation();
        } else
          $t(
            e,
            t,
            i,
            null,
            a
          );
      }
    }
    function Ep(e) {
      return e = ms(e), Rr(e);
    }
    function Rr(e) {
      if (wv = null, e = P(e), e !== null) {
        var t = ht(e);
        if (t === null) e = null;
        else {
          var a = t.tag;
          if (a === 13) {
            if (e = jt(t), e !== null) return e;
            e = null;
          } else if (a === 31) {
            if (e = It(t), e !== null) return e;
            e = null;
          } else if (a === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
              return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
          } else t !== e && (e = null);
        }
      }
      return wv = e, null;
    }
    function jh(e) {
      switch (e) {
        case "beforetoggle":
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "toggle":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return _l;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return Fl;
        case "message":
          switch (o1()) {
            case Kh:
              return _l;
            case $h:
              return Fl;
            case go:
            case qg:
              return sn;
            case jr:
              return yc;
            default:
              return sn;
          }
        default:
          return sn;
      }
    }
    function Mr(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          Wf = null;
          break;
        case "dragenter":
        case "dragleave":
          Ff = null;
          break;
        case "mouseover":
        case "mouseout":
          If = null;
          break;
        case "pointerover":
        case "pointerout":
          O0.delete(t.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          z0.delete(t.pointerId);
      }
    }
    function Tf(e, t, a, i, o, f) {
      return e === null || e.nativeEvent !== f ? (e = {
        blockedOn: t,
        domEventName: a,
        eventSystemFlags: i,
        nativeEvent: f,
        targetContainers: [o]
      }, t !== null && (t = ae(t), t !== null && Sp(t)), e) : (e.eventSystemFlags |= i, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
    }
    function Hg(e, t, a, i, o) {
      switch (t) {
        case "focusin":
          return Wf = Tf(
            Wf,
            e,
            t,
            a,
            i,
            o
          ), !0;
        case "dragenter":
          return Ff = Tf(
            Ff,
            e,
            t,
            a,
            i,
            o
          ), !0;
        case "mouseover":
          return If = Tf(
            If,
            e,
            t,
            a,
            i,
            o
          ), !0;
        case "pointerover":
          var f = o.pointerId;
          return O0.set(
            f,
            Tf(
              O0.get(f) || null,
              e,
              t,
              a,
              i,
              o
            )
          ), !0;
        case "gotpointercapture":
          return f = o.pointerId, z0.set(
            f,
            Tf(
              z0.get(f) || null,
              e,
              t,
              a,
              i,
              o
            )
          ), !0;
      }
      return !1;
    }
    function Bh(e) {
      var t = P(e.target);
      if (t !== null) {
        var a = ht(t);
        if (a !== null) {
          if (t = a.tag, t === 13) {
            if (t = jt(a), t !== null) {
              e.blockedOn = t, g(e.priority, function() {
                Ct(a);
              });
              return;
            }
          } else if (t === 31) {
            if (t = It(a), t !== null) {
              e.blockedOn = t, g(e.priority, function() {
                Ct(a);
              });
              return;
            }
          } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
            e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
            return;
          }
        }
      }
      e.blockedOn = null;
    }
    function Af(e) {
      if (e.blockedOn !== null) return !1;
      for (var t = e.targetContainers; 0 < t.length; ) {
        var a = Ep(e.nativeEvent);
        if (a === null) {
          a = e.nativeEvent;
          var i = new a.constructor(
            a.type,
            a
          ), o = i;
          jp !== null && console.error(
            "Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."
          ), jp = o, a.target.dispatchEvent(i), jp === null && console.error(
            "Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."
          ), jp = null;
        } else
          return t = ae(a), t !== null && Sp(t), e.blockedOn = a, !1;
        t.shift();
      }
      return !0;
    }
    function Ng(e, t, a) {
      Af(e) && a.delete(t);
    }
    function jg() {
      vS = !1, Wf !== null && Af(Wf) && (Wf = null), Ff !== null && Af(Ff) && (Ff = null), If !== null && Af(If) && (If = null), O0.forEach(Ng), z0.forEach(Ng);
    }
    function Yh(e, t) {
      e.blockedOn === t && (e.blockedOn = null, vS || (vS = !0, sl.unstable_scheduleCallback(
        sl.unstable_NormalPriority,
        jg
      )));
    }
    function Tp(e) {
      Gv !== e && (Gv = e, sl.unstable_scheduleCallback(
        sl.unstable_NormalPriority,
        function() {
          Gv === e && (Gv = null);
          for (var t = 0; t < e.length; t += 3) {
            var a = e[t], i = e[t + 1], o = e[t + 2];
            if (typeof i != "function") {
              if (Rr(i || a) === null)
                continue;
              break;
            }
            var f = ae(a);
            f !== null && (e.splice(t, 3), t -= 3, a = {
              pending: !0,
              data: o,
              method: a.method,
              action: i
            }, Object.freeze(a), tf(
              f,
              a,
              i,
              o
            ));
          }
        }
      ));
    }
    function Of(e) {
      function t(y) {
        return Yh(y, e);
      }
      Wf !== null && Yh(Wf, e), Ff !== null && Yh(Ff, e), If !== null && Yh(If, e), O0.forEach(t), z0.forEach(t);
      for (var a = 0; a < Pf.length; a++) {
        var i = Pf[a];
        i.blockedOn === e && (i.blockedOn = null);
      }
      for (; 0 < Pf.length && (a = Pf[0], a.blockedOn === null); )
        Bh(a), a.blockedOn === null && Pf.shift();
      if (a = (e.ownerDocument || e).$$reactFormReplay, a != null)
        for (i = 0; i < a.length; i += 3) {
          var o = a[i], f = a[i + 1], d = o[sa] || null;
          if (typeof f == "function")
            d || Tp(a);
          else if (d) {
            var h = null;
            if (f && f.hasAttribute("formAction")) {
              if (o = f, d = f[sa] || null)
                h = d.formAction;
              else if (Rr(o) !== null) continue;
            } else h = d.action;
            typeof h == "function" ? a[i + 1] = h : (a.splice(i, 3), i -= 3), Tp(a);
          }
        }
    }
    function Bg() {
      function e(f) {
        f.canIntercept && f.info === "react-transition" && f.intercept({
          handler: function() {
            return new Promise(function(d) {
              return o = d;
            });
          },
          focusReset: "manual",
          scroll: "manual"
        });
      }
      function t() {
        o !== null && (o(), o = null), i || setTimeout(a, 20);
      }
      function a() {
        if (!i && !navigation.transition) {
          var f = navigation.currentEntry;
          f && f.url != null && navigation.navigate(f.url, {
            state: f.getState(),
            info: "react-transition",
            history: "replace"
          });
        }
      }
      if (typeof navigation == "object") {
        var i = !1, o = null;
        return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(a, 100), function() {
          i = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener(
            "navigatesuccess",
            t
          ), navigation.removeEventListener(
            "navigateerror",
            t
          ), o !== null && (o(), o = null);
        };
      }
    }
    function Qu(e) {
      this._internalRoot = e;
    }
    function Cr(e) {
      this._internalRoot = e;
    }
    function Ap(e) {
      e[jn] && (e._reactRootContainer ? console.error(
        "You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported."
      ) : console.error(
        "You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."
      ));
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var sl = eT(), Op = Um(), n1 = tT(), Ze = Object.assign, zp = /* @__PURE__ */ Symbol.for("react.element"), Un = /* @__PURE__ */ Symbol.for("react.transitional.element"), zf = /* @__PURE__ */ Symbol.for("react.portal"), kl = /* @__PURE__ */ Symbol.for("react.fragment"), _f = /* @__PURE__ */ Symbol.for("react.strict_mode"), qh = /* @__PURE__ */ Symbol.for("react.profiler"), wh = /* @__PURE__ */ Symbol.for("react.consumer"), Fn = /* @__PURE__ */ Symbol.for("react.context"), Di = /* @__PURE__ */ Symbol.for("react.forward_ref"), Ja = /* @__PURE__ */ Symbol.for("react.suspense"), Gh = /* @__PURE__ */ Symbol.for("react.suspense_list"), mo = /* @__PURE__ */ Symbol.for("react.memo"), yl = /* @__PURE__ */ Symbol.for("react.lazy"), _p = /* @__PURE__ */ Symbol.for("react.activity"), u1 = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), yo = Symbol.iterator, Yg = /* @__PURE__ */ Symbol.for("react.client.reference"), zl = Array.isArray, G = Op.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Ot = n1.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, i1 = Object.freeze({
      pending: !1,
      data: null,
      method: null,
      action: null
    }), Dp = [], Rp = [], Ri = -1, Mi = bt(null), Vu = bt(null), xn = bt(null), Ur = bt(null), xr = 0, po, Df, Mp, Hr, Xh, Lh, Nr;
    O.__reactDisabledLog = !0;
    var Qh, Cp, Up = !1, Vh = new (typeof WeakMap == "function" ? WeakMap : Map)(), fn = null, Hn = !1, In = Object.prototype.hasOwnProperty, Rf = sl.unstable_scheduleCallback, Zh = sl.unstable_cancelCallback, Jh = sl.unstable_shouldYield, c1 = sl.unstable_requestPaint, rl = sl.unstable_now, o1 = sl.unstable_getCurrentPriorityLevel, Kh = sl.unstable_ImmediatePriority, $h = sl.unstable_UserBlockingPriority, go = sl.unstable_NormalPriority, qg = sl.unstable_LowPriority, jr = sl.unstable_IdlePriority, wg = sl.log, Gg = sl.unstable_setDisableYieldValue, Ci = null, fa = null, Zu = !1, Nn = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u", Wl = Math.clz32 ? Math.clz32 : No, kh = Math.log, xp = Math.LN2, Br = 256, Mf = 262144, Pn = 4194304, _l = 2, Fl = 8, sn = 32, yc = 268435456, Oa = Math.random().toString(36).slice(2), Il = "__reactFiber$" + Oa, sa = "__reactProps$" + Oa, jn = "__reactContainer$" + Oa, Hp = "__reactEvents$" + Oa, Xg = "__reactListeners$" + Oa, Wh = "__reactHandles$" + Oa, Np = "__reactResources$" + Oa, Yr = "__reactMarker$" + Oa, qr = /* @__PURE__ */ new Set(), Ju = {}, Fh = {}, Cf = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    }, Lg = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), Ih = {}, wr = {}, Qg = /[\n"\\]/g, Vg = !1, Gr = !1, l = !1, n = !1, u = !1, c = !1, s = ["value", "defaultValue"], r = !1, m = /["'&<>\n\t]|^\s|\s$/, v = "address applet area article aside base basefont bgsound blockquote body br button caption center col colgroup dd details dir div dl dt embed fieldset figcaption figure footer form frame frameset h1 h2 h3 h4 h5 h6 head header hgroup hr html iframe img input isindex li link listing main marquee menu menuitem meta nav noembed noframes noscript object ol p param plaintext pre script section select source style summary table tbody td template textarea tfoot th thead title tr track ul wbr xmp".split(
      " "
    ), T = "applet caption html table td th marquee object template foreignObject desc title".split(
      " "
    ), H = T.concat(["button"]), V = "dd dt li option optgroup p rp rt".split(" "), k = {
      current: null,
      formTag: null,
      aTagInScope: null,
      buttonTagInScope: null,
      nobrTagInScope: null,
      pTagInButtonScope: null,
      listItemTagAutoclosing: null,
      dlItemTagAutoclosing: null,
      containerTagInScope: null,
      implicitRootScope: !1
    }, j = {}, w = {
      animation: "animationDelay animationDirection animationDuration animationFillMode animationIterationCount animationName animationPlayState animationTimingFunction".split(
        " "
      ),
      background: "backgroundAttachment backgroundClip backgroundColor backgroundImage backgroundOrigin backgroundPositionX backgroundPositionY backgroundRepeat backgroundSize".split(
        " "
      ),
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: "borderBottomColor borderBottomStyle borderBottomWidth borderImageOutset borderImageRepeat borderImageSlice borderImageSource borderImageWidth borderLeftColor borderLeftStyle borderLeftWidth borderRightColor borderRightStyle borderRightWidth borderTopColor borderTopStyle borderTopWidth".split(
        " "
      ),
      borderBlockEnd: [
        "borderBlockEndColor",
        "borderBlockEndStyle",
        "borderBlockEndWidth"
      ],
      borderBlockStart: [
        "borderBlockStartColor",
        "borderBlockStartStyle",
        "borderBlockStartWidth"
      ],
      borderBottom: [
        "borderBottomColor",
        "borderBottomStyle",
        "borderBottomWidth"
      ],
      borderColor: [
        "borderBottomColor",
        "borderLeftColor",
        "borderRightColor",
        "borderTopColor"
      ],
      borderImage: [
        "borderImageOutset",
        "borderImageRepeat",
        "borderImageSlice",
        "borderImageSource",
        "borderImageWidth"
      ],
      borderInlineEnd: [
        "borderInlineEndColor",
        "borderInlineEndStyle",
        "borderInlineEndWidth"
      ],
      borderInlineStart: [
        "borderInlineStartColor",
        "borderInlineStartStyle",
        "borderInlineStartWidth"
      ],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: [
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
        "borderTopLeftRadius",
        "borderTopRightRadius"
      ],
      borderRight: [
        "borderRightColor",
        "borderRightStyle",
        "borderRightWidth"
      ],
      borderStyle: [
        "borderBottomStyle",
        "borderLeftStyle",
        "borderRightStyle",
        "borderTopStyle"
      ],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: [
        "borderBottomWidth",
        "borderLeftWidth",
        "borderRightWidth",
        "borderTopWidth"
      ],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: "fontFamily fontFeatureSettings fontKerning fontLanguageOverride fontSize fontSizeAdjust fontStretch fontStyle fontVariant fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition fontWeight lineHeight".split(
        " "
      ),
      fontVariant: "fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition".split(
        " "
      ),
      gap: ["columnGap", "rowGap"],
      grid: "gridAutoColumns gridAutoFlow gridAutoRows gridTemplateAreas gridTemplateColumns gridTemplateRows".split(
        " "
      ),
      gridArea: [
        "gridColumnEnd",
        "gridColumnStart",
        "gridRowEnd",
        "gridRowStart"
      ],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: [
        "gridTemplateAreas",
        "gridTemplateColumns",
        "gridTemplateRows"
      ],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: "maskClip maskComposite maskImage maskMode maskOrigin maskPositionX maskPositionY maskRepeat maskSize".split(
        " "
      ),
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: [
        "textDecorationColor",
        "textDecorationLine",
        "textDecorationStyle"
      ],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: [
        "transitionDelay",
        "transitionDuration",
        "transitionProperty",
        "transitionTimingFunction"
      ],
      wordWrap: ["overflowWrap"]
    }, he = /([A-Z])/g, Re = /^ms-/, Ht = /^(?:webkit|moz|o)[A-Z]/, C = /^-ms-/, D = /-(.)/g, x = /;\s*$/, K = {}, Ee = {}, yt = !1, ge = !1, Qe = new Set(
      "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
        " "
      )
    ), Fe = "http://www.w3.org/1998/Math/MathML", nt = "http://www.w3.org/2000/svg", pc = /* @__PURE__ */ new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"]
    ]), Ph = {
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      fetchpriority: "fetchPriority",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      inert: "inert",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      popover: "popover",
      popovertarget: "popoverTarget",
      popovertargetaction: "popoverTargetAction",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      transformorigin: "transformOrigin",
      "transform-origin": "transformOrigin",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, AS = {
      "aria-current": 0,
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      "aria-hidden": 0,
      "aria-invalid": 0,
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0,
      "aria-braillelabel": 0,
      "aria-brailleroledescription": 0,
      "aria-colindextext": 0,
      "aria-rowindextext": 0
    }, em = {}, uT = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), iT = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), OS = !1, rn = {}, zS = /^on./, cT = /^on[^A-Z]/, oT = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), fT = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), sT = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i, jp = null, tm = null, lm = null, f1 = !1, gc = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), s1 = !1;
    if (gc)
      try {
        var Bp = {};
        Object.defineProperty(Bp, "passive", {
          get: function() {
            s1 = !0;
          }
        }), window.addEventListener("test", Bp, Bp), window.removeEventListener("test", Bp, Bp);
      } catch {
        s1 = !1;
      }
    var Uf = null, r1 = null, Zg = null, Xr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Jg = ul(Xr), Yp = Ze({}, Xr, { view: 0, detail: 0 }), rT = ul(Yp), d1, h1, qp, Kg = Ze({}, Yp, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: xc,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (e !== qp && (qp && e.type === "mousemove" ? (d1 = e.screenX - qp.screenX, h1 = e.screenY - qp.screenY) : h1 = d1 = 0, qp = e), d1);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : h1;
      }
    }), _S = ul(Kg), dT = Ze({}, Kg, { dataTransfer: 0 }), hT = ul(dT), mT = Ze({}, Yp, { relatedTarget: 0 }), m1 = ul(mT), yT = Ze({}, Xr, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), pT = ul(yT), gT = Ze({}, Xr, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), vT = ul(gT), ST = Ze({}, Xr, { data: 0 }), DS = ul(
      ST
    ), bT = DS, ET = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, TT = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    }, AT = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    }, OT = Ze({}, Yp, {
      key: function(e) {
        if (e.key) {
          var t = ET[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress" ? (e = Xo(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? TT[e.keyCode] || "Unidentified" : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: xc,
      charCode: function(e) {
        return e.type === "keypress" ? Xo(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Xo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), zT = ul(OT), _T = Ze({}, Kg, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), RS = ul(_T), DT = Ze({}, Yp, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: xc
    }), RT = ul(DT), MT = Ze({}, Xr, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), CT = ul(MT), UT = Ze({}, Kg, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }), xT = ul(UT), HT = Ze({}, Xr, {
      newState: 0,
      oldState: 0
    }), NT = ul(HT), jT = [9, 13, 27, 32], MS = 229, y1 = gc && "CompositionEvent" in window, wp = null;
    gc && "documentMode" in document && (wp = document.documentMode);
    var BT = gc && "TextEvent" in window && !wp, CS = gc && (!y1 || wp && 8 < wp && 11 >= wp), US = 32, xS = String.fromCharCode(US), HS = !1, am = !1, YT = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    }, Gp = null, Xp = null, NS = !1;
    gc && (NS = Sd("input") && (!document.documentMode || 9 < document.documentMode));
    var dn = typeof Object.is == "function" ? Object.is : q0, qT = gc && "documentMode" in document && 11 >= document.documentMode, nm = null, p1 = null, Lp = null, g1 = !1, um = {
      animationend: Hc("Animation", "AnimationEnd"),
      animationiteration: Hc("Animation", "AnimationIteration"),
      animationstart: Hc("Animation", "AnimationStart"),
      transitionrun: Hc("Transition", "TransitionRun"),
      transitionstart: Hc("Transition", "TransitionStart"),
      transitioncancel: Hc("Transition", "TransitionCancel"),
      transitionend: Hc("Transition", "TransitionEnd")
    }, v1 = {}, jS = {};
    gc && (jS = document.createElement("div").style, "AnimationEvent" in window || (delete um.animationend.animation, delete um.animationiteration.animation, delete um.animationstart.animation), "TransitionEvent" in window || delete um.transitionend.transition);
    var BS = Nc("animationend"), YS = Nc("animationiteration"), qS = Nc("animationstart"), wT = Nc("transitionrun"), GT = Nc("transitionstart"), XT = Nc("transitioncancel"), wS = Nc("transitionend"), GS = /* @__PURE__ */ new Map(), S1 = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
    S1.push("scrollEnd");
    var XS = 0;
    if (typeof performance == "object" && typeof performance.now == "function")
      var LT = performance, LS = function() {
        return LT.now();
      };
    else {
      var QT = Date;
      LS = function() {
        return QT.now();
      };
    }
    var b1 = typeof reportError == "function" ? reportError : function(e) {
      if (typeof window == "object" && typeof window.ErrorEvent == "function") {
        var t = new window.ErrorEvent("error", {
          bubbles: !0,
          cancelable: !0,
          message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
          error: e
        });
        if (!window.dispatchEvent(t)) return;
      } else if (typeof process == "object" && typeof process.emit == "function") {
        process.emit("uncaughtException", e);
        return;
      }
      console.error(e);
    }, VT = "This object has been omitted by React in the console log to avoid sending too much data from the server. Try logging smaller or more specific objects.", $g = 0, E1 = 1, T1 = 2, A1 = 3, kg = "– ", Wg = "+ ", QS = "  ", kt = typeof console < "u" && typeof console.timeStamp == "function" && typeof performance < "u" && typeof performance.measure == "function", Ku = "Components ⚛", st = "Scheduler ⚛", dt = "Blocking", xf = !1, vo = {
      color: "primary",
      properties: null,
      tooltipText: "",
      track: Ku
    }, Hf = {
      start: -0,
      end: -0,
      detail: { devtools: vo }
    }, ZT = ["Changed Props", ""], VS = "This component received deeply equal props. It might benefit from useMemo or the React Compiler in its owner.", JT = ["Changed Props", VS], Qp = 1, So = 2, $u = [], im = 0, O1 = 0, Nf = {};
    Object.freeze(Nf);
    var ku = null, cm = null, Ue = 0, KT = 1, Ke = 2, Ka = 8, Ui = 16, $T = 32, ZS = !1;
    try {
      var JS = Object.preventExtensions({});
    } catch {
      ZS = !0;
    }
    var z1 = /* @__PURE__ */ new WeakMap(), om = [], fm = 0, Fg = null, Vp = 0, Wu = [], Fu = 0, Lr = null, bo = 1, Eo = "", za = null, Wt = null, ct = !1, vc = !1, eu = null, jf = null, Iu = !1, _1 = Error(
      "Hydration Mismatch Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
    ), D1 = bt(null), R1 = bt(null), KS = {}, Ig = null, sm = null, rm = !1, kT = typeof AbortController < "u" ? AbortController : function() {
      var e = [], t = this.signal = {
        aborted: !1,
        addEventListener: function(a, i) {
          e.push(i);
        }
      };
      this.abort = function() {
        t.aborted = !0, e.forEach(function(a) {
          return a();
        });
      };
    }, WT = sl.unstable_scheduleCallback, FT = sl.unstable_NormalPriority, xl = {
      $$typeof: Fn,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
      _currentRenderer: null,
      _currentRenderer2: null
    }, Hl = sl.unstable_now, Pg = console.createTask ? console.createTask : function() {
      return null;
    }, Zp = 1, ev = 2, ra = -0, Bf = -0, To = -0, Ao = null, hn = -1.1, Qr = -0, dl = -0, ze = -1.1, Me = -1.1, ll = null, pl = !1, Vr = -0, Sc = -1.1, Jp = null, Yf = 0, M1 = null, C1 = null, Zr = -1.1, Kp = null, dm = -1.1, tv = -1.1, Oo = -0, zo = -1.1, Pu = -1.1, U1 = 0, $p = null, $S = null, kS = null, qf = -1.1, Jr = null, wf = -1.1, lv = -1.1, WS = -0, FS = -0, av = 0, IT = null, IS = 0, kp = -1.1, nv = !1, uv = !1, Wp = null, x1 = 0, Kr = 0, hm = null, PS = G.S;
    G.S = function(e, t) {
      if ($b = rl(), typeof t == "object" && t !== null && typeof t.then == "function") {
        if (0 > zo && 0 > Pu) {
          zo = Hl();
          var a = gf(), i = pf();
          (a !== wf || i !== Jr) && (wf = -1.1), qf = a, Jr = i;
        }
        I0(e, t);
      }
      PS !== null && PS(e, t);
    };
    var $r = bt(null), xi = {
      recordUnsafeLifecycleWarnings: function() {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function() {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    }, Fp = [], Ip = [], Pp = [], e0 = [], t0 = [], l0 = [], kr = /* @__PURE__ */ new Set();
    xi.recordUnsafeLifecycleWarnings = function(e, t) {
      kr.has(e.type) || (typeof t.componentWillMount == "function" && t.componentWillMount.__suppressDeprecationWarning !== !0 && Fp.push(e), e.mode & Ka && typeof t.UNSAFE_componentWillMount == "function" && Ip.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Pp.push(e), e.mode & Ka && typeof t.UNSAFE_componentWillReceiveProps == "function" && e0.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && t0.push(e), e.mode & Ka && typeof t.UNSAFE_componentWillUpdate == "function" && l0.push(e));
    }, xi.flushPendingUnsafeLifecycleWarnings = function() {
      var e = /* @__PURE__ */ new Set();
      0 < Fp.length && (Fp.forEach(function(h) {
        e.add(
          re(h) || "Component"
        ), kr.add(h.type);
      }), Fp = []);
      var t = /* @__PURE__ */ new Set();
      0 < Ip.length && (Ip.forEach(function(h) {
        t.add(
          re(h) || "Component"
        ), kr.add(h.type);
      }), Ip = []);
      var a = /* @__PURE__ */ new Set();
      0 < Pp.length && (Pp.forEach(function(h) {
        a.add(
          re(h) || "Component"
        ), kr.add(h.type);
      }), Pp = []);
      var i = /* @__PURE__ */ new Set();
      0 < e0.length && (e0.forEach(
        function(h) {
          i.add(
            re(h) || "Component"
          ), kr.add(h.type);
        }
      ), e0 = []);
      var o = /* @__PURE__ */ new Set();
      0 < t0.length && (t0.forEach(function(h) {
        o.add(
          re(h) || "Component"
        ), kr.add(h.type);
      }), t0 = []);
      var f = /* @__PURE__ */ new Set();
      if (0 < l0.length && (l0.forEach(function(h) {
        f.add(
          re(h) || "Component"
        ), kr.add(h.type);
      }), l0 = []), 0 < t.size) {
        var d = W(
          t
        );
        console.error(
          `Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`,
          d
        );
      }
      0 < i.size && (d = W(
        i
      ), console.error(
        `Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state

Please update the following components: %s`,
        d
      )), 0 < f.size && (d = W(
        f
      ), console.error(
        `Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`,
        d
      )), 0 < e.size && (d = W(e), console.warn(
        `componentWillMount has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      )), 0 < a.size && (d = W(
        a
      ), console.warn(
        `componentWillReceiveProps has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      )), 0 < o.size && (d = W(o), console.warn(
        `componentWillUpdate has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      ));
    };
    var iv = /* @__PURE__ */ new Map(), eb = /* @__PURE__ */ new Set();
    xi.recordLegacyContextWarning = function(e, t) {
      for (var a = null, i = e; i !== null; )
        i.mode & Ka && (a = i), i = i.return;
      a === null ? console.error(
        "Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue."
      ) : !eb.has(e.type) && (i = iv.get(a), e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], iv.set(a, i)), i.push(e));
    }, xi.flushLegacyContextWarning = function() {
      iv.forEach(function(e) {
        if (e.length !== 0) {
          var t = e[0], a = /* @__PURE__ */ new Set();
          e.forEach(function(o) {
            a.add(re(o) || "Component"), eb.add(o.type);
          });
          var i = W(a);
          se(t, function() {
            console.error(
              `Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://react.dev/link/legacy-context`,
              i
            );
          });
        }
      });
    }, xi.discardPendingWarnings = function() {
      Fp = [], Ip = [], Pp = [], e0 = [], t0 = [], l0 = [], iv = /* @__PURE__ */ new Map();
    };
    var tb = {
      react_stack_bottom_frame: function(e, t, a) {
        var i = Hn;
        Hn = !0;
        try {
          return e(t, a);
        } finally {
          Hn = i;
        }
      }
    }, H1 = tb.react_stack_bottom_frame.bind(tb), lb = {
      react_stack_bottom_frame: function(e) {
        var t = Hn;
        Hn = !0;
        try {
          return e.render();
        } finally {
          Hn = t;
        }
      }
    }, ab = lb.react_stack_bottom_frame.bind(lb), nb = {
      react_stack_bottom_frame: function(e, t) {
        try {
          t.componentDidMount();
        } catch (a) {
          vt(e, e.return, a);
        }
      }
    }, N1 = nb.react_stack_bottom_frame.bind(
      nb
    ), ub = {
      react_stack_bottom_frame: function(e, t, a, i, o) {
        try {
          t.componentDidUpdate(a, i, o);
        } catch (f) {
          vt(e, e.return, f);
        }
      }
    }, ib = ub.react_stack_bottom_frame.bind(
      ub
    ), cb = {
      react_stack_bottom_frame: function(e, t) {
        var a = t.stack;
        e.componentDidCatch(t.value, {
          componentStack: a !== null ? a : ""
        });
      }
    }, PT = cb.react_stack_bottom_frame.bind(
      cb
    ), ob = {
      react_stack_bottom_frame: function(e, t, a) {
        try {
          a.componentWillUnmount();
        } catch (i) {
          vt(e, t, i);
        }
      }
    }, fb = ob.react_stack_bottom_frame.bind(
      ob
    ), sb = {
      react_stack_bottom_frame: function(e) {
        var t = e.create;
        return e = e.inst, t = t(), e.destroy = t;
      }
    }, eA = sb.react_stack_bottom_frame.bind(sb), rb = {
      react_stack_bottom_frame: function(e, t, a) {
        try {
          a();
        } catch (i) {
          vt(e, t, i);
        }
      }
    }, tA = rb.react_stack_bottom_frame.bind(rb), db = {
      react_stack_bottom_frame: function(e) {
        var t = e._init;
        return t(e._payload);
      }
    }, lA = db.react_stack_bottom_frame.bind(db), mm = Error(
      "Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`."
    ), j1 = Error(
      "Suspense Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
    ), cv = Error(
      "Suspense Exception: This is not a real error! It's an implementation detail of `useActionState` to interrupt the current render. You must either rethrow it immediately, or move the `useActionState` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary."
    ), ov = {
      then: function() {
        console.error(
          'Internal React error: A listener was unexpectedly attached to a "noop" thenable. This is a bug in React. Please file an issue.'
        );
      }
    }, Wr = null, a0 = !1, ym = null, n0 = 0, $e = null, B1, hb = B1 = !1, mb = {}, yb = {}, pb = {};
    ye = function(e, t, a) {
      if (a !== null && typeof a == "object" && a._store && (!a._store.validated && a.key == null || a._store.validated === 2)) {
        if (typeof a._store != "object")
          throw Error(
            "React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue."
          );
        a._store.validated = 1;
        var i = re(e), o = i || "null";
        if (!mb[o]) {
          mb[o] = !0, a = a._owner, e = e._debugOwner;
          var f = "";
          e && typeof e.tag == "number" && (o = re(e)) && (f = `

Check the render method of \`` + o + "`."), f || i && (f = `

Check the top-level render call using <` + i + ">.");
          var d = "";
          a != null && e !== a && (i = null, typeof a.tag == "number" ? i = re(a) : typeof a.name == "string" && (i = a.name), i && (d = " It was passed a child from " + i + ".")), se(t, function() {
            console.error(
              'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
              f,
              d
            );
          });
        }
      }
    };
    var Fr = wt(!0), gb = wt(!1), vb = 0, Sb = 1, bb = 2, Y1 = 3, Gf = !1, Eb = !1, q1 = null, w1 = !1, pm = bt(null), fv = bt(0), tu = bt(null), ei = null, gm = 1, u0 = 2, Dl = bt(0), sv = 0, ti = 1, mn = 2, lu = 4, yn = 8, vm, Tb = /* @__PURE__ */ new Set(), Ab = /* @__PURE__ */ new Set(), G1 = /* @__PURE__ */ new Set(), Ob = /* @__PURE__ */ new Set(), _o = 0, Ne = null, Xt = null, Nl = null, rv = !1, Sm = !1, Ir = !1, dv = 0, i0 = 0, Do = null, aA = 0, nA = 25, q = null, li = null, Ro = -1, c0 = !1, o0 = {
      readContext: qt,
      use: Ya,
      useCallback: il,
      useContext: il,
      useEffect: il,
      useImperativeHandle: il,
      useLayoutEffect: il,
      useInsertionEffect: il,
      useMemo: il,
      useReducer: il,
      useRef: il,
      useState: il,
      useDebugValue: il,
      useDeferredValue: il,
      useTransition: il,
      useSyncExternalStore: il,
      useId: il,
      useHostTransitionStatus: il,
      useFormState: il,
      useActionState: il,
      useOptimistic: il,
      useMemoCache: il,
      useCacheRefresh: il
    };
    o0.useEffectEvent = il;
    var X1 = null, zb = null, L1 = null, _b = null, bc = null, Hi = null, hv = null;
    X1 = {
      readContext: function(e) {
        return qt(e);
      },
      use: Ya,
      useCallback: function(e, t) {
        return q = "useCallback", Te(), Qc(t), Ru(e, t);
      },
      useContext: function(e) {
        return q = "useContext", Te(), qt(e);
      },
      useEffect: function(e, t) {
        return q = "useEffect", Te(), Qc(t), Xs(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return q = "useImperativeHandle", Te(), Qc(a), Qs(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        q = "useInsertionEffect", Te(), Qc(t), An(4, mn, e, t);
      },
      useLayoutEffect: function(e, t) {
        return q = "useLayoutEffect", Te(), Qc(t), wa(e, t);
      },
      useMemo: function(e, t) {
        q = "useMemo", Te(), Qc(t);
        var a = G.H;
        G.H = bc;
        try {
          return Pt(e, t);
        } finally {
          G.H = a;
        }
      },
      useReducer: function(e, t, a) {
        q = "useReducer", Te();
        var i = G.H;
        G.H = bc;
        try {
          return wd(e, t, a);
        } finally {
          G.H = i;
        }
      },
      useRef: function(e) {
        return q = "useRef", Te(), Ld(e);
      },
      useState: function(e) {
        q = "useState", Te();
        var t = G.H;
        G.H = bc;
        try {
          return Zc(e);
        } finally {
          G.H = t;
        }
      },
      useDebugValue: function() {
        q = "useDebugValue", Te();
      },
      useDeferredValue: function(e, t) {
        return q = "useDeferredValue", Te(), Jn(e, t);
      },
      useTransition: function() {
        return q = "useTransition", Te(), yy();
      },
      useSyncExternalStore: function(e, t, a) {
        return q = "useSyncExternalStore", Te(), Fo(
          e,
          t,
          a
        );
      },
      useId: function() {
        return q = "useId", Te(), Vd();
      },
      useFormState: function(e, t) {
        return q = "useFormState", Te(), Bd(), Du(e, t);
      },
      useActionState: function(e, t) {
        return q = "useActionState", Te(), Du(e, t);
      },
      useOptimistic: function(e) {
        return q = "useOptimistic", Te(), Io(e);
      },
      useHostTransitionStatus: Si,
      useMemoCache: hi,
      useCacheRefresh: function() {
        return q = "useCacheRefresh", Te(), Zd();
      },
      useEffectEvent: function(e) {
        return q = "useEffectEvent", Te(), Ls(e);
      }
    }, zb = {
      readContext: function(e) {
        return qt(e);
      },
      use: Ya,
      useCallback: function(e, t) {
        return q = "useCallback", I(), Ru(e, t);
      },
      useContext: function(e) {
        return q = "useContext", I(), qt(e);
      },
      useEffect: function(e, t) {
        return q = "useEffect", I(), Xs(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return q = "useImperativeHandle", I(), Qs(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        q = "useInsertionEffect", I(), An(4, mn, e, t);
      },
      useLayoutEffect: function(e, t) {
        return q = "useLayoutEffect", I(), wa(e, t);
      },
      useMemo: function(e, t) {
        q = "useMemo", I();
        var a = G.H;
        G.H = bc;
        try {
          return Pt(e, t);
        } finally {
          G.H = a;
        }
      },
      useReducer: function(e, t, a) {
        q = "useReducer", I();
        var i = G.H;
        G.H = bc;
        try {
          return wd(e, t, a);
        } finally {
          G.H = i;
        }
      },
      useRef: function(e) {
        return q = "useRef", I(), Ld(e);
      },
      useState: function(e) {
        q = "useState", I();
        var t = G.H;
        G.H = bc;
        try {
          return Zc(e);
        } finally {
          G.H = t;
        }
      },
      useDebugValue: function() {
        q = "useDebugValue", I();
      },
      useDeferredValue: function(e, t) {
        return q = "useDeferredValue", I(), Jn(e, t);
      },
      useTransition: function() {
        return q = "useTransition", I(), yy();
      },
      useSyncExternalStore: function(e, t, a) {
        return q = "useSyncExternalStore", I(), Fo(
          e,
          t,
          a
        );
      },
      useId: function() {
        return q = "useId", I(), Vd();
      },
      useActionState: function(e, t) {
        return q = "useActionState", I(), Du(e, t);
      },
      useFormState: function(e, t) {
        return q = "useFormState", I(), Bd(), Du(e, t);
      },
      useOptimistic: function(e) {
        return q = "useOptimistic", I(), Io(e);
      },
      useHostTransitionStatus: Si,
      useMemoCache: hi,
      useCacheRefresh: function() {
        return q = "useCacheRefresh", I(), Zd();
      },
      useEffectEvent: function(e) {
        return q = "useEffectEvent", I(), Ls(e);
      }
    }, L1 = {
      readContext: function(e) {
        return qt(e);
      },
      use: Ya,
      useCallback: function(e, t) {
        return q = "useCallback", I(), ia(e, t);
      },
      useContext: function(e) {
        return q = "useContext", I(), qt(e);
      },
      useEffect: function(e, t) {
        q = "useEffect", I(), Ql(2048, yn, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return q = "useImperativeHandle", I(), Vs(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return q = "useInsertionEffect", I(), Ql(4, mn, e, t);
      },
      useLayoutEffect: function(e, t) {
        return q = "useLayoutEffect", I(), Ql(4, lu, e, t);
      },
      useMemo: function(e, t) {
        q = "useMemo", I();
        var a = G.H;
        G.H = Hi;
        try {
          return $c(e, t);
        } finally {
          G.H = a;
        }
      },
      useReducer: function(e, t, a) {
        q = "useReducer", I();
        var i = G.H;
        G.H = Hi;
        try {
          return Zn(e, t, a);
        } finally {
          G.H = i;
        }
      },
      useRef: function() {
        return q = "useRef", I(), Tt().memoizedState;
      },
      useState: function() {
        q = "useState", I();
        var e = G.H;
        G.H = Hi;
        try {
          return Zn(qa);
        } finally {
          G.H = e;
        }
      },
      useDebugValue: function() {
        q = "useDebugValue", I();
      },
      useDeferredValue: function(e, t) {
        return q = "useDeferredValue", I(), Xe(e, t);
      },
      useTransition: function() {
        return q = "useTransition", I(), el();
      },
      useSyncExternalStore: function(e, t, a) {
        return q = "useSyncExternalStore", I(), Ys(
          e,
          t,
          a
        );
      },
      useId: function() {
        return q = "useId", I(), Tt().memoizedState;
      },
      useFormState: function(e) {
        return q = "useFormState", I(), Bd(), ef(e);
      },
      useActionState: function(e) {
        return q = "useActionState", I(), ef(e);
      },
      useOptimistic: function(e, t) {
        return q = "useOptimistic", I(), Po(e, t);
      },
      useHostTransitionStatus: Si,
      useMemoCache: hi,
      useCacheRefresh: function() {
        return q = "useCacheRefresh", I(), Tt().memoizedState;
      },
      useEffectEvent: function(e) {
        return q = "useEffectEvent", I(), ua(e);
      }
    }, _b = {
      readContext: function(e) {
        return qt(e);
      },
      use: Ya,
      useCallback: function(e, t) {
        return q = "useCallback", I(), ia(e, t);
      },
      useContext: function(e) {
        return q = "useContext", I(), qt(e);
      },
      useEffect: function(e, t) {
        q = "useEffect", I(), Ql(2048, yn, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return q = "useImperativeHandle", I(), Vs(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return q = "useInsertionEffect", I(), Ql(4, mn, e, t);
      },
      useLayoutEffect: function(e, t) {
        return q = "useLayoutEffect", I(), Ql(4, lu, e, t);
      },
      useMemo: function(e, t) {
        q = "useMemo", I();
        var a = G.H;
        G.H = hv;
        try {
          return $c(e, t);
        } finally {
          G.H = a;
        }
      },
      useReducer: function(e, t, a) {
        q = "useReducer", I();
        var i = G.H;
        G.H = hv;
        try {
          return tc(e, t, a);
        } finally {
          G.H = i;
        }
      },
      useRef: function() {
        return q = "useRef", I(), Tt().memoizedState;
      },
      useState: function() {
        q = "useState", I();
        var e = G.H;
        G.H = hv;
        try {
          return tc(qa);
        } finally {
          G.H = e;
        }
      },
      useDebugValue: function() {
        q = "useDebugValue", I();
      },
      useDeferredValue: function(e, t) {
        return q = "useDeferredValue", I(), Dt(e, t);
      },
      useTransition: function() {
        return q = "useTransition", I(), Qd();
      },
      useSyncExternalStore: function(e, t, a) {
        return q = "useSyncExternalStore", I(), Ys(
          e,
          t,
          a
        );
      },
      useId: function() {
        return q = "useId", I(), Tt().memoizedState;
      },
      useFormState: function(e) {
        return q = "useFormState", I(), Bd(), uc(e);
      },
      useActionState: function(e) {
        return q = "useActionState", I(), uc(e);
      },
      useOptimistic: function(e, t) {
        return q = "useOptimistic", I(), dy(e, t);
      },
      useHostTransitionStatus: Si,
      useMemoCache: hi,
      useCacheRefresh: function() {
        return q = "useCacheRefresh", I(), Tt().memoizedState;
      },
      useEffectEvent: function(e) {
        return q = "useEffectEvent", I(), ua(e);
      }
    }, bc = {
      readContext: function(e) {
        return Q(), qt(e);
      },
      use: function(e) {
        return L(), Ya(e);
      },
      useCallback: function(e, t) {
        return q = "useCallback", L(), Te(), Ru(e, t);
      },
      useContext: function(e) {
        return q = "useContext", L(), Te(), qt(e);
      },
      useEffect: function(e, t) {
        return q = "useEffect", L(), Te(), Xs(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return q = "useImperativeHandle", L(), Te(), Qs(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        q = "useInsertionEffect", L(), Te(), An(4, mn, e, t);
      },
      useLayoutEffect: function(e, t) {
        return q = "useLayoutEffect", L(), Te(), wa(e, t);
      },
      useMemo: function(e, t) {
        q = "useMemo", L(), Te();
        var a = G.H;
        G.H = bc;
        try {
          return Pt(e, t);
        } finally {
          G.H = a;
        }
      },
      useReducer: function(e, t, a) {
        q = "useReducer", L(), Te();
        var i = G.H;
        G.H = bc;
        try {
          return wd(e, t, a);
        } finally {
          G.H = i;
        }
      },
      useRef: function(e) {
        return q = "useRef", L(), Te(), Ld(e);
      },
      useState: function(e) {
        q = "useState", L(), Te();
        var t = G.H;
        G.H = bc;
        try {
          return Zc(e);
        } finally {
          G.H = t;
        }
      },
      useDebugValue: function() {
        q = "useDebugValue", L(), Te();
      },
      useDeferredValue: function(e, t) {
        return q = "useDeferredValue", L(), Te(), Jn(e, t);
      },
      useTransition: function() {
        return q = "useTransition", L(), Te(), yy();
      },
      useSyncExternalStore: function(e, t, a) {
        return q = "useSyncExternalStore", L(), Te(), Fo(
          e,
          t,
          a
        );
      },
      useId: function() {
        return q = "useId", L(), Te(), Vd();
      },
      useFormState: function(e, t) {
        return q = "useFormState", L(), Te(), Du(e, t);
      },
      useActionState: function(e, t) {
        return q = "useActionState", L(), Te(), Du(e, t);
      },
      useOptimistic: function(e) {
        return q = "useOptimistic", L(), Te(), Io(e);
      },
      useMemoCache: function(e) {
        return L(), hi(e);
      },
      useHostTransitionStatus: Si,
      useCacheRefresh: function() {
        return q = "useCacheRefresh", Te(), Zd();
      },
      useEffectEvent: function(e) {
        return q = "useEffectEvent", L(), Te(), Ls(e);
      }
    }, Hi = {
      readContext: function(e) {
        return Q(), qt(e);
      },
      use: function(e) {
        return L(), Ya(e);
      },
      useCallback: function(e, t) {
        return q = "useCallback", L(), I(), ia(e, t);
      },
      useContext: function(e) {
        return q = "useContext", L(), I(), qt(e);
      },
      useEffect: function(e, t) {
        q = "useEffect", L(), I(), Ql(2048, yn, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return q = "useImperativeHandle", L(), I(), Vs(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return q = "useInsertionEffect", L(), I(), Ql(4, mn, e, t);
      },
      useLayoutEffect: function(e, t) {
        return q = "useLayoutEffect", L(), I(), Ql(4, lu, e, t);
      },
      useMemo: function(e, t) {
        q = "useMemo", L(), I();
        var a = G.H;
        G.H = Hi;
        try {
          return $c(e, t);
        } finally {
          G.H = a;
        }
      },
      useReducer: function(e, t, a) {
        q = "useReducer", L(), I();
        var i = G.H;
        G.H = Hi;
        try {
          return Zn(e, t, a);
        } finally {
          G.H = i;
        }
      },
      useRef: function() {
        return q = "useRef", L(), I(), Tt().memoizedState;
      },
      useState: function() {
        q = "useState", L(), I();
        var e = G.H;
        G.H = Hi;
        try {
          return Zn(qa);
        } finally {
          G.H = e;
        }
      },
      useDebugValue: function() {
        q = "useDebugValue", L(), I();
      },
      useDeferredValue: function(e, t) {
        return q = "useDeferredValue", L(), I(), Xe(e, t);
      },
      useTransition: function() {
        return q = "useTransition", L(), I(), el();
      },
      useSyncExternalStore: function(e, t, a) {
        return q = "useSyncExternalStore", L(), I(), Ys(
          e,
          t,
          a
        );
      },
      useId: function() {
        return q = "useId", L(), I(), Tt().memoizedState;
      },
      useFormState: function(e) {
        return q = "useFormState", L(), I(), ef(e);
      },
      useActionState: function(e) {
        return q = "useActionState", L(), I(), ef(e);
      },
      useOptimistic: function(e, t) {
        return q = "useOptimistic", L(), I(), Po(e, t);
      },
      useMemoCache: function(e) {
        return L(), hi(e);
      },
      useHostTransitionStatus: Si,
      useCacheRefresh: function() {
        return q = "useCacheRefresh", I(), Tt().memoizedState;
      },
      useEffectEvent: function(e) {
        return q = "useEffectEvent", L(), I(), ua(e);
      }
    }, hv = {
      readContext: function(e) {
        return Q(), qt(e);
      },
      use: function(e) {
        return L(), Ya(e);
      },
      useCallback: function(e, t) {
        return q = "useCallback", L(), I(), ia(e, t);
      },
      useContext: function(e) {
        return q = "useContext", L(), I(), qt(e);
      },
      useEffect: function(e, t) {
        q = "useEffect", L(), I(), Ql(2048, yn, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return q = "useImperativeHandle", L(), I(), Vs(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return q = "useInsertionEffect", L(), I(), Ql(4, mn, e, t);
      },
      useLayoutEffect: function(e, t) {
        return q = "useLayoutEffect", L(), I(), Ql(4, lu, e, t);
      },
      useMemo: function(e, t) {
        q = "useMemo", L(), I();
        var a = G.H;
        G.H = Hi;
        try {
          return $c(e, t);
        } finally {
          G.H = a;
        }
      },
      useReducer: function(e, t, a) {
        q = "useReducer", L(), I();
        var i = G.H;
        G.H = Hi;
        try {
          return tc(e, t, a);
        } finally {
          G.H = i;
        }
      },
      useRef: function() {
        return q = "useRef", L(), I(), Tt().memoizedState;
      },
      useState: function() {
        q = "useState", L(), I();
        var e = G.H;
        G.H = Hi;
        try {
          return tc(qa);
        } finally {
          G.H = e;
        }
      },
      useDebugValue: function() {
        q = "useDebugValue", L(), I();
      },
      useDeferredValue: function(e, t) {
        return q = "useDeferredValue", L(), I(), Dt(e, t);
      },
      useTransition: function() {
        return q = "useTransition", L(), I(), Qd();
      },
      useSyncExternalStore: function(e, t, a) {
        return q = "useSyncExternalStore", L(), I(), Ys(
          e,
          t,
          a
        );
      },
      useId: function() {
        return q = "useId", L(), I(), Tt().memoizedState;
      },
      useFormState: function(e) {
        return q = "useFormState", L(), I(), uc(e);
      },
      useActionState: function(e) {
        return q = "useActionState", L(), I(), uc(e);
      },
      useOptimistic: function(e, t) {
        return q = "useOptimistic", L(), I(), dy(e, t);
      },
      useMemoCache: function(e) {
        return L(), hi(e);
      },
      useHostTransitionStatus: Si,
      useCacheRefresh: function() {
        return q = "useCacheRefresh", I(), Tt().memoizedState;
      },
      useEffectEvent: function(e) {
        return q = "useEffectEvent", L(), I(), ua(e);
      }
    };
    var Db = {}, Rb = /* @__PURE__ */ new Set(), Mb = /* @__PURE__ */ new Set(), Cb = /* @__PURE__ */ new Set(), Ub = /* @__PURE__ */ new Set(), xb = /* @__PURE__ */ new Set(), Hb = /* @__PURE__ */ new Set(), Nb = /* @__PURE__ */ new Set(), jb = /* @__PURE__ */ new Set(), Bb = /* @__PURE__ */ new Set(), Yb = /* @__PURE__ */ new Set();
    Object.freeze(Db);
    var Q1 = {
      enqueueSetState: function(e, t, a) {
        e = e._reactInternals;
        var i = Kl(e), o = Au(i);
        o.payload = t, a != null && (nf(a), o.callback = a), t = ga(e, o, i), t !== null && (Gn(i, "this.setState()", e), tl(t, e, i), ko(t, e, i));
      },
      enqueueReplaceState: function(e, t, a) {
        e = e._reactInternals;
        var i = Kl(e), o = Au(i);
        o.tag = Sb, o.payload = t, a != null && (nf(a), o.callback = a), t = ga(e, o, i), t !== null && (Gn(i, "this.replaceState()", e), tl(t, e, i), ko(t, e, i));
      },
      enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var a = Kl(e), i = Au(a);
        i.tag = bb, t != null && (nf(t), i.callback = t), t = ga(e, i, a), t !== null && (Gn(a, "this.forceUpdate()", e), tl(t, e, a), ko(t, e, a));
      }
    }, bm = null, V1 = null, Z1 = Error(
      "This is not a real error. It's an implementation detail of React's selective hydration feature. If this leaks into userspace, it's a bug in React. Please file an issue."
    ), jl = !1, qb = {}, wb = {}, Gb = {}, Xb = {}, Em = !1, Lb = {}, mv = {}, J1 = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0,
      hydrationErrors: null
    }, Qb = !1, Vb = null;
    Vb = /* @__PURE__ */ new Set();
    var Mo = !1, Bl = !1, K1 = !1, Zb = typeof WeakSet == "function" ? WeakSet : Set, da = null, Tm = null, Am = null, Yl = null, Bn = !1, Ni = null, Pl = !1, f0 = 8192, uA = {
      getCacheForType: function(e) {
        var t = qt(xl), a = t.data.get(e);
        return a === void 0 && (a = e(), t.data.set(e, a)), a;
      },
      cacheSignal: function() {
        return qt(xl).controller.signal;
      },
      getOwner: function() {
        return fn;
      }
    };
    if (typeof Symbol == "function" && Symbol.for) {
      var s0 = Symbol.for;
      s0("selector.component"), s0("selector.has_pseudo_class"), s0("selector.role"), s0("selector.test_id"), s0("selector.text");
    }
    var iA = [], cA = typeof WeakMap == "function" ? WeakMap : Map, ha = 0, ea = 2, au = 4, Co = 0, r0 = 1, Pr = 2, yv = 3, Xf = 4, pv = 6, Jb = 5, pt = ha, Lt = null, Ie = null, ke = 0, Yn = 0, gv = 1, ed = 2, d0 = 3, Kb = 4, $1 = 5, h0 = 6, vv = 7, k1 = 8, td = 9, Nt = Yn, nu = null, Lf = !1, Om = !1, W1 = !1, Ec = 0, hl = Co, Qf = 0, Vf = 0, F1 = 0, qn = 0, ld = 0, m0 = null, pn = null, Sv = !1, bv = 0, $b = 0, kb = 300, Ev = 1 / 0, Wb = 500, y0 = null, El = null, Zf = null, Tv = 0, I1 = 1, P1 = 2, Fb = 3, Jf = 0, Ib = 1, Pb = 2, eE = 3, tE = 4, Av = 5, ql = 0, Kf = null, zm = null, ji = 0, eS = 0, tS = -0, lS = null, lE = null, aE = null, Bi = Tv, nE = null, oA = 50, p0 = 0, aS = null, nS = !1, Ov = !1, fA = 50, ad = 0, g0 = null, _m = !1, zv = null, uE = !1, iE = /* @__PURE__ */ new Set(), sA = {}, _v = null, Dm = null, uS = !1, iS = !1, Dv = !1, cS = !1, $f = 0, oS = {};
    (function() {
      for (var e = 0; e < S1.length; e++) {
        var t = S1[e], a = t.toLowerCase();
        t = t[0].toUpperCase() + t.slice(1), bn(a, "on" + t);
      }
      bn(BS, "onAnimationEnd"), bn(YS, "onAnimationIteration"), bn(qS, "onAnimationStart"), bn("dblclick", "onDoubleClick"), bn("focusin", "onFocus"), bn("focusout", "onBlur"), bn(wT, "onTransitionRun"), bn(GT, "onTransitionStart"), bn(XT, "onTransitionCancel"), bn(wS, "onTransitionEnd");
    })(), Be("onMouseEnter", ["mouseout", "mouseover"]), Be("onMouseLeave", ["mouseout", "mouseover"]), Be("onPointerEnter", ["pointerout", "pointerover"]), Be("onPointerLeave", ["pointerout", "pointerover"]), ot(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ), ot(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ), ot("onBeforeInput", [
      "compositionend",
      "keypress",
      "textInput",
      "paste"
    ]), ot(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ), ot(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ), ot(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
    var v0 = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ), fS = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(v0)
    ), Rv = "_reactListening" + Math.random().toString(36).slice(2), cE = !1, oE = !1, Mv = !1, fE = !1, Cv = !1, Uv = !1, sE = !1, xv = {}, rA = /\r\n?/g, dA = /\u0000|\uFFFD/g, nd = "http://www.w3.org/1999/xlink", sS = "http://www.w3.org/XML/1998/namespace", hA = "javascript:throw new Error('React form unexpectedly submitted.')", mA = "suppressHydrationWarning", ud = "&", Hv = "/&", S0 = "$", b0 = "/$", kf = "$?", id = "$~", Rm = "$!", yA = "html", pA = "body", gA = "head", rS = "F!", rE = "F", dE = "loading", vA = "style", Uo = 0, Mm = 1, Nv = 2, dS = null, hS = null, hE = { dialog: !0, webview: !0 }, mS = null, E0 = void 0, mE = typeof setTimeout == "function" ? setTimeout : void 0, SA = typeof clearTimeout == "function" ? clearTimeout : void 0, cd = -1, yE = typeof Promise == "function" ? Promise : void 0, bA = typeof queueMicrotask == "function" ? queueMicrotask : typeof yE < "u" ? function(e) {
      return yE.resolve(null).then(e).catch(gg);
    } : mE, yS = null, od = 0, T0 = 1, pE = 2, gE = 3, ai = 4, ni = /* @__PURE__ */ new Map(), vE = /* @__PURE__ */ new Set(), xo = Ot.d;
    Ot.d = {
      f: function() {
        var e = xo.f(), t = ao();
        return e || t;
      },
      r: function(e) {
        var t = ae(e);
        t !== null && t.tag === 5 && t.type === "form" ? kc(t) : xo.r(e);
      },
      D: function(e) {
        xo.D(e), rp("dns-prefetch", e, null);
      },
      C: function(e, t) {
        xo.C(e, t), rp("preconnect", e, t);
      },
      L: function(e, t, a) {
        xo.L(e, t, a);
        var i = Cm;
        if (i && e && t) {
          var o = 'link[rel="preload"][as="' + Vt(t) + '"]';
          t === "image" && a && a.imageSrcSet ? (o += '[imagesrcset="' + Vt(
            a.imageSrcSet
          ) + '"]', typeof a.imageSizes == "string" && (o += '[imagesizes="' + Vt(
            a.imageSizes
          ) + '"]')) : o += '[href="' + Vt(e) + '"]';
          var f = o;
          switch (t) {
            case "style":
              f = Sf(e);
              break;
            case "script":
              f = bf(e);
          }
          ni.has(f) || (e = Ze(
            {
              rel: "preload",
              href: t === "image" && a && a.imageSrcSet ? void 0 : e,
              as: t
            },
            a
          ), ni.set(f, e), i.querySelector(o) !== null || t === "style" && i.querySelector(
            so(f)
          ) || t === "script" && i.querySelector(ro(f)) || (t = i.createElement("link"), ft(t, "link", e), pe(t), i.head.appendChild(t)));
        }
      },
      m: function(e, t) {
        xo.m(e, t);
        var a = Cm;
        if (a && e) {
          var i = t && typeof t.as == "string" ? t.as : "script", o = 'link[rel="modulepreload"][as="' + Vt(i) + '"][href="' + Vt(e) + '"]', f = o;
          switch (i) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
              f = bf(e);
          }
          if (!ni.has(f) && (e = Ze({ rel: "modulepreload", href: e }, t), ni.set(f, e), a.querySelector(o) === null)) {
            switch (i) {
              case "audioworklet":
              case "paintworklet":
              case "serviceworker":
              case "sharedworker":
              case "worker":
              case "script":
                if (a.querySelector(ro(f)))
                  return;
            }
            i = a.createElement("link"), ft(i, "link", e), pe(i), a.head.appendChild(i);
          }
        }
      },
      X: function(e, t) {
        xo.X(e, t);
        var a = Cm;
        if (a && e) {
          var i = He(a).hoistableScripts, o = bf(e), f = i.get(o);
          f || (f = a.querySelector(
            ro(o)
          ), f || (e = Ze({ src: e, async: !0 }, t), (t = ni.get(o)) && ho(e, t), f = a.createElement("script"), pe(f), ft(f, "link", e), a.head.appendChild(f)), f = {
            type: "script",
            instance: f,
            count: 1,
            state: null
          }, i.set(o, f));
        }
      },
      S: function(e, t, a) {
        xo.S(e, t, a);
        var i = Cm;
        if (i && e) {
          var o = He(i).hoistableStyles, f = Sf(e);
          t = t || "default";
          var d = o.get(f);
          if (!d) {
            var h = { loading: od, preload: null };
            if (d = i.querySelector(
              so(f)
            ))
              h.loading = T0 | ai;
            else {
              e = Ze(
                {
                  rel: "stylesheet",
                  href: e,
                  "data-precedence": t
                },
                a
              ), (a = ni.get(f)) && mp(e, a);
              var y = d = i.createElement("link");
              pe(y), ft(y, "link", e), y._p = new Promise(function(p, _) {
                y.onload = p, y.onerror = _;
              }), y.addEventListener("load", function() {
                h.loading |= T0;
              }), y.addEventListener("error", function() {
                h.loading |= pE;
              }), h.loading |= ai, Mh(d, t, i);
            }
            d = {
              type: "stylesheet",
              instance: d,
              count: 1,
              state: h
            }, o.set(f, d);
          }
        }
      },
      M: function(e, t) {
        xo.M(e, t);
        var a = Cm;
        if (a && e) {
          var i = He(a).hoistableScripts, o = bf(e), f = i.get(o);
          f || (f = a.querySelector(
            ro(o)
          ), f || (e = Ze({ src: e, async: !0, type: "module" }, t), (t = ni.get(o)) && ho(e, t), f = a.createElement("script"), pe(f), ft(f, "link", e), a.head.appendChild(f)), f = {
            type: "script",
            instance: f,
            count: 1,
            state: null
          }, i.set(o, f));
        }
      }
    };
    var Cm = typeof document > "u" ? null : document, jv = null, EA = 6e4, TA = 800, AA = 500, pS = 0, gS = null, Bv = null, fd = i1, A0 = {
      $$typeof: Fn,
      Provider: null,
      Consumer: null,
      _currentValue: fd,
      _currentValue2: fd,
      _threadCount: 0
    }, SE = "%c%s%c", bE = "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px", EE = "", Yv = " ", OA = Function.prototype.bind, TE = !1, AE = null, OE = null, zE = null, _E = null, DE = null, RE = null, ME = null, CE = null, UE = null, xE = null;
    AE = function(e, t, a, i) {
      t = F(e, t), t !== null && (a = ve(t.memoizedState, a, 0, i), t.memoizedState = a, t.baseState = a, e.memoizedProps = Ze({}, e.memoizedProps), a = Ll(e, 2), a !== null && tl(a, e, 2));
    }, OE = function(e, t, a) {
      t = F(e, t), t !== null && (a = _e(t.memoizedState, a, 0), t.memoizedState = a, t.baseState = a, e.memoizedProps = Ze({}, e.memoizedProps), a = Ll(e, 2), a !== null && tl(a, e, 2));
    }, zE = function(e, t, a, i) {
      t = F(e, t), t !== null && (a = U(t.memoizedState, a, i), t.memoizedState = a, t.baseState = a, e.memoizedProps = Ze({}, e.memoizedProps), a = Ll(e, 2), a !== null && tl(a, e, 2));
    }, _E = function(e, t, a) {
      e.pendingProps = ve(e.memoizedProps, t, 0, a), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = Ll(e, 2), t !== null && tl(t, e, 2);
    }, DE = function(e, t) {
      e.pendingProps = _e(e.memoizedProps, t, 0), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = Ll(e, 2), t !== null && tl(t, e, 2);
    }, RE = function(e, t, a) {
      e.pendingProps = U(
        e.memoizedProps,
        t,
        a
      ), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = Ll(e, 2), t !== null && tl(t, e, 2);
    }, ME = function(e) {
      var t = Ll(e, 2);
      t !== null && tl(t, e, 2);
    }, CE = function(e) {
      var t = jo(), a = Ll(e, t);
      a !== null && tl(a, e, t);
    }, UE = function(e) {
      gt = e;
    }, xE = function(e) {
      Ye = e;
    };
    var qv = !0, wv = null, vS = !1, Wf = null, Ff = null, If = null, O0 = /* @__PURE__ */ new Map(), z0 = /* @__PURE__ */ new Map(), Pf = [], zA = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
      " "
    ), Gv = null;
    if (Cr.prototype.render = Qu.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null) throw Error("Cannot update an unmounted root.");
      var a = arguments;
      typeof a[1] == "function" ? console.error(
        "does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
      ) : Pe(a[1]) ? console.error(
        "You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root."
      ) : typeof a[1] < "u" && console.error(
        "You passed a second argument to root.render(...) but it only accepts one argument."
      ), a = e;
      var i = t.current, o = Kl(i);
      vp(i, o, a, t, null, null);
    }, Cr.prototype.unmount = Qu.prototype.unmount = function() {
      var e = arguments;
      if (typeof e[0] == "function" && console.error(
        "does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
      ), e = this._internalRoot, e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        (pt & (ea | au)) !== ha && console.error(
          "Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."
        ), vp(e.current, 2, null, e, null, null), ao(), t[jn] = null;
      }
    }, Cr.prototype.unstable_scheduleHydration = function(e) {
      if (e) {
        var t = Xi();
        e = { blockedOn: null, target: e, priority: t };
        for (var a = 0; a < Pf.length && t !== 0 && t < Pf[a].priority; a++) ;
        Pf.splice(a, 0, e), a === 0 && Bh(e);
      }
    }, (function() {
      var e = Op.version;
      if (e !== "19.2.4")
        throw Error(
          `Incompatible React versions: The "react" and "react-dom" packages must have the exact same version. Instead got:
  - react:      ` + (e + `
  - react-dom:  19.2.4
Learn more: https://react.dev/warnings/version-mismatch`)
        );
    })(), typeof Map == "function" && Map.prototype != null && typeof Map.prototype.forEach == "function" && typeof Set == "function" && Set.prototype != null && typeof Set.prototype.clear == "function" && typeof Set.prototype.forEach == "function" || console.error(
      "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://react.dev/link/react-polyfills"
    ), Ot.findDOMNode = function(e) {
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function" ? Error("Unable to find node on an unmounted component.") : (e = Object.keys(e).join(","), Error(
          "Argument appears to not be a ReactComponent. Keys: " + e
        ));
      return e = Bt(t), e = e !== null ? Ge(e) : null, e = e === null ? null : e.stateNode, e;
    }, !(function() {
      var e = {
        bundleType: 1,
        version: "19.2.4",
        rendererPackageName: "react-dom",
        currentDispatcherRef: G,
        reconcilerVersion: "19.2.4"
      };
      return e.overrideHookState = AE, e.overrideHookStateDeletePath = OE, e.overrideHookStateRenamePath = zE, e.overrideProps = _E, e.overridePropsDeletePath = DE, e.overridePropsRenamePath = RE, e.scheduleUpdate = ME, e.scheduleRetry = CE, e.setErrorHandler = UE, e.setSuspenseHandler = xE, e.scheduleRefresh = Le, e.scheduleRoot = oe, e.setRefreshHandler = al, e.getCurrentFiber = bp, ts(e);
    })() && gc && window.top === window.self && (-1 < navigator.userAgent.indexOf("Chrome") && navigator.userAgent.indexOf("Edge") === -1 || -1 < navigator.userAgent.indexOf("Firefox"))) {
      var HE = window.location.protocol;
      /^(https?|file):$/.test(HE) && console.info(
        "%cDownload the React DevTools for a better development experience: https://react.dev/link/react-devtools" + (HE === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://react.dev/link/react-devtools-faq` : ""),
        "font-weight:bold"
      );
    }
    M0.createRoot = function(e, t) {
      if (!Pe(e))
        throw Error("Target container is not a DOM element.");
      Ap(e);
      var a = !1, i = "", o = Kd, f = gy, d = vy;
      return t != null && (t.hydrate ? console.warn(
        "hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead."
      ) : typeof t == "object" && t !== null && t.$$typeof === Un && console.error(
        `You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`
      ), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (i = t.identifierPrefix), t.onUncaughtError !== void 0 && (o = t.onUncaughtError), t.onCaughtError !== void 0 && (f = t.onCaughtError), t.onRecoverableError !== void 0 && (d = t.onRecoverableError)), t = Ug(
        e,
        1,
        !1,
        null,
        null,
        a,
        i,
        null,
        o,
        f,
        d,
        Bg
      ), e[jn] = t.current, yr(e), new Qu(t);
    }, M0.hydrateRoot = function(e, t, a) {
      if (!Pe(e))
        throw Error("Target container is not a DOM element.");
      Ap(e), t === void 0 && console.error(
        "Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)"
      );
      var i = !1, o = "", f = Kd, d = gy, h = vy, y = null;
      return a != null && (a.unstable_strictMode === !0 && (i = !0), a.identifierPrefix !== void 0 && (o = a.identifierPrefix), a.onUncaughtError !== void 0 && (f = a.onUncaughtError), a.onCaughtError !== void 0 && (d = a.onCaughtError), a.onRecoverableError !== void 0 && (h = a.onRecoverableError), a.formState !== void 0 && (y = a.formState)), t = Ug(
        e,
        1,
        !0,
        t,
        a ?? null,
        i,
        o,
        y,
        f,
        d,
        h,
        Bg
      ), t.context = gp(null), a = t.current, i = Kl(a), i = gl(i), o = Au(i), o.callback = null, ga(a, o, i), Gn(i, "hydrateRoot()", null), a = i, t.current.lanes = a, Gi(t, a), Ta(t), e[jn] = t.current, yr(e), new Cr(t);
    }, M0.version = "19.2.4", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })(), M0;
}
var $E;
function qA() {
  if ($E) return Qv.exports;
  $E = 1;
  var J = {};
  function F() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (J.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(F);
      } catch (ve) {
        console.error(ve);
      }
    }
  }
  return J.NODE_ENV === "production" ? (F(), Qv.exports = BA()) : Qv.exports = YA(), Qv.exports;
}
var wA = qA();
const TS = /* @__PURE__ */ PE(wA);
const lT = (...J) => J.filter((F, ve, U) => !!F && F.trim() !== "" && U.indexOf(F) === ve).join(" ").trim();
const GA = (J) => J.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const XA = (J) => J.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (F, ve, U) => U ? U.toUpperCase() : ve.toLowerCase()
);
const kE = (J) => {
  const F = XA(J);
  return F.charAt(0).toUpperCase() + F.slice(1);
};
var LA = {
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
const QA = (J) => {
  for (const F in J)
    if (F.startsWith("aria-") || F === "role" || F === "title")
      return !0;
  return !1;
};
const VA = es.forwardRef(
  ({
    color: J = "currentColor",
    size: F = 24,
    strokeWidth: ve = 2,
    absoluteStrokeWidth: U,
    className: Ce = "",
    children: _e,
    iconNode: Ye,
    ...gt
  }, L) => es.createElement(
    "svg",
    {
      ref: L,
      ...LA,
      width: F,
      height: F,
      stroke: J,
      strokeWidth: U ? Number(ve) * 24 / Number(F) : ve,
      className: lT("lucide", Ce),
      ...!_e && !QA(gt) && { "aria-hidden": "true" },
      ...gt
    },
    [
      ...Ye.map(([Q, we]) => es.createElement(Q, we)),
      ...Array.isArray(_e) ? _e : [_e]
    ]
  )
);
const xm = (J, F) => {
  const ve = es.forwardRef(
    ({ className: U, ...Ce }, _e) => es.createElement(VA, {
      ref: _e,
      iconNode: F,
      className: lT(
        `lucide-${GA(kE(J))}`,
        `lucide-${J}`,
        U
      ),
      ...Ce
    })
  );
  return ve.displayName = kE(J), ve;
};
const ZA = [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
], JA = xm("arrow-up", ZA);
const KA = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], $A = xm("chevron-down", KA);
const kA = [
  [
    "path",
    { d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z", key: "1jg4f8" }
  ]
], aT = xm("facebook", kA);
const WA = [
  ["rect", { width: "20", height: "20", x: "2", y: "2", rx: "5", ry: "5", key: "2e1cvw" }],
  ["path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", key: "9exkf1" }],
  ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "r4j83e" }]
], nT = xm("instagram", WA);
const FA = [
  ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
  ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }]
], IA = xm("mail", FA);
const PA = [
  [
    "path",
    {
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v"
    }
  ]
], e3 = xm("phone", PA), t3 = () => {
  const J = [
    { label: "HOME", href: "#" },
    {
      label: "GOLF",
      href: "#",
      hasDropdown: !0,
      subItems: [
        { label: "COURSE DETAILS", href: "#" },
        { label: "RATES", href: "#" },
        { label: "HOLE BY HOLE", href: "#" },
        { label: "PASSES", href: "#" },
        { label: "MEN'S LEAGUE", href: "#" }
      ]
    },
    {
      label: "PLAYER DEVELOPMENT",
      href: "#",
      hasDropdown: !0,
      subItems: [
        { label: "JUNIOR GOLF", href: "#" },
        { label: "PRIVATE INSTRUCTION", href: "#" },
        { label: "HANDICAP", href: "#" },
        { label: "PGA JUNIOR LEAGUE", href: "#" }
      ]
    },
    { label: "USGA ADAPTIVE OPEN", href: "#" },
    { label: "CABOOSE 305 CAFE", href: "#" },
    {
      label: "EVENTS",
      href: "#",
      hasDropdown: !0,
      subItems: [
        { label: "TOURNAMENTS", href: "#" },
        { label: "WEDDINGS", href: "#" },
        { label: "BANQUETS", href: "#" }
      ]
    },
    {
      label: "CONTACT",
      href: "#",
      hasDropdown: !0,
      subItems: [
        { label: "CONTACT US", href: "#" },
        { label: "OUR TEAM", href: "#" },
        { label: "FAQS", href: "#" }
      ]
    }
  ];
  return /* @__PURE__ */ le.jsxs("header", { className: "w-full relative z-50", children: [
    /* @__PURE__ */ le.jsx("div", { className: "bg-white pt-3 pb-3", children: /* @__PURE__ */ le.jsxs("div", { className: "w-full px-6 lg:px-10 flex justify-end items-center space-x-6 text-xs font-montserrat text-[#4a3728] font-medium", children: [
      /* @__PURE__ */ le.jsx("a", { href: "#", className: "hover:text-golf-gold transition-colors", children: "Join Our E-Club" }),
      /* @__PURE__ */ le.jsx("span", { className: "text-gray-300", children: "|" }),
      /* @__PURE__ */ le.jsxs("a", { href: "tel:3162846161", className: "flex items-center space-x-1 hover:text-golf-gold transition-colors", children: [
        /* @__PURE__ */ le.jsx(e3, { size: 12, className: "fill-current" }),
        /* @__PURE__ */ le.jsx("span", { children: "(316) 284-6161" })
      ] }),
      /* @__PURE__ */ le.jsx("span", { className: "text-gray-300", children: "|" }),
      /* @__PURE__ */ le.jsxs("a", { href: "mailto:dhoush@kempersports.com", className: "flex items-center space-x-1 hover:text-golf-gold transition-colors font-bold", children: [
        /* @__PURE__ */ le.jsx(IA, { size: 12, className: "fill-current" }),
        /* @__PURE__ */ le.jsx("span", { children: "dhoush@kempersports.com" })
      ] }),
      /* @__PURE__ */ le.jsxs("div", { className: "flex items-center space-x-3 ml-4", children: [
        /* @__PURE__ */ le.jsx("a", { href: "#", className: "hover:text-golf-gold transition-colors", children: /* @__PURE__ */ le.jsx(aT, { size: 14 }) }),
        /* @__PURE__ */ le.jsx("a", { href: "#", className: "hover:text-golf-gold transition-colors", children: /* @__PURE__ */ le.jsx(nT, { size: 14 }) })
      ] })
    ] }) }),
    /* @__PURE__ */ le.jsx("div", { className: "w-full flex justify-end px-6 lg:px-10", children: /* @__PURE__ */ le.jsx("div", { className: "w-[65%] lg:w-[55%] h-[2px] bg-gray-200" }) }),
    /* @__PURE__ */ le.jsx("div", { className: "bg-white py-4 shadow-sm", children: /* @__PURE__ */ le.jsxs("div", { className: "w-full px-6 lg:px-10 flex justify-between items-center", children: [
      /* @__PURE__ */ le.jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ le.jsx("a", { href: "#", children: /* @__PURE__ */ le.jsx(
        "img",
        {
          src: "https://sandcreekgolfclub.com/wp-content/uploads/sites/151/2024/09/sand_creek_station.png",
          alt: "Sand Creek Station",
          className: "h-16 w-auto"
        }
      ) }) }),
      /* @__PURE__ */ le.jsx("nav", { className: "hidden lg:flex items-center space-x-8", children: J.map((F) => /* @__PURE__ */ le.jsxs("div", { className: "relative group", children: [
        /* @__PURE__ */ le.jsxs(
          "a",
          {
            href: F.href,
            className: "flex items-center space-x-1 text-xs font-bold tracking-wider text-[#c5a059] group-hover:text-[#4a3728] transition-colors py-2",
            children: [
              /* @__PURE__ */ le.jsx("span", { children: F.label }),
              F.hasDropdown && /* @__PURE__ */ le.jsx($A, { size: 14, className: "group-hover:translate-y-0.5 transition-transform" })
            ]
          }
        ),
        F.hasDropdown && F.subItems && /* @__PURE__ */ le.jsx("div", { className: "absolute top-full left-1/2 -translate-x-1/2 w-60 pt-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50", children: /* @__PURE__ */ le.jsx("div", { className: "bg-white shadow-xl py-4 rounded-sm border-t-[3px] border-[#c5a059] flex flex-col space-y-1", children: F.subItems.map((ve) => /* @__PURE__ */ le.jsx(
          "a",
          {
            href: ve.href,
            className: "block px-6 py-2 text-[11px] font-bold text-gray-600 hover:text-[#4a3728] hover:bg-gray-50 tracking-widest transition-colors font-montserrat",
            children: ve.label
          },
          ve.label
        )) }) })
      ] }, F.label)) }),
      /* @__PURE__ */ le.jsx("div", { className: "lg:hidden", children: /* @__PURE__ */ le.jsxs("button", { className: "text-golf-gold p-2", children: [
        /* @__PURE__ */ le.jsx("span", { className: "block w-6 h-0.5 bg-current mb-1" }),
        /* @__PURE__ */ le.jsx("span", { className: "block w-6 h-0.5 bg-current mb-1" }),
        /* @__PURE__ */ le.jsx("span", { className: "block w-6 h-0.5 bg-current" })
      ] }) })
    ] }) })
  ] });
}, l3 = () => {
  const [J, F] = es.useState(!1);
  es.useEffect(() => {
    const U = () => {
      !J && window.scrollY > 400 ? F(!0) : J && window.scrollY <= 400 && F(!1);
    };
    return window.addEventListener("scroll", U), () => window.removeEventListener("scroll", U);
  }, [J]);
  const ve = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return /* @__PURE__ */ le.jsxs("footer", { className: "w-full bg-[#1e1e1e] text-gray-300 pt-16 pb-8 border-t border-[#c5a059]/20 relative", children: [
    /* @__PURE__ */ le.jsxs("div", { className: "container mx-auto px-6 lg:px-10", children: [
      /* @__PURE__ */ le.jsx("div", { className: "flex justify-center mb-12", children: /* @__PURE__ */ le.jsx(
        "img",
        {
          src: "https://sandcreekgolfclub.com/wp-content/uploads/sites/151/2024/09/sand_creek_station.png",
          alt: "Sand Creek Station",
          className: "h-20 w-auto brightness-0 invert opacity-90"
        }
      ) }),
      /* @__PURE__ */ le.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-12 text-center mb-16 relative", children: [
        /* @__PURE__ */ le.jsx("div", { className: "hidden md:block absolute top-0 bottom-0 left-1/3 w-px bg-white/10" }),
        /* @__PURE__ */ le.jsx("div", { className: "hidden md:block absolute top-0 bottom-0 right-1/3 w-px bg-white/10" }),
        /* @__PURE__ */ le.jsxs("div", { className: "flex flex-col items-center", children: [
          /* @__PURE__ */ le.jsxs("h3", { className: "font-cinzel text-xl text-white mb-4 relative inline-block", children: [
            "Wingate Golf Club",
            /* @__PURE__ */ le.jsx("span", { className: "absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-white/30" })
          ] }),
          /* @__PURE__ */ le.jsxs("div", { className: "font-montserrat text-sm leading-relaxed space-y-1", children: [
            /* @__PURE__ */ le.jsx("p", { children: "123 Golf Course Road" }),
            /* @__PURE__ */ le.jsx("p", { children: "Wingate, KS 67206" }),
            /* @__PURE__ */ le.jsx("a", { href: "tel:3162846161", className: "hover:text-golf-gold transition-colors block mt-2 underline", children: "(316) 284-6161" })
          ] })
        ] }),
        /* @__PURE__ */ le.jsxs("div", { className: "flex flex-col items-center", children: [
          /* @__PURE__ */ le.jsxs("h3", { className: "font-cinzel text-xl text-white mb-4 relative inline-block", children: [
            "The Pro Shop",
            /* @__PURE__ */ le.jsx("span", { className: "absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-white/30" })
          ] }),
          /* @__PURE__ */ le.jsxs("div", { className: "font-montserrat text-sm leading-relaxed space-y-1", children: [
            /* @__PURE__ */ le.jsx("p", { children: "Open Daily" }),
            /* @__PURE__ */ le.jsx("p", { children: "7:00 AM - 7:00 PM" }),
            /* @__PURE__ */ le.jsx("a", { href: "tel:3162846161", className: "hover:text-golf-gold transition-colors block mt-2 underline", children: "(316) 284-6161" })
          ] })
        ] }),
        /* @__PURE__ */ le.jsxs("div", { className: "flex flex-col items-center", children: [
          /* @__PURE__ */ le.jsxs("h3", { className: "font-cinzel text-xl text-white mb-4 relative inline-block", children: [
            "Social Media",
            /* @__PURE__ */ le.jsx("span", { className: "absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-white/30" })
          ] }),
          /* @__PURE__ */ le.jsxs("div", { className: "flex space-x-4 mt-2", children: [
            /* @__PURE__ */ le.jsx("a", { href: "#", className: "flex justify-center items-center w-10 h-10 bg-white text-[#1e1e1e] hover:bg-golf-gold hover:text-white transition-all duration-300 rounded-sm", children: /* @__PURE__ */ le.jsx(aT, { size: 20, fill: "currentColor", strokeWidth: 0 }) }),
            /* @__PURE__ */ le.jsx("a", { href: "#", className: "flex justify-center items-center w-10 h-10 bg-white text-[#1e1e1e] hover:bg-golf-gold hover:text-white transition-all duration-300 rounded-sm", children: /* @__PURE__ */ le.jsx(nT, { size: 20, strokeWidth: 2.5 }) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ le.jsxs("div", { className: "border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-montserrat text-gray-500", children: [
        /* @__PURE__ */ le.jsxs("p", { children: [
          "© ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          " Wingate Golf Club. All Rights Reserved."
        ] }),
        /* @__PURE__ */ le.jsxs("div", { className: "mt-4 md:mt-0 space-x-6", children: [
          /* @__PURE__ */ le.jsx("a", { href: "#", className: "hover:text-white transition-colors", children: "Join Our E-Club" }),
          /* @__PURE__ */ le.jsx("a", { href: "#", className: "hover:text-white transition-colors", children: "Privacy Policy" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ le.jsx(
      "button",
      {
        className: `fixed bottom-8 right-8 bg-[#4a3728] text-white p-3 shadow-lg hover:bg-golf-gold transition-all duration-300 z-50 ${J ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}`,
        onClick: ve,
        "aria-label": "Scroll to top",
        children: /* @__PURE__ */ le.jsx(JA, { size: 20 })
      }
    )
  ] });
}, a3 = () => /* @__PURE__ */ le.jsxs("section", { className: "relative h-screen w-full flex items-center justify-center overflow-hidden", children: [
  /* @__PURE__ */ le.jsx(
    "div",
    {
      className: "absolute inset-0 z-0 bg-cover bg-center bg-no-repeat",
      style: {
        backgroundImage: "url('https://new-wingate.ddev.site/wp-content/uploads/2024/07/IMG-20240720-WA0010a.png')"
      },
      children: /* @__PURE__ */ le.jsx("div", { className: "absolute inset-0 bg-black/30" })
    }
  ),
  /* @__PURE__ */ le.jsxs("div", { className: "relative z-10 text-center px-4 flex flex-col items-center", children: [
    /* @__PURE__ */ le.jsx("h2", { className: "text-white font-cinzel text-sm md:text-lg tracking-[0.3em] mb-4 font-bold", children: "WELCOME TO" }),
    /* @__PURE__ */ le.jsx("h1", { className: "text-white font-cinzel text-5xl md:text-7xl lg:text-9xl font-bold tracking-wider mb-2 drop-shadow-xl leading-tight", children: "WINGATE PARK" }),
    /* @__PURE__ */ le.jsx("h2", { className: "text-white font-cinzel text-3xl md:text-5xl lg:text-6xl tracking-widest mb-6 drop-shadow-lg", children: "GOLF CLUB" }),
    /* @__PURE__ */ le.jsx("div", { className: "w-24 h-1 bg-[#c5a059] mb-8" }),
    /* @__PURE__ */ le.jsx("p", { className: "text-white font-montserrat text-sm md:text-lg tracking-[0.2em] mb-10 max-w-2xl", children: "A PRESTIGIOUS 18-HOLE CHAMPIONSHIP COURSE" }),
    /* @__PURE__ */ le.jsx("button", { className: "bg-[#c5a059] text-white font-montserrat font-bold text-sm md:text-base py-4 px-10 rounded-sm hover:bg-[#4a3728] transition-all duration-300 tracking-[0.15em] border border-[#c5a059] hover:border-[#4a3728] shadow-lg transform hover:-translate-y-1", children: "BOOK A TEE TIME" })
  ] }),
  /* @__PURE__ */ le.jsx("div", { className: "absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce", children: /* @__PURE__ */ le.jsx("div", { className: "w-0.5 h-16 bg-white/50" }) })
] }), n3 = () => /* @__PURE__ */ le.jsx("div", { className: "w-full", children: /* @__PURE__ */ le.jsx(a3, {}) }), WE = document.getElementById("header-root");
WE && TS.createRoot(WE).render(
  /* @__PURE__ */ le.jsx(ES.StrictMode, { children: /* @__PURE__ */ le.jsx(t3, {}) })
);
const FE = document.getElementById("home-root");
FE && TS.createRoot(FE).render(
  /* @__PURE__ */ le.jsx(ES.StrictMode, { children: /* @__PURE__ */ le.jsx(n3, {}) })
);
const IE = document.getElementById("footer-root");
IE && TS.createRoot(IE).render(
  /* @__PURE__ */ le.jsx(ES.StrictMode, { children: /* @__PURE__ */ le.jsx(l3, {}) })
);
