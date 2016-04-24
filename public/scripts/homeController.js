$(document).ready(function(){
  $('#homeDiv').show();
});

(function(module) {
   var homeController = {};

   homeController.index = function() {
     $('main > section').hide();
     $('#homeDiv').fadeIn();
   };
   module.homeController = homeController;
 })(window);
