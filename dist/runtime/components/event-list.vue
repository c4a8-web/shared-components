<template>
  <div
    class="event-list container"
    :class="{
      'event-list--overlap': overlap,
      'is-sticky-scroller': sticky,
    }"
  >
    <div class="event-list__row row col-lg-12">
      <template v-for="(teaserProps, i) in mergedTeasers" :key="i">
        <event-teaser v-bind="teaserProps" />
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EventList',
  props: {
    list: {
      type: Array,
      required: true,
    },
    overlap: {
      type: Boolean,
      default: false,
    },
    settings: {
      type: Array,
      default: () => [],
    },
    sticky: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    mergedTeasers() {
      let pointer = 0;

      const result = [];

      this.list?.forEach((event, i) => {
        const forloopIndex = i + 1;

        let currentSetting = this.settings[pointer] || {};
        let variant = event.variant || currentSetting.variant;

        if (currentSetting.teaser) {
          const extraTeaserProps = this.getTeaserProps(currentSetting.teaser, {}, variant, forloopIndex);

          result.push(extraTeaserProps);

          pointer++;

          currentSetting = this.settings[pointer] || {};
          variant = event.variant || currentSetting.variant;
        }

        const eventTeaserProps = this.getTeaserProps(event, event, variant, forloopIndex);

        result.push(eventTeaserProps);

        pointer++;
      });

      return result;
    },
  },
  methods: {
    getTeaserProps(teaserData, event, variant, forloopIndex) {
      let merged = {
        ...event,
        ...teaserData,
      };

      merged.variant = variant || event.variant;
      merged.index = forloopIndex;

      return merged;
    },
  },
};
</script>
