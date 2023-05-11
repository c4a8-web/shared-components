import DefaultPresets from '../default-presets.js';
import TransformationOptions from '../transformation-options.js';
import Cloudinary from '../../../.storybook/config/cloudinary.js';
import Tools from '../tools.js';

const basePath = 'https://res.cloudinary.com/c4a8/image/upload/';

export default {
  tagName: 'v-img',
  data() {
    return {
      dimensions: {
        naturalHeight: null,
        naturalWidth: null,
      },
      dimStack: {},
      previousImg: null,
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
  },
  mounted() {
    if (Tools.isTrue(this.cloudinary) && !this.isGif()) {
      this.getMeta(this.img);
    } else {
      this.fallback = this.img;
      this.sizes = DefaultPresets.sizes;
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
    updateDimensions(dimensions, imgSrc) {
      if (this.dimStack[imgSrc] == null) {
        this.dimensions = dimensions;
        this.dimStack[imgSrc] = dimensions;
      }
    },
    getCloudinaryLink(url) {
      return basePath + url;
    },
    getMeta(url) {
      let img = this.$refs.image;
      console.log('hier -->>');

      img.onload = () => {
        console.log(img);
        const height = img?.naturalHeight;
        const width = img?.naturalWidth;

        const preset = this.setPreset();
        this.sizes = preset.sizes;
        const transformationsString = this.getTransformationString(preset);

        console.log('dimensions ->>', height, width);
        console.log('hier', preset);
        if (height && width && !!preset) {
          this.dimensions = { naturalHeight: height, naturalWidth: width };
          this.buildSrcSet(preset, transformationsString);
        } else {
          const dimensions = { naturalHeight: preset.fallback_max_width, naturalWidth: preset.fallback_max_width };
          this.updateDimensions(dimensions, img.src);
          this.fallback = `${basePath}${transformationsString},w_${preset.fallback_max_width}/${this.img} ${this.dimensions.naturalWidth}w`;
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
    alt: String,
    cloudinary: Boolean,
    crossorigin: String,
    lazy: Boolean,
    class: String,
    preset: String,
  },
  template: `
    <img ref="image" :alt="this.alt" :src="source" :loading="loading" :class="classList" :width="this.dimensions.naturalWidth" :height="this.dimensions.naturalHeight" :srcset="this.srcset" :sizes="this.sizes" :crossorigin="this.crossorigin">
  `,
};
