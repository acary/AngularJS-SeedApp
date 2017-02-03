'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);

// Controllers (index-controllers.html)
angular.module('app', []);

angular.module('app').controller('MainCtrl', function (){
  var self = this;
  self.message = 'hello';
  console.log(self.message);

  self.changeMessage = function(message) {
    self.message = message;
  };
});

// Services (index-services.html)
angular.module('app').factory('messages', function() {
  var messages = {};

  messages.list = [];
  messages.add = function(message) {
    messages.list.push({id: messages.list.length, text: message});
  };

  return messages;
});

// Controller for Services
angular.module('app').controller('ListCtrl', function(messages) {
  var self = this;

  self.messages = messages.list;

});

// Controller for updating messages
angular.module('app').controller('PostCtrl', function(messages) {
  var self = this;
  self.message = "Hello, great World!";

  self.addMessage = function(message) {
    messages.add(message);
    self.newMessage = '';
  };

});