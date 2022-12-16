var links = document.querySelectorAll('a[href]');
var linkReport = [];
var linksChecked = 0;

// put all internal links into an array
// for each link load the page and select the body and create a new document for it and get the links on the pages again
// until the array is empty and every link got checked

// TODO check if link is internal or external

class BrokenLinks {
  constructor(rootUrl) {
    this.rootUrl = rootUrl;
    // this.errors = [];
    // this.links = {};
    // this.prevLink = {};
    // this.errorPrevLink = {};
    this.brokenLinks = {};
    this.visitedLink = {};
    this.options = {
      // method: 'HEAD',
      mode: 'cors',
      //mode: 'no-cors',
      redirect: 'follow',
    };

    // this.start();
    this.findLinks(this.rootUrl);
    console.log(this.visitedLink);
    console.log(this.brokenLinks);
  }

  // async start() {
  //   await this.getUrl(this.rootUrl);

  //   // this.showErrors();
  //   console.log(this.prevLink);
  // }

  // showErrors() {
  //   //console.debug('errors', this.errors);
  // }

  async findLinks(url) {
    // console.log('ENTERED URLs -> ', url);

    if (!this.visitedLink[url]) {
      this.visitedLink[url] = 1;
    }

    const response = await fetch(url);
    const html = await response.text();
    const temp = document.createElement('html');
    temp.innerHTML = html;
    const links = temp.querySelectorAll('a');

    links.forEach((link) => {
      let href = link.getAttribute('href');
      // console.log('Other links -> ', href);
      if (href == null || href.length <= 1 || this.visitedLink[href] || href.includes('index.html')) {
        return;
      }

      if (this.isAbsoluteLink(href) == null) {
        if (!href.includes('/')) return; // Some hrefs miss the backslash
        href = this.getAbsoluteLink(href);
      }

      if (this.isValidLink(href) === false) return;

      if (this.isExternal(href)) {
        this.brokenLinks[href] = 'external';
        return;
      }

      fetch(href, this.options)
        .then((response) => {
          if (response.status >= 400) {
            // console.log('400 Error -> ', href);
            this.brokenLinks[href] = 'broken';
          }
        })
        .catch((error) => {
          // console.log('OTHER Errors ->', href);
          this.brokenLinks[href] = 'broken';
        });

      if (!this.visitedLink[href]) {
        this.findLinks(href);
      }
    });
  }

  isValidLink(url) {
    const regex = /^(http(s)?:\/\/)?[\w.-]+(:\d+)?(\/[\w\.-]*)*$/g;

    return url.match(regex) ? true : false;
  }

  isAbsoluteLink(href) {
    return href.indexOf('http://') === 0 || href.indexOf('https://') === 0 ? href : null;
  }

  isExternal(url) {
    const origin = document.location.origin;
    // const regex = new RegExp(`^(${origin})?`);
    return url.includes(origin) ? false : true;
  }

  getAbsoluteLink(href) {
    var link = document.createElement('a');
    link.href = href;
    return link.href;
  }

  getUrl(url, previousUrl) {
    this.prevLink[url] = 'Previous Url: ' + previousUrl;

    return new Promise((resolve) => {
      const external = this.isExternal(url);

      fetch(url, this.options)
        .then((response) => {
          this.handleResponse(response, external, url);

          resolve();
        })
        .catch((error) => {
          this.handleError({ url, error, previousUrl });

          resolve();
        });
    });
  }

  // async handleResponse(response, external, url) {
  //   const { url } = response;

  //   if (this.links[url]) return;

  //   if (external) {
  //     this.links[url] = external;

  //     this.checkLinks();
  //   } else {
  //     response.text().then((html) => {
  //       this.links[url] = {
  //         html,
  //       };

  //       this.checkLinks();
  //     });
  //   }
  // }

  // async checkLinks() {
  //   const linkKeys = Object.keys(this.links);

  //   for (let i = 0; i < linkKeys.length; i++) {
  //     const key = linkKeys[i];
  //     const link = this.links[key];

  //     if (!link.html) continue;

  //     const parser = new DOMParser();
  //     const site = parser.parseFromString(link.html, 'text/html');

  //     this.links[key].html = 'parsed';

  //     await this.getLinksOnSite(site, key);
  //   }
  // }

  // handleError(data) {
  //   const { url, error, previousUrl } = data;

  //   this.errors.push({
  //     url,
  //     error,
  //     previousUrl,
  //   });
  // }

  // async getLinksOnSite(site, url) {
  //   const links = site.querySelectorAll(':not(footer) a[href]');
  //   // der href im footer -> index.html schickt uns wieder zurück auf localhost:4000/broken-links
  //   for (var i = 0; i < links.length; i++) {
  //     links[i].href = this.normalizeLink(links[i].href);

  //     if (links[i].href == null) {
  //       return;
  //     }

  //     const link = links[i];
  //     if (links[i].href.includes('broken')) {
  //       console.log('SITE ->', site);
  //       console.log('LINK ->', link);
  //     }
  //     const linkUrl = this.getAbsoluteUrl(link, url);

  //     if (this.isValidLink(linkUrl) && !this.links[linkUrl]) {
  //       await this.getUrl(linkUrl, url);
  //     }
  //   }
  // }

  // normalizeLink(link) {
  //   link = link.endsWith('index.html') ? link.slice(0, -11) : link;
  //   link = link.endsWith('.html') ? link.slice(0, -5) : link;
  //   link = link.endsWith('/') ? link.slice(0, -1) : link;
  //   link = link.includes('#') ? null : link;

  //   return link;
  // }

  // getAbsoluteUrl(link, siteUrl) {
  //   const href = link.getAttribute('href');
  //   const isAbsolute = href.indexOf('/') !== -1;

  //   return isAbsolute ? link.href : `${siteUrl}${href}`;
  // }
}
