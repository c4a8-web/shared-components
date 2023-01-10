import Tools from '../tools.js';

export default {
  tagName: 'accordion',
  computed: {
    classList() {
      return ['accordion container mt-6 mb-4 my-lg-8', 'vue-component'];
    },
    imageWrapperClasses() {
      return ['accordion__floating-image-wrapper', Tools.isTrue(this.shadowless) === true ? null : 'drop-shadow'];
    },
  },
  methods: {
    getId(accordion, index, name) {
      return `${name}${accordion.id}${index}`;
    },
    isExpanded(tab) {
      return tab.expanded ? 'true' : 'false';
    },
    buttonClasses(tab) {
      return [
        'accordion__btn btn btn-link btn-block card-btn d-flex justify-content-between',
        !tab.expanded ? 'collapsed' : null,
      ];
    },
    contentClasses(tab) {
      return ['accordion__content collapse position-static', tab.expanded ? 'show' : null];
    },
    accordionId(accordion) {
      return `#${accordion.id}`;
    },
    cloudinary(tab) {
      return tab.cloudinary || true;
    },
  },
  props: {
    accordion: Object,
    shadowless: {
      default: null,
    },
  },
  template: `
    <section :class="classList">
      <div class="row position-relative">
        <div class="col-lg-6"><!-- safespace for floating image on large breakpoints --></div>
        <div class="col-lg-6 position-static" :id="accordion.id">
          <div class="accordion__card" v-for="(tab, index) in accordion.tabs">
            <div class="accordion__card-header card-header card-collapse" :id="getId(accordion, index, 'Heading')">
              <button type="button" :class="buttonClasses(tab)"
                  data-toggle="collapse"
                  :data-target="getId(accordion, index, '#Content')"
                  :aria-expanded="isExpanded(tab)"
                  :aria-controls="getId(accordion, index, 'Content')"
              >
                {{ tab.headline }}

                <span class="card-btn-toggle">
                  <icon
                    icon="plus"
                    classes="accordion__icon-toggle card-btn-toggle-default"
                  />
                  <icon
                    icon="minus"
                    classes="accordion__icon-toggle card-btn-toggle-active"
                  />
                </span>
              </button>
            </div>
            <div :id="getId(accordion, index, 'Content')" :class="contentClasses(tab)" :aria-labelledby="getId(accordion, index, 'Heading')" :data-parent="accordionId(accordion)">
              <div class="accordion__richtext richtext richtext__small card-body">
                <div class="mb-4 col-lg-6 accordion__floating-container">
                  <div :class="imageWrapperClasses" v-if="tab.image">
                    <v-img :img="tab.image" :cloudinary="cloudinary(tab)" lazy="true" :alt="tab.alt" />
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
