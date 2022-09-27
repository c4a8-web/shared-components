export default {
  tagName: 'aside-wrapper',
  methods: {
  },
  props: {
  },
  template: `
<div class="aside-wrapper vue-component">
  <div class="aside-wrapper__content">
    <slot name='content'></slot>
  </div>
  <aside class="aside-wrapper__aside">
    <slot name='aside'></slot>
  </aside>
</div>
  `,
};
