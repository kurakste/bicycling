var assert = require('assert');

const ah = require('./arrayhelpers');
test('min value test', () => {
      expect(ah.min([1, 2, 3, 4, -8, 2])).toBe(-8);
      expect(ah.max([1, 2, 3, 4, -8, 2])).toBe(4);
});