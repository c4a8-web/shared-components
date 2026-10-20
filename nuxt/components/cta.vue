<template>
  <component
    :is="tag"
    role="button"
    :class="classList"
    :data-text="text"
    :href="href ? href : null"
    :data-analytics="analytics ? analytics : null"
    :type="type ? type : null"
    :target="targetValue ? targetValue : null"
    :data-alternative-href="alternativeHref ? alternativeHref : null"
    :data-trigger="trigger ? trigger : null"
    :data-trigger-id="triggerId ? triggerId : null"
    @click="handleClick"
  >
    <span class="cta__text">{{ text }}</span>
    <icon :icon="iconName" v-if="hasIcon" :size="sizeValue" :stroke-width="4" />
  </component>
</template>

<script>
import State from '../utils/state.js';
import Tools from '../utils/tools.js';

export default {
  tagName: 'cta',
  computed: {
    tag() {
      return this.href || this.alternativeHref || this.target ? 'a' : 'button';
    },
    hasIcon() {
      return this.link || this.externalValue || this.icon || this.downloadValue;
    },
    externalValue() {
      return Tools.isTrue(this.external);
    },
    downloadValue() {
      return Tools.isTrue(this.download);
    },
    classList() {
      return [
        `${this.baseClass} ${this.innerSkin}`,
        this.classes ? this.classes : '',
        this.download ? 'cta--download' : '',
        this.external ? 'cta--external' : '',
        this.icon ? `cta--has-icon cta--icon-${this.icon}` : '',
        Tools.isTrue(this.reversed) === true ? 'cta--reversed' : '',
        Tools.isTrue(this.monochrome) === true ? 'cta--monochrome' : '',
        Tools.isTrue(this.small) === true ? 'cta--small' : '',
        this.link && Tools.isTrue(this.active) === true ? State.ACTIVE : '',
        Tools.isTrue(this.loading) ? State.LOADING : '',
        Tools.isTrue(this.hasBackground) === true ? 'cta--has-background' : '',
        this.onSurface ? State.ON_SURFACE : '',
        'vue-component',
      ];
    },
    innerSkin() {
      if (this.link) {
        return this.skin ? this.skin : '';
      } else {
        return this.skin ? `btn-${this.skin}` : 'btn-primary';
      }
    },
    innerWidth() {
      if (this.width) {
        return this.width;
      } else {
        return `w-100 ${this.grow ? '' : 'w-lg-auto'}`;
      }
    },
    baseClass() {
      let baseClass = this.$.type.tagName;

      if (this.link) {
        baseClass += ' link';
      } else {
        baseClass += ' btn ' + this.innerWidth;
      }

      return baseClass;
    },
    iconName() {
      let iconName;

      if (this.icon) {
        iconName = this.icon;
      } else if (this.externalValue) {
        iconName = 'arrow-external';
      } else if (this.downloadValue) {
        iconName = 'arrow-external';
      } else if (this.link) {
        iconName = 'arrow';
      }
      return iconName;
    },
    targetValue() {
      return this.externalValue ? '_blank' : this.target;
    },
    sizeValue() {
      return 'medium';
    },
  },
  methods: {
    handleClick(e) {
      if (!this.javascript) return;

      e.preventDefault();

      const functionName = this.javascript.split('(')[0];
      const params = this.javascript.match(/\(([^)]+)\)/)[1].replace(/'/g, '');

      if (!window[functionName]) return console.debug(`Function ${functionName} not found.`);

      window[functionName](params);
    },
  },
  props: {
    href: {
      default: null,
    },
    button: Boolean,
    text: String,
    analytics: {
      default: null,
    },
    link: Boolean,
    external: {
      default: null,
    },
    skin: String,
    width: String,
    grow: Boolean,
    type: String,
    target: String,
    alternativeHref: {
      default: null,
    },
    trigger: String,
    triggerId: String,
    icon: String,
    download: {
      default: null,
    },
    reversed: {
      default: null,
    },
    monochrome: {
      default: null,
    },
    small: {
      default: null,
    },
    active: {
      default: null,
    },
    classes: {
      default: '',
      type: String,
    },
    loading: {
      default: null,
    },
    hasBackground: {
      default: null,
    },
    javascript: {
      default: null,
      type: String,
    },
    onSurface: {
      default: null,
      type: Boolean,
    },
  },
};
</script>
<style lang="scss">
:root {
  --cta-loading-spacing: #{spacing(12)};
}

