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
  }]).service('roomiesinputmodel', function(){
	return function(json) {
	    json = json || {};
	    this.item_desc = json.item_desc || null;
	    this.amount = json.amount || null;
	}
}); 