<template>
  <div :class="classList" :style="style" ref="root">
    <div class="container">
      <div :class="rowBackgroundClass">
        <div :class="colBackgroundClass">
          <div class="mb-4 w-100 fade-in-bottom" data-utility-animation-step="1" v-if="logo">
            <figure :class="logoClass">
              <v-img v-bind="logo" />
            </figure>
          </div>
          <div
            class="text-teaser__copy fade-in-bottom"
            style="line-height: 2.5rem !important"
            data-utility-animation-step="1"
          >
            {{ copy }}
          </div>
          <div :class="ctaListClass" data-utility-animation-step="1" v-if="ctaList">
            <template v-for="cta in ctaList">
              <cta v-bind="cta" />
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UtilityAnimation from '../utils/utility-animation.js';
export default {
  tagName: 'text-teaser',

  computed: {
    classList() {
      return ['text-teaser', 'utility-animation', 'vue-component', this.variant, this.spacing];
    },
    style() {
      return [
        this.background ? `background-image: url('${this.background}');` : '',
        this.bgColor ? `background-color: ${this.bgColor};` : '',
      ];
    },
    rowBackgroundClass() {
      return ['row', this.background ? 'justify-content-center' : ''];
    },
    colBackgroundClass() {
      return [
        this.background
          ? 'col-lg-6 py-11 d-flex text-center justify-content-center align-items-center flex-wrap font-size-4 font-weight-light'
          : 'col-lg-7 offset-lg-1 pt-8',
      ];
    },
    ctaListClass() {
      return ['pt-4 pt-lg-6 w-100 w-md-auto fade-in-bottom', 'vue-component'];
    },
    logoClass() {
      return ['text-teaser__logo-container', this.background ? 'mx-auto' : ''];
    },
    ctaListNormalize() {
      const fixedArr = this.ctaList.map((obj) => {
        const newObj = {};

        for (const key in obj) {
          if (key === 'ctaText') {
            newObj['text'] = obj[key];
          } else if (key === 'ctaHref') {
            newObj['href'] = obj[key];
          } else {
            newObj[key] = obj[key];
          }
        }
        return newObj;
      });
      return fixedArr;
    },
  },
  mounted() {
    if (!this.$refs.root) return;

    UtilityAnimation.init([this.$refs.root]);
  },
  props: {
    ctaList: Array,
    spacing: {
      type: String,
      default: '',
    },
    background: String,
    bgColor: String,
    logo: Object,
    copy: String,
  },
};
</script>
<style>
.text-teaser {
  background-repeat: no-repeat;
}
.text-teaser [data-utility-animation-step] {
  --utility-animation-distance: 75%;
}
.text-teaser [data-utility-animation-step].is-starting {
  animation-duration: 1s;
}

.text-teaser__logo-container {
  max-width: 6.5rem;
}
@media (min-width: 992px) {
  .text-teaser__logo-container {
    max-width: 7.5rem;
  }
}
</style>
