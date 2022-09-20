export default {
  tagName: 'aside-wrapper',
  props: {
  },
  template: `
<div class="aside__wrapper vue-component">
  <div>
    <slot name='content'></slot>
  </div>
  <aside>
    <slot name='aside'></slot>
  </aside>
</div>
  `,
};
