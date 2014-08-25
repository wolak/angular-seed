'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  value('version', '0.1');
angular.module('myApp.services', []).factory('notify', ['$window', function(win) {
    var msgs = [];
    console.log("notify constructor");
    return function(msg) {
		console.log("notify function");
		msgs.push(msg);
		if (msgs.length == 3) {
			win.alert(msgs.join("\n"));
			msgs = [];
		}
    };
  }]);
//This is a service because it will be new-ed
/* TODO: figure out why name space conflict here*/
angular.module('myApp.services1', []).service('roomiesinputmodel', function(){
	return function(json) {
	    json = json || {};
	    this.inputval = json.inputval || "something";
	    this.inputwas = json.inputwas || "Enter Input";
	}
}); 