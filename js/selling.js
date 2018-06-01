$('.submit_selling_btn').click(function() {
    var popup_id = $('#' + $(this).attr("rel"));
    $(popup_id).show();
    $('.popup-sell-wrap').show();
})
$('.popup-sell-wrap').click(function() {
    $('.popup-sell-wrap, .popup-sell').hide();
})