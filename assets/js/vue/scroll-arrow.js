import Tools from '../tools.js';

export default {
  tagName: 'scroll-arrow',
  computed: {},
  methods: {
    handleClick() {
      const target = document.querySelector(this.target);

      if (!target) return;

      Tools.scrollIntoView(target, true);
    },
  },
  props: {
    target: String,
  },
  template: `
    <div class="scroll-arrow container vue-component">
      <div class="row">
        <div class="col d-flex flex-column justify-content-center">
          <icon classes="scroll-arrow__button" size="xl" icon="arrow-narrow" :onclick="handleClick"  />
        </div>
      </div>
    </div>
  `,
};
