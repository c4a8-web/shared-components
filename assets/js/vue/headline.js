export default {
  tagName: 'headline',
  computed: {
    tag() {
      return this.level ? this.level : 'h2';
    },
    classList() {
      const classes =
        this.classes && this.hasFontSizeClass()
          ? this.classes
          : `${this.tag}-font-size ${this.classes ? this.classes : ''}`;

      return `${classes} headline vue-component`;
    },
  },
  methods: {
    hasFontSizeClass() {
      return this.classes.indexOf('-font-size') !== -1 || this.classes.indexOf('font-size-') !== -1;
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
