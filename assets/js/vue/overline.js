export default {
  tagName: 'overline',
  computed: {
    classList() {
      return 'overline vue-component';
    },
  },
  props: {
    text: String,
    bgColor: String,
  },
  template: `
    <div :class="classList">
      <slot v-if="!text"></slot>
      <span v-else v-html="text"></span>
    </div>
  `,
};
