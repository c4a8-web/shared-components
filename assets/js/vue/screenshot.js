import Tools from '../tools.js';

export default {
  tagName: 'screenshot',
  computed: {
    style() {
      return {
        'background-color': this.bgColor,
      };
    },
    leftValue() {
      return Tools.isTrue(this.left);
    },
  },
  props: {
    spacing: String,
    level: String,
    headline: String,
    copy: String,
    left: Boolean,
    bgColor: String,
    source: String,
    sourceCaption: String,
    image: Object,
    cloudinary: Boolean,
    alt: String,
    classes: String,
  },
  template: `
    <div class="screenshot full-width-container vue-component">
      <div :class="['screenshot__container container', spacing ? spacing : null]" >
        <div :class="['row d-flex align-items-center', leftValue ? 'flex-row-reverse' : null]">
          <div :class="['col-lg-4 my-4 my-lg-0 py-4', leftValue ? 'offset-lg-1' : null]">
            <headline
              :level=level
              :text=headline
            />
            <div class="screenshot__copy">
              {{ copy }}
            </div>
          </div>
          <div :class="['screenshot__img d-flex align-items-center col-lg-7', leftValue ? null : 'offset-lg-1']" :style="style">
            <a class="js-fancybox media-viewer" href="javascript:;"
              data-hs-fancybox-options='{"speed": 700}'
              :data-src="source"
              :data-caption="sourceCaption"
            >
              <v-img :img="image" :alt="alt" :cloudinary="cloudinary" class="py-4 position-relative z-index-2" />
              <span class="media-viewer-container">
                <span class="media-viewer-icon">
                  <i class="fas fa-plus"></i>
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  `,
};
