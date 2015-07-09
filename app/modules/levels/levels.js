angular.module('kk').factory('KameLevels', function() {

    return [{
        // Level 1 - Start
        "name": "Hirigana - Level 1",
        "description": "a-o",
        "level": "1",
        "type": "hirigana",
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
        "name": "Hirigana - Level 2",
        "description": "ka-ko, ga-go",
        "level": "2",
        "type": "hirigana",
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

});
