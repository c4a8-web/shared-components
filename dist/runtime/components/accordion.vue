<template>
  <div :class="wrapperClasses">
    <div :class="containerClasses" v-if="accordion.headline" ref="container">
      <div class="row">
        <div :class="columnClasses">
          <headline :classes="headlineClasses"><span v-html="accordion.headline"></span></headline>
          <div class="accordion__subline font-size-2" v-if="accordion.subline">{{ accordion.subline }}</div>
        </div>
        <div class="row accordion__image" v-if="accordion.image">
          <v-img
            :img="accordion.image"
            :cloudinary="cloudinary(accordion)"
            :alt="accordion.alt"
            :animated="accordion.animated"
          />
        </div>
      </div>
    </div>
    <section :class="accordionClasses" ref="accordion">
      <div class="row position-relative">
        <div class="accordion__image-spacer col-lg-6">
          <v-img
            :img="outsideImage"
            :cloudinary="cloudinary(accordion)"
            :lazy="true"
            :alt="accordion.alt"
            :animated="outsideAnimated"
            :preset="outsidePreset"
            v-if="outsideImage"
          />
        </div>
        <div class="col-lg-6 position-static" :id="accordion.id">
          <div class="accordion__fallback-container mb-4 col-lg-6" v-if="outsideImage">
            <div :class="fallbackImageClasses">
              <v-img
                :img="outsideImage"
                :cloudinary="cloudinary(accordion)"
                :lazy="true"
                :alt="outsideAlt"
                :animated="outsideAnimated"
                :preset="outsidePreset"
              />
            </div>
          </div>
          <div :class="cardClasses(index)" v-for="(tab, index) in tabs" :style="cardStyle(index)" v-bind:key="index">
            <div class="accordion__card-header card-collapse" :id="getId(accordion, index, 'Heading')">
              <button
                type="button"
                :class="buttonClasses(tab)"
                data-toggle="collapse"
                :data-target="getId(accordion, index, '#Content')"
                :aria-expanded="isExpanded(tab)"
                :aria-controls="getId(accordion, index, 'Content')"
                @click="handleClick(index)"
              >
                {{ tab?.headline }}

                <span class="card-btn-toggle">
                  <icon icon="plus-minus" class="accordion__icon-toggle" :closed="!states[index]" />
                </span>
              </button>
            </div>
            <div
              :id="getId(accordion, index, 'Content')"
              :class="contentClasses(tab)"
              :aria-labelledby="getId(accordion, index, 'Heading')"
              :data-parent="accordionId(accordion)"
            >
              <div class="accordion__richtext richtext richtext__small card-body">
                <div class="mb-4 col-lg-6 accordion__floating-container">
                  <div :class="imageWrapperClasses" v-if="getImage(tab)">
                    <v-img
                      :img="getImage(tab)"
                      :cloudinary="cloudinary(tab)"
                      :lazy="true"
                      :alt="tab.alt"
                      :animated="getTab(tab).animated"
                    />
                  </div>
                </div>
                <div class="accordion__text" v-html="tab.content"></div>
                <cta v-if="tab.cta" :text="tab.cta.text" :link="tab.cta.link" :href="tab.cta.href" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import Tools from '../utils/tools.js';
import State from '../utils/state.js';
import UtilityAnimation from '../utils/utility-animation.js';

