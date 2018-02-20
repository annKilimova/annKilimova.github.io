/*menu_header_begin*/
jQuery(document).ready(function($){
    var touch = $('.touch-menu');
    var menu = $('.navH');

    /*for_submenu_begin
    var touchDrop = $('.touch-menu_drop1');
    var menuDrop =$('.drop1')

    var dropTouch = $('.touch-menu_drop2');
    var dropMenu =$('.drop2')

    var DropTouch = $('.touch-menu_drop3');
    var DropMenu =$('.drop3')
    /*for_submenu_end*/

    $(touch).on('click', function(e){
        e.preventDefault();
        menu.slideToggle();
    });

    $(window).resize(function(){
        var wid = $(window).width();

        if(wid > 760 && menu.is(':hidden')){
            menu.removeAttr('style');
        }

    /*for_submenu_begin
        if(wid > 760 && menuDrop.is(':hidden')){
            menuDrop.removeAttr('style');
        }

        if(wid > 760 && dropMenu.is(':hidden')){
            dropMenu.removeAttr('style');
        }

         if(wid > 760 && DropMenu.is(':hidden')){
            DropMenu.removeAttr('style');
        }
    /*for_submenu_end*/
    })

    /*for_submenu_begin
    $(touchDrop).on('click', function(e){
        e.preventDefault();
        menuDrop.slideToggle();
    });

    $(dropTouch).on('click', function(e){
        e.preventDefault();
        dropMenu.slideToggle();
    });

    $(DropTouch).on('click', function(e){
        e.preventDefault();
        DropMenu.slideToggle();
    });
    /*for_submenu_end*/
});
/*menu_header_end*/



/*header_fixed_begin*/
jQuery(document).ready(function($){
    $('header').removeClass('default');

    $(window).scroll(function(){
        if($(this).scrollTop() > 20){
            $('header').addClass('default').fadeIn('fast');
        } else{
            $('header').removeClass('default').fadeIn('fast');
        };
    })
})    
/*header_fixed_end*/
