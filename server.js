////////////////////////////////////////////////
//////////////////SERVER FILE///////////////////
////////////////////////////////////////////////
///////////////////SERVER FILE/////////////////
var express = require('express');
var pg = require('pg');
var port = process.env.PORT || 3003;

var app = express();

app.use(express.static(__dirname + '/public'));


app.get('/data', function (req, res) {

  var connectionString = process.env.ELEPHANTSQL_URL;

  var client = new pg.Client(connectionString);
  client.connect(function(err) {
    if(err) {
      return console.error('could not connect to postgres');
    }
    client.query('select * from poi', function(err, result) {
      if(err) {
        return console.error('error running query', err);
      }
      res.send(result);
      client.end();
    });
  });

});

app.get('*', function(request, response) {
  console.log('New request:', request.url);
  response.sendFile('public/index.html', { root: '.' });
});

app.listen(port, function () {
  console.log('Example app listening on port 3003!');
});
