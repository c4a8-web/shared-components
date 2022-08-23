export default {
  tagName: 'wrapper',
  props: {
    hideContainer: {
      default: false,
    }
  },
  template: `
  <template v-if="!hideContainer">
    <div class="wrapper container vue-component">
      <slot></slot>
    </div>
  </template>

  <template v-else>
    <slot></slot>
  </template>
`,
};
