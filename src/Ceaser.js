import React, { useState } from "react";
import caesarShift from "./CeasarCipher";

export const Ceaser = () => {
  const [num1, setnum1] = useState();
  const [num2, setnum2] = useState();
  const [result, setresult] = useState();
  const [mode, setmode] = useState();
  const onSubmit = (e) => {
    e.preventDefault();
    if ((mode = "ceasare")) {
      setresult(caesarShift(num1, parseInt(num2)));
    } else if ((mode = "ceaserd")) {
    } else if ((mode = "multie")) {
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
        <label>Method</label>
        <select
          required
          class="target"
          onChange={(e) => setmode(e.target.value)}
        >
          <option value="selected" selected="selected">
            Please choose the Method
          </option>
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
