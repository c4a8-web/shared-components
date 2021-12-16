const Interim = () => {
  $('.js-validate').each(function () {
    $.HSCore.components.HSValidation.init($(this));
  });

  $('.js-sticky-block').each(function () {
    new HSStickyBlock($(this)).init();
  });
};

export default Interim;
