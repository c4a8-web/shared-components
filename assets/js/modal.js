import State from './state.js';

class Modal {
  static rootSelector = '.modal';
  static instances = [];

  constructor(root, options) {
    this.root = root;
    this.options = options;

    this.closeSelector = '.modal__close';

    this.close = this.root.querySelector(this.closeSelector);

    this.root.classList.add(State.READY);

    this.bindEvents();
  }

  bindEvents() {
    this.close?.addEventListener('click', this.handleClose.bind(this));
  }

  handleClose() {
    Modal.close(this.root);
  }

  static initElement(element, options) {
    const instance = new this(element, options);

    this.instances.push(instance);

    return instance;
  }

  static open(element) {
    if (window.$) {
      $(element).modal('show');
    }
  }

  static close(element) {
    if (window.$) {
      $(element).modal('hide');
    }
  }

  static init(element) {
    this.instances = [];

    const selectedElement = element || document;
    const notReadySelector = `${this.rootSelector}:not(.${State.READY})`;

    [].forEach.call(selectedElement.querySelectorAll(notReadySelector), (element) => {
      this.initElement(element);
    });
  }
}

export default Modal;
