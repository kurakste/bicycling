const fuzzbuzz = require('./fuzzbuzz');
const fuzz = [3, 6, 9, 12, 13];
const buzz = [5, 10, 20, 25];
const fuzzbuzzarr = [15, 30];
const others = [1,2,4,7,8];

test('fuzz', () => {
  fuzz.forEach(el => {
    expect(fuzzbuzz(el)).toBe('fuzz');
  });
});

test('buzz', () => {
  buzz.forEach(el => {
    expect(fuzzbuzz(el)).toBe('buzz');
  });
});

test('fuzzbuzz', () => {
  fuzzbuzzarr.forEach(el => {
    expect(fuzzbuzz(el)).toBe('fuzzbuzz');
  });
})

test('others', () => {
  others.forEach(el => {
    expect(fuzzbuzz(el)).toBe('');
  });
});