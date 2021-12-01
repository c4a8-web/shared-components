import BaseComponent from './base-component.js';
import RecruiterBox from '../recruiter-box.js';
import Loading from '../loading.js';
import Tools from '../tools.js';
import State from '../state.js';

class JobListDetail extends BaseComponent {
  static rootSelector = '.job-list__detail';

  constructor(root, options) {
    super(root, options);

    // this.entriesSelector = '.job-list__entries';
    // this.entrySelector = '.job-list__entry';
    // this.entries = this.root.querySelector(this.entriesSelector);
    // this.expandButton = this.root.querySelector('.job-list__expand-button');
    // this.maxItems = this.root.dataset.maxItems;
    // this.detailUrl = this.root.dataset.detailUrl;

    this.api = new RecruiterBox({
      ...this.options,
      client_name: this.root.dataset.id,
    });

    this.templates = window.Templates;
    // this.loading = new Loading(this.root);

    this.init();
  }

  init() {
    setTimeout(() => {
      this.root.classList.remove(State.LOADING);
    }, 500);

    if (!this.options) {
      // this.loading.on();
      // const hasLanguageLoader = window.i18n?.loader;
      // if (hasLanguageLoader) {
      //   hasLanguageLoader.then(() => {
      //     this.loadJobs();
      //   });
      // } else {
      //   this.loadJobs();
      // }
      // this.bindEvents();
    }
  }

  bindEvents() {
    // this.expandButton?.addEventListener('click', this.handleExpand.bind(this));
  }
}

export default JobListDetail;
