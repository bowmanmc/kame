angular.module('kk').controller('kkSettingsPageController', function($scope, Config, Scoreboard) {
    'use strict';


    $scope.resetScores = function() {
        console.log('** Resetting Scoreboard...');
        Scoreboard.reset();
    };

    var initialize = function() {
        $scope.Config = Config;
    };
    initialize();
});
