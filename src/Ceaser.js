import React, { useState } from "react";
import handleraffine, { affinedec, affineenc } from "./AffineCipher";
import AutoKeyCipher from "./Autokey";
import handlerceaser, { caesarShift, ceaserdecrypt } from "./CeasarCipher";
import { multiplicative, desmultiplicative } from "./MultiplicatieCipher";

export const Ceaser = () => {
  const [num1, setnum1] = useState();
  const [num2, setnum2] = useState();
  const [num3, setnum3] = useState(0);
  const [result, setresult] = useState();
  const [mode, setmode] = useState();

  const onSubmit = (e) => {
    e.preventDefault();
    if (mode === "ceasere") {
      setresult(caesarShift(num1, parseInt(num2), "enc"));
    } else if (mode === "ceaserd") {
      setresult(ceaserdecrypt(num1, parseInt(num2)));
    } else if (mode === "multie") {
      setresult(multiplicative(num1, parseInt(num2), "enc"));
    } else if (mode === "multid") {
      setresult(desmultiplicative(num1, parseInt(num2)), "dec");
    } else if (mode === "affinee") {
      setresult(affineenc(num1, parseInt(num2), parseInt(num3)));
    } else if (mode === "affined") {
      setresult(affinedec(num1, parseInt(num2), parseInt(num3)));
    } else if (mode === "autokeye") {
      setresult(AutoKeyCipher(num1, parseInt(num2), "enc"));
    } else if (mode === "autokeyd") {
      setresult(AutoKeyCipher(num1, parseInt(num2), "dec"));
    }
    console.log(result);
    console.log(mode);
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="">
        <label>String</label>
        <input
          type="text"
          value={num1}
          required
          onChange={(e) => setnum1(e.target.value)}
        />
        <label>Key</label>
        <input
          type="number"
          value={num2}
          required
          onChange={(e) => setnum2(e.target.value)}
        />
        <label>Key 2 (For Affine) </label>
        <input
          type="number"
          value={num3}
          required
          onChange={(e) => setnum3(e.target.value)}
        />
        <label>Method</label>
        <select
          required
          class="target"
          onChange={(e) => setmode(e.target.value)}
        >
          <option value="selected" selected="selected">
            Please choose the Method
          </option>
          <option value="ceasere">Ceaser Encrypt</option>
          <option value="ceaserd">Ceaser Decrypt</option>
          <option value="autokeye">Autokey Encrypt</option>
          <option value="autokeyd">Autokey Decrypt</option>
          <option value="affinee">Affine Encrypt</option>
          <option value="affined">Affine Decrypt</option>
          <option value="multie">Multiplicative Encrypt</option>
          <option value="multid">Multiplicative Decrypt</option>
        </select>
        <button>Submit</button>
      </form>
      <h3>Result : {result}</h3>
    </div>
  );
};
