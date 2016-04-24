(function(module) {
  var filterer = {}

  filterer.preferances = [];
  filterer.filteredResults = [];

$('#submitButt').on("click", function(e){
  e.preventDefault();
  filterer.preferances = [];
  filterer.filteredResults = []
  $('#initForm :checked').each(function(){
    filterer.preferances.push($(this).val())
  });
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

  filterer.places = function () {
    filterer.filteredResults = Place.all.filter( function(ele){
      var result = false
      for(c in ele.category){
        if (filterer.preferances.indexOf(ele.category[c]) > -1){
          result = true
        }
      }
      return result;
    })
    console.log(filterer.filteredResults)
  }

  module.filterer = filterer;
})(window);
