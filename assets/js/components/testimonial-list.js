import BaseComponent from './base-component.js';
import State from '../state.js';
import Tools from '../tools.js';

// TODO move to vue component

class TestimonialList extends BaseComponent {
  static rootSelector = '.testimonial-list';

  constructor(root, options) {
    super(root, options);

    this.root = root;

    this.testimonialContainer = this.root.querySelector('.testimonial-list__contents');
    this.testimonials = this.root.querySelectorAll('.testimonial-list__content');
    this.viewPortPercentageAtScroll = 30;
    this.viewPortPercentageAtLoad = 5;

    this.start();
  }

  handleScrollEvent() {
    this.hiddenTestimonials = this.root.querySelectorAll(`.testimonial-list__content:not(.${State.SHOW})`);

    this.hiddenTestimonials.forEach((testimonial) => {
      if (Tools.isInViewportPercent(testimonial, this.viewPortPercentageAtScroll)) {
        testimonial.classList.add(State.SHOW);
      }
    });
  }

  currentlyInViewPort() {
    this.testimonials.forEach((testimonial) => {
      if (Tools.isInViewportPercent(testimonial, this.viewPortPercentageAtLoad)) {
        testimonial.classList.add(State.SHOW);
      }
    });
  }

  start() {
    this.currentlyInViewPort();

    document.addEventListener('scroll', this.handleScrollEvent.bind(this));
  }
}

export default TestimonialList;
