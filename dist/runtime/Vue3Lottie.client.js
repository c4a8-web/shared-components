import { Vue3Lottie } from "vue3-lottie";
export default defineNuxtPlugin((_nuxtApp) => {
  _nuxtApp.vueApp.component("Vue3Lottie", Vue3Lottie);
});
