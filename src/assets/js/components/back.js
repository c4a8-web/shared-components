import BaseComponent from "./base-component.js";
import State from "../assets/js/state.js";

class Back extends BaseComponent {
  static rootSelector = ".back";

  constructor(root, options) {
    super(root, options);

    this.init();
  }

  init() {
    if (!this.canGoBack()) return;

    this.root.classList.add(State.SHOW);

    this.bindEvents();
  }

  bindEvents() {
    this.root.addEventListener("click", this.handleClick.bind(this));
  }

  canGoBack() {
    return document.referrer.indexOf(document.location.host) !== -1;
  }

  handleClick(e) {
    e.stopImmediatePropagation();

    window.history.back();
  }
}

export default Back;
