import Tools from '../tools.js';

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

  translate(key) {
    if (this.translations && this.translations[key]) {
      return this.translations[key];
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
