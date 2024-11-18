<template>
  <page-default :layout-header-data="mergedHeaderData" :layout-footer-data="null">
    <div class="d-lg-flex">
      <div
        class="js-video-bg position-absolute w-100 h-100"
        style="z-index: -1; background-image: url(/assets/video/meerkat-404.jpg)"
        data-hs-video-bg-options='{
        "videoId": "/assets/video/meerkat-404"
      }'
      ></div>

      <div class="container d-lg-flex align-items-lg-center min-vh-lg-100 space-4">
        <div class="w-lg-60 w-xl-50">
          <!-- Title -->
          <div class="mb-4">
            <p class="lead text-white">
              Oops! Looks like you followed a bad link. <br />
              If you think this is a problem with us, please
              <a href="#">tell us.</a>
            </p>
          </div>
          <!-- End Title -->

          <cta text="Back Home" href="/" />
        </div>
      </div></div
  ></page-default>
</template>
<script setup>
const props = defineProps({
  error: Object,
});

import HeaderData from '~/content/header.json';

// TODO ask about the tell us link

const mergedHeaderData = computed(() => {
  return { ...HeaderData, ...{ light: true } };
});

// TODO only log error in dev environment
// console.error('Shared Error: ', props.error);

const event = useRequestEvent();

if (event) {
  setResponseStatus(event, 404);
}
</script>
