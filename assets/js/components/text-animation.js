import BaseComponent from './base-component.js';
import Tools from '../tools.js';

// import State from './state.js';

class TextAnimation extends BaseComponent {
  static rootSelector = '.text-animation';
  static instances = [];

  constructor(root, options) {
    super(root, options);

    const parent = Tools.getParentComponent(this.root);

    this.iconSelector = '.js-text-animation__icon';

    this.icon = parent?.querySelector(this.iconSelector);

    this.timeout = null;
    this.letterDelay = 300;
    this.delayOffset = 800;
    this.step = 0;

    this.sequence = this.root.dataset.sequence ? JSON.parse(this.root.dataset.sequence) : [];

    this.start();
  }

  start() {
    this.animate();
  }

  calculateDelay() {
    const step = this.sequence[this.step];
    console.log('TextAnimation ~ calculateDelay ~ step', step);

    this.currentDelay = step.text.length * this.letterDelay + this.delayOffset;
    console.log('TextAnimation ~ calculateDelay ~ this.currentDelay', this.currentDelay);
  }

  next() {
    this.step++;

    if (!this.icon) return;

    this.icon.classList.add(`icon--step-${this.step}`);

    console.log('animate icon');
  }

  animate() {
    this.calculateDelay();

    this.timeout = setTimeout(() => {
      this.next();
    }, this.currentDelay);
  }
}

export default TextAnimation;
