import State from './state.js';
import Events from './events.js';

class StickyScroller {
  static rootSelector = '.is-sticky-scroller';
  static instances = [];

  constructor(root) {
    this.root = root;

    this.setCalcuationElement();
    this.setOffsets();
    this.setMarginTop();

    this.firstChild = document.querySelector('main > *:first-child');

    this.isUpdating = false;
    this.maxPercentage = 100;
    // this.percentageOffset = 0;
    // this.maxPercentageWithOffset = this.maxPercentage + this.percentageOffset;
    this.lastPercentage = false;

    this.header = document.querySelector('header');
    this.headerSpacer = document.querySelector('.header__spacer');
    this.main = document.querySelector('main');

    this.setup();
    this.bindEvents();
    this.setStickyPosition();
  }

  bindEvents() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
    document.addEventListener(Events.WINDOW_RESIZE, this.handleResize.bind(this));
    document.addEventListener(Events.DIMENSIONS_CHANGED, this.handleDimensionsChanged.bind(this));
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
    // this.resetElements();
    // this.setOffsets();
    // this.setDimensions();
    // this.setPositions();

    // if (this.ignoreNextResizeEvent) return (this.ignoreNextResizeEvent = false);

    // this.setStickyPosition();

    // if (this.ignoreNextResizeEvent) return this.handleDimensions();

    console.log('handleResize');

    this.resetElements();
    this.setOffsets();
    this.setDimensions();
    this.setPositions();
    this.setStickyPosition();
  }

  // handleDimensions() {
  //   this.ignoreNextResizeEvent = false;

  //   console.log('no handleResize');

  //   // this.setOffsets();
  //   // this.setDimensions();
  //   // this.setPositions();
  // }

  handleScroll(e) {
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
    this.currentTopPosition = this.calculationElement.offsetTop;
    console.log(
      '🚀 ~ file: sticky-scroller.js:133 ~ StickyScroller ~ setTopPosition ~ this.currentTopPosition:',
      this.currentTopPosition
    );
  }

  setBottomPosition() {
    this.currentBottomPosition = this.calculationElement.offsetTop + this.calculationElement.offsetHeight;
  }

  getMainOffsetTop() {
    return this.main?.offsetTop || 0;
  }

  setCalcuationElement() {
    const sticky = this.isSticky();

    // this.calculationElement = sticky ? this.spacer : this.root;
    this.calculationElement = this.root;
    // console.log('🚀 ~ file: sticky-scroller.js:147 ~ StickyScroller ~ setCalcuationElement ~ sticky:', sticky);

    // console.log('🚀 this.calculationElement:', sticky ? 'spacer' : 'root');
  }

  getPercentage(position, topValue) {
    const offsetTop = this.currentTopPosition - topValue + this.getMainOffsetTop();
    const offsetBottom = this.currentBottomPosition - topValue + this.getMainOffsetTop();

    // const offsetTop = this.currentTopPosition + this.getMainOffsetTop();
    // const offsetBottom = this.currentBottomPosition + this.getMainOffsetTop();

    let localPosition = position;
    let percentage;

    if (offsetBottom >= localPosition) {
      let step = this.calculationElement.offsetHeight / 100;

      if (offsetTop < 0) {
        percentage = localPosition / step;
      } else {
        percentage = (localPosition - offsetTop) / step;
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
    this.setCalcuationElement();

    const headerHeight = this.getHeaderHeight();
    const scrollPosition = window.scrollY;
    const viewPortOverflow = this.calculationElement.offsetHeight - window.innerHeight;
    const scrollThreshold = viewPortOverflow > 0 ? this.offsetBottom : this.offsetBottom - headerHeight; //  - this.marginTop
    // console.log(
    //   '🚀 ~ file: sticky-scroller.js:189 ~ StickyScroller ~ setStickyPosition ~ scrollThreshold:',
    //   scrollThreshold
    // );

    let topValue = this.isFirstChild(this.root) ? 0 : viewPortOverflow > 0 ? -viewPortOverflow : 0;
    // console.log('🚀 ~ file: sticky-scroller.js:180 ~ StickyScroller ~ setStickyPosition ~ topValue:', topValue);

    topValue = topValue - this.marginTop;

    const percentage = this.getPercentage(scrollPosition, topValue);
    console.log('🚀  percentage:', percentage);
    const outOfViewport = this.isOutOfViewport(percentage);
    console.log('🚀  outOfViewport:', outOfViewport);
    // console.log('🚀  window.innerHeight:', scrollPosition > scrollThreshold - window.innerHeight);

    if (!outOfViewport && scrollPosition > scrollThreshold - window.innerHeight) {
      if (!this.spacer.style.height) {
        this.fixScrollPosition = true;
        this.spacer.style.marginTop = this.marginTop + 'px';
        this.spacer.style.height = this.height + 'px';
        this.root.style.width = this.spacer.style.width = this.width + 'px';
        this.root.style.height = this.height + 'px';
        // this.root.style.setProperty('margin-top', '0px', 'important');
        this.root.style.left = '50%';
        this.root.style.transform = 'translateX(-50%)';

        if (this.marginTop > 0) {
          // this.ignoreNextResizeEvent = true;
        }
      }

      this.root.style.top = topValue + 'px';
      this.root.classList.remove(State.OFF_SCREEN);
      this.root.classList.add(State.STICKY);

      this.updateClipPath(percentage);

      // if (this.fixScrollPosition && this.lastScrollPosition) {
      //   if (window.scrollY !== this.lastScrollPosition) {
      //     window.scrollTo(0, this.lastScrollPosition);
      //   }

      //   this.fixScrollPosition = false;
      // }
    } else if (percentage === 0) {
      this.isUpdating = false;
      this.root.classList.remove(State.OFF_SCREEN);
      // } else if (percentage > this.maxPercentageWithOffset || percentage < 0) {
    } else {
      this.disableStickyness();
    }

    this.lastScrollPosition = window.scrollY;
  }

  disableStickyness() {
    this.root.classList.remove(State.STICKY);
    this.root.classList.add(State.OFF_SCREEN);
    this.root.style.top = '';
    this.root.style.clipPath = '';
    this.root.style.width = '';
    this.root.style.height = '';
    // this.root.style.marginTop = '';
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
  }

  setDimensions() {
    this.width = this.root.clientWidth;
    this.height = this.root.clientHeight;

    this.spacer.style.width = this.width + 'px';
  }

  resetElements() {
    // this.root.style.top = '';

    this.spacer.style.marginTop = '';
    this.root.style.height = this.root.style.width = this.spacer.style.width = this.spacer.style.height = '';
    this.root.style.clipPath = '';
    this.root.classList.remove(State.STICKY);
    // this.root.classList.remove(State.OFF_SCREEN);
  }

  static init() {
    this.instances = [];

    [].forEach.call(document.querySelectorAll(this.rootSelector), (element) => {
      this.instances.push(new this(element));
    });
  }
}

export default StickyScroller;
