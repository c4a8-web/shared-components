import Tools from './tools.js';
import Personio from './personio.js';

class JobListings {
  jobDataUrl = '/assets/data/jobs/';

  // langTagPrefix = 'lang_';
  // hiddenTag = 'hidden';

  constructor(options) {
    this.options = options;
    this.api = new Personio(this.options);

    this.jobDataUrl = Tools.getAssetPath(this.jobDataUrl);
    this.openingsUrl = this.api.openingsUrl;
  }

  setLang(lang) {
    // this.setFilter({
    //   tags: this.langTagPrefix + lang,
    // });

    this.api.setLang(lang);
  }

  getAll() {
    return this.api.getAll();
  }

  getUrl(type, params, action) {
    return this.api.getUrl(type, params, action);
  }

  fetch(url, options) {
    return this.api.fetch(url, options);
  }
}

export default JobListings;
