/**
 * Created by Andrey on 12-Feb-17.
 */

$(function () {
    $('#fS').click(function () {
        $('form').slideToggle('slow');
    });

    $('#cancel').click(function () {
        $('form').slideUp('slow');
    });
});
