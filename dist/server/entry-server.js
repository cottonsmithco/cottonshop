"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports[Symbol.toStringTag] = "Module";
var React = require("react");
var unstableFizz = require("react-dom/unstable-fizz");
var server = require("react-dom/server");
var reactRouterDom = require("react-router-dom");
var domToReact = require("html-react-parser/lib/dom-to-react");
var htmlToDOM = require("html-dom-parser");
var reactHelmetAsync = require("react-helmet-async");
var jsxRuntime = require("react/jsx-runtime");
var ReactDOM = require("react-dom");
var gql = require("graphql-tag");
var react = require("@headlessui/react");
function _interopDefaultLegacy(e) {
  return e && typeof e === "object" && "default" in e ? e : { "default": e };
}
function _interopNamespace(e) {
  if (e && e.__esModule)
    return e;
  var n2 = { __proto__: null, [Symbol.toStringTag]: "Module" };
  if (e) {
    Object.keys(e).forEach(function(k2) {
      if (k2 !== "default") {
        var d = Object.getOwnPropertyDescriptor(e, k2);
        Object.defineProperty(n2, k2, d.get ? d : {
          enumerable: true,
          get: function() {
            return e[k2];
          }
        });
      }
    });
  }
  n2["default"] = e;
  return Object.freeze(n2);
}
var React__default = /* @__PURE__ */ _interopDefaultLegacy(React);
var React__namespace = /* @__PURE__ */ _interopNamespace(React);
var domToReact__default = /* @__PURE__ */ _interopDefaultLegacy(domToReact);
var htmlToDOM__default = /* @__PURE__ */ _interopDefaultLegacy(htmlToDOM);
var ReactDOM__default = /* @__PURE__ */ _interopDefaultLegacy(ReactDOM);
var gql__default = /* @__PURE__ */ _interopDefaultLegacy(gql);
function getErrorMarkup(error) {
  return `<script>
    import('/@vite/client')
        .then(() => {
            const err = new Error(\`${error.message}\`);
            err.stack = \`${error.stack}\`;
            const ErrorOverlay = customElements.get('vite-error-overlay')
            // don't open outside vite environment
            if (!ErrorOverlay) {return}
            console.log(err)
            const overlay = new ErrorOverlay(err)
            document.body.appendChild(overlay)
        })
<\/script>`;
}
function f() {
  return (f = Object.assign || function(a) {
    for (var b = 1; b < arguments.length; b++) {
      var c, d = arguments[b];
      for (c in d) {
        Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
      }
    }
    return a;
  }).apply(this, arguments);
}
var Element = 60103, h = 60106, k = 60107, aa = 60108, ba = 60114, ca = 60109, da = 60110, ea = 60111, fa = 60112, ha = 60113, ia = 60115, ja = 60116;
if (typeof Symbol == "function" && Symbol.for) {
  var l = Symbol.for;
  Element = l("react.element");
  h = l("react.portal");
  k = l("react.fragment");
  aa = l("react.strict_mode");
  ba = l("react.profiler");
  ca = l("react.provider");
  da = l("react.context");
  ea = Symbol.for("react.concurrent_mode");
  fa = l("react.forward_ref");
  ha = l("react.suspense");
  ia = l("react.memo");
  ja = l("react.lazy");
}
var n = Element, ka = h, q = k, r = aa, t = ba, u = ca, v = da, x = ea, z = fa, A = ha, B = ia, C = ja;
var ma = React.Children.toArray;
function na(a) {
  return a !== null && typeof a == "object";
}
function D(a) {
  return ma(a).filter(na);
}
function E(a, b) {
  return typeof b == "object" ? f({}, b, a) : a;
}
var F = new Map(), G = {}, H = void 0, I = void 0;
function oa() {
  var a = H;
  H = void 0;
  return a;
}
function pa() {
  var a = I;
  I = void 0;
  return a;
}
function J(a) {
  H = void 0;
  G = a;
}
function K(a) {
  I = void 0;
  F = a;
}
function L(a) {
  var b = F.get(a);
  return b !== void 0 ? b : a._currentValue;
}
var qa = {};
function ra(a) {
  var b = a.contextType;
  a = a.contextTypes;
  if (b) {
    return L(b);
  }
  if (!a) {
    return qa;
  }
  b = {};
  for (var d in a) {
    b[d] = G[d];
  }
  return b;
}
var M = null, N = {
  current: {
    uniqueID: 0
  }
};
var ta = typeof Object.is == "function" ? Object.is : function sa(a, b) {
  return a === b && (a !== 0 || 1 / a == 1 / b) || a != a && b != b;
}, O = null;
function P() {
  if (O === null) {
    throw Error("[react-ssr-prepass] Hooks can only be called inside the body of a function component. (https://fb.me/react-invalid-hook-call)");
  }
  return O;
}
var Q = null, R = null, S = false, T = null, U = 0;
function V() {
  return R === null ? Q === null ? Q = R = {
    memoizedState: null,
    queue: null,
    next: null
  } : R = Q : R.next === null ? R = R.next = {
    memoizedState: null,
    queue: null,
    next: null
  } : R = R.next;
}
function va(a, b) {
  return typeof b == "function" ? b(a) : b;
}
function wa(a, b, d) {
  var c = P();
  (R = V()).queue === null && (b = a === va ? typeof b == "function" ? b() : b : d !== void 0 ? d(b) : b, R.memoizedState = b);
  c = (b = R.queue || (R.queue = {
    last: null,
    dispatch: null
  })).dispatch || (b.dispatch = xa.bind(null, c, b));
  if (T !== null && (d = T.get(b)) !== void 0) {
    T.delete(b);
    b = R.memoizedState;
    do {
      b = a(b, d.action), d = d.next;
    } while (d !== null);
    R.memoizedState = b;
  }
  return [R.memoizedState, c];
}
function ya(a, b) {
  P();
  b = b === void 0 ? null : b;
  var d = (R = V()).memoizedState;
  if (d !== null && b !== null) {
    a: {
      var c = d[1];
      if (c === null) {
        c = false;
      } else {
        for (var e = 0; e < c.length && e < b.length; e++) {
          if (!ta(b[e], c[e])) {
            c = false;
            break a;
          }
        }
        c = true;
      }
    }
    if (c) {
      return d[0];
    }
  }
  a = a();
  R.memoizedState = [a, b];
  return a;
}
function xa(a, b, d) {
  if (a === O) {
    if (S = true, a = {
      action: d,
      next: null
    }, T === null && (T = new Map()), (d = T.get(b)) === void 0) {
      T.set(b, a);
    } else {
      for (b = d; b.next !== null; ) {
        b = b.next;
      }
      b.next = a;
    }
  }
}
function W() {
}
function Ba(a) {
  a();
}
var Ca = {
  readContext: function(a) {
    return L(a);
  },
  useContext: function(a) {
    P();
    return L(a);
  },
  useMemo: ya,
  useReducer: wa,
  useRef: function(a) {
    P();
    var b = (R = V()).memoizedState;
    return b === null ? R.memoizedState = a = {
      current: a
    } : b;
  },
  useState: function(a) {
    return wa(va, a);
  },
  useCallback: function(a, b) {
    return ya(function() {
      return a;
    }, b);
  },
  useMutableSource: function(a, b) {
    P();
    return b(a._source);
  },
  useTransition: function() {
    return [Ba, false];
  },
  useDeferredValue: function(a) {
    return a;
  },
  useOpaqueIdentifier: function() {
    P();
    (R = V()).memoizedState || (R.memoizedState = "R:" + (N.current.uniqueID++).toString(36));
    return R.memoizedState;
  },
  useLayoutEffect: W,
  useImperativeHandle: W,
  useEffect: W,
  useDebugValue: W
};
function Da(a) {
  var b = a._payload || a;
  if (b._status === 0) {
    return b._result;
  }
  if (b._status === 1) {
    return Promise.resolve(b._result);
  }
  if (b._status === 2) {
    return Promise.reject(b._result);
  }
  b._status = 0;
  return b._result = (b._ctor || b._result)().then(function(a2) {
    b._result = a2;
    typeof a2 == "function" ? b._status = 1 : a2 !== null && typeof a2 == "object" && typeof a2.default == "function" ? (b._result = a2.default, b._status = 1) : b._status = 2;
  }).catch(function(a2) {
    b._status = 2;
    b._result = a2;
    return Promise.reject(a2);
  });
}
function Ea(a, b) {
  return (a = a._payload || a)._status === 1 ? React.createElement(a._result, b) : null;
}
function Fa(a, b, d) {
  return {
    contextMap: f({}, G),
    contextStore: new Map(F),
    id: P(),
    hook: Q,
    kind: "frame.hooks",
    errorFrame: M,
    thenable: d,
    props: b,
    type: a
  };
}
function Ga(a, b, d) {
  try {
    var c = E(b, a.defaultProps), e = ra(a);
    R = null;
    for (var g = a(c, e); 25 > U && S; ) {
      S = false, U += 1, R = null, g = a(c, e);
    }
    U = 0;
    R = T = null;
    return g;
  } catch (p) {
    if (typeof p.then != "function") {
      throw p;
    }
    d.push(Fa(a, b, p));
    return null;
  }
}
function Ha() {
  return false;
}
function Ia() {
  return null;
}
function Y(a, b, d) {
  return {
    contextMap: f({}, G),
    contextStore: new Map(F),
    errorFrame: M,
    thenable: d,
    kind: "frame.class",
    error: null,
    instance: b,
    type: a
  };
}
function Ka(a, b, d) {
  var c = b.updater.queue;
  if (0 < c.length) {
    for (var e = f({}, b.state), g = 0, p = c.length; g < p; g++) {
      var m = c[g];
      (m = typeof m == "function" ? m.call(b, e, b.props, b.context) : m) !== null && f(e, m);
    }
    b.state = e;
    c.length = 0;
  }
  c = null;
  try {
    c = b.render();
  } catch (y) {
    if (typeof y.then != "function") {
      throw y;
    }
    d.push(Y(a, b, y));
    return null;
  }
  if (a.childContextTypes !== void 0 && typeof b.getChildContext == "function" && ((a = b.getChildContext()) !== null && typeof a == "object")) {
    H = {};
    for (var w in a) {
      H[w] = G[w], G[w] = a[w];
    }
  }
  if (typeof b.getDerivedStateFromProps != "function" && (typeof b.componentWillMount == "function" || typeof b.UNSAFE_componentWillMount == "function") && typeof b.componentWillUnmount == "function") {
    try {
      b.componentWillUnmount();
    } catch (y) {
    }
  }
  b._isMounted = false;
  return c;
}
var Z = React__default["default"].__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher, La = typeof setImmediate == "function";
function Ma(a, b, d) {
  switch (function la(a2) {
    switch (a2.$$typeof) {
      case ka:
        return ka;
      case n:
        switch (a2.type) {
          case x:
            return x;
          case q:
            return q;
          case t:
            return t;
          case r:
            return r;
          case A:
            return A;
          default:
            switch (a2.type && a2.type.$$typeof) {
              case C:
                return C;
              case B:
                return B;
              case v:
                return v;
              case u:
                return u;
              case z:
                return z;
              default:
                return n;
            }
        }
    }
  }(a)) {
    case A:
    case r:
    case x:
    case t:
    case q:
      return D(a.props.children);
    case u:
      var c = a.props;
      b = c.children;
      c = c.value;
      I = [a = a.type._context, F.get(a)];
      F.set(a, c);
      return D(b);
    case v:
      return typeof (b = a.props.children) == "function" ? D(b(a = L(typeof (a = a.type)._context == "object" ? a._context : a))) : [];
    case C:
      return c = a.type, a = a.props, 0 >= (c._payload || c)._status ? (b.push({
        kind: "frame.lazy",
        contextMap: f({}, G),
        contextStore: new Map(F),
        errorFrame: M,
        thenable: Da(c),
        props: a,
        type: c
      }), a = null) : a = Ea(c, a), D(a);
    case B:
      return D(a = React.createElement(a.type.type, a.props));
    case z:
      return b = (c = a.type).render, a = E(a.props, c.defaultProps), D(a = React.createElement(b, a));
    case n:
      if (typeof a.type == "string") {
        return D(a.props.children);
      }
      var e = a.props;
      if ((c = a.type).prototype && c.prototype.isReactComponent) {
        O = null;
        var g = function Ja() {
          var a2 = [];
          return {
            _thrown: 0,
            queue: a2,
            isMounted: Ha,
            enqueueForceUpdate: Ia,
            enqueueReplaceState: function(b2, d2) {
              b2._isMounted && (a2.length = 0, a2.push(d2));
            },
            enqueueSetState: function(b2, d2) {
              b2._isMounted && a2.push(d2);
            }
          };
        }(), p = E(e, c.defaultProps), m = ra(c);
        (e = new c(p, m, g)).props = p;
        e.context = m;
        e.updater = g;
        e._isMounted = true;
        e.state === void 0 && (e.state = null);
        if (typeof e.componentDidCatch == "function" || typeof c.getDerivedStateFromError == "function") {
          g = Y(c, e, null), M = (g.errorFrame = g) || null;
        }
        typeof c.getDerivedStateFromProps == "function" ? (g = (g = c.getDerivedStateFromProps)(e.props, e.state)) != null && (e.state = f({}, e.state, g)) : typeof e.componentWillMount == "function" ? e.componentWillMount() : typeof e.UNSAFE_componentWillMount == "function" && e.UNSAFE_componentWillMount();
        (a = d(a, e)) ? (b.push(Y(c, e, a)), a = null) : a = Ka(c, e, b);
      } else {
        Q = null, O = {}, (a = d(a)) ? (b.push(Fa(c, e, a)), a = null) : a = Ga(c, e, b);
      }
      return D(a);
    default:
      return [];
  }
}
function Na(a, b, d, c, e, g) {
  var p = Z.current, m = Date.now();
  try {
    for (Z.current = Ca; 0 < a.length; ) {
      var w = a[a.length - 1].shift();
      if (w !== void 0) {
        var y = Ma(w, e, g);
        a.push(y);
        b.push(oa());
        d.push(pa());
        c.push(M);
      } else {
        a.pop();
        var za = b.pop();
        za !== void 0 && f(G, za);
        var X = d.pop();
        X !== void 0 && F.set(X[0], X[1]);
        M = c.pop() || null;
      }
      if (La && 5 < Date.now() - m) {
        return true;
      }
    }
    return false;
  } catch (Aa) {
    if (!(a = M)) {
      throw Aa;
    }
    a.error = Aa;
    e.unshift(a);
    return false;
  } finally {
    Z.current = p;
  }
}
function Oa(a, b, d, c) {
  return {
    contextMap: f({}, G),
    contextStore: new Map(F),
    errorFrame: M,
    thenable: null,
    kind: "frame.yield",
    traversalChildren: a,
    traversalMap: b,
    traversalStore: d,
    traversalErrorFrame: c
  };
}
function Pa(a, b, d) {
  a = [a];
  var c = [oa()], e = [pa()], g = [M];
  Na(a, c, e, g, b, d) && b.unshift(Oa(a, c, e, g));
}
function Qa(a, b, d) {
  if (a.kind === "frame.yield") {
    O = null, J(a.contextMap), K(a.contextStore), M = a.errorFrame || null, Na(a.traversalChildren, a.traversalMap, a.traversalStore, a.traversalErrorFrame, b, d) && b.unshift(Oa(a.traversalChildren, a.traversalMap, a.traversalStore, a.traversalErrorFrame));
  } else {
    var c = Z.current, e = null;
    Z.current = Ca;
    try {
      if (a.kind === "frame.class") {
        a: {
          O = null;
          J(a.contextMap);
          K(a.contextStore);
          M = a.errorFrame || null;
          if (a.error) {
            if (25 <= ++a.instance.updater._thrown) {
              e = null;
              break a;
            }
            a.instance._isMounted = true;
            typeof a.instance.componentDidCatch == "function" && a.instance.componentDidCatch(a.error);
            typeof a.type.getDerivedStateFromError == "function" && a.instance.updater.enqueueSetState(a.instance, a.type.getDerivedStateFromError(a.error));
          }
          e = Ka(a.type, a.instance, b);
        }
      } else {
        a.kind === "frame.hooks" ? (Q = a.hook, O = a.id, J(a.contextMap), K(a.contextStore), M = a.errorFrame || null, e = Ga(a.type, a.props, b)) : a.kind === "frame.lazy" && (O = null, J(a.contextMap), K(a.contextStore), M = a.errorFrame || null, e = Ea(a.type, a.props));
      }
    } catch (g) {
      if (!(a = M)) {
        throw g;
      }
      a.error = g;
      b.unshift(a);
      e = null;
    } finally {
      Z.current = c;
    }
    Pa(D(e), b, d);
  }
}
function Ra(a) {
  setImmediate(a);
}
function Sa(a, b, d) {
  var c = a.shift();
  if (!c) {
    return Promise.resolve();
  }
  La && c.kind === "frame.yield" && (c.thenable = new Promise(Ra));
  return Promise.resolve(c.thenable).then(function() {
    N.current = d;
    Qa(c, a, b);
    return Sa(a, b, d);
  }, function(d2) {
    if (!c.errorFrame) {
      throw d2;
    }
    c.errorFrame.error = d2;
    Qa(c.errorFrame, a, b);
  });
}
function Ta() {
}
function ssrPrepass(a, b) {
  b || (b = Ta);
  var d = [], c = N.current = {
    uniqueID: 0
  };
  J({});
  K(new Map());
  M = null;
  try {
    Pa(D(a), d, b);
  } catch (e) {
    return Promise.reject(e);
  }
  return Sa(d, b, c);
}
const HydrationContext = React.createContext(false);
class ClientComponents {
  constructor() {
    this.modules = [];
  }
  add(module) {
    this.modules.push(JSON.stringify(module));
    return this.modules.length;
  }
  indexOf(module) {
    return this.modules.indexOf(JSON.stringify(module)) + 1;
  }
  all() {
    return this.modules.map((module) => JSON.parse(module));
  }
}
function renderReactProps(props) {
  return Object.entries(props).reduce((memo, [key, prop]) => {
    if (prop instanceof Array) {
      memo[key] = prop.map((p) => renderReactProp(p));
    } else {
      memo[key] = renderReactProp(prop);
    }
    return memo;
  }, {});
}
function renderReactProp(prop) {
  if (typeof prop === "object" && prop !== null && prop["$$typeof"] === Symbol.for("react.element")) {
    if (prop.type instanceof Function) {
      return parseReactFromString(server.renderToString(prop));
    } else {
      return __spreadProps(__spreadValues({}, prop), {
        props: renderReactProps(prop.props)
      });
    }
  }
  return prop;
}
function parseReactFromString(input, options = {}) {
  return domToReact__default["default"](htmlToDOM__default["default"](input, { lowerCaseTags: false, lowerCaseAttributeNames: false }), options);
}
function generateWireSyntaxFromRenderedHtml(html) {
  const clientComponents = new ClientComponents();
  const wireModel = parseReactFromString(html, {
    library: {
      createElement: convertToWireSyntax
    }
  });
  function convertToWireSyntax(type, props, children) {
    let componentType = type;
    let componentProps = props;
    if (props && props["data-client-component"]) {
      const component = {
        name: props["data-client-component"],
        id: props["data-id"],
        named: props["data-named"] === "true"
      };
      const index = clientComponents.indexOf(component) > 0 ? clientComponents.indexOf(component) : clientComponents.add(component);
      componentType = `@${index}`;
      componentProps = JSON.parse(props["data-props"]);
    }
    convertComponentPropsToWireSyntax(componentProps !== null && componentProps !== void 0 ? componentProps : {});
    if (isDomNode(children) || children instanceof Array && children.some(isDomNode)) {
      if (children instanceof Array) {
        children = children.map((child) => {
          if (typeof child === "string") {
            return child;
          }
          const _a2 = child.props, { children: children2 } = _a2, props2 = __objRest(_a2, ["children"]);
          return convertToWireSyntax(child.type, props2, children2);
        });
      } else {
        const _a = children.props, { children: childrenChildren } = _a, childrenProps = __objRest(_a, ["children"]);
        children = convertToWireSyntax(children.type, childrenProps, childrenChildren);
      }
    }
    return ["$", componentType, null, __spreadProps(__spreadValues({}, componentProps), { children })];
  }
  function convertComponentPropsToWireSyntax(componentProps) {
    Object.entries(componentProps).forEach(([key, prop]) => {
      if (isDomNode(prop)) {
        const _a = prop.props, { children } = _a, props = __objRest(_a, ["children"]);
        componentProps[key] = convertToWireSyntax(prop.type, props, children);
      }
    });
  }
  return (clientComponents.all().map((component, idx) => {
    return `M${idx + 1}:${JSON.stringify(component)}`;
  }).join("\n") + `
J0:${JSON.stringify(wireModel)}`).trim();
}
function isDomNode(item) {
  return item !== null && typeof item === "object" && "_owner" in item;
}
function Html({ children, head }) {
  return React__default["default"].createElement("html", { lang: "en" }, React__default["default"].createElement("head", { dangerouslySetInnerHTML: { __html: head } }), React__default["default"].createElement("body", null, React__default["default"].createElement("div", { id: "root" }, children), false));
}
class HydrationWriter {
  constructor() {
    this.chunks = [];
    this.drainCallback = () => {
    };
  }
  write(chunk) {
    this.chunks.push(chunk.toString());
  }
  on(event, callback) {
    if (event === Events.drain) {
      this.drainCallback = callback;
    }
  }
  drain() {
    this.drainCallback();
  }
  destroy() {
  }
  end() {
  }
  toString() {
    return this.chunks.join("");
  }
}
const Events = {
  drain: "drain"
};
function getContext() {
  return globalThis.__ctx;
}
function getCache() {
  return globalThis.__cache;
}
function runDelayedFunction(fn) {
  const context = getContext();
  if (!(context === null || context === void 0 ? void 0 : context.waitUntil)) {
    return fn();
  }
  return context.waitUntil(fn());
}
const DEFAULT_SUBREQUEST_CACHE_OPTIONS = {
  maxAge: 1,
  staleWhileRevalidate: 9
};
function generateCacheControlHeader(options) {
  if (options.noStore) {
    return "no-store";
  }
  return [
    options.private ? "private" : "public",
    `max-age=${options.maxAge}`,
    `stale-while-revalidate=${options.staleWhileRevalidate}`
  ].join(", ");
}
function getCacheControlHeader({ dev }) {
  return dev ? "cache-control-preview" : "cache-control";
}
function hashKey(key) {
  const rawKey = key instanceof Array ? key : [key];
  return rawKey.map((k2) => JSON.stringify(k2)).join("");
}
function getKeyUrl(key) {
  return `https://shopify.dev/?${key}`;
}
async function getItemFromCache(key) {
  const cache = getCache();
  if (!cache) {
    return;
  }
  const url = getKeyUrl(hashKey(key));
  const request = new Request(url);
  const response = await cache.match(request);
  if (!response)
    return;
  return [await response.json(), response];
}
async function setItemInCache(key, value, userCacheOptions) {
  const cache = getCache();
  if (!cache) {
    return;
  }
  const url = getKeyUrl(hashKey(key));
  const request = new Request(url);
  const cacheOptions = __spreadValues(__spreadValues({}, DEFAULT_SUBREQUEST_CACHE_OPTIONS), userCacheOptions !== null && userCacheOptions !== void 0 ? userCacheOptions : {});
  const headers = new Headers({
    "cache-control": generateCacheControlHeader(cacheOptions)
  });
  const response = new Response(JSON.stringify(value), { headers });
  await cache.put(request, response);
}
async function deleteItemFromCache(key) {
  const cache = getCache();
  if (!cache)
    return;
  const url = getKeyUrl(hashKey(key));
  const request = new Request(url);
  await cache.delete(request);
}
function isStale$1(response) {
  const responseDate = response.headers.get("date");
  const responseCacheControl = response.headers.get("cache-control");
  if (!responseDate || !responseCacheControl)
    return false;
  const responseMaxAgeMatch = responseCacheControl.match(/max-age=(\d+)/);
  if (!responseMaxAgeMatch)
    return false;
  const responseMaxAge = parseInt(responseMaxAgeMatch[1]);
  const ageInMs = new Date().valueOf() - new Date(responseDate).valueOf();
  const age = ageInMs / 1e3;
  return age > responseMaxAge;
}
class ServerComponentResponse extends Response {
  constructor() {
    super(...arguments);
    this.wait = false;
    this.customBody = "";
  }
  doNotStream() {
    this.wait = true;
  }
  canStream() {
    return !this.wait;
  }
  cache(options) {
    this.cacheOptions = options;
  }
  get cacheControlHeader() {
    var _a;
    const options = __spreadValues(__spreadValues({}, DEFAULT_CACHE_OPTIONS), (_a = this.cacheOptions) !== null && _a !== void 0 ? _a : {});
    return generateCacheControlHeader(options);
  }
  send(body) {
    if (typeof body === "object" && body.$$typeof === Symbol.for("react.element")) {
      this.customBody = server.renderToString(body);
    } else {
      this.customBody = body;
    }
    return null;
  }
}
const DEFAULT_CACHE_OPTIONS = {
  maxAge: 60 * 60,
  staleWhileRevalidate: 23 * 60 * 60
};
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf(o, p);
}
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}
var Subscribable = /* @__PURE__ */ function() {
  function Subscribable2() {
    this.listeners = [];
  }
  var _proto = Subscribable2.prototype;
  _proto.subscribe = function subscribe(listener) {
    var _this = this;
    var callback = listener || function() {
      return void 0;
    };
    this.listeners.push(callback);
    this.onSubscribe();
    return function() {
      _this.listeners = _this.listeners.filter(function(x2) {
        return x2 !== callback;
      });
      _this.onUnsubscribe();
    };
  };
  _proto.hasListeners = function hasListeners() {
    return this.listeners.length > 0;
  };
  _proto.onSubscribe = function onSubscribe() {
  };
  _proto.onUnsubscribe = function onUnsubscribe() {
  };
  return Subscribable2;
}();
function _extends() {
  _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
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
var isServer = typeof window === "undefined";
function noop() {
  return void 0;
}
function functionalUpdate(updater, input) {
  return typeof updater === "function" ? updater(input) : updater;
}
function isValidTimeout(value) {
  return typeof value === "number" && value >= 0 && value !== Infinity;
}
function ensureQueryKeyArray(value) {
  return Array.isArray(value) ? value : [value];
}
function timeUntilStale(updatedAt, staleTime) {
  return Math.max(updatedAt + (staleTime || 0) - Date.now(), 0);
}
function parseQueryArgs(arg1, arg2, arg3) {
  if (!isQueryKey(arg1)) {
    return arg1;
  }
  if (typeof arg2 === "function") {
    return _extends({}, arg3, {
      queryKey: arg1,
      queryFn: arg2
    });
  }
  return _extends({}, arg2, {
    queryKey: arg1
  });
}
function parseFilterArgs(arg1, arg2, arg3) {
  return isQueryKey(arg1) ? [_extends({}, arg2, {
    queryKey: arg1
  }), arg3] : [arg1 || {}, arg2];
}
function mapQueryStatusFilter(active, inactive) {
  if (active === true && inactive === true || active == null && inactive == null) {
    return "all";
  } else if (active === false && inactive === false) {
    return "none";
  } else {
    var isActive = active != null ? active : !inactive;
    return isActive ? "active" : "inactive";
  }
}
function matchQuery(filters, query) {
  var active = filters.active, exact = filters.exact, fetching = filters.fetching, inactive = filters.inactive, predicate = filters.predicate, queryKey = filters.queryKey, stale = filters.stale;
  if (isQueryKey(queryKey)) {
    if (exact) {
      if (query.queryHash !== hashQueryKeyByOptions(queryKey, query.options)) {
        return false;
      }
    } else if (!partialMatchKey(query.queryKey, queryKey)) {
      return false;
    }
  }
  var queryStatusFilter = mapQueryStatusFilter(active, inactive);
  if (queryStatusFilter === "none") {
    return false;
  } else if (queryStatusFilter !== "all") {
    var isActive = query.isActive();
    if (queryStatusFilter === "active" && !isActive) {
      return false;
    }
    if (queryStatusFilter === "inactive" && isActive) {
      return false;
    }
  }
  if (typeof stale === "boolean" && query.isStale() !== stale) {
    return false;
  }
  if (typeof fetching === "boolean" && query.isFetching() !== fetching) {
    return false;
  }
  if (predicate && !predicate(query)) {
    return false;
  }
  return true;
}
function matchMutation(filters, mutation) {
  var exact = filters.exact, fetching = filters.fetching, predicate = filters.predicate, mutationKey = filters.mutationKey;
  if (isQueryKey(mutationKey)) {
    if (!mutation.options.mutationKey) {
      return false;
    }
    if (exact) {
      if (hashQueryKey(mutation.options.mutationKey) !== hashQueryKey(mutationKey)) {
        return false;
      }
    } else if (!partialMatchKey(mutation.options.mutationKey, mutationKey)) {
      return false;
    }
  }
  if (typeof fetching === "boolean" && mutation.state.status === "loading" !== fetching) {
    return false;
  }
  if (predicate && !predicate(mutation)) {
    return false;
  }
  return true;
}
function hashQueryKeyByOptions(queryKey, options) {
  var hashFn = (options == null ? void 0 : options.queryKeyHashFn) || hashQueryKey;
  return hashFn(queryKey);
}
function hashQueryKey(queryKey) {
  var asArray = ensureQueryKeyArray(queryKey);
  return stableValueHash(asArray);
}
function stableValueHash(value) {
  return JSON.stringify(value, function(_, val) {
    return isPlainObject(val) ? Object.keys(val).sort().reduce(function(result, key) {
      result[key] = val[key];
      return result;
    }, {}) : val;
  });
}
function partialMatchKey(a, b) {
  return partialDeepEqual(ensureQueryKeyArray(a), ensureQueryKeyArray(b));
}
function partialDeepEqual(a, b) {
  if (a === b) {
    return true;
  }
  if (typeof a !== typeof b) {
    return false;
  }
  if (a && b && typeof a === "object" && typeof b === "object") {
    return !Object.keys(b).some(function(key) {
      return !partialDeepEqual(a[key], b[key]);
    });
  }
  return false;
}
function replaceEqualDeep(a, b) {
  if (a === b) {
    return a;
  }
  var array = Array.isArray(a) && Array.isArray(b);
  if (array || isPlainObject(a) && isPlainObject(b)) {
    var aSize = array ? a.length : Object.keys(a).length;
    var bItems = array ? b : Object.keys(b);
    var bSize = bItems.length;
    var copy = array ? [] : {};
    var equalItems = 0;
    for (var i = 0; i < bSize; i++) {
      var key = array ? i : bItems[i];
      copy[key] = replaceEqualDeep(a[key], b[key]);
      if (copy[key] === a[key]) {
        equalItems++;
      }
    }
    return aSize === bSize && equalItems === aSize ? a : copy;
  }
  return b;
}
function shallowEqualObjects(a, b) {
  if (a && !b || b && !a) {
    return false;
  }
  for (var key in a) {
    if (a[key] !== b[key]) {
      return false;
    }
  }
  return true;
}
function isPlainObject(o) {
  if (!hasObjectPrototype(o)) {
    return false;
  }
  var ctor = o.constructor;
  if (typeof ctor === "undefined") {
    return true;
  }
  var prot = ctor.prototype;
  if (!hasObjectPrototype(prot)) {
    return false;
  }
  if (!prot.hasOwnProperty("isPrototypeOf")) {
    return false;
  }
  return true;
}
function hasObjectPrototype(o) {
  return Object.prototype.toString.call(o) === "[object Object]";
}
function isQueryKey(value) {
  return typeof value === "string" || Array.isArray(value);
}
function sleep(timeout) {
  return new Promise(function(resolve) {
    setTimeout(resolve, timeout);
  });
}
function scheduleMicrotask(callback) {
  Promise.resolve().then(callback).catch(function(error) {
    return setTimeout(function() {
      throw error;
    });
  });
}
function getAbortController() {
  if (typeof AbortController === "function") {
    return new AbortController();
  }
}
var FocusManager = /* @__PURE__ */ function(_Subscribable) {
  _inheritsLoose(FocusManager2, _Subscribable);
  function FocusManager2() {
    return _Subscribable.apply(this, arguments) || this;
  }
  var _proto = FocusManager2.prototype;
  _proto.onSubscribe = function onSubscribe() {
    if (!this.removeEventListener) {
      this.setDefaultEventListener();
    }
  };
  _proto.setEventListener = function setEventListener(setup) {
    var _this = this;
    if (this.removeEventListener) {
      this.removeEventListener();
    }
    this.removeEventListener = setup(function(focused) {
      if (typeof focused === "boolean") {
        _this.setFocused(focused);
      } else {
        _this.onFocus();
      }
    });
  };
  _proto.setFocused = function setFocused(focused) {
    this.focused = focused;
    if (focused) {
      this.onFocus();
    }
  };
  _proto.onFocus = function onFocus() {
    this.listeners.forEach(function(listener) {
      listener();
    });
  };
  _proto.isFocused = function isFocused() {
    if (typeof this.focused === "boolean") {
      return this.focused;
    }
    if (typeof document === "undefined") {
      return true;
    }
    return [void 0, "visible", "prerender"].includes(document.visibilityState);
  };
  _proto.setDefaultEventListener = function setDefaultEventListener() {
    var _window;
    if (!isServer && ((_window = window) == null ? void 0 : _window.addEventListener)) {
      this.setEventListener(function(onFocus) {
        var listener = function listener2() {
          return onFocus();
        };
        window.addEventListener("visibilitychange", listener, false);
        window.addEventListener("focus", listener, false);
        return function() {
          window.removeEventListener("visibilitychange", listener);
          window.removeEventListener("focus", listener);
        };
      });
    }
  };
  return FocusManager2;
}(Subscribable);
var focusManager = new FocusManager();
var OnlineManager = /* @__PURE__ */ function(_Subscribable) {
  _inheritsLoose(OnlineManager2, _Subscribable);
  function OnlineManager2() {
    return _Subscribable.apply(this, arguments) || this;
  }
  var _proto = OnlineManager2.prototype;
  _proto.onSubscribe = function onSubscribe() {
    if (!this.removeEventListener) {
      this.setDefaultEventListener();
    }
  };
  _proto.setEventListener = function setEventListener(setup) {
    var _this = this;
    if (this.removeEventListener) {
      this.removeEventListener();
    }
    this.removeEventListener = setup(function(online) {
      if (typeof online === "boolean") {
        _this.setOnline(online);
      } else {
        _this.onOnline();
      }
    });
  };
  _proto.setOnline = function setOnline(online) {
    this.online = online;
    if (online) {
      this.onOnline();
    }
  };
  _proto.onOnline = function onOnline() {
    this.listeners.forEach(function(listener) {
      listener();
    });
  };
  _proto.isOnline = function isOnline() {
    if (typeof this.online === "boolean") {
      return this.online;
    }
    if (typeof navigator === "undefined" || typeof navigator.onLine === "undefined") {
      return true;
    }
    return navigator.onLine;
  };
  _proto.setDefaultEventListener = function setDefaultEventListener() {
    var _window;
    if (!isServer && ((_window = window) == null ? void 0 : _window.addEventListener)) {
      this.setEventListener(function(onOnline) {
        var listener = function listener2() {
          return onOnline();
        };
        window.addEventListener("online", listener, false);
        window.addEventListener("offline", listener, false);
        return function() {
          window.removeEventListener("online", listener);
          window.removeEventListener("offline", listener);
        };
      });
    }
  };
  return OnlineManager2;
}(Subscribable);
var onlineManager = new OnlineManager();
function defaultRetryDelay(failureCount) {
  return Math.min(1e3 * Math.pow(2, failureCount), 3e4);
}
function isCancelable(value) {
  return typeof (value == null ? void 0 : value.cancel) === "function";
}
var CancelledError = function CancelledError2(options) {
  this.revert = options == null ? void 0 : options.revert;
  this.silent = options == null ? void 0 : options.silent;
};
function isCancelledError(value) {
  return value instanceof CancelledError;
}
var Retryer = function Retryer2(config) {
  var _this = this;
  var cancelRetry = false;
  var cancelFn;
  var continueFn;
  var promiseResolve;
  var promiseReject;
  this.abort = config.abort;
  this.cancel = function(cancelOptions) {
    return cancelFn == null ? void 0 : cancelFn(cancelOptions);
  };
  this.cancelRetry = function() {
    cancelRetry = true;
  };
  this.continue = function() {
    return continueFn == null ? void 0 : continueFn();
  };
  this.failureCount = 0;
  this.isPaused = false;
  this.isResolved = false;
  this.isTransportCancelable = false;
  this.promise = new Promise(function(outerResolve, outerReject) {
    promiseResolve = outerResolve;
    promiseReject = outerReject;
  });
  var resolve = function resolve2(value) {
    if (!_this.isResolved) {
      _this.isResolved = true;
      config.onSuccess == null ? void 0 : config.onSuccess(value);
      continueFn == null ? void 0 : continueFn();
      promiseResolve(value);
    }
  };
  var reject = function reject2(value) {
    if (!_this.isResolved) {
      _this.isResolved = true;
      config.onError == null ? void 0 : config.onError(value);
      continueFn == null ? void 0 : continueFn();
      promiseReject(value);
    }
  };
  var pause = function pause2() {
    return new Promise(function(continueResolve) {
      continueFn = continueResolve;
      _this.isPaused = true;
      config.onPause == null ? void 0 : config.onPause();
    }).then(function() {
      continueFn = void 0;
      _this.isPaused = false;
      config.onContinue == null ? void 0 : config.onContinue();
    });
  };
  var run = function run2() {
    if (_this.isResolved) {
      return;
    }
    var promiseOrValue;
    try {
      promiseOrValue = config.fn();
    } catch (error) {
      promiseOrValue = Promise.reject(error);
    }
    cancelFn = function cancelFn2(cancelOptions) {
      if (!_this.isResolved) {
        reject(new CancelledError(cancelOptions));
        _this.abort == null ? void 0 : _this.abort();
        if (isCancelable(promiseOrValue)) {
          try {
            promiseOrValue.cancel();
          } catch (_unused) {
          }
        }
      }
    };
    _this.isTransportCancelable = isCancelable(promiseOrValue);
    Promise.resolve(promiseOrValue).then(resolve).catch(function(error) {
      var _config$retry, _config$retryDelay;
      if (_this.isResolved) {
        return;
      }
      var retry = (_config$retry = config.retry) != null ? _config$retry : 3;
      var retryDelay = (_config$retryDelay = config.retryDelay) != null ? _config$retryDelay : defaultRetryDelay;
      var delay = typeof retryDelay === "function" ? retryDelay(_this.failureCount, error) : retryDelay;
      var shouldRetry = retry === true || typeof retry === "number" && _this.failureCount < retry || typeof retry === "function" && retry(_this.failureCount, error);
      if (cancelRetry || !shouldRetry) {
        reject(error);
        return;
      }
      _this.failureCount++;
      config.onFail == null ? void 0 : config.onFail(_this.failureCount, error);
      sleep(delay).then(function() {
        if (!focusManager.isFocused() || !onlineManager.isOnline()) {
          return pause();
        }
      }).then(function() {
        if (cancelRetry) {
          reject(error);
        } else {
          run2();
        }
      });
    });
  };
  run();
};
var NotifyManager = /* @__PURE__ */ function() {
  function NotifyManager2() {
    this.queue = [];
    this.transactions = 0;
    this.notifyFn = function(callback) {
      callback();
    };
    this.batchNotifyFn = function(callback) {
      callback();
    };
  }
  var _proto = NotifyManager2.prototype;
  _proto.batch = function batch(callback) {
    this.transactions++;
    var result = callback();
    this.transactions--;
    if (!this.transactions) {
      this.flush();
    }
    return result;
  };
  _proto.schedule = function schedule(callback) {
    var _this = this;
    if (this.transactions) {
      this.queue.push(callback);
    } else {
      scheduleMicrotask(function() {
        _this.notifyFn(callback);
      });
    }
  };
  _proto.batchCalls = function batchCalls(callback) {
    var _this2 = this;
    return function() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this2.schedule(function() {
        callback.apply(void 0, args);
      });
    };
  };
  _proto.flush = function flush() {
    var _this3 = this;
    var queue = this.queue;
    this.queue = [];
    if (queue.length) {
      scheduleMicrotask(function() {
        _this3.batchNotifyFn(function() {
          queue.forEach(function(callback) {
            _this3.notifyFn(callback);
          });
        });
      });
    }
  };
  _proto.setNotifyFunction = function setNotifyFunction(fn) {
    this.notifyFn = fn;
  };
  _proto.setBatchNotifyFunction = function setBatchNotifyFunction(fn) {
    this.batchNotifyFn = fn;
  };
  return NotifyManager2;
}();
var notifyManager = new NotifyManager();
var logger$1 = console || {
  error: noop,
  warn: noop,
  log: noop
};
function getLogger() {
  return logger$1;
}
function setLogger(newLogger) {
  logger$1 = newLogger;
}
var Query = /* @__PURE__ */ function() {
  function Query2(config) {
    this.abortSignalConsumed = false;
    this.defaultOptions = config.defaultOptions;
    this.setOptions(config.options);
    this.observers = [];
    this.cache = config.cache;
    this.queryKey = config.queryKey;
    this.queryHash = config.queryHash;
    this.initialState = config.state || this.getDefaultState(this.options);
    this.state = this.initialState;
    this.meta = config.meta;
    this.scheduleGc();
  }
  var _proto = Query2.prototype;
  _proto.setOptions = function setOptions(options) {
    var _this$options$cacheTi;
    this.options = _extends({}, this.defaultOptions, options);
    this.meta = options == null ? void 0 : options.meta;
    this.cacheTime = Math.max(this.cacheTime || 0, (_this$options$cacheTi = this.options.cacheTime) != null ? _this$options$cacheTi : 5 * 60 * 1e3);
  };
  _proto.setDefaultOptions = function setDefaultOptions(options) {
    this.defaultOptions = options;
  };
  _proto.scheduleGc = function scheduleGc() {
    var _this = this;
    this.clearGcTimeout();
    if (isValidTimeout(this.cacheTime)) {
      this.gcTimeout = setTimeout(function() {
        _this.optionalRemove();
      }, this.cacheTime);
    }
  };
  _proto.clearGcTimeout = function clearGcTimeout() {
    clearTimeout(this.gcTimeout);
    this.gcTimeout = void 0;
  };
  _proto.optionalRemove = function optionalRemove() {
    if (!this.observers.length && !this.state.isFetching) {
      this.cache.remove(this);
    }
  };
  _proto.setData = function setData(updater, options) {
    var _this$options$isDataE, _this$options;
    var prevData = this.state.data;
    var data = functionalUpdate(updater, prevData);
    if ((_this$options$isDataE = (_this$options = this.options).isDataEqual) == null ? void 0 : _this$options$isDataE.call(_this$options, prevData, data)) {
      data = prevData;
    } else if (this.options.structuralSharing !== false) {
      data = replaceEqualDeep(prevData, data);
    }
    this.dispatch({
      data,
      type: "success",
      dataUpdatedAt: options == null ? void 0 : options.updatedAt
    });
    return data;
  };
  _proto.setState = function setState(state, setStateOptions) {
    this.dispatch({
      type: "setState",
      state,
      setStateOptions
    });
  };
  _proto.cancel = function cancel(options) {
    var _this$retryer;
    var promise = this.promise;
    (_this$retryer = this.retryer) == null ? void 0 : _this$retryer.cancel(options);
    return promise ? promise.then(noop).catch(noop) : Promise.resolve();
  };
  _proto.destroy = function destroy() {
    this.clearGcTimeout();
    this.cancel({
      silent: true
    });
  };
  _proto.reset = function reset() {
    this.destroy();
    this.setState(this.initialState);
  };
  _proto.isActive = function isActive() {
    return this.observers.some(function(observer) {
      return observer.options.enabled !== false;
    });
  };
  _proto.isFetching = function isFetching() {
    return this.state.isFetching;
  };
  _proto.isStale = function isStale2() {
    return this.state.isInvalidated || !this.state.dataUpdatedAt || this.observers.some(function(observer) {
      return observer.getCurrentResult().isStale;
    });
  };
  _proto.isStaleByTime = function isStaleByTime(staleTime) {
    if (staleTime === void 0) {
      staleTime = 0;
    }
    return this.state.isInvalidated || !this.state.dataUpdatedAt || !timeUntilStale(this.state.dataUpdatedAt, staleTime);
  };
  _proto.onFocus = function onFocus() {
    var _this$retryer2;
    var observer = this.observers.find(function(x2) {
      return x2.shouldFetchOnWindowFocus();
    });
    if (observer) {
      observer.refetch();
    }
    (_this$retryer2 = this.retryer) == null ? void 0 : _this$retryer2.continue();
  };
  _proto.onOnline = function onOnline() {
    var _this$retryer3;
    var observer = this.observers.find(function(x2) {
      return x2.shouldFetchOnReconnect();
    });
    if (observer) {
      observer.refetch();
    }
    (_this$retryer3 = this.retryer) == null ? void 0 : _this$retryer3.continue();
  };
  _proto.addObserver = function addObserver(observer) {
    if (this.observers.indexOf(observer) === -1) {
      this.observers.push(observer);
      this.clearGcTimeout();
      this.cache.notify({
        type: "observerAdded",
        query: this,
        observer
      });
    }
  };
  _proto.removeObserver = function removeObserver(observer) {
    if (this.observers.indexOf(observer) !== -1) {
      this.observers = this.observers.filter(function(x2) {
        return x2 !== observer;
      });
      if (!this.observers.length) {
        if (this.retryer) {
          if (this.retryer.isTransportCancelable || this.abortSignalConsumed) {
            this.retryer.cancel({
              revert: true
            });
          } else {
            this.retryer.cancelRetry();
          }
        }
        if (this.cacheTime) {
          this.scheduleGc();
        } else {
          this.cache.remove(this);
        }
      }
      this.cache.notify({
        type: "observerRemoved",
        query: this,
        observer
      });
    }
  };
  _proto.getObserversCount = function getObserversCount() {
    return this.observers.length;
  };
  _proto.invalidate = function invalidate() {
    if (!this.state.isInvalidated) {
      this.dispatch({
        type: "invalidate"
      });
    }
  };
  _proto.fetch = function fetch2(options, fetchOptions) {
    var _this2 = this, _this$options$behavio, _context$fetchOptions, _abortController$abor;
    if (this.state.isFetching) {
      if (this.state.dataUpdatedAt && (fetchOptions == null ? void 0 : fetchOptions.cancelRefetch)) {
        this.cancel({
          silent: true
        });
      } else if (this.promise) {
        return this.promise;
      }
    }
    if (options) {
      this.setOptions(options);
    }
    if (!this.options.queryFn) {
      var observer = this.observers.find(function(x2) {
        return x2.options.queryFn;
      });
      if (observer) {
        this.setOptions(observer.options);
      }
    }
    var queryKey = ensureQueryKeyArray(this.queryKey);
    var abortController = getAbortController();
    var queryFnContext = {
      queryKey,
      pageParam: void 0,
      meta: this.meta
    };
    Object.defineProperty(queryFnContext, "signal", {
      enumerable: true,
      get: function get() {
        if (abortController) {
          _this2.abortSignalConsumed = true;
          return abortController.signal;
        }
        return void 0;
      }
    });
    var fetchFn = function fetchFn2() {
      if (!_this2.options.queryFn) {
        return Promise.reject("Missing queryFn");
      }
      _this2.abortSignalConsumed = false;
      return _this2.options.queryFn(queryFnContext);
    };
    var context = {
      fetchOptions,
      options: this.options,
      queryKey,
      state: this.state,
      fetchFn,
      meta: this.meta
    };
    if ((_this$options$behavio = this.options.behavior) == null ? void 0 : _this$options$behavio.onFetch) {
      var _this$options$behavio2;
      (_this$options$behavio2 = this.options.behavior) == null ? void 0 : _this$options$behavio2.onFetch(context);
    }
    this.revertState = this.state;
    if (!this.state.isFetching || this.state.fetchMeta !== ((_context$fetchOptions = context.fetchOptions) == null ? void 0 : _context$fetchOptions.meta)) {
      var _context$fetchOptions2;
      this.dispatch({
        type: "fetch",
        meta: (_context$fetchOptions2 = context.fetchOptions) == null ? void 0 : _context$fetchOptions2.meta
      });
    }
    this.retryer = new Retryer({
      fn: context.fetchFn,
      abort: abortController == null ? void 0 : (_abortController$abor = abortController.abort) == null ? void 0 : _abortController$abor.bind(abortController),
      onSuccess: function onSuccess(data) {
        _this2.setData(data);
        _this2.cache.config.onSuccess == null ? void 0 : _this2.cache.config.onSuccess(data, _this2);
        if (_this2.cacheTime === 0) {
          _this2.optionalRemove();
        }
      },
      onError: function onError(error) {
        if (!(isCancelledError(error) && error.silent)) {
          _this2.dispatch({
            type: "error",
            error
          });
        }
        if (!isCancelledError(error)) {
          _this2.cache.config.onError == null ? void 0 : _this2.cache.config.onError(error, _this2);
          getLogger().error(error);
        }
        if (_this2.cacheTime === 0) {
          _this2.optionalRemove();
        }
      },
      onFail: function onFail() {
        _this2.dispatch({
          type: "failed"
        });
      },
      onPause: function onPause() {
        _this2.dispatch({
          type: "pause"
        });
      },
      onContinue: function onContinue() {
        _this2.dispatch({
          type: "continue"
        });
      },
      retry: context.options.retry,
      retryDelay: context.options.retryDelay
    });
    this.promise = this.retryer.promise;
    return this.promise;
  };
  _proto.dispatch = function dispatch(action) {
    var _this3 = this;
    this.state = this.reducer(this.state, action);
    notifyManager.batch(function() {
      _this3.observers.forEach(function(observer) {
        observer.onQueryUpdate(action);
      });
      _this3.cache.notify({
        query: _this3,
        type: "queryUpdated",
        action
      });
    });
  };
  _proto.getDefaultState = function getDefaultState2(options) {
    var data = typeof options.initialData === "function" ? options.initialData() : options.initialData;
    var hasInitialData = typeof options.initialData !== "undefined";
    var initialDataUpdatedAt = hasInitialData ? typeof options.initialDataUpdatedAt === "function" ? options.initialDataUpdatedAt() : options.initialDataUpdatedAt : 0;
    var hasData = typeof data !== "undefined";
    return {
      data,
      dataUpdateCount: 0,
      dataUpdatedAt: hasData ? initialDataUpdatedAt != null ? initialDataUpdatedAt : Date.now() : 0,
      error: null,
      errorUpdateCount: 0,
      errorUpdatedAt: 0,
      fetchFailureCount: 0,
      fetchMeta: null,
      isFetching: false,
      isInvalidated: false,
      isPaused: false,
      status: hasData ? "success" : "idle"
    };
  };
  _proto.reducer = function reducer2(state, action) {
    var _action$meta, _action$dataUpdatedAt;
    switch (action.type) {
      case "failed":
        return _extends({}, state, {
          fetchFailureCount: state.fetchFailureCount + 1
        });
      case "pause":
        return _extends({}, state, {
          isPaused: true
        });
      case "continue":
        return _extends({}, state, {
          isPaused: false
        });
      case "fetch":
        return _extends({}, state, {
          fetchFailureCount: 0,
          fetchMeta: (_action$meta = action.meta) != null ? _action$meta : null,
          isFetching: true,
          isPaused: false,
          status: !state.dataUpdatedAt ? "loading" : state.status
        });
      case "success":
        return _extends({}, state, {
          data: action.data,
          dataUpdateCount: state.dataUpdateCount + 1,
          dataUpdatedAt: (_action$dataUpdatedAt = action.dataUpdatedAt) != null ? _action$dataUpdatedAt : Date.now(),
          error: null,
          fetchFailureCount: 0,
          isFetching: false,
          isInvalidated: false,
          isPaused: false,
          status: "success"
        });
      case "error":
        var error = action.error;
        if (isCancelledError(error) && error.revert && this.revertState) {
          return _extends({}, this.revertState);
        }
        return _extends({}, state, {
          error,
          errorUpdateCount: state.errorUpdateCount + 1,
          errorUpdatedAt: Date.now(),
          fetchFailureCount: state.fetchFailureCount + 1,
          isFetching: false,
          isPaused: false,
          status: "error"
        });
      case "invalidate":
        return _extends({}, state, {
          isInvalidated: true
        });
      case "setState":
        return _extends({}, state, action.state);
      default:
        return state;
    }
  };
  return Query2;
}();
var QueryCache = /* @__PURE__ */ function(_Subscribable) {
  _inheritsLoose(QueryCache2, _Subscribable);
  function QueryCache2(config) {
    var _this;
    _this = _Subscribable.call(this) || this;
    _this.config = config || {};
    _this.queries = [];
    _this.queriesMap = {};
    return _this;
  }
  var _proto = QueryCache2.prototype;
  _proto.build = function build(client, options, state) {
    var _options$queryHash;
    var queryKey = options.queryKey;
    var queryHash = (_options$queryHash = options.queryHash) != null ? _options$queryHash : hashQueryKeyByOptions(queryKey, options);
    var query = this.get(queryHash);
    if (!query) {
      query = new Query({
        cache: this,
        queryKey,
        queryHash,
        options: client.defaultQueryOptions(options),
        state,
        defaultOptions: client.getQueryDefaults(queryKey),
        meta: options.meta
      });
      this.add(query);
    }
    return query;
  };
  _proto.add = function add(query) {
    if (!this.queriesMap[query.queryHash]) {
      this.queriesMap[query.queryHash] = query;
      this.queries.push(query);
      this.notify({
        type: "queryAdded",
        query
      });
    }
  };
  _proto.remove = function remove(query) {
    var queryInMap = this.queriesMap[query.queryHash];
    if (queryInMap) {
      query.destroy();
      this.queries = this.queries.filter(function(x2) {
        return x2 !== query;
      });
      if (queryInMap === query) {
        delete this.queriesMap[query.queryHash];
      }
      this.notify({
        type: "queryRemoved",
        query
      });
    }
  };
  _proto.clear = function clear() {
    var _this2 = this;
    notifyManager.batch(function() {
      _this2.queries.forEach(function(query) {
        _this2.remove(query);
      });
    });
  };
  _proto.get = function get(queryHash) {
    return this.queriesMap[queryHash];
  };
  _proto.getAll = function getAll() {
    return this.queries;
  };
  _proto.find = function find(arg1, arg2) {
    var _parseFilterArgs = parseFilterArgs(arg1, arg2), filters = _parseFilterArgs[0];
    if (typeof filters.exact === "undefined") {
      filters.exact = true;
    }
    return this.queries.find(function(query) {
      return matchQuery(filters, query);
    });
  };
  _proto.findAll = function findAll(arg1, arg2) {
    var _parseFilterArgs2 = parseFilterArgs(arg1, arg2), filters = _parseFilterArgs2[0];
    return filters ? this.queries.filter(function(query) {
      return matchQuery(filters, query);
    }) : this.queries;
  };
  _proto.notify = function notify(event) {
    var _this3 = this;
    notifyManager.batch(function() {
      _this3.listeners.forEach(function(listener) {
        listener(event);
      });
    });
  };
  _proto.onFocus = function onFocus() {
    var _this4 = this;
    notifyManager.batch(function() {
      _this4.queries.forEach(function(query) {
        query.onFocus();
      });
    });
  };
  _proto.onOnline = function onOnline() {
    var _this5 = this;
    notifyManager.batch(function() {
      _this5.queries.forEach(function(query) {
        query.onOnline();
      });
    });
  };
  return QueryCache2;
}(Subscribable);
var Mutation = /* @__PURE__ */ function() {
  function Mutation2(config) {
    this.options = _extends({}, config.defaultOptions, config.options);
    this.mutationId = config.mutationId;
    this.mutationCache = config.mutationCache;
    this.observers = [];
    this.state = config.state || getDefaultState();
  }
  var _proto = Mutation2.prototype;
  _proto.setState = function setState(state) {
    this.dispatch({
      type: "setState",
      state
    });
  };
  _proto.addObserver = function addObserver(observer) {
    if (this.observers.indexOf(observer) === -1) {
      this.observers.push(observer);
    }
  };
  _proto.removeObserver = function removeObserver(observer) {
    this.observers = this.observers.filter(function(x2) {
      return x2 !== observer;
    });
  };
  _proto.cancel = function cancel() {
    if (this.retryer) {
      this.retryer.cancel();
      return this.retryer.promise.then(noop).catch(noop);
    }
    return Promise.resolve();
  };
  _proto.continue = function _continue() {
    if (this.retryer) {
      this.retryer.continue();
      return this.retryer.promise;
    }
    return this.execute();
  };
  _proto.execute = function execute() {
    var _this = this;
    var data;
    var restored = this.state.status === "loading";
    var promise = Promise.resolve();
    if (!restored) {
      this.dispatch({
        type: "loading",
        variables: this.options.variables
      });
      promise = promise.then(function() {
        return _this.options.onMutate == null ? void 0 : _this.options.onMutate(_this.state.variables);
      }).then(function(context) {
        if (context !== _this.state.context) {
          _this.dispatch({
            type: "loading",
            context,
            variables: _this.state.variables
          });
        }
      });
    }
    return promise.then(function() {
      return _this.executeMutation();
    }).then(function(result) {
      data = result;
      _this.mutationCache.config.onSuccess == null ? void 0 : _this.mutationCache.config.onSuccess(data, _this.state.variables, _this.state.context, _this);
    }).then(function() {
      return _this.options.onSuccess == null ? void 0 : _this.options.onSuccess(data, _this.state.variables, _this.state.context);
    }).then(function() {
      return _this.options.onSettled == null ? void 0 : _this.options.onSettled(data, null, _this.state.variables, _this.state.context);
    }).then(function() {
      _this.dispatch({
        type: "success",
        data
      });
      return data;
    }).catch(function(error) {
      _this.mutationCache.config.onError == null ? void 0 : _this.mutationCache.config.onError(error, _this.state.variables, _this.state.context, _this);
      getLogger().error(error);
      return Promise.resolve().then(function() {
        return _this.options.onError == null ? void 0 : _this.options.onError(error, _this.state.variables, _this.state.context);
      }).then(function() {
        return _this.options.onSettled == null ? void 0 : _this.options.onSettled(void 0, error, _this.state.variables, _this.state.context);
      }).then(function() {
        _this.dispatch({
          type: "error",
          error
        });
        throw error;
      });
    });
  };
  _proto.executeMutation = function executeMutation() {
    var _this2 = this, _this$options$retry;
    this.retryer = new Retryer({
      fn: function fn() {
        if (!_this2.options.mutationFn) {
          return Promise.reject("No mutationFn found");
        }
        return _this2.options.mutationFn(_this2.state.variables);
      },
      onFail: function onFail() {
        _this2.dispatch({
          type: "failed"
        });
      },
      onPause: function onPause() {
        _this2.dispatch({
          type: "pause"
        });
      },
      onContinue: function onContinue() {
        _this2.dispatch({
          type: "continue"
        });
      },
      retry: (_this$options$retry = this.options.retry) != null ? _this$options$retry : 0,
      retryDelay: this.options.retryDelay
    });
    return this.retryer.promise;
  };
  _proto.dispatch = function dispatch(action) {
    var _this3 = this;
    this.state = reducer(this.state, action);
    notifyManager.batch(function() {
      _this3.observers.forEach(function(observer) {
        observer.onMutationUpdate(action);
      });
      _this3.mutationCache.notify(_this3);
    });
  };
  return Mutation2;
}();
function getDefaultState() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    isPaused: false,
    status: "idle",
    variables: void 0
  };
}
function reducer(state, action) {
  switch (action.type) {
    case "failed":
      return _extends({}, state, {
        failureCount: state.failureCount + 1
      });
    case "pause":
      return _extends({}, state, {
        isPaused: true
      });
    case "continue":
      return _extends({}, state, {
        isPaused: false
      });
    case "loading":
      return _extends({}, state, {
        context: action.context,
        data: void 0,
        error: null,
        isPaused: false,
        status: "loading",
        variables: action.variables
      });
    case "success":
      return _extends({}, state, {
        data: action.data,
        error: null,
        status: "success",
        isPaused: false
      });
    case "error":
      return _extends({}, state, {
        data: void 0,
        error: action.error,
        failureCount: state.failureCount + 1,
        isPaused: false,
        status: "error"
      });
    case "setState":
      return _extends({}, state, action.state);
    default:
      return state;
  }
}
var MutationCache = /* @__PURE__ */ function(_Subscribable) {
  _inheritsLoose(MutationCache2, _Subscribable);
  function MutationCache2(config) {
    var _this;
    _this = _Subscribable.call(this) || this;
    _this.config = config || {};
    _this.mutations = [];
    _this.mutationId = 0;
    return _this;
  }
  var _proto = MutationCache2.prototype;
  _proto.build = function build(client, options, state) {
    var mutation = new Mutation({
      mutationCache: this,
      mutationId: ++this.mutationId,
      options: client.defaultMutationOptions(options),
      state,
      defaultOptions: options.mutationKey ? client.getMutationDefaults(options.mutationKey) : void 0
    });
    this.add(mutation);
    return mutation;
  };
  _proto.add = function add(mutation) {
    this.mutations.push(mutation);
    this.notify(mutation);
  };
  _proto.remove = function remove(mutation) {
    this.mutations = this.mutations.filter(function(x2) {
      return x2 !== mutation;
    });
    mutation.cancel();
    this.notify(mutation);
  };
  _proto.clear = function clear() {
    var _this2 = this;
    notifyManager.batch(function() {
      _this2.mutations.forEach(function(mutation) {
        _this2.remove(mutation);
      });
    });
  };
  _proto.getAll = function getAll() {
    return this.mutations;
  };
  _proto.find = function find(filters) {
    if (typeof filters.exact === "undefined") {
      filters.exact = true;
    }
    return this.mutations.find(function(mutation) {
      return matchMutation(filters, mutation);
    });
  };
  _proto.findAll = function findAll(filters) {
    return this.mutations.filter(function(mutation) {
      return matchMutation(filters, mutation);
    });
  };
  _proto.notify = function notify(mutation) {
    var _this3 = this;
    notifyManager.batch(function() {
      _this3.listeners.forEach(function(listener) {
        listener(mutation);
      });
    });
  };
  _proto.onFocus = function onFocus() {
    this.resumePausedMutations();
  };
  _proto.onOnline = function onOnline() {
    this.resumePausedMutations();
  };
  _proto.resumePausedMutations = function resumePausedMutations() {
    var pausedMutations = this.mutations.filter(function(x2) {
      return x2.state.isPaused;
    });
    return notifyManager.batch(function() {
      return pausedMutations.reduce(function(promise, mutation) {
        return promise.then(function() {
          return mutation.continue().catch(noop);
        });
      }, Promise.resolve());
    });
  };
  return MutationCache2;
}(Subscribable);
function infiniteQueryBehavior() {
  return {
    onFetch: function onFetch(context) {
      context.fetchFn = function() {
        var _context$fetchOptions, _context$fetchOptions2, _context$fetchOptions3, _context$fetchOptions4, _context$state$data, _context$state$data2;
        var refetchPage = (_context$fetchOptions = context.fetchOptions) == null ? void 0 : (_context$fetchOptions2 = _context$fetchOptions.meta) == null ? void 0 : _context$fetchOptions2.refetchPage;
        var fetchMore = (_context$fetchOptions3 = context.fetchOptions) == null ? void 0 : (_context$fetchOptions4 = _context$fetchOptions3.meta) == null ? void 0 : _context$fetchOptions4.fetchMore;
        var pageParam = fetchMore == null ? void 0 : fetchMore.pageParam;
        var isFetchingNextPage = (fetchMore == null ? void 0 : fetchMore.direction) === "forward";
        var isFetchingPreviousPage = (fetchMore == null ? void 0 : fetchMore.direction) === "backward";
        var oldPages = ((_context$state$data = context.state.data) == null ? void 0 : _context$state$data.pages) || [];
        var oldPageParams = ((_context$state$data2 = context.state.data) == null ? void 0 : _context$state$data2.pageParams) || [];
        var abortController = getAbortController();
        var abortSignal = abortController == null ? void 0 : abortController.signal;
        var newPageParams = oldPageParams;
        var cancelled = false;
        var queryFn = context.options.queryFn || function() {
          return Promise.reject("Missing queryFn");
        };
        var buildNewPages = function buildNewPages2(pages, param2, page, previous) {
          newPageParams = previous ? [param2].concat(newPageParams) : [].concat(newPageParams, [param2]);
          return previous ? [page].concat(pages) : [].concat(pages, [page]);
        };
        var fetchPage = function fetchPage2(pages, manual2, param2, previous) {
          if (cancelled) {
            return Promise.reject("Cancelled");
          }
          if (typeof param2 === "undefined" && !manual2 && pages.length) {
            return Promise.resolve(pages);
          }
          var queryFnContext = {
            queryKey: context.queryKey,
            signal: abortSignal,
            pageParam: param2,
            meta: context.meta
          };
          var queryFnResult = queryFn(queryFnContext);
          var promise2 = Promise.resolve(queryFnResult).then(function(page) {
            return buildNewPages(pages, param2, page, previous);
          });
          if (isCancelable(queryFnResult)) {
            var promiseAsAny = promise2;
            promiseAsAny.cancel = queryFnResult.cancel;
          }
          return promise2;
        };
        var promise;
        if (!oldPages.length) {
          promise = fetchPage([]);
        } else if (isFetchingNextPage) {
          var manual = typeof pageParam !== "undefined";
          var param = manual ? pageParam : getNextPageParam(context.options, oldPages);
          promise = fetchPage(oldPages, manual, param);
        } else if (isFetchingPreviousPage) {
          var _manual = typeof pageParam !== "undefined";
          var _param = _manual ? pageParam : getPreviousPageParam(context.options, oldPages);
          promise = fetchPage(oldPages, _manual, _param, true);
        } else {
          (function() {
            newPageParams = [];
            var manual2 = typeof context.options.getNextPageParam === "undefined";
            var shouldFetchFirstPage = refetchPage && oldPages[0] ? refetchPage(oldPages[0], 0, oldPages) : true;
            promise = shouldFetchFirstPage ? fetchPage([], manual2, oldPageParams[0]) : Promise.resolve(buildNewPages([], oldPageParams[0], oldPages[0]));
            var _loop = function _loop2(i2) {
              promise = promise.then(function(pages) {
                var shouldFetchNextPage = refetchPage && oldPages[i2] ? refetchPage(oldPages[i2], i2, oldPages) : true;
                if (shouldFetchNextPage) {
                  var _param2 = manual2 ? oldPageParams[i2] : getNextPageParam(context.options, pages);
                  return fetchPage(pages, manual2, _param2);
                }
                return Promise.resolve(buildNewPages(pages, oldPageParams[i2], oldPages[i2]));
              });
            };
            for (var i = 1; i < oldPages.length; i++) {
              _loop(i);
            }
          })();
        }
        var finalPromise = promise.then(function(pages) {
          return {
            pages,
            pageParams: newPageParams
          };
        });
        var finalPromiseAsAny = finalPromise;
        finalPromiseAsAny.cancel = function() {
          cancelled = true;
          abortController == null ? void 0 : abortController.abort();
          if (isCancelable(promise)) {
            promise.cancel();
          }
        };
        return finalPromise;
      };
    }
  };
}
function getNextPageParam(options, pages) {
  return options.getNextPageParam == null ? void 0 : options.getNextPageParam(pages[pages.length - 1], pages);
}
function getPreviousPageParam(options, pages) {
  return options.getPreviousPageParam == null ? void 0 : options.getPreviousPageParam(pages[0], pages);
}
var QueryClient = /* @__PURE__ */ function() {
  function QueryClient2(config) {
    if (config === void 0) {
      config = {};
    }
    this.queryCache = config.queryCache || new QueryCache();
    this.mutationCache = config.mutationCache || new MutationCache();
    this.defaultOptions = config.defaultOptions || {};
    this.queryDefaults = [];
    this.mutationDefaults = [];
  }
  var _proto = QueryClient2.prototype;
  _proto.mount = function mount() {
    var _this = this;
    this.unsubscribeFocus = focusManager.subscribe(function() {
      if (focusManager.isFocused() && onlineManager.isOnline()) {
        _this.mutationCache.onFocus();
        _this.queryCache.onFocus();
      }
    });
    this.unsubscribeOnline = onlineManager.subscribe(function() {
      if (focusManager.isFocused() && onlineManager.isOnline()) {
        _this.mutationCache.onOnline();
        _this.queryCache.onOnline();
      }
    });
  };
  _proto.unmount = function unmount() {
    var _this$unsubscribeFocu, _this$unsubscribeOnli;
    (_this$unsubscribeFocu = this.unsubscribeFocus) == null ? void 0 : _this$unsubscribeFocu.call(this);
    (_this$unsubscribeOnli = this.unsubscribeOnline) == null ? void 0 : _this$unsubscribeOnli.call(this);
  };
  _proto.isFetching = function isFetching(arg1, arg2) {
    var _parseFilterArgs = parseFilterArgs(arg1, arg2), filters = _parseFilterArgs[0];
    filters.fetching = true;
    return this.queryCache.findAll(filters).length;
  };
  _proto.isMutating = function isMutating(filters) {
    return this.mutationCache.findAll(_extends({}, filters, {
      fetching: true
    })).length;
  };
  _proto.getQueryData = function getQueryData(queryKey, filters) {
    var _this$queryCache$find;
    return (_this$queryCache$find = this.queryCache.find(queryKey, filters)) == null ? void 0 : _this$queryCache$find.state.data;
  };
  _proto.getQueriesData = function getQueriesData(queryKeyOrFilters) {
    return this.getQueryCache().findAll(queryKeyOrFilters).map(function(_ref) {
      var queryKey = _ref.queryKey, state = _ref.state;
      var data = state.data;
      return [queryKey, data];
    });
  };
  _proto.setQueryData = function setQueryData(queryKey, updater, options) {
    var parsedOptions = parseQueryArgs(queryKey);
    var defaultedOptions = this.defaultQueryOptions(parsedOptions);
    return this.queryCache.build(this, defaultedOptions).setData(updater, options);
  };
  _proto.setQueriesData = function setQueriesData(queryKeyOrFilters, updater, options) {
    var _this2 = this;
    return notifyManager.batch(function() {
      return _this2.getQueryCache().findAll(queryKeyOrFilters).map(function(_ref2) {
        var queryKey = _ref2.queryKey;
        return [queryKey, _this2.setQueryData(queryKey, updater, options)];
      });
    });
  };
  _proto.getQueryState = function getQueryState(queryKey, filters) {
    var _this$queryCache$find2;
    return (_this$queryCache$find2 = this.queryCache.find(queryKey, filters)) == null ? void 0 : _this$queryCache$find2.state;
  };
  _proto.removeQueries = function removeQueries(arg1, arg2) {
    var _parseFilterArgs2 = parseFilterArgs(arg1, arg2), filters = _parseFilterArgs2[0];
    var queryCache = this.queryCache;
    notifyManager.batch(function() {
      queryCache.findAll(filters).forEach(function(query) {
        queryCache.remove(query);
      });
    });
  };
  _proto.resetQueries = function resetQueries(arg1, arg2, arg3) {
    var _this3 = this;
    var _parseFilterArgs3 = parseFilterArgs(arg1, arg2, arg3), filters = _parseFilterArgs3[0], options = _parseFilterArgs3[1];
    var queryCache = this.queryCache;
    var refetchFilters = _extends({}, filters, {
      active: true
    });
    return notifyManager.batch(function() {
      queryCache.findAll(filters).forEach(function(query) {
        query.reset();
      });
      return _this3.refetchQueries(refetchFilters, options);
    });
  };
  _proto.cancelQueries = function cancelQueries(arg1, arg2, arg3) {
    var _this4 = this;
    var _parseFilterArgs4 = parseFilterArgs(arg1, arg2, arg3), filters = _parseFilterArgs4[0], _parseFilterArgs4$ = _parseFilterArgs4[1], cancelOptions = _parseFilterArgs4$ === void 0 ? {} : _parseFilterArgs4$;
    if (typeof cancelOptions.revert === "undefined") {
      cancelOptions.revert = true;
    }
    var promises = notifyManager.batch(function() {
      return _this4.queryCache.findAll(filters).map(function(query) {
        return query.cancel(cancelOptions);
      });
    });
    return Promise.all(promises).then(noop).catch(noop);
  };
  _proto.invalidateQueries = function invalidateQueries(arg1, arg2, arg3) {
    var _ref3, _filters$refetchActiv, _filters$refetchInact, _this5 = this;
    var _parseFilterArgs5 = parseFilterArgs(arg1, arg2, arg3), filters = _parseFilterArgs5[0], options = _parseFilterArgs5[1];
    var refetchFilters = _extends({}, filters, {
      active: (_ref3 = (_filters$refetchActiv = filters.refetchActive) != null ? _filters$refetchActiv : filters.active) != null ? _ref3 : true,
      inactive: (_filters$refetchInact = filters.refetchInactive) != null ? _filters$refetchInact : false
    });
    return notifyManager.batch(function() {
      _this5.queryCache.findAll(filters).forEach(function(query) {
        query.invalidate();
      });
      return _this5.refetchQueries(refetchFilters, options);
    });
  };
  _proto.refetchQueries = function refetchQueries(arg1, arg2, arg3) {
    var _this6 = this;
    var _parseFilterArgs6 = parseFilterArgs(arg1, arg2, arg3), filters = _parseFilterArgs6[0], options = _parseFilterArgs6[1];
    var promises = notifyManager.batch(function() {
      return _this6.queryCache.findAll(filters).map(function(query) {
        return query.fetch(void 0, _extends({}, options, {
          meta: {
            refetchPage: filters == null ? void 0 : filters.refetchPage
          }
        }));
      });
    });
    var promise = Promise.all(promises).then(noop);
    if (!(options == null ? void 0 : options.throwOnError)) {
      promise = promise.catch(noop);
    }
    return promise;
  };
  _proto.fetchQuery = function fetchQuery(arg1, arg2, arg3) {
    var parsedOptions = parseQueryArgs(arg1, arg2, arg3);
    var defaultedOptions = this.defaultQueryOptions(parsedOptions);
    if (typeof defaultedOptions.retry === "undefined") {
      defaultedOptions.retry = false;
    }
    var query = this.queryCache.build(this, defaultedOptions);
    return query.isStaleByTime(defaultedOptions.staleTime) ? query.fetch(defaultedOptions) : Promise.resolve(query.state.data);
  };
  _proto.prefetchQuery = function prefetchQuery(arg1, arg2, arg3) {
    return this.fetchQuery(arg1, arg2, arg3).then(noop).catch(noop);
  };
  _proto.fetchInfiniteQuery = function fetchInfiniteQuery(arg1, arg2, arg3) {
    var parsedOptions = parseQueryArgs(arg1, arg2, arg3);
    parsedOptions.behavior = infiniteQueryBehavior();
    return this.fetchQuery(parsedOptions);
  };
  _proto.prefetchInfiniteQuery = function prefetchInfiniteQuery(arg1, arg2, arg3) {
    return this.fetchInfiniteQuery(arg1, arg2, arg3).then(noop).catch(noop);
  };
  _proto.cancelMutations = function cancelMutations() {
    var _this7 = this;
    var promises = notifyManager.batch(function() {
      return _this7.mutationCache.getAll().map(function(mutation) {
        return mutation.cancel();
      });
    });
    return Promise.all(promises).then(noop).catch(noop);
  };
  _proto.resumePausedMutations = function resumePausedMutations() {
    return this.getMutationCache().resumePausedMutations();
  };
  _proto.executeMutation = function executeMutation(options) {
    return this.mutationCache.build(this, options).execute();
  };
  _proto.getQueryCache = function getQueryCache() {
    return this.queryCache;
  };
  _proto.getMutationCache = function getMutationCache() {
    return this.mutationCache;
  };
  _proto.getDefaultOptions = function getDefaultOptions() {
    return this.defaultOptions;
  };
  _proto.setDefaultOptions = function setDefaultOptions(options) {
    this.defaultOptions = options;
  };
  _proto.setQueryDefaults = function setQueryDefaults(queryKey, options) {
    var result = this.queryDefaults.find(function(x2) {
      return hashQueryKey(queryKey) === hashQueryKey(x2.queryKey);
    });
    if (result) {
      result.defaultOptions = options;
    } else {
      this.queryDefaults.push({
        queryKey,
        defaultOptions: options
      });
    }
  };
  _proto.getQueryDefaults = function getQueryDefaults(queryKey) {
    var _this$queryDefaults$f;
    return queryKey ? (_this$queryDefaults$f = this.queryDefaults.find(function(x2) {
      return partialMatchKey(queryKey, x2.queryKey);
    })) == null ? void 0 : _this$queryDefaults$f.defaultOptions : void 0;
  };
  _proto.setMutationDefaults = function setMutationDefaults(mutationKey, options) {
    var result = this.mutationDefaults.find(function(x2) {
      return hashQueryKey(mutationKey) === hashQueryKey(x2.mutationKey);
    });
    if (result) {
      result.defaultOptions = options;
    } else {
      this.mutationDefaults.push({
        mutationKey,
        defaultOptions: options
      });
    }
  };
  _proto.getMutationDefaults = function getMutationDefaults(mutationKey) {
    var _this$mutationDefault;
    return mutationKey ? (_this$mutationDefault = this.mutationDefaults.find(function(x2) {
      return partialMatchKey(mutationKey, x2.mutationKey);
    })) == null ? void 0 : _this$mutationDefault.defaultOptions : void 0;
  };
  _proto.defaultQueryOptions = function defaultQueryOptions(options) {
    if (options == null ? void 0 : options._defaulted) {
      return options;
    }
    var defaultedOptions = _extends({}, this.defaultOptions.queries, this.getQueryDefaults(options == null ? void 0 : options.queryKey), options, {
      _defaulted: true
    });
    if (!defaultedOptions.queryHash && defaultedOptions.queryKey) {
      defaultedOptions.queryHash = hashQueryKeyByOptions(defaultedOptions.queryKey, defaultedOptions);
    }
    return defaultedOptions;
  };
  _proto.defaultQueryObserverOptions = function defaultQueryObserverOptions(options) {
    return this.defaultQueryOptions(options);
  };
  _proto.defaultMutationOptions = function defaultMutationOptions(options) {
    if (options == null ? void 0 : options._defaulted) {
      return options;
    }
    return _extends({}, this.defaultOptions.mutations, this.getMutationDefaults(options == null ? void 0 : options.mutationKey), options, {
      _defaulted: true
    });
  };
  _proto.clear = function clear() {
    this.queryCache.clear();
    this.mutationCache.clear();
  };
  return QueryClient2;
}();
var QueryObserver = /* @__PURE__ */ function(_Subscribable) {
  _inheritsLoose(QueryObserver2, _Subscribable);
  function QueryObserver2(client, options) {
    var _this;
    _this = _Subscribable.call(this) || this;
    _this.client = client;
    _this.options = options;
    _this.trackedProps = [];
    _this.previousSelectError = null;
    _this.bindMethods();
    _this.setOptions(options);
    return _this;
  }
  var _proto = QueryObserver2.prototype;
  _proto.bindMethods = function bindMethods() {
    this.remove = this.remove.bind(this);
    this.refetch = this.refetch.bind(this);
  };
  _proto.onSubscribe = function onSubscribe() {
    if (this.listeners.length === 1) {
      this.currentQuery.addObserver(this);
      if (shouldFetchOnMount(this.currentQuery, this.options)) {
        this.executeFetch();
      }
      this.updateTimers();
    }
  };
  _proto.onUnsubscribe = function onUnsubscribe() {
    if (!this.listeners.length) {
      this.destroy();
    }
  };
  _proto.shouldFetchOnReconnect = function shouldFetchOnReconnect() {
    return _shouldFetchOnReconnect(this.currentQuery, this.options);
  };
  _proto.shouldFetchOnWindowFocus = function shouldFetchOnWindowFocus() {
    return _shouldFetchOnWindowFocus(this.currentQuery, this.options);
  };
  _proto.destroy = function destroy() {
    this.listeners = [];
    this.clearTimers();
    this.currentQuery.removeObserver(this);
  };
  _proto.setOptions = function setOptions(options, notifyOptions) {
    var prevOptions = this.options;
    var prevQuery = this.currentQuery;
    this.options = this.client.defaultQueryObserverOptions(options);
    if (typeof this.options.enabled !== "undefined" && typeof this.options.enabled !== "boolean") {
      throw new Error("Expected enabled to be a boolean");
    }
    if (!this.options.queryKey) {
      this.options.queryKey = prevOptions.queryKey;
    }
    this.updateQuery();
    var mounted = this.hasListeners();
    if (mounted && shouldFetchOptionally(this.currentQuery, prevQuery, this.options, prevOptions)) {
      this.executeFetch();
    }
    this.updateResult(notifyOptions);
    if (mounted && (this.currentQuery !== prevQuery || this.options.enabled !== prevOptions.enabled || this.options.staleTime !== prevOptions.staleTime)) {
      this.updateStaleTimeout();
    }
    var nextRefetchInterval = this.computeRefetchInterval();
    if (mounted && (this.currentQuery !== prevQuery || this.options.enabled !== prevOptions.enabled || nextRefetchInterval !== this.currentRefetchInterval)) {
      this.updateRefetchInterval(nextRefetchInterval);
    }
  };
  _proto.getOptimisticResult = function getOptimisticResult(options) {
    var defaultedOptions = this.client.defaultQueryObserverOptions(options);
    var query = this.client.getQueryCache().build(this.client, defaultedOptions);
    return this.createResult(query, defaultedOptions);
  };
  _proto.getCurrentResult = function getCurrentResult() {
    return this.currentResult;
  };
  _proto.trackResult = function trackResult(result) {
    var _this2 = this;
    var trackedResult = {};
    Object.keys(result).forEach(function(key) {
      Object.defineProperty(trackedResult, key, {
        configurable: false,
        enumerable: true,
        get: function get() {
          var typedKey = key;
          if (!_this2.trackedProps.includes(typedKey)) {
            _this2.trackedProps.push(typedKey);
          }
          return result[typedKey];
        }
      });
    });
    return trackedResult;
  };
  _proto.getNextResult = function getNextResult(options) {
    var _this3 = this;
    return new Promise(function(resolve, reject) {
      var unsubscribe = _this3.subscribe(function(result) {
        if (!result.isFetching) {
          unsubscribe();
          if (result.isError && (options == null ? void 0 : options.throwOnError)) {
            reject(result.error);
          } else {
            resolve(result);
          }
        }
      });
    });
  };
  _proto.getCurrentQuery = function getCurrentQuery() {
    return this.currentQuery;
  };
  _proto.remove = function remove() {
    this.client.getQueryCache().remove(this.currentQuery);
  };
  _proto.refetch = function refetch(options) {
    return this.fetch(_extends({}, options, {
      meta: {
        refetchPage: options == null ? void 0 : options.refetchPage
      }
    }));
  };
  _proto.fetchOptimistic = function fetchOptimistic(options) {
    var _this4 = this;
    var defaultedOptions = this.client.defaultQueryObserverOptions(options);
    var query = this.client.getQueryCache().build(this.client, defaultedOptions);
    return query.fetch().then(function() {
      return _this4.createResult(query, defaultedOptions);
    });
  };
  _proto.fetch = function fetch2(fetchOptions) {
    var _this5 = this;
    return this.executeFetch(fetchOptions).then(function() {
      _this5.updateResult();
      return _this5.currentResult;
    });
  };
  _proto.executeFetch = function executeFetch(fetchOptions) {
    this.updateQuery();
    var promise = this.currentQuery.fetch(this.options, fetchOptions);
    if (!(fetchOptions == null ? void 0 : fetchOptions.throwOnError)) {
      promise = promise.catch(noop);
    }
    return promise;
  };
  _proto.updateStaleTimeout = function updateStaleTimeout() {
    var _this6 = this;
    this.clearStaleTimeout();
    if (isServer || this.currentResult.isStale || !isValidTimeout(this.options.staleTime)) {
      return;
    }
    var time = timeUntilStale(this.currentResult.dataUpdatedAt, this.options.staleTime);
    var timeout = time + 1;
    this.staleTimeoutId = setTimeout(function() {
      if (!_this6.currentResult.isStale) {
        _this6.updateResult();
      }
    }, timeout);
  };
  _proto.computeRefetchInterval = function computeRefetchInterval() {
    var _this$options$refetch;
    return typeof this.options.refetchInterval === "function" ? this.options.refetchInterval(this.currentResult.data, this.currentQuery) : (_this$options$refetch = this.options.refetchInterval) != null ? _this$options$refetch : false;
  };
  _proto.updateRefetchInterval = function updateRefetchInterval(nextInterval) {
    var _this7 = this;
    this.clearRefetchInterval();
    this.currentRefetchInterval = nextInterval;
    if (isServer || this.options.enabled === false || !isValidTimeout(this.currentRefetchInterval) || this.currentRefetchInterval === 0) {
      return;
    }
    this.refetchIntervalId = setInterval(function() {
      if (_this7.options.refetchIntervalInBackground || focusManager.isFocused()) {
        _this7.executeFetch();
      }
    }, this.currentRefetchInterval);
  };
  _proto.updateTimers = function updateTimers() {
    this.updateStaleTimeout();
    this.updateRefetchInterval(this.computeRefetchInterval());
  };
  _proto.clearTimers = function clearTimers() {
    this.clearStaleTimeout();
    this.clearRefetchInterval();
  };
  _proto.clearStaleTimeout = function clearStaleTimeout() {
    clearTimeout(this.staleTimeoutId);
    this.staleTimeoutId = void 0;
  };
  _proto.clearRefetchInterval = function clearRefetchInterval() {
    clearInterval(this.refetchIntervalId);
    this.refetchIntervalId = void 0;
  };
  _proto.createResult = function createResult(query, options) {
    var prevQuery = this.currentQuery;
    var prevOptions = this.options;
    var prevResult = this.currentResult;
    var prevResultState = this.currentResultState;
    var prevResultOptions = this.currentResultOptions;
    var queryChange = query !== prevQuery;
    var queryInitialState = queryChange ? query.state : this.currentQueryInitialState;
    var prevQueryResult = queryChange ? this.currentResult : this.previousQueryResult;
    var state = query.state;
    var dataUpdatedAt = state.dataUpdatedAt, error = state.error, errorUpdatedAt = state.errorUpdatedAt, isFetching = state.isFetching, status = state.status;
    var isPreviousData = false;
    var isPlaceholderData = false;
    var data;
    if (options.optimisticResults) {
      var mounted = this.hasListeners();
      var fetchOnMount = !mounted && shouldFetchOnMount(query, options);
      var fetchOptionally = mounted && shouldFetchOptionally(query, prevQuery, options, prevOptions);
      if (fetchOnMount || fetchOptionally) {
        isFetching = true;
        if (!dataUpdatedAt) {
          status = "loading";
        }
      }
    }
    if (options.keepPreviousData && !state.dataUpdateCount && (prevQueryResult == null ? void 0 : prevQueryResult.isSuccess) && status !== "error") {
      data = prevQueryResult.data;
      dataUpdatedAt = prevQueryResult.dataUpdatedAt;
      status = prevQueryResult.status;
      isPreviousData = true;
    } else if (options.select && typeof state.data !== "undefined") {
      if (prevResult && state.data === (prevResultState == null ? void 0 : prevResultState.data) && options.select === (prevResultOptions == null ? void 0 : prevResultOptions.select) && !this.previousSelectError) {
        data = prevResult.data;
      } else {
        try {
          data = options.select(state.data);
          if (options.structuralSharing !== false) {
            data = replaceEqualDeep(prevResult == null ? void 0 : prevResult.data, data);
          }
          this.previousSelectError = null;
        } catch (selectError) {
          getLogger().error(selectError);
          error = selectError;
          this.previousSelectError = selectError;
          errorUpdatedAt = Date.now();
          status = "error";
        }
      }
    } else {
      data = state.data;
    }
    if (typeof options.placeholderData !== "undefined" && typeof data === "undefined" && (status === "loading" || status === "idle")) {
      var placeholderData;
      if ((prevResult == null ? void 0 : prevResult.isPlaceholderData) && options.placeholderData === (prevResultOptions == null ? void 0 : prevResultOptions.placeholderData)) {
        placeholderData = prevResult.data;
      } else {
        placeholderData = typeof options.placeholderData === "function" ? options.placeholderData() : options.placeholderData;
        if (options.select && typeof placeholderData !== "undefined") {
          try {
            placeholderData = options.select(placeholderData);
            if (options.structuralSharing !== false) {
              placeholderData = replaceEqualDeep(prevResult == null ? void 0 : prevResult.data, placeholderData);
            }
            this.previousSelectError = null;
          } catch (selectError) {
            getLogger().error(selectError);
            error = selectError;
            this.previousSelectError = selectError;
            errorUpdatedAt = Date.now();
            status = "error";
          }
        }
      }
      if (typeof placeholderData !== "undefined") {
        status = "success";
        data = placeholderData;
        isPlaceholderData = true;
      }
    }
    var result = {
      status,
      isLoading: status === "loading",
      isSuccess: status === "success",
      isError: status === "error",
      isIdle: status === "idle",
      data,
      dataUpdatedAt,
      error,
      errorUpdatedAt,
      failureCount: state.fetchFailureCount,
      isFetched: state.dataUpdateCount > 0 || state.errorUpdateCount > 0,
      isFetchedAfterMount: state.dataUpdateCount > queryInitialState.dataUpdateCount || state.errorUpdateCount > queryInitialState.errorUpdateCount,
      isFetching,
      isRefetching: isFetching && status !== "loading",
      isLoadingError: status === "error" && state.dataUpdatedAt === 0,
      isPlaceholderData,
      isPreviousData,
      isRefetchError: status === "error" && state.dataUpdatedAt !== 0,
      isStale: isStale(query, options),
      refetch: this.refetch,
      remove: this.remove
    };
    return result;
  };
  _proto.shouldNotifyListeners = function shouldNotifyListeners(result, prevResult) {
    if (!prevResult) {
      return true;
    }
    if (result === prevResult) {
      return false;
    }
    var _this$options = this.options, notifyOnChangeProps = _this$options.notifyOnChangeProps, notifyOnChangePropsExclusions = _this$options.notifyOnChangePropsExclusions;
    if (!notifyOnChangeProps && !notifyOnChangePropsExclusions) {
      return true;
    }
    if (notifyOnChangeProps === "tracked" && !this.trackedProps.length) {
      return true;
    }
    var includedProps = notifyOnChangeProps === "tracked" ? this.trackedProps : notifyOnChangeProps;
    return Object.keys(result).some(function(key) {
      var typedKey = key;
      var changed = result[typedKey] !== prevResult[typedKey];
      var isIncluded = includedProps == null ? void 0 : includedProps.some(function(x2) {
        return x2 === key;
      });
      var isExcluded = notifyOnChangePropsExclusions == null ? void 0 : notifyOnChangePropsExclusions.some(function(x2) {
        return x2 === key;
      });
      return changed && !isExcluded && (!includedProps || isIncluded);
    });
  };
  _proto.updateResult = function updateResult(notifyOptions) {
    var prevResult = this.currentResult;
    this.currentResult = this.createResult(this.currentQuery, this.options);
    this.currentResultState = this.currentQuery.state;
    this.currentResultOptions = this.options;
    if (shallowEqualObjects(this.currentResult, prevResult)) {
      return;
    }
    var defaultNotifyOptions = {
      cache: true
    };
    if ((notifyOptions == null ? void 0 : notifyOptions.listeners) !== false && this.shouldNotifyListeners(this.currentResult, prevResult)) {
      defaultNotifyOptions.listeners = true;
    }
    this.notify(_extends({}, defaultNotifyOptions, notifyOptions));
  };
  _proto.updateQuery = function updateQuery() {
    var query = this.client.getQueryCache().build(this.client, this.options);
    if (query === this.currentQuery) {
      return;
    }
    var prevQuery = this.currentQuery;
    this.currentQuery = query;
    this.currentQueryInitialState = query.state;
    this.previousQueryResult = this.currentResult;
    if (this.hasListeners()) {
      prevQuery == null ? void 0 : prevQuery.removeObserver(this);
      query.addObserver(this);
    }
  };
  _proto.onQueryUpdate = function onQueryUpdate(action) {
    var notifyOptions = {};
    if (action.type === "success") {
      notifyOptions.onSuccess = true;
    } else if (action.type === "error" && !isCancelledError(action.error)) {
      notifyOptions.onError = true;
    }
    this.updateResult(notifyOptions);
    if (this.hasListeners()) {
      this.updateTimers();
    }
  };
  _proto.notify = function notify(notifyOptions) {
    var _this8 = this;
    notifyManager.batch(function() {
      if (notifyOptions.onSuccess) {
        _this8.options.onSuccess == null ? void 0 : _this8.options.onSuccess(_this8.currentResult.data);
        _this8.options.onSettled == null ? void 0 : _this8.options.onSettled(_this8.currentResult.data, null);
      } else if (notifyOptions.onError) {
        _this8.options.onError == null ? void 0 : _this8.options.onError(_this8.currentResult.error);
        _this8.options.onSettled == null ? void 0 : _this8.options.onSettled(void 0, _this8.currentResult.error);
      }
      if (notifyOptions.listeners) {
        _this8.listeners.forEach(function(listener) {
          listener(_this8.currentResult);
        });
      }
      if (notifyOptions.cache) {
        _this8.client.getQueryCache().notify({
          query: _this8.currentQuery,
          type: "observerResultsUpdated"
        });
      }
    });
  };
  return QueryObserver2;
}(Subscribable);
function shouldLoadOnMount(query, options) {
  return options.enabled !== false && !query.state.dataUpdatedAt && !(query.state.status === "error" && options.retryOnMount === false);
}
function shouldRefetchOnMount(query, options) {
  return options.enabled !== false && query.state.dataUpdatedAt > 0 && (options.refetchOnMount === "always" || options.refetchOnMount !== false && isStale(query, options));
}
function shouldFetchOnMount(query, options) {
  return shouldLoadOnMount(query, options) || shouldRefetchOnMount(query, options);
}
function _shouldFetchOnReconnect(query, options) {
  return options.enabled !== false && (options.refetchOnReconnect === "always" || options.refetchOnReconnect !== false && isStale(query, options));
}
function _shouldFetchOnWindowFocus(query, options) {
  return options.enabled !== false && (options.refetchOnWindowFocus === "always" || options.refetchOnWindowFocus !== false && isStale(query, options));
}
function shouldFetchOptionally(query, prevQuery, options, prevOptions) {
  return options.enabled !== false && (query !== prevQuery || prevOptions.enabled === false) && (!options.suspense || query.state.status !== "error" || prevOptions.enabled === false) && isStale(query, options);
}
function isStale(query, options) {
  return query.isStaleByTime(options.staleTime);
}
function dehydrateMutation(mutation) {
  return {
    mutationKey: mutation.options.mutationKey,
    state: mutation.state
  };
}
function dehydrateQuery(query) {
  return {
    state: query.state,
    queryKey: query.queryKey,
    queryHash: query.queryHash
  };
}
function defaultShouldDehydrateMutation(mutation) {
  return mutation.state.isPaused;
}
function defaultShouldDehydrateQuery(query) {
  return query.state.status === "success";
}
function dehydrate(client, options) {
  var _options, _options2;
  options = options || {};
  var mutations = [];
  var queries = [];
  if (((_options = options) == null ? void 0 : _options.dehydrateMutations) !== false) {
    var shouldDehydrateMutation = options.shouldDehydrateMutation || defaultShouldDehydrateMutation;
    client.getMutationCache().getAll().forEach(function(mutation) {
      if (shouldDehydrateMutation(mutation)) {
        mutations.push(dehydrateMutation(mutation));
      }
    });
  }
  if (((_options2 = options) == null ? void 0 : _options2.dehydrateQueries) !== false) {
    var shouldDehydrateQuery = options.shouldDehydrateQuery || defaultShouldDehydrateQuery;
    client.getQueryCache().getAll().forEach(function(query) {
      if (shouldDehydrateQuery(query)) {
        queries.push(dehydrateQuery(query));
      }
    });
  }
  return {
    mutations,
    queries
  };
}
function hydrate(client, dehydratedState, options) {
  if (typeof dehydratedState !== "object" || dehydratedState === null) {
    return;
  }
  var mutationCache = client.getMutationCache();
  var queryCache = client.getQueryCache();
  var mutations = dehydratedState.mutations || [];
  var queries = dehydratedState.queries || [];
  mutations.forEach(function(dehydratedMutation) {
    var _options$defaultOptio;
    mutationCache.build(client, _extends({}, options == null ? void 0 : (_options$defaultOptio = options.defaultOptions) == null ? void 0 : _options$defaultOptio.mutations, {
      mutationKey: dehydratedMutation.mutationKey
    }), dehydratedMutation.state);
  });
  queries.forEach(function(dehydratedQuery) {
    var _options$defaultOptio2;
    var query = queryCache.get(dehydratedQuery.queryHash);
    if (query) {
      if (query.state.dataUpdatedAt < dehydratedQuery.state.dataUpdatedAt) {
        query.setState(dehydratedQuery.state);
      }
      return;
    }
    queryCache.build(client, _extends({}, options == null ? void 0 : (_options$defaultOptio2 = options.defaultOptions) == null ? void 0 : _options$defaultOptio2.queries, {
      queryKey: dehydratedQuery.queryKey,
      queryHash: dehydratedQuery.queryHash
    }), dehydratedQuery.state);
  });
}
var unstable_batchedUpdates = ReactDOM__default["default"].unstable_batchedUpdates;
notifyManager.setBatchNotifyFunction(unstable_batchedUpdates);
var logger = console;
setLogger(logger);
var defaultContext = /* @__PURE__ */ React__default["default"].createContext(void 0);
var QueryClientSharingContext = /* @__PURE__ */ React__default["default"].createContext(false);
function getQueryClientContext(contextSharing) {
  if (contextSharing && typeof window !== "undefined") {
    if (!window.ReactQueryClientContext) {
      window.ReactQueryClientContext = defaultContext;
    }
    return window.ReactQueryClientContext;
  }
  return defaultContext;
}
var useQueryClient = function useQueryClient2() {
  var queryClient = React__default["default"].useContext(getQueryClientContext(React__default["default"].useContext(QueryClientSharingContext)));
  if (!queryClient) {
    throw new Error("No QueryClient set, use QueryClientProvider to set one");
  }
  return queryClient;
};
var QueryClientProvider = function QueryClientProvider2(_ref) {
  var client = _ref.client, _ref$contextSharing = _ref.contextSharing, contextSharing = _ref$contextSharing === void 0 ? false : _ref$contextSharing, children = _ref.children;
  React__default["default"].useEffect(function() {
    client.mount();
    return function() {
      client.unmount();
    };
  }, [client]);
  var Context = getQueryClientContext(contextSharing);
  return /* @__PURE__ */ React__default["default"].createElement(QueryClientSharingContext.Provider, {
    value: contextSharing
  }, /* @__PURE__ */ React__default["default"].createElement(Context.Provider, {
    value: client
  }, children));
};
function createValue() {
  var _isReset = false;
  return {
    clearReset: function clearReset() {
      _isReset = false;
    },
    reset: function reset() {
      _isReset = true;
    },
    isReset: function isReset() {
      return _isReset;
    }
  };
}
var QueryErrorResetBoundaryContext = /* @__PURE__ */ React__default["default"].createContext(createValue());
var useQueryErrorResetBoundary = function useQueryErrorResetBoundary2() {
  return React__default["default"].useContext(QueryErrorResetBoundaryContext);
};
function shouldThrowError(suspense, _useErrorBoundary, error) {
  if (typeof _useErrorBoundary === "function") {
    return _useErrorBoundary(error);
  }
  if (typeof _useErrorBoundary === "boolean")
    return _useErrorBoundary;
  return !!suspense;
}
function useBaseQuery(options, Observer) {
  var mountedRef = React__default["default"].useRef(false);
  var _React$useState = React__default["default"].useState(0), forceUpdate = _React$useState[1];
  var queryClient = useQueryClient();
  var errorResetBoundary = useQueryErrorResetBoundary();
  var defaultedOptions = queryClient.defaultQueryObserverOptions(options);
  defaultedOptions.optimisticResults = true;
  if (defaultedOptions.onError) {
    defaultedOptions.onError = notifyManager.batchCalls(defaultedOptions.onError);
  }
  if (defaultedOptions.onSuccess) {
    defaultedOptions.onSuccess = notifyManager.batchCalls(defaultedOptions.onSuccess);
  }
  if (defaultedOptions.onSettled) {
    defaultedOptions.onSettled = notifyManager.batchCalls(defaultedOptions.onSettled);
  }
  if (defaultedOptions.suspense) {
    if (typeof defaultedOptions.staleTime !== "number") {
      defaultedOptions.staleTime = 1e3;
    }
    if (defaultedOptions.cacheTime === 0) {
      defaultedOptions.cacheTime = 1;
    }
  }
  if (defaultedOptions.suspense || defaultedOptions.useErrorBoundary) {
    if (!errorResetBoundary.isReset()) {
      defaultedOptions.retryOnMount = false;
    }
  }
  var _React$useState2 = React__default["default"].useState(function() {
    return new Observer(queryClient, defaultedOptions);
  }), observer = _React$useState2[0];
  var result = observer.getOptimisticResult(defaultedOptions);
  React__default["default"].useEffect(function() {
    mountedRef.current = true;
    errorResetBoundary.clearReset();
    var unsubscribe = observer.subscribe(notifyManager.batchCalls(function() {
      if (mountedRef.current) {
        forceUpdate(function(x2) {
          return x2 + 1;
        });
      }
    }));
    observer.updateResult();
    return function() {
      mountedRef.current = false;
      unsubscribe();
    };
  }, [errorResetBoundary, observer]);
  React__default["default"].useEffect(function() {
    observer.setOptions(defaultedOptions, {
      listeners: false
    });
  }, [defaultedOptions, observer]);
  if (defaultedOptions.suspense && result.isLoading) {
    throw observer.fetchOptimistic(defaultedOptions).then(function(_ref) {
      var data = _ref.data;
      defaultedOptions.onSuccess == null ? void 0 : defaultedOptions.onSuccess(data);
      defaultedOptions.onSettled == null ? void 0 : defaultedOptions.onSettled(data, null);
    }).catch(function(error) {
      errorResetBoundary.clearReset();
      defaultedOptions.onError == null ? void 0 : defaultedOptions.onError(error);
      defaultedOptions.onSettled == null ? void 0 : defaultedOptions.onSettled(void 0, error);
    });
  }
  if (result.isError && !result.isFetching && shouldThrowError(defaultedOptions.suspense, defaultedOptions.useErrorBoundary, result.error)) {
    throw result.error;
  }
  if (defaultedOptions.notifyOnChangeProps === "tracked") {
    result = observer.trackResult(result);
  }
  return result;
}
function useQuery$1(arg1, arg2, arg3) {
  var parsedOptions = parseQueryArgs(arg1, arg2, arg3);
  return useBaseQuery(parsedOptions, QueryObserver);
}
function useHydrate(state, options) {
  var queryClient = useQueryClient();
  var optionsRef = React__default["default"].useRef(options);
  optionsRef.current = options;
  React__default["default"].useMemo(function() {
    if (state) {
      hydrate(queryClient, state, optionsRef.current);
    }
  }, [queryClient, state]);
}
var Hydrate = function Hydrate2(_ref) {
  var children = _ref.children, options = _ref.options, state = _ref.state;
  useHydrate(state, options);
  return children;
};
const isWorker = Boolean(unstableFizz.renderToReadableStream);
const STREAM_ABORT_TIMEOUT_MS = 3e3;
const renderHydrogen = (App2, hook) => {
  const render = async function(url, { context, request, isReactHydrationRequest, dev }) {
    var _a, _b;
    const state = isReactHydrationRequest ? JSON.parse((_b = (_a = url.searchParams) === null || _a === void 0 ? void 0 : _a.get("state")) !== null && _b !== void 0 ? _b : "{}") : { pathname: url.pathname, search: url.search };
    const { ReactApp, helmetContext, componentResponse } = buildReactApp({
      App: App2,
      state,
      context,
      request,
      dev
    });
    const body = await renderApp(ReactApp, state, isReactHydrationRequest);
    if (componentResponse.customBody) {
      return { body: await componentResponse.customBody, url, componentResponse };
    }
    let params = __spreadValues({ url }, extractHeadElements(helmetContext));
    if (hook) {
      params = hook(params) || params;
    }
    return __spreadValues({ body, componentResponse }, params);
  };
  const stream = function(url, { context, request, response, template, dev }) {
    const state = { pathname: url.pathname, search: url.search };
    const { ReactApp, componentResponse } = buildReactApp({
      App: App2,
      state,
      context,
      request,
      dev
    });
    response.socket.on("error", (error) => {
      console.error("Fatal", error);
    });
    let didError;
    const head = template.match(/<head>(.+?)<\/head>/s)[1];
    const { startWriting, abort } = unstableFizz.pipeToNodeWritable(React__default["default"].createElement(Html, { head }, React__default["default"].createElement(ReactApp, __spreadValues({}, state))), response, {
      onReadyToStream() {
        response.setHeader(getCacheControlHeader({ dev }), componentResponse.cacheControlHeader);
        if (!componentResponse.canStream())
          return;
        response.statusCode = didError ? 500 : 200;
        response.setHeader("Content-type", "text/html");
        response.write("<!DOCTYPE html>");
        startWriting();
        if (dev && didError) {
          response.write(getErrorMarkup(didError));
        }
      },
      onCompleteAll() {
        var _a;
        if (componentResponse.canStream())
          return;
        response.statusCode = (_a = componentResponse.status) !== null && _a !== void 0 ? _a : didError ? 500 : 200;
        componentResponse.headers.forEach((value, header) => {
          response.setHeader(header, value);
        });
        if (componentResponse.customBody) {
          if (componentResponse.customBody instanceof Promise) {
            componentResponse.customBody.then((body) => response.end(body));
          } else {
            response.end(componentResponse.customBody);
          }
        } else {
          response.setHeader("Content-type", "text/html");
          response.write("<!DOCTYPE html>");
          startWriting();
        }
      },
      onError(error) {
        didError = error;
        if (dev && response.headersSent) {
          response.write(getErrorMarkup(error));
        }
        console.error(error);
      }
    });
    setTimeout(abort, STREAM_ABORT_TIMEOUT_MS);
  };
  const hydrate2 = function(url, { context, request, response, dev }) {
    const state = JSON.parse(url.searchParams.get("state") || "{}");
    const { ReactApp, componentResponse } = buildReactApp({
      App: App2,
      state,
      context,
      request,
      dev
    });
    response.socket.on("error", (error) => {
      console.error("Fatal", error);
    });
    let didError;
    const writer = new HydrationWriter();
    const { startWriting, abort } = unstableFizz.pipeToNodeWritable(React__default["default"].createElement(HydrationContext.Provider, { value: true }, React__default["default"].createElement(ReactApp, __spreadValues({}, state))), writer, {
      onCompleteAll() {
        startWriting();
        writer.drain();
        response.statusCode = didError ? 500 : 200;
        response.setHeader(getCacheControlHeader({ dev }), componentResponse.cacheControlHeader);
        response.end(generateWireSyntaxFromRenderedHtml(writer.toString()));
      },
      onError(error) {
        didError = error;
        console.error(error);
      }
    });
    setTimeout(abort, STREAM_ABORT_TIMEOUT_MS);
  };
  return {
    render,
    stream,
    hydrate: hydrate2
  };
};
function buildReactApp({ App: App2, state, context, request, dev }) {
  const helmetContext = {};
  const componentResponse = new ServerComponentResponse();
  const ReactApp = (props) => React__default["default"].createElement(reactRouterDom.StaticRouter, { location: { pathname: state.pathname, search: state.search }, context }, React__default["default"].createElement(reactHelmetAsync.HelmetProvider, { context: helmetContext }, React__default["default"].createElement(App2, __spreadValues({ request, response: componentResponse }, props))));
  return { helmetContext, ReactApp, componentResponse };
}
function extractHeadElements(helmetContext) {
  const { helmet } = helmetContext;
  return {
    base: helmet.base.toString(),
    bodyAttributes: helmet.bodyAttributes.toString(),
    htmlAttributes: helmet.htmlAttributes.toString(),
    link: helmet.link.toString(),
    meta: helmet.meta.toString(),
    noscript: helmet.noscript.toString(),
    script: helmet.script.toString(),
    style: helmet.style.toString(),
    title: helmet.title.toString()
  };
}
function supportsReadableStream() {
  try {
    new ReadableStream();
    return true;
  } catch (_e) {
    return false;
  }
}
async function renderApp(ReactApp, state, isReactHydrationRequest) {
  if (isWorker && !supportsReadableStream()) {
    return renderAppFromStringWithPrepass(ReactApp, state, isReactHydrationRequest);
  }
  const app = isReactHydrationRequest ? React__default["default"].createElement(HydrationContext.Provider, { value: true }, React__default["default"].createElement(ReactApp, __spreadValues({}, state))) : React__default["default"].createElement(ReactApp, __spreadValues({}, state));
  return renderAppFromBufferedStream(app, isReactHydrationRequest);
}
function renderAppFromBufferedStream(app, isReactHydrationRequest) {
  return new Promise((resolve, reject) => {
    if (isWorker) {
      let isComplete = false;
      const stream = unstableFizz.renderToReadableStream(app, {
        onCompleteAll() {
          isComplete = true;
        },
        onError(error) {
          console.error(error);
          reject(error);
        }
      });
      async function checkForResults() {
        if (!isComplete) {
          setTimeout(checkForResults, 100);
          return;
        }
        const res = new Response(stream);
        if (isReactHydrationRequest) {
          resolve(generateWireSyntaxFromRenderedHtml(await res.text()));
        } else {
          resolve(await res.text());
        }
      }
      checkForResults();
    } else {
      const writer = new HydrationWriter();
      const { startWriting } = unstableFizz.pipeToNodeWritable(app, writer, {
        onCompleteAll() {
          startWriting();
          writer.drain();
          if (isReactHydrationRequest) {
            resolve(generateWireSyntaxFromRenderedHtml(writer.toString()));
          } else {
            resolve(writer.toString());
          }
        },
        onError(error) {
          console.error(error);
          reject(error);
        }
      });
    }
  });
}
async function renderAppFromStringWithPrepass(ReactApp, state, isReactHydrationRequest) {
  const hydrationContext = {};
  const app = isReactHydrationRequest ? React__default["default"].createElement(HydrationContext.Provider, { value: true }, React__default["default"].createElement(ReactApp, __spreadValues({ hydrationContext }, state))) : React__default["default"].createElement(ReactApp, __spreadValues({ hydrationContext }, state));
  await ssrPrepass(app);
  if (hydrationContext.queryClient) {
    hydrationContext.dehydratedState = dehydrate(hydrationContext.queryClient);
  }
  const body = server.renderToString(app);
  return isReactHydrationRequest ? generateWireSyntaxFromRenderedHtml(body) : body;
}
const ShopifyContext = React.createContext(null);
const DEFAULT_API_VERSION = "unstable";
function ShopifyProvider({
  shopifyConfig: shopifyConfig2,
  children
}) {
  const shopifyProviderValue = React.useMemo(() => {
    var _a;
    return __spreadProps(__spreadValues({
      locale: "en-us",
      graphqlApiVersion: DEFAULT_API_VERSION
    }, shopifyConfig2), {
      storeDomain: (_a = shopifyConfig2 === null || shopifyConfig2 === void 0 ? void 0 : shopifyConfig2.storeDomain) === null || _a === void 0 ? void 0 : _a.replace(/^https?:\/\//, "")
    });
  }, [shopifyConfig2]);
  return /* @__PURE__ */ jsxRuntime.jsx(ShopifyContext.Provider, {
    value: shopifyProviderValue,
    children
  });
}
function useQuery(key, queryFn, queryOptions) {
  async function cachedQueryFn() {
    const cacheResponse = await getItemFromCache(key);
    async function generateNewOutput() {
      return await queryFn({});
    }
    if (cacheResponse) {
      const [output, response] = cacheResponse;
      if (isStale$1(response)) {
        console.log("[useQuery] cache stale; generating new response in background");
        const lockKey = `lock-${key}`;
        runDelayedFunction(async () => {
          console.log(`[stale regen] fetching cache lock`);
          const lockExists = await getItemFromCache(lockKey);
          if (lockExists)
            return;
          await setItemInCache(lockKey, true);
          try {
            const output2 = await generateNewOutput();
            await setItemInCache(key, output2, queryOptions === null || queryOptions === void 0 ? void 0 : queryOptions.cache);
          } catch (e) {
            console.error(`Error generating async response: ${e.message}`);
          } finally {
            await deleteItemFromCache(lockKey);
          }
        });
      }
      return output;
    }
    const newOutput = await generateNewOutput();
    runDelayedFunction(async () => await setItemInCache(key, newOutput, queryOptions === null || queryOptions === void 0 ? void 0 : queryOptions.cache));
    return newOutput;
  }
  return useQuery$1(key, cachedQueryFn, queryOptions);
}
function QueryProvider({ children, hydrationContext }) {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { suspense: true } }
  });
  if (hydrationContext) {
    hydrationContext.queryClient = queryClient;
  }
  return React__default["default"].createElement(QueryClientProvider, { client: queryClient }, React__default["default"].createElement(Hydrate, { state: hydrationContext === null || hydrationContext === void 0 ? void 0 : hydrationContext.dehydratedState }, children));
}
function ShopifyServerProvider({ children, shopifyConfig: shopifyConfig2, hydrationContext }) {
  return React__default["default"].createElement(ShopifyProvider, { shopifyConfig: shopifyConfig2 }, React__default["default"].createElement(QueryProvider, { hydrationContext }, children));
}
function wrapInClientMarker(meta) {
  const {
    component,
    name
  } = meta;
  if (!component || typeof component !== "function" && !Object.prototype.hasOwnProperty.call(component, "render")) {
    return component;
  }
  const wrappedComponent = {
    [name]: (props) => /* @__PURE__ */ jsxRuntime.jsx(ClientMarker, {
      props,
      meta
    })
  }[name];
  for (const [key, value] of Object.entries(component)) {
    Object.defineProperty(wrappedComponent, key, {
      enumerable: true,
      value
    });
  }
  return wrappedComponent;
}
function ClientMarker({
  props: allProps,
  meta: {
    name,
    id,
    component: Component,
    named
  }
}) {
  const isHydrating = React.useContext(HydrationContext);
  if (!isHydrating)
    return /* @__PURE__ */ jsxRuntime.jsx(Component, __spreadValues({}, allProps));
  let _a = allProps, {
    children
  } = _a, props = __objRest(_a, [
    "children"
  ]);
  props = renderReactProps(props);
  const shouldRenderDuringHydration = name.endsWith("Provider");
  return /* @__PURE__ */ jsxRuntime.jsx("span", {
    "data-client-component": name,
    "data-id": id,
    "data-props": JSON.stringify(props),
    "data-named": named,
    children: shouldRenderDuringHydration ? /* @__PURE__ */ jsxRuntime.jsx(Component, __spreadProps(__spreadValues({}, allProps), {
      children
    })) : children
  });
}
const ServerStateContext = React.createContext(null);
function ServerStateProvider({ serverState, setServerState, children }) {
  const [pending, startTransition] = React.useTransition();
  const setServerStateCallback = React.useCallback((input, value2) => {
    startTransition(() => {
      if (typeof input === "function") {
        return setServerState(input);
      }
      if (typeof input === "object") {
        return setServerState((prev) => __spreadValues(__spreadValues({}, prev), input));
      }
      if (typeof input === "string") {
        return setServerState((prev) => __spreadProps(__spreadValues({}, prev), {
          [input]: value2
        }));
      }
    });
  }, [setServerState, startTransition]);
  const value = React.useMemo(() => ({
    pending,
    serverState,
    setServerState: setServerStateCallback
  }), [serverState, setServerStateCallback, pending]);
  return React__default["default"].createElement(ServerStateContext.Provider, { value }, children);
}
wrapInClientMarker({ name: "ServerStateProvider", id: "/Users/Plethora/Documents/CODING-PROJECTS/REACT/hydrogenia/cotton-shop/node_modules/@shopify/hydrogen/dist/esnext/foundation/ServerStateProvider/ServerStateProvider.client.js", component: ServerStateProvider, named: true });
function useShop() {
  const context = React.useContext(ShopifyContext);
  if (!context) {
    throw new Error("No Shopify Context found");
  }
  return context;
}
function DefaultRoutes({
  pages,
  serverState,
  fallback
}) {
  const {
    path
  } = reactRouterDom.useRouteMatch();
  const routes = React.useMemo(() => createRoutesFromPages(pages, path), [pages, path]);
  return /* @__PURE__ */ jsxRuntime.jsxs(reactRouterDom.Switch, {
    children: [routes.map((route) => /* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.Route, {
      exact: route.exact,
      path: route.path,
      children: /* @__PURE__ */ jsxRuntime.jsx(route.component, __spreadValues({}, serverState))
    }, route.path)), fallback && /* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.Route, {
      path: "*",
      children: fallback
    })]
  });
}
function createRoutesFromPages(pages, topLevelPath = "*") {
  const topLevelPrefix = topLevelPath.replace("*", "").replace(/\/$/, "");
  const routes = Object.keys(pages).map((key) => {
    const path = key.replace("./pages", "").replace(/\.server\.(t|j)sx?$/, "").replace(/\/index$/i, "/").replace(/\b[A-Z]/, (firstLetter) => firstLetter.toLowerCase()).replace(/\[(?:[.]{3})?(\w+?)\]/g, (_match, param) => `:${param}`);
    const exact = !/\[(?:[.]{3})(\w+?)\]/.test(key);
    return {
      path: topLevelPrefix + path,
      component: pages[key].default,
      exact
    };
  });
  return [...routes.filter((route) => !route.path.includes(":")), ...routes.filter((route) => route.path.includes(":"))];
}
const Link = wrapInClientMarker({ name: "Link", id: "/Users/Plethora/Documents/CODING-PROJECTS/REACT/hydrogenia/cotton-shop/node_modules/@shopify/hydrogen/dist/esnext/components/Link/Link.client.js", component: reactRouterDom.Link, named: true });
const CartAttributesUpdate = `
mutation CartAttributesUpdate($attributes: [AttributeInput!]!, $cartId: ID!, $numCartLines: Int = 250, $country: CountryCode = ZZ) @inContext(country: $country) {
  cartAttributesUpdate(attributes: $attributes, cartId: $cartId) {
    cart {
      ...CartFragment
    }
  }
}

fragment CartFragment on Cart {
  id
  checkoutUrl
  buyerIdentity {
    countryCode
    customer {
      id
      email
      firstName
      lastName
      displayName
    }
    email
    phone
  }
  lines(first: $numCartLines) {
    edges {
      node {
        id
        quantity
        attributes {
          key
          value
        }
        merchandise {
          ... on ProductVariant {
            id
            availableForSale
            compareAtPriceV2 {
              ...MoneyFragment
            }
            priceV2 {
              ...MoneyFragment
            }
            requiresShipping
            title
            image {
              ...ImageFragment
            }
            product {
              handle
              title
            }
            selectedOptions {
              name
              value
            }
          }
        }
      }
    }
  }
  estimatedCost {
    subtotalAmount {
      ...MoneyFragment
    }
    totalAmount {
      ...MoneyFragment
    }
    totalDutyAmount {
      ...MoneyFragment
    }
    totalTaxAmount {
      ...MoneyFragment
    }
  }
  note
  attributes {
    key
    value
  }
  discountCodes {
    code
  }
}

fragment MoneyFragment on MoneyV2 {
  currencyCode
  amount
}
fragment ImageFragment on Image {
  id
  url
  altText
  width
  height
}
`;
const CartBuyerIdentityUpdate = `
mutation CartBuyerIdentityUpdate(
  $cartId: ID!
  $buyerIdentity: CartBuyerIdentityInput!
  $numCartLines: Int = 250
  $country: CountryCode = ZZ
) @inContext(country: $country) {
  cartBuyerIdentityUpdate(cartId: $cartId, buyerIdentity: $buyerIdentity) {
    cart {
      ...CartFragment
    }
  }
}

fragment CartFragment on Cart {
  id
  checkoutUrl
  buyerIdentity {
    countryCode
    customer {
      id
      email
      firstName
      lastName
      displayName
    }
    email
    phone
  }
  lines(first: $numCartLines) {
    edges {
      node {
        id
        quantity
        attributes {
          key
          value
        }
        merchandise {
          ... on ProductVariant {
            id
            availableForSale
            compareAtPriceV2 {
              ...MoneyFragment
            }
            priceV2 {
              ...MoneyFragment
            }
            requiresShipping
            title
            image {
              ...ImageFragment
            }
            product {
              handle
              title
            }
            selectedOptions {
              name
              value
            }
          }
        }
      }
    }
  }
  estimatedCost {
    subtotalAmount {
      ...MoneyFragment
    }
    totalAmount {
      ...MoneyFragment
    }
    totalDutyAmount {
      ...MoneyFragment
    }
    totalTaxAmount {
      ...MoneyFragment
    }
  }
  note
  attributes {
    key
    value
  }
  discountCodes {
    code
  }
}

fragment MoneyFragment on MoneyV2 {
  currencyCode
  amount
}
fragment ImageFragment on Image {
  id
  url
  altText
  width
  height
}
`;
const CartCreate = `
mutation CartCreate($input: CartInput!, $numCartLines: Int = 250, $country: CountryCode = ZZ) @inContext(country: $country) {
  cartCreate(input: $input) {
    cart {
      ...CartFragment
    }
  }
}

fragment CartFragment on Cart {
  id
  checkoutUrl
  buyerIdentity {
    countryCode
    customer {
      id
      email
      firstName
      lastName
      displayName
    }
    email
    phone
  }
  lines(first: $numCartLines) {
    edges {
      node {
        id
        quantity
        attributes {
          key
          value
        }
        merchandise {
          ... on ProductVariant {
            id
            availableForSale
            compareAtPriceV2 {
              ...MoneyFragment
            }
            priceV2 {
              ...MoneyFragment
            }
            requiresShipping
            title
            image {
              ...ImageFragment
            }
            product {
              handle
              title
            }
            selectedOptions {
              name
              value
            }
          }
        }
      }
    }
  }
  estimatedCost {
    subtotalAmount {
      ...MoneyFragment
    }
    totalAmount {
      ...MoneyFragment
    }
    totalDutyAmount {
      ...MoneyFragment
    }
    totalTaxAmount {
      ...MoneyFragment
    }
  }
  note
  attributes {
    key
    value
  }
  discountCodes {
    code
  }
}

fragment MoneyFragment on MoneyV2 {
  currencyCode
  amount
}
fragment ImageFragment on Image {
  id
  url
  altText
  width
  height
}
`;
const CartDiscountCodesUpdate = `
mutation CartDiscountCodesUpdate($cartId: ID!, $discountCodes: [String!], $numCartLines: Int = 250, $country: CountryCode = ZZ) @inContext(country: $country) {
  cartDiscountCodesUpdate(cartId: $cartId, discountCodes: $discountCodes) {
    cart {
      ...CartFragment
    }
  }
}

fragment CartFragment on Cart {
  id
  checkoutUrl
  buyerIdentity {
    countryCode
    customer {
      id
      email
      firstName
      lastName
      displayName
    }
    email
    phone
  }
  lines(first: $numCartLines) {
    edges {
      node {
        id
        quantity
        attributes {
          key
          value
        }
        merchandise {
          ... on ProductVariant {
            id
            availableForSale
            compareAtPriceV2 {
              ...MoneyFragment
            }
            priceV2 {
              ...MoneyFragment
            }
            requiresShipping
            title
            image {
              ...ImageFragment
            }
            product {
              handle
              title
            }
            selectedOptions {
              name
              value
            }
          }
        }
      }
    }
  }
  estimatedCost {
    subtotalAmount {
      ...MoneyFragment
    }
    totalAmount {
      ...MoneyFragment
    }
    totalDutyAmount {
      ...MoneyFragment
    }
    totalTaxAmount {
      ...MoneyFragment
    }
  }
  note
  attributes {
    key
    value
  }
  discountCodes {
    code
  }
}

fragment MoneyFragment on MoneyV2 {
  currencyCode
  amount
}
fragment ImageFragment on Image {
  id
  url
  altText
  width
  height
}
`;
const CartLineAdd = `
mutation CartLineAdd($cartId: ID!, $lines: [CartLineInput!]!, $numCartLines: Int = 250, $country: CountryCode = ZZ) @inContext(country: $country) {
  cartLinesAdd(cartId: $cartId, lines: $lines) {
    cart {
      ...CartFragment
    }
  }
}

fragment CartFragment on Cart {
  id
  checkoutUrl
  buyerIdentity {
    countryCode
    customer {
      id
      email
      firstName
      lastName
      displayName
    }
    email
    phone
  }
  lines(first: $numCartLines) {
    edges {
      node {
        id
        quantity
        attributes {
          key
          value
        }
        merchandise {
          ... on ProductVariant {
            id
            availableForSale
            compareAtPriceV2 {
              ...MoneyFragment
            }
            priceV2 {
              ...MoneyFragment
            }
            requiresShipping
            title
            image {
              ...ImageFragment
            }
            product {
              handle
              title
            }
            selectedOptions {
              name
              value
            }
          }
        }
      }
    }
  }
  estimatedCost {
    subtotalAmount {
      ...MoneyFragment
    }
    totalAmount {
      ...MoneyFragment
    }
    totalDutyAmount {
      ...MoneyFragment
    }
    totalTaxAmount {
      ...MoneyFragment
    }
  }
  note
  attributes {
    key
    value
  }
  discountCodes {
    code
  }
}

fragment MoneyFragment on MoneyV2 {
  currencyCode
  amount
}
fragment ImageFragment on Image {
  id
  url
  altText
  width
  height
}
`;
const CartLineRemove = `
mutation CartLineRemove($cartId: ID!, $lines: [ID!]!, $numCartLines: Int = 250, $country: CountryCode = ZZ) @inContext(country: $country) {
  cartLinesRemove(cartId: $cartId, lineIds: $lines) {
    cart {
      ...CartFragment
    }
  }
}

fragment CartFragment on Cart {
  id
  checkoutUrl
  buyerIdentity {
    countryCode
    customer {
      id
      email
      firstName
      lastName
      displayName
    }
    email
    phone
  }
  lines(first: $numCartLines) {
    edges {
      node {
        id
        quantity
        attributes {
          key
          value
        }
        merchandise {
          ... on ProductVariant {
            id
            availableForSale
            compareAtPriceV2 {
              ...MoneyFragment
            }
            priceV2 {
              ...MoneyFragment
            }
            requiresShipping
            title
            image {
              ...ImageFragment
            }
            product {
              handle
              title
            }
            selectedOptions {
              name
              value
            }
          }
        }
      }
    }
  }
  estimatedCost {
    subtotalAmount {
      ...MoneyFragment
    }
    totalAmount {
      ...MoneyFragment
    }
    totalDutyAmount {
      ...MoneyFragment
    }
    totalTaxAmount {
      ...MoneyFragment
    }
  }
  note
  attributes {
    key
    value
  }
  discountCodes {
    code
  }
}

fragment MoneyFragment on MoneyV2 {
  currencyCode
  amount
}
fragment ImageFragment on Image {
  id
  url
  altText
  width
  height
}
`;
const CartLineUpdate = `
mutation CartLineUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!, $numCartLines: Int = 250, $country: CountryCode = ZZ) @inContext(country: $country) {
  cartLinesUpdate(cartId: $cartId, lines: $lines) {
    cart {
      ...CartFragment
    }
  }
}

fragment CartFragment on Cart {
  id
  checkoutUrl
  buyerIdentity {
    countryCode
    customer {
      id
      email
      firstName
      lastName
      displayName
    }
    email
    phone
  }
  lines(first: $numCartLines) {
    edges {
      node {
        id
        quantity
        attributes {
          key
          value
        }
        merchandise {
          ... on ProductVariant {
            id
            availableForSale
            compareAtPriceV2 {
              ...MoneyFragment
            }
            priceV2 {
              ...MoneyFragment
            }
            requiresShipping
            title
            image {
              ...ImageFragment
            }
            product {
              handle
              title
            }
            selectedOptions {
              name
              value
            }
          }
        }
      }
    }
  }
  estimatedCost {
    subtotalAmount {
      ...MoneyFragment
    }
    totalAmount {
      ...MoneyFragment
    }
    totalDutyAmount {
      ...MoneyFragment
    }
    totalTaxAmount {
      ...MoneyFragment
    }
  }
  note
  attributes {
    key
    value
  }
  discountCodes {
    code
  }
}

fragment MoneyFragment on MoneyV2 {
  currencyCode
  amount
}
fragment ImageFragment on Image {
  id
  url
  altText
  width
  height
}
`;
const CartNoteUpdate = `
mutation CartNoteUpdate($cartId: ID!, $note: String, $numCartLines: Int = 250, $country: CountryCode = ZZ) @inContext(country: $country) {
  cartNoteUpdate(cartId: $cartId, note: $note) {
    cart {
      ...CartFragment
    }
  }
}

fragment CartFragment on Cart {
  id
  checkoutUrl
  buyerIdentity {
    countryCode
    customer {
      id
      email
      firstName
      lastName
      displayName
    }
    email
    phone
  }
  lines(first: $numCartLines) {
    edges {
      node {
        id
        quantity
        attributes {
          key
          value
        }
        merchandise {
          ... on ProductVariant {
            id
            availableForSale
            compareAtPriceV2 {
              ...MoneyFragment
            }
            priceV2 {
              ...MoneyFragment
            }
            requiresShipping
            title
            image {
              ...ImageFragment
            }
            product {
              handle
              title
            }
            selectedOptions {
              name
              value
            }
          }
        }
      }
    }
  }
  estimatedCost {
    subtotalAmount {
      ...MoneyFragment
    }
    totalAmount {
      ...MoneyFragment
    }
    totalDutyAmount {
      ...MoneyFragment
    }
    totalTaxAmount {
      ...MoneyFragment
    }
  }
  note
  attributes {
    key
    value
  }
  discountCodes {
    code
  }
}

fragment MoneyFragment on MoneyV2 {
  currencyCode
  amount
}
fragment ImageFragment on Image {
  id
  url
  altText
  width
  height
}
`;
const CartQuery = `
query CartQuery($id: ID!, $numCartLines: Int = 250, $country: CountryCode = ZZ) @inContext(country: $country) {
  cart(id: $id) {
    ...CartFragment
  }
}

fragment CartFragment on Cart {
  id
  checkoutUrl
  buyerIdentity {
    countryCode
    customer {
      id
      email
      firstName
      lastName
      displayName
    }
    email
    phone
  }
  lines(first: $numCartLines) {
    edges {
      node {
        id
        quantity
        attributes {
          key
          value
        }
        merchandise {
          ... on ProductVariant {
            id
            availableForSale
            compareAtPriceV2 {
              ...MoneyFragment
            }
            priceV2 {
              ...MoneyFragment
            }
            requiresShipping
            title
            image {
              ...ImageFragment
            }
            product {
              handle
              title
            }
            selectedOptions {
              name
              value
            }
          }
        }
      }
    }
  }
  estimatedCost {
    subtotalAmount {
      ...MoneyFragment
    }
    totalAmount {
      ...MoneyFragment
    }
    totalDutyAmount {
      ...MoneyFragment
    }
    totalTaxAmount {
      ...MoneyFragment
    }
  }
  note
  attributes {
    key
    value
  }
  discountCodes {
    code
  }
}

fragment MoneyFragment on MoneyV2 {
  currencyCode
  amount
}
fragment ImageFragment on Image {
  id
  url
  altText
  width
  height
}
`;
const ExternalVideoFragment = `fragment ExternalVideoFragment on ExternalVideo {
  id
  embeddedUrl
  host
}

`;
const ImageFragment = `fragment ImageFragment on Image {
  id
  url
  altText
  width
  height
}

`;
const Localization = `query Localization {
  localization {
    country {
      isoCode
      name
      currency {
        isoCode
      }
    }
    availableCountries {
      isoCode
      name
      currency {
        isoCode
      }
    }
  }
}

`;
const MediaFileFragment$1 = `
fragment MediaFileFragment on Media {
  ... on MediaImage {
    mediaContentType
    image {
      ...ImageFragment
    }
  }
  ... on Video {
    mediaContentType
    ...VideoFragment
  }
  ... on ExternalVideo {
    mediaContentType
    ...ExternalVideoFragment
  }
  ... on Model3d {
    mediaContentType
    ...Model3DFragment
  }
}

fragment ImageFragment on Image {
  id
  url
  altText
  width
  height
}

fragment VideoFragment on Video {
  id
  previewImage {
    url
  }
  sources {
    mimeType
    url
  }
}

fragment ExternalVideoFragment on ExternalVideo {
  id
  embeddedUrl
  host
}

fragment Model3DFragment on Model3d {
  id
  alt
  mediaContentType
  previewImage {
    url
  }
  sources {
    url
  }
}
`;
const MetafieldFragment = `fragment MetafieldFragment on Metafield {
  id
  type
  namespace
  key
  value
  createdAt
  updatedAt
  description
}
`;
const Model3DFragment = `fragment Model3DFragment on Model3d {
  id
  alt
  mediaContentType
  previewImage {
    url
  }
  sources {
    url
  }
}

`;
const MoneyFragment = `fragment MoneyFragment on MoneyV2 {
  currencyCode
  amount
}
`;
const ProductProviderFragment$1 = `
fragment ProductProviderFragment on Product  {
  compareAtPriceRange {
    maxVariantPrice {
      ...MoneyFragment
    }
    minVariantPrice {
      ...MoneyFragment
    }
  }
  descriptionHtml
  handle
  id
  media(first: $numProductMedia) {
    edges {
      node {
        ...MediaFileFragment
      }
    }
  }
  metafields(first: $numProductMetafields) {
    edges {
      node {
        ...MetafieldFragment
      }
    }
  }
  priceRange {
    maxVariantPrice {
      ...MoneyFragment
    }
    minVariantPrice {
      ...MoneyFragment
    }
  }
  title
  variants(first: $numProductVariants) {
    edges {
      node {
        ...VariantFragment
      }
    }
  }
  sellingPlanGroups(first: $numProductSellingPlanGroups) {
    edges {
      node {
        ...SellingPlanGroupsFragment
      }
    }
  }
}


fragment MediaFileFragment on Media {
  ... on MediaImage {
    mediaContentType
    image {
      ...ImageFragment
    }
  }
  ... on Video {
    mediaContentType
    ...VideoFragment
  }
  ... on ExternalVideo {
    mediaContentType
    ...ExternalVideoFragment
  }
  ... on Model3d {
    mediaContentType
    ...Model3DFragment
  }
}

fragment MetafieldFragment on Metafield {
  id
  type
  namespace
  key
  value
  createdAt
  updatedAt
  description
}

fragment VariantFragment on ProductVariant {
  id
  title
  availableForSale
  image {
    ...ImageFragment
  }
  ...UnitPriceFragment
  priceV2 {
    ...MoneyFragment
  }
  compareAtPriceV2 {
    ...MoneyFragment
  }
  selectedOptions {
    name
    value
  }
  metafields(first: $numProductVariantMetafields) {
    edges {
      node {
        ...MetafieldFragment
      }
    }
  }
  sellingPlanAllocations(first: $numProductVariantSellingPlanAllocations) {
    edges {
      node {
        priceAdjustments {
          compareAtPrice {
            ...MoneyFragment
          }
          perDeliveryPrice {
            ...MoneyFragment
          }
          price {
            ...MoneyFragment
          }
          unitPrice {
            ...MoneyFragment
          }
        }
        sellingPlan {
          ...SellingPlanFragment
        }
      }
    }
  }
}


fragment SellingPlanGroupsFragment on SellingPlanGroup {
  sellingPlans(first:$numProductSellingPlans) {
    edges {
      node {
        ...SellingPlanFragment
      }
    }
  }
  appName
  name
  options {
    name
    values
  }
}
fragment MoneyFragment on MoneyV2 {
  currencyCode
  amount
}
fragment ImageFragment on Image {
  id
  url
  altText
  width
  height
}

fragment VideoFragment on Video {
  id
  previewImage {
    url
  }
  sources {
    mimeType
    url
  }
}

fragment ExternalVideoFragment on ExternalVideo {
  id
  embeddedUrl
  host
}

fragment Model3DFragment on Model3d {
  id
  alt
  mediaContentType
  previewImage {
    url
  }
  sources {
    url
  }
}


fragment SellingPlanFragment on SellingPlan {
  id
  description
  name
  options {
    name
    value
  }
  priceAdjustments {
    orderCount
    adjustmentValue {
      ...on SellingPlanFixedAmountPriceAdjustment {
        adjustmentAmount {
          ...MoneyFragment
        }
      }
      ...on SellingPlanFixedPriceAdjustment {
        price {
          ...MoneyFragment
        }
      }
      ...on SellingPlanPercentagePriceAdjustment {
        adjustmentPercentage
      }
    }
  }
  recurringDeliveries
}
fragment MoneyFragment on MoneyV2 {
  currencyCode
  amount
}
fragment ImageFragment on Image {
  id
  url
  altText
  width
  height
}


fragment UnitPriceFragment on ProductVariant {
  unitPriceMeasurement {
    measuredType
    quantityUnit
    quantityValue
    referenceUnit
    referenceValue
  }
  unitPrice {
    ...MoneyFragment
  }
}
fragment MoneyFragment on MoneyV2 {
  currencyCode
  amount
}
fragment MoneyFragment on MoneyV2 {
  currencyCode
  amount
}

fragment SellingPlanFragment on SellingPlan {
  id
  description
  name
  options {
    name
    value
  }
  priceAdjustments {
    orderCount
    adjustmentValue {
      ...on SellingPlanFixedAmountPriceAdjustment {
        adjustmentAmount {
          ...MoneyFragment
        }
      }
      ...on SellingPlanFixedPriceAdjustment {
        price {
          ...MoneyFragment
        }
      }
      ...on SellingPlanPercentagePriceAdjustment {
        adjustmentPercentage
      }
    }
  }
  recurringDeliveries
}
fragment MoneyFragment on MoneyV2 {
  currencyCode
  amount
}`;
const UnitPriceFragment = `
fragment UnitPriceFragment on ProductVariant {
  unitPriceMeasurement {
    measuredType
    quantityUnit
    quantityValue
    referenceUnit
    referenceValue
  }
  unitPrice {
    ...MoneyFragment
  }
}
fragment MoneyFragment on MoneyV2 {
  currencyCode
  amount
}`;
const VideoFragment = `fragment VideoFragment on Video {
  id
  previewImage {
    url
  }
  sources {
    mimeType
    url
  }
}

`;
const PRODUCTION_CDN_HOSTNAMES = [
  "cdn.shopify.com",
  "cdn.shopifycdn.net",
  "shopify-assets.shopifycdn.com",
  "shopify-assets.shopifycdn.net"
];
const LOCAL_CDN_HOSTNAMES = ["spin.dev"];
function addImageSizeParametersToUrl(url, { width, height, crop, scale, format }) {
  const newUrl = new URL(url);
  const sizePath = width || height ? `_${width !== null && width !== void 0 ? width : ""}x${height !== null && height !== void 0 ? height : ""}` : "";
  const cropPath = crop ? `_crop_${crop}` : "";
  const scalePath = scale ? `@${scale}x` : "";
  const progressive = format === "pjpg" ? `.progressive` : "";
  const asJPG = format === "jpg" ? `.jpg` : "";
  const fileDelimiterIndex = newUrl.pathname.lastIndexOf(".");
  const fileName = newUrl.pathname.substr(0, fileDelimiterIndex);
  const fileType = newUrl.pathname.substr(fileDelimiterIndex);
  newUrl.pathname = `${fileName}${sizePath}${cropPath}${scalePath}${progressive}${fileType}${asJPG}`;
  return newUrl.toString();
}
function shopifyImageLoader({ src, options }) {
  const newSrc = new URL(src);
  const allowedCDNHostnames = PRODUCTION_CDN_HOSTNAMES.concat(LOCAL_CDN_HOSTNAMES);
  const isShopifyServedImage = allowedCDNHostnames.some((allowedHostname) => newSrc.hostname.endsWith(allowedHostname));
  if (!isShopifyServedImage || options == null || !options.width && !options.height && !options.crop && !options.scale && !options.format) {
    return src;
  }
  return addImageSizeParametersToUrl(src, options);
}
function useImageUrl(src, options) {
  return React__namespace.useMemo(() => {
    return src ? shopifyImageLoader({ src, options }) : src;
  }, [options, src]);
}
function getShopifyImageDimensions(image, options) {
  const apiWidth = image.width;
  const apiHeight = image.height;
  if (apiWidth && apiHeight && ((options === null || options === void 0 ? void 0 : options.width) || (options === null || options === void 0 ? void 0 : options.height))) {
    const optionWidth = (options === null || options === void 0 ? void 0 : options.width) ? parseInt(options.width, 10) : void 0;
    const optionHeight = (options === null || options === void 0 ? void 0 : options.height) ? parseInt(options.height, 10) : void 0;
    if (optionWidth && optionHeight) {
      return { width: optionWidth, height: optionHeight };
    }
    if (!optionWidth && optionHeight) {
      return {
        width: Math.round(apiWidth / apiHeight * optionHeight),
        height: optionHeight
      };
    }
    if (optionWidth && !optionHeight) {
      return {
        width: optionWidth,
        height: Math.round(apiHeight / apiWidth * optionWidth)
      };
    }
  }
  return { width: apiWidth, height: apiHeight };
}
function addParametersToEmbeddedVideoUrl(url, parameters) {
  if (parameters == null) {
    return url;
  }
  const params = Object.keys(parameters).reduce((accumulator, param) => {
    const value = parameters[param];
    if (value == null) {
      return accumulator;
    }
    return accumulator + `&${param}=${value}`;
  }, "");
  return `${url}?${params}`;
}
function useEmbeddedVideoUrl(url, parameters) {
  return React.useMemo(() => {
    if (!parameters) {
      return url;
    }
    return addParametersToEmbeddedVideoUrl(url, parameters);
  }, [url, parameters]);
}
const SCRIPTS_LOADED = {};
function loadScript(src, options) {
  const isScriptLoaded = SCRIPTS_LOADED[src];
  if (isScriptLoaded) {
    return isScriptLoaded;
  }
  const promise = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    if (options === null || options === void 0 ? void 0 : options.module) {
      script.type = "module";
    }
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      reject(false);
    };
    document.body.appendChild(script);
  });
  SCRIPTS_LOADED[src] = promise;
  return promise;
}
function flattenConnection(connection) {
  var _a;
  return ((_a = connection.edges) !== null && _a !== void 0 ? _a : []).map((edge) => edge.node);
}
function isClient() {
  return typeof window !== "undefined";
}
const UNIT_MAPPING = {
  mm: "millimeter",
  cm: "centimeter",
  m: "meter",
  in: "inch",
  ft: "foot",
  yd: "yard",
  ml: "milliliter",
  l: "liter",
  us_fl_oz: "fluid-ounce",
  us_gal: "gallon",
  kg: "kilogram",
  g: "gram",
  lb: "pound",
  oz: "ounce"
};
function getMeasurementAsString(measurement, locale = "en-us", options = {}) {
  let measure = {
    value: measurement.value,
    unit: UNIT_MAPPING[measurement.unit]
  };
  if (measure.unit == null) {
    measure = convertToSupportedUnit(measurement.value, measurement.unit);
  }
  return new Intl.NumberFormat(locale, __spreadProps(__spreadValues({}, options), {
    unit: measure.unit,
    style: "unit"
  })).format(measure.value);
}
function convertToSupportedUnit(value, unit) {
  switch (unit) {
    case "cl":
      return {
        value: value / 1e3,
        unit: "liter"
      };
    case "m3":
      return {
        value: value * 1e3,
        unit: "liter"
      };
    case "us_pt":
      return {
        value: value * 0.125,
        unit: "gallon"
      };
    case "us_qt":
      return {
        value: value * 0.5,
        unit: "gallon"
      };
    case "us_oz":
      return {
        value: value / 128,
        unit: "gallon"
      };
    case "imp_pt":
      return {
        value: value / 6.661,
        unit: "gallon"
      };
    case "imp_qt":
      return {
        value: value / 3.331,
        unit: "gallon"
      };
    case "imp_gal":
      return {
        value: value / 1.201,
        unit: "gallon"
      };
    case "imp_fl_oz":
      return {
        value: value * 0.96076,
        unit: "fluid-ounce"
      };
    default:
      throw new Error(`Unit not supported: ${unit}`);
  }
}
function parseMetafieldValue(metafield) {
  if (metafield.value == null) {
    return metafield.value;
  }
  switch (metafield.type) {
    case "boolean":
      return metafield.value == "true";
    case "number_integer":
      return parseInt(metafield.value);
    case "number_decimal":
      return parseFloat(metafield.value);
    case "date":
    case "date_time":
      return new Date(metafield.value);
    case "json":
    case "weight":
    case "dimension":
    case "volume":
    case "rating":
      return JSON.parse(metafield.value);
    case "color":
    case "single_line_text_field":
    case "multi_line_text_field":
    case "product_reference":
    case "page_reference":
    case "variant_reference":
    case "file_reference":
    case "url":
    default:
      return metafield.value;
  }
}
function invariant(condition, message) {
  var booleanCondition = Boolean(condition);
  if (!booleanCondition) {
    throw new Error(message != null ? message : "Unexpected invariant triggered.");
  }
}
var nodejsCustomInspectSymbol = typeof Symbol === "function" && typeof Symbol.for === "function" ? Symbol.for("nodejs.util.inspect.custom") : void 0;
var nodejsCustomInspectSymbol$1 = nodejsCustomInspectSymbol;
function defineInspect(classObject) {
  var fn = classObject.prototype.toJSON;
  typeof fn === "function" || invariant(0);
  classObject.prototype.inspect = fn;
  if (nodejsCustomInspectSymbol$1) {
    classObject.prototype[nodejsCustomInspectSymbol$1] = fn;
  }
}
var Location = /* @__PURE__ */ function() {
  function Location2(startToken, endToken, source) {
    this.start = startToken.start;
    this.end = endToken.end;
    this.startToken = startToken;
    this.endToken = endToken;
    this.source = source;
  }
  var _proto = Location2.prototype;
  _proto.toJSON = function toJSON() {
    return {
      start: this.start,
      end: this.end
    };
  };
  return Location2;
}();
defineInspect(Location);
var Token = /* @__PURE__ */ function() {
  function Token2(kind, start, end, line, column, prev, value) {
    this.kind = kind;
    this.start = start;
    this.end = end;
    this.line = line;
    this.column = column;
    this.value = value;
    this.prev = prev;
    this.next = null;
  }
  var _proto2 = Token2.prototype;
  _proto2.toJSON = function toJSON() {
    return {
      kind: this.kind,
      value: this.value,
      line: this.line,
      column: this.column
    };
  };
  return Token2;
}();
defineInspect(Token);
function isNode(maybeNode) {
  return maybeNode != null && typeof maybeNode.kind === "string";
}
function _typeof(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof2(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof = function _typeof2(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof(obj);
}
var MAX_ARRAY_LENGTH = 10;
var MAX_RECURSIVE_DEPTH = 2;
function inspect(value) {
  return formatValue(value, []);
}
function formatValue(value, seenValues) {
  switch (_typeof(value)) {
    case "string":
      return JSON.stringify(value);
    case "function":
      return value.name ? "[function ".concat(value.name, "]") : "[function]";
    case "object":
      if (value === null) {
        return "null";
      }
      return formatObjectValue(value, seenValues);
    default:
      return String(value);
  }
}
function formatObjectValue(value, previouslySeenValues) {
  if (previouslySeenValues.indexOf(value) !== -1) {
    return "[Circular]";
  }
  var seenValues = [].concat(previouslySeenValues, [value]);
  var customInspectFn = getCustomFn(value);
  if (customInspectFn !== void 0) {
    var customValue = customInspectFn.call(value);
    if (customValue !== value) {
      return typeof customValue === "string" ? customValue : formatValue(customValue, seenValues);
    }
  } else if (Array.isArray(value)) {
    return formatArray(value, seenValues);
  }
  return formatObject(value, seenValues);
}
function formatObject(object, seenValues) {
  var keys = Object.keys(object);
  if (keys.length === 0) {
    return "{}";
  }
  if (seenValues.length > MAX_RECURSIVE_DEPTH) {
    return "[" + getObjectTag(object) + "]";
  }
  var properties = keys.map(function(key) {
    var value = formatValue(object[key], seenValues);
    return key + ": " + value;
  });
  return "{ " + properties.join(", ") + " }";
}
function formatArray(array, seenValues) {
  if (array.length === 0) {
    return "[]";
  }
  if (seenValues.length > MAX_RECURSIVE_DEPTH) {
    return "[Array]";
  }
  var len = Math.min(MAX_ARRAY_LENGTH, array.length);
  var remaining = array.length - len;
  var items = [];
  for (var i = 0; i < len; ++i) {
    items.push(formatValue(array[i], seenValues));
  }
  if (remaining === 1) {
    items.push("... 1 more item");
  } else if (remaining > 1) {
    items.push("... ".concat(remaining, " more items"));
  }
  return "[" + items.join(", ") + "]";
}
function getCustomFn(object) {
  var customInspectFn = object[String(nodejsCustomInspectSymbol$1)];
  if (typeof customInspectFn === "function") {
    return customInspectFn;
  }
  if (typeof object.inspect === "function") {
    return object.inspect;
  }
}
function getObjectTag(object) {
  var tag = Object.prototype.toString.call(object).replace(/^\[object /, "").replace(/]$/, "");
  if (tag === "Object" && typeof object.constructor === "function") {
    var name = object.constructor.name;
    if (typeof name === "string" && name !== "") {
      return name;
    }
  }
  return tag;
}
function printBlockString(value) {
  var indentation = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  var preferMultipleLines = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
  var isSingleLine = value.indexOf("\n") === -1;
  var hasLeadingSpace = value[0] === " " || value[0] === "	";
  var hasTrailingQuote = value[value.length - 1] === '"';
  var hasTrailingSlash = value[value.length - 1] === "\\";
  var printAsMultipleLines = !isSingleLine || hasTrailingQuote || hasTrailingSlash || preferMultipleLines;
  var result = "";
  if (printAsMultipleLines && !(isSingleLine && hasLeadingSpace)) {
    result += "\n" + indentation;
  }
  result += indentation ? value.replace(/\n/g, "\n" + indentation) : value;
  if (printAsMultipleLines) {
    result += "\n";
  }
  return '"""' + result.replace(/"""/g, '\\"""') + '"""';
}
var QueryDocumentKeys = {
  Name: [],
  Document: ["definitions"],
  OperationDefinition: ["name", "variableDefinitions", "directives", "selectionSet"],
  VariableDefinition: ["variable", "type", "defaultValue", "directives"],
  Variable: ["name"],
  SelectionSet: ["selections"],
  Field: ["alias", "name", "arguments", "directives", "selectionSet"],
  Argument: ["name", "value"],
  FragmentSpread: ["name", "directives"],
  InlineFragment: ["typeCondition", "directives", "selectionSet"],
  FragmentDefinition: [
    "name",
    "variableDefinitions",
    "typeCondition",
    "directives",
    "selectionSet"
  ],
  IntValue: [],
  FloatValue: [],
  StringValue: [],
  BooleanValue: [],
  NullValue: [],
  EnumValue: [],
  ListValue: ["values"],
  ObjectValue: ["fields"],
  ObjectField: ["name", "value"],
  Directive: ["name", "arguments"],
  NamedType: ["name"],
  ListType: ["type"],
  NonNullType: ["type"],
  SchemaDefinition: ["description", "directives", "operationTypes"],
  OperationTypeDefinition: ["type"],
  ScalarTypeDefinition: ["description", "name", "directives"],
  ObjectTypeDefinition: ["description", "name", "interfaces", "directives", "fields"],
  FieldDefinition: ["description", "name", "arguments", "type", "directives"],
  InputValueDefinition: ["description", "name", "type", "defaultValue", "directives"],
  InterfaceTypeDefinition: ["description", "name", "interfaces", "directives", "fields"],
  UnionTypeDefinition: ["description", "name", "directives", "types"],
  EnumTypeDefinition: ["description", "name", "directives", "values"],
  EnumValueDefinition: ["description", "name", "directives"],
  InputObjectTypeDefinition: ["description", "name", "directives", "fields"],
  DirectiveDefinition: ["description", "name", "arguments", "locations"],
  SchemaExtension: ["directives", "operationTypes"],
  ScalarTypeExtension: ["name", "directives"],
  ObjectTypeExtension: ["name", "interfaces", "directives", "fields"],
  InterfaceTypeExtension: ["name", "interfaces", "directives", "fields"],
  UnionTypeExtension: ["name", "directives", "types"],
  EnumTypeExtension: ["name", "directives", "values"],
  InputObjectTypeExtension: ["name", "directives", "fields"]
};
var BREAK = Object.freeze({});
function visit(root, visitor) {
  var visitorKeys = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : QueryDocumentKeys;
  var stack = void 0;
  var inArray = Array.isArray(root);
  var keys = [root];
  var index = -1;
  var edits = [];
  var node = void 0;
  var key = void 0;
  var parent = void 0;
  var path = [];
  var ancestors = [];
  var newRoot = root;
  do {
    index++;
    var isLeaving = index === keys.length;
    var isEdited = isLeaving && edits.length !== 0;
    if (isLeaving) {
      key = ancestors.length === 0 ? void 0 : path[path.length - 1];
      node = parent;
      parent = ancestors.pop();
      if (isEdited) {
        if (inArray) {
          node = node.slice();
        } else {
          var clone = {};
          for (var _i2 = 0, _Object$keys2 = Object.keys(node); _i2 < _Object$keys2.length; _i2++) {
            var k2 = _Object$keys2[_i2];
            clone[k2] = node[k2];
          }
          node = clone;
        }
        var editOffset = 0;
        for (var ii = 0; ii < edits.length; ii++) {
          var editKey = edits[ii][0];
          var editValue = edits[ii][1];
          if (inArray) {
            editKey -= editOffset;
          }
          if (inArray && editValue === null) {
            node.splice(editKey, 1);
            editOffset++;
          } else {
            node[editKey] = editValue;
          }
        }
      }
      index = stack.index;
      keys = stack.keys;
      edits = stack.edits;
      inArray = stack.inArray;
      stack = stack.prev;
    } else {
      key = parent ? inArray ? index : keys[index] : void 0;
      node = parent ? parent[key] : newRoot;
      if (node === null || node === void 0) {
        continue;
      }
      if (parent) {
        path.push(key);
      }
    }
    var result = void 0;
    if (!Array.isArray(node)) {
      if (!isNode(node)) {
        throw new Error("Invalid AST Node: ".concat(inspect(node), "."));
      }
      var visitFn = getVisitFn(visitor, node.kind, isLeaving);
      if (visitFn) {
        result = visitFn.call(visitor, node, key, parent, path, ancestors);
        if (result === BREAK) {
          break;
        }
        if (result === false) {
          if (!isLeaving) {
            path.pop();
            continue;
          }
        } else if (result !== void 0) {
          edits.push([key, result]);
          if (!isLeaving) {
            if (isNode(result)) {
              node = result;
            } else {
              path.pop();
              continue;
            }
          }
        }
      }
    }
    if (result === void 0 && isEdited) {
      edits.push([key, node]);
    }
    if (isLeaving) {
      path.pop();
    } else {
      var _visitorKeys$node$kin;
      stack = {
        inArray,
        index,
        keys,
        edits,
        prev: stack
      };
      inArray = Array.isArray(node);
      keys = inArray ? node : (_visitorKeys$node$kin = visitorKeys[node.kind]) !== null && _visitorKeys$node$kin !== void 0 ? _visitorKeys$node$kin : [];
      index = -1;
      edits = [];
      if (parent) {
        ancestors.push(parent);
      }
      parent = node;
    }
  } while (stack !== void 0);
  if (edits.length !== 0) {
    newRoot = edits[edits.length - 1][1];
  }
  return newRoot;
}
function getVisitFn(visitor, kind, isLeaving) {
  var kindVisitor = visitor[kind];
  if (kindVisitor) {
    if (!isLeaving && typeof kindVisitor === "function") {
      return kindVisitor;
    }
    var kindSpecificVisitor = isLeaving ? kindVisitor.leave : kindVisitor.enter;
    if (typeof kindSpecificVisitor === "function") {
      return kindSpecificVisitor;
    }
  } else {
    var specificVisitor = isLeaving ? visitor.leave : visitor.enter;
    if (specificVisitor) {
      if (typeof specificVisitor === "function") {
        return specificVisitor;
      }
      var specificKindVisitor = specificVisitor[kind];
      if (typeof specificKindVisitor === "function") {
        return specificKindVisitor;
      }
    }
  }
}
function print(ast) {
  return visit(ast, {
    leave: printDocASTReducer
  });
}
var MAX_LINE_LENGTH = 80;
var printDocASTReducer = {
  Name: function Name(node) {
    return node.value;
  },
  Variable: function Variable(node) {
    return "$" + node.name;
  },
  Document: function Document(node) {
    return join(node.definitions, "\n\n") + "\n";
  },
  OperationDefinition: function OperationDefinition(node) {
    var op = node.operation;
    var name = node.name;
    var varDefs = wrap("(", join(node.variableDefinitions, ", "), ")");
    var directives = join(node.directives, " ");
    var selectionSet = node.selectionSet;
    return !name && !directives && !varDefs && op === "query" ? selectionSet : join([op, join([name, varDefs]), directives, selectionSet], " ");
  },
  VariableDefinition: function VariableDefinition(_ref) {
    var variable = _ref.variable, type = _ref.type, defaultValue = _ref.defaultValue, directives = _ref.directives;
    return variable + ": " + type + wrap(" = ", defaultValue) + wrap(" ", join(directives, " "));
  },
  SelectionSet: function SelectionSet(_ref2) {
    var selections = _ref2.selections;
    return block(selections);
  },
  Field: function Field(_ref3) {
    var alias = _ref3.alias, name = _ref3.name, args = _ref3.arguments, directives = _ref3.directives, selectionSet = _ref3.selectionSet;
    var prefix = wrap("", alias, ": ") + name;
    var argsLine = prefix + wrap("(", join(args, ", "), ")");
    if (argsLine.length > MAX_LINE_LENGTH) {
      argsLine = prefix + wrap("(\n", indent(join(args, "\n")), "\n)");
    }
    return join([argsLine, join(directives, " "), selectionSet], " ");
  },
  Argument: function Argument(_ref4) {
    var name = _ref4.name, value = _ref4.value;
    return name + ": " + value;
  },
  FragmentSpread: function FragmentSpread(_ref5) {
    var name = _ref5.name, directives = _ref5.directives;
    return "..." + name + wrap(" ", join(directives, " "));
  },
  InlineFragment: function InlineFragment(_ref6) {
    var typeCondition = _ref6.typeCondition, directives = _ref6.directives, selectionSet = _ref6.selectionSet;
    return join(["...", wrap("on ", typeCondition), join(directives, " "), selectionSet], " ");
  },
  FragmentDefinition: function FragmentDefinition(_ref7) {
    var name = _ref7.name, typeCondition = _ref7.typeCondition, variableDefinitions = _ref7.variableDefinitions, directives = _ref7.directives, selectionSet = _ref7.selectionSet;
    return "fragment ".concat(name).concat(wrap("(", join(variableDefinitions, ", "), ")"), " ") + "on ".concat(typeCondition, " ").concat(wrap("", join(directives, " "), " ")) + selectionSet;
  },
  IntValue: function IntValue(_ref8) {
    var value = _ref8.value;
    return value;
  },
  FloatValue: function FloatValue(_ref9) {
    var value = _ref9.value;
    return value;
  },
  StringValue: function StringValue(_ref10, key) {
    var value = _ref10.value, isBlockString = _ref10.block;
    return isBlockString ? printBlockString(value, key === "description" ? "" : "  ") : JSON.stringify(value);
  },
  BooleanValue: function BooleanValue(_ref11) {
    var value = _ref11.value;
    return value ? "true" : "false";
  },
  NullValue: function NullValue() {
    return "null";
  },
  EnumValue: function EnumValue(_ref12) {
    var value = _ref12.value;
    return value;
  },
  ListValue: function ListValue(_ref13) {
    var values = _ref13.values;
    return "[" + join(values, ", ") + "]";
  },
  ObjectValue: function ObjectValue(_ref14) {
    var fields = _ref14.fields;
    return "{" + join(fields, ", ") + "}";
  },
  ObjectField: function ObjectField(_ref15) {
    var name = _ref15.name, value = _ref15.value;
    return name + ": " + value;
  },
  Directive: function Directive(_ref16) {
    var name = _ref16.name, args = _ref16.arguments;
    return "@" + name + wrap("(", join(args, ", "), ")");
  },
  NamedType: function NamedType(_ref17) {
    var name = _ref17.name;
    return name;
  },
  ListType: function ListType(_ref18) {
    var type = _ref18.type;
    return "[" + type + "]";
  },
  NonNullType: function NonNullType(_ref19) {
    var type = _ref19.type;
    return type + "!";
  },
  SchemaDefinition: addDescription(function(_ref20) {
    var directives = _ref20.directives, operationTypes = _ref20.operationTypes;
    return join(["schema", join(directives, " "), block(operationTypes)], " ");
  }),
  OperationTypeDefinition: function OperationTypeDefinition(_ref21) {
    var operation = _ref21.operation, type = _ref21.type;
    return operation + ": " + type;
  },
  ScalarTypeDefinition: addDescription(function(_ref22) {
    var name = _ref22.name, directives = _ref22.directives;
    return join(["scalar", name, join(directives, " ")], " ");
  }),
  ObjectTypeDefinition: addDescription(function(_ref23) {
    var name = _ref23.name, interfaces = _ref23.interfaces, directives = _ref23.directives, fields = _ref23.fields;
    return join(["type", name, wrap("implements ", join(interfaces, " & ")), join(directives, " "), block(fields)], " ");
  }),
  FieldDefinition: addDescription(function(_ref24) {
    var name = _ref24.name, args = _ref24.arguments, type = _ref24.type, directives = _ref24.directives;
    return name + (hasMultilineItems(args) ? wrap("(\n", indent(join(args, "\n")), "\n)") : wrap("(", join(args, ", "), ")")) + ": " + type + wrap(" ", join(directives, " "));
  }),
  InputValueDefinition: addDescription(function(_ref25) {
    var name = _ref25.name, type = _ref25.type, defaultValue = _ref25.defaultValue, directives = _ref25.directives;
    return join([name + ": " + type, wrap("= ", defaultValue), join(directives, " ")], " ");
  }),
  InterfaceTypeDefinition: addDescription(function(_ref26) {
    var name = _ref26.name, interfaces = _ref26.interfaces, directives = _ref26.directives, fields = _ref26.fields;
    return join(["interface", name, wrap("implements ", join(interfaces, " & ")), join(directives, " "), block(fields)], " ");
  }),
  UnionTypeDefinition: addDescription(function(_ref27) {
    var name = _ref27.name, directives = _ref27.directives, types = _ref27.types;
    return join(["union", name, join(directives, " "), types && types.length !== 0 ? "= " + join(types, " | ") : ""], " ");
  }),
  EnumTypeDefinition: addDescription(function(_ref28) {
    var name = _ref28.name, directives = _ref28.directives, values = _ref28.values;
    return join(["enum", name, join(directives, " "), block(values)], " ");
  }),
  EnumValueDefinition: addDescription(function(_ref29) {
    var name = _ref29.name, directives = _ref29.directives;
    return join([name, join(directives, " ")], " ");
  }),
  InputObjectTypeDefinition: addDescription(function(_ref30) {
    var name = _ref30.name, directives = _ref30.directives, fields = _ref30.fields;
    return join(["input", name, join(directives, " "), block(fields)], " ");
  }),
  DirectiveDefinition: addDescription(function(_ref31) {
    var name = _ref31.name, args = _ref31.arguments, repeatable = _ref31.repeatable, locations = _ref31.locations;
    return "directive @" + name + (hasMultilineItems(args) ? wrap("(\n", indent(join(args, "\n")), "\n)") : wrap("(", join(args, ", "), ")")) + (repeatable ? " repeatable" : "") + " on " + join(locations, " | ");
  }),
  SchemaExtension: function SchemaExtension(_ref32) {
    var directives = _ref32.directives, operationTypes = _ref32.operationTypes;
    return join(["extend schema", join(directives, " "), block(operationTypes)], " ");
  },
  ScalarTypeExtension: function ScalarTypeExtension(_ref33) {
    var name = _ref33.name, directives = _ref33.directives;
    return join(["extend scalar", name, join(directives, " ")], " ");
  },
  ObjectTypeExtension: function ObjectTypeExtension(_ref34) {
    var name = _ref34.name, interfaces = _ref34.interfaces, directives = _ref34.directives, fields = _ref34.fields;
    return join(["extend type", name, wrap("implements ", join(interfaces, " & ")), join(directives, " "), block(fields)], " ");
  },
  InterfaceTypeExtension: function InterfaceTypeExtension(_ref35) {
    var name = _ref35.name, interfaces = _ref35.interfaces, directives = _ref35.directives, fields = _ref35.fields;
    return join(["extend interface", name, wrap("implements ", join(interfaces, " & ")), join(directives, " "), block(fields)], " ");
  },
  UnionTypeExtension: function UnionTypeExtension(_ref36) {
    var name = _ref36.name, directives = _ref36.directives, types = _ref36.types;
    return join(["extend union", name, join(directives, " "), types && types.length !== 0 ? "= " + join(types, " | ") : ""], " ");
  },
  EnumTypeExtension: function EnumTypeExtension(_ref37) {
    var name = _ref37.name, directives = _ref37.directives, values = _ref37.values;
    return join(["extend enum", name, join(directives, " "), block(values)], " ");
  },
  InputObjectTypeExtension: function InputObjectTypeExtension(_ref38) {
    var name = _ref38.name, directives = _ref38.directives, fields = _ref38.fields;
    return join(["extend input", name, join(directives, " "), block(fields)], " ");
  }
};
function addDescription(cb) {
  return function(node) {
    return join([node.description, cb(node)], "\n");
  };
}
function join(maybeArray) {
  var _maybeArray$filter$jo;
  var separator = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return (_maybeArray$filter$jo = maybeArray === null || maybeArray === void 0 ? void 0 : maybeArray.filter(function(x2) {
    return x2;
  }).join(separator)) !== null && _maybeArray$filter$jo !== void 0 ? _maybeArray$filter$jo : "";
}
function block(array) {
  return wrap("{\n", indent(join(array, "\n")), "\n}");
}
function wrap(start, maybeString) {
  var end = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "";
  return maybeString != null && maybeString !== "" ? start + maybeString + end : "";
}
function indent(str) {
  return wrap("  ", str.replace(/\n/g, "\n  "));
}
function isMultiline(str) {
  return str.indexOf("\n") !== -1;
}
function hasMultilineItems(maybeArray) {
  return maybeArray != null && maybeArray.some(isMultiline);
}
const LIB_VERSION = "0.6.4";
function fetchBuilder(request) {
  const defaultHeaders = {
    "content-type": "application/json",
    "user-agent": `Hydrogen ${LIB_VERSION}`
  };
  for (const [property, value] of Object.entries(defaultHeaders)) {
    if (!request.headers.has(property)) {
      request.headers.append(property, value);
    }
  }
  return async () => {
    const clonedRequest = request.clone();
    const body = await clonedRequest.text();
    const headers = {};
    clonedRequest.headers.forEach((hVal, hName) => {
      headers[hName] = hVal;
    });
    const response = await fetch(clonedRequest.url, {
      body,
      headers,
      method: clonedRequest.method
    });
    const data = await response.json();
    return data;
  };
}
function graphqlRequestBody(query, variables) {
  const queryString = typeof query === "string" ? query : print(query);
  return JSON.stringify({
    query: queryString,
    variables
  });
}
function convertShopifyImageData({ image, options, loader, loaderOptions, id: propId, alt }) {
  const { url: src, altText, id } = image;
  const { width, height } = getShopifyImageDimensions(image, options);
  return {
    src,
    id: propId ? propId : id,
    alt: alt ? alt : altText,
    width,
    height,
    loader: loader ? loader : shopifyImageLoader,
    loaderOptions: __spreadValues(__spreadValues({}, options), loaderOptions)
  };
}
function Image(props) {
  var _a, _b, _c, _d;
  const _a2 = props, { image, options, src, id, alt, width, height, loader, loaderOptions } = _a2, passthroughProps = __objRest(_a2, ["image", "options", "src", "id", "alt", "width", "height", "loader", "loaderOptions"]);
  if (!image && !src) {
    throw new Error("Image component: requires either an `image` or `src` prop");
  }
  if (!image && src && (!width || !height)) {
    throw new Error(`Image component: when 'src' is provided, 'width' and 'height' are required and needs to be valid values (i.e. greater than zero). Provided values: 'src': ${src}, 'width': ${width}, 'height': ${height}`);
  }
  const imgProps = image ? convertShopifyImageData({
    image,
    options,
    loader,
    loaderOptions,
    id,
    alt
  }) : {
    src,
    id,
    alt,
    width,
    height,
    loader,
    loaderOptions: __spreadValues({ width, height }, loaderOptions)
  };
  const srcPath = imgProps.loader ? imgProps.loader({ src: imgProps.src, options: imgProps.loaderOptions }) : imgProps.src;
  return React__default["default"].createElement("img", __spreadProps(__spreadValues({ id: (_a = imgProps.id) !== null && _a !== void 0 ? _a : "", loading: "lazy", alt: (_b = imgProps.alt) !== null && _b !== void 0 ? _b : "" }, passthroughProps), { src: srcPath, width: (_c = imgProps.width) !== null && _c !== void 0 ? _c : void 0, height: (_d = imgProps.height) !== null && _d !== void 0 ? _d : void 0 }));
}
Image.Fragment = ImageFragment;
function Video(props) {
  var _a;
  const _a2 = props, { video, options, id = video.id, playsInline = true, controls = true } = _a2, passthroughProps = __objRest(_a2, ["video", "options", "id", "playsInline", "controls"]);
  const posterUrl = useImageUrl((_a = video.previewImage) === null || _a === void 0 ? void 0 : _a.url, options);
  return React__namespace.createElement("video", __spreadProps(__spreadValues({}, passthroughProps), { id, playsInline, controls, poster: posterUrl }), video.sources.map((source) => React__namespace.createElement("source", { key: source.url, src: source.url, type: source.mimeType })));
}
Video.Fragment = VideoFragment;
function ExternalVideo(props) {
  const _a = props, { video, options, id = video.id, frameBorder = "0", allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture", allowFullScreen = true } = _a, passthroughProps = __objRest(_a, ["video", "options", "id", "frameBorder", "allow", "allowFullScreen"]);
  const url = useEmbeddedVideoUrl(video.embeddedUrl, options);
  return React__namespace.createElement("iframe", __spreadProps(__spreadValues({}, passthroughProps), { id, frameBorder, allow, allowFullScreen, src: url }));
}
ExternalVideo.Fragment = ExternalVideoFragment;
function Model3D$1(props) {
  var _a, _b, _c, _d, _e, _f;
  const [modelViewer, setModelViewer] = React.useState(void 0);
  const callbackRef = React.useCallback((node) => {
    setModelViewer(node);
  }, []);
  const _a2 = props, {
    model,
    id = model.id,
    children,
    className
  } = _a2, passthroughProps = __objRest(_a2, [
    "model",
    "id",
    "children",
    "className"
  ]);
  const [modelViewerLoaded, setModelViewerLoaded] = React.useState(false);
  React.useEffect(() => {
    async function loadModelViewer() {
      const loaded = await loadScript("https://unpkg.com/@google/model-viewer@v1.8.0/dist/model-viewer.min.js", {
        module: true
      });
      if (!loaded) {
        console.warn("model-viewer library did not load");
      }
      setModelViewerLoaded(true);
    }
    loadModelViewer();
  }, []);
  React.useEffect(() => {
    if (modelViewer == null) {
      return;
    }
    if (passthroughProps.onError)
      modelViewer.addEventListener("error", passthroughProps.onError);
    if (passthroughProps.onLoad)
      modelViewer.addEventListener("load", passthroughProps.onLoad);
    if (passthroughProps.onPreload)
      modelViewer.addEventListener("preload", passthroughProps.onPreload);
    if (passthroughProps.onModelVisibility)
      modelViewer.addEventListener("model-visibility", passthroughProps.onModelVisibility);
    if (passthroughProps.onProgress)
      modelViewer.addEventListener("progress", passthroughProps.onProgress);
    if (passthroughProps.onArStatus)
      modelViewer.addEventListener("ar-status", passthroughProps.onArStatus);
    if (passthroughProps.onArTracking)
      modelViewer.addEventListener("ar-tracking", passthroughProps.onArTracking);
    if (passthroughProps.onQuickLookButtonTapped)
      modelViewer.addEventListener("quick-look-button-tapped", passthroughProps.onQuickLookButtonTapped);
    if (passthroughProps.onCameraChange)
      modelViewer.addEventListener("camera-change", passthroughProps.onCameraChange);
    if (passthroughProps.onEnvironmentChange)
      modelViewer.addEventListener("environment-change", passthroughProps.onEnvironmentChange);
    if (passthroughProps.onPlay)
      modelViewer.addEventListener("play", passthroughProps.onPlay);
    if (passthroughProps.onPause)
      modelViewer.addEventListener("ar-status", passthroughProps.onPause);
    if (passthroughProps.onSceneGraphReady)
      modelViewer.addEventListener("scene-graph-ready", passthroughProps.onSceneGraphReady);
    return () => {
      if (modelViewer == null) {
        return;
      }
      if (passthroughProps.onError)
        modelViewer.removeEventListener("error", passthroughProps.onError);
      if (passthroughProps.onLoad)
        modelViewer.removeEventListener("load", passthroughProps.onLoad);
      if (passthroughProps.onPreload)
        modelViewer.removeEventListener("preload", passthroughProps.onPreload);
      if (passthroughProps.onModelVisibility)
        modelViewer.removeEventListener("model-visibility", passthroughProps.onModelVisibility);
      if (passthroughProps.onProgress)
        modelViewer.removeEventListener("progress", passthroughProps.onProgress);
      if (passthroughProps.onArStatus)
        modelViewer.removeEventListener("ar-status", passthroughProps.onArStatus);
      if (passthroughProps.onArTracking)
        modelViewer.removeEventListener("ar-tracking", passthroughProps.onArTracking);
      if (passthroughProps.onQuickLookButtonTapped)
        modelViewer.removeEventListener("quick-look-button-tapped", passthroughProps.onQuickLookButtonTapped);
      if (passthroughProps.onCameraChange)
        modelViewer.removeEventListener("camera-change", passthroughProps.onCameraChange);
      if (passthroughProps.onEnvironmentChange)
        modelViewer.removeEventListener("environment-change", passthroughProps.onEnvironmentChange);
      if (passthroughProps.onPlay)
        modelViewer.removeEventListener("play", passthroughProps.onPlay);
      if (passthroughProps.onPause)
        modelViewer.removeEventListener("ar-status", passthroughProps.onPause);
      if (passthroughProps.onSceneGraphReady)
        modelViewer.removeEventListener("scene-graph-ready", passthroughProps.onSceneGraphReady);
    };
  }, [modelViewer, passthroughProps.onArStatus, passthroughProps.onArTracking, passthroughProps.onCameraChange, passthroughProps.onEnvironmentChange, passthroughProps.onError, passthroughProps.onLoad, passthroughProps.onModelVisibility, passthroughProps.onPause, passthroughProps.onPlay, passthroughProps.onPreload, passthroughProps.onProgress, passthroughProps.onQuickLookButtonTapped, passthroughProps.onSceneGraphReady]);
  if (!modelViewerLoaded) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntime.jsx("model-viewer", __spreadProps(__spreadValues({
    ref: callbackRef
  }, passthroughProps), {
    class: className,
    id,
    src: model.sources[0].url,
    alt: model.alt,
    "camera-controls": (_a = passthroughProps.cameraControls) !== null && _a !== void 0 ? _a : true,
    poster: (_b = model.previewImage) === null || _b === void 0 ? void 0 : _b.url,
    autoplay: (_c = passthroughProps.autoplay) !== null && _c !== void 0 ? _c : true,
    loading: passthroughProps.loading,
    reveal: passthroughProps.reveal,
    ar: passthroughProps.ar,
    "ar-modes": passthroughProps.arModes,
    "ar-scale": passthroughProps.arScale,
    "ar-placement": passthroughProps.arPlacement,
    "ios-src": passthroughProps.iosSrc,
    "touch-action": passthroughProps.touchAction,
    "disable-zoom": passthroughProps.disableZoom,
    "orbit-sensitivity": passthroughProps.orbitSensitivity,
    "auto-rotate": passthroughProps.autoRotate,
    "auto-rotate-delay": passthroughProps.autoRotateDelay,
    "rotation-per-second": passthroughProps.rotationPerSecond,
    "interaction-policy": passthroughProps.interactionPolicy,
    "interaction-prompt": passthroughProps.interactionPrompt,
    "interaction-prompt-style": passthroughProps.interactionPromptStyle,
    "interaction-prompt-threshold": passthroughProps.interactionPromptThreshold,
    "camera-orbit": passthroughProps.cameraOrbit,
    "camera-target": passthroughProps.cameraTarget,
    "field-of-view": passthroughProps.fieldOfView,
    "max-camera-orbit": passthroughProps.maxCameraOrbit,
    "min-camera-orbit": passthroughProps.minCameraOrbit,
    "max-field-of-view": passthroughProps.maxFieldOfView,
    "min-field-of-view": passthroughProps.minFieldOfView,
    bounds: passthroughProps.bounds,
    "interpolation-decay": (_d = passthroughProps.interpolationDecay) !== null && _d !== void 0 ? _d : 100,
    "skybox-image": passthroughProps.skyboxImage,
    "environment-image": passthroughProps.environmentImage,
    exposure: passthroughProps.exposure,
    "shadow-intensity": (_e = passthroughProps.shadowIntensity) !== null && _e !== void 0 ? _e : 0,
    "shadow-softness": (_f = passthroughProps.shadowSoftness) !== null && _f !== void 0 ? _f : 0,
    "animation-name": passthroughProps.animationName,
    "animation-crossfade-duration": passthroughProps.animationCrossfadeDuration,
    "variant-name": passthroughProps.variantName,
    orientation: passthroughProps.orientation,
    scale: passthroughProps.scale,
    children
  }));
}
Model3D$1.Fragment = Model3DFragment;
const Model3D = wrapInClientMarker({ name: "Model3D", id: "/Users/Plethora/Documents/CODING-PROJECTS/REACT/hydrogenia/cotton-shop/node_modules/@shopify/hydrogen/dist/esnext/components/Model3D/Model3D.client.js", component: Model3D$1, named: true });
function MediaFile(_a) {
  var _b = _a, { media, options } = _b, passthroughProps = __objRest(_b, ["media", "options"]);
  switch (media.mediaContentType) {
    case "IMAGE": {
      return React__namespace.createElement(Image, __spreadProps(__spreadValues({}, passthroughProps), { image: media.image, options }));
    }
    case "VIDEO":
      return React__namespace.createElement(Video, __spreadProps(__spreadValues({}, passthroughProps), { video: media, options }));
    case "EXTERNAL_VIDEO":
      return React__namespace.createElement(ExternalVideo, __spreadProps(__spreadValues({}, passthroughProps), { video: media, options }));
    case "MODEL_3D":
      return React__namespace.createElement(Model3D, __spreadProps(__spreadValues({}, passthroughProps), { model: media }));
    default:
      return null;
  }
}
MediaFile.Fragment = MediaFileFragment$1;
const MediaFileFragment = MediaFileFragment$1;
function RawHtml(props) {
  const _a = props, { string, unsanitized, as } = _a, passthroughProps = __objRest(_a, ["string", "unsanitized", "as"]);
  const Wrapper = as !== null && as !== void 0 ? as : "div";
  const sanitizedString = React__default["default"].useMemo(() => {
    if (unsanitized || true) {
      return string;
    }
  }, [string, unsanitized]);
  return React__default["default"].createElement(Wrapper, __spreadProps(__spreadValues({}, passthroughProps), { dangerouslySetInnerHTML: { __html: sanitizedString } }));
}
function useCartFetch() {
  const { storeDomain, graphqlApiVersion, storefrontToken } = useShop();
  return React__default["default"].useCallback(({ query, variables }) => {
    return fetch(`https://${storeDomain}/api/${graphqlApiVersion}/graphql.json`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": storefrontToken
      },
      body: JSON.stringify({
        query: query.toString(),
        variables
      })
    }).then((res) => res.json()).catch((error) => {
      return {
        data: void 0,
        error: error.toString()
      };
    });
  }, [storeDomain, graphqlApiVersion, storefrontToken]);
}
function useInstantCheckout() {
  const [cart, updateCart] = React.useState();
  const [checkoutUrl, updateCheckoutUrl] = React.useState();
  const [error, updateError] = React.useState();
  const fetch2 = useCartFetch();
  const createInstantCheckout = React__default["default"].useCallback(async (cartInput) => {
    var _a, _b;
    const { data, error: error2 } = await fetch2({
      query: CartCreate,
      variables: {
        input: cartInput
      }
    });
    if (error2) {
      updateError(error2);
      updateCart(void 0);
      updateCheckoutUrl(void 0);
    }
    if ((_a = data === null || data === void 0 ? void 0 : data.cartCreate) === null || _a === void 0 ? void 0 : _a.cart) {
      const dataCart = data.cartCreate.cart;
      updateCart(__spreadProps(__spreadValues({}, dataCart), {
        lines: flattenConnection(dataCart.lines),
        note: (_b = dataCart.note) !== null && _b !== void 0 ? _b : void 0
      }));
      updateCheckoutUrl(dataCart.checkoutUrl);
    }
  }, [fetch2]);
  return { cart, checkoutUrl, error, createInstantCheckout };
}
const CartContext$1 = React.createContext(null);
const CART_ID_STORAGE_KEY = "shopifyCartId";
function useServerState() {
  var _a;
  return (_a = React.useContext(ServerStateContext)) !== null && _a !== void 0 ? _a : {};
}
function cartReducer(state, action) {
  switch (action.type) {
    case "cartFetch": {
      if (state.status === "uninitialized") {
        return {
          status: "fetching"
        };
      }
      break;
    }
    case "cartCreate": {
      if (state.status === "uninitialized") {
        return {
          status: "creating"
        };
      }
      break;
    }
    case "resolve": {
      const resolvableStatuses = ["updating", "fetching", "creating"];
      if (resolvableStatuses.includes(state.status)) {
        return {
          status: "idle",
          cart: action.cart
        };
      }
      break;
    }
    case "reject": {
      if (state.status === "fetching" || state.status === "creating") {
        return {
          status: "uninitialized",
          error: action.error
        };
      } else if (state.status === "updating") {
        return {
          status: "idle",
          cart: state.lastValidCart,
          error: action.error
        };
      }
      break;
    }
    case "resetCart": {
      if (state.status === "fetching") {
        return {
          status: "uninitialized"
        };
      }
      break;
    }
    case "addLineItem": {
      if (state.status === "idle") {
        return {
          status: "updating",
          cart: state.cart,
          lastValidCart: state.cart
        };
      }
      break;
    }
    case "removeLineItem": {
      if (state.status === "idle") {
        return {
          status: "updating",
          cart: __spreadProps(__spreadValues({}, state.cart), {
            lines: state.cart.lines.filter(({
              id
            }) => !action.lines.includes(id))
          }),
          lastValidCart: state.cart
        };
      }
      break;
    }
    case "updateLineItem": {
      if (state.status === "idle") {
        return {
          status: "updating",
          cart: __spreadProps(__spreadValues({}, state.cart), {
            lines: state.cart.lines.map((line) => {
              const updatedLine = action.lines.find(({
                id
              }) => id === line.id);
              if (updatedLine && updatedLine.quantity) {
                return __spreadProps(__spreadValues({}, line), {
                  quantity: updatedLine.quantity
                });
              }
              return line;
            })
          }),
          lastValidCart: state.cart
        };
      }
      break;
    }
    case "noteUpdate": {
      if (state.status === "idle") {
        return {
          status: "updating",
          cart: state.cart,
          lastValidCart: state.cart
        };
      }
      break;
    }
    case "buyerIdentityUpdate": {
      if (state.status === "idle") {
        return {
          status: "updating",
          cart: state.cart,
          lastValidCart: state.cart
        };
      }
      break;
    }
    case "cartAttributesUpdate": {
      if (state.status === "idle") {
        return {
          status: "updating",
          cart: state.cart,
          lastValidCart: state.cart
        };
      }
      break;
    }
    case "discountCodesUpdate": {
      if (state.status === "idle") {
        return {
          status: "updating",
          cart: state.cart,
          lastValidCart: state.cart
        };
      }
      break;
    }
  }
  throw new Error(`Cannot dispatch event (${action.type}) for current cart state (${state.status})`);
}
function CartProvider$3({
  children,
  numCartLines,
  onCreate,
  onLineAdd,
  onLineRemove,
  onLineUpdate,
  onNoteUpdate,
  onBuyerIdentityUpdate,
  onAttributesUpdate,
  onDiscountCodesUpdate,
  cart
}) {
  var _a;
  const {
    serverState
  } = useServerState();
  const countryCode = (_a = serverState === null || serverState === void 0 ? void 0 : serverState.country) === null || _a === void 0 ? void 0 : _a.isoCode;
  const initialStatus = cart ? {
    status: "idle",
    cart: cartFromGraphQL(cart)
  } : {
    status: "uninitialized"
  };
  const [state, dispatch] = React.useReducer((state2, dispatch2) => cartReducer(state2, dispatch2), initialStatus);
  const fetchCart = useCartFetch();
  const cartFetch = React.useCallback(async (cartId) => {
    dispatch({
      type: "cartFetch"
    });
    const {
      data
    } = await fetchCart({
      query: CartQuery,
      variables: {
        id: cartId,
        numCartLines,
        country: countryCode
      }
    });
    if (!(data === null || data === void 0 ? void 0 : data.cart)) {
      window.localStorage.removeItem(CART_ID_STORAGE_KEY);
      dispatch({
        type: "resetCart"
      });
      return;
    }
    dispatch({
      type: "resolve",
      cart: cartFromGraphQL(data.cart)
    });
  }, [fetchCart, numCartLines, countryCode]);
  const cartCreate = React.useCallback(async (cart2) => {
    var _a2, _b;
    dispatch({
      type: "cartCreate"
    });
    onCreate === null || onCreate === void 0 ? void 0 : onCreate();
    if (countryCode && !((_a2 = cart2.buyerIdentity) === null || _a2 === void 0 ? void 0 : _a2.countryCode)) {
      if (cart2.buyerIdentity == null) {
        cart2.buyerIdentity = {};
      }
      cart2.buyerIdentity.countryCode = countryCode;
    }
    const {
      data,
      error
    } = await fetchCart({
      query: CartCreate,
      variables: {
        input: cart2,
        numCartLines,
        country: countryCode
      }
    });
    if (error) {
      dispatch({
        type: "reject",
        error
      });
    }
    if ((_b = data === null || data === void 0 ? void 0 : data.cartCreate) === null || _b === void 0 ? void 0 : _b.cart) {
      dispatch({
        type: "resolve",
        cart: cartFromGraphQL(data.cartCreate.cart)
      });
      window.localStorage.setItem(CART_ID_STORAGE_KEY, data.cartCreate.cart.id);
    }
  }, [onCreate, fetchCart, numCartLines, countryCode]);
  const addLineItem = React.useCallback(async (lines, state2) => {
    var _a2;
    if (state2.status === "idle") {
      dispatch({
        type: "addLineItem"
      });
      onLineAdd === null || onLineAdd === void 0 ? void 0 : onLineAdd();
      const {
        data,
        error
      } = await fetchCart({
        query: CartLineAdd,
        variables: {
          cartId: state2.cart.id,
          lines,
          numCartLines,
          country: countryCode
        }
      });
      if (error) {
        dispatch({
          type: "reject",
          error
        });
      }
      if ((_a2 = data === null || data === void 0 ? void 0 : data.cartLinesAdd) === null || _a2 === void 0 ? void 0 : _a2.cart) {
        dispatch({
          type: "resolve",
          cart: cartFromGraphQL(data.cartLinesAdd.cart)
        });
      }
    }
  }, [fetchCart, numCartLines, onLineAdd, countryCode]);
  const removeLineItem = React.useCallback(async (lines, state2) => {
    var _a2;
    if (state2.status === "idle") {
      dispatch({
        type: "removeLineItem",
        lines
      });
      onLineRemove === null || onLineRemove === void 0 ? void 0 : onLineRemove();
      const {
        data,
        error
      } = await fetchCart({
        query: CartLineRemove,
        variables: {
          cartId: state2.cart.id,
          lines,
          numCartLines,
          country: countryCode
        }
      });
      if (error) {
        dispatch({
          type: "reject",
          error
        });
      }
      if ((_a2 = data === null || data === void 0 ? void 0 : data.cartLinesRemove) === null || _a2 === void 0 ? void 0 : _a2.cart) {
        dispatch({
          type: "resolve",
          cart: cartFromGraphQL(data.cartLinesRemove.cart)
        });
      }
    }
  }, [fetchCart, onLineRemove, numCartLines, countryCode]);
  const updateLineItem = React.useCallback(async (lines, state2) => {
    var _a2;
    if (state2.status === "idle") {
      dispatch({
        type: "updateLineItem",
        lines
      });
      onLineUpdate === null || onLineUpdate === void 0 ? void 0 : onLineUpdate();
      const {
        data,
        error
      } = await fetchCart({
        query: CartLineUpdate,
        variables: {
          cartId: state2.cart.id,
          lines,
          numCartLines,
          country: countryCode
        }
      });
      if (error) {
        dispatch({
          type: "reject",
          error
        });
      }
      if ((_a2 = data === null || data === void 0 ? void 0 : data.cartLinesUpdate) === null || _a2 === void 0 ? void 0 : _a2.cart) {
        dispatch({
          type: "resolve",
          cart: cartFromGraphQL(data.cartLinesUpdate.cart)
        });
      }
    }
  }, [fetchCart, onLineUpdate, numCartLines, countryCode]);
  const noteUpdate = React.useCallback(async (note, state2) => {
    var _a2;
    if (state2.status === "idle") {
      dispatch({
        type: "noteUpdate"
      });
      onNoteUpdate === null || onNoteUpdate === void 0 ? void 0 : onNoteUpdate();
      const {
        data,
        error
      } = await fetchCart({
        query: CartNoteUpdate,
        variables: {
          cartId: state2.cart.id,
          note,
          numCartLines,
          country: countryCode
        }
      });
      if (error) {
        dispatch({
          type: "reject",
          error
        });
      }
      if ((_a2 = data === null || data === void 0 ? void 0 : data.cartNoteUpdate) === null || _a2 === void 0 ? void 0 : _a2.cart) {
        dispatch({
          type: "resolve",
          cart: cartFromGraphQL(data.cartNoteUpdate.cart)
        });
      }
    }
  }, [fetchCart, onNoteUpdate, numCartLines, countryCode]);
  const buyerIdentityUpdate = React.useCallback(async (buyerIdentity, state2) => {
    var _a2;
    if (state2.status === "idle") {
      dispatch({
        type: "buyerIdentityUpdate"
      });
      onBuyerIdentityUpdate === null || onBuyerIdentityUpdate === void 0 ? void 0 : onBuyerIdentityUpdate();
      const {
        data,
        error
      } = await fetchCart({
        query: CartBuyerIdentityUpdate,
        variables: {
          cartId: state2.cart.id,
          buyerIdentity,
          numCartLines,
          country: countryCode
        }
      });
      if (error) {
        dispatch({
          type: "reject",
          error
        });
      }
      if ((_a2 = data === null || data === void 0 ? void 0 : data.cartBuyerIdentityUpdate) === null || _a2 === void 0 ? void 0 : _a2.cart) {
        dispatch({
          type: "resolve",
          cart: cartFromGraphQL(data.cartBuyerIdentityUpdate.cart)
        });
      }
    }
  }, [fetchCart, onBuyerIdentityUpdate, numCartLines, countryCode]);
  const cartAttributesUpdate = React.useCallback(async (attributes, state2) => {
    var _a2;
    if (state2.status === "idle") {
      dispatch({
        type: "cartAttributesUpdate"
      });
      onAttributesUpdate === null || onAttributesUpdate === void 0 ? void 0 : onAttributesUpdate();
      const {
        data,
        error
      } = await fetchCart({
        query: CartAttributesUpdate,
        variables: {
          cartId: state2.cart.id,
          attributes,
          numCartLines,
          country: countryCode
        }
      });
      if (error) {
        dispatch({
          type: "reject",
          error
        });
      }
      if ((_a2 = data === null || data === void 0 ? void 0 : data.cartAttributesUpdate) === null || _a2 === void 0 ? void 0 : _a2.cart) {
        dispatch({
          type: "resolve",
          cart: cartFromGraphQL(data.cartAttributesUpdate.cart)
        });
      }
    }
  }, [fetchCart, onAttributesUpdate, numCartLines, countryCode]);
  const discountCodesUpdate = React.useCallback(async (discountCodes, state2) => {
    var _a2;
    if (state2.status === "idle") {
      dispatch({
        type: "discountCodesUpdate"
      });
      onDiscountCodesUpdate === null || onDiscountCodesUpdate === void 0 ? void 0 : onDiscountCodesUpdate();
      const {
        data,
        error
      } = await fetchCart({
        query: CartDiscountCodesUpdate,
        variables: {
          cartId: state2.cart.id,
          discountCodes,
          numCartLines,
          country: countryCode
        }
      });
      if (error) {
        dispatch({
          type: "reject",
          error
        });
      }
      if ((_a2 = data === null || data === void 0 ? void 0 : data.cartDiscountCodesUpdate) === null || _a2 === void 0 ? void 0 : _a2.cart) {
        dispatch({
          type: "resolve",
          cart: cartFromGraphQL(data.cartDiscountCodesUpdate.cart)
        });
      }
    }
  }, [fetchCart, onDiscountCodesUpdate, numCartLines, countryCode]);
  const didFetchCart = React.useRef(false);
  React.useEffect(() => {
    if (localStorage.getItem(CART_ID_STORAGE_KEY) && state.status === "uninitialized" && !didFetchCart.current) {
      didFetchCart.current = true;
      cartFetch(localStorage.getItem(CART_ID_STORAGE_KEY));
    }
  }, [cartFetch, state]);
  React.useEffect(() => {
    if (state.status !== "idle") {
      return;
    }
    buyerIdentityUpdate({
      countryCode
    }, state);
  }, [countryCode]);
  const cartContextValue = React.useMemo(() => {
    return __spreadProps(__spreadValues({}, "cart" in state ? state.cart : __spreadValues({
      lines: [],
      attributes: []
    }, cart ? cartFromGraphQL(cart) : {})), {
      status: state.status,
      error: "error" in state ? state.error : void 0,
      cartCreate,
      linesAdd(lines) {
        addLineItem(lines, state);
      },
      linesRemove(lines) {
        removeLineItem(lines, state);
      },
      linesUpdate(lines) {
        updateLineItem(lines, state);
      },
      noteUpdate(note) {
        noteUpdate(note, state);
      },
      buyerIdentityUpdate(buyerIdentity) {
        buyerIdentityUpdate(buyerIdentity, state);
      },
      cartAttributesUpdate(attributes) {
        cartAttributesUpdate(attributes, state);
      },
      discountCodesUpdate(discountCodes) {
        discountCodesUpdate(discountCodes, state);
      }
    });
  }, [state, cart, cartCreate, addLineItem, removeLineItem, updateLineItem, noteUpdate, buyerIdentityUpdate, cartAttributesUpdate, discountCodesUpdate]);
  return /* @__PURE__ */ jsxRuntime.jsx(CartContext$1.Provider, {
    value: cartContextValue,
    children
  });
}
function cartFromGraphQL(cart) {
  var _a;
  return __spreadProps(__spreadValues({}, cart), {
    lines: flattenConnection(cart.lines),
    note: (_a = cart.note) !== null && _a !== void 0 ? _a : void 0
  });
}
const CartProvider$2 = wrapInClientMarker({ name: "CartProvider", id: "/Users/Plethora/Documents/CODING-PROJECTS/REACT/hydrogenia/cotton-shop/node_modules/@shopify/hydrogen/dist/esnext/components/CartProvider/CartProvider.client.js", component: CartProvider$3, named: true });
function useCart() {
  const context = React__default["default"].useContext(CartContext$1);
  if (!context) {
    throw new Error("Expected a Cart Context, but no Cart Context was found");
  }
  return context;
}
function useCartCheckoutUrl() {
  const { checkoutUrl } = useCart();
  return checkoutUrl;
}
function useCartCreateCallback() {
  const { cartCreate } = useCart();
  return cartCreate;
}
function useCartLinesAddCallback() {
  const { linesAdd } = useCart();
  return linesAdd;
}
function useCartLinesRemoveCallback() {
  const { linesRemove } = useCart();
  return linesRemove;
}
function useCartLinesTotalQuantity() {
  var _a;
  const { lines } = useCart();
  const itemCount = (_a = React__default["default"].useMemo(() => {
    return lines.reduce((accumulator, line) => {
      return accumulator + line.quantity;
    }, 0);
  }, [lines])) !== null && _a !== void 0 ? _a : 0;
  return itemCount;
}
function useCartLinesUpdateCallback() {
  const { linesUpdate } = useCart();
  return linesUpdate;
}
function AddToCartButton$1(props) {
  const [addingItem, setAddingItem] = React.useState(false);
  const _a = props, {
    variantID,
    quantity = 1,
    attributes,
    children,
    onAdd,
    accessibleAddingToCartLabel
  } = _a, passthroughProps = __objRest(_a, [
    "variantID",
    "quantity",
    "attributes",
    "children",
    "onAdd",
    "accessibleAddingToCartLabel"
  ]);
  const {
    status,
    id
  } = useCart();
  const createCart = useCartCreateCallback();
  const addLines = useCartLinesAddCallback();
  React.useEffect(() => {
    if (addingItem && status === "idle") {
      setAddingItem(false);
    }
  }, [status, addingItem]);
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [/* @__PURE__ */ jsxRuntime.jsx("button", __spreadProps(__spreadValues({}, passthroughProps), {
      disabled: addingItem || passthroughProps.disabled,
      onClick: () => {
        setAddingItem(true);
        if (!id) {
          createCart({
            lines: [{
              quantity,
              merchandiseId: variantID,
              attributes
            }]
          });
        } else {
          addLines([{
            quantity,
            merchandiseId: variantID,
            attributes
          }]);
        }
      },
      children
    })), accessibleAddingToCartLabel ? /* @__PURE__ */ jsxRuntime.jsx("p", {
      style: {
        position: "absolute",
        width: "1px",
        height: "1px",
        padding: "0",
        margin: "-1px",
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        borderWidth: "0"
      },
      role: "alert",
      "aria-live": "assertive",
      children: addingItem ? accessibleAddingToCartLabel : null
    }) : null]
  });
}
const AddToCartButton = wrapInClientMarker({ name: "AddToCartButton", id: "/Users/Plethora/Documents/CODING-PROJECTS/REACT/hydrogenia/cotton-shop/node_modules/@shopify/hydrogen/dist/esnext/components/AddToCartButton/AddToCartButton.client.js", component: AddToCartButton$1, named: true });
function getSelectedVariant(variants, choices) {
  if (!variants.length || variants[0].selectedOptions.length !== Object.keys(choices).length) {
    return;
  }
  return variants.find((variant) => {
    return Object.entries(choices).every(([name, value]) => {
      return variant.selectedOptions.some((option) => option.name === name && option.value === value);
    });
  });
}
function getOptions(variants) {
  const map = variants.reduce((memo, variant) => {
    variant.selectedOptions.forEach(({ name, value }) => {
      memo[name] = memo[name] || new Set();
      memo[name].add(value);
    });
    return memo;
  }, {});
  return Object.keys(map).map((option) => {
    return {
      name: option,
      values: Array.from(map[option])
    };
  });
}
function useProductOptions({ variants: variantsConnection, sellingPlanGroups: sellingPlanGroupsConnection, initialVariantId }) {
  const variants = React.useMemo(() => variantsConnection ? flattenConnection(variantsConnection) : [], [variantsConnection]);
  const options = React.useMemo(() => getOptions(variants), [variants]);
  const [selectedVariant, setSelectedVariant] = React.useState(initialVariantId ? variants.find((variant) => variant.id === initialVariantId) : void 0);
  const [selectedOptions, setSelectedOptions] = React.useState((selectedVariant === null || selectedVariant === void 0 ? void 0 : selectedVariant.selectedOptions) ? selectedVariant.selectedOptions.reduce((memo, optionSet) => {
    memo[optionSet.name] = optionSet.value;
    return memo;
  }, {}) : {});
  React.useEffect(() => {
    const selectedVariant2 = initialVariantId ? variants.find((variant) => variant.id === initialVariantId) : void 0;
    setSelectedVariant(selectedVariant2);
    const selectedOptions2 = (selectedVariant2 === null || selectedVariant2 === void 0 ? void 0 : selectedVariant2.selectedOptions) ? selectedVariant2.selectedOptions.reduce((memo, optionSet) => {
      memo[optionSet.name] = optionSet.value;
      return memo;
    }, {}) : {};
    setSelectedOptions(selectedOptions2);
  }, [initialVariantId, variants]);
  const setSelectedOption = React.useCallback((name, value) => {
    const newSelectedOptions = __spreadProps(__spreadValues({}, selectedOptions), {
      [name]: value
    });
    setSelectedOptions(newSelectedOptions);
  }, [selectedOptions]);
  React.useEffect(() => {
    const variant = getSelectedVariant(variants, selectedOptions);
    if (variant) {
      setSelectedVariant(variant);
    }
  }, [variants, selectedOptions]);
  const isOptionInStock = React.useCallback((option, value) => {
    var _a;
    const proposedVariant = getSelectedVariant(variants, __spreadValues(__spreadValues({}, selectedOptions), { [option]: value }));
    return (_a = proposedVariant === null || proposedVariant === void 0 ? void 0 : proposedVariant.availableForSale) !== null && _a !== void 0 ? _a : true;
  }, [selectedOptions, variants]);
  const sellingPlanGroups = React.useMemo(() => sellingPlanGroupsConnection ? flattenConnection(sellingPlanGroupsConnection).map((sellingPlanGroup) => __spreadProps(__spreadValues({}, sellingPlanGroup), {
    sellingPlans: (sellingPlanGroup === null || sellingPlanGroup === void 0 ? void 0 : sellingPlanGroup.sellingPlans) ? flattenConnection(sellingPlanGroup.sellingPlans) : []
  })) : [], [sellingPlanGroupsConnection]);
  const [selectedSellingPlan, setSelectedSellingPlan] = React.useState(void 0);
  const selectedSellingPlanAllocation = React.useMemo(() => {
    if (!selectedVariant || !selectedSellingPlan) {
      return;
    }
    if (!selectedVariant.sellingPlanAllocations) {
      throw new Error(`You must include sellingPlanAllocations in your variants in order to calculate selectedSellingPlanAllocation`);
    }
    return flattenConnection(selectedVariant.sellingPlanAllocations).find((allocation) => allocation.sellingPlan.id === selectedSellingPlan.id);
  }, [selectedVariant, selectedSellingPlan]);
  return {
    variants,
    variantsConnection,
    options,
    selectedVariant,
    setSelectedVariant,
    selectedOptions,
    setSelectedOption,
    setSelectedOptions,
    isOptionInStock,
    selectedSellingPlan,
    setSelectedSellingPlan,
    selectedSellingPlanAllocation,
    sellingPlanGroups,
    sellingPlanGroupsConnection
  };
}
const NARROW_SYMBOL_MAP = {
  USD: "$",
  AUD: "$",
  CAD: "$",
  NZD: "$",
  EUR: "\u20AC",
  GBP: "\xA3",
  INR: "\u20B9",
  RUB: "\u20BD",
  CNY: "\xA5",
  JPY: "\xA5",
  BRL: "R$"
};
function useMoney(money) {
  const { locale } = useShop();
  const options = React.useMemo(() => ({
    style: "currency",
    currency: money.currencyCode
  }), [money.currencyCode]);
  const amount = parseFloat(money.amount);
  const value = React.useMemo(() => new Intl.NumberFormat(locale, options).format(amount), [amount, locale, options]);
  const baseParts = new Intl.NumberFormat(locale, options).formatToParts(amount);
  const nameParts = new Intl.NumberFormat(locale, __spreadProps(__spreadValues({}, options), {
    currencyDisplay: "name"
  })).formatToParts(amount);
  const narrowParts = new Intl.NumberFormat(locale, __spreadProps(__spreadValues({}, options), {
    currencyDisplay: "narrowSymbol"
  })).formatToParts(amount);
  const moneyValue = React.useMemo(() => {
    var _a, _b, _c, _d, _e, _f, _g;
    return {
      currencyCode: money.currencyCode,
      currencyName: (_b = (_a = nameParts.find((part) => part.type === "currency")) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : money.currencyCode,
      currencySymbol: (_d = (_c = baseParts.find((part) => part.type === "currency")) === null || _c === void 0 ? void 0 : _c.value) !== null && _d !== void 0 ? _d : money.currencyCode,
      currencyNarrowSymbol: (_g = (_f = (_e = narrowParts.find((part) => part.type === "currency")) === null || _e === void 0 ? void 0 : _e.value) !== null && _f !== void 0 ? _f : NARROW_SYMBOL_MAP[money.currencyCode]) !== null && _g !== void 0 ? _g : "",
      parts: baseParts,
      localizedString: value,
      amount: baseParts.filter((part) => ["decimal", "fraction", "group", "integer", "literal"].includes(part.type)).map((part) => part.value).join(""),
      original: money
    };
  }, [baseParts, money, nameParts, narrowParts, value]);
  return moneyValue;
}
function useParsedMetafields(metafields) {
  return React.useMemo(() => {
    if (metafields == null) {
      return [];
    }
    return flattenConnection(metafields).map((metafield) => {
      return __spreadProps(__spreadValues({}, metafield), {
        value: parseMetafieldValue(metafield)
      });
    });
  }, [metafields]);
}
function Money$1(props) {
  const _a = props, { money, children, as } = _a, passthroughProps = __objRest(_a, ["money", "children", "as"]);
  const moneyObject = useMoney(money);
  const Wrapper = as !== null && as !== void 0 ? as : "div";
  return React__default["default"].createElement(Wrapper, __spreadValues({}, passthroughProps), typeof children === "function" ? children(moneyObject) : moneyObject.localizedString);
}
Money$1.Fragment = MoneyFragment;
const Money = wrapInClientMarker({ name: "Money", id: "/Users/Plethora/Documents/CODING-PROJECTS/REACT/hydrogenia/cotton-shop/node_modules/@shopify/hydrogen/dist/esnext/components/Money/Money.client.js", component: Money$1, named: true });
const STAR_EMPTY = "\u2606";
const STAR_FILLED = "\u2605";
function StarRating(props) {
  const _a = props, {
    as,
    rating
  } = _a, passthroughProps = __objRest(_a, [
    "as",
    "rating"
  ]);
  const starsArray = React.useMemo(() => {
    const ratingMin = Math.floor(rating.scale_min);
    const ratingMax = Math.floor(rating.scale_max);
    const ratingInteger = Math.floor(rating.value);
    const ratingPercent = rating.value % 1 * 100;
    const stars = [];
    for (let i = ratingMin; i <= ratingMax; i++) {
      if (i <= ratingInteger) {
        stars.push(/* @__PURE__ */ jsxRuntime.jsx(Star, {
          percentFilled: 100
        }, i));
      } else if (i > ratingInteger + 1) {
        stars.push(/* @__PURE__ */ jsxRuntime.jsx(Star, {
          percentFilled: 0
        }, i));
      } else {
        stars.push(/* @__PURE__ */ jsxRuntime.jsx(Star, {
          percentFilled: ratingPercent
        }, i));
      }
    }
    return stars;
  }, [rating.scale_min, rating.scale_max, rating.value]);
  const Wrapper = as !== null && as !== void 0 ? as : "div";
  return /* @__PURE__ */ jsxRuntime.jsx(Wrapper, __spreadProps(__spreadValues({}, passthroughProps), {
    children: starsArray
  }));
}
function Star({
  percentFilled
}) {
  if (percentFilled === 100) {
    return /* @__PURE__ */ jsxRuntime.jsx("span", {
      children: STAR_FILLED
    });
  }
  if (percentFilled === 0) {
    return /* @__PURE__ */ jsxRuntime.jsx("span", {
      children: STAR_EMPTY
    });
  }
  return /* @__PURE__ */ jsxRuntime.jsxs("span", {
    style: {
      position: "relative",
      display: "inline-block"
    },
    children: [/* @__PURE__ */ jsxRuntime.jsx("span", {
      children: STAR_EMPTY
    }), /* @__PURE__ */ jsxRuntime.jsx("span", {
      style: {
        display: "inline-block",
        position: "absolute",
        top: "0",
        left: "0",
        width: `${percentFilled}%`,
        overflow: "hidden"
      },
      children: STAR_FILLED
    })]
  });
}
function Metafield$1(props) {
  const _a = props, { metafield, children, as } = _a, passthroughProps = __objRest(_a, ["metafield", "children", "as"]);
  const { locale } = useShop();
  if (metafield.value == null) {
    console.warn(`No metafield value for ${metafield}`);
    return null;
  }
  if (typeof children === "function") {
    return children(metafield);
  }
  switch (metafield.type) {
    case "date": {
      const Wrapper2 = as !== null && as !== void 0 ? as : "time";
      return React__default["default"].createElement(Wrapper2, __spreadValues({}, passthroughProps), metafield.value.toLocaleDateString(locale));
    }
    case "date_time": {
      const Wrapper2 = as !== null && as !== void 0 ? as : "time";
      return React__default["default"].createElement(Wrapper2, __spreadValues({}, passthroughProps), metafield.value.toLocaleString(locale));
    }
    case "weight":
    case "dimension":
    case "volume": {
      const Wrapper2 = as !== null && as !== void 0 ? as : "span";
      return React__default["default"].createElement(Wrapper2, __spreadValues({}, passthroughProps), getMeasurementAsString(metafield.value, locale));
    }
    case "rating": {
      return React__default["default"].createElement(StarRating, __spreadValues({ rating: metafield.value }, passthroughProps));
    }
    case "single_line_text_field": {
      return React__default["default"].createElement(RawHtml, __spreadProps(__spreadValues({}, passthroughProps), { as: as !== null && as !== void 0 ? as : "span", string: metafield.value }));
    }
    case "multi_line_text_field": {
      return React__default["default"].createElement(RawHtml, __spreadProps(__spreadValues({}, passthroughProps), { as, string: metafield.value.split("\n").join("<br/>") }));
    }
    case "url":
      return React__default["default"].createElement("a", __spreadValues({ href: metafield.value }, passthroughProps), metafield.value);
    case "json":
      const Wrapper = as !== null && as !== void 0 ? as : "span";
      return React__default["default"].createElement(Wrapper, __spreadValues({}, passthroughProps), JSON.stringify(metafield.value));
    default: {
      const Wrapper2 = as !== null && as !== void 0 ? as : "span";
      return React__default["default"].createElement(Wrapper2, __spreadValues({}, passthroughProps), metafield.value.toString());
    }
  }
}
Metafield$1.Fragment = MetafieldFragment;
const Metafield = wrapInClientMarker({ name: "Metafield", id: "/Users/Plethora/Documents/CODING-PROJECTS/REACT/hydrogenia/cotton-shop/node_modules/@shopify/hydrogen/dist/esnext/components/Metafield/Metafield.client.js", component: Metafield$1, named: true });
const CartLineContext = React.createContext(null);
function CartLineProvider$1({ children, line }) {
  return React__default["default"].createElement(CartLineContext.Provider, { value: line }, children);
}
const CartLineProvider = wrapInClientMarker({ name: "CartLineProvider", id: "/Users/Plethora/Documents/CODING-PROJECTS/REACT/hydrogenia/cotton-shop/node_modules/@shopify/hydrogen/dist/esnext/components/CartLineProvider/CartLineProvider.client.js", component: CartLineProvider$1, named: true });
function useCartLine() {
  const context = React.useContext(CartLineContext);
  if (context == null) {
    throw new Error("Expected a cart line context but none was found");
  }
  return context;
}
function CartLineImage$1(props) {
  const cartLine = useCartLine();
  const _a = props, { options } = _a, passthroughProps = __objRest(_a, ["options"]);
  return cartLine.merchandise.image ? React__default["default"].createElement(Image, __spreadProps(__spreadValues({}, passthroughProps), { image: cartLine.merchandise.image, options })) : null;
}
const CartLineImage = wrapInClientMarker({ name: "CartLineImage", id: "/Users/Plethora/Documents/CODING-PROJECTS/REACT/hydrogenia/cotton-shop/node_modules/@shopify/hydrogen/dist/esnext/components/CartLineImage/CartLineImage.client.js", component: CartLineImage$1, named: true });
function CartLinePrice$1(props) {
  const cartLine = useCartLine();
  const _a = props, { priceType = "regular" } = _a, passthroughProps = __objRest(_a, ["priceType"]);
  const price = priceType === "regular" ? cartLine.merchandise.priceV2 : cartLine.merchandise.compareAtPriceV2;
  if (price == null) {
    return null;
  }
  return React__default["default"].createElement(Money, __spreadProps(__spreadValues({}, passthroughProps), { money: {
    amount: price.amount * cartLine.quantity,
    currencyCode: price.currencyCode
  } }), props.children);
}
const CartLinePrice = wrapInClientMarker({ name: "CartLinePrice", id: "/Users/Plethora/Documents/CODING-PROJECTS/REACT/hydrogenia/cotton-shop/node_modules/@shopify/hydrogen/dist/esnext/components/CartLinePrice/CartLinePrice.client.js", component: CartLinePrice$1, named: true });
function CartLineProductTitle$1(props) {
  const cartLine = useCartLine();
  const _a = props, { as } = _a, passthroughProps = __objRest(_a, ["as"]);
  const Wrapper = as ? as : "span";
  return React__default["default"].createElement(Wrapper, __spreadValues({}, passthroughProps), cartLine.merchandise.product.title);
}
const CartLineProductTitle = wrapInClientMarker({ name: "CartLineProductTitle", id: "/Users/Plethora/Documents/CODING-PROJECTS/REACT/hydrogenia/cotton-shop/node_modules/@shopify/hydrogen/dist/esnext/components/CartLineProductTitle/CartLineProductTitle.client.js", component: CartLineProductTitle$1, named: true });
function CartLineQuantity$1(props) {
  const cartLine = useCartLine();
  const _a = props, { as } = _a, passthroughProps = __objRest(_a, ["as"]);
  const Wrapper = as ? as : "span";
  return React__default["default"].createElement(Wrapper, __spreadValues({}, passthroughProps), cartLine.quantity);
}
const CartLineQuantity = wrapInClientMarker({ name: "CartLineQuantity", id: "/Users/Plethora/Documents/CODING-PROJECTS/REACT/hydrogenia/cotton-shop/node_modules/@shopify/hydrogen/dist/esnext/components/CartLineQuantity/CartLineQuantity.client.js", component: CartLineQuantity$1, named: true });
function CartLineQuantityAdjustButton(props) {
  const updateLines = useCartLinesUpdateCallback();
  const removeLines = useCartLinesRemoveCallback();
  const { status } = useCart();
  const cartLine = useCartLine();
  const _a = props, { children, adjust } = _a, passthroughProps = __objRest(_a, ["children", "adjust"]);
  return React__default["default"].createElement("button", __spreadValues({ disabled: status !== "idle", onClick: () => {
    if (adjust === "remove") {
      removeLines([cartLine.id]);
      return;
    }
    const quantity = adjust === "decrease" ? cartLine.quantity - 1 : cartLine.quantity + 1;
    updateLines([{ id: cartLine.id, quantity }]);
  } }, passthroughProps), children);
}
function CartLineAttributes$1(props) {
  const cartLine = useCartLine();
  const _a = props, {
    as,
    children
  } = _a, passthroughProps = __objRest(_a, [
    "as",
    "children"
  ]);
  const Wrapper = as ? as : "ul";
  const ChildWrapper = Wrapper === "ul" ? "li" : React.Fragment;
  return /* @__PURE__ */ jsxRuntime.jsx(Wrapper, __spreadProps(__spreadValues({}, passthroughProps), {
    children: cartLine.attributes.map((attribute) => /* @__PURE__ */ jsxRuntime.jsx(ChildWrapper, {
      children: React.cloneElement(children(attribute))
    }, `${attribute.key}-${attribute.value}`))
  }));
}
const CartLineAttributes = wrapInClientMarker({ name: "CartLineAttributes", id: "/Users/Plethora/Documents/CODING-PROJECTS/REACT/hydrogenia/cotton-shop/node_modules/@shopify/hydrogen/dist/esnext/components/CartLineAttributes/CartLineAttributes.client.js", component: CartLineAttributes$1, named: true });
function CartLines(props) {
  const {
    lines
  } = useCart();
  const _a = props, {
    as,
    children
  } = _a, passthroughProps = __objRest(_a, [
    "as",
    "children"
  ]);
  const Wrapper = as !== null && as !== void 0 ? as : React.Fragment;
  const ChildWrapper = Wrapper === "ul" ? "li" : React.Fragment;
  return /* @__PURE__ */ jsxRuntime.jsx(Wrapper, __spreadProps(__spreadValues({}, passthroughProps), {
    children: lines.map((line) => {
      return /* @__PURE__ */ jsxRuntime.jsx(ChildWrapper, {
        children: /* @__PURE__ */ jsxRuntime.jsx(CartLineProvider, {
          line,
          children: typeof children === "function" ? React.cloneElement(children(line)) : children
        })
      }, line.id);
    })
  }));
}
function CartCheckoutButton$1(props) {
  const [requestedCheckout, setRequestedCheckout] = React.useState(false);
  const {
    status
  } = useCart();
  const url = useCartCheckoutUrl();
  const _a = props, {
    children
  } = _a, passthroughProps = __objRest(_a, [
    "children"
  ]);
  React.useEffect(() => {
    if (requestedCheckout && url && status === "idle") {
      window.location.href = url;
    }
  }, [requestedCheckout, status, url]);
  return /* @__PURE__ */ jsxRuntime.jsx("button", __spreadProps(__spreadValues({}, passthroughProps), {
    disabled: requestedCheckout || passthroughProps.disabled,
    onClick: () => setRequestedCheckout(true),
    children
  }));
}
const CartCheckoutButton = wrapInClientMarker({ name: "CartCheckoutButton", id: "/Users/Plethora/Documents/CODING-PROJECTS/REACT/hydrogenia/cotton-shop/node_modules/@shopify/hydrogen/dist/esnext/components/CartCheckoutButton/CartCheckoutButton.client.js", component: CartCheckoutButton$1, named: true });
const URL$1 = "https://cdn.shopify.com/shopifycloud/shop-js/v0.1/client.js";
function ShopPayButton$1({
  variantIds,
  className
}) {
  const [ids, setIds] = React.useState([]);
  const [shopPayLoaded, setShopPayLoaded] = React.useState(false);
  const {
    storeDomain
  } = useShop();
  React.useEffect(() => {
    const ids2 = variantIds.reduce((accumulator, gid) => {
      const id = atob(gid).split("/").pop();
      if (id) {
        accumulator.push(id);
      }
      return accumulator;
    }, []);
    setIds(ids2);
  }, [variantIds]);
  React.useEffect(() => {
    async function loadShopPay() {
      const loaded = await loadScript(URL$1, {
        module: true
      });
      if (!loaded) {
        console.warn("shop-pay-button library did not load");
      }
      setShopPayLoaded(true);
    }
    loadShopPay();
  }, []);
  return /* @__PURE__ */ jsxRuntime.jsx("div", {
    className,
    tabIndex: 1,
    children: shopPayLoaded && /* @__PURE__ */ jsxRuntime.jsx("shop-pay-button", {
      "store-url": `https://${storeDomain}`,
      variants: ids.join(",")
    })
  });
}
const ShopPayButton = wrapInClientMarker({ name: "ShopPayButton", id: "/Users/Plethora/Documents/CODING-PROJECTS/REACT/hydrogenia/cotton-shop/node_modules/@shopify/hydrogen/dist/esnext/components/ShopPayButton/ShopPayButton.client.js", component: ShopPayButton$1, named: true });
function CartShopPayButton$1({
  className
}) {
  const {
    lines
  } = useCart();
  const ids = React.useMemo(() => {
    return lines.map((line) => line.merchandise.id);
  }, [lines]);
  return /* @__PURE__ */ jsxRuntime.jsx(ShopPayButton, {
    className,
    variantIds: ids
  });
}
const CartShopPayButton = wrapInClientMarker({ name: "CartShopPayButton", id: "/Users/Plethora/Documents/CODING-PROJECTS/REACT/hydrogenia/cotton-shop/node_modules/@shopify/hydrogen/dist/esnext/components/CartShopPayButton/CartShopPayButton.client.js", component: CartShopPayButton$1, named: true });
function CartEstimatedCost$1(props) {
  const { estimatedCost } = useCart();
  const _a = props, { amountType = "total", children } = _a, passthroughProps = __objRest(_a, ["amountType", "children"]);
  let amount;
  if (amountType == "total") {
    amount = estimatedCost === null || estimatedCost === void 0 ? void 0 : estimatedCost.totalAmount;
  } else if (amountType == "subtotal") {
    amount = estimatedCost === null || estimatedCost === void 0 ? void 0 : estimatedCost.subtotalAmount;
  } else if (amountType == "tax") {
    amount = estimatedCost === null || estimatedCost === void 0 ? void 0 : estimatedCost.totalTaxAmount;
  } else if (amountType == "duty") {
    amount = estimatedCost === null || estimatedCost === void 0 ? void 0 : estimatedCost.totalDutyAmount;
  }
  if (amount == null) {
    return null;
  }
  return React__default["default"].createElement(Money, __spreadProps(__spreadValues({}, passthroughProps), { money: amount }), children);
}
const CartEstimatedCost = wrapInClientMarker({ name: "CartEstimatedCost", id: "/Users/Plethora/Documents/CODING-PROJECTS/REACT/hydrogenia/cotton-shop/node_modules/@shopify/hydrogen/dist/esnext/components/CartEstimatedCost/CartEstimatedCost.client.js", component: CartEstimatedCost$1, named: true });
const ProductContext = React.createContext(null);
function ProductProvider$1({
  children,
  product,
  initialVariantId
}) {
  const {
    variants,
    options,
    selectedVariant,
    setSelectedVariant,
    selectedOptions,
    setSelectedOption,
    setSelectedOptions,
    isOptionInStock,
    selectedSellingPlan,
    selectedSellingPlanAllocation,
    setSelectedSellingPlan,
    sellingPlanGroups
  } = useProductOptions({
    variants: product.variants,
    initialVariantId
  });
  const metafields = useParsedMetafields(product.metafields);
  const providerValue = React.useMemo(() => {
    return __spreadProps(__spreadValues({}, product), {
      metafields,
      metafieldsConnection: product.metafields,
      media: product.media ? flattenConnection(product.media) : void 0,
      mediaConnection: product.media,
      variants,
      variantsConnection: product.variants,
      images: product.images ? flattenConnection(product.images) : void 0,
      imagesConnection: product.images,
      collections: product.collections ? flattenConnection(product.collections) : void 0,
      collectionsConnection: product.collections,
      options,
      selectedVariant,
      setSelectedVariant,
      selectedOptions,
      setSelectedOption,
      setSelectedOptions,
      isOptionInStock,
      selectedSellingPlan,
      selectedSellingPlanAllocation,
      setSelectedSellingPlan,
      sellingPlanGroups
    });
  }, [isOptionInStock, metafields, options, product, selectedOptions, selectedSellingPlan, selectedSellingPlanAllocation, selectedVariant, sellingPlanGroups, setSelectedOption, setSelectedOptions, setSelectedSellingPlan, setSelectedVariant, variants]);
  return /* @__PURE__ */ jsxRuntime.jsx(ProductContext.Provider, {
    value: providerValue,
    children
  });
}
ProductProvider$1.Fragment = ProductProviderFragment$1;
const ProductProviderFragment = ProductProviderFragment$1;
const ProductProvider = wrapInClientMarker({ name: "ProductProvider", id: "/Users/Plethora/Documents/CODING-PROJECTS/REACT/hydrogenia/cotton-shop/node_modules/@shopify/hydrogen/dist/esnext/components/ProductProvider/ProductProvider.client.js", component: ProductProvider$1, named: true });
function useProduct() {
  const context = React.useContext(ProductContext);
  return context;
}
function ProductDescription$1(props) {
  const product = useProduct();
  if (product == null) {
    throw new Error("Expected a ProductProvider context, but none was found");
  }
  return product.descriptionHtml ? React__default["default"].createElement(RawHtml, __spreadValues({ string: product.descriptionHtml }, props)) : null;
}
const ProductDescription = wrapInClientMarker({ name: "ProductDescription", id: "/Users/Plethora/Documents/CODING-PROJECTS/REACT/hydrogenia/cotton-shop/node_modules/@shopify/hydrogen/dist/esnext/components/ProductDescription/ProductDescription.client.js", component: ProductDescription$1, named: true });
function ProductTitle$1(props) {
  const product = useProduct();
  if (product == null) {
    throw new Error("Expected a ProductProvider context, but none was found");
  }
  const _a = props, { as } = _a, passthroughProps = __objRest(_a, ["as"]);
  const Wrapper = as ? as : "span";
  return product.title ? React__default["default"].createElement(Wrapper, __spreadValues({}, passthroughProps), product.title) : null;
}
const ProductTitle = wrapInClientMarker({ name: "ProductTitle", id: "/Users/Plethora/Documents/CODING-PROJECTS/REACT/hydrogenia/cotton-shop/node_modules/@shopify/hydrogen/dist/esnext/components/ProductTitle/ProductTitle.client.js", component: ProductTitle$1, named: true });
function SelectedVariantPrice$1(props) {
  const product = useProduct();
  const _a = props, { priceType = "regular" } = _a, passthroughProps = __objRest(_a, ["priceType"]);
  if (product == null) {
    throw new Error("Expected a ProductProvider context, but none was found");
  }
  const selectedVariant = product.selectedVariant;
  const price = priceType === "regular" ? selectedVariant === null || selectedVariant === void 0 ? void 0 : selectedVariant.priceV2 : selectedVariant === null || selectedVariant === void 0 ? void 0 : selectedVariant.compareAtPriceV2;
  if (price == null) {
    return null;
  }
  return React__default["default"].createElement(Money, __spreadProps(__spreadValues({}, passthroughProps), { money: price }), props.children);
}
const SelectedVariantPrice = wrapInClientMarker({ name: "SelectedVariantPrice", id: "/Users/Plethora/Documents/CODING-PROJECTS/REACT/hydrogenia/cotton-shop/node_modules/@shopify/hydrogen/dist/esnext/components/SelectedVariantPrice/SelectedVariantPrice.client.js", component: SelectedVariantPrice$1, named: true });
function SelectedVariantAddToCartButton$1(props) {
  var _a, _b;
  const product = useProduct();
  if (product == null) {
    throw new Error("Expected a Product context, but none was found");
  }
  const _a2 = props, { children, quantity, attributes } = _a2, passthroughProps = __objRest(_a2, ["children", "quantity", "attributes"]);
  return React__default["default"].createElement(AddToCartButton, __spreadProps(__spreadValues({}, passthroughProps), { variantID: (_b = (_a = product.selectedVariant) === null || _a === void 0 ? void 0 : _a.id) !== null && _b !== void 0 ? _b : "", quantity: quantity !== null && quantity !== void 0 ? quantity : 1, disabled: !product.selectedVariant || passthroughProps.disabled, attributes }), children);
}
const SelectedVariantAddToCartButton = wrapInClientMarker({ name: "SelectedVariantAddToCartButton", id: "/Users/Plethora/Documents/CODING-PROJECTS/REACT/hydrogenia/cotton-shop/node_modules/@shopify/hydrogen/dist/esnext/components/SelectedVariantAddToCartButton/SelectedVariantAddToCartButton.client.js", component: SelectedVariantAddToCartButton$1, named: true });
function BuyNowButton$1(props) {
  const {
    createInstantCheckout,
    checkoutUrl
  } = useInstantCheckout();
  const [loading, setLoading] = React.useState(false);
  const _a = props, {
    quantity,
    variantId,
    attributes,
    children
  } = _a, passthroughProps = __objRest(_a, [
    "quantity",
    "variantId",
    "attributes",
    "children"
  ]);
  React.useEffect(() => {
    if (checkoutUrl) {
      window.location.href = checkoutUrl;
    }
  }, [checkoutUrl]);
  const handleBuyNow = React.useCallback(() => {
    setLoading(true);
    createInstantCheckout({
      lines: [{
        quantity: quantity !== null && quantity !== void 0 ? quantity : 1,
        merchandiseId: variantId,
        attributes
      }]
    });
  }, [setLoading, createInstantCheckout, quantity, variantId, attributes]);
  return /* @__PURE__ */ jsxRuntime.jsx("button", __spreadProps(__spreadValues({
    disabled: loading !== null && loading !== void 0 ? loading : passthroughProps.disabled
  }, passthroughProps), {
    onClick: handleBuyNow,
    children
  }));
}
const BuyNowButton = wrapInClientMarker({ name: "BuyNowButton", id: "/Users/Plethora/Documents/CODING-PROJECTS/REACT/hydrogenia/cotton-shop/node_modules/@shopify/hydrogen/dist/esnext/components/BuyNowButton/BuyNowButton.client.js", component: BuyNowButton$1, named: true });
function SelectedVariantBuyNowButton(props) {
  var _a, _b;
  const product = useProduct();
  if (product == null) {
    throw new Error("Expected a Product context, but none was found");
  }
  const _a2 = props, { children, quantity, attributes } = _a2, passthroughProps = __objRest(_a2, ["children", "quantity", "attributes"]);
  return React__default["default"].createElement(BuyNowButton, __spreadValues({ quantity: quantity !== null && quantity !== void 0 ? quantity : 1, attributes, variantId: (_b = (_a = product.selectedVariant) === null || _a === void 0 ? void 0 : _a.id) !== null && _b !== void 0 ? _b : "", disabled: !product.selectedVariant || passthroughProps.disabled }, passthroughProps), children);
}
function SelectedVariantShopPayButton$1({
  className
}) {
  var _a;
  const product = useProduct();
  if (product == null) {
    throw new Error("Expected a ProductProvider context, but none was found");
  }
  const id = (_a = product === null || product === void 0 ? void 0 : product.selectedVariant) === null || _a === void 0 ? void 0 : _a.id;
  return id ? React__default["default"].createElement(ShopPayButton, { className, variantIds: [id] }) : null;
}
const SelectedVariantShopPayButton = wrapInClientMarker({ name: "SelectedVariantShopPayButton", id: "/Users/Plethora/Documents/CODING-PROJECTS/REACT/hydrogenia/cotton-shop/node_modules/@shopify/hydrogen/dist/esnext/components/SelectedVariantShopPayButton/SelectedVariantShopPayButton.client.js", component: SelectedVariantShopPayButton$1, named: true });
function SelectedVariantImage$1(props) {
  var _a;
  const product = useProduct();
  if (product == null) {
    throw new Error("Expected a Product context, but none was found");
  }
  const _a2 = props, { options } = _a2, passthroughProps = __objRest(_a2, ["options"]);
  return ((_a = product.selectedVariant) === null || _a === void 0 ? void 0 : _a.image) ? React__default["default"].createElement(Image, __spreadValues({ image: product.selectedVariant.image, options }, passthroughProps)) : null;
}
const SelectedVariantImage = wrapInClientMarker({ name: "SelectedVariantImage", id: "/Users/Plethora/Documents/CODING-PROJECTS/REACT/hydrogenia/cotton-shop/node_modules/@shopify/hydrogen/dist/esnext/components/SelectedVariantImage/SelectedVariantImage.client.js", component: SelectedVariantImage$1, named: true });
const LocalizationContext = React.createContext(null);
function useLocalization$1() {
  const context = React.useContext(LocalizationContext);
  if (context == null) {
    throw new Error("No Localization Context available");
  }
  return context;
}
function useAvailableCountries() {
  const context = useLocalization$1();
  return context.availableCountries;
}
function useLocalization() {
  const context = React.useContext(LocalizationContext);
  if (context == null) {
    throw new Error("No Localization Context available");
  }
  return context;
}
function useCountry() {
  const context = useLocalization();
  return [context.country, context.setCountry];
}
function ProductPrice$1(props) {
  var _a, _b, _c, _d;
  const product = useProduct();
  const _a2 = props, { priceType = "regular", valueType = "min" } = _a2, passthroughProps = __objRest(_a2, ["priceType", "valueType"]);
  if (product == null) {
    throw new Error("Expected a ProductProvider context, but none was found");
  }
  let price;
  if (priceType === "compareAt") {
    if (valueType === "max") {
      price = (_a = product.compareAtPriceRange) === null || _a === void 0 ? void 0 : _a.maxVariantPrice;
    } else {
      price = (_b = product.compareAtPriceRange) === null || _b === void 0 ? void 0 : _b.minVariantPrice;
    }
  } else {
    if (valueType === "max") {
      price = (_c = product.priceRange) === null || _c === void 0 ? void 0 : _c.maxVariantPrice;
    } else {
      price = (_d = product.priceRange) === null || _d === void 0 ? void 0 : _d.minVariantPrice;
    }
  }
  if (price == null) {
    return null;
  }
  return React__default["default"].createElement(Money, __spreadProps(__spreadValues({}, passthroughProps), { money: price }), props.children);
}
const ProductPrice = wrapInClientMarker({ name: "ProductPrice", id: "/Users/Plethora/Documents/CODING-PROJECTS/REACT/hydrogenia/cotton-shop/node_modules/@shopify/hydrogen/dist/esnext/components/ProductPrice/ProductPrice.client.js", component: ProductPrice$1, named: true });
function ProductMetafield$1(props) {
  const product = useProduct();
  if (product == null) {
    throw new Error("Expected a ProductProvider context, but none was found");
  }
  if (product.metafields == null) {
    console.warn("No metafields available for product");
    return null;
  }
  const _a = props, { namespace, keyName } = _a, passthroughProps = __objRest(_a, ["namespace", "keyName"]);
  const field = product.metafields.find((metafield) => metafield.namespace === namespace && metafield.key === keyName);
  return field ? React__default["default"].createElement(Metafield, __spreadValues({ metafield: field }, passthroughProps)) : null;
}
const ProductMetafield = wrapInClientMarker({ name: "ProductMetafield", id: "/Users/Plethora/Documents/CODING-PROJECTS/REACT/hydrogenia/cotton-shop/node_modules/@shopify/hydrogen/dist/esnext/components/ProductMetafield/ProductMetafield.client.js", component: ProductMetafield$1, named: true });
function UnitPrice$1(props) {
  const _a = props, { unitPrice, unitPriceMeasurement, children, as } = _a, passthroughProps = __objRest(_a, ["unitPrice", "unitPriceMeasurement", "children", "as"]);
  const Wrapper = as !== null && as !== void 0 ? as : "div";
  const unitPriceMoneyObject = useMoney(unitPrice);
  const unitPriceAndMeasurementObject = __spreadValues(__spreadValues({}, unitPriceMoneyObject), unitPriceMeasurement);
  return React__default["default"].createElement(Wrapper, __spreadValues({}, passthroughProps), typeof children === "function" ? children(unitPriceAndMeasurementObject) : React__default["default"].createElement(React__default["default"].Fragment, null, React__default["default"].createElement(Money, { money: unitPrice }), "/", unitPriceMeasurement.referenceUnit));
}
UnitPrice$1.Fragment = UnitPriceFragment;
const UnitPrice = wrapInClientMarker({ name: "UnitPrice", id: "/Users/Plethora/Documents/CODING-PROJECTS/REACT/hydrogenia/cotton-shop/node_modules/@shopify/hydrogen/dist/esnext/components/UnitPrice/UnitPrice.client.js", component: UnitPrice$1, named: true });
function SelectedVariantUnitPrice$1(props) {
  var _a, _b;
  const product = useProduct();
  if (product == null) {
    throw new Error("Expected a ProductProvider context, but none was found");
  }
  return ((_a = product.selectedVariant) === null || _a === void 0 ? void 0 : _a.unitPrice) && ((_b = product.selectedVariant) === null || _b === void 0 ? void 0 : _b.unitPriceMeasurement) ? React__default["default"].createElement(UnitPrice, __spreadProps(__spreadValues({}, props), { unitPrice: product.selectedVariant.unitPrice, unitPriceMeasurement: product.selectedVariant.unitPriceMeasurement })) : null;
}
const SelectedVariantUnitPrice = wrapInClientMarker({ name: "SelectedVariantUnitPrice", id: "/Users/Plethora/Documents/CODING-PROJECTS/REACT/hydrogenia/cotton-shop/node_modules/@shopify/hydrogen/dist/esnext/components/SelectedVariantUnitPrice/SelectedVariantUnitPrice.client.js", component: SelectedVariantUnitPrice$1, named: true });
function SelectedVariantMetafield$1(props) {
  var _a, _b, _c, _d;
  const product = useProduct();
  if (product == null) {
    throw new Error("Expected a Product context, but none was found");
  }
  const _a2 = props, { keyName, namespace } = _a2, passthroughProps = __objRest(_a2, ["keyName", "namespace"]);
  const metafield = (_d = (_c = (_b = (_a = product.selectedVariant) === null || _a === void 0 ? void 0 : _a.metafields) === null || _b === void 0 ? void 0 : _b.edges) === null || _c === void 0 ? void 0 : _c.find(({ node }) => {
    return node.namespace === namespace && node.key === keyName;
  })) === null || _d === void 0 ? void 0 : _d.node;
  return metafield ? React__default["default"].createElement(Metafield, __spreadValues({ metafield }, passthroughProps)) : null;
}
const SelectedVariantMetafield = wrapInClientMarker({ name: "SelectedVariantMetafield", id: "/Users/Plethora/Documents/CODING-PROJECTS/REACT/hydrogenia/cotton-shop/node_modules/@shopify/hydrogen/dist/esnext/components/SelectedVariantMetafield/SelectedVariantMetafield.client.js", component: SelectedVariantMetafield$1, named: true });
function CartLineSelectedOptions$1(props) {
  const cartLine = useCartLine();
  const _a = props, {
    as,
    children
  } = _a, passthroughProps = __objRest(_a, [
    "as",
    "children"
  ]);
  const Wrapper = as ? as : "ul";
  const ChildWrapper = Wrapper === "ul" ? "li" : React.Fragment;
  return /* @__PURE__ */ jsxRuntime.jsx(Wrapper, __spreadProps(__spreadValues({}, passthroughProps), {
    children: cartLine.merchandise.selectedOptions.map((option) => /* @__PURE__ */ jsxRuntime.jsx(ChildWrapper, {
      children: React.cloneElement(children(option))
    }, `${option.name}-${option.value}`))
  }));
}
const CartLineSelectedOptions = wrapInClientMarker({ name: "CartLineSelectedOptions", id: "/Users/Plethora/Documents/CODING-PROJECTS/REACT/hydrogenia/cotton-shop/node_modules/@shopify/hydrogen/dist/esnext/components/CartLineSelectedOptions/CartLineSelectedOptions.client.js", component: CartLineSelectedOptions$1, named: true });
const Product$1 = ProductProvider;
Product$1.Description = ProductDescription;
Product$1.Price = ProductPrice;
Product$1.Title = ProductTitle;
Product$1.Metafield = ProductMetafield;
Product$1.SelectedVariant = {
  AddToCartButton: SelectedVariantAddToCartButton,
  BuyNowButton: SelectedVariantBuyNowButton,
  ShopPayButton: SelectedVariantShopPayButton,
  Price: SelectedVariantPrice,
  Image: SelectedVariantImage,
  UnitPrice: SelectedVariantUnitPrice,
  Metafield: SelectedVariantMetafield
};
const CartLine = CartLineProvider;
CartLine.Image = CartLineImage;
CartLine.Price = CartLinePrice;
CartLine.ProductTitle = CartLineProductTitle;
CartLine.Quantity = CartLineQuantity;
CartLine.QuantityAdjustButton = CartLineQuantityAdjustButton;
CartLine.SelectedOptions = CartLineSelectedOptions;
CartLine.Attributes = CartLineAttributes;
function LocalizationClientProvider$1({
  localization,
  children
}) {
  const {
    setServerState
  } = useServerState();
  const [country, setCountry] = React.useState(localization.country);
  const [availableCountries] = React.useState(localization.availableCountries);
  const setter = React.useCallback((country2) => {
    setCountry(country2);
    setServerState("country", country2);
  }, [setServerState]);
  const contextValue = React.useMemo(() => {
    return {
      country,
      setCountry: setter,
      availableCountries
    };
  }, [country, setter, availableCountries]);
  return /* @__PURE__ */ jsxRuntime.jsx(LocalizationContext.Provider, {
    value: contextValue,
    children
  });
}
var LocalizationClientProvider = wrapInClientMarker({ name: "LocalizationClientProvider", id: "/Users/Plethora/Documents/CODING-PROJECTS/REACT/hydrogenia/cotton-shop/node_modules/@shopify/hydrogen/dist/esnext/components/LocalizationProvider/LocalizationClientProvider.client.js", component: LocalizationClientProvider$1, named: false });
function getConfig() {
  return globalThis.__config || {};
}
function useShopQuery({ query, variables = {}, cache = {} }) {
  if (isClient()) {
    throw new Error("Shopify Storefront API requests should only be made from the server.");
  }
  const { storeDomain, storefrontToken, graphqlApiVersion } = useShop();
  const body = graphqlRequestBody(query, variables);
  const url = `https://${storeDomain}/api/${graphqlApiVersion}/graphql.json`;
  const request = new Request(url, {
    method: "POST",
    headers: {
      "X-Shopify-Storefront-Access-Token": storefrontToken,
      "content-type": "application/json"
    },
    body
  });
  const { data } = useQuery([storeDomain, graphqlApiVersion, body], fetchBuilder(request), { cache });
  if (data === null || data === void 0 ? void 0 : data.errors) {
    const errors = data.errors instanceof Array ? data.errors : [data.errors];
    for (const error of errors) {
      console.error("GraphQL Error", error);
      if (getConfig().dev) {
        throw new Error(error.message);
      }
    }
    console.error(`GraphQL errors: ${errors.length}`);
  }
  return data;
}
function LocalizationProvider({ children }) {
  const { data: { localization } } = useShopQuery({
    query: Localization,
    cache: { maxAge: 60 * 60, staleWhileRevalidate: 60 * 60 * 23 }
  });
  return React__default["default"].createElement(LocalizationClientProvider, { localization }, children);
}
function ServerStateRouter() {
  const { setServerState, pending, serverState } = useServerState();
  const [isNavigating, setIsNavigating] = React.useState(false);
  const location = reactRouterDom.useLocation();
  React.useEffect(() => {
    if (serverState.pathname !== location.pathname) {
      setIsNavigating(true);
      setServerState("pathname", location.pathname);
    }
  }, [location.pathname, setServerState]);
  React.useEffect(() => {
    if (isNavigating && !pending) {
      window.scrollTo(0, 0);
      setIsNavigating(false);
    }
  }, [isNavigating, pending]);
  return null;
}
wrapInClientMarker({ name: "ServerStateRouter", id: "/Users/Plethora/Documents/CODING-PROJECTS/REACT/hydrogenia/cotton-shop/node_modules/@shopify/hydrogen/dist/esnext/foundation/Router/ServerStateRouter.client.js", component: ServerStateRouter, named: true });
const CartContext = React.createContext(null);
function CartUIProvider$1({
  children
}) {
  const [open, setOpen] = React.useState(false);
  const openCart = React.useCallback(() => {
    setOpen(true);
  }, [setOpen]);
  const closeCart = React.useCallback(() => {
    setOpen(false);
  }, [setOpen]);
  const toggleCart = React.useCallback(() => {
    setOpen(!open);
  }, [setOpen, open]);
  const contextValue = React.useMemo(() => {
    return {
      isCartOpen: open,
      openCart,
      closeCart,
      toggleCart
    };
  }, [open, openCart, closeCart, toggleCart]);
  return /* @__PURE__ */ jsxRuntime.jsx(CartContext.Provider, {
    value: contextValue,
    children
  });
}
function useCartUI() {
  return React.useContext(CartContext);
}
var CartUIProvider = wrapInClientMarker({
  name: "CartUIProvider",
  id: "/Users/Plethora/Documents/CODING-PROJECTS/REACT/hydrogenia/cotton-shop/src/components/CartUIProvider.client.jsx",
  component: CartUIProvider$1,
  named: false
});
function CartIcon() {
  return /* @__PURE__ */ jsxRuntime.jsxs("svg", {
    "aria-hidden": "true",
    width: "40",
    height: "40",
    viewBox: "0 0 40 40",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/* @__PURE__ */ jsxRuntime.jsx("path", {
      d: "M26.5894 12H14.4106C13.8945 12 13.4632 12.3928 13.415 12.9067L12.205 25.8133C12.095 26.9865 13.018 28 14.1963 28H26.8037C27.982 28 28.905 26.9865 28.795 25.8133L27.585 12.9067C27.5368 12.3928 27.1055 12 26.5894 12Z",
      stroke: "#1F2937",
      strokeWidth: "2",
      strokeMiterlimit: "10",
      strokeLinecap: "round"
    }), /* @__PURE__ */ jsxRuntime.jsx("path", {
      d: "M17 12V14.9895C17 17.0075 18.6359 18.6434 20.6539 18.6434V18.6434C22.6718 18.6434 24.3077 17.0075 24.3077 14.9895V12",
      stroke: "#1F2937",
      strokeWidth: "2"
    }), /* @__PURE__ */ jsxRuntime.jsx("path", {
      d: "M24 11L24 9.5C24 7.567 22.433 6 20.5 6V6C18.567 6 17 7.567 17 9.5L17 11",
      stroke: "#1F2937",
      strokeWidth: "2"
    })]
  });
}
function CartIconWithItems$1() {
  const itemCount = useCartLinesTotalQuantity();
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [/* @__PURE__ */ jsxRuntime.jsxs("div", {
      className: "relative",
      children: [/* @__PURE__ */ jsxRuntime.jsx(CartIcon, {}), /* @__PURE__ */ jsxRuntime.jsx("div", {
        className: `bg-blue-700 text-xs rounded-full leading-none text-white absolute bottom-3 right-1 flex items-center justify-center transform translate-y-1/2 transition-all ${itemCount > 0 ? "h-4 w-4" : "h-0 w-0 overflow-hidden"}`,
        "aria-hidden": true,
        children: itemCount > 0 ? itemCount : null
      })]
    }), /* @__PURE__ */ jsxRuntime.jsxs("span", {
      className: "sr-only",
      children: ["Cart, ", itemCount, " items"]
    })]
  });
}
var CartIconWithItems = wrapInClientMarker({
  name: "CartIconWithItems",
  id: "/Users/Plethora/Documents/CODING-PROJECTS/REACT/hydrogenia/cotton-shop/src/components/CartIconWithItems.client.jsx",
  component: CartIconWithItems$1,
  named: false
});
function CartToggle$1({
  handleClick
}) {
  const cartUI = useCartUI();
  if (cartUI == null) {
    throw new Error("CartToggle must be a descendent of a CartUIProvider");
  }
  const {
    isCartOpen,
    toggleCart
  } = cartUI;
  return /* @__PURE__ */ jsxRuntime.jsxs("button", {
    type: "button",
    "aria-expanded": isCartOpen,
    "aria-controls": "cart",
    onClick: () => {
      toggleCart();
      handleClick();
    },
    children: [/* @__PURE__ */ jsxRuntime.jsx(CartIconWithItems, {}), /* @__PURE__ */ jsxRuntime.jsx("span", {
      className: "sr-only",
      children: "Open cart"
    })]
  });
}
var CartToggle = wrapInClientMarker({
  name: "CartToggle",
  id: "/Users/Plethora/Documents/CODING-PROJECTS/REACT/hydrogenia/cotton-shop/src/components/CartToggle.client.jsx",
  component: CartToggle$1,
  named: false
});
function CurrencySelector$1() {
  const countries = useAvailableCountries();
  const [selectedCountry, setSelectedCountry] = useCountry();
  const setCountry = React.useCallback((isoCode) => {
    setSelectedCountry(countries.find((country) => country.isoCode === isoCode));
  }, [countries, setSelectedCountry]);
  return /* @__PURE__ */ jsxRuntime.jsx("div", {
    className: "hidden lg:block",
    children: /* @__PURE__ */ jsxRuntime.jsx(react.Listbox, {
      onChange: setCountry,
      children: ({
        open
      }) => /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, {
        children: [/* @__PURE__ */ jsxRuntime.jsxs(react.Listbox.Button, {
          className: "font-medium text-sm h-8 p-2 flex items-center",
          children: [/* @__PURE__ */ jsxRuntime.jsx("span", {
            className: "mr-4",
            children: selectedCountry.currency.isoCode
          }), /* @__PURE__ */ jsxRuntime.jsx(ArrowIcon$2, {
            isOpen: open
          })]
        }), /* @__PURE__ */ jsxRuntime.jsx(react.Listbox.Options, {
          className: "absolute z-10 mt-2",
          children: /* @__PURE__ */ jsxRuntime.jsxs("div", {
            className: "bg-white p-4 rounded-lg drop-shadow-2xl",
            children: [/* @__PURE__ */ jsxRuntime.jsx(react.Listbox.Option, {
              disabled: true,
              className: "p-2 text-md text-left font-medium uppercase",
              children: "Currency"
            }), countries.map((country) => {
              const isSelected = country.isoCode === selectedCountry.isoCode;
              return /* @__PURE__ */ jsxRuntime.jsx(react.Listbox.Option, {
                value: country.isoCode,
                children: ({
                  active
                }) => /* @__PURE__ */ jsxRuntime.jsxs("div", {
                  className: `w-36 py-2 px-3 flex justify-between items-center text-left cursor-pointer rounded
                          ${active ? "bg-gray-200" : null}`,
                  children: [country.currency.isoCode, isSelected ? /* @__PURE__ */ jsxRuntime.jsx(CheckIcon$1, {}) : null]
                })
              }, country.isoCode);
            })]
          })
        })]
      })
    })
  });
}
function CheckIcon$1() {
  return /* @__PURE__ */ jsxRuntime.jsx("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    children: /* @__PURE__ */ jsxRuntime.jsx("path", {
      d: "M7 10L9 12L13 8M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z",
      stroke: "#354CF6",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })
  });
}
function ArrowIcon$2({
  isOpen
}) {
  return /* @__PURE__ */ jsxRuntime.jsx("svg", {
    className: `transition-transform duration-300 ${isOpen ? "rotate-180" : null}`,
    "aria-hidden": "true",
    width: "10",
    height: "6",
    viewBox: "0 0 10 6",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ jsxRuntime.jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M0.292893 0.292893C0.683416 -0.097631 1.31658 -0.097631 1.7071 0.292893L4.99999 3.58579L8.29288 0.292893C8.6834 -0.0976311 9.31657 -0.0976311 9.70709 0.292893C10.0976 0.683417 10.0976 1.31658 9.70709 1.70711L5.7071 5.70711C5.31657 6.09763 4.68341 6.09763 4.29289 5.70711L0.292893 1.70711C-0.0976309 1.31658 -0.0976309 0.683417 0.292893 0.292893Z",
      fill: "#374151"
    })
  });
}
var CurrencySelector = wrapInClientMarker({
  name: "CurrencySelector",
  id: "/Users/Plethora/Documents/CODING-PROJECTS/REACT/hydrogenia/cotton-shop/src/components/CurrencySelector.client.jsx",
  component: CurrencySelector$1,
  named: false
});
const CheckIcon = wrapInClientMarker({
  name: "CheckIcon",
  id: "/Users/Plethora/Documents/CODING-PROJECTS/REACT/hydrogenia/cotton-shop/src/components/CurrencySelector.client.jsx",
  component: CheckIcon$1,
  named: true
});
const ArrowIcon$1 = wrapInClientMarker({
  name: "ArrowIcon",
  id: "/Users/Plethora/Documents/CODING-PROJECTS/REACT/hydrogenia/cotton-shop/src/components/CurrencySelector.client.jsx",
  component: ArrowIcon$2,
  named: true
});
function Navigation$1({
  collections
}) {
  return /* @__PURE__ */ jsxRuntime.jsx("nav", {
    className: "hidden lg:block text-center",
    children: /* @__PURE__ */ jsxRuntime.jsx("ul", {
      className: "md:flex items-center justify-center",
      children: collections.map((collection) => /* @__PURE__ */ jsxRuntime.jsx("li", {
        children: /* @__PURE__ */ jsxRuntime.jsx(Link, {
          to: `/collections/${collection.handle}`,
          className: "block p-4 hover:opacity-80 text-pink-600",
          children: collection.title
        })
      }, collection.id))
    })
  });
}
var Navigation = wrapInClientMarker({
  name: "Navigation",
  id: "/Users/Plethora/Documents/CODING-PROJECTS/REACT/hydrogenia/cotton-shop/src/components/Navigation.client.jsx",
  component: Navigation$1,
  named: false
});
function MobileCurrencySelector$1() {
  const countries = useAvailableCountries();
  const [selectedCountry, setSelectedCountry] = useCountry();
  const setCountry = React.useCallback((isoCode) => {
    setSelectedCountry(countries.find((country) => country.isoCode === isoCode));
  }, [countries, setSelectedCountry]);
  return /* @__PURE__ */ jsxRuntime.jsx("div", {
    className: "mt-8 rounded border border-gray-200 w-full",
    children: /* @__PURE__ */ jsxRuntime.jsx(react.Listbox, {
      onChange: setCountry,
      children: ({
        open
      }) => /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, {
        children: [/* @__PURE__ */ jsxRuntime.jsxs(react.Listbox.Button, {
          className: "w-full flex justify-between text-sm items-center py-5 px-7",
          children: [selectedCountry.currency.isoCode, /* @__PURE__ */ jsxRuntime.jsx(ArrowIcon$1, {
            isOpen: open
          })]
        }), /* @__PURE__ */ jsxRuntime.jsxs(react.Listbox.Options, {
          className: "w-full px-3 pb-2 text-lg",
          children: [/* @__PURE__ */ jsxRuntime.jsx(react.Listbox.Option, {
            disabled: true,
            className: "font-medium px-4 pb-4 w-full text-left uppercase",
            children: "Currency"
          }), countries.map((country) => {
            const isSelected = country.isoCode === selectedCountry.isoCode;
            return /* @__PURE__ */ jsxRuntime.jsx(react.Listbox.Option, {
              value: country.isoCode,
              children: ({
                active
              }) => /* @__PURE__ */ jsxRuntime.jsxs("div", {
                className: `py-2 px-4 rounded flex justify-between items-center text-left w-full cursor-pointer ${active ? "bg-gray-100" : null}`,
                children: [country.currency.isoCode, isSelected ? /* @__PURE__ */ jsxRuntime.jsx(CheckIcon, {}) : null]
              })
            }, country.isoCode);
          })]
        })]
      })
    })
  });
}
var MobileCurrencySelector = wrapInClientMarker({
  name: "MobileCurrencySelector",
  id: "/Users/Plethora/Documents/CODING-PROJECTS/REACT/hydrogenia/cotton-shop/src/components/MobileCurrencySelector.client.jsx",
  component: MobileCurrencySelector$1,
  named: false
});
function OpenIcon() {
  return /* @__PURE__ */ jsxRuntime.jsxs("svg", {
    width: "24",
    height: "20",
    viewBox: "0 0 24 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/* @__PURE__ */ jsxRuntime.jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M0.800049 1.9999C0.800049 1.11625 1.51639 0.399902 2.40005 0.399902H21.6C22.4837 0.399902 23.2001 1.11625 23.2001 1.9999C23.2001 2.88356 22.4837 3.5999 21.6 3.5999H2.40005C1.51639 3.5999 0.800049 2.88356 0.800049 1.9999Z",
      fill: "black"
    }), /* @__PURE__ */ jsxRuntime.jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M0.800049 9.9999C0.800049 9.11625 1.51639 8.3999 2.40005 8.3999H21.6C22.4837 8.3999 23.2001 9.11625 23.2001 9.9999C23.2001 10.8836 22.4837 11.5999 21.6 11.5999H2.40005C1.51639 11.5999 0.800049 10.8836 0.800049 9.9999Z",
      fill: "black"
    }), /* @__PURE__ */ jsxRuntime.jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M0.800049 17.9999C0.800049 17.1162 1.51639 16.3999 2.40005 16.3999H21.6C22.4837 16.3999 23.2001 17.1162 23.2001 17.9999C23.2001 18.8836 22.4837 19.5999 21.6 19.5999H2.40005C1.51639 19.5999 0.800049 18.8836 0.800049 17.9999Z",
      fill: "black"
    })]
  });
}
function MobileNavigation$1({
  collections,
  isOpen,
  setIsOpen
}) {
  const OpenFocusTrap = isOpen ? react.FocusTrap : React.Fragment;
  return /* @__PURE__ */ jsxRuntime.jsx("div", {
    className: "lg:hidden",
    children: /* @__PURE__ */ jsxRuntime.jsxs(OpenFocusTrap, {
      children: [/* @__PURE__ */ jsxRuntime.jsx("button", {
        type: "button",
        className: "flex justify-center items-center w-7 h-full",
        onClick: () => setIsOpen((previousIsOpen) => !previousIsOpen),
        children: isOpen ? /* @__PURE__ */ jsxRuntime.jsx(CloseIcon, {}) : /* @__PURE__ */ jsxRuntime.jsx(OpenIcon, {})
      }), isOpen ? /* @__PURE__ */ jsxRuntime.jsxs("div", {
        className: "absolute -left-0 top-20 w-full h-screen z-10 bg-pink-100 px-4 md:px-12 py-7",
        children: [/* @__PURE__ */ jsxRuntime.jsx("ul", {
          children: collections.map((collection) => /* @__PURE__ */ jsxRuntime.jsx("li", {
            className: "border-b border-gray-300",
            children: /* @__PURE__ */ jsxRuntime.jsxs(Link, {
              className: "group py-5 text-gray-900 flex items-center justify-between",
              to: `/collections/${collection.handle}`,
              onClick: () => setIsOpen(false),
              children: [collection.title, /* @__PURE__ */ jsxRuntime.jsx(ArrowRightIcon, {
                className: "hidden group-hover:block"
              })]
            })
          }, collection.id))
        }), /* @__PURE__ */ jsxRuntime.jsx(MobileCurrencySelector, {})]
      }) : null]
    })
  });
}
function CloseIcon() {
  return /* @__PURE__ */ jsxRuntime.jsx("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ jsxRuntime.jsx("path", {
      d: "M1 17L17 1M1 1L17 17",
      stroke: "black",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })
  });
}
function ArrowRightIcon({
  className
}) {
  return /* @__PURE__ */ jsxRuntime.jsx("svg", {
    className,
    width: "7",
    height: "12",
    viewBox: "0 0 7 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ jsxRuntime.jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M0.999762 12C0.743762 12 0.487762 11.902 0.292762 11.707C-0.0982383 11.316 -0.0982383 10.684 0.292762 10.293L4.58576 6.00001L0.292762 1.70701C-0.0982383 1.31601 -0.0982383 0.684006 0.292762 0.293006C0.683762 -0.0979941 1.31576 -0.0979941 1.70676 0.293006L6.70676 5.29301C7.09776 5.68401 7.09776 6.31601 6.70676 6.70701L1.70676 11.707C1.51176 11.902 1.25576 12 0.999762 12Z",
      fill: "black"
    })
  });
}
var MobileNavigation = wrapInClientMarker({
  name: "MobileNavigation",
  id: "/Users/Plethora/Documents/CODING-PROJECTS/REACT/hydrogenia/cotton-shop/src/components/MobileNavigation.client.jsx",
  component: MobileNavigation$1,
  named: false
});
function Header$1({
  collections,
  storeName
}) {
  const [isMobileNavOpen, setIsMobileNavOpen] = React.useState(false);
  return /* @__PURE__ */ jsxRuntime.jsx("header", {
    className: "h-20 lg:h-32",
    role: "banner",
    children: /* @__PURE__ */ jsxRuntime.jsx("div", {
      className: `fixed z-20 h-20 lg:h-32 w-full border-b border-gray-200 px-6 md:px-8 md:py-6 lg:pt-8 lg:pb-0 mx-auto bg-white ${isMobileNavOpen ? "" : "bg-opacity-95"}`,
      children: /* @__PURE__ */ jsxRuntime.jsxs("div", {
        className: "h-full flex lg:flex-col place-content-between",
        children: [/* @__PURE__ */ jsxRuntime.jsxs("div", {
          className: "text-center w-full flex justify-between items-center",
          children: [/* @__PURE__ */ jsxRuntime.jsx(CurrencySelector, {}), /* @__PURE__ */ jsxRuntime.jsx(MobileNavigation, {
            collections,
            isOpen: isMobileNavOpen,
            setIsOpen: setIsMobileNavOpen
          }), /* @__PURE__ */ jsxRuntime.jsx(Link, {
            className: "font-black text-3xl tracking-widest",
            to: "/",
            children: storeName
          }), /* @__PURE__ */ jsxRuntime.jsx(CartToggle, {
            handleClick: () => {
              if (isMobileNavOpen)
                setIsMobileNavOpen(false);
            }
          })]
        }), /* @__PURE__ */ jsxRuntime.jsx(Navigation, {
          collections,
          storeName
        })]
      })
    })
  });
}
var Header = wrapInClientMarker({
  name: "Header",
  id: "/Users/Plethora/Documents/CODING-PROJECTS/REACT/hydrogenia/cotton-shop/src/components/Header.client.jsx",
  component: Header$1,
  named: false
});
var twitter = "/assets/twitter.237e9bb6.png";
var insta = "/assets/insta.fc2850f7.png";
function Footer({
  collection,
  product
}) {
  return /* @__PURE__ */ jsxRuntime.jsxs("footer", {
    role: "contentinfo",
    children: [/* @__PURE__ */ jsxRuntime.jsx("div", {
      className: "relative bg-white border-t border-b border-black border-opacity-5",
      children: /* @__PURE__ */ jsxRuntime.jsx("div", {
        className: "mx-auto max-w-7xl px-4 py-14 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-12"
      })
    }), /* @__PURE__ */ jsxRuntime.jsxs("div", {
      className: "py-6 px-4 md:px-8 bg-purple-50",
      children: [/* @__PURE__ */ jsxRuntime.jsx("div", {
        className: "box",
        children: /* @__PURE__ */ jsxRuntime.jsx("a", {
          href: "https://twitter.com/EnemaTreasure",
          children: /* @__PURE__ */ jsxRuntime.jsx("img", {
            src: twitter,
            alt: "logo"
          })
        })
      }), /* @__PURE__ */ jsxRuntime.jsx("div", {
        className: "box",
        children: /* @__PURE__ */ jsxRuntime.jsx("a", {
          href: "https://www.instagram.com/bensmith.io/?hl=en",
          children: /* @__PURE__ */ jsxRuntime.jsx("img", {
            src: insta,
            alt: "logo"
          })
        })
      }), /* @__PURE__ */ jsxRuntime.jsx("p", {
        className: "text-gray-400",
        children: "\xA9 2021 cottonsmith"
      })]
    })]
  });
}
const DEFAULT_CLASSES = "block m-0 w-full items-center justify-center uppercase font-medium text-center px-6 py-4 rounded disabled:border-gray-300 disabled:bg-gray-300 disabled:cursor-not-allowed";
const VARIANT_CLASSES = {
  primary: "text-gray-700 bg-purple-50 active:bg-purple-200",
  secondary: "bg-pink-200 active:bg-pink-300 border border-black"
};
const BUTTON_PRIMARY_CLASSES = `${DEFAULT_CLASSES} ${VARIANT_CLASSES.primary}`;
const BUTTON_SECONDARY_CLASSES = `${DEFAULT_CLASSES} ${VARIANT_CLASSES.secondary}`;
const ExternalIcon = () => /* @__PURE__ */ jsxRuntime.jsxs("svg", {
  className: "fill-current text-white ml-3",
  width: "15",
  height: "14",
  viewBox: "0 0 15 14",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/* @__PURE__ */ jsxRuntime.jsx("path", {
    d: "M8.11963 0.000976562C7.56734 0.000976562 7.11963 0.448692 7.11963 1.00098C7.11963 1.55326 7.56734 2.00098 8.11963 2.00098H10.7054L4.41252 8.29387C4.022 8.68439 4.022 9.31756 4.41252 9.70808C4.80305 10.0986 5.43621 10.0986 5.82674 9.70808L12.1196 3.41519V6.00098C12.1196 6.55326 12.5673 7.00098 13.1196 7.00098C13.6719 7.00098 14.1196 6.55326 14.1196 6.00098V1.00098C14.1196 0.448692 13.6719 0.000976562 13.1196 0.000976562H8.11963Z"
  }), /* @__PURE__ */ jsxRuntime.jsx("path", {
    d: "M2.11963 2.00098C1.01506 2.00098 0.119629 2.89641 0.119629 4.00098V12.001C0.119629 13.1055 1.01506 14.001 2.11963 14.001H10.1196C11.2242 14.001 12.1196 13.1055 12.1196 12.001V9.00098C12.1196 8.44869 11.6719 8.00098 11.1196 8.00098C10.5673 8.00098 10.1196 8.44869 10.1196 9.00098V12.001H2.11963V4.00098L5.11963 4.00098C5.67191 4.00098 6.11963 3.55326 6.11963 3.00098C6.11963 2.44869 5.67191 2.00098 5.11963 2.00098H2.11963Z"
  })]
});
function Button$1({
  className,
  label,
  handleClick,
  url,
  variant = "primary",
  passthroughProps
}) {
  const classes = `${DEFAULT_CLASSES} ${VARIANT_CLASSES[variant]} ${className}`;
  const isExternal = url ? url.indexOf("://") > 0 || url.indexOf("//") === 0 : false;
  if (isExternal) {
    return /* @__PURE__ */ jsxRuntime.jsxs("a", __spreadProps(__spreadValues({
      href: url,
      className: classes
    }, passthroughProps), {
      children: [label, /* @__PURE__ */ jsxRuntime.jsx(ExternalIcon, {})]
    }));
  }
  if (handleClick) {
    return /* @__PURE__ */ jsxRuntime.jsx("button", {
      className: classes,
      onClick: handleClick,
      type: "button",
      children: label
    });
  }
  return /* @__PURE__ */ jsxRuntime.jsx(Link, __spreadProps(__spreadValues({
    to: url,
    className: classes
  }, passthroughProps), {
    children: label
  }));
}
var Button = wrapInClientMarker({
  name: "Button",
  id: "/Users/Plethora/Documents/CODING-PROJECTS/REACT/hydrogenia/cotton-shop/src/components/Button.client.jsx",
  component: Button$1,
  named: false
});
function Cart$1() {
  const {
    isCartOpen,
    closeCart
  } = useCartUI();
  const itemCount = useCartLinesTotalQuantity();
  return /* @__PURE__ */ jsxRuntime.jsxs(react.Dialog, {
    open: isCartOpen,
    onClose: closeCart,
    children: [/* @__PURE__ */ jsxRuntime.jsx(react.Dialog.Overlay, {
      className: "fixed z-20 inset-0 bg-gray-50 opacity-75"
    }), /* @__PURE__ */ jsxRuntime.jsxs("div", {
      className: `absolute flex flex-col md:block z-20 top-0 left-0 right-0 bottom-0 md:top-7 h-full md:left-auto md:right-7 md:bottom-auto md:h-auto md:max-h-[calc(100vh-56px)] bg-gray-50 w-full md:w-[470px] rounded-b-lg shadow-2xl ${itemCount === 0 ? "overflow-hidden" : "overflow-y-scroll"}`,
      children: [/* @__PURE__ */ jsxRuntime.jsx(CartHeader, {}), itemCount === 0 ? /* @__PURE__ */ jsxRuntime.jsx(CartEmpty, {}) : /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, {
        children: [/* @__PURE__ */ jsxRuntime.jsx(CartItems, {}), /* @__PURE__ */ jsxRuntime.jsx(CartFooter, {})]
      })]
    })]
  });
}
function CartHeader() {
  const {
    closeCart
  } = useCartUI();
  return /* @__PURE__ */ jsxRuntime.jsxs("header", {
    className: "border-b border-gray-300 bg-white py-3 px-6 flex justify-between items-center sticky top-0",
    children: [/* @__PURE__ */ jsxRuntime.jsxs("button", {
      type: "button",
      onClick: closeCart,
      children: [/* @__PURE__ */ jsxRuntime.jsx(ArrowIcon, {}), /* @__PURE__ */ jsxRuntime.jsx("span", {
        className: "sr-only",
        children: "Close cart"
      })]
    }), /* @__PURE__ */ jsxRuntime.jsx("span", {
      className: "text-xs text-gray-500",
      children: "Free shipping on orders over $50"
    }), /* @__PURE__ */ jsxRuntime.jsx(CartIconWithItems, {})]
  });
}
function CartItems() {
  return /* @__PURE__ */ jsxRuntime.jsxs("div", {
    className: "px-7 flex-grow",
    role: "table",
    "aria-label": "Shopping cart",
    children: [/* @__PURE__ */ jsxRuntime.jsxs("div", {
      role: "row",
      className: "sr-only",
      children: [/* @__PURE__ */ jsxRuntime.jsx("div", {
        role: "columnheader",
        children: "Product image"
      }), /* @__PURE__ */ jsxRuntime.jsx("div", {
        role: "columnheader",
        children: "Product details"
      }), /* @__PURE__ */ jsxRuntime.jsx("div", {
        role: "columnheader",
        children: "Price"
      })]
    }), /* @__PURE__ */ jsxRuntime.jsx(CartLines, {
      children: ({
        merchandise
      }) => /* @__PURE__ */ jsxRuntime.jsxs("div", {
        role: "row",
        className: "flex py-7 border-b last:border-b-0 border-gray-300 text-gray-900",
        children: [/* @__PURE__ */ jsxRuntime.jsx("div", {
          role: "cell",
          className: "flex-shrink-0 mr-7",
          children: /* @__PURE__ */ jsxRuntime.jsx(Link, {
            to: `products/${merchandise.product.handle}`,
            children: /* @__PURE__ */ jsxRuntime.jsx(CartLine.Image, {
              className: "bg-white border border-black border-opacity-5 rounded-xl ",
              options: {
                width: 98,
                height: 98,
                crop: "center"
              }
            })
          })
        }), /* @__PURE__ */ jsxRuntime.jsxs("div", {
          role: "cell",
          className: "flex flex-col w-full justify-between items-start flex-grow-1 mr-4",
          children: [/* @__PURE__ */ jsxRuntime.jsx(Link, {
            to: `products/${merchandise.product.handle}`,
            className: "hover:underline",
            children: /* @__PURE__ */ jsxRuntime.jsx(CartLine.ProductTitle, {
              className: "text-lg font-medium"
            })
          }), /* @__PURE__ */ jsxRuntime.jsx(CartLine.SelectedOptions, {
            as: "ul",
            className: "text-xs space-y-1",
            children: ({
              name,
              value
            }) => /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, {
              children: [name, ": ", value]
            })
          }), /* @__PURE__ */ jsxRuntime.jsx(CartLine.Attributes, {
            as: "ul",
            className: "text-sm space-y-1",
            children: ({
              key,
              value
            }) => /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, {
              children: [key, ": ", value]
            })
          }), /* @__PURE__ */ jsxRuntime.jsx(CartItemQuantity, {})]
        }), /* @__PURE__ */ jsxRuntime.jsxs("div", {
          role: "cell",
          className: "flex flex-col justify-between items-end",
          children: [/* @__PURE__ */ jsxRuntime.jsx(CartLine.QuantityAdjustButton, {
            adjust: "remove",
            "aria-label": "Remove from cart",
            className: "disabled:pointer-events-all disabled:cursor-wait",
            children: /* @__PURE__ */ jsxRuntime.jsx("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              className: "h-5 w-5",
              viewBox: "0 0 20 20",
              fill: "currentColor",
              children: /* @__PURE__ */ jsxRuntime.jsx("path", {
                fillRule: "evenodd",
                d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
                clipRule: "evenodd"
              })
            })
          }), /* @__PURE__ */ jsxRuntime.jsx(CartLine.Price, {
            className: "text-lg"
          })]
        })]
      })
    })]
  });
}
function CartItemQuantity() {
  return /* @__PURE__ */ jsxRuntime.jsxs("div", {
    className: "flex border rounded border-gray-300 items-center overflow-auto mt-2",
    children: [/* @__PURE__ */ jsxRuntime.jsx(CartLine.QuantityAdjustButton, {
      adjust: "decrease",
      "aria-label": "Decrease quantity",
      className: "p-2 disabled:pointer-events-all disabled:cursor-wait",
      children: /* @__PURE__ */ jsxRuntime.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: "h-5 w-5 text-gray-400",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        children: /* @__PURE__ */ jsxRuntime.jsx("path", {
          fillRule: "evenodd",
          d: "M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z",
          clipRule: "evenodd"
        })
      })
    }), /* @__PURE__ */ jsxRuntime.jsx(CartLine.Quantity, {
      as: "div",
      className: "p-2 text-gray-900 text-xs text-center"
    }), /* @__PURE__ */ jsxRuntime.jsx(CartLine.QuantityAdjustButton, {
      adjust: "increase",
      "aria-label": "Increase quantity",
      className: "p-2 text-gray-400 disabled:pointer-events-all disabled:cursor-wait",
      children: /* @__PURE__ */ jsxRuntime.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: "h-5 w-5",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        children: /* @__PURE__ */ jsxRuntime.jsx("path", {
          fillRule: "evenodd",
          d: "M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z",
          clipRule: "evenodd"
        })
      })
    })]
  });
}
function CartFooter() {
  return /* @__PURE__ */ jsxRuntime.jsx("footer", {
    className: "bottom-0 sticky pb-8 border-t border-black border-opacity-5",
    children: /* @__PURE__ */ jsxRuntime.jsxs("div", {
      className: "relative h-60 bg-white text-gray-900 p-7",
      children: [/* @__PURE__ */ jsxRuntime.jsxs("div", {
        role: "table",
        "aria-label": "Cost summary",
        children: [/* @__PURE__ */ jsxRuntime.jsxs("div", {
          role: "row",
          className: "flex justify-between",
          children: [/* @__PURE__ */ jsxRuntime.jsx("span", {
            className: "font-semibold",
            role: "rowheader",
            children: "Subtotal"
          }), /* @__PURE__ */ jsxRuntime.jsx(CartEstimatedCost, {
            amountType: "subtotal",
            role: "cell",
            className: "text-right "
          })]
        }), /* @__PURE__ */ jsxRuntime.jsxs("div", {
          role: "row",
          className: "flex justify-between mt-2",
          children: [/* @__PURE__ */ jsxRuntime.jsx("span", {
            className: "font-semibold",
            role: "rowheader",
            children: "Shipping"
          }), /* @__PURE__ */ jsxRuntime.jsx("span", {
            role: "cell",
            className: "uppercase",
            children: "Free"
          })]
        })]
      }), /* @__PURE__ */ jsxRuntime.jsx(CartShopPayButton, {
        className: "flex my-4 justify-center w-full bg-[#5a31f4] py-2 rounded-md"
      }), /* @__PURE__ */ jsxRuntime.jsx(CartCheckoutButton, {
        className: BUTTON_PRIMARY_CLASSES,
        children: "Checkout"
      })]
    })
  });
}
function CartEmpty() {
  const {
    closeCart
  } = useCartUI();
  return /* @__PURE__ */ jsxRuntime.jsxs("div", {
    className: "p-7 flex flex-col",
    children: [/* @__PURE__ */ jsxRuntime.jsx("p", {
      className: "mb-4 text-lg text-gray-500 text-center",
      children: "Your cart is empty"
    }), /* @__PURE__ */ jsxRuntime.jsx("button", {
      type: "button",
      onClick: closeCart,
      className: BUTTON_PRIMARY_CLASSES,
      children: "Continue Shopping"
    })]
  });
}
function ArrowIcon() {
  return /* @__PURE__ */ jsxRuntime.jsx("svg", {
    width: "20",
    height: "17",
    viewBox: "0 0 20 17",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ jsxRuntime.jsx("path", {
      d: "M12 1.5L19 8.5M19 8.5L12 15.5M19 8.5L1 8.5",
      stroke: "black",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })
  });
}
var Cart = wrapInClientMarker({
  name: "Cart",
  id: "/Users/Plethora/Documents/CODING-PROJECTS/REACT/hydrogenia/cotton-shop/src/components/Cart.client.jsx",
  component: Cart$1,
  named: false
});
function Layout({
  children,
  hero
}) {
  const {
    data
  } = useShopQuery({
    query: QUERY$8,
    variables: {
      numCollections: 3
    },
    cache: {
      maxAge: 60,
      staleWhileRevalidate: 60 * 10
    }
  });
  const {
    isCartOpen,
    closeCart
  } = useCartUI();
  const collections = data ? flattenConnection(data.collections) : null;
  const products = data ? flattenConnection(data.products) : null;
  const storeName = data ? data.shop.name : "";
  return /* @__PURE__ */ jsxRuntime.jsxs(LocalizationProvider, {
    children: [/* @__PURE__ */ jsxRuntime.jsx("div", {
      className: "absolute top-0 left-0",
      children: /* @__PURE__ */ jsxRuntime.jsx("a", {
        href: "#mainContent",
        className: "p-4 focus:block sr-only focus:not-sr-only",
        children: "Skip to content"
      })
    }), /* @__PURE__ */ jsxRuntime.jsxs("div", {
      className: "min-h-screen max-w-screen text-pink-600",
      children: [/* @__PURE__ */ jsxRuntime.jsx(Header, {
        collections,
        storeName
      }), /* @__PURE__ */ jsxRuntime.jsxs("div", {
        children: [/* @__PURE__ */ jsxRuntime.jsx("div", {
          className: `z-50 fixed top-0 bottom-0 left-0 right-0 bg-black transition-opacity duration-400 ${isCartOpen ? "opacity-20" : "opacity-0 pointer-events-none"}`,
          onClick: isCartOpen ? closeCart : null
        }), /* @__PURE__ */ jsxRuntime.jsx(Cart, {})]
      }), /* @__PURE__ */ jsxRuntime.jsxs("main", {
        role: "main",
        id: "mainContent",
        className: "relative bg-pink-50",
        children: [hero, /* @__PURE__ */ jsxRuntime.jsx("div", {
          className: "mx-auto max-w-7xl p-4 md:py-5 md:px-8",
          children
        })]
      }), /* @__PURE__ */ jsxRuntime.jsx(Footer, {
        collection: collections[0],
        product: products[0]
      })]
    })]
  });
}
const QUERY$8 = gql__default["default"]`
  query indexContent($numCollections: Int!) {
    shop {
      name
    }
    collections(first: $numCollections) {
      edges {
        node {
          description
          handle
          id
          title
          image {
            ...ImageFragment
          }
        }
      }
    }
    products(first: 1) {
      edges {
        node {
          handle
        }
      }
    }
  }
  ${Image.Fragment}
`;
function FeaturedCollection({
  collection
}) {
  return collection ? /* @__PURE__ */ jsxRuntime.jsxs("div", {
    className: "shadow-xl rounded grid grid-cols-1 lg:grid-cols-2 items-center bg-purple-50 overflow-hidden",
    children: [collection.image ? /* @__PURE__ */ jsxRuntime.jsx(Image, {
      width: "622",
      height: "465",
      image: collection.image
    }) : null, /* @__PURE__ */ jsxRuntime.jsxs("div", {
      className: "px-10 py-10 lg:py-0",
      children: [/* @__PURE__ */ jsxRuntime.jsx("h2", {
        className: "text-pink-600 text-3xl font-bold mb-5",
        children: collection.title
      }), /* @__PURE__ */ jsxRuntime.jsx("p", {
        className: "text-xl text-gray-500 mb-6",
        children: collection.description
      }), /* @__PURE__ */ jsxRuntime.jsx(Link, {
        to: `/collections/${collection.handle}`,
        className: "inline-block bg-pink-200 text-gray-900 active:bg-pink-300 border border-black text-lg font-medium rounded-md py-4 px-16 uppercase",
        children: "Shop Collection"
      })]
    })]
  }) : null;
}
function MoneyCompareAtPrice$1({
  money
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(Money, {
    money,
    children: ({
      amount,
      currencyNarrowSymbol
    }) => /* @__PURE__ */ jsxRuntime.jsxs("span", {
      className: "line-through text-lg mr-2.5 text-pink-600 ",
      children: [currencyNarrowSymbol, amount]
    })
  });
}
var MoneyCompareAtPrice = wrapInClientMarker({
  name: "MoneyCompareAtPrice",
  id: "/Users/Plethora/Documents/CODING-PROJECTS/REACT/hydrogenia/cotton-shop/src/components/MoneyCompareAtPrice.client.jsx",
  component: MoneyCompareAtPrice$1,
  named: false
});
function MoneyPrice$1({
  money
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(Money, {
    className: "text-pink-600 text-md font-black",
    money,
    children: ({
      amount,
      currencyNarrowSymbol,
      currencyCode
    }) => /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, {
      children: [currencyNarrowSymbol, amount]
    })
  });
}
var MoneyPrice = wrapInClientMarker({
  name: "MoneyPrice",
  id: "/Users/Plethora/Documents/CODING-PROJECTS/REACT/hydrogenia/cotton-shop/src/components/MoneyPrice.client.jsx",
  component: MoneyPrice$1,
  named: false
});
function ProductCard({
  product
}) {
  const selectedVariant = product.variants.edges[0].node;
  if (selectedVariant == null) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntime.jsx("div", {
    className: "text-md mb-4 relative ",
    children: /* @__PURE__ */ jsxRuntime.jsxs(Link, {
      to: `/products/${product.handle}`,
      children: [/* @__PURE__ */ jsxRuntime.jsxs("div", {
        className: "bg-yellow-50 border-2 border-purple-50 rounded-full mb-2 relative flex items-center justify-center overflow-hidden object-cover h-96",
        children: [selectedVariant.image ? /* @__PURE__ */ jsxRuntime.jsx(Image, {
          className: "bg-white absolute w-full h-full transition-all duration-600 ease-in-out transform bg-center bg-cover object-center object-contain hover:scale-105",
          image: selectedVariant.image
        }) : null, !(selectedVariant == null ? void 0 : selectedVariant.availableForSale) && /* @__PURE__ */ jsxRuntime.jsx("div", {
          className: "absolute top-3 left-3 rounded-3xl text-xs bg-black text-white py-3 px-4",
          children: "Out of stock"
        })]
      }), /* @__PURE__ */ jsxRuntime.jsx("span", {
        className: "text-black font-semibold mb-0.5",
        children: product.title
      }), product.vendor && /* @__PURE__ */ jsxRuntime.jsx("p", {
        className: "text-gray-900 font-medium text-sm mb-0.5",
        children: product.vendor
      }), /* @__PURE__ */ jsxRuntime.jsxs("div", {
        className: "flex ",
        children: [selectedVariant.compareAtPriceV2 && /* @__PURE__ */ jsxRuntime.jsx(MoneyCompareAtPrice, {
          money: selectedVariant.compareAtPriceV2
        }), /* @__PURE__ */ jsxRuntime.jsx(MoneyPrice, {
          money: selectedVariant.priceV2
        })]
      })]
    })
  });
}
function Welcome() {
  const {
    data
  } = useShopQuery({
    query: QUERY$7
  });
  data ? data.shop.name : "";
  const products = data && flattenConnection(data.products);
  const collections = data && flattenConnection(data.collections);
  products ? products[0].handle : "";
  products && products.length;
  collections[0] ? collections[0].handle : "";
  collections && collections.length;
  return /* @__PURE__ */ jsxRuntime.jsx("div", {});
}
const QUERY$7 = gql__default["default"]`
  query welcomeContent {
    shop {
      name
    }
    products(first: 250) {
      edges {
        node {
          handle
        }
      }
    }
    collections(first: 250) {
      edges {
        node {
          handle
        }
      }
    }
  }
`;
function GradientBackground() {
  return /* @__PURE__ */ jsxRuntime.jsxs("div", {
    className: "fixed top-0 w-full h-3/5 overflow-hidden",
    children: [/* @__PURE__ */ jsxRuntime.jsx("div", {
      className: "absolute w-full h-full bg-gradient-to-t from-pink-50 z-10"
    }), /* @__PURE__ */ jsxRuntime.jsxs("svg", {
      viewBox: "0 0 960 743",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      className: "filter blur-[30px]",
      "aria-hidden": "true",
      children: [/* @__PURE__ */ jsxRuntime.jsx("defs", {
        children: /* @__PURE__ */ jsxRuntime.jsx("path", {
          fill: "#fff",
          d: "M0 0h960v540H0z",
          id: "reuse-0"
        })
      }), /* @__PURE__ */ jsxRuntime.jsxs("g", {
        clipPath: "url(#a)",
        children: [/* @__PURE__ */ jsxRuntime.jsx("use", {
          xlinkHref: "#reuse-0"
        }), /* @__PURE__ */ jsxRuntime.jsx("path", {
          d: "M960 0H0v743h960V0Z",
          fill: "#B190B1"
        }), /* @__PURE__ */ jsxRuntime.jsx("path", {
          d: "M831 380c200.48 0 363-162.521 363-363s-162.52-363-363-363c-200.479 0-363 162.521-363 363s162.521 363 363 363Z",
          fill: "#FDF8E7"
        }), /* @__PURE__ */ jsxRuntime.jsx("path", {
          d: "M579 759c200.479 0 363-162.521 363-363S779.479 33 579 33 216 195.521 216 396s162.521 363 363 363Z",
          fill: "#B190B1"
        }), /* @__PURE__ */ jsxRuntime.jsx("path", {
          d: "M178 691c200.479 0 363-162.521 363-363S378.479-35 178-35c-200.4794 0-363 162.521-363 363s162.5206 363 363 363Z",
          fill: "#FDF8E7"
        }), /* @__PURE__ */ jsxRuntime.jsx("path", {
          d: "M490 414c200.479 0 363-162.521 363-363S690.479-312 490-312 127-149.479 127 51s162.521 363 363 363Z",
          fill: "#FDF8E7"
        }), /* @__PURE__ */ jsxRuntime.jsx("path", {
          d: "M354 569c200.479 0 363-162.521 363-363 0-200.47937-162.521-363-363-363S-9 5.52063-9 206c0 200.479 162.521 363 363 363Z",
          fill: "#B190B1"
        }), /* @__PURE__ */ jsxRuntime.jsx("path", {
          d: "M630 532c200.479 0 363-162.521 363-363 0-200.4794-162.521-363-363-363S267-31.4794 267 169c0 200.479 162.521 363 363 363Z",
          fill: "#B190B1"
        })]
      }), /* @__PURE__ */ jsxRuntime.jsx("path", {
        fill: "#fff",
        d: "M0 540h960v203H0z"
      }), /* @__PURE__ */ jsxRuntime.jsx("defs", {
        children: /* @__PURE__ */ jsxRuntime.jsx("clipPath", {
          id: "a",
          children: /* @__PURE__ */ jsxRuntime.jsx("use", {
            xlinkHref: "#reuse-0"
          })
        })
      })]
    })]
  });
}
function Index({
  country = {
    isoCode: "US"
  }
}) {
  const {
    data
  } = useShopQuery({
    query: QUERY$6,
    variables: {
      country: country.isoCode
    }
  });
  const collections = data ? flattenConnection(data.collections) : [];
  const featuredProductsCollection = collections[0];
  const featuredProducts = featuredProductsCollection ? flattenConnection(featuredProductsCollection.products) : null;
  const featuredCollection = collections && collections.length > 1 ? collections[1] : collections[0];
  return /* @__PURE__ */ jsxRuntime.jsx(Layout, {
    hero: /* @__PURE__ */ jsxRuntime.jsx(GradientBackground, {}),
    children: /* @__PURE__ */ jsxRuntime.jsxs("div", {
      className: "relative mb-12",
      children: [/* @__PURE__ */ jsxRuntime.jsx(Welcome, {}), /* @__PURE__ */ jsxRuntime.jsx("div", {
        className: "bg-white p-12 shadow-xl rounded mb-10",
        children: featuredProductsCollection ? /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, {
          children: [/* @__PURE__ */ jsxRuntime.jsx("div", {
            className: "flex justify-between items-center mb-8 text-md font-medium",
            children: /* @__PURE__ */ jsxRuntime.jsx("span", {
              className: "hidden lowercase md:inline-flex ",
              children: /* @__PURE__ */ jsxRuntime.jsx(Link, {
                to: `/collections/${featuredProductsCollection.handle}`,
                className: "text-pink-600 hover:underline",
                children: "Shop all"
              })
            })
          }), /* @__PURE__ */ jsxRuntime.jsx("div", {
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8",
            children: featuredProducts.map((product) => /* @__PURE__ */ jsxRuntime.jsx("div", {
              children: /* @__PURE__ */ jsxRuntime.jsx(ProductCard, {
                product
              })
            }, product.id))
          }), /* @__PURE__ */ jsxRuntime.jsx("div", {
            className: "md:hidden text-center",
            children: /* @__PURE__ */ jsxRuntime.jsx(Link, {
              to: `/collections/${featuredCollection.handle}`,
              className: "text-pink-600",
              children: "Shop all"
            })
          })]
        }) : null
      }), /* @__PURE__ */ jsxRuntime.jsx(FeaturedCollection, {
        collection: featuredCollection
      })]
    })
  });
}
const QUERY$6 = gql__default["default"]`
  query indexContent(
    $country: CountryCode
    $numCollections: Int = 2
    $numProducts: Int = 3
    $numProductMetafields: Int = 0
    $numProductVariants: Int = 250
    $numProductMedia: Int = 1
    $numProductVariantMetafields: Int = 10
    $numProductVariantSellingPlanAllocations: Int = 0
    $numProductSellingPlanGroups: Int = 0
    $numProductSellingPlans: Int = 0
  ) @inContext(country: $country) {
    collections(first: $numCollections) {
      edges {
        node {
          descriptionHtml
          description
          handle
          id
          title
          image {
            ...ImageFragment
          }
          products(first: $numProducts) {
            edges {
              node {
                ...ProductProviderFragment
              }
            }
          }
        }
      }
    }
  }

  ${ProductProviderFragment}
  ${Image.Fragment}
`;
var __glob_10_0 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Index
});
function Sitemap({
  response
}) {
  response.doNotStream();
  const {
    data
  } = useShopQuery({
    query: QUERY$5
  });
  response.headers.set("content-type", "application/xml");
  return response.send(shopSitemap(data));
}
function shopSitemap(data) {
  return `
    <urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
    >
      ${flattenConnection(data.products).map((product) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i;
    return `
          <url>
            <loc>
              https://hydrogen-preview.myshopify.com/products/${product.handle}
            </loc>
            <lastmod>${product.updatedAt}</lastmod>
            <changefreq>daily</changefreq>
            <image:image>
              <image:loc>
                ${(_d = (_c = (_b = (_a = product == null ? void 0 : product.images) == null ? void 0 : _a.edges) == null ? void 0 : _b[0]) == null ? void 0 : _c.node) == null ? void 0 : _d.url}
              </image:loc>
              <image:title>
                ${(_i = (_h = (_g = (_f = (_e = product == null ? void 0 : product.images) == null ? void 0 : _e.edges) == null ? void 0 : _f[0]) == null ? void 0 : _g.node) == null ? void 0 : _h.altText) != null ? _i : ""}
              </image:title>
              <image:caption />
            </image:image>
          </url>
        `;
  }).join("")}
    </urlset>`;
}
const QUERY$5 = gql__default["default"]`
  query Products {
    products(first: 100) {
      edges {
        node {
          updatedAt
          handle
          images(first: 1) {
            edges {
              node {
                url
                altText
              }
            }
          }
        }
      }
    }
  }
`;
var __glob_10_1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Sitemap
});
function LoadMoreProducts$1({
  startingCount
}) {
  const {
    pending,
    serverState,
    setServerState
  } = useServerState();
  return /* @__PURE__ */ jsxRuntime.jsx("div", {
    className: "flex justify-center h-14",
    children: pending ? /* @__PURE__ */ jsxRuntime.jsx(SpinnerIcon, {}) : /* @__PURE__ */ jsxRuntime.jsx("button", {
      type: "button",
      disabled: pending,
      className: `uppercase border-4 bg-white border-black text-black text-center px-5 py-3 font-mono font-bold drop-shadow-lg active:drop-shadow-none hover:bg-black hover:text-white hover:border-white ${pending ? "opacity-50" : void 0}`,
      onClick: () => {
        setServerState("collectionProductCount", serverState.collectionProductCount ? serverState.collectionProductCount + 24 : startingCount + 1);
      },
      children: "Load more"
    })
  });
}
function SpinnerIcon() {
  return /* @__PURE__ */ jsxRuntime.jsxs("svg", {
    width: "54",
    height: "54",
    viewBox: "0 0 54 54",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "animate-spin",
    children: [/* @__PURE__ */ jsxRuntime.jsx("path", {
      d: "M43.6663 27.0002C43.6663 36.2049 36.2044 43.6668 26.9997 43.6668C17.7949 43.6668 10.333 36.2049 10.333 27.0002C10.333 17.7954 17.7949 10.3335 26.9997 10.3335C36.2044 10.3335 43.6663 17.7954 43.6663 27.0002ZM13.6663 27.0002C13.6663 34.364 19.6359 40.3335 26.9997 40.3335C34.3635 40.3335 40.333 34.364 40.333 27.0002C40.333 19.6364 34.3635 13.6668 26.9997 13.6668C19.6359 13.6668 13.6663 19.6364 13.6663 27.0002Z",
      fill: "#E6E7EB"
    }), /* @__PURE__ */ jsxRuntime.jsx("path", {
      d: "M26.9997 10.3332C29.1884 10.3332 31.3556 10.7643 33.3777 11.6018C35.3998 12.4394 37.2371 13.6671 38.7848 15.2147C40.3324 16.7624 41.5601 18.5997 42.3977 20.6218C43.2352 22.6439 43.6663 24.8111 43.6663 26.9998L40.333 26.9998C40.333 25.2489 39.9881 23.5151 39.3181 21.8974C38.648 20.2797 37.6659 18.8099 36.4278 17.5717C35.1896 16.3336 33.7198 15.3515 32.1021 14.6814C30.4844 14.0114 28.7506 13.6665 26.9997 13.6665L26.9997 10.3332Z",
      fill: "black"
    })]
  });
}
var LoadMoreProducts = wrapInClientMarker({
  name: "LoadMoreProducts",
  id: "/Users/Plethora/Documents/CODING-PROJECTS/REACT/hydrogenia/cotton-shop/src/components/LoadMoreProducts.client.jsx",
  component: LoadMoreProducts$1,
  named: false
});
function NotFoundHero() {
  return /* @__PURE__ */ jsxRuntime.jsx("div", {
    className: "py-10 border-b border-gray-200",
    children: /* @__PURE__ */ jsxRuntime.jsxs("div", {
      className: "max-w-3xl text-center mx-4 md:mx-auto",
      children: [/* @__PURE__ */ jsxRuntime.jsx("h1", {
        className: "text-gray-700 text-5xl font-bold mb-4",
        children: "We've lost this page"
      }), /* @__PURE__ */ jsxRuntime.jsx("p", {
        className: "text-xl m-8 text-gray-500",
        children: "We couldn\u2019t find the page you\u2019re looking for. Try checking the URL or heading back to the home page."
      }), /* @__PURE__ */ jsxRuntime.jsx(Button, {
        className: "w-full md:mx-auto md:w-96",
        url: "/",
        label: "Take me to the home page"
      })]
    })
  });
}
function NotFound({
  country = {
    isoCode: "US"
  }
}) {
  const {
    data
  } = useShopQuery({
    query: QUERY$4,
    variables: {
      country: country.isoCode,
      numProductMetafields: 0,
      numProductVariants: 250,
      numProductMedia: 0,
      numProductVariantMetafields: 0,
      numProductVariantSellingPlanAllocations: 0,
      numProductSellingPlanGroups: 0,
      numProductSellingPlans: 0
    }
  });
  const products = data ? flattenConnection(data.products) : [];
  return /* @__PURE__ */ jsxRuntime.jsxs(Layout, {
    children: [/* @__PURE__ */ jsxRuntime.jsx(NotFoundHero, {}), /* @__PURE__ */ jsxRuntime.jsxs("div", {
      className: "my-8",
      children: [/* @__PURE__ */ jsxRuntime.jsx("p", {
        className: "mb-8 text-lg text-black font-medium uppercase",
        children: "Products you might like"
      }), /* @__PURE__ */ jsxRuntime.jsx("div", {
        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16",
        children: products.map((product) => /* @__PURE__ */ jsxRuntime.jsx("div", {
          children: /* @__PURE__ */ jsxRuntime.jsx(ProductCard, {
            product
          })
        }, product.id))
      })]
    })]
  });
}
const QUERY$4 = gql__default["default"]`
  query NotFoundProductDetails(
    $country: CountryCode
    $numProductMetafields: Int!
    $numProductVariants: Int!
    $numProductMedia: Int!
    $numProductVariantMetafields: Int!
    $numProductVariantSellingPlanAllocations: Int!
    $numProductSellingPlanGroups: Int!
    $numProductSellingPlans: Int!
  ) @inContext(country: $country) {
    products(first: 3) {
      edges {
        node {
          ...ProductProviderFragment
        }
      }
    }
  }

  ${ProductProviderFragment}
`;
function Collection({
  country = {
    isoCode: "US"
  },
  collectionProductCount = 24
}) {
  const {
    handle
  } = reactRouterDom.useParams();
  const {
    data
  } = useShopQuery({
    query: QUERY$3,
    variables: {
      handle,
      country: country.isoCode,
      numProducts: collectionProductCount
    }
  });
  if ((data == null ? void 0 : data.collection) == null) {
    return /* @__PURE__ */ jsxRuntime.jsx(NotFound, {});
  }
  const collection = data.collection;
  const products = flattenConnection(collection.products);
  const hasNextPage = data.collection.products.pageInfo.hasNextPage;
  return /* @__PURE__ */ jsxRuntime.jsxs(Layout, {
    children: [/* @__PURE__ */ jsxRuntime.jsx("h1", {
      className: "font-bold text-4xl md:text-5xl text-gray-900 mb-6 mt-6",
      children: collection.title
    }), /* @__PURE__ */ jsxRuntime.jsx(RawHtml, {
      string: collection.descriptionHtml,
      className: "text-2xl"
    }), /* @__PURE__ */ jsxRuntime.jsxs("p", {
      className: "text-sm text-gray-500 mt-5 mb-5",
      children: [products.length, " ", products.length > 1 ? "products" : "product"]
    }), /* @__PURE__ */ jsxRuntime.jsx("ul", {
      className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16",
      children: products.map((product) => /* @__PURE__ */ jsxRuntime.jsx("li", {
        children: /* @__PURE__ */ jsxRuntime.jsx(ProductCard, {
          product
        })
      }, product.id))
    }), hasNextPage && /* @__PURE__ */ jsxRuntime.jsx(LoadMoreProducts, {
      startingCount: collectionProductCount
    })]
  });
}
const QUERY$3 = gql__default["default"]`
  query CollectionDetails(
    $handle: String!
    $country: CountryCode
    $numProducts: Int!
    $numProductMetafields: Int = 0
    $numProductVariants: Int = 250
    $numProductMedia: Int = 6
    $numProductVariantMetafields: Int = 0
    $numProductVariantSellingPlanAllocations: Int = 0
    $numProductSellingPlanGroups: Int = 0
    $numProductSellingPlans: Int = 0
  ) @inContext(country: $country) {
    collection(handle: $handle) {
      id
      title
      descriptionHtml

      products(first: $numProducts) {
        edges {
          node {
            vendor
            ...ProductProviderFragment
          }
        }
        pageInfo {
          hasNextPage
        }
      }
    }
  }

  ${MediaFileFragment}
  ${ProductProviderFragment}
`;
var __glob_10_2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Collection
});
function Page() {
  const {
    handle
  } = reactRouterDom.useParams();
  const {
    data
  } = useShopQuery({
    query: QUERY$2,
    variables: {
      handle
    }
  });
  if (!data.pageByHandle) {
    return /* @__PURE__ */ jsxRuntime.jsx(NotFound, {});
  }
  const page = data.pageByHandle;
  return /* @__PURE__ */ jsxRuntime.jsxs(Layout, {
    children: [/* @__PURE__ */ jsxRuntime.jsx("h1", {
      className: "text-2xl font-bold",
      children: page.title
    }), /* @__PURE__ */ jsxRuntime.jsx(RawHtml, {
      string: page.body,
      className: "prose mt-8"
    })]
  });
}
const QUERY$2 = gql__default["default"]`
  query PageDetails($handle: String!) {
    pageByHandle(handle: $handle) {
      title
      body
    }
  }
`;
var __glob_10_3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Page
});
function ProductOptions$1() {
  const {
    options,
    setSelectedOption,
    selectedOptions
  } = useProduct();
  return /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, {
    children: options.map(({
      name,
      values
    }) => {
      return /* @__PURE__ */ jsxRuntime.jsx("fieldset", {
        className: "mt-8",
        children: /* @__PURE__ */ jsxRuntime.jsx("div", {
          className: "flex items-center flex-wrap gap-4",
          children: values.map((value) => {
            const checked = selectedOptions[name] === value;
            const id = `option-${name}-${value}`;
            return /* @__PURE__ */ jsxRuntime.jsx("label", {
              htmlFor: id,
              children: /* @__PURE__ */ jsxRuntime.jsx("input", {
                className: "sr-only",
                type: "radio",
                id,
                name: `option[${name}]`,
                value,
                checked,
                onChange: () => setSelectedOption(name, value)
              })
            }, id);
          })
        })
      }, name);
    })
  });
}
var ProductOptions = wrapInClientMarker({
  name: "ProductOptions",
  id: "/Users/Plethora/Documents/CODING-PROJECTS/REACT/hydrogenia/cotton-shop/src/components/ProductOptions.client.jsx",
  component: ProductOptions$1,
  named: false
});
function Gallery$1() {
  const {
    media,
    selectedVariant
  } = useProduct();
  const featuredMedia = selectedVariant.image || media[0].image;
  const featuredMediaSrc = featuredMedia.url.split("?")[0];
  const galleryMedia = media.filter((med) => {
    if (med.mediaContentType === MODEL_3D_TYPE) {
      return true;
    }
    return !med.image.url.includes(featuredMediaSrc);
  });
  if (!media.length) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntime.jsxs("div", {
    className: "gap-4 flex md:grid md:grid-cols-2 overflow-x-scroll no-scrollbar scroll-snap-x scroll-smooth h-[485px] md:h-auto place-content-start",
    tabIndex: "-1",
    children: [/* @__PURE__ */ jsxRuntime.jsx(SelectedVariantImage, {
      className: "w-[80vw] md:w-full h-full md:h-auto object-cover object-center flex-shrink-0 md:flex-shrink-none snap-start md:col-span-2 border border-gray-200 rounded-lg"
    }), galleryMedia.map((med) => {
      let extraProps = {};
      if (med.mediaContentType === MODEL_3D_TYPE) {
        extraProps = MODEL_3D_PROPS;
      }
      return /* @__PURE__ */ jsxRuntime.jsx(MediaFile, __spreadValues({
        tabIndex: "0",
        className: "w-[80vw] md:w-auto h-full md:h-auto object-cover object-center transition-all snap-start border border-gray-200 flex-shrink-0 rounded-lg",
        media: med,
        options: {
          height: "485",
          crop: "center"
        }
      }, extraProps), med.id || med.image.id);
    })]
  });
}
const MODEL_3D_TYPE = "MODEL_3D";
const MODEL_3D_PROPS = {
  interactionPromptThreshold: "0"
};
var Gallery = wrapInClientMarker({
  name: "Gallery",
  id: "/Users/Plethora/Documents/CODING-PROJECTS/REACT/hydrogenia/cotton-shop/src/components/Gallery.client.jsx",
  component: Gallery$1,
  named: false
});
function Seo$1({
  shopName,
  product
}) {
  var _a, _b, _c, _d, _e;
  const {
    locale
  } = useShop();
  const lang = locale.split(/[-_]/)[0];
  if (product) {
    const variant = product.variants.edges[0].node;
    const price = variant.priceV2;
    const image = (_a = product.images.edges[0]) == null ? void 0 : _a.node;
    const title = (_c = (_b = product.seo) == null ? void 0 : _b.title) != null ? _c : product.title;
    const description = (_e = (_d = product.seo) == null ? void 0 : _d.description) != null ? _e : product.description;
    const url = typeof window === "undefined" ? "" : window.location.href;
    return /* @__PURE__ */ jsxRuntime.jsxs(reactHelmetAsync.Helmet, {
      children: [/* @__PURE__ */ jsxRuntime.jsx("title", {
        children: title
      }), /* @__PURE__ */ jsxRuntime.jsx("meta", {
        name: "description",
        content: description
      }), url && /* @__PURE__ */ jsxRuntime.jsx("meta", {
        property: "og:url",
        content: url
      }), /* @__PURE__ */ jsxRuntime.jsx("meta", {
        property: "og:title",
        content: title
      }), /* @__PURE__ */ jsxRuntime.jsx("meta", {
        property: "og:type",
        content: "product"
      }), /* @__PURE__ */ jsxRuntime.jsx("meta", {
        property: "og:description",
        content: description
      }), /* @__PURE__ */ jsxRuntime.jsx("meta", {
        property: "og:price:amount",
        content: price.amount
      }), /* @__PURE__ */ jsxRuntime.jsx("meta", {
        property: "og:price:currency",
        content: price.currencyCode
      }), image && /* @__PURE__ */ jsxRuntime.jsx("meta", {
        property: "og:image",
        content: image.url
      }), image && /* @__PURE__ */ jsxRuntime.jsx("meta", {
        property: "og:image:secure_url",
        content: image.url
      }), /* @__PURE__ */ jsxRuntime.jsx("meta", {
        name: "twitter:card",
        content: "summary_large_image"
      }), /* @__PURE__ */ jsxRuntime.jsx("meta", {
        name: "twitter:title",
        content: title
      }), /* @__PURE__ */ jsxRuntime.jsx("meta", {
        name: "twitter:description",
        content: description
      }), /* @__PURE__ */ jsxRuntime.jsx("script", {
        type: "application/ld+json",
        children: `
          {
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": "${product.title}",
            "image": [
              ${image ? `"${image.url}"` : ""}
            ],
            "description": "${description}",
            "brand": {
              "@type": "Brand",
              "name": "${product.vendor}"
            },
            "offers": {
              "@type": "Offer",
              "url": "${url}",
              "priceCurrency": "${price.currencyCode}",
              "price": "${price.amount}",
              "availability": "https://schema.org/${variant.availableForSale ? "InStock" : "OutOfStock"}"
            }
          }
        `
      })]
    });
  }
  return /* @__PURE__ */ jsxRuntime.jsxs(reactHelmetAsync.Helmet, {
    defaultTitle: shopName,
    titleTemplate: `%s - ${shopName}`,
    children: [/* @__PURE__ */ jsxRuntime.jsx("html", {
      lang
    }), /* @__PURE__ */ jsxRuntime.jsx("meta", {
      property: "og:site_name",
      content: shopName
    })]
  });
}
var Seo = wrapInClientMarker({
  name: "Seo",
  id: "/Users/Plethora/Documents/CODING-PROJECTS/REACT/hydrogenia/cotton-shop/src/components/Seo.client.jsx",
  component: Seo$1,
  named: false
});
function ProductPriceMarkup() {
  return /* @__PURE__ */ jsxRuntime.jsxs("div", {
    className: "flex md:flex-col items-end font-semibold text-lg md:items-start md:mb-4",
    children: [/* @__PURE__ */ jsxRuntime.jsx(Product$1.SelectedVariant.Price, {
      priceType: "compareAt",
      className: "text-gray-500 line-through text-lg mr-2.5",
      children: ({
        amount,
        currencyNarrowSymbol
      }) => `${currencyNarrowSymbol}${amount}`
    }), /* @__PURE__ */ jsxRuntime.jsx(Product$1.SelectedVariant.Price, {
      className: "text-gray-900",
      children: ({
        currencyCode,
        amount,
        currencyNarrowSymbol
      }) => `${currencyCode} ${currencyNarrowSymbol}${amount}`
    }), /* @__PURE__ */ jsxRuntime.jsx(Product$1.SelectedVariant.UnitPrice, {
      className: "text-gray-500",
      children: ({
        currencyCode,
        amount,
        currencyNarrowSymbol,
        referenceUnit
      }) => `${currencyCode} ${currencyNarrowSymbol}${amount}/${referenceUnit}`
    })]
  });
}
function AddToCartMarkup() {
  const {
    selectedVariant
  } = useProduct();
  const isOutOfStock = !selectedVariant.availableForSale;
  return /* @__PURE__ */ jsxRuntime.jsxs("div", {
    className: "space-y-2 mb-8",
    children: [/* @__PURE__ */ jsxRuntime.jsx(Product$1.SelectedVariant.AddToCartButton, {
      className: BUTTON_PRIMARY_CLASSES,
      disabled: isOutOfStock,
      children: isOutOfStock ? "Out of stock" : "Add to bag"
    }), isOutOfStock ? /* @__PURE__ */ jsxRuntime.jsx("p", {
      className: "text-black text-center",
      children: "Available in 2-3 weeks"
    }) : /* @__PURE__ */ jsxRuntime.jsx(Product$1.SelectedVariant.BuyNowButton, {
      className: BUTTON_SECONDARY_CLASSES,
      children: "Buy it now"
    })]
  });
}
function SizeChart() {
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [/* @__PURE__ */ jsxRuntime.jsx("h3", {
      className: "text-xl text-black font-semibold mt-8 mb-4",
      id: "size-chart",
      children: "Size Chart"
    }), /* @__PURE__ */ jsxRuntime.jsxs("table", {
      className: "min-w-full table-fixed text-sm text-center bg-white",
      children: [/* @__PURE__ */ jsxRuntime.jsx("thead", {
        children: /* @__PURE__ */ jsxRuntime.jsxs("tr", {
          className: "bg-black text-white",
          children: [/* @__PURE__ */ jsxRuntime.jsx("th", {
            className: "w-1/4 py-2 px-4 font-normal",
            children: "Board Size"
          }), /* @__PURE__ */ jsxRuntime.jsx("th", {
            className: "w-1/4 py-2 px-4 font-normal",
            children: "154"
          }), /* @__PURE__ */ jsxRuntime.jsx("th", {
            className: "w-1/4 py-2 px-4 font-normal",
            children: "158"
          })]
        })
      }), /* @__PURE__ */ jsxRuntime.jsxs("tbody", {
        children: [/* @__PURE__ */ jsxRuntime.jsxs("tr", {
          children: [/* @__PURE__ */ jsxRuntime.jsx("td", {
            className: "p-3 border border-black",
            children: "Weight Range"
          }), /* @__PURE__ */ jsxRuntime.jsx("td", {
            className: "p-3 border border-black",
            children: "120-180 lbs. /54-82kg"
          }), /* @__PURE__ */ jsxRuntime.jsx("td", {
            className: "p-3 border border-black",
            children: "150-200 lbs. /68-91 kg"
          })]
        }), /* @__PURE__ */ jsxRuntime.jsxs("tr", {
          children: [/* @__PURE__ */ jsxRuntime.jsx("td", {
            className: "p-3 border border-black",
            children: "Waist Width"
          }), /* @__PURE__ */ jsxRuntime.jsx("td", {
            className: "p-3 border border-black",
            children: "246mm"
          }), /* @__PURE__ */ jsxRuntime.jsx("td", {
            className: "p-3 border border-black",
            children: "255mm"
          })]
        }), /* @__PURE__ */ jsxRuntime.jsxs("tr", {
          children: [/* @__PURE__ */ jsxRuntime.jsx("td", {
            className: "p-3 border border-black",
            children: "Stance Width"
          }), /* @__PURE__ */ jsxRuntime.jsx("td", {
            className: "p-3 border border-black",
            children: "-40"
          }), /* @__PURE__ */ jsxRuntime.jsx("td", {
            className: "p-3 border border-black",
            children: "-40"
          })]
        }), /* @__PURE__ */ jsxRuntime.jsxs("tr", {
          children: [/* @__PURE__ */ jsxRuntime.jsx("td", {
            className: "p-3 border border-black",
            children: "Binding Sizes"
          }), /* @__PURE__ */ jsxRuntime.jsx("td", {
            className: "p-3 border border-black",
            children: "Men\u2019s S/M, Women\u2019s S/M"
          }), /* @__PURE__ */ jsxRuntime.jsx("td", {
            className: "p-3 border border-black",
            children: "Men\u2019s L, Women\u2019s L"
          })]
        })]
      })]
    })]
  });
}
function ProductDetails$1({
  product
}) {
  const initialVariant = flattenConnection(product.variants)[0];
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [/* @__PURE__ */ jsxRuntime.jsx(Seo, {
      product
    }), /* @__PURE__ */ jsxRuntime.jsx(Product$1, {
      product,
      initialVariantId: initialVariant.id,
      children: /* @__PURE__ */ jsxRuntime.jsxs("div", {
        className: "grid grid-cols-1 md:grid-cols-[2fr,1fr] gap-x-8 my-16",
        children: [/* @__PURE__ */ jsxRuntime.jsxs("div", {
          className: "md:hidden mt-5 mb-8",
          children: [/* @__PURE__ */ jsxRuntime.jsx(Product$1.Title, {
            as: "h1",
            className: "text-4xl font-bold text-black mb-4"
          }), product.vendor && /* @__PURE__ */ jsxRuntime.jsx("div", {
            className: "text-sm font-medium mb-2 text-gray-900",
            children: product.vendor
          }), /* @__PURE__ */ jsxRuntime.jsx("span", {}), /* @__PURE__ */ jsxRuntime.jsx("div", {
            className: "flex justify-between md:block",
            children: /* @__PURE__ */ jsxRuntime.jsx(ProductPriceMarkup, {})
          })]
        }), /* @__PURE__ */ jsxRuntime.jsx(Gallery, {}), /* @__PURE__ */ jsxRuntime.jsxs("div", {
          children: [/* @__PURE__ */ jsxRuntime.jsxs("div", {
            className: "hidden md:block",
            children: [/* @__PURE__ */ jsxRuntime.jsx(Product$1.Title, {
              as: "h1",
              className: "text-5xl font-bold text-black mb-4"
            }), product.vendor && /* @__PURE__ */ jsxRuntime.jsx("div", {
              className: "text-sm font-medium mb-2 text-gray-900",
              children: product.vendor
            }), /* @__PURE__ */ jsxRuntime.jsx(ProductPriceMarkup, {})]
          }), /* @__PURE__ */ jsxRuntime.jsxs("div", {
            className: "mt-8",
            children: [/* @__PURE__ */ jsxRuntime.jsx(ProductOptions, {}), /* @__PURE__ */ jsxRuntime.jsx(Product$1.Metafield, {
              namespace: "my_fields",
              keyName: "size_chart",
              children: ({
                value
              }) => {
                return value ? /* @__PURE__ */ jsxRuntime.jsx("a", {
                  href: "#size-chart",
                  className: "block underline text-gray-500 text-sm tracking-wide my-4",
                  children: "Size Chart"
                }) : null;
              }
            }), /* @__PURE__ */ jsxRuntime.jsx(AddToCartMarkup, {}), /* @__PURE__ */ jsxRuntime.jsxs("div", {
              className: "flex items space-x-4",
              children: [/* @__PURE__ */ jsxRuntime.jsx(Product$1.Metafield, {
                namespace: "my_fields",
                keyName: "sustainable",
                children: ({
                  value
                }) => {
                  return value ? /* @__PURE__ */ jsxRuntime.jsxs("span", {
                    className: "flex items-center mb-8",
                    children: [/* @__PURE__ */ jsxRuntime.jsx("svg", {
                      width: "24",
                      height: "24",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      className: "stroke-current text-blue-600 mr-3",
                      children: /* @__PURE__ */ jsxRuntime.jsx("path", {
                        d: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364-.7071-.7071M6.34315 6.34315l-.70711-.70711m12.72796.00005-.7071.70711M6.3432 17.6569l-.70711.7071M16 12c0 2.2091-1.7909 4-4 4-2.20914 0-4-1.7909-4-4 0-2.20914 1.79086-4 4-4 2.2091 0 4 1.79086 4 4Z",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                      })
                    }), /* @__PURE__ */ jsxRuntime.jsx("span", {
                      className: "text-sm text-gray-900 font-medium",
                      children: "Sustainable Material"
                    })]
                  }) : null;
                }
              }), /* @__PURE__ */ jsxRuntime.jsx(Product$1.Metafield, {
                namespace: "my_fields",
                keyName: "lifetime_warranty",
                children: ({
                  value
                }) => {
                  return value ? /* @__PURE__ */ jsxRuntime.jsxs("span", {
                    className: "flex items-center mb-8",
                    children: [/* @__PURE__ */ jsxRuntime.jsx("svg", {
                      width: "24",
                      height: "24",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      className: "stroke-current text-blue-600 mr-3",
                      children: /* @__PURE__ */ jsxRuntime.jsx("path", {
                        d: "M9 12L11 14L15 10M20.6179 5.98434C20.4132 5.99472 20.2072 5.99997 20 5.99997C16.9265 5.99997 14.123 4.84453 11.9999 2.94434C9.87691 4.84446 7.07339 5.99985 4 5.99985C3.79277 5.99985 3.58678 5.9946 3.38213 5.98422C3.1327 6.94783 3 7.95842 3 9.00001C3 14.5915 6.82432 19.2898 12 20.622C17.1757 19.2898 21 14.5915 21 9.00001C21 7.95847 20.8673 6.94791 20.6179 5.98434Z",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                      })
                    }), /* @__PURE__ */ jsxRuntime.jsx("span", {
                      className: "text-sm text-gray-900 font-medium",
                      children: "Lifetime Warranty"
                    })]
                  }) : null;
                }
              })]
            })]
          }), /* @__PURE__ */ jsxRuntime.jsx(Product$1.Description, {
            className: "prose border-t border-gray-200 pt-6 text-black text-md"
          }), /* @__PURE__ */ jsxRuntime.jsx(Product$1.Metafield, {
            namespace: "my_fields",
            keyName: "size_chart",
            children: ({
              value
            }) => {
              return value ? /* @__PURE__ */ jsxRuntime.jsx("div", {
                className: "border-t border-gray-200",
                children: /* @__PURE__ */ jsxRuntime.jsx(SizeChart, {})
              }) : null;
            }
          })]
        })]
      })
    })]
  });
}
var ProductDetails = wrapInClientMarker({
  name: "ProductDetails",
  id: "/Users/Plethora/Documents/CODING-PROJECTS/REACT/hydrogenia/cotton-shop/src/components/ProductDetails.client.jsx",
  component: ProductDetails$1,
  named: false
});
function Product({
  country = {
    isoCode: "US"
  }
}) {
  const {
    handle
  } = reactRouterDom.useParams();
  const {
    data
  } = useShopQuery({
    query: QUERY$1,
    variables: {
      country: country.isoCode,
      handle
    }
  });
  if (!data.product) {
    return /* @__PURE__ */ jsxRuntime.jsx(NotFound, {});
  }
  return /* @__PURE__ */ jsxRuntime.jsx(Layout, {
    children: /* @__PURE__ */ jsxRuntime.jsx(ProductDetails, {
      product: data.product
    })
  });
}
const QUERY$1 = gql__default["default"]`
  query product(
    $country: CountryCode
    $handle: String!
    $numProductMetafields: Int = 20
    $numProductVariants: Int = 250
    $numProductMedia: Int = 6
    $numProductVariantMetafields: Int = 10
    $numProductVariantSellingPlanAllocations: Int = 0
    $numProductSellingPlanGroups: Int = 0
    $numProductSellingPlans: Int = 0
  ) @inContext(country: $country) {
    product: product(handle: $handle) {
      id
      vendor
      seo {
        title
        description
      }
      images(first: 1) {
        edges {
          node {
            url
          }
        }
      }
      ...ProductProviderFragment
    }
  }

  ${ProductProviderFragment}
`;
var __glob_10_4 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Product
});
var shopifyConfig = {
  locale: "en-us",
  storeDomain: "https://cottonsmithco.myshopify.com/",
  storefrontToken: "b43c57afd5161d35077735a47a52d1b4",
  graphqlApiVersion: "unstable"
};
function SeoServer() {
  const {
    data: {
      shop: {
        name: shopName
      }
    }
  } = useShopQuery({
    query: QUERY,
    cache: {
      maxAge: 60 * 60 * 12,
      staleWhileRevalidate: 60 * 60 * 12
    }
  });
  return /* @__PURE__ */ jsxRuntime.jsx(Seo, {
    shopName
  });
}
const QUERY = gql__default["default"]`
  query shopName {
    shop {
      name
    }
  }
`;
function CartProvider$1({
  children,
  numCartLines
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(CartUIProvider, {
    children: /* @__PURE__ */ jsxRuntime.jsx(Provider, {
      numCartLines,
      children
    })
  });
}
function Provider({
  children,
  numCartLines
}) {
  const {
    openCart
  } = useCartUI();
  const open = React.useCallback(() => {
    openCart();
  }, [openCart]);
  return /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, {
    children: /* @__PURE__ */ jsxRuntime.jsx(CartProvider$2, {
      numCartLines,
      onLineAdd: open,
      onCreate: open,
      children
    })
  });
}
var CartProvider = wrapInClientMarker({
  name: "CartProvider",
  id: "/Users/Plethora/Documents/CODING-PROJECTS/REACT/hydrogenia/cotton-shop/src/components/CartProvider.client.jsx",
  component: CartProvider$1,
  named: false
});
function LoadingFallback() {
  return /* @__PURE__ */ jsxRuntime.jsx("header", {
    className: "h-20 lg:h-32 max-w-screen text-pink-600",
    children: /* @__PURE__ */ jsxRuntime.jsx("div", {
      className: "fixed z-10 h-20 lg:h-32 w-full bg-white/90 border-b border-black border-opacity-5 px-6 md:px-8 md:py-6 lg:pt-8 lg:pb-0 mx-auto",
      children: /* @__PURE__ */ jsxRuntime.jsx("div", {
        className: "h-full flex lg:flex-col place-content-between",
        children: /* @__PURE__ */ jsxRuntime.jsxs("div", {
          className: "text-center w-full flex justify-between items-center",
          children: [/* @__PURE__ */ jsxRuntime.jsx("div", {
            className: "hidden lg:block w-16"
          }), /* @__PURE__ */ jsxRuntime.jsx("div", {
            className: "lg:hidden flex justify-center items-center w-7 h-full",
            children: /* @__PURE__ */ jsxRuntime.jsx(OpenIcon, {})
          }), /* @__PURE__ */ jsxRuntime.jsx("p", {
            className: "font-black text-3xl tracking-widest",
            children: "cottonsmith"
          }), /* @__PURE__ */ jsxRuntime.jsx(CartIcon, {})]
        })
      })
    })
  });
}
function App(_c) {
  var serverState = __objRest(_c, []);
  const pages = { "./pages/Index.server.jsx": __glob_10_0, "./pages/sitemap.xml.server.jsx": __glob_10_1, "./pages/collections/[handle].server.jsx": __glob_10_2, "./pages/pages/[handle].server.jsx": __glob_10_3, "./pages/products/[handle].server.jsx": __glob_10_4 };
  return /* @__PURE__ */ jsxRuntime.jsx(React.Suspense, {
    fallback: /* @__PURE__ */ jsxRuntime.jsx(LoadingFallback, {}),
    children: /* @__PURE__ */ jsxRuntime.jsx(ShopifyServerProvider, __spreadProps(__spreadValues({
      shopifyConfig
    }, serverState), {
      children: /* @__PURE__ */ jsxRuntime.jsxs(CartProvider, {
        children: [/* @__PURE__ */ jsxRuntime.jsx(SeoServer, {}), /* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.Switch, {
          children: /* @__PURE__ */ jsxRuntime.jsx(DefaultRoutes, {
            pages,
            serverState,
            fallback: /* @__PURE__ */ jsxRuntime.jsx(NotFound, {})
          })
        })]
      })
    }))
  });
}
var entryServer = renderHydrogen(App, () => {
});
exports["default"] = entryServer;
//# sourceMappingURL=entry-server.js.map
