var a = Object.defineProperty;
var d = (s, t, e) => t in s ? a(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[t] = e;
var n = (s, t, e) => d(s, typeof t != "symbol" ? t + "" : t, e);
import { T as h, F as o } from "./index-5mjWNQB_.js";
const i = class i {
  constructor(t) {
    var e;
    this.root = t, this.code = this.root.dataset.analytics, this.parent = h.getParent(this.root, o.rootSelector), this.formInstance = o.initElement(this.parent, { noEvents: !0 }), this.form = (e = this.formInstance) == null ? void 0 : e.form, this.bindEvents();
  }
  isInForm() {
    return !!this.form;
  }
  bindEvents() {
    var t;
    this.isInForm() ? (t = this.form) == null || t.addEventListener("submit", this.handleSubmit.bind(this)) : this.root.addEventListener("click", this.handleClick.bind(this));
  }
  handleClick() {
    this.track(void 0, () => {
    });
  }
  handleSubmit(t) {
    t.stopImmediatePropagation(), t.preventDefault(), this.isFormValidated(t) && this.track(void 0, () => {
      this.form.submit();
    });
  }
  isFormValidated(t) {
    var e;
    return ((e = this.formInstance) == null ? void 0 : e.validate(t)) && this.formInstance.triggerExternalValidation();
  }
  track(t, e) {
    i.track(this.code, e, t);
  }
  static isGALoaded() {
    return dataLayer.filter((t) => t.event === "gtm.dom").length > 0;
  }
  static track(t, e, c) {
    window.gtag && t && i.isGALoaded() ? window.gtag("event", "conversion", {
      send_to: t,
      event_callback: e
    }) : (console.error("GTag not found or Collect not loaded"), e());
  }
  static init() {
    this.instances = [], [].forEach.call(document.querySelectorAll(this.rootSelector), (t) => {
      this.instances.push(new this(t));
    });
  }
};
n(i, "rootSelector", "[data-analytics]"), n(i, "instances", []);
let r = i;
export {
  r as default
};
