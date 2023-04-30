// This is a very basic img component and doesn't have the logic that the ruby version has.
// we need to build that logic to implement a somewhat same version of that component
// https://github.com/nhoizey/jekyll-cloudinary/blob/master/lib/jekyll/cloudinary.rb
import Tools from '../tools.js';
import Presets from '../presets.js';
import TransformationOptions from '../transformation-options.js';

const basePath = 'https://res.cloudinary.com/c4a8/image/upload/';

export default {
  tagName: 'v-img',
  data() {
    return {
      dimensions: [0, 0],
      srcset: '',
      srcsetArray: [],
      defaultSettings: {
        cloud_name: '',
        only_prod: false,
        verbose: false,
      },
      defaultPresets: Presets,
      transformationOptions: TransformationOptions,
    };
  },
  computed: {
    classList() {
      return ['v-img', 'vue-component'];
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
    this.setDimensions();
  },
  methods: {
    mergeSettings() {
      // return this.defaultSettings.concat(site.config['cloudinary']);
      return this.defaultSettings;
    },
    setPreset() {
      const settings = this.mergeSettings();
      const presetExists = settings['presets'] && settings['presets']['default'];
      return presetExists ? this.defaultPresets.concat(settings['presets']['default']) : this.defaultPresets;
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
    async setDimensions() {
      if (this.cloudinary) {
        let img = await this.getMeta(this.img);
        const height = img.height;
        const width = img.width;

        const preset = this.setPreset();
        const transformationsString = this.getTransformationString(preset);

        if (!!height && !!width) {
          this.dimensions = [height, width];
          this.buildSrcSet(preset, transformationsString);
        } else {
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
      const steps = preset['steps'];
      const minWidth = preset['min_width'];
      const maxWidth = preset['max_width'];
      const stepWidth = (maxWidth - minWidth) / (steps - 1);
      const [_, naturalWidth] = this.dimensions;

      if (naturalWidth < minWidth) {
        const srcsetString = '';
        this.srcsetArray.push(srcsetString);
      } else {
        let missedSizes = [];
        for (let factor = 0; factor < steps; factor++) {
          let width = minWidth + (factor - 1) * stepWidth;
          if (width <= naturalWidth) {
            const srcsetString = `${basePath}${transformationsString},w_${width}/${this.img} ${width}w`;
            this.srcsetArray.push(srcsetString);
          } else {
            missedSizes.push(width);
          }
        }

        if (missedSizes.length === 0) {
          const srcsetString = `${basePath}${transformationsString},w_${naturalWidth}/${this.img} ${naturalWidth}w`;
          this.srcsetArray.push(srcsetString);
        }
      }
      this.srcset = this.srcsetArray.join(', \n');
    },
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
