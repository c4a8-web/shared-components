export default {
  tagName: 'scroll-arrow',
  computed: {
    classList(){
      return ['d-flex flex-column justify-content-center w-100 h-200 scroll-arrow', 'vue-component']
    },
    symbolValues(){
      return typeof(this.symbol) !== "object" && this.symbol !== null ? JSON.parse(this.symbol) : "";
    }
  },
  methods:{
    handleClick(e){
      const scrollValue = this.symbolValues.scrollValue;
      const currentScrollY = window.scrollY;
      const newScrollY = scrollValue + currentScrollY;

      window.scrollTo({
        top: newScrollY,
        behavior: 'smooth',
      });
    }
  },
  props: {
    symbol: {
      default: null,
    },
  },
  template: `
  <div :class="classList">
    <icon id="test" ref="arrow" :icon="symbolValues.icon" :onclick="handleClick"  />
  </div>
  `,
};
