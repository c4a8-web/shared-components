import BaseComponent from './base-component.js';
import RecruiterBox from '../recruiter-box.js';
import Loading from '../loading.js';
import Tools from '../tools.js';
import State from '../state.js';

class JobListDetail extends BaseComponent {
  static rootSelector = '.job-list__detail';

  constructor(root, options) {
    super(root, options);

    this.containerSelector = '.job-list__detail-container';
    this.headlineSelector = '.job-list__detail-headline';

    this.loadingDelay = 300;
    this.base = this.root.dataset.base ? JSON.parse(this.root.dataset.base) : undefined;
    this.jobId = this.root.dataset.jobId;
    this.apiUrl = this.root.dataset.apiUrl;

    this.api = new RecruiterBox({
      ...this.options,
      ...(this.jobId && { jobId: this.jobId }),
      ...(this.apiUrl && { apiUrl: this.apiUrl }),
      client_name: this.root.dataset.id,
    });

    this.templates = window.Templates;
    // this.loading = new Loading(this.root);

    this.init();
  }

  init() {
    const hasLanguageLoader = window.i18n?.loader;

    if (hasLanguageLoader) {
      hasLanguageLoader.then(() => {
        this.loadJob();
      });
    } else {
      this.loadJob();
    }

    this.bindEvents();
  }

  stopLoading() {
    setTimeout(() => {
      this.root.classList.remove(State.LOADING);
    }, this.loadingDelay);
  }

  bindEvents() {
    // this.expandButton?.addEventListener('click', this.handleExpand.bind(this));
  }

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
  }

  filterDescription(description) {
    return description.replace(/<h1>[\s\S]*?<\/h1>/, '');
  }

  handleJob(entry) {
    const gender = window.i18n?.translate('gender');

    const { city } = entry?.location;
    const { title, position_type, team, description } = entry;

    const entryData = {
      city,
      description: this.filterDescription(description),
      title,
      gender,
      team,
      positionType: position_type !== '' ? window.i18n?.translate(position_type) : null,
      isInvisible: this.maxItems > 0 && i > this.maxItems - 1 ? true : false,
      ...(this.base && { ...this.base }),
      expand: ['cta'],
    };

    this.templates?.load('job-list-detail', entryData).then((html) => {
      this.appendHtml(html);
      // orderedList[i] = html;
      // Tools.append(this.entries, list[i]);
      // this.bindEntriesEvents();
      this.stopLoading();
    });

    // Promise.all(promiseList).then(() => {
    // if (this.maxItems > 0 && data.objects?.length > this.maxItems) {
    //   this.showExpandButton();
    // }

    // this.appendEntries(orderedList);
    // this.bindEntriesEvents();

    //   this.loading.off();
    // });
  }

  appendHtml(html) {
    const container = this.root.querySelector(this.containerSelector);
    const fullHtml = document.createElement('div');

    fullHtml.innerHTML = html;

    const containerHtml = fullHtml.querySelector(this.containerSelector)?.innerHTML;

    if (container && containerHtml) {
      container.innerHTML = containerHtml;
    }
  }
}

export default JobListDetail;
