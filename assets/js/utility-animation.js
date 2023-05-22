// temporary inside utility-animation
const animationPreset = ['fade-in-bottom', 'bouncing', 'zoom-in-out'];

class UtilityAnimation {
  static root = '';

  constructor(root) {
    this.root = root;
    this.selected = document.querySelector(this.root);
    this.classes = this.selected.classList;
    this.animationStack = [];
    this.delay = 0;

    document.addEventListener('VUE_IS_MOUNTED', (e) => {
      this.getAnimationStack();
      this.initialize();
    });
  }
  initialize() {
    if (this.animationStack.length > 0) {
      const currentAnimation = this.animationStack[0];
      this.animationStack.shift();
      this.startAnimation(currentAnimation);
    }
  }

  getAnimationStack() {
    for (let i = 0; i < this.classes.length; i++) {
      const animation = this.classes[i];

      if (animationPreset.includes(animation)) {
        this.animationStack.push(animation);
      }
    }
  }

  handleAnimationEnd(modElement) {
    this.selected.classList.remove(modElement);

    if (this.animationStack.length > 0) {
      this.initialize();
    } else {
      this.stopAnimation();
    }
  }

  startAnimation(element) {
    const modElement = '--' + element;
    this.selected.addEventListener('animationend', this.handleAnimationEnd.bind(this, modElement));
    this.selected.classList.add(modElement);
  }

  stopAnimation() {
    return null;
  }
}

export default UtilityAnimation;
