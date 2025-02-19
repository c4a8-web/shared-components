import Tools from '../tools.js';

// TODO remove completely

class i18n {
  constructor() {
    this.init();
  }

  init() {
    this.lang = Tools.getLang();

    this.load();
  }

  load() {
    this.loader = import(`./${this.lang}/index.js`).then((module) => {
      this.translations = module.default;
    });
  }

  translate(key, args) {
    if (this.translations && this.translations[key]) {
      return args ? this.translations[key].replace('%s', args) : this.translations[key];
    }

    return `Translation key ${key} not found in ${this.lang} lang File`;
  }

  getTranslationData(keyList) {
    return keyList.reduce((accumulatedTranslations, key) => {
      accumulatedTranslations[key] = this.translate(key);

      return accumulatedTranslations;
    }, {});
  }
}

export default i18n;
