import State from '../state.js';

export default {
  tagName: 'timeline',
  computed: {
    classList() {
      return ['timeline', this.isMounted ? State.READY : '', 'has-background', 'vue-component'];
    },
    copyColor() {
      return this.color ? this.color : 'var(--color-copy-light)';
    },
    backgroundColor() {
      return this.bgColor ? this.bgColor : 'var(--color-blue-dark)';
    },
    style() {
      return `--color-timeline-background: ${this.backgroundColor}; --color-timeline-color: ${this.copyColor};`;
    },
    headlineClasses() {
      return `timeline__headline h3-font-size light ${this.headline?.classes ? this.headline.classes : ''}`;
    },
  },
  mounted() {
    this.startAnimation();
  },
  data() {
    return {
      isMounted: false,
      startDelay: 500,
    };
  },
  methods: {
    startAnimation() {
      setTimeout(() => {
        this.isMounted = true;
      }, this.startDelay);
    },
    getLinePosition(index) {
      return `--timeline-line-position: ${index}`;
    },
  },
  props: {
    headline: Object,
    bgColor: {
      default: null,
    },
    color: {
      default: null,
    },
    entries: Array,
  },
  template: `
    <div :class="classList" :style="style">
      <div class="container">
        <div class="timeline__row row">
          <div class="timeline__col col">
            <headline :text="headline?.text" :level="headline?.level" :classes="headlineClasses" />

            <div class="timeline__content">
              <div class="timeline__line">
                <div class="timeline__line-start">
                  <div class="timeline__line-corner">
                    <span></span>
                  </div>
                </div>
                <div class="timeline__entry-container" v-for="(entry, index) in entries">
                  <div class="timeline__entry">
                    <div class="timeline__entry-inner">
                      <div class="timeline__entry-inner-text">
                        {{ entry }}
                      </div>
                      <div class="timeline__entry-inner-line"></div>
                    </div>
                  </div>
                  <div class="timeline__entry-line" :style="getLinePosition(index)"></div>
                  <div class="timeline__entry-spacer">
                    <div class="timeline__entry-inner">
                      <div class="timeline__entry-inner-text">
                        {{ entry }}
                      </div>
                      <div class="timeline__entry-inner-line"></div>
                    </div>
                  </div>
                </div>
                <div class="timeline__line-end"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`,
};
