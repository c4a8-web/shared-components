import State from './state';

class UtilityAnimation {
  static rootSelector = '.utility-animation';
  static instances = [];

  constructor(root) {
    this.root = root;
    this.count = 1;
    this.currentElement = this.root.querySelectorAll('[data-utility-animation-step="1"]');
    this.initialize();
  }

  handleAnimationEnd() {
    this.count++;
    const searchQuery = `[data-utility-animation-step="${this.count}"]`;

    console.log(
      '🚀 ~ file: utility-animation.js:18 ~ UtilityAnimation ~ handleAnimationEnd ~ searchQuery:',
      searchQuery
    );
    this.toggleState(this.currentElement);
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
