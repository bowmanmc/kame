
if (typeof console === 'undefined') {
    console = {
        log: function() {}
    };
}

var app = angular.module('kk', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',

    'ui.bootstrap'
]);

app.config(function($routeProvider) {

    $routeProvider
    .when('/', {
        controller: 'kkHomePageController',
        templateUrl: 'modules/pages/kkHomePageTemplate.html'
    })
    .otherwise({
        redirectTo: '/'
    });
});
