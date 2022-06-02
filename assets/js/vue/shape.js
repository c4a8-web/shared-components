export default {
  tagName: 'shape',
  computed: {
    classList() {
      return ['shape', 'vue-component'];
    },
    shapeName() {
      return this.name ? this.name : 's-block';
    },
  },
  methods: {},
  props: {
    name: String,
  },
  template: `
    <div :class="classList">
      <div class="shape__container">
        <component :is="shapeName" />
      </div>
    </div>`,
};
