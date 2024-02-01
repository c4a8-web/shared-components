import Tools from '../tools';

export default {
  tagName: 'socials',
  computed: {
    classValue() {
      return [
        'socials align-items-center',
        Tools.isTrue(this.expand) ? (!Tools.isTrue(this.label) ? 'socials--label-expand' : 'socials--expand') : '',
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
    list() {
      return this.getList();
    },
    iconList() {
      return this.getIconList();
    },
  },
  methods: {
    getList() {
      const twitterUrl = 'https://www.twitter.com/';
      const linkedinUrl = 'https://www.linkedin.com/in/';
      const diverseSocials = [
        `mailto:?subject=`,
        `https://www.linkedin.com/shareArticle?mini=true&url=`,
        'https://www.xing.com/app/user?op=share;url=',
        'https://twitter.com/intent/tweet?text=&url=',
      ];

      return this.author
        ? [twitterUrl + this.author, linkedinUrl + this.author]
        : diverseSocials.map((item) => item + this.shareUrl);
    },
    getIconList() {
      return this.author
        ? ['fab fa-x-twitter', 'fab fa-linkedin']
        : ['fas fa-envelope', 'fab fa-linkedin', 'fab fa-xing', 'fab fa-x-twitter'];
    },
    lastEntry(index) {
      return [
        'socials__item',
        index != this.list.length - 1 ? (Tools.isTrue(this.expand) ? 'mr-5' : 'mr-3') : '',
        this.iconClasses,
      ];
    },
  },
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
    message: {
      default: null,
    },
    shareUrl: String,
  },
  template: `
  <div :class="classValue" v-if="list">
    <template v-if="showLabel">
      <span class="socials__label mr-4">{{ this.message }}</span>
    </template>

    <template v-for="(url, index) in list">
      <a :href="url" target="_blank" rel="noopener"
        :class="this.lastEntry(index)" >
        <i :class="iconList[index]"></i>
      </a>
    </template>
  </div>
  `,
};
