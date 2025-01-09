<template>
  <a :class="['lightbox', classes]" aria-haspopup="dialog" :aria-expanded="isOpen" @click="open">
    <slot />

    <Teleport to="body">
      <dialog v-show="isOpen" class="lightbox__modal" @click.self="closeLightbox" ref="modal">
        <slot />
        <button class="lightbox-next" @click="nextImage">&#8250;</button>

        <div class="lightbox__caption" v-if="sourceCaption">{{ sourceCaption }}</div>
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
    closeLightbox() {
      this.isOpen = false;

      const modal = this.$refs['modal'];

      if (!modal) return;

      modal.close();
    },
  },
};
</script>
