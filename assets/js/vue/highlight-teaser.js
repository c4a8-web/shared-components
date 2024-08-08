const highlightTeaserInfos = {
  tagName: 'highlight-teaser-infos',
  computed: {
    logo() {
      return this.entry ? this.entry.logo : null;
    },
  },
  template: `
    <div class="highlight-teaser__infos">
      <div
        :class="[
          'highlight-teaser__infos-pagination',
          { 'highlight-teaser__infos-pagination--first': isFirstEntry },
          { 'highlight-teaser__infos-pagination--last': isLastEntry }
        ]"
        v-if="pagination">
        <icon class="highlight-teaser__infos-icon-prev" icon="arrow" direction="left" @click="prev" />
        <div class="highlight-teaser__infos-current">
          {{ currentPage }} / {{ lastPage }}
        </div>
        <icon class="highlight-teaser__infos-icon-next" icon="arrow" @click="next" />
      </div>
      <v-img v-if="logo" class="highlight-teaser__infos-logo" v-bind="logo" />
      <div class="highlight-teaser__infos-title">{{ entry.title  }}</div>
      <p class="highlight-teaser__infos-subline">{{ entry.subline }}</p>
      <cta-list :list="entry.ctaList" classes="highlight-teaser__infos-cta-list" />
    </div>
  `,
  props: {
    pagination: Boolean,
    currentPage: Number,
    lastPage: Number,
    entry: Object,
    prev: Function,
    next: Function,
    isFirstEntry: Boolean,
    isLastEntry: Boolean,
  },
};

export default {
  tagName: 'highlight-teaser',
  components: {
    'highlight-teaser-infos': highlightTeaserInfos,
  },
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
    isFirstEntry() {
      return this.index === 0;
    },
    isLastEntry() {
      return this.index === this.entries.length - 1;
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
    limitedEntries() {
      return this.entries.slice(0, this.limitValue);
    },
    sliderOptions() {
      return {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        centerMode: false,
        fade: true,
        dotsClass: 'slick-pagination is-default',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              centerMode: true,
              infinite: false,
              centerPadding: '30px',
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false,
              fade: false,
            },
          },
          {
            breakpoint: 576,
            settings: {
              centerMode: true,
              infinite: false,
              centerPadding: '20px',
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false,
              fade: false,
            },
          },
        ],
      };
    },
  },
  methods: {
    next() {
      if (this.isLastEntry) return;

      // trigger slick and wait for index update

      this.index++;

      this.setSliderToSlide();
    },
    prev() {
      if (this.isFirstEntry) return;

      // trigger slick and wait for index update
      this.index--;

      this.setSliderToSlide();
    },
    setSliderToSlide() {
      const container = this.$refs.container;

      if (!container) return;

      const slickCarousel = container.querySelector('.js-slick-carousel');

      if (!slickCarousel) return;

      $(slickCarousel).slick('slickGoTo', this.index);
    },
  },
  props: {
    entries: Array,
    limit: Number,
    spacing: String,
  },
  template: `
    <div :class="classList">
      <div class="highlight-teaser__container" ref="container">
        <slider :options="sliderOptions" :hide-background="true">
          <div class="highlight-teaser__entry" v-for="(entry, index) in limitedEntries" :key="index">
            <v-img :img="entry.image.img" :alt="entry.image.alt" :cloudinary="entry.image.cloudinary" class="highlight-teaser__image" />
            <highlight-teaser-infos :pagination="pagination" :current-page="index + 1" :last-page="lastPage" :entry="entry" />
          </div>
        </slider>

        <div class="highlight-teaser__overlay">
          <div class="highlight-teaser__overlay-container container">
            <div class="highlight-teaser__overlay-infos">
              <highlight-teaser-infos
                :pagination="pagination"
                :current-page="currentPage"
                :last-page="lastPage"
                :entry="activeEntry"
                :next="next"
                :prev="prev"
                :is-first-entry="isFirstEntry"
                :is-last-entry="isLastEntry"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
};
