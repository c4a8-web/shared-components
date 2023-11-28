import Tools from './tools.js';
import PersonioPosition from './personioPosition.js';

// https://developer.personio.de/reference/post_v1-recruiting-applications
// TODO send application

class Personio {
  defaultLang = 'de';

  types = {
    OPENINGS: 'openings',
  };

  responseTypes = {
    XML: 'xml',
    JSON: 'json',
  };

  mockApplyUrl = 'mock/jobApply.json';

  constructor(options) {
    this.options = options;

    this.lang = this.defaultLang;
    this.jobId = null;
    this.apiUrl = `https://api.personio.de/v1`;
    this.openingsUrl = `https://${this.options.client_name}.jobs.personio.de/xml`;
  }

  getUrl(type) {
    let typeUrl;

    if (this.options.apiUrl?.match(/.json$/)) {
      typeUrl = this.mockApplyUrl;
    } else {
      typeUrl = this.options.apiUrl ? this.options.apiUrl : this[`${type}Url`];
    }

    const langParams = this.lang !== this.defaultLang ? (this.options.apiUrl ? '' : `?language=${this.lang}`) : '';

    return `${typeUrl}${langParams}`;
  }

  setLang(lang) {
    this.lang = lang;
  }

  setFilter(filter) {
    this.filter = filter;
  }

  getAll() {
    const url = this.getUrl(this.types.OPENINGS);

    return this.fetch(url, null, this.responseTypes.XML);
  }

  getOpening(jobId) {
    this.options.jobId = jobId;

    return this.getAll();
  }

  convertPosition(position) {
    const positionObject = new PersonioPosition(position);
    const jobId = this.options?.jobId;

    if (jobId && positionObject.id !== jobId) return null;
    if (!this.filterPosition(positionObject)) return null;

    const newPosition = {
      ...positionObject.data,
      lang: this.lang,
    };

    return newPosition;
  }

  filterPosition(position) {
    if (!this.filter?.tags?.length) return position;

    if (this.filter.tags.some((tag) => position.tags.map((t) => t.toLowerCase()).includes(tag.toLowerCase()))) {
      return position;
    }

    return null;
  }

  convertData(data) {
    const newData = data;
    const rootId = 'workzag-jobs';
    const positions = data[rootId]?.position;

    newData.objects = positions.length
      ? data[rootId]?.position.map((position) => this.convertPosition(position)).filter(Boolean)
      : [this.convertPosition(positions)].filter(Boolean);

    newData.meta = { offset: 0, limit: 20, total: 10 };

    return newData;
  }

  getConvertedJson(data) {
    const parser = new DOMParser();
    const xmlData = parser.parseFromString(data, 'application/xml');
    const jsonData = Tools.XMLtoJSON(xmlData);

    return this.convertData(jsonData);
  }

  fetchXML(fetchPromise) {
    return new Promise((resolve, reject) => {
      fetchPromise
        .then((response) => response.text())
        .then((data) => {
          resolve({
            json: () => this.getConvertedJson(data),
          });
        })
        .catch((error) => {
          console.error('Personio fetchXML Error:', error);

          reject('Personio fetchXML Error');
        });
    });
  }

  fetch(url, options, type) {
    return new Promise((resolve, reject) => {
      if (this.options?.client_name) {
        const fetchPromise = fetch(url, options);
        const resultPromise = type === this.responseTypes.XML ? this.fetchXML(fetchPromise) : fetchPromise;

        resolve(resultPromise);
      } else {
        reject('no client_name specified');
      }
    });
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

  getFormPayload(formData, Form) {
    console.log('🚀 ~ file: personio.js:155 ~ Personio ~ getFormPayload ~ formData:', formData);

    const payload = {
      job_position_id: this.options.jobId,
      attributes: [],
    };

    const baseParams = { first_name: true, last_name: true, email: true };

    for (let i = 0; i < formData.length; i++) {
      const formEntry = formData[i];
      const input = formEntry.input;
      const updatedName = Form.getName(input.name);
      const snakeCaseName = Tools.camalCaseToSnakeCase(updatedName);
      console.log('🚀 ~ file: personio.js:169 ~ Personio ~ getFormPayload ~ snakeCaseName:', snakeCaseName);

      if (baseParams.hasOwnProperty(snakeCaseName)) {
        payload[snakeCaseName] = input.value;
      } else {
        payload.attributes.push({
          id: snakeCaseName,
          value: input.value,
        });
      }

      console.log('🚀 ~ file: personio.js:165 ~ Personio ~ getFormPayload ~ updatedName:', updatedName);
    }

    console.log('🚀 ~ file: personio.js:161 ~ Personio ~ getFormPayload ~ payload:', payload);

    return formData;
  }
}

export default Personio;
