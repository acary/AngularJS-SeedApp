// CONTROLLERS

myApp.controller('WelcomeController', ['$scope', 'nameService', function($scope, nameService) {
    //$scope.name = 'Andy';
    
    $scope.user = {
        name : 'Andrew',
    };

    // $scope.$watch('user', function() {
    //    nameService.user = $scope.user;
    // });

    $scope.$watch('user.name', function(newValue, oldValue) {
        console.log($scope);
});

    $scope.submit = function(name) {
        var vm = this;
        console.log(this);
        console.log("Clicked: " + this.user.name);
        $scope.user.name = vm.user.name;
        console.log("Step: " + $scope.user.name);
        $scope.user.name = '';
        // apply
        $scope.$digest();
    };

}]);

myApp.controller('AboutController', ['$scope', function($scope) {
  $scope.getDateTime = new Date();
  
}]);