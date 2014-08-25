'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
	controller('MyCtrl1', ['$scope', '$timeout', 'notify', function($scope, $timeout, notify){
		$scope.getStuff = function(){
			console.log("heyo! you know something", $scope.company);
			console.log("Entered: ", $scope.company.code)
			if($scope.company.code != "a" && $scope.company.code != "c" && $scope.company.code != "b"){
				$scope.company.homo = "Gayy";
				$scope.homolink= "http://s2.quickmeme.com/img/78/7892b482c981d986ee3e4584802be51f052d8bfe460d903e42c5fb948e16287d.jpg";
			} else {
				$scope.company.homo = "straight";
				$scope.homolink= "http://memecrunch.com/meme/ZX27/you-did-it-you-did-it/image.png";
			}
			$timeout(function(){
				$scope.company.code = "";
				console.log("something")
			}, 2000)
			console.log("heyo! you know something", $scope.company);
		};
		 $scope.callNotify = function(msg) {
	      notify(msg);
	    };
	     $scope.rating = 5; 
	     $scope.saveRatingToServer = function(rating) {
	      	console.log("Send rating: "+rating+" to server");
	      }
	}]).
	controller('roomiesCtrl', ['$scope', 'roomiesinputmodel', function($scope, roomiesinputmodel){
		$scope.friends = function(){
			var a = new roomiesinputmodel();
			console.log(a);
		};
		$scope.w = {
	        inputs: [new roomiesinputmodel()]
	    };
	}])