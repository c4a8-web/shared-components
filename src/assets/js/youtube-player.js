class YoutubePlayer {
  static getEmbedSrc(videoId, autoplay) {
    const origin = encodeURIComponent(document.location.origin);
    const referrer = encodeURIComponent(document.location.href);

    return `https://www.youtube-nocookie.com/embed/${videoId}?origin=${origin}&autoplay=${autoplay}&widget_referrer=${referrer}&enablejsapi=1&widgetid=1`;
  }
}

export default YoutubePlayer;
