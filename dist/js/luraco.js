'use strict';

$('div[data-open]').each(function () {
    $(this).on('click mouseover', function () {
        var em = $(this).attr('data-open');
        $('.papa').hide();
        $('.dnone').hide().removeClass("active");
        $('#oem-' + em).show().addClass("active");
    });
});
$('.back').on('click', function () {
    $('.dnone').hide().removeClass("active");
    $('.papa').show();
});