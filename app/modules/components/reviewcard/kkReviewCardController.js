angular.module('kk').controller('kkReviewCardController', function($scope, Scoreboard) {
    'use strict';

    $scope.showBack = false;
    $scope.flip = function() {
        console.log('flipping card!');
        $scope.showBack = !$scope.showBack;
    };

    $scope.playSound = function($event) {
        console.log('Playing sound...');
        $event.stopPropagation();
    };

    var initialize = function() {
        $scope.$watch('character', function() {
            console.log('-- Card.character changed!');
            Scoreboard.updateSeenCharacter($scope.level.id, $scope.character);
        });
    };
    initialize();
});
