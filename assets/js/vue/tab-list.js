import Events from '../events.js';

export default {
  tagName: 'tab-list',
  data() {
    return {
      smallVariant: 'tab-list--small',
      showLeftArrow: false,
      showRightArrow: false,
      currentIndex: 0,
    };
  },
  mounted() {
    this.handleScroll();
  },
  computed: {
    columnClassList() {
      const maxColumns = 12;
      const breakpointClass = !this.tabs ? 'lg-' : '';
      const columnClass = 'col-' + breakpointClass + maxColumns / this.list.length;

      return [this.tabs ? 'px-2 px-lg-3 nav-item' : 'mb-6 mb-md-8 mb-lg-0', this.isSmall ? '' : columnClass];
    },
    variantClass() {
      return this.variant ? this.variant : this.smallVariant;
    },
    classList() {
      return [
        'tab-list vue-component',
        this.tabs ? 'px-4 px-lg-0' : '',
        this.variantClass,
        this.showLeftArrow ? 'show-left-arrow' : '',
        this.showRightArrow ? 'show-right-arrow' : '',
      ];
    },
    listClassList() {
      return ['tab-list__list row nav nav-pills'];
    },
    isSmall() {
      return this.variantClass === this.smallVariant;
    },
  },
  methods: {
    canScrollLeft() {
      const tabList = this.$refs['tabList'];

      if (!tabList) return;

      return tabList.scrollLeft > 0;
    },
    canScrollRight() {
      const tabList = this.$refs['tabList'];

      if (!tabList) return;

      return tabList.scrollLeft + tabList.clientWidth < tabList.scrollWidth - 2;
    },
    tabClassList(index) {
      return ['tab-list__tab rounded', index === this.currentIndex ? 'active' : ''];
    },
    ariaSelected(index) {
      return index === this.currentIndex ? true : false;
    },
    boxClassList(tab) {
      return ['tab-list__box rounded', !tab.link ? 'bg-white shadow-lg' : ''];
    },
    isLink(tab) {
      return tab.link ? tab.link.href : null;
    },
    linkAttributes(tab, index) {
      const attrs = {};

      if (tab.link) {
        Object.assign(attrs, {
          href: tab.link.href,
          target: tab.link.target,
        });
      }

      if (tab.id) {
        Object.assign(attrs, {
          id: tab.id + '-tab',
          'data-toggle': 'pill',
          role: 'tab',
          'aria-controls': tab.id,
          'aria-selected': this.ariaSelected(index),
        });
      }

      return attrs;
    },
    handleClick(e) {
      console.log('🚀 ~ file: tab-list.js:91 ~ handleClick ~ e:', e);
      const current = e.currentTarget;

      if (!current.href) return;

      const index = Array.prototype.indexOf.call(this.$refs['link'], current);

      this.currentIndex = index;

      const tabContent = document.getElementById(current.href.split('#')[1]);
      console.log('🚀 ~ file: tab-list.js:103 ~ handleClick ~ tabContent:', tabContent);

      if (tabContent === null) return;

      document.dispatchEvent(new CustomEvent(Events.REFRESH_ANIMATE_NUMBERS, { detail: { target: tabContent } }));
    },
    handleScroll() {
      this.showLeftArrow = this.canScrollLeft();
      this.showRightArrow = this.canScrollRight();
    },
    scrollToTab(index) {
      const tabList = this.$refs['tabList'];
      const activeTab = this.$refs['tab'][this.currentIndex];

      if (!tabList || !activeTab) return;

      const nextTab = this.$refs['tab'][index];

      if (!nextTab) return;

      const nextTabPosition = nextTab.offsetLeft;

      tabList.scrollLeft = index === 0 ? 0 : nextTabPosition;

      nextTab.querySelector('a').click();
    },
    scrollToNext() {
      this.scrollToTab(this.currentIndex + 1);
    },
    scrollToPrevious() {
      this.scrollToTab(this.currentIndex - 1);
    },
  },
  props: {
    list: Array,
    tabs: Boolean,
    variant: String,
  },
  template: `
    <div :class="classList">
      <div class="tab-list__controls">
        <div class="tab-list__left" @click="scrollToPrevious">
          <div class="tab-list__arrow-icon"></div>
        </div>
        <div class="tab-list__right" @click="scrollToNext">
          <div class="tab-list__arrow-icon"></div>
        </div>
      </div>
      <ul :class="listClassList" role="tablist" ref="tabList" @scroll="handleScroll">
        <li v-for="(tab, index) in list" :class="columnClassList" ref="tab">
          <a v-bind="linkAttributes(tab, index)"
            :class="tabClassList(index)" @click="handleClick" ref="link">
            <div class="tab-list__content">
              <div :class="boxClassList(tab)">
                <div class="d-flex flex-column align-items-center position-relative z-index-2">
                  <h2 class="tab-list__text mb-4 mb-md-6 text-center" v-if="tab.title">
                    {{ tab.title }}
                  </h2>
                  <p class="mb-6 flex-grow-1" v-if="tab.description">{{ tab.description }}</p>
                    <cta
                      text=tab.cta.text
                      href=tab.cta.href
                      target=tab.cta.target
                      skin=tab.cta.skin
                      classes="align-self-center z-index-2"
                      v-if="tab.cta != tab.href"
                    ></cta>
                </div>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  `,
};
