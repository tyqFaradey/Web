function reverse(n) {
  return Number(n.toString().split("").reverse().join(""));
}

function noDups(n) {
  return Number(Array.from(new Set(n.toString().split(""))).join(""));
}

function digitNumber(n, d) {
  return Number(n.toString().split(d).length - 1);
}

function a(n) {
  const bin = n.toString(2);
  let maxZeros = 0;
  let maxOnes = 0;

  let currentZeros = 0;
  let currentOnes = 0;

  for (let char of bin) {
    if (char === "0") {
      currentZeros++;
      currentOnes = 0;
    } else {
      currentOnes++;
      currentZeros = 0;
    }

    maxZeros = Math.max(maxZeros, currentZeros);
    maxOnes = Math.max(maxOnes, currentOnes);
  }

  return {
    bin,
    maxZeros,
    maxOnes,
  };
}

const n = Number(prompt("number:", 0));

console.log(reverse(n));
console.log(noDups(n));

const d = Number(prompt("digit:", 0));

console.log(digitNumber(n, d));
console.log(a(n));
