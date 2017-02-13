// CONTROLLERS

myApp.controller('WelcomeController', ['$scope', 'nameService', function($scope, nameService) {
    $scope.name = nameService.name;

    $scope.$watch('name', function() {
    nameService.name = $scope.name;
    });

}]);

myApp.controller('AboutController', ['$scope', function($scope) {
  $scope.getDateTime = new Date();
  
}]);