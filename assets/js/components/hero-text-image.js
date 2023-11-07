import State from '../state.js';
import Tools from '../tools.js';
import BaseComponent from './base-component.js';

class HeroTextImage extends BaseComponent {
  static rootSelector = '.hero-text-image';

  constructor(root, options) {
    super(root, options);

    this.videoSelector = '.hero-text-image__video video';
    this.videoAnimatinoSelector = '.hero-video__animation';
    this.ctaSelector = '.cta';

    this.videos = this.root.querySelectorAll(this.videoSelector);
    this.ctas = this.root.querySelectorAll(this.ctaSelector);

    this.animationDelay = 6400;

    this.init();
  }

  init() {
    this.playDelayed();
    this.bindEvents();
  }

  bindEvents() {
    if (!this.ctas) return;

    this.ctas.forEach((cta) => {
      cta.addEventListener('click', this.handleClick.bind(this));
    });
  }

  handleClick(e) {
    e.preventDefault();
    e.stopImmediatePropagation();

    const element = e.currentTarget;
    const target = document.querySelector(element.getAttribute('href'));

    if (!target) return;

    Tools.scrollIntoView(target, true);
  }

  playDelayed() {
    setTimeout(() => {
      [].forEach.call(this.root.querySelectorAll(this.videoAnimatinoSelector), (animation) => {
        animation.classList.add(State.SHOW);
        animation.style.height = animation.scrollHeight + 'px';
      });
    }, this.animationDelay);
  }
}

export default HeroTextImage;
