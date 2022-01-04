import Tools from './tools.js';

class RecruiterBox {
  apiUrl = 'https://jsapi.recruiterbox.com/v1/';
  openingsUrl = `${this.apiUrl}openings`;

  types = {
    OPENINGS: 'openings',
  };

  langTagPrefix = 'lang_';

  constructor(options) {
    this.options = options;
    this.filter = '';
  }

  setLang(lang) {
    this.setFilter({
      tags: this.langTagPrefix + lang,
    });
  }

  setFilter(params) {
    if (!params) return;

    Object.keys(params).forEach((key) => {
      this.filter += `&${key}=${params[key]}`;
    });
  }

  getUrl(type, params, action) {
    const typeUrl = this.options.apiUrl ? this.options.apiUrl : this[`${type}Url`];
    const idParam = params ? `/${params}/${action ?? ''}` : '';
    const urlParams = this.options.apiUrl ? '' : `${idParam}?client_name=${this.options?.client_name}`;
    const filter = this.options.apiUrl ? '' : this.filter;

    return `${typeUrl}${urlParams}${filter}`;
  }

  getAll() {
    const url = this.getUrl(this.types.OPENINGS);

    return this.fetch(url);
  }

  getOpening() {
    const url = this.getUrl(this.types.OPENINGS, this.options?.jobId);

    return this.fetch(url);
  }

  getFormData(form) {
    if (form === null || form === undefined) return [];

    // TODO refactor with select
    const inputs = form.querySelectorAll('input[type="text"], input[type="email"], textarea');
    const data = [];
    const customFields = ['cancellation', 'salary', 'message'];

    for (let i = 0; i < inputs.length; i++) {
      const input = inputs[i];

      let value;

      if (input.type === 'text' || input.type === 'email' || input.tagName === 'TEXTAREA') {
        value = input.value;
      } else {
        // TODO handle select
      }

      const key = customFields.filter((value) => value === input.name).length
        ? input.name
        : `candidate_${Tools.camalCaseToSnakeCase(input.name)}`;

      data.push({
        key,
        value,
      });
    }

    return data;
  }

  async apply(fields) {
    const url = this.getUrl(this.types.OPENINGS, this.options?.jobId, 'apply');

    return this.fetch(url, {
      method: 'POST',
      body: JSON.stringify(fields),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  fetch(url, options) {
    return new Promise((resolve, reject) => {
      if (this.options?.client_name) {
        resolve(fetch(url, options));
      } else {
        reject('no client_name specified');
      }
    });
  }
}

export default RecruiterBox;
