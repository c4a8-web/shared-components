class Tools {
  static scrollIntoView(element) {
    if (element) {
      const headerOffset = document.querySelector("header").offsetHeight + 40;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition - headerOffset + window.scrollY;

      window.scrollTo({
        top: offsetPosition,
        behavior: "auto",
      });
    }
  }

  static getParent(element, selector) {
    const parent = element.parentNode;

    if (parent === null || parent.tagName === "body") {
      return null;
    } else {
      if (!parent.parentNode.querySelector(selector)) {
        return Tools.getParent(parent, selector);
      } else {
        return parent;
      }
    }
  }

  static append(element, html) {
    if (element) {
      const wrapper = document.createElement("div");
      wrapper.innerHTML = html?.nodeType ? html.outerHTML : html;
      const children = wrapper?.children[0];

      if (children) {
        return element.appendChild(children);
      }
    }

    return null;
  }
}

export default Tools;
