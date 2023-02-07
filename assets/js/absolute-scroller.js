import State from './state.js';

class AbsoluteScroller {
  static rootSelector = '.is-absolute-scroller';
  static instances = [];

  constructor(root) {
    this.root = root;

    this.offsetTop = this.root.offsetTop;
    this.offsetBottom = this.root.offsetTop + this.root.offsetHeight;

    this.setup();

    this.bindEvents();
  }

  bindEvents() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  handleScroll() {
    this.setStickyPosition();
  }

  updateClipPath(position) {
    const step = (this.offsetBottom - this.offsetTop) / 100;
    const percentage = (position - this.offsetTop) / step;
    console.log('AbsoluteScroller ~ updateClipPath ~ percentage', percentage);
    const clipPath = 'inset(0 0 ' + percentage + '% 0)';

    this.root.style.clipPath = clipPath;
  }

  setStickyPosition() {
    const headerHeight = document.querySelector('header')?.offsetHeight || 0;
    console.log('AbsoluteScroller ~ setStickyPosition ~ headerHeight', headerHeight);
    const scrollPosition = window.scrollY;
    const viewPortOverflow = this.root.offsetHeight - window.innerHeight;
    const scrollThreshold = viewPortOverflow > 0 ? this.offsetBottom : this.offsetBottom - headerHeight;

    if (scrollPosition > scrollThreshold - window.innerHeight) {
      const topValue = viewPortOverflow > 0 ? -viewPortOverflow : headerHeight;

      this.root.classList.add(State.STICKY);
      this.root.style.top = topValue + 'px';

      this.updateClipPath(scrollPosition);
    } else {
      this.root.classList.remove(State.STICKY);
      this.root.style.top = '';
      this.root.style.clipPath = '';
    }
  }

  setup() {
    // TODO figure out how this will work with multiple elements on the site
    // TODO fix z-index can't click anything issue. maybe all elements will get a z-index of 5 and this will be at 4?
    // TODO more than one element that can be sticky
    // return;

    const spacer = document.createElement('div');
    const parent = this.root.parentNode;

    if (!parent) return;

    spacer.classList.add('absolute-scroller__spacer');

    this.root.style.height = spacer.style.height = this.root.clientHeight + 'px';
    this.root.style.width = spacer.style.width = this.root.clientWidth + 'px';

    parent.insertBefore(spacer, this.root.nextSibling);

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
