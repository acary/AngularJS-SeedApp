// CONTROLLERS

// WelcomeController
myApp.controller('WelcomeController', ['$scope', 'nameService', 'portalService', function($scope, nameService, portalService) {
    $scope.user = nameService.user;

    $scope.$watch('user', function() {
        nameService.user = $scope.user;
    });
}]);

// FormCtrl
// myApp.controller('FormCtrl', ['$scope', function($scope) {
//     $scope.submit = function() {
//         var vm = this;
//         console.log(this);
//         console.log('Clicked: ' + this.user.name);
//         $scope.user.name = vm.user.name;
//         console.log('Step: ' + $scope.user.name);
//         $scope.user.name = '';
//     };
// }]);

// AboutController
myApp.controller('AboutController', ['$scope', function($scope) {
    $scope.getDateTime = new Date();
}]);

// PortalController
myApp.controller('PortalController', ['$scope', 'nameService', 'portalService', function($scope, nameService, portalService) {
    $scope.user = nameService.user;
    $scope.content = portalService.content;

    $scope.$watch('content', function(newVal, oldVal){
    console.log('changed');
    }, true);
}]);

// TinyMceController
myApp.controller('TinyMceController', ['$scope', 'portalService', function($scope, portalService) {
    $scope.content = portalService.content;

    $scope.tinymceOptions = {
    selector: 'textarea',
    setup: function(editor) {
        editor.on("init", function() {
        console.log('Editor started');
        });
        editor.on('click', function(e) {
        console.log('Editor was clicked');
        })
    },
    inline: false,
    plugins: 'link image code',
    toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
  };
}]);

// PreviewController
myApp.controller('PreviewController', ['$scope', 'nameService', 'portalService', function($scope, nameService, portalService) {
    //$scope.user = nameService.user;
    $scope.content = portalService.content;
}]);