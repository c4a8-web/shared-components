import Presets from '../presets.js';
import TransformationOptions from '../transformation-options.js';
import Cloudinary from '../../../.storybook/config/cloudinary.js';

const basePath = 'https://res.cloudinary.com/c4a8/image/upload/';

export default {
  tagName: 'v-img',
  data() {
    return {
      dimensions: [0, 0],
      srcset: '',
      cloudinary: Cloudinary,
      defaultPresets: Presets,
      transformationOptions: TransformationOptions,
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
    this.initialize();
  },
  methods: {
    mergeSettings() {
      const defaultSettings = {
        cloud_name: '',
        developer_mode: false,
        verbose: false,
      };
      return Object.assign(defaultSettings, this.cloudinary);
    },
    setPreset() {
      const settings = this.mergeSettings();
      const presetExists = settings['presets'] && settings['presets']['default'];
      return presetExists ? Object.assign(this.defaultPresets, settings['presets']['default']) : this.defaultPresets;
    },
    getCloudinaryLink(url) {
      return basePath + url;
    },
    getMeta(url) {
      return new Promise((resolve, reject) => {
        let img = new Image();
        img.onload = () => resolve(img);
        img.onerror = (err) => reject(err);
        img.src = this.getCloudinaryLink(url);
      });
    },
    async initialize() {
      if (this.cloudinary && !this.isGif()) {
        let img = await this.getMeta(this.img);
        const height = img?.height;
        const width = img?.width;

        const preset = this.setPreset();
        const transformationsString = this.getTransformationString(preset);

        if (height && width) {
          this.dimensions = [height, width];
          this.buildSrcSet(preset, transformationsString);
        } else {
          this.dimensions = [preset.fallback_max_width, preset.fallback_max_width];
          this.fallback = `${basePath}${transformationsString},w_${preset.fallback_max_width}/${this.img} ${width}w`;
        }
      }
    },
    getTransformationString(preset) {
      const transformations = [];
      for (const [key, value] of Object.entries(this.transformationOptions)) {
        if (preset[key]) {
          transformations.push(`${value}_${preset[key]}`);
        }
      }
      const noTransformations = transformations.length === 0;

      return !noTransformations ? transformations.join(',') : '';
    },
    buildSrcSet(preset, transformationsString) {
      const srcsetArray = [];
      const steps = preset['steps'];
      const minWidth = preset['min_width'];
      const maxWidth = preset['max_width'];
      const stepWidth = (maxWidth - minWidth) / (steps - 1);
      const [_, naturalWidth] = this.dimensions;

      if (naturalWidth < minWidth) {
        const srcsetString = '';
        srcsetArray.push(srcsetString);
      } else {
        let missedSizes = [];
        for (let factor = 1; factor < steps; factor++) {
          const width = minWidth + (factor - 1) * stepWidth;
          if (width <= naturalWidth) {
            const srcsetString = `${basePath}${transformationsString},w_${width}/${this.img} ${width}w`;
            srcsetArray.push(srcsetString);
          } else {
            missedSizes.push(width);
          }
        }

        if (missedSizes.length !== 0) {
          const srcsetString = `${basePath}${transformationsString},w_${naturalWidth}/${this.img} ${naturalWidth}w`;
          srcsetArray.push(srcsetString);
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
    <img :src="source" :loading="loading" :class="classList" :width="this.dimensions[1]" :height="this.dimensions[0]" :srcset="this.srcset" :sizes="sizes">
  `,
};
