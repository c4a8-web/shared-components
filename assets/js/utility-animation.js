import Animate from './animate';

// temporary inside utility-animation
const animationPreset = {
  'fade-in-bottom': {},
  bouncing: {},
  'zoom-in-out': {},
};

class UtilityAnimation {
  static root = '';

  constructor(root) {
    this.root = root;
    this.selected = document.querySelector(this.root);
    this.classes = this.selected.classList;
    this.animationStack = [];

    document.addEventListener('VUE_IS_MOUNTED', (e) => {
      this.getAnimationStack();
      this.initialize();
    });
  }
  initialize() {
    console.log('init ->>>', this.animationStack);
    if (this.animationStack.length > 0) {
      const currentAnimation = this.animationStack[0];
      this.animationStack.shift();
      this.startAnimation(currentAnimation);
    }
  }

  getAnimationStack() {
    for (let i = 0; i < this.classes.length; i++) {
      const animation = this.classes[i];

      if (animationPreset.hasOwnProperty(animation)) {
        this.animationStack.push(animation);
      }
    }
  }

  handleAnimationEnd() {
    if (this.animationStack.length > 0) {
      const currentAnimation = this.animationStack[0];
      this.animationStack.shift();
      this.startAnimation(currentAnimation);
    }
  }

  startAnimation(element) {
    this.selected.addEventListener('animationend', this.handleAnimationEnd.bind(this));
    this.selected.classList.add('--' + element);
    this.selected.classList.remove(element);
  }

  stopAnimation() {
    return null;
  }
}

export default UtilityAnimation;
