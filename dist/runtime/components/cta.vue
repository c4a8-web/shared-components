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
<style>
:root {
  --cta-loading-spacing: 3rem;
}

.hover__parent:hover .cta,
.shared-components .cta:hover {
  --cta-copy-color: var(--color-primary-accent);
  box-shadow: none;
}
.hover__parent:hover .cta.cta--external .icon svg,
.shared-components .cta:hover.cta--external .icon svg {
  animation: moveTopRight;
  animation-duration: 0.4s;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.19, 1, 0.2, 1);
}
.hover__parent:hover .cta.cta--download .icon svg,
.shared-components .cta:hover.cta--download .icon svg {
  animation: ctaDownload;
  animation-duration: 0.4s;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.19, 1, 0.2, 1);
}
.hover__parent:hover .cta.link,
.shared-components .cta:hover.link {
  --cta-copy-color: var(--color-primary-accent);
}
.hover__parent:hover .cta.link:not(.cta--external) svg,
.shared-components .cta:hover.link:not(.cta--external) svg {
  animation: moveRightLeft;
  animation-duration: 0.4s;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.19, 1, 0.2, 1);
  stroke: var(--color-svg-icon--hover);
}
.hover__parent:hover .cta.link .cta__text,
.shared-components .cta:hover.link .cta__text {
  font-weight: bold;
}
.hover__parent:hover .cta:not(.btn):not(.custom):not(.nav-link).is-light,
.shared-components .cta:hover:not(.btn):not(.custom):not(.nav-link).is-light {
  color: var(--color-gk-white);
}
.hover__parent:hover .cta.btn-primary,
.shared-components .cta:hover.btn-primary {
  --cta-btn-color: var(--color-primary-accent);
  --cta-copy-color: var(--color-copy-on-primary-accent);
}
.hover__parent:hover .cta.btn-primary.on-surface:not(.is-loading), .hover__parent:hover .cta.btn-primary:not(.is-loading),
.shared-components .cta:hover.btn-primary.on-surface:not(.is-loading),
.shared-components .cta:hover.btn-primary:not(.is-loading) {
  --cta-border-color: transparent;
}
.hover__parent:hover .cta.btn-primary.is-light,
.shared-components .cta:hover.btn-primary.is-light {
  background-color: var(--color-primary-accent-light);
  color: var(--color-primary-accent);
}
.hover__parent:hover .cta.btn-primary.is-light:not(label.btn):not([href]),
.shared-components .cta:hover.btn-primary.is-light:not(label.btn):not([href]) {
  background-color: var(--color-primary-accent-light);
  color: var(--color-primary-accent);
}
.hover__parent:hover .cta.btn-primary.on-surface,
.shared-components .cta:hover.btn-primary.on-surface {
  --cta-btn-color: var(--color-primary-accent-on-surface);
  --cta-copy-color: var(--color-copy-on-primary-accent-on-surface);
  --cta-background-accent-color: var(--cta-btn-color);
  --cta-background-color: var(--cta-btn-color);
}
.hover__parent:hover .cta.btn-primary.on-surface::after,
.shared-components .cta:hover.btn-primary.on-surface::after {
  color: inherit;
}
.hover__parent:hover .cta.btn-primary::after,
.shared-components .cta:hover.btn-primary::after {
  opacity: 1;
  background-position: left bottom;
}
.hover__parent:hover .cta.btn-secondary,
.shared-components .cta:hover.btn-secondary {
  --cta-btn-color: var(--color-secondary-accent);
  --cta-copy-color: var(--color-copy-on-secondary-accent);
}
.hover__parent:hover .cta.btn-secondary.on-surface:not(.is-loading), .hover__parent:hover .cta.btn-secondary:not(.is-loading),
.shared-components .cta:hover.btn-secondary.on-surface:not(.is-loading),
.shared-components .cta:hover.btn-secondary:not(.is-loading) {
  --cta-border-color: var(--cta-btn-color);
}
.hover__parent:hover .cta.btn-secondary.is-cutoff::before,
.shared-components .cta:hover.btn-secondary.is-cutoff::before {
  background: var(--cta-btn-color);
}
.hover__parent:hover .cta.btn-secondary.is-light,
.shared-components .cta:hover.btn-secondary.is-light {
  border-color: var(--color-secondary-on-surface);
  color: var(--color-copy-on-secondary-on-surface);
}
.hover__parent:hover .cta.btn-secondary.is-light::before,
.shared-components .cta:hover.btn-secondary.is-light::before {
  background: var(--color-secondary-on-surface);
}
.hover__parent:hover .cta.btn-secondary.is-light::after,
.shared-components .cta:hover.btn-secondary.is-light::after {
  opacity: 1;
  background-position: left bottom;
}
.hover__parent:hover .cta.btn-secondary.on-surface,
.shared-components .cta:hover.btn-secondary.on-surface {
  --cta-btn-color: var(--color-secondary-accent-on-surface);
  --cta-copy-color: var(--color-copy-on-secondary-accent-on-surface);
  --cta-background-accent-color: var(--cta-btn-color);
}
.hover__parent:hover .cta.btn-secondary.on-surface::after,
.shared-components .cta:hover.btn-secondary.on-surface::after {
  color: inherit;
}

