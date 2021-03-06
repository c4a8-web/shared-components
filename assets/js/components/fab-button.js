import BaseComponent from './base-component.js';
import State from '../state.js';
import Events from '../events.js';
import Tools from '../tools.js';

class FabButton extends BaseComponent {
  static rootSelector = '.fab-button';

  constructor(root, options) {
    super(root, options);

    this.iconSelector = '.fab-button__icon';
    this.modalSelector = '.fab-button__modal';
    this.closeSelector = '.fab-button__close';

    this.icon = this.root.querySelector(this.iconSelector);
    this.modal = this.root.querySelector(this.modalSelector);
    this.close = this.root.querySelector(this.closeSelector);

    this.resetDelay = 300;

    this.init();
  }

  init() {
    this.bindEvents();
  }

  bindEvents() {
    if (!this.icon || !this.modal) return;

    this.icon.addEventListener('click', this.handleClick.bind(this));
    this.close?.addEventListener('click', this.handleClose.bind(this));

    document.addEventListener(Events.FORM_AJAX_SUBMIT, this.handleSubmit.bind(this));
    window.addEventListener('click', this.handleOutsideClick.bind(this));

    // force redraw
    this.modal.style = 'opacity: 1';
  }

  handleOutsideClick(e) {
    if (this.root.classList.contains(State.EXPANDED) && Tools.isOutsideOf(FabButton.rootSelector.substring(1), e)) {
      this.handleClose();
    }
  }

  handleSubmit() {
    this.handleClose();
  }

  handleClose() {
    this.handleClick();

    setTimeout(() => {
      document.dispatchEvent(new CustomEvent(Events.FAB_BUTTON_CLOSE, { detail: { target: this.root } }));
    }, this.resetDelay);
  }

  handleClick() {
    this.root.classList.toggle(State.EXPANDED);
    this.modal.classList.toggle(State.OFF_SCREEN);

    if (this.modal.classList.contains(State.OFF_SCREEN)) {
      this.modal.style = '';
    }
  }
}

export default FabButton;
