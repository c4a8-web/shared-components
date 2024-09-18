import BaseComponent from "./base-component.js";
import State from "../assets/js/state.js";
import Events from "../assets/js/events.js";

class Contact extends BaseComponent {
  static rootSelector = ".contact.is-collapsed";

  constructor(root, options) {
    super(root, options);

    this.mailSelector = 'a[href^="mailto:"]';
    this.formSelector = ".contact__form";
    this.boxSelector = ".contact__box";

    this.mail = this.root.querySelector(this.mailSelector);
    this.form = this.root.querySelector(this.formSelector);
    this.box = this.root.querySelector(this.boxSelector);

    this.init();
  }

  init() {
    this.bindEvents();
  }

  bindEvents() {
    if (!this.mail || !this.form || !this.box) return;

    this.mail.addEventListener("click", this.handleClick.bind(this));

    document.addEventListener(Events.FAB_BUTTON_CLOSE, this.reset.bind(this));
  }

  handleClick(e) {
    e.preventDefault();

    const height = this.root.offsetHeight;
    const heightWithUnits = height + "px";

    this.root.classList.add(State.SHOW);

    this.root.style.height = heightWithUnits;
    this.form.style.height = heightWithUnits;

    const formHeight = this.form.scrollHeight;

    if (formHeight < height) return;

    const formHeightOffset = 40;
    const formHeightWithUnits = formHeight + formHeightOffset + "px";

    this.root.style.height = formHeightWithUnits;
    this.form.style.height = formHeightWithUnits;
  }

  reset() {
    this.root.classList.remove(State.SHOW);
    this.form.style.height = "";
    this.root.style.height = "";

    this.form.querySelector("form")?.reset();
  }
}

export default Contact;
