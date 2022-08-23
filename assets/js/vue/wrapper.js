import Tools from "../tools";

export default {
  tagName: 'wrapper',
  computed: {
  },
  methods: {
  },
  props: {
    hideContainer: {
      default: false,
    }
  },
  template: `
  <template v-if="hideContainer">
    <div class="container">
      <slot></slot>
    </div>
  </template>
  <template v-else>
    <slot></slot>
  </template>
`,
};
