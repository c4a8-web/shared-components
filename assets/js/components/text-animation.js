import BaseComponent from './base-component.js';
import Tools from '../tools.js';
import State from '../state.js';

class TextAnimation extends BaseComponent {
  static rootSelector = '.text-animation';
  static instances = [];

  constructor(root, options) {
    super(root, options);

    const parent = Tools.getParentComponent(this.root);

    this.iconSelector = '.js-text-animation__icon';
    this.buttonSelector = '.js-text-animation__button';
    this.textSelector = '.text-animation__text';
    this.sublineSelector = '.text-animation__subline';

    this.icon = parent?.querySelector(this.iconSelector);
    this.button = parent?.querySelector(this.buttonSelector);
    this.text = this.root.querySelector(this.textSelector);
    this.subline = this.root.querySelector(this.sublineSelector);

    this.defaultTextSize = 'h1-font-size';
    this.defaultSublineSize = 'font-size-2';
    this.timeout = null;
    this.letterDelay = 120;
    this.minDelay = 3100;
    this.delayOffset = 3200;
    this.step = 0;

    this.sequence = this.root.dataset.sequence ? JSON.parse(this.root.dataset.sequence) : [];

    // if (true) {
    //   this.minDelay = 300;
    //   this.delayOffset = 300;
    // }

    this.start();
  }

  start() {
    this.animate();
  }

  calculateDelay() {
    this.currentSequenceStep = this.sequence[this.step];
    this.currentText = this.currentSequenceStep.text;
    this.currentSubline = this.currentSequenceStep?.subline || '';
    this.currentDelay = this.currentText.length * this.letterDelay + this.delayOffset;

    if (this.currentDelay < this.minDelay) this.currentDelay = this.minDelay;
  }

  end() {
    window.clearTimeout(this.timeout);
  }

  next() {
    if (this.step >= this.sequence.length - 1) {
      // TODO remove me after testing
      this.button.classList.toggle(State.INVISIBLE);
      this.icon?.classList.remove(`icon--step-3`);
      this.step = 0;
      this.animate();

      return;
    }

    this.step++;

    this.animate();

    if (!this.icon) return;

    this.icon.classList.remove(`icon--step-${this.step - 1}`);
    this.icon.classList.add(`icon--step-${this.step}`);
  }

  resetText() {
    this.text.innerHTML = '';
    this.subline.innerHTML = '';
    this.subline.classList.add(State.INVISIBLE);

    this.oldStep = this.sequence[this.step - 1];
    this.nextStep = this.sequence[this.step + 1] || this.sequence[0];

    this.text.classList.remove(this.currentTextSize);
    this.subline.classList.remove(this.currentSublineSize);

    this.currentTextSize = this.nextStep.textSize || this.defaultTextSize;
    this.text.classList.add(this.currentTextSize);

    this.currentSublineSize = this.nextStep.sublineSize || this.defaultSublineSize;
    this.subline.classList.add(this.currentSublineSize);
  }

  animate() {
    this.calculateDelay();
    this.animateText();

    this.timeout = setTimeout(() => {
      this.resetText();
      this.next();
    }, this.currentDelay);
  }

  animateText() {
    this.currentTextSize = this.currentSequenceStep.textSize || this.defaultTextSize;
    this.text.classList.add(this.currentTextSize);
    this.currentSublineSize = this.currentSequenceStep.sublineSize || this.defaultSublineSize;
    this.subline.classList.add(this.currentSublineSize);

    var textTimeout;

    for (let i = 0; i < this.currentText.length; i++) {
      textTimeout = i * this.letterDelay + this.letterDelay;

      setTimeout(() => {
        this.typeLetter(this.currentText[i]);
      }, textTimeout);
    }

    if (this.currentSubline.length) {
      setTimeout(() => {
        this.subline.innerHTML = this.currentSubline;
        this.subline.classList.remove(State.INVISIBLE);
      }, textTimeout);
    }

    this.showButtonAtLastRun(textTimeout);
  }

  showButtonAtLastRun(timeout) {
    if (this.step + 1 < this.sequence.length) return;

    setTimeout(() => {
      // TODO comment this in when ready
      // this.end();
      this.button.classList.toggle(State.INVISIBLE);
    }, timeout);
  }

  typeLetter(letter) {
    if (!letter) return;

    this.text.innerHTML = this.text.innerHTML + letter;
  }
}

export default TextAnimation;

// TODO move cta to this component
