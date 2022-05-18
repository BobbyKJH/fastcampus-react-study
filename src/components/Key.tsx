import React from "react";

const arr = Array.from(Array(100), (_, i) => i + 1);

export default function Key() {
  // const btn = arr.map((num: number): any => {
  //   if (num % 7 === 0) {
  //     return <button key={num}>7의 배수</button>;
  //   } else if (num % 10 === 0) {
  //     return null;
  //   } else {
  //     return <button key={num}>{num}</button>;
  //   }
  // });

  const btn = arr.map((num: number): any => {
    return (
      <button
        key={num}
        onClick={() => {
          alert(num);
        }}
      >
        {num}
      </button>
    );
  });
  return <div>{btn}</div>;
}
