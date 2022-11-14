export default {
  tagName: 'testimonial-list',
  computed: {
    classList() {
      return ['testimonial-list vue-component'];
    },
    testimonialsParsed() {
      return typeof(this.testimonials) !== 'object' ? JSON.parse(this.testimonials) : this.testimonials;
    }
  },
  props: {
    testimonials: {
      default: null,
    },
    bgColor: String,
    bgColorHover: String,
  },
  template: `
  <div :class="classList">
    <div class="testimonial-list__contents container">
      <slot></slot>
    </div>
  </div>
  `,
};
