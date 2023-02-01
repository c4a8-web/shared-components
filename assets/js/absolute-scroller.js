// import Tools from './tools.js';

class AbsoluteScroller {
  static rootSelector = '.is-absolute-scroller';
  static instances = [];

  constructor(root) {
    this.root = root;

    this.setup();

    this.bindEvents();
  }

  bindEvents() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  handleScroll() {
    // console.log('handle scroll');
  }

  setup() {
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
