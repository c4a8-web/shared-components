export default {
  tagName: 'aside-wrapper',
  props: {
  },
  template: `
<div class="aside__wrapper vue-component">
  <div class="left__side">
    <slot name='content'></slot>
  </div>
  <aside class="right__side">
    <slot name='aside'></slot>
  </aside>
</div>
  `,
};
