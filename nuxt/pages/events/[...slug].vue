<template>
  <tracking />
  <content>
    <event-detail v-bind="eventNormalized" />
  </content>
</template>
<script setup>
import {
  useRoute,
  useAsyncData,
  queryCollection,
  useNuxtApp,
  useRequestURL,
  useRuntimeConfig,
  navigateTo,
  useDynamicPageMeta,
  useSeo,
  useSchemaOrg,
  defineEvent,
} from '#imports';
import { computed } from 'vue';

import Tools from '../../utils/tools.js';
import EventForm from '../../utils/data/event-form.js';
import { parseEventTime, resolveEventEndDate, personSlug, decodeEntities } from '../../utils/event-schema.js';

const route = useRoute();
const nuxtApp = useNuxtApp();
const currentLocale = nuxtApp.$getLocale();

const dynamicMeta = useDynamicPageMeta();

const path = route.path.replace(/^\/[a-z]{2}\//, '/');
const dataKey = Tools.getDataKey('event', null, currentLocale, path);

const { data: event } = await useAsyncData(dataKey, () => {
  const collectionName = 'content_' + currentLocale;
  const query = queryCollection(collectionName).path(path);

  return query.first();
});

const { sharedComponents } = useRuntimeConfig().public;
const isDetailPage = computed(() => event.value?.detailPage ?? event.value?.meta?.detailPage ?? false);

if (sharedComponents?.requireEventDetailPage && event.value && !isDetailPage.value) {
  await navigateTo(nuxtApp.$localePath('/'), { redirectCode: 301, replace: true });
}

const nextRoute = EventForm.action;
const actionRoute = '/send';

const getFormular = (event) => {
  const additionalFields = [
    {
      type: 'hidden',
      id: '_next',
      value: nextRoute,
    },
    {
      type: 'hidden',
      id: 'eventid',
      value: '#form-field-replace-value#',
    },
  ];

  const replaceValue = event?.eventid || 'no-event-id';

  return event?.form
    ? { form: { ...event.form, fields: [...event.form.fields, ...additionalFields] }, replaceValue }
    : {
        form: {
          ...EventForm,
          action: actionRoute,
          fields: [...EventForm.fields, ...additionalFields],
        },
        replaceValue,
        useTranslation: true,
      };
};

const eventNormalized = computed(() => {
  if (!event.value) return null;

  const normalizedEvent = Tools.normalizeMarkdownItem(event.value);

  const form = normalizedEvent?.hideForm ? null : getFormular(normalizedEvent);
  return {
    ...normalizedEvent,
    form,
    body: {
      ...normalizedEvent.body,
      value: Tools.applyKramdownAttrs(normalizedEvent.body.value),
    },
  };
});

dynamicMeta.value = {
  footer: event.value?.meta?.footer ?? { noMargin: true },
};

if (event.value && eventNormalized.value) {
  const baseSocialImg = eventNormalized.value.socialimg;
  const socialImg = baseSocialImg?.startsWith('/') ? baseSocialImg.slice(1) : baseSocialImg;
  const socialImgUrl = socialImg ? `https://res.cloudinary.com/c4a8/image/upload/${socialImg}` : null;

  useSeo({
    title: eventNormalized.value.title,
    description: eventNormalized.value.customExcerpt ?? null,
    keywords: eventNormalized.value.keywords ?? null,
    image: socialImgUrl,
  });

  const { time, youtubeUrl, organizer } = eventNormalized.value;
  const startDate = eventNormalized.value.date;
  const endDate = resolveEventEndDate(time, startDate);
  const { online, place } = parseEventTime(time);
  const isOnline = online || (event.value.webcast === true && !!youtubeUrl && !place);

  const location = isOnline
    ? { '@type': 'VirtualLocation', url: youtubeUrl || `${useRequestURL().origin}${route.path}` }
    : place
      ? { '@type': 'Place', name: place, address: { '@type': 'PostalAddress', addressLocality: place } }
      : null;

  const performer = (eventNormalized.value.author || []).filter(Boolean).map((name) => {
    const slug = personSlug(name);

    return {
      '@type': 'Person',
      ...(slug ? { '@id': `#/schema/person/${slug}` } : {}),
      name,
    };
  });

  if (startDate) {
    useSchemaOrg([
      defineEvent({
        name: decodeEntities(eventNormalized.value.title || eventNormalized.value.headlineText),
        ...(eventNormalized.value.customExcerpt ? { description: eventNormalized.value.customExcerpt } : {}),
        ...(socialImgUrl ? { image: { '@type': 'ImageObject', '@id': socialImgUrl, url: socialImgUrl } } : {}),
        startDate,
        ...(endDate ? { endDate } : {}),
        eventStatus: 'EventScheduled',
        eventAttendanceMode: isOnline ? 'OnlineEventAttendanceMode' : 'OfflineEventAttendanceMode',
        ...(location ? { location } : {}),
        ...(performer.length ? { performer } : {}),
        ...(organizer ? { organizer: { '@type': 'Organization', name: organizer } } : {}),
      }),
    ]);
  }
}
</script>
