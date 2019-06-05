const arr = [2012, 4, 10, 2010];

// const yeilder = (function* yeilderMaker() {
//   var index = 0;
//   while (index < arr.length) {
//     yield arr[index++];
//   }
// })()

// const delaiedYeld = () => {
//   const curent = yeilder.next().value;
//   if (curent) {
//     setTimeout(() => {
//       console.log(curent)
//       delaiedYeld()
//     }, 1000);
//   }
// }

// delaiedYeld();

arr.forEach((el, i) => {
  setTimeout(() =>console.log(el), 3000*(i+1));
});