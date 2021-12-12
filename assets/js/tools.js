class Tools {
  static urlSeperator = '#';

  static scrollIntoView(element) {
    if (element) {
      const headerOffset = document.querySelector('header').offsetHeight + 40;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition - headerOffset + window.scrollY;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'auto',
      });
    }
  }

  static getParent(element, selector) {
    const parent = element.parentNode;

    if (parent === null || parent.tagName === 'body') {
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
      const wrapper = document.createElement('div');
      wrapper.innerHTML = html?.nodeType ? html.outerHTML : html;
      const children = wrapper?.children[0];

      if (children) {
        return element.appendChild(children);
      }
    }

    return null;
  }

  static replace(element, newElement) {
    if (element && newElement) {
      element.innerHTML = newElement.innerHTML;
    }
  }

  static generateUrl(title, prefix, id) {
    let url;

    if (title && prefix) {
      url = title
        .toLowerCase()
        .replace(/\s/g, '-')
        .replace(/[&\/\\#,+()$~%.'":*?<>{}!]/g, '')
        .replace(/\u00dc/, 'ue')
        .replace(/\u00c4/, 'ae')
        .replace(/\u00d6/, 'oe')
        .replace(/\u00fc/, 'ue')
        .replace(/\u00e4/, 'ae')
        .replace(/\u00f6/, 'oe')
        .replace(/\u00df/, 'ss');

      url = prefix + Tools.urlSeperator + url.replace(/-+$/, '') + '-' + id;
    }

    return url;
  }
}

export default Tools;
