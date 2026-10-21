<template>
  <footer :class="classList" :style="style" ref="root">
    <div class="container">
      <div class="footer__content-row row">
        <div class="d-flex footer__content col-lg-12">
          <div class="footer__address col-12 col-lg-3 pl-0">
            <div :class="['mb-3', logo?.classes]" v-for="logo in dataValue.logos">
              <!--d-block-->
              <a :href="logo.url" :target="logo.target" aria-label="Front">
                <v-img :cloudinary="true" v-bind="logo" class="footer__product-logo w-auto" :lazy="true"></v-img>
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
                <v-img :cloudinary="true" v-bind="brandLogo" :lazy="true"></v-img>
              </a>
            </template>
          </div>

          <div class="footer__highlights col-12 col-lg-9">
            <div class="footer__partners">
              <template v-for="(partner, index) in dataValue.partners">
                <component
                  :is="partner.url ? 'a' : 'span'"
                  :href="partner.url"
                  :target="partner.target"
                  class="footer__partner-images w-100 d-flex justify-content-center"
                >
                  <v-img
                    :cloudinary="true"
                    v-bind="partner"
                    :class="['footer__partner-image', isCorporate ? 'w-100' : '']"
                    :lazy="true"
                  />
                </component>
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
      const capitalizedLang = Tools.capitalize(this.lang ?? '');

      return this.dataValue[`links${capitalizedLang}`] ?? this.dataValue.links;
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
<style>
@charset "UTF-8";
footer {
  z-index: 80;
  --color-footer-border: var(--color-white-50);
  --footer-spacing: 2.5rem;
  --footer-spacing-large: 3.75rem;
  --footer-partner-spacing: 1.5rem;
  --footer-content-spacing: var(--footer-spacing);
  --footer-icon-width: 22px;
  position: relative;
  padding-top: var(--footer-spacing-large);
}
@media (min-width: 992px) {
  footer.footer--corporate .footer__slider-container {
    margin-top: var(--footer-content-spacing);
  }
}
@media (min-width: 992px) {
  footer.footer--corporate .footer__highlights {
    display: flex;
    align-items: center;
  }
}
@media (min-width: 992px) {
  footer:not(.footer--corporate) .footer__partners {
    margin-bottom: var(--footer-spacing-large);
  }
}
footer .footer__socials .btn {
  color: var(--color-copy-light);
  background-color: rgba(247, 250, 255, 0.1);
}
footer .footer__socials .btn:hover {
  color: var(--color-copy);
  background-color: var(--color-gk-white);
}
footer .footer__socials .fab {
  font-size: 1.6em;
}
footer .list-inline-item .btn {
  display: inline-flex;
}
footer hr {
  border-color: var(--color-footer-border);
}
footer .footer__nav-link.nav-link {
  display: flex;
  align-items: flex-start;
}
footer .footer__nav-link.nav-link:not(.active) {
  color: var(--color-white-80);
}
footer .footer__nav-link.nav-link:not(.active):not([href]):hover {
  color: var(--color-white-80);
}
footer .footer__nav-link.nav-link:not(.active)[href]:hover {
  color: var(--color-gk-white);
}
footer .streamline-site-phone.streamline-xs .streamline-icon {
  width: 1.3rem;
  height: 1.3rem;
}
footer .footer__office-icon.icon {
  height: var(--footer-icon-width);
  width: var(--footer-icon-width);
  margin-top: 0.25rem;
}
footer .footer__office-icon.icon svg {
  width: 100%;
  height: 100%;
}
footer .streamline-site-mail .streamline-icon {
  width: var(--footer-icon-width);
}
footer .nav + .nav {
  margin-top: 1rem;
}
@media (min-width: 1200px) {
  footer {
    --footer-content-spacing: var(--footer-spacing-large);
    padding-top: 5rem;
  }
}

.footer__links {
  text-decoration: underline;
}

@media (min-width: 992px) {
  .footer__contacts {
    border-right: 1px solid var(--color-white-30);
  }
}

