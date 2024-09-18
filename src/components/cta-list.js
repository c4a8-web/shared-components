import Tools from "../assets/js/tools.js";

export default {
  tagName: "cta-list",
  computed: {
    classList() {
      return ["cta-list vue-component", this.classes ? this.classes : ""];
    },
    ctaList() {
      return Tools.getJSON(this.list);
    },
  },
  methods: {
    text(cta) {
      return cta.text || cta.ctaText;
    },
    href(cta) {
      return cta.href || cta.ctaHref;
    },
    type(cta) {
      return cta.type || cta.ctaType;
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
          :text="text(cta)"
          :href="href(cta)"
          :type="type(cta)"
        ></cta>
      </div>
    </div>
  `,
};
