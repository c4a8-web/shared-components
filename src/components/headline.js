import Tools from '../assets/js/tools.js';

export default {
  tagName: 'headline',
  computed: {
    tag() {
      return this.level ? this.level : 'h2';
    },
    classList() {
      const classes =
        this.classes && Tools.hasFontSizeClass(this.classes)
          ? this.classes
          : `${this.tag}-font-size ${this.classes ? this.classes : ''}`;
      return `${classes} headline vue-component`;
    },
    dataUtilityAnimationStep() {
      return this.utilityAnimationStep ? this.utilityAnimationStep : null;
    },
  },
  props: { text: String, level: String, classes: String, utilityAnimationStep: Number },
  template: `
    <component
      :is="tag"
      :class="classList"
      v-html="text"
      v-if="text"
      :data-utility-animation-step="dataUtilityAnimationStep"
    >
    </component>
    <component :is="tag" :class="classList" v-else :data-utility-animation-step="dataUtilityAnimationStep">
      <slot></slot>
    </component>
`,
};
