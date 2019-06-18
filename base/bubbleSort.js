'use strict'

function bubbleSort1(arr) {
  let counter = 0;
  for (let a = 0; a<arr.length; a++) {
    let sorted = true;
    for (let i = 0; i < arr.length - 1; i++) {
      counter++;
      if (arr[i] > arr[i + 1]) {
        let tmp = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = tmp;
        sorted = false;
      }
    }
    if (sorted) return { arr, counter };
  }
  return { arr, counter };
}

function bubbleSort2(a) {
  var swapped;
  let counter = 0;
  do {
    swapped = false;
    for (var i = 0; i < a.length - 1; i++) {
      counter++
      if (a[i] > a[i + 1]) {
        var temp = a[i];
        a[i] = a[i + 1];
        a[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return { a, counter }
}

const atest = [100, 50, 20, 10, 5, 1, 1001];
const btest = [100, 50, 20, 10, 5, 1, 1001];
const atest1 = [1, 5, 10, 20, 50, 100, -100];
const btest1 = [1, 5, 10, 20, 50, 100, -100];
const atest2 = [1000, 50, 210, -3, 1220, 223350, 101100, 3];
const btest2 = [1000, 50, 210, -3, 1220, 223350, 101100, 3];
const a = [1, 2];

console.log(bubbleSort1(atest));
console.log(bubbleSort2(btest));
console.log(bubbleSort1(atest1));
console.log(bubbleSort2(btest1));
console.log(bubbleSort1(atest2));
console.log(bubbleSort2(btest2));
