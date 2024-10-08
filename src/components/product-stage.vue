<template>
  <section class="product-stage position-relative overflow-hidden" :style="{ backgroundColor: bgColor }">
    <div class="svg-shape-animation">
      <svg
        class="position-absolute"
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 1440 965"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.0591615"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0 0L316 695L1441 965L0 840V0Z"
          fill="url(#paint0_linear)"
        />
        <path
          opacity="0.0339753"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M747 147L1439 965L1440 0H340L747 147Z"
          fill="black"
        />
        <path
          opacity="0.174464"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M646 0L1261 222L1368 685L628 890L646 0Z"
          fill="white"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="-327.295"
            y1="767.888"
            x2="135.719"
            y2="1396.04"
            gradientUnits="userSpaceOnUse"
          >
            <stop />
            <stop offset="1" stop-color="white" stop-opacity="0.01" />
          </linearGradient>
        </defs>
      </svg>
    </div>

    <div class="product-stage__content container position-relative">
      <div class="space-top-2 space-top-lg-4 space-top-xl-5 text-white space-bottom-1 space-bottom-lg-2">
        <h1>{{ stage.headline }}</h1>
        <p v-if="stage.description" class="col-lg-8 lead mt-5 px-0" v-html="stage.description"></p>
      </div>

      <pricing-slider
        v-if="stage.slider && products"
        :slider="stage.slider"
        :tooltip="stage.tooltip"
        :modal-id="stage.modalId"
      />

      <div v-if="stage.additionalCopy" class="row justify-content-center py-6">
        <div class="text-center" v-html="stage.additionalCopy"></div>
      </div>

      <div v-if="stage.buttons" class="row justify-content-center py-6">
        <cta-list :list="stage.buttons" />
      </div>
      <div v-else class="space-bottom-2 space-bottom-lg-3"></div>

      <ul v-if="cards" class="row nav nav-pills" :class="{ 'px-1 px-lg-0': cards.tabs }" role="tablist">
        <li
          v-for="(card, index) in cards.list"
          :key="index"
          :class="[
            'col-lg-' + 12 / cards.list.length,
            { 'px-1 px-lg-3 nav-item': cards.tabs, 'mb-6 mb-md-8 mb-lg-0': !cards.tabs },
          ]"
        >
          <a
            v-if="card.link"
            :href="card.link.href"
            :target="card.link.target"
            class="product-stage__tab h-100 rounded position-relative d-block"
            :class="{ active: cards.tabs && index === 0 }"
            :id="card.id ? card.id + '-tab' : ''"
            data-toggle="pill"
            role="tab"
            :aria-controls="card.id"
            :aria-selected="cards.tabs && index === 0"
          >
            <div
              class="product-stage__tab-content position-relative h-100"
              :class="{ 'product-stage__tab-content--alternative-border': cards.tabs }"
            >
              <div :class="['rounded', { 'p-2 p-lg-8': card.link, 'p-8 bg-white shadow-lg': !card.link }]">
                <div class="d-flex flex-column align-items-center position-relative z-index-2">
                  <h2
                    v-if="card.title"
                    :class="['font-size-3 mb-2 mb-md-6 text-center', { 'text-primary': card.link }]"
                  >
                    {{ card.title }}
                  </h2>
                  <p v-if="card.description" class="mb-6 flex-grow-1">{{ card.description }}</p>
                  <cta
                    v-if="card.cta !== card.href"
                    :text="card.cta.text"
                    :href="card.cta.href"
                    :target="card.cta.target"
                    :skin="card.cta.skin"
                    classes="align-self-center z-index-2"
                  />
                </div>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>

    <template v-if="shape">
      <svg-shape
        v-if="shape.isActive !== false"
        align="bottom"
        peak="left"
        :obliquity="4"
        :classes="shapeClasses"
        :color="shape.color"
      />
    </template>
  </section>
</template>
<script>
export default {
  tagName: 'product-stage',
  props: {
    stage: Object,
    products: Object,
  },
  computed: {
    shapeClasses() {
      return this.overlapping ? 'position-absolute bottom-0 left-0 z-index-1 w-100' : 'position-relative z-index-1';
    },
    bgColor() {
      return this.stage.bgColor || 'var(--color-primary)';
    },
    shape() {
      return this.stage.shape || null;
    },
    cards() {
      return this.stage.cards || null;
    },
    overlapping() {
      return (this.cards && this.stage.headline) || this.stage.description;
    },
  },
};
</script>
