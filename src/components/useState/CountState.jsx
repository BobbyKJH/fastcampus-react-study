import React, { useState } from "react";

export default function CountState() {
  const [num, setNum] = useState(0);
  const increase = () => {
    setNum((prev) => prev + 1);
  };
  return <div onClick={increase}>{num}</div>;
}
