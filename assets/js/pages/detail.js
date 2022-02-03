import BaseComponent from '../components/base-component.js';
import State from '../state.js';
// import Loading from '../loading.js';

class PageDetail extends BaseComponent {
  static rootSelector = '.page-detail';

  constructor(root, options) {
    super(root, options);

    this.containerSelector = '.page-detail__container';
    this.headlineSelector = '.page-detail__headline';
    this.ctaSelector = '.page-detail__cta .cta';
    this.introSelector = '.page-detail__intro';
    this.descriptionSelector = '.page-detail__description';
    this.backSelector = '.page-detail__back';
    this.hasBackClass = 'page-detail--has-back';

    this.loadingDelay = 300;

    this.templates = window.Templates;

    // this.loading = new Loading(this.root);

    this.init();
  }

  showBackButton() {
    // TODO check why referrer is empty on staging. propably due to content security policy

    if (document.referrer.indexOf(document.location.host) !== -1) {
      this.root.classList.add(this.hasBackClass);
    }
  }

  init() {
    // this.loading.on();

    this.showBackButton();

    this.stopLoading();
  }

  stopLoading() {
    setTimeout(() => {
      // this.loading.off(true);

      this.root.classList.remove(State.LOADING);
    }, this.loadingDelay);
  }

  // queryElements() {
  //   this.back = this.root.querySelector(this.backSelector);
  //   this.cta = this.root.querySelector(this.ctaSelector);
  // }

  bindEvents() {
    // this.queryElements();
    // this.back?.addEventListener('click', this.handleBack.bind(this));
    // this.cta?.addEventListener('click', this.handleCta.bind(this));
  }

  handleBack() {
    window.history.back();
  }
}

export default PageDetail;
