var q = Object.defineProperty;
var h = (s, e, t) => e in s ? q(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t;
var r = (s, e, t) => h(s, typeof e != "symbol" ? e + "" : e, t);
class m {
  constructor() {
  }
  start({ duration: e, timing: t, draw: a }) {
    const i = performance.now();
    this.requestId;
    const u = this;
    this.requestId = requestAnimationFrame(function o(c) {
      let n = (c - i) / e;
      n > 1 && (n = 1);
      const p = t(n);
      a(p), n < 1 && (u.requestId = requestAnimationFrame(o));
    });
  }
  pause() {
    cancelAnimationFrame(this.requestId);
  }
}
r(m, "easing", {
  linear(e) {
    return e;
  },
  easeInOutCubic(e) {
    return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
  }
});
export {
  m as A
};
