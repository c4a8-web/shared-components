<template>
  <template v-if="hasPictureTag">
    <div :class="pictureWrapperClassList">
      <picture>
        <source
          v-for="srcSet in imgSrcSetSources"
          :key="srcSet.params"
          :media="srcSet.media"
          :srcset="getCloudinaryBasePathLink(srcSet)"
        />
        <img
          @load="loadImage(imgSrcSetImg)"
          ref="image"
          :src="imgSrcSetImg"
          :loading="loading"
          :class="classList"
          :alt="alt"
          :width="dimensions.naturalWidth"
          :height="dimensions.naturalHeight"
          :srcset="srcset"
          :sizes="sizes"
          :crossorigin="crossOriginValue"
        />
      </picture>
    </div>
  </template>
  <lottie v-else-if="isLottie" :data="jsonLottieData" :class="classListComponent" v-bind="jsonLottieSettingsData" />
  <img
    v-else
    @load="loadImage()"
    ref="image"
    :src="source"
    :loading="loading"
    :class="classList"
    :alt="alt"
    :width="dimensions.naturalWidth"
    :height="dimensions.naturalHeight"
    :srcset="srcset"
    :sizes="sizes"
    :crossorigin="crossOriginValue"
  />
</template>

<script>
import DefaultPresets from '../assets/js/default-presets.js';
import TransformationOptions from '../assets/js/transformation-options.js';
import Cloudinary from '../assets/js/cloudinary.js';
import Tools from '../assets/js/tools.js';
import ImgSrcSets from '../data/img-src-sets.js';

const basePath = 'https://res.cloudinary.com/c4a8/image/upload/';

