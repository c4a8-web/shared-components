import State from './state';

class UtilityAnimation {
  static rootSelector = '.utility-animation';
  static instances = [];

  constructor(root) {
    this.root = root;
    this.count = 1;
    this.selector = '[data-utility-animation-step="1"]';

    this.parentNode = this.root.parentNode.querySelector(this.selector);
    this.currentElement = this.root.querySelectorAll(this.selector);

    if (!this.currentElement[0].isEqualNode(this.parentNode)) {
      this.currentElement = this.mergeNodes(this.parentNode, this.currentElement);
    }

    this.initialize();
  }

  mergeNodes(Node, NodeList) {
    const array = Array.from(NodeList);
    array.unshift(Node);
    return array;
  }

  handleAnimationEnd() {
    this.count++;
    const searchQuery = `[data-utility-animation-step="${this.count}"]`;

    this.currentElement = this.root.querySelectorAll(searchQuery);

    if (this.currentElement !== null && this.currentElement.length > 0) {
      this.toggleState(this.currentElement);
    }
  }

  toggleState(element) {
    element.forEach((e) => {
      e.classList.toggle(State.IS_STARTING);
    });
  }

  initialize() {
    this.toggleState(this.currentElement);

    // TODO here you look for every animationend and not just a specific one. set it before you toggle and listen only for the element you handle.
    document.addEventListener('animationend', this.handleAnimationEnd.bind(this));
  }

  static init() {
    this.instances = [];
    [].forEach.call(document.querySelectorAll(this.rootSelector), (element) => {
      this.instances.push(new this(element));
    });
  }
}

export default UtilityAnimation;
