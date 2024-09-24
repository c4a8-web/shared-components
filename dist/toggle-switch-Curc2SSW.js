var u = Object.defineProperty;
var d = (c, t, e) => t in c ? u(c, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : c[t] = e;
var o = (c, t, e) => d(c, typeof t != "symbol" ? t + "" : t, e);
import { A as l } from "./animate-pRMyQBLm.js";
import { S as h } from "./index-DA50CDZe.js";
class p {
  constructor(t) {
    var e;
    this.root = t, this.targetSelector = ".js-toggle-switch", this.target = this.root.querySelector(this.targetSelector), this.duration = 400, this.parsePricingData = (e = this.root.querySelector("[data-pricing]")) == null ? void 0 : e.dataset.pricing, this.bindEvents(), this.initPrices();
  }
  getTargetSelectors(t) {
    const r = JSON.parse(t.dataset.toggleSwitchOptions).targetSelector.split(","), i = [];
    for (let s = 0; s < r.length; s++) {
      const a = r[s].replace(/\s/g, "");
      i.push(a);
    }
    return i;
  }
  handleChange(t) {
    const e = t.currentTarget, r = e.checked, s = JSON.parse(e.dataset.toggleSwitchOptions).targetSelector.split(","), a = s.some((n) => n.includes("pricing"));
    for (let n = 0; n < s.length; n++) {
      const g = s[n].replace(/\s/g, "");
      this.switchData(g, r, a);
    }
    [].forEach.call(document.querySelectorAll("[data-alternative-href]"), (n) => {
      this.switchButtonHrefs(n, r);
    });
  }
  switchButtonHrefs(t, e) {
    t.dataset.originalHref || (t.dataset.originalHref = t.href), t.href = e ? t.dataset.originalHref : t.dataset.alternativeHref;
  }
  pricingData() {
    return this.parsePricingData ? JSON.parse(this.parsePricingData) : {
      format: "de-DE",
      currency: "EUR",
      defaultPlan: "monthly"
    };
  }
  priceFormatter() {
    const t = this.pricingData();
    return new Intl.NumberFormat(t.format, {
      style: "currency",
      currency: t.currency,
      maximumFractionDigits: 2
    });
  }
  switchAnimation(t, e, r) {
    new l().start({
      duration: this.duration,
      timing: l.easing.easeInOutCubic,
      draw: (s) => {
        const a = s * (r - e) + e;
        this.updatePrices(t, a);
      }
    });
  }
  updatePrices(t, e) {
    const r = e.replace ? parseFloat(e.replace(/,/, ".")) : e, s = this.priceFormatter().format(r);
    t.innerHTML = s;
  }
  initPrices() {
    this.getTargetSelectors(this.target).forEach((e) => {
      document.querySelectorAll(e).forEach((i) => {
        i.dataset.currencyFormat !== void 0 && this.updatePrices(i, i.innerHTML);
      });
    });
  }
  switchData(t, e, r) {
    const i = document.querySelectorAll(t);
    for (let s = 0; s < i.length; s++) {
      const a = i[s];
      r ? this.handlePriceSwitch(a, e) : this.handleForms(a, t);
    }
  }
  handlePriceSwitch(t, e) {
    const r = JSON.parse(t.dataset.toggleSwitchItemOptions), i = e ? r.monthly : r.annual, s = e ? r.annual : r.monthly;
    this.switchAnimation(t, i, s);
  }
  handleForms(t, e) {
    const r = t.className.includes(h.HIDDEN), i = e.startsWith(".") ? e.substring(1) : e;
    t.className = i + " " + (r ? "" : h.HIDDEN);
  }
  bindEvents() {
    this.target.addEventListener("change", this.handleChange.bind(this));
  }
  static init() {
    this.instances = [], [].forEach.call(document.querySelectorAll(this.rootSelector), (t) => {
      this.instances.push(new this(t));
    });
  }
}
o(p, "rootSelector", ".toggle-switch");
export {
  p as default
};
