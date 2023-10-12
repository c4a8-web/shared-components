export default {
  tagName: 'event',
  methods: {},
  props: {
    title: String,
    date: String,
    category: String,
    text: String,
    image: Object,
  },
  template: `
    <article class="event vue-component">
      <div class="event__date">

      </div>
      <div class="event__content">
        <span class="event__meta">
          <time>{{ date }}</time>
          <span class="event__category">{{ category }}</span>
        </span>
        <headline :text="title" level="h5" />
        <p class="event__text">{{ text }}</p>
      </div>
      <v-img class="event__image" :src="image.img" :alt="image.alt" v-if="image">
    </article>
  `,
};
