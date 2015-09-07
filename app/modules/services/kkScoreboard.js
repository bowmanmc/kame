
angular.module('kk').service('Scoreboard', function(localStorageService, Config) {
    'use strict';

    this.KEY_SCORES = 'kame.scores';
    this.KEY_SEEN = 'kame.seen';
    this.KEY_META = 'kame.meta';

    this.DATE_FMT = 'YYYY-MM-DDTHH:mm:ss';

    this.scores = null;
    this.seen = null;
    this.meta = null;


    this.updateSeenCharacter = function(levelId, character) {
        var key = levelId + '-' + character.en;
        var record = this.seen.characters[key];
        var now = moment();
        if (typeof record === 'undefined' || record === null) {
            record = {
                count: 0,
                first: now.format(this.DATE_FMT)
            };
        }
        record.count = record.count + 1;
        record.last = now.format(this.DATE_FMT);

        this.seen.characters[key] = record;
        localStorageService.set(this.KEY_SEEN, this.seen);
    };

    this.updateQuizCharacterScore = function(levelId, character, isCorrect) {
        var now = moment();
        var key = levelId + '-' + character.en;
        var record = this.scores.characters[key];
        if (typeof record === 'undefined' || record === null) {
            record = {
                firstShown: now.format(this.DATE_FMT),
                lastCorrect: null,
                lastWrong: null,
                numCorrect: 0,
                numWrong: 0
            };
        }

        record.lastShown = now.format(this.DATE_FMT);
        if (isCorrect === true) {
            record.numCorrect++;
            record.lastCorrect = now.format(this.DATE_FMT);
        }
        else {
            record.numWrong++;
            record.lastWrong = now.format(this.DATE_FMT);
        }

        this.scores.characters[key] = record;
        localStorageService.set(this.KEY_SCORES, this.scores);
    };

    this.loadFromStorage = function() {
        console.time('lsload');
        this.scores = localStorageService.get(this.KEY_SCORES);
        this.seen = localStorageService.get(this.KEY_SEEN);
        this.meta = localStorageService.get(this.KEY_META);
        console.timeEnd('lsload');
    };

    this.initializeMeta = function() {
        var now = moment.utc();
        var m = {};
        m.created = now.format(this.DATE_FMT);
        m.version = Config.version;

        localStorageService.set(this.KEY_META, m);
        this.meta = localStorageService.get(this.KEY_META);
    };

    this.initializeScores = function() {
        var now = moment.utc();
        var s = {};
        s.created = now.format(this.DATE_FMT);
        s.characters = {};
        s.levels = {};
        s.version = Config.version;

        localStorageService.set(this.KEY_SCORES, s);
        this.scores = localStorageService.get(this.KEY_SCORES);
    };

    this.initializeSeen = function() {
        var now = moment.utc();
        var s = {};
        s.created = now.format(this.DATE_FMT);
        s.characters = {};
        s.version = Config.version;

        localStorageService.set(this.KEY_SEEN, s);
        this.seen = localStorageService.get(this.KEY_SEEN);
    };

    this.nukeStorage = function() {
        console.log('!!!! #### Clearing LocalStorage #### !!!!');
        localStorageService.clearAll();
        console.log('!!!! #### LocalStorage Cleared #### !!!!');
    };

    this.reset = function() {
        this.nukeStorage();
        this.initialize();
    };

    this.initialize = function() {
        this.loadFromStorage();
        if (this.meta === null) {
            this.initializeMeta();
        }
        if (this.scores === null) {
            this.initializeScores();
        }
        if (this.seen === null) {
            this.initializeSeen();
        }

        console.log('---- Initialized Scoreboard ----');
        console.log('  Meta: ' + JSON.stringify(this.meta));
        console.log('Scores: ' + JSON.stringify(this.scores));
        console.log('  Seen:' + JSON.stringify(this.seen));
        console.log('---- ---- ---- ---- ---- ---- --');
    };
    this.initialize();
});
