$(document).ready(function(){
  $('#homeDiv').show();
});

(function(module) {
   var homeController = {};

 // Function that hides all the sections under main HTML element and
 // reveals only the selcted ID section(homeDiv)
   homeController.index = function() {
     $('main > section').hide();
     $('#homeDiv').fadeIn();
   };
   module.homeController = homeController;
 })(window);
