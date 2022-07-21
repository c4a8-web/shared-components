import Tools from './tools.js';

class Anchor {
  static rootSelector = '';
  static instances = [];

  constructor() {
    const hash = this.getHash();

    this.targetSelector = `a[href^="${hash}"]`;
    this.productStageSelector = '.product-stage';
    this.target = document.querySelector(this.targetSelector);
    this.links = document.querySelectorAll('a[href^="#"]:not([data-toggle])');
    console.log("Anchor ~ constructor ~ this.links", this.links);

    this.handleTargetClick();
    this.bindEvents();
  }

  hasProductStage() {
    return document.querySelector(this.productStageSelector) ? true : false;
  }

  bindEvents() {
    this.links?.forEach((link) => {
      link.addEventListener('click', this.handleClick.bind(this));
    })
  }

  handleTargetClick() {
    if (this.target && this.hasProductStage()) {
      this.target.click();
    }
  }

  handleClick(e) {
    const currentLink = e.currentTarget;
    const href = currentLink?.getAttribute('href');
    const target = document.querySelector(`a[href="${href}"][data-toggle]`);

    if(target) {
      e.preventDefault();

      Tools.scrollIntoView(target);

      target.click();
    }
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
