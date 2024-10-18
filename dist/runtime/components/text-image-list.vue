<template>
  <list-container
    :classes="classes"
    :headline="headline"
    :level="level"
    :bg-color="bgColor"
    :headline-color="headlineColor"
    :headline-sticky="headlineSticky"
    :spacing="spacing"
  >
    <template v-for="(textImageListItem, index) in textImages" :key="index">
      <text-image
        :image="textImageListItem.image"
        :alt="textImageListItem.alt"
        :headline-text="textImageListItem.headline"
        :copy="textImageListItem.copy"
        :offset="true"
        :left="isLeft(index)"
        :spacing="textImageListItem.spacing || 'space-top-lg-2'"
        :index="index + 1"
        :list="textImageListItem.list"
      />
    </template>
  </list-container>
</template>
<script>
export default {
  tagName: 'text-image-list',
  props: {
    textImages: Array,
    classes: String,
    headline: String,
    level: {
      type: String,
      default: 'h2',
    },
    headlineColor: String,
    headlineSticky: Boolean,
    bgColor: {
      type: String,
    },
    spacing: String,
  },
  methods: {
    isLeft(index) {
      return index % 2 === 1;
    },
  },
  computed: {
    textImageListSize() {
      return this.textImages.length;
    },
  },
};
</script>
