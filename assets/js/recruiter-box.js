class RecruiterBox {
  apiUrl = 'https://jsapi.recruiterbox.com/v1/';
  openingsUrl = `${this.apiUrl}openings`;

  types = {
    OPENINGS: 'openings',
  };

  constructor(options) {
    this.options = options;
  }

  getUrl(type, params) {
    const typeUrl = this.options.apiUrl ? this.options.apiUrl : this[`${type}Url`];
    const idParam = params ? `/${params}/` : '';
    const urlParams = this.options.apiUrl ? '' : `${idParam}?client_name=${this.options?.client_name}`;

    return `${typeUrl}${urlParams}`;
  }

  getAll() {
    const url = this.getUrl(this.types.OPENINGS);

    return fetch(url);
  }

  getOpening() {
    const url = this.getUrl(this.types.OPENINGS, this.options?.jobId);

    return fetch(url);
  }
}

export default RecruiterBox;
