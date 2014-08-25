'use strict';

/* Directives */


angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]);
angular.module('myApp.directives',[]).directive('fundooRating', function () {
    return {
      restrict: 'A',
      template: '<ul class="rating">' +
                  '<li ng-repeat="star in stars" ng-class="star" ng-click="toggle($index)">' +
                      '\u2605' +
                  '</li>' +
                '</ul>',
      /* scope field specifies the variables that will be on the scope of the directive when you use it. AKA Only variables that need to passed in from the HTML are specified there.*/
     /* TODO: read more on this. but so far, 
     = means expects an object,
     @ means expects an string,
     & means expects an function,*/
      scope: {
        ratingValue: '=',
        max: '=',
        readonly: '@',
        onRatingSelected: '&'
      },
      link: function (scope, elem, attrs) {
		var updateStars = function() {
			scope.stars = [];
			for(var i = 0; i < scope.max; i++) {
				scope.stars.push({filled: i < scope.ratingValue, paul: true });
			}
		};

		scope.$watch('ratingValue', function(oldVal, newVal) {
			if(newVal) {
				updateStars();
			}
		});
		scope.toggle = function(index) {
			if(scope.readonly && scope.readonly === 'true') {
		       return;
		    }
		    scope.ratingValue = index + 1;
		    scope.onRatingSelected({newRating: index + 1});
		/*    
		 One thing extremely important to note over here is that the object passed as argument 
		 should have the same key values (i.e. newRating) as they were passed in the html call to the function. 
		 So if you had called the sendRatingToServer() function as sendRatingToServer(rating, stars) 
		 it needs to be called in the directive with the same keys 
		 i.e., scope.onRatingSelected({rating: index+1, stars: 5});*/
		};
	  }
	}
});