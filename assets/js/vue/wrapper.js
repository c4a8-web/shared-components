import Tools from '../tools.js';
import State from '../state.js';

export default {
  tagName: 'wrapper',
  computed: {
    classList() {
      return [
        'wrapper vue-component',
        this.classes ? this.classes : null,
        this.spacing && this.bgColor ? `${this.spacing} ${State.HAS_SPACING}` : null,
        this.bgColor ? State.HAS_BACKGROUND : null,
        Tools.isTrue(this.noContainer) ? null : 'container',
      ];
    },
    style() {
      const copyColor = Tools.isTrue(this.light) ? 'var(--color-copy-light)' : null;

      return {
        backgroundColor: this.bgColor,
        '--color-copy': copyColor,
        '--color-headlines': copyColor,
      };
    },
  },
  props: {
    bgColor: String,
    spacing: String,
    light: {
      default: false,
    },
    noContainer: {
      default: false,
    },
    hideContainer: {
      default: false,
    },
    classes: {
      default: '',
    },
  },
  template: `
    <template v-if="!hideContainer">
      <div :class="classList" :style="style">
        <slot></slot>
      </div>
    </template>

    <template v-else>
      <slot></slot>
    </template>
  `,
};
