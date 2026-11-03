(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
var jsxRuntime = { exports: {} };
var reactJsxRuntime_production_min = {};
var react = { exports: {} };
var react_production_min = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredReact_production_min;
function requireReact_production_min() {
  if (hasRequiredReact_production_min) return react_production_min;
  hasRequiredReact_production_min = 1;
  var l = Symbol.for("react.element"), n = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), q = Symbol.for("react.strict_mode"), r = Symbol.for("react.profiler"), t = Symbol.for("react.provider"), u = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), x = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), z = Symbol.iterator;
  function A(a) {
    if (null === a || "object" !== typeof a) return null;
    a = z && a[z] || a["@@iterator"];
    return "function" === typeof a ? a : null;
  }
  var B = { isMounted: function() {
    return false;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, C = Object.assign, D = {};
  function E(a, b, e) {
    this.props = a;
    this.context = b;
    this.refs = D;
    this.updater = e || B;
  }
  E.prototype.isReactComponent = {};
  E.prototype.setState = function(a, b) {
    if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, a, b, "setState");
  };
  E.prototype.forceUpdate = function(a) {
    this.updater.enqueueForceUpdate(this, a, "forceUpdate");
  };
  function F() {
  }
  F.prototype = E.prototype;
  function G(a, b, e) {
    this.props = a;
    this.context = b;
    this.refs = D;
    this.updater = e || B;
  }
  var H = G.prototype = new F();
  H.constructor = G;
  C(H, E.prototype);
  H.isPureReactComponent = true;
  var I = Array.isArray, J = Object.prototype.hasOwnProperty, K = { current: null }, L = { key: true, ref: true, __self: true, __source: true };
  function M(a, b, e) {
    var d, c = {}, k = null, h = null;
    if (null != b) for (d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), b) J.call(b, d) && !L.hasOwnProperty(d) && (c[d] = b[d]);
    var g = arguments.length - 2;
    if (1 === g) c.children = e;
    else if (1 < g) {
      for (var f = Array(g), m = 0; m < g; m++) f[m] = arguments[m + 2];
      c.children = f;
    }
    if (a && a.defaultProps) for (d in g = a.defaultProps, g) void 0 === c[d] && (c[d] = g[d]);
    return { $$typeof: l, type: a, key: k, ref: h, props: c, _owner: K.current };
  }
  function N(a, b) {
    return { $$typeof: l, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner };
  }
  function O(a) {
    return "object" === typeof a && null !== a && a.$$typeof === l;
  }
  function escape(a) {
    var b = { "=": "=0", ":": "=2" };
    return "$" + a.replace(/[=:]/g, function(a2) {
      return b[a2];
    });
  }
  var P = /\/+/g;
  function Q(a, b) {
    return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
  }
  function R(a, b, e, d, c) {
    var k = typeof a;
    if ("undefined" === k || "boolean" === k) a = null;
    var h = false;
    if (null === a) h = true;
    else switch (k) {
      case "string":
      case "number":
        h = true;
        break;
      case "object":
        switch (a.$$typeof) {
          case l:
          case n:
            h = true;
        }
    }
    if (h) return h = a, c = c(h), a = "" === d ? "." + Q(h, 0) : d, I(c) ? (e = "", null != a && (e = a.replace(P, "$&/") + "/"), R(c, b, e, "", function(a2) {
      return a2;
    })) : null != c && (O(c) && (c = N(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P, "$&/") + "/") + a)), b.push(c)), 1;
    h = 0;
    d = "" === d ? "." : d + ":";
    if (I(a)) for (var g = 0; g < a.length; g++) {
      k = a[g];
      var f = d + Q(k, g);
      h += R(k, b, e, f, c);
    }
    else if (f = A(a), "function" === typeof f) for (a = f.call(a), g = 0; !(k = a.next()).done; ) k = k.value, f = d + Q(k, g++), h += R(k, b, e, f, c);
    else if ("object" === k) throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
    return h;
  }
  function S(a, b, e) {
    if (null == a) return a;
    var d = [], c = 0;
    R(a, d, "", "", function(a2) {
      return b.call(e, a2, c++);
    });
    return d;
  }
  function T(a) {
    if (-1 === a._status) {
      var b = a._result;
      b = b();
      b.then(function(b2) {
        if (0 === a._status || -1 === a._status) a._status = 1, a._result = b2;
      }, function(b2) {
        if (0 === a._status || -1 === a._status) a._status = 2, a._result = b2;
      });
      -1 === a._status && (a._status = 0, a._result = b);
    }
    if (1 === a._status) return a._result.default;
    throw a._result;
  }
  var U = { current: null }, V = { transition: null }, W = { ReactCurrentDispatcher: U, ReactCurrentBatchConfig: V, ReactCurrentOwner: K };
  function X2() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  react_production_min.Children = { map: S, forEach: function(a, b, e) {
    S(a, function() {
      b.apply(this, arguments);
    }, e);
  }, count: function(a) {
    var b = 0;
    S(a, function() {
      b++;
    });
    return b;
  }, toArray: function(a) {
    return S(a, function(a2) {
      return a2;
    }) || [];
  }, only: function(a) {
    if (!O(a)) throw Error("React.Children.only expected to receive a single React element child.");
    return a;
  } };
  react_production_min.Component = E;
  react_production_min.Fragment = p;
  react_production_min.Profiler = r;
  react_production_min.PureComponent = G;
  react_production_min.StrictMode = q;
  react_production_min.Suspense = w;
  react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W;
  react_production_min.act = X2;
  react_production_min.cloneElement = function(a, b, e) {
    if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
    var d = C({}, a.props), c = a.key, k = a.ref, h = a._owner;
    if (null != b) {
      void 0 !== b.ref && (k = b.ref, h = K.current);
      void 0 !== b.key && (c = "" + b.key);
      if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
      for (f in b) J.call(b, f) && !L.hasOwnProperty(f) && (d[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
    }
    var f = arguments.length - 2;
    if (1 === f) d.children = e;
    else if (1 < f) {
      g = Array(f);
      for (var m = 0; m < f; m++) g[m] = arguments[m + 2];
      d.children = g;
    }
    return { $$typeof: l, type: a.type, key: c, ref: k, props: d, _owner: h };
  };
  react_production_min.createContext = function(a) {
    a = { $$typeof: u, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
    a.Provider = { $$typeof: t, _context: a };
    return a.Consumer = a;
  };
  react_production_min.createElement = M;
  react_production_min.createFactory = function(a) {
    var b = M.bind(null, a);
    b.type = a;
    return b;
  };
  react_production_min.createRef = function() {
    return { current: null };
  };
  react_production_min.forwardRef = function(a) {
    return { $$typeof: v, render: a };
  };
  react_production_min.isValidElement = O;
  react_production_min.lazy = function(a) {
    return { $$typeof: y, _payload: { _status: -1, _result: a }, _init: T };
  };
  react_production_min.memo = function(a, b) {
    return { $$typeof: x, type: a, compare: void 0 === b ? null : b };
  };
  react_production_min.startTransition = function(a) {
    var b = V.transition;
    V.transition = {};
    try {
      a();
    } finally {
      V.transition = b;
    }
  };
  react_production_min.unstable_act = X2;
  react_production_min.useCallback = function(a, b) {
    return U.current.useCallback(a, b);
  };
  react_production_min.useContext = function(a) {
    return U.current.useContext(a);
  };
  react_production_min.useDebugValue = function() {
  };
  react_production_min.useDeferredValue = function(a) {
    return U.current.useDeferredValue(a);
  };
  react_production_min.useEffect = function(a, b) {
    return U.current.useEffect(a, b);
  };
  react_production_min.useId = function() {
    return U.current.useId();
  };
  react_production_min.useImperativeHandle = function(a, b, e) {
    return U.current.useImperativeHandle(a, b, e);
  };
  react_production_min.useInsertionEffect = function(a, b) {
    return U.current.useInsertionEffect(a, b);
  };
  react_production_min.useLayoutEffect = function(a, b) {
    return U.current.useLayoutEffect(a, b);
  };
  react_production_min.useMemo = function(a, b) {
    return U.current.useMemo(a, b);
  };
  react_production_min.useReducer = function(a, b, e) {
    return U.current.useReducer(a, b, e);
  };
  react_production_min.useRef = function(a) {
    return U.current.useRef(a);
  };
  react_production_min.useState = function(a) {
    return U.current.useState(a);
  };
  react_production_min.useSyncExternalStore = function(a, b, e) {
    return U.current.useSyncExternalStore(a, b, e);
  };
  react_production_min.useTransition = function() {
    return U.current.useTransition();
  };
  react_production_min.version = "18.3.1";
  return react_production_min;
}
var hasRequiredReact;
function requireReact() {
  if (hasRequiredReact) return react.exports;
  hasRequiredReact = 1;
  {
    react.exports = requireReact_production_min();
  }
  return react.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredReactJsxRuntime_production_min;
function requireReactJsxRuntime_production_min() {
  if (hasRequiredReactJsxRuntime_production_min) return reactJsxRuntime_production_min;
  hasRequiredReactJsxRuntime_production_min = 1;
  var f = requireReact(), k = Symbol.for("react.element"), l = Symbol.for("react.fragment"), m = Object.prototype.hasOwnProperty, n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p = { key: true, ref: true, __self: true, __source: true };
  function q(c, a, g) {
    var b, d = {}, e = null, h = null;
    void 0 !== g && (e = "" + g);
    void 0 !== a.key && (e = "" + a.key);
    void 0 !== a.ref && (h = a.ref);
    for (b in a) m.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
    if (c && c.defaultProps) for (b in a = c.defaultProps, a) void 0 === d[b] && (d[b] = a[b]);
    return { $$typeof: k, type: c, key: e, ref: h, props: d, _owner: n.current };
  }
  reactJsxRuntime_production_min.Fragment = l;
  reactJsxRuntime_production_min.jsx = q;
  reactJsxRuntime_production_min.jsxs = q;
  return reactJsxRuntime_production_min;
}
var hasRequiredJsxRuntime;
function requireJsxRuntime() {
  if (hasRequiredJsxRuntime) return jsxRuntime.exports;
  hasRequiredJsxRuntime = 1;
  {
    jsxRuntime.exports = requireReactJsxRuntime_production_min();
  }
  return jsxRuntime.exports;
}
var jsxRuntimeExports = requireJsxRuntime();
var client = {};
var reactDom = { exports: {} };
var reactDom_production_min = {};
var scheduler = { exports: {} };
var scheduler_production_min = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredScheduler_production_min;
function requireScheduler_production_min() {
  if (hasRequiredScheduler_production_min) return scheduler_production_min;
  hasRequiredScheduler_production_min = 1;
  (function(exports) {
    function f(a, b) {
      var c = a.length;
      a.push(b);
      a: for (; 0 < c; ) {
        var d = c - 1 >>> 1, e = a[d];
        if (0 < g(e, b)) a[d] = b, a[c] = e, c = d;
        else break a;
      }
    }
    function h(a) {
      return 0 === a.length ? null : a[0];
    }
    function k(a) {
      if (0 === a.length) return null;
      var b = a[0], c = a.pop();
      if (c !== b) {
        a[0] = c;
        a: for (var d = 0, e = a.length, w = e >>> 1; d < w; ) {
          var m = 2 * (d + 1) - 1, C = a[m], n = m + 1, x = a[n];
          if (0 > g(C, c)) n < e && 0 > g(x, C) ? (a[d] = x, a[n] = c, d = n) : (a[d] = C, a[m] = c, d = m);
          else if (n < e && 0 > g(x, c)) a[d] = x, a[n] = c, d = n;
          else break a;
        }
      }
      return b;
    }
    function g(a, b) {
      var c = a.sortIndex - b.sortIndex;
      return 0 !== c ? c : a.id - b.id;
    }
    if ("object" === typeof performance && "function" === typeof performance.now) {
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
    var r = [], t = [], u = 1, v = null, y = 3, z = false, A = false, B = false, D = "function" === typeof setTimeout ? setTimeout : null, E = "function" === typeof clearTimeout ? clearTimeout : null, F = "undefined" !== typeof setImmediate ? setImmediate : null;
    "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function G(a) {
      for (var b = h(t); null !== b; ) {
        if (null === b.callback) k(t);
        else if (b.startTime <= a) k(t), b.sortIndex = b.expirationTime, f(r, b);
        else break;
        b = h(t);
      }
    }
    function H(a) {
      B = false;
      G(a);
      if (!A) if (null !== h(r)) A = true, I(J);
      else {
        var b = h(t);
        null !== b && K(H, b.startTime - a);
      }
    }
    function J(a, b) {
      A = false;
      B && (B = false, E(L), L = -1);
      z = true;
      var c = y;
      try {
        G(b);
        for (v = h(r); null !== v && (!(v.expirationTime > b) || a && !M()); ) {
          var d = v.callback;
          if ("function" === typeof d) {
            v.callback = null;
            y = v.priorityLevel;
            var e = d(v.expirationTime <= b);
            b = exports.unstable_now();
            "function" === typeof e ? v.callback = e : v === h(r) && k(r);
            G(b);
          } else k(r);
          v = h(r);
        }
        if (null !== v) var w = true;
        else {
          var m = h(t);
          null !== m && K(H, m.startTime - b);
          w = false;
        }
        return w;
      } finally {
        v = null, y = c, z = false;
      }
    }
    var N = false, O = null, L = -1, P = 5, Q = -1;
    function M() {
      return exports.unstable_now() - Q < P ? false : true;
    }
    function R() {
      if (null !== O) {
        var a = exports.unstable_now();
        Q = a;
        var b = true;
        try {
          b = O(true, a);
        } finally {
          b ? S() : (N = false, O = null);
        }
      } else N = false;
    }
    var S;
    if ("function" === typeof F) S = function() {
      F(R);
    };
    else if ("undefined" !== typeof MessageChannel) {
      var T = new MessageChannel(), U = T.port2;
      T.port1.onmessage = R;
      S = function() {
        U.postMessage(null);
      };
    } else S = function() {
      D(R, 0);
    };
    function I(a) {
      O = a;
      N || (N = true, S());
    }
    function K(a, b) {
      L = D(function() {
        a(exports.unstable_now());
      }, b);
    }
    exports.unstable_IdlePriority = 5;
    exports.unstable_ImmediatePriority = 1;
    exports.unstable_LowPriority = 4;
    exports.unstable_NormalPriority = 3;
    exports.unstable_Profiling = null;
    exports.unstable_UserBlockingPriority = 2;
    exports.unstable_cancelCallback = function(a) {
      a.callback = null;
    };
    exports.unstable_continueExecution = function() {
      A || z || (A = true, I(J));
    };
    exports.unstable_forceFrameRate = function(a) {
      0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P = 0 < a ? Math.floor(1e3 / a) : 5;
    };
    exports.unstable_getCurrentPriorityLevel = function() {
      return y;
    };
    exports.unstable_getFirstCallbackNode = function() {
      return h(r);
    };
    exports.unstable_next = function(a) {
      switch (y) {
        case 1:
        case 2:
        case 3:
          var b = 3;
          break;
        default:
          b = y;
      }
      var c = y;
      y = b;
      try {
        return a();
      } finally {
        y = c;
      }
    };
    exports.unstable_pauseExecution = function() {
    };
    exports.unstable_requestPaint = function() {
    };
    exports.unstable_runWithPriority = function(a, b) {
      switch (a) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          a = 3;
      }
      var c = y;
      y = a;
      try {
        return b();
      } finally {
        y = c;
      }
    };
    exports.unstable_scheduleCallback = function(a, b, c) {
      var d = exports.unstable_now();
      "object" === typeof c && null !== c ? (c = c.delay, c = "number" === typeof c && 0 < c ? d + c : d) : c = d;
      switch (a) {
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
      a = { id: u++, callback: b, priorityLevel: a, startTime: c, expirationTime: e, sortIndex: -1 };
      c > d ? (a.sortIndex = c, f(t, a), null === h(r) && a === h(t) && (B ? (E(L), L = -1) : B = true, K(H, c - d))) : (a.sortIndex = e, f(r, a), A || z || (A = true, I(J)));
      return a;
    };
    exports.unstable_shouldYield = M;
    exports.unstable_wrapCallback = function(a) {
      var b = y;
      return function() {
        var c = y;
        y = b;
        try {
          return a.apply(this, arguments);
        } finally {
          y = c;
        }
      };
    };
  })(scheduler_production_min);
  return scheduler_production_min;
}
var hasRequiredScheduler;
function requireScheduler() {
  if (hasRequiredScheduler) return scheduler.exports;
  hasRequiredScheduler = 1;
  {
    scheduler.exports = requireScheduler_production_min();
  }
  return scheduler.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredReactDom_production_min;
function requireReactDom_production_min() {
  if (hasRequiredReactDom_production_min) return reactDom_production_min;
  hasRequiredReactDom_production_min = 1;
  var aa = requireReact(), ca = requireScheduler();
  function p(a) {
    for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) b += "&args[]=" + encodeURIComponent(arguments[c]);
    return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var da = /* @__PURE__ */ new Set(), ea = {};
  function fa(a, b) {
    ha(a, b);
    ha(a + "Capture", b);
  }
  function ha(a, b) {
    ea[a] = b;
    for (a = 0; a < b.length; a++) da.add(b[a]);
  }
  var ia = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement), ja = Object.prototype.hasOwnProperty, ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, la = {}, ma = {};
  function oa(a) {
    if (ja.call(ma, a)) return true;
    if (ja.call(la, a)) return false;
    if (ka.test(a)) return ma[a] = true;
    la[a] = true;
    return false;
  }
  function pa(a, b, c, d) {
    if (null !== c && 0 === c.type) return false;
    switch (typeof b) {
      case "function":
      case "symbol":
        return true;
      case "boolean":
        if (d) return false;
        if (null !== c) return !c.acceptsBooleans;
        a = a.toLowerCase().slice(0, 5);
        return "data-" !== a && "aria-" !== a;
      default:
        return false;
    }
  }
  function qa(a, b, c, d) {
    if (null === b || "undefined" === typeof b || pa(a, b, c, d)) return true;
    if (d) return false;
    if (null !== c) switch (c.type) {
      case 3:
        return !b;
      case 4:
        return false === b;
      case 5:
        return isNaN(b);
      case 6:
        return isNaN(b) || 1 > b;
    }
    return false;
  }
  function v(a, b, c, d, e, f, g) {
    this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
    this.attributeName = d;
    this.attributeNamespace = e;
    this.mustUseProperty = c;
    this.propertyName = a;
    this.type = b;
    this.sanitizeURL = f;
    this.removeEmptyString = g;
  }
  var z = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
    z[a] = new v(a, 0, false, a, null, false, false);
  });
  [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
    var b = a[0];
    z[b] = new v(b, 1, false, a[1], null, false, false);
  });
  ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
    z[a] = new v(a, 2, false, a.toLowerCase(), null, false, false);
  });
  ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
    z[a] = new v(a, 2, false, a, null, false, false);
  });
  "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
    z[a] = new v(a, 3, false, a.toLowerCase(), null, false, false);
  });
  ["checked", "multiple", "muted", "selected"].forEach(function(a) {
    z[a] = new v(a, 3, true, a, null, false, false);
  });
  ["capture", "download"].forEach(function(a) {
    z[a] = new v(a, 4, false, a, null, false, false);
  });
  ["cols", "rows", "size", "span"].forEach(function(a) {
    z[a] = new v(a, 6, false, a, null, false, false);
  });
  ["rowSpan", "start"].forEach(function(a) {
    z[a] = new v(a, 5, false, a.toLowerCase(), null, false, false);
  });
  var ra = /[\-:]([a-z])/g;
  function sa(a) {
    return a[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
    var b = a.replace(
      ra,
      sa
    );
    z[b] = new v(b, 1, false, a, null, false, false);
  });
  "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
    var b = a.replace(ra, sa);
    z[b] = new v(b, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
  });
  ["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
    var b = a.replace(ra, sa);
    z[b] = new v(b, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
  });
  ["tabIndex", "crossOrigin"].forEach(function(a) {
    z[a] = new v(a, 1, false, a.toLowerCase(), null, false, false);
  });
  z.xlinkHref = new v("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
  ["src", "href", "action", "formAction"].forEach(function(a) {
    z[a] = new v(a, 1, false, a.toLowerCase(), null, true, true);
  });
  function ta(a, b, c, d) {
    var e = z.hasOwnProperty(b) ? z[b] : null;
    if (null !== e ? 0 !== e.type : d || !(2 < b.length) || "o" !== b[0] && "O" !== b[0] || "n" !== b[1] && "N" !== b[1]) qa(b, c, e, d) && (c = null), d || null === e ? oa(b) && (null === c ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = null === c ? 3 === e.type ? false : "" : c : (b = e.attributeName, d = e.attributeNamespace, null === c ? a.removeAttribute(b) : (e = e.type, c = 3 === e || 4 === e && true === c ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c)));
  }
  var ua = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, va = Symbol.for("react.element"), wa = Symbol.for("react.portal"), ya = Symbol.for("react.fragment"), za = Symbol.for("react.strict_mode"), Aa = Symbol.for("react.profiler"), Ba = Symbol.for("react.provider"), Ca = Symbol.for("react.context"), Da = Symbol.for("react.forward_ref"), Ea = Symbol.for("react.suspense"), Fa = Symbol.for("react.suspense_list"), Ga = Symbol.for("react.memo"), Ha = Symbol.for("react.lazy");
  var Ia = Symbol.for("react.offscreen");
  var Ja = Symbol.iterator;
  function Ka(a) {
    if (null === a || "object" !== typeof a) return null;
    a = Ja && a[Ja] || a["@@iterator"];
    return "function" === typeof a ? a : null;
  }
  var A = Object.assign, La;
  function Ma(a) {
    if (void 0 === La) try {
      throw Error();
    } catch (c) {
      var b = c.stack.trim().match(/\n( *(at )?)/);
      La = b && b[1] || "";
    }
    return "\n" + La + a;
  }
  var Na = false;
  function Oa(a, b) {
    if (!a || Na) return "";
    Na = true;
    var c = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (b) if (b = function() {
        throw Error();
      }, Object.defineProperty(b.prototype, "props", { set: function() {
        throw Error();
      } }), "object" === typeof Reflect && Reflect.construct) {
        try {
          Reflect.construct(b, []);
        } catch (l) {
          var d = l;
        }
        Reflect.construct(a, [], b);
      } else {
        try {
          b.call();
        } catch (l) {
          d = l;
        }
        a.call(b.prototype);
      }
      else {
        try {
          throw Error();
        } catch (l) {
          d = l;
        }
        a();
      }
    } catch (l) {
      if (l && d && "string" === typeof l.stack) {
        for (var e = l.stack.split("\n"), f = d.stack.split("\n"), g = e.length - 1, h = f.length - 1; 1 <= g && 0 <= h && e[g] !== f[h]; ) h--;
        for (; 1 <= g && 0 <= h; g--, h--) if (e[g] !== f[h]) {
          if (1 !== g || 1 !== h) {
            do
              if (g--, h--, 0 > h || e[g] !== f[h]) {
                var k = "\n" + e[g].replace(" at new ", " at ");
                a.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", a.displayName));
                return k;
              }
            while (1 <= g && 0 <= h);
          }
          break;
        }
      }
    } finally {
      Na = false, Error.prepareStackTrace = c;
    }
    return (a = a ? a.displayName || a.name : "") ? Ma(a) : "";
  }
  function Pa(a) {
    switch (a.tag) {
      case 5:
        return Ma(a.type);
      case 16:
        return Ma("Lazy");
      case 13:
        return Ma("Suspense");
      case 19:
        return Ma("SuspenseList");
      case 0:
      case 2:
      case 15:
        return a = Oa(a.type, false), a;
      case 11:
        return a = Oa(a.type.render, false), a;
      case 1:
        return a = Oa(a.type, true), a;
      default:
        return "";
    }
  }
  function Qa(a) {
    if (null == a) return null;
    if ("function" === typeof a) return a.displayName || a.name || null;
    if ("string" === typeof a) return a;
    switch (a) {
      case ya:
        return "Fragment";
      case wa:
        return "Portal";
      case Aa:
        return "Profiler";
      case za:
        return "StrictMode";
      case Ea:
        return "Suspense";
      case Fa:
        return "SuspenseList";
    }
    if ("object" === typeof a) switch (a.$$typeof) {
      case Ca:
        return (a.displayName || "Context") + ".Consumer";
      case Ba:
        return (a._context.displayName || "Context") + ".Provider";
      case Da:
        var b = a.render;
        a = a.displayName;
        a || (a = b.displayName || b.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
        return a;
      case Ga:
        return b = a.displayName || null, null !== b ? b : Qa(a.type) || "Memo";
      case Ha:
        b = a._payload;
        a = a._init;
        try {
          return Qa(a(b));
        } catch (c) {
        }
    }
    return null;
  }
  function Ra(a) {
    var b = a.type;
    switch (a.tag) {
      case 24:
        return "Cache";
      case 9:
        return (b.displayName || "Context") + ".Consumer";
      case 10:
        return (b._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return a = b.render, a = a.displayName || a.name || "", b.displayName || ("" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return b;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return Qa(b);
      case 8:
        return b === za ? "StrictMode" : "Mode";
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
      case 17:
      case 2:
      case 14:
      case 15:
        if ("function" === typeof b) return b.displayName || b.name || null;
        if ("string" === typeof b) return b;
    }
    return null;
  }
  function Sa(a) {
    switch (typeof a) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return a;
      case "object":
        return a;
      default:
        return "";
    }
  }
  function Ta(a) {
    var b = a.type;
    return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b || "radio" === b);
  }
  function Ua(a) {
    var b = Ta(a) ? "checked" : "value", c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b), d = "" + a[b];
    if (!a.hasOwnProperty(b) && "undefined" !== typeof c && "function" === typeof c.get && "function" === typeof c.set) {
      var e = c.get, f = c.set;
      Object.defineProperty(a, b, { configurable: true, get: function() {
        return e.call(this);
      }, set: function(a2) {
        d = "" + a2;
        f.call(this, a2);
      } });
      Object.defineProperty(a, b, { enumerable: c.enumerable });
      return { getValue: function() {
        return d;
      }, setValue: function(a2) {
        d = "" + a2;
      }, stopTracking: function() {
        a._valueTracker = null;
        delete a[b];
      } };
    }
  }
  function Va(a) {
    a._valueTracker || (a._valueTracker = Ua(a));
  }
  function Wa(a) {
    if (!a) return false;
    var b = a._valueTracker;
    if (!b) return true;
    var c = b.getValue();
    var d = "";
    a && (d = Ta(a) ? a.checked ? "true" : "false" : a.value);
    a = d;
    return a !== c ? (b.setValue(a), true) : false;
  }
  function Xa(a) {
    a = a || ("undefined" !== typeof document ? document : void 0);
    if ("undefined" === typeof a) return null;
    try {
      return a.activeElement || a.body;
    } catch (b) {
      return a.body;
    }
  }
  function Ya(a, b) {
    var c = b.checked;
    return A({}, b, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != c ? c : a._wrapperState.initialChecked });
  }
  function Za(a, b) {
    var c = null == b.defaultValue ? "" : b.defaultValue, d = null != b.checked ? b.checked : b.defaultChecked;
    c = Sa(null != b.value ? b.value : c);
    a._wrapperState = { initialChecked: d, initialValue: c, controlled: "checkbox" === b.type || "radio" === b.type ? null != b.checked : null != b.value };
  }
  function ab(a, b) {
    b = b.checked;
    null != b && ta(a, "checked", b, false);
  }
  function bb(a, b) {
    ab(a, b);
    var c = Sa(b.value), d = b.type;
    if (null != c) if ("number" === d) {
      if (0 === c && "" === a.value || a.value != c) a.value = "" + c;
    } else a.value !== "" + c && (a.value = "" + c);
    else if ("submit" === d || "reset" === d) {
      a.removeAttribute("value");
      return;
    }
    b.hasOwnProperty("value") ? cb(a, b.type, c) : b.hasOwnProperty("defaultValue") && cb(a, b.type, Sa(b.defaultValue));
    null == b.checked && null != b.defaultChecked && (a.defaultChecked = !!b.defaultChecked);
  }
  function db(a, b, c) {
    if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
      var d = b.type;
      if (!("submit" !== d && "reset" !== d || void 0 !== b.value && null !== b.value)) return;
      b = "" + a._wrapperState.initialValue;
      c || b === a.value || (a.value = b);
      a.defaultValue = b;
    }
    c = a.name;
    "" !== c && (a.name = "");
    a.defaultChecked = !!a._wrapperState.initialChecked;
    "" !== c && (a.name = c);
  }
  function cb(a, b, c) {
    if ("number" !== b || Xa(a.ownerDocument) !== a) null == c ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
  }
  var eb = Array.isArray;
  function fb(a, b, c, d) {
    a = a.options;
    if (b) {
      b = {};
      for (var e = 0; e < c.length; e++) b["$" + c[e]] = true;
      for (c = 0; c < a.length; c++) e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), e && d && (a[c].defaultSelected = true);
    } else {
      c = "" + Sa(c);
      b = null;
      for (e = 0; e < a.length; e++) {
        if (a[e].value === c) {
          a[e].selected = true;
          d && (a[e].defaultSelected = true);
          return;
        }
        null !== b || a[e].disabled || (b = a[e]);
      }
      null !== b && (b.selected = true);
    }
  }
  function gb(a, b) {
    if (null != b.dangerouslySetInnerHTML) throw Error(p(91));
    return A({}, b, { value: void 0, defaultValue: void 0, children: "" + a._wrapperState.initialValue });
  }
  function hb(a, b) {
    var c = b.value;
    if (null == c) {
      c = b.children;
      b = b.defaultValue;
      if (null != c) {
        if (null != b) throw Error(p(92));
        if (eb(c)) {
          if (1 < c.length) throw Error(p(93));
          c = c[0];
        }
        b = c;
      }
      null == b && (b = "");
      c = b;
    }
    a._wrapperState = { initialValue: Sa(c) };
  }
  function ib(a, b) {
    var c = Sa(b.value), d = Sa(b.defaultValue);
    null != c && (c = "" + c, c !== a.value && (a.value = c), null == b.defaultValue && a.defaultValue !== c && (a.defaultValue = c));
    null != d && (a.defaultValue = "" + d);
  }
  function jb(a) {
    var b = a.textContent;
    b === a._wrapperState.initialValue && "" !== b && null !== b && (a.value = b);
  }
  function kb(a) {
    switch (a) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function lb(a, b) {
    return null == a || "http://www.w3.org/1999/xhtml" === a ? kb(b) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b ? "http://www.w3.org/1999/xhtml" : a;
  }
  var mb, nb = (function(a) {
    return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b, c, d, e) {
      MSApp.execUnsafeLocalFunction(function() {
        return a(b, c, d, e);
      });
    } : a;
  })(function(a, b) {
    if ("http://www.w3.org/2000/svg" !== a.namespaceURI || "innerHTML" in a) a.innerHTML = b;
    else {
      mb = mb || document.createElement("div");
      mb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";
      for (b = mb.firstChild; a.firstChild; ) a.removeChild(a.firstChild);
      for (; b.firstChild; ) a.appendChild(b.firstChild);
    }
  });
  function ob(a, b) {
    if (b) {
      var c = a.firstChild;
      if (c && c === a.lastChild && 3 === c.nodeType) {
        c.nodeValue = b;
        return;
      }
    }
    a.textContent = b;
  }
  var pb = {
    animationIterationCount: true,
    aspectRatio: true,
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
  }, qb = ["Webkit", "ms", "Moz", "O"];
  Object.keys(pb).forEach(function(a) {
    qb.forEach(function(b) {
      b = b + a.charAt(0).toUpperCase() + a.substring(1);
      pb[b] = pb[a];
    });
  });
  function rb(a, b, c) {
    return null == b || "boolean" === typeof b || "" === b ? "" : c || "number" !== typeof b || 0 === b || pb.hasOwnProperty(a) && pb[a] ? ("" + b).trim() : b + "px";
  }
  function sb(a, b) {
    a = a.style;
    for (var c in b) if (b.hasOwnProperty(c)) {
      var d = 0 === c.indexOf("--"), e = rb(c, b[c], d);
      "float" === c && (c = "cssFloat");
      d ? a.setProperty(c, e) : a[c] = e;
    }
  }
  var tb = A({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
  function ub(a, b) {
    if (b) {
      if (tb[a] && (null != b.children || null != b.dangerouslySetInnerHTML)) throw Error(p(137, a));
      if (null != b.dangerouslySetInnerHTML) {
        if (null != b.children) throw Error(p(60));
        if ("object" !== typeof b.dangerouslySetInnerHTML || !("__html" in b.dangerouslySetInnerHTML)) throw Error(p(61));
      }
      if (null != b.style && "object" !== typeof b.style) throw Error(p(62));
    }
  }
  function vb(a, b) {
    if (-1 === a.indexOf("-")) return "string" === typeof b.is;
    switch (a) {
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
  var wb = null;
  function xb(a) {
    a = a.target || a.srcElement || window;
    a.correspondingUseElement && (a = a.correspondingUseElement);
    return 3 === a.nodeType ? a.parentNode : a;
  }
  var yb = null, zb = null, Ab = null;
  function Bb(a) {
    if (a = Cb(a)) {
      if ("function" !== typeof yb) throw Error(p(280));
      var b = a.stateNode;
      b && (b = Db(b), yb(a.stateNode, a.type, b));
    }
  }
  function Eb(a) {
    zb ? Ab ? Ab.push(a) : Ab = [a] : zb = a;
  }
  function Fb() {
    if (zb) {
      var a = zb, b = Ab;
      Ab = zb = null;
      Bb(a);
      if (b) for (a = 0; a < b.length; a++) Bb(b[a]);
    }
  }
  function Gb(a, b) {
    return a(b);
  }
  function Hb() {
  }
  var Ib = false;
  function Jb(a, b, c) {
    if (Ib) return a(b, c);
    Ib = true;
    try {
      return Gb(a, b, c);
    } finally {
      if (Ib = false, null !== zb || null !== Ab) Hb(), Fb();
    }
  }
  function Kb(a, b) {
    var c = a.stateNode;
    if (null === c) return null;
    var d = Db(c);
    if (null === d) return null;
    c = d[b];
    a: switch (b) {
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
        (d = !d.disabled) || (a = a.type, d = !("button" === a || "input" === a || "select" === a || "textarea" === a));
        a = !d;
        break a;
      default:
        a = false;
    }
    if (a) return null;
    if (c && "function" !== typeof c) throw Error(p(231, b, typeof c));
    return c;
  }
  var Lb = false;
  if (ia) try {
    var Mb = {};
    Object.defineProperty(Mb, "passive", { get: function() {
      Lb = true;
    } });
    window.addEventListener("test", Mb, Mb);
    window.removeEventListener("test", Mb, Mb);
  } catch (a) {
    Lb = false;
  }
  function Nb(a, b, c, d, e, f, g, h, k) {
    var l = Array.prototype.slice.call(arguments, 3);
    try {
      b.apply(c, l);
    } catch (m) {
      this.onError(m);
    }
  }
  var Ob = false, Pb = null, Qb = false, Rb = null, Sb = { onError: function(a) {
    Ob = true;
    Pb = a;
  } };
  function Tb(a, b, c, d, e, f, g, h, k) {
    Ob = false;
    Pb = null;
    Nb.apply(Sb, arguments);
  }
  function Ub(a, b, c, d, e, f, g, h, k) {
    Tb.apply(this, arguments);
    if (Ob) {
      if (Ob) {
        var l = Pb;
        Ob = false;
        Pb = null;
      } else throw Error(p(198));
      Qb || (Qb = true, Rb = l);
    }
  }
  function Vb(a) {
    var b = a, c = a;
    if (a.alternate) for (; b.return; ) b = b.return;
    else {
      a = b;
      do
        b = a, 0 !== (b.flags & 4098) && (c = b.return), a = b.return;
      while (a);
    }
    return 3 === b.tag ? c : null;
  }
  function Wb(a) {
    if (13 === a.tag) {
      var b = a.memoizedState;
      null === b && (a = a.alternate, null !== a && (b = a.memoizedState));
      if (null !== b) return b.dehydrated;
    }
    return null;
  }
  function Xb(a) {
    if (Vb(a) !== a) throw Error(p(188));
  }
  function Yb(a) {
    var b = a.alternate;
    if (!b) {
      b = Vb(a);
      if (null === b) throw Error(p(188));
      return b !== a ? null : a;
    }
    for (var c = a, d = b; ; ) {
      var e = c.return;
      if (null === e) break;
      var f = e.alternate;
      if (null === f) {
        d = e.return;
        if (null !== d) {
          c = d;
          continue;
        }
        break;
      }
      if (e.child === f.child) {
        for (f = e.child; f; ) {
          if (f === c) return Xb(e), a;
          if (f === d) return Xb(e), b;
          f = f.sibling;
        }
        throw Error(p(188));
      }
      if (c.return !== d.return) c = e, d = f;
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
          if (!g) throw Error(p(189));
        }
      }
      if (c.alternate !== d) throw Error(p(190));
    }
    if (3 !== c.tag) throw Error(p(188));
    return c.stateNode.current === c ? a : b;
  }
  function Zb(a) {
    a = Yb(a);
    return null !== a ? $b(a) : null;
  }
  function $b(a) {
    if (5 === a.tag || 6 === a.tag) return a;
    for (a = a.child; null !== a; ) {
      var b = $b(a);
      if (null !== b) return b;
      a = a.sibling;
    }
    return null;
  }
  var ac = ca.unstable_scheduleCallback, bc = ca.unstable_cancelCallback, cc = ca.unstable_shouldYield, dc = ca.unstable_requestPaint, B = ca.unstable_now, ec = ca.unstable_getCurrentPriorityLevel, fc = ca.unstable_ImmediatePriority, gc = ca.unstable_UserBlockingPriority, hc = ca.unstable_NormalPriority, ic = ca.unstable_LowPriority, jc = ca.unstable_IdlePriority, kc = null, lc = null;
  function mc(a) {
    if (lc && "function" === typeof lc.onCommitFiberRoot) try {
      lc.onCommitFiberRoot(kc, a, void 0, 128 === (a.current.flags & 128));
    } catch (b) {
    }
  }
  var oc = Math.clz32 ? Math.clz32 : nc, pc = Math.log, qc = Math.LN2;
  function nc(a) {
    a >>>= 0;
    return 0 === a ? 32 : 31 - (pc(a) / qc | 0) | 0;
  }
  var rc = 64, sc = 4194304;
  function tc(a) {
    switch (a & -a) {
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
        return a & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return a & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return a;
    }
  }
  function uc(a, b) {
    var c = a.pendingLanes;
    if (0 === c) return 0;
    var d = 0, e = a.suspendedLanes, f = a.pingedLanes, g = c & 268435455;
    if (0 !== g) {
      var h = g & ~e;
      0 !== h ? d = tc(h) : (f &= g, 0 !== f && (d = tc(f)));
    } else g = c & ~e, 0 !== g ? d = tc(g) : 0 !== f && (d = tc(f));
    if (0 === d) return 0;
    if (0 !== b && b !== d && 0 === (b & e) && (e = d & -d, f = b & -b, e >= f || 16 === e && 0 !== (f & 4194240))) return b;
    0 !== (d & 4) && (d |= c & 16);
    b = a.entangledLanes;
    if (0 !== b) for (a = a.entanglements, b &= d; 0 < b; ) c = 31 - oc(b), e = 1 << c, d |= a[c], b &= ~e;
    return d;
  }
  function vc(a, b) {
    switch (a) {
      case 1:
      case 2:
      case 4:
        return b + 250;
      case 8:
      case 16:
      case 32:
      case 64:
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
        return b + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function wc(a, b) {
    for (var c = a.suspendedLanes, d = a.pingedLanes, e = a.expirationTimes, f = a.pendingLanes; 0 < f; ) {
      var g = 31 - oc(f), h = 1 << g, k = e[g];
      if (-1 === k) {
        if (0 === (h & c) || 0 !== (h & d)) e[g] = vc(h, b);
      } else k <= b && (a.expiredLanes |= h);
      f &= ~h;
    }
  }
  function xc(a) {
    a = a.pendingLanes & -1073741825;
    return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
  }
  function yc() {
    var a = rc;
    rc <<= 1;
    0 === (rc & 4194240) && (rc = 64);
    return a;
  }
  function zc(a) {
    for (var b = [], c = 0; 31 > c; c++) b.push(a);
    return b;
  }
  function Ac(a, b, c) {
    a.pendingLanes |= b;
    536870912 !== b && (a.suspendedLanes = 0, a.pingedLanes = 0);
    a = a.eventTimes;
    b = 31 - oc(b);
    a[b] = c;
  }
  function Bc(a, b) {
    var c = a.pendingLanes & ~b;
    a.pendingLanes = b;
    a.suspendedLanes = 0;
    a.pingedLanes = 0;
    a.expiredLanes &= b;
    a.mutableReadLanes &= b;
    a.entangledLanes &= b;
    b = a.entanglements;
    var d = a.eventTimes;
    for (a = a.expirationTimes; 0 < c; ) {
      var e = 31 - oc(c), f = 1 << e;
      b[e] = 0;
      d[e] = -1;
      a[e] = -1;
      c &= ~f;
    }
  }
  function Cc(a, b) {
    var c = a.entangledLanes |= b;
    for (a = a.entanglements; c; ) {
      var d = 31 - oc(c), e = 1 << d;
      e & b | a[d] & b && (a[d] |= b);
      c &= ~e;
    }
  }
  var C = 0;
  function Dc(a) {
    a &= -a;
    return 1 < a ? 4 < a ? 0 !== (a & 268435455) ? 16 : 536870912 : 4 : 1;
  }
  var Ec, Fc, Gc, Hc, Ic, Jc = false, Kc = [], Lc = null, Mc = null, Nc = null, Oc = /* @__PURE__ */ new Map(), Pc = /* @__PURE__ */ new Map(), Qc = [], Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Sc(a, b) {
    switch (a) {
      case "focusin":
      case "focusout":
        Lc = null;
        break;
      case "dragenter":
      case "dragleave":
        Mc = null;
        break;
      case "mouseover":
      case "mouseout":
        Nc = null;
        break;
      case "pointerover":
      case "pointerout":
        Oc.delete(b.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Pc.delete(b.pointerId);
    }
  }
  function Tc(a, b, c, d, e, f) {
    if (null === a || a.nativeEvent !== f) return a = { blockedOn: b, domEventName: c, eventSystemFlags: d, nativeEvent: f, targetContainers: [e] }, null !== b && (b = Cb(b), null !== b && Fc(b)), a;
    a.eventSystemFlags |= d;
    b = a.targetContainers;
    null !== e && -1 === b.indexOf(e) && b.push(e);
    return a;
  }
  function Uc(a, b, c, d, e) {
    switch (b) {
      case "focusin":
        return Lc = Tc(Lc, a, b, c, d, e), true;
      case "dragenter":
        return Mc = Tc(Mc, a, b, c, d, e), true;
      case "mouseover":
        return Nc = Tc(Nc, a, b, c, d, e), true;
      case "pointerover":
        var f = e.pointerId;
        Oc.set(f, Tc(Oc.get(f) || null, a, b, c, d, e));
        return true;
      case "gotpointercapture":
        return f = e.pointerId, Pc.set(f, Tc(Pc.get(f) || null, a, b, c, d, e)), true;
    }
    return false;
  }
  function Vc(a) {
    var b = Wc(a.target);
    if (null !== b) {
      var c = Vb(b);
      if (null !== c) {
        if (b = c.tag, 13 === b) {
          if (b = Wb(c), null !== b) {
            a.blockedOn = b;
            Ic(a.priority, function() {
              Gc(c);
            });
            return;
          }
        } else if (3 === b && c.stateNode.current.memoizedState.isDehydrated) {
          a.blockedOn = 3 === c.tag ? c.stateNode.containerInfo : null;
          return;
        }
      }
    }
    a.blockedOn = null;
  }
  function Xc(a) {
    if (null !== a.blockedOn) return false;
    for (var b = a.targetContainers; 0 < b.length; ) {
      var c = Yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
      if (null === c) {
        c = a.nativeEvent;
        var d = new c.constructor(c.type, c);
        wb = d;
        c.target.dispatchEvent(d);
        wb = null;
      } else return b = Cb(c), null !== b && Fc(b), a.blockedOn = c, false;
      b.shift();
    }
    return true;
  }
  function Zc(a, b, c) {
    Xc(a) && c.delete(b);
  }
  function $c() {
    Jc = false;
    null !== Lc && Xc(Lc) && (Lc = null);
    null !== Mc && Xc(Mc) && (Mc = null);
    null !== Nc && Xc(Nc) && (Nc = null);
    Oc.forEach(Zc);
    Pc.forEach(Zc);
  }
  function ad(a, b) {
    a.blockedOn === b && (a.blockedOn = null, Jc || (Jc = true, ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
  }
  function bd(a) {
    function b(b2) {
      return ad(b2, a);
    }
    if (0 < Kc.length) {
      ad(Kc[0], a);
      for (var c = 1; c < Kc.length; c++) {
        var d = Kc[c];
        d.blockedOn === a && (d.blockedOn = null);
      }
    }
    null !== Lc && ad(Lc, a);
    null !== Mc && ad(Mc, a);
    null !== Nc && ad(Nc, a);
    Oc.forEach(b);
    Pc.forEach(b);
    for (c = 0; c < Qc.length; c++) d = Qc[c], d.blockedOn === a && (d.blockedOn = null);
    for (; 0 < Qc.length && (c = Qc[0], null === c.blockedOn); ) Vc(c), null === c.blockedOn && Qc.shift();
  }
  var cd = ua.ReactCurrentBatchConfig, dd = true;
  function ed(a, b, c, d) {
    var e = C, f = cd.transition;
    cd.transition = null;
    try {
      C = 1, fd(a, b, c, d);
    } finally {
      C = e, cd.transition = f;
    }
  }
  function gd(a, b, c, d) {
    var e = C, f = cd.transition;
    cd.transition = null;
    try {
      C = 4, fd(a, b, c, d);
    } finally {
      C = e, cd.transition = f;
    }
  }
  function fd(a, b, c, d) {
    if (dd) {
      var e = Yc(a, b, c, d);
      if (null === e) hd(a, b, d, id, c), Sc(a, d);
      else if (Uc(e, a, b, c, d)) d.stopPropagation();
      else if (Sc(a, d), b & 4 && -1 < Rc.indexOf(a)) {
        for (; null !== e; ) {
          var f = Cb(e);
          null !== f && Ec(f);
          f = Yc(a, b, c, d);
          null === f && hd(a, b, d, id, c);
          if (f === e) break;
          e = f;
        }
        null !== e && d.stopPropagation();
      } else hd(a, b, d, null, c);
    }
  }
  var id = null;
  function Yc(a, b, c, d) {
    id = null;
    a = xb(d);
    a = Wc(a);
    if (null !== a) if (b = Vb(a), null === b) a = null;
    else if (c = b.tag, 13 === c) {
      a = Wb(b);
      if (null !== a) return a;
      a = null;
    } else if (3 === c) {
      if (b.stateNode.current.memoizedState.isDehydrated) return 3 === b.tag ? b.stateNode.containerInfo : null;
      a = null;
    } else b !== a && (a = null);
    id = a;
    return null;
  }
  function jd(a) {
    switch (a) {
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
        return 1;
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
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (ec()) {
          case fc:
            return 1;
          case gc:
            return 4;
          case hc:
          case ic:
            return 16;
          case jc:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var kd = null, ld = null, md = null;
  function nd() {
    if (md) return md;
    var a, b = ld, c = b.length, d, e = "value" in kd ? kd.value : kd.textContent, f = e.length;
    for (a = 0; a < c && b[a] === e[a]; a++) ;
    var g = c - a;
    for (d = 1; d <= g && b[c - d] === e[f - d]; d++) ;
    return md = e.slice(a, 1 < d ? 1 - d : void 0);
  }
  function od(a) {
    var b = a.keyCode;
    "charCode" in a ? (a = a.charCode, 0 === a && 13 === b && (a = 13)) : a = b;
    10 === a && (a = 13);
    return 32 <= a || 13 === a ? a : 0;
  }
  function pd() {
    return true;
  }
  function qd() {
    return false;
  }
  function rd(a) {
    function b(b2, d, e, f, g) {
      this._reactName = b2;
      this._targetInst = e;
      this.type = d;
      this.nativeEvent = f;
      this.target = g;
      this.currentTarget = null;
      for (var c in a) a.hasOwnProperty(c) && (b2 = a[c], this[c] = b2 ? b2(f) : f[c]);
      this.isDefaultPrevented = (null != f.defaultPrevented ? f.defaultPrevented : false === f.returnValue) ? pd : qd;
      this.isPropagationStopped = qd;
      return this;
    }
    A(b.prototype, { preventDefault: function() {
      this.defaultPrevented = true;
      var a2 = this.nativeEvent;
      a2 && (a2.preventDefault ? a2.preventDefault() : "unknown" !== typeof a2.returnValue && (a2.returnValue = false), this.isDefaultPrevented = pd);
    }, stopPropagation: function() {
      var a2 = this.nativeEvent;
      a2 && (a2.stopPropagation ? a2.stopPropagation() : "unknown" !== typeof a2.cancelBubble && (a2.cancelBubble = true), this.isPropagationStopped = pd);
    }, persist: function() {
    }, isPersistent: pd });
    return b;
  }
  var sd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a) {
    return a.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, td = rd(sd), ud = A({}, sd, { view: 0, detail: 0 }), vd = rd(ud), wd, xd, yd, Ad = A({}, ud, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a) {
    return void 0 === a.relatedTarget ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
  }, movementX: function(a) {
    if ("movementX" in a) return a.movementX;
    a !== yd && (yd && "mousemove" === a.type ? (wd = a.screenX - yd.screenX, xd = a.screenY - yd.screenY) : xd = wd = 0, yd = a);
    return wd;
  }, movementY: function(a) {
    return "movementY" in a ? a.movementY : xd;
  } }), Bd = rd(Ad), Cd = A({}, Ad, { dataTransfer: 0 }), Dd = rd(Cd), Ed = A({}, ud, { relatedTarget: 0 }), Fd = rd(Ed), Gd = A({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Hd = rd(Gd), Id = A({}, sd, { clipboardData: function(a) {
    return "clipboardData" in a ? a.clipboardData : window.clipboardData;
  } }), Jd = rd(Id), Kd = A({}, sd, { data: 0 }), Ld = rd(Kd), Md = {
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
  }, Nd = {
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
  }, Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Pd(a) {
    var b = this.nativeEvent;
    return b.getModifierState ? b.getModifierState(a) : (a = Od[a]) ? !!b[a] : false;
  }
  function zd() {
    return Pd;
  }
  var Qd = A({}, ud, { key: function(a) {
    if (a.key) {
      var b = Md[a.key] || a.key;
      if ("Unidentified" !== b) return b;
    }
    return "keypress" === a.type ? (a = od(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? Nd[a.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a) {
    return "keypress" === a.type ? od(a) : 0;
  }, keyCode: function(a) {
    return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
  }, which: function(a) {
    return "keypress" === a.type ? od(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
  } }), Rd = rd(Qd), Sd = A({}, Ad, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Td = rd(Sd), Ud = A({}, ud, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd }), Vd = rd(Ud), Wd = A({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Xd = rd(Wd), Yd = A({}, Ad, {
    deltaX: function(a) {
      return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
    },
    deltaY: function(a) {
      return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Zd = rd(Yd), $d = [9, 13, 27, 32], ae = ia && "CompositionEvent" in window, be = null;
  ia && "documentMode" in document && (be = document.documentMode);
  var ce = ia && "TextEvent" in window && !be, de = ia && (!ae || be && 8 < be && 11 >= be), ee = String.fromCharCode(32), fe = false;
  function ge(a, b) {
    switch (a) {
      case "keyup":
        return -1 !== $d.indexOf(b.keyCode);
      case "keydown":
        return 229 !== b.keyCode;
      case "keypress":
      case "mousedown":
      case "focusout":
        return true;
      default:
        return false;
    }
  }
  function he(a) {
    a = a.detail;
    return "object" === typeof a && "data" in a ? a.data : null;
  }
  var ie = false;
  function je(a, b) {
    switch (a) {
      case "compositionend":
        return he(b);
      case "keypress":
        if (32 !== b.which) return null;
        fe = true;
        return ee;
      case "textInput":
        return a = b.data, a === ee && fe ? null : a;
      default:
        return null;
    }
  }
  function ke(a, b) {
    if (ie) return "compositionend" === a || !ae && ge(a, b) ? (a = nd(), md = ld = kd = null, ie = false, a) : null;
    switch (a) {
      case "paste":
        return null;
      case "keypress":
        if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
          if (b.char && 1 < b.char.length) return b.char;
          if (b.which) return String.fromCharCode(b.which);
        }
        return null;
      case "compositionend":
        return de && "ko" !== b.locale ? null : b.data;
      default:
        return null;
    }
  }
  var le = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
  function me(a) {
    var b = a && a.nodeName && a.nodeName.toLowerCase();
    return "input" === b ? !!le[a.type] : "textarea" === b ? true : false;
  }
  function ne(a, b, c, d) {
    Eb(d);
    b = oe(b, "onChange");
    0 < b.length && (c = new td("onChange", "change", null, c, d), a.push({ event: c, listeners: b }));
  }
  var pe = null, qe = null;
  function re(a) {
    se(a, 0);
  }
  function te(a) {
    var b = ue(a);
    if (Wa(b)) return a;
  }
  function ve(a, b) {
    if ("change" === a) return b;
  }
  var we = false;
  if (ia) {
    var xe;
    if (ia) {
      var ye = "oninput" in document;
      if (!ye) {
        var ze = document.createElement("div");
        ze.setAttribute("oninput", "return;");
        ye = "function" === typeof ze.oninput;
      }
      xe = ye;
    } else xe = false;
    we = xe && (!document.documentMode || 9 < document.documentMode);
  }
  function Ae() {
    pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
  }
  function Be(a) {
    if ("value" === a.propertyName && te(qe)) {
      var b = [];
      ne(b, qe, a, xb(a));
      Jb(re, b);
    }
  }
  function Ce(a, b, c) {
    "focusin" === a ? (Ae(), pe = b, qe = c, pe.attachEvent("onpropertychange", Be)) : "focusout" === a && Ae();
  }
  function De(a) {
    if ("selectionchange" === a || "keyup" === a || "keydown" === a) return te(qe);
  }
  function Ee(a, b) {
    if ("click" === a) return te(b);
  }
  function Fe(a, b) {
    if ("input" === a || "change" === a) return te(b);
  }
  function Ge(a, b) {
    return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
  }
  var He = "function" === typeof Object.is ? Object.is : Ge;
  function Ie(a, b) {
    if (He(a, b)) return true;
    if ("object" !== typeof a || null === a || "object" !== typeof b || null === b) return false;
    var c = Object.keys(a), d = Object.keys(b);
    if (c.length !== d.length) return false;
    for (d = 0; d < c.length; d++) {
      var e = c[d];
      if (!ja.call(b, e) || !He(a[e], b[e])) return false;
    }
    return true;
  }
  function Je(a) {
    for (; a && a.firstChild; ) a = a.firstChild;
    return a;
  }
  function Ke(a, b) {
    var c = Je(a);
    a = 0;
    for (var d; c; ) {
      if (3 === c.nodeType) {
        d = a + c.textContent.length;
        if (a <= b && d >= b) return { node: c, offset: b - a };
        a = d;
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
      c = Je(c);
    }
  }
  function Le(a, b) {
    return a && b ? a === b ? true : a && 3 === a.nodeType ? false : b && 3 === b.nodeType ? Le(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : false : false;
  }
  function Me() {
    for (var a = window, b = Xa(); b instanceof a.HTMLIFrameElement; ) {
      try {
        var c = "string" === typeof b.contentWindow.location.href;
      } catch (d) {
        c = false;
      }
      if (c) a = b.contentWindow;
      else break;
      b = Xa(a.document);
    }
    return b;
  }
  function Ne(a) {
    var b = a && a.nodeName && a.nodeName.toLowerCase();
    return b && ("input" === b && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b || "true" === a.contentEditable);
  }
  function Oe(a) {
    var b = Me(), c = a.focusedElem, d = a.selectionRange;
    if (b !== c && c && c.ownerDocument && Le(c.ownerDocument.documentElement, c)) {
      if (null !== d && Ne(c)) {
        if (b = d.start, a = d.end, void 0 === a && (a = b), "selectionStart" in c) c.selectionStart = b, c.selectionEnd = Math.min(a, c.value.length);
        else if (a = (b = c.ownerDocument || document) && b.defaultView || window, a.getSelection) {
          a = a.getSelection();
          var e = c.textContent.length, f = Math.min(d.start, e);
          d = void 0 === d.end ? f : Math.min(d.end, e);
          !a.extend && f > d && (e = d, d = f, f = e);
          e = Ke(c, f);
          var g = Ke(
            c,
            d
          );
          e && g && (1 !== a.rangeCount || a.anchorNode !== e.node || a.anchorOffset !== e.offset || a.focusNode !== g.node || a.focusOffset !== g.offset) && (b = b.createRange(), b.setStart(e.node, e.offset), a.removeAllRanges(), f > d ? (a.addRange(b), a.extend(g.node, g.offset)) : (b.setEnd(g.node, g.offset), a.addRange(b)));
        }
      }
      b = [];
      for (a = c; a = a.parentNode; ) 1 === a.nodeType && b.push({ element: a, left: a.scrollLeft, top: a.scrollTop });
      "function" === typeof c.focus && c.focus();
      for (c = 0; c < b.length; c++) a = b[c], a.element.scrollLeft = a.left, a.element.scrollTop = a.top;
    }
  }
  var Pe = ia && "documentMode" in document && 11 >= document.documentMode, Qe = null, Re = null, Se = null, Te = false;
  function Ue(a, b, c) {
    var d = c.window === c ? c.document : 9 === c.nodeType ? c : c.ownerDocument;
    Te || null == Qe || Qe !== Xa(d) || (d = Qe, "selectionStart" in d && Ne(d) ? d = { start: d.selectionStart, end: d.selectionEnd } : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = { anchorNode: d.anchorNode, anchorOffset: d.anchorOffset, focusNode: d.focusNode, focusOffset: d.focusOffset }), Se && Ie(Se, d) || (Se = d, d = oe(Re, "onSelect"), 0 < d.length && (b = new td("onSelect", "select", null, b, c), a.push({ event: b, listeners: d }), b.target = Qe)));
  }
  function Ve(a, b) {
    var c = {};
    c[a.toLowerCase()] = b.toLowerCase();
    c["Webkit" + a] = "webkit" + b;
    c["Moz" + a] = "moz" + b;
    return c;
  }
  var We = { animationend: Ve("Animation", "AnimationEnd"), animationiteration: Ve("Animation", "AnimationIteration"), animationstart: Ve("Animation", "AnimationStart"), transitionend: Ve("Transition", "TransitionEnd") }, Xe = {}, Ye = {};
  ia && (Ye = document.createElement("div").style, "AnimationEvent" in window || (delete We.animationend.animation, delete We.animationiteration.animation, delete We.animationstart.animation), "TransitionEvent" in window || delete We.transitionend.transition);
  function Ze(a) {
    if (Xe[a]) return Xe[a];
    if (!We[a]) return a;
    var b = We[a], c;
    for (c in b) if (b.hasOwnProperty(c) && c in Ye) return Xe[a] = b[c];
    return a;
  }
  var $e = Ze("animationend"), af = Ze("animationiteration"), bf = Ze("animationstart"), cf = Ze("transitionend"), df = /* @__PURE__ */ new Map(), ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function ff(a, b) {
    df.set(a, b);
    fa(b, [a]);
  }
  for (var gf = 0; gf < ef.length; gf++) {
    var hf = ef[gf], jf = hf.toLowerCase(), kf = hf[0].toUpperCase() + hf.slice(1);
    ff(jf, "on" + kf);
  }
  ff($e, "onAnimationEnd");
  ff(af, "onAnimationIteration");
  ff(bf, "onAnimationStart");
  ff("dblclick", "onDoubleClick");
  ff("focusin", "onFocus");
  ff("focusout", "onBlur");
  ff(cf, "onTransitionEnd");
  ha("onMouseEnter", ["mouseout", "mouseover"]);
  ha("onMouseLeave", ["mouseout", "mouseover"]);
  ha("onPointerEnter", ["pointerout", "pointerover"]);
  ha("onPointerLeave", ["pointerout", "pointerover"]);
  fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
  fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
  fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
  fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
  fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
  fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
  function nf(a, b, c) {
    var d = a.type || "unknown-event";
    a.currentTarget = c;
    Ub(d, b, void 0, a);
    a.currentTarget = null;
  }
  function se(a, b) {
    b = 0 !== (b & 4);
    for (var c = 0; c < a.length; c++) {
      var d = a[c], e = d.event;
      d = d.listeners;
      a: {
        var f = void 0;
        if (b) for (var g = d.length - 1; 0 <= g; g--) {
          var h = d[g], k = h.instance, l = h.currentTarget;
          h = h.listener;
          if (k !== f && e.isPropagationStopped()) break a;
          nf(e, h, l);
          f = k;
        }
        else for (g = 0; g < d.length; g++) {
          h = d[g];
          k = h.instance;
          l = h.currentTarget;
          h = h.listener;
          if (k !== f && e.isPropagationStopped()) break a;
          nf(e, h, l);
          f = k;
        }
      }
    }
    if (Qb) throw a = Rb, Qb = false, Rb = null, a;
  }
  function D(a, b) {
    var c = b[of];
    void 0 === c && (c = b[of] = /* @__PURE__ */ new Set());
    var d = a + "__bubble";
    c.has(d) || (pf(b, a, 2, false), c.add(d));
  }
  function qf(a, b, c) {
    var d = 0;
    b && (d |= 4);
    pf(c, a, d, b);
  }
  var rf = "_reactListening" + Math.random().toString(36).slice(2);
  function sf(a) {
    if (!a[rf]) {
      a[rf] = true;
      da.forEach(function(b2) {
        "selectionchange" !== b2 && (mf.has(b2) || qf(b2, false, a), qf(b2, true, a));
      });
      var b = 9 === a.nodeType ? a : a.ownerDocument;
      null === b || b[rf] || (b[rf] = true, qf("selectionchange", false, b));
    }
  }
  function pf(a, b, c, d) {
    switch (jd(b)) {
      case 1:
        var e = ed;
        break;
      case 4:
        e = gd;
        break;
      default:
        e = fd;
    }
    c = e.bind(null, b, c, a);
    e = void 0;
    !Lb || "touchstart" !== b && "touchmove" !== b && "wheel" !== b || (e = true);
    d ? void 0 !== e ? a.addEventListener(b, c, { capture: true, passive: e }) : a.addEventListener(b, c, true) : void 0 !== e ? a.addEventListener(b, c, { passive: e }) : a.addEventListener(b, c, false);
  }
  function hd(a, b, c, d, e) {
    var f = d;
    if (0 === (b & 1) && 0 === (b & 2) && null !== d) a: for (; ; ) {
      if (null === d) return;
      var g = d.tag;
      if (3 === g || 4 === g) {
        var h = d.stateNode.containerInfo;
        if (h === e || 8 === h.nodeType && h.parentNode === e) break;
        if (4 === g) for (g = d.return; null !== g; ) {
          var k = g.tag;
          if (3 === k || 4 === k) {
            if (k = g.stateNode.containerInfo, k === e || 8 === k.nodeType && k.parentNode === e) return;
          }
          g = g.return;
        }
        for (; null !== h; ) {
          g = Wc(h);
          if (null === g) return;
          k = g.tag;
          if (5 === k || 6 === k) {
            d = f = g;
            continue a;
          }
          h = h.parentNode;
        }
      }
      d = d.return;
    }
    Jb(function() {
      var d2 = f, e2 = xb(c), g2 = [];
      a: {
        var h2 = df.get(a);
        if (void 0 !== h2) {
          var k2 = td, n = a;
          switch (a) {
            case "keypress":
              if (0 === od(c)) break a;
            case "keydown":
            case "keyup":
              k2 = Rd;
              break;
            case "focusin":
              n = "focus";
              k2 = Fd;
              break;
            case "focusout":
              n = "blur";
              k2 = Fd;
              break;
            case "beforeblur":
            case "afterblur":
              k2 = Fd;
              break;
            case "click":
              if (2 === c.button) break a;
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
            case $e:
            case af:
            case bf:
              k2 = Hd;
              break;
            case cf:
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
          var t = 0 !== (b & 4), J = !t && "scroll" === a, x = t ? null !== h2 ? h2 + "Capture" : null : h2;
          t = [];
          for (var w = d2, u; null !== w; ) {
            u = w;
            var F = u.stateNode;
            5 === u.tag && null !== F && (u = F, null !== x && (F = Kb(w, x), null != F && t.push(tf(w, F, u))));
            if (J) break;
            w = w.return;
          }
          0 < t.length && (h2 = new k2(h2, n, null, c, e2), g2.push({ event: h2, listeners: t }));
        }
      }
      if (0 === (b & 7)) {
        a: {
          h2 = "mouseover" === a || "pointerover" === a;
          k2 = "mouseout" === a || "pointerout" === a;
          if (h2 && c !== wb && (n = c.relatedTarget || c.fromElement) && (Wc(n) || n[uf])) break a;
          if (k2 || h2) {
            h2 = e2.window === e2 ? e2 : (h2 = e2.ownerDocument) ? h2.defaultView || h2.parentWindow : window;
            if (k2) {
              if (n = c.relatedTarget || c.toElement, k2 = d2, n = n ? Wc(n) : null, null !== n && (J = Vb(n), n !== J || 5 !== n.tag && 6 !== n.tag)) n = null;
            } else k2 = null, n = d2;
            if (k2 !== n) {
              t = Bd;
              F = "onMouseLeave";
              x = "onMouseEnter";
              w = "mouse";
              if ("pointerout" === a || "pointerover" === a) t = Td, F = "onPointerLeave", x = "onPointerEnter", w = "pointer";
              J = null == k2 ? h2 : ue(k2);
              u = null == n ? h2 : ue(n);
              h2 = new t(F, w + "leave", k2, c, e2);
              h2.target = J;
              h2.relatedTarget = u;
              F = null;
              Wc(e2) === d2 && (t = new t(x, w + "enter", n, c, e2), t.target = u, t.relatedTarget = J, F = t);
              J = F;
              if (k2 && n) b: {
                t = k2;
                x = n;
                w = 0;
                for (u = t; u; u = vf(u)) w++;
                u = 0;
                for (F = x; F; F = vf(F)) u++;
                for (; 0 < w - u; ) t = vf(t), w--;
                for (; 0 < u - w; ) x = vf(x), u--;
                for (; w--; ) {
                  if (t === x || null !== x && t === x.alternate) break b;
                  t = vf(t);
                  x = vf(x);
                }
                t = null;
              }
              else t = null;
              null !== k2 && wf(g2, h2, k2, t, false);
              null !== n && null !== J && wf(g2, J, n, t, true);
            }
          }
        }
        a: {
          h2 = d2 ? ue(d2) : window;
          k2 = h2.nodeName && h2.nodeName.toLowerCase();
          if ("select" === k2 || "input" === k2 && "file" === h2.type) var na = ve;
          else if (me(h2)) if (we) na = Fe;
          else {
            na = De;
            var xa = Ce;
          }
          else (k2 = h2.nodeName) && "input" === k2.toLowerCase() && ("checkbox" === h2.type || "radio" === h2.type) && (na = Ee);
          if (na && (na = na(a, d2))) {
            ne(g2, na, c, e2);
            break a;
          }
          xa && xa(a, h2, d2);
          "focusout" === a && (xa = h2._wrapperState) && xa.controlled && "number" === h2.type && cb(h2, "number", h2.value);
        }
        xa = d2 ? ue(d2) : window;
        switch (a) {
          case "focusin":
            if (me(xa) || "true" === xa.contentEditable) Qe = xa, Re = d2, Se = null;
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
            if (Pe) break;
          case "keydown":
          case "keyup":
            Ue(g2, c, e2);
        }
        var $a;
        if (ae) b: {
          switch (a) {
            case "compositionstart":
              var ba = "onCompositionStart";
              break b;
            case "compositionend":
              ba = "onCompositionEnd";
              break b;
            case "compositionupdate":
              ba = "onCompositionUpdate";
              break b;
          }
          ba = void 0;
        }
        else ie ? ge(a, c) && (ba = "onCompositionEnd") : "keydown" === a && 229 === c.keyCode && (ba = "onCompositionStart");
        ba && (de && "ko" !== c.locale && (ie || "onCompositionStart" !== ba ? "onCompositionEnd" === ba && ie && ($a = nd()) : (kd = e2, ld = "value" in kd ? kd.value : kd.textContent, ie = true)), xa = oe(d2, ba), 0 < xa.length && (ba = new Ld(ba, a, null, c, e2), g2.push({ event: ba, listeners: xa }), $a ? ba.data = $a : ($a = he(c), null !== $a && (ba.data = $a))));
        if ($a = ce ? je(a, c) : ke(a, c)) d2 = oe(d2, "onBeforeInput"), 0 < d2.length && (e2 = new Ld("onBeforeInput", "beforeinput", null, c, e2), g2.push({ event: e2, listeners: d2 }), e2.data = $a);
      }
      se(g2, b);
    });
  }
  function tf(a, b, c) {
    return { instance: a, listener: b, currentTarget: c };
  }
  function oe(a, b) {
    for (var c = b + "Capture", d = []; null !== a; ) {
      var e = a, f = e.stateNode;
      5 === e.tag && null !== f && (e = f, f = Kb(a, c), null != f && d.unshift(tf(a, f, e)), f = Kb(a, b), null != f && d.push(tf(a, f, e)));
      a = a.return;
    }
    return d;
  }
  function vf(a) {
    if (null === a) return null;
    do
      a = a.return;
    while (a && 5 !== a.tag);
    return a ? a : null;
  }
  function wf(a, b, c, d, e) {
    for (var f = b._reactName, g = []; null !== c && c !== d; ) {
      var h = c, k = h.alternate, l = h.stateNode;
      if (null !== k && k === d) break;
      5 === h.tag && null !== l && (h = l, e ? (k = Kb(c, f), null != k && g.unshift(tf(c, k, h))) : e || (k = Kb(c, f), null != k && g.push(tf(c, k, h))));
      c = c.return;
    }
    0 !== g.length && a.push({ event: b, listeners: g });
  }
  var xf = /\r\n?/g, yf = /\u0000|\uFFFD/g;
  function zf(a) {
    return ("string" === typeof a ? a : "" + a).replace(xf, "\n").replace(yf, "");
  }
  function Af(a, b, c) {
    b = zf(b);
    if (zf(a) !== b && c) throw Error(p(425));
  }
  function Bf() {
  }
  var Cf = null, Df = null;
  function Ef(a, b) {
    return "textarea" === a || "noscript" === a || "string" === typeof b.children || "number" === typeof b.children || "object" === typeof b.dangerouslySetInnerHTML && null !== b.dangerouslySetInnerHTML && null != b.dangerouslySetInnerHTML.__html;
  }
  var Ff = "function" === typeof setTimeout ? setTimeout : void 0, Gf = "function" === typeof clearTimeout ? clearTimeout : void 0, Hf = "function" === typeof Promise ? Promise : void 0, Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function(a) {
    return Hf.resolve(null).then(a).catch(If);
  } : Ff;
  function If(a) {
    setTimeout(function() {
      throw a;
    });
  }
  function Kf(a, b) {
    var c = b, d = 0;
    do {
      var e = c.nextSibling;
      a.removeChild(c);
      if (e && 8 === e.nodeType) if (c = e.data, "/$" === c) {
        if (0 === d) {
          a.removeChild(e);
          bd(b);
          return;
        }
        d--;
      } else "$" !== c && "$?" !== c && "$!" !== c || d++;
      c = e;
    } while (c);
    bd(b);
  }
  function Lf(a) {
    for (; null != a; a = a.nextSibling) {
      var b = a.nodeType;
      if (1 === b || 3 === b) break;
      if (8 === b) {
        b = a.data;
        if ("$" === b || "$!" === b || "$?" === b) break;
        if ("/$" === b) return null;
      }
    }
    return a;
  }
  function Mf(a) {
    a = a.previousSibling;
    for (var b = 0; a; ) {
      if (8 === a.nodeType) {
        var c = a.data;
        if ("$" === c || "$!" === c || "$?" === c) {
          if (0 === b) return a;
          b--;
        } else "/$" === c && b++;
      }
      a = a.previousSibling;
    }
    return null;
  }
  var Nf = Math.random().toString(36).slice(2), Of = "__reactFiber$" + Nf, Pf = "__reactProps$" + Nf, uf = "__reactContainer$" + Nf, of = "__reactEvents$" + Nf, Qf = "__reactListeners$" + Nf, Rf = "__reactHandles$" + Nf;
  function Wc(a) {
    var b = a[Of];
    if (b) return b;
    for (var c = a.parentNode; c; ) {
      if (b = c[uf] || c[Of]) {
        c = b.alternate;
        if (null !== b.child || null !== c && null !== c.child) for (a = Mf(a); null !== a; ) {
          if (c = a[Of]) return c;
          a = Mf(a);
        }
        return b;
      }
      a = c;
      c = a.parentNode;
    }
    return null;
  }
  function Cb(a) {
    a = a[Of] || a[uf];
    return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
  }
  function ue(a) {
    if (5 === a.tag || 6 === a.tag) return a.stateNode;
    throw Error(p(33));
  }
  function Db(a) {
    return a[Pf] || null;
  }
  var Sf = [], Tf = -1;
  function Uf(a) {
    return { current: a };
  }
  function E(a) {
    0 > Tf || (a.current = Sf[Tf], Sf[Tf] = null, Tf--);
  }
  function G(a, b) {
    Tf++;
    Sf[Tf] = a.current;
    a.current = b;
  }
  var Vf = {}, H = Uf(Vf), Wf = Uf(false), Xf = Vf;
  function Yf(a, b) {
    var c = a.type.contextTypes;
    if (!c) return Vf;
    var d = a.stateNode;
    if (d && d.__reactInternalMemoizedUnmaskedChildContext === b) return d.__reactInternalMemoizedMaskedChildContext;
    var e = {}, f;
    for (f in c) e[f] = b[f];
    d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
    return e;
  }
  function Zf(a) {
    a = a.childContextTypes;
    return null !== a && void 0 !== a;
  }
  function $f() {
    E(Wf);
    E(H);
  }
  function ag(a, b, c) {
    if (H.current !== Vf) throw Error(p(168));
    G(H, b);
    G(Wf, c);
  }
  function bg(a, b, c) {
    var d = a.stateNode;
    b = b.childContextTypes;
    if ("function" !== typeof d.getChildContext) return c;
    d = d.getChildContext();
    for (var e in d) if (!(e in b)) throw Error(p(108, Ra(a) || "Unknown", e));
    return A({}, c, d);
  }
  function cg(a) {
    a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Vf;
    Xf = H.current;
    G(H, a);
    G(Wf, Wf.current);
    return true;
  }
  function dg(a, b, c) {
    var d = a.stateNode;
    if (!d) throw Error(p(169));
    c ? (a = bg(a, b, Xf), d.__reactInternalMemoizedMergedChildContext = a, E(Wf), E(H), G(H, a)) : E(Wf);
    G(Wf, c);
  }
  var eg = null, fg = false, gg = false;
  function hg(a) {
    null === eg ? eg = [a] : eg.push(a);
  }
  function ig(a) {
    fg = true;
    hg(a);
  }
  function jg() {
    if (!gg && null !== eg) {
      gg = true;
      var a = 0, b = C;
      try {
        var c = eg;
        for (C = 1; a < c.length; a++) {
          var d = c[a];
          do
            d = d(true);
          while (null !== d);
        }
        eg = null;
        fg = false;
      } catch (e) {
        throw null !== eg && (eg = eg.slice(a + 1)), ac(fc, jg), e;
      } finally {
        C = b, gg = false;
      }
    }
    return null;
  }
  var kg = [], lg = 0, mg = null, ng = 0, og = [], pg = 0, qg = null, rg = 1, sg = "";
  function tg(a, b) {
    kg[lg++] = ng;
    kg[lg++] = mg;
    mg = a;
    ng = b;
  }
  function ug(a, b, c) {
    og[pg++] = rg;
    og[pg++] = sg;
    og[pg++] = qg;
    qg = a;
    var d = rg;
    a = sg;
    var e = 32 - oc(d) - 1;
    d &= ~(1 << e);
    c += 1;
    var f = 32 - oc(b) + e;
    if (30 < f) {
      var g = e - e % 5;
      f = (d & (1 << g) - 1).toString(32);
      d >>= g;
      e -= g;
      rg = 1 << 32 - oc(b) + e | c << e | d;
      sg = f + a;
    } else rg = 1 << f | c << e | d, sg = a;
  }
  function vg(a) {
    null !== a.return && (tg(a, 1), ug(a, 1, 0));
  }
  function wg(a) {
    for (; a === mg; ) mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
    for (; a === qg; ) qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
  }
  var xg = null, yg = null, I = false, zg = null;
  function Ag(a, b) {
    var c = Bg(5, null, null, 0);
    c.elementType = "DELETED";
    c.stateNode = b;
    c.return = a;
    b = a.deletions;
    null === b ? (a.deletions = [c], a.flags |= 16) : b.push(c);
  }
  function Cg(a, b) {
    switch (a.tag) {
      case 5:
        var c = a.type;
        b = 1 !== b.nodeType || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
        return null !== b ? (a.stateNode = b, xg = a, yg = Lf(b.firstChild), true) : false;
      case 6:
        return b = "" === a.pendingProps || 3 !== b.nodeType ? null : b, null !== b ? (a.stateNode = b, xg = a, yg = null, true) : false;
      case 13:
        return b = 8 !== b.nodeType ? null : b, null !== b ? (c = null !== qg ? { id: rg, overflow: sg } : null, a.memoizedState = { dehydrated: b, treeContext: c, retryLane: 1073741824 }, c = Bg(18, null, null, 0), c.stateNode = b, c.return = a, a.child = c, xg = a, yg = null, true) : false;
      default:
        return false;
    }
  }
  function Dg(a) {
    return 0 !== (a.mode & 1) && 0 === (a.flags & 128);
  }
  function Eg(a) {
    if (I) {
      var b = yg;
      if (b) {
        var c = b;
        if (!Cg(a, b)) {
          if (Dg(a)) throw Error(p(418));
          b = Lf(c.nextSibling);
          var d = xg;
          b && Cg(a, b) ? Ag(d, c) : (a.flags = a.flags & -4097 | 2, I = false, xg = a);
        }
      } else {
        if (Dg(a)) throw Error(p(418));
        a.flags = a.flags & -4097 | 2;
        I = false;
        xg = a;
      }
    }
  }
  function Fg(a) {
    for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag; ) a = a.return;
    xg = a;
  }
  function Gg(a) {
    if (a !== xg) return false;
    if (!I) return Fg(a), I = true, false;
    var b;
    (b = 3 !== a.tag) && !(b = 5 !== a.tag) && (b = a.type, b = "head" !== b && "body" !== b && !Ef(a.type, a.memoizedProps));
    if (b && (b = yg)) {
      if (Dg(a)) throw Hg(), Error(p(418));
      for (; b; ) Ag(a, b), b = Lf(b.nextSibling);
    }
    Fg(a);
    if (13 === a.tag) {
      a = a.memoizedState;
      a = null !== a ? a.dehydrated : null;
      if (!a) throw Error(p(317));
      a: {
        a = a.nextSibling;
        for (b = 0; a; ) {
          if (8 === a.nodeType) {
            var c = a.data;
            if ("/$" === c) {
              if (0 === b) {
                yg = Lf(a.nextSibling);
                break a;
              }
              b--;
            } else "$" !== c && "$!" !== c && "$?" !== c || b++;
          }
          a = a.nextSibling;
        }
        yg = null;
      }
    } else yg = xg ? Lf(a.stateNode.nextSibling) : null;
    return true;
  }
  function Hg() {
    for (var a = yg; a; ) a = Lf(a.nextSibling);
  }
  function Ig() {
    yg = xg = null;
    I = false;
  }
  function Jg(a) {
    null === zg ? zg = [a] : zg.push(a);
  }
  var Kg = ua.ReactCurrentBatchConfig;
  function Lg(a, b, c) {
    a = c.ref;
    if (null !== a && "function" !== typeof a && "object" !== typeof a) {
      if (c._owner) {
        c = c._owner;
        if (c) {
          if (1 !== c.tag) throw Error(p(309));
          var d = c.stateNode;
        }
        if (!d) throw Error(p(147, a));
        var e = d, f = "" + a;
        if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === f) return b.ref;
        b = function(a2) {
          var b2 = e.refs;
          null === a2 ? delete b2[f] : b2[f] = a2;
        };
        b._stringRef = f;
        return b;
      }
      if ("string" !== typeof a) throw Error(p(284));
      if (!c._owner) throw Error(p(290, a));
    }
    return a;
  }
  function Mg(a, b) {
    a = Object.prototype.toString.call(b);
    throw Error(p(31, "[object Object]" === a ? "object with keys {" + Object.keys(b).join(", ") + "}" : a));
  }
  function Ng(a) {
    var b = a._init;
    return b(a._payload);
  }
  function Og(a) {
    function b(b2, c2) {
      if (a) {
        var d2 = b2.deletions;
        null === d2 ? (b2.deletions = [c2], b2.flags |= 16) : d2.push(c2);
      }
    }
    function c(c2, d2) {
      if (!a) return null;
      for (; null !== d2; ) b(c2, d2), d2 = d2.sibling;
      return null;
    }
    function d(a2, b2) {
      for (a2 = /* @__PURE__ */ new Map(); null !== b2; ) null !== b2.key ? a2.set(b2.key, b2) : a2.set(b2.index, b2), b2 = b2.sibling;
      return a2;
    }
    function e(a2, b2) {
      a2 = Pg(a2, b2);
      a2.index = 0;
      a2.sibling = null;
      return a2;
    }
    function f(b2, c2, d2) {
      b2.index = d2;
      if (!a) return b2.flags |= 1048576, c2;
      d2 = b2.alternate;
      if (null !== d2) return d2 = d2.index, d2 < c2 ? (b2.flags |= 2, c2) : d2;
      b2.flags |= 2;
      return c2;
    }
    function g(b2) {
      a && null === b2.alternate && (b2.flags |= 2);
      return b2;
    }
    function h(a2, b2, c2, d2) {
      if (null === b2 || 6 !== b2.tag) return b2 = Qg(c2, a2.mode, d2), b2.return = a2, b2;
      b2 = e(b2, c2);
      b2.return = a2;
      return b2;
    }
    function k(a2, b2, c2, d2) {
      var f2 = c2.type;
      if (f2 === ya) return m(a2, b2, c2.props.children, d2, c2.key);
      if (null !== b2 && (b2.elementType === f2 || "object" === typeof f2 && null !== f2 && f2.$$typeof === Ha && Ng(f2) === b2.type)) return d2 = e(b2, c2.props), d2.ref = Lg(a2, b2, c2), d2.return = a2, d2;
      d2 = Rg(c2.type, c2.key, c2.props, null, a2.mode, d2);
      d2.ref = Lg(a2, b2, c2);
      d2.return = a2;
      return d2;
    }
    function l(a2, b2, c2, d2) {
      if (null === b2 || 4 !== b2.tag || b2.stateNode.containerInfo !== c2.containerInfo || b2.stateNode.implementation !== c2.implementation) return b2 = Sg(c2, a2.mode, d2), b2.return = a2, b2;
      b2 = e(b2, c2.children || []);
      b2.return = a2;
      return b2;
    }
    function m(a2, b2, c2, d2, f2) {
      if (null === b2 || 7 !== b2.tag) return b2 = Tg(c2, a2.mode, d2, f2), b2.return = a2, b2;
      b2 = e(b2, c2);
      b2.return = a2;
      return b2;
    }
    function q(a2, b2, c2) {
      if ("string" === typeof b2 && "" !== b2 || "number" === typeof b2) return b2 = Qg("" + b2, a2.mode, c2), b2.return = a2, b2;
      if ("object" === typeof b2 && null !== b2) {
        switch (b2.$$typeof) {
          case va:
            return c2 = Rg(b2.type, b2.key, b2.props, null, a2.mode, c2), c2.ref = Lg(a2, null, b2), c2.return = a2, c2;
          case wa:
            return b2 = Sg(b2, a2.mode, c2), b2.return = a2, b2;
          case Ha:
            var d2 = b2._init;
            return q(a2, d2(b2._payload), c2);
        }
        if (eb(b2) || Ka(b2)) return b2 = Tg(b2, a2.mode, c2, null), b2.return = a2, b2;
        Mg(a2, b2);
      }
      return null;
    }
    function r(a2, b2, c2, d2) {
      var e2 = null !== b2 ? b2.key : null;
      if ("string" === typeof c2 && "" !== c2 || "number" === typeof c2) return null !== e2 ? null : h(a2, b2, "" + c2, d2);
      if ("object" === typeof c2 && null !== c2) {
        switch (c2.$$typeof) {
          case va:
            return c2.key === e2 ? k(a2, b2, c2, d2) : null;
          case wa:
            return c2.key === e2 ? l(a2, b2, c2, d2) : null;
          case Ha:
            return e2 = c2._init, r(
              a2,
              b2,
              e2(c2._payload),
              d2
            );
        }
        if (eb(c2) || Ka(c2)) return null !== e2 ? null : m(a2, b2, c2, d2, null);
        Mg(a2, c2);
      }
      return null;
    }
    function y(a2, b2, c2, d2, e2) {
      if ("string" === typeof d2 && "" !== d2 || "number" === typeof d2) return a2 = a2.get(c2) || null, h(b2, a2, "" + d2, e2);
      if ("object" === typeof d2 && null !== d2) {
        switch (d2.$$typeof) {
          case va:
            return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, k(b2, a2, d2, e2);
          case wa:
            return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, l(b2, a2, d2, e2);
          case Ha:
            var f2 = d2._init;
            return y(a2, b2, c2, f2(d2._payload), e2);
        }
        if (eb(d2) || Ka(d2)) return a2 = a2.get(c2) || null, m(b2, a2, d2, e2, null);
        Mg(b2, d2);
      }
      return null;
    }
    function n(e2, g2, h2, k2) {
      for (var l2 = null, m2 = null, u = g2, w = g2 = 0, x = null; null !== u && w < h2.length; w++) {
        u.index > w ? (x = u, u = null) : x = u.sibling;
        var n2 = r(e2, u, h2[w], k2);
        if (null === n2) {
          null === u && (u = x);
          break;
        }
        a && u && null === n2.alternate && b(e2, u);
        g2 = f(n2, g2, w);
        null === m2 ? l2 = n2 : m2.sibling = n2;
        m2 = n2;
        u = x;
      }
      if (w === h2.length) return c(e2, u), I && tg(e2, w), l2;
      if (null === u) {
        for (; w < h2.length; w++) u = q(e2, h2[w], k2), null !== u && (g2 = f(u, g2, w), null === m2 ? l2 = u : m2.sibling = u, m2 = u);
        I && tg(e2, w);
        return l2;
      }
      for (u = d(e2, u); w < h2.length; w++) x = y(u, e2, w, h2[w], k2), null !== x && (a && null !== x.alternate && u.delete(null === x.key ? w : x.key), g2 = f(x, g2, w), null === m2 ? l2 = x : m2.sibling = x, m2 = x);
      a && u.forEach(function(a2) {
        return b(e2, a2);
      });
      I && tg(e2, w);
      return l2;
    }
    function t(e2, g2, h2, k2) {
      var l2 = Ka(h2);
      if ("function" !== typeof l2) throw Error(p(150));
      h2 = l2.call(h2);
      if (null == h2) throw Error(p(151));
      for (var u = l2 = null, m2 = g2, w = g2 = 0, x = null, n2 = h2.next(); null !== m2 && !n2.done; w++, n2 = h2.next()) {
        m2.index > w ? (x = m2, m2 = null) : x = m2.sibling;
        var t2 = r(e2, m2, n2.value, k2);
        if (null === t2) {
          null === m2 && (m2 = x);
          break;
        }
        a && m2 && null === t2.alternate && b(e2, m2);
        g2 = f(t2, g2, w);
        null === u ? l2 = t2 : u.sibling = t2;
        u = t2;
        m2 = x;
      }
      if (n2.done) return c(
        e2,
        m2
      ), I && tg(e2, w), l2;
      if (null === m2) {
        for (; !n2.done; w++, n2 = h2.next()) n2 = q(e2, n2.value, k2), null !== n2 && (g2 = f(n2, g2, w), null === u ? l2 = n2 : u.sibling = n2, u = n2);
        I && tg(e2, w);
        return l2;
      }
      for (m2 = d(e2, m2); !n2.done; w++, n2 = h2.next()) n2 = y(m2, e2, w, n2.value, k2), null !== n2 && (a && null !== n2.alternate && m2.delete(null === n2.key ? w : n2.key), g2 = f(n2, g2, w), null === u ? l2 = n2 : u.sibling = n2, u = n2);
      a && m2.forEach(function(a2) {
        return b(e2, a2);
      });
      I && tg(e2, w);
      return l2;
    }
    function J(a2, d2, f2, h2) {
      "object" === typeof f2 && null !== f2 && f2.type === ya && null === f2.key && (f2 = f2.props.children);
      if ("object" === typeof f2 && null !== f2) {
        switch (f2.$$typeof) {
          case va:
            a: {
              for (var k2 = f2.key, l2 = d2; null !== l2; ) {
                if (l2.key === k2) {
                  k2 = f2.type;
                  if (k2 === ya) {
                    if (7 === l2.tag) {
                      c(a2, l2.sibling);
                      d2 = e(l2, f2.props.children);
                      d2.return = a2;
                      a2 = d2;
                      break a;
                    }
                  } else if (l2.elementType === k2 || "object" === typeof k2 && null !== k2 && k2.$$typeof === Ha && Ng(k2) === l2.type) {
                    c(a2, l2.sibling);
                    d2 = e(l2, f2.props);
                    d2.ref = Lg(a2, l2, f2);
                    d2.return = a2;
                    a2 = d2;
                    break a;
                  }
                  c(a2, l2);
                  break;
                } else b(a2, l2);
                l2 = l2.sibling;
              }
              f2.type === ya ? (d2 = Tg(f2.props.children, a2.mode, h2, f2.key), d2.return = a2, a2 = d2) : (h2 = Rg(f2.type, f2.key, f2.props, null, a2.mode, h2), h2.ref = Lg(a2, d2, f2), h2.return = a2, a2 = h2);
            }
            return g(a2);
          case wa:
            a: {
              for (l2 = f2.key; null !== d2; ) {
                if (d2.key === l2) if (4 === d2.tag && d2.stateNode.containerInfo === f2.containerInfo && d2.stateNode.implementation === f2.implementation) {
                  c(a2, d2.sibling);
                  d2 = e(d2, f2.children || []);
                  d2.return = a2;
                  a2 = d2;
                  break a;
                } else {
                  c(a2, d2);
                  break;
                }
                else b(a2, d2);
                d2 = d2.sibling;
              }
              d2 = Sg(f2, a2.mode, h2);
              d2.return = a2;
              a2 = d2;
            }
            return g(a2);
          case Ha:
            return l2 = f2._init, J(a2, d2, l2(f2._payload), h2);
        }
        if (eb(f2)) return n(a2, d2, f2, h2);
        if (Ka(f2)) return t(a2, d2, f2, h2);
        Mg(a2, f2);
      }
      return "string" === typeof f2 && "" !== f2 || "number" === typeof f2 ? (f2 = "" + f2, null !== d2 && 6 === d2.tag ? (c(a2, d2.sibling), d2 = e(d2, f2), d2.return = a2, a2 = d2) : (c(a2, d2), d2 = Qg(f2, a2.mode, h2), d2.return = a2, a2 = d2), g(a2)) : c(a2, d2);
    }
    return J;
  }
  var Ug = Og(true), Vg = Og(false), Wg = Uf(null), Xg = null, Yg = null, Zg = null;
  function $g() {
    Zg = Yg = Xg = null;
  }
  function ah(a) {
    var b = Wg.current;
    E(Wg);
    a._currentValue = b;
  }
  function bh(a, b, c) {
    for (; null !== a; ) {
      var d = a.alternate;
      (a.childLanes & b) !== b ? (a.childLanes |= b, null !== d && (d.childLanes |= b)) : null !== d && (d.childLanes & b) !== b && (d.childLanes |= b);
      if (a === c) break;
      a = a.return;
    }
  }
  function ch(a, b) {
    Xg = a;
    Zg = Yg = null;
    a = a.dependencies;
    null !== a && null !== a.firstContext && (0 !== (a.lanes & b) && (dh = true), a.firstContext = null);
  }
  function eh(a) {
    var b = a._currentValue;
    if (Zg !== a) if (a = { context: a, memoizedValue: b, next: null }, null === Yg) {
      if (null === Xg) throw Error(p(308));
      Yg = a;
      Xg.dependencies = { lanes: 0, firstContext: a };
    } else Yg = Yg.next = a;
    return b;
  }
  var fh = null;
  function gh(a) {
    null === fh ? fh = [a] : fh.push(a);
  }
  function hh(a, b, c, d) {
    var e = b.interleaved;
    null === e ? (c.next = c, gh(b)) : (c.next = e.next, e.next = c);
    b.interleaved = c;
    return ih(a, d);
  }
  function ih(a, b) {
    a.lanes |= b;
    var c = a.alternate;
    null !== c && (c.lanes |= b);
    c = a;
    for (a = a.return; null !== a; ) a.childLanes |= b, c = a.alternate, null !== c && (c.childLanes |= b), c = a, a = a.return;
    return 3 === c.tag ? c.stateNode : null;
  }
  var jh = false;
  function kh(a) {
    a.updateQueue = { baseState: a.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function lh(a, b) {
    a = a.updateQueue;
    b.updateQueue === a && (b.updateQueue = { baseState: a.baseState, firstBaseUpdate: a.firstBaseUpdate, lastBaseUpdate: a.lastBaseUpdate, shared: a.shared, effects: a.effects });
  }
  function mh(a, b) {
    return { eventTime: a, lane: b, tag: 0, payload: null, callback: null, next: null };
  }
  function nh(a, b, c) {
    var d = a.updateQueue;
    if (null === d) return null;
    d = d.shared;
    if (0 !== (K & 2)) {
      var e = d.pending;
      null === e ? b.next = b : (b.next = e.next, e.next = b);
      d.pending = b;
      return ih(a, c);
    }
    e = d.interleaved;
    null === e ? (b.next = b, gh(d)) : (b.next = e.next, e.next = b);
    d.interleaved = b;
    return ih(a, c);
  }
  function oh(a, b, c) {
    b = b.updateQueue;
    if (null !== b && (b = b.shared, 0 !== (c & 4194240))) {
      var d = b.lanes;
      d &= a.pendingLanes;
      c |= d;
      b.lanes = c;
      Cc(a, c);
    }
  }
  function ph(a, b) {
    var c = a.updateQueue, d = a.alternate;
    if (null !== d && (d = d.updateQueue, c === d)) {
      var e = null, f = null;
      c = c.firstBaseUpdate;
      if (null !== c) {
        do {
          var g = { eventTime: c.eventTime, lane: c.lane, tag: c.tag, payload: c.payload, callback: c.callback, next: null };
          null === f ? e = f = g : f = f.next = g;
          c = c.next;
        } while (null !== c);
        null === f ? e = f = b : f = f.next = b;
      } else e = f = b;
      c = { baseState: d.baseState, firstBaseUpdate: e, lastBaseUpdate: f, shared: d.shared, effects: d.effects };
      a.updateQueue = c;
      return;
    }
    a = c.lastBaseUpdate;
    null === a ? c.firstBaseUpdate = b : a.next = b;
    c.lastBaseUpdate = b;
  }
  function qh(a, b, c, d) {
    var e = a.updateQueue;
    jh = false;
    var f = e.firstBaseUpdate, g = e.lastBaseUpdate, h = e.shared.pending;
    if (null !== h) {
      e.shared.pending = null;
      var k = h, l = k.next;
      k.next = null;
      null === g ? f = l : g.next = l;
      g = k;
      var m = a.alternate;
      null !== m && (m = m.updateQueue, h = m.lastBaseUpdate, h !== g && (null === h ? m.firstBaseUpdate = l : h.next = l, m.lastBaseUpdate = k));
    }
    if (null !== f) {
      var q = e.baseState;
      g = 0;
      m = l = k = null;
      h = f;
      do {
        var r = h.lane, y = h.eventTime;
        if ((d & r) === r) {
          null !== m && (m = m.next = {
            eventTime: y,
            lane: 0,
            tag: h.tag,
            payload: h.payload,
            callback: h.callback,
            next: null
          });
          a: {
            var n = a, t = h;
            r = b;
            y = c;
            switch (t.tag) {
              case 1:
                n = t.payload;
                if ("function" === typeof n) {
                  q = n.call(y, q, r);
                  break a;
                }
                q = n;
                break a;
              case 3:
                n.flags = n.flags & -65537 | 128;
              case 0:
                n = t.payload;
                r = "function" === typeof n ? n.call(y, q, r) : n;
                if (null === r || void 0 === r) break a;
                q = A({}, q, r);
                break a;
              case 2:
                jh = true;
            }
          }
          null !== h.callback && 0 !== h.lane && (a.flags |= 64, r = e.effects, null === r ? e.effects = [h] : r.push(h));
        } else y = { eventTime: y, lane: r, tag: h.tag, payload: h.payload, callback: h.callback, next: null }, null === m ? (l = m = y, k = q) : m = m.next = y, g |= r;
        h = h.next;
        if (null === h) if (h = e.shared.pending, null === h) break;
        else r = h, h = r.next, r.next = null, e.lastBaseUpdate = r, e.shared.pending = null;
      } while (1);
      null === m && (k = q);
      e.baseState = k;
      e.firstBaseUpdate = l;
      e.lastBaseUpdate = m;
      b = e.shared.interleaved;
      if (null !== b) {
        e = b;
        do
          g |= e.lane, e = e.next;
        while (e !== b);
      } else null === f && (e.shared.lanes = 0);
      rh |= g;
      a.lanes = g;
      a.memoizedState = q;
    }
  }
  function sh(a, b, c) {
    a = b.effects;
    b.effects = null;
    if (null !== a) for (b = 0; b < a.length; b++) {
      var d = a[b], e = d.callback;
      if (null !== e) {
        d.callback = null;
        d = c;
        if ("function" !== typeof e) throw Error(p(191, e));
        e.call(d);
      }
    }
  }
  var th = {}, uh = Uf(th), vh = Uf(th), wh = Uf(th);
  function xh(a) {
    if (a === th) throw Error(p(174));
    return a;
  }
  function yh(a, b) {
    G(wh, b);
    G(vh, a);
    G(uh, th);
    a = b.nodeType;
    switch (a) {
      case 9:
      case 11:
        b = (b = b.documentElement) ? b.namespaceURI : lb(null, "");
        break;
      default:
        a = 8 === a ? b.parentNode : b, b = a.namespaceURI || null, a = a.tagName, b = lb(b, a);
    }
    E(uh);
    G(uh, b);
  }
  function zh() {
    E(uh);
    E(vh);
    E(wh);
  }
  function Ah(a) {
    xh(wh.current);
    var b = xh(uh.current);
    var c = lb(b, a.type);
    b !== c && (G(vh, a), G(uh, c));
  }
  function Bh(a) {
    vh.current === a && (E(uh), E(vh));
  }
  var L = Uf(0);
  function Ch(a) {
    for (var b = a; null !== b; ) {
      if (13 === b.tag) {
        var c = b.memoizedState;
        if (null !== c && (c = c.dehydrated, null === c || "$?" === c.data || "$!" === c.data)) return b;
      } else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
        if (0 !== (b.flags & 128)) return b;
      } else if (null !== b.child) {
        b.child.return = b;
        b = b.child;
        continue;
      }
      if (b === a) break;
      for (; null === b.sibling; ) {
        if (null === b.return || b.return === a) return null;
        b = b.return;
      }
      b.sibling.return = b.return;
      b = b.sibling;
    }
    return null;
  }
  var Dh = [];
  function Eh() {
    for (var a = 0; a < Dh.length; a++) Dh[a]._workInProgressVersionPrimary = null;
    Dh.length = 0;
  }
  var Fh = ua.ReactCurrentDispatcher, Gh = ua.ReactCurrentBatchConfig, Hh = 0, M = null, N = null, O = null, Ih = false, Jh = false, Kh = 0, Lh = 0;
  function P() {
    throw Error(p(321));
  }
  function Mh(a, b) {
    if (null === b) return false;
    for (var c = 0; c < b.length && c < a.length; c++) if (!He(a[c], b[c])) return false;
    return true;
  }
  function Nh(a, b, c, d, e, f) {
    Hh = f;
    M = b;
    b.memoizedState = null;
    b.updateQueue = null;
    b.lanes = 0;
    Fh.current = null === a || null === a.memoizedState ? Oh : Ph;
    a = c(d, e);
    if (Jh) {
      f = 0;
      do {
        Jh = false;
        Kh = 0;
        if (25 <= f) throw Error(p(301));
        f += 1;
        O = N = null;
        b.updateQueue = null;
        Fh.current = Qh;
        a = c(d, e);
      } while (Jh);
    }
    Fh.current = Rh;
    b = null !== N && null !== N.next;
    Hh = 0;
    O = N = M = null;
    Ih = false;
    if (b) throw Error(p(300));
    return a;
  }
  function Sh() {
    var a = 0 !== Kh;
    Kh = 0;
    return a;
  }
  function Th() {
    var a = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    null === O ? M.memoizedState = O = a : O = O.next = a;
    return O;
  }
  function Uh() {
    if (null === N) {
      var a = M.alternate;
      a = null !== a ? a.memoizedState : null;
    } else a = N.next;
    var b = null === O ? M.memoizedState : O.next;
    if (null !== b) O = b, N = a;
    else {
      if (null === a) throw Error(p(310));
      N = a;
      a = { memoizedState: N.memoizedState, baseState: N.baseState, baseQueue: N.baseQueue, queue: N.queue, next: null };
      null === O ? M.memoizedState = O = a : O = O.next = a;
    }
    return O;
  }
  function Vh(a, b) {
    return "function" === typeof b ? b(a) : b;
  }
  function Wh(a) {
    var b = Uh(), c = b.queue;
    if (null === c) throw Error(p(311));
    c.lastRenderedReducer = a;
    var d = N, e = d.baseQueue, f = c.pending;
    if (null !== f) {
      if (null !== e) {
        var g = e.next;
        e.next = f.next;
        f.next = g;
      }
      d.baseQueue = e = f;
      c.pending = null;
    }
    if (null !== e) {
      f = e.next;
      d = d.baseState;
      var h = g = null, k = null, l = f;
      do {
        var m = l.lane;
        if ((Hh & m) === m) null !== k && (k = k.next = { lane: 0, action: l.action, hasEagerState: l.hasEagerState, eagerState: l.eagerState, next: null }), d = l.hasEagerState ? l.eagerState : a(d, l.action);
        else {
          var q = {
            lane: m,
            action: l.action,
            hasEagerState: l.hasEagerState,
            eagerState: l.eagerState,
            next: null
          };
          null === k ? (h = k = q, g = d) : k = k.next = q;
          M.lanes |= m;
          rh |= m;
        }
        l = l.next;
      } while (null !== l && l !== f);
      null === k ? g = d : k.next = h;
      He(d, b.memoizedState) || (dh = true);
      b.memoizedState = d;
      b.baseState = g;
      b.baseQueue = k;
      c.lastRenderedState = d;
    }
    a = c.interleaved;
    if (null !== a) {
      e = a;
      do
        f = e.lane, M.lanes |= f, rh |= f, e = e.next;
      while (e !== a);
    } else null === e && (c.lanes = 0);
    return [b.memoizedState, c.dispatch];
  }
  function Xh(a) {
    var b = Uh(), c = b.queue;
    if (null === c) throw Error(p(311));
    c.lastRenderedReducer = a;
    var d = c.dispatch, e = c.pending, f = b.memoizedState;
    if (null !== e) {
      c.pending = null;
      var g = e = e.next;
      do
        f = a(f, g.action), g = g.next;
      while (g !== e);
      He(f, b.memoizedState) || (dh = true);
      b.memoizedState = f;
      null === b.baseQueue && (b.baseState = f);
      c.lastRenderedState = f;
    }
    return [f, d];
  }
  function Yh() {
  }
  function Zh(a, b) {
    var c = M, d = Uh(), e = b(), f = !He(d.memoizedState, e);
    f && (d.memoizedState = e, dh = true);
    d = d.queue;
    $h(ai.bind(null, c, d, a), [a]);
    if (d.getSnapshot !== b || f || null !== O && O.memoizedState.tag & 1) {
      c.flags |= 2048;
      bi(9, ci.bind(null, c, d, e, b), void 0, null);
      if (null === Q) throw Error(p(349));
      0 !== (Hh & 30) || di(c, b, e);
    }
    return e;
  }
  function di(a, b, c) {
    a.flags |= 16384;
    a = { getSnapshot: b, value: c };
    b = M.updateQueue;
    null === b ? (b = { lastEffect: null, stores: null }, M.updateQueue = b, b.stores = [a]) : (c = b.stores, null === c ? b.stores = [a] : c.push(a));
  }
  function ci(a, b, c, d) {
    b.value = c;
    b.getSnapshot = d;
    ei(b) && fi(a);
  }
  function ai(a, b, c) {
    return c(function() {
      ei(b) && fi(a);
    });
  }
  function ei(a) {
    var b = a.getSnapshot;
    a = a.value;
    try {
      var c = b();
      return !He(a, c);
    } catch (d) {
      return true;
    }
  }
  function fi(a) {
    var b = ih(a, 1);
    null !== b && gi(b, a, 1, -1);
  }
  function hi(a) {
    var b = Th();
    "function" === typeof a && (a = a());
    b.memoizedState = b.baseState = a;
    a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Vh, lastRenderedState: a };
    b.queue = a;
    a = a.dispatch = ii.bind(null, M, a);
    return [b.memoizedState, a];
  }
  function bi(a, b, c, d) {
    a = { tag: a, create: b, destroy: c, deps: d, next: null };
    b = M.updateQueue;
    null === b ? (b = { lastEffect: null, stores: null }, M.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, null === c ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
    return a;
  }
  function ji() {
    return Uh().memoizedState;
  }
  function ki(a, b, c, d) {
    var e = Th();
    M.flags |= a;
    e.memoizedState = bi(1 | b, c, void 0, void 0 === d ? null : d);
  }
  function li(a, b, c, d) {
    var e = Uh();
    d = void 0 === d ? null : d;
    var f = void 0;
    if (null !== N) {
      var g = N.memoizedState;
      f = g.destroy;
      if (null !== d && Mh(d, g.deps)) {
        e.memoizedState = bi(b, c, f, d);
        return;
      }
    }
    M.flags |= a;
    e.memoizedState = bi(1 | b, c, f, d);
  }
  function mi(a, b) {
    return ki(8390656, 8, a, b);
  }
  function $h(a, b) {
    return li(2048, 8, a, b);
  }
  function ni(a, b) {
    return li(4, 2, a, b);
  }
  function oi(a, b) {
    return li(4, 4, a, b);
  }
  function pi(a, b) {
    if ("function" === typeof b) return a = a(), b(a), function() {
      b(null);
    };
    if (null !== b && void 0 !== b) return a = a(), b.current = a, function() {
      b.current = null;
    };
  }
  function qi(a, b, c) {
    c = null !== c && void 0 !== c ? c.concat([a]) : null;
    return li(4, 4, pi.bind(null, b, a), c);
  }
  function ri() {
  }
  function si(a, b) {
    var c = Uh();
    b = void 0 === b ? null : b;
    var d = c.memoizedState;
    if (null !== d && null !== b && Mh(b, d[1])) return d[0];
    c.memoizedState = [a, b];
    return a;
  }
  function ti(a, b) {
    var c = Uh();
    b = void 0 === b ? null : b;
    var d = c.memoizedState;
    if (null !== d && null !== b && Mh(b, d[1])) return d[0];
    a = a();
    c.memoizedState = [a, b];
    return a;
  }
  function ui(a, b, c) {
    if (0 === (Hh & 21)) return a.baseState && (a.baseState = false, dh = true), a.memoizedState = c;
    He(c, b) || (c = yc(), M.lanes |= c, rh |= c, a.baseState = true);
    return b;
  }
  function vi(a, b) {
    var c = C;
    C = 0 !== c && 4 > c ? c : 4;
    a(true);
    var d = Gh.transition;
    Gh.transition = {};
    try {
      a(false), b();
    } finally {
      C = c, Gh.transition = d;
    }
  }
  function wi() {
    return Uh().memoizedState;
  }
  function xi(a, b, c) {
    var d = yi(a);
    c = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
    if (zi(a)) Ai(b, c);
    else if (c = hh(a, b, c, d), null !== c) {
      var e = R();
      gi(c, a, d, e);
      Bi(c, b, d);
    }
  }
  function ii(a, b, c) {
    var d = yi(a), e = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
    if (zi(a)) Ai(b, e);
    else {
      var f = a.alternate;
      if (0 === a.lanes && (null === f || 0 === f.lanes) && (f = b.lastRenderedReducer, null !== f)) try {
        var g = b.lastRenderedState, h = f(g, c);
        e.hasEagerState = true;
        e.eagerState = h;
        if (He(h, g)) {
          var k = b.interleaved;
          null === k ? (e.next = e, gh(b)) : (e.next = k.next, k.next = e);
          b.interleaved = e;
          return;
        }
      } catch (l) {
      } finally {
      }
      c = hh(a, b, e, d);
      null !== c && (e = R(), gi(c, a, d, e), Bi(c, b, d));
    }
  }
  function zi(a) {
    var b = a.alternate;
    return a === M || null !== b && b === M;
  }
  function Ai(a, b) {
    Jh = Ih = true;
    var c = a.pending;
    null === c ? b.next = b : (b.next = c.next, c.next = b);
    a.pending = b;
  }
  function Bi(a, b, c) {
    if (0 !== (c & 4194240)) {
      var d = b.lanes;
      d &= a.pendingLanes;
      c |= d;
      b.lanes = c;
      Cc(a, c);
    }
  }
  var Rh = { readContext: eh, useCallback: P, useContext: P, useEffect: P, useImperativeHandle: P, useInsertionEffect: P, useLayoutEffect: P, useMemo: P, useReducer: P, useRef: P, useState: P, useDebugValue: P, useDeferredValue: P, useTransition: P, useMutableSource: P, useSyncExternalStore: P, useId: P, unstable_isNewReconciler: false }, Oh = { readContext: eh, useCallback: function(a, b) {
    Th().memoizedState = [a, void 0 === b ? null : b];
    return a;
  }, useContext: eh, useEffect: mi, useImperativeHandle: function(a, b, c) {
    c = null !== c && void 0 !== c ? c.concat([a]) : null;
    return ki(
      4194308,
      4,
      pi.bind(null, b, a),
      c
    );
  }, useLayoutEffect: function(a, b) {
    return ki(4194308, 4, a, b);
  }, useInsertionEffect: function(a, b) {
    return ki(4, 2, a, b);
  }, useMemo: function(a, b) {
    var c = Th();
    b = void 0 === b ? null : b;
    a = a();
    c.memoizedState = [a, b];
    return a;
  }, useReducer: function(a, b, c) {
    var d = Th();
    b = void 0 !== c ? c(b) : b;
    d.memoizedState = d.baseState = b;
    a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: a, lastRenderedState: b };
    d.queue = a;
    a = a.dispatch = xi.bind(null, M, a);
    return [d.memoizedState, a];
  }, useRef: function(a) {
    var b = Th();
    a = { current: a };
    return b.memoizedState = a;
  }, useState: hi, useDebugValue: ri, useDeferredValue: function(a) {
    return Th().memoizedState = a;
  }, useTransition: function() {
    var a = hi(false), b = a[0];
    a = vi.bind(null, a[1]);
    Th().memoizedState = a;
    return [b, a];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(a, b, c) {
    var d = M, e = Th();
    if (I) {
      if (void 0 === c) throw Error(p(407));
      c = c();
    } else {
      c = b();
      if (null === Q) throw Error(p(349));
      0 !== (Hh & 30) || di(d, b, c);
    }
    e.memoizedState = c;
    var f = { value: c, getSnapshot: b };
    e.queue = f;
    mi(ai.bind(
      null,
      d,
      f,
      a
    ), [a]);
    d.flags |= 2048;
    bi(9, ci.bind(null, d, f, c, b), void 0, null);
    return c;
  }, useId: function() {
    var a = Th(), b = Q.identifierPrefix;
    if (I) {
      var c = sg;
      var d = rg;
      c = (d & ~(1 << 32 - oc(d) - 1)).toString(32) + c;
      b = ":" + b + "R" + c;
      c = Kh++;
      0 < c && (b += "H" + c.toString(32));
      b += ":";
    } else c = Lh++, b = ":" + b + "r" + c.toString(32) + ":";
    return a.memoizedState = b;
  }, unstable_isNewReconciler: false }, Ph = {
    readContext: eh,
    useCallback: si,
    useContext: eh,
    useEffect: $h,
    useImperativeHandle: qi,
    useInsertionEffect: ni,
    useLayoutEffect: oi,
    useMemo: ti,
    useReducer: Wh,
    useRef: ji,
    useState: function() {
      return Wh(Vh);
    },
    useDebugValue: ri,
    useDeferredValue: function(a) {
      var b = Uh();
      return ui(b, N.memoizedState, a);
    },
    useTransition: function() {
      var a = Wh(Vh)[0], b = Uh().memoizedState;
      return [a, b];
    },
    useMutableSource: Yh,
    useSyncExternalStore: Zh,
    useId: wi,
    unstable_isNewReconciler: false
  }, Qh = { readContext: eh, useCallback: si, useContext: eh, useEffect: $h, useImperativeHandle: qi, useInsertionEffect: ni, useLayoutEffect: oi, useMemo: ti, useReducer: Xh, useRef: ji, useState: function() {
    return Xh(Vh);
  }, useDebugValue: ri, useDeferredValue: function(a) {
    var b = Uh();
    return null === N ? b.memoizedState = a : ui(b, N.memoizedState, a);
  }, useTransition: function() {
    var a = Xh(Vh)[0], b = Uh().memoizedState;
    return [a, b];
  }, useMutableSource: Yh, useSyncExternalStore: Zh, useId: wi, unstable_isNewReconciler: false };
  function Ci(a, b) {
    if (a && a.defaultProps) {
      b = A({}, b);
      a = a.defaultProps;
      for (var c in a) void 0 === b[c] && (b[c] = a[c]);
      return b;
    }
    return b;
  }
  function Di(a, b, c, d) {
    b = a.memoizedState;
    c = c(d, b);
    c = null === c || void 0 === c ? b : A({}, b, c);
    a.memoizedState = c;
    0 === a.lanes && (a.updateQueue.baseState = c);
  }
  var Ei = { isMounted: function(a) {
    return (a = a._reactInternals) ? Vb(a) === a : false;
  }, enqueueSetState: function(a, b, c) {
    a = a._reactInternals;
    var d = R(), e = yi(a), f = mh(d, e);
    f.payload = b;
    void 0 !== c && null !== c && (f.callback = c);
    b = nh(a, f, e);
    null !== b && (gi(b, a, e, d), oh(b, a, e));
  }, enqueueReplaceState: function(a, b, c) {
    a = a._reactInternals;
    var d = R(), e = yi(a), f = mh(d, e);
    f.tag = 1;
    f.payload = b;
    void 0 !== c && null !== c && (f.callback = c);
    b = nh(a, f, e);
    null !== b && (gi(b, a, e, d), oh(b, a, e));
  }, enqueueForceUpdate: function(a, b) {
    a = a._reactInternals;
    var c = R(), d = yi(a), e = mh(c, d);
    e.tag = 2;
    void 0 !== b && null !== b && (e.callback = b);
    b = nh(a, e, d);
    null !== b && (gi(b, a, d, c), oh(b, a, d));
  } };
  function Fi(a, b, c, d, e, f, g) {
    a = a.stateNode;
    return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f, g) : b.prototype && b.prototype.isPureReactComponent ? !Ie(c, d) || !Ie(e, f) : true;
  }
  function Gi(a, b, c) {
    var d = false, e = Vf;
    var f = b.contextType;
    "object" === typeof f && null !== f ? f = eh(f) : (e = Zf(b) ? Xf : H.current, d = b.contextTypes, f = (d = null !== d && void 0 !== d) ? Yf(a, e) : Vf);
    b = new b(c, f);
    a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
    b.updater = Ei;
    a.stateNode = b;
    b._reactInternals = a;
    d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f);
    return b;
  }
  function Hi(a, b, c, d) {
    a = b.state;
    "function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
    "function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
    b.state !== a && Ei.enqueueReplaceState(b, b.state, null);
  }
  function Ii(a, b, c, d) {
    var e = a.stateNode;
    e.props = c;
    e.state = a.memoizedState;
    e.refs = {};
    kh(a);
    var f = b.contextType;
    "object" === typeof f && null !== f ? e.context = eh(f) : (f = Zf(b) ? Xf : H.current, e.context = Yf(a, f));
    e.state = a.memoizedState;
    f = b.getDerivedStateFromProps;
    "function" === typeof f && (Di(a, b, f, c), e.state = a.memoizedState);
    "function" === typeof b.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b !== e.state && Ei.enqueueReplaceState(e, e.state, null), qh(a, c, e, d), e.state = a.memoizedState);
    "function" === typeof e.componentDidMount && (a.flags |= 4194308);
  }
  function Ji(a, b) {
    try {
      var c = "", d = b;
      do
        c += Pa(d), d = d.return;
      while (d);
      var e = c;
    } catch (f) {
      e = "\nError generating stack: " + f.message + "\n" + f.stack;
    }
    return { value: a, source: b, stack: e, digest: null };
  }
  function Ki(a, b, c) {
    return { value: a, source: null, stack: null != c ? c : null, digest: null != b ? b : null };
  }
  function Li(a, b) {
    try {
      console.error(b.value);
    } catch (c) {
      setTimeout(function() {
        throw c;
      });
    }
  }
  var Mi = "function" === typeof WeakMap ? WeakMap : Map;
  function Ni(a, b, c) {
    c = mh(-1, c);
    c.tag = 3;
    c.payload = { element: null };
    var d = b.value;
    c.callback = function() {
      Oi || (Oi = true, Pi = d);
      Li(a, b);
    };
    return c;
  }
  function Qi(a, b, c) {
    c = mh(-1, c);
    c.tag = 3;
    var d = a.type.getDerivedStateFromError;
    if ("function" === typeof d) {
      var e = b.value;
      c.payload = function() {
        return d(e);
      };
      c.callback = function() {
        Li(a, b);
      };
    }
    var f = a.stateNode;
    null !== f && "function" === typeof f.componentDidCatch && (c.callback = function() {
      Li(a, b);
      "function" !== typeof d && (null === Ri ? Ri = /* @__PURE__ */ new Set([this]) : Ri.add(this));
      var c2 = b.stack;
      this.componentDidCatch(b.value, { componentStack: null !== c2 ? c2 : "" });
    });
    return c;
  }
  function Si(a, b, c) {
    var d = a.pingCache;
    if (null === d) {
      d = a.pingCache = new Mi();
      var e = /* @__PURE__ */ new Set();
      d.set(b, e);
    } else e = d.get(b), void 0 === e && (e = /* @__PURE__ */ new Set(), d.set(b, e));
    e.has(c) || (e.add(c), a = Ti.bind(null, a, b, c), b.then(a, a));
  }
  function Ui(a) {
    do {
      var b;
      if (b = 13 === a.tag) b = a.memoizedState, b = null !== b ? null !== b.dehydrated ? true : false : true;
      if (b) return a;
      a = a.return;
    } while (null !== a);
    return null;
  }
  function Vi(a, b, c, d, e) {
    if (0 === (a.mode & 1)) return a === b ? a.flags |= 65536 : (a.flags |= 128, c.flags |= 131072, c.flags &= -52805, 1 === c.tag && (null === c.alternate ? c.tag = 17 : (b = mh(-1, 1), b.tag = 2, nh(c, b, 1))), c.lanes |= 1), a;
    a.flags |= 65536;
    a.lanes = e;
    return a;
  }
  var Wi = ua.ReactCurrentOwner, dh = false;
  function Xi(a, b, c, d) {
    b.child = null === a ? Vg(b, null, c, d) : Ug(b, a.child, c, d);
  }
  function Yi(a, b, c, d, e) {
    c = c.render;
    var f = b.ref;
    ch(b, e);
    d = Nh(a, b, c, d, f, e);
    c = Sh();
    if (null !== a && !dh) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, Zi(a, b, e);
    I && c && vg(b);
    b.flags |= 1;
    Xi(a, b, d, e);
    return b.child;
  }
  function $i(a, b, c, d, e) {
    if (null === a) {
      var f = c.type;
      if ("function" === typeof f && !aj(f) && void 0 === f.defaultProps && null === c.compare && void 0 === c.defaultProps) return b.tag = 15, b.type = f, bj(a, b, f, d, e);
      a = Rg(c.type, null, d, b, b.mode, e);
      a.ref = b.ref;
      a.return = b;
      return b.child = a;
    }
    f = a.child;
    if (0 === (a.lanes & e)) {
      var g = f.memoizedProps;
      c = c.compare;
      c = null !== c ? c : Ie;
      if (c(g, d) && a.ref === b.ref) return Zi(a, b, e);
    }
    b.flags |= 1;
    a = Pg(f, d);
    a.ref = b.ref;
    a.return = b;
    return b.child = a;
  }
  function bj(a, b, c, d, e) {
    if (null !== a) {
      var f = a.memoizedProps;
      if (Ie(f, d) && a.ref === b.ref) if (dh = false, b.pendingProps = d = f, 0 !== (a.lanes & e)) 0 !== (a.flags & 131072) && (dh = true);
      else return b.lanes = a.lanes, Zi(a, b, e);
    }
    return cj(a, b, c, d, e);
  }
  function dj(a, b, c) {
    var d = b.pendingProps, e = d.children, f = null !== a ? a.memoizedState : null;
    if ("hidden" === d.mode) if (0 === (b.mode & 1)) b.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G(ej, fj), fj |= c;
    else {
      if (0 === (c & 1073741824)) return a = null !== f ? f.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, b.memoizedState = { baseLanes: a, cachePool: null, transitions: null }, b.updateQueue = null, G(ej, fj), fj |= a, null;
      b.memoizedState = { baseLanes: 0, cachePool: null, transitions: null };
      d = null !== f ? f.baseLanes : c;
      G(ej, fj);
      fj |= d;
    }
    else null !== f ? (d = f.baseLanes | c, b.memoizedState = null) : d = c, G(ej, fj), fj |= d;
    Xi(a, b, e, c);
    return b.child;
  }
  function gj(a, b) {
    var c = b.ref;
    if (null === a && null !== c || null !== a && a.ref !== c) b.flags |= 512, b.flags |= 2097152;
  }
  function cj(a, b, c, d, e) {
    var f = Zf(c) ? Xf : H.current;
    f = Yf(b, f);
    ch(b, e);
    c = Nh(a, b, c, d, f, e);
    d = Sh();
    if (null !== a && !dh) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, Zi(a, b, e);
    I && d && vg(b);
    b.flags |= 1;
    Xi(a, b, c, e);
    return b.child;
  }
  function hj(a, b, c, d, e) {
    if (Zf(c)) {
      var f = true;
      cg(b);
    } else f = false;
    ch(b, e);
    if (null === b.stateNode) ij(a, b), Gi(b, c, d), Ii(b, c, d, e), d = true;
    else if (null === a) {
      var g = b.stateNode, h = b.memoizedProps;
      g.props = h;
      var k = g.context, l = c.contextType;
      "object" === typeof l && null !== l ? l = eh(l) : (l = Zf(c) ? Xf : H.current, l = Yf(b, l));
      var m = c.getDerivedStateFromProps, q = "function" === typeof m || "function" === typeof g.getSnapshotBeforeUpdate;
      q || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k !== l) && Hi(b, g, d, l);
      jh = false;
      var r = b.memoizedState;
      g.state = r;
      qh(b, d, g, e);
      k = b.memoizedState;
      h !== d || r !== k || Wf.current || jh ? ("function" === typeof m && (Di(b, c, m, d), k = b.memoizedState), (h = jh || Fi(b, c, h, d, r, k, l)) ? (q || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b.flags |= 4194308)) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), b.memoizedProps = d, b.memoizedState = k), g.props = d, g.state = k, g.context = l, d = h) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), d = false);
    } else {
      g = b.stateNode;
      lh(a, b);
      h = b.memoizedProps;
      l = b.type === b.elementType ? h : Ci(b.type, h);
      g.props = l;
      q = b.pendingProps;
      r = g.context;
      k = c.contextType;
      "object" === typeof k && null !== k ? k = eh(k) : (k = Zf(c) ? Xf : H.current, k = Yf(b, k));
      var y = c.getDerivedStateFromProps;
      (m = "function" === typeof y || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== q || r !== k) && Hi(b, g, d, k);
      jh = false;
      r = b.memoizedState;
      g.state = r;
      qh(b, d, g, e);
      var n = b.memoizedState;
      h !== q || r !== n || Wf.current || jh ? ("function" === typeof y && (Di(b, c, y, d), n = b.memoizedState), (l = jh || Fi(b, c, l, d, r, n, k) || false) ? (m || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, n, k), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, n, k)), "function" === typeof g.componentDidUpdate && (b.flags |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b.flags |= 1024)) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 1024), b.memoizedProps = d, b.memoizedState = n), g.props = d, g.state = n, g.context = k, d = l) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 1024), d = false);
    }
    return jj(a, b, c, d, f, e);
  }
  function jj(a, b, c, d, e, f) {
    gj(a, b);
    var g = 0 !== (b.flags & 128);
    if (!d && !g) return e && dg(b, c, false), Zi(a, b, f);
    d = b.stateNode;
    Wi.current = b;
    var h = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
    b.flags |= 1;
    null !== a && g ? (b.child = Ug(b, a.child, null, f), b.child = Ug(b, null, h, f)) : Xi(a, b, h, f);
    b.memoizedState = d.state;
    e && dg(b, c, true);
    return b.child;
  }
  function kj(a) {
    var b = a.stateNode;
    b.pendingContext ? ag(a, b.pendingContext, b.pendingContext !== b.context) : b.context && ag(a, b.context, false);
    yh(a, b.containerInfo);
  }
  function lj(a, b, c, d, e) {
    Ig();
    Jg(e);
    b.flags |= 256;
    Xi(a, b, c, d);
    return b.child;
  }
  var mj = { dehydrated: null, treeContext: null, retryLane: 0 };
  function nj(a) {
    return { baseLanes: a, cachePool: null, transitions: null };
  }
  function oj(a, b, c) {
    var d = b.pendingProps, e = L.current, f = false, g = 0 !== (b.flags & 128), h;
    (h = g) || (h = null !== a && null === a.memoizedState ? false : 0 !== (e & 2));
    if (h) f = true, b.flags &= -129;
    else if (null === a || null !== a.memoizedState) e |= 1;
    G(L, e & 1);
    if (null === a) {
      Eg(b);
      a = b.memoizedState;
      if (null !== a && (a = a.dehydrated, null !== a)) return 0 === (b.mode & 1) ? b.lanes = 1 : "$!" === a.data ? b.lanes = 8 : b.lanes = 1073741824, null;
      g = d.children;
      a = d.fallback;
      return f ? (d = b.mode, f = b.child, g = { mode: "hidden", children: g }, 0 === (d & 1) && null !== f ? (f.childLanes = 0, f.pendingProps = g) : f = pj(g, d, 0, null), a = Tg(a, d, c, null), f.return = b, a.return = b, f.sibling = a, b.child = f, b.child.memoizedState = nj(c), b.memoizedState = mj, a) : qj(b, g);
    }
    e = a.memoizedState;
    if (null !== e && (h = e.dehydrated, null !== h)) return rj(a, b, g, d, h, e, c);
    if (f) {
      f = d.fallback;
      g = b.mode;
      e = a.child;
      h = e.sibling;
      var k = { mode: "hidden", children: d.children };
      0 === (g & 1) && b.child !== e ? (d = b.child, d.childLanes = 0, d.pendingProps = k, b.deletions = null) : (d = Pg(e, k), d.subtreeFlags = e.subtreeFlags & 14680064);
      null !== h ? f = Pg(h, f) : (f = Tg(f, g, c, null), f.flags |= 2);
      f.return = b;
      d.return = b;
      d.sibling = f;
      b.child = d;
      d = f;
      f = b.child;
      g = a.child.memoizedState;
      g = null === g ? nj(c) : { baseLanes: g.baseLanes | c, cachePool: null, transitions: g.transitions };
      f.memoizedState = g;
      f.childLanes = a.childLanes & ~c;
      b.memoizedState = mj;
      return d;
    }
    f = a.child;
    a = f.sibling;
    d = Pg(f, { mode: "visible", children: d.children });
    0 === (b.mode & 1) && (d.lanes = c);
    d.return = b;
    d.sibling = null;
    null !== a && (c = b.deletions, null === c ? (b.deletions = [a], b.flags |= 16) : c.push(a));
    b.child = d;
    b.memoizedState = null;
    return d;
  }
  function qj(a, b) {
    b = pj({ mode: "visible", children: b }, a.mode, 0, null);
    b.return = a;
    return a.child = b;
  }
  function sj(a, b, c, d) {
    null !== d && Jg(d);
    Ug(b, a.child, null, c);
    a = qj(b, b.pendingProps.children);
    a.flags |= 2;
    b.memoizedState = null;
    return a;
  }
  function rj(a, b, c, d, e, f, g) {
    if (c) {
      if (b.flags & 256) return b.flags &= -257, d = Ki(Error(p(422))), sj(a, b, g, d);
      if (null !== b.memoizedState) return b.child = a.child, b.flags |= 128, null;
      f = d.fallback;
      e = b.mode;
      d = pj({ mode: "visible", children: d.children }, e, 0, null);
      f = Tg(f, e, g, null);
      f.flags |= 2;
      d.return = b;
      f.return = b;
      d.sibling = f;
      b.child = d;
      0 !== (b.mode & 1) && Ug(b, a.child, null, g);
      b.child.memoizedState = nj(g);
      b.memoizedState = mj;
      return f;
    }
    if (0 === (b.mode & 1)) return sj(a, b, g, null);
    if ("$!" === e.data) {
      d = e.nextSibling && e.nextSibling.dataset;
      if (d) var h = d.dgst;
      d = h;
      f = Error(p(419));
      d = Ki(f, d, void 0);
      return sj(a, b, g, d);
    }
    h = 0 !== (g & a.childLanes);
    if (dh || h) {
      d = Q;
      if (null !== d) {
        switch (g & -g) {
          case 4:
            e = 2;
            break;
          case 16:
            e = 8;
            break;
          case 64:
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
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            e = 32;
            break;
          case 536870912:
            e = 268435456;
            break;
          default:
            e = 0;
        }
        e = 0 !== (e & (d.suspendedLanes | g)) ? 0 : e;
        0 !== e && e !== f.retryLane && (f.retryLane = e, ih(a, e), gi(d, a, e, -1));
      }
      tj();
      d = Ki(Error(p(421)));
      return sj(a, b, g, d);
    }
    if ("$?" === e.data) return b.flags |= 128, b.child = a.child, b = uj.bind(null, a), e._reactRetry = b, null;
    a = f.treeContext;
    yg = Lf(e.nextSibling);
    xg = b;
    I = true;
    zg = null;
    null !== a && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a.id, sg = a.overflow, qg = b);
    b = qj(b, d.children);
    b.flags |= 4096;
    return b;
  }
  function vj(a, b, c) {
    a.lanes |= b;
    var d = a.alternate;
    null !== d && (d.lanes |= b);
    bh(a.return, b, c);
  }
  function wj(a, b, c, d, e) {
    var f = a.memoizedState;
    null === f ? a.memoizedState = { isBackwards: b, rendering: null, renderingStartTime: 0, last: d, tail: c, tailMode: e } : (f.isBackwards = b, f.rendering = null, f.renderingStartTime = 0, f.last = d, f.tail = c, f.tailMode = e);
  }
  function xj(a, b, c) {
    var d = b.pendingProps, e = d.revealOrder, f = d.tail;
    Xi(a, b, d.children, c);
    d = L.current;
    if (0 !== (d & 2)) d = d & 1 | 2, b.flags |= 128;
    else {
      if (null !== a && 0 !== (a.flags & 128)) a: for (a = b.child; null !== a; ) {
        if (13 === a.tag) null !== a.memoizedState && vj(a, c, b);
        else if (19 === a.tag) vj(a, c, b);
        else if (null !== a.child) {
          a.child.return = a;
          a = a.child;
          continue;
        }
        if (a === b) break a;
        for (; null === a.sibling; ) {
          if (null === a.return || a.return === b) break a;
          a = a.return;
        }
        a.sibling.return = a.return;
        a = a.sibling;
      }
      d &= 1;
    }
    G(L, d);
    if (0 === (b.mode & 1)) b.memoizedState = null;
    else switch (e) {
      case "forwards":
        c = b.child;
        for (e = null; null !== c; ) a = c.alternate, null !== a && null === Ch(a) && (e = c), c = c.sibling;
        c = e;
        null === c ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
        wj(b, false, e, c, f);
        break;
      case "backwards":
        c = null;
        e = b.child;
        for (b.child = null; null !== e; ) {
          a = e.alternate;
          if (null !== a && null === Ch(a)) {
            b.child = e;
            break;
          }
          a = e.sibling;
          e.sibling = c;
          c = e;
          e = a;
        }
        wj(b, true, c, null, f);
        break;
      case "together":
        wj(b, false, null, null, void 0);
        break;
      default:
        b.memoizedState = null;
    }
    return b.child;
  }
  function ij(a, b) {
    0 === (b.mode & 1) && null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
  }
  function Zi(a, b, c) {
    null !== a && (b.dependencies = a.dependencies);
    rh |= b.lanes;
    if (0 === (c & b.childLanes)) return null;
    if (null !== a && b.child !== a.child) throw Error(p(153));
    if (null !== b.child) {
      a = b.child;
      c = Pg(a, a.pendingProps);
      b.child = c;
      for (c.return = b; null !== a.sibling; ) a = a.sibling, c = c.sibling = Pg(a, a.pendingProps), c.return = b;
      c.sibling = null;
    }
    return b.child;
  }
  function yj(a, b, c) {
    switch (b.tag) {
      case 3:
        kj(b);
        Ig();
        break;
      case 5:
        Ah(b);
        break;
      case 1:
        Zf(b.type) && cg(b);
        break;
      case 4:
        yh(b, b.stateNode.containerInfo);
        break;
      case 10:
        var d = b.type._context, e = b.memoizedProps.value;
        G(Wg, d._currentValue);
        d._currentValue = e;
        break;
      case 13:
        d = b.memoizedState;
        if (null !== d) {
          if (null !== d.dehydrated) return G(L, L.current & 1), b.flags |= 128, null;
          if (0 !== (c & b.child.childLanes)) return oj(a, b, c);
          G(L, L.current & 1);
          a = Zi(a, b, c);
          return null !== a ? a.sibling : null;
        }
        G(L, L.current & 1);
        break;
      case 19:
        d = 0 !== (c & b.childLanes);
        if (0 !== (a.flags & 128)) {
          if (d) return xj(a, b, c);
          b.flags |= 128;
        }
        e = b.memoizedState;
        null !== e && (e.rendering = null, e.tail = null, e.lastEffect = null);
        G(L, L.current);
        if (d) break;
        else return null;
      case 22:
      case 23:
        return b.lanes = 0, dj(a, b, c);
    }
    return Zi(a, b, c);
  }
  var zj, Aj, Bj, Cj;
  zj = function(a, b) {
    for (var c = b.child; null !== c; ) {
      if (5 === c.tag || 6 === c.tag) a.appendChild(c.stateNode);
      else if (4 !== c.tag && null !== c.child) {
        c.child.return = c;
        c = c.child;
        continue;
      }
      if (c === b) break;
      for (; null === c.sibling; ) {
        if (null === c.return || c.return === b) return;
        c = c.return;
      }
      c.sibling.return = c.return;
      c = c.sibling;
    }
  };
  Aj = function() {
  };
  Bj = function(a, b, c, d) {
    var e = a.memoizedProps;
    if (e !== d) {
      a = b.stateNode;
      xh(uh.current);
      var f = null;
      switch (c) {
        case "input":
          e = Ya(a, e);
          d = Ya(a, d);
          f = [];
          break;
        case "select":
          e = A({}, e, { value: void 0 });
          d = A({}, d, { value: void 0 });
          f = [];
          break;
        case "textarea":
          e = gb(a, e);
          d = gb(a, d);
          f = [];
          break;
        default:
          "function" !== typeof e.onClick && "function" === typeof d.onClick && (a.onclick = Bf);
      }
      ub(c, d);
      var g;
      c = null;
      for (l in e) if (!d.hasOwnProperty(l) && e.hasOwnProperty(l) && null != e[l]) if ("style" === l) {
        var h = e[l];
        for (g in h) h.hasOwnProperty(g) && (c || (c = {}), c[g] = "");
      } else "dangerouslySetInnerHTML" !== l && "children" !== l && "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && "autoFocus" !== l && (ea.hasOwnProperty(l) ? f || (f = []) : (f = f || []).push(l, null));
      for (l in d) {
        var k = d[l];
        h = null != e ? e[l] : void 0;
        if (d.hasOwnProperty(l) && k !== h && (null != k || null != h)) if ("style" === l) if (h) {
          for (g in h) !h.hasOwnProperty(g) || k && k.hasOwnProperty(g) || (c || (c = {}), c[g] = "");
          for (g in k) k.hasOwnProperty(g) && h[g] !== k[g] && (c || (c = {}), c[g] = k[g]);
        } else c || (f || (f = []), f.push(
          l,
          c
        )), c = k;
        else "dangerouslySetInnerHTML" === l ? (k = k ? k.__html : void 0, h = h ? h.__html : void 0, null != k && h !== k && (f = f || []).push(l, k)) : "children" === l ? "string" !== typeof k && "number" !== typeof k || (f = f || []).push(l, "" + k) : "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && (ea.hasOwnProperty(l) ? (null != k && "onScroll" === l && D("scroll", a), f || h === k || (f = [])) : (f = f || []).push(l, k));
      }
      c && (f = f || []).push("style", c);
      var l = f;
      if (b.updateQueue = l) b.flags |= 4;
    }
  };
  Cj = function(a, b, c, d) {
    c !== d && (b.flags |= 4);
  };
  function Dj(a, b) {
    if (!I) switch (a.tailMode) {
      case "hidden":
        b = a.tail;
        for (var c = null; null !== b; ) null !== b.alternate && (c = b), b = b.sibling;
        null === c ? a.tail = null : c.sibling = null;
        break;
      case "collapsed":
        c = a.tail;
        for (var d = null; null !== c; ) null !== c.alternate && (d = c), c = c.sibling;
        null === d ? b || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
    }
  }
  function S(a) {
    var b = null !== a.alternate && a.alternate.child === a.child, c = 0, d = 0;
    if (b) for (var e = a.child; null !== e; ) c |= e.lanes | e.childLanes, d |= e.subtreeFlags & 14680064, d |= e.flags & 14680064, e.return = a, e = e.sibling;
    else for (e = a.child; null !== e; ) c |= e.lanes | e.childLanes, d |= e.subtreeFlags, d |= e.flags, e.return = a, e = e.sibling;
    a.subtreeFlags |= d;
    a.childLanes = c;
    return b;
  }
  function Ej(a, b, c) {
    var d = b.pendingProps;
    wg(b);
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
        return S(b), null;
      case 1:
        return Zf(b.type) && $f(), S(b), null;
      case 3:
        d = b.stateNode;
        zh();
        E(Wf);
        E(H);
        Eh();
        d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
        if (null === a || null === a.child) Gg(b) ? b.flags |= 4 : null === a || a.memoizedState.isDehydrated && 0 === (b.flags & 256) || (b.flags |= 1024, null !== zg && (Fj(zg), zg = null));
        Aj(a, b);
        S(b);
        return null;
      case 5:
        Bh(b);
        var e = xh(wh.current);
        c = b.type;
        if (null !== a && null != b.stateNode) Bj(a, b, c, d, e), a.ref !== b.ref && (b.flags |= 512, b.flags |= 2097152);
        else {
          if (!d) {
            if (null === b.stateNode) throw Error(p(166));
            S(b);
            return null;
          }
          a = xh(uh.current);
          if (Gg(b)) {
            d = b.stateNode;
            c = b.type;
            var f = b.memoizedProps;
            d[Of] = b;
            d[Pf] = f;
            a = 0 !== (b.mode & 1);
            switch (c) {
              case "dialog":
                D("cancel", d);
                D("close", d);
                break;
              case "iframe":
              case "object":
              case "embed":
                D("load", d);
                break;
              case "video":
              case "audio":
                for (e = 0; e < lf.length; e++) D(lf[e], d);
                break;
              case "source":
                D("error", d);
                break;
              case "img":
              case "image":
              case "link":
                D(
                  "error",
                  d
                );
                D("load", d);
                break;
              case "details":
                D("toggle", d);
                break;
              case "input":
                Za(d, f);
                D("invalid", d);
                break;
              case "select":
                d._wrapperState = { wasMultiple: !!f.multiple };
                D("invalid", d);
                break;
              case "textarea":
                hb(d, f), D("invalid", d);
            }
            ub(c, f);
            e = null;
            for (var g in f) if (f.hasOwnProperty(g)) {
              var h = f[g];
              "children" === g ? "string" === typeof h ? d.textContent !== h && (true !== f.suppressHydrationWarning && Af(d.textContent, h, a), e = ["children", h]) : "number" === typeof h && d.textContent !== "" + h && (true !== f.suppressHydrationWarning && Af(
                d.textContent,
                h,
                a
              ), e = ["children", "" + h]) : ea.hasOwnProperty(g) && null != h && "onScroll" === g && D("scroll", d);
            }
            switch (c) {
              case "input":
                Va(d);
                db(d, f, true);
                break;
              case "textarea":
                Va(d);
                jb(d);
                break;
              case "select":
              case "option":
                break;
              default:
                "function" === typeof f.onClick && (d.onclick = Bf);
            }
            d = e;
            b.updateQueue = d;
            null !== d && (b.flags |= 4);
          } else {
            g = 9 === e.nodeType ? e : e.ownerDocument;
            "http://www.w3.org/1999/xhtml" === a && (a = kb(c));
            "http://www.w3.org/1999/xhtml" === a ? "script" === c ? (a = g.createElement("div"), a.innerHTML = "<script><\/script>", a = a.removeChild(a.firstChild)) : "string" === typeof d.is ? a = g.createElement(c, { is: d.is }) : (a = g.createElement(c), "select" === c && (g = a, d.multiple ? g.multiple = true : d.size && (g.size = d.size))) : a = g.createElementNS(a, c);
            a[Of] = b;
            a[Pf] = d;
            zj(a, b, false, false);
            b.stateNode = a;
            a: {
              g = vb(c, d);
              switch (c) {
                case "dialog":
                  D("cancel", a);
                  D("close", a);
                  e = d;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  D("load", a);
                  e = d;
                  break;
                case "video":
                case "audio":
                  for (e = 0; e < lf.length; e++) D(lf[e], a);
                  e = d;
                  break;
                case "source":
                  D("error", a);
                  e = d;
                  break;
                case "img":
                case "image":
                case "link":
                  D(
                    "error",
                    a
                  );
                  D("load", a);
                  e = d;
                  break;
                case "details":
                  D("toggle", a);
                  e = d;
                  break;
                case "input":
                  Za(a, d);
                  e = Ya(a, d);
                  D("invalid", a);
                  break;
                case "option":
                  e = d;
                  break;
                case "select":
                  a._wrapperState = { wasMultiple: !!d.multiple };
                  e = A({}, d, { value: void 0 });
                  D("invalid", a);
                  break;
                case "textarea":
                  hb(a, d);
                  e = gb(a, d);
                  D("invalid", a);
                  break;
                default:
                  e = d;
              }
              ub(c, e);
              h = e;
              for (f in h) if (h.hasOwnProperty(f)) {
                var k = h[f];
                "style" === f ? sb(a, k) : "dangerouslySetInnerHTML" === f ? (k = k ? k.__html : void 0, null != k && nb(a, k)) : "children" === f ? "string" === typeof k ? ("textarea" !== c || "" !== k) && ob(a, k) : "number" === typeof k && ob(a, "" + k) : "suppressContentEditableWarning" !== f && "suppressHydrationWarning" !== f && "autoFocus" !== f && (ea.hasOwnProperty(f) ? null != k && "onScroll" === f && D("scroll", a) : null != k && ta(a, f, k, g));
              }
              switch (c) {
                case "input":
                  Va(a);
                  db(a, d, false);
                  break;
                case "textarea":
                  Va(a);
                  jb(a);
                  break;
                case "option":
                  null != d.value && a.setAttribute("value", "" + Sa(d.value));
                  break;
                case "select":
                  a.multiple = !!d.multiple;
                  f = d.value;
                  null != f ? fb(a, !!d.multiple, f, false) : null != d.defaultValue && fb(
                    a,
                    !!d.multiple,
                    d.defaultValue,
                    true
                  );
                  break;
                default:
                  "function" === typeof e.onClick && (a.onclick = Bf);
              }
              switch (c) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  d = !!d.autoFocus;
                  break a;
                case "img":
                  d = true;
                  break a;
                default:
                  d = false;
              }
            }
            d && (b.flags |= 4);
          }
          null !== b.ref && (b.flags |= 512, b.flags |= 2097152);
        }
        S(b);
        return null;
      case 6:
        if (a && null != b.stateNode) Cj(a, b, a.memoizedProps, d);
        else {
          if ("string" !== typeof d && null === b.stateNode) throw Error(p(166));
          c = xh(wh.current);
          xh(uh.current);
          if (Gg(b)) {
            d = b.stateNode;
            c = b.memoizedProps;
            d[Of] = b;
            if (f = d.nodeValue !== c) {
              if (a = xg, null !== a) switch (a.tag) {
                case 3:
                  Af(d.nodeValue, c, 0 !== (a.mode & 1));
                  break;
                case 5:
                  true !== a.memoizedProps.suppressHydrationWarning && Af(d.nodeValue, c, 0 !== (a.mode & 1));
              }
            }
            f && (b.flags |= 4);
          } else d = (9 === c.nodeType ? c : c.ownerDocument).createTextNode(d), d[Of] = b, b.stateNode = d;
        }
        S(b);
        return null;
      case 13:
        E(L);
        d = b.memoizedState;
        if (null === a || null !== a.memoizedState && null !== a.memoizedState.dehydrated) {
          if (I && null !== yg && 0 !== (b.mode & 1) && 0 === (b.flags & 128)) Hg(), Ig(), b.flags |= 98560, f = false;
          else if (f = Gg(b), null !== d && null !== d.dehydrated) {
            if (null === a) {
              if (!f) throw Error(p(318));
              f = b.memoizedState;
              f = null !== f ? f.dehydrated : null;
              if (!f) throw Error(p(317));
              f[Of] = b;
            } else Ig(), 0 === (b.flags & 128) && (b.memoizedState = null), b.flags |= 4;
            S(b);
            f = false;
          } else null !== zg && (Fj(zg), zg = null), f = true;
          if (!f) return b.flags & 65536 ? b : null;
        }
        if (0 !== (b.flags & 128)) return b.lanes = c, b;
        d = null !== d;
        d !== (null !== a && null !== a.memoizedState) && d && (b.child.flags |= 8192, 0 !== (b.mode & 1) && (null === a || 0 !== (L.current & 1) ? 0 === T && (T = 3) : tj()));
        null !== b.updateQueue && (b.flags |= 4);
        S(b);
        return null;
      case 4:
        return zh(), Aj(a, b), null === a && sf(b.stateNode.containerInfo), S(b), null;
      case 10:
        return ah(b.type._context), S(b), null;
      case 17:
        return Zf(b.type) && $f(), S(b), null;
      case 19:
        E(L);
        f = b.memoizedState;
        if (null === f) return S(b), null;
        d = 0 !== (b.flags & 128);
        g = f.rendering;
        if (null === g) if (d) Dj(f, false);
        else {
          if (0 !== T || null !== a && 0 !== (a.flags & 128)) for (a = b.child; null !== a; ) {
            g = Ch(a);
            if (null !== g) {
              b.flags |= 128;
              Dj(f, false);
              d = g.updateQueue;
              null !== d && (b.updateQueue = d, b.flags |= 4);
              b.subtreeFlags = 0;
              d = c;
              for (c = b.child; null !== c; ) f = c, a = d, f.flags &= 14680066, g = f.alternate, null === g ? (f.childLanes = 0, f.lanes = a, f.child = null, f.subtreeFlags = 0, f.memoizedProps = null, f.memoizedState = null, f.updateQueue = null, f.dependencies = null, f.stateNode = null) : (f.childLanes = g.childLanes, f.lanes = g.lanes, f.child = g.child, f.subtreeFlags = 0, f.deletions = null, f.memoizedProps = g.memoizedProps, f.memoizedState = g.memoizedState, f.updateQueue = g.updateQueue, f.type = g.type, a = g.dependencies, f.dependencies = null === a ? null : { lanes: a.lanes, firstContext: a.firstContext }), c = c.sibling;
              G(L, L.current & 1 | 2);
              return b.child;
            }
            a = a.sibling;
          }
          null !== f.tail && B() > Gj && (b.flags |= 128, d = true, Dj(f, false), b.lanes = 4194304);
        }
        else {
          if (!d) if (a = Ch(g), null !== a) {
            if (b.flags |= 128, d = true, c = a.updateQueue, null !== c && (b.updateQueue = c, b.flags |= 4), Dj(f, true), null === f.tail && "hidden" === f.tailMode && !g.alternate && !I) return S(b), null;
          } else 2 * B() - f.renderingStartTime > Gj && 1073741824 !== c && (b.flags |= 128, d = true, Dj(f, false), b.lanes = 4194304);
          f.isBackwards ? (g.sibling = b.child, b.child = g) : (c = f.last, null !== c ? c.sibling = g : b.child = g, f.last = g);
        }
        if (null !== f.tail) return b = f.tail, f.rendering = b, f.tail = b.sibling, f.renderingStartTime = B(), b.sibling = null, c = L.current, G(L, d ? c & 1 | 2 : c & 1), b;
        S(b);
        return null;
      case 22:
      case 23:
        return Hj(), d = null !== b.memoizedState, null !== a && null !== a.memoizedState !== d && (b.flags |= 8192), d && 0 !== (b.mode & 1) ? 0 !== (fj & 1073741824) && (S(b), b.subtreeFlags & 6 && (b.flags |= 8192)) : S(b), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(p(156, b.tag));
  }
  function Ij(a, b) {
    wg(b);
    switch (b.tag) {
      case 1:
        return Zf(b.type) && $f(), a = b.flags, a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
      case 3:
        return zh(), E(Wf), E(H), Eh(), a = b.flags, 0 !== (a & 65536) && 0 === (a & 128) ? (b.flags = a & -65537 | 128, b) : null;
      case 5:
        return Bh(b), null;
      case 13:
        E(L);
        a = b.memoizedState;
        if (null !== a && null !== a.dehydrated) {
          if (null === b.alternate) throw Error(p(340));
          Ig();
        }
        a = b.flags;
        return a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
      case 19:
        return E(L), null;
      case 4:
        return zh(), null;
      case 10:
        return ah(b.type._context), null;
      case 22:
      case 23:
        return Hj(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Jj = false, U = false, Kj = "function" === typeof WeakSet ? WeakSet : Set, V = null;
  function Lj(a, b) {
    var c = a.ref;
    if (null !== c) if ("function" === typeof c) try {
      c(null);
    } catch (d) {
      W(a, b, d);
    }
    else c.current = null;
  }
  function Mj(a, b, c) {
    try {
      c();
    } catch (d) {
      W(a, b, d);
    }
  }
  var Nj = false;
  function Oj(a, b) {
    Cf = dd;
    a = Me();
    if (Ne(a)) {
      if ("selectionStart" in a) var c = { start: a.selectionStart, end: a.selectionEnd };
      else a: {
        c = (c = a.ownerDocument) && c.defaultView || window;
        var d = c.getSelection && c.getSelection();
        if (d && 0 !== d.rangeCount) {
          c = d.anchorNode;
          var e = d.anchorOffset, f = d.focusNode;
          d = d.focusOffset;
          try {
            c.nodeType, f.nodeType;
          } catch (F) {
            c = null;
            break a;
          }
          var g = 0, h = -1, k = -1, l = 0, m = 0, q = a, r = null;
          b: for (; ; ) {
            for (var y; ; ) {
              q !== c || 0 !== e && 3 !== q.nodeType || (h = g + e);
              q !== f || 0 !== d && 3 !== q.nodeType || (k = g + d);
              3 === q.nodeType && (g += q.nodeValue.length);
              if (null === (y = q.firstChild)) break;
              r = q;
              q = y;
            }
            for (; ; ) {
              if (q === a) break b;
              r === c && ++l === e && (h = g);
              r === f && ++m === d && (k = g);
              if (null !== (y = q.nextSibling)) break;
              q = r;
              r = q.parentNode;
            }
            q = y;
          }
          c = -1 === h || -1 === k ? null : { start: h, end: k };
        } else c = null;
      }
      c = c || { start: 0, end: 0 };
    } else c = null;
    Df = { focusedElem: a, selectionRange: c };
    dd = false;
    for (V = b; null !== V; ) if (b = V, a = b.child, 0 !== (b.subtreeFlags & 1028) && null !== a) a.return = b, V = a;
    else for (; null !== V; ) {
      b = V;
      try {
        var n = b.alternate;
        if (0 !== (b.flags & 1024)) switch (b.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (null !== n) {
              var t = n.memoizedProps, J = n.memoizedState, x = b.stateNode, w = x.getSnapshotBeforeUpdate(b.elementType === b.type ? t : Ci(b.type, t), J);
              x.__reactInternalSnapshotBeforeUpdate = w;
            }
            break;
          case 3:
            var u = b.stateNode.containerInfo;
            1 === u.nodeType ? u.textContent = "" : 9 === u.nodeType && u.documentElement && u.removeChild(u.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(p(163));
        }
      } catch (F) {
        W(b, b.return, F);
      }
      a = b.sibling;
      if (null !== a) {
        a.return = b.return;
        V = a;
        break;
      }
      V = b.return;
    }
    n = Nj;
    Nj = false;
    return n;
  }
  function Pj(a, b, c) {
    var d = b.updateQueue;
    d = null !== d ? d.lastEffect : null;
    if (null !== d) {
      var e = d = d.next;
      do {
        if ((e.tag & a) === a) {
          var f = e.destroy;
          e.destroy = void 0;
          void 0 !== f && Mj(b, c, f);
        }
        e = e.next;
      } while (e !== d);
    }
  }
  function Qj(a, b) {
    b = b.updateQueue;
    b = null !== b ? b.lastEffect : null;
    if (null !== b) {
      var c = b = b.next;
      do {
        if ((c.tag & a) === a) {
          var d = c.create;
          c.destroy = d();
        }
        c = c.next;
      } while (c !== b);
    }
  }
  function Rj(a) {
    var b = a.ref;
    if (null !== b) {
      var c = a.stateNode;
      switch (a.tag) {
        case 5:
          a = c;
          break;
        default:
          a = c;
      }
      "function" === typeof b ? b(a) : b.current = a;
    }
  }
  function Sj(a) {
    var b = a.alternate;
    null !== b && (a.alternate = null, Sj(b));
    a.child = null;
    a.deletions = null;
    a.sibling = null;
    5 === a.tag && (b = a.stateNode, null !== b && (delete b[Of], delete b[Pf], delete b[of], delete b[Qf], delete b[Rf]));
    a.stateNode = null;
    a.return = null;
    a.dependencies = null;
    a.memoizedProps = null;
    a.memoizedState = null;
    a.pendingProps = null;
    a.stateNode = null;
    a.updateQueue = null;
  }
  function Tj(a) {
    return 5 === a.tag || 3 === a.tag || 4 === a.tag;
  }
  function Uj(a) {
    a: for (; ; ) {
      for (; null === a.sibling; ) {
        if (null === a.return || Tj(a.return)) return null;
        a = a.return;
      }
      a.sibling.return = a.return;
      for (a = a.sibling; 5 !== a.tag && 6 !== a.tag && 18 !== a.tag; ) {
        if (a.flags & 2) continue a;
        if (null === a.child || 4 === a.tag) continue a;
        else a.child.return = a, a = a.child;
      }
      if (!(a.flags & 2)) return a.stateNode;
    }
  }
  function Vj(a, b, c) {
    var d = a.tag;
    if (5 === d || 6 === d) a = a.stateNode, b ? 8 === c.nodeType ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (8 === c.nodeType ? (b = c.parentNode, b.insertBefore(a, c)) : (b = c, b.appendChild(a)), c = c._reactRootContainer, null !== c && void 0 !== c || null !== b.onclick || (b.onclick = Bf));
    else if (4 !== d && (a = a.child, null !== a)) for (Vj(a, b, c), a = a.sibling; null !== a; ) Vj(a, b, c), a = a.sibling;
  }
  function Wj(a, b, c) {
    var d = a.tag;
    if (5 === d || 6 === d) a = a.stateNode, b ? c.insertBefore(a, b) : c.appendChild(a);
    else if (4 !== d && (a = a.child, null !== a)) for (Wj(a, b, c), a = a.sibling; null !== a; ) Wj(a, b, c), a = a.sibling;
  }
  var X2 = null, Xj = false;
  function Yj(a, b, c) {
    for (c = c.child; null !== c; ) Zj(a, b, c), c = c.sibling;
  }
  function Zj(a, b, c) {
    if (lc && "function" === typeof lc.onCommitFiberUnmount) try {
      lc.onCommitFiberUnmount(kc, c);
    } catch (h) {
    }
    switch (c.tag) {
      case 5:
        U || Lj(c, b);
      case 6:
        var d = X2, e = Xj;
        X2 = null;
        Yj(a, b, c);
        X2 = d;
        Xj = e;
        null !== X2 && (Xj ? (a = X2, c = c.stateNode, 8 === a.nodeType ? a.parentNode.removeChild(c) : a.removeChild(c)) : X2.removeChild(c.stateNode));
        break;
      case 18:
        null !== X2 && (Xj ? (a = X2, c = c.stateNode, 8 === a.nodeType ? Kf(a.parentNode, c) : 1 === a.nodeType && Kf(a, c), bd(a)) : Kf(X2, c.stateNode));
        break;
      case 4:
        d = X2;
        e = Xj;
        X2 = c.stateNode.containerInfo;
        Xj = true;
        Yj(a, b, c);
        X2 = d;
        Xj = e;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!U && (d = c.updateQueue, null !== d && (d = d.lastEffect, null !== d))) {
          e = d = d.next;
          do {
            var f = e, g = f.destroy;
            f = f.tag;
            void 0 !== g && (0 !== (f & 2) ? Mj(c, b, g) : 0 !== (f & 4) && Mj(c, b, g));
            e = e.next;
          } while (e !== d);
        }
        Yj(a, b, c);
        break;
      case 1:
        if (!U && (Lj(c, b), d = c.stateNode, "function" === typeof d.componentWillUnmount)) try {
          d.props = c.memoizedProps, d.state = c.memoizedState, d.componentWillUnmount();
        } catch (h) {
          W(c, b, h);
        }
        Yj(a, b, c);
        break;
      case 21:
        Yj(a, b, c);
        break;
      case 22:
        c.mode & 1 ? (U = (d = U) || null !== c.memoizedState, Yj(a, b, c), U = d) : Yj(a, b, c);
        break;
      default:
        Yj(a, b, c);
    }
  }
  function ak(a) {
    var b = a.updateQueue;
    if (null !== b) {
      a.updateQueue = null;
      var c = a.stateNode;
      null === c && (c = a.stateNode = new Kj());
      b.forEach(function(b2) {
        var d = bk.bind(null, a, b2);
        c.has(b2) || (c.add(b2), b2.then(d, d));
      });
    }
  }
  function ck(a, b) {
    var c = b.deletions;
    if (null !== c) for (var d = 0; d < c.length; d++) {
      var e = c[d];
      try {
        var f = a, g = b, h = g;
        a: for (; null !== h; ) {
          switch (h.tag) {
            case 5:
              X2 = h.stateNode;
              Xj = false;
              break a;
            case 3:
              X2 = h.stateNode.containerInfo;
              Xj = true;
              break a;
            case 4:
              X2 = h.stateNode.containerInfo;
              Xj = true;
              break a;
          }
          h = h.return;
        }
        if (null === X2) throw Error(p(160));
        Zj(f, g, e);
        X2 = null;
        Xj = false;
        var k = e.alternate;
        null !== k && (k.return = null);
        e.return = null;
      } catch (l) {
        W(e, b, l);
      }
    }
    if (b.subtreeFlags & 12854) for (b = b.child; null !== b; ) dk(b, a), b = b.sibling;
  }
  function dk(a, b) {
    var c = a.alternate, d = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ck(b, a);
        ek(a);
        if (d & 4) {
          try {
            Pj(3, a, a.return), Qj(3, a);
          } catch (t) {
            W(a, a.return, t);
          }
          try {
            Pj(5, a, a.return);
          } catch (t) {
            W(a, a.return, t);
          }
        }
        break;
      case 1:
        ck(b, a);
        ek(a);
        d & 512 && null !== c && Lj(c, c.return);
        break;
      case 5:
        ck(b, a);
        ek(a);
        d & 512 && null !== c && Lj(c, c.return);
        if (a.flags & 32) {
          var e = a.stateNode;
          try {
            ob(e, "");
          } catch (t) {
            W(a, a.return, t);
          }
        }
        if (d & 4 && (e = a.stateNode, null != e)) {
          var f = a.memoizedProps, g = null !== c ? c.memoizedProps : f, h = a.type, k = a.updateQueue;
          a.updateQueue = null;
          if (null !== k) try {
            "input" === h && "radio" === f.type && null != f.name && ab(e, f);
            vb(h, g);
            var l = vb(h, f);
            for (g = 0; g < k.length; g += 2) {
              var m = k[g], q = k[g + 1];
              "style" === m ? sb(e, q) : "dangerouslySetInnerHTML" === m ? nb(e, q) : "children" === m ? ob(e, q) : ta(e, m, q, l);
            }
            switch (h) {
              case "input":
                bb(e, f);
                break;
              case "textarea":
                ib(e, f);
                break;
              case "select":
                var r = e._wrapperState.wasMultiple;
                e._wrapperState.wasMultiple = !!f.multiple;
                var y = f.value;
                null != y ? fb(e, !!f.multiple, y, false) : r !== !!f.multiple && (null != f.defaultValue ? fb(
                  e,
                  !!f.multiple,
                  f.defaultValue,
                  true
                ) : fb(e, !!f.multiple, f.multiple ? [] : "", false));
            }
            e[Pf] = f;
          } catch (t) {
            W(a, a.return, t);
          }
        }
        break;
      case 6:
        ck(b, a);
        ek(a);
        if (d & 4) {
          if (null === a.stateNode) throw Error(p(162));
          e = a.stateNode;
          f = a.memoizedProps;
          try {
            e.nodeValue = f;
          } catch (t) {
            W(a, a.return, t);
          }
        }
        break;
      case 3:
        ck(b, a);
        ek(a);
        if (d & 4 && null !== c && c.memoizedState.isDehydrated) try {
          bd(b.containerInfo);
        } catch (t) {
          W(a, a.return, t);
        }
        break;
      case 4:
        ck(b, a);
        ek(a);
        break;
      case 13:
        ck(b, a);
        ek(a);
        e = a.child;
        e.flags & 8192 && (f = null !== e.memoizedState, e.stateNode.isHidden = f, !f || null !== e.alternate && null !== e.alternate.memoizedState || (fk = B()));
        d & 4 && ak(a);
        break;
      case 22:
        m = null !== c && null !== c.memoizedState;
        a.mode & 1 ? (U = (l = U) || m, ck(b, a), U = l) : ck(b, a);
        ek(a);
        if (d & 8192) {
          l = null !== a.memoizedState;
          if ((a.stateNode.isHidden = l) && !m && 0 !== (a.mode & 1)) for (V = a, m = a.child; null !== m; ) {
            for (q = V = m; null !== V; ) {
              r = V;
              y = r.child;
              switch (r.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Pj(4, r, r.return);
                  break;
                case 1:
                  Lj(r, r.return);
                  var n = r.stateNode;
                  if ("function" === typeof n.componentWillUnmount) {
                    d = r;
                    c = r.return;
                    try {
                      b = d, n.props = b.memoizedProps, n.state = b.memoizedState, n.componentWillUnmount();
                    } catch (t) {
                      W(d, c, t);
                    }
                  }
                  break;
                case 5:
                  Lj(r, r.return);
                  break;
                case 22:
                  if (null !== r.memoizedState) {
                    gk(q);
                    continue;
                  }
              }
              null !== y ? (y.return = r, V = y) : gk(q);
            }
            m = m.sibling;
          }
          a: for (m = null, q = a; ; ) {
            if (5 === q.tag) {
              if (null === m) {
                m = q;
                try {
                  e = q.stateNode, l ? (f = e.style, "function" === typeof f.setProperty ? f.setProperty("display", "none", "important") : f.display = "none") : (h = q.stateNode, k = q.memoizedProps.style, g = void 0 !== k && null !== k && k.hasOwnProperty("display") ? k.display : null, h.style.display = rb("display", g));
                } catch (t) {
                  W(a, a.return, t);
                }
              }
            } else if (6 === q.tag) {
              if (null === m) try {
                q.stateNode.nodeValue = l ? "" : q.memoizedProps;
              } catch (t) {
                W(a, a.return, t);
              }
            } else if ((22 !== q.tag && 23 !== q.tag || null === q.memoizedState || q === a) && null !== q.child) {
              q.child.return = q;
              q = q.child;
              continue;
            }
            if (q === a) break a;
            for (; null === q.sibling; ) {
              if (null === q.return || q.return === a) break a;
              m === q && (m = null);
              q = q.return;
            }
            m === q && (m = null);
            q.sibling.return = q.return;
            q = q.sibling;
          }
        }
        break;
      case 19:
        ck(b, a);
        ek(a);
        d & 4 && ak(a);
        break;
      case 21:
        break;
      default:
        ck(
          b,
          a
        ), ek(a);
    }
  }
  function ek(a) {
    var b = a.flags;
    if (b & 2) {
      try {
        a: {
          for (var c = a.return; null !== c; ) {
            if (Tj(c)) {
              var d = c;
              break a;
            }
            c = c.return;
          }
          throw Error(p(160));
        }
        switch (d.tag) {
          case 5:
            var e = d.stateNode;
            d.flags & 32 && (ob(e, ""), d.flags &= -33);
            var f = Uj(a);
            Wj(a, f, e);
            break;
          case 3:
          case 4:
            var g = d.stateNode.containerInfo, h = Uj(a);
            Vj(a, h, g);
            break;
          default:
            throw Error(p(161));
        }
      } catch (k) {
        W(a, a.return, k);
      }
      a.flags &= -3;
    }
    b & 4096 && (a.flags &= -4097);
  }
  function hk(a, b, c) {
    V = a;
    ik(a);
  }
  function ik(a, b, c) {
    for (var d = 0 !== (a.mode & 1); null !== V; ) {
      var e = V, f = e.child;
      if (22 === e.tag && d) {
        var g = null !== e.memoizedState || Jj;
        if (!g) {
          var h = e.alternate, k = null !== h && null !== h.memoizedState || U;
          h = Jj;
          var l = U;
          Jj = g;
          if ((U = k) && !l) for (V = e; null !== V; ) g = V, k = g.child, 22 === g.tag && null !== g.memoizedState ? jk(e) : null !== k ? (k.return = g, V = k) : jk(e);
          for (; null !== f; ) V = f, ik(f), f = f.sibling;
          V = e;
          Jj = h;
          U = l;
        }
        kk(a);
      } else 0 !== (e.subtreeFlags & 8772) && null !== f ? (f.return = e, V = f) : kk(a);
    }
  }
  function kk(a) {
    for (; null !== V; ) {
      var b = V;
      if (0 !== (b.flags & 8772)) {
        var c = b.alternate;
        try {
          if (0 !== (b.flags & 8772)) switch (b.tag) {
            case 0:
            case 11:
            case 15:
              U || Qj(5, b);
              break;
            case 1:
              var d = b.stateNode;
              if (b.flags & 4 && !U) if (null === c) d.componentDidMount();
              else {
                var e = b.elementType === b.type ? c.memoizedProps : Ci(b.type, c.memoizedProps);
                d.componentDidUpdate(e, c.memoizedState, d.__reactInternalSnapshotBeforeUpdate);
              }
              var f = b.updateQueue;
              null !== f && sh(b, f, d);
              break;
            case 3:
              var g = b.updateQueue;
              if (null !== g) {
                c = null;
                if (null !== b.child) switch (b.child.tag) {
                  case 5:
                    c = b.child.stateNode;
                    break;
                  case 1:
                    c = b.child.stateNode;
                }
                sh(b, g, c);
              }
              break;
            case 5:
              var h = b.stateNode;
              if (null === c && b.flags & 4) {
                c = h;
                var k = b.memoizedProps;
                switch (b.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    k.autoFocus && c.focus();
                    break;
                  case "img":
                    k.src && (c.src = k.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (null === b.memoizedState) {
                var l = b.alternate;
                if (null !== l) {
                  var m = l.memoizedState;
                  if (null !== m) {
                    var q = m.dehydrated;
                    null !== q && bd(q);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(p(163));
          }
          U || b.flags & 512 && Rj(b);
        } catch (r) {
          W(b, b.return, r);
        }
      }
      if (b === a) {
        V = null;
        break;
      }
      c = b.sibling;
      if (null !== c) {
        c.return = b.return;
        V = c;
        break;
      }
      V = b.return;
    }
  }
  function gk(a) {
    for (; null !== V; ) {
      var b = V;
      if (b === a) {
        V = null;
        break;
      }
      var c = b.sibling;
      if (null !== c) {
        c.return = b.return;
        V = c;
        break;
      }
      V = b.return;
    }
  }
  function jk(a) {
    for (; null !== V; ) {
      var b = V;
      try {
        switch (b.tag) {
          case 0:
          case 11:
          case 15:
            var c = b.return;
            try {
              Qj(4, b);
            } catch (k) {
              W(b, c, k);
            }
            break;
          case 1:
            var d = b.stateNode;
            if ("function" === typeof d.componentDidMount) {
              var e = b.return;
              try {
                d.componentDidMount();
              } catch (k) {
                W(b, e, k);
              }
            }
            var f = b.return;
            try {
              Rj(b);
            } catch (k) {
              W(b, f, k);
            }
            break;
          case 5:
            var g = b.return;
            try {
              Rj(b);
            } catch (k) {
              W(b, g, k);
            }
        }
      } catch (k) {
        W(b, b.return, k);
      }
      if (b === a) {
        V = null;
        break;
      }
      var h = b.sibling;
      if (null !== h) {
        h.return = b.return;
        V = h;
        break;
      }
      V = b.return;
    }
  }
  var lk = Math.ceil, mk = ua.ReactCurrentDispatcher, nk = ua.ReactCurrentOwner, ok = ua.ReactCurrentBatchConfig, K = 0, Q = null, Y = null, Z = 0, fj = 0, ej = Uf(0), T = 0, pk = null, rh = 0, qk = 0, rk = 0, sk = null, tk = null, fk = 0, Gj = Infinity, uk = null, Oi = false, Pi = null, Ri = null, vk = false, wk = null, xk = 0, yk = 0, zk = null, Ak = -1, Bk = 0;
  function R() {
    return 0 !== (K & 6) ? B() : -1 !== Ak ? Ak : Ak = B();
  }
  function yi(a) {
    if (0 === (a.mode & 1)) return 1;
    if (0 !== (K & 2) && 0 !== Z) return Z & -Z;
    if (null !== Kg.transition) return 0 === Bk && (Bk = yc()), Bk;
    a = C;
    if (0 !== a) return a;
    a = window.event;
    a = void 0 === a ? 16 : jd(a.type);
    return a;
  }
  function gi(a, b, c, d) {
    if (50 < yk) throw yk = 0, zk = null, Error(p(185));
    Ac(a, c, d);
    if (0 === (K & 2) || a !== Q) a === Q && (0 === (K & 2) && (qk |= c), 4 === T && Ck(a, Z)), Dk(a, d), 1 === c && 0 === K && 0 === (b.mode & 1) && (Gj = B() + 500, fg && jg());
  }
  function Dk(a, b) {
    var c = a.callbackNode;
    wc(a, b);
    var d = uc(a, a === Q ? Z : 0);
    if (0 === d) null !== c && bc(c), a.callbackNode = null, a.callbackPriority = 0;
    else if (b = d & -d, a.callbackPriority !== b) {
      null != c && bc(c);
      if (1 === b) 0 === a.tag ? ig(Ek.bind(null, a)) : hg(Ek.bind(null, a)), Jf(function() {
        0 === (K & 6) && jg();
      }), c = null;
      else {
        switch (Dc(d)) {
          case 1:
            c = fc;
            break;
          case 4:
            c = gc;
            break;
          case 16:
            c = hc;
            break;
          case 536870912:
            c = jc;
            break;
          default:
            c = hc;
        }
        c = Fk(c, Gk.bind(null, a));
      }
      a.callbackPriority = b;
      a.callbackNode = c;
    }
  }
  function Gk(a, b) {
    Ak = -1;
    Bk = 0;
    if (0 !== (K & 6)) throw Error(p(327));
    var c = a.callbackNode;
    if (Hk() && a.callbackNode !== c) return null;
    var d = uc(a, a === Q ? Z : 0);
    if (0 === d) return null;
    if (0 !== (d & 30) || 0 !== (d & a.expiredLanes) || b) b = Ik(a, d);
    else {
      b = d;
      var e = K;
      K |= 2;
      var f = Jk();
      if (Q !== a || Z !== b) uk = null, Gj = B() + 500, Kk(a, b);
      do
        try {
          Lk();
          break;
        } catch (h) {
          Mk(a, h);
        }
      while (1);
      $g();
      mk.current = f;
      K = e;
      null !== Y ? b = 0 : (Q = null, Z = 0, b = T);
    }
    if (0 !== b) {
      2 === b && (e = xc(a), 0 !== e && (d = e, b = Nk(a, e)));
      if (1 === b) throw c = pk, Kk(a, 0), Ck(a, d), Dk(a, B()), c;
      if (6 === b) Ck(a, d);
      else {
        e = a.current.alternate;
        if (0 === (d & 30) && !Ok(e) && (b = Ik(a, d), 2 === b && (f = xc(a), 0 !== f && (d = f, b = Nk(a, f))), 1 === b)) throw c = pk, Kk(a, 0), Ck(a, d), Dk(a, B()), c;
        a.finishedWork = e;
        a.finishedLanes = d;
        switch (b) {
          case 0:
          case 1:
            throw Error(p(345));
          case 2:
            Pk(a, tk, uk);
            break;
          case 3:
            Ck(a, d);
            if ((d & 130023424) === d && (b = fk + 500 - B(), 10 < b)) {
              if (0 !== uc(a, 0)) break;
              e = a.suspendedLanes;
              if ((e & d) !== d) {
                R();
                a.pingedLanes |= a.suspendedLanes & e;
                break;
              }
              a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), b);
              break;
            }
            Pk(a, tk, uk);
            break;
          case 4:
            Ck(a, d);
            if ((d & 4194240) === d) break;
            b = a.eventTimes;
            for (e = -1; 0 < d; ) {
              var g = 31 - oc(d);
              f = 1 << g;
              g = b[g];
              g > e && (e = g);
              d &= ~f;
            }
            d = e;
            d = B() - d;
            d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3e3 > d ? 3e3 : 4320 > d ? 4320 : 1960 * lk(d / 1960)) - d;
            if (10 < d) {
              a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), d);
              break;
            }
            Pk(a, tk, uk);
            break;
          case 5:
            Pk(a, tk, uk);
            break;
          default:
            throw Error(p(329));
        }
      }
    }
    Dk(a, B());
    return a.callbackNode === c ? Gk.bind(null, a) : null;
  }
  function Nk(a, b) {
    var c = sk;
    a.current.memoizedState.isDehydrated && (Kk(a, b).flags |= 256);
    a = Ik(a, b);
    2 !== a && (b = tk, tk = c, null !== b && Fj(b));
    return a;
  }
  function Fj(a) {
    null === tk ? tk = a : tk.push.apply(tk, a);
  }
  function Ok(a) {
    for (var b = a; ; ) {
      if (b.flags & 16384) {
        var c = b.updateQueue;
        if (null !== c && (c = c.stores, null !== c)) for (var d = 0; d < c.length; d++) {
          var e = c[d], f = e.getSnapshot;
          e = e.value;
          try {
            if (!He(f(), e)) return false;
          } catch (g) {
            return false;
          }
        }
      }
      c = b.child;
      if (b.subtreeFlags & 16384 && null !== c) c.return = b, b = c;
      else {
        if (b === a) break;
        for (; null === b.sibling; ) {
          if (null === b.return || b.return === a) return true;
          b = b.return;
        }
        b.sibling.return = b.return;
        b = b.sibling;
      }
    }
    return true;
  }
  function Ck(a, b) {
    b &= ~rk;
    b &= ~qk;
    a.suspendedLanes |= b;
    a.pingedLanes &= ~b;
    for (a = a.expirationTimes; 0 < b; ) {
      var c = 31 - oc(b), d = 1 << c;
      a[c] = -1;
      b &= ~d;
    }
  }
  function Ek(a) {
    if (0 !== (K & 6)) throw Error(p(327));
    Hk();
    var b = uc(a, 0);
    if (0 === (b & 1)) return Dk(a, B()), null;
    var c = Ik(a, b);
    if (0 !== a.tag && 2 === c) {
      var d = xc(a);
      0 !== d && (b = d, c = Nk(a, d));
    }
    if (1 === c) throw c = pk, Kk(a, 0), Ck(a, b), Dk(a, B()), c;
    if (6 === c) throw Error(p(345));
    a.finishedWork = a.current.alternate;
    a.finishedLanes = b;
    Pk(a, tk, uk);
    Dk(a, B());
    return null;
  }
  function Qk(a, b) {
    var c = K;
    K |= 1;
    try {
      return a(b);
    } finally {
      K = c, 0 === K && (Gj = B() + 500, fg && jg());
    }
  }
  function Rk(a) {
    null !== wk && 0 === wk.tag && 0 === (K & 6) && Hk();
    var b = K;
    K |= 1;
    var c = ok.transition, d = C;
    try {
      if (ok.transition = null, C = 1, a) return a();
    } finally {
      C = d, ok.transition = c, K = b, 0 === (K & 6) && jg();
    }
  }
  function Hj() {
    fj = ej.current;
    E(ej);
  }
  function Kk(a, b) {
    a.finishedWork = null;
    a.finishedLanes = 0;
    var c = a.timeoutHandle;
    -1 !== c && (a.timeoutHandle = -1, Gf(c));
    if (null !== Y) for (c = Y.return; null !== c; ) {
      var d = c;
      wg(d);
      switch (d.tag) {
        case 1:
          d = d.type.childContextTypes;
          null !== d && void 0 !== d && $f();
          break;
        case 3:
          zh();
          E(Wf);
          E(H);
          Eh();
          break;
        case 5:
          Bh(d);
          break;
        case 4:
          zh();
          break;
        case 13:
          E(L);
          break;
        case 19:
          E(L);
          break;
        case 10:
          ah(d.type._context);
          break;
        case 22:
        case 23:
          Hj();
      }
      c = c.return;
    }
    Q = a;
    Y = a = Pg(a.current, null);
    Z = fj = b;
    T = 0;
    pk = null;
    rk = qk = rh = 0;
    tk = sk = null;
    if (null !== fh) {
      for (b = 0; b < fh.length; b++) if (c = fh[b], d = c.interleaved, null !== d) {
        c.interleaved = null;
        var e = d.next, f = c.pending;
        if (null !== f) {
          var g = f.next;
          f.next = e;
          d.next = g;
        }
        c.pending = d;
      }
      fh = null;
    }
    return a;
  }
  function Mk(a, b) {
    do {
      var c = Y;
      try {
        $g();
        Fh.current = Rh;
        if (Ih) {
          for (var d = M.memoizedState; null !== d; ) {
            var e = d.queue;
            null !== e && (e.pending = null);
            d = d.next;
          }
          Ih = false;
        }
        Hh = 0;
        O = N = M = null;
        Jh = false;
        Kh = 0;
        nk.current = null;
        if (null === c || null === c.return) {
          T = 1;
          pk = b;
          Y = null;
          break;
        }
        a: {
          var f = a, g = c.return, h = c, k = b;
          b = Z;
          h.flags |= 32768;
          if (null !== k && "object" === typeof k && "function" === typeof k.then) {
            var l = k, m = h, q = m.tag;
            if (0 === (m.mode & 1) && (0 === q || 11 === q || 15 === q)) {
              var r = m.alternate;
              r ? (m.updateQueue = r.updateQueue, m.memoizedState = r.memoizedState, m.lanes = r.lanes) : (m.updateQueue = null, m.memoizedState = null);
            }
            var y = Ui(g);
            if (null !== y) {
              y.flags &= -257;
              Vi(y, g, h, f, b);
              y.mode & 1 && Si(f, l, b);
              b = y;
              k = l;
              var n = b.updateQueue;
              if (null === n) {
                var t = /* @__PURE__ */ new Set();
                t.add(k);
                b.updateQueue = t;
              } else n.add(k);
              break a;
            } else {
              if (0 === (b & 1)) {
                Si(f, l, b);
                tj();
                break a;
              }
              k = Error(p(426));
            }
          } else if (I && h.mode & 1) {
            var J = Ui(g);
            if (null !== J) {
              0 === (J.flags & 65536) && (J.flags |= 256);
              Vi(J, g, h, f, b);
              Jg(Ji(k, h));
              break a;
            }
          }
          f = k = Ji(k, h);
          4 !== T && (T = 2);
          null === sk ? sk = [f] : sk.push(f);
          f = g;
          do {
            switch (f.tag) {
              case 3:
                f.flags |= 65536;
                b &= -b;
                f.lanes |= b;
                var x = Ni(f, k, b);
                ph(f, x);
                break a;
              case 1:
                h = k;
                var w = f.type, u = f.stateNode;
                if (0 === (f.flags & 128) && ("function" === typeof w.getDerivedStateFromError || null !== u && "function" === typeof u.componentDidCatch && (null === Ri || !Ri.has(u)))) {
                  f.flags |= 65536;
                  b &= -b;
                  f.lanes |= b;
                  var F = Qi(f, h, b);
                  ph(f, F);
                  break a;
                }
            }
            f = f.return;
          } while (null !== f);
        }
        Sk(c);
      } catch (na) {
        b = na;
        Y === c && null !== c && (Y = c = c.return);
        continue;
      }
      break;
    } while (1);
  }
  function Jk() {
    var a = mk.current;
    mk.current = Rh;
    return null === a ? Rh : a;
  }
  function tj() {
    if (0 === T || 3 === T || 2 === T) T = 4;
    null === Q || 0 === (rh & 268435455) && 0 === (qk & 268435455) || Ck(Q, Z);
  }
  function Ik(a, b) {
    var c = K;
    K |= 2;
    var d = Jk();
    if (Q !== a || Z !== b) uk = null, Kk(a, b);
    do
      try {
        Tk();
        break;
      } catch (e) {
        Mk(a, e);
      }
    while (1);
    $g();
    K = c;
    mk.current = d;
    if (null !== Y) throw Error(p(261));
    Q = null;
    Z = 0;
    return T;
  }
  function Tk() {
    for (; null !== Y; ) Uk(Y);
  }
  function Lk() {
    for (; null !== Y && !cc(); ) Uk(Y);
  }
  function Uk(a) {
    var b = Vk(a.alternate, a, fj);
    a.memoizedProps = a.pendingProps;
    null === b ? Sk(a) : Y = b;
    nk.current = null;
  }
  function Sk(a) {
    var b = a;
    do {
      var c = b.alternate;
      a = b.return;
      if (0 === (b.flags & 32768)) {
        if (c = Ej(c, b, fj), null !== c) {
          Y = c;
          return;
        }
      } else {
        c = Ij(c, b);
        if (null !== c) {
          c.flags &= 32767;
          Y = c;
          return;
        }
        if (null !== a) a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null;
        else {
          T = 6;
          Y = null;
          return;
        }
      }
      b = b.sibling;
      if (null !== b) {
        Y = b;
        return;
      }
      Y = b = a;
    } while (null !== b);
    0 === T && (T = 5);
  }
  function Pk(a, b, c) {
    var d = C, e = ok.transition;
    try {
      ok.transition = null, C = 1, Wk(a, b, c, d);
    } finally {
      ok.transition = e, C = d;
    }
    return null;
  }
  function Wk(a, b, c, d) {
    do
      Hk();
    while (null !== wk);
    if (0 !== (K & 6)) throw Error(p(327));
    c = a.finishedWork;
    var e = a.finishedLanes;
    if (null === c) return null;
    a.finishedWork = null;
    a.finishedLanes = 0;
    if (c === a.current) throw Error(p(177));
    a.callbackNode = null;
    a.callbackPriority = 0;
    var f = c.lanes | c.childLanes;
    Bc(a, f);
    a === Q && (Y = Q = null, Z = 0);
    0 === (c.subtreeFlags & 2064) && 0 === (c.flags & 2064) || vk || (vk = true, Fk(hc, function() {
      Hk();
      return null;
    }));
    f = 0 !== (c.flags & 15990);
    if (0 !== (c.subtreeFlags & 15990) || f) {
      f = ok.transition;
      ok.transition = null;
      var g = C;
      C = 1;
      var h = K;
      K |= 4;
      nk.current = null;
      Oj(a, c);
      dk(c, a);
      Oe(Df);
      dd = !!Cf;
      Df = Cf = null;
      a.current = c;
      hk(c);
      dc();
      K = h;
      C = g;
      ok.transition = f;
    } else a.current = c;
    vk && (vk = false, wk = a, xk = e);
    f = a.pendingLanes;
    0 === f && (Ri = null);
    mc(c.stateNode);
    Dk(a, B());
    if (null !== b) for (d = a.onRecoverableError, c = 0; c < b.length; c++) e = b[c], d(e.value, { componentStack: e.stack, digest: e.digest });
    if (Oi) throw Oi = false, a = Pi, Pi = null, a;
    0 !== (xk & 1) && 0 !== a.tag && Hk();
    f = a.pendingLanes;
    0 !== (f & 1) ? a === zk ? yk++ : (yk = 0, zk = a) : yk = 0;
    jg();
    return null;
  }
  function Hk() {
    if (null !== wk) {
      var a = Dc(xk), b = ok.transition, c = C;
      try {
        ok.transition = null;
        C = 16 > a ? 16 : a;
        if (null === wk) var d = false;
        else {
          a = wk;
          wk = null;
          xk = 0;
          if (0 !== (K & 6)) throw Error(p(331));
          var e = K;
          K |= 4;
          for (V = a.current; null !== V; ) {
            var f = V, g = f.child;
            if (0 !== (V.flags & 16)) {
              var h = f.deletions;
              if (null !== h) {
                for (var k = 0; k < h.length; k++) {
                  var l = h[k];
                  for (V = l; null !== V; ) {
                    var m = V;
                    switch (m.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Pj(8, m, f);
                    }
                    var q = m.child;
                    if (null !== q) q.return = m, V = q;
                    else for (; null !== V; ) {
                      m = V;
                      var r = m.sibling, y = m.return;
                      Sj(m);
                      if (m === l) {
                        V = null;
                        break;
                      }
                      if (null !== r) {
                        r.return = y;
                        V = r;
                        break;
                      }
                      V = y;
                    }
                  }
                }
                var n = f.alternate;
                if (null !== n) {
                  var t = n.child;
                  if (null !== t) {
                    n.child = null;
                    do {
                      var J = t.sibling;
                      t.sibling = null;
                      t = J;
                    } while (null !== t);
                  }
                }
                V = f;
              }
            }
            if (0 !== (f.subtreeFlags & 2064) && null !== g) g.return = f, V = g;
            else b: for (; null !== V; ) {
              f = V;
              if (0 !== (f.flags & 2048)) switch (f.tag) {
                case 0:
                case 11:
                case 15:
                  Pj(9, f, f.return);
              }
              var x = f.sibling;
              if (null !== x) {
                x.return = f.return;
                V = x;
                break b;
              }
              V = f.return;
            }
          }
          var w = a.current;
          for (V = w; null !== V; ) {
            g = V;
            var u = g.child;
            if (0 !== (g.subtreeFlags & 2064) && null !== u) u.return = g, V = u;
            else b: for (g = w; null !== V; ) {
              h = V;
              if (0 !== (h.flags & 2048)) try {
                switch (h.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Qj(9, h);
                }
              } catch (na) {
                W(h, h.return, na);
              }
              if (h === g) {
                V = null;
                break b;
              }
              var F = h.sibling;
              if (null !== F) {
                F.return = h.return;
                V = F;
                break b;
              }
              V = h.return;
            }
          }
          K = e;
          jg();
          if (lc && "function" === typeof lc.onPostCommitFiberRoot) try {
            lc.onPostCommitFiberRoot(kc, a);
          } catch (na) {
          }
          d = true;
        }
        return d;
      } finally {
        C = c, ok.transition = b;
      }
    }
    return false;
  }
  function Xk(a, b, c) {
    b = Ji(c, b);
    b = Ni(a, b, 1);
    a = nh(a, b, 1);
    b = R();
    null !== a && (Ac(a, 1, b), Dk(a, b));
  }
  function W(a, b, c) {
    if (3 === a.tag) Xk(a, a, c);
    else for (; null !== b; ) {
      if (3 === b.tag) {
        Xk(b, a, c);
        break;
      } else if (1 === b.tag) {
        var d = b.stateNode;
        if ("function" === typeof b.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === Ri || !Ri.has(d))) {
          a = Ji(c, a);
          a = Qi(b, a, 1);
          b = nh(b, a, 1);
          a = R();
          null !== b && (Ac(b, 1, a), Dk(b, a));
          break;
        }
      }
      b = b.return;
    }
  }
  function Ti(a, b, c) {
    var d = a.pingCache;
    null !== d && d.delete(b);
    b = R();
    a.pingedLanes |= a.suspendedLanes & c;
    Q === a && (Z & c) === c && (4 === T || 3 === T && (Z & 130023424) === Z && 500 > B() - fk ? Kk(a, 0) : rk |= c);
    Dk(a, b);
  }
  function Yk(a, b) {
    0 === b && (0 === (a.mode & 1) ? b = 1 : (b = sc, sc <<= 1, 0 === (sc & 130023424) && (sc = 4194304)));
    var c = R();
    a = ih(a, b);
    null !== a && (Ac(a, b, c), Dk(a, c));
  }
  function uj(a) {
    var b = a.memoizedState, c = 0;
    null !== b && (c = b.retryLane);
    Yk(a, c);
  }
  function bk(a, b) {
    var c = 0;
    switch (a.tag) {
      case 13:
        var d = a.stateNode;
        var e = a.memoizedState;
        null !== e && (c = e.retryLane);
        break;
      case 19:
        d = a.stateNode;
        break;
      default:
        throw Error(p(314));
    }
    null !== d && d.delete(b);
    Yk(a, c);
  }
  var Vk;
  Vk = function(a, b, c) {
    if (null !== a) if (a.memoizedProps !== b.pendingProps || Wf.current) dh = true;
    else {
      if (0 === (a.lanes & c) && 0 === (b.flags & 128)) return dh = false, yj(a, b, c);
      dh = 0 !== (a.flags & 131072) ? true : false;
    }
    else dh = false, I && 0 !== (b.flags & 1048576) && ug(b, ng, b.index);
    b.lanes = 0;
    switch (b.tag) {
      case 2:
        var d = b.type;
        ij(a, b);
        a = b.pendingProps;
        var e = Yf(b, H.current);
        ch(b, c);
        e = Nh(null, b, d, a, e, c);
        var f = Sh();
        b.flags |= 1;
        "object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof ? (b.tag = 1, b.memoizedState = null, b.updateQueue = null, Zf(d) ? (f = true, cg(b)) : f = false, b.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null, kh(b), e.updater = Ei, b.stateNode = e, e._reactInternals = b, Ii(b, d, a, c), b = jj(null, b, d, true, f, c)) : (b.tag = 0, I && f && vg(b), Xi(null, b, e, c), b = b.child);
        return b;
      case 16:
        d = b.elementType;
        a: {
          ij(a, b);
          a = b.pendingProps;
          e = d._init;
          d = e(d._payload);
          b.type = d;
          e = b.tag = Zk(d);
          a = Ci(d, a);
          switch (e) {
            case 0:
              b = cj(null, b, d, a, c);
              break a;
            case 1:
              b = hj(null, b, d, a, c);
              break a;
            case 11:
              b = Yi(null, b, d, a, c);
              break a;
            case 14:
              b = $i(null, b, d, Ci(d.type, a), c);
              break a;
          }
          throw Error(p(
            306,
            d,
            ""
          ));
        }
        return b;
      case 0:
        return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), cj(a, b, d, e, c);
      case 1:
        return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), hj(a, b, d, e, c);
      case 3:
        a: {
          kj(b);
          if (null === a) throw Error(p(387));
          d = b.pendingProps;
          f = b.memoizedState;
          e = f.element;
          lh(a, b);
          qh(b, d, null, c);
          var g = b.memoizedState;
          d = g.element;
          if (f.isDehydrated) if (f = { element: d, isDehydrated: false, cache: g.cache, pendingSuspenseBoundaries: g.pendingSuspenseBoundaries, transitions: g.transitions }, b.updateQueue.baseState = f, b.memoizedState = f, b.flags & 256) {
            e = Ji(Error(p(423)), b);
            b = lj(a, b, d, c, e);
            break a;
          } else if (d !== e) {
            e = Ji(Error(p(424)), b);
            b = lj(a, b, d, c, e);
            break a;
          } else for (yg = Lf(b.stateNode.containerInfo.firstChild), xg = b, I = true, zg = null, c = Vg(b, null, d, c), b.child = c; c; ) c.flags = c.flags & -3 | 4096, c = c.sibling;
          else {
            Ig();
            if (d === e) {
              b = Zi(a, b, c);
              break a;
            }
            Xi(a, b, d, c);
          }
          b = b.child;
        }
        return b;
      case 5:
        return Ah(b), null === a && Eg(b), d = b.type, e = b.pendingProps, f = null !== a ? a.memoizedProps : null, g = e.children, Ef(d, e) ? g = null : null !== f && Ef(d, f) && (b.flags |= 32), gj(a, b), Xi(a, b, g, c), b.child;
      case 6:
        return null === a && Eg(b), null;
      case 13:
        return oj(a, b, c);
      case 4:
        return yh(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = Ug(b, null, d, c) : Xi(a, b, d, c), b.child;
      case 11:
        return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), Yi(a, b, d, e, c);
      case 7:
        return Xi(a, b, b.pendingProps, c), b.child;
      case 8:
        return Xi(a, b, b.pendingProps.children, c), b.child;
      case 12:
        return Xi(a, b, b.pendingProps.children, c), b.child;
      case 10:
        a: {
          d = b.type._context;
          e = b.pendingProps;
          f = b.memoizedProps;
          g = e.value;
          G(Wg, d._currentValue);
          d._currentValue = g;
          if (null !== f) if (He(f.value, g)) {
            if (f.children === e.children && !Wf.current) {
              b = Zi(a, b, c);
              break a;
            }
          } else for (f = b.child, null !== f && (f.return = b); null !== f; ) {
            var h = f.dependencies;
            if (null !== h) {
              g = f.child;
              for (var k = h.firstContext; null !== k; ) {
                if (k.context === d) {
                  if (1 === f.tag) {
                    k = mh(-1, c & -c);
                    k.tag = 2;
                    var l = f.updateQueue;
                    if (null !== l) {
                      l = l.shared;
                      var m = l.pending;
                      null === m ? k.next = k : (k.next = m.next, m.next = k);
                      l.pending = k;
                    }
                  }
                  f.lanes |= c;
                  k = f.alternate;
                  null !== k && (k.lanes |= c);
                  bh(
                    f.return,
                    c,
                    b
                  );
                  h.lanes |= c;
                  break;
                }
                k = k.next;
              }
            } else if (10 === f.tag) g = f.type === b.type ? null : f.child;
            else if (18 === f.tag) {
              g = f.return;
              if (null === g) throw Error(p(341));
              g.lanes |= c;
              h = g.alternate;
              null !== h && (h.lanes |= c);
              bh(g, c, b);
              g = f.sibling;
            } else g = f.child;
            if (null !== g) g.return = f;
            else for (g = f; null !== g; ) {
              if (g === b) {
                g = null;
                break;
              }
              f = g.sibling;
              if (null !== f) {
                f.return = g.return;
                g = f;
                break;
              }
              g = g.return;
            }
            f = g;
          }
          Xi(a, b, e.children, c);
          b = b.child;
        }
        return b;
      case 9:
        return e = b.type, d = b.pendingProps.children, ch(b, c), e = eh(e), d = d(e), b.flags |= 1, Xi(a, b, d, c), b.child;
      case 14:
        return d = b.type, e = Ci(d, b.pendingProps), e = Ci(d.type, e), $i(a, b, d, e, c);
      case 15:
        return bj(a, b, b.type, b.pendingProps, c);
      case 17:
        return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), ij(a, b), b.tag = 1, Zf(d) ? (a = true, cg(b)) : a = false, ch(b, c), Gi(b, d, e), Ii(b, d, e, c), jj(null, b, d, true, a, c);
      case 19:
        return xj(a, b, c);
      case 22:
        return dj(a, b, c);
    }
    throw Error(p(156, b.tag));
  };
  function Fk(a, b) {
    return ac(a, b);
  }
  function $k(a, b, c, d) {
    this.tag = a;
    this.key = c;
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
    this.index = 0;
    this.ref = null;
    this.pendingProps = b;
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
    this.mode = d;
    this.subtreeFlags = this.flags = 0;
    this.deletions = null;
    this.childLanes = this.lanes = 0;
    this.alternate = null;
  }
  function Bg(a, b, c, d) {
    return new $k(a, b, c, d);
  }
  function aj(a) {
    a = a.prototype;
    return !(!a || !a.isReactComponent);
  }
  function Zk(a) {
    if ("function" === typeof a) return aj(a) ? 1 : 0;
    if (void 0 !== a && null !== a) {
      a = a.$$typeof;
      if (a === Da) return 11;
      if (a === Ga) return 14;
    }
    return 2;
  }
  function Pg(a, b) {
    var c = a.alternate;
    null === c ? (c = Bg(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.type = a.type, c.flags = 0, c.subtreeFlags = 0, c.deletions = null);
    c.flags = a.flags & 14680064;
    c.childLanes = a.childLanes;
    c.lanes = a.lanes;
    c.child = a.child;
    c.memoizedProps = a.memoizedProps;
    c.memoizedState = a.memoizedState;
    c.updateQueue = a.updateQueue;
    b = a.dependencies;
    c.dependencies = null === b ? null : { lanes: b.lanes, firstContext: b.firstContext };
    c.sibling = a.sibling;
    c.index = a.index;
    c.ref = a.ref;
    return c;
  }
  function Rg(a, b, c, d, e, f) {
    var g = 2;
    d = a;
    if ("function" === typeof a) aj(a) && (g = 1);
    else if ("string" === typeof a) g = 5;
    else a: switch (a) {
      case ya:
        return Tg(c.children, e, f, b);
      case za:
        g = 8;
        e |= 8;
        break;
      case Aa:
        return a = Bg(12, c, b, e | 2), a.elementType = Aa, a.lanes = f, a;
      case Ea:
        return a = Bg(13, c, b, e), a.elementType = Ea, a.lanes = f, a;
      case Fa:
        return a = Bg(19, c, b, e), a.elementType = Fa, a.lanes = f, a;
      case Ia:
        return pj(c, e, f, b);
      default:
        if ("object" === typeof a && null !== a) switch (a.$$typeof) {
          case Ba:
            g = 10;
            break a;
          case Ca:
            g = 9;
            break a;
          case Da:
            g = 11;
            break a;
          case Ga:
            g = 14;
            break a;
          case Ha:
            g = 16;
            d = null;
            break a;
        }
        throw Error(p(130, null == a ? a : typeof a, ""));
    }
    b = Bg(g, c, b, e);
    b.elementType = a;
    b.type = d;
    b.lanes = f;
    return b;
  }
  function Tg(a, b, c, d) {
    a = Bg(7, a, d, b);
    a.lanes = c;
    return a;
  }
  function pj(a, b, c, d) {
    a = Bg(22, a, d, b);
    a.elementType = Ia;
    a.lanes = c;
    a.stateNode = { isHidden: false };
    return a;
  }
  function Qg(a, b, c) {
    a = Bg(6, a, null, b);
    a.lanes = c;
    return a;
  }
  function Sg(a, b, c) {
    b = Bg(4, null !== a.children ? a.children : [], a.key, b);
    b.lanes = c;
    b.stateNode = { containerInfo: a.containerInfo, pendingChildren: null, implementation: a.implementation };
    return b;
  }
  function al(a, b, c, d, e) {
    this.tag = b;
    this.containerInfo = a;
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
    this.timeoutHandle = -1;
    this.callbackNode = this.pendingContext = this.context = null;
    this.callbackPriority = 0;
    this.eventTimes = zc(0);
    this.expirationTimes = zc(-1);
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
    this.entanglements = zc(0);
    this.identifierPrefix = d;
    this.onRecoverableError = e;
    this.mutableSourceEagerHydrationData = null;
  }
  function bl(a, b, c, d, e, f, g, h, k) {
    a = new al(a, b, c, h, k);
    1 === b ? (b = 1, true === f && (b |= 8)) : b = 0;
    f = Bg(3, null, null, b);
    a.current = f;
    f.stateNode = a;
    f.memoizedState = { element: d, isDehydrated: c, cache: null, transitions: null, pendingSuspenseBoundaries: null };
    kh(f);
    return a;
  }
  function cl(a, b, c) {
    var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
    return { $$typeof: wa, key: null == d ? null : "" + d, children: a, containerInfo: b, implementation: c };
  }
  function dl(a) {
    if (!a) return Vf;
    a = a._reactInternals;
    a: {
      if (Vb(a) !== a || 1 !== a.tag) throw Error(p(170));
      var b = a;
      do {
        switch (b.tag) {
          case 3:
            b = b.stateNode.context;
            break a;
          case 1:
            if (Zf(b.type)) {
              b = b.stateNode.__reactInternalMemoizedMergedChildContext;
              break a;
            }
        }
        b = b.return;
      } while (null !== b);
      throw Error(p(171));
    }
    if (1 === a.tag) {
      var c = a.type;
      if (Zf(c)) return bg(a, c, b);
    }
    return b;
  }
  function el(a, b, c, d, e, f, g, h, k) {
    a = bl(c, d, true, a, e, f, g, h, k);
    a.context = dl(null);
    c = a.current;
    d = R();
    e = yi(c);
    f = mh(d, e);
    f.callback = void 0 !== b && null !== b ? b : null;
    nh(c, f, e);
    a.current.lanes = e;
    Ac(a, e, d);
    Dk(a, d);
    return a;
  }
  function fl(a, b, c, d) {
    var e = b.current, f = R(), g = yi(e);
    c = dl(c);
    null === b.context ? b.context = c : b.pendingContext = c;
    b = mh(f, g);
    b.payload = { element: a };
    d = void 0 === d ? null : d;
    null !== d && (b.callback = d);
    a = nh(e, b, g);
    null !== a && (gi(a, e, g, f), oh(a, e, g));
    return g;
  }
  function gl(a) {
    a = a.current;
    if (!a.child) return null;
    switch (a.child.tag) {
      case 5:
        return a.child.stateNode;
      default:
        return a.child.stateNode;
    }
  }
  function hl(a, b) {
    a = a.memoizedState;
    if (null !== a && null !== a.dehydrated) {
      var c = a.retryLane;
      a.retryLane = 0 !== c && c < b ? c : b;
    }
  }
  function il(a, b) {
    hl(a, b);
    (a = a.alternate) && hl(a, b);
  }
  function jl() {
    return null;
  }
  var kl = "function" === typeof reportError ? reportError : function(a) {
    console.error(a);
  };
  function ll(a) {
    this._internalRoot = a;
  }
  ml.prototype.render = ll.prototype.render = function(a) {
    var b = this._internalRoot;
    if (null === b) throw Error(p(409));
    fl(a, b, null, null);
  };
  ml.prototype.unmount = ll.prototype.unmount = function() {
    var a = this._internalRoot;
    if (null !== a) {
      this._internalRoot = null;
      var b = a.containerInfo;
      Rk(function() {
        fl(null, a, null, null);
      });
      b[uf] = null;
    }
  };
  function ml(a) {
    this._internalRoot = a;
  }
  ml.prototype.unstable_scheduleHydration = function(a) {
    if (a) {
      var b = Hc();
      a = { blockedOn: null, target: a, priority: b };
      for (var c = 0; c < Qc.length && 0 !== b && b < Qc[c].priority; c++) ;
      Qc.splice(c, 0, a);
      0 === c && Vc(a);
    }
  };
  function nl(a) {
    return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType);
  }
  function ol(a) {
    return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
  }
  function pl() {
  }
  function ql(a, b, c, d, e) {
    if (e) {
      if ("function" === typeof d) {
        var f = d;
        d = function() {
          var a2 = gl(g);
          f.call(a2);
        };
      }
      var g = el(b, d, a, 0, null, false, false, "", pl);
      a._reactRootContainer = g;
      a[uf] = g.current;
      sf(8 === a.nodeType ? a.parentNode : a);
      Rk();
      return g;
    }
    for (; e = a.lastChild; ) a.removeChild(e);
    if ("function" === typeof d) {
      var h = d;
      d = function() {
        var a2 = gl(k);
        h.call(a2);
      };
    }
    var k = bl(a, 0, false, null, null, false, false, "", pl);
    a._reactRootContainer = k;
    a[uf] = k.current;
    sf(8 === a.nodeType ? a.parentNode : a);
    Rk(function() {
      fl(b, k, c, d);
    });
    return k;
  }
  function rl(a, b, c, d, e) {
    var f = c._reactRootContainer;
    if (f) {
      var g = f;
      if ("function" === typeof e) {
        var h = e;
        e = function() {
          var a2 = gl(g);
          h.call(a2);
        };
      }
      fl(b, g, a, e);
    } else g = ql(c, b, a, e, d);
    return gl(g);
  }
  Ec = function(a) {
    switch (a.tag) {
      case 3:
        var b = a.stateNode;
        if (b.current.memoizedState.isDehydrated) {
          var c = tc(b.pendingLanes);
          0 !== c && (Cc(b, c | 1), Dk(b, B()), 0 === (K & 6) && (Gj = B() + 500, jg()));
        }
        break;
      case 13:
        Rk(function() {
          var b2 = ih(a, 1);
          if (null !== b2) {
            var c2 = R();
            gi(b2, a, 1, c2);
          }
        }), il(a, 1);
    }
  };
  Fc = function(a) {
    if (13 === a.tag) {
      var b = ih(a, 134217728);
      if (null !== b) {
        var c = R();
        gi(b, a, 134217728, c);
      }
      il(a, 134217728);
    }
  };
  Gc = function(a) {
    if (13 === a.tag) {
      var b = yi(a), c = ih(a, b);
      if (null !== c) {
        var d = R();
        gi(c, a, b, d);
      }
      il(a, b);
    }
  };
  Hc = function() {
    return C;
  };
  Ic = function(a, b) {
    var c = C;
    try {
      return C = a, b();
    } finally {
      C = c;
    }
  };
  yb = function(a, b, c) {
    switch (b) {
      case "input":
        bb(a, c);
        b = c.name;
        if ("radio" === c.type && null != b) {
          for (c = a; c.parentNode; ) c = c.parentNode;
          c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');
          for (b = 0; b < c.length; b++) {
            var d = c[b];
            if (d !== a && d.form === a.form) {
              var e = Db(d);
              if (!e) throw Error(p(90));
              Wa(d);
              bb(d, e);
            }
          }
        }
        break;
      case "textarea":
        ib(a, c);
        break;
      case "select":
        b = c.value, null != b && fb(a, !!c.multiple, b, false);
    }
  };
  Gb = Qk;
  Hb = Rk;
  var sl = { usingClientEntryPoint: false, Events: [Cb, ue, Db, Eb, Fb, Qk] }, tl = { findFiberByHostInstance: Wc, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" };
  var ul = { bundleType: tl.bundleType, version: tl.version, rendererPackageName: tl.rendererPackageName, rendererConfig: tl.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ua.ReactCurrentDispatcher, findHostInstanceByFiber: function(a) {
    a = Zb(a);
    return null === a ? null : a.stateNode;
  }, findFiberByHostInstance: tl.findFiberByHostInstance || jl, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
    var vl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!vl.isDisabled && vl.supportsFiber) try {
      kc = vl.inject(ul), lc = vl;
    } catch (a) {
    }
  }
  reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sl;
  reactDom_production_min.createPortal = function(a, b) {
    var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
    if (!nl(b)) throw Error(p(200));
    return cl(a, b, null, c);
  };
  reactDom_production_min.createRoot = function(a, b) {
    if (!nl(a)) throw Error(p(299));
    var c = false, d = "", e = kl;
    null !== b && void 0 !== b && (true === b.unstable_strictMode && (c = true), void 0 !== b.identifierPrefix && (d = b.identifierPrefix), void 0 !== b.onRecoverableError && (e = b.onRecoverableError));
    b = bl(a, 1, false, null, null, c, false, d, e);
    a[uf] = b.current;
    sf(8 === a.nodeType ? a.parentNode : a);
    return new ll(b);
  };
  reactDom_production_min.findDOMNode = function(a) {
    if (null == a) return null;
    if (1 === a.nodeType) return a;
    var b = a._reactInternals;
    if (void 0 === b) {
      if ("function" === typeof a.render) throw Error(p(188));
      a = Object.keys(a).join(",");
      throw Error(p(268, a));
    }
    a = Zb(b);
    a = null === a ? null : a.stateNode;
    return a;
  };
  reactDom_production_min.flushSync = function(a) {
    return Rk(a);
  };
  reactDom_production_min.hydrate = function(a, b, c) {
    if (!ol(b)) throw Error(p(200));
    return rl(null, a, b, true, c);
  };
  reactDom_production_min.hydrateRoot = function(a, b, c) {
    if (!nl(a)) throw Error(p(405));
    var d = null != c && c.hydratedSources || null, e = false, f = "", g = kl;
    null !== c && void 0 !== c && (true === c.unstable_strictMode && (e = true), void 0 !== c.identifierPrefix && (f = c.identifierPrefix), void 0 !== c.onRecoverableError && (g = c.onRecoverableError));
    b = el(b, null, a, 1, null != c ? c : null, e, false, f, g);
    a[uf] = b.current;
    sf(a);
    if (d) for (a = 0; a < d.length; a++) c = d[a], e = c._getVersion, e = e(c._source), null == b.mutableSourceEagerHydrationData ? b.mutableSourceEagerHydrationData = [c, e] : b.mutableSourceEagerHydrationData.push(
      c,
      e
    );
    return new ml(b);
  };
  reactDom_production_min.render = function(a, b, c) {
    if (!ol(b)) throw Error(p(200));
    return rl(null, a, b, false, c);
  };
  reactDom_production_min.unmountComponentAtNode = function(a) {
    if (!ol(a)) throw Error(p(40));
    return a._reactRootContainer ? (Rk(function() {
      rl(null, null, a, false, function() {
        a._reactRootContainer = null;
        a[uf] = null;
      });
    }), true) : false;
  };
  reactDom_production_min.unstable_batchedUpdates = Qk;
  reactDom_production_min.unstable_renderSubtreeIntoContainer = function(a, b, c, d) {
    if (!ol(c)) throw Error(p(200));
    if (null == a || void 0 === a._reactInternals) throw Error(p(38));
    return rl(a, b, c, false, d);
  };
  reactDom_production_min.version = "18.3.1-next-f1338f8080-20240426";
  return reactDom_production_min;
}
var hasRequiredReactDom;
function requireReactDom() {
  if (hasRequiredReactDom) return reactDom.exports;
  hasRequiredReactDom = 1;
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
    reactDom.exports = requireReactDom_production_min();
  }
  return reactDom.exports;
}
var hasRequiredClient;
function requireClient() {
  if (hasRequiredClient) return client;
  hasRequiredClient = 1;
  var m = requireReactDom();
  {
    client.createRoot = m.createRoot;
    client.hydrateRoot = m.hydrateRoot;
  }
  return client;
}
var clientExports = requireClient();
var reactExports = requireReact();
const React = /* @__PURE__ */ getDefaultExportFromCjs(reactExports);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && array.indexOf(className) === index;
}).join(" ");
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var defaultAttributes = {
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
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Icon = reactExports.forwardRef(
  ({
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children,
    iconNode,
    ...rest
  }, ref) => {
    return reactExports.createElement(
      "svg",
      {
        ref,
        ...defaultAttributes,
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: mergeClasses("lucide", className),
        ...rest
      },
      [
        ...iconNode.map(([tag, attrs]) => reactExports.createElement(tag, attrs)),
        ...Array.isArray(children) ? children : [children]
      ]
    );
  }
);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const createLucideIcon = (iconName, iconNode) => {
  const Component = reactExports.forwardRef(
    ({ className, ...props }, ref) => reactExports.createElement(Icon, {
      ref,
      iconNode,
      className: mergeClasses(`lucide-${toKebabCase(iconName)}`, className),
      ...props
    })
  );
  Component.displayName = `${iconName}`;
  return Component;
};
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Accessibility = createLucideIcon("Accessibility", [
  ["circle", { cx: "16", cy: "4", r: "1", key: "1grugj" }],
  ["path", { d: "m18 19 1-7-6 1", key: "r0i19z" }],
  ["path", { d: "m5 8 3-3 5.5 3-2.36 3.5", key: "9ptxx2" }],
  ["path", { d: "M4.24 14.5a5 5 0 0 0 6.88 6", key: "10kmtu" }],
  ["path", { d: "M13.76 17.5a5 5 0 0 0-6.88-6", key: "2qq6rc" }]
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Activity = createLucideIcon("Activity", [
  [
    "path",
    {
      d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
      key: "169zse"
    }
  ]
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ambulance = createLucideIcon("Ambulance", [
  ["path", { d: "M10 10H6", key: "1bsnug" }],
  ["path", { d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2", key: "wrbu53" }],
  [
    "path",
    {
      d: "M19 18h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.684-.948l-1.923-.641a1 1 0 0 1-.578-.502l-1.539-3.076A1 1 0 0 0 16.382 8H14",
      key: "lrkjwd"
    }
  ],
  ["path", { d: "M8 8v4", key: "1fwk8c" }],
  ["path", { d: "M9 18h6", key: "x1upvd" }],
  ["circle", { cx: "17", cy: "18", r: "2", key: "332jqn" }],
  ["circle", { cx: "7", cy: "18", r: "2", key: "19iecd" }]
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ArrowRight = createLucideIcon("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Award = createLucideIcon("Award", [
  [
    "path",
    {
      d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
      key: "1yiouv"
    }
  ],
  ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }]
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Baby = createLucideIcon("Baby", [
  ["path", { d: "M9 12h.01", key: "157uk2" }],
  ["path", { d: "M15 12h.01", key: "1k8ypt" }],
  ["path", { d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5", key: "1u7htd" }],
  [
    "path",
    {
      d: "M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1",
      key: "5yv0yz"
    }
  ]
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const BadgeCheck = createLucideIcon("BadgeCheck", [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
      key: "3c2336"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bone = createLucideIcon("Bone", [
  [
    "path",
    {
      d: "M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z",
      key: "w610uw"
    }
  ]
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Briefcase = createLucideIcon("Briefcase", [
  ["path", { d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16", key: "jecpp" }],
  ["rect", { width: "20", height: "14", x: "2", y: "6", rx: "2", key: "i6l2r4" }]
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Building2 = createLucideIcon("Building2", [
  ["path", { d: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z", key: "1b4qmf" }],
  ["path", { d: "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2", key: "i71pzd" }],
  ["path", { d: "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2", key: "10jefs" }],
  ["path", { d: "M10 6h4", key: "1itunk" }],
  ["path", { d: "M10 10h4", key: "tcdvrf" }],
  ["path", { d: "M10 14h4", key: "kelpxr" }],
  ["path", { d: "M10 18h4", key: "1ulq68" }]
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Calendar = createLucideIcon("Calendar", [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Car = createLucideIcon("Car", [
  [
    "path",
    {
      d: "M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",
      key: "5owen"
    }
  ],
  ["circle", { cx: "7", cy: "17", r: "2", key: "u2ysq9" }],
  ["path", { d: "M9 17h6", key: "r8uit2" }],
  ["circle", { cx: "17", cy: "17", r: "2", key: "axvx0g" }]
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ChevronDown = createLucideIcon("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ChevronRight = createLucideIcon("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ChevronUp = createLucideIcon("ChevronUp", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const CircleAlert = createLucideIcon("CircleAlert", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const CircleCheckBig = createLucideIcon("CircleCheckBig", [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const CircleCheck = createLucideIcon("CircleCheck", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const CircleHelp = createLucideIcon("CircleHelp", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Clock = createLucideIcon("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Compass = createLucideIcon("Compass", [
  [
    "path",
    {
      d: "m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",
      key: "9ktpf1"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Copy = createLucideIcon("Copy", [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dna = createLucideIcon("Dna", [
  ["path", { d: "m10 16 1.5 1.5", key: "11lckj" }],
  ["path", { d: "m14 8-1.5-1.5", key: "1ohn8i" }],
  ["path", { d: "M15 2c-1.798 1.998-2.518 3.995-2.807 5.993", key: "80uv8i" }],
  ["path", { d: "m16.5 10.5 1 1", key: "696xn5" }],
  ["path", { d: "m17 6-2.891-2.891", key: "xu6p2f" }],
  ["path", { d: "M2 15c6.667-6 13.333 0 20-6", key: "1pyr53" }],
  ["path", { d: "m20 9 .891.891", key: "3xwk7g" }],
  ["path", { d: "M3.109 14.109 4 15", key: "q76aoh" }],
  ["path", { d: "m6.5 12.5 1 1", key: "cs35ky" }],
  ["path", { d: "m7 18 2.891 2.891", key: "1sisit" }],
  ["path", { d: "M9 22c1.798-1.998 2.518-3.995 2.807-5.993", key: "q3hbxp" }]
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Earth = createLucideIcon("Earth", [
  ["path", { d: "M21.54 15H17a2 2 0 0 0-2 2v4.54", key: "1djwo0" }],
  [
    "path",
    {
      d: "M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17",
      key: "1tzkfa"
    }
  ],
  ["path", { d: "M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05", key: "14pb5j" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ExternalLink = createLucideIcon("ExternalLink", [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const FileText = createLucideIcon("FileText", [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Footprints = createLucideIcon("Footprints", [
  [
    "path",
    {
      d: "M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z",
      key: "1dudjm"
    }
  ],
  [
    "path",
    {
      d: "M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z",
      key: "l2t8xc"
    }
  ],
  ["path", { d: "M16 17h4", key: "1dejxt" }],
  ["path", { d: "M4 13h4", key: "1bwh8b" }]
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Globe = createLucideIcon("Globe", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }]
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const GraduationCap = createLucideIcon("GraduationCap", [
  [
    "path",
    {
      d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",
      key: "j76jl0"
    }
  ],
  ["path", { d: "M22 10v6", key: "1lu8f3" }],
  ["path", { d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5", key: "1r8lef" }]
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const HeartPulse = createLucideIcon("HeartPulse", [
  [
    "path",
    {
      d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
      key: "c3ymky"
    }
  ],
  ["path", { d: "M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27", key: "1uw2ng" }]
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const History = createLucideIcon("History", [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
  ["path", { d: "M12 7v5l4 2", key: "1fdv2h" }]
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hotel = createLucideIcon("Hotel", [
  ["path", { d: "M10 22v-6.57", key: "1wmca3" }],
  ["path", { d: "M12 11h.01", key: "z322tv" }],
  ["path", { d: "M12 7h.01", key: "1ivr5q" }],
  ["path", { d: "M14 15.43V22", key: "1q2vjd" }],
  ["path", { d: "M15 16a5 5 0 0 0-6 0", key: "o9wqvi" }],
  ["path", { d: "M16 11h.01", key: "xkw8gn" }],
  ["path", { d: "M16 7h.01", key: "1kdx03" }],
  ["path", { d: "M8 11h.01", key: "1dfujw" }],
  ["path", { d: "M8 7h.01", key: "1vti4s" }],
  ["rect", { x: "4", y: "2", width: "16", height: "20", rx: "2", key: "1uxh74" }]
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const House = createLucideIcon("House", [
  ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "1d0kgt"
    }
  ]
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Leaf = createLucideIcon("Leaf", [
  [
    "path",
    {
      d: "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",
      key: "nnexq3"
    }
  ],
  ["path", { d: "M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12", key: "mt58a7" }]
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Luggage = createLucideIcon("Luggage", [
  [
    "path",
    { d: "M6 20a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2", key: "1m57jg" }
  ],
  ["path", { d: "M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14", key: "1l99gc" }],
  ["path", { d: "M10 20h4", key: "ni2waw" }],
  ["circle", { cx: "16", cy: "20", r: "2", key: "1vifvg" }],
  ["circle", { cx: "8", cy: "20", r: "2", key: "ckkr5m" }]
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mail = createLucideIcon("Mail", [
  ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }]
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const MapPin = createLucideIcon("MapPin", [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Maximize2 = createLucideIcon("Maximize2", [
  ["polyline", { points: "15 3 21 3 21 9", key: "mznyad" }],
  ["polyline", { points: "9 21 3 21 3 15", key: "1avn1i" }],
  ["line", { x1: "21", x2: "14", y1: "3", y2: "10", key: "ota7mn" }],
  ["line", { x1: "3", x2: "10", y1: "21", y2: "14", key: "1atl0r" }]
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Menu = createLucideIcon("Menu", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }]
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const MessageCircle = createLucideIcon("MessageCircle", [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }]
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const MessageSquare = createLucideIcon("MessageSquare", [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }]
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Microscope = createLucideIcon("Microscope", [
  ["path", { d: "M6 18h8", key: "1borvv" }],
  ["path", { d: "M3 22h18", key: "8prr45" }],
  ["path", { d: "M14 22a7 7 0 1 0 0-14h-1", key: "1jwaiy" }],
  ["path", { d: "M9 14h2", key: "197e7h" }],
  ["path", { d: "M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z", key: "1bmzmy" }],
  ["path", { d: "M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3", key: "1drr47" }]
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Navigation = createLucideIcon("Navigation", [
  ["polygon", { points: "3 11 22 2 13 21 11 13 3 11", key: "1ltx0t" }]
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const PhoneCall = createLucideIcon("PhoneCall", [
  [
    "path",
    {
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
      key: "foiqr5"
    }
  ],
  ["path", { d: "M14.05 2a9 9 0 0 1 8 7.94", key: "vmijpz" }],
  ["path", { d: "M14.05 6A5 5 0 0 1 18 10", key: "13nbpp" }]
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Phone = createLucideIcon("Phone", [
  [
    "path",
    {
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
      key: "foiqr5"
    }
  ]
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pill = createLucideIcon("Pill", [
  [
    "path",
    { d: "m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z", key: "wa1lgi" }
  ],
  ["path", { d: "m8.5 8.5 7 7", key: "rvfmvr" }]
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Plane = createLucideIcon("Plane", [
  [
    "path",
    {
      d: "M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",
      key: "1v9wt8"
    }
  ]
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Scan = createLucideIcon("Scan", [
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
  ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
  ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
  ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }]
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Scissors = createLucideIcon("Scissors", [
  ["circle", { cx: "6", cy: "6", r: "3", key: "1lh9wr" }],
  ["path", { d: "M8.12 8.12 12 12", key: "1alkpv" }],
  ["path", { d: "M20 4 8.12 15.88", key: "xgtan2" }],
  ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }],
  ["path", { d: "M14.8 14.8 20 20", key: "ptml3r" }]
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Search = createLucideIcon("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Send = createLucideIcon("Send", [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ShieldCheck = createLucideIcon("ShieldCheck", [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Shield = createLucideIcon("Shield", [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ]
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sparkles = createLucideIcon("Sparkles", [
  [
    "path",
    {
      d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
      key: "4pj2yx"
    }
  ],
  ["path", { d: "M20 3v4", key: "1olli1" }],
  ["path", { d: "M22 5h-4", key: "1gvqau" }],
  ["path", { d: "M4 17v2", key: "vumght" }],
  ["path", { d: "M5 18H3", key: "zchphs" }]
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Stethoscope = createLucideIcon("Stethoscope", [
  ["path", { d: "M11 2v2", key: "1539x4" }],
  ["path", { d: "M5 2v2", key: "1yf1q8" }],
  ["path", { d: "M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1", key: "rb5t3r" }],
  ["path", { d: "M8 15a6 6 0 0 0 12 0v-3", key: "x18d4x" }],
  ["circle", { cx: "20", cy: "10", r: "2", key: "ts1r5v" }]
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Target = createLucideIcon("Target", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const User = createLucideIcon("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Users = createLucideIcon("Users", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }]
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const X = createLucideIcon("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zap = createLucideIcon("Zap", [
  [
    "path",
    {
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }
  ]
]);
const Header = ({
  activeTab,
  onNavigate,
  onOpenWhatsAppBooking
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = reactExports.useState(false);
  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "services", label: "Services" },
    { id: "tourism", label: "Medical Tourism" },
    { id: "team", label: "Our Team" },
    { id: "contact", label: "Contact Us" },
    { id: "booking", label: "Book via WhatsApp" }
  ];
  const handleLinkClick = (id, e) => {
    if (e) e.preventDefault();
    onNavigate(id);
    setMobileMenuOpen(false);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "sticky top-0 z-50 w-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "header-utility bg-[#002654] border-b border-white/10 text-xs text-sky-100 py-2.5 px-4 sm:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 flex-wrap", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-sky-300 font-semibold", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-3.5 h-3.5 text-sky-400" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Garki 2, Abuja, Nigeria" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sky-600 hidden sm:inline", children: "|" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-sky-100", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3.5 h-3.5 text-emerald-400" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Emergency Department & Ambulance listed · Call to confirm" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sky-600 hidden md:inline", children: "|" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden md:flex items-center gap-1.5 text-[#fdc33e] font-semibold", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-3.5 h-3.5 text-[#fdc33e]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Accreditations & enrolled organisations listed in the profile" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white/90 backdrop-blur-md border-b border-[#013777]/15 px-4 sm:px-6 shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto flex items-center justify-between h-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: (e) => handleLinkClick("home", e),
          className: "flex items-center gap-3 cursor-pointer text-left group",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative w-12 h-12 flex-shrink-0 group-hover:scale-105 transition-transform", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: "/logo.png",
                alt: "Cairo Hospital Abuja",
                className: "w-full h-full object-contain"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg sm:text-xl font-black text-[#013777] tracking-tight leading-tight", children: "Cairo Hospital" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] sm:text-xs font-bold text-[#0b5599] uppercase tracking-wider", children: "Abuja · Nigeria" })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden lg:flex items-center gap-7", children: navItems.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: (e) => handleLinkClick(item.id, e),
          className: `text-xs sm:text-sm transition-all relative py-1 cursor-pointer font-bold ${activeTab === item.id ? "text-[#013777] font-black" : "text-[#2d435e] hover:text-[#013777]"}`,
          children: [
            item.label,
            activeTab === item.id && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute bottom-0 left-0 right-0 h-0.5 bg-[#013777] rounded-full" })
          ]
        },
        item.id
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden sm:flex items-center gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: (e) => handleLinkClick("booking", e),
          className: "glass-button-whatsapp inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-white font-extrabold text-xs sm:text-sm transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-md",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-4 h-4 fill-white text-emerald-600" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Book via WhatsApp" })
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => setMobileMenuOpen(!mobileMenuOpen),
          className: "lg:hidden p-2 rounded-xl bg-slate-100 border border-slate-200 text-[#013777] hover:bg-slate-200",
          "aria-label": "Toggle navigation",
          children: mobileMenuOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-6 h-6" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "w-6 h-6" })
        }
      )
    ] }) }),
    mobileMenuOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:hidden bg-white/98 backdrop-blur-xl border-b border-slate-200 p-5 space-y-4 shadow-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-1", children: navItems.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: (e) => handleLinkClick(item.id, e),
          className: `text-left w-full px-4 py-3 rounded-xl text-sm font-bold transition-colors ${activeTab === item.id ? "bg-[#013777]/10 text-[#013777] border border-[#013777]/20 font-black" : "text-[#2d435e] hover:bg-slate-50"}`,
          children: item.label
        },
        item.id
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-3 border-t border-slate-100", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: (e) => {
            if (e) e.preventDefault();
            setMobileMenuOpen(false);
            onNavigate("booking");
          },
          className: "w-full glass-button-whatsapp py-3 rounded-xl text-white font-black text-sm flex items-center justify-center gap-2 shadow-lg",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-4 h-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Book Appointment via WhatsApp" })
          ]
        }
      ) })
    ] })
  ] });
};
const HOSPITAL_CONTACT = {
  address: "16 Oke Agbe Street, Garki 2, Abuja, FCTA, Nigeria",
  phone1: "+2349129799999",
  whatsappNumber: "2349129799999",
  whatsappDisplay: "+234 912 979 9999",
  email: "nigeria.crc@gmail.com",
  workingHours: "Contact the hospital to confirm clinic schedules, pharmacy hours, emergency access, and ambulance availability."
};
const HOSPITAL_STATS = [
  { value: "1970", label: "Chairman’s Work in Nigeria", sublabel: "Working in Nigeria since 1970" },
  { value: "22", label: "Services Listed", sublabel: "Items in the profile’s services list" },
  { value: "3 listed", label: "Diagnostics", sublabel: "Laboratory · X-Ray · Ultrasound" },
  { value: "Listed", label: "Emergency & Ambulance", sublabel: "Call to confirm current availability" }
];
const PILLARS_OF_CARE = [
  {
    title: "PATIENT COMPLIANCE & SATISFACTION",
    description: "A named aim in the supplied hospital profile.",
    icon: "Users"
  },
  {
    title: "ACCURATE DIAGNOSIS & EFFECTIVE TREATMENT",
    description: "A named aim in the supplied hospital profile.",
    icon: "Microscope"
  },
  {
    title: "HYGIENE",
    description: "A named pillar of the hospital’s stated aim.",
    icon: "ShieldCheck"
  },
  {
    title: "COMFORT",
    description: "A named pillar of the hospital’s stated aim.",
    icon: "HeartHandshake"
  },
  {
    title: "CARE",
    description: "A named pillar of the hospital’s stated aim.",
    icon: "Stethoscope"
  },
  {
    title: "REASSURANCE",
    description: "A named pillar of the hospital’s stated aim.",
    icon: "Activity"
  }
];
const TEAM_MEMBERS = [
  {
    id: "dr-ahmed-shaker",
    isDoctor: true,
    name: "Dr. Ahmed Shaker",
    role: "Chairman",
    title: "Consultant Obstetrics & Gynaecology",
    education: "Ain Shams University",
    qualifications: [
      "MRCOG (member of the Royal College of Surgeons in Dublin)",
      "Vice President of the Egyptian Committee in Nigeria",
      "Former Medical Director, National Electric Power Authority (NEPA)",
      "Managed AGUDA Hospital in Lagos and Weaner Hospital in Abuja",
      "CMD, Katameya Hospital"
    ],
    careerHighlights: [
      "Worked in Nigeria since 1970",
      "NEPA Medical Director from 1970 to 1991; managed more than 130 hospitals under his authority",
      "Partnered with investors to establish Katameya Hospital until 2019"
    ],
    image: "/images/team/dr-ahmed-shaker.png",
    fullBio: "Dr. Ahmed Shaker is Chairman and Consultant in Obstetrics & Gynaecology. The profile lists Ain Shams University, MRCOG (member of the Royal College of Surgeons in Dublin), his role as Vice President of the Egyptian Committee in Nigeria, and his earlier medical leadership in Nigeria. He worked as NEPA Medical Director from 1970 to 1991, managing more than 130 hospitals under his authority, then managed AGUDA Hospital in Lagos and Weaner Hospital in Abuja, and partnered with investors to establish Katameya Hospital until 2019."
  },
  {
    id: "dr-mohammed-hesham",
    isDoctor: true,
    name: "Dr. Mohammed Hesham Shaker",
    role: "Founder, CEO & CMD",
    title: "Consultant Orthopedic & Arthroplasty Surgeon",
    specialty: "Orthopedic Consultant · Arthroplasty & Stem Cells Regenerative Therapy",
    education: "Ain Shams University Medical School, Cairo, Egypt (Graduated 1997)",
    qualifications: [
      "Orthopedic Consultant",
      "Graduated from Ain Shams University Medical School in Cairo, Egypt (1997)",
      "Specialized in Arthroplasty and stem cells regenerative therapy in musculoskeletal disorders",
      "Member of the ASRIC (African Scientific Research and Innovation Council) of the African Union",
      "Lecturer in Abuja University of Science and Technology in collaboration with Push Africa Organisation",
      "Specialized in Orthopedic Arthroplasty, Trauma Surgeries, and Orthobiologics stem cells regenerative therapy"
    ],
    careerHighlights: [
      "Currently Founder, CEO & CMD of Cairo Hospital in Abuja, Nigeria",
      "Worked in Nozha International Hospital, Cairo, Egypt for 10 years",
      "Worked with the Stuttgart German orthopedic team for 10 years in Elrazi Trauma Center in Kuwait",
      "Pioneering Orthobiologics & Stem Cells Regenerative Therapy in West Africa",
      "25+ years of distinguished international orthopedic surgical leadership"
    ],
    image: "/images/team/dr-mohammed-hesham.png",
    fullBio: "Dr. Mohammed Hesham Shaker is an Orthopedic Consultant and the Founder, CEO & CMD of Cairo Hospital in Abuja, Nigeria. He graduated from Ain Shams University Medical School in Cairo, Egypt in 1997. Dr. Shaker specializes in Arthroplasty and stem cells regenerative therapy in musculoskeletal disorders, orthopedic trauma surgeries, and orthobiologics. His distinguished clinical journey spans over 25 years, including 10 years at Nozha International Hospital in Cairo, Egypt, and 10 years working with the renowned Stuttgart German orthopedic team in Elrazi Trauma Center in Kuwait. An active academic and regional healthcare pioneer, Dr. Shaker is a Member of the ASRIC (African Scientific Research and Innovation Council) of the African Union, and serves as a Lecturer in Abuja University of Science and Technology in collaboration with Push Africa Organisation."
  },
  {
    id: "dr-wael",
    isDoctor: true,
    name: "Dr. Wael Khalil",
    role: "Bariatric Surgeon",
    title: "Bariatric Surgeon",
    education: "",
    qualifications: [
      "Laparoscopic Surgeries",
      "Bariatric Surgeries",
      "Oncology Surgeries"
    ],
    careerHighlights: [
      "Laparoscopic surgeries",
      "Bariatric surgeries",
      "Oncology surgeries"
    ],
    image: "/images/team/dr-wael-khalil.jpg",
    fullBio: "The current supplied profile identifies Dr. Wael Khalil as a Bariatric Surgeon and lists laparoscopic, bariatric, and oncology surgeries within his clinical scope. Contact Cairo Hospital to confirm consultation availability and case-specific services."
  },
  {
    id: "dr-bassam",
    isDoctor: true,
    name: "Dr. Bassam",
    role: "Physical Therapy",
    title: "Physical Therapy",
    education: "",
    qualifications: [
      "Myofascial Therapy",
      "Cupping",
      "Acupuncture",
      "Neurological Disorders",
      "Musculoskeletal Disorders"
    ],
    careerHighlights: [
      "Physical therapy",
      "Myofascial therapy, cupping, and acupuncture",
      "Neurological and musculoskeletal disorders"
    ],
    image: "/images/team/dr-bassam-physical-therapy.jpg",
    fullBio: "The supplied profile lists Dr. Bassam under Physical Therapy, Myofascial Therapy, Cupping, and Acupuncture, with neurological and musculoskeletal disorders included in the stated scope. Contact the hospital to confirm availability and suitability."
  },
  {
    id: "mr-mohammed-fadl",
    isDoctor: false,
    name: "Mr. Mohammed Fadl",
    role: "Finance Director",
    title: "Finance Director",
    education: "Al-Azhar University",
    qualifications: [
      "ACC. AZHAR UNIVERSITY",
      "Director, Rahma Travel Agency"
    ],
    careerHighlights: [
      "Finance Director at Cairo Hospital",
      "Director of Rahma Travel Agency"
    ],
    image: "/images/team/mr-mohammed-fadl.png",
    fullBio: "The supplied profile lists Mr. Mohammed Fadl as Finance Director, notes “ACC. AZHAR UNIVERSITY,” and identifies him as Director of Rahma Travel Agency."
  },
  {
    id: "mr-basem-makhlouf",
    isDoctor: false,
    name: "Mr. Bassem Makhlouf",
    role: "Business Development Director",
    title: "Business Development Director",
    education: "Faculty of Science, Cairo University",
    qualifications: [
      "Faculty of Science, Cairo University"
    ],
    careerHighlights: [
      "Business Development Director at Cairo Hospital"
    ],
    image: "/images/team/mr-bassem-makhlouf.png",
    fullBio: "The supplied profile lists Mr. Bassem Makhlouf as Business Development Director and names the Faculty of Science, Cairo University."
  }
];
const SERVICE_DEPARTMENTS = [
  {
    id: "orthopedics",
    label: "Orthopedics",
    shortLabel: "Orthopedics"
  },
  {
    id: "physiotherapy",
    label: "Physiotherapy",
    shortLabel: "Physiotherapy"
  },
  {
    id: "obgyn",
    label: "Obstetrics & Gynaecology",
    shortLabel: "Obstetrics & Gynaecology"
  },
  {
    id: "general-surgery",
    label: "General Surgery & Urosurgery",
    shortLabel: "General · Urosurgery"
  },
  {
    id: "specialist-clinics",
    label: "Specialist Clinics",
    shortLabel: "Specialist Clinics"
  },
  {
    id: "family-tropical",
    label: "Family & Tropical Medicine",
    shortLabel: "Family · Tropical"
  },
  {
    id: "diagnostics-support",
    label: "Diagnostics, Support & Medical Tourism",
    shortLabel: "Diagnostics · Pharmacy · Ambulance · Tourism"
  }
];
const MEDICAL_SERVICES = [
  {
    id: "emergency-department",
    title: "Emergency Department",
    departmentId: "diagnostics-support",
    departmentLabel: "Diagnostics & Support",
    category: "support",
    description: "Emergency Department is listed in the supplied hospital profile. Contact the hospital directly to confirm current access and availability.",
    iconName: "Ambulance",
    details: ["Emergency Department listed in the profile", "Call to confirm current access and availability"],
    featured: true
  },
  {
    id: "general-surgery",
    title: "General Surgery",
    departmentId: "general-surgery",
    departmentLabel: "General Surgery & Urosurgery",
    category: "surgical",
    description: "General Surgery is listed among the hospital services. The profile also lists laparoscopic, bariatric, and oncology surgeries in Dr. Wael Khalil’s scope.",
    iconName: "Scissors",
    details: ["General Surgery", "Dr. Wael Khalil: laparoscopic surgeries", "Dr. Wael Khalil: bariatric surgeries", "Dr. Wael Khalil: oncology surgeries"],
    featured: true
  },
  {
    id: "outpatient-clinics",
    title: "Outpatient Clinics",
    departmentId: "specialist-clinics",
    departmentLabel: "Specialist Clinics",
    category: "clinical",
    description: "Outpatient clinics are listed in the hospital profile. Contact the hospital to confirm clinic schedules and consultant availability.",
    iconName: "Stethoscope",
    details: ["Outpatient Clinics listed in the profile", "Appointments and availability confirmed by the hospital"],
    featured: true
  },
  {
    id: "ambulance-services",
    title: "Ambulance Service",
    departmentId: "diagnostics-support",
    departmentLabel: "Diagnostics & Support",
    category: "support",
    description: "Ambulance Service is listed in the supplied profile. Call Cairo Hospital to confirm current availability and arrangements.",
    iconName: "Ambulance",
    details: ["Ambulance service listed in the profile", "Call to confirm current availability and arrangements"],
    featured: true
  },
  {
    id: "urosurgery",
    title: "Urosurgery",
    departmentId: "general-surgery",
    departmentLabel: "General Surgery & Urosurgery",
    category: "surgical",
    description: "Urosurgery is listed in the hospital profile. Contact the hospital to confirm consultant availability and the services relevant to your case.",
    iconName: "Scissors",
    details: ["Urosurgery listed in the profile", "Case-specific availability confirmed by the hospital"]
  },
  {
    id: "cardiology",
    title: "Cardiology",
    departmentId: "specialist-clinics",
    departmentLabel: "Specialist Clinics",
    category: "clinical",
    description: "Cardiology is listed among the outpatient services in the hospital profile. Contact the hospital to confirm clinic availability.",
    iconName: "HeartPulse",
    details: ["Cardiology listed in the profile", "Consultant schedule confirmed at booking"]
  },
  {
    id: "orthopedic-surgery",
    title: "Orthopedic Surgery",
    departmentId: "orthopedics",
    departmentLabel: "Orthopedics",
    category: "surgical",
    description: "The profile lists orthopedic surgeries including arthroplasty, hand surgeries, foot and ankle surgeries, external fixation, and deformities.",
    iconName: "Bone",
    details: ["Arthroplasty", "Hand surgeries", "Foot and ankle surgeries", "External fixation and deformities"],
    featured: true
  },
  {
    id: "family-medicine",
    title: "Family Medicine",
    departmentId: "family-tropical",
    departmentLabel: "Family & Tropical Medicine",
    category: "clinical",
    description: "Family Medicine is listed among the hospital services. Contact the hospital to confirm clinic availability.",
    iconName: "Users",
    details: ["Family Medicine listed in the profile", "Consultation availability confirmed by the hospital"]
  },
  {
    id: "neurology",
    title: "Neurology",
    departmentId: "specialist-clinics",
    departmentLabel: "Specialist Clinics",
    category: "clinical",
    description: "Neurology is listed among the outpatient services in the hospital profile. Contact the hospital to confirm clinic availability.",
    iconName: "Activity",
    details: ["Neurology listed in the profile", "Consultant schedule confirmed at booking"]
  },
  {
    id: "physiotherapy",
    title: "Physiotherapy",
    departmentId: "physiotherapy",
    departmentLabel: "Physiotherapy",
    category: "clinical",
    description: "The profile lists Physical Therapy, Myofascial Therapy, Cupping, and Acupuncture with Dr. Bassam, including neurological and musculoskeletal disorders.",
    iconName: "Activity",
    details: ["Physical therapy", "Myofascial therapy", "Cupping", "Acupuncture", "Neurological and musculoskeletal disorders"],
    featured: true
  },
  {
    id: "tropical-medicine",
    title: "Tropical Medicine",
    departmentId: "family-tropical",
    departmentLabel: "Family & Tropical Medicine",
    category: "clinical",
    description: "Tropical Medicine is listed among the hospital services. Contact the hospital to confirm clinic availability.",
    iconName: "Stethoscope",
    details: ["Tropical Medicine listed in the profile", "Consultation availability confirmed by the hospital"]
  },
  {
    id: "nephrology",
    title: "Nephrology",
    departmentId: "specialist-clinics",
    departmentLabel: "Specialist Clinics",
    category: "clinical",
    description: "Nephrology is listed among the outpatient services in the hospital profile. Contact the hospital to confirm clinic availability.",
    iconName: "Activity",
    details: ["Nephrology listed in the profile", "Consultant schedule confirmed at booking"]
  },
  {
    id: "orthobiologics",
    title: "Orthobiologics",
    departmentId: "orthopedics",
    departmentLabel: "Orthopedics",
    category: "regenerative",
    description: "The profile lists stem-cell regenerative therapy, prolotherapy, PRP, and BMAC under orthobiologics for musculoskeletal degenerative or traumatic disorders.",
    iconName: "Dna",
    details: ["Stem-cell regenerative therapy", "Prolotherapy", "PRP", "BMAC", "Page 7 lists sports medicine, spinal implications, minimal invasive procedures, demand for viscosupplementation, and stem-cells-based treatments"],
    featured: true
  },
  {
    id: "laboratory-services",
    title: "Laboratory",
    departmentId: "diagnostics-support",
    departmentLabel: "Diagnostics & Support",
    category: "diagnostic",
    description: "A fully equipped laboratory diagnostic department is listed in the hospital profile. Contact the hospital to confirm tests and arrangements.",
    iconName: "Microscope",
    details: ["Fully equipped laboratory diagnostic department listed in the profile"],
    featured: true
  },
  {
    id: "gastroenterology",
    title: "Gastroenterology",
    departmentId: "specialist-clinics",
    departmentLabel: "Specialist Clinics",
    category: "clinical",
    description: "Gastroenterology is listed among the outpatient services in the hospital profile. Contact the hospital to confirm clinic availability.",
    iconName: "Stethoscope",
    details: ["Gastroenterology listed in the profile", "Consultant schedule confirmed at booking"]
  },
  {
    id: "diabetic-foot",
    title: "Diabetic Foot Clinic",
    departmentId: "orthopedics",
    departmentLabel: "Orthopedics",
    category: "clinical",
    description: "Diabetic Foot Clinic is listed among the hospital services. Contact the hospital to confirm clinic availability.",
    iconName: "Footprints",
    details: ["Diabetic Foot Clinic listed in the profile", "Contact the hospital for assessment availability"]
  },
  {
    id: "x-ray",
    title: "X-Ray",
    departmentId: "diagnostics-support",
    departmentLabel: "Diagnostics & Support",
    category: "diagnostic",
    description: "Digital X-ray is listed in the hospital profile. Contact the hospital to confirm the investigation and arrangements.",
    iconName: "Scan",
    details: ["Digital X-ray department listed in the profile"]
  },
  {
    id: "endocrinology",
    title: "Endocrinology",
    departmentId: "specialist-clinics",
    departmentLabel: "Specialist Clinics",
    category: "clinical",
    description: "Endocrinology is listed among the outpatient services in the hospital profile. Contact the hospital to confirm clinic availability.",
    iconName: "Stethoscope",
    details: ["Endocrinology listed in the profile", "Consultant schedule confirmed at booking"]
  },
  {
    id: "obstetrics-gynaecology",
    title: "Obstetrics & Gynaecology",
    departmentId: "obgyn",
    departmentLabel: "Obstetrics & Gynaecology",
    category: "clinical",
    description: "Obstetrics & Gynaecology is listed in the profile. Dr. Ahmed Shaker is identified as a Consultant in Obstetrics & Gynaecology.",
    iconName: "Baby",
    details: ["Obstetrics & Gynaecology service listed in the profile", "Consultant availability confirmed by the hospital"],
    featured: true
  },
  {
    id: "ultrasound",
    title: "Ultrasound",
    departmentId: "diagnostics-support",
    departmentLabel: "Diagnostics & Support",
    category: "diagnostic",
    description: "Ultrasound is listed among the diagnostic services in the hospital profile. Contact the hospital to confirm availability and arrangements.",
    iconName: "Scan",
    details: ["Ultrasound department listed in the profile"]
  },
  {
    id: "infertility",
    title: "Infertility",
    departmentId: "obgyn",
    departmentLabel: "Obstetrics & Gynaecology",
    category: "clinical",
    description: "Infertility is listed among the hospital services. Contact the hospital to confirm consultation availability.",
    iconName: "Baby",
    details: ["Infertility service listed in the profile", "Consultation availability confirmed by the hospital"]
  },
  {
    id: "pharmacy",
    title: "Pharmacy",
    departmentId: "diagnostics-support",
    departmentLabel: "Diagnostics & Support",
    category: "support",
    description: "The profile lists a pharmacy department. Contact Cairo Hospital to confirm current opening hours and product availability.",
    iconName: "Pill",
    details: ["Pharmacy department listed in the profile", "Hours and product availability confirmed by phone"],
    featured: true
  },
  {
    id: "bemer-therapy",
    title: "BEMER Therapy",
    departmentId: "orthopedics",
    departmentLabel: "Orthopedics",
    category: "regenerative",
    description: "BEMER Therapy is listed in the profile as Bio Electro Magnetic Energy Resonance Therapy.",
    iconName: "Zap",
    details: ["Bio Electro Magnetic Energy Resonance Therapy", "Discuss suitability and expected outcomes with a qualified clinician"]
  },
  {
    id: "medical-tourism",
    title: "Medical Tourism",
    departmentId: "diagnostics-support",
    departmentLabel: "Diagnostics & Support",
    category: "support",
    description: "The profile lists Dubai, UK, Nigeria, Egypt, USA, and Turkey as destinations, with visa provision, tickets, accommodation, transport, a medical plan, and representative follow-up.",
    iconName: "Globe2",
    details: ["Visa provision", "Tickets", "Accommodation", "Transport", "Medical plan", "Representative follow-up until return to Nigeria and follow-up at Cairo Hospital"],
    featured: true
  }
];
const ACCREDITATIONS_DATA = [
  {
    name: "NHIS (National Health Insurance System)",
    type: "accreditation",
    description: "Listed as an accreditation in the current Cairo Hospital profile."
  },
  {
    name: "FCDA Health Department",
    type: "accreditation",
    description: "Listed as an accreditation in the current Cairo Hospital profile."
  },
  {
    name: "African Union",
    type: "accreditation",
    description: "Listed as an accreditation in the current Cairo Hospital profile."
  },
  {
    name: "Alamida",
    type: "enrolled",
    description: "Listed as an enrolled organization in the current Cairo Hospital profile."
  },
  {
    name: "Zenith Medica",
    type: "enrolled",
    description: "Listed as an enrolled organization in the current Cairo Hospital profile."
  },
  {
    name: "Cleopatra",
    type: "enrolled",
    description: "Listed as an enrolled organization in the current Cairo Hospital profile."
  },
  {
    name: "NNPH",
    type: "enrolled",
    description: "Listed as an enrolled organization in the current Cairo Hospital profile."
  },
  {
    name: "Push Africa NGO",
    type: "enrolled",
    description: "Listed as an enrolled organization in the current Cairo Hospital profile."
  },
  {
    name: "ASRIC",
    type: "enrolled",
    description: "Listed as an enrolled organization in the current Cairo Hospital profile."
  }
];
const FACILITY_GALLERY = [
  {
    id: "profile-leadership",
    title: "Cairo Hospital Representatives",
    category: "Leadership",
    image: "/images/delegation/cairo-hospital-leadership.jpg",
    description: "Institutional photograph extracted from the supplied Cairo Hospital profile."
  },
  {
    id: "profile-institutional-event",
    title: "Institutional Event",
    category: "Institutional",
    image: "/images/delegation/cairo-hospital-partnership-handshake.jpg",
    description: "A formal event photograph extracted from the supplied Cairo Hospital profile."
  },
  {
    id: "profile-team-visit",
    title: "Cairo Hospital Team Visit",
    category: "Team",
    image: "/images/delegation/cairo-hospital-team-visit.jpg",
    description: "Cairo Hospital team photograph extracted from the supplied profile."
  },
  {
    id: "dr-wael-profile",
    title: "Dr. Wael Khalil · Bariatric Surgeon",
    category: "Clinical Team",
    image: "/images/team/dr-wael-khalil.jpg",
    description: "Doctor photograph extracted from the supplied profile. Listed clinical scope includes laparoscopic, bariatric, and oncology surgeries."
  },
  {
    id: "dr-bassam-profile",
    title: "Dr. Bassam · Physical Therapy",
    category: "Clinical Profile",
    image: "/images/team/dr-bassam-physical-therapy.jpg",
    description: "Clinical photograph extracted from the supplied profile. Dr. Bassam is listed under physical therapy, myofascial therapy, cupping, and acupuncture."
  }
];
const RevealReadyContext = reactExports.createContext(true);
const observerPool = /* @__PURE__ */ new Map();
function observeElement(element, threshold, rootMargin, callback) {
  const key = `${threshold}|${rootMargin}`;
  let entry = observerPool.get(key);
  if (!entry) {
    const callbacks = /* @__PURE__ */ new Map();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((ioEntry) => {
          const cb = callbacks.get(ioEntry.target);
          if (cb) {
            cb(ioEntry.isIntersecting);
          }
        });
      },
      { threshold, rootMargin }
    );
    entry = { observer, callbacks };
    observerPool.set(key, entry);
  }
  entry.callbacks.set(element, callback);
  entry.observer.observe(element);
  return () => {
    const current = observerPool.get(key);
    if (!current) return;
    current.observer.unobserve(element);
    current.callbacks.delete(element);
    if (current.callbacks.size === 0) {
      current.observer.disconnect();
      observerPool.delete(key);
    }
  };
}
const Reveal = ({
  children,
  variant = "up",
  delay = 0,
  duration = 680,
  className = "",
  threshold = 0.08,
  once = true,
  as: Component = "div"
}) => {
  const isReady = reactExports.useContext(RevealReadyContext);
  const ref = reactExports.useRef(null);
  const [inView, setInView] = reactExports.useState(false);
  const [revealed, setRevealed] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (typeof window === "undefined") {
      setInView(true);
      setRevealed(true);
      return;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setInView(true);
      setRevealed(true);
      return;
    }
    if (!("IntersectionObserver" in window)) {
      setInView(true);
      return;
    }
    const node = ref.current;
    if (!node) return;
    return observeElement(node, threshold, "0px 0px -40px 0px", (intersecting) => {
      if (intersecting) {
        setInView(true);
      } else if (!once) {
        setInView(false);
      }
    });
  }, [threshold, once]);
  reactExports.useEffect(() => {
    if (inView && isReady) {
      setRevealed(true);
    } else if (!once && !inView) {
      setRevealed(false);
    }
  }, [inView, isReady, once]);
  const variantClass = `sr-${variant}`;
  const visibilityClass = revealed ? "is-visible" : "";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Component,
    {
      ref,
      className: `sr-element ${variantClass} ${visibilityClass} ${className}`.trim(),
      style: {
        "--sr-delay": `${delay}ms`,
        "--sr-duration": `${duration}ms`
      },
      children
    }
  );
};
const SPECIALTIES = [
  "Orthopedic Surgery",
  "Orthobiologics",
  "Physiotherapy",
  "Emergency Department & Ambulance",
  "Medical Tourism"
];
const TRUST_PARTNERS = [
  "Accreditation · NHIS",
  "Accreditation · FCDA Health Department",
  "Accreditation · African Union",
  "Enrolled · Alamida",
  "Enrolled · Zenith Medica",
  "Enrolled · Cleopatra",
  "Enrolled · NNPH",
  "Enrolled · Push Africa NGO",
  "Enrolled · ASRIC"
];
const useReducedMotion = () => {
  const [reduced, setReduced] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = (e) => setReduced(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
};
const useInView = (threshold = 0.3) => {
  const ref = reactExports.useRef(null);
  const [inView, setInView] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
};
const useAbujaTime = () => {
  const [time, setTime] = reactExports.useState("");
  reactExports.useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "Africa/Lagos"
    });
    const update = () => setTime(fmt.format(/* @__PURE__ */ new Date()));
    update();
    const id = setInterval(update, 3e4);
    return () => clearInterval(id);
  }, []);
  return time;
};
const CountUp = ({
  value,
  start,
  reduced
}) => {
  const match = value.match(/^(\D*)([\d,.]+)(.*)$/);
  const [display, setDisplay] = reactExports.useState(match ? `${match[1]}0${match[3]}` : value);
  reactExports.useEffect(() => {
    if (!match || !start) return;
    if (reduced) {
      setDisplay(value);
      return;
    }
    const raw = match[2];
    const target = parseFloat(raw.replace(/,/g, ""));
    const decimals = (raw.split(".")[1] || "").length;
    const useGrouping = raw.includes(",");
    const duration = 1800;
    const t0 = performance.now();
    let raf = 0;
    const tick = (now) => {
      const p = Math.min((now - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 4);
      const current = (target * eased).toLocaleString("en-US", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
        useGrouping
      });
      setDisplay(`${match[1]}${current}${match[3]}`);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, value, reduced]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: display });
};
const RotatingSpecialty = ({ reduced }) => {
  const [index, setIndex] = reactExports.useState(0);
  const len = SPECIALTIES.length;
  reactExports.useEffect(() => {
    if (reduced) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % len), 2600);
    return () => clearInterval(id);
  }, [reduced, len]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: SPECIALTIES.join(", ") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", className: "relative inline-grid overflow-hidden align-bottom h-[1.45em]", children: SPECIALTIES.map((word, i) => {
      const state = i === index ? "translate-y-0 opacity-100 blur-0" : i === (index - 1 + len) % len ? "-translate-y-full opacity-0 blur-sm" : "translate-y-full opacity-0 blur-sm";
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          className: `col-start-1 row-start-1 whitespace-nowrap font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-sky-400 transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)] ${state}`,
          children: word
        },
        word
      );
    }) })
  ] });
};
const EcgLine = ({ className = "" }) => {
  const d = "M0 30 H70 L80 30 L88 12 L96 48 L104 4 L112 40 L120 30 H210 L220 30 L228 14 L236 46 L244 6 L252 38 L260 30 H350 L360 30 L368 12 L376 48 L384 4 L392 40 L400 30";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 400 52", preserveAspectRatio: "none", className, "aria-hidden": "true", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "ch-ecg-grad", x1: "0", x2: "1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "#2dd4bf", stopOpacity: "0" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "50%", stopColor: "#38bdf8" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "#34d399", stopOpacity: "0" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d, fill: "none", stroke: "rgba(56,189,248,0.15)", strokeWidth: "1.5" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "path",
      {
        d,
        fill: "none",
        stroke: "url(#ch-ecg-grad)",
        strokeWidth: "2.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: "ch-ecg-trace",
        style: { filter: "drop-shadow(0 0 6px rgba(56,189,248,.8))" }
      }
    )
  ] });
};
const Hero = ({
  onOpenWhatsAppBooking,
  onExploreServices,
  onExploreTourism
}) => {
  const isReady = reactExports.useContext(RevealReadyContext);
  const reduced = useReducedMotion();
  const abujaTime = useAbujaTime();
  const sectionRef = reactExports.useRef(null);
  const tiltRef = reactExports.useRef(null);
  const { ref: statsRef, inView: statsInView } = useInView(0.2);
  const statsShouldReveal = statsInView && isReady;
  const videoRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {
      });
    }
  }, []);
  const handleSectionMove = (e) => {
    if (reduced || !sectionRef.current) return;
    const r = sectionRef.current.getBoundingClientRect();
    sectionRef.current.style.setProperty("--mx", `${e.clientX - r.left}px`);
    sectionRef.current.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  const handleTiltMove = (e) => {
    if (reduced || !tiltRef.current) return;
    const r = tiltRef.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    tiltRef.current.style.transform = `perspective(1200px) rotateX(${(-py * 6).toFixed(2)}deg) rotateY(${(px * 8).toFixed(2)}deg)`;
  };
  const resetTilt = () => {
    if (tiltRef.current) tiltRef.current.style.transform = "perspective(1200px) rotateX(0deg) rotateY(0deg)";
  };
  const delay = (ms) => ({ animationDelay: `${ms}ms` });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      ref: sectionRef,
      onMouseMove: handleSectionMove,
      "aria-labelledby": "hero-heading",
      className: "contrast-dark hero-shell relative overflow-hidden pt-10 pb-20 lg:pt-20 lg:pb-28",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: HERO_CSS }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 overflow-hidden pointer-events-none select-none z-0", "aria-hidden": "true", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "video",
            {
              ref: videoRef,
              autoPlay: true,
              loop: true,
              muted: true,
              playsInline: true,
              preload: "auto",
              tabIndex: -1,
              className: "w-full h-full object-cover opacity-40 filter contrast-105 brightness-95",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "source",
                {
                  src: "https://res.cloudinary.com/dvikey3wc/video/upload/v1792926627/6998173-hd_1080_1920_25fps_abd3nd.mp4",
                  type: "video/mp4"
                }
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-[#061a33]/70 via-transparent to-[#061a33]/85" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-[#061a33]/60 via-transparent to-[#013777]/50" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0",
              style: {
                background: "radial-gradient(ellipse at center, transparent 40%, rgba(6, 26, 51, 0.65) 100%)"
              }
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ambient-glow-navy top-10 -left-20", "aria-hidden": "true" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ambient-glow-cyan top-40 -right-20", "aria-hidden": "true" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": "true", className: "ch-orb absolute -top-32 left-1/3 w-[28rem] h-[28rem] rounded-full bg-sky-500/10 blur-3xl pointer-events-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": "true", className: "ch-orb absolute bottom-0 -right-24 w-[24rem] h-[24rem] rounded-full bg-teal-400/10 blur-3xl pointer-events-none", style: { animationDelay: "-6s" } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            "aria-hidden": "true",
            className: "absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:28px_28px] [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_75%)]"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            "aria-hidden": "true",
            className: "absolute inset-0 pointer-events-none transition-opacity duration-500",
            style: {
              background: "radial-gradient(650px circle at var(--mx, 70%) var(--my, 30%), rgba(56,189,248,0.09), transparent 45%)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 relative z-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7 space-y-7", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ch-reveal flex flex-wrap items-center gap-2", style: delay(0), children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#fdc33e]/15 border border-[#fdc33e]/40 text-xs font-bold text-[#fdc33e]", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(BadgeCheck, { className: "w-3.5 h-3.5 text-[#fdc33e]", "aria-hidden": "true" }),
                  "NHIS Accredited"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-pill text-xs font-semibold text-sky-200", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex w-2 h-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ch-ring absolute inset-0 rounded-full bg-emerald-400" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative w-2 h-2 rounded-full bg-emerald-400" })
                  ] }),
                  "Chairman’s work in Nigeria since 1970 · Cairo Hospital established in 2019"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "h1",
                {
                  id: "hero-heading",
                  className: "ch-reveal text-[2.4rem] leading-[1.08] sm:text-6xl lg:text-[4.25rem] font-black text-white tracking-tight",
                  style: delay(120),
                  children: [
                    "Exemplary Healthcare",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-teal-300 to-blue-400 ch-gradient-text", children: "From Cairo to Abuja" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "ch-reveal flex flex-wrap items-baseline gap-x-2 text-lg sm:text-2xl text-slate-200 font-medium", style: delay(240), children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Stethoscope, { className: "w-5 h-5 sm:w-6 sm:h-6 text-teal-300 self-center", "aria-hidden": "true" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "International excellence in" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(RotatingSpecialty, { reduced })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "ch-reveal text-base sm:text-lg text-slate-300/90 max-w-2xl leading-relaxed", style: delay(340), children: "Abuja's multi-specialty referral centre, founded by dedicated Egyptian medical professionals and trusted by international organisations for advanced orthopaedics, rehabilitation and coordinated care abroad." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ch-reveal flex flex-col sm:flex-row sm:flex-wrap gap-3 pt-1", style: delay(460), children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: onOpenWhatsAppBooking,
                    className: "group relative overflow-hidden ch-shimmer inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-extrabold text-base shadow-[0_10px_40px_-10px_rgba(16,185,129,0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_50px_-10px_rgba(16,185,129,0.85)] active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 cursor-pointer",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-5 h-5", "aria-hidden": "true" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Book via WhatsApp" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4 transition-transform duration-300 group-hover:translate-x-1", "aria-hidden": "true" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: onExploreServices,
                    className: "hero-explore group inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl glass-panel border border-white/15 text-white font-bold text-base transition-all duration-300 hover:bg-white/10 hover:border-sky-400/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 cursor-pointer",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "w-4 h-4 text-sky-400 transition-transform group-hover:scale-110", "aria-hidden": "true" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Explore Specialties" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: (e) => {
                      e.preventDefault();
                      onExploreTourism();
                    },
                    className: "inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-gradient-to-r from-[#0b5599] to-[#013777] hover:from-[#0d63b2] hover:to-[#014392] border border-sky-400/30 text-white font-bold text-base transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-sky-500/20 cursor-pointer",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Plane, { className: "w-4 h-4 text-sky-300", "aria-hidden": "true" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Medical Tourism" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4 text-sky-300 transition-transform group-hover:translate-x-1", "aria-hidden": "true" })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ch-reveal pt-3", style: delay(660), children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 mb-3", children: "Trusted & enrolled by" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ch-marquee-wrap relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "ch-marquee flex w-max gap-3", children: [...TRUST_PARTNERS, ...TRUST_PARTNERS].map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "li",
                  {
                    "aria-hidden": i >= TRUST_PARTNERS.length,
                    className: "flex items-center gap-2 whitespace-nowrap px-4 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-sm font-semibold text-slate-200",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "w-4 h-4 text-emerald-400", "aria-hidden": "true" }),
                      p
                    ]
                  },
                  `${p}-${i}`
                )) }) })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-5 relative ch-reveal", style: delay(300), children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                ref: tiltRef,
                onMouseMove: handleTiltMove,
                onMouseLeave: resetTilt,
                className: "relative transition-transform duration-300 ease-out will-change-transform [transform-style:preserve-3d]",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ch-conic relative rounded-[1.75rem] p-[1.5px] shadow-[0_30px_80px_-20px_rgba(14,165,233,0.45)]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 rounded-[1.7rem] overflow-hidden bg-slate-950", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-[22rem] sm:h-[26rem]", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "img",
                      {
                        src: "/images/facility/building-2026.jpg",
                        alt: "Cairo Hospital & Rehabilitation Centre campus in Garki 2, Abuja",
                        width: 800,
                        height: 1e3,
                        loading: "eager",
                        decoding: "async",
                        className: "w-full h-full object-cover scale-105 transition-transform duration-[2000ms] hover:scale-110"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/10" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": "true", className: "ch-scan absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-transparent via-sky-300/10 to-transparent" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "button",
                      {
                        type: "button",
                        onClick: (e) => {
                          e.stopPropagation();
                          onExploreTourism();
                        },
                        className: "absolute top-4 left-4 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-950/85 backdrop-blur-md border border-sky-400/40 text-xs font-bold text-sky-200 hover:bg-sky-500 hover:text-white hover:border-sky-300 transition-all shadow-lg group/badge cursor-pointer",
                        title: "Go to Medical Tourism Hub",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Plane, { className: "w-3.5 h-3.5 text-sky-400 group-hover/badge:text-white transition-transform group-hover/badge:-rotate-45" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Medical Tourism" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3 h-3 text-sky-300 group-hover/badge:text-white group-hover/badge:translate-x-0.5 transition-transform" })
                        ]
                      }
                    ),
                    abujaTime && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-4 right-4 flex items-center justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-3 py-1.5 rounded-xl bg-slate-950/70 backdrop-blur-md border border-white/10 text-xs font-mono text-sky-300", children: [
                      "Abuja ",
                      abujaTime,
                      " WAT"
                    ] }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "photo-caption absolute bottom-0 inset-x-0 p-5 text-white", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(EcgLine, { className: "w-full h-10 mb-2" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-xs font-semibold text-sky-300 uppercase tracking-wider", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-3.5 h-3.5", "aria-hidden": "true" }),
                        "Garki 2 · Federal Capital Territory"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg sm:text-xl font-bold text-white mt-0.5", children: "Cairo Hospital & Rehabilitation Centre" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-400 mt-1", children: "On-site medical team available around the clock" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-slate-950 border-t border-sky-400/20 relative overflow-hidden", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": "true", className: "absolute top-0 right-0 w-48 h-full bg-gradient-to-l from-sky-500/10 to-transparent pointer-events-none" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "button",
                      {
                        onClick: (e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          onExploreTourism();
                        },
                        type: "button",
                        className: "w-full group p-4 sm:p-4.5 flex items-center justify-between gap-3 text-left bg-gradient-to-r from-slate-950 via-[#011a38] to-slate-950 hover:from-[#012654] hover:to-[#013777] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 cursor-pointer",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 sm:gap-3.5 min-w-0", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-11 h-11 rounded-xl bg-gradient-to-br from-sky-500/25 to-teal-500/20 border border-sky-400/40 flex items-center justify-center shrink-0 shadow-inner group-hover:scale-105 group-hover:border-sky-300 group-hover:bg-sky-500 group-hover:text-white transition-all", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plane, { className: "w-5 h-5 text-sky-400 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5", "aria-hidden": "true" }) }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm sm:text-base font-bold text-white tracking-tight group-hover:text-sky-200 transition-colors", children: "Medical Tourism Hub" }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-0.5 rounded-full bg-sky-500/20 border border-sky-400/40 text-[10px] font-semibold text-sky-300 uppercase tracking-wider hidden xs:inline-block", children: "6 Hubs" })
                              ] }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-slate-300 truncate mt-0.5", children: "Destinations: Dubai · UK · Nigeria · Egypt · USA · Turkey" })
                            ] })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-teal-500 group-hover:from-sky-400 group-hover:to-teal-400 text-white font-bold text-xs sm:text-sm shadow-md shadow-sky-500/30 group-hover:shadow-sky-500/50 group-hover:scale-105 shrink-0 transition-all", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Explore Hub" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4 transition-transform group-hover:translate-x-1" })
                          ] })
                        ]
                      }
                    )
                  ] })
                ] }) })
              }
            ) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: statsRef, className: "mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6", children: HOSPITAL_STATS.map((stat, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: `hero-stat-card group relative overflow-hidden glass-panel p-5 sm:p-6 rounded-2xl border border-white/10 transition-all duration-500 hover:border-sky-400/40 hover:-translate-y-1 ${statsShouldReveal ? "ch-reveal" : "opacity-0"}`,
              style: delay(idx * 120),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": "true", className: "absolute -top-12 -right-12 w-32 h-32 rounded-full bg-sky-400/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": "true", className: "absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-sky-400/60 to-transparent" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hero-stat-value text-3xl sm:text-5xl font-black tabular-nums", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CountUp, { value: String(stat.value), start: statsShouldReveal, reduced }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hero-stat-label mt-2 text-sm sm:text-base font-bold text-[#092545]", children: stat.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hero-stat-sublabel text-xs sm:text-sm font-medium text-[#475569]", children: stat.sublabel })
              ]
            },
            idx
          )) })
        ] })
      ]
    }
  );
};
const HERO_CSS = `
@keyframes ch-fade-up { from { opacity: 0; transform: translateY(28px); filter: blur(8px); } to { opacity: 1; transform: none; filter: blur(0); } }
.ch-reveal { opacity: 0; animation: ch-fade-up .9s cubic-bezier(.22,1,.36,1) forwards; }

@keyframes ch-float { 0%,100% { translate: 0 0; } 50% { translate: 0 -12px; } }
.ch-float { animation: ch-float 6s ease-in-out infinite; }
.ch-float-delayed { animation: ch-float 7s ease-in-out 1.5s infinite; }

@keyframes ch-ecg { from { stroke-dashoffset: 1100; } to { stroke-dashoffset: 0; } }
.ch-ecg-trace { stroke-dasharray: 160 940; animation: ch-ecg 3.2s linear infinite; }

@keyframes ch-shimmer { from { transform: translateX(-150%) skewX(-20deg); } to { transform: translateX(350%) skewX(-20deg); } }
.ch-shimmer::after { content: ''; position: absolute; inset: 0; width: 35%; background: linear-gradient(90deg, transparent, rgba(255,255,255,.35), transparent); animation: ch-shimmer 3.8s ease-in-out infinite; pointer-events: none; }

@keyframes ch-heartbeat { 0%,100% { transform: scale(1); } 14% { transform: scale(1.22); } 28% { transform: scale(1); } 42% { transform: scale(1.14); } 70% { transform: scale(1); } }
.ch-heartbeat { animation: ch-heartbeat 1.5s ease-in-out infinite; }

@keyframes ch-ring { 0% { transform: scale(.9); opacity: .75; } 100% { transform: scale(2); opacity: 0; } }
.ch-ring { animation: ch-ring 2s cubic-bezier(0,0,.2,1) infinite; }

@keyframes ch-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
.ch-marquee { animation: ch-marquee 32s linear infinite; }
.ch-marquee-wrap:hover .ch-marquee { animation-play-state: paused; }

@keyframes ch-gradient-pan { 0%,100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
.ch-gradient-text { background-size: 200% auto; animation: ch-gradient-pan 6s ease-in-out infinite; }

@keyframes ch-orb { 0%,100% { transform: translate(0,0) scale(1); } 33% { transform: translate(40px,-30px) scale(1.1); } 66% { transform: translate(-30px,20px) scale(.95); } }
.ch-orb { animation: ch-orb 18s ease-in-out infinite; }

@keyframes ch-scan { 0% { transform: translateY(-100%); } 100% { transform: translateY(500%); } }
.ch-scan { animation: ch-scan 6s ease-in-out infinite; }

@keyframes ch-spin { to { transform: rotate(360deg); } }
.ch-conic { overflow: hidden; background: rgba(255,255,255,.08); }
.ch-conic::before { content: ''; position: absolute; inset: -60%; background: conic-gradient(from 0deg, transparent 0 65%, #38bdf8 78%, #2dd4bf 88%, transparent 100%); animation: ch-spin 7s linear infinite; }

@media (prefers-reduced-motion: reduce) {
  .ch-reveal, .ch-float, .ch-float-delayed, .ch-ecg-trace, .ch-heartbeat, .ch-ring,
  .ch-marquee, .ch-gradient-text, .ch-orb, .ch-scan, .ch-conic::before {
    animation: none !important; opacity: 1 !important; filter: none !important; translate: none !important;
  }
  .ch-shimmer::after { display: none; }
  .ch-ecg-trace { stroke-dasharray: none; }
}
`;
const EmergencyBanner = ({
  onOpenWhatsAppBooking
}) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative -mt-6 sm:-mt-10 z-20 max-w-7xl mx-auto px-4 sm:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { variant: "scale", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-panel-dark rounded-3xl p-6 sm:p-8 border border-sky-400/30 shadow-2xl relative overflow-hidden bg-gradient-to-r from-[#012f66] via-[#013777] to-[#08284d]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-16 -right-16 w-48 h-48 bg-sky-400/20 rounded-full blur-2xl pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 max-w-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5 flex-wrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/20 border border-rose-400/40 text-rose-100 font-extrabold text-xs tracking-wider uppercase", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Ambulance, { className: "w-3.5 h-3.5" }),
            "Emergency Department & Ambulance"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sky-300/60 hidden sm:inline", children: "|" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-sky-100 font-semibold flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "w-3.5 h-3.5 text-emerald-300" }),
            "Listed in the supplied profile"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl sm:text-2xl font-black text-white leading-tight", children: "Call to Confirm Current Availability" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs sm:text-sm text-sky-100 leading-relaxed font-medium", children: "Cairo Hospital’s profile lists an Emergency Department and Ambulance Service. Call the hospital directly to confirm current access and arrangements. For a life-threatening emergency, do not wait for a WhatsApp reply." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3 w-full lg:w-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: `tel:${HOSPITAL_CONTACT.phone1}`,
            className: "flex-1 sm:flex-none inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-2xl bg-rose-600 hover:bg-rose-500 text-white font-black text-sm shadow-lg shadow-rose-600/30 transition-all hover:scale-105 active:scale-95",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(PhoneCall, { className: "w-4 h-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                "Call Hospital: ",
                HOSPITAL_CONTACT.phone1
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: onOpenWhatsAppBooking,
            className: "flex-1 sm:flex-none glass-button-whatsapp inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl text-white font-extrabold text-sm shadow-lg transition-all hover:scale-105 active:scale-95 cursor-pointer",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-4 h-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "WhatsApp for General Inquiries" })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 pt-4 border-t border-white/15 flex flex-wrap items-center justify-between text-xs text-sky-100 gap-2 font-medium", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-3.5 h-3.5 text-sky-300 flex-shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "16 Oke Agbe Street, Garki 2, Abuja, FCTA" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-amber-200 font-bold", children: "Call to confirm service access and arrangements" })
    ] })
  ] }) }) });
};
const AboutUs = ({
  onOpenWhatsAppBooking,
  onNavigateAbout
}) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "about", className: "py-10 sm:py-16 lg:py-20 relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ambient-glow-navy top-20 right-10" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-8 sm:space-y-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { variant: "up", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-3xl mx-auto space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-bold text-[#013777] uppercase tracking-wider", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Compass, { className: "w-4 h-4 text-[#013777]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "About Cairo Hospital Abuja" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-5xl font-black text-[#092545] tracking-tight", children: "A Beacon of Quality Healthcare" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm sm:text-base text-[#1e293b] font-medium leading-relaxed", children: "Founded in 2019 by visionary Egyptian medical professionals with deep roots in Nigerian healthcare dating back to 1970, Cairo Hospital unites international surgical excellence and compassionate care in Abuja." })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { variant: "up", delay: 80, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-panel p-6 sm:p-7 rounded-2xl border border-slate-200 bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-12 h-12 rounded-xl bg-gradient-to-br from-[#013777] via-[#0b5599] to-[#0284c7] text-white flex flex-col items-center justify-center font-black shadow-lg", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-bold text-sky-200 tracking-widest", children: "EST." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg leading-none", children: "2019" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-black text-[#092545] mb-2", children: "Founded in Abuja" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-[#334155] leading-relaxed", children: "The first Egyptian-led hospital in Abuja, established under Cairo Rehabilitation Centre (CRC), expanded from outpatient clinic to advanced tertiary facility." })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { variant: "up", delay: 140, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-panel p-6 sm:p-7 rounded-2xl border border-teal-200 bg-gradient-to-br from-white to-teal-50/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl bg-teal-800 text-white flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "w-6 h-6" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-black text-teal-900 mb-2", children: "Our Vision" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-[#334155] leading-relaxed", children: "International-standard multispecialty hospital and regional referral destination for patients across Nigeria & West Africa." })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { variant: "up", delay: 200, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-panel p-6 sm:p-7 rounded-2xl border border-teal-200 bg-gradient-to-br from-white to-teal-50/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl bg-teal-800 text-white flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-6 h-6" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-black text-teal-900 mb-2", children: "Our Motive" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-[#334155] leading-relaxed", children: "Solving health challenges across Nigeria & West Africa with cutting-edge technology and compassionate patient-centered care." })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { variant: "up", delay: 260, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center pt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: onNavigateAbout,
          className: "inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#013777] to-[#0284c7] text-white font-bold text-sm hover:shadow-2xl hover:shadow-[#013777]/30 hover:-translate-y-0.5 transition-all duration-300 group",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "w-5 h-5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Our Full Story" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-5 h-5 group-hover:translate-x-1 transition-transform" })
          ]
        }
      ) }) })
    ] })
  ] });
};
const ServicesSection = ({
  onSelectServiceForBooking,
  onNavigateServices
}) => {
  const highlightServices = [
    {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Bone, { className: "w-6 h-6 text-[#013777]" }),
      title: "Orthopedic Surgery",
      description: "Advanced surgical treatments for bones, joints, and musculoskeletal conditions."
    },
    {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Dna, { className: "w-6 h-6 text-teal-600" }),
      title: "Orthobiologics (Stem Cells)",
      description: "Regenerative therapy using stem cells, PRP, and advanced biologics."
    },
    {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Ambulance, { className: "w-6 h-6 text-rose-600" }),
      title: "Emergency Services",
      description: "24/7 emergency care and ambulance services for urgent medical needs."
    },
    {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Footprints, { className: "w-6 h-6 text-emerald-600" }),
      title: "Physiotherapy & Rehabilitation",
      description: "Comprehensive physical therapy and rehabilitation programs."
    },
    {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Baby, { className: "w-6 h-6 text-pink-600" }),
      title: "Obstetrics & Gynaecology",
      description: "Complete women's health services including prenatal and postnatal care."
    },
    {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Earth, { className: "w-6 h-6 text-[#013777]" }),
      title: "Medical Tourism",
      description: "International patient services with visa, accommodation, and care coordination."
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "services", className: "py-10 sm:py-16 lg:py-20 relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ambient-glow-cyan top-40 left-10" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-8 sm:space-y-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { variant: "up", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-3xl mx-auto space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-bold text-[#013777] uppercase tracking-wider", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "w-4 h-4 text-[#013777]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Comprehensive Tertiary Healthcare" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-5xl font-black text-[#092545] tracking-tight", children: "Our Medical Services & Specialties" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm sm:text-base text-[#1e293b] font-medium leading-relaxed", children: "From orthopedics and regenerative medicine to emergency care and medical tourism—explore our comprehensive range of specialized services." })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6", children: highlightServices.map((service, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { variant: "up", delay: idx * 80, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-panel glass-panel-hover p-6 sm:p-7 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 space-y-4 h-full flex flex-col", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center shadow-xs", children: service.icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-black text-[#092545] leading-snug mb-2", children: service.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-[#334155] leading-relaxed", children: service.description })
        ] })
      ] }) }, service.title)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { variant: "up", delay: 480, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center pt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: onNavigateServices,
          className: "inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#013777] to-[#0284c7] text-white font-bold text-sm hover:shadow-2xl hover:shadow-[#013777]/30 hover:-translate-y-0.5 transition-all duration-300 group",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "w-5 h-5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "View All Services" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-5 h-5 group-hover:translate-x-1 transition-transform" })
          ]
        }
      ) }) })
    ] })
  ] });
};
const OrthobiologicsHighlight = ({
  onOpenWhatsAppBooking,
  onNavigateServices
}) => {
  const highlightProcedures = [
    "Stem Cell Therapy for joint regeneration",
    "Platelet-Rich Plasma (PRP) injections",
    "Bone Marrow Aspirate Concentrate (BMAC)",
    "BEMER Therapy for enhanced microcirculation"
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "orthobiologics", className: "py-10 sm:py-16 lg:py-20 relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ambient-glow-navy top-20 left-1/3" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-8 sm:space-y-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { variant: "up", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-3xl mx-auto space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-bold text-[#013777] uppercase tracking-wider", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Dna, { className: "w-4 h-4 text-[#013777]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Regenerative Medicine Excellence" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-5xl font-black text-[#092545] tracking-tight", children: "Orthobiologics & Stem Cell Therapy" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm sm:text-base text-[#1e293b] font-medium leading-relaxed", children: "Advanced regenerative treatments using stem cells, PRP, and biologics for musculoskeletal conditions, sports medicine, and spinal care." })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { variant: "scale", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "contrast-dark glass-panel-dark p-8 sm:p-10 rounded-3xl border border-teal-400/40 shadow-xl bg-gradient-to-r from-[#012f66] via-[#013777] to-[#08284d]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center shadow-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-7 h-7 text-white" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-black !text-white leading-tight", children: "Cutting-Edge Regenerative Care" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm !text-teal-200 font-semibold", children: "Stem-cell based therapies for joint & tissue repair" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6", children: highlightProcedures.map((proc, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-5 h-5 !text-teal-300 flex-shrink-0 mt-0.5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm !text-white font-medium leading-snug", children: proc })
        ] }, idx)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3 pt-4 border-t border-white/10", children: [
          onNavigateServices && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: onNavigateServices,
              className: "inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 !text-white font-bold text-sm hover:bg-white/20 transition-all group cursor-pointer",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Learn About Orthobiologics" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4 group-hover:translate-x-1 transition-transform" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: onOpenWhatsAppBooking,
              className: "inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-teal-500 hover:bg-teal-600 !text-white font-bold text-sm transition-all shadow-lg shadow-teal-500/30 cursor-pointer",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Dna, { className: "w-4 h-4" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Book Consultation" })
              ]
            }
          )
        ] })
      ] }) })
    ] })
  ] });
};
const FacilityGallery = () => {
  const [selectedFacility, setSelectedFacility] = reactExports.useState(null);
  const [filterCategory, setFilterCategory] = reactExports.useState("All");
  const categories = ["All", ...Array.from(new Set(FACILITY_GALLERY.map((item) => item.category)))];
  const filteredItems = FACILITY_GALLERY.filter((item) => {
    if (filterCategory === "All") return true;
    return item.category === filterCategory;
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "facilities", className: "py-10 sm:py-16 lg:py-20 relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ambient-glow-cyan bottom-10 right-10 pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ambient-glow-navy top-10 left-10 pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-10 sm:space-y-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { variant: "up", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-3xl mx-auto space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-bold text-[#013777] uppercase tracking-wider", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "w-4 h-4 text-[#013777]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "People & Clinical Practice" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-5xl font-black text-[#092545] tracking-tight", children: "Images from the Hospital Profile" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm sm:text-base text-[#2d435e] leading-relaxed", children: "These photographs were extracted from the supplied Cairo Hospital profile. They show hospital representatives, the team, and the clinical scope featured in the profile; they are not a facilities or equipment inventory." })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { variant: "up", delay: 90, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center gap-2 overflow-x-auto pb-2 text-xs font-bold scrollbar-none", children: categories.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setFilterCategory(cat),
          className: `px-5 py-2.5 rounded-xl transition-all cursor-pointer whitespace-nowrap ${filterCategory === cat ? "bg-[#013777] text-white font-black shadow-md shadow-[#013777]/25 scale-105" : "bg-white/80 border border-slate-200 text-[#2d435e] hover:text-[#013777] hover:bg-white shadow-xs"}`,
          children: cat
        },
        cat
      )) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6", children: filteredItems.map((item, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Reveal,
        {
          variant: "scale",
          delay: idx % 4 * 75,
          className: "h-full",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              onClick: () => setSelectedFacility(item),
              className: "h-full glass-panel rounded-3xl overflow-hidden border border-slate-200/90 group cursor-pointer glass-panel-hover flex flex-col justify-between bg-white/90 shadow-sm",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: `relative h-52 overflow-hidden ${item.image.endsWith(".svg") ? "bg-gradient-to-br from-[#edf4fc] to-[#c9dced]" : "bg-slate-100"}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "img",
                        {
                          src: item.image,
                          alt: item.title,
                          className: `w-full h-full ${item.image.endsWith(".svg") ? "object-contain group-hover:scale-105" : "object-cover group-hover:scale-108"} transition-transform duration-500`
                        }
                      ),
                      !item.image.endsWith(".svg") && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-[#012654]/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-3 left-3 text-[10px] font-extrabold tracking-wide px-2.5 py-1 rounded-lg bg-[#061a33]/75 backdrop-blur-md !text-white border border-white/25 shadow-md shadow-black/25", children: item.category }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-3 right-3 w-8 h-8 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-[#013777] opacity-0 group-hover:opacity-100 transition-opacity shadow-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Maximize2, { className: "w-4 h-4" }) })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4.5 space-y-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-black text-[#092545] group-hover:text-[#013777] transition-colors", children: item.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-[#2d435e] line-clamp-2 leading-relaxed", children: item.description })
                ] })
              ]
            }
          )
        },
        `${filterCategory}-${item.id}`
      )) })
    ] }),
    selectedFacility && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#011633]/70 backdrop-blur-md", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-4xl w-full rounded-3xl border border-slate-200 overflow-hidden shadow-2xl space-y-4 p-6 sm:p-7 bg-white text-[#2d435e]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between pb-3 border-b border-slate-100", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-black text-[#013777] uppercase tracking-wider", children: selectedFacility.category }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg sm:text-xl font-black text-[#092545] mt-0.5", children: selectedFacility.title })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setSelectedFacility(null),
            className: "p-2 text-slate-400 hover:text-slate-800 rounded-xl bg-slate-100 transition-colors cursor-pointer",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-6 h-6" })
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: `relative h-80 sm:h-[420px] rounded-2xl overflow-hidden border border-slate-200 shadow-inner ${selectedFacility.image.endsWith(".svg") ? "bg-gradient-to-br from-[#edf4fc] via-[#dceaf7] to-[#c9dced]" : ""}`,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: selectedFacility.image,
              alt: selectedFacility.title,
              className: `w-full h-full ${selectedFacility.image.endsWith(".svg") ? "object-contain" : "object-cover"}`
            }
          )
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs sm:text-sm text-[#2d435e] leading-relaxed", children: selectedFacility.description }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between pt-3 border-t border-slate-100 text-xs text-slate-500", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-[#013777]", children: "16 Oke Agbe Street, Garki 2, Abuja" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setSelectedFacility(null),
            className: "px-5 py-2.5 rounded-xl bg-[#013777] text-white font-bold cursor-pointer hover:bg-[#0b5599] transition-colors",
            children: "Close Preview"
          }
        )
      ] })
    ] }) })
  ] });
};
const MedicalTourism = ({
  onOpenWhatsAppBooking,
  onNavigateTourism
}) => {
  const destinations = ["Dubai", "United Kingdom", "Egypt", "India", "Jordan", "Tunisia"];
  const keyFeatures = [
    "Visa provision and travel tickets coordination",
    "Accommodation and transport arrangements",
    "Comprehensive medical plan with dedicated representative follow-up",
    "Continued care at Cairo Hospital after return to Nigeria"
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "medical-tourism", className: "py-10 sm:py-16 lg:py-20 relative overflow-hidden bg-gradient-to-b from-[#001d40] via-[#012654] to-[#001d40]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ambient-glow-cyan top-10 right-20" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-8 sm:space-y-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { variant: "up", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-3xl mx-auto space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fdc33e]/20 border border-[#fdc33e]/40 text-xs font-bold text-[#fdc33e] uppercase tracking-wider", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Plane, { className: "w-4 h-4 text-[#fdc33e]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "International Patient Services" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-5xl font-black text-white tracking-tight", children: "Medical Tourism Hub" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base sm:text-lg text-white font-bold leading-relaxed", children: "The listed support includes visa provision, tickets, accommodation, transport, and a medical plan. A representative follows up until the patient returns to Nigeria, with follow-up at Cairo Hospital after return." })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { variant: "scale", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "contrast-dark glass-panel-dark p-8 sm:p-10 rounded-3xl border border-[#38bdf8]/40 shadow-2xl bg-gradient-to-br from-[#012f66]/80 via-[#013777]/80 to-[#08284d]/80 backdrop-blur-sm space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-base font-black !text-white mb-3 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Earth, { className: "w-5 h-5 !text-[#fdc33e]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Available Destinations" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: destinations.map((dest) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-xs font-bold !text-white backdrop-blur-sm",
              children: dest
            },
            dest
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 pt-4 border-t border-white/10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-black !text-white", children: "What We Offer" }),
          keyFeatures.map((feature, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-5 h-5 !text-[#38bdf8] flex-shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm !text-white/90 font-medium leading-snug", children: feature })
          ] }, idx))
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3 pt-4 border-t border-white/10", children: [
          onNavigateTourism && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: onNavigateTourism,
              className: "inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#fdc33e] hover:bg-[#e5b12f] !text-[#092545] font-bold text-sm transition-all shadow-lg shadow-[#fdc33e]/30 group cursor-pointer",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Explore Medical Tourism Hub" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4 group-hover:translate-x-1 transition-transform" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: onOpenWhatsAppBooking,
              className: "inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 !text-white font-bold text-sm transition-all cursor-pointer",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Plane, { className: "w-4 h-4" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Inquire Now" })
              ]
            }
          )
        ] })
      ] }) })
    ] })
  ] });
};
const PartnersSection = ({
  onOpenWhatsAppBooking
}) => {
  const accreditations = ACCREDITATIONS_DATA.filter((item) => item.type === "accreditation");
  const enrolled = ACCREDITATIONS_DATA.filter((item) => item.type === "enrolled");
  const groups = [
    { title: "Accreditation", note: "Listed under “Accreditation” in the supplied profile", items: accreditations },
    { title: "Enrolled Organisations", note: "Listed under “Enrolled Organisations” in the supplied profile", items: enrolled }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "accreditations", className: "py-10 sm:py-16 lg:py-20 relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ambient-glow-navy top-20 left-10 pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-8 sm:space-y-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { variant: "up", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-3xl mx-auto space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-bold text-[#013777] uppercase tracking-wider", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "w-4 h-4 text-[#013777]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Institutional Listings" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-5xl font-black text-[#092545] tracking-tight", children: "Accreditations & Enrolled Organisations" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm sm:text-base text-[#2d435e] leading-relaxed", children: "Names and categories are reproduced from the supplied hospital profile. This list does not imply a commercial partnership or guarantee of service availability." })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: groups.map((group, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { variant: index === 0 ? "left" : "right", delay: index * 100, className: "h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200/90 bg-white/90 shadow-sm space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 pb-4 border-b border-slate-100", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-11 h-11 rounded-2xl bg-sky-50 text-[#013777] border border-sky-100 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "w-5 h-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-black text-[#092545]", children: group.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-[#2d435e] font-medium", children: group.note })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: group.items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-2xl bg-slate-50/80 border border-slate-200/70", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-black text-[#013777]", children: item.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-[#2d435e] mt-1 leading-relaxed", children: item.description })
        ] }, item.name)) })
      ] }) }, group.title)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { variant: "up", delay: 120, className: "text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: onOpenWhatsAppBooking,
          className: "glass-button-whatsapp inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-bold text-sm shadow-md cursor-pointer",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-4 h-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Ask About an Appointment" })
          ]
        }
      ) })
    ] })
  ] });
};
const TeamSection = ({
  onOpenWhatsAppBooking,
  onNavigateTeam
}) => {
  const chairman = TEAM_MEMBERS.find((m) => m.id === "dr-ahmed-shaker") || TEAM_MEMBERS[0];
  const ceo = TEAM_MEMBERS.find((m) => m.id === "dr-mohammed-hesham") || TEAM_MEMBERS[1];
  const featuredTeam = TEAM_MEMBERS.filter(
    (m) => m.id !== chairman.id && m.id !== ceo.id
  ).slice(0, 2);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "team", className: "py-10 sm:py-16 lg:py-20 relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ambient-glow-navy top-40 left-10 pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ambient-glow-cyan bottom-20 right-10 pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-8 sm:space-y-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { variant: "up", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-3xl mx-auto space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs font-bold text-[#013777] tracking-wide flex items-center justify-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-4 h-4 text-[#013777]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Clinical Leadership & Medical Team" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-5xl font-black text-[#061a33] tracking-tight", children: "Executive Leadership & Medical Specialists" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm sm:text-base text-[#1e293b] font-medium leading-relaxed", children: "Led by Dr. Ahmed Shaker (Chairman) and Dr. Mohammed Hesham Shaker (Founder, CEO & CMD), bringing decades of Egyptian and international clinical excellence to Abuja, Nigeria." })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { variant: "scale", className: "h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-panel-dark contrast-dark h-full relative rounded-[2rem] overflow-hidden border border-[#fdc33e]/40 shadow-xl bg-gradient-to-br from-[#041830] via-[#012859] to-[#013777] flex flex-col justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 w-full bg-gradient-to-r from-[#fdc33e] via-[#38bdf8] to-transparent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 sm:p-8 space-y-6 flex-1 flex flex-col justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-24 h-28 sm:w-28 sm:h-32 rounded-xl overflow-hidden border-2 border-[#fdc33e]/60 bg-[#061a33] shadow-lg shrink-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: chairman.image,
                      alt: chairman.name,
                      className: "w-full h-full object-cover object-top"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#031124] to-transparent" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#fdc33e]/20 text-[10px] sm:text-[11px] font-bold !text-[#fdc33e] border border-[#fdc33e]/40 mb-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "w-3 h-3" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Office of the Chairman" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl sm:text-2xl font-black !text-white leading-tight", children: chairman.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs sm:text-sm !text-[#bae6fd] font-semibold mt-0.5", children: chairman.role }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] !text-[#fdc33e] font-medium mt-1", children: "MRCOG · Ain Shams University" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5 rounded-xl bg-white/5 border border-white/10", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] !text-[#fdc33e] font-bold", children: "Nigeria Leadership" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-base font-black !text-white", children: "Since 1970" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5 rounded-xl bg-white/5 border border-white/10", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] !text-[#fdc33e] font-bold", children: "Hospitals Managed" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-base font-black !text-white", children: "130+ Hospitals" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs !text-sky-100/95 leading-relaxed line-clamp-3", children: "Former NEPA Medical Director (1970–1991), managed AGUDA Hospital in Lagos and Katameya Hospital until 2019. Established Cairo Hospital Abuja in 2019." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-2 flex flex-wrap items-center gap-2.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => onOpenWhatsAppBooking(chairman.name),
                  className: "glass-button-whatsapp flex-1 px-4 py-2.5 rounded-xl text-white font-extrabold text-xs inline-flex items-center justify-center gap-1.5 transition-transform hover:scale-102 active:scale-98 cursor-pointer shadow-md",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Book with Chairman" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: onNavigateTeam,
                  className: "px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 !text-white font-bold text-xs inline-flex items-center justify-center transition-colors cursor-pointer",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "View Dossier" })
                }
              )
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { variant: "scale", delay: 120, className: "h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-panel-dark contrast-dark h-full relative rounded-[2rem] overflow-hidden border border-[#fdc33e]/40 shadow-xl bg-gradient-to-br from-[#041830] via-[#012859] to-[#013777] flex flex-col justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 w-full bg-gradient-to-r from-[#fdc33e] via-[#38bdf8] to-transparent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 sm:p-8 space-y-6 flex-1 flex flex-col justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-24 h-28 sm:w-28 sm:h-32 rounded-xl overflow-hidden border-2 border-[#fdc33e]/60 bg-[#061a33] shadow-lg shrink-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: ceo.image,
                      alt: ceo.name,
                      className: "w-full h-full object-cover object-top"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#031124] to-transparent" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#fdc33e]/20 text-[10px] sm:text-[11px] font-bold !text-[#fdc33e] border border-[#fdc33e]/40 mb-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "w-3 h-3" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Founder, CEO & CMD" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl sm:text-2xl font-black !text-white leading-tight", children: ceo.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs sm:text-sm !text-[#bae6fd] font-semibold mt-0.5", children: "Orthopedic Consultant" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] !text-[#fdc33e] font-medium mt-1", children: "Ain Shams (1997) · ASRIC African Union" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5 rounded-xl bg-white/5 border border-white/10", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] !text-[#fdc33e] font-bold", children: "Ain Shams Medical" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-base font-black !text-white", children: "Graduated 1997" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5 rounded-xl bg-white/5 border border-white/10", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] !text-[#fdc33e] font-bold", children: "Stuttgart Team (Kuwait)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-base font-black !text-white", children: "10 Yrs Trauma" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs !text-sky-100/95 leading-relaxed line-clamp-3", children: "Specialized in Arthroplasty, trauma surgeries, and stem cells regenerative therapy. 10 years at Nozha Int. Hospital Cairo & 10 years with Stuttgart German Orthopedic Team at Elrazi Center Kuwait." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-2 flex flex-wrap items-center gap-2.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => onOpenWhatsAppBooking(ceo.name),
                  className: "glass-button-whatsapp flex-1 px-4 py-2.5 rounded-xl text-white font-extrabold text-xs inline-flex items-center justify-center gap-1.5 transition-transform hover:scale-102 active:scale-98 cursor-pointer shadow-md",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Book with Dr. Mohammed Hesham" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: onNavigateTeam,
                  className: "px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 !text-white font-bold text-xs inline-flex items-center justify-center transition-colors cursor-pointer",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "View Dossier" })
                }
              )
            ] })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: featuredTeam.map((member, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { variant: "up", delay: idx * 120, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass-panel p-6 rounded-2xl border border-slate-200 bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative w-20 h-20 rounded-xl overflow-hidden border-2 border-[#013777]/20 bg-slate-100 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: member.image,
            alt: member.name,
            className: "w-full h-full object-cover object-top"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-black text-[#092545] leading-tight", children: member.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-[#013777] font-bold mt-1", children: member.role }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-[#334155] mt-2 line-clamp-2", children: member.specialty || member.title })
        ] })
      ] }) }) }, member.id)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { variant: "up", delay: 240, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center pt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: onNavigateTeam,
          className: "inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#013777] to-[#0284c7] text-white font-bold text-sm hover:shadow-2xl hover:shadow-[#013777]/30 hover:-translate-y-0.5 transition-all duration-300 group",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-5 h-5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Meet the Full Team" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-5 h-5 group-hover:translate-x-1 transition-transform" })
          ]
        }
      ) }) })
    ] })
  ] });
};
const ContactUs = () => {
  const [name, setName] = reactExports.useState("");
  const [email, setEmail] = reactExports.useState("");
  const [phone, setPhone] = reactExports.useState("");
  const [message, setMessage] = reactExports.useState("");
  const [submitted, setSubmitted] = reactExports.useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const waText = `📍 *General Inquiry for Cairo Hospital Abuja*
Name: ${name}
Phone: ${phone}
Email: ${email}
Message: ${message}`;
    const url = `https://wa.me/${HOSPITAL_CONTACT.whatsappNumber}?text=${encodeURIComponent(waText)}`;
    window.open(url, "_blank");
    setSubmitted(true);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "contact", className: "py-10 sm:py-16 lg:py-20 relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ambient-glow-navy bottom-10 left-10 pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ambient-glow-cyan top-10 right-10 pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-10 sm:space-y-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { variant: "up", className: "text-center max-w-3xl mx-auto space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-bold text-[#013777] uppercase tracking-wider", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-4 h-4 text-[#013777]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Connect with Us · Abuja Healthcare Hub" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-5xl font-black text-[#092545] tracking-tight", children: "Contact Cairo Hospital Abuja" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm sm:text-base text-[#2d435e] leading-relaxed", children: "Located in Garki 2, Abuja. The supplied hospital profile lists an Emergency Department and Ambulance Service; call the hospital directly to confirm current access and availability." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { variant: "up", delay: 0, className: "h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full glass-panel p-6 rounded-3xl border border-slate-200/90 space-y-3 glass-panel-hover bg-white/90 shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-2xl bg-sky-50 text-[#013777] border border-sky-100 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-6 h-6 text-[#013777]" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-black text-[#092545]", children: "Physical Address" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-[#2d435e] leading-relaxed", children: HOSPITAL_CONTACT.address }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-2 text-[11px] font-bold text-[#013777]", children: "Garki 2 · Abuja · FCTA" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { variant: "up", delay: 70, className: "h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full glass-panel p-6 rounded-3xl border border-rose-200 space-y-3 glass-panel-hover bg-white/90 shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 border border-rose-100 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-6 h-6 text-rose-600" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-black text-[#092545]", children: "Hospital Phone" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1 text-xs text-[#2d435e] font-mono font-bold", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `tel:${HOSPITAL_CONTACT.phone1}`, className: "hover:text-[#013777] hover:underline", children: HOSPITAL_CONTACT.phone1 }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-2 text-[11px] font-bold text-rose-700", children: "For emergency and ambulance access, call to confirm current availability" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { variant: "up", delay: 140, className: "h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full glass-panel p-6 rounded-3xl border border-emerald-200 space-y-3 glass-panel-hover bg-white/90 shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-6 h-6 text-emerald-600 fill-current" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-black text-[#092545]", children: "WhatsApp Desk" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-[#2d435e] leading-relaxed", children: "Appointment requests, report follow-ups, and medical-travel inquiries. Response times may vary." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: `https://wa.me/${HOSPITAL_CONTACT.whatsappNumber}`,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "text-xs font-bold text-emerald-700 hover:text-emerald-800 underline flex items-center gap-1",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                "Chat on WhatsApp (",
                HOSPITAL_CONTACT.whatsappDisplay,
                ")"
              ] })
            }
          ) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { variant: "up", delay: 210, className: "h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full glass-panel p-6 rounded-3xl border border-slate-200/90 space-y-3 glass-panel-hover bg-white/90 shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-2xl bg-teal-50 text-teal-700 border border-teal-100 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-6 h-6 text-teal-700" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-black text-[#092545]", children: "Official Email" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-[#2d435e] font-mono font-medium", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `mailto:${HOSPITAL_CONTACT.email}`, className: "hover:text-[#013777] hover:underline", children: HOSPITAL_CONTACT.email }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-2 text-[11px] font-bold text-teal-700", children: "Administrative & Referral Enquiries" })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { variant: "left", delay: 60, className: "lg:col-span-7 flex", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full glass-panel rounded-3xl overflow-hidden border border-slate-200/90 p-2.5 flex flex-col justify-between bg-white shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative w-full h-80 sm:h-[400px] rounded-2xl overflow-hidden border border-slate-200 shadow-inner", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "iframe",
            {
              title: "Cairo Hospital Abuja Location Map",
              src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.3546736237256!2d7.487841375822394!3d9.031388089069792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0ba1dc0c634d%3A0xbce5c777e5e34789!2sGarki%202%2C%20Abuja!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng",
              width: "100%",
              height: "100%",
              style: { border: 0 },
              allowFullScreen: false,
              loading: "lazy",
              referrerPolicy: "no-referrer-when-downgrade"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 flex flex-wrap items-center justify-between text-xs text-[#2d435e] gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Navigation, { className: "w-4 h-4 text-[#013777]" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "16 Oke Agbe Street, Garki 2, Abuja" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "https://maps.google.com/?q=16+Oke+Agbe+Street+Garki+2+Abuja",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "text-xs font-bold text-[#013777] hover:underline",
                children: "Open in Maps App"
              }
            )
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { variant: "right", delay: 140, className: "lg:col-span-5 flex", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200/90 space-y-5 bg-white/95 shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-black text-[#092545]", children: "Send Direct Inquiry" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-[#2d435e] mt-1", children: "Have a question or looking for corporate enrolment? Fill out this quick form to connect with our administrative team." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold text-[#013777] uppercase mb-1", children: "Full Name *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  required: true,
                  value: name,
                  onChange: (e) => setName(e.target.value),
                  placeholder: "Your Name",
                  className: "w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[#092545] text-sm focus:outline-none focus:ring-2 focus:ring-[#013777] focus:bg-white placeholder:text-slate-400 font-medium"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold text-[#013777] uppercase mb-1", children: "Phone *" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "tel",
                    required: true,
                    value: phone,
                    onChange: (e) => setPhone(e.target.value),
                    placeholder: "Phone Number",
                    className: "w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[#092545] text-sm focus:outline-none focus:ring-2 focus:ring-[#013777] focus:bg-white placeholder:text-slate-400 font-medium"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold text-[#013777] uppercase mb-1", children: "Email" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "email",
                    value: email,
                    onChange: (e) => setEmail(e.target.value),
                    placeholder: "Email Address",
                    className: "w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[#092545] text-sm focus:outline-none focus:ring-2 focus:ring-[#013777] focus:bg-white placeholder:text-slate-400 font-medium"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold text-[#013777] uppercase mb-1", children: "Your Inquiry *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "textarea",
                {
                  required: true,
                  rows: 3,
                  value: message,
                  onChange: (e) => setMessage(e.target.value),
                  placeholder: "Tell us how we can help you...",
                  className: "w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[#092545] text-sm focus:outline-none focus:ring-2 focus:ring-[#013777] focus:bg-white placeholder:text-slate-400 font-medium"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "submit",
                className: "w-full glass-button-whatsapp py-3 rounded-xl text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 hover:scale-102 active:scale-98 transition-transform cursor-pointer shadow-md",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-4 h-4 fill-white text-emerald-600" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Send via WhatsApp Coordinator" })
                ]
              }
            )
          ] })
        ] }) })
      ] })
    ] })
  ] });
};
const AccreditationSection = () => {
  const accreditedBy = ACCREDITATIONS_DATA.filter((a) => a.type === "accreditation");
  const enrolledOrgs = ACCREDITATIONS_DATA.filter((a) => a.type === "enrolled");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-10 sm:py-16 lg:py-20 relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ambient-glow-navy top-10 right-10 pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-8 sm:space-y-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { variant: "up", className: "text-center max-w-2xl mx-auto space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fdc33e]/15 border border-[#fdc33e]/40 text-xs font-bold text-[#8c6000] uppercase tracking-wider", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "w-4 h-4 text-[#b87c08]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "As Listed in the Supplied Profile" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl sm:text-4xl font-black text-[#092545] tracking-tight", children: "Accreditations & Enrolled Organizations" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs sm:text-sm text-[#2d435e]", children: "The profile separates the organisations listed under “Accreditation” from those listed under “Enrolled Organisations”. The names below follow those categories." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { variant: "left", delay: 60, className: "h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200/90 space-y-5 bg-white/90 shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 pb-3 border-b border-slate-100", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-11 h-11 rounded-2xl bg-sky-50 text-[#013777] border border-sky-100 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "w-5 h-5 text-[#013777]" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-black text-[#092545]", children: "Accredited By" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-[#013777] font-bold", children: "Names under “Accreditation”" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: accreditedBy.map((acc, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "p-4 rounded-2xl bg-slate-50/80 border border-slate-200/60 space-y-1",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm font-black text-[#013777] flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4 text-emerald-600 flex-shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: acc.name })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-[#2d435e] pl-6 leading-relaxed", children: acc.description })
              ]
            },
            i
          )) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { variant: "right", delay: 140, className: "h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200/90 space-y-5 bg-white/90 shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 pb-3 border-b border-slate-100", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-11 h-11 rounded-2xl bg-teal-50 text-teal-700 border border-teal-100 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "w-5 h-5 text-teal-600" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-black text-[#092545]", children: "Enrolled Organizations" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-teal-700 font-bold", children: "Names under “Enrolled Organisations”" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: enrolledOrgs.map((org, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "p-4 rounded-2xl bg-slate-50/80 border border-slate-200/60 space-y-1",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm font-black text-[#013777] flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4 text-teal-600 flex-shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: org.name })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-[#2d435e] pl-6 leading-relaxed", children: org.description })
              ]
            },
            i
          )) })
        ] }) })
      ] })
    ] })
  ] });
};
const WhatsAppBookingPage = ({
  isOpenModal = false,
  onCloseModal,
  preselectedSpecialty,
  preselectedDoctor,
  isDarkBg = true
}) => {
  const [formData, setFormData] = reactExports.useState({
    patientName: "",
    patientPhone: "",
    specialty: preselectedSpecialty || "Orthopedic Surgery",
    doctorPreference: preselectedDoctor || "First Available Consultant",
    preferredDate: "",
    preferredTime: "No preference",
    visitType: "consultation",
    complaint: ""
  });
  const [bookingConfirmed, setBookingConfirmed] = reactExports.useState(false);
  const [generatedMessage, setGeneratedMessage] = reactExports.useState("");
  const [copied, setCopied] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (preselectedSpecialty) {
      setFormData((prev) => ({ ...prev, specialty: preselectedSpecialty }));
    }
    if (preselectedDoctor) {
      const normalized = preselectedDoctor.toLowerCase();
      let matchedOption = preselectedDoctor;
      let matchedSpecialty;
      if (normalized.includes("shaker")) {
        matchedOption = "Dr. Ahmed Shaker (Chairman - Obstetrics & Gyn)";
        if (!preselectedSpecialty) matchedSpecialty = "Obstetrics & Gynaecology";
      } else if (normalized.includes("hesham")) {
        matchedOption = "Dr. Mohammed Hesham Shaker (CEO & CMD - Orthopedic & Arthroplasty)";
        if (!preselectedSpecialty) matchedSpecialty = "Orthopedic Surgery";
      } else if (normalized.includes("bassam")) {
        matchedOption = "Dr. Bassam (Physical Therapy, Myofascial Therapy, Cupping & Acupuncture)";
        if (!preselectedSpecialty) matchedSpecialty = "Physiotherapy";
      } else if (normalized.includes("wael")) {
        matchedOption = "Dr. Wael Khalil (Bariatric, Laparoscopic & Oncology Surgeries)";
        if (!preselectedSpecialty) matchedSpecialty = "General Surgery";
      }
      setFormData((prev) => ({
        ...prev,
        doctorPreference: matchedOption,
        ...matchedSpecialty ? { specialty: matchedSpecialty } : {}
      }));
    }
  }, [preselectedSpecialty, preselectedDoctor]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.patientName || !formData.patientPhone) return;
    const message = `🏥 *Cairo Hospital Abuja - Medical Appointment Request*
━━━━━━━━━━━━━━━━━━━━━━━━━
👤 *Patient Name:* ${formData.patientName}
📱 *Contact:* ${formData.patientPhone}
🩺 *Specialty:* ${formData.specialty}
👨‍⚕️ *Doctor Preference:* ${formData.doctorPreference}
📅 *Preferred Date:* ${formData.preferredDate || "Earliest Available"}
⏰ *Preferred Time:* ${formData.preferredTime}
🎯 *Visit Type:* ${formData.visitType.toUpperCase()}
📝 *Symptoms / Medical Notes:* ${formData.complaint || "General consultation request"}
━━━━━━━━━━━━━━━━━━━━━━━━━
📍 *Facility:* 16 Oke Agbe Street, Garki 2, Abuja
_Sent via Cairo Hospital Official Website_`;
    setGeneratedMessage(message);
    setBookingConfirmed(true);
    const encoded = encodeURIComponent(message);
    const waUrl = `https://wa.me/${HOSPITAL_CONTACT.whatsappNumber}?text=${encoded}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(generatedMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2e3);
  };
  const headerBlock = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-2xl mx-auto space-y-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: `inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider ${isDarkBg ? "bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 shadow-xs" : "bg-emerald-50 border border-emerald-300 text-emerald-800"}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-4 h-4 fill-current" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Direct WhatsApp Patient Scheduling" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "h2",
      {
        className: `text-2xl sm:text-4xl font-black tracking-tight ${isDarkBg ? "text-white" : "text-[#061a33]"}`,
        children: "Instant WhatsApp Appointment Booking"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "p",
      {
        className: `text-xs sm:text-sm leading-relaxed ${isDarkBg ? "text-sky-100 font-medium" : "text-[#1e293b]"}`,
        children: "Book directly with Cairo Hospital's clinical coordination desk in Abuja. Your message is formatted professionally and sent directly to our on-duty patient coordinator on WhatsApp."
      }
    )
  ] });
  const formOrConfirmedBlock = !bookingConfirmed ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "form",
    {
      onSubmit: handleSubmit,
      className: "glass-panel p-6 sm:p-10 rounded-3xl border border-slate-200/90 shadow-xl max-w-3xl mx-auto space-y-6 bg-white/95",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold uppercase tracking-wider text-[#013777] mb-1.5", children: "Patient Full Name *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  required: true,
                  value: formData.patientName,
                  onChange: (e) => setFormData({ ...formData, patientName: e.target.value }),
                  placeholder: "e.g. Adebayo Ibrahim",
                  className: "w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-[#092545] placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#013777] focus:bg-white transition-all font-medium"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold uppercase tracking-wider text-[#013777] mb-1.5", children: "WhatsApp Phone Number *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "tel",
                  required: true,
                  value: formData.patientPhone,
                  onChange: (e) => setFormData({ ...formData, patientPhone: e.target.value }),
                  placeholder: "+234 800 000 0000",
                  className: "w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-[#092545] placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#013777] focus:bg-white transition-all font-medium"
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold uppercase tracking-wider text-[#013777] mb-1.5", children: "Specialty / Department" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "select",
              {
                value: formData.specialty,
                onChange: (e) => setFormData({ ...formData, specialty: e.target.value }),
                className: "w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-[#092545] text-sm focus:outline-none focus:ring-2 focus:ring-[#013777] focus:bg-white transition-all font-medium",
                children: SERVICE_DEPARTMENTS.map((dept) => /* @__PURE__ */ jsxRuntimeExports.jsx("optgroup", { label: dept.label, children: MEDICAL_SERVICES.filter((srv) => srv.departmentId === dept.id).map(
                  (srv) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: srv.title, className: "text-[#092545]", children: srv.title }, srv.id)
                ) }, dept.id))
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold uppercase tracking-wider text-[#013777] mb-1.5", children: "Doctor Preference" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "select",
              {
                value: formData.doctorPreference,
                onChange: (e) => setFormData({ ...formData, doctorPreference: e.target.value }),
                className: "w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-[#092545] text-sm focus:outline-none focus:ring-2 focus:ring-[#013777] focus:bg-white transition-all font-medium",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "First Available Consultant", className: "text-[#092545]", children: "First Available Consultant" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Dr. Ahmed Shaker (Chairman - Obstetrics & Gyn)", className: "text-[#092545]", children: "Dr. Ahmed Shaker (Chairman - Obstetrics & Gyn)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Dr. Mohammed Hesham Shaker (CEO & CMD - Orthopedic & Arthroplasty)", className: "text-[#092545]", children: "Dr. Mohammed Hesham Shaker (CEO & CMD - Orthopedic & Arthroplasty)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Dr. Bassam (Physical Therapy, Myofascial Therapy, Cupping & Acupuncture)", className: "text-[#092545]", children: "Dr. Bassam (Physical Therapy, Myofascial Therapy, Cupping & Acupuncture)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Dr. Wael Khalil (Bariatric, Laparoscopic & Oncology Surgeries)", className: "text-[#092545]", children: "Dr. Wael Khalil (Bariatric, Laparoscopic & Oncology Surgeries)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Chief Medical Director Clinical Team", className: "text-[#092545]", children: "Chief Medical Director Clinical Team" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Cairo Hospital Pharmacy Department Inquiry", className: "text-[#092545]", children: "Cairo Hospital Pharmacy Department Inquiry" })
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold uppercase tracking-wider text-[#013777] mb-1.5", children: "Preferred Date" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "date",
                value: formData.preferredDate,
                onChange: (e) => setFormData({ ...formData, preferredDate: e.target.value }),
                className: "w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-[#092545] text-sm focus:outline-none focus:ring-2 focus:ring-[#013777] focus:bg-white transition-all font-medium"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold uppercase tracking-wider text-[#013777] mb-1.5", children: "Preferred Time" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "select",
              {
                value: formData.preferredTime,
                onChange: (e) => setFormData({ ...formData, preferredTime: e.target.value }),
                className: "w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-[#092545] text-sm focus:outline-none focus:ring-2 focus:ring-[#013777] focus:bg-white transition-all font-medium",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "No preference", children: "No preference" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Morning preference", children: "Morning preference" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Afternoon preference", children: "Afternoon preference" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Evening preference", children: "Evening preference" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-[11px] text-slate-500", children: "This is a time preference only; the hospital will confirm availability." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold uppercase tracking-wider text-[#013777] mb-1.5", children: "Visit Category" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "select",
              {
                value: formData.visitType,
                onChange: (e) => setFormData({ ...formData, visitType: e.target.value }),
                className: "w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-[#092545] text-sm focus:outline-none focus:ring-2 focus:ring-[#013777] focus:bg-white transition-all font-medium",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "consultation", children: "In-Hospital Consultation" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "surgery", children: "Surgery / Arthroplasty Review" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "rehabilitation", children: "Physiotherapy & Rehab" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "medical-tourism", children: "Medical Tourism Overseas" })
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold uppercase tracking-wider text-[#013777] mb-1.5", children: "Brief Symptoms or Reason for Visit" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "textarea",
            {
              rows: 3,
              value: formData.complaint,
              onChange: (e) => setFormData({ ...formData, complaint: e.target.value }),
              placeholder: "Describe your medical condition, duration of symptoms, or previous diagnosis...",
              className: "w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-[#092545] placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#013777] focus:bg-white transition-all font-medium"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "submit",
              className: "w-full glass-button-whatsapp py-4 rounded-2xl text-white font-black text-base flex items-center justify-center gap-3 transition-transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer shadow-xl",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-5 h-5 fill-white text-emerald-600" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Send Booking Request to WhatsApp Coordinator" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "w-4 h-4" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-2 pt-3 text-[11px] text-[#2d435e]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "w-4 h-4 text-emerald-600" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Direct communication with Cairo Hospital WhatsApp line: +234 909 865 6437" })
          ] })
        ] })
      ]
    }
  ) : (
    /* Confirmed View with Copy & Direct Open */
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-panel p-6 sm:p-10 rounded-3xl border border-emerald-400/80 shadow-2xl max-w-2xl mx-auto space-y-6 bg-white text-[#2d435e]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto shadow-inner", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-8 h-8" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-black text-[#092545]", children: "WhatsApp Booking Initiated!" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs sm:text-sm text-[#2d435e]", children: "Your appointment request was compiled into the official template below and dispatched to our hospital coordination desk." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4.5 rounded-2xl bg-slate-900 border border-slate-800 font-mono text-xs whitespace-pre-line text-emerald-300 leading-relaxed overflow-x-auto shadow-inner", children: generatedMessage }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-3 pt-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: handleCopy,
            className: "flex-1 py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#013777] font-bold text-xs inline-flex items-center justify-center gap-2 cursor-pointer transition-colors",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "w-4 h-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: copied ? "Copied to Clipboard!" : "Copy Formatted Request" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: `https://wa.me/${HOSPITAL_CONTACT.whatsappNumber}?text=${encodeURIComponent(generatedMessage)}`,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "flex-1 glass-button-whatsapp py-3 px-4 rounded-xl text-white font-black text-xs inline-flex items-center justify-center gap-2 hover:scale-105 active:scale-95 transition-transform shadow-md",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "w-4 h-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Re-open WhatsApp Chat" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-2 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            setBookingConfirmed(false);
            if (onCloseModal) onCloseModal();
          },
          className: "text-xs font-bold text-[#013777] hover:underline cursor-pointer",
          children: "Book Another Appointment"
        }
      ) })
    ] })
  );
  const content = isOpenModal ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
    headerBlock,
    formOrConfirmedBlock
  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { variant: "up", children: headerBlock }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { variant: "scale", delay: 100, children: formOrConfirmedBlock })
  ] });
  if (isOpenModal) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#011633]/70 backdrop-blur-md overflow-y-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full max-w-4xl rounded-3xl border border-slate-200 p-6 sm:p-8 my-auto max-h-[92vh] overflow-y-auto shadow-2xl bg-white text-[#2d435e]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: onCloseModal,
          className: "absolute top-6 right-6 p-2 rounded-xl bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors cursor-pointer",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5" })
        }
      ),
      content
    ] }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "booking", className: "py-8 sm:py-14 relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ambient-glow-navy top-20 right-20 pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ambient-glow-cyan bottom-10 left-10 pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 relative z-10", children: content })
  ] });
};
const FloatingWhatsAppButton = ({
  onOpenBookingModal
}) => {
  const [drawerOpen, setDrawerOpen] = reactExports.useState(false);
  const [isAutoExpanded, setIsAutoExpanded] = reactExports.useState(false);
  const [isHovered, setIsHovered] = reactExports.useState(false);
  reactExports.useEffect(() => {
    let collapseTimer = null;
    let expandInterval = null;
    setIsAutoExpanded(true);
    collapseTimer = setTimeout(() => {
      setIsAutoExpanded(false);
    }, 3e3);
    expandInterval = setInterval(() => {
      setIsAutoExpanded(true);
      collapseTimer = setTimeout(() => {
        setIsAutoExpanded(false);
      }, 3e3);
    }, 15e3);
    return () => {
      if (collapseTimer) clearTimeout(collapseTimer);
      if (expandInterval) clearInterval(expandInterval);
    };
  }, []);
  const handleDirectWhatsApp = (subject) => {
    const text = encodeURIComponent(`Hello Cairo Hospital Abuja, I would like to inquire about: ${subject}`);
    window.open(`https://wa.me/${HOSPITAL_CONTACT.whatsappNumber}?text=${text}`, "_blank");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "aside",
    {
      "aria-label": "Cairo Hospital contact options",
      className: "fixed bottom-6 left-6 z-[999999] flex flex-col items-start gap-3 select-none pointer-events-auto",
      style: {
        position: "fixed",
        bottom: "24px",
        left: "24px",
        zIndex: 999999,
        transform: "translate3d(0, 0, 0)",
        WebkitTransform: "translate3d(0, 0, 0)",
        backfaceVisibility: "hidden",
        WebkitBackfaceVisibility: "hidden",
        willChange: "transform",
        isolation: "isolate"
      },
      children: [
        drawerOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 rounded-3xl border border-white/15 shadow-[0_24px_80px_-20px_rgba(0,0,0,0.85)] ring-1 ring-black/20 w-84 max-w-[calc(100vw-2.5rem)] space-y-4 bg-slate-950/75 backdrop-blur-2xl animate-in fade-in slide-in-from-bottom-4 duration-150 text-white", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between pb-3 border-b border-white/15", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-2xl bg-gradient-to-br from-emerald-400 via-[#25D366] to-[#087f68] text-white flex items-center justify-center shadow-lg shadow-emerald-950/40 border border-white/25", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PhoneCall, { className: "w-5 h-5 animate-phone-ring text-white" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-bold text-white tracking-wide", children: "Cairo Hospital Contact" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] !text-[#fdc33e] flex items-center gap-1.5 font-bold", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full !bg-[#fdc33e]" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Call to confirm service availability · Abuja" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => setDrawerOpen(false),
                className: "p-1.5 rounded-lg text-emerald-200 hover:text-white hover:bg-white/10 transition-colors cursor-pointer",
                "aria-label": "Close",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: `tel:${HOSPITAL_CONTACT.phone1}`,
                className: "w-full text-left p-3.5 rounded-2xl bg-white/[0.06] hover:bg-rose-500/15 border border-rose-300/25 hover:border-rose-300/50 transition-all flex items-center justify-between block group shadow-sm hover:-translate-y-0.5",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-xl bg-gradient-to-br from-rose-400 to-rose-700 text-white flex items-center justify-center shrink-0 shadow-lg shadow-rose-950/40 border border-white/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PhoneCall, { className: "w-4 h-4 group-hover:scale-110 transition-transform animate-phone-ring" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-extrabold text-white text-xs sm:text-sm", children: "Emergency Department & Ambulance" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-rose-200 font-mono font-bold tracking-wider", children: HOSPITAL_CONTACT.phone1 })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-black text-white px-2.5 py-1 rounded-lg bg-rose-500/80 border border-rose-200/25 shadow-sm uppercase tracking-wider", children: "CALL" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: `mailto:${HOSPITAL_CONTACT.email}`,
                className: "w-full text-left p-3 rounded-2xl bg-white/[0.05] hover:bg-sky-400/10 border border-white/10 hover:border-sky-300/30 transition-all flex items-center justify-between block group hover:-translate-y-0.5",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-7 h-7 rounded-lg bg-gradient-to-br from-sky-300 to-blue-700 text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-950/40 border border-white/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-3.5 h-3.5 group-hover:scale-110 transition-transform" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-white", children: "Hospital Email" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-sky-200 font-mono font-semibold", children: HOSPITAL_CONTACT.email })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold text-sky-100 px-2 py-0.5 rounded-md bg-sky-500/20 border border-sky-300/20", children: "EMAIL" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => handleDirectWhatsApp("General Inquiry & Appointment"),
                className: "w-full text-left p-3 rounded-2xl bg-white/[0.05] hover:bg-emerald-400/10 border border-white/10 hover:border-emerald-300/30 transition-all cursor-pointer flex items-center justify-between group hover:-translate-y-0.5",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-7 h-7 rounded-lg bg-gradient-to-br from-emerald-300 to-emerald-700 text-white flex items-center justify-center shrink-0 shadow-md shadow-emerald-950/40 border border-white/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "w-3.5 h-3.5 group-hover:scale-110 transition-transform" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-white", children: "WhatsApp General Inquiry" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-emerald-200 font-semibold", children: HOSPITAL_CONTACT.whatsappDisplay })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "w-3.5 h-3.5 text-emerald-300" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => {
                  setDrawerOpen(false);
                  onOpenBookingModal();
                },
                className: "w-full text-left p-3 rounded-2xl bg-white/[0.05] hover:bg-sky-400/10 border border-white/10 hover:border-sky-300/30 transition-all cursor-pointer flex items-center justify-between group hover:-translate-y-0.5",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-7 h-7 rounded-lg bg-gradient-to-br from-sky-300/30 to-blue-500/20 text-sky-200 flex items-center justify-center shrink-0 shadow-inner border border-sky-200/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-3.5 h-3.5 group-hover:scale-110 transition-transform" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-white", children: "Book Doctor Appointment" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-sky-100 font-medium", children: "Select specialty, clinician & preferred time" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-3.5 h-3.5 text-sky-300 rotate-90" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => handleDirectWhatsApp("Medical Tourism (Dubai / UK / Nigeria / Egypt / USA / Turkey)"),
                className: "w-full text-left p-3 rounded-2xl bg-white/[0.05] hover:bg-teal-400/10 border border-white/10 hover:border-teal-300/30 transition-all cursor-pointer flex items-center justify-between group hover:-translate-y-0.5",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-7 h-7 rounded-lg bg-gradient-to-br from-teal-300/30 to-emerald-500/20 text-teal-200 flex items-center justify-center shrink-0 shadow-inner border border-teal-200/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3.5 h-3.5 group-hover:scale-110 transition-transform" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-white", children: "Medical Tourism Inquiry" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-sky-100 font-medium", children: "Dubai · UK · Nigeria · Egypt · USA · Turkey" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "w-3.5 h-3.5 text-sky-200" })
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => setDrawerOpen(!drawerOpen),
            onMouseEnter: () => setIsHovered(true),
            onMouseLeave: () => setIsHovered(false),
            className: `relative flex items-center text-white shadow-2xl cursor-pointer group animate-call-pulse bg-gradient-to-r from-[#25D366] via-[#1EBE5D] to-[#128C7E] hover:from-[#20bd5a] hover:to-[#0e7569] transition-all duration-500 ease-in-out hover:scale-105 active:scale-95 ${isAutoExpanded || isHovered || drawerOpen ? "px-4 py-3 sm:px-5 sm:py-3.5 rounded-full gap-3" : "p-3.5 sm:p-4 rounded-full gap-0"}`,
            "aria-label": "Call Cairo Hospital",
            title: "Call Cairo Hospital",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PhoneCall, { className: "w-5 h-5 sm:w-6 sm:h-6 text-white animate-phone-ring" }) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: `flex flex-col text-left leading-tight whitespace-nowrap overflow-hidden transition-all duration-500 ease-in-out ${isAutoExpanded || isHovered || drawerOpen ? "max-w-[210px] opacity-100 pr-1" : "max-w-0 opacity-0 pr-0"}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-black text-xs sm:text-sm tracking-wide text-white flex items-center gap-1.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: drawerOpen ? "Close Desk" : "Contact Hospital" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-emerald-50 font-bold tracking-tight", children: drawerOpen ? "Click to minimize" : "Call to confirm availability" })
                  ]
                }
              )
            ]
          }
        )
      ]
    }
  );
};
const Footer = ({
  onNavigate,
  onOpenWhatsAppBooking
}) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "bg-[#001d40] text-sky-100 pt-16 pb-12 border-t border-[#013777]/30 relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ambient-glow-navy bottom-0 right-1/4 pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 relative z-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { variant: "up", delay: 0, className: "lg:col-span-4 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl bg-white p-1 shadow-md border border-white/20 flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: "/logo.png",
                alt: "Cairo Hospital Logo",
                className: "w-full h-full object-contain"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl font-black text-white tracking-tight", children: "Cairo Hospital" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold text-white", children: "Cairo Rehabilitation Centre (CRC)" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-sky-100 leading-relaxed font-medium", children: "Cairo Hospital was established in Abuja in 2019 by a group of Egyptian doctors and administrators. Its current profile lists multispecialty care, surgery, rehabilitation, diagnostics, pharmacy, and medical-tourism services." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 text-xs text-sky-100 pt-1 font-medium", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-4 h-4 text-white flex-shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: HOSPITAL_CONTACT.address })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-4 h-4 text-white flex-shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: HOSPITAL_CONTACT.workingHours })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { variant: "up", delay: 70, className: "lg:col-span-3 space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-black uppercase tracking-wider text-white", children: "Explore Cairo Hospital" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2 text-xs", children: [
            ["about", "About Us & 4 Pillars"],
            ["services", "Medical Services Directory"],
            ["tourism", "Medical Tourism"],
            ["team", "Executive Medical Team"],
            ["contact", "Campus Location & Contact"],
            ["booking", "Direct WhatsApp Scheduling"]
          ].map(([id, label]) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => onNavigate(id),
              className: "hover:text-white transition-colors cursor-pointer text-left font-bold text-sky-100 hover:translate-x-1 duration-200 inline-block",
              children: [
                "• ",
                label
              ]
            }
          ) }, id)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { variant: "up", delay: 140, className: "lg:col-span-2 space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-black uppercase tracking-wider text-white", children: "Medical Services" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1.5 text-xs text-sky-100 font-medium", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Orthopedics & Orthobiologics" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Physical & Myofascial Therapy, Cupping, Acupuncture" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Obstetrics, Gynaecology & Infertility" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• General, Bariatric, Laparoscopic, Oncology & Urosurgery" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Cardiology, Neurology & Nephrology" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Gastroenterology & Endocrinology" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Family & Tropical Medicine" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Outpatient Clinics, Emergency & Ambulance" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• X-Ray, Laboratory & Pharmacy" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Medical Tourism" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { variant: "up", delay: 210, className: "lg:col-span-3 space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-black uppercase tracking-wider text-white", children: "Patient Helplines" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2.5 text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: onOpenWhatsAppBooking,
                className: "w-full glass-button-whatsapp py-3 rounded-xl text-white font-extrabold flex items-center justify-center gap-2 hover:scale-102 transition-transform cursor-pointer shadow-md",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-4 h-4 fill-current" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Instant WhatsApp Booking" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-xl bg-white/10 border border-white/20 space-y-1 text-white", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-white font-bold", children: "Emergency Ambulance Hotline" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: `tel:${HOSPITAL_CONTACT.phone1}`,
                  className: "text-white font-mono font-black hover:text-sky-300 text-sm block",
                  children: HOSPITAL_CONTACT.phone1
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-xl bg-white/10 border border-white/20 space-y-1 text-white", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-white font-bold", children: "Hospital Inquiries & Referrals" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: `mailto:${HOSPITAL_CONTACT.email}`,
                  className: "text-sky-100 text-xs font-mono hover:text-white hover:underline block font-semibold",
                  children: HOSPITAL_CONTACT.email
                }
              )
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { variant: "fade", delay: 180, className: "pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs border-t border-white/10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sky-100 font-semibold", children: "Accreditation: NHIS · FCDA Health Department · African Union" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sky-400", children: "·" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sky-100 font-semibold", children: "Enrolled: Alamida · Zenith Medica · Cleopatra · NNPH · Push Africa NGO · ASRIC" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sky-100 font-medium", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "© ",
            (/* @__PURE__ */ new Date()).getFullYear(),
            " Cairo Hospital Abuja. All rights reserved."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sky-300", children: "Version 1.0.2 · Updated Nov 3, 2026" })
        ] })
      ] })
    ] })
  ] });
};
const SubpageHero = ({
  badge,
  badgeIcon,
  title,
  highlightedText,
  description,
  breadcrumbs = [],
  onNavigateHome,
  onOpenWhatsAppBooking,
  stats
}) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative pt-10 pb-16 sm:pb-20 overflow-hidden border-b border-slate-200/60 bg-gradient-to-b from-sky-50/70 via-white to-[#f4f8fc]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-1/4 w-96 h-96 bg-[#013777]/10 rounded-full blur-3xl pointer-events-none -z-10" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-10 w-80 h-80 bg-sky-400/10 rounded-full blur-3xl pointer-events-none -z-10" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { variant: "down", duration: 520, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { "aria-label": "Breadcrumb", className: "flex items-center gap-2 text-xs font-bold text-slate-700", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: onNavigateHome,
            className: "inline-flex items-center gap-1.5 text-slate-700 hover:text-[#013777] transition-colors cursor-pointer",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(House, { className: "w-3.5 h-3.5 text-slate-600" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Home" })
            ]
          }
        ),
        breadcrumbs && breadcrumbs.map((crumb, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(React.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3.5 h-3.5 text-slate-400" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: idx === breadcrumbs.length - 1 ? "text-[#013777] font-black" : "text-slate-700 hover:text-[#013777] transition-colors",
              children: crumb.label
            }
          )
        ] }, idx))
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { variant: "up", delay: 70, className: "max-w-4xl space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-300 shadow-xs text-xs font-black text-[#013777] uppercase tracking-wider", children: [
          badgeIcon || /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-4 h-4 text-[#013777]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: badge })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-3xl sm:text-5xl lg:text-6xl font-black text-[#061a33] tracking-tight leading-tight", children: [
          title,
          " ",
          highlightedText && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-[#013777] via-[#0b5599] to-[#0284c7]", children: highlightedText })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base sm:text-lg text-[#1e293b] font-medium leading-relaxed max-w-3xl", children: description })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Reveal,
        {
          variant: "up",
          delay: 150,
          className: "flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-4 border-t border-slate-200/80",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3", children: [
              onOpenWhatsAppBooking && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  onClick: onOpenWhatsAppBooking,
                  className: "inline-flex items-center gap-2.5 px-6 py-3 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-black text-sm shadow-md shadow-[#25D366]/25 transition-all transform active:scale-95 cursor-pointer",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-4 h-4 fill-current" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Book via WhatsApp Now" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: `tel:${HOSPITAL_CONTACT.phone1}`,
                  className: "inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white hover:bg-slate-50 border border-slate-300 text-[#092545] font-black text-sm shadow-xs transition-colors cursor-pointer",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-4 h-4 text-[#013777]" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                      "Call: ",
                      HOSPITAL_CONTACT.phone1
                    ] })
                  ]
                }
              )
            ] }),
            stats && stats.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-6 overflow-x-auto pb-1 sm:pb-0", children: stats.map((stat, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l-2 border-[#013777]/30 pl-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl sm:text-2xl font-black text-[#013777]", children: stat.value }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-black text-slate-700 uppercase tracking-wider", children: stat.label })
            ] }, idx)) })
          ]
        }
      )
    ] })
  ] });
};
const AboutSubpage = ({
  onNavigateHome,
  onOpenWhatsAppBooking,
  onNavigateServices,
  onNavigateTeam
}) => {
  const [activePillar, setActivePillar] = reactExports.useState(0);
  const chairmanDirector = TEAM_MEMBERS.find((m) => m.id === "dr-ahmed-shaker") || TEAM_MEMBERS[0];
  const timelineMilestones = [
    {
      year: "1970",
      title: "Dr. Ahmed Shaker Begins Work in Nigeria",
      subtitle: "Healthcare Leadership & NEPA Medical Director",
      description: "Dr. Ahmed Shaker worked in Nigeria from 1970. The profile names him NEPA Medical Director from 1970 to 1991 and separately notes that he managed more than 130 hospitals in the government and private sectors. It also lists his later roles at AGUDA Hospital in Lagos, Weaner Hospital in Abuja, and Katameya Hospital until 2019.",
      tag: "Chairman’s Experience",
      highlight: "More than 130 Hospitals Managed"
    },
    {
      year: "2019",
      title: "Inception of Cairo Hospital Abuja",
      subtitle: "Cairo Rehabilitation Centre (CRC)",
      description: "Cairo Hospital was established in Abuja by a group of Egyptian doctors and administrators. It began as an outpatient orthopedics and physiotherapy centre with a fully equipped laboratory and digital X-ray.",
      tag: "Abuja Inception",
      highlight: "First Egyptian Hospital in Abuja"
    },
    {
      year: "2021",
      title: "Hospital Expansion",
      subtitle: "Surgery Room, Inpatient Department & Pharmacy",
      description: "The hospital expanded its specialties and added a fully equipped surgery room, an inpatient department, and a pharmacy department.",
      tag: "Hospital Expansion",
      highlight: "Surgery, Inpatient & Pharmacy"
    },
    {
      year: "Today",
      title: "Regional Orthobiologics & Multi-Specialties Hub",
      subtitle: "Pioneering Regenerative Medicine in West Africa",
      description: "The current profile lists outpatient clinics, cardiology, neurology, nephrology, gastroenterology, endocrinology, family and tropical medicine, surgery, rehabilitation, diagnostics, pharmacy, and medical tourism.",
      tag: "Current Services",
      highlight: "Multispecialty Hospital Profile"
    }
  ];
  const clinicalStandards = [
    {
      title: "Fully Equipped Laboratory",
      desc: "A fully equipped laboratory supported the outpatient services described in the hospital profile.",
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Microscope, { className: "w-5 h-5 text-[#013777]" })
    },
    {
      title: "Digital X-Ray",
      desc: "Digital X-ray is listed among the diagnostic services at Cairo Hospital.",
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "w-5 h-5 text-teal-600" })
    },
    {
      title: "Surgery, Inpatient & Pharmacy",
      desc: "The 2021 expansion added a fully equipped surgery room, an inpatient department, and a pharmacy department.",
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "w-5 h-5 text-indigo-600" })
    },
    {
      title: "Multispecialty Clinics",
      desc: "The profile lists cardiology, neurology, nephrology, gastroenterology, endocrinology, family medicine, and tropical medicine.",
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-5 h-5 text-emerald-600" })
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-16 sm:space-y-24 pb-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SubpageHero,
      {
        badge: "Hospital Heritage & Clinical Leadership",
        badgeIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(History, { className: "w-4 h-4 text-[#013777]" }),
        title: "Decades of Medical Distinction,",
        highlightedText: "Rooted in Abuja.",
        description: "Established in Abuja in 2019 by a group of Egyptian doctors and an administrative team, Cairo Hospital began as an outpatient orthopedics and physical rehabilitation clinic. Its 2021 expansion added more specialties, a fully equipped surgery room, an inpatient department, and a pharmacy.",
        breadcrumbs: [{ label: "About Us" }],
        onNavigateHome,
        onOpenWhatsAppBooking: () => onOpenWhatsAppBooking(),
        stats: [
          { label: "Chairman’s Experience", value: "Since 1970" },
          { label: "Hospital Founded", value: "2019" },
          { label: "Services Listed", value: "22" },
          { label: "Emergency & Ambulance", value: "Listed" }
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 space-y-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { variant: "left", className: "lg:col-span-7 space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-black uppercase tracking-widest text-[#013777]", children: "Institutional Mission & Vision" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl sm:text-4xl font-black text-[#092545] tracking-tight", children: "Empowering Health Through Precision, Compassion, and Integrity" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm sm:text-base text-[#1e293b] font-medium leading-relaxed", children: "Cairo Hospital was established in Abuja in 2019 by a group of Egyptian doctors and an administrative team. It began as an outpatient orthopedics and physical rehabilitation clinic, with a fully equipped laboratory diagnostic department and digital X-ray." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm sm:text-base text-[#1e293b] font-medium leading-relaxed", children: "In 2021, Cairo Centre expanded its specialties and added a fully equipped surgery room, an inpatient department, and a pharmacy department. The supplied profile also lists outpatient clinics, emergency and ambulance services, orthobiologics, specialist clinics, diagnostics, and medical tourism." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-2 flex flex-wrap gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: onNavigateServices,
                className: "inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#013777] hover:bg-[#092545] text-white font-bold text-sm shadow-md transition-all cursor-pointer",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Explore Our Medical Services" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: onNavigateTeam,
                className: "inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white hover:bg-slate-50 border border-slate-300 text-[#092545] font-black text-sm transition-colors cursor-pointer",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-4 h-4 text-[#013777]" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Meet Medical Leadership" })
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { variant: "right", delay: 100, className: "lg:col-span-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-panel-dark contrast-dark rounded-3xl border border-[#fdc33e]/40 shadow-2xl bg-gradient-to-br from-[#041830] via-[#012859] to-[#013777] overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 w-full bg-gradient-to-r from-[#fdc33e] via-[#38bdf8] to-transparent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 sm:p-8 space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2 text-xs font-bold !text-[#fdc33e] tracking-wide", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Chairman of Cairo Hospital" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "w-4 h-4 !text-[#fdc33e] shrink-0" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-24 h-28 sm:w-28 sm:h-32 rounded-2xl overflow-hidden border-2 border-[#fdc33e]/65 bg-[#061a33] shadow-xl shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: chairmanDirector.image,
                  alt: chairmanDirector.name,
                  className: "w-full h-full object-cover object-top"
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold !text-[#fdc33e]", children: "MRCOG · Ain Shams University" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl sm:text-2xl font-black !text-white leading-tight", children: chairmanDirector.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs !text-[#bae6fd] font-medium leading-snug", children: chairmanDirector.title })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("blockquote", { className: "py-4 border-y border-white/15 text-xs sm:text-sm !text-sky-100 font-medium italic leading-relaxed", children: "“Solving health challenges across Nigeria and West Africa through accurate diagnosis and prompt treatment.”" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-3 divide-x divide-white/15", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-base font-black !text-[#fdc33e] tabular-nums", children: "1970" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] !text-sky-100 font-medium", children: "Work in Nigeria since 1970" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pl-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-base font-black !text-[#fdc33e] tabular-nums", children: "130+" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] !text-sky-100 font-medium", children: "Hospitals Managed" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pl-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-base font-black !text-[#fdc33e] tabular-nums", children: "MRCOG" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] !text-sky-100 font-medium", children: "Royal College" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-1 flex flex-wrap items-center gap-2.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => onOpenWhatsAppBooking(chairmanDirector.name),
                  className: "flex-1 glass-button-whatsapp py-2.5 px-4 rounded-xl text-white font-extrabold text-xs inline-flex items-center justify-center gap-2 cursor-pointer shadow-md",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-3.5 h-3.5 fill-current" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Consult Dr. Ahmed Shaker" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: onNavigateTeam,
                  className: "py-2.5 px-4 rounded-xl bg-white/12 hover:bg-white/20 border border-white/20 !text-white font-bold text-xs inline-flex items-center gap-1.5 transition-colors cursor-pointer",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Medical Team" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3.5 h-3.5 !text-[#fdc33e]" })
                  ]
                }
              )
            ] })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { variant: "up", className: "text-center max-w-3xl mx-auto space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-black uppercase tracking-widest text-[#013777]", children: "Historical Evolution" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl sm:text-4xl font-black text-[#092545] tracking-tight", children: "A Timeline of Continuous Clinical Growth" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-[#1e293b] font-medium", children: "Trace Dr. Ahmed Shaker’s medical work in Nigeria from 1970, Cairo Hospital’s establishment in 2019, and the expansion described in the hospital profile." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: timelineMilestones.map((milestone, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { variant: "up", delay: idx * 75, className: "h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full glass-panel p-6 rounded-3xl border border-slate-200/90 bg-white shadow-sm flex flex-col justify-between hover:shadow-md hover:border-[#013777]/30 transition-all duration-300 relative group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl font-black text-[#013777] tracking-tight", children: milestone.year }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-black text-slate-800 uppercase tracking-wider bg-slate-200 px-2.5 py-1 rounded-lg", children: milestone.tag })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-black text-[#092545] leading-snug", children: milestone.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-black text-[#013777]", children: milestone.subtitle })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-[#1e293b] font-medium leading-relaxed", children: milestone.description })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-black text-[#013777]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3.5 h-3.5 text-emerald-600 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: milestone.highlight })
          ] })
        ] }) }, idx)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { variant: "up", className: "text-center max-w-3xl mx-auto space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-black uppercase tracking-widest text-[#013777]", children: "The Core Philosophy" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl sm:text-4xl font-black text-[#092545] tracking-tight", children: "Our 4 Pillars of Patient Care" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-[#1e293b] font-medium", children: "Every clinical decision at Cairo Hospital is anchored in four uncompromising values." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { variant: "up", delay: 60, className: "grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto", children: PILLARS_OF_CARE.map((pillar, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setActivePillar(idx),
            className: `py-3 px-4 rounded-2xl text-xs font-black tracking-wider uppercase transition-all cursor-pointer flex items-center justify-center gap-2 ${activePillar === idx ? "bg-[#013777] text-white shadow-md shadow-[#013777]/25 scale-102" : "bg-white border border-slate-300 text-[#092545] hover:bg-slate-50"}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: pillar.title })
          },
          idx
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { variant: "scale", delay: 110, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-panel p-8 sm:p-12 rounded-3xl border border-slate-200/90 bg-white shadow-lg max-w-4xl mx-auto space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-14 h-14 rounded-2xl bg-sky-50 border border-sky-300 text-[#013777] flex items-center justify-center font-black text-2xl", children: [
                "0",
                activePillar + 1
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-2xl font-black text-[#092545]", children: [
                  "Pillar: ",
                  PILLARS_OF_CARE[activePillar].title
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-[#013777]", children: "Cairo Hospital Abuja Clinical Standard" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => onOpenWhatsAppBooking(),
                className: "inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-black shadow-xs transition-colors cursor-pointer self-start sm:self-auto",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-3.5 h-3.5 fill-current" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Consult Our Team" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base text-[#1e293b] font-medium leading-relaxed", children: PILLARS_OF_CARE[activePillar].description }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-2xl bg-slate-50 border border-slate-300 space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-black text-[#092545]", children: "Clinical Focus" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-slate-700 font-medium", children: "The profile emphasizes accurate diagnosis and effective treatment." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-2xl bg-slate-50 border border-slate-300 space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-black text-[#092545]", children: "Patient Access" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-slate-700 font-medium", children: "Outpatient, inpatient, diagnostic, and pharmacy services are listed." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-2xl bg-slate-50 border border-slate-300 space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-black text-[#092545]", children: "Departmental Scope" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-slate-700 font-medium", children: "Specialist clinics and services are coordinated through the hospital." })
            ] })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { variant: "up", className: "text-center max-w-3xl mx-auto space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-black uppercase tracking-widest text-[#013777]", children: "Facilities & Clinical Scope" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl sm:text-4xl font-black text-[#092545] tracking-tight", children: "Facilities & Services in the Hospital Profile" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-[#1e293b] font-medium", children: "The hospital profile describes diagnostic, outpatient, inpatient, surgical, pharmacy, and specialist-clinic services." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: clinicalStandards.map((std, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { variant: "up", delay: idx * 75, className: "h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full glass-panel p-6 sm:p-7 rounded-3xl border border-slate-200/90 bg-white shadow-sm flex items-start gap-4 hover:border-[#013777]/30 transition-all", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0", children: std.icon }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-black text-[#092545]", children: std.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs sm:text-sm text-[#1e293b] font-medium leading-relaxed", children: std.desc })
          ] })
        ] }) }, idx)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FacilityGallery, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AccreditationSection, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { variant: "scale", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "contrast-dark relative overflow-hidden rounded-3xl border border-[#fdc33e]/35 bg-gradient-to-br from-[#041830] via-[#012859] to-[#013777] p-8 sm:p-12 text-white shadow-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 absolute inset-x-0 top-0 bg-gradient-to-r from-[#fdc33e] via-[#38bdf8] to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-8 space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold !text-[#fdc33e] tracking-wide", children: "Contact the Chairman & Specialist Clinics" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl sm:text-4xl font-black tracking-tight leading-tight !text-white [text-wrap:balance]", children: "Schedule a Consultation with Dr. Ahmed Shaker or Our Specialist Clinics" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs sm:text-sm !text-sky-100/95 leading-relaxed max-w-2xl", children: "Send an appointment request through WhatsApp. Contact the hospital to confirm consultant availability, current clinic schedules, and next steps." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-2 flex flex-wrap gap-3.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  onClick: () => onOpenWhatsAppBooking(chairmanDirector.name),
                  className: "glass-button-whatsapp inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl text-white font-extrabold text-sm shadow-lg transition-transform hover:scale-102 active:scale-98 cursor-pointer",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-4 h-4 fill-current" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Consult Dr. Ahmed Shaker on WhatsApp" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: `tel:${HOSPITAL_CONTACT.phone1}`,
                  className: "inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-white/12 hover:bg-white/20 border border-white/25 !text-white font-bold text-sm transition-colors cursor-pointer",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-4 h-4 !text-[#fdc33e]" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                      "Call to confirm availability: ",
                      HOSPITAL_CONTACT.phone1
                    ] })
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-4 lg:border-l lg:border-white/15 lg:pl-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: chairmanDirector.image,
                alt: chairmanDirector.name,
                className: "w-20 h-24 rounded-2xl object-cover object-top border-2 border-[#fdc33e]/60 bg-[#061a33] shadow-lg shrink-0"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold !text-[#fdc33e]", children: "Chairman" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-black !text-white leading-tight", children: chairmanDirector.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs !text-[#bae6fd]", children: "MRCOG · Ain Shams University" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] !text-sky-100/90", children: "Worked in Nigeria since 1970" })
            ] })
          ] }) })
        ] })
      ] }) })
    ] })
  ] });
};
const ServicesSubpage = ({
  onNavigateHome,
  onSelectServiceForBooking,
  onOpenWhatsAppBooking,
  onNavigateTourism
}) => {
  const [activeDepartment, setActiveDepartment] = reactExports.useState("all");
  const [searchQuery, setSearchQuery] = reactExports.useState("");
  const [expandedCardId, setExpandedCardId] = reactExports.useState(null);
  const [openFaqIndex, setOpenFaqIndex] = reactExports.useState(null);
  const getServiceIcon = (iconName) => {
    switch (iconName) {
      case "Ambulance":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Ambulance, { className: "w-6 h-6 text-rose-600" });
      case "Bone":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Bone, { className: "w-6 h-6 text-[#013777]" });
      case "Dna":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Dna, { className: "w-6 h-6 text-teal-600" });
      case "Zap":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-6 h-6 text-amber-600" });
      case "Footprints":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Footprints, { className: "w-6 h-6 text-emerald-600" });
      case "Activity":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "w-6 h-6 text-blue-600" });
      case "Baby":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Baby, { className: "w-6 h-6 text-pink-600" });
      case "Scissors":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Scissors, { className: "w-6 h-6 text-indigo-600" });
      case "HeartPulse":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(HeartPulse, { className: "w-6 h-6 text-red-600" });
      case "Users":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-6 h-6 text-cyan-600" });
      case "Stethoscope":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Stethoscope, { className: "w-6 h-6 text-[#013777]" });
      case "Leaf":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Leaf, { className: "w-6 h-6 text-emerald-600" });
      case "Scan":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Scan, { className: "w-6 h-6 text-teal-600" });
      case "Microscope":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Microscope, { className: "w-6 h-6 text-sky-600" });
      case "Pill":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Pill, { className: "w-6 h-6 text-purple-600" });
      case "Globe2":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Earth, { className: "w-6 h-6 text-[#013777]" });
      case "Sparkles":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-6 h-6 text-amber-600" });
      default:
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "w-6 h-6 text-[#013777]" });
    }
  };
  const departmentTabs = [
    { id: "all", label: `All Services (${MEDICAL_SERVICES.length})` },
    ...SERVICE_DEPARTMENTS.map((dept) => ({
      id: dept.id,
      label: dept.shortLabel
    }))
  ];
  const matchesQuery = (srv) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return srv.title.toLowerCase().includes(q) || srv.departmentLabel.toLowerCase().includes(q) || srv.description.toLowerCase().includes(q);
  };
  const visibleDepartments = SERVICE_DEPARTMENTS.filter(
    (dept) => activeDepartment === "all" || dept.id === activeDepartment
  ).map((dept, deptIdx) => ({
    ...dept,
    orderIndex: SERVICE_DEPARTMENTS.findIndex((d) => d.id === dept.id) + 1 || deptIdx + 1,
    services: MEDICAL_SERVICES.filter(
      (srv) => srv.departmentId === dept.id && matchesQuery(srv)
    )
  })).filter((group) => group.services.length > 0);
  const totalMatchingCount = visibleDepartments.reduce(
    (sum, g) => sum + g.services.length,
    0
  );
  const clinicalPathway = [
    {
      step: "01",
      title: "Contact & Availability",
      desc: "Call or message the hospital to confirm the service, clinic schedule, and consultant availability."
    },
    {
      step: "02",
      title: "Diagnostics Listed in the Profile",
      desc: "The profile lists a fully equipped laboratory diagnostic department, digital X-ray, and ultrasound. Contact the hospital to confirm arrangements."
    },
    {
      step: "03",
      title: "Clinical Consultation",
      desc: "The treating clinician can discuss appropriate options after reviewing the patient’s individual needs. The service list does not guarantee suitability or availability."
    },
    {
      step: "04",
      title: "Next Steps & Follow-up",
      desc: "Confirm the agreed plan and any follow-up arrangements with the hospital team before travel or treatment."
    }
  ];
  const serviceFaqs = [
    {
      q: "How quickly can I book a specialist consultation?",
      a: "Use the hospital phone or WhatsApp contact to request an appointment. The coordination team must confirm current clinic and consultant availability; no response or booking time is stated in the profile."
    },
    {
      q: "Do you offer non-surgical alternatives for knee and joint arthritis?",
      a: "The profile lists stem-cell regenerative therapy, prolotherapy, PRP, and BMAC under orthobiologics for musculoskeletal degenerative or traumatic disorders. Discuss suitability, evidence, alternatives, and risks with a qualified clinician."
    },
    {
      q: "What should I bring for my first medical consultation?",
      a: "The profile does not specify a required document list. Contact the hospital before your visit to confirm what to bring and whether existing medical records can be shared."
    },
    {
      q: "How does Cairo Hospital facilitate medical tourism to Egypt?",
      a: "The hospital profile lists Dubai, the UK, Nigeria, Egypt, the USA, and Turkey as medical-tourism destinations, with support for visas, flights, accommodation, transportation, a medical plan, and representative follow-up until the patient returns to Nigeria."
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-16 sm:space-y-24 pb-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SubpageHero,
      {
        badge: "Services in the Supplied Profile",
        badgeIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "w-4 h-4 text-[#013777]" }),
        title: "Medical Services & Specialties,",
        highlightedText: "As Listed in Abuja.",
        description: "Explore the services listed in the current hospital profile, including outpatient clinics, cardiology, neurology, nephrology, gastroenterology, endocrinology, orthopedics, surgery, physical therapy, diagnostics, pharmacy, and medical tourism.",
        breadcrumbs: [{ label: "Services & Specialties" }],
        onNavigateHome,
        onOpenWhatsAppBooking,
        stats: [
          { label: "Core Services (p.16)", value: "22" },
          { label: "Emergency & Ambulance", value: "Listed" },
          { label: "Diagnostics", value: "3 listed" },
          { label: "Booking Requests", value: "WhatsApp" }
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 space-y-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { variant: "up", className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row md:items-center justify-between gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl sm:text-3xl font-black text-[#092545]", children: "Specialized Clinical Departments & Services" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs sm:text-sm text-slate-700 font-bold tabular-nums", children: [
                "Showing ",
                totalMatchingCount,
                " of ",
                MEDICAL_SERVICES.length,
                " hospital services"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full md:w-80", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  value: searchQuery,
                  onChange: (e) => setSearchQuery(e.target.value),
                  placeholder: "Search specialty, surgery, symptom...",
                  className: "w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white border border-slate-300 text-xs sm:text-sm text-[#092545] font-semibold placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#013777] shadow-xs"
                }
              ),
              searchQuery && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => setSearchQuery(""),
                  className: "absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-600 hover:text-slate-900 cursor-pointer",
                  children: "Clear"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none text-xs font-bold", children: departmentTabs.map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setActiveDepartment(tab.id),
              className: `px-4 py-2.5 rounded-xl whitespace-nowrap transition-all cursor-pointer ${activeDepartment === tab.id ? "bg-[#013777] text-white shadow-md shadow-[#013777]/25 font-black scale-102" : "bg-white border border-slate-300 text-slate-800 hover:bg-slate-50 hover:text-[#013777]"}`,
              children: tab.label
            },
            tab.id
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-12 pt-2", children: visibleDepartments.map((group) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { variant: "up", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline justify-between gap-4 pb-3 border-b border-slate-200/90", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-2.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-black text-[#013777] tabular-nums", children: [
                "0",
                group.orderIndex,
                "."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl sm:text-2xl font-black text-[#061a33] tracking-tight", children: group.label })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-semibold text-slate-500 tabular-nums", children: [
              group.services.length,
              " ",
              group.services.length === 1 ? "Service" : "Services"
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: group.services.map((service, index) => {
            const isExpanded = expandedCardId === service.id;
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              Reveal,
              {
                variant: "up",
                delay: index % 3 * 70,
                className: "h-full",
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full glass-panel glass-panel-hover p-6 sm:p-7 rounded-3xl border border-slate-200/90 bg-white shadow-sm flex flex-col justify-between space-y-5 hover:border-[#013777]/30 transition-all duration-300", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center shadow-xs shrink-0", children: getServiceIcon(service.iconName) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-bold text-[#013777] text-right", children: service.departmentLabel })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-black text-[#092545] leading-snug", children: service.title }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs sm:text-sm text-[#1e293b] font-medium leading-relaxed line-clamp-3", children: service.description })
                    ] }),
                    service.details && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-2 space-y-1.5 border-t border-slate-100", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-black text-[#013777] uppercase tracking-wider", children: "Key Clinical Capabilities:" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1", children: service.details.slice(0, isExpanded ? service.details.length : 3).map((detail, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "li",
                        {
                          className: "flex items-start gap-2 text-xs text-[#1e293b] font-medium",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-3.5 h-3.5 text-teal-600 mt-0.5 shrink-0" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: detail })
                          ]
                        },
                        idx
                      )) })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-4 border-t border-slate-100 space-y-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "button",
                      {
                        onClick: () => onSelectServiceForBooking(service.title),
                        className: "w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-black text-xs shadow-xs transition-colors cursor-pointer",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-4 h-4 fill-current" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Book Consultation on WhatsApp" })
                        ]
                      }
                    ),
                    service.details && service.details.length > 3 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        onClick: () => setExpandedCardId(isExpanded ? null : service.id),
                        className: "w-full text-center text-[11px] font-bold text-[#013777] hover:underline cursor-pointer py-1",
                        children: isExpanded ? "Show Less" : `View All Capabilities (${service.details.length})`
                      }
                    )
                  ] })
                ] })
              },
              `${activeDepartment}-${service.id}`
            );
          }) })
        ] }, group.id)) }),
        visibleDepartments.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-12 text-center rounded-3xl bg-white border border-slate-200 space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "w-8 h-8 text-slate-400 mx-auto" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-base font-bold text-[#092545]", children: [
            "No clinical specialties matched “",
            searchQuery,
            "”"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-500", children: "Try searching for orthopedic, physiotherapy, obstetrics, surgery, or lab." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => {
                setSearchQuery("");
                setActiveDepartment("all");
              },
              className: "mt-2 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#013777] text-white text-xs font-bold cursor-pointer",
              children: "Reset Filters"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        OrthobiologicsHighlight,
        {
          onOpenWhatsAppBooking: () => onSelectServiceForBooking(
            "Orthobiologics (Stem Cells Regenerative Therapy)"
          )
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { variant: "up", className: "text-center max-w-3xl mx-auto space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-black uppercase tracking-widest text-[#013777]", children: "The Patient Experience" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl sm:text-4xl font-black text-[#092545] tracking-tight", children: "Our 4-Step Clinical Care Pathway" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-[#1e293b] font-medium", children: "From triage to long-term kinetic mobility, your treatment is coordinated seamlessly by our multidisciplinary medical faculty." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6", children: clinicalPathway.map((path, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { variant: "up", delay: idx * 75, className: "h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full glass-panel p-6 rounded-3xl border border-slate-200/90 bg-white shadow-sm space-y-3 relative group hover:border-[#013777]/30 transition-all", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-2xl bg-sky-50 border border-sky-300 text-[#013777] flex items-center justify-center font-black text-lg tabular-nums", children: path.step }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-black text-[#092545]", children: path.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-[#1e293b] font-medium leading-relaxed", children: path.desc })
        ] }) }, idx)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        MedicalTourism,
        {
          onOpenWhatsAppBooking: () => onSelectServiceForBooking("Medical Tourism"),
          onNavigateTourism
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-8 max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { variant: "up", className: "text-center space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-black uppercase tracking-widest text-[#013777]", children: "Clinical Clarity" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl sm:text-3xl font-black text-[#092545] tracking-tight", children: "Frequently Asked Clinical Questions" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: serviceFaqs.map((faq, idx) => {
          const isOpen = openFaqIndex === idx;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { variant: "up", delay: idx * 65, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-panel rounded-2xl border border-slate-200/90 bg-white overflow-hidden shadow-xs transition-all", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => setOpenFaqIndex(isOpen ? null : idx),
                className: "w-full p-5 text-left flex items-center justify-between gap-4 font-black text-sm text-[#092545] hover:text-[#013777] transition-colors cursor-pointer",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: faq.q }),
                  isOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-4 h-4 text-[#013777] shrink-0" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-4 h-4 text-slate-500 shrink-0" })
                ]
              }
            ),
            isOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-5 pb-5 pt-1 text-xs sm:text-sm text-[#1e293b] font-medium leading-relaxed border-t border-slate-100", children: faq.a })
          ] }) }, idx);
        }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { variant: "scale", children: /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "contrast-dark relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#012654] via-[#013777] to-[#044a9e] p-8 sm:p-12 text-white shadow-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl space-y-4 relative z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-black uppercase tracking-widest text-sky-300", children: "Immediate Clinical Support" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl sm:text-4xl font-black tracking-tight leading-tight !text-[#fdc33e]", children: "Need Help Deciding Which Specialty Is Right for You?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs sm:text-sm text-sky-100/90 leading-relaxed max-w-2xl", children: "Connect directly with our clinical triage desk on WhatsApp. Share your symptoms or existing reports, and we will route you to the appropriate consultant immediately." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-2 flex flex-wrap gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: onOpenWhatsAppBooking,
              className: "inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm shadow-lg shadow-[#25D366]/30 transition-all transform active:scale-95 cursor-pointer",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-4 h-4 fill-current" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Chat with Clinical Desk on WhatsApp" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: `tel:${HOSPITAL_CONTACT.phone1}`,
              className: "inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm transition-colors cursor-pointer",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "w-4 h-4 text-sky-300" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  "Call Emergency Triage: ",
                  HOSPITAL_CONTACT.phone1
                ] })
              ]
            }
          )
        ] })
      ] }) }) })
    ] })
  ] });
};
const DoctorModal = ({
  member,
  onClose,
  onOpenWhatsAppBooking
}) => {
  reactExports.useEffect(() => {
    if (!member) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [member, onClose]);
  if (!member) return null;
  const isChairman = member.id === "dr-ahmed-shaker";
  const isCmd = member.id === "dr-mohammed-hesham";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#041226]/75 backdrop-blur-md overflow-y-auto",
      onClick: onClose,
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": "doctor-dossier-title",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          onClick: (e) => e.stopPropagation(),
          className: "relative w-full max-w-3xl rounded-3xl border border-slate-200/90 shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col bg-white text-[#1e293b]",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: `h-1.5 w-full shrink-0 ${isChairman || isCmd ? "bg-gradient-to-r from-[#fdc33e] via-[#38bdf8] to-[#013777]" : "bg-gradient-to-r from-[#013777] via-[#0284c7] to-[#38bdf8]"}`
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "contrast-dark relative p-6 sm:p-8 bg-gradient-to-br from-[#041830] via-[#012654] to-[#013777] border-b border-white/15 shrink-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: onClose,
                  "aria-label": "Close profile dialog",
                  className: "absolute top-5 right-5 p-2.5 text-sky-200 hover:text-white rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 transition-colors cursor-pointer",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left pr-0 sm:pr-10", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: `w-28 h-36 sm:w-32 sm:h-40 rounded-2xl overflow-hidden shrink-0 bg-[#061a33] shadow-xl ${isChairman || isCmd ? "border-2 border-[#fdc33e]/65" : "border-2 border-white/25"}`,
                    children: member.image ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "img",
                      {
                        src: member.image,
                        alt: member.name,
                        className: "w-full h-full object-cover object-top"
                      }
                    ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "w-full h-full flex items-center justify-center bg-gradient-to-br from-[#092545] to-[#013777] text-white",
                        "aria-label": `${member.name} profile image unavailable`,
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Stethoscope, { className: "w-12 h-12" })
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-center sm:justify-start gap-2 text-xs font-bold tracking-wide", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: isChairman || isCmd ? "!text-[#fdc33e]" : "!text-[#bae6fd]", children: isChairman ? "Chairman · Cairo Hospital" : isCmd ? "Founder, CEO & CMD · Cairo Hospital" : member.role }),
                    isChairman && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/40", "aria-hidden": "true", children: "·" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 !text-[#bae6fd]", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "w-3.5 h-3.5 !text-[#fdc33e]" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Worked in Nigeria since 1970" })
                      ] })
                    ] }),
                    isCmd && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/40", "aria-hidden": "true", children: "·" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 !text-[#bae6fd]", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "w-3.5 h-3.5 !text-[#fdc33e]" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Ain Shams '97 · African Union ASRIC" })
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "h3",
                    {
                      id: "doctor-dossier-title",
                      className: "text-2xl sm:text-3xl font-black !text-white tracking-tight leading-tight",
                      children: member.name
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold !text-white/95", children: member.title }),
                  member.education && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs !text-[#bae6fd] flex items-center justify-center sm:justify-start gap-1.5 font-medium pt-0.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      GraduationCap,
                      {
                        className: `w-4 h-4 shrink-0 ${isChairman ? "!text-[#fdc33e]" : isCmd ? "!text-teal-300" : "!text-[#bae6fd]"}`
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: member.education })
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 sm:p-8 overflow-y-auto space-y-7", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold text-[#013777] tracking-wide uppercase", children: member.isDoctor ? "Clinical Mandate & Medical Biography" : "Executive Mandate & Biography" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-[#1e293b] font-medium leading-relaxed", children: member.fullBio })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-6 border-t border-slate-200/80 grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "text-sm font-black text-[#061a33] flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: `w-4 h-4 ${isCmd ? "text-teal-600" : "text-[#b87c08]"} shrink-0` }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: member.isDoctor ? "Specialties & Academic Credentials" : "Professional Qualifications" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2.5", children: member.qualifications.map((q, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "li",
                    {
                      className: "flex items-start gap-2.5 text-xs sm:text-[13px] text-[#0f172a] font-medium leading-snug",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: `w-4 h-4 ${isCmd ? "text-teal-600" : "text-[#013777]"} shrink-0 mt-0.5` }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: q })
                      ]
                    },
                    i
                  )) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "text-sm font-black text-[#061a33] flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "w-4 h-4 text-teal-700 shrink-0" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Leadership & Clinical Milestones" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2.5", children: member.careerHighlights.map((h, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "li",
                    {
                      className: "flex items-start gap-2.5 text-xs sm:text-[13px] text-[#0f172a] font-medium leading-snug",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4 text-teal-700 shrink-0 mt-0.5" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: h })
                      ]
                    },
                    i
                  )) })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 py-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 shrink-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: onClose,
                  className: "px-4 py-2.5 rounded-xl text-xs font-bold text-slate-600 hover:text-[#061a33] hover:bg-slate-200/60 transition-colors cursor-pointer",
                  children: "Close Dossier"
                }
              ),
              member.isDoctor && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  onClick: () => {
                    const name = member.name;
                    onClose();
                    onOpenWhatsAppBooking(name);
                  },
                  className: "glass-button-whatsapp px-5 py-2.5 rounded-xl text-white font-extrabold text-xs inline-flex items-center gap-2 hover:scale-102 active:scale-98 transition-all cursor-pointer shadow-md",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-4 h-4 fill-current" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                      "Schedule Consultation with ",
                      member.name
                    ] })
                  ]
                }
              )
            ] })
          ]
        }
      )
    }
  );
};
const TeamSubpage = ({
  onNavigateHome,
  onOpenWhatsAppBooking
}) => {
  const [selectedDoctor, setSelectedDoctor] = reactExports.useState(null);
  const chairman = TEAM_MEMBERS.find((m) => m.id === "dr-ahmed-shaker") || TEAM_MEMBERS[0];
  const ceo = TEAM_MEMBERS.find((m) => m.id === "dr-mohammed-hesham") || TEAM_MEMBERS[1];
  const teamMembers = TEAM_MEMBERS.filter(
    (m) => m.id !== chairman.id && m.id !== ceo.id
  );
  const chairmanMetrics = [
    { value: "1970", label: "Worked in Nigeria since 1970" },
    { value: "130+", label: "Hospitals managed" },
    { value: "2019", label: "Cairo Hospital established" },
    { value: "MRCOG", label: "Qualification as listed in profile" }
  ];
  const ceoMetrics = [
    { value: "1997", label: "Ain Shams University Medical School" },
    { value: "25+ Yrs", label: "Orthopedic surgical leadership" },
    { value: "10 Yrs", label: "Stuttgart German orthopedic team (Kuwait)" },
    { value: "10 Yrs", label: "Nozha International Hospital (Cairo)" }
  ];
  const clinicalDepartments = [
    {
      dept: "Obstetrics & Gynaecology",
      lead: "Dr. Ahmed Shaker · Chairman",
      specialty: "Consultant Obstetrics & Gynaecology",
      procedures: ["Obstetrics & Gynaecology", "Infertility"]
    },
    {
      dept: "Orthopedic Surgery",
      lead: "Dr. Mohammed Hesham Shaker · Founder, CEO & CMD",
      specialty: "Consultant Orthopedic & Arthroplasty Surgeon · Ain Shams University (1997)",
      procedures: ["Arthroplasty", "Hand surgeries", "Foot and ankle surgeries", "External fixation & deformities"]
    },
    {
      dept: "Surgical Scope Listed for Dr. Wael Khalil",
      lead: "Dr. Wael Khalil · Bariatric Surgeon",
      specialty: "Scope listed in the supplied profile",
      procedures: ["Laparoscopic surgeries", "Bariatric surgeries", "Oncology surgeries"]
    },
    {
      dept: "Physical Therapy",
      lead: "Dr. Bassam",
      specialty: "Scope listed in the supplied profile",
      procedures: ["Physical therapy", "Myofascial therapy", "Cupping", "Acupuncture", "Neurological & musculoskeletal disorders"]
    },
    {
      dept: "Outpatient Specialist Clinics",
      lead: "Services listed in the profile",
      specialty: "Contact the hospital to confirm current clinic availability",
      procedures: ["Cardiology", "Neurology", "Nephrology", "Gastroenterology", "Endocrinology", "Family Medicine", "Tropical Medicine"]
    },
    {
      dept: "Emergency & Ambulance",
      lead: "Services listed in the profile",
      specialty: "Call to confirm current availability",
      procedures: ["Emergency Department", "Ambulance Service"]
    },
    {
      dept: "Diagnostics & Pharmacy",
      lead: "Services listed in the profile",
      specialty: "Contact the hospital to confirm availability",
      procedures: ["Laboratory", "X-Ray", "Ultrasound", "Pharmacy"]
    },
    {
      dept: "Medical Tourism",
      lead: "Support services listed in the profile",
      specialty: "Contact the hospital to confirm current arrangements",
      procedures: ["Visa provision", "Tickets", "Accommodation", "Transport", "Medical plan", "Representative follow-up"]
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-16 sm:space-y-24 pb-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SubpageHero,
      {
        badge: "Medical & Administrative Team",
        badgeIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-4 h-4 text-[#013777]" }),
        title: "Clinical & Administrative Team,",
        highlightedText: "Cairo Hospital Abuja.",
        description: "The team is led by Dr. Ahmed Shaker (Chairman) and Dr. Mohammed Hesham Shaker (Founder, CEO & CMD — Consultant Orthopedic & Arthroplasty Surgeon), supported by Dr. Wael Khalil (Bariatric Surgeon) and Dr. Bassam (Physical Therapy). Confirm current clinician and appointment availability directly with Cairo Hospital.",
        breadcrumbs: [{ label: "Our Medical Team" }],
        onNavigateHome,
        onOpenWhatsAppBooking: () => onOpenWhatsAppBooking(),
        stats: [
          { label: "Chairman’s work in Nigeria", value: "Since 1970" },
          { label: "Hospitals managed", value: "130+" },
          { label: "Cairo Hospital established", value: "2019" },
          { label: "Services listed in profile", value: "22" }
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 space-y-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { variant: "up", className: "text-center max-w-3xl mx-auto space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-[#013777] tracking-wide", children: "Office of the Chairman" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl sm:text-4xl font-black text-[#061a33] tracking-tight [text-wrap:balance]", children: "Chairman of Cairo Hospital" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-[#1e293b] font-medium", children: "The supplied profile notes that Dr. Ahmed Shaker worked in Nigeria from 1970 and served as NEPA Medical Director from 1970 to 1991." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { variant: "scale", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "glass-panel-dark contrast-dark relative rounded-[2rem] border border-[#fdc33e]/45 bg-gradient-to-br from-[#041830] via-[#012859] to-[#013777] shadow-2xl overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 w-full bg-gradient-to-r from-[#fdc33e] via-[#38bdf8] to-transparent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 sm:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-4 space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-[300px] sm:max-w-[340px] aspect-[4/5] rounded-2xl overflow-hidden border-2 border-[#fdc33e]/65 bg-[#061a33] shadow-2xl", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: chairman.image,
                  alt: chairman.name,
                  className: "w-full h-full object-cover object-top"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#031124] via-[#031124]/75 to-transparent" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "photo-caption absolute bottom-0 inset-x-0 p-4 sm:p-5 flex items-end justify-between gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-bold !text-[#fdc33e] tracking-wide", children: chairman.role }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg sm:text-xl font-black !text-white leading-snug", children: chairman.name })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "w-5 h-5 !text-[#fdc33e] shrink-0" })
              ] })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-8 space-y-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 text-xs font-bold tracking-wide !text-[#fdc33e]", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Chairman · Cairo Hospital" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/40", "aria-hidden": "true", children: "·" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "!text-[#bae6fd]", children: "MRCOG · Ain Shams University" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl sm:text-4xl font-black !text-white tracking-tight leading-tight", children: chairman.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs sm:text-sm font-semibold !text-[#bae6fd]", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: chairman.title }),
                  chairman.education && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/40", "aria-hidden": "true", children: "·" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 !text-white/95", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { className: "w-4 h-4 !text-[#fdc33e] shrink-0" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: chairman.education })
                    ] })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs sm:text-sm !text-sky-100 leading-relaxed", children: chairman.fullBio }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-4 border-y border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-0 sm:divide-x sm:divide-white/15", children: chairmanMetrics.map((m, mIdx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: `${mIdx === 0 ? "sm:pr-4" : mIdx === chairmanMetrics.length - 1 ? "sm:pl-4" : "sm:px-4"}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg sm:text-xl font-black !text-[#fdc33e] tabular-nums", children: m.value }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] sm:text-xs !text-sky-100 mt-0.5 leading-snug", children: m.label })
                  ]
                },
                mIdx
              )) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs font-bold !text-[#fdc33e] flex items-center gap-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "w-4 h-4 !text-[#fdc33e] shrink-0" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Fellowships & Appointments" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: chairman.qualifications.map((q, qIdx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "li",
                    {
                      className: "flex items-start gap-2 text-xs !text-sky-100 leading-snug",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3.5 h-3.5 !text-[#fdc33e] mt-0.5 shrink-0" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: q })
                      ]
                    },
                    qIdx
                  )) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs font-bold !text-[#bae6fd] flex items-center gap-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "w-4 h-4 !text-[#bae6fd] shrink-0" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Institutional Milestones" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: chairman.careerHighlights.map((h, hIdx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "li",
                    {
                      className: "flex items-start gap-2 text-xs !text-sky-100 leading-snug",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3.5 h-3.5 !text-[#bae6fd] mt-0.5 shrink-0" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: h })
                      ]
                    },
                    hIdx
                  )) })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-2 flex flex-wrap items-center gap-3.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    onClick: () => onOpenWhatsAppBooking(chairman.name),
                    className: "glass-button-whatsapp px-6 py-3 rounded-xl text-white font-extrabold text-xs sm:text-sm inline-flex items-center gap-2 transition-transform hover:scale-102 active:scale-98 cursor-pointer shadow-lg",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-4 h-4 fill-current" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Book Consultation with Dr. Ahmed Shaker" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    onClick: () => setSelectedDoctor(chairman),
                    className: "px-5 py-3 rounded-xl bg-white/12 hover:bg-white/20 border border-white/25 !text-white font-bold text-xs sm:text-sm inline-flex items-center gap-2 transition-colors cursor-pointer",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Open Chairman’s Official Dossier" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "w-3.5 h-3.5 !text-[#fdc33e]" })
                    ]
                  }
                )
              ] })
            ] })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { variant: "up", className: "text-center max-w-3xl mx-auto space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-[#013777] tracking-wide", children: "Office of the Founder, CEO & CMD" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl sm:text-4xl font-black text-[#061a33] tracking-tight [text-wrap:balance]", children: "Founder, CEO & Chief Medical Director" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-[#1e293b] font-medium", children: "Consultant Orthopedic & Arthroplasty Surgeon · Pioneering Arthroplasty, Trauma Surgeries, and Orthobiologics Stem Cells Regenerative Therapy in Nigeria." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { variant: "scale", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "glass-panel-dark contrast-dark relative rounded-[2rem] border border-[#fdc33e]/45 bg-gradient-to-br from-[#041830] via-[#012859] to-[#013777] shadow-2xl overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 w-full bg-gradient-to-r from-[#fdc33e] via-[#38bdf8] to-transparent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 sm:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-4 space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-[300px] sm:max-w-[340px] aspect-[4/5] rounded-2xl overflow-hidden border-2 border-[#fdc33e]/65 bg-[#061a33] shadow-2xl", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: ceo.image,
                  alt: ceo.name,
                  className: "w-full h-full object-cover object-top"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#031124] via-[#031124]/75 to-transparent" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "photo-caption absolute bottom-0 inset-x-0 p-4 sm:p-5 flex items-end justify-between gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-bold !text-[#fdc33e] tracking-wide", children: ceo.role }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg sm:text-xl font-black !text-white leading-snug", children: ceo.name })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "w-5 h-5 !text-[#fdc33e] shrink-0" })
              ] })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-8 space-y-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 text-xs font-bold tracking-wide !text-[#fdc33e]", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Founder, CEO & CMD · Cairo Hospital Abuja" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/40", "aria-hidden": "true", children: "·" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "!text-[#bae6fd]", children: "Ain Shams University (1997) · ASRIC African Union" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl sm:text-4xl font-black !text-white tracking-tight leading-tight", children: ceo.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs sm:text-sm font-semibold !text-[#bae6fd]", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: ceo.title }),
                  ceo.education && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/40", "aria-hidden": "true", children: "·" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 !text-white/95", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { className: "w-4 h-4 !text-[#fdc33e] shrink-0" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: ceo.education })
                    ] })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs sm:text-sm !text-sky-100 leading-relaxed", children: ceo.fullBio }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-4 border-y border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-0 sm:divide-x sm:divide-white/15", children: ceoMetrics.map((m, mIdx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: `${mIdx === 0 ? "sm:pr-4" : mIdx === ceoMetrics.length - 1 ? "sm:pl-4" : "sm:px-4"}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg sm:text-xl font-black !text-[#fdc33e] tabular-nums", children: m.value }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] sm:text-xs !text-sky-100 mt-0.5 leading-snug", children: m.label })
                  ]
                },
                mIdx
              )) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs font-bold !text-[#fdc33e] flex items-center gap-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "w-4 h-4 !text-[#fdc33e] shrink-0" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Specializations & Academic Appointments" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: ceo.qualifications.map((q, qIdx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "li",
                    {
                      className: "flex items-start gap-2 text-xs !text-sky-100 leading-snug",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3.5 h-3.5 !text-[#fdc33e] mt-0.5 shrink-0" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: q })
                      ]
                    },
                    qIdx
                  )) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs font-bold !text-[#bae6fd] flex items-center gap-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "w-4 h-4 !text-[#bae6fd] shrink-0" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Clinical Leadership & International Milestones" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: ceo.careerHighlights.map((h, hIdx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "li",
                    {
                      className: "flex items-start gap-2 text-xs !text-sky-100 leading-snug",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3.5 h-3.5 !text-[#bae6fd] mt-0.5 shrink-0" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: h })
                      ]
                    },
                    hIdx
                  )) })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-2 flex flex-wrap items-center gap-3.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    onClick: () => onOpenWhatsAppBooking(ceo.name),
                    className: "glass-button-whatsapp px-6 py-3 rounded-xl text-white font-extrabold text-xs sm:text-sm inline-flex items-center gap-2 transition-transform hover:scale-102 active:scale-98 cursor-pointer shadow-lg",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-4 h-4 fill-current" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Book Consultation with Dr. Mohammed Hesham" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    onClick: () => setSelectedDoctor(ceo),
                    className: "px-5 py-3 rounded-xl bg-white/12 hover:bg-white/20 border border-white/25 !text-white font-bold text-xs sm:text-sm inline-flex items-center gap-2 transition-colors cursor-pointer",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Open CEO & CMD’s Official Dossier" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "w-3.5 h-3.5 !text-[#fdc33e]" })
                    ]
                  }
                )
              ] })
            ] })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { variant: "up", className: "flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-4 border-b border-slate-200/90", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-[#013777] tracking-wide", children: "Medical & Administrative Team" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl sm:text-3xl font-black text-[#061a33] tracking-tight mt-0.5", children: "Hospital Specialists & Departmental Directors" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-600 font-medium", children: "Click any profile to review qualifications and clinical scope." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6", children: teamMembers.map((member, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { variant: "up", delay: idx % 3 * 85, className: "h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full glass-panel glass-panel-hover rounded-3xl border border-slate-200/90 bg-white overflow-hidden shadow-sm flex flex-col justify-between hover:border-[#013777]/30 transition-all duration-300 group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-64 w-full bg-slate-100 overflow-hidden", children: [
              member.image ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: member.image,
                  alt: member.name,
                  className: "w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                }
              ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "w-full h-full flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#e6f0fa] to-[#c9dced] text-[#013777]",
                  "aria-label": `${member.name} profile image unavailable`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Stethoscope, { className: "w-14 h-14" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-4xl font-black", children: member.name.split(" ").slice(-1)[0].charAt(0) })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-[#012654]/85 via-transparent to-transparent" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "photo-caption absolute bottom-3 left-4 right-4 text-white", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold !text-white/90 uppercase tracking-wider", children: member.role }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-black tracking-tight !text-white mt-0.5", children: member.name })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 space-y-3.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-extrabold text-[#013777] line-clamp-2 leading-snug", children: member.title }),
                member.education && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-xs text-slate-700 font-semibold mt-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { className: "w-3.5 h-3.5 text-[#013777] shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: member.education })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-[#1e293b] font-medium leading-relaxed line-clamp-3", children: member.fullBio }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1.5 pt-2.5 border-t border-slate-100", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1", children: member.qualifications.slice(0, 3).map((q, qIdx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "li",
                {
                  className: "flex items-start gap-1.5 text-xs text-[#0f172a] font-medium",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3.5 h-3.5 text-teal-600 mt-0.5 shrink-0" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "line-clamp-1", children: q })
                  ]
                },
                qIdx
              )) }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 pt-0 space-y-2", children: [
            member.isDoctor && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => onOpenWhatsAppBooking(member.name),
                className: "w-full glass-button-whatsapp inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl text-white font-extrabold text-xs shadow-xs transition-transform hover:scale-102 active:scale-98 cursor-pointer",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-3.5 h-3.5 fill-current" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Book Appointment" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => setSelectedDoctor(member),
                className: "w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#061a33] font-bold text-xs transition-colors cursor-pointer",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "View Qualifications" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "w-3.5 h-3.5 text-[#013777]" })
                ]
              }
            )
          ] })
        ] }) }, member.id)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch", "aria-labelledby": "care-team-photo-title", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Reveal,
          {
            as: "figure",
            variant: "left",
            className: "lg:col-span-7 relative min-h-[18rem] sm:min-h-[22rem] overflow-hidden rounded-[2rem] border border-slate-200 shadow-xl bg-slate-100",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: "/images/delegation/cairo-hospital-team-visit.jpg",
                  alt: "Cairo Hospital team photo from the supplied profile",
                  loading: "lazy",
                  decoding: "async",
                  className: "absolute inset-0 w-full h-full object-cover object-center"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-[#011633]/65 via-transparent to-transparent" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("figcaption", { className: "photo-caption absolute bottom-4 left-4 right-4 !text-white text-sm font-bold drop-shadow-md", children: "Team photograph from the supplied hospital profile" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { variant: "right", delay: 100, className: "lg:col-span-5 flex", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full glass-panel rounded-[2rem] border border-white/80 bg-white/90 p-7 sm:p-9 flex flex-col justify-center gap-4 shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-bold text-[#013777] tracking-wide flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-4 h-4 text-[#013777]", "aria-hidden": "true" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Cairo Hospital Care Team" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { id: "care-team-photo-title", className: "text-2xl sm:text-3xl font-black tracking-tight text-[#092545]", children: "Team and Institutional Photographs" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-relaxed text-[#2d435e]", children: "The supplied profile includes photographs of hospital representatives and the team. Contact Cairo Hospital to confirm current departments, clinicians, and appointment availability." })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { variant: "up", className: "text-center max-w-3xl mx-auto space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-black uppercase tracking-widest text-[#013777]", children: "Profile-Listed Departments & Scope" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl sm:text-4xl font-black text-[#092545] tracking-tight", children: "Services & Named Clinical Scopes" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-[#2d435e]", children: "The entries below reproduce departments, clinician names, and service scopes listed in the supplied profile. Contact the hospital to confirm current availability." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: clinicalDepartments.map((dept, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { variant: "up", delay: idx % 3 * 75, className: "h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full glass-panel p-6 rounded-3xl border border-slate-200/90 bg-white/90 shadow-sm space-y-4 hover:border-[#013777]/30 transition-all", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between pb-3 border-b border-slate-100", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-10 h-10 rounded-xl bg-sky-50 border border-sky-200 text-[#013777] flex items-center justify-center font-bold text-sm tabular-nums", children: [
              "0",
              idx + 1
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold text-slate-500 uppercase tracking-wider", children: "Profile Listing" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-black text-[#092545]", children: dept.dept }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold text-[#013777]", children: dept.lead }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-slate-500", children: dept.specialty })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 pt-2 border-t border-slate-100", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider", children: "Services & Scope Listed:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1", children: dept.procedures.map((proc, pIdx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-1.5 text-xs text-[#2d435e]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3.5 h-3.5 text-emerald-600 shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: proc })
            ] }, pIdx)) })
          ] })
        ] }) }, idx)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { variant: "scale", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "glass-panel p-8 sm:p-12 rounded-3xl border border-slate-200/90 bg-gradient-to-br from-white via-sky-50/40 to-slate-50 shadow-lg space-y-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-black uppercase tracking-widest text-[#013777]", children: "Backgrounds Named in the Profile" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl sm:text-3xl font-black text-[#092545] tracking-tight", children: "Education & Professional Background" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs sm:text-sm text-[#2d435e] leading-relaxed", children: "The supplied profile names Ain Shams University, the entry “ACC. AZHAR UNIVERSITY,” Cairo University, and Dr. Ahmed Shaker’s MRCOG qualification. Descriptions below retain the source wording where relevant." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-black text-[#092545]", children: "MRCOG" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-slate-500", children: "Profile wording: “member of the Royal College of Surgeons in Dublin”" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-black text-[#092545]", children: "Ain Shams University" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-slate-500", children: "Named in the profiles of Dr. Ahmed Shaker and Dr. Mohammed Hesham" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-black text-[#092545]", children: "“ACC. AZHAR UNIVERSITY”" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-slate-500", children: "Source wording shown for Mr. Mohammed Fadl" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-black text-[#092545]", children: "Cairo University" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-slate-500", children: "Faculty of Science · Mr. Bassem Makhlouf" })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { variant: "scale", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "contrast-dark relative overflow-hidden rounded-3xl border border-[#fdc33e]/40 bg-gradient-to-br from-[#041830] via-[#012859] to-[#013777] p-8 sm:p-12 text-white shadow-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 absolute inset-x-0 top-0 bg-gradient-to-r from-[#fdc33e] via-[#38bdf8] to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-6 space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold !text-[#fdc33e] tracking-wide", children: "Executive Clinical Consultations" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl sm:text-3xl font-black tracking-tight leading-tight !text-white [text-wrap:balance]", children: "Consult Directly with Cairo Hospital Leadership" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs sm:text-sm !text-sky-100/95 leading-relaxed max-w-xl", children: "Arrange an in-person appointment at our Garki 2 hospital in Abuja with Dr. Ahmed Shaker (Obstetrics & Gynaecology) or Dr. Mohammed Hesham Shaker (Orthopedics, Arthroplasty & Stem Cells Therapy)." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-2 flex flex-wrap gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  onClick: () => onOpenWhatsAppBooking(chairman.name),
                  className: "glass-button-whatsapp inline-flex items-center gap-2 px-5 py-3 rounded-2xl text-white font-extrabold text-xs sm:text-sm shadow-lg transition-transform hover:scale-102 active:scale-98 cursor-pointer",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-4 h-4 fill-current" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Book with Dr. Ahmed Shaker" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  onClick: () => onOpenWhatsAppBooking(ceo.name),
                  className: "glass-button-whatsapp inline-flex items-center gap-2 px-5 py-3 rounded-2xl text-white font-extrabold text-xs sm:text-sm shadow-lg transition-transform hover:scale-102 active:scale-98 cursor-pointer",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-4 h-4 fill-current" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Book with Dr. Mohammed Hesham" })
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-6 lg:border-l lg:border-white/15 lg:pl-8 space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => setSelectedDoctor(chairman),
                className: "w-full text-left flex items-center gap-4 p-3.5 rounded-2xl bg-white/10 hover:bg-white/15 border border-[#fdc33e]/35 transition-colors cursor-pointer",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: chairman.image,
                      alt: chairman.name,
                      className: "w-14 h-16 rounded-xl object-cover object-top border-2 border-[#fdc33e]/60 bg-[#061a33] shrink-0"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 space-y-0.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-bold !text-[#fdc33e]", children: "Chairman" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-base font-black !text-white truncate", children: chairman.name }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] !text-[#bae6fd] truncate", children: "MRCOG · Ain Shams University" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] !text-sky-100 truncate", children: "Open Official Dossier →" })
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => setSelectedDoctor(ceo),
                className: "w-full text-left flex items-center gap-4 p-3.5 rounded-2xl bg-white/10 hover:bg-white/15 border border-[#fdc33e]/35 transition-colors cursor-pointer",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: ceo.image,
                      alt: ceo.name,
                      className: "w-14 h-16 rounded-xl object-cover object-top border-2 border-[#fdc33e]/60 bg-[#061a33] shrink-0"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 space-y-0.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-bold !text-[#fdc33e]", children: "Founder, CEO & CMD" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-base font-black !text-white truncate", children: ceo.name }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] !text-[#bae6fd] truncate", children: "Orthopedic Consultant · Arthroplasty & Stem Cells" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] !text-sky-100 truncate", children: "Open Official Dossier →" })
                  ] })
                ]
              }
            )
          ] })
        ] })
      ] }) })
    ] }),
    selectedDoctor && /* @__PURE__ */ jsxRuntimeExports.jsx(
      DoctorModal,
      {
        member: selectedDoctor,
        onClose: () => setSelectedDoctor(null),
        onOpenWhatsAppBooking: (docName) => {
          setSelectedDoctor(null);
          onOpenWhatsAppBooking(docName);
        }
      }
    )
  ] });
};
const ContactSubpage = ({
  onNavigateHome,
  onOpenWhatsAppBooking
}) => {
  const [formData, setFormData] = reactExports.useState({
    name: "",
    phone: "",
    department: "General Inquiries & Appointments",
    message: ""
  });
  const [copiedAddress, setCopiedAddress] = reactExports.useState(false);
  const [submitted, setSubmitted] = reactExports.useState(false);
  const handleCopyAddress = () => {
    navigator.clipboard.writeText(HOSPITAL_CONTACT.address);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2e3);
  };
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    const text = `🏥 *Cairo Hospital Abuja - Patient Inquiry*
━━━━━━━━━━━━━━━━━━━━━━━━━
👤 *From:* ${formData.name}
📱 *Phone:* ${formData.phone}
🏢 *Department:* ${formData.department}
📝 *Inquiry Details:* ${formData.message || "Information requested"}
━━━━━━━━━━━━━━━━━━━━━━━━━
📍 *Facility:* 16 Oke Agbe Street, Garki 2, Abuja`;
    const encoded = encodeURIComponent(text);
    const waUrl = `https://wa.me/${HOSPITAL_CONTACT.whatsappNumber}?text=${encoded}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };
  const departments = [
    {
      name: "Emergency Department & Ambulance Services",
      phone: HOSPITAL_CONTACT.phone1,
      hours: "Call to confirm current availability",
      desc: "Emergency Department and ambulance services are listed in the hospital profile. Call the hospital to confirm immediate access and response arrangements.",
      urgent: true
    },
    {
      name: "Specialist Outpatient Clinics",
      phone: HOSPITAL_CONTACT.phone1,
      hours: "By appointment · confirm schedule",
      desc: "Contact the hospital to confirm current clinic and consultant availability."
    },
    {
      name: "Orthopedic & Arthroplasty Clinic",
      phone: HOSPITAL_CONTACT.phone1,
      hours: "By appointment · confirm schedule",
      desc: "Contact the hospital to confirm consultation availability with Dr. Mohammed Hesham Shaker (Founder, CEO & CMD)."
    },
    {
      name: "Obstetrics & Gynaecology Clinic",
      phone: HOSPITAL_CONTACT.phone1,
      hours: "By appointment · confirm schedule",
      desc: "Contact the hospital to arrange an appointment with Dr. Ahmed Shaker."
    },
    {
      name: "Dr. Wael Khalil · Bariatric, Laparoscopic & Oncology Surgery",
      phone: HOSPITAL_CONTACT.phone1,
      hours: "By appointment · confirm availability",
      desc: "Clinical scope listed in the current hospital profile; case-specific services are confirmed by the clinical team."
    },
    {
      name: "Dr. Bassam · Physical Therapy & Myofascial Therapy",
      phone: HOSPITAL_CONTACT.phone1,
      hours: "By appointment · confirm availability",
      desc: "Physical therapy, myofascial therapy, cupping, and acupuncture are listed in the hospital profile."
    },
    {
      name: "Diagnostic Laboratory & Digital X-Ray",
      phone: HOSPITAL_CONTACT.phone1,
      hours: "Call to confirm availability",
      desc: "Laboratory and digital X-ray services are listed in the hospital profile."
    },
    {
      name: "Cairo Hospital Pharmacy Department",
      phone: HOSPITAL_CONTACT.phone1,
      hours: "Call to confirm opening hours",
      desc: "A pharmacy department is listed in the profile; contact the hospital to confirm hours and product availability."
    },
    {
      name: "Medical Tourism",
      phone: HOSPITAL_CONTACT.phone1,
      hours: "Contact the hospital for inquiries",
      desc: "Support for the destinations listed in the profile: Dubai, the UK, Nigeria, Egypt, the USA, and Turkey."
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-16 sm:space-y-24 pb-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SubpageHero,
      {
        badge: "Hospital Campus & Patient Coordination",
        badgeIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-4 h-4 text-[#013777]" }),
        title: "Connect with Cairo Hospital,",
        highlightedText: "Garki 2, Abuja.",
        description: "Contact Cairo Hospital for outpatient appointments, information about the Emergency Department and ambulance services, or directions to the hospital campus in Garki 2, Abuja.",
        breadcrumbs: [{ label: "Contact Us" }],
        onNavigateHome,
        onOpenWhatsAppBooking,
        stats: [
          { label: "Emergency Department", value: "Listed" },
          { label: "Ambulance Services", value: "Listed" },
          { label: "Garki 2 Campus", value: "16 Oke Agbe" },
          { label: "Appointment Requests", value: "WhatsApp" }
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 space-y-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { variant: "up", delay: 0, className: "h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full glass-panel p-6 rounded-3xl border border-rose-300 bg-rose-50/70 shadow-sm space-y-4 flex flex-col justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-2xl bg-rose-100 text-rose-700 flex items-center justify-center font-bold", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Ambulance, { className: "w-6 h-6" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-black uppercase tracking-wider text-rose-700 bg-rose-100 px-2 py-0.5 rounded-md", children: "Emergency & Ambulance Services" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-black text-[#092545]", children: "Emergency Department" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-[#1e293b] font-medium", children: "Emergency Department and ambulance services are listed in the hospital profile. Call to confirm current access and availability." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: `tel:${HOSPITAL_CONTACT.phone1}`,
              className: "inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-black text-xs shadow-xs transition-colors cursor-pointer",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-4 h-4" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: HOSPITAL_CONTACT.phone1 })
              ]
            }
          )
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { variant: "up", delay: 70, className: "h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full glass-panel p-6 rounded-3xl border border-slate-300 bg-white shadow-sm space-y-4 flex flex-col justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-2xl bg-sky-50 text-[#013777] flex items-center justify-center font-bold border border-sky-200", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-6 h-6" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-black uppercase tracking-wider text-[#013777] bg-sky-100 px-2 py-0.5 rounded-md", children: "Hospital Campus" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-black text-[#092545]", children: "Physical Address" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-[#092545] font-bold", children: HOSPITAL_CONTACT.address })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: handleCopyAddress,
              className: "inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-[#092545] font-black text-xs transition-colors cursor-pointer",
              children: copiedAddress ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4 text-emerald-600" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-700", children: "Address Copied!" })
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "w-4 h-4 text-[#013777]" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Copy Campus Address" })
              ] })
            }
          )
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { variant: "up", delay: 140, className: "h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full glass-panel p-6 rounded-3xl border border-emerald-300 bg-emerald-50/70 shadow-sm space-y-4 flex flex-col justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-6 h-6" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-black uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-md", children: "WhatsApp Inquiry" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-black text-[#092545]", children: "WhatsApp Portal" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-[#1e293b] font-medium", children: "Use WhatsApp to request an appointment or ask a general service question. Response times may vary." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: `https://wa.me/${HOSPITAL_CONTACT.whatsappNumber}`,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-black text-xs shadow-xs transition-colors cursor-pointer",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-4 h-4 fill-current" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  "Chat +",
                  HOSPITAL_CONTACT.whatsappNumber
                ] })
              ]
            }
          )
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { variant: "up", delay: 210, className: "h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full glass-panel p-6 rounded-3xl border border-slate-300 bg-white shadow-sm space-y-4 flex flex-col justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-2xl bg-slate-100 text-[#092545] flex items-center justify-center font-bold border border-slate-200", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-6 h-6" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-black uppercase tracking-wider text-slate-700 bg-slate-100 px-2 py-0.5 rounded-md", children: "Service Availability" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-black text-[#092545]", children: "Confirm Before Visiting" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-[#1e293b] space-y-1 font-medium", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-[#092545]", children: "Emergency Department & Ambulance:" }),
                " Call to confirm availability"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-[#092545]", children: "Outpatient Clinics:" }),
                " Call to confirm schedules"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-[#092545]", children: "Pharmacy:" }),
                " Call to confirm opening hours"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-[#092545]", children: "Laboratory & diagnostics:" }),
                " Call to confirm availability"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-2.5 px-3 rounded-xl bg-slate-100 text-center text-xs font-black text-slate-800 border border-slate-200", children: "Call ahead to confirm current service availability" })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { variant: "left", delay: 60, className: "lg:col-span-7 space-y-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200/90 bg-white/95 shadow-md space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-black text-[#092545]", children: "Campus Location & Navigation" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-500", children: "16 Oke Agbe Street, Garki 2, Abuja, FCTA" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: "https://maps.google.com/?q=16+Oke+Agbe+Street+Garki+2+Abuja",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#013777] text-white text-xs font-bold hover:bg-[#092545] transition-colors cursor-pointer self-start sm:self-auto",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Open in Google Maps" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "w-3.5 h-3.5" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-slate-200 relative shadow-inner bg-slate-100", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "iframe",
            {
              title: "Cairo Hospital Abuja Location Map",
              src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.354674315357!2d7.487042575775317!3d9.031388989063541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0bcf5311e967%3A0xe54e58b16e1dbb5b!2sOke-Agbe%20St%2C%20Garki%202%2C%20Abuja!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng",
              className: "w-full h-full border-0",
              loading: "lazy",
              referrerPolicy: "no-referrer-when-downgrade"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/60", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Car, { className: "w-5 h-5 text-[#013777] shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold text-[#092545]", children: "Visitor Parking" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-slate-500", children: "Contact the hospital to confirm arrangements" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/60", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Accessibility, { className: "w-5 h-5 text-teal-600 shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold text-[#092545]", children: "Accessibility Information" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-slate-500", children: "Contact the hospital to confirm access arrangements" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/60", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "w-5 h-5 text-indigo-600 shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold text-[#092545]", children: "Emergency & Ambulance" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-slate-500", children: "Listed in the profile; call to confirm availability" })
              ] })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { variant: "right", delay: 140, className: "lg:col-span-5 space-y-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "form",
          {
            onSubmit: handleSendMessage,
            className: "glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200/90 bg-white/95 shadow-md space-y-5",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 text-[11px] font-bold text-[#013777] mb-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "w-3.5 h-3.5" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Direct Desk Inquiry" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-black text-[#092545]", children: "Send an Official Inquiry" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-[#2d435e]", children: "Your message will open in WhatsApp. Response times may vary; call directly for urgent inquiries." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold uppercase tracking-wider text-[#013777] mb-1", children: "Your Full Name *" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "text",
                      required: true,
                      value: formData.name,
                      onChange: (e) => setFormData({ ...formData, name: e.target.value }),
                      placeholder: "e.g., Alh. Ibrahim Danladi",
                      className: "w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm text-[#092545] focus:ring-2 focus:ring-[#013777] outline-none"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold uppercase tracking-wider text-[#013777] mb-1", children: "Phone / WhatsApp Number *" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "tel",
                      required: true,
                      value: formData.phone,
                      onChange: (e) => setFormData({ ...formData, phone: e.target.value }),
                      placeholder: "e.g., +234 803 123 4567",
                      className: "w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm text-[#092545] focus:ring-2 focus:ring-[#013777] outline-none"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold uppercase tracking-wider text-[#013777] mb-1", children: "Department of Interest" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "select",
                    {
                      value: formData.department,
                      onChange: (e) => setFormData({ ...formData, department: e.target.value }),
                      className: "w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm text-[#092545] focus:ring-2 focus:ring-[#013777] outline-none bg-white cursor-pointer",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "General Inquiries & Appointments", children: "General Inquiries & Appointments" }),
                        MEDICAL_SERVICES.map((service) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: service.title, children: service.title }, service.id))
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold uppercase tracking-wider text-[#013777] mb-1", children: "Your Message / Medical Details" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "textarea",
                    {
                      rows: 4,
                      value: formData.message,
                      onChange: (e) => setFormData({ ...formData, message: e.target.value }),
                      placeholder: "Briefly state your inquiry, medical questions, or requested appointment date...",
                      className: "w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm text-[#092545] focus:ring-2 focus:ring-[#013777] outline-none resize-none"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "submit",
                  className: "w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm shadow-md shadow-[#25D366]/25 transition-all transform active:scale-95 cursor-pointer",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-4 h-4 fill-current" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Submit to WhatsApp Coordinator" })
                  ]
                }
              ),
              submitted && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4 shrink-0 text-emerald-600" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "WhatsApp opened! You can now send your pre-formatted message directly." })
              ] })
            ]
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { variant: "up", className: "text-center max-w-3xl mx-auto space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-black uppercase tracking-widest text-[#013777]", children: "Internal Lines" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl sm:text-4xl font-black text-[#092545] tracking-tight", children: "Hospital Department Telephone Directory" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-[#2d435e]", children: "Direct contact numbers for specialized wards, labs, pharmacy, and corporate inquiries." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: departments.map((dept, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { variant: "up", delay: idx % 3 * 75, className: "h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `h-full glass-panel p-6 rounded-3xl border shadow-sm space-y-4 flex flex-col justify-between ${dept.urgent ? "border-rose-200 bg-rose-50/30" : "border-slate-200/90 bg-white/95"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-[#013777]", children: dept.hours }),
                  dept.urgent && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold text-rose-700 bg-rose-100 px-2 py-0.5 rounded-md", children: "Call to confirm" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-black text-[#092545]", children: dept.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-[#2d435e]", children: dept.desc })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-3 border-t border-slate-100 flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-mono font-bold text-slate-600", children: dept.phone }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "a",
                  {
                    href: `tel:${dept.phone}`,
                    className: "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-[#013777] hover:text-white text-[#092545] text-xs font-bold transition-colors cursor-pointer",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-3 h-3" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Call Now" })
                    ]
                  }
                )
              ] })
            ]
          }
        ) }, idx)) })
      ] })
    ] })
  ] });
};
const BookingSubpage = ({
  onNavigateHome,
  preselectedSpecialty,
  preselectedDoctor
}) => {
  const [formData, setFormData] = reactExports.useState({
    patientName: "",
    patientPhone: "",
    specialty: preselectedSpecialty || "Orthopedic Surgery",
    doctorPreference: preselectedDoctor || "First Available Consultant",
    preferredDate: "",
    preferredTime: "No preference",
    visitType: "consultation",
    complaint: ""
  });
  const [hasReports, setHasReports] = reactExports.useState(false);
  const [isCopied, setIsCopied] = reactExports.useState(false);
  const [bookingDispatched, setBookingDispatched] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (preselectedSpecialty) {
      setFormData((prev) => ({ ...prev, specialty: preselectedSpecialty }));
    }
    if (preselectedDoctor) {
      const normalized = preselectedDoctor.toLowerCase();
      let matchedOption = preselectedDoctor;
      let matchedSpecialty;
      if (normalized.includes("shaker")) {
        matchedOption = "Dr. Ahmed Shaker (Chairman - MRCOG Obs & Gyn)";
        if (!preselectedSpecialty) matchedSpecialty = "Obstetrics & Gynaecology";
      } else if (normalized.includes("hesham")) {
        matchedOption = "Dr. Mohammed Hesham Shaker (CEO & CMD - Orthopedic & Arthroplasty)";
        if (!preselectedSpecialty) matchedSpecialty = "Orthopedic Surgery";
      } else if (normalized.includes("bassam")) {
        matchedOption = "Dr. Bassam (Physical Therapy, Myofascial Therapy, Cupping & Acupuncture)";
        if (!preselectedSpecialty) matchedSpecialty = "Physiotherapy";
      } else if (normalized.includes("wael")) {
        matchedOption = "Dr. Wael Khalil (Bariatric, Laparoscopic & Oncology Surgeries)";
        if (!preselectedSpecialty) matchedSpecialty = "General Surgery";
      }
      setFormData((prev) => ({
        ...prev,
        doctorPreference: matchedOption,
        ...matchedSpecialty ? { specialty: matchedSpecialty } : {}
      }));
    }
  }, [preselectedSpecialty, preselectedDoctor]);
  const generateWhatsAppMessage = () => {
    return `🏥 *CAIRO HOSPITAL ABUJA - PATIENT APPOINTMENT REQUEST*
━━━━━━━━━━━━━━━━━━━━━━━━━
👤 *Patient Name:* ${formData.patientName || "[Patient Name]"}
📱 *Phone / WhatsApp:* ${formData.patientPhone || "[Phone Number]"}
🩺 *Department / Specialty:* ${formData.specialty}
👨‍⚕️ *Consultant Preference:* ${formData.doctorPreference}
🎯 *Visit Purpose:* ${formData.visitType.toUpperCase()}
📅 *Preferred Date:* ${formData.preferredDate || "Earliest Available Slot"}
⏰ *Preferred Window:* ${formData.preferredTime}
📁 *Prior MRI / X-Rays / Labs Available:* ${hasReports ? "YES" : "NO"}
📝 *Chief Complaint / Symptoms:* ${formData.complaint || "General clinical review requested"}
━━━━━━━━━━━━━━━━━━━━━━━━━
📍 *Facility:* 16 Oke Agbe Street, Garki 2, Abuja
_Dispatched via Cairo Hospital Official Web Booking Portal_`;
  };
  const handleDispatchWhatsApp = (e) => {
    if (e) e.preventDefault();
    if (!formData.patientName || !formData.patientPhone) return;
    const message = generateWhatsAppMessage();
    const encoded = encodeURIComponent(message);
    const waUrl = `https://wa.me/${HOSPITAL_CONTACT.whatsappNumber}?text=${encoded}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
    setBookingDispatched(true);
  };
  const handleCopyClipboard = () => {
    const message = generateWhatsAppMessage();
    navigator.clipboard.writeText(message);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2e3);
  };
  const bookingFaqs = [
    {
      q: "How rapidly will the hospital coordinator reply on WhatsApp?",
      a: "Send your request through WhatsApp and the coordination desk can confirm consultant availability, clinic hours, and appointment options. Response times may vary."
    },
    {
      q: "Can I send my previous MRI, CT scans, or laboratory reports via WhatsApp?",
      a: "Yes, absolutely! Once you initiate the chat using this button, you can directly upload your PDF reports, DICOM imaging summaries, or photos of your prior prescriptions for preliminary review."
    },
    {
      q: "What if I need immediate emergency medical attention?",
      a: "The hospital profile lists an Emergency Department and ambulance services. For urgent care, contact Cairo Hospital by phone at +234 912 979 9999 or go to 16 Oke Agbe Street, Garki 2, Abuja. Do not wait for a WhatsApp response in a life-threatening emergency."
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-16 sm:space-y-24 pb-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SubpageHero,
      {
        badge: "Direct WhatsApp Patient Scheduling",
        badgeIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-4 h-4 text-emerald-600" }),
        title: "Direct Appointment Booking,",
        highlightedText: "Straight to WhatsApp.",
        description: "Request a consultation with Dr. Ahmed Shaker, Dr. Mohammed Hesham, Dr. Wael Khalil, Dr. Bassam, or one of the hospital’s listed specialist clinics. Your appointment request is formatted for the WhatsApp coordination desk in Abuja.",
        breadcrumbs: [{ label: "Direct WhatsApp Booking" }],
        onNavigateHome,
        stats: [
          { label: "Coordination", value: "Instant" },
          { label: "Consultant Choice", value: "Direct" },
          { label: "Booking Fee", value: "₦0" },
          { label: "Confidentiality", value: "100%" }
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 space-y-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { variant: "left", className: "lg:col-span-7", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "form",
          {
            onSubmit: handleDispatchWhatsApp,
            className: "glass-panel p-6 sm:p-10 rounded-3xl border border-slate-200/90 bg-white/95 shadow-lg space-y-6",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pb-4 border-b border-slate-200", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-black uppercase tracking-widest text-[#013777]", children: "Step-by-Step Clinical Intake" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-black text-[#092545]", children: "Patient Details & Appointment Preferences" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-500 mt-1", children: "Fill in the details below. They will automatically format into your official WhatsApp appointment message." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs font-black uppercase tracking-wider text-[#013777] flex items-center gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-4 h-4" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "1. Patient Identification" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold text-[#092545] mb-1", children: "Patient Full Name *" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        type: "text",
                        required: true,
                        value: formData.patientName,
                        onChange: (e) => setFormData({ ...formData, patientName: e.target.value }),
                        placeholder: "e.g., Hajia Amina Bello",
                        className: "w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm text-[#092545] focus:ring-2 focus:ring-[#013777] outline-none"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold text-[#092545] mb-1", children: "Phone / WhatsApp Number *" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        type: "tel",
                        required: true,
                        value: formData.patientPhone,
                        onChange: (e) => setFormData({ ...formData, patientPhone: e.target.value }),
                        placeholder: "e.g., +234 803 000 0000",
                        className: "w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm text-[#092545] focus:ring-2 focus:ring-[#013777] outline-none"
                      }
                    )
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 pt-4 border-t border-slate-100", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs font-black uppercase tracking-wider text-[#013777] flex items-center gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Stethoscope, { className: "w-4 h-4" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "2. Clinical Service & Doctor Preference" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold text-[#092545] mb-1", children: "Medical Specialty *" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "select",
                      {
                        value: formData.specialty,
                        onChange: (e) => setFormData({ ...formData, specialty: e.target.value }),
                        className: "w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm text-[#092545] focus:ring-2 focus:ring-[#013777] outline-none bg-white cursor-pointer",
                        children: MEDICAL_SERVICES.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: s.title, children: s.title }, s.id))
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold text-[#092545] mb-1", children: "Consultant Preference" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "select",
                      {
                        value: formData.doctorPreference,
                        onChange: (e) => setFormData({ ...formData, doctorPreference: e.target.value }),
                        className: "w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm text-[#092545] focus:ring-2 focus:ring-[#013777] outline-none bg-white cursor-pointer",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Dr. Mohammed Hesham Shaker (CEO & CMD - Orthopedic & Arthroplasty)", children: "Dr. Mohammed Hesham Shaker (CEO & CMD - Orthopedic & Arthroplasty)" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Dr. Ahmed Shaker (Chairman - MRCOG Obs & Gyn)", children: "Dr. Ahmed Shaker (Chairman - MRCOG Obs & Gyn)" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Dr. Bassam (Physical Therapy, Myofascial Therapy, Cupping & Acupuncture)", children: "Dr. Bassam (Physical Therapy, Myofascial Therapy, Cupping & Acupuncture)" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Dr. Wael Khalil (Bariatric, Laparoscopic & Oncology Surgeries)", children: "Dr. Wael Khalil (Bariatric, Laparoscopic & Oncology Surgeries)" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "First Available Consultant", children: "First Available Consultant" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Medical Tourism Overseas Coordination Desk", children: "Medical Tourism Overseas Coordination Desk" })
                        ]
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold text-[#092545] mb-1", children: "Visit Category" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-2", children: [
                    { id: "consultation", label: "Consultation" },
                    { id: "surgery", label: "Surgery / Arthroplasty" },
                    { id: "rehabilitation", label: "Physical Therapy / Rehab" },
                    { id: "medical-tourism", label: "Medical Tourism" }
                  ].map((type) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => setFormData({ ...formData, visitType: type.id }),
                      className: `p-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer text-center ${formData.visitType === type.id ? "bg-[#013777] text-white shadow-xs" : "bg-slate-50 border border-slate-200 text-slate-700 hover:bg-slate-100"}`,
                      children: type.label
                    },
                    type.id
                  )) })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 pt-4 border-t border-slate-100", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs font-black uppercase tracking-wider text-[#013777] flex items-center gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-4 h-4" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "3. Preferred Schedule" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold text-[#092545] mb-1", children: "Preferred Date" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        type: "date",
                        value: formData.preferredDate,
                        onChange: (e) => setFormData({ ...formData, preferredDate: e.target.value }),
                        className: "w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm text-[#092545] focus:ring-2 focus:ring-[#013777] outline-none"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold text-[#092545] mb-1", children: "Preferred Time Slot" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "select",
                      {
                        value: formData.preferredTime,
                        onChange: (e) => setFormData({ ...formData, preferredTime: e.target.value }),
                        className: "w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm text-[#092545] focus:ring-2 focus:ring-[#013777] outline-none bg-white cursor-pointer",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "No preference", children: "No preference" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Morning preference", children: "Morning preference" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Afternoon preference", children: "Afternoon preference" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Evening preference", children: "Evening preference" })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-[11px] text-slate-500", children: "This is a time preference only; the hospital will confirm availability." })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 pt-4 border-t border-slate-100", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs font-black uppercase tracking-wider text-[#013777] flex items-center gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-4 h-4" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "4. Medical History / Symptoms" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold text-[#092545] mb-1", children: "Describe Your Symptoms or Medical Needs" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "textarea",
                    {
                      rows: 3,
                      value: formData.complaint,
                      onChange: (e) => setFormData({ ...formData, complaint: e.target.value }),
                      placeholder: "e.g., Chronic knee stiffness for 6 months, looking for non-surgical orthobiologics or total knee evaluation...",
                      className: "w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm text-[#092545] font-medium placeholder:text-slate-500 focus:ring-2 focus:ring-[#013777] outline-none resize-none"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "checkbox",
                      id: "reportsCheck",
                      checked: hasReports,
                      onChange: (e) => setHasReports(e.target.checked),
                      className: "w-4 h-4 rounded text-[#013777] border-slate-300 focus:ring-[#013777]"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "reportsCheck", className: "text-xs text-[#0f172a] font-bold cursor-pointer", children: "I have recent MRI scans, X-rays, or laboratory reports to share on WhatsApp" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-4 border-t border-slate-200 space-y-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "submit",
                    className: "w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-black text-sm sm:text-base shadow-lg shadow-[#25D366]/30 transition-all transform active:scale-95 cursor-pointer",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-5 h-5 fill-current" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Launch WhatsApp & Send Appointment Ticket" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs text-slate-700 font-bold pt-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: handleCopyClipboard,
                      className: "inline-flex items-center gap-1.5 hover:text-[#013777] font-bold cursor-pointer",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "w-3.5 h-3.5 text-[#013777]" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: isCopied ? "Message Copied to Clipboard!" : "Copy Formatted Text" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 text-slate-600", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "w-3.5 h-3.5 text-emerald-600" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Encrypted & Confidential" })
                  ] })
                ] })
              ] })
            ]
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { variant: "right", delay: 120, className: "lg:col-span-5 space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-panel p-6 sm:p-7 rounded-3xl border border-sky-400/40 bg-[#071324] text-white shadow-xl space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between pb-3 border-b border-white/20", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-3 h-3 rounded-full bg-emerald-400 animate-pulse" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-black uppercase tracking-wider text-emerald-300", children: "Live Message Preview" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-sky-200 font-bold", children: "WhatsApp Dispatch Format" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 rounded-2xl bg-[#142236] border border-white/20 font-mono text-xs text-sky-50 font-semibold space-y-2 leading-relaxed whitespace-pre-wrap select-all shadow-inner", children: generateWhatsAppMessage() }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-sky-100 leading-normal flex items-start gap-2 pt-1 font-medium", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4 text-emerald-400 shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "When you tap the green button, WhatsApp opens with this message already typed. Simply press send inside WhatsApp." })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs font-bold text-amber-800", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-4 h-4 text-amber-600" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Emergency Department & Ambulance" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-amber-700 leading-relaxed", children: [
              "These services are listed in the supplied profile. Call directly to confirm current access; do not wait for a WhatsApp reply in a life-threatening emergency. Hospital phone:",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `tel:${HOSPITAL_CONTACT.phone1}`, className: "font-bold underline text-amber-950", children: HOSPITAL_CONTACT.phone1 }),
              "."
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-6 max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { variant: "up", className: "text-center space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-black uppercase tracking-widest text-[#013777]", children: "Help & Information" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-black text-[#092545]", children: "Frequently Asked Questions About Booking" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: bookingFaqs.map((faq, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { variant: "up", delay: idx * 70, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-panel p-5 rounded-2xl border border-slate-200/90 bg-white/95 shadow-xs space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-black text-[#092545]", children: faq.q }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs sm:text-sm text-[#2d435e] leading-relaxed", children: faq.a })
        ] }) }, idx)) })
      ] })
    ] })
  ] });
};
const MedicalTourismSubpage = ({
  onNavigateHome,
  onOpenWhatsAppBooking
}) => {
  const [selectedRegion, setSelectedRegion] = reactExports.useState("all");
  const [openFaqIndex, setOpenFaqIndex] = reactExports.useState(null);
  const [plannerDestination, setPlannerDestination] = reactExports.useState("Egypt");
  const [plannerSpecialty, setPlannerSpecialty] = reactExports.useState("Orthopedics & Joint Replacement");
  const [plannerCompanion, setPlannerCompanion] = reactExports.useState("Traveling with 1 Companion");
  const destinations = [
    {
      id: "egypt",
      country: "Egypt",
      region: "middle-east",
      flag: "🇪🇬",
      tagline: "Premier Orthopedic, Stem Cell & Tertiary Surgical Care in Cairo",
      network: "Cleopatra Hospitals Group & Leading University Surgical Centres",
      leadTime: "3 - 5 Days Expedited Coordination",
      badge: "Flagship Partner Hub",
      specialties: [
        "Complex Joint Replacements (Knee & Hip)",
        "Orthobiologics & Stem Cell Regenerative Therapy",
        "Spine Reconstruction & Neurosurgery",
        "Advanced Ophthalmology & Dental",
        "Cardiovascular Interventions & Bypass"
      ],
      highlights: [
        "Direct institutional relationship via Egyptian consultant founders",
        "Seamless clinical continuity: Post-op rehabilitation directly at Cairo Hospital Abuja",
        "Affordable, internationally accredited tertiary hospital beds in Cairo"
      ]
    },
    {
      id: "dubai",
      country: "Dubai (UAE)",
      region: "middle-east",
      flag: "🇦🇪",
      tagline: "World-Class Healthcare, Robotic Surgery & Luxury Recovery",
      network: "Dubai Healthcare City (DHCC) & Accredited Private Hospitals",
      leadTime: "4 - 7 Days Fast-Track Visa & Booking",
      badge: "Ultra-Modern & Robotic",
      specialties: [
        "Robotic Orthopedic & General Surgery",
        "Advanced Interventional Cardiology",
        "Aesthetic & Reconstructive Surgery",
        "Executive Comprehensive Health Checkups",
        "Sports Medicine & Arthroscopy"
      ],
      highlights: [
        "State-of-the-art robotic medical technology and minimal wait times",
        "World-renowned international visiting professors and surgeons",
        "Luxury convalescence accommodation near clinical facilities"
      ]
    },
    {
      id: "uk",
      country: "United Kingdom",
      region: "europe",
      flag: "🇬🇧",
      tagline: "Pioneering Academic Medicine, Harley Street & Complex Tertiary Care",
      network: "Harley Street Medical District & Leading London Private Wings",
      leadTime: "7 - 14 Days Medical Visa Processing",
      badge: "Pioneering Specialists",
      specialties: [
        "Complex Neuro-Oncology & Spine Surgery",
        "Pediatric Surgery & Rare Disease Management",
        "Advanced Structural Cardiology & TAVI",
        "Rheumatology & Immunology Protocols",
        "Independent Second Opinions by UK Professors"
      ],
      highlights: [
        "Access to renowned NHS foundation trust private healthcare wings",
        "Rigorous clinical governance and multi-disciplinary tumor boards",
        "Comprehensive documentation and liaison with UK-registered consultants"
      ]
    },
    {
      id: "turkey",
      country: "Turkey",
      region: "europe",
      flag: "🇹🇷",
      tagline: "JCI-Accredited Excellence, Hair Restoration & Aesthetic Care",
      network: "Top-tier JCI Accredited Hospital Networks in Istanbul & Ankara",
      leadTime: "3 - 6 Days Rapid Entry & Appointment",
      badge: "High Value & Specialized",
      specialties: [
        "Advanced Spinal Deformity & Scoliosis Correction",
        "Precision Hair Restoration (FUE/DHI)",
        "Cosmetic & Reconstructive Surgery",
        "Smile Makeover & Advanced Implantology",
        "CyberKnife & Precision Radiation Oncology"
      ],
      highlights: [
        "Exceptional price-to-quality ratio with internationally trained surgeons",
        "Turnkey packages covering hotel, VIP transfers, and translation",
        "Modern medical recovery facilities situated in Istanbul"
      ]
    },
    {
      id: "usa",
      country: "United States",
      region: "americas",
      flag: "🇺🇸",
      tagline: "Cutting-Edge Clinical Trials, Rare Disease & Landmark Cancer Centres",
      network: "Premier US Medical Centres & Academic Referral Consortia",
      leadTime: "14 - 21 Days Medical B-2 Visa Facilitation",
      badge: "Advanced Research Protocols",
      specialties: [
        "Genomic Targeted Oncology & CAR-T Cell Therapies",
        "Complex Pediatric & Adult Neurosurgery",
        "Novel Experimental Treatment Protocols",
        "Advanced Organ Transplantation & Complex GI",
        "Multi-Disciplinary Diagnostic Quests"
      ],
      highlights: [
        "Access to the latest FDA-approved therapeutics and breakthrough trials",
        "Formal medical invitation letters for US embassy visa appointments",
        "Coordinated follow-up protocol back in Nigeria with our physicians"
      ]
    },
    {
      id: "nigeria",
      country: "Nigeria (Interstate)",
      region: "africa",
      flag: "🇳🇬",
      tagline: "Premium Interstate Referral Coordination Across Abuja & Lagos",
      network: "Cairo Hospital Abuja & Partner Tertiary Centres in Lagos",
      leadTime: "Same-Day or 24h Coordination",
      badge: "Local Excellence",
      specialties: [
        "Orthopedics, Spine & Joint Reconstruction",
        "Comprehensive Physical Rehabilitation & Hydrotherapy",
        "Inpatient Surgical & Observation Wards",
        "On-site Diagnostics, 24/7 Pharmacy & Emergency Ambulance",
        "Orthobiologics & Stem Cell Consultations"
      ],
      highlights: [
        "Zero visa or international travel friction for Nigerian residents",
        "On-site medical team and surgical suite right in Garki 2, Abuja",
        "Full administrative support with major HMOs (NHIS, Alamida, Zenith Medica, Cleopatra)"
      ]
    }
  ];
  const travelSupportServices = [
    {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-6 h-6 text-sky-500" }),
      title: "Visa Provision & Medical Clearance",
      description: "Official hospital invitation letters, consular medical expediting, and comprehensive paperwork support for patient and accompanying family.",
      benefit: "Guaranteed medical documentation"
    },
    {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Plane, { className: "w-6 h-6 text-teal-500" }),
      title: "Flight Ticket & Logistics Coordination",
      description: "Flexible flight reservations, medical stretcher clearance when needed, wheelchair services, and coordinated arrival itineraries.",
      benefit: "Priority flight routing & special assistance"
    },
    {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Hotel, { className: "w-6 h-6 text-blue-500" }),
      title: "Curated Hotel & Serviced Apartments",
      description: "Pre-vetted 4/5-star accommodation and accessible serviced suites located within 5 to 15 minutes of partner clinical facilities.",
      benefit: "Comfortable recovery environment"
    },
    {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Car, { className: "w-6 h-6 text-indigo-500" }),
      title: "Private Chauffeured Ground Transport",
      description: "VIP airport pickup upon landing, scheduled daily clinic transfers, and round-the-clock transportation for emergency needs.",
      benefit: "Stress-free navigation abroad"
    },
    {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Stethoscope, { className: "w-6 h-6 text-rose-500" }),
      title: "Pre-Travel Medical Protocol & Second Opinion",
      description: "Direct review of your MRIs, CT scans, and lab reports by overseas chief consultants with a transparent written treatment quote before leaving Nigeria.",
      benefit: "No surprise costs or unexpected delays"
    },
    {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-6 h-6 text-emerald-500" }),
      title: "Representative Follow-Up & Abuja Post-Op Rehab",
      description: "A dedicated bilingual liaison monitors your treatment abroad until your safe return, followed by continuous physiotherapy & checkups at Cairo Hospital Abuja.",
      benefit: "Crucial continuity of care back home"
    }
  ];
  const journeySteps = [
    {
      step: "01",
      title: "Initial Records Review & Case Assessment",
      desc: "Submit your recent medical reports, imaging (MRI/CT), and clinical history via our WhatsApp or at our Garki 2 clinic in Abuja.",
      badge: "Day 1 - 2"
    },
    {
      step: "02",
      title: "Overseas Clinical Plan & Fixed Quotation",
      desc: "Our overseas medical committee pairs you with premier international hospitals and provides a customized treatment roadmap and cost estimate.",
      badge: "Day 3"
    },
    {
      step: "03",
      title: "Visa, Flight & Accommodation Concierge",
      desc: "Our travel desk issues medical invitation letters, assists with expedited visas, books suitable flights, and arranges patient-friendly lodging.",
      badge: "Day 4 - 7"
    },
    {
      step: "04",
      title: "VIP Arrival, Admission & Treatment Abroad",
      desc: "Private chauffeur meets you at the airport. A dedicated liaison officer assists you through hospital admission, surgery, and immediate post-op care.",
      badge: "During Stay"
    },
    {
      step: "05",
      title: "Safe Return & Continuity of Care in Abuja",
      desc: "Return to Nigeria with peace of mind. Cairo Hospital’s physicians in Abuja take over your rehabilitation, wound care, and long-term follow-up.",
      badge: "Post Return"
    }
  ];
  const faqs = [
    {
      q: "Why should I arrange my medical travel through Cairo Hospital instead of booking independently?",
      a: "The most dangerous aspect of independent medical travel is the lack of post-operative follow-up once you return to Nigeria. When you travel via Cairo Hospital, you receive verified treatment at accredited partner institutions, pre-negotiated institutional rates, dedicated liaison tracking abroad, and most importantly, continuous post-surgical rehabilitation and wound management right here at Cairo Hospital & Rehabilitation Centre in Garki 2, Abuja."
    },
    {
      q: "How long does medical visa processing take for Egypt, Dubai, UK, or Turkey?",
      a: "Egypt and Dubai visas are typically expedited within 3 to 5 business days using our official hospital invitation and medical clearance letters. Turkey typically requires 4 to 7 business days, while the UK and USA require 10 to 21 days depending on embassy appointment availability. Our team provides complete documentation to support urgent medical appointments."
    },
    {
      q: "Can family members or companions travel with the patient?",
      a: "Yes, absolutely. Our concierge arranges visa support, flight tickets, and spacious serviced apartments designed for both the patient and accompanying relatives, ensuring full comfort and privacy throughout the medical journey."
    },
    {
      q: "What medical documents should I prepare to get started?",
      a: "Please share your most recent doctor’s summary, lab results, and diagnostic imaging reports (MRI, CT scan, X-Rays) in digital format. If you need updated scans or a fresh consultation, you can visit Cairo Hospital in Garki 2, Abuja for immediate assessment before sending your file abroad."
    },
    {
      q: "How are payments handled?",
      a: "We provide full transparency. Treatment costs are quoted directly with no hidden fees. Payment arrangements are clearly outlined in advance, with options for bank transfers or local institutional facilitation."
    },
    {
      q: "What happens when I return to Abuja after my surgery or treatment?",
      a: "You will have a scheduled follow-up at Cairo Hospital & Rehabilitation Centre. Our multidisciplinary medical and physical therapy team receives full clinical notes from your overseas operating surgeon to execute your rehabilitation program, suture removal, medication titration, and follow-up lab/X-ray tests."
    }
  ];
  const filteredDestinations = selectedRegion === "all" ? destinations : destinations.filter((d) => d.region === selectedRegion);
  const handleLaunchWhatsAppPlanner = () => {
    const text = `Hello Cairo Hospital Medical Tourism Desk,

I would like to inquire about Medical Tourism coordination:
- Preferred Destination: ${plannerDestination}
- Specialty / Condition: ${plannerSpecialty}
- Travel Party: ${plannerCompanion}

Please advise on the next steps for medical records review and treatment quotes. Thank you.`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${HOSPITAL_CONTACT.whatsappNumber}?text=${encoded}`, "_blank");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-slate-50 text-slate-800 selection:bg-[#013777] selection:text-white", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SubpageHero,
      {
        badge: "Official Overseas Medical Travel Desk",
        badgeIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "w-4 h-4 text-[#013777]" }),
        title: "World-Class Medical Tourism,",
        highlightedText: "Coordinated with Abuja Excellence.",
        description: "Access premier hospital networks across Dubai, the UK, Nigeria, Egypt, USA, and Turkey. Cairo Hospital coordinates every step—from medical visa expediting and flight booking to personalized surgical protocols and vital post-operative rehabilitation right here in Garki 2, Abuja.",
        breadcrumbs: [{ label: "Medical Tourism Hub" }],
        onNavigateHome,
        onOpenWhatsAppBooking: () => onOpenWhatsAppBooking("Medical Tourism Coordination"),
        stats: [
          { label: "Destinations Listed", value: "6 Global Hubs" },
          { label: "Concierge Care", value: "100% End-to-End" },
          { label: "Physician Liaison", value: "Until Return" },
          { label: "Follow-up Rehab", value: "Cairo Hospital Abuja" }
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 sm:py-24 bg-white border-b border-slate-200", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-xs font-bold text-[#013777] uppercase tracking-wider", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Plane, { className: "w-4 h-4 text-sky-600" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Destinations Listed in Hospital Profile" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-4xl lg:text-5xl font-black text-[#092545] tracking-tight", children: "Explore Our 6 Medical Destinations" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base sm:text-lg text-slate-600", children: "Cairo Hospital maintains direct physician networks and institutional relationships with top-tier hospitals across three continents." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap items-center justify-center gap-2 pt-4", children: [
          { id: "all", label: "All Destinations (6)" },
          { id: "middle-east", label: "Egypt & Dubai" },
          { id: "europe", label: "UK & Turkey" },
          { id: "americas", label: "United States" },
          { id: "africa", label: "Nigeria (Interstate)" }
        ].map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setSelectedRegion(tab.id),
            className: `px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${selectedRegion === tab.id ? "bg-[#013777] text-white shadow-md shadow-[#013777]/25 scale-105" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`,
            children: tab.label
          },
          tab.id
        )) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: filteredDestinations.map((dest, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: idx * 80, className: "h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full flex flex-col justify-between bg-white rounded-3xl border border-slate-200/90 hover:border-sky-400 p-6 sm:p-7 shadow-sm hover:shadow-xl transition-all duration-300 group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-4xl drop-shadow-sm", children: dest.flag }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-black text-[#092545] group-hover:text-[#013777] transition-colors", children: dest.country }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-sky-700 bg-sky-50 px-2 py-0.5 rounded-md border border-sky-100", children: dest.badge })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500 group-hover:bg-[#013777] group-hover:text-white transition-all", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "w-5 h-5" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-slate-700 leading-relaxed", children: dest.tagline }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-1.5 text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 font-bold text-slate-800", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "w-4 h-4 text-sky-600" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Partner Network" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-600 leading-normal pl-5", children: dest.network })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs font-semibold text-slate-500", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-4 h-4 text-teal-600" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: dest.leadTime })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 pt-2 border-t border-slate-100", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-bold uppercase tracking-wider text-slate-400", children: "Key Clinical Specialties" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: dest.specialties.map((spec, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "px-2.5 py-1 rounded-lg bg-sky-50/70 border border-sky-100 text-xs font-medium text-sky-900",
                children: spec
              },
              i
            )) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1.5 text-xs text-slate-600 pt-2 border-t border-slate-100", children: dest.highlights.map((h, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: h })
          ] }, i)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-6 mt-6 border-t border-slate-100", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => onOpenWhatsAppBooking(`Medical Tourism - ${dest.country}`),
            className: "w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-gradient-to-r from-[#013777] to-[#0b5599] hover:from-[#0b5599] hover:to-sky-600 text-white font-bold text-sm shadow-md shadow-[#013777]/20 group-hover:shadow-lg transition-all cursor-pointer",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-4 h-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                "Inquire for ",
                dest.country
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4 group-hover:translate-x-1 transition-transform" })
            ]
          }
        ) })
      ] }) }, dest.id)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 sm:py-24 bg-gradient-to-b from-slate-50 via-sky-50/30 to-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 space-y-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-3xl mx-auto space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-300 text-xs font-bold text-[#013777] uppercase tracking-wider shadow-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Luggage, { className: "w-4 h-4 text-[#013777]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Turnkey Travel Support Services" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-4xl lg:text-5xl font-black text-[#092545] tracking-tight", children: "Complete Concierge From Door to Door" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base sm:text-lg text-slate-600", children: "Every detail of your trip is coordinated by Cairo Hospital’s overseas administrative team, so you and your family can concentrate 100% on recovery." })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8", children: travelSupportServices.map((srv, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: idx * 70, className: "h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full p-6 sm:p-7 bg-white rounded-3xl border border-slate-200 hover:border-sky-400 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center", children: srv.icon }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-[#092545] mb-2", children: srv.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-slate-600 leading-relaxed", children: srv.description })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-teal-700", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-4 h-4 text-teal-600" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: srv.benefit })
        ] })
      ] }) }, idx)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-16 sm:py-24 bg-[#001d40] text-white relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-10 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-3xl mx-auto space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-black uppercase tracking-widest text-sky-300", children: "Patient Safety & Clinical Accountability" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight", children: "The Cairo Hospital Advantage" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base sm:text-lg text-slate-300", children: "Traveling independently for surgery leaves you vulnerable to unrecognized clinics and zero post-operative follow-up back home. See how Cairo Hospital protects you." })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { variant: "left", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full p-8 rounded-3xl bg-slate-900/70 border border-rose-500/30 space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center font-bold", children: "✕" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-white", children: "Independent Medical Travel" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-rose-300", children: "High Risk & Post-Op Abandonment" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-4 text-sm text-slate-300", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-rose-400 font-bold mt-0.5", children: "•" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Unverified Clinics:" }),
                  " Patients frequently end up at commercial, sub-tier clinics with questionable credentials."
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-rose-400 font-bold mt-0.5", children: "•" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Hidden Financial Exploitation:" }),
                  " Prices escalate upon arrival due to lack of institutional contracts."
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-rose-400 font-bold mt-0.5", children: "•" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Zero Continuity Back Home:" }),
                  " Local Nigerian doctors do not know what procedure was performed, leading to complications."
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-rose-400 font-bold mt-0.5", children: "•" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Language & Visa Hurdles:" }),
                  " Navigating foreign bureaucracies and embassy paperwork without medical sponsorship."
                ] })
              ] })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { variant: "right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full p-8 rounded-3xl bg-gradient-to-br from-[#012654] to-[#013777] border border-sky-400/50 space-y-6 shadow-2xl relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-4 right-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-bold", children: "Recommended Protocol" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold", children: "✓" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-white", children: "Cairo Hospital Coordinated Care" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-sky-200", children: "Physician-Supervised & Complete Continuity" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-4 text-sm text-slate-100", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-400 font-bold mt-0.5", children: "✓" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Accredited Institutional Tier:" }),
                  " Direct referral only to internationally accredited institutions (JCI / Cleopatra / NHS / DHCC)."
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-400 font-bold mt-0.5", children: "✓" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Pre-Travel Written Quotation:" }),
                  " Negotiated hospital rates with transparent package pricing before you leave Abuja."
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-400 font-bold mt-0.5", children: "✓" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Post-Return Continuity in Garki 2:" }),
                  " Our physical rehabilitation centre and physicians in Abuja execute post-op recovery."
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-400 font-bold mt-0.5", children: "✓" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Official Medical Visa Sponsorship:" }),
                  " Comprehensive invitation paperwork for fast-track consular approval."
                ] })
              ] })
            ] })
          ] }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 sm:py-24 bg-white border-b border-slate-200", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 space-y-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-3xl mx-auto space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-xs font-bold text-[#013777] uppercase tracking-wider", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-4 h-4 text-sky-600" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Step-by-Step Experience" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-4xl lg:text-5xl font-black text-[#092545] tracking-tight", children: "Your 5-Step Journey to Healing" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base sm:text-lg text-slate-600", children: "From your initial file review in Abuja until your full physical recovery, we walk beside you every single step." })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-5 gap-6 relative", children: journeySteps.map((step, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: idx * 100, className: "h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full p-6 rounded-3xl bg-slate-50 border border-slate-200/90 hover:border-sky-400 flex flex-col justify-between space-y-4 transition-all duration-300 relative group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl font-black text-sky-500/80 group-hover:text-sky-600 transition-colors", children: step.step }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2.5 py-0.5 rounded-full bg-white border border-slate-200 text-[10px] font-bold text-slate-500", children: step.badge })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-bold text-[#092545] leading-snug", children: step.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-600 leading-relaxed", children: step.desc })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-xs font-semibold text-sky-700", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3.5 h-3.5 text-sky-600" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Coordinated by CRC" })
        ] })
      ] }) }, idx)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 sm:py-24 bg-gradient-to-br from-slate-100 via-sky-50 to-slate-100", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-4xl mx-auto px-4 sm:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl space-y-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-800 uppercase tracking-wider", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-4 h-4 text-emerald-600" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Interactive Consultation Assistant" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl sm:text-3xl font-black text-[#092545]", children: "Plan Your Medical Journey in Seconds" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm sm:text-base text-slate-600", children: "Select your destination and medical needs below to launch a direct WhatsApp consultation with our overseas case officer." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-bold text-slate-700 uppercase tracking-wider", children: "1. Preferred Destination" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "select",
            {
              value: plannerDestination,
              onChange: (e) => setPlannerDestination(e.target.value),
              className: "w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50 text-slate-800 text-sm font-semibold focus:ring-2 focus:ring-sky-500 focus:outline-none",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Egypt (Cairo)", children: "Egypt 🇪🇬 (Cleopatra & Partner Hospitals)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Dubai (UAE)", children: "Dubai 🇦🇪 (Robotic & Advanced Care)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "United Kingdom", children: "United Kingdom 🇬🇧 (Harley Street)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Turkey (Istanbul)", children: "Turkey 🇹🇷 (Spine & Aesthetics)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "United States", children: "United States 🇺🇸 (Advanced Protocols)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Nigeria (Interstate)", children: "Nigeria 🇳🇬 (Abuja - Lagos Transfer)" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-bold text-slate-700 uppercase tracking-wider", children: "2. Clinical Specialty" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "select",
            {
              value: plannerSpecialty,
              onChange: (e) => setPlannerSpecialty(e.target.value),
              className: "w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50 text-slate-800 text-sm font-semibold focus:ring-2 focus:ring-sky-500 focus:outline-none",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Orthopedics & Joint Replacement", children: "Orthopedics & Joint Replacement" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Orthobiologics & Stem Cell Therapy", children: "Orthobiologics & Stem Cell Therapy" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Spine Surgery & Neurosurgery", children: "Spine Surgery & Neurosurgery" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Cardiology & Bypass Surgery", children: "Cardiology & Bypass Surgery" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Oncology & Radiation", children: "Oncology & Radiation" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Cosmetic, Dental & Hair Restoration", children: "Cosmetic, Dental & Hair" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Comprehensive Executive Checkup", children: "Executive Full-Body Checkup" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-bold text-slate-700 uppercase tracking-wider", children: "3. Traveling Party" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "select",
            {
              value: plannerCompanion,
              onChange: (e) => setPlannerCompanion(e.target.value),
              className: "w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50 text-slate-800 text-sm font-semibold focus:ring-2 focus:ring-sky-500 focus:outline-none",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Patient Traveling Solo", children: "Patient Traveling Solo" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Patient + 1 Companion", children: "Patient + 1 Companion" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Patient + Family (2+ Companions)", children: "Patient + Family" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Medical Escort Required", children: "Medical Escort / Stretcher Required" })
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-4 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: handleLaunchWhatsAppPlanner,
            className: "w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-700 hover:to-teal-800 text-white font-black text-base shadow-lg shadow-emerald-600/30 hover:shadow-xl transition-all cursor-pointer",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-5 h-5 fill-current" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                "Start WhatsApp Consultation for ",
                plannerDestination
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-5 h-5" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-500 mt-3", children: "Direct encrypted connection to Cairo Hospital Overseas Coordination Desk · No booking fees" })
      ] })
    ] }) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 sm:py-24 bg-white border-b border-slate-200", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 space-y-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-xs font-bold text-[#013777] uppercase tracking-wider", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleHelp, { className: "w-4 h-4 text-[#013777]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Got Questions?" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-4xl font-black text-[#092545] tracking-tight", children: "Frequently Asked Questions" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base text-slate-600", children: "Clear answers regarding visas, companions, cost estimates, and post-travel follow-up in Nigeria." })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: faqs.map((faq, idx) => {
        const isOpen = openFaqIndex === idx;
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: idx * 50, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-slate-200 rounded-2xl overflow-hidden bg-slate-50/50 transition-all", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => setOpenFaqIndex(isOpen ? null : idx),
              className: "w-full flex items-center justify-between p-5 sm:p-6 text-left font-bold text-slate-800 hover:text-[#013777] transition-colors cursor-pointer",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base sm:text-lg pr-4", children: faq.q }),
                isOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-5 h-5 text-[#013777] shrink-0" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-5 h-5 text-slate-400 shrink-0" })
              ]
            }
          ),
          isOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-5 pb-6 sm:px-6 text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 pt-4 bg-white", children: faq.a })
        ] }) }, idx);
      }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 sm:py-20 bg-gradient-to-r from-[#013777] via-[#012654] to-[#001d40] text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-6xl mx-auto px-4 sm:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row items-center justify-between gap-8 bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-10 backdrop-blur-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 text-center md:text-left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-3 py-1 rounded-full bg-sky-400/20 text-sky-300 text-xs font-bold uppercase tracking-wider", children: "Direct Medical Travel Liaison" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl sm:text-3xl font-black tracking-tight", children: "Ready to Discuss Your Case with Our Consultants?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm sm:text-base text-slate-300 max-w-xl", children: "Visit our clinic at 16 Oke Agbe Street, Garki 2, Abuja, or connect directly through our 24/7 dedicated WhatsApp coordination desk." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 shrink-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => onOpenWhatsAppBooking("Direct Medical Tourism Desk"),
            className: "inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm shadow-lg shadow-emerald-500/25 transition-all cursor-pointer",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-5 h-5 fill-current" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "WhatsApp Overseas Desk" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: onNavigateHome,
            className: "inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm transition-all cursor-pointer",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4 rotate-180" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Back to Homepage" })
            ]
          }
        )
      ] })
    ] }) }) }) })
  ] });
};
const CairoProfileUpdates = ({
  onOpenWhatsAppBooking,
  onNavigateTourism
}) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "cairo-profile-updates", className: "py-16 sm:py-20 bg-gradient-to-b from-[#f0f8ff] via-white to-[#eefcf9] border-t border-sky-100", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-4 sm:px-6 space-y-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { variant: "up", className: "space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-black uppercase tracking-widest text-[#0879b8]", children: "Hospital Profile · Listed Services" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-4xl lg:text-5xl font-black text-[#092545] tracking-tight", children: "Expanded Multispecialty Care" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm sm:text-base text-[#38516b] font-medium leading-relaxed max-w-3xl", children: "Cairo Hospital began in Abuja as an outpatient orthopedics and physiotherapy centre, supported by a fully equipped laboratory and digital X-ray. Its current profile also lists an inpatient department, surgery room, pharmacy, outpatient clinics, and expanded specialties." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { variant: "up", delay: 50, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "glass-panel p-5 rounded-2xl border border-sky-100 bg-white shadow-sm flex items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: "/images/team/dr-wael-khalil.jpg",
            alt: "Dr. Wael Khalil, Bariatric Surgeon",
            className: "w-24 h-32 object-cover rounded-xl bg-sky-50 shrink-0 border border-sky-200",
            loading: "lazy"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-black uppercase tracking-wider text-[#0b5d8d]", children: "Surgical Team" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-black text-[#092545]", children: "Dr. Wael Khalil" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-[#0879b8]", children: "Bariatric Surgeon" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-[#38516b] leading-relaxed", children: "Clinical scope listed in the profile: laparoscopic, bariatric, and oncology surgeries." })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { variant: "up", delay: 100, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "glass-panel p-5 rounded-2xl border border-sky-100 bg-white shadow-sm flex items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: "/images/team/dr-bassam-physical-therapy.jpg",
            alt: "Dr. Bassam providing physical therapy",
            className: "w-24 h-32 object-cover rounded-xl bg-teal-50 shrink-0 border border-teal-200",
            loading: "lazy"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-black uppercase tracking-wider text-[#0b5d8d]", children: "Physical Therapy" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-black text-[#092545]", children: "Dr. Bassam" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-[#0879b8]", children: "Physical Therapy" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-[#38516b] leading-relaxed", children: "Myofascial therapy, cupping, acupuncture, and physical therapy for neurological and musculoskeletal disorders." })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { variant: "up", delay: 120, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "glass-panel p-6 rounded-2xl border border-sky-100 bg-white shadow-sm space-y-3 h-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-[#dff5f2] text-[#007b78] flex items-center justify-center font-black", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-5 h-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-black uppercase tracking-wider text-[#0879b8]", children: "Orthobiologics" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-black text-[#092545]", children: "Regenerative Therapy Options" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-[#38516b] leading-relaxed", children: "The profile lists stem-cell regenerative therapy, prolotherapy, PRP, BMAC, and BEMER therapy, including orthobiologic applications in the orthopedic service scope." })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { variant: "up", delay: 160, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "glass-panel p-6 rounded-2xl border border-sky-100 bg-white shadow-sm space-y-3 h-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-sky-100 text-[#013777] flex items-center justify-center font-black", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Microscope, { className: "w-5 h-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-black uppercase tracking-wider text-[#0879b8]", children: "Hospital Services" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-black text-[#092545]", children: "Diagnostics, Surgery & Support" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-[#38516b] leading-relaxed", children: "Emergency Department and ambulance service, general surgery, urosurgery, diabetic foot clinic, laboratory, X-ray, ultrasound, and pharmacy are listed in the profile." })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { variant: "up", delay: 200, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "glass-panel p-6 rounded-2xl border border-sky-100 bg-white shadow-sm space-y-3 h-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-black", children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeartPulse, { className: "w-5 h-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-black uppercase tracking-wider text-[#0879b8]", children: "Specialist Clinics" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-black text-[#092545]", children: "Outpatient Specialist Access" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-[#38516b] leading-relaxed", children: "Cardiology, neurology, nephrology, gastroenterology, endocrinology, family medicine, and tropical medicine are among the listed clinic services." })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { variant: "up", delay: 220, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#06284a] text-white rounded-2xl p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7 space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-black uppercase tracking-widest text-[#38bdf8]", children: "Medical Tourism" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl sm:text-2xl font-black text-white", children: "Coordinated Care and Follow-up" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs sm:text-sm text-sky-100 leading-relaxed", children: "The listed support includes visa provision, tickets, accommodation, transport, and a medical plan. A representative follows up until the patient returns to Nigeria, with follow-up at Cairo Hospital after return." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5 flex flex-wrap gap-2 justify-start lg:justify-end", children: [
        ["Dubai", "United Kingdom", "Nigeria", "Egypt", "United States", "Turkey"].map((country) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: "px-3 py-1 rounded-full text-xs font-bold bg-white/10 border border-white/20 text-sky-100",
            children: country
          },
          country
        )),
        onNavigateTourism && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: onNavigateTourism,
            className: "w-full mt-3 py-2.5 px-4 rounded-xl bg-gradient-to-r from-sky-500 to-teal-500 hover:from-sky-400 hover:to-teal-400 text-white font-bold text-xs transition-all cursor-pointer text-center",
            children: "Explore Medical Tourism Hub →"
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { variant: "up", delay: 240, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-2xl border border-teal-200 bg-[#f7fffd] grid grid-cols-1 md:grid-cols-12 gap-4 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-4 space-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-black uppercase tracking-wider text-[#007b78]", children: "Accreditation & Enrolment" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-black text-[#092545]", children: "Organisations Listed in Profile" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-8 flex flex-wrap gap-2", children: [
        "Accreditation · NHIS",
        "Accreditation · FCDA Health Department",
        "Accreditation · African Union",
        "Enrolled · Alamida",
        "Enrolled · Zenith Medica",
        "Enrolled · Cleopatra",
        "Enrolled · NNPH",
        "Enrolled · Push Africa NGO",
        "Enrolled · ASRIC"
      ].map((badge, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          className: "text-xs font-bold px-3 py-1 rounded-full bg-white border border-teal-200 text-[#075985] shadow-xs",
          children: badge
        },
        idx
      )) })
    ] }) })
  ] }) });
};
const ARTICLES_DATA = [
  {
    title: "Orthopedics & Arthroplasty",
    subtitle: "Surgical care for bones and joints",
    intro: "The hospital profile lists orthopedic services and a range of surgical procedures for musculoskeletal conditions.",
    bullets: ["Arthroplasty", "Hand surgeries", "Foot and ankle surgeries", "External fixation and deformities"],
    note: "The treating team confirms whether a procedure is suitable after an individual assessment."
  },
  {
    title: "Orthobiologics",
    subtitle: "Regenerative options listed in the profile",
    intro: "Cairo Hospital lists stem-cell regenerative therapy, prolotherapy, PRP, and BMAC under its orthobiologics services.",
    bullets: ["Stem-cell regenerative therapy", "Prolotherapy", "Platelet-rich plasma (PRP)", "Bone marrow aspirate concentrate (BMAC)"],
    note: "These are clinical options, not guaranteed outcomes. Discuss suitability, evidence, alternatives, and risks with a qualified clinician."
  },
  {
    title: "BEMER Therapy",
    subtitle: "Bio Electro Magnetic Energy Resonance",
    intro: "BEMER therapy is listed in the hospital profile as Bio Electro Magnetic Energy Resonance Therapy.",
    bullets: ["Listed within the hospital’s orthobiologics services", "Use and suitability should be discussed with the treating clinician"],
    note: "This service should not replace an assessment or treatment recommended by a qualified medical professional."
  },
  {
    title: "Diabetic Foot Clinic",
    subtitle: "Specialist assessment and foot care",
    intro: "A Diabetic Foot Clinic is included in the hospital’s list of services.",
    bullets: ["Foot assessment", "Clinical review of diabetic-foot concerns", "Care plan and follow-up based on assessment"],
    note: "New wounds, infection signs, or rapidly worsening symptoms need prompt medical attention."
  },
  {
    title: "Physical Therapy & Rehabilitation",
    subtitle: "Care for neurological and musculoskeletal disorders",
    intro: "The profile lists physical therapy with Dr. Bassam, including myofascial therapy, cupping, and acupuncture.",
    bullets: ["Physical therapy", "Myofascial therapy", "Cupping", "Acupuncture"],
    note: "The clinical team assesses the patient and confirms which approaches are appropriate."
  },
  {
    title: "Obstetrics & Gynaecology",
    subtitle: "Women’s health consultations",
    intro: "Obstetrics and Gynaecology are listed among Cairo Hospital’s clinical services.",
    bullets: ["Obstetrics", "Gynaecology", "Appointment and clinic availability confirmed by the hospital"],
    note: "Contact the hospital to arrange an appointment and confirm the clinician’s schedule."
  },
  {
    title: "Infertility Services",
    subtitle: "Consultation and assessment",
    intro: "Infertility is listed in the hospital profile under its clinical services.",
    bullets: ["Initial consultation", "Clinical assessment", "Next steps discussed with the care team"],
    note: "The appropriate work-up and treatment plan depend on each patient’s circumstances."
  },
  {
    title: "General Surgery",
    subtitle: "Surgical consultation and care",
    intro: "General Surgery is listed as a hospital service, with an equipped surgery room included in the hospital profile.",
    bullets: ["General surgical consultation", "Case review", "Procedure availability confirmed by the clinical team"],
    note: "A consultation is required to determine the appropriate care plan."
  },
  {
    title: "Urosurgery",
    subtitle: "A listed surgical service",
    intro: "Urosurgery appears in the hospital’s current service list.",
    bullets: ["Consultation and assessment", "Clinical care planning", "Availability confirmed when booking"],
    note: "Contact the hospital to confirm the clinician and procedures available for your case."
  },
  {
    title: "Bariatric, Laparoscopic & Oncology Surgeries",
    subtitle: "Dr. Wael Khalil · Bariatric Surgeon",
    intro: "The current profile lists laparoscopic, bariatric, and oncology surgeries within Dr. Wael Khalil’s clinical scope.",
    bullets: ["Bariatric surgeries", "Laparoscopic surgeries", "Oncology surgeries"],
    note: "The hospital can confirm consultation availability and case-specific services."
  },
  {
    title: "Family Medicine",
    subtitle: "Primary care consultations",
    intro: "Family Medicine is listed among the hospital’s services.",
    bullets: ["Consultation", "Clinical assessment", "Follow-up arranged with the clinic"],
    note: "Contact the hospital to confirm availability and appointment times."
  },
  {
    title: "Tropical Medicine",
    subtitle: "A listed outpatient specialty",
    intro: "Tropical Medicine is listed among the hospital’s services.",
    bullets: ["Specialist consultation", "Clinical assessment", "Follow-up as advised by the clinician"],
    note: "The hospital confirms clinic availability when you book."
  },
  {
    title: "Specialist Outpatient Clinics",
    subtitle: "Cardiology, neurology, nephrology and more",
    intro: "The profile lists outpatient clinics for Cardiology, Neurology, Nephrology, Gastroenterology, and Endocrinology.",
    bullets: ["Cardiology", "Neurology", "Nephrology", "Gastroenterology", "Endocrinology"],
    note: "Consultant schedules and appointment availability should be confirmed with the hospital."
  },
  {
    title: "Emergency Department & Ambulance Service",
    subtitle: "Services listed in the hospital profile",
    intro: "The hospital profile includes an Emergency Department and Ambulance Service.",
    bullets: ["Emergency Department", "Ambulance Service", "Call the hospital to confirm current access and availability"],
    note: "For a life-threatening emergency, do not wait for a website or WhatsApp reply; call the hospital directly or contact local emergency services."
  }
];
const CairoArticles = ({ onOpenWhatsAppBooking }) => {
  const [openCardIdx, setOpenCardIdx] = reactExports.useState(null);
  const toggleCard = (idx) => {
    setOpenCardIdx(openCardIdx === idx ? null : idx);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "cairo-articles", className: "py-16 sm:py-20 bg-white border-t border-slate-200", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-4 sm:px-6 space-y-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { variant: "up", className: "space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-black uppercase tracking-widest text-[#0879b8]", children: "Knowledge Centre · Cairo Hospital" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-4xl lg:text-5xl font-black text-[#092545] tracking-tight", children: "Services & Care Guides" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm sm:text-base text-[#47627c] leading-relaxed max-w-3xl", children: "A patient-friendly overview of the clinical services listed in Cairo Hospital’s current profile. Contact the hospital to confirm consultant schedules and service availability." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row items-start md:items-center justify-between gap-4 p-4 sm:p-5 rounded-2xl bg-[#06284a] text-white", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-sm block", children: "Appointments & Service Availability" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-x-4 gap-y-1 text-xs text-sky-200", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "• Outpatient clinic schedules: call to confirm" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "• Pharmacy opening hours: call to confirm" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "• Laboratory & diagnostics: call to confirm" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { className: "text-xs text-[#fdc33e] max-w-md text-left md:text-right", children: [
          "Emergency Department & ambulance service are listed; call ",
          HOSPITAL_CONTACT.whatsappDisplay,
          " to confirm current access."
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5", children: ARTICLES_DATA.map((article, idx) => {
      const isOpen = openCardIdx === idx;
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { variant: "up", delay: idx % 6 * 50, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "border border-slate-200 rounded-2xl bg-gradient-to-b from-white to-[#f8fcff] shadow-xs flex flex-col justify-between overflow-hidden h-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-black uppercase tracking-wider text-[#0879b8]", children: "Cairo Hospital" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-black text-[#092545] leading-tight", children: article.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-bold text-[#0b5d8d]", children: article.subtitle }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-[#47627c] leading-relaxed", children: article.intro })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-slate-100 mt-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => toggleCard(idx),
              className: "w-full px-5 py-3 flex items-center justify-between text-xs font-bold text-[#075985] hover:bg-slate-50 transition-colors cursor-pointer",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: isOpen ? "Show Less" : "More Details" }),
                isOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-4 h-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-4 h-4" })
              ]
            }
          ),
          isOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 pb-4 space-y-3 bg-sky-50/50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "list-disc pl-5 space-y-1 text-xs text-[#38516b]", children: article.bullets.map((b, bIdx) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: b }, bIdx)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-[#5b7184] italic pt-2 border-t border-sky-100", children: article.note }),
            onOpenWhatsAppBooking && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: onOpenWhatsAppBooking,
                className: "inline-flex items-center gap-1.5 text-xs font-bold text-[#0879b8] hover:underline cursor-pointer",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Contact & Appointments" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3.5 h-3.5" })
                ]
              }
            )
          ] })
        ] })
      ] }) }, idx);
    }) })
  ] }) });
};
const arcPaths = [
  {
    className: "brand-logo__arc brand-logo__arc--top",
    d: [
      "M452.50,85.85 451.50,85.65 440.50,76.23 427.50,66.24 415.50,58.15 402.50,50.24 395.50,46.68 394.50,45.98",
      "379.50,38.98 367.50,34.26 365.50,33.81 361.50,32.23 359.50,31.80 354.50,30.08 352.50,29.75 347.50,28.19",
      "340.50,26.81 338.50,26.14 329.50,24.78 327.50,24.23 320.50,23.27 308.50,22.21 301.50,21.93 287.50,21.94",
      "280.50,22.26 269.50,23.20 250.50,25.95 247.50,26.81 240.50,28.02 234.50,29.66 231.50,30.16 226.50,31.71",
      "223.50,32.39 219.50,33.76 217.50,34.17 211.50,36.16 210.50,35.29 209.91,32.50 208.15,26.50 207.91,24.50",
      "206.05,17.50 205.98,16.50 206.24,15.50 207.50,14.42 211.50,13.11 218.50,11.87 225.50,10.19 228.50,9.88",
      "235.50,8.30 252.50,6.18 270.50,5.50 275.50,5.50 292.50,6.13 309.50,8.16 325.50,11.23 327.50,11.88",
      "333.50,13.16 335.50,13.91 340.50,15.03 342.50,15.88 347.50,17.15 351.50,18.66 353.50,19.15 362.50,22.68",
      "364.50,23.28 367.50,24.72 371.50,26.12 372.50,26.82 375.50,28.01 384.50,32.34 393.50,37.15 394.50,37.92",
      "400.50,41.27 409.50,47.18 416.50,52.10 425.50,59.08 430.50,63.33 438.31,70.50 442.50,74.65 450.50,83.08",
      "452.53,85.50 452.50,85.85 Z"
    ].join(" ")
  },
  {
    className: "brand-logo__arc brand-logo__arc--left",
    d: [
      "M216.50,481.86 214.50,481.58 209.50,480.19 207.50,479.86 202.50,478.24 200.50,477.85 195.50,476.11",
      "190.50,474.76 189.50,474.23 179.50,470.89 162.50,463.90 161.50,463.25 153.50,459.69 152.50,459.00",
      "144.50,454.94 130.50,446.76 123.50,442.14 115.50,436.29 114.50,435.75 103.50,426.92 94.14,418.50",
      "87.14,411.50 76.28,399.50 75.66,398.50 72.23,394.50 70.91,392.50 69.94,391.50 63.37,382.50 61.26,379.50",
      "54.35,368.50 51.62,363.50 50.30,361.50 48.90,358.50 48.14,357.50 46.75,354.50 46.06,353.50 44.76,350.50",
      "43.11,347.50 42.85,346.50 41.21,343.50 39.00,338.50 37.92,335.50 37.26,334.50 32.19,321.50 31.74,319.50",
      "30.15,315.50 29.66,313.50 28.17,309.50 26.97,304.50 26.12,302.50 24.86,296.50 24.17,294.50 23.23,290.50",
      "22.86,287.50 22.26,285.50 21.31,280.50 19.06,263.50 18.39,251.50 18.32,245.50 18.39,237.50 19.06,225.50",
      "21.15,209.50 22.90,201.50 23.31,198.50 24.94,192.50 26.01,187.50 27.71,182.50 28.06,180.50 28.92,178.50",
      "30.08,174.50 31.73,170.50 32.18,168.50 37.03,156.50 37.66,155.50 39.29,151.50 39.95,150.50 41.13,147.50",
      "41.84,146.50 42.85,144.50 43.12,143.50 50.06,130.50 53.83,124.50 54.18,123.50 55.63,121.50 59.24,115.50",
      "60.74,113.50 61.17,112.50 69.97,100.50 79.08,89.50 91.58,76.50 98.50,70.05 106.50,63.28 114.50,57.10",
      "124.50,50.09 125.50,49.65 127.50,48.11 134.50,43.91 136.50,43.07 138.50,43.01 139.50,43.21 141.50,44.41",
      "147.50,49.01 158.50,55.97 161.50,57.48 161.58,58.50 149.50,67.17 137.50,77.21 127.57,86.50 116.06,98.50",
      "105.31,111.50 98.11,121.50 94.99,126.50 94.12,127.50 87.12,139.50 86.79,140.50 83.01,147.50 81.83,150.50",
      "81.09,151.50 76.07,163.50 75.88,164.50 74.21,168.50 73.73,170.50 72.15,174.50 70.94,179.50 70.08,181.50",
      "67.16,193.50 65.16,203.50 64.91,206.50 63.12,218.50 62.17,234.50 62.18,251.50 63.07,267.50 64.29,276.50",
      "64.89,279.50 65.12,282.50 68.07,296.50 68.74,298.50 70.13,304.50 70.96,306.50 72.22,311.50 72.75,312.50",
      "74.28,317.50 75.92,321.50 76.11,322.50 81.11,334.50 81.83,335.50 83.01,338.50 86.70,345.50 87.04,346.50",
      "92.04,355.50 92.84,356.50 96.31,362.50 97.82,364.50 98.25,365.50 99.79,367.50 102.32,371.50 103.92,373.50",
      "105.12,375.50 116.16,389.50 125.17,399.50 132.50,406.72 139.50,413.00 142.50,415.65 151.50,422.76",
      "164.50,431.77 177.50,439.59 191.50,446.81 199.50,450.22 200.50,450.86 204.50,452.29 208.85,454.50",
      "209.86,455.50 210.84,457.50 213.20,466.50 213.99,468.50 215.18,473.50 215.68,474.50 216.80,478.50",
      "217.18,480.50 217.06,481.50 216.50,481.86 Z"
    ].join(" ")
  },
  {
    className: "brand-logo__arc brand-logo__arc--bottom",
    d: [
      "M290.50,489.52 288.50,488.89 288.11,488.50 287.18,486.50 286.87,482.50 285.34,471.50 285.32,470.50",
      "285.63,469.50 286.50,468.59 287.50,468.15 288.50,468.06 303.50,467.76 307.50,467.31 317.50,466.79",
      "337.50,463.93 340.50,463.09 346.50,461.98 349.50,461.08 355.50,459.73 362.50,457.67 366.50,456.20",
      "368.50,455.81 382.50,450.66 391.50,446.86 394.50,445.27 397.50,444.00 409.50,437.82 419.50,431.84",
      "427.50,426.71 442.50,415.65 450.50,408.97 462.50,397.94 471.70,388.50 486.06,372.50 487.50,371.35",
      "487.65,371.50 486.90,373.50 483.15,379.50 482.75,380.50 473.83,393.50 466.74,402.50 457.79,412.50",
      "452.50,417.91 445.50,424.74 438.50,431.03 427.50,440.01 415.50,448.64 404.50,455.62 397.50,459.66",
      "390.50,463.15 389.50,463.86 386.50,465.12 383.50,466.76 374.50,470.71 361.50,475.67 359.50,476.11",
      "355.50,477.67 353.50,478.12 348.50,479.82 346.50,480.17 341.50,481.70 334.50,483.20 332.50,483.89",
      "325.50,485.03 322.50,485.80 317.50,486.64 302.50,488.59 290.50,489.52 Z"
    ].join(" ")
  }
];
const figurePaths = [
  [
    "M292.50,109.82 292.02,109.50 291.00,107.50 288.72,104.50 273.87,86.50 266.92,78.50 263.11,74.50 258.50,70.43",
    "252.50,66.15 241.50,59.16 235.50,55.82 228.67,51.50 227.05,49.50 226.13,47.50 226.50,47.07 228.50,46.08",
    "229.50,45.93 231.50,46.19 233.50,46.99 238.50,48.35 239.50,48.83 245.50,50.25 246.50,50.74 250.50,51.86",
    "254.50,52.67 255.50,52.58 256.37,51.50 256.54,50.50 256.21,46.50 256.32,41.50 257.02,40.50 258.50,39.75",
    "259.50,40.10 259.95,40.50 260.77,42.50 261.28,45.50 263.18,50.50 267.31,57.50 272.16,63.50 285.16,77.50",
    "293.50,85.95 295.72,88.50 296.05,90.50 295.92,92.50 295.16,94.50 294.13,98.50 293.74,105.50 293.88,108.50",
    "292.50,109.82 Z"
  ].join(" "),
  [
    "M257.50,504.51 255.50,505.21 252.50,504.67 249.50,503.84 245.50,501.83 242.50,499.77 239.50,497.18",
    "235.03,492.50 232.42,488.50 230.03,483.50 228.10,477.50 226.79,472.50 226.29,471.50 225.03,466.50",
    "224.14,464.50 223.26,461.50 222.23,457.50 222.09,455.50 222.26,453.50 223.23,450.50 224.50,448.52",
    "226.29,446.50 230.50,443.04 235.50,439.75 240.50,435.75 242.69,433.50 246.73,428.50 249.69,423.50",
    "258.99,404.50 261.21,400.50 266.26,392.50 270.08,387.50 277.08,379.50 302.25,352.50 304.77,349.50",
    "306.70,346.50 308.85,340.50 309.08,337.50 308.84,319.50 307.73,297.50 307.84,291.50 308.33,286.50",
    "309.19,281.50 309.98,278.50 312.05,272.50 313.99,268.50 316.29,264.50 319.88,259.50 322.61,254.50",
    "324.11,251.50 326.00,246.50 326.78,243.50 327.54,236.50 327.48,233.50 326.84,227.50 325.85,223.50",
    "325.30,222.50 323.99,218.50 319.91,210.50 318.12,207.50 317.83,206.50 316.23,203.50 314.94,199.50",
    "314.05,197.50 312.93,193.50 312.05,191.50 310.74,186.50 310.23,185.50 308.78,179.50 307.18,174.50",
    "306.87,172.50 305.85,169.50 304.67,166.50 302.65,162.50 299.83,158.50 295.50,154.13 261.50,121.82",
    "228.50,90.04 215.50,77.90 200.50,63.20 196.50,60.20 191.50,57.00 186.50,54.49 184.50,53.79 181.50,52.18",
    "180.50,51.91 173.50,48.75 172.50,48.08 169.50,46.92 168.50,46.21 165.50,44.99 162.50,43.35 156.50,40.60",
    "152.65,38.50 151.50,37.30 151.15,36.50 151.23,35.50 152.50,34.25 156.50,33.79 161.50,34.16 168.50,35.11",
    "171.50,35.83 181.50,37.18 185.50,38.01 189.50,38.05 190.50,37.09 190.79,36.50 190.85,35.50 190.08,29.50",
    "189.71,24.50 189.79,21.50 190.50,19.62 192.50,17.36 193.50,17.92 194.50,18.83 195.91,20.50 196.50,21.88",
    "196.92,23.50 197.14,26.50 198.20,30.50 200.27,36.50 200.90,37.50 202.09,40.50 206.10,46.50 211.02,51.50",
    "255.50,86.82 257.50,88.18 272.50,99.99 296.50,117.72 297.50,118.21 299.50,119.86 301.50,121.03 302.50,121.96",
    "304.50,123.16 320.50,134.77 322.50,135.97 323.50,136.37 324.21,135.50 323.74,133.50 322.83,131.50",
    "322.12,130.50 319.92,127.50 308.99,114.50 303.50,109.44 301.06,106.50 300.14,104.50 299.27,101.50",
    "299.18,100.50 299.30,98.50 300.17,95.50 301.29,93.50 303.13,91.50 304.50,90.45 306.50,89.34 309.50,88.10",
    "313.50,87.20 320.50,86.96 324.50,87.25 328.50,88.19 329.50,88.76 333.50,90.19 339.50,94.06 342.15,96.50",
    "345.77,100.50 347.69,103.50 349.60,107.50 350.76,110.50 351.68,115.50 351.88,120.50 351.73,122.50",
    "350.94,126.50 350.02,128.50 348.73,130.50 347.50,131.63 345.50,133.14 343.50,134.01 341.89,135.50",
    "341.24,136.50 341.33,138.50 342.94,141.50 345.29,144.50 367.50,164.92 371.73,169.50 374.88,173.50",
    "378.79,179.50 380.05,182.50 380.71,183.50 381.80,186.50 382.90,190.50 383.69,194.50 383.93,198.50",
    "383.78,203.50 382.87,208.50 381.86,212.50 378.75,221.50 378.11,222.50 376.66,226.50 376.06,227.50",
    "374.96,230.50 371.30,238.50 369.86,242.50 369.27,243.50 367.90,248.50 367.12,250.50 366.30,254.50",
    "365.22,263.50 365.00,279.50 365.26,291.50 364.85,298.50 363.59,306.50 361.66,313.50 359.81,318.50",
    "357.11,324.50 353.77,330.50 350.55,335.50 343.78,344.50 330.75,360.50 316.38,377.50 307.34,388.50",
    "306.73,389.50 303.26,393.50 301.88,395.50 299.19,398.50 288.76,411.50 281.19,420.50 279.79,422.50",
    "277.14,425.50 262.64,443.50 255.09,452.50 252.27,456.50 250.85,459.50 250.16,460.50 248.14,466.50",
    "247.53,473.50 248.04,480.50 250.33,488.50 252.40,493.50 255.08,498.50 255.87,499.50 257.54,502.50",
    "257.90,503.50 257.50,504.51 Z"
  ].join(" "),
  [
    "M276.50,504.96 275.50,505.04 273.50,504.72 271.50,503.82 266.50,499.21 263.16,495.50 261.02,492.50",
    "259.10,489.50 257.84,486.50 257.12,485.50 255.04,479.50 254.15,475.50 254.01,472.50 254.27,467.50",
    "255.32,463.50 256.96,459.50 259.22,455.50 261.39,452.50 279.09,429.50 292.09,413.50 317.79,383.50",
    "332.73,365.50 346.01,348.50 356.50,333.77 357.04,334.50 356.75,335.50 356.14,336.50 354.91,340.50",
    "352.85,345.50 351.36,348.50 350.67,350.50 349.05,353.50 348.74,354.50 347.04,357.50 345.77,360.50",
    "345.00,361.50 339.62,371.50 338.17,373.50 337.73,374.50 332.67,382.50 323.71,395.50 317.78,403.50",
    "295.62,432.50 285.21,445.50 282.28,449.50 279.92,453.50 279.11,454.50 276.18,461.50 275.02,466.50",
    "274.47,471.50 274.47,474.50 274.98,479.50 276.21,485.50 277.76,491.50 278.66,498.50 278.71,500.50",
    "278.00,503.50 276.50,504.96 Z"
  ].join(" ")
];
const nodePaths = [
  [
    "M179.50,88.93 177.50,89.05 176.50,88.90 174.50,87.75 173.14,86.50 172.19,84.50 172.13,81.50 172.98,79.50",
    "174.50,78.07 176.50,77.00 178.50,76.84 180.50,77.33 182.50,78.79 183.76,80.50 184.10,82.50 183.98,84.50",
    "183.71,85.50 182.50,87.06 181.50,87.87 179.50,88.93 Z"
  ].join(" "),
  [
    "M194.50,102.51 192.50,102.40 190.50,101.84 188.50,100.08 187.22,97.50 187.26,94.50 188.12,92.50 188.87,91.50",
    "190.50,90.02 192.50,89.25 194.50,89.17 195.50,89.34 197.50,90.25 198.83,91.50 199.53,92.50 200.66,95.50",
    "200.63,96.50 199.99,98.50 198.80,100.50 196.50,102.07 194.50,102.51 Z"
  ].join(" "),
  [
    "M210.50,115.55 209.50,115.55 207.50,115.07 206.50,114.68 204.50,113.21 203.18,111.50 202.22,109.50",
    "201.96,107.50 202.17,105.50 203.50,102.88 204.50,101.69 205.87,100.50 208.50,99.16 210.50,98.96 212.50,99.31",
    "214.50,100.34 215.92,101.50 216.78,102.50 217.94,104.50 218.50,106.50 218.55,107.50 217.80,110.50",
    "216.46,112.50 215.45,113.50 213.50,114.82 210.50,115.55 Z"
  ].join(" "),
  [
    "M231.50,135.65 228.50,136.08 226.50,136.02 224.50,135.64 222.50,134.59 220.50,132.99 219.27,131.50",
    "218.17,129.50 217.32,126.50 217.27,125.50 217.50,123.52 218.11,121.50 219.12,119.50 219.93,118.50",
    "222.50,116.20 224.50,115.27 226.50,114.86 228.50,114.77 231.50,115.33 233.50,116.26 236.08,118.50",
    "237.96,121.50 238.56,123.50 238.84,125.50 238.62,127.50 237.99,129.50 236.83,131.50 235.50,133.13",
    "233.50,134.64 231.50,135.65 Z"
  ].join(" "),
  [
    "M253.50,162.64 251.50,162.86 248.50,162.84 247.50,162.74 244.50,161.85 241.50,159.88 239.21,157.50",
    "237.10,153.50 236.35,148.50 237.18,143.50 238.95,140.50 240.79,138.50 243.50,136.39 246.50,135.18",
    "249.50,134.79 252.50,134.89 254.50,135.19 257.50,136.46 260.11,138.50 261.88,140.50 262.58,141.50",
    "263.78,144.50 264.17,146.50 264.37,149.50 263.72,153.50 262.93,155.50 260.81,158.50 259.50,159.78",
    "256.50,161.68 253.50,162.64 Z"
  ].join(" "),
  [
    "M276.50,197.56 274.50,197.97 270.50,198.22 266.50,197.83 263.50,196.74 260.50,194.93 258.92,193.50",
    "256.38,190.50 254.91,187.50 254.19,185.50 253.85,181.50 254.09,177.50 254.99,174.50 256.50,171.60",
    "259.07,168.50 260.50,167.24 264.50,164.99 267.50,164.18 271.50,163.97 275.50,164.30 277.50,164.93",
    "278.50,165.32 281.97,167.50 284.93,170.50 286.88,173.50 287.88,176.50 288.52,181.50 287.89,185.50",
    "286.91,188.50 284.50,192.10 282.10,194.50 278.50,196.81 276.50,197.56 Z"
  ].join(" "),
  [
    "M282.50,246.72 277.50,247.12 273.50,246.76 270.50,245.94 266.50,243.85 263.50,241.39 261.01,238.50",
    "259.18,235.50 258.24,232.50 257.50,227.50 257.78,224.50 258.25,221.50 259.16,218.50 260.34,216.50",
    "263.47,212.50 266.50,210.11 268.50,208.91 273.50,207.07 278.50,206.74 282.50,207.04 286.50,208.45",
    "288.50,209.39 291.50,211.54 293.50,213.50 295.13,215.50 295.88,216.50 297.82,220.50 298.06,221.50",
    "298.78,225.50 298.69,229.50 297.85,233.50 295.86,237.50 292.50,241.44 289.50,243.84 285.50,245.92",
    "282.50,246.72 Z"
  ].join(" "),
  [
    "M283.50,298.62 279.50,298.80 274.50,297.71 270.50,295.85 268.50,294.40 265.50,291.30 263.10,287.50",
    "262.10,284.50 261.35,280.50 261.38,277.50 262.21,273.50 263.38,270.50 266.05,266.50 268.50,264.04",
    "271.50,261.99 275.50,260.24 279.50,259.53 282.50,259.47 286.50,260.08 291.50,262.29 293.07,263.50",
    "295.29,265.50 297.78,268.50 299.98,273.50 300.69,277.50 300.68,280.50 299.63,285.50 297.79,289.50",
    "295.50,292.34 293.15,294.50 289.50,296.81 286.50,297.93 283.50,298.62 Z"
  ].join(" "),
  [
    "M275.50,339.55 273.50,339.92 270.50,339.90 266.50,338.96 264.50,338.05 261.50,335.95 259.27,333.50",
    "257.03,328.50 256.68,324.50 257.08,320.50 259.37,315.50 261.50,313.09 264.50,310.95 266.50,310.05",
    "269.50,309.16 271.50,309.01 274.50,309.13 278.50,310.39 280.43,311.50 282.50,313.08 284.66,315.50",
    "286.73,319.50 286.99,320.50 287.48,324.50 287.04,328.50 286.86,329.50 284.73,333.50 282.50,335.93",
    "279.50,338.05 278.50,338.61 275.50,339.55 Z"
  ].join(" "),
  [
    "M258.50,372.50 256.50,372.74 254.50,372.61 251.50,371.92 249.50,370.87 247.50,369.26 245.94,367.50",
    "245.22,366.50 243.98,363.50 243.57,360.50 243.63,358.50 244.14,355.50 245.09,353.50 246.50,351.50",
    "248.72,349.50 250.50,348.30 253.50,347.36 255.50,347.16 258.50,347.22 261.50,347.97 262.50,348.43",
    "265.33,350.50 266.50,351.81 267.68,353.50 268.99,356.50 269.26,359.50 269.08,362.50 268.84,363.50",
    "266.53,367.50 264.50,369.69 261.50,371.72 258.50,372.50 Z"
  ].join(" "),
  [
    "M240.50,394.81 238.50,394.98 236.50,394.79 233.50,393.57 231.50,391.84 230.47,390.50 229.34,387.50",
    "229.20,384.50 230.06,381.50 230.50,380.79 232.50,378.45 234.50,376.98 236.50,376.27 240.50,376.16",
    "243.50,377.22 245.03,378.50 246.80,380.50 247.71,382.50 247.96,384.50 247.89,387.50 247.69,388.50",
    "246.73,390.50 244.98,392.50 243.50,393.66 240.50,394.81 Z"
  ].join(" "),
  [
    "M224.50,413.67 222.50,413.74 219.50,412.82 217.02,410.50 216.13,408.50 215.86,406.50 216.24,403.50",
    "217.50,401.13 219.50,399.40 220.50,398.93 223.50,398.55 225.50,398.93 226.50,399.39 228.90,401.50",
    "229.98,403.50 230.38,406.50 229.83,409.50 228.50,411.31 227.12,412.50 226.50,412.95 224.50,413.67 Z"
  ].join(" "),
  [
    "M210.50,425.59 208.50,426.22 206.50,426.21 205.50,425.98 203.50,424.94 202.01,423.50 201.45,422.50",
    "201.08,421.50 200.86,419.50 201.10,417.50 201.50,416.54 202.11,415.50 203.50,414.15 205.50,413.06",
    "207.50,412.68 208.50,412.76 210.50,413.39 211.50,414.04 212.50,415.08 213.88,417.50 214.12,419.50",
    "213.89,421.50 212.50,423.94 210.50,425.59 Z"
  ].join(" "),
  [
    "M192.50,435.58 190.50,435.64 188.50,434.90 186.85,433.50 186.05,432.50 185.49,430.50 185.50,428.50",
    "186.07,426.50 187.87,424.50 190.50,423.20 192.50,423.24 195.03,424.50 196.80,426.50 197.24,428.50",
    "197.25,430.50 196.77,432.50 195.97,433.50 194.50,434.77 192.50,435.58 Z"
  ].join(" ")
];
const BrandLogo = ({
  className,
  title = "الشعار الطبي"
}) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  "svg",
  {
    className,
    viewBox: "0 0 512 512",
    fill: "none",
    role: "img",
    "aria-label": title,
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("g", { className: "brand-logo__arcs", fill: "#888D96", fillRule: "evenodd", children: arcPaths.map((path) => /* @__PURE__ */ jsxRuntimeExports.jsx("path", { className: path.className, d: path.d }, path.className)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { className: "brand-logo__mark", fill: "#023879", fillRule: "evenodd", children: [
        figurePaths.map((d, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("path", { className: "brand-logo__figure", d }, `figure-${index}`)),
        /* @__PURE__ */ jsxRuntimeExports.jsx("g", { className: "brand-logo__nodes", children: nodePaths.map((d, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            className: "brand-logo__node",
            d,
            style: { animationDelay: `${760 + index * 62}ms` }
          },
          `node-${index}`
        )) })
      ] })
    ]
  }
);
const LoadingScreen = ({ isLeaving }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "div",
  {
    className: `brand-loader${isLeaving ? " brand-loader--leaving" : ""}`,
    role: "status",
    "aria-live": "polite",
    "aria-busy": "true",
    "aria-label": "جارٍ تجهيز الموقع",
    children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "brand-loader__content", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BrandLogo, { className: "brand-loader__logo", title: "الشعار الطبي" }) })
  }
);
const PAGE_IDS = ["home", "about", "services", "tourism", "team", "contact", "booking"];
const getPageFromLocation = () => {
  if (typeof window === "undefined") return "home";
  try {
    const url = new URL(window.location.href);
    const page = url.searchParams.get("page");
    return page && PAGE_IDS.includes(page) ? page : "home";
  } catch {
    return "home";
  }
};
function App() {
  const [activeTab, setActiveTab] = reactExports.useState(() => getPageFromLocation());
  const [isLoaderVisible, setIsLoaderVisible] = reactExports.useState(true);
  const [isLoaderLeaving, setIsLoaderLeaving] = reactExports.useState(false);
  const [preselectedSpecialty, setPreselectedSpecialty] = reactExports.useState("");
  const [preselectedDoctor, setPreselectedDoctor] = reactExports.useState("");
  const loaderTimers = reactExports.useRef([]);
  const lastProcessedPage = reactExports.useRef(getPageFromLocation());
  reactExports.useEffect(() => {
    return () => {
      loaderTimers.current.forEach(window.clearTimeout);
    };
  }, []);
  const showLoader = () => {
    loaderTimers.current.forEach(window.clearTimeout);
    setIsLoaderVisible(true);
    setIsLoaderLeaving(false);
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const leaveDelay = reducedMotion ? 450 : 1850;
    const removeDelay = reducedMotion ? 500 : 2240;
    loaderTimers.current = [
      window.setTimeout(() => setIsLoaderLeaving(true), leaveDelay),
      window.setTimeout(() => setIsLoaderVisible(false), removeDelay)
    ];
  };
  reactExports.useEffect(() => {
    showLoader();
  }, []);
  reactExports.useEffect(() => {
    const syncPageFromHistory = () => {
      const newPage = getPageFromLocation();
      lastProcessedPage.current = newPage;
      setActiveTab(newPage);
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    window.addEventListener("popstate", syncPageFromHistory);
    return () => window.removeEventListener("popstate", syncPageFromHistory);
  }, []);
  reactExports.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeTab]);
  const handleOpenBooking = (doctorName, specialtyName) => {
    if (doctorName) setPreselectedDoctor(doctorName);
    if (specialtyName) setPreselectedSpecialty(specialtyName);
    navigateTo("booking");
  };
  const navigateTo = (tabId) => {
    if (!PAGE_IDS.includes(tabId)) return;
    if (tabId === activeTab) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    lastProcessedPage.current = tabId;
    const basePath = window.location.pathname.split("?")[0] || "/";
    const nextUrl = tabId === "home" ? basePath : `${basePath}?page=${tabId}`;
    setActiveTab(tabId);
    window.history.pushState({ page: tabId }, "", nextUrl);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleNavigate = (tabId) => navigateTo(tabId);
  const isRevealReady = !isLoaderVisible || isLoaderLeaving;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(RevealReadyContext.Provider, { value: isRevealReady, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      "data-loader-active": isLoaderVisible && !isLoaderLeaving ? "true" : "false",
      className: "min-h-screen flex flex-col bg-transparent text-[#2d435e] selection:bg-[#013777] selection:text-white",
      children: [
        isLoaderVisible && /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingScreen, { isLeaving: isLoaderLeaving }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Header,
          {
            activeTab,
            onNavigate: handleNavigate,
            onOpenWhatsAppBooking: () => handleOpenBooking()
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "flex-1", children: [
          activeTab === "home" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Hero,
              {
                onOpenWhatsAppBooking: () => handleOpenBooking(),
                onExploreServices: () => handleNavigate("services"),
                onExploreTourism: () => handleNavigate("tourism")
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(EmergencyBanner, { onOpenWhatsAppBooking: () => handleOpenBooking() }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              AboutUs,
              {
                onOpenWhatsAppBooking: () => handleOpenBooking(),
                onNavigateAbout: () => handleNavigate("about")
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              ServicesSection,
              {
                onSelectServiceForBooking: (service) => handleOpenBooking(void 0, service),
                onNavigateServices: () => handleNavigate("services")
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              OrthobiologicsHighlight,
              {
                onOpenWhatsAppBooking: () => handleOpenBooking(
                  void 0,
                  "Orthobiologics (Stem Cells Regenerative Therapy)"
                ),
                onNavigateServices: () => handleNavigate("services")
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(FacilityGallery, {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              TeamSection,
              {
                onOpenWhatsAppBooking: (doctor) => handleOpenBooking(doctor),
                onNavigateTeam: () => handleNavigate("team")
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              MedicalTourism,
              {
                onOpenWhatsAppBooking: () => handleOpenBooking(void 0, "Medical Tourism"),
                onNavigateTourism: () => handleNavigate("tourism")
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(PartnersSection, { onOpenWhatsAppBooking: () => handleOpenBooking() }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AccreditationSection, {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              CairoProfileUpdates,
              {
                onOpenWhatsAppBooking: () => handleOpenBooking(),
                onNavigateTourism: () => handleNavigate("tourism")
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              CairoArticles,
              {
                onOpenWhatsAppBooking: () => handleOpenBooking()
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "contrast-dark py-8 sm:py-14 bg-gradient-to-b from-[#001d40] via-[#012654] to-[#001d40] text-white relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              WhatsAppBookingPage,
              {
                isDarkBg: true,
                preselectedSpecialty,
                preselectedDoctor
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ContactUs, {})
          ] }),
          activeTab === "about" && /* @__PURE__ */ jsxRuntimeExports.jsx(
            AboutSubpage,
            {
              onNavigateHome: () => handleNavigate("home"),
              onOpenWhatsAppBooking: (doctor) => handleOpenBooking(doctor),
              onNavigateServices: () => handleNavigate("services"),
              onNavigateTeam: () => handleNavigate("team")
            }
          ),
          activeTab === "services" && /* @__PURE__ */ jsxRuntimeExports.jsx(
            ServicesSubpage,
            {
              onNavigateHome: () => handleNavigate("home"),
              onSelectServiceForBooking: (service) => handleOpenBooking(void 0, service),
              onOpenWhatsAppBooking: () => handleOpenBooking(),
              onNavigateTourism: () => handleNavigate("tourism")
            }
          ),
          activeTab === "team" && /* @__PURE__ */ jsxRuntimeExports.jsx(
            TeamSubpage,
            {
              onNavigateHome: () => handleNavigate("home"),
              onOpenWhatsAppBooking: (doctor) => handleOpenBooking(doctor)
            }
          ),
          activeTab === "contact" && /* @__PURE__ */ jsxRuntimeExports.jsx(
            ContactSubpage,
            {
              onNavigateHome: () => handleNavigate("home"),
              onOpenWhatsAppBooking: () => handleOpenBooking()
            }
          ),
          activeTab === "booking" && /* @__PURE__ */ jsxRuntimeExports.jsx(
            BookingSubpage,
            {
              onNavigateHome: () => handleNavigate("home"),
              preselectedSpecialty,
              preselectedDoctor
            }
          ),
          activeTab === "tourism" && /* @__PURE__ */ jsxRuntimeExports.jsx(
            MedicalTourismSubpage,
            {
              onNavigateHome: () => handleNavigate("home"),
              onOpenWhatsAppBooking: (specialty) => handleOpenBooking(void 0, specialty)
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, { onNavigate: handleNavigate, onOpenWhatsAppBooking: () => handleOpenBooking() }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingWhatsAppButton, { onOpenBookingModal: () => handleOpenBooking() })
      ]
    }
  ) });
}
clientExports.createRoot(document.getElementById("root")).render(/* @__PURE__ */ jsxRuntimeExports.jsx(App, {}));
