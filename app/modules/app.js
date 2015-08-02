
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
        templateUrl: 'modules/pages/home/kkHomePageTemplate.html'
    })
    .when('/settings', {
        controller: 'kkSettingsPageController',
        templateUrl: 'modules/pages/settings/kkSettingsPageTemplate.html'
    })
    .when('/progress', {
        controller: 'kkProgressPageController',
        templateUrl: 'modules/pages/progress/kkProgressPageTemplate.html'
    })
    .when('/level/:levelId', {
        controller: 'kkLevelPageController',
        templateUrl: 'modules/pages/level/kkLevelPageTemplate.html'
    })
    .when('/level/:levelId/review', {
        controller: 'kkLevelReviewPageController',
        templateUrl: 'modules/pages/level/kkLevelReviewPageTemplate.html'
    })
    .when('/level/:levelId/quiz', {
        controller: 'kkLevelQuizPageController',
        templateUrl: 'modules/pages/level/kkLevelQuizPageTemplate.html'
    })
    .otherwise({
        redirectTo: '/'
    });
});
