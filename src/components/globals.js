import { triggerVueMounted, addDocumentAndWindowEvents } from '../migrate';

export default {
  tagName: 'globals',
  mounted() {
    addDocumentAndWindowEvents();
    triggerVueMounted();
  },
  template: `
        <slot></slot>
    `,
};
