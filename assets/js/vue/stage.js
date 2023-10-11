import Tools from '../tools.js';

export default {
  tagName: 'stage',
  computed: {
    lightValue() {
      return Tools.isTrue(this.light);
    },
    classValue() {
      return [
        'stage is-component vue-component',
        this.lightValue ? 'text--light' : '',
        this.spacing ? this.spacing : '',
        this.classes ? this.classes : '',
        Tools.isTrue(this.sticky) ? 'stage--sticky has-sticky' : '',
      ];
    },
    colorStyling() {
      const bgColor = this.bgColor ? `--stage-bg-color: ${this.bgColor}; background-color: var(--stage-bg-color);` : '';
      const headlineColor = this.headlineColor
        ? `--color-headlines: ${this.headlineColor}; color: ${this.headlineColor}`
        : '';
      return [bgColor, headlineColor];
    },
    headlineClasses() {
      return 'stage__headline h2-font-size thin light';
    },
    spacingClasses() {
      // TODO implement
    },
  },
  props: {
    classes: String,
    variant: String,
    headline: String,
    subline: String,
    overline: String,
    ctaText: String,
    bgColor: String,
    headlineColor: String,
    sticky: {
      default: false,
    },
    light: {
      default: null,
    },
    spacing: String,
    video: Boolean,
    animation: Object,
    pattern: Boolean,
  },
  // stage__container classes utility-animation container sticky__target fade-in-bottom
  template: `
    <div :class="classValue" :style="colorStyling">
      <div class="stage__container container" DISABLED-data-utility-animation-step="1">
        <div class="stage__row row">
          <div class="stage__wrapper col-sm-12">
            <overline v-if="overline" :text="overline" />
            <headline :text="headline" level="h1" :classes="headlineClasses" />
            <subline v-if="subline" :text="subline" />
            <cta v-if="ctaText" :text="ctaText" />
            <animation v-if="animation" :sequence="animation.sequence" />
            <video-player v-if="video" />
            <pattern-bg v-if="pattern" />
          </div>
        </div>
      </div>
    </div>
  `,
};
