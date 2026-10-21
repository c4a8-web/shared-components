import { computed } from 'vue';
import { useI18n } from '#imports';

export function useContactData(contactData) {
  const { $getLocale } = useI18n();

  const data = computed(() => {
    const locale = $getLocale();
    if (!locale || locale === 'de') return contactData.infos;

    const key = `infos${locale.charAt(0).toUpperCase()}${locale.slice(1)}`;

    return contactData[key] ?? contactData.infos;
  });

  return data;
}
