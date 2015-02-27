'use strict';

/* defining the app */
var app = angular
	.module("fileupload", ['ngRoute','ngResource', 'angular-growl'])
	.config(function($routeProvider, growlProvider) {
		growlProvider.globalTimeToLive(5000);
	    $routeProvider
				.when('/',
					 {templateUrl: 'app/home.html'},
					 {controller: 'appCtrl.js'}
					)
				.otherwise({redirectTo: '/'});
	});