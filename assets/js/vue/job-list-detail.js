import RecruiterBox from '../recruiter-box.js';
import State from '../state.js';
import Loading from '../loading.js';
import Modal from '../modal.js';
import Tools from '../tools.js';

export default {
  tagName: 'job-list-detail',
  computed: {
    classList() {
      return [
        'job-list__detail page-detail',
        `${this.hasLoading ? State.LOADING : ''}`,
        `${this.hasLoader ? 'loading' : ''}`,
        `${this.hideLoading ? State.HIDE_LOADING : ''}`,
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
    baseData() {
      return this.base ? JSON.parse(this.base) : {};
    },
  },
  mounted() {
    this.loading = new Loading(this.$refs['job-list-detail'], () => {
      this.hasLoader = true;
    });

    this.loading.on(true);

    this.init();
  },
  data() {
    return {
      loadingDelay: 300,
      sleepDelay: 1300,
      loading: {},
      hasLoading: true,
      hasLoader: false,
      hideLoading: false,
      api: {},
      hasBack: false,
      entryData: {},
      personQuote: null,
    };
  },
  methods: {
    init() {
      this.api = new RecruiterBox({
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
      // TODO wait for all promises. right now it is working since vue is reactive so maybe we don't need that
      this.loadLocalJobData();
      this.api
        ?.getOpening()
        .then((response) => response.json())
        .then((data) => {
          this.handleJob(data);
        })
        .catch((error) => {
          console.error('Job-list Error:', error);
        });
    },
    handleCta() {
      Modal.open(this.$refs['modal-component']?.modal);
    },
    handleJob(entry) {
      Tools.sleep(this.sleepDelay).then(() => {
        const localEntry = entry.objects ? entry.objects[0] : entry;

        if (localEntry && localEntry.location) {
          const gender = window.i18n?.translate('gender');
          const { title, description } = localEntry;

          const entryData = {
            description,
            title,
            gender,
          };

          this.hideLoading = true;

          this.update(entryData);
        } else {
          console.error('handleJob has no entry');
        }
      });
    },
    stopLoading() {
      setTimeout(() => {
        this.loading.off(true, true);

        this.hasLoading = false;
      }, this.loadingDelay);
    },
    update(entryData) {
      this.entryData = entryData;

      this.stopLoading();
    },
    loadLocalJobData() {
      const jobId = this.api.getJobId() || this.jobId;
      const url = `${this.api.jobDataUrl}${jobId}.json`;

      return fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          this.personQuote = data.personQuote;
        })
        .catch((error) => {
          console.error('Job-list-Detail Local Job Data Error:', error);
        });
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
    ctaText: String,
    ctaButton: Boolean,
    form: Object,
    // personQuote: Object,
    googleMaps: Object,
    modalSuccess: Object,
  },
  template: `
    <div :class="classList" :style="style" :data-id="clientName" :data-job-id="jobId" :data-api-url="apiUrl" ref="job-list-detail">
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
                <cta :text="baseData?.ctaText" :button="baseData?.ctaButton" @click="handleCta" />
              </div>
            </div>
          </div>
          <div class="job-list__detail-content page-detail__content page-detail__animation-3 col-md-11 offset-lg-1 col-lg-6">
            <!-- job list detail can switch to profile based on url parameter -->
            <div class="job-list__detail-description page-detail__description richtext" v-html="entryData?.description"></div>
            <div v-if="personQuote" class="job-list__detail-quote">
              <person-quote :img="personQuote.img" :text="personQuote.text" :name="personQuote.name" />
            </div>
            <div class="job-list__detail-maps">
              <slot name="google-maps" />
            </div>
          </div>
        </div>
      </div>
      <div class="job-list__sticky-end"></div>
      <modal
        ref="modal-component"
        :client-name="clientName"
        :api-url="apiUrl"
        :job-id="jobId"
      >
        <slot name="modal-application" />
      </modal>
    </div>
  `,
};
