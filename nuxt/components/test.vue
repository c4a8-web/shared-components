<template>
  <div :class="classList"><NuxtLink to="https://www.glueckkanja.com">nuxtlink</NuxtLink><br />Test component</div>
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
