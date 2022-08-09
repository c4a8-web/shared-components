export default {
  tagName: 'cta',
  computed: {
    tag() {
      return this.button ? 'button' : 'a';
    },
    hasIcon() {
      return this.link || this.external || this.icon || this.download;
    },
    classList() {
      return [
        `${this.baseClass} ${this.innerSkin}`,
        `${this.download ? 'cta--download' : ''}`,
        `${this.external ? 'cta--external' : ''}`,
        'vue-component',
      ];
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

      return baseClass;
    },
    iconName() {
      let iconName;

      if (this.icon) {
        iconName = this.icon;
      } else if (this.link) {
        iconName = 'arrow';
      } else if (this.external) {
        iconName = 'arrow-external';
      } else if (this.download) {
        iconName = 'arrow-external';
      }

      return iconName;
    },
    targetValue() {
      return this.external ? '_blank' : this.target;
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
    icon: String,
    download: {
      default: null,
    },
  },
  template: `
    <component :is='tag' role="button"
               :class="classList"
               :data-text="text"
               :href="href ? href : null"
               :data-analytics="analytics ? analytics : null"
               :type="type ? type : null"
               :target="targetValue ? targetValue : null"
               :data-alternative-href="alternativeHref ? alternativeHref : null"
               :data-trigger="trigger ? trigger : null"
    >
      {{ text }}
      <icon :icon="iconName" v-if="hasIcon" size=" " />
    </component>`,
};
