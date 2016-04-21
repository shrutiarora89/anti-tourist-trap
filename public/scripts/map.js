(function(module) {

mapCoordinates ={}
// initialize the map
var map = L.map('map').setView([47.495, -122.805], 13);
// load a tile layer
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png',
  {
    attribution: 'Tiles by <a href="http://www.openstreetmap.org/">MAPC</a>, Data by <a href="http://mass.gov/mgis">MassGIS</a>',
    maxZoom: 17,
    minZoom: 9
  }).addTo(map);
//------------------------------------------------------------------

// var markerSN = L.marker([47.6204,-122.3491]).addTo(map);
// markerSN.bindPopup("<b>Space_Needle!</b><br>I am a popup.").openPopup();

// // Circle and Polygon
// var circle = L.circle([47.6510,-122.3473], 500, {
//   color: 'red',
//   fillColor: '#f03',
//   fillOpacity: 0.5
// }).addTo(map);
//
// var polygon = L.polygon([
//   [47.6204,-122.3491],
//   [47.922028,-122.290149],
//   [47.609664,-122.341974]
// ]).addTo(map);

// circle.bindPopup("Fremont_Troll.");
// polygon.bindPopup("I am a polygon.");

// Accessing the Place Constructor from IIFE poi.js;
var pointsOnMap = new L.FeatureGroup();

mapCoordinates.addPlacesToMap = function(){

  filterer.filteredResults.forEach(function(a){
    console.log(a);
    if (a["lat-long"]) {
      var lat = a["lat-long"].trim().split(",")[0]
      var long = a["lat-long"].trim().split(",")[1];
      var marker = L.marker([lat,long]).addTo(map);
      marker.bindPopup(a.name);
      pointsOnMap.addLayer(marker)
    }
  });
  map.addLayer(pointsOnMap);
}

//Removeeeeee
// $(document).ready(function(){
//     $("button").click(function(){
//         $("p").slideToggle();
//     });
// });

$(document).ready(function(){
    $("leaflet-marker-icon leaflet-zoom-animated leaflet-clickable").click(function(){
        $("p").slideToggle();
    });
});

 module.mapCoordinates= mapCoordinates;
 })(window);







 // $.getJSON('/data', function (result) {
 // var f = result.filter(function(row){
 //  return row.lat-long;
 //  console.log(row.lat-long);
 // })
 // });

 // debugger;
 // $.getJSON('/data', function (result) {
 // var f = result.filter(function(row){
 //  return row.category === "architecture";
 // })
 // });
