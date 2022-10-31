import State from '../state.js';
import Tools from '../tools.js';
import BaseComponent from './base-component.js';

class HeroTextImage extends BaseComponent {
  static rootSelector = '.hero-text-image.hero--security';

  constructor(root, options) {
    super(root, options);

    this.videoSelector = '.hero-text-image__video video';
    this.videoAnimatinoSelector = '.hero-video__animation';
    this.ctaSelector = '.hero-text-image__cta-wrapper .cta';

    this.videos = this.root.querySelectorAll(this.videoSelector);
    this.cta = this.root.querySelector(this.ctaSelector);

    this.animationDelay = 6400;

    this.init();
  }

  init() {
    this.playDelayed();
    this.bindEvents();
  }

  bindEvents() {
    if (!this.cta) return;

    this.cta.addEventListener('click', this.handleClick.bind(this));
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
