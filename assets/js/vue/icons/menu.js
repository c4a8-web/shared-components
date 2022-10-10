export default {
  tagName: 'menu',
  computed: {
    style() {
      return `stroke: ${this.color}; transform: rotate(var(--icon-rotation));`;
    },
  },
  props: {
    settings: Object,
    color: String,
  },
  template: `
    <svg v-bind="settings" :style="style" width="46" height="33" viewBox="0 0 46 33" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="8.5" y1="5.5" x2="44.5" y2="5.5" stroke="black" stroke-width="3" stroke-linecap="round"/>
      <line x1="8.5" y1="25.5" x2="44.5" y2="25.5" stroke="black" stroke-width="3" stroke-linecap="round"/>
      <line x1="19.5" y1="15.5" x2="44.5" y2="15.5" stroke="black" stroke-width="3" stroke-linecap="round"/>
    </svg>
  `,
};
