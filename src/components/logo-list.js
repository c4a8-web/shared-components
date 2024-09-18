import Tools from "../assets/js/tools.js";

const logoListItems = {
  tagName: "logo-list-items",
  computed: {},
  methods: {
    getItemComponent(item) {
      return item?.url ? "a" : "span";
    },
    getDelay(index) {
      const localIndex = this.getIndex(index);
      const miliseconds = localIndex > 0 ? 100 : 0;
      const delay = `${localIndex * miliseconds}ms`;

      return `--utility-animation-delay: ${delay};`;
    },
    getIndex(index) {
      return this.isClone ? this.list.length + index : index;
    },
  },
  template: `
    <component v-for="(item, index) in list" :is="getItemComponent(item)"
      :href="item.url"
      target="_blank"
      rel="noopener"
      :class="['logo-list__item justify-content-center align-items-center fade-in-bottom', { 'py-8 px-4 mb-3': !isOverlapping, 'logo-list--clone': isClone }]"
      :title="item.title"
      data-utility-animation-step="1"
      :style="getDelay(index)"
    >
      <v-img :img="item.img" :alt="item.alt" preset="logoList" cloudinary=true />
    </component>
  `,
  props: {
    list: Array,
    isOverlapping: Boolean,
    isClone: Boolean,
  },
};

export default {
  tagName: "logo-list",
  components: {
    "logo-list-items": logoListItems,
  },
  computed: {
    defaultSpacing() {},
    classValue() {
      return [
        "logo-list container utility-animation vue-component",
        this.aspectRatio ? "logo-list--aspect-ratio" : "",
        Tools.isTrue(this.sticky) ? "is-sticky-scroller" : "",
        this.spacing ? this.spacing : "py-4",
        this.isOverlapping ? "logo-list--is-overlapping" : "",
      ];
    },
    isOverlapping() {
      return Tools.isTrue(this.overlapping);
    },
    columnsValue() {
      const defaultColumn = 4;
      const columnParam = parseInt(this.columns);
      const columnPercentage =
        100 / (Number.isNaN(columnParam) ? defaultColumn : columnParam);
      const columnWidth = "--column-width: ";
      const gap = 3;

      return columnWidth + `calc(${columnPercentage}% - ${gap}px)`;
    },
    aspectRatioValue() {
      const aspectRatio = this.aspectRatio.split("/");
      if (aspectRatio.length != 2) return "";

      return `--aspect-ratio-width: ${aspectRatio[0]}; --aspect-ratio-height: ${aspectRatio[1]}`;
    },
    styles() {
      return [
        this.columnsValue,
        this.aspectRatioValue,
        this.bgColor ? `--logo-list-background: ${this.bgColor}` : "",
      ].join("; ");
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
  template: `
    <div :class="classValue" :style="styles">
      <div class="logo-list__row row">
        <wrapper classes="logo-list__scroller" :hide-container="!isOverlapping" :hide-container-class="true">
          <div :class="['logo-list__col col d-flex', { 'flex-wrap': !isOverlapping }]">
            <logo-list-items :list="list" :is-overlapping="isOverlapping" />
            <logo-list-items :list="list" is-clone="true" :is-overlapping="isOverlapping" v-if="isOverlapping" />
          </div>
        </wrapper>
      </div>
    </div>
  `,
};
