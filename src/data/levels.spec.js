
import Levels from './levels';

describe('Levels Setup Correctly', () => {

    it('Has hiragana levels', () => {
        expect(Levels.hiragana.length).toBeGreaterThan(1);
    });

    it('Has katakana levels', () => {
        expect(Levels.katakana.length).toBeGreaterThan(1);
    })

    it('Can Lookup Levels', () => {
        let lvl = Levels.getLevel('h01');
        expect(lvl).not.toBeNull();
        lvl = Levels.getLevel('k01');
        expect(lvl).not.toBeNull();
        lvl = Levels.getLevel('foo');
        expect(lvl).toBeNull();
    });
});
