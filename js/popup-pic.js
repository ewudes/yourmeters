$(function(){
    $('.slider__pic').click(function(event) {
      var i_path = $(this).attr('src');
      $('body').append('<div id="overlay-pic"></div><div id="magnify"><img src="'+i_path+'"><div id="close-popup"><i></i></div></div>');
      $('#magnify').css({
          left: ($(document).width() - $('#magnify').outerWidth())/2,
          // top: ($(document).height() - $('#magnify').outerHeight())/2 upd: 24.10.2016
              top: ($(window).height() - $('#magnify').outerHeight())/2
        });
      $('#overlay-pic, #magnify').fadeIn('fast');
    });
    
    $('body').on('click', '#close-popup, #overlay-pic', function(event) {
      event.preventDefault();
   
      $('#overlay-pic, #magnify').fadeOut('fast', function() {
        $('#close-popup, #magnify, #overlay-pic').remove();
      });
    });
  });