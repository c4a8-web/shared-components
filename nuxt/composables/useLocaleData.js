import { computed } from 'vue';
import { useI18n } from '#imports';

export default function useLocaleData() {
  const { $getLocale } = useI18n();

  return (messages) => {
    const localeData = computed(() => {
      return messages[$getLocale()] || {};
    });

    return localeData;
  };
}
