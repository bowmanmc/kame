angular.module('kk').controller('kkHomePageController', function($scope, DataService) {
    'use strict';

    var initialize = function() {
        DataService.loadLevelData();
    };
    initialize();
});
