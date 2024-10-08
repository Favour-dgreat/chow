import {
  require_react
} from "./chunk-HAZNF34R.js";
import {
  __commonJS
} from "./chunk-WXXH56N5.js";

// node_modules/react-timer-hook/dist/index.js
var require_dist = __commonJS({
  "node_modules/react-timer-hook/dist/index.js"(exports, module) {
    !function(e, t) {
      "object" == typeof exports && "object" == typeof module ? module.exports = t(require_react()) : "function" == typeof define && define.amd ? define(["react"], t) : "object" == typeof exports ? exports["react-timer-hook"] = t(require_react()) : e["react-timer-hook"] = t(e.react);
    }("undefined" != typeof self ? self : exports, (e) => (() => {
      "use strict";
      var t = { 156: (t2) => {
        t2.exports = e;
      } }, r = {};
      function o(e2) {
        var n2 = r[e2];
        if (void 0 !== n2)
          return n2.exports;
        var s = r[e2] = { exports: {} };
        return t[e2](s, s.exports, o), s.exports;
      }
      o.d = (e2, t2) => {
        for (var r2 in t2)
          o.o(t2, r2) && !o.o(e2, r2) && Object.defineProperty(e2, r2, { enumerable: true, get: t2[r2] });
      }, o.o = (e2, t2) => Object.prototype.hasOwnProperty.call(e2, t2), o.r = (e2) => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
      };
      var n = {};
      return (() => {
        o.r(n), o.d(n, { default: () => l, useStopwatch: () => u, useTime: () => m, useTimer: () => c });
        var e2 = o(156);
        class t2 {
          static expiryTimestamp(e3) {
            const t3 = new Date(e3).getTime() > 0;
            return t3 || console.warn("react-timer-hook: { useTimer } Invalid expiryTimestamp settings", e3), t3;
          }
          static onExpire(e3) {
            const t3 = e3 && "function" == typeof e3;
            return e3 && !t3 && console.warn("react-timer-hook: { useTimer } Invalid onExpire settings function", e3), t3;
          }
        }
        class r2 {
          static getTimeFromSeconds(e3) {
            const t3 = Math.ceil(e3), r3 = Math.floor(t3 / 86400), o2 = Math.floor(t3 % 86400 / 3600), n2 = Math.floor(t3 % 3600 / 60);
            return { totalSeconds: t3, seconds: Math.floor(t3 % 60), minutes: n2, hours: o2, days: r3 };
          }
          static getSecondsFromExpiry(e3, t3) {
            const r3 = e3 - (/* @__PURE__ */ new Date()).getTime();
            if (r3 > 0) {
              const e4 = r3 / 1e3;
              return t3 ? Math.round(e4) : e4;
            }
            return 0;
          }
          static getSecondsFromPrevTime(e3, t3) {
            const r3 = (/* @__PURE__ */ new Date()).getTime() - e3;
            if (r3 > 0) {
              const e4 = r3 / 1e3;
              return t3 ? Math.round(e4) : e4;
            }
            return 0;
          }
          static getSecondsFromTimeNow() {
            const e3 = /* @__PURE__ */ new Date();
            return e3.getTime() / 1e3 - 60 * e3.getTimezoneOffset();
          }
          static getFormattedTimeFromSeconds(e3, t3) {
            const { seconds: o2, minutes: n2, hours: s2 } = r2.getTimeFromSeconds(e3);
            let i2 = "", a2 = s2;
            return "12-hour" === t3 && (i2 = s2 >= 12 ? "pm" : "am", a2 = s2 % 12), { seconds: o2, minutes: n2, hours: a2, ampm: i2 };
          }
        }
        function s(t3, r3) {
          const o2 = (0, e2.useRef)();
          (0, e2.useEffect)(() => {
            o2.current = t3;
          }), (0, e2.useEffect)(() => {
            if (!r3)
              return () => {
              };
            const e3 = setInterval(() => {
              o2.current && o2.current();
            }, r3);
            return () => clearInterval(e3);
          }, [r3]);
        }
        const i = 1e3;
        function a(e3) {
          if (!t2.expiryTimestamp(e3))
            return null;
          const o2 = r2.getSecondsFromExpiry(e3), n2 = Math.floor(1e3 * (o2 - Math.floor(o2)));
          return n2 > 0 ? n2 : i;
        }
        function c() {
          let { expiryTimestamp: o2, onExpire: n2, autoStart: c2 = true } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          const [u2, m2] = (0, e2.useState)(o2), [l2, d] = (0, e2.useState)(r2.getSecondsFromExpiry(u2)), [p, f] = (0, e2.useState)(c2), [g, S] = (0, e2.useState)(c2), [T, y] = (0, e2.useState)(a(u2)), h = (0, e2.useCallback)(() => {
            t2.onExpire(n2) && n2(), f(false), y(null);
          }, [n2]), x = (0, e2.useCallback)(() => {
            f(false);
          }, []), v = (0, e2.useCallback)(function(e3) {
            let t3 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            y(a(e3)), S(t3), f(t3), m2(e3), d(r2.getSecondsFromExpiry(e3));
          }, []), F = (0, e2.useCallback)(() => {
            const e3 = /* @__PURE__ */ new Date();
            e3.setMilliseconds(e3.getMilliseconds() + 1e3 * l2), v(e3);
          }, [l2, v]), b = (0, e2.useCallback)(() => {
            g ? (d(r2.getSecondsFromExpiry(u2)), f(true)) : F();
          }, [u2, g, F]);
          return s(() => {
            T !== i && y(i);
            const e3 = r2.getSecondsFromExpiry(u2);
            d(e3), e3 <= 0 && h();
          }, p ? T : null), { ...r2.getTimeFromSeconds(l2), start: b, pause: x, resume: F, restart: v, isRunning: p };
        }
        function u() {
          let { autoStart: t3, offsetTimestamp: o2 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          const [n2, i2] = (0, e2.useState)(r2.getSecondsFromExpiry(o2, true) || 0), [a2, c2] = (0, e2.useState)(/* @__PURE__ */ new Date()), [u2, m2] = (0, e2.useState)(n2 + r2.getSecondsFromPrevTime(a2 || 0, true)), [l2, d] = (0, e2.useState)(t3);
          s(() => {
            m2(n2 + r2.getSecondsFromPrevTime(a2, true));
          }, l2 ? 1e3 : null);
          const p = (0, e2.useCallback)(() => {
            const e3 = /* @__PURE__ */ new Date();
            c2(e3), d(true), m2(n2 + r2.getSecondsFromPrevTime(e3, true));
          }, [n2]), f = (0, e2.useCallback)(() => {
            i2(u2), d(false);
          }, [u2]), g = (0, e2.useCallback)(function() {
            let e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, t4 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            const o3 = r2.getSecondsFromExpiry(e3, true) || 0, n3 = /* @__PURE__ */ new Date();
            c2(n3), i2(o3), d(t4), m2(o3 + r2.getSecondsFromPrevTime(n3, true));
          }, []);
          return { ...r2.getTimeFromSeconds(u2), start: p, pause: f, reset: g, isRunning: l2 };
        }
        function m() {
          let { format: t3 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          const [o2, n2] = (0, e2.useState)(r2.getSecondsFromTimeNow());
          return s(() => {
            n2(r2.getSecondsFromTimeNow());
          }, 1e3), { ...r2.getFormattedTimeFromSeconds(o2, t3) };
        }
        function l(t3) {
          if ((0, e2.useEffect)(() => {
            console.warn("react-timer-hook: default export useTimer is deprecated, use named exports { useTimer, useStopwatch, useTime } instead");
          }, []), t3.expiryTimestamp) {
            const e3 = c(t3);
            return { ...e3, startTimer: e3.start, stopTimer: e3.pause, resetTimer: () => {
            } };
          }
          const r3 = u(t3);
          return { ...r3, startTimer: r3.start, stopTimer: r3.pause, resetTimer: r3.reset };
        }
      })(), n;
    })());
  }
});
export default require_dist();
//# sourceMappingURL=react-timer-hook.js.map
