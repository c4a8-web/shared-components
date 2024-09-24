var s = Object.defineProperty;
var n = (i, t, e) => t in i ? s(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e;
var o = (i, t, e) => n(i, typeof t != "symbol" ? t + "" : t, e);
import { B as a, S as r } from "./index-DVik4XTW.js";
class c extends a {
  constructor(t, e) {
    super(t, e), this.init();
  }
  init() {
    this.canGoBack() && (this.root.classList.add(r.SHOW), this.bindEvents());
  }
  bindEvents() {
    this.root.addEventListener("click", this.handleClick.bind(this));
  }
  canGoBack() {
    return document.referrer.indexOf(document.location.host) !== -1;
  }
  handleClick(t) {
    t.stopImmediatePropagation(), window.history.back();
  }
}
o(c, "rootSelector", ".back");
export {
  c as default
};
