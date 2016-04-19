(function(module) {
   var homeController = {};

 // Function that hides all the sections under main HTML element and
 // reveals only the selcted ID section(map)
   homeController.index = function() {
     $('main > section').hide();
     $('#home').fadeIn();
   };
   module.homeController = homeController;
 })(window);
