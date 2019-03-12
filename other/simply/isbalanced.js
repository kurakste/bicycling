/**
 * isBalanced('}{')                      // false
  isBalanced('{{}')                     // false
  isBalanced('{}{}')                    // true
  isBalanced('foo { bar { baz } boo }') // true
  isBalanced('foo { bar { baz }')       // false
  isBalanced('foo { bar } }')           // false
 */

const isBalanced = (string) => {
  if (typeof(string) !== 'string' ) {
    throw new Error('Argument has to be a string type!');
  }
  const open = (string.match(/{/g) || []).length;
  const close = (string.match(/}/g) || []).length;
  return open === close;
}

console.log(isBalanced('foo { bar { baz } boo '));