(function(module) {

mapCoordinates ={}
// initialize the map
var map = L.map('map').setView([47.6204,-122.3491], 13);
// load a tile layer
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png',
  {
    attribution: 'Tiles by <a href="http://www.openstreetmap.org/">MAPC</a>, Data by <a href="http://mass.gov/mgis">MassGIS</a>',
    maxZoom: 17,
    minZoom: 9
  }).addTo(map);
//------------------------------------------------------------------
var pointsOnMap = new L.FeatureGroup();
// Accessing the Place Constructor from IIFE poi.js;
mapCoordinates.addPlacesToMap = function(){
  //accessing the Place.all Array -
  Place.all.forEach(function(a){
    pointsOnMap.clearLayers();
    filterer.filteredResults.forEach(function(a){
      // console.log(a);
      // console.log(a["category"]);

      //accessing the lat-long property of the Object
      if (a["lat-long"]) {
        //Getting a string back ["lat,long"]
        //Trimming it the string to get lat and long
        var lat = a["lat-long"].trim().split(",")[0]
        var long = a["lat-long"].trim().split(",")[1];
        // console.log(a["icon-category"]);

// ------------------------------------------------------------------
          if(a["icon-category"] === "park"){
              // console.log(a["icon-category"]);
            // console.log(place.toHtml().html());
               var icon = L.MakiMarkers.icon({
                   icon: "park",
                   color: "#0a0",
                   size: "l"
               });
               marker = L.marker([lat,long],{
                 icon: icon
               }).addTo(map);
          } else if(a["icon-category"] === "airport"){
              // console.log(a["icon-category"]);
            // console.log(place.toHtml().html());
               var icon = L.MakiMarkers.icon({
                   icon: "airport",
                   color: "#F3D",
                   size: "l"
               });
               marker = L.marker([lat,long],{
                 icon: icon
               }).addTo(map);
            } else if(a["icon-category"] === "beach"){
                // console.log(a["icon-category"]);
              // console.log(place.toHtml().html());
                 var icon = L.MakiMarkers.icon({
                     icon: "swimming",
                     color: "#0DF",
                     size: "l"
                 });
                 marker = L.marker([lat,long],{
                   icon: icon
                 }).addTo(map);
              } else if(a["icon-category"] === "monument"){
                  // console.log(a["icon-category"]);
                // console.log(place.toHtml().html());
                   var icon = L.MakiMarkers.icon({
                       icon: "monument",
                       color: "#F03",
                       size: "l"
                   });
                   marker = L.marker([lat,long],{
                     icon: icon
                   }).addTo(map);
                } else if(a["icon-category"] === "museum"){
                    // console.log(a["icon-category"]);
                  // console.log(place.toHtml().html());
                     var icon = L.MakiMarkers.icon({
                         icon: "museum",
                         color: "#B12",
                         size: "l"
                     });
                     marker = L.marker([lat,long],{
                       icon: icon
                     }).addTo(map);
                  } else if(a["icon-category"] === "shop"){
                      // console.log(a["icon-category"]);
                    // console.log(place.toHtml().html());
                       var icon = L.MakiMarkers.icon({
                           icon: "shop",
                           color: "#A8C",
                           size: "l"
                       });
                       marker = L.marker([lat,long],{
                         icon: icon
                       }).addTo(map);
                    } else if(a["icon-category"] === "playground"){
                        // console.log(a["icon-category"]);
                      // console.log(place.toHtml().html());
                         var icon = L.MakiMarkers.icon({
                             icon: "playground",
                             color: "#F7C",
                             size: "l"
                         });
                         marker = L.marker([lat,long],{
                           icon: icon
                         }).addTo(map);
                      }  else if(a["icon-category"] === "garden"){
                          // console.log(a["icon-category"]);
                        // console.log(place.toHtml().html());
                           var icon = L.MakiMarkers.icon({
                               icon: "garden",
                               color: "#41C",
                               size: "l"
                           });
                           marker = L.marker([lat,long],{
                             icon: icon
                           }).addTo(map);
                        } else if(a["icon-category"] === "dam"){
                            // console.log(a["icon-category"]);
                          // console.log(place.toHtml().html());
                             var icon = L.MakiMarkers.icon({
                                 icon: "dam",
                                 color: "#4FF",
                                 size: "l"
                             });
                             marker = L.marker([lat,long],{
                               icon: icon
                             }).addTo(map);
                          } else if(a["icon-category"] === "harbor"){
                              // console.log(a["icon-category"]);
                            // console.log(place.toHtml().html());
                               var icon = L.MakiMarkers.icon({
                                   icon: "harbor",
                                   color: "#DF2",
                                   size: "l"
                               });
                               marker = L.marker([lat,long],{
                                 icon: icon
                               }).addTo(map);
                            }  else if(a["icon-category"] === "music"){
                                // console.log(a["icon-category"]);
                              // console.log(place.toHtml().html());
                                 var icon = L.MakiMarkers.icon({
                                     icon: "music",
                                     color: "#F0A",
                                     size: "l"
                                 });
                                 marker = L.marker([lat,long],{
                                   icon: icon
                                 }).addTo(map);
                              } else if(a["icon-category"] === "zoo"){
                                  // console.log(a["icon-category"]);
                                // console.log(place.toHtml().html());
                                   var icon = L.MakiMarkers.icon({
                                       icon: "zoo",
                                       color: "#303",
                                       size: "l"
                                   });
                                   marker = L.marker([lat,long],{
                                     icon: icon
                                   }).addTo(map);
                                }  else if(a["icon-category"] === "star"){
                                    // console.log(a["icon-category"]);
                                  // console.log(place.toHtml().html());
                                     var icon = L.MakiMarkers.icon({
                                         icon: "star",
                                         color: "#35F",
                                         size: "l"
                                     });
                                     marker = L.marker([lat,long],{
                                       icon: icon
                                     }).addTo(map);
                                  }
          // ------------------------------------------
          else{
              marker = L.marker([lat,long]).addTo(map);
          }
        marker.bindPopup("<b>Place: </b>"+ a.name +
        "<br> <b>Address: </b>"+ a.Address +
        "<br> <b>Description: </b>"+ a.description+
        "<br> <b>Website: </b>"+ '<a href="' + a.url + '">Open here</a>'+
        // "<br> <b>Photo: </b>"+ '<img src="' + a.picture + '"/>';
        "<br> <b>Photo: </b>"+ '<img src="' + a.picture + '"style="max-height:100px;"/>');
        pointsOnMap.addLayer(marker)
      }
    });
    map.addLayer(pointsOnMap);
  });
}
 module.mapCoordinates= mapCoordinates;
 })(window);
