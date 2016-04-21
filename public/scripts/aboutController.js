(function(module) {
   var aboutController = {};

 // Function that hides all the sections under main HTML element and
 // reveals only the selcted ID section(about)
   aboutController.index = function() {
     $('main > section').hide();
     $('#about').fadeIn();
     aboutController.close();
   };
   aboutController.close = function() {
    $('#closeAbout').click(function(){
      $('#about').hide();
    })
   }
   module.aboutController = aboutController;
})(window);


 $('#closeMap').click(function(){
   $('#mapDiv').hide();
 });
 $('#submitButt').click(function(){
   $('#map').show();
 });
