function maxDif(arr) {
  let max = -1;
  for (let i in arr) {
    for (let j = i; j < arr.length; j++) {
      if (max < arr[i] - arr[j]) max = arr[i] - arr[j];
    }
  }
  return max;
}

function noDups(arr) {
  return Array.from(new Set(arr));
}

function isDoneOnly(arr) {
  return arr.filter((item) => item.isDone === true);
}

console.log(maxDif([9, 8, 7, 6, 5, 4, 3, 2, 1]));
console.log(noDups([9, 9, 1, 6, 8, 7, 6, 5, 4, 3, 2, 1]));
console.log(
  isDoneOnly([
    { id: 1, isDone: true },
    { id: 2, isDone: false },
    { id: 3, isDone: true },
  ]),
);
