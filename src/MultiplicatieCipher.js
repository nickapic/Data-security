function modInverse(a, m) {
  [a, m] = [Number(a), Number(m)];
  a = ((a % m) + m) % m;
  if (!a || m < 2) {
    return NaN;
  }
  const s = [];
  let b = m;
  while (b) {
    [a, b] = [b, a % b];
    s.push({ a, b });
  }
  if (a !== 1) {
    return NaN;
  }
  let x = 1;
  let y = 0;
  for (let i = s.length - 2; i >= 0; --i) {
    [x, y] = [y, x - y * Math.floor(s[i].a / s[i].b)];
  }
  return ((y % m) + m) % m;
}

const multiplicative = function (str, amount) {
  let output = "";
  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i);
    let value = char(char) - 97;
    let ciphertext = (amount * value) % 26;
    var newchar = char(ciphertext + 97);
    output += newchar;
  }
  return output;
};

const desmultiplicative = function (str, a) {
  let output = "";
  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i);
    let value = char(char) - 97;
    let deciphertext = (modInverse(a, 26) * (value - a)) % 26;
    var newchar = char(deciphertext + 97);
    output += newchar;
  }
  return output;
};
function handlermulti(word, a, encordec) {
  if (encordec === "enc") {
    multiplicative(word, a);
  } else if (encordec === "dec") {
    desmultiplicative(word, a);
  }
}
export { multiplicative, desmultiplicative };
