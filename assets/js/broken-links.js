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
    this.links = {
      visited: [],
    };
    this.options = {
      // method: 'HEAD',
      mode: 'cors',
      //mode: 'no-cors',
      redirect: 'follow',
    };

    this.start();
    console.log(this.links);
  }

  async start() {
    await this.getUrl(this.rootUrl);
    this.links.visited.push(this.rootUrl);
  }

  getUrl(url) {
    return new Promise((resolve) => {
      //const external = this.isExternal(url);

      fetch(url, this.options)
        .then((response) => {
          if (!this.links.visited.includes(response.url)){
            this.links.visited.push(response.url);
            response.text().then((text) => {
              this.checkLinks(text)
            } );
          }

          resolve();
        })
        .catch((error) => {
          //this.handleError({ url, error });

          resolve();
        });
    });
  }

  async checkLinks(text) {
    let matches = [];
    let match;
    let regex = /href="(.*?)"/g;
    while (match = regex.exec(text)) {
      matches.push(match[1])
    }

    for (let i = 0; i < matches.length; i++) {
      const site = matches[i];
      const val = this.isExternal(site);

      if (!val && !this.links.visited.includes(site)) {
        this.getUrl(site);
      }
    }
  }

  isExternal(url) {
    const origin = document.location.origin;
    const regex = new RegExp(`^(${origin})?`);

    return url.match(regex) ? false : true;
  }
  /*
  showErrors() {
    console.debug('errors', this.errors);
  }




  async checkLinks() {
    const linkKeys = Object.keys(this.links);
    console.log('BrokenLinks ~ checkLinks ~ this.links', this.links);

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
    const { url, error } = data;

    this.errors.push({
      url,
      error,
    });

    console.log('BrokenLinks ~ handleError ~ error', error);
  }

  async getLinksOnSite(site, url) {
    const links = site.querySelectorAll('a[href]');

    for (var i = 0; i < links.length; i++) {
      const link = links[i];
      const linkUrl = this.getAbsoluteUrl(link, url);

      if (this.isValidLink(linkUrl) && !this.links[linkUrl]) {
        await this.getUrl(linkUrl);
      }
    }
  }

  getAbsoluteUrl(link, siteUrl) {
    const href = link.getAttribute('href');
    const isAbsolute = href.indexOf('/') !== -1;

    return isAbsolute ? link.href : `${siteUrl}${href}`;
  }

  isValidLink(url) {
    const regex = /^(http(s)?:\/\/)?[\w.-]+(:\d+)?(\/[\w\.-]*)*$/g;

    return url.match(regex) ? true : false;
  }*/
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
