import Tools from '../tools.js';

export default {
  tagName: 'event-overview',
  computed: {
    eventsValue() {
      return Tools.getJSON(this.events);
    },
  },
  methods: {},
  props: {
    events: Array,
  },
  template: `
    <div class="event-overview vue-component">
      <event v-for="event in eventsValue" :key="event.url" v-bind="event" />
    </div>
  `,
};
