import BaseComponent from './base-component.js';
import Events from '../events.js';

class TabList extends BaseComponent {
  static rootSelector = '.tab-list';

  constructor(root, options) {
    super(root, options);

    this.tabSelector = '.tab-list__tab';
    this.bindEvents();
  }

  bindEvents() {
    [].forEach.call(this.root.querySelectorAll(this.tabSelector), (tab) => {
      tab.addEventListener('click', this.handleClick.bind(this));
    });
  }

  handleClick(e) {
    const current = e.currentTarget;
    const tabContent = document.getElementById(current.href.split('#')[1]);

    if (tabContent === null) return;

    document.dispatchEvent(new CustomEvent(Events.REFRESH_ANIMATE_NUMBERS, { detail: { target: tabContent } }));
  }
}

export default TabList;
