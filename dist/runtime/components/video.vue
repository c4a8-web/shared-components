<template>
  <video-inner v-bind="video" />
</template>

<script>
export default {
  props: {
    video: {
      type: Object,
      required: true,
    },
  },
};
</script>
