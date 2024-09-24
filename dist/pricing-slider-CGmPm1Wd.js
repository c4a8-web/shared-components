var c = Object.defineProperty;
var l = (i, e, t) => e in i ? c(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var o = (i, e, t) => l(i, typeof e != "symbol" ? e + "" : e, t);
import { B as d, M as u } from "./index-DA50CDZe.js";
class h extends d {
  constructor(e, t) {
    var s;
    super(e, t), this.selectedValue = 0, this.products = null, this.range = null;
    const r = (s = document.querySelector("[data-pricing]")) == null ? void 0 : s.dataset.pricing, n = r ? JSON.parse(r) : {
      format: "de-DE",
      currency: "EUR",
      defaultPlan: "monthly"
    };
    this.priceFormatter = new Intl.NumberFormat(n.format, {
      style: "currency",
      currency: n.currency,
      maximumFractionDigits: 0
    }), this.selectedPlan = ["monthly", "annual"].includes(n.defaultPlan) ? n.defaultPlan : console.error('Please provide a valid plan in site.data.products.pricing.defaultPlan: "annual" or "monthly"!'), this.currentPrice = 0, this.init();
  }
  init() {
    if (window.handleChange) return console.error("remove handleChange from app.js");
    this.bindEvents();
  }
  bindEvents() {
    const e = this.root.querySelector(".pricing-slider__info");
    e && e.addEventListener("click", this.handleInfoClick.bind(this)), window.handleChange = this.handlePricingSlider.bind(this), window.fixSliderText = this.fixText.bind(this), window.prepareSlider = this.prepare.bind(this);
  }
  handleInfoClick() {
    const e = this.root.querySelector(".pricing-slider__modal");
    u.open(e);
  }
  /**
   *
   * @param {object} slider contains from value
   * @param {boolean} updateElements standard is true, maybe overidden for return value
   * @returns price if updateElements is false
   */
  handlePricingSlider({ from: e }) {
    this.selectedValue = parseInt(e);
    const t = this.getRecommendedProduct(this.selectedValue);
    if (!t) return;
    const r = this.selectedValue - t.value;
    var n = parseInt(t.price[this.selectedPlan]) + r * parseFloat(t.additionalUsersFee[this.selectedPlan]);
    this.currentPrice = n, this.updateElements(this.priceFormatter.format(n), t.title, this.formatExtraUsers(r));
  }
  getRecommendedProduct(e) {
    let t = null;
    const r = `No products found for value ${e} in site.data.products.list`;
    if (this.products)
      return this.products.forEach(function(n) {
        n.value <= e && (t = n);
      }), t || console.error(r), t;
    console.error(r);
  }
  formatExtraUsers(e) {
    const t = this.range.unit;
    return e > 0 ? "+ " + e + " " + t : "";
  }
  prepare(e) {
    const t = document.querySelector(".js-slider-data"), r = 5;
    this.products = JSON.parse(t.dataset.products), this.range = JSON.parse(t.dataset.range), this.selectedValue = e.from, setTimeout(() => {
      this.fixText();
    }, r);
  }
  fixText() {
    const e = document.querySelector(".irs-single"), t = e.innerHTML;
    t.includes(this.range.unit) || (e.innerHTML = [t, this.range.unit].join(" "));
  }
  updateElements(e, t, r) {
    const n = document.querySelector(".js-result-price"), s = document.querySelector(".js-result-product"), a = document.querySelector(".js-result-extra");
    n.innerHTML = e, s.innerHTML = t, a.innerHTML = r, this.fixText();
  }
}
o(h, "rootSelector", ".pricing-slider");
export {
  h as default
};
