// (function(module) {

function Place (opts) {
  Object.keys(opts).forEach(function(e, index, keys) {
      this[e] = opts[e];
    },this);
  // this.name = opts.name;
  // this.url = opts.url;
  // this.location = opts.location;
  // this.description = opts.description;
  // this.hoursOfOperation = opts.hoursOfOperation;
  // this.category = opts.category;
  // this.picture = opts.picture;
  // this.Lat_Long = opts.Lat_Long;
}

//Array for place
Place.all = [];

Place.prototype.toHtml = function() {
  console.dir(this);
   var $newPlace = $('.table-template').clone();
   $newPlace.removeClass('table-template');
   $newPlace.find('#name').html(this.name);
   $newPlace.find('#url').html(this.url);
   $newPlace.find('#location').html(this.Address);
   $newPlace.find('#description').html(this.description);
   $newPlace.find('#hoursOfOperation').html(this.HoursOfOperation);
   $newPlace.find('#data-category').html(this.category);
   $newPlace.find('#picture').html(this.picture);
   $newPlace.find('#Lat_Long').html(this.lat_long);
   return $newPlace;
 };

Place.prototype.render = function() {
  $('#placesTemplate').append(this.toHtml());
}

Place.fetchAll = function(){
// ----------------------------------------
//Getting data from the server, passing as a parameter result and going thro each item
// aand insantiating new objects
  $.getJSON('/data', function (result) {
    result.forEach(function(item) {
      var place = new Place(item);
      console.log('$$$$$$$111')
      Place.all.push(place);
      //appends all the insantiated objects in the HTML
      // console.log(place.toHtml().html());
    }); // closing result.forEach
// ----------------------------------------
    console.log(result);
    // insantiating new objects

  }).done(function() {
    Place.all.forEach(function(ele) {
      ele.render();
    })
  }) // closing getJSON
}; //closing fetchAll

Place.fetchAll();

// Scott explained the concept. I want to keep it for future reference.
// this is test code for appending something to the DOM.
// var el = document.createElement('p');
// el.textContent = table.name;
// $('#ArrayOfTables').append(el);


// Becky explained the concept. I want to keep it for future reference.
//Will delete before the final submission.
//  $.getJSON('/data', function (result) {
//    var f = result.filter(function(row){
//      return row.category === "architecture";
//    })
//    console.log(result);
//    console.log(f);
//   });