/*
 Known Issues:
 - Chrome does not support jp2 type of images. so if you use devtools to emulate ios, cloudinary will render the images as jp2 which fail.
*/

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
      noCloudinary: null,
      sizes: null,
    };
  },
  computed: {
    classList() {
      return ['v-img', 'vue-component', this.classListComponent];
    },
    classListComponent() {
      return [
        this.isSvg() ? 'is-svg' : '',
        this.class ? this.class : '',
        this.canGenerateSrcSet() ? `no-small img-responsive` : '',
      ];
    },
    isLottie() {
      return typeof this.jsonLottieData === 'object' ? true : false;
    },
    jsonLottieData() {
      if (!this.lottie) return;

      return typeof this.lottie !== 'object' ? Tools.getJSON(this.lottie) : this.lottie;
    },
    jsonLottieSettingsData() {
      if (!this.lottie || !this.lottieSettings) return;

      return typeof this.lottieSettings !== 'object' ? Tools.getJSON(this.lottieSettings) : this.lottieSettings;
    },
    isCloudinary() {
      return Tools.isTrue(this.cloudinary);
    },
    source() {
      return this.isCloudinary ? this.noCloudinary || this.getCloudinaryLink() : this.noCloudinary;
    },
    loading() {
      return this.lazy ? 'lazy' : null;
    },
    crossOriginValue() {
      return this.isCloudinary ? (this.crossorigin ? this.crossorigin : 'anonymous') : null;
    },
    hasPictureTag() {
      return this.isCloudinary && this.imgSrcSets;
    },
    pictureWrapperClassList() {
      return ['img__picture-wrapper', this.imgSrcSetValue?.ratioClasses];
    },
    imgSrcSetValue() {
      return ImgSrcSets[this.imgSrcSets];
    },
    imgSrcSetSources() {
      return this.imgSrcSetValue?.srcSets?.filter((item) => item.media);
    },
    imgSrcSetImg() {
      const srcSets = this.imgSrcSetValue?.srcSets;

      if (!srcSets) return null;

      return this.getCloudinaryBasePathLink(srcSets[srcSets.length - 1]);
    },
  },
  watch: {
    animated(newAnimated, oldAnimated) {
      this.srcset = '';
    },
  },
  created() {
    if (this.canGenerateSrcSet()) return;

    if (this.isCloudinary) return;

    this.noCloudinary = this.getBaseAssetPath();
    this.sizes = DefaultPresets.sizes;
  },
  methods: {
    canGenerateSrcSet() {
      return this.isCloudinary && !this.isGif() && !this.animated;
    },
    getSetup() {
      const preset = this.getPreset();
      const transformationsString = this.getTransformationString(preset);

      return { preset, transformationsString };
    },
    getPreset() {
      try {
        if (!this.preset) return { ...DefaultPresets, ...Cloudinary['presets']['default'] };

        const presetExists = Cloudinary['presets'] && Cloudinary['presets'][this.preset];

        return presetExists ? Object.assign(DefaultPresets, Cloudinary['presets'][this.preset]) : DefaultPresets;
      } catch (e) {
        console.error(e);
      }
    },
    hasProtocol() {
      const regex = /(http|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])?/;

      return regex.test(this.img);
    },
    getBaseAssetPath() {
      if (Tools.isTestingStorybook()) return this.img;

      return this.img?.indexOf('/assets/') !== -1 ? this.img : this.hasProtocol() ? this.img : `/assets/${this.img}`;
    },
    getCloudinaryBasePathLink(srcSet) {
      return `${basePath}${srcSet ? srcSet.params : ''}${this.img}`;
    },
    getCloudinaryLink() {
      return this.isGif() || this.isSvg() || this.animated
        ? this.getCloudinaryBasePathLink()
        : this.getCloudinaryLinkWithTransformation();
    },
    getCloudinaryLinkWithTransformation() {
      const { preset, transformationsString } = this.getSetup();
      const hasWidth = /w_\d+/.test(this.img);
      const base = basePath + transformationsString;
      const end = `/${this.img}`;

      return hasWidth ? `${base}${end}` : `${base},w_${preset.fallback_max_width}${end}`;
    },
    loadImage(link) {
      if (!this.canGenerateSrcSet()) return;

      const img = document.createElement('img');

      img.onload = () => {
        const height = img?.naturalHeight;
        const width = img?.naturalWidth;

        let dimensions;

        if (!this.isSvg()) {
          const { preset, transformationsString } = this.getSetup();

          this.sizes = preset?.sizes;

          dimensions = {
            naturalHeight: height ? height : preset?.fallback_max_width,
            naturalWidth: width ? width : preset?.fallback_max_width,
          };

          if (height && width && !this.isSvg()) {
            this.buildSrcSet(preset, transformationsString);
          }
        } else {
          dimensions = {
            naturalHeight: height,
            naturalWidth: width,
          };
        }

        this.dimensions = dimensions;
      };

      img.src = link ? link : this.getCloudinaryLinkWithTransformation();
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

      for (let factor = 1; factor <= steps; factor++) {
        const width = minWidth + (factor - 1) * stepWidth;
        const isWithinNaturalWidth = width <= naturalWidth;
        const selectedWidth = isWithinNaturalWidth ? width : naturalWidth;
        const srcsetBaseString = this.hasPictureTag
          ? this.imgSrcSetImg
          : `${basePath}${transformationsString},w_${selectedWidth}/${this.img}`;
        const srcsetString = `${srcsetBaseString} ${selectedWidth}w`;

        srcsetArray.push(srcsetString);

        if (!isWithinNaturalWidth) break;
      }

      this.srcset = naturalWidth < minWidth ? '' : srcsetArray.join(', \n');
    },
    isGif() {
      if (!this.img) return;

      const extension = this.img.split('.')[1];

      return extension?.toLowerCase() === 'gif';
    },
    isSvg() {
      const extension = Tools.getExtension(this.getCloudinaryBasePathLink());

      return extension?.toLowerCase() === 'svg' || this.img?.indexOf('.svg') !== -1;
    },
  },
  props: {
    // TODO handle img src set and correct all the places where it is not used correctly
    imgSrcSets: {
      type: String,
      default: null,
    },
    img: String,
    alt: String,
    cloudinary: Boolean,
    crossorigin: String,
    lazy: Boolean,
    class: String,
    preset: String,
    lottie: Object,
    lottieSettings: Object,
    animated: Boolean,
  },
};
</script>
