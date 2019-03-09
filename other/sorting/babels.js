const input = [66, 23, -3, 3344, 3, 4, 69, 67, 2, 345]

/**
 * bubble sort is a comparison 
 * algorithm and runs in O(n²) time. 
 *  
 * @param {Array} data  - input array
 * @throw error if data is not array
 * @return {Array} sorted array
 */
const sort = (data) => {
  if (Array.isArray(data) === false) throw new Error('Argument must be array');
  const len = data.length;
  if (len === 1) return data;

  let notsorted = true;

  while (notsorted) {
    notsorted = false;
    for (let i = 0; i < len-1; i++) {
      if (data[i] > data[i+1]) {
        let tmp = data[i];
        data[i] = data[i+1];
        data[i+1] = tmp;
        notsorted = true;
      }
    }
  }
  return data;
}
console.log('result: \n', sort(input));