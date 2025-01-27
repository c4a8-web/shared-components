import { useHead, useRuntimeConfig } from '#imports';

export default function useFreshdesk({ open, show } = {}) {
  const runtimeConfig = useRuntimeConfig();
  const widgetId = runtimeConfig.public.freshdesk.widgetId;

  if (!widgetId) return;

  if (typeof window !== 'undefined') {
    window.fwSettings = {
      widget_id: widgetId,
    };

    if (typeof window.FreshworksWidget !== 'function') {
      const n = function () {
        n.q.push(arguments);
      };
      n.q = [];
      window.FreshworksWidget = n;
    }

    useHead({
      script: [
        {
          type: 'text/javascript',
          src: `https://euc-widget.freshworks.com/widgets/${widgetId}.js`,
          async: true,
          defer: true,
        },
      ],
    });

    if (show) {
      window.FreshworksWidget('show');
    } else {
      window.FreshworksWidget('hide', 'launcher');
    }

    if (open) {
      window.FreshworksWidget('open');
    }
  }
}
