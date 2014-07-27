TASA web  
=======
Structure  
---------
-- **app**  
------ models 			-> *mongoose models*  
------ routes 			-> *express backend / api route handling*  
-- **config**  
------ db 				-> *mongodb configuration*   
------ tasa 			-> *TASA general information*  
------ boots 			-> *db writes (mongoimport / mongoexport)*  
------ dumps 			-> *db backups (mongorestore / mongodump)*  
-- **node_modules** 	-> *node dependencies*  
-- **public**  
------ index.html 		-> *main view*  
------ views			-> *page views*  
------ css 				-> *stylesheets*  
------ img 				-> *client-side image store*  
------ js 				-> *client-side javascripts*  
--------- app 			-> *angular frontend / site route handling*  
--------- controllers 	-> *angular controllers*   
--------- grayscale  	-> *bootstrap visual template*  
-- **package.json**		-> *npm configuration for dependencies*  
-- **server.js**		-> *nodejs configuration*  

Todo
-----
* Eboard
* Gallery
* Events

* Photo gallery / display APIs
  - http://www.pixedelic.com/plugins/camera/development/camera_1.0.6/demo/basic.htm
  - http://galleria.io/
  - http://tympanus.net/codrops/2012/06/05/fullscreen-slit-slider-with-jquery-and-css3/ --> sexy full screen slideshow
  - http://unslider.com/ --> easy, small jquery slider
  - FancyBox

