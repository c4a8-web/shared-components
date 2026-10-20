import { computed } from 'vue';
import { useI18n } from '#imports';

export default function useComponentVisibility(hiddenConfig) {
  const { $getLocale } = useI18n();

  const visibleComponents = computed(() => {
    const hiddenComponents = hiddenConfig?.[$getLocale()] || {};

    return new Proxy(
      {},
      {
        get: (_, key) => !hiddenComponents[key],
      }
    );
  });

  return { visibleComponents };
}
