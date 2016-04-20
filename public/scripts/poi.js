var arrayOfplaces = [];

function Place (opts) {
  this.name = opts.name;
  this.url = opts.url;
  this.location = opts.location;
  this.description = opts.description;
  this.hoursOfOperation = opts.hoursOfOperation;
  this.category = opts.category;
  this.picture = opts.picture;
  this.Lat_Long = opts.Lat_Long;
}

Place.prototype.toHtml = function() {
   var $newArticle = $('.table-template').clone();
   $newArticle.removeClass('table-template');
   $newArticle.find('#name').html(this.name);
   $newArticle.find('#url').html(this.url);
   $newArticle.find('#location').html(this.location);
   $newArticle.find('#description').html(this.description);
   $newArticle.find('#hoursOfOperation').html(this.hoursOfOperation);
   $newArticle.find('data-category', this.category);
   $newArticle.find('#picture').html(this.picture);``
   $newArticle.find('#Lat_Long').html(this.Lat_Long);
   return $newArticle;
 };

// Place.prototype.toHtml = function() {
//    var $newArticle = $('.table-template').clone();
//    $newArticle.removeClass('table-template');
//    $newArticle.find('h1:first').html(this.name);
//    $newArticle.find('h1:eq(2)').html(this.url);
//    $newArticle.find('h1:eq(3)').html(this.location);
//    $newArticle.find('h1:eq(4)').html(this.description);
//    $newArticle.find('h1:eq(5)').html(this.hoursOfOperation);
//    $newArticle.attr('data-category', this.category);
//    $newArticle.find('h1:eq(6)').html(this.picture);
//    return $newArticle;
//  };

// Function that pushes the data into the array articlesEducation and insantiating a new object Education using Constructor.
  Place.loadAll = function(result) {
  //   result.forEach(function(ele) {
  //   arrayOfplaces.push(new Place(ele));
  //   });
  //
  // arrayOfplaces.forEach(function(a){
  //     $('#placesTemplate').append(a.toHtml());
  //   });
  };

Place.fetchAll = function(result){

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
      var place = new Place(item);
      console.log(place.toHtml());
      $('#placesTemplate').append(place.toHtml());

// Scott explained the concept. I want to keep it for future reference.
      // this is test code for appending something to the DOM.
      // var el = document.createElement('p');
      // el.textContent = table.name;
      // $('#ArrayOfTables').append(el);
    });
    // console.log(result);
  });

}
Place.fetchAll();
Place.loadAll ();

var bgImageArray = ["lonely.jpg", "uluwatu.jpg", "carezza-lake.jpg", "batu-bolong-temple.jpg"],
base = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/full-",
secs = 4;
bgImageArray.forEach(function(img){
    new Image().src = base + img;
    // caches images, avoiding white flash between background replacements
});

function backgroundSequence() {
	window.clearTimeout();
	var k = 0;
	for (i = 0; i < bgImageArray.length; i++) {
		setTimeout(function(){
			document.documentElement.style.background = "url(" + base + bgImageArray[k] + ") no-repeat center center fixed";
			document.documentElement.style.backgroundSize ="cover";
		if ((k + 1) === bgImageArray.length) { setTimeout(function() { backgroundSequence() }, (secs * 1000))} else { k++; }
		}, (secs * 1000) * i)
	}
}
backgroundSequence();
