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
    this.badgeSelector = '.page-detail__badge';
    this.detailsSelector = '.page-detail__details';

    this.hasBackClass = 'page-detail--has-back';

    this.shape = root.querySelector(this.shapeSelector);

    if (this.hasShape()) {
      this.introContent = root.querySelector(this.introContentSelector);
      this.intro = root.querySelector(this.introSelector);
    }

    this.loadingDelay = 300;
    this.percentageInViewport = 1;

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

  hasShape() {
    return this.shape ? true : false;
  }

  setStickyPosition() {
    if (!this.hasShape() || !this.isInViewport() || !Tools.isUpperBreakpoint()) return;

    const heightOffset = Tools.isBelowBreakpoint('lg') ? 10 : -40;
    const badgeHeight = this.introContent.querySelector(this.badgeSelector)?.offsetHeight || 0;
    const detailsHeight = this.introContent.querySelector(this.detailsSelector)?.offsetHeight || 0;
    const headlineHeight = this.introContent.querySelector(this.headlineSelector)?.offsetHeight || 0;

    this.stickyPosition = badgeHeight + detailsHeight + headlineHeight - heightOffset;
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
    if (!this.hasShape() || !this.isInViewport()) return;
    if (!Tools.isUpperBreakpoint()) return this.resetShape();

    if (this.isStickyShapeEnd()) {
      this.handleStickyShapeEnd();
    } else if (this.isSticky()) {
      this.shape.classList.add(State.STICKY);
      this.shape.style.top = -this.stickyPosition + 'px';
    } else {
      this.resetShape();
    }
  }

  handleStickyShapeEnd() {
    if (this.isStickyEnd()) {
      this.shape.classList.add(State.STICKY);

      this.shape.style.top = -this.stickyPosition - this.getRelativePosition() + 'px';
    }
  }

  getRelativePosition() {
    const introTop = this.intro?.style.top.replace('px', '') || 0;

    return introTop >= 0
      ? this.getStickyOffsetTop() - Math.abs(introTop)
      : this.getStickyOffsetTop() - parseFloat(introTop);
  }

  resetShape() {
    this.shape.classList.remove(State.STICKY);
    this.shape.style.top = '';
    this.isStickyEndReached = false;
  }

  isSticky() {
    return window.scrollY > this.stickyPosition;
  }

  isStickyShapeEnd() {
    return this.root.getBoundingClientRect().bottom <= window.innerHeight;
  }

  getHsStickyBlockOptions() {
    if (this.hsStickyBlockOptions) return this.hsStickyBlockOptions;

    let hsStickyBlockOptions = this.intro?.dataset.hsStickyBlockOptions;

    if (hsStickyBlockOptions) {
      hsStickyBlockOptions = JSON.parse(hsStickyBlockOptions);
    }

    this.hsStickyBlockOptions = hsStickyBlockOptions;

    return hsStickyBlockOptions;
  }

  getStickyOffsetTop() {
    return this.getHsStickyBlockOptions()?.stickyOffsetTop || 0;
  }

  isStickyEnd() {
    return this.intro?.style.top !== this.getStickyOffsetTop() + 'px';
  }

  isInViewport() {
    return Tools.isInViewportPercent(this.root, this.percentageInViewport);
  }

  handleResize() {
    this.setStickyPosition();
    this.setShapePosition();
  }
}

export default PageDetail;
