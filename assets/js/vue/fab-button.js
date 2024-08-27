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
      scrollStartSelector: '.fab-button__scroll-start',
      scrollDistancePercentage: 0,
      maxPercentage: 100,
      hasScrollStarter: false,
      isExpanded: false,
      closedAfterScrolledInto: false,
    };
  },
  computed: {
    classList() {
      return [
        'fab-button vue-component',
        {
          'fab-button--sticky': !this.isNotSticky,
          'fab-button--has-trigger': this.hasTrigger,
          'fab-button--has-scroll-starter': this.hasScrollStarter,
        },
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
    iconValue() {
      return this.icon !== '' ? this.icon : 'phone-mail';
    },
    scrollStarter() {
      return document.querySelector(this.scrollStartSelector);
    },
    style() {
      if (this.scrollDistancePercentage <= 0) return;

      return [
        {
          '--fab-button-scroll-percentage': this.scrollDistancePercentage + '%',
        },
      ];
    },
  },
  mounted() {
    this.hasScrollStarter = this.scrollStarter ? true : false;

    this.bindEvents();
  },
  beforeDestroy() {
    if (!this.hasScrollStarter) return;

    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    bindEvents() {
      if (this.hasScrollStarter) {
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('resize', this.handleResize);
      }

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
    handleScroll() {
      console.log('scrolling');

      this.calcScrollDistancePercentage();
    },
    handleResize() {
      console.log('resizing');
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
      // TODO if user is in scrolled into modal state set closedAfterScrolledInto to true and never scroll open the modal again

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
    calcScrollDistancePercentage() {
      const scrollStarter = this.scrollStarter;
      const modal = this.$refs.modal;
      const scrollPosition = window.scrollY;
      const componentTop = scrollStarter.getBoundingClientRect().top + scrollPosition - window.innerHeight;
      const modalHeight = modal.offsetHeight;

      let scrollDistancePercentage = 0;

      if (scrollPosition >= componentTop) {
        const scrolledPastComponent = scrollPosition - componentTop;

        scrollDistancePercentage = (scrolledPastComponent / modalHeight) * 100;
      }

      this.scrollDistancePercentage =
        scrollDistancePercentage > this.maxPercentage ? this.maxPercentage : scrollDistancePercentage;
    },
  },
  props: {
    icon: {
      type: String,
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
        <div class="fab-button__wrapper-inner" :style="style">
          <div v-if="modal" :class="modalClassList" ref="modal">
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
            <icon :icon="iconValue" size="large" />
          </div>
        </div>
      </div>
      <div class="fab-button__end"></div>
    </div>
  `,
};
