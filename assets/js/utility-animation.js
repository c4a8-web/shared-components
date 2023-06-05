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

  updateCurrentElement(event) {
    const newArray = [];
    this.currentElement.forEach((element) => {
      if (event.srcElement === element) {
      } else {
        newArray.push(element);
      }
    });
    this.currentElement = newArray;
  }

  handleAnimationEnd(event) {
    this.updateCurrentElement(event);
    if (this.currentElement.length > 0) return;

    this.count++;
    const searchQuery = `[data-utility-animation-step="${this.count}"]`;
    this.currentElement = this.root.querySelectorAll(searchQuery);
    this.currentElement = Array.from(this.currentElement);

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
    this.root.addEventListener('animationend', (e) => {
      this.handleAnimationEnd(e);
    });
    this.toggleState(this.currentElement);
  }

  static init() {
    this.instances = [];
    [].forEach.call(document.querySelectorAll(this.rootSelector), (element) => {
      this.instances.push(new this(element));
    });
  }
}

export default UtilityAnimation;
