import State from './state.js';

class AbsoluteScroller {
  static rootSelector = '.is-absolute-scroller';
  static instances = [];

  constructor(root) {
    this.root = root;

    this.offsetTop = this.root.offsetTop;
    this.offsetBottom = this.root.offsetTop + this.root.offsetHeight;

    this.firstChild = document.querySelector('main > *:first-child');

    this.setup();
    this.bindEvents();
    this.setStickyPosition();
  }

  bindEvents() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  handleScroll() {
    this.setStickyPosition();
  }

  updateClipPath(position, topValue) {
    const offsetTop = this.spacer.offsetTop - topValue;
    const offsetBottom = offsetTop + this.spacer.offsetHeight;

    const step = (offsetBottom - offsetTop) / 100;
    const percentage = (position - offsetTop) / step;
    const clipPath = 'inset(0 0 ' + percentage + '% 0)';

    this.root.style.clipPath = clipPath;
  }

  isFirstChild(element) {
    return this.firstChild === element;
  }

  setStickyPosition() {
    const headerHeight = document.querySelector('header')?.offsetHeight || 0;
    const scrollPosition = window.scrollY;
    const viewPortOverflow = this.root.offsetHeight - window.innerHeight;
    const scrollThreshold = viewPortOverflow > 0 ? this.offsetBottom : this.offsetBottom - headerHeight;

    /* if (scrollPosition <= headerHeight) {
      this.disableStickyness();
    } else */ if (scrollPosition > scrollThreshold - window.innerHeight) {
      const topValue = viewPortOverflow > 0 ? -viewPortOverflow : this.isFirstChild(this.root) ? 0 : headerHeight;

      this.root.classList.add(State.STICKY);
      this.root.style.top = topValue + 'px';

      this.updateClipPath(scrollPosition, topValue);
    } else {
      this.disableStickyness();
    }
  }

  disableStickyness() {
    this.root.classList.remove(State.STICKY);
    this.root.style.top = '';
    this.root.style.clipPath = '';
  }

  setup() {
    const parent = this.root.parentNode;

    this.spacer = document.createElement('div');

    if (!parent) return;

    this.spacer.classList.add('absolute-scroller__spacer');

    this.root.style.height = this.spacer.style.height = this.root.clientHeight + 'px';
    this.root.style.width = this.spacer.style.width = this.root.clientWidth + 'px';

    parent.insertBefore(this.spacer, this.root.nextSibling);

    this.root.dataset.absoluteScroller = true;
  }

  static init() {
    this.instances = [];

    [].forEach.call(document.querySelectorAll(this.rootSelector), (element) => {
      this.instances.push(new this(element));
    });
  }
}

export default AbsoluteScroller;
