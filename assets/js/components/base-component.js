import State from '../state.js';

class BaseComponent {
  static rootSelector = '';
  static instances = [];

  constructor(root, options) {
    this.root = root;
    this.options = options;

    this.root.classList.add(State.INITIALIZED);
  }

  static initElement(element, options) {
    const instance = new this(element, options);

    this.instances.push(instance);

    return instance;
  }

  static init(element) {
    this.instances = [];

    const selectedElement = element || document;
    const notInitializedSelector = `${this.rootSelector}:not(.${State.INITIALIZED})`;

    [].forEach.call(selectedElement.querySelectorAll(notInitializedSelector), (element) => {
      this.initElement(element);
    });
  }
}

export default BaseComponent;
