$(function() {
    $('.review-item__title').click(function() {
      $('.review-item--active').add(
          $(this).toggleClass('switch')
          .parent()
        ).toggleClass('review-item--active')
        .children('ul')
        .toggle();
    });
  });

$('.review-btn').click(function() {
  var popup_id = $('#' + $(this).attr("rel"));
  $(popup_id).show();
  $('.popup-review-wrap').show();
})
$('.popup-review-wrap').click(function() {
  $('.popup-review-wrap, .popup-review').hide();
})