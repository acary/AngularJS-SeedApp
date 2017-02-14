myApp.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {

    $locationProvider.hashPrefix('!');

    $routeProvider

    .when('/', {
        templateUrl: 'views/home.html',
        controller: 'WelcomeController',
    })

    .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutController',
    });

    //.otherwise({redirectTo: '/view1'});

}]);