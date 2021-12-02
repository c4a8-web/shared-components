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
    this.detailUrl = this.root.dataset.detailUrl;
    this.loadingDelay = 1500;

    this.jobId = this.root.dataset.jobId;
    this.tags = this.root.dataset.tags ? this.root.dataset.tags.split(',') : undefined;
    this.team = this.root.dataset.team;
    this.apiUrl = this.root.dataset.apiUrl;

    this.api = new RecruiterBox({
      ...this.options,
      ...(this.jobId && { jobId: this.jobId }),
      ...(this.apiUrl && { apiUrl: this.apiUrl }),
      client_name: this.root.dataset.id,
    });

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
      // TODO load component in page and don't redirect
      document.location.href = this.detailUrl;
    }
  }

  handleExpand() {
    this.expandButton.classList.add(State.INVISIBLE);
    this.expandButton.classList.add(State.HIDDEN);

    this.showJobs();
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

    if (this.tags) {
      const tagsFound = this.tags.filter((tag) => data.tags.includes(tag));

      if (!tagsFound.length) {
        result = false;
      }
    } else if (this.team) {
      const entryTeam = data.team?.toLowerCase();
      const filterTeam = this.team.toLowerCase();

      if (entryTeam === undefined || entryTeam?.indexOf(filterTeam) === -1) {
        result = false;
      }
    }

    return result;
  }

  handleJobs(data) {
    const gender = window.i18n?.translate('gender');
    const promiseList = [];
    const orderedList = [];

    if (typeof data.objects !== 'object') {
      const dereferencedData = { ...data };

      data.objects = [dereferencedData];
    }

    for (let i = 0; i < data.objects?.length; i++) {
      const entry = data.objects[i];
      const { city } = entry?.location;
      const { title, position_type, team } = entry;

      const entryData = {
        city,
        title,
        gender,
        team,
        positionType: position_type !== '' ? window.i18n?.translate(position_type) : null,
        isInvisible: this.maxItems > 0 && i > this.maxItems - 1 ? true : false,
      };

      if (this.isAvailableEntry(entry)) {
        promiseList.push(
          this.templates?.load('job-list-entry', entryData).then((html) => {
            orderedList[i] = html;
          })
        );
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

  generateUrl() {
    // TODO only letters and characters and no umlaute
    // https://www.glueckkanja-gab.com/de/jobs/#lust-auf-modern-collaboration
  }
}

export default JobList;
