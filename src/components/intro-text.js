export default {
  tagName: 'intro-text',
  computed: {
    classList() {
      return ['intro-text', 'utility-animation', 'vue-component', this.variant, this.spacing];
    },
  },
  props: {
    copy: String,
    variant: String,
    headline: String,
    spacing: String,
    headlineClasses: {
      type: String,
      default: 'text-center',
    },
    copyClasses: String,
  },
  template: `
    <figure :class="classList">
      <div class="container space-lg-2">
        <div v-if="headline" class="row mb-9 mt-9">
          <div :class="['col', headlineClasses, 'fade-in-bottom']" data-utility-animation-step="1">
            <headline :text="headline" />
          </div>
        </div>
        <div class="row">
          <div class="col">
            <p :class="['intro-text__copy fade-in-bottom', copyClasses]" data-utility-animation-step="1" v-html="copy"></p>
          </div>
        </div>
      </div>
    </figure>
  `,
};
