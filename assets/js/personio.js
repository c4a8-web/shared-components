import Tools from './tools.js';
import PersonioPosition from './personioPosition.js';

// TODO detail page
// TODO send application
// TODO adjust pages career + jobs

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
      // allows_remote: position.office['#text'] === 'Remote',
      // position_type: position.schedule['#text'].replace('-', '_'),
      // close_date: null, // Assuming there's no equivalent in position
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
}

export default Personio;
