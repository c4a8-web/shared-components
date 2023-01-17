import RecruiterBox from '../recruiter-box.js';
import State from '../state.js';
import Loading from '../loading.js';
import Tools from '../tools.js';

export default {
  tagName: 'job-list',
  computed: {
    classList() {
      return [
        'job-list container',
        `${this.hasLoading ? State.LOADING : ''}`,
        `${this.hasLoader ? 'loading' : ''}`,
        'vue-component',
      ];
    },
    expandClassList() {
      return [
        'job-list__expand-button',
        `${!this.hasExpand ? State.HIDDEN : ''}`,
        `${!this.isExpandVisible ? State.INVISIBLE : ''}`,
      ];
    },
    headlineClassValue() {
      return `job-list__headline ${this.headlineClasses}`;
    },
    headlineLevelValue() {
      return `${this.headlineLevel ? this.headlineLevel : 'h2'}`;
    },
    tagList() {
      return this.tags ? this.tags.split(',') : undefined;
    },
  },
  mounted() {
    this.api = new RecruiterBox({
      // ...this.options, // TODO check if we need options
      ...(this.jobId && { jobId: this.jobId }),
      ...(this.apiUrl && { apiUrl: this.apiUrl }),
      client_name: this.clientName,
    });

    if (this.lang) {
      this.api.setLang(this.lang);
    } else if (this.tagList) {
      this.api.setFilter({ tags: this.tagList });
    }

    this.loading = new Loading(this.$refs['job-list'], () => {
      this.hasLoader = true;
    });

    this.loading.on(true);

    this.init();
  },
  methods: {
    init() {
      const hasLanguageLoader = window.i18n?.loader;
      const method = this.jobId ? this.loadJob : this.loadJobs;

      if (hasLanguageLoader) {
        hasLanguageLoader.then(() => {
          method.bind(this)();
        });
      } else {
        method();
      }
    },
    handleExpand() {
      this.isExpandVisible = false;
      this.hasExpand = false;

      this.showJobs();
    },
    showJobs() {
      this.entries.forEach((entry) => {
        entry.isInvisible = false;
      });
    },
    loadJobData() {
      const url = `${this.api.jobDataUrl}jobs.json`;

      return fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          this.jobData = data;
        })
        .catch((error) => {
          console.error('Job-list Local Job Data Error:', error);
        });
    },
    loadJob(multiple) {
      const method = !multiple ? 'getOpening' : 'getAll';

      this.promises.push(this.loadJobData());

      this.api[method]()
        .then((response) => response.json())
        .then((data) => {
          this.handleJobs(data);
        })
        .catch((error) => {
          console.error('Job-list Error:', error);
        });
    },
    loadJobs() {
      this.loadJob(true);
    },
    handleJobs(data) {
      Tools.sleep(this.sleepDelay).then(() => {
        let localData = data;

        if (typeof localData.objects !== 'object') {
          const newObject = {
            objects: [localData],
            meta: localData?.meta,
          };

          localData = newObject;
        }

        this.data = localData;

        if (!this.data.meta) return this.loading.off();

        Promise.all(this.promises)
          .then(() => {
            const orderedList = this.orderList(localData.objects);

            this.filterJobs(data, orderedList);
          })
          .catch((error) => {
            console.error('Job-List Promises.all ~ error', error);
          });
      });
    },
    filterJobs(data, orderedList) {
      this.data.objects = orderedList;

      const gender = window.i18n?.translate('gender');
      const filteredList = [];

      let counter = 0;

      for (let i = 0; i < orderedList?.length; i++) {
        const entry = orderedList[i];
        const { city } = entry?.location || {};

        if (!entry) continue;

        const { title, position_type, team } = entry;

        const entryData = {
          city,
          title,
          gender,
          team,
          positionType: position_type !== '' ? window.i18n?.translate(position_type) : null,
          isInvisible: this.maxItems > 0 && counter > this.maxItems - 1 ? true : false,
          id: i,
        };

        if (this.isAvailableEntry(entry)) {
          filteredList[i] = entryData;
          counter++;
        }
      }

      this.entries = filteredList;

      if (this.maxItems > 0 && data.objects?.length > this.maxItems) {
        this.showExpandButton();
      }

      this.stopLoading();
    },
    orderList(list) {
      const orderedList = [];
      const unordedList = [];

      for (let i = 0; i < list.length; i++) {
        const entry = list[i];

        if (!entry) continue;

        const { id } = entry;

        if (!id) continue;

        const index = this.jobData?.order?.findIndex((item) => item === id);

        if (index !== -1) {
          orderedList[index] = entry;
        } else {
          unordedList.push(entry);
        }
      }

      return [...orderedList, ...unordedList];
    },
    showExpandButton() {
      this.hasExpand = true;

      setTimeout(() => {
        this.isExpandVisible = true;
      }, this.loadingDelay);
    },
    isAvailableEntry(data) {
      let result = true;

      if (data.tags.includes(this.api.hiddenTag)) return false;

      if (this.team) {
        const entryTeam = data.team?.toLowerCase();
        const filterTeam = this.team.toLowerCase();

        if (entryTeam === undefined || entryTeam?.indexOf(filterTeam) === -1) {
          result = false;
        }
      }

      return result;
    },
    stopLoading() {
      setTimeout(() => {
        this.loading.off(true, true);

        this.hasLoading = false;
      }, this.loadingDelay);
    },
    handleEntryClick(e) {
      const current = e.currentTarget;

      if (current && this.detailUrl) {
        const currentData = this.getData(current);
        // TODO load component in page and don't redirect

        const detailUrl = this.getDetailUrl(currentData);
        const url = Tools.generateUrl(currentData?.title, detailUrl, currentData?.id);

        document.location.href = url;
      }
    },
    getData(element) {
      let result = null;

      if (element && element.dataset.id && this.data?.objects) {
        result = this.data.objects[element.dataset.id];
      }

      return result;
    },
    getDetailUrl(data) {
      if (typeof this.detailUrl !== 'object') return this.detailUrl;
      if (data?.tags?.length === 0) return this.detailUrl.default;

      const lang = this.api.getLangFromEntry(data);

      return this.detailUrl[lang] || this.detailUrl.default;
    },
  },
  data() {
    return {
      loadingDelay: 300,
      sleepDelay: 1300,
      loading: {},
      hasLoading: true,
      hasLoader: false,
      api: {},
      hasExpand: false,
      isExpandVisible: false,
      entries: [],
      jobData: {},
      promises: [],
    };
  },
  props: {
    clientName: String,
    maxItems: String,
    detailUrl: Object,
    jobId: String,
    tags: String,
    lang: String,
    team: String,
    apiUrl: String,
    headlineClasses: String,
    headlineLevel: String,
    headlineText: String,
    expandText: String,
    sublineText: String,
  },
  template: `
    <div
      :class="classList"
      :data-id="clientName"
      :data-max-items="maxItems"
      :data-detail-url="detailUrl"
      :data-job-id="jobId"
      :data-tags="tags"
      :data-lang="lang"
      :data-team="team"
      :data-api-url="apiUrl"
      ref="job-list"
    >
      <div class="row">
        <div class="job-list__header col-lg-12">
          <headline
            :text="headlineText"
            :level="headlineLevelValue"
            :classes="headlineClassValue"
          />
        </div>
        <div v-if="sublineText !== ''" class="job-list__meta col-lg-7">
          <div class="job-list__subline">{{sublineText}}</div>
        </div>
        <div class="col-lg-12">
          <div class="job-list__entries" >
            <template v-for="entry in entries" :key="entry?.id">
              <job-list-entry
                v-if="entry"
                :title="entry?.title"
                :gender="entry?.gender"
                :city="entry?.city"
                :team="entry?.team"
                :position-type="entry?.positionType"
                :is-invisible="entry?.isInvisible"
                :id="entry?.id"
                @click="handleEntryClick"
              />
            </template>
          </div>
          <div :class="expandClassList" @click="handleExpand" >{{expandText}}</div>
        </div>
      </div>
    </div>
  `,
};
