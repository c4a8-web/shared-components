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
      modalDimensionsSaved: false,
      modalWidth: null,
      modalHeight: null,
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
          'fab-button--closed-after-scrolled-into': this.closedAfterScrolledInto,
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
      const showModalWidth = this.scrollDistancePercentage > 0;

      return {
        '--color-fab-background': this.bgColor,
        color: this.iconColor,
        '--fab-button-modal-width': showModalWidth ? this.modalWidth : null,
        '--fab-button-modal-height': showModalWidth ? this.modalHeight : null,
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
          '--fab-button-scroll-percentage-clean': this.scrollDistancePercentage,
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
    getModalDimensions() {
      if (this.modalDimensionsSaved) return;

      const modal = this.$refs.modal;

      this.modalDimensionsSaved = true;

      // TODO this is still buggy sometimes so fix the calculation
      this.$nextTick(() => {
        this.modalWidth = modal.offsetWidth + 'px';
        this.modalHeight = modal.offsetHeight + 'px';
      });
    },
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
      this.calcScrollDistancePercentage();
    },
    handleResize() {
      this.modalDimensionsSaved = false;
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
    handleButtonClose() {
      if (this.hasScrollStarter && this.isBetweenScrollAnimation()) {
        this.closedAfterScrolledInto = true;
      } else {
        this.handleClose();
      }
    },
    isBetweenScrollAnimation() {
      return this.scrollDistancePercentage > 0 && this.scrollDistancePercentage <= this.maxPercentage;
    },
    handleClose() {
      // TODO transition from circle to square/rectangle
      // TODO handle resize

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
        this.getModalDimensions();

        const reverseAnimationPercentage = 225;
        const scrolledPastComponent = scrollPosition - componentTop;

        scrollDistancePercentage = (scrolledPastComponent / modalHeight) * 100;

        if (scrollDistancePercentage >= reverseAnimationPercentage) {
          let newScrollDistancePercentage = reverseAnimationPercentage + 100 - scrollDistancePercentage;

          const minPercentage = 0;

          scrollDistancePercentage =
            newScrollDistancePercentage < minPercentage ? minPercentage : newScrollDistancePercentage;
        }
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
            <div class="fab-button__close" @click="handleButtonClose">
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
