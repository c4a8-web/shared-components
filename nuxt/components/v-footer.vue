<template>
  <footer :class="classList" :style="style" ref="root">
    <div class="container">
      <div class="footer__content-row row">
        <div class="footer__content col-lg-12">
          <div class="footer__address">
            <div :class="['mb-3', logo?.classes]" v-for="logo in dataValue.logos">
              <a
                :href="logo.url"
                :target="logo.target"
                aria-label="Front"
                :class="[
                  'footer__logos-link d-block pr-6',
                  logo.linkClasses ? logo.linkClasses : 'w-75 w-md-35 w-lg-100',
                ]"
              >
                <v-img :cloudinary="true" v-bind="logo"></v-img>
              </a>
            </div>

            <ul class="footer__locations nav nav-x-0 nav-white flex-column" v-for="location in locations">
              <li class="nav-item" v-if="location.name">
                {{ location.name }}
              </li>
              <li class="nav-item" v-if="location.over">{{ location.over }}</li>
              <li class="nav-item" v-if="location.street">
                {{ location.street }}
              </li>
              <li
                v-if="location.city"
                :class="['nav-item footer__address-block', location.postalReversed ? 'is-reversed' : '']"
              >
                <span class="footer__postal-code">{{ location.postalCode }}</span>
                <span class="footer__city">{{ location.city }}</span>
                <span class="footer__country">{{ location.country }}</span>
              </li>
              <li class="nav-item" v-if="location.number">
                <a class="nav-link media" :href="'tel:' + location.number">
                  <span class="media">
                    <span class="streamline-xs streamline-site-phone mr-3 d-flex"
                      ><site-icons icon="site/mail" :no-span="true"
                    /></span>
                    <span class="media-body">
                      {{ location.number }}
                    </span>
                  </span>
                </a>
              </li>
              <li v-if="dataValue.offices" class="footer__nav-item nav-item">
                <span class="footer__nav-link nav-link">
                  <icon icon="world" class="footer__nav-icon footer__office-icon" />
                  <div class="footer__offices">
                    <span class="footer__office" v-for="(office, index) in dataValue.offices" v-bind:key="index">
                      {{ office }}<span v-if="index < dataValue.offices.length - 1">,&nbsp;</span>
                    </span>
                  </div>
                </span>
              </li>
              <li :class="['nav-item', locations.length > 1 ? 'pt-4' : '']" v-if="location.mail">
                <a class="footer__nav-link nav-link" :href="'mailto:' + location.mail">
                  <span class="d-flex">
                    <span class="streamline-xs footer__nav-icon streamline-site-mail mr-3 d-flex"
                      ><site-icons icon="site/mail" :no-span="true"
                    /></span>
                    <span class="footer__mail media-body">
                      {{ location.mail }}
                    </span>
                  </span>
                </a>
              </li>
            </ul>

            <template v-if="!isCorporate" v-for="(brandLogo, index) in dataValue.brandLogos">
              <span
                v-if="brandLogo.title"
                class="footer__brand-logo-title d-block space-top-1 mb-n7 w-90 w-lg-100 pr-6"
                >{{ brandLogo.title }}</span
              >
              <a
                :href="brandLogo.url"
                :target="brandLogo.target"
                :class="[
                  'footer__brand-logo-link d-block space-top-1',
                  index === 0 ? 'mt-3' : '',
                  brandLogo.classes ? brandLogo.classes : 'w-90',
                ]"
              >
                <v-img :cloudinary="true" v-bind="brandLogo"></v-img>
              </a>
            </template>
          </div>

          <div class="footer__highlights">
            <div class="footer__partners">
              <template v-for="(partner, index) in dataValue.partners">
                <a :href="partner.url" :target="partner.target" class="footer__partner-images">
                  <v-img :cloudinary="true" v-bind="partner" class="footer__partner-image"></v-img>
                </a>
                <div class="footer__vertical-line" v-if="index < dataValue.partners.length - 1"></div>
              </template>
            </div>
            <v-footer-slider :items="dataValue.highlights" :bg-color="bgColorRgbaValue" v-if="!isCorporate" />
          </div>
        </div>
      </div>

      <div v-if="isCorporate" class="footer__content-row row">
        <div class="footer__content col-lg-12">
          <v-footer-slider :items="dataValue.highlights" :bg-color="bgColorRgbaValue" />
        </div>
      </div>

      <hr class="footer__divider mx-lg-3" />

      <div class="mt-3">
        <div class="row align-items-md-center mb-3">
          <div class="col-md-8 mb-4 mb-md-0">
            <!-- Nav Link -->
            <ul class="nav nav-sm nav-white nav-x-0 align-items-center">
              <li class="nav-item mr-6 footer__links" v-for="link in links">
                <a class="nav-link" :href="link.url" v-bind="link">{{ link.title }}</a>
              </li>
            </ul>
            <!-- End Nav Link -->
          </div>

          <div class="col-md-4 text-md-right">
            <ul class="list-inline mb-0 footer__socials">
              <!-- Social Networks -->
              <li class="list-inline-item" v-for="social in dataValue.socials">
                <a
                  class="btn btn-xs btn-icon btn-soft-light"
                  :title="social.title"
                  :href="social.url"
                  target="_blank"
                  rel="noopener"
                >
                  <i :class="['fab', social.icon]"></i>
                </a>
              </li>
              <!-- End Social Networks -->
            </ul>
          </div>
        </div>

        <!-- Copyright -->
        <div class="row pb-2">
          <div class="col">
            <p class="text-white small">Copyright © {{ dataValue.copyright }}</p>
          </div>
        </div>
        <!-- End Copyright -->
      </div>
    </div>
  </footer>
