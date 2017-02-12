/**
 * Created by Andrey on 12-Feb-17.
 */

$(function () {
    $('#fS').click(function () {
        $('form').slideToggle('1500');
    });

    $('#cancel').click(function () {
        $('form').slideUp('1500');
    });
    $('article').css('display', 'none');
    $('article').fadeIn(1200);
    $('.ddImg').css('text-align', 'left')
    $('article img').css({
        'width': '0'
    });
    $('article img').animate({
        'width': '200px'
    }, 500);
});
