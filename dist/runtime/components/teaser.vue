<template>
  <div :class="classList" @click="handleClick" ref="root">
    <div class="container">
      <div class="row">
        <div class="teaser__row col">
          <span class="teaser__overline fade-in-bottom" data-utility-animation-step="1">{{ overline }}</span>
          <headline :text="headline" :level="'h2'" :classes="headlineClassesWithDefault" :utilityAnimationStep="1" />
          <div class="teaser__video-wrapper fade-in-bottom" data-utility-animation-step="1">
            <video-frame :id="id" :thumb="thumb" :alt="alt" :preset="preset" />
          </div>
          <div class="teaser__logo fade-in-bottom" data-utility-animation-step="1">
            <v-img :img="logo" :cloudinary="true" :alt="logoAlt" />
          </div>
          <div class="teaser__text font-size-2 fade-in-bottom" data-utility-animation-step="1">{{ computedText }}</div>
          <div class="teaser__cta fade-in-bottom" data-utility-animation-step="1">
            <cta 
              :text="ctaText"
              :href="ctaHref"
              :link="link"
              :target="target"
              :type="type"
              width="w-100 w-md-auto"
              :external="ctaExternal"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import UtilityAnimation from '../utils/utility-animation.js';

export default {
  tagName: 'teaser',
  props: {
    ctaText: String,
    ctaHref: String,
    type: String,
    link: String,
    target: String,
    ctaExternal: String,
    thumb: String,
    alt: String,
    id: String,
    headline: String,
    headlineClasses: String,
    overline: String,
    logo: String,
    logoAlt: String,
    text: String,
    textHtml: {
      type: Boolean,
      default: false,
    },
    preset: {
      type: String,
      default: 'teaser',
    },
    spacing: {
      type: String,
      default: '',
    },
  },
  computed: {
    classList() {
      return [
        'teaser',
        'utility-animation',
        this.logo ? '' : 'teaser--no-img',
        this.spacing,
        this.id ? 'teaser--has-video' : 'hover__parent',
      ];
    },
    computedText() {
      if (!this.textHtml && this.text) {
        return this.text.replace(/<[^>]*>/g, '');
      }
      return this.text;
    },
    headlineClassesWithDefault() {
      return (this.headlineClasses || '') + ' teaser__headline fade-in-bottom';
    },
  },
  mounted() {
    if (!this.$refs.root) return;

    UtilityAnimation.init([this.$refs.root]);
  },
  methods: {
    handleClick() {
      if (!this.id) {
        const link = this.$el.querySelector('.teaser__cta a');
        if (link) link.click();
      }
    },
  },
};
</script>
<style>
.teaser {
  --color-teaser-copy-highlight: var(--color-copy-highlight);
  --color-teaser-background: var(--color-gk-light-grey);
  position: relative;
  padding: 4rem 0 2.5rem;
}
.teaser [data-utility-animation-step] {
  --utility-animation-distance: 135%;
}
.teaser [data-utility-animation-step].is-starting {
  animation-duration: 0.8s;
}
.teaser:not(.teaser--has-video) {
  cursor: pointer;
}
.teaser::after {
  content: "";
  display: block;
  position: absolute;
  width: 200vw;
  height: 60%;
  background-color: var(--color-teaser-background);
  z-index: -1;
  bottom: 0;
  left: -100%;
}
@media (min-width: 768px) {
  .teaser::after {
    left: 0;
    width: calc((100vw - var(--container-width)) / 2 + var(--container-width) * 0.6);
    height: 100%;
  }
}
.teaser .teaser__headline {
  margin-bottom: 1.5rem;
}
@media (min-width: 768px) {
  .teaser {
    padding-top: 0;
    padding-bottom: 4rem;
  }
  .teaser.teaser--no-img {
    padding-top: 4rem;
  }
  .teaser .teaser__logo {
    grid-area: Header;
    display: flex;
    justify-content: flex-end;
    margin-top: 0;
  }
  .teaser .teaser__overline,
  .teaser .teaser__headline,
  .teaser .teaser__text,
  .teaser .teaser__cta {
    grid-row: auto;
    margin-right: 3.5rem;
  }
  .teaser .teaser__video-wrapper {
    grid-area: Right;
  }
}
@media (min-width: 992px) {
  .teaser .teaser__overline,
  .teaser .teaser__headline,
  .teaser .teaser__text,
  .teaser .teaser__cta {
    margin-right: 6rem;
  }
}

.teaser__overline {
  color: var(--color-teaser-copy-highlight);
}

.teaser__row {
  display: grid;
}
@media (min-width: 768px) {
  .teaser__row {
    height: auto;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: min-content min-content min-content min-content min-content;
    grid-template-areas: "Header Header" ". Right" ". Right" ". Right" ". Right";
  }
}

.teaser__cta {
  margin-top: 1.5rem;
}
@media (min-width: 768px) {
  .teaser__cta {
    margin-top: 3rem;
  }
}

.teaser__logo {
  margin: 1rem 0;
}

.teaser__video-wrapper[data-utility-animation-step] {
  --utility-animation-distance: 15%;
  animation-delay: 200ms;
}
</style>
