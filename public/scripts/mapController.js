(function(module) {
   var mapController = {};

 // Function that hides all the sections under main HTML element and
 // reveals only the selcted ID section(map)
   mapController.index = function() {
     $('main > section').hide();
     $('#map').fadeIn();
    //  $('#placesTemplate').fadeIn();

   };
   module.mapController = mapController;
 })(window);


//  mapController.load= function(ctx, next) {
//    $('#map').fadeIn();
//    $('#placesTemplate').fadeIn();
//     And next() will call articlesController.index
//  dataController.index();
// }
// controller:
//   articlesController.loadById = function(ctx, next) {
//     var articleData = function(article) {
//       ctx.articles = article;   //closure on ctx
//       next();                   //call next page.js callback
//     };
//
//     Article.findWhere('id', ctx.params.id, articleData);
//   };
// data:
//   Article.findWhere = function(field, value, callback) {
//    webDB…  //webDB   callback(resultArray, result, tx)  passes the result in the callback
//   };
// controller:
//   articlesController.index = function(ctx, next) {
//     articleView.index(ctx.articles);
//   };
//
// view:
//  articleView.index(articles)
