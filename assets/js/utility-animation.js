import State from './state';

class UtilityAnimation {
  static rootSelector = '.utility-animation';
  static instances = [];

  constructor(root) {
    this.root = root;
    this.count = 1;
    this.selector = this.getCurrentSelector();

    this.currentElements = this.root.querySelectorAll(this.selector);

    if (this.root.matches(this.selector)) {
      this.currentElements = this.mergeNodes(this.root, this.currentElements);
    }

    this.resetAnimation();
    this.initialize();
  }

  resetAnimation() {
    this.root.querySelectorAll(`.${State.IS_STARTING}`).forEach((element) => {
      element.classList.remove(State.IS_STARTING);
    });
  }

  mergeNodes(Node, NodeList) {
    const array = Array.from(NodeList);

    array.unshift(Node);

    return array;
  }

  getCurrentSelector() {
    return `[data-utility-animation-step="${this.count}"]`;
  }

  updateCurrentElement(event) {
    const newArray = [];

    this.currentElements.forEach((element) => {
      if (event.srcElement !== element) {
        newArray.push(element);
      }
    });

    this.currentElements = newArray;
  }

  handleAnimationEnd(event) {
    this.updateCurrentElement(event);

    if (this.currentElements.length > 0) return;

    this.count++;

    this.currentElements = this.root.querySelectorAll(this.getCurrentSelector());

    if (this.currentElements !== null && this.currentElements.length > 0) {
      this.startStepAnimation(this.currentElements);
    }
  }

  startStepAnimation(elements) {
    elements.forEach((element) => {
      element.classList.add(State.IS_STARTING);
    });
  }

  initialize() {
    this.root.addEventListener('animationend', (event) => {
      this.handleAnimationEnd(event);
    });

    this.startStepAnimation(this.currentElements);
  }

  static init() {
    this.instances = [];

    [].forEach.call(document.querySelectorAll(this.rootSelector), (element) => {
      this.instances.push(new this(element));
    });
  }
}

export default UtilityAnimation;
