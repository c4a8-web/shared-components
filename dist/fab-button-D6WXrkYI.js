var c = Object.defineProperty;
var d = (e, t, i) => t in e ? c(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : e[t] = i;
var l = (e, t, i) => d(e, typeof t != "symbol" ? t + "" : t, i);
import { B as g, E as n, S as s, T as r } from "./index-BacVDjzF.js";
const o = class o extends g {
  constructor(t, i) {
    super(t, i), this.iconSelector = ".fab-button__icon", this.linkSelector = ".fab-trigger", this.modalSelector = ".fab-button__modal", this.closeSelector = ".fab-button__close", this.icon = this.root.querySelector(this.iconSelector), this.link = document.querySelectorAll(this.linkSelector), this.modal = this.root.querySelector(this.modalSelector), this.close = this.root.querySelector(this.closeSelector), this.resetDelay = 300, this.init();
  }
  init() {
    this.bindEvents();
  }
  hasTrigger() {
    return this.root.classList.contains("fab-button--has-trigger");
  }
  bindEvents() {
    var t;
    if (!this.icon || !this.modal || this.hasTrigger()) return this.bindTriggerEvent();
    this.link.forEach((i) => {
      i.addEventListener("click", this.handleClick.bind(this));
    }), this.icon.addEventListener("click", this.handleClick.bind(this)), (t = this.close) == null || t.addEventListener("click", this.handleClose.bind(this)), document.addEventListener(n.FORM_AJAX_SUBMIT, this.handleSubmit.bind(this)), window.addEventListener("click", this.handleOutsideClick.bind(this)), this.modal.style = "opacity: 1", this.modal.style = "";
  }
  bindTriggerEvent() {
    this.icon.addEventListener("click", this.handleTriggerClick.bind(this));
  }
  handleTriggerClick(t) {
    const a = t.currentTarget.dataset.triggerId;
    document.dispatchEvent(new CustomEvent(n.OPEN_MODAL, { detail: { id: a } }));
  }
  handleOutsideClick(t) {
    this.root.classList.contains(s.EXPANDED) && r.isOutsideOf(o.rootSelector.substring(1), t) && r.isOutsideOf(this.linkSelector.substring(1), t) && this.handleClose();
  }
  handleSubmit() {
    this.handleClose();
  }
  handleClose() {
    this.handleClick(), setTimeout(() => {
      document.dispatchEvent(
        new CustomEvent(n.FAB_BUTTON_CLOSE, {
          detail: { target: this.root }
        })
      );
    }, this.resetDelay);
  }
  handleClick() {
    this.root.classList.toggle(s.EXPANDED), this.modal.classList.toggle(s.OFF_SCREEN), this.modal.classList.contains(s.OFF_SCREEN) && (this.modal.style = "");
  }
};
l(o, "rootSelector", ".fab-button");
let h = o;
export {
  h as default
};