export default {
  tagName: 'accordion',
  computed: {
    outsidePreset() {
      return this.isOutsideImageWebpOrGif ? 'animated' : null;
    },
    isOutsideImageWebpOrGif() {
      if (!this.outsideImage) return false;

      return this.outsideImage.endsWith('.webp') || this.outsideImage.endsWith('.gif');
    },
    imageWrapperClasses() {
      return ['accordion__floating-image-wrapper', Tools.isTrue(this.shadowless) === true ? null : 'drop-shadow'];
    },
    wrapperClasses() {
      return [this.spacing];
    },
    containerClasses() {
      return [
        'accordion__container utility-animation container vue-component',
        this.accordion.image ? 'accordion--has-image' : null,
      ];
    },
    accordionClasses() {
      return [
        'accordion utility-animation container mt-6 vue-component',
        this.accordion.image ? 'accordion--has-image' : null,
      ];
    },
    fallbackImageClasses() {
      return [
        'accordion__fallback-image-wrapper',
        Tools.isTrue(this.shadowless) === true ? null : 'drop-shadow',
        this.showOutsideImage ? State.SHOW : null,
      ];
    },
    columnClasses() {
      return ['col', Tools.isTrue(this.left) ? null : 'text-center'];
    },
    headlineClasses() {
      return `accordion__headline  ${this.accordion?.headlineClasses}`;
    },
  },
  created() {
    if (!document) return;

    this.tabs = this.accordion.tabs;

    this.changeExpandedStateOnAnchor();
  },
  mounted() {
    if (!this.accordion.tabs) return;

    this.selectFallbackImage();

    if (this.isUpperBreakpoint()) {
      this.changeOutsideImage();
    } else {
      this.outsideImage = this.fallbackImage;
      this.outsideAlt = this.fallbackAlt;
    }

    this.accordion.tabs.forEach((element) => {
      this.states.push(element.expanded ? true : false);
    });

    if (this.$refs.container) {
      UtilityAnimation.init([this.$refs.container]);
    }

    if (this.$refs.accordion) {
      UtilityAnimation.init([this.$refs.accordion]);
    }
  },
  methods: {
    changeExpandedStateOnAnchor() {
      const hash = this.getHash();
      const id = hash
        .substring(1)
        .replace(/^(Heading|Content)/, '')
        .slice(0, -1);

      if (this.accordion?.id !== id) return;

      const index = hash.substring(hash.length - 1);

      for (let i = 0; i < this.tabs.length; i++) {
        if (this.tabs[i].expanded === true) {
          this.tabs[i].expanded = false;
        }
      }

      if (!this.tabs[index]) return;

      this.tabs[index].expanded = true;
    },
    getHash() {
      return window.location.hash;
    },
    isUpperBreakpoint() {
      return !Tools.isBelowBreakpoint('md');
    },
    selectFallbackImage() {
      if (!this.fallbackImage) {
        const activeTab = this.getActiveTab();

        this.fallbackImage = this.accordion.image || activeTab?.image;
        this.fallbackAnimated = this.accordion.image ? this.accordion.animated : activeTab.animated;
        this.fallbackAlt = this.accordion.image ? this.accordion.alt : activeTab?.alt;
      }
    },
    getActiveTab() {
      const expandedTabs = this.tabs.filter((item) => item.expanded);

      return expandedTabs ? expandedTabs[0] : null;
    },
    handleClick(index) {
      const lastState = this.states[index];

      this.states = this.states.map((_) => false);
      this.states[index] = !lastState;

      if (this.isUpperBreakpoint()) {
        this.changeOutsideImage(index);
      }

      if (!this.allTabsClosed()) return;

      this.changeToFallbackImage();
    },
    changeToFallbackImage() {
      this.showOutsideImage = true;

      this.accordion.image = this.fallbackImage;
      this.outsideImage = this.fallbackImage;
      this.outsideAnimated = this.fallbackAnimated;
      this.outsideAlt = this.fallbackAlt;
    },
    changeOutsideImage(index) {
      const tab = this.getTabByIndex(index);

      this.showOutsideImage = true;
      this.outsideImage = tab?.image || this.fallbackImage;
      this.outsideAnimated = tab?.image ? tab.animated : this.fallbackAnimated;
      this.outsideAlt = tab?.image ? tab.alt : this.fallbackAlt;
    },
    getTabByIndex(index) {
      if (typeof index === 'undefined') return this.getActiveTab();

      return this.accordion?.tabs[index];
    },
    allTabsClosed() {
      return this.states.filter((value) => value === true).length === 0;
    },
    getStateByIndex(index) {
      return this.states[index];
    },
    getId(accordion, index, name, saveElement = false) {
      return `${name}${accordion.id}${index}`;
    },
    isExpanded(tab) {
      return tab.expanded ? 'true' : 'false';
    },
    buttonClasses(tab) {
      return [
        'accordion__btn btn btn-link btn-block d-flex justify-content-between',
        !tab.expanded ? 'collapsed' : null,
      ];
    },
    contentClasses(tab) {
      return ['accordion__content collapse position-static', tab.expanded ? 'show' : null];
    },
    cardClasses(index) {
      const state = this.getStateByIndex(index);

      return ['accordion__card', state ? State.EXPANDED : null];
    },
    cardStyle(index) {
      return `--utility-animation-index: ${index}`;
    },
    accordionId(accordion) {
      return `#${accordion.id}`;
    },
    cloudinary(image) {
      return image.cloudinary || true;
    },
    getImage(tab) {
      if (tab.image) return tab.image;

      if (this.accordion.image) return this.accordion.image;

      return null;
    },
    getTab(tab) {
      return tab.image ? tab : this.accordion;
    },
  },
  data() {
    return {
      showOutsideImage: false,
      outsideImage: false,
      outsideAnimated: false,
      outsideAlt: '',
      states: [],
      fallbackImage: false,
      fallbackAnimated: false,
      fallbackAlt: '',
      tabs: [],
    };
  },
  props: {
    accordion: Object,
    shadowless: {
      default: null,
    },
    left: {
      default: null,
    },
    spacing: {
      type: String,
      default: 'space-top-2 space-bottom-2',
    },
  },
};
</script>
<style scoped>
.accordion .accordion__text,
.accordion .accordion__btn,
.accordion .accordion__fallback-image-wrapper {
  opacity: 0;
}
.accordion[data-utility-animation-in-viewport='true'] .accordion__text,
.accordion[data-utility-animation-in-viewport='true'] .accordion__btn,
.accordion[data-utility-animation-in-viewport='true'] .accordion__fallback-image-wrapper {
  transform: translate3d(0, var(--utility-animation-distance), 0);
  animation: fade-in-from-bottom 0.5s forwards;
  animation-timing-function: cubic-bezier(0.19, 1, 0.2, 1);
}
.accordion[data-utility-animation-in-viewport='true'] .accordion__text,
.accordion[data-utility-animation-in-viewport='true'] .accordion__btn {
  animation-delay: calc(var(--utility-animation-index) * 120ms);
}
.accordion[data-utility-animation-in-viewport='true'] .accordion__floating-image-wrapper {
  opacity: 1;
  transition-delay: 0.5s;
}
@media (min-width: 992px) {
  .accordion.accordion--has-image .accordion__fallback-container,
  .accordion.accordion--has-image .accordion__floating-container {
    display: block;
  }
}
.accordion.accordion--has-image .accordion__floating-container {
  display: none;
  opacity: 0;
}
.accordion .btn-link:not(.collapsed),
.accordion .btn-link:hover {
  color: var(--color-primary-accent);
}
.accordion .btn-link:not(.collapsed) {
  border-bottom-color: transparent;
}
.accordion .accordion__btn:not(.collapsed) .card-btn-toggle-default {
  display: none;
}
.accordion .accordion__btn.collapsed .card-btn-toggle-default {
  display: inline-flex;
}
.accordion .accordion__btn.collapsed .card-btn-toggle-active {
  display: none;
}
.accordion .card-btn-toggle {
  color: currentColor;
  margin-left: 1rem;
}
.accordion .accordion__icon-toggle.icon {
  width: 1.5rem;
  height: 1.5rem;
  overflow: hidden;
}
.accordion .card-collapse:hover {
  background-color: var(--color-accordion-hover-background);
}

