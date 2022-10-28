export default {
  tagName: 'scroll-arrow',
  computed: {
    classList(){
      return ['d-flex flex-column justify-content-center w-100 h-200 scroll-arrow', 'vue-component']
    },
    symbolValues(){
      return this.symbol ? JSON.parse(this.symbol) : "";
    }
  },
  methods:{
    handleClick(e){
      const scrollValue = 500; //change the way it should be
      //const test = this.$refs.arrow.scrollLeft; //this should be our currentScrollY position
      const currentScrollY = window.scrollY;
      const newScrollY = scrollValue + currentScrollY;

      window.scrollTo({
        top: newScrollY,
        behavior: 'smooth',
      });

      //console.log(this.$refs.arrow);
    }
  },
  props: {
    symbol: {
      default: null,
    },
  },
  template: `
  <div :class="classList">
    <div class="scroll-arrow__test" >test</div>
    <icon ref="arrow" :icon="symbolValues.icon" :onclick="handleClick"  />
    <div class="scroll-arrow__test" >test</div>
  </div>
  `,
};
