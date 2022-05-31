export default {
  tagName: 'modal',
  computed: {
    classList() {
      return ['modal fade', 'vue-component'];
    },
    settings() {
      return {
        'data-client-name': this.clientName ? this.clientName : null,
        'data-api-url': this.apiUrl ? this.apiUrl : null,
        'data-job-id': this.jobId ? this.jobId : null,
      };
    },
    modal() {
      return this.$refs.modal;
    },
  },
  props: {
    clientName: String,
    apiUrl: String,
    jobId: String,
  },
  template: `
    <div :class="classList" tabindex="-1" aria-hidden="true" style="--color-icon-hover-color: var(--color-white)" ref="modal"
          v-bind="settings" >
      <div class="modal-dialog modal-xl">
        <div class="modal__content">
          <div class="modal__header">
            <div class="modal__close">
              <icon icon="close" :hover="true" :circle="true" />
            </div>
          </div>
          <div class="modal__body">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>`,
};
