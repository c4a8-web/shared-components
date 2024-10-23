<template>
  <div :class="classList">
    12312
    <badge text="badge text" icon="computer-shield"></badge
    ><NuxtLink to="https://www.glueckkanja.com">nuxtlink</NuxtLink><br />Test component header
  </div>
</template>

<script>
export default {
  tagName: 'test',
  computed: {
    classList() {
      return ['class1', 'class2', 'class3'];
    },
  },
};
</script>
