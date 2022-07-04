export default {
  tagName: 'phone-mail',
  computed: {
    style() {
      return `fill: ${this.color}; transform: rotate(var(--icon-rotation));`;
    },
  },
  props: {
    settings: Object,
    color: String,
  },
  template: `
    <svg v-bind="settings" :style="style" viewBox="0 0 51.9 44.2">
      <path fill="none"
      d="M25.8,15.5H5.6c-0.8,0-1.5,0.7-1.5,1.5v18c0,0.8,0.7,1.5,1.5,1.5h30c0.8,0,1.5-0.7,1.5-1.5L37,31v-0.7
                L25.8,15.5z M13.2,30.2l-5.5,2.7C7.7,32.9,7.5,33,7.4,33c-0.3,0-0.5-0.1-0.7-0.3c-0.2-0.3-0.1-0.7,0.2-0.9c0,0,0.1,0,0.1-0.1
                l5.5-2.7c0.4-0.2,0.8-0.1,1.1,0.2C13.7,29.6,13.6,30,13.2,30.2C13.3,30.2,13.3,30.2,13.2,30.2z M27.7,29.8c-0.1-0.2,0-0.4,0.1-0.5
                c0.2-0.2,0.4-0.3,0.7-0.3c0.1,0,0.3,0,0.4,0.1l5.4,2.7c0.2,0.1,0.3,0.2,0.4,0.4c0.1,0.2,0,0.4-0.1,0.5c-0.2,0.2-0.4,0.3-0.7,0.3
                c-0.1,0-0.3,0-0.4-0.1L28,30.2C27.8,30.1,27.7,30,27.7,29.8z M30.7,23l-9.2,5.9c-0.1,0.1-0.3,0.1-0.4,0.1c-0.1,0-0.3,0-0.4-0.1
                L8,21.2c-0.2-0.1-0.3-0.3-0.3-0.4c0-0.2,0-0.4,0.1-0.5C7.9,20.1,8.2,20,8.4,20c0.1,0,0.3,0,0.4,0.1l12.3,7.4l8.8-5.7L30.7,23z" />
    <path fill="none" d="M41.9,32.4c0.6,0.5,1.3,0.9,2.1,1c1.1,0.2,2.2-0.1,3.1-0.7l2.2-1.5c1.1-0.8,1.4-2.4,0.6-3.5c0,0,0,0,0,0l-2.8-4
                c-0.4-0.5-1-0.9-1.6-1c-0.7-0.1-1.3,0-1.9,0.4l-1.3,0.9c-0.2,0.1-0.3,0.2-0.5,0.1c-0.2,0-0.3-0.1-0.4-0.2c-3.2-3.8-6.1-7.9-8.5-12.2
                c-0.2-0.3-0.1-0.7,0.2-0.9l1.3-0.9c1.1-0.8,1.4-2.4,0.6-3.5c0,0,0,0,0,0l-2.8-3.9c-0.4-0.5-1-0.9-1.6-1c-0.7-0.1-1.3,0-1.9,0.4
                l-2.2,1.5c-1.6,1.1-2.2,3.2-1.4,5C29,17.4,34.7,25.6,41.9,32.4z" />
    <path fill="none" d="M25.4,15.5h0.4L37,30.4v0.7l1.6,1.6v-0.6L25,13.9h-0.2c0,0.1,0,0.2,0,0.2L25.4,15.5z" />
    <path fill="none" d="M2.6,35v3h3C4,38,2.6,36.6,2.6,35L2.6,35z" />
    <path fill="none" d="M2.6,17c0-1.7,1.3-3,3-3l0,0l19.2-0.1H25l13.6,18.2V35c0,1.7-1.3,3-3,3h23V-1h-56L2.6,17z M25.7,2.2l2.2-1.5
                c1.8-1.2,4.2-0.8,5.4,1l2.8,4c1.2,1.8,0.8,4.2-1,5.4l-0.8,0.6c2.2,3.9,4.8,7.6,7.7,11l0.8-0.6c0.8-0.6,1.9-0.9,3-0.8
                c1,0.2,1.9,0.8,2.5,1.6l2.8,3.9c1.2,1.8,0.8,4.2-1,5.5c0,0,0,0,0,0l-2.1,1.5c-2.2,1.5-5.1,1.3-7-0.5C33.6,26.5,27.8,18.2,23.8,9
                C22.7,6.5,23.5,3.7,25.7,2.2z" />
    <path fill="none" d="M-44.4-45V88h140V-45H-44.4z M78.6,60h-96v-79h96V60z" />
    <path fill="none" d="M-17.4,60h96v-79h-96L-17.4,60z M58.6-1v39h-56V-1H58.6z" />
    <path d="M24.6,13.9L5.6,14c-1.7,0-3,1.3-3,3v18c0,1.7,1.3,3,3,3h30c1.7,0,3-1.3,3-3v-2.3L37,31.1l0.1,3.9
                c0,0.8-0.7,1.5-1.5,1.5h-30c-0.8,0-1.5-0.7-1.5-1.5V17c0-0.8,0.7-1.5,1.5-1.5h19.8" />
    <path d="M21.1,27.5L8.8,20.1C8.7,20,8.5,20,8.4,20c-0.2,0-0.5,0.1-0.6,0.3c-0.1,0.2-0.1,0.3-0.1,0.5
                c0,0.2,0.2,0.3,0.3,0.4l12.8,7.6c0.1,0.1,0.3,0.1,0.4,0.1c0.1,0,0.3,0,0.4-0.1l9-5.8l-0.8-1.2L21.1,27.5z" />
    <path
      d="M13.5,29.3c-0.2-0.3-0.7-0.4-1.1-0.2L7,31.7c-0.3,0.1-0.5,0.5-0.3,0.8c0,0,0,0.1,0.1,0.1
                C6.9,32.9,7.1,33,7.4,33c0.1,0,0.3,0,0.4-0.1l5.4-2.7c0.3-0.1,0.5-0.5,0.4-0.8C13.6,29.4,13.6,29.3,13.5,29.3z" />
    <path d="M28,30.2l5.5,2.7c0.1,0.1,0.2,0.1,0.4,0.1c0.3,0,0.5-0.1,0.7-0.3c0.1-0.1,0.1-0.3,0.1-0.5
                c-0.1-0.2-0.2-0.3-0.4-0.4l-5.4-2.7C28.7,29,28.5,29,28.4,29c-0.3,0-0.5,0.1-0.7,0.3c-0.1,0.1-0.1,0.3-0.1,0.5
                C27.7,30,27.8,30.1,28,30.2z" />
    <path d="M40.9,33.4c1.9,1.8,4.8,2,7,0.5l2.1-1.5c1.8-1.2,2.2-3.7,1-5.4l-2.8-4c-0.6-0.9-1.5-1.4-2.5-1.6
                c-1-0.2-2.1,0-2.9,0.6L42,22.6c-2.9-3.4-5.4-7.1-7.7-11l0.8-0.6c1.8-1.2,2.2-3.7,1-5.4l-2.8-3.9c-1.2-1.8-3.7-2.2-5.4-1l-2.2,1.6
                c-2.1,1.5-2.9,4.3-1.9,6.7C27.8,18.2,33.6,26.5,40.9,33.4z M26.5,3.4l2.2-1.5c0.5-0.4,1.2-0.5,1.9-0.4c0.7,0.1,1.2,0.5,1.6,1
                l2.8,3.9c0.8,1.1,0.5,2.7-0.6,3.5c0,0,0,0,0,0l-1.3,1c-0.3,0.2-0.4,0.6-0.2,0.9c2.4,4.3,5.3,8.4,8.5,12.2c0.1,0.1,0.3,0.2,0.4,0.2
                c0.2,0,0.4,0,0.5-0.1l1.3-0.9c0.5-0.4,1.2-0.5,1.9-0.4c0.7,0.1,1.2,0.5,1.6,1l2.8,4c0.8,1.1,0.5,2.7-0.6,3.5c0,0,0,0,0,0l-2.2,1.5
                c-0.9,0.6-2,0.9-3.1,0.7c-0.8-0.1-1.5-0.5-2.1-1c-7.1-6.8-12.9-15-16.8-24C24.3,6.6,24.9,4.5,26.5,3.4z" />
    </svg>
  `,
};
