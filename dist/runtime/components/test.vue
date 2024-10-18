<template>
  <div :class="classList">
    <badge text="badge text" icon="computer-shield"></badge
    ><NuxtLink to="https://www.glueckkanja.com">nuxtlink</NuxtLink><br />Test component

    <site-icons icon="site/mail" :no-span="true" />
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
