const data = [12, 3, 55, 6];

const yellder = (arr, counter = 0) => {
    if (counter === arr.length) return 0; 

    let el = arr[counter];
    let i = counter;


    setTimeout(
        () => { 
            console.log(`The element with index ${i} is ${el}.`)
            yellder(arr, ++i);
        }
        ,3000);
};

yellder(data);
