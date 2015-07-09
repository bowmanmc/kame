angular.module('kk').controller('kkHomePageController', function($scope, KameLevels, Scoreboard) {
    'use strict';

    var initialize = function() {
        Scoreboard.initialize();
    };
    initialize();
});