.accordion__container {
  opacity: 0;
  overflow: hidden;
}
.accordion__container[data-utility-animation-in-viewport='true'] {
  transform: translate3d(0, var(--utility-animation-distance), 0);
  animation: fade-in-from-bottom 0.5s forwards;
  animation-timing-function: cubic-bezier(0.19, 1, 0.2, 1);
}
.accordion__container.accordion--has-image .accordion__image {
  display: block;
}
@media (min-width: 992px) {
  .accordion__container.accordion--has-image .accordion__image {
    display: none;
  }
}
.accordion__container + .accordion .accordion__fallback-container {
  display: none;
}
@media (min-width: 992px) {
  .accordion__container + .accordion .accordion__fallback-container {
    display: block;
  }
}

.accordion__image-spacer {
  display: none;
  opacity: 0;
  pointer-events: none;
}
@media (min-width: 992px) {
  .accordion__image-spacer {
    display: block;
  }
}

.accordion__image {
  margin-top: 1rem;
  display: none;
}

.accordion__fallback-container {
  z-index: 1;
}

.accordion__fallback-container,
.accordion__floating-container {
  width: 100%;
}
@media (min-width: 992px) {
  .accordion__fallback-container,
  .accordion__floating-container {
    position: absolute;
    height: 100%;
    top: 0;
    left: 0;
  }
}

@media (min-width: 992px) {
  .accordion__fallback-image-wrapper img,
  .accordion__floating-image-wrapper img {
    opacity: 0;
    display: block;
    position: sticky;
    left: 0;
    top: 25vh;
  }
}
@media (min-width: 992px) {
  .accordion__fallback-image-wrapper,
  .accordion__floating-image-wrapper {
    position: relative;
    height: 100%;
    width: 100%;
  }
}

@media (min-width: 992px) {
  .show .accordion__fallback-image-wrapper img {
    opacity: 1;
    transition: opacity 250ms ease-in-out;
  }
}

.accordion__btn {
  padding: 1rem;
  color: var(--color-copy);
  border-bottom: 1px solid var(--color-border-light);
  border-radius: 0;
}
.accordion__btn.btn {
  text-align: left;
}

.accordion__card.is-expanded .collapsing .accordion__richtext {
  opacity: 0.7;
}
.accordion__card.is-expanded .show .accordion__richtext {
  opacity: 1;
}

.accordion__card-header {
  padding-top: 0.25rem;
}

.accordion__card-header,
.accordion__content {
  scroll-margin-top: 80px;
}
@media (min-width: 992px) {
  .accordion__card-header,
  .accordion__content {
    scroll-margin-top: 100px;
  }
}

.accordion__richtext {
  padding: 1.5rem 1rem 2.5rem;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.accordion__content {
  border-bottom: 1px solid var(--color-border-light);
}

.accordion__fallback-image-wrapper.show img {
  opacity: 1;
  transition: opacity 250ms ease-in-out;
}

.accordion__headline + .accordion__subline {
  margin-top: 1.5rem;
}
</style>
