import Tools from "../tools";

export default {
  tagName: 'wrapper',
  computed: {
    visible() {
      console.log(this.visible);
      return Tools.isTrue(this.visible);
    }
  },
  methods: {
  },
  props: {
    wraps: {
      default: null,
    },
    class: {
      default: null,
    },
    visible: {
      default: false,
    }
  },
  template: `
    <template v-if="visible">
      <div class="wrapper-component">
        <component :is="wraps" :class ></component>
      </div>
    </template>
  `,
};
