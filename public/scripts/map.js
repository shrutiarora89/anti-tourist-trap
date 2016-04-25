(function(module) {

mapCoordinates ={}
var map = L.map('map').setView([47.6204,-122.3491], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: 'Tiles by <a href="https://www.openstreetmap.org/">MAPC</a>, Data by <a href="http://mass.gov/mgis">MassGIS</a>',
    maxZoom: 17,
    minZoom: 9
  }).addTo(map);
var pointsOnMap = new L.FeatureGroup();
mapCoordinates.addPlacesToMap = function(){
  Place.all.forEach(function(a){
    pointsOnMap.clearLayers();
    filterer.filteredResults.forEach(function(a){

      if (a["lat-long"]) {
        var lat = a["lat-long"].trim().split(",")[0]
        var long = a["lat-long"].trim().split(",")[1];

          if(a["icon-category"] === "park"){
               var icon = L.MakiMarkers.icon({
                   icon: "park",
                   color: "#0a0",
                   size: "l"
               });
               marker = L.marker([lat,long],{
                 icon: icon
               }).addTo(map);
          } else if(a["icon-category"] === "airport"){
               var icon = L.MakiMarkers.icon({
                   icon: "airport",
                   color: "#F3D",
                   size: "l"
               });
               marker = L.marker([lat,long],{
                 icon: icon
               }).addTo(map);
            } else if(a["icon-category"] === "beach"){
                 var icon = L.MakiMarkers.icon({
                     icon: "swimming",
                     color: "#0DF",
                     size: "l"
                 });
                 marker = L.marker([lat,long],{
                   icon: icon
                 }).addTo(map);
              } else if(a["icon-category"] === "monument"){
                   var icon = L.MakiMarkers.icon({
                       icon: "monument",
                       color: "#F03",
                       size: "l"
                   });
                   marker = L.marker([lat,long],{
                     icon: icon
                   }).addTo(map);
                } else if(a["icon-category"] === "museum"){
                     var icon = L.MakiMarkers.icon({
                         icon: "museum",
                         color: "#B12",
                         size: "l"
                     });
                     marker = L.marker([lat,long],{
                       icon: icon
                     }).addTo(map);
                  } else if(a["icon-category"] === "shop"){
                       var icon = L.MakiMarkers.icon({
                           icon: "shop",
                           color: "#A8C",
                           size: "l"
                       });
                       marker = L.marker([lat,long],{
                         icon: icon
                       }).addTo(map);
                    } else if(a["icon-category"] === "playground"){
                         var icon = L.MakiMarkers.icon({
                             icon: "playground",
                             color: "#F7C",
                             size: "l"
                         });
                         marker = L.marker([lat,long],{
                           icon: icon
                         }).addTo(map);
                      }  else if(a["icon-category"] === "garden"){
                           var icon = L.MakiMarkers.icon({
                               icon: "garden",
                               color: "#41C",
                               size: "l"
                           });
                           marker = L.marker([lat,long],{
                             icon: icon
                           }).addTo(map);
                        } else if(a["icon-category"] === "dam"){
                             var icon = L.MakiMarkers.icon({
                                 icon: "dam",
                                 color: "#4FF",
                                 size: "l"
                             });
                             marker = L.marker([lat,long],{
                               icon: icon
                             }).addTo(map);
                          } else if(a["icon-category"] === "harbor"){
                               var icon = L.MakiMarkers.icon({
                                   icon: "harbor",
                                   color: "#DF2",
                                   size: "l"
                               });
                               marker = L.marker([lat,long],{
                                 icon: icon
                               }).addTo(map);
                            }  else if(a["icon-category"] === "music"){
                                 var icon = L.MakiMarkers.icon({
                                     icon: "music",
                                     color: "#F0A",
                                     size: "l"
                                 });
                                 marker = L.marker([lat,long],{
                                   icon: icon
                                 }).addTo(map);
                              } else if(a["icon-category"] === "zoo"){
                                   var icon = L.MakiMarkers.icon({
                                       icon: "zoo",
                                       color: "#303",
                                       size: "l"
                                   });
                                   marker = L.marker([lat,long],{
                                     icon: icon
                                   }).addTo(map);
                                }  else if(a["icon-category"] === "star"){
                                     var icon = L.MakiMarkers.icon({
                                         icon: "star",
                                         color: "#35F",
                                         size: "l"
                                     });
                                     marker = L.marker([lat,long],{
                                       icon: icon
                                     }).addTo(map);
                                  }
          else{
              marker = L.marker([lat,long]).addTo(map);
          }
        marker.bindPopup("<b>Place: </b>"+ a.name +
        "<br> <b>Address: </b>"+ a.Address +
        "<br> <b>Description: </b>"+ a.description+
        "<br> <b>Website: </b>"+ '<a href="' + a.url + '">Open here</a>'+
        "<br> <b>Photo: </b>"+ '<img src="' + a.picture + '"style="max-height:100px;"/>');
        pointsOnMap.addLayer(marker)
      }
    });
    map.addLayer(pointsOnMap);
  });
}
 module.mapCoordinates= mapCoordinates;
 })(window);
