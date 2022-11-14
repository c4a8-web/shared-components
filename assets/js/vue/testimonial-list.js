export default {
  tagName: 'testimonial-list',
  computed: {
    classList() {
      return ['testimonial-list vue-component'];
    },
    testimonialsParsed() {
      return typeof(this.testimonials) !== 'object' ? JSON.parse(this.testimonials) : this.testimonials;
    }
  },
  props: {
    testimonials: {
      default: null,
    },
    bgColor: String,
    bgColorHover: String,
  },
  template: `
  <div :class="classList">
    <div class="testimonial-list__contents container">
      <slot></slot>
    </div>
  </div>
  `,
};
/*
<div class="testimonial-list container">
  <div class="testimonial-list__contents row">
    {% assign idx = 0 %}
    {% for testimonial in  testimonialListContents %}

      {% if testimonialListEven == true %}
        {% assign testimonialListContentClass = " testimonial-list__content--right " %}
        {% assign testimonialListEven = false %}
      {% else %}
        {% assign testimonialListContentClass = "  testimonial-list__content--left " %}
        {% assign testimonialListEven = true %}
      {% endif %}
      <div class="testimonial-list__content row {{ testimonialListContentClass }}">
        {% unless testimonial.hidden %}
        {%
          include testimonial-teaser.html
          href=testimonial.url
          name=testimonial.name
          title=testimonial.title
          img=testimonial.contentImg
          cornerImg=testimonial.cornerImg
          bgColor=testimonial.bgColor
          bgColorHover=testimonial.bgColorHover
        %}
        {% endunless %}
      </div>
    {% endfor %}
  </div>
</div>
*/
