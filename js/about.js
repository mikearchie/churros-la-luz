$(function() {

    $("h3").fitText(.7);

    var $datePicker = $('#date-picker');
    $datePicker.datepicker({
        minDate: 0,
        onSelect: function(date) {
            var month = date.substr(0,2);
            if (month != '06') {
                var el = document.getElementById('currLocation');
                el.innerHTML = '<a href=\"https://www.google.com/maps/place/901+12th+Ave,+Seattle,+WA+98122/@47.609773,-122.3196612,17z/data=!3m1!4b1!4m5!3m4!1s0x54906ac92d7b77ab:0x28feff7459d66c0d!8m2!3d47.609773!4d-122.3174725\">Seattle U, 901 12th Ave, Seattle, WA 98122</a>';
            }
            else {
                var el = document.getElementById('currLocation');
                el.innerHTML = '<a href=\"https://www.google.com/maps/place/1701+Broadway,+Seattle,+WA+98122/@47.6161836,-122.323621,17z/data=!3m1!4b1!4m5!3m4!1s0x54906accdcfa1037:0x3612bda31a0c6106!8m2!3d47.6161836!4d-122.3214323\">Seattle Central College, 1701 Broadway Seattle, WA 98122</a>';
            }
        }
    });
    // var currentDate = $datePicker.datepicker( "getDate" );

});
