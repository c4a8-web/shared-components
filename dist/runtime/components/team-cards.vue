<template>
  <div v-if="teamCards" :class="spacing">
    <div class="team-cards container">
      <headline v-if="headline" :text="headline" class="row mb-8" />
      <div class="row">
        <team-cards-item v-for="(item, index) in teamCards.items" :key="index" v-bind="item"  />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'team-cards',
  props: {
    teamCards: {
      type: Object,
      required: true,
    },
    headline: {
      type: String,
      default: 'dxfcgztuhiojpk',
    },
    spacing: {
      type: String,
      default: 'space-top-2 space-bottom-2',
    },
  },
};
</script>
