var s = Object.defineProperty;
var r = (t, e, i) => e in t ? s(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[e] = i;
var o = (t, e, i) => r(t, typeof e != "symbol" ? e + "" : e, i);
import { B as a, Y as l } from "./index-DVik4XTW.js";
class n extends a {
  constructor(e) {
    super(e), this.root = e, this.options = e.dataset.hsVideoPlayerOptions, this.options && (this.options = JSON.parse(this.options), this.videoFrameSelector = this.options.targetSelector, this.parentSelector = this.options.parentSelector, this.videoFrame = this.root.querySelector(this.videoFrameSelector), this.parent = document.querySelector(this.parentSelector), this.videoFrame && this.init());
  }
  init() {
    this.bindEvents();
  }
  bindEvents() {
    this.root.addEventListener("click", this.handleClick.bind(this));
  }
  handleClick() {
    this.setPlayed(), this.openIframe();
  }
  setPlayed() {
    var e;
    (e = this.parent) == null || e.classList.add("video-frame--played");
  }
  openIframe() {
    this.videoFrame.outerHTML = `
      <iframe frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" width="640" height="360" src="${this.embedSrc()}" sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-presentation"></iframe>
    `;
  }
  embedSrc() {
    return l.getEmbedSrc(this.options.videoId, this.options.isAutoplay);
  }
}
o(n, "rootSelector", ".js-inline-video-player");
export {
  n as default
};
