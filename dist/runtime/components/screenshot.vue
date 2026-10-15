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
          <lightbox
            classes="screenshot__img-frame media-viewer py-4"
            :source="source"
            :source-caption="sourceCaption"
            :alt="alt"
            :cloudinary="cloudinary"
          >
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
    spacing: {
      type: String,
      default: '',
    },
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
<style>
.screenshot .flex-row-reverse .screenshot__img {
  position: relative;
}
.screenshot .flex-row-reverse .screenshot__img::before {
  left: -50vw;
  right: auto;
}
.screenshot .flex-row-reverse .screenshot__img::after {
  right: 0;
  left: auto;
}
.screenshot .media-viewer-icon {
  font-size: 20px;
}

.screenshot__img {
  position: relative;
}
.screenshot__img::before {
  position: absolute;
  display: block;
  content: "";
  right: -50vw;
  height: 100%;
  width: 50vw;
  background-color: inherit;
  z-index: -1;
}
.screenshot__img::after {
  position: absolute;
  display: block;
  content: "";
  left: 0;
  height: 100%;
  width: 25%;
  background-color: var(--color-background);
}
.screenshot__img .media-viewer-container {
  z-index: 2;
}
@media (min-width: 768px) {
  .screenshot__img {
    min-height: 500px;
  }
}

.screenshot__img-frame img {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
}
</style>
