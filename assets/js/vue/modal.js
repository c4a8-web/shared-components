export default {
  tagName: 'modal',
  computed: {
    classList() {
      return [
        'modal fade',
        // `icon--${this.direction}`,
        // `icon--${this.icon}`,
        // `${this.animation ? 'js-text-animation__icon' : ''}`,
        // `${this.circle ? 'icon--circle' : ''}`,
        // `${this.hover ? 'icon--hover' : ''}`,
        'vue-component',
      ];
    },
    // settings() {
    //   // {% if modalClientName %}data-client-name="{{ modalClientName }}" {% endif %}
    //   // {% if modalApiUrl %}data-api-url="{{ modalApiUrl }}" {% endif %}
    //   // {% if modalJobId %}data-job-id="{{ modalJobId }}" {% endif %}

    //   return {
    //     'data-client-name': this.clientName ? this.clientName : null,
    //     'data-api-url': this.apiUrl ? this.apiUrl : null,
    //     'data-job-id': this.jobId ? this.jobId : null,
    //   };
    // },
  },
  props: {
    form: Object,
    success: Object,
    application: {
      default: false,
    },
    clientName: String,
    apiUrl: String,
    jobId: String,
  },
  template: `
    <div :class="classList" tabindex="-1" aria-hidden="true" style="--color-icon-hover-color: var(--color-white)"
          :data-client-name="clientName ? clientName : null">
      <div class="modal-dialog modal-xl">
        <div class="modal__content">
          <div class="modal__header">
            <div class="modal__close">
              <icon icon="close" :hover="true" :circle="true" />
            </div>
          </div>
          <div class="modal__body">
          modal modal
            {% if modalApplication %}
              {%
                include modal-application.html
                form=modalForm
                success=modalSuccess
              %}
            {% endif %}
          </div>
        </div>
      </div>
    </div>`,
};
