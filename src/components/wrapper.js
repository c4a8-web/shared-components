export default {
  tagName: 'wrapper',
  computed: {
    classList() {
      return ['wrapper vue-component', this.classes ? this.classes : null, this.hideContainerClass ? '' : 'container'];
    },
  },
  props: {
    hideContainer: {
      default: false,
    },
    hideContainerClass: {
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
