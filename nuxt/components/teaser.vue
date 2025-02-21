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
    spacing: String,
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
