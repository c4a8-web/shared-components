import Tools from './tools.js';
import PersonioPosition from './personioPosition.js';

class Personio {
  languagePlaceholder = 'LANGUAGE_PLACEHOLDER';

  types = {
    OPENINGS: 'openings',
  };

  responseTypes = {
    XML: 'xml',
    JSON: 'json',
  };

  constructor(options) {
    this.options = options;

    this.apiUrl = `https://api.personio.de/v1`;
    this.openingsUrl = `https://${this.options.client_name}.jobs.personio.de/xml?language=${this.languagePlaceholder}`;
  }

  getUrl(type, params, action) {
    let typeUrl;

    if (this.options.apiUrl?.match(/.json$/) && action) {
      typeUrl = this.mockApplyUrl;
    } else {
      typeUrl = this.options.apiUrl ? this.options.apiUrl : this[`${type}Url`];
    }

    // const idParam = params ? `/${params}/${action ?? ''}` : '';
    // const urlParams = this.options.apiUrl ? '' : `${idParam}?client_name=${this.options?.client_name}`;
    // const filter = this.options.apiUrl ? '' : this.filter;

    typeUrl = typeUrl.replace(this.languagePlaceholder, this.lang);

    const urlParams = '';
    const filter = '';

    return `${typeUrl}${urlParams}${filter}`;
  }

  setLang(lang) {
    this.lang = lang;
  }

  getAll() {
    const url = this.getUrl(this.types.OPENINGS);

    return this.fetch(url, null, this.responseTypes.XML);
  }

  convertPosition(position) {
    const positionObject = new PersonioPosition(position);

    console.log('🚀 ~ file: personio.js:56 ~ Personio ~ convertPosition ~ positionObject:', positionObject);

    const newPosition = {
      id: positionObject.id,
      title: positionObject.title,
      description: positionObject.description,
      location: {
        city: '', // Assuming there's no equivalent in position
        state: '', // Assuming there's no equivalent in position
        country: '', // Assuming there's no equivalent in position
        zipcode: '', // Assuming there's no equivalent in position
      },
      tags: [
        'lang_de', // Assuming this is a constant value
      ],
      hosted_url: '', // Assuming there's no equivalent in position
      allows_remote: position.office['#text'] === 'Remote',
      position_type: position.schedule['#text'].replace('-', '_'),
      team: positionObject.team, // Assuming there's no equivalent in position
      close_date: null, // Assuming there's no equivalent in position
    };

    return newPosition;
  }

  getValue(position) {}

  convertData(data) {
    const newData = data;
    const rootId = 'workzag-jobs';

    const positions = data[rootId]?.position;

    newData.objects = positions.length
      ? data[rootId]?.position.map((position) => this.convertPosition(position))
      : [this.convertPosition(positions)];

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
