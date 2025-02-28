<template>
  <article
    :class="[
      'event-teaser utility-animation fade-in-bottom hover__parent',
      `event-teaser--size-${variant}`,
      eventTeaserImageFullWidth,
      webcast ? 'event-teaser--webcast' : teaser ? 'event-teaser--teaser' : 'event-teaser--training',
      textShadow ? 'event-teaser--text-shadow' : '',
    ]"
    @click="clickHandler"
    data-utility-animation-step="1"
    :style="computedStyles"
    ref="root"
  >
    <header class="event-teaser__header">
      <div class="event-teaser__background">
        <div class="event-teaser__shapes is-background" v-if="shapes && shapes.length > 0">
          <div
            v-for="(shape, index) in shapes"
            :key="index"
            :class="['event-teaser__shape', getShapeSettings(index, webcast).peak]"
            :style="{ width: getShapeSettings(index, webcast).width + '%' }"
          >
            <svg-shape
              :color="shape.color"
              :peak="getShapeSettings(index, webcast).peak"
              :height="getShapeSettings(index, webcast).height"
              :obliquity="getShapeSettings(index, webcast).obliquity"
            />
          </div>
        </div>

        <div class="event-teaser__image is-foreground">
          <v-img
            :img="image.img"
            :alt="image.alt"
            cloudinary
            :imgSrcSets="imgSrcSets"
            :lottie="image.lottie"
            v-if="image"
          />
        </div>
      </div>
      <div class="event-teaser__foreground">
        <div class="event-teaser__details">
          <div class="event-teaser__badge">
            <badge
              :text="badge.text"
              :icon="badge.icon"
              :color="badge.color"
              :textColor="badge.textColor"
              v-if="badge"
            />
          </div>
          <div v-if="author" class="event-teaser__authors font-size-2 thin bold">
            <div class="event-teaser__authors-frame">
              <div class="event-teaser__authors-background"></div>
              <div class="event-teaser__authors-foreground" v-html="authorNames"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <main class="event-teaser__main">
      <div class="event-teaser__details">
        <div class="event-teaser__badge">
          <badge :text="badge.text" :icon="badge.icon" :color="badge.color" :textColor="badge.textColor" v-if="badge" />
        </div>
        <div v-if="moment || time" class="event-teaser__timing">
          <span v-if="moment" class="event-teaser__moment font-size-1 bold">{{ moment }}</span>
          <span v-if="time" class="event-teaser__time font-size-1">{{ time }}</span>
        </div>
      </div>
      <div class="event-teaser__headline font-size-4">
        <a v-if="url && !webcast && !teaser" :href="url">
          {{ headline }}
        </a>
        <span v-else>{{ headline }}</span>
      </div>
      <div v-if="webcast || teaser" class="event-teaser__content richtext" v-html="content"></div>
    </main>
    <footer v-if="price || cta" class="event-teaser__footer">
      <div v-if="price" class="event-teaser__price font-size-2 bold">{{ price }}</div>
      <div v-if="cta" class="event-teaser__cta">
        <cta
          :text="cta.text"
          :href="ctaHref"
          :skin="cta.skin || 'primary'"
          :width="cta.width || 'w-100 w-lg-auto'"
          :external="cta.external"
        />
      </div>
    </footer>
  </article>
</template>

<script>
import ImgSrcSets from '../utils/data/img-src-sets.js';
import UtilityAnimation from '../utils/utility-animation.js';

export default {
  props: {
    id: String,
    headline: String,
    content: String,
    moment: String,
    time: String,
    shapes: Array,
    author: Array,
    image: Object,
    badge: Object,
    price: String,
    cta: Object,
    variant: {
      type: Number,
      default: 4,
    },
    webcast: Boolean,
    teaser: Boolean,
    url: String,
    index: Number,
    textShadow: Boolean,
    bgColorRgb: String,
    lang: {
      type: String,
      default: 'de',
    },
  },
  computed: {
    authorNames() {
      const authorNames = this.author?.map((author) => author).join('<br />& ');

      return `${this.$t('withAuthor')} ${authorNames}`;
    },
    imgSrcSets() {
      return this.image && this.image.lottie ? null : ImgSrcSets['eventTeaser'];
    },
    computedStyles() {
      return {
        '--utility-animation-index': this.index ? this.index : undefined,
        '--event-teaser-background-color-rgb': this.bgColorRgb ? this.bgColorRgb : undefined,
      };
    },
    eventTeaserImageFullWidth() {
      return !this.shapes || this.shapes.length === 0 ? 'event-teaser--image-full-width' : '';
    },
    ctaHref() {
      return this.cta?.href || this.url;
    },
  },
  mounted() {
    UtilityAnimation.init([this.$refs.root]);
  },
  methods: {
    getShapeSettings(index, webcast) {
      let shapeSettings = {
        peak: 'right',
        height: '40',
        width: '100',
        obliquity: undefined,
      };

      const shape = this.shapes[index];

      if (webcast) {
        if (this.shapes?.length > 1) {
          if (index === 0) {
            shapeSettings.peak = shape.peak || 'left';
            shapeSettings.height = shape.height || 84;
            shapeSettings.width = shape.width || 100;
          } else {
            shapeSettings.peak = shape.peak || 'right';
            shapeSettings.height = shape.height || 17;
            shapeSettings.width = shape.width || 60;
          }
        } else {
          shapeSettings.peak = shape.peak || 'right';
          shapeSettings.height = shape.height || 40;
          shapeSettings.width = shape.width || (this.variant === 12 ? 80 : 100);
        }
      } else {
        if (index === 0) {
          shapeSettings.peak = shape.peak || 'right';
          shapeSettings.height = shape.height || 12;
          shapeSettings.width = shape.width || 237;
          shapeSettings.obliquity = shape.obliquity || 4;
        } else {
          shapeSettings.peak = shape.peak || 'left';
          shapeSettings.height = shape.height || 10;
          shapeSettings.width = shape.width || 80;
          shapeSettings.obliquity = shape.obliquity || 4;
        }
      }

      return shapeSettings;
    },
    clickHandler(event) {
      event.currentTarget.querySelector('a')?.click();
    },
    shapePeak(index) {
      return index === 0 ? 'right' : 'left';
    },
    shapeHeight(index) {
      return index === 0 ? 12 : 10;
    },
    shapeWidth(index) {
      return index === 0 ? 237 : 80;
    },
  },
};
</script>
