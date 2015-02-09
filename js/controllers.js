'use strict';

(function() {

var ostoskoriControllers = angular.module('ostoskoriControllers', []);

ostoskoriControllers.controller('MainController', function($scope, $http, $localStorage, $timeout) {
	// Browserify
	var _ = require('underscore');

	// Local storage init
	$scope.$storage = $localStorage.$default({
		totalItems: 0,
		orders: [],
		orderEdited: {}
	});
	
	$scope.menuTitle = "Ostoskori";
	$scope.data = {};
	$scope.options = [
		{ label: '1', value: 1 },
		{ label: '2', value: 2 },
		{ label: '3', value: 3 },
		{ label: '4', value: 4 },
		{ label: '5', value: 5 },
		{ label: '6', value: 6 },
		{ label: '7', value: 7 },
		{ label: '8', value: 8 }
	];
	$scope.adults = $scope.options[0];
	$scope.showAdd = false;
	$scope.showRemove = false;
	$scope.alertAdd = {
		type: 'success', msg: 'Matka lisätty ostoskoriin'
	};
	$scope.alertRemove = {
		type: 'success', msg: 'Matka poistettu'
	};

	/* 
	 * Function to add a trip from the user interface.
	 * Params
	 * - datum: Trip data.
	 * - adults: Amount of adults selected.
	 */
	$scope.addTrip = function(datum, adults) {
		
		//adults = adults.value;
		var order = datum;
		var added = false;
		var objectFound = {};
		order.adults = adults;
		$scope.showAdd = true;

		objectFound = _.find($scope.$storage.orders, function(item) {
			return item.id == order.id;
		});

		if (objectFound != undefined) {
			objectFound.adults = order.adults;
			added = true;
		}

		if (!added) {
			$scope.$storage.totalItems++;
			$scope.$storage.orders.push(order);
			added = true;
		}

		$timeout(function() {
			$scope.showAdd = false;	
		}, 2000);	
	};

	/*
	 * Function to delete a selected order.
	 * Params
	 * - datum: Trip data.
	 */
	$scope.deleteTrip = function(datum) {

		var index = $scope.$storage.orders.indexOf(datum);
		$scope.$storage.orders.splice(index, 1);
		$scope.$storage.totalItems--;
		$scope.showRemove = true;

		$timeout(function() {
			$scope.showRemove = false;	
		}, 2000);
	}

	/*
	 * Function to select certain order to edit.
	 * Params
	 * - datum: Trip data.
	 */
	$scope.toggleEdit = function(datum) {
		$scope.$storage.orderEdited = datum;
		var opt = datum.adults.value;
		$scope.adultsEdit = $scope.options[opt - 1];
	}

	/*
	 * Function to clear the edited order from storage.
	 */
	$scope.resetEdit = function() {
		$scope.$storage.orderEdited = {};
	}

	// Use if running a LAMP stack or other server.
	/*$http({
		method: 'GET',
		url: 'offers.json'
	})
	.success(function(data, status, headers, config) {
		console.log("Success:" + data);
		$scope.data = data;
	})
	.error(function(err) {console.log("Error:" + err)});*/

	// Static data. (No same/cross origin errors without environment)
	$scope.data = {
		"offers": [
	 		{
	 			"id":			      1,
	 			"name":			    "Hervanta",
	 			"description":	"Tutustu ainutlaatuiseen arkkitehtuuriin ja nauti lumoavasta ilmapiiristä!",
	 			"image":		    "images/offer-hervanta.jpg",
	 			"price":		    8
			},
			{
	 			"id":			      2,
	 			"name":			    "Reykjavik",
	 			"description":	"Kuumaa ja kylmää, tulivuoria ja geysirejä! Maailman pienin pohjoismaa kutsuu sinua!",
	 			"image":		    "images/offer-reykjavik.jpg",
	 			"price":		    300
	    	},
			{
	 			"id":			      3,
	 			"name":			    "Bermuda",
	 			"description":	"Mystistä menoa ja arkeologisia aarteita, vain menolippuja tarjolla!",
	 			"image":		    "images/offer-bermuda.jpg",
	 			"price":		    120
			},
			{
	 			"id":			      4,
	 			"name":			    "Kouvola",
	 			"description":	"Ajaton miljöö ja leppoisa paikallisväestä takaavat onnistuneen reissun!",
	 			"image":		    "images/offer-kouvola.jpg",
	 			"price":		    220
			},
			{
	 			"id":			      5,
	 			"name":			    "Pariisi",
	 			"description":	"Nauti viinilasillisesta Eiffel-tornin varjossa, c'est magnifique!",
	 			"image":		    "images/offer-pariisi.jpg",
	 			"price":		    300
			},
			{
	 			"id":			      6,
	 			"name":			    "Tukholma",
	 			"description":	"Nauti kaupunkilomasta naapurimaan kuhisevassa metropolissa",
	 			"image":		    "images/offer-tukholma.jpg",
	 			"price":		    300
			},
			{
	 			"id":		   	    7,
	 			"name":			    "Novosibirsk",
	 			"description":	"Siperian radan ehdoton helmi, kiehtova kaupunki vain 3300km Moskovasta itään!",
	 			"image":		    "images/offer-novosibirsk.jpg",
	 			"price":		    320
			},
			{
	 			"id":			      8,
	 			"name":			    "Malé",
	 			"description":  "Paratiisi maan päällä! Anna malediivien viedä sydämesi!",
	 			"image":		    "images/offer-malediivit.jpg",
	 			"price":		    1200
			},
			{
	 			"id":		        9,
	 			"name":		 	    "Tampere",
	 			"description":	"Kaikkea oikeassa suhteessa: kulttuuria, kauneutta ja loistavaa tunnelmaa!",
	 			"image":		    "images/offer-tampere.jpg",
	 			"price":		    35
			},
		    {
		      "id":           10,
		      "name":         "New York",
		      "description":  "Maailman kuuluisin kaupunkin on täynnä kuhinaa vuorokauden kaikkina aikoina!",
		      "image":        "images/offer-new-york.jpg",
		      "price":        2000
		    }
		]
	};

});

})();
