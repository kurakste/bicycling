const input = [
  1, [ 2, [ 3, 1]] , 3, [ 2, 2, [ 3, 4], 3], 3,
  7, 4, [ 3, 5]
];

/*
 We need function who map array of this type
 well we have two type of argumens. Arrays & not array
 If its array, we have to iterate it and aply our function
 for each elements of array. If its nots array we have to
 aply callback function for it. That's it.
*/

const mdmap = (arg, cb) => {
  if (!Array.isArray(arg)) return cb(arg);
  const out = [];
  arg.forEach(el => 
    out.push(mdmap(el, cb)));
  return out;
};

// const mdmap = function(cb) {
//     return _map(this, cb);
// };
//const xx = mdmap.bind(input);
Array.prototype.mdmap 
    = function (cb) { return mdmap(this, cb) };

console.log(
  input.mdmap(el=> el*3)
);