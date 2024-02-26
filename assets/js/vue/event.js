import Tools from '../tools.js';

export default {
  tagName: 'event',
  data() {
    return {
      hasMultipleDays: false,
    };
  },
  computed: {
    style() {
      return `
                --color-event-background: ${this.bgColor ? this.bgColor : 'var(--color-green-blue)'};
                --color-event-copy: ${this.color ? this.color : 'var(--color-copy-light)'};
                --color-event-time: ${this.timeColor ? this.timeColor : 'var(--color-green-blue)'};
            `;
    },
    validDate() {
      let date = new Date(this.date);

      if (isNaN(date.getTime())) {
        date = Tools.convertToDate(this.date);

        this.hasMultipleDays = true;

        if (date && isNaN(date.getTime())) return null;
      }

      return date;
    },
    dateDay() {
      if (!this.validDate) return;

      const day = this.validDate.getDate();

      return day < 10 ? `0${day}` : day;
    },
    dateMonth() {
      if (!this.validDate) return;

      const month = this.validDate.toLocaleDateString(undefined, { month: 'short' });

      return month.slice(0, 3);
    },
    dateWeekDay() {
      if (!this.validDate) return;

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
      return !this.hasMultipleDays ? Tools.standardizeTimeFormat(this.time) : this.date;
    },
    headlineLevelValue() {
      return this.headlineLevel ? this.headlineLevel : 'h4';
    },
  },
  methods: {
    handleClick() {
      if (this.external) return window.open(this.url, '_blank');

      document.location.href = this.url;
    },
  },
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
    classes: String,
    url: String,
    external: Boolean,
    headlineLevel: String,
    headlineClass: String,
  },
  template: `
    <article :class="['event vue-component', classes ? classes : null]" :style="style" @click="handleClick">
      <div class="event__inner">
        <div class="event__date">
          <div class="event__date-week-day is-uppercase">{{ dateWeekDay }}</div>
          <div class="event__date-day">{{ dateDay }}</div>
          <div class="event__date-month is-uppercase">{{ dateMonth }}</div>
        </div>
        <div class="event__content">
          <div class="event__meta">
            <time class="event__time font-size-1 bold" v-if="timeValue">{{ timeValue }}</time>
            <span class="event__category font-size-1 bold is-uppercase" v-if="category">{{ category }}</span>
          </div>
          <headline :class="['event__headline', headlineClass ? headlineClass : '']" :text="title" :level="headlineLevelValue" />
          <p class="event__text font-size-2 thin">{{ text }}</p>
        </div>
        <div class="event__image-container is-background" v-if="imageValue">
          <v-img class="event__image" :cloudinary="cloudinary" :img="imageValue.img" :alt="imageValue.alt" lazy="true">
        </div>
      </div>
    </article>
  `,
};
