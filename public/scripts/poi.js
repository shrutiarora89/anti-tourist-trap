(function(module) {

function Place (opts) {
  Object.keys(opts).forEach(function(e, index, keys) {
      this[e] = opts[e];
    }, this);
}

Place.all = [];

Place.prototype.toHtml = function() {
   var $newPlace = $('.table-template').clone();
   $newPlace.removeClass('table-template');
   $newPlace.find('#name').html(this.name);
   $newPlace.find('#url').html(this.url);
   $newPlace.find('#location').html(this.Address);
   $newPlace.find('#description').html(this.description);
   $newPlace.find('#hoursOfOperation').html(this.HoursOfOperation);
   $newPlace.find('#category').html(this.category);
   $newPlace.find('#picture').html(this.picture);
   $newPlace.find('#lat_long').html(this.lat_long);
   $newPlace.find('#icon-category').html(this.icon-category);
   return $newPlace;
 };


Place.fetchAll = function(){
  $.getJSON('/data', function (result) {
    console.log('Scott was here');
    result.rows.forEach(function(item) {
      if (item.category){
        item.category = JSON.parse(item.category)
      }
      var place = new Place(item);
      Place.all.push(place);

    });
  });
};

Place.fetchAll();
module.Place = Place;
})(window);





var bgImageArray = ["../images/alki.jpg", "../images/kerryPark.jpg", "../images/magnolia.jpg", "../images/ferry.jpg", "../images/fromFerry.jpg", "../images/olympics.jpg"];
secs = 4;
bgImageArray.forEach(function(img){
    new Image().src = img;
});

function backgroundSequence() {
  window.clearTimeout();
  var k = 0;
  for (i = 0; i < bgImageArray.length; i++) {
    setTimeout(function(){
      document.documentElement.style.background = "url(" + bgImageArray[k] + ") no-repeat center center fixed";
      document.documentElement.style.backgroundSize ="cover";
    if ((k + 1) === bgImageArray.length) { setTimeout(function() { backgroundSequence() }, (secs * 1000))} else { k++; }
    }, (secs * 1000) * i)
  }
}
backgroundSequence();
