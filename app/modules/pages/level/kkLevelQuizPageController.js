angular.module('kk').controller('kkLevelQuizPageController', function($scope, $routeParams, ArrayHelper, KameLevels, Scoreboard) {
    'use strict';

    $scope.currentIndex = 0;

    $scope.candidates = [];
    $scope.tries = [];

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

    $scope.checkGuess = function(guess) {
        var correct = false;
        if ($scope.tries.indexOf(guess) > -1) {
            // we've already tries this one... just return.
            return;
        }

        if (guess === $scope.quizItems[$scope.currentIndex]) {
            correct = true;
        }

        if (correct === true) {
            // next handles ending the quiz if we're on the last card
            $scope.next();
        }
        else {
            // mark the candidate as tried
            $scope.tries.push(guess);
        }
    };

    // The .slice(0) is a cheap way to get JavaScript to make a copy of an array
    var initialize = function() {
        $scope.Scoreboard = Scoreboard;
        $scope.KameLevels = KameLevels;

        var levelId = $routeParams.levelId;
        $scope.level = KameLevels.getLevel(levelId);
        $scope.quizItems = ArrayHelper.shuffle($scope.level.characters.slice(0));

        $scope.$watch('currentIndex', function() {
            $scope.tries = [];
            var answer = $scope.quizItems[$scope.currentIndex];

            // We only want 4 candidate answers
            var shuffled = ArrayHelper.shuffle($scope.level.characters.slice(0, 4));

            if (shuffled.indexOf(answer) < 0) {
                var idx = ArrayHelper.randomIndex(shuffled);
                shuffled[idx] = answer;
            }

            $scope.candidates = shuffled;
        });

    };
    initialize();
});
