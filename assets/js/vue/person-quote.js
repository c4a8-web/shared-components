export default {
  tagName: 'person-quote',
  props: {
    img: String,
    text: String,
    name: String,
    srcSet: Object,
  },
  template: `
    <div class="person-quote">
      <div class="person-quote__img">
        <!-- TODO find a solution for site.data.imgSrcSets.square -->
        <image :img="img" cloudinary=true :imgSrcSets="imgSrcSets" />
      </div>
      <div class="person-quote__content">
        <div class="person-quote__text">{{text}}</div>
        <div class="person-quote__name">{{name}}</div>
      </div>
    </div>
  `,
};
