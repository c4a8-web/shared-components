import Tools from '../tools.js';

export default {
  tagName: 'event',
  computed: {
    style() {
      return `
                --color-event-background: ${this.bgColor ? this.bgColor : 'var(--color-green-blue)'};
                --color-event-copy: ${this.color ? this.color : 'var(--color-copy-light)'};
                --color-event-time: ${this.timeColor ? this.timeColor : 'var(--color-green-blue)'};
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
      return this.imageValue && this.imageValue.cloudinary ? this.imageValue.cloudinary : true;
    },
    timeValue() {
      return Tools.standardizeTimeFormat(this.time);
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
    time: String,
    timeColor: String,
  },
  template: `
    <article class="event vue-component" :style="style">
      <div class="event__inner">
        <div class="event__date">
          <div class="event__date-week-day font-size-1 thin is-uppercase">{{ dateWeekDay }}</div>
          <div class="event__date-day font-size-5 bold thin">{{ dateDay }}</div>
          <div class="event__date-month font-size-1 thin is-uppercase">{{ dateMonth }}</div>
        </div>
        <div class="event__content">
          <div class="event__meta">
            <time class="event__time font-size-1 bold" v-if="timeValue">{{ timeValue }}</time>
            <span class="event__category font-size-1 bold is-uppercase">{{ category }}</span>
          </div>
          <headline class="event__headline" :text="title" level="h4" />
          <p class="event__text font-size-2 thin">{{ text }}</p>
        </div>
        <div class="event__image-container" v-if="imageValue">
          <v-img class="event__image" :cloudinary="cloudinary" :img="imageValue.img" :alt="imageValue.alt" lazy="true">
        </div>
      </div>
    </article>
  `,
};
