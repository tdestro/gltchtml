/**
 * Created by anthonyodestro on 8/4/15.
 */
$(document).ready(function() {
    $.simpleWeather({
        location: 'Teton County, WY',
        woeid: '',
        unit: 'f',
        success: function(weather) {
            $("#weather").html(weather.temp+'&deg;');
            $("#weathertext").html(weather.text.split(' ').join('<br/>'));
            $(".todayshigh").html(weather.high+'&deg;');
            $(".todayslow").html(weather.low+'&deg;');
            $(".sunrise").html(weather.sunrise);
            $(".sunset").html(weather.sunset);

        },
        error: function(error) {
            $("#weather").html(error);
        }
    });
});
