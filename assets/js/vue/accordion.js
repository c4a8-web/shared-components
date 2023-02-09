import Tools from '../tools.js';
import State from '../state.js';

export default {
  tagName: 'accordion',
  computed: {
    imageWrapperClasses() {
      return ['accordion__floating-image-wrapper', Tools.isTrue(this.shadowless) === true ? null : 'drop-shadow'];
    },
    containerClasses() {
      return [
        'accordion__container container vue-component',
        this.spacing,
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
  },
  mounted() {
    if (!this.accordion.tabs) return;

    this.selectFallbackImage();
    this.changeOutsideImage();

    this.accordion.tabs.forEach((element) => {
      this.states.push(element.expanded ? true : false);
    });
  },
  methods: {
    selectFallbackImage() {
      if (!this.fallbackImage) {
        this.fallbackImage = this.accordion.image || this.getActiveTab()?.image;
      }
    },
    getActiveTab() {
      const expandedTabs = this.accordion?.tabs.filter((item) => item.expanded);

      return expandedTabs ? expandedTabs[0] : null;
    },
    handleClick(index) {
      const lastState = this.states[index];

      this.states = this.states.map((_) => false);
      this.states[index] = !lastState;

      this.changeOutsideImage(index);

      if (!this.allTabsClosed()) return;

      this.changeToFallbackImage();
    },
    changeToFallbackImage() {
      this.showOutsideImage = true;

      this.accordion.image = this.fallbackImage;
      this.outsideImage = this.fallbackImage;
    },
    changeOutsideImage(index) {
      const tab = this.getTabByIndex(index);

      this.showOutsideImage = true;
      this.outsideImage = tab.image;
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
    getId(accordion, index, name) {
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
  },
  data() {
    return {
      showOutsideImage: false,
      outsideImage: false,
      states: [],
      fallbackImage: false,
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
    spacing: String,
  },
  template: `
    <div :class="containerClasses" v-if="accordion.headline">
      <div class="row">
        <div :class="columnClasses">
          <headline
            :text="accordion.headline"
          />
          <div class="accordion__subline font-size-2" v-if="accordion.subline">{{ accordion.subline }}</div>
        </div>
        <div class="row accordion__image" v-if="accordion.image">
          <v-img :img="accordion.image" :cloudinary="cloudinary(accordion)" :alt="accordion.alt" />
        </div>
      </div>
    </div>
    <section class="accordion container mt-6 mb-4 my-lg-8 vue-component">
      <div class="row position-relative">
        <div class="col-lg-6"><!-- safespace for floating image on large breakpoints --></div>
        <div class="col-lg-6 position-static" :id="accordion.id">
          <div class="accordion__fallback-container mb-4 col-lg-6" v-if="outsideImage">
            <div :class="fallbackImageClasses">
              <v-img :img="outsideImage" :cloudinary="cloudinary(accordion)" lazy="true" :alt="accordion.alt" />
            </div>
          </div>
          <div :class="cardClasses(index)"  v-for="(tab, index) in accordion.tabs">
            <div class="accordion__card-header card-collapse" :id="getId(accordion, index, 'Heading')">
              <button type="button" :class="buttonClasses(tab)"
                  data-toggle="collapse"
                  :data-target="getId(accordion, index, '#Content')"
                  :aria-expanded="isExpanded(tab)"
                  :aria-controls="getId(accordion, index, 'Content')"
                  @click="handleClick(index)"
              >
                {{ tab.headline }}

                <span class="card-btn-toggle">
                  <icon icon="plus-minus" class="accordion__icon-toggle" :closed="!states[index]" />
                </span>
              </button>
            </div>
            <div :id="getId(accordion, index, 'Content')" :class="contentClasses(tab)" :aria-labelledby="getId(accordion, index, 'Heading')" :data-parent="accordionId(accordion)">
              <div class="accordion__richtext richtext richtext__small card-body">
                <div class="mb-4 col-lg-6 accordion__floating-container">
                  <div :class="imageWrapperClasses" v-if="getImage(tab)">
                    <v-img :img="getImage(tab)" :cloudinary="cloudinary(tab)" lazy="true" :alt="tab.alt" />
                  </div>
                </div>
                <div class="accordion__text" v-html="tab.content"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
};
