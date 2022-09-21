export default {
  tagName: 'video-inner',
  computed: {
    videoClass() {
      return [
        'video',
        `${this.videoParsed.id ? 'video--has-video' : 'hover__parent'}`,
        'd-flex flex-column',
        `${!this.isReversed() ? 'h-100' : ''}`,
        'space-bottom-1 space-bottom-lg-0',
        `${this.variant ? 'video--' + this.variant : ''}`,
        'vue-component',
      ];
    },
    videoPlayerClass() {
      return [
        'video__player',
        `${!this.variant ? 'bg-dark' : ''}`,
        `${this.isPlayed ? 'video-player-played' : ''}`,
        `${this.videoParsed.ctaText ? 'video__player--has-link' : ''}`,
        'vue-component',
      ];
    },
    videoContentClass() {
      const padding = !this.isReversed() ? 'py-4 px-3 p-lg-5' : 'pb-4';
      return [
        'video__content',
        `${this.videoParsed.ctaText ? 'hover__parent' : ''}`,
        `flex-grow-1 ${padding}`,
        'vue-component',
      ];
    },
    videoParsed() {
      return typeof this.video !== 'object' ? JSON.parse(this.video) : this.video;
    },
    onClickVideoContent() {
      return this.videoParsed.ctaText ? `this.querySelector('a').click()` : null;
    },
    onClick() {
      return this.videoParsed.ctaText && this.videoParsed.id ? `this.querySelector('a').click()` : null;
    },
    videoId() {
      return 'video-id__' + this.videoParsed.id;
    },
    videoFrameId() {
      return this.videoId + '-frame';
    },
    dataOptionsLightBox() {
      const options = {
        selector: '#' + `${this.videoId}` + ' .js-video-button',
        speed: 700,
        buttons: ['fullScreen', 'close'],
        media: {
          youtube: {
            url: '//www.youtube-nocookie.com/embed/$4',
            params: {
              autoplay: 1,
            },
          },
        },
      };

      return JSON.stringify(options);
    },
    dataOptionsRegular() {
      const options = {
        videoId: this.videoParsed.id,
        parentSelector: '#' + this.videoId,
        targetSelector: '#' + this.videoFrameId,
        isAutoplay: true,
      };

      return JSON.stringify(options);
    },
    dataSrc() {
      return '//www.youtube-nocookie.com/' + this.videoParsed.id;
    },
    dataCaption() {
      return this.videoParsed.headline;
    },
  },
  mounted() {
    $?.HSCore?.components?.HSFancyBox?.init($(this.$refs['lightbox']));

    if (!window.HSVideoPlayer) return console.error('HSVideoPlayer not found');

    new HSVideoPlayer($(this.$refs['video-player'])).init();
  },
  methods: {
    isReversed() {
      return this.variant === 'reversed';
    },
    handleButtonClick() {
      this.isPlayed = true;
    },
    handleClose() {
      this.isPlayed = false;
    },
  },
  data() {
    return {
      isPlayed: false,
    };
  },
  props: {
    video: Object,
    variant: String,
    level: {
      default: 'h4',
    },
  },
  template: `
    <div :class="videoClass" :onclick="onClick">
      <div :class="videoPlayerClass" :id="videoId">
        <template v-if="videoParsed.lightbox">
          <a class="js-video-button media-viewer video-player-btn" href="javascript:;" :data-src="dataSrc" :data-caption="dataCaption" :data-hs-fancybox-options="dataOptionsLightBox" ref="lightbox">
            <div class="img-fluid" >
              <v-img :img="videoParsed.thumb" :cloudinary="true" :alt="videoParsed.alt">
            </div>
            <span class="media-viewer-container">
              <span class="video-player-icon">
                <i class="fas fa-play"></i>
              </span>
            </span>
          </a>
        </template>
        <template v-else>
          <div class="img-fluid video-player-preview">
            <v-img :img="videoParsed.thumb" :cloudinary="true" :alt="videoParsed.alt">
          </div>
          <template v-if="videoParsed.id" >
            <a class="js-inline-video-player video__player-btn video-player-btn video-player-centered" href="javascript:;" :data-hs-video-player-options="dataOptionsRegular" ref="video-player" :onclick="handleButtonClick">
              <span class="video-player-icon video__player-icon">
                <i class="fas fa-play"></i>
              </span>
            </a>
          </template>
          <div class="embed-responsive embed-responsive-16by9">
            <div :id="videoFrameId"></div>
          </div>
        </template>
      </div>
      <template v-if="videoParsed.headline">
        <div :class="videoContentClass" :onclick="onClickVideoContent">
          <div class="row no-gutters d-flex flex-wrap">
            <template v-if="videoParsed.logo">
              <div class="video__logo col-lg-5 order-lg-2 pb-3 pb-lg-0">
                <v-img :img="videoParsed.logo" :cloudinary="true" :alt="videoParsed.logoAlt">
              </div>
              <div class="col-lg-7 order-lg-1">
                <headline :level="level" :text="videoParsed.headline" :classes="h4-font-size">
              </div>
            </template>
            <template v-else>
              <div class="col-lg-12 order-lg-1">
                <headline :level="level" :text="videoParsed.headline" :classes="h4-font-size">
              </div>
            </template>
            <div class="col-lg-12 pt-2 pt-lg-4 order-lg-3">
              {{ videoParsed.text }}
            </div>
            <div class="col-lg-12 pt-2 pt-lg-4 order-lg-3" v-if="videoParsed.date">
              {{ videoParsed.date }}
            </div>
          </div>
          <div class="pt-4 pt-lg-6 pb-6" v-if="videoParsed.ctaText">
            <cta :text="videoParsed?.ctaText" :href="videoParsed?.ctaHref" :link="videoParsed?.link" :target="videoParsed?.target" :type="videoParsed?.type">
          </div>
        </div>
      </template>
    </div>
    `,
};
