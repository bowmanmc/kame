angular.module('kk').controller('kkHomePageController', function($scope, KameLevels, Scoreboard) {
    'use strict';

    var initialize = function() {
        $scope.Scoreboard = Scoreboard;
    };
    initialize();
});
