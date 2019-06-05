function fibonachi(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibonachi(n-2) + fibonachi(n-1)
}

module.exports = fibonachi;