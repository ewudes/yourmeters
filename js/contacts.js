function initMap() {
    var uluru = {lat: 51.563650, lng: 46.008076};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: uluru,
        streetViewControl: false
    });

    var image = 'img/decor/map-marker.png';

    var marker = new google.maps.Marker({
        position: uluru,
        map: map,
        icon: image
    });

    var locations = [
        {lat: 51.563650, lng: 46.008076}
    ];

    var markers = locations.map(function(location, i){
        return new google.maps.Marker({
            position: location,
            label: '',
            icon: image
        });
    });

    var markerCluster = new MarkerClusterer(map, markers,
        {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
  
}