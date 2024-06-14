export default {
  tagName: 'wrapper-slot-items',
  props: {
    items: {
      default: [],
    },
  },
  render() {
    const h = window.vueH;
    const possibleItems = this.items();
    const items = typeof possibleItems[0].type === 'symbol' ? possibleItems[0].children : possibleItems;

    const renderList = [];

    if (items.length === 0) return null;

    items.forEach((item) => {
      const wrappedItem = h('div', { class: 'wrapper-slot-items__item' }, item);

      renderList.push(wrappedItem);
    });

    return renderList;
  },
};
