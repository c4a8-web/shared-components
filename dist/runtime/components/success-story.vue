<template>
  <div
    :class="['success-story utility-animation', successStorySpacing, { 'is-sticky-scroller': successStorySticky }]"
    ref="root"
  >
    <div class="success-story__bg-clip">
      <div class="success-story__bg" :style="{ backgroundColor: successStory.bgColor }"></div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-md-10 mt-6 mt-lg-8 fade-in-bottom" data-utility-animation-step="1">
          <headline
            :level="successStoryLevel"
            :text="successStory.headline"
            :classes="`${successStoryHeadlineClass} success-story__headline`"
          />
          <div class="mt-5 mb-5 w-lg-65">{{ successStory.subline }}</div>
        </div>
        <div
          v-if="successStorySlider"
          class="col success-story__container js-slick-carousel fade-in-bottom"
          data-utility-animation-step="1"
          ref="container"
        >
          <div v-for="(video, index) in successStory.videos" :key="index" class="success-story__slide mb-lg-5">
            <video-inner :video="video" :lazy="true" />
          </div>
        </div>
        <template v-else>
          <div
            v-for="(video, index) in successStory.videos"
            :key="index"
            class="col-lg-6 col-md-10 mb-lg-5 fade-in-bottom"
            data-utility-animation-step="1"
          >
            <video-inner :video="video" :lazy="true" />
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
import UtilityAnimation from '../utils/utility-animation.js';
import StickyScroller from '../utils/sticky-scroller.js';
import Tools from '../utils/tools.js';

export default {
  tagName: 'success-story',
  props: {
    successStory: {
      type: Object,
      required: true,
    },
    level: {
      type: String,
      default: 'h2',
    },
    sticky: {
      type: Boolean,
      default: false,
    },
    spacing: {
      type: String,
      default: '',
    },
  },
  mounted() {
    if (!this.$refs.root) return;

    Tools.initSlickSlider(this.$refs.container, this.slickOptions);

    if (this.sticky) {
      StickyScroller.init([this.$refs.root]);
    }

    UtilityAnimation.init([this.$refs.root]);
  },
  computed: {
    successStorySlider() {
      return this.successStory?.videos?.length > 2;
    },
    successStoryLevel() {
      return this.level || 'h2';
    },
    successStorySticky() {
      return this.sticky;
    },
    successStorySpacing() {
      return this.spacing;
    },
    successStoryHeadlineClass() {
      return this.successStory.headlineClasses || 'h2-font-size';
    },
    slickOptions() {
      return {
        rows: 0,
        slidesToShow: 2,
        slidesToScroll: 2,
        prevArrow: '<span class="slick__arrow-left rounded-circle"></span>',
        nextArrow: '<span class="slick__arrow-right rounded-circle"></span>',
        // opt-out per instance via the successStory config (e.g. embedded in narrow post content)
        dots: this.successStory?.dots !== false,
        centerMode: false,
        dotsClass: 'slick-pagination is-default',
        responsive: [
          {
            breakpoint: 992,
            settings: {
              centerMode: true,
              infinite: true,
              centerPadding: '30px',
              slidesToShow: 2,
              slidesToScroll: 2,
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
            },
          },
        ],
      };
    },
  },
};
</script>
<style>
.success-story {
  position: relative;
  overflow: hidden;
}
@media (min-width: 992px) {
  .success-story {
    overflow: visible;
  }
}
.success-story [data-utility-animation-step] {
  --utility-animation-distance: 15%;
  animation-duration: 0.8s;
}

.success-story__bg-clip {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
}

.success-story__bg {
  position: absolute;
  height: 420vw;
  width: 148vh;
  left: -188px;
  top: 100px;
  transform: rotate(320deg);
  transform-origin: top left;
}
@media (min-width: 768px) {
  .success-story__bg {
    transform: rotate(310deg);
  }
}
@media (min-width: 992px) {
  .success-story__bg {
    left: -100px;
    top: 130px;
    transform: rotate(288deg);
  }
}

.success-story__slide {
  padding: 0;
}
@media (min-width: 576px) {
  .success-story__slide {
    padding: 0 0.5rem;
  }
}
@media (min-width: 992px) {
  .success-story__slide {
    padding: 0 1rem;
  }
}

@media (min-width: 576px) {
  .success-story__container {
    margin: 0 -0.5rem;
  }
}
@media (min-width: 992px) {
  .success-story__container {
    margin: 0 -1rem;
  }
}
</style>
