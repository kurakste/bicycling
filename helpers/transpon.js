// Function swaps keys vs values.

module.exports  = (inarr) => {
    const tmp = Object.keys(inarr);
    return tmp.reduce( (ac, el) => {
        ac[inarr[el]] = el;
        return ac;
    } , {});
}