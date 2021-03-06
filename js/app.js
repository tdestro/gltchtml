
// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs

function IsEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

$( document ).ready(function() {

    if (!Modernizr.inputtypes.date) {
        $('input[type=date]').datepicker({
            // Consistent format with the HTML5 picker
            dateFormat: 'yy-mm-dd'
        });
    }

    $(".gtnp_green").click(function(){
        if ( $( this ).hasClass( "open" ) ) {
            $(".gtnp_green").removeClass("open");
            $("#booking-widget").hide();
        } else {
            $(".gtnp_green").addClass("open");
            $("#booking-widget").show();

        }

    });

    $( "#newsletter" ).submit(function( event ) {
        if( !IsEmail($("#email" ).val())) {
            $( "#dialog p:nth-child(1)").hide();
            $( "#dialog p:nth-child(2)").show();
            $( "#dialog" ).dialog();
            event.preventDefault(); }
        else {
            $( "#dialog p:nth-child(2)").hide();
            $( "#dialog p:nth-child(1)").show();
            $( "#dialog" ).dialog();
            event.preventDefault();
        }


    });

    var d = new Date();


    function checkifbetweenoctmay(){
        var d = new Date();
        // January is 0, February is 1, and so on.
        if(d.getMonth() >= 4 && d.getMonth() < 10)
        {
           return ""
        }
        return new Date(d.getFullYear(), 5, 1);
    }

    $("#arrival-date").datepicker('option', {
        defaultDate: checkifbetweenoctmay(),
        maxDate: "+12m",
        minDate: 0,
        onSelect: function(dateText, inst) {
            // Clear
            $('#departure-date').datepicker('setDate', null);


            var d = $(this).datepicker( 'getDate' );
            d.setDate(d.getDate() + 27);

            var depart = $(this).datepicker( 'getDate' );
            depart.setDate(depart.getDate() + 1);


            $("#departure-date").datepicker("option", "minDate", $(this).val());
            $("#departure-date").datepicker("option", "maxDate", d);
            $('#departure-date').datepicker("setDate", depart);


        },
        onClose: function(x,y){
            //$('#departure-date').datepicker.show();
            $('#departure-date').focus();
        }

    });

    $("#departure-date").datepicker('option', {
        defaultDate: checkifbetweenoctmay()
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