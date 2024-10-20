<template>
  <div id="app" :class="computedClass">
    <slot />
  </div>
</template>

<script setup>
/*
<v-header v-bind="headerData" :lang="lang"></v-header>
<v-footer v-bind="footerData" :lang="lang"></v-footer>
*/
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
