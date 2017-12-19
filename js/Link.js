/*Плавный переход к нужному блоку с якорными ссылками - begin*/
jQuery('a[href^="#"]').click(function ($) {
    var el = jQuery(this).attr('href');
    event.preventDefault();
    var id = jQuery(this).attr('href'),
        top = jQuery(id).offset().top;
    jQuery('body,html').animate({scrollTop: top}, 1500);
});    
/*(просто скопировать, ничего не менять)...end*/