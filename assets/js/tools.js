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
}

export default Tools;
