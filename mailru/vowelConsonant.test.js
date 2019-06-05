let volwelConsonant = require('./vowelConsonant');

let p1 = 'that is articulated';
let p2 = 'pronounced with';

test('success p1', () => {
  expect(volwelConsonant(p1)[0]).toBe(7);
  expect(volwelConsonant(p1)[1]).toBe(10);
});

test('success p2', () => {
  expect(volwelConsonant(p2)[0]).toBe(5);
  expect(volwelConsonant(p2)[1]).toBe(9);
});
