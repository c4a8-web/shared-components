export default {
  tagName: 'faq',
  data() {
    return {
      entriesWithState: [],
    };
  },
  beforeMount() {
    this.entriesWithState = this.entries.map((entry) => {
      entry.isOpen = null;

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
    handleClick(entry, e) {
      e.preventDefault();

      entry.isOpen = !entry.isOpen;
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
            <summary @click="handleClick(entry, $event)" :open="entry.isOpen">
              <div class="faq__summary">{{ entry.summary }}</div>
              <div class="faq__icon-frame">
                <div class="faq__icon">
                  <icon icon="arrow-narrow" direction="clockwise" size="small">
                </div>
              </div>
            </summary>
            <div class="faq__text" v-html="entry.text"></div>
          </details>
        </div>
      </div>
    </div>`,
};
