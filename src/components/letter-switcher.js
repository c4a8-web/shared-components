import State from "../assets/js/state.js";
import Tools from "../assets/js/tools.js";
import Events from "../assets/js/events.js";

export default {
  tagName: "letter-switcher",
  data() {
    return {
      show: false,
      end: false,
      overline: "",
      endDelay: 3400,
      startDelay: 900,
      isLower: null,
    };
  },
  computed: {
    classList() {
      return [
        "letter-switch",
        `${this.show ? State.SHOW : ""}`,
        `${this.end ? State.END : ""}`,
        "vue-component",
      ];
    },
    fontSize() {
      return this.isLower ? "font-size-5" : "font-size-6 bold";
    },
    letterSwitchEndClassList() {
      return ["letter-switcher__end-animation", this.fontSize];
    },
    letterSwitchAnimationClassList() {
      return [
        "letter-switcher__animation",
        this.fontSize,
        "justify-content-center",
        `${this.isLower ? "flex-column" : ""}`,
      ];
    },
  },
  mounted() {
    this.overline = this.overlineStart;
    this.isLower = this.isLowerBreakpoint();

    this.bindEvents();

    setTimeout(() => {
      this.setHeight();
      this.startAnimation();
    }, this.startDelay);
  },
  methods: {
    bindEvents() {
      window.addEventListener("resize", () => {
        this.handleResize();
      });
    },
    handleResize() {
      this.isLower = this.isLowerBreakpoint();
      this.setHeight();
    },
    isLowerBreakpoint() {
      return Tools.isBelowBreakpoint("sm");
    },
    setHeight() {
      this.show = false;

      const animation = this.$refs["animation"];

      if (!animation) return;

      const letter = animation.querySelector(".letter-switcher__letter");
      const newHeight = this.isLower
        ? letter.offsetHeight * 2
        : letter.offsetHeight;

      animation.style.height = newHeight + "px";

      this.show = true;
    },
    startAnimation() {
      const delay = 0.3;
      const letterDelay = 0.07;

      [].forEach.call(
        this.$refs["root"].querySelectorAll(".letter-switcher__group"),
        (group, index) => {
          const stepDelay = index * delay;
          const duration = letterDelay * group.children.length;

          group.style.animation = `letter-switch ${duration}s ${stepDelay}s ease-out forwards`;
        }
      );

      setTimeout(() => {
        this.end = true;
        this.switchOverline(this.showEndAnimation);
      }, this.endDelay);
    },
    showEndAnimation() {
      const endText = this.$refs["end-text"];
      const end = this.$refs["end"];

      if (!endText || !end) return this.emitEnded();

      endText.style.width = "0px";
      end.classList.remove(State.COLLAPSED);

      this.emitEnded();
    },
    switchOverline(callback) {
      const overline = this.$refs["overline"];

      if (!overline) return;

      overline.addEventListener("transitionend", () => {
        this.overline = this.overlineEnd;
        overline.style.opacity = 1;

        callback();
      });

      overline.style.opacity = 0;
    },
    emitEnded() {
      this.$emit(Events.ENDED);
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
        <div :class="letterSwitchAnimationClassList" ref="animation">
          <div class="letter-switcher__container-animation">
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
            </div>s<template v-if="isLower">-<br/></template>
          </div>
          <div class="letter-switcher__container-animation">
          lüc<div class="letter-switcher__group" ref="group">
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
        </div>
        <div :class="letterSwitchEndClassList">
          <div class="letter-switcher__spacer">
            <div class="letter-switcher__end is-collapsed" ref="end" >{{ textEnd }}</div>
            <div class="letter-switcher__end-text" ref="end-text"></div>
          </div>
        </div>
      </div>
    </div>
  `,
};
