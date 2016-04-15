(function(module) {
  var filter = {}

  filter.preferances = [];

  // filter.subfilterRenderer = function() {
  // .show()
  // };
  // filter.subfilterHandler = function() {
  //
  // }

  filter.handler = function() {
    console.log("submit");
    $('.intitForm').submit(function(e) {
        e.preventDefault();
        console.log("submit click");
    });
  };
  module.filter = filter;
})(window);
