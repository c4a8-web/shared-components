const highlightTeaserInfos = {
  tagName: 'highlight-teaser-infos',
  // data() {
  //   return {
  //     maxTags: 3,
  //   };
  // },
  // computed: {
  // },
  template: `
    <div class="highlight-teaser__infos" >
      <div class="highlight-teaser__pagination" v-if="pagination"> {{ currentPage }} / {{ lastPage }}</div>
      {{ entry.logo  }}
      {{ entry.headline  }}
      {{ entry.subline }}
      {{ entry.ctaList.map(cta => cta.ctaText).join(', ')}}
    </div>
  `,
  props: {
    pagination: Boolean,
    currentPage: Number,
    lastPage: Number,
    entry: Object,
  },
};

export default {
  tagName: 'highlight-teaser',
  components: {
    'highlight-teaser-infos': highlightTeaserInfos,
  },
  data() {
    return {
      index: 0,
    };
  },
  computed: {
    classList() {
      return ['highlight-teaser', this.spacing, 'vue-component'];
    },
    limitValue() {
      const defaultLimit = 3;
      const radix = 10;
      const limit = parseInt(this.limit, radix);

      return limit > 0 ? limit : defaultLimit;
    },
    activeEntry() {
      return this.entries[this.index];
    },
    currentPage() {
      return this.index + 1;
    },
    lastPage() {
      return this.entries.length;
    },
    pagination() {
      return this.entries.length > 1;
    },
    limitedEntries() {
      return this.entries.slice(0, this.limitValue);
    },
    sliderOptions() {
      return {
        slidesToShow: 1,
        slidesToScroll: 1,
        // prevArrow: '<span class="slick__arrow-left rounded-circle"></span>',
        // nextArrow: '<span class="slick__arrow-right rounded-circle"></span>',
        dots: true,
        centerMode: false,
        // fade: true,
        dotsClass: 'slick-pagination is-default',
        responsive: [
          // {
          //   breakpoint: 1200,
          //   settings: {
          //     slidesToShow: 1,
          //     slidesToScroll: 1,
          //   },
          // },
          {
            breakpoint: 1024,
            settings: {
              centerMode: true,
              infinite: false,
              centerPadding: '30px',
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false,
              fade: false,
            },
          },
          {
            breakpoint: 576,
            settings: {
              centerMode: true,
              infinite: false,
              centerPadding: '20px',
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false,
              fade: false,
            },
          },
        ],
      };
    },
  },
  methods: {},
  props: {
    entries: Array,
    limit: Number,
    spacing: String,
  },
  // TODO implement slider and give options to it. have desktop have an overlay with the infos being stuck to the right and the "real" infos under that as hidden
  template: `
    <div :class="classList">
      <div class="highlight-teaser__container">
        <slider :options="sliderOptions" :hide-background="true">
          <div class="highlight-teaser__entry" v-for="(entry, index) in limitedEntries" :key="index">
            <v-img :img="entry.image.img" :alt="entry.image.alt" :cloudinary="entry.image.cloudinary" class="highlight-teaser__image" />
            <highlight-teaser-infos :pagination="pagination" :current-page="currentPage" :last-page="lastPage" :entry="entry" />
          </div>
        </slider>

        <div class="highlight-teaser__overlay">
          <div class="highlight-teaser__overlay-container container">
            <div class="highlight-teaser__overlay-infos">
              <highlight-teaser-infos :pagination="pagination" :current-page="currentPage" :last-page="lastPage" :entry="activeEntry" />
            </div>
          </div>
        </div>

        <div class="highlight-teaser__content-container">
          <div class="highlight-teaser__entry" v-for="(entry, index) in limitedEntries" :key="index">
            <v-img :img="entry.image.img" :alt="entry.image.alt" :cloudinary="entry.image.cloudinary" class="highlight-teaser__image" />
          </div>
        </div>
        <div class="highlight-teaser__infos-container">
          <div class="highlight-teaser__infos" >
            <div class="highlight-teaser__pagination" v-if="pagination"> {{ currentPage }} / {{ lastPage }}</div>
            {{ activeEntry.logo  }}
            {{ activeEntry.headline  }}
            {{ activeEntry.subline }}
            {{ activeEntry.ctaList.map(cta => cta.ctaText).join(', ')}}
          </div>
        </div>
      </div>
    </div>
  `,
};
