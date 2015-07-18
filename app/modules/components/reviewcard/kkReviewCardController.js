angular.module('kk').controller('kkReviewCardController', function($scope, Scoreboard) {
    'use strict';


    var initialize = function() {
        $scope.$watch('character', function() {
            console.log('-- Card.character changed!');
            Scoreboard.updateSeenCharacter($scope.level.id, $scope.character);
        });
    };
    initialize();
});
