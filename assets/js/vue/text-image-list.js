import Tools from '../tools.js';
import State from '../state.js';

export default {
  tagName: 'text-image-list',
  computed: {
    classValue() {
      return [
        'text-image-list vue-component',
        `${this.spacing ? this.spacing : ''}`,
        `${this.classes ? this.classes : ''}`,
        Tools.isTrue(this.headlineSticky) ? 'text-image-list--headline-sticky has-headline-sticky' : '',
      ];
    },
    colorStyling() {
      const bgColor = this.bgColor
        ? `--text-image-list-bg-color: ${this.bgColor}; background-color: var(--text-image-list-bg-color);`
        : '';
      const headlineColor = this.headlineColor
        ? `--color-headlines: ${this.headlineColor}; color: ${this.headlineColor}`
        : '';
      return [bgColor, headlineColor];
    },
  },
  props: {
    classes: String,
    headline: String,
    level: String,
    bgColor: String,
    headlineColor: String,
    headlineSticky: {
      default: false,
    },
    spacing: String,
  },
  template: `
    <div :class="classValue" :style="colorStyling">
      <div class="text-image-list__container utility-animation container headline-sticky__target fade-in-bottom" data-utility-animation-step="1">
        <div class="row">
          <div class="col-sm-12 ">
            <headline :text="headline" :level="level" classes="text-image-list__headline" />
          </div>
        </div>
      </div>
      <slot></slot>
    </div>
  `,
};
