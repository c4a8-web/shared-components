import Tools from '../tools.js';
import State from '../state.js';
import Events from '../events.js';

export default {
  tagName: 'fab-button',
  data() {
    return {
      resetDelay: 300,
      rootSelector: '.fab-button',
      fabTriggerSelector: '.fab-trigger',
      isExpanded: false,
    };
  },
  computed: {
    classList() {
      return [
        'fab-button vue-component',
        { 'fab-button--sticky': !this.isNotSticky, 'fab-button--has-trigger': this.hasTrigger },
        `${this.isExpanded ? State.EXPANDED : ''}`,
      ];
    },
    modalClassList() {
      return ['fab-button__modal', !this.isExpanded ? State.OFF_SCREEN : ''];
    },
    wrapperClassList() {
      return ['fab-button__wrapper', this.isNotSticky ? '' : 'js-sticky-block'];
    },
    buttonStyles() {
      return {
        '--color-fab-background': this.bgColor,
        color: this.iconColor,
      };
    },
    isNotSticky() {
      return Tools.isTrue(this.noSticky);
    },
    hasTrigger() {
      return this.trigger !== '';
    },
    options() {
      return `{
        "parentSelector": ".fab-button",
        "breakpoint": "xs",
        "startPoint": ".fab-button__start",
        "endPoint": "999999",
        "stickyOffsetTop": "0",
        "stickyOffsetBottom": 20
      }`;
    },
    shouldBindTriggerEvent() {
      return !this.modal || this.hasTrigger;
    },
  },
  mounted() {
    this.bindEvents();
  },
  methods: {
    bindEvents() {
      if (this.shouldBindTriggerEvent) return;

      this.bindLinkTriggers();
    },
    bindLinkTriggers() {
      const links = document.querySelectorAll(this.fabTriggerSelector);

      if (!links) return;

      links.forEach((link) => {
        link.addEventListener('click', this.handleClick.bind(this));
      });

      document.addEventListener(Events.FORM_AJAX_SUBMIT, this.handleSubmit.bind(this));
      window.addEventListener('click', this.handleOutsideClick.bind(this));
    },
    handleTriggerClick(e) {
      if (!e) return console.error('no event provided');

      const target = e.currentTarget;
      const triggerId = target.dataset.triggerId;

      document.dispatchEvent(new CustomEvent(Events.OPEN_MODAL, { detail: { id: triggerId } }));
    },
    handleClick() {
      this.isExpanded = !this.isExpanded;
    },
    handleClose() {
      this.handleClick();

      setTimeout(() => {
        document.dispatchEvent(new CustomEvent(Events.FAB_BUTTON_CLOSE, { detail: { target: this.root } }));
      }, this.resetDelay);
    },
    handleOutsideClick(e) {
      if (
        this.isExpanded &&
        Tools.isOutsideOf(this.rootSelector.substring(1), e) &&
        Tools.isOutsideOf(this.fabTriggerSelector.substring(1), e)
      ) {
        this.handleClose();
      }
    },
    handleSubmit() {
      this.handleClose();
    },
  },
  props: {
    icon: {
      type: String,
      default: 'phone-mail',
    },
    modal: Object,
    noSticky: {
      default: null,
    },
    bgColor: String,
    iconColor: String,
    trigger: {
      default: null,
    },
  },
  template: `
    <div :class="classList">
      <div class="fab-button__start"></div>
      <div :class="wrapperClassList" :data-hs-sticky-block-options="options">
        <div v-if="modal" :class="modalClassList">
          <div class="fab-button__close" @click="handleClose">
            <icon icon="close" :circle="true" :hover="true" size="medium" />
          </div>
          <slot name="contact" v-if="modal.contact"></slot>
        </div>
        <div class="fab-button__icon"
          :style="buttonStyles"
          @click="shouldBindTriggerEvent ? handleTriggerClick($event): handleClick()"
          :data-trigger-id="trigger"
        >
          <icon :icon="icon" size="large" />
        </div>
      </div>
      <div class="fab-button__end"></div>
    </div>
  `,
};
