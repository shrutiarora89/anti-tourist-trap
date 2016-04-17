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

// -----------------------------------------------------------------
// How to send everything on the localStorage
// When rawData is already in localStorage,
// we can load it by calling the .loadAll function,
// and then render the index page (using the proper method on the articleView object).

// ---------------------------------------------------------

// var markerArray=[47.6204,-122.3491,47.922028,-122.290149,47.620816,-122.350487];
//
// L.marker([i]).addTo(map);

// for (var i=0;i < markerArray.length;i++){
//
// }

var markerSN = L.marker([47.6204,-122.3491]).addTo(map);
var markerBT = L.marker([47.922028,-122.290149]).addTo(map);
var markerCG = L.marker([47.620816,-122.350487]).addTo(map);
var markerOSP = L.marker([47.616758,-122.355530]).addTo(map);
var markerPPM = L.marker([47.609664,-122.341974]).addTo(map);
var markerSA = L.marker([47.607633,-122.343021]).addTo(map);
var markerSAM = L.marker([47.607435,-122.338148]).addTo(map);
var markerSGW = L.marker([47.606352,-122.342474]).addTo(map);
var markerSGW = L.marker([47.543284,-121.837788]).addTo(map);
var markerFT = L.marker([47.651272,-122.347333]).addTo(map);

markerSN.bindPopup("<b>Space_Needle!</b><br>I am a popup.").openPopup();
markerBT.bindPopup("<b>Boeing Tour!</b><br>I am a popup.").openPopup();
markerCG.bindPopup("<b>Chihuly Garden!</b><br>I am a popup.").openPopup();
markerOSP.bindPopup("<b>Olympic Sculpture Park!</b><br>I am a popup.").openPopup();
markerPPM.bindPopup("<b>Pike Place Market!</b><br>I am a popup.").openPopup();
markerSA.bindPopup("<b>Seattle Aquarium!</b><br>I am a popup.").openPopup();
markerSAM.bindPopup("<b>Seattle Art Museum!</b><br>I am a popup.").openPopup();
markerSGW.bindPopup("<b>Seattle Great Wheel!</b><br>I am a popup.").openPopup();
markerSGW.bindPopup("<b>Snoqualmine Falls!</b><br>I am a popup.").openPopup();
markerFT.bindPopup("<b>Fremont Troll!</b><br>I am a popup.").openPopup();

// Circle and Polygon
var circle = L.circle([47.6510,-122.3473], 500, {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5
}).addTo(map);

var polygon = L.polygon([
  [47.6204,-122.3491],
  [47.922028,-122.290149],
  [47.609664,-122.341974]
]).addTo(map);

circle.bindPopup("Fremont_Troll.");
polygon.bindPopup("I am a polygon.");
// // -----------------------------------------------------------------
