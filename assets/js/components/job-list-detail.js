import BaseComponent from './base-component.js';
import RecruiterBox from '../recruiter-box.js';
import State from '../state.js';

class JobListDetail extends BaseComponent {
  static rootSelector = '.job-list__detail';

  constructor(root, options) {
    super(root, options);

    this.containerSelector = '.job-list__detail-container';
    this.headlineSelector = '.job-list__detail-headline';
    this.backSelector = '.job-list__detail-back';
    this.hasBackClass = 'job-list__detail--has-back';

    this.loadingDelay = 300;
    this.base = this.root.dataset.base ? JSON.parse(this.root.dataset.base) : undefined;
    this.apiUrl = this.root.dataset.apiUrl;

    this.templates = window.Templates;

    this.preInit();
    this.init();
  }

  preInit() {
    this.root.dataset.jobId = this.getJobId();
  }

  showBackButton() {
    if (document.referrer.indexOf(document.location.host) !== -1) {
      this.root.classList.add(this.hasBackClass);
    }
  }

  getJobId() {
    let jobId = '';

    const hash = window.location.hash;

    if (hash) {
      if (hash.indexOf('-') !== -1) {
        const splitHash = hash.split('-');

        jobId = splitHash[splitHash.length - 1];
      } else {
        jobId = hash;
      }
    }

    return jobId;
  }

  init() {
    this.jobId = this.root.dataset.jobId;

    this.api = new RecruiterBox({
      ...this.options,
      ...(this.jobId && { jobId: this.jobId }),
      ...(this.apiUrl && { apiUrl: this.apiUrl }),
      client_name: this.root.dataset.id,
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
  }

  stopLoading() {
    setTimeout(() => {
      this.root.classList.remove(State.LOADING);
    }, this.loadingDelay);
  }

  bindEvents() {
    this.back = this.root.querySelector(this.backSelector);

    this.back?.addEventListener('click', this.handleBack.bind(this));
  }

  handleBack() {
    console.log('back');

    window.history.back();
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
    const localEntry = entry.objects ? entry.objects[0] : entry;

    if (localEntry && localEntry.location) {
      const gender = window.i18n?.translate('gender');

      const { city } = localEntry?.location || {};
      const { title, position_type, team, description } = localEntry;

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
        this.bindEvents();
        this.stopLoading();
      });
    } else {
      console.error('handleJob has no entry');
    }
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
