(function(module) {
  var filterer = {}

  filterer.preferances = [];
  filterer.filteredResults = [];
  var placesFullList = [
    {"name": "Space Needle", "category": ["architectural", "POI"]},
    {"name": "Troll", "category":  ["oddity",  "POI"]},
    {"name": "cool Rock", "category": ["natural"]},
  ];

$('#submitButt').on("click", function(e){
  e.preventDefault();
  filterer.preferances = [];
  filterer.filteredResults = []
  $('#initForm :checked').each(function(){
    filterer.preferances.push($(this).val())
  });
  console.log("filterP= " + filterer.preferances);
  filterer.places();
  })

  filterer.places = function () {
    var prefiltered = placesFullList.filter( function(ele){
      var result = false
      for(c in ele.category){
        if (filterer.preferances.indexOf(ele.category[c]) > -1){
          result = true
        }
      }
      return result;
    })
    console.log(prefiltered)
  }
  module.filterer = filterer;
})(window);
