import BaseComponent from "./base-component";
import State from '../state.js';
import Tools from '../tools.js';

class TestimonialList extends BaseComponent {
  static rootSelector = ".testimonial-list";

  constructor(root, options) {
    super(root, options);
    this.testimonialContainer = root.querySelector(".testimonial-list__contents");
    this.testimonials = root.querySelectorAll(".testimonial-list__content");
    // this.testimonials.forEach((testimonial) => testimonial.classList.add(State.LOADING))

    this.testimonials.forEach((testimonial) => testimonial.style.visibility = "hidden")
    // this.testimonialContainer.addEventListener('scroll', this.handleScrollEvent.bind(this));
    this.start();
  }

  handleScrollEvent(){
    console.log(State.HIDDEN);
    this.testimonials.forEach((testimonial) => {
      if (Tools.isInViewportPercent(testimonial, 30)) {
        //testimonial.classList.remove(State.LOADING);
        testimonial.classList.add("testimonial-list__animation")
      }
    })
  }

  start(){
    /*
    if ("IntersectionObserver" in window) {
      let observer = new IntersectionObserver(
        (testimonials) => {
          testimonials.forEach((testimonial) => {
            if (!testimonial.isIntersecting) return;
            testimonial.target.classList.add("testimonial-list__animation");
          });
        },
        {
          threshold: [0.2]
        }
      );
      this.testimonials.forEach((testimonial) => {
        observer.observe(testimonial);
      })
    }
    */
    // window.onscroll = this.handleScrollEvent();
    document.addEventListener('scroll', this.handleScrollEvent.bind(this));
  }
}

export default TestimonialList;
