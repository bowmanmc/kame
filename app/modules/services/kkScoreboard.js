
angular.module('kk').service('Scoreboard', function(localStorageService, Config) {
    'use strict';

    this.KEY_SCORES = 'kame.scores';
    this.KEY_META = 'kame.meta';

    this.DATE_FMT = 'YYYY-MM-DDTHH:mm:ss';

    this.scores = null;
    this.meta = null;


    this.loadFromStorage = function() {
        this.scores = localStorageService.get(this.KEY_SCORES);
        this.meta = localStorageService.get(this.KEY_META);
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
        s.levels = [];
        s.version = Config.version;

        localStorageService.set(this.KEY_SCORES, s);
        this.scores = localStorageService.get(this.KEY_SCORES);
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

        console.log('---- Initialized Scoreboard ----');
        console.log('  Meta: ' + JSON.stringify(this.meta));
        console.log('Scores: ' + JSON.stringify(this.scores));
        console.log('---- ---- ---- ---- ---- ---- --');
    };
});
