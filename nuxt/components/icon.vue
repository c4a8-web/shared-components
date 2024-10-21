<template>
  <span :class="classList" :style="parentStyle">
    <component :is="icon" v-bind="settings" :color="props.color" :closed="closed" :step="step" />
  </span>
</template>
<script>
import Tools from '../utils/tools.js';

// TODO figure out why auto-import does not work here correctly. rendering it manually works fine.
import ComputerShield from './icons/computer-shield.vue';
import PlusMinus from './icons/plus-minus.vue';

export default {
  components: {
    'computer-shield': ComputerShield,
    'plus-minus': PlusMinus,
  },
  tagName: 'icon',
  data() {
    return Tools.validateVueProps(this);
  },
  computed: {
    classList() {
      return [
        'icon',
        `${this.classes ? this.classes : ''}`,
        `${this.props.hasBackground ? 'icon--has-background' : ''}`,
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

      switch (this.props.size) {
        case 'xxl':
          innerSize = '200px';
          break;
        case 'xl':
          innerSize = '120px';
          break;
        case 'medium':
          innerSize = '28px';
          break;
        case 'small':
          innerSize = '18px';
          break;
        case 'xs':
          innerSize = '10px';
          break;
        default:
        case 'large':
          innerSize = '48px';
          break;
      }

      return innerSize;
    },
    parentStyle() {
      return `--color-icon: ${this.props.color}; --icon-rotation: ${this.rotation}`;
    },
    rotation() {
      if (this.props.direction === 'left') {
        return '180deg';
      } else if (this.props.direction === 'clockwise') {
        return '90deg';
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
    classes: {
      default: '',
    },
    closed: {
      default: null,
    },
    hasBackground: {
      default: null,
    },
    step: {
      default: null,
    },
  },
};
</script>
