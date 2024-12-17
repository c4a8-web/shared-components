import Tools from '../tools.js';

export default {
  tagName: 'video-slider',
  data() {
    return {
      triggerButtonClick: false,
      currentTabIndex: 0,
      currentTab: null,
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
    handlePositionChange(_, slick, currentSlide) {
      this.currentTabIndex = slick.currentSlide;

      if (!this.triggerButtonClick) return;

      this.triggerButtonClick = false;
      this.currentTab = slick?.$slides[currentSlide];

      this.handleAfterChangeClick();
    },
    handleAfterChangeClick() {
      const videoButton = this.currentTab?.querySelector('.js-video-button');

      if (!videoButton) return;

      videoButton.click();
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
    handleVideoInnerEvent(index) {
      this.handleTabClick(index);
    },
    handleSliderClick(event) {
      const currentTarget = event.target;
      const parent = currentTarget.closest('.slick-slide');
      const isCloned = parent.classList.contains('slick-cloned');

      if (!parent || !isCloned) return;

      const tabIndex = parseInt(parent.dataset.slickIndex);

      this.handleTabClick(tabIndex);

      this.triggerButtonClick = true;
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
      <div class="video-slider__max-width slick--no-offset" ref="max-width" @click="handleSliderClick">
        <slider :options="options" :hide-background="true" :hide-container="true">
          <div class="video-slider__video-tab" v-for="(tab, index) in tabs" :key="index">
            <video-inner
              :video="{ ...tab.video, lightbox: true }"
              variant="compact"
              :no-animation="true"
              @lightboxClicked="handleVideoInnerEvent(index)"
            />
          </div>
        </slider>
        <div class="video-slider__footer">
          <cta v-bind="cta" v-if="cta" @click="handleCtaClick" />
        </div>
      </div>
    </div>
  `,
};
