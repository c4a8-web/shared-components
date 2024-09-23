import { triggerVueMounted } from '../migrate';

export default {
  tagName: 'globals',
  mounted() {
    triggerVueMounted();
  },
  template: `
        <slot></slot>
    `,
};
