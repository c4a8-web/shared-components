import Tools from '../tools.js';

export default {
  tagName: 'socials',
  data() {
    return {
      follow: '',
    };
  },
  computed: {
    classValue() {
      return [
        'socials align-items-center',
        Tools.isTrue(this.expand) ? (this.showLabel ? 'socials--label-expand' : 'socials--expand') : '',
        Tools.isTrue(this.vertical) ? 'is-vertical-xl mr-5 mr-xl-0 align-items-xl-start mb-xl-4' : '',
        'vue-component',
      ];
    },
    iconClasses() {
      return [Tools.isTrue(this.vertical) ? 'mb-5 mr-xl-0' : ''];
    },
    showLabel() {
      return !Tools.isTrue(this.label);
    },
    socialItemClass() {
      return ['socials__item', this.iconClasses];
    },
    getList() {
      if (!this.author) return false;

      const twitterUrl = 'https://www.twitter.com/';
      const linkedinUrl = 'https://www.linkedin.com/in/';
      const diverseSocials = [
        `mailto:?subject=`,
        `https://www.linkedin.com/shareArticle?mini=true&url=`,
        'https://www.xing.com/app/user?op=share;url=',
        'https://twitter.com/intent/tweet?text=&url=',
      ];
      const diverseIcons = ['fas fa-envelope', 'fab fa-linkedin', 'fab fa-xing', 'fab fa-x-twitter'];

      const authorSocials = [
        {
          link: this.author.twitter ? twitterUrl + this.author.twitter : '',
          icon: diverseIcons[3],
        },
        {
          link: this.author.linkedin ? linkedinUrl + this.author.linkedin : '',
          icon: diverseIcons[1],
        },
      ];

      const filteredAuthorSocials = authorSocials.filter((obj) => obj.link !== '');

      if (filteredAuthorSocials.length > 0) return filteredAuthorSocials;

      const socialsUrls = diverseSocials.map((item) => item + this.shareUrl);

      return socialsUrls?.map((link, index) => {
        return {
          link: link,
          icon: diverseIcons[index],
        };
      });
    },
  },
  mounted() {
    window.i18n?.loader?.then(() => {
      this.follow = window.i18n?.translate('follow');
    });
  },
  methods: {},
  props: {
    label: String,
    author: {
      default: null,
    },
    vertical: {
      default: null,
    },
    expand: {
      default: null,
    },
    shareUrl: {
      default: null,
    },
  },
  template: `
  <div :class="classValue" v-if="getList">
    <template v-if="showLabel">
      <span class="socials__label mr-4">{{ follow }}</span>
    </template>

    <template v-for="(listEntry, index) in getList">
      <a :href="listEntry.link" target="_blank" rel="noopener"
        :class="socialItemClass" >
        <i :class="listEntry.icon"></i>
      </a>
    </template>
  </div>
  `,
};
