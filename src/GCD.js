import React, { useState } from "react";
import gcd_two_numbers from "./functionality/gcd";

export default function GCD() {
  const [num1, setnum1] = useState();
  const [num2, setnum2] = useState();
  const [result, setresult] = useState();
  const onSubmit = (e) => {
    e.preventDefault();
    setresult(gcd_two_numbers(parseInt(num1), parseInt(num2)));
    console.log(result);
  };
  return (
    <div>
      <form onSubmit={onSubmit} className="">
        <label>Number 1</label>
        <input
          type="number"
          value={num1}
          onChange={(e) => setnum1(e.target.value)}
        />
        <label>Nubmer 2</label>
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
}
