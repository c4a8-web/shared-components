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
    this.errors = [];
    this.links = {};
    this.prevLink = {};
    this.errorPrevLink = {};
    this.options = {
      // method: 'HEAD',
      mode: 'cors',
      //mode: 'no-cors',
      redirect: 'follow',
    };

    this.start();
  }

  async start() {
    await this.getUrl(this.rootUrl);

    this.showErrors();
    console.log(this.prevLink);
  }

  showErrors() {
    //console.debug('errors', this.errors);
  }

  getUrl(url, previousUrl) {
    //if (this.links[url]) return;
    this.prevLink[url] = "Previous Url: " + previousUrl;

    return new Promise((resolve) => {
      const external = this.isExternal(url);

      fetch(url, this.options)
        .then((response) => {
          this.handleResponse(response, external);

          resolve();
        })
        .catch((error) => {
          this.handleError({ url, error, previousUrl });

          resolve();
        });
    });
  }

  isExternal(url) {
    const origin = document.location.origin;
    const regex = new RegExp(`^(${origin})?`);

    return url.match(regex) ? false : true;
  }

  async handleResponse(response, external) {
    const { url } = response;

    if (this.links[url]) return;

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

  handleError(data) {
    const { url, error, previousUrl } = data;
    //console.log(error);
    //this.errorPrevLink[url] = previousUrl;
    this.errors.push({
      url,
      error,
      previousUrl
    });
  }

  async getLinksOnSite(site, url) {
    const links = site.querySelectorAll('a[href]');
    for (var i = 0; i < links.length; i++) {
      links[i].href = this.normalizeLink(links[i].href)
      const link = links[i];
      const linkUrl = this.getAbsoluteUrl(link, url);

      if (this.isValidLink(linkUrl) && !this.links[linkUrl]) {
        await this.getUrl(linkUrl, url);
      }
    }
  }

  normalizeLink(link) {
    link = link.endsWith('.html') ? link.slice(0, -5) : link;
    link = link.endsWith('/') ? link.slice(0, -1) : link;
    return link
  }

  getAbsoluteUrl(link, siteUrl) {
    const href = link.getAttribute('href');
    const isAbsolute = href.indexOf('/') !== -1;

    return isAbsolute ? link.href : `${siteUrl}${href}`;
  }

  isValidLink(url) {
    const regex = /^(http(s)?:\/\/)?[\w.-]+(:\d+)?(\/[\w\.-]*)*$/g;

    return url.match(regex) ? true : false;
  }
}

// TODO bug when the path is not absolute modern-workplace/microsoft-endpoint-manager/ -> de/modern-workplace/microsoft-endpoint-manager/

/*
links.forEach(function (link) {
  var reportLine = { url: link.getAttribute('href'), status: 0, redirectedTo: '', message: '', element: link };
  linkReport.push(reportLine);

  console.log('HEAD ' + reportLine.url);

  fetch(reportLine.url, {
    method: 'HEAD',
    mode: 'cors',
    //mode: 'no-cors',
    redirect: 'follow',
  })
    .then(function (response) {
      linksChecked++;
      reportLine.status = response.status;
      reportLine.message =
        response.statusText +
        ' | ' +
        response.type +
        ' | ' +
        (response.message || '') +
        ' | ' +
        JSON.stringify(response.headers);
      if (response.redirected) {
        reportLine.redirectedTo = response.url;
      }
      console.table(response);
    })
    .catch(function (error) {
      reportLine.message = error;
      console.table(error);
      linksChecked++;
    });
});

function imgreport(links) {
  links.forEach(function (link) {
    if (link.status == 0) {
      // trigger error messages with status
      // to the console for status of 0
      var img = new Image();
      img.src = link.url;
    }
  });
}

var finishReport = setInterval(function () {
  if (linksChecked >= linkReport.length) {
    console.table(linkReport);
    imgreport(linkReport);
    clearInterval(finishReport);
  }
}, 3000);


*/
