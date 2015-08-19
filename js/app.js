var app = angular.module('rtfmApp', ['firebase', 'ngRoute']);

app.constant('fb', { //'fb' constant is like a service; wherever we inject fb we can grab the url property off of it 
	url: "https://annrtfmproj.firebaseio.com/ann-kim"
});

app.config(function($routeProvider) {
		$routeProvider
			.when('/threads', {
				templateUrl: 'threads/threads.html',
				controller: 'threadsCtrl',
				resolve: {
					threadsRef: function(threadService) {
						return threadService.getThreads();
					}
				}
			})
			.when('/threads/:threadId', {
				templateUrl: 'thread/thread.html',
				controller: 'threadCtrl',
				resolve: {
					threadRef: function(threadService, $route) {
						return threadService.getThread($route.current.params.threadId);
					},
					commentsRef: function(threadService, $route) {
						return threadService.getComments($route.current.params.threadId);
					}
				}
			})
			.otherwise({
				redirectTo: '/threads'
			})
	});