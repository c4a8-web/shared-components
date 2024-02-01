export default {
  tagName: 'text-teaser',
  computed: {
    classList() {
      return ['text-teaser utility-animation', this.spacing ? this.spacing : '', 'vue-component'];
    },
    style() {
      return [
        this.background ? `background-image: url('${this.background}');` : '',
        this.bgColor ? `background-color: ${this.bgColor};` : '',
      ];
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
    ctaListClass() {
      return ['pt-4 pt-lg-6 w-100 w-md-auto fade-in-bottom'];
    },
    logoClass() {
      return ['text-teaser__logo-container', this.background ? 'mx-auto' : ''];
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
    ctaList: Object,
    spacing: String,
    background: String,
    bgColor: String,
    logo: Object,
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

            <div class="text-teaser__copy fade-in-bottom" data-utility-animation-step="1">{{ copy }}</div>

            <div :class="ctaListClass" data-utility-animation-step="1" v-if="ctaList">
              <template v-for="entry in ctaListNormalize">
                <cta v-bind="entry" />
              </template>
            </div>

          </div>
        </div>
      </div>
    </div>
  `,
};
