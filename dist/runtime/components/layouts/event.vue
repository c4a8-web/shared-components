<template>
  <NuxtLayout name="default" :footer-data="extendedFooterData"> Add Event Detail and Form Data </NuxtLayout>
</template>

<script setup>
const props = defineProps({
  footerData: Object,
});

const extendedFooterData = {
  ...props.footerData,
  noMargin: true,
};
</script>
