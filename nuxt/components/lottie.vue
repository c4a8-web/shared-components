<template>
  <div :class="classList">
    <Vue3Lottie class="lottie__container" :animationData="data" v-bind="options" />
  </div>
</template>

<script>
// TODO use a differentn lib that does't use defineComponent
// import { Vue3Lottie } from 'vue3-lottie';

export default {
  tagName: 'lottie',
  // components: {
  //   Vue3Lottie,
  // },
  computed: {
    classList() {
      return ['lottie', 'vue-component'];
    },
    widthValue() {
      return this.width && this.width !== '' ? this.width : '100%';
    },
    heightValue() {
      return this.height && this.height !== '' ? this.height : '100%';
    },
    backgroundValue() {
      return this.background && this.background !== '' ? this.background : 'transparent';
    },
    loopValue() {
      return this.loop && this.loop !== '' ? this.loop : true;
    },
    autoplayValue() {
      return this.autoplay && this.autoplay !== '' ? this.autoplay : true;
    },
    nameValue() {
      return this.name && this.name !== '' ? this.name : 'lottie-' + Math.random();
    },
    rendererValue() {
      return this.renderer && this.renderer !== '' ? this.renderer : 'svg';
    },
    options() {
      return {
        renderer: this.rendererValue,
        loop: this.loopValue,
        autoplay: this.autoplayValue,
        width: this.getSize(this.widthValue),
        height: this.getSize(this.heightValue),
        animationData: this.data,
        noMargin: true,
      };
    },
  },
  data() {
    return {
      style: {},
    };
  },
  mounted() {
    this.initStyle();
  },
  methods: {
    initStyle() {
      this.style = {
        width: this.getSize(this.widthValue),
        height: this.getSize(this.heightValue),
        background: this.backgroundValue,
      };
    },
    getSize(size) {
      return !size.indexOf || (size.indexOf('px') === -1 && size.indexOf('%') === -1 && size.indexOf('auto'))
        ? `${size}px`
        : size;
    },
  },
  props: {
    data: Object,
    name: {
      type: String,
    },
    width: {
      type: [String, Number],
    },
    height: {
      type: [String, Number],
    },
    background: {
      type: String,
    },
    loop: {
      type: [Boolean, Number],
    },
    autoplay: {
      type: Boolean,
    },
    renderer: {
      type: String,
    },
  },
};
</script>
