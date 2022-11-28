export default {
  tagName: 'testimonial-list',
  computed: {
    classList() {
      return ['testimonial-list vue-component'];
    }
  },
  props: {
    testimonials: {
      default: null,
    }
  },
  template: `
  <div :class="classList">
    <div class="testimonial-list__contents container-lg">
      <slot></slot>
    </div>
  </div>
  `,
};
