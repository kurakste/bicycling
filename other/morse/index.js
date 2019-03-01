const decoder = require('./decoder');
const coder = require('./coder');
const code ='... --- ...   ... --- ...   ... --- ...';
console.log(coder('SOS SOS SOS'));
console.log(decoder(code));