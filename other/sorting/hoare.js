
const getIntRand = (min, max) => min + Math.floor(
  Math.random() * Math.floor(max)
);

/**
 * Divide and conquer
 * this it the Quicksort function
 */
const sort = (arr) => {
  if (arr.length <=1) return arr;
  if (arr.length === 2) {
    if (arr[0] > arr[1]) {
      let tmp = arr[0];
      arr[0] = arr[1];
      arr[1] = tmp;
    }
    return arr;
  }

  let pivindex = 0;
  if (arr.length === 3) {
    pivindex = 1;
  } else {
    pivindex = getIntRand(1, arr.length - 2);
  }
  console.log(arr.length);
  console.log(pivindex);

  const pivot = arr[pivindex];

  let left = 0;
  let right = arr.length - 1;
  while (left !== right) {
    while((arr[left] < pivot) && (left !== right)) {
      left++;
    }
    while ((arr[right] >= pivot) && (left !== right)) {
      right--;
    }

    if (left<=right) {
      let tmp = arr[left];
      arr[left] = arr[right];
      arr[right] = tmp;
    }
  }
  //TODO solve problem with this one [12, -50, 4]

  let lpart = sort(arr.slice(0, right));
  let rpart = sort(arr.slice(right, arr.lenght));
  let out = [...lpart, ... rpart];

  return out;
}

const input = [12, -50, 4];
//, 55, 3, 0, 5, -2, 44, 245, -45];

console.log(sort(input));