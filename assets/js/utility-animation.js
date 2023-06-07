import State from './state.js';

// TODO refactor this to vue logic after we completly moved all components to vue

class UtilityAnimation {
  static rootSelector = '.utility-animation';
  static inViewportDataset = 'data-utility-animation-in-viewport';
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

  startAnimation() {
    this.startStepAnimation(this.currentElements);
  }

  initialize() {
    this.root.addEventListener('animationend', (event) => {
      this.handleAnimationEnd(event);
    });

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName.startsWith(UtilityAnimation.inViewportDataset)) {
          if (mutation.target?.getAttribute(UtilityAnimation.inViewportDataset) === 'true') {
            this.startAnimation();
          } else {
            // reset animation??
          }
        }
      });
    });

    observer.observe(this.root, { attributes: true });
  }

  static addObserver() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute(this.inViewportDataset, true);
          } else if (entry.target.classList.contains('utility-animation--enter-exit')) {
            entry.target.removeAttribute(this.inViewportDataset);
          }
        });
      },
      {
        threshold: 0.4,
      }
    );

    this.instances.forEach((instance) => {
      observer.observe(instance.root);
    });
  }

  static init() {
    this.instances = [];

    [].forEach.call(document.querySelectorAll(this.rootSelector), (element) => {
      this.instances.push(new this(element));
    });

    this.addObserver();
  }
}

export default UtilityAnimation;
