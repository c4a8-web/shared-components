import { State } from '/_includes/shared-components/storybook-static/js/bundle/index.js';

console.info('Production App');

// Initialization of page related code
window.pageisready = true;

class TagFilter {
  static rootSelector = '.tags';
  static instances = [];

  constructor(root) {
    this.root = root;
    this.paramName = 'tag';
    this.postTeaserSelector = '.post-teaser';
    this.dataTagsSelector = '[data-tags]';
    this.buttonSelector = '.tags__btn';
    this.containerSelector = '.tags__container';
    this.clearSelector = '.tags__clear';

    if (this.hasParam()) {
      this.setActive();
    }

    this.bindEvents();
  }

  isOverviewPage() {
    return !document.location.href.includes('tags');
  }

  bindEvents() {
    [].forEach.call(this.root.querySelectorAll(this.buttonSelector), (element) => {
      element.addEventListener('click', this.handleClick.bind(this));
    });

    if (!this.isOverviewPage()) {
      this.root.querySelector(this.clearSelector)?.addEventListener('click', this.handleCloseClick.bind(this));
    }
  }

  handleCloseClick(e) {
    e.preventDefault();

    this.enableLoading().then((container) => {
      this.hideClear();
      this.showAllDataTags();
      this.resetTags();
      this.removeParam();
      this.disableLoading(container);
    });
  }

  handleClick(e) {
    if (!this.isOverviewPage()) {
      e.preventDefault();

      const current = e.currentTarget;

      this.enableLoading().then((container) => {
        const tag = current.dataset?.text;

        this.setParam(tag);
        this.setActive(tag);
        this.disableLoading(container);
      });
    }
  }

  disableLoading(container) {
    container.classList.add(State.SHOW);
    container.classList.remove(State.FADE);
    container.classList.remove(State.SHOW);
  }

  enableLoading() {
    return new Promise((resolve) => {
      const container = document.querySelector(this.containerSelector);

      container.classList.add(State.FADE);
      container.ontransitionend = () => {
        resolve(container);
      };
    });
  }

  removeParam() {
    const url = new URL(document.location.href);

    url.searchParams.delete(this.paramName);

    window.history.pushState({}, '', url);
  }

  setParam(param) {
    const url = new URL(document.location.href);

    url.searchParams.set(this.paramName, param);

    window.history.pushState({}, '', url);
  }

  getParam() {
    const url = new URLSearchParams(document.location.search);

    return url.get(this.paramName);
  }

  hasParam() {
    return this.getParam() ? true : false;
  }

  setActive(newTag) {
    const tag = newTag || this.getParam();

    [].forEach.call(this.root.querySelectorAll('[data-text]'), function (element) {
      element.classList.remove(State.ACTIVE);
    });

    this.root.querySelector(`[data-text="${tag}"]`)?.classList.add(State.ACTIVE);
    this.filterByTag(tag);
    this.showClear();
  }

  showClear() {
    this.root.querySelector(this.clearSelector)?.classList.remove(State.HIDDEN);
  }

  hideClear() {
    this.root.querySelector(this.clearSelector)?.classList.add(State.HIDDEN);
  }

  filterByTag(tag) {
    this.hideAllDataTags();

    [].forEach.call(document.querySelectorAll(`[data-tags='${tag}']`), function (element) {
      element.classList.remove(State.HIDDEN);
    });
  }

  hideAllDataTags() {
    [].forEach.call(document.querySelectorAll(this.dataTagsSelector), function (element) {
      element.classList.add(State.HIDDEN);
    });
  }

  showAllDataTags() {
    [].forEach.call(document.querySelectorAll(this.dataTagsSelector), function (element) {
      element.classList.remove(State.HIDDEN);
    });
  }

  resetTags() {
    this.root.querySelector(`${this.buttonSelector}.${State.ACTIVE}`)?.classList.remove(State.ACTIVE);
  }

  static init() {
    this.instances = [];

    [].forEach.call(document.querySelectorAll(this.rootSelector), (element) => {
      this.instances.push(new this(element));
    });
  }
}

$(document).on('ready', function () {
  TagFilter.init();
});
