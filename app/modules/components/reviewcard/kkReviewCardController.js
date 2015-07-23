angular.module('kk').controller('kkReviewCardController', function($scope, Scoreboard) {
    'use strict';

    $scope.showBack = false;
    $scope.flip = function() {
        $scope.showBack = !$scope.showBack;
    };

    $scope.playSound = function($event) {
        console.log('Playing sound...');
        $event.stopPropagation();
    };

    var initialize = function() {
        $scope.$watch('character', function() {
            $scope.showBack = false;
            Scoreboard.updateSeenCharacter($scope.level.id, $scope.character);
        });
    };
    initialize();
});
