<template>
  <div
    class="event-list container"
    :class="{
      'event-list--overlap': overlap,
      'is-sticky-scroller': sticky,
    }"
  >
    <div class="event-list__row row col-lg-12">
      <template v-for="(event, index) in list" :key="index">
        <template v-if="settings[index]?.teaser">
          <event-teaser v-bind="getTeaserProps(settings[index].teaser, event, settings[index]?.variant, index)" />
        </template>
        <event-teaser v-bind="getTeaserProps(event, event, settings[index]?.variant, index)" />
      </template>
    </div>
  </div>
</template>

<script>
export default {
  tagName: 'event-list',
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
  methods: {
    getTeaserProps(teaserData, event, variant, index) {
      return {
        headline: teaserData.headline || event.headline,
        content: teaserData.content || event.content,
        moment: teaserData.moment || event.moment,
        time: teaserData.time || event.time,
        shapes: teaserData.shapes || event.shapes,
        author: teaserData.author || event.author,
        image: teaserData.image || event.image,
        badge: teaserData.badge || event.badge,
        price: teaserData.price || event.price,
        cta: teaserData.cta || event.cta,
        variant: variant || event.variant,
        webcast: teaserData.webcast || event.webcast,
        teaser: teaserData.teaser || event.teaser,
        url: teaserData.url || event.url,
        textShadow: teaserData.textShadow || event.textShadow,
        bgColorRgb: teaserData.bgColorRgb || event.bgColorRgb,
        index: index + 1,
      };
    },
  },
};
</script>
