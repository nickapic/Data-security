// Affine
function mod(n, m) {
  var remain = n % m;
  return Math.floor(remain >= 0 ? remain : remain + m);
}

function affineenc(word, a, b) {
  var encryptedWord = [];
  var chars = word.split("");
  var currInt = 0;
  var currEnc = "";
  chars.forEach(function (currChar) {
    currInt = parseInt(currChar, 36) - 10;
    // E(a,b)(n) = an + b mod 26
    currEnc = mod(a * currInt + b, 26);
    encryptedWord.push(String.fromCharCode(97 + currEnc));
  });
  return encryptedWord.join("");
}

function affinedec(word, a, b) {
  var decryptedWord = [];
  var chars = word.split("");
  var currInt = 0;
  var currEnc = "";
  //a^-1 = m - a
  var a1 = 26 - a;
  chars.forEach(function (currChar) {
    currInt = parseInt(currChar, 36) - 10;
    currEnc = mod(a1 * (currInt - b), 26);
    decryptedWord.push(String.fromCharCode(97 + currEnc));
  });
  return decryptedWord.join("");
}

export { affinedec, affineenc };
