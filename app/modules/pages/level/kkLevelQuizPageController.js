angular.module('kk').controller('kkLevelQuizPageController', function($scope, $routeParams, KameLevels, Scoreboard) {
    'use strict';

    $scope.currentIndex = 0;

    $scope.candidates = [];

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

    // Fisher–Yates shuffle
    // http://bost.ocks.org/mike/shuffle/
    var shuffle = function(array) {
        var m = array.length, t, i;
        // While there remain elements to shuffle…
        while (m) {
            // Pick a remaining element…
            i = Math.floor(Math.random() * m--);
            // And swap it with the current element.
            t = array[m];
            array[m] = array[i];
            array[i] = t;
        }
        return array;
    };

    var initialize = function() {
        $scope.Scoreboard = Scoreboard;
        $scope.KameLevels = KameLevels;

        var levelId = $routeParams.levelId;
        $scope.level = KameLevels.getLevel(levelId);
        $scope.quizItems = shuffle($scope.level.characters);
        $scope.candidates = shuffle($scope.level.characters.slice(0));

        $scope.$watch('currentIndex', function(newIdx, oldIdx) {
            console.log('currentIndex changed!');
            shuffle($scope.candidates);
        });

    };
    initialize();
});
