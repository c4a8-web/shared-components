import JobListings from "../assets/js/job-listings.js";
import State from "../assets/js/state.js";
import Loading from "../assets/js/loading.js";
import Modal from "../assets/js/modal.js";
import Tools from "../assets/js/tools.js";

export default {
  tagName: "job-list-detail",
  computed: {
    classList() {
      return [
        "job-list__detail page-detail",
        `${this.hasLoading ? State.LOADING : ""}`,
        `${this.hasLoader ? "loading" : ""}`,
        `${this.hideLoading ? State.HIDE_LOADING : ""}`,
        `${this.hasBack ? "page-detail--has-back" : ""}`,
        "vue-component",
      ];
    },
    headlineClassList() {
      return `job-list__detail-headline page-detail__headline ${this.headlineClasses ? this.headlineClasses : ""}`;
    },
    headlineLevelValue() {
      return this.headlineLevel ? this.headlineLevel : "h1";
    },
    style() {
      return `--page-detail-color: var(${this.color}); --color-icon-hover-color: var(--page-detail-color)`;
    },
    color() {
      return this.detailColor ? this.detailColor : "--color-job-list-detail";
    },
    baseData() {
      return this.base ? JSON.parse(this.base) : {};
    },
    getUuid() {
      return "job-list-detail-style";
    },
  },
  mounted() {
    this.loading = new Loading(this.$refs["job-list-detail"], () => {
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
      videoInner: null,
      jobIdValue: null,
    };
  },
  methods: {
    init() {
      const mockApplyUrl = this.mockApplyUrl;
      const mockDocumentsUrl = this.mockDocumentsUrl;

      this.api = new JobListings({
        ...(this.apiUrl && { apiUrl: this.apiUrl }),
        client_name: this.clientName,
        apiKey: this.apiKey,
        mockApplyUrl,
        mockDocumentsUrl,
      });

      this.api.setLang(Tools.getLang());

      const jobId = this.api.getJobId() || this.jobId;

      this.jobIdValue = jobId;

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
        ?.getOpening(this.jobIdValue)
        .then((response) => response.json())
        .then((data) => {
          this.handleJob(data);
        })
        .catch((error) => {
          console.error("Job-list Error:", error);
        });
    },
    handleCta() {
      Modal.open(this.$refs["modal-component"]?.modal);
    },
    handleJob(entry) {
      Tools.sleep(this.sleepDelay).then(() => {
        const localEntry = entry.objects ? entry.objects[0] : entry;

        if (localEntry) {
          const gender = window.i18n?.translate("gender");
          const { title, description } = localEntry;

          const entryData = {
            description,
            title,
            gender,
          };

          this.hideLoading = true;

          this.update(entryData);
        } else {
          console.error("handleJob has no entry");
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
      const url = `${this.api.jobDataUrl}${this.jobIdValue}.json`;

      this.addCustomStyle();

      return fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.videoInner) return (this.videoInner = data.videoInner);

          this.personQuote = data.personQuote;
        })
        .catch((error) => {
          console.error("Job-list-Detail Local Job Data Error:", error);
        });
    },
    addCustomStyle() {
      const style = document.createElement("style");

      style.id = this.getUuid;

      document.getElementById(this.getUuid)?.remove();

      style.innerHTML = `
        .show-in-${this.jobIdValue}.d-none {
          display: block !important;
        }
      `;

      document.head.appendChild(style);
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
    googleMaps: Object,
    modalSuccess: Object,
    modalError: Object,
    apiKey: String,
    mockApplyUrl: String,
    mockDocumentsUrl: String,
  },
  template: `
    <div :class="classList" :style="style" :data-id="clientName" :data-job-id="jobIdValue" :data-api-url="apiUrl" ref="job-list-detail">
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
              <span class="job-list__detail-gender">{{ entryData?.gender }}</span>
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
            <div class="job-list__detail-description page-detail__description has-no-border richtext" v-html="entryData?.description"></div>
            <video-inner variant="reversed" :video="videoInner.video" v-if="videoInner"></video-inner>

            <div v-if="personQuote" class="job-list__detail-quote">
              <person-quote :img="personQuote.img" :text="personQuote.text" :name="personQuote.name" />
            </div>

            <!-- <div class="job-list__detail-maps">
              <slot name="google-maps" />
            </div> -->

          </div>
        </div>
      </div>
      <div class="job-list__sticky-end"></div>
      <modal
        ref="modal-component"
        :client-name="clientName"
        :api-url="apiUrl"
        :job-id="jobIdValue"
        :api-key="apiKey"
        :mock-apply-url="mockApplyUrl"
        :mock-documents-url="mockDocumentsUrl"
        :modal-error="modalError"
      >
        <slot name="modal-application" />
      </modal>
    </div>
  `,
};
