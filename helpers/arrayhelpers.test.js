var assert = require('assert');

const ah = require('./arrayhelpers');
test('min value test', () => {
      expect(ah.min([1, 2, 3, 4, -8, 2])).toBe(-8);
      expect(ah.max([1, 2, 3, 4, -8, 2])).toBe(4);
      expect(ah.sort([1, 2, 3, 4, -8, 20])).toEqual([ 20, 4, 3, 2, 1, -8 ]);
      expect(ah.sort([1, 2, 3, 4, -8, 20])).not.toEqual([ 20, 4, 2, 3, 1, -8 ]);
});