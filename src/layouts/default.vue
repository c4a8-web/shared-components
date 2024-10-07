<template>
  <div id="app" :class="computedClass">
    <v-header v-bind="headerData" :lang="lang"></v-header>
    <main class="page-content" aria-label="Content">
      <hero v-bind="heroData" v-if="heroEnabled"></hero>
      <slot />
    </main>
    <contact v-if="pageData?.contact" v-bind="pageData?.contact" :contact="pageData?.contact" />

    <v-footer v-bind="footerData" :lang="lang"></v-footer>
  </div>
</template>

<script setup>
// TODO figure out why this is not rendered on ssr correctly
const heroEnabled = false;

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
