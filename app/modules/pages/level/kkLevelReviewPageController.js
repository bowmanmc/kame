angular.module('kk').controller('kkLevelReviewPageController', function($scope, $routeParams, KameLevels, Scoreboard) {
    'use strict';

    $scope.currentIndex = 0;

    $scope.first = function() {
        $scope.currentIndex = 0;
    };
    $scope.previous = function() {
        $scope.currentIndex--;
    };
    $scope.next = function() {
        $scope.currentIndex++;
    };
    $scope.last = function() {
        $scope.currentIndex = $scope.level.characters.length - 1;
    };


    var initialize = function() {
        $scope.Scoreboard = Scoreboard;
        $scope.KameLevels = KameLevels;

        var levelId = $routeParams.levelId;
        $scope.level = KameLevels.getLevel(levelId);
    };
    initialize();
});
