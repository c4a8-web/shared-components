import Tools from '../tools.js';

export default {
  tagName: 'tag',
  data() {
    return Tools.validateVueProps(this);
  },
  computed: {
    lowerLang() {
      return this.lang.toLowerCase();
    },
    classList() {
      return [
        `tags__btn btn btn-xs btn-soft-secondary btn-pill mx-sm-${this.props?.spacing} mb-2 vue-component`,
        this.classes ? this.classes : null,
      ];
    },
    url() {
      return this.lowerLang === 'de' ? 'tags' : `tags-${this.lowerLang}`;
    },
    href() {
      return '/blog/' + this.url + '/?tag=' + encodeURIComponent(this.tag);
    },
  },
  props: {
    tag: {
      type: String,
      required: true,
    },
    count: {
      type: Number,
      default: null,
    },
    filter: {
      type: Boolean,
      default: false,
    },
    lang: {
      type: String,
      default: 'de',
    },
    spacing: {
      type: Number,
      default: 1,
    },
    classes: {
      type: String,
      default: null,
    },
  },
  template: `
    <a
      :class="classList"
      :data-text="filter ? tag : undefined"
      :href="href"
      rel="tag"
      :title="'Posts tagged with ' + tag"
    >
      {{ tag }}<span v-if="count"> ({{ count }})</span>
    </a>
  `,
};