.footer__address-block.is-reversed {
  display: inline-flex;
  flex-wrap: wrap;
}
.footer__address-block.is-reversed > * {
  flex: 0 auto;
}
.footer__address-block.is-reversed .footer__city {
  order: 1;
}
.footer__address-block.is-reversed .footer__city::after {
  content: " ";
  display: inline-block;
}
.footer__address-block.is-reversed .footer__postal-code {
  order: 2;
}
.footer__address-block.is-reversed .footer__postal-code::after {
  display: none;
}
.footer__address-block.is-reversed .footer__country {
  order: 3;
}

.footer__postal-code::after {
  content: " ";
  display: inline-block;
}

.footer__contacts .footer__country {
  display: block;
  flex: 1 100%;
}

.footer__partner-image {
  width: 100%;
}
@media (min-width: 992px) {
  .footer__partner-image {
    width: auto;
    height: 100%;
  }
}

.footer__partners {
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-direction: column;
}
@media (min-width: 576px) {
  .footer__partners {
    flex-direction: row;
    gap: 1rem;
  }
}
@media (min-width: 992px) {
  .footer__partners {
    gap: inherit;
    justify-content: space-evenly;
  }
}

.footer__vertical-line {
  height: 1px;
  width: 100%;
  border-bottom: 1px solid var(--color-footer-border);
}
@media (min-width: 576px) {
  .footer__vertical-line {
    flex: 1 0 auto;
    position: relative;
    height: auto;
    width: auto;
    border-bottom: 0;
  }
}
@media (min-width: 992px) {
  .footer__vertical-line {
    flex-grow: 0;
  }
}

.footer__partner-images {
  padding: var(--footer-content-spacing) 0;
}
@media (min-width: 992px) {
  .footer__partner-images {
    padding: 0 var(--footer-partner-spacing);
  }
}

.footer__brand-logo-title {
  color: var(--color-white-50);
}

.footer__brand-logo-link {
  max-width: 110px;
}
.footer__brand-logo-link img {
  width: 100%;
}

.footer__images {
  padding-top: var(--footer-spacing);
}
@media (min-width: 992px) {
  .footer__images {
    padding-top: 0;
  }
}

.footer__content {
  display: flex;
  flex-wrap: wrap;
}
.footer__content > * {
  flex: 0 0 100%;
}
@media (min-width: 992px) {
  .footer__content {
    flex-wrap: nowrap;
  }
  .footer__content > * {
    flex: 0 0 auto;
  }
}

.footer__address {
  border-bottom: 1px solid var(--color-footer-border);
  padding-bottom: var(--footer-content-spacing);
}
@media (min-width: 992px) {
  .footer__address {
    padding-right: var(--footer-content-spacing);
    padding-bottom: 0;
    border-right: 1px solid var(--color-footer-border);
    border-bottom: 0;
    flex-shrink: 1;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
}

@media (min-width: 992px) {
  .footer__locations {
    flex-grow: 1;
  }
}

.footer__divider {
  margin-top: 0;
}
@media (min-width: 992px) {
  .footer__divider {
    margin-top: var(--footer-spacing);
  }
}

.footer__highlights {
  flex: 1 1 auto;
  width: 100%;
  overflow: hidden;
}
@media (min-width: 1200px) {
  .footer__highlights {
    padding-left: var(--footer-content-spacing);
  }
}

.footer__slider-container {
  width: 100%;
  padding-top: var(--footer-content-spacing);
  margin-bottom: var(--footer-content-spacing);
  border-top: 1px solid var(--color-footer-border);
}
@media (min-width: 992px) {
  .footer__slider-container {
    border-top: 0;
    padding-top: 0;
    margin-bottom: 0;
    padding: 0 2.5rem;
  }
}

.footer__slider {
  width: 100%;
  flex: 0 0 100%;
}

.footer__nav-icon {
  margin-right: 1rem;
  display: flex;
}

.footer__offices {
  display: flex;
  flex-wrap: wrap;
  max-width: 140px;
}

@media (min-width: 992px) {
  .footer__logos-link {
    max-width: 220px;
  }
}

.footer__mail {
  white-space: nowrap;
}

.footer__product-logo {
  height: 50px;
}
</style>
