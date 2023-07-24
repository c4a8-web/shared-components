import Tools from '../tools.js';

export default {
  tagName: 'logo-list',
  computed: {
    defaultSpacing() {},
    classValue() {
      return [
        'logo-list container utility-animation vue-component',
        Tools.isTrue(this.sticky) ? 'is-sticky-scroller' : '',
        this.spacing ? this.spacing : 'py-4',
      ];
    },
  },
  methods: {
    getItemComponent(item) {
      return item?.url ? 'a' : 'span';
    },
    getDelay(index) {
      const miliseconds = index > 0 ? 100 : 0;
      const delay = `${index * miliseconds}ms`;

      return `--utility-animation-delay: ${delay};`;
    },
  },
  props: {
    list: Array,
    sticky: {
      default: false,
    },
    spacing: String,
  },
  template: `
    <div :class="classValue">
      <div class="row">
        <div class="col d-flex flex-wrap justify-content-between">
          <component v-for="(item, index) in list" :is="getItemComponent(item)"
            :href="item.url"
            target="_blank"
            rel="noopener"
            class="logo-list__item py-8 mb-3 d-flex justify-content-center align-items-center fade-in-bottom"
            :title="item.title"
            data-utility-animation-step="1"
            :style="getDelay(index)"
          >
            <v-img :img="item.img" :alt="item.alt" preset="logoList" cloudinary=true />
          </component>
        </div>
      </div>
    </div>
  `,
};
