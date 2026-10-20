<template>
  <a
    :class="classList"
    :data-text="filter ? tag : undefined"
    :data-tag="tag"
    :href="href"
    rel="tag"
    :title="'Posts tagged with ' + tag"
  >
    {{ tag }}<span v-if="count">({{ count }})</span
    ><span class="tag__icon" v-if="hasIcon"><icon icon="close" size="xs" /></span>
  </a>
</template>
<script>
import { useNuxtApp } from '#imports';

import Tools from '../utils/tools.js';

export default {
  tagName: 'tag',
  data() {
    return Tools.validateVueProps(this);
  },
  computed: {
    classList() {
      return [
        `tags__btn btn btn-xs mb-2 vue-component`,
        this.variant ? 'tag--' + this.variant : `mx-sm-${this.props?.spacing}`,
        this.classes ? this.classes : null,
      ];
    },
    linkPrefix() {
      return this.strategy === 'prefix' ? `/${this.locale}` : '';
    },
    href() {
      return this.linkPrefix + '/blog/#' + encodeURIComponent(this.tag);
    },
    hasIcon() {
      return this.variant === 'icon';
    },
  },
  setup() {
    const nuxtApp = useNuxtApp();
    const locale = nuxtApp.$getLocale?.();
    const strategy = nuxtApp.$getI18nConfig?.().strategy ?? 'prefix';

    return { locale, strategy };
  },
  props: {
    tag: {
      type: String,
      required: true,
    },
    count: {
      type: Number,
      default: null,
    },
    filter: {
      type: Boolean,
      default: false,
    },
    spacing: {
      type: Number,
      default: 1,
    },
    classes: {
      type: String,
      default: null,
    },
    variant: {
      type: String,
      default: null,
    },
  },
};
</script>
<style lang="scss">
.tags__btn {
  color: #71869d;
  background-color: rgba(113, 134, 157, 0.1);
  border: 0.0625rem solid transparent;
  border-color: transparent;
  font-size: 0.75rem;
  font-weight: 400;
  padding: 0.275rem 0.75rem;
  border-radius: 6.1875rem;

  &.active,
  &:active,
  &:focus,
  &:hover {
    color: #fff;
    background-color: #71869d;
    box-shadow: 0 4px 11px rgba(113, 134, 157, 0.1);
  }

  &.disabled,
  &:disabled {
    color: #71869d;
    background-color: rgba(113, 134, 157, 0.1);
    box-shadow: none;
  }

  &:not(:disabled):not(.disabled).active,
  &:not(:disabled):not(.disabled):active {
    color: #fff;
    background-color: #71869d;
  }

  &.tag--small {
    padding: spacing(1) spacing(2);
    color: var(--color-copy-reduced);

    &:focus,
    &:active,
    &:hover {
      background-color: var(--color-primary-accent) !important;
      color: var(--color-copy-light);
    }
  }

  &.tag--icon {
    --tag-base-color: var(--color-gk-dark-blue-shade-50);

    border: 1px solid var(--tag-base-color);
    color: var(--tag-base-color);
    background-color: transparent;
    padding: spacing(1) spacing(3);
    display: inline-flex;
    gap: spacing(2);

    &:focus,
    &:active,
    &:hover {
      --tag-base-color: var(--color-primary-accent);

      background-color: transparent !important;
      color: var(--tag-base-color) !important;
    }
  }

  &.tag--small,
  &.tag--icon {
    @include font-weight('bold');

    margin-right: spacing(2);
    text-transform: uppercase;
  }
}

.tag__icon {
  .icon {
    color: var(--tag-base-color);
    stroke-width: 5px;
  }
}
</style>
