import State from "../assets/js/state.js";

export default {
  tagName: "faq",
  data() {
    return {
      entriesWithState: [],
    };
  },
  beforeMount() {
    this.entriesWithState = this.entries?.map((entry, index) => {
      entry.isOpen = null;
      entry.isDetailsOpen = null;
      entry.height = null;
      entry.index = index;
      entry.id = `entry-${index}`;

      return entry;
    });
  },
  computed: {
    style() {
      return this.index ? `--utility-animation-index: ${this.index}` : null;
    },
    classList() {
      return [
        "faq",
        "utility-animation",
        "container space-top-2",
        "vue-component",
      ];
    },
    headlineClasses() {
      return `faq__headline fade-in-bottom ${this.headline?.classes ? this.headline.classes : ""}`;
    },
    headlineLevel() {
      return this.headline?.level ? this.headline.level : "h2";
    },
  },
  methods: {
    getDelay(entry) {
      const miliseconds = entry.index > 0 ? 200 : 0;
      const delay = `${entry.index * miliseconds}ms`;

      return `--utility-animation-delay: ${delay};`;
    },
    handleClick(entry) {
      entry.isOpen = entry.isOpen === null ? true : null;

      if (entry.isOpen) entry.isDetailsOpen = true;
    },
    getElementByRef(entry) {
      const ref = this.$refs[entry?.id];

      if (!ref || ref.length === 0) return;

      return ref[0];
    },
    afterLeave(entry) {
      const element = this.getElementByRef(entry);

      if (!element) return;

      entry.isDetailsOpen = null;

      element.style.removeProperty("display");
      element.style.removeProperty("height");
      element.classList.remove(State.IS_COLLAPSING);
    },
    enter(entry) {
      const element = this.getElementByRef(entry);

      if (!element) return;

      const height = element.offsetHeight;

      element.style.removeProperty("height");
      element.style.height = 0;
      element.style.paddingTop = 0;
      element.style.paddingBottom = 0;
      element.style.marginTop = 0;
      element.style.marginBottom = 0;

      setTimeout(() => {
        element.style.height = `${height}px`;
        element.style.removeProperty("padding-top");
        element.style.removeProperty("padding-bottom");
        element.style.removeProperty("margin-top");
        element.style.removeProperty("margin-bottom");
      });
    },
    leave(entry) {
      const element = this.getElementByRef(entry);

      if (!element) return;

      const height = element.offsetHeight;

      element.classList.add(State.IS_COLLAPSING);

      setTimeout(() => {
        element.style.height = `${height}px`;
      });
    },
  },
  props: {
    headline: Object,
    entries: Array,
    index: Number,
  },
  template: `
    <div :class="classList" :style="style">
      <div class="row">
        <div class="col-lg-8">
          <headline :text="headline?.text" :level="headlineLevel" :classes="headlineClasses" data-utility-animation-step="1" />
          <details v-for="entry in entriesWithState" :open="entry.isDetailsOpen" class="fade-in-bottom" data-utility-animation-step="1" :style="getDelay(entry)">
            <summary @click.prevent="handleClick(entry)" :open="entry.isDetailsOpen">
              <div class="faq__summary">{{ entry.summary }}</div>
              <div class="faq__icon-frame">
                <div class="faq__icon">
                  <icon icon="arrow-narrow" direction="clockwise" size="small" />
                </div>
              </div>
            </summary>
            <Transition @after-leave="afterLeave(entry)" @enter="enter(entry)" @before-leave="leave(entry)">
              <div class="faq__content" v-show="entry.isOpen" :ref="entry.id">
                <div class="faq__text" v-html="entry.text" ></div>
              </div>
            </Transition>
          </details>
        </div>
      </div>
    </div>`,
};
