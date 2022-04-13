export default {
  tagName: 'icon',
  computed: {
    classList() {
      console.log('ani', this.animation);

      return [
        'icon',
        `icon--${this.direction}`,
        `icon--${this.icon}`,
        `${this.animation ? 'js-text-animation__icon' : null}`,
        `${this.circle ? 'icon--circle' : null}`,
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
    viewBoxWidth() {
      var viewBoxWidth;

      switch (this.icon) {
        case 'close':
          viewBoxWidth = 48;
          break;
        default:
          viewBoxWidth = 24;
          break;
      }

      return viewBoxWidth;
    },
    viewBoxHeight() {
      var viewBoxWidth;

      switch (this.icon) {
        case 'close':
          viewBoxWidth = 48;
          break;
        default:
          viewBoxWidth = 24;
          break;
      }

      return viewBoxWidth;
    },
    viewBox() {
      return `0 0 ${this.viewBoxWidth} ${this.viewBoxHeight}`;
    },
    style() {
      return `stroke: ${this.color}; transform: rotate(var(--icon-rotation));`;
    },
    closeOuterPos() {
      return this.viewBoxWidth - this.padding;
    },
  },
  props: {
    icon: String,
    color: String,
    direction: String,
    size: String,
    circle: Boolean,
    hover: Boolean,
    padding: Number,
    animation: Boolean,
  },
  template: `
    <span :class="classList">
      <svg v-if="icon === 'close'" :style="style" :width="innerSize" :height="innerSize" :viewBox="viewBox" xml:space="preserve"  version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <line fill="none" stroke-linecap="round" stroke-linejoin="round" :x1="closeOuterPos" :y1="padding" :x2="padding" :y2="closeOuterPos"/>
        <line fill="none" stroke-linecap="round" stroke-linejoin="round" :x1="closeOuterPos" :y1="closeOuterPos" :x2="padding" :y2="padding"/>
      </svg>
    </span>



    `,
};
