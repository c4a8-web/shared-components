export default {
  tagName: 'feature-grid-item',
  computed: {
    classList() {
      return [
        'feature-grid__item mb-3 fade-in-bottom',
        this.classes !== '' ? this.classes : '',
        this.centered ? 'is-centered' : '',
        'vue-component',
      ];
    },
    style() {
      return `--utility-animation-index: ${this.index};`;
    },
    image() {
      return this.item?.image;
    },
    title() {
      return this.item?.title;
    },
    headlineLevel() {
      return this.item?.level ? this.item.level : 'h3';
    },
    headlineClasses() {
      const baseClasses = 'mb-2';
      const additionalClasses = this.item?.classes ? this.item.classes : 'font-size-2 bold';

      return `${baseClasses} ${additionalClasses}`;
    },
    description() {
      return this.item?.description;
    },
    copy() {
      return this.item?.copy;
    },
    secondCopy() {
      return this.item?.copy_1;
    },
    list() {
      return this.item?.list;
    },
    secondList() {
      return this.item?.list_1;
    },
    ctaClasses() {
      if (!this.item.cta) return;

      const baseClasses = 'mt-5';
      const additionalClasses = this.item?.cta.align === 'right' ? `d-flex justify-content-end` : '';

      return `${baseClasses} ${additionalClasses}`;
    },
  },
  methods: {},
  props: {
    classes: String,
    item: Object,
    index: Number,
    centered: String,
  },
  template: `
    <div :class="classList" data-utility-animation-step="1" :style="style">
      <div class="bg-white d-flex flex-column h-100 py-5 px-3">
        <figure class="w-100 max-w-10rem mb-5 mx-auto" v-if="image" >
          <v-img :img="image.src" :alt="image.alt" :cloudinary="image.cloudinary" />
        </figure>

        <headline v-if="title" :text="title" :level="headlineLevel" :classes="headlineClasses" />

        <p v-if="description" class="mb-0" v-html="description"></p>
        <p v-if="copy" class="mb-0 font-size-sm d-flex" style="padding-bottom:5px;" v-html="copy"></p>

        <ul v-if="list" class="m-0 flex-grow-1" style="margin-bottom:10px !important;">
          <li v-for="text in list" class="feature-grid-item__text font-size-sm d-flex" d-flex v-html="text"></li>
        </ul>

        <p v-if="secondCopy" class="mb-0 font-size-sm d-flex" style="padding-bottom:5px;" v-html="secondCopy"></p>

        <ul v-if="secondList" class="m-0 p-0 flex-grow-1">
          <li v-for="text in secondList" class="feature-grid-item__text font-size-sm d-flex" v-html="text"></li>
        </ul>

        <div v-if="item.cta" class="ctaClasses">
          <cta
            v-bind="item.cta"
          />
        </div>
      </div>
    </div>`,
};
