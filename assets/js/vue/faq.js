export default {
  tagName: 'faq',
  data() {
    return {
      entriesWithState: [],
    };
  },
  beforeMount() {
    this.entriesWithState = this.entries.map((entry, index) => {
      entry.isOpen = null;
      entry.height = null;
      entry.id = `entry-${index}`;

      return entry;
    });
  },
  computed: {
    classList() {
      return ['faq container space-top-1', 'vue-component'];
    },
    headlineClasses() {
      return `faq__headline ${this.headline?.classes ? this.headline.classes : ''}`;
    },
  },
  methods: {
    handleClick(entry) {
      entry.isOpen = entry.isOpen === null ? true : null;
    },
    enter(entry) {
      const ref = this.$refs[entry?.id];

      if (!ref) return;

      const element = ref[0];
      const height = element.offsetHeight;

      element.style.height = 0;
      element.style.paddingTop = 0;
      element.style.paddingBottom = 0;
      element.style.marginTop = 0;
      element.style.marginBottom = 0;

      setTimeout(() => {
        element.style.height = `${height}px`;
        element.style.removeProperty('padding-top');
        element.style.removeProperty('padding-bottom');
        element.style.removeProperty('margin-top');
        element.style.removeProperty('margin-bottom');
      });
    },
  },
  props: {
    headline: Object,
    entries: Array,
  },
  template: `
    <div :class="classList">
      <div class="row">
        <div class="col-lg-8">
          <headline :text="headline?.text" :level="headline?.level" :classes="headlineClasses" />
          <details v-for="entry in entriesWithState" :open="entry.isOpen">
            <summary @click.prevent="handleClick(entry)" :open="entry.isOpen">
              <div class="faq__summary">{{ entry.summary }}</div>
              <div class="faq__icon-frame">
                <div class="faq__icon">
                  <icon icon="arrow-narrow" direction="clockwise" size="small">
                </div>
              </div>
            </summary>
            <Transition @enter="enter(entry)">
              <div class="faq__content" v-if="entry.isOpen" :ref="entry.id">
                <div class="faq__text" v-html="entry.text" ></div>
              </div>
            </Transition>
          </details>
        </div>
      </div>
    </div>`,
};
