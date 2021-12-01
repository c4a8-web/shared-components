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

    this.api = new RecruiterBox({
      ...this.options,
      client_name: this.root.dataset.id,
    });

    this.templates = window.Templates;
    this.loading = new Loading(this.root);

    this.init();
  }

  init() {
    if (!this.options) {
      this.loading.on();

      const hasLanguageLoader = window.i18n?.loader;

      if (hasLanguageLoader) {
        hasLanguageLoader.then(() => {
          this.loadJobs();
        });
      } else {
        this.loadJobs();
      }

      this.bindEvents();
    }
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

  loadJobs() {
    const gender = window.i18n?.translate('gender');

    setTimeout(() => {
      this.api
        ?.getAll()
        .then((response) => response.json())
        .then((data) => {
          const promiseList = [];
          const orderedList = [];

          for (let i = 0; i < data.objects?.length; i++) {
            const entry = data.objects[i];
            const { city } = entry?.location;
            const { title, position_type } = entry;

            const entryData = {
              city,
              title,
              gender,
              positionType: position_type !== '' ? window.i18n?.translate(position_type) : null,
              isInvisible: this.maxItems > 0 && i > this.maxItems - 1 ? true : false,
            };

            promiseList.push(
              this.templates?.load('job-list-entry', entryData).then((html) => {
                orderedList[i] = html;
              })
            );
          }

          Promise.all(promiseList).then(() => {
            if (this.maxItems > 0 && data.objects?.length > this.maxItems) {
              this.showExpandButton();
            }

            this.appendEntries(orderedList);
            this.bindEntriesEvents();

            this.loading.off();
          });
        })
        .catch((error) => {
          console.error('Job-list Error:', error);
        });
    }, 200);
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
