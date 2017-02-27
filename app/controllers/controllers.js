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

    // $scope.$watch('content', function(newVal, oldVal){
    // console.log('changed');
    // }, true);
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
myApp.controller('PreviewController', ['$scope', 'nameService', 'portalService', '$http', 'base64', function($scope, nameService, portalService, $http, base64) {
    //$scope.user = nameService.user;

    $scope.content = portalService.content;
    var myName = nameService.user.name;
        console.log(myName);
    var myDescription = portalService.content.description;
    myDescription = myDescription.replace(/<(?:.|\n)*?>/gm, '');
        console.log(myDescription);

    $scope.sendPost = function() {
        var username='acpro';
        var password='Servicenow!23';
        var authdata=base64.encode(username+':'+password);
            console.log(authdata);

        var req = {
        method: 'POST',
        url: 'https://dev26890.service-now.com/api/now/table/incident',
        headers: {
        'Accept' : 'application/json',
        'Authorization' : 'Basic ' + authdata,
        'Content-Type' : 'application/json',
        },
        data: {
            "comments":myDescription,
            "short_description":"Sent from AndyCaryPro: " + myName
        }
    }
        console.log(req)

    $http(req)

    .success(function(data, status) {
        //$scope.hello = data;
        alert("Thank you for your input!");
    })
    }
}]);