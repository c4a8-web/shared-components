import DefaultPresets from '../default-presets.js';
import TransformationOptions from '../transformation-options.js';
import Cloudinary from '../../../.storybook/config/cloudinary.js';

const basePath = 'https://res.cloudinary.com/c4a8/image/upload/';

export default {
  tagName: 'v-img',
  data() {
    return {
      dimensions: {
        naturalWidth: null,
        naturalHeight: null,
      },
      srcset: '',
    };
  },
  computed: {
    classList() {
      return [
        'v-img',
        'vue-component',
        this.cloudinary && !this.isGif() ? `no-small img-responsive ${this.class ? this.class : ''}` : '',
      ];
    },
    source() {
      return this.fallback || this.getCloudinaryLink(this.img);
    },
    loading() {
      return this.lazy ? 'lazy' : null;
    },
    sizes() {
      return this.preset?.sizes;
    },
  },
  mounted() {
    if (this.cloudinary && !this.isGif()) {
      this.getMeta(this.img);
    } else {
      this.fallback = this.img;
    }
  },
  methods: {
    setPreset() {
      try {
        const presetExists = Cloudinary['presets'] && Cloudinary['presets'][this.preset];

        return presetExists ? Object.assign(DefaultPresets, Cloudinary['presets'][this.preset]) : DefaultPresets;
      } catch (e) {
        console.error(e);
      }
    },
    getCloudinaryLink(url) {
      return basePath + url;
    },
    getMeta(url) {
      let img = this.$refs.image;

      img.onload = () => {
        const height = img?.naturalHeight;
        const width = img?.naturalWidth;
        const preset = this.setPreset();
        const transformationsString = this.getTransformationString(preset);

        if (height && width) {
          this.dimensions = { naturalHeight: height, naturalWidth: width };
          this.buildSrcSet(preset, transformationsString);
        } else {
          this.dimensions = { naturalHeight: preset.fallback_max_width, naturalWidth: preset.fallback_max_width };
          this.fallback = `${basePath}${transformationsString},w_${preset.fallback_max_width}/${this.img} ${width}w`;
        }
      };
      img.src = this.getCloudinaryLink(url);
    },
    getTransformationString(preset) {
      const transformations = [];

      for (const [key, value] of Object.entries(TransformationOptions)) {
        if (preset[key]) {
          transformations.push(`${value}_${preset[key]}`);
        }
      }

      const transformationsIsNotEmpty = transformations.length > 0;

      return transformationsIsNotEmpty ? transformations.join(',') : '';
    },
    buildSrcSet(preset, transformationsString) {
      const srcsetArray = [];
      const steps = preset['steps'];
      const minWidth = preset['min_width'];
      const maxWidth = preset['max_width'];
      const stepWidth = (maxWidth - minWidth) / (steps - 1);
      const { naturalWidth } = this.dimensions;

      if (naturalWidth < minWidth) {
        const srcsetString = '';

        srcsetArray.push(srcsetString);
      } else {
        for (let factor = 1; factor < steps; factor++) {
          const width = minWidth + (factor - 1) * stepWidth;
          const isWithinNaturalWidth = width <= naturalWidth;
          const selectedWidth = isWithinNaturalWidth ? width : naturalWidth;
          const srcsetString = `${basePath}${transformationsString},w_${selectedWidth}/${this.img} ${selectedWidth}w`;

          srcsetArray.push(srcsetString);

          if (!isWithinNaturalWidth) break;
        }
      }
      this.srcset = srcsetArray.join(', \n');
    },
    isGif() {
      const extension = this.img.split('.')[1];

      return extension.toLowerCase() === 'gif';
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
    <img ref="image" :src="source" :loading="loading" :class="classList" :width="this.dimensions.naturalWidth" :height="this.dimensions.naturalHeight" :srcset="this.srcset" :sizes="sizes">
  `,
};
