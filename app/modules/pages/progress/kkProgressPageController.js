angular.module('kk').controller('kkProgressPageController', function($scope, KameLevels, Scoreboard) {
    'use strict';

    var initialize = function() {
        $scope.Scoreboard = Scoreboard;
        $scope.KameLevels = KameLevels;
    };
    initialize();
});
