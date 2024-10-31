<template>
  <!-- <NuxtLayout :name="layout"> -->
  Shared slug route {{ route }}

  <ContentDoc />
  <!-- </NuxtLayout> -->
</template>
<script setup>
// const layout = ref("default");
const route = useRoute();
const cleanPath = route.path.substring(0, route.path.length - 1);

// const { data } = await useAsyncData("events", () =>
//   queryContent("events")
//     .where({
//       _path: cleanPath,
//     })
//     .findOne()
// );

// TODO figure out a way to dynamically set the layout based on the data
definePageMeta({
  layout: 'event',
});
// definePageMeta({
//   layout: data.value && data.value.layout ? data.layout.value : "default",
// });
// setPageLayout(layout.value);
</script>
