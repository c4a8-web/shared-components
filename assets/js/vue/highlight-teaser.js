import Tools from '../tools.js';

const highlightTeaserInfos = {
  tagName: 'highlight-teaser-infos',
  data() {
    return {
      isFadingOut: false,
      isFadingIn: false,
      currentIndex: 0,
      timeout: null,
      timeoutDelay: 700,
    };
  },
  computed: {
    logo() {
      return this.currentEntry ? this.currentEntry.logo : null;
    },
    currentEntry() {
      return this.entries ? this.entries[this.currentIndex] : this.entry;
    },
  },
  template: `
    <div :class="['highlight-teaser__infos', { 'highlight-teaser__infos--fade-out': isFadingOut, 'highlight-teaser__infos--fade-in': isFadingIn }]" ref="infos">
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
      <div class="highlight-teaser__infos-content" ref="content">
        <v-img v-if="logo" class="highlight-teaser__infos-logo" v-bind="logo" />
        <div class="highlight-teaser__infos-title">{{ currentEntry.title  }}</div>
        <p class="highlight-teaser__infos-subline">{{ currentEntry.subline }}</p>
        <cta-list :list="currentEntry.ctaList" classes="highlight-teaser__infos-cta-list" />
      </div>
    </div>
  `,
  mounted() {
    const content = this.$refs.content;

    this.currentIndex = this.index;

    if (!content) return;

    content.addEventListener('transitionend', this.handleTransitionEnd);
  },
  beforeDestroy() {
    const content = this.$refs.content;

    if (!content) return;

    content.removeEventListener('transitionend', this.handleTransitionEnd);
  },
  methods: {
    resetTransitions() {
      this.isFadingIn = false;
      this.isFadingOut = false;
    },
    handleTransitionEnd() {
      if (this.isFadingOut) {
        this.isFadingOut = false;
        this.isFadingIn = true;

        this.currentIndex = this.index;
      } else {
        this.resetTransitions();
      }
    },
    resetTranstitionsFallback() {
      this.timeout = setTimeout(() => {
        this.resetTransitions();
      }, this.timeoutDelay);
    },
  },
  watch: {
    index() {
      window.clearTimeout(this.timeout);

      this.resetTransitions();

      this.currentIndex = this.lastIndex;

      this.$nextTick(() => {
        this.isFadingOut = true;
        this.isFadingIn = false;

        this.resetTranstitionsFallback();
      });
    },
  },
  props: {
    pagination: Boolean,
    lastIndex: Number,
    index: Number,
    currentPage: Number,
    lastPage: Number,
    entry: Object,
    entries: Array,
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
      lastIndex: 0,
    };
  },
  computed: {
    classList() {
      return [
        'highlight-teaser',
        this.spacing,
        'vue-component',
        Tools.isTrue(this.reduceAnimationnimation) ? 'highlight-teaser--reduce-animation' : '',
      ];
    },
    style() {
      return `--highlight-teaser-animation-color: ${
        this.animationColor != '' ? this.animationColor : 'var(--color-primary)'
      };`;
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

      this.switchSlide(true);
    },
    prev() {
      if (this.isFirstEntry) return;

      this.switchSlide(false);
    },
    switchSlide(next) {
      const container = this.$refs.container;

      if (!container) return;

      const slickCarousel = container.querySelector('.js-slick-carousel');

      if (!slickCarousel) return;

      this.lastIndex = this.index;

      if (next) {
        this.index++;
      } else {
        this.index--;
      }

      $(slickCarousel).slick('slickGoTo', this.index);
    },
  },
  props: {
    entries: Array,
    limit: Number,
    spacing: String,
    reduceAnimationn: Boolean,
    animationColor: String,
  },
  template: `
    <div :class="classList" :style="style">
      <div class="highlight-teaser__container" ref="container">
        <div class="highlight-teaser__slider-container">
          <slider :options="sliderOptions" :hide-background="true" class="highlight-teaser__slider">
            <div class="highlight-teaser__entry" v-for="(entry, index) in limitedEntries" :key="index">
              <div class="highlight-teaser__entry-image">
                <v-img :img="entry.image.img" :alt="entry.image.alt" :cloudinary="entry.image.cloudinary" class="highlight-teaser__image" img-src-sets="highlightTeaser" />
              </div>
              <highlight-teaser-infos :pagination="pagination" :current-page="index + 1" :last-page="lastPage" :entry="entry" />
            </div>
          </slider>
        </div>

        <div class="highlight-teaser__overlay">
          <div class="highlight-teaser__overlay-container">
            <div class="highlight-teaser__overlay-infos">
              <highlight-teaser-infos
                :pagination="pagination"
                :current-page="currentPage"
                :last-page="lastPage"
                :entry="activeEntry"
                :entries="entries"
                :next="next"
                :prev="prev"
                :is-first-entry="isFirstEntry"
                :is-last-entry="isLastEntry"
                :is-changing="isChanging"
                :index="index"
                :last-index="lastIndex"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
};
