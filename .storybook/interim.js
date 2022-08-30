const Interim = () => {
  document.addEventListener('SHARED_COMPONENTS_READY', () => {
    $('.js-validate').each(function () {
      $.HSCore.components.HSValidation.init($(this));
    });

    $('.js-sticky-block').each(function () {
      new HSStickyBlock($(this)).init();
    });

    var carousel = $('.js-slick-carousel');

    if (carousel) {
      carousel.each(function () {
        $.HSCore.components.HSSlickCarousel.init($(this));
      });
    }
    /*
    $('.js-inline-video-player').each(function () {
      new HSVideoPlayer($(this)).init();
    });*/
  });
};

export default Interim;
