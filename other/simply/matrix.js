/**
 * Given a string representing a matrix of numbers, 
 * return the rows and columns of that matrix.
 */

const testString = '1 2 3 4 \n 2 3 4 5 \n 2 33 4 55 \n 44 44 55 66';

const matrix = str => str
  .split('\n')
  .map(el => el.trim().split(' '));


console.log(matrix(testString));