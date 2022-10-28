import Tools from '../tools.js';

// TODO rename component
export default {
  tagName: 'check-card',
  computed: {
    classList() {
      return ['check-card vue-component'];
    },
    checkCardsContainerClass() {
      return ['check-card__container js-slick-carousel'];
    },
    headlineLevelValue() {
      return this.headlineLevel ? this.headlineLevel : 'h3';
    },
    headlineClassesValue() {
      return `h2-font-size ${this.headlineClasses ? this.headlineClasses : ''}`;
    },
    sublineClassesValue() {
      return `check-card__subline w-lg-65 ${this.sublineClasses ? this.sublineClasses : 'font-size-2'}`;
    },
    itemClass() {
      return 'check-card__slide';
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
  },
  methods: {},
  props: {
    headline: String,
    headlineLevel: String,
    headlineClasses: String,
    subline: String,
    sublineClasses: String,
    checks: {
      default: null,
    },
    symbol: {
      default: null,
    }
  },
  template: `
    <div :class="classList">
      <div class="container">
        <div class="row" v-if="headline">
          <div class="col-lg-12 col-md-10 mt-6 mt-lg-8 mb-9">
            <headline class="mb-10" :level="headlineLevelValue" :text="headline" :classes="headlineClassesValue" />
            <div v-if="subline" :class="sublineClassesValue"> {{ subline }}</div>
          </div>
        </div>
        <div :class="checkCardsContainerClass" :data-hs-slick-carousel-options="carouselOptions">
          <template v-for="(check, index) in checks">
            <div :class="itemClass" v-if="index <= 1">
              <card :url="check.url" :title="check.title" :blog-title-pic="check.picture" :excerpt="check.subline" :sub-points="check.subpoints" long=true />
            </div>
          </template>
        </div>
        <div class="mt-10">
          <scroll-arrow :symbol="symbol" />
        </div>
      </div>
    </div>
  `,
};
