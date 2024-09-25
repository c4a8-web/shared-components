<template>
  <div id="app">
    <v-header v-bind="headerData"></v-header>
    <main class="page-content" aria-label="Content">
      main part
      <slot />
    </main>
    contact footer

    <v-footer v-bind="footerData"></v-footer>
  </div>
</template>

<script setup>
const props = defineProps({
  headerData: Object,
  footerData: Object,
});
</script>
