import State from './state.js';
import Events from './events.js';
import Tools from './tools.js';

class StickyScroller {
  static rootSelector = '.is-sticky-scroller';
  static instances = [];

  constructor(root) {
    this.root = root;

    this.setOffsets();
    this.setMarginTop();

    this.firstChild = document.querySelector('main > *:first-child');

    this.isUpdating = false;
    this.maxPercentage = 100;
    this.lastPercentage = false;

    this.header = document.querySelector('header');
    this.headerSpacer = document.querySelector('.header__spacer');
    this.main = document.querySelector('main');

    this.setup();
    this.bindEvents();
    this.addDebugPositions();
    this.setStickyPosition();
  }

  bindEvents() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
    document.addEventListener(Events.WINDOW_RESIZE, this.handleResize.bind(this));
    document.addEventListener(Events.DIMENSIONS_CHANGED, this.handleDimensionsChanged.bind(this));
  }

  addDebugPositions() {
    this.topPosition = document.createElement('div');
    this.bottomPosition = document.createElement('div');

    const main = document.querySelector('main');

    main.appendChild(this.topPosition);
    main.appendChild(this.bottomPosition);

    this.bottomPosition.style.position = this.topPosition.style.position = 'absolute';

    this.bottomPosition.style.boxSizing = 'content-box';
    this.bottomPosition.style.left = this.topPosition.style.left = 0;
    this.bottomPosition.style.width = this.topPosition.style.width = '30px';
    this.bottomPosition.style.height = this.topPosition.style.height = '2px';
    this.bottomPosition.style.backgroundColor = 'rgba(255, 255, 0, 1)';
    this.bottomPosition.style.border = '1px solid rgb(0, 0, 0)';
    this.topPosition.style.backgroundColor = 'rgba(255, 0, 0, 1)';
    this.bottomPosition.style.zIndex = this.topPosition.style.zIndex = 1000;
    this.bottomPosition.style.pointerEvents = this.topPosition.style.pointerEvents = 'none';

    this.updateDebugPositions();
  }

  updateDebugPositions() {
    if (!this.topPosition || !this.bottomPosition) return;

    this.topPosition.style.top = (this.calculatedOffsetTop || this.currentTopPosition) + 'px';
    this.bottomPosition.style.top = (this.calculatedOffsetBottom || this.currentBottomPosition) + 'px';
  }

  setMarginTop() {
    const radix = 10;

    this.marginTop = parseInt(window.getComputedStyle(this.root).marginTop.replace('px', ''), radix);
  }

  handleDimensionsChanged(event) {
    if (event.detail !== this.root) return;

    this.handleResize();
  }

  setOffsets() {
    this.offsetTop = this.root.offsetTop;
    this.offsetBottom = this.offsetTop + this.root.offsetHeight;
  }

  handleResize() {
    this.resetElements();
    this.setOffsets();
    this.setDimensions();
    this.setPositions();
    this.setStickyPosition();
  }

  handleScroll() {
    if (this.isUpdating) return;

    this.isUpdating = true;

    window.requestAnimationFrame(this.setStickyPosition.bind(this));
  }

  getHeaderHeight() {
    return !this.isHeaderSticky() ? this.header?.offsetHeight || 0 : this.headerSpacer?.offsetHeight || 0;
  }

  isHeaderSticky() {
    if (!this.header) return false;

    const computedHeaderStyle = window.getComputedStyle(this.header);

    return (
      computedHeaderStyle.position === 'fixed' ||
      computedHeaderStyle.position === 'absolute' ||
      computedHeaderStyle.position === 'sticky'
    );
  }

  updateClipPath(percentage) {
    const clipPath = `inset(0 0 ${percentage}% 0)`;

    this.root.style.clipPath = clipPath;

    this.isUpdating = false;
  }

  isFirstChild(element) {
    return this.firstChild === element;
  }

  isSticky() {
    return this.root.classList.contains(State.STICKY);
  }

  setPositions() {
    this.setTopPosition();
    this.setBottomPosition();
  }

  setTopPosition() {
    this.currentTopPosition = this.root.offsetTop;
  }

  setBottomPosition() {
    this.currentBottomPosition = this.root.offsetTop + this.root.offsetHeight;
  }

  getMainOffsetTop() {
    return this.main?.offsetTop || 0;
  }

  getPercentage(position, topValue) {
    this.calculatedOffsetTop = this.currentTopPosition - topValue - this.marginTop + this.getMainOffsetTop();
    this.calculatedOffsetBottom = this.currentBottomPosition - topValue + this.getMainOffsetTop();

    if (this.marginTop < 0) {
      this.calculatedOffsetBottom -= this.marginTop;
    }

    let localPosition = position;
    let percentage;

    if (this.calculatedOffsetBottom >= localPosition) {
      let step = this.root.offsetHeight / 100;

      if (this.calculatedOffsetTop < 0) {
        percentage = localPosition / step;
      } else {
        percentage = (localPosition - this.calculatedOffsetTop) / step;
      }
    } else {
      percentage = this.maxPercentage;
    }

    return percentage;
  }

  isOutOfViewport(percentage) {
    return percentage >= this.maxPercentage || percentage < 0;
  }

  setStickyPosition() {
    console.group();
    console.log(this.root.classList);
    const headerHeight = this.getHeaderHeight();
    const scrollPosition = window.scrollY;
    const viewPortOverflow = this.root.offsetHeight - window.innerHeight;
    console.log(
      '🚀 ~ file: sticky-scroller.js:191 ~ StickyScroller ~ setStickyPosition ~ viewPortOverflow:',
      viewPortOverflow
    );
    const scrollThreshold = viewPortOverflow > 0 ? this.offsetBottom : this.offsetBottom - headerHeight;
    console.log(
      '🚀 ~ file: sticky-scroller.js:196 ~ StickyScroller ~ setStickyPosition ~ this.offsetBottom:',
      this.offsetBottom
    );
    console.log(
      '🚀 ~ file: sticky-scroller.js:186 ~ StickyScroller ~ setStickyPosition ~ scrollThreshold:',
      scrollThreshold
    );

    let topValue = this.isFirstChild(this.root) ? 0 : viewPortOverflow > 0 ? -viewPortOverflow : 0;

    topValue = topValue - this.marginTop;

    const percentage = this.getPercentage(scrollPosition, topValue);
    console.log('🚀 ~ file: sticky-scroller.js:191 ~ StickyScroller ~ setStickyPosition ~ percentage:', percentage);
    const outOfViewport = this.isOutOfViewport(percentage);
    console.log(
      '🚀 ~ file: sticky-scroller.js:193 ~ StickyScroller ~ setStickyPosition ~ outOfViewport:',
      outOfViewport
    );
    const isNotOverflowing = scrollPosition > scrollThreshold - window.innerHeight;
    console.log(
      '🚀 ~ file: sticky-scroller.js:195 ~ StickyScroller ~ setStickyPosition ~ isNotOverflowing:',
      isNotOverflowing
    );

    console.groupEnd();

    if (!outOfViewport && isNotOverflowing) {
      if (!this.spacer.style.height) {
        this.fixScrollPosition = true;
        this.spacer.style.marginTop = this.marginTop + 'px';
        this.spacer.style.height = this.height + 'px';
        this.root.style.width = this.spacer.style.width = this.width + 'px';
        this.root.style.height = this.height + 'px';
        this.root.style.left = '50%';
        this.root.style.transform = 'translateX(-50%)';
      }

      this.root.style.top = topValue + 'px';
      this.root.classList.remove(State.OFF_SCREEN);
      this.root.classList.add(State.STICKY);

      this.updateClipPath(percentage);
    } else if (percentage === 0) {
      this.isUpdating = false;
      this.root.classList.remove(State.OFF_SCREEN);
    } else {
      console.log('disable stickyness');
      this.disableStickyness();
    }

    this.updateDebugPositions();
  }

  disableStickyness() {
    this.root.classList.remove(State.STICKY);
    this.root.classList.add(State.OFF_SCREEN);
    this.root.style.top = '';
    this.root.style.clipPath = '';
    this.root.style.width = '';
    this.root.style.height = '';
    this.spacer.style.height = '';
    this.spacer.style.marginTop = '';
    this.root.style.left = '';
    this.root.style.transform = '';

    this.isUpdating = false;
  }

  setup() {
    const parent = this.root.parentNode;

    this.spacer = document.createElement('div');

    if (!parent) return;

    this.spacer.classList.add('sticky-scroller__spacer');

    this.setDimensions();

    parent.insertBefore(this.spacer, this.root.nextSibling);

    this.root.dataset.stickyScroller = true;

    this.setPositions();
    this.setNextElementColor();
  }

  hasBackground() {
    return this.root.classList.contains(State.HAS_BACKGROUND) || Tools.getElementBgColor(this.root);
  }

  setNextElementColor() {
    if (!this.hasBackground()) return;

    const nextElement = this.spacer.nextSibling;
    const propertyName = '--color-sticky-scroller';

    if (!nextElement) return;

    const backgroundColor = Tools.getElementBgColor(nextElement) || Tools.getElementBgColor(nextElement.firstChild);

    this.spacer.style.setProperty(propertyName, backgroundColor);
    this.spacer.classList.add(State.HAS_BACKGROUND);
  }

  setDimensions() {
    const bodyWidth = document.body.getBoundingClientRect().width;

    this.width = this.root.clientWidth > bodyWidth ? bodyWidth : this.root.clientWidth;
    this.height = this.root.clientHeight;

    this.spacer.style.width = this.width + 'px';
  }

  resetElements() {
    this.root.style.top = '';
    this.spacer.style.marginTop = '';
    this.root.style.height = this.root.style.width = this.spacer.style.width = this.spacer.style.height = '';
    this.root.style.clipPath = '';
    this.root.classList.remove(State.STICKY);
  }

  static init() {
    this.instances = [];

    [].forEach.call(document.querySelectorAll(this.rootSelector), (element) => {
      this.instances.push(new this(element));
    });
  }
}

export default StickyScroller;
