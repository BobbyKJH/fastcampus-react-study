import React, { useState, useEffect } from "react";

export default function Test1() {
  const [value, setValue] = useState("");
  const [time, setTime] = useState(0);
  useEffect(() => {
    const time = setTimeout(() => {
      console.log(value);
    }, 3000);

    return () => {
      // clean  up
      clearTimeout(time);
    };
  }, [value]);

  useEffect(() => {
    setTimeout(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  }, []);
  const Time = () => {
    setTime();
  };
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      {time}
    </div>
  );
}
