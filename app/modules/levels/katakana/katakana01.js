angular.module('kk').factory('LvlK01', function() {

    return {
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
    };
});
