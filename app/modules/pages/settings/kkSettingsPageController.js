angular.module('kk').controller('kkSettingsPageController', function($scope, Scoreboard) {
    'use strict';


    $scope.resetScores = function() {
        console.log('** Resetting Scoreboard...');
        Scoreboard.reset();
    };

});
