<template>404</template>
<script setup>
import { useRoute, createError } from '#imports';
/*
<NuxtLayout :name="layout" :page="data" :footer-data="mergedFooterData"></NuxtLayout>*/
// definePageMeta({
//   layout: 'event',
// });

// TODO almost always send to 404

console.debug('slug module 404');

// const props = defineProps({
//   headerData: Object,
//   footerData: Object,
// });

// const defaultLayout = 'default';

// const mergedFooterData = ref({ ...props.footerData });
// const layout = ref(defaultLayout);
const route = useRoute();
const cleanPath = route.path.substring(0, route.path.length - 1);

// // TODO adjust this so it works with multiple collections not just events
// const { data } = await useAsyncData('events', () =>
//   queryContent('events')
//     .where({
//       _path: cleanPath,
//     })
//     .findOne()
// );

// if (data?.value && data.value?.layout) {
//   layout.value = data.value.layout;

//   // Rules for Layouts

//   switch (layout.value) {
//     case 'event':
//       const footerData = {
//         noMargin: true,
//       };

//       mergedFooterData.value = { ...props.footerData, ...footerData };
//       break;
//   }

//   console.log('🚀 ~ mergedFooterData:', mergedFooterData);
// }

// if (layout.value === defaultLayout) {
throw createError({
  statusCode: 404,
  statusMessage: `Page: ${cleanPath} not found`,
});
// }
</script>
