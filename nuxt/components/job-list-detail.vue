<template>
  <div :class="classList" :style="style" :id="clientName" :jobId="jobIdValue" :apiUrl="apiUrl" ref="job-list-detail">
    <div class="job-list__detail-container page-detail__container container">
      <div class="job-list__detail-start page-detail__start row">
        <div class="job-list__sticky-start page-detail__sticky-start col-md-11 col-lg-5">
          <div
            class="job-list__detail-intro page-detail__intro js-sticky-block"
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
              <icon icon="arrow" direction="left" hover="true" circle="true" />
            </div>
            <headline :text="entryData?.title" :level="headlineLevelValue" :classes="headlineClassList" />
            <span class="job-list__detail-gender">{{ entryData?.gender }}</span>
            <div class="job-list__detail-share">
              <!-- TODO share bar -->
            </div>
            <div class="job-list__detail-cta page-detail__animation-3">
              <cta :text="ctaText" :button="ctaButton" @click="handleCta" />
            </div>
          </div>
        </div>
        <div
          class="job-list__detail-content page-detail__content page-detail__animation-3 col-md-11 offset-lg-1 col-lg-6"
        >
          <!-- job list detail can switch to profile based on url parameter -->
          <div
            class="job-list__detail-description page-detail__description has-no-border richtext"
            v-html="entryData?.description"
          ></div>
          <video-inner variant="reversed" :video="videoInner.video" v-if="videoInner"></video-inner>

          <!-- <div class="job-list__detail-maps">
              <slot name="google-maps" />
            </div> -->
        </div>
      </div>
    </div>
    <div class="job-list__sticky-end"></div>
    <modal
      ref="modal-component"
      :clientName="clientName"
      :apiUrl="apiUrl"
      :jobId="jobIdValue"
      :apiKey="apiKey"
      :mockApplyUrl="mockApplyUrl"
      :mockDocumentsUrl="mockDocumentsUrl"
      :error="modalError"
      :success="modalSuccess"
      :form="form"
      :application="true"
    />
  </div>
</template>

<script>
import { useI18n } from '#imports';

import JobListings from '../utils/job-listings.js';
import State from '../utils/state.js';
import Loading from '../utils/loading.js';
import Modal from '../utils/modal.js';
import Tools from '../utils/tools.js';

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
    getUuid() {
      return 'job-list-detail-style';
    },
  },
  setup() {
    const { $getLocale } = useI18n();

    return { locale: $getLocale() };
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

      const lang = this.lang || this.locale;

      this.api.setLang(lang);

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
          console.error('Job-list Error:', error);
        });
    },
    handleCta() {
      Modal.open(this.$refs['modal-component']?.modal);
    },
    handleJob(entry) {
      Tools.sleep(this.sleepDelay).then(() => {
        const localEntry = entry.objects ? entry.objects[0] : entry;

        if (localEntry) {
          const gender = this.$t('gender');
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
      const url = `${this.api.jobDataUrl}${this.jobIdValue}.json`;

      this.addCustomStyle();

      return fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.videoInner) return (this.videoInner = data.videoInner);

          this.personQuote = data.personQuote;
        })
        .catch((error) => {
          console.error('Job-list-Detail Local Job Data Error:', error);
        });
    },
    addCustomStyle() {
      const style = document.createElement('style');

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
    lang: String,
  },
};
</script>
<style lang="scss">
$job-list-detail-transition-1-delay: 0.9s;
$job-list-detail-transition-2-delay: 1.3s;
$job-list-detail-transition-3-delay: 1.8s;

.job-list__detail {
  &.is-loading {
    &::before {
      width: 0;
    }

    .job-list__detail-animation-1,
    .job-list__detail-animation-2,
    .cta,
    .job-list__detail-gender,
    .job-list__detail-headline {
      opacity: 0;
      transition: none;
      pointer-events: none;
    }
  }

  .job-list__detail-animation-1,
  .job-list__detail-headline {
    @include font-style($style: 'h2-font-size', $weight: 'bold');

    color: var(--color-job-list-detail-copy);
    word-break: break-word;
  }

  .job-list__detail-gender {
    transition: opacity 0.6s $job-list-detail-transition-2-delay $animation-transition;
  }
}

.job-list__detail-start {
  padding-top: spacing(36);
}

.job-list__detail-gender {
  @include font-style($style: 'font-size-4', $weight: bold);
}

.job-list__detail-share {
  margin-bottom: spacing(10);
}

.job-list__detail-maps {
  margin-top: spacing(22);
}

job-list-detail {
  min-height: 100vh;
  display: block;
}

.job-list__detail-description {
  &.richtext {
    span,
    p {
      font-family: inherit !important;
    }
  }
}
</style>
