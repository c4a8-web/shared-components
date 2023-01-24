export default {
  tagName: 'wrapper-slot-items',
  props: {
    items: {
      default: [],
    },
  },
  render() {
    const h = window.vueH;
    const items = this.items();

    const renderList = [];

    items.forEach((item) => {
      const wrappedItem = h('div', { class: 'wrapper-slot-items__item' }, item);

      renderList.push(wrappedItem);
    });

    return renderList;
  },
};
