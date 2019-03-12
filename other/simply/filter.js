/**
 * Bycicling filter.
 */

function filter(cb) {
  const out = [];
  this.forEach(el => {
    if (cb(el)) out.push(el);
  });
  return out;
}

const test = [1, 23, 34, 5, -1];

test.ft = filter;
console.log(test.ft(el => el<5));