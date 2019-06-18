
function bubbelSort(arr) {
  for (let i = arr.length-1; i > 0 ; i--) {
    for (let j = 0; j < i; j++ ) {
      let tmp = null;
      let swaped = false;
      if (arr[j]>arr[j+1]) {
        tmp = arr[j+1];
        arr[j+1] = arr[j];
        arr[j] = tmp;
        swaped = true;
      }
      console.log(`j=${j}, j+1=${j+1}, arr[j]=${arr[j]}, arr[j+1]=${arr[j+1]} was swaped: ${swaped}. \n`)
    }
  }
  return arr;
}

const test = [100, 2, 8, 12, 1, 56, 5];

console.log(bubbelSort(test));