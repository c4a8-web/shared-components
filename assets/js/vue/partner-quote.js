export default {
  tagName: 'partner-quote',
  computed: {
    classList() {
      return [
        'partner-quote',
        this.partnerQuote ? 'overflow-hidden' : 'partner-quote--text-teaser utility-animation',
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
      return ['container', this.partnerQuote ? 'space-bottom-2' : ''];
    },
    rowBackgroundClass() {
      return ['row', this.background ? 'justify-content-center' : ''];
    },
    colBackgroundClass() {
      return [
        this.background
          ? 'col-lg-6 py-11 d-flex text-center justify-content-center align-items-center flex-wrap font-size-4 font-weight-light'
          : 'col-lg-7 offset-lg-1 pt-8',
      ];
    },
  },
  methods: {},
  props: {
    partnerQuote: {
      default: null,
    },
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
    copy: String,
  },
  template: `
    <div :class="classList" :style="style">
      <div :class="containerList">
        <template v-if="partnerQuote">
          <div class="position-relative">
            <div class="bg-light text-center rounded-lg p-4 p-md-7">
              <div class="mb-4">
                <figure class="max-w-11rem max-w-md-13rem mx-auto">
                  <v-img :img="partnerQuote.logo" :cloudinary="partnerQuote.cloudinary" :alt="partnerQuote.logo.alt" />
                </figure>
              </div>

              <div class="w-md-80 w-lg-50 mx-md-auto mb-6">
                <blockquote class="lead text-dark">{{ partnerQuote.copy }}</blockquote>
              </div>

              <div class="w-lg-50 mx-lg-auto">
                <template v-for="entry in ctaList">
                  <cta v-bind="entry" />
                </template>
              </div>
            </div>

            <figure class="max-w-15rem w-100 position-absolute bottom-0 left-0">
              <div class="mb-n7 ml-n7">
                <v-img :img="partnerQuote.background" :cloudinary="partnerQuote.cloudinary" :alt="partnerQuote.background.alt" />
              </div>
            </figure>
          </div>
        </template>
        <template v-else>
          <div :class="rowBackgroundClass">
            <div :class="colBackgroundClass">
              <div class="partner-quote__copy fade-in-bottom" data-utility-animation-step="1">{{ copy }}</div>

              <div class="pt-4 pt-lg-6 w-100 w-md-auto fade-in-bottom" data-utility-animation-step="1" v-if="ctaList">
                <template v-for="entry in ctaList">
                  <cta v-bind="entry" />
                </template>
              </div>

            </div>
          </div>
        </template>
      </div>
    </div>
  `,
};
