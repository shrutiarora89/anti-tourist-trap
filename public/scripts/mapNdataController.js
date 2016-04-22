(function(module) {
   var mapNdataController = {};

 // Function that hides all the sections under main HTML element and
 // reveals only the selcted ID section(map)
   mapNdataController.index = function() {
     $('main > section').hide();
    //  $('#map-data-wrapper').show();
     $('#placesTemplate').show();
     $('#map').show();
     $('#Toggle').show();//Removeeeeee
   };
   module.mapNdataController = mapNdataController;
 })(window);
