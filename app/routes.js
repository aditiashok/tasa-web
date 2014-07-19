
module.exports = function(app) {
  var eboard = require('./models/eboard');

  /* api */
  app.get('/api/eboard', function(req, res) {
    // current eboard
    eboard.EBMember.find(function(err, members){
      // may eventually want to move this function
      // to eboard.js and port to here to separate concerns
      if (err)
        res.send(err);
      res.json(members);
    })
  })

  /* application */
  app.get('/', function(req, res) {
    res.sendfile('./public/index.html')
  });

}
