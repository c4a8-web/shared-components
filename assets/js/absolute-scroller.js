import State from './state.js';

class AbsoluteScroller {
  static rootSelector = '.is-absolute-scroller';
  static instances = [];

  constructor(root) {
    this.root = root;

    this.offsetTop = this.root.offsetTop;
    this.offsetBottom = this.root.offsetTop + this.root.offsetHeight;

    this.firstChild = document.querySelector('main > *:first-child');

    this.isUpdating = false;
    this.maxPercentage = 100;

    this.setup();
    this.bindEvents();
    this.setStickyPosition();
  }

  // TODO handle resize for spacer
  // TODO test with new header
  // TODO check mobile

  bindEvents() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  handleScroll() {
    if (this.isUpdating) return;

    this.isUpdating = true;

    window.requestAnimationFrame(this.setStickyPosition.bind(this));
  }

  getHeaderHeight() {
    return this.isHeaderVisible() ? document.querySelector('header')?.offsetHeight || 0 : 0;
  }

  isHeaderVisible() {
    // TODO check if header is visible for mobhile

    return true;
  }

  updateClipPath(percentage) {
    // var bounds = this.spacer.getBoundingClientRect();
    // var percentage = ((Math.abs(bounds.y) * 100) / bounds.height) * 2;

    const clipPath = `inset(0 0 ${percentage}% 0)`;

    this.root.style.clipPath = clipPath;
    this.isUpdating = false;
  }

  isFirstChild(element) {
    return this.firstChild === element;
  }

  getPercentage(position, topValue) {
    const offsetTop = this.spacer.offsetTop - topValue;
    const offsetBottom = offsetTop + this.spacer.offsetHeight;

    let percentage;

    if (offsetBottom === offsetTop && offsetBottom - window.innerHeight > position) {
      percentage = 0;
    } else if (offsetBottom >= position) {
      const step = (offsetBottom - offsetTop) / 100;

      percentage = (position - offsetTop) / step;

      // if (position > 0 && step === 0) percentage = this.maxPercentage;
      if (isNaN(percentage)) percentage = 0;
    } else {
      percentage = this.maxPercentage;
    }

    return percentage;
  }

  isOutOfViewport(percentage) {
    return percentage >= this.maxPercentage;
  }

  setStickyPosition() {
    console.group();

    const headerHeight = this.getHeaderHeight();
    const scrollPosition = window.scrollY;
    const viewPortOverflow = this.root.offsetHeight - window.innerHeight;
    const scrollThreshold = viewPortOverflow > 0 ? this.offsetBottom : this.offsetBottom - headerHeight;
    const topValue = viewPortOverflow > 0 ? -viewPortOverflow : this.isFirstChild(this.root) ? 0 : headerHeight;
    const percentage = this.getPercentage(scrollPosition, topValue);
    console.log('AbsoluteScroller ~ setStickyPosition ~ percentage', percentage + this.root.classList);

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

    console.groupEnd();
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

    this.spacer.classList.add('absolute-scroller__spacer');

    this.setDimensions();

    parent.insertBefore(this.spacer, this.root.nextSibling);

    this.root.dataset.absoluteScroller = true;
  }

  setDimensions() {
    this.root.style.height = this.root.clientHeight + 'px';
    this.root.style.width = this.spacer.style.width = this.root.clientWidth + 'px';
  }

  static init() {
    this.instances = [];

    [].forEach.call(document.querySelectorAll(this.rootSelector), (element) => {
      this.instances.push(new this(element));
    });
  }
}

export default AbsoluteScroller;
