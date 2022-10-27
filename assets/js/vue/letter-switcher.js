import State from '../state.js';

export default {
  tagName: 'letter-switcher',
  data() {
    return {
      show: false,
      end: false,
      overline: '',
      endDelay: 3400,
      startDelay: 900,
    };
  },
  computed: {
    classList() {
      return ['letter-switch', `${this.show ? State.SHOW : ''}`, `${this.end ? State.END : ''}`, 'vue-component'];
    },
  },
  mounted() {
    this.overline = this.overlineStart;

    setTimeout(() => {
      this.setHeight();
      this.startAnimation();
    }, this.startDelay);
  },
  methods: {
    setHeight() {
      const animation = this.$refs['animation'];

      if (!animation) return;

      const letter = animation.querySelector('.letter-switcher__letter');

      animation.style.height = letter.offsetHeight + 'px';

      this.show = true;
    },
    startAnimation() {
      const delay = 0.3;
      const letterDelay = 0.07;

      [].forEach.call(this.$refs['root'].querySelectorAll('.letter-switcher__group'), (group, index) => {
        const stepDelay = index * delay;
        const duration = letterDelay * group.children.length;

        group.style.animation = `letter-switch ${duration}s ${stepDelay}s ease-out forwards`;
      });

      setTimeout(() => {
        this.end = true;
        this.switchOverline(this.showEndAnimation);
      }, this.endDelay);
    },
    showEndAnimation() {
      const endText = this.$refs['end-text'];
      const end = this.$refs['end'];

      if (!endText || !end) return;

      endText.style.width = '0px';
      end.classList.remove(State.COLLAPSED);
    },
    switchOverline(callback) {
      const overline = this.$refs['overline'];

      if (!overline) return;

      overline.addEventListener('transitionend', () => {
        this.overline = this.overlineEnd;
        overline.style.opacity = 1;

        callback();
      });

      overline.style.opacity = 0;
    },
  },
  props: {
    textStart: String,
    textEnd: String,
    overlineStart: String,
    overlineEnd: String,
  },
  template: `
    <div :class="classList" ref="root">
      <div class="letter-switcher__overline font-size-5 light" ref="overline">{{ overline }}</div>
      <div class="letter-switcher__container">
        <div class="letter-switcher__animation font-size-6 bold" ref="animation">
          <span>S</span><div class="letter-switcher__group" ref="group">
            <span class="letter-switcher__letter letter-switcher__letter-end">i</span>
            <span class="letter-switcher__letter letter-switcher__middle">h</span>
            <span class="letter-switcher__letter letter-switcher__middle">g</span>
            <span class="letter-switcher__letter letter-switcher__middle">f</span>
            <span class="letter-switcher__letter letter-switcher__middle">e</span>
            <span class="letter-switcher__letter letter-switcher__middle">d</span>
            <span class="letter-switcher__letter letter-switcher__middle">c</span>
            <span class="letter-switcher__letter letter-switcher__middle">b</span>
            <span class="letter-switcher__letter letter-switcher__middle">a</span>
            <span class="letter-switcher__letter letter-switcher__default">_</span>
          </div>cherhei<div class="letter-switcher__group" ref="group">
            <span class="letter-switcher__letter letter-switcher__letter-end">t</span>
            <span class="letter-switcher__letter letter-switcher__middle">s</span>
            <span class="letter-switcher__letter letter-switcher__middle">r</span>
            <span class="letter-switcher__letter letter-switcher__middle">q</span>
            <span class="letter-switcher__letter letter-switcher__middle">p</span>
            <span class="letter-switcher__letter letter-switcher__middle">o</span>
            <span class="letter-switcher__letter letter-switcher__middle">n</span>
            <span class="letter-switcher__letter letter-switcher__middle">m</span>
            <span class="letter-switcher__letter letter-switcher__middle">l</span>
            <span class="letter-switcher__letter letter-switcher__middle">k</span>
            <span class="letter-switcher__letter letter-switcher__middle">j</span>
            <span class="letter-switcher__letter letter-switcher__middle">i</span>
            <span class="letter-switcher__letter letter-switcher__middle">h</span>
            <span class="letter-switcher__letter letter-switcher__middle">g</span>
            <span class="letter-switcher__letter letter-switcher__middle">f</span>
            <span class="letter-switcher__letter letter-switcher__middle">e</span>
            <span class="letter-switcher__letter letter-switcher__middle">d</span>
            <span class="letter-switcher__letter letter-switcher__middle">c</span>
            <span class="letter-switcher__letter letter-switcher__middle">b</span>
            <span class="letter-switcher__letter letter-switcher__middle">a</span>
            <span class="letter-switcher__letter letter-switcher__default">_</span>
          </div>slüc<div class="letter-switcher__group" ref="group">
            <span class="letter-switcher__letter letter-switcher__letter-end">k</span>
            <span class="letter-switcher__letter letter-switcher__middle">j</span>
            <span class="letter-switcher__letter letter-switcher__middle">i</span>
            <span class="letter-switcher__letter letter-switcher__middle">h</span>
            <span class="letter-switcher__letter letter-switcher__middle">g</span>
            <span class="letter-switcher__letter letter-switcher__middle">f</span>
            <span class="letter-switcher__letter letter-switcher__middle">e</span>
            <span class="letter-switcher__letter letter-switcher__middle">d</span>
            <span class="letter-switcher__letter letter-switcher__middle">c</span>
            <span class="letter-switcher__letter letter-switcher__middle">b</span>
            <span class="letter-switcher__letter letter-switcher__middle">a</span>
            <span class="letter-switcher__letter letter-switcher__default">_</span>
          </div>e!
        </div>
        <div class="letter-switcher__end-animation font-size-6 bold">
          <div class="letter-switcher__spacer">
            <div class="letter-switcher__end is-collapsed" ref="end" >{{ textEnd }}</div>
            <div class="letter-switcher__end-text" ref="end-text"></div>
          </div>
        </div>
      </div>
    </div>
    `,
};
