<template>
  <div :class="classList" :style="style" ref="root">
    <div class="row">
      <div :class="width ? 'width' : 'col-lg-8'">
        <headline
          :text="headline?.text"
          :level="headlineLevel"
          :classes="headlineClasses"
          data-utility-animation-step="1"
        />
        <details
          v-for="entry in entriesWithState"
          :open="entry.isDetailsOpen"
          class="fade-in-bottom"
          data-utility-animation-step="1"
          :style="getDelay(entry)"
        >
          <summary @click.prevent="handleClick(entry)" :open="entry.isDetailsOpen">
            <div class="faq__summary">{{ entry.summary }}</div>
            <div class="faq__icon-frame">
              <div class="faq__icon">
                <icon icon="arrow-narrow" direction="clockwise" size="small" />
              </div>
            </div>
          </summary>
          <Transition @after-leave="afterLeave(entry)" @enter="enter(entry)" @before-leave="leave(entry)">
            <div class="faq__content" v-show="entry.isOpen" :ref="entry.id">
              <div class="faq__text" v-html="entry.text"></div>
            </div>
          </Transition>
        </details>
      </div>
    </div>
  </div>
</template>
<script>
import State from '../utils/state.js';
import UtilityAnimation from '../utils/utility-animation.js';

export default {
  tagName: 'faq',
  data() {
    return {
      entriesWithState: [],
    };
  },
  beforeMount() {
    this.entriesWithState = this.entries?.map((entry, index) => {
      entry.isOpen = null;
      entry.isDetailsOpen = null;
      entry.height = null;
      entry.index = index;
      entry.id = `entry-${index}`;

      return entry;
    });
  },
  computed: {
    style() {
      return this.index ? `--utility-animation-index: ${this.index}` : null;
    },
    classList() {
      return ['faq', 'utility-animation', 'container', 'vue-component', this.spacing];
    },
    headlineClasses() {
      return `faq__headline fade-in-bottom ${this.headline?.classes ? this.headline.classes : ''}`;
    },
    headlineLevel() {
      return this.headline?.level ? this.headline.level : 'h2';
    },
  },
  mounted() {
    if (!this.$refs.root) return;

    UtilityAnimation.init([this.$refs.root]);
  },
  methods: {
    getDelay(entry) {
      const miliseconds = entry.index > 0 ? 200 : 0;
      const delay = `${entry.index * miliseconds}ms`;

      return `--utility-animation-delay: ${delay};`;
    },
    handleClick(entry) {
      entry.isOpen = entry.isOpen === null ? true : null;

      if (entry.isOpen) entry.isDetailsOpen = true;
    },
    getElementByRef(entry) {
      const ref = this.$refs[entry?.id];

      if (!ref || ref.length === 0) return;

      return ref[0];
    },
    afterLeave(entry) {
      const element = this.getElementByRef(entry);

      if (!element) return;

      entry.isDetailsOpen = null;

      element.style.removeProperty('display');
      element.style.removeProperty('height');
      element.classList.remove(State.IS_COLLAPSING);
    },
    enter(entry) {
      const element = this.getElementByRef(entry);

      if (!element) return;

      const height = element.offsetHeight;

      element.style.removeProperty('height');
      element.style.height = 0;
      element.style.paddingTop = 0;
      element.style.paddingBottom = 0;
      element.style.marginTop = 0;
      element.style.marginBottom = 0;

      setTimeout(() => {
        element.style.height = `${height}px`;
        element.style.removeProperty('padding-top');
        element.style.removeProperty('padding-bottom');
        element.style.removeProperty('margin-top');
        element.style.removeProperty('margin-bottom');
      });
    },
    leave(entry) {
      const element = this.getElementByRef(entry);

      if (!element) return;

      const height = element.offsetHeight;

      element.classList.add(State.IS_COLLAPSING);

      setTimeout(() => {
        element.style.height = `${height}px`;
      });
    },
  },
  props: {
    headline: Object,
    entries: Array,
    index: Number,
    spacing: {type: String, default: 'space-top-2 space-bottom-2'},
    width: String,
  },
};
</script>
<style>
.faq[data-utility-animation-in-viewport] + :not([data-utility-animation-in-viewport]) [data-utility-animation-step] {
  animation-delay: var(--utility-animation-delay);
}
.faq[data-utility-animation-in-viewport] + :not([data-utility-animation-in-viewport]) [data-utility-animation-step].faq__headline {
  animation-delay: 0s;
}
.faq[data-utility-animation-in-viewport] + [data-utility-animation-in-viewport] [data-utility-animation-step] {
  animation-delay: calc(200ms + var(--utility-animation-delay));
}
.faq[data-utility-animation-in-viewport] + [data-utility-animation-in-viewport] [data-utility-animation-step].faq__headline {
  animation-delay: 200ms;
}
.faq summary {
  list-style-type: none;
  display: flex;
  position: relative;
}
.faq summary {
  font-size: 1.25rem;
  line-height: 1.6em;
}
@media (min-width: 992px) {
  .faq summary {
    font-size: 1.25rem;
    line-height: 1.6em;
  }
}
@media (min-width: 1200px) {
  .faq summary {
    font-size: 1.5625rem;
    line-height: 1.6em;
  }
}
.faq summary {
  line-height: 1.7em !important;
}
.faq summary::-webkit-details-marker {
  display: none;
}
.faq details {
  margin: 1rem 0;
}
.faq details[data-utility-animation-step] {
  animation-duration: 1.4s;
  animation-delay: var(--utility-animation-delay);
}
.faq details[open]:not(.is-collapsing) .faq__icon {
  transform: rotate(-180deg);
}
.faq details + details {
  padding-top: 0.75rem;
  border-top: 1px solid var(--color-faq-border);
}
.faq details .faq__bullets {
  list-style-type: none;
}
.faq .faq__icon {
  transition: transform 0.5s cubic-bezier(0.19, 1, 0.2, 1);
}
.faq .faq__icon .icon {
  position: relative;
  right: 2px;
  top: 2px;
  transform: scaleY(2.2) scale(1.2);
  margin-bottom: 0.25rem;
}

.faq__headline {
  padding-bottom: 1.5rem;
}

.faq__content {
  transition: height 0.5s cubic-bezier(0.19, 1, 0.2, 1);
  overflow: hidden;
}
.faq__content.v-leave-active {
  transition-duration: 0.2s;
}
.faq__content.v-leave-to {
  height: 0 !important;
}

.faq__text {
  padding-top: 1.5rem;
  padding-bottom: 3.5rem;
  overflow: hidden;
}

.faq__summary {
  display: inline-block;
}

.faq__text,
.faq__summary {
  width: 90%;
}

.faq__icon-frame {
  flex: 1;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
}
</style>
