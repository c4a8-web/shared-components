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
    this.textSelector = '.text-animation__text';
    this.sublineSelector = '.text-animation__subline';

    this.icon = parent?.querySelector(this.iconSelector);
    this.text = this.root.querySelector(this.textSelector);
    this.subline = this.root.querySelector(this.sublineSelector);

    this.defaultTextSize = 'h1-font-size';
    this.timeout = null;
    this.letterDelay = 120;
    this.sublineLetterDelay = this.letterDelay / 4;
    this.delayOffset = 1600;
    this.step = 0;

    this.sequence = this.root.dataset.sequence ? JSON.parse(this.root.dataset.sequence) : [];

    this.start();
  }

  start() {
    this.animate();
  }

  calculateDelay() {
    this.currentSequenceStep = this.sequence[this.step];
    this.currentText = this.currentSequenceStep.text;
    this.currentSubline = this.currentSequenceStep?.subline || '';
    this.currentDelay =
      this.currentText.length * this.letterDelay +
      this.currentSubline.length * this.sublineLetterDelay +
      this.delayOffset;
  }

  next() {
    // if (this.step >= this.sequence.length - 1) return;

    if (this.step >= this.sequence.length - 1) {
      // TODO remove me after testing

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
    console.log('TextAnimation ~ resetText ~ this.text', this.text);

    this.oldStep = this.sequence[this.step - 1];
    this.nextStep = this.sequence[this.step + 1] || this.sequence[0];

    this.text.classList.remove(this.currentTextSize);

    this.currentTextSize = this.nextStep.textSize || this.defaultTextSize;
    this.text.classList.add(this.currentTextSize);
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

    var timeout;

    for (let i = 0; i < this.currentText.length; i++) {
      timeout = i * this.letterDelay + this.letterDelay;

      setTimeout(() => {
        this.typeLetter(this.currentText[i]);
      }, timeout);
    }

    for (let i = 0; i < this.currentSubline.length; i++) {
      setTimeout(() => {
        this.typeSublineLetter(this.currentSubline[i]);
      }, i * this.sublineLetterDelay + this.sublineLetterDelay + timeout);
    }
  }

  typeLetter(letter) {
    if (!letter) return;

    this.text.innerHTML = this.text.innerHTML + letter;
  }

  typeSublineLetter(letter) {
    if (!letter) return;

    this.subline.innerHTML = this.subline.innerHTML + letter;
  }
}

export default TextAnimation;
