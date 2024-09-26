var c = Object.defineProperty;
var n = (i, t, e) => t in i ? c(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e;
var r = (i, t, e) => n(i, typeof t != "symbol" ? t + "" : t, e);
import { B as a, E as f, S as l } from "./index-hwSXiUV6.js";
class m extends a {
  constructor(t, e) {
    super(t, e), this.mailSelector = 'a[href^="mailto:"]', this.formSelector = ".contact__form", this.boxSelector = ".contact__box", this.mail = this.root.querySelector(this.mailSelector), this.form = this.root.querySelector(this.formSelector), this.box = this.root.querySelector(this.boxSelector), this.init();
  }
  init() {
    this.bindEvents();
  }
  bindEvents() {
    !this.mail || !this.form || !this.box || (this.mail.addEventListener("click", this.handleClick.bind(this)), document.addEventListener(f.FAB_BUTTON_CLOSE, this.reset.bind(this)));
  }
  handleClick(t) {
    t.preventDefault();
    const e = this.root.offsetHeight, s = e + "px";
    this.root.classList.add(l.SHOW), this.root.style.height = s, this.form.style.height = s;
    const o = this.form.scrollHeight;
    if (o < e) return;
    const h = o + 40 + "px";
    this.root.style.height = h, this.form.style.height = h;
  }
  reset() {
    var t;
    this.root.classList.remove(l.SHOW), this.form.style.height = "", this.root.style.height = "", (t = this.form.querySelector("form")) == null || t.reset();
  }
}
r(m, "rootSelector", ".contact.is-collapsed");
export {
  m as default
};
