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
<style>
.tags__btn {
  color: #71869d;
  background-color: rgba(113, 134, 157, 0.1);
  border: 0.0625rem solid transparent;
  border-color: transparent;
  font-size: 0.75rem;
  font-weight: 400;
  padding: 0.275rem 0.75rem;
  border-radius: 6.1875rem;
}
.tags__btn.active, .tags__btn:active, .tags__btn:focus, .tags__btn:hover {
  color: #fff;
  background-color: #71869d;
  box-shadow: 0 4px 11px rgba(113, 134, 157, 0.1);
}
.tags__btn.disabled, .tags__btn:disabled {
  color: #71869d;
  background-color: rgba(113, 134, 157, 0.1);
  box-shadow: none;
}
.tags__btn:not(:disabled):not(.disabled).active, .tags__btn:not(:disabled):not(.disabled):active {
  color: #fff;
  background-color: #71869d;
}
.tags__btn.tag--small {
  padding: 0.25rem 0.5rem;
  color: var(--color-copy-reduced);
}
.tags__btn.tag--small:focus, .tags__btn.tag--small:active, .tags__btn.tag--small:hover {
  background-color: var(--color-primary-accent) !important;
  color: var(--color-copy-light);
}
.tags__btn.tag--icon {
  --tag-base-color: var(--color-gk-dark-blue-shade-50);
  border: 1px solid var(--tag-base-color);
  color: var(--tag-base-color);
  background-color: transparent;
  padding: 0.25rem 0.75rem;
  display: inline-flex;
  gap: 0.5rem;
}
.tags__btn.tag--icon:focus, .tags__btn.tag--icon:active, .tags__btn.tag--icon:hover {
  --tag-base-color: var(--color-primary-accent);
  background-color: transparent !important;
  color: var(--tag-base-color) !important;
}
.tags__btn.tag--small, .tags__btn.tag--icon {
  margin-right: 0.5rem;
  text-transform: uppercase;
}
.tags__btn.tag--small, .tags__btn.tag--icon {
  font-weight: bold;
}

.tag__icon .icon {
  color: var(--tag-base-color);
  stroke-width: 5px;
}
</style>
