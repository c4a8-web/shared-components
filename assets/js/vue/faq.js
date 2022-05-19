export default {
  tagName: 'faq',
  computed: {
    classList() {
      return ['faq container space-top-1', 'vue-component'];
    },
    headlineClasses() {
      return `faq__headline ${this.headline?.classes ? this.headline.class : ''}`;
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
          <details v-for="entry in entries">
            <summary>{{ entry.summary }}</summary>
            <div class="faq__text" v-html="entry.text"></div>
          </details>
        </div>
      </div>
    </div>`,
};