.cta {
  --cta-active-size: 3px;
  --cta-border-width: 2px;
  position: relative;
  border-radius: 0;
}
.cta.is-loading, .is-loading .cta:not(.header .cta) {
  --cta-loading-delay: 0.4s;
  --cta-loading-start-duration: 1.1s;
  pointer-events: none;
  opacity: 0.8;
  animation: ctaLoadingButton 1s forwards;
}
.cta.is-loading:active, .cta.is-loading:focus, .is-loading .cta:not(.header .cta):active, .is-loading .cta:not(.header .cta):focus {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  box-shadow: none;
}
.cta.is-loading::before, .is-loading .cta:not(.header .cta)::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--color-primary);
  transform-origin: center;
  animation: ctaLoadingStart var(--cta-loading-start-duration) forwards var(--cta-loading-delay), ctaLoadingLoop calc(var(--cta-loading-start-duration) - 0.1s) ease-in-out infinite calc(var(--cta-loading-delay) + var(--cta-loading-start-duration) - 0.2s);
}
.cta.is-loading .cta__text, .is-loading .cta:not(.header .cta) .cta__text {
  position: relative;
  animation: ctaLoadingText var(--cta-loading-start-duration) forwards;
}
.cta.cta--has-icon::after, .cta.cta--has-icon.btn, .cta.cta--download::after, .cta.cta--download.btn, .cta.cta--external::after, .cta.cta--external.btn {
  padding-right: 3rem;
  text-align: left;
  padding-left: 1rem;
}
.cta.cta--has-icon:not(.link) .icon, .cta.cta--download:not(.link) .icon, .cta.cta--external:not(.link) .icon {
  position: absolute;
  width: 16px;
  height: 16px;
  top: calc(50% - 1px);
  transform: translateY(-50%);
  right: 1rem;
  z-index: 2;
}
.cta.cta--external.link .icon {
  padding-left: 0.5rem;
  width: 20px;
  height: 20px;
}
.cta.cta--reversed {
  flex-direction: row-reverse;
}
.cta.cta--reversed.link {
  align-items: flex-start;
}
.cta.cta--reversed.link .icon {
  --cta-icon-offset: -3px;
  height: calc(var(--type-default-line-height) * 1rem + var(--cta-icon-offset));
}
@media (min-width: 992px) {
  .cta.cta--reversed.link .icon {
    --cta-icon-offset: 2px;
  }
}
.cta.cta--reversed.link svg {
  margin: 0 0.75rem 0 0;
  width: 1rem;
  height: 1rem;
  line-height: 2rem;
}
@media (min-width: 992px) {
  .cta.cta--reversed.link svg {
    margin-right: 1rem;
    width: 1.25rem;
    height: 1.25rem;
  }
}
.cta.cta--download:not(.link) .icon {
  transform: translateY(-50%) rotate(135deg);
  width: 15px;
  height: 15px;
}
.cta.btn {
  font-size: 1rem;
  line-height: 1.6;
}
@media (min-width: 992px) {
  .cta.btn {
    font-size: 1rem;
    line-height: 1.6;
  }
}
@media (min-width: 1200px) {
  .cta.btn {
    font-size: 1rem;
    line-height: 1.6;
  }
}
.cta.btn {
  font-weight: bold;
  display: inline-block;
  padding: 0.75rem 1rem;
  text-align: center;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: transparent;
  transition: all 0.2s ease-in-out;
  border: var(--cta-border-width) solid transparent;
}
.cta.btn:not(:disabled):not(.disabled) {
  cursor: pointer;
}
.cta.link {
  font-size: var(--cta-custom-font-size, 1rem);
  display: inline-flex;
  align-items: center;
  text-align: left;
}
.cta.link:not(:last-of-type) {
  margin-right: 0.5rem;
}
.cta.link:not(.cta--reversed):not(.cta--external) svg {
  margin: 0 0 0 0.75rem;
  stroke: var(--color-primary);
}
.cta.cta--has-icon.cta--icon-emergency::after, .cta.cta--has-icon.cta--icon-emergency.btn {
  padding-right: 4rem;
}
.cta.cta--has-icon.cta--icon-emergency .icon {
  --icon-scale: 2.3;
  right: 1.5rem;
}
.cta.cta--has-icon.cta--icon-emergency .icon svg {
  stroke-width: 0.3;
  stroke: currentColor;
}
.cta.cta--small::after, .cta.cta--small.btn {
  padding: 0.5rem;
}
.cta.cta--small.cta--has-icon::after, .cta.cta--small.cta--has-icon.btn, .cta.cta--small.cta--download::after, .cta.cta--small.cta--download.btn, .cta.cta--small.cta--external::after, .cta.cta--small.cta--external.btn {
  padding-right: 2.5rem;
}
.cta.cta--small:not(.link) .icon {
  transform: translateY(-50%) scale(0.75);
}
.cta.cta--small.cta--download:not(.link) .icon {
  transform: translateY(-50%) rotate(135deg) scale(0.75);
}

