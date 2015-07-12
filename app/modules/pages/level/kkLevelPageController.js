angular.module('kk').controller('kkLevelPageController', function($scope, $routeParams, KameLevels, Scoreboard) {
    'use strict';

    var initialize = function() {
        $scope.Scoreboard = Scoreboard;
        $scope.KameLevels = KameLevels;

        var levelId = $routeParams.levelId;
        console.log('Loading level ' + levelId);
    };
    initialize();
});
