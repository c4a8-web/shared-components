import Tools from '../tools.js';

export default {
  tagName: 'event',
  computed: {
    background() {
      return this.bgColor ? this.bgColor : 'var(--color-green-blue)';
    },
    copyColor() {
      return this.color ? this.color : 'var(--color-copy-light)';
    },
    style() {
      return `
                --color-event-background: ${this.background};
                --color-event-copy: ${this.copyColor};
            `;
    },
    validDate() {
      const date = new Date(this.date);

      if (isNaN(date.getTime())) {
        throw new Error('Invalid date format');
      }

      return date;
    },
    dateDay() {
      const day = this.validDate.getDate();

      return day < 10 ? `0${day}` : day;
    },
    dateMonth() {
      const month = this.validDate.toLocaleDateString(undefined, { month: 'short' });

      return month.slice(0, 3);
    },
    dateWeekDay() {
      const weekDay = this.validDate.toLocaleDateString(undefined, { weekday: 'short' });

      return weekDay.slice(0, 2);
    },
    imageValue() {
      return Tools.getJSON(this.image);
    },
    cloudinary() {
      return false;
    },
  },
  methods: {},
  props: {
    title: String,
    date: String,
    category: String,
    text: String,
    image: Object,
    bgColor: String,
    color: String,
  },
  template: `
    <article class="event vue-component" :style="style">
      <div class="event__inner">
        <div class="event__date">
          <div class="event__date-week-day font-size-1 is-uppercase">{{ dateWeekDay }}</div>
          <div class="event__date-day font-size-5 bold thin">{{ dateDay }}</div>
          <div class="event__date-month font-size-1 is-uppercase">{{ dateMonth }}</div>
        </div>
        <div class="event__content">
          <span class="event__meta">
            <time>{{ date }}</time>
            <span class="event__category">{{ category }}</span>
          </span>
          <headline :text="title" level="h5" />
          <p class="event__text">{{ text }}</p>
        </div>
        <div class="event__image-container" v-if="imageValue">
          <v-img class="event__image" :cloudinary="cloudinary" :img="imageValue.img" :alt="imageValue.alt" lazy="true">
        </div>
      </div>
    </article>
  `,
};
