export default {
  tagName: 'cta',
  computed: {
    tag() {
      return this.button ? 'button' : 'a';
    },
    classes() {
      return `${this.baseClass} ${this.innerSkin} vue-component`;
    },
    innerSkin() {
      if (this.link) {
        return this.skin;
      } else {
        return this.skin ? `btn-${this.skin}` : 'btn-primary';
      }
    },
    innerWidth() {
      if (this.width) {
        return this.width;
      } else {
        return `w-100 ${this.grow ? '' : 'w-lg-auto'}`;
      }
    },
    baseClass() {
      let baseClass = this.$.type.tagName;

      if (this.link) {
        baseClass += ' link';
      } else {
        baseClass += ' btn ' + this.innerWidth;
      }

      if (this.external) {
        baseClass += ' cta--external';
      }

      return baseClass;
    },
  },
  props: {
    href: {
      default: null,
    },
    button: Boolean,
    text: String,
    analytics: {
      default: null,
    },
    link: Boolean,
    external: {
      default: null,
    },
    skin: String,
    width: String,
    grow: Boolean,
    type: String,
    target: String,
    alternativeHref: {
      default: null,
    },
    trigger: String,
  },
  template: `
    <component :is='tag' role="button"
               :class="classes"
               :data-text="text"
               :href="href ? href : null"
               :data-analytics="analytics ? analytics : null"
               :type="type ? type : null"
               :target="target ? target : null"
               :data-alternative-href="alternativeHref ? alternativeHref : null"
               :data-trigger="trigger ? trigger : null"
    >
      {{ text }}
      <slot></slot>
    </component>`,
};
