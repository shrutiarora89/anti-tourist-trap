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
  filterer.places();
  })

  filterer.places = function () {
    filterer.filteredResults = arrayOfplaces.filter( function(ele){
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
