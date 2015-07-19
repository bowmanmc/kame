angular.module('kk').factory('KameLevels', function(
    LvlH01, LvlH02, LvlH03, LvlH04, LvlH05, LvlH06,
    LvlK01, LvlK02
    ) {

    var hiriganaLevels = [LvlH01, LvlH02, LvlH03, LvlH04, LvlH05, LvlH06];

    var katakanaLevels = [LvlK01, LvlK02];

    return {
        'hirigana': hiriganaLevels,
        'katakana': katakanaLevels,
        'getLevel': function(levelId) {
            var i, len;
            var levels = hiriganaLevels;
            if (levelId[0] === 'k') {
                levels = katakanaLevels;
            }
            len = levels.length;
            for (i = 0; i < len; i++){
                if (levels[i].id === levelId) {
                    return levels[i];
                }
            }
            return null;
        }
    };

});
