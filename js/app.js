/*
 * // Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs

    $(document).foundation({
   topbar: {
     sticky_class: 'sticky',
     custom_back_text: false,
     back_text: 'moo',
     is_hover: true,
     mobile_show_parent_link: false,
     scrolltop: true
   }

 });

 $('.has-dropdown').on('click', function(e) {
   e.stopPropagation();
   if ($(this).hasClass('expand')) {
     $(this).removeClass('expand'); 
      $(this).removeClass('moved');
       $('.open').removeClass('expand');
   } else {
     $(this).addClass('expand');
      $(this).addClass('moved');
   }
 });
 
$(document).foundation();
$(window).resize(function () {
    // Use modernizer or some other to to test for flexbox
    if (!$("html").hasClass("flexbox")) {
        if ($(window).outerWidth() > 640) {
            var w = Math.floor(100 / $(".top-bar-section > ul > li").length) + "%"
            console.log(w);
            $(".top-bar-section > ul > li").css({
                "width": w,
                    "float": "left"
            });
        } else {
            $(".top-bar-section > ul > li").removeAttr('style');
        }
    }
});
$(window).resize();
 * 
 */
// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$( document ).ready(function() {


    $("#arrival-date").datepicker({
    });

    $("#departure-date").datepicker({
    });

    $('.orbit-container .orbit-next').css('opacity', '0.4');
    $('.orbit-container .orbit-prev').css('opacity', '0.4');
    $('.orbit-container').on({
        mouseenter: function(){
            $('.orbit-container .orbit-next').css('opacity', '1');
            $('.orbit-container .orbit-prev').css('opacity', '1');
        },
        mouseleave: function(){
            $('.orbit-container .orbit-next').css('opacity', '0.4');
            $('.orbit-container .orbit-prev').css('opacity', '0.4');
        }
    });
});



$(document).foundation({
   topbar: {
     sticky_class: 'sticky',
     custom_back_text: false,
     back_text: 'moo',
     is_hover: true,
     mobile_show_parent_link: false,
     scrolltop: true
   }

 });

 $('.has-dropdown').on('click', function(e) {
   e.stopPropagation();
   if ($(this).hasClass('expand')) {
     $(this).removeClass('expand'); 
      $(this).removeClass('moved');
       $('.open').removeClass('expand');
   } else {
     $(this).addClass('expand');
      $(this).addClass('moved');
   }
 });

// Placeholder fix for chrome
$('input:text, textarea').each(function(){
    var $this = $(this);
    $this.data('placeholder', $this.attr('placeholder'))
         .focus(function(){$this.removeAttr('placeholder');})
         .blur(function(){$this.attr('placeholder', $this.data('placeholder'));});
});

$('.activity-type-bar .close').on('click', function(){
	$(this).parent().find('ul').first().toggle();
});


$(document).foundation();
$(window).resize(function () {
    // Use modernizer or some other to to test for flexbox
    if (!$("html").hasClass("flexbox")) {
        if ($(window).outerWidth() > 640) {
            var w = Math.floor(100 / $(".top-bar-section > ul > li").length) + "%"
            console.log(w);
            $(".top-bar-section > ul > li").css({
                "width": w,
                    "float": "left"
            });
        } else {
            $(".top-bar-section > ul > li").removeAttr('style');
        }
    }
});
$(window).resize();