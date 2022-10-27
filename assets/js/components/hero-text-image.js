import State from '../state.js';
import BaseComponent from './base-component.js';

class HeroTextImage extends BaseComponent {
  static rootSelector = '.hero-text-image.hero--security';

  constructor(root, options) {
    super(root, options);

    this.videoSelector = '.hero-text-image__video video';
    this.videoAnimatinoSelector = '.hero-video__animation';

    this.videos = this.root.querySelectorAll(this.videoSelector);

    this.animationDelay = 6400;

    this.init();
  }

  init() {
    this.playDelayed();
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
