import { computed } from 'vue';
import { useI18n } from '#imports';

export default function useLocaleData() {
  const { locale } = useI18n();

  return (messages) => {
    const localeData = computed(() => {
      return messages[locale.value] || {};
    });

    return localeData;
  };
}
