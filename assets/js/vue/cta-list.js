import Tools from '../tools.js';

export default {
  tagName: 'cta-list',
  computed: {
    classList() {
      return ['cta-list vue-component', this.classes ? this.classes : ''];
    },
    ctaList() {
      return Tools.getJSON(this.list);
    },
  },
  props: {
    list: Array,
    classes: String,
  },
  template: `
    <div :class="classList">
      <div v-for="cta in ctaList" class="cta-list__item d-inline-block mr-3 mb-2">
        <cta
          v-bind="cta"
          :text="cta.ctaText"
          :href="cta.ctaHref"
          :type="cta.ctaType"
        ></cta>
      </div>
    </div>
  `,
};
