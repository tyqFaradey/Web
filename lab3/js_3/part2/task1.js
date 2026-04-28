function* random(min, max) {
  while (true) {
    yield Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

function* padovan() {
  let p0 = 1,
    p1 = 1,
    p2 = 1;

  yield p0;
  yield p1;
  yield p2;

  while (true) {
    const next = p0 + p1;
    yield next;

    p0 = p1;
    p1 = p2;
    p2 = next;
  }
}

function* primes() {
  const found = [];

  let num = 2;

  while (true) {
    let isPrime = true;

    for (const p of found) {
      if (p * p > num) break;
      if (num % p === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      found.push(num);
      yield num;
    }

    num++;
  }
}

var gen = random(0, 100);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log("---");

gen = padovan();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log("---");

gen = primes();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
