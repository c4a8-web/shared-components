<template>
  <global-app :classes="computedClass">
    <v-header v-bind="headerData" :lang="lang" v-if="headerData"></v-header>
    <slot />
    <v-footer v-bind="footerData" :lang="lang" v-if="footerData"></v-footer>
  </global-app>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  headerData: Object,
  footerData: Object,
  heroData: Object,
  pageData: Object,
  lang: {
    type: String,
    default: 'en',
  },
  theme: String,
  hasBackToTop: Boolean,
  hasFabHint: Boolean,
});

const computedClass = computed(() => {
  return [
    'shared-components',
    props.theme,
    { 'has-back-to-top': props.hasBackToTop },
    { 'has-fab-hint': props.hasFabHint },
  ];
});
</script>
