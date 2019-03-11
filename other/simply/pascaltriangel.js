/**
 * Compute Pascal's triangle up to a 
 * given number of rows.
 * @params number {integer} - nuber of rows.
 */

const triangel = (rows) => {

  let out =[[1]];

  const addString = (arr) => {
    const newrow = [];
    arr[arr.length-1]
      .forEach((el, i) => {
        if ((i === 0)) {
          newrow.push(el);
        } else {
          newrow.push(el + arr[arr.length-1][i-1]);
        } 
      });
    newrow.push(1);
    arr.push(newrow);
    return arr;
  }

  if (rows === 1) return [[1]];
  let counter = 2;
  while ( counter <= rows ) {
    out = addString(out);
    counter++;
  }
  
  return out;
}

console.log(triangel(10));