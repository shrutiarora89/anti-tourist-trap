(function(module) {
   var aboutController = {};

 // Function that hides all the sections under main HTML element and
 // reveals only the selcted ID section(about)
   aboutController.index = function() {
     $('main .page').hide();
     $('#about').fadeIn();
   };
   module.aboutController = aboutController;
 })(window);
