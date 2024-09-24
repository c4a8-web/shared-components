var o = Object.defineProperty;
var l = (i, t, e) => t in i ? o(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e;
var s = (i, t, e) => l(i, typeof t != "symbol" ? t + "" : t, e);
import { T as r } from "./index-DA50CDZe.js";
class a {
  constructor() {
    const t = this.getHash();
    this.idSelector = `[id="${t.substring(1)}"]:not([role="tabpanel"])`, this.idTarget = document.querySelector(this.idSelector), this.idTarget && r.scrollIntoView(this.idTarget, !0), this.targetSelector = `a[href^="${t}"]`, this.productStageSelector = ".product-stage", this.target = document.querySelector(this.targetSelector), this.links = document.querySelectorAll('a[href^="#"]:not([data-toggle])'), this.handleTargetClick(), this.bindEvents();
  }
  hasProductStage() {
    return !!document.querySelector(this.productStageSelector);
  }
  bindEvents() {
    var t;
    (t = this.links) == null || t.forEach((e) => {
      e.addEventListener("click", this.handleClick.bind(this));
    });
  }
  handleTargetClick() {
    !this.idTarget && this.target && this.hasProductStage() && this.handleAfterClick(this.target, !0);
  }
  handleClick(t) {
    const e = t.currentTarget, c = e == null ? void 0 : e.getAttribute("href"), h = document.querySelector(`a[href="${c}"][data-toggle]`);
    this.handleAfterClick(h);
  }
  handleAfterClick(t, e) {
    t && (r.scrollIntoView(t, e), t.click());
  }
  getHash() {
    return window.location.hash;
  }
  static init() {
    this.instances = [], this.instances.push(new this());
  }
}
s(a, "rootSelector", ""), s(a, "instances", []);
export {
  a as default
};
