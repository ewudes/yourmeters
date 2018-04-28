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