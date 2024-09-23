export default {
  tagName: 'badge',
  props: {
    text: String,
    overlapping: Boolean,
    icon: String,
    color: {
      type: String,
      default: 'var(--color-badge-background)',
    },
    textColor: {
      type: String,
      default: 'var(--color-badge-icon)',
    },
    uppercase: Boolean,
    classes: String,
  },
  computed: {
    classList() {
      return [
        'badge',
        'badge--normal',
        'font-size-1',
        'normal',
        { 'badge--overlapping': this.overlapping },
        { 'badge--uppercase': this.uppercase },
        this.classes,
      ];
    },
    style() {
      return {
        backgroundColor: this.color,
        color: this.textColor,
      };
    },
  },
  template: `
    <div :class="classList" :style="style">
      <div class="badge__text">{{ text }}</div>
      <div v-if="icon" class="badge__icon">
        <icon :icon="icon" color="var(--color-badge-icon)" size="medium" />
      </div>
    </div>
  `,
};
