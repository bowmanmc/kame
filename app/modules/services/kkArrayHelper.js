angular.module('kk').service('ArrayHelper', function(localStorageService, Config) {
    'use strict';

    // Fisher–Yates shuffle
    // http://bost.ocks.org/mike/shuffle/
    this.shuffle = function(array) {
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

    this.randomIndex = function(array) {
        // returns random number between 0 and (array.length - 1)
        return Math.floor(Math.random() * array.length);
    };

});
