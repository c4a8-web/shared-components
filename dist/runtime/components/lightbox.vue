<template>
  <a :class="['lightbox', classes]" aria-haspopup="dialog" :aria-expanded="isOpen" @click="open">
    <slot />

    <Teleport to="body">
      <dialog v-show="isOpen" class="lightbox__modal" @click.self="close" ref="modal">
        <div class="lightbox__controls">
          <button class="lightbox__close" @click="close">
            <icon name="close" size="24" :hover="true" :circle="true" />
          </button>
        </div>
        <v-img :img="source" :alt="alt" :cloudinary="cloudinary" class="lightbox__img" />
        <div class="lightbox__caption font-size-1" v-if="sourceCaption">{{ sourceCaption }}</div>
      </dialog>
    </Teleport>
  </a>
</template>
<script>
export default {
  tagName: 'lightbox',
  props: {
    images: {
      type: Array,
      required: true,
    },
    classes: String,
    source: String,
    alt: String,
    cloudinary: {
      type: Boolean,
      default: false,
    },
    sourceCaption: String,
  },
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    open() {
      this.isOpen = true;

      const modal = this.$refs['modal'];

      if (!modal) return;

      modal.showModal();
    },
    close() {
      this.isOpen = false;

      const modal = this.$refs['modal'];

      if (!modal) return;

      modal.close();
    },
  },
};
</script>
