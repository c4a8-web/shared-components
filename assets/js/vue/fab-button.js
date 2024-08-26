import Tools from '../tools.js';
import State from '../state.js';

export default {
  tagName: 'fab-button',
  data() {
    return {
      resetDelay: 300,
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
    wrapperClasses() {
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
      console.log('🚀 ~ hasTrigger ~ Tools.isTrue(this.trigger):', Tools.isTrue(this.trigger));
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
    },
    handleTriggerClick(e) {
      if (!e) return console.error('no event provided');

      const target = e.currentTarget;
      const triggerId = target.dataset.triggerId;

      document.dispatchEvent(new CustomEvent(Events.OPEN_MODAL, { detail: { id: triggerId } }));
    },
    handleClick() {
      console.log('handle click');

      this.isExpanded = !this.isExpanded;
      console.log('🚀 ~ handleClick ~ this.isExpanded:', this.isExpanded);
      // this.root.classList.toggle(State.EXPANDED);
      // this.modal.classList.toggle(State.OFF_SCREEN);

      // if (this.modal.classList.contains(State.OFF_SCREEN)) {
      //   this.modal.style = '';
      // }
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
      <div :class="wrapperClasses" :data-hs-sticky-block-options="options">
        <div v-if="modal" class="fab-button__modal is-off-screen">
          <div class="fab-button__close">
            <icon icon="close" :circle="true" :hover="true" size="medium" />
          </div>
          <slot name="contact" v-if="modal.contact"></slot>
        </div>
        <div class="fab-button__icon"
          :style="buttonStyles"
          @click="shouldBindTriggerEvent ? handleTriggerClick($event): null"
          :data-trigger-id="trigger"
        >
          <icon :icon="icon" size="large" />
        </div>
      </div>
      <div class="fab-button__end"></div>
    </div>
  `,
};
