<template>
  <page-default v-bind="$attrs">
    <slot />
  </page-default>
</template>

<script setup>
// TODO make sure that if the page has an hideForm prop, that there is no default form passed down to the event-detail component

// TODO the layout is put into the cache. figure out why it does not have access to files in the nuxt module
// import LayoutsData from '../../utils/data/layouts.js';

// definePageMeta({
//   // ...LayoutsData.event,
//   footer: {
//     noMargin: true,
//   },
// });

// console.log('i am here in the events layout of the module');

/* <ContentDoc /> */
// definePageMeta({
//   layout: 'event',
//   footer: {
//     noMargin: true,
//   },
// });

// :header-data="headerData" :footer-data="footerData"

// const props = defineProps({
//   page: Object,
//   headerData: Object,
//   footerData: Object,
// });

// const exposedData = {
//   // eventTitle: props.page?.title || 'Default Event Title',
//   // eventDate: props.page?.date || 'TBD',
//   // eventLocation: props.page?.location || 'Online',
//   footer: {
//     noMargin: true,
//   },
// };

// defineExpose({
//   exposedData,
// });

// const extendedFooterData = {
//   ...props.footerData,
//   noMargin: true,
// };
</script>
