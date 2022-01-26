import BaseComponent from './base-component.js';
import State from '../state.js';

class Fab extends BaseComponent {
  static rootSelector = '.fab';

  constructor(root, options) {
    super(root, options);

    this.iconSelector = '.fab__icon';
    this.modalSelector = '.fab__modal';

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
  }

  handleClick() {
    this.modal.classList.toggle(State.INVISIBLE);
  }
}

export default Fab;
