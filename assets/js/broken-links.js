class BrokenLinks {
  constructor() {
    this.errors = [];
    this.blockedLinks = {};
    this.links = {};
    this.fetchedLinks = {};
    this.prevLink = {};
    this.options = {
      mode: 'no-cors',
      redirect: 'follow',
    };

    this.isEnded = false;
    this.hasEnded = false;
    this.duration = 10000;
    this.fallbackDuration = 600000;

    window.ende = this.end.bind(this);

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
    document.addEventListener('securitypolicyviolation', this.handleContentSecurityPolicy.bind(this));
  }

  startFallbackTimer() {
    this.fallbackTimeout = setTimeout(() => {
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
    if (this.isEnded) return;

    this.isEnded = true;

    clearTimeout(this.fallbackTimeout);
    clearInterval(this.id);

    this.displayResult();
  }

  handleIntervall() {
    if (this.isEnded) return;

    if (this.hasEnded) {
      setTimeout(() => {
        if (!this.hasEnded) return;

        this.end();
      }, this.duration);
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
    let index = 0;
    while (index < this.errors.length) {
      const url = this.errors[index].url;
      const isIndexZero = index != 0;

      if (this.blockedLinks[url]) {
        this.errors.splice(index, 1);
        index = isIndexZero ? index-- : index;
        continue;
      }
      const prevUrl = this.prevLink[url];
      const tableRow = body.insertRow(index);
      const tableCellBrokenLink = tableRow.insertCell(0);
      const tableCellPrevLink = tableRow.insertCell(1);

      const brokenLinkText = document.createTextNode(url);
      const previousLinkText = document.createTextNode(prevUrl);
      tableCellBrokenLink.appendChild(brokenLinkText);
      tableCellPrevLink.appendChild(previousLinkText);
      index++;
    }
  }

  hasDuplicates(url) {
    return this.errors.some((item) => item['url'] === url);
  }

  getUrl(url, previousUrl) {
    this.hasEnded = false;
    this.prevLink[url] = previousUrl;
    if (this.hasDuplicates(url) || this.links[url] || this.fetchedLinks[url]) return (this.hasEnded = true);

    this.fetchedLinks[url] = true;

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
    const pageURL = new URL(window.location.href);
    const linkURL = new URL(url);

    return linkURL.hostname !== pageURL.hostname;
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

  handleContentSecurityPolicy(e) {
    const blockedLink = e.blockedURI;
    if (this.blockedLinks[blockedLink]) return;
    this.blockedLinks[blockedLink] = 'blocked';
  }

  handleError(data) {
    let { url, error, previousUrl } = data;

    if (this.hasDuplicates(url) || this.links[url] || this.blockedLinks[url]) return;

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
