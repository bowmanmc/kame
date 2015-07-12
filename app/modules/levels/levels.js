angular.module('kk').factory('KameLevels', function() {

    var hiriganaLevels = [{
        // Level 1 - Start
        "id": "h01",
        "name": "Level 1",
        "description": "a-o",
        "level": "1",
        "type": "Hirigana",
        "characters": [{
            "en": "a",
            "jp": "あ",
            "sound": "lvl-01-char-a.wav"
        }, {
            "en": "i",
            "jp": "い",
            "sound": "lvl-01-char-i.wav"
        }, {
            "en": "u",
            "jp": "う",
            "sound": "lvl-01-char-u.wav"
        }, {
            "en": "e",
            "jp": "え",
            "sound": "lvl-01-char-e.wav"
        }, {
            "en": "o",
            "jp": "お",
            "sound": "lvl-01-char-o.wav"
        }], // characterss
        "words": [{
        }]
        // Level 1 - End
    }, {
        // Level 2 - Start
        "id": "h02",
        "name": "Level 2",
        "description": "ka-ko, ga-go",
        "level": "2",
        "type": "Hirigana",
        "characters": [{
            "en": "ka",
            "jp": "か",
            "sound": "lvl-02-char-ka.wav"
        }, {
            "en": "ki",
            "jp": "き",
            "sound": "lvl-02-char-ki.wav"
        }, {
            "en": "ku",
            "jp": "く",
            "sound": "lvl-02-char-ku.wav"
        }, {
            "en": "ke",
            "jp": "け",
            "sound": "lvl-02-char-ke.wav"
        }, {
            "en": "ko",
            "jp": "こ",
            "sound": "lvl-02-char-ko.wav"
        }, {
            "en": "ga",
            "jp": "が",
            "sound": "lvl-02-char-ga.wav"
        }, {
            "en": "gi",
            "jp": "ぎ",
            "sound": "lvl-02-char-gi.wav"
        }, {
            "en": "gu",
            "jp": "ぐ",
            "sound": "lvl-02-char-gu.wav"
        }, {
            "en": "ge",
            "jp": "げ",
            "sound": "lvl-02-char-ge.wav"
        }, {
            "en": "go",
            "jp": "ご",
            "sound": "lvl-02-char-go.wav"
        }], // characters - level
        "words": [{
        }]
        // Level 2 - End
    }];

    var katakanaLevels = [{
        // Level 1 - Start
        "id": "k01",
        "name": "Level 1",
        "description": "a-o",
        "level": "1",
        "type": "Katakana",
        "characters": [{
            "en": "a",
            "jp": "ア",
            "sound": "lvl-01-char-a.wav"
        }, {
            "en": "i",
            "jp": "イ",
            "sound": "lvl-01-char-i.wav"
        }, {
            "en": "u",
            "jp": "ウ",
            "sound": "lvl-01-char-u.wav"
        }, {
            "en": "e",
            "jp": "エ",
            "sound": "lvl-01-char-e.wav"
        }, {
            "en": "o",
            "jp": "オ",
            "sound": "lvl-01-char-o.wav"
        }], // characterss
        "words": [{
        }]
        // Level 1 - End
    }, {
        // Level 2 - Start
        "id": "k02",
        "name": "Level 2",
        "description": "ka-ko, ga-go",
        "level": "2",
        "type": "Katakana",
        "characters": [{
            "en": "ka",
            "jp": "カ",
            "sound": "lvl-02-char-ka.wav"
        }, {
            "en": "ki",
            "jp": "キ",
            "sound": "lvl-02-char-ki.wav"
        }, {
            "en": "ku",
            "jp": "ク",
            "sound": "lvl-02-char-ku.wav"
        }, {
            "en": "ke",
            "jp": "ケ",
            "sound": "lvl-02-char-ke.wav"
        }, {
            "en": "ko",
            "jp": "コ",
            "sound": "lvl-02-char-ko.wav"
        }, {
            "en": "ga",
            "jp": "ガ",
            "sound": "lvl-02-char-ga.wav"
        }, {
            "en": "gi",
            "jp": "ギ",
            "sound": "lvl-02-char-gi.wav"
        }, {
            "en": "gu",
            "jp": "グ",
            "sound": "lvl-02-char-gu.wav"
        }, {
            "en": "ge",
            "jp": "ゲ",
            "sound": "lvl-02-char-ge.wav"
        }, {
            "en": "go",
            "jp": "ゴ",
            "sound": "lvl-02-char-go.wav"
        }], // characters - level
        "words": [{
        }]
        // Level 2 - End
    }];

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
