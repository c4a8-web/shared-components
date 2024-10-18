<template>
  <main class="page-content" aria-label="Content">
    <slot />
  </main>
  <slot name="below" />
</template>

<script>
export default {
  tagName: 'content',
  props: {},
};
</script>
