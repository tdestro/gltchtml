// Foundation JavaScript
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