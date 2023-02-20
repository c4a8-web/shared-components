class BrokenLinks {
  constructor() {
    this.errors = [];
    this.links = {};
    this.prevLink = {};
    this.options = {
      mode: 'no-cors',
      redirect: 'follow',
    };

    this.hasEnded = false;
    this.duration = 3000;
    this.fallbackDuration = 600000;

    document.addEventListener('VUE_IS_MOUNTED', (e) => {
      this.initialize();
    });
  }

  initialize() {
    this.rootUrl = window.location.origin + '/de/';
    this.input = document.getElementById('broken-links-text-input');
    this.button = document.getElementById('broken-links-submit-input');
    this.loader = document.getElementById('broken-links-loader');
    this.loader.classList.add('d-none');

    if (!this.input || !this.button || !this.loader) return console.error('No button or input!');

    this.input.setAttribute('value', this.rootUrl);
    this.button.addEventListener('click', this.handleClick.bind(this));
  }

  startFallbackTimer() {
    setTimeout(() => {
      this.end();

      console.error('Fallback timer expired!');
    }, this.fallbackDuration);
  }

  handleClick() {
    const url = this.input.value;

    this.startFallbackTimer();

    this.loader.classList.remove('d-none');
    this.button.remove();
    this.input.remove();

    this.startSearch(url);
  }

  async startSearch(url) {
    await this.getUrl(url);

    this.id = setInterval(() => {
      this.handleIntervall();
    }, this.duration);
  }

  end() {
    clearInterval(this.id);
    this.displayResult();
  }

  handleIntervall() {
    const limit = 10000;

    if (this.hasEnded) {
      setTimeout(() => {
        this.end();
      }, limit);
    }
  }

  displayResult() {
    const container = document.getElementById('broken-links-table');

    if (!container) return console.error('No Container found');

    this.loader.remove();

    const table = document.createElement('table');

    table.classList.add('table');
    container.appendChild(table);

    const head = table.createTHead();
    const row = head.insertRow(0);
    const leftCell = row.insertCell(0);
    const rightCell = row.insertCell(1);

    const leftCellText = 'Broken Links';
    const rightCellText = 'Previous Links';

    leftCell.innerHTML = leftCellText;
    rightCell.innerHTML = rightCellText;

    const body = table.createTBody();

    for (let i = 0; i < this.errors.length; i++) {
      const url = this.errors[i].url;
      const prevUrl = this.prevLink[url];

      const tableRow = body.insertRow(i);
      const tableCellBrokenLink = tableRow.insertCell(0);
      const tableCellPrevLink = tableRow.insertCell(1);

      const brokenLinkText = document.createTextNode(url);
      const previousLinkText = document.createTextNode(prevUrl);
      tableCellBrokenLink.appendChild(brokenLinkText);
      tableCellPrevLink.appendChild(previousLinkText);
    }
  }

  hasDuplicates(url) {
    return this.errors.some((item) => item['url'] === url);
  }

  getUrl(url, previousUrl) {
    this.hasEnded = false;
    this.prevLink[url] = previousUrl;

    console.log('BrokenLinks ~ getUrl ~ url:', url);
    if (this.hasDuplicates(url) || this.links[url]) return;

    if (url === 'https://www.linkedin.com/company/glueckkanja-gab') {
      console.log('###################################################');
      console.group();
      console.log(this.errors);
      console.log(this.links);
      console.groupEnd();
    }

    return new Promise((resolve) => {
      const external = this.isExternal(url);

      fetch(url, this.options)
        .then((response) => {
          this.handleResponse(response, external);
          this.hasEnded = true;

          resolve();
        })
        .catch((error) => {
          this.handleError({ url, error, previousUrl });
          this.hasEnded = true;

          resolve();
        });
    });
  }

  isInvalidHref(href) {
    return href == null || href.length <= 1 || !href.includes('/');
  }

  toValidURL(href, currentLink) {
    return new URL(href, currentLink).href;
  }

  isExternal(url) {
    const origin = document.location.origin;
    const regex = new RegExp(`^(${origin})?`);

    return url.match(regex) ? false : true;
  }

  async handleResponse(response, external) {
    const { url } = response;

    if (this.links[url]) return;

    if (response.status >= 400) {
      const status = response.status;

      this.errors.push({
        url,
        status,
      });

      return;
    }

    if (external) {
      this.links[url] = external;

      this.checkLinks();
    } else {
      console.log('maybe it breaks here??? url:', url);
      response.text().then((html) => {
        this.links[url] = {
          html,
        };

        this.checkLinks();
      });
    }
  }

  handleError(data) {
    let { url, error, previousUrl } = data;

    this.errors.push({
      url,
      error,
      previousUrl,
    });
  }

  async checkLinks() {
    const linkKeys = Object.keys(this.links);

    for (let i = 0; i < linkKeys.length; i++) {
      const key = linkKeys[i];
      const link = this.links[key];

      if (!link.html) continue;

      const parser = new DOMParser();
      const site = parser.parseFromString(link.html, 'text/html');

      this.links[key].html = 'parsed';

      await this.getLinksOnSite(site, key);
    }
  }

  async getLinksOnSite(site, url) {
    const links = site.querySelectorAll('a');

    for (var i = 0; i < links.length; i++) {
      const hrefAttr = links[i].getAttribute('href');
      // console.log('BrokenLinks ~ getLinksOnSite ~ hrefAttr:', hrefAttr);

      if (!this.isInvalidHref(hrefAttr)) {
        const linkUrl = this.toValidURL(hrefAttr, url);

        if (this.isValidLink(linkUrl) && !this.links[linkUrl]) {
          await this.getUrl(linkUrl, url);
        }
      }
    }
  }

  isValidLink(url) {
    const regex = /^(http(s)?:\/\/)?[\w.-]+(:\d+)?(\/[\w\.-]*)*$/g;

    return url.match(regex) ? true : false;
  }
}
