export default {
  tagName: 'video-inner',
  computed: {
    videoClass() {
      return [
        'video',
        `${this.videoParsed.id ? 'video--has-video' : 'hover__parent'}`,
        'd-flex flex-column h-100 space-bottom-1 space-bottom-lg-0',
        `${this.videoInnerVariant ? 'video--' + this.videoInnerVariant : ''}`,
        'vue-component'
      ];
    },
    videoParsed() {
      return JSON.parse(this.videoInner);
    },
    onClick() {
      return this.videoParsed.ctaText && this.videoParsed.id ? `this.querySelector('a').click()` : '';
    },
    videoId() {
      return 'video-id__' + this.videoParsed.id;
    },
    videoPlayerClass() {
      return [
        'video__player',
        `${!this.videoInnerVariant ? 'bg-dark' : ''}`,
        `${!this.videoParsed.ctaText ? 'video__player--has-link' : ''}`,
        'vue-component'
      ]
    },
    dataOptions() {
      const obj = {
        "selector": "#" + `${this.videoParsed.id}` + " .js-fancybox",
        "speed": 700,
        "buttons": ["fullscreen", "close"],
        "media": {
          "youtube": {
            "url": "//www.youtube-nocookie.com/embed/$4",
            "params": {
              "autoplay": 1
            }
          }
        }
      }
      return JSON.stringify(obj);
    },
    dataSrc() {
      return "//www.youtube-nocookie.com/" + this.videoParsed.id;
    },
    dataCaption() {
      return this.videoParsed.headline;
    }
  },
  methods: {},
  props: {
    videoInner: Object,
    videoInnerVariant: String,
  },
  // ctaText gibt es nicht nachfragen
  template: `
    {{ videoInnerVariant }}
    <div :class="videoClass" :onclick="onClick">
      Test
      <div :id="videoId" :class="videoPlayerClass">
        <a class="js-fancybox media-viewer video-player-btn" href="javascript:;" v-if="videoParsed.lightbox" :data-hs-fancybox-options="dataOptions" :data-src="dataSrc" :data-caption="dataCaption">
          <div class="img-fluid>
          </div>
        </a>
      </div>
    </div>
    `,
};

/*
{% comment %}
<!-- Shared Video Inner Section -->
<div class="video {% if videoHasVideo %}video--has-video{% else %}hover__parent{% endif %} d-flex flex-column h-100 space-bottom-1 space-bottom-lg-0 {% if videoInnerVariant %}video--{{ videoInnerVariant }}{% endif %}"
  {% if videoInner.ctaText %}{% unless videoHasVideo %}onclick="this.querySelector('a').click()"{% endunless %}{% endif %}
>
  <div id="{{ videoId }}" class="video__player {% unless videoInnerVariant %}bg-dark{% endunless %} {% if videoInner.ctaText %}video__player--has-link{% endif %}">
    {% if videoInner.lightbox %}
      <a class="js-fancybox media-viewer video-player-btn" href="javascript:;"
        data-hs-fancybox-options='{
            "selector": "#{{ videoId }} .js-fancybox",
            "speed": 700,
            "buttons": ["fullScreen", "close"],
            "media": {
              "youtube": {
                "url": "//www.youtube-nocookie.com/embed/$4",
                "params": {
                  "autoplay": 1
                }
              }
            }
          }'
          data-src="//www.youtube-nocookie.com/{{ videoInner.id }}"
          data-caption="{{ videoInner.headline }}">
        <div class="img-fluid">
          {%
            include img.html
            img=videoInner.thumb
            cloudinary=true
            alt=videoInner.alt
          %}
        </div>
        <span class="media-viewer-container">
          <span class="video-player-icon">
            <i class="fas fa-play"></i>
          </span>
        </span>
      </a>
    {% else %}
      <!-- Cover Image -->
      <div class="img-fluid video-player-preview">
        {%
          include img.html
          img=videoInner.thumb
          cloudinary=true
          alt=videoInner.alt
        %}
      </div>
      <!-- End Cover Image -->

      {% if videoInner.id %}
        <a class="js-inline-video-player video__player-btn video-player-btn video-player-centered" href="javascript:;"
          data-hs-video-player-options='{
            "videoId": "{{ videoInner.id }}",
            "parentSelector": "#{{ videoId }}",
            "targetSelector": "#{{ videoFrameId }}",
            "isAutoplay": true,
            "classMap": {
              "toggle": "video-player-played"
            }
          }'>
          <span class="video-player-icon video__player-icon">
            <i class="fas fa-play"></i>
          </span>
        </a>
      {% else %}
        {% comment %}TODO placeholder to click and hover the button{% endcomment %}
      {% endif %}

      <div class="embed-responsive embed-responsive-16by9">
        <div id="{{ videoFrameId }}"></div>
      </div>
    {% endif %}

  </div>
  {% if videoInner.headline %}
    <div class="video__content {% if videoInner.ctaText %}hover__parent{% endif %} flex-grow-1 py-4 px-3 p-lg-5" {% if videoInner.ctaText %}onclick="this.querySelector('a').click()"{% endif %}>
      <div class="row no-gutters d-flex flex-wrap">
        {% if videoInner.logo %}
          <div class="video__logo col-lg-5 order-lg-2 pb-3 pb-lg-0">
            {%
              include img.html
              img=videoInner.logo
              cloudinary=true
              alt=videoInner.logoAlt
            %}
          </div>
          <div class="col-lg-7 order-lg-1">
            {%
              include headline.html
              level=videoLevel
              text=videoInner.headline
              classes="h4-font-size"
            %}
          </div>
        {% else %}
          <div class="col-lg-12 order-lg-1">
            {%
              include headline.html
              level=videoLevel
              text=videoInner.headline
              classes="h4-font-size"
            %}
          </div>
        {% endif %}
        <div class="col-lg-12 pt-2 pt-lg-4 order-lg-3">
          {{ videoInner.text }}
        </div>
        {% if videoInner.date %}
          <div class="col-lg-12 pt-2 pt-lg-4 order-lg-3">
            {{ videoInner.date }}
          </div>
        {% endif %}
      </div>
      {% if videoInner.ctaText %}
        <div class="pt-4 pt-lg-6 pb-6">
          {%
            include cta.html
            text=videoInner.ctaText
            href=videoInner.ctaHref
            link=videoInner.link
            target=videoInner.target
            type=videoInner.type
          %}
        </div>
      {% endif %}
    </div>
  {% endif %}
</div>
<!-- End Shared Video Inner Section -->
{% endcomment %}
*/
