import Tools from '../tools.js';

export default {
  tagName: 'card',

  data() {
    return {
      wordsToTruncate: 40,
    };
  },

  computed: {
    classList() {
      return [
        'card',
        `${Tools.isTrue(this.large) === true ? 'card--large mb-11' : 'h-100'}`,
        `${Tools.isTrue(this.event) === true ? 'card--event' : ''}`,
        'vue-component',
      ];
    },

    mediaClass() {
      return `${Tools.isTrue(this.event) === true ? 'media align-items mt-auto' : 'align-items mt-auto'}`;
    },

    targetClass() {
      return this.target === "" ? null : this.target;
    },

    truncatedExcerpt() {
      return Tools.truncateWords(Tools.stripHtml(this.excerpt), this.wordsToTruncate);
    },

    cardDate() {
      return this.date
    }

    },



  methods: {
    hasJpgOrWeb(blogTitlePic) {
      // blogTitlePic.includes('jpg') || blogTitlePic.includes('web')
      // Was wenn es kein suffix ist sondern ein präfix oder infix?

      if (/^.+\.(jpg|webp|png)/.test(blogTitlePic)) {
        return blogTitlePic;
      } else {
        return blogTitlePic + '.jpg';
      }
    }
  },

  props: {
    large: {
      default: null,
    },
    event: {
      default: null,
    },

    blogTitlePic: String,
    url: String,
    title: String,
    target: String,
    excerpt: String,
    author: String,
    date: String,

  },
  template: `
    <article :class="classList">
      <template v-if="large">
        large
        <div class="row no-gutters">
          <div class="col-lg-8" v-if="blogTitlePic">
            <div class="position-relative overflow-hidden">
              <v-img :img ="hasJpgOrWeb(blogTitlePic)" cloudinary=true :imgSrcSets="imgSrcSets"/>
              <figure class="d-none d-lg-block">
                <svg class="ie-curved-x position-absolute top-0 right-0 bottom-0 mr-n1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 100.1 1920" height="101%">
                  <path fill="#fff" d="M0,1920c0,0,93.4-934.4,0-1920h100.1v1920H0z"></path>
                </svg>
              </figure>
              <figure class="d-lg-none mb-n1">
                <svg class="ie-curved-y position-absolute right-0 bottom-0 left-0" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1920 100.1">
                  <path fill="#fff" d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"></path>
                </svg>
              </figure>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="card-body d-flex flex-column h-100 p-4 p-lg-5">
              <h3><a class="text-inherit" href="url" :target="targetClass">{{ title }}</a></h3>
              <p> {{ truncatedExcerpt }} </p>
              <div :class="mediaClass">
                <div class="card__author">

                  <authors></authors>
                </div>
                <div class="avatar-group">
                  <a class="avatar avatar-xs avatar-circle" href="javascript:;" data-toggle="tooltip" data-placement="top" title="author" data-original-title="author">
                    {{ author }}
                    <img class="avatar-img" src="./assets/img/100x100/img4.jpg" alt="Image Description">
                  </a>
                </div>
                <div class="media-body d-flex justify-content-end text-muted font-size-1 ml-2">
                  {{ date }}
                </div>
              </div>
            </div>

          </div>
        </div>
      </template>

    </article>
  `,
};

/*
    <article class="card {% if cardLarge %}card--large mb-11{% else %}h-100{% endif %} {% if cardEvent %}card--event{% endif %}" itemscope itemtype="http://schema.org/BlogPosting">
      {% if cardLarge %}
        <div class="row no-gutters">
          <div class="col-lg-8">
            {% if cardBlogTitlePic %}
            <div class="position-relative overflow-hidden">
              {%
                include img.html
                img=cardImgUrl
                cloudinary=true
                preset="thumb"
                alt=cardTitle
                class="card-img"
              %}
              <figure class="d-none d-lg-block">
                <svg class="ie-curved-x position-absolute top-0 right-0 bottom-0 mr-n1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 100.1 1920" height="101%">
                  <path fill="#fff" d="M0,1920c0,0,93.4-934.4,0-1920h100.1v1920H0z"></path>
                </svg>
              </figure>
              <figure class="d-lg-none mb-n1">
                <svg class="ie-curved-y position-absolute right-0 bottom-0 left-0" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1920 100.1">
                  <path fill="#fff" d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"></path>
                </svg>
              </figure>
            </div>
            {% endif %}
          </div>

          <div class="col-lg-4">
            <div class="card-body d-flex flex-column h-100 p-4 p-lg-5">
              <h3><a class="text-inherit" href="{{ cardUrl }}" {% if cardTarget %}target="{{ cardTarget }}"{% endif %}>{{ cardTitle }}</a></h3>
              <p>{{ cardExcerpt | strip_html | truncatewords: 20, " ..." }}</p>
              <div class="{% unless cardEvent %}media{% endunless %} align-items-center mt-auto">
                <div class="card__author">
                  {%
                    include authors.html
                    authors=cardAuthor
                    noLink=cardEvent
                  %}
                </div>
                {% comment %}
                <div class="avatar-group">
                  <a class="avatar avatar-xs avatar-circle" href="javascript:;" data-toggle="tooltip" data-placement="top" title="{{ cardAuthor }}" data-original-title="{{ cardAuthor }}">
                    {{ cardAuthor }}
                    <img class="avatar-img" src="./assets/img/100x100/img4.jpg" alt="Image Description">
                  </a>
                </div>
                {% endcomment %}
                <div class="media-body d-flex justify-content-end text-muted font-size-1 ml-2">
                  {{ cardDate | date: '%d.%m.%Y' }}
                </div>
              </div>
            </div>
          </div>
        </div>
      {% else %}
        {% if cardBlogTitlePic %}
          <div class="card-img-top position-relative">
            {%
              include img.html
              img=cardImgUrl
              cloudinary=true
              preset="cardSmall"
              imgSrcSets=site.data.imgSrcSets.cardSmall
              alt=cardTitle
              class="card-img"
            %}
            <figure class="ie-curved-y position-absolute right-0 bottom-0 left-0 mb-n1">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1920 100.1">
                <path fill="#fff" d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"></path>
              </svg>
            </figure>
          </div>
        {% endif %}

        <div class="card-body">
          <h4><a class="text-inherit" href="{{ cardUrl }}" {% if cardTarget %}target="{{ cardTarget }}"{% endif %}>{{ cardTitle }}</a></h4>
          <p>{{ cardExcerpt | strip_html | truncatewords: 20, " ..." }}</p>
        </div>

        <div class="card-footer border-0 pt-0">
          <div class="{% unless cardEvent %}media{% endunless %} align-items-center">
            <div class="card__author">
              {%
                include authors.html
                authors=cardAuthor
                noLink=cardEvent
              %}
            </div>
            {% comment %}
            <div class="avatar-group">
              <a class="avatar avatar-xs avatar-circle" href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Nataly Gaga">
                <img class="avatar-img" src="./assets/img/100x100/img1.jpg" alt="Image Description">
              </a>
              <a class="avatar avatar-xs avatar-circle" href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Emily Milda">
                <img class="avatar-img" src="./assets/img/100x100/img2.jpg" alt="Image Description">
              </a>
            </div>
            {% endcomment %}
            <div class="media-body d-flex justify-content-end text-muted font-size-1 ml-2">
              {{ cardDate | date: '%d.%m.%Y' }}
            </div>
          </div>
        </div>
      {% endif %}
    </article>
*/
