angular.module('kk').controller('kkLevelReviewPageController', function($scope, $routeParams, KameLevels, Scoreboard) {
    'use strict';

    var initialize = function() {
        $scope.Scoreboard = Scoreboard;
        $scope.KameLevels = KameLevels;

        var levelId = $routeParams.levelId;
        console.log('Loading level ' + levelId);
        $scope.level = KameLevels.getLevel(levelId);
    };
    initialize();
});
