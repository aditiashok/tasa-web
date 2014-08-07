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
* Gallery - label albums (organize data structures this way?)
* Eboard - resize photos to fit evenly + have horizontal navigator at top
* Deploy!
* Events - work on during school year.. should be simple

