import State from './state.js';

class StickyScroller {
  static rootSelector = '.is-sticky-scroller';
  static instances = [];

  constructor(root) {
    this.root = root;

    this.offsetTop = this.root.offsetTop;
    this.offsetBottom = this.root.offsetTop + this.root.offsetHeight;

    this.firstChild = document.querySelector('main > *:first-child');

    this.isUpdating = false;
    this.maxPercentage = 100;

    this.header = document.querySelector('header');
    this.headerSpacer = document.querySelector('.header__spacer');
    this.main = document.querySelector('main');

    this.setup();
    this.bindEvents();
    this.setStickyPosition();
  }

  bindEvents() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
    window.addEventListener('resize', this.handleResize.bind(this));
  }

  handleResize() {
    this.resetElements();
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
    this.root.classList.contains(State.STICKY);
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
    return this.main.offsetTop;
  }

  getPercentage(position, topValue) {
    const offsetTop = this.currentTopPosition - topValue + this.getMainOffsetTop();
    const offsetBottom = this.currentBottomPosition - topValue + this.getMainOffsetTop();

    let percentage;

    if (offsetBottom >= position) {
      let step = this.root.offsetHeight / 100;

      if (offsetTop < 0) {
        percentage = position / step;
      } else {
        percentage = (position - offsetTop) / step;
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
    const headerHeight = this.getHeaderHeight();
    const scrollPosition = window.scrollY;
    const viewPortOverflow = this.root.offsetHeight - window.innerHeight;
    const scrollThreshold = viewPortOverflow > 0 ? this.offsetBottom : this.offsetBottom - headerHeight;
    const topValue = this.isFirstChild(this.root) ? 0 : viewPortOverflow > 0 ? -viewPortOverflow : 0;
    const percentage = this.getPercentage(scrollPosition, topValue);

    if (!this.isOutOfViewport(percentage) && scrollPosition > scrollThreshold - window.innerHeight) {
      if (!this.spacer.style.height) {
        this.spacer.style.height = this.root.clientHeight + 'px';
      }

      this.root.style.top = topValue + 'px';
      this.root.classList.remove(State.OFF_SCREEN);
      this.root.classList.add(State.STICKY);
      this.updateClipPath(percentage);
    } else if (percentage === 0) {
      this.isUpdating = false;
      this.root.classList.remove(State.OFF_SCREEN);
    } else {
      this.disableStickyness();
    }
  }

  disableStickyness() {
    this.root.classList.remove(State.STICKY);
    this.root.classList.add(State.OFF_SCREEN);
    this.root.style.top = '';
    this.root.style.clipPath = '';
    this.spacer.style.height = '';
    this.isUpdating = false;
  }

  setup() {
    const parent = this.root.parentNode;

    this.spacer = document.createElement('div');

    if (!parent) return;

    this.spacer.classList.add('sticky-scroller__spacer');

    this.setDimensions();

    parent.insertBefore(this.spacer, this.root.nextSibling);

    this.root.dataset.absoluteScroller = true;

    this.setPositions();
  }

  setDimensions() {
    this.root.style.height = this.root.clientHeight + 'px';
    this.root.style.width = this.spacer.style.width = this.root.clientWidth + 'px';
  }

  resetElements() {
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
