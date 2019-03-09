const data = [1, 2, 4, 5, 6, 7 , 11, 23, 123];

const searcher = (arr, val, left = null, right=null) => {
  console.log(`left: ${left} right: ${right} `);
  left = left || 0;
  right =right || arr.length;
  const mid = left + Math.round((right-left)/2);
  console.log(mid);
  if (arr[mid] === val) {
    return mid
  } else if (val > arr[mid]) {
    return searcher(arr, val, mid, right)
  } else { 
    return searcher(arr, val, 0, mid);
  }
};

console.log('res:', searcher(data, 5));