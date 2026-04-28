function countLetters(str) {
  const map = new Map();

  for (const char of str) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  return map;
}

function isPrime(x) {
  if (x < 2n) return false;
  if (x === 2n) return true;
  if (x % 2n === 0n) return false;

  for (let i = 3n; i * i <= x; i += 2n) {
    if (x % i === 0n) return false;
  }
  return true;
}

function getPrime(n) {
  if (n < 1) return;

  let count = 0;
  let num = 2n;

  while (true) {
    if (isPrime(num)) {
      count++;
      if (count === n) {
        return num;
      }
    }
    num++;
  }
}

console.log(countLetters("qwertyqwqeww"));
console.log(getPrime(3));
