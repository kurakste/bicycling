const matrix = require('./matrix');

/**
 * This function gets string with letters as argument 
 * & return back string with morsecode divided one 
 * whitespace between letters & three whitespace between 
 * words. 
 */ 
 coder = (input) => {
    //clear & prepear input
    const inarr = input
        .trim()
        .toLowerCase()
        .split(' ')
   //to code letters in morsecode 
    let out = inarr
        .map(el => el.split('').map( e => matrix[e]));
    // join array to string
    out = out
        .map(el => el.join(' '))
        .join('   ');

    return out;
} 
module.exports = coder;
