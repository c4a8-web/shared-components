const Interim = () => {
  $('.js-validate').each(function () {
    $.HSCore.components.HSValidation.init($(this));
  });
};

export default Interim;
