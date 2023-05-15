import Tools from '../tools.js';
import State from '../state.js';

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
          infinite: false,
          centerPadding: '30px',
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: length > 2 ? true : false,
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
      return [
        'slider',
        `${Tools.isTrue(this.hideContainer) === true ? '' : this.getSpacing}`,
        `${this.backgroundClass}`,
        'vue-component',
      ];
    },
    getSpacing() {
      return this.spacing ? this.spacing : '';
    },
    headlineLevelValue() {
      return this.headlineLevel ? this.headlineLevel : 'h3';
    },
    headlineClassesValue() {
      return `slider__headline ${this.headlineClasses ? this.headlineClasses : 'h3-font-size'}`;
    },
    carouselOptions() {
      const childrenLength = this.childrenLength;

      if (childrenLength === 0) return null;

      const options = defaultOptions({ length: childrenLength });
      const slidesToShow = 1;

      options.slidesToShow = options.slidesToScroll = slidesToShow;
      options.dots = true;

      options.responsive.forEach((breakpoint) => {
        breakpoint.settings.dots = true;
        breakpoint.settings.slidesToScroll = breakpoint.settings.slidesToShow = slidesToShow;
      });

      return JSON.stringify(options);
    },
    childrenLength() {
      return this.children?.length || 0;
    },
    children() {
      return this.$slots.default();
    },
    hideBackgroundValue() {
      return Tools.isTrue(this.hideBackground);
    },
    backgroundClass() {
      return this.hideBackgroundValue === false ? State.HAS_BACKGROUND : '';
    },
    backgroundColor() {
      return this.bgColor ? this.bgColor : this.defaultBgColor;
    },
    style() {
      if (this.hideBackgroundValue) return;

      return {
        'background-color': this.backgroundColor,
      };
    },
  },
  data() {
    return {
      options: '',
      defaultBgColor: 'var(--color-bg-grey)',
    };
  },
  props: {
    headline: String,
    headlineLevel: String,
    headlineClasses: String,
    spacing: String,
    hideContainer: {
      default: false,
    },
    hideBackground: {
      default: false,
    },
    bgColor: String,
  },
  // TODO move shape to a vue component and insert it here
  template: `
    <div :class="classList">
      <div class="slider__bg" v-if="!hideBackgroundValue">
        <figure class="svgshape" style="pointer-events: all; transform: translateY(2px);">
          <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 100 10">
            <polygon :fill="backgroundColor" points="-5,10 100,10 100,0" />
          </svg>
        </figure>
      </div>
      <wrapper :hideContainer="hiddenContainer" classes="slider__wrapper" :style="style">
        <div class="row" v-if="headline">
          <div class="slider__header col-lg-12 col-md-10 mt-6 mt-lg-8 mb-6 mb-lg-8 text-center">
            <headline :level="headlineLevelValue" :text="headline" :classes="headlineClassesValue" />
            <span v-if="subline" :class="sublineClassesValue" >{{ subline }}</span>
          </div>
        </div>
        <div class="slider__container js-slick-carousel" :data-hs-slick-carousel-options="carouselOptions" >
          <wrapper-slot-items :items="$slots.default"></wrapper-slot-items>
        </div>
      </wrapper>
    </div>`,
};
