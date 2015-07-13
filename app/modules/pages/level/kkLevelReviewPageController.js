angular.module('kk').controller('kkLevelReviewPageController', function($scope, $routeParams, KameLevels, Scoreboard) {
    'use strict';

    $scope.currentIndex = 0;

    $scope.hasPrevious = function() {
        if ($scope.currentIndex < 1) {
            return false;
        }
        return true;
    };

    $scope.hasNext = function() {
        if ($scope.currentIndex >= ($scope.level.characters.length - 1)) {
            return false;
        }
        return true;
    };

    $scope.next = function() {
        $scope.currentIndex++;
    };
    $scope.previous = function() {
        $scope.currentIndex--;
    };

    var initialize = function() {
        $scope.Scoreboard = Scoreboard;
        $scope.KameLevels = KameLevels;

        var levelId = $routeParams.levelId;
        $scope.level = KameLevels.getLevel(levelId);

    };
    initialize();
});
