export default {
  tagName: 'headline',
  computed: {
    tag() {
      return this.level ? this.level : 'h2';
    },
    classList() {
      const classes = this.classes && this.classes.indexOf('-font-size') !== -1 ? this.classes : this.classValue;
      return `${classes} headline vue-component`;
    },
    classValue() {
      const value = `${this.classes ? this.classes : ''}`;
      const classVal = this.classes.indexOf('font-size-') === 0 ? value : value + `${this.tag}-font-size`;
      return classVal;
    },
  },
  props: {
    text: String,
    level: String,
    classes: String,
  },
  template: `
    <component :is='tag'
              :class="classList"
              v-html="text"
              v-if="text"
    >
    </component>
    <component :is='tag'
              :class="classList"
              v-else
    >
      <slot></slot>
    </component>`,
};
