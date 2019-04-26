/*Global Variables Category */
var mapCategory = {
    map: undefined,
    idAddedPlace: [],
    markersDefault: [],

    setMap: function(map){
        this.map = map;
    },
    getAddedPlace: function(){
        return this.idAddedPlace;
    },
    setPlacesOnMapCategory: function(allPlaces){

        for(var i=0; i < this.idAddedPlace.length; i++){
            var marker = new google.maps.Marker({
                position: { lat:allPlaces[ this.idAddedPlace[i] ].lat ,lng: allPlaces[ this.idAddedPlace[i] ].lng },
                map: this.map
            });
            this.markersDefault.push(marker);
        }
       
    },
    createRoute: function(){
        // Наш напрямок лінія що поєднує маркери
        var directionsService = new google.maps.DirectionsService;
        // Цю щтуку привязкуємо на карті і нею ми будемо малювати напрямок.
        var directionsDisplay = new google.maps.DirectionsRenderer({map: this.map});

        for (var i = 0; i < this.markersDefault.length; i++) {
            this.markersDefault[i].setMap(null);
        }

        directionsService.route({
            origin: this.markersDefault[0].getPosition(),
            destination: this.markersDefault[ this.markersDefault.length -1].getPosition(),
            travelMode: 'WALKING'
        }, function(response, status) {
            if (status === 'OK') {
              directionsDisplay.setDirections(response);
              showSteps(response, this.markersDefault ,  this.map);
            } else { window.alert('Directions request failed due to ' + status);}
        });

        function showSteps(directionResult, markerArray,  map) {
            var myRoute = directionResult.routes[0].legs[0];
            for (var i = 0; i < myRoute.steps.length; i++) {
              var marker = markerArray[i] = markerArray[i] || new google.maps.Marker;
              marker.setMap(map);
              marker.setPosition(myRoute.steps[i].start_location);
          }
        }
    },
    addPlaceDefaultCategory: function(idPlace){
        this.idAddedPlace.push(idPlace);
    },
    hasPlaceDefaultCategory: function(idPlace){
        for(var i=0; i < this.idAddedPlace.length; i++){
            if(this.idAddedPlace[i] === idPlace){
                return true;
            }  
        }
        return false;
    }
}

/*Global Variables SP */
var mapSP = {
    map: undefined,
    marker: undefined,

    setMap: function(map){
        this.map = map;
    },
    setMarker(marker){
        this.marker = marker;
    },
    setPlacePosition: function(lat,lng){
        this.marker.setPosition( new google.maps.LatLng(lat, lng ) );
        this.map.setCenter( new google.maps.LatLng(lat, lng ) );
    }
}

function initMap() {

    var styleMap = [
        {
            "featureType": "administrative",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#444444"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#f2f2f2"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "all",
            "stylers": [
                {
                    "saturation": -100
                },
                {
                    "lightness": 45
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#46bcec"
                },
                {
                    "visibility": "on"
                }
            ]
        }
    ];

    var configCategory = {
        zoom: 7,
        disableDefaultUI: true,
        styles: styleMap
    };

    var configSP = {
        zoom: 12,
        disableDefaultUI: true,
        styles: styleMap
    };

    var containerSP = document.getElementById('map');
    mapSP.setMap( new google.maps.Map(containerSP,configSP) );
    mapSP.setMarker( new google.maps.Marker({ map: mapSP.map }));

    var containerCategory = document.getElementById('mapCategory' );
    mapCategory.setMap( new google.maps.Map(containerCategory,configCategory ) );
    mapCategory.map.setCenter( new google.maps.LatLng( 52, 20 ) );
}