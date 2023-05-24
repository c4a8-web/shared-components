import Tools from '../tools.js';

export default {
  tagName: 'v-footer',
  computed: {
    classList() {
      return ['footer text-white', !Tools.isTrue(this.noMargin) ? 'mt-8 mt-lg-11' : '', 'vue-component'];
    },
    style() {
      return [this.data?.bgColor ? `background-color: ${this.data.bgColor};` : ''];
    },
    dataValue() {
      return this.data ? Tools.getJSON(this.data) : {};
    },
    links() {
      if (this.lang === 'en') {
        return this.dataValue.linksEn;
      } else {
        return this.dataValue.links;
      }
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
            <div :class="['col-lg-3', logo?.classes]" v-for="logo in data.logos">
              <div class="mb-6">
                <a :href="logo.url" :target="logo.target" aria-label="Front" class="d-block w-65 w-md-35 w-lg-90 pr-6">
                  <v-img
                    :img="logo.src"
                    :alt="logo.alt"
                    class="no-small img-responsive"
                    cloudinary=true
                  ></v-img>
                </a>
              </div>
            </div>
          </div>
          <div class="row justify-content-lg-between">
            <div class="col-lg-3 ml-lg-auto mb-2 mb-lg-0 footer__contacts">
              <!-- Nav Link -->
              <ul class="nav nav-sm nav-x-0 nav-white flex-column">
                <li class="nav-item">
                  {{ dataValue.name }}
                </li>
                <li class="nav-item">
                  {{ dataValue.street }}
                </li>
                <li class="nav-item">
                  {{ dataValue.postalCode }} {{ dataValue.city }}, {{ dataValue.country }}
                </li>
                <li class="nav-item">
                  <a class="nav-link media" href="tel:{{ dataValue.number }}">
                    <span class="media">
                      <span class="streamline-xs streamline-site-phone mr-3 d-flex">{% siteicons "site/phone" %}</span>
                      <span class="media-body">
                        {{ dataValue.number }}
                      </span>
                    </span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link media pt-0" href="mailto:{{ dataValue.mail }}">
                    <span class="media">
                      <span class="streamline-xs streamline-site-mail mt-1 mr-3 d-flex">{% siteicons "site/mail" %}</span>
                      <span class="media-body">
                        {{ dataValue.mail }}
                      </span>
                    </span>
                  </a>
                </li>
              </ul>
              <!-- End Nav Link -->
              <a href="{{ dataValue.isoUrl }}" target="_blank" class="d-block mt-3 space-top-1 w-65">
                <v-img
                  img="/logos/iso-27001-siegel.png"
                  alt="ISO 27001"
                  class="no-small img-responsive"
                  cloudinary=true
                ></v-img>
              </a>
              <a href="{{ dataValue.kununuUrl }}" target="_blank" class="d-block space-top-1 w-75" target="_blank" rel="noopener">
                {% cloudinary /v1626011982/logos/kununu-white.svg alt="Kununu Logo" class="no-small img-responsive" %}
              </a>
              <span class="d-block space-top-1 w-75">
                {% cloudinary /v1626015679/logos/isg-o365-white.svg alt="ISG Office 365 Leader" class="no-small img-responsive" %}
              </span>
              <span class="d-block space-top-1 w-75">
                {% cloudinary /v1626015449/logos/isg-security-white.svg alt="ISG Security Rising Star" class="no-small img-responsive" %}
              </span>
              <hr class="d-lg-none mt-5">
            </div>

            <div class="col-lg-9">
              <div class="row no-gutters ml-lg-4">
                <div class="col-lg-12">
                  <div class="w-lg-50" v-html="dataValue.introduction"></div>
                </div>
                <div class="col-lg-6 pr-lg-5 w-90 w-lg-100 space-top-1">
                  {% cloudinary /logos/msftLogos-Solutions-white.svg alt="Solutions Partner Designations" class="no-small img-responsive" %}
                </div>

                <div class="col-lg-6 pl-lg-5 w-90 w-lg-100 space-top-1">
                  {% cloudinary /logos/msftLogos-AdvanceSpecializations-white.svg alt="Advanced Specializations" class="no-small img-responsive" %}
                </div>
                <div class="col-lg-6 pr-lg-5 w-90 w-lg-100 space-top-1 ">
                  {% cloudinary /logos/msftLogos-PartnerOfTheYear-white.svg alt="Partner of the Year" class="no-small img-responsive" %}
                </div>
                <div class="col-lg-6 pr-lg-5 w-90 w-lg-100 space-top-1" style="padding-left: 2rem !important;padding-right: 0rem !important;">
                  {% cloudinary /logos/msftLogos-MisaMXDR-transparent.png alt="MISA" class="no-small img-responsive" %}
                </div>
              </div>
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
                  <a class="nav-link" :href="link.url">{{ link.title }}</a>
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
