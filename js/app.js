'use strict'
var locations = [
{
    name: "Sushi Bar",
    title: "Sushi Bar",
    position: ""

},
{
    name: "Korea BBQ",
    title: "Sushi Bar",
    position: ""

},
{
    name: "KTV",
    title: "Sushi Bar",
    position: ""

},
{
    name: "Hiking",
    title: "Sushi Bar",
    position: ""

},
{
    name: "Mall",
    title: "Sushi Bar",
    position: ""

},   
];



var viewModel = function(){

    var self = this;

    self.places = ko.observableArray(locations);

    self.filter = ko.observable('');

    self.search = ko.computed(function(){
    return ko.utils.arrayFilter(self.places(), function(point){
      return point.name.toLowerCase().indexOf(self.filter().toLowerCase()) >= 0;
    });
  });
};
ko.applyBindings(new viewModel());

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