</template>
<script>
import Tools from '../utils/tools.js';
import FooterData from '../utils/data/footer-data.js';

export default {
  tagName: 'v-footer',
  data() {
    return {
      bgColorRgbaValue: null,
    };
  },
  computed: {
    classList() {
      return [
        'footer text-white',
        this.noMargin === false ? 'mt-8 mt-lg-11' : '',
        this.isCorporate ? 'footer--corporate' : '',
        'vue-component',
      ];
    },
    isCorporate() {
      return !this.dataValue?.brandLogos;
    },
    style() {
      return [this.dataValue?.bgColor ? `background-color: ${this.dataValue.bgColor};` : ''];
    },
    dataValue() {
      return this.data ? { ...FooterData, ...Tools.getJSON(this.data) } : { ...FooterData };
    },
    links() {
      const lowerCaseLang = this.lang.toLowerCase();

      if (lowerCaseLang === 'de' || lowerCaseLang === '') {
        return this.dataValue.links;
      } else {
        const capitalizedLang = Tools.capitalize(this.lang);

        const links = this.dataValue[`links${capitalizedLang}`];

        return links ? links : this.dataValue.links;
      }
    },
    locations() {
      const newLocations = [];

      newLocations.push({
        name: this.dataValue.name,
        street: this.dataValue.street,
        postalCode: this.dataValue.postalCode,
        city: this.dataValue.city,
        country: this.dataValue.country,
        mail: this.dataValue.mail,
      });

      if (this.dataValue.additionalLocations && this.dataValue.additionalLocations.length) {
        newLocations.push(...this.dataValue.additionalLocations);
      }

      return newLocations;
    },
  },
  mounted() {
    this.bgColorRgbaValue = this.bgColorRgba();
  },
  methods: {
    bgColorRgba() {
      const root = this.$refs.root;

      if (!root) return null;

      const bgColor = window.getComputedStyle(this.$refs.root).getPropertyValue('background-color');
      const rgb = bgColor.replace(/[^\d,]/g, '').split(',');

      return `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, 1)`;
    },
  },
  props: {
    data: Object,
    noMargin: {
      type: Boolean,
    },
    lang: String,
  },
};
</script>
