(function(module) {
   var dataController = {};

 // Function that hides all the sections under main HTML element and
 // reveals only the selcted ID section(data)
   dataController.index = function() {
     $('main > section').hide();
     $('#placesTemplate').fadeIn();
   };
   module.dataController = dataController;
 })(window);
