var ArrayOfTables = [];

function Tables (opts) {
  this.name = opts.name;
  this.url = opts.url;
  this.location = opts.location;
  this.description = opts.description;
  this.hoursOfOperation = opts.hoursOfOperation;
  this.category = opts.category;
  this.picture = opts.picture;
}

Tables.prototype.toHtml = function() {
   var $newArticle = $('table-template').clone();
   $newArticle.removeClass('template');
   $newArticle.find('h1:first').html(this.name);
   $newArticle.find('h1:second').html(this.url);
   $newArticle.find('h1:third').html(this.location);
   $newArticle.find('h1:fourth').html(this.description);
   $newArticle.find('h1:fifth').html(this.hoursOfOperation);
   $newArticle.attr('data-category', this.category);
   $newArticle.find('h1:sixth').html(this.picture);
 };

  Tables.loadAll = function(markers) {
    markers.forEach(function(ele) {
      ArrayOfTables.all.push(new Tables(ele));
    });

    ArrayOfTables.forEach(function(a){
      $('#ArrayOfTables').append(a.toHtml())
    });
  };

  Tables.fetchAll = function(result){
  // if (localStorage.rows) {
  //   Tables.loadAll(localStorage.getItem(JSON.parse(localStorage.rows)));
  // } else {
  //      $.getJSON('rows', function (result) {
  //        console.log(data);
  //        Poi.loadAll(data);
  //         localStorage.setItem('rows', JSON.stringify(data));
  //       });
  //   }
};


  // Poi.fetchAll = function() {
  //  if (localStorage.markers) {
  //    // When rawData is already in localStorage,
  //    // we can load it by calling the .loadAll function,
  //    // and then render the index page (using the proper method on the articleView object).
  //
  //    Poi.loadAll(localStorage.getItem(JSON.parse(localStorage.markers)));
  //
  //  } else {
  //       $.getJSON('markers.json', function (data) {
  //         console.log(data);
  //         Poi.loadAll(data);
  //          localStorage.setItem('markers', JSON.stringify(data));
  //         //  articleView.initIndexPage();
  //
  //        });
  //      }
  //    };
