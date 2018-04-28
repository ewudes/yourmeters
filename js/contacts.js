function initMap() {
    var uluru = {lat: 51.563650, lng: 46.008076};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: uluru
    });

    var image = 'img/icons/map-marker.svg';

    // var marker = new google.maps.Marker({
    //     position: uluru,
    //     map: map,
    //     icon: image
    // });

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