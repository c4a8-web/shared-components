import BaseComponent from './base-component.js';
import YoutubePlayer from '../youtube-player.js';

class VideoFrame extends BaseComponent {
  static rootSelector = '.js-inline-video-player';

  constructor(root) {
    super(root);

    this.root = root;
    this.options = root.dataset.hsVideoPlayerOptions;

    if (!this.options) return;

    this.options = JSON.parse(this.options);

    this.videoFrameSelector = this.options.targetSelector;
    this.parentSelector = this.options.parentSelector;

    this.videoFrame = this.root.querySelector(this.videoFrameSelector);
    this.parent = document.querySelector(this.parentSelector);

    if (!this.videoFrame) return;

    this.init();
  }

  init() {
    this.bindEvents();
  }

  bindEvents() {
    this.root.addEventListener('click', this.handleClick.bind(this));
  }

  handleClick() {
    this.setPlayed();
    this.openIframe();
  }

  setPlayed() {
    this.parent?.classList.add('video-frame--played');
  }

  openIframe() {
    this.videoFrame.outerHTML = `
      <iframe frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" width="640" height="360" src="${this.embedSrc()}" sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox"></iframe>
    `;
  }

  embedSrc() {
    return YoutubePlayer.getEmbedSrc(this.options.videoId, this.options.isAutoplay);
  }
}

export default VideoFrame;
