var a = Object.defineProperty;
var l = (i, t, e) => t in i ? a(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e;
var o = (i, t, e) => l(i, typeof t != "symbol" ? t + "" : t, e);
import { B as c, T as n, S as h } from "./index-5mjWNQB_.js";
class d extends c {
  constructor(t, e) {
    super(t, e), this.videoSelector = ".hero-text-image__video video", this.videoAnimatinoSelector = ".hero-video__animation", this.ctaSelector = ".cta", this.videos = this.root.querySelectorAll(this.videoSelector), this.ctaList = this.root.querySelectorAll(this.ctaSelector), this.classList = this.root.classList, this.animationDelay = 6400, this.init();
  }
  init() {
    this.playDelayed(), this.bindEvents();
  }
  isSecurity() {
    return this.classList.contains("hero--security");
  }
  isCareer() {
    return this.classList.contains("hero--career");
  }
  bindEvents() {
    const t = this.isSecurity() || this.isCareer();
    !this.ctaList || !t || this.ctaList.forEach((e) => {
      e.addEventListener("click", this.handleClick.bind(this));
    });
  }
  isValidSelector(t) {
    return t.indexOf("#") !== -1;
  }
  handleClick(t) {
    const s = t.currentTarget.getAttribute("href");
    if (!this.isValidSelector(s)) return;
    t.preventDefault(), t.stopImmediatePropagation();
    const r = document.querySelector(s);
    r && n.scrollIntoView(r, !0);
  }
  playDelayed() {
    setTimeout(() => {
      [].forEach.call(this.root.querySelectorAll(this.videoAnimatinoSelector), (t) => {
        t.classList.add(h.SHOW), t.style.height = t.scrollHeight + "px";
      });
    }, this.animationDelay);
  }
}
o(d, "rootSelector", ".hero-text-image");
export {
  d as default
};
