import React from "react";
import Card from "./components/Card";

// const arr = Array.from(Array(100), (_, i) => i + 1);

const users = [
  {
    name: "kim",
    id: 5,
  },
  {
    name: "hello",
    id: 6,
  },
  {
    name: "jin",
    id: 7,
  },
  {
    name: "hi",
    id: 10,
  },
  {
    name: "yellow",
    id: 8,
  },
];

function App() {
  return (
    <>
      {users.map((user) => (
        <Card key={user.id} user={user.name} id={user.id} />
      ))}
    </>
  );
}

export default App;
