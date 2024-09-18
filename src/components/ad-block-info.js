import Modal from "../assets/js/modal.js";
import Events from "../assets/js/events.js";
import Tools from "../assets/js/tools.js";
import Lang from "../assets/js/lang.js";

export default {
  tagName: "ad-block-info",
  props: {
    text: String,
    show: {
      default: null,
    },
  },
  computed: {
    textValue() {
      return this.text.length > 0 ? this.text : Lang?.adBlockInfo;
    },
  },
  data() {
    return {
      disableDelay: 30 * 24 * 60 * 60 * 1000,
      storageKey: "adBlockInfo",
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
      Modal.open(this.$refs["modal-component"]?.modal);

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
        notification=true
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
