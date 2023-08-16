export default {
  tagName: 'text-teaser',
  computed: {
    classList() {
      return [
        'text-teaser',
        this.logo ? 'overflow-hidden' : 'text-teaser--bg utility-animation',
        this.spacing ? this.spacing : '',
        'vue-component',
      ];
    },
    style() {
      return [
        this.background ? `background-image:url('${this.background}');` : '',
        this.bgColor ? `background-color: ${this.bgColor};` : '',
      ];
    },
    containerList() {
      return ['container', this.logo ? 'space-bottom-2' : ''];
    },
    rowBackgroundClass() {
      return this.logo ? ['position-relative'] : ['row', this.background ? 'justify-content-center' : ''];
    },
    colBackgroundClass() {
      return this.logo
        ? ['bg-light text-center rounded-lg p-4 p-md-7']
        : [
            this.background
              ? 'col-lg-6 py-11 d-flex text-center justify-content-center align-items-center flex-wrap font-size-4 font-weight-light'
              : 'col-lg-7 offset-lg-1 pt-8',
          ];
    },
    ctaListClass() {
      return this.logo ? ['w-lg-50 mx-lg-auto'] : ['pt-4 pt-lg-6 w-100 w-md-auto fade-in-bottom'];
    },
    ctaListRefactor() {
      const invalidKeyText = 'ctaText';
      const invalidKeyHref = 'ctaHref';

      const fixedArr = this.ctaList.map((obj) => {
        const newObj = {};

        for (const key in obj) {
          if (key === invalidKeyText) {
            newObj['text'] = obj[key];
          } else if (key === invalidKeyHref) {
            newObj['href'] = obj[key];
          } else {
            newObj[key] = obj[key];
          }
        }

        return newObj;
      });

      return fixedArr;
    },
  },
  methods: {},
  props: {
    ctaList: {
      default: null,
    },
    spacing: {
      default: null,
    },
    background: {
      default: null,
    },
    bgColor: {
      default: null,
    },
    logo: {
      default: null,
    },
    copy: String,
  },
  template: `
    <div :class="classList" :style="style">
      <div :class="containerList">
        <div :class="rowBackgroundClass">
          <div :class="colBackgroundClass">
            <template v-if="logo">
              <div class="mb-4">
                <figure class="max-w-11rem max-w-md-13rem mx-auto">
                  <v-img :img="logo.img" :cloudinary="logo.cloudinary" :alt="logo.alt" />
                </figure>
              </div>

              <div class="w-md-80 w-lg-50 mx-md-auto mb-6">
                <blockquote class="lead text-dark">{{ copy }}</blockquote>
              </div>
            </template>
            <template v-else>
              <div class="text-teaser__copy fade-in-bottom" data-utility-animation-step="1">{{ copy }}</div>
            </template>

            <div :class="ctaListClass" data-utility-animation-step="1" v-if="ctaList">
              <template v-for="entry in ctaListRefactor">
                <cta v-bind="entry" />
              </template>
            </div>

            <figure class="max-w-15rem w-100 position-absolute bottom-0 left-0" v-if="logo">
              <div class="mb-n7 ml-n7">
                <v-img :img="logo.background" :cloudinary="logo.cloudinary" :alt="logo.alt" />
              </div>
            </figure>

          </div>
        </div>
      </div>
    </div>
  `,
};
