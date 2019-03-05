const input = [
    { id: 'mammals', parent: null },
    { id: 'dogs', parent: 'mammals' },
    { id: 'cats', parent: 'mammals' },
    { id: 'chihuahua', parent: 'dogs' },
    { id: 'labrador', parent: 'dogs' },
    { id: 'persian', parent: 'cats' },
    { id: 'siamse', parent: 'cats' },
    { id: 'Lucy', parent: 'siamse' },
];

const makeTree = (input, parent) => {
    const node = {};

    input
        .filter( el => el.parent === parent)
        .forEach(el => {
            node[el.id] = makeTree(input, el.id);
        });

    return node;
}

console.log(
    JSON.stringify(
        makeTree(input, null)
        , null, 2)
);