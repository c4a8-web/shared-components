import Tools from '../tools.js';
import State from '../state.js';

export default {
  tagName: 'modal',
  computed: {
    classList() {
      return ['modal fade', 'vue-component'];
    },
    dialogClassList() {
      return ['modal-dialog', `${this.slimMode ? 'modal-lg' : 'modal-xl'}`];
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
    slimMode() {
      return Tools.isTrue(this.slim);
    },
  },
  mounted() {
    this.bindEvents();
  },
  unmounted() {
    this.observer.disconnect();
  },
  methods: {
    isModalOpen() {
      return document.body.classList.contains('modal-open') ? true : false;
    },
    setModalMode(mode) {
      const html = document.querySelector('html');

      if (mode) {
        html.classList.add(State.MODAL_OPEN);
      } else {
        html.classList.remove(State.MODAL_OPEN);
      }
    },
    bindEvents() {
      this.observer = new MutationObserver(this.handleMutation);

      this.observer.observe(document.body, { attributes: true });
    },
    handleMutation() {
      this.setModalMode(this.isModalOpen());
    },
  },
  data() {
    return {
      observer: null,
    };
  },
  props: {
    clientName: String,
    apiUrl: String,
    jobId: String,
    slim: {
      default: null,
    },
  },
  template: `
    <div :class="classList" tabindex="-1" aria-hidden="true" style="--color-icon-hover-color: var(--color-white)" ref="modal"
          v-bind="settings" >
      <div :class="dialogClassList">
        <div class="modal__content">
          <div class="modal__header">
            <div class="modal__close" v-if="!slim">
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
