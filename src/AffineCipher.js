// Affine

function encryptWord(word) {
  return new Promise(function (resolve) {
    var chars = word.split("");
    var currInt = 0;
    var currEnc = "";
    chars.forEach(function (currChar) {
      currInt = parseInt(currChar, 36) - 10;
      // E(a,b)(n) = an + b mod 26
      currEnc = mod(args.a * currInt + args.b, 26);
      encryptedWord.push(String.fromCharCode(97 + currEnc));
    });
    return resolve(encryptedWord.join(""));
  });
}

function decryptWord(word) {
  return new Promise(function (resolve) {
    var chars = word.split("");
    var currInt = 0;
    var currEnc = "";
    //a^-1 = m - a
    var a_1 = 26 - args.a;
    chars.forEach(function (currChar) {
      currInt = parseInt(currChar, 36) - 10;
      // D(y) = a^-1 * (y - b) mod 26xx
      currEnc = mod(a_1 * (currInt - args.b), 26);
      decryptedWord.push(String.fromCharCode(97 + currEnc));
    });
    return resolve(decryptedWord.join(""));
  });
}
