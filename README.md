TASA web
=======

app
 controllers   -> angular DOM injections
 models        -> mongoose models
 views         -> html views
 routes        -> express route handling
config
 db            -> mongodb configuration
public
 index.html    -> main view
 css           -> stylesheets
 js            -> client-side javascripts
package.json      -> npm configuration for dependencies
server.js         -> node configuration


Todo:

** Back-end model for e-board / event / photo collection - probably BackboneJs or EmberJs model?
* Photo Gallery feature
  possible APIs:
  - http://www.pixedelic.com/plugins/camera/development/camera_1.0.6/demo/basic.htm
  - http://galleria.io/
  - http://tympanus.net/codrops/2012/06/05/fullscreen-slit-slider-with-jquery-and-css3/ --> sexy full screen slideshow
  - http://unslider.com/ --> easy, small jquery slider


* Eboard bio/photo feature - FancyBox?
* Feedback form connect to email + form validation
