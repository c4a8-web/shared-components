<template>
  <template v-if="href">
    <a :href="href">
      <slot />
    </a>
  </template>
  <template v-else>
    <slot />
  </template>
</template>

<script>
export default {
  props: {
    href: String,
  },
};
</script>
