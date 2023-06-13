import Tools from '../tools.js';

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
    <list-container
      :classes="classes"
      :headline="headline"
      :level="level"
      :bg-color="bgColor"
      :headline-color="headlineColor"
      :headline-sticky="headlineSticky"
      :spacing="spacing"
    >
      <slot></slot>
    </list-container>
  `,
};
