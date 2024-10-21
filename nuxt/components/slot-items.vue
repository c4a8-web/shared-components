<script>
export default {
  tagName: 'slot-items',
  props: {
    items: {
      default: [],
    },
  },
  render(h) {
    const items = this.items();

    const renderList = [];

    items.forEach((item, index) => {
      if (item.props && !item?.props?.style) {
        item.props.style = `--utility-animation-index: ${index + 1}`;
      }

      renderList.push(item);
    });

    return renderList;
  },
};
</script>
