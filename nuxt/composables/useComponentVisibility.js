import { computed } from 'vue';
import { useI18n } from '#imports';

export default function useComponentVisibility(hiddenConfig) {
  const { locale } = useI18n();

  const visibleComponents = computed(() => {
    const hiddenComponents = hiddenConfig?.[locale.value] || {};

    return new Proxy(
      {},
      {
        get: (_, key) => !hiddenComponents[key],
      }
    );
  });

  return { visibleComponents };
}
