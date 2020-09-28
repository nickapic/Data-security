import React, { useState } from "react";
import caesarShift from "./CeasarCipher";

export const Ceaser = () => {
  const [num1, setnum1] = useState();
  const [num2, setnum2] = useState();
  const [result, setresult] = useState();
  const onSubmit = (e) => {
    e.preventDefault();
    setresult(caesarShift(num1, parseInt(num2)));
    console.log(result);
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="">
        <label>String</label>
        <input
          type="text"
          value={num1}
          onChange={(e) => setnum1(e.target.value)}
        />
        <label>Key</label>
        <input
          type="number"
          value={num2}
          onChange={(e) => setnum2(e.target.value)}
        />
        <button>Submit</button>
      </form>
      <h3>Result : {result}</h3>
    </div>
  );
};
