import Tools from '../tools.js';
import BaseComponent from './base-component.js';
// import State from '../state.js';

class BackToTop extends BaseComponent {
  static rootSelector = '.back-to-top';

  constructor(root, options) {
    super(root, options);

    this.init();
  }

  init() {
    this.bindEvents();
  }

  bindEvents() {
    this.root.addEventListener('click', this.handleClick.bind(this));
  }

  handleClick() {
    Tools.scrollToTop();
  }
}

export default BackToTop;
