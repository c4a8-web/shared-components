export default {
  tagName: 'wrapper',
  computed: {
    classList() {
      return ['wrapper container vue-component', this.classes ? this.classes : null];
    },
  },
  props: {
    hideContainer: {
      default: false,
    },
    classes: {
      default: '',
    },
  },
  template: `
    <template v-if="!hideContainer">
      <div :class="classList">
        <slot></slot>
      </div>
    </template>

    <template v-else>
      <slot></slot>
    </template>
  `,
};
