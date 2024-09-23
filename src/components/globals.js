import '../migrate';

export default {
  tagName: 'globals',
  mounted() {
    // onmounted send vue ready event
  },
  template: `
        <slot></slot>
    `,
};
