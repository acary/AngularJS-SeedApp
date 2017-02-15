// ROUTES
myApp.config(function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider
    .when('/', {
        templateUrl: 'views/home.html',
        controller: 'WelcomeController',
    })
    .when('/portal', {
        templateUrl: 'views/portal.html',
        controller: 'PortalController',
    })
    .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutController',
    })
    .when('/preview', {
        templateUrl: 'views/preview.html',
        controller: 'PreviewController',
    });

    //.otherwise({redirectTo: '/view1'});
});
