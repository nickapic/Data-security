const caesarShift = function (str, amount) {
  let output = "";
  for (let i = 0; i < str.length; i++) {
    let c = str[i];
    if (c.match(/[a-z]/i)) {
      let code = str.charCodeAt(i);
      if (code >= 65 && code <= 90) {
        c = String.fromCharCode(((code - 65 + amount) % 26) + 65);
      } else if (code >= 97 && code <= 122) {
        c = String.fromCharCode(((code - 97 + amount) % 26) + 97);
      }
    }
    output += c;
  }
  return output;
};
const ceaserdecrypt = function (encstring, key) {
  let plainText = "";
  let plainCharacter = "";
  for (var i = 0; i < encstring.length; i++) {
    let encryptedCharacter = encstring.charCodeAt(i);
    if (encryptedCharacter >= 97 && encryptedCharacter <= 122) {
      plainText += String.fromCharCode(
        ((encryptedCharacter - 97 - key + 26) % 26) + 97
      );
    } else if (encryptedCharacter >= 65 && encryptedCharacter <= 90) {
      plainText += String.fromCharCode(
        ((encryptedCharacter - 65 - key + 26) % 26) + 65
      );
    } else {
      plainText += String.fromCharCode(plainCharacter);
    }
  }
  return plainText;
};

function handlerceaser(word, a, encordec) {
  if (encordec === "enc") {
    console.log();
    caesarShift(word, a);
  } else if (encordec === "dec") {
    ceaserdecrypt(word, a);
  }
}
export { caesarShift, ceaserdecrypt };
