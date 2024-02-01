import Tools from '../tools.js';

export default {
  tagName: 'logo-list',
  computed: {
    defaultSpacing() {},
    classValue() {
      return [
        'logo-list container utility-animation vue-component',
        this.aspectRatio ? 'logo-list--aspect-ratio' : '',
        Tools.isTrue(this.sticky) ? 'is-sticky-scroller' : '',
        this.spacing ? this.spacing : 'py-4',
      ];
    },
    columnsValue() {
      const defaultColumn = 4;
      const columnParam = parseInt(this.columns);
      const columnPercentage = 100 / (Number.isNaN(columnParam) ? defaultColumn : columnParam);
      const columnWidth = '--column-width: ';
      const gap = 3;

      return columnWidth + `calc(${columnPercentage}% - ${gap}px)`;
    },
    aspectRatioValue() {
      const aspectRatio = this.aspectRatio.split('/');
      if (aspectRatio.length != 2) return '';

      return `--aspect-ratio-width: ${aspectRatio[0]}; --aspect-ratio-height: ${aspectRatio[1]}`;
    },
    styles() {
      return [this.columnsValue, this.aspectRatioValue].join('; ');
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
    columns: Number,
    aspectRatio: {
      default: false,
    },
  },
  template: `
    <div :class="classValue" :style="this.styles">
      <div class="row">
        <div class="col d-flex flex-wrap">
          <component v-for="(item, index) in list" :is="getItemComponent(item)"
            :href="item.url"
            target="_blank"
            rel="noopener"
            class="logo-list__item py-8 px-4 mb-3 d-flex justify-content-center align-items-center fade-in-bottom"
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
