import Tools from '../tools.js';

export default {
  tagName: 'icon',
  data() {
    return Tools.validateVueProps(this);
  },
  computed: {
    classList() {
      return [
        'icon',
        `icon--${this.props.direction}`,
        `icon--${this.props.icon}`,
        `${this.props.animation ? 'js-text-animation__icon' : ''}`,
        `${this.props.circle ? 'icon--circle' : ''}`,
        `${this.props.hover ? 'icon--hover' : ''}`,
        'vue-component',
      ];
    },
    innerSize() {
      var innerSize;

      if (this.props.size === 'small') {
        innerSize = '18px';
      } else if (this.props.size === 'large') {
        innerSize = '48px';
      } else if (this.props.size === 'xl') {
        innerSize = '120px';
      } else if (this.props.size === 'xxl') {
        innerSize = '200px';
      } else {
        innerSize = '28px';
      }

      return innerSize;
    },
    parentStyle() {
      return `--color-icon: ${this.props.color}; --icon-rotation: ${this.props.rotation}`;
    },
    rotation() {
      if (this.props.direction === 'left') {
        return '180deg';
      } else {
        return '0deg';
      }
    },
    settings() {
      return {
        width: this.innerSize,
        height: this.innerSize,
        padding: this.props.padding,
        'xml:space': 'preserve',
        version: '1.1',
        xmlns: 'http://www.w3.org/2000/svg',
        'xmlns:link': 'http://www.w3.org/1999/xlink',
      };
    },
  },
  props: {
    icon: {
      default: 'close',
    },
    color: {
      default: 'currentColor',
    },
    direction: {
      default: 'right',
    },
    size: {
      default: 'large',
    },
    circle: {
      default: null,
    },
    hover: {
      default: null,
    },
    padding: {
      default: 6,
    },
    animation: {
      default: null,
    },
  },
  template: `
    <span :class="classList" :style="parentStyle">
      <component :is="icon" v-bind="settings" :color="props.color" />
    </span>
    `,
};
