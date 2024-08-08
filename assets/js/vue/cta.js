import State from '../state.js';
import Tools from '../tools.js';

export default {
  tagName: 'cta',
  computed: {
    tag() {
      return this.href || this.alternativeHref || this.target ? 'a' : 'button';
    },
    hasIcon() {
      return this.link || this.externalValue || this.icon || this.downloadValue;
    },
    externalValue() {
      return Tools.isTrue(this.external);
    },
    downloadValue() {
      return Tools.isTrue(this.download);
    },
    classList() {
      return [
        `${this.baseClass} ${this.innerSkin}`,
        this.classes ? this.classes : '',
        this.download ? 'cta--download' : '',
        this.external ? 'cta--external' : '',
        this.icon ? `cta--has-icon cta--icon-${this.icon}` : '',
        Tools.isTrue(this.reversed) === true ? 'cta--reversed' : '',
        Tools.isTrue(this.monochrome) === true ? 'cta--monochrome' : '',
        this.link && Tools.isTrue(this.active) === true ? State.ACTIVE : '',
        Tools.isTrue(this.loading) ? State.LOADING : '',
        Tools.isTrue(this.hasBackground) === true ? 'cta--has-background' : '',
        'vue-component',
      ];
    },
    innerSkin() {
      if (this.link) {
        return this.skin ? this.skin : '';
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
      } else if (this.externalValue) {
        iconName = 'arrow-external';
      } else if (this.downloadValue) {
        iconName = 'arrow-external';
      } else if (this.link) {
        iconName = 'arrow';
      }
      return iconName;
    },
    targetValue() {
      return this.externalValue ? '_blank' : this.target;
    },
    sizeValue() {
      return 'medium';
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
    reversed: {
      default: null,
    },
    monochrome: {
      default: null,
    },
    active: {
      default: null,
    },
    classes: {
      default: '',
      type: String,
    },
    loading: {
      default: null,
    },
    hasBackground: {
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
      <span class="cta__text">{{ text }}</span>
      <icon :icon="iconName" v-if="hasIcon" :size="sizeValue" />
    </component>`,
};
