import Tools from '../tools.js';
import UtilityAnimation from '../utility-animation.js';
import Events from '../events.js';

// TODO replace outer container with wrapper when feature "wrapper-background" is finished

export default {
  tagName: 'grid',
  computed: {
    headlineLevelValue() {
      return this.headlineLevel ? this.headlineLevel : 'h2';
    },
    headlineClassesValue() {
      return `grid__headline ${this.headlineClasses ? this.headlineClasses : 'h3-font-size'}`;
    },
    style() {
      const copyColor = Tools.isTrue(this.light) ? 'var(--color-copy-light)' : null;

      return {
        backgroundColor: this.bgColor,
        '--color-copy': copyColor,
        '--color-headlines': copyColor,
      };
    },
    itemsValue() {
      return Tools.getJSON(this.items);
    },
  },
  props: {
    items: String,
    headline: String,
    headlineLevel: String,
    headlineClasses: String,
    light: {
      default: false,
    },
    bgColor: String,
  },
  template: `
    <div class="grid has-background vue-component" :style="style">
      <div class="grid__container container">
      <div class="grid__row row">
        <div class="grid__col col">
          <headline :text="headline" :level="headlineLevelValue" :classes="headlineClassesValue" />
          <div class="grid__items">
            <div class="grid__item" v-for="(item, index) in itemsValue" :key="index">
              <span class="grid__item-title">{{ item.title }}</span>
              <p class="grid__item-text">{{ item.text }}</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  `,
};
