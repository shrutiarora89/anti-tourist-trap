(function(module) {
   var mapNdataController = {};

   mapNdataController.index = function() {
     $('main > section').hide();
     $('#placesTemplate').show();
     $('#map').show();
     $('#Toggle').show();
   };

   module.mapNdataController = mapNdataController;
 })(window);
