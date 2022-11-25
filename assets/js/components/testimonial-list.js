import BaseComponent from "./base-component.js";
import State from '../state.js';
import Tools from '../tools.js';

class TestimonialList extends BaseComponent {
  static rootSelector = ".testimonial-list";

  constructor(root, options) {
    super(root, options);
    this.testimonialContainer = root.querySelector(".testimonial-list__contents");
    this.testimonials = root.querySelectorAll(".testimonial-list__content");
    this.start();
  }

  handleScrollEvent(){
    this.testimonials.forEach((testimonial) => {
      if (Tools.isInViewportPercent(testimonial, 30)) {
        testimonial.classList.add(State.SHOW);
      }
    })
  }



  // in case we start in the middle of the component and scroll isnt triggered
  currentlyInViewPort(){
    this.testimonials.forEach((testimonial) => {
      if (Tools.isInViewportPercent(testimonial, 5)) {
        testimonial.classList.add(State.SHOW);
      }
    })
  }

  start(){
    this.currentlyInViewPort();
    document.addEventListener('scroll', this.handleScrollEvent.bind(this));
  }
}

export default TestimonialList;
