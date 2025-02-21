<template>
  <div>
    <div v-if="container" :class="containerClass" :style="headlineStyle" ref="root">
      <div :class="rowClass">
        <div :id="parentId" :class="mainClass" :style="headlineStyle">
          <div :class="playerClass" :data-hs-video-player-options="videoPlayerOptions" data-utility-animation-step="1">
            <div class="video-frame__target embed-responsive">
              <div :id="targetId"></div>
            </div>
            <div v-if="headline" class="video-frame__headline-container px-4" :class="headline.alignment">
              <headline :text="headline.text" :classes="'video-frame__headline'" />
            </div>
            <div class="video-frame__play-wrapper">
              <span class="video-frame__play video-player-icon video-frame__player-icon">
                <i class="fas fa-play"></i>
              </span>
            </div>
            <v-img :img="thumb" :cloudinary="true" :alt="alt" :preset="preset" />
          </div>
        </div>
        <div v-if="corner" :class="cornerClass">
          <v-img :img="corner.img" :preset="preset" :cloudinary="corner.cloudinary" :alt="corner.alt" />
        </div>
      </div>
    </div>
    <template v-else>
      <div :id="parentId" :class="mainClass" :style="headlineStyle" ref="root">
        <div :class="playerClass" :data-hs-video-player-options="videoPlayerOptions" data-utility-animation-step="1">
          <div class="video-frame__target embed-responsive">
            <div :id="targetId"></div>
          </div>
          <div v-if="headline" class="video-frame__headline-container px-4" :class="headline.alignment">
            <headline :text="headline.text" :classes="'video-frame__headline'" />
          </div>
          <div class="video-frame__play-wrapper">
            <span class="video-frame__play video-player-icon video-frame__player-icon">
              <i class="fas fa-play"></i>
            </span>
          </div>
          <v-img :img="thumb" :cloudinary="true" :alt="alt" :preset="preset" />
        </div>
      </div>
      <div v-if="corner" :class="cornerClass">
        <v-img :img="corner.img" :preset="preset" :cloudinary="corner.cloudinary" :alt="corner.alt" />
      </div>
    </template>
  </div>
</template>

<script>
import UtilityAnimation from '../utils/utility-animation.js';

export default {
  tagName: 'video-frame',
  props: {
    thumb: String,
    alt: String,
    id: String,
    preset: {
      type: String,
      default: 'fullscreen4k',
    },
    container: {
      type: Boolean,
      default: false,
    },
    corner: {
      type: [Object, Boolean],
      default: false,
    },
    spacingTop: {
      type: Boolean,
      default: false,
    },
    fullWidth: {
      type: Boolean,
      default: false,
    },
    headline: {
      type: [Object, Boolean],
      default: false,
    },
    sticky: {
      type: Boolean,
      default: false,
    },
    cta: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    if (!this.$refs.root) return;

    UtilityAnimation.init([this.$refs.root]);
  },
  computed: {
    hasVideo() {
      return !!this.id;
    },
    parentId() {
      return `video-frame__parent-id-${this.id}`;
    },
    targetId() {
      return `video-frame__target-id-${this.id}`;
    },
    containerClass() {
      return [
        'container',
        'utility-animation',
        'has-background',
        'video-frame__container',
        {
          'video-frame__container--spacing': this.spacingTop,
          'is-sticky-scroller': this.sticky,
          'video-frame--top-overflow': this.corner && this.corner.topOverflow,
        },
      ];
    },
    rowClass() {
      return ['row', 'justify-content-center', { 'position-relative': this.corner }];
    },
    mainClass() {
      return [
        'video-frame',
        this.hasVideo ? 'video-frame--has-video' : 'hover__parent',
        this.container ? 'video-frame--container' : 'has-background utility-animation',
        {
          'video-frame--full-width': this.fullWidth,
          'is-sticky-scroller': !this.container && this.sticky,
        },
      ];
    },
    playerClass() {
      return ['video-frame__player', 'fade-in-bottom', this.hasVideo ? 'js-inline-video-player' : ''];
    },
    cornerClass() {
      return [
        'video-frame__corner-img',
        {
          'video-frame__corner-img--top-overflow': this.corner && this.corner.topOverflow,
        },
        this.corner && this.corner.classes ? this.corner.classes : '',
      ];
    },
    headlineStyle() {
      if (this.headline && this.headline.color) {
        return { '--video-frame-headline-color': `var(${this.headline.color})` };
      }
      return {};
    },
    videoPlayerOptions() {
      if (!this.id) return null;
      return JSON.stringify({
        videoId: this.id,
        parentSelector: `#${this.parentId}`,
        targetSelector: `#${this.targetId}`,
        isAutoplay: true,
        classMap: {
          toggle: 'video-frame--played',
        },
      });
    },
  },
};
</script>
