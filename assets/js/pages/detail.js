import BaseComponent from '../components/base-component.js';
import State from '../state.js';

class PageDetail extends BaseComponent {
  static rootSelector = '.page-detail';

  constructor(root, options) {
    super(root, options);

    this.containerSelector = '.page-detail__container';
    this.headlineSelector = '.page-detail__headline';
    this.ctaSelector = '.page-detail__cta .cta';
    this.introSelector = '.page-detail__intro';
    this.descriptionSelector = '.page-detail__description';
    this.hasBackClass = 'page-detail--has-back';

    this.loadingDelay = 300;

    this.templates = window.Templates;

    this.init();
  }

  showBackButton() {
    // TODO check why referrer is empty on staging. propably due to content security policy

    if (document.referrer.indexOf(document.location.host) !== -1) {
      if (this.isVueComponent()) return;

      this.root.classList.add(this.hasBackClass);
    }
  }

  init() {
    this.showBackButton();
    this.bindEvents();
    this.stopLoading();
  }

  isVueComponent() {
    return this.root.classList.contains('vue-component');
  }

  stopLoading() {
    setTimeout(() => {
      if (this.isVueComponent()) return;

      this.root.classList.remove(State.LOADING);
    }, this.loadingDelay);
  }

  queryElements() {
    this.back = this.root.querySelector(this.backSelector);
    this.cta = this.root.querySelector(this.ctaSelector);
  }

  bindEvents() {
    this.queryElements();
  }
}

export default PageDetail;
