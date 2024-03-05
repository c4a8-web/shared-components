import State from './state.js';

// TODO refactor this to vue logic after we completly moved all components to vue

class UtilityAnimation {
  static rootSelector = '.utility-animation';
  static inViewportDataset = 'data-utility-animation-in-viewport';
  static endDataset = 'data-utility-animation-end';
  static instances = [];
  static groupItemsLoadedProperty = '--utility-animation-items-loaded';

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
    const group = UtilityAnimation.getGroup(event.srcElement);

    if (group) {
      const oldItemsValue = parseInt(group.style.getPropertyValue(UtilityAnimation.groupItemsLoadedProperty), 10) || 0;

      UtilityAnimation.setGroupItemsLoaded(group, oldItemsValue + 1);
    }

    this.updateCurrentElement(event);

    if (this.currentElements.length > 0) return;

    this.count++;

    this.currentElements = this.root.querySelectorAll(this.getCurrentSelector());

    if (this.currentElements !== null && this.currentElements.length > 0) {
      this.startStepAnimation(this.currentElements);
    } else {
      this.setEnd();
    }
  }

  startStepAnimation(elements) {
    elements.forEach((element) => {
      element.classList.add(State.IS_STARTING);
    });
  }

  setEnd() {
    this.root.setAttribute(UtilityAnimation.endDataset, true);
  }

  startAnimation() {
    this.startStepAnimation(this.currentElements);
  }

  static getGroup(element) {
    return element.closest('.utility-animation__group');
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
          }
        }
      });
    });

    observer.observe(this.root, { attributes: true });
  }

  static setGroupItemsLoaded(group, count) {
    group.style.setProperty(this.groupItemsLoadedProperty, count);
  }

  static hasPercentageOffset(instance) {
    return instance.root.classList.contains('utility-animation--percentage-offset');
  }

  static hasSmallOffset(instance) {
    return instance.root.classList.contains('utility-animation--small-offset');
  }

  static addObserver() {
    const intersectionOffset = 200;
    const smallIntersectionOffset = 100;

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.setAttribute(this.inViewportDataset, true);
        } else if (entry.target.classList.contains('utility-animation--enter-exit')) {
          entry.target.removeAttribute(this.inViewportDataset);
        }
      });
    };

    const observer = new IntersectionObserver(callback, {
      rootMargin: `0px 0px -${intersectionOffset}px 0px`,
      threshold: 0,
    });

    const percentageOffsetObserver = new IntersectionObserver(callback, {
      rootMargin: `0px 0px 0px 0px`,
      threshold: 0.4,
    });

    const smallOffsetObserver = new IntersectionObserver(callback, {
      rootMargin: `0px 0px -${smallIntersectionOffset}px 0px`,
      threshold: 0,
    });

    this.instances.forEach((instance) => {
      if (UtilityAnimation.hasSmallOffset(instance)) {
        smallOffsetObserver.observe(instance.root);
      } else if (UtilityAnimation.hasPercentageOffset(instance)) {
        percentageOffsetObserver.observe(instance.root);
      } else {
        observer.observe(instance.root);
      }
    });
  }

  static resetGroup(group) {
    this.setGroupItemsLoaded(group, 0);

    this.instances.forEach((instance) => {
      const instanceGroup = this.getGroup(instance.root);

      if (instanceGroup === group) {
        const rootElement = instance.root;

        instance.currentElements = [rootElement];

        rootElement.removeAttribute('data-utility-animation-end');

        instance.startAnimation();
      }
    });
  }

  static initElement(element) {
    const domElement = element.$el ? element.$el : element;
    const instance = new this(domElement);

    this.instances.push(instance);

    return instance;
  }

  static init(elements) {
    this.instances = [];

    [].forEach.call(elements || document.querySelectorAll(this.rootSelector), (element) => {
      this.initElement(element);
    });

    this.addObserver();
  }
}

export default UtilityAnimation;
