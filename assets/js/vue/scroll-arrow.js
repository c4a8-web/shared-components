import Tools from '../tools.js';

export default {
  tagName: 'scroll-arrow',
  computed: {
    classList(){
      return [
        'scroll-arrow',
        'container',
        `${this.arrowSpacing ? 'mt-lg-0 mt-n'+this.arrowSpacing : ''}`,
        'vue-component',
      ]
    },
  },
  methods: {
    handleClick() {
      const target = document.querySelector(this.target);

      if (!target) return;

      Tools.scrollIntoView(target, true);
    },
  },
  props: {
    target: String,
    arrowSpacing: {
      default: null,
    }
  },
  template: `
    <div :class="classList">
      <div class="row">
        <div class="col d-flex flex-column justify-content-center">
          <icon classes="scroll-arrow__button" size="xl" icon="arrow-narrow" :onclick="handleClick"  />
        </div>
      </div>
    </div>
  `,
};
