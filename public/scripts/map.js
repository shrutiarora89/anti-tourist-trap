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

// Circle and Polygon
var circle = L.circle([47.6510,-122.3473], 500, {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5
}).addTo(map);
//
// var polygon = L.polygon([
//   [47.6204,-122.3491],
//   [47.922028,-122.290149],
//   [47.609664,-122.341974]
// ]).addTo(map);

// circle.bindPopup("Fremont_Troll.");
// polygon.bindPopup("I am a polygon.");

// Accessing the Place Constructor from IIFE poi.js;
mapCoordinates.addPlacesToMap = function(){
  //accessing the Place.all Array -
  Place.all.forEach(function(a, idx){
    console.log(a);
    //accessing the lat-long property of the Object
    if (a["lat-long"]) {
      //Getting a string back ["lat,long"]
      //Trimming it the string to get lat and long
      var lat = a["lat-long"].trim().split(",")[0]
      var long = a["lat-long"].trim().split(",")[1];
//assigning the lat and long
      var marker = L.marker([lat,long]).addTo(map);
      marker.bindPopup(a.name);
      marker.on('click', function(e) {
        // $("article").slideToggle();
        // 1. reorganize the Place.all array so clicked object is first.
// x=[1,2,3,|4|]
// x.splice(3,3)
// =4
        var m = Place.all.splice(idx, idx);
// --return (value of the clicked index element of the marker )

//Again
// Place.all
// Place.all.unshift(Place.all.splice(marker,end of the array))
        Place.all.unshift(m[0]);
// should return marker the user selected  and the rest of the array


        // 2. Run the following code:
        $('.table-template').siblings().remove();
        console.log('$$$'+ Place.all(a));
        console.log(idx)
        Place.all.forEach(function(ele) {
          ele.render();
        });
      });
    }
  });
}

//Removeeeeee
// $(document).ready(function(){
//     $("button").click(function(){
//         $("p").slideToggle();
//     });
// });

// leaflet-marker-icon leaflet-zoom-animated leaflet-clickable
    $("button").click(function(){
    });

 module.mapCoordinates= mapCoordinates;
 })(window);
 // mapCoordinates.MarkerLinkedToData = function(){
 // });







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
