<template>
  <div class="cal-calendar">
    <modal :show="show" class="cal-calendar__modal" :modal-id="modalId">
      <div class="container">
        <div class="row">
          <div class="col">
            <div style="width: 100%; height: 80vh; overflow: scroll" :id="calendarElementId"></div>
          </div>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
export default {
  tagName: 'cal-calendar',
  props: {
    calendarId: {
      type: String,
      default: 'it-sa-termin',
    },
    calLink: {
      type: String,
      default: 'glueckkanja',
    },
    lightBrandColor: {
      type: String,
      default: '#292929',
    },
    darkBrandColor: {
      type: String,
      default: '#fafafa',
    },
    show: {
      type: Boolean,
    },
    layout: {
      type: String,
      default: 'column_view',
    },
  },
  computed: {
    calendarElementId() {
      return `my-cal-inline-${this.calendarId}`;
    },
    modalId() {
      return `modal-${this.calendarId}`;
    },
  },
  mounted() {
    this.initCal();
    this.initCalendar();
  },
  methods: {
    hasCal() {
      return typeof window !== 'undefined' && window.Cal;
    },
    initCalendar() {
      if (!this.hasCal()) return;

      window.Cal('init', this.calendarId, { origin: 'https://app.cal.com' });

      this.renderCalendar();

      window.Cal.ns[this.calendarId]('ui', {
        cssVarsPerTheme: {
          light: { 'cal-brand': this.lightBrandColor },
          dark: { 'cal-brand': this.darkBrandColor },
        },
        hideEventTypeDetails: false,
        layout: this.layout,
      });
    },
    renderCalendar() {
      if (!this.hasCal()) return;

      const element = document.getElementById(this.calendarElementId);

      if (element) element.innerHTML = '';

      window.Cal.ns[this.calendarId]('inline', {
        elementOrSelector: `#${this.calendarElementId}`,
        config: { layout: this.layout, theme: 'auto' },
        calLink: this.calLink,
      });
    },
    initCal() {
      if (!this.hasCal()) {
        (function (C, A, L) {
          let p = function (a, ar) {
            a.q.push(ar);
          };
          let d = C.document;
          C.Cal =
            C.Cal ||
            function () {
              let cal = C.Cal;
              let ar = arguments;
              if (!cal.loaded) {
                cal.ns = {};
                cal.q = cal.q || [];
                d.head.appendChild(d.createElement('script')).src = A;
                cal.loaded = true;
              }
              if (ar[0] === L) {
                const api = function () {
                  p(api, arguments);
                };
                const namespace = ar[1];
                api.q = api.q || [];
                if (typeof namespace === 'string') {
                  cal.ns[namespace] = cal.ns[namespace] || api;
                  p(cal.ns[namespace], ar);
                  p(cal, ['initNamespace', namespace]);
                } else p(cal, ar);
                return;
              }
              p(cal, ar);
            };
        })(window, 'https://app.cal.com/embed/embed.js', 'init');
      }
    },
  },
};
</script>
<style lang="scss">
.cal-calendar {
  .cal-embed {
    // not possible to overwrite the inline styles
    height: 80vh !important;
  }
}
</style>
