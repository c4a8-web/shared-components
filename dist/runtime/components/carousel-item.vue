<template>
  <a :href="item.url" :target="item.target" class="carousel__item">
    <v-img :cloudinary="true" v-bind="item" :class="item.classes"></v-img>
  </a>
</template>
<script>
export default {
  tagName: 'carousel-item',
  props: {
    item: Object,
  },
};
</script>
