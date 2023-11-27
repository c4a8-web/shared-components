import Tools from './tools.js';
import Personio from './personio.js';

class JobListings {
  jobDataUrl = '/assets/data/jobs/';

  // hiddenTag = 'hidden';

  constructor(options) {
    this.options = options;
    this.api = new Personio(this.options);

    this.jobDataUrl = Tools.getSiteAssetPath(this.jobDataUrl);
    this.openingsUrl = this.api.openingsUrl;
  }

  setLang(lang) {
    this.api.setLang(lang);
  }

  setFilter(filter) {
    this.api.setFilter(filter);
  }

  getAll() {
    return this.api.getAll();
  }

  getOpening(jobId) {
    return this.api.getOpening(jobId);
  }

  getUrl(type, params, action) {
    return this.api.getUrl(type, params, action);
  }

  fetch(url, options) {
    return this.api.fetch(url, options);
  }

  getLangFromEntry(entry) {
    return entry.lang || null;
  }

  getJobId() {
    let jobId = '';

    const hash = window.location.hash;

    if (hash) {
      if (hash.indexOf('-') !== -1) {
        const splitHash = hash.split('-');

        jobId = splitHash[splitHash.length - 1];
      } else {
        jobId = hash.substring(1);
      }
    } else if (this.options.jobId) {
      jobId = this.options.jobId;
    }

    return jobId;
  }
}

export default JobListings;
