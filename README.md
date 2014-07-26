TASA web  
=======
Structure  
---------
-- **api**  
------ models 			-> *mongoose models*  
------ routes 			-> *express backend / api route handling*  
-- **config**  
------ db 				-> *mongodb configuration*  
------ boots 			-> *db writes (mongoimport / mongoexport)*  
------ dumps 			-> *db backups (mongorestore / mongodump)*  
-- **node_modules** 	-> *node dependencies*  
-- **public**  
------ index.html 		-> *main view*  
------ views			-> *page views*  
------ css 				-> *stylesheets*  
------ img 				-> *images*  
------ js 				-> *client-side javascripts*  
--------- app 			-> *angular frontend / app route handling*  
--------- controllers 	-> *angular controllers*   
--------- grayscale  	-> *bootstrap visual template*  
-- **package.json**		-> *npm configuration for dependencies*  
-- **server.js**		-> *nodejs configuration*  

Todo
-----

* Work on angular controllers - pulling data using api, pushing out data into views
* Work on rest of APIs (events, gallery(?))
* Photo gallery APIs with FB API and local storage of photos
  - http://www.pixedelic.com/plugins/camera/development/camera_1.0.6/demo/basic.htm
  - http://galleria.io/
  - http://tympanus.net/codrops/2012/06/05/fullscreen-slit-slider-with-jquery-and-css3/ --> sexy full screen slideshow
  - http://unslider.com/ --> easy, small jquery slider
* Eboard bio / photo client-side API - FancyBox?
* Feedback form connect to email + form validation
