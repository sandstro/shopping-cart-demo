var controllers = require('./controllers');

(function() {
	
var app = angular.module("ostoskori", ["ostoskoriControllers", "ngStorage", "ui.bootstrap"]);

	/*app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'view-matkat.html',
		controller: 'MainController'
	})
	.when('/ostoskori', {
		templateUrl: 'view-ostoskori.html',
		controller: 'KoriController'
	})
	.otherwise({
	redirectTo: '/'
		});
	}]);*/

	app.directive('dropdownHtml', function() {
		return {
			restrict: 'E',
			templateUrl: 'view-dropdown.html',
			controller: function($scope, $http) {
	    
	    	console.log("Directive loaded");
	    	}
	    };
	});

})();
