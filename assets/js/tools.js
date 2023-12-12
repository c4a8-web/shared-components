class Tools {
  static defaultLang = 'de';
  static urlSeperator = '#';
  static priceFormatter = new Intl.NumberFormat('de-DE', {
    style: 'decimal',
    maximumFractionDigits: 0,
  });
  static storagePrefix = '@gab_';
  static storybookPath = '/shared-components';

  static decodeHTML = (input) => {
    const document = new DOMParser().parseFromString(input, 'text/html');

    return document.documentElement.textContent;
  };

  static intersection = (r1, r2) => {
    const xOverlap = Math.max(0, Math.min(r1.x + r1.width, r2.x + r2.width) - Math.max(r1.x, r2.x));
    const yOverlap = Math.max(0, Math.min(r1.y + r1.height, r2.y + r2.height) - Math.max(r1.y, r2.y));
    const overlapArea = xOverlap * yOverlap;

    return overlapArea;
  };

  static isInViewportPercent(element, percent) {
    const rect = element.getBoundingClientRect();

    const height = window.innerHeight || document.documentElement.clientHeight;
    const width = window.innerWidth || document.documentElement.clientWidth;

    const dimension = { x: rect.x, y: rect.y, width: rect.width, height: rect.height };
    const viewport = { x: 0, y: 0, width, height };
    const divsize = dimension.width * dimension.height;
    const overlap = Tools.intersection(dimension, viewport);

    return percent <= (overlap / divsize) * 100;
  }

  static getScrollTop(element) {
    if (!element) return;

    const header = document.querySelector('header');
    const headerOffset = header ? header?.offsetHeight + 40 : 0;
    const elementPosition = element.getBoundingClientRect().top;

    return elementPosition - headerOffset + window.scrollY;
  }

  static scrollIntoView(element, smooth) {
    if (element) {
      window.scrollTo({
        top: Tools.getScrollTop(element),
        behavior: smooth ? 'smooth' : 'auto',
      });
    }
  }

  static getLang() {
    return (document.querySelector('html').getAttribute('lang') || defaultLang).toLowerCase();
  }

  static isNotDefaultLang() {
    return this.getLang() !== this.defaultLang;
  }

  static scrollToTop() {
    Tools.scrollIntoView(document.querySelector('body'), true);
  }

  static getParentComponent(element) {
    return Tools.getParent(element, '.is-component');
  }

  static getParent(element, selector) {
    // TODO refactor so that only elements below main are selected as parent

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
    const path = e.composedPath ? e.composedPath() : e.path;

    if (!path) return false;

    return !path.some((element) => element.className && element.className.includes && element.className.includes(name));
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

  static isTrue(value) {
    return value === true || value === 'true';
  }

  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sleep(milliseconds) {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  }

  static randomRange(from, to) {
    return Math.floor(Math.random() * (to - from + 1) + from);
  }

  static uuid() {
    const randomData = Date.now().toString(16) + Math.random().toString(4) + '0'.repeat(16);
    const random = Tools.randomRange(0, 8);
    const randomSecond = Tools.randomRange(0, 16);

    return (
      'u' +
      [randomData.substring(random, random + 8), randomData.substring(randomSecond, randomSecond + 4)]
        .join('-')
        .replaceAll('.', '9')
    );
  }

  static getBreakpoint() {
    const styles = getComputedStyle(document.body);

    return styles.getPropertyValue('--breakpoint').trim();
  }

  static isBelowBreakpoint(breakpoint) {
    let breakpointArray = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
    const getBreakpoint = Tools.getBreakpoint();
    let breakpointIndex = breakpointArray.indexOf(breakpoint);

    return breakpointIndex >= breakpointArray.indexOf(getBreakpoint);
  }

  static isUpperBreakpoint() {
    return !Tools.isBelowBreakpoint('md');
  }

  static getYoutubeThumbnail(videoURL) {
    let videoId;
    const regExp1 = videoURL.match(/youtube\.com.*(\?v=|vi=)(.{11})/);
    const regExp2 = videoURL.match(/youtu\.be\/(.{11})/);

    if (regExp1) {
      videoId = regExp1[2];
    } else if (regExp2) {
      videoId = regExp2[1];
    }

    return `https://i1.ytimg.com/vi/${videoId}/maxresdefault.jpg`;
  }

  static truncateWords(string, number) {
    if (!string) return;

    const splitted = string.split(' ');
    const truncated = splitted.slice(0, number).join(' ');

    return splitted.length > number ? truncated + ' ...' : truncated;
  }

  static stripHtml(string) {
    if (!string) return;

    return string.replace(new RegExp(/<.*?>/g), '');
  }

  static isGermanDate(date) {
    return date.match(/^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/) ? true : false;
  }

  static isStorybook() {
    return window.STORYBOOK_ENV === 'HTML' ? true : false;
  }

  static isTestingStorybook() {
    return document.location.pathname.indexOf(Tools.storybookPath) !== -1;
  }

  static getSiteAssetPath(path) {
    return Tools.isTestingStorybook() ? `${Tools.storybookPath}${path}` : path;
  }

  static getAssetPath(path) {
    const absolutePath = '/_includes/shared-components/assets/';

    return Tools.isStorybook() ? `../assets/${path}` : `${absolutePath}${path}`;
  }

  static findRecursive(obj, matcher, callback) {
    let found = false;
    let result;
    let currentKey;
    let baseObj;

    function finder(obj, matcher, parentObj, callback) {
      if (found) return;

      if (matcher(obj, currentKey)) {
        found = true;

        result = callback(obj, parentObj);

        return;
      }

      for (let key in obj) {
        if (typeof obj[key] === 'object') {
          if (obj === baseObj) {
            currentKey = key;
          }

          finder(obj[key], matcher, obj, callback);
        }
      }
    }

    baseObj = obj;

    finder(obj, matcher, obj, callback);

    return result;
  }

  static storageSave(key, value) {
    localStorage.setItem(Tools.storagePrefix + key, JSON.stringify(value));
  }

  static storageGet(key) {
    return localStorage.getItem(Tools.storagePrefix + key);
  }

  static getJSON(data) {
    if (data && typeof data === 'object' && Object.keys(data)?.length > 0) return data;

    if (data && typeof data === 'string') {
      try {
        return JSON.parse(data);
      } catch (error) {
        console.error('Error parsing JSON:', data);

        return;
      }
    }

    return;
  }

  static getElementBgColor(element) {
    if (!element || element.nodeType !== Node.ELEMENT_NODE) return;

    const color = window.getComputedStyle(element).backgroundColor;

    return color === 'rgba(0, 0, 0, 0)' ? null : color;
  }

  static isValidTimeFormat(timeStr) {
    const regex = /^(\d{1,2}(:\d{2})?-\d{1,2}(:\d{2})? Uhr)$/;

    return regex.test(timeStr);
  }

  static standardizeTimeFormat(time) {
    if (!this.isValidTimeFormat(time)) return time;

    const timeKeyWord = 'Uhr';

    let times = time.split('-');
    let startTime = times[0].trim();

    if (!startTime.includes(':')) {
      startTime += ':00';
    }

    if (startTime.length === 4) {
      startTime = '0' + startTime;
    }

    let endTime = times[1].trim().replace(` ${timeKeyWord}`, '');

    if (!endTime.includes(':')) {
      endTime += ':00';
    }

    if (endTime.length === 4) {
      endTime = '0' + endTime;
    }

    return `${startTime} - ${endTime} ${timeKeyWord}`;
  }

  static convertToDate(dateStr) {
    const match = dateStr.match(/^(\d{1,2})\.-\d{1,2}\.(\d{1,2})\.(\d{4})$/);

    if (match) {
      const radix = 10;
      const day = parseInt(match[1], radix);
      const month = parseInt(match[2], radix) - 1;
      const year = parseInt(match[3], radix);

      return new Date(year, month, day);
    }

    return null;
  }

  static XMLtoJSON(xml) {
    let obj = {};

    if (xml.nodeType === Node.ELEMENT_NODE) {
      if (xml.attributes.length > 0) {
        obj['@attributes'] = {};
        for (let j = 0; j < xml.attributes.length; j++) {
          const attribute = xml.attributes.item(j);
          obj['@attributes'][attribute.nodeName] = attribute.nodeValue;
        }
      }
    } else if (xml.nodeType === Node.TEXT_NODE || xml.nodeType === Node.CDATA_SECTION_NODE) {
      obj = xml.nodeValue;
    }

    if (xml.hasChildNodes()) {
      for (let i = 0; i < xml.childNodes.length; i++) {
        const item = xml.childNodes.item(i);
        const nodeName = item.nodeName;

        if (typeof obj[nodeName] === 'undefined') {
          obj[nodeName] = this.XMLtoJSON(item);
        } else {
          if (typeof obj[nodeName].push === 'undefined') {
            const old = obj[nodeName];
            obj[nodeName] = [];
            obj[nodeName].push(old);
          }
          obj[nodeName].push(this.XMLtoJSON(item));
        }
      }
    }

    return obj;
  }
}

export default Tools;
