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

// appform

angular.module('appForm', []);

angular.module('appForm').controller('MyControl', function (){
  var self = this;
  self.greeting = 'Hello, programmer.';
  console.log(self.greeting);

  self.changeGreeting = function(greeting) {
    self.greeting = greeting;
  };
});

// Form (form.html)
angular.module('appForm').factory('greetings', function() {
  var greetings = {};

  greetings.list = [];
  greetings.add = function(greeting) {
    greetings.list.push({id: greetings.list.length, text: greeting});
  };

  return greetings;
});

// Controller for Form
angular.module('appForm').controller('myControl', function(greetings) {
  var self = this;

  self.greetings = greetings.list;

});

// Controller for updating messages
angular.module('appForm').controller('PostControl', function(greetings) {
  var self = this;
  self.greetings = "Hello, great World!";

  self.addGreeting = function(greeting) {
    greetings.add(greeting);
    self.newGreeting = '';
  };

});

// Promises

function getData($timeout, $q) {
  return function() {
    // simulated async function
    return $q(function(resolve, reject) {
      $timeout(function() {
        resolve(Math.floor(Math.random() * 10))
      }, 2000)
    })
  }
}

angular.module('app1', [])
.factory('getData', getData)
.run(function(getData) {
  var promise = getData()
  .then(function(num) {
      console.log(num)
      return num * 2
    })
    .then(function(num) {
      console.log(num)
    })
    .finally(function() {
      console.log('Finished at:', new Date())
    })
})
