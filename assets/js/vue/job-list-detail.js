import RecruiterBox from '../recruiter-box.js';
import State from '../state.js';
import Loading from '../loading.js';

export default {
  tagName: 'job-list-detail',
  computed: {
    classList() {
      return [
        'job-list__detail page-detail',
        `${this.hasLoading ? State.LOADING : ''}`,
        `${this.hasLoader ? 'loading' : ''}`,
        `${this.hasBack ? 'page-detail--has-back' : ''}`,
        'vue-component',
      ];
    },
    headlineClassList() {
      return `job-list__detail-headline page-detail__headline ${this.headlineClasses ? this.headlineClasses : ''}`;
    },
    headlineLevelValue() {
      return this.headlineLevel ? this.headlineLevel : 'h1';
    },
    style() {
      return `--page-detail-color: var(${this.color}); --color-icon-hover-color: var(--page-detail-color)`;
    },
    color() {
      return this.detailColor ? this.detailColor : '--color-job-list-detail';
    },
  },
  mounted() {
    this.loading = new Loading(this.$refs['job-list-detail'], () => {
      this.hasLoader = true;
    });

    this.init();
  },
  data() {
    return {
      loadingDelay: 300,
      loading: {},
      hasLoading: true,
      hasLoader: false,
      api: {},
      hasBack: false,
      entryData: {},
    };
  },
  methods: {
    init() {
      this.loading.on(true);

      this.api = new RecruiterBox({
        // ...this.options, // TODO check what i need in options
        ...(this.apiUrl && { apiUrl: this.apiUrl }),
        client_name: this.clientName,
      });

      this.showBackButton();

      const hasLanguageLoader = window.i18n?.loader;

      if (hasLanguageLoader) {
        hasLanguageLoader.then(() => {
          this.loadJob();
        });
      } else {
        this.loadJob();
      }
    },
    showBackButton() {
      if (document.referrer.indexOf(document.location.host) !== -1) {
        this.hasBack = true;
      }
    },
    loadJob() {
      setTimeout(() => {
        this.api
          ?.getOpening()
          .then((response) => response.json())
          .then((data) => {
            this.handleJob(data);
          })
          .catch((error) => {
            console.error('Job-list Error:', error);
          });
      }, this.loadingDelay);
    },
    handleJob(entry) {
      const localEntry = entry.objects ? entry.objects[0] : entry;

      if (localEntry && localEntry.location) {
        const gender = window.i18n?.translate('gender');

        const { city } = localEntry?.location || {};
        const { title, position_type, team, description } = localEntry;

        const entryData = {
          city,
          description,
          title,
          gender,
          team,
          positionType: position_type !== '' ? window.i18n?.translate(position_type) : null,
          isInvisible: this.maxItems > 0 && i > this.maxItems - 1 ? true : false,
          ...(this.base && { ...this.base }),
        };

        // TODO base is missing
        // TODO hide loading is missing
        // TODO check bindevents

        // this.root.classList.add(State.HIDE_LOADING);
        this.loading.off(true, true);

        // this.bindEvents();
        this.update(entryData);

        // this.templates.setPreRender(() => {
        //   this.root.classList.add(State.HIDE_LOADING);
        //   this.loading.off(true);
        // });

        // this.templates?.load('job-list-detail', entryData).then((html) => {
        //   this.appendHtml(html);
        //   this.bindEvents();
        //   this.stopLoading();
        // });
      } else {
        console.error('handleJob has no entry');
      }
    },
    stopLoading() {
      setTimeout(() => {
        this.hasLoading = false;
      }, this.loadingDelay);
    },
    update(entryData) {
      console.log('update ~ entryData', entryData);
      this.entryData = entryData;

      this.stopLoading();
    },
  },
  props: {
    detailColor: String,
    clientName: String,
    jobId: String,
    apiUrl: String,
    base: String,
    headlineLevel: String,
    headlineClasses: String,
    // gender: String,
    ctaText: String,
    ctaButton: Boolean,
    form: Object,
    personQuote: Object,
    googleMaps: Object,
    modalSuccess: Object,
  },
  template: `
    <div :class="classList" :style="style" :data-id="clientName" :data-job-id="jobId" :data-api-url="apiUrl" :data-base="base" ref="job-list-detail">
      <div class="job-list__detail-container page-detail__container container">
        <div class="job-list__detail-start page-detail__start row">
          <div class="job-list__sticky-start page-detail__sticky-start col-md-11 col-lg-5">
            <div class="job-list__detail-intro page-detail__intro js-sticky-block"
              data-hs-sticky-block-options='{
                "parentSelector": ".job-list__sticky-start",
                "breakpoint": "lg",
                "startPoint": ".job-list__sticky-start",
                "endPoint": ".job-list__sticky-end",
                "stickyOffsetTop": 200,
                "stickyOffsetBottom": 20
              }'
            >
              <div class="job-list__detail-back page-detail__back page-detail__animation-3 back back--animated">
                <icon icon='arrow' direction='left' hover=true circle=true />
              </div>
              <headline :text="entryData?.title" :level="headlineLevelValue" :classes="headlineClassList" />
              <span class="job-list__detail-gender">{{entryData?.gender}}</span>
              <div class="job-list__detail-share">
                <!-- TODO share bar -->
              </div>
              <div class="job-list__detail-cta">
                <cta :text="ctaText" :button="ctaButton" />
              </div>
            </div>
          </div>
          <div class="job-list__detail-content page-detail__content page-detail__animation-3 col-md-11 offset-lg-1 col-lg-6">
            <!-- job list detail can switch to profile based on url parameter -->
            <div class="job-list__detail-description page-detail__description richtext" v-html="entryData?.description"></div>
            <div v-if="personQuote" class="job-list__detail-quote">
              <slot name="person-quote" />
            </div>
            <div class="job-list__detail-maps">
              <slot name="google-maps" />
            </div>
          </div>
        </div>
      </div>
      <div class="job-list__sticky-end"></div>
      <modal
        :client-name="clientName"
        :api-url="apiUrl"
        :job-id="jobId"
      >
        <slot name="modal-application" />
      </modal>
    </div>
  `,
};

// TODO change person quote slot to component after img is migrated <person-quote :img="personQuote.img" :text="personQuote.text" :name="personQuote.name" />
