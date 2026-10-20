<template>
  <a :href="localizedHref" v-bind="$attrs" @click.prevent="handleClick" class="content-renderer-link">
    <slot />
  </a>
</template>

<script setup>
import { computed, useRoute } from '#imports';

const props = defineProps(['href']);

const route = useRoute();

const localizedHref = computed(() => {
  const href = props.href;

  if (!href || !/^\/(?!\/)/.test(href) || /^\/[a-z]{2}(\/|$)/.test(href)) return href;

  const locale = /^\/([a-z]{2})(\/|$)/.exec(route.path)?.[1];

  return locale ? `/${locale}${href}` : href;
});

// TODO remove this when there are no more static pages in public

const handleClick = (event) => {
  if (localizedHref.value) {
    const target = event.currentTarget.getAttribute('target');

    if (target) {
      window.open(localizedHref.value, target);
    } else {
      window.location.href = localizedHref.value;
    }
  }
};
</script>
