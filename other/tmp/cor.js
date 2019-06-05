const add = (a) => {
  let sum = a;
  const func = (b) => {
    sum = sum + b;
    return func;
  }
  func.inspect = () => sum;
  //func.valueOf = () => sum;
  return func;
}

console.log(add(2)(3)(5));
