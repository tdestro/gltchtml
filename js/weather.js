/**
 * Created by anthonyodestro on 8/4/15.
 */
$(document).ready(function() {

    String.prototype.splice = function( idx, rem, s ) {
        return (this.slice(0,idx) + s + this.slice(idx + Math.abs(rem)));
    };

    var result = "foo baz".splice( 4, 0, "bar " );
    $(".weather-topbar").hover(function(){
        $(".top-bar").css("overflow", "visible");
        $(".top-bar-section").css("display", "none");
    }, function(){
        $(".top-bar").removeAttr( 'style' );
        $(".top-bar-section").removeAttr( 'style' );
    });


    var days = [
        'Sunday', //Sunday starts at 0
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ];

    $.simpleWeather({
        location: 'Moran, WY',
        woeid: '',
        unit: 'f',
        success: function(weather) {
            $(".weather").html(weather.temp+'&deg;');
            $("#weathertext").html(weather.text.split(' ').join('<br/>'));
            $(".todayshigh").html(weather.high+'&deg;');
            $(".todayslow").html(weather.low+'&deg;');
            $(".sunrise").html(weather.sunrise.splice( 4, 0, "<span class='weather_pmam'>")+"</span>");
            $(".sunset").html(weather.sunset.splice( 4, 0, "<span class='weather_pmam'>")+"</span>");

            var html = '<div class="row collapse"><div class="small-offset-1 medium-offset-1 large-offset-1 columns"></div>';
            for(var i=0;i<weather.forecast.length;i++) {
                if (i == 0) {
                    html += '<div class="medium-offset-1 large-offset-1 small-12 medium-2 large-2 columns weather_border weather_border_first">';
                } else {
                    html += '<div class="small-12 medium-2 large-2 columns weather_border">';
                }
                html += '<p class="text-align-center"><img src="'+weather.forecast[i].thumbnail+'"/></p>';
                html += '<p class="text-align-center weather_border_top_bottom">'+days[new Date(weather.forecast[i].date).getDay()]+'</p>';
                html += '<p class="weather_indent_5day">High Temp: '+weather.forecast[i].high+'&deg;</p>';
                html += '<p class="weather_indent_5day">Low Temp: '+weather.forecast[i].low+'&deg;</p>';
                html += '<p class="weather_indent_5day">Sunrise: '+weather.sunrise+'</p>';
                html += '<p class="weather_indent_5day">Sunset: '+ weather.sunset+'</p>';
                html += '<p class="weather_indent_5day">'+weather.text+'</p>';
                html += '</div>';
            }
            html += '<div class="small-0 medium-1 large-1 columns"></div></div>';
            html += '<div class="row"><div class="small-12 columns text-align-center"><a href="'+weather.link+'">More Weather Information</a></div></div>';
            $("#weather5day").html(html);
        },
        error: function(error) {
            $("#weather5day").html(error);
        }
    });
});
