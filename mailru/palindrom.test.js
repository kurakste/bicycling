let palindrom = require('./palindrom');

let p1 = 'А роза упала на лапу Азора';
let p2 = 'Аргентина манит негра';
let p3 = 'Не палиндромная строка';

// test('bad argument type', () => {
//   expect(palindrom(22)).toThrowError(new Error('Argument must be as string.'));
// });

test('success', () => {
  expect(palindrom(p1)).toBe(true);
  expect(palindrom(p2)).toBe(true);
});


test('false', () => {
  expect(palindrom(p3)).toBe(false);
});