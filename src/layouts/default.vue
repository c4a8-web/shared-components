<template>
  <div id="app">
    <v-header v-bind="headerData" :lang="lang"></v-header>
    <main class="page-content" aria-label="Content">
      main part
      <slot />
    </main>
    contact footer

    <v-footer v-bind="footerData" :lang="lang"></v-footer>
  </div>
</template>

<script setup>
const props = defineProps({
  headerData: Object,
  footerData: Object,
  lang: {
    type: String,
    default: 'en',
  },
});
</script>
