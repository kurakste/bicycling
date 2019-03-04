'use strict'

const app = (arg) => {

//  const payload = arg;
  return new Promise((res, rej) => {
      if (!arg) {
        rej('I need a string');  
        return;
      } 
      setTimeout(() => {
          console.log(arg);
    }, 0);
    res('ok');
  });
} 

console.log('step 1')
app('Hi! How are your?')
    .then(res => console.log(res))
    .catch( err => console.log(err));
console.log('step 3');

