import Tools from '../tools.js';

export default {
  tagName: 'event-overview',
  computed: {
    classList() {
      return ['event-overview vue-component', Tools.isTrue(this.overlap) ? 'event-overview--overlap' : null];
    },
    eventsValue() {
      return Tools.getJSON(this.events);
    },
  },
  methods: {},
  props: {
    events: Array,
    headline: String,
    headlineLevel: String,
    overlap: Boolean,
  },
  template: `
    <wrapper :class="classList">
      <headline class="event-overview__headline" :text="headline" :level="headlineLevel" v-if="headline" />
      <event v-for="event in eventsValue" :key="event.url" v-bind="event" />
      <div class="event-overview__more">more</div>
    </wrapper>
  `,
};
