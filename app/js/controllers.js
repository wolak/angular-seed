'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
	controller('MyCtrl1', ['$scope', function($scope){
		$scope.menus = [{
				'class': "test",
				'location': "tester",
				'label': "TEST!"
			}
		];
		 $scope.phones = [
    {'name': 'Nexus S',
     'snippet': 'Fast just got faster with Nexus S.',
     'age': 1},
    {'name': 'Motorola XOOM™ with Wi-Fi',
     'snippet': 'The Next, Next Generation tablet.',
     'age': 2},
    {'name': 'MOTOROLA XOOM™',
     'snippet': 'The Next, Next Generation tablet.',
     'age': 3}
  ];
		console.log("hello", $scope, $scope.menus);
	}]);