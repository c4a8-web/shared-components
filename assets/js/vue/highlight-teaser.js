// import Tools from '../tools.js';

export default {
  tagName: 'highlight-teaser',
  computed: {
    classList() {
      return ['highlight-teaser', this.spacing, 'vue-component'];
    },
    limitValue() {
      const defaultLimit = 3;
      const radix = 10;
      const limit = parseInt(this.limit, radix);

      return limit > 0 ? limit : defaultLimit;
    },
  },
  methods: {},
  props: {
    entries: Array,
    limit: Number,
    spacing: String,
  },
  template: `
    <div :class="classList">
      <div class="highlight-teaser__entry" v-for="(entry, index) in entries.slice(0, limitValue)" :key="index">
        <h2 class="highlight-teaser__title">{{ entry.title }}</h2>
        <p class="highlight-teaser__description">{{ entry.description }}</p>
        <a :href="entry.link" class="highlight-teaser__link">Read more</a>
      </div>
    </div>
  `,
};
