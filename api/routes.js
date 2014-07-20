var eboard = require('./models/eboard');
var groups = require('./models/groups');


module.exports = function(app) {

  /* ====api==== */
  // eboard
  app.get('/api/eboard', function(req, res) {
    eboard.getByQuery(req.query, function(err, members) {
      if (err) throw err;
      else res.json(members);
    });
  })

  app.get('/api/eboard/lastname/:id', function(req, res) {
    eboard.getByLastName(req.params.id, function(err, member) {
      if (err) throw err;
      else res.json(member);
    });
  })

  app.get('/api/eboard/position/:id', function(req, res) {
    eboard.getByPosition(req.params.id, function(err, member) {
      if (err) throw err;
      else res.json(member);
    });
  })

  //groups
  app.get('/api/groups', function(req, res) {
    groups.getByQuery(req.query, function(err, groups) {
      if (err) throw err;
      else res.json(groups);
    });
  })

  /* ====site==== */
  app.get('*', function(req, res) {
    res.sendfile('./public/index.html');
  });

}
