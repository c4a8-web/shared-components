import BaseComponent from './base-component.js';
import State from '../state.js';
import Events from '../events.js';
import Tools from '../tools.js';

class FabButton extends BaseComponent {
  static rootSelector = '.fab-button';

  constructor(root, options) {
    super(root, options);

    this.iconSelector = '.fab-button__icon';
    this.linkSelector = '.fab-trigger';
    this.modalSelector = '.fab-button__modal';
    this.closeSelector = '.fab-button__close';

    this.icon = this.root.querySelector(this.iconSelector);
    this.link = document.querySelectorAll(this.linkSelector);
    this.modal = this.root.querySelector(this.modalSelector);
    this.close = this.root.querySelector(this.closeSelector);

    this.resetDelay = 300;

    this.init();
  }

  init() {
    this.bindEvents();
  }

  hasTrigger() {
    return this.root.classList.contains('fab-button--has-trigger');
  }

  bindEvents() {
    if (!this.icon || !this.modal || this.hasTrigger()) return this.bindTriggerEvent();

    this.link.forEach((link) => {
      link.addEventListener('click', this.handleClick.bind(this));
    });
    this.icon.addEventListener('click', this.handleClick.bind(this));
    this.close?.addEventListener('click', this.handleClose.bind(this));

    document.addEventListener(Events.FORM_AJAX_SUBMIT, this.handleSubmit.bind(this));
    window.addEventListener('click', this.handleOutsideClick.bind(this));

    // force redraw
    this.modal.style = 'opacity: 1';
    this.modal.style = '';
  }

  bindTriggerEvent() {
    this.icon.addEventListener('click', this.handleTriggerClick.bind(this));
  }

  handleTriggerClick(e) {
    const target = e.currentTarget;
    const triggerId = target.dataset.triggerId;

    document.dispatchEvent(new CustomEvent(Events.OPEN_MODAL, { detail: { id: triggerId } }));
  }

  handleOutsideClick(e) {
    if (
      this.root.classList.contains(State.EXPANDED) &&
      Tools.isOutsideOf(FabButton.rootSelector.substring(1), e) &&
      Tools.isOutsideOf(this.linkSelector.substring(1), e)
    ) {
      this.handleClose();
    }
  }

  handleSubmit() {
    this.handleClose();
  }

  handleClose() {
    this.handleClick();

    setTimeout(() => {
      document.dispatchEvent(
        new CustomEvent(Events.FAB_BUTTON_CLOSE, {
          detail: { target: this.root },
        })
      );
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
