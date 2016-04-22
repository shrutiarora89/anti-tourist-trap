////////////////////////////////////////////////
//////////////////SERVER FILE///////////////////
////////////////////////////////////////////////
///////////////////SERVER FILE/////////////////
var path = require('path');
var express = require('express');
//Creating a new client(pg client)
var pg = require('pg');

//express package -made app object
var app = express();

//Static Files
app.use(express.static(__dirname + '/public'));

//Getting the dynamic files

//Getting the dynamic files
app.get('/data', function (req, res) {

  var connectionString = process.env.ELEPHANTSQL_URL || "postgres://athgnzme:Kh_Qvt4UuT3dG9Vq1MyD2tXWwErV1Ll9@pellefant.db.elephantsql.com:5432/athgnzme";
  var client = new pg.Client(connectionString);
  // connect to the PG client
  client.connect(function(err) {
    if(err) { // if error return error
      res.status(err).send('could not connect to postgres');
    }
    // run query on the client...Client -that contacts the server-libraryNode
    client.query('select * from public."poi"', function(err, result) { //data from poi table
      if(err) { // if error return error
        return console.error('error running query', err);
        // res.send('error running query');
      }
      res.status(200).json(result.rows)
      client.end();  //close the client connection
    });
  });

});

// app.get('/home',function(req,res){
//   res.status(200);
// })

app.listen(3003, function () {
  console.log('Example app listening on port 3003!');
});
