import Tools from './tools.js';

class Anchor {
  static rootSelector = '';
  static instances = [];

  constructor() {
    const hash = this.getHash();

    this.idSelector = `[id="${hash.substring(1)}"]:not([role="tabpanel"])`;
    this.idTarget = document.querySelector(this.idSelector);

    if (this.idTarget) {
      Tools.scrollIntoView(this.idTarget, true);
    }

    this.targetSelector = `a[href^="${hash}"]`;
    this.productStageSelector = '.product-stage';
    this.target = document.querySelector(this.targetSelector);
    this.links = document.querySelectorAll('a[href^="#"]:not([data-toggle])');

    this.handleTargetClick();
    this.bindEvents();
  }

  hasProductStage() {
    return document.querySelector(this.productStageSelector) ? true : false;
  }

  bindEvents() {
    this.links?.forEach((link) => {
      link.addEventListener('click', this.handleClick.bind(this));
    });
  }

  handleTargetClick() {
    if (!this.idTarget && this.target && this.hasProductStage()) {
      this.handleAfterClick(this.target, true);
    }
  }

  handleClick(e) {
    const currentLink = e.currentTarget;
    const href = currentLink?.getAttribute('href');
    const target = document.querySelector(`a[href="${href}"][data-toggle]`);

    this.handleAfterClick(target);
  }

  handleAfterClick(target, smooth) {
    if (!target) return;

    Tools.scrollIntoView(target, smooth);
    target.click();
  }

  getHash() {
    return window.location.hash;
  }

  static init() {
    this.instances = [];

    this.instances.push(new this());
  }
}

export default Anchor;
