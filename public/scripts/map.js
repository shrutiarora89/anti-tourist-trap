(function(module) {

mapCoordinates ={}
// initialize the map
var map = L.map('map').setView([47.6204,-122.3491], 13);
// load a tile layer
L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png',
  {
    attribution: 'Tiles by <a href="https://www.openstreetmap.org/">MAPC</a>, Data by <a href="http://mass.gov/mgis">MassGIS</a>',
    maxZoom: 17,
    minZoom: 9
  }).addTo(map);
//------------------------------------------------------------------

// Accessing the Place Constructor from IIFE poi.js;
mapCoordinates.addPlacesToMap = function(){
  //accessing the Place.all Array -
  Place.all.forEach(function(a){
    console.log(a);
    //accessing the lat-long property of the Object
    if (a["lat-long"]) {
      //Getting a string back ["lat,long"]
      //Trimming it the string to get lat and long
      var lat = a["lat-long"].trim().split(",")[0]
      var long = a["lat-long"].trim().split(",")[1];
//assigning the lat and long
      var marker = L.marker([lat,long]).addTo(map);

      // PopUp of the Constructor properties- address,name,description.
      marker.bindPopup("<b>Place: </b>"+ a.name +
      "<br> <b>Address: </b>"+ a.Address +
      "<br> <b>Description: </b>"+ a.description+
      "<br> <b>Website: </b>"+ '<a href="' + a.url + '">Open here</a>'+
      "<br> <b>Photo: </b>"+ '<img src="' + a.picture + '"/>');
    }
  });
}
 module.mapCoordinates= mapCoordinates;
 })(window);
 // mapCoordinates.MarkerLinkedToData = function(){
 // });



 // debugger;
 // $.getJSON('/data', function (result) {
 // var f = result.filter(function(row){
 //  return row.category === "architecture";
 // })
 // });

 // Circle and Polygon
 // var circle = L.circle([47.6510,-122.3473], 500, {
 //   color: 'red',
 //   fillColor: '#f03',
 //   fillOpacity: 0.5
 // }).addTo(map);

 // var polygon = L.polygon([
 //   [47.6204,-122.3491],
 //   [47.922028,-122.290149],
 //   [47.609664,-122.341974]
 // ]).addTo(map);

 // circle.bindPopup("Fremont_Troll.");
 // polygon.bindPopup("I am a polygon.");
