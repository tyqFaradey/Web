function sumZero2(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) result++;
    }
  }
  return result;
}

function sumZero3(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        if (arr[i] + arr[j] + arr[k] === 0) result++;
      }
    }
  }
  return result;
}

console.log(sumZero2([-1, 2, 4, 7, -4, 1, -2]));
console.log(sumZero3([-1, 2, 4, 7, -4, 1, -2]));
