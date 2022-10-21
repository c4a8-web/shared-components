import Tools from '../tools.js'

export default {
  tagName: 'check-card',
  computed: {
    classList() {
      return [
        'check-card',
        'vue-component',
      ];
    },
    checkCardsContainerClass() {
      return [
        'check-card__container',
        `${Tools.isTrue(this.slider) === true ? 'js-slick-carousel' : 'row mb-3'}`,
        'vue-component'
      ]
    },
    headlineLevelValue() {
      return this.headlineLevel ? this.headlineLevel : 'h3'
    },
    headlineClassesValue() {
      return `h2-font-size ${this.headlineClasses ? this.headlineClasses : ''}`
    },
    sublineClassesValue() {
      return `check-card__subline ${this.sublineClasses ? this.sublineClasses : 'font-size-2'}`
    },
    itemClass() {
      return `${
        Tools.isTrue(this.slider) === true ? 'mb-6 mb-lg-0 check-card__slide' : 'col-sm-6 col-lg-4 mb-3 mb-sm-8'
      }`;
    },
  },
  carouselOptions() {
    const obj = {
      slidesToShow: 2,
      slidesToScroll: 2,
      prevArrow: '<span class="slick__arrow-left rounded-circle"></span>',
      nextArrow: '<span class="slick__arrow-right rounded-circle"></span>',
      dots: this.checks.length > 2 ? true : false,
      centerMode: false,
      dotsClass: 'slick-pagination is-default',
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 992,
          settings: {
            centerMode: true,
            infinite: true,
            centerPadding: '30px',
            slidesToShow: 2,
            slidesToScroll: 2,
            dots: this.checks.length > 2 ? true : false,
          },
        },
        {
          breakpoint: 768,
          settings: {
            centerMode: true,
            infinite: false,
            centerPadding: '30px',
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: this.checks.length > 1 ? true : false,
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
            dots: this.checks.length > 1 ? true : false,
          },
        },
      ],
    };
    return JSON.stringify(obj);
  },
  methods: {
  },
  props: {
    slider: {
      default: null,
    },
    headline: String,
    headlineLevel: String,
    headlineClasses: String,
    subline: String,
    sublineClasses: String,
    checks: {
      default: null,
    }
  },
  template: `
  <div :class="classList">
    <div class="row" v-if="headline">
      <div class="col-lg-12 col-md-10 mt-6 mt-lg-8 mb-4 mb-lg-6">
        <headline :level="headlineLevelValue" :text="headline" :classes="headlineClassesValue" />
        <span v-if="subline" :class="sublineClassesValue"> {{ subline }}</span>
      </div>
    </div>
    <div :class="checkCardsContainerClass" :data-hs-slick-carousel-options="carouselOptions">
      <template v-for="(check, index) in checks">
        <div :class="itemClass" v-if="index <= 1">
          <card :url="check.url" :title="check.title" :blog-title-pic="check.picture" :excerpt="check.subline" :sub-points="check.subpoints" :long="check.long" />
        </div>
      </template>
    </div>
  </div>
  `,
};
