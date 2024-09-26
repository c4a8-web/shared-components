var g = Object.defineProperty;
var p = (a, t, i) => t in a ? g(a, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : a[t] = i;
var m = (a, t, i) => p(a, typeof t != "symbol" ? t + "" : t, i);
import { B as y, E as f, T as c } from "./index-CZuV85cm.js";
import { A as d } from "./animate-pRMyQBLm.js";
class w extends y {
  constructor(t, i) {
    var s, n;
    super(t, i), this.root = t, this.container = t.querySelector(".tag-cloud__container"), this.itemsContainer = t.querySelector(".tag-cloud__items"), this.itemLinkClass = "tag-cloud__item-link", this.slider = t.querySelector(".tag-cloud__slider"), this.items = (s = this.itemsContainer) != null && s.dataset.items ? JSON.parse((n = this.itemsContainer) == null ? void 0 : n.dataset.items) : [], this.maxCoordinate = 40, this.itemsPerOuterRow = 3, this.minCoordinate = 10, this.minBlur = 2, this.maxBlur = 10, this.maxDelay = 70, this.minDelay = 550, this.maxWeight = 3, this.isMouseOut = !0, this.animate = new d(), this.delay = 1e3, this.velocity = 30, this.startPosition = 0, this.endPosition = 0, this.gotDragged = !1, this.firstTouch = !0, this.temporaryTouchPosition = 0, this.temporaryDiff = 0, this.percentageInViewport = 30, this.init();
  }
  init() {
    this.weightingElements(), this.addCorners(), this.appendItems(), this.hasScrollAnimation() && (this.setDuration(), this.addScrollAnimation()), document.dispatchEvent(new CustomEvent(f.DIMENSIONS_CHANGED, { detail: this.root })), this.bindEvents();
  }
  hasScrollAnimation() {
    return c.isBelowBreakpoint("md") && c.isInViewportPercent(this.root, this.percentageInViewport);
  }
  bindEvents() {
    this.itemsContainer.querySelectorAll(`.${this.itemLinkClass}`).forEach((t) => {
      t.addEventListener("mouseover", (i) => {
        this.handleMouseOver(i == null ? void 0 : i.currentTarget);
      });
    }), this.itemsContainer.querySelectorAll(`.${this.itemLinkClass}`).forEach((t) => {
      t.addEventListener("mouseout", (i) => {
        this.handleMouseOut(i == null ? void 0 : i.currentTarget);
      });
    }), window.addEventListener("resize", () => {
      this.handleScroll(), this.endPosition = this.slider.scrollWidth - this.slider.clientWidth, this.setDuration();
    }), document.addEventListener("scroll", () => {
      this.handleScroll();
    }), this.slider.addEventListener("touchstart", () => {
      this.hasScrollAnimation() && (clearTimeout(this.timeout), this.handleTouchStart());
    }), this.slider.addEventListener("touchend", () => {
      this.hasScrollAnimation() && (this.timeout = setTimeout(() => {
        this.addScrollAnimation();
      }, this.delay));
    });
  }
  stopScrollAnimation() {
    this.animate.pause(), this.isInScrollAnimation = !1;
  }
  handleTouchStart() {
    this.stopScrollAnimation(), this.gotDragged = !0;
  }
  handleTouchEnd() {
    const t = this.slider.scrollLeft, i = Math.abs(this.endPosition - t), s = Math.abs(this.startPosition - t), n = d.easing.linear, e = i < s, o = t, r = e ? this.startPosition : this.endPosition, h = !!e, l = Math.abs(o - r) / Math.abs(this.startPosition - this.endPosition), u = this.duration * l;
    this.moveTo(o, r, u, n, h);
  }
  handleMouseOut(t) {
    window.cancelAnimationFrame(this.animate.requestId), t.style.setProperty("filter", null);
  }
  handleMouseOver(t) {
    const i = window.getComputedStyle(t), s = i == null ? void 0 : i.filter.replace("blur(", "").replace("px)", "");
    this.animate.start({
      duration: 900,
      timing: d.easing.easeInOutCubic,
      draw: (e) => {
        const o = s - s * e;
        t.style.setProperty("filter", `blur(${o}px)`, "important");
      }
    });
  }
  handleScroll() {
    if (this.hasScrollAnimation()) {
      if (this.isInScrollAnimation) return;
      this.addScrollAnimation();
    } else
      this.stopScrollAnimation();
  }
  addScrollAnimation() {
    this.isInScrollAnimation = !0, this.endPosition = this.slider.scrollWidth - this.slider.clientWidth, this.handleTouchEnd();
  }
  setDuration() {
    const t = this.slider.clientWidth;
    this.duration = this.velocity * t;
  }
  moveTo(t, i, s, n, e) {
    const o = Math.abs(i - t);
    this.animate.start({
      duration: s,
      timing: n,
      draw: (r) => {
        const h = e ? t - o * r : t + o * r, l = e ? o * (1 - r) : o * r;
        this.slider.scrollLeft = this.gotDragged ? h : l, r === 1 && (this.gotDragged = !1, this.moveTo(this.startPosition, this.endPosition, s, n, !e));
      }
    });
  }
  weightingElements() {
    for (let i = 0; i < this.items.length; i++) {
      const s = this.items[i], n = Math.ceil(s.title.length / 8);
      this.items[i].weighting = n > this.maxWeight ? this.maxWeight : n;
    }
  }
  getCornerPosition() {
    let t = 0, i = 0, s = 0, n = 0;
    for (let e = 0; e < this.items.length; e++) {
      const o = this.items[e];
      t += o.weighting, !(t > this.itemsPerOuterRow + 1) && (i = e + 1);
    }
    for (let e = this.items.length - 1; e > 0; e--) {
      const o = this.items[e];
      s += o.weighting, !(s > 3) && (n = e + 1);
    }
    return { secondIndex: i, thirdIndex: n };
  }
  addCorners() {
    const t = { weighting: 0 };
    this.items.unshift(t), this.items.push(t);
    const i = this.getCornerPosition();
    this.items.splice(i.secondIndex, 0, t), this.items.splice(i.thirdIndex, 0, t);
  }
  getRandomCoordinate() {
    let s = this.getRandomNumberBetween(this.minCoordinate, this.maxCoordinate), n = s, e = Math.random() > 0.5 ? -1 * s : s;
    return e < 0 && (s = e + n / 1.1), s / 2;
  }
  getRandomBlur() {
    return this.getRandomNumberBetween(this.minBlur, this.maxBlur);
  }
  getRandomStart() {
    return this.getRandomNumberBetween(this.minDelay, this.maxDelay);
  }
  getRandomNumberBetween(t, i) {
    return Math.floor(Math.random() * (i - t + 1)) + t;
  }
  appendItems() {
    for (let t = 0; t < this.items.length; t++) {
      const i = this.items[t], s = 2, n = document.createElement("li");
      if (n.classList.add("tag-cloud__item"), n.setAttribute("data-weight", i.weighting), i.title) {
        const e = document.createElement("a"), r = t % s === 0 ? 2 : 1;
        e.setAttribute("groupIdentifier", r), e.style.setProperty("--blurry-x1", `${this.getRandomCoordinate()}px`), e.style.setProperty("--blurry-x2", `${this.getRandomCoordinate()}px`), e.style.setProperty("--blurry-x3", `${this.getRandomCoordinate()}px`), e.style.setProperty("--blurry-y1", `${this.getRandomCoordinate()}px`), e.style.setProperty("--blurry-y2", `${this.getRandomCoordinate()}px`), e.style.setProperty("--blurry-y3", `${this.getRandomCoordinate()}px`), e.style.setProperty("--blurry-delay", `${this.getRandomStart()}ms`), e.style.setProperty("--blurry-blur", `${this.getRandomBlur()}px`), e.innerText = i.title, e.classList.add(this.itemLinkClass), n.appendChild(e);
      }
      this.itemsContainer.appendChild(n);
    }
  }
}
m(w, "rootSelector", ".tag-cloud");
export {
  w as default
};
