/**
 * Created by anthonyodestro on 8/4/15.
 */
$(document).ready(function() {

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
        location: 'Pittsburgh, PA',
        woeid: '',
        unit: 'f',
        success: function(weather) {
            $(".weather").html(weather.temp+'&deg;');
            $("#weathertext").html(weather.text.split(' ').join('<br/>'));
            $(".todayshigh").html(weather.high+'&deg;');
            $(".todayslow").html(weather.low+'&deg;');
            $(".sunrise").html(weather.sunrise);
            $(".sunset").html(weather.sunset);

            var html = '<h2>5 Day Weather Forecast</h2>';
            for(var i=0;i<weather.forecast.length;i++) {
                html += '<img src="'+weather.forecast[i].thumbnail+'"/>';
                html += '<p>'+days[new Date(weather.forecast[i].date).getDay()]+'</p>';
                html += '<p>High Temp:'+weather.forecast[i].high+'</p>';
                html += '<p>Low Temp:'+weather.forecast[i].low+'</p>';
                html += '<p>Sunrise:'+weather.sunrise+'</p>';
                html += '<p>Sunset:'+ weather.sunset+'</p>';
                html += '<p>'+weather.text+'</p>';

            }
            html += '<a href="'+weather.link+'">View Forecast &raquo;</a>';
            $("#weather5day").html(html);
        },
        error: function(error) {
            $("#weather5day").html(error);
        }
    });
});
