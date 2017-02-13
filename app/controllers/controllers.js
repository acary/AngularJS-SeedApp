// CONTROLLERS

myApp.controller('WelcomeController', ['$scope', function($scope) {
  $scope.name = 'Andy';
}]);

myApp.controller('AboutController', ['$scope', function($scope) {
  $scope.getDateTime = new Date();
  
}]);