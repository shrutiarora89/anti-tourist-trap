(function(module) {
  var filterer = {}

  filterer.preferances = [];
  filterer.filteredResults = [];

$('#submitButt').on("click", function(e){ //this handles the checkboxes and places selected categories in to .preferances
  e.preventDefault();
  filterer.preferances = [];
  filterer.filteredResults = [] //resests both arrays when clicked
  $('#initForm :checked').each(function(){
    filterer.preferances.push($(this).val())
  }); // adds the value of each box with a check into .preferances
  console.log("filterP= " + filterer.preferances);
  if (filterer.preferances.length === 0){
     homeController.index();
     $("#warning").show();
     $('html, body').animate({scrollTop : 0},500);
     console.log("warning !")
     return;
   }
   else {
     $("#warning").hide();
     console.log("all clear")
   }
  filterer.places();
  mapCoordinates.addPlacesToMap();
  page('/map');
  })

  filterer.places = function () { //this handles the actual filtering of our data
    filterer.filteredResults = Place.all.filter( function(ele){
      var result = false
      for(c in ele.category){ //does this once for each string in the .category []
        if (filterer.preferances.indexOf(ele.category[c]) > -1){
          result = true
        } // function filters through the user preferances and returns TRUE when the one of the currect objects categorys match a preferance and thus adds it to .filteredResults
      }
      return result;
    })
    console.log(filterer.filteredResults)
  }

  // filter.toMap = function(){
  //   filterer.filteredResults.forEach(function{
  //     var (marker + this.name) = L.marker([this.lat-long]);
  //     this.name.bindPopup("<b>" + this.name  + "</b><br>I am a popup.")
  //     this.name.addTo(map).openPopup()
  //   })
  // }
  module.filterer = filterer;
})(window);
