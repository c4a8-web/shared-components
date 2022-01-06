import State from '../state.js';

class BaseComponent {
  static rootSelector = '';
  static instances = [];
  static namespacePrefix = 'baseComponents';

  constructor(root, options) {
    this.root = root;
    this.options = options;

    if (!this.options?.noInit) {
      this.root.classList.add(State.INITIALIZED);
    }
  }

  static getInstancesKey() {
    return this.rootSelector.substring(1);
  }

  static expose(instance) {
    if (!window[BaseComponent.namespacePrefix]) {
      window[BaseComponent.namespacePrefix] = {};
    }

    const instanceKey = this.getInstancesKey();

    if (!window[BaseComponent.namespacePrefix][instanceKey]) {
      window[BaseComponent.namespacePrefix][instanceKey] = [];
    }

    window[BaseComponent.namespacePrefix][this.getInstancesKey()].push(instance);
  }

  static getInstance(element) {
    const instances = window[BaseComponent.namespacePrefix][this.getInstancesKey()];
    const instance = instances.filter((value) => value?.root === element);

    return instance ? instance[0] : null;
  }

  static initElement(element, options) {
    const instance = new this(element, options);

    this.instances.push(instance);
    this.expose(instance);

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
