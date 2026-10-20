<template>
  <tracking />
  <content>
    <testimonial-detail v-if="testimonialNormalized" v-bind="testimonialNormalized" />
  </content>
</template>
<script setup>
import { useRoute, useAsyncData, queryCollection, useNuxtApp, useDynamicPageMeta, useSeo, onMounted } from '#imports';
import { computed, nextTick } from 'vue';

import Tools from '../../utils/tools.js';
import { useAppStore } from '../../stores/app';

const store = useAppStore();
const route = useRoute();
const nuxtApp = useNuxtApp();
const currentLocale = nuxtApp.$getLocale();

const dynamicMeta = useDynamicPageMeta();

const path = route.path.replace(/^\/[a-z]{2}\//, '/');
const dataKey = Tools.getDataKey('testimonial', null, currentLocale, path);

const { data: testimonial } = await useAsyncData(dataKey, () => {
  const collectionName = 'content_' + currentLocale;
  const query = queryCollection(collectionName).path(path);

  return query.first();
});

const testimonialNormalized = computed(() => {
  if (!testimonial.value) return null;

  const normalized = Tools.normalizeMarkdownItem(testimonial.value);

  if (!normalized) return null;

  return {
    ...normalized,
    image: normalized.sliderImg || normalized.image,
    body: {
      ...normalized?.body,
      value: Tools.applyKramdownAttrs(normalized?.body?.value),
    },
  };
});

dynamicMeta.value = {
  footer: testimonial.value?.meta?.footer ?? { noMargin: true },
};

if (testimonial.value && testimonialNormalized.value) {
  useSeo({
    title: testimonialNormalized.value.name,
    description: testimonialNormalized.value.excerpt ?? null,
  });
}

onMounted(() => {
  nextTick(() => {
    store.setPageIsLoaded(true);
  });
});
</script>
