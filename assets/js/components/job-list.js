import BaseComponent from './base-component.js';
import RecruiterBox from '../recruiter-box.js';
import Loading from '../loading.js';
import Tools from '../tools.js';
import State from '../state.js';

class JobList extends BaseComponent {
  static rootSelector = '.job-list';

  constructor(root, options) {
    super(root, options);

    this.entriesSelector = '.job-list__entries';
    this.entrySelector = '.job-list__entry';
    this.entries = this.root.querySelector(this.entriesSelector);
    this.expandButton = this.root.querySelector('.job-list__expand-button');
    this.maxItems = this.root.dataset.maxItems;

    try {
      this.detailUrl = JSON.parse(this.root.dataset.detailUrl);
    } catch (e) {
      this.detailUrl = this.root.dataset.detailUrl;
    }

    this.loadingDelay = 1500;

    this.jobId = this.root.dataset.jobId;
    this.tags = this.root.dataset.tags ? this.root.dataset.tags.split(',') : undefined;
    this.team = this.root.dataset.team;
    this.lang = this.root.dataset.lang;
    this.apiUrl = this.root.dataset.apiUrl;

    this.api = new RecruiterBox({
      ...this.options,
      ...(this.jobId && { jobId: this.jobId }),
      ...(this.apiUrl && { apiUrl: this.apiUrl }),
      client_name: this.root.dataset.id,
    });

    if (this.lang) {
      this.api.setLang(this.lang);
    } else if (this.tags) {
      this.api.setFilter({ tags: this.tags });
    }

    this.templates = window.Templates;
    this.loading = new Loading(this.root);

    this.init();
  }

  init() {
    this.loading.on();

    const hasLanguageLoader = window.i18n?.loader;
    const method = this.jobId ? this.loadJob.bind(this) : this.loadJobs.bind(this);

    if (hasLanguageLoader) {
      hasLanguageLoader.then(() => {
        method();
      });
    } else {
      method();
    }

    this.bindEvents();
  }

  bindEvents() {
    this.expandButton?.addEventListener('click', this.handleExpand.bind(this));
  }

  bindEntriesEvents() {
    if (this.entries) {
      [].forEach.call(this.entries.querySelectorAll(this.entrySelector), (element) => {
        element.addEventListener('click', this.handleEntryClick.bind(this));
      });
    }
  }

  handleEntryClick(e) {
    const current = e.currentTarget;

    if (current && this.detailUrl) {
      const currentData = this.getData(current);
      // TODO load component in page and don't redirect

      const detailUrl = this.getDetailUrl(currentData);
      const url = Tools.generateUrl(currentData?.title, detailUrl, currentData?.id);

      document.location.href = url;
    }
  }

  handleExpand() {
    this.expandButton.classList.add(State.INVISIBLE);
    this.expandButton.classList.add(State.HIDDEN);

    this.showJobs();
  }

  getDetailUrl(data) {
    if (typeof this.detailUrl !== 'object') return this.detailUrl;
    if (data?.tags?.length === 0) return this.detailUrl.default;

    const lang = this.api.getLangFromEntry(data);

    return this.detailUrl[lang] || this.detailUrl.default;
  }

  showJobs() {
    [].forEach.call(this.root.querySelectorAll(`${this.entrySelector}.${State.HIDDEN}`), (element) => {
      this.fadeInJob(element);
    });
  }

  fadeInJob(element) {
    // TODO add fade in composition

    element.classList.add(State.INVISIBLE);
    element.classList.remove(State.HIDDEN);
    element.classList.remove(State.INVISIBLE);
  }

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
  }

  getData(element) {
    let result = null;

    if (element && element.dataset.id && this.data?.objects) {
      result = this.data.objects[element.dataset.id];
    }

    return result;
  }

  handleJobs(data) {
    let localData = data;

    const gender = window.i18n?.translate('gender');
    const promiseList = [];
    const orderedList = [];

    if (typeof localData.objects !== 'object') {
      const newObject = {
        objects: [localData],
      };

      localData = newObject;
    }

    this.data = localData;

    if (!this.data.meta) return this.loading.off();

    let counter = 0;

    for (let i = 0; i < localData.objects?.length; i++) {
      const entry = localData.objects[i];
      const { city } = entry?.location || {};
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
        promiseList.push(
          this.templates?.load('job-list-entry', entryData).then((html) => {
            orderedList[i] = html;
          })
        );

        counter++;
      }
    }

    Promise.all(promiseList).then(() => {
      if (this.maxItems > 0 && data.objects?.length > this.maxItems) {
        this.showExpandButton();
      }

      this.appendEntries(orderedList);
      this.bindEntriesEvents();

      this.loading.off();
    });
  }

  loadJobs() {
    setTimeout(() => {
      this.api
        ?.getAll()
        .then((response) => response.json())
        .then((data) => {
          this.handleJobs(data);
        })
        .catch((error) => {
          console.error('Job-list Error:', error);
        });
    }, this.loadingDelay);
  }

  loadJob() {
    setTimeout(() => {
      this.api
        ?.getOpening()
        .then((response) => response.json())
        .then((data) => {
          this.handleJobs(data);
        })
        .catch((error) => {
          console.error('Job-list Error:', error);
        });
    }, this.loadingDelay);
  }

  appendEntries(list) {
    for (let i = 0; i < list.length; i++) {
      Tools.append(this.entries, list[i]);
    }
  }

  showExpandButton() {
    this.expandButton?.classList.remove(State.HIDDEN);
    this.expandButton?.classList.remove(State.INVISIBLE);
  }
}

export default JobList;
