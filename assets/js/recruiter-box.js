import Tools from './tools.js';
import Form from './components/form.js';

/**
 * https://apiv1.recruiterbox.com/frontend_api.html
 */

class RecruiterBox {
  apiUrl = 'https://jsapi.recruiterbox.com/v1/';
  jobDataUrl = '/assets/data/jobs/';
  openingsUrl = `${this.apiUrl}openings`;

  types = {
    OPENINGS: 'openings',
  };

  langTagPrefix = 'lang_';
  hiddenTag = 'hidden';

  mockApplyUrl = 'mock/jobApply.json';

  constructor(options) {
    this.options = options;
    this.filter = '';
    this.jobDataUrl = Tools.getAssetPath(this.jobDataUrl);

    this.options.jobId = this.getJobId();
  }

  getJobId() {
    let jobId = '';

    const hash = window.location.hash;

    if (hash) {
      if (hash.indexOf('-') !== -1) {
        const splitHash = hash.split('-');

        jobId = splitHash[splitHash.length - 1];
      } else {
        jobId = hash.substr(1);
      }
    } else if (this.options.jobId) {
      jobId = this.options.jobId;
    }

    return jobId;
  }

  getLangFromEntry(entry) {
    const langs = entry?.tags.filter((value, _) => value.indexOf(this.langTagPrefix) === 0);

    return langs[0]?.replace(this.langTagPrefix, '') || null;
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
    let typeUrl;

    if (this.options.apiUrl?.match(/.json$/) && action) {
      typeUrl = this.mockApplyUrl;
    } else {
      typeUrl = this.options.apiUrl ? this.options.apiUrl : this[`${type}Url`];
    }

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

  isOptionalInputInvisible(input) {
    return input?.parentNode?.classList.contains('form-field--show-in') && input.offsetParent === null;
  }

  getFormData(form) {
    if (form === null || form === undefined) return [];

    // TODO refactor with select
    const inputs = form.querySelectorAll('input[type="text"], input[type="email"], textarea');
    const data = [];

    for (let i = 0; i < inputs.length; i++) {
      const input = inputs[i];

      if (this.isOptionalInputInvisible(input)) continue;

      let value;

      if (input.type === 'text' || input.type === 'email' || input.tagName === 'TEXTAREA') {
        value = input.value;
      } else {
        // TODO handle select
      }

      const candidateFields = ['firstName', 'lastName', 'email', 'phone', '_gotcha'];
      const updatedName = Form.getName(input.name);

      const key = candidateFields.filter((value) => value === updatedName).length
        ? `candidate_${Tools.camalCaseToSnakeCase(updatedName)}`
        : updatedName;

      data.push({
        key,
        value,
      });
    }

    return data;
  }

  applyFileData(fileData, data, fields) {
    const file = {
      key: 'resume',
      value: {
        encoded_data: data,
        file_name: fileData.name,
      },
    };

    fields.push(file);

    return fields;
  }

  isValidResponseCode(response) {
    return this.options.apiUrl ? response.status === 200 : response.status === 201 || response.status === 204;
  }

  handleApply(fields) {
    return new Promise((resolve, reject) => {
      this.apply({ fields })
        .then((response) => {
          if (this.isValidResponseCode(response)) return resolve();

          response
            .json()
            .then((jsonResponse) => {
              if (jsonResponse.errors) return reject(jsonResponse.errors);
            })
            .catch((error) => {
              return reject(error);
            });
        })
        .catch((error) => {
          return reject(error);
        });
    });
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
