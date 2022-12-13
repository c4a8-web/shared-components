import Modal from '../modal.js';
import Events from '../events.js';
import Tools from '../tools.js';
import Lang from '../lang.js';

export default {
  tagName: 'ad-block-info',
  props: {
    text: String,
    show: {
      default: null,
    },
  },
  computed: {
    textValue() {
      return this.text.length > 0 ? this.text : Lang.adBlockInfo;
    },
  },
  data() {
    return {
      disableDelay: 24 * 60 * 60 * 1000,
      storageKey: 'adBlockInfo',
    };
  },
  mounted() {
    this.bindEvents();

    if (!Tools.isTrue(this.show)) return;

    this.openModal();
  },
  methods: {
    bindEvents() {
      if (this.isDisabled()) return;

      document.addEventListener(Events.AD_BLOCK_INFO, () => {
        this.openModal();
      });
    },
    openModal() {
      Modal.open(this.$refs['modal-component']?.modal);

      this.disableInfoByTime();
    },
    disableInfoByTime() {
      const timeToDisable = Date.now() + this.disableDelay;

      Tools.storageSave(this.storageKey, timeToDisable);
    },
    isDisabled() {
      const storageValue = Tools.storageGet(this.storageKey);

      return storageValue && storageValue > 0 && Date.now() <= storageValue;
    },
  },
  template: `
    <div class="ad-block-info vue-component" v-if="textValue">
      <modal
        ref="modal-component"
        slim=true
        center=true
      >
        <div class="container">
          <div class="row">
            <div class="col" v-html="textValue"></div>
          </div>
        </div>
      </modal>
    </div>
  `,
};
