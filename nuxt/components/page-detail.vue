<template>
  <div class="page-detail" :class="{ 'page-detail--has-back': hasBack, [State.LOADING]: isLoading }" ref="root">
    <div v-if="$slots.shape" class="page-detail__shape page-detail__animation-3" ref="shape">
      <slot name="shape"></slot>
      <div class="page-detail__shape-corner">
        <div class="page-detail__shape-corner-desktop">
          <svg-shape :color="detailShapeColor" :height="30" />
        </div>
        <div class="page-detail__shape-corner-mobile">
          <svg-shape :color="detailShapeColor" :height="15" />
        </div>
      </div>
    </div>
    <div class="page-detail__container container">
      <div class="page-detail__start row">
        <div class="page-detail__sticky-start col-md-11 col-lg-5">
          <sticky-block class="page-detail__intro" :sticky-offset-top="stickyOffsetTop" breakpoint="lg">
            <back classes="page-detail__back page-detail__animation-3" />
            <slot name="intro"></slot>
          </sticky-block>
        </div>
        <div class="page-detail__content page-detail__animation-3 col-md-11 offset-lg-1 col-lg-6">
          <slot name="body"></slot>
          <slot name="formular"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import State from '../utils/state.js';
import Tools from '../utils/tools.js';

import { useAppStore } from '../stores/app';
import { ref } from 'vue';

export default {
  name: 'page-detail',
  setup() {
    const isAtEnd = ref(false);
    const endPoint = ref(null);
    const store = useAppStore();

    return {
      isAtEnd,
      endPoint,
      State,
      store,
    };
  },
  data() {
    return {
      hasBack: false,
      stickyPosition: 0,
      hsStickyBlockOptions: null,
      percentageInViewport: 1,
      stickyOffsetTop: 200,
      stickyUnstuckOffsetTop: 0,
      isLoading: true,
      loadingDelay: 100,
    };
  },
  props: {
    detailColor: {
      type: String,
    },
    detailShapeColor: {
      type: String,
    },
    noContent: {
      type: Boolean,
    },
  },
  computed: {
    hasShape() {
      return !!this.$refs.shape;
    },
  },
  methods: {
    showBackButton() {
      if (document.referrer.indexOf(document.location.host) !== -1) {
        this.hasBack = true;
      }
    },
    getDOMElement(selector) {
      return this.$refs.root?.querySelector(selector);
    },
    setStickyPosition() {
      if (!this.hasShape || !this.isInViewport() || !Tools.isUpperBreakpoint()) return;

      const heightOffset = Tools.isBelowBreakpoint('lg') ? 10 : -40;
      const badgeHeight = this.getDOMElement('.page-detail__intro-content .page-detail__badge')?.offsetHeight || 0;
      const detailsHeight = this.getDOMElement('.page-detail__intro-content .page-detail__details')?.offsetHeight || 0;
      const headlineHeight =
        this.getDOMElement('.page-detail__intro-content .page-detail__headline')?.offsetHeight || 0;

      this.stickyPosition = badgeHeight + detailsHeight + headlineHeight - heightOffset;
    },
    isInViewport() {
      return Tools.isInViewportPercent(this.$refs.root, this.percentageInViewport);
    },
    setShapePosition() {
      if (!this.hasShape || !this.isInViewport()) return;
      if (!Tools.isUpperBreakpoint()) return this.resetShape();

      if (this.isAtEnd) {
        this.handleStickyShapeEnd();
      } else if (this.isSticky()) {
        this.$refs.shape.classList.add(State.STICKY);
        this.$refs.shape.style.top = -this.stickyPosition + 'px';
      } else {
        this.resetShape();
      }
    },
    handleStickyShapeEnd() {
      this.$refs.shape.classList.add(State.STICKY);
      this.$refs.shape.style.top = -this.stickyPosition - this.getRelativePosition() + 'px';
    },
    getStickyBlock() {
      return this.getDOMElement('.js-sticky-block');
    },
    getRelativePosition() {
      const stickyBlock = this.getStickyBlock();
      const stickyBlockTop = stickyBlock?.style.top.replace('px', '') || 0;

      return stickyBlockTop >= 0
        ? this.stickyOffsetTop - Math.abs(stickyBlockTop)
        : this.stickyOffsetTop - parseFloat(stickyBlockTop);
    },
    resetShape() {
      this.$refs.shape.classList.remove(State.STICKY);
      this.$refs.shape.style.top = '';
    },
    isSticky() {
      return window.scrollY > this.stickyPosition;
    },
    setStickyUnstuckOffsetTop() {
      this.stickyUnstuckOffsetTop = window.innerHeight;
    },
    handleScroll() {
      this.setShapePosition();
    },
    handleResize() {
      this.setStickyPosition();
      this.setShapePosition();
      this.setStickyUnstuckOffsetTop();
    },
  },
  mounted() {
    this.showBackButton();
    this.setStickyPosition();
    this.setShapePosition();
    this.setStickyUnstuckOffsetTop();

    document.addEventListener('scroll', this.handleScroll);
    document.addEventListener('resize', this.handleResize);

    if (this.noContent) return Tools.gotoHome();

    this.store.setPageIsLoaded(true);

    setTimeout(() => {
      this.isLoading = false;
    }, this.loadingDelay);
  },
  beforeUnmount() {
    document.removeEventListener('scroll', this.handleScroll);
    document.removeEventListener('resize', this.handleResize);
  },
};
</script>
