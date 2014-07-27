var eboard = require('./models/eboard');
var groups = require('./models/groups');
var mailer = require('nodemailer');
var addr = "soubhikbarari@gmail.com";
var pass = "Mothersip2";


module.exports = function(app) {

  /* ====api/backend==== */
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

  //feedback
  app.post('/api/feedback', function(req, res) {
    console.log('* Recieved feedback post : ', req.body, '*');
    var name = req.body.name;
    var email = req.body.email;
    var fdbk = req.body.feedback;
    var fdbkCarrier = mailer.createTransport("SMTP", {
      service: 'Gmail',
      auth: {
        user: addr,
        pass: pass /* need to make this secure! */
      }
    });
    /* need to format this email package */
    fdbkCarrier.sendMail({
        from: addr,
        to: addr,
        subject: '** Feedback recieved from : ' + name,
        text: fdbk
    }, function(err, info) {
      if(err) {
        console.log("* Error in relaying email : ", err);
        res.json(err);
      } else {
        console.log("* Forwarding feedback : ", addr);
        res.json("Message sent to: " + addr);
      }
    });
  })


  /* ====site/frontend==== */
  app.get('/', function(req, res) {
    res.sendfile('./public/index.html');
  });

}
