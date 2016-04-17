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
    // filterer.preferances.forEach(function(ele){
    //    console.log(ele)
    //    var filtered = [];
    //    for (var i = 0; i < placesFullList.length; i++) {
    //        for (var j = 0; j < placesFullList[i].category.length; j++) {
    //          if (ele.indexOf(placesFullList[i].category[j]) > -1) {
    //            if (!(prefiltered.indexOf(placesFullList[i].category[j])) > -1){
    //             prefiltered.push(placesFullList[i]);
    //            }
    //          };
    //        };
    //    };
    //   console.log(prefiltered)
      // prefiltered.forEach(function(ele){
      //      if (filtered.indexOf(ele.name) === -1) {
      //     filtered.push(ele.name);
      //     }
      //   console.log(filtered)
      //   filterer.filteredResults = filtered
      //   return filtered;
      // });
    // });
  }
  module.filterer = filterer;
})(window);
