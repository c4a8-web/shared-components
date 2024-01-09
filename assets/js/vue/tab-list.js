export default {
  tagName: 'tab-list',
  data() {
    return {
      smallVariant: 'tab-list--small',
    };
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
      return ['tab-list vue-component', this.tabs ? 'px-4 px-lg-0' : '', this.variantClass];
    },
    listClassList() {
      return ['tab-list__list row nav nav-pills'];
    },
    isSmall() {
      return this.variantClass === this.smallVariant;
    },
  },
  methods: {
    tabClassList(index) {
      return ['tab-list__tab rounded', index === 0 ? 'active' : ''];
    },
    ariaSelected(index) {
      return index === 0 ? true : false;
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
      const current = e.currentTarget;

      if (!current.href) return;

      const tabContent = document.getElementById(current.href.split('#')[1]);

      if (tabContent === null) return;

      document.dispatchEvent(new CustomEvent(Events.REFRESH_ANIMATE_NUMBERS, { detail: { target: tabContent } }));
    },
  },
  props: {
    list: Array,
    tabs: Boolean,
    variant: String,
  },
  template: `
    <div :class="classList">
      <ul :class="listClassList" role="tablist">
        <li v-for="(tab, index) in list" :class="columnClassList">
          <a v-bind="linkAttributes(tab, index)"
            :class="tabClassList(index)" @click="handleClick">
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
