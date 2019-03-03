const fs = require('fs');
const _= require('underscore');
console.log(process.cwd());
console.log(process.cwd());

let data = fs.readFileSync('./data/goods.json');

data = JSON.parse(data);

let out = _(data).pluck('name').map( el => '_' + el);

out = Object.values(out);

console.log(_(out).uniq());
require('../../utils/memusage')();