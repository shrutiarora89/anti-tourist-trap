(function(module) {
  var filter = {}

  filter.preferances = [];


$('#initForm').submit("click", function(e){
  e.preventDefault();
  var selection = [];
  $('#initForm :checked').each(function(){
    selection.push($(this).val())
  });
  filter.preferances = selection
  console.log(selection);

})

  module.filter = filter;
})(window);
