function f(arr, n) {
  return arr.filter((item) => item > n);
}

function flat(arr) {
  return arr.flat(Infinity);
}

console.log(f([9, 8, 7, 6, 5, 4, 3, 2, 1], 4));
console.log(flat([1, 4, [34, 1, 20], [6, [6, 12, 8], 6]]));