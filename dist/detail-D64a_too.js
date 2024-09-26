var S = Object.defineProperty;
var d = (i, t, e) => t in i ? S(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e;
var r = (i, t, e) => d(i, typeof t != "symbol" ? t + "" : t, e);
import { B as k, T as s, S as o, E as c } from "./index-BacVDjzF.js";
class y extends k {
  constructor(t, e) {
    super(t, e), this.root = t, this.containerSelector = ".page-detail__container", this.headlineSelector = ".page-detail__headline", this.ctaSelector = ".page-detail__cta .cta", this.introSelector = ".page-detail__intro", this.descriptionSelector = ".page-detail__description", this.shapeSelector = ".page-detail__shape", this.introContentSelector = ".page-detail__intro-content", this.badgeSelector = ".page-detail__badge", this.detailsSelector = ".page-detail__details", this.hasBackClass = "page-detail--has-back", this.shape = t.querySelector(this.shapeSelector), this.hasShape() && (this.introContent = t.querySelector(this.introContentSelector), this.intro = t.querySelector(this.introSelector)), this.loadingDelay = 300, this.percentageInViewport = 1, this.init();
  }
  showBackButton() {
    if (document.referrer.indexOf(document.location.host) !== -1) {
      if (this.isVueComponent()) return;
      this.root.classList.add(this.hasBackClass);
    }
  }
  init() {
    this.showBackButton(), this.bindEvents(), this.stopLoading(), this.setStickyPosition(), this.setShapePosition();
  }
  hasShape() {
    return !!this.shape;
  }
  setStickyPosition() {
    var n, h, a;
    if (!this.hasShape() || !this.isInViewport() || !s.isUpperBreakpoint()) return;
    const t = s.isBelowBreakpoint("lg") ? 10 : -40, e = ((n = this.introContent.querySelector(this.badgeSelector)) == null ? void 0 : n.offsetHeight) || 0, l = ((h = this.introContent.querySelector(this.detailsSelector)) == null ? void 0 : h.offsetHeight) || 0, p = ((a = this.introContent.querySelector(this.headlineSelector)) == null ? void 0 : a.offsetHeight) || 0;
    this.stickyPosition = e + l + p - t;
  }
  isVueComponent() {
    return this.root.classList.contains("vue-component");
  }
  stopLoading() {
    setTimeout(() => {
      this.isVueComponent() || this.root.classList.remove(o.LOADING);
    }, this.loadingDelay);
  }
  queryElements() {
    this.back = this.root.querySelector(this.backSelector), this.cta = this.root.querySelector(this.ctaSelector);
  }
  bindEvents() {
    this.queryElements(), document.addEventListener(c.SCROLL_UPDATE, this.handleScroll.bind(this)), document.addEventListener(c.WINDOW_RESIZE, this.handleResize.bind(this));
  }
  handleScroll() {
    this.setShapePosition();
  }
  setShapePosition() {
    if (!(!this.hasShape() || !this.isInViewport())) {
      if (!s.isUpperBreakpoint()) return this.resetShape();
      this.isStickyShapeEnd() ? this.handleStickyShapeEnd() : this.isSticky() ? (this.shape.classList.add(o.STICKY), this.shape.style.top = -this.stickyPosition + "px") : this.resetShape();
    }
  }
  handleStickyShapeEnd() {
    this.isStickyEnd() && (this.shape.classList.add(o.STICKY), this.shape.style.top = -this.stickyPosition - this.getRelativePosition() + "px");
  }
  getRelativePosition() {
    var e;
    const t = ((e = this.intro) == null ? void 0 : e.style.top.replace("px", "")) || 0;
    return t >= 0 ? this.getStickyOffsetTop() - Math.abs(t) : this.getStickyOffsetTop() - parseFloat(t);
  }
  resetShape() {
    this.shape.classList.remove(o.STICKY), this.shape.style.top = "", this.isStickyEndReached = !1;
  }
  isSticky() {
    return window.scrollY > this.stickyPosition;
  }
  isStickyShapeEnd() {
    return this.root.getBoundingClientRect().bottom <= window.innerHeight;
  }
  getHsStickyBlockOptions() {
    var e;
    if (this.hsStickyBlockOptions) return this.hsStickyBlockOptions;
    let t = (e = this.intro) == null ? void 0 : e.dataset.hsStickyBlockOptions;
    return t && (t = JSON.parse(t)), this.hsStickyBlockOptions = t, t;
  }
  getStickyOffsetTop() {
    var t;
    return ((t = this.getHsStickyBlockOptions()) == null ? void 0 : t.stickyOffsetTop) || 0;
  }
  isStickyEnd() {
    var t;
    return ((t = this.intro) == null ? void 0 : t.style.top) !== this.getStickyOffsetTop() + "px";
  }
  isInViewport() {
    return s.isInViewportPercent(this.root, this.percentageInViewport);
  }
  handleResize() {
    this.setStickyPosition(), this.setShapePosition();
  }
}
r(y, "rootSelector", ".page-detail");
export {
  y as default
};
