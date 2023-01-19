import Tools from '../tools.js';

// TODO try to export this to the other components that use carousel options
export const defaultOptions = ({ length }) => {
  return {
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: '<span class="slick__arrow-left rounded-circle"></span>',
    nextArrow: '<span class="slick__arrow-right rounded-circle"></span>',
    dots: length > 3 ? true : false,
    centerMode: false,
    dotsClass: 'slick-pagination is-default',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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
          dots: length > 2 ? true : false,
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
          dots: length > 1 ? true : false,
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
          dots: length > 1 ? true : false,
        },
      },
    ],
  };
};

export default {
  tagName: 'slider',
  computed: {
    classList() {
      return ['slider', `${Tools.isTrue(this.hideContainer) === true ? '' : 'mt-10'}`, 'vue-component'];
    },
    headlineLevelValue() {
      return this.headlineLevel ? this.headlineLevel : 'h3';
    },
    headlineClassesValue() {
      return `h2-font-size ${this.headlineClasses ? this.headlineClasses : ''}`;
    },
    carouselOptions() {
      const childrenLength = this.childrenLength;
      console.log('carouselOptions ~ children', childrenLength);
      console.log(typeof 0);

      console.log(0 === childrenLength);

      if (childrenLength === 0) return null;
      console.log('carouselOptions ~ childrenLength', childrenLength);

      const options = defaultOptions({ length: 2 });

      options.slidesToShow = options.slidesToScroll = 1;

      return JSON.stringify(options);
    },
    childrenLength() {
      return this.$slots['content'].length;
    },
    // showContainer() {
    //   return this.childrenLength > 0;
    // },
  },
  data() {
    return {
      options: '',
    };
  },
  methods: {},
  props: {
    headline: String,
    headlineLevel: String,
    headlineClasses: String,
    hideContainer: {
      default: false,
    },
  },
  updated() {
    const children = this.$slots['content'].length;
    console.log('mounted ~ children', children);
    const options = defaultOptions({ length: children });
    options.slidesToShow = options.slidesToScroll = 1;
    this.options = JSON.stringify(options);
  },
  template: `
    <div :class="classList">
      <wrapper :hideContainer="hiddenContainer">
        <div class="row" v-if="headline">
          <div class="col-lg-12 col-md-10 mt-6 mt-lg-8 mb-4 mb-lg-6 text-center">
            <headline :level="headlineLevelValue" :text="headline" :classes="headlineClassesValue" />
            <span v-if="subline" :class="sublineClassesValue" >{{ subline }}</span>
          </div>
        </div>
        <div class="slider__container js-slick-carousel" :data-hs-slick-carousel-options="options" >
          <slot name='content'></slot>
        </div>
      </wrapper>
    </div>`,
};
