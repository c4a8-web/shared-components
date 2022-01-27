import BaseComponent from './base-component.js';
import State from '../state.js';

class FabButton extends BaseComponent {
  static rootSelector = '.fab-button';

  constructor(root, options) {
    super(root, options);

    this.iconSelector = '.fab-button__icon';
    this.modalSelector = '.fab-button__modal';

    this.icon = this.root.querySelector(this.iconSelector);
    this.modal = this.root.querySelector(this.modalSelector);

    this.init();
  }

  init() {
    this.bindEvents();
  }

  bindEvents() {
    if (!this.icon || !this.modal) return;

    this.icon.addEventListener('click', this.handleClick.bind(this));

    // force redraw
    this.modal.style = 'opacity: 1';
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
