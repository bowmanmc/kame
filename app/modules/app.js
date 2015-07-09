
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

    'LocalStorageModule',
    'ui.bootstrap'
]);

app.config(function($routeProvider) {

    $routeProvider
    .when('/', {
        controller: 'kkHomePageController',
        templateUrl: 'modules/pages/kkHomePageTemplate.html'
    })
    .when('/settings', {
        controller: 'kkSettingsPageController',
        templateUrl: 'modules/pages/settings/kkSettingsPageTemplate.html'
    })
    .otherwise({
        redirectTo: '/'
    });
});
