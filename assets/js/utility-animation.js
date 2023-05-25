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

    if (this.currentElement.length > 1) {
      this.currentElement.forEach((e) => {
        e.classList.remove(State.IS_STARTING);
      });
    } else {
      this.currentElement[0]?.classList.remove(State.IS_STARTING);
    }

    this.currentElement = document.querySelectorAll(searchQuery);

    if (this.currentElement !== null && this.currentElement.length > 0) {
      this.startAnimation(this.currentElement);
    }
  }

  startAnimation(element) {
    if (element.length > 1) {
      element.forEach((e) => {
        e.classList.add(State.IS_STARTING);
      });
    } else {
      element[0].classList.add(State.IS_STARTING);
    }
  }

  initialize() {
    this.startAnimation(this.currentElement);
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
