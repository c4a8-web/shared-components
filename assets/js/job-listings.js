import Tools from './tools.js';
import Personio from './personio.js';

class JobListings {
  jobDataUrl = '/assets/data/jobs/';

  // hiddenTag = 'hidden';

  constructor(options) {
    this.options = options;
    this.api = new Personio(this.options);

    this.jobDataUrl = Tools.getAssetPath(this.jobDataUrl);
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

  getOpening() {
    return this.api.getOpening();
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
}

export default JobListings;
