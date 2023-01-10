// This is a very basic img component and doesn't have the logic that the ruby version has.
// we need to build that logic to implement a somewhat same version of that component
import Tools from '../tools.js';
import Presets from '../presets.js';

const basePath = 'https://res.cloudinary.com/c4a8/image/upload/';

export default {
  tagName: 'v-img',
  computed: {
    classList() {
      return [
        'v-img',
        'vue-component',
        this.cloudinary && !this.isGif() ? `no-small img-responsive ${this.class ? this.class : ''}` : '',
      ];
    },
    source() {
      if (Tools.isTrue(this.cloudinary)) {
        return `${basePath}${this.img}`;
      } else {
        return `${this.img}`;
      }
    },
    loading() {
      return this.lazy ? 'lazy' : null;
    },
    srcset() {
      if (!this.cloudinary) return;

      return;

      return 'srcset';
    },
    sizes() {
      if (!this.cloudinary) return;

      const Preset = this.getPreset();

      return Preset.sizes;
    },
    width() {
      // TODO implement width calculation
    },
    height() {
      // TODO implement height calculation
    },
  },
  methods: {
    isGif() {
      const extension = this.img.split('.')[1];

      return extension.toLowerCase() === 'gif';
    },
    getPreset() {
      const selectedPreset = Presets[this.preset];

      return selectedPreset ? selectedPreset : Presets['default'];
    },
  },
  props: {
    img: String,
    cloudinary: Boolean,
    lazy: Boolean,
    class: String,
    preset: String,
  },
  template: `
    <img :src="source" :loading="loading" :class="classList" :srcset="srcset" :sizes="sizes">
  `,
};
