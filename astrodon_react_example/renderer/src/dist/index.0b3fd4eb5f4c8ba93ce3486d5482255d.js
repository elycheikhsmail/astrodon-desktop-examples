(() => {
  // deno:https://cdn.skypack.dev/-/object-assign@v4.1.1-LbCnB3r2y2yFmhmiCfPn/dist=es2019,mode=imports/optimized/object-assign.js
  var getOwnPropertySymbols = Object.getOwnPropertySymbols;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var propIsEnumerable = Object.prototype.propertyIsEnumerable;
  function toObject(val) {
    if (val === null || val === void 0) {
      throw new TypeError("Object.assign cannot be called with null or undefined");
    }
    return Object(val);
  }
  function shouldUseNative() {
    try {
      if (!Object.assign) {
        return false;
      }
      var test1 = new String("abc");
      test1[5] = "de";
      if (Object.getOwnPropertyNames(test1)[0] === "5") {
        return false;
      }
      var test2 = {};
      for (var i2 = 0; i2 < 10; i2++) {
        test2["_" + String.fromCharCode(i2)] = i2;
      }
      var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
        return test2[n];
      });
      if (order2.join("") !== "0123456789") {
        return false;
      }
      var test3 = {};
      "abcdefghijklmnopqrst".split("").forEach(function(letter) {
        test3[letter] = letter;
      });
      if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
        return false;
      }
      return true;
    } catch (err) {
      return false;
    }
  }
  var objectAssign = shouldUseNative() ? Object.assign : function(target, source) {
    var from;
    var to = toObject(target);
    var symbols;
    for (var s = 1; s < arguments.length; s++) {
      from = Object(arguments[s]);
      for (var key in from) {
        if (hasOwnProperty.call(from, key)) {
          to[key] = from[key];
        }
      }
      if (getOwnPropertySymbols) {
        symbols = getOwnPropertySymbols(from);
        for (var i2 = 0; i2 < symbols.length; i2++) {
          if (propIsEnumerable.call(from, symbols[i2])) {
            to[symbols[i2]] = from[symbols[i2]];
          }
        }
      }
    }
    return to;
  };
  var object_assign_default = objectAssign;

  // deno:https://cdn.skypack.dev/-/react@v17.0.1-yH0aYV1FOvoIPeKBbHxg/dist=es2019,mode=imports/optimized/react.js
  function createCommonjsModule(fn, basedir, module) {
    return module = {
      path: basedir,
      exports: {},
      require: function(path, base) {
        return commonjsRequire(path, base === void 0 || base === null ? module.path : base);
      }
    }, fn(module, module.exports), module.exports;
  }
  function commonjsRequire() {
    throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
  }
  var react_production_min = createCommonjsModule(function(module, exports) {
    var n = 60103, p = 60106;
    exports.Fragment = 60107;
    exports.StrictMode = 60108;
    exports.Profiler = 60114;
    var q = 60109, r3 = 60110, t2 = 60112;
    exports.Suspense = 60113;
    var u = 60115, v = 60116;
    if (typeof Symbol === "function" && Symbol.for) {
      var w = Symbol.for;
      n = w("react.element");
      p = w("react.portal");
      exports.Fragment = w("react.fragment");
      exports.StrictMode = w("react.strict_mode");
      exports.Profiler = w("react.profiler");
      q = w("react.provider");
      r3 = w("react.context");
      t2 = w("react.forward_ref");
      exports.Suspense = w("react.suspense");
      u = w("react.memo");
      v = w("react.lazy");
    }
    var x = typeof Symbol === "function" && Symbol.iterator;
    function y2(a2) {
      if (a2 === null || typeof a2 !== "object")
        return null;
      a2 = x && a2[x] || a2["@@iterator"];
      return typeof a2 === "function" ? a2 : null;
    }
    function z(a2) {
      for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a2, c = 1; c < arguments.length; c++)
        b += "&args[]=" + encodeURIComponent(arguments[c]);
      return "Minified React error #" + a2 + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    var A = { isMounted: function() {
      return false;
    }, enqueueForceUpdate: function() {
    }, enqueueReplaceState: function() {
    }, enqueueSetState: function() {
    } }, B3 = {};
    function C2(a2, b, c) {
      this.props = a2;
      this.context = b;
      this.refs = B3;
      this.updater = c || A;
    }
    C2.prototype.isReactComponent = {};
    C2.prototype.setState = function(a2, b) {
      if (typeof a2 !== "object" && typeof a2 !== "function" && a2 != null)
        throw Error(z(85));
      this.updater.enqueueSetState(this, a2, b, "setState");
    };
    C2.prototype.forceUpdate = function(a2) {
      this.updater.enqueueForceUpdate(this, a2, "forceUpdate");
    };
    function D2() {
    }
    D2.prototype = C2.prototype;
    function E2(a2, b, c) {
      this.props = a2;
      this.context = b;
      this.refs = B3;
      this.updater = c || A;
    }
    var F3 = E2.prototype = new D2();
    F3.constructor = E2;
    object_assign_default(F3, C2.prototype);
    F3.isPureReactComponent = true;
    var G2 = { current: null }, H3 = Object.prototype.hasOwnProperty, I3 = { key: true, ref: true, __self: true, __source: true };
    function J2(a2, b, c) {
      var e, d = {}, k = null, h = null;
      if (b != null)
        for (e in b.ref !== void 0 && (h = b.ref), b.key !== void 0 && (k = "" + b.key), b)
          H3.call(b, e) && !I3.hasOwnProperty(e) && (d[e] = b[e]);
      var g = arguments.length - 2;
      if (g === 1)
        d.children = c;
      else if (1 < g) {
        for (var f = Array(g), m = 0; m < g; m++)
          f[m] = arguments[m + 2];
        d.children = f;
      }
      if (a2 && a2.defaultProps)
        for (e in g = a2.defaultProps, g)
          d[e] === void 0 && (d[e] = g[e]);
      return { $$typeof: n, type: a2, key: k, ref: h, props: d, _owner: G2.current };
    }
    function K(a2, b) {
      return { $$typeof: n, type: a2.type, key: b, ref: a2.ref, props: a2.props, _owner: a2._owner };
    }
    function L(a2) {
      return typeof a2 === "object" && a2 !== null && a2.$$typeof === n;
    }
    function escape2(a2) {
      var b = { "=": "=0", ":": "=2" };
      return "$" + a2.replace(/[=:]/g, function(a22) {
        return b[a22];
      });
    }
    var M2 = /\/+/g;
    function N2(a2, b) {
      return typeof a2 === "object" && a2 !== null && a2.key != null ? escape2("" + a2.key) : b.toString(36);
    }
    function O2(a2, b, c, e, d) {
      var k = typeof a2;
      if (k === "undefined" || k === "boolean")
        a2 = null;
      var h = false;
      if (a2 === null)
        h = true;
      else
        switch (k) {
          case "string":
          case "number":
            h = true;
            break;
          case "object":
            switch (a2.$$typeof) {
              case n:
              case p:
                h = true;
            }
        }
      if (h)
        return h = a2, d = d(h), a2 = e === "" ? "." + N2(h, 0) : e, Array.isArray(d) ? (c = "", a2 != null && (c = a2.replace(M2, "$&/") + "/"), O2(d, b, c, "", function(a22) {
          return a22;
        })) : d != null && (L(d) && (d = K(d, c + (!d.key || h && h.key === d.key ? "" : ("" + d.key).replace(M2, "$&/") + "/") + a2)), b.push(d)), 1;
      h = 0;
      e = e === "" ? "." : e + ":";
      if (Array.isArray(a2))
        for (var g = 0; g < a2.length; g++) {
          k = a2[g];
          var f = e + N2(k, g);
          h += O2(k, b, c, f, d);
        }
      else if (f = y2(a2), typeof f === "function")
        for (a2 = f.call(a2), g = 0; !(k = a2.next()).done; )
          k = k.value, f = e + N2(k, g++), h += O2(k, b, c, f, d);
      else if (k === "object")
        throw b = "" + a2, Error(z(31, b === "[object Object]" ? "object with keys {" + Object.keys(a2).join(", ") + "}" : b));
      return h;
    }
    function P2(a2, b, c) {
      if (a2 == null)
        return a2;
      var e = [], d = 0;
      O2(a2, e, "", "", function(a22) {
        return b.call(c, a22, d++);
      });
      return e;
    }
    function Q(a2) {
      if (a2._status === -1) {
        var b = a2._result;
        b = b();
        a2._status = 0;
        a2._result = b;
        b.then(function(b2) {
          a2._status === 0 && (b2 = b2.default, a2._status = 1, a2._result = b2);
        }, function(b2) {
          a2._status === 0 && (a2._status = 2, a2._result = b2);
        });
      }
      if (a2._status === 1)
        return a2._result;
      throw a2._result;
    }
    var R2 = { current: null };
    function S2() {
      var a2 = R2.current;
      if (a2 === null)
        throw Error(z(321));
      return a2;
    }
    var T2 = { ReactCurrentDispatcher: R2, ReactCurrentBatchConfig: { transition: 0 }, ReactCurrentOwner: G2, IsSomeRendererActing: { current: false }, assign: object_assign_default };
    exports.Children = { map: P2, forEach: function(a2, b, c) {
      P2(a2, function() {
        b.apply(this, arguments);
      }, c);
    }, count: function(a2) {
      var b = 0;
      P2(a2, function() {
        b++;
      });
      return b;
    }, toArray: function(a2) {
      return P2(a2, function(a22) {
        return a22;
      }) || [];
    }, only: function(a2) {
      if (!L(a2))
        throw Error(z(143));
      return a2;
    } };
    exports.Component = C2;
    exports.PureComponent = E2;
    exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T2;
    exports.cloneElement = function(a2, b, c) {
      if (a2 === null || a2 === void 0)
        throw Error(z(267, a2));
      var e = object_assign_default({}, a2.props), d = a2.key, k = a2.ref, h = a2._owner;
      if (b != null) {
        b.ref !== void 0 && (k = b.ref, h = G2.current);
        b.key !== void 0 && (d = "" + b.key);
        if (a2.type && a2.type.defaultProps)
          var g = a2.type.defaultProps;
        for (f in b)
          H3.call(b, f) && !I3.hasOwnProperty(f) && (e[f] = b[f] === void 0 && g !== void 0 ? g[f] : b[f]);
      }
      var f = arguments.length - 2;
      if (f === 1)
        e.children = c;
      else if (1 < f) {
        g = Array(f);
        for (var m = 0; m < f; m++)
          g[m] = arguments[m + 2];
        e.children = g;
      }
      return {
        $$typeof: n,
        type: a2.type,
        key: d,
        ref: k,
        props: e,
        _owner: h
      };
    };
    exports.createContext = function(a2, b) {
      b === void 0 && (b = null);
      a2 = { $$typeof: r3, _calculateChangedBits: b, _currentValue: a2, _currentValue2: a2, _threadCount: 0, Provider: null, Consumer: null };
      a2.Provider = { $$typeof: q, _context: a2 };
      return a2.Consumer = a2;
    };
    exports.createElement = J2;
    exports.createFactory = function(a2) {
      var b = J2.bind(null, a2);
      b.type = a2;
      return b;
    };
    exports.createRef = function() {
      return { current: null };
    };
    exports.forwardRef = function(a2) {
      return { $$typeof: t2, render: a2 };
    };
    exports.isValidElement = L;
    exports.lazy = function(a2) {
      return { $$typeof: v, _payload: { _status: -1, _result: a2 }, _init: Q };
    };
    exports.memo = function(a2, b) {
      return { $$typeof: u, type: a2, compare: b === void 0 ? null : b };
    };
    exports.useCallback = function(a2, b) {
      return S2().useCallback(a2, b);
    };
    exports.useContext = function(a2, b) {
      return S2().useContext(a2, b);
    };
    exports.useDebugValue = function() {
    };
    exports.useEffect = function(a2, b) {
      return S2().useEffect(a2, b);
    };
    exports.useImperativeHandle = function(a2, b, c) {
      return S2().useImperativeHandle(a2, b, c);
    };
    exports.useLayoutEffect = function(a2, b) {
      return S2().useLayoutEffect(a2, b);
    };
    exports.useMemo = function(a2, b) {
      return S2().useMemo(a2, b);
    };
    exports.useReducer = function(a2, b, c) {
      return S2().useReducer(a2, b, c);
    };
    exports.useRef = function(a2) {
      return S2().useRef(a2);
    };
    exports.useState = function(a2) {
      return S2().useState(a2);
    };
    exports.version = "17.0.1";
  });
  var react = createCommonjsModule(function(module) {
    {
      module.exports = react_production_min;
    }
  });
  var Children = react.Children;
  var Component = react.Component;
  var Fragment = react.Fragment;
  var Profiler = react.Profiler;
  var PureComponent = react.PureComponent;
  var StrictMode = react.StrictMode;
  var Suspense = react.Suspense;
  var __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = react.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  var cloneElement = react.cloneElement;
  var createContext = react.createContext;
  var createElement = react.createElement;
  var createFactory = react.createFactory;
  var createRef = react.createRef;
  var react_default = react;
  var forwardRef = react.forwardRef;
  var isValidElement = react.isValidElement;
  var lazy = react.lazy;
  var memo = react.memo;
  var useCallback = react.useCallback;
  var useContext = react.useContext;
  var useDebugValue = react.useDebugValue;
  var useEffect = react.useEffect;
  var useImperativeHandle = react.useImperativeHandle;
  var useLayoutEffect = react.useLayoutEffect;
  var useMemo = react.useMemo;
  var useReducer = react.useReducer;
  var useRef = react.useRef;
  var useState = react.useState;
  var version = react.version;

  // deno:https://cdn.skypack.dev/-/scheduler@v0.20.2-PAU9F1YosUNPKr7V4s0j/dist=es2019,mode=imports/optimized/scheduler.js
  function createCommonjsModule2(fn, basedir, module) {
    return module = {
      path: basedir,
      exports: {},
      require: function(path, base) {
        return commonjsRequire2(path, base === void 0 || base === null ? module.path : base);
      }
    }, fn(module, module.exports), module.exports;
  }
  function commonjsRequire2() {
    throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
  }
  var scheduler_production_min = createCommonjsModule2(function(module, exports) {
    var f, g, h, k;
    if (typeof performance === "object" && typeof performance.now === "function") {
      var l = performance;
      exports.unstable_now = function() {
        return l.now();
      };
    } else {
      var p = Date, q = p.now();
      exports.unstable_now = function() {
        return p.now() - q;
      };
    }
    if (typeof window === "undefined" || typeof MessageChannel !== "function") {
      var t2 = null, u = null, w = function() {
        if (t2 !== null)
          try {
            var a2 = exports.unstable_now();
            t2(true, a2);
            t2 = null;
          } catch (b) {
            throw setTimeout(w, 0), b;
          }
      };
      f = function(a2) {
        t2 !== null ? setTimeout(f, 0, a2) : (t2 = a2, setTimeout(w, 0));
      };
      g = function(a2, b) {
        u = setTimeout(a2, b);
      };
      h = function() {
        clearTimeout(u);
      };
      exports.unstable_shouldYield = function() {
        return false;
      };
      k = exports.unstable_forceFrameRate = function() {
      };
    } else {
      var x = window.setTimeout, y2 = window.clearTimeout;
      if (typeof console !== "undefined") {
        var z = window.cancelAnimationFrame;
        typeof window.requestAnimationFrame !== "function" && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
        typeof z !== "function" && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
      }
      var A = false, B3 = null, C2 = -1, D2 = 5, E2 = 0;
      exports.unstable_shouldYield = function() {
        return exports.unstable_now() >= E2;
      };
      k = function() {
      };
      exports.unstable_forceFrameRate = function(a2) {
        0 > a2 || 125 < a2 ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : D2 = 0 < a2 ? Math.floor(1e3 / a2) : 5;
      };
      var F3 = new MessageChannel(), G2 = F3.port2;
      F3.port1.onmessage = function() {
        if (B3 !== null) {
          var a2 = exports.unstable_now();
          E2 = a2 + D2;
          try {
            B3(true, a2) ? G2.postMessage(null) : (A = false, B3 = null);
          } catch (b) {
            throw G2.postMessage(null), b;
          }
        } else
          A = false;
      };
      f = function(a2) {
        B3 = a2;
        A || (A = true, G2.postMessage(null));
      };
      g = function(a2, b) {
        C2 = x(function() {
          a2(exports.unstable_now());
        }, b);
      };
      h = function() {
        y2(C2);
        C2 = -1;
      };
    }
    function H3(a2, b) {
      var c = a2.length;
      a2.push(b);
      a:
        for (; ; ) {
          var d = c - 1 >>> 1, e = a2[d];
          if (e !== void 0 && 0 < I3(e, b))
            a2[d] = b, a2[c] = e, c = d;
          else
            break a;
        }
    }
    function J2(a2) {
      a2 = a2[0];
      return a2 === void 0 ? null : a2;
    }
    function K(a2) {
      var b = a2[0];
      if (b !== void 0) {
        var c = a2.pop();
        if (c !== b) {
          a2[0] = c;
          a:
            for (var d = 0, e = a2.length; d < e; ) {
              var m = 2 * (d + 1) - 1, n = a2[m], v = m + 1, r3 = a2[v];
              if (n !== void 0 && 0 > I3(n, c))
                r3 !== void 0 && 0 > I3(r3, n) ? (a2[d] = r3, a2[v] = c, d = v) : (a2[d] = n, a2[m] = c, d = m);
              else if (r3 !== void 0 && 0 > I3(r3, c))
                a2[d] = r3, a2[v] = c, d = v;
              else
                break a;
            }
        }
        return b;
      }
      return null;
    }
    function I3(a2, b) {
      var c = a2.sortIndex - b.sortIndex;
      return c !== 0 ? c : a2.id - b.id;
    }
    var L = [], M2 = [], N2 = 1, O2 = null, P2 = 3, Q = false, R2 = false, S2 = false;
    function T2(a2) {
      for (var b = J2(M2); b !== null; ) {
        if (b.callback === null)
          K(M2);
        else if (b.startTime <= a2)
          K(M2), b.sortIndex = b.expirationTime, H3(L, b);
        else
          break;
        b = J2(M2);
      }
    }
    function U2(a2) {
      S2 = false;
      T2(a2);
      if (!R2)
        if (J2(L) !== null)
          R2 = true, f(V2);
        else {
          var b = J2(M2);
          b !== null && g(U2, b.startTime - a2);
        }
    }
    function V2(a2, b) {
      R2 = false;
      S2 && (S2 = false, h());
      Q = true;
      var c = P2;
      try {
        T2(b);
        for (O2 = J2(L); O2 !== null && (!(O2.expirationTime > b) || a2 && !exports.unstable_shouldYield()); ) {
          var d = O2.callback;
          if (typeof d === "function") {
            O2.callback = null;
            P2 = O2.priorityLevel;
            var e = d(O2.expirationTime <= b);
            b = exports.unstable_now();
            typeof e === "function" ? O2.callback = e : O2 === J2(L) && K(L);
            T2(b);
          } else
            K(L);
          O2 = J2(L);
        }
        if (O2 !== null)
          var m = true;
        else {
          var n = J2(M2);
          n !== null && g(U2, n.startTime - b);
          m = false;
        }
        return m;
      } finally {
        O2 = null, P2 = c, Q = false;
      }
    }
    var W2 = k;
    exports.unstable_IdlePriority = 5;
    exports.unstable_ImmediatePriority = 1;
    exports.unstable_LowPriority = 4;
    exports.unstable_NormalPriority = 3;
    exports.unstable_Profiling = null;
    exports.unstable_UserBlockingPriority = 2;
    exports.unstable_cancelCallback = function(a2) {
      a2.callback = null;
    };
    exports.unstable_continueExecution = function() {
      R2 || Q || (R2 = true, f(V2));
    };
    exports.unstable_getCurrentPriorityLevel = function() {
      return P2;
    };
    exports.unstable_getFirstCallbackNode = function() {
      return J2(L);
    };
    exports.unstable_next = function(a2) {
      switch (P2) {
        case 1:
        case 2:
        case 3:
          var b = 3;
          break;
        default:
          b = P2;
      }
      var c = P2;
      P2 = b;
      try {
        return a2();
      } finally {
        P2 = c;
      }
    };
    exports.unstable_pauseExecution = function() {
    };
    exports.unstable_requestPaint = W2;
    exports.unstable_runWithPriority = function(a2, b) {
      switch (a2) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          a2 = 3;
      }
      var c = P2;
      P2 = a2;
      try {
        return b();
      } finally {
        P2 = c;
      }
    };
    exports.unstable_scheduleCallback = function(a2, b, c) {
      var d = exports.unstable_now();
      typeof c === "object" && c !== null ? (c = c.delay, c = typeof c === "number" && 0 < c ? d + c : d) : c = d;
      switch (a2) {
        case 1:
          var e = -1;
          break;
        case 2:
          e = 250;
          break;
        case 5:
          e = 1073741823;
          break;
        case 4:
          e = 1e4;
          break;
        default:
          e = 5e3;
      }
      e = c + e;
      a2 = { id: N2++, callback: b, priorityLevel: a2, startTime: c, expirationTime: e, sortIndex: -1 };
      c > d ? (a2.sortIndex = c, H3(M2, a2), J2(L) === null && a2 === J2(M2) && (S2 ? h() : S2 = true, g(U2, c - d))) : (a2.sortIndex = e, H3(L, a2), R2 || Q || (R2 = true, f(V2)));
      return a2;
    };
    exports.unstable_wrapCallback = function(a2) {
      var b = P2;
      return function() {
        var c = P2;
        P2 = b;
        try {
          return a2.apply(this, arguments);
        } finally {
          P2 = c;
        }
      };
    };
  });
  var scheduler = createCommonjsModule2(function(module) {
    {
      module.exports = scheduler_production_min;
    }
  });
  var scheduler_default = scheduler;
  var unstable_IdlePriority = scheduler.unstable_IdlePriority;
  var unstable_ImmediatePriority = scheduler.unstable_ImmediatePriority;
  var unstable_LowPriority = scheduler.unstable_LowPriority;
  var unstable_NormalPriority = scheduler.unstable_NormalPriority;
  var unstable_Profiling = scheduler.unstable_Profiling;
  var unstable_UserBlockingPriority = scheduler.unstable_UserBlockingPriority;
  var unstable_cancelCallback = scheduler.unstable_cancelCallback;
  var unstable_continueExecution = scheduler.unstable_continueExecution;
  var unstable_forceFrameRate = scheduler.unstable_forceFrameRate;
  var unstable_getCurrentPriorityLevel = scheduler.unstable_getCurrentPriorityLevel;
  var unstable_getFirstCallbackNode = scheduler.unstable_getFirstCallbackNode;
  var unstable_next = scheduler.unstable_next;
  var unstable_now = scheduler.unstable_now;
  var unstable_pauseExecution = scheduler.unstable_pauseExecution;
  var unstable_requestPaint = scheduler.unstable_requestPaint;
  var unstable_runWithPriority = scheduler.unstable_runWithPriority;
  var unstable_scheduleCallback = scheduler.unstable_scheduleCallback;
  var unstable_shouldYield = scheduler.unstable_shouldYield;
  var unstable_wrapCallback = scheduler.unstable_wrapCallback;

  // deno:https://cdn.skypack.dev/-/react-dom@v17.0.1-oZ1BXZ5opQ1DbTh7nu9r/dist=es2019,mode=imports/optimized/react-dom.js
  function createCommonjsModule3(fn, basedir, module) {
    return module = {
      path: basedir,
      exports: {},
      require: function(path, base) {
        return commonjsRequire3(path, base === void 0 || base === null ? module.path : base);
      }
    }, fn(module, module.exports), module.exports;
  }
  function commonjsRequire3() {
    throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
  }
  function y(a2) {
    for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a2, c = 1; c < arguments.length; c++)
      b += "&args[]=" + encodeURIComponent(arguments[c]);
    return "Minified React error #" + a2 + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  if (!react_default)
    throw Error(y(227));
  var ba = new Set();
  var ca = {};
  function da(a2, b) {
    ea(a2, b);
    ea(a2 + "Capture", b);
  }
  function ea(a2, b) {
    ca[a2] = b;
    for (a2 = 0; a2 < b.length; a2++)
      ba.add(b[a2]);
  }
  var fa = !(typeof window === "undefined" || typeof window.document === "undefined" || typeof window.document.createElement === "undefined");
  var ha = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/;
  var ia = Object.prototype.hasOwnProperty;
  var ja = {};
  var ka = {};
  function la(a2) {
    if (ia.call(ka, a2))
      return true;
    if (ia.call(ja, a2))
      return false;
    if (ha.test(a2))
      return ka[a2] = true;
    ja[a2] = true;
    return false;
  }
  function ma(a2, b, c, d) {
    if (c !== null && c.type === 0)
      return false;
    switch (typeof b) {
      case "function":
      case "symbol":
        return true;
      case "boolean":
        if (d)
          return false;
        if (c !== null)
          return !c.acceptsBooleans;
        a2 = a2.toLowerCase().slice(0, 5);
        return a2 !== "data-" && a2 !== "aria-";
      default:
        return false;
    }
  }
  function na(a2, b, c, d) {
    if (b === null || typeof b === "undefined" || ma(a2, b, c, d))
      return true;
    if (d)
      return false;
    if (c !== null)
      switch (c.type) {
        case 3:
          return !b;
        case 4:
          return b === false;
        case 5:
          return isNaN(b);
        case 6:
          return isNaN(b) || 1 > b;
      }
    return false;
  }
  function B(a2, b, c, d, e, f, g) {
    this.acceptsBooleans = b === 2 || b === 3 || b === 4;
    this.attributeName = d;
    this.attributeNamespace = e;
    this.mustUseProperty = c;
    this.propertyName = a2;
    this.type = b;
    this.sanitizeURL = f;
    this.removeEmptyString = g;
  }
  var D = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a2) {
    D[a2] = new B(a2, 0, false, a2, null, false, false);
  });
  [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a2) {
    var b = a2[0];
    D[b] = new B(b, 1, false, a2[1], null, false, false);
  });
  ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a2) {
    D[a2] = new B(a2, 2, false, a2.toLowerCase(), null, false, false);
  });
  ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a2) {
    D[a2] = new B(a2, 2, false, a2, null, false, false);
  });
  "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a2) {
    D[a2] = new B(a2, 3, false, a2.toLowerCase(), null, false, false);
  });
  ["checked", "multiple", "muted", "selected"].forEach(function(a2) {
    D[a2] = new B(a2, 3, true, a2, null, false, false);
  });
  ["capture", "download"].forEach(function(a2) {
    D[a2] = new B(a2, 4, false, a2, null, false, false);
  });
  ["cols", "rows", "size", "span"].forEach(function(a2) {
    D[a2] = new B(a2, 6, false, a2, null, false, false);
  });
  ["rowSpan", "start"].forEach(function(a2) {
    D[a2] = new B(a2, 5, false, a2.toLowerCase(), null, false, false);
  });
  var oa = /[\-:]([a-z])/g;
  function pa(a2) {
    return a2[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a2) {
    var b = a2.replace(oa, pa);
    D[b] = new B(b, 1, false, a2, null, false, false);
  });
  "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a2) {
    var b = a2.replace(oa, pa);
    D[b] = new B(b, 1, false, a2, "http://www.w3.org/1999/xlink", false, false);
  });
  ["xml:base", "xml:lang", "xml:space"].forEach(function(a2) {
    var b = a2.replace(oa, pa);
    D[b] = new B(b, 1, false, a2, "http://www.w3.org/XML/1998/namespace", false, false);
  });
  ["tabIndex", "crossOrigin"].forEach(function(a2) {
    D[a2] = new B(a2, 1, false, a2.toLowerCase(), null, false, false);
  });
  D.xlinkHref = new B("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
  ["src", "href", "action", "formAction"].forEach(function(a2) {
    D[a2] = new B(a2, 1, false, a2.toLowerCase(), null, true, true);
  });
  function qa(a2, b, c, d) {
    var e = D.hasOwnProperty(b) ? D[b] : null;
    var f = e !== null ? e.type === 0 : d ? false : !(2 < b.length) || b[0] !== "o" && b[0] !== "O" || b[1] !== "n" && b[1] !== "N" ? false : true;
    f || (na(b, c, e, d) && (c = null), d || e === null ? la(b) && (c === null ? a2.removeAttribute(b) : a2.setAttribute(b, "" + c)) : e.mustUseProperty ? a2[e.propertyName] = c === null ? e.type === 3 ? false : "" : c : (b = e.attributeName, d = e.attributeNamespace, c === null ? a2.removeAttribute(b) : (e = e.type, c = e === 3 || e === 4 && c === true ? "" : "" + c, d ? a2.setAttributeNS(d, b, c) : a2.setAttribute(b, c))));
  }
  var ra = react_default.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  var sa = 60103;
  var ta = 60106;
  var ua = 60107;
  var wa = 60108;
  var xa = 60114;
  var ya = 60109;
  var za = 60110;
  var Aa = 60112;
  var Ba = 60113;
  var Ca = 60120;
  var Da = 60115;
  var Ea = 60116;
  var Fa = 60121;
  var Ga = 60128;
  var Ha = 60129;
  var Ia = 60130;
  var Ja = 60131;
  if (typeof Symbol === "function" && Symbol.for) {
    E2 = Symbol.for;
    sa = E2("react.element");
    ta = E2("react.portal");
    ua = E2("react.fragment");
    wa = E2("react.strict_mode");
    xa = E2("react.profiler");
    ya = E2("react.provider");
    za = E2("react.context");
    Aa = E2("react.forward_ref");
    Ba = E2("react.suspense");
    Ca = E2("react.suspense_list");
    Da = E2("react.memo");
    Ea = E2("react.lazy");
    Fa = E2("react.block");
    E2("react.scope");
    Ga = E2("react.opaque.id");
    Ha = E2("react.debug_trace_mode");
    Ia = E2("react.offscreen");
    Ja = E2("react.legacy_hidden");
  }
  var E2;
  var Ka = typeof Symbol === "function" && Symbol.iterator;
  function La(a2) {
    if (a2 === null || typeof a2 !== "object")
      return null;
    a2 = Ka && a2[Ka] || a2["@@iterator"];
    return typeof a2 === "function" ? a2 : null;
  }
  var Ma;
  function Na(a2) {
    if (Ma === void 0)
      try {
        throw Error();
      } catch (c) {
        var b = c.stack.trim().match(/\n( *(at )?)/);
        Ma = b && b[1] || "";
      }
    return "\n" + Ma + a2;
  }
  var Oa = false;
  function Pa(a2, b) {
    if (!a2 || Oa)
      return "";
    Oa = true;
    var c = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (b)
        if (b = function() {
          throw Error();
        }, Object.defineProperty(b.prototype, "props", { set: function() {
          throw Error();
        } }), typeof Reflect === "object" && Reflect.construct) {
          try {
            Reflect.construct(b, []);
          } catch (k) {
            var d = k;
          }
          Reflect.construct(a2, [], b);
        } else {
          try {
            b.call();
          } catch (k) {
            d = k;
          }
          a2.call(b.prototype);
        }
      else {
        try {
          throw Error();
        } catch (k) {
          d = k;
        }
        a2();
      }
    } catch (k) {
      if (k && d && typeof k.stack === "string") {
        for (var e = k.stack.split("\n"), f = d.stack.split("\n"), g = e.length - 1, h = f.length - 1; 1 <= g && 0 <= h && e[g] !== f[h]; )
          h--;
        for (; 1 <= g && 0 <= h; g--, h--)
          if (e[g] !== f[h]) {
            if (g !== 1 || h !== 1) {
              do
                if (g--, h--, 0 > h || e[g] !== f[h])
                  return "\n" + e[g].replace(" at new ", " at ");
              while (1 <= g && 0 <= h);
            }
            break;
          }
      }
    } finally {
      Oa = false, Error.prepareStackTrace = c;
    }
    return (a2 = a2 ? a2.displayName || a2.name : "") ? Na(a2) : "";
  }
  function Qa(a2) {
    switch (a2.tag) {
      case 5:
        return Na(a2.type);
      case 16:
        return Na("Lazy");
      case 13:
        return Na("Suspense");
      case 19:
        return Na("SuspenseList");
      case 0:
      case 2:
      case 15:
        return a2 = Pa(a2.type, false), a2;
      case 11:
        return a2 = Pa(a2.type.render, false), a2;
      case 22:
        return a2 = Pa(a2.type._render, false), a2;
      case 1:
        return a2 = Pa(a2.type, true), a2;
      default:
        return "";
    }
  }
  function Ra(a2) {
    if (a2 == null)
      return null;
    if (typeof a2 === "function")
      return a2.displayName || a2.name || null;
    if (typeof a2 === "string")
      return a2;
    switch (a2) {
      case ua:
        return "Fragment";
      case ta:
        return "Portal";
      case xa:
        return "Profiler";
      case wa:
        return "StrictMode";
      case Ba:
        return "Suspense";
      case Ca:
        return "SuspenseList";
    }
    if (typeof a2 === "object")
      switch (a2.$$typeof) {
        case za:
          return (a2.displayName || "Context") + ".Consumer";
        case ya:
          return (a2._context.displayName || "Context") + ".Provider";
        case Aa:
          var b = a2.render;
          b = b.displayName || b.name || "";
          return a2.displayName || (b !== "" ? "ForwardRef(" + b + ")" : "ForwardRef");
        case Da:
          return Ra(a2.type);
        case Fa:
          return Ra(a2._render);
        case Ea:
          b = a2._payload;
          a2 = a2._init;
          try {
            return Ra(a2(b));
          } catch (c) {
          }
      }
    return null;
  }
  function Sa(a2) {
    switch (typeof a2) {
      case "boolean":
      case "number":
      case "object":
      case "string":
      case "undefined":
        return a2;
      default:
        return "";
    }
  }
  function Ta(a2) {
    var b = a2.type;
    return (a2 = a2.nodeName) && a2.toLowerCase() === "input" && (b === "checkbox" || b === "radio");
  }
  function Ua(a2) {
    var b = Ta(a2) ? "checked" : "value", c = Object.getOwnPropertyDescriptor(a2.constructor.prototype, b), d = "" + a2[b];
    if (!a2.hasOwnProperty(b) && typeof c !== "undefined" && typeof c.get === "function" && typeof c.set === "function") {
      var e = c.get, f = c.set;
      Object.defineProperty(a2, b, { configurable: true, get: function() {
        return e.call(this);
      }, set: function(a22) {
        d = "" + a22;
        f.call(this, a22);
      } });
      Object.defineProperty(a2, b, { enumerable: c.enumerable });
      return { getValue: function() {
        return d;
      }, setValue: function(a22) {
        d = "" + a22;
      }, stopTracking: function() {
        a2._valueTracker = null;
        delete a2[b];
      } };
    }
  }
  function Va(a2) {
    a2._valueTracker || (a2._valueTracker = Ua(a2));
  }
  function Wa(a2) {
    if (!a2)
      return false;
    var b = a2._valueTracker;
    if (!b)
      return true;
    var c = b.getValue();
    var d = "";
    a2 && (d = Ta(a2) ? a2.checked ? "true" : "false" : a2.value);
    a2 = d;
    return a2 !== c ? (b.setValue(a2), true) : false;
  }
  function Xa(a2) {
    a2 = a2 || (typeof document !== "undefined" ? document : void 0);
    if (typeof a2 === "undefined")
      return null;
    try {
      return a2.activeElement || a2.body;
    } catch (b) {
      return a2.body;
    }
  }
  function Ya(a2, b) {
    var c = b.checked;
    return object_assign_default({}, b, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: c != null ? c : a2._wrapperState.initialChecked });
  }
  function Za(a2, b) {
    var c = b.defaultValue == null ? "" : b.defaultValue, d = b.checked != null ? b.checked : b.defaultChecked;
    c = Sa(b.value != null ? b.value : c);
    a2._wrapperState = { initialChecked: d, initialValue: c, controlled: b.type === "checkbox" || b.type === "radio" ? b.checked != null : b.value != null };
  }
  function $a(a2, b) {
    b = b.checked;
    b != null && qa(a2, "checked", b, false);
  }
  function ab(a2, b) {
    $a(a2, b);
    var c = Sa(b.value), d = b.type;
    if (c != null)
      if (d === "number") {
        if (c === 0 && a2.value === "" || a2.value != c)
          a2.value = "" + c;
      } else
        a2.value !== "" + c && (a2.value = "" + c);
    else if (d === "submit" || d === "reset") {
      a2.removeAttribute("value");
      return;
    }
    b.hasOwnProperty("value") ? bb(a2, b.type, c) : b.hasOwnProperty("defaultValue") && bb(a2, b.type, Sa(b.defaultValue));
    b.checked == null && b.defaultChecked != null && (a2.defaultChecked = !!b.defaultChecked);
  }
  function cb(a2, b, c) {
    if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
      var d = b.type;
      if (!(d !== "submit" && d !== "reset" || b.value !== void 0 && b.value !== null))
        return;
      b = "" + a2._wrapperState.initialValue;
      c || b === a2.value || (a2.value = b);
      a2.defaultValue = b;
    }
    c = a2.name;
    c !== "" && (a2.name = "");
    a2.defaultChecked = !!a2._wrapperState.initialChecked;
    c !== "" && (a2.name = c);
  }
  function bb(a2, b, c) {
    if (b !== "number" || Xa(a2.ownerDocument) !== a2)
      c == null ? a2.defaultValue = "" + a2._wrapperState.initialValue : a2.defaultValue !== "" + c && (a2.defaultValue = "" + c);
  }
  function db(a2) {
    var b = "";
    react_default.Children.forEach(a2, function(a22) {
      a22 != null && (b += a22);
    });
    return b;
  }
  function eb(a2, b) {
    a2 = object_assign_default({ children: void 0 }, b);
    if (b = db(b.children))
      a2.children = b;
    return a2;
  }
  function fb(a2, b, c, d) {
    a2 = a2.options;
    if (b) {
      b = {};
      for (var e = 0; e < c.length; e++)
        b["$" + c[e]] = true;
      for (c = 0; c < a2.length; c++)
        e = b.hasOwnProperty("$" + a2[c].value), a2[c].selected !== e && (a2[c].selected = e), e && d && (a2[c].defaultSelected = true);
    } else {
      c = "" + Sa(c);
      b = null;
      for (e = 0; e < a2.length; e++) {
        if (a2[e].value === c) {
          a2[e].selected = true;
          d && (a2[e].defaultSelected = true);
          return;
        }
        b !== null || a2[e].disabled || (b = a2[e]);
      }
      b !== null && (b.selected = true);
    }
  }
  function gb(a2, b) {
    if (b.dangerouslySetInnerHTML != null)
      throw Error(y(91));
    return object_assign_default({}, b, { value: void 0, defaultValue: void 0, children: "" + a2._wrapperState.initialValue });
  }
  function hb(a2, b) {
    var c = b.value;
    if (c == null) {
      c = b.children;
      b = b.defaultValue;
      if (c != null) {
        if (b != null)
          throw Error(y(92));
        if (Array.isArray(c)) {
          if (!(1 >= c.length))
            throw Error(y(93));
          c = c[0];
        }
        b = c;
      }
      b == null && (b = "");
      c = b;
    }
    a2._wrapperState = { initialValue: Sa(c) };
  }
  function ib(a2, b) {
    var c = Sa(b.value), d = Sa(b.defaultValue);
    c != null && (c = "" + c, c !== a2.value && (a2.value = c), b.defaultValue == null && a2.defaultValue !== c && (a2.defaultValue = c));
    d != null && (a2.defaultValue = "" + d);
  }
  function jb(a2) {
    var b = a2.textContent;
    b === a2._wrapperState.initialValue && b !== "" && b !== null && (a2.value = b);
  }
  var kb = { html: "http://www.w3.org/1999/xhtml", mathml: "http://www.w3.org/1998/Math/MathML", svg: "http://www.w3.org/2000/svg" };
  function lb(a2) {
    switch (a2) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function mb(a2, b) {
    return a2 == null || a2 === "http://www.w3.org/1999/xhtml" ? lb(b) : a2 === "http://www.w3.org/2000/svg" && b === "foreignObject" ? "http://www.w3.org/1999/xhtml" : a2;
  }
  var nb;
  var ob = function(a2) {
    return typeof MSApp !== "undefined" && MSApp.execUnsafeLocalFunction ? function(b, c, d, e) {
      MSApp.execUnsafeLocalFunction(function() {
        return a2(b, c, d, e);
      });
    } : a2;
  }(function(a2, b) {
    if (a2.namespaceURI !== kb.svg || "innerHTML" in a2)
      a2.innerHTML = b;
    else {
      nb = nb || document.createElement("div");
      nb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";
      for (b = nb.firstChild; a2.firstChild; )
        a2.removeChild(a2.firstChild);
      for (; b.firstChild; )
        a2.appendChild(b.firstChild);
    }
  });
  function pb(a2, b) {
    if (b) {
      var c = a2.firstChild;
      if (c && c === a2.lastChild && c.nodeType === 3) {
        c.nodeValue = b;
        return;
      }
    }
    a2.textContent = b;
  }
  var qb = {
    animationIterationCount: true,
    borderImageOutset: true,
    borderImageSlice: true,
    borderImageWidth: true,
    boxFlex: true,
    boxFlexGroup: true,
    boxOrdinalGroup: true,
    columnCount: true,
    columns: true,
    flex: true,
    flexGrow: true,
    flexPositive: true,
    flexShrink: true,
    flexNegative: true,
    flexOrder: true,
    gridArea: true,
    gridRow: true,
    gridRowEnd: true,
    gridRowSpan: true,
    gridRowStart: true,
    gridColumn: true,
    gridColumnEnd: true,
    gridColumnSpan: true,
    gridColumnStart: true,
    fontWeight: true,
    lineClamp: true,
    lineHeight: true,
    opacity: true,
    order: true,
    orphans: true,
    tabSize: true,
    widows: true,
    zIndex: true,
    zoom: true,
    fillOpacity: true,
    floodOpacity: true,
    stopOpacity: true,
    strokeDasharray: true,
    strokeDashoffset: true,
    strokeMiterlimit: true,
    strokeOpacity: true,
    strokeWidth: true
  };
  var rb = ["Webkit", "ms", "Moz", "O"];
  Object.keys(qb).forEach(function(a2) {
    rb.forEach(function(b) {
      b = b + a2.charAt(0).toUpperCase() + a2.substring(1);
      qb[b] = qb[a2];
    });
  });
  function sb(a2, b, c) {
    return b == null || typeof b === "boolean" || b === "" ? "" : c || typeof b !== "number" || b === 0 || qb.hasOwnProperty(a2) && qb[a2] ? ("" + b).trim() : b + "px";
  }
  function tb(a2, b) {
    a2 = a2.style;
    for (var c in b)
      if (b.hasOwnProperty(c)) {
        var d = c.indexOf("--") === 0, e = sb(c, b[c], d);
        c === "float" && (c = "cssFloat");
        d ? a2.setProperty(c, e) : a2[c] = e;
      }
  }
  var ub = object_assign_default({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
  function vb(a2, b) {
    if (b) {
      if (ub[a2] && (b.children != null || b.dangerouslySetInnerHTML != null))
        throw Error(y(137, a2));
      if (b.dangerouslySetInnerHTML != null) {
        if (b.children != null)
          throw Error(y(60));
        if (!(typeof b.dangerouslySetInnerHTML === "object" && "__html" in b.dangerouslySetInnerHTML))
          throw Error(y(61));
      }
      if (b.style != null && typeof b.style !== "object")
        throw Error(y(62));
    }
  }
  function wb(a2, b) {
    if (a2.indexOf("-") === -1)
      return typeof b.is === "string";
    switch (a2) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return false;
      default:
        return true;
    }
  }
  function xb(a2) {
    a2 = a2.target || a2.srcElement || window;
    a2.correspondingUseElement && (a2 = a2.correspondingUseElement);
    return a2.nodeType === 3 ? a2.parentNode : a2;
  }
  var yb = null;
  var zb = null;
  var Ab = null;
  function Bb(a2) {
    if (a2 = Cb(a2)) {
      if (typeof yb !== "function")
        throw Error(y(280));
      var b = a2.stateNode;
      b && (b = Db(b), yb(a2.stateNode, a2.type, b));
    }
  }
  function Eb(a2) {
    zb ? Ab ? Ab.push(a2) : Ab = [a2] : zb = a2;
  }
  function Fb() {
    if (zb) {
      var a2 = zb, b = Ab;
      Ab = zb = null;
      Bb(a2);
      if (b)
        for (a2 = 0; a2 < b.length; a2++)
          Bb(b[a2]);
    }
  }
  function Gb(a2, b) {
    return a2(b);
  }
  function Hb(a2, b, c, d, e) {
    return a2(b, c, d, e);
  }
  function Ib() {
  }
  var Jb = Gb;
  var Kb = false;
  var Lb = false;
  function Mb() {
    if (zb !== null || Ab !== null)
      Ib(), Fb();
  }
  function Nb(a2, b, c) {
    if (Lb)
      return a2(b, c);
    Lb = true;
    try {
      return Jb(a2, b, c);
    } finally {
      Lb = false, Mb();
    }
  }
  function Ob(a2, b) {
    var c = a2.stateNode;
    if (c === null)
      return null;
    var d = Db(c);
    if (d === null)
      return null;
    c = d[b];
    a:
      switch (b) {
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
          (d = !d.disabled) || (a2 = a2.type, d = !(a2 === "button" || a2 === "input" || a2 === "select" || a2 === "textarea"));
          a2 = !d;
          break a;
        default:
          a2 = false;
      }
    if (a2)
      return null;
    if (c && typeof c !== "function")
      throw Error(y(231, b, typeof c));
    return c;
  }
  var Pb = false;
  if (fa)
    try {
      Qb = {};
      Object.defineProperty(Qb, "passive", { get: function() {
        Pb = true;
      } });
      window.addEventListener("test", Qb, Qb);
      window.removeEventListener("test", Qb, Qb);
    } catch (a2) {
      Pb = false;
    }
  var Qb;
  function Rb(a2, b, c, d, e, f, g, h, k) {
    var l = Array.prototype.slice.call(arguments, 3);
    try {
      b.apply(c, l);
    } catch (n) {
      this.onError(n);
    }
  }
  var Sb = false;
  var Tb = null;
  var Ub = false;
  var Vb = null;
  var Wb = { onError: function(a2) {
    Sb = true;
    Tb = a2;
  } };
  function Xb(a2, b, c, d, e, f, g, h, k) {
    Sb = false;
    Tb = null;
    Rb.apply(Wb, arguments);
  }
  function Yb(a2, b, c, d, e, f, g, h, k) {
    Xb.apply(this, arguments);
    if (Sb) {
      if (Sb) {
        var l = Tb;
        Sb = false;
        Tb = null;
      } else
        throw Error(y(198));
      Ub || (Ub = true, Vb = l);
    }
  }
  function Zb(a2) {
    var b = a2, c = a2;
    if (a2.alternate)
      for (; b.return; )
        b = b.return;
    else {
      a2 = b;
      do
        b = a2, (b.flags & 1026) !== 0 && (c = b.return), a2 = b.return;
      while (a2);
    }
    return b.tag === 3 ? c : null;
  }
  function $b(a2) {
    if (a2.tag === 13) {
      var b = a2.memoizedState;
      b === null && (a2 = a2.alternate, a2 !== null && (b = a2.memoizedState));
      if (b !== null)
        return b.dehydrated;
    }
    return null;
  }
  function ac(a2) {
    if (Zb(a2) !== a2)
      throw Error(y(188));
  }
  function bc(a2) {
    var b = a2.alternate;
    if (!b) {
      b = Zb(a2);
      if (b === null)
        throw Error(y(188));
      return b !== a2 ? null : a2;
    }
    for (var c = a2, d = b; ; ) {
      var e = c.return;
      if (e === null)
        break;
      var f = e.alternate;
      if (f === null) {
        d = e.return;
        if (d !== null) {
          c = d;
          continue;
        }
        break;
      }
      if (e.child === f.child) {
        for (f = e.child; f; ) {
          if (f === c)
            return ac(e), a2;
          if (f === d)
            return ac(e), b;
          f = f.sibling;
        }
        throw Error(y(188));
      }
      if (c.return !== d.return)
        c = e, d = f;
      else {
        for (var g = false, h = e.child; h; ) {
          if (h === c) {
            g = true;
            c = e;
            d = f;
            break;
          }
          if (h === d) {
            g = true;
            d = e;
            c = f;
            break;
          }
          h = h.sibling;
        }
        if (!g) {
          for (h = f.child; h; ) {
            if (h === c) {
              g = true;
              c = f;
              d = e;
              break;
            }
            if (h === d) {
              g = true;
              d = f;
              c = e;
              break;
            }
            h = h.sibling;
          }
          if (!g)
            throw Error(y(189));
        }
      }
      if (c.alternate !== d)
        throw Error(y(190));
    }
    if (c.tag !== 3)
      throw Error(y(188));
    return c.stateNode.current === c ? a2 : b;
  }
  function cc(a2) {
    a2 = bc(a2);
    if (!a2)
      return null;
    for (var b = a2; ; ) {
      if (b.tag === 5 || b.tag === 6)
        return b;
      if (b.child)
        b.child.return = b, b = b.child;
      else {
        if (b === a2)
          break;
        for (; !b.sibling; ) {
          if (!b.return || b.return === a2)
            return null;
          b = b.return;
        }
        b.sibling.return = b.return;
        b = b.sibling;
      }
    }
    return null;
  }
  function dc(a2, b) {
    for (var c = a2.alternate; b !== null; ) {
      if (b === a2 || b === c)
        return true;
      b = b.return;
    }
    return false;
  }
  var ec;
  var fc;
  var gc;
  var hc;
  var ic = false;
  var jc = [];
  var kc = null;
  var lc = null;
  var mc = null;
  var nc = new Map();
  var oc = new Map();
  var pc = [];
  var qc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function rc(a2, b, c, d, e) {
    return { blockedOn: a2, domEventName: b, eventSystemFlags: c | 16, nativeEvent: e, targetContainers: [d] };
  }
  function sc(a2, b) {
    switch (a2) {
      case "focusin":
      case "focusout":
        kc = null;
        break;
      case "dragenter":
      case "dragleave":
        lc = null;
        break;
      case "mouseover":
      case "mouseout":
        mc = null;
        break;
      case "pointerover":
      case "pointerout":
        nc.delete(b.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        oc.delete(b.pointerId);
    }
  }
  function tc(a2, b, c, d, e, f) {
    if (a2 === null || a2.nativeEvent !== f)
      return a2 = rc(b, c, d, e, f), b !== null && (b = Cb(b), b !== null && fc(b)), a2;
    a2.eventSystemFlags |= d;
    b = a2.targetContainers;
    e !== null && b.indexOf(e) === -1 && b.push(e);
    return a2;
  }
  function uc(a2, b, c, d, e) {
    switch (b) {
      case "focusin":
        return kc = tc(kc, a2, b, c, d, e), true;
      case "dragenter":
        return lc = tc(lc, a2, b, c, d, e), true;
      case "mouseover":
        return mc = tc(mc, a2, b, c, d, e), true;
      case "pointerover":
        var f = e.pointerId;
        nc.set(f, tc(nc.get(f) || null, a2, b, c, d, e));
        return true;
      case "gotpointercapture":
        return f = e.pointerId, oc.set(f, tc(oc.get(f) || null, a2, b, c, d, e)), true;
    }
    return false;
  }
  function vc(a2) {
    var b = wc(a2.target);
    if (b !== null) {
      var c = Zb(b);
      if (c !== null) {
        if (b = c.tag, b === 13) {
          if (b = $b(c), b !== null) {
            a2.blockedOn = b;
            hc(a2.lanePriority, function() {
              scheduler_default.unstable_runWithPriority(a2.priority, function() {
                gc(c);
              });
            });
            return;
          }
        } else if (b === 3 && c.stateNode.hydrate) {
          a2.blockedOn = c.tag === 3 ? c.stateNode.containerInfo : null;
          return;
        }
      }
    }
    a2.blockedOn = null;
  }
  function xc(a2) {
    if (a2.blockedOn !== null)
      return false;
    for (var b = a2.targetContainers; 0 < b.length; ) {
      var c = yc(a2.domEventName, a2.eventSystemFlags, b[0], a2.nativeEvent);
      if (c !== null)
        return b = Cb(c), b !== null && fc(b), a2.blockedOn = c, false;
      b.shift();
    }
    return true;
  }
  function zc(a2, b, c) {
    xc(a2) && c.delete(b);
  }
  function Ac() {
    for (ic = false; 0 < jc.length; ) {
      var a2 = jc[0];
      if (a2.blockedOn !== null) {
        a2 = Cb(a2.blockedOn);
        a2 !== null && ec(a2);
        break;
      }
      for (var b = a2.targetContainers; 0 < b.length; ) {
        var c = yc(a2.domEventName, a2.eventSystemFlags, b[0], a2.nativeEvent);
        if (c !== null) {
          a2.blockedOn = c;
          break;
        }
        b.shift();
      }
      a2.blockedOn === null && jc.shift();
    }
    kc !== null && xc(kc) && (kc = null);
    lc !== null && xc(lc) && (lc = null);
    mc !== null && xc(mc) && (mc = null);
    nc.forEach(zc);
    oc.forEach(zc);
  }
  function Bc(a2, b) {
    a2.blockedOn === b && (a2.blockedOn = null, ic || (ic = true, scheduler_default.unstable_scheduleCallback(scheduler_default.unstable_NormalPriority, Ac)));
  }
  function Cc(a2) {
    function b(b2) {
      return Bc(b2, a2);
    }
    if (0 < jc.length) {
      Bc(jc[0], a2);
      for (var c = 1; c < jc.length; c++) {
        var d = jc[c];
        d.blockedOn === a2 && (d.blockedOn = null);
      }
    }
    kc !== null && Bc(kc, a2);
    lc !== null && Bc(lc, a2);
    mc !== null && Bc(mc, a2);
    nc.forEach(b);
    oc.forEach(b);
    for (c = 0; c < pc.length; c++)
      d = pc[c], d.blockedOn === a2 && (d.blockedOn = null);
    for (; 0 < pc.length && (c = pc[0], c.blockedOn === null); )
      vc(c), c.blockedOn === null && pc.shift();
  }
  function Dc(a2, b) {
    var c = {};
    c[a2.toLowerCase()] = b.toLowerCase();
    c["Webkit" + a2] = "webkit" + b;
    c["Moz" + a2] = "moz" + b;
    return c;
  }
  var Ec = { animationend: Dc("Animation", "AnimationEnd"), animationiteration: Dc("Animation", "AnimationIteration"), animationstart: Dc("Animation", "AnimationStart"), transitionend: Dc("Transition", "TransitionEnd") };
  var Fc = {};
  var Gc = {};
  fa && (Gc = document.createElement("div").style, "AnimationEvent" in window || (delete Ec.animationend.animation, delete Ec.animationiteration.animation, delete Ec.animationstart.animation), "TransitionEvent" in window || delete Ec.transitionend.transition);
  function Hc(a2) {
    if (Fc[a2])
      return Fc[a2];
    if (!Ec[a2])
      return a2;
    var b = Ec[a2], c;
    for (c in b)
      if (b.hasOwnProperty(c) && c in Gc)
        return Fc[a2] = b[c];
    return a2;
  }
  var Ic = Hc("animationend");
  var Jc = Hc("animationiteration");
  var Kc = Hc("animationstart");
  var Lc = Hc("transitionend");
  var Mc = new Map();
  var Nc = new Map();
  var Oc = [
    "abort",
    "abort",
    Ic,
    "animationEnd",
    Jc,
    "animationIteration",
    Kc,
    "animationStart",
    "canplay",
    "canPlay",
    "canplaythrough",
    "canPlayThrough",
    "durationchange",
    "durationChange",
    "emptied",
    "emptied",
    "encrypted",
    "encrypted",
    "ended",
    "ended",
    "error",
    "error",
    "gotpointercapture",
    "gotPointerCapture",
    "load",
    "load",
    "loadeddata",
    "loadedData",
    "loadedmetadata",
    "loadedMetadata",
    "loadstart",
    "loadStart",
    "lostpointercapture",
    "lostPointerCapture",
    "playing",
    "playing",
    "progress",
    "progress",
    "seeking",
    "seeking",
    "stalled",
    "stalled",
    "suspend",
    "suspend",
    "timeupdate",
    "timeUpdate",
    Lc,
    "transitionEnd",
    "waiting",
    "waiting"
  ];
  function Pc(a2, b) {
    for (var c = 0; c < a2.length; c += 2) {
      var d = a2[c], e = a2[c + 1];
      e = "on" + (e[0].toUpperCase() + e.slice(1));
      Nc.set(d, b);
      Mc.set(d, e);
      da(e, [d]);
    }
  }
  var Qc = scheduler_default.unstable_now;
  Qc();
  var F = 8;
  function Rc(a2) {
    if ((1 & a2) !== 0)
      return F = 15, 1;
    if ((2 & a2) !== 0)
      return F = 14, 2;
    if ((4 & a2) !== 0)
      return F = 13, 4;
    var b = 24 & a2;
    if (b !== 0)
      return F = 12, b;
    if ((a2 & 32) !== 0)
      return F = 11, 32;
    b = 192 & a2;
    if (b !== 0)
      return F = 10, b;
    if ((a2 & 256) !== 0)
      return F = 9, 256;
    b = 3584 & a2;
    if (b !== 0)
      return F = 8, b;
    if ((a2 & 4096) !== 0)
      return F = 7, 4096;
    b = 4186112 & a2;
    if (b !== 0)
      return F = 6, b;
    b = 62914560 & a2;
    if (b !== 0)
      return F = 5, b;
    if (a2 & 67108864)
      return F = 4, 67108864;
    if ((a2 & 134217728) !== 0)
      return F = 3, 134217728;
    b = 805306368 & a2;
    if (b !== 0)
      return F = 2, b;
    if ((1073741824 & a2) !== 0)
      return F = 1, 1073741824;
    F = 8;
    return a2;
  }
  function Sc(a2) {
    switch (a2) {
      case 99:
        return 15;
      case 98:
        return 10;
      case 97:
      case 96:
        return 8;
      case 95:
        return 2;
      default:
        return 0;
    }
  }
  function Tc(a2) {
    switch (a2) {
      case 15:
      case 14:
        return 99;
      case 13:
      case 12:
      case 11:
      case 10:
        return 98;
      case 9:
      case 8:
      case 7:
      case 6:
      case 4:
      case 5:
        return 97;
      case 3:
      case 2:
      case 1:
        return 95;
      case 0:
        return 90;
      default:
        throw Error(y(358, a2));
    }
  }
  function Uc(a2, b) {
    var c = a2.pendingLanes;
    if (c === 0)
      return F = 0;
    var d = 0, e = 0, f = a2.expiredLanes, g = a2.suspendedLanes, h = a2.pingedLanes;
    if (f !== 0)
      d = f, e = F = 15;
    else if (f = c & 134217727, f !== 0) {
      var k = f & ~g;
      k !== 0 ? (d = Rc(k), e = F) : (h &= f, h !== 0 && (d = Rc(h), e = F));
    } else
      f = c & ~g, f !== 0 ? (d = Rc(f), e = F) : h !== 0 && (d = Rc(h), e = F);
    if (d === 0)
      return 0;
    d = 31 - Vc(d);
    d = c & ((0 > d ? 0 : 1 << d) << 1) - 1;
    if (b !== 0 && b !== d && (b & g) === 0) {
      Rc(b);
      if (e <= F)
        return b;
      F = e;
    }
    b = a2.entangledLanes;
    if (b !== 0)
      for (a2 = a2.entanglements, b &= d; 0 < b; )
        c = 31 - Vc(b), e = 1 << c, d |= a2[c], b &= ~e;
    return d;
  }
  function Wc(a2) {
    a2 = a2.pendingLanes & -1073741825;
    return a2 !== 0 ? a2 : a2 & 1073741824 ? 1073741824 : 0;
  }
  function Xc(a2, b) {
    switch (a2) {
      case 15:
        return 1;
      case 14:
        return 2;
      case 12:
        return a2 = Yc(24 & ~b), a2 === 0 ? Xc(10, b) : a2;
      case 10:
        return a2 = Yc(192 & ~b), a2 === 0 ? Xc(8, b) : a2;
      case 8:
        return a2 = Yc(3584 & ~b), a2 === 0 && (a2 = Yc(4186112 & ~b), a2 === 0 && (a2 = 512)), a2;
      case 2:
        return b = Yc(805306368 & ~b), b === 0 && (b = 268435456), b;
    }
    throw Error(y(358, a2));
  }
  function Yc(a2) {
    return a2 & -a2;
  }
  function Zc(a2) {
    for (var b = [], c = 0; 31 > c; c++)
      b.push(a2);
    return b;
  }
  function $c(a2, b, c) {
    a2.pendingLanes |= b;
    var d = b - 1;
    a2.suspendedLanes &= d;
    a2.pingedLanes &= d;
    a2 = a2.eventTimes;
    b = 31 - Vc(b);
    a2[b] = c;
  }
  var Vc = Math.clz32 ? Math.clz32 : ad;
  var bd = Math.log;
  var cd = Math.LN2;
  function ad(a2) {
    return a2 === 0 ? 32 : 31 - (bd(a2) / cd | 0) | 0;
  }
  var dd = scheduler_default.unstable_UserBlockingPriority;
  var ed = scheduler_default.unstable_runWithPriority;
  var fd = true;
  function gd(a2, b, c, d) {
    Kb || Ib();
    var e = hd, f = Kb;
    Kb = true;
    try {
      Hb(e, a2, b, c, d);
    } finally {
      (Kb = f) || Mb();
    }
  }
  function id(a2, b, c, d) {
    ed(dd, hd.bind(null, a2, b, c, d));
  }
  function hd(a2, b, c, d) {
    if (fd) {
      var e;
      if ((e = (b & 4) === 0) && 0 < jc.length && -1 < qc.indexOf(a2))
        a2 = rc(null, a2, b, c, d), jc.push(a2);
      else {
        var f = yc(a2, b, c, d);
        if (f === null)
          e && sc(a2, d);
        else {
          if (e) {
            if (-1 < qc.indexOf(a2)) {
              a2 = rc(f, a2, b, c, d);
              jc.push(a2);
              return;
            }
            if (uc(f, a2, b, c, d))
              return;
            sc(a2, d);
          }
          jd(a2, b, d, null, c);
        }
      }
    }
  }
  function yc(a2, b, c, d) {
    var e = xb(d);
    e = wc(e);
    if (e !== null) {
      var f = Zb(e);
      if (f === null)
        e = null;
      else {
        var g = f.tag;
        if (g === 13) {
          e = $b(f);
          if (e !== null)
            return e;
          e = null;
        } else if (g === 3) {
          if (f.stateNode.hydrate)
            return f.tag === 3 ? f.stateNode.containerInfo : null;
          e = null;
        } else
          f !== e && (e = null);
      }
    }
    jd(a2, b, d, e, c);
    return null;
  }
  var kd = null;
  var ld = null;
  var md = null;
  function nd() {
    if (md)
      return md;
    var a2, b = ld, c = b.length, d, e = "value" in kd ? kd.value : kd.textContent, f = e.length;
    for (a2 = 0; a2 < c && b[a2] === e[a2]; a2++)
      ;
    var g = c - a2;
    for (d = 1; d <= g && b[c - d] === e[f - d]; d++)
      ;
    return md = e.slice(a2, 1 < d ? 1 - d : void 0);
  }
  function od(a2) {
    var b = a2.keyCode;
    "charCode" in a2 ? (a2 = a2.charCode, a2 === 0 && b === 13 && (a2 = 13)) : a2 = b;
    a2 === 10 && (a2 = 13);
    return 32 <= a2 || a2 === 13 ? a2 : 0;
  }
  function pd() {
    return true;
  }
  function qd() {
    return false;
  }
  function rd(a2) {
    function b(b2, d, e, f, g) {
      this._reactName = b2;
      this._targetInst = e;
      this.type = d;
      this.nativeEvent = f;
      this.target = g;
      this.currentTarget = null;
      for (var c in a2)
        a2.hasOwnProperty(c) && (b2 = a2[c], this[c] = b2 ? b2(f) : f[c]);
      this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === false) ? pd : qd;
      this.isPropagationStopped = qd;
      return this;
    }
    object_assign_default(b.prototype, { preventDefault: function() {
      this.defaultPrevented = true;
      var a22 = this.nativeEvent;
      a22 && (a22.preventDefault ? a22.preventDefault() : typeof a22.returnValue !== "unknown" && (a22.returnValue = false), this.isDefaultPrevented = pd);
    }, stopPropagation: function() {
      var a22 = this.nativeEvent;
      a22 && (a22.stopPropagation ? a22.stopPropagation() : typeof a22.cancelBubble !== "unknown" && (a22.cancelBubble = true), this.isPropagationStopped = pd);
    }, persist: function() {
    }, isPersistent: pd });
    return b;
  }
  var sd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a2) {
    return a2.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 };
  var td = rd(sd);
  var ud = object_assign_default({}, sd, { view: 0, detail: 0 });
  var vd = rd(ud);
  var wd;
  var xd;
  var yd;
  var Ad = object_assign_default({}, ud, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a2) {
    return a2.relatedTarget === void 0 ? a2.fromElement === a2.srcElement ? a2.toElement : a2.fromElement : a2.relatedTarget;
  }, movementX: function(a2) {
    if ("movementX" in a2)
      return a2.movementX;
    a2 !== yd && (yd && a2.type === "mousemove" ? (wd = a2.screenX - yd.screenX, xd = a2.screenY - yd.screenY) : xd = wd = 0, yd = a2);
    return wd;
  }, movementY: function(a2) {
    return "movementY" in a2 ? a2.movementY : xd;
  } });
  var Bd = rd(Ad);
  var Cd = object_assign_default({}, Ad, { dataTransfer: 0 });
  var Dd = rd(Cd);
  var Ed = object_assign_default({}, ud, { relatedTarget: 0 });
  var Fd = rd(Ed);
  var Gd = object_assign_default({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 });
  var Hd = rd(Gd);
  var Id = object_assign_default({}, sd, { clipboardData: function(a2) {
    return "clipboardData" in a2 ? a2.clipboardData : window.clipboardData;
  } });
  var Jd = rd(Id);
  var Kd = object_assign_default({}, sd, { data: 0 });
  var Ld = rd(Kd);
  var Md = {
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
  };
  var Nd = {
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
  };
  var Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Pd(a2) {
    var b = this.nativeEvent;
    return b.getModifierState ? b.getModifierState(a2) : (a2 = Od[a2]) ? !!b[a2] : false;
  }
  function zd() {
    return Pd;
  }
  var Qd = object_assign_default({}, ud, { key: function(a2) {
    if (a2.key) {
      var b = Md[a2.key] || a2.key;
      if (b !== "Unidentified")
        return b;
    }
    return a2.type === "keypress" ? (a2 = od(a2), a2 === 13 ? "Enter" : String.fromCharCode(a2)) : a2.type === "keydown" || a2.type === "keyup" ? Nd[a2.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a2) {
    return a2.type === "keypress" ? od(a2) : 0;
  }, keyCode: function(a2) {
    return a2.type === "keydown" || a2.type === "keyup" ? a2.keyCode : 0;
  }, which: function(a2) {
    return a2.type === "keypress" ? od(a2) : a2.type === "keydown" || a2.type === "keyup" ? a2.keyCode : 0;
  } });
  var Rd = rd(Qd);
  var Sd = object_assign_default({}, Ad, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 });
  var Td = rd(Sd);
  var Ud = object_assign_default({}, ud, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd });
  var Vd = rd(Ud);
  var Wd = object_assign_default({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 });
  var Xd = rd(Wd);
  var Yd = object_assign_default({}, Ad, {
    deltaX: function(a2) {
      return "deltaX" in a2 ? a2.deltaX : "wheelDeltaX" in a2 ? -a2.wheelDeltaX : 0;
    },
    deltaY: function(a2) {
      return "deltaY" in a2 ? a2.deltaY : "wheelDeltaY" in a2 ? -a2.wheelDeltaY : "wheelDelta" in a2 ? -a2.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  });
  var Zd = rd(Yd);
  var $d = [9, 13, 27, 32];
  var ae = fa && "CompositionEvent" in window;
  var be = null;
  fa && "documentMode" in document && (be = document.documentMode);
  var ce = fa && "TextEvent" in window && !be;
  var de = fa && (!ae || be && 8 < be && 11 >= be);
  var ee = String.fromCharCode(32);
  var fe = false;
  function ge(a2, b) {
    switch (a2) {
      case "keyup":
        return $d.indexOf(b.keyCode) !== -1;
      case "keydown":
        return b.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return true;
      default:
        return false;
    }
  }
  function he(a2) {
    a2 = a2.detail;
    return typeof a2 === "object" && "data" in a2 ? a2.data : null;
  }
  var ie = false;
  function je(a2, b) {
    switch (a2) {
      case "compositionend":
        return he(b);
      case "keypress":
        if (b.which !== 32)
          return null;
        fe = true;
        return ee;
      case "textInput":
        return a2 = b.data, a2 === ee && fe ? null : a2;
      default:
        return null;
    }
  }
  function ke(a2, b) {
    if (ie)
      return a2 === "compositionend" || !ae && ge(a2, b) ? (a2 = nd(), md = ld = kd = null, ie = false, a2) : null;
    switch (a2) {
      case "paste":
        return null;
      case "keypress":
        if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
          if (b.char && 1 < b.char.length)
            return b.char;
          if (b.which)
            return String.fromCharCode(b.which);
        }
        return null;
      case "compositionend":
        return de && b.locale !== "ko" ? null : b.data;
      default:
        return null;
    }
  }
  var le = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
  function me(a2) {
    var b = a2 && a2.nodeName && a2.nodeName.toLowerCase();
    return b === "input" ? !!le[a2.type] : b === "textarea" ? true : false;
  }
  function ne(a2, b, c, d) {
    Eb(d);
    b = oe(b, "onChange");
    0 < b.length && (c = new td("onChange", "change", null, c, d), a2.push({ event: c, listeners: b }));
  }
  var pe = null;
  var qe = null;
  function re(a2) {
    se(a2, 0);
  }
  function te(a2) {
    var b = ue(a2);
    if (Wa(b))
      return a2;
  }
  function ve(a2, b) {
    if (a2 === "change")
      return b;
  }
  var we = false;
  if (fa) {
    if (fa) {
      ye = "oninput" in document;
      if (!ye) {
        ze = document.createElement("div");
        ze.setAttribute("oninput", "return;");
        ye = typeof ze.oninput === "function";
      }
      xe = ye;
    } else
      xe = false;
    we = xe && (!document.documentMode || 9 < document.documentMode);
  }
  var xe;
  var ye;
  var ze;
  function Ae() {
    pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
  }
  function Be(a2) {
    if (a2.propertyName === "value" && te(qe)) {
      var b = [];
      ne(b, qe, a2, xb(a2));
      a2 = re;
      if (Kb)
        a2(b);
      else {
        Kb = true;
        try {
          Gb(a2, b);
        } finally {
          Kb = false, Mb();
        }
      }
    }
  }
  function Ce(a2, b, c) {
    a2 === "focusin" ? (Ae(), pe = b, qe = c, pe.attachEvent("onpropertychange", Be)) : a2 === "focusout" && Ae();
  }
  function De(a2) {
    if (a2 === "selectionchange" || a2 === "keyup" || a2 === "keydown")
      return te(qe);
  }
  function Ee(a2, b) {
    if (a2 === "click")
      return te(b);
  }
  function Fe(a2, b) {
    if (a2 === "input" || a2 === "change")
      return te(b);
  }
  function Ge(a2, b) {
    return a2 === b && (a2 !== 0 || 1 / a2 === 1 / b) || a2 !== a2 && b !== b;
  }
  var He = typeof Object.is === "function" ? Object.is : Ge;
  var Ie = Object.prototype.hasOwnProperty;
  function Je(a2, b) {
    if (He(a2, b))
      return true;
    if (typeof a2 !== "object" || a2 === null || typeof b !== "object" || b === null)
      return false;
    var c = Object.keys(a2), d = Object.keys(b);
    if (c.length !== d.length)
      return false;
    for (d = 0; d < c.length; d++)
      if (!Ie.call(b, c[d]) || !He(a2[c[d]], b[c[d]]))
        return false;
    return true;
  }
  function Ke(a2) {
    for (; a2 && a2.firstChild; )
      a2 = a2.firstChild;
    return a2;
  }
  function Le(a2, b) {
    var c = Ke(a2);
    a2 = 0;
    for (var d; c; ) {
      if (c.nodeType === 3) {
        d = a2 + c.textContent.length;
        if (a2 <= b && d >= b)
          return { node: c, offset: b - a2 };
        a2 = d;
      }
      a: {
        for (; c; ) {
          if (c.nextSibling) {
            c = c.nextSibling;
            break a;
          }
          c = c.parentNode;
        }
        c = void 0;
      }
      c = Ke(c);
    }
  }
  function Me(a2, b) {
    return a2 && b ? a2 === b ? true : a2 && a2.nodeType === 3 ? false : b && b.nodeType === 3 ? Me(a2, b.parentNode) : "contains" in a2 ? a2.contains(b) : a2.compareDocumentPosition ? !!(a2.compareDocumentPosition(b) & 16) : false : false;
  }
  function Ne() {
    for (var a2 = window, b = Xa(); b instanceof a2.HTMLIFrameElement; ) {
      try {
        var c = typeof b.contentWindow.location.href === "string";
      } catch (d) {
        c = false;
      }
      if (c)
        a2 = b.contentWindow;
      else
        break;
      b = Xa(a2.document);
    }
    return b;
  }
  function Oe(a2) {
    var b = a2 && a2.nodeName && a2.nodeName.toLowerCase();
    return b && (b === "input" && (a2.type === "text" || a2.type === "search" || a2.type === "tel" || a2.type === "url" || a2.type === "password") || b === "textarea" || a2.contentEditable === "true");
  }
  var Pe = fa && "documentMode" in document && 11 >= document.documentMode;
  var Qe = null;
  var Re = null;
  var Se = null;
  var Te = false;
  function Ue(a2, b, c) {
    var d = c.window === c ? c.document : c.nodeType === 9 ? c : c.ownerDocument;
    Te || Qe == null || Qe !== Xa(d) || (d = Qe, "selectionStart" in d && Oe(d) ? d = { start: d.selectionStart, end: d.selectionEnd } : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = { anchorNode: d.anchorNode, anchorOffset: d.anchorOffset, focusNode: d.focusNode, focusOffset: d.focusOffset }), Se && Je(Se, d) || (Se = d, d = oe(Re, "onSelect"), 0 < d.length && (b = new td("onSelect", "select", null, b, c), a2.push({ event: b, listeners: d }), b.target = Qe)));
  }
  Pc("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "), 0);
  Pc("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1);
  Pc(Oc, 2);
  for (var Ve = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), We = 0; We < Ve.length; We++)
    Nc.set(Ve[We], 0);
  ea("onMouseEnter", ["mouseout", "mouseover"]);
  ea("onMouseLeave", ["mouseout", "mouseover"]);
  ea("onPointerEnter", ["pointerout", "pointerover"]);
  ea("onPointerLeave", ["pointerout", "pointerover"]);
  da("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
  da("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
  da("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
  da("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
  da("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
  da("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Xe = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" ");
  var Ye = new Set("cancel close invalid load scroll toggle".split(" ").concat(Xe));
  function Ze(a2, b, c) {
    var d = a2.type || "unknown-event";
    a2.currentTarget = c;
    Yb(d, b, void 0, a2);
    a2.currentTarget = null;
  }
  function se(a2, b) {
    b = (b & 4) !== 0;
    for (var c = 0; c < a2.length; c++) {
      var d = a2[c], e = d.event;
      d = d.listeners;
      a: {
        var f = void 0;
        if (b)
          for (var g = d.length - 1; 0 <= g; g--) {
            var h = d[g], k = h.instance, l = h.currentTarget;
            h = h.listener;
            if (k !== f && e.isPropagationStopped())
              break a;
            Ze(e, h, l);
            f = k;
          }
        else
          for (g = 0; g < d.length; g++) {
            h = d[g];
            k = h.instance;
            l = h.currentTarget;
            h = h.listener;
            if (k !== f && e.isPropagationStopped())
              break a;
            Ze(e, h, l);
            f = k;
          }
      }
    }
    if (Ub)
      throw a2 = Vb, Ub = false, Vb = null, a2;
  }
  function G(a2, b) {
    var c = $e(b), d = a2 + "__bubble";
    c.has(d) || (af(b, a2, 2, false), c.add(d));
  }
  var bf = "_reactListening" + Math.random().toString(36).slice(2);
  function cf(a2) {
    a2[bf] || (a2[bf] = true, ba.forEach(function(b) {
      Ye.has(b) || df(b, false, a2, null);
      df(b, true, a2, null);
    }));
  }
  function df(a2, b, c, d) {
    var e = 4 < arguments.length && arguments[4] !== void 0 ? arguments[4] : 0, f = c;
    a2 === "selectionchange" && c.nodeType !== 9 && (f = c.ownerDocument);
    if (d !== null && !b && Ye.has(a2)) {
      if (a2 !== "scroll")
        return;
      e |= 2;
      f = d;
    }
    var g = $e(f), h = a2 + "__" + (b ? "capture" : "bubble");
    g.has(h) || (b && (e |= 4), af(f, a2, e, b), g.add(h));
  }
  function af(a2, b, c, d) {
    var e = Nc.get(b);
    switch (e === void 0 ? 2 : e) {
      case 0:
        e = gd;
        break;
      case 1:
        e = id;
        break;
      default:
        e = hd;
    }
    c = e.bind(null, b, c, a2);
    e = void 0;
    !Pb || b !== "touchstart" && b !== "touchmove" && b !== "wheel" || (e = true);
    d ? e !== void 0 ? a2.addEventListener(b, c, { capture: true, passive: e }) : a2.addEventListener(b, c, true) : e !== void 0 ? a2.addEventListener(b, c, { passive: e }) : a2.addEventListener(b, c, false);
  }
  function jd(a2, b, c, d, e) {
    var f = d;
    if ((b & 1) === 0 && (b & 2) === 0 && d !== null)
      a:
        for (; ; ) {
          if (d === null)
            return;
          var g = d.tag;
          if (g === 3 || g === 4) {
            var h = d.stateNode.containerInfo;
            if (h === e || h.nodeType === 8 && h.parentNode === e)
              break;
            if (g === 4)
              for (g = d.return; g !== null; ) {
                var k = g.tag;
                if (k === 3 || k === 4) {
                  if (k = g.stateNode.containerInfo, k === e || k.nodeType === 8 && k.parentNode === e)
                    return;
                }
                g = g.return;
              }
            for (; h !== null; ) {
              g = wc(h);
              if (g === null)
                return;
              k = g.tag;
              if (k === 5 || k === 6) {
                d = f = g;
                continue a;
              }
              h = h.parentNode;
            }
          }
          d = d.return;
        }
    Nb(function() {
      var d2 = f, e2 = xb(c), g2 = [];
      a: {
        var h2 = Mc.get(a2);
        if (h2 !== void 0) {
          var k2 = td, x = a2;
          switch (a2) {
            case "keypress":
              if (od(c) === 0)
                break a;
            case "keydown":
            case "keyup":
              k2 = Rd;
              break;
            case "focusin":
              x = "focus";
              k2 = Fd;
              break;
            case "focusout":
              x = "blur";
              k2 = Fd;
              break;
            case "beforeblur":
            case "afterblur":
              k2 = Fd;
              break;
            case "click":
              if (c.button === 2)
                break a;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              k2 = Bd;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              k2 = Dd;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              k2 = Vd;
              break;
            case Ic:
            case Jc:
            case Kc:
              k2 = Hd;
              break;
            case Lc:
              k2 = Xd;
              break;
            case "scroll":
              k2 = vd;
              break;
            case "wheel":
              k2 = Zd;
              break;
            case "copy":
            case "cut":
            case "paste":
              k2 = Jd;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              k2 = Td;
          }
          var w = (b & 4) !== 0, z = !w && a2 === "scroll", u = w ? h2 !== null ? h2 + "Capture" : null : h2;
          w = [];
          for (var t2 = d2, q; t2 !== null; ) {
            q = t2;
            var v = q.stateNode;
            q.tag === 5 && v !== null && (q = v, u !== null && (v = Ob(t2, u), v != null && w.push(ef(t2, v, q))));
            if (z)
              break;
            t2 = t2.return;
          }
          0 < w.length && (h2 = new k2(h2, x, null, c, e2), g2.push({ event: h2, listeners: w }));
        }
      }
      if ((b & 7) === 0) {
        a: {
          h2 = a2 === "mouseover" || a2 === "pointerover";
          k2 = a2 === "mouseout" || a2 === "pointerout";
          if (h2 && (b & 16) === 0 && (x = c.relatedTarget || c.fromElement) && (wc(x) || x[ff]))
            break a;
          if (k2 || h2) {
            h2 = e2.window === e2 ? e2 : (h2 = e2.ownerDocument) ? h2.defaultView || h2.parentWindow : window;
            if (k2) {
              if (x = c.relatedTarget || c.toElement, k2 = d2, x = x ? wc(x) : null, x !== null && (z = Zb(x), x !== z || x.tag !== 5 && x.tag !== 6))
                x = null;
            } else
              k2 = null, x = d2;
            if (k2 !== x) {
              w = Bd;
              v = "onMouseLeave";
              u = "onMouseEnter";
              t2 = "mouse";
              if (a2 === "pointerout" || a2 === "pointerover")
                w = Td, v = "onPointerLeave", u = "onPointerEnter", t2 = "pointer";
              z = k2 == null ? h2 : ue(k2);
              q = x == null ? h2 : ue(x);
              h2 = new w(v, t2 + "leave", k2, c, e2);
              h2.target = z;
              h2.relatedTarget = q;
              v = null;
              wc(e2) === d2 && (w = new w(u, t2 + "enter", x, c, e2), w.target = q, w.relatedTarget = z, v = w);
              z = v;
              if (k2 && x)
                b: {
                  w = k2;
                  u = x;
                  t2 = 0;
                  for (q = w; q; q = gf(q))
                    t2++;
                  q = 0;
                  for (v = u; v; v = gf(v))
                    q++;
                  for (; 0 < t2 - q; )
                    w = gf(w), t2--;
                  for (; 0 < q - t2; )
                    u = gf(u), q--;
                  for (; t2--; ) {
                    if (w === u || u !== null && w === u.alternate)
                      break b;
                    w = gf(w);
                    u = gf(u);
                  }
                  w = null;
                }
              else
                w = null;
              k2 !== null && hf(g2, h2, k2, w, false);
              x !== null && z !== null && hf(g2, z, x, w, true);
            }
          }
        }
        a: {
          h2 = d2 ? ue(d2) : window;
          k2 = h2.nodeName && h2.nodeName.toLowerCase();
          if (k2 === "select" || k2 === "input" && h2.type === "file")
            var J2 = ve;
          else if (me(h2))
            if (we)
              J2 = Fe;
            else {
              J2 = De;
              var K = Ce;
            }
          else
            (k2 = h2.nodeName) && k2.toLowerCase() === "input" && (h2.type === "checkbox" || h2.type === "radio") && (J2 = Ee);
          if (J2 && (J2 = J2(a2, d2))) {
            ne(g2, J2, c, e2);
            break a;
          }
          K && K(a2, h2, d2);
          a2 === "focusout" && (K = h2._wrapperState) && K.controlled && h2.type === "number" && bb(h2, "number", h2.value);
        }
        K = d2 ? ue(d2) : window;
        switch (a2) {
          case "focusin":
            if (me(K) || K.contentEditable === "true")
              Qe = K, Re = d2, Se = null;
            break;
          case "focusout":
            Se = Re = Qe = null;
            break;
          case "mousedown":
            Te = true;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Te = false;
            Ue(g2, c, e2);
            break;
          case "selectionchange":
            if (Pe)
              break;
          case "keydown":
          case "keyup":
            Ue(g2, c, e2);
        }
        var Q;
        if (ae)
          b: {
            switch (a2) {
              case "compositionstart":
                var L = "onCompositionStart";
                break b;
              case "compositionend":
                L = "onCompositionEnd";
                break b;
              case "compositionupdate":
                L = "onCompositionUpdate";
                break b;
            }
            L = void 0;
          }
        else
          ie ? ge(a2, c) && (L = "onCompositionEnd") : a2 === "keydown" && c.keyCode === 229 && (L = "onCompositionStart");
        L && (de && c.locale !== "ko" && (ie || L !== "onCompositionStart" ? L === "onCompositionEnd" && ie && (Q = nd()) : (kd = e2, ld = "value" in kd ? kd.value : kd.textContent, ie = true)), K = oe(d2, L), 0 < K.length && (L = new Ld(L, a2, null, c, e2), g2.push({ event: L, listeners: K }), Q ? L.data = Q : (Q = he(c), Q !== null && (L.data = Q))));
        if (Q = ce ? je(a2, c) : ke(a2, c))
          d2 = oe(d2, "onBeforeInput"), 0 < d2.length && (e2 = new Ld("onBeforeInput", "beforeinput", null, c, e2), g2.push({ event: e2, listeners: d2 }), e2.data = Q);
      }
      se(g2, b);
    });
  }
  function ef(a2, b, c) {
    return { instance: a2, listener: b, currentTarget: c };
  }
  function oe(a2, b) {
    for (var c = b + "Capture", d = []; a2 !== null; ) {
      var e = a2, f = e.stateNode;
      e.tag === 5 && f !== null && (e = f, f = Ob(a2, c), f != null && d.unshift(ef(a2, f, e)), f = Ob(a2, b), f != null && d.push(ef(a2, f, e)));
      a2 = a2.return;
    }
    return d;
  }
  function gf(a2) {
    if (a2 === null)
      return null;
    do
      a2 = a2.return;
    while (a2 && a2.tag !== 5);
    return a2 ? a2 : null;
  }
  function hf(a2, b, c, d, e) {
    for (var f = b._reactName, g = []; c !== null && c !== d; ) {
      var h = c, k = h.alternate, l = h.stateNode;
      if (k !== null && k === d)
        break;
      h.tag === 5 && l !== null && (h = l, e ? (k = Ob(c, f), k != null && g.unshift(ef(c, k, h))) : e || (k = Ob(c, f), k != null && g.push(ef(c, k, h))));
      c = c.return;
    }
    g.length !== 0 && a2.push({ event: b, listeners: g });
  }
  function jf() {
  }
  var kf = null;
  var lf = null;
  function mf(a2, b) {
    switch (a2) {
      case "button":
      case "input":
      case "select":
      case "textarea":
        return !!b.autoFocus;
    }
    return false;
  }
  function nf(a2, b) {
    return a2 === "textarea" || a2 === "option" || a2 === "noscript" || typeof b.children === "string" || typeof b.children === "number" || typeof b.dangerouslySetInnerHTML === "object" && b.dangerouslySetInnerHTML !== null && b.dangerouslySetInnerHTML.__html != null;
  }
  var of = typeof setTimeout === "function" ? setTimeout : void 0;
  var pf = typeof clearTimeout === "function" ? clearTimeout : void 0;
  function qf(a2) {
    a2.nodeType === 1 ? a2.textContent = "" : a2.nodeType === 9 && (a2 = a2.body, a2 != null && (a2.textContent = ""));
  }
  function rf(a2) {
    for (; a2 != null; a2 = a2.nextSibling) {
      var b = a2.nodeType;
      if (b === 1 || b === 3)
        break;
    }
    return a2;
  }
  function sf(a2) {
    a2 = a2.previousSibling;
    for (var b = 0; a2; ) {
      if (a2.nodeType === 8) {
        var c = a2.data;
        if (c === "$" || c === "$!" || c === "$?") {
          if (b === 0)
            return a2;
          b--;
        } else
          c === "/$" && b++;
      }
      a2 = a2.previousSibling;
    }
    return null;
  }
  var tf = 0;
  function uf(a2) {
    return { $$typeof: Ga, toString: a2, valueOf: a2 };
  }
  var vf = Math.random().toString(36).slice(2);
  var wf = "__reactFiber$" + vf;
  var xf = "__reactProps$" + vf;
  var ff = "__reactContainer$" + vf;
  var yf = "__reactEvents$" + vf;
  function wc(a2) {
    var b = a2[wf];
    if (b)
      return b;
    for (var c = a2.parentNode; c; ) {
      if (b = c[ff] || c[wf]) {
        c = b.alternate;
        if (b.child !== null || c !== null && c.child !== null)
          for (a2 = sf(a2); a2 !== null; ) {
            if (c = a2[wf])
              return c;
            a2 = sf(a2);
          }
        return b;
      }
      a2 = c;
      c = a2.parentNode;
    }
    return null;
  }
  function Cb(a2) {
    a2 = a2[wf] || a2[ff];
    return !a2 || a2.tag !== 5 && a2.tag !== 6 && a2.tag !== 13 && a2.tag !== 3 ? null : a2;
  }
  function ue(a2) {
    if (a2.tag === 5 || a2.tag === 6)
      return a2.stateNode;
    throw Error(y(33));
  }
  function Db(a2) {
    return a2[xf] || null;
  }
  function $e(a2) {
    var b = a2[yf];
    b === void 0 && (b = a2[yf] = new Set());
    return b;
  }
  var zf = [];
  var Af = -1;
  function Bf(a2) {
    return { current: a2 };
  }
  function H(a2) {
    0 > Af || (a2.current = zf[Af], zf[Af] = null, Af--);
  }
  function I(a2, b) {
    Af++;
    zf[Af] = a2.current;
    a2.current = b;
  }
  var Cf = {};
  var M = Bf(Cf);
  var N = Bf(false);
  var Df = Cf;
  function Ef(a2, b) {
    var c = a2.type.contextTypes;
    if (!c)
      return Cf;
    var d = a2.stateNode;
    if (d && d.__reactInternalMemoizedUnmaskedChildContext === b)
      return d.__reactInternalMemoizedMaskedChildContext;
    var e = {}, f;
    for (f in c)
      e[f] = b[f];
    d && (a2 = a2.stateNode, a2.__reactInternalMemoizedUnmaskedChildContext = b, a2.__reactInternalMemoizedMaskedChildContext = e);
    return e;
  }
  function Ff(a2) {
    a2 = a2.childContextTypes;
    return a2 !== null && a2 !== void 0;
  }
  function Gf() {
    H(N);
    H(M);
  }
  function Hf(a2, b, c) {
    if (M.current !== Cf)
      throw Error(y(168));
    I(M, b);
    I(N, c);
  }
  function If(a2, b, c) {
    var d = a2.stateNode;
    a2 = b.childContextTypes;
    if (typeof d.getChildContext !== "function")
      return c;
    d = d.getChildContext();
    for (var e in d)
      if (!(e in a2))
        throw Error(y(108, Ra(b) || "Unknown", e));
    return object_assign_default({}, c, d);
  }
  function Jf(a2) {
    a2 = (a2 = a2.stateNode) && a2.__reactInternalMemoizedMergedChildContext || Cf;
    Df = M.current;
    I(M, a2);
    I(N, N.current);
    return true;
  }
  function Kf(a2, b, c) {
    var d = a2.stateNode;
    if (!d)
      throw Error(y(169));
    c ? (a2 = If(a2, b, Df), d.__reactInternalMemoizedMergedChildContext = a2, H(N), H(M), I(M, a2)) : H(N);
    I(N, c);
  }
  var Lf = null;
  var Mf = null;
  var Nf = scheduler_default.unstable_runWithPriority;
  var Of = scheduler_default.unstable_scheduleCallback;
  var Pf = scheduler_default.unstable_cancelCallback;
  var Qf = scheduler_default.unstable_shouldYield;
  var Rf = scheduler_default.unstable_requestPaint;
  var Sf = scheduler_default.unstable_now;
  var Tf = scheduler_default.unstable_getCurrentPriorityLevel;
  var Uf = scheduler_default.unstable_ImmediatePriority;
  var Vf = scheduler_default.unstable_UserBlockingPriority;
  var Wf = scheduler_default.unstable_NormalPriority;
  var Xf = scheduler_default.unstable_LowPriority;
  var Yf = scheduler_default.unstable_IdlePriority;
  var Zf = {};
  var $f = Rf !== void 0 ? Rf : function() {
  };
  var ag = null;
  var bg = null;
  var cg = false;
  var dg = Sf();
  var O = 1e4 > dg ? Sf : function() {
    return Sf() - dg;
  };
  function eg() {
    switch (Tf()) {
      case Uf:
        return 99;
      case Vf:
        return 98;
      case Wf:
        return 97;
      case Xf:
        return 96;
      case Yf:
        return 95;
      default:
        throw Error(y(332));
    }
  }
  function fg(a2) {
    switch (a2) {
      case 99:
        return Uf;
      case 98:
        return Vf;
      case 97:
        return Wf;
      case 96:
        return Xf;
      case 95:
        return Yf;
      default:
        throw Error(y(332));
    }
  }
  function gg(a2, b) {
    a2 = fg(a2);
    return Nf(a2, b);
  }
  function hg(a2, b, c) {
    a2 = fg(a2);
    return Of(a2, b, c);
  }
  function ig() {
    if (bg !== null) {
      var a2 = bg;
      bg = null;
      Pf(a2);
    }
    jg();
  }
  function jg() {
    if (!cg && ag !== null) {
      cg = true;
      var a2 = 0;
      try {
        var b = ag;
        gg(99, function() {
          for (; a2 < b.length; a2++) {
            var c = b[a2];
            do
              c = c(true);
            while (c !== null);
          }
        });
        ag = null;
      } catch (c) {
        throw ag !== null && (ag = ag.slice(a2 + 1)), Of(Uf, ig), c;
      } finally {
        cg = false;
      }
    }
  }
  var kg = ra.ReactCurrentBatchConfig;
  function lg(a2, b) {
    if (a2 && a2.defaultProps) {
      b = object_assign_default({}, b);
      a2 = a2.defaultProps;
      for (var c in a2)
        b[c] === void 0 && (b[c] = a2[c]);
      return b;
    }
    return b;
  }
  var mg = Bf(null);
  var ng = null;
  var og = null;
  var pg = null;
  function qg() {
    pg = og = ng = null;
  }
  function rg(a2) {
    var b = mg.current;
    H(mg);
    a2.type._context._currentValue = b;
  }
  function sg(a2, b) {
    for (; a2 !== null; ) {
      var c = a2.alternate;
      if ((a2.childLanes & b) === b)
        if (c === null || (c.childLanes & b) === b)
          break;
        else
          c.childLanes |= b;
      else
        a2.childLanes |= b, c !== null && (c.childLanes |= b);
      a2 = a2.return;
    }
  }
  function tg(a2, b) {
    ng = a2;
    pg = og = null;
    a2 = a2.dependencies;
    a2 !== null && a2.firstContext !== null && ((a2.lanes & b) !== 0 && (ug = true), a2.firstContext = null);
  }
  function vg(a2, b) {
    if (pg !== a2 && b !== false && b !== 0) {
      if (typeof b !== "number" || b === 1073741823)
        pg = a2, b = 1073741823;
      b = { context: a2, observedBits: b, next: null };
      if (og === null) {
        if (ng === null)
          throw Error(y(308));
        og = b;
        ng.dependencies = { lanes: 0, firstContext: b, responders: null };
      } else
        og = og.next = b;
    }
    return a2._currentValue;
  }
  var wg = false;
  function xg(a2) {
    a2.updateQueue = { baseState: a2.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null }, effects: null };
  }
  function yg(a2, b) {
    a2 = a2.updateQueue;
    b.updateQueue === a2 && (b.updateQueue = { baseState: a2.baseState, firstBaseUpdate: a2.firstBaseUpdate, lastBaseUpdate: a2.lastBaseUpdate, shared: a2.shared, effects: a2.effects });
  }
  function zg(a2, b) {
    return { eventTime: a2, lane: b, tag: 0, payload: null, callback: null, next: null };
  }
  function Ag(a2, b) {
    a2 = a2.updateQueue;
    if (a2 !== null) {
      a2 = a2.shared;
      var c = a2.pending;
      c === null ? b.next = b : (b.next = c.next, c.next = b);
      a2.pending = b;
    }
  }
  function Bg(a2, b) {
    var c = a2.updateQueue, d = a2.alternate;
    if (d !== null && (d = d.updateQueue, c === d)) {
      var e = null, f = null;
      c = c.firstBaseUpdate;
      if (c !== null) {
        do {
          var g = { eventTime: c.eventTime, lane: c.lane, tag: c.tag, payload: c.payload, callback: c.callback, next: null };
          f === null ? e = f = g : f = f.next = g;
          c = c.next;
        } while (c !== null);
        f === null ? e = f = b : f = f.next = b;
      } else
        e = f = b;
      c = { baseState: d.baseState, firstBaseUpdate: e, lastBaseUpdate: f, shared: d.shared, effects: d.effects };
      a2.updateQueue = c;
      return;
    }
    a2 = c.lastBaseUpdate;
    a2 === null ? c.firstBaseUpdate = b : a2.next = b;
    c.lastBaseUpdate = b;
  }
  function Cg(a2, b, c, d) {
    var e = a2.updateQueue;
    wg = false;
    var f = e.firstBaseUpdate, g = e.lastBaseUpdate, h = e.shared.pending;
    if (h !== null) {
      e.shared.pending = null;
      var k = h, l = k.next;
      k.next = null;
      g === null ? f = l : g.next = l;
      g = k;
      var n = a2.alternate;
      if (n !== null) {
        n = n.updateQueue;
        var A = n.lastBaseUpdate;
        A !== g && (A === null ? n.firstBaseUpdate = l : A.next = l, n.lastBaseUpdate = k);
      }
    }
    if (f !== null) {
      A = e.baseState;
      g = 0;
      n = l = k = null;
      do {
        h = f.lane;
        var p = f.eventTime;
        if ((d & h) === h) {
          n !== null && (n = n.next = {
            eventTime: p,
            lane: 0,
            tag: f.tag,
            payload: f.payload,
            callback: f.callback,
            next: null
          });
          a: {
            var C2 = a2, x = f;
            h = b;
            p = c;
            switch (x.tag) {
              case 1:
                C2 = x.payload;
                if (typeof C2 === "function") {
                  A = C2.call(p, A, h);
                  break a;
                }
                A = C2;
                break a;
              case 3:
                C2.flags = C2.flags & -4097 | 64;
              case 0:
                C2 = x.payload;
                h = typeof C2 === "function" ? C2.call(p, A, h) : C2;
                if (h === null || h === void 0)
                  break a;
                A = object_assign_default({}, A, h);
                break a;
              case 2:
                wg = true;
            }
          }
          f.callback !== null && (a2.flags |= 32, h = e.effects, h === null ? e.effects = [f] : h.push(f));
        } else
          p = { eventTime: p, lane: h, tag: f.tag, payload: f.payload, callback: f.callback, next: null }, n === null ? (l = n = p, k = A) : n = n.next = p, g |= h;
        f = f.next;
        if (f === null)
          if (h = e.shared.pending, h === null)
            break;
          else
            f = h.next, h.next = null, e.lastBaseUpdate = h, e.shared.pending = null;
      } while (1);
      n === null && (k = A);
      e.baseState = k;
      e.firstBaseUpdate = l;
      e.lastBaseUpdate = n;
      Dg |= g;
      a2.lanes = g;
      a2.memoizedState = A;
    }
  }
  function Eg(a2, b, c) {
    a2 = b.effects;
    b.effects = null;
    if (a2 !== null)
      for (b = 0; b < a2.length; b++) {
        var d = a2[b], e = d.callback;
        if (e !== null) {
          d.callback = null;
          d = c;
          if (typeof e !== "function")
            throw Error(y(191, e));
          e.call(d);
        }
      }
  }
  var Fg = new react_default.Component().refs;
  function Gg(a2, b, c, d) {
    b = a2.memoizedState;
    c = c(d, b);
    c = c === null || c === void 0 ? b : object_assign_default({}, b, c);
    a2.memoizedState = c;
    a2.lanes === 0 && (a2.updateQueue.baseState = c);
  }
  var Kg = { isMounted: function(a2) {
    return (a2 = a2._reactInternals) ? Zb(a2) === a2 : false;
  }, enqueueSetState: function(a2, b, c) {
    a2 = a2._reactInternals;
    var d = Hg(), e = Ig(a2), f = zg(d, e);
    f.payload = b;
    c !== void 0 && c !== null && (f.callback = c);
    Ag(a2, f);
    Jg(a2, e, d);
  }, enqueueReplaceState: function(a2, b, c) {
    a2 = a2._reactInternals;
    var d = Hg(), e = Ig(a2), f = zg(d, e);
    f.tag = 1;
    f.payload = b;
    c !== void 0 && c !== null && (f.callback = c);
    Ag(a2, f);
    Jg(a2, e, d);
  }, enqueueForceUpdate: function(a2, b) {
    a2 = a2._reactInternals;
    var c = Hg(), d = Ig(a2), e = zg(c, d);
    e.tag = 2;
    b !== void 0 && b !== null && (e.callback = b);
    Ag(a2, e);
    Jg(a2, d, c);
  } };
  function Lg(a2, b, c, d, e, f, g) {
    a2 = a2.stateNode;
    return typeof a2.shouldComponentUpdate === "function" ? a2.shouldComponentUpdate(d, f, g) : b.prototype && b.prototype.isPureReactComponent ? !Je(c, d) || !Je(e, f) : true;
  }
  function Mg(a2, b, c) {
    var d = false, e = Cf;
    var f = b.contextType;
    typeof f === "object" && f !== null ? f = vg(f) : (e = Ff(b) ? Df : M.current, d = b.contextTypes, f = (d = d !== null && d !== void 0) ? Ef(a2, e) : Cf);
    b = new b(c, f);
    a2.memoizedState = b.state !== null && b.state !== void 0 ? b.state : null;
    b.updater = Kg;
    a2.stateNode = b;
    b._reactInternals = a2;
    d && (a2 = a2.stateNode, a2.__reactInternalMemoizedUnmaskedChildContext = e, a2.__reactInternalMemoizedMaskedChildContext = f);
    return b;
  }
  function Ng(a2, b, c, d) {
    a2 = b.state;
    typeof b.componentWillReceiveProps === "function" && b.componentWillReceiveProps(c, d);
    typeof b.UNSAFE_componentWillReceiveProps === "function" && b.UNSAFE_componentWillReceiveProps(c, d);
    b.state !== a2 && Kg.enqueueReplaceState(b, b.state, null);
  }
  function Og(a2, b, c, d) {
    var e = a2.stateNode;
    e.props = c;
    e.state = a2.memoizedState;
    e.refs = Fg;
    xg(a2);
    var f = b.contextType;
    typeof f === "object" && f !== null ? e.context = vg(f) : (f = Ff(b) ? Df : M.current, e.context = Ef(a2, f));
    Cg(a2, c, e, d);
    e.state = a2.memoizedState;
    f = b.getDerivedStateFromProps;
    typeof f === "function" && (Gg(a2, b, f, c), e.state = a2.memoizedState);
    typeof b.getDerivedStateFromProps === "function" || typeof e.getSnapshotBeforeUpdate === "function" || typeof e.UNSAFE_componentWillMount !== "function" && typeof e.componentWillMount !== "function" || (b = e.state, typeof e.componentWillMount === "function" && e.componentWillMount(), typeof e.UNSAFE_componentWillMount === "function" && e.UNSAFE_componentWillMount(), b !== e.state && Kg.enqueueReplaceState(e, e.state, null), Cg(a2, c, e, d), e.state = a2.memoizedState);
    typeof e.componentDidMount === "function" && (a2.flags |= 4);
  }
  var Pg = Array.isArray;
  function Qg(a2, b, c) {
    a2 = c.ref;
    if (a2 !== null && typeof a2 !== "function" && typeof a2 !== "object") {
      if (c._owner) {
        c = c._owner;
        if (c) {
          if (c.tag !== 1)
            throw Error(y(309));
          var d = c.stateNode;
        }
        if (!d)
          throw Error(y(147, a2));
        var e = "" + a2;
        if (b !== null && b.ref !== null && typeof b.ref === "function" && b.ref._stringRef === e)
          return b.ref;
        b = function(a22) {
          var b2 = d.refs;
          b2 === Fg && (b2 = d.refs = {});
          a22 === null ? delete b2[e] : b2[e] = a22;
        };
        b._stringRef = e;
        return b;
      }
      if (typeof a2 !== "string")
        throw Error(y(284));
      if (!c._owner)
        throw Error(y(290, a2));
    }
    return a2;
  }
  function Rg(a2, b) {
    if (a2.type !== "textarea")
      throw Error(y(31, Object.prototype.toString.call(b) === "[object Object]" ? "object with keys {" + Object.keys(b).join(", ") + "}" : b));
  }
  function Sg(a2) {
    function b(b2, c2) {
      if (a2) {
        var d2 = b2.lastEffect;
        d2 !== null ? (d2.nextEffect = c2, b2.lastEffect = c2) : b2.firstEffect = b2.lastEffect = c2;
        c2.nextEffect = null;
        c2.flags = 8;
      }
    }
    function c(c2, d2) {
      if (!a2)
        return null;
      for (; d2 !== null; )
        b(c2, d2), d2 = d2.sibling;
      return null;
    }
    function d(a22, b2) {
      for (a22 = new Map(); b2 !== null; )
        b2.key !== null ? a22.set(b2.key, b2) : a22.set(b2.index, b2), b2 = b2.sibling;
      return a22;
    }
    function e(a22, b2) {
      a22 = Tg(a22, b2);
      a22.index = 0;
      a22.sibling = null;
      return a22;
    }
    function f(b2, c2, d2) {
      b2.index = d2;
      if (!a2)
        return c2;
      d2 = b2.alternate;
      if (d2 !== null)
        return d2 = d2.index, d2 < c2 ? (b2.flags = 2, c2) : d2;
      b2.flags = 2;
      return c2;
    }
    function g(b2) {
      a2 && b2.alternate === null && (b2.flags = 2);
      return b2;
    }
    function h(a22, b2, c2, d2) {
      if (b2 === null || b2.tag !== 6)
        return b2 = Ug(c2, a22.mode, d2), b2.return = a22, b2;
      b2 = e(b2, c2);
      b2.return = a22;
      return b2;
    }
    function k(a22, b2, c2, d2) {
      if (b2 !== null && b2.elementType === c2.type)
        return d2 = e(b2, c2.props), d2.ref = Qg(a22, b2, c2), d2.return = a22, d2;
      d2 = Vg(c2.type, c2.key, c2.props, null, a22.mode, d2);
      d2.ref = Qg(a22, b2, c2);
      d2.return = a22;
      return d2;
    }
    function l(a22, b2, c2, d2) {
      if (b2 === null || b2.tag !== 4 || b2.stateNode.containerInfo !== c2.containerInfo || b2.stateNode.implementation !== c2.implementation)
        return b2 = Wg(c2, a22.mode, d2), b2.return = a22, b2;
      b2 = e(b2, c2.children || []);
      b2.return = a22;
      return b2;
    }
    function n(a22, b2, c2, d2, f2) {
      if (b2 === null || b2.tag !== 7)
        return b2 = Xg(c2, a22.mode, d2, f2), b2.return = a22, b2;
      b2 = e(b2, c2);
      b2.return = a22;
      return b2;
    }
    function A(a22, b2, c2) {
      if (typeof b2 === "string" || typeof b2 === "number")
        return b2 = Ug("" + b2, a22.mode, c2), b2.return = a22, b2;
      if (typeof b2 === "object" && b2 !== null) {
        switch (b2.$$typeof) {
          case sa:
            return c2 = Vg(b2.type, b2.key, b2.props, null, a22.mode, c2), c2.ref = Qg(a22, null, b2), c2.return = a22, c2;
          case ta:
            return b2 = Wg(b2, a22.mode, c2), b2.return = a22, b2;
        }
        if (Pg(b2) || La(b2))
          return b2 = Xg(b2, a22.mode, c2, null), b2.return = a22, b2;
        Rg(a22, b2);
      }
      return null;
    }
    function p(a22, b2, c2, d2) {
      var e2 = b2 !== null ? b2.key : null;
      if (typeof c2 === "string" || typeof c2 === "number")
        return e2 !== null ? null : h(a22, b2, "" + c2, d2);
      if (typeof c2 === "object" && c2 !== null) {
        switch (c2.$$typeof) {
          case sa:
            return c2.key === e2 ? c2.type === ua ? n(a22, b2, c2.props.children, d2, e2) : k(a22, b2, c2, d2) : null;
          case ta:
            return c2.key === e2 ? l(a22, b2, c2, d2) : null;
        }
        if (Pg(c2) || La(c2))
          return e2 !== null ? null : n(a22, b2, c2, d2, null);
        Rg(a22, c2);
      }
      return null;
    }
    function C2(a22, b2, c2, d2, e2) {
      if (typeof d2 === "string" || typeof d2 === "number")
        return a22 = a22.get(c2) || null, h(b2, a22, "" + d2, e2);
      if (typeof d2 === "object" && d2 !== null) {
        switch (d2.$$typeof) {
          case sa:
            return a22 = a22.get(d2.key === null ? c2 : d2.key) || null, d2.type === ua ? n(b2, a22, d2.props.children, e2, d2.key) : k(b2, a22, d2, e2);
          case ta:
            return a22 = a22.get(d2.key === null ? c2 : d2.key) || null, l(b2, a22, d2, e2);
        }
        if (Pg(d2) || La(d2))
          return a22 = a22.get(c2) || null, n(b2, a22, d2, e2, null);
        Rg(b2, d2);
      }
      return null;
    }
    function x(e2, g2, h2, k2) {
      for (var l2 = null, t2 = null, u = g2, z = g2 = 0, q = null; u !== null && z < h2.length; z++) {
        u.index > z ? (q = u, u = null) : q = u.sibling;
        var n2 = p(e2, u, h2[z], k2);
        if (n2 === null) {
          u === null && (u = q);
          break;
        }
        a2 && u && n2.alternate === null && b(e2, u);
        g2 = f(n2, g2, z);
        t2 === null ? l2 = n2 : t2.sibling = n2;
        t2 = n2;
        u = q;
      }
      if (z === h2.length)
        return c(e2, u), l2;
      if (u === null) {
        for (; z < h2.length; z++)
          u = A(e2, h2[z], k2), u !== null && (g2 = f(u, g2, z), t2 === null ? l2 = u : t2.sibling = u, t2 = u);
        return l2;
      }
      for (u = d(e2, u); z < h2.length; z++)
        q = C2(u, e2, z, h2[z], k2), q !== null && (a2 && q.alternate !== null && u.delete(q.key === null ? z : q.key), g2 = f(q, g2, z), t2 === null ? l2 = q : t2.sibling = q, t2 = q);
      a2 && u.forEach(function(a22) {
        return b(e2, a22);
      });
      return l2;
    }
    function w(e2, g2, h2, k2) {
      var l2 = La(h2);
      if (typeof l2 !== "function")
        throw Error(y(150));
      h2 = l2.call(h2);
      if (h2 == null)
        throw Error(y(151));
      for (var t2 = l2 = null, u = g2, z = g2 = 0, q = null, n2 = h2.next(); u !== null && !n2.done; z++, n2 = h2.next()) {
        u.index > z ? (q = u, u = null) : q = u.sibling;
        var w2 = p(e2, u, n2.value, k2);
        if (w2 === null) {
          u === null && (u = q);
          break;
        }
        a2 && u && w2.alternate === null && b(e2, u);
        g2 = f(w2, g2, z);
        t2 === null ? l2 = w2 : t2.sibling = w2;
        t2 = w2;
        u = q;
      }
      if (n2.done)
        return c(e2, u), l2;
      if (u === null) {
        for (; !n2.done; z++, n2 = h2.next())
          n2 = A(e2, n2.value, k2), n2 !== null && (g2 = f(n2, g2, z), t2 === null ? l2 = n2 : t2.sibling = n2, t2 = n2);
        return l2;
      }
      for (u = d(e2, u); !n2.done; z++, n2 = h2.next())
        n2 = C2(u, e2, z, n2.value, k2), n2 !== null && (a2 && n2.alternate !== null && u.delete(n2.key === null ? z : n2.key), g2 = f(n2, g2, z), t2 === null ? l2 = n2 : t2.sibling = n2, t2 = n2);
      a2 && u.forEach(function(a22) {
        return b(e2, a22);
      });
      return l2;
    }
    return function(a22, d2, f2, h2) {
      var k2 = typeof f2 === "object" && f2 !== null && f2.type === ua && f2.key === null;
      k2 && (f2 = f2.props.children);
      var l2 = typeof f2 === "object" && f2 !== null;
      if (l2)
        switch (f2.$$typeof) {
          case sa:
            a: {
              l2 = f2.key;
              for (k2 = d2; k2 !== null; ) {
                if (k2.key === l2) {
                  switch (k2.tag) {
                    case 7:
                      if (f2.type === ua) {
                        c(a22, k2.sibling);
                        d2 = e(k2, f2.props.children);
                        d2.return = a22;
                        a22 = d2;
                        break a;
                      }
                      break;
                    default:
                      if (k2.elementType === f2.type) {
                        c(a22, k2.sibling);
                        d2 = e(k2, f2.props);
                        d2.ref = Qg(a22, k2, f2);
                        d2.return = a22;
                        a22 = d2;
                        break a;
                      }
                  }
                  c(a22, k2);
                  break;
                } else
                  b(a22, k2);
                k2 = k2.sibling;
              }
              f2.type === ua ? (d2 = Xg(f2.props.children, a22.mode, h2, f2.key), d2.return = a22, a22 = d2) : (h2 = Vg(f2.type, f2.key, f2.props, null, a22.mode, h2), h2.ref = Qg(a22, d2, f2), h2.return = a22, a22 = h2);
            }
            return g(a22);
          case ta:
            a: {
              for (k2 = f2.key; d2 !== null; ) {
                if (d2.key === k2)
                  if (d2.tag === 4 && d2.stateNode.containerInfo === f2.containerInfo && d2.stateNode.implementation === f2.implementation) {
                    c(a22, d2.sibling);
                    d2 = e(d2, f2.children || []);
                    d2.return = a22;
                    a22 = d2;
                    break a;
                  } else {
                    c(a22, d2);
                    break;
                  }
                else
                  b(a22, d2);
                d2 = d2.sibling;
              }
              d2 = Wg(f2, a22.mode, h2);
              d2.return = a22;
              a22 = d2;
            }
            return g(a22);
        }
      if (typeof f2 === "string" || typeof f2 === "number")
        return f2 = "" + f2, d2 !== null && d2.tag === 6 ? (c(a22, d2.sibling), d2 = e(d2, f2), d2.return = a22, a22 = d2) : (c(a22, d2), d2 = Ug(f2, a22.mode, h2), d2.return = a22, a22 = d2), g(a22);
      if (Pg(f2))
        return x(a22, d2, f2, h2);
      if (La(f2))
        return w(a22, d2, f2, h2);
      l2 && Rg(a22, f2);
      if (typeof f2 === "undefined" && !k2)
        switch (a22.tag) {
          case 1:
          case 22:
          case 0:
          case 11:
          case 15:
            throw Error(y(152, Ra(a22.type) || "Component"));
        }
      return c(a22, d2);
    };
  }
  var Yg = Sg(true);
  var Zg = Sg(false);
  var $g = {};
  var ah = Bf($g);
  var bh = Bf($g);
  var ch = Bf($g);
  function dh(a2) {
    if (a2 === $g)
      throw Error(y(174));
    return a2;
  }
  function eh(a2, b) {
    I(ch, b);
    I(bh, a2);
    I(ah, $g);
    a2 = b.nodeType;
    switch (a2) {
      case 9:
      case 11:
        b = (b = b.documentElement) ? b.namespaceURI : mb(null, "");
        break;
      default:
        a2 = a2 === 8 ? b.parentNode : b, b = a2.namespaceURI || null, a2 = a2.tagName, b = mb(b, a2);
    }
    H(ah);
    I(ah, b);
  }
  function fh() {
    H(ah);
    H(bh);
    H(ch);
  }
  function gh(a2) {
    dh(ch.current);
    var b = dh(ah.current);
    var c = mb(b, a2.type);
    b !== c && (I(bh, a2), I(ah, c));
  }
  function hh(a2) {
    bh.current === a2 && (H(ah), H(bh));
  }
  var P = Bf(0);
  function ih(a2) {
    for (var b = a2; b !== null; ) {
      if (b.tag === 13) {
        var c = b.memoizedState;
        if (c !== null && (c = c.dehydrated, c === null || c.data === "$?" || c.data === "$!"))
          return b;
      } else if (b.tag === 19 && b.memoizedProps.revealOrder !== void 0) {
        if ((b.flags & 64) !== 0)
          return b;
      } else if (b.child !== null) {
        b.child.return = b;
        b = b.child;
        continue;
      }
      if (b === a2)
        break;
      for (; b.sibling === null; ) {
        if (b.return === null || b.return === a2)
          return null;
        b = b.return;
      }
      b.sibling.return = b.return;
      b = b.sibling;
    }
    return null;
  }
  var jh = null;
  var kh = null;
  var lh = false;
  function mh(a2, b) {
    var c = nh(5, null, null, 0);
    c.elementType = "DELETED";
    c.type = "DELETED";
    c.stateNode = b;
    c.return = a2;
    c.flags = 8;
    a2.lastEffect !== null ? (a2.lastEffect.nextEffect = c, a2.lastEffect = c) : a2.firstEffect = a2.lastEffect = c;
  }
  function oh(a2, b) {
    switch (a2.tag) {
      case 5:
        var c = a2.type;
        b = b.nodeType !== 1 || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
        return b !== null ? (a2.stateNode = b, true) : false;
      case 6:
        return b = a2.pendingProps === "" || b.nodeType !== 3 ? null : b, b !== null ? (a2.stateNode = b, true) : false;
      case 13:
        return false;
      default:
        return false;
    }
  }
  function ph(a2) {
    if (lh) {
      var b = kh;
      if (b) {
        var c = b;
        if (!oh(a2, b)) {
          b = rf(c.nextSibling);
          if (!b || !oh(a2, b)) {
            a2.flags = a2.flags & -1025 | 2;
            lh = false;
            jh = a2;
            return;
          }
          mh(jh, c);
        }
        jh = a2;
        kh = rf(b.firstChild);
      } else
        a2.flags = a2.flags & -1025 | 2, lh = false, jh = a2;
    }
  }
  function qh(a2) {
    for (a2 = a2.return; a2 !== null && a2.tag !== 5 && a2.tag !== 3 && a2.tag !== 13; )
      a2 = a2.return;
    jh = a2;
  }
  function rh(a2) {
    if (a2 !== jh)
      return false;
    if (!lh)
      return qh(a2), lh = true, false;
    var b = a2.type;
    if (a2.tag !== 5 || b !== "head" && b !== "body" && !nf(b, a2.memoizedProps))
      for (b = kh; b; )
        mh(a2, b), b = rf(b.nextSibling);
    qh(a2);
    if (a2.tag === 13) {
      a2 = a2.memoizedState;
      a2 = a2 !== null ? a2.dehydrated : null;
      if (!a2)
        throw Error(y(317));
      a: {
        a2 = a2.nextSibling;
        for (b = 0; a2; ) {
          if (a2.nodeType === 8) {
            var c = a2.data;
            if (c === "/$") {
              if (b === 0) {
                kh = rf(a2.nextSibling);
                break a;
              }
              b--;
            } else
              c !== "$" && c !== "$!" && c !== "$?" || b++;
          }
          a2 = a2.nextSibling;
        }
        kh = null;
      }
    } else
      kh = jh ? rf(a2.stateNode.nextSibling) : null;
    return true;
  }
  function sh() {
    kh = jh = null;
    lh = false;
  }
  var th = [];
  function uh() {
    for (var a2 = 0; a2 < th.length; a2++)
      th[a2]._workInProgressVersionPrimary = null;
    th.length = 0;
  }
  var vh = ra.ReactCurrentDispatcher;
  var wh = ra.ReactCurrentBatchConfig;
  var xh = 0;
  var R = null;
  var S = null;
  var T = null;
  var yh = false;
  var zh = false;
  function Ah() {
    throw Error(y(321));
  }
  function Bh(a2, b) {
    if (b === null)
      return false;
    for (var c = 0; c < b.length && c < a2.length; c++)
      if (!He(a2[c], b[c]))
        return false;
    return true;
  }
  function Ch(a2, b, c, d, e, f) {
    xh = f;
    R = b;
    b.memoizedState = null;
    b.updateQueue = null;
    b.lanes = 0;
    vh.current = a2 === null || a2.memoizedState === null ? Dh : Eh;
    a2 = c(d, e);
    if (zh) {
      f = 0;
      do {
        zh = false;
        if (!(25 > f))
          throw Error(y(301));
        f += 1;
        T = S = null;
        b.updateQueue = null;
        vh.current = Fh;
        a2 = c(d, e);
      } while (zh);
    }
    vh.current = Gh;
    b = S !== null && S.next !== null;
    xh = 0;
    T = S = R = null;
    yh = false;
    if (b)
      throw Error(y(300));
    return a2;
  }
  function Hh() {
    var a2 = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    T === null ? R.memoizedState = T = a2 : T = T.next = a2;
    return T;
  }
  function Ih() {
    if (S === null) {
      var a2 = R.alternate;
      a2 = a2 !== null ? a2.memoizedState : null;
    } else
      a2 = S.next;
    var b = T === null ? R.memoizedState : T.next;
    if (b !== null)
      T = b, S = a2;
    else {
      if (a2 === null)
        throw Error(y(310));
      S = a2;
      a2 = { memoizedState: S.memoizedState, baseState: S.baseState, baseQueue: S.baseQueue, queue: S.queue, next: null };
      T === null ? R.memoizedState = T = a2 : T = T.next = a2;
    }
    return T;
  }
  function Jh(a2, b) {
    return typeof b === "function" ? b(a2) : b;
  }
  function Kh(a2) {
    var b = Ih(), c = b.queue;
    if (c === null)
      throw Error(y(311));
    c.lastRenderedReducer = a2;
    var d = S, e = d.baseQueue, f = c.pending;
    if (f !== null) {
      if (e !== null) {
        var g = e.next;
        e.next = f.next;
        f.next = g;
      }
      d.baseQueue = e = f;
      c.pending = null;
    }
    if (e !== null) {
      e = e.next;
      d = d.baseState;
      var h = g = f = null, k = e;
      do {
        var l = k.lane;
        if ((xh & l) === l)
          h !== null && (h = h.next = { lane: 0, action: k.action, eagerReducer: k.eagerReducer, eagerState: k.eagerState, next: null }), d = k.eagerReducer === a2 ? k.eagerState : a2(d, k.action);
        else {
          var n = {
            lane: l,
            action: k.action,
            eagerReducer: k.eagerReducer,
            eagerState: k.eagerState,
            next: null
          };
          h === null ? (g = h = n, f = d) : h = h.next = n;
          R.lanes |= l;
          Dg |= l;
        }
        k = k.next;
      } while (k !== null && k !== e);
      h === null ? f = d : h.next = g;
      He(d, b.memoizedState) || (ug = true);
      b.memoizedState = d;
      b.baseState = f;
      b.baseQueue = h;
      c.lastRenderedState = d;
    }
    return [b.memoizedState, c.dispatch];
  }
  function Lh(a2) {
    var b = Ih(), c = b.queue;
    if (c === null)
      throw Error(y(311));
    c.lastRenderedReducer = a2;
    var d = c.dispatch, e = c.pending, f = b.memoizedState;
    if (e !== null) {
      c.pending = null;
      var g = e = e.next;
      do
        f = a2(f, g.action), g = g.next;
      while (g !== e);
      He(f, b.memoizedState) || (ug = true);
      b.memoizedState = f;
      b.baseQueue === null && (b.baseState = f);
      c.lastRenderedState = f;
    }
    return [f, d];
  }
  function Mh(a2, b, c) {
    var d = b._getVersion;
    d = d(b._source);
    var e = b._workInProgressVersionPrimary;
    if (e !== null)
      a2 = e === d;
    else if (a2 = a2.mutableReadLanes, a2 = (xh & a2) === a2)
      b._workInProgressVersionPrimary = d, th.push(b);
    if (a2)
      return c(b._source);
    th.push(b);
    throw Error(y(350));
  }
  function Nh(a2, b, c, d) {
    var e = U;
    if (e === null)
      throw Error(y(349));
    var f = b._getVersion, g = f(b._source), h = vh.current, k = h.useState(function() {
      return Mh(e, b, c);
    }), l = k[1], n = k[0];
    k = T;
    var A = a2.memoizedState, p = A.refs, C2 = p.getSnapshot, x = A.source;
    A = A.subscribe;
    var w = R;
    a2.memoizedState = { refs: p, source: b, subscribe: d };
    h.useEffect(function() {
      p.getSnapshot = c;
      p.setSnapshot = l;
      var a22 = f(b._source);
      if (!He(g, a22)) {
        a22 = c(b._source);
        He(n, a22) || (l(a22), a22 = Ig(w), e.mutableReadLanes |= a22 & e.pendingLanes);
        a22 = e.mutableReadLanes;
        e.entangledLanes |= a22;
        for (var d2 = e.entanglements, h2 = a22; 0 < h2; ) {
          var k2 = 31 - Vc(h2), v = 1 << k2;
          d2[k2] |= a22;
          h2 &= ~v;
        }
      }
    }, [c, b, d]);
    h.useEffect(function() {
      return d(b._source, function() {
        var a22 = p.getSnapshot, c2 = p.setSnapshot;
        try {
          c2(a22(b._source));
          var d2 = Ig(w);
          e.mutableReadLanes |= d2 & e.pendingLanes;
        } catch (q) {
          c2(function() {
            throw q;
          });
        }
      });
    }, [b, d]);
    He(C2, c) && He(x, b) && He(A, d) || (a2 = { pending: null, dispatch: null, lastRenderedReducer: Jh, lastRenderedState: n }, a2.dispatch = l = Oh.bind(null, R, a2), k.queue = a2, k.baseQueue = null, n = Mh(e, b, c), k.memoizedState = k.baseState = n);
    return n;
  }
  function Ph(a2, b, c) {
    var d = Ih();
    return Nh(d, a2, b, c);
  }
  function Qh(a2) {
    var b = Hh();
    typeof a2 === "function" && (a2 = a2());
    b.memoizedState = b.baseState = a2;
    a2 = b.queue = { pending: null, dispatch: null, lastRenderedReducer: Jh, lastRenderedState: a2 };
    a2 = a2.dispatch = Oh.bind(null, R, a2);
    return [b.memoizedState, a2];
  }
  function Rh(a2, b, c, d) {
    a2 = { tag: a2, create: b, destroy: c, deps: d, next: null };
    b = R.updateQueue;
    b === null ? (b = { lastEffect: null }, R.updateQueue = b, b.lastEffect = a2.next = a2) : (c = b.lastEffect, c === null ? b.lastEffect = a2.next = a2 : (d = c.next, c.next = a2, a2.next = d, b.lastEffect = a2));
    return a2;
  }
  function Sh(a2) {
    var b = Hh();
    a2 = { current: a2 };
    return b.memoizedState = a2;
  }
  function Th() {
    return Ih().memoizedState;
  }
  function Uh(a2, b, c, d) {
    var e = Hh();
    R.flags |= a2;
    e.memoizedState = Rh(1 | b, c, void 0, d === void 0 ? null : d);
  }
  function Vh(a2, b, c, d) {
    var e = Ih();
    d = d === void 0 ? null : d;
    var f = void 0;
    if (S !== null) {
      var g = S.memoizedState;
      f = g.destroy;
      if (d !== null && Bh(d, g.deps)) {
        Rh(b, c, f, d);
        return;
      }
    }
    R.flags |= a2;
    e.memoizedState = Rh(1 | b, c, f, d);
  }
  function Wh(a2, b) {
    return Uh(516, 4, a2, b);
  }
  function Xh(a2, b) {
    return Vh(516, 4, a2, b);
  }
  function Yh(a2, b) {
    return Vh(4, 2, a2, b);
  }
  function Zh(a2, b) {
    if (typeof b === "function")
      return a2 = a2(), b(a2), function() {
        b(null);
      };
    if (b !== null && b !== void 0)
      return a2 = a2(), b.current = a2, function() {
        b.current = null;
      };
  }
  function $h(a2, b, c) {
    c = c !== null && c !== void 0 ? c.concat([a2]) : null;
    return Vh(4, 2, Zh.bind(null, b, a2), c);
  }
  function ai() {
  }
  function bi(a2, b) {
    var c = Ih();
    b = b === void 0 ? null : b;
    var d = c.memoizedState;
    if (d !== null && b !== null && Bh(b, d[1]))
      return d[0];
    c.memoizedState = [a2, b];
    return a2;
  }
  function ci(a2, b) {
    var c = Ih();
    b = b === void 0 ? null : b;
    var d = c.memoizedState;
    if (d !== null && b !== null && Bh(b, d[1]))
      return d[0];
    a2 = a2();
    c.memoizedState = [a2, b];
    return a2;
  }
  function di(a2, b) {
    var c = eg();
    gg(98 > c ? 98 : c, function() {
      a2(true);
    });
    gg(97 < c ? 97 : c, function() {
      var c2 = wh.transition;
      wh.transition = 1;
      try {
        a2(false), b();
      } finally {
        wh.transition = c2;
      }
    });
  }
  function Oh(a2, b, c) {
    var d = Hg(), e = Ig(a2), f = { lane: e, action: c, eagerReducer: null, eagerState: null, next: null }, g = b.pending;
    g === null ? f.next = f : (f.next = g.next, g.next = f);
    b.pending = f;
    g = a2.alternate;
    if (a2 === R || g !== null && g === R)
      zh = yh = true;
    else {
      if (a2.lanes === 0 && (g === null || g.lanes === 0) && (g = b.lastRenderedReducer, g !== null))
        try {
          var h = b.lastRenderedState, k = g(h, c);
          f.eagerReducer = g;
          f.eagerState = k;
          if (He(k, h))
            return;
        } catch (l) {
        } finally {
        }
      Jg(a2, e, d);
    }
  }
  var Gh = { readContext: vg, useCallback: Ah, useContext: Ah, useEffect: Ah, useImperativeHandle: Ah, useLayoutEffect: Ah, useMemo: Ah, useReducer: Ah, useRef: Ah, useState: Ah, useDebugValue: Ah, useDeferredValue: Ah, useTransition: Ah, useMutableSource: Ah, useOpaqueIdentifier: Ah, unstable_isNewReconciler: false };
  var Dh = { readContext: vg, useCallback: function(a2, b) {
    Hh().memoizedState = [a2, b === void 0 ? null : b];
    return a2;
  }, useContext: vg, useEffect: Wh, useImperativeHandle: function(a2, b, c) {
    c = c !== null && c !== void 0 ? c.concat([a2]) : null;
    return Uh(4, 2, Zh.bind(null, b, a2), c);
  }, useLayoutEffect: function(a2, b) {
    return Uh(4, 2, a2, b);
  }, useMemo: function(a2, b) {
    var c = Hh();
    b = b === void 0 ? null : b;
    a2 = a2();
    c.memoizedState = [a2, b];
    return a2;
  }, useReducer: function(a2, b, c) {
    var d = Hh();
    b = c !== void 0 ? c(b) : b;
    d.memoizedState = d.baseState = b;
    a2 = d.queue = { pending: null, dispatch: null, lastRenderedReducer: a2, lastRenderedState: b };
    a2 = a2.dispatch = Oh.bind(null, R, a2);
    return [d.memoizedState, a2];
  }, useRef: Sh, useState: Qh, useDebugValue: ai, useDeferredValue: function(a2) {
    var b = Qh(a2), c = b[0], d = b[1];
    Wh(function() {
      var b2 = wh.transition;
      wh.transition = 1;
      try {
        d(a2);
      } finally {
        wh.transition = b2;
      }
    }, [a2]);
    return c;
  }, useTransition: function() {
    var a2 = Qh(false), b = a2[0];
    a2 = di.bind(null, a2[1]);
    Sh(a2);
    return [a2, b];
  }, useMutableSource: function(a2, b, c) {
    var d = Hh();
    d.memoizedState = { refs: { getSnapshot: b, setSnapshot: null }, source: a2, subscribe: c };
    return Nh(d, a2, b, c);
  }, useOpaqueIdentifier: function() {
    if (lh) {
      var a2 = false, b = uf(function() {
        a2 || (a2 = true, c("r:" + (tf++).toString(36)));
        throw Error(y(355));
      }), c = Qh(b)[1];
      (R.mode & 2) === 0 && (R.flags |= 516, Rh(5, function() {
        c("r:" + (tf++).toString(36));
      }, void 0, null));
      return b;
    }
    b = "r:" + (tf++).toString(36);
    Qh(b);
    return b;
  }, unstable_isNewReconciler: false };
  var Eh = { readContext: vg, useCallback: bi, useContext: vg, useEffect: Xh, useImperativeHandle: $h, useLayoutEffect: Yh, useMemo: ci, useReducer: Kh, useRef: Th, useState: function() {
    return Kh(Jh);
  }, useDebugValue: ai, useDeferredValue: function(a2) {
    var b = Kh(Jh), c = b[0], d = b[1];
    Xh(function() {
      var b2 = wh.transition;
      wh.transition = 1;
      try {
        d(a2);
      } finally {
        wh.transition = b2;
      }
    }, [a2]);
    return c;
  }, useTransition: function() {
    var a2 = Kh(Jh)[0];
    return [
      Th().current,
      a2
    ];
  }, useMutableSource: Ph, useOpaqueIdentifier: function() {
    return Kh(Jh)[0];
  }, unstable_isNewReconciler: false };
  var Fh = { readContext: vg, useCallback: bi, useContext: vg, useEffect: Xh, useImperativeHandle: $h, useLayoutEffect: Yh, useMemo: ci, useReducer: Lh, useRef: Th, useState: function() {
    return Lh(Jh);
  }, useDebugValue: ai, useDeferredValue: function(a2) {
    var b = Lh(Jh), c = b[0], d = b[1];
    Xh(function() {
      var b2 = wh.transition;
      wh.transition = 1;
      try {
        d(a2);
      } finally {
        wh.transition = b2;
      }
    }, [a2]);
    return c;
  }, useTransition: function() {
    var a2 = Lh(Jh)[0];
    return [
      Th().current,
      a2
    ];
  }, useMutableSource: Ph, useOpaqueIdentifier: function() {
    return Lh(Jh)[0];
  }, unstable_isNewReconciler: false };
  var ei = ra.ReactCurrentOwner;
  var ug = false;
  function fi(a2, b, c, d) {
    b.child = a2 === null ? Zg(b, null, c, d) : Yg(b, a2.child, c, d);
  }
  function gi(a2, b, c, d, e) {
    c = c.render;
    var f = b.ref;
    tg(b, e);
    d = Ch(a2, b, c, d, f, e);
    if (a2 !== null && !ug)
      return b.updateQueue = a2.updateQueue, b.flags &= -517, a2.lanes &= ~e, hi(a2, b, e);
    b.flags |= 1;
    fi(a2, b, d, e);
    return b.child;
  }
  function ii(a2, b, c, d, e, f) {
    if (a2 === null) {
      var g = c.type;
      if (typeof g === "function" && !ji(g) && g.defaultProps === void 0 && c.compare === null && c.defaultProps === void 0)
        return b.tag = 15, b.type = g, ki(a2, b, g, d, e, f);
      a2 = Vg(c.type, null, d, b, b.mode, f);
      a2.ref = b.ref;
      a2.return = b;
      return b.child = a2;
    }
    g = a2.child;
    if ((e & f) === 0 && (e = g.memoizedProps, c = c.compare, c = c !== null ? c : Je, c(e, d) && a2.ref === b.ref))
      return hi(a2, b, f);
    b.flags |= 1;
    a2 = Tg(g, d);
    a2.ref = b.ref;
    a2.return = b;
    return b.child = a2;
  }
  function ki(a2, b, c, d, e, f) {
    if (a2 !== null && Je(a2.memoizedProps, d) && a2.ref === b.ref)
      if (ug = false, (f & e) !== 0)
        (a2.flags & 16384) !== 0 && (ug = true);
      else
        return b.lanes = a2.lanes, hi(a2, b, f);
    return li(a2, b, c, d, f);
  }
  function mi(a2, b, c) {
    var d = b.pendingProps, e = d.children, f = a2 !== null ? a2.memoizedState : null;
    if (d.mode === "hidden" || d.mode === "unstable-defer-without-hiding")
      if ((b.mode & 4) === 0)
        b.memoizedState = { baseLanes: 0 }, ni(b, c);
      else if ((c & 1073741824) !== 0)
        b.memoizedState = { baseLanes: 0 }, ni(b, f !== null ? f.baseLanes : c);
      else
        return a2 = f !== null ? f.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, b.memoizedState = { baseLanes: a2 }, ni(b, a2), null;
    else
      f !== null ? (d = f.baseLanes | c, b.memoizedState = null) : d = c, ni(b, d);
    fi(a2, b, e, c);
    return b.child;
  }
  function oi(a2, b) {
    var c = b.ref;
    if (a2 === null && c !== null || a2 !== null && a2.ref !== c)
      b.flags |= 128;
  }
  function li(a2, b, c, d, e) {
    var f = Ff(c) ? Df : M.current;
    f = Ef(b, f);
    tg(b, e);
    c = Ch(a2, b, c, d, f, e);
    if (a2 !== null && !ug)
      return b.updateQueue = a2.updateQueue, b.flags &= -517, a2.lanes &= ~e, hi(a2, b, e);
    b.flags |= 1;
    fi(a2, b, c, e);
    return b.child;
  }
  function pi(a2, b, c, d, e) {
    if (Ff(c)) {
      var f = true;
      Jf(b);
    } else
      f = false;
    tg(b, e);
    if (b.stateNode === null)
      a2 !== null && (a2.alternate = null, b.alternate = null, b.flags |= 2), Mg(b, c, d), Og(b, c, d, e), d = true;
    else if (a2 === null) {
      var g = b.stateNode, h = b.memoizedProps;
      g.props = h;
      var k = g.context, l = c.contextType;
      typeof l === "object" && l !== null ? l = vg(l) : (l = Ff(c) ? Df : M.current, l = Ef(b, l));
      var n = c.getDerivedStateFromProps, A = typeof n === "function" || typeof g.getSnapshotBeforeUpdate === "function";
      A || typeof g.UNSAFE_componentWillReceiveProps !== "function" && typeof g.componentWillReceiveProps !== "function" || (h !== d || k !== l) && Ng(b, g, d, l);
      wg = false;
      var p = b.memoizedState;
      g.state = p;
      Cg(b, d, g, e);
      k = b.memoizedState;
      h !== d || p !== k || N.current || wg ? (typeof n === "function" && (Gg(b, c, n, d), k = b.memoizedState), (h = wg || Lg(b, c, h, d, p, k, l)) ? (A || typeof g.UNSAFE_componentWillMount !== "function" && typeof g.componentWillMount !== "function" || (typeof g.componentWillMount === "function" && g.componentWillMount(), typeof g.UNSAFE_componentWillMount === "function" && g.UNSAFE_componentWillMount()), typeof g.componentDidMount === "function" && (b.flags |= 4)) : (typeof g.componentDidMount === "function" && (b.flags |= 4), b.memoizedProps = d, b.memoizedState = k), g.props = d, g.state = k, g.context = l, d = h) : (typeof g.componentDidMount === "function" && (b.flags |= 4), d = false);
    } else {
      g = b.stateNode;
      yg(a2, b);
      h = b.memoizedProps;
      l = b.type === b.elementType ? h : lg(b.type, h);
      g.props = l;
      A = b.pendingProps;
      p = g.context;
      k = c.contextType;
      typeof k === "object" && k !== null ? k = vg(k) : (k = Ff(c) ? Df : M.current, k = Ef(b, k));
      var C2 = c.getDerivedStateFromProps;
      (n = typeof C2 === "function" || typeof g.getSnapshotBeforeUpdate === "function") || typeof g.UNSAFE_componentWillReceiveProps !== "function" && typeof g.componentWillReceiveProps !== "function" || (h !== A || p !== k) && Ng(b, g, d, k);
      wg = false;
      p = b.memoizedState;
      g.state = p;
      Cg(b, d, g, e);
      var x = b.memoizedState;
      h !== A || p !== x || N.current || wg ? (typeof C2 === "function" && (Gg(b, c, C2, d), x = b.memoizedState), (l = wg || Lg(b, c, l, d, p, x, k)) ? (n || typeof g.UNSAFE_componentWillUpdate !== "function" && typeof g.componentWillUpdate !== "function" || (typeof g.componentWillUpdate === "function" && g.componentWillUpdate(d, x, k), typeof g.UNSAFE_componentWillUpdate === "function" && g.UNSAFE_componentWillUpdate(d, x, k)), typeof g.componentDidUpdate === "function" && (b.flags |= 4), typeof g.getSnapshotBeforeUpdate === "function" && (b.flags |= 256)) : (typeof g.componentDidUpdate !== "function" || h === a2.memoizedProps && p === a2.memoizedState || (b.flags |= 4), typeof g.getSnapshotBeforeUpdate !== "function" || h === a2.memoizedProps && p === a2.memoizedState || (b.flags |= 256), b.memoizedProps = d, b.memoizedState = x), g.props = d, g.state = x, g.context = k, d = l) : (typeof g.componentDidUpdate !== "function" || h === a2.memoizedProps && p === a2.memoizedState || (b.flags |= 4), typeof g.getSnapshotBeforeUpdate !== "function" || h === a2.memoizedProps && p === a2.memoizedState || (b.flags |= 256), d = false);
    }
    return qi(a2, b, c, d, f, e);
  }
  function qi(a2, b, c, d, e, f) {
    oi(a2, b);
    var g = (b.flags & 64) !== 0;
    if (!d && !g)
      return e && Kf(b, c, false), hi(a2, b, f);
    d = b.stateNode;
    ei.current = b;
    var h = g && typeof c.getDerivedStateFromError !== "function" ? null : d.render();
    b.flags |= 1;
    a2 !== null && g ? (b.child = Yg(b, a2.child, null, f), b.child = Yg(b, null, h, f)) : fi(a2, b, h, f);
    b.memoizedState = d.state;
    e && Kf(b, c, true);
    return b.child;
  }
  function ri(a2) {
    var b = a2.stateNode;
    b.pendingContext ? Hf(a2, b.pendingContext, b.pendingContext !== b.context) : b.context && Hf(a2, b.context, false);
    eh(a2, b.containerInfo);
  }
  var si = { dehydrated: null, retryLane: 0 };
  function ti(a2, b, c) {
    var d = b.pendingProps, e = P.current, f = false, g;
    (g = (b.flags & 64) !== 0) || (g = a2 !== null && a2.memoizedState === null ? false : (e & 2) !== 0);
    g ? (f = true, b.flags &= -65) : a2 !== null && a2.memoizedState === null || d.fallback === void 0 || d.unstable_avoidThisFallback === true || (e |= 1);
    I(P, e & 1);
    if (a2 === null) {
      d.fallback !== void 0 && ph(b);
      a2 = d.children;
      e = d.fallback;
      if (f)
        return a2 = ui(b, a2, e, c), b.child.memoizedState = { baseLanes: c }, b.memoizedState = si, a2;
      if (typeof d.unstable_expectedLoadTime === "number")
        return a2 = ui(b, a2, e, c), b.child.memoizedState = { baseLanes: c }, b.memoizedState = si, b.lanes = 33554432, a2;
      c = vi({ mode: "visible", children: a2 }, b.mode, c, null);
      c.return = b;
      return b.child = c;
    }
    if (a2.memoizedState !== null) {
      if (f)
        return d = wi(a2, b, d.children, d.fallback, c), f = b.child, e = a2.child.memoizedState, f.memoizedState = e === null ? { baseLanes: c } : { baseLanes: e.baseLanes | c }, f.childLanes = a2.childLanes & ~c, b.memoizedState = si, d;
      c = xi(a2, b, d.children, c);
      b.memoizedState = null;
      return c;
    }
    if (f)
      return d = wi(a2, b, d.children, d.fallback, c), f = b.child, e = a2.child.memoizedState, f.memoizedState = e === null ? { baseLanes: c } : { baseLanes: e.baseLanes | c }, f.childLanes = a2.childLanes & ~c, b.memoizedState = si, d;
    c = xi(a2, b, d.children, c);
    b.memoizedState = null;
    return c;
  }
  function ui(a2, b, c, d) {
    var e = a2.mode, f = a2.child;
    b = { mode: "hidden", children: b };
    (e & 2) === 0 && f !== null ? (f.childLanes = 0, f.pendingProps = b) : f = vi(b, e, 0, null);
    c = Xg(c, e, d, null);
    f.return = a2;
    c.return = a2;
    f.sibling = c;
    a2.child = f;
    return c;
  }
  function xi(a2, b, c, d) {
    var e = a2.child;
    a2 = e.sibling;
    c = Tg(e, { mode: "visible", children: c });
    (b.mode & 2) === 0 && (c.lanes = d);
    c.return = b;
    c.sibling = null;
    a2 !== null && (a2.nextEffect = null, a2.flags = 8, b.firstEffect = b.lastEffect = a2);
    return b.child = c;
  }
  function wi(a2, b, c, d, e) {
    var f = b.mode, g = a2.child;
    a2 = g.sibling;
    var h = { mode: "hidden", children: c };
    (f & 2) === 0 && b.child !== g ? (c = b.child, c.childLanes = 0, c.pendingProps = h, g = c.lastEffect, g !== null ? (b.firstEffect = c.firstEffect, b.lastEffect = g, g.nextEffect = null) : b.firstEffect = b.lastEffect = null) : c = Tg(g, h);
    a2 !== null ? d = Tg(a2, d) : (d = Xg(d, f, e, null), d.flags |= 2);
    d.return = b;
    c.return = b;
    c.sibling = d;
    b.child = c;
    return d;
  }
  function yi(a2, b) {
    a2.lanes |= b;
    var c = a2.alternate;
    c !== null && (c.lanes |= b);
    sg(a2.return, b);
  }
  function zi(a2, b, c, d, e, f) {
    var g = a2.memoizedState;
    g === null ? a2.memoizedState = { isBackwards: b, rendering: null, renderingStartTime: 0, last: d, tail: c, tailMode: e, lastEffect: f } : (g.isBackwards = b, g.rendering = null, g.renderingStartTime = 0, g.last = d, g.tail = c, g.tailMode = e, g.lastEffect = f);
  }
  function Ai(a2, b, c) {
    var d = b.pendingProps, e = d.revealOrder, f = d.tail;
    fi(a2, b, d.children, c);
    d = P.current;
    if ((d & 2) !== 0)
      d = d & 1 | 2, b.flags |= 64;
    else {
      if (a2 !== null && (a2.flags & 64) !== 0)
        a:
          for (a2 = b.child; a2 !== null; ) {
            if (a2.tag === 13)
              a2.memoizedState !== null && yi(a2, c);
            else if (a2.tag === 19)
              yi(a2, c);
            else if (a2.child !== null) {
              a2.child.return = a2;
              a2 = a2.child;
              continue;
            }
            if (a2 === b)
              break a;
            for (; a2.sibling === null; ) {
              if (a2.return === null || a2.return === b)
                break a;
              a2 = a2.return;
            }
            a2.sibling.return = a2.return;
            a2 = a2.sibling;
          }
      d &= 1;
    }
    I(P, d);
    if ((b.mode & 2) === 0)
      b.memoizedState = null;
    else
      switch (e) {
        case "forwards":
          c = b.child;
          for (e = null; c !== null; )
            a2 = c.alternate, a2 !== null && ih(a2) === null && (e = c), c = c.sibling;
          c = e;
          c === null ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
          zi(b, false, e, c, f, b.lastEffect);
          break;
        case "backwards":
          c = null;
          e = b.child;
          for (b.child = null; e !== null; ) {
            a2 = e.alternate;
            if (a2 !== null && ih(a2) === null) {
              b.child = e;
              break;
            }
            a2 = e.sibling;
            e.sibling = c;
            c = e;
            e = a2;
          }
          zi(b, true, c, null, f, b.lastEffect);
          break;
        case "together":
          zi(b, false, null, null, void 0, b.lastEffect);
          break;
        default:
          b.memoizedState = null;
      }
    return b.child;
  }
  function hi(a2, b, c) {
    a2 !== null && (b.dependencies = a2.dependencies);
    Dg |= b.lanes;
    if ((c & b.childLanes) !== 0) {
      if (a2 !== null && b.child !== a2.child)
        throw Error(y(153));
      if (b.child !== null) {
        a2 = b.child;
        c = Tg(a2, a2.pendingProps);
        b.child = c;
        for (c.return = b; a2.sibling !== null; )
          a2 = a2.sibling, c = c.sibling = Tg(a2, a2.pendingProps), c.return = b;
        c.sibling = null;
      }
      return b.child;
    }
    return null;
  }
  var Bi;
  var Ci;
  var Di;
  var Ei;
  Bi = function(a2, b) {
    for (var c = b.child; c !== null; ) {
      if (c.tag === 5 || c.tag === 6)
        a2.appendChild(c.stateNode);
      else if (c.tag !== 4 && c.child !== null) {
        c.child.return = c;
        c = c.child;
        continue;
      }
      if (c === b)
        break;
      for (; c.sibling === null; ) {
        if (c.return === null || c.return === b)
          return;
        c = c.return;
      }
      c.sibling.return = c.return;
      c = c.sibling;
    }
  };
  Ci = function() {
  };
  Di = function(a2, b, c, d) {
    var e = a2.memoizedProps;
    if (e !== d) {
      a2 = b.stateNode;
      dh(ah.current);
      var f = null;
      switch (c) {
        case "input":
          e = Ya(a2, e);
          d = Ya(a2, d);
          f = [];
          break;
        case "option":
          e = eb(a2, e);
          d = eb(a2, d);
          f = [];
          break;
        case "select":
          e = object_assign_default({}, e, { value: void 0 });
          d = object_assign_default({}, d, { value: void 0 });
          f = [];
          break;
        case "textarea":
          e = gb(a2, e);
          d = gb(a2, d);
          f = [];
          break;
        default:
          typeof e.onClick !== "function" && typeof d.onClick === "function" && (a2.onclick = jf);
      }
      vb(c, d);
      var g;
      c = null;
      for (l in e)
        if (!d.hasOwnProperty(l) && e.hasOwnProperty(l) && e[l] != null)
          if (l === "style") {
            var h = e[l];
            for (g in h)
              h.hasOwnProperty(g) && (c || (c = {}), c[g] = "");
          } else
            l !== "dangerouslySetInnerHTML" && l !== "children" && l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && l !== "autoFocus" && (ca.hasOwnProperty(l) ? f || (f = []) : (f = f || []).push(l, null));
      for (l in d) {
        var k = d[l];
        h = e != null ? e[l] : void 0;
        if (d.hasOwnProperty(l) && k !== h && (k != null || h != null))
          if (l === "style")
            if (h) {
              for (g in h)
                !h.hasOwnProperty(g) || k && k.hasOwnProperty(g) || (c || (c = {}), c[g] = "");
              for (g in k)
                k.hasOwnProperty(g) && h[g] !== k[g] && (c || (c = {}), c[g] = k[g]);
            } else
              c || (f || (f = []), f.push(l, c)), c = k;
          else
            l === "dangerouslySetInnerHTML" ? (k = k ? k.__html : void 0, h = h ? h.__html : void 0, k != null && h !== k && (f = f || []).push(l, k)) : l === "children" ? typeof k !== "string" && typeof k !== "number" || (f = f || []).push(l, "" + k) : l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && (ca.hasOwnProperty(l) ? (k != null && l === "onScroll" && G("scroll", a2), f || h === k || (f = [])) : typeof k === "object" && k !== null && k.$$typeof === Ga ? k.toString() : (f = f || []).push(l, k));
      }
      c && (f = f || []).push("style", c);
      var l = f;
      if (b.updateQueue = l)
        b.flags |= 4;
    }
  };
  Ei = function(a2, b, c, d) {
    c !== d && (b.flags |= 4);
  };
  function Fi(a2, b) {
    if (!lh)
      switch (a2.tailMode) {
        case "hidden":
          b = a2.tail;
          for (var c = null; b !== null; )
            b.alternate !== null && (c = b), b = b.sibling;
          c === null ? a2.tail = null : c.sibling = null;
          break;
        case "collapsed":
          c = a2.tail;
          for (var d = null; c !== null; )
            c.alternate !== null && (d = c), c = c.sibling;
          d === null ? b || a2.tail === null ? a2.tail = null : a2.tail.sibling = null : d.sibling = null;
      }
  }
  function Gi(a2, b, c) {
    var d = b.pendingProps;
    switch (b.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return null;
      case 1:
        return Ff(b.type) && Gf(), null;
      case 3:
        fh();
        H(N);
        H(M);
        uh();
        d = b.stateNode;
        d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
        if (a2 === null || a2.child === null)
          rh(b) ? b.flags |= 4 : d.hydrate || (b.flags |= 256);
        Ci(b);
        return null;
      case 5:
        hh(b);
        var e = dh(ch.current);
        c = b.type;
        if (a2 !== null && b.stateNode != null)
          Di(a2, b, c, d, e), a2.ref !== b.ref && (b.flags |= 128);
        else {
          if (!d) {
            if (b.stateNode === null)
              throw Error(y(166));
            return null;
          }
          a2 = dh(ah.current);
          if (rh(b)) {
            d = b.stateNode;
            c = b.type;
            var f = b.memoizedProps;
            d[wf] = b;
            d[xf] = f;
            switch (c) {
              case "dialog":
                G("cancel", d);
                G("close", d);
                break;
              case "iframe":
              case "object":
              case "embed":
                G("load", d);
                break;
              case "video":
              case "audio":
                for (a2 = 0; a2 < Xe.length; a2++)
                  G(Xe[a2], d);
                break;
              case "source":
                G("error", d);
                break;
              case "img":
              case "image":
              case "link":
                G("error", d);
                G("load", d);
                break;
              case "details":
                G("toggle", d);
                break;
              case "input":
                Za(d, f);
                G("invalid", d);
                break;
              case "select":
                d._wrapperState = { wasMultiple: !!f.multiple };
                G("invalid", d);
                break;
              case "textarea":
                hb(d, f), G("invalid", d);
            }
            vb(c, f);
            a2 = null;
            for (var g in f)
              f.hasOwnProperty(g) && (e = f[g], g === "children" ? typeof e === "string" ? d.textContent !== e && (a2 = ["children", e]) : typeof e === "number" && d.textContent !== "" + e && (a2 = ["children", "" + e]) : ca.hasOwnProperty(g) && e != null && g === "onScroll" && G("scroll", d));
            switch (c) {
              case "input":
                Va(d);
                cb(d, f, true);
                break;
              case "textarea":
                Va(d);
                jb(d);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof f.onClick === "function" && (d.onclick = jf);
            }
            d = a2;
            b.updateQueue = d;
            d !== null && (b.flags |= 4);
          } else {
            g = e.nodeType === 9 ? e : e.ownerDocument;
            a2 === kb.html && (a2 = lb(c));
            a2 === kb.html ? c === "script" ? (a2 = g.createElement("div"), a2.innerHTML = "<script><\/script>", a2 = a2.removeChild(a2.firstChild)) : typeof d.is === "string" ? a2 = g.createElement(c, { is: d.is }) : (a2 = g.createElement(c), c === "select" && (g = a2, d.multiple ? g.multiple = true : d.size && (g.size = d.size))) : a2 = g.createElementNS(a2, c);
            a2[wf] = b;
            a2[xf] = d;
            Bi(a2, b, false, false);
            b.stateNode = a2;
            g = wb(c, d);
            switch (c) {
              case "dialog":
                G("cancel", a2);
                G("close", a2);
                e = d;
                break;
              case "iframe":
              case "object":
              case "embed":
                G("load", a2);
                e = d;
                break;
              case "video":
              case "audio":
                for (e = 0; e < Xe.length; e++)
                  G(Xe[e], a2);
                e = d;
                break;
              case "source":
                G("error", a2);
                e = d;
                break;
              case "img":
              case "image":
              case "link":
                G("error", a2);
                G("load", a2);
                e = d;
                break;
              case "details":
                G("toggle", a2);
                e = d;
                break;
              case "input":
                Za(a2, d);
                e = Ya(a2, d);
                G("invalid", a2);
                break;
              case "option":
                e = eb(a2, d);
                break;
              case "select":
                a2._wrapperState = { wasMultiple: !!d.multiple };
                e = object_assign_default({}, d, { value: void 0 });
                G("invalid", a2);
                break;
              case "textarea":
                hb(a2, d);
                e = gb(a2, d);
                G("invalid", a2);
                break;
              default:
                e = d;
            }
            vb(c, e);
            var h = e;
            for (f in h)
              if (h.hasOwnProperty(f)) {
                var k = h[f];
                f === "style" ? tb(a2, k) : f === "dangerouslySetInnerHTML" ? (k = k ? k.__html : void 0, k != null && ob(a2, k)) : f === "children" ? typeof k === "string" ? (c !== "textarea" || k !== "") && pb(a2, k) : typeof k === "number" && pb(a2, "" + k) : f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && f !== "autoFocus" && (ca.hasOwnProperty(f) ? k != null && f === "onScroll" && G("scroll", a2) : k != null && qa(a2, f, k, g));
              }
            switch (c) {
              case "input":
                Va(a2);
                cb(a2, d, false);
                break;
              case "textarea":
                Va(a2);
                jb(a2);
                break;
              case "option":
                d.value != null && a2.setAttribute("value", "" + Sa(d.value));
                break;
              case "select":
                a2.multiple = !!d.multiple;
                f = d.value;
                f != null ? fb(a2, !!d.multiple, f, false) : d.defaultValue != null && fb(a2, !!d.multiple, d.defaultValue, true);
                break;
              default:
                typeof e.onClick === "function" && (a2.onclick = jf);
            }
            mf(c, d) && (b.flags |= 4);
          }
          b.ref !== null && (b.flags |= 128);
        }
        return null;
      case 6:
        if (a2 && b.stateNode != null)
          Ei(a2, b, a2.memoizedProps, d);
        else {
          if (typeof d !== "string" && b.stateNode === null)
            throw Error(y(166));
          c = dh(ch.current);
          dh(ah.current);
          rh(b) ? (d = b.stateNode, c = b.memoizedProps, d[wf] = b, d.nodeValue !== c && (b.flags |= 4)) : (d = (c.nodeType === 9 ? c : c.ownerDocument).createTextNode(d), d[wf] = b, b.stateNode = d);
        }
        return null;
      case 13:
        H(P);
        d = b.memoizedState;
        if ((b.flags & 64) !== 0)
          return b.lanes = c, b;
        d = d !== null;
        c = false;
        a2 === null ? b.memoizedProps.fallback !== void 0 && rh(b) : c = a2.memoizedState !== null;
        if (d && !c && (b.mode & 2) !== 0)
          if (a2 === null && b.memoizedProps.unstable_avoidThisFallback !== true || (P.current & 1) !== 0)
            V === 0 && (V = 3);
          else {
            if (V === 0 || V === 3)
              V = 4;
            U === null || (Dg & 134217727) === 0 && (Hi & 134217727) === 0 || Ii(U, W);
          }
        if (d || c)
          b.flags |= 4;
        return null;
      case 4:
        return fh(), Ci(b), a2 === null && cf(b.stateNode.containerInfo), null;
      case 10:
        return rg(b), null;
      case 17:
        return Ff(b.type) && Gf(), null;
      case 19:
        H(P);
        d = b.memoizedState;
        if (d === null)
          return null;
        f = (b.flags & 64) !== 0;
        g = d.rendering;
        if (g === null)
          if (f)
            Fi(d, false);
          else {
            if (V !== 0 || a2 !== null && (a2.flags & 64) !== 0)
              for (a2 = b.child; a2 !== null; ) {
                g = ih(a2);
                if (g !== null) {
                  b.flags |= 64;
                  Fi(d, false);
                  f = g.updateQueue;
                  f !== null && (b.updateQueue = f, b.flags |= 4);
                  d.lastEffect === null && (b.firstEffect = null);
                  b.lastEffect = d.lastEffect;
                  d = c;
                  for (c = b.child; c !== null; )
                    f = c, a2 = d, f.flags &= 2, f.nextEffect = null, f.firstEffect = null, f.lastEffect = null, g = f.alternate, g === null ? (f.childLanes = 0, f.lanes = a2, f.child = null, f.memoizedProps = null, f.memoizedState = null, f.updateQueue = null, f.dependencies = null, f.stateNode = null) : (f.childLanes = g.childLanes, f.lanes = g.lanes, f.child = g.child, f.memoizedProps = g.memoizedProps, f.memoizedState = g.memoizedState, f.updateQueue = g.updateQueue, f.type = g.type, a2 = g.dependencies, f.dependencies = a2 === null ? null : { lanes: a2.lanes, firstContext: a2.firstContext }), c = c.sibling;
                  I(P, P.current & 1 | 2);
                  return b.child;
                }
                a2 = a2.sibling;
              }
            d.tail !== null && O() > Ji && (b.flags |= 64, f = true, Fi(d, false), b.lanes = 33554432);
          }
        else {
          if (!f)
            if (a2 = ih(g), a2 !== null) {
              if (b.flags |= 64, f = true, c = a2.updateQueue, c !== null && (b.updateQueue = c, b.flags |= 4), Fi(d, true), d.tail === null && d.tailMode === "hidden" && !g.alternate && !lh)
                return b = b.lastEffect = d.lastEffect, b !== null && (b.nextEffect = null), null;
            } else
              2 * O() - d.renderingStartTime > Ji && c !== 1073741824 && (b.flags |= 64, f = true, Fi(d, false), b.lanes = 33554432);
          d.isBackwards ? (g.sibling = b.child, b.child = g) : (c = d.last, c !== null ? c.sibling = g : b.child = g, d.last = g);
        }
        return d.tail !== null ? (c = d.tail, d.rendering = c, d.tail = c.sibling, d.lastEffect = b.lastEffect, d.renderingStartTime = O(), c.sibling = null, b = P.current, I(P, f ? b & 1 | 2 : b & 1), c) : null;
      case 23:
      case 24:
        return Ki(), a2 !== null && a2.memoizedState !== null !== (b.memoizedState !== null) && d.mode !== "unstable-defer-without-hiding" && (b.flags |= 4), null;
    }
    throw Error(y(156, b.tag));
  }
  function Li(a2) {
    switch (a2.tag) {
      case 1:
        Ff(a2.type) && Gf();
        var b = a2.flags;
        return b & 4096 ? (a2.flags = b & -4097 | 64, a2) : null;
      case 3:
        fh();
        H(N);
        H(M);
        uh();
        b = a2.flags;
        if ((b & 64) !== 0)
          throw Error(y(285));
        a2.flags = b & -4097 | 64;
        return a2;
      case 5:
        return hh(a2), null;
      case 13:
        return H(P), b = a2.flags, b & 4096 ? (a2.flags = b & -4097 | 64, a2) : null;
      case 19:
        return H(P), null;
      case 4:
        return fh(), null;
      case 10:
        return rg(a2), null;
      case 23:
      case 24:
        return Ki(), null;
      default:
        return null;
    }
  }
  function Mi(a2, b) {
    try {
      var c = "", d = b;
      do
        c += Qa(d), d = d.return;
      while (d);
      var e = c;
    } catch (f) {
      e = "\nError generating stack: " + f.message + "\n" + f.stack;
    }
    return { value: a2, source: b, stack: e };
  }
  function Ni(a2, b) {
    try {
      console.error(b.value);
    } catch (c) {
      setTimeout(function() {
        throw c;
      });
    }
  }
  var Oi = typeof WeakMap === "function" ? WeakMap : Map;
  function Pi(a2, b, c) {
    c = zg(-1, c);
    c.tag = 3;
    c.payload = { element: null };
    var d = b.value;
    c.callback = function() {
      Qi || (Qi = true, Ri = d);
      Ni(a2, b);
    };
    return c;
  }
  function Si(a2, b, c) {
    c = zg(-1, c);
    c.tag = 3;
    var d = a2.type.getDerivedStateFromError;
    if (typeof d === "function") {
      var e = b.value;
      c.payload = function() {
        Ni(a2, b);
        return d(e);
      };
    }
    var f = a2.stateNode;
    f !== null && typeof f.componentDidCatch === "function" && (c.callback = function() {
      typeof d !== "function" && (Ti === null ? Ti = new Set([this]) : Ti.add(this), Ni(a2, b));
      var c2 = b.stack;
      this.componentDidCatch(b.value, { componentStack: c2 !== null ? c2 : "" });
    });
    return c;
  }
  var Ui = typeof WeakSet === "function" ? WeakSet : Set;
  function Vi(a2) {
    var b = a2.ref;
    if (b !== null)
      if (typeof b === "function")
        try {
          b(null);
        } catch (c) {
          Wi(a2, c);
        }
      else
        b.current = null;
  }
  function Xi(a2, b) {
    switch (b.tag) {
      case 0:
      case 11:
      case 15:
      case 22:
        return;
      case 1:
        if (b.flags & 256 && a2 !== null) {
          var c = a2.memoizedProps, d = a2.memoizedState;
          a2 = b.stateNode;
          b = a2.getSnapshotBeforeUpdate(b.elementType === b.type ? c : lg(b.type, c), d);
          a2.__reactInternalSnapshotBeforeUpdate = b;
        }
        return;
      case 3:
        b.flags & 256 && qf(b.stateNode.containerInfo);
        return;
      case 5:
      case 6:
      case 4:
      case 17:
        return;
    }
    throw Error(y(163));
  }
  function Yi(a2, b, c) {
    switch (c.tag) {
      case 0:
      case 11:
      case 15:
      case 22:
        b = c.updateQueue;
        b = b !== null ? b.lastEffect : null;
        if (b !== null) {
          a2 = b = b.next;
          do {
            if ((a2.tag & 3) === 3) {
              var d = a2.create;
              a2.destroy = d();
            }
            a2 = a2.next;
          } while (a2 !== b);
        }
        b = c.updateQueue;
        b = b !== null ? b.lastEffect : null;
        if (b !== null) {
          a2 = b = b.next;
          do {
            var e = a2;
            d = e.next;
            e = e.tag;
            (e & 4) !== 0 && (e & 1) !== 0 && (Zi(c, a2), $i(c, a2));
            a2 = d;
          } while (a2 !== b);
        }
        return;
      case 1:
        a2 = c.stateNode;
        c.flags & 4 && (b === null ? a2.componentDidMount() : (d = c.elementType === c.type ? b.memoizedProps : lg(c.type, b.memoizedProps), a2.componentDidUpdate(d, b.memoizedState, a2.__reactInternalSnapshotBeforeUpdate)));
        b = c.updateQueue;
        b !== null && Eg(c, b, a2);
        return;
      case 3:
        b = c.updateQueue;
        if (b !== null) {
          a2 = null;
          if (c.child !== null)
            switch (c.child.tag) {
              case 5:
                a2 = c.child.stateNode;
                break;
              case 1:
                a2 = c.child.stateNode;
            }
          Eg(c, b, a2);
        }
        return;
      case 5:
        a2 = c.stateNode;
        b === null && c.flags & 4 && mf(c.type, c.memoizedProps) && a2.focus();
        return;
      case 6:
        return;
      case 4:
        return;
      case 12:
        return;
      case 13:
        c.memoizedState === null && (c = c.alternate, c !== null && (c = c.memoizedState, c !== null && (c = c.dehydrated, c !== null && Cc(c))));
        return;
      case 19:
      case 17:
      case 20:
      case 21:
      case 23:
      case 24:
        return;
    }
    throw Error(y(163));
  }
  function aj(a2, b) {
    for (var c = a2; ; ) {
      if (c.tag === 5) {
        var d = c.stateNode;
        if (b)
          d = d.style, typeof d.setProperty === "function" ? d.setProperty("display", "none", "important") : d.display = "none";
        else {
          d = c.stateNode;
          var e = c.memoizedProps.style;
          e = e !== void 0 && e !== null && e.hasOwnProperty("display") ? e.display : null;
          d.style.display = sb("display", e);
        }
      } else if (c.tag === 6)
        c.stateNode.nodeValue = b ? "" : c.memoizedProps;
      else if ((c.tag !== 23 && c.tag !== 24 || c.memoizedState === null || c === a2) && c.child !== null) {
        c.child.return = c;
        c = c.child;
        continue;
      }
      if (c === a2)
        break;
      for (; c.sibling === null; ) {
        if (c.return === null || c.return === a2)
          return;
        c = c.return;
      }
      c.sibling.return = c.return;
      c = c.sibling;
    }
  }
  function bj(a2, b) {
    if (Mf && typeof Mf.onCommitFiberUnmount === "function")
      try {
        Mf.onCommitFiberUnmount(Lf, b);
      } catch (f) {
      }
    switch (b.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
      case 22:
        a2 = b.updateQueue;
        if (a2 !== null && (a2 = a2.lastEffect, a2 !== null)) {
          var c = a2 = a2.next;
          do {
            var d = c, e = d.destroy;
            d = d.tag;
            if (e !== void 0)
              if ((d & 4) !== 0)
                Zi(b, c);
              else {
                d = b;
                try {
                  e();
                } catch (f) {
                  Wi(d, f);
                }
              }
            c = c.next;
          } while (c !== a2);
        }
        break;
      case 1:
        Vi(b);
        a2 = b.stateNode;
        if (typeof a2.componentWillUnmount === "function")
          try {
            a2.props = b.memoizedProps, a2.state = b.memoizedState, a2.componentWillUnmount();
          } catch (f) {
            Wi(b, f);
          }
        break;
      case 5:
        Vi(b);
        break;
      case 4:
        cj(a2, b);
    }
  }
  function dj(a2) {
    a2.alternate = null;
    a2.child = null;
    a2.dependencies = null;
    a2.firstEffect = null;
    a2.lastEffect = null;
    a2.memoizedProps = null;
    a2.memoizedState = null;
    a2.pendingProps = null;
    a2.return = null;
    a2.updateQueue = null;
  }
  function ej(a2) {
    return a2.tag === 5 || a2.tag === 3 || a2.tag === 4;
  }
  function fj(a2) {
    a: {
      for (var b = a2.return; b !== null; ) {
        if (ej(b))
          break a;
        b = b.return;
      }
      throw Error(y(160));
    }
    var c = b;
    b = c.stateNode;
    switch (c.tag) {
      case 5:
        var d = false;
        break;
      case 3:
        b = b.containerInfo;
        d = true;
        break;
      case 4:
        b = b.containerInfo;
        d = true;
        break;
      default:
        throw Error(y(161));
    }
    c.flags & 16 && (pb(b, ""), c.flags &= -17);
    a:
      b:
        for (c = a2; ; ) {
          for (; c.sibling === null; ) {
            if (c.return === null || ej(c.return)) {
              c = null;
              break a;
            }
            c = c.return;
          }
          c.sibling.return = c.return;
          for (c = c.sibling; c.tag !== 5 && c.tag !== 6 && c.tag !== 18; ) {
            if (c.flags & 2)
              continue b;
            if (c.child === null || c.tag === 4)
              continue b;
            else
              c.child.return = c, c = c.child;
          }
          if (!(c.flags & 2)) {
            c = c.stateNode;
            break a;
          }
        }
    d ? gj(a2, c, b) : hj(a2, c, b);
  }
  function gj(a2, b, c) {
    var d = a2.tag, e = d === 5 || d === 6;
    if (e)
      a2 = e ? a2.stateNode : a2.stateNode.instance, b ? c.nodeType === 8 ? c.parentNode.insertBefore(a2, b) : c.insertBefore(a2, b) : (c.nodeType === 8 ? (b = c.parentNode, b.insertBefore(a2, c)) : (b = c, b.appendChild(a2)), c = c._reactRootContainer, c !== null && c !== void 0 || b.onclick !== null || (b.onclick = jf));
    else if (d !== 4 && (a2 = a2.child, a2 !== null))
      for (gj(a2, b, c), a2 = a2.sibling; a2 !== null; )
        gj(a2, b, c), a2 = a2.sibling;
  }
  function hj(a2, b, c) {
    var d = a2.tag, e = d === 5 || d === 6;
    if (e)
      a2 = e ? a2.stateNode : a2.stateNode.instance, b ? c.insertBefore(a2, b) : c.appendChild(a2);
    else if (d !== 4 && (a2 = a2.child, a2 !== null))
      for (hj(a2, b, c), a2 = a2.sibling; a2 !== null; )
        hj(a2, b, c), a2 = a2.sibling;
  }
  function cj(a2, b) {
    for (var c = b, d = false, e, f; ; ) {
      if (!d) {
        d = c.return;
        a:
          for (; ; ) {
            if (d === null)
              throw Error(y(160));
            e = d.stateNode;
            switch (d.tag) {
              case 5:
                f = false;
                break a;
              case 3:
                e = e.containerInfo;
                f = true;
                break a;
              case 4:
                e = e.containerInfo;
                f = true;
                break a;
            }
            d = d.return;
          }
        d = true;
      }
      if (c.tag === 5 || c.tag === 6) {
        a:
          for (var g = a2, h = c, k = h; ; )
            if (bj(g, k), k.child !== null && k.tag !== 4)
              k.child.return = k, k = k.child;
            else {
              if (k === h)
                break a;
              for (; k.sibling === null; ) {
                if (k.return === null || k.return === h)
                  break a;
                k = k.return;
              }
              k.sibling.return = k.return;
              k = k.sibling;
            }
        f ? (g = e, h = c.stateNode, g.nodeType === 8 ? g.parentNode.removeChild(h) : g.removeChild(h)) : e.removeChild(c.stateNode);
      } else if (c.tag === 4) {
        if (c.child !== null) {
          e = c.stateNode.containerInfo;
          f = true;
          c.child.return = c;
          c = c.child;
          continue;
        }
      } else if (bj(a2, c), c.child !== null) {
        c.child.return = c;
        c = c.child;
        continue;
      }
      if (c === b)
        break;
      for (; c.sibling === null; ) {
        if (c.return === null || c.return === b)
          return;
        c = c.return;
        c.tag === 4 && (d = false);
      }
      c.sibling.return = c.return;
      c = c.sibling;
    }
  }
  function ij(a2, b) {
    switch (b.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
      case 22:
        var c = b.updateQueue;
        c = c !== null ? c.lastEffect : null;
        if (c !== null) {
          var d = c = c.next;
          do
            (d.tag & 3) === 3 && (a2 = d.destroy, d.destroy = void 0, a2 !== void 0 && a2()), d = d.next;
          while (d !== c);
        }
        return;
      case 1:
        return;
      case 5:
        c = b.stateNode;
        if (c != null) {
          d = b.memoizedProps;
          var e = a2 !== null ? a2.memoizedProps : d;
          a2 = b.type;
          var f = b.updateQueue;
          b.updateQueue = null;
          if (f !== null) {
            c[xf] = d;
            a2 === "input" && d.type === "radio" && d.name != null && $a(c, d);
            wb(a2, e);
            b = wb(a2, d);
            for (e = 0; e < f.length; e += 2) {
              var g = f[e], h = f[e + 1];
              g === "style" ? tb(c, h) : g === "dangerouslySetInnerHTML" ? ob(c, h) : g === "children" ? pb(c, h) : qa(c, g, h, b);
            }
            switch (a2) {
              case "input":
                ab(c, d);
                break;
              case "textarea":
                ib(c, d);
                break;
              case "select":
                a2 = c._wrapperState.wasMultiple, c._wrapperState.wasMultiple = !!d.multiple, f = d.value, f != null ? fb(c, !!d.multiple, f, false) : a2 !== !!d.multiple && (d.defaultValue != null ? fb(c, !!d.multiple, d.defaultValue, true) : fb(c, !!d.multiple, d.multiple ? [] : "", false));
            }
          }
        }
        return;
      case 6:
        if (b.stateNode === null)
          throw Error(y(162));
        b.stateNode.nodeValue = b.memoizedProps;
        return;
      case 3:
        c = b.stateNode;
        c.hydrate && (c.hydrate = false, Cc(c.containerInfo));
        return;
      case 12:
        return;
      case 13:
        b.memoizedState !== null && (jj = O(), aj(b.child, true));
        kj(b);
        return;
      case 19:
        kj(b);
        return;
      case 17:
        return;
      case 23:
      case 24:
        aj(b, b.memoizedState !== null);
        return;
    }
    throw Error(y(163));
  }
  function kj(a2) {
    var b = a2.updateQueue;
    if (b !== null) {
      a2.updateQueue = null;
      var c = a2.stateNode;
      c === null && (c = a2.stateNode = new Ui());
      b.forEach(function(b2) {
        var d = lj.bind(null, a2, b2);
        c.has(b2) || (c.add(b2), b2.then(d, d));
      });
    }
  }
  function mj(a2, b) {
    return a2 !== null && (a2 = a2.memoizedState, a2 === null || a2.dehydrated !== null) ? (b = b.memoizedState, b !== null && b.dehydrated === null) : false;
  }
  var nj = Math.ceil;
  var oj = ra.ReactCurrentDispatcher;
  var pj = ra.ReactCurrentOwner;
  var X = 0;
  var U = null;
  var Y = null;
  var W = 0;
  var qj = 0;
  var rj = Bf(0);
  var V = 0;
  var sj = null;
  var tj = 0;
  var Dg = 0;
  var Hi = 0;
  var uj = 0;
  var vj = null;
  var jj = 0;
  var Ji = Infinity;
  function wj() {
    Ji = O() + 500;
  }
  var Z = null;
  var Qi = false;
  var Ri = null;
  var Ti = null;
  var xj = false;
  var yj = null;
  var zj = 90;
  var Aj = [];
  var Bj = [];
  var Cj = null;
  var Dj = 0;
  var Ej = null;
  var Fj = -1;
  var Gj = 0;
  var Hj = 0;
  var Ij = null;
  var Jj = false;
  function Hg() {
    return (X & 48) !== 0 ? O() : Fj !== -1 ? Fj : Fj = O();
  }
  function Ig(a2) {
    a2 = a2.mode;
    if ((a2 & 2) === 0)
      return 1;
    if ((a2 & 4) === 0)
      return eg() === 99 ? 1 : 2;
    Gj === 0 && (Gj = tj);
    if (kg.transition !== 0) {
      Hj !== 0 && (Hj = vj !== null ? vj.pendingLanes : 0);
      a2 = Gj;
      var b = 4186112 & ~Hj;
      b &= -b;
      b === 0 && (a2 = 4186112 & ~a2, b = a2 & -a2, b === 0 && (b = 8192));
      return b;
    }
    a2 = eg();
    (X & 4) !== 0 && a2 === 98 ? a2 = Xc(12, Gj) : (a2 = Sc(a2), a2 = Xc(a2, Gj));
    return a2;
  }
  function Jg(a2, b, c) {
    if (50 < Dj)
      throw Dj = 0, Ej = null, Error(y(185));
    a2 = Kj(a2, b);
    if (a2 === null)
      return null;
    $c(a2, b, c);
    a2 === U && (Hi |= b, V === 4 && Ii(a2, W));
    var d = eg();
    b === 1 ? (X & 8) !== 0 && (X & 48) === 0 ? Lj(a2) : (Mj(a2, c), X === 0 && (wj(), ig())) : ((X & 4) === 0 || d !== 98 && d !== 99 || (Cj === null ? Cj = new Set([a2]) : Cj.add(a2)), Mj(a2, c));
    vj = a2;
  }
  function Kj(a2, b) {
    a2.lanes |= b;
    var c = a2.alternate;
    c !== null && (c.lanes |= b);
    c = a2;
    for (a2 = a2.return; a2 !== null; )
      a2.childLanes |= b, c = a2.alternate, c !== null && (c.childLanes |= b), c = a2, a2 = a2.return;
    return c.tag === 3 ? c.stateNode : null;
  }
  function Mj(a2, b) {
    for (var c = a2.callbackNode, d = a2.suspendedLanes, e = a2.pingedLanes, f = a2.expirationTimes, g = a2.pendingLanes; 0 < g; ) {
      var h = 31 - Vc(g), k = 1 << h, l = f[h];
      if (l === -1) {
        if ((k & d) === 0 || (k & e) !== 0) {
          l = b;
          Rc(k);
          var n = F;
          f[h] = 10 <= n ? l + 250 : 6 <= n ? l + 5e3 : -1;
        }
      } else
        l <= b && (a2.expiredLanes |= k);
      g &= ~k;
    }
    d = Uc(a2, a2 === U ? W : 0);
    b = F;
    if (d === 0)
      c !== null && (c !== Zf && Pf(c), a2.callbackNode = null, a2.callbackPriority = 0);
    else {
      if (c !== null) {
        if (a2.callbackPriority === b)
          return;
        c !== Zf && Pf(c);
      }
      b === 15 ? (c = Lj.bind(null, a2), ag === null ? (ag = [c], bg = Of(Uf, jg)) : ag.push(c), c = Zf) : b === 14 ? c = hg(99, Lj.bind(null, a2)) : (c = Tc(b), c = hg(c, Nj.bind(null, a2)));
      a2.callbackPriority = b;
      a2.callbackNode = c;
    }
  }
  function Nj(a2) {
    Fj = -1;
    Hj = Gj = 0;
    if ((X & 48) !== 0)
      throw Error(y(327));
    var b = a2.callbackNode;
    if (Oj() && a2.callbackNode !== b)
      return null;
    var c = Uc(a2, a2 === U ? W : 0);
    if (c === 0)
      return null;
    var d = c;
    var e = X;
    X |= 16;
    var f = Pj();
    if (U !== a2 || W !== d)
      wj(), Qj(a2, d);
    do
      try {
        Rj();
        break;
      } catch (h) {
        Sj(a2, h);
      }
    while (1);
    qg();
    oj.current = f;
    X = e;
    Y !== null ? d = 0 : (U = null, W = 0, d = V);
    if ((tj & Hi) !== 0)
      Qj(a2, 0);
    else if (d !== 0) {
      d === 2 && (X |= 64, a2.hydrate && (a2.hydrate = false, qf(a2.containerInfo)), c = Wc(a2), c !== 0 && (d = Tj(a2, c)));
      if (d === 1)
        throw b = sj, Qj(a2, 0), Ii(a2, c), Mj(a2, O()), b;
      a2.finishedWork = a2.current.alternate;
      a2.finishedLanes = c;
      switch (d) {
        case 0:
        case 1:
          throw Error(y(345));
        case 2:
          Uj(a2);
          break;
        case 3:
          Ii(a2, c);
          if ((c & 62914560) === c && (d = jj + 500 - O(), 10 < d)) {
            if (Uc(a2, 0) !== 0)
              break;
            e = a2.suspendedLanes;
            if ((e & c) !== c) {
              Hg();
              a2.pingedLanes |= a2.suspendedLanes & e;
              break;
            }
            a2.timeoutHandle = of(Uj.bind(null, a2), d);
            break;
          }
          Uj(a2);
          break;
        case 4:
          Ii(a2, c);
          if ((c & 4186112) === c)
            break;
          d = a2.eventTimes;
          for (e = -1; 0 < c; ) {
            var g = 31 - Vc(c);
            f = 1 << g;
            g = d[g];
            g > e && (e = g);
            c &= ~f;
          }
          c = e;
          c = O() - c;
          c = (120 > c ? 120 : 480 > c ? 480 : 1080 > c ? 1080 : 1920 > c ? 1920 : 3e3 > c ? 3e3 : 4320 > c ? 4320 : 1960 * nj(c / 1960)) - c;
          if (10 < c) {
            a2.timeoutHandle = of(Uj.bind(null, a2), c);
            break;
          }
          Uj(a2);
          break;
        case 5:
          Uj(a2);
          break;
        default:
          throw Error(y(329));
      }
    }
    Mj(a2, O());
    return a2.callbackNode === b ? Nj.bind(null, a2) : null;
  }
  function Ii(a2, b) {
    b &= ~uj;
    b &= ~Hi;
    a2.suspendedLanes |= b;
    a2.pingedLanes &= ~b;
    for (a2 = a2.expirationTimes; 0 < b; ) {
      var c = 31 - Vc(b), d = 1 << c;
      a2[c] = -1;
      b &= ~d;
    }
  }
  function Lj(a2) {
    if ((X & 48) !== 0)
      throw Error(y(327));
    Oj();
    if (a2 === U && (a2.expiredLanes & W) !== 0) {
      var b = W;
      var c = Tj(a2, b);
      (tj & Hi) !== 0 && (b = Uc(a2, b), c = Tj(a2, b));
    } else
      b = Uc(a2, 0), c = Tj(a2, b);
    a2.tag !== 0 && c === 2 && (X |= 64, a2.hydrate && (a2.hydrate = false, qf(a2.containerInfo)), b = Wc(a2), b !== 0 && (c = Tj(a2, b)));
    if (c === 1)
      throw c = sj, Qj(a2, 0), Ii(a2, b), Mj(a2, O()), c;
    a2.finishedWork = a2.current.alternate;
    a2.finishedLanes = b;
    Uj(a2);
    Mj(a2, O());
    return null;
  }
  function Vj() {
    if (Cj !== null) {
      var a2 = Cj;
      Cj = null;
      a2.forEach(function(a22) {
        a22.expiredLanes |= 24 & a22.pendingLanes;
        Mj(a22, O());
      });
    }
    ig();
  }
  function Wj(a2, b) {
    var c = X;
    X |= 1;
    try {
      return a2(b);
    } finally {
      X = c, X === 0 && (wj(), ig());
    }
  }
  function Xj(a2, b) {
    var c = X;
    X &= -2;
    X |= 8;
    try {
      return a2(b);
    } finally {
      X = c, X === 0 && (wj(), ig());
    }
  }
  function ni(a2, b) {
    I(rj, qj);
    qj |= b;
    tj |= b;
  }
  function Ki() {
    qj = rj.current;
    H(rj);
  }
  function Qj(a2, b) {
    a2.finishedWork = null;
    a2.finishedLanes = 0;
    var c = a2.timeoutHandle;
    c !== -1 && (a2.timeoutHandle = -1, pf(c));
    if (Y !== null)
      for (c = Y.return; c !== null; ) {
        var d = c;
        switch (d.tag) {
          case 1:
            d = d.type.childContextTypes;
            d !== null && d !== void 0 && Gf();
            break;
          case 3:
            fh();
            H(N);
            H(M);
            uh();
            break;
          case 5:
            hh(d);
            break;
          case 4:
            fh();
            break;
          case 13:
            H(P);
            break;
          case 19:
            H(P);
            break;
          case 10:
            rg(d);
            break;
          case 23:
          case 24:
            Ki();
        }
        c = c.return;
      }
    U = a2;
    Y = Tg(a2.current, null);
    W = qj = tj = b;
    V = 0;
    sj = null;
    uj = Hi = Dg = 0;
  }
  function Sj(a2, b) {
    do {
      var c = Y;
      try {
        qg();
        vh.current = Gh;
        if (yh) {
          for (var d = R.memoizedState; d !== null; ) {
            var e = d.queue;
            e !== null && (e.pending = null);
            d = d.next;
          }
          yh = false;
        }
        xh = 0;
        T = S = R = null;
        zh = false;
        pj.current = null;
        if (c === null || c.return === null) {
          V = 1;
          sj = b;
          Y = null;
          break;
        }
        a: {
          var f = a2, g = c.return, h = c, k = b;
          b = W;
          h.flags |= 2048;
          h.firstEffect = h.lastEffect = null;
          if (k !== null && typeof k === "object" && typeof k.then === "function") {
            var l = k;
            if ((h.mode & 2) === 0) {
              var n = h.alternate;
              n ? (h.updateQueue = n.updateQueue, h.memoizedState = n.memoizedState, h.lanes = n.lanes) : (h.updateQueue = null, h.memoizedState = null);
            }
            var A = (P.current & 1) !== 0, p = g;
            do {
              var C2;
              if (C2 = p.tag === 13) {
                var x = p.memoizedState;
                if (x !== null)
                  C2 = x.dehydrated !== null ? true : false;
                else {
                  var w = p.memoizedProps;
                  C2 = w.fallback === void 0 ? false : w.unstable_avoidThisFallback !== true ? true : A ? false : true;
                }
              }
              if (C2) {
                var z = p.updateQueue;
                if (z === null) {
                  var u = new Set();
                  u.add(l);
                  p.updateQueue = u;
                } else
                  z.add(l);
                if ((p.mode & 2) === 0) {
                  p.flags |= 64;
                  h.flags |= 16384;
                  h.flags &= -2981;
                  if (h.tag === 1)
                    if (h.alternate === null)
                      h.tag = 17;
                    else {
                      var t2 = zg(-1, 1);
                      t2.tag = 2;
                      Ag(h, t2);
                    }
                  h.lanes |= 1;
                  break a;
                }
                k = void 0;
                h = b;
                var q = f.pingCache;
                q === null ? (q = f.pingCache = new Oi(), k = new Set(), q.set(l, k)) : (k = q.get(l), k === void 0 && (k = new Set(), q.set(l, k)));
                if (!k.has(h)) {
                  k.add(h);
                  var v = Yj.bind(null, f, l, h);
                  l.then(v, v);
                }
                p.flags |= 4096;
                p.lanes = b;
                break a;
              }
              p = p.return;
            } while (p !== null);
            k = Error((Ra(h.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.");
          }
          V !== 5 && (V = 2);
          k = Mi(k, h);
          p = g;
          do {
            switch (p.tag) {
              case 3:
                f = k;
                p.flags |= 4096;
                b &= -b;
                p.lanes |= b;
                var J2 = Pi(p, f, b);
                Bg(p, J2);
                break a;
              case 1:
                f = k;
                var K = p.type, Q = p.stateNode;
                if ((p.flags & 64) === 0 && (typeof K.getDerivedStateFromError === "function" || Q !== null && typeof Q.componentDidCatch === "function" && (Ti === null || !Ti.has(Q)))) {
                  p.flags |= 4096;
                  b &= -b;
                  p.lanes |= b;
                  var L = Si(p, f, b);
                  Bg(p, L);
                  break a;
                }
            }
            p = p.return;
          } while (p !== null);
        }
        Zj(c);
      } catch (va) {
        b = va;
        Y === c && c !== null && (Y = c = c.return);
        continue;
      }
      break;
    } while (1);
  }
  function Pj() {
    var a2 = oj.current;
    oj.current = Gh;
    return a2 === null ? Gh : a2;
  }
  function Tj(a2, b) {
    var c = X;
    X |= 16;
    var d = Pj();
    U === a2 && W === b || Qj(a2, b);
    do
      try {
        ak();
        break;
      } catch (e) {
        Sj(a2, e);
      }
    while (1);
    qg();
    X = c;
    oj.current = d;
    if (Y !== null)
      throw Error(y(261));
    U = null;
    W = 0;
    return V;
  }
  function ak() {
    for (; Y !== null; )
      bk(Y);
  }
  function Rj() {
    for (; Y !== null && !Qf(); )
      bk(Y);
  }
  function bk(a2) {
    var b = ck(a2.alternate, a2, qj);
    a2.memoizedProps = a2.pendingProps;
    b === null ? Zj(a2) : Y = b;
    pj.current = null;
  }
  function Zj(a2) {
    var b = a2;
    do {
      var c = b.alternate;
      a2 = b.return;
      if ((b.flags & 2048) === 0) {
        c = Gi(c, b, qj);
        if (c !== null) {
          Y = c;
          return;
        }
        c = b;
        if (c.tag !== 24 && c.tag !== 23 || c.memoizedState === null || (qj & 1073741824) !== 0 || (c.mode & 4) === 0) {
          for (var d = 0, e = c.child; e !== null; )
            d |= e.lanes | e.childLanes, e = e.sibling;
          c.childLanes = d;
        }
        a2 !== null && (a2.flags & 2048) === 0 && (a2.firstEffect === null && (a2.firstEffect = b.firstEffect), b.lastEffect !== null && (a2.lastEffect !== null && (a2.lastEffect.nextEffect = b.firstEffect), a2.lastEffect = b.lastEffect), 1 < b.flags && (a2.lastEffect !== null ? a2.lastEffect.nextEffect = b : a2.firstEffect = b, a2.lastEffect = b));
      } else {
        c = Li(b);
        if (c !== null) {
          c.flags &= 2047;
          Y = c;
          return;
        }
        a2 !== null && (a2.firstEffect = a2.lastEffect = null, a2.flags |= 2048);
      }
      b = b.sibling;
      if (b !== null) {
        Y = b;
        return;
      }
      Y = b = a2;
    } while (b !== null);
    V === 0 && (V = 5);
  }
  function Uj(a2) {
    var b = eg();
    gg(99, dk.bind(null, a2, b));
    return null;
  }
  function dk(a2, b) {
    do
      Oj();
    while (yj !== null);
    if ((X & 48) !== 0)
      throw Error(y(327));
    var c = a2.finishedWork;
    if (c === null)
      return null;
    a2.finishedWork = null;
    a2.finishedLanes = 0;
    if (c === a2.current)
      throw Error(y(177));
    a2.callbackNode = null;
    var d = c.lanes | c.childLanes, e = d, f = a2.pendingLanes & ~e;
    a2.pendingLanes = e;
    a2.suspendedLanes = 0;
    a2.pingedLanes = 0;
    a2.expiredLanes &= e;
    a2.mutableReadLanes &= e;
    a2.entangledLanes &= e;
    e = a2.entanglements;
    for (var g = a2.eventTimes, h = a2.expirationTimes; 0 < f; ) {
      var k = 31 - Vc(f), l = 1 << k;
      e[k] = 0;
      g[k] = -1;
      h[k] = -1;
      f &= ~l;
    }
    Cj !== null && (d & 24) === 0 && Cj.has(a2) && Cj.delete(a2);
    a2 === U && (Y = U = null, W = 0);
    1 < c.flags ? c.lastEffect !== null ? (c.lastEffect.nextEffect = c, d = c.firstEffect) : d = c : d = c.firstEffect;
    if (d !== null) {
      e = X;
      X |= 32;
      pj.current = null;
      kf = fd;
      g = Ne();
      if (Oe(g)) {
        if ("selectionStart" in g)
          h = { start: g.selectionStart, end: g.selectionEnd };
        else
          a:
            if (h = (h = g.ownerDocument) && h.defaultView || window, (l = h.getSelection && h.getSelection()) && l.rangeCount !== 0) {
              h = l.anchorNode;
              f = l.anchorOffset;
              k = l.focusNode;
              l = l.focusOffset;
              try {
                h.nodeType, k.nodeType;
              } catch (va) {
                h = null;
                break a;
              }
              var n = 0, A = -1, p = -1, C2 = 0, x = 0, w = g, z = null;
              b:
                for (; ; ) {
                  for (var u; ; ) {
                    w !== h || f !== 0 && w.nodeType !== 3 || (A = n + f);
                    w !== k || l !== 0 && w.nodeType !== 3 || (p = n + l);
                    w.nodeType === 3 && (n += w.nodeValue.length);
                    if ((u = w.firstChild) === null)
                      break;
                    z = w;
                    w = u;
                  }
                  for (; ; ) {
                    if (w === g)
                      break b;
                    z === h && ++C2 === f && (A = n);
                    z === k && ++x === l && (p = n);
                    if ((u = w.nextSibling) !== null)
                      break;
                    w = z;
                    z = w.parentNode;
                  }
                  w = u;
                }
              h = A === -1 || p === -1 ? null : { start: A, end: p };
            } else
              h = null;
        h = h || { start: 0, end: 0 };
      } else
        h = null;
      lf = { focusedElem: g, selectionRange: h };
      fd = false;
      Ij = null;
      Jj = false;
      Z = d;
      do
        try {
          ek();
        } catch (va) {
          if (Z === null)
            throw Error(y(330));
          Wi(Z, va);
          Z = Z.nextEffect;
        }
      while (Z !== null);
      Ij = null;
      Z = d;
      do
        try {
          for (g = a2; Z !== null; ) {
            var t2 = Z.flags;
            t2 & 16 && pb(Z.stateNode, "");
            if (t2 & 128) {
              var q = Z.alternate;
              if (q !== null) {
                var v = q.ref;
                v !== null && (typeof v === "function" ? v(null) : v.current = null);
              }
            }
            switch (t2 & 1038) {
              case 2:
                fj(Z);
                Z.flags &= -3;
                break;
              case 6:
                fj(Z);
                Z.flags &= -3;
                ij(Z.alternate, Z);
                break;
              case 1024:
                Z.flags &= -1025;
                break;
              case 1028:
                Z.flags &= -1025;
                ij(Z.alternate, Z);
                break;
              case 4:
                ij(Z.alternate, Z);
                break;
              case 8:
                h = Z;
                cj(g, h);
                var J2 = h.alternate;
                dj(h);
                J2 !== null && dj(J2);
            }
            Z = Z.nextEffect;
          }
        } catch (va) {
          if (Z === null)
            throw Error(y(330));
          Wi(Z, va);
          Z = Z.nextEffect;
        }
      while (Z !== null);
      v = lf;
      q = Ne();
      t2 = v.focusedElem;
      g = v.selectionRange;
      if (q !== t2 && t2 && t2.ownerDocument && Me(t2.ownerDocument.documentElement, t2)) {
        g !== null && Oe(t2) && (q = g.start, v = g.end, v === void 0 && (v = q), "selectionStart" in t2 ? (t2.selectionStart = q, t2.selectionEnd = Math.min(v, t2.value.length)) : (v = (q = t2.ownerDocument || document) && q.defaultView || window, v.getSelection && (v = v.getSelection(), h = t2.textContent.length, J2 = Math.min(g.start, h), g = g.end === void 0 ? J2 : Math.min(g.end, h), !v.extend && J2 > g && (h = g, g = J2, J2 = h), h = Le(t2, J2), f = Le(t2, g), h && f && (v.rangeCount !== 1 || v.anchorNode !== h.node || v.anchorOffset !== h.offset || v.focusNode !== f.node || v.focusOffset !== f.offset) && (q = q.createRange(), q.setStart(h.node, h.offset), v.removeAllRanges(), J2 > g ? (v.addRange(q), v.extend(f.node, f.offset)) : (q.setEnd(f.node, f.offset), v.addRange(q))))));
        q = [];
        for (v = t2; v = v.parentNode; )
          v.nodeType === 1 && q.push({ element: v, left: v.scrollLeft, top: v.scrollTop });
        typeof t2.focus === "function" && t2.focus();
        for (t2 = 0; t2 < q.length; t2++)
          v = q[t2], v.element.scrollLeft = v.left, v.element.scrollTop = v.top;
      }
      fd = !!kf;
      lf = kf = null;
      a2.current = c;
      Z = d;
      do
        try {
          for (t2 = a2; Z !== null; ) {
            var K = Z.flags;
            K & 36 && Yi(t2, Z.alternate, Z);
            if (K & 128) {
              q = void 0;
              var Q = Z.ref;
              if (Q !== null) {
                var L = Z.stateNode;
                switch (Z.tag) {
                  case 5:
                    q = L;
                    break;
                  default:
                    q = L;
                }
                typeof Q === "function" ? Q(q) : Q.current = q;
              }
            }
            Z = Z.nextEffect;
          }
        } catch (va) {
          if (Z === null)
            throw Error(y(330));
          Wi(Z, va);
          Z = Z.nextEffect;
        }
      while (Z !== null);
      Z = null;
      $f();
      X = e;
    } else
      a2.current = c;
    if (xj)
      xj = false, yj = a2, zj = b;
    else
      for (Z = d; Z !== null; )
        b = Z.nextEffect, Z.nextEffect = null, Z.flags & 8 && (K = Z, K.sibling = null, K.stateNode = null), Z = b;
    d = a2.pendingLanes;
    d === 0 && (Ti = null);
    d === 1 ? a2 === Ej ? Dj++ : (Dj = 0, Ej = a2) : Dj = 0;
    c = c.stateNode;
    if (Mf && typeof Mf.onCommitFiberRoot === "function")
      try {
        Mf.onCommitFiberRoot(Lf, c, void 0, (c.current.flags & 64) === 64);
      } catch (va) {
      }
    Mj(a2, O());
    if (Qi)
      throw Qi = false, a2 = Ri, Ri = null, a2;
    if ((X & 8) !== 0)
      return null;
    ig();
    return null;
  }
  function ek() {
    for (; Z !== null; ) {
      var a2 = Z.alternate;
      Jj || Ij === null || ((Z.flags & 8) !== 0 ? dc(Z, Ij) && (Jj = true) : Z.tag === 13 && mj(a2, Z) && dc(Z, Ij) && (Jj = true));
      var b = Z.flags;
      (b & 256) !== 0 && Xi(a2, Z);
      (b & 512) === 0 || xj || (xj = true, hg(97, function() {
        Oj();
        return null;
      }));
      Z = Z.nextEffect;
    }
  }
  function Oj() {
    if (zj !== 90) {
      var a2 = 97 < zj ? 97 : zj;
      zj = 90;
      return gg(a2, fk);
    }
    return false;
  }
  function $i(a2, b) {
    Aj.push(b, a2);
    xj || (xj = true, hg(97, function() {
      Oj();
      return null;
    }));
  }
  function Zi(a2, b) {
    Bj.push(b, a2);
    xj || (xj = true, hg(97, function() {
      Oj();
      return null;
    }));
  }
  function fk() {
    if (yj === null)
      return false;
    var a2 = yj;
    yj = null;
    if ((X & 48) !== 0)
      throw Error(y(331));
    var b = X;
    X |= 32;
    var c = Bj;
    Bj = [];
    for (var d = 0; d < c.length; d += 2) {
      var e = c[d], f = c[d + 1], g = e.destroy;
      e.destroy = void 0;
      if (typeof g === "function")
        try {
          g();
        } catch (k) {
          if (f === null)
            throw Error(y(330));
          Wi(f, k);
        }
    }
    c = Aj;
    Aj = [];
    for (d = 0; d < c.length; d += 2) {
      e = c[d];
      f = c[d + 1];
      try {
        var h = e.create;
        e.destroy = h();
      } catch (k) {
        if (f === null)
          throw Error(y(330));
        Wi(f, k);
      }
    }
    for (h = a2.current.firstEffect; h !== null; )
      a2 = h.nextEffect, h.nextEffect = null, h.flags & 8 && (h.sibling = null, h.stateNode = null), h = a2;
    X = b;
    ig();
    return true;
  }
  function gk(a2, b, c) {
    b = Mi(c, b);
    b = Pi(a2, b, 1);
    Ag(a2, b);
    b = Hg();
    a2 = Kj(a2, 1);
    a2 !== null && ($c(a2, 1, b), Mj(a2, b));
  }
  function Wi(a2, b) {
    if (a2.tag === 3)
      gk(a2, a2, b);
    else
      for (var c = a2.return; c !== null; ) {
        if (c.tag === 3) {
          gk(c, a2, b);
          break;
        } else if (c.tag === 1) {
          var d = c.stateNode;
          if (typeof c.type.getDerivedStateFromError === "function" || typeof d.componentDidCatch === "function" && (Ti === null || !Ti.has(d))) {
            a2 = Mi(b, a2);
            var e = Si(c, a2, 1);
            Ag(c, e);
            e = Hg();
            c = Kj(c, 1);
            if (c !== null)
              $c(c, 1, e), Mj(c, e);
            else if (typeof d.componentDidCatch === "function" && (Ti === null || !Ti.has(d)))
              try {
                d.componentDidCatch(b, a2);
              } catch (f) {
              }
            break;
          }
        }
        c = c.return;
      }
  }
  function Yj(a2, b, c) {
    var d = a2.pingCache;
    d !== null && d.delete(b);
    b = Hg();
    a2.pingedLanes |= a2.suspendedLanes & c;
    U === a2 && (W & c) === c && (V === 4 || V === 3 && (W & 62914560) === W && 500 > O() - jj ? Qj(a2, 0) : uj |= c);
    Mj(a2, b);
  }
  function lj(a2, b) {
    var c = a2.stateNode;
    c !== null && c.delete(b);
    b = 0;
    b === 0 && (b = a2.mode, (b & 2) === 0 ? b = 1 : (b & 4) === 0 ? b = eg() === 99 ? 1 : 2 : (Gj === 0 && (Gj = tj), b = Yc(62914560 & ~Gj), b === 0 && (b = 4194304)));
    c = Hg();
    a2 = Kj(a2, b);
    a2 !== null && ($c(a2, b, c), Mj(a2, c));
  }
  var ck;
  ck = function(a2, b, c) {
    var d = b.lanes;
    if (a2 !== null)
      if (a2.memoizedProps !== b.pendingProps || N.current)
        ug = true;
      else if ((c & d) !== 0)
        ug = (a2.flags & 16384) !== 0 ? true : false;
      else {
        ug = false;
        switch (b.tag) {
          case 3:
            ri(b);
            sh();
            break;
          case 5:
            gh(b);
            break;
          case 1:
            Ff(b.type) && Jf(b);
            break;
          case 4:
            eh(b, b.stateNode.containerInfo);
            break;
          case 10:
            d = b.memoizedProps.value;
            var e = b.type._context;
            I(mg, e._currentValue);
            e._currentValue = d;
            break;
          case 13:
            if (b.memoizedState !== null) {
              if ((c & b.child.childLanes) !== 0)
                return ti(a2, b, c);
              I(P, P.current & 1);
              b = hi(a2, b, c);
              return b !== null ? b.sibling : null;
            }
            I(P, P.current & 1);
            break;
          case 19:
            d = (c & b.childLanes) !== 0;
            if ((a2.flags & 64) !== 0) {
              if (d)
                return Ai(a2, b, c);
              b.flags |= 64;
            }
            e = b.memoizedState;
            e !== null && (e.rendering = null, e.tail = null, e.lastEffect = null);
            I(P, P.current);
            if (d)
              break;
            else
              return null;
          case 23:
          case 24:
            return b.lanes = 0, mi(a2, b, c);
        }
        return hi(a2, b, c);
      }
    else
      ug = false;
    b.lanes = 0;
    switch (b.tag) {
      case 2:
        d = b.type;
        a2 !== null && (a2.alternate = null, b.alternate = null, b.flags |= 2);
        a2 = b.pendingProps;
        e = Ef(b, M.current);
        tg(b, c);
        e = Ch(null, b, d, a2, e, c);
        b.flags |= 1;
        if (typeof e === "object" && e !== null && typeof e.render === "function" && e.$$typeof === void 0) {
          b.tag = 1;
          b.memoizedState = null;
          b.updateQueue = null;
          if (Ff(d)) {
            var f = true;
            Jf(b);
          } else
            f = false;
          b.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null;
          xg(b);
          var g = d.getDerivedStateFromProps;
          typeof g === "function" && Gg(b, d, g, a2);
          e.updater = Kg;
          b.stateNode = e;
          e._reactInternals = b;
          Og(b, d, a2, c);
          b = qi(null, b, d, true, f, c);
        } else
          b.tag = 0, fi(null, b, e, c), b = b.child;
        return b;
      case 16:
        e = b.elementType;
        a: {
          a2 !== null && (a2.alternate = null, b.alternate = null, b.flags |= 2);
          a2 = b.pendingProps;
          f = e._init;
          e = f(e._payload);
          b.type = e;
          f = b.tag = hk(e);
          a2 = lg(e, a2);
          switch (f) {
            case 0:
              b = li(null, b, e, a2, c);
              break a;
            case 1:
              b = pi(null, b, e, a2, c);
              break a;
            case 11:
              b = gi(null, b, e, a2, c);
              break a;
            case 14:
              b = ii(null, b, e, lg(e.type, a2), d, c);
              break a;
          }
          throw Error(y(306, e, ""));
        }
        return b;
      case 0:
        return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : lg(d, e), li(a2, b, d, e, c);
      case 1:
        return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : lg(d, e), pi(a2, b, d, e, c);
      case 3:
        ri(b);
        d = b.updateQueue;
        if (a2 === null || d === null)
          throw Error(y(282));
        d = b.pendingProps;
        e = b.memoizedState;
        e = e !== null ? e.element : null;
        yg(a2, b);
        Cg(b, d, null, c);
        d = b.memoizedState.element;
        if (d === e)
          sh(), b = hi(a2, b, c);
        else {
          e = b.stateNode;
          if (f = e.hydrate)
            kh = rf(b.stateNode.containerInfo.firstChild), jh = b, f = lh = true;
          if (f) {
            a2 = e.mutableSourceEagerHydrationData;
            if (a2 != null)
              for (e = 0; e < a2.length; e += 2)
                f = a2[e], f._workInProgressVersionPrimary = a2[e + 1], th.push(f);
            c = Zg(b, null, d, c);
            for (b.child = c; c; )
              c.flags = c.flags & -3 | 1024, c = c.sibling;
          } else
            fi(a2, b, d, c), sh();
          b = b.child;
        }
        return b;
      case 5:
        return gh(b), a2 === null && ph(b), d = b.type, e = b.pendingProps, f = a2 !== null ? a2.memoizedProps : null, g = e.children, nf(d, e) ? g = null : f !== null && nf(d, f) && (b.flags |= 16), oi(a2, b), fi(a2, b, g, c), b.child;
      case 6:
        return a2 === null && ph(b), null;
      case 13:
        return ti(a2, b, c);
      case 4:
        return eh(b, b.stateNode.containerInfo), d = b.pendingProps, a2 === null ? b.child = Yg(b, null, d, c) : fi(a2, b, d, c), b.child;
      case 11:
        return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : lg(d, e), gi(a2, b, d, e, c);
      case 7:
        return fi(a2, b, b.pendingProps, c), b.child;
      case 8:
        return fi(a2, b, b.pendingProps.children, c), b.child;
      case 12:
        return fi(a2, b, b.pendingProps.children, c), b.child;
      case 10:
        a: {
          d = b.type._context;
          e = b.pendingProps;
          g = b.memoizedProps;
          f = e.value;
          var h = b.type._context;
          I(mg, h._currentValue);
          h._currentValue = f;
          if (g !== null)
            if (h = g.value, f = He(h, f) ? 0 : (typeof d._calculateChangedBits === "function" ? d._calculateChangedBits(h, f) : 1073741823) | 0, f === 0) {
              if (g.children === e.children && !N.current) {
                b = hi(a2, b, c);
                break a;
              }
            } else
              for (h = b.child, h !== null && (h.return = b); h !== null; ) {
                var k = h.dependencies;
                if (k !== null) {
                  g = h.child;
                  for (var l = k.firstContext; l !== null; ) {
                    if (l.context === d && (l.observedBits & f) !== 0) {
                      h.tag === 1 && (l = zg(-1, c & -c), l.tag = 2, Ag(h, l));
                      h.lanes |= c;
                      l = h.alternate;
                      l !== null && (l.lanes |= c);
                      sg(h.return, c);
                      k.lanes |= c;
                      break;
                    }
                    l = l.next;
                  }
                } else
                  g = h.tag === 10 ? h.type === b.type ? null : h.child : h.child;
                if (g !== null)
                  g.return = h;
                else
                  for (g = h; g !== null; ) {
                    if (g === b) {
                      g = null;
                      break;
                    }
                    h = g.sibling;
                    if (h !== null) {
                      h.return = g.return;
                      g = h;
                      break;
                    }
                    g = g.return;
                  }
                h = g;
              }
          fi(a2, b, e.children, c);
          b = b.child;
        }
        return b;
      case 9:
        return e = b.type, f = b.pendingProps, d = f.children, tg(b, c), e = vg(e, f.unstable_observedBits), d = d(e), b.flags |= 1, fi(a2, b, d, c), b.child;
      case 14:
        return e = b.type, f = lg(e, b.pendingProps), f = lg(e.type, f), ii(a2, b, e, f, d, c);
      case 15:
        return ki(a2, b, b.type, b.pendingProps, d, c);
      case 17:
        return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : lg(d, e), a2 !== null && (a2.alternate = null, b.alternate = null, b.flags |= 2), b.tag = 1, Ff(d) ? (a2 = true, Jf(b)) : a2 = false, tg(b, c), Mg(b, d, e), Og(b, d, e, c), qi(null, b, d, true, a2, c);
      case 19:
        return Ai(a2, b, c);
      case 23:
        return mi(a2, b, c);
      case 24:
        return mi(a2, b, c);
    }
    throw Error(y(156, b.tag));
  };
  function ik(a2, b, c, d) {
    this.tag = a2;
    this.key = c;
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
    this.index = 0;
    this.ref = null;
    this.pendingProps = b;
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
    this.mode = d;
    this.flags = 0;
    this.lastEffect = this.firstEffect = this.nextEffect = null;
    this.childLanes = this.lanes = 0;
    this.alternate = null;
  }
  function nh(a2, b, c, d) {
    return new ik(a2, b, c, d);
  }
  function ji(a2) {
    a2 = a2.prototype;
    return !(!a2 || !a2.isReactComponent);
  }
  function hk(a2) {
    if (typeof a2 === "function")
      return ji(a2) ? 1 : 0;
    if (a2 !== void 0 && a2 !== null) {
      a2 = a2.$$typeof;
      if (a2 === Aa)
        return 11;
      if (a2 === Da)
        return 14;
    }
    return 2;
  }
  function Tg(a2, b) {
    var c = a2.alternate;
    c === null ? (c = nh(a2.tag, b, a2.key, a2.mode), c.elementType = a2.elementType, c.type = a2.type, c.stateNode = a2.stateNode, c.alternate = a2, a2.alternate = c) : (c.pendingProps = b, c.type = a2.type, c.flags = 0, c.nextEffect = null, c.firstEffect = null, c.lastEffect = null);
    c.childLanes = a2.childLanes;
    c.lanes = a2.lanes;
    c.child = a2.child;
    c.memoizedProps = a2.memoizedProps;
    c.memoizedState = a2.memoizedState;
    c.updateQueue = a2.updateQueue;
    b = a2.dependencies;
    c.dependencies = b === null ? null : { lanes: b.lanes, firstContext: b.firstContext };
    c.sibling = a2.sibling;
    c.index = a2.index;
    c.ref = a2.ref;
    return c;
  }
  function Vg(a2, b, c, d, e, f) {
    var g = 2;
    d = a2;
    if (typeof a2 === "function")
      ji(a2) && (g = 1);
    else if (typeof a2 === "string")
      g = 5;
    else
      a:
        switch (a2) {
          case ua:
            return Xg(c.children, e, f, b);
          case Ha:
            g = 8;
            e |= 16;
            break;
          case wa:
            g = 8;
            e |= 1;
            break;
          case xa:
            return a2 = nh(12, c, b, e | 8), a2.elementType = xa, a2.type = xa, a2.lanes = f, a2;
          case Ba:
            return a2 = nh(13, c, b, e), a2.type = Ba, a2.elementType = Ba, a2.lanes = f, a2;
          case Ca:
            return a2 = nh(19, c, b, e), a2.elementType = Ca, a2.lanes = f, a2;
          case Ia:
            return vi(c, e, f, b);
          case Ja:
            return a2 = nh(24, c, b, e), a2.elementType = Ja, a2.lanes = f, a2;
          default:
            if (typeof a2 === "object" && a2 !== null)
              switch (a2.$$typeof) {
                case ya:
                  g = 10;
                  break a;
                case za:
                  g = 9;
                  break a;
                case Aa:
                  g = 11;
                  break a;
                case Da:
                  g = 14;
                  break a;
                case Ea:
                  g = 16;
                  d = null;
                  break a;
                case Fa:
                  g = 22;
                  break a;
              }
            throw Error(y(130, a2 == null ? a2 : typeof a2, ""));
        }
    b = nh(g, c, b, e);
    b.elementType = a2;
    b.type = d;
    b.lanes = f;
    return b;
  }
  function Xg(a2, b, c, d) {
    a2 = nh(7, a2, d, b);
    a2.lanes = c;
    return a2;
  }
  function vi(a2, b, c, d) {
    a2 = nh(23, a2, d, b);
    a2.elementType = Ia;
    a2.lanes = c;
    return a2;
  }
  function Ug(a2, b, c) {
    a2 = nh(6, a2, null, b);
    a2.lanes = c;
    return a2;
  }
  function Wg(a2, b, c) {
    b = nh(4, a2.children !== null ? a2.children : [], a2.key, b);
    b.lanes = c;
    b.stateNode = { containerInfo: a2.containerInfo, pendingChildren: null, implementation: a2.implementation };
    return b;
  }
  function jk(a2, b, c) {
    this.tag = b;
    this.containerInfo = a2;
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
    this.timeoutHandle = -1;
    this.pendingContext = this.context = null;
    this.hydrate = c;
    this.callbackNode = null;
    this.callbackPriority = 0;
    this.eventTimes = Zc(0);
    this.expirationTimes = Zc(-1);
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
    this.entanglements = Zc(0);
    this.mutableSourceEagerHydrationData = null;
  }
  function kk(a2, b, c) {
    var d = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: ta, key: d == null ? null : "" + d, children: a2, containerInfo: b, implementation: c };
  }
  function lk(a2, b, c, d) {
    var e = b.current, f = Hg(), g = Ig(e);
    a:
      if (c) {
        c = c._reactInternals;
        b: {
          if (Zb(c) !== c || c.tag !== 1)
            throw Error(y(170));
          var h = c;
          do {
            switch (h.tag) {
              case 3:
                h = h.stateNode.context;
                break b;
              case 1:
                if (Ff(h.type)) {
                  h = h.stateNode.__reactInternalMemoizedMergedChildContext;
                  break b;
                }
            }
            h = h.return;
          } while (h !== null);
          throw Error(y(171));
        }
        if (c.tag === 1) {
          var k = c.type;
          if (Ff(k)) {
            c = If(c, k, h);
            break a;
          }
        }
        c = h;
      } else
        c = Cf;
    b.context === null ? b.context = c : b.pendingContext = c;
    b = zg(f, g);
    b.payload = { element: a2 };
    d = d === void 0 ? null : d;
    d !== null && (b.callback = d);
    Ag(e, b);
    Jg(e, g, f);
    return g;
  }
  function mk(a2) {
    a2 = a2.current;
    if (!a2.child)
      return null;
    switch (a2.child.tag) {
      case 5:
        return a2.child.stateNode;
      default:
        return a2.child.stateNode;
    }
  }
  function nk(a2, b) {
    a2 = a2.memoizedState;
    if (a2 !== null && a2.dehydrated !== null) {
      var c = a2.retryLane;
      a2.retryLane = c !== 0 && c < b ? c : b;
    }
  }
  function ok(a2, b) {
    nk(a2, b);
    (a2 = a2.alternate) && nk(a2, b);
  }
  function pk() {
    return null;
  }
  function qk(a2, b, c) {
    var d = c != null && c.hydrationOptions != null && c.hydrationOptions.mutableSources || null;
    c = new jk(a2, b, c != null && c.hydrate === true);
    b = nh(3, null, null, b === 2 ? 7 : b === 1 ? 3 : 0);
    c.current = b;
    b.stateNode = c;
    xg(b);
    a2[ff] = c.current;
    cf(a2.nodeType === 8 ? a2.parentNode : a2);
    if (d)
      for (a2 = 0; a2 < d.length; a2++) {
        b = d[a2];
        var e = b._getVersion;
        e = e(b._source);
        c.mutableSourceEagerHydrationData == null ? c.mutableSourceEagerHydrationData = [b, e] : c.mutableSourceEagerHydrationData.push(b, e);
      }
    this._internalRoot = c;
  }
  qk.prototype.render = function(a2) {
    lk(a2, this._internalRoot, null, null);
  };
  qk.prototype.unmount = function() {
    var a2 = this._internalRoot, b = a2.containerInfo;
    lk(null, a2, null, function() {
      b[ff] = null;
    });
  };
  function rk(a2) {
    return !(!a2 || a2.nodeType !== 1 && a2.nodeType !== 9 && a2.nodeType !== 11 && (a2.nodeType !== 8 || a2.nodeValue !== " react-mount-point-unstable "));
  }
  function sk(a2, b) {
    b || (b = a2 ? a2.nodeType === 9 ? a2.documentElement : a2.firstChild : null, b = !(!b || b.nodeType !== 1 || !b.hasAttribute("data-reactroot")));
    if (!b)
      for (var c; c = a2.lastChild; )
        a2.removeChild(c);
    return new qk(a2, 0, b ? { hydrate: true } : void 0);
  }
  function tk(a2, b, c, d, e) {
    var f = c._reactRootContainer;
    if (f) {
      var g = f._internalRoot;
      if (typeof e === "function") {
        var h = e;
        e = function() {
          var a22 = mk(g);
          h.call(a22);
        };
      }
      lk(b, g, a2, e);
    } else {
      f = c._reactRootContainer = sk(c, d);
      g = f._internalRoot;
      if (typeof e === "function") {
        var k = e;
        e = function() {
          var a22 = mk(g);
          k.call(a22);
        };
      }
      Xj(function() {
        lk(b, g, a2, e);
      });
    }
    return mk(g);
  }
  ec = function(a2) {
    if (a2.tag === 13) {
      var b = Hg();
      Jg(a2, 4, b);
      ok(a2, 4);
    }
  };
  fc = function(a2) {
    if (a2.tag === 13) {
      var b = Hg();
      Jg(a2, 67108864, b);
      ok(a2, 67108864);
    }
  };
  gc = function(a2) {
    if (a2.tag === 13) {
      var b = Hg(), c = Ig(a2);
      Jg(a2, c, b);
      ok(a2, c);
    }
  };
  hc = function(a2, b) {
    return b();
  };
  yb = function(a2, b, c) {
    switch (b) {
      case "input":
        ab(a2, c);
        b = c.name;
        if (c.type === "radio" && b != null) {
          for (c = a2; c.parentNode; )
            c = c.parentNode;
          c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');
          for (b = 0; b < c.length; b++) {
            var d = c[b];
            if (d !== a2 && d.form === a2.form) {
              var e = Db(d);
              if (!e)
                throw Error(y(90));
              Wa(d);
              ab(d, e);
            }
          }
        }
        break;
      case "textarea":
        ib(a2, c);
        break;
      case "select":
        b = c.value, b != null && fb(a2, !!c.multiple, b, false);
    }
  };
  Gb = Wj;
  Hb = function(a2, b, c, d, e) {
    var f = X;
    X |= 4;
    try {
      return gg(98, a2.bind(null, b, c, d, e));
    } finally {
      X = f, X === 0 && (wj(), ig());
    }
  };
  Ib = function() {
    (X & 49) === 0 && (Vj(), Oj());
  };
  Jb = function(a2, b) {
    var c = X;
    X |= 2;
    try {
      return a2(b);
    } finally {
      X = c, X === 0 && (wj(), ig());
    }
  };
  function uk(a2, b) {
    var c = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!rk(b))
      throw Error(y(200));
    return kk(a2, b, null, c);
  }
  var vk = { Events: [Cb, ue, Db, Eb, Fb, Oj, { current: false }] };
  var wk = { findFiberByHostInstance: wc, bundleType: 0, version: "17.0.1", rendererPackageName: "react-dom" };
  var xk = { bundleType: wk.bundleType, version: wk.version, rendererPackageName: wk.rendererPackageName, rendererConfig: wk.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ra.ReactCurrentDispatcher, findHostInstanceByFiber: function(a2) {
    a2 = cc(a2);
    return a2 === null ? null : a2.stateNode;
  }, findFiberByHostInstance: wk.findFiberByHostInstance || pk, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined") {
    yk = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!yk.isDisabled && yk.supportsFiber)
      try {
        Lf = yk.inject(xk), Mf = yk;
      } catch (a2) {
      }
  }
  var yk;
  var __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED2 = vk;
  var createPortal = uk;
  var findDOMNode = function(a2) {
    if (a2 == null)
      return null;
    if (a2.nodeType === 1)
      return a2;
    var b = a2._reactInternals;
    if (b === void 0) {
      if (typeof a2.render === "function")
        throw Error(y(188));
      throw Error(y(268, Object.keys(a2)));
    }
    a2 = cc(b);
    a2 = a2 === null ? null : a2.stateNode;
    return a2;
  };
  var flushSync = function(a2, b) {
    var c = X;
    if ((c & 48) !== 0)
      return a2(b);
    X |= 1;
    try {
      if (a2)
        return gg(99, a2.bind(null, b));
    } finally {
      X = c, ig();
    }
  };
  var hydrate = function(a2, b, c) {
    if (!rk(b))
      throw Error(y(200));
    return tk(null, a2, b, true, c);
  };
  var render = function(a2, b, c) {
    if (!rk(b))
      throw Error(y(200));
    return tk(null, a2, b, false, c);
  };
  var unmountComponentAtNode = function(a2) {
    if (!rk(a2))
      throw Error(y(40));
    return a2._reactRootContainer ? (Xj(function() {
      tk(null, null, a2, false, function() {
        a2._reactRootContainer = null;
        a2[ff] = null;
      });
    }), true) : false;
  };
  var unstable_batchedUpdates = Wj;
  var unstable_createPortal = function(a2, b) {
    return uk(a2, b, 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null);
  };
  var unstable_renderSubtreeIntoContainer = function(a2, b, c, d) {
    if (!rk(c))
      throw Error(y(200));
    if (a2 == null || a2._reactInternals === void 0)
      throw Error(y(38));
    return tk(a2, b, c, false, d);
  };
  var version2 = "17.0.1";
  var reactDom_production_min = {
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED2,
    createPortal,
    findDOMNode,
    flushSync,
    hydrate,
    render,
    unmountComponentAtNode,
    unstable_batchedUpdates,
    unstable_createPortal,
    unstable_renderSubtreeIntoContainer,
    version: version2
  };
  var reactDom = createCommonjsModule3(function(module) {
    function checkDCE() {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
        return;
      }
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
      } catch (err) {
        console.error(err);
      }
    }
    {
      checkDCE();
      module.exports = reactDom_production_min;
    }
  });
  var __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED$1 = reactDom.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  var createPortal$1 = reactDom.createPortal;
  var react_dom_default = reactDom;
  var findDOMNode$1 = reactDom.findDOMNode;
  var flushSync$1 = reactDom.flushSync;
  var hydrate$1 = reactDom.hydrate;
  var render$1 = reactDom.render;
  var unmountComponentAtNode$1 = reactDom.unmountComponentAtNode;
  var unstable_batchedUpdates$1 = reactDom.unstable_batchedUpdates;
  var unstable_createPortal$1 = reactDom.unstable_createPortal;
  var unstable_renderSubtreeIntoContainer$1 = reactDom.unstable_renderSubtreeIntoContainer;
  var version$1 = reactDom.version;

  // deno:https://cdn.skypack.dev/-/history@v5.2.0-79z5BuypOwmIjC9VTAxG/dist=es2019,mode=imports/optimized/history.js
  function _extends() {
    _extends = Object.assign || function(target) {
      for (var i2 = 1; i2 < arguments.length; i2++) {
        var source = arguments[i2];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends.apply(this, arguments);
  }
  var r;
  var B2 = r || (r = {});
  B2.Pop = "POP";
  B2.Push = "PUSH";
  B2.Replace = "REPLACE";
  var C = function(b) {
    return b;
  };
  function E(b) {
    b.preventDefault();
    b.returnValue = "";
  }
  function F2() {
    var b = [];
    return { get length() {
      return b.length;
    }, push: function(h) {
      b.push(h);
      return function() {
        b = b.filter(function(e) {
          return e !== h;
        });
      };
    }, call: function(h) {
      b.forEach(function(e) {
        return e && e(h);
      });
    } };
  }
  function H2() {
    return Math.random().toString(36).substr(2, 8);
  }
  function I2(b) {
    var h = b.pathname;
    h = h === void 0 ? "/" : h;
    var e = b.search;
    e = e === void 0 ? "" : e;
    b = b.hash;
    b = b === void 0 ? "" : b;
    e && e !== "?" && (h += e.charAt(0) === "?" ? e : "?" + e);
    b && b !== "#" && (h += b.charAt(0) === "#" ? b : "#" + b);
    return h;
  }
  function J(b) {
    var h = {};
    if (b) {
      var e = b.indexOf("#");
      0 <= e && (h.hash = b.substr(e), b = b.substr(0, e));
      e = b.indexOf("?");
      0 <= e && (h.search = b.substr(e), b = b.substr(0, e));
      b && (h.pathname = b);
    }
    return h;
  }
  function createHashHistory(b) {
    function h() {
      var a2 = J(m.location.hash.substr(1)), f = a2.pathname, l = a2.search;
      a2 = a2.hash;
      var k = u.state || {};
      return [k.idx, C({ pathname: f === void 0 ? "/" : f, search: l === void 0 ? "" : l, hash: a2 === void 0 ? "" : a2, state: k.usr || null, key: k.key || "default" })];
    }
    function e() {
      if (t2)
        c.call(t2), t2 = null;
      else {
        var a2 = r.Pop, f = h(), l = f[0];
        f = f[1];
        if (c.length)
          if (l != null) {
            var k = q - l;
            k && (t2 = { action: a2, location: f, retry: function() {
              p(-1 * k);
            } }, p(k));
          } else
            ;
        else
          A(a2);
      }
    }
    function x(a2) {
      var f = document.querySelector("base"), l = "";
      f && f.getAttribute("href") && (f = m.location.href, l = f.indexOf("#"), l = l === -1 ? f : f.slice(0, l));
      return l + "#" + (typeof a2 === "string" ? a2 : I2(a2));
    }
    function z(a2, f) {
      f === void 0 && (f = null);
      return C(_extends({ pathname: d.pathname, hash: "", search: "" }, typeof a2 === "string" ? J(a2) : a2, { state: f, key: H2() }));
    }
    function A(a2) {
      v = a2;
      a2 = h();
      q = a2[0];
      d = a2[1];
      g.call({ action: v, location: d });
    }
    function y2(a2, f) {
      function l() {
        y2(a2, f);
      }
      var k = r.Push, n = z(a2, f);
      if (!c.length || (c.call({ action: k, location: n, retry: l }), false)) {
        var G2 = [{ usr: n.state, key: n.key, idx: q + 1 }, x(n)];
        n = G2[0];
        G2 = G2[1];
        try {
          u.pushState(n, "", G2);
        } catch (K) {
          m.location.assign(G2);
        }
        A(k);
      }
    }
    function w(a2, f) {
      function l() {
        w(a2, f);
      }
      var k = r.Replace, n = z(a2, f);
      c.length && (c.call({ action: k, location: n, retry: l }), 1) || (n = [{ usr: n.state, key: n.key, idx: q }, x(n)], u.replaceState(n[0], "", n[1]), A(k));
    }
    function p(a2) {
      u.go(a2);
    }
    b === void 0 && (b = {});
    b = b.window;
    var m = b === void 0 ? document.defaultView : b, u = m.history, t2 = null;
    m.addEventListener("popstate", e);
    m.addEventListener("hashchange", function() {
      var a2 = h()[1];
      I2(a2) !== I2(d) && e();
    });
    var v = r.Pop;
    b = h();
    var q = b[0], d = b[1], g = F2(), c = F2();
    q == null && (q = 0, u.replaceState(_extends({}, u.state, { idx: q }), ""));
    return {
      get action() {
        return v;
      },
      get location() {
        return d;
      },
      createHref: x,
      push: y2,
      replace: w,
      go: p,
      back: function() {
        p(-1);
      },
      forward: function() {
        p(1);
      },
      listen: function(a2) {
        return g.push(a2);
      },
      block: function(a2) {
        var f = c.push(a2);
        c.length === 1 && m.addEventListener("beforeunload", E);
        return function() {
          f();
          c.length || m.removeEventListener("beforeunload", E);
        };
      }
    };
  }

  // deno:https://cdn.skypack.dev/-/react-router@v6.2.1-3sQawYgMGQEF2gb5AUmo/dist=es2019,mode=imports/optimized/react-router.js
  var { createContext: createContext2 } = react_default;
  var { useRef: useRef2 } = react_default;
  var { createElement: createElement2 } = react_default;
  var { useContext: useContext2 } = react_default;
  var { useEffect: useEffect2 } = react_default;
  var { useMemo: useMemo2 } = react_default;
  var { useCallback: useCallback2 } = react_default;
  var { Children: Children2 } = react_default;
  var { isValidElement: isValidElement2 } = react_default;
  var { Fragment: Fragment2 } = react_default;
  function invariant(cond, message) {
    if (!cond)
      throw new Error(message);
  }
  var NavigationContext = /* @__PURE__ */ createContext2(null);
  var LocationContext = /* @__PURE__ */ createContext2(null);
  var RouteContext = /* @__PURE__ */ createContext2({
    outlet: null,
    matches: []
  });
  function Outlet(props) {
    return useOutlet(props.context);
  }
  function Route(_props) {
    invariant(false);
  }
  function Router(_ref3) {
    let {
      basename: basenameProp = "/",
      children = null,
      location: locationProp,
      navigationType = r.Pop,
      navigator,
      static: staticProp = false
    } = _ref3;
    !!useInRouterContext() ? invariant(false) : void 0;
    let basename = normalizePathname(basenameProp);
    let navigationContext = useMemo2(() => ({
      basename,
      navigator,
      static: staticProp
    }), [basename, navigator, staticProp]);
    if (typeof locationProp === "string") {
      locationProp = J(locationProp);
    }
    let {
      pathname = "/",
      search = "",
      hash = "",
      state: state2 = null,
      key = "default"
    } = locationProp;
    let location = useMemo2(() => {
      let trailingPathname = stripBasename(pathname, basename);
      if (trailingPathname == null) {
        return null;
      }
      return {
        pathname: trailingPathname,
        search,
        hash,
        state: state2,
        key
      };
    }, [basename, pathname, search, hash, state2, key]);
    if (location == null) {
      return null;
    }
    return /* @__PURE__ */ createElement2(NavigationContext.Provider, {
      value: navigationContext
    }, /* @__PURE__ */ createElement2(LocationContext.Provider, {
      children,
      value: {
        location,
        navigationType
      }
    }));
  }
  function Routes(_ref4) {
    let {
      children,
      location
    } = _ref4;
    return useRoutes(createRoutesFromChildren(children), location);
  }
  function useHref(to) {
    !useInRouterContext() ? invariant(false) : void 0;
    let {
      basename,
      navigator
    } = useContext2(NavigationContext);
    let {
      hash,
      pathname,
      search
    } = useResolvedPath(to);
    let joinedPathname = pathname;
    if (basename !== "/") {
      let toPathname = getToPathname(to);
      let endsWithSlash = toPathname != null && toPathname.endsWith("/");
      joinedPathname = pathname === "/" ? basename + (endsWithSlash ? "/" : "") : joinPaths([basename, pathname]);
    }
    return navigator.createHref({
      pathname: joinedPathname,
      search,
      hash
    });
  }
  function useInRouterContext() {
    return useContext2(LocationContext) != null;
  }
  function useLocation() {
    !useInRouterContext() ? invariant(false) : void 0;
    return useContext2(LocationContext).location;
  }
  function useNavigate() {
    !useInRouterContext() ? invariant(false) : void 0;
    let {
      basename,
      navigator
    } = useContext2(NavigationContext);
    let {
      matches
    } = useContext2(RouteContext);
    let {
      pathname: locationPathname
    } = useLocation();
    let routePathnamesJson = JSON.stringify(matches.map((match2) => match2.pathnameBase));
    let activeRef = useRef2(false);
    useEffect2(() => {
      activeRef.current = true;
    });
    let navigate = useCallback2(function(to, options) {
      if (options === void 0) {
        options = {};
      }
      if (!activeRef.current)
        return;
      if (typeof to === "number") {
        navigator.go(to);
        return;
      }
      let path = resolveTo(to, JSON.parse(routePathnamesJson), locationPathname);
      if (basename !== "/") {
        path.pathname = joinPaths([basename, path.pathname]);
      }
      (!!options.replace ? navigator.replace : navigator.push)(path, options.state);
    }, [basename, navigator, routePathnamesJson, locationPathname]);
    return navigate;
  }
  var OutletContext = /* @__PURE__ */ createContext2(null);
  function useOutlet(context) {
    let outlet = useContext2(RouteContext).outlet;
    if (outlet) {
      return /* @__PURE__ */ createElement2(OutletContext.Provider, {
        value: context
      }, outlet);
    }
    return outlet;
  }
  function useResolvedPath(to) {
    let {
      matches
    } = useContext2(RouteContext);
    let {
      pathname: locationPathname
    } = useLocation();
    let routePathnamesJson = JSON.stringify(matches.map((match2) => match2.pathnameBase));
    return useMemo2(() => resolveTo(to, JSON.parse(routePathnamesJson), locationPathname), [to, routePathnamesJson, locationPathname]);
  }
  function useRoutes(routes, locationArg) {
    !useInRouterContext() ? invariant(false) : void 0;
    let {
      matches: parentMatches
    } = useContext2(RouteContext);
    let routeMatch = parentMatches[parentMatches.length - 1];
    let parentParams = routeMatch ? routeMatch.params : {};
    let parentPathname = routeMatch ? routeMatch.pathname : "/";
    let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
    let parentRoute = routeMatch && routeMatch.route;
    let locationFromContext = useLocation();
    let location;
    if (locationArg) {
      var _parsedLocationArg$pa;
      let parsedLocationArg = typeof locationArg === "string" ? J(locationArg) : locationArg;
      !(parentPathnameBase === "/" || ((_parsedLocationArg$pa = parsedLocationArg.pathname) == null ? void 0 : _parsedLocationArg$pa.startsWith(parentPathnameBase))) ? invariant(false) : void 0;
      location = parsedLocationArg;
    } else {
      location = locationFromContext;
    }
    let pathname = location.pathname || "/";
    let remainingPathname = parentPathnameBase === "/" ? pathname : pathname.slice(parentPathnameBase.length) || "/";
    let matches = matchRoutes(routes, {
      pathname: remainingPathname
    });
    return _renderMatches(matches && matches.map((match2) => Object.assign({}, match2, {
      params: Object.assign({}, parentParams, match2.params),
      pathname: joinPaths([parentPathnameBase, match2.pathname]),
      pathnameBase: match2.pathnameBase === "/" ? parentPathnameBase : joinPaths([parentPathnameBase, match2.pathnameBase])
    })), parentMatches);
  }
  function createRoutesFromChildren(children) {
    let routes = [];
    Children2.forEach(children, (element) => {
      if (!/* @__PURE__ */ isValidElement2(element)) {
        return;
      }
      if (element.type === Fragment2) {
        routes.push.apply(routes, createRoutesFromChildren(element.props.children));
        return;
      }
      !(element.type === Route) ? invariant(false) : void 0;
      let route = {
        caseSensitive: element.props.caseSensitive,
        element: element.props.element,
        index: element.props.index,
        path: element.props.path
      };
      if (element.props.children) {
        route.children = createRoutesFromChildren(element.props.children);
      }
      routes.push(route);
    });
    return routes;
  }
  function matchRoutes(routes, locationArg, basename) {
    if (basename === void 0) {
      basename = "/";
    }
    let location = typeof locationArg === "string" ? J(locationArg) : locationArg;
    let pathname = stripBasename(location.pathname || "/", basename);
    if (pathname == null) {
      return null;
    }
    let branches = flattenRoutes(routes);
    rankRouteBranches(branches);
    let matches = null;
    for (let i2 = 0; matches == null && i2 < branches.length; ++i2) {
      matches = matchRouteBranch(branches[i2], pathname);
    }
    return matches;
  }
  function flattenRoutes(routes, branches, parentsMeta, parentPath) {
    if (branches === void 0) {
      branches = [];
    }
    if (parentsMeta === void 0) {
      parentsMeta = [];
    }
    if (parentPath === void 0) {
      parentPath = "";
    }
    routes.forEach((route, index) => {
      let meta = {
        relativePath: route.path || "",
        caseSensitive: route.caseSensitive === true,
        childrenIndex: index,
        route
      };
      if (meta.relativePath.startsWith("/")) {
        !meta.relativePath.startsWith(parentPath) ? invariant(false) : void 0;
        meta.relativePath = meta.relativePath.slice(parentPath.length);
      }
      let path = joinPaths([parentPath, meta.relativePath]);
      let routesMeta = parentsMeta.concat(meta);
      if (route.children && route.children.length > 0) {
        !(route.index !== true) ? invariant(false) : void 0;
        flattenRoutes(route.children, branches, routesMeta, path);
      }
      if (route.path == null && !route.index) {
        return;
      }
      branches.push({
        path,
        score: computeScore(path, route.index),
        routesMeta
      });
    });
    return branches;
  }
  function rankRouteBranches(branches) {
    branches.sort((a2, b) => a2.score !== b.score ? b.score - a2.score : compareIndexes(a2.routesMeta.map((meta) => meta.childrenIndex), b.routesMeta.map((meta) => meta.childrenIndex)));
  }
  var paramRe = /^:\w+$/;
  var dynamicSegmentValue = 3;
  var indexRouteValue = 2;
  var emptySegmentValue = 1;
  var staticSegmentValue = 10;
  var splatPenalty = -2;
  var isSplat = (s) => s === "*";
  function computeScore(path, index) {
    let segments = path.split("/");
    let initialScore = segments.length;
    if (segments.some(isSplat)) {
      initialScore += splatPenalty;
    }
    if (index) {
      initialScore += indexRouteValue;
    }
    return segments.filter((s) => !isSplat(s)).reduce((score, segment) => score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue), initialScore);
  }
  function compareIndexes(a2, b) {
    let siblings = a2.length === b.length && a2.slice(0, -1).every((n, i2) => n === b[i2]);
    return siblings ? a2[a2.length - 1] - b[b.length - 1] : 0;
  }
  function matchRouteBranch(branch, pathname) {
    let {
      routesMeta
    } = branch;
    let matchedParams = {};
    let matchedPathname = "/";
    let matches = [];
    for (let i2 = 0; i2 < routesMeta.length; ++i2) {
      let meta = routesMeta[i2];
      let end = i2 === routesMeta.length - 1;
      let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
      let match2 = matchPath({
        path: meta.relativePath,
        caseSensitive: meta.caseSensitive,
        end
      }, remainingPathname);
      if (!match2)
        return null;
      Object.assign(matchedParams, match2.params);
      let route = meta.route;
      matches.push({
        params: matchedParams,
        pathname: joinPaths([matchedPathname, match2.pathname]),
        pathnameBase: joinPaths([matchedPathname, match2.pathnameBase]),
        route
      });
      if (match2.pathnameBase !== "/") {
        matchedPathname = joinPaths([matchedPathname, match2.pathnameBase]);
      }
    }
    return matches;
  }
  function _renderMatches(matches, parentMatches) {
    if (parentMatches === void 0) {
      parentMatches = [];
    }
    if (matches == null)
      return null;
    return matches.reduceRight((outlet, match2, index) => {
      return /* @__PURE__ */ createElement2(RouteContext.Provider, {
        children: match2.route.element !== void 0 ? match2.route.element : /* @__PURE__ */ createElement2(Outlet, null),
        value: {
          outlet,
          matches: parentMatches.concat(matches.slice(0, index + 1))
        }
      });
    }, null);
  }
  function matchPath(pattern, pathname) {
    if (typeof pattern === "string") {
      pattern = {
        path: pattern,
        caseSensitive: false,
        end: true
      };
    }
    let [matcher, paramNames] = compilePath(pattern.path, pattern.caseSensitive, pattern.end);
    let match2 = pathname.match(matcher);
    if (!match2)
      return null;
    let matchedPathname = match2[0];
    let pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
    let captureGroups = match2.slice(1);
    let params = paramNames.reduce((memo2, paramName, index) => {
      if (paramName === "*") {
        let splatValue = captureGroups[index] || "";
        pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
      }
      memo2[paramName] = safelyDecodeURIComponent(captureGroups[index] || "");
      return memo2;
    }, {});
    return {
      params,
      pathname: matchedPathname,
      pathnameBase,
      pattern
    };
  }
  function compilePath(path, caseSensitive, end) {
    if (caseSensitive === void 0) {
      caseSensitive = false;
    }
    if (end === void 0) {
      end = true;
    }
    let paramNames = [];
    let regexpSource = "^" + path.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/:(\w+)/g, (_4, paramName) => {
      paramNames.push(paramName);
      return "([^\\/]+)";
    });
    if (path.endsWith("*")) {
      paramNames.push("*");
      regexpSource += path === "*" || path === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$";
    } else {
      regexpSource += end ? "\\/*$" : "(?:\\b|\\/|$)";
    }
    let matcher = new RegExp(regexpSource, caseSensitive ? void 0 : "i");
    return [matcher, paramNames];
  }
  function safelyDecodeURIComponent(value, paramName) {
    try {
      return decodeURIComponent(value);
    } catch (error) {
      return value;
    }
  }
  function resolvePath(to, fromPathname) {
    if (fromPathname === void 0) {
      fromPathname = "/";
    }
    let {
      pathname: toPathname,
      search = "",
      hash = ""
    } = typeof to === "string" ? J(to) : to;
    let pathname = toPathname ? toPathname.startsWith("/") ? toPathname : resolvePathname(toPathname, fromPathname) : fromPathname;
    return {
      pathname,
      search: normalizeSearch(search),
      hash: normalizeHash(hash)
    };
  }
  function resolvePathname(relativePath, fromPathname) {
    let segments = fromPathname.replace(/\/+$/, "").split("/");
    let relativeSegments = relativePath.split("/");
    relativeSegments.forEach((segment) => {
      if (segment === "..") {
        if (segments.length > 1)
          segments.pop();
      } else if (segment !== ".") {
        segments.push(segment);
      }
    });
    return segments.length > 1 ? segments.join("/") : "/";
  }
  function resolveTo(toArg, routePathnames, locationPathname) {
    let to = typeof toArg === "string" ? J(toArg) : toArg;
    let toPathname = toArg === "" || to.pathname === "" ? "/" : to.pathname;
    let from;
    if (toPathname == null) {
      from = locationPathname;
    } else {
      let routePathnameIndex = routePathnames.length - 1;
      if (toPathname.startsWith("..")) {
        let toSegments = toPathname.split("/");
        while (toSegments[0] === "..") {
          toSegments.shift();
          routePathnameIndex -= 1;
        }
        to.pathname = toSegments.join("/");
      }
      from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
    }
    let path = resolvePath(to, from);
    if (toPathname && toPathname !== "/" && toPathname.endsWith("/") && !path.pathname.endsWith("/")) {
      path.pathname += "/";
    }
    return path;
  }
  function getToPathname(to) {
    return to === "" || to.pathname === "" ? "/" : typeof to === "string" ? J(to).pathname : to.pathname;
  }
  function stripBasename(pathname, basename) {
    if (basename === "/")
      return pathname;
    if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
      return null;
    }
    let nextChar = pathname.charAt(basename.length);
    if (nextChar && nextChar !== "/") {
      return null;
    }
    return pathname.slice(basename.length) || "/";
  }
  var joinPaths = (paths) => paths.join("/").replace(/\/\/+/g, "/");
  var normalizePathname = (pathname) => pathname.replace(/\/+$/, "").replace(/^\/*/, "/");
  var normalizeSearch = (search) => !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;
  var normalizeHash = (hash) => !hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;

  // deno:https://cdn.skypack.dev/-/react-router-dom@v6.2.1-lIS29de5Lu5uK9RaayyG/dist=es2019,mode=imports/optimized/react-router-dom.js
  var { useRef: useRef3 } = react_default;
  var { useState: useState2 } = react_default;
  var { useLayoutEffect: useLayoutEffect2 } = react_default;
  var { createElement: createElement3 } = react_default;
  var { forwardRef: forwardRef2 } = react_default;
  var { useCallback: useCallback3 } = react_default;
  function _extends2() {
    _extends2 = Object.assign || function(target) {
      for (var i2 = 1; i2 < arguments.length; i2++) {
        var source = arguments[i2];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends2.apply(this, arguments);
  }
  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null)
      return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i2;
    for (i2 = 0; i2 < sourceKeys.length; i2++) {
      key = sourceKeys[i2];
      if (excluded.indexOf(key) >= 0)
        continue;
      target[key] = source[key];
    }
    return target;
  }
  var _excluded = ["onClick", "reloadDocument", "replace", "state", "target", "to"];
  var _excluded2 = ["aria-current", "caseSensitive", "className", "end", "style", "to", "children"];
  function HashRouter(_ref2) {
    let {
      basename,
      children,
      window: window2
    } = _ref2;
    let historyRef = useRef3();
    if (historyRef.current == null) {
      historyRef.current = createHashHistory({
        window: window2
      });
    }
    let history2 = historyRef.current;
    let [state2, setState] = useState2({
      action: history2.action,
      location: history2.location
    });
    useLayoutEffect2(() => history2.listen(setState), [history2]);
    return /* @__PURE__ */ createElement3(Router, {
      basename,
      children,
      location: state2.location,
      navigationType: state2.action,
      navigator: history2
    });
  }
  function isModifiedEvent(event) {
    return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
  }
  var Link = /* @__PURE__ */ forwardRef2(function LinkWithRef(_ref4, ref) {
    let {
      onClick,
      reloadDocument,
      replace = false,
      state: state2,
      target,
      to
    } = _ref4, rest = _objectWithoutPropertiesLoose(_ref4, _excluded);
    let href = useHref(to);
    let internalOnClick = useLinkClickHandler(to, {
      replace,
      state: state2,
      target
    });
    function handleClick(event) {
      if (onClick)
        onClick(event);
      if (!event.defaultPrevented && !reloadDocument) {
        internalOnClick(event);
      }
    }
    return /* @__PURE__ */ createElement3("a", _extends2({}, rest, {
      href,
      onClick: handleClick,
      ref,
      target
    }));
  });
  var NavLink = /* @__PURE__ */ forwardRef2(function NavLinkWithRef(_ref5, ref) {
    let {
      "aria-current": ariaCurrentProp = "page",
      caseSensitive = false,
      className: classNameProp = "",
      end = false,
      style: styleProp,
      to,
      children
    } = _ref5, rest = _objectWithoutPropertiesLoose(_ref5, _excluded2);
    let location = useLocation();
    let path = useResolvedPath(to);
    let locationPathname = location.pathname;
    let toPathname = path.pathname;
    if (!caseSensitive) {
      locationPathname = locationPathname.toLowerCase();
      toPathname = toPathname.toLowerCase();
    }
    let isActive = locationPathname === toPathname || !end && locationPathname.startsWith(toPathname) && locationPathname.charAt(toPathname.length) === "/";
    let ariaCurrent = isActive ? ariaCurrentProp : void 0;
    let className;
    if (typeof classNameProp === "function") {
      className = classNameProp({
        isActive
      });
    } else {
      className = [classNameProp, isActive ? "active" : null].filter(Boolean).join(" ");
    }
    let style = typeof styleProp === "function" ? styleProp({
      isActive
    }) : styleProp;
    return /* @__PURE__ */ createElement3(Link, _extends2({}, rest, {
      "aria-current": ariaCurrent,
      className,
      ref,
      style,
      to
    }), typeof children === "function" ? children({
      isActive
    }) : children);
  });
  function useLinkClickHandler(to, _temp) {
    let {
      target,
      replace: replaceProp,
      state: state2
    } = _temp === void 0 ? {} : _temp;
    let navigate = useNavigate();
    let location = useLocation();
    let path = useResolvedPath(to);
    return useCallback3((event) => {
      if (event.button === 0 && (!target || target === "_self") && !isModifiedEvent(event)) {
        event.preventDefault();
        let replace = !!replaceProp || I2(location) === I2(path);
        navigate(to, {
          replace,
          state: state2
        });
      }
    }, [location, navigate, path, replaceProp, state2, target, to]);
  }

  // deno:https://cdn.skypack.dev/-/style-vendorizer@v2.1.1-GCRbKZcel9rPX82h7Ylu/dist=es2019,mode=imports/optimized/style-vendorizer.js
  var i = new Map([["align-self", "-ms-grid-row-align"], ["color-adjust", "-webkit-print-color-adjust"], ["column-gap", "grid-column-gap"], ["forced-color-adjust", "-ms-high-contrast-adjust"], ["gap", "grid-gap"], ["grid-template-columns", "-ms-grid-columns"], ["grid-template-rows", "-ms-grid-rows"], ["justify-self", "-ms-grid-column-align"], ["margin-inline-end", "-webkit-margin-end"], ["margin-inline-start", "-webkit-margin-start"], ["mask-border", "-webkit-mask-box-image"], ["mask-border-outset", "-webkit-mask-box-image-outset"], ["mask-border-slice", "-webkit-mask-box-image-slice"], ["mask-border-source", "-webkit-mask-box-image-source"], ["mask-border-repeat", "-webkit-mask-box-image-repeat"], ["mask-border-width", "-webkit-mask-box-image-width"], ["overflow-wrap", "word-wrap"], ["padding-inline-end", "-webkit-padding-end"], ["padding-inline-start", "-webkit-padding-start"], ["row-gap", "grid-row-gap"], ["scroll-margin-bottom", "scroll-snap-margin-bottom"], ["scroll-margin-left", "scroll-snap-margin-left"], ["scroll-margin-right", "scroll-snap-margin-right"], ["scroll-margin-top", "scroll-snap-margin-top"], ["scroll-margin", "scroll-snap-margin"], ["text-combine-upright", "-ms-text-combine-horizontal"]]);
  function r2(r22) {
    return i.get(r22);
  }
  function a(i2) {
    var r22 = /^(?:(text-(?:decoration$|e|or|si)|back(?:ground-cl|d|f)|box-d|mask(?:$|-[ispro]|-cl))|(tab-|column(?!-s)|text-align-l)|(ap)|(u|hy))/i.exec(i2);
    return r22 ? r22[1] ? 1 : r22[2] ? 2 : r22[3] ? 3 : 5 : 0;
  }
  function t(i2, r22) {
    var a2 = /^(?:(pos)|(cli)|(background-i)|((?:max-|min-)?(?:block-s|inl|he|widt))|(dis))/i.exec(i2);
    return a2 ? a2[1] ? /^sti/i.test(r22) ? 1 : 0 : a2[2] ? /^pat/i.test(r22) ? 1 : 0 : a2[3] ? /^image-/i.test(r22) ? 1 : 0 : a2[4] ? r22[3] === "-" ? 2 : 0 : /^(?:inline-)?grid$/i.test(r22) ? 4 : 0 : 0;
  }

  // deno:https://cdn.skypack.dev/-/twind@v0.16.16-o8T5yfMqv8vjiI1gSCml/dist=es2019,mode=imports/optimized/twind.js
  var includes = (value, search) => !!~value.indexOf(search);
  var join = (parts, separator = "-") => parts.join(separator);
  var joinTruthy = (parts, separator) => join(parts.filter(Boolean), separator);
  var tail = (array, startIndex = 1) => array.slice(startIndex);
  var identity = (value) => value;
  var noop = () => {
  };
  var capitalize = (value) => value[0].toUpperCase() + tail(value);
  var hyphenate = (value) => value.replace(/[A-Z]/g, "-$&").toLowerCase();
  var evalThunk = (value, context) => {
    while (typeof value == "function") {
      value = value(context);
    }
    return value;
  };
  var ensureMaxSize = (map, max) => {
    if (map.size > max) {
      map.delete(map.keys().next().value);
    }
  };
  var isCSSProperty = (key, value) => !includes("@:&", key[0]) && (includes("rg", (typeof value)[5]) || Array.isArray(value));
  var merge = (target, source, context) => source ? Object.keys(source).reduce((target2, key) => {
    const value = evalThunk(source[key], context);
    if (isCSSProperty(key, value)) {
      target2[hyphenate(key)] = value;
    } else {
      target2[key] = key[0] == "@" && includes("figa", key[1]) ? (target2[key] || []).concat(value) : merge(target2[key] || {}, value, context);
    }
    return target2;
  }, target) : target;
  var escape = typeof CSS !== "undefined" && CSS.escape || ((className) => className.replace(/[!"'`*+.,;:\\/<=>?@#$%&^|~()[\]{}]/g, "\\$&").replace(/^\d/, "\\3$& "));
  var buildMediaQuery = (screen) => {
    if (!Array.isArray(screen)) {
      screen = [screen];
    }
    return "@media " + join(screen.map((screen2) => {
      if (typeof screen2 == "string") {
        screen2 = { min: screen2 };
      }
      return screen2.raw || join(Object.keys(screen2).map((feature) => `(${feature}-width:${screen2[feature]})`), " and ");
    }), ",");
  };
  var cyrb32 = (value) => {
    for (var h = 9, index = value.length; index--; ) {
      h = Math.imul(h ^ value.charCodeAt(index), 1597334677);
    }
    return "tw-" + ((h ^ h >>> 9) >>> 0).toString(36);
  };
  var sortedInsertionIndex = (array, element) => {
    for (var low = 0, high = array.length; low < high; ) {
      const pivot = high + low >> 1;
      if (array[pivot] <= element) {
        low = pivot + 1;
      } else {
        high = pivot;
      }
    }
    return high;
  };
  var groupings;
  var rules;
  var startGrouping = (value = "") => {
    groupings.push(value);
    return "";
  };
  var endGrouping = (isWhitespace) => {
    groupings.length = Math.max(groupings.lastIndexOf("") + ~~isWhitespace, 0);
  };
  var onlyPrefixes = (s) => s && !includes("!:", s[0]);
  var onlyVariants = (s) => s[0] == ":";
  var addRule = (directive2, negate) => {
    rules.push({
      v: groupings.filter(onlyVariants),
      d: directive2,
      n: negate,
      i: includes(groupings, "!"),
      $: ""
    });
  };
  var saveRule = (buffer) => {
    const negate = buffer[0] == "-";
    if (negate) {
      buffer = tail(buffer);
    }
    const prefix = join(groupings.filter(onlyPrefixes));
    addRule(buffer == "&" ? prefix : (prefix && prefix + "-") + buffer, negate);
    return "";
  };
  var parseString = (token, isVariant) => {
    let buffer = "";
    for (let char, dynamic = false, position2 = 0; char = token[position2++]; ) {
      if (dynamic || char == "[") {
        buffer += char;
        dynamic = char != "]";
        continue;
      }
      switch (char) {
        case ":":
          buffer = buffer && startGrouping(":" + (token[position2] == char ? token[position2++] : "") + buffer);
          break;
        case "(":
          buffer = buffer && startGrouping(buffer);
          startGrouping();
          break;
        case "!":
          startGrouping(char);
          break;
        case ")":
        case " ":
        case "	":
        case "\n":
        case "\r":
          buffer = buffer && saveRule(buffer);
          endGrouping(char !== ")");
          break;
        default:
          buffer += char;
      }
    }
    if (buffer) {
      if (isVariant) {
        startGrouping(":" + buffer);
      } else if (buffer.slice(-1) == "-") {
        startGrouping(buffer.slice(0, -1));
      } else {
        saveRule(buffer);
      }
    }
  };
  var parseGroupedToken = (token) => {
    startGrouping();
    parseToken(token);
    endGrouping();
  };
  var parseGroup = (key, token) => {
    if (token) {
      startGrouping();
      const isVariant = includes("tbu", (typeof token)[1]);
      parseString(key, isVariant);
      if (isVariant) {
        parseGroupedToken(token);
      }
      endGrouping();
    }
  };
  var parseToken = (token) => {
    switch (typeof token) {
      case "string":
        parseString(token);
        break;
      case "function":
        addRule(token);
        break;
      case "object":
        if (Array.isArray(token)) {
          token.forEach(parseGroupedToken);
        } else if (token) {
          Object.keys(token).forEach((key) => {
            parseGroup(key, token[key]);
          });
        }
    }
  };
  var staticsCaches = new WeakMap();
  var buildStatics = (strings) => {
    let statics = staticsCaches.get(strings);
    if (!statics) {
      let slowModeIndex = NaN;
      let buffer = "";
      statics = strings.map((token, index) => {
        if (slowModeIndex !== slowModeIndex && (token.slice(-1) == "[" || includes(":-(", (strings[index + 1] || "")[0]))) {
          slowModeIndex = index;
        }
        if (index >= slowModeIndex) {
          return (interpolation) => {
            if (index == slowModeIndex) {
              buffer = "";
            }
            buffer += token;
            if (includes("rg", (typeof interpolation)[5])) {
              buffer += interpolation;
            } else if (interpolation) {
              parseString(buffer);
              buffer = "";
              parseToken(interpolation);
            }
            if (index == strings.length - 1) {
              parseString(buffer);
            }
          };
        }
        const staticRules = rules = [];
        parseString(token);
        const activeGroupings = [...groupings];
        rules = [];
        return (interpolation) => {
          rules.push(...staticRules);
          groupings = [...activeGroupings];
          if (interpolation) {
            parseToken(interpolation);
          }
        };
      });
      staticsCaches.set(strings, statics);
    }
    return statics;
  };
  var parse = (tokens) => {
    groupings = [];
    rules = [];
    if (Array.isArray(tokens[0]) && Array.isArray(tokens[0].raw)) {
      buildStatics(tokens[0]).forEach((apply2, index) => apply2(tokens[index + 1]));
    } else {
      parseToken(tokens);
    }
    return rules;
  };
  var isFunctionFree;
  var detectFunction = (key, value) => {
    if (typeof value == "function") {
      isFunctionFree = false;
    }
    return value;
  };
  var stringify = (data) => {
    isFunctionFree = true;
    const key = JSON.stringify(data, detectFunction);
    return isFunctionFree && key;
  };
  var cacheByFactory = new WeakMap();
  var directive = (factory, data) => {
    const key = stringify(data);
    let directive2;
    if (key) {
      var cache = cacheByFactory.get(factory);
      if (!cache) {
        cacheByFactory.set(factory, cache = new Map());
      }
      directive2 = cache.get(key);
    }
    if (!directive2) {
      directive2 = Object.defineProperty((params, context) => {
        context = Array.isArray(params) ? context : params;
        return evalThunk(factory(data, context), context);
      }, "toJSON", {
        value: () => key || data
      });
      if (cache) {
        cache.set(key, directive2);
        ensureMaxSize(cache, 1e4);
      }
    }
    return directive2;
  };
  var applyFactory = (tokens, { css }) => css(parse(tokens));
  var apply = (...tokens) => directive(applyFactory, tokens);
  var positions = (resolve) => (value, position2, prefix, suffix) => {
    if (value) {
      const properties = position2 && resolve(position2);
      if (properties && properties.length > 0) {
        return properties.reduce((declarations, property2) => {
          declarations[joinTruthy([prefix, property2, suffix])] = value;
          return declarations;
        }, {});
      }
    }
  };
  var corners = /* @__PURE__ */ positions((key) => ({
    t: ["top-left", "top-right"],
    r: ["top-right", "bottom-right"],
    b: ["bottom-left", "bottom-right"],
    l: ["bottom-left", "top-left"],
    tl: ["top-left"],
    tr: ["top-right"],
    bl: ["bottom-left"],
    br: ["bottom-right"]
  })[key]);
  var expandEdges = (key) => {
    const parts = ({ x: "lr", y: "tb" }[key] || key || "").split("").sort();
    for (let index = parts.length; index--; ) {
      if (!(parts[index] = {
        t: "top",
        r: "right",
        b: "bottom",
        l: "left"
      }[parts[index]]))
        return;
    }
    if (parts.length)
      return parts;
  };
  var edges = /* @__PURE__ */ positions(expandEdges);
  var _;
  var __;
  var $;
  var toColumnsOrRows = (x) => x == "cols" ? "columns" : "rows";
  var property = (property2) => (params, context, id3) => ({
    [property2]: id3 + ((_ = join(params)) && "-" + _)
  });
  var propertyValue = (property2, separator) => (params, context, id3) => (_ = join(params, separator)) && {
    [property2 || id3]: _
  };
  var themeProperty = (section) => (params, { theme: theme2 }, id3) => (_ = theme2(section || id3, params)) && {
    [section || id3]: _
  };
  var themePropertyFallback = (section, separator) => (params, { theme: theme2 }, id3) => (_ = theme2(section || id3, params, join(params, separator))) && {
    [section || id3]: _
  };
  var alias = (handler, name) => (params, context) => handler(params, context, name);
  var display = property("display");
  var position = property("position");
  var textTransform = property("textTransform");
  var textDecoration = property("textDecoration");
  var fontStyle = property("fontStyle");
  var fontVariantNumeric = (key) => (params, context, id3) => ({
    ["--tw-" + key]: id3,
    fontVariantNumeric: "var(--tw-ordinal,/*!*/ /*!*/) var(--tw-slashed-zero,/*!*/ /*!*/) var(--tw-numeric-figure,/*!*/ /*!*/) var(--tw-numeric-spacing,/*!*/ /*!*/) var(--tw-numeric-fraction,/*!*/ /*!*/)"
  });
  var inset = (params, { theme: theme2 }, id3) => (_ = theme2("inset", params)) && { [id3]: _ };
  var opacityProperty = (params, theme2, id3, section = id3) => (_ = theme2(section + "Opacity", tail(params))) && {
    [`--tw-${id3}-opacity`]: _
  };
  var parseColorComponent = (chars, factor) => Math.round(parseInt(chars, 16) * factor);
  var asRGBA = (color, opacityProperty2, opacityDefault) => {
    if (color && color[0] == "#" && (_ = (color.length - 1) / 3) && ($ = [17, 1, 0.062272][_ - 1])) {
      return `rgba(${parseColorComponent(color.substr(1, _), $)},${parseColorComponent(color.substr(1 + _, _), $)},${parseColorComponent(color.substr(1 + 2 * _, _), $)},${opacityProperty2 ? `var(--tw-${opacityProperty2}${opacityDefault ? "," + opacityDefault : ""})` : opacityDefault || 1})`;
    }
    return color;
  };
  var withOpacityFallback = (property2, kind, color) => color && typeof color == "string" ? (_ = asRGBA(color, kind + "-opacity")) && _ !== color ? {
    [`--tw-${kind}-opacity`]: "1",
    [property2]: [color, _]
  } : { [property2]: color } : void 0;
  var transparentTo = (color) => ($ = asRGBA(color, "", "0")) == _ ? "transparent" : $;
  var reversableEdge = (params, { theme: theme2 }, id3, section, prefix, suffix) => (_ = { x: ["right", "left"], y: ["bottom", "top"] }[params[0]]) && ($ = `--tw-${id3}-${params[0]}-reverse`) ? params[1] == "reverse" ? {
    [$]: "1"
  } : {
    [$]: "0",
    [joinTruthy([prefix, _[0], suffix])]: (__ = theme2(section, tail(params))) && `calc(${__} * var(${$}))`,
    [joinTruthy([prefix, _[1], suffix])]: __ && [__, `calc(${__} * calc(1 - var(${$})))`]
  } : void 0;
  var placeHelper = (property2, params) => params[0] && {
    [property2]: (includes("wun", (params[0] || "")[3]) ? "space-" : "") + params[0]
  };
  var contentPluginFor = (property2) => (params) => includes(["start", "end"], params[0]) ? { [property2]: "flex-" + params[0] } : placeHelper(property2, params);
  var gridPlugin = (kind) => (params, { theme: theme2 }) => {
    if (_ = theme2("grid" + capitalize(kind), params, "")) {
      return { ["grid-" + kind]: _ };
    }
    switch (params[0]) {
      case "span":
        return params[1] && {
          ["grid-" + kind]: `span ${params[1]} / span ${params[1]}`
        };
      case "start":
      case "end":
        return (_ = theme2("grid" + capitalize(kind) + capitalize(params[0]), tail(params), join(tail(params)))) && {
          [`grid-${kind}-${params[0]}`]: _
        };
    }
  };
  var border = (params, { theme: theme2 }, id3) => {
    switch (params[0]) {
      case "solid":
      case "dashed":
      case "dotted":
      case "double":
      case "none":
        return propertyValue("borderStyle")(params);
      case "collapse":
      case "separate":
        return propertyValue("borderCollapse")(params);
      case "opacity":
        return opacityProperty(params, theme2, id3);
    }
    return (_ = theme2(id3 + "Width", params, "")) ? { borderWidth: _ } : withOpacityFallback("borderColor", id3, theme2(id3 + "Color", params));
  };
  var transform = (gpu) => (gpu ? "translate3d(var(--tw-translate-x,0),var(--tw-translate-y,0),0)" : "translateX(var(--tw-translate-x,0)) translateY(var(--tw-translate-y,0))") + " rotate(var(--tw-rotate,0)) skewX(var(--tw-skew-x,0)) skewY(var(--tw-skew-y,0)) scaleX(var(--tw-scale-x,1)) scaleY(var(--tw-scale-y,1))";
  var transformXYFunction = (params, context, id3) => params[0] && (_ = context.theme(id3, params[1] || params[0])) && {
    [`--tw-${id3}-x`]: params[0] !== "y" && _,
    [`--tw-${id3}-y`]: params[0] !== "x" && _,
    transform: [`${id3}${params[1] ? params[0].toUpperCase() : ""}(${_})`, transform()]
  };
  var edgesPluginFor = (key) => (params, context, id3) => id3[1] ? edges(context.theme(key, params), id3[1], key) : themeProperty(key)(params, context, id3);
  var padding = edgesPluginFor("padding");
  var margin = edgesPluginFor("margin");
  var minMax = (params, { theme: theme2 }, id3) => (_ = { w: "width", h: "height" }[params[0]]) && {
    [_ = `${id3}${capitalize(_)}`]: theme2(_, tail(params))
  };
  var filter = (params, { theme: theme2 }, id3) => {
    const parts = id3.split("-");
    const prefix = parts[0] == "backdrop" ? parts[0] + "-" : "";
    if (!prefix) {
      params.unshift(...parts);
    }
    if (params[0] == "filter") {
      const filters = [
        "blur",
        "brightness",
        "contrast",
        "grayscale",
        "hue-rotate",
        "invert",
        prefix && "opacity",
        "saturate",
        "sepia",
        !prefix && "drop-shadow"
      ].filter(Boolean);
      return params[1] == "none" ? { [prefix + "filter"]: "none" } : filters.reduce((css, key) => {
        css["--tw-" + prefix + key] = "var(--tw-empty,/*!*/ /*!*/)";
        return css;
      }, {
        [prefix + "filter"]: filters.map((key) => `var(--tw-${prefix}${key})`).join(" ")
      });
    }
    $ = params.shift();
    if (includes(["hue", "drop"], $))
      $ += capitalize(params.shift());
    return (_ = theme2(prefix ? "backdrop" + capitalize($) : $, params)) && {
      ["--tw-" + prefix + $]: (Array.isArray(_) ? _ : [_]).map((_4) => `${hyphenate($)}(${_4})`).join(" ")
    };
  };
  var corePlugins = {
    group: (params, { tag }, id3) => tag(join([id3, ...params])),
    hidden: alias(display, "none"),
    inline: display,
    block: display,
    contents: display,
    flow: display,
    table: (params, context, id3) => includes(["auto", "fixed"], params[0]) ? { tableLayout: params[0] } : display(params, context, id3),
    flex(params, context, id3) {
      switch (params[0]) {
        case "row":
        case "col":
          return {
            flexDirection: join(params[0] == "col" ? ["column", ...tail(params)] : params)
          };
        case "nowrap":
        case "wrap":
          return { flexWrap: join(params) };
        case "grow":
        case "shrink":
          _ = context.theme("flex" + capitalize(params[0]), tail(params), params[1] || 1);
          return _ != null && {
            ["flex-" + params[0]]: "" + _
          };
      }
      return (_ = context.theme("flex", params, "")) ? { flex: _ } : display(params, context, id3);
    },
    grid(params, context, id3) {
      switch (params[0]) {
        case "cols":
        case "rows":
          return (_ = context.theme("gridTemplate" + capitalize(toColumnsOrRows(params[0])), tail(params), params.length == 2 && Number(params[1]) ? `repeat(${params[1]},minmax(0,1fr))` : join(tail(params)))) && {
            ["gridTemplate-" + toColumnsOrRows(params[0])]: _
          };
        case "flow":
          return params.length > 1 && {
            gridAutoFlow: join(params[1] == "col" ? ["column", ...tail(params, 2)] : tail(params), " ")
          };
      }
      return display(params, context, id3);
    },
    auto: (params, { theme: theme2 }) => includes(["cols", "rows"], params[0]) && (_ = theme2("gridAuto" + capitalize(toColumnsOrRows(params[0])), tail(params), join(tail(params)))) && {
      ["gridAuto-" + toColumnsOrRows(params[0])]: _
    },
    static: position,
    fixed: position,
    absolute: position,
    relative: position,
    sticky: position,
    visible: { visibility: "visible" },
    invisible: { visibility: "hidden" },
    antialiased: {
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale"
    },
    "subpixel-antialiased": {
      WebkitFontSmoothing: "auto",
      MozOsxFontSmoothing: "auto"
    },
    truncate: {
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis"
    },
    "sr-only": {
      position: "absolute",
      width: "1px",
      height: "1px",
      padding: "0",
      margin: "-1px",
      overflow: "hidden",
      whiteSpace: "nowrap",
      clip: "rect(0,0,0,0)",
      borderWidth: "0"
    },
    "not-sr-only": {
      position: "static",
      width: "auto",
      height: "auto",
      padding: "0",
      margin: "0",
      overflow: "visible",
      whiteSpace: "normal",
      clip: "auto"
    },
    resize: (params) => ({
      resize: { x: "horizontal", y: "vertical" }[params[0]] || params[0] || "both"
    }),
    box: (params) => params[0] && { boxSizing: params[0] + "-box" },
    appearance: propertyValue(),
    cursor: themePropertyFallback(),
    float: propertyValue(),
    clear: propertyValue(),
    decoration: propertyValue("boxDecorationBreak"),
    isolate: { isolation: "isolate" },
    isolation: propertyValue(),
    "mix-blend": propertyValue("mixBlendMode"),
    top: inset,
    right: inset,
    bottom: inset,
    left: inset,
    inset: (params, { theme: theme2 }) => (_ = expandEdges(params[0])) ? edges(theme2("inset", tail(params)), params[0]) : (_ = theme2("inset", params)) && {
      top: _,
      right: _,
      bottom: _,
      left: _
    },
    underline: textDecoration,
    "line-through": textDecoration,
    "no-underline": alias(textDecoration, "none"),
    "text-underline": alias(textDecoration, "underline"),
    "text-no-underline": alias(textDecoration, "none"),
    "text-line-through": alias(textDecoration, "line-through"),
    uppercase: textTransform,
    lowercase: textTransform,
    capitalize: textTransform,
    "normal-case": alias(textTransform, "none"),
    "text-normal-case": alias(textTransform, "none"),
    italic: fontStyle,
    "not-italic": alias(fontStyle, "normal"),
    "font-italic": alias(fontStyle, "italic"),
    "font-not-italic": alias(fontStyle, "normal"),
    font: (params, context, id3) => (_ = context.theme("fontFamily", params, "")) ? { fontFamily: _ } : themeProperty("fontWeight")(params, context, id3),
    items: (params) => params[0] && {
      alignItems: includes(["start", "end"], params[0]) ? "flex-" + params[0] : join(params)
    },
    "justify-self": propertyValue(),
    "justify-items": propertyValue(),
    justify: contentPluginFor("justifyContent"),
    content: contentPluginFor("alignContent"),
    self: contentPluginFor("alignSelf"),
    place: (params) => params[0] && placeHelper("place-" + params[0], tail(params)),
    overscroll: (params) => params[0] && {
      ["overscrollBehavior" + (params[1] ? "-" + params[0] : "")]: params[1] || params[0]
    },
    col: gridPlugin("column"),
    row: gridPlugin("row"),
    duration: themeProperty("transitionDuration"),
    delay: themeProperty("transitionDelay"),
    tracking: themeProperty("letterSpacing"),
    leading: themeProperty("lineHeight"),
    z: themeProperty("zIndex"),
    opacity: themeProperty(),
    ease: themeProperty("transitionTimingFunction"),
    p: padding,
    py: padding,
    px: padding,
    pt: padding,
    pr: padding,
    pb: padding,
    pl: padding,
    m: margin,
    my: margin,
    mx: margin,
    mt: margin,
    mr: margin,
    mb: margin,
    ml: margin,
    w: themeProperty("width"),
    h: themeProperty("height"),
    min: minMax,
    max: minMax,
    fill: themeProperty(),
    order: themeProperty(),
    origin: themePropertyFallback("transformOrigin", " "),
    select: propertyValue("userSelect"),
    "pointer-events": propertyValue(),
    align: propertyValue("verticalAlign"),
    whitespace: propertyValue("whiteSpace"),
    "normal-nums": { fontVariantNumeric: "normal" },
    ordinal: fontVariantNumeric("ordinal"),
    "slashed-zero": fontVariantNumeric("slashed-zero"),
    "lining-nums": fontVariantNumeric("numeric-figure"),
    "oldstyle-nums": fontVariantNumeric("numeric-figure"),
    "proportional-nums": fontVariantNumeric("numeric-spacing"),
    "tabular-nums": fontVariantNumeric("numeric-spacing"),
    "diagonal-fractions": fontVariantNumeric("numeric-fraction"),
    "stacked-fractions": fontVariantNumeric("numeric-fraction"),
    overflow: (params, context, id3) => includes(["ellipsis", "clip"], params[0]) ? propertyValue("textOverflow")(params) : params[1] ? { ["overflow-" + params[0]]: params[1] } : propertyValue()(params, context, id3),
    transform: (params) => params[0] == "none" ? { transform: "none" } : {
      "--tw-translate-x": "0",
      "--tw-translate-y": "0",
      "--tw-rotate": "0",
      "--tw-skew-x": "0",
      "--tw-skew-y": "0",
      "--tw-scale-x": "1",
      "--tw-scale-y": "1",
      transform: transform(params[0] == "gpu")
    },
    rotate: (params, { theme: theme2 }) => (_ = theme2("rotate", params)) && {
      "--tw-rotate": _,
      transform: [`rotate(${_})`, transform()]
    },
    scale: transformXYFunction,
    translate: transformXYFunction,
    skew: transformXYFunction,
    gap: (params, context, id3) => (_ = { x: "column", y: "row" }[params[0]]) ? { [_ + "Gap"]: context.theme("gap", tail(params)) } : themeProperty("gap")(params, context, id3),
    stroke: (params, context, id3) => (_ = context.theme("stroke", params, "")) ? { stroke: _ } : themeProperty("strokeWidth")(params, context, id3),
    outline: (params, { theme: theme2 }) => (_ = theme2("outline", params)) && {
      outline: _[0],
      outlineOffset: _[1]
    },
    "break-normal": {
      wordBreak: "normal",
      overflowWrap: "normal"
    },
    "break-words": { overflowWrap: "break-word" },
    "break-all": { wordBreak: "break-all" },
    text(params, { theme: theme2 }, id3) {
      switch (params[0]) {
        case "left":
        case "center":
        case "right":
        case "justify":
          return { textAlign: params[0] };
        case "uppercase":
        case "lowercase":
        case "capitalize":
          return textTransform([], _, params[0]);
        case "opacity":
          return opacityProperty(params, theme2, id3);
      }
      const fontSize = theme2("fontSize", params, "");
      if (fontSize) {
        return typeof fontSize == "string" ? { fontSize } : {
          fontSize: fontSize[0],
          ...typeof fontSize[1] == "string" ? { lineHeight: fontSize[1] } : fontSize[1]
        };
      }
      return withOpacityFallback("color", "text", theme2("textColor", params));
    },
    bg(params, { theme: theme2 }, id3) {
      switch (params[0]) {
        case "fixed":
        case "local":
        case "scroll":
          return propertyValue("backgroundAttachment", ",")(params);
        case "bottom":
        case "center":
        case "left":
        case "right":
        case "top":
          return propertyValue("backgroundPosition", " ")(params);
        case "no":
          return params[1] == "repeat" && propertyValue("backgroundRepeat")(params);
        case "repeat":
          return includes("xy", params[1]) ? propertyValue("backgroundRepeat")(params) : { backgroundRepeat: params[1] || params[0] };
        case "opacity":
          return opacityProperty(params, theme2, id3, "background");
        case "clip":
        case "origin":
          return params[1] && {
            ["background-" + params[0]]: params[1] + (params[1] == "text" ? "" : "-box")
          };
        case "blend":
          return propertyValue("background-blend-mode")(tail(params));
        case "gradient":
          if (params[1] == "to" && (_ = expandEdges(params[2]))) {
            return {
              backgroundImage: `linear-gradient(to ${join(_, " ")},var(--tw-gradient-stops))`
            };
          }
      }
      return (_ = theme2("backgroundPosition", params, "")) ? { backgroundPosition: _ } : (_ = theme2("backgroundSize", params, "")) ? { backgroundSize: _ } : (_ = theme2("backgroundImage", params, "")) ? { backgroundImage: _ } : withOpacityFallback("backgroundColor", "bg", theme2("backgroundColor", params));
    },
    from: (params, { theme: theme2 }) => (_ = theme2("gradientColorStops", params)) && {
      "--tw-gradient-from": _,
      "--tw-gradient-stops": `var(--tw-gradient-from),var(--tw-gradient-to,${transparentTo(_)})`
    },
    via: (params, { theme: theme2 }) => (_ = theme2("gradientColorStops", params)) && {
      "--tw-gradient-stops": `var(--tw-gradient-from),${_},var(--tw-gradient-to,${transparentTo(_)})`
    },
    to: (params, { theme: theme2 }) => (_ = theme2("gradientColorStops", params)) && {
      "--tw-gradient-to": _
    },
    border: (params, context, id3) => expandEdges(params[0]) ? edges(context.theme("borderWidth", tail(params)), params[0], "border", "width") : border(params, context, id3),
    divide: (params, context, id3) => (_ = reversableEdge(params, context, id3, "divideWidth", "border", "width") || border(params, context, id3)) && {
      "&>:not([hidden])~:not([hidden])": _
    },
    space: (params, context, id3) => (_ = reversableEdge(params, context, id3, "space", "margin")) && {
      "&>:not([hidden])~:not([hidden])": _
    },
    placeholder: (params, { theme: theme2 }, id3) => (_ = params[0] == "opacity" ? opacityProperty(params, theme2, id3) : withOpacityFallback("color", "placeholder", theme2("placeholderColor", params))) && {
      "&::placeholder": _
    },
    shadow: (params, { theme: theme2 }) => (_ = theme2("boxShadow", params)) && {
      ":global": {
        "*": {
          "--tw-shadow": "0 0 transparent"
        }
      },
      "--tw-shadow": _ == "none" ? "0 0 transparent" : _,
      boxShadow: [
        _,
        `var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow)`
      ]
    },
    animate: (params, { theme: theme2, tag }) => {
      if ($ = theme2("animation", params)) {
        const parts = $.split(" ");
        if ((_ = theme2("keyframes", parts[0], __ = {})) !== __) {
          return ($ = tag(parts[0])) && {
            animation: $ + " " + join(tail(parts), " "),
            ["@keyframes " + $]: _
          };
        }
        return { animation: $ };
      }
    },
    ring(params, { theme: theme2 }, id3) {
      switch (params[0]) {
        case "inset":
          return { "--tw-ring-inset": "inset" };
        case "opacity":
          return opacityProperty(params, theme2, id3);
        case "offset":
          return (_ = theme2("ringOffsetWidth", tail(params), "")) ? {
            "--tw-ring-offset-width": _
          } : {
            "--tw-ring-offset-color": theme2("ringOffsetColor", tail(params))
          };
      }
      return (_ = theme2("ringWidth", params, "")) ? {
        "--tw-ring-offset-shadow": `var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)`,
        "--tw-ring-shadow": `var(--tw-ring-inset) 0 0 0 calc(${_} + var(--tw-ring-offset-width)) var(--tw-ring-color)`,
        boxShadow: `var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 transparent)`,
        ":global": {
          "*": {
            "--tw-ring-inset": "var(--tw-empty,/*!*/ /*!*/)",
            "--tw-ring-offset-width": theme2("ringOffsetWidth", "", "0px"),
            "--tw-ring-offset-color": theme2("ringOffsetColor", "", "#fff"),
            "--tw-ring-color": asRGBA(theme2("ringColor", "", "#93c5fd"), "ring-opacity", theme2("ringOpacity", "", "0.5")),
            "--tw-ring-offset-shadow": "0 0 transparent",
            "--tw-ring-shadow": "0 0 transparent"
          }
        }
      } : {
        "--tw-ring-opacity": "1",
        "--tw-ring-color": asRGBA(theme2("ringColor", params), "ring-opacity")
      };
    },
    object: (params, context, id3) => includes(["contain", "cover", "fill", "none", "scale-down"], join(params)) ? { objectFit: join(params) } : themePropertyFallback("objectPosition", " ")(params, context, id3),
    list: (params, context, id3) => join(params) == "item" ? display(params, context, id3) : includes(["inside", "outside"], join(params)) ? { listStylePosition: params[0] } : themePropertyFallback("listStyleType")(params, context, id3),
    rounded: (params, context, id3) => corners(context.theme("borderRadius", tail(params), ""), params[0], "border", "radius") || themeProperty("borderRadius")(params, context, id3),
    "transition-none": { transitionProperty: "none" },
    transition: (params, { theme: theme2 }) => ({
      transitionProperty: theme2("transitionProperty", params),
      transitionTimingFunction: theme2("transitionTimingFunction", ""),
      transitionDuration: theme2("transitionDuration", "")
    }),
    container: (params, { theme: theme2 }) => {
      const { screens = theme2("screens"), center, padding: padding2 } = theme2("container");
      const paddingFor = (screen) => (_ = padding2 && (typeof padding2 == "string" ? padding2 : padding2[screen] || padding2.DEFAULT)) ? {
        paddingRight: _,
        paddingLeft: _
      } : {};
      return Object.keys(screens).reduce((rules2, screen) => {
        if (($ = screens[screen]) && typeof $ == "string") {
          rules2[buildMediaQuery($)] = {
            "&": {
              "max-width": $,
              ...paddingFor(screen)
            }
          };
        }
        return rules2;
      }, {
        width: "100%",
        ...center ? { marginRight: "auto", marginLeft: "auto" } : {},
        ...paddingFor("xs")
      });
    },
    filter,
    blur: filter,
    brightness: filter,
    contrast: filter,
    grayscale: filter,
    "hue-rotate": filter,
    invert: filter,
    saturate: filter,
    sepia: filter,
    "drop-shadow": filter,
    backdrop: filter
  };
  var createPreflight = (theme2) => ({
    ":root": { tabSize: 4 },
    "body,blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre,fieldset,ol,ul": { margin: "0" },
    button: { backgroundColor: "transparent", backgroundImage: "none" },
    'button,[type="button"],[type="reset"],[type="submit"]': { WebkitAppearance: "button" },
    "button:focus": { outline: ["1px dotted", "5px auto -webkit-focus-ring-color"] },
    "fieldset,ol,ul,legend": { padding: "0" },
    "ol,ul": { listStyle: "none" },
    html: {
      lineHeight: "1.5",
      WebkitTextSizeAdjust: "100%",
      fontFamily: theme2("fontFamily.sans", "ui-sans-serif,system-ui,sans-serif")
    },
    body: { fontFamily: "inherit", lineHeight: "inherit" },
    "*,::before,::after": {
      boxSizing: "border-box",
      border: `0 solid ${theme2("borderColor.DEFAULT", "currentColor")}`
    },
    hr: { height: "0", color: "inherit", borderTopWidth: "1px" },
    img: { borderStyle: "solid" },
    textarea: { resize: "vertical" },
    "input::placeholder,textarea::placeholder": {
      opacity: "1",
      color: theme2("placeholderColor.DEFAULT", theme2("colors.gray.400", "#a1a1aa"))
    },
    'button,[role="button"]': { cursor: "pointer" },
    table: { textIndent: "0", borderColor: "inherit", borderCollapse: "collapse" },
    "h1,h2,h3,h4,h5,h6": { fontSize: "inherit", fontWeight: "inherit" },
    a: { color: "inherit", textDecoration: "inherit" },
    "button,input,optgroup,select,textarea": {
      fontFamily: "inherit",
      fontSize: "100%",
      margin: "0",
      padding: "0",
      lineHeight: "inherit",
      color: "inherit"
    },
    "button,select": { textTransform: "none" },
    "::-moz-focus-inner": { borderStyle: "none", padding: "0" },
    ":-moz-focusring": { outline: "1px dotted ButtonText" },
    ":-moz-ui-invalid": { boxShadow: "none" },
    progress: { verticalAlign: "baseline" },
    "::-webkit-inner-spin-button,::-webkit-outer-spin-button": { height: "auto" },
    '[type="search"]': { WebkitAppearance: "textfield", outlineOffset: "-2px" },
    "::-webkit-search-decoration": { WebkitAppearance: "none" },
    "::-webkit-file-upload-button": { WebkitAppearance: "button", font: "inherit" },
    summary: { display: "list-item" },
    "abbr[title]": { textDecoration: "underline dotted" },
    "b,strong": { fontWeight: "bolder" },
    "pre,code,kbd,samp": {
      fontFamily: theme2("fontFamily", "mono", "ui-monospace,monospace"),
      fontSize: "1em"
    },
    "sub,sup": { fontSize: "75%", lineHeight: "0", position: "relative", verticalAlign: "baseline" },
    sub: { bottom: "-0.25em" },
    sup: { top: "-0.5em" },
    "img,svg,video,canvas,audio,iframe,embed,object": { display: "block", verticalAlign: "middle" },
    "img,video": { maxWidth: "100%", height: "auto" }
  });
  var coreVariants = {
    dark: "@media (prefers-color-scheme:dark)",
    sticky: "@supports ((position: -webkit-sticky) or (position:sticky))",
    "motion-reduce": "@media (prefers-reduced-motion:reduce)",
    "motion-safe": "@media (prefers-reduced-motion:no-preference)",
    first: "&:first-child",
    last: "&:last-child",
    even: "&:nth-child(2n)",
    odd: "&:nth-child(odd)",
    children: "&>*",
    siblings: "&~*",
    sibling: "&+*",
    override: "&&"
  };
  var STYLE_ELEMENT_ID = "__twind";
  var getStyleElement = (nonce) => {
    let element = self[STYLE_ELEMENT_ID];
    if (!element) {
      element = document.head.appendChild(document.createElement("style"));
      element.id = STYLE_ELEMENT_ID;
      nonce && (element.nonce = nonce);
      element.appendChild(document.createTextNode(""));
    }
    return element;
  };
  var cssomSheet = ({
    nonce,
    target = getStyleElement(nonce).sheet
  } = {}) => {
    const offset = target.cssRules.length;
    return {
      target,
      insert: (rule, index) => target.insertRule(rule, offset + index)
    };
  };
  var voidSheet = () => ({
    target: null,
    insert: noop
  });
  var mode = (report) => ({
    unknown(section, key = [], optional, context) {
      if (!optional) {
        this.report({ id: "UNKNOWN_THEME_VALUE", key: section + "." + join(key) }, context);
      }
    },
    report({ id: id3, ...info }) {
      return report(`[${id3}] ${JSON.stringify(info)}`);
    }
  });
  var warn = /* @__PURE__ */ mode((message) => console.warn(message));
  var strict = /* @__PURE__ */ mode((message) => {
    throw new Error(message);
  });
  var silent = /* @__PURE__ */ mode(noop);
  var noprefix = (property2, value, important) => `${property2}:${value}${important ? " !important" : ""}`;
  var autoprefix = (property2, value, important) => {
    let cssText = "";
    const propertyAlias = r2(property2);
    if (propertyAlias)
      cssText += `${noprefix(propertyAlias, value, important)};`;
    let flags = a(property2);
    if (flags & 1)
      cssText += `-webkit-${noprefix(property2, value, important)};`;
    if (flags & 2)
      cssText += `-moz-${noprefix(property2, value, important)};`;
    if (flags & 4)
      cssText += `-ms-${noprefix(property2, value, important)};`;
    flags = t(property2, value);
    if (flags & 1)
      cssText += `${noprefix(property2, `-webkit-${value}`, important)};`;
    if (flags & 2)
      cssText += `${noprefix(property2, `-moz-${value}`, important)};`;
    if (flags & 4)
      cssText += `${noprefix(property2, `-ms-${value}`, important)};`;
    cssText += noprefix(property2, value, important);
    return cssText;
  };
  var ratios = (start, end) => {
    const result = {};
    do {
      for (let dividend = 1; dividend < start; dividend++) {
        result[`${dividend}/${start}`] = Number((dividend / start * 100).toFixed(6)) + "%";
      }
    } while (++start <= end);
    return result;
  };
  var exponential = (stop, unit, start = 0) => {
    const result = {};
    for (; start <= stop; start = start * 2 || 1) {
      result[start] = start + unit;
    }
    return result;
  };
  var linear = (stop, unit = "", divideBy = 1, start = 0, step = 1, result = {}) => {
    for (; start <= stop; start += step) {
      result[start] = start / divideBy + unit;
    }
    return result;
  };
  var alias2 = (section) => (theme2) => theme2(section);
  var defaultTheme = {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px"
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000",
      white: "#fff",
      gray: {
        50: "#f9fafb",
        100: "#f3f4f6",
        200: "#e5e7eb",
        300: "#d1d5db",
        400: "#9ca3af",
        500: "#6b7280",
        600: "#4b5563",
        700: "#374151",
        800: "#1f2937",
        900: "#111827"
      },
      red: {
        50: "#fef2f2",
        100: "#fee2e2",
        200: "#fecaca",
        300: "#fca5a5",
        400: "#f87171",
        500: "#ef4444",
        600: "#dc2626",
        700: "#b91c1c",
        800: "#991b1b",
        900: "#7f1d1d"
      },
      yellow: {
        50: "#fffbeb",
        100: "#fef3c7",
        200: "#fde68a",
        300: "#fcd34d",
        400: "#fbbf24",
        500: "#f59e0b",
        600: "#d97706",
        700: "#b45309",
        800: "#92400e",
        900: "#78350f"
      },
      green: {
        50: "#ecfdf5",
        100: "#d1fae5",
        200: "#a7f3d0",
        300: "#6ee7b7",
        400: "#34d399",
        500: "#10b981",
        600: "#059669",
        700: "#047857",
        800: "#065f46",
        900: "#064e3b"
      },
      blue: {
        50: "#eff6ff",
        100: "#dbeafe",
        200: "#bfdbfe",
        300: "#93c5fd",
        400: "#60a5fa",
        500: "#3b82f6",
        600: "#2563eb",
        700: "#1d4ed8",
        800: "#1e40af",
        900: "#1e3a8a"
      },
      indigo: {
        50: "#eef2ff",
        100: "#e0e7ff",
        200: "#c7d2fe",
        300: "#a5b4fc",
        400: "#818cf8",
        500: "#6366f1",
        600: "#4f46e5",
        700: "#4338ca",
        800: "#3730a3",
        900: "#312e81"
      },
      purple: {
        50: "#f5f3ff",
        100: "#ede9fe",
        200: "#ddd6fe",
        300: "#c4b5fd",
        400: "#a78bfa",
        500: "#8b5cf6",
        600: "#7c3aed",
        700: "#6d28d9",
        800: "#5b21b6",
        900: "#4c1d95"
      },
      pink: {
        50: "#fdf2f8",
        100: "#fce7f3",
        200: "#fbcfe8",
        300: "#f9a8d4",
        400: "#f472b6",
        500: "#ec4899",
        600: "#db2777",
        700: "#be185d",
        800: "#9d174d",
        900: "#831843"
      }
    },
    spacing: {
      px: "1px",
      0: "0px",
      .../* @__PURE__ */ linear(4, "rem", 4, 0.5, 0.5),
      .../* @__PURE__ */ linear(12, "rem", 4, 5),
      14: "3.5rem",
      .../* @__PURE__ */ linear(64, "rem", 4, 16, 4),
      72: "18rem",
      80: "20rem",
      96: "24rem"
    },
    durations: {
      75: "75ms",
      100: "100ms",
      150: "150ms",
      200: "200ms",
      300: "300ms",
      500: "500ms",
      700: "700ms",
      1e3: "1000ms"
    },
    animation: {
      none: "none",
      spin: "spin 1s linear infinite",
      ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
      pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      bounce: "bounce 1s infinite"
    },
    backdropBlur: /* @__PURE__ */ alias2("blur"),
    backdropBrightness: /* @__PURE__ */ alias2("brightness"),
    backdropContrast: /* @__PURE__ */ alias2("contrast"),
    backdropGrayscale: /* @__PURE__ */ alias2("grayscale"),
    backdropHueRotate: /* @__PURE__ */ alias2("hueRotate"),
    backdropInvert: /* @__PURE__ */ alias2("invert"),
    backdropOpacity: /* @__PURE__ */ alias2("opacity"),
    backdropSaturate: /* @__PURE__ */ alias2("saturate"),
    backdropSepia: /* @__PURE__ */ alias2("sepia"),
    backgroundColor: /* @__PURE__ */ alias2("colors"),
    backgroundImage: {
      none: "none"
    },
    backgroundOpacity: /* @__PURE__ */ alias2("opacity"),
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain"
    },
    blur: {
      0: "0",
      sm: "4px",
      DEFAULT: "8px",
      md: "12px",
      lg: "16px",
      xl: "24px",
      "2xl": "40px",
      "3xl": "64px"
    },
    brightness: {
      .../* @__PURE__ */ linear(200, "", 100, 0, 50),
      .../* @__PURE__ */ linear(110, "", 100, 90, 5),
      75: "0.75",
      125: "1.25"
    },
    borderColor: (theme2) => ({
      ...theme2("colors"),
      DEFAULT: theme2("colors.gray.200", "currentColor")
    }),
    borderOpacity: /* @__PURE__ */ alias2("opacity"),
    borderRadius: {
      none: "0px",
      sm: "0.125rem",
      DEFAULT: "0.25rem",
      md: "0.375rem",
      lg: "0.5rem",
      xl: "0.75rem",
      "2xl": "1rem",
      "3xl": "1.5rem",
      "1/2": "50%",
      full: "9999px"
    },
    borderWidth: {
      DEFAULT: "1px",
      .../* @__PURE__ */ exponential(8, "px")
    },
    boxShadow: {
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      DEFAULT: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
      none: "none"
    },
    contrast: {
      .../* @__PURE__ */ linear(200, "", 100, 0, 50),
      75: "0.75",
      125: "1.25"
    },
    divideColor: /* @__PURE__ */ alias2("borderColor"),
    divideOpacity: /* @__PURE__ */ alias2("borderOpacity"),
    divideWidth: /* @__PURE__ */ alias2("borderWidth"),
    dropShadow: {
      sm: "0 1px 1px rgba(0,0,0,0.05)",
      DEFAULT: ["0 1px 2px rgba(0, 0, 0, 0.1)", "0 1px 1px rgba(0, 0, 0, 0.06)"],
      md: ["0 4px 3px rgba(0, 0, 0, 0.07)", "0 2px 2px rgba(0, 0, 0, 0.06)"],
      lg: ["0 10px 8px rgba(0, 0, 0, 0.04)", "0 4px 3px rgba(0, 0, 0, 0.1)"],
      xl: ["0 20px 13px rgba(0, 0, 0, 0.03)", "0 8px 5px rgba(0, 0, 0, 0.08)"],
      "2xl": "0 25px 25px rgba(0, 0, 0, 0.15)",
      none: "0 0 #0000"
    },
    fill: { current: "currentColor" },
    grayscale: {
      0: "0",
      DEFAULT: "100%"
    },
    hueRotate: {
      0: "0deg",
      15: "15deg",
      30: "30deg",
      60: "60deg",
      90: "90deg",
      180: "180deg"
    },
    invert: {
      0: "0",
      DEFAULT: "100%"
    },
    flex: {
      1: "1 1 0%",
      auto: "1 1 auto",
      initial: "0 1 auto",
      none: "none"
    },
    fontFamily: {
      sans: 'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"'.split(","),
      serif: 'ui-serif,Georgia,Cambria,"Times New Roman",Times,serif'.split(","),
      mono: 'ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'.split(",")
    },
    fontSize: {
      xs: ["0.75rem", "1rem"],
      sm: ["0.875rem", "1.25rem"],
      base: ["1rem", "1.5rem"],
      lg: ["1.125rem", "1.75rem"],
      xl: ["1.25rem", "1.75rem"],
      "2xl": ["1.5rem", "2rem"],
      "3xl": ["1.875rem", "2.25rem"],
      "4xl": ["2.25rem", "2.5rem"],
      "5xl": ["3rem", "1"],
      "6xl": ["3.75rem", "1"],
      "7xl": ["4.5rem", "1"],
      "8xl": ["6rem", "1"],
      "9xl": ["8rem", "1"]
    },
    fontWeight: {
      thin: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      black: "900"
    },
    gridTemplateColumns: {},
    gridTemplateRows: {},
    gridAutoColumns: {
      min: "min-content",
      max: "max-content",
      fr: "minmax(0,1fr)"
    },
    gridAutoRows: {
      min: "min-content",
      max: "max-content",
      fr: "minmax(0,1fr)"
    },
    gridColumn: {
      auto: "auto",
      "span-full": "1 / -1"
    },
    gridRow: {
      auto: "auto",
      "span-full": "1 / -1"
    },
    gap: /* @__PURE__ */ alias2("spacing"),
    gradientColorStops: /* @__PURE__ */ alias2("colors"),
    height: (theme2) => ({
      auto: "auto",
      ...theme2("spacing"),
      ...ratios(2, 6),
      full: "100%",
      screen: "100vh"
    }),
    inset: (theme2) => ({
      auto: "auto",
      ...theme2("spacing"),
      ...ratios(2, 4),
      full: "100%"
    }),
    keyframes: {
      spin: {
        from: {
          transform: "rotate(0deg)"
        },
        to: {
          transform: "rotate(360deg)"
        }
      },
      ping: {
        "0%": {
          transform: "scale(1)",
          opacity: "1"
        },
        "75%,100%": {
          transform: "scale(2)",
          opacity: "0"
        }
      },
      pulse: {
        "0%,100%": {
          opacity: "1"
        },
        "50%": {
          opacity: ".5"
        }
      },
      bounce: {
        "0%, 100%": {
          transform: "translateY(-25%)",
          animationTimingFunction: "cubic-bezier(0.8,0,1,1)"
        },
        "50%": {
          transform: "none",
          animationTimingFunction: "cubic-bezier(0,0,0.2,1)"
        }
      }
    },
    letterSpacing: {
      tighter: "-0.05em",
      tight: "-0.025em",
      normal: "0em",
      wide: "0.025em",
      wider: "0.05em",
      widest: "0.1em"
    },
    lineHeight: {
      none: "1",
      tight: "1.25",
      snug: "1.375",
      normal: "1.5",
      relaxed: "1.625",
      loose: "2",
      .../* @__PURE__ */ linear(10, "rem", 4, 3)
    },
    margin: (theme2) => ({
      auto: "auto",
      ...theme2("spacing")
    }),
    maxHeight: (theme2) => ({
      ...theme2("spacing"),
      full: "100%",
      screen: "100vh"
    }),
    maxWidth: (theme2, { breakpoints }) => ({
      none: "none",
      0: "0rem",
      xs: "20rem",
      sm: "24rem",
      md: "28rem",
      lg: "32rem",
      xl: "36rem",
      "2xl": "42rem",
      "3xl": "48rem",
      "4xl": "56rem",
      "5xl": "64rem",
      "6xl": "72rem",
      "7xl": "80rem",
      full: "100%",
      min: "min-content",
      max: "max-content",
      prose: "65ch",
      ...breakpoints(theme2("screens"))
    }),
    minHeight: {
      0: "0px",
      full: "100%",
      screen: "100vh"
    },
    minWidth: {
      0: "0px",
      full: "100%",
      min: "min-content",
      max: "max-content"
    },
    opacity: {
      .../* @__PURE__ */ linear(100, "", 100, 0, 10),
      5: "0.05",
      25: "0.25",
      75: "0.75",
      95: "0.95"
    },
    order: {
      first: "-9999",
      last: "9999",
      none: "0",
      .../* @__PURE__ */ linear(12, "", 1, 1)
    },
    outline: {
      none: ["2px solid transparent", "2px"],
      white: ["2px dotted white", "2px"],
      black: ["2px dotted black", "2px"]
    },
    padding: /* @__PURE__ */ alias2("spacing"),
    placeholderColor: /* @__PURE__ */ alias2("colors"),
    placeholderOpacity: /* @__PURE__ */ alias2("opacity"),
    ringColor: (theme2) => ({
      DEFAULT: theme2("colors.blue.500", "#3b82f6"),
      ...theme2("colors")
    }),
    ringOffsetColor: /* @__PURE__ */ alias2("colors"),
    ringOffsetWidth: /* @__PURE__ */ exponential(8, "px"),
    ringOpacity: (theme2) => ({
      DEFAULT: "0.5",
      ...theme2("opacity")
    }),
    ringWidth: {
      DEFAULT: "3px",
      .../* @__PURE__ */ exponential(8, "px")
    },
    rotate: {
      .../* @__PURE__ */ exponential(2, "deg"),
      .../* @__PURE__ */ exponential(12, "deg", 3),
      .../* @__PURE__ */ exponential(180, "deg", 45)
    },
    saturate: /* @__PURE__ */ linear(200, "", 100, 0, 50),
    scale: {
      .../* @__PURE__ */ linear(150, "", 100, 0, 50),
      .../* @__PURE__ */ linear(110, "", 100, 90, 5),
      75: "0.75",
      125: "1.25"
    },
    sepia: {
      0: "0",
      DEFAULT: "100%"
    },
    skew: {
      .../* @__PURE__ */ exponential(2, "deg"),
      .../* @__PURE__ */ exponential(12, "deg", 3)
    },
    space: /* @__PURE__ */ alias2("spacing"),
    stroke: {
      current: "currentColor"
    },
    strokeWidth: /* @__PURE__ */ linear(2),
    textColor: /* @__PURE__ */ alias2("colors"),
    textOpacity: /* @__PURE__ */ alias2("opacity"),
    transitionDuration: (theme2) => ({
      DEFAULT: "150ms",
      ...theme2("durations")
    }),
    transitionDelay: /* @__PURE__ */ alias2("durations"),
    transitionProperty: {
      none: "none",
      all: "all",
      DEFAULT: "background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter",
      colors: "background-color,border-color,color,fill,stroke",
      opacity: "opacity",
      shadow: "box-shadow",
      transform: "transform"
    },
    transitionTimingFunction: {
      DEFAULT: "cubic-bezier(0.4,0,0.2,1)",
      linear: "linear",
      in: "cubic-bezier(0.4,0,1,1)",
      out: "cubic-bezier(0,0,0.2,1)",
      "in-out": "cubic-bezier(0.4,0,0.2,1)"
    },
    translate: (theme2) => ({
      ...theme2("spacing"),
      ...ratios(2, 4),
      full: "100%"
    }),
    width: (theme2) => ({
      auto: "auto",
      ...theme2("spacing"),
      ...ratios(2, 6),
      ...ratios(12, 12),
      screen: "100vw",
      full: "100%",
      min: "min-content",
      max: "max-content"
    }),
    zIndex: {
      auto: "auto",
      .../* @__PURE__ */ linear(50, "", 1, 0, 10)
    }
  };
  var flattenColorPalette = (colors, target = {}, prefix = []) => {
    Object.keys(colors).forEach((property2) => {
      const value = colors[property2];
      if (property2 == "DEFAULT") {
        target[join(prefix)] = value;
        target[join(prefix, ".")] = value;
      }
      const key = [...prefix, property2];
      target[join(key)] = value;
      target[join(key, ".")] = value;
      if (value && typeof value == "object") {
        flattenColorPalette(value, target, key);
      }
    }, target);
    return target;
  };
  var resolveContext = {
    negative: () => ({}),
    breakpoints: (screens) => Object.keys(screens).filter((key) => typeof screens[key] == "string").reduce((target, key) => {
      target["screen-" + key] = screens[key];
      return target;
    }, {})
  };
  var handleArbitraryValues = (section, key) => (key = key[0] == "[" && key.slice(-1) == "]" && key.slice(1, -1)) && includes(section, "olor") == /^(#|(hsl|rgb)a?\(|[a-z]+$)/.test(key) && (includes(key, "calc(") ? key.replace(/(-?\d*\.?\d(?!\b-.+[,)](?![^+\-/*])\D)(?:%|[a-z]+)?|\))([+\-/*])/g, "$1 $2 ") : key);
  var makeThemeResolver = (config) => {
    const cache = new Map();
    const theme2 = { ...defaultTheme, ...config };
    const deref = (theme3, section) => {
      const base = theme3 && theme3[section];
      const value = typeof base == "function" ? base(resolve, resolveContext) : base;
      return value && section == "colors" ? flattenColorPalette(value) : value;
    };
    const resolve = (section, key, defaultValue) => {
      const keypath = section.split(".");
      section = keypath[0];
      if (keypath.length > 1) {
        defaultValue = key;
        key = join(tail(keypath), ".");
      }
      let base = cache.get(section);
      if (!base) {
        cache.set(section, base = { ...deref(theme2, section) });
        Object.assign(base, deref(theme2.extend, section));
      }
      if (key != null) {
        key = (Array.isArray(key) ? join(key) : key) || "DEFAULT";
        const value = handleArbitraryValues(section, key) || base[key];
        return value == null ? defaultValue : Array.isArray(value) && !includes(["fontSize", "outline", "dropShadow"], section) ? join(value, ",") : value;
      }
      return base;
    };
    return resolve;
  };
  var translate = (plugins, context) => (rule, isTranslating) => {
    if (typeof rule.d == "function") {
      return rule.d(context);
    }
    const parameters = rule.d.split(/-(?![^[]*])/g);
    if (!isTranslating && parameters[0] == "tw" && rule.$ == rule.d) {
      return rule.$;
    }
    for (let index = parameters.length; index; index--) {
      const id3 = join(parameters.slice(0, index));
      const plugin = plugins[id3];
      if (plugin) {
        return typeof plugin == "function" ? plugin(tail(parameters, index), context, id3) : typeof plugin == "string" ? context[isTranslating ? "css" : "tw"](plugin) : plugin;
      }
    }
  };
  var _2;
  var GROUP_RE = /^:(group(?:(?!-focus).+?)*)-(.+)$/;
  var NOT_PREFIX_RE = /^(:not)-(.+)/;
  var prepareVariantSelector = (variant) => variant[1] == "[" ? tail(variant) : variant;
  var decorate = (darkMode, variants, { theme: theme2, tag }) => {
    const applyVariant = (translation, variant) => {
      if (_2 = theme2("screens", tail(variant), "")) {
        return { [buildMediaQuery(_2)]: translation };
      }
      if (variant == ":dark" && darkMode == "class") {
        return { ".dark &": translation };
      }
      if (_2 = GROUP_RE.exec(variant)) {
        return { [`.${escape(tag(_2[1]))}:${_2[2]} &`]: translation };
      }
      return {
        [variants[tail(variant)] || "&" + variant.replace(NOT_PREFIX_RE, (_4, not, variant2) => not + "(" + prepareVariantSelector(":" + variant2) + ")")]: translation
      };
    };
    return (translation, rule) => rule.v.reduceRight(applyVariant, translation);
  };
  var _3;
  var responsivePrecedence = (css) => (((_3 = /(?:^|min-width: *)(\d+(?:.\d+)?)(p)?/.exec(css)) ? +_3[1] / (_3[2] ? 15 : 1) / 10 : 0) & 31) << 22;
  var seperatorPrecedence = (string) => {
    _3 = 0;
    for (let index = string.length; index--; ) {
      _3 += includes("-:,", string[index]);
    }
    return _3;
  };
  var atRulePresedence = (css) => (seperatorPrecedence(css) & 15) << 18;
  var PRECEDENCES_BY_PSEUDO_CLASS = [
    "rst",
    "st",
    "en",
    "d",
    "nk",
    "sited",
    "pty",
    "ecked",
    "cus-w",
    "ver",
    "cus",
    "cus-v",
    "tive",
    "sable",
    "ad-on",
    "tiona",
    "quire"
  ];
  var pseudoPrecedence = (pseudoClass) => 1 << (~(_3 = PRECEDENCES_BY_PSEUDO_CLASS.indexOf(pseudoClass.replace(GROUP_RE, ":$2").slice(3, 8))) ? _3 : 17);
  var makeVariantPresedenceCalculator = (theme2, variants) => (presedence, variant) => presedence | ((_3 = theme2("screens", tail(variant), "")) ? 1 << 27 | responsivePrecedence(buildMediaQuery(_3)) : variant == ":dark" ? 1 << 30 : (_3 = variants[variant] || variant.replace(NOT_PREFIX_RE, ":$2"))[0] == "@" ? atRulePresedence(_3) : pseudoPrecedence(variant));
  var declarationPropertyPrecedence = (property2) => property2[0] == "-" ? 0 : seperatorPrecedence(property2) + ((_3 = /^(?:(border-(?!w|c|sty)|[tlbr].{2,4}m?$|c.{7}$)|([fl].{5}l|g.{8}$|pl))/.exec(property2)) ? +!!_3[1] || -!!_3[2] : 0) + 1;
  var stringifyBlock = (body, selector) => selector + "{" + body + "}";
  var serialize = (prefix, variants, context) => {
    const { theme: theme2, tag } = context;
    const tagVar = (_4, property2) => "--" + tag(property2);
    const tagVars = (value) => `${value}`.replace(/--(tw-[\w-]+)\b/g, tagVar);
    const stringifyDeclaration = (property2, value, important) => {
      property2 = tagVars(property2);
      return Array.isArray(value) ? join(value.filter(Boolean).map((value2) => prefix(property2, tagVars(value2), important)), ";") : prefix(property2, tagVars(value), important);
    };
    let rules2;
    const stringify3 = (atRules, selector, presedence, css, important) => {
      if (Array.isArray(css)) {
        css.forEach((css2) => css2 && stringify3(atRules, selector, presedence, css2, important));
        return;
      }
      let declarations = "";
      let maxPropertyPresedence = 0;
      let numberOfDeclarations = 0;
      if (css["@apply"]) {
        css = merge(evalThunk(apply(css["@apply"]), context), { ...css, "@apply": void 0 }, context);
      }
      Object.keys(css).forEach((key) => {
        const value = evalThunk(css[key], context);
        if (isCSSProperty(key, value)) {
          if (value !== "" && key.length > 1) {
            const property2 = hyphenate(key);
            numberOfDeclarations += 1;
            maxPropertyPresedence = Math.max(maxPropertyPresedence, declarationPropertyPrecedence(property2));
            declarations = (declarations && declarations + ";") + stringifyDeclaration(property2, value, important);
          }
        } else if (value) {
          if (key == ":global") {
            key = "@global";
          }
          if (key[0] == "@") {
            if (key[1] == "g") {
              stringify3([], "", 0, value, important);
            } else if (key[1] == "f") {
              stringify3([], key, 0, value, important);
            } else if (key[1] == "k") {
              const currentSize = rules2.length;
              stringify3([], "", 0, value, important);
              const waypoints = rules2.splice(currentSize, rules2.length - currentSize);
              rules2.push({
                r: stringifyBlock(join(waypoints.map((p) => p.r), ""), key),
                p: waypoints.reduce((sum, p) => sum + p.p, 0)
              });
            } else if (key[1] == "i") {
              (Array.isArray(value) ? value : [value]).forEach((value2) => value2 && rules2.push({ p: 0, r: `${key} ${value2};` }));
            } else {
              if (key[2] == "c") {
                key = buildMediaQuery(context.theme("screens", tail(key, 8).trim()));
              }
              stringify3([...atRules, key], selector, presedence | responsivePrecedence(key) | atRulePresedence(key), value, important);
            }
          } else {
            stringify3(atRules, selector ? join(selector.split(/,(?![^[]*])/g).map((selectorPart) => join(key.split(/,(?![^[]*])/g).map((keyPart) => includes(keyPart, "&") ? keyPart.replace(/&/g, selectorPart) : (selectorPart && selectorPart + " ") + keyPart), ",")), ",") : key, presedence, value, important);
          }
        }
      });
      if (numberOfDeclarations) {
        rules2.push({
          r: atRules.reduceRight(stringifyBlock, stringifyBlock(declarations, selector)),
          p: presedence * (1 << 8) + ((Math.max(0, 15 - numberOfDeclarations) & 15) << 4 | (maxPropertyPresedence || 15) & 15)
        });
      }
    };
    const variantPresedence = makeVariantPresedenceCalculator(theme2, variants);
    return (css, className, rule, layer = 0) => {
      layer <<= 28;
      rules2 = [];
      stringify3([], className ? "." + escape(className) : "", rule ? rule.v.reduceRight(variantPresedence, layer) : layer, css, rule && rule.i);
      return rules2;
    };
  };
  var inject = (sheet, mode2, init, context) => {
    let sortedPrecedences;
    init((value = []) => sortedPrecedences = value);
    let insertedRules;
    init((value = new Set()) => insertedRules = value);
    return ({ r: css, p: presedence }) => {
      if (!insertedRules.has(css)) {
        insertedRules.add(css);
        const index = sortedInsertionIndex(sortedPrecedences, presedence);
        try {
          sheet.insert(css, index);
          sortedPrecedences.splice(index, 0, presedence);
        } catch (error) {
          if (!/:-[mwo]/.test(css)) {
            mode2.report({ id: "INJECT_CSS_ERROR", css, error }, context);
          }
        }
      }
    };
  };
  var sanitize = (value, defaultValue, disabled, enabled = defaultValue) => value === false ? disabled : value === true ? enabled : value || defaultValue;
  var loadMode = (mode2) => (typeof mode2 == "string" ? { t: strict, a: warn, i: silent }[mode2[1]] : mode2) || warn;
  var stringifyVariant = (selector, variant) => selector + (variant[1] == ":" ? tail(variant, 2) + ":" : tail(variant)) + ":";
  var stringify2 = (rule, directive2 = rule.d) => typeof directive2 == "function" ? "" : rule.v.reduce(stringifyVariant, "") + (rule.i ? "!" : "") + (rule.n ? "-" : "") + directive2;
  var COMPONENT_PROPS = { _: { value: "", writable: true } };
  var configure = (config = {}) => {
    const theme2 = makeThemeResolver(config.theme);
    const mode2 = loadMode(config.mode);
    const hash = sanitize(config.hash, false, false, cyrb32);
    const important = config.important;
    let activeRule = { v: [] };
    let translateDepth = 0;
    const lastTranslations = [];
    const context = {
      tw: (...tokens) => process(tokens),
      theme: (section, key, defaultValue) => {
        var _a;
        const value = (_a = theme2(section, key, defaultValue)) != null ? _a : mode2.unknown(section, key == null || Array.isArray(key) ? key : key.split("."), defaultValue != null, context);
        return activeRule.n && value && includes("rg", (typeof value)[5]) ? `calc(${value} * -1)` : value;
      },
      tag: (value) => hash ? hash(value) : value,
      css: (rules2) => {
        translateDepth++;
        const lastTranslationsIndex = lastTranslations.length;
        try {
          ;
          (typeof rules2 == "string" ? parse([rules2]) : rules2).forEach(convert);
          const css = Object.create(null, COMPONENT_PROPS);
          for (let index = lastTranslationsIndex; index < lastTranslations.length; index++) {
            const translation = lastTranslations[index];
            if (translation) {
              switch (typeof translation) {
                case "object":
                  merge(css, translation, context);
                  break;
                case "string":
                  css._ += (css._ && " ") + translation;
              }
            }
          }
          return css;
        } finally {
          lastTranslations.length = lastTranslationsIndex;
          translateDepth--;
        }
      }
    };
    const translate2 = translate({ ...corePlugins, ...config.plugins }, context);
    const doTranslate = (rule) => {
      const parentRule = activeRule;
      activeRule = rule;
      try {
        return evalThunk(translate2(rule), context);
      } finally {
        activeRule = parentRule;
      }
    };
    const variants = { ...coreVariants, ...config.variants };
    const decorate2 = decorate(config.darkMode || "media", variants, context);
    const serialize2 = serialize(sanitize(config.prefix, autoprefix, noprefix), variants, context);
    const sheet = config.sheet || (typeof window == "undefined" ? voidSheet() : cssomSheet(config));
    const { init = (callback) => callback() } = sheet;
    const inject2 = inject(sheet, mode2, init, context);
    let idToClassName;
    init((value = new Map()) => idToClassName = value);
    const inlineDirectiveName = new WeakMap();
    const evaluateFunctions = (key, value) => key == "_" ? void 0 : typeof value == "function" ? JSON.stringify(evalThunk(value, context), evaluateFunctions) : value;
    const convert = (rule) => {
      if (!translateDepth && activeRule.v.length) {
        rule = { ...rule, v: [...activeRule.v, ...rule.v], $: "" };
      }
      if (!rule.$) {
        rule.$ = stringify2(rule, inlineDirectiveName.get(rule.d));
      }
      let className = translateDepth ? null : idToClassName.get(rule.$);
      if (className == null) {
        let translation = doTranslate(rule);
        if (!rule.$) {
          rule.$ = cyrb32(JSON.stringify(translation, evaluateFunctions));
          inlineDirectiveName.set(rule.d, rule.$);
          rule.$ = stringify2(rule, rule.$);
        }
        if (translation && typeof translation == "object") {
          rule.v = rule.v.map(prepareVariantSelector);
          if (important)
            rule.i = important;
          translation = decorate2(translation, rule);
          if (translateDepth) {
            lastTranslations.push(translation);
          } else {
            const layer = typeof rule.d == "function" ? typeof translation._ == "string" ? 1 : 3 : 2;
            className = hash || typeof rule.d == "function" ? (hash || cyrb32)(layer + rule.$) : rule.$;
            serialize2(translation, className, rule, layer).forEach(inject2);
            if (translation._) {
              className += " " + translation._;
            }
          }
        } else {
          if (typeof translation == "string") {
            className = translation;
          } else {
            className = rule.$;
            mode2.report({ id: "UNKNOWN_DIRECTIVE", rule: className }, context);
          }
          if (translateDepth && typeof rule.d !== "function") {
            lastTranslations.push(className);
          }
        }
        if (!translateDepth) {
          idToClassName.set(rule.$, className);
          ensureMaxSize(idToClassName, 3e4);
        }
      }
      return className;
    };
    const process = (tokens) => join(parse(tokens).map(convert).filter(Boolean), " ");
    const preflight = sanitize(config.preflight, identity, false);
    if (preflight) {
      const css = createPreflight(theme2);
      const styles = serialize2(typeof preflight == "function" ? evalThunk(preflight(css, context), context) || css : { ...css, ...preflight });
      init((injected = (styles.forEach(inject2), true)) => injected);
    }
    return {
      init: () => mode2.report({ id: "LATE_SETUP_CALL" }, context),
      process
    };
  };
  var create = (config) => {
    let process = (tokens) => {
      init();
      return process(tokens);
    };
    let init = (config2) => {
      ({ process, init } = configure(config2));
    };
    if (config)
      init(config);
    let context;
    const fromContext = (key) => () => {
      if (!context) {
        process([
          (_4) => {
            context = _4;
            return "";
          }
        ]);
      }
      return context[key];
    };
    return {
      tw: Object.defineProperties((...tokens) => process(tokens), {
        theme: {
          get: fromContext("theme")
        }
      }),
      setup: (config2) => init(config2)
    };
  };
  var { tw, setup } = /* @__PURE__ */ create();

  // deno:https://cdn.skypack.dev/-/@headlessui/react@v1.4.2-mh7FPxPyCGp06XS5o9S7/dist=es2019,mode=imports/optimized/@headlessui/react.js
  var { Fragment: Fragment3 } = react_default;
  var { isValidElement: isValidElement3 } = react_default;
  var { cloneElement: cloneElement2 } = react_default;
  var { createElement: createElement4 } = react_default;
  var { forwardRef: forwardRef3 } = react_default;
  var { useLayoutEffect: useLayoutEffect3 } = react_default;
  var { useEffect: useEffect3 } = react_default;
  var { useState: useState3 } = react_default;
  var { useContext: useContext3 } = react_default;
  var { createContext: createContext3 } = react_default;
  var { useCallback: useCallback4 } = react_default;
  var { useRef: useRef4 } = react_default;
  var { useMemo: useMemo3 } = react_default;
  var { useReducer: useReducer2 } = react_default;
  var { createRef: createRef2 } = react_default;
  var { createPortal: createPortal2 } = react_dom_default;
  function _extends3() {
    _extends3 = Object.assign || function(target) {
      for (var i2 = 1; i2 < arguments.length; i2++) {
        var source = arguments[i2];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends3.apply(this, arguments);
  }
  function _objectWithoutPropertiesLoose2(source, excluded) {
    if (source == null)
      return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i2;
    for (i2 = 0; i2 < sourceKeys.length; i2++) {
      key = sourceKeys[i2];
      if (excluded.indexOf(key) >= 0)
        continue;
      target[key] = source[key];
    }
    return target;
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o)
      return;
    if (typeof o === "string")
      return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor)
      n = o.constructor.name;
    if (n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++)
      arr2[i2] = arr[i2];
    return arr2;
  }
  function _createForOfIteratorHelperLoose(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it)
          o = it;
        var i2 = 0;
        return function() {
          if (i2 >= o.length)
            return {
              done: true
            };
          return {
            done: false,
            value: o[i2++]
          };
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    it = o[Symbol.iterator]();
    return it.next.bind(it);
  }
  function match(value, lookup) {
    if (value in lookup) {
      var returnValue = lookup[value];
      for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        args[_key - 2] = arguments[_key];
      }
      return typeof returnValue === "function" ? returnValue.apply(void 0, args) : returnValue;
    }
    var error = new Error('Tried to handle "' + value + '" but there is no handler defined. Only defined handlers are: ' + Object.keys(lookup).map(function(key) {
      return '"' + key + '"';
    }).join(", ") + ".");
    if (Error.captureStackTrace)
      Error.captureStackTrace(error, match);
    throw error;
  }
  var Features;
  (function(Features2) {
    Features2[Features2["None"] = 0] = "None";
    Features2[Features2["RenderStrategy"] = 1] = "RenderStrategy";
    Features2[Features2["Static"] = 2] = "Static";
  })(Features || (Features = {}));
  var RenderStrategy;
  (function(RenderStrategy2) {
    RenderStrategy2[RenderStrategy2["Unmount"] = 0] = "Unmount";
    RenderStrategy2[RenderStrategy2["Hidden"] = 1] = "Hidden";
  })(RenderStrategy || (RenderStrategy = {}));
  function render2(_ref) {
    var props = _ref.props, slot = _ref.slot, defaultTag = _ref.defaultTag, features = _ref.features, _ref$visible = _ref.visible, visible = _ref$visible === void 0 ? true : _ref$visible, name = _ref.name;
    if (visible)
      return _render(props, slot, defaultTag, name);
    var featureFlags = features != null ? features : Features.None;
    if (featureFlags & Features.Static) {
      var _props$static = props["static"], isStatic = _props$static === void 0 ? false : _props$static, rest = _objectWithoutPropertiesLoose2(props, ["static"]);
      if (isStatic)
        return _render(rest, slot, defaultTag, name);
    }
    if (featureFlags & Features.RenderStrategy) {
      var _match;
      var _props$unmount = props.unmount, unmount = _props$unmount === void 0 ? true : _props$unmount, _rest = _objectWithoutPropertiesLoose2(props, ["unmount"]);
      var strategy = unmount ? RenderStrategy.Unmount : RenderStrategy.Hidden;
      return match(strategy, (_match = {}, _match[RenderStrategy.Unmount] = function() {
        return null;
      }, _match[RenderStrategy.Hidden] = function() {
        return _render(_extends3({}, _rest, {
          hidden: true,
          style: {
            display: "none"
          }
        }), slot, defaultTag, name);
      }, _match));
    }
    return _render(props, slot, defaultTag, name);
  }
  function _render(props, slot, tag, name) {
    var _ref2;
    if (slot === void 0) {
      slot = {};
    }
    var _omit = omit(props, ["unmount", "static"]), _omit$as = _omit.as, Component2 = _omit$as === void 0 ? tag : _omit$as, children = _omit.children, _omit$refName = _omit.refName, refName = _omit$refName === void 0 ? "ref" : _omit$refName, passThroughProps = _objectWithoutPropertiesLoose2(_omit, ["as", "children", "refName"]);
    var refRelatedProps = props.ref !== void 0 ? (_ref2 = {}, _ref2[refName] = props.ref, _ref2) : {};
    var resolvedChildren = typeof children === "function" ? children(slot) : children;
    if (passThroughProps.className && typeof passThroughProps.className === "function") {
      passThroughProps.className = passThroughProps.className(slot);
    }
    if (Component2 === Fragment3) {
      if (Object.keys(passThroughProps).length > 0) {
        if (!isValidElement3(resolvedChildren) || Array.isArray(resolvedChildren) && resolvedChildren.length > 1) {
          throw new Error(['Passing props on "Fragment"!', "", "The current component <" + name + ' /> is rendering a "Fragment".', "However we need to passthrough the following props:", Object.keys(passThroughProps).map(function(line) {
            return "  - " + line;
          }).join("\n"), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map(function(line) {
            return "  - " + line;
          }).join("\n")].join("\n"));
        }
        return cloneElement2(resolvedChildren, Object.assign({}, mergeEventFunctions(compact(omit(passThroughProps, ["ref"])), resolvedChildren.props, ["onClick"]), refRelatedProps));
      }
    }
    return createElement4(Component2, Object.assign({}, omit(passThroughProps, ["ref"]), Component2 !== Fragment3 && refRelatedProps), resolvedChildren);
  }
  function mergeEventFunctions(passThroughProps, existingProps, functionsToMerge) {
    var clone = Object.assign({}, passThroughProps);
    var _loop = function _loop2() {
      var func = _step.value;
      if (passThroughProps[func] !== void 0 && existingProps[func] !== void 0) {
        var _Object$assign;
        Object.assign(clone, (_Object$assign = {}, _Object$assign[func] = function(event) {
          if (!event.defaultPrevented)
            passThroughProps[func](event);
          if (!event.defaultPrevented)
            existingProps[func](event);
        }, _Object$assign));
      }
    };
    for (var _iterator = _createForOfIteratorHelperLoose(functionsToMerge), _step; !(_step = _iterator()).done; ) {
      _loop();
    }
    return clone;
  }
  function forwardRefWithAs(component) {
    var _component$displayNam;
    return Object.assign(forwardRef3(component), {
      displayName: (_component$displayNam = component.displayName) != null ? _component$displayNam : component.name
    });
  }
  function compact(object) {
    var clone = Object.assign({}, object);
    for (var key in clone) {
      if (clone[key] === void 0)
        delete clone[key];
    }
    return clone;
  }
  function omit(object, keysToOmit) {
    if (keysToOmit === void 0) {
      keysToOmit = [];
    }
    var clone = Object.assign({}, object);
    for (var _iterator2 = _createForOfIteratorHelperLoose(keysToOmit), _step2; !(_step2 = _iterator2()).done; ) {
      var key = _step2.value;
      if (key in clone)
        delete clone[key];
    }
    return clone;
  }
  var useIsoMorphicEffect = typeof window !== "undefined" ? useLayoutEffect3 : useEffect3;
  var state = {
    serverHandoffComplete: false
  };
  function useServerHandoffComplete() {
    var _useState = useState3(state.serverHandoffComplete), serverHandoffComplete = _useState[0], setServerHandoffComplete = _useState[1];
    useEffect3(function() {
      if (serverHandoffComplete === true)
        return;
      setServerHandoffComplete(true);
    }, [serverHandoffComplete]);
    useEffect3(function() {
      if (state.serverHandoffComplete === false)
        state.serverHandoffComplete = true;
    }, []);
    return serverHandoffComplete;
  }
  var ForcePortalRootContext = /* @__PURE__ */ createContext3(false);
  function usePortalRoot() {
    return useContext3(ForcePortalRootContext);
  }
  function usePortalTarget() {
    var forceInRoot = usePortalRoot();
    var groupTarget = useContext3(PortalGroupContext);
    var _useState = useState3(function() {
      if (!forceInRoot && groupTarget !== null)
        return null;
      if (typeof window === "undefined")
        return null;
      var existingRoot = document.getElementById("headlessui-portal-root");
      if (existingRoot)
        return existingRoot;
      var root = document.createElement("div");
      root.setAttribute("id", "headlessui-portal-root");
      return document.body.appendChild(root);
    }), target = _useState[0], setTarget = _useState[1];
    useEffect3(function() {
      if (forceInRoot)
        return;
      if (groupTarget === null)
        return;
      setTarget(groupTarget.current);
    }, [groupTarget, setTarget, forceInRoot]);
    return target;
  }
  var DEFAULT_PORTAL_TAG = Fragment3;
  function Portal(props) {
    var passthroughProps = props;
    var target = usePortalTarget();
    var _useState2 = useState3(function() {
      return typeof window === "undefined" ? null : document.createElement("div");
    }), element = _useState2[0];
    var ready = useServerHandoffComplete();
    useIsoMorphicEffect(function() {
      if (!target)
        return;
      if (!element)
        return;
      target.appendChild(element);
      return function() {
        if (!target)
          return;
        if (!element)
          return;
        target.removeChild(element);
        if (target.childNodes.length <= 0) {
          var _target$parentElement;
          (_target$parentElement = target.parentElement) == null ? void 0 : _target$parentElement.removeChild(target);
        }
      };
    }, [target, element]);
    if (!ready)
      return null;
    return !target || !element ? null : createPortal2(render2({
      props: passthroughProps,
      defaultTag: DEFAULT_PORTAL_TAG,
      name: "Portal"
    }), element);
  }
  var DEFAULT_GROUP_TAG = Fragment3;
  var PortalGroupContext = /* @__PURE__ */ createContext3(null);
  function Group(props) {
    var target = props.target, passthroughProps = _objectWithoutPropertiesLoose2(props, ["target"]);
    return react_default.createElement(PortalGroupContext.Provider, {
      value: target
    }, render2({
      props: passthroughProps,
      defaultTag: DEFAULT_GROUP_TAG,
      name: "Popover.Group"
    }));
  }
  Portal.Group = Group;
  function useSyncRefs() {
    for (var _len = arguments.length, refs = new Array(_len), _key = 0; _key < _len; _key++) {
      refs[_key] = arguments[_key];
    }
    var cache = useRef4(refs);
    useEffect3(function() {
      cache.current = refs;
    }, [refs]);
    return useCallback4(function(value) {
      for (var _iterator = _createForOfIteratorHelperLoose(cache.current), _step; !(_step = _iterator()).done; ) {
        var ref = _step.value;
        if (ref == null)
          continue;
        if (typeof ref === "function")
          ref(value);
        else
          ref.current = value;
      }
    }, [cache]);
  }
  var Keys;
  (function(Keys2) {
    Keys2["Space"] = " ";
    Keys2["Enter"] = "Enter";
    Keys2["Escape"] = "Escape";
    Keys2["Backspace"] = "Backspace";
    Keys2["ArrowLeft"] = "ArrowLeft";
    Keys2["ArrowUp"] = "ArrowUp";
    Keys2["ArrowRight"] = "ArrowRight";
    Keys2["ArrowDown"] = "ArrowDown";
    Keys2["Home"] = "Home";
    Keys2["End"] = "End";
    Keys2["PageUp"] = "PageUp";
    Keys2["PageDown"] = "PageDown";
    Keys2["Tab"] = "Tab";
  })(Keys || (Keys = {}));
  function isDisabledReactIssue7711(element) {
    var _ref, _parent;
    var parent = element.parentElement;
    var legend = null;
    while (parent && !(parent instanceof HTMLFieldSetElement)) {
      if (parent instanceof HTMLLegendElement)
        legend = parent;
      parent = parent.parentElement;
    }
    var isParentDisabled = (_ref = ((_parent = parent) == null ? void 0 : _parent.getAttribute("disabled")) === "") != null ? _ref : false;
    if (isParentDisabled && isFirstLegend(legend))
      return false;
    return isParentDisabled;
  }
  function isFirstLegend(element) {
    if (!element)
      return false;
    var previous = element.previousElementSibling;
    while (previous !== null) {
      if (previous instanceof HTMLLegendElement)
        return false;
      previous = previous.previousElementSibling;
    }
    return true;
  }
  var id2 = 0;
  function generateId() {
    return ++id2;
  }
  function useId() {
    var ready = useServerHandoffComplete();
    var _useState = useState3(ready ? generateId : null), id22 = _useState[0], setId = _useState[1];
    useIsoMorphicEffect(function() {
      if (id22 === null)
        setId(generateId());
    }, [id22]);
    return id22 != null ? "" + id22 : void 0;
  }
  function useWindowEvent(type, listener, options) {
    var listenerRef = useRef4(listener);
    listenerRef.current = listener;
    useEffect3(function() {
      function handler(event) {
        listenerRef.current.call(window, event);
      }
      window.addEventListener(type, handler, options);
      return function() {
        return window.removeEventListener(type, handler, options);
      };
    }, [type, options]);
  }
  var focusableSelector = /* @__PURE__ */ ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map(function(selector) {
    return selector + ":not([tabindex='-1'])";
  }).join(",");
  var Focus;
  (function(Focus2) {
    Focus2[Focus2["First"] = 1] = "First";
    Focus2[Focus2["Previous"] = 2] = "Previous";
    Focus2[Focus2["Next"] = 4] = "Next";
    Focus2[Focus2["Last"] = 8] = "Last";
    Focus2[Focus2["WrapAround"] = 16] = "WrapAround";
    Focus2[Focus2["NoScroll"] = 32] = "NoScroll";
  })(Focus || (Focus = {}));
  var FocusResult;
  (function(FocusResult2) {
    FocusResult2[FocusResult2["Error"] = 0] = "Error";
    FocusResult2[FocusResult2["Overflow"] = 1] = "Overflow";
    FocusResult2[FocusResult2["Success"] = 2] = "Success";
    FocusResult2[FocusResult2["Underflow"] = 3] = "Underflow";
  })(FocusResult || (FocusResult = {}));
  var Direction;
  (function(Direction2) {
    Direction2[Direction2["Previous"] = -1] = "Previous";
    Direction2[Direction2["Next"] = 1] = "Next";
  })(Direction || (Direction = {}));
  function getFocusableElements(container) {
    if (container === void 0) {
      container = document.body;
    }
    if (container == null)
      return [];
    return Array.from(container.querySelectorAll(focusableSelector));
  }
  var FocusableMode;
  (function(FocusableMode2) {
    FocusableMode2[FocusableMode2["Strict"] = 0] = "Strict";
    FocusableMode2[FocusableMode2["Loose"] = 1] = "Loose";
  })(FocusableMode || (FocusableMode = {}));
  function isFocusableElement(element, mode2) {
    var _match;
    if (mode2 === void 0) {
      mode2 = FocusableMode.Strict;
    }
    if (element === document.body)
      return false;
    return match(mode2, (_match = {}, _match[FocusableMode.Strict] = function() {
      return element.matches(focusableSelector);
    }, _match[FocusableMode.Loose] = function() {
      var next = element;
      while (next !== null) {
        if (next.matches(focusableSelector))
          return true;
        next = next.parentElement;
      }
      return false;
    }, _match));
  }
  function focusIn(container, focus) {
    var elements = Array.isArray(container) ? container : getFocusableElements(container);
    var active = document.activeElement;
    var direction = function() {
      if (focus & (Focus.First | Focus.Next))
        return Direction.Next;
      if (focus & (Focus.Previous | Focus.Last))
        return Direction.Previous;
      throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
    }();
    var startIndex = function() {
      if (focus & Focus.First)
        return 0;
      if (focus & Focus.Previous)
        return Math.max(0, elements.indexOf(active)) - 1;
      if (focus & Focus.Next)
        return Math.max(0, elements.indexOf(active)) + 1;
      if (focus & Focus.Last)
        return elements.length - 1;
      throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
    }();
    var focusOptions = focus & Focus.NoScroll ? {
      preventScroll: true
    } : {};
    var offset = 0;
    var total = elements.length;
    var next = void 0;
    do {
      var _next;
      if (offset >= total || offset + total <= 0)
        return FocusResult.Error;
      var nextIdx = startIndex + offset;
      if (focus & Focus.WrapAround) {
        nextIdx = (nextIdx + total) % total;
      } else {
        if (nextIdx < 0)
          return FocusResult.Underflow;
        if (nextIdx >= total)
          return FocusResult.Overflow;
      }
      next = elements[nextIdx];
      (_next = next) == null ? void 0 : _next.focus(focusOptions);
      offset += direction;
    } while (next !== document.activeElement);
    if (!next.hasAttribute("tabindex"))
      next.setAttribute("tabindex", "0");
    return FocusResult.Success;
  }
  function useIsMounted() {
    var mounted = useRef4(false);
    useEffect3(function() {
      mounted.current = true;
      return function() {
        mounted.current = false;
      };
    }, []);
    return mounted;
  }
  var Features$1;
  (function(Features2) {
    Features2[Features2["None"] = 1] = "None";
    Features2[Features2["InitialFocus"] = 2] = "InitialFocus";
    Features2[Features2["TabLock"] = 4] = "TabLock";
    Features2[Features2["FocusLock"] = 8] = "FocusLock";
    Features2[Features2["RestoreFocus"] = 16] = "RestoreFocus";
    Features2[Features2["All"] = 30] = "All";
  })(Features$1 || (Features$1 = {}));
  var DescriptionContext = /* @__PURE__ */ createContext3(null);
  function useDescriptionContext() {
    var context = useContext3(DescriptionContext);
    if (context === null) {
      var err = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
      if (Error.captureStackTrace)
        Error.captureStackTrace(err, useDescriptionContext);
      throw err;
    }
    return context;
  }
  function useDescriptions() {
    var _useState = useState3([]), descriptionIds = _useState[0], setDescriptionIds = _useState[1];
    return [
      descriptionIds.length > 0 ? descriptionIds.join(" ") : void 0,
      useMemo3(function() {
        return function DescriptionProvider(props) {
          var register = useCallback4(function(value) {
            setDescriptionIds(function(existing) {
              return [].concat(existing, [value]);
            });
            return function() {
              return setDescriptionIds(function(existing) {
                var clone = existing.slice();
                var idx = clone.indexOf(value);
                if (idx !== -1)
                  clone.splice(idx, 1);
                return clone;
              });
            };
          }, []);
          var contextBag = useMemo3(function() {
            return {
              register,
              slot: props.slot,
              name: props.name,
              props: props.props
            };
          }, [register, props.slot, props.name, props.props]);
          return react_default.createElement(DescriptionContext.Provider, {
            value: contextBag
          }, props.children);
        };
      }, [setDescriptionIds])
    ];
  }
  var DEFAULT_DESCRIPTION_TAG = "p";
  function Description(props) {
    var context = useDescriptionContext();
    var id22 = "headlessui-description-" + useId();
    useIsoMorphicEffect(function() {
      return context.register(id22);
    }, [id22, context.register]);
    var passThroughProps = props;
    var propsWeControl = _extends3({}, context.props, {
      id: id22
    });
    return render2({
      props: _extends3({}, passThroughProps, propsWeControl),
      slot: context.slot || {},
      defaultTag: DEFAULT_DESCRIPTION_TAG,
      name: context.name || "Description"
    });
  }
  var Context = /* @__PURE__ */ createContext3(null);
  Context.displayName = "OpenClosedContext";
  var State;
  (function(State2) {
    State2[State2["Open"] = 0] = "Open";
    State2[State2["Closed"] = 1] = "Closed";
  })(State || (State = {}));
  function useOpenClosed() {
    return useContext3(Context);
  }
  function OpenClosedProvider(_ref) {
    var value = _ref.value, children = _ref.children;
    return react_default.createElement(Context.Provider, {
      value
    }, children);
  }
  var StackContext = /* @__PURE__ */ createContext3(function() {
  });
  StackContext.displayName = "StackContext";
  var StackMessage;
  (function(StackMessage2) {
    StackMessage2[StackMessage2["Add"] = 0] = "Add";
    StackMessage2[StackMessage2["Remove"] = 1] = "Remove";
  })(StackMessage || (StackMessage = {}));
  var _reducers;
  var DialogStates;
  (function(DialogStates2) {
    DialogStates2[DialogStates2["Open"] = 0] = "Open";
    DialogStates2[DialogStates2["Closed"] = 1] = "Closed";
  })(DialogStates || (DialogStates = {}));
  var ActionTypes;
  (function(ActionTypes2) {
    ActionTypes2[ActionTypes2["SetTitleId"] = 0] = "SetTitleId";
  })(ActionTypes || (ActionTypes = {}));
  var reducers = (_reducers = {}, _reducers[ActionTypes.SetTitleId] = function(state2, action) {
    if (state2.titleId === action.id)
      return state2;
    return _extends3({}, state2, {
      titleId: action.id
    });
  }, _reducers);
  var DialogContext = /* @__PURE__ */ createContext3(null);
  DialogContext.displayName = "DialogContext";
  var DialogRenderFeatures = Features.RenderStrategy | Features.Static;
  function resolveType(props) {
    var _props$as;
    if (props.type)
      return props.type;
    var tag = (_props$as = props.as) != null ? _props$as : "button";
    if (typeof tag === "string" && tag.toLowerCase() === "button")
      return "button";
    return void 0;
  }
  function useResolveButtonType(props, ref) {
    var _useState = useState3(function() {
      return resolveType(props);
    }), type = _useState[0], setType = _useState[1];
    useIsoMorphicEffect(function() {
      setType(resolveType(props));
    }, [props.type, props.as]);
    useIsoMorphicEffect(function() {
      if (type)
        return;
      if (!ref.current)
        return;
      if (ref.current instanceof HTMLButtonElement && !ref.current.hasAttribute("type")) {
        setType("button");
      }
    }, [type, ref]);
    return type;
  }
  var _reducers$1;
  var DisclosureStates;
  (function(DisclosureStates2) {
    DisclosureStates2[DisclosureStates2["Open"] = 0] = "Open";
    DisclosureStates2[DisclosureStates2["Closed"] = 1] = "Closed";
  })(DisclosureStates || (DisclosureStates = {}));
  var ActionTypes$1;
  (function(ActionTypes2) {
    ActionTypes2[ActionTypes2["ToggleDisclosure"] = 0] = "ToggleDisclosure";
    ActionTypes2[ActionTypes2["CloseDisclosure"] = 1] = "CloseDisclosure";
    ActionTypes2[ActionTypes2["SetButtonId"] = 2] = "SetButtonId";
    ActionTypes2[ActionTypes2["SetPanelId"] = 3] = "SetPanelId";
    ActionTypes2[ActionTypes2["LinkPanel"] = 4] = "LinkPanel";
    ActionTypes2[ActionTypes2["UnlinkPanel"] = 5] = "UnlinkPanel";
  })(ActionTypes$1 || (ActionTypes$1 = {}));
  var reducers$1 = (_reducers$1 = {}, _reducers$1[ActionTypes$1.ToggleDisclosure] = function(state2) {
    var _match;
    return _extends3({}, state2, {
      disclosureState: match(state2.disclosureState, (_match = {}, _match[DisclosureStates.Open] = DisclosureStates.Closed, _match[DisclosureStates.Closed] = DisclosureStates.Open, _match))
    });
  }, _reducers$1[ActionTypes$1.CloseDisclosure] = function(state2) {
    if (state2.disclosureState === DisclosureStates.Closed)
      return state2;
    return _extends3({}, state2, {
      disclosureState: DisclosureStates.Closed
    });
  }, _reducers$1[ActionTypes$1.LinkPanel] = function(state2) {
    if (state2.linkedPanel === true)
      return state2;
    return _extends3({}, state2, {
      linkedPanel: true
    });
  }, _reducers$1[ActionTypes$1.UnlinkPanel] = function(state2) {
    if (state2.linkedPanel === false)
      return state2;
    return _extends3({}, state2, {
      linkedPanel: false
    });
  }, _reducers$1[ActionTypes$1.SetButtonId] = function(state2, action) {
    if (state2.buttonId === action.buttonId)
      return state2;
    return _extends3({}, state2, {
      buttonId: action.buttonId
    });
  }, _reducers$1[ActionTypes$1.SetPanelId] = function(state2, action) {
    if (state2.panelId === action.panelId)
      return state2;
    return _extends3({}, state2, {
      panelId: action.panelId
    });
  }, _reducers$1);
  var DisclosureContext = /* @__PURE__ */ createContext3(null);
  DisclosureContext.displayName = "DisclosureContext";
  function useDisclosureContext(component) {
    var context = useContext3(DisclosureContext);
    if (context === null) {
      var err = new Error("<" + component + " /> is missing a parent <" + Disclosure.name + " /> component.");
      if (Error.captureStackTrace)
        Error.captureStackTrace(err, useDisclosureContext);
      throw err;
    }
    return context;
  }
  var DisclosureAPIContext = /* @__PURE__ */ createContext3(null);
  DisclosureAPIContext.displayName = "DisclosureAPIContext";
  function useDisclosureAPIContext(component) {
    var context = useContext3(DisclosureAPIContext);
    if (context === null) {
      var err = new Error("<" + component + " /> is missing a parent <" + Disclosure.name + " /> component.");
      if (Error.captureStackTrace)
        Error.captureStackTrace(err, useDisclosureAPIContext);
      throw err;
    }
    return context;
  }
  var DisclosurePanelContext = /* @__PURE__ */ createContext3(null);
  DisclosurePanelContext.displayName = "DisclosurePanelContext";
  function useDisclosurePanelContext() {
    return useContext3(DisclosurePanelContext);
  }
  function stateReducer$1(state2, action) {
    return match(action.type, reducers$1, state2, action);
  }
  var DEFAULT_DISCLOSURE_TAG = Fragment3;
  function Disclosure(props) {
    var _match2;
    var _props$defaultOpen = props.defaultOpen, defaultOpen = _props$defaultOpen === void 0 ? false : _props$defaultOpen, passthroughProps = _objectWithoutPropertiesLoose2(props, ["defaultOpen"]);
    var buttonId = "headlessui-disclosure-button-" + useId();
    var panelId = "headlessui-disclosure-panel-" + useId();
    var reducerBag = useReducer2(stateReducer$1, {
      disclosureState: defaultOpen ? DisclosureStates.Open : DisclosureStates.Closed,
      linkedPanel: false,
      buttonId,
      panelId
    });
    var disclosureState = reducerBag[0].disclosureState, dispatch = reducerBag[1];
    useEffect3(function() {
      return dispatch({
        type: ActionTypes$1.SetButtonId,
        buttonId
      });
    }, [buttonId, dispatch]);
    useEffect3(function() {
      return dispatch({
        type: ActionTypes$1.SetPanelId,
        panelId
      });
    }, [panelId, dispatch]);
    var close = useCallback4(function(focusableElement) {
      dispatch({
        type: ActionTypes$1.CloseDisclosure
      });
      var restoreElement = function() {
        if (!focusableElement)
          return document.getElementById(buttonId);
        if (focusableElement instanceof HTMLElement)
          return focusableElement;
        if (focusableElement.current instanceof HTMLElement)
          return focusableElement.current;
        return document.getElementById(buttonId);
      }();
      restoreElement == null ? void 0 : restoreElement.focus();
    }, [dispatch, buttonId]);
    var api = useMemo3(function() {
      return {
        close
      };
    }, [close]);
    var slot = useMemo3(function() {
      return {
        open: disclosureState === DisclosureStates.Open,
        close
      };
    }, [disclosureState, close]);
    return react_default.createElement(DisclosureContext.Provider, {
      value: reducerBag
    }, react_default.createElement(DisclosureAPIContext.Provider, {
      value: api
    }, react_default.createElement(OpenClosedProvider, {
      value: match(disclosureState, (_match2 = {}, _match2[DisclosureStates.Open] = State.Open, _match2[DisclosureStates.Closed] = State.Closed, _match2))
    }, render2({
      props: passthroughProps,
      slot,
      defaultTag: DEFAULT_DISCLOSURE_TAG,
      name: "Disclosure"
    }))));
  }
  var DEFAULT_BUTTON_TAG = "button";
  var Button = /* @__PURE__ */ forwardRefWithAs(function Button2(props, ref) {
    var _useDisclosureContext = useDisclosureContext([Disclosure.name, Button2.name].join(".")), state2 = _useDisclosureContext[0], dispatch = _useDisclosureContext[1];
    var internalButtonRef = useRef4(null);
    var buttonRef = useSyncRefs(internalButtonRef, ref);
    var panelContext = useDisclosurePanelContext();
    var isWithinPanel = panelContext === null ? false : panelContext === state2.panelId;
    var handleKeyDown = useCallback4(function(event) {
      var _document$getElementB;
      if (isWithinPanel) {
        if (state2.disclosureState === DisclosureStates.Closed)
          return;
        switch (event.key) {
          case Keys.Space:
          case Keys.Enter:
            event.preventDefault();
            event.stopPropagation();
            dispatch({
              type: ActionTypes$1.ToggleDisclosure
            });
            (_document$getElementB = document.getElementById(state2.buttonId)) == null ? void 0 : _document$getElementB.focus();
            break;
        }
      } else {
        switch (event.key) {
          case Keys.Space:
          case Keys.Enter:
            event.preventDefault();
            event.stopPropagation();
            dispatch({
              type: ActionTypes$1.ToggleDisclosure
            });
            break;
        }
      }
    }, [dispatch, isWithinPanel, state2.disclosureState]);
    var handleKeyUp = useCallback4(function(event) {
      switch (event.key) {
        case Keys.Space:
          event.preventDefault();
          break;
      }
    }, []);
    var handleClick = useCallback4(function(event) {
      if (isDisabledReactIssue7711(event.currentTarget))
        return;
      if (props.disabled)
        return;
      if (isWithinPanel) {
        var _document$getElementB2;
        dispatch({
          type: ActionTypes$1.ToggleDisclosure
        });
        (_document$getElementB2 = document.getElementById(state2.buttonId)) == null ? void 0 : _document$getElementB2.focus();
      } else {
        dispatch({
          type: ActionTypes$1.ToggleDisclosure
        });
      }
    }, [dispatch, props.disabled, state2.buttonId, isWithinPanel]);
    var slot = useMemo3(function() {
      return {
        open: state2.disclosureState === DisclosureStates.Open
      };
    }, [state2]);
    var type = useResolveButtonType(props, internalButtonRef);
    var passthroughProps = props;
    var propsWeControl = isWithinPanel ? {
      ref: buttonRef,
      type,
      onKeyDown: handleKeyDown,
      onClick: handleClick
    } : {
      ref: buttonRef,
      id: state2.buttonId,
      type,
      "aria-expanded": props.disabled ? void 0 : state2.disclosureState === DisclosureStates.Open,
      "aria-controls": state2.linkedPanel ? state2.panelId : void 0,
      onKeyDown: handleKeyDown,
      onKeyUp: handleKeyUp,
      onClick: handleClick
    };
    return render2({
      props: _extends3({}, passthroughProps, propsWeControl),
      slot,
      defaultTag: DEFAULT_BUTTON_TAG,
      name: "Disclosure.Button"
    });
  });
  var DEFAULT_PANEL_TAG = "div";
  var PanelRenderFeatures = Features.RenderStrategy | Features.Static;
  var Panel = /* @__PURE__ */ forwardRefWithAs(function Panel2(props, ref) {
    var _useDisclosureContext2 = useDisclosureContext([Disclosure.name, Panel2.name].join(".")), state2 = _useDisclosureContext2[0], dispatch = _useDisclosureContext2[1];
    var _useDisclosureAPICont = useDisclosureAPIContext([Disclosure.name, Panel2.name].join(".")), close = _useDisclosureAPICont.close;
    var panelRef = useSyncRefs(ref, function() {
      if (state2.linkedPanel)
        return;
      dispatch({
        type: ActionTypes$1.LinkPanel
      });
    });
    var usesOpenClosedState = useOpenClosed();
    var visible = function() {
      if (usesOpenClosedState !== null) {
        return usesOpenClosedState === State.Open;
      }
      return state2.disclosureState === DisclosureStates.Open;
    }();
    useEffect3(function() {
      return function() {
        return dispatch({
          type: ActionTypes$1.UnlinkPanel
        });
      };
    }, [dispatch]);
    useEffect3(function() {
      var _props$unmount;
      if (state2.disclosureState === DisclosureStates.Closed && ((_props$unmount = props.unmount) != null ? _props$unmount : true)) {
        dispatch({
          type: ActionTypes$1.UnlinkPanel
        });
      }
    }, [state2.disclosureState, props.unmount, dispatch]);
    var slot = useMemo3(function() {
      return {
        open: state2.disclosureState === DisclosureStates.Open,
        close
      };
    }, [state2, close]);
    var propsWeControl = {
      ref: panelRef,
      id: state2.panelId
    };
    var passthroughProps = props;
    return react_default.createElement(DisclosurePanelContext.Provider, {
      value: state2.panelId
    }, render2({
      props: _extends3({}, passthroughProps, propsWeControl),
      slot,
      defaultTag: DEFAULT_PANEL_TAG,
      features: PanelRenderFeatures,
      visible,
      name: "Disclosure.Panel"
    }));
  });
  Disclosure.Button = Button;
  Disclosure.Panel = Panel;
  function disposables() {
    var disposables2 = [];
    var api = {
      requestAnimationFrame: function(_requestAnimationFrame) {
        function requestAnimationFrame2() {
          return _requestAnimationFrame.apply(this, arguments);
        }
        requestAnimationFrame2.toString = function() {
          return _requestAnimationFrame.toString();
        };
        return requestAnimationFrame2;
      }(function() {
        var raf = requestAnimationFrame.apply(void 0, arguments);
        api.add(function() {
          return cancelAnimationFrame(raf);
        });
      }),
      nextFrame: function nextFrame() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        api.requestAnimationFrame(function() {
          api.requestAnimationFrame.apply(api, args);
        });
      },
      setTimeout: function(_setTimeout) {
        function setTimeout2() {
          return _setTimeout.apply(this, arguments);
        }
        setTimeout2.toString = function() {
          return _setTimeout.toString();
        };
        return setTimeout2;
      }(function() {
        var timer = setTimeout.apply(void 0, arguments);
        api.add(function() {
          return clearTimeout(timer);
        });
      }),
      add: function add(cb2) {
        disposables2.push(cb2);
      },
      dispose: function dispose() {
        for (var _iterator = _createForOfIteratorHelperLoose(disposables2.splice(0)), _step; !(_step = _iterator()).done; ) {
          var dispose2 = _step.value;
          dispose2();
        }
      }
    };
    return api;
  }
  function useDisposables() {
    var _useState = useState3(disposables), d = _useState[0];
    useEffect3(function() {
      return function() {
        return d.dispose();
      };
    }, [d]);
    return d;
  }
  function useComputed(cb2, dependencies) {
    var _useState = useState3(cb2), value = _useState[0], setValue = _useState[1];
    var cbRef = useRef4(cb2);
    useIsoMorphicEffect(function() {
      cbRef.current = cb2;
    }, [cb2]);
    useIsoMorphicEffect(function() {
      return setValue(cbRef.current);
    }, [cbRef, setValue].concat(dependencies));
    return value;
  }
  function assertNever(x) {
    throw new Error("Unexpected object: " + x);
  }
  var Focus$1;
  (function(Focus2) {
    Focus2[Focus2["First"] = 0] = "First";
    Focus2[Focus2["Previous"] = 1] = "Previous";
    Focus2[Focus2["Next"] = 2] = "Next";
    Focus2[Focus2["Last"] = 3] = "Last";
    Focus2[Focus2["Specific"] = 4] = "Specific";
    Focus2[Focus2["Nothing"] = 5] = "Nothing";
  })(Focus$1 || (Focus$1 = {}));
  function calculateActiveIndex(action, resolvers) {
    var items = resolvers.resolveItems();
    if (items.length <= 0)
      return null;
    var currentActiveIndex = resolvers.resolveActiveIndex();
    var activeIndex = currentActiveIndex != null ? currentActiveIndex : -1;
    var nextActiveIndex = function() {
      switch (action.focus) {
        case Focus$1.First:
          return items.findIndex(function(item) {
            return !resolvers.resolveDisabled(item);
          });
        case Focus$1.Previous: {
          var idx = items.slice().reverse().findIndex(function(item, idx2, all) {
            if (activeIndex !== -1 && all.length - idx2 - 1 >= activeIndex)
              return false;
            return !resolvers.resolveDisabled(item);
          });
          if (idx === -1)
            return idx;
          return items.length - 1 - idx;
        }
        case Focus$1.Next:
          return items.findIndex(function(item, idx2) {
            if (idx2 <= activeIndex)
              return false;
            return !resolvers.resolveDisabled(item);
          });
        case Focus$1.Last: {
          var _idx = items.slice().reverse().findIndex(function(item) {
            return !resolvers.resolveDisabled(item);
          });
          if (_idx === -1)
            return _idx;
          return items.length - 1 - _idx;
        }
        case Focus$1.Specific:
          return items.findIndex(function(item) {
            return resolvers.resolveId(item) === action.id;
          });
        case Focus$1.Nothing:
          return null;
        default:
          assertNever(action);
      }
    }();
    return nextActiveIndex === -1 ? currentActiveIndex : nextActiveIndex;
  }
  var _reducers$2;
  var ListboxStates;
  (function(ListboxStates2) {
    ListboxStates2[ListboxStates2["Open"] = 0] = "Open";
    ListboxStates2[ListboxStates2["Closed"] = 1] = "Closed";
  })(ListboxStates || (ListboxStates = {}));
  var ActionTypes$2;
  (function(ActionTypes2) {
    ActionTypes2[ActionTypes2["OpenListbox"] = 0] = "OpenListbox";
    ActionTypes2[ActionTypes2["CloseListbox"] = 1] = "CloseListbox";
    ActionTypes2[ActionTypes2["SetDisabled"] = 2] = "SetDisabled";
    ActionTypes2[ActionTypes2["SetOrientation"] = 3] = "SetOrientation";
    ActionTypes2[ActionTypes2["GoToOption"] = 4] = "GoToOption";
    ActionTypes2[ActionTypes2["Search"] = 5] = "Search";
    ActionTypes2[ActionTypes2["ClearSearch"] = 6] = "ClearSearch";
    ActionTypes2[ActionTypes2["RegisterOption"] = 7] = "RegisterOption";
    ActionTypes2[ActionTypes2["UnregisterOption"] = 8] = "UnregisterOption";
  })(ActionTypes$2 || (ActionTypes$2 = {}));
  var reducers$2 = (_reducers$2 = {}, _reducers$2[ActionTypes$2.CloseListbox] = function(state2) {
    if (state2.disabled)
      return state2;
    if (state2.listboxState === ListboxStates.Closed)
      return state2;
    return _extends3({}, state2, {
      activeOptionIndex: null,
      listboxState: ListboxStates.Closed
    });
  }, _reducers$2[ActionTypes$2.OpenListbox] = function(state2) {
    if (state2.disabled)
      return state2;
    if (state2.listboxState === ListboxStates.Open)
      return state2;
    return _extends3({}, state2, {
      listboxState: ListboxStates.Open
    });
  }, _reducers$2[ActionTypes$2.SetDisabled] = function(state2, action) {
    if (state2.disabled === action.disabled)
      return state2;
    return _extends3({}, state2, {
      disabled: action.disabled
    });
  }, _reducers$2[ActionTypes$2.SetOrientation] = function(state2, action) {
    if (state2.orientation === action.orientation)
      return state2;
    return _extends3({}, state2, {
      orientation: action.orientation
    });
  }, _reducers$2[ActionTypes$2.GoToOption] = function(state2, action) {
    if (state2.disabled)
      return state2;
    if (state2.listboxState === ListboxStates.Closed)
      return state2;
    var activeOptionIndex = calculateActiveIndex(action, {
      resolveItems: function resolveItems() {
        return state2.options;
      },
      resolveActiveIndex: function resolveActiveIndex() {
        return state2.activeOptionIndex;
      },
      resolveId: function resolveId(item) {
        return item.id;
      },
      resolveDisabled: function resolveDisabled(item) {
        return item.dataRef.current.disabled;
      }
    });
    if (state2.searchQuery === "" && state2.activeOptionIndex === activeOptionIndex)
      return state2;
    return _extends3({}, state2, {
      searchQuery: "",
      activeOptionIndex
    });
  }, _reducers$2[ActionTypes$2.Search] = function(state2, action) {
    if (state2.disabled)
      return state2;
    if (state2.listboxState === ListboxStates.Closed)
      return state2;
    var searchQuery = state2.searchQuery + action.value.toLowerCase();
    var match2 = state2.options.findIndex(function(option) {
      var _option$dataRef$curre;
      return !option.dataRef.current.disabled && ((_option$dataRef$curre = option.dataRef.current.textValue) == null ? void 0 : _option$dataRef$curre.startsWith(searchQuery));
    });
    if (match2 === -1 || match2 === state2.activeOptionIndex)
      return _extends3({}, state2, {
        searchQuery
      });
    return _extends3({}, state2, {
      searchQuery,
      activeOptionIndex: match2
    });
  }, _reducers$2[ActionTypes$2.ClearSearch] = function(state2) {
    if (state2.disabled)
      return state2;
    if (state2.listboxState === ListboxStates.Closed)
      return state2;
    if (state2.searchQuery === "")
      return state2;
    return _extends3({}, state2, {
      searchQuery: ""
    });
  }, _reducers$2[ActionTypes$2.RegisterOption] = function(state2, action) {
    return _extends3({}, state2, {
      options: [].concat(state2.options, [{
        id: action.id,
        dataRef: action.dataRef
      }])
    });
  }, _reducers$2[ActionTypes$2.UnregisterOption] = function(state2, action) {
    var nextOptions = state2.options.slice();
    var currentActiveOption = state2.activeOptionIndex !== null ? nextOptions[state2.activeOptionIndex] : null;
    var idx = nextOptions.findIndex(function(a2) {
      return a2.id === action.id;
    });
    if (idx !== -1)
      nextOptions.splice(idx, 1);
    return _extends3({}, state2, {
      options: nextOptions,
      activeOptionIndex: function() {
        if (idx === state2.activeOptionIndex)
          return null;
        if (currentActiveOption === null)
          return null;
        return nextOptions.indexOf(currentActiveOption);
      }()
    });
  }, _reducers$2);
  var ListboxContext = /* @__PURE__ */ createContext3(null);
  ListboxContext.displayName = "ListboxContext";
  function useListboxContext(component) {
    var context = useContext3(ListboxContext);
    if (context === null) {
      var err = new Error("<" + component + " /> is missing a parent <" + Listbox.name + " /> component.");
      if (Error.captureStackTrace)
        Error.captureStackTrace(err, useListboxContext);
      throw err;
    }
    return context;
  }
  function stateReducer$2(state2, action) {
    return match(action.type, reducers$2, state2, action);
  }
  var DEFAULT_LISTBOX_TAG = Fragment3;
  function Listbox(props) {
    var _match;
    var value = props.value, onChange = props.onChange, _props$disabled = props.disabled, disabled = _props$disabled === void 0 ? false : _props$disabled, _props$horizontal = props.horizontal, horizontal = _props$horizontal === void 0 ? false : _props$horizontal, passThroughProps = _objectWithoutPropertiesLoose2(props, ["value", "onChange", "disabled", "horizontal"]);
    var orientation = horizontal ? "horizontal" : "vertical";
    var reducerBag = useReducer2(stateReducer$2, {
      listboxState: ListboxStates.Closed,
      propsRef: {
        current: {
          value,
          onChange
        }
      },
      labelRef: createRef2(),
      buttonRef: createRef2(),
      optionsRef: createRef2(),
      disabled,
      orientation,
      options: [],
      searchQuery: "",
      activeOptionIndex: null
    });
    var _reducerBag$ = reducerBag[0], listboxState = _reducerBag$.listboxState, propsRef = _reducerBag$.propsRef, optionsRef = _reducerBag$.optionsRef, buttonRef = _reducerBag$.buttonRef, dispatch = reducerBag[1];
    useIsoMorphicEffect(function() {
      propsRef.current.value = value;
    }, [value, propsRef]);
    useIsoMorphicEffect(function() {
      propsRef.current.onChange = onChange;
    }, [onChange, propsRef]);
    useIsoMorphicEffect(function() {
      return dispatch({
        type: ActionTypes$2.SetDisabled,
        disabled
      });
    }, [disabled]);
    useIsoMorphicEffect(function() {
      return dispatch({
        type: ActionTypes$2.SetOrientation,
        orientation
      });
    }, [orientation]);
    useWindowEvent("mousedown", function(event) {
      var _buttonRef$current, _optionsRef$current;
      var target = event.target;
      if (listboxState !== ListboxStates.Open)
        return;
      if ((_buttonRef$current = buttonRef.current) == null ? void 0 : _buttonRef$current.contains(target))
        return;
      if ((_optionsRef$current = optionsRef.current) == null ? void 0 : _optionsRef$current.contains(target))
        return;
      dispatch({
        type: ActionTypes$2.CloseListbox
      });
      if (!isFocusableElement(target, FocusableMode.Loose)) {
        var _buttonRef$current2;
        event.preventDefault();
        (_buttonRef$current2 = buttonRef.current) == null ? void 0 : _buttonRef$current2.focus();
      }
    });
    var slot = useMemo3(function() {
      return {
        open: listboxState === ListboxStates.Open,
        disabled
      };
    }, [listboxState, disabled]);
    return react_default.createElement(ListboxContext.Provider, {
      value: reducerBag
    }, react_default.createElement(OpenClosedProvider, {
      value: match(listboxState, (_match = {}, _match[ListboxStates.Open] = State.Open, _match[ListboxStates.Closed] = State.Closed, _match))
    }, render2({
      props: passThroughProps,
      slot,
      defaultTag: DEFAULT_LISTBOX_TAG,
      name: "Listbox"
    })));
  }
  var DEFAULT_BUTTON_TAG$1 = "button";
  var Button$1 = /* @__PURE__ */ forwardRefWithAs(function Button3(props, ref) {
    var _state$optionsRef$cur;
    var _useListboxContext = useListboxContext([Listbox.name, Button3.name].join(".")), state2 = _useListboxContext[0], dispatch = _useListboxContext[1];
    var buttonRef = useSyncRefs(state2.buttonRef, ref);
    var id22 = "headlessui-listbox-button-" + useId();
    var d = useDisposables();
    var handleKeyDown = useCallback4(function(event) {
      switch (event.key) {
        case Keys.Space:
        case Keys.Enter:
        case Keys.ArrowDown:
          event.preventDefault();
          dispatch({
            type: ActionTypes$2.OpenListbox
          });
          d.nextFrame(function() {
            if (!state2.propsRef.current.value)
              dispatch({
                type: ActionTypes$2.GoToOption,
                focus: Focus$1.First
              });
          });
          break;
        case Keys.ArrowUp:
          event.preventDefault();
          dispatch({
            type: ActionTypes$2.OpenListbox
          });
          d.nextFrame(function() {
            if (!state2.propsRef.current.value)
              dispatch({
                type: ActionTypes$2.GoToOption,
                focus: Focus$1.Last
              });
          });
          break;
      }
    }, [dispatch, state2, d]);
    var handleKeyUp = useCallback4(function(event) {
      switch (event.key) {
        case Keys.Space:
          event.preventDefault();
          break;
      }
    }, []);
    var handleClick = useCallback4(function(event) {
      if (isDisabledReactIssue7711(event.currentTarget))
        return event.preventDefault();
      if (state2.listboxState === ListboxStates.Open) {
        dispatch({
          type: ActionTypes$2.CloseListbox
        });
        d.nextFrame(function() {
          var _state$buttonRef$curr;
          return (_state$buttonRef$curr = state2.buttonRef.current) == null ? void 0 : _state$buttonRef$curr.focus({
            preventScroll: true
          });
        });
      } else {
        event.preventDefault();
        dispatch({
          type: ActionTypes$2.OpenListbox
        });
      }
    }, [dispatch, d, state2]);
    var labelledby = useComputed(function() {
      if (!state2.labelRef.current)
        return void 0;
      return [state2.labelRef.current.id, id22].join(" ");
    }, [state2.labelRef.current, id22]);
    var slot = useMemo3(function() {
      return {
        open: state2.listboxState === ListboxStates.Open,
        disabled: state2.disabled
      };
    }, [state2]);
    var passthroughProps = props;
    var propsWeControl = {
      ref: buttonRef,
      id: id22,
      type: useResolveButtonType(props, state2.buttonRef),
      "aria-haspopup": true,
      "aria-controls": (_state$optionsRef$cur = state2.optionsRef.current) == null ? void 0 : _state$optionsRef$cur.id,
      "aria-expanded": state2.disabled ? void 0 : state2.listboxState === ListboxStates.Open,
      "aria-labelledby": labelledby,
      disabled: state2.disabled,
      onKeyDown: handleKeyDown,
      onKeyUp: handleKeyUp,
      onClick: handleClick
    };
    return render2({
      props: _extends3({}, passthroughProps, propsWeControl),
      slot,
      defaultTag: DEFAULT_BUTTON_TAG$1,
      name: "Listbox.Button"
    });
  });
  var DEFAULT_LABEL_TAG = "label";
  function Label(props) {
    var _useListboxContext2 = useListboxContext([Listbox.name, Label.name].join(".")), state2 = _useListboxContext2[0];
    var id22 = "headlessui-listbox-label-" + useId();
    var handleClick = useCallback4(function() {
      var _state$buttonRef$curr2;
      return (_state$buttonRef$curr2 = state2.buttonRef.current) == null ? void 0 : _state$buttonRef$curr2.focus({
        preventScroll: true
      });
    }, [state2.buttonRef]);
    var slot = useMemo3(function() {
      return {
        open: state2.listboxState === ListboxStates.Open,
        disabled: state2.disabled
      };
    }, [state2]);
    var propsWeControl = {
      ref: state2.labelRef,
      id: id22,
      onClick: handleClick
    };
    return render2({
      props: _extends3({}, props, propsWeControl),
      slot,
      defaultTag: DEFAULT_LABEL_TAG,
      name: "Listbox.Label"
    });
  }
  var DEFAULT_OPTIONS_TAG = "ul";
  var OptionsRenderFeatures = Features.RenderStrategy | Features.Static;
  var Options = /* @__PURE__ */ forwardRefWithAs(function Options2(props, ref) {
    var _state$options$state$;
    var _useListboxContext3 = useListboxContext([Listbox.name, Options2.name].join(".")), state2 = _useListboxContext3[0], dispatch = _useListboxContext3[1];
    var optionsRef = useSyncRefs(state2.optionsRef, ref);
    var id22 = "headlessui-listbox-options-" + useId();
    var d = useDisposables();
    var searchDisposables = useDisposables();
    var usesOpenClosedState = useOpenClosed();
    var visible = function() {
      if (usesOpenClosedState !== null) {
        return usesOpenClosedState === State.Open;
      }
      return state2.listboxState === ListboxStates.Open;
    }();
    useIsoMorphicEffect(function() {
      var container = state2.optionsRef.current;
      if (!container)
        return;
      if (state2.listboxState !== ListboxStates.Open)
        return;
      if (container === document.activeElement)
        return;
      container.focus({
        preventScroll: true
      });
    }, [state2.listboxState, state2.optionsRef]);
    var handleKeyDown = useCallback4(function(event) {
      searchDisposables.dispose();
      switch (event.key) {
        case Keys.Space:
          if (state2.searchQuery !== "") {
            event.preventDefault();
            event.stopPropagation();
            return dispatch({
              type: ActionTypes$2.Search,
              value: event.key
            });
          }
        case Keys.Enter:
          event.preventDefault();
          event.stopPropagation();
          dispatch({
            type: ActionTypes$2.CloseListbox
          });
          if (state2.activeOptionIndex !== null) {
            var dataRef = state2.options[state2.activeOptionIndex].dataRef;
            state2.propsRef.current.onChange(dataRef.current.value);
          }
          disposables().nextFrame(function() {
            var _state$buttonRef$curr3;
            return (_state$buttonRef$curr3 = state2.buttonRef.current) == null ? void 0 : _state$buttonRef$curr3.focus({
              preventScroll: true
            });
          });
          break;
        case match(state2.orientation, {
          vertical: Keys.ArrowDown,
          horizontal: Keys.ArrowRight
        }):
          event.preventDefault();
          event.stopPropagation();
          return dispatch({
            type: ActionTypes$2.GoToOption,
            focus: Focus$1.Next
          });
        case match(state2.orientation, {
          vertical: Keys.ArrowUp,
          horizontal: Keys.ArrowLeft
        }):
          event.preventDefault();
          event.stopPropagation();
          return dispatch({
            type: ActionTypes$2.GoToOption,
            focus: Focus$1.Previous
          });
        case Keys.Home:
        case Keys.PageUp:
          event.preventDefault();
          event.stopPropagation();
          return dispatch({
            type: ActionTypes$2.GoToOption,
            focus: Focus$1.First
          });
        case Keys.End:
        case Keys.PageDown:
          event.preventDefault();
          event.stopPropagation();
          return dispatch({
            type: ActionTypes$2.GoToOption,
            focus: Focus$1.Last
          });
        case Keys.Escape:
          event.preventDefault();
          event.stopPropagation();
          dispatch({
            type: ActionTypes$2.CloseListbox
          });
          return d.nextFrame(function() {
            var _state$buttonRef$curr4;
            return (_state$buttonRef$curr4 = state2.buttonRef.current) == null ? void 0 : _state$buttonRef$curr4.focus({
              preventScroll: true
            });
          });
        case Keys.Tab:
          event.preventDefault();
          event.stopPropagation();
          break;
        default:
          if (event.key.length === 1) {
            dispatch({
              type: ActionTypes$2.Search,
              value: event.key
            });
            searchDisposables.setTimeout(function() {
              return dispatch({
                type: ActionTypes$2.ClearSearch
              });
            }, 350);
          }
          break;
      }
    }, [d, dispatch, searchDisposables, state2]);
    var labelledby = useComputed(function() {
      var _state$labelRef$curre, _state$labelRef$curre2, _state$buttonRef$curr5;
      return (_state$labelRef$curre = (_state$labelRef$curre2 = state2.labelRef.current) == null ? void 0 : _state$labelRef$curre2.id) != null ? _state$labelRef$curre : (_state$buttonRef$curr5 = state2.buttonRef.current) == null ? void 0 : _state$buttonRef$curr5.id;
    }, [state2.labelRef.current, state2.buttonRef.current]);
    var slot = useMemo3(function() {
      return {
        open: state2.listboxState === ListboxStates.Open
      };
    }, [state2]);
    var propsWeControl = {
      "aria-activedescendant": state2.activeOptionIndex === null ? void 0 : (_state$options$state$ = state2.options[state2.activeOptionIndex]) == null ? void 0 : _state$options$state$.id,
      "aria-labelledby": labelledby,
      "aria-orientation": state2.orientation,
      id: id22,
      onKeyDown: handleKeyDown,
      role: "listbox",
      tabIndex: 0,
      ref: optionsRef
    };
    var passthroughProps = props;
    return render2({
      props: _extends3({}, passthroughProps, propsWeControl),
      slot,
      defaultTag: DEFAULT_OPTIONS_TAG,
      features: OptionsRenderFeatures,
      visible,
      name: "Listbox.Options"
    });
  });
  var DEFAULT_OPTION_TAG = "li";
  function Option(props) {
    var _props$disabled2 = props.disabled, disabled = _props$disabled2 === void 0 ? false : _props$disabled2, value = props.value, passthroughProps = _objectWithoutPropertiesLoose2(props, ["disabled", "value"]);
    var _useListboxContext4 = useListboxContext([Listbox.name, Option.name].join(".")), state2 = _useListboxContext4[0], dispatch = _useListboxContext4[1];
    var id22 = "headlessui-listbox-option-" + useId();
    var active = state2.activeOptionIndex !== null ? state2.options[state2.activeOptionIndex].id === id22 : false;
    var selected = state2.propsRef.current.value === value;
    var bag = useRef4({
      disabled,
      value
    });
    useIsoMorphicEffect(function() {
      bag.current.disabled = disabled;
    }, [bag, disabled]);
    useIsoMorphicEffect(function() {
      bag.current.value = value;
    }, [bag, value]);
    useIsoMorphicEffect(function() {
      var _document$getElementB, _document$getElementB2;
      bag.current.textValue = (_document$getElementB = document.getElementById(id22)) == null ? void 0 : (_document$getElementB2 = _document$getElementB.textContent) == null ? void 0 : _document$getElementB2.toLowerCase();
    }, [bag, id22]);
    var select = useCallback4(function() {
      return state2.propsRef.current.onChange(value);
    }, [state2.propsRef, value]);
    useIsoMorphicEffect(function() {
      dispatch({
        type: ActionTypes$2.RegisterOption,
        id: id22,
        dataRef: bag
      });
      return function() {
        return dispatch({
          type: ActionTypes$2.UnregisterOption,
          id: id22
        });
      };
    }, [bag, id22]);
    useIsoMorphicEffect(function() {
      var _document$getElementB3;
      if (state2.listboxState !== ListboxStates.Open)
        return;
      if (!selected)
        return;
      dispatch({
        type: ActionTypes$2.GoToOption,
        focus: Focus$1.Specific,
        id: id22
      });
      (_document$getElementB3 = document.getElementById(id22)) == null ? void 0 : _document$getElementB3.focus == null ? void 0 : _document$getElementB3.focus();
    }, [state2.listboxState]);
    useIsoMorphicEffect(function() {
      if (state2.listboxState !== ListboxStates.Open)
        return;
      if (!active)
        return;
      var d = disposables();
      d.nextFrame(function() {
        var _document$getElementB4;
        return (_document$getElementB4 = document.getElementById(id22)) == null ? void 0 : _document$getElementB4.scrollIntoView == null ? void 0 : _document$getElementB4.scrollIntoView({
          block: "nearest"
        });
      });
      return d.dispose;
    }, [id22, active, state2.listboxState]);
    var handleClick = useCallback4(function(event) {
      if (disabled)
        return event.preventDefault();
      select();
      dispatch({
        type: ActionTypes$2.CloseListbox
      });
      disposables().nextFrame(function() {
        var _state$buttonRef$curr6;
        return (_state$buttonRef$curr6 = state2.buttonRef.current) == null ? void 0 : _state$buttonRef$curr6.focus({
          preventScroll: true
        });
      });
    }, [dispatch, state2.buttonRef, disabled, select]);
    var handleFocus = useCallback4(function() {
      if (disabled)
        return dispatch({
          type: ActionTypes$2.GoToOption,
          focus: Focus$1.Nothing
        });
      dispatch({
        type: ActionTypes$2.GoToOption,
        focus: Focus$1.Specific,
        id: id22
      });
    }, [disabled, id22, dispatch]);
    var handleMove = useCallback4(function() {
      if (disabled)
        return;
      if (active)
        return;
      dispatch({
        type: ActionTypes$2.GoToOption,
        focus: Focus$1.Specific,
        id: id22
      });
    }, [disabled, active, id22, dispatch]);
    var handleLeave = useCallback4(function() {
      if (disabled)
        return;
      if (!active)
        return;
      dispatch({
        type: ActionTypes$2.GoToOption,
        focus: Focus$1.Nothing
      });
    }, [disabled, active, dispatch]);
    var slot = useMemo3(function() {
      return {
        active,
        selected,
        disabled
      };
    }, [active, selected, disabled]);
    var propsWeControl = {
      id: id22,
      role: "option",
      tabIndex: disabled === true ? void 0 : -1,
      "aria-disabled": disabled === true ? true : void 0,
      "aria-selected": selected === true ? true : void 0,
      disabled: void 0,
      onClick: handleClick,
      onFocus: handleFocus,
      onPointerMove: handleMove,
      onMouseMove: handleMove,
      onPointerLeave: handleLeave,
      onMouseLeave: handleLeave
    };
    return render2({
      props: _extends3({}, passthroughProps, propsWeControl),
      slot,
      defaultTag: DEFAULT_OPTION_TAG,
      name: "Listbox.Option"
    });
  }
  Listbox.Button = Button$1;
  Listbox.Label = Label;
  Listbox.Options = Options;
  Listbox.Option = Option;
  function useTreeWalker(_ref) {
    var container = _ref.container, accept = _ref.accept, walk = _ref.walk, _ref$enabled = _ref.enabled, enabled = _ref$enabled === void 0 ? true : _ref$enabled;
    var acceptRef = useRef4(accept);
    var walkRef = useRef4(walk);
    useEffect3(function() {
      acceptRef.current = accept;
      walkRef.current = walk;
    }, [accept, walk]);
    useIsoMorphicEffect(function() {
      if (!container)
        return;
      if (!enabled)
        return;
      var accept2 = acceptRef.current;
      var walk2 = walkRef.current;
      var acceptNode = Object.assign(function(node) {
        return accept2(node);
      }, {
        acceptNode: accept2
      });
      var walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, acceptNode, false);
      while (walker.nextNode()) {
        walk2(walker.currentNode);
      }
    }, [container, enabled, acceptRef, walkRef]);
  }
  var _reducers$3;
  var MenuStates;
  (function(MenuStates2) {
    MenuStates2[MenuStates2["Open"] = 0] = "Open";
    MenuStates2[MenuStates2["Closed"] = 1] = "Closed";
  })(MenuStates || (MenuStates = {}));
  var ActionTypes$3;
  (function(ActionTypes2) {
    ActionTypes2[ActionTypes2["OpenMenu"] = 0] = "OpenMenu";
    ActionTypes2[ActionTypes2["CloseMenu"] = 1] = "CloseMenu";
    ActionTypes2[ActionTypes2["GoToItem"] = 2] = "GoToItem";
    ActionTypes2[ActionTypes2["Search"] = 3] = "Search";
    ActionTypes2[ActionTypes2["ClearSearch"] = 4] = "ClearSearch";
    ActionTypes2[ActionTypes2["RegisterItem"] = 5] = "RegisterItem";
    ActionTypes2[ActionTypes2["UnregisterItem"] = 6] = "UnregisterItem";
  })(ActionTypes$3 || (ActionTypes$3 = {}));
  var reducers$3 = (_reducers$3 = {}, _reducers$3[ActionTypes$3.CloseMenu] = function(state2) {
    if (state2.menuState === MenuStates.Closed)
      return state2;
    return _extends3({}, state2, {
      activeItemIndex: null,
      menuState: MenuStates.Closed
    });
  }, _reducers$3[ActionTypes$3.OpenMenu] = function(state2) {
    if (state2.menuState === MenuStates.Open)
      return state2;
    return _extends3({}, state2, {
      menuState: MenuStates.Open
    });
  }, _reducers$3[ActionTypes$3.GoToItem] = function(state2, action) {
    var activeItemIndex = calculateActiveIndex(action, {
      resolveItems: function resolveItems() {
        return state2.items;
      },
      resolveActiveIndex: function resolveActiveIndex() {
        return state2.activeItemIndex;
      },
      resolveId: function resolveId(item) {
        return item.id;
      },
      resolveDisabled: function resolveDisabled(item) {
        return item.dataRef.current.disabled;
      }
    });
    if (state2.searchQuery === "" && state2.activeItemIndex === activeItemIndex)
      return state2;
    return _extends3({}, state2, {
      searchQuery: "",
      activeItemIndex
    });
  }, _reducers$3[ActionTypes$3.Search] = function(state2, action) {
    var searchQuery = state2.searchQuery + action.value.toLowerCase();
    var match2 = state2.items.findIndex(function(item) {
      var _item$dataRef$current;
      return ((_item$dataRef$current = item.dataRef.current.textValue) == null ? void 0 : _item$dataRef$current.startsWith(searchQuery)) && !item.dataRef.current.disabled;
    });
    if (match2 === -1 || match2 === state2.activeItemIndex)
      return _extends3({}, state2, {
        searchQuery
      });
    return _extends3({}, state2, {
      searchQuery,
      activeItemIndex: match2
    });
  }, _reducers$3[ActionTypes$3.ClearSearch] = function(state2) {
    if (state2.searchQuery === "")
      return state2;
    return _extends3({}, state2, {
      searchQuery: ""
    });
  }, _reducers$3[ActionTypes$3.RegisterItem] = function(state2, action) {
    return _extends3({}, state2, {
      items: [].concat(state2.items, [{
        id: action.id,
        dataRef: action.dataRef
      }])
    });
  }, _reducers$3[ActionTypes$3.UnregisterItem] = function(state2, action) {
    var nextItems = state2.items.slice();
    var currentActiveItem = state2.activeItemIndex !== null ? nextItems[state2.activeItemIndex] : null;
    var idx = nextItems.findIndex(function(a2) {
      return a2.id === action.id;
    });
    if (idx !== -1)
      nextItems.splice(idx, 1);
    return _extends3({}, state2, {
      items: nextItems,
      activeItemIndex: function() {
        if (idx === state2.activeItemIndex)
          return null;
        if (currentActiveItem === null)
          return null;
        return nextItems.indexOf(currentActiveItem);
      }()
    });
  }, _reducers$3);
  var MenuContext = /* @__PURE__ */ createContext3(null);
  MenuContext.displayName = "MenuContext";
  function useMenuContext(component) {
    var context = useContext3(MenuContext);
    if (context === null) {
      var err = new Error("<" + component + " /> is missing a parent <" + Menu.name + " /> component.");
      if (Error.captureStackTrace)
        Error.captureStackTrace(err, useMenuContext);
      throw err;
    }
    return context;
  }
  function stateReducer$3(state2, action) {
    return match(action.type, reducers$3, state2, action);
  }
  var DEFAULT_MENU_TAG = Fragment3;
  function Menu(props) {
    var _match;
    var reducerBag = useReducer2(stateReducer$3, {
      menuState: MenuStates.Closed,
      buttonRef: createRef2(),
      itemsRef: createRef2(),
      items: [],
      searchQuery: "",
      activeItemIndex: null
    });
    var _reducerBag$ = reducerBag[0], menuState = _reducerBag$.menuState, itemsRef = _reducerBag$.itemsRef, buttonRef = _reducerBag$.buttonRef, dispatch = reducerBag[1];
    useWindowEvent("mousedown", function(event) {
      var _buttonRef$current, _itemsRef$current;
      var target = event.target;
      if (menuState !== MenuStates.Open)
        return;
      if ((_buttonRef$current = buttonRef.current) == null ? void 0 : _buttonRef$current.contains(target))
        return;
      if ((_itemsRef$current = itemsRef.current) == null ? void 0 : _itemsRef$current.contains(target))
        return;
      dispatch({
        type: ActionTypes$3.CloseMenu
      });
      if (!isFocusableElement(target, FocusableMode.Loose)) {
        var _buttonRef$current2;
        event.preventDefault();
        (_buttonRef$current2 = buttonRef.current) == null ? void 0 : _buttonRef$current2.focus();
      }
    });
    var slot = useMemo3(function() {
      return {
        open: menuState === MenuStates.Open
      };
    }, [menuState]);
    return react_default.createElement(MenuContext.Provider, {
      value: reducerBag
    }, react_default.createElement(OpenClosedProvider, {
      value: match(menuState, (_match = {}, _match[MenuStates.Open] = State.Open, _match[MenuStates.Closed] = State.Closed, _match))
    }, render2({
      props,
      slot,
      defaultTag: DEFAULT_MENU_TAG,
      name: "Menu"
    })));
  }
  var DEFAULT_BUTTON_TAG$2 = "button";
  var Button$2 = /* @__PURE__ */ forwardRefWithAs(function Button4(props, ref) {
    var _state$itemsRef$curre;
    var _useMenuContext = useMenuContext([Menu.name, Button4.name].join(".")), state2 = _useMenuContext[0], dispatch = _useMenuContext[1];
    var buttonRef = useSyncRefs(state2.buttonRef, ref);
    var id22 = "headlessui-menu-button-" + useId();
    var d = useDisposables();
    var handleKeyDown = useCallback4(function(event) {
      switch (event.key) {
        case Keys.Space:
        case Keys.Enter:
        case Keys.ArrowDown:
          event.preventDefault();
          event.stopPropagation();
          dispatch({
            type: ActionTypes$3.OpenMenu
          });
          d.nextFrame(function() {
            return dispatch({
              type: ActionTypes$3.GoToItem,
              focus: Focus$1.First
            });
          });
          break;
        case Keys.ArrowUp:
          event.preventDefault();
          event.stopPropagation();
          dispatch({
            type: ActionTypes$3.OpenMenu
          });
          d.nextFrame(function() {
            return dispatch({
              type: ActionTypes$3.GoToItem,
              focus: Focus$1.Last
            });
          });
          break;
      }
    }, [dispatch, d]);
    var handleKeyUp = useCallback4(function(event) {
      switch (event.key) {
        case Keys.Space:
          event.preventDefault();
          break;
      }
    }, []);
    var handleClick = useCallback4(function(event) {
      if (isDisabledReactIssue7711(event.currentTarget))
        return event.preventDefault();
      if (props.disabled)
        return;
      if (state2.menuState === MenuStates.Open) {
        dispatch({
          type: ActionTypes$3.CloseMenu
        });
        d.nextFrame(function() {
          var _state$buttonRef$curr;
          return (_state$buttonRef$curr = state2.buttonRef.current) == null ? void 0 : _state$buttonRef$curr.focus({
            preventScroll: true
          });
        });
      } else {
        event.preventDefault();
        event.stopPropagation();
        dispatch({
          type: ActionTypes$3.OpenMenu
        });
      }
    }, [dispatch, d, state2, props.disabled]);
    var slot = useMemo3(function() {
      return {
        open: state2.menuState === MenuStates.Open
      };
    }, [state2]);
    var passthroughProps = props;
    var propsWeControl = {
      ref: buttonRef,
      id: id22,
      type: useResolveButtonType(props, state2.buttonRef),
      "aria-haspopup": true,
      "aria-controls": (_state$itemsRef$curre = state2.itemsRef.current) == null ? void 0 : _state$itemsRef$curre.id,
      "aria-expanded": props.disabled ? void 0 : state2.menuState === MenuStates.Open,
      onKeyDown: handleKeyDown,
      onKeyUp: handleKeyUp,
      onClick: handleClick
    };
    return render2({
      props: _extends3({}, passthroughProps, propsWeControl),
      slot,
      defaultTag: DEFAULT_BUTTON_TAG$2,
      name: "Menu.Button"
    });
  });
  var DEFAULT_ITEMS_TAG = "div";
  var ItemsRenderFeatures = Features.RenderStrategy | Features.Static;
  var Items = /* @__PURE__ */ forwardRefWithAs(function Items2(props, ref) {
    var _state$items$state$ac, _state$buttonRef$curr4;
    var _useMenuContext2 = useMenuContext([Menu.name, Items2.name].join(".")), state2 = _useMenuContext2[0], dispatch = _useMenuContext2[1];
    var itemsRef = useSyncRefs(state2.itemsRef, ref);
    var id22 = "headlessui-menu-items-" + useId();
    var searchDisposables = useDisposables();
    var usesOpenClosedState = useOpenClosed();
    var visible = function() {
      if (usesOpenClosedState !== null) {
        return usesOpenClosedState === State.Open;
      }
      return state2.menuState === MenuStates.Open;
    }();
    useEffect3(function() {
      var container = state2.itemsRef.current;
      if (!container)
        return;
      if (state2.menuState !== MenuStates.Open)
        return;
      if (container === document.activeElement)
        return;
      container.focus({
        preventScroll: true
      });
    }, [state2.menuState, state2.itemsRef]);
    useTreeWalker({
      container: state2.itemsRef.current,
      enabled: state2.menuState === MenuStates.Open,
      accept: function accept(node) {
        if (node.getAttribute("role") === "menuitem")
          return NodeFilter.FILTER_REJECT;
        if (node.hasAttribute("role"))
          return NodeFilter.FILTER_SKIP;
        return NodeFilter.FILTER_ACCEPT;
      },
      walk: function walk(node) {
        node.setAttribute("role", "none");
      }
    });
    var handleKeyDown = useCallback4(function(event) {
      searchDisposables.dispose();
      switch (event.key) {
        case Keys.Space:
          if (state2.searchQuery !== "") {
            event.preventDefault();
            event.stopPropagation();
            return dispatch({
              type: ActionTypes$3.Search,
              value: event.key
            });
          }
        case Keys.Enter:
          event.preventDefault();
          event.stopPropagation();
          dispatch({
            type: ActionTypes$3.CloseMenu
          });
          if (state2.activeItemIndex !== null) {
            var _document$getElementB;
            var _id = state2.items[state2.activeItemIndex].id;
            (_document$getElementB = document.getElementById(_id)) == null ? void 0 : _document$getElementB.click();
          }
          disposables().nextFrame(function() {
            var _state$buttonRef$curr2;
            return (_state$buttonRef$curr2 = state2.buttonRef.current) == null ? void 0 : _state$buttonRef$curr2.focus({
              preventScroll: true
            });
          });
          break;
        case Keys.ArrowDown:
          event.preventDefault();
          event.stopPropagation();
          return dispatch({
            type: ActionTypes$3.GoToItem,
            focus: Focus$1.Next
          });
        case Keys.ArrowUp:
          event.preventDefault();
          event.stopPropagation();
          return dispatch({
            type: ActionTypes$3.GoToItem,
            focus: Focus$1.Previous
          });
        case Keys.Home:
        case Keys.PageUp:
          event.preventDefault();
          event.stopPropagation();
          return dispatch({
            type: ActionTypes$3.GoToItem,
            focus: Focus$1.First
          });
        case Keys.End:
        case Keys.PageDown:
          event.preventDefault();
          event.stopPropagation();
          return dispatch({
            type: ActionTypes$3.GoToItem,
            focus: Focus$1.Last
          });
        case Keys.Escape:
          event.preventDefault();
          event.stopPropagation();
          dispatch({
            type: ActionTypes$3.CloseMenu
          });
          disposables().nextFrame(function() {
            var _state$buttonRef$curr3;
            return (_state$buttonRef$curr3 = state2.buttonRef.current) == null ? void 0 : _state$buttonRef$curr3.focus({
              preventScroll: true
            });
          });
          break;
        case Keys.Tab:
          event.preventDefault();
          event.stopPropagation();
          break;
        default:
          if (event.key.length === 1) {
            dispatch({
              type: ActionTypes$3.Search,
              value: event.key
            });
            searchDisposables.setTimeout(function() {
              return dispatch({
                type: ActionTypes$3.ClearSearch
              });
            }, 350);
          }
          break;
      }
    }, [dispatch, searchDisposables, state2]);
    var handleKeyUp = useCallback4(function(event) {
      switch (event.key) {
        case Keys.Space:
          event.preventDefault();
          break;
      }
    }, []);
    var slot = useMemo3(function() {
      return {
        open: state2.menuState === MenuStates.Open
      };
    }, [state2]);
    var propsWeControl = {
      "aria-activedescendant": state2.activeItemIndex === null ? void 0 : (_state$items$state$ac = state2.items[state2.activeItemIndex]) == null ? void 0 : _state$items$state$ac.id,
      "aria-labelledby": (_state$buttonRef$curr4 = state2.buttonRef.current) == null ? void 0 : _state$buttonRef$curr4.id,
      id: id22,
      onKeyDown: handleKeyDown,
      onKeyUp: handleKeyUp,
      role: "menu",
      tabIndex: 0,
      ref: itemsRef
    };
    var passthroughProps = props;
    return render2({
      props: _extends3({}, passthroughProps, propsWeControl),
      slot,
      defaultTag: DEFAULT_ITEMS_TAG,
      features: ItemsRenderFeatures,
      visible,
      name: "Menu.Items"
    });
  });
  var DEFAULT_ITEM_TAG = Fragment3;
  function Item(props) {
    var _props$disabled = props.disabled, disabled = _props$disabled === void 0 ? false : _props$disabled, onClick = props.onClick, passthroughProps = _objectWithoutPropertiesLoose2(props, ["disabled", "onClick"]);
    var _useMenuContext3 = useMenuContext([Menu.name, Item.name].join(".")), state2 = _useMenuContext3[0], dispatch = _useMenuContext3[1];
    var id22 = "headlessui-menu-item-" + useId();
    var active = state2.activeItemIndex !== null ? state2.items[state2.activeItemIndex].id === id22 : false;
    useIsoMorphicEffect(function() {
      if (state2.menuState !== MenuStates.Open)
        return;
      if (!active)
        return;
      var d = disposables();
      d.nextFrame(function() {
        var _document$getElementB2;
        return (_document$getElementB2 = document.getElementById(id22)) == null ? void 0 : _document$getElementB2.scrollIntoView == null ? void 0 : _document$getElementB2.scrollIntoView({
          block: "nearest"
        });
      });
      return d.dispose;
    }, [id22, active, state2.menuState]);
    var bag = useRef4({
      disabled
    });
    useIsoMorphicEffect(function() {
      bag.current.disabled = disabled;
    }, [bag, disabled]);
    useIsoMorphicEffect(function() {
      var _document$getElementB3, _document$getElementB4;
      bag.current.textValue = (_document$getElementB3 = document.getElementById(id22)) == null ? void 0 : (_document$getElementB4 = _document$getElementB3.textContent) == null ? void 0 : _document$getElementB4.toLowerCase();
    }, [bag, id22]);
    useIsoMorphicEffect(function() {
      dispatch({
        type: ActionTypes$3.RegisterItem,
        id: id22,
        dataRef: bag
      });
      return function() {
        return dispatch({
          type: ActionTypes$3.UnregisterItem,
          id: id22
        });
      };
    }, [bag, id22]);
    var handleClick = useCallback4(function(event) {
      if (disabled)
        return event.preventDefault();
      dispatch({
        type: ActionTypes$3.CloseMenu
      });
      disposables().nextFrame(function() {
        var _state$buttonRef$curr5;
        return (_state$buttonRef$curr5 = state2.buttonRef.current) == null ? void 0 : _state$buttonRef$curr5.focus({
          preventScroll: true
        });
      });
      if (onClick)
        return onClick(event);
    }, [dispatch, state2.buttonRef, disabled, onClick]);
    var handleFocus = useCallback4(function() {
      if (disabled)
        return dispatch({
          type: ActionTypes$3.GoToItem,
          focus: Focus$1.Nothing
        });
      dispatch({
        type: ActionTypes$3.GoToItem,
        focus: Focus$1.Specific,
        id: id22
      });
    }, [disabled, id22, dispatch]);
    var handleMove = useCallback4(function() {
      if (disabled)
        return;
      if (active)
        return;
      dispatch({
        type: ActionTypes$3.GoToItem,
        focus: Focus$1.Specific,
        id: id22
      });
    }, [disabled, active, id22, dispatch]);
    var handleLeave = useCallback4(function() {
      if (disabled)
        return;
      if (!active)
        return;
      dispatch({
        type: ActionTypes$3.GoToItem,
        focus: Focus$1.Nothing
      });
    }, [disabled, active, dispatch]);
    var slot = useMemo3(function() {
      return {
        active,
        disabled
      };
    }, [active, disabled]);
    var propsWeControl = {
      id: id22,
      role: "menuitem",
      tabIndex: disabled === true ? void 0 : -1,
      "aria-disabled": disabled === true ? true : void 0,
      disabled: void 0,
      onClick: handleClick,
      onFocus: handleFocus,
      onPointerMove: handleMove,
      onMouseMove: handleMove,
      onPointerLeave: handleLeave,
      onMouseLeave: handleLeave
    };
    return render2({
      props: _extends3({}, passthroughProps, propsWeControl),
      slot,
      defaultTag: DEFAULT_ITEM_TAG,
      name: "Menu.Item"
    });
  }
  Menu.Button = Button$2;
  Menu.Items = Items;
  Menu.Item = Item;
  var _reducers$4;
  var PopoverStates;
  (function(PopoverStates2) {
    PopoverStates2[PopoverStates2["Open"] = 0] = "Open";
    PopoverStates2[PopoverStates2["Closed"] = 1] = "Closed";
  })(PopoverStates || (PopoverStates = {}));
  var ActionTypes$4;
  (function(ActionTypes2) {
    ActionTypes2[ActionTypes2["TogglePopover"] = 0] = "TogglePopover";
    ActionTypes2[ActionTypes2["ClosePopover"] = 1] = "ClosePopover";
    ActionTypes2[ActionTypes2["SetButton"] = 2] = "SetButton";
    ActionTypes2[ActionTypes2["SetButtonId"] = 3] = "SetButtonId";
    ActionTypes2[ActionTypes2["SetPanel"] = 4] = "SetPanel";
    ActionTypes2[ActionTypes2["SetPanelId"] = 5] = "SetPanelId";
  })(ActionTypes$4 || (ActionTypes$4 = {}));
  var reducers$4 = (_reducers$4 = {}, _reducers$4[ActionTypes$4.TogglePopover] = function(state2) {
    var _match;
    return _extends3({}, state2, {
      popoverState: match(state2.popoverState, (_match = {}, _match[PopoverStates.Open] = PopoverStates.Closed, _match[PopoverStates.Closed] = PopoverStates.Open, _match))
    });
  }, _reducers$4[ActionTypes$4.ClosePopover] = function(state2) {
    if (state2.popoverState === PopoverStates.Closed)
      return state2;
    return _extends3({}, state2, {
      popoverState: PopoverStates.Closed
    });
  }, _reducers$4[ActionTypes$4.SetButton] = function(state2, action) {
    if (state2.button === action.button)
      return state2;
    return _extends3({}, state2, {
      button: action.button
    });
  }, _reducers$4[ActionTypes$4.SetButtonId] = function(state2, action) {
    if (state2.buttonId === action.buttonId)
      return state2;
    return _extends3({}, state2, {
      buttonId: action.buttonId
    });
  }, _reducers$4[ActionTypes$4.SetPanel] = function(state2, action) {
    if (state2.panel === action.panel)
      return state2;
    return _extends3({}, state2, {
      panel: action.panel
    });
  }, _reducers$4[ActionTypes$4.SetPanelId] = function(state2, action) {
    if (state2.panelId === action.panelId)
      return state2;
    return _extends3({}, state2, {
      panelId: action.panelId
    });
  }, _reducers$4);
  var PopoverContext = /* @__PURE__ */ createContext3(null);
  PopoverContext.displayName = "PopoverContext";
  function usePopoverContext(component) {
    var context = useContext3(PopoverContext);
    if (context === null) {
      var err = new Error("<" + component + " /> is missing a parent <" + Popover.name + " /> component.");
      if (Error.captureStackTrace)
        Error.captureStackTrace(err, usePopoverContext);
      throw err;
    }
    return context;
  }
  var PopoverAPIContext = /* @__PURE__ */ createContext3(null);
  PopoverAPIContext.displayName = "PopoverAPIContext";
  function usePopoverAPIContext(component) {
    var context = useContext3(PopoverAPIContext);
    if (context === null) {
      var err = new Error("<" + component + " /> is missing a parent <" + Popover.name + " /> component.");
      if (Error.captureStackTrace)
        Error.captureStackTrace(err, usePopoverAPIContext);
      throw err;
    }
    return context;
  }
  var PopoverGroupContext = /* @__PURE__ */ createContext3(null);
  PopoverGroupContext.displayName = "PopoverGroupContext";
  function usePopoverGroupContext() {
    return useContext3(PopoverGroupContext);
  }
  var PopoverPanelContext = /* @__PURE__ */ createContext3(null);
  PopoverPanelContext.displayName = "PopoverPanelContext";
  function usePopoverPanelContext() {
    return useContext3(PopoverPanelContext);
  }
  function stateReducer$4(state2, action) {
    return match(action.type, reducers$4, state2, action);
  }
  var DEFAULT_POPOVER_TAG = "div";
  function Popover(props) {
    var _match2;
    var buttonId = "headlessui-popover-button-" + useId();
    var panelId = "headlessui-popover-panel-" + useId();
    var reducerBag = useReducer2(stateReducer$4, {
      popoverState: PopoverStates.Closed,
      button: null,
      buttonId,
      panel: null,
      panelId
    });
    var _reducerBag$ = reducerBag[0], popoverState = _reducerBag$.popoverState, button = _reducerBag$.button, panel = _reducerBag$.panel, dispatch = reducerBag[1];
    useEffect3(function() {
      return dispatch({
        type: ActionTypes$4.SetButtonId,
        buttonId
      });
    }, [buttonId, dispatch]);
    useEffect3(function() {
      return dispatch({
        type: ActionTypes$4.SetPanelId,
        panelId
      });
    }, [panelId, dispatch]);
    var registerBag = useMemo3(function() {
      return {
        buttonId,
        panelId,
        close: function close2() {
          return dispatch({
            type: ActionTypes$4.ClosePopover
          });
        }
      };
    }, [buttonId, panelId, dispatch]);
    var groupContext = usePopoverGroupContext();
    var registerPopover = groupContext == null ? void 0 : groupContext.registerPopover;
    var isFocusWithinPopoverGroup = useCallback4(function() {
      var _groupContext$isFocus;
      return (_groupContext$isFocus = groupContext == null ? void 0 : groupContext.isFocusWithinPopoverGroup()) != null ? _groupContext$isFocus : (button == null ? void 0 : button.contains(document.activeElement)) || (panel == null ? void 0 : panel.contains(document.activeElement));
    }, [groupContext, button, panel]);
    useEffect3(function() {
      return registerPopover == null ? void 0 : registerPopover(registerBag);
    }, [registerPopover, registerBag]);
    useWindowEvent("focus", function() {
      if (popoverState !== PopoverStates.Open)
        return;
      if (isFocusWithinPopoverGroup())
        return;
      if (!button)
        return;
      if (!panel)
        return;
      dispatch({
        type: ActionTypes$4.ClosePopover
      });
    }, true);
    useWindowEvent("mousedown", function(event) {
      var target = event.target;
      if (popoverState !== PopoverStates.Open)
        return;
      if (button == null ? void 0 : button.contains(target))
        return;
      if (panel == null ? void 0 : panel.contains(target))
        return;
      dispatch({
        type: ActionTypes$4.ClosePopover
      });
      if (!isFocusableElement(target, FocusableMode.Loose)) {
        event.preventDefault();
        button == null ? void 0 : button.focus();
      }
    });
    var close = useCallback4(function(focusableElement) {
      dispatch({
        type: ActionTypes$4.ClosePopover
      });
      var restoreElement = function() {
        if (!focusableElement)
          return button;
        if (focusableElement instanceof HTMLElement)
          return focusableElement;
        if (focusableElement.current instanceof HTMLElement)
          return focusableElement.current;
        return button;
      }();
      restoreElement == null ? void 0 : restoreElement.focus();
    }, [dispatch, button]);
    var api = useMemo3(function() {
      return {
        close
      };
    }, [close]);
    var slot = useMemo3(function() {
      return {
        open: popoverState === PopoverStates.Open,
        close
      };
    }, [popoverState, close]);
    return react_default.createElement(PopoverContext.Provider, {
      value: reducerBag
    }, react_default.createElement(PopoverAPIContext.Provider, {
      value: api
    }, react_default.createElement(OpenClosedProvider, {
      value: match(popoverState, (_match2 = {}, _match2[PopoverStates.Open] = State.Open, _match2[PopoverStates.Closed] = State.Closed, _match2))
    }, render2({
      props,
      slot,
      defaultTag: DEFAULT_POPOVER_TAG,
      name: "Popover"
    }))));
  }
  var DEFAULT_BUTTON_TAG$3 = "button";
  var Button$3 = /* @__PURE__ */ forwardRefWithAs(function Button5(props, ref) {
    var _usePopoverContext = usePopoverContext([Popover.name, Button5.name].join(".")), state2 = _usePopoverContext[0], dispatch = _usePopoverContext[1];
    var internalButtonRef = useRef4(null);
    var groupContext = usePopoverGroupContext();
    var closeOthers = groupContext == null ? void 0 : groupContext.closeOthers;
    var panelContext = usePopoverPanelContext();
    var isWithinPanel = panelContext === null ? false : panelContext === state2.panelId;
    var buttonRef = useSyncRefs(internalButtonRef, ref, isWithinPanel ? null : function(button) {
      return dispatch({
        type: ActionTypes$4.SetButton,
        button
      });
    });
    var withinPanelButtonRef = useSyncRefs(internalButtonRef, ref);
    var activeElementRef = useRef4(null);
    var previousActiveElementRef = useRef4(typeof window === "undefined" ? null : document.activeElement);
    useWindowEvent("focus", function() {
      previousActiveElementRef.current = activeElementRef.current;
      activeElementRef.current = document.activeElement;
    }, true);
    var handleKeyDown = useCallback4(function(event) {
      var _state$button;
      if (isWithinPanel) {
        if (state2.popoverState === PopoverStates.Closed)
          return;
        switch (event.key) {
          case Keys.Space:
          case Keys.Enter:
            event.preventDefault();
            event.stopPropagation();
            dispatch({
              type: ActionTypes$4.ClosePopover
            });
            (_state$button = state2.button) == null ? void 0 : _state$button.focus();
            break;
        }
      } else {
        switch (event.key) {
          case Keys.Space:
          case Keys.Enter:
            event.preventDefault();
            event.stopPropagation();
            if (state2.popoverState === PopoverStates.Closed)
              closeOthers == null ? void 0 : closeOthers(state2.buttonId);
            dispatch({
              type: ActionTypes$4.TogglePopover
            });
            break;
          case Keys.Escape:
            if (state2.popoverState !== PopoverStates.Open)
              return closeOthers == null ? void 0 : closeOthers(state2.buttonId);
            if (!internalButtonRef.current)
              return;
            if (!internalButtonRef.current.contains(document.activeElement))
              return;
            event.preventDefault();
            event.stopPropagation();
            dispatch({
              type: ActionTypes$4.ClosePopover
            });
            break;
          case Keys.Tab:
            if (state2.popoverState !== PopoverStates.Open)
              return;
            if (!state2.panel)
              return;
            if (!state2.button)
              return;
            if (event.shiftKey) {
              var _state$button2;
              if (!previousActiveElementRef.current)
                return;
              if ((_state$button2 = state2.button) == null ? void 0 : _state$button2.contains(previousActiveElementRef.current))
                return;
              if (state2.panel.contains(previousActiveElementRef.current))
                return;
              var focusableElements = getFocusableElements();
              var previousIdx = focusableElements.indexOf(previousActiveElementRef.current);
              var buttonIdx = focusableElements.indexOf(state2.button);
              if (buttonIdx > previousIdx)
                return;
              event.preventDefault();
              event.stopPropagation();
              focusIn(state2.panel, Focus.Last);
            } else {
              event.preventDefault();
              event.stopPropagation();
              focusIn(state2.panel, Focus.First);
            }
            break;
        }
      }
    }, [dispatch, state2.popoverState, state2.buttonId, state2.button, state2.panel, internalButtonRef, closeOthers, isWithinPanel]);
    var handleKeyUp = useCallback4(function(event) {
      var _state$button3;
      if (isWithinPanel)
        return;
      if (event.key === Keys.Space) {
        event.preventDefault();
      }
      if (state2.popoverState !== PopoverStates.Open)
        return;
      if (!state2.panel)
        return;
      if (!state2.button)
        return;
      switch (event.key) {
        case Keys.Tab:
          if (!previousActiveElementRef.current)
            return;
          if ((_state$button3 = state2.button) == null ? void 0 : _state$button3.contains(previousActiveElementRef.current))
            return;
          if (state2.panel.contains(previousActiveElementRef.current))
            return;
          var focusableElements = getFocusableElements();
          var previousIdx = focusableElements.indexOf(previousActiveElementRef.current);
          var buttonIdx = focusableElements.indexOf(state2.button);
          if (buttonIdx > previousIdx)
            return;
          event.preventDefault();
          event.stopPropagation();
          focusIn(state2.panel, Focus.Last);
          break;
      }
    }, [state2.popoverState, state2.panel, state2.button, isWithinPanel]);
    var handleClick = useCallback4(function(event) {
      if (isDisabledReactIssue7711(event.currentTarget))
        return;
      if (props.disabled)
        return;
      if (isWithinPanel) {
        var _state$button4;
        dispatch({
          type: ActionTypes$4.ClosePopover
        });
        (_state$button4 = state2.button) == null ? void 0 : _state$button4.focus();
      } else {
        var _state$button5;
        if (state2.popoverState === PopoverStates.Closed)
          closeOthers == null ? void 0 : closeOthers(state2.buttonId);
        (_state$button5 = state2.button) == null ? void 0 : _state$button5.focus();
        dispatch({
          type: ActionTypes$4.TogglePopover
        });
      }
    }, [dispatch, state2.button, state2.popoverState, state2.buttonId, props.disabled, closeOthers, isWithinPanel]);
    var slot = useMemo3(function() {
      return {
        open: state2.popoverState === PopoverStates.Open
      };
    }, [state2]);
    var type = useResolveButtonType(props, internalButtonRef);
    var passthroughProps = props;
    var propsWeControl = isWithinPanel ? {
      ref: withinPanelButtonRef,
      type,
      onKeyDown: handleKeyDown,
      onClick: handleClick
    } : {
      ref: buttonRef,
      id: state2.buttonId,
      type,
      "aria-expanded": props.disabled ? void 0 : state2.popoverState === PopoverStates.Open,
      "aria-controls": state2.panel ? state2.panelId : void 0,
      onKeyDown: handleKeyDown,
      onKeyUp: handleKeyUp,
      onClick: handleClick
    };
    return render2({
      props: _extends3({}, passthroughProps, propsWeControl),
      slot,
      defaultTag: DEFAULT_BUTTON_TAG$3,
      name: "Popover.Button"
    });
  });
  var DEFAULT_OVERLAY_TAG$1 = "div";
  var OverlayRenderFeatures = Features.RenderStrategy | Features.Static;
  var Overlay$1 = /* @__PURE__ */ forwardRefWithAs(function Overlay3(props, ref) {
    var _usePopoverContext2 = usePopoverContext([Popover.name, Overlay3.name].join(".")), popoverState = _usePopoverContext2[0].popoverState, dispatch = _usePopoverContext2[1];
    var overlayRef = useSyncRefs(ref);
    var id22 = "headlessui-popover-overlay-" + useId();
    var usesOpenClosedState = useOpenClosed();
    var visible = function() {
      if (usesOpenClosedState !== null) {
        return usesOpenClosedState === State.Open;
      }
      return popoverState === PopoverStates.Open;
    }();
    var handleClick = useCallback4(function(event) {
      if (isDisabledReactIssue7711(event.currentTarget))
        return event.preventDefault();
      dispatch({
        type: ActionTypes$4.ClosePopover
      });
    }, [dispatch]);
    var slot = useMemo3(function() {
      return {
        open: popoverState === PopoverStates.Open
      };
    }, [popoverState]);
    var propsWeControl = {
      ref: overlayRef,
      id: id22,
      "aria-hidden": true,
      onClick: handleClick
    };
    var passthroughProps = props;
    return render2({
      props: _extends3({}, passthroughProps, propsWeControl),
      slot,
      defaultTag: DEFAULT_OVERLAY_TAG$1,
      features: OverlayRenderFeatures,
      visible,
      name: "Popover.Overlay"
    });
  });
  var DEFAULT_PANEL_TAG$1 = "div";
  var PanelRenderFeatures$1 = Features.RenderStrategy | Features.Static;
  var Panel$1 = /* @__PURE__ */ forwardRefWithAs(function Panel3(props, ref) {
    var _props$focus = props.focus, focus = _props$focus === void 0 ? false : _props$focus, passthroughProps = _objectWithoutPropertiesLoose2(props, ["focus"]);
    var _usePopoverContext3 = usePopoverContext([Popover.name, Panel3.name].join(".")), state2 = _usePopoverContext3[0], dispatch = _usePopoverContext3[1];
    var _usePopoverAPIContext = usePopoverAPIContext([Popover.name, Panel3.name].join(".")), close = _usePopoverAPIContext.close;
    var internalPanelRef = useRef4(null);
    var panelRef = useSyncRefs(internalPanelRef, ref, function(panel) {
      dispatch({
        type: ActionTypes$4.SetPanel,
        panel
      });
    });
    var usesOpenClosedState = useOpenClosed();
    var visible = function() {
      if (usesOpenClosedState !== null) {
        return usesOpenClosedState === State.Open;
      }
      return state2.popoverState === PopoverStates.Open;
    }();
    var handleKeyDown = useCallback4(function(event) {
      var _state$button6;
      switch (event.key) {
        case Keys.Escape:
          if (state2.popoverState !== PopoverStates.Open)
            return;
          if (!internalPanelRef.current)
            return;
          if (!internalPanelRef.current.contains(document.activeElement))
            return;
          event.preventDefault();
          event.stopPropagation();
          dispatch({
            type: ActionTypes$4.ClosePopover
          });
          (_state$button6 = state2.button) == null ? void 0 : _state$button6.focus();
          break;
      }
    }, [state2, internalPanelRef, dispatch]);
    useEffect3(function() {
      return function() {
        return dispatch({
          type: ActionTypes$4.SetPanel,
          panel: null
        });
      };
    }, [dispatch]);
    useEffect3(function() {
      var _props$unmount;
      if (props["static"])
        return;
      if (state2.popoverState === PopoverStates.Closed && ((_props$unmount = props.unmount) != null ? _props$unmount : true)) {
        dispatch({
          type: ActionTypes$4.SetPanel,
          panel: null
        });
      }
    }, [state2.popoverState, props.unmount, props["static"], dispatch]);
    useEffect3(function() {
      if (!focus)
        return;
      if (state2.popoverState !== PopoverStates.Open)
        return;
      if (!internalPanelRef.current)
        return;
      var activeElement = document.activeElement;
      if (internalPanelRef.current.contains(activeElement))
        return;
      focusIn(internalPanelRef.current, Focus.First);
    }, [focus, internalPanelRef, state2.popoverState]);
    useWindowEvent("keydown", function(event) {
      if (state2.popoverState !== PopoverStates.Open)
        return;
      if (!internalPanelRef.current)
        return;
      if (event.key !== Keys.Tab)
        return;
      if (!document.activeElement)
        return;
      if (!internalPanelRef.current)
        return;
      if (!internalPanelRef.current.contains(document.activeElement))
        return;
      event.preventDefault();
      var result = focusIn(internalPanelRef.current, event.shiftKey ? Focus.Previous : Focus.Next);
      if (result === FocusResult.Underflow) {
        var _state$button7;
        return (_state$button7 = state2.button) == null ? void 0 : _state$button7.focus();
      } else if (result === FocusResult.Overflow) {
        if (!state2.button)
          return;
        var elements = getFocusableElements();
        var buttonIdx = elements.indexOf(state2.button);
        var nextElements = elements.splice(buttonIdx + 1).filter(function(element) {
          var _internalPanelRef$cur;
          return !((_internalPanelRef$cur = internalPanelRef.current) == null ? void 0 : _internalPanelRef$cur.contains(element));
        });
        if (focusIn(nextElements, Focus.First) === FocusResult.Error) {
          focusIn(document.body, Focus.First);
        }
      }
    });
    useWindowEvent("focus", function() {
      var _internalPanelRef$cur2;
      if (!focus)
        return;
      if (state2.popoverState !== PopoverStates.Open)
        return;
      if (!internalPanelRef.current)
        return;
      if ((_internalPanelRef$cur2 = internalPanelRef.current) == null ? void 0 : _internalPanelRef$cur2.contains(document.activeElement))
        return;
      dispatch({
        type: ActionTypes$4.ClosePopover
      });
    }, true);
    var slot = useMemo3(function() {
      return {
        open: state2.popoverState === PopoverStates.Open,
        close
      };
    }, [state2, close]);
    var propsWeControl = {
      ref: panelRef,
      id: state2.panelId,
      onKeyDown: handleKeyDown
    };
    return react_default.createElement(PopoverPanelContext.Provider, {
      value: state2.panelId
    }, render2({
      props: _extends3({}, passthroughProps, propsWeControl),
      slot,
      defaultTag: DEFAULT_PANEL_TAG$1,
      features: PanelRenderFeatures$1,
      visible,
      name: "Popover.Panel"
    }));
  });
  var DEFAULT_GROUP_TAG$1 = "div";
  function Group$1(props) {
    var groupRef = useRef4(null);
    var _useState = useState3([]), popovers = _useState[0], setPopovers = _useState[1];
    var unregisterPopover = useCallback4(function(registerbag) {
      setPopovers(function(existing) {
        var idx = existing.indexOf(registerbag);
        if (idx !== -1) {
          var clone = existing.slice();
          clone.splice(idx, 1);
          return clone;
        }
        return existing;
      });
    }, [setPopovers]);
    var registerPopover = useCallback4(function(registerbag) {
      setPopovers(function(existing) {
        return [].concat(existing, [registerbag]);
      });
      return function() {
        return unregisterPopover(registerbag);
      };
    }, [setPopovers, unregisterPopover]);
    var isFocusWithinPopoverGroup = useCallback4(function() {
      var _groupRef$current;
      var element = document.activeElement;
      if ((_groupRef$current = groupRef.current) == null ? void 0 : _groupRef$current.contains(element))
        return true;
      return popovers.some(function(bag) {
        var _document$getElementB, _document$getElementB2;
        return ((_document$getElementB = document.getElementById(bag.buttonId)) == null ? void 0 : _document$getElementB.contains(element)) || ((_document$getElementB2 = document.getElementById(bag.panelId)) == null ? void 0 : _document$getElementB2.contains(element));
      });
    }, [groupRef, popovers]);
    var closeOthers = useCallback4(function(buttonId) {
      for (var _iterator = _createForOfIteratorHelperLoose(popovers), _step; !(_step = _iterator()).done; ) {
        var popover = _step.value;
        if (popover.buttonId !== buttonId)
          popover.close();
      }
    }, [popovers]);
    var contextBag = useMemo3(function() {
      return {
        registerPopover,
        unregisterPopover,
        isFocusWithinPopoverGroup,
        closeOthers
      };
    }, [registerPopover, unregisterPopover, isFocusWithinPopoverGroup, closeOthers]);
    var slot = useMemo3(function() {
      return {};
    }, []);
    var propsWeControl = {
      ref: groupRef
    };
    var passthroughProps = props;
    return react_default.createElement(PopoverGroupContext.Provider, {
      value: contextBag
    }, render2({
      props: _extends3({}, passthroughProps, propsWeControl),
      slot,
      defaultTag: DEFAULT_GROUP_TAG$1,
      name: "Popover.Group"
    }));
  }
  Popover.Button = Button$3;
  Popover.Overlay = Overlay$1;
  Popover.Panel = Panel$1;
  Popover.Group = Group$1;
  function useFlags(initialFlags) {
    if (initialFlags === void 0) {
      initialFlags = 0;
    }
    var _useState = useState3(initialFlags), flags = _useState[0], setFlags = _useState[1];
    var addFlag = useCallback4(function(flag) {
      return setFlags(function(flags2) {
        return flags2 | flag;
      });
    }, [setFlags]);
    var hasFlag = useCallback4(function(flag) {
      return Boolean(flags & flag);
    }, [flags]);
    var removeFlag = useCallback4(function(flag) {
      return setFlags(function(flags2) {
        return flags2 & ~flag;
      });
    }, [setFlags]);
    var toggleFlag = useCallback4(function(flag) {
      return setFlags(function(flags2) {
        return flags2 ^ flag;
      });
    }, [setFlags]);
    return {
      addFlag,
      hasFlag,
      removeFlag,
      toggleFlag
    };
  }
  var LabelContext = /* @__PURE__ */ createContext3(null);
  function useLabelContext() {
    var context = useContext3(LabelContext);
    if (context === null) {
      var err = new Error("You used a <Label /> component, but it is not inside a relevant parent.");
      if (Error.captureStackTrace)
        Error.captureStackTrace(err, useLabelContext);
      throw err;
    }
    return context;
  }
  function useLabels() {
    var _useState = useState3([]), labelIds = _useState[0], setLabelIds = _useState[1];
    return [
      labelIds.length > 0 ? labelIds.join(" ") : void 0,
      useMemo3(function() {
        return function LabelProvider(props) {
          var register = useCallback4(function(value) {
            setLabelIds(function(existing) {
              return [].concat(existing, [value]);
            });
            return function() {
              return setLabelIds(function(existing) {
                var clone = existing.slice();
                var idx = clone.indexOf(value);
                if (idx !== -1)
                  clone.splice(idx, 1);
                return clone;
              });
            };
          }, []);
          var contextBag = useMemo3(function() {
            return {
              register,
              slot: props.slot,
              name: props.name,
              props: props.props
            };
          }, [register, props.slot, props.name, props.props]);
          return react_default.createElement(LabelContext.Provider, {
            value: contextBag
          }, props.children);
        };
      }, [setLabelIds])
    ];
  }
  var DEFAULT_LABEL_TAG$1 = "label";
  function Label$1(props) {
    var _props$passive = props.passive, passive = _props$passive === void 0 ? false : _props$passive, passThroughProps = _objectWithoutPropertiesLoose2(props, ["passive"]);
    var context = useLabelContext();
    var id22 = "headlessui-label-" + useId();
    useIsoMorphicEffect(function() {
      return context.register(id22);
    }, [id22, context.register]);
    var propsWeControl = _extends3({}, context.props, {
      id: id22
    });
    var allProps = _extends3({}, passThroughProps, propsWeControl);
    if (passive)
      delete allProps["onClick"];
    return render2({
      props: allProps,
      slot: context.slot || {},
      defaultTag: DEFAULT_LABEL_TAG$1,
      name: context.name || "Label"
    });
  }
  var _reducers$5;
  var ActionTypes$5;
  (function(ActionTypes2) {
    ActionTypes2[ActionTypes2["RegisterOption"] = 0] = "RegisterOption";
    ActionTypes2[ActionTypes2["UnregisterOption"] = 1] = "UnregisterOption";
  })(ActionTypes$5 || (ActionTypes$5 = {}));
  var reducers$5 = (_reducers$5 = {}, _reducers$5[ActionTypes$5.RegisterOption] = function(state2, action) {
    return _extends3({}, state2, {
      options: [].concat(state2.options, [{
        id: action.id,
        element: action.element,
        propsRef: action.propsRef
      }])
    });
  }, _reducers$5[ActionTypes$5.UnregisterOption] = function(state2, action) {
    var options = state2.options.slice();
    var idx = state2.options.findIndex(function(radio) {
      return radio.id === action.id;
    });
    if (idx === -1)
      return state2;
    options.splice(idx, 1);
    return _extends3({}, state2, {
      options
    });
  }, _reducers$5);
  var RadioGroupContext = /* @__PURE__ */ createContext3(null);
  RadioGroupContext.displayName = "RadioGroupContext";
  function useRadioGroupContext(component) {
    var context = useContext3(RadioGroupContext);
    if (context === null) {
      var err = new Error("<" + component + " /> is missing a parent <" + RadioGroup.name + " /> component.");
      if (Error.captureStackTrace)
        Error.captureStackTrace(err, useRadioGroupContext);
      throw err;
    }
    return context;
  }
  function stateReducer$5(state2, action) {
    return match(action.type, reducers$5, state2, action);
  }
  var DEFAULT_RADIO_GROUP_TAG = "div";
  function RadioGroup(props) {
    var value = props.value, onChange = props.onChange, _props$disabled = props.disabled, disabled = _props$disabled === void 0 ? false : _props$disabled, passThroughProps = _objectWithoutPropertiesLoose2(props, ["value", "onChange", "disabled"]);
    var _useReducer = useReducer2(stateReducer$5, {
      options: []
    }), options = _useReducer[0].options, dispatch = _useReducer[1];
    var _useLabels = useLabels(), labelledby = _useLabels[0], LabelProvider = _useLabels[1];
    var _useDescriptions = useDescriptions(), describedby = _useDescriptions[0], DescriptionProvider = _useDescriptions[1];
    var id22 = "headlessui-radiogroup-" + useId();
    var radioGroupRef = useRef4(null);
    var firstOption = useMemo3(function() {
      return options.find(function(option) {
        if (option.propsRef.current.disabled)
          return false;
        return true;
      });
    }, [options]);
    var containsCheckedOption = useMemo3(function() {
      return options.some(function(option) {
        return option.propsRef.current.value === value;
      });
    }, [options, value]);
    var triggerChange = useCallback4(function(nextValue) {
      var _options$find;
      if (disabled)
        return false;
      if (nextValue === value)
        return false;
      var nextOption = (_options$find = options.find(function(option) {
        return option.propsRef.current.value === nextValue;
      })) == null ? void 0 : _options$find.propsRef.current;
      if (nextOption == null ? void 0 : nextOption.disabled)
        return false;
      onChange(nextValue);
      return true;
    }, [onChange, value, disabled, options]);
    useTreeWalker({
      container: radioGroupRef.current,
      accept: function accept(node) {
        if (node.getAttribute("role") === "radio")
          return NodeFilter.FILTER_REJECT;
        if (node.hasAttribute("role"))
          return NodeFilter.FILTER_SKIP;
        return NodeFilter.FILTER_ACCEPT;
      },
      walk: function walk(node) {
        node.setAttribute("role", "none");
      }
    });
    var handleKeyDown = useCallback4(function(event) {
      var container = radioGroupRef.current;
      if (!container)
        return;
      var all = options.filter(function(option) {
        return option.propsRef.current.disabled === false;
      }).map(function(radio) {
        return radio.element.current;
      });
      switch (event.key) {
        case Keys.ArrowLeft:
        case Keys.ArrowUp:
          {
            event.preventDefault();
            event.stopPropagation();
            var result = focusIn(all, Focus.Previous | Focus.WrapAround);
            if (result === FocusResult.Success) {
              var activeOption = options.find(function(option) {
                return option.element.current === document.activeElement;
              });
              if (activeOption)
                triggerChange(activeOption.propsRef.current.value);
            }
          }
          break;
        case Keys.ArrowRight:
        case Keys.ArrowDown:
          {
            event.preventDefault();
            event.stopPropagation();
            var _result = focusIn(all, Focus.Next | Focus.WrapAround);
            if (_result === FocusResult.Success) {
              var _activeOption = options.find(function(option) {
                return option.element.current === document.activeElement;
              });
              if (_activeOption)
                triggerChange(_activeOption.propsRef.current.value);
            }
          }
          break;
        case Keys.Space:
          {
            event.preventDefault();
            event.stopPropagation();
            var _activeOption2 = options.find(function(option) {
              return option.element.current === document.activeElement;
            });
            if (_activeOption2)
              triggerChange(_activeOption2.propsRef.current.value);
          }
          break;
      }
    }, [radioGroupRef, options, triggerChange]);
    var registerOption = useCallback4(function(option) {
      dispatch(_extends3({
        type: ActionTypes$5.RegisterOption
      }, option));
      return function() {
        return dispatch({
          type: ActionTypes$5.UnregisterOption,
          id: option.id
        });
      };
    }, [dispatch]);
    var api = useMemo3(function() {
      return {
        registerOption,
        firstOption,
        containsCheckedOption,
        change: triggerChange,
        disabled,
        value
      };
    }, [registerOption, firstOption, containsCheckedOption, triggerChange, disabled, value]);
    var propsWeControl = {
      ref: radioGroupRef,
      id: id22,
      role: "radiogroup",
      "aria-labelledby": labelledby,
      "aria-describedby": describedby,
      onKeyDown: handleKeyDown
    };
    return react_default.createElement(DescriptionProvider, {
      name: "RadioGroup.Description"
    }, react_default.createElement(LabelProvider, {
      name: "RadioGroup.Label"
    }, react_default.createElement(RadioGroupContext.Provider, {
      value: api
    }, render2({
      props: _extends3({}, passThroughProps, propsWeControl),
      defaultTag: DEFAULT_RADIO_GROUP_TAG,
      name: "RadioGroup"
    }))));
  }
  var OptionState;
  (function(OptionState2) {
    OptionState2[OptionState2["Empty"] = 1] = "Empty";
    OptionState2[OptionState2["Active"] = 2] = "Active";
  })(OptionState || (OptionState = {}));
  var DEFAULT_OPTION_TAG$1 = "div";
  function Option$1(props) {
    var optionRef = useRef4(null);
    var id22 = "headlessui-radiogroup-option-" + useId();
    var _useLabels2 = useLabels(), labelledby = _useLabels2[0], LabelProvider = _useLabels2[1];
    var _useDescriptions2 = useDescriptions(), describedby = _useDescriptions2[0], DescriptionProvider = _useDescriptions2[1];
    var _useFlags = useFlags(OptionState.Empty), addFlag = _useFlags.addFlag, removeFlag = _useFlags.removeFlag, hasFlag = _useFlags.hasFlag;
    var value = props.value, _props$disabled2 = props.disabled, disabled = _props$disabled2 === void 0 ? false : _props$disabled2, passThroughProps = _objectWithoutPropertiesLoose2(props, ["value", "disabled"]);
    var propsRef = useRef4({
      value,
      disabled
    });
    useIsoMorphicEffect(function() {
      propsRef.current.value = value;
    }, [value, propsRef]);
    useIsoMorphicEffect(function() {
      propsRef.current.disabled = disabled;
    }, [disabled, propsRef]);
    var _useRadioGroupContext = useRadioGroupContext([RadioGroup.name, Option$1.name].join(".")), registerOption = _useRadioGroupContext.registerOption, radioGroupDisabled = _useRadioGroupContext.disabled, change = _useRadioGroupContext.change, firstOption = _useRadioGroupContext.firstOption, containsCheckedOption = _useRadioGroupContext.containsCheckedOption, radioGroupValue = _useRadioGroupContext.value;
    useIsoMorphicEffect(function() {
      return registerOption({
        id: id22,
        element: optionRef,
        propsRef
      });
    }, [id22, registerOption, optionRef, props]);
    var handleClick = useCallback4(function() {
      var _optionRef$current;
      if (!change(value))
        return;
      addFlag(OptionState.Active);
      (_optionRef$current = optionRef.current) == null ? void 0 : _optionRef$current.focus();
    }, [addFlag, change, value]);
    var handleFocus = useCallback4(function() {
      return addFlag(OptionState.Active);
    }, [addFlag]);
    var handleBlur = useCallback4(function() {
      return removeFlag(OptionState.Active);
    }, [removeFlag]);
    var isFirstOption = (firstOption == null ? void 0 : firstOption.id) === id22;
    var isDisabled = radioGroupDisabled || disabled;
    var checked = radioGroupValue === value;
    var propsWeControl = {
      ref: optionRef,
      id: id22,
      role: "radio",
      "aria-checked": checked ? "true" : "false",
      "aria-labelledby": labelledby,
      "aria-describedby": describedby,
      "aria-disabled": isDisabled ? true : void 0,
      tabIndex: function() {
        if (isDisabled)
          return -1;
        if (checked)
          return 0;
        if (!containsCheckedOption && isFirstOption)
          return 0;
        return -1;
      }(),
      onClick: isDisabled ? void 0 : handleClick,
      onFocus: isDisabled ? void 0 : handleFocus,
      onBlur: isDisabled ? void 0 : handleBlur
    };
    var slot = useMemo3(function() {
      return {
        checked,
        disabled: isDisabled,
        active: hasFlag(OptionState.Active)
      };
    }, [checked, isDisabled, hasFlag]);
    return react_default.createElement(DescriptionProvider, {
      name: "RadioGroup.Description"
    }, react_default.createElement(LabelProvider, {
      name: "RadioGroup.Label"
    }, render2({
      props: _extends3({}, passThroughProps, propsWeControl),
      slot,
      defaultTag: DEFAULT_OPTION_TAG$1,
      name: "RadioGroup.Option"
    })));
  }
  RadioGroup.Option = Option$1;
  RadioGroup.Label = Label$1;
  RadioGroup.Description = Description;
  var GroupContext = /* @__PURE__ */ createContext3(null);
  GroupContext.displayName = "GroupContext";
  var DEFAULT_GROUP_TAG$2 = Fragment3;
  function Group$2(props) {
    var _useState = useState3(null), switchElement = _useState[0], setSwitchElement = _useState[1];
    var _useLabels = useLabels(), labelledby = _useLabels[0], LabelProvider = _useLabels[1];
    var _useDescriptions = useDescriptions(), describedby = _useDescriptions[0], DescriptionProvider = _useDescriptions[1];
    var context = useMemo3(function() {
      return {
        switch: switchElement,
        setSwitch: setSwitchElement,
        labelledby,
        describedby
      };
    }, [switchElement, setSwitchElement, labelledby, describedby]);
    return react_default.createElement(DescriptionProvider, {
      name: "Switch.Description"
    }, react_default.createElement(LabelProvider, {
      name: "Switch.Label",
      props: {
        onClick: function onClick() {
          if (!switchElement)
            return;
          switchElement.click();
          switchElement.focus({
            preventScroll: true
          });
        }
      }
    }, react_default.createElement(GroupContext.Provider, {
      value: context
    }, render2({
      props,
      defaultTag: DEFAULT_GROUP_TAG$2,
      name: "Switch.Group"
    }))));
  }
  var DEFAULT_SWITCH_TAG = "button";
  function Switch(props) {
    var checked = props.checked, onChange = props.onChange, passThroughProps = _objectWithoutPropertiesLoose2(props, ["checked", "onChange"]);
    var id22 = "headlessui-switch-" + useId();
    var groupContext = useContext3(GroupContext);
    var internalSwitchRef = useRef4(null);
    var switchRef = useSyncRefs(internalSwitchRef, groupContext === null ? null : groupContext.setSwitch);
    var toggle = useCallback4(function() {
      return onChange(!checked);
    }, [onChange, checked]);
    var handleClick = useCallback4(function(event) {
      if (isDisabledReactIssue7711(event.currentTarget))
        return event.preventDefault();
      event.preventDefault();
      toggle();
    }, [toggle]);
    var handleKeyUp = useCallback4(function(event) {
      if (event.key !== Keys.Tab)
        event.preventDefault();
      if (event.key === Keys.Space)
        toggle();
    }, [toggle]);
    var handleKeyPress = useCallback4(function(event) {
      return event.preventDefault();
    }, []);
    var slot = useMemo3(function() {
      return {
        checked
      };
    }, [checked]);
    var propsWeControl = {
      id: id22,
      ref: switchRef,
      role: "switch",
      type: useResolveButtonType(props, internalSwitchRef),
      tabIndex: 0,
      "aria-checked": checked,
      "aria-labelledby": groupContext == null ? void 0 : groupContext.labelledby,
      "aria-describedby": groupContext == null ? void 0 : groupContext.describedby,
      onClick: handleClick,
      onKeyUp: handleKeyUp,
      onKeyPress: handleKeyPress
    };
    return render2({
      props: _extends3({}, passThroughProps, propsWeControl),
      slot,
      defaultTag: DEFAULT_SWITCH_TAG,
      name: "Switch"
    });
  }
  Switch.Group = Group$2;
  Switch.Label = Label$1;
  Switch.Description = Description;
  var _reducers$6;
  var ActionTypes$6;
  (function(ActionTypes2) {
    ActionTypes2[ActionTypes2["SetSelectedIndex"] = 0] = "SetSelectedIndex";
    ActionTypes2[ActionTypes2["SetOrientation"] = 1] = "SetOrientation";
    ActionTypes2[ActionTypes2["SetActivation"] = 2] = "SetActivation";
    ActionTypes2[ActionTypes2["RegisterTab"] = 3] = "RegisterTab";
    ActionTypes2[ActionTypes2["UnregisterTab"] = 4] = "UnregisterTab";
    ActionTypes2[ActionTypes2["RegisterPanel"] = 5] = "RegisterPanel";
    ActionTypes2[ActionTypes2["UnregisterPanel"] = 6] = "UnregisterPanel";
    ActionTypes2[ActionTypes2["ForceRerender"] = 7] = "ForceRerender";
  })(ActionTypes$6 || (ActionTypes$6 = {}));
  var reducers$6 = (_reducers$6 = {}, _reducers$6[ActionTypes$6.SetSelectedIndex] = function(state2, action) {
    if (state2.selectedIndex === action.index)
      return state2;
    return _extends3({}, state2, {
      selectedIndex: action.index
    });
  }, _reducers$6[ActionTypes$6.SetOrientation] = function(state2, action) {
    if (state2.orientation === action.orientation)
      return state2;
    return _extends3({}, state2, {
      orientation: action.orientation
    });
  }, _reducers$6[ActionTypes$6.SetActivation] = function(state2, action) {
    if (state2.activation === action.activation)
      return state2;
    return _extends3({}, state2, {
      activation: action.activation
    });
  }, _reducers$6[ActionTypes$6.RegisterTab] = function(state2, action) {
    if (state2.tabs.includes(action.tab))
      return state2;
    return _extends3({}, state2, {
      tabs: [].concat(state2.tabs, [action.tab])
    });
  }, _reducers$6[ActionTypes$6.UnregisterTab] = function(state2, action) {
    return _extends3({}, state2, {
      tabs: state2.tabs.filter(function(tab) {
        return tab !== action.tab;
      })
    });
  }, _reducers$6[ActionTypes$6.RegisterPanel] = function(state2, action) {
    if (state2.panels.includes(action.panel))
      return state2;
    return _extends3({}, state2, {
      panels: [].concat(state2.panels, [action.panel])
    });
  }, _reducers$6[ActionTypes$6.UnregisterPanel] = function(state2, action) {
    return _extends3({}, state2, {
      panels: state2.panels.filter(function(panel) {
        return panel !== action.panel;
      })
    });
  }, _reducers$6[ActionTypes$6.ForceRerender] = function(state2) {
    return _extends3({}, state2);
  }, _reducers$6);
  var TabsContext = /* @__PURE__ */ createContext3(null);
  TabsContext.displayName = "TabsContext";
  function useTabsContext(component) {
    var context = useContext3(TabsContext);
    if (context === null) {
      var err = new Error("<" + component + " /> is missing a parent <Tab.Group /> component.");
      if (Error.captureStackTrace)
        Error.captureStackTrace(err, useTabsContext);
      throw err;
    }
    return context;
  }
  function stateReducer$6(state2, action) {
    return match(action.type, reducers$6, state2, action);
  }
  var DEFAULT_TABS_TAG = Fragment3;
  function Tabs(props) {
    var _props$defaultIndex = props.defaultIndex, defaultIndex = _props$defaultIndex === void 0 ? 0 : _props$defaultIndex, _props$vertical = props.vertical, vertical = _props$vertical === void 0 ? false : _props$vertical, _props$manual = props.manual, manual = _props$manual === void 0 ? false : _props$manual, onChange = props.onChange, passThroughProps = _objectWithoutPropertiesLoose2(props, ["defaultIndex", "vertical", "manual", "onChange"]);
    var orientation = vertical ? "vertical" : "horizontal";
    var activation = manual ? "manual" : "auto";
    var _useReducer = useReducer2(stateReducer$6, {
      selectedIndex: null,
      tabs: [],
      panels: [],
      orientation,
      activation
    }), state2 = _useReducer[0], dispatch = _useReducer[1];
    var slot = useMemo3(function() {
      return {
        selectedIndex: state2.selectedIndex
      };
    }, [state2.selectedIndex]);
    var onChangeRef = useRef4(function() {
    });
    useEffect3(function() {
      dispatch({
        type: ActionTypes$6.SetOrientation,
        orientation
      });
    }, [orientation]);
    useEffect3(function() {
      dispatch({
        type: ActionTypes$6.SetActivation,
        activation
      });
    }, [activation]);
    useEffect3(function() {
      if (typeof onChange === "function") {
        onChangeRef.current = onChange;
      }
    }, [onChange]);
    useEffect3(function() {
      if (state2.tabs.length <= 0)
        return;
      if (state2.selectedIndex !== null)
        return;
      var tabs = state2.tabs.map(function(tab) {
        return tab.current;
      }).filter(Boolean);
      var focusableTabs = tabs.filter(function(tab) {
        return !tab.hasAttribute("disabled");
      });
      if (defaultIndex < 0) {
        dispatch({
          type: ActionTypes$6.SetSelectedIndex,
          index: tabs.indexOf(focusableTabs[0])
        });
      } else if (defaultIndex > state2.tabs.length) {
        dispatch({
          type: ActionTypes$6.SetSelectedIndex,
          index: tabs.indexOf(focusableTabs[focusableTabs.length - 1])
        });
      } else {
        var before = tabs.slice(0, defaultIndex);
        var after = tabs.slice(defaultIndex);
        var next = [].concat(after, before).find(function(tab) {
          return focusableTabs.includes(tab);
        });
        if (!next)
          return;
        dispatch({
          type: ActionTypes$6.SetSelectedIndex,
          index: tabs.indexOf(next)
        });
      }
    }, [defaultIndex, state2.tabs, state2.selectedIndex]);
    var lastChangedIndex = useRef4(state2.selectedIndex);
    var providerBag = useMemo3(function() {
      return [state2, {
        dispatch,
        change: function change(index) {
          if (lastChangedIndex.current !== index)
            onChangeRef.current(index);
          lastChangedIndex.current = index;
          dispatch({
            type: ActionTypes$6.SetSelectedIndex,
            index
          });
        }
      }];
    }, [state2, dispatch]);
    return react_default.createElement(TabsContext.Provider, {
      value: providerBag
    }, render2({
      props: _extends3({}, passThroughProps),
      slot,
      defaultTag: DEFAULT_TABS_TAG,
      name: "Tabs"
    }));
  }
  var DEFAULT_LIST_TAG = "div";
  function List(props) {
    var _useTabsContext = useTabsContext([Tab.name, List.name].join(".")), _useTabsContext$ = _useTabsContext[0], selectedIndex = _useTabsContext$.selectedIndex, orientation = _useTabsContext$.orientation;
    var slot = {
      selectedIndex
    };
    var propsWeControl = {
      role: "tablist",
      "aria-orientation": orientation
    };
    var passThroughProps = props;
    return render2({
      props: _extends3({}, passThroughProps, propsWeControl),
      slot,
      defaultTag: DEFAULT_LIST_TAG,
      name: "Tabs.List"
    });
  }
  var DEFAULT_TAB_TAG = "button";
  function Tab(props) {
    var _panels$myIndex, _panels$myIndex$curre;
    var id22 = "headlessui-tabs-tab-" + useId();
    var _useTabsContext2 = useTabsContext(Tab.name), _useTabsContext2$ = _useTabsContext2[0], selectedIndex = _useTabsContext2$.selectedIndex, tabs = _useTabsContext2$.tabs, panels = _useTabsContext2$.panels, orientation = _useTabsContext2$.orientation, activation = _useTabsContext2$.activation, _useTabsContext2$2 = _useTabsContext2[1], dispatch = _useTabsContext2$2.dispatch, change = _useTabsContext2$2.change;
    var internalTabRef = useRef4(null);
    var tabRef = useSyncRefs(internalTabRef, function(element) {
      if (!element)
        return;
      dispatch({
        type: ActionTypes$6.ForceRerender
      });
    });
    useIsoMorphicEffect(function() {
      dispatch({
        type: ActionTypes$6.RegisterTab,
        tab: internalTabRef
      });
      return function() {
        return dispatch({
          type: ActionTypes$6.UnregisterTab,
          tab: internalTabRef
        });
      };
    }, [dispatch, internalTabRef]);
    var myIndex = tabs.indexOf(internalTabRef);
    var selected = myIndex === selectedIndex;
    var handleKeyDown = useCallback4(function(event) {
      var list = tabs.map(function(tab) {
        return tab.current;
      }).filter(Boolean);
      if (event.key === Keys.Space || event.key === Keys.Enter) {
        event.preventDefault();
        event.stopPropagation();
        change(myIndex);
        return;
      }
      switch (event.key) {
        case Keys.Home:
        case Keys.PageUp:
          event.preventDefault();
          event.stopPropagation();
          return focusIn(list, Focus.First);
        case Keys.End:
        case Keys.PageDown:
          event.preventDefault();
          event.stopPropagation();
          return focusIn(list, Focus.Last);
      }
      return match(orientation, {
        vertical: function vertical() {
          if (event.key === Keys.ArrowUp)
            return focusIn(list, Focus.Previous | Focus.WrapAround);
          if (event.key === Keys.ArrowDown)
            return focusIn(list, Focus.Next | Focus.WrapAround);
          return;
        },
        horizontal: function horizontal() {
          if (event.key === Keys.ArrowLeft)
            return focusIn(list, Focus.Previous | Focus.WrapAround);
          if (event.key === Keys.ArrowRight)
            return focusIn(list, Focus.Next | Focus.WrapAround);
          return;
        }
      });
    }, [tabs, orientation, myIndex, change]);
    var handleFocus = useCallback4(function() {
      var _internalTabRef$curre;
      (_internalTabRef$curre = internalTabRef.current) == null ? void 0 : _internalTabRef$curre.focus();
    }, [internalTabRef]);
    var handleSelection = useCallback4(function() {
      var _internalTabRef$curre2;
      (_internalTabRef$curre2 = internalTabRef.current) == null ? void 0 : _internalTabRef$curre2.focus();
      change(myIndex);
    }, [change, myIndex, internalTabRef]);
    var slot = useMemo3(function() {
      return {
        selected
      };
    }, [selected]);
    var propsWeControl = {
      ref: tabRef,
      onKeyDown: handleKeyDown,
      onFocus: activation === "manual" ? handleFocus : handleSelection,
      onClick: handleSelection,
      id: id22,
      role: "tab",
      type: useResolveButtonType(props, internalTabRef),
      "aria-controls": (_panels$myIndex = panels[myIndex]) == null ? void 0 : (_panels$myIndex$curre = _panels$myIndex.current) == null ? void 0 : _panels$myIndex$curre.id,
      "aria-selected": selected,
      tabIndex: selected ? 0 : -1
    };
    var passThroughProps = props;
    return render2({
      props: _extends3({}, passThroughProps, propsWeControl),
      slot,
      defaultTag: DEFAULT_TAB_TAG,
      name: "Tabs.Tab"
    });
  }
  var DEFAULT_PANELS_TAG = "div";
  function Panels(props) {
    var _useTabsContext3 = useTabsContext([Tab.name, Panels.name].join(".")), selectedIndex = _useTabsContext3[0].selectedIndex;
    var slot = useMemo3(function() {
      return {
        selectedIndex
      };
    }, [selectedIndex]);
    return render2({
      props,
      slot,
      defaultTag: DEFAULT_PANELS_TAG,
      name: "Tabs.Panels"
    });
  }
  var DEFAULT_PANEL_TAG$2 = "div";
  var PanelRenderFeatures$2 = Features.RenderStrategy | Features.Static;
  function Panel$2(props) {
    var _tabs$myIndex, _tabs$myIndex$current;
    var _useTabsContext4 = useTabsContext([Tab.name, Panel$2.name].join(".")), _useTabsContext4$ = _useTabsContext4[0], selectedIndex = _useTabsContext4$.selectedIndex, tabs = _useTabsContext4$.tabs, panels = _useTabsContext4$.panels, dispatch = _useTabsContext4[1].dispatch;
    var id22 = "headlessui-tabs-panel-" + useId();
    var internalPanelRef = useRef4(null);
    var panelRef = useSyncRefs(internalPanelRef, function(element) {
      if (!element)
        return;
      dispatch({
        type: ActionTypes$6.ForceRerender
      });
    });
    useIsoMorphicEffect(function() {
      dispatch({
        type: ActionTypes$6.RegisterPanel,
        panel: internalPanelRef
      });
      return function() {
        return dispatch({
          type: ActionTypes$6.UnregisterPanel,
          panel: internalPanelRef
        });
      };
    }, [dispatch, internalPanelRef]);
    var myIndex = panels.indexOf(internalPanelRef);
    var selected = myIndex === selectedIndex;
    var slot = useMemo3(function() {
      return {
        selected
      };
    }, [selected]);
    var propsWeControl = {
      ref: panelRef,
      id: id22,
      role: "tabpanel",
      "aria-labelledby": (_tabs$myIndex = tabs[myIndex]) == null ? void 0 : (_tabs$myIndex$current = _tabs$myIndex.current) == null ? void 0 : _tabs$myIndex$current.id,
      tabIndex: selected ? 0 : -1
    };
    var passThroughProps = props;
    return render2({
      props: _extends3({}, passThroughProps, propsWeControl),
      slot,
      defaultTag: DEFAULT_PANEL_TAG$2,
      features: PanelRenderFeatures$2,
      visible: selected,
      name: "Tabs.Panel"
    });
  }
  Tab.Group = Tabs;
  Tab.List = List;
  Tab.Panels = Panels;
  Tab.Panel = Panel$2;
  function useIsInitialRender() {
    var initial = useRef4(true);
    useEffect3(function() {
      initial.current = false;
    }, []);
    return initial.current;
  }
  function once(cb2) {
    var state2 = {
      called: false
    };
    return function() {
      if (state2.called)
        return;
      state2.called = true;
      return cb2.apply(void 0, arguments);
    };
  }
  function addClasses(node) {
    var _node$classList;
    for (var _len = arguments.length, classes = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      classes[_key - 1] = arguments[_key];
    }
    node && classes.length > 0 && (_node$classList = node.classList).add.apply(_node$classList, classes);
  }
  function removeClasses(node) {
    var _node$classList2;
    for (var _len2 = arguments.length, classes = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      classes[_key2 - 1] = arguments[_key2];
    }
    node && classes.length > 0 && (_node$classList2 = node.classList).remove.apply(_node$classList2, classes);
  }
  var Reason;
  (function(Reason2) {
    Reason2["Finished"] = "finished";
    Reason2["Cancelled"] = "cancelled";
  })(Reason || (Reason = {}));
  function waitForTransition(node, done) {
    var d = disposables();
    if (!node)
      return d.dispose;
    var _getComputedStyle = getComputedStyle(node), transitionDuration = _getComputedStyle.transitionDuration, transitionDelay = _getComputedStyle.transitionDelay;
    var _map = [transitionDuration, transitionDelay].map(function(value) {
      var _value$split$filter$m = value.split(",").filter(Boolean).map(function(v) {
        return v.includes("ms") ? parseFloat(v) : parseFloat(v) * 1e3;
      }).sort(function(a2, z) {
        return z - a2;
      }), _value$split$filter$m2 = _value$split$filter$m[0], resolvedValue = _value$split$filter$m2 === void 0 ? 0 : _value$split$filter$m2;
      return resolvedValue;
    }), durationMs = _map[0], delaysMs = _map[1];
    if (durationMs !== 0) {
      d.setTimeout(function() {
        done(Reason.Finished);
      }, durationMs + delaysMs);
    } else {
      done(Reason.Finished);
    }
    d.add(function() {
      return done(Reason.Cancelled);
    });
    return d.dispose;
  }
  function transition(node, base, from, to, entered, done) {
    var d = disposables();
    var _done = done !== void 0 ? once(done) : function() {
    };
    removeClasses.apply(void 0, [node].concat(entered));
    addClasses.apply(void 0, [node].concat(base, from));
    d.nextFrame(function() {
      removeClasses.apply(void 0, [node].concat(from));
      addClasses.apply(void 0, [node].concat(to));
      d.add(waitForTransition(node, function(reason) {
        removeClasses.apply(void 0, [node].concat(to, base));
        addClasses.apply(void 0, [node].concat(entered));
        return _done(reason);
      }));
    });
    d.add(function() {
      return removeClasses.apply(void 0, [node].concat(base, from, to, entered));
    });
    d.add(function() {
      return _done(Reason.Cancelled);
    });
    return d.dispose;
  }
  function useSplitClasses(classes) {
    if (classes === void 0) {
      classes = "";
    }
    return useMemo3(function() {
      return classes.split(" ").filter(function(className) {
        return className.trim().length > 1;
      });
    }, [classes]);
  }
  var TransitionContext = /* @__PURE__ */ createContext3(null);
  TransitionContext.displayName = "TransitionContext";
  var TreeStates;
  (function(TreeStates2) {
    TreeStates2["Visible"] = "visible";
    TreeStates2["Hidden"] = "hidden";
  })(TreeStates || (TreeStates = {}));
  function useTransitionContext() {
    var context = useContext3(TransitionContext);
    if (context === null) {
      throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
    }
    return context;
  }
  function useParentNesting() {
    var context = useContext3(NestingContext);
    if (context === null) {
      throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
    }
    return context;
  }
  var NestingContext = /* @__PURE__ */ createContext3(null);
  NestingContext.displayName = "NestingContext";
  function hasChildren(bag) {
    if ("children" in bag)
      return hasChildren(bag.children);
    return bag.current.filter(function(_ref) {
      var state2 = _ref.state;
      return state2 === TreeStates.Visible;
    }).length > 0;
  }
  function useNesting(done) {
    var doneRef = useRef4(done);
    var transitionableChildren = useRef4([]);
    var mounted = useIsMounted();
    useEffect3(function() {
      doneRef.current = done;
    }, [done]);
    var unregister = useCallback4(function(childId, strategy) {
      var _match;
      if (strategy === void 0) {
        strategy = RenderStrategy.Hidden;
      }
      var idx = transitionableChildren.current.findIndex(function(_ref2) {
        var id22 = _ref2.id;
        return id22 === childId;
      });
      if (idx === -1)
        return;
      match(strategy, (_match = {}, _match[RenderStrategy.Unmount] = function() {
        transitionableChildren.current.splice(idx, 1);
      }, _match[RenderStrategy.Hidden] = function() {
        transitionableChildren.current[idx].state = TreeStates.Hidden;
      }, _match));
      if (!hasChildren(transitionableChildren) && mounted.current) {
        doneRef.current == null ? void 0 : doneRef.current();
      }
    }, [doneRef, mounted, transitionableChildren]);
    var register = useCallback4(function(childId) {
      var child = transitionableChildren.current.find(function(_ref3) {
        var id22 = _ref3.id;
        return id22 === childId;
      });
      if (!child) {
        transitionableChildren.current.push({
          id: childId,
          state: TreeStates.Visible
        });
      } else if (child.state !== TreeStates.Visible) {
        child.state = TreeStates.Visible;
      }
      return function() {
        return unregister(childId, RenderStrategy.Unmount);
      };
    }, [transitionableChildren, unregister]);
    return useMemo3(function() {
      return {
        children: transitionableChildren,
        register,
        unregister
      };
    }, [register, unregister, transitionableChildren]);
  }
  function noop2() {
  }
  var eventNames = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
  function ensureEventHooksExist(events) {
    var result = {};
    for (var _iterator = _createForOfIteratorHelperLoose(eventNames), _step; !(_step = _iterator()).done; ) {
      var _events$name;
      var name = _step.value;
      result[name] = (_events$name = events[name]) != null ? _events$name : noop2;
    }
    return result;
  }
  function useEvents(events) {
    var eventsRef = useRef4(ensureEventHooksExist(events));
    useEffect3(function() {
      eventsRef.current = ensureEventHooksExist(events);
    }, [events]);
    return eventsRef;
  }
  var DEFAULT_TRANSITION_CHILD_TAG = "div";
  var TransitionChildRenderFeatures = Features.RenderStrategy;
  function TransitionChild(props) {
    var _match3;
    var beforeEnter = props.beforeEnter, afterEnter = props.afterEnter, beforeLeave = props.beforeLeave, afterLeave = props.afterLeave, enter = props.enter, enterFrom = props.enterFrom, enterTo = props.enterTo, entered = props.entered, leave = props.leave, leaveFrom = props.leaveFrom, leaveTo = props.leaveTo, rest = _objectWithoutPropertiesLoose2(props, ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave", "enter", "enterFrom", "enterTo", "entered", "leave", "leaveFrom", "leaveTo"]);
    var container = useRef4(null);
    var _useState = useState3(TreeStates.Visible), state2 = _useState[0], setState = _useState[1];
    var strategy = rest.unmount ? RenderStrategy.Unmount : RenderStrategy.Hidden;
    var _useTransitionContext = useTransitionContext(), show = _useTransitionContext.show, appear = _useTransitionContext.appear, initial = _useTransitionContext.initial;
    var _useParentNesting = useParentNesting(), register = _useParentNesting.register, unregister = _useParentNesting.unregister;
    var id22 = useId();
    var isTransitioning = useRef4(false);
    var nesting = useNesting(function() {
      if (!isTransitioning.current) {
        setState(TreeStates.Hidden);
        unregister(id22);
        events.current.afterLeave();
      }
    });
    useIsoMorphicEffect(function() {
      if (!id22)
        return;
      return register(id22);
    }, [register, id22]);
    useIsoMorphicEffect(function() {
      var _match2;
      if (strategy !== RenderStrategy.Hidden)
        return;
      if (!id22)
        return;
      if (show && state2 !== TreeStates.Visible) {
        setState(TreeStates.Visible);
        return;
      }
      match(state2, (_match2 = {}, _match2[TreeStates.Hidden] = function() {
        return unregister(id22);
      }, _match2[TreeStates.Visible] = function() {
        return register(id22);
      }, _match2));
    }, [state2, id22, register, unregister, show, strategy]);
    var enterClasses = useSplitClasses(enter);
    var enterFromClasses = useSplitClasses(enterFrom);
    var enterToClasses = useSplitClasses(enterTo);
    var enteredClasses = useSplitClasses(entered);
    var leaveClasses = useSplitClasses(leave);
    var leaveFromClasses = useSplitClasses(leaveFrom);
    var leaveToClasses = useSplitClasses(leaveTo);
    var events = useEvents({
      beforeEnter,
      afterEnter,
      beforeLeave,
      afterLeave
    });
    var ready = useServerHandoffComplete();
    useEffect3(function() {
      if (ready && state2 === TreeStates.Visible && container.current === null) {
        throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    }, [container, state2, ready]);
    var skip = initial && !appear;
    useIsoMorphicEffect(function() {
      var node = container.current;
      if (!node)
        return;
      if (skip)
        return;
      isTransitioning.current = true;
      if (show)
        events.current.beforeEnter();
      if (!show)
        events.current.beforeLeave();
      return show ? transition(node, enterClasses, enterFromClasses, enterToClasses, enteredClasses, function(reason) {
        isTransitioning.current = false;
        if (reason === Reason.Finished)
          events.current.afterEnter();
      }) : transition(node, leaveClasses, leaveFromClasses, leaveToClasses, enteredClasses, function(reason) {
        isTransitioning.current = false;
        if (reason !== Reason.Finished)
          return;
        if (!hasChildren(nesting)) {
          setState(TreeStates.Hidden);
          unregister(id22);
          events.current.afterLeave();
        }
      });
    }, [events, id22, isTransitioning, unregister, nesting, container, skip, show, enterClasses, enterFromClasses, enterToClasses, leaveClasses, leaveFromClasses, leaveToClasses]);
    var propsWeControl = {
      ref: container
    };
    var passthroughProps = rest;
    return react_default.createElement(NestingContext.Provider, {
      value: nesting
    }, react_default.createElement(OpenClosedProvider, {
      value: match(state2, (_match3 = {}, _match3[TreeStates.Visible] = State.Open, _match3[TreeStates.Hidden] = State.Closed, _match3))
    }, render2({
      props: _extends3({}, passthroughProps, propsWeControl),
      defaultTag: DEFAULT_TRANSITION_CHILD_TAG,
      features: TransitionChildRenderFeatures,
      visible: state2 === TreeStates.Visible,
      name: "Transition.Child"
    })));
  }
  function Transition(props) {
    var show = props.show, _props$appear = props.appear, appear = _props$appear === void 0 ? false : _props$appear, unmount = props.unmount, passthroughProps = _objectWithoutPropertiesLoose2(props, ["show", "appear", "unmount"]);
    var usesOpenClosedState = useOpenClosed();
    if (show === void 0 && usesOpenClosedState !== null) {
      var _match4;
      show = match(usesOpenClosedState, (_match4 = {}, _match4[State.Open] = true, _match4[State.Closed] = false, _match4));
    }
    if (![true, false].includes(show)) {
      throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
    }
    var _useState2 = useState3(show ? TreeStates.Visible : TreeStates.Hidden), state2 = _useState2[0], setState = _useState2[1];
    var nestingBag = useNesting(function() {
      setState(TreeStates.Hidden);
    });
    var initial = useIsInitialRender();
    var transitionBag = useMemo3(function() {
      return {
        show,
        appear: appear || !initial,
        initial
      };
    }, [show, appear, initial]);
    useEffect3(function() {
      if (show) {
        setState(TreeStates.Visible);
      } else if (!hasChildren(nestingBag)) {
        setState(TreeStates.Hidden);
      }
    }, [show, nestingBag]);
    var sharedProps = {
      unmount
    };
    return react_default.createElement(NestingContext.Provider, {
      value: nestingBag
    }, react_default.createElement(TransitionContext.Provider, {
      value: transitionBag
    }, render2({
      props: _extends3({}, sharedProps, {
        as: Fragment3,
        children: react_default.createElement(TransitionChild, Object.assign({}, sharedProps, passthroughProps))
      }),
      defaultTag: Fragment3,
      features: TransitionChildRenderFeatures,
      visible: state2 === TreeStates.Visible,
      name: "Transition"
    })));
  }
  Transition.Child = function Child(props) {
    var hasTransitionContext = useContext3(TransitionContext) !== null;
    var hasOpenClosedContext = useOpenClosed() !== null;
    return !hasTransitionContext && hasOpenClosedContext ? react_default.createElement(Transition, Object.assign({}, props)) : react_default.createElement(TransitionChild, Object.assign({}, props));
  };
  Transition.Root = Transition;

  // deno:https://cdn.skypack.dev/-/@heroicons/react@v1.0.5-4UYuyYr4JGM6kwOlDaDY/dist=es2019,mode=imports/unoptimized/outline/esm/MenuIcon.js
  function MenuIcon(props) {
    return /* @__PURE__ */ createElement("svg", Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor",
      "aria-hidden": "true"
    }, props), /* @__PURE__ */ createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M4 6h16M4 12h16M4 18h16"
    }));
  }
  var MenuIcon_default = MenuIcon;

  // deno:https://cdn.skypack.dev/-/@heroicons/react@v1.0.5-4UYuyYr4JGM6kwOlDaDY/dist=es2019,mode=imports/unoptimized/outline/esm/XIcon.js
  function XIcon(props) {
    return /* @__PURE__ */ createElement("svg", Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor",
      "aria-hidden": "true"
    }, props), /* @__PURE__ */ createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M6 18L18 6M6 6l12 12"
    }));
  }
  var XIcon_default = XIcon;

  // deno:file:///home/ely/Documents/fullstack/my_astrodon_examples/react_example/renderer/src/js/pages/navigation.tsx
  var navigation = [
    { name: "home", to: "/" }
  ];
  function classNames(...classes) {
    return tw`${classes.filter(Boolean).join(" ")}`;
  }
  var Navigation = () => /* @__PURE__ */ react_default.createElement(Disclosure, {
    as: "nav",
    className: tw`bg-gray-800`,
    dir: "rtf"
  }, ({ open }) => /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, /* @__PURE__ */ react_default.createElement("div", {
    className: tw`max-w-7xl mx-auto pr-2 sm:px-6 lg:px-8`,
    dir: "rtf"
  }, /* @__PURE__ */ react_default.createElement("div", {
    className: tw`relative flex items-center justify-between h-16`
  }, /* @__PURE__ */ react_default.createElement("div", {
    dir: "rtf",
    className: tw`absolute inset-y-0 right-0  float-right items-center sm:hidden`
  }, /* @__PURE__ */ react_default.createElement(Disclosure.Button, {
    className: tw`inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white`
  }, /* @__PURE__ */ react_default.createElement("span", {
    className: tw`sr-only`
  }, "Open main menu"), open ? /* @__PURE__ */ react_default.createElement(XIcon_default, {
    className: tw`block h-6 w-6`,
    "aria-hidden": "true"
  }) : /* @__PURE__ */ react_default.createElement(MenuIcon_default, {
    className: tw`block h-6 w-6`,
    "aria-hidden": "true"
  }))), /* @__PURE__ */ react_default.createElement("div", {
    className: tw`flex-1 flex items-center justify-center sm:items-stretch sm:justify-start`,
    dir: "rtf"
  }, /* @__PURE__ */ react_default.createElement("div", {
    className: tw`hidden sm:block sm:ml-6`,
    dir: "rtf"
  }, /* @__PURE__ */ react_default.createElement("div", {
    className: tw`flex space-x-4`
  }, navigation.map((item) => /* @__PURE__ */ react_default.createElement(NavLink, {
    key: item.name,
    to: item.to,
    end: true,
    className: ({ isActive }) => classNames(isActive ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white", "px-3 py-2 rounded-md text-sm font-medium")
  }, item.name))))), /* @__PURE__ */ react_default.createElement("div", {
    dir: "rtf",
    className: tw`absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0`
  }, /* @__PURE__ */ react_default.createElement(Menu, {
    as: "div",
    className: tw`ml-3 relative`,
    dir: "rtf"
  }, ({ open: open2 }) => /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, /* @__PURE__ */ react_default.createElement(Transition, {
    show: open2,
    as: Fragment,
    enter: "transition ease-out duration-100",
    enterFrom: "transform opacity-0 scale-95",
    enterTo: "transform opacity-100 scale-100",
    leave: "transition ease-in duration-75",
    leaveFrom: "transform opacity-100 scale-100",
    leaveTo: "transform opacity-0 scale-95"
  }, /* @__PURE__ */ react_default.createElement(Menu.Items, {
    dir: "rtf",
    static: true,
    className: tw`origin-top-left absolute left-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none`
  }, /* @__PURE__ */ react_default.createElement(Menu.Item, null, ({ active }) => /* @__PURE__ */ react_default.createElement("a", {
    href: "#",
    className: classNames(active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700")
  }, "Your Profile")), /* @__PURE__ */ react_default.createElement(Menu.Item, null, ({ active }) => /* @__PURE__ */ react_default.createElement("a", {
    href: "#",
    className: classNames(active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700")
  }, "Settings")), /* @__PURE__ */ react_default.createElement(Menu.Item, null, ({ active }) => /* @__PURE__ */ react_default.createElement("a", {
    style: { textAlign: "right" },
    dir: "rtf",
    href: "#",
    className: classNames(active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700")
  }, "Sign out"))))))))), /* @__PURE__ */ react_default.createElement(Disclosure.Panel, {
    className: tw`sm:hidden`
  }, /* @__PURE__ */ react_default.createElement("div", {
    className: tw`pr-2 pt-2 pb-3 space-y-1`
  }, navigation.map((item) => /* @__PURE__ */ react_default.createElement(NavLink, {
    key: item.name,
    to: item.to,
    end: true,
    className: ({ isActive }) => classNames(isActive ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white", "block mr-4 py-2 rounded-md text-base font-medium")
  }, item.name))))));

  // deno:file:///home/ely/Documents/fullstack/my_astrodon_examples/react_example/renderer/src/js/pages/home.tsx
  var Home = () => {
    return /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, /* @__PURE__ */ react_default.createElement("h2", null, "home page"), /* @__PURE__ */ react_default.createElement("button", {
      onClick: async () => await Deno.writeTextFile(`hello.txt`, "Hello World!")
    }, "create file"), /* @__PURE__ */ react_default.createElement("div", null, "create file don't work for now"));
  };

  // deno:file:///home/ely/Documents/fullstack/my_astrodon_examples/react_example/renderer/src/js/app.tsx
  var App = () => /* @__PURE__ */ react_default.createElement("div", null, /* @__PURE__ */ react_default.createElement(Navigation, null), /* @__PURE__ */ react_default.createElement(Routes, null, /* @__PURE__ */ react_default.createElement(Route, {
    path: "/",
    element: /* @__PURE__ */ react_default.createElement(Home, null)
  })));

  // deno:file:///home/ely/Documents/fullstack/my_astrodon_examples/react_example/renderer/src/js/main.tsx
  var BrowserApp = () => /* @__PURE__ */ react_default.createElement(HashRouter, {
    hashType: "slash"
  }, /* @__PURE__ */ react_default.createElement(App, null));
  addEventListener("DOMContentLoaded", () => {
    react_dom_default.render(/* @__PURE__ */ react_default.createElement(BrowserApp, null), document.querySelector("#main"));
  });
})();
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/**
 * React Router DOM v6.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * React Router v6.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
