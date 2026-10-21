<script>
import { h, defineComponent } from 'vue';

export default defineComponent({
  tagName: 'wrapper-slot-items',
  props: {
    // A slot render function, called in render().
    items: {
      type: Function,
      default: () => [],
    },
  },
  render() {
    const possibleItems = this.items();
    const items = typeof possibleItems[0]?.type === 'symbol' ? possibleItems[0].children : possibleItems;

    if (items.length === 0) return null;

    return items.map((item) => h('div', { class: 'wrapper-slot-items__item' }, item));
  },
});
</script>
