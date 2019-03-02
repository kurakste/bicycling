'use strict'
const {performance} = require('perf_hooks');

const fizzbuzz = (size) => {
    let n = size;
    const iter = (result , acc) => {
        if (acc === 0) return result;
        if ( !(acc % 3) &&  !(acc % 5) ) {
            return iter(['FizzBuzz', ...result], --acc);
        } else if (!(acc % 3)) {
            return iter(['Fizz', ...result], --acc);
        } else if (!(acc % 5)) {
            return iter(['Buzz', ...result ], --acc);  
        } else {
            return iter([acc, ...result ], --acc);
        }
    }
    return iter([], n)
}

/**
 * 
 * Here is a perfomance issue with recursive call.
 * the limit of this approach is about 7 000 
 * iteration. Then it will crash. Classic one keep 
 * over 1 000 000 iteterations.
 * Memory consuption recurcive for 7 000 iterations 
 * is equal that clasic algoritm consume 
 * for 1 000 000
 */
let t = performance.now();
console.log(fizzbuzz(7050));
t = performance.now() - t;

const fizzBuzz = (n) => {
    let result = [];
    while (n > 0) {
      if (n % 3 === 0 && n % 5 === 0) {
        result = [`FizzBuzz`, ...result];
      } else if (n % 3 === 0) {
        result = [`Fizz`, ...result];
      } else if (n % 5 === 0) {
        result = [`Buzz`, ...result];
      } else {
        result = [`${n}`, ...result];
      }
      n -= 1;
    }
    return result;
  }; 

let t = performance.now();
console.log(fizzBuzz(1000000));
t = performance.now() - t;

console.log(`Time consuption: ${t}`);
require('../utils/memusage')();