.hover__parent:hover .cta,
.shared-components .cta:hover {
  --cta-copy-color: var(--color-primary-accent);

  box-shadow: none;

  &.cta--external {
    .icon svg {
      @include move-top-right;
    }
  }

  &.cta--download {
    .icon svg {
      animation: ctaDownload;
      animation-duration: 0.4s;
      animation-fill-mode: forwards;
      animation-timing-function: $animation-transition;
    }
  }

  &.link {
    --cta-copy-color: var(--color-primary-accent);

    &:not(.cta--external) {
      svg {
        @include move-right-left;

        stroke: var(--color-svg-icon--hover);
      }
    }

    .cta__text {
      font-weight: bold;
    }
  }

  &:not(.btn):not(.custom):not(.nav-link) {
    &.is-light {
      color: var(--color-gk-white);
    }
  }

  &.btn-primary {
    --cta-btn-color: var(--color-primary-accent);
    --cta-copy-color: var(--color-copy-on-primary-accent);

    &.on-surface:not(.is-loading),
    &:not(.is-loading) {
      --cta-border-color: transparent;
    }

    &.is-light {
      &:not(label.btn):not([href]) {
        background-color: var(--color-primary-accent-light);
        color: var(--color-primary-accent);
      }

      background-color: var(--color-primary-accent-light);
      color: var(--color-primary-accent);
    }

    &.on-surface {
      --cta-btn-color: var(--color-primary-accent-on-surface);
      --cta-copy-color: var(--color-copy-on-primary-accent-on-surface);
      --cta-background-accent-color: var(--cta-btn-color);
      --cta-background-color: var(--cta-btn-color);
      // --cta-background-color: transparent;

      &::after {
        color: inherit;
      }
    }

    &::after {
      opacity: 1;
      background-position: left bottom;
    }
  }

  &.btn-secondary {
    --cta-btn-color: var(--color-secondary-accent);
    --cta-copy-color: var(--color-copy-on-secondary-accent);

    &.on-surface:not(.is-loading),
    &:not(.is-loading) {
      --cta-border-color: var(--cta-btn-color);
    }

    &.is-cutoff {
      &::before {
        background: var(--cta-btn-color);
      }
    }

    &.is-light {
      border-color: var(--color-secondary-on-surface);
      color: var(--color-copy-on-secondary-on-surface);

      &::before {
        background: var(--color-secondary-on-surface);
      }

      &::after {
        opacity: 1;
        background-position: left bottom;
      }
    }

    &.on-surface {
      --cta-btn-color: var(--color-secondary-accent-on-surface);
      --cta-copy-color: var(--color-copy-on-secondary-accent-on-surface);
      --cta-background-accent-color: var(--cta-btn-color);

      &::after {
        color: inherit;
      }
    }
  }
}

