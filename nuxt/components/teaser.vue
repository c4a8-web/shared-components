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
<style lang="scss">
.teaser {
  @include utility-animation-options($distance: 135%, $duration: 0.8s);

  --color-teaser-copy-highlight: var(--color-copy-highlight);
  --color-teaser-background: var(--color-gk-light-grey);

  position: relative;
  padding: spacing(16) 0 spacing(10);

  &:not(.teaser--has-video) {
    cursor: pointer;
  }

  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 200vw;
    height: 60%;
    background-color: var(--color-teaser-background);
    z-index: -1;
    bottom: 0;
    left: -100%;

    @include media-breakpoint-up(md) {
      left: 0;
      width: calc(((100vw - var(--container-width)) / 2) + (var(--container-width) * 0.6));
      height: 100%;
    }
  }

  .teaser__headline {
    margin-bottom: spacing(6);
  }

  @include media-breakpoint-up(md) {
    padding-top: 0;
    padding-bottom: spacing(16);

    &.teaser--no-img {
      padding-top: spacing(16);
    }

    .teaser__logo {
      grid-area: Header;
      display: flex;
      justify-content: flex-end;
      margin-top: 0;
    }

    .teaser__overline,
    .teaser__headline,
    .teaser__text,
    .teaser__cta {
      grid-row: auto;
      margin-right: spacing(14);
    }

    .teaser__video-wrapper {
      grid-area: Right;
    }
  }

  @include media-breakpoint-up(lg) {
    .teaser__overline,
    .teaser__headline,
    .teaser__text,
    .teaser__cta {
      margin-right: spacing(24);
    }
  }
}

.teaser__overline {
  color: var(--color-teaser-copy-highlight);
}

.teaser__row {
  display: grid;

  @include media-breakpoint-up(md) {
    height: auto;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: min-content min-content min-content min-content min-content;
    grid-template-areas: 'Header Header' '. Right' '. Right' '. Right' '. Right';
  }
}

.teaser__cta {
  margin-top: spacing(6);

  @include media-breakpoint-up(md) {
    margin-top: spacing(12);
  }
}

.teaser__logo {
  margin: spacing(4) 0;
}

.teaser__video-wrapper {
  &[data-utility-animation-step] {
    --utility-animation-distance: 15%;

    animation-delay: 200ms;
  }
}
</style>
