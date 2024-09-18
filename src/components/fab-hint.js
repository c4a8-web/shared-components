import State from "../assets/js/state.js";

export default {
  tagName: "fab-hint",
  data() {
    return {
      expaned: false,
      translationData: {},
    };
  },
  computed: {
    classList() {
      return ["fab-hint vue-component", this.expaned ? State.EXPANDED : ""];
    },
    options() {
      return `{
        "parentSelector": ".fab-hint",
        "breakpoint": "xs",
        "startPoint": ".fab-hint__start",
        "endPoint": "9999999",
        "stickyOffsetTop": "0",
        "stickyOffsetBottom": 20
      }`;
    },
    containerStyle() {
      return {
        ...(this.bgColor ? { "--fab-hint-bg-color": this.bgColor } : {}),
        ...(this.iconColor ? { "--fab-hint-icon-color": this.iconColor } : {}),
      };
    },
    iconValue() {
      return this.icon || "image-credits";
    },
    titleValue() {
      return this.title || this.translationData?.imageCredits;
    },
    enhancedText() {
      if (!this.text) return "";

      const parser = new DOMParser();
      const doc = parser.parseFromString(this.text, "text/html");

      doc
        .querySelectorAll("a")
        .forEach((a) => a.classList.add("is-basic-link"));

      return doc.body.innerHTML;
    },
  },
  beforeMount() {
    const hasLanguageLoader = window.i18n?.loader;

    if (hasLanguageLoader) {
      hasLanguageLoader.then(() => {
        this.translationData = window.i18n?.getTranslationData([
          "imageCredits",
        ]);
      });
    }
  },
  mounted() {
    this.addObserver();
  },
  methods: {
    addObserver() {
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.attributeName === "style") {
            if (!this.isVisible(mutation?.target?.style?.cssText)) {
              this.handleClose();
            }
          }
        });
      });

      observer.observe(this.$el, {
        attributes: true,
        attributeFilter: ["style"],
      });
    },
    isVisible(style) {
      return style !== "" ? true : false;
    },
    handleClick() {
      this.expaned = !this.expaned;
    },
    handleClose() {
      this.expaned = false;
    },
  },
  props: {
    icon: String,
    iconColor: String,
    bgColor: String,
    text: String,
    title: String,
  },
  template: `
    <div :class="classList">
      <div class="fab-hint__container" :style="containerStyle">
        <div class="fab-hint__start"></div>
        <div class="fab-hint__wrapper js-sticky-block" :data-hs-sticky-block-options="options">
          <div class="fab-hint__icon" @click="handleClick">
            <icon :icon="iconValue" size="large" />
          </div>
        </div>
        <div class="fab-hint__content">
          <div class="fab-hint__title highlight-underline">{{ titleValue }}:</div>
          <icon class="fab-hint__close" icon="close" size="medium" :hover="true" :circle="true" @click="handleClose" />
          <div class="fab-hint__text" v-html="enhancedText"></div>
        </div>
        <div class="fab-hint__end"></div>
      </div>
    </div>
  `,
};
