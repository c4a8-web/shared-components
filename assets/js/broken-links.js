var links = document.querySelectorAll('a[href]');
var linkReport = [];
var linksChecked = 0;

// put all internal links into an array
// for each link load the page and select the body and create a new document for it and get the links on the pages again
// until the array is empty and every link got checked

class BrokenLinks {
  constructor(rootUrl) {
    this.rootUrl = rootUrl;
    this.errors = [];
    this.links = {};
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
    // this.getLinksOnSite(document);
  }

  showErrors() {
    console.debug('errors', this.errors);
  }

  getUrl(url) {
    return new Promise((resolve) => {
      fetch(url, this.options)
        // .then((response) => response.text())
        .then((response) => {
          this.handleResponse(response);

          resolve();
        })
        .catch((error) => {
          this.handleError({ url, error });

          resolve();
        });
    });
  }

  async handleResponse(response) {
    const { url } = response;

    if (this.links[url]) return;

    response.text().then((text) => {
      this.links[url] = text;

      this.checkLinks();
    });
  }

  checkLinks() {
    const linkKeys = Object.keys(this.links);

    for (let i = 0; i < linkKeys.length; i++) {
      const key = linkKeys[i];
      const linkHtml = this.links[key];

      const parser = new DOMParser();
      const site = parser.parseFromString(linkHtml, 'text/html');
      console.log('BrokenLinks ~ checkLinks ~ site', site);

      this.getLinksOnSite(site);
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

  getLinksOnSite(site) {
    const links = site.querySelectorAll('a[href]');
    console.log('BrokenLinks ~ getLinksOnSite ~ links', links);
  }
}

new BrokenLinks('http://localhost:4000');

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
