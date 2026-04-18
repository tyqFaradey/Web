function firstNoDups(str) {
  for (let charOut of str) {
    let num = 0;
    for (let charIn of str) {
      if (charOut === charIn) num++;
    }
    if (num == 1) return charOut;
  }
  return str[0];
}

function randomizedString(n) {
  const chars =
    "1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
  let result = "";

  for (let i = 0; i < n; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    result += chars[randomIndex];
  }

  return result;
}

function noDups(str) {
  return Array.from(new Set(str.split(""))).join("");
}

console.log(firstNoDups(prompt("string:", "")));
console.log(randomizedString(Number(prompt("string:", 1))));
console.log(noDups(prompt("string:", "")));
