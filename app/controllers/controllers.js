// CONTROLLERS

myApp.controller('WelcomeController', ['$scope', 'nameService', function($scope, nameService) {
    $scope.user = nameService.user;

    $scope.$watch('user', function() {
        nameService.user = $scope.user;
    });
}]);

myApp.controller('FormCtrl', ['$scope', function($scope) {
    $scope.submit = function() {
        var vm = this;
        console.log(this);
        console.log('Clicked: ' + this.user.name);
        $scope.user.name = vm.user.name;
        console.log('Step: ' + $scope.user.name);
        $scope.user.name = '';
    };
}]);

myApp.controller('AboutController', ['$scope', function($scope) {
    $scope.getDateTime = new Date();
}]);

myApp.controller('PortalController', ['$scope', 'nameService', 'portalService', function($scope, nameService, portalService) {
    $scope.user = nameService.user;
    $scope.content = portalService.content;
}]);

myApp.controller('PreviewController', ['$scope', 'nameService', 'portalService', function($scope, nameService, portalService) {
    $scope.user = nameService.user;
    $scope.content = portalService.content;
}]);
