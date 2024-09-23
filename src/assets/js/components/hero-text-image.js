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
    this.ctaList = this.root.querySelectorAll(this.ctaSelector);
    this.classList = this.root.classList;

    this.animationDelay = 6400;

    this.init();
  }

  init() {
    this.playDelayed();
    this.bindEvents();
  }

  isSecurity() {
    return this.classList.contains('hero--security');
  }

  isCareer() {
    return this.classList.contains('hero--career');
  }

  bindEvents() {
    const hasCareerOrSecurity = this.isSecurity() || this.isCareer();

    if (!this.ctaList || !hasCareerOrSecurity) return;

    this.ctaList.forEach((cta) => {
      cta.addEventListener('click', this.handleClick.bind(this));
    });
  }

  isValidSelector(href) {
    return href.indexOf('#') === -1 ? false : true;
  }

  handleClick(e) {
    const element = e.currentTarget;
    const href = element.getAttribute('href');

    if (!this.isValidSelector(href)) return;

    e.preventDefault();
    e.stopImmediatePropagation();

    const target = document.querySelector(href);

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
