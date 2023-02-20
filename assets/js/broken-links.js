class BrokenLinks {
  constructor(rootUrl) {
    this.rootUrl = rootUrl;
    this.errors = [];
    this.links = {};
    this.prevLink = {};
    this.options = {
      mode: 'no-cors',
      redirect: 'follow',
    };
    this.end = false;
    this.duration = 3000;
    this.callBackDuration = 600000;

    setTimeout(() => {
      clearInterval(this.id);
    }, this.callBackDuration);

    this.start();
  }

  async start() {
    await this.getUrl(this.rootUrl);
    this.id = setInterval(() => {
      this.handleIntervall();
    }, this.duration);
  }

  handleIntervall() {
    const limit = 10000;
    if (this.end) {
      setTimeout(() => {
        clearInterval(this.id);
        this.displayResult();
      }, limit);
    }
  }

  displayResult() {
    const loader = document.getElementById('broken-links-loader');
    const container = document.getElementById('broken-links-table');
    if (!container || !loader) return console.error('No Container found');
    loader.remove();

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
    this.end = false;
    this.prevLink[url] = previousUrl;
    if (this.hasDuplicates(url) || this.links[url]) return;

    return new Promise((resolve) => {
      const external = this.isExternal(url);

      fetch(url, this.options)
        .then((response) => {
          this.handleResponse(response, external);
          this.end = true;

          resolve();
        })
        .catch((error) => {
          this.handleError({ url, error, previousUrl });
          this.end = true;

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
