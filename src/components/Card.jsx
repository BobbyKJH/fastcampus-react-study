import React from "react";

// const users = [
//   {
//     name: "kim",
//     id: 5,
//   },
//   {
//     name: "hello",
//     id: 6,
//   },
//   {
//     name: "jin",
//     id: 7,
//   },
//   {
//     name: "hi",
//     id: 10,
//   },
//   {
//     name: "yellow",
//     id: 8,
//   },
// ];

const Card = ({ user, id }) => {
  return (
    <div key={id}>
      <p>name: {user}</p>
      <p>id: {id}</p>
    </div>
  );
};

export default Card;
