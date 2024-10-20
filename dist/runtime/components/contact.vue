<template>
  <svg-shape
    v-if="svgShape"
    :align="svgShape.align"
    :peak="svgShape.peak"
    spacing="mt-8 mt-lg-10"
    color="var(--color-bg-grey)"
  />
  <div :class="classList" :style="styleObject" v-if="contact">
    <div :class="contactContainerClass">
      <div :class="contactRowClass">
        <div :class="['contact__form', contactFormClass]" v-if="!collapsed" data-utility-animation-step="1">
          <headline :text="contact.headline" :classes="contact.headlineClasses" :level="level" />
          <span class="contact__subline font-weight-bold font-size-2">{{ contact.subline }}</span>
          <formular v-if="contact.form" :form="contact.form" :ajax="ajax" uncentered="false" />
          <div v-if="contact.buttons" class="pt-4 pt-lg-6 pb-6">
            <cta-list :list="contact.buttons" />
          </div>
        </div>

        <div :class="['contact__box', contactBoxClass]" data-utility-animation-step="1">
          <div :class="['contact__person', contactLight]">
            <template v-if="quote">
              <div class="contact__person-quote">
                <div class="contact__icon">
                  <icon icon="quote" />
                </div>
                <div class="contact__image-quote">
                  <div class="contact__image-spacer">
                    <v-img
                      :img="contact.person.image"
                      :cloudinary="contact.person.cloudinary"
                      :alt="contact.person.alt"
                      preset="cardSmall"
                      lazy
                    />
                  </div>
                </div>
                <div class="contact__quote font-size-3 middle font-weight-light">{{ contact.person.quote }}</div>
                <div class="d-flex flex-column">
                  <span>{{ contact.person.quotee }}</span>
                  <span class="font-weight-light">{{ contact.person.quoteeTitle }}</span>
                </div>
              </div>
            </template>
            <template v-else>
              <div class="contact__image">
                <v-img
                  :img="contact.person.image"
                  :cloudinary="contact.person.cloudinary"
                  :alt="contact.person.alt"
                  preset="cardSmall"
                  lazy
                />
              </div>
              <div class="contact__name font-size-4 my-6 mx-5">{{ contact.person.name }}</div>
              <div class="contact__details font-size-2 position-relative py-2 d-flex align-items-center flex-wrap">
                <div
                  v-for="(detail, index) in contact.person.details"
                  :key="index"
                  class="contact__detail w-100 px-5 d-flex align-items-center"
                  :class="{ 'mb-3 mb-lg-4': !index === contact.person.details.length - 1 }"
                >
                  <a :href="detail.href" class="d-flex custom">
                    <span class="streamline-sm mr-4">
                      <site-icons v-if="detail.icon === 'site/mail'" icon="site/mail" />
                      <site-icons v-else icon="site/phone" />
                    </span>
                    <span class="contact__detail-text">{{ detail.text }}</span>
                  </a>
                  <div v-if="detail.notes" class="contact__notes">
                    <span class="contact__notes-spacing streamline-sm mr-4">
                      <site-icons v-if="detail.icon === 'site/mail'" icon="site/mail" />
                      <site-icons v-else icon="site/phone" />
                    </span>
                    {{ detail.notes }}
                  </div>
                </div>
                <div
                  v-if="contact.person.number"
                  class="contact__number w-100 px-5 d-flex align-items-center mb-3 mb-lg-4"
                >
                  <a :href="'tel:' + contact.person.number" class="custom">
                    <site-icons icon="site/phone" />
                    {{ contact.person.number }}
                  </a>
                </div>
                <div v-if="contact.person.mail" class="contact__mail w-100 px-5 d-flex align-items-center">
                  <a :href="'mailto:' + contact.person.mail" class="custom">
                    <site-icons icon="site/mail" />
                    {{ contact.person.mail }}
                  </a>
                </div>
              </div>
            </template>
          </div>

          <div v-if="quote" class="contact__detail-quote">
            <headline :text="contact.person.detailsHeader" level="h4" classes="contact__detail-headline" />
            <div
              v-for="(detail, index) in contact.person.details"
              :key="index"
              class="contact__detail font-size-2 w-100 d-flex align-items-center"
              :class="{ 'mb-3 mb-lg-4': !index === contact.person.details.length - 1 }"
            >
              <a :href="detail.href" class="custom">
                <span class="streamline-sm mr-4">
                  <site-icons v-if="detail.icon === 'site/mail'" icon="site/mail" />
                  <site-icons v-else icon="site/phone" />
                </span>
                {{ detail.text }}
              </a>
              <div v-if="detail.notes" class="contact__notes">
                <span class="contact__notes-spacing streamline-sm mr-4">
                  <site-icons v-if="detail.icon === 'site/mail'" icon="site/mail" />
                  <site-icons v-else icon="site/phone" />
                </span>
                {{ detail.notes }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import State from '../utils/state.js';

export default {
  tagName: 'contact',
  props: {
    contact: Object,
    collapsed: Boolean,
    ajax: Boolean,
    spacing: String,
    quote: {
      type: Boolean,
      default: false,
    },
    bgColor: String,
    color: String,
    boxBgColor: String,
    boxColor: String,
    level: String,
    headline: String,
    subline: String,
    form: Object,
    buttons: Array,
    person: Object,
    noTopSpacing: Boolean,
    light: Boolean,
    hasGreyBackground: Boolean,
    svgShape: Object,
  },
  computed: {
    classList() {
      return [
        'contact',
        this.contactVariantClass,
        'vue-component',
        !this.collapsed ? 'space-bottom-2 utility-animation utility-animation--percentage-offset' : '',
        { 'bg-grey': this.hasGreyBackground },
        !(this.noTopSpacing || this.svgShape || this.collapsed) ? this.spacing : '',
      ];
    },
    contactVariantClass() {
      return [
        this.svgShape && !this.quote ? 'contact--has-shape' : '',
        this.quote ? 'contact--quote' : '',
        this.collapsed ? State.COLLAPSED : '',
      ];
    },
    contactLight() {
      return this.light ? 'contact__person--light' : '';
    },
    contactBoxClass() {
      return this.collapsed ? '' : `col-md-10 col-lg-5 offset-lg-1 order-2`;
    },
    contactFormClass() {
      return this.collapsed ? '' : 'col-md-10 col-lg-6 order-1';
    },
    contactContainerClass() {
      return this.collapsed ? '' : 'container pt-8 pt-lg-10';
    },
    contactRowClass() {
      return this.collapsed ? '' : 'row justify-content-center';
    },
    styleObject() {
      return {
        '--color-contact-background': this.bgColor || this.contact?.bgColor,
        '--contact-copy-color': this.color || this.contact?.color,
        '--color-contact-box-background': this.boxBgColor || this.contact?.boxBgColor,
        '--contact-box-copy-color': this.boxColor || this.contact?.boxColor,
      };
    },
  },
};
</script>
