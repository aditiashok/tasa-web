var eboard    = require('./models/eboard');
var groups    = require('./models/groups');
var tasa      = require('../config/tasa');
var facebook  = require('../config/facebook');
var express   = require('express');
var mailer    = require('nodemailer');
var fs        = require('fs');



function feedbackHtmlMailBody(feedback, name, prompt) {
  return "<h1>" + prompt + "</h1><br>" + feedback + "<br>" + "<h2> -" + name + "</h2>";
}

module.exports = function(app) {

  /* ====api/backend==== */
  
  // facebook //
  app.get('/api/fb/token', function(req, res) {
    /* debugging only */
    facebook.refreshToken();
    res.send(200, { status : "token refreshed." });
  });

  app.get('/api/fb/events', function(req, res) {
    facebook.getEvents(res);
  })

  app.get('/api/fb/albums', function(req, res) {
    facebook.getAlbums(res);
  })

  app.get('/api/fb/album/id/:id', function(req, res) {
    facebook.getAlbumById(req.params.id, res);
  })

  app.get('/api/fb/album/photos/:id', function(req, res) {
    facebook.getAlbumPhotos(req.params.id, res);
  })


  // eboard //
  app.get('/api/eboard', function(req, res) {
    eboard.getByQuery(req.query, function(err, members) {
      if (err) res.json(err, 400);
      else res.json(members);
    });
  });

  app.get('/api/eboard/lastname/:id', function(req, res) {
    eboard.getByLastName(req.params.id, function(err, member) {
      if (err) res.json(err, 400);
      else res.json(member);
    });
  });

  app.get('/api/eboard/position/:id', function(req, res) {
    eboard.getByPosition(req.params.id, function(err, member) {
      if (err) res.json(err, 400);
      else res.json(member);
    });
  });

  // groups //
  app.get('/api/groups', function(req, res) {
    groups.getByQuery(req.query, function(err, groups) {
      if (err) res.json(err, 400);
      else res.json(groups);
    });
  });

  app.get('/api/groups/:id', function(req, res) {
    groups.getByName(req.params.id, function(err, groups) {
      if (err) res.json(err, 400);
      else res.json(groups);
    });
  });

  // feedback //
  app.post('/api/feedback', function(req, res) {
    /* forward feedback as TASA self-generated e-mail */
    console.log('* Recieved feedback post request : ', req.body, '*');
    var name = req.body.name;
    var sentEmail = req.body.email;
    var prompt = req.body.prompt;
    var fdbk = req.body.fdbk;
    var fdbkCarrier = mailer.createTransport("SMTP", {
      service: 'Gmail',
      auth: {
        user: tasa.email,
        pass: tasa.pass
      }
    });
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
  });

  /* ====site/frontend==== */
  app.get('*', function(req, res) {
    res.sendfile('./public/index.html');
  });

}