.cta {
  --cta-active-size: 3px;
  --cta-border-width: 2px;

  position: relative;
  border-radius: 0;

  &.is-loading,
  .is-loading &:not(.header .cta) {
    --cta-loading-delay: 0.4s;
    --cta-loading-start-duration: 1.1s;

    &:active,
    &:focus {
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      box-shadow: none;
    }

    pointer-events: none;
    opacity: 0.8;
    animation: ctaLoadingButton 1s forwards;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: var(--color-primary);
      transform-origin: center;
      animation:
        ctaLoadingStart var(--cta-loading-start-duration) forwards var(--cta-loading-delay),
        ctaLoadingLoop calc(var(--cta-loading-start-duration) - 0.1s) ease-in-out infinite
          calc(var(--cta-loading-delay) + var(--cta-loading-start-duration) - 0.2s);
    }

    .cta__text {
      position: relative;
      animation: ctaLoadingText var(--cta-loading-start-duration) forwards;
    }
  }

  &.cta--has-icon,
  &.cta--download,
  &.cta--external {
    &::after,
    &.btn {
      padding-right: spacing(12);
      text-align: left;
      padding-left: spacing(4);
    }

    &:not(.link) {
      .icon {
        position: absolute;
        width: 16px;
        height: 16px;
        top: calc(50% - 1px);
        transform: translateY(-50%);
        right: spacing(4);
        z-index: 2;
      }
    }
  }

  &.cta--external {
    &.link {
      .icon {
        padding-left: spacing(2);
        width: 20px;
        height: 20px;
      }
    }
  }

  &.cta--reversed {
    flex-direction: row-reverse;

    &.link {
      align-items: flex-start;

      .icon {
        --cta-icon-offset: -3px;

        height: calc(var(--type-default-line-height) * 1rem + var(--cta-icon-offset));

        @include media-breakpoint-up(lg) {
          --cta-icon-offset: 2px;
        }
      }

      svg {
        margin: 0 spacing(3) 0 0;
        width: spacing(4);
        height: spacing(4);
        line-height: 2rem;

        @include media-breakpoint-up(lg) {
          margin-right: spacing(4);
          width: spacing(5);
          height: spacing(5);
        }
      }
    }
  }

  &.cta--download {
    &:not(.link) {
      .icon {
        transform: translateY(-50%) rotate(135deg);
        width: 15px;
        height: 15px;
      }
    }
  }

  &.btn {
    @include font-style('font-size-1');

    & {
      font-weight: bold;
      display: inline-block;
      padding: spacing(3) spacing(4);
      text-align: center;
      vertical-align: middle;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      background-color: transparent;
      transition: all $transition-tween-t1;
      border: var(--cta-border-width) solid transparent;
    }

    &:not(:disabled):not(.disabled) {
      cursor: pointer;
    }
  }

  &.link {
    font-size: var(--cta-custom-font-size, #{$font-size-base});
    display: inline-flex;
    align-items: center;
    text-align: left;
    &:not(:last-of-type) {
      margin-right: 0.5rem;
    }

    &:not(.cta--reversed):not(.cta--external) {
      svg {
        margin: 0 0 0 spacing(3);
        stroke: var(--color-primary);
      }
    }
  }

  &.cta--has-icon {
    &.cta--icon-emergency {
      &::after,
      &.btn {
        padding-right: spacing(16);
      }

      .icon {
        --icon-scale: 2.3;

        right: spacing(6);

        svg {
          stroke-width: 0.3;
          stroke: currentColor;
        }
      }
    }
  }

  &.cta--small {
    &::after,
    &.btn {
      padding: spacing(2);
    }

    &.cta--has-icon,
    &.cta--download,
    &.cta--external {
      &::after,
      &.btn {
        padding-right: spacing(10);
      }
    }

    &:not(.link) .icon {
      transform: translateY(-50%) scale(0.75);
    }

    &.cta--download:not(.link) .icon {
      transform: translateY(-50%) rotate(135deg) scale(0.75);
    }
  }
}

@mixin cta-no-btn-is-light {
  color: var(--color-gk-white);
}

@mixin cta-btn-primary-is-light {
  color: var(--color-primary);
  background-color: var(--color-gk-white);

  &:not(label.btn):not([href]) {
    color: var(--color-primary);
    background-color: var(--color-gk-white);
  }

  &::after {
    display: none;
  }
}

@mixin cta-btn-secondary-is-light {
  border-color: var(--color-gk-white);
  color: var(--color-gk-white);

  &::before {
    background: var(--color-gk-white);
  }

  &::after {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    content: attr(data-text);
    color: var(--color-primary-accent);
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to right, rgba(255, 255, 255, 0.8) 50%, transparent 50%);
    background-size: 200% 100%;
    background-position: right bottom;
    opacity: 0;
    transition: background 0.5s $animation-transition;
  }
}

