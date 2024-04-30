import Modal from '../modal.js';
import Events from '../events.js';
import Tools from '../tools.js';
import State from '../state.js';
import Form from '../components/form.js';

export default {
  tagName: 'modal',
  computed: {
    modalErrorValue() {
      return Tools.getJSON(this.modalError);
    },
    classList() {
      return [
        'modal fade',
        this.slimValue ? 'modal--slim' : '',
        this.notificationValue ? 'modal--notification' : '',
        this.isCenterSlim ? 'modal--center-slim' : '',
        'vue-component',
      ];
    },
    dialogClassList() {
      return [
        'modal-dialog',
        `${this.slimValue ? 'modal-lg' : 'modal-xl'}`,
        `${this.centerValue ? 'modal-dialog-centered' : ''}`,
      ];
    },
    settings() {
      return {
        'data-client-name': this.clientName ? this.clientName : null,
        'data-api-url': this.apiUrl ? this.apiUrl : null,
        'data-job-id': this.jobId ? this.jobId : null,
        'data-modal-id': this.modalId ? this.modalId : null,
        'data-api-key': this.apiKey ? this.apiKey : null,
        'data-mock-apply-url': this.mockApplyUrl ? this.mockApplyUrl : null,
        'data-mock-documents-url': this.mockDocumentsUrl ? this.mockDocumentsUrl : null,
      };
    },
    isCenterSlim() {
      return this.slimValue && this.centerValue;
    },
    modal() {
      return this.$refs.modal;
    },
    centerValue() {
      return Tools.isTrue(this.center);
    },
    slimValue() {
      return Tools.isTrue(this.slim);
    },
    loadingValue() {
      return this.loading ? true : null;
    },
    notificationValue() {
      return Tools.isTrue(this.notification);
    },
    size() {
      return this.slimValue || this.notificationValue ? 'small' : null;
    },
    hasCircleAndHover() {
      return this.isCenterSlim || this.notificationValue ? false : true;
    },
    circle() {
      return this.hasCircleAndHover;
    },
    hover() {
      return this.hasCircleAndHover;
    },
    bodyClasses() {
      return ['modal__body', this.loading ? State.LOADING : null];
    },
  },
  mounted() {
    this.bindEvents();

    if (this.show !== true) return;

    this.openModal();
  },
  unmounted() {
    this.observer.disconnect();

    document.removeEventListener(Events.LOAD_MODAL, this.handleLoading);
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

        this.handleClose();
      }
    },
    handleClose() {
      const modal = this.$refs['modal'];
      const form = modal.querySelector(Form.rootSelector);

      if (!form) return;

      const formInstance = Form.getInstance(form);

      if (formInstance) return;

      Form.reset(formInstance.form);
    },
    bindEvents() {
      this.observer = new MutationObserver(this.handleMutation);

      const observerStartingDelay = 200;

      setTimeout(() => {
        this.observer.observe(document.body, { attributes: true });
      }, observerStartingDelay);

      document.addEventListener(Events.LOAD_MODAL, this.handleLoading);
    },
    handleMutation() {
      this.setModalMode(this.isModalOpen());
    },
    handleLoading(e) {
      const loading = e?.detail;

      this.loading = loading;
    },
    openModal() {
      const openDelay = 70;

      setTimeout(() => {
        Modal.open(this.$refs['modal']);
      }, openDelay);
    },
  },
  data() {
    return {
      observer: null,
      loading: false,
      blabla: 'text',
    };
  },
  props: {
    clientName: String,
    apiUrl: String,
    jobId: String,
    modalId: String,
    slim: {
      default: null,
    },
    show: {
      default: null,
    },
    center: {
      default: null,
    },
    notification: {
      default: null,
    },
    apiKey: String,
    mockApplyUrl: String,
    mockDocumentsUrl: String,
    modalError: Object,
  },
  template: `
    <div :class="classList" tabindex="-1" aria-hidden="true" :data-loading="loadingValue" style="--color-icon-hover-color: var(--color-white)" ref="modal"
          v-bind="settings">
      <div :class="dialogClassList">
        <div class="modal__content">
          <div class="modal__header">
            <div class="modal__close">
              <icon icon="close" :hover="hover" :circle="circle" :size="size" />
            </div>
          </div>
          <div :class="bodyClasses">
            <slot></slot>
            <div class="modal__error container" v-if="modalErrorValue">
              <div class="modal__error-row row">
                <div class="modal__error-content col-lg-8">
                  <div class="modal__error-headline">
                    <headline
                      :text="modalErrorValue.headline.text"
                      level='h2'
                      :classes="modalErrorValue.headline.classes"
                    />
                  </div>
                  <div class="modal__error-icon">
                    <icon
                      icon='meerkat'
                      size='xxl'
                    />
                  </div>
                  <div class="modal__error-subline">
                    {{ modalErrorValue.subline }}
                  </div>
                  <div class="modal__error-text">
                    {{ modalErrorValue.text }}
                  </div>
                  <div class="modal__error-mail">
                    <icon icon='mail' size="small" /> <a class="custom" :href="'mailto:' + modalErrorValue.mail">{{ modalErrorValue.mail }} </a>
                  </div>
                  <div class="modal__error-phone">
                    <icon icon='phone' size="small" /> <a class="custom" :href="'tel:' + modalErrorValue.phone" > {{ modalErrorValue.phone }} </a>
                  </div>
                  <div class="modal__error-close" v-if="modalErrorValue.cta">
                    <cta
                      :text="modalErrorValue.cta.text"
                      :skin="modalErrorValue.cta.skin"
                      :width="modalErrorValue.cta.width"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`,
};
