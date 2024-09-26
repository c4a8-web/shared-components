var n = Object.defineProperty;
var l = (e, t, s) => t in e ? n(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[t] = s;
var o = (e, t, s) => l(e, typeof t != "symbol" ? t + "" : t, s);
import { B as a, S as i, T as r } from "./index-hwSXiUV6.js";
class c extends a {
  constructor(t, s) {
    super(t, s), this.root = t, this.testimonialContainer = this.root.querySelector(".testimonial-list__contents"), this.testimonials = this.root.querySelectorAll(".testimonial-list__content"), this.viewPortPercentageAtScroll = 30, this.viewPortPercentageAtLoad = 5, this.start();
  }
  handleScrollEvent() {
    this.hiddenTestimonials = this.root.querySelectorAll(`.testimonial-list__content:not(.${i.SHOW})`), this.hiddenTestimonials.forEach((t) => {
      r.isInViewportPercent(t, this.viewPortPercentageAtScroll) && t.classList.add(i.SHOW);
    });
  }
  currentlyInViewPort() {
    this.testimonials.forEach((t) => {
      r.isInViewportPercent(t, this.viewPortPercentageAtLoad) && t.classList.add(i.SHOW);
    });
  }
  start() {
    this.currentlyInViewPort(), document.addEventListener("scroll", this.handleScrollEvent.bind(this));
  }
}
o(c, "rootSelector", ".testimonial-list");
export {
  c as default
};