.shared-components {
  $cutoffSize: 15px;

  .cta {
    --cta-background-accent-color: transparent;
    --cta-copy-color: var(--color-primary);
    --cta-background-color: transparent;
    --cta-border-color: transparent;

    color: var(--cta-copy-color);
    -webkit-appearance: none;
    appearance: none;
    background-color: var(--cta-background-color);
    border-color: var(--cta-border-color);

    &.link {
      --cta-copy-color: var(--color-link);
    }

    &.cta--monochrome {
      --cta-copy-color: var(--color-copy) !important;
      --cta-border-color: var(--color-copy) !important;
    }

    &:not(.btn):not(.custom):not(.nav-link) {
      &.is-light {
        @include cta-no-btn-is-light;
      }
    }

    &.is-cutoff:not(.link) {
      clip-path: polygon(calc(100% - #{$cutoffSize}) 0, 100% #{$cutoffSize}, 100% 100%, 0 100%, 0 0);
      position: relative;
    }

    &.btn-primary {
      --cta-copy-color: var(--color-copy-on-primary);
      --cta-background-accent-color: var(--color-primary-accent);
      --cta-background-color: var(--color-primary);
      --cta-border-color: transparent;

      border-radius: 0;

      // TODO figure out what this case is
      // &:not(label.btn):not([href]) {
      //   --cta-copy-color: var(--color-copy-on-primary);
      //   --cta-background-color: var(--color-primary);
      // }

      &:not(.is-loading) {
        --cta-border-color: var(--color-primary);
      }

      &::after {
        position: absolute;
        left: calc(-1 * var(--cta-border-width));
        top: calc(-1 * var(--cta-border-width));
        width: calc(100% + (var(--cta-border-width) * 2));
        height: calc(100% + (var(--cta-border-width) * 2));
        content: attr(data-text);
        color: var(--cta-copy-color);
        display: flex;
        justify-content: center;
        align-items: center;
        background: linear-gradient(to right, var(--cta-background-accent-color) 50%, transparent 50%);
        background-size: 200% 100%;
        background-position: right bottom;
        opacity: 0;
        transition: background 0.5s $animation-transition;
      }

      &.is-light-lg {
        @include media-breakpoint-up(lg) {
          background-color: var(--color-primary-on-surface);
          color: var(--color-copy-on-primary-on-surface);

          &:not(.is-loading) {
            border-color: var(--color-primary-on-surface);
          }
        }
      }

      &.is-light,
      &.on-surface {
        --cta-copy-color: var(--color-copy-on-primary-on-surface);
        --cta-background-color: var(--color-primary-on-surface);

        &:not(.is-loading) {
          --cta-border-color: var(--color-primary-on-surface);
        }
      }
    }

    &.btn-secondary {
      --cta-copy-color: var(--color-copy-on-secondary);
      --cta-background-accent-color: var(--color-secondary-accent);
      --cta-background-color: transparent;
      --cta-border-color: var(--color-secondary);

      &.is-cutoff {
        &::before {
          clip-path: polygon(calc(100% - #{$cutoffSize} + 1px) 0, 100% calc(#{$cutoffSize} - 1px), 100% 100%, 100% 0);
          background: var(--cta-border-color);
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          right: 0;
          height: 100%;
          display: block;
          transition: background 0.5s $animation-transition;
        }
      }

      &.cta--has-background {
        background-color: rgba(255, 255, 255, 0.9);
      }

      &.is-light {
        @include cta-btn-secondary-is-light;
      }

      &.is-light-lg {
        @include media-breakpoint-up(lg) {
          @include cta-btn-secondary-is-light;
        }
      }

      &.on-surface {
        --cta-copy-color: var(--color-copy-on-secondary-on-surface);
        --cta-background-accent-color: var(--color-secondary-accent-on-surface);
        --cta-background-color: transparent;
        --cta-border-color: var(--color-secondary-on-surface);
      }
    }

    &.active {
      color: var(--color-active);
    }
  }
}

.cta__text {
  position: relative;
}

cta {
  @include vue-loading;
}

@keyframes ctaDownload {
  0% {
    transform: translateX(0%);
  }

  30% {
    transform: translateX(20%) translateY(-10%);
  }

  100% {
    transform: translateX(0%);
  }
}

@keyframes ctaLoadingLoop {
  30%,
  0% {
    transform: translateX(-50%) rotate(-180deg);
  }

  100% {
    transform: translateX(-50%) rotate(0deg);
  }
}

@keyframes ctaLoadingStart {
  0% {
    max-width: 1000px;
    max-height: 200px;
    left: 0;
  }

  90%,
  100% {
    max-width: var(--cta-loading-spacing);
    max-height: var(--cta-loading-spacing);
    left: 50%;
    transform: translateX(-50%);
  }
}

@keyframes ctaLoadingText {
  0%,
  20% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

@keyframes ctaLoadingButton {
  0% {
    background-color: inherit;
  }

  100% {
    background-color: transparent;
  }
}
</style>
