import { Liquid } from "liquidjs";

class Templates {
  constructor() {
    this.cache = {};

    this.engine = new Liquid({
      partials: ["includes"],
      dynamicPartials: false,
      extname: "html",
    });
  }

  load(template, data) {
    if (this.cache[template]) {
      return this.cache[template].then((component) => {
        return this.getHtml(component, data);
      });
    } else {
      const templateUrl = `includes/${template}.html`;

      this.cache[template] = this.createCache();

      return fetch(templateUrl)
        .then((response) => response.text())
        .then((component) => {
          this.cache[template].resolve(component);
          return this.getHtml(component, data);
        })
        .catch((error) => {
          console.error("Templates ~ fetch ~ error", error);
        });
    }
  }

  createCache() {
    let resolve,
      promise = new Promise((innerResolve) => {
        resolve = innerResolve;
      });

    promise.resolve = resolve;

    return promise;
  }

  getHtml(component, data) {
    const promise = new Promise((resolve) => {
      const tpl = this.engine.parse(component);
      const html = this.engine.renderSync(tpl, {
        include: data,
      });

      resolve(html);
    });

    return promise;
  }

  append(element, html) {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = html;

    element.appendChild(wrapper.children[0]);
  }
}

export default Templates;
