import Tools from './tools.js';
import PersonioPosition from './personioPosition.js';

// https://developer.personio.de/reference/post_v1-recruiting-applications

class Personio {
  defaultLang = 'de';

  types = {
    OPENINGS: 'openings',
    APPLICATIONS: 'applications',
    DOCUMENTS: 'documents',
  };

  recruitingChannels = {
    CAREER_PAGE: 1610421,
  };

  phaseIds = {
    NEW_APPLICATION: 890494,
  };

  responseTypes = {
    XML: 'xml',
    JSON: 'json',
  };

  defaultClientName = 'c4a8';

  mockApplyUrl = 'mock/jobApply.json';
  mockDocumentsUrl = 'mock/jobDocuments.json';

  constructor(options) {
    this.options = options;

    if (!this.options.client_name || this.options.client_name === 'glueckkanja') {
      this.options.client_name = this.defaultClientName;
    }

    this.lang = this.defaultLang;
    this.jobId = null;
    this.apiUrl = `https://api.personio.de/v1`;

    this.openingsUrl = `https://${this.options.client_name}.jobs.personio.de/xml`;
    this.applicationsUrl = 'https://apim-c4a8-recruiting-prd-weu.azure-api.net/applications';
    this.documentsUrl = 'https://apim-c4a8-recruiting-prd-weu.azure-api.net/applications/documents';
  }

  getUrl(type) {
    let typeUrl;

    if (type !== this.types.OPENINGS && this.options.apiUrl?.match(/.xml$/)) {
      if (type === this.types.APPLICATIONS) {
        typeUrl = this.options.mockApplyUrl ? this.options.mockApplyUrl : this.mockApplyUrl;
      } else {
        typeUrl = this.options.mockDocumentsUrl ? this.options.mockDocumentsUrl : this.mockDocumentsUrl;
      }
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

    if (
      positionObject.description === null ||
      (jobId && positionObject.id !== jobId) ||
      !this.filterPosition(positionObject)
    )
      return null;

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

  async uploadDocuments(fileData) {
    const url = this.getUrl(this.types.DOCUMENTS);
    const formData = new FormData();

    formData.append(
      'file',
      new File([fileData], fileData.name, {
        type: fileData.type,
      })
    );

    return this.fetch(url, {
      method: 'POST',
      body: formData,
      headers: {
        ...this.getHeaders(),
      },
    });
  }

  async applyFileData(fileData, _, fields) {
    return new Promise((resolve, reject) => {
      this.uploadDocuments(fileData)
        .then((response) => {
          if (this.isValidResponseCode(response)) return this.addFilesToFields(response, fields, resolve, reject);

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

  addFilesToFields(response, fields, resolve, reject) {
    const newFields = fields;

    newFields.files = [];

    return response
      .json()
      .then((jsonResponse) => {
        newFields.files.push({
          uuid: jsonResponse.uuid,
          original_filename: jsonResponse.original_filename,
          category: 'cv',
        });

        return resolve(newFields);
      })
      .catch((error) => {
        return reject(error);
      });
  }

  getMappedFieldName(name) {
    let mappedName;

    switch (name) {
      case 'salary':
        mappedName = 'salary_expectations';
        break;
      case 'cancellation':
        mappedName = 'available_from';
        break;
      default:
        mappedName = name;
        break;
    }

    return mappedName;
  }

  isValidResponseCode(response) {
    return this.options.apiUrl
      ? response.status === 200
      : response.status === 200 || response.status === 201 || response.status === 204;
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

  getFormPayload(formData, Form) {
    const payload = {
      job_position_id: parseInt(this.options.jobId),
      attributes: [],
      phase: {
        type: 'custom',
        id: this.phaseIds.NEW_APPLICATION,
      },
      recruiting_channel_id: this.recruitingChannels.CAREER_PAGE,
    };

    const baseParams = { first_name: true, last_name: true, email: true, message: true };

    for (let i = 0; i < formData.length; i++) {
      const formEntry = formData[i];
      const input = formEntry.input;
      const updatedName = Form.getName(input.name);
      const snakeCaseName = Tools.camalCaseToSnakeCase(updatedName);

      if (baseParams.hasOwnProperty(snakeCaseName)) {
        payload[snakeCaseName] = input.value;
      } else if (snakeCaseName !== '_gotcha') {
        payload.attributes.push({
          id: this.getMappedFieldName(snakeCaseName),
          value: input.value,
        });
      }
    }

    return payload;
  }

  getHeaders() {
    return {
      'Ocp-Apim-Subscription-Key': this.options.apiKey,
    };
  }

  async apply(fields) {
    const url = this.getUrl(this.types.APPLICATIONS);

    return this.fetch(url, {
      method: 'POST',
      body: JSON.stringify(fields.fields),
      headers: {
        ...this.getHeaders(),
        'Content-Type': 'application/json',
      },
    });
  }
}

export default Personio;
