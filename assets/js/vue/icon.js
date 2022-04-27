export default {
  tagName: 'icon',
  computed: {
    classList() {
      return [
        'icon',
        `icon--${this.direction}`,
        `icon--${this.icon}`,
        `${this.animation ? 'js-text-animation__icon' : ''}`,
        `${this.circle ? 'icon--circle' : ''}`,
        `${this.hover ? 'icon--hover' : ''}`,
        'vue-component',
      ];
    },
    innerSize() {
      var innerSize;

      if (this.size === 'small') {
        innerSize = '18px';
      } else if (this.size === 'large') {
        innerSize = '48px';
      } else if (this.size === 'xl') {
        innerSize = '120px';
      } else if (this.size === 'xxl') {
        innerSize = '200px';
      } else {
        innerSize = '28px';
      }

      return innerSize;
    },
    parentStyle() {
      return `--color-icon: ${this.color}; --icon-rotation: ${this.rotation}`;
    },
    rotation() {
      if (this.direction === 'left') {
        return '180deg';
      } else {
        return '0deg';
      }
    },
    settings() {
      return {
        width: this.innerSize,
        height: this.innerSize,
        padding: this.padding,
        'xml:space': 'preserve',
        version: '1.1',
        xmlns: 'http://www.w3.org/2000/svg',
        'xmlns:link': 'http://www.w3.org/1999/xlink',
      };
    },
  },
  props: {
    icon: String,
    color: String,
    direction: String,
    size: String,
    circle: {
      default: null,
    },
    hover: {
      default: null,
    },
    padding: Number,
    animation: {
      default: null,
    },
  },
  template: `
    <span :class="classList" :style="parentStyle">
      <component :is="icon" v-bind="settings" :color="color" />
    </span>
    `,
};
