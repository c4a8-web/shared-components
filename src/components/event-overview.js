import Tools from "../assets/js/tools.js";

export default {
  tagName: "event-overview",
  data() {
    return {
      translationData: null,
      defaultLimit: 3,
      maxLimitDefault: 6,
      showMore: false,
    };
  },
  computed: {
    classList() {
      return [
        "event-overview has-no-row is-component utility-animation vue-component",
        Tools.isTrue(this.overlap) ? "event-overview--overlap" : null,
      ];
    },
    lastIndex() {
      const radix = 10;

      return parseInt(this.limitValue, radix) + 1;
    },
    limitValue() {
      return this.limit ? this.limit : this.defaultLimit;
    },
    maxLimitValue() {
      return this.maxLimit > 0 ? this.maxLimit : this.maxLimitDefault;
    },
    eventsValue() {
      const events = Tools.getJSON(this.events);

      return events.slice(0, this.maxLimitValue) || [];
    },
    hasMore() {
      return this.showMore
        ? false
        : this.translationData?.moreEvents &&
            this.eventsValue.length > this.limitValue;
    },
  },
  beforeMount() {
    const hasLanguageLoader = window.i18n?.loader;

    if (hasLanguageLoader) {
      hasLanguageLoader.then(() => {
        this.translationData = window.i18n?.getTranslationData(["moreEvents"]);
      });
    }
  },
  methods: {
    isVisible(index) {
      return this.showMore || index + 1 <= this.limitValue;
    },
    handleShowMore() {
      if (this.moreUrl) document.location.href = this.moreUrl;

      this.showMore = true;
    },
  },
  props: {
    events: Array,
    headline: String,
    headlineLevel: String,
    overlap: Boolean,
    limit: Number,
    maxLimit: Number,
    url: String,
    moreUrl: String,
  },
  template: `
    <wrapper :class="classList">
      <headline class="event-overview__headline" :text="headline" :level="headlineLevel" v-if="headline" />
        <transition-group name="event-overview__item">
          <template v-for="(event, index) in eventsValue">
            <div :class="{'is-visible': isVisible(index), 'event-overview__item': true}">
              <div class="fade-in-bottom" data-utility-animation-step="1" :style="{'--utility-animation-index': index + 1}">
                <event :key="event.url" v-bind="event" />
              </div>
            </div>
          </template>
        </transition-group>

      <div class="event-overview__more font-size-1 bold fade-in-bottom" v-show="hasMore" @click="handleShowMore" data-utility-animation-step="1" :style="{'--utility-animation-index': lastIndex}">{{ translationData?.moreEvents }}</div>
    </wrapper>
  `,
};
