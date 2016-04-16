'use strict'
var locations = [{name: "Sushi Bar"},
                 {name: "Korea BBQ"}, 
                 {name: "Dim Sum"}, 
                 {name: "Bart Station"},
                 {name: "Hospital"}
                ];

var viewModel = {
    locations: ko.observableArray(locations),
    filter: ko.observable(''),

   }

ko.applyBindings(viewModel);

//loads the google maps API
function initMap() {
  var myLatLng = {lat: -25.363, lng: 131.044};

  // Create a map object and specify the DOM element for display.
  var mapDiv = document.getElementById('map');
  var map = new google.maps.Map(mapDiv, {
    center: myLatLng,
    scrollwheel: false,
    zoom: 4
  });

  // Create a marker and set its position.
  var marker = new google.maps.Marker({
    map: map,
    position: myLatLng,
    title: 'Hello World!'
  });
}