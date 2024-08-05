// import Tools from '../tools.js';

export default {
  tagName: 'highlight-teaser',
  data() {
    return {
      index: 0,
    };
  },
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
    activeEntry() {
      return this.entries[this.index];
    },
    currentPage() {
      return this.index + 1;
    },
    lastPage() {
      return this.entries.length;
    },
    pagination() {
      return this.entries.length > 1;
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
      <div class="highlight-teaser__container">
        <div class="highlight-teaser__content-container">
          <div class="highlight-teaser__entry" v-for="(entry, index) in entries.slice(0, limitValue)" :key="index">
            <v-img :img="entry.image.img" :alt="entry.image.alt" :cloudinary="entry.image.cloudinary" class="highlight-teaser__image" />
          </div>
        </div>
        <div class="highlight-teaser__infos">
          <div class="highlight-teaser__pagination" v-if="pagination"> {{ currentPage }} / {{ lastPage }}</div>
          {{ activeEntry.logo  }}
          {{ activeEntry.headline  }}
          {{ activeEntry.subline }}
          {{ activeEntry.ctaList.map(cta => cta.ctaText).join(', ')}}
        </div>
      </div>
    </div>
  `,
};
