(function(module) {
  var filter = {}

  filter.toPost = [];

  var conString = process.env.postgres:"//athgnzme:Kh_Qvt4UuT3dG9Vq1MyD2tXWwErV1Ll9@pellefant.db.elephantsql.com:5432/athgnzme" || "postgres://postgres:5432@localhost/postgres";

  var client = new pg.Client(conString);
  client.connect(function(err) {
    if(err) {
      return console.error('could not connect to postgres', err);
    }
    client.query('SELECT * FROM ' + filterUI.type + 'WHERE CATEGORY = ' + filterUI.category, function(err, result) {
      if(err) {
        return console.error('error running query', err);
      }
      console.log(result.rows[0].theTime);
      client.end();
    });
  })

  module.filter = filter;
})(window);
