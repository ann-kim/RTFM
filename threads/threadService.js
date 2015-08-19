var app = angular.module('rtfmApp');

app.service('threadService', function(fb, $authObject) {
	var firebaseRef = new Firebase("https://annrtfmproj.firebaseio.com/");
	var authObject = $firebaseAuth(firebaseRef);
	this.getThreads = function() {
		return new Firebase(fb.url + /threads/);
	};


	this.getThread = function(threadId) {
		return new Firebase(fb.url + '/threads/' + threadId);
	};


	this.getComments = function(threadId) {
		return new Firebase(fb.url + '/threads/' + threadId + '/comments')
	}

	this.register = function(user){
		authObject.$createUser({
			email: user.email,
			password: user.password
		})
	}
});