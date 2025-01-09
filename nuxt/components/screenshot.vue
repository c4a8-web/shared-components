<template>
  <div class="screenshot full-width-container vue-component">
    <div :class="['screenshot__container container', spacing ? spacing : null]">
      <div :class="['row d-flex align-items-center', leftValue ? 'flex-row-reverse' : null]">
        <div :class="['col-lg-4 my-4 my-lg-0 py-4', leftValue ? 'offset-lg-1' : null]">
          <headline :level="level" :text="headline" />
          <div class="screenshot__copy" v-html="copy"></div>
          <div class="screenshot__list pt-4" v-if="list">
            <cta
              :text="list.ctaText"
              :href="list.ctaHref"
              :skin="list.skin"
              :type="list.ctaType"
              :target="list.target"
              :external="list.external"
            />
          </div>
        </div>
        <div
          :class="['screenshot__img d-flex align-items-center col-lg-7', leftValue ? null : 'offset-lg-1']"
          :style="style"
        >
          <a
            class="screenshot__img-frame js-fancybox media-viewer py-4"
            href="javascript:;"
            data-hs-fancybox-options='{"speed": 700}'
            :data-src="source"
            :data-caption="sourceCaption"
            style="display: none"
          >
            <v-img :img="image" :alt="alt" :cloudinary="cloudinary" class="position-relative z-index-2" />
            <span class="media-viewer-container">
              <span class="media-viewer-icon">
                <i class="fas fa-plus"></i>
              </span>
            </span>
          </a>
          <lightbox classes="screenshot__img-frame media-viewer py-4" :source="source" :source-caption="sourceCaption">
            <v-img :img="image" :alt="alt" :cloudinary="cloudinary" class="position-relative z-index-2" />
            <span class="media-viewer-container">
              <span class="media-viewer-icon">
                <i class="fas fa-plus"></i>
              </span>
            </span>
          </lightbox>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Tools from '../utils/tools.js';

export default {
  tagName: 'screenshot',
  computed: {
    style() {
      return {
        'background-color': this.bgColor,
      };
    },
    leftValue() {
      return Tools.isTrue(this.left);
    },
  },
  props: {
    spacing: String,
    level: String,
    headline: String,
    copy: String,
    left: Boolean,
    bgColor: String,
    source: String,
    sourceCaption: String,
    image: Object,
    cloudinary: Boolean,
    alt: String,
    classes: String,
    list: Object,
  },
};
</script>
