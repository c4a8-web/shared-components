export default {
  tagName: 'text-teaser',
  computed: {
    classList() {
      return ['text-teaser utility-animation', this.spacing ? this.spacing : '', 'vue-component'];
    },
    style() {
      return [
        this.background && !this.logo?.background ? `background-image:url('${this.background}');` : '',
        this.bgColor && !this.logo?.background ? `background-color: ${this.bgColor};` : '',
      ];
    },
    rowBackgroundClass() {
      return ['row', this.background ? 'justify-content-center' : '', this.logo?.background ? 'position-relative' : ''];
    },
    colBackgroundClass() {
      return this.logo?.background
        ? ['bg-light text-center rounded-lg p-4 p-md-7 text-center font-size-4 font-weight-light']
        : [
            this.background
              ? 'col-lg-6 py-11 d-flex text-center justify-content-center align-items-center flex-wrap font-size-4 font-weight-light'
              : 'col-lg-7 offset-lg-1 pt-8',
          ];
    },
    ctaListClass() {
      return ['text-teaser__cta pt-4 pt-lg-6 w-100 w-md-auto fade-in-bottom'];
    },
    logoClass() {
      return ['max-w-11rem max-w-md-13rem', this.background || this.logo?.background ? 'mx-auto' : ''];
    },
    copyClass() {
      return ['text-teaser__copy fade-in-bottom', this.logo?.background ? 'w-md-80 w-lg-50 mx-md-auto mb-2' : ''];
    },
    ctaListNormalize() {
      const fixedArr = this.ctaList.map((obj) => {
        const newObj = {};

        for (const key in obj) {
          if (key === 'ctaText') {
            newObj['text'] = obj[key];
          } else if (key === 'ctaHref') {
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
      <div class="container">
        <div :class="rowBackgroundClass">
          <div :class="colBackgroundClass">
            <div class="mb-4 w-100" v-if="logo">
              <figure :class="logoClass">
                <v-img v-bind="logo" />
              </figure>
            </div>

            <div :class="copyClass" data-utility-animation-step="1">{{ copy }}</div>

            <div :class="ctaListClass" data-utility-animation-step="1" v-if="ctaList">
              <template v-for="entry in ctaListNormalize">
                <cta v-bind="entry" />
              </template>
            </div>

            <figure class="max-w-15rem w-100 position-absolute bottom-0 left-0" v-if="logo.background">
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
