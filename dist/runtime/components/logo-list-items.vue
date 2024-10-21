<template>
  <component
    v-for="(item, index) in list"
    :is="getItemComponent(item)"
    :href="item.url"
    target="_blank"
    rel="noopener"
    :class="[
      'logo-list__item justify-content-center align-items-center fade-in-bottom',
      { 'py-8 px-4 mb-3': !isOverlapping, 'logo-list--clone': isClone },
    ]"
    :title="item.title"
    data-utility-animation-step="1"
    :style="getDelay(index)"
    v-bind:key="index"
  >
    <v-img :img="item.img" :alt="item.alt" preset="logoList" :cloudinary="true" />
  </component>
</template>
<script>
export default {
  tagName: 'logo-list-items',
  computed: {},
  methods: {
    getItemComponent(item) {
      return item?.url ? 'a' : 'span';
    },
    getDelay(index) {
      const localIndex = this.getIndex(index);
      const miliseconds = localIndex > 0 ? 100 : 0;
      const delay = `${localIndex * miliseconds}ms`;

      return `--utility-animation-delay: ${delay};`;
    },
    getIndex(index) {
      return this.isClone ? this.list.length + index : index;
    },
  },
  props: {
    list: Array,
    isOverlapping: Boolean,
    isClone: Boolean,
  },
};
</script>
