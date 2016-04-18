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
   var $newArticle = $('.table-template').clone();
   $newArticle.removeClass('table-template');
   $newArticle.find('h1:first').html(this.name);
   $newArticle.find('h1:eq(2)').html(this.url);
   $newArticle.find('h1:eq(3)').html(this.location);
   $newArticle.find('h1:eq(4)').html(this.description);
   $newArticle.find('h1:eq(5)').html(this.hoursOfOperation);
   $newArticle.attr('data-category', this.category);
   $newArticle.find('h1:eq(6)').html(this.picture);
   return $newArticle;
 };

  Tables.loadAll = function(result) {
    result.forEach(function(ele) {
      ArrayOfTables.all.push(new Tables(ele));
    });

    ArrayOfTables.forEach(function(a){
      $('#ArrayOfTables').append(a.toHtml());
    });
  };

Tables.fetchAll = function(result){

// Becky explained the concept. I want to keep it for future reference.

//Will delete before the final submission.
      //  $.getJSON('/data', function (result) {
      //    var f = result.filter(function(row){
      //      return row.category === "architecture";
      //    })
      //    console.log(result);
      //    console.log(f);
      //   });
  $.getJSON('/data', function (result) {
    result.forEach(function(item) {
      var table = new Tables(item);
      // console.log(table.toHtml());
      $('#ArrayOfTables').append(table.toHtml());

// Scott explained the concept. I want to keep it for future reference.
      // this is test code for appending something to the DOM.
      // var el = document.createElement('p');
      // el.textContent = table.name;
      // $('#ArrayOfTables').append(el);
    });
    // console.log(result);
  });

}
Tables.fetchAll();
