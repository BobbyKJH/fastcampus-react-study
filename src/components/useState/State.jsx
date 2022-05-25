import React, { ChangeEventHandler, useState } from "react";

export default function State() {
  const [result, setResult] = useState(0);
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const handleChange = (e) => {
    setResult(num1 + num2);
  };

  return (
    <>
      <input
        type="number"
        onChange={(e) => {
          setNum1(parseInt(e.target.value));
        }}
      />
      +
      <input
        type="number"
        onChange={(e) => {
          setNum2(parseInt(e.target.value));
        }}
      />
      =
      <input type="number" value={result} disabled />
      <button
        onClick={() => {
          setResult(num1 + num2);
        }}
      >
        계산
      </button>
    </>
  );
}
