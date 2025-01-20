<template>
  <global-app :classes="computedClass">
    <v-header v-bind="headerDataSelected" :lang="langDataSelected" v-if="headerDataSelected"></v-header>
    <slot />
    <v-footer v-bind="footerDataSelected" :lang="langDataSelected" v-if="footerDataSelected"></v-footer>
  </global-app>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  headerData: Object,
  footerData: Object,
  layoutHeaderData: Object,
  layoutFooterData: Object,
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

const headerDataSelected = computed(() => {
  return typeof props.layoutHeaderData !== 'undefined' ? props.layoutHeaderData : props.headerData;
});

const footerDataSelected = computed(() => {
  return typeof props.layoutFooterData !== 'undefined' ? props.layoutFooterData : props.footerData;
});

const langDataSelected = computed(() => {
  return typeof props.layoutLang !== 'undefined' ? props.layoutLang : props.lang;
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
