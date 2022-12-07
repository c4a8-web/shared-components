import Modal from '../modal.js';
import Events from '../events.js';
import Tools from '../tools.js';

export default {
  tagName: 'ad-block-info',
  props: {
    text: String,
    show: {
      default: null,
    },
  },
  mounted() {
    this.bindEvents();

    if (!Tools.isTrue(this.show)) return;

    this.openModal();
  },
  methods: {
    bindEvents() {
      document.addEventListener(Events.AD_BLOCK_INFO, () => {
        this.openModal();
      });
    },
    openModal() {
      Modal.open(this.$refs['modal-component']?.modal);
    },
  },
  template: `
    <div class="ad-block-info vue-component" v-if="text">
      <modal
        ref="modal-component"
        slim=true
      >
        <div class="container">
          <div class="row">
            <div class="col" v-html="text"></div>
          </div>
        </div>
      </modal>
    </div>
  `,
};
