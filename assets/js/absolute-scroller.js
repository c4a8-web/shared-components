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

  isSticky() {
    this.root.classList.contains(State.STICKY);
  }

  getPercentage(position, topValue) {
    const elementOffsetTop = this.isSticky() ? this.spacer.offsetTop : this.root.offsetTop;
    const elementOffsetHeight = this.isSticky() ? this.spacer.offsetHeight : this.root.offsetHeight;

    const offsetTop = elementOffsetTop - topValue;
    const offsetBottom = offsetTop + elementOffsetHeight;

    let percentage;

    console.log('AbsoluteScroller ~ getPercentage ~ this.root.offsetHeight', this.root.offsetHeight);
    console.log('AbsoluteScroller ~ getPercentage ~ this.root.clientHeight', this.root.clientHeight);
    console.log('AbsoluteScroller ~ getPercentage ~ this.spacer.offsetHeight', this.spacer.offsetHeight);
    console.log('AbsoluteScroller ~ getPercentage ~ this.spacer.clientHeight', this.spacer.clientHeight);
    console.log('AbsoluteScroller ~ getPercentage ~ this.spacer.offsetTop', this.spacer.offsetTop);
    console.log('AbsoluteScroller ~ getPercentage ~ topValue', topValue);
    console.log('AbsoluteScroller ~ getPercentage ~ position', position);
    console.log('AbsoluteScroller ~ getPercentage ~ offsetTop', offsetTop);
    console.log('AbsoluteScroller ~ getPercentage ~ offsetBottom', offsetBottom);

    if (offsetBottom === offsetTop && offsetBottom - window.innerHeight > position) {
      percentage = 0;
    } else if (offsetBottom >= position) {
      const step = (offsetBottom - offsetTop) / 100;

      percentage = (position - offsetTop) / step;

      console.log('AbsoluteScroller ~ getPercentage ~ step', step);
      if (!isFinite(percentage)) {
        console.log(this.root);
        console.log('####################################################################');

        percentage = 0;
      }

      // if (position > 0 && step === 0) percentage = this.maxPercentage;
      if (isNaN(percentage)) percentage = 0;
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

    const headerHeight = this.getHeaderHeight();
    const scrollPosition = window.scrollY;
    const viewPortOverflow = this.root.offsetHeight - window.innerHeight;
    const scrollThreshold = viewPortOverflow > 0 ? this.offsetBottom : this.offsetBottom - headerHeight;
    const topValue = viewPortOverflow > 0 ? -viewPortOverflow : this.isFirstChild(this.root) ? 0 : headerHeight;
    const percentage = this.getPercentage(scrollPosition, topValue);
    console.log('AbsoluteScroller ~ setStickyPosition ~ percentage', percentage + '##' + this.root.classList);

    // return;
    console.log(
      'AbsoluteScroller ~ setStickyPosition ~ this.isOutOfViewport(percentage)',
      !this.isOutOfViewport(percentage)
    );
    console.log('AbsoluteScroller ~ setStickyPosition ~ scrollPosition', scrollPosition);
    console.log('AbsoluteScroller ~ setStickyPosition ~ scrollThreshold', scrollThreshold);
    console.log('AbsoluteScroller ~ setStickyPosition ~ window.innerHeight', window.innerHeight);
    console.log(
      'AbsoluteScroller ~ setStickyPosition ~ scrollPosition > scrollThreshold - window.innerHeight',
      scrollPosition > scrollThreshold - window.innerHeight
    );

    if (!this.isOutOfViewport(percentage) && scrollPosition > scrollThreshold - window.innerHeight) {
      if (!this.spacer.style.height) {
        this.spacer.style.height = this.root.clientHeight + 'px';
      }

      console.log('WATTT');

      this.root.style.top = topValue + 'px';
      this.root.classList.remove(State.OFF_SCREEN);
      this.root.classList.add(State.STICKY);

      this.updateClipPath(percentage);
    } else if (percentage === 0) {
      // !isFinite(percentage) ||
      console.log('bin ich nicht hier??');
      this.isUpdating = false;
      this.root.classList.remove(State.OFF_SCREEN);
    } else {
      console.log('etwa hier=??');

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
