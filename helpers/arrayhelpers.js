exports.min = (arr) => {
    return arr.reduce( 
        (acc, el) => (el < acc) ? el : acc
        , Infinity ); 
}

exports.max = (arr) => {
    return arr.reduce( (acc, el) => {
        return (el > acc) ? el : acc;
    }, -Infinity)
}