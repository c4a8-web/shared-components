var e = Object.defineProperty;
var n = (s, t, o) => t in s ? e(s, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : s[t] = o;
var i = (s, t, o) => n(s, typeof t != "symbol" ? t + "" : t, o);
import { B as a, T as c } from "./index-DA50CDZe.js";
class l extends a {
  constructor(t, o) {
    super(t, o), this.init();
  }
  init() {
    this.bindEvents();
  }
  bindEvents() {
    this.root.addEventListener("click", this.handleClick.bind(this));
  }
  handleClick() {
    c.scrollToTop();
  }
}
i(l, "rootSelector", ".back-to-top");
export {
  l as default
};
