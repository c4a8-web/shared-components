const lottie = import('../lib/lottie.min.js').then((module) => {
  return module.default || window.lottie;
});

import Tools from '../tools.js';

export default {
  tagName: 'lottie',
  computed: {
    classList() {
      return ['lottie', 'vue-component'];
    },
    jsonData() {
      return Tools.getJSON(this.data);
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
    pathValue() {
      return this.path && this.path !== '' ? this.path : null;
    },
    options() {
      return {
        container: this.$refs.animContainer,
        name: this.nameValue,
        renderer: this.rendererValue,
        loop: this.loopValue,
        autoplay: this.autoplayValue,
        width: this.getSize(this.widthValue),
        height: this.getSize(this.heightValue),
        path: this.pathValue,
        animationData: this.jsonData,
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
    this.loadAnimation();
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
      return size.indexOf('px') === -1 && size.indexOf('%') === -1 ? `${size}px` : size;
    },
    loadAnimation() {
      let anim = lottie.then((lottieModule) => {
        lottieModule.loadAnimation(this.options);

        this.$emit('animControl', anim);
      });
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
    path: {
      type: String,
    },
  },
  template: `
    <div :class="classList">
      <div :style="style" ref="animContainer"></div>
    </div>
  `,
};
