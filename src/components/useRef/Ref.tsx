import React, { useState, useRef } from "react";

export default function Ref() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [input, setInput] = useState("");

  const handleInput = (e: any): any => {
    setInput(e.target.value);
  };

  const handleChange = () => {
    if (inputRef.current) {
      setInput("");
      inputRef.current.focus();
    }
  };
  return (
    <div>
      <p>현재 value: {input}</p>
      <input type="text" ref={inputRef} value={input} onChange={handleInput} />
      <button onClick={handleChange}>리셋</button>
    </div>
  );
}
