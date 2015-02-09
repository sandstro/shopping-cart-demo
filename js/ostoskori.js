// Browserify bundle
var controllers = require('./controllers');

(function() {
	
var app = angular.module("ostoskori", ["ostoskoriControllers", "ngStorage", "ui.bootstrap"]);
	
	// Future plans
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
