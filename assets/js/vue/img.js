// This is a very basic img component and doesn't have the logic that the ruby version has.
// we need to build that logic to implement a somewhat same version of that component
// https://github.com/nhoizey/jekyll-cloudinary/blob/master/lib/jekyll/cloudinary.rb
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
        return `${basePath}${this.urlParams}${this.img}`;
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
    urlParams() {
      return this.getUrlParams();
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
    getPresetWidth(value) {
      const width = value ? value : this.getPreset()?.fallback_max_width;

      if (!width) return '';

      return `,w_${width}`;
    },
    getUrlParams(value) {
      if (this.isGif()) return '';

      // TODO generate c_limit and stuff
      return `c_limit,f_auto,q_auto,dpr_auto${this.getPresetWidth(value)}/`;
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
