import Tools from './tools.js';

class RecruiterBox {
  apiUrl = 'https://jsapi.recruiterbox.com/v1/';
  openingsUrl = `${this.apiUrl}openings`;

  types = {
    OPENINGS: 'openings',
  };

  langTagPrefix = 'lang_';
  hiddenTag = 'hidden';

  constructor(options) {
    this.options = options;
    this.filter = '';
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

  handleApply(fields) {
    console.log('RecruiterBox ~ handleApply ~ fields', fields);

    return;

    this.apply({ fields })
      .then((response) => {
        if (response.status === 201 || response.status === 204) return this.handleApplySuccess(fields);

        response.json().then((jsonResponse) => {
          // console.log('JobListDetail ~ .then ~ jsonResponse', jsonResponse);
          if (jsonResponse.errors && this.handleApplyError(jsonResponse.errors)) return null;
        });
      })
      .catch((error) => {
        this.handleApplyError(error);
      });
  }

  handleApplySuccess(response) {
    // TODO thenable
    // this.modal.classList.add(State.SUCCESS);
    // const modalSuccessHeadline = this.modal.querySelector('.modal__success-headline > *');
    // if (modalSuccessHeadline) {
    //   if (!modalSuccessHeadline.dataset.text) {
    //     modalSuccessHeadline.dataset.text = modalSuccessHeadline.innerText;
    //   }
    //   const firstName = response[0];
    //   modalSuccessHeadline.innerText = `${modalSuccessHeadline.dataset.text} ${firstName.value}`;
    // }
  }

  handleApplyError(errors) {
    // TODO thenable
    // console.log('JobListDetail ~ handleApplyError ~ errors', errors);
    // TODO define error case with kristin
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
