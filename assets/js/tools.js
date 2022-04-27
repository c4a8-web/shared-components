class Tools {
  static urlSeperator = '#';
  static priceFormatter = new Intl.NumberFormat('de-DE', {
    style: 'decimal',
    maximumFractionDigits: 0,
  });

  static scrollIntoView(element, smooth) {
    if (element) {
      const header = document.querySelector('header');

      if (header === null) return;

      const headerOffset = header.offsetHeight + 40;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition - headerOffset + window.scrollY;

      window.scrollTo({
        top: offsetPosition,
        behavior: smooth ? 'smooth' : 'auto',
      });
    }
  }

  static scrollToTop() {
    Tools.scrollIntoView(document.querySelector('body'), true);
  }

  static getParentComponent(element) {
    return Tools.getParent(element, '.is-component');
  }

  static getParent(element, selector) {
    const parent = element.parentNode;

    if (parent === null || parent.tagName === 'body') {
      return null;
    } else {
      if (!parent.parentNode?.querySelector(selector)) {
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

  static toBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.readAsDataURL(file);
      reader.onload = () => {
        const base64 = reader.result.split(',')[1];

        resolve(base64);
      };
      reader.onerror = (error) => reject(error);
    });
  }

  static toSize(bytes) {
    const units = ['Bytes', 'KB', 'MB', 'GB', 'TB'];

    if (bytes == 0) return '0 Byte';

    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));

    return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + units[i];
  }

  static camalCaseToSnakeCase(camalCase) {
    return camalCase.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
  }

  static animateValue(element, start, end, duration, formatter = Tools.priceFormatter) {
    let startTimestamp = null;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const currentResult = progress * (end - start) + start;
      const formattedResult = formatter.format(currentResult);
      element.innerHTML = formattedResult;

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }

  static debounce = function (func, wait, immediate) {
    let timeout;

    return function () {
      const context = this;
      const args = arguments;

      var later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };

      var callNow = immediate && !timeout;

      clearTimeout(timeout);
      timeout = setTimeout(later, wait);

      if (callNow) func.apply(context, args);
    };
  };

  static isOutsideOf(name, e) {
    return !e.path.some(
      (element) => element.className && element.className.includes && element.className.includes(name)
    );
  }

  static getExtension(fileName) {
    return fileName.split('.').pop();
  }

  static validateVueProps(component) {
    const propsOptions = component?.$?.propsOptions[0];
    const props = component?.$props;
    const data = { props: {} };

    Object.keys(props).map((prop) => {
      let value = props[prop];

      if (value === '') {
        value = propsOptions[prop].default;
      }

      data.props[prop] = value;
    });

    return data;
  }
}

export default Tools;
