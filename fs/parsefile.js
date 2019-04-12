const fs = require('fs');
const dJSON = require('dirty-json');
const data = fs.readFileSync('./data/performa-magazine.json', 'utf8');

//const out = dJSON.parse(data);

console.log(JSON.parse(data));


