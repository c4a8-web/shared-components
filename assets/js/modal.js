import State from './state.js';
import { initComponentList } from './index.js';

class Modal {
  static rootSelector = '.modal';
  static instances = [];

  constructor(root, options) {
    this.root = root;
    this.options = options;

    this.closeSelector = '.modal__close';
    this.successCloseSelector = '.modal__success-close .cta';

    this.close = this.root.querySelector(this.closeSelector);
    this.successClose = this.root.querySelector(this.successCloseSelector);

    this.root.classList.add(State.READY);

    this.bindEvents();
  }

  bindEvents() {
    this.close?.addEventListener('click', this.handleClose.bind(this));
    this.successClose?.addEventListener('click', this.handleClose.bind(this));
  }

  handleClose(e) {
    e.preventDefault();

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

      // initComponentList(element);
    }
  }

  static close(element) {
    if (window.$) {
      $(element).modal('hide');

      Modal.resetModal(element);
    }
  }

  static resetModal(element) {
    setTimeout(function () {
      const form = element.querySelector('form');

      form?.reset();

      element.classList.remove(State.SUCCESS);
    }, 200);
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
