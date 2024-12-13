import Tools from '../tools.js';

export default {
  tagName: 'video-slider',
  data() {
    return {
      currentTabIndex: 0,
      slickElement: null,
      options: {
        dots: false,
        centerMode: true,
        infinite: true,
        centerPadding: '20vw',
        slidesToShow: 1,
        responsive: [
          {
            breakpoint: 576,
            settings: {
              centerPadding: '10vw',
            },
          },
        ],
      },
    };
  },
  computed: {
    tabCount() {
      return this.tabs.length;
    },
    copyColor() {
      return this.color ? this.color : 'var(--color-copy)';
    },
    backgroundColor() {
      return this.bgColor ? this.bgColor : 'var(--color-black-4)';
    },
    style() {
      // TODO create a base component that can use a style override like this, since we use this quite often

      return `--color-video-slider-background: ${this.backgroundColor}; --color-video-slider-color: ${this.copyColor};`;
    },
  },
  mounted() {
    const maxWidth = this.$refs['max-width'];
    const carousel = maxWidth?.querySelector('.js-slick-carousel');

    if (!carousel) return;

    this.slickElement = $(carousel);

    this.bindEvents();
  },
  methods: {
    bindEvents() {
      this.slickElement.on('afterChange', this.handlePositionChange.bind(this));
    },
    handlePositionChange(_, slick) {
      this.currentTabIndex = slick.currentSlide;
    },
    handleCtaClick(e) {
      e.preventDefault();

      const href = this.cta?.href;

      if (href) {
        const element = document.querySelector(href);

        if (element) {
          Tools.scrollIntoView(element, true);
        }
      }
    },
    handleTabClick(index) {
      this.slickElement.slick('slickGoTo', index);

      this.currentTabIndex = index;
    },
  },
  props: {
    headline: {
      type: Object,
    },
    subline: {
      type: String,
      required: true,
    },
    tabs: {
      type: Array,
      required: true,
    },
    cta: {
      type: Object,
    },
  },
  template: `
    <div class="video-slider" :style="style">
      <div class="container">
        <div class="video-slider__row row">
          <div class="video-slider__col col">
            <div class="video-slider__main">
              <div class="video-slider__header">
                <headline :text="headline?.text" :level="headline?.level" classes="video-slider__headline h2-font-size" />
                <div class="video-slider__subline font-size-4 thin">{{ subline }}</div>
              </div>
              <div class="video-slider__tabs-wrapper">
              <div class="video-slider__tabs d-flex">
                <div
                  v-for="(tab, index) in tabs"
                  :key="index"
                  @click="handleTabClick(index)"
                  :class="['video-slider__tab', { active: index === currentTabIndex }]"
                >
                  {{ tab.label }}
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="video-slider__max-width slick--no-offset" ref="max-width">
        <slider :options="options" :hide-background="true" :hide-container="true">
          <div class="video-slider__video-tab" v-for="(tab, index) in tabs" :key="index">
            <video-inner :video="{ ...tab.video, lightbox: true }" variant="compact" :no-animation="true" />
          </div>
        </slider>
        <div class="video-slider__footer">
          <cta v-bind="cta" v-if="cta" @click="handleCtaClick" />
        </div>
      </div>
    </div>
  `,
};
