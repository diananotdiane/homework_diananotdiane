$(function(){
    
    // Pull Up Modal Print Portfolio
    $('#morePrint').click(function(){
        $('#printModal').modal();
    });

    // Pull Up Modal Web Portfolio
    $('#moreWeb').click(function(){
        $('#webModal').modal();
    });

    // Pull Up Modal Photo Portfolio
    $('#morePhoto').click(function(){
        $('#photoModal').modal();
    });

//Google Map
    var latitude = $('#google-map').data('latitude');
    var longitude = $('#google-map').data('longitude');
    function initialize_map() {
        var myLatlng = new google.maps.LatLng(latitude,longitude);
        var mapOptions = {
            zoom: 14,
            scrollwheel: false,
            center: myLatlng
        };
        var map = new google.maps.Map(document.getElementById('google-map'), mapOptions);
        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map
        });
    }
    google.maps.event.addDomListener(window, 'load', initialize_map);

});

console.log("Modal Loaded");

