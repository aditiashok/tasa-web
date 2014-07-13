
module.exports = function(app) {
  /* api */

  /* application */
  app.get('*', function(req, res) {
    res.sendfile('./public/')
  });

}
