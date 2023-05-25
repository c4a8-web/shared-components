class UtilityAnimation {
  static root = '';

  constructor(root) {
    this.root = root;
    this.selected = document.querySelector(this.root);
    this.classes = this.selected.classList;
    this.animationStack = [];
    this.delay = 0;
    this.currentAnimation = '';

    document.addEventListener('VUE_IS_MOUNTED', (e) => {
      this.getAnimationStack();
      this.initialize();
      this.selected.addEventListener('animationend', this.handleAnimationEnd.bind(this, this.currentAnimation));
    });
  }

  initialize() {
    if (this.animationStack.length > 0) {
      this.currentAnimation = this.animationStack[0];
      this.animationStack.shift();

      this.startAnimation(this.currentAnimation);
    }
  }

  parseAnimationString(animationString) {
    const array = animationString.split('-util');
    const animation = array[0];
    const durationString = array[1];
    const durationValue =
      durationString.charAt(0) === '-' ? durationString.slice(1, durationString.length) : durationString;
    const duration = durationValue.length > 0 ? durationValue + 's' : '3s';

    return { animation, duration };
  }

  getAnimationStack() {
    for (let i = 0; i < this.classes.length; i++) {
      const animationClass = this.classes[i];

      if (animationClass.includes('util')) {
        const parsedAnimation = this.parseAnimationString(animationClass);
        this.animationStack.push(parsedAnimation);
      }
    }
  }

  handleAnimationEnd(element) {
    const { animation } = element;
    this.selected.classList.remove(animation);

    if (this.animationStack.length > 0) {
      this.initialize();
    } else {
      this.stopAnimation();
    }
  }

  startAnimation(element) {
    const { animation, duration } = element;
    this.selected.style.animationDuration = duration;
    this.selected.classList.add(animation);
  }

  stopAnimation() {
    return null;
  }
}

export default UtilityAnimation;
