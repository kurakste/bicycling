function fuzzbuzz(inp) {
  let res = '';
  if (typeof inp !== 'number') throw new Error('Argument must be Nubmer');
  if ((inp % 3 === 0) || (((inp.toString()).search('3') !==-1))) res = 'fuzz';
  if ((inp % 5 === 0) || (((inp.toString()).search('5') !==-1))) res += 'buzz';
  return res;
}

module.exports = fuzzbuzz;