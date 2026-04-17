function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

const n = Number(prompt("Enter n: ", 2));
for (let i = 2; i <= n; i++) {
  if (isPrime(i)) console.log(i)
}
