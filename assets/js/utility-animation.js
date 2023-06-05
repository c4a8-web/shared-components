import State from './state';

class UtilityAnimation {
  static rootSelector = '.utility-animation';
  static instances = [];

  constructor() {
    this.count = 1;
    this.currentElement = document.querySelectorAll('[data-utility-animation-step="1"]');
    this.initialize();
  }

  handleAnimationEnd() {
    this.count++;
    const searchQuery = `[data-utility-animation-step="${this.count}"]`;

    this.toggleState(this.currentElement);
    this.currentElement = document.querySelectorAll(searchQuery);
    console.log('current Element: ', this.currentElement);

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
