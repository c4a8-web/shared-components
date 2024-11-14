<template>
  <event-detail
    v-bind="page"
    :headline="page?.title"
    :name="page?.author"
    :form-additional-fields="additionalFields"
    :form-replace-value="page?.eventid"
  />
</template>
<script setup>
definePageMeta({
  footer: {
    noMargin: true,
  },
});

const additionalFields = [
  {
    type: 'hidden',
    id: 'eventid',
    value: '#form-field-replace-value#',
  },
];

const page = ref({});
const eventForm = ref(null);

const route = useRoute();
const cleanPath = route.path.substring(0, route.path.length - 1);

// TODO adjust this so it works with multiple collections not just events
const { data } = await useAsyncData('events', () =>
  queryContent('events')
    .where({
      _path: cleanPath,
    })
    .findOne()
);

if (data.value) {
  page.value = data.value;

  if (data.value.hideForm) {
    eventForm.value = data.value.form;
  }
}
</script>