.shared-components .cta {
  --cta-background-accent-color: transparent;
  --cta-copy-color: var(--color-primary);
  --cta-background-color: transparent;
  --cta-border-color: transparent;
  color: var(--cta-copy-color);
  -webkit-appearance: none;
  appearance: none;
  background-color: var(--cta-background-color);
  border-color: var(--cta-border-color);
}
.shared-components .cta.link {
  --cta-copy-color: var(--color-link);
}
.shared-components .cta.cta--monochrome {
  --cta-copy-color: var(--color-copy) !important;
  --cta-border-color: var(--color-copy) !important;
}
.shared-components .cta:not(.btn):not(.custom):not(.nav-link).is-light {
  color: var(--color-gk-white);
}
.shared-components .cta.is-cutoff:not(.link) {
  clip-path: polygon(calc(100% - 15px) 0, 100% 15px, 100% 100%, 0 100%, 0 0);
  position: relative;
}
.shared-components .cta.btn-primary {
  --cta-copy-color: var(--color-copy-on-primary);
  --cta-background-accent-color: var(--color-primary-accent);
  --cta-background-color: var(--color-primary);
  --cta-border-color: transparent;
  border-radius: 0;
}
.shared-components .cta.btn-primary:not(.is-loading) {
  --cta-border-color: var(--color-primary);
}
.shared-components .cta.btn-primary::after {
  position: absolute;
  left: calc(-1 * var(--cta-border-width));
  top: calc(-1 * var(--cta-border-width));
  width: calc(100% + var(--cta-border-width) * 2);
  height: calc(100% + var(--cta-border-width) * 2);
  content: attr(data-text);
  color: var(--cta-copy-color);
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, var(--cta-background-accent-color) 50%, transparent 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  opacity: 0;
  transition: background 0.5s cubic-bezier(0.19, 1, 0.2, 1);
}
@media (min-width: 992px) {
  .shared-components .cta.btn-primary.is-light-lg {
    background-color: var(--color-primary-on-surface);
    color: var(--color-copy-on-primary-on-surface);
  }
  .shared-components .cta.btn-primary.is-light-lg:not(.is-loading) {
    border-color: var(--color-primary-on-surface);
  }
}
.shared-components .cta.btn-primary.is-light, .shared-components .cta.btn-primary.on-surface {
  --cta-copy-color: var(--color-copy-on-primary-on-surface);
  --cta-background-color: var(--color-primary-on-surface);
}
.shared-components .cta.btn-primary.is-light:not(.is-loading), .shared-components .cta.btn-primary.on-surface:not(.is-loading) {
  --cta-border-color: var(--color-primary-on-surface);
}
.shared-components .cta.btn-secondary {
  --cta-copy-color: var(--color-copy-on-secondary);
  --cta-background-accent-color: var(--color-secondary-accent);
  --cta-background-color: transparent;
  --cta-border-color: var(--color-secondary);
}
.shared-components .cta.btn-secondary.is-cutoff::before {
  clip-path: polygon(calc(100% - 15px + 1px) 0, 100% calc(15px - 1px), 100% 100%, 100% 0);
  background: var(--cta-border-color);
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  height: 100%;
  display: block;
  transition: background 0.5s cubic-bezier(0.19, 1, 0.2, 1);
}
.shared-components .cta.btn-secondary.cta--has-background {
  background-color: rgba(255, 255, 255, 0.9);
}
.shared-components .cta.btn-secondary.is-light {
  border-color: var(--color-gk-white);
  color: var(--color-gk-white);
}
.shared-components .cta.btn-secondary.is-light::before {
  background: var(--color-gk-white);
}
.shared-components .cta.btn-secondary.is-light::after {
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
  transition: background 0.5s cubic-bezier(0.19, 1, 0.2, 1);
}
@media (min-width: 992px) {
  .shared-components .cta.btn-secondary.is-light-lg {
    border-color: var(--color-gk-white);
    color: var(--color-gk-white);
  }
  .shared-components .cta.btn-secondary.is-light-lg::before {
    background: var(--color-gk-white);
  }
  .shared-components .cta.btn-secondary.is-light-lg::after {
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
    transition: background 0.5s cubic-bezier(0.19, 1, 0.2, 1);
  }
}
.shared-components .cta.btn-secondary.on-surface {
  --cta-copy-color: var(--color-copy-on-secondary-on-surface);
  --cta-background-accent-color: var(--color-secondary-accent-on-surface);
  --cta-background-color: transparent;
  --cta-border-color: var(--color-secondary-on-surface);
}
.shared-components .cta.active {
  color: var(--color-active);
}

.cta__text {
  position: relative;
}

cta {
  display: none;
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
  30%, 0% {
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
  90%, 100% {
    max-width: var(--cta-loading-spacing);
    max-height: var(--cta-loading-spacing);
    left: 50%;
    transform: translateX(-50%);
  }
}
@keyframes ctaLoadingText {
  0%, 20% {
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
