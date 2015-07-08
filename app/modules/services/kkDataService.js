angular.module('kk').service('DataService', function($http) {

    var lvlManifestUrl = 'data/lvl-manifest.json';

    this.loadLevelData = function() {
        console.log('loading data...');

        $http.get(lvlManifestUrl).then(function(response) {
            var manifest = response.data;
            console.log('Got manifest levels: ' + JSON.stringify(manifest.levels));
        });

    };

});
