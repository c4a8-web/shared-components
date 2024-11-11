<template>
  <div class="image-list vue-component" v-for="(image, index) in imagesObject" v-bind:key="index">
    <div class="image-list__item is--desktop">
      <v-img :img="image.src" :cloudinary="image.cloudinary" :alt="image.alt" />
    </div>
    <div class="image-list__item is--mobile">
      <v-img :img="image.mobile" :cloudinary="image.cloudinary" :alt="image.alt" />
    </div>
  </div>
</template>
<script>
export default {
  tagName: 'image-list',
  computed: {
    imagesObject() {
      return this.images || [];
    },
  },
  props: {
    images: Array,
  },
};
</script>
