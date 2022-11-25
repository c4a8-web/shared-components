import BaseComponent from "./base-component";
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
    console.log(State.HIDDEN);
    this.testimonials.forEach((testimonial) => {
      if (Tools.isInViewportPercent(testimonial, 30)) {
        testimonial.classList.add(State.SHOW);
      }
    })
  }

  start(){
    document.addEventListener('scroll', this.handleScrollEvent.bind(this));
  }
}

export default TestimonialList;
