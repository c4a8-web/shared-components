import Tools from '../tools.js';
import FooterData from '../data/footer-data.js';

export default {
  tagName: 'v-footer',
  computed: {
    classList() {
      return ['footer text-white', !Tools.isTrue(this.noMargin) ? 'mt-8 mt-lg-11' : '', 'vue-component'];
    },
    style() {
      return [this.dataValue?.bgColor ? `background-color: ${this.dataValue.bgColor};` : ''];
    },
    dataValue() {
      return this.data ? { ...FooterData, ...Tools.getJSON(this.data) } : { ...FooterData };
    },
    links() {
      if (this.lang === 'en') {
        return this.dataValue.linksEn;
      } else {
        return this.dataValue.links;
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
  props: {
    data: Object,
    noMargin: {
      default: null,
    },
    lang: String,
  },
  template: `
    <footer :class="classList" :style="style">
      <div class="container">
        <div class="space-top-2 space-top-lg-3 space-bottom-1">
          <div class="row">
            <div :class="['col-lg-3', logo?.classes]" v-for="logo in dataValue.logos">
              <div class="mb-6">
                <a
                  :href="logo.url"
                  :target="logo.target"
                  aria-label="Front"
                  :class="['footer__logos-link d-block pr-6', logo.linkClasses ? logo.linkClasses : 'w-65 w-md-35 w-lg-90']"
                >
                  <v-img
                    cloudinary=true
                    v-bind="logo"
                  ></v-img>
                </a>
              </div>
            </div>
          </div>
          <div class="row justify-content-lg-between">
            <div class="col-lg-3 ml-lg-auto mb-2 mb-lg-0 footer__contacts">
              <ul class="footer__locations nav nav-sm nav-x-0 nav-white flex-column" v-for="location in locations">
                <li class="nav-item">
                  {{ location.name }}
                </li>
                <li class="nav-item" v-if="location.over">{{ location.over }}</li>
                <li class="nav-item">
                  {{ location.street }}
                </li>
                <li :class="['nav-item footer__address-block', location.postalReversed ? 'is-reversed' : '']">
                  <span class="footer__postal-code">{{ location.postalCode }}</span>
                  <span class="footer__city">{{ location.city }}</span>
                  <span class="footer__country">{{ location.country }}</span>
                </li>
                <li class="nav-item" v-if="location.number">
                  <a class="nav-link media" :href="'tel:' + location.number">
                    <span class="media">
                      <span class="streamline-xs streamline-site-phone mr-3 d-flex"><slot name='icon-phone'></slot></span>
                      <span class="media-body">
                        {{ location.number }}
                      </span>
                    </span>
                  </a>
                </li>
                <li :class="['nav-item', locations.length > 1 ? 'pt-4' : '']" v-if="location.mail">
                  <a class="nav-link media pt-3" :href="'mailto:' + location.mail">
                    <span class="media">
                      <span class="streamline-xs streamline-site-mail mt-1 mr-3 d-flex"><slot name='icon-mail'></slot></span>
                      <span class="media-body">
                        {{ location.mail }}
                      </span>
                    </span>
                  </a>
                </li>
              </ul>

              <div class="footer__partner-row col-lg-9">
                <div class="row no-gutters ml-lg-4">
                  <div :class="['footer__partner-images col-lg-6 w-90 w-lg-100', index === 1 ? 'pl-lg-5': 'pr-lg-5']" v-for="(partner, index) in dataValue.partners" :style="index === dataValue.partners.length-1 ? 'padding-left: 2rem !important;padding-right: 0rem !important;' : ''">
                    <v-img
                      cloudinary=true
                      v-bind="partner"
                      class="footer__partner-image"
                    ></v-img>
                  </div>
                </div>
              </div>

              <template v-for="(highlight, index) in dataValue.highlights">
                <span v-if="highlight.title" class="d-block space-top-2 mb-n7 w-90 w-lg-100 pr-6">{{ highlight.title }}</span>
                <a :href="highlight.url" :target="highlight.target" :class="['footer__highlight-link d-block space-top-1', index === 0 ? 'mt-3': '', highlight.classes ? highlight.classes : 'w-90']">
                  <v-img
                    cloudinary=true
                    v-bind="highlight"
                  ></v-img>
                </a>
              </template>
              <hr class="d-lg-none mt-5">
            </div>

          </div>
        </div>

        <hr class="mx-lg-3">

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
                  <a class="btn btn-xs btn-icon btn-soft-light" :title="social.title" :href="social.url" target="_blank" rel="noopener">
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
  `,
};
