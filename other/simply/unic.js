/**
 * Реализуйте функцию uniq(), которая принимает массив 
 * чисел и возвращает уникальные числа, найденные в нём. 
 * Может ли функция решить эту задачу за время O(N)?
 */

const test = [12, 3, 4, 5];
 
function uniq(arr) {
  const len = arr.length;
  const out = [];
  let counter = 0;
  for (let i = 0; i < len; i++) {
    let flag = true;
    for (let j = 0; j < len; j++) {
      if (i === j) continue;
      if (arr[i] === arr[j]) {
        flag = false;
        break;
      }
      console.log(counter++);
    }
    if (flag) out.push(arr[i]); 
  }
  return out;
}

function isBig(thing) {
  if (thing == 0 || thing == 1 || thing == 2) {
    return false
  }
  return true
}

console.log(isBig([3]))    // false
console.log(isBig([1]))    // false
console.log(isBig([2]))    // false


