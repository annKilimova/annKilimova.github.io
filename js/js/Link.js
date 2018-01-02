/*Плавный переход к нужному блоку с якорными ссылками - begin*/
jQuery(document).on('click', '.scrollto', function(event){
       event.preventDefault();
       jQuery('html, body').animate({
           scrollTop: $( $.attr(this, 'href') ).offset().top
       }, 500);
 });  
/*(просто скопировать, ничего не менять)...end*/
