import { triggerVueMounted } from '../migrate';

export default {
  tagName: 'globals',
  mounted() {
    // onmounted send vue ready event
    triggerVueMounted();
    console.log('vue mounted');
  },
  template: `
        <slot></slot>
    `,
};
