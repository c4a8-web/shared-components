<template>
  <wrapper :class="classList" ref="root">
    <headline class="event-overview__headline" :text="headline" :level="headlineLevel" v-if="headline" />
    <transition-group name="event-overview__item">
      <SharedContentList :data-list="eventsValue" :query="query" v-slot="{ list }">
        <markdown-files :list="list" v-slot="{ files }" :sort="sort" :limit="maxLimitValue">
          <template v-for="(event, index) in files" :key="index" v-if="updateFiles(files)">
            <div :class="{ 'is-visible': isVisible(index), 'event-overview__item': true }">
              <div
                class="fade-in-bottom"
                data-utility-animation-step="1"
                :style="{ '--utility-animation-index': index + 1 }"
              >
                <event :key="event.url" v-bind="event" />
              </div>
            </div>
          </template>
        </markdown-files>
      </SharedContentList>
    </transition-group>

    <div
      class="event-overview__more font-size-1 bold fade-in-bottom"
      v-show="hasMore"
      @click="handleShowMore"
      data-utility-animation-step="1"
      :style="{ '--utility-animation-index': lastIndex }"
    >
      {{ $t('moreEvents') }}
    </div>
  </wrapper>
</template>
<script>
import Tools from '../utils/tools.js';
import UtilityAnimation from '../utils/utility-animation.js';

export default {
  tagName: 'event-overview',
  data() {
    return {
      translationData: null,
      defaultLimit: 3,
      maxLimitDefault: 6,
      showMore: false,
      files: [],
    };
  },
  computed: {
    classList() {
      return [
        'event-overview has-no-row is-component utility-animation vue-component',
        Tools.isTrue(this.overlap) ? 'event-overview--overlap' : null,
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
      if (!this.events) return [];

      return this.events.slice(0, this.maxLimitValue) || [];
    },
    hasMore() {
      return this.showMore ? false : this.files.length > this.limitValue;
    },
    query() {
      let query = {};

      if (this.order && Array.isArray(this.order)) {
        query.where = {
          eventid: { $in: this.order },
        };
      }

      query.path = '/events';

      return query;
    },
    sort() {
      return { moment: 1 };
    },
  },
  mounted() {
    UtilityAnimation.init([this.$refs.root]);
  },
  methods: {
    isVisible(index) {
      return this.showMore || index + 1 <= this.limitValue;
    },
    handleShowMore() {
      if (this.moreUrl) document.location.href = this.moreUrl;

      this.showMore = true;
    },
    updateFiles(files) {
      this.files = files;

      return true;
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
    order: Array,
  },
};
</script>
