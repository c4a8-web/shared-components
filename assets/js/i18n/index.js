class i18n {
  constructor() {
    this.init();
  }

  init() {
    this.lang = (document.querySelector('html').getAttribute('lang') || 'de').toLowerCase();

    this.load();
  }

  load() {
    this.loader = import(`./${this.lang}/index.js`).then((module) => {
      console.log('und hier oder ?');
      this.translations = module.default;
    });
  }

  translate(key) {
    if (this.translations && this.translations[key]) {
      return this.translations[key];
    }

    return `Translation key ${key} not found in ${this.lang} lang File`;
  }
}

export default i18n;
