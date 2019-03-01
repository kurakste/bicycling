// It gets min value from array
exports.min = (arr) => {
    return arr.reduce( 
        (acc, el) => (el < acc) ? el : acc
        , Infinity ); 
}

// It gets max value from array
exports.max = (arr) => {
    return arr.reduce( (acc, el) => {
        return (el > acc) ? el : acc;
    }, -Infinity)
}

// It get array and return sorted one.
exports.sort = (arr) => {
    let out = arr.sort( (a,b) => {
        if (a>b) return -1;
        if (a<b) return 1;
        if (a === b) return 0;

    });
    console.log(out);
    return out;
}