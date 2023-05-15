export default {
  tagName: 'text-image-list',
  computed: {
    classValue() {
      return ['text-image-list py-8 mt-4', 'bouncing', `${this.classes ? this.classes : ''}`, 'vue-component'];
    },
    colorStyling() {
      const bgColor = this.bgColor ? `background-color:  ${this.bgColor};` : '';
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
  },
  template: `
    <div :class="classValue" :style="colorStyling">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 ">
            <headline :text="headline" :level="level" />
          </div>
        </div>
      </div>
      <slot></slot>
    </div>
  `,
};
