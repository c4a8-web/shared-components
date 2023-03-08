import BaseComponent from '../components/base-component.js';
import State from '../state.js';
import Events from '../events.js';
import Tools from '../tools.js';

class PageDetail extends BaseComponent {
  static rootSelector = '.page-detail';

  constructor(root, options) {
    super(root, options);

    this.root = root;

    this.containerSelector = '.page-detail__container';
    this.headlineSelector = '.page-detail__headline';
    this.ctaSelector = '.page-detail__cta .cta';
    this.introSelector = '.page-detail__intro';
    this.descriptionSelector = '.page-detail__description';
    this.shapeSelector = '.page-detail__shape';
    this.introContentSelector = '.page-detail__intro-content';
    this.imgWrapperSelector = '.page-detail__img-wrapper';
    this.hasBackClass = 'page-detail--has-back';

    this.shape = root.querySelector(this.shapeSelector);
    this.introContent = root.querySelector(this.introContentSelector);
    this.imageWrapper = root.querySelector(this.imgWrapperSelector);

    this.loadingDelay = 300;

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
    this.setStickyPosition();
    this.setShapePosition();
  }

  setStickyPosition() {
    if (!Tools.isUpperBreakpoint()) return;

    const introContentHeight = this.introContent.offsetHeight;
    const imageWrapperHeight = this.imageWrapper.offsetHeight;

    this.stickyPosition = introContentHeight - imageWrapperHeight;

    console.log('PageDetail ~ setStickyPosition ~ this.stickyPosition:', this.stickyPosition);

    // TODO fix the issue on below 1200px
    // maybe add badge + details + headline height together
    this.stickyPosition = 120;
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

    document.addEventListener(Events.SCROLL_UPDATE, this.handleScroll.bind(this));
    document.addEventListener(Events.WINDOW_RESIZE, this.handleResize.bind(this));
  }

  handleScroll() {
    this.setShapePosition();
  }

  setShapePosition() {
    if (!Tools.isUpperBreakpoint()) return this.resetShape();

    if (this.isStickyEnd()) {
      if (!this.shape.classList.contains(State.STICKY)) return;

      this.shape.classList.remove(State.STICKY);
      this.shape.style.top = -this.stickyPosition + window.scrollY + 'px';
    } else if (this.isSticky()) {
      this.shape.classList.add(State.STICKY);
      this.shape.style.top = -this.stickyPosition + 'px';
    } else {
      this.resetShape();
    }
  }

  resetShape() {
    this.shape.classList.remove(State.STICKY);
    this.shape.style.top = '';
  }

  isSticky() {
    return window.scrollY > this.stickyPosition;
  }

  isStickyEnd() {
    return this.root.getBoundingClientRect().bottom <= window.innerHeight;
  }

  handleResize() {
    this.setStickyPosition();
    this.setShapePosition();
  }
}

export default PageDetail;
