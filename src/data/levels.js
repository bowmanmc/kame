import Hiragana from './hiragana';
import Katakana from './katakana';

export default {
    'hiragana': Hiragana,
    'katakana': Katakana,
    'getLevel': function(levelId) {
        var i, len;
        var levels = Hiragana;
        if (levelId[0] === 'k') {
            levels = Katakana;
        }
        len = levels.length;
        for (i = 0; i < len; i++){
            if (levels[i].id === levelId) {
                return levels[i];
            }
        }
        return null;
    }
}
