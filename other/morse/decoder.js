const matrix = require('./matrix');
const transpon = require('../../helpers/transpon');

/** 
* This function gets string with morsecode divided 
* one whitespace between letters & three whitespace 
* between words. As a result function give us decoded
* string.
*/
const decoder = (input) => {
    
  const _matrix = transpon(matrix);
  //divide input on words & letters
  let out = input
    .split('   ')
    .map(el => el.split(' '));
  // map input via _matrix and 
  out = out
    .map( el => el.map( e => _matrix[e]).join(''))
    .join(' ')
    .toUpperCase();
  return out;
} 

module.exports = decoder;