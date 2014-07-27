var eboard = require('./models/eboard');
var groups = require('./models/groups');
var tasa = require('../config/tasa');
var mailer = require('nodemailer');


function feedbackHtmlMailBody(feedback, name, prompt) {
  return "<h1>" + prompt + "</h1><br>" + feedback + "<br>" + "<h2> -" + name + "</h2>";
}

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
    console.log('* Recieved feedback post request : ', req.body, '*');
    var name = req.body.name;
    var sentEmail = req.body.email;
    var prompt = req.body.prompt;
    var fdbk = req.body.fdbk;
    console.log(req.body.fdbk);
    var fdbkCarrier = mailer.createTransport("SMTP", {
      service: 'Gmail',
      auth: {
        user: tasa.email,
        pass: tasa.pass /* need to make this secure! */
      }
    });
    /* need to format this email package */
    fdbkCarrier.sendMail({
        from: tasa.email,
        to: tasa.email,
        subject: '** Feedback recieved from : ' + sentEmail,
        html: feedbackHtmlMailBody(fdbk, name, prompt)
    }, function(err, info) {
      if(err) {
        console.log("* Error in relaying email : ", err);
        res.send(500, { error: "something blew up!"});
      } else {
        console.log("* Forwarding feedback : ", tasa.email);
        res.json("Message sent to: " + tasa.email);
      }
    });
  })


  /* ====site/frontend==== */
  app.get('/', function(req, res) {
    res.sendfile('./public/index.html');
  });

}
