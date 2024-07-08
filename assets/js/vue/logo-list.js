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
        this.isOverlapping ? 'logo-list--is-overlapping' : '',
      ];
    },
    isOverlapping() {
      return Tools.isTrue(this.overlapping);
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
      return [
        this.columnsValue,
        this.aspectRatioValue,
        this.bgColor ? `--logo-list-background: ${this.bgColor}` : '',
      ].join('; ');
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
    overlapping: {
      default: false,
    },
    bgColor: String,
  },
  // TODO check if flex-wrap is wanted or not.
  template: `
    <div :class="classValue" :style="styles">
      <div class="row">
        <div :class="['logo-list__col col d-flex flex-wrap', { 'flex-wrap': !isOverlapping }]">
          <component v-for="(item, index) in list" :is="getItemComponent(item)"
            :href="item.url"
            target="_blank"
            rel="noopener"
            :class="['logo-list__item d-flex justify-content-center align-items-center fade-in-bottom', { 'py-8 px-4 mb-3': !isOverlapping }]"
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
