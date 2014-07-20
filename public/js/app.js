
// handle routes + link to controllers -- front-end
var tasaApp = angular.module('tasaApp', ['ngRoute', 'introCtrl', 'galleryCtrl', 'eventsCtrl', 'eboardCtrl', 'aboutCtrl', 'contactCtrl', 'feedbackCtrl']);

tasaApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		// route to HOME page
		.when('/', {
			templateUrl : 'views/intro.html',
			controller 	: 'introController'
		})

		// route to EVENTS page
		.when('/events', {
			templateUrl : 'views/events.html',
			controller 	: 'eventsController'
		})

		// route to GALLERY page
		.when('/gallery', {
			templateUrl : 'views/gallery.html',
			controller 	: 'galleryController'
		})

		// route to EBOARD page
		.when('/eboard', {
			templateUrl : 'views/eboard.html',
			controller 	: 'eboardController'
		})

		// route to ABOUT page
		.when('/about', {
			templateUrl : 'views/about.html',
			controller 	: 'aboutController'
		})

		// route to CONTACT page
		.when('/contact', {
			templateUrl : 'views/contact.html',
			controller 	: 'contactController'
		})

		// route to FEEDBACK page
		.when('/feedback', {
			templateUrl : 'views/feedback.html',
			controller 	: 'feedbackController'
		})

}]);