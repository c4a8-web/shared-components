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
  });
};

export default Interim;
